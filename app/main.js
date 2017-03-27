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
import Interrupt from './vm/interrupt.js'
import Video from './vm/chips/video.js'
import Keyboard from './vm/chips/keyboard.js'
import Mouse from './vm/chips/mouse.js'

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
    this._interrupts = new Interrupt(this)

    this._video_chip = new Video(this)
    this._keyboard_chip = new Keyboard(this)
    this._mouse_chip = new Mouse(this)

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
          that._video_chip.renderer.render(that._video_chip.stage)
        }
      }
    })

    async(this, this.start, 100)
  }

  destroy () {
    this._video_chip.destroy()
    this._keyboard_chip.destroy()
    this._mouse_chip.destroy()
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

  get video_chip () { return this._video_chip }
  get keyboard_chip () { return this._keyboard_chip }
  get mouse_chip () { return this._mouse_chip }

  get stage () { return this._video_chip._stage }
  get renderer () { return this._video_chip._renderer }

  onResize () {
    this._video_chip.emit('resize')
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
    this._keyboard_chip.tick(time)
    this._mouse_chip.tick(time)
    this._interrupts.tick(time)
    this._video_chip.tick(time)
  }

  test () {
  }

}

export let main = new Main()
window.app = main
