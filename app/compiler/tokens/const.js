
export default Mixin(superclass => class ConstToken extends superclass {

  const_token (token, offset, len) {
    let c = []
    this.constants[token.value] = c
    this.offset = offset
    this.column += len + 1
    while (true) {
      let p = this.peek()
      token = p.token
      if (token) {
        this.offset = p.offset
        this.column += p.len + 1
      }
      if (!token || token.is('eol')) {
        break
      }
      if (token) {
        c.push(token)
      }
    }
    return token
  }
})
