import Chip from './chip.js'
import { defaults } from '../../globals.js'
import CanvasTexture from '../canvastexture.js'

export default class Mickey extends Chip {

  constructor (main) {
    super(main)

    this.init('mickey', ['count', 'width', 'height', 'frame', 'color', 'dblClickDelay', 'dblClickDistance'])

    this._canvasTexture = new CanvasTexture()

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

    this._canvasTexture.destroy()

    this._canvasTexture.create(this._width * this._count, this._height)

    this._mouseLayer = this._main.guideo.mouseLayer

    this.memory.from_array_mask(this._top + this._frame * this._cell_size, [
      '..    ',
      '.w.   ',
      '.ww.  ',
      '.www. ',
      '.wwww.',
      '.w....',
      '...   ',
    ], defaults.chars_map)

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

    this.mouseLayer.removeChildren()

    this._canvasTexture.destroy()

    super.destroy()
  }

  get mouseLayer () { return this._mouseLayer }

  get canvasTexture () { return this._canvasTexture }

  get x () { return this._x }
  set x (value) {
    this._x = value
  }

  get y () { return this._y }
  set y (value) {
    this._y = value
  }

  get frame () { return this._frame }
  set frame (value) {
    this._frame = value
    this.update()
  }

  get btns () { return this._btns }
  set btns (value) {
    this._btns = value
  }

  get dblClickDelay () { return this._dblClickDelay }

  get dblClickDistance () { return this._dblClickDistance }

  update () {
    this._canvasTexture.updateTexture(this._data, this.rainbow)
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

    this._x = Math.min(x, width - this._width)
    this._y = Math.min(y, height - this._height)

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
