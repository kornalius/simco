
export default Mixin(superclass => class ClassTemplates extends superclass {

  this_template (node, d) {
    return {
      tmpl: 'this#{dot}#{field}#{fields}',
      dat: {
        dot: node.is('this_field') ? '.' : '',
        field: node.is('this_field') ? node.value : '',
        fields: d.fields ? this.expr_template(d.fields, '') : '',
      }
    }
  }

  new_template (node, d) {
    return {
      tmpl: 'new #{id}(#{args})',
      dat: {
        id: d.id.value,
        args: this.expr_template(d.args, ', '),
      }
    }
  }

})
