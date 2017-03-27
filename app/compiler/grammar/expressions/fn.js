import { Node } from '../../parser.js'

export default Mixin(superclass => class FnExpressions extends superclass {

  fn_expr (id, statement = false) {
    let node = new Node(this, this.token, { id })
    node.data.args = []
    if (statement) {
      node._in_class = this.in_class
      node._fn_level = this.fn_level++
    }
    this.next()
    this.frames.start('fn')
    if (this.is('open_paren')) {
      this.next()
      if (!this.is('close_paren')) {
        node.data.args = this.fn_args_def()
      }
      this.expect('close_paren')
    }
    node.data.body = this.block('end', false)
    this.frames.end()
    this.expect('end')
    if (statement) {
      this.fn_level--
    }
    return node
  }

  fn_arg () {
    this.frames.add(this.token, null, 'var')
    let node = new Node(this, this.token)
    this.next()
    if (this.is('assign')) {
      this.next()
      node.data.assign = this.expr()
    }
    return node
  }

  fn_args_def () { return this.loop_while(this.fn_arg, ['id'], 'close_paren', false, 'comma|eol') }

})
