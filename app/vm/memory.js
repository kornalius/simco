import hexy from 'hexy'
import { hex } from '../globals.js'

export const data_type_sizes = {
  i8: 1,
  s8: 1,
  i16: 2,
  s16: 2,
  i32: 4,
  s32: 4,
  f32: 4,
  str: 64,
}

export const data_type_fns = {
  i8: 'Uint8',
  s8: 'Int8',
  i16: 'Uint16',
  s16: 'Int16',
  i32: 'Uint32',
  s32: 'Int32',
  f32: 'Float32',
}

export var data_type_size = type => _.isNumber(type) ? type : data_type_sizes[type]

export class Memory {

  constructor (main) {
    this._size = main.defaults('memory.size')
    this._top = 0
    this._bottom = this._top + this._size - 1

    this._buffer = new ArrayBuffer(this._size)

    this._data = new Uint8Array(this._buffer)

    this._view = new DataView(this._buffer)
  }

  tick (t) {
  }

  reset () {
    return this.clear()
  }

  destroy () {
    this._view = null
    this._data = null
    this._buffer = null
  }

  get main () { return this._main }

  get buffer () { return this._buffer }
  get data () { return this._data }
  get view () { return this._view }

  get top () { return this._top }
  get bottom () { return this._bottom }
  get size () { return this._size }

  clear (d = 0) {
    this.fill(0, this._top, this._size)
    return this
  }

  db (type, addr, args) {
    let sz = data_type_sizes[type]
    let fn = this._view['set' + data_type_fns[type]]

    for (let a of args) {
      fn.call(this._view, addr, a)
      addr += sz
    }

    return addr
  }

  ld (type, addr) {
    return this._view['get' + data_type_fns[type]](addr, this._main.LE)
  }

  ldb (addr) { return this.ld('i8', addr) }

  ldw (addr) { return this.ld('i16', addr) }

  ldd (addr) { return this.ld('i32', addr) }

  ldf (addr) { return this.ld('f32', addr) }

  st (type, addr, value) {
    this._view['set' + data_type_fns[type]](addr, value, this._main.LE)
  }

  stb (addr, value) { this.st('i8', addr, value) }

  stw (addr, value) { this.st('i16', addr, value) }

  std (addr, value) { this.st('i32', addr, value) }

  stf (addr, value) { this.st('f32', addr, value) }

  ldl (addr, size) {
    return this._data.slice(addr, addr + size - 1)
  }

  lds (addr, size = data_type_sizes.str) {
    const data = this._data
    let bottom = Math.min(addr + size - 1, this._bottom)
    let s = ''

    while (addr <= bottom) {
      let c = data[addr++]
      if (c === 0) {
        break
      }
      else {
        s += String.fromCharCode(c)
      }
    }

    return s
  }

  stl (addr, value, size) {
    this._data.set(value.subarray(0, size || value.byteLength), addr)
  }

  sts (addr, str, size = data_type_sizes.str - 1) {
    let a = _.map(str.split(''), i => i.charCodeAt(0))
    a.length = Math.min(size, a.length)
    this.fill(0, addr, size)
    this._data.set(a, addr)
  }

  fill (value, top, size) {
    this._data.fill(value || 0, top, top + size)
  }

  copy (src, tgt, size) {
    this._data.copyWithin(tgt, src, src + size - 1)
  }

  read (addr, type = 'i8') {
    let value
    if (_.isNumber(type)) {
      value = this._data.slice(addr, addr + type - 1)
    }
    else if (type === 'str') {
      value = this.lds(addr)
    }
    else {
      value = this.ld(type, addr)
    }
    return value
  }

  write (value, addr, type = 'i8') {
    let sz
    if (_.isNumber(type)) {
      this._data.set(value.subarray(0, type - 1), addr)
      sz = type
    }
    else if (type === 'str') {
      this.sts(addr, value)
      sz = data_type_sizes[type]
    }
    else {
      this.st(type, addr, value)
      sz = data_type_sizes[type]
    }
    return addr + sz
  }

  from_string (addr, str, mask) {
    const data = this._data
    let w = str.length

    for (let x = 0; x < w; x++) {
      let c = str[x]
      data[addr++] = mask ? mask[c] : c
    }

    return addr
  }

  from_array (addr, arr, mask) {
    let h = arr.length

    for (let y = 0; y < h; y++) {
      if (_.isArray(arr[y])) {
        addr = this.from_array(addr, arr[y], mask)
      }
      else {
        addr = this.from_string(addr, arr[y], mask)
      }
    }

    return addr
  }

  from_2d_array (addr, frame, count, width, arr, mask) {
    let h = arr.length
    let fullWidth = width * count
    let offset = frame * width

    for (let y = 0; y < h; y++) {
      let ti = addr + y * fullWidth + offset
      if (_.isArray(arr[y])) {
        this.from_2d_array(ti, frame, count, width, arr[y], mask)
      }
      else {
        this.from_string(ti, arr[y], mask)
      }
    }
  }

  to_string (addr, size, mask) {
    const data = this._data
    let s = ''

    let ti = addr
    for (let y = 0; y < size; y++) {
      let d = data[ti++]
      s += String.fromCharCode(mask ? mask[d] : d)
    }

    return s
  }

  to_array (addr, w, h, mask) {
    let arr = []

    for (let y = 0; y < h; y++) {
      arr.push(this.to_string(addr + y * w, w, mask))
    }

    return arr
  }

  dump (addr = 0, size = 1024) {
    console.log('Dumping', size, ' bytes from memory at ', hex(addr))
    console.log(hexy.hexy(this._buffer, { offset: addr, length: size, width: 16, caps: 'upper', indent: 2 }))
  }

}
