import { data_type_size } from './memory.js'


export class Struct {

  constructor (offset, format) {
    if (_.isObject(offset)) {
      format = offset
      offset = null
    }

    this.format = format
    let sz = this.format_size(format)
    offset = offset || _vm.alloc(sz)

    this.mem_init(offset, sz)

    this.assign_properties(offset)

    return this
  }

  reset () {
    this.mem_reset()
    this.fill(0, this.mem_top, this.mem_size)
  }

  destroy () {
    _vm.free(this.mem_top)
    this.mem_shut()
  }

  format_by_name (name) { return _.find(this.format, { name }) }

  assign_properties (offset) {
    for (let name of this.names) {
      let f = this.format_by_name(name)

      let type = f.type
      let value = f.value || 0
      let size
      let n = '_' + name

      if (_.isObject(type)) {
        this[n] = new Struct(offset, type)
        size = this[n].mem_bottom - this[n].mem_top
      }
      else {
        size = this.size(type)
        if (!_.isNumber(type) && ['i16', 's16', 'i32', 's32', 'f32'].indexOf(type) !== -1) {
          while (offset % 2 !== 0) { offset++ }
        }
        this[n] = { name, type, mem_size: size, mem_top: offset, mem_bottom: offset + size - 1 }
      }

      let entry = this[n]

      Object.defineProperty(this, name, {
        enumerable: true,
        get: () => this.read(entry.mem_top, entry.type),
        set: value => { this.write(value, entry.mem_top, entry.type) },
      })

      if (value) {
        this[name] = value
      }

      offset += size
    }

    return offset
  }

  format_size (fmt) {
    let sz = 0
    let names = _.map(fmt, st => st.name)

    for (let name of names) {
      let f = _.find(this.format, { name })
      let type = f.type
      sz += _.isObject(type) ? this.format_size(type) : data_type_size(type)
    }

    return sz
  }

  get names () { return _.map(this.format, st => st.name) }

  size (type) {
    if (!type) {
      return this.mem_bottom - this.mem_top
    }
    else if (type instanceof Struct) {
      return type.size()
    }
    else {
      return data_type_size(type)
    }
  }

  from_buffer (buf, offset = 0) {
    this.mem_array.set(buf, offset)
    return this
  }

  to_buffer (buf, offset = 0) {
    if (!buf) {
      buf = new ArrayBuffer(this.size())
    }
    buf.set(this.mem_array, offset)
    return buf
  }

  from_object (obj) {
    for (let name of this.names) {
      if (this[name] instanceof Struct) {
        this[name].from_object(obj[name])
      }
      else {
        this[name] = obj[name]
      }
    }
    return this
  }

  to_object () {
    let s = {}
    for (let name of this.names) {
      let value = this[name]
      if (value instanceof Struct) {
        s[name] = value.to_object()
      }
      else {
        s[name] = value
      }
    }
    return s
  }

}
