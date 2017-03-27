
export default Mixin(superclass => class IdStatements extends superclass {

  id_statement (first = true) {
    if (this.is('super')) {
      return this.super_expr()
    }
    else {
      return this.id_expr(first)
    }
  }

})
