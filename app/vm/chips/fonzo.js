import Chip from './chip.js'

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
      '   X   ',
      '   X   ',
      '   X   ',
      '   X   ',
      '   X   ',
      '       ',
      '   X   ',
      '       ',
    ], { ' ': 16, X: 1 })

    this.memory.from_array_mask(this._top + 65 * this._cell_size, [
      '       ',
      '   X   ',
      '  X X  ',
      ' X   X ',
      ' X   X ',
      ' XXXXX ',
      ' X   X ',
      ' X   X ',
      '       ',
    ], { ' ': 16, X: 1 })

    this.memory.from_array_mask(this._top + 66 * this._cell_size, [
      '       ',
      ' XXXX  ',
      ' X   X ',
      ' X   X ',
      ' XXXX  ',
      ' X   X ',
      ' X   X ',
      ' XXXX  ',
      '       ',
    ], { ' ': 16, X: 1 })

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
