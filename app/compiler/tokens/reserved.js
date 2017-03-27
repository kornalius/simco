export default {
  include: /^#"([^"]*)"/i,

  const: /^#([A-Z_][A-Z_0-9]*)/i,

  reserved: /^(puts|putc)/i,
}
