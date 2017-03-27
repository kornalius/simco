const electron = require('electron')
const { remote, screen, dialog } = electron
const { app, BrowserWindow } = remote

const _ = require('underscore-plus')
_.extend(_, require('lodash'))

_.templateSettings.interpolate = /#{([\s\S]+?)}/g

const fs = require('fs-promise')

import path from 'path'
import raf from 'raf'
import performance from 'performance-now'

import { Mixin, mix } from 'mixwith'
window.Mixin = Mixin
window.mix = mix

let userPath = path.join(app.getAppPath(), '/user')
if (!fs.existsSync(userPath)) {
  fs.mkdirs(userPath)
}

let IS_WIN = /^win/.test(process.platform)
let IS_OSX = process.platform === 'darwin'
let IS_LINUX = process.platform === 'linux'
let dirs = {
  build: __dirname,
  cwd: app.getAppPath(),
  home: app.getPath('home'),
  app: app.getPath('appData'),
  user: userPath,
  tmp: app.getPath('temp'),
  root: app.getPath('exe'),
  node_modules: path.join(userPath, 'node_modules'),
  user_pkg: path.join(userPath, 'package.json'),
}

let name = app.getName()
let version = app.getVersion()

let openFile = (...args) => {
  try {
    return dialog.showOpenDialog.apply(dialog, args)
  }
  catch (err) {
    console.error(err)
  }
  return null
}

let saveFile = (...args) => {
  try {
    return dialog.showSaveDialog.apply(dialog, args)
  }
  catch (err) {
    console.error(err)
  }
  return null
}

let messageBox = (...args) => {
  try {
    return dialog.showMessageBox.apply(dialog, args)
  }
  catch (err) {
    console.error(err)
  }
  return null
}

let map_getters = (source, target, defs) => {
  for (let k in defs) {
    let fn = defs[k]
    Object.defineProperty(source, k, {
      get: () => fn.call(target, source),
      enumerable: true,
      configurable: true,
    })
  }
}

let map_getters_return_this = (source, target, defs) => {
  for (let k in defs) {
    let fn = defs[k]
    Object.defineProperty(source, k, {
      get: () => {
        fn.call(target, source)
        return source
      },
      enumerable: true,
      configurable: true,
    })
  }
}

let now = () => performance.now()

let delay = ms => {
  // setTimeout(() => {}, ms)
  let t = performance.now()
  let c = t
  while (c - t <= ms) {
    // PIXI.ticker.shared.update(c)
    c = performance.now()
  }
}

let async = (context, fn, args, delay) => {
  if (_.isNumber(args)) {
    delay = args
    args = []
  }
  if (!_.isArray(args)) {
    args = [args]
  }
  setTimeout(() => {
    fn.call(context, ...args)
  }, delay || 1)
}

let buffer_to_string = b => {
  let len = b.length
  let i = 0
  let s = ''
  while (i < len) {
    s += b[i++].toString(16)
  }
  return s
}

let string_to_buffer = str => {
  let len = str.length
  let i = 0
  let b = new Buffer(Math.trunc(str.length / 2))
  let x = 0
  while (i < len) {
    let hex = str.substr(i, 2)
    b[x++] = parseInt(hex, 16)
    i += 2
  }
  return b
}

let string_buffer = (str, len = 0) => {
  len = len || str.length
  var b = new Buffer(len)
  b.write(str, 0, str.length, 'ascii')
  return b
}

let normalizeMessages = (...message) => {
  let args = []
  for (let m of message) {
    if (_.isArray(m)) {
      args.push(m.join(', '))
    }
    else if (_.isString(m)) {
      args.push(m)
    }
  }
  return args
}

let hex = (value, size = 32) => '$' + _.padStart(value.toString(16), Math.trunc(size / 4), '0')

let buffer_dump = (buffer, options = {}) => {
  let width = options.width || 16
  let caps = options.caps || 'upper'
  let indent = _.repeat(' ', options.indent || 0)

  let zero = (n, max) => {
    n = n.toString(16)
    if (caps === 'upper') { n = n.toUpperCase() }
    while (n.length < max) {
      n = '0' + n
    }
    return n
  }

  let len = Math.min(buffer.byteLength, options.length || buffer.byteLength)
  let rows = Math.ceil(len / width)
  let last = len % width || width
  let offsetLength = len.toString(16).length
  if (offsetLength < 6) { offsetLength = 6 }

  let arr = new Uint8Array(buffer)

  let str = indent + 'Offset'
  while (str.length < offsetLength) {
    str += ' '
  }

  str += '  '

  for (let i = 0; i < width; i++) {
    str += ' ' + zero(i, 2)
  }

  if (len) {
    str += '\n'
  }

  let b = 0

  for (let i = 0; i < rows; i++) {
    str += indent + zero(b, offsetLength) + '  '
    let lastBytes = i === rows - 1 ? last : width
    let lastSpaces = width - lastBytes

    for (let j = 0; j < lastBytes; j++) {
      str += ' ' + zero(arr[b], 2)
      b++
    }

    for (let j = 0; j < lastSpaces; j++) {
      str += '   '
    }

    b -= lastBytes
    str += '   '

    for (let j = 0; j < lastBytes; j++) {
      let v = arr[b]
      str += v > 31 && v < 127 || v > 159 ? String.fromCharCode(v) : '.'
      b++
    }

    str += '\n'
  }

  return str
}

let utoa = str => window.btoa(unescape(encodeURIComponent(str)))

let atou = str => decodeURIComponent(escape(window.atob(str)))

window.utoa = utoa
window.atou = atou


let instanceFunction = (target, name, fn, force = false) => {
  if (force || !target.hasOwnProperty(name)) {
    Object.defineProperty(target, name, {
      value: fn,
      writable: true,
    })
  }
}

let instanceFunctions = (target, source, names) => {
  for (let n of names) {
    if (_.isArray(n)) {
      instanceFunction(target, n[0], source[n[1]])
    }
    else {
      instanceFunction(target, n, source[n])
    }
  }
}

export {
  _,
  name,
  version,
  electron,
  dialog,
  openFile,
  saveFile,
  messageBox,
  remote,
  screen,
  BrowserWindow,
  app,
  fs,
  path,
  userPath,
  IS_WIN,
  IS_OSX,
  IS_LINUX,
  dirs,
  raf,
  now,
  Mixin,
  mix,
  map_getters,
  map_getters_return_this,
  delay,
  async,
  buffer_to_string,
  string_to_buffer,
  string_buffer,
  normalizeMessages,
  hex,
  buffer_dump,
  utoa,
  atou,
  instanceFunction,
  instanceFunctions,
}
