
export default Mixin(superclass => class BlockTemplates extends superclass {

  block_template (node) {
    let str = this.ln('{')

    this.indent_level++

    if (_.isArray(node)) {
      for (let n of node) {
        str += this.statement_template(n)
      }
    }
    else {
      str = this.statement_template(node)
    }

    this.indent_level--

    str += this.ln(this.indent('}'))

    return str
  }

})
