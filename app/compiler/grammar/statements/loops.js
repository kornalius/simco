import { Node } from '../../parser.js'

export default Mixin(superclass => class LoopStatements extends superclass {

  for_statement () {
    let token = this.token
    this.next()

    let v = this.token
    this.expect('id|var')
    this.expect('assign')
    let min_expr = this.expr()
    this.expect('to')
    let max_expr = this.expr()
    let step_expr = null
    if (this.is('step')) {
      this.next()
      step_expr = this.expr()
    }
    let body = this.block('end', false, 'for')
    this.expect('end')
    return new Node(this, token, { v, min_expr, max_expr, step_expr, body })
  }

  while_statement () {
    let token = this.token
    this.next()
    let expr_block
    if (this.is('open_paren')) {
      this.next()
      expr_block = this.expr()
      this.expect('close_paren')
    }
    else {
      expr_block = this.expr()
    }
    let body = this.block('end', false, 'while')
    this.expect('end')
    return new Node(this, token, { expr: expr_block, body })
  }

})
