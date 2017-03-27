import { runtime_error } from '../globals.js'

const _INT_RUNNING = 1
const _INT_PAUSED = 2

export default class Interrupt {

  constructor (main) {
    this._list = {}
    this._main = main
  }

  reset () {
    this.stop_all()
    return this
  }

  destroy () {
    this.reset()
  }

  get main () { return this._main }
  get memory () { return this._main.memory }

  find (name) { return this._list[name] }

  create (name, fn, ms = 500) {
    if (!this.find(name)) {
      this._list[name] = { name, status: _INT_RUNNING, ms, fn, last: 0 }
    }
    else {
      runtime_error(0x06)
    }
    return this
  }

  resume (name) {
    if (this.find(name)) {
      this._list[name].status = _INT_RUNNING
      this._list[name].last = performance.now()
    }
    else {
      runtime_error(0x07)
    }
    return this
  }

  pause (name) {
    if (this.find(name)) {
      this._list[name].status = _INT_PAUSED
    }
    else {
      runtime_error(0x07)
    }
    return this
  }

  stop (name) {
    if (this.find(name)) {
      delete this._list[name]
    }
    else {
      runtime_error(0x07)
    }
    return this
  }

  stop_all () {
    for (let k in this._list) {
      this.stop(k)
    }
    this._list = {}
    return this
  }

  tick (t) {
    for (let k in this._list) {
      let i = this._list[k]
      if (i.status === _INT_RUNNING) {
        let delay = t - i.last
        if (delay >= i.ms) {
          i.fn.apply(this, [delay - i.ms])
          i.last = t
        }
      }
    }
  }

}
