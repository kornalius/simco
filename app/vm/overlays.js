import _ from 'lodash'


export class Overlay {

  constructor (overlays, width, height) {
    this._overlays = overlays

    this.width = width
    this.height = height

    this.reset()
  }

  create () {
    this.canvas = new PIXI.CanvasBuffer(this.width, this.height)

    this.tex = PIXI.Texture.fromCanvas(this.canvas.canvas, PIXI.SCALE_MODES.NEAREST)
    this.tex.scaleMode = PIXI.SCALE_MODES.NEAREST

    this.sprite = new PIXI.Sprite(this.tex)

    this.context = this.canvas.canvas.getContext('2d', { alpha: true, antialias: false })
  }

  reset () {
    this._last = 0
  }

  destroy () {
    if (this.canvas) {
      this.canvas.destroy()
      this.canvas = null
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

}


export class ScreenOverlay extends Overlay {

  constructor (overlays, width, height, options) {
    super(overlays, width, height)

    this.create()

    this.sprite.x = this.guideo.offset_x + this.guideo.margins_x / 2
    this.sprite.y = this.guideo.offset_y + this.guideo.margins_y / 2
  }

}


export class ScanlinesOverlay extends Overlay {

  constructor (overlays, width, height, options) {
    super(overlays, width, height)

    this.gap = _.get(options, 'gap', 3)
    this.alpha = _.get(options, 'alpha', 0.35)

    this.create()

    let a = this.alpha * 255
    let data = this.context.getImageData(0, 0, this.width, this.height)
    let pixels = data.data
    let sz = this.width * 4
    let idx
    for (let y = 0; y < this.height; y += this.gap) {
      idx = y * sz
      for (let i = idx; i < idx + sz; i += 4) {
        pixels.set([0, 0, 0, a], i)
      }
    }
    this.context.putImageData(data, 0, 0)
  }

}


export class ScanlineOverlay extends Overlay {

  constructor (overlays, width, height, options) {
    super(overlays, width, height)

    this.rate = _.get(options, 'rate', 50)
    this.speed = _.get(options, 'speed', 16)
    this.alpha = _.get(options, 'alpha', 0.1)

    this.create()

    let data = this.context.getImageData(0, 0, this.width, this.height)
    let pixels = data.data
    let sz = this.width * 4
    let len = this.height * sz
    let l = 0
    let h = this.height
    let a = this.alpha * 255
    let aa
    for (let y = 0; y < len; y += sz) {
      aa = l / h * a
      for (let x = y; x < y + sz; x += 4) {
        pixels.set([25, 25, 25, aa], x)
      }
      l++
    }
    this.context.putImageData(data, 0, 0)

    this.sprite.y = -this.sprite.height
  }

  tick (t) {
    if (t - this._last >= this.rate) {
      this.sprite.y += this.speed
      if (this.sprite.y > this.height) {
        this.sprite.y = -this.sprite.height
      }
      this._last = t

      this.update()
    }
  }

}


export class NoisesOverlay extends Overlay {

  constructor (overlays, width, height, options) {
    super(overlays, width, height)

    this.rate = _.get(options, 'rate', 250)
    this.count = _.get(options, 'count', 8)
    this.rate = _.get(options, 'rate', 0.85)
    this.red = _.get(options, 'red', 100)
    this.green = _.get(options, 'green', 100)
    this.blue = _.get(options, 'blue', 100)
    this.alpha = _.get(options, 'alpha', 0.15)

    this.noises = {}

    let a = this.alpha * 255
    for (let c = 0; c < this.count; c++) {
      let noise = new Overlay(this.guideo, this.width, this.height)
      noise.create()
      noise.sprite.visible = c === 0

      let data = noise.context.getImageData(0, 0, this.width, this.height)
      let pixels = data.data
      let len = pixels.length
      let r = this.red
      let g = this.green
      let b = this.blue
      let _rate = this.rate
      for (let i = 0; i < len; i += 4) {
        if (Math.random() >= _rate) {
          pixels.set([Math.trunc(Math.random() * r), Math.trunc(Math.random() * g), Math.trunc(Math.random() * b), a], i)
        }
      }
      noise.context.putImageData(data, 0, 0)
      this.noises[c] = noise
      this.guideo._main.stage.addChild(noise.sprite)
    }

    this.noiseKeys = _.keys(this.noises)
  }

  destroy () {
    super.destroy()

    for (let k in this.noises) {
      let noise = this.noises[k]
      noise.destroy()
    }

    this.noises = {}
    this.noiseKeys = []
  }

  tick (t) {
    if (t - this._last >= this.rate) {
      for (let k of this.noiseKeys) {
        this.noises[k].sprite.visible = false
      }

      let noise = this.noiseKeys[Math.trunc(Math.random() * this.noiseKeys.length)]
      this.noises[noise].sprite.visible = true

      this._last = t

      this.update()
    }
  }

}


export class RgbOverlay extends Overlay {

  constructor (overlays, width, height, options) {
    super(overlays, width, height)

    this.alpha = _.get(options, 'alpha', 0.075)

    this.create()

    let data = this.context.getImageData(0, 0, this.width, this.height)
    let pixels = data.data
    let len = pixels.length
    let a = this.alpha * 255
    for (let i = 0; i < len; i += 12) {
      pixels.set([100, 100, 100, a], i)
    }
    this.context.putImageData(data, 0, 0)
  }

}


export class CrtOverlay extends Overlay {

  constructor (overlays, width, height, options) {
    super(overlays, width, height)

    this.radius = _.get(options, 'radius', 0.25)
    this.inside_alpha = _.get(options, 'inside_alpha', 0.2)
    this.outside_alpha = _.get(options, 'outside_alpha', 0.15)

    this.create()

    this.context.globalCompositeOperation = 'darker'
    let gradient = this.context.createRadialGradient(this.width / 2, this.height / 2, this.height / 2, this.width / 2, this.height / 2, this.height / this.radius)
    gradient.addColorStop(0, 'rgba(255, 255, 255, ' + this.inside_alpha + ')')
    gradient.addColorStop(1, 'rgba(0, 0, 0, ' + this.outside_alpha + ')')
    this.context.fillStyle = gradient
    this.context.fillRect(0, 0, this.width, this.height)
    this.context.globalCompositeOperation = 'source-over'
  }

}


export class Overlays {

  constructor (main, options = {}) {
    this._main = main

    let stage = main.stage
    let renderer = main.renderer

    let width = renderer.width
    let height = renderer.height
    let scale = 1
    let margins_x = this.margins_x || 0
    let margins_y = this.margins_y || 0

    this._list = {}
    let l = this._list

    if (_.get(options, 'screen')) {
      l.screen = new ScreenOverlay(this, this.guideo.width, this.guideo.height, _.get(options, 'screen'))
      l.screen.sprite.scale = new PIXI.Point(scale, scale)
      stage.addChild(l.screen.sprite)
    }

    if (_.get(options, 'scanlines')) {
      l.scanlines = new ScanlinesOverlay(this, width, height, _.get(options, 'scanlines'))
      stage.addChild(l.scanlines.sprite)
    }

    if (_.get(options, 'scanline')) {
      l.scanline = new ScanlineOverlay(this, width, height, _.get(options, 'scanline'))
      stage.addChild(l.scanline.sprite)
    }

    if (_.get(options, 'rgb')) {
      l.rgb = new RgbOverlay(this, width, height, _.get(options, 'rgb'))
      stage.addChild(l.rgb.sprite)
    }

    if (_.get(options, 'noises')) {
      l.noises = new NoisesOverlay(this, width, height, _.get(options, 'noises'))
    }

    if (_.get(options, 'crt')) {
      l.crt = new CrtOverlay(this, width, height, _.get(options, 'crt'))
      stage.addChild(l.crt.sprite)
    }

    if (_.get(options, 'monitor')) {
      let tex = PIXI.Texture.fromImage('./build/' + require('file?name=assets/[path]/[name].[ext]!../../assets/imgs/crt.png'))
      l.monitor = new PIXI.Sprite(tex)
      l.monitor.width = width + margins_x
      l.monitor.height = height + margins_y
      l.monitor.x = margins_x / -2
      l.monitor.y = margins_y / -2
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
