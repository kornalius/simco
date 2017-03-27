export default {
  symbol: /^[\$]/,

  math: /^[\+\-\*\/%][^=]/,
  logic: /^[!&\|\^][^=]/,
  comp: /^>|<|>=|<=|!=|==/,
}
