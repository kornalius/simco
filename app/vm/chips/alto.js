import Chip from './chip.js'

/*
  shapes (1 = sine, 2 = square, 3 = triangle, 4 = sawtooth)

  [ cmd, value, ..., 00 ]

  cmd ( 0 = end, 1 = shape, 2 = pitch, 3 = volume, 4 = loop, 5 = detune, 6 = wait, 7 = label, 8 = envelop, 9 = filter, 10 = delay, 11 = vibrato, 12 = tremolo )

  value (2 bytes)

  ENVELOP ( 20 = sustain, 21 = hold, 22 = release, 23 = decay, 24 = attack )

  FILTER ( 30 = type (L H), 31 = freq, 32 = Q, 33 = envelop)

  REVERB ( )

  DELAY ( 40 = time, 41 = wet, 42 = feedback )

  VIBRATO ( 50 = shape, 51 = magnitude, 52 = speed, 53 = attack )

  TREMOLO ( 60 = shape, 61 = magnitude, 62 = speed, 63 = attack )
*/


export default class Alto extends Chip {

  constructor (main) {
    super(main)

    this._list = {}

    this.reset()
  }

  reset () {
    super.reset()

    for (let k in this._list) {
      let s = this._list[k]
      if (s.playable) {
        s.stop()
      }
    }

    return this
  }

  destroy () {
    this._list = {}
    super.destroy()
  }

  load (name, path, loop) {
    this._list[name] = new Wad({ source: require('file?name=[path]/[name].[ext]!../../_list/' + path), loop: loop || false })
    return this
  }

  name (name, random = false) {
    if (random) {
      let c = _.reduce(this._list, (r, v, k) => { return r + (_.startsWith(k, name) ? 1 : 0) }, 0)
      return name + _.random(1, c)
    }
    else {
      return name
    }
  }

  play (name, options = {}, random = false, repeat_min = 1, repeat_max = 1) {
    repeat_max = _.random(repeat_min, repeat_max)
    while (repeat_max > 0) {
      let s = this._list[this.name(name, random)]
      if (s) {
        s.play(_.defaultsDeep({}, options, { env: { hold: 500 } }))
      }
      repeat_max--
    }
    return this
  }

  stop (name) {
    let s = this._list[this.name(name, false)]
    if (s) {
      s.stop()
    }
    return this
  }

  free (name) {
    delete this._list[this.name(name)]
    return this
  }

  note (addr) {
    let { note } = this._process_note(addr)
    let id = _.uniqueId()
    this._list[id] = new Wad(note)
    return id
  }

  poly () {
    let id = _.uniqueId()
    this._list[id] = new Wad.Poly()
    return id
  }

  poly_add (poly_id, wad_id) {
    this._list[poly_id].add(this._list[wad_id])
  }

  poly_remove (poly_id, wad_id) {
    this._list[poly_id].remove(this._list[wad_id])
  }

  _process_note (addr) {
    // note ( 0 = end, 1 = shape, 2 = pitch, 3 = volume, 4 = loop, 5 = detune, 6 = wait, 7 = label, 8 = envelop, 9 = filter, 10 = delay, 11 = vibrato, 12 = tremolo )

    let note = {
      source: 'sine',
    }

    let r

    let mem = this.memory

    let cmd = mem[addr++]
    while (cmd !== 0) {
      switch (cmd) {
        case 1:  // shape
          let value = mem.ldb(addr)
          addr++
          if (value === 1) {
            note.source = 'sine'
          }
          else if (value === 2) {
            note.source = 'square'
          }
          else if (value === 3) {
            note.source = 'triangle'
          }
          else if (value === 4) {
            note.source = 'sawtooth'
          }
          else if (value === 5) {
            note.source = mem.lds(addr)
            addr += note.source.length + 1
          }
          break

        case 2:  // pitch
          note.pitch = mem.lds(addr, 3)
          addr += 3
          break

        case 3:  // volume
          note.volume = mem.ldb(addr) / 100
          addr++
          break

        case 4:  // loop
          note.loop = mem.ldb(addr) === 1
          addr++
          break

        case 5:  // detune
          note.detune = mem.ldb(addr) / 100
          addr++
          break

        case 6:  // wait
          note.wait = mem.ldw(addr)
          addr += 2
          break

        case 7:  // label
          note.label = mem.ldb(addr)
          addr++
          break

        case 8:  // envelop
          r = this._process_envelop(addr)
          note.env = r.envelop
          addr = r.addr
          break

        case 9:  // filter
          r = this._process_filter(addr)
          note.filter = r.filter
          addr = r.addr
          break

        case 10:  // delay
          r = this._process_delay(addr)
          note.delay = r.delay
          addr = r.addr
          break

        case 11:  // vibrato
          r = this._process_vibrato(addr)
          note.vibrato = r.vibrato
          addr = r.addr
          break

        case 12:  // tremolo
          r = this._process_tremolo(addr)
          note.tremolo = r.tremolo
          addr = r.addr
          break
      }

      cmd = mem[addr++]
    }

    return { note, addr }
  }

  _process_envelop (addr) {
    // ENVELOP ( 20 = sustain, 21 = hold, 22 = release, 23 = decay, 24 = attack )

    let envelop = {
    }

    let mem = this.memory

    let cmd = mem[addr++]
    while (cmd !== 0) {
      switch (cmd) {
        case 20:  // sustain
          envelop.sustain = mem.ldb(addr) / 100
          addr++
          break

        case 21:  // hold
          envelop.hold = mem.ldw(addr)
          addr += 2
          break

        case 22:  // release
          envelop.release = mem.ldw(addr)
          addr += 2
          break

        case 23:  // decay
          envelop.decay = mem.ldw(addr)
          addr += 2
          break

        case 24:  // attack
          envelop.attack = mem.ldw(addr)
          addr += 2
          break
      }

      cmd = mem[addr++]
    }

    return { envelop, addr }
  }

  _process_filter (addr) {
    // FILTER ( 30 = type (L H), 31 = freq, 32 = Q, 33 = envelop)

    let filter = {
    }

    let mem = this.memory

    let cmd = mem[addr++]
    while (cmd !== 0) {
      switch (cmd) {
        case 30:  // type (L H)
          let value = mem.ldb(addr)
          addr++
          if (value === 1) {
            filter.type = 'lowpass'
          }
          else if (value === 2) {
            filter.type = 'hipass'
          }
          break

        case 31:  // freq
          filter.freq = mem.ldw(addr)
          addr += 2
          break

        case 32:  // Q
          filter.q = mem.ldb(addr)
          addr++
          break

        case 33:  // envelop
          let r = this._process_envelop(addr)
          filter.env = r.envelop
          addr = r.addr
          break
      }

      cmd = mem[addr++]
    }

    return { filter, addr }
  }

  _process_reverb (addr) {

  }

  _process_delay (addr) {
    // DELAY ( 40 = time, 41 = wet, 42 = feedback )

    let delay = {
    }

    let mem = this.memory

    let cmd = mem[addr++]
    while (cmd !== 0) {
      switch (cmd) {
        case 40:  // time
          delay.time = mem.ldw(addr)
          addr += 2
          break

        case 41:  // wet
          delay.freq = mem.ldw(addr)
          addr += 2
          break

        case 42:  // feedback
          delay.feedback = mem.ldw(addr)
          addr += 2
          break
      }

      cmd = mem[addr++]
    }

    return { delay, addr }
  }

  _process_vibrato (addr) {
    // VIBRATO ( 50 = shape, 51 = magnitude, 52 = speed, 53 = attack )

    let vibrato = {
    }

    let mem = this.memory

    let cmd = mem[addr++]
    while (cmd !== 0) {
      switch (cmd) {
        case 50:  // time
          let value = mem.ldb(addr)
          addr++
          if (value === 1) {
            vibrato.shape = 'sine'
          }
          else if (value === 2) {
            vibrato.shape = 'square'
          }
          else if (value === 3) {
            vibrato.shape = 'triangle'
          }
          else if (value === 4) {
            vibrato.shape = 'sawtooth'
          }
          break

        case 51:  // magnitude
          vibrato.magnitude = mem.ldw(addr)
          addr += 2
          break

        case 52:  // speed
          vibrato.speed = mem.ldw(addr)
          addr += 2
          break

        case 53:  // attack
          vibrato.attack = mem.ldw(addr)
          addr += 2
          break
      }

      cmd = mem[addr++]
    }

    return { vibrato, addr }
  }

  _process_tremolo (addr) {
    // TREMOLO ( 60 = shape, 61 = magnitude, 62 = speed, 63 = attack )

    let tremolo = {
    }

    let mem = this.memory

    let cmd = mem[addr++]
    while (cmd !== 0) {
      switch (cmd) {
        case 60:  // shape
          let value = mem.ldb(addr)
          addr++
          if (value === 1) {
            tremolo.shape = 'sine'
          }
          else if (value === 2) {
            tremolo.shape = 'square'
          }
          else if (value === 3) {
            tremolo.shape = 'triangle'
          }
          else if (value === 4) {
            tremolo.shape = 'sawtooth'
          }
          break

        case 61:  // magnitude
          tremolo.magnitude = mem.ldw(addr)
          addr += 2
          break

        case 62:  // speed
          tremolo.speed = mem.ldw(addr)
          addr += 2
          break

        case 63:  // attack
          tremolo.attack = mem.ldw(addr)
          addr += 2
          break
      }

      cmd = mem[addr++]
    }

    return { tremolo, addr }
  }

}
