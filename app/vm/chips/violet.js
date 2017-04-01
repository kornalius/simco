import Chip from './chip.js'

export default class Violet extends Chip {

  constructor (main) {
    super(main)

    this._list = []

    this.init('violet', ['data_size', 'count', 'width', 'height'])

    this.reset()
  }

  get list () { return this._list }

  clear (v = 0) {
    this._list = []
    return super.clear(v)
  }

  find (name) {
    return _.find(this._list, { name })
  }

  index (name) {
    return _.indexOf(this._list, { name })
  }

  add (name, frame, x, y, z) {
    this._list.push({ name, frame, x, y, z })
    return this
  }

  del (name) {
    let i = this.index(name)
    if (i !== -1) {
      this._list.splice(i, 1)
    }
    return this
  }

  x (name, value) {
    let s = this.find(name)
    if (s && value) {
      s.x = value
    }
    return s ? s.x : 0
  }

  y (name, value) {
    let s = this.find(name)
    if (s && value) {
      s.y = value
    }
    return s ? s.y : 0
  }

  z (name, value) {
    let s = this.find(name)
    if (s && value) {
      s.z = value
    }
    return s ? s.z : 0
  }

  move_to (name, x, y, z) {
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

  move_by (name, x, y, z) {
    let s = this.find(name)
    if (s) {
      s.x += x
      s.y += y
      if (z) {
        s.z += z
      }
      this.update()
    }
    return this
  }

  draw (frame, x, y) {
    if (_.isUndefined(frame)) {
      for (let s of _.sortBy(this._list, 'z')) {
        this.draw(s.frame, s.x, s.y)
      }
    }
    else {
      this.guideo.blit(this._top + frame * this._cell_size, x, y, this._width, this._height)
    }

    return this
  }

}
