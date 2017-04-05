PIXI.Point.prototype.distance = function (target) {
  return Math.sqrt((this.x - target.x) * (this.x - target.x) + (this.y - target.y) * (this.y - target.y))
}

PIXI.Point.prototype.toString = function () {
  return _.template('(#{x}, #{y})')(this)
}

PIXI.Rectangle.prototype.toString = function () {
  return _.template('(#{x}, #{y}, #{x + width}, #{y + height})(#{width}, #{height})')(this)
}

const defaults = {
  boundscheck: false,

  type: 'i32',

  memory: {
    size: 512 * 1024,
  },

  memory_manager: {
    collect_delay: 30 * 1000,
  },

  border: {
    size: 64,
    color: 1,
  },

  guideo: {
    width: 320,
    height: 240,
    scale: 3,
  },

  rainbow: {
    count: 16,
    data_format: 'i32',
  },

  fonzo: {
    count: 256,
    width: 7,
    height: 9,
  },

  orwell: {
    width: 320 / 4,
    height: 240 / 6,
  },

  beagle: {
    width: 4,
    height: 6,
    color: 15,
    blinkrate: 500,
  },

  violet: {
    count: 32,
    width: 16,
    height: 16,
  },

  ken: {
    count: 256,
  },

  mickey: {
    count: 17,
    width: 6,
    height: 7,
    color: 15,
    frame: 0,
    dblClickDelay: 250,
    dblClickDistance: 8,
  },

  network: {
    count: 32 * 1024,
  },

  alto: {
    count: 4 * 1024,
  },

  chars_map: {
    '.': 0,
    r: 1,
    g: 2,
    y: 3,
    b: 4,
    p: 5,
    c: 6,
    E: 7,
    e: 8,
    R: 9,
    G: 10,
    Y: 11,
    B: 12,
    P: 13,
    C: 14,
    w: 15,
    ' ': 16,
  }
}

let errors = 0

let error = (t, msg) => {
  debugger
  errors++
  console.error(msg, 'at', t.value, '(' + t.row + ',' + t.col + ')')
}

let runtime_error = code => {
  let e = 'Unknown runtime error'
  switch (code) {
    case 0x01:
      e = 'Out of memory'
      break
    case 0x02:
      e = 'Stack underflow'
      break
    case 0x03:
      e = 'Stack overflow'
      break
    case 0x04:
      e = 'Invalid stack address'
      break
    case 0x05:
      e = 'Stack address already assigned'
      break
    case 0x06:
      e = 'Interrupt already exists'
      break
    case 0x07:
      e = 'Interrupt not found'
      break
    case 0x08:
      e = 'Address out of bounds'
      break
  }
  console.error(e)
}

let io_error = code => {
  let e = 'I/O runtime error'
  switch (code) {
    case 0x01:
      e = 'File not found'
      break
    case 0x02:
      e = 'Cannot open file'
      break
    case 0x03:
      e = 'Cannot close file'
      break
    case 0x04:
      e = 'Cannot lock file'
      break
    case 0x05:
      e = 'Cannot unlock file'
      break
    case 0x06:
      e = 'Invalid file id'
      break
    case 0x07:
      e = 'A floppy is already in the drive'
      break
    case 0x08:
      e = 'No floppy in drive'
      break
    case 0x09:
      e = 'Cannot delete file'
      break
    case 0x10:
      e = 'Drive is not spinning'
      break
  }
  console.error(e)
}


export {
  defaults,
  errors,
  error,
  runtime_error,
  io_error,
}
