
export default Mixin(superclass => class ExpressionTemplates extends superclass {

  expr_template (node, separator) {
    let str = ''

    if (_.isArray(node)) {
      let a = []
      for (let n of node) {
        a.push(this.expr(n))
      }
      str = a.join(separator || '')
    }

    else {
      let d = node && node.data || {}
      let t = node ? this.template(node, d) : { tmpl: 'undefined', dat: {} }
      str = _.template(t.tmpl)(t.dat)
    }

    return str
  }

})
