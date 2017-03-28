import { defaults, runtime_error } from '../globals.js'
import { data_type_size } from './memory.js'

class StackEntry {

  constructor (stack, offset = 0, max = 255, type = defaults.type, size, rolling = false) {
    this._stack = stack

    this._max = max
    this._size = size || data_type_size(type)
    this._top = offset
    this._bottom = this._top + this._size - 1
    this._type = type
    this._rolling = rolling || false

    this.list[this._top] = this
  }

  reset () {
    this._ptr = this._top
  }

  destroy () {
    this.list[this._top] = undefined
  }

  get main () { return this._stack.main }
  get stack () { return this._stack }
  get list () { return this._stack.list }

  get top () { return this._top }
  get bottom () { return this._bottom }
  get size () { return this._size }

  get max () { return this._max }
  get ptr () { return this._ptr }

  get total_size () { return this._max * this._size }
  get used () { return Math.trunc((this._ptr - this._top) / this._size) }
  get avail () { return this.total_size - this.used }

  push (...value) {
    let sz = this._size
    let t = this._type
    let top = this._top
    let bottom = this._bottom
    let rolling = this._rolling
    for (let v of value) {
      if (rolling && this._ptr >= bottom) {
        this.copy(top + sz, top, bottom - sz)
        this._ptr -= sz
      }
      if (this._ptr + sz < bottom) {
        this.write(v, this._ptr, t)
        this._ptr += sz
      }
      else {
        runtime_error(0x03)
        break
      }
    }
  }

  pop () {
    if (this._ptr > this._top) {
      this._ptr -= this._size
      return this.read(this._ptr, this._type)
    }
    else {
      runtime_error(0x02)
      return 0
    }
  }

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

  get list () { return this._list }

  new (offset, max, type, size, rolling) {
    let s = this._list[offset]
    if (!s) {
      return new StackEntry(this, ...arguments)
    }
    else {
      runtime_error(0x04)
      return null
    }
  }

  push (offset, ...values) {
    let s = this._list[offset]
    if (s) {
      return s.push(...values)
    }
    else {
      runtime_error(0x04)
      return 0
    }
  }

  pop (offset) {
    let s = this._list[offset]
    if (s) {
      return s.pop()
    }
    else {
      runtime_error(0x04)
      return 0
    }
  }

  used (offset) {
    let s = this._list[offset]
    if (s) {
      return s.used
    }
    else {
      runtime_error(0x04)
      return 0
    }
  }

  max (offset) {
    let s = this._list[offset]
    if (s) {
      return s.max
    }
    else {
      runtime_error(0x04)
      return 0
    }
  }

  size (offset) {
    let s = this._list[offset]
    if (s) {
      return s.size
    }
    else {
      runtime_error(0x04)
      return 0
    }
  }

  type (offset) {
    let s = this._list[offset]
    if (s) {
      return s.type
    }
    else {
      runtime_error(0x04)
      return 0
    }
  }

}
