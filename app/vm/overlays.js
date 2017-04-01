import _ from 'lodash'


export class Overlay {

  constructor (overlays, width, height) {
    this._overlays = overlays

    this._width = width
    this._height = height

    this.reset()
  }

  create () {
    this._canvasBuffer = new PIXI.CanvasBuffer(this._width, this._height)

    this._texture = PIXI.Texture.fromCanvas(this._canvasBuffer.canvas, PIXI.SCALE_MODES.NEAREST)
    this._texture.scaleMode = PIXI.SCALE_MODES.NEAREST

    this._sprite = new PIXI.Sprite(this._texture)

    this._context = this._canvasBuffer.canvas.getContext('2d', { alpha: true, antialias: false })
  }

  reset () {
    this._last = 0
  }

  destroy () {
    if (this._texture) {
      this._texture.destroy()
      this._texture = null
    }

    if (this._canvasBuffer) {
      this._canvasBuffer.destroy()
      this._canvasBuffer = null
    }

    if (this._sprite) {
      this._sprite.destroy()
      this._sprite = null
    }
  }

  tick (t) {
  }

  update () {
    this.guideo.update()
  }

  get main () { return this._overlays.main }
  get guideo () { return this.main.guideo }
  get stage () { return this.main.stage }
  get renderer () { return this.main.renderer }

  get canvasBuffer () { return this._canvasBuffer }
  get texture () { return this._texture }
  get sprite () { return this._sprite }
  get context () { return this._context }

}


export class ScreenOverlay extends Overlay {

  constructor (overlays, width, height, options) {
    super(overlays, width, height)

    this.create()

    this._sprite.x = _.get(options, 'offset.x', 0) + _.get(options, 'margins.x', 0) / 2
    this._sprite.y = _.get(options, 'offset.y', 0) + _.get(options, 'margins.y', 0) / 2
  }

  update () {
    this.guideo.update(true)
  }

}


export class ScanlinesOverlay extends Overlay {

  constructor (overlays, width, height, options) {
    super(overlays, width, height)

    this._gap = _.get(options, 'gap', 3)
    this._alpha = _.get(options, 'alpha', 0.35)

    this.create()

    let a = this._alpha * 255
    let data = this._context.getImageData(0, 0, this._width, this._height)
    let pixels = data.data
    let sz = this._width * 4
    let idx
    for (let y = 0; y < this._height; y += this._gap) {
      idx = y * sz
      for (let i = idx; i < idx + sz; i += 4) {
        pixels.set([0, 0, 0, a], i)
      }
    }
    this._context.putImageData(data, 0, 0)
  }

}


export class ScanlineOverlay extends Overlay {

  constructor (overlays, width, height, options) {
    super(overlays, width, height)

    this._rate = _.get(options, 'rate', 50)
    this._speed = _.get(options, 'speed', 16)
    this._alpha = _.get(options, 'alpha', 0.1)

    this.create()

    let data = this._context.getImageData(0, 0, this._width, this._height)
    let pixels = data.data
    let sz = this._width * 4
    let len = this._height * sz
    let l = 0
    let h = this._height
    let a = this._alpha * 255
    let aa

    for (let y = 0; y < len; y += sz) {
      aa = l / h * a
      for (let x = y; x < y + sz; x += 4) {
        pixels.set([25, 25, 25, aa], x)
      }
      l++
    }

    this._context.putImageData(data, 0, 0)

    this._sprite.y = -this._sprite.height
  }

  tick (t) {
    if (t - this._last >= this._rate) {
      this.sprite.y += this._speed
      if (this._sprite.y > this._height) {
        this._sprite.y = -this._sprite.height
      }
      this._last = t

      this.update()
    }
  }

}


export class NoisesOverlay extends Overlay {

  constructor (overlays, width, height, options) {
    super(overlays, width, height)

    this._rate = _.get(options, 'rate', 250)
    this._count = _.get(options, 'count', 8)
    this._rate = _.get(options, 'rate', 0.85)
    this._red = _.get(options, 'red', 100)
    this._green = _.get(options, 'green', 100)
    this._blue = _.get(options, 'blue', 100)
    this._alpha = _.get(options, 'alpha', 0.15)

    this._noises = {}

    let a = this._alpha * 255
    for (let c = 0; c < this._count; c++) {
      let noise = new Overlay(overlays, this._width, this._height)
      noise.create()
      noise._sprite.visible = c === 0

      let data = noise._context.getImageData(0, 0, this._width, this._height)
      let pixels = data.data
      let len = pixels.length
      let r = this._red
      let g = this._green
      let b = this._blue
      let _rate = this._rate
      for (let i = 0; i < len; i += 4) {
        if (Math.random() >= _rate) {
          pixels.set([Math.trunc(Math.random() * r), Math.trunc(Math.random() * g), Math.trunc(Math.random() * b), a], i)
        }
      }
      noise._context.putImageData(data, 0, 0)
      this._noises[c] = noise
      this.guideo.stage.addChild(noise.sprite)
    }

    this._noiseKeys = _.keys(this._noises)
  }

  destroy () {
    super.destroy()

    for (let k in this._noises) {
      let noise = this._noises[k]
      noise.destroy()
    }

    this._noises = {}
    this._noiseKeys = []
  }

  tick (t) {
    if (t - this._last >= this._rate) {
      for (let k of this._noiseKeys) {
        this._noises[k].sprite.visible = false
      }

      let noise = this._noiseKeys[Math.trunc(Math.random() * this._noiseKeys.length)]
      this._noises[noise].sprite.visible = true

      this._last = t

      this.update()
    }
  }

}


export class RgbOverlay extends Overlay {

  constructor (overlays, width, height, options) {
    super(overlays, width, height)

    this._alpha = _.get(options, 'alpha', 0.075)

    this.create()

    let data = this._context.getImageData(0, 0, this._width, this._height)
    let pixels = data.data
    let len = pixels.length
    let a = this._alpha * 255
    for (let i = 0; i < len; i += 12) {
      pixels.set([100, 100, 100, a], i)
    }
    this._context.putImageData(data, 0, 0)
  }

}


export class CrtOverlay extends Overlay {

  constructor (overlays, width, height, options) {
    super(overlays, width, height)

    this._radius = _.get(options, 'radius', 0.25)
    this._inside_alpha = _.get(options, 'inside_alpha', 0.2)
    this._outside_alpha = _.get(options, 'outside_alpha', 0.15)

    this.create()

    this._context.globalCompositeOperation = 'darker'
    let gradient = this._context.createRadialGradient(this._width / 2, this._height / 2, this._height / 2, this._width / 2, this._height / 2, this._height / this._radius)
    gradient.addColorStop(0, 'rgba(255, 255, 255, ' + this._inside_alpha + ')')
    gradient.addColorStop(1, 'rgba(0, 0, 0, ' + this._outside_alpha + ')')
    this._context.fillStyle = gradient
    this._context.fillRect(0, 0, this._width, this._height)
    this._context.globalCompositeOperation = 'source-over'
  }

}


export class Overlays {

  constructor (main, options = {}) {
    this._main = main

    let stage = main.stage
    let renderer = main.renderer

    let width = renderer.width
    let height = renderer.height

    this._list = {}
    let l = this._list

    function _createOverlay (ctx, Cls, name, defaults = {}) {
      let o = _.defaultsDeep({}, options, { [name]: defaults })
      let s = _.get(o[name], 'scale', 1)
      l[name] = new Cls(ctx, _.get(o[name], 'width', 0), _.get(o[name], 'height', 0), o[name])
      l[name].sprite.scale = new PIXI.Point(s, s)
      stage.addChild(l[name].sprite)
      return l[name]
    }

    if (_.get(options, 'screen')) {
      _createOverlay(this, ScreenOverlay, 'screen', { width: this.guideo.width, height: this.guideo.height })
    }

    if (_.get(options, 'scanlines')) {
      _createOverlay(this, ScanlinesOverlay, 'scanlines', { width, height })
    }

    if (_.get(options, 'scanline')) {
      _createOverlay(this, ScanlineOverlay, 'scanline', { width, height })
    }

    if (_.get(options, 'rgb')) {
      _createOverlay(this, RgbOverlay, 'rgb', { width, height })
    }

    if (_.get(options, 'noises')) {
      let w = _.get(options, 'noises.width', width)
      let h = _.get(options, 'noises.height', height)
      l.noises = new NoisesOverlay(this, w, h, _.get(options, 'noises'))
    }

    if (_.get(options, 'crt')) {
      _createOverlay(this, CrtOverlay, 'crt', { width, height })
    }

    if (_.get(options, 'monitor')) {
      let mx = _.get(options, 'monitor.margins.x', 0)
      let my = _.get(options, 'monitor.margins.y', 0)
      let w = _.get(options, 'monitor.width', width)
      let h = _.get(options, 'monitor.height', height)
      let s = _.get(options, 'monitor.scale', 1)

      let tex = PIXI.Texture.fromImage('./build/' + require('file?name=assets/[path]/[name].[ext]!../../assets/imgs/crt.png'))
      l.monitor = new PIXI.Sprite(tex)
      l.monitor.width = w + mx
      l.monitor.height = h + my
      l.monitor.scale = new PIXI.Point(s, s)
      l.monitor.x = _.get(options, 'monitor.offset.x', 0) + mx / -2
      l.monitor.y = _.get(options, 'monitor.offset.y', 0) + my / -2
      stage.addChild(l.monitor)
    }
  }

  tick (t) {
    const l = this._list
    for (let k in l) {
      if (l[k].tick) {
        l[k].tick(t)
      }
    }
  }

  reset () {
    const l = this._list
    for (let k in l) {
      if (l[k].reset) {
        l[k].reset()
      }
    }
  }

  destroy () {
    const l = this._list
    for (let k in l) {
      if (l[k].destroy) {
        l[k].destroy()
      }
    }
  }

  get main () { return this._main }
  get guideo () { return this._main.guideo }
  get stage () { return this._main.stage }
  get renderer () { return this._main.renderer }
  get screen () { return this._list.screen }

  resize () {
  }

}
