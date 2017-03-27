
export default Mixin(superclass => class ArrayTemplates extends superclass {

  array_template (node, d) {
    return {
      tmpl: '[#{args}]#{fields}',
      dat: {
        args: this.expr_template(d.args, ', '),
        fields: d.fields ? this.expr_template(d.fields, '') : '',
      }
    }
  }

})
