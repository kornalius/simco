import { Node } from '../../parser.js'

export default Mixin(superclass => class AssignStatements extends superclass {

  assign_statement () {
    let node = null
    let id = this.token
    this.next()
    if (this.is('fn_assign')) {
      node = this.fn_expr(id, true)
      id._fn = true
    }
    else {
      node = new Node(this, this.token, { id })
      this.next()
      node.data.expr = this.expr()
    }
    this.frames.add(id, null, id._fn ? 'fn' : 'var')
    return node
  }

})
