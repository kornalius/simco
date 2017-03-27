import { error } from '../../../globals.js'

export default Mixin(superclass => class Statements extends superclass {

  block (end, end_next = true, block_type = null) {
    if (block_type) {
      this.frames.start(block_type)
    }
    let nodes = this.loop_while(this.statement, null, end, end_next, 'eol')
    if (block_type) {
      this.frames.end()
    }
    return nodes
  }

  statements () { return this.block() }

  single_statement () {
    let node = new Node(this, this.token)
    this.next()
    return node
  }

  statement () {
    if (this.match(['let', 'id'])) { return this.var_statement() } // variable definition
    else if (this.match(['id|id_field|this_field', 'assign|fn_assign'])) { return this.assign_statement() } // variable assignment
    else if (this.is('if')) { return this.if_statement() } // if block
    else if (this.is('for')) { return this.for_statement() } // while block
    else if (this.is('while')) { return this.while_statement() } // while block
    else if (this.is('return')) { return this.return_statement() } // return from function
    else if (this.is(['break', 'continue'])) { return this.single_statement() } // single statement
    else if (this.is('class')) { return this.class_statement() } // class statement
    else if (this.is(['id', 'super'])) { return this.id_statement() } // function call
    else {
      error(this, this.token, 'syntax error')
      this.next()
    }
    return null
  }

})
