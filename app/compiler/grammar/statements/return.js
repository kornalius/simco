import { Node } from '../../parser.js'

export default Mixin(superclass => class ReturnStatements extends superclass {

  return_statement () {
    let p = false
    let end = 'eol|end|close_paren'
    let node = new Node(this, this.token)
    node.data.args = []
    this.next()
    if (this.is('open_paren')) {
      p = true
      end = 'close_paren'
      this.next()
    }
    if (!p || !this.is('close_paren')) {
      node.data.args = this.exprs(end, false)
    }
    if (p) {
      this.expect('close_paren')
    }
    return node
  }

})
