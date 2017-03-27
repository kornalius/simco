
export default Mixin(superclass => class DictTemplates extends superclass {

  dict_template (node, d) {
    let def = _.map(d.def, f => _.template('#{value}: #{expr}')({ value: f.value, expr: this.expr_template(f.data.expr) }))
    return {
      tmpl: '{#{def}}#{fields}',
      dat: {
        def: this.expr_template(def, ', '),
        fields: d.fields ? this.expr_template(d.fields, '') : ''
      }
    }
  }

})
