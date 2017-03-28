import _ from 'lodash'
import { path } from '../utils.js'

import TokenTypes from './tokens/types.js'
import ConstToken from './tokens/const.js'
import IncludeToken from './tokens/include.js'

class Token {

  constructor (lexer, type, value, start, end) {
    if (lexer instanceof Token) {
      let t = lexer
      this.lexer = t.lexer
      this._type = t._type
      this._reserved = t._reserved
      this.value = t.value
      this.start = _.clone(t.start)
      this.end = _.clone(t.end)
      this.length = t.value.length
    }
    else {
      this.lexer = lexer
      this._type = type
      this._reserved = false
      this.value = value || ''
      this.start = start || { offset: 0, line: 0, column: 0 }
      this.end = end || { offset: 0, line: 0, column: 0 }
      this.length = this.end.offset - this.start.offset
    }
  }

  is (e) {
    if (_.isString(e)) {
      let parts = e.split('|')
      if (parts.length > 1) {
        for (let p of parts) {
          if (this.is(p)) {
            return true
          }
        }
      }
      else {
        return e === '.' || this.type === e || this.value === e
      }
    }
    else if (_.isRegExp(e)) {
      return this.type.match(e) || this.value.match(e)
    }
    else if (_.isArray(e)) {
      for (let i of e) {
        if (this.is(i)) {
          return true
        }
      }
    }
    return false
  }

  get type () {
    if (this._type === 'math_assign' || this._type === 'logic_assign') {
      this._type = 'assign'
    }
    else if (this._type === 'super') {
      this._type = 'super'
    }
    return this._type
  }

  toString () {
    return _.template('"#{value}" at #{path}(#{line}:#{column})')({ value: this.value, line: this.start.line, column: this.start.column, path: path.basename(this.lexer.path) })
  }

}


class EmptyClass {}

export default class Lexer extends mix(EmptyClass).with(
  TokenTypes,
  ConstToken,
  IncludeToken
) {

  constructor () {
    super()
    this.reset()
  }

  reset (path, text) {
    this.errors = 0
    this.path = path || ''
    this.text = text || ''
    this.length = this.text.length
    this.offset = 0
    this.line = 1
    this.column = 1
    this.tokens = []
    this.constants = {}
    return this
  }

  validOffset (offset) { return offset >= 0 && offset < this.length }

  eos () { return this.validOffset(this.offset) }

  char_at (i) { return this.text.charAt(i) }

  subtext (i) { return this.text.substring(i) }

  peek () {
    let pos_info = (offset, line, column) => { return { offset, line, column } }

    let token = null
    let l = _.last(this.tokens)
    let offset = this.offset
    let len = 0

    while ([' ', '\t'].indexOf(this.char_at(offset)) !== -1) {
      if (l && !l.next_is_space) {
        l.next_is_space = true
      }
      if (!this.validOffset(offset)) {
        return { token, offset }
      }
      offset++
    }

    let old_offset = offset

    let line = this.line
    let column = this.column
    for (let k in this.token_types) {
      let r = this.subtext(offset).match(this.token_types[k])
      if (r && r.index === 0) {
        let value = r.length > 1 ? r.slice(1).join('') : r.join('')
        len = r[0].length
        token = new Token(this, k, value, pos_info(offset, line, column), pos_info(offset + len, line, column + len - 1))
        offset += len
        break
      }
    }
    if (offset === old_offset) {
      this.offset = offset + 1
    }
    return { token, offset, len }
  }

  insertToken (t) {
    let c = this.constants[t.value]
    if (_.isArray(c)) {
      for (let t of c) {
        this.insertToken(t)
      }
    }
    else {
      this.tokens.push(t)
    }
  }

  next () {
    let { token, offset, len } = this.peek()

    while (token && token._type === 'comment') {
      let t = this.peek()
      token = t.token
      offset = t.offset
      len = t.len
      this.offset = offset
      this.column += len + 1
    }

    if (token) {
      if (token.type === 'const') {
        token = this.const_token(token, offset, len)
      }

      else if (token.type === 'include') {
        token = this.include_token(token, offset, len)
      }

      else {
        this.insertToken(token)
        this.offset = offset
        this.column += len + 1
      }

      if (token && token.is('eol')) {
        this.line++
        this.column = 1
      }
    }

    return token
  }

  run (path, text) {
    if (!text) {
      text = path
      path = ''
    }
    this.reset(path, text)
    while (this.validOffset(this.offset)) {
      this.next()
    }
    return this
  }

  dump () {
    console.info('lexer dump')
    console.log(this.tokens)
    console.log('')
  }

}
