import Chip from './chip.js'

export default class Palette extends Chip {

  constructor (main) {
    super(main)

    this.init('i32', 'palette', ['count'])

    this.reset()
  }

  reset () {
    super.reset()

    this._data[0] = 0x000000
    this._data[1] = 0x800000
    this._data[2] = 0x008000
    this._data[3] = 0x808000
    this._data[4] = 0x000080
    this._data[5] = 0x800080
    this._data[6] = 0x008080
    this._data[7] = 0xc0c0c0
    this._data[8] = 0x808080
    this._data[9] = 0xff0000
    this._data[10] = 0x00ff00
    this._data[11] = 0xffff00
    this._data[12] = 0x0000ff
    this._data[13] = 0xff00ff
    this._data[14] = 0x00ffff
    this._data[15] = 0xffffff

    return this
  }

  get black () { return 0 }
  get dkred () { return 1 }
  get dkgreen () { return 2 }
  get dkyellow () { return 3 }
  get dkblue () { return 4 }
  get dkfuchsia () { return 5 }
  get teal () { return 6 }
  get grey () { return 7 }
  get dkgrey () { return 8 }
  get red () { return 9 }
  get lime () { return 10 }
  get yellow () { return 11 }
  get blue () { return 12 }
  get fuchsia () { return 13 }
  get cyan () { return 14 }
  get white () { return 15 }

  from_rgb (c) { return _.find(this._data, c) }

  to_rgb (c) { return this._data[c] }

}
