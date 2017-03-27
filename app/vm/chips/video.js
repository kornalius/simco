import Palette from './palette.js'
import Font from './font.js'
import Text from './text.js'
import Cursor from './cursor.js'
import Sprite from './sprite.js'
import { Overlays } from '../overlays.js'

import Chip from './chip.js'

export default class Video extends Chip {

  constructor (main) {
    super(main)

    this.init('i8', 'video', ['width', 'height', 'scale'])

    this._renderer = new PIXI.autoDetectRenderer(this._width * this._scale, this._height * this._scale, {})
    this._renderer.view.style.position = 'absolute'
    this._renderer.view.style.cursor = 'none'
    this._renderer.view.id = 'video'
    document.body.appendChild(this._renderer.view)

    this._stage = new PIXI.Container()
    this._stage.scale = new PIXI.Point(this._scale, this._scale)

    this._onResize = this.resize.bind(this)
    this.on('resize', this._onResize)

    this.async(function () {
      this._palette_chip = new Palette(main)
      this._font_chip = new Font(main)
      this._text_chip = new Text(main)
      this._cursor_chip = new Cursor(main)
      this._sprite_chip = new Sprite(main)
      this._overlays = new Overlays(this, {
        screen: {},
        scanlines: {},
        scanline: {},
        rgb: {},
        noises: {},
        crt: {},
        monitor: {},
      })
      this.reset()
    })
  }

  destroy () {
    this.off('resize', this._onResize)

    this._palette_chip.destroy()
    this._font_chip.destroy()
    this._text_chip.destroy()
    this._cursor_chip.destroy()
    this._sprite_chip.destroy()

    this._overlays.destroy()

    if (this._sprite) {
      this._sprite.destroy()
    }

    if (this._texture) {
      this._texture.destroy()
      this._texture = null
    }

    if (this._canvas) {
      this._canvas.remove()
      this._canvas = null
    }

    super.destroy()
  }

  reset () {
    super.reset()

    this.clear()

    this._force_update = false
    this._force_flip = false

    this._palette_chip.reset()
    this._font_chip.reset()
    this._text_chip.reset()
    this._cursor_chip.reset()
    this._sprite_chip.reset()
    this._overlays.reset()

    return this.resize()
  }

  get scale () { return this._scale }
  set scale (value) {
    this._scale = value
    this.resize()
  }

  set width (value) {
    this._width = value
    this.resize()
  }

  set height (value) {
    this._height = value
    this.resize()
  }

  get video_chip () { return this }
  get palette_chip () { return this._palette_chip }
  get font_chip () { return this._font_chip }
  get text_chip () { return this._text_chip }
  get cursor_chip () { return this._cursor_chip }
  get sprite_chip () { return this._sprite_chip }

  get overlays () { return this._overlays }

  get stage () { return this._stage }
  get renderer () { return this._renderer }

  get sprite () { return this._sprite }
  get texture () { return this._texture }
  get canvas () { return this._canvas }
  get context () { return this._context }
  get imageData () { return this._imageData }
  get pixels () { return this._pixels }

  get force_flip () { return this._force_flip }
  set force_flip (value) { this._force_flip = value }

  tick (delta) {
    this._palette_chip.tick(delta)
    this._font_chip.tick(delta)
    this._text_chip.tick(delta)
    this._cursor_chip.tick(delta)
    this._sprite_chip.tick(delta)

    if (this._force_update) {
      this._force_update = false

      if (this._force_flip) {
        this.flip()
      }

      this._renderer.render(this._stage)
    }

    this._overlays.tick(delta)
  }

  refresh (flip = false) {
    if (!this._force_flip) {
      this._force_flip = flip
    }

    this.emit('refresh', { flip })

    return this
  }

  flip () {
    let data = this._data
    let pixels = this._pixels
    let pal = this._palette_chip

    for (let i = 0; i < this._size; i++) {
      pixels[i] = pal.data[data[i]]
    }

    this._context.putImageData(this._imageData, 0, 0)

    this._force_flip = false

    this.emit('flip')

    return this
  }

  center () {
    this._renderer.view.style.left = window.innerWidth * 0.5 - this._renderer.width * 0.5 + 'px'
    this._renderer.view.style.top = window.innerHeight * 0.5 - this._renderer.height * 0.5 + 'px'
    return this
  }

  rescale (width, height) {
    if (!this.emit('rescale', { width, height }).defaultPrevented) {
      this.scale = Math.ceil(Math.min(width / this._renderer.width, height / this._renderer.height))
    }
    return this
  }

  resize () {
    this._renderer.resize(this._width * this._scale, this._height * this._scale)

    if (this._sprite) {
      this._sprite.texture = null
    }

    if (this._texture) {
      this._texture.destroy()
      this._texture = null
    }

    if (this._canvas) {
      this._canvas.remove()
    }

    this._canvas = document.createElement('canvas')
    this._canvas.style.display = 'none'
    this._canvas.width = this._width
    this._canvas.height = this._height
    document.body.appendChild(this._canvas)

    this._texture = PIXI.Texture.fromCanvas(this._canvas, PIXI.SCALE_MODES.NEAREST)

    if (!this._sprite) {
      this._sprite = new PIXI.Sprite(this._texture)
    }
    else {
      this._sprite.texture = this._texture
    }

    this._context = this._canvas.getContext('2d', { alpha: true, antialias: false })
    this._context.clearRect(0, 0, this._width, this._height)

    this._imageData = this._context.getImageData(0, 0, this._width, this._height)

    this._pixels = new Uint32Array(this._imageData.data.buffer)

    this.center()

    this.test()

    this._overlays.resize()

    return this
  }

  pixel (i, c) {
    let data = this._data
    if (c !== undefined && data[i] !== c) {
      data[i] = Math.max(0, Math.min(c, this._palette_chip.count - 1))
    }
    return data[i]
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
    this.clear()

    this._stage.removeChildren()

    let t = new PIXI.Sprite(this.loadTexture('test.png'))
    this._stage.addChild(t)

    let text = new PIXI.Text('This is a pixi text', { font: '20px "Glass TTY VT220"', fill: 0xFFFFFF })
    text.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST
    text.context.canvas.style['font-smoothing'] = 'never'
    text.context.canvas.style['-webkit-font-smoothing'] = 'none'
    text.context.imageSmoothingEnabled = false
    text.context.canvas.style.display = 'hidden'
    document.body.appendChild(text.context.canvas)
    text.updateText()
    this._stage.addChild(text)
    this.update()
    document.body.removeChild(text.context.canvas)
  }

}
