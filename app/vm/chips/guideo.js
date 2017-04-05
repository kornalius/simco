import Rainbow from './rainbow.js'
import Fonzo from './fonzo.js'
import Orwell from './orwell.js'
import Beagle from './beagle.js'
import Violet from './violet.js'
import { Overlays } from '../overlays.js'

import Chip from './chip.js'

export default class Guideo extends Chip {

  constructor (main) {
    super(main)

    this.init('guideo', ['width', 'height', 'scale'])

    let borderSize = main.defaults('border.size', 0) * 2

    this._renderer = new PIXI.autoDetectRenderer(this._width * this._scale + borderSize, this._height * this._scale + borderSize, {})
    this._renderer.view.style.position = 'absolute'
    this._renderer.view.style.cursor = 'none'
    this._renderer.view.id = 'guideo'
    document.body.appendChild(this._renderer.view)

    this._stage = new PIXI.Container()

    this._onResize = this.resize.bind(this)
    this.on('resize', this._onResize)
  }

  destroy () {
    this.off('resize', this._onResize)

    this._rainbow.destroy()
    this._fonzo.destroy()
    this._orwell.destroy()
    this._beagle.destroy()
    this._violet.destroy()
    this._overlays.destroy()

    super.destroy()
  }

  createChips () {
    let main = this._main

    this._rainbow = new Rainbow(main)

    this._overlays = new Overlays(main, {
      border: { size: main.defaults('border.size', 0), color: main.defaults('border.color', 0) },
      screen: { scale: this._scale },
      scanlines: {},
      scanline: {},
      rgb: {},
      noises: {},
      crt: {},
      monitor: {},
    })

    this._screen = this._overlays.screen
    this._screen._data = this._data

    this._fonzo = new Fonzo(main)
    this._orwell = new Orwell(main)
    this._beagle = new Beagle(main)
    this._violet = new Violet(main)

    this.context.clearRect(0, 0, this._width, this._height)

    this._imageData = this.context.getImageData(0, 0, this._width, this._height)
    this._pixels = new Uint32Array(this._imageData.data.buffer)

    this.reset()
  }

  reset () {
    super.reset()

    this._force_redraw = false
    this._force_flip = false

    this._rainbow.reset()
    this._fonzo.reset()
    this._orwell.reset()
    this._beagle.reset()
    this._violet.reset()
    this._overlays.reset()

    this.clear()

    return this.resize()
  }

  get scale () { return this._scale }
  set scale (value) {
    this._scale = value
  }

  get rainbow () { return this._rainbow }
  get fonzo () { return this._fonzo }
  get orwell () { return this._orwell }
  get beagle () { return this._beagle }
  get violet () { return this._violet }

  get overlays () { return this._overlays }

  get stage () { return this._stage }
  get renderer () { return this._renderer }

  get screen () { return this._screen }
  get screenSprite () { return this._screen.sprite }
  get spritesLayer () { return this._screen.spritesLayer }
  get mouseLayer () { return this._screen.mouseLayer }

  get texture () { return this._screen.texture }
  get canvasBuffer () { return this._screen.canvasBuffer }
  get canvas () { return this.canvasBuffer.canvas }
  get context () { return this._screen.context }
  get imageData () { return this._imageData }
  get pixels () { return this._pixels }

  get force_redraw () { return this._force_redraw }
  set force_redraw (value) { this._force_redraw = value }

  get force_flip () { return this._force_flip }
  set force_flip (value) { this._force_flip = value }

  tick (t) {
    this._rainbow.tick(t)
    this._fonzo.tick(t)
    this._orwell.tick(t)
    this._beagle.tick(t)
    this._violet.tick(t)
    this._overlays.tick(t)

    if (this._force_redraw) {
      this.redraw()
      this._force_redraw = false
    }
  }

  redraw () {
    if (this._force_flip) {
      this._screen.updateTexture(this._data, this._rainbow)

      this.emit('flip')

      this._force_flip = false
    }

    this.emit('redraw')

    this._renderer.render(this._stage)

    return this
  }

  center () {
    this._renderer.view.style.left = window.innerWidth * 0.5 - this._renderer.width * 0.5 + 'px'
    this._renderer.view.style.top = window.innerHeight * 0.5 - this._renderer.height * 0.5 + 'px'
    return this
  }

  resize () {
    this._overlays.resize()
    this.center()
    this.test()
    return this
  }

  pixel (x, y, c) {
    const data = this._data

    let i
    if (_.isNumber(c)) {
      i = this.toIndex(x, y)
    }
    else {
      i = x
      c = y
    }

    if (data[i] !== c) {
      data[i] = c || 0
    }

    return data[i]
  }

  blit (addr, x, y, w, h) {
    const mem = this.memory.data
    const data = this._data
    const top = this._top
    const width = this._width

    let si = addr
    for (let by = 0; by < h; by++) {
      let ti = top + ((y + by) * width + x)
      for (let bx = 0; bx < w; bx++) {
        data[ti++] = mem[si++]
      }
    }

    return this.update(true)
  }

  blit_mask (addr, x, y, w, h, fg = 15, bg = -1) {
    const mem = this.memory.data
    const data = this._data
    const top = this._top
    const width = this._width
    const count = this.rainbow.count

    let si = addr
    for (let by = 0; by < h; by++) {
      let ti = top + ((y + by) * width + x)
      for (let bx = 0; bx < w; bx++) {
        let c = mem[si++]
        data[ti] = c < count ? fg : bg === -1 ? data[ti] : bg
        ti++
      }
    }

    return this.update(true)
  }

  blit_array (arr, x, y, mask = {}) {
    const data = this._data
    const top = this._top
    const width = this._width

    let w = _.first(arr).length
    let h = arr.length

    for (let by = 0; by < h; by++) {
      let ti = top + ((by + y) * width + x)
      for (let bx = 0; bx < w; bx++) {
        data[ti++] = mask[arr[by]]
      }
    }
  }

  copy_rect (x, y, w, h, addr) {
    const mem = this.memory.data
    const data = this._data
    const top = this._top
    const width = this._width

    let ti = addr
    for (let by = 0; by < h; by++) {
      let si = top + ((by + y) * width + x)
      for (let bx = 0; bx < w; bx++) {
        mem[ti++] = data[si++]
      }
    }

    return ti
  }

  to_array (x, y, w, h, mask = {}) {
    const data = this._data
    const top = this._top
    const width = this._width

    let arr = []

    for (let by = 0; by < h; by++) {
      let ti = top + ((by + y) * width + x)
      let s = ''
      for (let bx = 0; bx < w; bx++) {
        s += mask[data[ti++]]
      }
      arr.push(s)
    }

    return arr
  }

  toIndex (x, y) { return y * this._width + x }

  fromIndex (i) {
    let y = Math.min(Math.trunc(i / this._width), this._height - 1)
    let x = i - y
    return { x, y }
  }

  scroll (x, y) {
    let lw = y * this._width
    let s = lw
    let e = this._size - lw
    this._data.copy(s, 0, e - s)
    return this.update()
  }

  loadTexture (filename) {
    let tex = PIXI.Texture.fromImage('./build/' + require('file?name=assets/[name].[ext]!../../../assets/imgs/' + filename), undefined, PIXI.SCALE_MODES.NEAREST)
    tex.on('update', () => this.update())
    return tex
  }

  test () {
    this.pixel(10, 10, 13)
    this.pixel(20, 10, 5)
    this.pixel(30, 10, 6)

    this._fonzo.test()

    // let screen = this._overlays.screen.sprite
    // screen.removeChildren()

    // let t = new PIXI.Sprite(this.loadTexture('test.png'))
    // screen.addChild(t)

    // let text = new PIXI.Text('This is a pixi text', { font: '20px "Glass TTY VT220"', fill: 0xFFFFFF })
    // text.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST
    // text.context.canvas.style['font-smoothing'] = 'never'
    // text.context.canvas.style['-webkit-font-smoothing'] = 'none'
    // text.context.imageSmoothingEnabled = false
    // text.context.canvas.style.display = 'hidden'
    // document.body.appendChild(text.context.canvas)
    // text.updateText()
    // screen.addChild(text)
    // document.body.removeChild(text.context.canvas)

    this.update(true)
  }

}
