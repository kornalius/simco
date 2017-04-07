import hexy from 'hexy'
import prettyBytes from 'pretty-bytes'
import { data_type_size } from './memory.js'
import { runtime_error } from '../globals.js'
import { hex } from '../utils.js'

export default class MemoryManager {

  constructor (main) {
    this._main = main

    this._collect_delay = main.defaults('memory_manager.collect_delay')

    this.reset()
  }

  reset () {
    this._blocks = []
    this._last = 0

    return this.collect()
  }

  destroy () {
    this.collect()

    this._blocks = []
    this._last = 0
  }

  tick (t) {
    if (t - this._last >= this._collect_delay) {
      this.collect()
      this._last = t
    }
  }

  get main () { return this._main }
  get memory () { return this._main.memory }

  get blocks () { return this._blocks }
  get last () { return this._last }
  get collect_delay () { return this._collect_delay }

  get avail_mem () { return this._main.size }

  get used_mem () {
    let size = 0
    for (let b of this._blocks) {
      if (b.used) {
        size += b.size
      }
    }
    return size
  }

  get free_mem () { return this.avail_mem - this.used_mem }

  _alloc (type, count) {
    count = count || 1
    let size = data_type_size(type) * count
    let n = 0

    for (let b of this._blocks) {
      if (b.bottom > n) {
        n = b.bottom
      }

      if (!b.used && b.size >= size) {
        if (b.size === size) {
          b.used = true
          return b.top
        }
        let ob = b.bottom
        b.bottom = b.top + size - 1
        b.size = size
        b.count = count
        b.used = true

        this._blocks.push({ top: b.bottom + 1, bottom: ob, size: ob - (b.bottom + 1), count, type, used: false })

        return b.top
      }
    }

    if (n + size > this.avail_mem) {
      runtime_error(0x01)
      return 0
    }

    let addr = n + 1

    this._blocks.push({ top: addr, bottom: addr + size - 1, size, count, type, used: true })

    this._main.memory.fill(0, addr, size)

    return addr
  }

  alloc (type, count, ...value) {
    let addr = this._alloc(type, count)
    const main = this._main

    if (value) {
      let size = data_type_size(type) * count
      let a = addr
      for (let v of value) {
        main.write(v, a, type)
        a += size
      }
    }

    return addr
  }

  free (addr) {
    let b = this.block(addr)
    if (b) {
      b.used = false
    }
    return this
  }

  block (addr) {
    for (let b of this._blocks) {
      if (b.top === addr) {
        return b
      }
    }
    return null
  }

  type (addr) {
    let b = this.block(addr)
    return b && b.used ? b.type : null
  }

  size (addr) {
    let b = this.block(addr)
    return b && b.used ? b.size : -1
  }

  collect () {
    let n = []

    for (let b of this._blocks) {
      if (!b.used) {
        n.push(b)
      }
    }

    this._blocks = n

    return this
  }

  dump () {
    console.log('memory _blocks dump...', 'avail_mem:', prettyBytes(this.avail_mem), 'used:', prettyBytes(this.used_mem), 'free:', prettyBytes(this.free_mem))
    for (let b of this._blocks) {
      console.log('')
      console.log('offset:', hex(b.top, 32), 'size:', this.size(b.top), 'type:', this.type(b.top))
      console.log(hexy.hexy(this._main.mem_buffer, { offset: b.top, length: Math.min(255, b.size), width: 16, caps: 'upper', indent: 2 }))
    }
  }
}
