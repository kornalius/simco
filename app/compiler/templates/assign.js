
export default Mixin(superclass => class AssignTemplates extends superclass {

  assign_template (node) {
    let t = {}
    if (node) {
      let d = node.data || {}

      let id = this.expr_template(d.id)
      let _let = node._let ? 'let ' : ''
      let expr
      let op

      if (node.is('assign')) {
        op = ' ' + node.value + ' '
        expr = this.expr_template(d.expr)
      }
      else if (node.is('fn_assign')) {
        op = !node._in_class || node._fn_level > 0 ? ' = ' : ' '
        expr = this.fn_def(d.args, d.body, node._in_class && node._fn_level === 0)
      }

      t = {
        tmpl: '#{_let}#{id}#{op}#{expr}',
        dat: { _let, id, op, expr }
      }
    }
    return t
  }

})
