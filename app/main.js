import 'pixi.js'
import 'web-audio-daw'

import { async } from './utils.js'
import { defaults, runtime_error } from './globals.js'

import css from '../style/main.css'
// import t from '../html/main.html'

// let el = document.createElement('div')
// el.innerHTML = t
// document.body.appendChild(el)

import { Emitter } from './emitter.js'

import Lexer from './compiler/lexer.js'
import Parser from './compiler/parser.js'
import Transpiler from './compiler/transpiler.js'

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

    this._updates = {
      queue: [],

      add: options => {
        let o = _.get(options, 'object')
        if (o && !o.__inUpdates) {
          o.__inUpdates = true
          this._updates.queue.push(options)
        }
      },

      remove: o => {
        this._updates.queue = _.reject(this._updates.queue, { object: o })
        o.__inUpdates = false
      },
    }

    // Check for littleEndian
    let b = new ArrayBuffer(4)
    let a = new Uint32Array(b)
    let c = new Uint8Array(b)
    a[0] = 0xdeadbeef
    this.LE = c[0] === 0xef

    this._memory = new Memory(this)
    this._memoryManager = new MemoryManager(this)
    this._stack = new Stack(this)
    this._interrupts = new Interrupt(this)

    this._guideo = new Guideo(this)
    this._guideo.createChips()

    this._ken = new Ken(this)
    this._mickey = new Mickey(this)

    this._onResize = this.onResize.bind(this)
    window.addEventListener('resize', this._onResize)

    let that = this
    PIXI.ticker.shared.add(delta => {
      if (that.status === _RUNNING) {
        that.tick(performance.now(), delta)

        // let render = false

        for (let q of that._updates.queue) {
          q.object.__inUpdates = false
          // if (q.render) {
            // render = true
          // }
          if (q.cb) {
            q.cb(q.object, ...(q.args || []))
          }
        }

        that._updates.queue = []

        // if (render) {
          // that._guideo.renderer.render(that._guideo.stage)
        // }
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
    this._program = {
      path: undefined,
      code: undefined,
      fn: undefined,
    }
  }

  defaults (name) { return _.get(defaults, name) }

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

  get program () { return this._program }

  onResize () {
    this._guideo.emit('resize')
    return this
  }

  hlt (code) {
    if (code > 0) {
      runtime_error(code)
    }
    this.stop()
  }

  load (path) {
    let t = new Lexer()
    let tokens = t.run(path)
    console.log(tokens)

    let p = new Parser()
    let nodes = p.run(tokens)
    console.log(nodes)

    if (p.errors === 0) {
      let t = new Transpiler()
      let code = t.run(nodes)
      console.log(code)

      if (t.errors === 0) {
        this._program.code = code
        this._program.path = path
        this._program.fn = new Function(['args'], this._program.code)
      }
    }
  }

  run (...args) {
    let fn = _.get(this, '_program.fn')
    return fn ? fn.apply(this, args) : null
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

  tick (t) {
    this._memory.tick(t)
    this._memoryManager.tick(t)
    this._ken.tick(t)
    this._mickey.tick(t)
    this._interrupts.tick(t)
    this._guideo.tick(t)
  }

  test () {
  }

}

export let main = new Main()
window.app = main
