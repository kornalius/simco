
export default Mixin(superclass => class StatementTemplates extends superclass {

  statement_template (node, d) {
    let str = ''

    if (_.isArray(node)) {
      for (let n of node) {
        str += this.statement(n)
      }
    }
    else if (node) {
      let d = node.data || {}
      let t = {}

      if (node.is(['assign', 'fn_assign'])) {
        t = this.assign(node)
      }
      else if (node.is('fn')) {
        t = this.fn_call(node, true)
      }
      else if (node.is('if')) {
        t = {
          tmpl: 'if (#{expr}) #{true_body}#{false_body}',
          dat: {
            expr: this.expr(d.expr),
            true_body: this.block(d.true_body),
            false_body: this.statement(d.false_body),
          }
        }
      }
      else if (node.is('else')) {
        if (d.expr) { // else if
          t = {
            tmpl: 'else if (#{expr}) #{true_body}#{false_body}',
            dat: {
              expr: this.expr(d.expr),
              true_body: this.block(d.true_body),
              false_body: this.statement(d.false_body),
            }
          }
        }
        else {
          t = {
            tmpl: 'else #{false_body}',
            dat: { false_body: this.block(d.false_body) }
          }
        }
      }
      else if (node.is('while')) {
        t = {
          tmpl: 'while (#{expr}) #{body}',
          dat: {
            expr: this.expr(d.expr),
            body: this.block(d.body),
          }
        }
      }
      else if (node.is('for')) {
        t = {
          tmpl: 'for (let #{v} = #{min_expr}; #{v} < #{max_expr}; #{v} += #{step_expr}) #{body}',
          dat: {
            v: d.v.value,
            min_expr: this.expr(d.min_expr),
            max_expr: this.expr(d.max_expr),
            step_expr: d.step_expr ? this.expr(d.step_expr) : '1',
            body: this.block(d.body),
          }
        }
      }
      else if (node.is('return')) {
        t = {
          tmpl: 'return #{args}',
          dat: { args: this.expr(d.args, ', ') }
        }
      }
      else if (node.is(['break', 'continue'])) {
        t = {
          tmpl: '#{word}',
          dat: { word: node.value }
        }
      }
      else if (node.is('class')) {
        t = {
          tmpl: 'class #{name}#{_extends} #{body}',
          dat: {
            name: d.id.value,
            _extends: d._extends ? ' extends ' + this.expr(d._extends, ', ') : '',
            body: this.block(d.body),
          }
        }
      }

      str = _.template(t.tmpl)(t.dat)
    }

    return this.ln(this.indent(str))
  }

})
