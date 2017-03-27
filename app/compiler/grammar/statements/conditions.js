import { Node } from '../../parser.js'

export default Mixin(superclass => class ConditionStatements extends superclass {

  if_statement (expect_end = true) {
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
    let true_body = this.block(['else', 'end'], false, 'if')
    let false_body = this.is('else') ? this.else_statement(false) : null
    if (expect_end) { this.expect('end') }
    return new Node(this, token, { expr: expr_block, true_body, false_body })
  }

  else_statement (expect_end = true) {
    let token = this.token
    let node = null
    this.next()
    if (this.is('if')) {
      node = this.if_statement(false)
      node.token = token
    }
    else {
      node = new Node(this, token, { false_body: this.block('end', false, 'else') })
    }
    if (expect_end) { this.expect('end') }
    return node
  }

})
