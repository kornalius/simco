import assign_tokens from './assigns.js'
import delimiter_tokens from './delimiters.js'
import comment_tokens from './comments.js'
import group_tokens from './groups.js'
import literal_tokens from './literals.js'
import operator_tokens from './operators.js'
import primitive_tokens from './primitives.js'
import reserved_tokens from './reserved.js'

export default Mixin(superclass => class TokenTypes extends superclass {

  get token_types () {
    if (!this._token_types) {
      this._token_types = _.extend({},
        delimiter_tokens,
        comment_tokens,
        primitive_tokens,
        reserved_tokens,
        literal_tokens,
        group_tokens,
        operator_tokens,
        assign_tokens
      )
    }
    return this._token_types
  }

})
