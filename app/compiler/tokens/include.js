import { Lexer } from '../../lexer.js'
import { path, dirs, fs } from '../../../utils.js'

export default Mixin(superclass => class IncludeToken extends superclass {

  include_token (token, offset, len) {
    this.offset = offset
    this.column += len + 1
    let fn = token.value + (path.extname(token.value) === '' ? '.shp' : '')
    let pn = path.join(__dirname, fn)
    try {
      fs.statSync(pn)
    }
    catch (e) {
      try {
        pn = path.join(dirs.user, fn)
        fs.statSync(pn)
      }
      catch (e) {
        pn = ''
      }
    }
    if (pn !== '') {
      let src = fs.readFileSync(pn, 'utf8')
      let lx = new Lexer()
      lx.run(pn, src)
      if (!lx.errors) {
        _.extend(this.constants, lx.constants)
        this.tokens = this.tokens.concat(lx.tokens)
      }
    }
    return token
  }
})
