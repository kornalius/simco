import Chip from './chip.js'

export default class Mickey extends Chip {

  constructor (main) {
    super(main)

    this.init('i32', 'mickey', ['count', 'dblClickDelay', 'dblClickDistance'])

    let stage = main.stage
    if (stage) {
      stage.interactive = true

      this._onMouseDown = this.onMouseDown.bind(this)
      this._onMouseMove = this.onMouseMove.bind(this)
      this._onMouseUp = this.onMouseUp.bind(this)

      stage.on('mousedown', this._onMouseDown)
      stage.on('rightdown', this._onMouseDown)
      stage.on('touchstart', this._onMouseDown)

      stage.on('mousemove', this._onMouseMove)

      stage.on('mouseup', this._onMouseUp)
      stage.on('touchend', this._onMouseUp)
      stage.on('mouseupoutside', this._onMouseUp)
      stage.on('touchendoutside', this._onMouseUp)
    }

    this.reset()
  }

  reset () {
    super.reset()

    this._x = 0
    this._y = 0
    this._btns = 0

    return this
  }

  destroy () {
    let stage = this._main.stage
    if (stage) {
      stage.off('mousedown', this._onMouseDown)
      stage.off('rightdown', this._onMouseDown)
      stage.off('touchstart', this._onMouseDown)

      stage.off('mousemove', this._onMouseMove)

      stage.off('mouseup', this._onMouseUp)
      stage.off('touchend', this._onMouseUp)
      stage.off('mouseupoutside', this._onMouseUp)
      stage.off('touchendoutside', this._onMouseUp)
    }
    super.destroy()
  }

  get x () { return this._x }
  set x (value) {
    this._x = value
  }

  get y () { return this._y }
  set y (value) {
    this._y = value
  }

  get btns () { return this._btns }
  set btns (value) {
    this._btns = value
  }

  get dblClickDelay () { return this._dblClickDelay }
  set dblClickDelay (value) {
    this._dblClickDelay = value
  }

  get dblClickDistance () { return this._dblClickDistance }
  set dblClickDistance (value) {
    this._dblClickDistance = value
  }

  draw () {
    return this
  }

  getEventInfo (e) {
    let renderer = this._main.renderer

    let size = new PIXI.Point(renderer.width - this._sprite.width, renderer.height - this._sprite.height)

    let x = Math.trunc(Math.min(size.x, Math.max(0, e.data.global.x)) / this._main.scale)
    let y = Math.trunc(Math.min(size.y, Math.max(0, e.data.global.y)) / this._main.scale)

    return { x, y, button: e.data.originalEvent.button }
  }

  onMouseDown (e) {
    let { x, y, button } = this.getEventInfo(e)

    switch (button) {
      case 0: // left
        this._btns |= 0x01
        break

      case 1: // middle
        this._btns |= 0x02
        break

      case 2: // right
        this._btns |= 0x04
        break
    }

    this.emit('mouse.down', { x, y, button })

    e.stopPropagation()
  }

  onMouseMove (e) {
    let { x, y, button } = this.getEventInfo(e)

    this._x = x
    this._y = y

    this.emit('mouse.move', { x, y, button })

    this.update()

    e.stopPropagation()
  }

  onMouseUp (e) {
    let { x, y, button } = this.getEventInfo(e)

    switch (button) {
      case 0: // left
        this._btns &= ~0x01
        break

      case 1: // middle
        this._btns &= ~0x02
        break

      case 2: // right
        this._btns &= ~0x04
        break
    }

    this.emit('mouse.up', { x, y, button })

    e.stopPropagation()
  }

}
