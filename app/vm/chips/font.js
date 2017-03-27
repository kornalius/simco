import Chip from './chip.js'

export default class Font extends Chip {

  constructor (main) {
    super(main)

    this.init('i8', 'font', ['count', 'width', 'height'])

    this.reset()
  }

  draw (x, y, c, fg = 1, bg = 0) {
    let w = this._width
    let h = this._height
    let sz = this._size
    let data = this._data
    let video = this.video_chip

    let ptr = this._top + c * sz
    for (let by = 0; by < h; by++) {
      let pi = (y + by) * w + x
      for (let bx = 0; bx < w; bx++) {
        video.pixel(pi++, data[ptr++] ? fg : bg)
      }
    }

    return this.update()
  }

}
