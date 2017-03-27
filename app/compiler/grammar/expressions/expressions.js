import { error } from '../../../globals.js'

export default Mixin(superclass => class Expressions extends superclass {

  exprs (end, end_next) { return this.loop_while(this.expr, null, end, end_next, 'comma') }

  expr () {
    let node = this.simple_expr()
    if (node) {
      let term = this.term_expr(node)
      if (term) { return term }

      let factor = this.factor_expr(node)
      if (factor) { return factor }

      let conditional = this.conditional_expr(node)
      if (conditional) { return conditional }

      let junction = this.junction_expr(node)
      if (junction) { return junction }
    }
    return node
  }

  simple_expr () {
    if (this.is(['number', 'string', 'char'])) { return this.next_expr_node() }
    else if (this.is('fn_assign')) { return this.fn_expr() }
    else if (this.is('open_paren')) { return this.sub_expr() }
    else if (this.is('open_bracket')) { return this.array_expr() }
    else if (this.is('open_curly')) { return this.dict_expr() }
    else if (this.is(['this', 'this_field'])) { return this.this_expr() }
    else if (this.is('super')) { return this.super_expr() }
    else if (this.is('new')) { return this.new_expr() }
    else if (this.is('id')) { return this.id_expr() }
    else {
      error(this, this.token, 'number, string, variable, variable paren or function call/expression expected')
      this.next()
    }
    return null
  }

  sub_expr () {
    let nodes = []
    nodes.push(new Node(this, this.token))
    this.expect('open_paren')
    if (!this.is('close_paren')) {
      nodes.push(this.expr())
    }
    nodes.push(new Node(this, this.token))
    this.expect('close_paren')
    return nodes
  }

  term_expr (left) { return this.is(/\+|-/) ? this.next_expr_node(left) : null }

  factor_expr (left) { return this.is(/\/|\*/) ? this.next_expr_node(left) : null }

  conditional_expr (left) { return this.is(/>|>=|<|<=|!=|<>|==/) ? this.next_expr_node(left) : null }

  junction_expr (left) { return this.is(/&|\|/) ? this.next_expr_node(left) : null }

})
