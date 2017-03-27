import { error } from '../../../globals.js'
import { Node } from '../../parser.js'

export default Mixin(superclass => class IdExpressions extends superclass {

  id_expr (first = true) {
    if (first && !this.frames.exists(this.token.value)) {
      error(this, this.token, 'undeclared identifier')
      return null
    }
    let node = new Node(this, this.token)
    this.next()
    if (this.is('open_bracket')) {
      if (!node.data.fields) {
        node.data.fields = []
      }
      node.data.fields.push(this.array_expr())
    }
    if (this.is('open_paren')) {
      this.next()
      node.token._type = 'fn'
      if (!this.is('close_paren')) {
        node.data.args = this.exprs('close_paren', false)
      }
      this.expect('close_paren')
    }
    while (this.is(['id_field', 'open_bracket'])) {
      if (!node.data.fields) {
        node.data.fields = []
      }
      node.data.fields.push(this.id_field())
      this.skip('comma')
    }
    return node
  }

  id_field () {
    let node = new Node(this, this.token)
    node.data.args = []
    node.token._type = 'id'
    node._field = true
    this.next()
    if (this.is('open_bracket')) {
      if (!node.data.fields) {
        node.data.fields = []
      }
      node.data.fields.push(this.array_expr())
    }
    if (this.is('open_paren')) {
      this.next()
      node.token._type = 'fn'
      if (!this.is('close_paren')) {
        node.data.args = this.exprs('close_paren', false)
      }
      this.expect('close_paren')
    }
    return node
  }

})
