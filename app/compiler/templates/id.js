
export default Mixin(superclass => class IdTemplates extends superclass {

  node_template (node, d) {
    return {
      tmpl: '#{node}',
      dat: { node }
    }
  }

  id_template (node, d) {
    return {
      tmpl: '#{field}#{value}#{fields}#{assign}',
      dat: {
        field: node._field ? '.' : '',
        value: node.value,
        fields: d.fields ? this.expr_template(d.fields, '') : '',
        assign: d.assign ? ' = ' + this.expr_template(d.assign, '') : '',
      }
    }
  }

  value_template (node, d) {
    return {
      tmpl: '#{value}',
      dat: { value: node.value }
    }
  }

})
