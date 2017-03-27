
export default Mixin(superclass => class OperatorTemplates extends superclass {

  operator_template (node, d) {
    return {
      tmpl: '#{left} #{op} #{right}',
      dat: {
        op: node.value,
        left: this.expr_template(d.left),
        right: this.expr_template(d.right),
      }
    }
  }

})
