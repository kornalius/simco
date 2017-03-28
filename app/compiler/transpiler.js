import _ from 'lodash'

import Templates from './templates/templates.js'
import CodeTemplates from './templates/code.js'
import BlockTemplates from './templates/block.js'
import StatementTemplates from './templates/statements.js'
import ExpressionTemplates from './templates/expressions.js'
import PrimitiveTemplates from './templates/primitives.js'
import OperatorTemplates from './templates/operators.js'
import IdTemplates from './templates/id.js'
import ClassTemplates from './templates/class.js'
import FnTemplates from './templates/fn.js'
import ArrayTemplates from './templates/array.js'
import DictTemplates from './templates/dict.js'
import AssignTemplates from './templates/assign.js'

class EmptyClass {}

export default class Transpiler extends mix(EmptyClass).with(
  Templates,
  CodeTemplates,

  BlockTemplates,
  StatementTemplates,
  ExpressionTemplates,

  PrimitiveTemplates,
  OperatorTemplates,
  IdTemplates,

  ClassTemplates,
  FnTemplates,

  ArrayTemplates,
  DictTemplates,

  AssignTemplates
) {

  constructor () {
    super()
    this.reset()
  }

  get length () { return this.lines.length }

  get eos () { return this.offset >= this.nodes.length }

  get node () { return this.node_at(this.offset) }

  validOffset (offset) { return offset >= 0 && offset < this.nodes.length }

  node_at (offset) { return this.validOffset(offset) ? this.nodes[offset] : null }

  peek (c = 1) { return this.node_at(this.offset + c) }

  next (c = 1) { this.offset += c }

  write (...values) { this.line += values.join('') }

  writeln (...values) {
    this.write(...values)
    this.lines = this.lines.concat(this.line.split('\n'))
    this.line = ''
  }

  reset (nodes) {
    this.errors = 0
    this.nodes = nodes || []
    this.lines = []
    this.line = ''
    this.offset = 0
    this.code = ''
    this.indent_level = 0
  }

  comma (nodes) {
    let a = []
    for (let n of nodes) {
      a.push(n instanceof Node ? this.expr(n) : n)
    }
    return a.join(', ')
  }

  ln (str) { return str + (!_.endsWith(str, '\n') ? '\n' : '') }

  indent (str) { return _.padStart('', this.indent_level * 2) + str }

  str (value) { return '\'' + value.replace(/'/g, '\'') + '\'' }

  run (nodes) {
    this.reset(nodes)
    this.code_start()
    while (!this.eos) {
      this.writeln(this.statement(this.node))
      this.next()
    }
    this.code_end()
    this.code = this.lines.join('\n')
    return this.code
  }

  dump () {
    console.info('transpiler dump')
    console.log(this.code)
    console.log('')
  }

}
