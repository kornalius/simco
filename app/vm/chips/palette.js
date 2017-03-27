import Chip from './chip.js'

export default class Palette extends Chip {

  constructor (main) {
    super(main)

    this.init('i32', 'palette', ['count'])

    this.reset()
  }

  reset () {
    super.reset()

    this._data[0] = 0x000000
    this._data[1] = 0x800000
    this._data[2] = 0x008000
    this._data[3] = 0x808000
    this._data[4] = 0x000080
    this._data[5] = 0x800080
    this._data[6] = 0x008080
    this._data[7] = 0xc0c0c0
    this._data[8] = 0x808080
    this._data[9] = 0xff0000
    this._data[10] = 0x00ff00
    this._data[11] = 0xffff00
    this._data[12] = 0x0000ff
    this._data[13] = 0xff00ff
    this._data[14] = 0x00ffff
    this._data[15] = 0xffffff

    this._data[16] = 0x000000
    this._data[22] = 0x005f00
    this._data[28] = 0x008700
    this._data[34] = 0x00af00
    this._data[40] = 0x00d700
    this._data[46] = 0x00ff00
    this._data[52] = 0x5f0000
    this._data[58] = 0x5f5f00
    this._data[64] = 0x5f8700
    this._data[70] = 0x5faf00
    this._data[76] = 0x5fd700
    this._data[82] = 0x5fff00
    this._data[88] = 0x870000
    this._data[94] = 0x875f00
    this._data[100] = 0x878700
    this._data[106] = 0x87af00
    this._data[112] = 0x87d700
    this._data[118] = 0x87ff00
    this._data[124] = 0xaf0000
    this._data[130] = 0xaf5f00
    this._data[136] = 0xaf8700
    this._data[142] = 0xafaf00
    this._data[148] = 0xafd700
    this._data[154] = 0xafff00
    this._data[160] = 0xd70000
    this._data[166] = 0xd75f00
    this._data[172] = 0xd78700
    this._data[178] = 0xd7af00
    this._data[184] = 0xd7d700
    this._data[190] = 0xd7ff00
    this._data[196] = 0xff0000
    this._data[202] = 0xff5f00
    this._data[208] = 0xff8700
    this._data[214] = 0xffaf00
    this._data[220] = 0xffd700
    this._data[226] = 0xffff00
    this._data[232] = 0x080808
    this._data[238] = 0x444444
    this._data[244] = 0x808080
    this._data[250] = 0xbcbcbc
    this._data[17] = 0x00005f
    this._data[23] = 0x005f5f
    this._data[29] = 0x00875f
    this._data[35] = 0x00af5f
    this._data[41] = 0x00d75f
    this._data[47] = 0x00ff5f
    this._data[53] = 0x5f005f
    this._data[59] = 0x5f5f5f
    this._data[65] = 0x5f875f
    this._data[71] = 0x5faf5f
    this._data[77] = 0x5fd75f
    this._data[83] = 0x5fff5f
    this._data[89] = 0x87005f
    this._data[95] = 0x875f5f
    this._data[101] = 0x87875f
    this._data[107] = 0x87af5f
    this._data[113] = 0x87d75f
    this._data[119] = 0x87ff5f
    this._data[125] = 0xaf005f
    this._data[131] = 0xaf5f5f
    this._data[137] = 0xaf875f
    this._data[143] = 0xafaf5f
    this._data[149] = 0xafd75f
    this._data[155] = 0xafff5f
    this._data[161] = 0xd7005f
    this._data[167] = 0xd75f5f
    this._data[173] = 0xd7875f
    this._data[179] = 0xd7af5f
    this._data[185] = 0xd7d75f
    this._data[191] = 0xd7ff5f
    this._data[197] = 0xff005f
    this._data[203] = 0xff5f5f
    this._data[209] = 0xff875f
    this._data[215] = 0xffaf5f
    this._data[221] = 0xffd75f
    this._data[227] = 0xffff5f
    this._data[233] = 0x121212
    this._data[239] = 0x4e4e4e
    this._data[245] = 0x8a8a8a
    this._data[251] = 0xc6c6c6
    this._data[18] = 0x000087
    this._data[24] = 0x005f87
    this._data[30] = 0x008787
    this._data[36] = 0x00af87
    this._data[42] = 0x00d787
    this._data[48] = 0x00ff87
    this._data[54] = 0x5f0087
    this._data[60] = 0x5f5f87
    this._data[66] = 0x5f8787
    this._data[72] = 0x5faf87
    this._data[78] = 0x5fd787
    this._data[84] = 0x5fff87
    this._data[90] = 0x870087
    this._data[96] = 0x875f87
    this._data[102] = 0x878787
    this._data[108] = 0x87af87
    this._data[114] = 0x87d787
    this._data[120] = 0x87ff87
    this._data[126] = 0xaf0087
    this._data[132] = 0xaf5f87
    this._data[138] = 0xaf8787
    this._data[144] = 0xafaf87
    this._data[150] = 0xafd787
    this._data[156] = 0xafff87
    this._data[162] = 0xd70087
    this._data[168] = 0xd75f87
    this._data[174] = 0xd78787
    this._data[180] = 0xd7af87
    this._data[186] = 0xd7d787
    this._data[192] = 0xd7ff87
    this._data[198] = 0xff0087
    this._data[204] = 0xff5f87
    this._data[210] = 0xff8787
    this._data[216] = 0xffaf87
    this._data[222] = 0xffd787
    this._data[228] = 0xffff87
    this._data[234] = 0x1c1c1c
    this._data[240] = 0x585858
    this._data[246] = 0x949494
    this._data[252] = 0xd0d0d0
    this._data[19] = 0x0000af
    this._data[25] = 0x005faf
    this._data[31] = 0x0087af
    this._data[37] = 0x00afaf
    this._data[43] = 0x00d7af
    this._data[49] = 0x00ffaf
    this._data[55] = 0x5f00af
    this._data[61] = 0x5f5faf
    this._data[67] = 0x5f87af
    this._data[73] = 0x5fafaf
    this._data[79] = 0x5fd7af
    this._data[85] = 0x5fffaf
    this._data[91] = 0x8700af
    this._data[97] = 0x875faf
    this._data[103] = 0x8787af
    this._data[109] = 0x87afaf
    this._data[115] = 0x87d7af
    this._data[121] = 0x87ffaf
    this._data[127] = 0xaf00af
    this._data[133] = 0xaf5faf
    this._data[139] = 0xaf87af
    this._data[145] = 0xafafaf
    this._data[151] = 0xafd7af
    this._data[157] = 0xafffaf
    this._data[163] = 0xd700af
    this._data[169] = 0xd75faf
    this._data[175] = 0xd787af
    this._data[181] = 0xd7afaf
    this._data[187] = 0xd7d7af
    this._data[193] = 0xd7ffaf
    this._data[199] = 0xff00af
    this._data[205] = 0xff5faf
    this._data[211] = 0xff87af
    this._data[217] = 0xffafaf
    this._data[223] = 0xffd7af
    this._data[229] = 0xffffaf
    this._data[235] = 0x262626
    this._data[241] = 0x606060
    this._data[247] = 0x9e9e9e
    this._data[253] = 0xdadada
    this._data[20] = 0x0000d7
    this._data[26] = 0x005fd7
    this._data[32] = 0x0087d7
    this._data[38] = 0x00afd7
    this._data[44] = 0x00d7d7
    this._data[50] = 0x00ffd7
    this._data[56] = 0x5f00d7
    this._data[62] = 0x5f5fd7
    this._data[68] = 0x5f87d7
    this._data[74] = 0x5fafd7
    this._data[80] = 0x5fd7d7
    this._data[86] = 0x5fffd7
    this._data[92] = 0x8700d7
    this._data[98] = 0x875fd7
    this._data[104] = 0x8787d7
    this._data[110] = 0x87afd7
    this._data[116] = 0x87d7d7
    this._data[122] = 0x87ffd7
    this._data[128] = 0xaf00d7
    this._data[134] = 0xaf5fd7
    this._data[140] = 0xaf87d7
    this._data[146] = 0xafafd7
    this._data[152] = 0xafd7d7
    this._data[158] = 0xafffd7
    this._data[164] = 0xd700d7
    this._data[170] = 0xd75fd7
    this._data[176] = 0xd787d7
    this._data[182] = 0xd7afd7
    this._data[188] = 0xd7d7d7
    this._data[194] = 0xd7ffd7
    this._data[200] = 0xff00d7
    this._data[206] = 0xff5fd7
    this._data[212] = 0xff87d7
    this._data[218] = 0xffafd7
    this._data[224] = 0xffd7d7
    this._data[230] = 0xffffd7
    this._data[236] = 0x303030
    this._data[242] = 0x666666
    this._data[248] = 0xa8a8a8
    this._data[254] = 0xe4e4e4
    this._data[21] = 0x0000ff
    this._data[27] = 0x005fff
    this._data[33] = 0x0087ff
    this._data[39] = 0x00afff
    this._data[45] = 0x00d7ff
    this._data[51] = 0x00ffff
    this._data[57] = 0x5f00ff
    this._data[63] = 0x5f5fff
    this._data[69] = 0x5f87ff
    this._data[75] = 0x5fafff
    this._data[81] = 0x5fd7ff
    this._data[87] = 0x5fffff
    this._data[93] = 0x8700ff
    this._data[99] = 0x875fff
    this._data[105] = 0x8787ff
    this._data[111] = 0x87afff
    this._data[117] = 0x87d7ff
    this._data[123] = 0x87ffff
    this._data[129] = 0xaf00ff
    this._data[135] = 0xaf5fff
    this._data[141] = 0xaf87ff
    this._data[147] = 0xafafff
    this._data[153] = 0xafd7ff
    this._data[159] = 0xafffff
    this._data[165] = 0xd700ff
    this._data[171] = 0xd75fff
    this._data[177] = 0xd787ff
    this._data[183] = 0xd7afff
    this._data[189] = 0xd7d7ff
    this._data[195] = 0xd7ffff
    this._data[201] = 0xff00ff
    this._data[207] = 0xff5fff
    this._data[213] = 0xff87ff
    this._data[219] = 0xffafff
    this._data[225] = 0xffd7ff
    this._data[231] = 0xffffff
    this._data[237] = 0x3a3a3a
    this._data[243] = 0x767676
    this._data[249] = 0xb2b2b2
    this._data[255] = 0xeeeeee

    return this
  }

  get black () { return 0 }
  get dkred () { return 1 }
  get dkgreen () { return 2 }
  get dkyellow () { return 3 }
  get dkblue () { return 4 }
  get dkfuchsia () { return 5 }
  get teal () { return 6 }
  get grey () { return 7 }
  get dkgrey () { return 8 }
  get red () { return 9 }
  get lime () { return 10 }
  get yellow () { return 11 }
  get blue () { return 12 }
  get fuchsia () { return 13 }
  get cyan () { return 14 }
  get white () { return 15 }

  from_rgb (c) { return _.find(this._data, c) }

  to_rgb (c) { return this._data[c] }

}
