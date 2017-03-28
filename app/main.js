import 'pixi.js'
import 'web-audio-daw'

import { async } from './utils.js'
import { defaults } from './globals.js'

// import css from '../style/main.css'
// import t from '../html/main.html'

// let el = document.createElement('div')
// el.innerHTML = t
// document.body.appendChild(el)

import { Emitter } from './emitter.js'

import { Memory } from './vm/memory.js'
import MemoryManager from './vm/memorymanager.js'
import Stack from './vm/stack.js'
import Interrupt from './vm/interrupt.js'
import Guideo from './vm/chips/guideo.js'
import Ken from './vm/chips/ken.js'
import Mickey from './vm/chips/mickey.js'

// import { VM } from './interpreter/vm.js'

// setTimeout(() => {
//   let src = require('raw!../test/test1.x32')
//   console.log(src)

//   let vm = new VM()
//   vm.load(src)
//   vm.run()
//   vm.dump()
// }, 100)

// console.log(hexy.hexy(vm.mem_buffer, { offset: 0, length: 512, display_offset: 0x00, width: 16, caps: 'upper', indent: 2 }))

export const _STOPPED = 0
export const _RUNNING = 1
export const _PAUSED = 2

export class Main extends Emitter {

  constructor (options) {
    super()

    this.reset()

    this._memory = new Memory(this)
    this._memoryManager = new MemoryManager(this)
    this._stack = new Stack(this)
    this._interrupts = new Interrupt(this)

    this._guideo = new Guideo(this)
    this._ken = new Ken(this)
    this._mickey = new Mickey(this)

    this._onResize = this.onResize.bind(this)
    window.addEventListener('resize', this._onResize)

    let that = this
    PIXI.ticker.shared.add(time => {
      if (that.status === _RUNNING) {
        that.tick(time)

        let render = false

        for (let q of that._updates.queue) {
          q.object.__addedToUpdates = false
          if (q.render) {
            render = true
          }
          if (q.cb) {
            q.cb(q.object, ...(q.args || []))
          }
        }

        that._updates.queue = []

        if (render) {
          that._guideo.renderer.render(that._guideo.stage)
        }
      }
    })

    async(this, this.start, 100)
  }

  destroy () {
    this._guideo.destroy()
    this._ken.destroy()
    this._mickey.destroy()
    this._interrupts.destroy()
    this._memoryManager.destroy()
    this._memory.destroy()
    super.destroy()
  }

  reset () {
    this._status = 0

    this._updates = {
      queue: [],

      add: options => {
        let o = _.get(options, 'object')
        if (o && !o.__addedToUpdates) {
          o.__addedToUpdates = true
          this._updates.queue.push(options)
        }
      },

      remove: o => {
        this._updates.queue = _.reject(this._updates.queue, { object: o })
        o.__addedToUpdates = false
      },
    }

    // Check for littleEndian
    let b = new ArrayBuffer(4)
    let a = new Uint32Array(b)
    let c = new Uint8Array(b)
    a[0] = 0xdeadbeef
    this.LE = c[0] === 0xef
  }

  default (name) { return _.get(defaults, name) }

  get status () { return this._status }
  set status (value) {
    if (this._status !== value) {
      this._status = value
    }
  }

  get memory () { return this._memory }
  get memoryManager () { return this._memoryManager }
  get interrupts () { return this._interrupts }

  get updates () { return this._updates }

  get guideo () { return this._guideo }
  get keyboard_chip () { return this._ken }
  get mickey () { return this._mickey }

  get stage () { return this._guideo._stage }
  get renderer () { return this._guideo._renderer }

  onResize () {
    this._guideo.emit('resize')
    return this
  }

  start () {
    this.status = _RUNNING
    this.test()
    return this
  }

  stop () {
    this.status = _STOPPED
    return this
  }

  pause () {
    this.status = _PAUSED
    return this
  }

  resume () {
    this.status = _RUNNING
    return this
  }

  tick (time) {
    this._memory.tick(time)
    this._memoryManager.tick(time)
    this._ken.tick(time)
    this._mickey.tick(time)
    this._interrupts.tick(time)
    this._guideo.tick(time)
  }

  test () {
  }

}

export let main = new Main()
window.app = main
