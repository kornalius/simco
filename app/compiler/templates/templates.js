
export default Mixin(superclass => class Templates extends superclass {

  template (node, d) {
    if (_.isString(node)) {
      return this.node_template(node)
    }
    else if (node.is('fn')) {
      return this.fn_call_template(node)
    }
    else if (node.is('fn_assign')) {
      return this.fn_assign_template(node, d)
    }
    else if (node.is('open_bracket')) {
      return this.array_template(node, d)
    }
    else if (node.is('open_curly')) {
      return this.dict_template(node, d)
    }
    else if (node.is(['math', 'logic', 'comp'])) {
      return this.operator_template(node, d)
    }
    else if (node.is(['this', 'this_field'])) {
      return this.this_template(node, d)
    }
    else if (node.is('new')) {
      return this.new_template(node, d)
    }
    else if (node.is(['char', 'string'])) {
      return this.string_template(node, d)
    }
    else if (node.is('id')) {
      return this.id_template(node, d)
    }
    else {
      return this.value_template(node, d)
    }
  }

})
