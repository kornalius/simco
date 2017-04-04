
export default class CanvasTexture {

  create (width, height) {
    this._width = width
    this._height = height

    this._size = width * height

    this._canvasBuffer = new PIXI.CanvasBuffer(this._width, this._height)

    this._texture = PIXI.Texture.fromCanvas(this._canvasBuffer.canvas, PIXI.SCALE_MODES.NEAREST)
    this._texture.scaleMode = PIXI.SCALE_MODES.NEAREST

    this._context = this._canvasBuffer.canvas.getContext('2d', { alpha: true, antialias: false })
    this._context.clearRect(0, 0, this._width, this._height)

    this._imageData = this._context.getImageData(0, 0, this._width, this._height)

    this._pixels = new Uint32Array(this._imageData.data.buffer)

    this._canvasTexture.clear()
  }

  destroy () {
    if (this._texture) {
      this._texture.destroy()
      this._texture = null
    }

    if (this._canvasBuffer) {
      this._canvasBuffer.destroy()
      this._canvasBuffer = null
    }

    if (this._sprite) {
      this._sprite.destroy()
      this._sprite = null
    }
  }

  get size () { return this._size }

  get width () { return this._width }
  get height () { return this._height }

  get canvasBuffer () { return this._canvasBuffer }
  get texture () { return this._texture }
  get context () { return this._context }
  get imageData () { return this._imageData }
  get pixels () { return this._pixels }

  get sprite () {
    if (!this._sprite) {
      this._sprite = new PIXI.Sprite(this._texture)
    }
    return this._sprite
  }

  updateTexture (data, palette) {
    const size = this._size
    const pixels = this._pixels

    for (let i = 0; i < size; i++) {
      pixels[i] = palette.color(data[i])
    }

    this._context.putImageData(this._imageData, 0, 0)

    this._texture.update()

    return this
  }

}
