import { Node } from '../../parser.js'

export default Mixin(superclass => class ClassStatements extends superclass {

  class_list () { return this.loop_while(this.single, ['id'], 'eol', true, 'comma') }

  class_statement () {
    let token = this.token
    this.next()
    let _extends = null
    let id = this.token
    this.next()
    if (this.is(':')) {
      this.next()
      _extends = this.class_list()
    }
    this.frames.add(id, null, 'class')
    this.in_class = true
    let body = this.block('end', false, 'class')
    this.in_class = false
    this.expect('end')
    return new Node(this, token, { id, _extends, body })
  }

})
