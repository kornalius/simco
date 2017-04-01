import Chip from './chip.js'
import { defaults } from '../../globals.js'

export default class Fonzo extends Chip {

  constructor (main) {
    super(main)

    this.init('fonzo', ['count', 'width', 'height'])

    this.reset()
  }

  reset () {
    super.reset()

    this.memory.from_array_mask(this._top + 33 * this._cell_size, [
      '       ',
      '   w   ',
      '   w   ',
      '   w   ',
      '   w   ',
      '   w   ',
      '       ',
      '   w   ',
      '       ',
    ], defaults.chars_map)

    this.memory.from_array_mask(this._top + 65 * this._cell_size, [
      '       ',
      '   w   ',
      '  w w  ',
      ' w   w ',
      ' w   w ',
      ' wwwww ',
      ' w   w ',
      ' w   w ',
      '       ',
    ], defaults.chars_map)

    this.memory.from_array_mask(this._top + 66 * this._cell_size, [
      '       ',
      ' wwww  ',
      ' w   w ',
      ' w   w ',
      ' wwww  ',
      ' w   w ',
      ' w   w ',
      ' wwww  ',
      '       ',
    ], defaults.chars_map)

    this.test()
  }

  draw (x, y, c, fg = 15, bg = 0) {
    return this.guideo.blit_mask(this._top + c * this._cell_size, x, y, this._width, this._height, fg, bg)
  }

  test () {
    this.draw(40, 40, 65, 10, 3)
    this.draw(47, 40, 66, 12, 15)
    this.draw(54, 40, 33, 5, 8)
  }

}
