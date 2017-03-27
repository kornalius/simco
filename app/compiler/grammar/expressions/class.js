import { error } from '../../../globals.js'

export default Mixin(superclass => class ClassExpressions extends superclass {

  new_expr () {
    let token = this.token
    this.next()
    let id = this.token
    this.next()
    if (!this.frames.exists(id.value, 'class')) {
      error(this, id, 'undeclared class')
      return null
    }
    let args = []
    if (this.is('open_paren')) {
      this.next()
      if (!this.is('close_paren')) {
        args = this.exprs('close_paren', false)
      }
      this.expect('close_paren')
    }
    return new Node(this, token, { id, args })
  }

  this_expr () {
    if (!this.in_class) {
      error(this, this.token, '@ cannot be used outside class definition')
      this.next()
      return null
    }
    if (this.is('this')) {
      return this.next_expr_node()
    }
    else if (this.is('this_field')) {
      return this.id_expr(false)
    }
    return null
  }

  super_expr () {
    if (!this.in_class) {
      error(this, this.token, 'super cannot be used outside class definition')
      this.next()
      return null
    }
    return this.id_expr(false)
  }

})
