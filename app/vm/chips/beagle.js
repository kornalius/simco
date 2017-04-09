import Chip from './chip.js'
import CanvasTexture from '../canvastexture.js'

export default class Beagle extends Chip {

  constructor (main) {
    super(main)

    this.init('beagle', ['width', 'height', 'blinkrate', 'visible'])

    this._canvasTexture = new CanvasTexture()

    this._color = main.defaults('beagle.color', 15)

    this.reset()
  }

  reset () {
    super.reset()

    this._last = 0

    this._screenSprite = this.guideo.screenSprite
    this._scale = this.guideo.scale

    this._canvasTexture.destroy()

    this._canvasTexture.create(this._width, this._height)

    this._cursorLayer = this._main.guideo.cursorLayer

    if (this._sprite) {
      this._sprite.destroy()
      this._sprite = null
    }

    this._cursorLayer.removeChildren()

    this._sprite = new PIXI.Graphics()
    this._sprite.visible = false

    this._cursorLayer.addChild(this._sprite)

    this.draw()

    return this.move_to(13, 6)
  }

  destroy () {
    if (this._sprite) {
      this._sprite.destroy()
      this._sprite = null
    }

    this.cursorLayer.removeChildren()

    this._canvasTexture.destroy()

    super.destroy()
  }

  tick (t) {
    if (t - this._last >= this._blinkrate) {
      this.blink()
      this._last = t
    }
    super.tick(t)
  }

  get x () { return this._x }
  set x (value) { this._x = value }

  get y () { return this._y }
  set y (value) { this._y = value }

  get color () { return this._color }
  set color (value) {
    this._color = value
    this.draw()
    console.log(this._color)
  }

  get cursorLayer () { return this._cursorLayer }
  get sprite () { return this._sprite }

  get canvasTexture () { return this._canvasTexture }

  blink () {
    if (this._visible) {
      this._sprite.visible = !this._sprite.visible
      this.update()
    }
    return this
  }

  move_to (x, y) {
    const orwell = this.orwell
    const w = orwell.width
    const h = orwell.height

    if (x > w) {
      x = w
    }
    else if (x < 0) {
      x = 0
    }

    if (y > h) {
      y = h
    }
    else if (y < 0) {
      y = 0
    }

    this._x = x
    this._y = y

    this._sprite.x = x * this._width
    this._sprite.y = y * this._height

    return this.update()
  }

  move_by (x, y) { return this.move_to(this._x + x, this._y + y) }

  draw () {
    let c = this.guideo.rainbow.color_rgb(this._color)
    this._sprite.beginFill(c, 1)
    this._sprite.drawRect(0, 0, this._width, this._height)
    this._sprite.endFill()
    return this
  }
}
