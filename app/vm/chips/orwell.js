import Chip from './chip.js'

export default class Orwell extends Chip {

  constructor (main) {
    super(main)

    this.init(3, 'orwell', ['width', 'height'])

    this.reset()
  }

  clear (ch = ' ', bg = 0) {
    this._data.fill(0xFF0000 & ch.charCodeAt(0) | 0x0000FF & bg)
    return this.update()
  }

  draw () {
    let w = this._width
    let h = this._height
    let mem = this._data
    let fnt = this.fonzo
    let fw = fnt.width
    let fh = fnt.height

    let idx = 0
    for (let y = 0; y < h; y++) {
      let py = y * fh
      for (let x = 0; x < w; x++) {
        let c = mem[idx]
        if (c) {
          fnt.draw(x * fw, py, c, mem[idx + 1], mem[idx + 2])
        }
        idx += 3
      }
    }

    return this.update()
  }

  draw_char (x, y, c, fg, bg) {
    let fnt = this.fonzo
    fnt.draw(x * fnt.width, y * fnt.height, c, fg, bg)
    return this.update()
  }

  index (x, y) {
    return ((y - 1) * this._width + (x - 1)) * 3
  }

  line (y) {
    let l = this._width * 3
    return { start: y * l, end: (y + 1) * l - 3, length: l }
  }

  char_at (x, y) {
    let tidx = this.index(x, y)
    let mem = this._data
    return { ch: mem[tidx], fg: mem[tidx + 1], bg: mem[tidx + 2] }
  }

  put_char (ch, fg = 1, bg = 0) {
    switch (ch.charCodeAt(0)) {
      case 13:
      case 10:
        return this.cr()
      case 8:
        return this.bs()
    }

    let { x, y } = this.pos()
    this._data.set([ch.charCodeAt(0), fg, bg], this.index(x, y))

    this.beagle.x++
    if (this.beagle.x > this._width) {
      this.cr()
    }

    return this.draw_char(x, y, ch, fg, bg)
  }

  print (text, fg, bg) {
    for (let c of text) {
      this.put_char(c, fg, bg)
    }
    return this
  }

  pos () { return { x: this.beagle.x, y: this.beagle.y } }

  move_to (x, y) { return this.beagle.move_to(x, y) }

  move_by (x, y) { return this.beagle.move_by(x, y) }

  bol () { return this.move_to(1, this.beagle.y) }

  eol () { return this.move_to(this._width, this.beagle.y) }

  bos () { return this.move_to(1, 1) }

  eos () { return this.move_to(this._width, this._height) }

  bs () { return this.left().put_char(' ').left() }

  cr () { return this.move_to(1, this.beagle.y + 1) }

  lf () { return this.move_to(this.beagle.x, this.beagle.y + 1) }

  up () { return this.move_to(this.beagle.x, this.beagle.y - 1) }

  left () { return this.move_to(this.beagle.x - 1, this.beagle.y) }

  down () { return this.move_to(this.beagle.x, this.beagle.y + 1) }

  right () { return this.move_to(this.beagle.x + 1, this.beagle.y) }

  clear_eol (bg = 0) {
    let { x, y } = this.pos()
    let s = this.index(x, y)
    this._data.fill(0x0000FF & bg, s, this.index(this._width, y) - s)
    return this.update()
  }

  clear_eos (bg = 0) {
    let { x, y } = this.pos()
    let s = this.index(x, y)
    this._data.fill(0x0000FF & bg, s, this._size - s)
    return this.update()
  }

  clear_bol (bg = 0) {
    let { x, y } = this.pos()
    let s = this.index(x, y)
    this._data.fill(0x0000FF & bg, s, this.index(1, y) - s)
    return this.update()
  }

  clear_bos (bg = 0) {
    let { x, y } = this.pos()
    this._data.fill(0x0000FF & bg, 0, this.index(x, y) - 1)
    return this.update()
  }

  copy_line (sy, ty) {
    let si = this.line(sy)
    this._data.copy(si.start, this.line(ty), si.length)
    return this.update()
  }

  copy_col (sx, tx) {
    let mem = this._data
    sx *= 4
    tx *= 4
    for (let y = 0; y < this._height; y++) {
      let i = this.line(y)
      mem.copy(i.start + sx, i.start + tx, 3)
    }
    return this.update()
  }

  erase_line (y, bg = 0) {
    let i = this.line(y)
    this._data.fill(0x0000FF & bg, i.start, i.length)
    return this.update()
  }

  erase_col (x, bg = 0) {
    let mem = this._data
    let ls = this.line(0).start + x * 3
    let c = 0x0000FF & bg
    for (let y = 0; y < this._height; y++) {
      mem.fill(c, ls, 3)
      ls += this._width * 3
    }
    return this.update()
  }

  scroll (dy) {
    if (dy > 0) {
      let i = this.line(dy + 1)
      this._data.copy(i.start, 0, this._size)
      i = this.line(dy)
      let s = i.start
      this._data.fill(0, s, this._size - s)
      return this.update()
    }
    else if (dy < 0) {
      let i = this.line(dy + 1)
      this._data.copy(i.start, 0, this._size)
      i = this.line(dy)
      let s = i.start
      this._data.fill(0, s, this._size - s)
      return this.update()
    }
    return this
  }

}
