import { Token } from '../../lexer.js'
import { Node } from '../../parser.js'

export default Mixin(superclass => class VarStatements extends superclass {

  var_statement () {
    let node = null
    this.next()
    if (!this.peek().is('assign|fn_assign')) {
      let t = new Token(this.token)
      t.value = '='
      t._type = 'assign'
      node = new Node(this, t, { id: this.token, expr: null })
      this.frames.add(this.token, null, 'var')
    }
    else {
      node = this.assign_statement()
    }
    node._let = true
    return node
  }

})
