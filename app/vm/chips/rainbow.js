import Chip from './chip.js'

const s32 = new Uint32Array(4)
const s8 = new Uint8Array(s32.buffer)
const t32 = new Uint32Array(4)
const t8 = new Uint8Array(t32.buffer)

let reverse = x => {
  s32[0] = x
  t8[0] = s8[3]
  t8[1] = s8[2]
  t8[2] = s8[1]
  t8[3] = s8[0]
  return t32[0]
}

export default class Rainbow extends Chip {

  constructor (main) {
    super(main)

    this.init('rainbow', ['count'])

    this.reset()
  }

  reset () {
    super.reset()

    this._LE = this.main.LE

    this.color(0, 0x000000ff)
    this.color(1, 0x800000ff)
    this.color(2, 0x008000ff)
    this.color(3, 0x808000ff)
    this.color(4, 0x000080ff)
    this.color(5, 0x800080ff)
    this.color(6, 0x008080ff)
    this.color(7, 0xc0c0c0ff)
    this.color(8, 0x808080ff)
    this.color(9, 0xff0000ff)
    this.color(10, 0x00ff00ff)
    this.color(11, 0xffff00ff)
    this.color(12, 0x0000ffff)
    this.color(13, 0xff00ffff)
    this.color(14, 0x00ffffff)
    this.color(15, 0xffffffff)

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

  to_red (rgba) { return this.rgba(rgba).r }

  to_green (rgba) { return this.rgba(rgba).g }

  to_blue (rgba) { return this.rgba(rgba).b }

  to_alpha (rgba) { return this.rgba(rgba).a }

  split (rgba) {
    const LE = this._LE
    return {
      r: rgba >> (LE ? 24 : 0) & 0xFF,
      g: rgba >> (LE ? 16 : 8) & 0xFF,
      b: rgba >> (LE ? 8 : 16) & 0xFF,
      a: rgba >> (LE ? 0 : 24) & 0xFF,
    }
  }

  rgba (r, g, b, a) {
    let c = g ? a << 24 | r << 16 | g << 8 | b : r
    return this._LE ? reverse(c) : c
  }

  color (c, r, g, b, a) {
    const data = this._data
    if (r) {
      data[c] = this.rgba(r, g, b, a)
    }
    return data[c]
  }

  find_color (r, g, b, a) {
    const data = this._data
    let color = this.rgba(r, g, b, a)
    for (let c = 0; c < this._count; c++) {
      if (data[c] === color) {
        return c
      }
    }
    return -1
  }

}
