import _ from 'lodash'

import { error } from '../globals.js'
import { Frames } from './frame.js'

import KeyLiteral from './grammar/key_literal.js'

import Statements from './grammar/statements/statements.js'
import IdStatements from './grammar/statements/id.js'
import AssignStatements from './grammar/statements/assign.js'
import ReturnStatements from './grammar/statements/return.js'
import ClassStatements from './grammar/statements/class.js'
import ConditionStatements from './grammar/statements/conditions.js'
import VarStatements from './grammar/statements/var.js'
import LoopStatements from './grammar/statements/loops.js'

import Expressions from './grammar/expressions/expressions.js'
import ArrayExpressions from './grammar/expressions/array.js'
import DictExpressions from './grammar/expressions/dict.js'
import FnExpressions from './grammar/expressions/fn.js'
import IdExpressions from './grammar/expressions/id.js'
import ClassExpressions from './grammar/expressions/class.js'

export class Node {

  constructor (parser, token, data) {
    this.parser = parser
    this.token = token
    this._in_class = false
    this._fn_level = 0
    this.data = data || {}
  }

  token_prop (name) { return this.token ? this.token[name] : null }

  get value () { return this.token_prop('value') }

  get type () { return this.token_prop('type') }

  get start () { return this.token_prop('start') }

  get end () { return this.token_prop('end') }

  get length () { return this.token_prop('length') }

  is (e) { return this.token ? this.token.is(e) : false }

  toString () { return this.token ? this.token.toString() : '' }

}


class EmptyClass {}

export class Parser extends mix(EmptyClass).with(
  KeyLiteral,

  Statements,
  IdStatements,
  AssignStatements,
  ReturnStatements,
  ClassStatements,
  ConditionStatements,
  VarStatements,
  LoopStatements,

  Expressions,
  ArrayExpressions,
  DictExpressions,
  FnExpressions,
  IdExpressions,
  ClassExpressions
) {

  constructor (lexer) {
    super ()
    this.lexer = lexer
    this.lexer.parser = this
    this.reset()
  }

  reset () {
    this.errors = 0
    this.offset = 0
    this.nodes = []
    this.frames = new Frames()
    this.prev_frame = null
    this.in_class = false
    this.fn_level = 0
  }

  validOffset (offset) { return offset >= 0 && offset < this.length }

  token_at (offset) { return this.validOffset(offset) ? this.tokens[offset] : null }

  get eos () { return this.offset >= this.length }

  get length () { return this.tokens.length }

  get tokens () { return this.lexer.tokens }

  get token () { return this.token_at(this.offset) }

  skip (e) { while (this.is(e) && !this.eos) { this.next() } }

  is (e) { return this.token ? this.token.is(e) : false }

  expect (e, next = true) {
    let r = this.token ? this.token.is(e) : false
    if (r) {
      if (next) { this.next() }
    }
    else { error(this, this.token, e, 'expected') }
    return r
  }

  match (offset, matches) {
    if (!_.isNumber(offset)) {
      matches = offset
      offset = this.offset
    }
    let tokens = []
    let m = 0
    while (this.validOffset(offset) && m < matches.length) {
      let token = this.tokens[offset++]
      if (!token.is(matches[m++])) { return null }
      tokens.push(token)
    }
    return tokens.length ? tokens : null
  }

  peek (c = 1) { return this.token_at(this.offset + c) }

  next (c = 1) {
    this.offset += c
    return this
  }

  loop_while (fn, matches, end, end_next, skip) {
    let nodes = []
    if (skip) { this.skip(skip) }
    while (!this.eos && (!end || !this.is(end)) && (!matches || this.match(matches))) {
      nodes.push(fn.call(this))
      if (skip) { this.skip(skip) }
    }
    if (end) { this.expect(end, end_next) }
    return nodes
  }

  next_expr_node (left) {
    let token = this.token
    let data = {}
    if (left) {
      this.next()
      data = { left, right: this.expr() }
    }
    let node = new Node(this, token, data)
    if (!left) { this.next() }
    return node
  }

  run () {
    this.reset()
    this.frames.start('globals')
    let nodes = this.statements()
    this.frames.end()
    this.nodes = nodes
    return nodes
  }

  dump () {
    console.info('parser dump')
    console.log(this.nodes)
    console.log('')
  }

}
