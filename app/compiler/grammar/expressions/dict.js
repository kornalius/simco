import { Node } from '../../parser.js'

export default Mixin(superclass => class DictExpressions extends superclass {

  dict_expr () {
    let node = new Node(this, this.token)
    node.data.def = []
    this.expect('open_curly')
    if (!this.is('close_curly')) {
      node.data.def = this.loop_while(this.key_literal, ['key'], 'close_curly', false, 'comma|eol')
    }
    this.expect('close_curly')
    return node
  }

})
