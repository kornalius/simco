import { Emitter } from '../../emitter.js'
import { async } from '../../utils.js'
import { data_type_sizes, data_type_fns } from '../memory.js'

var currentOffset = 0

export default class Chip extends Emitter {

  constructor (main) {
    super()
    this._main = main
  }

  init (data_size = 'i8', name = '', keys = [], nodata = false) {
    let main = this._main

    for (let k of keys) {
      this['_' + k] = main.default(name + '.' + k)
    }

    if (!nodata) {
      let sz = _.isNumber(data_size) ? data_size : data_type_sizes[data_size]
      this._size = (this._count || 1) * ((this._width || 1) * (this._height || 1)) * sz

      this._top = _.get(main, 'mem_map.' + name + '.top', currentOffset)
      this._bottom = this._top + this._size - 1

      _.set(main, 'mem_map.' + name, {
        top: this._top,
        bottom: this._bottom,
        size: this._size,
      })

      currentOffset = this._bottom + 1

      this._data = new window[data_type_fns[_.isString(data_size) ? data_size : 'i8'] + 'Array'](this.memory.buffer, this._top, this._count)
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

  get width () { return this._width }
  get height () { return this._height }
  get count () { return this._count }

  update (flip = false) {
    this.guideo.force_redraw = true
    this.guideo.force_flip = this.guideo.force_flip || flip
    return this
  }

  tick (t) {
  }

  clear (v = 0) {
    if (this._data) {
      this._data.fill(v)
    }
    return this.update()
  }

  async (fn, args, delay) {
    async(this, fn, args, delay)
  }

}
