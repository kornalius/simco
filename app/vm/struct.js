import { data_type_size } from './memory.js'


export default class Struct {

  constructor (main, offset, format) {
    this._main = main

    if (_.isObject(offset)) {
      format = offset
      offset = undefined
    }

    this.format = format
    let sz = this.format_size(format)
    this._top = offset || this.memoryManager.alloc(sz)
    this._bottom = this._top + sz - 1

    this.assign_properties(this._top)

    return this
  }

  reset () {
    this.fill(0, this._top, this.size())
  }

  destroy () {
    this.memoryManager.free(this._top)
  }

  get main () { return this._main }
  get memory () { return this._main.memory }
  get memoryManager () { return this._main.memoryManager }

  get top () { return this._top }
  get bottom () { return this._bottom }

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
        size = this[n].bottom - this[n].top
      }
      else {
        size = this.size(type)
        if (!_.isNumber(type) && ['i16', 's16', 'i32', 's32', 'f32'].indexOf(type) !== -1) {
          while (offset % 2 !== 0) { offset++ }
        }
        this[n] = { name, type, size, top: offset, bottom: offset + size - 1 }
      }

      let entry = this[n]

      Object.defineProperty(this, name, {
        enumerable: true,
        get: () => this.read(entry.top, entry.type),
        set: value => { this.write(value, entry.top, entry.type) },
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
      return this._bottom - this._top
    }
    else if (type instanceof Struct) {
      return type.size()
    }
    else {
      return data_type_size(type)
    }
  }

  from_buffer (buf, offset = 0) {
    this.memory.data.set(buf, offset)
    return this
  }

  to_buffer (buf, offset = 0) {
    if (!buf) {
      buf = new ArrayBuffer(this.size())
    }
    buf.set(this.memory.data, offset)
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
