import Chip from './chip.js'
import CanvasTexture from '../canvastexture.js'

export default class Violet extends Chip {

  constructor (main) {
    super(main)

    this.init('violet', ['data_size', 'count', 'width', 'height'])

    this._canvasTexture = new CanvasTexture()

    this.reset()
  }

  reset () {
    super.reset()

    this._canvasTexture.destroy()

    this._canvasTexture.create(this._width * this._count, this._height)

    this._spritesLayer = this._main.guideo.spritesLayer

    this.clear()
  }

  destroy () {
    this._canvasTexture.destroy()

    super.destroy()
  }

  clear () {
    this.spritesLayer.removeChildren()

    super.clear()

    return this.update()
  }

  get spritesLayer () { return this._spritesLayer }

  get canvasTexture () { return this._canvasTexture }

  update () {
    this._canvasTexture.updateTexture(this._data, this.rainbow)
  }

  find (name) {
    return _.find(this.spritesLayer.children, { _name: name })
  }

  add (name, frame, x, y, z) {
    let s = new PIXI.Sprite(this._texture)
    s._name = name
    this.frame(name, frame)
    this.spritesLayer.addChild(s)
    return s
  }

  del (name) {
    let s = this.find(name)
    if (s) {
      this.spritesLayer.removeChild(s)
    }
    return this
  }

  frameRect (frame) {
    const w = this._width
    const h = this._height
    return new PIXI.Rectangle(frame * w, 0, frame * w + w, h)
  }

  x (name, value) {
    let s = this.find(name)
    if (s && value) {
      s.x = value
    }
    return s ? s.x : 0
  }

  y (name, value) {
    let s = this.find(name)
    if (s && value) {
      s.y = value
    }
    return s ? s.y : 0
  }

  z (name, value) {
    let s = this.find(name)
    if (s && value) {
      s.z = value
    }
    return s ? s.z : 0
  }

  frame (name, value) {
    let s = this.find(name)
    if (s && value) {
      s._frame = value
      s.frame = this.frameRect(value)
    }
    return s ? s._frame : 0
  }

  move_to (name, x, y, z) {
    let s = this.find(name)
    if (s) {
      s.x = x
      s.y = y
      if (z) {
        s.z = z
      }
      this.update()
    }
    return this
  }

  move_by (name, x, y, z) {
    let s = this.find(name)
    if (s) {
      s.x += x
      s.y += y
      if (z) {
        s.z += z
      }
      this.update()
    }
    return this
  }

}
