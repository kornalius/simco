import Chip from './chip.js'

export default class Violet extends Chip {

  constructor (main) {
    super(main)

    this._list = []

    this.init('i8', 'violet', ['count', 'width', 'height'])

    this.reset()
  }

  clear (v = 0) {
    this._list = []
    return super.clear(v)
  }

  find (name) {
    for (let s of this._list) {
      if (s.name === name) {
        return s
      }
    }
    return null
  }

  add (name, frame, x, y, z) {
    this._list.push({ name, frame, x, y, z, index: Number.MAX_VALUE })
    return this
  }

  del (name) {
    let s = this.find(name)
    if (s) {
      this._list.splice(s.index, 1)
    }
    return this
  }

  move (name, x, y, z) {
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

  move_by (name, x, y) {
    let s = this.find(name)
    if (s) {
      s.x = x
      s.y = y
      this.update()
    }
    return this
  }

  draw () {
    let sw = this._width
    let sh = this._height
    let sl = this._list
    let ss = this._size
    let data = this._data
    let guideo = this.guideo

    for (let s of _.sortBy(sl, 'z')) {
      let ptr = sl + s.frame * ss
      for (let by = 0; by < sh; by++) {
        let pi = (s.y + by) * sw + s.x
        for (let bx = 0; bx < sw; bx++) {
          guideo.pixel(pi++, data[ptr++])
        }
      }
    }

    return this.update()
  }

}
