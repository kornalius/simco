import Chip from './chip.js'

export default class Mickey extends Chip {

  constructor (main) {
    super(main)

    this.init('mickey', ['count', 'frame', 'width', 'height', 'color', 'dblClickDelay', 'dblClickDistance'])

    this._default_frame = this._frame
    this._default_color = this._color

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
    this._color = this._default_color
    this._frame = this._default_frame
    this._btns = 0

    this.memory.from_array_mask(this._top + this._frame * this._cell_size, [
      '..    ',
      '.X.   ',
      '.XX.  ',
      '.XXX. ',
      '.XXXX.',
      '.X....',
      '...   ',
    ], { ' ': 16, X: 15, '.': 0 })

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
    this.restore()
    this._x = value
    this.draw()
  }

  get y () { return this._y }
  set y (value) {
    this.restore()
    this._y = value
    this.draw()
  }

  get frame () { return this._frame }
  set frame (value) {
    this.restore()
    this._frame = value
    this.draw()
  }

  get btns () { return this._btns }
  set btns (value) {
    this._btns = value
  }

  get dblClickDelay () { return this._dblClickDelay }

  get dblClickDistance () { return this._dblClickDistance }

  store (x, y) {
    return this.guideo.copy_rect(x || this._x, y || this._y, this._width, this._height, this._top + this._count * this._cell_size)
  }

  restore (x, y) {
    return this.guideo.blit(this._top + this._count * this._cell_size, x || this._x, y || this._y, this._width, this._height)
  }

  draw (frame, x, y, color) {
    this.store(x, y)
    return this.guideo.blit(this._top + (frame || this._frame) * this._cell_size, x || this._x, y || this._y, this._width, this._height)
  }

  getEventInfo (e) {
    let renderer = this._main.renderer

    let size = new PIXI.Point(renderer.width - this._width, renderer.height - this._height)

    let x = Math.trunc(Math.min(size.x, Math.max(0, e.data.global.x)) / this.guideo.scale)
    let y = Math.trunc(Math.min(size.y, Math.max(0, e.data.global.y)) / this.guideo.scale)

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
    const width = this.guideo.width
    const height = this.guideo.height

    let { x, y, button } = this.getEventInfo(e)

    this.restore()

    this._x = Math.min(x, width - this._width)
    this._y = Math.min(y, height - this._height)

    this.draw()

    this.emit('mouse.move', { x, y, button })

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
