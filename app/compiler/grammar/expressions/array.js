import { Node } from '../../parser.js'

export default Mixin(superclass => class ArrayExpressions extends superclass {

  array_expr () {
    let node = new Node(this, this.token)
    node.data.args = []
    this.expect('open_bracket')
    if (!this.is('close_bracket')) {
      node.data.args = this.loop_while(this.expr, null, 'close_bracket', false, 'comma|eol')
    }
    this.expect('close_bracket')
    return node
  }

})
