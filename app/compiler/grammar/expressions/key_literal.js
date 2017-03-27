import { Node } from '../../parser.js'

export default Mixin(superclass => class KeyLiterals extends superclass {

  key_literal () {
    let node = new Node(this, this.token)
    this.expect('key')
    node.data.expr = this.expr()
    return node
  }

})
