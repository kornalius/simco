import { defaults, runtime_error } from '../globals.js'
import { data_type_size } from './memory.js'

class StackEntry {

  constructor (stack, addr, max = 255, type = defaults.type, size = 8, rolling = false) {
    this._stack = stack

    size = size || data_type_size(type)

    this._stack._list[this.top] = this
  }

  reset () {
    this.ptr = this.top
  }

  destroy () {
    this._stack._list[this.top] = undefined
  }

  push (...value) {
    let sz = this.size
    let t = this.type
    let top = this.top
    let bottom = this.bottom
    let rolling = this.rolling
    for (let v of value) {
      if (rolling && this.ptr >= bottom) {
        this.copy(top + sz, top, this.bottom - sz)
        this.ptr -= sz
      }
      if (this.ptr + sz < bottom) {
        this.write(v, this.ptr, t)
        this.ptr += sz
      }
      else {
        runtime_error(0x03)
        break
      }
    }
  }

  pop () {
    if (this.ptr > this.top) {
      this.ptr -= this.size
      return this.read(this.ptr, this.type)
    }
    else {
      runtime_error(0x02)
      return 0
    }
  }

  get used () { return Math.trunc((this.ptr - this.top) / this.size) }

}


export default class Stack {

  constructor (main) {
    this._main = main

    this.reset()
  }

  reset () {
    this._list = {}
  }

  destroy () {
    this._list = {}
  }

  new (addr, max, type, size, rolling) {
    let s = this._list[addr]
    if (!s) {
      s = new StackEntry(this, ...arguments)
      return s
    }
    else {
      runtime_error(0x04)
      return null
    }
  }

  push (addr, ...values) {
    let s = this._list[addr]
    if (s) {
      return s.push(...values)
    }
    else {
      runtime_error(0x04)
      return 0
    }
  }

  pop (addr) {
    let s = this._list[addr]
    if (s) {
      return s.pop()
    }
    else {
      runtime_error(0x04)
      return 0
    }
  }

  used (addr) {
    let s = this._list[addr]
    if (s) {
      return s.used
    }
    else {
      runtime_error(0x04)
      return 0
    }
  }

  max (addr) {
    let s = this._list[addr]
    if (s) {
      return s.max
    }
    else {
      runtime_error(0x04)
      return 0
    }
  }

  size (addr) {
    let s = this._list[addr]
    if (s) {
      return s.size
    }
    else {
      runtime_error(0x04)
      return 0
    }
  }

  type (addr) {
    let s = this._list[addr]
    if (s) {
      return s.type
    }
    else {
      runtime_error(0x04)
      return 0
    }
  }

}
