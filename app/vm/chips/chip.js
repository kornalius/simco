import { Emitter } from '../../emitter.js'
import { async } from '../../utils.js'
import { data_type_sizes, data_type_fns } from '../memory.js'

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
      this._size = (this._count || 1) * (this._width * this._height) * sz

      this._top = _.get(main, 'mem_map.' + name + '.top', 0)
      this._bottom = this._top + this._size - 1

      this._data = new window[data_type_fns[_.isString(data_size) ? data_size : 'i8'] + 'Array'](this.memory.buffer, this._top, this._size)
    }

    return this
  }

  reset () {
    this._force_update = false
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

  get force_update () { return this._force_update }
  set force_update (value) { this._force_update = value }

  update () {
    this._force_update = true
    return this
  }

  tick (t) {
    if (this._force_update) {
      this.refresh()
      this._force_update = false
    }
  }

  clear (v = 0) {
    if (this._data) {
      this._data.fill(v)
    }
    return this.update()
  }

  refresh (flip = true) {
    this.guideo.force_update = true
    this.guideo.refresh(flip)
    return this
  }

  async (fn, args, delay) {
    async(this, fn, args, delay)
  }

}
