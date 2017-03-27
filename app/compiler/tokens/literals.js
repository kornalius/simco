export default {
  key: /^:([A-Z_][A-Z_0-9]*)/i,

  id: /^([A-Z_][A-Z_0-9]*)/i,
  id_field: /^\.([A-Z_][A-Z_0-9]*)/i,

  this: /^@(?=[^A-Z_])/i,
  this_field: /^@([A-Z_][A-Z_0-9]*)/i,
}
