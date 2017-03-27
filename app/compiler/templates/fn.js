
export default Mixin(superclass => class FnTemplates extends superclass {

  fn_def (args, body, in_class) {
    return _.template('#{fn}(#{args}) #{body}')({
      fn: !in_class ? 'function ' : '',
      args: this.expr_template(args, ', '),
      body: this.block_template(body),
    })
  }

  fn_call_template (node, d) {
    let t = {}
    if (node) {
      let d = node.data || {}
      t = {
        tmpl: '#{field}#{fn}(#{args})',
        dat: {
          field: node._field ? '.' : '',
          fn: node.value,
          args: this.expr_template(d.args, ', '),
        }
      }
    }
    return t
  }

  fn_assign_template (node, d) {
    return {
      tmpl: '#{fn}',
      dat: { fn: this.fn_def(d.args, d.body) }
    }
  }

})
