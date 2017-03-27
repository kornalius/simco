import Chip from './chip.js'

export default class TextCursor extends Chip {

  constructor (main) {
    super(main)

    this._width = Math.trunc(this.text_chip.width / this.video_chip.font_chip.width)
    this._height = Math.trunc(this.text_chip.height / this.video_chip.font_chip.height)

    this.reset()
  }

  reset () {
    super.reset()
    this._x = 0
    this._y = 0
    this._color = this.palette_chip.white
    return this
  }

  get x () { return this._x }
  set x (value) { this._x = value }

  get y () { return this._y }
  set y (value) { this._y = value }

  get color () { return this._color }
  set color (value) { this._color = value }

  move_to (x, y) {
    let w = this.text_chip.width
    let h = this.text_chip.height

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
    let video = this.video_chip

    for (let by = 0; by < h; by++) {
      let pi = (y + by) * w + x
      for (let bx = 0; bx < w; bx++) {
        video.pixel(pi++, c)
      }
    }

    return this.update()
  }

}
