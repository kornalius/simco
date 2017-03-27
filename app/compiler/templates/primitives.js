
export default Mixin(superclass => class PrimitiveTemplates extends superclass {

  string_template (node, d) {
    return {
      tmpl: '#{value}',
      dat: { value: this.str(node.value) }
    }
  }

})
