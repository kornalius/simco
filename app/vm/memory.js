import hexy from 'hexy'
import { hex } from '../../globals.js'

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
    this._size = main.default('memory.size')
    this._top = 0
    this._bottom = this._top + this._size - 1

    this._buffer = new ArrayBuffer(this._size)

    this._data = new Uint8Array(this._buffer)

    this._view = new DataView(this._buffer)

    this._fns = {
      i8: 'Uint8',
      s8: 'Int8',
      i16: 'Uint16',
      s16: 'Int16',
      i32: 'Uint32',
      s32: 'Int32',
      f32: 'Float32',
    }
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

  chk_bounds (addr, sz = 4) {
    if (addr < this._top || addr + sz > this._bottom) {
      this.hlt(0x08)
    }
    return this
  }


  db (type, addr, ...args) {
    let sz = data_type_sizes[type]
    let fn = this._view['set' + this._fns[type]]
    for (let a of args) {
      fn.call(this._view, addr, a)
      addr += sz
    }
    return addr
  }

  db_bc (type, addr, ...args) {
    this.chk_bounds(addr, args.length * data_type_sizes[type])
    this.db(type, addr, ...args)
  }

  ld (type, addr) { return this._view['get' + this._fns[type]](addr, _vm.littleEndian) }

  ldb (addr) { return this.ld('i8', addr) }

  ldw (addr) { return this.ld('i16', addr) }

  ldd (addr) { return this.ld('i32', addr) }

  ldf (addr) { return this.ld('f32', addr) }

  ld_bc (type, addr) {
    this.chk_bounds(addr, data_type_sizes[type])
    return this.ld(type, addr)
  }

  st (type, addr, value) { this._view['set' + this._fns[type]](addr, value, _vm.littleEndian) }

  stb (addr, value) { this.st('i8', addr, value) }

  stw (addr, value) { this.st('i16', addr, value) }

  std (addr, value) { this.st('i32', addr, value) }

  stf (addr, value) { this.st('f32', addr, value) }

  st_bc (type, addr, value) {
    this.chk_bounds(addr, data_type_sizes[type])
    this.st(type, addr, value)
  }

  ldl (addr, size) { return this._data.slice(addr, addr + size - 1) }

  ldl_bc (addr, size) {
    this.chk_bounds(addr, size)
    return this.ldl(addr, size)
  }

  lds (addr, size) {
    if (_.isString(addr)) {  // assembler will use lds("")
      return addr
    }

    let s = ''
    size = size || data_type_sizes.str
    let bottom = Math.min(addr + size - 1, this._bottom)
    let mem = this._data
    while (addr <= bottom) {
      let c = mem[addr++]
      if (c === 0) {
        break
      }
      else {
        s += String.fromCharCode(c)
      }
    }
    return s
  }

  lds_bc (addr, size) {
    this.chk_bounds(addr, Math.min(size || 0, data_type_sizes.str))
    return this.lds(addr, size)
  }

  stl (addr, value, size) { this._data.set(value.subarray(0, size || value.byteLength), addr) }

  stl_bc (addr, value, size) {
    this.chk_bounds(addr, Math.min(size || 0, value.byteLength))
    this.stl(addr, value, size)
  }

  sts (addr, str, size) {
    size = size || data_type_sizes.str - 1
    let a = _.map(str.split(''), i => i.charCodeAt(0))
    a.length = Math.min(size, a.length)
    this.fill(0, addr, size)
    this._data.set(a, addr)
  }

  sts_bc (addr, str, size) {
    this.chk_bounds(addr, Math.min(size, data_type_sizes.str))
    this.sts(addr, str, size)
  }

  fill (value, top, size) { this._data.fill(value || 0, top, top + size) }

  fill_bc (value, top, size) {
    this.chk_bounds(top, size)
    this.fill(value, top, size)
  }

  copy (src, tgt, size) { this._data.copyWithin(tgt, src, src + size - 1) }

  copy_bc (src, tgt, size) {
    this.chk_bounds(src, size)
    this.chk_bounds(tgt, size)
    this.copy(src, tgt, size)
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

  dump (addr = 0, size = 1024) {
    console.log('Dumping', size, ' bytes from memory at ', hex(addr))
    console.log(hexy.hexy(this._buffer, { offset: addr, length: size, width: 16, caps: 'upper', indent: 2 }))
  }

}
