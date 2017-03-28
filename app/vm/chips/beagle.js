import Chip from './chip.js'

export default class Beagle extends Chip {

  constructor (main) {
    super(main)

    this.init(2, 'beagle', ['width', 'height', 'color', 'blinkrate'])

    this.reset()
  }

  reset () {
    super.reset()
    this._x = 0
    this._y = 0
    this._last = 0
    this._blink_hidden = false
    return this
  }

  tick (t) {
    if (t - this._last >= this._blinkrate) {
      this.blink()
      this._last = t
    }
  }

  get x () { return this._x }
  set x (value) { this._x = value }

  get y () { return this._y }
  set y (value) { this._y = value }

  get color () { return this._color }
  set color (value) { this._color = value }

  get blinkrate () { return this._blinkrate }
  set blinkrate (value) { this._blinkrate = value }

  blink () {
    this._blink_hidden = !this._blink_hidden
    return this.update()
  }

  move_to (x, y) {
    let w = this.orwell.width
    let h = this.orwell.height

    if (x > w) {
      x = w
    }
    else if (x < 1) {
      x = 1
    }

    if (y > h) {
      y = h
    }
    else if (y < 1) {
      y = 1
    }

    this._x = x
    this._y = y

    return this.draw(x, y)
  }

  move_by (x, y) { return this.move_to(this._x + x, this._y + y) }

  draw (x, y) {
    let w = this._width
    let h = this._height
    let c = this._color
    let guideo = this.guideo

    for (let by = 0; by < h; by++) {
      let pi = (y + by) * w + x
      for (let bx = 0; bx < w; bx++) {
        guideo.pixel(pi++, c)
      }
    }

    return this.update()
  }

}
