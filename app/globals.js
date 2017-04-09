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
    color: 12,
  },

  guideo: {
    width: 240,
    height: 168,
    scale: 4,
  },

  rainbow: {
    count: 16,
    data_format: 'i32',
  },

  fonzo: {
    count: 256,
    width: 6,
    height: 7,
  },

  orwell: {
    width: 240 / 6,
    height: 168 / 7,
  },

  beagle: {
    width: 6,
    height: 7,
    color: 15,
    blinkrate: 500,
    visible: true,
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
  },

  runtime_errors: {
    0x01: 'Out of memory',
    0x02: 'Stack underflow',
    0x03: 'Stack overflow',
    0x04: 'Invalid stack address',
    0x05: 'Stack address already assigned',
    0x06: 'Interrupt already exists',
    0x07: 'Interrupt not found',
    0x08: 'Address out of bounds',
  },

}

let errors = 0

let error = (t, msg) => {
  debugger
  errors++
  console.error(msg, 'at', t.value, '(' + t.row + ',' + t.col + ')')
  return null
}

let runtime_error = code => {
  console.error(defaults.runtime_errors[code] || 'Unknown runtime error')
  return 0
}


export {
  defaults,
  errors,
  error,
  runtime_error,
}
