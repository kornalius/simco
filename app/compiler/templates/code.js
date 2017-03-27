
export default Mixin(superclass => class CodeTemplates extends superclass {

  code_start_template () {
    this.writeln('(function () {')
    this.indent_level++
    this.writeln('\'use strict\';')
    this.writeln()
  }

  code_end_template () {
    this.writeln('})();')
    this.indent_level--
    this.writeln()
  }

})
