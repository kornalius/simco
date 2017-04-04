import { Emitter } from '../../emitter.js'
import { async } from '../../utils.js'
import { data_type_sizes, data_type_fns } from '../memory.js'

var currentOffset = 0

export default class Chip extends Emitter {

  constructor (main) {
    super()

    this._main = main

    this._width = 0
    this._height = 0

    this._count = 0

    this._data = null
    this._data_format = null
    this._top = 0
    this._bottom = 0
    this._size = 0
    this._cell_size = 0
    this._data_size = 0
  }

  init (name = '', keys = [], nodata = false) {
    let main = this._main

    for (let k of keys) {
      this['_' + k] = main.defaults(name + '.' + k)
    }

    if (!nodata) {
      this._count = this._count || 1
      this._width = this._width || 1
      this._height = this._height || 1

      this._data_format = main.defaults(name + '.data_format') || 'i8'
      this._data_size = main.defaults(name + '.data_size') || 1
      this._data_size = _.isString(this._data_format) ? data_type_sizes[this._data_format] : this._data_size

      this._cell_size = this._width * this._height * this._data_size

      this._size = this._cell_size * this._count

      this._top = _.get(main, 'mem_map.' + name + '.top', currentOffset)
      this._bottom = this._top + this._size - 1

      _.set(main, 'mem_map.' + name, {
        top: this._top,
        bottom: this._bottom,
        size: this._size,
        data_format: this._data_format,
        data_size: this._data_size,
        cell_size: this._cell_size,
        count: this._count,
      })

      currentOffset = this._bottom + 1

      this._data = new window[data_type_fns[this._data_format] + 'Array'](this.memory.buffer, this._top, this._size)
    }

    return this
  }

  reset () {
    return this.clear()
  }

  destroy () {
  }

  get main () { return this._main }
  get memory () { return this._main.memory }

  get guideo () { return this._main.guideo }
  get rainbow () { return this.guideo.rainbow }
  get fonzo () { return this.guideo.fonzo }
  get orwell () { return this.guideo.orwell }
  get beagle () { return this.orwell.beagle }
  get violet () { return this.guideo.violet }

  get data () { return this._data }
  get top () { return this._top }
  get bottom () { return this._bottom }
  get size () { return this._size }

  get count () { return this._count }
  get data_size () { return this._data_size }
  get cell_size () { return this._cell_size }

  get width () { return this._width }
  get height () { return this._height }

  update (flip = false) {
    let guideo = this.guideo
    guideo.force_redraw = true
    guideo.force_flip = guideo.force_flip || flip
    return this
  }

  tick (t) {
  }

  clear (v = 0) {
    if (this._data) {
      this._data.fill(v)
    }
    return this
  }

  async (fn, args, delay) {
    async(this, fn, args, delay)
  }

}
