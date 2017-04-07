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

    this.reset()
  }

  reset () {
    this._ptr = this._top

    return this
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
    const sz = this._size
    const t = this._type
    const top = this._top
    const bottom = this._bottom
    const rolling = this._rolling

    let ptr = this._ptr

    for (let v of value) {
      if (rolling && ptr >= bottom) {
        this.copy(top + sz, top, bottom - sz)
        ptr -= sz
      }
      if (ptr + sz < bottom) {
        this.write(v, ptr, t)
        ptr += sz
      }
      else {
        runtime_error(0x03)
        break
      }
    }

    this._ptr = ptr

    return this
  }

  pop () {
    if (this._ptr > this._top) {
      this._ptr -= this._size
      return this.read(this._ptr, this._type)
    }
    runtime_error(0x02)
    return 0
  }

}


export default class Stack {

  constructor (main) {
    this._main = main

    this.reset()
  }

  reset () {
    this._list = {}

    return this
  }

  destroy () {
    this._list = {}
  }

  get list () { return this._list }

  new (offset, max, type, size, rolling) {
    return !this._list[offset] ? new StackEntry(this, ...arguments) : runtime_error(0x04)
  }

  push (offset, ...values) {
    let s = this._list[offset]
    return s ? s.push(...values) : runtime_error(0x04)
  }

  pop (offset) {
    let s = this._list[offset]
    return s ? s.pop() : runtime_error(0x04)
  }

  used (offset) {
    let s = this._list[offset]
    return s ? s.used : runtime_error(0x04)
  }

  max (offset) {
    let s = this._list[offset]
    return s ? s.max : runtime_error(0x04)
  }

  size (offset) {
    let s = this._list[offset]
    return s ? s.size : runtime_error(0x04)
  }

  type (offset) {
    let s = this._list[offset]
    return s ? s.type : runtime_error(0x04)
  }

}
