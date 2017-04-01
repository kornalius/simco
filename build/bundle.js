module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.main = exports.Main = exports._PAUSED = exports._RUNNING = exports._STOPPED = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	__webpack_require__(1);
	
	__webpack_require__(2);
	
	var _utils = __webpack_require__(3);
	
	var _globals = __webpack_require__(12);
	
	var _main = __webpack_require__(13);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _emitter = __webpack_require__(17);
	
	var _lexer = __webpack_require__(18);
	
	var _lexer2 = _interopRequireDefault(_lexer);
	
	var _parser = __webpack_require__(30);
	
	var _parser2 = _interopRequireDefault(_parser);
	
	var _transpiler = __webpack_require__(47);
	
	var _transpiler2 = _interopRequireDefault(_transpiler);
	
	var _memory = __webpack_require__(61);
	
	var _memorymanager = __webpack_require__(63);
	
	var _memorymanager2 = _interopRequireDefault(_memorymanager);
	
	var _stack = __webpack_require__(65);
	
	var _stack2 = _interopRequireDefault(_stack);
	
	var _interrupt = __webpack_require__(66);
	
	var _interrupt2 = _interopRequireDefault(_interrupt);
	
	var _guideo = __webpack_require__(67);
	
	var _guideo2 = _interopRequireDefault(_guideo);
	
	var _ken = __webpack_require__(79);
	
	var _ken2 = _interopRequireDefault(_ken);
	
	var _mickey = __webpack_require__(80);
	
	var _mickey2 = _interopRequireDefault(_mickey);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import t from '../html/main.html'
	
	// let el = document.createElement('div')
	// el.innerHTML = t
	// document.body.appendChild(el)
	
	// import { VM } from './interpreter/vm.js'
	
	// setTimeout(() => {
	//   let src = require('raw!../test/test1.x32')
	//   console.log(src)
	
	//   let vm = new VM()
	//   vm.load(src)
	//   vm.run()
	//   vm.dump()
	// }, 100)
	
	// console.log(hexy.hexy(vm.mem_buffer, { offset: 0, length: 512, display_offset: 0x00, width: 16, caps: 'upper', indent: 2 }))
	
	var _STOPPED = exports._STOPPED = 0;
	var _RUNNING = exports._RUNNING = 1;
	var _PAUSED = exports._PAUSED = 2;
	
	var Main = exports.Main = function (_Emitter) {
	  _inherits(Main, _Emitter);
	
	  function Main(options) {
	    _classCallCheck(this, Main);
	
	    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));
	
	    _this.reset();
	
	    _this._updates = {
	      queue: [],
	
	      add: function add(options) {
	        var o = _.get(options, 'object');
	        if (o && !o.__inUpdates) {
	          o.__inUpdates = true;
	          _this._updates.queue.push(options);
	        }
	      },
	
	      remove: function remove(o) {
	        _this._updates.queue = _.reject(_this._updates.queue, { object: o });
	        o.__inUpdates = false;
	      }
	    };
	
	    // Check for littleEndian
	    var b = new ArrayBuffer(4);
	    var a = new Uint32Array(b);
	    var c = new Uint8Array(b);
	    a[0] = 0xdeadbeef;
	    _this.LE = c[0] === 0xef;
	
	    _this._memory = new _memory.Memory(_this);
	    _this._memoryManager = new _memorymanager2.default(_this);
	    _this._stack = new _stack2.default(_this);
	    _this._interrupts = new _interrupt2.default(_this);
	
	    _this._guideo = new _guideo2.default(_this);
	    _this._guideo.createChips();
	
	    _this._ken = new _ken2.default(_this);
	    _this._mickey = new _mickey2.default(_this);
	
	    _this._onResize = _this.onResize.bind(_this);
	    window.addEventListener('resize', _this._onResize);
	
	    var that = _this;
	    PIXI.ticker.shared.add(function (delta) {
	      if (that.status === _RUNNING) {
	        that.tick(performance.now(), delta);
	
	        // let render = false
	
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = that._updates.queue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var q = _step.value;
	
	            q.object.__inUpdates = false;
	            // if (q.render) {
	            // render = true
	            // }
	            if (q.cb) {
	              q.cb.apply(q, [q.object].concat(_toConsumableArray(q.args || [])));
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	
	        that._updates.queue = [];
	
	        // if (render) {
	        // that._guideo.renderer.render(that._guideo.stage)
	        // }
	      }
	    });
	
	    (0, _utils.async)(_this, _this.start, 100);
	    return _this;
	  }
	
	  _createClass(Main, [{
	    key: 'destroy',
	    value: function destroy() {
	      this._guideo.destroy();
	      this._ken.destroy();
	      this._mickey.destroy();
	      this._interrupts.destroy();
	      this._memoryManager.destroy();
	      this._memory.destroy();
	      _get(Main.prototype.__proto__ || Object.getPrototypeOf(Main.prototype), 'destroy', this).call(this);
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this._status = 0;
	      this._program = {
	        path: undefined,
	        code: undefined,
	        fn: undefined
	      };
	    }
	  }, {
	    key: 'defaults',
	    value: function defaults(name) {
	      return _.get(_globals.defaults, name);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	      this._guideo.emit('resize');
	      return this;
	    }
	  }, {
	    key: 'hlt',
	    value: function hlt(code) {
	      if (code > 0) {
	        (0, _globals.runtime_error)(code);
	      }
	      this.stop();
	    }
	  }, {
	    key: 'load',
	    value: function load(path) {
	      var t = new _lexer2.default();
	      var tokens = t.run(path);
	      console.log(tokens);
	
	      var p = new _parser2.default();
	      var nodes = p.run(tokens);
	      console.log(nodes);
	
	      if (p.errors === 0) {
	        var _t = new _transpiler2.default();
	        var code = _t.run(nodes);
	        console.log(code);
	
	        if (_t.errors === 0) {
	          this._program.code = code;
	          this._program.path = path;
	          this._program.fn = new Function(['args'], this._program.code);
	        }
	      }
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	      var fn = _.get(this, '_program.fn');
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return fn ? fn.apply(this, args) : null;
	    }
	  }, {
	    key: 'start',
	    value: function start() {
	      this.status = _RUNNING;
	      this.test();
	      return this;
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this.status = _STOPPED;
	      return this;
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this.status = _PAUSED;
	      return this;
	    }
	  }, {
	    key: 'resume',
	    value: function resume() {
	      this.status = _RUNNING;
	      return this;
	    }
	  }, {
	    key: 'tick',
	    value: function tick(t) {
	      this._memory.tick(t);
	      this._memoryManager.tick(t);
	      this._ken.tick(t);
	      this._mickey.tick(t);
	      this._interrupts.tick(t);
	      this._guideo.tick(t);
	    }
	  }, {
	    key: 'test',
	    value: function test() {}
	  }, {
	    key: 'status',
	    get: function get() {
	      return this._status;
	    },
	    set: function set(value) {
	      if (this._status !== value) {
	        this._status = value;
	      }
	    }
	  }, {
	    key: 'memory',
	    get: function get() {
	      return this._memory;
	    }
	  }, {
	    key: 'memoryManager',
	    get: function get() {
	      return this._memoryManager;
	    }
	  }, {
	    key: 'interrupts',
	    get: function get() {
	      return this._interrupts;
	    }
	  }, {
	    key: 'updates',
	    get: function get() {
	      return this._updates;
	    }
	  }, {
	    key: 'guideo',
	    get: function get() {
	      return this._guideo;
	    }
	  }, {
	    key: 'keyboard_chip',
	    get: function get() {
	      return this._ken;
	    }
	  }, {
	    key: 'mickey',
	    get: function get() {
	      return this._mickey;
	    }
	  }, {
	    key: 'stage',
	    get: function get() {
	      return this._guideo._stage;
	    }
	  }, {
	    key: 'renderer',
	    get: function get() {
	      return this._guideo._renderer;
	    }
	  }, {
	    key: 'program',
	    get: function get() {
	      return this._program;
	    }
	  }]);
	
	  return Main;
	}(_emitter.Emitter);
	
	var main = exports.main = new Main();
	window.app = main;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("pixi.js");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("web-audio-daw");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.instanceFunctions = exports.instanceFunction = exports.atou = exports.utoa = exports.buffer_dump = exports.hex = exports.normalizeMessages = exports.string_buffer = exports.string_to_buffer = exports.buffer_to_string = exports.async = exports.delay = exports.map_getters_return_this = exports.map_getters = exports.mix = exports.Mixin = exports.now = exports.raf = exports.dirs = exports.IS_LINUX = exports.IS_OSX = exports.IS_WIN = exports.userPath = exports.path = exports.fs = exports.app = exports.BrowserWindow = exports.screen = exports.remote = exports.messageBox = exports.saveFile = exports.openFile = exports.dialog = exports.electron = exports.version = exports.name = exports._ = undefined;
	
	var _path = __webpack_require__(4);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _raf = __webpack_require__(5);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _performanceNow = __webpack_require__(6);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _mixwith = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var electron = __webpack_require__(8);
	var remote = electron.remote,
	    screen = electron.screen,
	    dialog = electron.dialog;
	var app = remote.app,
	    BrowserWindow = remote.BrowserWindow;
	
	
	var _ = __webpack_require__(9);
	_.extend(_, __webpack_require__(10));
	window._ = _;
	
	_.templateSettings.interpolate = /#{([\s\S]+?)}/g;
	
	var fs = __webpack_require__(11);
	
	window.Mixin = _mixwith.Mixin;
	window.mix = _mixwith.mix;
	
	var userPath = _path2.default.join(app.getAppPath(), '/user');
	if (!fs.existsSync(userPath)) {
	  fs.mkdirs(userPath);
	}
	
	var IS_WIN = /^win/.test(process.platform);
	var IS_OSX = process.platform === 'darwin';
	var IS_LINUX = process.platform === 'linux';
	var dirs = {
	  build: __dirname,
	  cwd: app.getAppPath(),
	  home: app.getPath('home'),
	  app: app.getPath('appData'),
	  user: userPath,
	  tmp: app.getPath('temp'),
	  root: app.getPath('exe'),
	  node_modules: _path2.default.join(userPath, 'node_modules'),
	  user_pkg: _path2.default.join(userPath, 'package.json')
	};
	
	var name = app.getName();
	var version = app.getVersion();
	
	var openFile = function openFile() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  try {
	    return dialog.showOpenDialog.apply(dialog, args);
	  } catch (err) {
	    console.error(err);
	  }
	  return null;
	};
	
	var saveFile = function saveFile() {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  try {
	    return dialog.showSaveDialog.apply(dialog, args);
	  } catch (err) {
	    console.error(err);
	  }
	  return null;
	};
	
	var messageBox = function messageBox() {
	  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    args[_key3] = arguments[_key3];
	  }
	
	  try {
	    return dialog.showMessageBox.apply(dialog, args);
	  } catch (err) {
	    console.error(err);
	  }
	  return null;
	};
	
	var map_getters = function map_getters(source, target, defs) {
	  var _loop = function _loop(k) {
	    var fn = defs[k];
	    Object.defineProperty(source, k, {
	      get: function get() {
	        return fn.call(target, source);
	      },
	      enumerable: true,
	      configurable: true
	    });
	  };
	
	  for (var k in defs) {
	    _loop(k);
	  }
	};
	
	var map_getters_return_this = function map_getters_return_this(source, target, defs) {
	  var _loop2 = function _loop2(k) {
	    var fn = defs[k];
	    Object.defineProperty(source, k, {
	      get: function get() {
	        fn.call(target, source);
	        return source;
	      },
	      enumerable: true,
	      configurable: true
	    });
	  };
	
	  for (var k in defs) {
	    _loop2(k);
	  }
	};
	
	var now = function now() {
	  return _performanceNow2.default.now();
	};
	
	var delay = function delay(ms) {
	  // setTimeout(() => {}, ms)
	  var t = _performanceNow2.default.now();
	  var c = t;
	  while (c - t <= ms) {
	    // PIXI.ticker.shared.update(c)
	    c = _performanceNow2.default.now();
	  }
	};
	
	var async = function async(context, fn, args, delay) {
	  if (_.isNumber(args)) {
	    delay = args;
	    args = [];
	  }
	  if (!_.isArray(args)) {
	    args = [args];
	  }
	  setTimeout(function () {
	    fn.call.apply(fn, [context].concat(_toConsumableArray(args)));
	  }, delay || 1);
	};
	
	var buffer_to_string = function buffer_to_string(b) {
	  var len = b.length;
	  var i = 0;
	  var s = '';
	  while (i < len) {
	    s += b[i++].toString(16);
	  }
	  return s;
	};
	
	var string_to_buffer = function string_to_buffer(str) {
	  var len = str.length;
	  var i = 0;
	  var b = new Buffer(Math.trunc(str.length / 2));
	  var x = 0;
	  while (i < len) {
	    var _hex = str.substr(i, 2);
	    b[x++] = parseInt(_hex, 16);
	    i += 2;
	  }
	  return b;
	};
	
	var string_buffer = function string_buffer(str) {
	  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	  len = len || str.length;
	  var b = new Buffer(len);
	  b.write(str, 0, str.length, 'ascii');
	  return b;
	};
	
	var normalizeMessages = function normalizeMessages() {
	  for (var _len4 = arguments.length, message = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	    message[_key4] = arguments[_key4];
	  }
	
	  var args = [];
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = message[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var m = _step.value;
	
	      if (_.isArray(m)) {
	        args.push(m.join(', '));
	      } else if (_.isString(m)) {
	        args.push(m);
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return args;
	};
	
	var hex = function hex(value) {
	  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;
	  return '$' + _.padStart(value.toString(16), Math.trunc(size / 4), '0');
	};
	
	var buffer_dump = function buffer_dump(buffer) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  var width = options.width || 16;
	  var caps = options.caps || 'upper';
	  var indent = _.repeat(' ', options.indent || 0);
	
	  var zero = function zero(n, max) {
	    n = n.toString(16);
	    if (caps === 'upper') {
	      n = n.toUpperCase();
	    }
	    while (n.length < max) {
	      n = '0' + n;
	    }
	    return n;
	  };
	
	  var len = Math.min(buffer.byteLength, options.length || buffer.byteLength);
	  var rows = Math.ceil(len / width);
	  var last = len % width || width;
	  var offsetLength = len.toString(16).length;
	  if (offsetLength < 6) {
	    offsetLength = 6;
	  }
	
	  var arr = new Uint8Array(buffer);
	
	  var str = indent + 'Offset';
	  while (str.length < offsetLength) {
	    str += ' ';
	  }
	
	  str += '  ';
	
	  for (var i = 0; i < width; i++) {
	    str += ' ' + zero(i, 2);
	  }
	
	  if (len) {
	    str += '\n';
	  }
	
	  var b = 0;
	
	  for (var _i = 0; _i < rows; _i++) {
	    str += indent + zero(b, offsetLength) + '  ';
	    var lastBytes = _i === rows - 1 ? last : width;
	    var lastSpaces = width - lastBytes;
	
	    for (var j = 0; j < lastBytes; j++) {
	      str += ' ' + zero(arr[b], 2);
	      b++;
	    }
	
	    for (var _j = 0; _j < lastSpaces; _j++) {
	      str += '   ';
	    }
	
	    b -= lastBytes;
	    str += '   ';
	
	    for (var _j2 = 0; _j2 < lastBytes; _j2++) {
	      var v = arr[b];
	      str += v > 31 && v < 127 || v > 159 ? String.fromCharCode(v) : '.';
	      b++;
	    }
	
	    str += '\n';
	  }
	
	  return str;
	};
	
	var utoa = function utoa(str) {
	  return window.btoa(unescape(encodeURIComponent(str)));
	};
	
	var atou = function atou(str) {
	  return decodeURIComponent(escape(window.atob(str)));
	};
	
	window.utoa = utoa;
	window.atou = atou;
	
	var instanceFunction = function instanceFunction(target, name, fn) {
	  var force = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	
	  if (force || !target.hasOwnProperty(name)) {
	    Object.defineProperty(target, name, {
	      value: fn,
	      writable: true
	    });
	  }
	};
	
	var instanceFunctions = function instanceFunctions(target, source, names) {
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;
	
	  try {
	    for (var _iterator2 = names[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var n = _step2.value;
	
	      if (_.isArray(n)) {
	        instanceFunction(target, n[0], source[n[1]]);
	      } else {
	        instanceFunction(target, n, source[n]);
	      }
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }
	};
	
	exports._ = _;
	exports.name = name;
	exports.version = version;
	exports.electron = electron;
	exports.dialog = dialog;
	exports.openFile = openFile;
	exports.saveFile = saveFile;
	exports.messageBox = messageBox;
	exports.remote = remote;
	exports.screen = screen;
	exports.BrowserWindow = BrowserWindow;
	exports.app = app;
	exports.fs = fs;
	exports.path = _path2.default;
	exports.userPath = userPath;
	exports.IS_WIN = IS_WIN;
	exports.IS_OSX = IS_OSX;
	exports.IS_LINUX = IS_LINUX;
	exports.dirs = dirs;
	exports.raf = _raf2.default;
	exports.now = now;
	exports.Mixin = _mixwith.Mixin;
	exports.mix = _mixwith.mix;
	exports.map_getters = map_getters;
	exports.map_getters_return_this = map_getters_return_this;
	exports.delay = delay;
	exports.async = async;
	exports.buffer_to_string = buffer_to_string;
	exports.string_to_buffer = string_to_buffer;
	exports.string_buffer = string_buffer;
	exports.normalizeMessages = normalizeMessages;
	exports.hex = hex;
	exports.buffer_dump = buffer_dump;
	exports.utoa = utoa;
	exports.atou = atou;
	exports.instanceFunction = instanceFunction;
	exports.instanceFunctions = instanceFunctions;
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("raf");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("performance-now");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("mixwith");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("underscore-plus");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("fs-promise");

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	PIXI.Point.prototype.distance = function (target) {
	  return Math.sqrt((this.x - target.x) * (this.x - target.x) + (this.y - target.y) * (this.y - target.y));
	};
	
	PIXI.Point.prototype.toString = function () {
	  return _.template('(#{x}, #{y})')(this);
	};
	
	PIXI.Rectangle.prototype.toString = function () {
	  return _.template('(#{x}, #{y}, #{x + width}, #{y + height})(#{width}, #{height})')(this);
	};
	
	var defaults = {
	  boundscheck: false,
	
	  type: 'i32',
	
	  memory: {
	    size: 512 * 1024
	  },
	
	  memory_manager: {
	    collect_delay: 30 * 1000
	  },
	
	  guideo: {
	    width: 320,
	    height: 240,
	    scale: 4
	  },
	
	  rainbow: {
	    count: 16,
	    data_format: 'i32'
	  },
	
	  fonzo: {
	    count: 256,
	    width: 7,
	    height: 9
	  },
	
	  orwell: {
	    width: 320 / 4,
	    height: 240 / 6
	  },
	
	  beagle: {
	    width: 4,
	    height: 6,
	    color: 15,
	    blinkrate: 500
	  },
	
	  violet: {
	    count: 32,
	    width: 16,
	    height: 16
	  },
	
	  ken: {
	    count: 256
	  },
	
	  mickey: {
	    count: 17,
	    width: 6,
	    height: 7,
	    color: 15,
	    frame: 0,
	    dblClickDelay: 250,
	    dblClickDistance: 8
	  },
	
	  network: {
	    count: 32 * 1024
	  },
	
	  alto: {
	    count: 4 * 1024
	  },
	
	  chars_map: {
	    '.': 0,
	    r: 1,
	    g: 2,
	    y: 3,
	    b: 4,
	    p: 5,
	    c: 6,
	    E: 7,
	    e: 8,
	    R: 9,
	    G: 10,
	    Y: 11,
	    B: 12,
	    P: 13,
	    C: 14,
	    w: 15,
	    ' ': 16
	  }
	};
	
	var errors = 0;
	
	var error = function error(t, msg) {
	  debugger;
	  exports.errors = errors += 1;
	  console.error(msg, 'at', t.value, '(' + t.row + ',' + t.col + ')');
	};
	
	var runtime_error = function runtime_error(code) {
	  var e = 'Unknown runtime error';
	  switch (code) {
	    case 0x01:
	      e = 'Out of memory';
	      break;
	    case 0x02:
	      e = 'Stack underflow';
	      break;
	    case 0x03:
	      e = 'Stack overflow';
	      break;
	    case 0x04:
	      e = 'Invalid stack address';
	      break;
	    case 0x05:
	      e = 'Stack address already assigned';
	      break;
	    case 0x06:
	      e = 'Interrupt already exists';
	      break;
	    case 0x07:
	      e = 'Interrupt not found';
	      break;
	    case 0x08:
	      e = 'Address out of bounds';
	      break;
	  }
	  console.error(e);
	};
	
	var io_error = function io_error(code) {
	  var e = 'I/O runtime error';
	  switch (code) {
	    case 0x01:
	      e = 'File not found';
	      break;
	    case 0x02:
	      e = 'Cannot open file';
	      break;
	    case 0x03:
	      e = 'Cannot close file';
	      break;
	    case 0x04:
	      e = 'Cannot lock file';
	      break;
	    case 0x05:
	      e = 'Cannot unlock file';
	      break;
	    case 0x06:
	      e = 'Invalid file id';
	      break;
	    case 0x07:
	      e = 'A floppy is already in the drive';
	      break;
	    case 0x08:
	      e = 'No floppy in drive';
	      break;
	    case 0x09:
	      e = 'Cannot delete file';
	      break;
	    case 0x10:
	      e = 'Drive is not spinning';
	      break;
	  }
	  console.error(e);
	};
	
	exports.defaults = defaults;
	exports.errors = errors;
	exports.error = error;
	exports.runtime_error = runtime_error;
	exports.io_error = io_error;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/cssnext-loader/index.js!./main.css", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/cssnext-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  background-color: #000;\n  color: #fff;\n}\n\ncanvas {\n  cursor: none !important;\n}\n", "", {"version":3,"sources":["/./style/main.css"],"names":[],"mappings":"AAEA;EACE,uBAA+C;EAC/C,YAAyB;CAC1B;;AAED;EACE,wBAAwB;CACzB","file":"main.css","sourcesContent":["@import url(./colors.css);\n\nbody {\n  background-color: var(--main-background-color);\n  color: var(--main-color);\n}\n\ncanvas {\n  cursor: none !important;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Emitter = exports.Event = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Event = exports.Event = function () {
	  function Event(target, name, data) {
	    var bubbles = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	
	    _classCallCheck(this, Event);
	
	    this.__eventObject = true;
	    this.timeStamp = performance.now();
	    this.target = target;
	    this.type = name;
	    this.data = data;
	    this.bubbles = bubbles;
	    this.stopped = false;
	    this.stoppedImmediate = false;
	    this.defaultPrevented = false;
	  }
	
	  _createClass(Event, [{
	    key: 'stop',
	    value: function stop() {
	      this.stopped = true;
	    }
	  }, {
	    key: 'stopImmediate',
	    value: function stopImmediate() {
	      this.stoppedImmediate = true;
	    }
	  }, {
	    key: 'stopPropagation',
	    value: function stopPropagation() {
	      this.stopped = true;
	    }
	  }, {
	    key: 'stopImmediatePropagation',
	    value: function stopImmediatePropagation() {
	      this.stoppedImmediate = true;
	    }
	  }, {
	    key: 'cancelBubble',
	    value: function cancelBubble() {
	      this.bubbles = false;
	    }
	  }, {
	    key: 'preventDefault',
	    value: function preventDefault() {
	      this.defaultPrevented = true;
	    }
	  }]);
	
	  return Event;
	}();
	
	var Emitter = exports.Emitter = function () {
	  function Emitter() {
	    _classCallCheck(this, Emitter);
	  }
	
	  _createClass(Emitter, [{
	    key: 'on',
	    value: function on(name, fn) {
	      var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
	      this._listeners = this._listeners || {};
	      this._listeners[name] = this._listeners[name] || [];
	      this._listeners[name].push({ fn: fn, order: order });
	      this._listeners[name] = _lodash2.default.sortBy(this._listeners[name], 'order');
	      return this;
	    }
	  }, {
	    key: 'once',
	    value: function once(name, fn) {
	      var _arguments = arguments;
	
	      this._listeners = this._listeners || {};
	
	      var that = this;
	      var onceHandlerWrapper = function onceHandlerWrapper() {
	        fn.apply(that.off(name, onceHandlerWrapper), _arguments);
	      };
	      onceHandlerWrapper._originalHandler = fn;
	
	      return this.on(name, onceHandlerWrapper);
	    }
	  }, {
	    key: 'off',
	    value: function off(name, fn) {
	      this._listeners = this._listeners || {};
	
	      if (!this._listeners[name]) {
	        return this;
	      }
	
	      var list = this._listeners[name];
	      var i = fn ? list.length : 0;
	
	      while (i-- > 0) {
	        if (list[i].fn === fn || list[i]._originalHandler === fn) {
	          list.splice(i, 1);
	        }
	      }
	
	      if (_lodash2.default.isEmpty(list)) {
	        delete this._listeners[name];
	      }
	
	      return this;
	    }
	  }, {
	    key: 'emit',
	    value: function emit(name, data) {
	      this._listeners = this._listeners || {};
	
	      var origEventData = void 0;
	
	      if (!data || data.__eventObject !== true) {
	        if (data && data.data && data.type) {
	          origEventData = data;
	          data = data.data;
	        }
	        data = new Event(this, name, data);
	      }
	
	      if (this._listeners[name]) {
	        var listeners = _lodash2.default.clone(this._listeners[name]);
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var l = _step.value;
	
	            l.fn.call(this, data);
	            if (data.stoppedImmediate) {
	              return this;
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	
	        if (data.stopped) {
	          if (origEventData) {
	            origEventData.stopped = true;
	            data.cancelBubble();
	          }
	          return this;
	        }
	      }
	
	      if (data.bubbles && this.parent && this.parent.emit) {
	        this.parent.emit(name, data);
	      }
	
	      return this.defaultPrevented;
	    }
	  }]);

	  return Emitter;
	}();

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _utils = __webpack_require__(3);
	
	var _types = __webpack_require__(19);
	
	var _types2 = _interopRequireDefault(_types);
	
	var _const = __webpack_require__(28);
	
	var _const2 = _interopRequireDefault(_const);
	
	var _include = __webpack_require__(29);
	
	var _include2 = _interopRequireDefault(_include);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Token = function () {
	  function Token(lexer, type, value, start, end) {
	    _classCallCheck(this, Token);
	
	    if (lexer instanceof Token) {
	      var t = lexer;
	      this.lexer = t.lexer;
	      this._type = t._type;
	      this._reserved = t._reserved;
	      this.value = t.value;
	      this.start = _lodash2.default.clone(t.start);
	      this.end = _lodash2.default.clone(t.end);
	      this.length = t.value.length;
	    } else {
	      this.lexer = lexer;
	      this._type = type;
	      this._reserved = false;
	      this.value = value || '';
	      this.start = start || { offset: 0, line: 0, column: 0 };
	      this.end = end || { offset: 0, line: 0, column: 0 };
	      this.length = this.end.offset - this.start.offset;
	    }
	  }
	
	  _createClass(Token, [{
	    key: 'is',
	    value: function is(e) {
	      if (_lodash2.default.isString(e)) {
	        var parts = e.split('|');
	        if (parts.length > 1) {
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;
	
	          try {
	            for (var _iterator = parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var p = _step.value;
	
	              if (this.is(p)) {
	                return true;
	              }
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }
	        } else {
	          return e === '.' || this.type === e || this.value === e;
	        }
	      } else if (_lodash2.default.isRegExp(e)) {
	        return this.type.match(e) || this.value.match(e);
	      } else if (_lodash2.default.isArray(e)) {
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;
	
	        try {
	          for (var _iterator2 = e[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var i = _step2.value;
	
	            if (this.is(i)) {
	              return true;
	            }
	          }
	        } catch (err) {
	          _didIteratorError2 = true;
	          _iteratorError2 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	              _iterator2.return();
	            }
	          } finally {
	            if (_didIteratorError2) {
	              throw _iteratorError2;
	            }
	          }
	        }
	      }
	      return false;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return _lodash2.default.template('"#{value}" at #{path}(#{line}:#{column})')({ value: this.value, line: this.start.line, column: this.start.column, path: _utils.path.basename(this.lexer.path) });
	    }
	  }, {
	    key: 'type',
	    get: function get() {
	      if (this._type === 'math_assign' || this._type === 'logic_assign') {
	        this._type = 'assign';
	      } else if (this._type === 'super') {
	        this._type = 'super';
	      }
	      return this._type;
	    }
	  }]);
	
	  return Token;
	}();
	
	var EmptyClass = function EmptyClass() {
	  _classCallCheck(this, EmptyClass);
	};
	
	var Lexer = function (_mix$with) {
	  _inherits(Lexer, _mix$with);
	
	  function Lexer() {
	    _classCallCheck(this, Lexer);
	
	    var _this = _possibleConstructorReturn(this, (Lexer.__proto__ || Object.getPrototypeOf(Lexer)).call(this));
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Lexer, [{
	    key: 'reset',
	    value: function reset(path, text) {
	      this.errors = 0;
	      this.path = path || '';
	      this.text = text || '';
	      this.length = this.text.length;
	      this.offset = 0;
	      this.line = 1;
	      this.column = 1;
	      this.tokens = [];
	      this.constants = {};
	      return this;
	    }
	  }, {
	    key: 'validOffset',
	    value: function validOffset(offset) {
	      return offset >= 0 && offset < this.length;
	    }
	  }, {
	    key: 'eos',
	    value: function eos() {
	      return this.validOffset(this.offset);
	    }
	  }, {
	    key: 'char_at',
	    value: function char_at(i) {
	      return this.text.charAt(i);
	    }
	  }, {
	    key: 'subtext',
	    value: function subtext(i) {
	      return this.text.substring(i);
	    }
	  }, {
	    key: 'peek',
	    value: function peek() {
	      var pos_info = function pos_info(offset, line, column) {
	        return { offset: offset, line: line, column: column };
	      };
	
	      var token = null;
	      var l = _lodash2.default.last(this.tokens);
	      var offset = this.offset;
	      var len = 0;
	
	      while ([' ', '\t'].indexOf(this.char_at(offset)) !== -1) {
	        if (l && !l.next_is_space) {
	          l.next_is_space = true;
	        }
	        if (!this.validOffset(offset)) {
	          return { token: token, offset: offset };
	        }
	        offset++;
	      }
	
	      var old_offset = offset;
	
	      var line = this.line;
	      var column = this.column;
	      for (var k in this.token_types) {
	        var r = this.subtext(offset).match(this.token_types[k]);
	        if (r && r.index === 0) {
	          var value = r.length > 1 ? r.slice(1).join('') : r.join('');
	          len = r[0].length;
	          token = new Token(this, k, value, pos_info(offset, line, column), pos_info(offset + len, line, column + len - 1));
	          offset += len;
	          break;
	        }
	      }
	      if (offset === old_offset) {
	        this.offset = offset + 1;
	      }
	      return { token: token, offset: offset, len: len };
	    }
	  }, {
	    key: 'insertToken',
	    value: function insertToken(t) {
	      var c = this.constants[t.value];
	      if (_lodash2.default.isArray(c)) {
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;
	
	        try {
	          for (var _iterator3 = c[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var _t = _step3.value;
	
	            this.insertToken(_t);
	          }
	        } catch (err) {
	          _didIteratorError3 = true;
	          _iteratorError3 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	              _iterator3.return();
	            }
	          } finally {
	            if (_didIteratorError3) {
	              throw _iteratorError3;
	            }
	          }
	        }
	      } else {
	        this.tokens.push(t);
	      }
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      var _peek = this.peek(),
	          token = _peek.token,
	          offset = _peek.offset,
	          len = _peek.len;
	
	      while (token && token._type === 'comment') {
	        var t = this.peek();
	        token = t.token;
	        offset = t.offset;
	        len = t.len;
	        this.offset = offset;
	        this.column += len + 1;
	      }
	
	      if (token) {
	        if (token.type === 'const') {
	          token = this.const_token(token, offset, len);
	        } else if (token.type === 'include') {
	          token = this.include_token(token, offset, len);
	        } else {
	          this.insertToken(token);
	          this.offset = offset;
	          this.column += len + 1;
	        }
	
	        if (token && token.is('eol')) {
	          this.line++;
	          this.column = 1;
	        }
	      }
	
	      return token;
	    }
	  }, {
	    key: 'run',
	    value: function run(path, text) {
	      if (!text) {
	        text = path;
	        path = '';
	      }
	      this.reset(path, text);
	      while (this.validOffset(this.offset)) {
	        this.next();
	      }
	      return this;
	    }
	  }, {
	    key: 'dump',
	    value: function dump() {
	      console.info('lexer dump');
	      console.log(this.tokens);
	      console.log('');
	    }
	  }]);
	
	  return Lexer;
	}(mix(EmptyClass).with(_types2.default, _const2.default, _include2.default));
	
	exports.default = Lexer;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _assigns = __webpack_require__(20);
	
	var _assigns2 = _interopRequireDefault(_assigns);
	
	var _delimiters = __webpack_require__(21);
	
	var _delimiters2 = _interopRequireDefault(_delimiters);
	
	var _comments = __webpack_require__(22);
	
	var _comments2 = _interopRequireDefault(_comments);
	
	var _groups = __webpack_require__(23);
	
	var _groups2 = _interopRequireDefault(_groups);
	
	var _literals = __webpack_require__(24);
	
	var _literals2 = _interopRequireDefault(_literals);
	
	var _operators = __webpack_require__(25);
	
	var _operators2 = _interopRequireDefault(_operators);
	
	var _primitives = __webpack_require__(26);
	
	var _primitives2 = _interopRequireDefault(_primitives);
	
	var _reserved = __webpack_require__(27);
	
	var _reserved2 = _interopRequireDefault(_reserved);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(TokenTypes, _superclass);
	
	    function TokenTypes() {
	      _classCallCheck(this, TokenTypes);
	
	      return _possibleConstructorReturn(this, (TokenTypes.__proto__ || Object.getPrototypeOf(TokenTypes)).apply(this, arguments));
	    }
	
	    _createClass(TokenTypes, [{
	      key: 'token_types',
	      get: function get() {
	        if (!this._token_types) {
	          this._token_types = _.extend({}, _delimiters2.default, _comments2.default, _primitives2.default, _reserved2.default, _literals2.default, _groups2.default, _operators2.default, _assigns2.default);
	        }
	        return this._token_types;
	      }
	    }]);
	
	    return TokenTypes;
	  }(superclass);
	});

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  assign: /^(=)[^=>]/,
	  math_assign: /^[\+\-\*\/%]=/,
	  logic_assign: /^[!&\|\^]=/,
	  fn_assign: /^=>/
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  eol: /^[\r\n]|;/,
	  comma: /^,/,
	  colon: /^:(?=[^A-Z_])/i
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  comment: /^\/\/([^\r\n]*)/
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  open_paren: /^\(/,
	  close_paren: /^\)/,
	
	  open_bracket: /^\[/,
	  close_bracket: /^\]/,
	
	  open_curly: /^\{/,
	  close_curly: /^\}/
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  key: /^:([A-Z_][A-Z_0-9]*)/i,
	
	  id: /^([A-Z_][A-Z_0-9]*)/i,
	  id_field: /^\.([A-Z_][A-Z_0-9]*)/i,
	
	  this: /^@(?=[^A-Z_])/i,
	  this_field: /^@([A-Z_][A-Z_0-9]*)/i
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  symbol: /^[\$]/,
	
	  math: /^[\+\-\*\/%][^=]/,
	  logic: /^[!&\|\^][^=]/,
	  comp: /^>|<|>=|<=|!=|==/
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  hex: /^\$([0-9A-F]+)|0x([0-9A-F]+)/i,
	  number: /^([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)/,
	
	  string: /^"|'([^"]*)"|'/,
	  char: /^'(.)'/
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  include: /^#"([^"]*)"/i,
	
	  const: /^#([A-Z_][A-Z_0-9]*)/i,
	
	  reserved: /^(puts|putc)/i
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(ConstToken, _superclass);
	
	    function ConstToken() {
	      _classCallCheck(this, ConstToken);
	
	      return _possibleConstructorReturn(this, (ConstToken.__proto__ || Object.getPrototypeOf(ConstToken)).apply(this, arguments));
	    }
	
	    _createClass(ConstToken, [{
	      key: 'const_token',
	      value: function const_token(token, offset, len) {
	        var c = [];
	        this.constants[token.value] = c;
	        this.offset = offset;
	        this.column += len + 1;
	        while (true) {
	          var p = this.peek();
	          token = p.token;
	          if (token) {
	            this.offset = p.offset;
	            this.column += p.len + 1;
	          }
	          if (!token || token.is('eol')) {
	            break;
	          }
	          if (token) {
	            c.push(token);
	          }
	        }
	        return token;
	      }
	    }]);
	
	    return ConstToken;
	  }(superclass);
	});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lexer = __webpack_require__(18);
	
	var _utils = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(IncludeToken, _superclass);
	
	    function IncludeToken() {
	      _classCallCheck(this, IncludeToken);
	
	      return _possibleConstructorReturn(this, (IncludeToken.__proto__ || Object.getPrototypeOf(IncludeToken)).apply(this, arguments));
	    }
	
	    _createClass(IncludeToken, [{
	      key: 'include_token',
	      value: function include_token(token, offset, len) {
	        this.offset = offset;
	        this.column += len + 1;
	        var fn = token.value + (_utils.path.extname(token.value) === '' ? '.shp' : '');
	        var pn = _utils.path.join(__dirname, fn);
	        try {
	          _utils.fs.statSync(pn);
	        } catch (e) {
	          try {
	            pn = _utils.path.join(_utils.dirs.user, fn);
	            _utils.fs.statSync(pn);
	          } catch (e) {
	            pn = '';
	          }
	        }
	        if (pn !== '') {
	          var src = _utils.fs.readFileSync(pn, 'utf8');
	          var lx = new _lexer.Lexer();
	          lx.run(pn, src);
	          if (!lx.errors) {
	            _.extend(this.constants, lx.constants);
	            this.tokens = this.tokens.concat(lx.tokens);
	          }
	        }
	        return token;
	      }
	    }]);
	
	    return IncludeToken;
	  }(superclass);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _globals = __webpack_require__(12);
	
	var _frame = __webpack_require__(31);
	
	var _key_literal = __webpack_require__(32);
	
	var _key_literal2 = _interopRequireDefault(_key_literal);
	
	var _statements = __webpack_require__(33);
	
	var _statements2 = _interopRequireDefault(_statements);
	
	var _id = __webpack_require__(34);
	
	var _id2 = _interopRequireDefault(_id);
	
	var _assign = __webpack_require__(35);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _return = __webpack_require__(36);
	
	var _return2 = _interopRequireDefault(_return);
	
	var _class = __webpack_require__(37);
	
	var _class2 = _interopRequireDefault(_class);
	
	var _conditions = __webpack_require__(38);
	
	var _conditions2 = _interopRequireDefault(_conditions);
	
	var _var = __webpack_require__(39);
	
	var _var2 = _interopRequireDefault(_var);
	
	var _loops = __webpack_require__(40);
	
	var _loops2 = _interopRequireDefault(_loops);
	
	var _expressions = __webpack_require__(41);
	
	var _expressions2 = _interopRequireDefault(_expressions);
	
	var _array = __webpack_require__(42);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _dict = __webpack_require__(43);
	
	var _dict2 = _interopRequireDefault(_dict);
	
	var _fn = __webpack_require__(44);
	
	var _fn2 = _interopRequireDefault(_fn);
	
	var _id3 = __webpack_require__(45);
	
	var _id4 = _interopRequireDefault(_id3);
	
	var _class3 = __webpack_require__(46);
	
	var _class4 = _interopRequireDefault(_class3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Node = function () {
	  function Node(parser, token, data) {
	    _classCallCheck(this, Node);
	
	    this.parser = parser;
	    this.token = token;
	    this._in_class = false;
	    this._fn_level = 0;
	    this.data = data || {};
	  }
	
	  _createClass(Node, [{
	    key: 'token_prop',
	    value: function token_prop(name) {
	      return this.token ? this.token[name] : null;
	    }
	  }, {
	    key: 'is',
	    value: function is(e) {
	      return this.token ? this.token.is(e) : false;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.token ? this.token.toString() : '';
	    }
	  }, {
	    key: 'value',
	    get: function get() {
	      return this.token_prop('value');
	    }
	  }, {
	    key: 'type',
	    get: function get() {
	      return this.token_prop('type');
	    }
	  }, {
	    key: 'start',
	    get: function get() {
	      return this.token_prop('start');
	    }
	  }, {
	    key: 'end',
	    get: function get() {
	      return this.token_prop('end');
	    }
	  }, {
	    key: 'length',
	    get: function get() {
	      return this.token_prop('length');
	    }
	  }]);
	
	  return Node;
	}();
	
	var EmptyClass = function EmptyClass() {
	  _classCallCheck(this, EmptyClass);
	};
	
	var Parser = function (_mix$with) {
	  _inherits(Parser, _mix$with);
	
	  function Parser() {
	    _classCallCheck(this, Parser);
	
	    var _this = _possibleConstructorReturn(this, (Parser.__proto__ || Object.getPrototypeOf(Parser)).call(this));
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Parser, [{
	    key: 'reset',
	    value: function reset(tokens) {
	      this.errors = 0;
	      this.offset = 0;
	      this.nodes = [];
	      this.frames = new _frame.Frames();
	      this.prev_frame = null;
	      this.in_class = false;
	      this.fn_level = 0;
	      this.tokens = tokens || [];
	    }
	  }, {
	    key: 'validOffset',
	    value: function validOffset(offset) {
	      return offset >= 0 && offset < this.length;
	    }
	  }, {
	    key: 'token_at',
	    value: function token_at(offset) {
	      return this.validOffset(offset) ? this.tokens[offset] : null;
	    }
	  }, {
	    key: 'skip',
	    value: function skip(e) {
	      while (this.is(e) && !this.eos) {
	        this.next();
	      }
	    }
	  }, {
	    key: 'is',
	    value: function is(e) {
	      return this.token ? this.token.is(e) : false;
	    }
	  }, {
	    key: 'expect',
	    value: function expect(e) {
	      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	      var r = this.token ? this.token.is(e) : false;
	      if (r) {
	        if (next) {
	          this.next();
	        }
	      } else {
	        (0, _globals.error)(this, this.token, e, 'expected');
	      }
	      return r;
	    }
	  }, {
	    key: 'match',
	    value: function match(offset, matches) {
	      if (!_lodash2.default.isNumber(offset)) {
	        matches = offset;
	        offset = this.offset;
	      }
	      var tokens = [];
	      var m = 0;
	      while (this.validOffset(offset) && m < matches.length) {
	        var token = this.tokens[offset++];
	        if (!token.is(matches[m++])) {
	          return null;
	        }
	        tokens.push(token);
	      }
	      return tokens.length ? tokens : null;
	    }
	  }, {
	    key: 'peek',
	    value: function peek() {
	      var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	      return this.token_at(this.offset + c);
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	
	      this.offset += c;
	      return this;
	    }
	  }, {
	    key: 'loop_while',
	    value: function loop_while(fn, matches, end, end_next, skip) {
	      var nodes = [];
	      if (skip) {
	        this.skip(skip);
	      }
	      while (!this.eos && (!end || !this.is(end)) && (!matches || this.match(matches))) {
	        nodes.push(fn.call(this));
	        if (skip) {
	          this.skip(skip);
	        }
	      }
	      if (end) {
	        this.expect(end, end_next);
	      }
	      return nodes;
	    }
	  }, {
	    key: 'next_expr_node',
	    value: function next_expr_node(left) {
	      var token = this.token;
	      var data = {};
	      if (left) {
	        this.next();
	        data = { left: left, right: this.expr() };
	      }
	      var node = new Node(this, token, data);
	      if (!left) {
	        this.next();
	      }
	      return node;
	    }
	  }, {
	    key: 'run',
	    value: function run(tokens) {
	      this.reset(tokens);
	      this.frames.start('globals');
	      var nodes = this.statements();
	      this.frames.end();
	      this.nodes = nodes;
	      return nodes;
	    }
	  }, {
	    key: 'dump',
	    value: function dump() {
	      console.info('parser dump');
	      console.log(this.nodes);
	      console.log('');
	    }
	  }, {
	    key: 'eos',
	    get: function get() {
	      return this.offset >= this.length;
	    }
	  }, {
	    key: 'length',
	    get: function get() {
	      return this.tokens.length;
	    }
	  }, {
	    key: 'token',
	    get: function get() {
	      return this.token_at(this.offset);
	    }
	  }]);
	
	  return Parser;
	}(mix(EmptyClass).with(_key_literal2.default, _statements2.default, _id2.default, _assign2.default, _return2.default, _class2.default, _conditions2.default, _var2.default, _loops2.default, _expressions2.default, _array2.default, _dict2.default, _fn2.default, _id4.default, _class4.default));
	
	exports.default = Parser;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FrameItem = exports.Frames = exports.Frame = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Frame = exports.Frame = undefined;
	var Frames = exports.Frames = undefined;
	var FrameItem = exports.FrameItem = undefined;
	
	exports.Frames = Frames = function () {
	  function Frames() {
	    _classCallCheck(this, Frames);
	
	    this.reset();
	  }
	
	  _createClass(Frames, [{
	    key: 'reset',
	    value: function reset() {
	      this.current = null;
	    }
	  }, {
	    key: 'start',
	    value: function start(type) {
	      this.current = new Frame(this, this.current, type);
	    }
	  }, {
	    key: 'end',
	    value: function end() {
	      this.current = this.current.parent;
	    }
	  }, {
	    key: 'add',
	    value: function add(node, parent, item_type) {
	      return this.current.add(node, parent, item_type);
	    }
	  }, {
	    key: 'exists',
	    value: function exists(name, item_type) {
	      var c = this.current;
	      while (c) {
	        var i = c.exists(name, item_type);
	        if (i) {
	          return i;
	        }
	        c = c.parent;
	      }
	      return null;
	    }
	  }, {
	    key: 'fn_exists',
	    value: function fn_exists(name) {
	      return this.exists(name, 'fn');
	    }
	  }, {
	    key: 'class_exists',
	    value: function class_exists(name) {
	      return this.exists(name, 'class');
	    }
	  }, {
	    key: 'var_exists',
	    value: function var_exists(name) {
	      return this.exists(name, 'var');
	    }
	  }]);
	
	  return Frames;
	}();
	
	exports.FrameItem = FrameItem = function () {
	  function FrameItem(frame, parent, node, item_type) {
	    _classCallCheck(this, FrameItem);
	
	    this.frame = frame;
	    this.parent = parent;
	    this.item_type = item_type;
	    this.node = node;
	  }
	
	  _createClass(FrameItem, [{
	    key: 'data',
	    get: function get() {
	      return this.node.data;
	    }
	  }, {
	    key: 'name',
	    get: function get() {
	      return this.node.value;
	    }
	  }, {
	    key: 'type',
	    get: function get() {
	      return this.node.type;
	    }
	  }, {
	    key: 'is_var',
	    get: function get() {
	      return this.item_type === 'var';
	    }
	  }, {
	    key: 'is_class',
	    get: function get() {
	      return this.item_type === 'class';
	    }
	  }, {
	    key: 'is_fn',
	    get: function get() {
	      return this.item_type === 'fn';
	    }
	  }, {
	    key: 'is_local',
	    get: function get() {
	      return this.frame.is_local;
	    }
	  }, {
	    key: 'is_global',
	    get: function get() {
	      return this.frame.is_global;
	    }
	  }]);
	
	  return FrameItem;
	}();
	
	exports.Frame = Frame = function () {
	  function Frame(frames, parent, type) {
	    _classCallCheck(this, Frame);
	
	    this.frames = frames;
	    this.parent = parent;
	    this.type = type;
	    this.items = [];
	  }
	
	  _createClass(Frame, [{
	    key: 'add',
	    value: function add(node, parent, item_type) {
	      var i = new FrameItem(this, parent, node, item_type);
	      this.items.push(i);
	      node._global = this.is_global;
	      return i;
	    }
	  }, {
	    key: 'exists',
	    value: function exists(name, item_type) {
	      return _lodash2.default.find(this.items, item_type ? { name: name, item_type: item_type } : { name: name });
	    }
	  }, {
	    key: 'fn_exists',
	    value: function fn_exists(name) {
	      return this.exists(name, 'fn');
	    }
	  }, {
	    key: 'var_exists',
	    value: function var_exists(name) {
	      return this.exists(name, 'var');
	    }
	  }, {
	    key: 'class_exists',
	    value: function class_exists(name) {
	      return this.exists(name, 'class');
	    }
	  }, {
	    key: 'name',
	    get: function get() {
	      return this.parent ? '$s' : '$g';
	    }
	  }, {
	    key: 'is_local',
	    get: function get() {
	      return this.parent !== null;
	    }
	  }, {
	    key: 'is_global',
	    get: function get() {
	      return this.parent === null;
	    }
	  }]);
	
	  return Frame;
	}();

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(30);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(KeyLiterals, _superclass);
	
	    function KeyLiterals() {
	      _classCallCheck(this, KeyLiterals);
	
	      return _possibleConstructorReturn(this, (KeyLiterals.__proto__ || Object.getPrototypeOf(KeyLiterals)).apply(this, arguments));
	    }
	
	    _createClass(KeyLiterals, [{
	      key: 'key_literal',
	      value: function key_literal() {
	        var node = new _parser.Node(this, this.token);
	        this.expect('key');
	        node.data.expr = this.expr();
	        return node;
	      }
	    }]);
	
	    return KeyLiterals;
	  }(superclass);
	});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _globals = __webpack_require__(12);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(Statements, _superclass);
	
	    function Statements() {
	      _classCallCheck(this, Statements);
	
	      return _possibleConstructorReturn(this, (Statements.__proto__ || Object.getPrototypeOf(Statements)).apply(this, arguments));
	    }
	
	    _createClass(Statements, [{
	      key: 'block',
	      value: function block(end) {
	        var end_next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	        var block_type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	        if (block_type) {
	          this.frames.start(block_type);
	        }
	        var nodes = this.loop_while(this.statement, null, end, end_next, 'eol');
	        if (block_type) {
	          this.frames.end();
	        }
	        return nodes;
	      }
	    }, {
	      key: 'statements',
	      value: function statements() {
	        return this.block();
	      }
	    }, {
	      key: 'single_statement',
	      value: function single_statement() {
	        var node = new Node(this, this.token);
	        this.next();
	        return node;
	      }
	    }, {
	      key: 'statement',
	      value: function statement() {
	        if (this.match(['let', 'id'])) {
	          return this.var_statement();
	        } // variable definition
	        else if (this.match(['id|id_field|this_field', 'assign|fn_assign'])) {
	            return this.assign_statement();
	          } // variable assignment
	          else if (this.is('if')) {
	              return this.if_statement();
	            } // if block
	            else if (this.is('for')) {
	                return this.for_statement();
	              } // while block
	              else if (this.is('while')) {
	                  return this.while_statement();
	                } // while block
	                else if (this.is('return')) {
	                    return this.return_statement();
	                  } // return from function
	                  else if (this.is(['break', 'continue'])) {
	                      return this.single_statement();
	                    } // single statement
	                    else if (this.is('class')) {
	                        return this.class_statement();
	                      } // class statement
	                      else if (this.is(['id', 'super'])) {
	                          return this.id_statement();
	                        } // function call
	                        else {
	                            (0, _globals.error)(this, this.token, 'syntax error');
	                            this.next();
	                          }
	        return null;
	      }
	    }]);
	
	    return Statements;
	  }(superclass);
	});

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(IdStatements, _superclass);
	
	    function IdStatements() {
	      _classCallCheck(this, IdStatements);
	
	      return _possibleConstructorReturn(this, (IdStatements.__proto__ || Object.getPrototypeOf(IdStatements)).apply(this, arguments));
	    }
	
	    _createClass(IdStatements, [{
	      key: 'id_statement',
	      value: function id_statement() {
	        var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	        if (this.is('super')) {
	          return this.super_expr();
	        } else {
	          return this.id_expr(first);
	        }
	      }
	    }]);
	
	    return IdStatements;
	  }(superclass);
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(30);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(AssignStatements, _superclass);
	
	    function AssignStatements() {
	      _classCallCheck(this, AssignStatements);
	
	      return _possibleConstructorReturn(this, (AssignStatements.__proto__ || Object.getPrototypeOf(AssignStatements)).apply(this, arguments));
	    }
	
	    _createClass(AssignStatements, [{
	      key: 'assign_statement',
	      value: function assign_statement() {
	        var node = null;
	        var id = this.token;
	        this.next();
	        if (this.is('fn_assign')) {
	          node = this.fn_expr(id, true);
	          id._fn = true;
	        } else {
	          node = new _parser.Node(this, this.token, { id: id });
	          this.next();
	          node.data.expr = this.expr();
	        }
	        this.frames.add(id, null, id._fn ? 'fn' : 'var');
	        return node;
	      }
	    }]);
	
	    return AssignStatements;
	  }(superclass);
	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(30);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(ReturnStatements, _superclass);
	
	    function ReturnStatements() {
	      _classCallCheck(this, ReturnStatements);
	
	      return _possibleConstructorReturn(this, (ReturnStatements.__proto__ || Object.getPrototypeOf(ReturnStatements)).apply(this, arguments));
	    }
	
	    _createClass(ReturnStatements, [{
	      key: 'return_statement',
	      value: function return_statement() {
	        var p = false;
	        var end = 'eol|end|close_paren';
	        var node = new _parser.Node(this, this.token);
	        node.data.args = [];
	        this.next();
	        if (this.is('open_paren')) {
	          p = true;
	          end = 'close_paren';
	          this.next();
	        }
	        if (!p || !this.is('close_paren')) {
	          node.data.args = this.exprs(end, false);
	        }
	        if (p) {
	          this.expect('close_paren');
	        }
	        return node;
	      }
	    }]);
	
	    return ReturnStatements;
	  }(superclass);
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(30);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(ClassStatements, _superclass);
	
	    function ClassStatements() {
	      _classCallCheck(this, ClassStatements);
	
	      return _possibleConstructorReturn(this, (ClassStatements.__proto__ || Object.getPrototypeOf(ClassStatements)).apply(this, arguments));
	    }
	
	    _createClass(ClassStatements, [{
	      key: 'class_list',
	      value: function class_list() {
	        return this.loop_while(this.single, ['id'], 'eol', true, 'comma');
	      }
	    }, {
	      key: 'class_statement',
	      value: function class_statement() {
	        var token = this.token;
	        this.next();
	        var _extends = null;
	        var id = this.token;
	        this.next();
	        if (this.is(':')) {
	          this.next();
	          _extends = this.class_list();
	        }
	        this.frames.add(id, null, 'class');
	        this.in_class = true;
	        var body = this.block('end', false, 'class');
	        this.in_class = false;
	        this.expect('end');
	        return new _parser.Node(this, token, { id: id, _extends: _extends, body: body });
	      }
	    }]);
	
	    return ClassStatements;
	  }(superclass);
	});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(30);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(ConditionStatements, _superclass);
	
	    function ConditionStatements() {
	      _classCallCheck(this, ConditionStatements);
	
	      return _possibleConstructorReturn(this, (ConditionStatements.__proto__ || Object.getPrototypeOf(ConditionStatements)).apply(this, arguments));
	    }
	
	    _createClass(ConditionStatements, [{
	      key: 'if_statement',
	      value: function if_statement() {
	        var expect_end = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	        var token = this.token;
	        this.next();
	        var expr_block = void 0;
	        if (this.is('open_paren')) {
	          this.next();
	          expr_block = this.expr();
	          this.expect('close_paren');
	        } else {
	          expr_block = this.expr();
	        }
	        var true_body = this.block(['else', 'end'], false, 'if');
	        var false_body = this.is('else') ? this.else_statement(false) : null;
	        if (expect_end) {
	          this.expect('end');
	        }
	        return new _parser.Node(this, token, { expr: expr_block, true_body: true_body, false_body: false_body });
	      }
	    }, {
	      key: 'else_statement',
	      value: function else_statement() {
	        var expect_end = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	        var token = this.token;
	        var node = null;
	        this.next();
	        if (this.is('if')) {
	          node = this.if_statement(false);
	          node.token = token;
	        } else {
	          node = new _parser.Node(this, token, { false_body: this.block('end', false, 'else') });
	        }
	        if (expect_end) {
	          this.expect('end');
	        }
	        return node;
	      }
	    }]);
	
	    return ConditionStatements;
	  }(superclass);
	});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lexer = __webpack_require__(18);
	
	var _parser = __webpack_require__(30);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(VarStatements, _superclass);
	
	    function VarStatements() {
	      _classCallCheck(this, VarStatements);
	
	      return _possibleConstructorReturn(this, (VarStatements.__proto__ || Object.getPrototypeOf(VarStatements)).apply(this, arguments));
	    }
	
	    _createClass(VarStatements, [{
	      key: 'var_statement',
	      value: function var_statement() {
	        var node = null;
	        this.next();
	        if (!this.peek().is('assign|fn_assign')) {
	          var t = new _lexer.Token(this.token);
	          t.value = '=';
	          t._type = 'assign';
	          node = new _parser.Node(this, t, { id: this.token, expr: null });
	          this.frames.add(this.token, null, 'var');
	        } else {
	          node = this.assign_statement();
	        }
	        node._let = true;
	        return node;
	      }
	    }]);
	
	    return VarStatements;
	  }(superclass);
	});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(30);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(LoopStatements, _superclass);
	
	    function LoopStatements() {
	      _classCallCheck(this, LoopStatements);
	
	      return _possibleConstructorReturn(this, (LoopStatements.__proto__ || Object.getPrototypeOf(LoopStatements)).apply(this, arguments));
	    }
	
	    _createClass(LoopStatements, [{
	      key: 'for_statement',
	      value: function for_statement() {
	        var token = this.token;
	        this.next();
	
	        var v = this.token;
	        this.expect('id|var');
	        this.expect('assign');
	        var min_expr = this.expr();
	        this.expect('to');
	        var max_expr = this.expr();
	        var step_expr = null;
	        if (this.is('step')) {
	          this.next();
	          step_expr = this.expr();
	        }
	        var body = this.block('end', false, 'for');
	        this.expect('end');
	        return new _parser.Node(this, token, { v: v, min_expr: min_expr, max_expr: max_expr, step_expr: step_expr, body: body });
	      }
	    }, {
	      key: 'while_statement',
	      value: function while_statement() {
	        var token = this.token;
	        this.next();
	        var expr_block = void 0;
	        if (this.is('open_paren')) {
	          this.next();
	          expr_block = this.expr();
	          this.expect('close_paren');
	        } else {
	          expr_block = this.expr();
	        }
	        var body = this.block('end', false, 'while');
	        this.expect('end');
	        return new _parser.Node(this, token, { expr: expr_block, body: body });
	      }
	    }]);
	
	    return LoopStatements;
	  }(superclass);
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _globals = __webpack_require__(12);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(Expressions, _superclass);
	
	    function Expressions() {
	      _classCallCheck(this, Expressions);
	
	      return _possibleConstructorReturn(this, (Expressions.__proto__ || Object.getPrototypeOf(Expressions)).apply(this, arguments));
	    }
	
	    _createClass(Expressions, [{
	      key: 'exprs',
	      value: function exprs(end, end_next) {
	        return this.loop_while(this.expr, null, end, end_next, 'comma');
	      }
	    }, {
	      key: 'expr',
	      value: function expr() {
	        var node = this.simple_expr();
	        if (node) {
	          var term = this.term_expr(node);
	          if (term) {
	            return term;
	          }
	
	          var factor = this.factor_expr(node);
	          if (factor) {
	            return factor;
	          }
	
	          var conditional = this.conditional_expr(node);
	          if (conditional) {
	            return conditional;
	          }
	
	          var junction = this.junction_expr(node);
	          if (junction) {
	            return junction;
	          }
	        }
	        return node;
	      }
	    }, {
	      key: 'simple_expr',
	      value: function simple_expr() {
	        if (this.is(['number', 'string', 'char'])) {
	          return this.next_expr_node();
	        } else if (this.is('fn_assign')) {
	          return this.fn_expr();
	        } else if (this.is('open_paren')) {
	          return this.sub_expr();
	        } else if (this.is('open_bracket')) {
	          return this.array_expr();
	        } else if (this.is('open_curly')) {
	          return this.dict_expr();
	        } else if (this.is(['this', 'this_field'])) {
	          return this.this_expr();
	        } else if (this.is('super')) {
	          return this.super_expr();
	        } else if (this.is('new')) {
	          return this.new_expr();
	        } else if (this.is('id')) {
	          return this.id_expr();
	        } else {
	          (0, _globals.error)(this, this.token, 'number, string, variable, variable paren or function call/expression expected');
	          this.next();
	        }
	        return null;
	      }
	    }, {
	      key: 'sub_expr',
	      value: function sub_expr() {
	        var nodes = [];
	        nodes.push(new Node(this, this.token));
	        this.expect('open_paren');
	        if (!this.is('close_paren')) {
	          nodes.push(this.expr());
	        }
	        nodes.push(new Node(this, this.token));
	        this.expect('close_paren');
	        return nodes;
	      }
	    }, {
	      key: 'term_expr',
	      value: function term_expr(left) {
	        return this.is(/\+|-/) ? this.next_expr_node(left) : null;
	      }
	    }, {
	      key: 'factor_expr',
	      value: function factor_expr(left) {
	        return this.is(/\/|\*/) ? this.next_expr_node(left) : null;
	      }
	    }, {
	      key: 'conditional_expr',
	      value: function conditional_expr(left) {
	        return this.is(/>|>=|<|<=|!=|<>|==/) ? this.next_expr_node(left) : null;
	      }
	    }, {
	      key: 'junction_expr',
	      value: function junction_expr(left) {
	        return this.is(/&|\|/) ? this.next_expr_node(left) : null;
	      }
	    }]);
	
	    return Expressions;
	  }(superclass);
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(30);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(ArrayExpressions, _superclass);
	
	    function ArrayExpressions() {
	      _classCallCheck(this, ArrayExpressions);
	
	      return _possibleConstructorReturn(this, (ArrayExpressions.__proto__ || Object.getPrototypeOf(ArrayExpressions)).apply(this, arguments));
	    }
	
	    _createClass(ArrayExpressions, [{
	      key: 'array_expr',
	      value: function array_expr() {
	        var node = new _parser.Node(this, this.token);
	        node.data.args = [];
	        this.expect('open_bracket');
	        if (!this.is('close_bracket')) {
	          node.data.args = this.loop_while(this.expr, null, 'close_bracket', false, 'comma|eol');
	        }
	        this.expect('close_bracket');
	        return node;
	      }
	    }]);
	
	    return ArrayExpressions;
	  }(superclass);
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(30);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(DictExpressions, _superclass);
	
	    function DictExpressions() {
	      _classCallCheck(this, DictExpressions);
	
	      return _possibleConstructorReturn(this, (DictExpressions.__proto__ || Object.getPrototypeOf(DictExpressions)).apply(this, arguments));
	    }
	
	    _createClass(DictExpressions, [{
	      key: 'dict_expr',
	      value: function dict_expr() {
	        var node = new _parser.Node(this, this.token);
	        node.data.def = [];
	        this.expect('open_curly');
	        if (!this.is('close_curly')) {
	          node.data.def = this.loop_while(this.key_literal, ['key'], 'close_curly', false, 'comma|eol');
	        }
	        this.expect('close_curly');
	        return node;
	      }
	    }]);
	
	    return DictExpressions;
	  }(superclass);
	});

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(30);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(FnExpressions, _superclass);
	
	    function FnExpressions() {
	      _classCallCheck(this, FnExpressions);
	
	      return _possibleConstructorReturn(this, (FnExpressions.__proto__ || Object.getPrototypeOf(FnExpressions)).apply(this, arguments));
	    }
	
	    _createClass(FnExpressions, [{
	      key: 'fn_expr',
	      value: function fn_expr(id) {
	        var statement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	        var node = new _parser.Node(this, this.token, { id: id });
	        node.data.args = [];
	        if (statement) {
	          node._in_class = this.in_class;
	          node._fn_level = this.fn_level++;
	        }
	        this.next();
	        this.frames.start('fn');
	        if (this.is('open_paren')) {
	          this.next();
	          if (!this.is('close_paren')) {
	            node.data.args = this.fn_args_def();
	          }
	          this.expect('close_paren');
	        }
	        node.data.body = this.block('end', false);
	        this.frames.end();
	        this.expect('end');
	        if (statement) {
	          this.fn_level--;
	        }
	        return node;
	      }
	    }, {
	      key: 'fn_arg',
	      value: function fn_arg() {
	        this.frames.add(this.token, null, 'var');
	        var node = new _parser.Node(this, this.token);
	        this.next();
	        if (this.is('assign')) {
	          this.next();
	          node.data.assign = this.expr();
	        }
	        return node;
	      }
	    }, {
	      key: 'fn_args_def',
	      value: function fn_args_def() {
	        return this.loop_while(this.fn_arg, ['id'], 'close_paren', false, 'comma|eol');
	      }
	    }]);
	
	    return FnExpressions;
	  }(superclass);
	});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _globals = __webpack_require__(12);
	
	var _parser = __webpack_require__(30);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(IdExpressions, _superclass);
	
	    function IdExpressions() {
	      _classCallCheck(this, IdExpressions);
	
	      return _possibleConstructorReturn(this, (IdExpressions.__proto__ || Object.getPrototypeOf(IdExpressions)).apply(this, arguments));
	    }
	
	    _createClass(IdExpressions, [{
	      key: 'id_expr',
	      value: function id_expr() {
	        var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	        if (first && !this.frames.exists(this.token.value)) {
	          (0, _globals.error)(this, this.token, 'undeclared identifier');
	          return null;
	        }
	        var node = new _parser.Node(this, this.token);
	        this.next();
	        if (this.is('open_bracket')) {
	          if (!node.data.fields) {
	            node.data.fields = [];
	          }
	          node.data.fields.push(this.array_expr());
	        }
	        if (this.is('open_paren')) {
	          this.next();
	          node.token._type = 'fn';
	          if (!this.is('close_paren')) {
	            node.data.args = this.exprs('close_paren', false);
	          }
	          this.expect('close_paren');
	        }
	        while (this.is(['id_field', 'open_bracket'])) {
	          if (!node.data.fields) {
	            node.data.fields = [];
	          }
	          node.data.fields.push(this.id_field());
	          this.skip('comma');
	        }
	        return node;
	      }
	    }, {
	      key: 'id_field',
	      value: function id_field() {
	        var node = new _parser.Node(this, this.token);
	        node.data.args = [];
	        node.token._type = 'id';
	        node._field = true;
	        this.next();
	        if (this.is('open_bracket')) {
	          if (!node.data.fields) {
	            node.data.fields = [];
	          }
	          node.data.fields.push(this.array_expr());
	        }
	        if (this.is('open_paren')) {
	          this.next();
	          node.token._type = 'fn';
	          if (!this.is('close_paren')) {
	            node.data.args = this.exprs('close_paren', false);
	          }
	          this.expect('close_paren');
	        }
	        return node;
	      }
	    }]);
	
	    return IdExpressions;
	  }(superclass);
	});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _globals = __webpack_require__(12);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(ClassExpressions, _superclass);
	
	    function ClassExpressions() {
	      _classCallCheck(this, ClassExpressions);
	
	      return _possibleConstructorReturn(this, (ClassExpressions.__proto__ || Object.getPrototypeOf(ClassExpressions)).apply(this, arguments));
	    }
	
	    _createClass(ClassExpressions, [{
	      key: 'new_expr',
	      value: function new_expr() {
	        var token = this.token;
	        this.next();
	        var id = this.token;
	        this.next();
	        if (!this.frames.exists(id.value, 'class')) {
	          (0, _globals.error)(this, id, 'undeclared class');
	          return null;
	        }
	        var args = [];
	        if (this.is('open_paren')) {
	          this.next();
	          if (!this.is('close_paren')) {
	            args = this.exprs('close_paren', false);
	          }
	          this.expect('close_paren');
	        }
	        return new Node(this, token, { id: id, args: args });
	      }
	    }, {
	      key: 'this_expr',
	      value: function this_expr() {
	        if (!this.in_class) {
	          (0, _globals.error)(this, this.token, '@ cannot be used outside class definition');
	          this.next();
	          return null;
	        }
	        if (this.is('this')) {
	          return this.next_expr_node();
	        } else if (this.is('this_field')) {
	          return this.id_expr(false);
	        }
	        return null;
	      }
	    }, {
	      key: 'super_expr',
	      value: function super_expr() {
	        if (!this.in_class) {
	          (0, _globals.error)(this, this.token, 'super cannot be used outside class definition');
	          this.next();
	          return null;
	        }
	        return this.id_expr(false);
	      }
	    }]);
	
	    return ClassExpressions;
	  }(superclass);
	});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _templates = __webpack_require__(48);
	
	var _templates2 = _interopRequireDefault(_templates);
	
	var _code = __webpack_require__(49);
	
	var _code2 = _interopRequireDefault(_code);
	
	var _block = __webpack_require__(50);
	
	var _block2 = _interopRequireDefault(_block);
	
	var _statements = __webpack_require__(51);
	
	var _statements2 = _interopRequireDefault(_statements);
	
	var _expressions = __webpack_require__(52);
	
	var _expressions2 = _interopRequireDefault(_expressions);
	
	var _primitives = __webpack_require__(53);
	
	var _primitives2 = _interopRequireDefault(_primitives);
	
	var _operators = __webpack_require__(54);
	
	var _operators2 = _interopRequireDefault(_operators);
	
	var _id = __webpack_require__(55);
	
	var _id2 = _interopRequireDefault(_id);
	
	var _class = __webpack_require__(56);
	
	var _class2 = _interopRequireDefault(_class);
	
	var _fn = __webpack_require__(57);
	
	var _fn2 = _interopRequireDefault(_fn);
	
	var _array = __webpack_require__(58);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _dict = __webpack_require__(59);
	
	var _dict2 = _interopRequireDefault(_dict);
	
	var _assign = __webpack_require__(60);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EmptyClass = function EmptyClass() {
	  _classCallCheck(this, EmptyClass);
	};
	
	var Transpiler = function (_mix$with) {
	  _inherits(Transpiler, _mix$with);
	
	  function Transpiler() {
	    _classCallCheck(this, Transpiler);
	
	    var _this = _possibleConstructorReturn(this, (Transpiler.__proto__ || Object.getPrototypeOf(Transpiler)).call(this));
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Transpiler, [{
	    key: 'validOffset',
	    value: function validOffset(offset) {
	      return offset >= 0 && offset < this.nodes.length;
	    }
	  }, {
	    key: 'node_at',
	    value: function node_at(offset) {
	      return this.validOffset(offset) ? this.nodes[offset] : null;
	    }
	  }, {
	    key: 'peek',
	    value: function peek() {
	      var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	      return this.node_at(this.offset + c);
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	      this.offset += c;
	    }
	  }, {
	    key: 'write',
	    value: function write() {
	      for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	        values[_key] = arguments[_key];
	      }
	
	      this.line += values.join('');
	    }
	  }, {
	    key: 'writeln',
	    value: function writeln() {
	      this.write.apply(this, arguments);
	      this.lines = this.lines.concat(this.line.split('\n'));
	      this.line = '';
	    }
	  }, {
	    key: 'reset',
	    value: function reset(nodes) {
	      this.errors = 0;
	      this.nodes = nodes || [];
	      this.lines = [];
	      this.line = '';
	      this.offset = 0;
	      this.code = '';
	      this.indent_level = 0;
	    }
	  }, {
	    key: 'comma',
	    value: function comma(nodes) {
	      var a = [];
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var n = _step.value;
	
	          a.push(n instanceof Node ? this.expr(n) : n);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return a.join(', ');
	    }
	  }, {
	    key: 'ln',
	    value: function ln(str) {
	      return str + (!_lodash2.default.endsWith(str, '\n') ? '\n' : '');
	    }
	  }, {
	    key: 'indent',
	    value: function indent(str) {
	      return _lodash2.default.padStart('', this.indent_level * 2) + str;
	    }
	  }, {
	    key: 'str',
	    value: function str(value) {
	      return '\'' + value.replace(/'/g, '\'') + '\'';
	    }
	  }, {
	    key: 'run',
	    value: function run(nodes) {
	      this.reset(nodes);
	      this.code_start();
	      while (!this.eos) {
	        this.writeln(this.statement(this.node));
	        this.next();
	      }
	      this.code_end();
	      this.code = this.lines.join('\n');
	      return this.code;
	    }
	  }, {
	    key: 'dump',
	    value: function dump() {
	      console.info('transpiler dump');
	      console.log(this.code);
	      console.log('');
	    }
	  }, {
	    key: 'length',
	    get: function get() {
	      return this.lines.length;
	    }
	  }, {
	    key: 'eos',
	    get: function get() {
	      return this.offset >= this.nodes.length;
	    }
	  }, {
	    key: 'node',
	    get: function get() {
	      return this.node_at(this.offset);
	    }
	  }]);
	
	  return Transpiler;
	}(mix(EmptyClass).with(_templates2.default, _code2.default, _block2.default, _statements2.default, _expressions2.default, _primitives2.default, _operators2.default, _id2.default, _class2.default, _fn2.default, _array2.default, _dict2.default, _assign2.default));
	
	exports.default = Transpiler;

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(Templates, _superclass);
	
	    function Templates() {
	      _classCallCheck(this, Templates);
	
	      return _possibleConstructorReturn(this, (Templates.__proto__ || Object.getPrototypeOf(Templates)).apply(this, arguments));
	    }
	
	    _createClass(Templates, [{
	      key: 'template',
	      value: function template(node, d) {
	        if (_.isString(node)) {
	          return this.node_template(node);
	        } else if (node.is('fn')) {
	          return this.fn_call_template(node);
	        } else if (node.is('fn_assign')) {
	          return this.fn_assign_template(node, d);
	        } else if (node.is('open_bracket')) {
	          return this.array_template(node, d);
	        } else if (node.is('open_curly')) {
	          return this.dict_template(node, d);
	        } else if (node.is(['math', 'logic', 'comp'])) {
	          return this.operator_template(node, d);
	        } else if (node.is(['this', 'this_field'])) {
	          return this.this_template(node, d);
	        } else if (node.is('new')) {
	          return this.new_template(node, d);
	        } else if (node.is(['char', 'string'])) {
	          return this.string_template(node, d);
	        } else if (node.is('id')) {
	          return this.id_template(node, d);
	        } else {
	          return this.value_template(node, d);
	        }
	      }
	    }]);
	
	    return Templates;
	  }(superclass);
	});

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(CodeTemplates, _superclass);
	
	    function CodeTemplates() {
	      _classCallCheck(this, CodeTemplates);
	
	      return _possibleConstructorReturn(this, (CodeTemplates.__proto__ || Object.getPrototypeOf(CodeTemplates)).apply(this, arguments));
	    }
	
	    _createClass(CodeTemplates, [{
	      key: 'code_start_template',
	      value: function code_start_template() {
	        this.writeln('(function () {');
	        this.indent_level++;
	        this.writeln('\'use strict\';');
	        this.writeln();
	      }
	    }, {
	      key: 'code_end_template',
	      value: function code_end_template() {
	        this.writeln('})();');
	        this.indent_level--;
	        this.writeln();
	      }
	    }]);
	
	    return CodeTemplates;
	  }(superclass);
	});

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(BlockTemplates, _superclass);
	
	    function BlockTemplates() {
	      _classCallCheck(this, BlockTemplates);
	
	      return _possibleConstructorReturn(this, (BlockTemplates.__proto__ || Object.getPrototypeOf(BlockTemplates)).apply(this, arguments));
	    }
	
	    _createClass(BlockTemplates, [{
	      key: 'block_template',
	      value: function block_template(node) {
	        var str = this.ln('{');
	
	        this.indent_level++;
	
	        if (_.isArray(node)) {
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;
	
	          try {
	            for (var _iterator = node[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var n = _step.value;
	
	              str += this.statement_template(n);
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }
	        } else {
	          str = this.statement_template(node);
	        }
	
	        this.indent_level--;
	
	        str += this.ln(this.indent('}'));
	
	        return str;
	      }
	    }]);
	
	    return BlockTemplates;
	  }(superclass);
	});

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(StatementTemplates, _superclass);
	
	    function StatementTemplates() {
	      _classCallCheck(this, StatementTemplates);
	
	      return _possibleConstructorReturn(this, (StatementTemplates.__proto__ || Object.getPrototypeOf(StatementTemplates)).apply(this, arguments));
	    }
	
	    _createClass(StatementTemplates, [{
	      key: 'statement_template',
	      value: function statement_template(node, d) {
	        var str = '';
	
	        if (_.isArray(node)) {
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;
	
	          try {
	            for (var _iterator = node[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var n = _step.value;
	
	              str += this.statement(n);
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }
	        } else if (node) {
	          var _d = node.data || {};
	          var t = {};
	
	          if (node.is(['assign', 'fn_assign'])) {
	            t = this.assign(node);
	          } else if (node.is('fn')) {
	            t = this.fn_call(node, true);
	          } else if (node.is('if')) {
	            t = {
	              tmpl: 'if (#{expr}) #{true_body}#{false_body}',
	              dat: {
	                expr: this.expr(_d.expr),
	                true_body: this.block(_d.true_body),
	                false_body: this.statement(_d.false_body)
	              }
	            };
	          } else if (node.is('else')) {
	            if (_d.expr) {
	              // else if
	              t = {
	                tmpl: 'else if (#{expr}) #{true_body}#{false_body}',
	                dat: {
	                  expr: this.expr(_d.expr),
	                  true_body: this.block(_d.true_body),
	                  false_body: this.statement(_d.false_body)
	                }
	              };
	            } else {
	              t = {
	                tmpl: 'else #{false_body}',
	                dat: { false_body: this.block(_d.false_body) }
	              };
	            }
	          } else if (node.is('while')) {
	            t = {
	              tmpl: 'while (#{expr}) #{body}',
	              dat: {
	                expr: this.expr(_d.expr),
	                body: this.block(_d.body)
	              }
	            };
	          } else if (node.is('for')) {
	            t = {
	              tmpl: 'for (let #{v} = #{min_expr}; #{v} < #{max_expr}; #{v} += #{step_expr}) #{body}',
	              dat: {
	                v: _d.v.value,
	                min_expr: this.expr(_d.min_expr),
	                max_expr: this.expr(_d.max_expr),
	                step_expr: _d.step_expr ? this.expr(_d.step_expr) : '1',
	                body: this.block(_d.body)
	              }
	            };
	          } else if (node.is('return')) {
	            t = {
	              tmpl: 'return #{args}',
	              dat: { args: this.expr(_d.args, ', ') }
	            };
	          } else if (node.is(['break', 'continue'])) {
	            t = {
	              tmpl: '#{word}',
	              dat: { word: node.value }
	            };
	          } else if (node.is('class')) {
	            t = {
	              tmpl: 'class #{name}#{_extends} #{body}',
	              dat: {
	                name: _d.id.value,
	                _extends: _d._extends ? ' extends ' + this.expr(_d._extends, ', ') : '',
	                body: this.block(_d.body)
	              }
	            };
	          }
	
	          str = _.template(t.tmpl)(t.dat);
	        }
	
	        return this.ln(this.indent(str));
	      }
	    }]);
	
	    return StatementTemplates;
	  }(superclass);
	});

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(ExpressionTemplates, _superclass);
	
	    function ExpressionTemplates() {
	      _classCallCheck(this, ExpressionTemplates);
	
	      return _possibleConstructorReturn(this, (ExpressionTemplates.__proto__ || Object.getPrototypeOf(ExpressionTemplates)).apply(this, arguments));
	    }
	
	    _createClass(ExpressionTemplates, [{
	      key: 'expr_template',
	      value: function expr_template(node, separator) {
	        var str = '';
	
	        if (_.isArray(node)) {
	          var a = [];
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;
	
	          try {
	            for (var _iterator = node[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var n = _step.value;
	
	              a.push(this.expr(n));
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }
	
	          str = a.join(separator || '');
	        } else {
	          var d = node && node.data || {};
	          var t = node ? this.template(node, d) : { tmpl: 'undefined', dat: {} };
	          str = _.template(t.tmpl)(t.dat);
	        }
	
	        return str;
	      }
	    }]);
	
	    return ExpressionTemplates;
	  }(superclass);
	});

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(PrimitiveTemplates, _superclass);
	
	    function PrimitiveTemplates() {
	      _classCallCheck(this, PrimitiveTemplates);
	
	      return _possibleConstructorReturn(this, (PrimitiveTemplates.__proto__ || Object.getPrototypeOf(PrimitiveTemplates)).apply(this, arguments));
	    }
	
	    _createClass(PrimitiveTemplates, [{
	      key: 'string_template',
	      value: function string_template(node, d) {
	        return {
	          tmpl: '#{value}',
	          dat: { value: this.str(node.value) }
	        };
	      }
	    }]);
	
	    return PrimitiveTemplates;
	  }(superclass);
	});

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(OperatorTemplates, _superclass);
	
	    function OperatorTemplates() {
	      _classCallCheck(this, OperatorTemplates);
	
	      return _possibleConstructorReturn(this, (OperatorTemplates.__proto__ || Object.getPrototypeOf(OperatorTemplates)).apply(this, arguments));
	    }
	
	    _createClass(OperatorTemplates, [{
	      key: 'operator_template',
	      value: function operator_template(node, d) {
	        return {
	          tmpl: '#{left} #{op} #{right}',
	          dat: {
	            op: node.value,
	            left: this.expr_template(d.left),
	            right: this.expr_template(d.right)
	          }
	        };
	      }
	    }]);
	
	    return OperatorTemplates;
	  }(superclass);
	});

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(IdTemplates, _superclass);
	
	    function IdTemplates() {
	      _classCallCheck(this, IdTemplates);
	
	      return _possibleConstructorReturn(this, (IdTemplates.__proto__ || Object.getPrototypeOf(IdTemplates)).apply(this, arguments));
	    }
	
	    _createClass(IdTemplates, [{
	      key: 'node_template',
	      value: function node_template(node, d) {
	        return {
	          tmpl: '#{node}',
	          dat: { node: node }
	        };
	      }
	    }, {
	      key: 'id_template',
	      value: function id_template(node, d) {
	        return {
	          tmpl: '#{field}#{value}#{fields}#{assign}',
	          dat: {
	            field: node._field ? '.' : '',
	            value: node.value,
	            fields: d.fields ? this.expr_template(d.fields, '') : '',
	            assign: d.assign ? ' = ' + this.expr_template(d.assign, '') : ''
	          }
	        };
	      }
	    }, {
	      key: 'value_template',
	      value: function value_template(node, d) {
	        return {
	          tmpl: '#{value}',
	          dat: { value: node.value }
	        };
	      }
	    }]);
	
	    return IdTemplates;
	  }(superclass);
	});

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(ClassTemplates, _superclass);
	
	    function ClassTemplates() {
	      _classCallCheck(this, ClassTemplates);
	
	      return _possibleConstructorReturn(this, (ClassTemplates.__proto__ || Object.getPrototypeOf(ClassTemplates)).apply(this, arguments));
	    }
	
	    _createClass(ClassTemplates, [{
	      key: 'this_template',
	      value: function this_template(node, d) {
	        return {
	          tmpl: 'this#{dot}#{field}#{fields}',
	          dat: {
	            dot: node.is('this_field') ? '.' : '',
	            field: node.is('this_field') ? node.value : '',
	            fields: d.fields ? this.expr_template(d.fields, '') : ''
	          }
	        };
	      }
	    }, {
	      key: 'new_template',
	      value: function new_template(node, d) {
	        return {
	          tmpl: 'new #{id}(#{args})',
	          dat: {
	            id: d.id.value,
	            args: this.expr_template(d.args, ', ')
	          }
	        };
	      }
	    }]);
	
	    return ClassTemplates;
	  }(superclass);
	});

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(FnTemplates, _superclass);
	
	    function FnTemplates() {
	      _classCallCheck(this, FnTemplates);
	
	      return _possibleConstructorReturn(this, (FnTemplates.__proto__ || Object.getPrototypeOf(FnTemplates)).apply(this, arguments));
	    }
	
	    _createClass(FnTemplates, [{
	      key: 'fn_def',
	      value: function fn_def(args, body, in_class) {
	        return _.template('#{fn}(#{args}) #{body}')({
	          fn: !in_class ? 'function ' : '',
	          args: this.expr_template(args, ', '),
	          body: this.block_template(body)
	        });
	      }
	    }, {
	      key: 'fn_call_template',
	      value: function fn_call_template(node, d) {
	        var t = {};
	        if (node) {
	          var _d = node.data || {};
	          t = {
	            tmpl: '#{field}#{fn}(#{args})',
	            dat: {
	              field: node._field ? '.' : '',
	              fn: node.value,
	              args: this.expr_template(_d.args, ', ')
	            }
	          };
	        }
	        return t;
	      }
	    }, {
	      key: 'fn_assign_template',
	      value: function fn_assign_template(node, d) {
	        return {
	          tmpl: '#{fn}',
	          dat: { fn: this.fn_def(d.args, d.body) }
	        };
	      }
	    }]);
	
	    return FnTemplates;
	  }(superclass);
	});

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(ArrayTemplates, _superclass);
	
	    function ArrayTemplates() {
	      _classCallCheck(this, ArrayTemplates);
	
	      return _possibleConstructorReturn(this, (ArrayTemplates.__proto__ || Object.getPrototypeOf(ArrayTemplates)).apply(this, arguments));
	    }
	
	    _createClass(ArrayTemplates, [{
	      key: 'array_template',
	      value: function array_template(node, d) {
	        return {
	          tmpl: '[#{args}]#{fields}',
	          dat: {
	            args: this.expr_template(d.args, ', '),
	            fields: d.fields ? this.expr_template(d.fields, '') : ''
	          }
	        };
	      }
	    }]);
	
	    return ArrayTemplates;
	  }(superclass);
	});

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(DictTemplates, _superclass);
	
	    function DictTemplates() {
	      _classCallCheck(this, DictTemplates);
	
	      return _possibleConstructorReturn(this, (DictTemplates.__proto__ || Object.getPrototypeOf(DictTemplates)).apply(this, arguments));
	    }
	
	    _createClass(DictTemplates, [{
	      key: 'dict_template',
	      value: function dict_template(node, d) {
	        var _this2 = this;
	
	        var def = _.map(d.def, function (f) {
	          return _.template('#{value}: #{expr}')({ value: f.value, expr: _this2.expr_template(f.data.expr) });
	        });
	        return {
	          tmpl: '{#{def}}#{fields}',
	          dat: {
	            def: this.expr_template(def, ', '),
	            fields: d.fields ? this.expr_template(d.fields, '') : ''
	          }
	        };
	      }
	    }]);
	
	    return DictTemplates;
	  }(superclass);
	});

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = Mixin(function (superclass) {
	  return function (_superclass) {
	    _inherits(AssignTemplates, _superclass);
	
	    function AssignTemplates() {
	      _classCallCheck(this, AssignTemplates);
	
	      return _possibleConstructorReturn(this, (AssignTemplates.__proto__ || Object.getPrototypeOf(AssignTemplates)).apply(this, arguments));
	    }
	
	    _createClass(AssignTemplates, [{
	      key: 'assign_template',
	      value: function assign_template(node) {
	        var t = {};
	        if (node) {
	          var d = node.data || {};
	
	          var id = this.expr_template(d.id);
	          var _let = node._let ? 'let ' : '';
	          var expr = void 0;
	          var op = void 0;
	
	          if (node.is('assign')) {
	            op = ' ' + node.value + ' ';
	            expr = this.expr_template(d.expr);
	          } else if (node.is('fn_assign')) {
	            op = !node._in_class || node._fn_level > 0 ? ' = ' : ' ';
	            expr = this.fn_def(d.args, d.body, node._in_class && node._fn_level === 0);
	          }
	
	          t = {
	            tmpl: '#{_let}#{id}#{op}#{expr}',
	            dat: { _let: _let, id: id, op: op, expr: expr }
	          };
	        }
	        return t;
	      }
	    }]);
	
	    return AssignTemplates;
	  }(superclass);
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Memory = exports.data_type_size = exports.data_type_fns = exports.data_type_sizes = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _hexy = __webpack_require__(62);
	
	var _hexy2 = _interopRequireDefault(_hexy);
	
	var _globals = __webpack_require__(12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var data_type_sizes = exports.data_type_sizes = {
	  i8: 1,
	  s8: 1,
	  i16: 2,
	  s16: 2,
	  i32: 4,
	  s32: 4,
	  f32: 4,
	  str: 64
	};
	
	var data_type_fns = exports.data_type_fns = {
	  i8: 'Uint8',
	  s8: 'Int8',
	  i16: 'Uint16',
	  s16: 'Int16',
	  i32: 'Uint32',
	  s32: 'Int32',
	  f32: 'Float32'
	};
	
	var data_type_size = exports.data_type_size = function data_type_size(type) {
	  return _.isNumber(type) ? type : data_type_sizes[type];
	};
	
	var Memory = exports.Memory = function () {
	  function Memory(main) {
	    _classCallCheck(this, Memory);
	
	    this._size = main.defaults('memory.size');
	    this._top = 0;
	    this._bottom = this._top + this._size - 1;
	
	    this._buffer = new ArrayBuffer(this._size);
	
	    this._data = new Uint8Array(this._buffer);
	
	    this._view = new DataView(this._buffer);
	  }
	
	  _createClass(Memory, [{
	    key: 'tick',
	    value: function tick(t) {}
	  }, {
	    key: 'reset',
	    value: function reset() {
	      return this.clear();
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this._view = null;
	      this._data = null;
	      this._buffer = null;
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      this.fill(0, this._top, this._size);
	      return this;
	    }
	  }, {
	    key: 'chk_bounds',
	    value: function chk_bounds(addr) {
	      var sz = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
	
	      if (addr < this._top || addr + sz > this._bottom) {
	        this.hlt(0x08);
	      }
	      return this;
	    }
	  }, {
	    key: 'db',
	    value: function db(type, addr) {
	      var sz = data_type_sizes[type];
	      var fn = this._view['set' + data_type_fns[type]];
	
	      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        args[_key - 2] = arguments[_key];
	      }
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var a = _step.value;
	
	          fn.call(this._view, addr, a);
	          addr += sz;
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return addr;
	    }
	  }, {
	    key: 'db_bc',
	    value: function db_bc(type, addr) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      this.chk_bounds(addr, args.length * data_type_sizes[type]);
	      this.db.apply(this, [type, addr].concat(args));
	    }
	  }, {
	    key: 'ld',
	    value: function ld(type, addr) {
	      return this._view['get' + data_type_fns[type]](addr, _vm.littleEndian);
	    }
	  }, {
	    key: 'ldb',
	    value: function ldb(addr) {
	      return this.ld('i8', addr);
	    }
	  }, {
	    key: 'ldw',
	    value: function ldw(addr) {
	      return this.ld('i16', addr);
	    }
	  }, {
	    key: 'ldd',
	    value: function ldd(addr) {
	      return this.ld('i32', addr);
	    }
	  }, {
	    key: 'ldf',
	    value: function ldf(addr) {
	      return this.ld('f32', addr);
	    }
	  }, {
	    key: 'ld_bc',
	    value: function ld_bc(type, addr) {
	      this.chk_bounds(addr, data_type_sizes[type]);
	      return this.ld(type, addr);
	    }
	  }, {
	    key: 'st',
	    value: function st(type, addr, value) {
	      this._view['set' + data_type_fns[type]](addr, value, _vm.littleEndian);
	    }
	  }, {
	    key: 'stb',
	    value: function stb(addr, value) {
	      this.st('i8', addr, value);
	    }
	  }, {
	    key: 'stw',
	    value: function stw(addr, value) {
	      this.st('i16', addr, value);
	    }
	  }, {
	    key: 'std',
	    value: function std(addr, value) {
	      this.st('i32', addr, value);
	    }
	  }, {
	    key: 'stf',
	    value: function stf(addr, value) {
	      this.st('f32', addr, value);
	    }
	  }, {
	    key: 'st_bc',
	    value: function st_bc(type, addr, value) {
	      this.chk_bounds(addr, data_type_sizes[type]);
	      this.st(type, addr, value);
	    }
	  }, {
	    key: 'ldl',
	    value: function ldl(addr, size) {
	      return this._data.slice(addr, addr + size - 1);
	    }
	  }, {
	    key: 'ldl_bc',
	    value: function ldl_bc(addr, size) {
	      this.chk_bounds(addr, size);
	      return this.ldl(addr, size);
	    }
	  }, {
	    key: 'lds',
	    value: function lds(addr, size) {
	      if (_.isString(addr)) {
	        // assembler will use lds("")
	        return addr;
	      }
	
	      var s = '';
	      size = size || data_type_sizes.str;
	      var bottom = Math.min(addr + size - 1, this._bottom);
	      var mem = this._data;
	      while (addr <= bottom) {
	        var c = mem[addr++];
	        if (c === 0) {
	          break;
	        } else {
	          s += String.fromCharCode(c);
	        }
	      }
	      return s;
	    }
	  }, {
	    key: 'lds_bc',
	    value: function lds_bc(addr, size) {
	      this.chk_bounds(addr, Math.min(size || 0, data_type_sizes.str));
	      return this.lds(addr, size);
	    }
	  }, {
	    key: 'stl',
	    value: function stl(addr, value, size) {
	      this._data.set(value.subarray(0, size || value.byteLength), addr);
	    }
	  }, {
	    key: 'stl_bc',
	    value: function stl_bc(addr, value, size) {
	      this.chk_bounds(addr, Math.min(size || 0, value.byteLength));
	      this.stl(addr, value, size);
	    }
	  }, {
	    key: 'sts',
	    value: function sts(addr, str, size) {
	      size = size || data_type_sizes.str - 1;
	      var a = _.map(str.split(''), function (i) {
	        return i.charCodeAt(0);
	      });
	      a.length = Math.min(size, a.length);
	      this.fill(0, addr, size);
	      this._data.set(a, addr);
	    }
	  }, {
	    key: 'sts_bc',
	    value: function sts_bc(addr, str, size) {
	      this.chk_bounds(addr, Math.min(size, data_type_sizes.str));
	      this.sts(addr, str, size);
	    }
	  }, {
	    key: 'fill',
	    value: function fill(value, top, size) {
	      this._data.fill(value || 0, top, top + size);
	    }
	  }, {
	    key: 'fill_bc',
	    value: function fill_bc(value, top, size) {
	      this.chk_bounds(top, size);
	      this.fill(value, top, size);
	    }
	  }, {
	    key: 'copy',
	    value: function copy(src, tgt, size) {
	      this._data.copyWithin(tgt, src, src + size - 1);
	    }
	  }, {
	    key: 'copy_bc',
	    value: function copy_bc(src, tgt, size) {
	      this.chk_bounds(src, size);
	      this.chk_bounds(tgt, size);
	      this.copy(src, tgt, size);
	    }
	  }, {
	    key: 'read',
	    value: function read(addr) {
	      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'i8';
	
	      var value = void 0;
	      if (_.isNumber(type)) {
	        value = this._data.slice(addr, addr + type - 1);
	      } else if (type === 'str') {
	        value = this.lds(addr);
	      } else {
	        value = this.ld(type, addr);
	      }
	      return value;
	    }
	  }, {
	    key: 'write',
	    value: function write(value, addr) {
	      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'i8';
	
	      var sz = void 0;
	      if (_.isNumber(type)) {
	        this._data.set(value.subarray(0, type - 1), addr);
	        sz = type;
	      } else if (type === 'str') {
	        this.sts(addr, value);
	        sz = data_type_sizes[type];
	      } else {
	        this.st(type, addr, value);
	        sz = data_type_sizes[type];
	      }
	      return addr + sz;
	    }
	  }, {
	    key: 'from_string',
	    value: function from_string(addr, str) {
	      var data = this._data;
	      var w = str.length;
	
	      var ti = addr;
	      for (var x = 0; x < w; x++) {
	        data[ti++] = str.charCodeAt(x);
	      }
	
	      return ti;
	    }
	  }, {
	    key: 'from_string_mask',
	    value: function from_string_mask(addr, str, mask) {
	      var data = this._data;
	      var w = str.length;
	
	      var ti = addr;
	      for (var x = 0; x < w; x++) {
	        data[ti++] = mask[str[x]];
	      }
	
	      return ti;
	    }
	  }, {
	    key: 'to_string',
	    value: function to_string(addr, size) {
	      var data = this._data;
	      var s = '';
	
	      var ti = addr;
	      for (var y = 0; y < size; y++) {
	        s += String.fromCharCode(data[ti++]);
	      }
	
	      return s;
	    }
	  }, {
	    key: 'to_string_mask',
	    value: function to_string_mask(addr, size, mask) {
	      var data = this._data;
	      var s = '';
	
	      var ti = addr;
	      for (var y = 0; y < size; y++) {
	        s += String.fromCharCode(mask[data[ti++]]);
	      }
	
	      return s;
	    }
	  }, {
	    key: 'from_array',
	    value: function from_array(addr, arr) {
	      var h = arr.length;
	
	      var ti = addr;
	      for (var y = 0; y < h; y++) {
	        ti = this.from_string(ti, arr[y]);
	      }
	
	      return ti;
	    }
	  }, {
	    key: 'from_array_mask',
	    value: function from_array_mask(addr, arr) {
	      var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	      var h = arr.length;
	
	      var ti = addr;
	      for (var y = 0; y < h; y++) {
	        ti = this.from_string_mask(ti, arr[y], mask);
	      }
	
	      return ti;
	    }
	  }, {
	    key: 'to_array',
	    value: function to_array(addr, w, h) {
	      var arr = [];
	
	      for (var y = 0; y < h; y++) {
	        arr.push(this.to_string(addr + y * w, w));
	      }
	
	      return arr;
	    }
	  }, {
	    key: 'to_array_mask',
	    value: function to_array_mask(addr, w, h, mask) {
	      var arr = [];
	
	      for (var y = 0; y < h; y++) {
	        arr.push(this.to_string_mask(addr + y * w, w, mask));
	      }
	
	      return arr;
	    }
	  }, {
	    key: 'dump',
	    value: function dump() {
	      var addr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1024;
	
	      console.log('Dumping', size, ' bytes from memory at ', (0, _globals.hex)(addr));
	      console.log(_hexy2.default.hexy(this._buffer, { offset: addr, length: size, width: 16, caps: 'upper', indent: 2 }));
	    }
	  }, {
	    key: 'main',
	    get: function get() {
	      return this._main;
	    }
	  }, {
	    key: 'buffer',
	    get: function get() {
	      return this._buffer;
	    }
	  }, {
	    key: 'data',
	    get: function get() {
	      return this._data;
	    }
	  }, {
	    key: 'view',
	    get: function get() {
	      return this._view;
	    }
	  }, {
	    key: 'top',
	    get: function get() {
	      return this._top;
	    }
	  }, {
	    key: 'bottom',
	    get: function get() {
	      return this._bottom;
	    }
	  }, {
	    key: 'size',
	    get: function get() {
	      return this._size;
	    }
	  }]);

	  return Memory;
	}();

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = require("hexy");

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _hexy = __webpack_require__(62);
	
	var _hexy2 = _interopRequireDefault(_hexy);
	
	var _prettyBytes = __webpack_require__(64);
	
	var _prettyBytes2 = _interopRequireDefault(_prettyBytes);
	
	var _memory = __webpack_require__(61);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MemoryManager = function () {
	  function MemoryManager(main) {
	    _classCallCheck(this, MemoryManager);
	
	    this._main = main;
	
	    this._collect_delay = main.defaults('memory_manager.collect_delay');
	
	    this.reset();
	  }
	
	  _createClass(MemoryManager, [{
	    key: 'reset',
	    value: function reset() {
	      this._blocks = [];
	      this._last = 0;
	      return this.collect();
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.collect();
	      this._blocks = [];
	      this._last = 0;
	    }
	  }, {
	    key: 'tick',
	    value: function tick(t) {
	      if (t - this._last >= this._collect_delay) {
	        this.collect();
	        this._last = t;
	      }
	    }
	  }, {
	    key: '_alloc',
	    value: function _alloc(type, count) {
	      count = count || 1;
	      var size = (0, _memory.data_type_size)(type) * count;
	      var n = 0;
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = this._blocks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var b = _step.value;
	
	          if (b.bottom > n) {
	            n = b.bottom;
	          }
	
	          if (!b.used && b.size >= size) {
	            if (b.size === size) {
	              b.used = true;
	              return b.top;
	            }
	            var ob = b.bottom;
	            b.bottom = b.top + size - 1;
	            b.size = size;
	            b.count = count;
	            b.used = true;
	
	            this._blocks.push({ top: b.bottom + 1, bottom: ob, size: ob - (b.bottom + 1), count: count, type: type, used: false });
	
	            return b.top;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      if (n + size > this.avail_mem) {
	        _vm.hlt();
	        return 0;
	      }
	
	      var addr = n + 1;
	
	      this._blocks.push({ top: addr, bottom: addr + size - 1, size: size, count: count, type: type, used: true });
	
	      _vm.fill(0, addr, size);
	
	      return addr;
	    }
	  }, {
	    key: 'alloc',
	    value: function alloc(type, count) {
	      var addr = this._alloc(type, count);
	
	      for (var _len = arguments.length, value = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        value[_key - 2] = arguments[_key];
	      }
	
	      if (value) {
	        var size = (0, _memory.data_type_size)(type) * count;
	        var a = addr;
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;
	
	        try {
	          for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var v = _step2.value;
	
	            _vm.write(v, a, type);
	            a += size;
	          }
	        } catch (err) {
	          _didIteratorError2 = true;
	          _iteratorError2 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	              _iterator2.return();
	            }
	          } finally {
	            if (_didIteratorError2) {
	              throw _iteratorError2;
	            }
	          }
	        }
	      }
	
	      return addr;
	    }
	  }, {
	    key: 'free',
	    value: function free(addr) {
	      var b = this.block(addr);
	      if (b) {
	        b.used = false;
	      }
	    }
	  }, {
	    key: 'block',
	    value: function block(addr) {
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;
	
	      try {
	        for (var _iterator3 = this._blocks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var b = _step3.value;
	
	          if (b.top === addr) {
	            return b;
	          }
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	
	      return null;
	    }
	  }, {
	    key: 'type',
	    value: function type(addr) {
	      var b = this.block(addr);
	      return b && b.used ? b.type : null;
	    }
	  }, {
	    key: 'size',
	    value: function size(addr) {
	      var b = this.block(addr);
	      return b && b.used ? b.size : -1;
	    }
	  }, {
	    key: 'collect',
	    value: function collect() {
	      var n = [];
	      var _iteratorNormalCompletion4 = true;
	      var _didIteratorError4 = false;
	      var _iteratorError4 = undefined;
	
	      try {
	        for (var _iterator4 = this._blocks[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	          var b = _step4.value;
	
	          if (!b.used) {
	            n.push(b);
	          }
	        }
	      } catch (err) {
	        _didIteratorError4 = true;
	        _iteratorError4 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion4 && _iterator4.return) {
	            _iterator4.return();
	          }
	        } finally {
	          if (_didIteratorError4) {
	            throw _iteratorError4;
	          }
	        }
	      }
	
	      this._blocks = n;
	      return this;
	    }
	  }, {
	    key: 'dump',
	    value: function dump() {
	      console.log('memory _blocks dump...', 'avail_mem:', (0, _prettyBytes2.default)(this.avail_mem), 'used:', (0, _prettyBytes2.default)(this.used_mem), 'free:', (0, _prettyBytes2.default)(this.free_mem));
	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;
	
	      try {
	        for (var _iterator5 = this._blocks[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var b = _step5.value;
	
	          console.log('');
	          console.log('offset:', _vm.hex(b.top, 32), 'size:', this.size(b.top), 'type:', this.type(b.top));
	          console.log(_hexy2.default.hexy(_vm.mem_buffer, { offset: b.top, length: Math.min(255, b.size), width: 16, caps: 'upper', indent: 2 }));
	        }
	      } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion5 && _iterator5.return) {
	            _iterator5.return();
	          }
	        } finally {
	          if (_didIteratorError5) {
	            throw _iteratorError5;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'main',
	    get: function get() {
	      return this._main;
	    }
	  }, {
	    key: 'memory',
	    get: function get() {
	      return this._main.memory;
	    }
	  }, {
	    key: 'blocks',
	    get: function get() {
	      return this._blocks;
	    }
	  }, {
	    key: 'last',
	    get: function get() {
	      return this._last;
	    }
	  }, {
	    key: 'collect_delay',
	    get: function get() {
	      return this._collect_delay;
	    }
	  }, {
	    key: 'avail_mem',
	    get: function get() {
	      return this._main.size;
	    }
	  }, {
	    key: 'used_mem',
	    get: function get() {
	      var size = 0;
	      var _iteratorNormalCompletion6 = true;
	      var _didIteratorError6 = false;
	      var _iteratorError6 = undefined;
	
	      try {
	        for (var _iterator6 = this._blocks[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	          var b = _step6.value;
	
	          if (b.used) {
	            size += b.size;
	          }
	        }
	      } catch (err) {
	        _didIteratorError6 = true;
	        _iteratorError6 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion6 && _iterator6.return) {
	            _iterator6.return();
	          }
	        } finally {
	          if (_didIteratorError6) {
	            throw _iteratorError6;
	          }
	        }
	      }
	
	      return size;
	    }
	  }, {
	    key: 'free_mem',
	    get: function get() {
	      return this.avail_mem - this.used_mem;
	    }
	  }]);
	
	  return MemoryManager;
	}();
	
	exports.default = MemoryManager;

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = require("pretty-bytes");

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _globals = __webpack_require__(12);
	
	var _memory = __webpack_require__(61);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var StackEntry = function () {
	  function StackEntry(stack) {
	    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 255;
	    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _globals.defaults.type;
	    var size = arguments[4];
	    var rolling = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
	
	    _classCallCheck(this, StackEntry);
	
	    this._stack = stack;
	
	    this._max = max;
	    this._size = size || (0, _memory.data_type_size)(type);
	    this._top = offset;
	    this._bottom = this._top + this._size - 1;
	    this._type = type;
	    this._rolling = rolling || false;
	
	    this.list[this._top] = this;
	  }
	
	  _createClass(StackEntry, [{
	    key: 'reset',
	    value: function reset() {
	      this._ptr = this._top;
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.list[this._top] = undefined;
	    }
	  }, {
	    key: 'push',
	    value: function push() {
	      var sz = this._size;
	      var t = this._type;
	      var top = this._top;
	      var bottom = this._bottom;
	      var rolling = this._rolling;
	
	      for (var _len = arguments.length, value = Array(_len), _key = 0; _key < _len; _key++) {
	        value[_key] = arguments[_key];
	      }
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var v = _step.value;
	
	          if (rolling && this._ptr >= bottom) {
	            this.copy(top + sz, top, bottom - sz);
	            this._ptr -= sz;
	          }
	          if (this._ptr + sz < bottom) {
	            this.write(v, this._ptr, t);
	            this._ptr += sz;
	          } else {
	            (0, _globals.runtime_error)(0x03);
	            break;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'pop',
	    value: function pop() {
	      if (this._ptr > this._top) {
	        this._ptr -= this._size;
	        return this.read(this._ptr, this._type);
	      } else {
	        (0, _globals.runtime_error)(0x02);
	        return 0;
	      }
	    }
	  }, {
	    key: 'main',
	    get: function get() {
	      return this._stack.main;
	    }
	  }, {
	    key: 'stack',
	    get: function get() {
	      return this._stack;
	    }
	  }, {
	    key: 'list',
	    get: function get() {
	      return this._stack.list;
	    }
	  }, {
	    key: 'top',
	    get: function get() {
	      return this._top;
	    }
	  }, {
	    key: 'bottom',
	    get: function get() {
	      return this._bottom;
	    }
	  }, {
	    key: 'size',
	    get: function get() {
	      return this._size;
	    }
	  }, {
	    key: 'max',
	    get: function get() {
	      return this._max;
	    }
	  }, {
	    key: 'ptr',
	    get: function get() {
	      return this._ptr;
	    }
	  }, {
	    key: 'total_size',
	    get: function get() {
	      return this._max * this._size;
	    }
	  }, {
	    key: 'used',
	    get: function get() {
	      return Math.trunc((this._ptr - this._top) / this._size);
	    }
	  }, {
	    key: 'avail',
	    get: function get() {
	      return this.total_size - this.used;
	    }
	  }]);
	
	  return StackEntry;
	}();
	
	var Stack = function () {
	  function Stack(main) {
	    _classCallCheck(this, Stack);
	
	    this._main = main;
	
	    this.reset();
	  }
	
	  _createClass(Stack, [{
	    key: 'reset',
	    value: function reset() {
	      this._list = {};
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this._list = {};
	    }
	  }, {
	    key: 'new',
	    value: function _new(offset, max, type, size, rolling) {
	      var s = this._list[offset];
	      if (!s) {
	        return new (Function.prototype.bind.apply(StackEntry, [null].concat([this], Array.prototype.slice.call(arguments))))();
	      } else {
	        (0, _globals.runtime_error)(0x04);
	        return null;
	      }
	    }
	  }, {
	    key: 'push',
	    value: function push(offset) {
	      var s = this._list[offset];
	      if (s) {
	        for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	          values[_key2 - 1] = arguments[_key2];
	        }
	
	        return s.push.apply(s, values);
	      } else {
	        (0, _globals.runtime_error)(0x04);
	        return 0;
	      }
	    }
	  }, {
	    key: 'pop',
	    value: function pop(offset) {
	      var s = this._list[offset];
	      if (s) {
	        return s.pop();
	      } else {
	        (0, _globals.runtime_error)(0x04);
	        return 0;
	      }
	    }
	  }, {
	    key: 'used',
	    value: function used(offset) {
	      var s = this._list[offset];
	      if (s) {
	        return s.used;
	      } else {
	        (0, _globals.runtime_error)(0x04);
	        return 0;
	      }
	    }
	  }, {
	    key: 'max',
	    value: function max(offset) {
	      var s = this._list[offset];
	      if (s) {
	        return s.max;
	      } else {
	        (0, _globals.runtime_error)(0x04);
	        return 0;
	      }
	    }
	  }, {
	    key: 'size',
	    value: function size(offset) {
	      var s = this._list[offset];
	      if (s) {
	        return s.size;
	      } else {
	        (0, _globals.runtime_error)(0x04);
	        return 0;
	      }
	    }
	  }, {
	    key: 'type',
	    value: function type(offset) {
	      var s = this._list[offset];
	      if (s) {
	        return s.type;
	      } else {
	        (0, _globals.runtime_error)(0x04);
	        return 0;
	      }
	    }
	  }, {
	    key: 'list',
	    get: function get() {
	      return this._list;
	    }
	  }]);
	
	  return Stack;
	}();
	
	exports.default = Stack;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _globals = __webpack_require__(12);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _INT_RUNNING = 1;
	var _INT_PAUSED = 2;
	
	var Interrupt = function () {
	  function Interrupt(main) {
	    _classCallCheck(this, Interrupt);
	
	    this._list = {};
	    this._main = main;
	  }
	
	  _createClass(Interrupt, [{
	    key: 'reset',
	    value: function reset() {
	      this.stop_all();
	      return this;
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.reset();
	    }
	  }, {
	    key: 'find',
	    value: function find(name) {
	      return this._list[name];
	    }
	  }, {
	    key: 'create',
	    value: function create(name, fn) {
	      var ms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
	
	      if (!this.find(name)) {
	        this._list[name] = { name: name, status: _INT_RUNNING, ms: ms, fn: fn, last: 0 };
	      } else {
	        (0, _globals.runtime_error)(0x06);
	      }
	      return this;
	    }
	  }, {
	    key: 'resume',
	    value: function resume(name) {
	      if (this.find(name)) {
	        this._list[name].status = _INT_RUNNING;
	        this._list[name].last = performance.now();
	      } else {
	        (0, _globals.runtime_error)(0x07);
	      }
	      return this;
	    }
	  }, {
	    key: 'pause',
	    value: function pause(name) {
	      if (this.find(name)) {
	        this._list[name].status = _INT_PAUSED;
	      } else {
	        (0, _globals.runtime_error)(0x07);
	      }
	      return this;
	    }
	  }, {
	    key: 'stop',
	    value: function stop(name) {
	      if (this.find(name)) {
	        delete this._list[name];
	      } else {
	        (0, _globals.runtime_error)(0x07);
	      }
	      return this;
	    }
	  }, {
	    key: 'stop_all',
	    value: function stop_all() {
	      for (var k in this._list) {
	        this.stop(k);
	      }
	      this._list = {};
	      return this;
	    }
	  }, {
	    key: 'tick',
	    value: function tick(t) {
	      for (var k in this._list) {
	        var i = this._list[k];
	        if (i.status === _INT_RUNNING) {
	          var delay = t - i.last;
	          if (delay >= i.ms) {
	            i.fn.apply(this, [delay - i.ms]);
	            i.last = t;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'main',
	    get: function get() {
	      return this._main;
	    }
	  }, {
	    key: 'memory',
	    get: function get() {
	      return this._main.memory;
	    }
	  }]);
	
	  return Interrupt;
	}();
	
	exports.default = Interrupt;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _rainbow = __webpack_require__(68);
	
	var _rainbow2 = _interopRequireDefault(_rainbow);
	
	var _fonzo = __webpack_require__(70);
	
	var _fonzo2 = _interopRequireDefault(_fonzo);
	
	var _orwell = __webpack_require__(71);
	
	var _orwell2 = _interopRequireDefault(_orwell);
	
	var _beagle = __webpack_require__(72);
	
	var _beagle2 = _interopRequireDefault(_beagle);
	
	var _violet = __webpack_require__(73);
	
	var _violet2 = _interopRequireDefault(_violet);
	
	var _overlays = __webpack_require__(74);
	
	var _chip = __webpack_require__(69);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Guideo = function (_Chip) {
	  _inherits(Guideo, _Chip);
	
	  function Guideo(main) {
	    _classCallCheck(this, Guideo);
	
	    var _this = _possibleConstructorReturn(this, (Guideo.__proto__ || Object.getPrototypeOf(Guideo)).call(this, main));
	
	    _this.init('guideo', ['width', 'height', 'scale']);
	
	    _this._renderer = new PIXI.autoDetectRenderer(_this._width * _this._scale, _this._height * _this._scale, {});
	    _this._renderer.view.style.position = 'absolute';
	    _this._renderer.view.style.cursor = 'none';
	    _this._renderer.view.id = 'guideo';
	    document.body.appendChild(_this._renderer.view);
	
	    _this._stage = new PIXI.Container();
	
	    _this._onResize = _this.resize.bind(_this);
	    _this.on('resize', _this._onResize);
	    return _this;
	  }
	
	  _createClass(Guideo, [{
	    key: 'destroy',
	    value: function destroy() {
	      this.off('resize', this._onResize);
	
	      this._rainbow.destroy();
	      this._fonzo.destroy();
	      this._orwell.destroy();
	      this._beagle.destroy();
	      this._violet.destroy();
	      this._overlays.destroy();
	
	      _get(Guideo.prototype.__proto__ || Object.getPrototypeOf(Guideo.prototype), 'destroy', this).call(this);
	    }
	  }, {
	    key: 'createChips',
	    value: function createChips() {
	      var main = this._main;
	
	      this._rainbow = new _rainbow2.default(main);
	      this._fonzo = new _fonzo2.default(main);
	      this._orwell = new _orwell2.default(main);
	      this._beagle = new _beagle2.default(main);
	      this._violet = new _violet2.default(main);
	
	      this._overlays = new _overlays.Overlays(main, {
	        screen: { scale: this._scale },
	        scanlines: {},
	        scanline: {},
	        rgb: {},
	        noises: {},
	        crt: {},
	        monitor: {}
	      });
	
	      this._screen = this._overlays.screen;
	
	      this.context.clearRect(0, 0, this._width, this._height);
	      this._imageData = this.context.getImageData(0, 0, this._width, this._height);
	      this._pixels = new Uint32Array(this._imageData.data.buffer);
	
	      this.reset();
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      _get(Guideo.prototype.__proto__ || Object.getPrototypeOf(Guideo.prototype), 'reset', this).call(this);
	
	      this._force_redraw = false;
	      this._force_flip = false;
	
	      this._rainbow.reset();
	      this._fonzo.reset();
	      this._orwell.reset();
	      this._beagle.reset();
	      this._violet.reset();
	      this._overlays.reset();
	
	      this.clear();
	
	      return this.resize();
	    }
	  }, {
	    key: 'tick',
	    value: function tick(t) {
	      this._rainbow.tick(t);
	      this._fonzo.tick(t);
	      this._orwell.tick(t);
	      this._beagle.tick(t);
	      this._violet.tick(t);
	      this._overlays.tick(t);
	
	      if (this._force_redraw) {
	        this.redraw();
	        this._force_redraw = false;
	      }
	    }
	  }, {
	    key: 'redraw',
	    value: function redraw() {
	      if (this._force_flip) {
	        var data = this._data;
	        var size = this._size;
	        var palette = this._rainbow;
	        var pixels = this._pixels;
	
	        for (var i = 0; i < size; i++) {
	          pixels[i] = palette.color(data[i]);
	        }
	
	        this.context.putImageData(this._imageData, 0, 0);
	
	        this.texture.update();
	
	        this.emit('flip');
	
	        this._force_flip = false;
	      }
	
	      this.emit('redraw');
	
	      this._renderer.render(this._stage);
	
	      return this;
	    }
	  }, {
	    key: 'center',
	    value: function center() {
	      this._renderer.view.style.left = window.innerWidth * 0.5 - this._renderer.width * 0.5 + 'px';
	      this._renderer.view.style.top = window.innerHeight * 0.5 - this._renderer.height * 0.5 + 'px';
	      return this;
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {
	      this._overlays.resize();
	      this.center();
	      this.test();
	      return this;
	    }
	  }, {
	    key: 'pixel',
	    value: function pixel(x, y, c) {
	      var data = this._data;
	
	      var i = void 0;
	      if (_.isNumber(c)) {
	        i = this.toIndex(x, y);
	      } else {
	        i = x;
	        c = y;
	      }
	
	      if (data[i] !== c) {
	        data[i] = c || 0;
	      }
	
	      return data[i];
	    }
	  }, {
	    key: 'blit',
	    value: function blit(addr, x, y, w, h) {
	      var mem = this.memory.data;
	      var data = this._data;
	      var top = this._top;
	      var width = this._width;
	      var count = this.rainbow.count;
	
	      var si = addr;
	      for (var by = 0; by < h; by++) {
	        var ti = top + ((y + by) * width + x);
	        for (var bx = 0; bx < w; bx++) {
	          var c = mem[si++];
	          data[ti] = c < count ? c : data[ti];
	          ti++;
	        }
	      }
	
	      return this.update(true);
	    }
	  }, {
	    key: 'blit_mask',
	    value: function blit_mask(addr, x, y, w, h) {
	      var fg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 15;
	      var bg = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : -1;
	
	      var mem = this.memory.data;
	      var data = this._data;
	      var top = this._top;
	      var width = this._width;
	      var count = this.rainbow.count;
	
	      var si = addr;
	      for (var by = 0; by < h; by++) {
	        var ti = top + ((y + by) * width + x);
	        for (var bx = 0; bx < w; bx++) {
	          var c = mem[si++];
	          data[ti] = c < count ? fg : bg === -1 ? data[ti] : bg;
	          ti++;
	        }
	      }
	
	      return this.update(true);
	    }
	  }, {
	    key: 'blit_array',
	    value: function blit_array(arr, x, y) {
	      var mask = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	      var data = this._data;
	      var top = this._top;
	      var width = this._width;
	
	      var w = _.first(arr).length;
	      var h = arr.length;
	
	      for (var by = 0; by < h; by++) {
	        var ti = top + ((by + y) * width + x);
	        for (var bx = 0; bx < w; bx++) {
	          data[ti++] = mask[arr[by]];
	        }
	      }
	    }
	  }, {
	    key: 'copy_rect',
	    value: function copy_rect(x, y, w, h, addr) {
	      var mem = this.memory.data;
	      var data = this._data;
	      var top = this._top;
	      var width = this._width;
	
	      var ti = addr;
	      for (var by = 0; by < h; by++) {
	        var si = top + ((by + y) * width + x);
	        for (var bx = 0; bx < w; bx++) {
	          mem[ti++] = data[si++];
	        }
	      }
	
	      return ti;
	    }
	  }, {
	    key: 'to_array',
	    value: function to_array(x, y, w, h) {
	      var mask = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	
	      var data = this._data;
	      var top = this._top;
	      var width = this._width;
	
	      var arr = [];
	
	      for (var by = 0; by < h; by++) {
	        var ti = top + ((by + y) * width + x);
	        var s = '';
	        for (var bx = 0; bx < w; bx++) {
	          s += mask[data[ti++]];
	        }
	        arr.push(s);
	      }
	
	      return arr;
	    }
	  }, {
	    key: 'toIndex',
	    value: function toIndex(x, y) {
	      return y * this._width + x;
	    }
	  }, {
	    key: 'fromIndex',
	    value: function fromIndex(i) {
	      var y = Math.min(Math.trunc(i / this._width), this._height - 1);
	      var x = i - y;
	      return { x: x, y: y };
	    }
	  }, {
	    key: 'scroll',
	    value: function scroll(x, y) {
	      var lw = y * this._width;
	      var s = lw;
	      var e = this._size - lw;
	      this._data.copy(s, 0, e - s);
	      return this.update();
	    }
	  }, {
	    key: 'loadTexture',
	    value: function loadTexture(filename) {
	      var _this2 = this;
	
	      var tex = PIXI.Texture.fromImage('./build/' + __webpack_require__(76)("./" + filename), undefined, PIXI.SCALE_MODES.NEAREST);
	      tex.on('update', function () {
	        return _this2.update();
	      });
	      return tex;
	    }
	  }, {
	    key: 'test',
	    value: function test() {
	      this.pixel(10, 10, 13);
	      this.pixel(20, 10, 5);
	      this.pixel(30, 10, 6);
	
	      this._fonzo.test();
	
	      // let screen = this._overlays.screen.sprite
	      // screen.removeChildren()
	
	      // let t = new PIXI.Sprite(this.loadTexture('test.png'))
	      // screen.addChild(t)
	
	      // let text = new PIXI.Text('This is a pixi text', { font: '20px "Glass TTY VT220"', fill: 0xFFFFFF })
	      // text.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST
	      // text.context.canvas.style['font-smoothing'] = 'never'
	      // text.context.canvas.style['-webkit-font-smoothing'] = 'none'
	      // text.context.imageSmoothingEnabled = false
	      // text.context.canvas.style.display = 'hidden'
	      // document.body.appendChild(text.context.canvas)
	      // text.updateText()
	      // screen.addChild(text)
	      // document.body.removeChild(text.context.canvas)
	
	      this.update(true);
	    }
	  }, {
	    key: 'scale',
	    get: function get() {
	      return this._scale;
	    },
	    set: function set(value) {
	      this._scale = value;
	    }
	  }, {
	    key: 'rainbow',
	    get: function get() {
	      return this._rainbow;
	    }
	  }, {
	    key: 'fonzo',
	    get: function get() {
	      return this._fonzo;
	    }
	  }, {
	    key: 'orwell',
	    get: function get() {
	      return this._orwell;
	    }
	  }, {
	    key: 'beagle',
	    get: function get() {
	      return this._beagle;
	    }
	  }, {
	    key: 'violet',
	    get: function get() {
	      return this._violet;
	    }
	  }, {
	    key: 'overlays',
	    get: function get() {
	      return this._overlays;
	    }
	  }, {
	    key: 'stage',
	    get: function get() {
	      return this._stage;
	    }
	  }, {
	    key: 'renderer',
	    get: function get() {
	      return this._renderer;
	    }
	  }, {
	    key: 'screen',
	    get: function get() {
	      return this._screen;
	    }
	  }, {
	    key: 'sprite',
	    get: function get() {
	      return this._screen.sprite;
	    }
	  }, {
	    key: 'texture',
	    get: function get() {
	      return this.sprite.texture;
	    }
	  }, {
	    key: 'canvasBuffer',
	    get: function get() {
	      return this._screen.canvasBuffer;
	    }
	  }, {
	    key: 'canvas',
	    get: function get() {
	      return this.canvasBuffer.canvas;
	    }
	  }, {
	    key: 'context',
	    get: function get() {
	      return this._screen.context;
	    }
	  }, {
	    key: 'imageData',
	    get: function get() {
	      return this._imageData;
	    }
	  }, {
	    key: 'pixels',
	    get: function get() {
	      return this._pixels;
	    }
	  }, {
	    key: 'force_redraw',
	    get: function get() {
	      return this._force_redraw;
	    },
	    set: function set(value) {
	      this._force_redraw = value;
	    }
	  }, {
	    key: 'force_flip',
	    get: function get() {
	      return this._force_flip;
	    },
	    set: function set(value) {
	      this._force_flip = value;
	    }
	  }]);
	
	  return Guideo;
	}(_chip2.default);
	
	exports.default = Guideo;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(69);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var s32 = new Uint32Array(4);
	var s8 = new Uint8Array(s32.buffer);
	var t32 = new Uint32Array(4);
	var t8 = new Uint8Array(t32.buffer);
	
	var reverse = function reverse(x) {
	  s32[0] = x;
	  t8[0] = s8[3];
	  t8[1] = s8[2];
	  t8[2] = s8[1];
	  t8[3] = s8[0];
	  return t32[0];
	};
	
	var Rainbow = function (_Chip) {
	  _inherits(Rainbow, _Chip);
	
	  function Rainbow(main) {
	    _classCallCheck(this, Rainbow);
	
	    var _this = _possibleConstructorReturn(this, (Rainbow.__proto__ || Object.getPrototypeOf(Rainbow)).call(this, main));
	
	    _this.init('rainbow', ['count']);
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Rainbow, [{
	    key: 'reset',
	    value: function reset() {
	      _get(Rainbow.prototype.__proto__ || Object.getPrototypeOf(Rainbow.prototype), 'reset', this).call(this);
	
	      this._LE = this.main.LE;
	
	      this.color(0, 0x000000ff);
	      this.color(1, 0x800000ff);
	      this.color(2, 0x008000ff);
	      this.color(3, 0x808000ff);
	      this.color(4, 0x000080ff);
	      this.color(5, 0x800080ff);
	      this.color(6, 0x008080ff);
	      this.color(7, 0xc0c0c0ff);
	      this.color(8, 0x808080ff);
	      this.color(9, 0xff0000ff);
	      this.color(10, 0x00ff00ff);
	      this.color(11, 0xffff00ff);
	      this.color(12, 0x0000ffff);
	      this.color(13, 0xff00ffff);
	      this.color(14, 0x00ffffff);
	      this.color(15, 0xffffffff);
	
	      return this;
	    }
	  }, {
	    key: 'to_red',
	    value: function to_red(rgba) {
	      return this.rgba(rgba).r;
	    }
	  }, {
	    key: 'to_green',
	    value: function to_green(rgba) {
	      return this.rgba(rgba).g;
	    }
	  }, {
	    key: 'to_blue',
	    value: function to_blue(rgba) {
	      return this.rgba(rgba).b;
	    }
	  }, {
	    key: 'to_alpha',
	    value: function to_alpha(rgba) {
	      return this.rgba(rgba).a;
	    }
	  }, {
	    key: 'split',
	    value: function split(rgba) {
	      var LE = this._LE;
	      return {
	        r: rgba >> (LE ? 24 : 0) & 0xFF,
	        g: rgba >> (LE ? 16 : 8) & 0xFF,
	        b: rgba >> (LE ? 8 : 16) & 0xFF,
	        a: rgba >> (LE ? 0 : 24) & 0xFF
	      };
	    }
	  }, {
	    key: 'rgba',
	    value: function rgba(r, g, b, a) {
	      var c = g ? a << 24 | r << 16 | g << 8 | b : r;
	      return this._LE ? reverse(c) : c;
	    }
	  }, {
	    key: 'color',
	    value: function color(c, r, g, b, a) {
	      var data = this._data;
	      if (r) {
	        data[c] = this.rgba(r, g, b, a);
	      }
	      return data[c];
	    }
	  }, {
	    key: 'find_color',
	    value: function find_color(r, g, b, a) {
	      var data = this._data;
	      var color = this.rgba(r, g, b, a);
	      for (var c = 0; c < this._count; c++) {
	        if (data[c] === color) {
	          return c;
	        }
	      }
	      return -1;
	    }
	  }, {
	    key: 'black',
	    get: function get() {
	      return 0;
	    }
	  }, {
	    key: 'dkred',
	    get: function get() {
	      return 1;
	    }
	  }, {
	    key: 'dkgreen',
	    get: function get() {
	      return 2;
	    }
	  }, {
	    key: 'dkyellow',
	    get: function get() {
	      return 3;
	    }
	  }, {
	    key: 'dkblue',
	    get: function get() {
	      return 4;
	    }
	  }, {
	    key: 'dkfuchsia',
	    get: function get() {
	      return 5;
	    }
	  }, {
	    key: 'teal',
	    get: function get() {
	      return 6;
	    }
	  }, {
	    key: 'grey',
	    get: function get() {
	      return 7;
	    }
	  }, {
	    key: 'dkgrey',
	    get: function get() {
	      return 8;
	    }
	  }, {
	    key: 'red',
	    get: function get() {
	      return 9;
	    }
	  }, {
	    key: 'lime',
	    get: function get() {
	      return 10;
	    }
	  }, {
	    key: 'yellow',
	    get: function get() {
	      return 11;
	    }
	  }, {
	    key: 'blue',
	    get: function get() {
	      return 12;
	    }
	  }, {
	    key: 'fuchsia',
	    get: function get() {
	      return 13;
	    }
	  }, {
	    key: 'cyan',
	    get: function get() {
	      return 14;
	    }
	  }, {
	    key: 'white',
	    get: function get() {
	      return 15;
	    }
	  }]);
	
	  return Rainbow;
	}(_chip2.default);
	
	exports.default = Rainbow;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _emitter = __webpack_require__(17);
	
	var _utils = __webpack_require__(3);
	
	var _memory = __webpack_require__(61);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var currentOffset = 0;
	
	var Chip = function (_Emitter) {
	  _inherits(Chip, _Emitter);
	
	  function Chip(main) {
	    _classCallCheck(this, Chip);
	
	    var _this = _possibleConstructorReturn(this, (Chip.__proto__ || Object.getPrototypeOf(Chip)).call(this));
	
	    _this._main = main;
	
	    _this._data = null;
	    _this._width = 0;
	    _this._height = 0;
	    _this._count = 0;
	    _this._size = 0;
	    _this._top = 0;
	    _this._bottom = 0;
	    _this._data_size = 0;
	    return _this;
	  }
	
	  _createClass(Chip, [{
	    key: 'init',
	    value: function init() {
	      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	      var nodata = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	      var main = this._main;
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var k = _step.value;
	
	          this['_' + k] = main.defaults(name + '.' + k);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      if (!nodata) {
	        this._count = this._count || 1;
	        this._width = this._width || 1;
	        this._height = this._height || 1;
	
	        this._data_format = main.defaults(name + '.data_format') || 'i8';
	        this._data_size = main.defaults(name + '.data_size') || 1;
	        this._data_size = _.isString(this._data_format) ? _memory.data_type_sizes[this._data_format] : this._data_size;
	        this._cell_size = this._width * this._height * this._data_size;
	
	        this._size = this._width * this._height * this._data_size * this._count;
	
	        this._top = _.get(main, 'mem_map.' + name + '.top', currentOffset);
	        this._bottom = this._top + this._size - 1;
	
	        _.set(main, 'mem_map.' + name, {
	          top: this._top,
	          bottom: this._bottom,
	          size: this._size,
	          data_format: this._data_format,
	          data_size: this._data_size,
	          cell_size: this._cell_size,
	          count: this._count
	        });
	
	        currentOffset = this._bottom + 1;
	
	        this._data = new window[_memory.data_type_fns[this._data_format] + 'Array'](this.memory.buffer, this._top, this._cell_size * this._count);
	      }
	
	      return this;
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      return this.clear();
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {}
	  }, {
	    key: 'update',
	    value: function update() {
	      var flip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      var guideo = this.guideo;
	      guideo.force_redraw = true;
	      guideo.force_flip = guideo.force_flip || flip;
	      return this;
	    }
	  }, {
	    key: 'tick',
	    value: function tick(t) {}
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      if (this._data) {
	        this._data.fill(v);
	      }
	      return this;
	    }
	  }, {
	    key: 'async',
	    value: function async(fn, args, delay) {
	      (0, _utils.async)(this, fn, args, delay);
	    }
	  }, {
	    key: 'main',
	    get: function get() {
	      return this._main;
	    }
	  }, {
	    key: 'memory',
	    get: function get() {
	      return this._main.memory;
	    }
	  }, {
	    key: 'guideo',
	    get: function get() {
	      return this._main.guideo;
	    }
	  }, {
	    key: 'rainbow',
	    get: function get() {
	      return this.guideo.rainbow;
	    }
	  }, {
	    key: 'fonzo',
	    get: function get() {
	      return this.guideo.fonzo;
	    }
	  }, {
	    key: 'orwell',
	    get: function get() {
	      return this.guideo.orwell;
	    }
	  }, {
	    key: 'beagle',
	    get: function get() {
	      return this.orwell.beagle;
	    }
	  }, {
	    key: 'violet',
	    get: function get() {
	      return this.guideo.violet;
	    }
	  }, {
	    key: 'data',
	    get: function get() {
	      return this._data;
	    }
	  }, {
	    key: 'top',
	    get: function get() {
	      return this._top;
	    }
	  }, {
	    key: 'bottom',
	    get: function get() {
	      return this._bottom;
	    }
	  }, {
	    key: 'size',
	    get: function get() {
	      return this._size;
	    }
	  }, {
	    key: 'count',
	    get: function get() {
	      return this._count;
	    }
	  }, {
	    key: 'data_size',
	    get: function get() {
	      return this._data_size;
	    }
	  }, {
	    key: 'width',
	    get: function get() {
	      return this._width;
	    }
	  }, {
	    key: 'height',
	    get: function get() {
	      return this._height;
	    }
	  }]);
	
	  return Chip;
	}(_emitter.Emitter);
	
	exports.default = Chip;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(69);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	var _globals = __webpack_require__(12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Fonzo = function (_Chip) {
	  _inherits(Fonzo, _Chip);
	
	  function Fonzo(main) {
	    _classCallCheck(this, Fonzo);
	
	    var _this = _possibleConstructorReturn(this, (Fonzo.__proto__ || Object.getPrototypeOf(Fonzo)).call(this, main));
	
	    _this.init('fonzo', ['count', 'width', 'height']);
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Fonzo, [{
	    key: 'reset',
	    value: function reset() {
	      _get(Fonzo.prototype.__proto__ || Object.getPrototypeOf(Fonzo.prototype), 'reset', this).call(this);
	
	      this.memory.from_array_mask(this._top + 33 * this._cell_size, ['       ', '   w   ', '   w   ', '   w   ', '   w   ', '   w   ', '       ', '   w   ', '       '], _globals.defaults.chars_map);
	
	      this.memory.from_array_mask(this._top + 65 * this._cell_size, ['       ', '   w   ', '  w w  ', ' w   w ', ' w   w ', ' wwwww ', ' w   w ', ' w   w ', '       '], _globals.defaults.chars_map);
	
	      this.memory.from_array_mask(this._top + 66 * this._cell_size, ['       ', ' wwww  ', ' w   w ', ' w   w ', ' wwww  ', ' w   w ', ' w   w ', ' wwww  ', '       '], _globals.defaults.chars_map);
	
	      this.test();
	    }
	  }, {
	    key: 'draw',
	    value: function draw(x, y, c) {
	      var fg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 15;
	      var bg = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	
	      return this.guideo.blit_mask(this._top + c * this._cell_size, x, y, this._width, this._height, fg, bg);
	    }
	  }, {
	    key: 'test',
	    value: function test() {
	      this.draw(40, 40, 65, 10, 3);
	      this.draw(47, 40, 66, 12, 15);
	      this.draw(54, 40, 33, 5, 8);
	    }
	  }]);
	
	  return Fonzo;
	}(_chip2.default);
	
	exports.default = Fonzo;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _chip = __webpack_require__(69);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Orwell = function (_Chip) {
	  _inherits(Orwell, _Chip);
	
	  function Orwell(main) {
	    _classCallCheck(this, Orwell);
	
	    var _this = _possibleConstructorReturn(this, (Orwell.__proto__ || Object.getPrototypeOf(Orwell)).call(this, main));
	
	    _this.init('orwell', ['width', 'height']);
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Orwell, [{
	    key: 'clear',
	    value: function clear() {
	      var ch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
	      var bg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	      this._data.fill(0xFF0000 & ch.charCodeAt(0) | 0x0000FF & bg);
	      return this.update();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var w = this._width;
	      var h = this._height;
	      var mem = this._data;
	      var fnt = this.fonzo;
	      var fw = fnt.width;
	      var fh = fnt.height;
	
	      var idx = 0;
	      for (var y = 0; y < h; y++) {
	        var py = y * fh;
	        for (var x = 0; x < w; x++) {
	          var c = mem[idx];
	          if (c) {
	            fnt.draw(x * fw, py, c, mem[idx + 1], mem[idx + 2]);
	          }
	          idx += 3;
	        }
	      }
	
	      return this.update();
	    }
	  }, {
	    key: 'draw_char',
	    value: function draw_char(x, y, c, fg, bg) {
	      var fnt = this.fonzo;
	      fnt.draw(x * fnt.width, y * fnt.height, c, fg, bg);
	      return this.update();
	    }
	  }, {
	    key: 'index',
	    value: function index(x, y) {
	      return ((y - 1) * this._width + (x - 1)) * 3;
	    }
	  }, {
	    key: 'line',
	    value: function line(y) {
	      var l = this._width * 3;
	      return { start: y * l, end: (y + 1) * l - 3, length: l };
	    }
	  }, {
	    key: 'char_at',
	    value: function char_at(x, y) {
	      var tidx = this.index(x, y);
	      var mem = this._data;
	      return { ch: mem[tidx], fg: mem[tidx + 1], bg: mem[tidx + 2] };
	    }
	  }, {
	    key: 'put_char',
	    value: function put_char(ch) {
	      var fg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	      var bg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
	      switch (ch.charCodeAt(0)) {
	        case 13:
	        case 10:
	          return this.cr();
	        case 8:
	          return this.bs();
	      }
	
	      var _pos = this.pos(),
	          x = _pos.x,
	          y = _pos.y;
	
	      this._data.set([ch.charCodeAt(0), fg, bg], this.index(x, y));
	
	      this.beagle.x++;
	      if (this.beagle.x > this._width) {
	        this.cr();
	      }
	
	      return this.draw_char(x, y, ch, fg, bg);
	    }
	  }, {
	    key: 'print',
	    value: function print(text, fg, bg) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var c = _step.value;
	
	          this.put_char(c, fg, bg);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return this;
	    }
	  }, {
	    key: 'pos',
	    value: function pos() {
	      return { x: this.beagle.x, y: this.beagle.y };
	    }
	  }, {
	    key: 'move_to',
	    value: function move_to(x, y) {
	      return this.beagle.move_to(x, y);
	    }
	  }, {
	    key: 'move_by',
	    value: function move_by(x, y) {
	      return this.beagle.move_by(x, y);
	    }
	  }, {
	    key: 'bol',
	    value: function bol() {
	      return this.move_to(1, this.beagle.y);
	    }
	  }, {
	    key: 'eol',
	    value: function eol() {
	      return this.move_to(this._width, this.beagle.y);
	    }
	  }, {
	    key: 'bos',
	    value: function bos() {
	      return this.move_to(1, 1);
	    }
	  }, {
	    key: 'eos',
	    value: function eos() {
	      return this.move_to(this._width, this._height);
	    }
	  }, {
	    key: 'bs',
	    value: function bs() {
	      return this.left().put_char(' ').left();
	    }
	  }, {
	    key: 'cr',
	    value: function cr() {
	      return this.move_to(1, this.beagle.y + 1);
	    }
	  }, {
	    key: 'lf',
	    value: function lf() {
	      return this.move_to(this.beagle.x, this.beagle.y + 1);
	    }
	  }, {
	    key: 'up',
	    value: function up() {
	      return this.move_to(this.beagle.x, this.beagle.y - 1);
	    }
	  }, {
	    key: 'left',
	    value: function left() {
	      return this.move_to(this.beagle.x - 1, this.beagle.y);
	    }
	  }, {
	    key: 'down',
	    value: function down() {
	      return this.move_to(this.beagle.x, this.beagle.y + 1);
	    }
	  }, {
	    key: 'right',
	    value: function right() {
	      return this.move_to(this.beagle.x + 1, this.beagle.y);
	    }
	  }, {
	    key: 'clear_eol',
	    value: function clear_eol() {
	      var bg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      var _pos2 = this.pos(),
	          x = _pos2.x,
	          y = _pos2.y;
	
	      var s = this.index(x, y);
	      this._data.fill(0x0000FF & bg, s, this.index(this._width, y) - s);
	      return this.update();
	    }
	  }, {
	    key: 'clear_eos',
	    value: function clear_eos() {
	      var bg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      var _pos3 = this.pos(),
	          x = _pos3.x,
	          y = _pos3.y;
	
	      var s = this.index(x, y);
	      this._data.fill(0x0000FF & bg, s, this._size - s);
	      return this.update();
	    }
	  }, {
	    key: 'clear_bol',
	    value: function clear_bol() {
	      var bg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      var _pos4 = this.pos(),
	          x = _pos4.x,
	          y = _pos4.y;
	
	      var s = this.index(x, y);
	      this._data.fill(0x0000FF & bg, s, this.index(1, y) - s);
	      return this.update();
	    }
	  }, {
	    key: 'clear_bos',
	    value: function clear_bos() {
	      var bg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      var _pos5 = this.pos(),
	          x = _pos5.x,
	          y = _pos5.y;
	
	      this._data.fill(0x0000FF & bg, 0, this.index(x, y) - 1);
	      return this.update();
	    }
	  }, {
	    key: 'copy_line',
	    value: function copy_line(sy, ty) {
	      var si = this.line(sy);
	      this._data.copy(si.start, this.line(ty), si.length);
	      return this.update();
	    }
	  }, {
	    key: 'copy_col',
	    value: function copy_col(sx, tx) {
	      var mem = this._data;
	      sx *= 4;
	      tx *= 4;
	      for (var y = 0; y < this._height; y++) {
	        var i = this.line(y);
	        mem.copy(i.start + sx, i.start + tx, 3);
	      }
	      return this.update();
	    }
	  }, {
	    key: 'erase_line',
	    value: function erase_line(y) {
	      var bg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	      var i = this.line(y);
	      this._data.fill(0x0000FF & bg, i.start, i.length);
	      return this.update();
	    }
	  }, {
	    key: 'erase_col',
	    value: function erase_col(x) {
	      var bg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	      var mem = this._data;
	      var ls = this.line(0).start + x * 3;
	      var c = 0x0000FF & bg;
	      for (var y = 0; y < this._height; y++) {
	        mem.fill(c, ls, 3);
	        ls += this._width * 3;
	      }
	      return this.update();
	    }
	  }, {
	    key: 'scroll',
	    value: function scroll(dy) {
	      if (dy > 0) {
	        var i = this.line(dy + 1);
	        this._data.copy(i.start, 0, this._size);
	        i = this.line(dy);
	        var s = i.start;
	        this._data.fill(0, s, this._size - s);
	        return this.update();
	      } else if (dy < 0) {
	        var _i = this.line(dy + 1);
	        this._data.copy(_i.start, 0, this._size);
	        _i = this.line(dy);
	        var _s = _i.start;
	        this._data.fill(0, _s, this._size - _s);
	        return this.update();
	      }
	      return this;
	    }
	  }]);
	
	  return Orwell;
	}(_chip2.default);
	
	exports.default = Orwell;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(69);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Beagle = function (_Chip) {
	  _inherits(Beagle, _Chip);
	
	  function Beagle(main) {
	    _classCallCheck(this, Beagle);
	
	    var _this = _possibleConstructorReturn(this, (Beagle.__proto__ || Object.getPrototypeOf(Beagle)).call(this, main));
	
	    _this.init('beagle', ['width', 'height', 'color', 'blinkrate', 'visible']);
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Beagle, [{
	    key: 'reset',
	    value: function reset() {
	      _get(Beagle.prototype.__proto__ || Object.getPrototypeOf(Beagle.prototype), 'reset', this).call(this);
	      this._x = 0;
	      this._y = 0;
	      this._last = 0;
	      this._blink_hidden = false;
	      return this;
	    }
	  }, {
	    key: 'tick',
	    value: function tick(t) {
	      if (t - this._last >= this._blinkrate) {
	        this.blink();
	        this._last = t;
	      }
	    }
	  }, {
	    key: 'blink',
	    value: function blink() {
	      if (this._visible) {
	        this._blink_hidden = !this._blink_hidden;
	        this.update(true);
	      }
	      return this;
	    }
	  }, {
	    key: 'move_to',
	    value: function move_to(x, y) {
	      var orwell = this.orwell;
	      var w = orwell.width;
	      var h = orwell.height;
	
	      if (x > w) {
	        x = w;
	      } else if (x < 1) {
	        x = 1;
	      }
	
	      if (y > h) {
	        y = h;
	      } else if (y < 1) {
	        y = 1;
	      }
	
	      this._x = x;
	      this._y = y;
	
	      return this.draw(x, y);
	    }
	  }, {
	    key: 'move_by',
	    value: function move_by(x, y) {
	      return this.move_to(this._x + x, this._y + y);
	    }
	  }, {
	    key: 'draw',
	    value: function draw(x, y) {
	      var w = this._width;
	      var h = this._height;
	      var c = this._color;
	      var guideo = this.guideo;
	
	      for (var by = 0; by < h; by++) {
	        var pi = (y + by) * w + x;
	        for (var bx = 0; bx < w; bx++) {
	          guideo.pixel(pi++, c);
	        }
	      }
	
	      return this.update(true);
	    }
	  }, {
	    key: 'x',
	    get: function get() {
	      return this._x;
	    },
	    set: function set(value) {
	      this._x = value;
	    }
	  }, {
	    key: 'y',
	    get: function get() {
	      return this._y;
	    },
	    set: function set(value) {
	      this._y = value;
	    }
	  }, {
	    key: 'color',
	    get: function get() {
	      return this._color;
	    },
	    set: function set(value) {
	      this._color = value;
	    }
	  }, {
	    key: 'blinkrate',
	    get: function get() {
	      return this._blinkrate;
	    },
	    set: function set(value) {
	      this._blinkrate = value;
	    }
	  }]);
	
	  return Beagle;
	}(_chip2.default);
	
	exports.default = Beagle;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(69);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Violet = function (_Chip) {
	  _inherits(Violet, _Chip);
	
	  function Violet(main) {
	    _classCallCheck(this, Violet);
	
	    var _this = _possibleConstructorReturn(this, (Violet.__proto__ || Object.getPrototypeOf(Violet)).call(this, main));
	
	    _this._list = [];
	
	    _this.init('violet', ['data_size', 'count', 'width', 'height']);
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Violet, [{
	    key: 'clear',
	    value: function clear() {
	      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      this._list = [];
	      return _get(Violet.prototype.__proto__ || Object.getPrototypeOf(Violet.prototype), 'clear', this).call(this, v);
	    }
	  }, {
	    key: 'find',
	    value: function find(name) {
	      return _.find(this._list, { name: name });
	    }
	  }, {
	    key: 'index',
	    value: function index(name) {
	      return _.indexOf(this._list, { name: name });
	    }
	  }, {
	    key: 'add',
	    value: function add(name, frame, x, y, z) {
	      this._list.push({ name: name, frame: frame, x: x, y: y, z: z });
	      return this;
	    }
	  }, {
	    key: 'del',
	    value: function del(name) {
	      var i = this.index(name);
	      if (i !== -1) {
	        this._list.splice(i, 1);
	      }
	      return this;
	    }
	  }, {
	    key: 'x',
	    value: function x(name, value) {
	      var s = this.find(name);
	      if (s && value) {
	        s.x = value;
	      }
	      return s ? s.x : 0;
	    }
	  }, {
	    key: 'y',
	    value: function y(name, value) {
	      var s = this.find(name);
	      if (s && value) {
	        s.y = value;
	      }
	      return s ? s.y : 0;
	    }
	  }, {
	    key: 'z',
	    value: function z(name, value) {
	      var s = this.find(name);
	      if (s && value) {
	        s.z = value;
	      }
	      return s ? s.z : 0;
	    }
	  }, {
	    key: 'move_to',
	    value: function move_to(name, x, y, z) {
	      var s = this.find(name);
	      if (s) {
	        s.x = x;
	        s.y = y;
	        if (z) {
	          s.z = z;
	        }
	        this.update();
	      }
	      return this;
	    }
	  }, {
	    key: 'move_by',
	    value: function move_by(name, x, y, z) {
	      var s = this.find(name);
	      if (s) {
	        s.x += x;
	        s.y += y;
	        if (z) {
	          s.z += z;
	        }
	        this.update();
	      }
	      return this;
	    }
	  }, {
	    key: 'draw',
	    value: function draw(frame, x, y) {
	      if (_.isUndefined(frame)) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = _.sortBy(this._list, 'z')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var s = _step.value;
	
	            this.draw(s.frame, s.x, s.y);
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      } else {
	        this.guideo.blit(this._top + frame * this._cell_size, x, y, this._width, this._height);
	      }
	
	      return this;
	    }
	  }, {
	    key: 'list',
	    get: function get() {
	      return this._list;
	    }
	  }]);
	
	  return Violet;
	}(_chip2.default);
	
	exports.default = Violet;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Overlays = exports.CrtOverlay = exports.RgbOverlay = exports.NoisesOverlay = exports.ScanlineOverlay = exports.ScanlinesOverlay = exports.ScreenOverlay = exports.Overlay = undefined;
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Overlay = exports.Overlay = function () {
	  function Overlay(overlays, width, height) {
	    _classCallCheck(this, Overlay);
	
	    this._overlays = overlays;
	
	    this._width = width;
	    this._height = height;
	
	    this.reset();
	  }
	
	  _createClass(Overlay, [{
	    key: 'create',
	    value: function create() {
	      this._canvasBuffer = new PIXI.CanvasBuffer(this._width, this._height);
	
	      this._texture = PIXI.Texture.fromCanvas(this._canvasBuffer.canvas, PIXI.SCALE_MODES.NEAREST);
	      this._texture.scaleMode = PIXI.SCALE_MODES.NEAREST;
	
	      this._sprite = new PIXI.Sprite(this._texture);
	
	      this._context = this._canvasBuffer.canvas.getContext('2d', { alpha: true, antialias: false });
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this._last = 0;
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      if (this._texture) {
	        this._texture.destroy();
	        this._texture = null;
	      }
	
	      if (this._canvasBuffer) {
	        this._canvasBuffer.destroy();
	        this._canvasBuffer = null;
	      }
	
	      if (this._sprite) {
	        this._sprite.destroy();
	        this._sprite = null;
	      }
	    }
	  }, {
	    key: 'tick',
	    value: function tick(t) {}
	  }, {
	    key: 'update',
	    value: function update() {
	      this.guideo.update();
	    }
	  }, {
	    key: 'main',
	    get: function get() {
	      return this._overlays.main;
	    }
	  }, {
	    key: 'guideo',
	    get: function get() {
	      return this.main.guideo;
	    }
	  }, {
	    key: 'stage',
	    get: function get() {
	      return this.main.stage;
	    }
	  }, {
	    key: 'renderer',
	    get: function get() {
	      return this.main.renderer;
	    }
	  }, {
	    key: 'canvasBuffer',
	    get: function get() {
	      return this._canvasBuffer;
	    }
	  }, {
	    key: 'texture',
	    get: function get() {
	      return this._texture;
	    }
	  }, {
	    key: 'sprite',
	    get: function get() {
	      return this._sprite;
	    }
	  }, {
	    key: 'context',
	    get: function get() {
	      return this._context;
	    }
	  }]);
	
	  return Overlay;
	}();
	
	var ScreenOverlay = exports.ScreenOverlay = function (_Overlay) {
	  _inherits(ScreenOverlay, _Overlay);
	
	  function ScreenOverlay(overlays, width, height, options) {
	    _classCallCheck(this, ScreenOverlay);
	
	    var _this = _possibleConstructorReturn(this, (ScreenOverlay.__proto__ || Object.getPrototypeOf(ScreenOverlay)).call(this, overlays, width, height));
	
	    _this.create();
	
	    _this._sprite.x = _lodash2.default.get(options, 'offset.x', 0) + _lodash2.default.get(options, 'margins.x', 0) / 2;
	    _this._sprite.y = _lodash2.default.get(options, 'offset.y', 0) + _lodash2.default.get(options, 'margins.y', 0) / 2;
	    return _this;
	  }
	
	  _createClass(ScreenOverlay, [{
	    key: 'update',
	    value: function update() {
	      this.guideo.update(true);
	    }
	  }]);
	
	  return ScreenOverlay;
	}(Overlay);
	
	var ScanlinesOverlay = exports.ScanlinesOverlay = function (_Overlay2) {
	  _inherits(ScanlinesOverlay, _Overlay2);
	
	  function ScanlinesOverlay(overlays, width, height, options) {
	    _classCallCheck(this, ScanlinesOverlay);
	
	    var _this2 = _possibleConstructorReturn(this, (ScanlinesOverlay.__proto__ || Object.getPrototypeOf(ScanlinesOverlay)).call(this, overlays, width, height));
	
	    _this2._gap = _lodash2.default.get(options, 'gap', 3);
	    _this2._alpha = _lodash2.default.get(options, 'alpha', 0.35);
	
	    _this2.create();
	
	    var a = _this2._alpha * 255;
	    var data = _this2._context.getImageData(0, 0, _this2._width, _this2._height);
	    var pixels = data.data;
	    var sz = _this2._width * 4;
	    var idx = void 0;
	    for (var y = 0; y < _this2._height; y += _this2._gap) {
	      idx = y * sz;
	      for (var i = idx; i < idx + sz; i += 4) {
	        pixels.set([0, 0, 0, a], i);
	      }
	    }
	    _this2._context.putImageData(data, 0, 0);
	    return _this2;
	  }
	
	  return ScanlinesOverlay;
	}(Overlay);
	
	var ScanlineOverlay = exports.ScanlineOverlay = function (_Overlay3) {
	  _inherits(ScanlineOverlay, _Overlay3);
	
	  function ScanlineOverlay(overlays, width, height, options) {
	    _classCallCheck(this, ScanlineOverlay);
	
	    var _this3 = _possibleConstructorReturn(this, (ScanlineOverlay.__proto__ || Object.getPrototypeOf(ScanlineOverlay)).call(this, overlays, width, height));
	
	    _this3._rate = _lodash2.default.get(options, 'rate', 50);
	    _this3._speed = _lodash2.default.get(options, 'speed', 16);
	    _this3._alpha = _lodash2.default.get(options, 'alpha', 0.1);
	
	    _this3.create();
	
	    var data = _this3._context.getImageData(0, 0, _this3._width, _this3._height);
	    var pixels = data.data;
	    var sz = _this3._width * 4;
	    var len = _this3._height * sz;
	    var l = 0;
	    var h = _this3._height;
	    var a = _this3._alpha * 255;
	    var aa = void 0;
	
	    for (var y = 0; y < len; y += sz) {
	      aa = l / h * a;
	      for (var x = y; x < y + sz; x += 4) {
	        pixels.set([25, 25, 25, aa], x);
	      }
	      l++;
	    }
	
	    _this3._context.putImageData(data, 0, 0);
	
	    _this3._sprite.y = -_this3._sprite.height;
	    return _this3;
	  }
	
	  _createClass(ScanlineOverlay, [{
	    key: 'tick',
	    value: function tick(t) {
	      if (t - this._last >= this._rate) {
	        this.sprite.y += this._speed;
	        if (this._sprite.y > this._height) {
	          this._sprite.y = -this._sprite.height;
	        }
	        this._last = t;
	
	        this.update();
	      }
	    }
	  }]);
	
	  return ScanlineOverlay;
	}(Overlay);
	
	var NoisesOverlay = exports.NoisesOverlay = function (_Overlay4) {
	  _inherits(NoisesOverlay, _Overlay4);
	
	  function NoisesOverlay(overlays, width, height, options) {
	    _classCallCheck(this, NoisesOverlay);
	
	    var _this4 = _possibleConstructorReturn(this, (NoisesOverlay.__proto__ || Object.getPrototypeOf(NoisesOverlay)).call(this, overlays, width, height));
	
	    _this4._rate = _lodash2.default.get(options, 'rate', 250);
	    _this4._count = _lodash2.default.get(options, 'count', 8);
	    _this4._rate = _lodash2.default.get(options, 'rate', 0.85);
	    _this4._red = _lodash2.default.get(options, 'red', 100);
	    _this4._green = _lodash2.default.get(options, 'green', 100);
	    _this4._blue = _lodash2.default.get(options, 'blue', 100);
	    _this4._alpha = _lodash2.default.get(options, 'alpha', 0.15);
	
	    _this4._noises = {};
	
	    var a = _this4._alpha * 255;
	    for (var c = 0; c < _this4._count; c++) {
	      var noise = new Overlay(overlays, _this4._width, _this4._height);
	      noise.create();
	      noise._sprite.visible = c === 0;
	
	      var data = noise._context.getImageData(0, 0, _this4._width, _this4._height);
	      var _pixels = data.data;
	      var _len = _pixels.length;
	      var r = _this4._red;
	      var g = _this4._green;
	      var b = _this4._blue;
	      var _rate = _this4._rate;
	      for (var i = 0; i < _len; i += 4) {
	        if (Math.random() >= _rate) {
	          _pixels.set([Math.trunc(Math.random() * r), Math.trunc(Math.random() * g), Math.trunc(Math.random() * b), a], i);
	        }
	      }
	      noise._context.putImageData(data, 0, 0);
	      _this4._noises[c] = noise;
	      _this4.guideo.stage.addChild(noise.sprite);
	    }
	
	    _this4._noiseKeys = _lodash2.default.keys(_this4._noises);
	    return _this4;
	  }
	
	  _createClass(NoisesOverlay, [{
	    key: 'destroy',
	    value: function destroy() {
	      _get(NoisesOverlay.prototype.__proto__ || Object.getPrototypeOf(NoisesOverlay.prototype), 'destroy', this).call(this);
	
	      for (var k in this._noises) {
	        var noise = this._noises[k];
	        noise.destroy();
	      }
	
	      this._noises = {};
	      this._noiseKeys = [];
	    }
	  }, {
	    key: 'tick',
	    value: function tick(t) {
	      if (t - this._last >= this._rate) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = this._noiseKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var k = _step.value;
	
	            this._noises[k].sprite.visible = false;
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	
	        var noise = this._noiseKeys[Math.trunc(Math.random() * this._noiseKeys.length)];
	        this._noises[noise].sprite.visible = true;
	
	        this._last = t;
	
	        this.update();
	      }
	    }
	  }]);
	
	  return NoisesOverlay;
	}(Overlay);
	
	var RgbOverlay = exports.RgbOverlay = function (_Overlay5) {
	  _inherits(RgbOverlay, _Overlay5);
	
	  function RgbOverlay(overlays, width, height, options) {
	    _classCallCheck(this, RgbOverlay);
	
	    var _this5 = _possibleConstructorReturn(this, (RgbOverlay.__proto__ || Object.getPrototypeOf(RgbOverlay)).call(this, overlays, width, height));
	
	    _this5._alpha = _lodash2.default.get(options, 'alpha', 0.075);
	
	    _this5.create();
	
	    var data = _this5._context.getImageData(0, 0, _this5._width, _this5._height);
	    var pixels = data.data;
	    var len = pixels.length;
	    var a = _this5._alpha * 255;
	    for (var i = 0; i < len; i += 12) {
	      pixels.set([100, 100, 100, a], i);
	    }
	    _this5._context.putImageData(data, 0, 0);
	    return _this5;
	  }
	
	  return RgbOverlay;
	}(Overlay);
	
	var CrtOverlay = exports.CrtOverlay = function (_Overlay6) {
	  _inherits(CrtOverlay, _Overlay6);
	
	  function CrtOverlay(overlays, width, height, options) {
	    _classCallCheck(this, CrtOverlay);
	
	    var _this6 = _possibleConstructorReturn(this, (CrtOverlay.__proto__ || Object.getPrototypeOf(CrtOverlay)).call(this, overlays, width, height));
	
	    _this6._radius = _lodash2.default.get(options, 'radius', 0.25);
	    _this6._inside_alpha = _lodash2.default.get(options, 'inside_alpha', 0.2);
	    _this6._outside_alpha = _lodash2.default.get(options, 'outside_alpha', 0.15);
	
	    _this6.create();
	
	    _this6._context.globalCompositeOperation = 'darker';
	    var gradient = _this6._context.createRadialGradient(_this6._width / 2, _this6._height / 2, _this6._height / 2, _this6._width / 2, _this6._height / 2, _this6._height / _this6._radius);
	    gradient.addColorStop(0, 'rgba(255, 255, 255, ' + _this6._inside_alpha + ')');
	    gradient.addColorStop(1, 'rgba(0, 0, 0, ' + _this6._outside_alpha + ')');
	    _this6._context.fillStyle = gradient;
	    _this6._context.fillRect(0, 0, _this6._width, _this6._height);
	    _this6._context.globalCompositeOperation = 'source-over';
	    return _this6;
	  }
	
	  return CrtOverlay;
	}(Overlay);
	
	var Overlays = exports.Overlays = function () {
	  function Overlays(main) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    _classCallCheck(this, Overlays);
	
	    this._main = main;
	
	    var stage = main.stage;
	    var renderer = main.renderer;
	
	    var width = renderer.width;
	    var height = renderer.height;
	
	    this._list = {};
	    var l = this._list;
	
	    function _createOverlay(ctx, Cls, name) {
	      var defaults = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	      var o = _lodash2.default.defaultsDeep({}, options, _defineProperty({}, name, defaults));
	      var s = _lodash2.default.get(o[name], 'scale', 1);
	      l[name] = new Cls(ctx, _lodash2.default.get(o[name], 'width', 0), _lodash2.default.get(o[name], 'height', 0), o[name]);
	      l[name].sprite.scale = new PIXI.Point(s, s);
	      stage.addChild(l[name].sprite);
	      return l[name];
	    }
	
	    if (_lodash2.default.get(options, 'screen')) {
	      _createOverlay(this, ScreenOverlay, 'screen', { width: this.guideo.width, height: this.guideo.height });
	    }
	
	    if (_lodash2.default.get(options, 'scanlines')) {
	      _createOverlay(this, ScanlinesOverlay, 'scanlines', { width: width, height: height });
	    }
	
	    if (_lodash2.default.get(options, 'scanline')) {
	      _createOverlay(this, ScanlineOverlay, 'scanline', { width: width, height: height });
	    }
	
	    if (_lodash2.default.get(options, 'rgb')) {
	      _createOverlay(this, RgbOverlay, 'rgb', { width: width, height: height });
	    }
	
	    if (_lodash2.default.get(options, 'noises')) {
	      var w = _lodash2.default.get(options, 'noises.width', width);
	      var _h = _lodash2.default.get(options, 'noises.height', height);
	      l.noises = new NoisesOverlay(this, w, _h, _lodash2.default.get(options, 'noises'));
	    }
	
	    if (_lodash2.default.get(options, 'crt')) {
	      _createOverlay(this, CrtOverlay, 'crt', { width: width, height: height });
	    }
	
	    if (_lodash2.default.get(options, 'monitor')) {
	      var mx = _lodash2.default.get(options, 'monitor.margins.x', 0);
	      var my = _lodash2.default.get(options, 'monitor.margins.y', 0);
	      var _w = _lodash2.default.get(options, 'monitor.width', width);
	      var _h2 = _lodash2.default.get(options, 'monitor.height', height);
	      var s = _lodash2.default.get(options, 'monitor.scale', 1);
	
	      var tex = PIXI.Texture.fromImage('./build/' + __webpack_require__(75));
	      l.monitor = new PIXI.Sprite(tex);
	      l.monitor.width = _w + mx;
	      l.monitor.height = _h2 + my;
	      l.monitor.scale = new PIXI.Point(s, s);
	      l.monitor.x = _lodash2.default.get(options, 'monitor.offset.x', 0) + mx / -2;
	      l.monitor.y = _lodash2.default.get(options, 'monitor.offset.y', 0) + my / -2;
	      stage.addChild(l.monitor);
	    }
	  }
	
	  _createClass(Overlays, [{
	    key: 'tick',
	    value: function tick(t) {
	      var l = this._list;
	      for (var k in l) {
	        if (l[k].tick) {
	          l[k].tick(t);
	        }
	      }
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var l = this._list;
	      for (var k in l) {
	        if (l[k].reset) {
	          l[k].reset();
	        }
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var l = this._list;
	      for (var k in l) {
	        if (l[k].destroy) {
	          l[k].destroy();
	        }
	      }
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {}
	  }, {
	    key: 'main',
	    get: function get() {
	      return this._main;
	    }
	  }, {
	    key: 'guideo',
	    get: function get() {
	      return this._main.guideo;
	    }
	  }, {
	    key: 'stage',
	    get: function get() {
	      return this._main.stage;
	    }
	  }, {
	    key: 'renderer',
	    get: function get() {
	      return this._main.renderer;
	    }
	  }, {
	    key: 'screen',
	    get: function get() {
	      return this._list.screen;
	    }
	  }]);

	  return Overlays;
	}();

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/assets/imgs//crt.png";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./crt.png": 77,
		"./test.png": 78
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 76;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/crt.png";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/test.png";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(69);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Ken = function (_Chip) {
	  _inherits(Ken, _Chip);
	
	  function Ken(main) {
	    _classCallCheck(this, Ken);
	
	    var _this = _possibleConstructorReturn(this, (Ken.__proto__ || Object.getPrototypeOf(Ken)).call(this, main));
	
	    _this.init('ken', ['count']);
	
	    _this._onKeydown = _this.onKeydown.bind(_this);
	    _this._onKeyup = _this.onKeyup.bind(_this);
	
	    window.addEventListener('keydown', _this._onKeydown);
	    window.addEventListener('keyup', _this._onKeyup);
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Ken, [{
	    key: 'reset',
	    value: function reset() {
	      _get(Ken.prototype.__proto__ || Object.getPrototypeOf(Ken.prototype), 'reset', this).call(this);
	
	      this._mods = 0;
	      this._joystick = 0;
	      this._keys = {};
	
	      return this;
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      window.removeEventListener('keydown', this._onKeydown);
	      window.removeEventListener('keyup', this._onKeyup);
	      _get(Ken.prototype.__proto__ || Object.getPrototypeOf(Ken.prototype), 'destroy', this).call(this);
	    }
	  }, {
	    key: 'eventDetails',
	    value: function eventDetails(e) {
	      return {
	        key: e.key,
	        keyCode: e.keyCode,
	        keys: this._keys,
	        mods: this._mods,
	        joystick: this._joystick,
	        shift: this.shift,
	        ctrl: this.ctrl,
	        alt: this.alt,
	        meta: this.meta,
	        numpad: this.numpad,
	        btn0: this.btn0,
	        btn1: this.btn1,
	        btn2: this.btn2,
	        btn3: this.btn3,
	        btn4: this.btn4,
	        up: this.up,
	        down: this.down,
	        right: this.right,
	        left: this.left
	      };
	    }
	  }, {
	    key: 'onKeydown',
	    value: function onKeydown(e) {
	      var numpad = e.location === 3;
	      if (numpad) {
	        this._mods |= 0x10;
	      } else {
	        this._mods &= ~0x10;
	      }
	      this._keys[e.keyCode] = 1;
	
	      switch (e.key) {
	        case 'Shift':
	          this._mods |= 0x01;
	          break;
	
	        case 'Control':
	          this._mods |= 0x02;
	          break;
	
	        case 'Alt':
	          this._mods |= 0x04;
	          break;
	
	        case 'Meta':
	          this._mods |= 0x08;
	          break;
	
	        case 'ArrowUp':
	          this._joystick |= 0x01;
	          break;
	
	        case '8':
	          if (numpad) {
	            this._joystick |= 0x01;
	          }
	          break;
	
	        case 'ArrowDown':
	          this._joystick |= 0x02;
	          break;
	
	        case '2':
	          if (numpad) {
	            this._joystick |= 0x02;
	          }
	          break;
	
	        case 'ArrowLeft':
	          this._joystick |= 0x04;
	          break;
	
	        case '4':
	          if (numpad) {
	            this._joystick |= 0x04;
	          }
	          break;
	
	        case 'ArrowRight':
	          this._joystick |= 0x08;
	          break;
	
	        case '6':
	          // numpad 6
	          if (numpad) {
	            this._joystick |= 0x08;
	          }
	          break;
	
	        case 'z':
	          // button 0
	          this._joystick |= 0x10;
	          break;
	
	        case 'x':
	          // button 1
	          this._joystick |= 0x20;
	          break;
	
	        case 'c':
	          // button 2
	          this._joystick |= 0x40;
	          break;
	
	        case ' ':
	          // button 3
	          this._joystick |= 0x80;
	          break;
	
	        case 'Enter':
	          // button 4
	          this._joystick |= 0x100;
	          break;
	      }
	
	      this.emit('key.down', this.eventDetails(e));
	
	      e.stopPropagation();
	    }
	  }, {
	    key: 'onKeyup',
	    value: function onKeyup(e) {
	      var numpad = e.location === 3;
	      if (numpad) {
	        this._mods |= 0x10;
	      } else {
	        this._mods &= ~0x10;
	      }
	      this._keys[e.keyCode] = 0;
	
	      switch (e.key) {
	        case 'Shift':
	          this._mods &= ~0x01;
	          break;
	
	        case 'Control':
	          this._mods &= ~0x02;
	          break;
	
	        case 'Alt':
	          this._mods &= ~0x04;
	          break;
	
	        case 'Meta':
	          this._mods &= ~0x08;
	          break;
	
	        case 'ArrowUp':
	          this._joystick &= ~0x01;
	          break;
	
	        case '8':
	          if (numpad) {
	            this._joystick &= ~0x01;
	          }
	          break;
	
	        case 'ArrowDown':
	          this._joystick &= ~0x02;
	          break;
	
	        case '2':
	          if (numpad) {
	            this._joystick &= ~0x02;
	          }
	          break;
	
	        case 'ArrowLeft':
	          this._joystick &= ~0x04;
	          break;
	
	        case '4':
	          if (numpad) {
	            this._joystick &= ~0x04;
	          }
	          break;
	
	        case 'ArrowRight':
	          this._joystick &= ~0x08;
	          break;
	
	        case '6':
	          // numpad 6
	          if (numpad) {
	            this._joystick &= ~0x08;
	          }
	          break;
	
	        case 'z':
	          // button 0
	          this._joystick &= ~0x10;
	          break;
	
	        case 'x':
	          // button 1
	          this._joystick &= ~0x20;
	          break;
	
	        case 'c':
	          // button 2
	          this._joystick &= ~0x40;
	          break;
	
	        case ' ':
	          // button 3
	          this._joystick &= ~0x80;
	          break;
	
	        case 'Enter':
	          // button 4
	          this._joystick &= ~0x100;
	          break;
	      }
	
	      this.emit('key.up', this.eventDetails(e));
	
	      e.stopPropagation();
	    }
	  }, {
	    key: 'mods',
	    get: function get() {
	      return this._mods;
	    }
	  }, {
	    key: 'joystick',
	    get: function get() {
	      return this._joystick;
	    }
	  }, {
	    key: 'keys',
	    get: function get() {
	      return this._keys;
	    }
	  }, {
	    key: 'shift',
	    get: function get() {
	      return this._mods & 0x01;
	    }
	  }, {
	    key: 'ctrl',
	    get: function get() {
	      return this._mods & 0x02;
	    }
	  }, {
	    key: 'alt',
	    get: function get() {
	      return this._mods & 0x04;
	    }
	  }, {
	    key: 'meta',
	    get: function get() {
	      return this._mods & 0x08;
	    }
	  }, {
	    key: 'numpad',
	    get: function get() {
	      return this._mods & 0x10;
	    }
	  }, {
	    key: 'btn0',
	    get: function get() {
	      return this._joystick & 0x10;
	    }
	  }, {
	    key: 'btn1',
	    get: function get() {
	      return this._joystick & 0x20;
	    }
	  }, {
	    key: 'btn2',
	    get: function get() {
	      return this._joystick & 0x40;
	    }
	  }, {
	    key: 'btn3',
	    get: function get() {
	      return this._joystick & 0x80;
	    }
	  }, {
	    key: 'btn4',
	    get: function get() {
	      return this._joystick & 0x100;
	    }
	  }, {
	    key: 'up',
	    get: function get() {
	      return this._joystick & 0x01;
	    }
	  }, {
	    key: 'down',
	    get: function get() {
	      return this._joystick & 0x02;
	    }
	  }, {
	    key: 'right',
	    get: function get() {
	      return this._joystick & 0x04;
	    }
	  }, {
	    key: 'left',
	    get: function get() {
	      return this._joystick & 0x08;
	    }
	  }]);
	
	  return Ken;
	}(_chip2.default);
	
	exports.default = Ken;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(69);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	var _globals = __webpack_require__(12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Mickey = function (_Chip) {
	  _inherits(Mickey, _Chip);
	
	  function Mickey(main) {
	    _classCallCheck(this, Mickey);
	
	    var _this = _possibleConstructorReturn(this, (Mickey.__proto__ || Object.getPrototypeOf(Mickey)).call(this, main));
	
	    _this.init('mickey', ['count', 'frame', 'width', 'height', 'color', 'dblClickDelay', 'dblClickDistance']);
	
	    _this._default_frame = _this._frame;
	    _this._default_color = _this._color;
	
	    var stage = main.stage;
	    if (stage) {
	      stage.interactive = true;
	
	      _this._onMouseDown = _this.onMouseDown.bind(_this);
	      _this._onMouseMove = _this.onMouseMove.bind(_this);
	      _this._onMouseUp = _this.onMouseUp.bind(_this);
	
	      stage.on('mousedown', _this._onMouseDown);
	      stage.on('rightdown', _this._onMouseDown);
	      stage.on('touchstart', _this._onMouseDown);
	
	      stage.on('mousemove', _this._onMouseMove);
	
	      stage.on('mouseup', _this._onMouseUp);
	      stage.on('touchend', _this._onMouseUp);
	      stage.on('mouseupoutside', _this._onMouseUp);
	      stage.on('touchendoutside', _this._onMouseUp);
	    }
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Mickey, [{
	    key: 'reset',
	    value: function reset() {
	      _get(Mickey.prototype.__proto__ || Object.getPrototypeOf(Mickey.prototype), 'reset', this).call(this);
	
	      this._x = 0;
	      this._y = 0;
	      this._color = this._default_color;
	      this._frame = this._default_frame;
	      this._btns = 0;
	
	      this.memory.from_array_mask(this._top + this._frame * this._cell_size, ['..    ', '.w.   ', '.ww.  ', '.www. ', '.wwww.', '.w....', '...   '], _globals.defaults.chars_map);
	
	      return this;
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var stage = this._main.stage;
	      if (stage) {
	        stage.off('mousedown', this._onMouseDown);
	        stage.off('rightdown', this._onMouseDown);
	        stage.off('touchstart', this._onMouseDown);
	
	        stage.off('mousemove', this._onMouseMove);
	
	        stage.off('mouseup', this._onMouseUp);
	        stage.off('touchend', this._onMouseUp);
	        stage.off('mouseupoutside', this._onMouseUp);
	        stage.off('touchendoutside', this._onMouseUp);
	      }
	      _get(Mickey.prototype.__proto__ || Object.getPrototypeOf(Mickey.prototype), 'destroy', this).call(this);
	    }
	  }, {
	    key: 'store',
	    value: function store(x, y) {
	      return this.guideo.copy_rect(x || this._x, y || this._y, this._width, this._height, this._top + this._count * this._cell_size);
	    }
	  }, {
	    key: 'restore',
	    value: function restore(x, y) {
	      return this.guideo.blit(this._top + this._count * this._cell_size, x || this._x, y || this._y, this._width, this._height);
	    }
	  }, {
	    key: 'draw',
	    value: function draw(frame, x, y, color) {
	      this.store(x, y);
	      return this.guideo.blit(this._top + (frame || this._frame) * this._cell_size, x || this._x, y || this._y, this._width, this._height);
	    }
	  }, {
	    key: 'getEventInfo',
	    value: function getEventInfo(e) {
	      var renderer = this._main.renderer;
	
	      var size = new PIXI.Point(renderer.width - this._width, renderer.height - this._height);
	
	      var x = Math.trunc(Math.min(size.x, Math.max(0, e.data.global.x)) / this.guideo.scale);
	      var y = Math.trunc(Math.min(size.y, Math.max(0, e.data.global.y)) / this.guideo.scale);
	
	      return { x: x, y: y, button: e.data.originalEvent.button };
	    }
	  }, {
	    key: 'onMouseDown',
	    value: function onMouseDown(e) {
	      var _getEventInfo = this.getEventInfo(e),
	          x = _getEventInfo.x,
	          y = _getEventInfo.y,
	          button = _getEventInfo.button;
	
	      switch (button) {
	        case 0:
	          // left
	          this._btns |= 0x01;
	          break;
	
	        case 1:
	          // middle
	          this._btns |= 0x02;
	          break;
	
	        case 2:
	          // right
	          this._btns |= 0x04;
	          break;
	      }
	
	      this.emit('mouse.down', { x: x, y: y, button: button });
	
	      e.stopPropagation();
	    }
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove(e) {
	      var width = this.guideo.width;
	      var height = this.guideo.height;
	
	      var _getEventInfo2 = this.getEventInfo(e),
	          x = _getEventInfo2.x,
	          y = _getEventInfo2.y,
	          button = _getEventInfo2.button;
	
	      this.restore();
	
	      this._x = Math.min(x, width - this._width);
	      this._y = Math.min(y, height - this._height);
	
	      this.draw();
	
	      this.emit('mouse.move', { x: x, y: y, button: button });
	
	      e.stopPropagation();
	    }
	  }, {
	    key: 'onMouseUp',
	    value: function onMouseUp(e) {
	      var _getEventInfo3 = this.getEventInfo(e),
	          x = _getEventInfo3.x,
	          y = _getEventInfo3.y,
	          button = _getEventInfo3.button;
	
	      switch (button) {
	        case 0:
	          // left
	          this._btns &= ~0x01;
	          break;
	
	        case 1:
	          // middle
	          this._btns &= ~0x02;
	          break;
	
	        case 2:
	          // right
	          this._btns &= ~0x04;
	          break;
	      }
	
	      this.emit('mouse.up', { x: x, y: y, button: button });
	
	      e.stopPropagation();
	    }
	  }, {
	    key: 'x',
	    get: function get() {
	      return this._x;
	    },
	    set: function set(value) {
	      this.restore();
	      this._x = value;
	      this.draw();
	    }
	  }, {
	    key: 'y',
	    get: function get() {
	      return this._y;
	    },
	    set: function set(value) {
	      this.restore();
	      this._y = value;
	      this.draw();
	    }
	  }, {
	    key: 'frame',
	    get: function get() {
	      return this._frame;
	    },
	    set: function set(value) {
	      this.restore();
	      this._frame = value;
	      this.draw();
	    }
	  }, {
	    key: 'btns',
	    get: function get() {
	      return this._btns;
	    },
	    set: function set(value) {
	      this._btns = value;
	    }
	  }, {
	    key: 'dblClickDelay',
	    get: function get() {
	      return this._dblClickDelay;
	    }
	  }, {
	    key: 'dblClickDistance',
	    get: function get() {
	      return this._dblClickDistance;
	    }
	  }]);
	
	  return Mickey;
	}(_chip2.default);
	
	exports.default = Mickey;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjQxODYwOGYzNGE3NjU5NGNjMGMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGl4aS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYi1hdWRpby1kYXdcIiIsIndlYnBhY2s6Ly8vLi9hcHAvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJhZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBlcmZvcm1hbmNlLW5vd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1peHdpdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuZGVyc2NvcmUtcGx1c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9hcHAvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9tYWluLmNzcz9mNDgyIiwid2VicGFjazovLy8uL3N0eWxlL21haW4uY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9sZXhlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL3R5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvYXNzaWducy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2RlbGltaXRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2dyb3Vwcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2xpdGVyYWxzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvb3BlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL3Jlc2VydmVkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy9pbmNsdWRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2tleV9saXRlcmFsLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvc3RhdGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2lkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvYXNzaWduLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvcmV0dXJuLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9jb25kaXRpb25zLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvdmFyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvbG9vcHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZXhwcmVzc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZGljdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9mbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9pZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdHJhbnNwaWxlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3N0YXRlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9leHByZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3ByaW1pdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9vcGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9pZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NsYXNzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZm4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2RpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL21lbW9yeS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZXh5XCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL21lbW9yeW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJldHR5LWJ5dGVzXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL3N0YWNrLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9pbnRlcnJ1cHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL2d1aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvcmFpbmJvdy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvY2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvZm9uem8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL29yd2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvYmVhZ2xlLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy92aW9sZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL292ZXJsYXlzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWdzL2NydC5wbmc/M2U4MiIsIndlYnBhY2s6Ly8vXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1ncy9jcnQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWdzL3Rlc3QucG5nIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL21pY2tleS5qcyJdLCJuYW1lcyI6WyJfU1RPUFBFRCIsIl9SVU5OSU5HIiwiX1BBVVNFRCIsIk1haW4iLCJvcHRpb25zIiwicmVzZXQiLCJfdXBkYXRlcyIsInF1ZXVlIiwiYWRkIiwibyIsIl8iLCJnZXQiLCJfX2luVXBkYXRlcyIsInB1c2giLCJyZW1vdmUiLCJyZWplY3QiLCJvYmplY3QiLCJiIiwiQXJyYXlCdWZmZXIiLCJhIiwiVWludDMyQXJyYXkiLCJjIiwiVWludDhBcnJheSIsIkxFIiwiX21lbW9yeSIsIl9tZW1vcnlNYW5hZ2VyIiwiX3N0YWNrIiwiX2ludGVycnVwdHMiLCJfZ3VpZGVvIiwiY3JlYXRlQ2hpcHMiLCJfa2VuIiwiX21pY2tleSIsIl9vblJlc2l6ZSIsIm9uUmVzaXplIiwiYmluZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aGF0IiwiUElYSSIsInRpY2tlciIsInNoYXJlZCIsInN0YXR1cyIsInRpY2siLCJwZXJmb3JtYW5jZSIsIm5vdyIsImRlbHRhIiwicSIsImNiIiwiYXJncyIsInN0YXJ0IiwiZGVzdHJveSIsIl9zdGF0dXMiLCJfcHJvZ3JhbSIsInBhdGgiLCJ1bmRlZmluZWQiLCJjb2RlIiwiZm4iLCJuYW1lIiwiZW1pdCIsInN0b3AiLCJ0IiwidG9rZW5zIiwicnVuIiwiY29uc29sZSIsImxvZyIsInAiLCJub2RlcyIsImVycm9ycyIsIkZ1bmN0aW9uIiwiYXBwbHkiLCJ0ZXN0IiwidmFsdWUiLCJfc3RhZ2UiLCJfcmVuZGVyZXIiLCJtYWluIiwiYXBwIiwiZWxlY3Ryb24iLCJyZXF1aXJlIiwicmVtb3RlIiwic2NyZWVuIiwiZGlhbG9nIiwiQnJvd3NlcldpbmRvdyIsImV4dGVuZCIsInRlbXBsYXRlU2V0dGluZ3MiLCJpbnRlcnBvbGF0ZSIsImZzIiwiTWl4aW4iLCJtaXgiLCJ1c2VyUGF0aCIsImpvaW4iLCJnZXRBcHBQYXRoIiwiZXhpc3RzU3luYyIsIm1rZGlycyIsIklTX1dJTiIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsIklTX09TWCIsIklTX0xJTlVYIiwiZGlycyIsImJ1aWxkIiwiX19kaXJuYW1lIiwiY3dkIiwiaG9tZSIsImdldFBhdGgiLCJ1c2VyIiwidG1wIiwicm9vdCIsIm5vZGVfbW9kdWxlcyIsInVzZXJfcGtnIiwiZ2V0TmFtZSIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwib3BlbkZpbGUiLCJzaG93T3BlbkRpYWxvZyIsImVyciIsImVycm9yIiwic2F2ZUZpbGUiLCJzaG93U2F2ZURpYWxvZyIsIm1lc3NhZ2VCb3giLCJzaG93TWVzc2FnZUJveCIsIm1hcF9nZXR0ZXJzIiwic291cmNlIiwidGFyZ2V0IiwiZGVmcyIsImsiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNhbGwiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwibWFwX2dldHRlcnNfcmV0dXJuX3RoaXMiLCJkZWxheSIsIm1zIiwiYXN5bmMiLCJjb250ZXh0IiwiaXNOdW1iZXIiLCJpc0FycmF5Iiwic2V0VGltZW91dCIsImJ1ZmZlcl90b19zdHJpbmciLCJsZW4iLCJsZW5ndGgiLCJpIiwicyIsInRvU3RyaW5nIiwic3RyaW5nX3RvX2J1ZmZlciIsInN0ciIsIkJ1ZmZlciIsIk1hdGgiLCJ0cnVuYyIsIngiLCJoZXgiLCJzdWJzdHIiLCJwYXJzZUludCIsInN0cmluZ19idWZmZXIiLCJ3cml0ZSIsIm5vcm1hbGl6ZU1lc3NhZ2VzIiwibWVzc2FnZSIsIm0iLCJpc1N0cmluZyIsInNpemUiLCJwYWRTdGFydCIsImJ1ZmZlcl9kdW1wIiwiYnVmZmVyIiwid2lkdGgiLCJjYXBzIiwiaW5kZW50IiwicmVwZWF0IiwiemVybyIsIm4iLCJtYXgiLCJ0b1VwcGVyQ2FzZSIsIm1pbiIsImJ5dGVMZW5ndGgiLCJyb3dzIiwiY2VpbCIsImxhc3QiLCJvZmZzZXRMZW5ndGgiLCJhcnIiLCJsYXN0Qnl0ZXMiLCJsYXN0U3BhY2VzIiwiaiIsInYiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJ1dG9hIiwiYnRvYSIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYXRvdSIsImRlY29kZVVSSUNvbXBvbmVudCIsImVzY2FwZSIsImF0b2IiLCJpbnN0YW5jZUZ1bmN0aW9uIiwiZm9yY2UiLCJoYXNPd25Qcm9wZXJ0eSIsIndyaXRhYmxlIiwiaW5zdGFuY2VGdW5jdGlvbnMiLCJuYW1lcyIsInJhZiIsIlBvaW50IiwicHJvdG90eXBlIiwiZGlzdGFuY2UiLCJzcXJ0IiwieSIsInRlbXBsYXRlIiwiUmVjdGFuZ2xlIiwiZGVmYXVsdHMiLCJib3VuZHNjaGVjayIsInR5cGUiLCJtZW1vcnkiLCJtZW1vcnlfbWFuYWdlciIsImNvbGxlY3RfZGVsYXkiLCJndWlkZW8iLCJoZWlnaHQiLCJzY2FsZSIsInJhaW5ib3ciLCJjb3VudCIsImRhdGFfZm9ybWF0IiwiZm9uem8iLCJvcndlbGwiLCJiZWFnbGUiLCJjb2xvciIsImJsaW5rcmF0ZSIsInZpb2xldCIsImtlbiIsIm1pY2tleSIsImZyYW1lIiwiZGJsQ2xpY2tEZWxheSIsImRibENsaWNrRGlzdGFuY2UiLCJuZXR3b3JrIiwiYWx0byIsImNoYXJzX21hcCIsInIiLCJnIiwiRSIsImUiLCJSIiwiRyIsIlkiLCJCIiwiUCIsIkMiLCJ3IiwibXNnIiwicm93IiwiY29sIiwicnVudGltZV9lcnJvciIsImlvX2Vycm9yIiwiRXZlbnQiLCJkYXRhIiwiYnViYmxlcyIsIl9fZXZlbnRPYmplY3QiLCJ0aW1lU3RhbXAiLCJzdG9wcGVkIiwic3RvcHBlZEltbWVkaWF0ZSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJFbWl0dGVyIiwib3JkZXIiLCJfbGlzdGVuZXJzIiwic29ydEJ5Iiwib25jZUhhbmRsZXJXcmFwcGVyIiwib2ZmIiwiX29yaWdpbmFsSGFuZGxlciIsIm9uIiwibGlzdCIsInNwbGljZSIsImlzRW1wdHkiLCJvcmlnRXZlbnREYXRhIiwibGlzdGVuZXJzIiwiY2xvbmUiLCJsIiwiY2FuY2VsQnViYmxlIiwicGFyZW50IiwiVG9rZW4iLCJsZXhlciIsImVuZCIsIl90eXBlIiwiX3Jlc2VydmVkIiwib2Zmc2V0IiwibGluZSIsImNvbHVtbiIsInBhcnRzIiwic3BsaXQiLCJpcyIsImlzUmVnRXhwIiwibWF0Y2giLCJiYXNlbmFtZSIsIkVtcHR5Q2xhc3MiLCJMZXhlciIsInRleHQiLCJjb25zdGFudHMiLCJ2YWxpZE9mZnNldCIsImNoYXJBdCIsInN1YnN0cmluZyIsInBvc19pbmZvIiwidG9rZW4iLCJpbmRleE9mIiwiY2hhcl9hdCIsIm5leHRfaXNfc3BhY2UiLCJvbGRfb2Zmc2V0IiwidG9rZW5fdHlwZXMiLCJzdWJ0ZXh0IiwiaW5kZXgiLCJzbGljZSIsImluc2VydFRva2VuIiwicGVlayIsImNvbnN0X3Rva2VuIiwiaW5jbHVkZV90b2tlbiIsIm5leHQiLCJpbmZvIiwid2l0aCIsIl90b2tlbl90eXBlcyIsInN1cGVyY2xhc3MiLCJhc3NpZ24iLCJtYXRoX2Fzc2lnbiIsImxvZ2ljX2Fzc2lnbiIsImZuX2Fzc2lnbiIsImVvbCIsImNvbW1hIiwiY29sb24iLCJjb21tZW50Iiwib3Blbl9wYXJlbiIsImNsb3NlX3BhcmVuIiwib3Blbl9icmFja2V0IiwiY2xvc2VfYnJhY2tldCIsIm9wZW5fY3VybHkiLCJjbG9zZV9jdXJseSIsImtleSIsImlkIiwiaWRfZmllbGQiLCJ0aGlzIiwidGhpc19maWVsZCIsInN5bWJvbCIsIm1hdGgiLCJsb2dpYyIsImNvbXAiLCJudW1iZXIiLCJzdHJpbmciLCJjaGFyIiwiaW5jbHVkZSIsImNvbnN0IiwicmVzZXJ2ZWQiLCJleHRuYW1lIiwicG4iLCJzdGF0U3luYyIsInNyYyIsInJlYWRGaWxlU3luYyIsImx4IiwiY29uY2F0IiwiTm9kZSIsInBhcnNlciIsIl9pbl9jbGFzcyIsIl9mbl9sZXZlbCIsInRva2VuX3Byb3AiLCJQYXJzZXIiLCJmcmFtZXMiLCJwcmV2X2ZyYW1lIiwiaW5fY2xhc3MiLCJmbl9sZXZlbCIsImVvcyIsIm1hdGNoZXMiLCJ0b2tlbl9hdCIsImVuZF9uZXh0Iiwic2tpcCIsImV4cGVjdCIsImxlZnQiLCJyaWdodCIsImV4cHIiLCJub2RlIiwic3RhdGVtZW50cyIsIkZyYW1lIiwiRnJhbWVzIiwiRnJhbWVJdGVtIiwiY3VycmVudCIsIml0ZW1fdHlwZSIsImV4aXN0cyIsImlzX2xvY2FsIiwiaXNfZ2xvYmFsIiwiaXRlbXMiLCJfZ2xvYmFsIiwiZmluZCIsImJsb2NrX3R5cGUiLCJsb29wX3doaWxlIiwic3RhdGVtZW50IiwiYmxvY2siLCJ2YXJfc3RhdGVtZW50IiwiYXNzaWduX3N0YXRlbWVudCIsImlmX3N0YXRlbWVudCIsImZvcl9zdGF0ZW1lbnQiLCJ3aGlsZV9zdGF0ZW1lbnQiLCJyZXR1cm5fc3RhdGVtZW50Iiwic2luZ2xlX3N0YXRlbWVudCIsImNsYXNzX3N0YXRlbWVudCIsImlkX3N0YXRlbWVudCIsImZpcnN0Iiwic3VwZXJfZXhwciIsImlkX2V4cHIiLCJmbl9leHByIiwiX2ZuIiwiZXhwcnMiLCJzaW5nbGUiLCJfZXh0ZW5kcyIsImNsYXNzX2xpc3QiLCJib2R5IiwiZXhwZWN0X2VuZCIsImV4cHJfYmxvY2siLCJ0cnVlX2JvZHkiLCJmYWxzZV9ib2R5IiwiZWxzZV9zdGF0ZW1lbnQiLCJfbGV0IiwibWluX2V4cHIiLCJtYXhfZXhwciIsInN0ZXBfZXhwciIsInNpbXBsZV9leHByIiwidGVybSIsInRlcm1fZXhwciIsImZhY3RvciIsImZhY3Rvcl9leHByIiwiY29uZGl0aW9uYWwiLCJjb25kaXRpb25hbF9leHByIiwianVuY3Rpb24iLCJqdW5jdGlvbl9leHByIiwibmV4dF9leHByX25vZGUiLCJzdWJfZXhwciIsImFycmF5X2V4cHIiLCJkaWN0X2V4cHIiLCJ0aGlzX2V4cHIiLCJuZXdfZXhwciIsImRlZiIsImtleV9saXRlcmFsIiwiZm5fYXJnc19kZWYiLCJmbl9hcmciLCJmaWVsZHMiLCJfZmllbGQiLCJUcmFuc3BpbGVyIiwibm9kZV9hdCIsInZhbHVlcyIsImxpbmVzIiwiaW5kZW50X2xldmVsIiwiZW5kc1dpdGgiLCJyZXBsYWNlIiwiY29kZV9zdGFydCIsIndyaXRlbG4iLCJjb2RlX2VuZCIsImQiLCJub2RlX3RlbXBsYXRlIiwiZm5fY2FsbF90ZW1wbGF0ZSIsImZuX2Fzc2lnbl90ZW1wbGF0ZSIsImFycmF5X3RlbXBsYXRlIiwiZGljdF90ZW1wbGF0ZSIsIm9wZXJhdG9yX3RlbXBsYXRlIiwidGhpc190ZW1wbGF0ZSIsIm5ld190ZW1wbGF0ZSIsInN0cmluZ190ZW1wbGF0ZSIsImlkX3RlbXBsYXRlIiwidmFsdWVfdGVtcGxhdGUiLCJsbiIsInN0YXRlbWVudF90ZW1wbGF0ZSIsImZuX2NhbGwiLCJ0bXBsIiwiZGF0Iiwid29yZCIsInNlcGFyYXRvciIsIm9wIiwiZXhwcl90ZW1wbGF0ZSIsImZpZWxkIiwiZG90IiwiYmxvY2tfdGVtcGxhdGUiLCJmbl9kZWYiLCJtYXAiLCJmIiwiZGF0YV90eXBlX3NpemVzIiwiaTgiLCJzOCIsImkxNiIsInMxNiIsImkzMiIsInMzMiIsImYzMiIsImRhdGFfdHlwZV9mbnMiLCJkYXRhX3R5cGVfc2l6ZSIsIk1lbW9yeSIsIl9zaXplIiwiX3RvcCIsIl9ib3R0b20iLCJfYnVmZmVyIiwiX2RhdGEiLCJfdmlldyIsIkRhdGFWaWV3IiwiY2xlYXIiLCJmaWxsIiwiYWRkciIsInN6IiwiaGx0IiwiY2hrX2JvdW5kcyIsImRiIiwiX3ZtIiwibGl0dGxlRW5kaWFuIiwibGQiLCJzdCIsImxkbCIsImJvdHRvbSIsIm1lbSIsImxkcyIsInNldCIsInN1YmFycmF5Iiwic3RsIiwiY2hhckNvZGVBdCIsInN0cyIsInRvcCIsInRndCIsImNvcHlXaXRoaW4iLCJjb3B5IiwidGkiLCJtYXNrIiwiaCIsImZyb21fc3RyaW5nIiwiZnJvbV9zdHJpbmdfbWFzayIsInRvX3N0cmluZyIsInRvX3N0cmluZ19tYXNrIiwiaGV4eSIsIl9tYWluIiwiTWVtb3J5TWFuYWdlciIsIl9jb2xsZWN0X2RlbGF5IiwiX2Jsb2NrcyIsIl9sYXN0IiwiY29sbGVjdCIsInVzZWQiLCJvYiIsImF2YWlsX21lbSIsIl9hbGxvYyIsInVzZWRfbWVtIiwiZnJlZV9tZW0iLCJtZW1fYnVmZmVyIiwiU3RhY2tFbnRyeSIsInN0YWNrIiwicm9sbGluZyIsIl9tYXgiLCJfcm9sbGluZyIsIl9wdHIiLCJyZWFkIiwidG90YWxfc2l6ZSIsIlN0YWNrIiwiX2xpc3QiLCJhcmd1bWVudHMiLCJwb3AiLCJfSU5UX1JVTk5JTkciLCJfSU5UX1BBVVNFRCIsIkludGVycnVwdCIsInN0b3BfYWxsIiwiR3VpZGVvIiwiaW5pdCIsImF1dG9EZXRlY3RSZW5kZXJlciIsIl93aWR0aCIsIl9zY2FsZSIsIl9oZWlnaHQiLCJ2aWV3Iiwic3R5bGUiLCJwb3NpdGlvbiIsImN1cnNvciIsImRvY3VtZW50IiwiYXBwZW5kQ2hpbGQiLCJDb250YWluZXIiLCJyZXNpemUiLCJfcmFpbmJvdyIsIl9mb256byIsIl9vcndlbGwiLCJfYmVhZ2xlIiwiX3Zpb2xldCIsIl9vdmVybGF5cyIsInNjYW5saW5lcyIsInNjYW5saW5lIiwicmdiIiwibm9pc2VzIiwiY3J0IiwibW9uaXRvciIsIl9zY3JlZW4iLCJjbGVhclJlY3QiLCJfaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiX3BpeGVscyIsIl9mb3JjZV9yZWRyYXciLCJfZm9yY2VfZmxpcCIsInJlZHJhdyIsInBhbGV0dGUiLCJwaXhlbHMiLCJwdXRJbWFnZURhdGEiLCJ0ZXh0dXJlIiwidXBkYXRlIiwicmVuZGVyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY2VudGVyIiwidG9JbmRleCIsInNpIiwiYnkiLCJieCIsImZnIiwiYmciLCJsdyIsImZpbGVuYW1lIiwidGV4IiwiVGV4dHVyZSIsImZyb21JbWFnZSIsIlNDQUxFX01PREVTIiwiTkVBUkVTVCIsInBpeGVsIiwic3ByaXRlIiwiY2FudmFzQnVmZmVyIiwiY2FudmFzIiwidDMyIiwidDgiLCJyZXZlcnNlIiwiUmFpbmJvdyIsIl9MRSIsInJnYmEiLCJfY291bnQiLCJjdXJyZW50T2Zmc2V0IiwiQ2hpcCIsIl9kYXRhX3NpemUiLCJrZXlzIiwibm9kYXRhIiwiX2RhdGFfZm9ybWF0IiwiX2NlbGxfc2l6ZSIsImRhdGFfc2l6ZSIsImNlbGxfc2l6ZSIsImZsaXAiLCJmb3JjZV9yZWRyYXciLCJmb3JjZV9mbGlwIiwiRm9uem8iLCJmcm9tX2FycmF5X21hc2siLCJibGl0X21hc2siLCJkcmF3IiwiT3J3ZWxsIiwiY2giLCJmbnQiLCJmdyIsImZoIiwiaWR4IiwicHkiLCJ0aWR4IiwiY3IiLCJicyIsInBvcyIsImRyYXdfY2hhciIsInB1dF9jaGFyIiwibW92ZV90byIsIm1vdmVfYnkiLCJzeSIsInR5Iiwic3giLCJ0eCIsImxzIiwiZHkiLCJCZWFnbGUiLCJfeCIsIl95IiwiX2JsaW5rX2hpZGRlbiIsIl9ibGlua3JhdGUiLCJibGluayIsIl92aXNpYmxlIiwiX2NvbG9yIiwicGkiLCJWaW9sZXQiLCJ6IiwiaXNVbmRlZmluZWQiLCJibGl0IiwiT3ZlcmxheSIsIm92ZXJsYXlzIiwiX2NhbnZhc0J1ZmZlciIsIkNhbnZhc0J1ZmZlciIsIl90ZXh0dXJlIiwiZnJvbUNhbnZhcyIsInNjYWxlTW9kZSIsIl9zcHJpdGUiLCJTcHJpdGUiLCJfY29udGV4dCIsImdldENvbnRleHQiLCJhbHBoYSIsImFudGlhbGlhcyIsInN0YWdlIiwicmVuZGVyZXIiLCJTY3JlZW5PdmVybGF5IiwiY3JlYXRlIiwiU2NhbmxpbmVzT3ZlcmxheSIsIl9nYXAiLCJfYWxwaGEiLCJTY2FubGluZU92ZXJsYXkiLCJfcmF0ZSIsIl9zcGVlZCIsImFhIiwiTm9pc2VzT3ZlcmxheSIsIl9yZWQiLCJfZ3JlZW4iLCJfYmx1ZSIsIl9ub2lzZXMiLCJub2lzZSIsInZpc2libGUiLCJyYW5kb20iLCJhZGRDaGlsZCIsIl9ub2lzZUtleXMiLCJSZ2JPdmVybGF5IiwiQ3J0T3ZlcmxheSIsIl9yYWRpdXMiLCJfaW5zaWRlX2FscGhhIiwiX291dHNpZGVfYWxwaGEiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJPdmVybGF5cyIsIl9jcmVhdGVPdmVybGF5IiwiY3R4IiwiQ2xzIiwiZGVmYXVsdHNEZWVwIiwibXgiLCJteSIsIktlbiIsIl9vbktleWRvd24iLCJvbktleWRvd24iLCJfb25LZXl1cCIsIm9uS2V5dXAiLCJfbW9kcyIsIl9qb3lzdGljayIsIl9rZXlzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleUNvZGUiLCJtb2RzIiwiam95c3RpY2siLCJzaGlmdCIsImN0cmwiLCJhbHQiLCJtZXRhIiwibnVtcGFkIiwiYnRuMCIsImJ0bjEiLCJidG4yIiwiYnRuMyIsImJ0bjQiLCJ1cCIsImRvd24iLCJsb2NhdGlvbiIsImV2ZW50RGV0YWlscyIsInN0b3BQcm9wYWdhdGlvbiIsIk1pY2tleSIsIl9kZWZhdWx0X2ZyYW1lIiwiX2ZyYW1lIiwiX2RlZmF1bHRfY29sb3IiLCJpbnRlcmFjdGl2ZSIsIl9vbk1vdXNlRG93biIsIm9uTW91c2VEb3duIiwiX29uTW91c2VNb3ZlIiwib25Nb3VzZU1vdmUiLCJfb25Nb3VzZVVwIiwib25Nb3VzZVVwIiwiX2J0bnMiLCJjb3B5X3JlY3QiLCJzdG9yZSIsImdsb2JhbCIsImJ1dHRvbiIsIm9yaWdpbmFsRXZlbnQiLCJnZXRFdmVudEluZm8iLCJyZXN0b3JlIiwiX2RibENsaWNrRGVsYXkiLCJfZGJsQ2xpY2tEaXN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFPQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFsQkE7O0FBRUE7QUFDQTtBQUNBOztBQWdCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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S0FBSzFGLEVBQVo7QUFBZ0IsTTt1QkFDcEJ4a0IsSyxFQUFPO0FBQ1osWUFBS3FyQixPQUFMO0FBQ0EsWUFBSzdHLEVBQUwsR0FBVXhrQixLQUFWO0FBQ0EsWUFBS2lqQixJQUFMO0FBQ0Q7Ozt5QkFFUTtBQUFFLGNBQU8sS0FBS3dCLEVBQVo7QUFBZ0IsTTt1QkFDcEJ6a0IsSyxFQUFPO0FBQ1osWUFBS3FyQixPQUFMO0FBQ0EsWUFBSzVHLEVBQUwsR0FBVXprQixLQUFWO0FBQ0EsWUFBS2lqQixJQUFMO0FBQ0Q7Ozt5QkFFWTtBQUFFLGNBQU8sS0FBS29ILE1BQVo7QUFBb0IsTTt1QkFDeEJycUIsSyxFQUFPO0FBQ2hCLFlBQUtxckIsT0FBTDtBQUNBLFlBQUtoQixNQUFMLEdBQWNycUIsS0FBZDtBQUNBLFlBQUtpakIsSUFBTDtBQUNEOzs7eUJBRVc7QUFBRSxjQUFPLEtBQUs2SCxLQUFaO0FBQW1CLE07dUJBQ3ZCOXFCLEssRUFBTztBQUNmLFlBQUs4cUIsS0FBTCxHQUFhOXFCLEtBQWI7QUFDRDs7O3lCQUVvQjtBQUFFLGNBQU8sS0FBS3NyQixjQUFaO0FBQTRCOzs7eUJBRTNCO0FBQUUsY0FBTyxLQUFLQyxpQkFBWjtBQUErQjs7Ozs7O21CQXBHdENwQixNIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI0MTg2MDhmMzRhNzY1OTRjYzBjIiwiaW1wb3J0ICdwaXhpLmpzJ1xuaW1wb3J0ICd3ZWItYXVkaW8tZGF3J1xuXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gJy4vdXRpbHMuanMnXG5pbXBvcnQgeyBkZWZhdWx0cywgcnVudGltZV9lcnJvciB9IGZyb20gJy4vZ2xvYmFscy5qcydcblxuaW1wb3J0IGNzcyBmcm9tICcuLi9zdHlsZS9tYWluLmNzcydcbi8vIGltcG9ydCB0IGZyb20gJy4uL2h0bWwvbWFpbi5odG1sJ1xuXG4vLyBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gZWwuaW5uZXJIVE1MID0gdFxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbClcblxuaW1wb3J0IHsgRW1pdHRlciB9IGZyb20gJy4vZW1pdHRlci5qcydcblxuaW1wb3J0IExleGVyIGZyb20gJy4vY29tcGlsZXIvbGV4ZXIuanMnXG5pbXBvcnQgUGFyc2VyIGZyb20gJy4vY29tcGlsZXIvcGFyc2VyLmpzJ1xuaW1wb3J0IFRyYW5zcGlsZXIgZnJvbSAnLi9jb21waWxlci90cmFuc3BpbGVyLmpzJ1xuXG5pbXBvcnQgeyBNZW1vcnkgfSBmcm9tICcuL3ZtL21lbW9yeS5qcydcbmltcG9ydCBNZW1vcnlNYW5hZ2VyIGZyb20gJy4vdm0vbWVtb3J5bWFuYWdlci5qcydcbmltcG9ydCBTdGFjayBmcm9tICcuL3ZtL3N0YWNrLmpzJ1xuaW1wb3J0IEludGVycnVwdCBmcm9tICcuL3ZtL2ludGVycnVwdC5qcydcbmltcG9ydCBHdWlkZW8gZnJvbSAnLi92bS9jaGlwcy9ndWlkZW8uanMnXG5pbXBvcnQgS2VuIGZyb20gJy4vdm0vY2hpcHMva2VuLmpzJ1xuaW1wb3J0IE1pY2tleSBmcm9tICcuL3ZtL2NoaXBzL21pY2tleS5qcydcblxuLy8gaW1wb3J0IHsgVk0gfSBmcm9tICcuL2ludGVycHJldGVyL3ZtLmpzJ1xuXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgbGV0IHNyYyA9IHJlcXVpcmUoJ3JhdyEuLi90ZXN0L3Rlc3QxLngzMicpXG4vLyAgIGNvbnNvbGUubG9nKHNyYylcblxuLy8gICBsZXQgdm0gPSBuZXcgVk0oKVxuLy8gICB2bS5sb2FkKHNyYylcbi8vICAgdm0ucnVuKClcbi8vICAgdm0uZHVtcCgpXG4vLyB9LCAxMDApXG5cbi8vIGNvbnNvbGUubG9nKGhleHkuaGV4eSh2bS5tZW1fYnVmZmVyLCB7IG9mZnNldDogMCwgbGVuZ3RoOiA1MTIsIGRpc3BsYXlfb2Zmc2V0OiAweDAwLCB3aWR0aDogMTYsIGNhcHM6ICd1cHBlcicsIGluZGVudDogMiB9KSlcblxuZXhwb3J0IGNvbnN0IF9TVE9QUEVEID0gMFxuZXhwb3J0IGNvbnN0IF9SVU5OSU5HID0gMVxuZXhwb3J0IGNvbnN0IF9QQVVTRUQgPSAyXG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgRW1pdHRlciB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnJlc2V0KClcblxuICAgIHRoaXMuX3VwZGF0ZXMgPSB7XG4gICAgICBxdWV1ZTogW10sXG5cbiAgICAgIGFkZDogb3B0aW9ucyA9PiB7XG4gICAgICAgIGxldCBvID0gXy5nZXQob3B0aW9ucywgJ29iamVjdCcpXG4gICAgICAgIGlmIChvICYmICFvLl9faW5VcGRhdGVzKSB7XG4gICAgICAgICAgby5fX2luVXBkYXRlcyA9IHRydWVcbiAgICAgICAgICB0aGlzLl91cGRhdGVzLnF1ZXVlLnB1c2gob3B0aW9ucylcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBvID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlcy5xdWV1ZSA9IF8ucmVqZWN0KHRoaXMuX3VwZGF0ZXMucXVldWUsIHsgb2JqZWN0OiBvIH0pXG4gICAgICAgIG8uX19pblVwZGF0ZXMgPSBmYWxzZVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGl0dGxlRW5kaWFuXG4gICAgbGV0IGIgPSBuZXcgQXJyYXlCdWZmZXIoNClcbiAgICBsZXQgYSA9IG5ldyBVaW50MzJBcnJheShiKVxuICAgIGxldCBjID0gbmV3IFVpbnQ4QXJyYXkoYilcbiAgICBhWzBdID0gMHhkZWFkYmVlZlxuICAgIHRoaXMuTEUgPSBjWzBdID09PSAweGVmXG5cbiAgICB0aGlzLl9tZW1vcnkgPSBuZXcgTWVtb3J5KHRoaXMpXG4gICAgdGhpcy5fbWVtb3J5TWFuYWdlciA9IG5ldyBNZW1vcnlNYW5hZ2VyKHRoaXMpXG4gICAgdGhpcy5fc3RhY2sgPSBuZXcgU3RhY2sodGhpcylcbiAgICB0aGlzLl9pbnRlcnJ1cHRzID0gbmV3IEludGVycnVwdCh0aGlzKVxuXG4gICAgdGhpcy5fZ3VpZGVvID0gbmV3IEd1aWRlbyh0aGlzKVxuICAgIHRoaXMuX2d1aWRlby5jcmVhdGVDaGlwcygpXG5cbiAgICB0aGlzLl9rZW4gPSBuZXcgS2VuKHRoaXMpXG4gICAgdGhpcy5fbWlja2V5ID0gbmV3IE1pY2tleSh0aGlzKVxuXG4gICAgdGhpcy5fb25SZXNpemUgPSB0aGlzLm9uUmVzaXplLmJpbmQodGhpcylcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25SZXNpemUpXG5cbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBQSVhJLnRpY2tlci5zaGFyZWQuYWRkKGRlbHRhID0+IHtcbiAgICAgIGlmICh0aGF0LnN0YXR1cyA9PT0gX1JVTk5JTkcpIHtcbiAgICAgICAgdGhhdC50aWNrKHBlcmZvcm1hbmNlLm5vdygpLCBkZWx0YSlcblxuICAgICAgICAvLyBsZXQgcmVuZGVyID0gZmFsc2VcblxuICAgICAgICBmb3IgKGxldCBxIG9mIHRoYXQuX3VwZGF0ZXMucXVldWUpIHtcbiAgICAgICAgICBxLm9iamVjdC5fX2luVXBkYXRlcyA9IGZhbHNlXG4gICAgICAgICAgLy8gaWYgKHEucmVuZGVyKSB7XG4gICAgICAgICAgICAvLyByZW5kZXIgPSB0cnVlXG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIGlmIChxLmNiKSB7XG4gICAgICAgICAgICBxLmNiKHEub2JqZWN0LCAuLi4ocS5hcmdzIHx8IFtdKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGF0Ll91cGRhdGVzLnF1ZXVlID0gW11cblxuICAgICAgICAvLyBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgLy8gdGhhdC5fZ3VpZGVvLnJlbmRlcmVyLnJlbmRlcih0aGF0Ll9ndWlkZW8uc3RhZ2UpXG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYXN5bmModGhpcywgdGhpcy5zdGFydCwgMTAwKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fZ3VpZGVvLmRlc3Ryb3koKVxuICAgIHRoaXMuX2tlbi5kZXN0cm95KClcbiAgICB0aGlzLl9taWNrZXkuZGVzdHJveSgpXG4gICAgdGhpcy5faW50ZXJydXB0cy5kZXN0cm95KClcbiAgICB0aGlzLl9tZW1vcnlNYW5hZ2VyLmRlc3Ryb3koKVxuICAgIHRoaXMuX21lbW9yeS5kZXN0cm95KClcbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSAwXG4gICAgdGhpcy5fcHJvZ3JhbSA9IHtcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGNvZGU6IHVuZGVmaW5lZCxcbiAgICAgIGZuOiB1bmRlZmluZWQsXG4gICAgfVxuICB9XG5cbiAgZGVmYXVsdHMgKG5hbWUpIHsgcmV0dXJuIF8uZ2V0KGRlZmF1bHRzLCBuYW1lKSB9XG5cbiAgZ2V0IHN0YXR1cyAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXMgfVxuICBzZXQgc3RhdHVzICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9zdGF0dXMgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGdldCBtZW1vcnkgKCkgeyByZXR1cm4gdGhpcy5fbWVtb3J5IH1cbiAgZ2V0IG1lbW9yeU1hbmFnZXIgKCkgeyByZXR1cm4gdGhpcy5fbWVtb3J5TWFuYWdlciB9XG4gIGdldCBpbnRlcnJ1cHRzICgpIHsgcmV0dXJuIHRoaXMuX2ludGVycnVwdHMgfVxuXG4gIGdldCB1cGRhdGVzICgpIHsgcmV0dXJuIHRoaXMuX3VwZGF0ZXMgfVxuXG4gIGdldCBndWlkZW8gKCkgeyByZXR1cm4gdGhpcy5fZ3VpZGVvIH1cbiAgZ2V0IGtleWJvYXJkX2NoaXAgKCkgeyByZXR1cm4gdGhpcy5fa2VuIH1cbiAgZ2V0IG1pY2tleSAoKSB7IHJldHVybiB0aGlzLl9taWNrZXkgfVxuXG4gIGdldCBzdGFnZSAoKSB7IHJldHVybiB0aGlzLl9ndWlkZW8uX3N0YWdlIH1cbiAgZ2V0IHJlbmRlcmVyICgpIHsgcmV0dXJuIHRoaXMuX2d1aWRlby5fcmVuZGVyZXIgfVxuXG4gIGdldCBwcm9ncmFtICgpIHsgcmV0dXJuIHRoaXMuX3Byb2dyYW0gfVxuXG4gIG9uUmVzaXplICgpIHtcbiAgICB0aGlzLl9ndWlkZW8uZW1pdCgncmVzaXplJylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgaGx0IChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPiAwKSB7XG4gICAgICBydW50aW1lX2Vycm9yKGNvZGUpXG4gICAgfVxuICAgIHRoaXMuc3RvcCgpXG4gIH1cblxuICBsb2FkIChwYXRoKSB7XG4gICAgbGV0IHQgPSBuZXcgTGV4ZXIoKVxuICAgIGxldCB0b2tlbnMgPSB0LnJ1bihwYXRoKVxuICAgIGNvbnNvbGUubG9nKHRva2VucylcblxuICAgIGxldCBwID0gbmV3IFBhcnNlcigpXG4gICAgbGV0IG5vZGVzID0gcC5ydW4odG9rZW5zKVxuICAgIGNvbnNvbGUubG9nKG5vZGVzKVxuXG4gICAgaWYgKHAuZXJyb3JzID09PSAwKSB7XG4gICAgICBsZXQgdCA9IG5ldyBUcmFuc3BpbGVyKClcbiAgICAgIGxldCBjb2RlID0gdC5ydW4obm9kZXMpXG4gICAgICBjb25zb2xlLmxvZyhjb2RlKVxuXG4gICAgICBpZiAodC5lcnJvcnMgPT09IDApIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbS5jb2RlID0gY29kZVxuICAgICAgICB0aGlzLl9wcm9ncmFtLnBhdGggPSBwYXRoXG4gICAgICAgIHRoaXMuX3Byb2dyYW0uZm4gPSBuZXcgRnVuY3Rpb24oWydhcmdzJ10sIHRoaXMuX3Byb2dyYW0uY29kZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBydW4gKC4uLmFyZ3MpIHtcbiAgICBsZXQgZm4gPSBfLmdldCh0aGlzLCAnX3Byb2dyYW0uZm4nKVxuICAgIHJldHVybiBmbiA/IGZuLmFwcGx5KHRoaXMsIGFyZ3MpIDogbnVsbFxuICB9XG5cbiAgc3RhcnQgKCkge1xuICAgIHRoaXMuc3RhdHVzID0gX1JVTk5JTkdcbiAgICB0aGlzLnRlc3QoKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdG9wICgpIHtcbiAgICB0aGlzLnN0YXR1cyA9IF9TVE9QUEVEXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHBhdXNlICgpIHtcbiAgICB0aGlzLnN0YXR1cyA9IF9QQVVTRURcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcmVzdW1lICgpIHtcbiAgICB0aGlzLnN0YXR1cyA9IF9SVU5OSU5HXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICB0aGlzLl9tZW1vcnkudGljayh0KVxuICAgIHRoaXMuX21lbW9yeU1hbmFnZXIudGljayh0KVxuICAgIHRoaXMuX2tlbi50aWNrKHQpXG4gICAgdGhpcy5fbWlja2V5LnRpY2sodClcbiAgICB0aGlzLl9pbnRlcnJ1cHRzLnRpY2sodClcbiAgICB0aGlzLl9ndWlkZW8udGljayh0KVxuICB9XG5cbiAgdGVzdCAoKSB7XG4gIH1cblxufVxuXG5leHBvcnQgbGV0IG1haW4gPSBuZXcgTWFpbigpXG53aW5kb3cuYXBwID0gbWFpblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL21haW4uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwaXhpLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGl4aS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYi1hdWRpby1kYXdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWItYXVkaW8tZGF3XCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgZWxlY3Ryb24gPSByZXF1aXJlKCdlbGVjdHJvbicpXG5jb25zdCB7IHJlbW90ZSwgc2NyZWVuLCBkaWFsb2cgfSA9IGVsZWN0cm9uXG5jb25zdCB7IGFwcCwgQnJvd3NlcldpbmRvdyB9ID0gcmVtb3RlXG5cbmNvbnN0IF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlLXBsdXMnKVxuXy5leHRlbmQoXywgcmVxdWlyZSgnbG9kYXNoJykpXG53aW5kb3cuXyA9IF9cblxuXy50ZW1wbGF0ZVNldHRpbmdzLmludGVycG9sYXRlID0gLyN7KFtcXHNcXFNdKz8pfS9nXG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMtcHJvbWlzZScpXG5cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgcmFmIGZyb20gJ3JhZidcbmltcG9ydCBwZXJmb3JtYW5jZSBmcm9tICdwZXJmb3JtYW5jZS1ub3cnXG5cbmltcG9ydCB7IE1peGluLCBtaXggfSBmcm9tICdtaXh3aXRoJ1xud2luZG93Lk1peGluID0gTWl4aW5cbndpbmRvdy5taXggPSBtaXhcblxubGV0IHVzZXJQYXRoID0gcGF0aC5qb2luKGFwcC5nZXRBcHBQYXRoKCksICcvdXNlcicpXG5pZiAoIWZzLmV4aXN0c1N5bmModXNlclBhdGgpKSB7XG4gIGZzLm1rZGlycyh1c2VyUGF0aClcbn1cblxubGV0IElTX1dJTiA9IC9ed2luLy50ZXN0KHByb2Nlc3MucGxhdGZvcm0pXG5sZXQgSVNfT1NYID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2RhcndpbidcbmxldCBJU19MSU5VWCA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICdsaW51eCdcbmxldCBkaXJzID0ge1xuICBidWlsZDogX19kaXJuYW1lLFxuICBjd2Q6IGFwcC5nZXRBcHBQYXRoKCksXG4gIGhvbWU6IGFwcC5nZXRQYXRoKCdob21lJyksXG4gIGFwcDogYXBwLmdldFBhdGgoJ2FwcERhdGEnKSxcbiAgdXNlcjogdXNlclBhdGgsXG4gIHRtcDogYXBwLmdldFBhdGgoJ3RlbXAnKSxcbiAgcm9vdDogYXBwLmdldFBhdGgoJ2V4ZScpLFxuICBub2RlX21vZHVsZXM6IHBhdGguam9pbih1c2VyUGF0aCwgJ25vZGVfbW9kdWxlcycpLFxuICB1c2VyX3BrZzogcGF0aC5qb2luKHVzZXJQYXRoLCAncGFja2FnZS5qc29uJyksXG59XG5cbmxldCBuYW1lID0gYXBwLmdldE5hbWUoKVxubGV0IHZlcnNpb24gPSBhcHAuZ2V0VmVyc2lvbigpXG5cbmxldCBvcGVuRmlsZSA9ICguLi5hcmdzKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRpYWxvZy5zaG93T3BlbkRpYWxvZy5hcHBseShkaWFsb2csIGFyZ3MpXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmxldCBzYXZlRmlsZSA9ICguLi5hcmdzKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRpYWxvZy5zaG93U2F2ZURpYWxvZy5hcHBseShkaWFsb2csIGFyZ3MpXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmxldCBtZXNzYWdlQm94ID0gKC4uLmFyZ3MpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGlhbG9nLnNob3dNZXNzYWdlQm94LmFwcGx5KGRpYWxvZywgYXJncylcbiAgfVxuICBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxubGV0IG1hcF9nZXR0ZXJzID0gKHNvdXJjZSwgdGFyZ2V0LCBkZWZzKSA9PiB7XG4gIGZvciAobGV0IGsgaW4gZGVmcykge1xuICAgIGxldCBmbiA9IGRlZnNba11cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc291cmNlLCBrLCB7XG4gICAgICBnZXQ6ICgpID0+IGZuLmNhbGwodGFyZ2V0LCBzb3VyY2UpLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9KVxuICB9XG59XG5cbmxldCBtYXBfZ2V0dGVyc19yZXR1cm5fdGhpcyA9IChzb3VyY2UsIHRhcmdldCwgZGVmcykgPT4ge1xuICBmb3IgKGxldCBrIGluIGRlZnMpIHtcbiAgICBsZXQgZm4gPSBkZWZzW2tdXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNvdXJjZSwgaywge1xuICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgIGZuLmNhbGwodGFyZ2V0LCBzb3VyY2UpXG4gICAgICAgIHJldHVybiBzb3VyY2VcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH0pXG4gIH1cbn1cblxubGV0IG5vdyA9ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpXG5cbmxldCBkZWxheSA9IG1zID0+IHtcbiAgLy8gc2V0VGltZW91dCgoKSA9PiB7fSwgbXMpXG4gIGxldCB0ID0gcGVyZm9ybWFuY2Uubm93KClcbiAgbGV0IGMgPSB0XG4gIHdoaWxlIChjIC0gdCA8PSBtcykge1xuICAgIC8vIFBJWEkudGlja2VyLnNoYXJlZC51cGRhdGUoYylcbiAgICBjID0gcGVyZm9ybWFuY2Uubm93KClcbiAgfVxufVxuXG5sZXQgYXN5bmMgPSAoY29udGV4dCwgZm4sIGFyZ3MsIGRlbGF5KSA9PiB7XG4gIGlmIChfLmlzTnVtYmVyKGFyZ3MpKSB7XG4gICAgZGVsYXkgPSBhcmdzXG4gICAgYXJncyA9IFtdXG4gIH1cbiAgaWYgKCFfLmlzQXJyYXkoYXJncykpIHtcbiAgICBhcmdzID0gW2FyZ3NdXG4gIH1cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZm4uY2FsbChjb250ZXh0LCAuLi5hcmdzKVxuICB9LCBkZWxheSB8fCAxKVxufVxuXG5sZXQgYnVmZmVyX3RvX3N0cmluZyA9IGIgPT4ge1xuICBsZXQgbGVuID0gYi5sZW5ndGhcbiAgbGV0IGkgPSAwXG4gIGxldCBzID0gJydcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBzICs9IGJbaSsrXS50b1N0cmluZygxNilcbiAgfVxuICByZXR1cm4gc1xufVxuXG5sZXQgc3RyaW5nX3RvX2J1ZmZlciA9IHN0ciA9PiB7XG4gIGxldCBsZW4gPSBzdHIubGVuZ3RoXG4gIGxldCBpID0gMFxuICBsZXQgYiA9IG5ldyBCdWZmZXIoTWF0aC50cnVuYyhzdHIubGVuZ3RoIC8gMikpXG4gIGxldCB4ID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIGxldCBoZXggPSBzdHIuc3Vic3RyKGksIDIpXG4gICAgYlt4KytdID0gcGFyc2VJbnQoaGV4LCAxNilcbiAgICBpICs9IDJcbiAgfVxuICByZXR1cm4gYlxufVxuXG5sZXQgc3RyaW5nX2J1ZmZlciA9IChzdHIsIGxlbiA9IDApID0+IHtcbiAgbGVuID0gbGVuIHx8IHN0ci5sZW5ndGhcbiAgdmFyIGIgPSBuZXcgQnVmZmVyKGxlbilcbiAgYi53cml0ZShzdHIsIDAsIHN0ci5sZW5ndGgsICdhc2NpaScpXG4gIHJldHVybiBiXG59XG5cbmxldCBub3JtYWxpemVNZXNzYWdlcyA9ICguLi5tZXNzYWdlKSA9PiB7XG4gIGxldCBhcmdzID0gW11cbiAgZm9yIChsZXQgbSBvZiBtZXNzYWdlKSB7XG4gICAgaWYgKF8uaXNBcnJheShtKSkge1xuICAgICAgYXJncy5wdXNoKG0uam9pbignLCAnKSlcbiAgICB9XG4gICAgZWxzZSBpZiAoXy5pc1N0cmluZyhtKSkge1xuICAgICAgYXJncy5wdXNoKG0pXG4gICAgfVxuICB9XG4gIHJldHVybiBhcmdzXG59XG5cbmxldCBoZXggPSAodmFsdWUsIHNpemUgPSAzMikgPT4gJyQnICsgXy5wYWRTdGFydCh2YWx1ZS50b1N0cmluZygxNiksIE1hdGgudHJ1bmMoc2l6ZSAvIDQpLCAnMCcpXG5cbmxldCBidWZmZXJfZHVtcCA9IChidWZmZXIsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBsZXQgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDE2XG4gIGxldCBjYXBzID0gb3B0aW9ucy5jYXBzIHx8ICd1cHBlcidcbiAgbGV0IGluZGVudCA9IF8ucmVwZWF0KCcgJywgb3B0aW9ucy5pbmRlbnQgfHwgMClcblxuICBsZXQgemVybyA9IChuLCBtYXgpID0+IHtcbiAgICBuID0gbi50b1N0cmluZygxNilcbiAgICBpZiAoY2FwcyA9PT0gJ3VwcGVyJykgeyBuID0gbi50b1VwcGVyQ2FzZSgpIH1cbiAgICB3aGlsZSAobi5sZW5ndGggPCBtYXgpIHtcbiAgICAgIG4gPSAnMCcgKyBuXG4gICAgfVxuICAgIHJldHVybiBuXG4gIH1cblxuICBsZXQgbGVuID0gTWF0aC5taW4oYnVmZmVyLmJ5dGVMZW5ndGgsIG9wdGlvbnMubGVuZ3RoIHx8IGJ1ZmZlci5ieXRlTGVuZ3RoKVxuICBsZXQgcm93cyA9IE1hdGguY2VpbChsZW4gLyB3aWR0aClcbiAgbGV0IGxhc3QgPSBsZW4gJSB3aWR0aCB8fCB3aWR0aFxuICBsZXQgb2Zmc2V0TGVuZ3RoID0gbGVuLnRvU3RyaW5nKDE2KS5sZW5ndGhcbiAgaWYgKG9mZnNldExlbmd0aCA8IDYpIHsgb2Zmc2V0TGVuZ3RoID0gNiB9XG5cbiAgbGV0IGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcilcblxuICBsZXQgc3RyID0gaW5kZW50ICsgJ09mZnNldCdcbiAgd2hpbGUgKHN0ci5sZW5ndGggPCBvZmZzZXRMZW5ndGgpIHtcbiAgICBzdHIgKz0gJyAnXG4gIH1cblxuICBzdHIgKz0gJyAgJ1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgIHN0ciArPSAnICcgKyB6ZXJvKGksIDIpXG4gIH1cblxuICBpZiAobGVuKSB7XG4gICAgc3RyICs9ICdcXG4nXG4gIH1cblxuICBsZXQgYiA9IDBcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgIHN0ciArPSBpbmRlbnQgKyB6ZXJvKGIsIG9mZnNldExlbmd0aCkgKyAnICAnXG4gICAgbGV0IGxhc3RCeXRlcyA9IGkgPT09IHJvd3MgLSAxID8gbGFzdCA6IHdpZHRoXG4gICAgbGV0IGxhc3RTcGFjZXMgPSB3aWR0aCAtIGxhc3RCeXRlc1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsYXN0Qnl0ZXM7IGorKykge1xuICAgICAgc3RyICs9ICcgJyArIHplcm8oYXJyW2JdLCAyKVxuICAgICAgYisrXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsYXN0U3BhY2VzOyBqKyspIHtcbiAgICAgIHN0ciArPSAnICAgJ1xuICAgIH1cblxuICAgIGIgLT0gbGFzdEJ5dGVzXG4gICAgc3RyICs9ICcgICAnXG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxhc3RCeXRlczsgaisrKSB7XG4gICAgICBsZXQgdiA9IGFycltiXVxuICAgICAgc3RyICs9IHYgPiAzMSAmJiB2IDwgMTI3IHx8IHYgPiAxNTkgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKHYpIDogJy4nXG4gICAgICBiKytcbiAgICB9XG5cbiAgICBzdHIgKz0gJ1xcbidcbiAgfVxuXG4gIHJldHVybiBzdHJcbn1cblxubGV0IHV0b2EgPSBzdHIgPT4gd2luZG93LmJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpKVxuXG5sZXQgYXRvdSA9IHN0ciA9PiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKHdpbmRvdy5hdG9iKHN0cikpKVxuXG53aW5kb3cudXRvYSA9IHV0b2FcbndpbmRvdy5hdG91ID0gYXRvdVxuXG5cbmxldCBpbnN0YW5jZUZ1bmN0aW9uID0gKHRhcmdldCwgbmFtZSwgZm4sIGZvcmNlID0gZmFsc2UpID0+IHtcbiAgaWYgKGZvcmNlIHx8ICF0YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICB2YWx1ZTogZm4sXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9KVxuICB9XG59XG5cbmxldCBpbnN0YW5jZUZ1bmN0aW9ucyA9ICh0YXJnZXQsIHNvdXJjZSwgbmFtZXMpID0+IHtcbiAgZm9yIChsZXQgbiBvZiBuYW1lcykge1xuICAgIGlmIChfLmlzQXJyYXkobikpIHtcbiAgICAgIGluc3RhbmNlRnVuY3Rpb24odGFyZ2V0LCBuWzBdLCBzb3VyY2VbblsxXV0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaW5zdGFuY2VGdW5jdGlvbih0YXJnZXQsIG4sIHNvdXJjZVtuXSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgXyxcbiAgbmFtZSxcbiAgdmVyc2lvbixcbiAgZWxlY3Ryb24sXG4gIGRpYWxvZyxcbiAgb3BlbkZpbGUsXG4gIHNhdmVGaWxlLFxuICBtZXNzYWdlQm94LFxuICByZW1vdGUsXG4gIHNjcmVlbixcbiAgQnJvd3NlcldpbmRvdyxcbiAgYXBwLFxuICBmcyxcbiAgcGF0aCxcbiAgdXNlclBhdGgsXG4gIElTX1dJTixcbiAgSVNfT1NYLFxuICBJU19MSU5VWCxcbiAgZGlycyxcbiAgcmFmLFxuICBub3csXG4gIE1peGluLFxuICBtaXgsXG4gIG1hcF9nZXR0ZXJzLFxuICBtYXBfZ2V0dGVyc19yZXR1cm5fdGhpcyxcbiAgZGVsYXksXG4gIGFzeW5jLFxuICBidWZmZXJfdG9fc3RyaW5nLFxuICBzdHJpbmdfdG9fYnVmZmVyLFxuICBzdHJpbmdfYnVmZmVyLFxuICBub3JtYWxpemVNZXNzYWdlcyxcbiAgaGV4LFxuICBidWZmZXJfZHVtcCxcbiAgdXRvYSxcbiAgYXRvdSxcbiAgaW5zdGFuY2VGdW5jdGlvbixcbiAgaW5zdGFuY2VGdW5jdGlvbnMsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdXRpbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJhZlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJhZlwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBlcmZvcm1hbmNlLW5vd1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBlcmZvcm1hbmNlLW5vd1wiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1peHdpdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtaXh3aXRoXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJlbGVjdHJvblwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuZGVyc2NvcmUtcGx1c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVuZGVyc2NvcmUtcGx1c1wiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaFwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1wcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnMtcHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJQSVhJLlBvaW50LnByb3RvdHlwZS5kaXN0YW5jZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIE1hdGguc3FydCgodGhpcy54IC0gdGFyZ2V0LngpICogKHRoaXMueCAtIHRhcmdldC54KSArICh0aGlzLnkgLSB0YXJnZXQueSkgKiAodGhpcy55IC0gdGFyZ2V0LnkpKVxufVxuXG5QSVhJLlBvaW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF8udGVtcGxhdGUoJygje3h9LCAje3l9KScpKHRoaXMpXG59XG5cblBJWEkuUmVjdGFuZ2xlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF8udGVtcGxhdGUoJygje3h9LCAje3l9LCAje3ggKyB3aWR0aH0sICN7eSArIGhlaWdodH0pKCN7d2lkdGh9LCAje2hlaWdodH0pJykodGhpcylcbn1cblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gIGJvdW5kc2NoZWNrOiBmYWxzZSxcblxuICB0eXBlOiAnaTMyJyxcblxuICBtZW1vcnk6IHtcbiAgICBzaXplOiA1MTIgKiAxMDI0LFxuICB9LFxuXG4gIG1lbW9yeV9tYW5hZ2VyOiB7XG4gICAgY29sbGVjdF9kZWxheTogMzAgKiAxMDAwLFxuICB9LFxuXG4gIGd1aWRlbzoge1xuICAgIHdpZHRoOiAzMjAsXG4gICAgaGVpZ2h0OiAyNDAsXG4gICAgc2NhbGU6IDQsXG4gIH0sXG5cbiAgcmFpbmJvdzoge1xuICAgIGNvdW50OiAxNixcbiAgICBkYXRhX2Zvcm1hdDogJ2kzMicsXG4gIH0sXG5cbiAgZm9uem86IHtcbiAgICBjb3VudDogMjU2LFxuICAgIHdpZHRoOiA3LFxuICAgIGhlaWdodDogOSxcbiAgfSxcblxuICBvcndlbGw6IHtcbiAgICB3aWR0aDogMzIwIC8gNCxcbiAgICBoZWlnaHQ6IDI0MCAvIDYsXG4gIH0sXG5cbiAgYmVhZ2xlOiB7XG4gICAgd2lkdGg6IDQsXG4gICAgaGVpZ2h0OiA2LFxuICAgIGNvbG9yOiAxNSxcbiAgICBibGlua3JhdGU6IDUwMCxcbiAgfSxcblxuICB2aW9sZXQ6IHtcbiAgICBjb3VudDogMzIsXG4gICAgd2lkdGg6IDE2LFxuICAgIGhlaWdodDogMTYsXG4gIH0sXG5cbiAga2VuOiB7XG4gICAgY291bnQ6IDI1NixcbiAgfSxcblxuICBtaWNrZXk6IHtcbiAgICBjb3VudDogMTcsXG4gICAgd2lkdGg6IDYsXG4gICAgaGVpZ2h0OiA3LFxuICAgIGNvbG9yOiAxNSxcbiAgICBmcmFtZTogMCxcbiAgICBkYmxDbGlja0RlbGF5OiAyNTAsXG4gICAgZGJsQ2xpY2tEaXN0YW5jZTogOCxcbiAgfSxcblxuICBuZXR3b3JrOiB7XG4gICAgY291bnQ6IDMyICogMTAyNCxcbiAgfSxcblxuICBhbHRvOiB7XG4gICAgY291bnQ6IDQgKiAxMDI0LFxuICB9LFxuXG4gIGNoYXJzX21hcDoge1xuICAgICcuJzogMCxcbiAgICByOiAxLFxuICAgIGc6IDIsXG4gICAgeTogMyxcbiAgICBiOiA0LFxuICAgIHA6IDUsXG4gICAgYzogNixcbiAgICBFOiA3LFxuICAgIGU6IDgsXG4gICAgUjogOSxcbiAgICBHOiAxMCxcbiAgICBZOiAxMSxcbiAgICBCOiAxMixcbiAgICBQOiAxMyxcbiAgICBDOiAxNCxcbiAgICB3OiAxNSxcbiAgICAnICc6IDE2LFxuICB9XG59XG5cbmxldCBlcnJvcnMgPSAwXG5cbmxldCBlcnJvciA9ICh0LCBtc2cpID0+IHtcbiAgZGVidWdnZXJcbiAgZXJyb3JzKytcbiAgY29uc29sZS5lcnJvcihtc2csICdhdCcsIHQudmFsdWUsICcoJyArIHQucm93ICsgJywnICsgdC5jb2wgKyAnKScpXG59XG5cbmxldCBydW50aW1lX2Vycm9yID0gY29kZSA9PiB7XG4gIGxldCBlID0gJ1Vua25vd24gcnVudGltZSBlcnJvcidcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSAweDAxOlxuICAgICAgZSA9ICdPdXQgb2YgbWVtb3J5J1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDI6XG4gICAgICBlID0gJ1N0YWNrIHVuZGVyZmxvdydcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDAzOlxuICAgICAgZSA9ICdTdGFjayBvdmVyZmxvdydcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA0OlxuICAgICAgZSA9ICdJbnZhbGlkIHN0YWNrIGFkZHJlc3MnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNTpcbiAgICAgIGUgPSAnU3RhY2sgYWRkcmVzcyBhbHJlYWR5IGFzc2lnbmVkJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDY6XG4gICAgICBlID0gJ0ludGVycnVwdCBhbHJlYWR5IGV4aXN0cydcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA3OlxuICAgICAgZSA9ICdJbnRlcnJ1cHQgbm90IGZvdW5kJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDg6XG4gICAgICBlID0gJ0FkZHJlc3Mgb3V0IG9mIGJvdW5kcydcbiAgICAgIGJyZWFrXG4gIH1cbiAgY29uc29sZS5lcnJvcihlKVxufVxuXG5sZXQgaW9fZXJyb3IgPSBjb2RlID0+IHtcbiAgbGV0IGUgPSAnSS9PIHJ1bnRpbWUgZXJyb3InXG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgMHgwMTpcbiAgICAgIGUgPSAnRmlsZSBub3QgZm91bmQnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwMjpcbiAgICAgIGUgPSAnQ2Fubm90IG9wZW4gZmlsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDAzOlxuICAgICAgZSA9ICdDYW5ub3QgY2xvc2UgZmlsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA0OlxuICAgICAgZSA9ICdDYW5ub3QgbG9jayBmaWxlJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDU6XG4gICAgICBlID0gJ0Nhbm5vdCB1bmxvY2sgZmlsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA2OlxuICAgICAgZSA9ICdJbnZhbGlkIGZpbGUgaWQnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNzpcbiAgICAgIGUgPSAnQSBmbG9wcHkgaXMgYWxyZWFkeSBpbiB0aGUgZHJpdmUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwODpcbiAgICAgIGUgPSAnTm8gZmxvcHB5IGluIGRyaXZlJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDk6XG4gICAgICBlID0gJ0Nhbm5vdCBkZWxldGUgZmlsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDEwOlxuICAgICAgZSA9ICdEcml2ZSBpcyBub3Qgc3Bpbm5pbmcnXG4gICAgICBicmVha1xuICB9XG4gIGNvbnNvbGUuZXJyb3IoZSlcbn1cblxuXG5leHBvcnQge1xuICBkZWZhdWx0cyxcbiAgZXJyb3JzLFxuICBlcnJvcixcbiAgcnVudGltZV9lcnJvcixcbiAgaW9fZXJyb3IsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvZ2xvYmFscy5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL2Nzc25leHQtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uL25vZGVfbW9kdWxlcy9jc3NuZXh0LWxvYWRlci9pbmRleC5qcyEuL21haW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL2Nzc25leHQtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3R5bGUvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zdHlsZS9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHVCQUErQztFQUMvQyxZQUF5QjtDQUMxQjs7QUFFRDtFQUNFLHdCQUF3QjtDQUN6QlwiLFwiZmlsZVwiOlwibWFpbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoLi9jb2xvcnMuY3NzKTtcXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbmNhbnZhcyB7XFxuICBjdXJzb3I6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L2Nzc25leHQtbG9hZGVyIS4vc3R5bGUvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW87XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbWVtbztcblx0XHR9O1xuXHR9LFxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qoc2VsZi5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuXHR9KSxcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG5cdH0pLFxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2Vcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XG5cdHJldHVybiBsaW5rRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdGlmKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XG5cblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKVxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBjbGFzcyBFdmVudCB7XG5cbiAgY29uc3RydWN0b3IgKHRhcmdldCwgbmFtZSwgZGF0YSwgYnViYmxlcyA9IHRydWUpIHtcbiAgICB0aGlzLl9fZXZlbnRPYmplY3QgPSB0cnVlXG4gICAgdGhpcy50aW1lU3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKVxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0XG4gICAgdGhpcy50eXBlID0gbmFtZVxuICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICB0aGlzLmJ1YmJsZXMgPSBidWJibGVzXG4gICAgdGhpcy5zdG9wcGVkID0gZmFsc2VcbiAgICB0aGlzLnN0b3BwZWRJbW1lZGlhdGUgPSBmYWxzZVxuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlXG4gIH1cblxuICBzdG9wICgpIHtcbiAgICB0aGlzLnN0b3BwZWQgPSB0cnVlXG4gIH1cblxuICBzdG9wSW1tZWRpYXRlICgpIHtcbiAgICB0aGlzLnN0b3BwZWRJbW1lZGlhdGUgPSB0cnVlXG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24gKCkge1xuICAgIHRoaXMuc3RvcHBlZCA9IHRydWVcbiAgfVxuXG4gIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAoKSB7XG4gICAgdGhpcy5zdG9wcGVkSW1tZWRpYXRlID0gdHJ1ZVxuICB9XG5cbiAgY2FuY2VsQnViYmxlICgpIHtcbiAgICB0aGlzLmJ1YmJsZXMgPSBmYWxzZVxuICB9XG5cbiAgcHJldmVudERlZmF1bHQgKCkge1xuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWVcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBFbWl0dGVyIHtcblxuICBvbiAobmFtZSwgZm4sIG9yZGVyID0gMCkge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fVxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSA9IHRoaXMuX2xpc3RlbmVyc1tuYW1lXSB8fCBbXVxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXS5wdXNoKHsgZm4sIG9yZGVyIH0pXG4gICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdID0gXy5zb3J0QnkodGhpcy5fbGlzdGVuZXJzW25hbWVdLCAnb3JkZXInKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBvbmNlIChuYW1lLCBmbikge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fVxuXG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgbGV0IG9uY2VIYW5kbGVyV3JhcHBlciA9ICgpID0+IHtcbiAgICAgIGZuLmFwcGx5KHRoYXQub2ZmKG5hbWUsIG9uY2VIYW5kbGVyV3JhcHBlciksIGFyZ3VtZW50cylcbiAgICB9XG4gICAgb25jZUhhbmRsZXJXcmFwcGVyLl9vcmlnaW5hbEhhbmRsZXIgPSBmblxuXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgb25jZUhhbmRsZXJXcmFwcGVyKVxuICB9XG5cbiAgb2ZmIChuYW1lLCBmbikge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fVxuXG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgbGV0IGxpc3QgPSB0aGlzLl9saXN0ZW5lcnNbbmFtZV1cbiAgICBsZXQgaSA9IGZuID8gbGlzdC5sZW5ndGggOiAwXG5cbiAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgaWYgKGxpc3RbaV0uZm4gPT09IGZuIHx8IGxpc3RbaV0uX29yaWdpbmFsSGFuZGxlciA9PT0gZm4pIHtcbiAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXy5pc0VtcHR5KGxpc3QpKSB7XG4gICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW25hbWVdXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGVtaXQgKG5hbWUsIGRhdGEpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cblxuICAgIGxldCBvcmlnRXZlbnREYXRhXG5cbiAgICBpZiAoIWRhdGEgfHwgZGF0YS5fX2V2ZW50T2JqZWN0ICE9PSB0cnVlKSB7XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLmRhdGEgJiYgZGF0YS50eXBlKSB7XG4gICAgICAgIG9yaWdFdmVudERhdGEgPSBkYXRhXG4gICAgICAgIGRhdGEgPSBkYXRhLmRhdGFcbiAgICAgIH1cbiAgICAgIGRhdGEgPSBuZXcgRXZlbnQodGhpcywgbmFtZSwgZGF0YSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICBsZXQgbGlzdGVuZXJzID0gXy5jbG9uZSh0aGlzLl9saXN0ZW5lcnNbbmFtZV0pXG4gICAgICBmb3IgKGxldCBsIG9mIGxpc3RlbmVycykge1xuICAgICAgICBsLmZuLmNhbGwodGhpcywgZGF0YSlcbiAgICAgICAgaWYgKGRhdGEuc3RvcHBlZEltbWVkaWF0ZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkYXRhLnN0b3BwZWQpIHtcbiAgICAgICAgaWYgKG9yaWdFdmVudERhdGEpIHtcbiAgICAgICAgICBvcmlnRXZlbnREYXRhLnN0b3BwZWQgPSB0cnVlXG4gICAgICAgICAgZGF0YS5jYW5jZWxCdWJibGUoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuYnViYmxlcyAmJiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5lbWl0KSB7XG4gICAgICB0aGlzLnBhcmVudC5lbWl0KG5hbWUsIGRhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZFxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9lbWl0dGVyLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgcGF0aCB9IGZyb20gJy4uL3V0aWxzLmpzJ1xuXG5pbXBvcnQgVG9rZW5UeXBlcyBmcm9tICcuL3Rva2Vucy90eXBlcy5qcydcbmltcG9ydCBDb25zdFRva2VuIGZyb20gJy4vdG9rZW5zL2NvbnN0LmpzJ1xuaW1wb3J0IEluY2x1ZGVUb2tlbiBmcm9tICcuL3Rva2Vucy9pbmNsdWRlLmpzJ1xuXG5jbGFzcyBUb2tlbiB7XG5cbiAgY29uc3RydWN0b3IgKGxleGVyLCB0eXBlLCB2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICAgIGlmIChsZXhlciBpbnN0YW5jZW9mIFRva2VuKSB7XG4gICAgICBsZXQgdCA9IGxleGVyXG4gICAgICB0aGlzLmxleGVyID0gdC5sZXhlclxuICAgICAgdGhpcy5fdHlwZSA9IHQuX3R5cGVcbiAgICAgIHRoaXMuX3Jlc2VydmVkID0gdC5fcmVzZXJ2ZWRcbiAgICAgIHRoaXMudmFsdWUgPSB0LnZhbHVlXG4gICAgICB0aGlzLnN0YXJ0ID0gXy5jbG9uZSh0LnN0YXJ0KVxuICAgICAgdGhpcy5lbmQgPSBfLmNsb25lKHQuZW5kKVxuICAgICAgdGhpcy5sZW5ndGggPSB0LnZhbHVlLmxlbmd0aFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMubGV4ZXIgPSBsZXhlclxuICAgICAgdGhpcy5fdHlwZSA9IHR5cGVcbiAgICAgIHRoaXMuX3Jlc2VydmVkID0gZmFsc2VcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCAnJ1xuICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0IHx8IHsgb2Zmc2V0OiAwLCBsaW5lOiAwLCBjb2x1bW46IDAgfVxuICAgICAgdGhpcy5lbmQgPSBlbmQgfHwgeyBvZmZzZXQ6IDAsIGxpbmU6IDAsIGNvbHVtbjogMCB9XG4gICAgICB0aGlzLmxlbmd0aCA9IHRoaXMuZW5kLm9mZnNldCAtIHRoaXMuc3RhcnQub2Zmc2V0XG4gICAgfVxuICB9XG5cbiAgaXMgKGUpIHtcbiAgICBpZiAoXy5pc1N0cmluZyhlKSkge1xuICAgICAgbGV0IHBhcnRzID0gZS5zcGxpdCgnfCcpXG4gICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKGxldCBwIG9mIHBhcnRzKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXMocCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGUgPT09ICcuJyB8fCB0aGlzLnR5cGUgPT09IGUgfHwgdGhpcy52YWx1ZSA9PT0gZVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChfLmlzUmVnRXhwKGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy50eXBlLm1hdGNoKGUpIHx8IHRoaXMudmFsdWUubWF0Y2goZSlcbiAgICB9XG4gICAgZWxzZSBpZiAoXy5pc0FycmF5KGUpKSB7XG4gICAgICBmb3IgKGxldCBpIG9mIGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXMoaSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZ2V0IHR5cGUgKCkge1xuICAgIGlmICh0aGlzLl90eXBlID09PSAnbWF0aF9hc3NpZ24nIHx8IHRoaXMuX3R5cGUgPT09ICdsb2dpY19hc3NpZ24nKSB7XG4gICAgICB0aGlzLl90eXBlID0gJ2Fzc2lnbidcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5fdHlwZSA9PT0gJ3N1cGVyJykge1xuICAgICAgdGhpcy5fdHlwZSA9ICdzdXBlcidcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3R5cGVcbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gXy50ZW1wbGF0ZSgnXCIje3ZhbHVlfVwiIGF0ICN7cGF0aH0oI3tsaW5lfToje2NvbHVtbn0pJykoeyB2YWx1ZTogdGhpcy52YWx1ZSwgbGluZTogdGhpcy5zdGFydC5saW5lLCBjb2x1bW46IHRoaXMuc3RhcnQuY29sdW1uLCBwYXRoOiBwYXRoLmJhc2VuYW1lKHRoaXMubGV4ZXIucGF0aCkgfSlcbiAgfVxuXG59XG5cblxuY2xhc3MgRW1wdHlDbGFzcyB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXhlciBleHRlbmRzIG1peChFbXB0eUNsYXNzKS53aXRoKFxuICBUb2tlblR5cGVzLFxuICBDb25zdFRva2VuLFxuICBJbmNsdWRlVG9rZW5cbikge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAocGF0aCwgdGV4dCkge1xuICAgIHRoaXMuZXJyb3JzID0gMFxuICAgIHRoaXMucGF0aCA9IHBhdGggfHwgJydcbiAgICB0aGlzLnRleHQgPSB0ZXh0IHx8ICcnXG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLnRleHQubGVuZ3RoXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgdGhpcy5saW5lID0gMVxuICAgIHRoaXMuY29sdW1uID0gMVxuICAgIHRoaXMudG9rZW5zID0gW11cbiAgICB0aGlzLmNvbnN0YW50cyA9IHt9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHZhbGlkT2Zmc2V0IChvZmZzZXQpIHsgcmV0dXJuIG9mZnNldCA+PSAwICYmIG9mZnNldCA8IHRoaXMubGVuZ3RoIH1cblxuICBlb3MgKCkgeyByZXR1cm4gdGhpcy52YWxpZE9mZnNldCh0aGlzLm9mZnNldCkgfVxuXG4gIGNoYXJfYXQgKGkpIHsgcmV0dXJuIHRoaXMudGV4dC5jaGFyQXQoaSkgfVxuXG4gIHN1YnRleHQgKGkpIHsgcmV0dXJuIHRoaXMudGV4dC5zdWJzdHJpbmcoaSkgfVxuXG4gIHBlZWsgKCkge1xuICAgIGxldCBwb3NfaW5mbyA9IChvZmZzZXQsIGxpbmUsIGNvbHVtbikgPT4geyByZXR1cm4geyBvZmZzZXQsIGxpbmUsIGNvbHVtbiB9IH1cblxuICAgIGxldCB0b2tlbiA9IG51bGxcbiAgICBsZXQgbCA9IF8ubGFzdCh0aGlzLnRva2VucylcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5vZmZzZXRcbiAgICBsZXQgbGVuID0gMFxuXG4gICAgd2hpbGUgKFsnICcsICdcXHQnXS5pbmRleE9mKHRoaXMuY2hhcl9hdChvZmZzZXQpKSAhPT0gLTEpIHtcbiAgICAgIGlmIChsICYmICFsLm5leHRfaXNfc3BhY2UpIHtcbiAgICAgICAgbC5uZXh0X2lzX3NwYWNlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnZhbGlkT2Zmc2V0KG9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIHsgdG9rZW4sIG9mZnNldCB9XG4gICAgICB9XG4gICAgICBvZmZzZXQrK1xuICAgIH1cblxuICAgIGxldCBvbGRfb2Zmc2V0ID0gb2Zmc2V0XG5cbiAgICBsZXQgbGluZSA9IHRoaXMubGluZVxuICAgIGxldCBjb2x1bW4gPSB0aGlzLmNvbHVtblxuICAgIGZvciAobGV0IGsgaW4gdGhpcy50b2tlbl90eXBlcykge1xuICAgICAgbGV0IHIgPSB0aGlzLnN1YnRleHQob2Zmc2V0KS5tYXRjaCh0aGlzLnRva2VuX3R5cGVzW2tdKVxuICAgICAgaWYgKHIgJiYgci5pbmRleCA9PT0gMCkge1xuICAgICAgICBsZXQgdmFsdWUgPSByLmxlbmd0aCA+IDEgPyByLnNsaWNlKDEpLmpvaW4oJycpIDogci5qb2luKCcnKVxuICAgICAgICBsZW4gPSByWzBdLmxlbmd0aFxuICAgICAgICB0b2tlbiA9IG5ldyBUb2tlbih0aGlzLCBrLCB2YWx1ZSwgcG9zX2luZm8ob2Zmc2V0LCBsaW5lLCBjb2x1bW4pLCBwb3NfaW5mbyhvZmZzZXQgKyBsZW4sIGxpbmUsIGNvbHVtbiArIGxlbiAtIDEpKVxuICAgICAgICBvZmZzZXQgKz0gbGVuXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvZmZzZXQgPT09IG9sZF9vZmZzZXQpIHtcbiAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0ICsgMVxuICAgIH1cbiAgICByZXR1cm4geyB0b2tlbiwgb2Zmc2V0LCBsZW4gfVxuICB9XG5cbiAgaW5zZXJ0VG9rZW4gKHQpIHtcbiAgICBsZXQgYyA9IHRoaXMuY29uc3RhbnRzW3QudmFsdWVdXG4gICAgaWYgKF8uaXNBcnJheShjKSkge1xuICAgICAgZm9yIChsZXQgdCBvZiBjKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0VG9rZW4odClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHQpXG4gICAgfVxuICB9XG5cbiAgbmV4dCAoKSB7XG4gICAgbGV0IHsgdG9rZW4sIG9mZnNldCwgbGVuIH0gPSB0aGlzLnBlZWsoKVxuXG4gICAgd2hpbGUgKHRva2VuICYmIHRva2VuLl90eXBlID09PSAnY29tbWVudCcpIHtcbiAgICAgIGxldCB0ID0gdGhpcy5wZWVrKClcbiAgICAgIHRva2VuID0gdC50b2tlblxuICAgICAgb2Zmc2V0ID0gdC5vZmZzZXRcbiAgICAgIGxlbiA9IHQubGVuXG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgICAgdGhpcy5jb2x1bW4gKz0gbGVuICsgMVxuICAgIH1cblxuICAgIGlmICh0b2tlbikge1xuICAgICAgaWYgKHRva2VuLnR5cGUgPT09ICdjb25zdCcpIHtcbiAgICAgICAgdG9rZW4gPSB0aGlzLmNvbnN0X3Rva2VuKHRva2VuLCBvZmZzZXQsIGxlbilcbiAgICAgIH1cblxuICAgICAgZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHRva2VuID0gdGhpcy5pbmNsdWRlX3Rva2VuKHRva2VuLCBvZmZzZXQsIGxlbilcbiAgICAgIH1cblxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0VG9rZW4odG9rZW4pXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0XG4gICAgICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuICYmIHRva2VuLmlzKCdlb2wnKSkge1xuICAgICAgICB0aGlzLmxpbmUrK1xuICAgICAgICB0aGlzLmNvbHVtbiA9IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5cbiAgfVxuXG4gIHJ1biAocGF0aCwgdGV4dCkge1xuICAgIGlmICghdGV4dCkge1xuICAgICAgdGV4dCA9IHBhdGhcbiAgICAgIHBhdGggPSAnJ1xuICAgIH1cbiAgICB0aGlzLnJlc2V0KHBhdGgsIHRleHQpXG4gICAgd2hpbGUgKHRoaXMudmFsaWRPZmZzZXQodGhpcy5vZmZzZXQpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZHVtcCAoKSB7XG4gICAgY29uc29sZS5pbmZvKCdsZXhlciBkdW1wJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRva2VucylcbiAgICBjb25zb2xlLmxvZygnJylcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvbGV4ZXIuanMiLCJpbXBvcnQgYXNzaWduX3Rva2VucyBmcm9tICcuL2Fzc2lnbnMuanMnXG5pbXBvcnQgZGVsaW1pdGVyX3Rva2VucyBmcm9tICcuL2RlbGltaXRlcnMuanMnXG5pbXBvcnQgY29tbWVudF90b2tlbnMgZnJvbSAnLi9jb21tZW50cy5qcydcbmltcG9ydCBncm91cF90b2tlbnMgZnJvbSAnLi9ncm91cHMuanMnXG5pbXBvcnQgbGl0ZXJhbF90b2tlbnMgZnJvbSAnLi9saXRlcmFscy5qcydcbmltcG9ydCBvcGVyYXRvcl90b2tlbnMgZnJvbSAnLi9vcGVyYXRvcnMuanMnXG5pbXBvcnQgcHJpbWl0aXZlX3Rva2VucyBmcm9tICcuL3ByaW1pdGl2ZXMuanMnXG5pbXBvcnQgcmVzZXJ2ZWRfdG9rZW5zIGZyb20gJy4vcmVzZXJ2ZWQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgVG9rZW5UeXBlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGdldCB0b2tlbl90eXBlcyAoKSB7XG4gICAgaWYgKCF0aGlzLl90b2tlbl90eXBlcykge1xuICAgICAgdGhpcy5fdG9rZW5fdHlwZXMgPSBfLmV4dGVuZCh7fSxcbiAgICAgICAgZGVsaW1pdGVyX3Rva2VucyxcbiAgICAgICAgY29tbWVudF90b2tlbnMsXG4gICAgICAgIHByaW1pdGl2ZV90b2tlbnMsXG4gICAgICAgIHJlc2VydmVkX3Rva2VucyxcbiAgICAgICAgbGl0ZXJhbF90b2tlbnMsXG4gICAgICAgIGdyb3VwX3Rva2VucyxcbiAgICAgICAgb3BlcmF0b3JfdG9rZW5zLFxuICAgICAgICBhc3NpZ25fdG9rZW5zXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90b2tlbl90eXBlc1xuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL3R5cGVzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhc3NpZ246IC9eKD0pW149Pl0vLFxuICBtYXRoX2Fzc2lnbjogL15bXFwrXFwtXFwqXFwvJV09LyxcbiAgbG9naWNfYXNzaWduOiAvXlshJlxcfFxcXl09LyxcbiAgZm5fYXNzaWduOiAvXj0+Lyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvYXNzaWducy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZW9sOiAvXltcXHJcXG5dfDsvLFxuICBjb21tYTogL14sLyxcbiAgY29sb246IC9eOig/PVteQS1aX10pL2ksXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2RlbGltaXRlcnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbW1lbnQ6IC9eXFwvXFwvKFteXFxyXFxuXSopLyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvY29tbWVudHMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG9wZW5fcGFyZW46IC9eXFwoLyxcbiAgY2xvc2VfcGFyZW46IC9eXFwpLyxcblxuICBvcGVuX2JyYWNrZXQ6IC9eXFxbLyxcbiAgY2xvc2VfYnJhY2tldDogL15cXF0vLFxuXG4gIG9wZW5fY3VybHk6IC9eXFx7LyxcbiAgY2xvc2VfY3VybHk6IC9eXFx9Lyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvZ3JvdXBzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBrZXk6IC9eOihbQS1aX11bQS1aXzAtOV0qKS9pLFxuXG4gIGlkOiAvXihbQS1aX11bQS1aXzAtOV0qKS9pLFxuICBpZF9maWVsZDogL15cXC4oW0EtWl9dW0EtWl8wLTldKikvaSxcblxuICB0aGlzOiAvXkAoPz1bXkEtWl9dKS9pLFxuICB0aGlzX2ZpZWxkOiAvXkAoW0EtWl9dW0EtWl8wLTldKikvaSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvbGl0ZXJhbHMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHN5bWJvbDogL15bXFwkXS8sXG5cbiAgbWF0aDogL15bXFwrXFwtXFwqXFwvJV1bXj1dLyxcbiAgbG9naWM6IC9eWyEmXFx8XFxeXVtePV0vLFxuICBjb21wOiAvXj58PHw+PXw8PXwhPXw9PS8sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL29wZXJhdG9ycy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaGV4OiAvXlxcJChbMC05QS1GXSspfDB4KFswLTlBLUZdKykvaSxcbiAgbnVtYmVyOiAvXihbLStdP1swLTldKlxcLj9bMC05XSsoW2VFXVstK10/WzAtOV0rKT8pLyxcblxuICBzdHJpbmc6IC9eXCJ8JyhbXlwiXSopXCJ8Jy8sXG4gIGNoYXI6IC9eJyguKScvLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9wcmltaXRpdmVzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBpbmNsdWRlOiAvXiNcIihbXlwiXSopXCIvaSxcblxuICBjb25zdDogL14jKFtBLVpfXVtBLVpfMC05XSopL2ksXG5cbiAgcmVzZXJ2ZWQ6IC9eKHB1dHN8cHV0YykvaSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvcmVzZXJ2ZWQuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQ29uc3RUb2tlbiBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGNvbnN0X3Rva2VuICh0b2tlbiwgb2Zmc2V0LCBsZW4pIHtcbiAgICBsZXQgYyA9IFtdXG4gICAgdGhpcy5jb25zdGFudHNbdG9rZW4udmFsdWVdID0gY1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0XG4gICAgdGhpcy5jb2x1bW4gKz0gbGVuICsgMVxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgcCA9IHRoaXMucGVlaygpXG4gICAgICB0b2tlbiA9IHAudG9rZW5cbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICB0aGlzLm9mZnNldCA9IHAub2Zmc2V0XG4gICAgICAgIHRoaXMuY29sdW1uICs9IHAubGVuICsgMVxuICAgICAgfVxuICAgICAgaWYgKCF0b2tlbiB8fCB0b2tlbi5pcygnZW9sJykpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBjLnB1c2godG9rZW4pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b2tlblxuICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9jb25zdC5qcyIsImltcG9ydCB7IExleGVyIH0gZnJvbSAnLi4vbGV4ZXIuanMnXG5pbXBvcnQgeyBwYXRoLCBkaXJzLCBmcyB9IGZyb20gJy4uLy4uL3V0aWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEluY2x1ZGVUb2tlbiBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGluY2x1ZGVfdG9rZW4gKHRva2VuLCBvZmZzZXQsIGxlbikge1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0XG4gICAgdGhpcy5jb2x1bW4gKz0gbGVuICsgMVxuICAgIGxldCBmbiA9IHRva2VuLnZhbHVlICsgKHBhdGguZXh0bmFtZSh0b2tlbi52YWx1ZSkgPT09ICcnID8gJy5zaHAnIDogJycpXG4gICAgbGV0IHBuID0gcGF0aC5qb2luKF9fZGlybmFtZSwgZm4pXG4gICAgdHJ5IHtcbiAgICAgIGZzLnN0YXRTeW5jKHBuKVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcG4gPSBwYXRoLmpvaW4oZGlycy51c2VyLCBmbilcbiAgICAgICAgZnMuc3RhdFN5bmMocG4pXG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICBwbiA9ICcnXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwbiAhPT0gJycpIHtcbiAgICAgIGxldCBzcmMgPSBmcy5yZWFkRmlsZVN5bmMocG4sICd1dGY4JylcbiAgICAgIGxldCBseCA9IG5ldyBMZXhlcigpXG4gICAgICBseC5ydW4ocG4sIHNyYylcbiAgICAgIGlmICghbHguZXJyb3JzKSB7XG4gICAgICAgIF8uZXh0ZW5kKHRoaXMuY29uc3RhbnRzLCBseC5jb25zdGFudHMpXG4gICAgICAgIHRoaXMudG9rZW5zID0gdGhpcy50b2tlbnMuY29uY2F0KGx4LnRva2VucylcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRva2VuXG4gIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2luY2x1ZGUuanMiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnLi4vZ2xvYmFscy5qcydcbmltcG9ydCB7IEZyYW1lcyB9IGZyb20gJy4vZnJhbWUuanMnXG5cbmltcG9ydCBLZXlMaXRlcmFsIGZyb20gJy4vZ3JhbW1hci9leHByZXNzaW9ucy9rZXlfbGl0ZXJhbC5qcydcblxuaW1wb3J0IFN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvc3RhdGVtZW50cy5qcydcbmltcG9ydCBJZFN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvaWQuanMnXG5pbXBvcnQgQXNzaWduU3RhdGVtZW50cyBmcm9tICcuL2dyYW1tYXIvc3RhdGVtZW50cy9hc3NpZ24uanMnXG5pbXBvcnQgUmV0dXJuU3RhdGVtZW50cyBmcm9tICcuL2dyYW1tYXIvc3RhdGVtZW50cy9yZXR1cm4uanMnXG5pbXBvcnQgQ2xhc3NTdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL2NsYXNzLmpzJ1xuaW1wb3J0IENvbmRpdGlvblN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvY29uZGl0aW9ucy5qcydcbmltcG9ydCBWYXJTdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL3Zhci5qcydcbmltcG9ydCBMb29wU3RhdGVtZW50cyBmcm9tICcuL2dyYW1tYXIvc3RhdGVtZW50cy9sb29wcy5qcydcblxuaW1wb3J0IEV4cHJlc3Npb25zIGZyb20gJy4vZ3JhbW1hci9leHByZXNzaW9ucy9leHByZXNzaW9ucy5qcydcbmltcG9ydCBBcnJheUV4cHJlc3Npb25zIGZyb20gJy4vZ3JhbW1hci9leHByZXNzaW9ucy9hcnJheS5qcydcbmltcG9ydCBEaWN0RXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2RpY3QuanMnXG5pbXBvcnQgRm5FeHByZXNzaW9ucyBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMvZm4uanMnXG5pbXBvcnQgSWRFeHByZXNzaW9ucyBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMvaWQuanMnXG5pbXBvcnQgQ2xhc3NFeHByZXNzaW9ucyBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMvY2xhc3MuanMnXG5cbmNsYXNzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yIChwYXJzZXIsIHRva2VuLCBkYXRhKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXJcbiAgICB0aGlzLnRva2VuID0gdG9rZW5cbiAgICB0aGlzLl9pbl9jbGFzcyA9IGZhbHNlXG4gICAgdGhpcy5fZm5fbGV2ZWwgPSAwXG4gICAgdGhpcy5kYXRhID0gZGF0YSB8fCB7fVxuICB9XG5cbiAgdG9rZW5fcHJvcCAobmFtZSkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW5bbmFtZV0gOiBudWxsIH1cblxuICBnZXQgdmFsdWUgKCkgeyByZXR1cm4gdGhpcy50b2tlbl9wcm9wKCd2YWx1ZScpIH1cblxuICBnZXQgdHlwZSAoKSB7IHJldHVybiB0aGlzLnRva2VuX3Byb3AoJ3R5cGUnKSB9XG5cbiAgZ2V0IHN0YXJ0ICgpIHsgcmV0dXJuIHRoaXMudG9rZW5fcHJvcCgnc3RhcnQnKSB9XG5cbiAgZ2V0IGVuZCAoKSB7IHJldHVybiB0aGlzLnRva2VuX3Byb3AoJ2VuZCcpIH1cblxuICBnZXQgbGVuZ3RoICgpIHsgcmV0dXJuIHRoaXMudG9rZW5fcHJvcCgnbGVuZ3RoJykgfVxuXG4gIGlzIChlKSB7IHJldHVybiB0aGlzLnRva2VuID8gdGhpcy50b2tlbi5pcyhlKSA6IGZhbHNlIH1cblxuICB0b1N0cmluZyAoKSB7IHJldHVybiB0aGlzLnRva2VuID8gdGhpcy50b2tlbi50b1N0cmluZygpIDogJycgfVxuXG59XG5cblxuY2xhc3MgRW1wdHlDbGFzcyB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzZXIgZXh0ZW5kcyBtaXgoRW1wdHlDbGFzcykud2l0aChcbiAgS2V5TGl0ZXJhbCxcblxuICBTdGF0ZW1lbnRzLFxuICBJZFN0YXRlbWVudHMsXG4gIEFzc2lnblN0YXRlbWVudHMsXG4gIFJldHVyblN0YXRlbWVudHMsXG4gIENsYXNzU3RhdGVtZW50cyxcbiAgQ29uZGl0aW9uU3RhdGVtZW50cyxcbiAgVmFyU3RhdGVtZW50cyxcbiAgTG9vcFN0YXRlbWVudHMsXG5cbiAgRXhwcmVzc2lvbnMsXG4gIEFycmF5RXhwcmVzc2lvbnMsXG4gIERpY3RFeHByZXNzaW9ucyxcbiAgRm5FeHByZXNzaW9ucyxcbiAgSWRFeHByZXNzaW9ucyxcbiAgQ2xhc3NFeHByZXNzaW9uc1xuKSB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICh0b2tlbnMpIHtcbiAgICB0aGlzLmVycm9ycyA9IDBcbiAgICB0aGlzLm9mZnNldCA9IDBcbiAgICB0aGlzLm5vZGVzID0gW11cbiAgICB0aGlzLmZyYW1lcyA9IG5ldyBGcmFtZXMoKVxuICAgIHRoaXMucHJldl9mcmFtZSA9IG51bGxcbiAgICB0aGlzLmluX2NsYXNzID0gZmFsc2VcbiAgICB0aGlzLmZuX2xldmVsID0gMFxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zIHx8IFtdXG4gIH1cblxuICB2YWxpZE9mZnNldCAob2Zmc2V0KSB7IHJldHVybiBvZmZzZXQgPj0gMCAmJiBvZmZzZXQgPCB0aGlzLmxlbmd0aCB9XG5cbiAgdG9rZW5fYXQgKG9mZnNldCkgeyByZXR1cm4gdGhpcy52YWxpZE9mZnNldChvZmZzZXQpID8gdGhpcy50b2tlbnNbb2Zmc2V0XSA6IG51bGwgfVxuXG4gIGdldCBlb3MgKCkgeyByZXR1cm4gdGhpcy5vZmZzZXQgPj0gdGhpcy5sZW5ndGggfVxuXG4gIGdldCBsZW5ndGggKCkgeyByZXR1cm4gdGhpcy50b2tlbnMubGVuZ3RoIH1cblxuICBnZXQgdG9rZW4gKCkgeyByZXR1cm4gdGhpcy50b2tlbl9hdCh0aGlzLm9mZnNldCkgfVxuXG4gIHNraXAgKGUpIHsgd2hpbGUgKHRoaXMuaXMoZSkgJiYgIXRoaXMuZW9zKSB7IHRoaXMubmV4dCgpIH0gfVxuXG4gIGlzIChlKSB7IHJldHVybiB0aGlzLnRva2VuID8gdGhpcy50b2tlbi5pcyhlKSA6IGZhbHNlIH1cblxuICBleHBlY3QgKGUsIG5leHQgPSB0cnVlKSB7XG4gICAgbGV0IHIgPSB0aGlzLnRva2VuID8gdGhpcy50b2tlbi5pcyhlKSA6IGZhbHNlXG4gICAgaWYgKHIpIHtcbiAgICAgIGlmIChuZXh0KSB7IHRoaXMubmV4dCgpIH1cbiAgICB9XG4gICAgZWxzZSB7IGVycm9yKHRoaXMsIHRoaXMudG9rZW4sIGUsICdleHBlY3RlZCcpIH1cbiAgICByZXR1cm4gclxuICB9XG5cbiAgbWF0Y2ggKG9mZnNldCwgbWF0Y2hlcykge1xuICAgIGlmICghXy5pc051bWJlcihvZmZzZXQpKSB7XG4gICAgICBtYXRjaGVzID0gb2Zmc2V0XG4gICAgICBvZmZzZXQgPSB0aGlzLm9mZnNldFxuICAgIH1cbiAgICBsZXQgdG9rZW5zID0gW11cbiAgICBsZXQgbSA9IDBcbiAgICB3aGlsZSAodGhpcy52YWxpZE9mZnNldChvZmZzZXQpICYmIG0gPCBtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgbGV0IHRva2VuID0gdGhpcy50b2tlbnNbb2Zmc2V0KytdXG4gICAgICBpZiAoIXRva2VuLmlzKG1hdGNoZXNbbSsrXSkpIHsgcmV0dXJuIG51bGwgfVxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pXG4gICAgfVxuICAgIHJldHVybiB0b2tlbnMubGVuZ3RoID8gdG9rZW5zIDogbnVsbFxuICB9XG5cbiAgcGVlayAoYyA9IDEpIHsgcmV0dXJuIHRoaXMudG9rZW5fYXQodGhpcy5vZmZzZXQgKyBjKSB9XG5cbiAgbmV4dCAoYyA9IDEpIHtcbiAgICB0aGlzLm9mZnNldCArPSBjXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGxvb3Bfd2hpbGUgKGZuLCBtYXRjaGVzLCBlbmQsIGVuZF9uZXh0LCBza2lwKSB7XG4gICAgbGV0IG5vZGVzID0gW11cbiAgICBpZiAoc2tpcCkgeyB0aGlzLnNraXAoc2tpcCkgfVxuICAgIHdoaWxlICghdGhpcy5lb3MgJiYgKCFlbmQgfHwgIXRoaXMuaXMoZW5kKSkgJiYgKCFtYXRjaGVzIHx8IHRoaXMubWF0Y2gobWF0Y2hlcykpKSB7XG4gICAgICBub2Rlcy5wdXNoKGZuLmNhbGwodGhpcykpXG4gICAgICBpZiAoc2tpcCkgeyB0aGlzLnNraXAoc2tpcCkgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7IHRoaXMuZXhwZWN0KGVuZCwgZW5kX25leHQpIH1cbiAgICByZXR1cm4gbm9kZXNcbiAgfVxuXG4gIG5leHRfZXhwcl9ub2RlIChsZWZ0KSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIGxldCBkYXRhID0ge31cbiAgICBpZiAobGVmdCkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIGRhdGEgPSB7IGxlZnQsIHJpZ2h0OiB0aGlzLmV4cHIoKSB9XG4gICAgfVxuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdG9rZW4sIGRhdGEpXG4gICAgaWYgKCFsZWZ0KSB7IHRoaXMubmV4dCgpIH1cbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgcnVuICh0b2tlbnMpIHtcbiAgICB0aGlzLnJlc2V0KHRva2VucylcbiAgICB0aGlzLmZyYW1lcy5zdGFydCgnZ2xvYmFscycpXG4gICAgbGV0IG5vZGVzID0gdGhpcy5zdGF0ZW1lbnRzKClcbiAgICB0aGlzLmZyYW1lcy5lbmQoKVxuICAgIHRoaXMubm9kZXMgPSBub2Rlc1xuICAgIHJldHVybiBub2Rlc1xuICB9XG5cbiAgZHVtcCAoKSB7XG4gICAgY29uc29sZS5pbmZvKCdwYXJzZXIgZHVtcCcpXG4gICAgY29uc29sZS5sb2codGhpcy5ub2RlcylcbiAgICBjb25zb2xlLmxvZygnJylcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvcGFyc2VyLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgdmFyIEZyYW1lXG5leHBvcnQgdmFyIEZyYW1lc1xuZXhwb3J0IHZhciBGcmFtZUl0ZW1cblxuRnJhbWVzID0gY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBudWxsXG4gIH1cblxuICBzdGFydCAodHlwZSkgeyB0aGlzLmN1cnJlbnQgPSBuZXcgRnJhbWUodGhpcywgdGhpcy5jdXJyZW50LCB0eXBlKSB9XG5cbiAgZW5kICgpIHsgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50LnBhcmVudCB9XG5cbiAgYWRkIChub2RlLCBwYXJlbnQsIGl0ZW1fdHlwZSkgeyByZXR1cm4gdGhpcy5jdXJyZW50LmFkZChub2RlLCBwYXJlbnQsIGl0ZW1fdHlwZSkgfVxuXG4gIGV4aXN0cyAobmFtZSwgaXRlbV90eXBlKSB7XG4gICAgbGV0IGMgPSB0aGlzLmN1cnJlbnRcbiAgICB3aGlsZSAoYykge1xuICAgICAgbGV0IGkgPSBjLmV4aXN0cyhuYW1lLCBpdGVtX3R5cGUpXG4gICAgICBpZiAoaSkge1xuICAgICAgICByZXR1cm4gaVxuICAgICAgfVxuICAgICAgYyA9IGMucGFyZW50XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBmbl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2ZuJylcbiAgfVxuXG4gIGNsYXNzX2V4aXN0cyAobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmV4aXN0cyhuYW1lLCAnY2xhc3MnKVxuICB9XG5cbiAgdmFyX2V4aXN0cyAobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmV4aXN0cyhuYW1lLCAndmFyJylcbiAgfVxuXG59XG5cblxuRnJhbWVJdGVtID0gY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yIChmcmFtZSwgcGFyZW50LCBub2RlLCBpdGVtX3R5cGUpIHtcbiAgICB0aGlzLmZyYW1lID0gZnJhbWVcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICAgIHRoaXMuaXRlbV90eXBlID0gaXRlbV90eXBlXG4gICAgdGhpcy5ub2RlID0gbm9kZVxuICB9XG5cbiAgZ2V0IGRhdGEgKCkgeyByZXR1cm4gdGhpcy5ub2RlLmRhdGEgfVxuXG4gIGdldCBuYW1lICgpIHsgcmV0dXJuIHRoaXMubm9kZS52YWx1ZSB9XG5cbiAgZ2V0IHR5cGUgKCkgeyByZXR1cm4gdGhpcy5ub2RlLnR5cGUgfVxuXG4gIGdldCBpc192YXIgKCkgeyByZXR1cm4gdGhpcy5pdGVtX3R5cGUgPT09ICd2YXInIH1cblxuICBnZXQgaXNfY2xhc3MgKCkgeyByZXR1cm4gdGhpcy5pdGVtX3R5cGUgPT09ICdjbGFzcycgfVxuXG4gIGdldCBpc19mbiAoKSB7IHJldHVybiB0aGlzLml0ZW1fdHlwZSA9PT0gJ2ZuJyB9XG5cbiAgZ2V0IGlzX2xvY2FsICgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuaXNfbG9jYWwgfVxuXG4gIGdldCBpc19nbG9iYWwgKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5pc19nbG9iYWwgfVxuXG59XG5cblxuRnJhbWUgPSBjbGFzcyB7XG5cbiAgY29uc3RydWN0b3IgKGZyYW1lcywgcGFyZW50LCB0eXBlKSB7XG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXNcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICAgIHRoaXMudHlwZSA9IHR5cGVcbiAgICB0aGlzLml0ZW1zID0gW11cbiAgfVxuXG4gIGdldCBuYW1lICgpIHsgcmV0dXJuIHRoaXMucGFyZW50ID8gJyRzJyA6ICckZycgfVxuXG4gIGdldCBpc19sb2NhbCAoKSB7IHJldHVybiB0aGlzLnBhcmVudCAhPT0gbnVsbCB9XG5cbiAgZ2V0IGlzX2dsb2JhbCAoKSB7IHJldHVybiB0aGlzLnBhcmVudCA9PT0gbnVsbCB9XG5cbiAgYWRkIChub2RlLCBwYXJlbnQsIGl0ZW1fdHlwZSkge1xuICAgIGxldCBpID0gbmV3IEZyYW1lSXRlbSh0aGlzLCBwYXJlbnQsIG5vZGUsIGl0ZW1fdHlwZSlcbiAgICB0aGlzLml0ZW1zLnB1c2goaSlcbiAgICBub2RlLl9nbG9iYWwgPSB0aGlzLmlzX2dsb2JhbFxuICAgIHJldHVybiBpXG4gIH1cblxuICBleGlzdHMgKG5hbWUsIGl0ZW1fdHlwZSkgeyByZXR1cm4gXy5maW5kKHRoaXMuaXRlbXMsIGl0ZW1fdHlwZSA/IHsgbmFtZSwgaXRlbV90eXBlIH0gOiB7IG5hbWUgfSkgfVxuXG4gIGZuX2V4aXN0cyAobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmV4aXN0cyhuYW1lLCAnZm4nKVxuICB9XG5cbiAgdmFyX2V4aXN0cyAobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmV4aXN0cyhuYW1lLCAndmFyJylcbiAgfVxuXG4gIGNsYXNzX2V4aXN0cyAobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmV4aXN0cyhuYW1lLCAnY2xhc3MnKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9mcmFtZS5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgS2V5TGl0ZXJhbHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBrZXlfbGl0ZXJhbCAoKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIHRoaXMuZXhwZWN0KCdrZXknKVxuICAgIG5vZGUuZGF0YS5leHByID0gdGhpcy5leHByKClcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9rZXlfbGl0ZXJhbC5qcyIsImltcG9ydCB7IGVycm9yIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFscy5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBTdGF0ZW1lbnRzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgYmxvY2sgKGVuZCwgZW5kX25leHQgPSB0cnVlLCBibG9ja190eXBlID0gbnVsbCkge1xuICAgIGlmIChibG9ja190eXBlKSB7XG4gICAgICB0aGlzLmZyYW1lcy5zdGFydChibG9ja190eXBlKVxuICAgIH1cbiAgICBsZXQgbm9kZXMgPSB0aGlzLmxvb3Bfd2hpbGUodGhpcy5zdGF0ZW1lbnQsIG51bGwsIGVuZCwgZW5kX25leHQsICdlb2wnKVxuICAgIGlmIChibG9ja190eXBlKSB7XG4gICAgICB0aGlzLmZyYW1lcy5lbmQoKVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXNcbiAgfVxuXG4gIHN0YXRlbWVudHMgKCkgeyByZXR1cm4gdGhpcy5ibG9jaygpIH1cblxuICBzaW5nbGVfc3RhdGVtZW50ICgpIHtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgdGhpcy5uZXh0KClcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgc3RhdGVtZW50ICgpIHtcbiAgICBpZiAodGhpcy5tYXRjaChbJ2xldCcsICdpZCddKSkgeyByZXR1cm4gdGhpcy52YXJfc3RhdGVtZW50KCkgfSAvLyB2YXJpYWJsZSBkZWZpbml0aW9uXG4gICAgZWxzZSBpZiAodGhpcy5tYXRjaChbJ2lkfGlkX2ZpZWxkfHRoaXNfZmllbGQnLCAnYXNzaWdufGZuX2Fzc2lnbiddKSkgeyByZXR1cm4gdGhpcy5hc3NpZ25fc3RhdGVtZW50KCkgfSAvLyB2YXJpYWJsZSBhc3NpZ25tZW50XG4gICAgZWxzZSBpZiAodGhpcy5pcygnaWYnKSkgeyByZXR1cm4gdGhpcy5pZl9zdGF0ZW1lbnQoKSB9IC8vIGlmIGJsb2NrXG4gICAgZWxzZSBpZiAodGhpcy5pcygnZm9yJykpIHsgcmV0dXJuIHRoaXMuZm9yX3N0YXRlbWVudCgpIH0gLy8gd2hpbGUgYmxvY2tcbiAgICBlbHNlIGlmICh0aGlzLmlzKCd3aGlsZScpKSB7IHJldHVybiB0aGlzLndoaWxlX3N0YXRlbWVudCgpIH0gLy8gd2hpbGUgYmxvY2tcbiAgICBlbHNlIGlmICh0aGlzLmlzKCdyZXR1cm4nKSkgeyByZXR1cm4gdGhpcy5yZXR1cm5fc3RhdGVtZW50KCkgfSAvLyByZXR1cm4gZnJvbSBmdW5jdGlvblxuICAgIGVsc2UgaWYgKHRoaXMuaXMoWydicmVhaycsICdjb250aW51ZSddKSkgeyByZXR1cm4gdGhpcy5zaW5nbGVfc3RhdGVtZW50KCkgfSAvLyBzaW5nbGUgc3RhdGVtZW50XG4gICAgZWxzZSBpZiAodGhpcy5pcygnY2xhc3MnKSkgeyByZXR1cm4gdGhpcy5jbGFzc19zdGF0ZW1lbnQoKSB9IC8vIGNsYXNzIHN0YXRlbWVudFxuICAgIGVsc2UgaWYgKHRoaXMuaXMoWydpZCcsICdzdXBlciddKSkgeyByZXR1cm4gdGhpcy5pZF9zdGF0ZW1lbnQoKSB9IC8vIGZ1bmN0aW9uIGNhbGxcbiAgICBlbHNlIHtcbiAgICAgIGVycm9yKHRoaXMsIHRoaXMudG9rZW4sICdzeW50YXggZXJyb3InKVxuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9zdGF0ZW1lbnRzLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIElkU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGlkX3N0YXRlbWVudCAoZmlyc3QgPSB0cnVlKSB7XG4gICAgaWYgKHRoaXMuaXMoJ3N1cGVyJykpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1cGVyX2V4cHIoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmlkX2V4cHIoZmlyc3QpXG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2lkLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBBc3NpZ25TdGF0ZW1lbnRzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgYXNzaWduX3N0YXRlbWVudCAoKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsXG4gICAgbGV0IGlkID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ2ZuX2Fzc2lnbicpKSB7XG4gICAgICBub2RlID0gdGhpcy5mbl9leHByKGlkLCB0cnVlKVxuICAgICAgaWQuX2ZuID0gdHJ1ZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuLCB7IGlkIH0pXG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgbm9kZS5kYXRhLmV4cHIgPSB0aGlzLmV4cHIoKVxuICAgIH1cbiAgICB0aGlzLmZyYW1lcy5hZGQoaWQsIG51bGwsIGlkLl9mbiA/ICdmbicgOiAndmFyJylcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2Fzc2lnbi5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgUmV0dXJuU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIHJldHVybl9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCBwID0gZmFsc2VcbiAgICBsZXQgZW5kID0gJ2VvbHxlbmR8Y2xvc2VfcGFyZW4nXG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIG5vZGUuZGF0YS5hcmdzID0gW11cbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHAgPSB0cnVlXG4gICAgICBlbmQgPSAnY2xvc2VfcGFyZW4nXG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgICBpZiAoIXAgfHwgIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5leHBycyhlbmQsIGZhbHNlKVxuICAgIH1cbiAgICBpZiAocCkge1xuICAgICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9yZXR1cm4uanMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIENsYXNzU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGNsYXNzX2xpc3QgKCkgeyByZXR1cm4gdGhpcy5sb29wX3doaWxlKHRoaXMuc2luZ2xlLCBbJ2lkJ10sICdlb2wnLCB0cnVlLCAnY29tbWEnKSB9XG5cbiAgY2xhc3Nfc3RhdGVtZW50ICgpIHtcbiAgICBsZXQgdG9rZW4gPSB0aGlzLnRva2VuXG4gICAgdGhpcy5uZXh0KClcbiAgICBsZXQgX2V4dGVuZHMgPSBudWxsXG4gICAgbGV0IGlkID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJzonKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIF9leHRlbmRzID0gdGhpcy5jbGFzc19saXN0KClcbiAgICB9XG4gICAgdGhpcy5mcmFtZXMuYWRkKGlkLCBudWxsLCAnY2xhc3MnKVxuICAgIHRoaXMuaW5fY2xhc3MgPSB0cnVlXG4gICAgbGV0IGJvZHkgPSB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ2NsYXNzJylcbiAgICB0aGlzLmluX2NsYXNzID0gZmFsc2VcbiAgICB0aGlzLmV4cGVjdCgnZW5kJylcbiAgICByZXR1cm4gbmV3IE5vZGUodGhpcywgdG9rZW4sIHsgaWQsIF9leHRlbmRzLCBib2R5IH0pXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvY2xhc3MuanMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIENvbmRpdGlvblN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBpZl9zdGF0ZW1lbnQgKGV4cGVjdF9lbmQgPSB0cnVlKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgbGV0IGV4cHJfYmxvY2tcbiAgICBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgZXhwcl9ibG9jayA9IHRoaXMuZXhwcigpXG4gICAgICB0aGlzLmV4cGVjdCgnY2xvc2VfcGFyZW4nKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGV4cHJfYmxvY2sgPSB0aGlzLmV4cHIoKVxuICAgIH1cbiAgICBsZXQgdHJ1ZV9ib2R5ID0gdGhpcy5ibG9jayhbJ2Vsc2UnLCAnZW5kJ10sIGZhbHNlLCAnaWYnKVxuICAgIGxldCBmYWxzZV9ib2R5ID0gdGhpcy5pcygnZWxzZScpID8gdGhpcy5lbHNlX3N0YXRlbWVudChmYWxzZSkgOiBudWxsXG4gICAgaWYgKGV4cGVjdF9lbmQpIHsgdGhpcy5leHBlY3QoJ2VuZCcpIH1cbiAgICByZXR1cm4gbmV3IE5vZGUodGhpcywgdG9rZW4sIHsgZXhwcjogZXhwcl9ibG9jaywgdHJ1ZV9ib2R5LCBmYWxzZV9ib2R5IH0pXG4gIH1cblxuICBlbHNlX3N0YXRlbWVudCAoZXhwZWN0X2VuZCA9IHRydWUpIHtcbiAgICBsZXQgdG9rZW4gPSB0aGlzLnRva2VuXG4gICAgbGV0IG5vZGUgPSBudWxsXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAodGhpcy5pcygnaWYnKSkge1xuICAgICAgbm9kZSA9IHRoaXMuaWZfc3RhdGVtZW50KGZhbHNlKVxuICAgICAgbm9kZS50b2tlbiA9IHRva2VuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IGZhbHNlX2JvZHk6IHRoaXMuYmxvY2soJ2VuZCcsIGZhbHNlLCAnZWxzZScpIH0pXG4gICAgfVxuICAgIGlmIChleHBlY3RfZW5kKSB7IHRoaXMuZXhwZWN0KCdlbmQnKSB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9jb25kaXRpb25zLmpzIiwiaW1wb3J0IHsgVG9rZW4gfSBmcm9tICcuLi8uLi9sZXhlci5qcydcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgVmFyU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIHZhcl9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCBub2RlID0gbnVsbFxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKCF0aGlzLnBlZWsoKS5pcygnYXNzaWdufGZuX2Fzc2lnbicpKSB7XG4gICAgICBsZXQgdCA9IG5ldyBUb2tlbih0aGlzLnRva2VuKVxuICAgICAgdC52YWx1ZSA9ICc9J1xuICAgICAgdC5fdHlwZSA9ICdhc3NpZ24nXG4gICAgICBub2RlID0gbmV3IE5vZGUodGhpcywgdCwgeyBpZDogdGhpcy50b2tlbiwgZXhwcjogbnVsbCB9KVxuICAgICAgdGhpcy5mcmFtZXMuYWRkKHRoaXMudG9rZW4sIG51bGwsICd2YXInKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5vZGUgPSB0aGlzLmFzc2lnbl9zdGF0ZW1lbnQoKVxuICAgIH1cbiAgICBub2RlLl9sZXQgPSB0cnVlXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy92YXIuanMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIExvb3BTdGF0ZW1lbnRzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZm9yX3N0YXRlbWVudCAoKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG5cbiAgICBsZXQgdiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLmV4cGVjdCgnaWR8dmFyJylcbiAgICB0aGlzLmV4cGVjdCgnYXNzaWduJylcbiAgICBsZXQgbWluX2V4cHIgPSB0aGlzLmV4cHIoKVxuICAgIHRoaXMuZXhwZWN0KCd0bycpXG4gICAgbGV0IG1heF9leHByID0gdGhpcy5leHByKClcbiAgICBsZXQgc3RlcF9leHByID0gbnVsbFxuICAgIGlmICh0aGlzLmlzKCdzdGVwJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBzdGVwX2V4cHIgPSB0aGlzLmV4cHIoKVxuICAgIH1cbiAgICBsZXQgYm9keSA9IHRoaXMuYmxvY2soJ2VuZCcsIGZhbHNlLCAnZm9yJylcbiAgICB0aGlzLmV4cGVjdCgnZW5kJylcbiAgICByZXR1cm4gbmV3IE5vZGUodGhpcywgdG9rZW4sIHsgdiwgbWluX2V4cHIsIG1heF9leHByLCBzdGVwX2V4cHIsIGJvZHkgfSlcbiAgfVxuXG4gIHdoaWxlX3N0YXRlbWVudCAoKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgbGV0IGV4cHJfYmxvY2tcbiAgICBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgZXhwcl9ibG9jayA9IHRoaXMuZXhwcigpXG4gICAgICB0aGlzLmV4cGVjdCgnY2xvc2VfcGFyZW4nKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGV4cHJfYmxvY2sgPSB0aGlzLmV4cHIoKVxuICAgIH1cbiAgICBsZXQgYm9keSA9IHRoaXMuYmxvY2soJ2VuZCcsIGZhbHNlLCAnd2hpbGUnKVxuICAgIHRoaXMuZXhwZWN0KCdlbmQnKVxuICAgIHJldHVybiBuZXcgTm9kZSh0aGlzLCB0b2tlbiwgeyBleHByOiBleHByX2Jsb2NrLCBib2R5IH0pXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvbG9vcHMuanMiLCJpbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgRXhwcmVzc2lvbnMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBleHBycyAoZW5kLCBlbmRfbmV4dCkgeyByZXR1cm4gdGhpcy5sb29wX3doaWxlKHRoaXMuZXhwciwgbnVsbCwgZW5kLCBlbmRfbmV4dCwgJ2NvbW1hJykgfVxuXG4gIGV4cHIgKCkge1xuICAgIGxldCBub2RlID0gdGhpcy5zaW1wbGVfZXhwcigpXG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGxldCB0ZXJtID0gdGhpcy50ZXJtX2V4cHIobm9kZSlcbiAgICAgIGlmICh0ZXJtKSB7IHJldHVybiB0ZXJtIH1cblxuICAgICAgbGV0IGZhY3RvciA9IHRoaXMuZmFjdG9yX2V4cHIobm9kZSlcbiAgICAgIGlmIChmYWN0b3IpIHsgcmV0dXJuIGZhY3RvciB9XG5cbiAgICAgIGxldCBjb25kaXRpb25hbCA9IHRoaXMuY29uZGl0aW9uYWxfZXhwcihub2RlKVxuICAgICAgaWYgKGNvbmRpdGlvbmFsKSB7IHJldHVybiBjb25kaXRpb25hbCB9XG5cbiAgICAgIGxldCBqdW5jdGlvbiA9IHRoaXMuanVuY3Rpb25fZXhwcihub2RlKVxuICAgICAgaWYgKGp1bmN0aW9uKSB7IHJldHVybiBqdW5jdGlvbiB9XG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBzaW1wbGVfZXhwciAoKSB7XG4gICAgaWYgKHRoaXMuaXMoWydudW1iZXInLCAnc3RyaW5nJywgJ2NoYXInXSkpIHsgcmV0dXJuIHRoaXMubmV4dF9leHByX25vZGUoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnZm5fYXNzaWduJykpIHsgcmV0dXJuIHRoaXMuZm5fZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHsgcmV0dXJuIHRoaXMuc3ViX2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnb3Blbl9icmFja2V0JykpIHsgcmV0dXJuIHRoaXMuYXJyYXlfZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKCdvcGVuX2N1cmx5JykpIHsgcmV0dXJuIHRoaXMuZGljdF9leHByKCkgfVxuICAgIGVsc2UgaWYgKHRoaXMuaXMoWyd0aGlzJywgJ3RoaXNfZmllbGQnXSkpIHsgcmV0dXJuIHRoaXMudGhpc19leHByKCkgfVxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ3N1cGVyJykpIHsgcmV0dXJuIHRoaXMuc3VwZXJfZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKCduZXcnKSkgeyByZXR1cm4gdGhpcy5uZXdfZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKCdpZCcpKSB7IHJldHVybiB0aGlzLmlkX2V4cHIoKSB9XG4gICAgZWxzZSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnbnVtYmVyLCBzdHJpbmcsIHZhcmlhYmxlLCB2YXJpYWJsZSBwYXJlbiBvciBmdW5jdGlvbiBjYWxsL2V4cHJlc3Npb24gZXhwZWN0ZWQnKVxuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHN1Yl9leHByICgpIHtcbiAgICBsZXQgbm9kZXMgPSBbXVxuICAgIG5vZGVzLnB1c2gobmV3IE5vZGUodGhpcywgdGhpcy50b2tlbikpXG4gICAgdGhpcy5leHBlY3QoJ29wZW5fcGFyZW4nKVxuICAgIGlmICghdGhpcy5pcygnY2xvc2VfcGFyZW4nKSkge1xuICAgICAgbm9kZXMucHVzaCh0aGlzLmV4cHIoKSlcbiAgICB9XG4gICAgbm9kZXMucHVzaChuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKSlcbiAgICB0aGlzLmV4cGVjdCgnY2xvc2VfcGFyZW4nKVxuICAgIHJldHVybiBub2Rlc1xuICB9XG5cbiAgdGVybV9leHByIChsZWZ0KSB7IHJldHVybiB0aGlzLmlzKC9cXCt8LS8pID8gdGhpcy5uZXh0X2V4cHJfbm9kZShsZWZ0KSA6IG51bGwgfVxuXG4gIGZhY3Rvcl9leHByIChsZWZ0KSB7IHJldHVybiB0aGlzLmlzKC9cXC98XFwqLykgPyB0aGlzLm5leHRfZXhwcl9ub2RlKGxlZnQpIDogbnVsbCB9XG5cbiAgY29uZGl0aW9uYWxfZXhwciAobGVmdCkgeyByZXR1cm4gdGhpcy5pcygvPnw+PXw8fDw9fCE9fDw+fD09LykgPyB0aGlzLm5leHRfZXhwcl9ub2RlKGxlZnQpIDogbnVsbCB9XG5cbiAganVuY3Rpb25fZXhwciAobGVmdCkgeyByZXR1cm4gdGhpcy5pcygvJnxcXHwvKSA/IHRoaXMubmV4dF9leHByX25vZGUobGVmdCkgOiBudWxsIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2V4cHJlc3Npb25zLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBBcnJheUV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgYXJyYXlfZXhwciAoKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIG5vZGUuZGF0YS5hcmdzID0gW11cbiAgICB0aGlzLmV4cGVjdCgnb3Blbl9icmFja2V0JylcbiAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX2JyYWNrZXQnKSkge1xuICAgICAgbm9kZS5kYXRhLmFyZ3MgPSB0aGlzLmxvb3Bfd2hpbGUodGhpcy5leHByLCBudWxsLCAnY2xvc2VfYnJhY2tldCcsIGZhbHNlLCAnY29tbWF8ZW9sJylcbiAgICB9XG4gICAgdGhpcy5leHBlY3QoJ2Nsb3NlX2JyYWNrZXQnKVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2FycmF5LmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBEaWN0RXhwcmVzc2lvbnMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBkaWN0X2V4cHIgKCkge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICBub2RlLmRhdGEuZGVmID0gW11cbiAgICB0aGlzLmV4cGVjdCgnb3Blbl9jdXJseScpXG4gICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9jdXJseScpKSB7XG4gICAgICBub2RlLmRhdGEuZGVmID0gdGhpcy5sb29wX3doaWxlKHRoaXMua2V5X2xpdGVyYWwsIFsna2V5J10sICdjbG9zZV9jdXJseScsIGZhbHNlLCAnY29tbWF8ZW9sJylcbiAgICB9XG4gICAgdGhpcy5leHBlY3QoJ2Nsb3NlX2N1cmx5JylcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9kaWN0LmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBGbkV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZm5fZXhwciAoaWQsIHN0YXRlbWVudCA9IGZhbHNlKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuLCB7IGlkIH0pXG4gICAgbm9kZS5kYXRhLmFyZ3MgPSBbXVxuICAgIGlmIChzdGF0ZW1lbnQpIHtcbiAgICAgIG5vZGUuX2luX2NsYXNzID0gdGhpcy5pbl9jbGFzc1xuICAgICAgbm9kZS5fZm5fbGV2ZWwgPSB0aGlzLmZuX2xldmVsKytcbiAgICB9XG4gICAgdGhpcy5uZXh0KClcbiAgICB0aGlzLmZyYW1lcy5zdGFydCgnZm4nKVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgICAgbm9kZS5kYXRhLmFyZ3MgPSB0aGlzLmZuX2FyZ3NfZGVmKClcbiAgICAgIH1cbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIG5vZGUuZGF0YS5ib2R5ID0gdGhpcy5ibG9jaygnZW5kJywgZmFsc2UpXG4gICAgdGhpcy5mcmFtZXMuZW5kKClcbiAgICB0aGlzLmV4cGVjdCgnZW5kJylcbiAgICBpZiAoc3RhdGVtZW50KSB7XG4gICAgICB0aGlzLmZuX2xldmVsLS1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGZuX2FyZyAoKSB7XG4gICAgdGhpcy5mcmFtZXMuYWRkKHRoaXMudG9rZW4sIG51bGwsICd2YXInKVxuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICh0aGlzLmlzKCdhc3NpZ24nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIG5vZGUuZGF0YS5hc3NpZ24gPSB0aGlzLmV4cHIoKVxuICAgIH1cbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgZm5fYXJnc19kZWYgKCkgeyByZXR1cm4gdGhpcy5sb29wX3doaWxlKHRoaXMuZm5fYXJnLCBbJ2lkJ10sICdjbG9zZV9wYXJlbicsIGZhbHNlLCAnY29tbWF8ZW9sJykgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZm4uanMiLCJpbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbHMuanMnXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIElkRXhwcmVzc2lvbnMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBpZF9leHByIChmaXJzdCA9IHRydWUpIHtcbiAgICBpZiAoZmlyc3QgJiYgIXRoaXMuZnJhbWVzLmV4aXN0cyh0aGlzLnRva2VuLnZhbHVlKSkge1xuICAgICAgZXJyb3IodGhpcywgdGhpcy50b2tlbiwgJ3VuZGVjbGFyZWQgaWRlbnRpZmllcicpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAodGhpcy5pcygnb3Blbl9icmFja2V0JykpIHtcbiAgICAgIGlmICghbm9kZS5kYXRhLmZpZWxkcykge1xuICAgICAgICBub2RlLmRhdGEuZmllbGRzID0gW11cbiAgICAgIH1cbiAgICAgIG5vZGUuZGF0YS5maWVsZHMucHVzaCh0aGlzLmFycmF5X2V4cHIoKSlcbiAgICB9XG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fcGFyZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIG5vZGUudG9rZW4uX3R5cGUgPSAnZm4nXG4gICAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgICAgbm9kZS5kYXRhLmFyZ3MgPSB0aGlzLmV4cHJzKCdjbG9zZV9wYXJlbicsIGZhbHNlKVxuICAgICAgfVxuICAgICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICB9XG4gICAgd2hpbGUgKHRoaXMuaXMoWydpZF9maWVsZCcsICdvcGVuX2JyYWNrZXQnXSkpIHtcbiAgICAgIGlmICghbm9kZS5kYXRhLmZpZWxkcykge1xuICAgICAgICBub2RlLmRhdGEuZmllbGRzID0gW11cbiAgICAgIH1cbiAgICAgIG5vZGUuZGF0YS5maWVsZHMucHVzaCh0aGlzLmlkX2ZpZWxkKCkpXG4gICAgICB0aGlzLnNraXAoJ2NvbW1hJylcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGlkX2ZpZWxkICgpIHtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgbm9kZS5kYXRhLmFyZ3MgPSBbXVxuICAgIG5vZGUudG9rZW4uX3R5cGUgPSAnaWQnXG4gICAgbm9kZS5fZmllbGQgPSB0cnVlXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAodGhpcy5pcygnb3Blbl9icmFja2V0JykpIHtcbiAgICAgIGlmICghbm9kZS5kYXRhLmZpZWxkcykge1xuICAgICAgICBub2RlLmRhdGEuZmllbGRzID0gW11cbiAgICAgIH1cbiAgICAgIG5vZGUuZGF0YS5maWVsZHMucHVzaCh0aGlzLmFycmF5X2V4cHIoKSlcbiAgICB9XG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fcGFyZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIG5vZGUudG9rZW4uX3R5cGUgPSAnZm4nXG4gICAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgICAgbm9kZS5kYXRhLmFyZ3MgPSB0aGlzLmV4cHJzKCdjbG9zZV9wYXJlbicsIGZhbHNlKVxuICAgICAgfVxuICAgICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvaWQuanMiLCJpbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQ2xhc3NFeHByZXNzaW9ucyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIG5ld19leHByICgpIHtcbiAgICBsZXQgdG9rZW4gPSB0aGlzLnRva2VuXG4gICAgdGhpcy5uZXh0KClcbiAgICBsZXQgaWQgPSB0aGlzLnRva2VuXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAoIXRoaXMuZnJhbWVzLmV4aXN0cyhpZC52YWx1ZSwgJ2NsYXNzJykpIHtcbiAgICAgIGVycm9yKHRoaXMsIGlkLCAndW5kZWNsYXJlZCBjbGFzcycpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBsZXQgYXJncyA9IFtdXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fcGFyZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIGlmICghdGhpcy5pcygnY2xvc2VfcGFyZW4nKSkge1xuICAgICAgICBhcmdzID0gdGhpcy5leHBycygnY2xvc2VfcGFyZW4nLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHJldHVybiBuZXcgTm9kZSh0aGlzLCB0b2tlbiwgeyBpZCwgYXJncyB9KVxuICB9XG5cbiAgdGhpc19leHByICgpIHtcbiAgICBpZiAoIXRoaXMuaW5fY2xhc3MpIHtcbiAgICAgIGVycm9yKHRoaXMsIHRoaXMudG9rZW4sICdAIGNhbm5vdCBiZSB1c2VkIG91dHNpZGUgY2xhc3MgZGVmaW5pdGlvbicpXG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgaWYgKHRoaXMuaXMoJ3RoaXMnKSkge1xuICAgICAgcmV0dXJuIHRoaXMubmV4dF9leHByX25vZGUoKVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKCd0aGlzX2ZpZWxkJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmlkX2V4cHIoZmFsc2UpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBzdXBlcl9leHByICgpIHtcbiAgICBpZiAoIXRoaXMuaW5fY2xhc3MpIHtcbiAgICAgIGVycm9yKHRoaXMsIHRoaXMudG9rZW4sICdzdXBlciBjYW5ub3QgYmUgdXNlZCBvdXRzaWRlIGNsYXNzIGRlZmluaXRpb24nKVxuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlkX2V4cHIoZmFsc2UpXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2NsYXNzLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL3RlbXBsYXRlcy5qcydcbmltcG9ydCBDb2RlVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2NvZGUuanMnXG5pbXBvcnQgQmxvY2tUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvYmxvY2suanMnXG5pbXBvcnQgU3RhdGVtZW50VGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL3N0YXRlbWVudHMuanMnXG5pbXBvcnQgRXhwcmVzc2lvblRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9leHByZXNzaW9ucy5qcydcbmltcG9ydCBQcmltaXRpdmVUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvcHJpbWl0aXZlcy5qcydcbmltcG9ydCBPcGVyYXRvclRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9vcGVyYXRvcnMuanMnXG5pbXBvcnQgSWRUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvaWQuanMnXG5pbXBvcnQgQ2xhc3NUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvY2xhc3MuanMnXG5pbXBvcnQgRm5UZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvZm4uanMnXG5pbXBvcnQgQXJyYXlUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvYXJyYXkuanMnXG5pbXBvcnQgRGljdFRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9kaWN0LmpzJ1xuaW1wb3J0IEFzc2lnblRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9hc3NpZ24uanMnXG5cbmNsYXNzIEVtcHR5Q2xhc3Mge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNwaWxlciBleHRlbmRzIG1peChFbXB0eUNsYXNzKS53aXRoKFxuICBUZW1wbGF0ZXMsXG4gIENvZGVUZW1wbGF0ZXMsXG5cbiAgQmxvY2tUZW1wbGF0ZXMsXG4gIFN0YXRlbWVudFRlbXBsYXRlcyxcbiAgRXhwcmVzc2lvblRlbXBsYXRlcyxcblxuICBQcmltaXRpdmVUZW1wbGF0ZXMsXG4gIE9wZXJhdG9yVGVtcGxhdGVzLFxuICBJZFRlbXBsYXRlcyxcblxuICBDbGFzc1RlbXBsYXRlcyxcbiAgRm5UZW1wbGF0ZXMsXG5cbiAgQXJyYXlUZW1wbGF0ZXMsXG4gIERpY3RUZW1wbGF0ZXMsXG5cbiAgQXNzaWduVGVtcGxhdGVzXG4pIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7IHJldHVybiB0aGlzLmxpbmVzLmxlbmd0aCB9XG5cbiAgZ2V0IGVvcyAoKSB7IHJldHVybiB0aGlzLm9mZnNldCA+PSB0aGlzLm5vZGVzLmxlbmd0aCB9XG5cbiAgZ2V0IG5vZGUgKCkgeyByZXR1cm4gdGhpcy5ub2RlX2F0KHRoaXMub2Zmc2V0KSB9XG5cbiAgdmFsaWRPZmZzZXQgKG9mZnNldCkgeyByZXR1cm4gb2Zmc2V0ID49IDAgJiYgb2Zmc2V0IDwgdGhpcy5ub2Rlcy5sZW5ndGggfVxuXG4gIG5vZGVfYXQgKG9mZnNldCkgeyByZXR1cm4gdGhpcy52YWxpZE9mZnNldChvZmZzZXQpID8gdGhpcy5ub2Rlc1tvZmZzZXRdIDogbnVsbCB9XG5cbiAgcGVlayAoYyA9IDEpIHsgcmV0dXJuIHRoaXMubm9kZV9hdCh0aGlzLm9mZnNldCArIGMpIH1cblxuICBuZXh0IChjID0gMSkgeyB0aGlzLm9mZnNldCArPSBjIH1cblxuICB3cml0ZSAoLi4udmFsdWVzKSB7IHRoaXMubGluZSArPSB2YWx1ZXMuam9pbignJykgfVxuXG4gIHdyaXRlbG4gKC4uLnZhbHVlcykge1xuICAgIHRoaXMud3JpdGUoLi4udmFsdWVzKVxuICAgIHRoaXMubGluZXMgPSB0aGlzLmxpbmVzLmNvbmNhdCh0aGlzLmxpbmUuc3BsaXQoJ1xcbicpKVxuICAgIHRoaXMubGluZSA9ICcnXG4gIH1cblxuICByZXNldCAobm9kZXMpIHtcbiAgICB0aGlzLmVycm9ycyA9IDBcbiAgICB0aGlzLm5vZGVzID0gbm9kZXMgfHwgW11cbiAgICB0aGlzLmxpbmVzID0gW11cbiAgICB0aGlzLmxpbmUgPSAnJ1xuICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgIHRoaXMuY29kZSA9ICcnXG4gICAgdGhpcy5pbmRlbnRfbGV2ZWwgPSAwXG4gIH1cblxuICBjb21tYSAobm9kZXMpIHtcbiAgICBsZXQgYSA9IFtdXG4gICAgZm9yIChsZXQgbiBvZiBub2Rlcykge1xuICAgICAgYS5wdXNoKG4gaW5zdGFuY2VvZiBOb2RlID8gdGhpcy5leHByKG4pIDogbilcbiAgICB9XG4gICAgcmV0dXJuIGEuam9pbignLCAnKVxuICB9XG5cbiAgbG4gKHN0cikgeyByZXR1cm4gc3RyICsgKCFfLmVuZHNXaXRoKHN0ciwgJ1xcbicpID8gJ1xcbicgOiAnJykgfVxuXG4gIGluZGVudCAoc3RyKSB7IHJldHVybiBfLnBhZFN0YXJ0KCcnLCB0aGlzLmluZGVudF9sZXZlbCAqIDIpICsgc3RyIH1cblxuICBzdHIgKHZhbHVlKSB7IHJldHVybiAnXFwnJyArIHZhbHVlLnJlcGxhY2UoLycvZywgJ1xcJycpICsgJ1xcJycgfVxuXG4gIHJ1biAobm9kZXMpIHtcbiAgICB0aGlzLnJlc2V0KG5vZGVzKVxuICAgIHRoaXMuY29kZV9zdGFydCgpXG4gICAgd2hpbGUgKCF0aGlzLmVvcykge1xuICAgICAgdGhpcy53cml0ZWxuKHRoaXMuc3RhdGVtZW50KHRoaXMubm9kZSkpXG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgICB0aGlzLmNvZGVfZW5kKClcbiAgICB0aGlzLmNvZGUgPSB0aGlzLmxpbmVzLmpvaW4oJ1xcbicpXG4gICAgcmV0dXJuIHRoaXMuY29kZVxuICB9XG5cbiAgZHVtcCAoKSB7XG4gICAgY29uc29sZS5pbmZvKCd0cmFuc3BpbGVyIGR1bXAnKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29kZSlcbiAgICBjb25zb2xlLmxvZygnJylcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdHJhbnNwaWxlci5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICB0ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIGlmIChfLmlzU3RyaW5nKG5vZGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlX3RlbXBsYXRlKG5vZGUpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2ZuJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmZuX2NhbGxfdGVtcGxhdGUobm9kZSlcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnZm5fYXNzaWduJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmZuX2Fzc2lnbl90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKCdvcGVuX2JyYWNrZXQnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuYXJyYXlfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnb3Blbl9jdXJseScpKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaWN0X3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoWydtYXRoJywgJ2xvZ2ljJywgJ2NvbXAnXSkpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wZXJhdG9yX3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoWyd0aGlzJywgJ3RoaXNfZmllbGQnXSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoaXNfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnbmV3JykpIHtcbiAgICAgIHJldHVybiB0aGlzLm5ld190ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKFsnY2hhcicsICdzdHJpbmcnXSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0cmluZ190ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKCdpZCcpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pZF90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlX3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBDb2RlVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgY29kZV9zdGFydF90ZW1wbGF0ZSAoKSB7XG4gICAgdGhpcy53cml0ZWxuKCcoZnVuY3Rpb24gKCkgeycpXG4gICAgdGhpcy5pbmRlbnRfbGV2ZWwrK1xuICAgIHRoaXMud3JpdGVsbignXFwndXNlIHN0cmljdFxcJzsnKVxuICAgIHRoaXMud3JpdGVsbigpXG4gIH1cblxuICBjb2RlX2VuZF90ZW1wbGF0ZSAoKSB7XG4gICAgdGhpcy53cml0ZWxuKCd9KSgpOycpXG4gICAgdGhpcy5pbmRlbnRfbGV2ZWwtLVxuICAgIHRoaXMud3JpdGVsbigpXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvY29kZS5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBCbG9ja1RlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGJsb2NrX3RlbXBsYXRlIChub2RlKSB7XG4gICAgbGV0IHN0ciA9IHRoaXMubG4oJ3snKVxuXG4gICAgdGhpcy5pbmRlbnRfbGV2ZWwrK1xuXG4gICAgaWYgKF8uaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yIChsZXQgbiBvZiBub2RlKSB7XG4gICAgICAgIHN0ciArPSB0aGlzLnN0YXRlbWVudF90ZW1wbGF0ZShuKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHN0ciA9IHRoaXMuc3RhdGVtZW50X3RlbXBsYXRlKG5vZGUpXG4gICAgfVxuXG4gICAgdGhpcy5pbmRlbnRfbGV2ZWwtLVxuXG4gICAgc3RyICs9IHRoaXMubG4odGhpcy5pbmRlbnQoJ30nKSlcblxuICAgIHJldHVybiBzdHJcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9ibG9jay5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBTdGF0ZW1lbnRUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBzdGF0ZW1lbnRfdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICBsZXQgc3RyID0gJydcblxuICAgIGlmIChfLmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAobGV0IG4gb2Ygbm9kZSkge1xuICAgICAgICBzdHIgKz0gdGhpcy5zdGF0ZW1lbnQobilcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZSkge1xuICAgICAgbGV0IGQgPSBub2RlLmRhdGEgfHwge31cbiAgICAgIGxldCB0ID0ge31cblxuICAgICAgaWYgKG5vZGUuaXMoWydhc3NpZ24nLCAnZm5fYXNzaWduJ10pKSB7XG4gICAgICAgIHQgPSB0aGlzLmFzc2lnbihub2RlKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnZm4nKSkge1xuICAgICAgICB0ID0gdGhpcy5mbl9jYWxsKG5vZGUsIHRydWUpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChub2RlLmlzKCdpZicpKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgdG1wbDogJ2lmICgje2V4cHJ9KSAje3RydWVfYm9keX0je2ZhbHNlX2JvZHl9JyxcbiAgICAgICAgICBkYXQ6IHtcbiAgICAgICAgICAgIGV4cHI6IHRoaXMuZXhwcihkLmV4cHIpLFxuICAgICAgICAgICAgdHJ1ZV9ib2R5OiB0aGlzLmJsb2NrKGQudHJ1ZV9ib2R5KSxcbiAgICAgICAgICAgIGZhbHNlX2JvZHk6IHRoaXMuc3RhdGVtZW50KGQuZmFsc2VfYm9keSksXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChub2RlLmlzKCdlbHNlJykpIHtcbiAgICAgICAgaWYgKGQuZXhwcikgeyAvLyBlbHNlIGlmXG4gICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgIHRtcGw6ICdlbHNlIGlmICgje2V4cHJ9KSAje3RydWVfYm9keX0je2ZhbHNlX2JvZHl9JyxcbiAgICAgICAgICAgIGRhdDoge1xuICAgICAgICAgICAgICBleHByOiB0aGlzLmV4cHIoZC5leHByKSxcbiAgICAgICAgICAgICAgdHJ1ZV9ib2R5OiB0aGlzLmJsb2NrKGQudHJ1ZV9ib2R5KSxcbiAgICAgICAgICAgICAgZmFsc2VfYm9keTogdGhpcy5zdGF0ZW1lbnQoZC5mYWxzZV9ib2R5KSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgIHRtcGw6ICdlbHNlICN7ZmFsc2VfYm9keX0nLFxuICAgICAgICAgICAgZGF0OiB7IGZhbHNlX2JvZHk6IHRoaXMuYmxvY2soZC5mYWxzZV9ib2R5KSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChub2RlLmlzKCd3aGlsZScpKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgdG1wbDogJ3doaWxlICgje2V4cHJ9KSAje2JvZHl9JyxcbiAgICAgICAgICBkYXQ6IHtcbiAgICAgICAgICAgIGV4cHI6IHRoaXMuZXhwcihkLmV4cHIpLFxuICAgICAgICAgICAgYm9keTogdGhpcy5ibG9jayhkLmJvZHkpLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnZm9yJykpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICB0bXBsOiAnZm9yIChsZXQgI3t2fSA9ICN7bWluX2V4cHJ9OyAje3Z9IDwgI3ttYXhfZXhwcn07ICN7dn0gKz0gI3tzdGVwX2V4cHJ9KSAje2JvZHl9JyxcbiAgICAgICAgICBkYXQ6IHtcbiAgICAgICAgICAgIHY6IGQudi52YWx1ZSxcbiAgICAgICAgICAgIG1pbl9leHByOiB0aGlzLmV4cHIoZC5taW5fZXhwciksXG4gICAgICAgICAgICBtYXhfZXhwcjogdGhpcy5leHByKGQubWF4X2V4cHIpLFxuICAgICAgICAgICAgc3RlcF9leHByOiBkLnN0ZXBfZXhwciA/IHRoaXMuZXhwcihkLnN0ZXBfZXhwcikgOiAnMScsXG4gICAgICAgICAgICBib2R5OiB0aGlzLmJsb2NrKGQuYm9keSksXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChub2RlLmlzKCdyZXR1cm4nKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICdyZXR1cm4gI3thcmdzfScsXG4gICAgICAgICAgZGF0OiB7IGFyZ3M6IHRoaXMuZXhwcihkLmFyZ3MsICcsICcpIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcyhbJ2JyZWFrJywgJ2NvbnRpbnVlJ10pKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgdG1wbDogJyN7d29yZH0nLFxuICAgICAgICAgIGRhdDogeyB3b3JkOiBub2RlLnZhbHVlIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnY2xhc3MnKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICdjbGFzcyAje25hbWV9I3tfZXh0ZW5kc30gI3tib2R5fScsXG4gICAgICAgICAgZGF0OiB7XG4gICAgICAgICAgICBuYW1lOiBkLmlkLnZhbHVlLFxuICAgICAgICAgICAgX2V4dGVuZHM6IGQuX2V4dGVuZHMgPyAnIGV4dGVuZHMgJyArIHRoaXMuZXhwcihkLl9leHRlbmRzLCAnLCAnKSA6ICcnLFxuICAgICAgICAgICAgYm9keTogdGhpcy5ibG9jayhkLmJvZHkpLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdHIgPSBfLnRlbXBsYXRlKHQudG1wbCkodC5kYXQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubG4odGhpcy5pbmRlbnQoc3RyKSlcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9zdGF0ZW1lbnRzLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEV4cHJlc3Npb25UZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBleHByX3RlbXBsYXRlIChub2RlLCBzZXBhcmF0b3IpIHtcbiAgICBsZXQgc3RyID0gJydcblxuICAgIGlmIChfLmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGxldCBhID0gW11cbiAgICAgIGZvciAobGV0IG4gb2Ygbm9kZSkge1xuICAgICAgICBhLnB1c2godGhpcy5leHByKG4pKVxuICAgICAgfVxuICAgICAgc3RyID0gYS5qb2luKHNlcGFyYXRvciB8fCAnJylcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgIGxldCBkID0gbm9kZSAmJiBub2RlLmRhdGEgfHwge31cbiAgICAgIGxldCB0ID0gbm9kZSA/IHRoaXMudGVtcGxhdGUobm9kZSwgZCkgOiB7IHRtcGw6ICd1bmRlZmluZWQnLCBkYXQ6IHt9IH1cbiAgICAgIHN0ciA9IF8udGVtcGxhdGUodC50bXBsKSh0LmRhdClcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZXhwcmVzc2lvbnMuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgUHJpbWl0aXZlVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgc3RyaW5nX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje3ZhbHVlfScsXG4gICAgICBkYXQ6IHsgdmFsdWU6IHRoaXMuc3RyKG5vZGUudmFsdWUpIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvcHJpbWl0aXZlcy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBPcGVyYXRvclRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIG9wZXJhdG9yX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje2xlZnR9ICN7b3B9ICN7cmlnaHR9JyxcbiAgICAgIGRhdDoge1xuICAgICAgICBvcDogbm9kZS52YWx1ZSxcbiAgICAgICAgbGVmdDogdGhpcy5leHByX3RlbXBsYXRlKGQubGVmdCksXG4gICAgICAgIHJpZ2h0OiB0aGlzLmV4cHJfdGVtcGxhdGUoZC5yaWdodCksXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL29wZXJhdG9ycy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJZFRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIG5vZGVfdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG1wbDogJyN7bm9kZX0nLFxuICAgICAgZGF0OiB7IG5vZGUgfVxuICAgIH1cbiAgfVxuXG4gIGlkX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje2ZpZWxkfSN7dmFsdWV9I3tmaWVsZHN9I3thc3NpZ259JyxcbiAgICAgIGRhdDoge1xuICAgICAgICBmaWVsZDogbm9kZS5fZmllbGQgPyAnLicgOiAnJyxcbiAgICAgICAgdmFsdWU6IG5vZGUudmFsdWUsXG4gICAgICAgIGZpZWxkczogZC5maWVsZHMgPyB0aGlzLmV4cHJfdGVtcGxhdGUoZC5maWVsZHMsICcnKSA6ICcnLFxuICAgICAgICBhc3NpZ246IGQuYXNzaWduID8gJyA9ICcgKyB0aGlzLmV4cHJfdGVtcGxhdGUoZC5hc3NpZ24sICcnKSA6ICcnLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhbHVlX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje3ZhbHVlfScsXG4gICAgICBkYXQ6IHsgdmFsdWU6IG5vZGUudmFsdWUgfVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9pZC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBDbGFzc1RlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIHRoaXNfdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG1wbDogJ3RoaXMje2RvdH0je2ZpZWxkfSN7ZmllbGRzfScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgZG90OiBub2RlLmlzKCd0aGlzX2ZpZWxkJykgPyAnLicgOiAnJyxcbiAgICAgICAgZmllbGQ6IG5vZGUuaXMoJ3RoaXNfZmllbGQnKSA/IG5vZGUudmFsdWUgOiAnJyxcbiAgICAgICAgZmllbGRzOiBkLmZpZWxkcyA/IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmZpZWxkcywgJycpIDogJycsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3X3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICduZXcgI3tpZH0oI3thcmdzfSknLFxuICAgICAgZGF0OiB7XG4gICAgICAgIGlkOiBkLmlkLnZhbHVlLFxuICAgICAgICBhcmdzOiB0aGlzLmV4cHJfdGVtcGxhdGUoZC5hcmdzLCAnLCAnKSxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvY2xhc3MuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgRm5UZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBmbl9kZWYgKGFyZ3MsIGJvZHksIGluX2NsYXNzKSB7XG4gICAgcmV0dXJuIF8udGVtcGxhdGUoJyN7Zm59KCN7YXJnc30pICN7Ym9keX0nKSh7XG4gICAgICBmbjogIWluX2NsYXNzID8gJ2Z1bmN0aW9uICcgOiAnJyxcbiAgICAgIGFyZ3M6IHRoaXMuZXhwcl90ZW1wbGF0ZShhcmdzLCAnLCAnKSxcbiAgICAgIGJvZHk6IHRoaXMuYmxvY2tfdGVtcGxhdGUoYm9keSksXG4gICAgfSlcbiAgfVxuXG4gIGZuX2NhbGxfdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICBsZXQgdCA9IHt9XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGxldCBkID0gbm9kZS5kYXRhIHx8IHt9XG4gICAgICB0ID0ge1xuICAgICAgICB0bXBsOiAnI3tmaWVsZH0je2ZufSgje2FyZ3N9KScsXG4gICAgICAgIGRhdDoge1xuICAgICAgICAgIGZpZWxkOiBub2RlLl9maWVsZCA/ICcuJyA6ICcnLFxuICAgICAgICAgIGZuOiBub2RlLnZhbHVlLFxuICAgICAgICAgIGFyZ3M6IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmFyZ3MsICcsICcpLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0XG4gIH1cblxuICBmbl9hc3NpZ25fdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG1wbDogJyN7Zm59JyxcbiAgICAgIGRhdDogeyBmbjogdGhpcy5mbl9kZWYoZC5hcmdzLCBkLmJvZHkpIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZm4uanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQXJyYXlUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBhcnJheV90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnWyN7YXJnc31dI3tmaWVsZHN9JyxcbiAgICAgIGRhdDoge1xuICAgICAgICBhcmdzOiB0aGlzLmV4cHJfdGVtcGxhdGUoZC5hcmdzLCAnLCAnKSxcbiAgICAgICAgZmllbGRzOiBkLmZpZWxkcyA/IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmZpZWxkcywgJycpIDogJycsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2FycmF5LmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIERpY3RUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBkaWN0X3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgbGV0IGRlZiA9IF8ubWFwKGQuZGVmLCBmID0+IF8udGVtcGxhdGUoJyN7dmFsdWV9OiAje2V4cHJ9JykoeyB2YWx1ZTogZi52YWx1ZSwgZXhwcjogdGhpcy5leHByX3RlbXBsYXRlKGYuZGF0YS5leHByKSB9KSlcbiAgICByZXR1cm4ge1xuICAgICAgdG1wbDogJ3sje2RlZn19I3tmaWVsZHN9JyxcbiAgICAgIGRhdDoge1xuICAgICAgICBkZWY6IHRoaXMuZXhwcl90ZW1wbGF0ZShkZWYsICcsICcpLFxuICAgICAgICBmaWVsZHM6IGQuZmllbGRzID8gdGhpcy5leHByX3RlbXBsYXRlKGQuZmllbGRzLCAnJykgOiAnJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9kaWN0LmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEFzc2lnblRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGFzc2lnbl90ZW1wbGF0ZSAobm9kZSkge1xuICAgIGxldCB0ID0ge31cbiAgICBpZiAobm9kZSkge1xuICAgICAgbGV0IGQgPSBub2RlLmRhdGEgfHwge31cblxuICAgICAgbGV0IGlkID0gdGhpcy5leHByX3RlbXBsYXRlKGQuaWQpXG4gICAgICBsZXQgX2xldCA9IG5vZGUuX2xldCA/ICdsZXQgJyA6ICcnXG4gICAgICBsZXQgZXhwclxuICAgICAgbGV0IG9wXG5cbiAgICAgIGlmIChub2RlLmlzKCdhc3NpZ24nKSkge1xuICAgICAgICBvcCA9ICcgJyArIG5vZGUudmFsdWUgKyAnICdcbiAgICAgICAgZXhwciA9IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmV4cHIpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChub2RlLmlzKCdmbl9hc3NpZ24nKSkge1xuICAgICAgICBvcCA9ICFub2RlLl9pbl9jbGFzcyB8fCBub2RlLl9mbl9sZXZlbCA+IDAgPyAnID0gJyA6ICcgJ1xuICAgICAgICBleHByID0gdGhpcy5mbl9kZWYoZC5hcmdzLCBkLmJvZHksIG5vZGUuX2luX2NsYXNzICYmIG5vZGUuX2ZuX2xldmVsID09PSAwKVxuICAgICAgfVxuXG4gICAgICB0ID0ge1xuICAgICAgICB0bXBsOiAnI3tfbGV0fSN7aWR9I3tvcH0je2V4cHJ9JyxcbiAgICAgICAgZGF0OiB7IF9sZXQsIGlkLCBvcCwgZXhwciB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvYXNzaWduLmpzIiwiaW1wb3J0IGhleHkgZnJvbSAnaGV4eSdcbmltcG9ydCB7IGhleCB9IGZyb20gJy4uL2dsb2JhbHMuanMnXG5cbmV4cG9ydCBjb25zdCBkYXRhX3R5cGVfc2l6ZXMgPSB7XG4gIGk4OiAxLFxuICBzODogMSxcbiAgaTE2OiAyLFxuICBzMTY6IDIsXG4gIGkzMjogNCxcbiAgczMyOiA0LFxuICBmMzI6IDQsXG4gIHN0cjogNjQsXG59XG5cbmV4cG9ydCBjb25zdCBkYXRhX3R5cGVfZm5zID0ge1xuICBpODogJ1VpbnQ4JyxcbiAgczg6ICdJbnQ4JyxcbiAgaTE2OiAnVWludDE2JyxcbiAgczE2OiAnSW50MTYnLFxuICBpMzI6ICdVaW50MzInLFxuICBzMzI6ICdJbnQzMicsXG4gIGYzMjogJ0Zsb2F0MzInLFxufVxuXG5leHBvcnQgdmFyIGRhdGFfdHlwZV9zaXplID0gdHlwZSA9PiBfLmlzTnVtYmVyKHR5cGUpID8gdHlwZSA6IGRhdGFfdHlwZV9zaXplc1t0eXBlXVxuXG5leHBvcnQgY2xhc3MgTWVtb3J5IHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHRoaXMuX3NpemUgPSBtYWluLmRlZmF1bHRzKCdtZW1vcnkuc2l6ZScpXG4gICAgdGhpcy5fdG9wID0gMFxuICAgIHRoaXMuX2JvdHRvbSA9IHRoaXMuX3RvcCArIHRoaXMuX3NpemUgLSAxXG5cbiAgICB0aGlzLl9idWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy5fc2l6ZSlcblxuICAgIHRoaXMuX2RhdGEgPSBuZXcgVWludDhBcnJheSh0aGlzLl9idWZmZXIpXG5cbiAgICB0aGlzLl92aWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuX2J1ZmZlcilcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGVhcigpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl92aWV3ID0gbnVsbFxuICAgIHRoaXMuX2RhdGEgPSBudWxsXG4gICAgdGhpcy5fYnVmZmVyID0gbnVsbFxuICB9XG5cbiAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fbWFpbiB9XG5cbiAgZ2V0IGJ1ZmZlciAoKSB7IHJldHVybiB0aGlzLl9idWZmZXIgfVxuICBnZXQgZGF0YSAoKSB7IHJldHVybiB0aGlzLl9kYXRhIH1cbiAgZ2V0IHZpZXcgKCkgeyByZXR1cm4gdGhpcy5fdmlldyB9XG4gIGdldCB0b3AgKCkgeyByZXR1cm4gdGhpcy5fdG9wIH1cbiAgZ2V0IGJvdHRvbSAoKSB7IHJldHVybiB0aGlzLl9ib3R0b20gfVxuICBnZXQgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9zaXplIH1cblxuICBjbGVhciAoZCA9IDApIHtcbiAgICB0aGlzLmZpbGwoMCwgdGhpcy5fdG9wLCB0aGlzLl9zaXplKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBjaGtfYm91bmRzIChhZGRyLCBzeiA9IDQpIHtcbiAgICBpZiAoYWRkciA8IHRoaXMuX3RvcCB8fCBhZGRyICsgc3ogPiB0aGlzLl9ib3R0b20pIHtcbiAgICAgIHRoaXMuaGx0KDB4MDgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkYiAodHlwZSwgYWRkciwgLi4uYXJncykge1xuICAgIGxldCBzeiA9IGRhdGFfdHlwZV9zaXplc1t0eXBlXVxuICAgIGxldCBmbiA9IHRoaXMuX3ZpZXdbJ3NldCcgKyBkYXRhX3R5cGVfZm5zW3R5cGVdXVxuICAgIGZvciAobGV0IGEgb2YgYXJncykge1xuICAgICAgZm4uY2FsbCh0aGlzLl92aWV3LCBhZGRyLCBhKVxuICAgICAgYWRkciArPSBzelxuICAgIH1cbiAgICByZXR1cm4gYWRkclxuICB9XG5cbiAgZGJfYmMgKHR5cGUsIGFkZHIsIC4uLmFyZ3MpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgYXJncy5sZW5ndGggKiBkYXRhX3R5cGVfc2l6ZXNbdHlwZV0pXG4gICAgdGhpcy5kYih0eXBlLCBhZGRyLCAuLi5hcmdzKVxuICB9XG5cbiAgbGQgKHR5cGUsIGFkZHIpIHsgcmV0dXJuIHRoaXMuX3ZpZXdbJ2dldCcgKyBkYXRhX3R5cGVfZm5zW3R5cGVdXShhZGRyLCBfdm0ubGl0dGxlRW5kaWFuKSB9XG5cbiAgbGRiIChhZGRyKSB7IHJldHVybiB0aGlzLmxkKCdpOCcsIGFkZHIpIH1cblxuICBsZHcgKGFkZHIpIHsgcmV0dXJuIHRoaXMubGQoJ2kxNicsIGFkZHIpIH1cblxuICBsZGQgKGFkZHIpIHsgcmV0dXJuIHRoaXMubGQoJ2kzMicsIGFkZHIpIH1cblxuICBsZGYgKGFkZHIpIHsgcmV0dXJuIHRoaXMubGQoJ2YzMicsIGFkZHIpIH1cblxuICBsZF9iYyAodHlwZSwgYWRkcikge1xuICAgIHRoaXMuY2hrX2JvdW5kcyhhZGRyLCBkYXRhX3R5cGVfc2l6ZXNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXMubGQodHlwZSwgYWRkcilcbiAgfVxuXG4gIHN0ICh0eXBlLCBhZGRyLCB2YWx1ZSkgeyB0aGlzLl92aWV3WydzZXQnICsgZGF0YV90eXBlX2Zuc1t0eXBlXV0oYWRkciwgdmFsdWUsIF92bS5saXR0bGVFbmRpYW4pIH1cblxuICBzdGIgKGFkZHIsIHZhbHVlKSB7IHRoaXMuc3QoJ2k4JywgYWRkciwgdmFsdWUpIH1cblxuICBzdHcgKGFkZHIsIHZhbHVlKSB7IHRoaXMuc3QoJ2kxNicsIGFkZHIsIHZhbHVlKSB9XG5cbiAgc3RkIChhZGRyLCB2YWx1ZSkgeyB0aGlzLnN0KCdpMzInLCBhZGRyLCB2YWx1ZSkgfVxuXG4gIHN0ZiAoYWRkciwgdmFsdWUpIHsgdGhpcy5zdCgnZjMyJywgYWRkciwgdmFsdWUpIH1cblxuICBzdF9iYyAodHlwZSwgYWRkciwgdmFsdWUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgZGF0YV90eXBlX3NpemVzW3R5cGVdKVxuICAgIHRoaXMuc3QodHlwZSwgYWRkciwgdmFsdWUpXG4gIH1cblxuICBsZGwgKGFkZHIsIHNpemUpIHsgcmV0dXJuIHRoaXMuX2RhdGEuc2xpY2UoYWRkciwgYWRkciArIHNpemUgLSAxKSB9XG5cbiAgbGRsX2JjIChhZGRyLCBzaXplKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKGFkZHIsIHNpemUpXG4gICAgcmV0dXJuIHRoaXMubGRsKGFkZHIsIHNpemUpXG4gIH1cblxuICBsZHMgKGFkZHIsIHNpemUpIHtcbiAgICBpZiAoXy5pc1N0cmluZyhhZGRyKSkgeyAgLy8gYXNzZW1ibGVyIHdpbGwgdXNlIGxkcyhcIlwiKVxuICAgICAgcmV0dXJuIGFkZHJcbiAgICB9XG5cbiAgICBsZXQgcyA9ICcnXG4gICAgc2l6ZSA9IHNpemUgfHwgZGF0YV90eXBlX3NpemVzLnN0clxuICAgIGxldCBib3R0b20gPSBNYXRoLm1pbihhZGRyICsgc2l6ZSAtIDEsIHRoaXMuX2JvdHRvbSlcbiAgICBsZXQgbWVtID0gdGhpcy5fZGF0YVxuICAgIHdoaWxlIChhZGRyIDw9IGJvdHRvbSkge1xuICAgICAgbGV0IGMgPSBtZW1bYWRkcisrXVxuICAgICAgaWYgKGMgPT09IDApIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYylcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNcbiAgfVxuXG4gIGxkc19iYyAoYWRkciwgc2l6ZSkge1xuICAgIHRoaXMuY2hrX2JvdW5kcyhhZGRyLCBNYXRoLm1pbihzaXplIHx8IDAsIGRhdGFfdHlwZV9zaXplcy5zdHIpKVxuICAgIHJldHVybiB0aGlzLmxkcyhhZGRyLCBzaXplKVxuICB9XG5cbiAgc3RsIChhZGRyLCB2YWx1ZSwgc2l6ZSkgeyB0aGlzLl9kYXRhLnNldCh2YWx1ZS5zdWJhcnJheSgwLCBzaXplIHx8IHZhbHVlLmJ5dGVMZW5ndGgpLCBhZGRyKSB9XG5cbiAgc3RsX2JjIChhZGRyLCB2YWx1ZSwgc2l6ZSkge1xuICAgIHRoaXMuY2hrX2JvdW5kcyhhZGRyLCBNYXRoLm1pbihzaXplIHx8IDAsIHZhbHVlLmJ5dGVMZW5ndGgpKVxuICAgIHRoaXMuc3RsKGFkZHIsIHZhbHVlLCBzaXplKVxuICB9XG5cbiAgc3RzIChhZGRyLCBzdHIsIHNpemUpIHtcbiAgICBzaXplID0gc2l6ZSB8fCBkYXRhX3R5cGVfc2l6ZXMuc3RyIC0gMVxuICAgIGxldCBhID0gXy5tYXAoc3RyLnNwbGl0KCcnKSwgaSA9PiBpLmNoYXJDb2RlQXQoMCkpXG4gICAgYS5sZW5ndGggPSBNYXRoLm1pbihzaXplLCBhLmxlbmd0aClcbiAgICB0aGlzLmZpbGwoMCwgYWRkciwgc2l6ZSlcbiAgICB0aGlzLl9kYXRhLnNldChhLCBhZGRyKVxuICB9XG5cbiAgc3RzX2JjIChhZGRyLCBzdHIsIHNpemUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgTWF0aC5taW4oc2l6ZSwgZGF0YV90eXBlX3NpemVzLnN0cikpXG4gICAgdGhpcy5zdHMoYWRkciwgc3RyLCBzaXplKVxuICB9XG5cbiAgZmlsbCAodmFsdWUsIHRvcCwgc2l6ZSkgeyB0aGlzLl9kYXRhLmZpbGwodmFsdWUgfHwgMCwgdG9wLCB0b3AgKyBzaXplKSB9XG5cbiAgZmlsbF9iYyAodmFsdWUsIHRvcCwgc2l6ZSkge1xuICAgIHRoaXMuY2hrX2JvdW5kcyh0b3AsIHNpemUpXG4gICAgdGhpcy5maWxsKHZhbHVlLCB0b3AsIHNpemUpXG4gIH1cblxuICBjb3B5IChzcmMsIHRndCwgc2l6ZSkgeyB0aGlzLl9kYXRhLmNvcHlXaXRoaW4odGd0LCBzcmMsIHNyYyArIHNpemUgLSAxKSB9XG5cbiAgY29weV9iYyAoc3JjLCB0Z3QsIHNpemUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoc3JjLCBzaXplKVxuICAgIHRoaXMuY2hrX2JvdW5kcyh0Z3QsIHNpemUpXG4gICAgdGhpcy5jb3B5KHNyYywgdGd0LCBzaXplKVxuICB9XG5cbiAgcmVhZCAoYWRkciwgdHlwZSA9ICdpOCcpIHtcbiAgICBsZXQgdmFsdWVcbiAgICBpZiAoXy5pc051bWJlcih0eXBlKSkge1xuICAgICAgdmFsdWUgPSB0aGlzLl9kYXRhLnNsaWNlKGFkZHIsIGFkZHIgKyB0eXBlIC0gMSlcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cicpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5sZHMoYWRkcilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubGQodHlwZSwgYWRkcilcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICB3cml0ZSAodmFsdWUsIGFkZHIsIHR5cGUgPSAnaTgnKSB7XG4gICAgbGV0IHN6XG4gICAgaWYgKF8uaXNOdW1iZXIodHlwZSkpIHtcbiAgICAgIHRoaXMuX2RhdGEuc2V0KHZhbHVlLnN1YmFycmF5KDAsIHR5cGUgLSAxKSwgYWRkcilcbiAgICAgIHN6ID0gdHlwZVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3RyJykge1xuICAgICAgdGhpcy5zdHMoYWRkciwgdmFsdWUpXG4gICAgICBzeiA9IGRhdGFfdHlwZV9zaXplc1t0eXBlXVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3QodHlwZSwgYWRkciwgdmFsdWUpXG4gICAgICBzeiA9IGRhdGFfdHlwZV9zaXplc1t0eXBlXVxuICAgIH1cbiAgICByZXR1cm4gYWRkciArIHN6XG4gIH1cblxuICBmcm9tX3N0cmluZyAoYWRkciwgc3RyKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgdyA9IHN0ci5sZW5ndGhcblxuICAgIGxldCB0aSA9IGFkZHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHc7IHgrKykge1xuICAgICAgZGF0YVt0aSsrXSA9IHN0ci5jaGFyQ29kZUF0KHgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpXG4gIH1cblxuICBmcm9tX3N0cmluZ19tYXNrIChhZGRyLCBzdHIsIG1hc2spIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGxldCB3ID0gc3RyLmxlbmd0aFxuXG4gICAgbGV0IHRpID0gYWRkclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgdzsgeCsrKSB7XG4gICAgICBkYXRhW3RpKytdID0gbWFza1tzdHJbeF1dXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpXG4gIH1cblxuICB0b19zdHJpbmcgKGFkZHIsIHNpemUpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGxldCBzID0gJydcblxuICAgIGxldCB0aSA9IGFkZHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemU7IHkrKykge1xuICAgICAgcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGRhdGFbdGkrK10pXG4gICAgfVxuXG4gICAgcmV0dXJuIHNcbiAgfVxuXG4gIHRvX3N0cmluZ19tYXNrIChhZGRyLCBzaXplLCBtYXNrKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgcyA9ICcnXG5cbiAgICBsZXQgdGkgPSBhZGRyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplOyB5KyspIHtcbiAgICAgIHMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShtYXNrW2RhdGFbdGkrK11dKVxuICAgIH1cblxuICAgIHJldHVybiBzXG4gIH1cblxuICBmcm9tX2FycmF5IChhZGRyLCBhcnIpIHtcbiAgICBsZXQgaCA9IGFyci5sZW5ndGhcblxuICAgIGxldCB0aSA9IGFkZHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGg7IHkrKykge1xuICAgICAgdGkgPSB0aGlzLmZyb21fc3RyaW5nKHRpLCBhcnJbeV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpXG4gIH1cblxuICBmcm9tX2FycmF5X21hc2sgKGFkZHIsIGFyciwgbWFzayA9IHt9KSB7XG4gICAgbGV0IGggPSBhcnIubGVuZ3RoXG5cbiAgICBsZXQgdGkgPSBhZGRyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICAgIHRpID0gdGhpcy5mcm9tX3N0cmluZ19tYXNrKHRpLCBhcnJbeV0sIG1hc2spXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpXG4gIH1cblxuICB0b19hcnJheSAoYWRkciwgdywgaCkge1xuICAgIGxldCBhcnIgPSBbXVxuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICAgIGFyci5wdXNoKHRoaXMudG9fc3RyaW5nKGFkZHIgKyB5ICogdywgdykpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFyclxuICB9XG5cbiAgdG9fYXJyYXlfbWFzayAoYWRkciwgdywgaCwgbWFzaykge1xuICAgIGxldCBhcnIgPSBbXVxuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICAgIGFyci5wdXNoKHRoaXMudG9fc3RyaW5nX21hc2soYWRkciArIHkgKiB3LCB3LCBtYXNrKSlcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyXG4gIH1cblxuICBkdW1wIChhZGRyID0gMCwgc2l6ZSA9IDEwMjQpIHtcbiAgICBjb25zb2xlLmxvZygnRHVtcGluZycsIHNpemUsICcgYnl0ZXMgZnJvbSBtZW1vcnkgYXQgJywgaGV4KGFkZHIpKVxuICAgIGNvbnNvbGUubG9nKGhleHkuaGV4eSh0aGlzLl9idWZmZXIsIHsgb2Zmc2V0OiBhZGRyLCBsZW5ndGg6IHNpemUsIHdpZHRoOiAxNiwgY2FwczogJ3VwcGVyJywgaW5kZW50OiAyIH0pKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9tZW1vcnkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZXh5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaGV4eVwiXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaGV4eSBmcm9tICdoZXh5J1xuaW1wb3J0IHByZXR0eUJ5dGVzIGZyb20gJ3ByZXR0eS1ieXRlcydcbmltcG9ydCB7IGRhdGFfdHlwZV9zaXplIH0gZnJvbSAnLi9tZW1vcnkuanMnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtb3J5TWFuYWdlciB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICB0aGlzLl9tYWluID0gbWFpblxuXG4gICAgdGhpcy5fY29sbGVjdF9kZWxheSA9IG1haW4uZGVmYXVsdHMoJ21lbW9yeV9tYW5hZ2VyLmNvbGxlY3RfZGVsYXknKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fYmxvY2tzID0gW11cbiAgICB0aGlzLl9sYXN0ID0gMFxuICAgIHJldHVybiB0aGlzLmNvbGxlY3QoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jb2xsZWN0KClcbiAgICB0aGlzLl9ibG9ja3MgPSBbXVxuICAgIHRoaXMuX2xhc3QgPSAwXG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgaWYgKHQgLSB0aGlzLl9sYXN0ID49IHRoaXMuX2NvbGxlY3RfZGVsYXkpIHtcbiAgICAgIHRoaXMuY29sbGVjdCgpXG4gICAgICB0aGlzLl9sYXN0ID0gdFxuICAgIH1cbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuICBnZXQgbWVtb3J5ICgpIHsgcmV0dXJuIHRoaXMuX21haW4ubWVtb3J5IH1cblxuICBnZXQgYmxvY2tzICgpIHsgcmV0dXJuIHRoaXMuX2Jsb2NrcyB9XG4gIGdldCBsYXN0ICgpIHsgcmV0dXJuIHRoaXMuX2xhc3QgfVxuICBnZXQgY29sbGVjdF9kZWxheSAoKSB7IHJldHVybiB0aGlzLl9jb2xsZWN0X2RlbGF5IH1cblxuICBnZXQgYXZhaWxfbWVtICgpIHsgcmV0dXJuIHRoaXMuX21haW4uc2l6ZSB9XG5cbiAgZ2V0IHVzZWRfbWVtICgpIHtcbiAgICBsZXQgc2l6ZSA9IDBcbiAgICBmb3IgKGxldCBiIG9mIHRoaXMuX2Jsb2Nrcykge1xuICAgICAgaWYgKGIudXNlZCkge1xuICAgICAgICBzaXplICs9IGIuc2l6ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2l6ZVxuICB9XG5cbiAgZ2V0IGZyZWVfbWVtICgpIHsgcmV0dXJuIHRoaXMuYXZhaWxfbWVtIC0gdGhpcy51c2VkX21lbSB9XG5cbiAgX2FsbG9jICh0eXBlLCBjb3VudCkge1xuICAgIGNvdW50ID0gY291bnQgfHwgMVxuICAgIGxldCBzaXplID0gZGF0YV90eXBlX3NpemUodHlwZSkgKiBjb3VudFxuICAgIGxldCBuID0gMFxuXG4gICAgZm9yIChsZXQgYiBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgIGlmIChiLmJvdHRvbSA+IG4pIHtcbiAgICAgICAgbiA9IGIuYm90dG9tXG4gICAgICB9XG5cbiAgICAgIGlmICghYi51c2VkICYmIGIuc2l6ZSA+PSBzaXplKSB7XG4gICAgICAgIGlmIChiLnNpemUgPT09IHNpemUpIHtcbiAgICAgICAgICBiLnVzZWQgPSB0cnVlXG4gICAgICAgICAgcmV0dXJuIGIudG9wXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9iID0gYi5ib3R0b21cbiAgICAgICAgYi5ib3R0b20gPSBiLnRvcCArIHNpemUgLSAxXG4gICAgICAgIGIuc2l6ZSA9IHNpemVcbiAgICAgICAgYi5jb3VudCA9IGNvdW50XG4gICAgICAgIGIudXNlZCA9IHRydWVcblxuICAgICAgICB0aGlzLl9ibG9ja3MucHVzaCh7IHRvcDogYi5ib3R0b20gKyAxLCBib3R0b206IG9iLCBzaXplOiBvYiAtIChiLmJvdHRvbSArIDEpLCBjb3VudCwgdHlwZSwgdXNlZDogZmFsc2UgfSlcblxuICAgICAgICByZXR1cm4gYi50b3BcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobiArIHNpemUgPiB0aGlzLmF2YWlsX21lbSkge1xuICAgICAgX3ZtLmhsdCgpXG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIGxldCBhZGRyID0gbiArIDFcblxuICAgIHRoaXMuX2Jsb2Nrcy5wdXNoKHsgdG9wOiBhZGRyLCBib3R0b206IGFkZHIgKyBzaXplIC0gMSwgc2l6ZSwgY291bnQsIHR5cGUsIHVzZWQ6IHRydWUgfSlcblxuICAgIF92bS5maWxsKDAsIGFkZHIsIHNpemUpXG5cbiAgICByZXR1cm4gYWRkclxuICB9XG5cbiAgYWxsb2MgKHR5cGUsIGNvdW50LCAuLi52YWx1ZSkge1xuICAgIGxldCBhZGRyID0gdGhpcy5fYWxsb2ModHlwZSwgY291bnQpXG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBzaXplID0gZGF0YV90eXBlX3NpemUodHlwZSkgKiBjb3VudFxuICAgICAgbGV0IGEgPSBhZGRyXG4gICAgICBmb3IgKGxldCB2IG9mIHZhbHVlKSB7XG4gICAgICAgIF92bS53cml0ZSh2LCBhLCB0eXBlKVxuICAgICAgICBhICs9IHNpemVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWRkclxuICB9XG5cbiAgZnJlZSAoYWRkcikge1xuICAgIGxldCBiID0gdGhpcy5ibG9jayhhZGRyKVxuICAgIGlmIChiKSB7XG4gICAgICBiLnVzZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGJsb2NrIChhZGRyKSB7XG4gICAgZm9yIChsZXQgYiBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgIGlmIChiLnRvcCA9PT0gYWRkcikge1xuICAgICAgICByZXR1cm4gYlxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgdHlwZSAoYWRkcikge1xuICAgIGxldCBiID0gdGhpcy5ibG9jayhhZGRyKVxuICAgIHJldHVybiBiICYmIGIudXNlZCA/IGIudHlwZSA6IG51bGxcbiAgfVxuXG4gIHNpemUgKGFkZHIpIHtcbiAgICBsZXQgYiA9IHRoaXMuYmxvY2soYWRkcilcbiAgICByZXR1cm4gYiAmJiBiLnVzZWQgPyBiLnNpemUgOiAtMVxuICB9XG5cbiAgY29sbGVjdCAoKSB7XG4gICAgbGV0IG4gPSBbXVxuICAgIGZvciAobGV0IGIgb2YgdGhpcy5fYmxvY2tzKSB7XG4gICAgICBpZiAoIWIudXNlZCkge1xuICAgICAgICBuLnB1c2goYilcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fYmxvY2tzID0gblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkdW1wICgpIHtcbiAgICBjb25zb2xlLmxvZygnbWVtb3J5IF9ibG9ja3MgZHVtcC4uLicsICdhdmFpbF9tZW06JywgcHJldHR5Qnl0ZXModGhpcy5hdmFpbF9tZW0pLCAndXNlZDonLCBwcmV0dHlCeXRlcyh0aGlzLnVzZWRfbWVtKSwgJ2ZyZWU6JywgcHJldHR5Qnl0ZXModGhpcy5mcmVlX21lbSkpXG4gICAgZm9yIChsZXQgYiBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKCcnKVxuICAgICAgY29uc29sZS5sb2coJ29mZnNldDonLCBfdm0uaGV4KGIudG9wLCAzMiksICdzaXplOicsIHRoaXMuc2l6ZShiLnRvcCksICd0eXBlOicsIHRoaXMudHlwZShiLnRvcCkpXG4gICAgICBjb25zb2xlLmxvZyhoZXh5LmhleHkoX3ZtLm1lbV9idWZmZXIsIHsgb2Zmc2V0OiBiLnRvcCwgbGVuZ3RoOiBNYXRoLm1pbigyNTUsIGIuc2l6ZSksIHdpZHRoOiAxNiwgY2FwczogJ3VwcGVyJywgaW5kZW50OiAyIH0pKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL21lbW9yeW1hbmFnZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmV0dHktYnl0ZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmV0dHktYnl0ZXNcIlxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZGVmYXVsdHMsIHJ1bnRpbWVfZXJyb3IgfSBmcm9tICcuLi9nbG9iYWxzLmpzJ1xuaW1wb3J0IHsgZGF0YV90eXBlX3NpemUgfSBmcm9tICcuL21lbW9yeS5qcydcblxuY2xhc3MgU3RhY2tFbnRyeSB7XG5cbiAgY29uc3RydWN0b3IgKHN0YWNrLCBvZmZzZXQgPSAwLCBtYXggPSAyNTUsIHR5cGUgPSBkZWZhdWx0cy50eXBlLCBzaXplLCByb2xsaW5nID0gZmFsc2UpIHtcbiAgICB0aGlzLl9zdGFjayA9IHN0YWNrXG5cbiAgICB0aGlzLl9tYXggPSBtYXhcbiAgICB0aGlzLl9zaXplID0gc2l6ZSB8fCBkYXRhX3R5cGVfc2l6ZSh0eXBlKVxuICAgIHRoaXMuX3RvcCA9IG9mZnNldFxuICAgIHRoaXMuX2JvdHRvbSA9IHRoaXMuX3RvcCArIHRoaXMuX3NpemUgLSAxXG4gICAgdGhpcy5fdHlwZSA9IHR5cGVcbiAgICB0aGlzLl9yb2xsaW5nID0gcm9sbGluZyB8fCBmYWxzZVxuXG4gICAgdGhpcy5saXN0W3RoaXMuX3RvcF0gPSB0aGlzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fcHRyID0gdGhpcy5fdG9wXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmxpc3RbdGhpcy5fdG9wXSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fc3RhY2subWFpbiB9XG4gIGdldCBzdGFjayAoKSB7IHJldHVybiB0aGlzLl9zdGFjayB9XG4gIGdldCBsaXN0ICgpIHsgcmV0dXJuIHRoaXMuX3N0YWNrLmxpc3QgfVxuXG4gIGdldCB0b3AgKCkgeyByZXR1cm4gdGhpcy5fdG9wIH1cbiAgZ2V0IGJvdHRvbSAoKSB7IHJldHVybiB0aGlzLl9ib3R0b20gfVxuICBnZXQgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9zaXplIH1cblxuICBnZXQgbWF4ICgpIHsgcmV0dXJuIHRoaXMuX21heCB9XG4gIGdldCBwdHIgKCkgeyByZXR1cm4gdGhpcy5fcHRyIH1cblxuICBnZXQgdG90YWxfc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9tYXggKiB0aGlzLl9zaXplIH1cbiAgZ2V0IHVzZWQgKCkgeyByZXR1cm4gTWF0aC50cnVuYygodGhpcy5fcHRyIC0gdGhpcy5fdG9wKSAvIHRoaXMuX3NpemUpIH1cbiAgZ2V0IGF2YWlsICgpIHsgcmV0dXJuIHRoaXMudG90YWxfc2l6ZSAtIHRoaXMudXNlZCB9XG5cbiAgcHVzaCAoLi4udmFsdWUpIHtcbiAgICBsZXQgc3ogPSB0aGlzLl9zaXplXG4gICAgbGV0IHQgPSB0aGlzLl90eXBlXG4gICAgbGV0IHRvcCA9IHRoaXMuX3RvcFxuICAgIGxldCBib3R0b20gPSB0aGlzLl9ib3R0b21cbiAgICBsZXQgcm9sbGluZyA9IHRoaXMuX3JvbGxpbmdcbiAgICBmb3IgKGxldCB2IG9mIHZhbHVlKSB7XG4gICAgICBpZiAocm9sbGluZyAmJiB0aGlzLl9wdHIgPj0gYm90dG9tKSB7XG4gICAgICAgIHRoaXMuY29weSh0b3AgKyBzeiwgdG9wLCBib3R0b20gLSBzeilcbiAgICAgICAgdGhpcy5fcHRyIC09IHN6XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fcHRyICsgc3ogPCBib3R0b20pIHtcbiAgICAgICAgdGhpcy53cml0ZSh2LCB0aGlzLl9wdHIsIHQpXG4gICAgICAgIHRoaXMuX3B0ciArPSBzelxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwMylcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwb3AgKCkge1xuICAgIGlmICh0aGlzLl9wdHIgPiB0aGlzLl90b3ApIHtcbiAgICAgIHRoaXMuX3B0ciAtPSB0aGlzLl9zaXplXG4gICAgICByZXR1cm4gdGhpcy5yZWFkKHRoaXMuX3B0ciwgdGhpcy5fdHlwZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDIpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhY2sge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgdGhpcy5fbWFpbiA9IG1haW5cblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX2xpc3QgPSB7fVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fbGlzdCA9IHt9XG4gIH1cblxuICBnZXQgbGlzdCAoKSB7IHJldHVybiB0aGlzLl9saXN0IH1cblxuICBuZXcgKG9mZnNldCwgbWF4LCB0eXBlLCBzaXplLCByb2xsaW5nKSB7XG4gICAgbGV0IHMgPSB0aGlzLl9saXN0W29mZnNldF1cbiAgICBpZiAoIXMpIHtcbiAgICAgIHJldHVybiBuZXcgU3RhY2tFbnRyeSh0aGlzLCAuLi5hcmd1bWVudHMpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnVudGltZV9lcnJvcigweDA0KVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBwdXNoIChvZmZzZXQsIC4uLnZhbHVlcykge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBzLnB1c2goLi4udmFsdWVzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgcG9wIChvZmZzZXQpIHtcbiAgICBsZXQgcyA9IHRoaXMuX2xpc3Rbb2Zmc2V0XVxuICAgIGlmIChzKSB7XG4gICAgICByZXR1cm4gcy5wb3AoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgdXNlZCAob2Zmc2V0KSB7XG4gICAgbGV0IHMgPSB0aGlzLl9saXN0W29mZnNldF1cbiAgICBpZiAocykge1xuICAgICAgcmV0dXJuIHMudXNlZFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgbWF4IChvZmZzZXQpIHtcbiAgICBsZXQgcyA9IHRoaXMuX2xpc3Rbb2Zmc2V0XVxuICAgIGlmIChzKSB7XG4gICAgICByZXR1cm4gcy5tYXhcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDQpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIHNpemUgKG9mZnNldCkge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBzLnNpemVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDQpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIHR5cGUgKG9mZnNldCkge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBzLnR5cGVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDQpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vc3RhY2suanMiLCJpbXBvcnQgeyBydW50aW1lX2Vycm9yIH0gZnJvbSAnLi4vZ2xvYmFscy5qcydcblxuY29uc3QgX0lOVF9SVU5OSU5HID0gMVxuY29uc3QgX0lOVF9QQVVTRUQgPSAyXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVycnVwdCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICB0aGlzLl9saXN0ID0ge31cbiAgICB0aGlzLl9tYWluID0gbWFpblxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuc3RvcF9hbGwoKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuICBnZXQgbWVtb3J5ICgpIHsgcmV0dXJuIHRoaXMuX21haW4ubWVtb3J5IH1cblxuICBmaW5kIChuYW1lKSB7IHJldHVybiB0aGlzLl9saXN0W25hbWVdIH1cblxuICBjcmVhdGUgKG5hbWUsIGZuLCBtcyA9IDUwMCkge1xuICAgIGlmICghdGhpcy5maW5kKG5hbWUpKSB7XG4gICAgICB0aGlzLl9saXN0W25hbWVdID0geyBuYW1lLCBzdGF0dXM6IF9JTlRfUlVOTklORywgbXMsIGZuLCBsYXN0OiAwIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDYpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXN1bWUgKG5hbWUpIHtcbiAgICBpZiAodGhpcy5maW5kKG5hbWUpKSB7XG4gICAgICB0aGlzLl9saXN0W25hbWVdLnN0YXR1cyA9IF9JTlRfUlVOTklOR1xuICAgICAgdGhpcy5fbGlzdFtuYW1lXS5sYXN0ID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwYXVzZSAobmFtZSkge1xuICAgIGlmICh0aGlzLmZpbmQobmFtZSkpIHtcbiAgICAgIHRoaXMuX2xpc3RbbmFtZV0uc3RhdHVzID0gX0lOVF9QQVVTRURcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdG9wIChuYW1lKSB7XG4gICAgaWYgKHRoaXMuZmluZChuYW1lKSkge1xuICAgICAgZGVsZXRlIHRoaXMuX2xpc3RbbmFtZV1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdG9wX2FsbCAoKSB7XG4gICAgZm9yIChsZXQgayBpbiB0aGlzLl9saXN0KSB7XG4gICAgICB0aGlzLnN0b3AoaylcbiAgICB9XG4gICAgdGhpcy5fbGlzdCA9IHt9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBmb3IgKGxldCBrIGluIHRoaXMuX2xpc3QpIHtcbiAgICAgIGxldCBpID0gdGhpcy5fbGlzdFtrXVxuICAgICAgaWYgKGkuc3RhdHVzID09PSBfSU5UX1JVTk5JTkcpIHtcbiAgICAgICAgbGV0IGRlbGF5ID0gdCAtIGkubGFzdFxuICAgICAgICBpZiAoZGVsYXkgPj0gaS5tcykge1xuICAgICAgICAgIGkuZm4uYXBwbHkodGhpcywgW2RlbGF5IC0gaS5tc10pXG4gICAgICAgICAgaS5sYXN0ID0gdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9pbnRlcnJ1cHQuanMiLCJpbXBvcnQgUmFpbmJvdyBmcm9tICcuL3JhaW5ib3cuanMnXG5pbXBvcnQgRm9uem8gZnJvbSAnLi9mb256by5qcydcbmltcG9ydCBPcndlbGwgZnJvbSAnLi9vcndlbGwuanMnXG5pbXBvcnQgQmVhZ2xlIGZyb20gJy4vYmVhZ2xlLmpzJ1xuaW1wb3J0IFZpb2xldCBmcm9tICcuL3Zpb2xldC5qcydcbmltcG9ydCB7IE92ZXJsYXlzIH0gZnJvbSAnLi4vb3ZlcmxheXMuanMnXG5cbmltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpZGVvIGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdndWlkZW8nLCBbJ3dpZHRoJywgJ2hlaWdodCcsICdzY2FsZSddKVxuXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBuZXcgUElYSS5hdXRvRGV0ZWN0UmVuZGVyZXIodGhpcy5fd2lkdGggKiB0aGlzLl9zY2FsZSwgdGhpcy5faGVpZ2h0ICogdGhpcy5fc2NhbGUsIHt9KVxuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgdGhpcy5fcmVuZGVyZXIudmlldy5zdHlsZS5jdXJzb3IgPSAnbm9uZSdcbiAgICB0aGlzLl9yZW5kZXJlci52aWV3LmlkID0gJ2d1aWRlbydcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX3JlbmRlcmVyLnZpZXcpXG5cbiAgICB0aGlzLl9zdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG5cbiAgICB0aGlzLl9vblJlc2l6ZSA9IHRoaXMucmVzaXplLmJpbmQodGhpcylcbiAgICB0aGlzLm9uKCdyZXNpemUnLCB0aGlzLl9vblJlc2l6ZSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMub2ZmKCdyZXNpemUnLCB0aGlzLl9vblJlc2l6ZSlcblxuICAgIHRoaXMuX3JhaW5ib3cuZGVzdHJveSgpXG4gICAgdGhpcy5fZm9uem8uZGVzdHJveSgpXG4gICAgdGhpcy5fb3J3ZWxsLmRlc3Ryb3koKVxuICAgIHRoaXMuX2JlYWdsZS5kZXN0cm95KClcbiAgICB0aGlzLl92aW9sZXQuZGVzdHJveSgpXG4gICAgdGhpcy5fb3ZlcmxheXMuZGVzdHJveSgpXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxuXG4gIGNyZWF0ZUNoaXBzICgpIHtcbiAgICBsZXQgbWFpbiA9IHRoaXMuX21haW5cblxuICAgIHRoaXMuX3JhaW5ib3cgPSBuZXcgUmFpbmJvdyhtYWluKVxuICAgIHRoaXMuX2ZvbnpvID0gbmV3IEZvbnpvKG1haW4pXG4gICAgdGhpcy5fb3J3ZWxsID0gbmV3IE9yd2VsbChtYWluKVxuICAgIHRoaXMuX2JlYWdsZSA9IG5ldyBCZWFnbGUobWFpbilcbiAgICB0aGlzLl92aW9sZXQgPSBuZXcgVmlvbGV0KG1haW4pXG5cbiAgICB0aGlzLl9vdmVybGF5cyA9IG5ldyBPdmVybGF5cyhtYWluLCB7XG4gICAgICBzY3JlZW46IHsgc2NhbGU6IHRoaXMuX3NjYWxlIH0sXG4gICAgICBzY2FubGluZXM6IHt9LFxuICAgICAgc2NhbmxpbmU6IHt9LFxuICAgICAgcmdiOiB7fSxcbiAgICAgIG5vaXNlczoge30sXG4gICAgICBjcnQ6IHt9LFxuICAgICAgbW9uaXRvcjoge30sXG4gICAgfSlcblxuICAgIHRoaXMuX3NjcmVlbiA9IHRoaXMuX292ZXJsYXlzLnNjcmVlblxuXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuICAgIHRoaXMuX2ltYWdlRGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICB0aGlzLl9waXhlbHMgPSBuZXcgVWludDMyQXJyYXkodGhpcy5faW1hZ2VEYXRhLmRhdGEuYnVmZmVyKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuXG4gICAgdGhpcy5fZm9yY2VfcmVkcmF3ID0gZmFsc2VcbiAgICB0aGlzLl9mb3JjZV9mbGlwID0gZmFsc2VcblxuICAgIHRoaXMuX3JhaW5ib3cucmVzZXQoKVxuICAgIHRoaXMuX2ZvbnpvLnJlc2V0KClcbiAgICB0aGlzLl9vcndlbGwucmVzZXQoKVxuICAgIHRoaXMuX2JlYWdsZS5yZXNldCgpXG4gICAgdGhpcy5fdmlvbGV0LnJlc2V0KClcbiAgICB0aGlzLl9vdmVybGF5cy5yZXNldCgpXG5cbiAgICB0aGlzLmNsZWFyKClcblxuICAgIHJldHVybiB0aGlzLnJlc2l6ZSgpXG4gIH1cblxuICBnZXQgc2NhbGUgKCkgeyByZXR1cm4gdGhpcy5fc2NhbGUgfVxuICBzZXQgc2NhbGUgKHZhbHVlKSB7XG4gICAgdGhpcy5fc2NhbGUgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IHJhaW5ib3cgKCkgeyByZXR1cm4gdGhpcy5fcmFpbmJvdyB9XG4gIGdldCBmb256byAoKSB7IHJldHVybiB0aGlzLl9mb256byB9XG4gIGdldCBvcndlbGwgKCkgeyByZXR1cm4gdGhpcy5fb3J3ZWxsIH1cbiAgZ2V0IGJlYWdsZSAoKSB7IHJldHVybiB0aGlzLl9iZWFnbGUgfVxuICBnZXQgdmlvbGV0ICgpIHsgcmV0dXJuIHRoaXMuX3Zpb2xldCB9XG5cbiAgZ2V0IG92ZXJsYXlzICgpIHsgcmV0dXJuIHRoaXMuX292ZXJsYXlzIH1cblxuICBnZXQgc3RhZ2UgKCkgeyByZXR1cm4gdGhpcy5fc3RhZ2UgfVxuICBnZXQgcmVuZGVyZXIgKCkgeyByZXR1cm4gdGhpcy5fcmVuZGVyZXIgfVxuXG4gIGdldCBzY3JlZW4gKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuIH1cbiAgZ2V0IHNwcml0ZSAoKSB7IHJldHVybiB0aGlzLl9zY3JlZW4uc3ByaXRlIH1cbiAgZ2V0IHRleHR1cmUgKCkgeyByZXR1cm4gdGhpcy5zcHJpdGUudGV4dHVyZSB9XG4gIGdldCBjYW52YXNCdWZmZXIgKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuLmNhbnZhc0J1ZmZlciB9XG4gIGdldCBjYW52YXMgKCkgeyByZXR1cm4gdGhpcy5jYW52YXNCdWZmZXIuY2FudmFzIH1cbiAgZ2V0IGNvbnRleHQgKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuLmNvbnRleHQgfVxuICBnZXQgaW1hZ2VEYXRhICgpIHsgcmV0dXJuIHRoaXMuX2ltYWdlRGF0YSB9XG4gIGdldCBwaXhlbHMgKCkgeyByZXR1cm4gdGhpcy5fcGl4ZWxzIH1cblxuICBnZXQgZm9yY2VfcmVkcmF3ICgpIHsgcmV0dXJuIHRoaXMuX2ZvcmNlX3JlZHJhdyB9XG4gIHNldCBmb3JjZV9yZWRyYXcgKHZhbHVlKSB7IHRoaXMuX2ZvcmNlX3JlZHJhdyA9IHZhbHVlIH1cblxuICBnZXQgZm9yY2VfZmxpcCAoKSB7IHJldHVybiB0aGlzLl9mb3JjZV9mbGlwIH1cbiAgc2V0IGZvcmNlX2ZsaXAgKHZhbHVlKSB7IHRoaXMuX2ZvcmNlX2ZsaXAgPSB2YWx1ZSB9XG5cbiAgdGljayAodCkge1xuICAgIHRoaXMuX3JhaW5ib3cudGljayh0KVxuICAgIHRoaXMuX2ZvbnpvLnRpY2sodClcbiAgICB0aGlzLl9vcndlbGwudGljayh0KVxuICAgIHRoaXMuX2JlYWdsZS50aWNrKHQpXG4gICAgdGhpcy5fdmlvbGV0LnRpY2sodClcbiAgICB0aGlzLl9vdmVybGF5cy50aWNrKHQpXG5cbiAgICBpZiAodGhpcy5fZm9yY2VfcmVkcmF3KSB7XG4gICAgICB0aGlzLnJlZHJhdygpXG4gICAgICB0aGlzLl9mb3JjZV9yZWRyYXcgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJlZHJhdyAoKSB7XG4gICAgaWYgKHRoaXMuX2ZvcmNlX2ZsaXApIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgICBsZXQgc2l6ZSA9IHRoaXMuX3NpemVcbiAgICAgIGNvbnN0IHBhbGV0dGUgPSB0aGlzLl9yYWluYm93XG4gICAgICBjb25zdCBwaXhlbHMgPSB0aGlzLl9waXhlbHNcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgcGl4ZWxzW2ldID0gcGFsZXR0ZS5jb2xvcihkYXRhW2ldKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRleHQucHV0SW1hZ2VEYXRhKHRoaXMuX2ltYWdlRGF0YSwgMCwgMClcblxuICAgICAgdGhpcy50ZXh0dXJlLnVwZGF0ZSgpXG5cbiAgICAgIHRoaXMuZW1pdCgnZmxpcCcpXG5cbiAgICAgIHRoaXMuX2ZvcmNlX2ZsaXAgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgncmVkcmF3JylcblxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbmRlcih0aGlzLl9zdGFnZSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBjZW50ZXIgKCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcuc3R5bGUubGVmdCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC41IC0gdGhpcy5fcmVuZGVyZXIud2lkdGggKiAwLjUgKyAncHgnXG4gICAgdGhpcy5fcmVuZGVyZXIudmlldy5zdHlsZS50b3AgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjUgLSB0aGlzLl9yZW5kZXJlci5oZWlnaHQgKiAwLjUgKyAncHgnXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc2l6ZSAoKSB7XG4gICAgdGhpcy5fb3ZlcmxheXMucmVzaXplKClcbiAgICB0aGlzLmNlbnRlcigpXG4gICAgdGhpcy50ZXN0KClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcGl4ZWwgKHgsIHksIGMpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuXG4gICAgbGV0IGlcbiAgICBpZiAoXy5pc051bWJlcihjKSkge1xuICAgICAgaSA9IHRoaXMudG9JbmRleCh4LCB5KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGkgPSB4XG4gICAgICBjID0geVxuICAgIH1cblxuICAgIGlmIChkYXRhW2ldICE9PSBjKSB7XG4gICAgICBkYXRhW2ldID0gYyB8fCAwXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFbaV1cbiAgfVxuXG4gIGJsaXQgKGFkZHIsIHgsIHksIHcsIGgpIHtcbiAgICBjb25zdCBtZW0gPSB0aGlzLm1lbW9yeS5kYXRhXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBjb25zdCB0b3AgPSB0aGlzLl90b3BcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuX3dpZHRoXG4gICAgY29uc3QgY291bnQgPSB0aGlzLnJhaW5ib3cuY291bnRcblxuICAgIGxldCBzaSA9IGFkZHJcbiAgICBmb3IgKGxldCBieSA9IDA7IGJ5IDwgaDsgYnkrKykge1xuICAgICAgbGV0IHRpID0gdG9wICsgKCh5ICsgYnkpICogd2lkdGggKyB4KVxuICAgICAgZm9yIChsZXQgYnggPSAwOyBieCA8IHc7IGJ4KyspIHtcbiAgICAgICAgbGV0IGMgPSBtZW1bc2krK11cbiAgICAgICAgZGF0YVt0aV0gPSBjIDwgY291bnQgPyBjIDogZGF0YVt0aV1cbiAgICAgICAgdGkrK1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSh0cnVlKVxuICB9XG5cbiAgYmxpdF9tYXNrIChhZGRyLCB4LCB5LCB3LCBoLCBmZyA9IDE1LCBiZyA9IC0xKSB7XG4gICAgY29uc3QgbWVtID0gdGhpcy5tZW1vcnkuZGF0YVxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgY29uc3QgdG9wID0gdGhpcy5fdG9wXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLl93aWR0aFxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5yYWluYm93LmNvdW50XG5cbiAgICBsZXQgc2kgPSBhZGRyXG4gICAgZm9yIChsZXQgYnkgPSAwOyBieSA8IGg7IGJ5KyspIHtcbiAgICAgIGxldCB0aSA9IHRvcCArICgoeSArIGJ5KSAqIHdpZHRoICsgeClcbiAgICAgIGZvciAobGV0IGJ4ID0gMDsgYnggPCB3OyBieCsrKSB7XG4gICAgICAgIGxldCBjID0gbWVtW3NpKytdXG4gICAgICAgIGRhdGFbdGldID0gYyA8IGNvdW50ID8gZmcgOiBiZyA9PT0gLTEgPyBkYXRhW3RpXSA6IGJnXG4gICAgICAgIHRpKytcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUodHJ1ZSlcbiAgfVxuXG4gIGJsaXRfYXJyYXkgKGFyciwgeCwgeSwgbWFzayA9IHt9KSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBjb25zdCB0b3AgPSB0aGlzLl90b3BcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuX3dpZHRoXG5cbiAgICBsZXQgdyA9IF8uZmlyc3QoYXJyKS5sZW5ndGhcbiAgICBsZXQgaCA9IGFyci5sZW5ndGhcblxuICAgIGZvciAobGV0IGJ5ID0gMDsgYnkgPCBoOyBieSsrKSB7XG4gICAgICBsZXQgdGkgPSB0b3AgKyAoKGJ5ICsgeSkgKiB3aWR0aCArIHgpXG4gICAgICBmb3IgKGxldCBieCA9IDA7IGJ4IDwgdzsgYngrKykge1xuICAgICAgICBkYXRhW3RpKytdID0gbWFza1thcnJbYnldXVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvcHlfcmVjdCAoeCwgeSwgdywgaCwgYWRkcikge1xuICAgIGNvbnN0IG1lbSA9IHRoaXMubWVtb3J5LmRhdGFcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGNvbnN0IHRvcCA9IHRoaXMuX3RvcFxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fd2lkdGhcblxuICAgIGxldCB0aSA9IGFkZHJcbiAgICBmb3IgKGxldCBieSA9IDA7IGJ5IDwgaDsgYnkrKykge1xuICAgICAgbGV0IHNpID0gdG9wICsgKChieSArIHkpICogd2lkdGggKyB4KVxuICAgICAgZm9yIChsZXQgYnggPSAwOyBieCA8IHc7IGJ4KyspIHtcbiAgICAgICAgbWVtW3RpKytdID0gZGF0YVtzaSsrXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aVxuICB9XG5cbiAgdG9fYXJyYXkgKHgsIHksIHcsIGgsIG1hc2sgPSB7fSkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgY29uc3QgdG9wID0gdGhpcy5fdG9wXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLl93aWR0aFxuXG4gICAgbGV0IGFyciA9IFtdXG5cbiAgICBmb3IgKGxldCBieSA9IDA7IGJ5IDwgaDsgYnkrKykge1xuICAgICAgbGV0IHRpID0gdG9wICsgKChieSArIHkpICogd2lkdGggKyB4KVxuICAgICAgbGV0IHMgPSAnJ1xuICAgICAgZm9yIChsZXQgYnggPSAwOyBieCA8IHc7IGJ4KyspIHtcbiAgICAgICAgcyArPSBtYXNrW2RhdGFbdGkrK11dXG4gICAgICB9XG4gICAgICBhcnIucHVzaChzKVxuICAgIH1cblxuICAgIHJldHVybiBhcnJcbiAgfVxuXG4gIHRvSW5kZXggKHgsIHkpIHsgcmV0dXJuIHkgKiB0aGlzLl93aWR0aCArIHggfVxuXG4gIGZyb21JbmRleCAoaSkge1xuICAgIGxldCB5ID0gTWF0aC5taW4oTWF0aC50cnVuYyhpIC8gdGhpcy5fd2lkdGgpLCB0aGlzLl9oZWlnaHQgLSAxKVxuICAgIGxldCB4ID0gaSAtIHlcbiAgICByZXR1cm4geyB4LCB5IH1cbiAgfVxuXG4gIHNjcm9sbCAoeCwgeSkge1xuICAgIGxldCBsdyA9IHkgKiB0aGlzLl93aWR0aFxuICAgIGxldCBzID0gbHdcbiAgICBsZXQgZSA9IHRoaXMuX3NpemUgLSBsd1xuICAgIHRoaXMuX2RhdGEuY29weShzLCAwLCBlIC0gcylcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgbG9hZFRleHR1cmUgKGZpbGVuYW1lKSB7XG4gICAgbGV0IHRleCA9IFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoJy4vYnVpbGQvJyArIHJlcXVpcmUoJ2ZpbGU/bmFtZT1hc3NldHMvW25hbWVdLltleHRdIS4uLy4uLy4uL2Fzc2V0cy9pbWdzLycgKyBmaWxlbmFtZSksIHVuZGVmaW5lZCwgUElYSS5TQ0FMRV9NT0RFUy5ORUFSRVNUKVxuICAgIHRleC5vbigndXBkYXRlJywgKCkgPT4gdGhpcy51cGRhdGUoKSlcbiAgICByZXR1cm4gdGV4XG4gIH1cblxuICB0ZXN0ICgpIHtcbiAgICB0aGlzLnBpeGVsKDEwLCAxMCwgMTMpXG4gICAgdGhpcy5waXhlbCgyMCwgMTAsIDUpXG4gICAgdGhpcy5waXhlbCgzMCwgMTAsIDYpXG5cbiAgICB0aGlzLl9mb256by50ZXN0KClcblxuICAgIC8vIGxldCBzY3JlZW4gPSB0aGlzLl9vdmVybGF5cy5zY3JlZW4uc3ByaXRlXG4gICAgLy8gc2NyZWVuLnJlbW92ZUNoaWxkcmVuKClcblxuICAgIC8vIGxldCB0ID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMubG9hZFRleHR1cmUoJ3Rlc3QucG5nJykpXG4gICAgLy8gc2NyZWVuLmFkZENoaWxkKHQpXG5cbiAgICAvLyBsZXQgdGV4dCA9IG5ldyBQSVhJLlRleHQoJ1RoaXMgaXMgYSBwaXhpIHRleHQnLCB7IGZvbnQ6ICcyMHB4IFwiR2xhc3MgVFRZIFZUMjIwXCInLCBmaWxsOiAweEZGRkZGRiB9KVxuICAgIC8vIHRleHQudGV4dHVyZS5iYXNlVGV4dHVyZS5zY2FsZU1vZGUgPSBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1RcbiAgICAvLyB0ZXh0LmNvbnRleHQuY2FudmFzLnN0eWxlWydmb250LXNtb290aGluZyddID0gJ25ldmVyJ1xuICAgIC8vIHRleHQuY29udGV4dC5jYW52YXMuc3R5bGVbJy13ZWJraXQtZm9udC1zbW9vdGhpbmcnXSA9ICdub25lJ1xuICAgIC8vIHRleHQuY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZVxuICAgIC8vIHRleHQuY29udGV4dC5jYW52YXMuc3R5bGUuZGlzcGxheSA9ICdoaWRkZW4nXG4gICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0LmNvbnRleHQuY2FudmFzKVxuICAgIC8vIHRleHQudXBkYXRlVGV4dCgpXG4gICAgLy8gc2NyZWVuLmFkZENoaWxkKHRleHQpXG4gICAgLy8gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0LmNvbnRleHQuY2FudmFzKVxuXG4gICAgdGhpcy51cGRhdGUodHJ1ZSlcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvZ3VpZGVvLmpzIiwiaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuXG5jb25zdCBzMzIgPSBuZXcgVWludDMyQXJyYXkoNClcbmNvbnN0IHM4ID0gbmV3IFVpbnQ4QXJyYXkoczMyLmJ1ZmZlcilcbmNvbnN0IHQzMiA9IG5ldyBVaW50MzJBcnJheSg0KVxuY29uc3QgdDggPSBuZXcgVWludDhBcnJheSh0MzIuYnVmZmVyKVxuXG5sZXQgcmV2ZXJzZSA9IHggPT4ge1xuICBzMzJbMF0gPSB4XG4gIHQ4WzBdID0gczhbM11cbiAgdDhbMV0gPSBzOFsyXVxuICB0OFsyXSA9IHM4WzFdXG4gIHQ4WzNdID0gczhbMF1cbiAgcmV0dXJuIHQzMlswXVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWluYm93IGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdyYWluYm93JywgWydjb3VudCddKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuXG4gICAgdGhpcy5fTEUgPSB0aGlzLm1haW4uTEVcblxuICAgIHRoaXMuY29sb3IoMCwgMHgwMDAwMDBmZilcbiAgICB0aGlzLmNvbG9yKDEsIDB4ODAwMDAwZmYpXG4gICAgdGhpcy5jb2xvcigyLCAweDAwODAwMGZmKVxuICAgIHRoaXMuY29sb3IoMywgMHg4MDgwMDBmZilcbiAgICB0aGlzLmNvbG9yKDQsIDB4MDAwMDgwZmYpXG4gICAgdGhpcy5jb2xvcig1LCAweDgwMDA4MGZmKVxuICAgIHRoaXMuY29sb3IoNiwgMHgwMDgwODBmZilcbiAgICB0aGlzLmNvbG9yKDcsIDB4YzBjMGMwZmYpXG4gICAgdGhpcy5jb2xvcig4LCAweDgwODA4MGZmKVxuICAgIHRoaXMuY29sb3IoOSwgMHhmZjAwMDBmZilcbiAgICB0aGlzLmNvbG9yKDEwLCAweDAwZmYwMGZmKVxuICAgIHRoaXMuY29sb3IoMTEsIDB4ZmZmZjAwZmYpXG4gICAgdGhpcy5jb2xvcigxMiwgMHgwMDAwZmZmZilcbiAgICB0aGlzLmNvbG9yKDEzLCAweGZmMDBmZmZmKVxuICAgIHRoaXMuY29sb3IoMTQsIDB4MDBmZmZmZmYpXG4gICAgdGhpcy5jb2xvcigxNSwgMHhmZmZmZmZmZilcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXQgYmxhY2sgKCkgeyByZXR1cm4gMCB9XG4gIGdldCBka3JlZCAoKSB7IHJldHVybiAxIH1cbiAgZ2V0IGRrZ3JlZW4gKCkgeyByZXR1cm4gMiB9XG4gIGdldCBka3llbGxvdyAoKSB7IHJldHVybiAzIH1cbiAgZ2V0IGRrYmx1ZSAoKSB7IHJldHVybiA0IH1cbiAgZ2V0IGRrZnVjaHNpYSAoKSB7IHJldHVybiA1IH1cbiAgZ2V0IHRlYWwgKCkgeyByZXR1cm4gNiB9XG4gIGdldCBncmV5ICgpIHsgcmV0dXJuIDcgfVxuICBnZXQgZGtncmV5ICgpIHsgcmV0dXJuIDggfVxuICBnZXQgcmVkICgpIHsgcmV0dXJuIDkgfVxuICBnZXQgbGltZSAoKSB7IHJldHVybiAxMCB9XG4gIGdldCB5ZWxsb3cgKCkgeyByZXR1cm4gMTEgfVxuICBnZXQgYmx1ZSAoKSB7IHJldHVybiAxMiB9XG4gIGdldCBmdWNoc2lhICgpIHsgcmV0dXJuIDEzIH1cbiAgZ2V0IGN5YW4gKCkgeyByZXR1cm4gMTQgfVxuICBnZXQgd2hpdGUgKCkgeyByZXR1cm4gMTUgfVxuXG4gIHRvX3JlZCAocmdiYSkgeyByZXR1cm4gdGhpcy5yZ2JhKHJnYmEpLnIgfVxuXG4gIHRvX2dyZWVuIChyZ2JhKSB7IHJldHVybiB0aGlzLnJnYmEocmdiYSkuZyB9XG5cbiAgdG9fYmx1ZSAocmdiYSkgeyByZXR1cm4gdGhpcy5yZ2JhKHJnYmEpLmIgfVxuXG4gIHRvX2FscGhhIChyZ2JhKSB7IHJldHVybiB0aGlzLnJnYmEocmdiYSkuYSB9XG5cbiAgc3BsaXQgKHJnYmEpIHtcbiAgICBjb25zdCBMRSA9IHRoaXMuX0xFXG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IHJnYmEgPj4gKExFID8gMjQgOiAwKSAmIDB4RkYsXG4gICAgICBnOiByZ2JhID4+IChMRSA/IDE2IDogOCkgJiAweEZGLFxuICAgICAgYjogcmdiYSA+PiAoTEUgPyA4IDogMTYpICYgMHhGRixcbiAgICAgIGE6IHJnYmEgPj4gKExFID8gMCA6IDI0KSAmIDB4RkYsXG4gICAgfVxuICB9XG5cbiAgcmdiYSAociwgZywgYiwgYSkge1xuICAgIGxldCBjID0gZyA/IGEgPDwgMjQgfCByIDw8IDE2IHwgZyA8PCA4IHwgYiA6IHJcbiAgICByZXR1cm4gdGhpcy5fTEUgPyByZXZlcnNlKGMpIDogY1xuICB9XG5cbiAgY29sb3IgKGMsIHIsIGcsIGIsIGEpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGlmIChyKSB7XG4gICAgICBkYXRhW2NdID0gdGhpcy5yZ2JhKHIsIGcsIGIsIGEpXG4gICAgfVxuICAgIHJldHVybiBkYXRhW2NdXG4gIH1cblxuICBmaW5kX2NvbG9yIChyLCBnLCBiLCBhKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgY29sb3IgPSB0aGlzLnJnYmEociwgZywgYiwgYSlcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuX2NvdW50OyBjKyspIHtcbiAgICAgIGlmIChkYXRhW2NdID09PSBjb2xvcikge1xuICAgICAgICByZXR1cm4gY1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTFcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvcmFpbmJvdy5qcyIsImltcG9ydCB7IEVtaXR0ZXIgfSBmcm9tICcuLi8uLi9lbWl0dGVyLmpzJ1xuaW1wb3J0IHsgYXN5bmMgfSBmcm9tICcuLi8uLi91dGlscy5qcydcbmltcG9ydCB7IGRhdGFfdHlwZV9zaXplcywgZGF0YV90eXBlX2ZucyB9IGZyb20gJy4uL21lbW9yeS5qcydcblxudmFyIGN1cnJlbnRPZmZzZXQgPSAwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaXAgZXh0ZW5kcyBFbWl0dGVyIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuX21haW4gPSBtYWluXG5cbiAgICB0aGlzLl9kYXRhID0gbnVsbFxuICAgIHRoaXMuX3dpZHRoID0gMFxuICAgIHRoaXMuX2hlaWdodCA9IDBcbiAgICB0aGlzLl9jb3VudCA9IDBcbiAgICB0aGlzLl9zaXplID0gMFxuICAgIHRoaXMuX3RvcCA9IDBcbiAgICB0aGlzLl9ib3R0b20gPSAwXG4gICAgdGhpcy5fZGF0YV9zaXplID0gMFxuICB9XG5cbiAgaW5pdCAobmFtZSA9ICcnLCBrZXlzID0gW10sIG5vZGF0YSA9IGZhbHNlKSB7XG4gICAgbGV0IG1haW4gPSB0aGlzLl9tYWluXG5cbiAgICBmb3IgKGxldCBrIG9mIGtleXMpIHtcbiAgICAgIHRoaXNbJ18nICsga10gPSBtYWluLmRlZmF1bHRzKG5hbWUgKyAnLicgKyBrKVxuICAgIH1cblxuICAgIGlmICghbm9kYXRhKSB7XG4gICAgICB0aGlzLl9jb3VudCA9IHRoaXMuX2NvdW50IHx8IDFcbiAgICAgIHRoaXMuX3dpZHRoID0gdGhpcy5fd2lkdGggfHwgMVxuICAgICAgdGhpcy5faGVpZ2h0ID0gdGhpcy5faGVpZ2h0IHx8IDFcblxuICAgICAgdGhpcy5fZGF0YV9mb3JtYXQgPSBtYWluLmRlZmF1bHRzKG5hbWUgKyAnLmRhdGFfZm9ybWF0JykgfHwgJ2k4J1xuICAgICAgdGhpcy5fZGF0YV9zaXplID0gbWFpbi5kZWZhdWx0cyhuYW1lICsgJy5kYXRhX3NpemUnKSB8fCAxXG4gICAgICB0aGlzLl9kYXRhX3NpemUgPSBfLmlzU3RyaW5nKHRoaXMuX2RhdGFfZm9ybWF0KSA/IGRhdGFfdHlwZV9zaXplc1t0aGlzLl9kYXRhX2Zvcm1hdF0gOiB0aGlzLl9kYXRhX3NpemVcbiAgICAgIHRoaXMuX2NlbGxfc2l6ZSA9IHRoaXMuX3dpZHRoICogdGhpcy5faGVpZ2h0ICogdGhpcy5fZGF0YV9zaXplXG5cbiAgICAgIHRoaXMuX3NpemUgPSB0aGlzLl93aWR0aCAqIHRoaXMuX2hlaWdodCAqIHRoaXMuX2RhdGFfc2l6ZSAqIHRoaXMuX2NvdW50XG5cbiAgICAgIHRoaXMuX3RvcCA9IF8uZ2V0KG1haW4sICdtZW1fbWFwLicgKyBuYW1lICsgJy50b3AnLCBjdXJyZW50T2Zmc2V0KVxuICAgICAgdGhpcy5fYm90dG9tID0gdGhpcy5fdG9wICsgdGhpcy5fc2l6ZSAtIDFcblxuICAgICAgXy5zZXQobWFpbiwgJ21lbV9tYXAuJyArIG5hbWUsIHtcbiAgICAgICAgdG9wOiB0aGlzLl90b3AsXG4gICAgICAgIGJvdHRvbTogdGhpcy5fYm90dG9tLFxuICAgICAgICBzaXplOiB0aGlzLl9zaXplLFxuICAgICAgICBkYXRhX2Zvcm1hdDogdGhpcy5fZGF0YV9mb3JtYXQsXG4gICAgICAgIGRhdGFfc2l6ZTogdGhpcy5fZGF0YV9zaXplLFxuICAgICAgICBjZWxsX3NpemU6IHRoaXMuX2NlbGxfc2l6ZSxcbiAgICAgICAgY291bnQ6IHRoaXMuX2NvdW50LFxuICAgICAgfSlcblxuICAgICAgY3VycmVudE9mZnNldCA9IHRoaXMuX2JvdHRvbSArIDFcblxuICAgICAgdGhpcy5fZGF0YSA9IG5ldyB3aW5kb3dbZGF0YV90eXBlX2Zuc1t0aGlzLl9kYXRhX2Zvcm1hdF0gKyAnQXJyYXknXSh0aGlzLm1lbW9yeS5idWZmZXIsIHRoaXMuX3RvcCwgdGhpcy5fY2VsbF9zaXplICogdGhpcy5fY291bnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGVhcigpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuICBnZXQgbWVtb3J5ICgpIHsgcmV0dXJuIHRoaXMuX21haW4ubWVtb3J5IH1cblxuICBnZXQgZ3VpZGVvICgpIHsgcmV0dXJuIHRoaXMuX21haW4uZ3VpZGVvIH1cbiAgZ2V0IHJhaW5ib3cgKCkgeyByZXR1cm4gdGhpcy5ndWlkZW8ucmFpbmJvdyB9XG4gIGdldCBmb256byAoKSB7IHJldHVybiB0aGlzLmd1aWRlby5mb256byB9XG4gIGdldCBvcndlbGwgKCkgeyByZXR1cm4gdGhpcy5ndWlkZW8ub3J3ZWxsIH1cbiAgZ2V0IGJlYWdsZSAoKSB7IHJldHVybiB0aGlzLm9yd2VsbC5iZWFnbGUgfVxuICBnZXQgdmlvbGV0ICgpIHsgcmV0dXJuIHRoaXMuZ3VpZGVvLnZpb2xldCB9XG5cbiAgZ2V0IGRhdGEgKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9XG4gIGdldCB0b3AgKCkgeyByZXR1cm4gdGhpcy5fdG9wIH1cbiAgZ2V0IGJvdHRvbSAoKSB7IHJldHVybiB0aGlzLl9ib3R0b20gfVxuICBnZXQgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9zaXplIH1cblxuICBnZXQgY291bnQgKCkgeyByZXR1cm4gdGhpcy5fY291bnQgfVxuICBnZXQgZGF0YV9zaXplICgpIHsgcmV0dXJuIHRoaXMuX2RhdGFfc2l6ZSB9XG5cbiAgZ2V0IHdpZHRoICgpIHsgcmV0dXJuIHRoaXMuX3dpZHRoIH1cbiAgZ2V0IGhlaWdodCAoKSB7IHJldHVybiB0aGlzLl9oZWlnaHQgfVxuXG4gIHVwZGF0ZSAoZmxpcCA9IGZhbHNlKSB7XG4gICAgbGV0IGd1aWRlbyA9IHRoaXMuZ3VpZGVvXG4gICAgZ3VpZGVvLmZvcmNlX3JlZHJhdyA9IHRydWVcbiAgICBndWlkZW8uZm9yY2VfZmxpcCA9IGd1aWRlby5mb3JjZV9mbGlwIHx8IGZsaXBcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdGljayAodCkge1xuICB9XG5cbiAgY2xlYXIgKHYgPSAwKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGEuZmlsbCh2KVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgYXN5bmMgKGZuLCBhcmdzLCBkZWxheSkge1xuICAgIGFzeW5jKHRoaXMsIGZuLCBhcmdzLCBkZWxheSlcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvY2hpcC5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi4vLi4vZ2xvYmFscy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9uem8gZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoJ2ZvbnpvJywgWydjb3VudCcsICd3aWR0aCcsICdoZWlnaHQnXSlcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcblxuICAgIHRoaXMubWVtb3J5LmZyb21fYXJyYXlfbWFzayh0aGlzLl90b3AgKyAzMyAqIHRoaXMuX2NlbGxfc2l6ZSwgW1xuICAgICAgJyAgICAgICAnLFxuICAgICAgJyAgIHcgICAnLFxuICAgICAgJyAgIHcgICAnLFxuICAgICAgJyAgIHcgICAnLFxuICAgICAgJyAgIHcgICAnLFxuICAgICAgJyAgIHcgICAnLFxuICAgICAgJyAgICAgICAnLFxuICAgICAgJyAgIHcgICAnLFxuICAgICAgJyAgICAgICAnLFxuICAgIF0sIGRlZmF1bHRzLmNoYXJzX21hcClcblxuICAgIHRoaXMubWVtb3J5LmZyb21fYXJyYXlfbWFzayh0aGlzLl90b3AgKyA2NSAqIHRoaXMuX2NlbGxfc2l6ZSwgW1xuICAgICAgJyAgICAgICAnLFxuICAgICAgJyAgIHcgICAnLFxuICAgICAgJyAgdyB3ICAnLFxuICAgICAgJyB3ICAgdyAnLFxuICAgICAgJyB3ICAgdyAnLFxuICAgICAgJyB3d3d3dyAnLFxuICAgICAgJyB3ICAgdyAnLFxuICAgICAgJyB3ICAgdyAnLFxuICAgICAgJyAgICAgICAnLFxuICAgIF0sIGRlZmF1bHRzLmNoYXJzX21hcClcblxuICAgIHRoaXMubWVtb3J5LmZyb21fYXJyYXlfbWFzayh0aGlzLl90b3AgKyA2NiAqIHRoaXMuX2NlbGxfc2l6ZSwgW1xuICAgICAgJyAgICAgICAnLFxuICAgICAgJyB3d3d3ICAnLFxuICAgICAgJyB3ICAgdyAnLFxuICAgICAgJyB3ICAgdyAnLFxuICAgICAgJyB3d3d3ICAnLFxuICAgICAgJyB3ICAgdyAnLFxuICAgICAgJyB3ICAgdyAnLFxuICAgICAgJyB3d3d3ICAnLFxuICAgICAgJyAgICAgICAnLFxuICAgIF0sIGRlZmF1bHRzLmNoYXJzX21hcClcblxuICAgIHRoaXMudGVzdCgpXG4gIH1cblxuICBkcmF3ICh4LCB5LCBjLCBmZyA9IDE1LCBiZyA9IDApIHtcbiAgICByZXR1cm4gdGhpcy5ndWlkZW8uYmxpdF9tYXNrKHRoaXMuX3RvcCArIGMgKiB0aGlzLl9jZWxsX3NpemUsIHgsIHksIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQsIGZnLCBiZylcbiAgfVxuXG4gIHRlc3QgKCkge1xuICAgIHRoaXMuZHJhdyg0MCwgNDAsIDY1LCAxMCwgMylcbiAgICB0aGlzLmRyYXcoNDcsIDQwLCA2NiwgMTIsIDE1KVxuICAgIHRoaXMuZHJhdyg1NCwgNDAsIDMzLCA1LCA4KVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy9mb256by5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3J3ZWxsIGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdvcndlbGwnLCBbJ3dpZHRoJywgJ2hlaWdodCddKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICBjbGVhciAoY2ggPSAnICcsIGJnID0gMCkge1xuICAgIHRoaXMuX2RhdGEuZmlsbCgweEZGMDAwMCAmIGNoLmNoYXJDb2RlQXQoMCkgfCAweDAwMDBGRiAmIGJnKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBsZXQgdyA9IHRoaXMuX3dpZHRoXG4gICAgbGV0IGggPSB0aGlzLl9oZWlnaHRcbiAgICBsZXQgbWVtID0gdGhpcy5fZGF0YVxuICAgIGxldCBmbnQgPSB0aGlzLmZvbnpvXG4gICAgbGV0IGZ3ID0gZm50LndpZHRoXG4gICAgbGV0IGZoID0gZm50LmhlaWdodFxuXG4gICAgbGV0IGlkeCA9IDBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGg7IHkrKykge1xuICAgICAgbGV0IHB5ID0geSAqIGZoXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHc7IHgrKykge1xuICAgICAgICBsZXQgYyA9IG1lbVtpZHhdXG4gICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgZm50LmRyYXcoeCAqIGZ3LCBweSwgYywgbWVtW2lkeCArIDFdLCBtZW1baWR4ICsgMl0pXG4gICAgICAgIH1cbiAgICAgICAgaWR4ICs9IDNcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgZHJhd19jaGFyICh4LCB5LCBjLCBmZywgYmcpIHtcbiAgICBsZXQgZm50ID0gdGhpcy5mb256b1xuICAgIGZudC5kcmF3KHggKiBmbnQud2lkdGgsIHkgKiBmbnQuaGVpZ2h0LCBjLCBmZywgYmcpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGluZGV4ICh4LCB5KSB7XG4gICAgcmV0dXJuICgoeSAtIDEpICogdGhpcy5fd2lkdGggKyAoeCAtIDEpKSAqIDNcbiAgfVxuXG4gIGxpbmUgKHkpIHtcbiAgICBsZXQgbCA9IHRoaXMuX3dpZHRoICogM1xuICAgIHJldHVybiB7IHN0YXJ0OiB5ICogbCwgZW5kOiAoeSArIDEpICogbCAtIDMsIGxlbmd0aDogbCB9XG4gIH1cblxuICBjaGFyX2F0ICh4LCB5KSB7XG4gICAgbGV0IHRpZHggPSB0aGlzLmluZGV4KHgsIHkpXG4gICAgbGV0IG1lbSA9IHRoaXMuX2RhdGFcbiAgICByZXR1cm4geyBjaDogbWVtW3RpZHhdLCBmZzogbWVtW3RpZHggKyAxXSwgYmc6IG1lbVt0aWR4ICsgMl0gfVxuICB9XG5cbiAgcHV0X2NoYXIgKGNoLCBmZyA9IDEsIGJnID0gMCkge1xuICAgIHN3aXRjaCAoY2guY2hhckNvZGVBdCgwKSkge1xuICAgICAgY2FzZSAxMzpcbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIHJldHVybiB0aGlzLmNyKClcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcmV0dXJuIHRoaXMuYnMoKVxuICAgIH1cblxuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zKClcbiAgICB0aGlzLl9kYXRhLnNldChbY2guY2hhckNvZGVBdCgwKSwgZmcsIGJnXSwgdGhpcy5pbmRleCh4LCB5KSlcblxuICAgIHRoaXMuYmVhZ2xlLngrK1xuICAgIGlmICh0aGlzLmJlYWdsZS54ID4gdGhpcy5fd2lkdGgpIHtcbiAgICAgIHRoaXMuY3IoKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRyYXdfY2hhcih4LCB5LCBjaCwgZmcsIGJnKVxuICB9XG5cbiAgcHJpbnQgKHRleHQsIGZnLCBiZykge1xuICAgIGZvciAobGV0IGMgb2YgdGV4dCkge1xuICAgICAgdGhpcy5wdXRfY2hhcihjLCBmZywgYmcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwb3MgKCkgeyByZXR1cm4geyB4OiB0aGlzLmJlYWdsZS54LCB5OiB0aGlzLmJlYWdsZS55IH0gfVxuXG4gIG1vdmVfdG8gKHgsIHkpIHsgcmV0dXJuIHRoaXMuYmVhZ2xlLm1vdmVfdG8oeCwgeSkgfVxuXG4gIG1vdmVfYnkgKHgsIHkpIHsgcmV0dXJuIHRoaXMuYmVhZ2xlLm1vdmVfYnkoeCwgeSkgfVxuXG4gIGJvbCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8oMSwgdGhpcy5iZWFnbGUueSkgfVxuXG4gIGVvbCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5fd2lkdGgsIHRoaXMuYmVhZ2xlLnkpIH1cblxuICBib3MgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKDEsIDEpIH1cblxuICBlb3MgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpIH1cblxuICBicyAoKSB7IHJldHVybiB0aGlzLmxlZnQoKS5wdXRfY2hhcignICcpLmxlZnQoKSB9XG5cbiAgY3IgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKDEsIHRoaXMuYmVhZ2xlLnkgKyAxKSB9XG5cbiAgbGYgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuYmVhZ2xlLngsIHRoaXMuYmVhZ2xlLnkgKyAxKSB9XG5cbiAgdXAgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuYmVhZ2xlLngsIHRoaXMuYmVhZ2xlLnkgLSAxKSB9XG5cbiAgbGVmdCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5iZWFnbGUueCAtIDEsIHRoaXMuYmVhZ2xlLnkpIH1cblxuICBkb3duICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLmJlYWdsZS54LCB0aGlzLmJlYWdsZS55ICsgMSkgfVxuXG4gIHJpZ2h0ICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLmJlYWdsZS54ICsgMSwgdGhpcy5iZWFnbGUueSkgfVxuXG4gIGNsZWFyX2VvbCAoYmcgPSAwKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MoKVxuICAgIGxldCBzID0gdGhpcy5pbmRleCh4LCB5KVxuICAgIHRoaXMuX2RhdGEuZmlsbCgweDAwMDBGRiAmIGJnLCBzLCB0aGlzLmluZGV4KHRoaXMuX3dpZHRoLCB5KSAtIHMpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNsZWFyX2VvcyAoYmcgPSAwKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MoKVxuICAgIGxldCBzID0gdGhpcy5pbmRleCh4LCB5KVxuICAgIHRoaXMuX2RhdGEuZmlsbCgweDAwMDBGRiAmIGJnLCBzLCB0aGlzLl9zaXplIC0gcylcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY2xlYXJfYm9sIChiZyA9IDApIHtcbiAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcygpXG4gICAgbGV0IHMgPSB0aGlzLmluZGV4KHgsIHkpXG4gICAgdGhpcy5fZGF0YS5maWxsKDB4MDAwMEZGICYgYmcsIHMsIHRoaXMuaW5kZXgoMSwgeSkgLSBzKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjbGVhcl9ib3MgKGJnID0gMCkge1xuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zKClcbiAgICB0aGlzLl9kYXRhLmZpbGwoMHgwMDAwRkYgJiBiZywgMCwgdGhpcy5pbmRleCh4LCB5KSAtIDEpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNvcHlfbGluZSAoc3ksIHR5KSB7XG4gICAgbGV0IHNpID0gdGhpcy5saW5lKHN5KVxuICAgIHRoaXMuX2RhdGEuY29weShzaS5zdGFydCwgdGhpcy5saW5lKHR5KSwgc2kubGVuZ3RoKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjb3B5X2NvbCAoc3gsIHR4KSB7XG4gICAgbGV0IG1lbSA9IHRoaXMuX2RhdGFcbiAgICBzeCAqPSA0XG4gICAgdHggKj0gNFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5faGVpZ2h0OyB5KyspIHtcbiAgICAgIGxldCBpID0gdGhpcy5saW5lKHkpXG4gICAgICBtZW0uY29weShpLnN0YXJ0ICsgc3gsIGkuc3RhcnQgKyB0eCwgMylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGVyYXNlX2xpbmUgKHksIGJnID0gMCkge1xuICAgIGxldCBpID0gdGhpcy5saW5lKHkpXG4gICAgdGhpcy5fZGF0YS5maWxsKDB4MDAwMEZGICYgYmcsIGkuc3RhcnQsIGkubGVuZ3RoKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBlcmFzZV9jb2wgKHgsIGJnID0gMCkge1xuICAgIGxldCBtZW0gPSB0aGlzLl9kYXRhXG4gICAgbGV0IGxzID0gdGhpcy5saW5lKDApLnN0YXJ0ICsgeCAqIDNcbiAgICBsZXQgYyA9IDB4MDAwMEZGICYgYmdcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX2hlaWdodDsgeSsrKSB7XG4gICAgICBtZW0uZmlsbChjLCBscywgMylcbiAgICAgIGxzICs9IHRoaXMuX3dpZHRoICogM1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgc2Nyb2xsIChkeSkge1xuICAgIGlmIChkeSA+IDApIHtcbiAgICAgIGxldCBpID0gdGhpcy5saW5lKGR5ICsgMSlcbiAgICAgIHRoaXMuX2RhdGEuY29weShpLnN0YXJ0LCAwLCB0aGlzLl9zaXplKVxuICAgICAgaSA9IHRoaXMubGluZShkeSlcbiAgICAgIGxldCBzID0gaS5zdGFydFxuICAgICAgdGhpcy5fZGF0YS5maWxsKDAsIHMsIHRoaXMuX3NpemUgLSBzKVxuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgICB9XG4gICAgZWxzZSBpZiAoZHkgPCAwKSB7XG4gICAgICBsZXQgaSA9IHRoaXMubGluZShkeSArIDEpXG4gICAgICB0aGlzLl9kYXRhLmNvcHkoaS5zdGFydCwgMCwgdGhpcy5fc2l6ZSlcbiAgICAgIGkgPSB0aGlzLmxpbmUoZHkpXG4gICAgICBsZXQgcyA9IGkuc3RhcnRcbiAgICAgIHRoaXMuX2RhdGEuZmlsbCgwLCBzLCB0aGlzLl9zaXplIC0gcylcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL29yd2VsbC5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVhZ2xlIGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdiZWFnbGUnLCBbJ3dpZHRoJywgJ2hlaWdodCcsICdjb2xvcicsICdibGlua3JhdGUnLCAndmlzaWJsZSddKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuICAgIHRoaXMuX3ggPSAwXG4gICAgdGhpcy5feSA9IDBcbiAgICB0aGlzLl9sYXN0ID0gMFxuICAgIHRoaXMuX2JsaW5rX2hpZGRlbiA9IGZhbHNlXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBpZiAodCAtIHRoaXMuX2xhc3QgPj0gdGhpcy5fYmxpbmtyYXRlKSB7XG4gICAgICB0aGlzLmJsaW5rKClcbiAgICAgIHRoaXMuX2xhc3QgPSB0XG4gICAgfVxuICB9XG5cbiAgZ2V0IHggKCkgeyByZXR1cm4gdGhpcy5feCB9XG4gIHNldCB4ICh2YWx1ZSkgeyB0aGlzLl94ID0gdmFsdWUgfVxuXG4gIGdldCB5ICgpIHsgcmV0dXJuIHRoaXMuX3kgfVxuICBzZXQgeSAodmFsdWUpIHsgdGhpcy5feSA9IHZhbHVlIH1cblxuICBnZXQgY29sb3IgKCkgeyByZXR1cm4gdGhpcy5fY29sb3IgfVxuICBzZXQgY29sb3IgKHZhbHVlKSB7IHRoaXMuX2NvbG9yID0gdmFsdWUgfVxuXG4gIGdldCBibGlua3JhdGUgKCkgeyByZXR1cm4gdGhpcy5fYmxpbmtyYXRlIH1cbiAgc2V0IGJsaW5rcmF0ZSAodmFsdWUpIHsgdGhpcy5fYmxpbmtyYXRlID0gdmFsdWUgfVxuXG4gIGJsaW5rICgpIHtcbiAgICBpZiAodGhpcy5fdmlzaWJsZSkge1xuICAgICAgdGhpcy5fYmxpbmtfaGlkZGVuID0gIXRoaXMuX2JsaW5rX2hpZGRlblxuICAgICAgdGhpcy51cGRhdGUodHJ1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIG1vdmVfdG8gKHgsIHkpIHtcbiAgICBjb25zdCBvcndlbGwgPSB0aGlzLm9yd2VsbFxuICAgIGxldCB3ID0gb3J3ZWxsLndpZHRoXG4gICAgbGV0IGggPSBvcndlbGwuaGVpZ2h0XG5cbiAgICBpZiAoeCA+IHcpIHtcbiAgICAgIHggPSB3XG4gICAgfVxuICAgIGVsc2UgaWYgKHggPCAxKSB7XG4gICAgICB4ID0gMVxuICAgIH1cblxuICAgIGlmICh5ID4gaCkge1xuICAgICAgeSA9IGhcbiAgICB9XG4gICAgZWxzZSBpZiAoeSA8IDEpIHtcbiAgICAgIHkgPSAxXG4gICAgfVxuXG4gICAgdGhpcy5feCA9IHhcbiAgICB0aGlzLl95ID0geVxuXG4gICAgcmV0dXJuIHRoaXMuZHJhdyh4LCB5KVxuICB9XG5cbiAgbW92ZV9ieSAoeCwgeSkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuX3ggKyB4LCB0aGlzLl95ICsgeSkgfVxuXG4gIGRyYXcgKHgsIHkpIHtcbiAgICBsZXQgdyA9IHRoaXMuX3dpZHRoXG4gICAgbGV0IGggPSB0aGlzLl9oZWlnaHRcbiAgICBsZXQgYyA9IHRoaXMuX2NvbG9yXG4gICAgbGV0IGd1aWRlbyA9IHRoaXMuZ3VpZGVvXG5cbiAgICBmb3IgKGxldCBieSA9IDA7IGJ5IDwgaDsgYnkrKykge1xuICAgICAgbGV0IHBpID0gKHkgKyBieSkgKiB3ICsgeFxuICAgICAgZm9yIChsZXQgYnggPSAwOyBieCA8IHc7IGJ4KyspIHtcbiAgICAgICAgZ3VpZGVvLnBpeGVsKHBpKyssIGMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKHRydWUpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL2JlYWdsZS5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlvbGV0IGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5fbGlzdCA9IFtdXG5cbiAgICB0aGlzLmluaXQoJ3Zpb2xldCcsIFsnZGF0YV9zaXplJywgJ2NvdW50JywgJ3dpZHRoJywgJ2hlaWdodCddKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICBnZXQgbGlzdCAoKSB7IHJldHVybiB0aGlzLl9saXN0IH1cblxuICBjbGVhciAodiA9IDApIHtcbiAgICB0aGlzLl9saXN0ID0gW11cbiAgICByZXR1cm4gc3VwZXIuY2xlYXIodilcbiAgfVxuXG4gIGZpbmQgKG5hbWUpIHtcbiAgICByZXR1cm4gXy5maW5kKHRoaXMuX2xpc3QsIHsgbmFtZSB9KVxuICB9XG5cbiAgaW5kZXggKG5hbWUpIHtcbiAgICByZXR1cm4gXy5pbmRleE9mKHRoaXMuX2xpc3QsIHsgbmFtZSB9KVxuICB9XG5cbiAgYWRkIChuYW1lLCBmcmFtZSwgeCwgeSwgeikge1xuICAgIHRoaXMuX2xpc3QucHVzaCh7IG5hbWUsIGZyYW1lLCB4LCB5LCB6IH0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGRlbCAobmFtZSkge1xuICAgIGxldCBpID0gdGhpcy5pbmRleChuYW1lKVxuICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgdGhpcy5fbGlzdC5zcGxpY2UoaSwgMSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHggKG5hbWUsIHZhbHVlKSB7XG4gICAgbGV0IHMgPSB0aGlzLmZpbmQobmFtZSlcbiAgICBpZiAocyAmJiB2YWx1ZSkge1xuICAgICAgcy54ID0gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIHMgPyBzLnggOiAwXG4gIH1cblxuICB5IChuYW1lLCB2YWx1ZSkge1xuICAgIGxldCBzID0gdGhpcy5maW5kKG5hbWUpXG4gICAgaWYgKHMgJiYgdmFsdWUpIHtcbiAgICAgIHMueSA9IHZhbHVlXG4gICAgfVxuICAgIHJldHVybiBzID8gcy55IDogMFxuICB9XG5cbiAgeiAobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgcyA9IHRoaXMuZmluZChuYW1lKVxuICAgIGlmIChzICYmIHZhbHVlKSB7XG4gICAgICBzLnogPSB2YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gcyA/IHMueiA6IDBcbiAgfVxuXG4gIG1vdmVfdG8gKG5hbWUsIHgsIHksIHopIHtcbiAgICBsZXQgcyA9IHRoaXMuZmluZChuYW1lKVxuICAgIGlmIChzKSB7XG4gICAgICBzLnggPSB4XG4gICAgICBzLnkgPSB5XG4gICAgICBpZiAoeikge1xuICAgICAgICBzLnogPSB6XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBtb3ZlX2J5IChuYW1lLCB4LCB5LCB6KSB7XG4gICAgbGV0IHMgPSB0aGlzLmZpbmQobmFtZSlcbiAgICBpZiAocykge1xuICAgICAgcy54ICs9IHhcbiAgICAgIHMueSArPSB5XG4gICAgICBpZiAoeikge1xuICAgICAgICBzLnogKz0gelxuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZHJhdyAoZnJhbWUsIHgsIHkpIHtcbiAgICBpZiAoXy5pc1VuZGVmaW5lZChmcmFtZSkpIHtcbiAgICAgIGZvciAobGV0IHMgb2YgXy5zb3J0QnkodGhpcy5fbGlzdCwgJ3onKSkge1xuICAgICAgICB0aGlzLmRyYXcocy5mcmFtZSwgcy54LCBzLnkpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5ndWlkZW8uYmxpdCh0aGlzLl90b3AgKyBmcmFtZSAqIHRoaXMuX2NlbGxfc2l6ZSwgeCwgeSwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy92aW9sZXQuanMiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cblxuZXhwb3J0IGNsYXNzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuX292ZXJsYXlzID0gb3ZlcmxheXNcblxuICAgIHRoaXMuX3dpZHRoID0gd2lkdGhcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHRcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgY3JlYXRlICgpIHtcbiAgICB0aGlzLl9jYW52YXNCdWZmZXIgPSBuZXcgUElYSS5DYW52YXNCdWZmZXIodGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcblxuICAgIHRoaXMuX3RleHR1cmUgPSBQSVhJLlRleHR1cmUuZnJvbUNhbnZhcyh0aGlzLl9jYW52YXNCdWZmZXIuY2FudmFzLCBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1QpXG4gICAgdGhpcy5fdGV4dHVyZS5zY2FsZU1vZGUgPSBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1RcblxuICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl90ZXh0dXJlKVxuXG4gICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhc0J1ZmZlci5jYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7IGFscGhhOiB0cnVlLCBhbnRpYWxpYXM6IGZhbHNlIH0pXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fbGFzdCA9IDBcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLl90ZXh0dXJlKSB7XG4gICAgICB0aGlzLl90ZXh0dXJlLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fdGV4dHVyZSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY2FudmFzQnVmZmVyKSB7XG4gICAgICB0aGlzLl9jYW52YXNCdWZmZXIuZGVzdHJveSgpXG4gICAgICB0aGlzLl9jYW52YXNCdWZmZXIgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Nwcml0ZSkge1xuICAgICAgdGhpcy5fc3ByaXRlLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fc3ByaXRlID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5ndWlkZW8udXBkYXRlKClcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX292ZXJsYXlzLm1haW4gfVxuICBnZXQgZ3VpZGVvICgpIHsgcmV0dXJuIHRoaXMubWFpbi5ndWlkZW8gfVxuICBnZXQgc3RhZ2UgKCkgeyByZXR1cm4gdGhpcy5tYWluLnN0YWdlIH1cbiAgZ2V0IHJlbmRlcmVyICgpIHsgcmV0dXJuIHRoaXMubWFpbi5yZW5kZXJlciB9XG5cbiAgZ2V0IGNhbnZhc0J1ZmZlciAoKSB7IHJldHVybiB0aGlzLl9jYW52YXNCdWZmZXIgfVxuICBnZXQgdGV4dHVyZSAoKSB7IHJldHVybiB0aGlzLl90ZXh0dXJlIH1cbiAgZ2V0IHNwcml0ZSAoKSB7IHJldHVybiB0aGlzLl9zcHJpdGUgfVxuICBnZXQgY29udGV4dCAoKSB7IHJldHVybiB0aGlzLl9jb250ZXh0IH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBTY3JlZW5PdmVybGF5IGV4dGVuZHMgT3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IgKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLmNyZWF0ZSgpXG5cbiAgICB0aGlzLl9zcHJpdGUueCA9IF8uZ2V0KG9wdGlvbnMsICdvZmZzZXQueCcsIDApICsgXy5nZXQob3B0aW9ucywgJ21hcmdpbnMueCcsIDApIC8gMlxuICAgIHRoaXMuX3Nwcml0ZS55ID0gXy5nZXQob3B0aW9ucywgJ29mZnNldC55JywgMCkgKyBfLmdldChvcHRpb25zLCAnbWFyZ2lucy55JywgMCkgLyAyXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuZ3VpZGVvLnVwZGF0ZSh0cnVlKVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgU2NhbmxpbmVzT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5fZ2FwID0gXy5nZXQob3B0aW9ucywgJ2dhcCcsIDMpXG4gICAgdGhpcy5fYWxwaGEgPSBfLmdldChvcHRpb25zLCAnYWxwaGEnLCAwLjM1KVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuXG4gICAgbGV0IGEgPSB0aGlzLl9hbHBoYSAqIDI1NVxuICAgIGxldCBkYXRhID0gdGhpcy5fY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICBsZXQgcGl4ZWxzID0gZGF0YS5kYXRhXG4gICAgbGV0IHN6ID0gdGhpcy5fd2lkdGggKiA0XG4gICAgbGV0IGlkeFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5faGVpZ2h0OyB5ICs9IHRoaXMuX2dhcCkge1xuICAgICAgaWR4ID0geSAqIHN6XG4gICAgICBmb3IgKGxldCBpID0gaWR4OyBpIDwgaWR4ICsgc3o7IGkgKz0gNCkge1xuICAgICAgICBwaXhlbHMuc2V0KFswLCAwLCAwLCBhXSwgaSlcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMClcbiAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIFNjYW5saW5lT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5fcmF0ZSA9IF8uZ2V0KG9wdGlvbnMsICdyYXRlJywgNTApXG4gICAgdGhpcy5fc3BlZWQgPSBfLmdldChvcHRpb25zLCAnc3BlZWQnLCAxNilcbiAgICB0aGlzLl9hbHBoYSA9IF8uZ2V0KG9wdGlvbnMsICdhbHBoYScsIDAuMSlcblxuICAgIHRoaXMuY3JlYXRlKClcblxuICAgIGxldCBkYXRhID0gdGhpcy5fY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICBsZXQgcGl4ZWxzID0gZGF0YS5kYXRhXG4gICAgbGV0IHN6ID0gdGhpcy5fd2lkdGggKiA0XG4gICAgbGV0IGxlbiA9IHRoaXMuX2hlaWdodCAqIHN6XG4gICAgbGV0IGwgPSAwXG4gICAgbGV0IGggPSB0aGlzLl9oZWlnaHRcbiAgICBsZXQgYSA9IHRoaXMuX2FscGhhICogMjU1XG4gICAgbGV0IGFhXG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbjsgeSArPSBzeikge1xuICAgICAgYWEgPSBsIC8gaCAqIGFcbiAgICAgIGZvciAobGV0IHggPSB5OyB4IDwgeSArIHN6OyB4ICs9IDQpIHtcbiAgICAgICAgcGl4ZWxzLnNldChbMjUsIDI1LCAyNSwgYWFdLCB4KVxuICAgICAgfVxuICAgICAgbCsrXG4gICAgfVxuXG4gICAgdGhpcy5fY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMClcblxuICAgIHRoaXMuX3Nwcml0ZS55ID0gLXRoaXMuX3Nwcml0ZS5oZWlnaHRcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBpZiAodCAtIHRoaXMuX2xhc3QgPj0gdGhpcy5fcmF0ZSkge1xuICAgICAgdGhpcy5zcHJpdGUueSArPSB0aGlzLl9zcGVlZFxuICAgICAgaWYgKHRoaXMuX3Nwcml0ZS55ID4gdGhpcy5faGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuX3Nwcml0ZS55ID0gLXRoaXMuX3Nwcml0ZS5oZWlnaHRcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3QgPSB0XG5cbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9XG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBOb2lzZXNPdmVybGF5IGV4dGVuZHMgT3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IgKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLl9yYXRlID0gXy5nZXQob3B0aW9ucywgJ3JhdGUnLCAyNTApXG4gICAgdGhpcy5fY291bnQgPSBfLmdldChvcHRpb25zLCAnY291bnQnLCA4KVxuICAgIHRoaXMuX3JhdGUgPSBfLmdldChvcHRpb25zLCAncmF0ZScsIDAuODUpXG4gICAgdGhpcy5fcmVkID0gXy5nZXQob3B0aW9ucywgJ3JlZCcsIDEwMClcbiAgICB0aGlzLl9ncmVlbiA9IF8uZ2V0KG9wdGlvbnMsICdncmVlbicsIDEwMClcbiAgICB0aGlzLl9ibHVlID0gXy5nZXQob3B0aW9ucywgJ2JsdWUnLCAxMDApXG4gICAgdGhpcy5fYWxwaGEgPSBfLmdldChvcHRpb25zLCAnYWxwaGEnLCAwLjE1KVxuXG4gICAgdGhpcy5fbm9pc2VzID0ge31cblxuICAgIGxldCBhID0gdGhpcy5fYWxwaGEgKiAyNTVcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuX2NvdW50OyBjKyspIHtcbiAgICAgIGxldCBub2lzZSA9IG5ldyBPdmVybGF5KG92ZXJsYXlzLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuICAgICAgbm9pc2UuY3JlYXRlKClcbiAgICAgIG5vaXNlLl9zcHJpdGUudmlzaWJsZSA9IGMgPT09IDBcblxuICAgICAgbGV0IGRhdGEgPSBub2lzZS5fY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICAgIGxldCBwaXhlbHMgPSBkYXRhLmRhdGFcbiAgICAgIGxldCBsZW4gPSBwaXhlbHMubGVuZ3RoXG4gICAgICBsZXQgciA9IHRoaXMuX3JlZFxuICAgICAgbGV0IGcgPSB0aGlzLl9ncmVlblxuICAgICAgbGV0IGIgPSB0aGlzLl9ibHVlXG4gICAgICBsZXQgX3JhdGUgPSB0aGlzLl9yYXRlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID49IF9yYXRlKSB7XG4gICAgICAgICAgcGl4ZWxzLnNldChbTWF0aC50cnVuYyhNYXRoLnJhbmRvbSgpICogciksIE1hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIGcpLCBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiBiKSwgYV0sIGkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5vaXNlLl9jb250ZXh0LnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKVxuICAgICAgdGhpcy5fbm9pc2VzW2NdID0gbm9pc2VcbiAgICAgIHRoaXMuZ3VpZGVvLnN0YWdlLmFkZENoaWxkKG5vaXNlLnNwcml0ZSlcbiAgICB9XG5cbiAgICB0aGlzLl9ub2lzZUtleXMgPSBfLmtleXModGhpcy5fbm9pc2VzKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpXG5cbiAgICBmb3IgKGxldCBrIGluIHRoaXMuX25vaXNlcykge1xuICAgICAgbGV0IG5vaXNlID0gdGhpcy5fbm9pc2VzW2tdXG4gICAgICBub2lzZS5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9ub2lzZXMgPSB7fVxuICAgIHRoaXMuX25vaXNlS2V5cyA9IFtdXG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgaWYgKHQgLSB0aGlzLl9sYXN0ID49IHRoaXMuX3JhdGUpIHtcbiAgICAgIGZvciAobGV0IGsgb2YgdGhpcy5fbm9pc2VLZXlzKSB7XG4gICAgICAgIHRoaXMuX25vaXNlc1trXS5zcHJpdGUudmlzaWJsZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGxldCBub2lzZSA9IHRoaXMuX25vaXNlS2V5c1tNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9ub2lzZUtleXMubGVuZ3RoKV1cbiAgICAgIHRoaXMuX25vaXNlc1tub2lzZV0uc3ByaXRlLnZpc2libGUgPSB0cnVlXG5cbiAgICAgIHRoaXMuX2xhc3QgPSB0XG5cbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9XG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBSZ2JPdmVybGF5IGV4dGVuZHMgT3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IgKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLl9hbHBoYSA9IF8uZ2V0KG9wdGlvbnMsICdhbHBoYScsIDAuMDc1KVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuXG4gICAgbGV0IGRhdGEgPSB0aGlzLl9jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuICAgIGxldCBwaXhlbHMgPSBkYXRhLmRhdGFcbiAgICBsZXQgbGVuID0gcGl4ZWxzLmxlbmd0aFxuICAgIGxldCBhID0gdGhpcy5fYWxwaGEgKiAyNTVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxMikge1xuICAgICAgcGl4ZWxzLnNldChbMTAwLCAxMDAsIDEwMCwgYV0sIGkpXG4gICAgfVxuICAgIHRoaXMuX2NvbnRleHQucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApXG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBDcnRPdmVybGF5IGV4dGVuZHMgT3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IgKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLl9yYWRpdXMgPSBfLmdldChvcHRpb25zLCAncmFkaXVzJywgMC4yNSlcbiAgICB0aGlzLl9pbnNpZGVfYWxwaGEgPSBfLmdldChvcHRpb25zLCAnaW5zaWRlX2FscGhhJywgMC4yKVxuICAgIHRoaXMuX291dHNpZGVfYWxwaGEgPSBfLmdldChvcHRpb25zLCAnb3V0c2lkZV9hbHBoYScsIDAuMTUpXG5cbiAgICB0aGlzLmNyZWF0ZSgpXG5cbiAgICB0aGlzLl9jb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkYXJrZXInXG4gICAgbGV0IGdyYWRpZW50ID0gdGhpcy5fY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudCh0aGlzLl93aWR0aCAvIDIsIHRoaXMuX2hlaWdodCAvIDIsIHRoaXMuX2hlaWdodCAvIDIsIHRoaXMuX3dpZHRoIC8gMiwgdGhpcy5faGVpZ2h0IC8gMiwgdGhpcy5faGVpZ2h0IC8gdGhpcy5fcmFkaXVzKVxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsIDI1NSwgMjU1LCAnICsgdGhpcy5faW5zaWRlX2FscGhhICsgJyknKVxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgwLCAwLCAwLCAnICsgdGhpcy5fb3V0c2lkZV9hbHBoYSArICcpJylcbiAgICB0aGlzLl9jb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50XG4gICAgdGhpcy5fY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuICAgIHRoaXMuX2NvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJ1xuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgT3ZlcmxheXMge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluLCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9tYWluID0gbWFpblxuXG4gICAgbGV0IHN0YWdlID0gbWFpbi5zdGFnZVxuICAgIGxldCByZW5kZXJlciA9IG1haW4ucmVuZGVyZXJcblxuICAgIGxldCB3aWR0aCA9IHJlbmRlcmVyLndpZHRoXG4gICAgbGV0IGhlaWdodCA9IHJlbmRlcmVyLmhlaWdodFxuXG4gICAgdGhpcy5fbGlzdCA9IHt9XG4gICAgbGV0IGwgPSB0aGlzLl9saXN0XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlT3ZlcmxheSAoY3R4LCBDbHMsIG5hbWUsIGRlZmF1bHRzID0ge30pIHtcbiAgICAgIGxldCBvID0gXy5kZWZhdWx0c0RlZXAoe30sIG9wdGlvbnMsIHsgW25hbWVdOiBkZWZhdWx0cyB9KVxuICAgICAgbGV0IHMgPSBfLmdldChvW25hbWVdLCAnc2NhbGUnLCAxKVxuICAgICAgbFtuYW1lXSA9IG5ldyBDbHMoY3R4LCBfLmdldChvW25hbWVdLCAnd2lkdGgnLCAwKSwgXy5nZXQob1tuYW1lXSwgJ2hlaWdodCcsIDApLCBvW25hbWVdKVxuICAgICAgbFtuYW1lXS5zcHJpdGUuc2NhbGUgPSBuZXcgUElYSS5Qb2ludChzLCBzKVxuICAgICAgc3RhZ2UuYWRkQ2hpbGQobFtuYW1lXS5zcHJpdGUpXG4gICAgICByZXR1cm4gbFtuYW1lXVxuICAgIH1cblxuICAgIGlmIChfLmdldChvcHRpb25zLCAnc2NyZWVuJykpIHtcbiAgICAgIF9jcmVhdGVPdmVybGF5KHRoaXMsIFNjcmVlbk92ZXJsYXksICdzY3JlZW4nLCB7IHdpZHRoOiB0aGlzLmd1aWRlby53aWR0aCwgaGVpZ2h0OiB0aGlzLmd1aWRlby5oZWlnaHQgfSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ3NjYW5saW5lcycpKSB7XG4gICAgICBfY3JlYXRlT3ZlcmxheSh0aGlzLCBTY2FubGluZXNPdmVybGF5LCAnc2NhbmxpbmVzJywgeyB3aWR0aCwgaGVpZ2h0IH0pXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdzY2FubGluZScpKSB7XG4gICAgICBfY3JlYXRlT3ZlcmxheSh0aGlzLCBTY2FubGluZU92ZXJsYXksICdzY2FubGluZScsIHsgd2lkdGgsIGhlaWdodCB9KVxuICAgIH1cblxuICAgIGlmIChfLmdldChvcHRpb25zLCAncmdiJykpIHtcbiAgICAgIF9jcmVhdGVPdmVybGF5KHRoaXMsIFJnYk92ZXJsYXksICdyZ2InLCB7IHdpZHRoLCBoZWlnaHQgfSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ25vaXNlcycpKSB7XG4gICAgICBsZXQgdyA9IF8uZ2V0KG9wdGlvbnMsICdub2lzZXMud2lkdGgnLCB3aWR0aClcbiAgICAgIGxldCBoID0gXy5nZXQob3B0aW9ucywgJ25vaXNlcy5oZWlnaHQnLCBoZWlnaHQpXG4gICAgICBsLm5vaXNlcyA9IG5ldyBOb2lzZXNPdmVybGF5KHRoaXMsIHcsIGgsIF8uZ2V0KG9wdGlvbnMsICdub2lzZXMnKSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ2NydCcpKSB7XG4gICAgICBfY3JlYXRlT3ZlcmxheSh0aGlzLCBDcnRPdmVybGF5LCAnY3J0JywgeyB3aWR0aCwgaGVpZ2h0IH0pXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdtb25pdG9yJykpIHtcbiAgICAgIGxldCBteCA9IF8uZ2V0KG9wdGlvbnMsICdtb25pdG9yLm1hcmdpbnMueCcsIDApXG4gICAgICBsZXQgbXkgPSBfLmdldChvcHRpb25zLCAnbW9uaXRvci5tYXJnaW5zLnknLCAwKVxuICAgICAgbGV0IHcgPSBfLmdldChvcHRpb25zLCAnbW9uaXRvci53aWR0aCcsIHdpZHRoKVxuICAgICAgbGV0IGggPSBfLmdldChvcHRpb25zLCAnbW9uaXRvci5oZWlnaHQnLCBoZWlnaHQpXG4gICAgICBsZXQgcyA9IF8uZ2V0KG9wdGlvbnMsICdtb25pdG9yLnNjYWxlJywgMSlcblxuICAgICAgbGV0IHRleCA9IFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoJy4vYnVpbGQvJyArIHJlcXVpcmUoJ2ZpbGU/bmFtZT1hc3NldHMvW3BhdGhdL1tuYW1lXS5bZXh0XSEuLi8uLi9hc3NldHMvaW1ncy9jcnQucG5nJykpXG4gICAgICBsLm1vbml0b3IgPSBuZXcgUElYSS5TcHJpdGUodGV4KVxuICAgICAgbC5tb25pdG9yLndpZHRoID0gdyArIG14XG4gICAgICBsLm1vbml0b3IuaGVpZ2h0ID0gaCArIG15XG4gICAgICBsLm1vbml0b3Iuc2NhbGUgPSBuZXcgUElYSS5Qb2ludChzLCBzKVxuICAgICAgbC5tb25pdG9yLnggPSBfLmdldChvcHRpb25zLCAnbW9uaXRvci5vZmZzZXQueCcsIDApICsgbXggLyAtMlxuICAgICAgbC5tb25pdG9yLnkgPSBfLmdldChvcHRpb25zLCAnbW9uaXRvci5vZmZzZXQueScsIDApICsgbXkgLyAtMlxuICAgICAgc3RhZ2UuYWRkQ2hpbGQobC5tb25pdG9yKVxuICAgIH1cbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBjb25zdCBsID0gdGhpcy5fbGlzdFxuICAgIGZvciAobGV0IGsgaW4gbCkge1xuICAgICAgaWYgKGxba10udGljaykge1xuICAgICAgICBsW2tdLnRpY2sodClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgY29uc3QgbCA9IHRoaXMuX2xpc3RcbiAgICBmb3IgKGxldCBrIGluIGwpIHtcbiAgICAgIGlmIChsW2tdLnJlc2V0KSB7XG4gICAgICAgIGxba10ucmVzZXQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGNvbnN0IGwgPSB0aGlzLl9saXN0XG4gICAgZm9yIChsZXQgayBpbiBsKSB7XG4gICAgICBpZiAobFtrXS5kZXN0cm95KSB7XG4gICAgICAgIGxba10uZGVzdHJveSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fbWFpbiB9XG4gIGdldCBndWlkZW8gKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5ndWlkZW8gfVxuICBnZXQgc3RhZ2UgKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5zdGFnZSB9XG4gIGdldCByZW5kZXJlciAoKSB7IHJldHVybiB0aGlzLl9tYWluLnJlbmRlcmVyIH1cbiAgZ2V0IHNjcmVlbiAoKSB7IHJldHVybiB0aGlzLl9saXN0LnNjcmVlbiB9XG5cbiAgcmVzaXplICgpIHtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vb3ZlcmxheXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvYXNzZXRzL2ltZ3MvL2NydC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmlsZS1sb2FkZXI/bmFtZT1hc3NldHMvW3BhdGhdL1tuYW1lXS5bZXh0XSEuL2Fzc2V0cy9pbWdzL2NydC5wbmdcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXAgPSB7XG5cdFwiLi9jcnQucG5nXCI6IDc3LFxuXHRcIi4vdGVzdC5wbmdcIjogNzhcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNzY7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9pbWdzIC4vfi9maWxlLWxvYWRlcj9uYW1lPWFzc2V0cy9bbmFtZV0uW2V4dF0hXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2NydC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmlsZS1sb2FkZXI/bmFtZT1hc3NldHMvW25hbWVdLltleHRdIS4vYXNzZXRzL2ltZ3MvY3J0LnBuZ1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3Rlc3QucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpbGUtbG9hZGVyP25hbWU9YXNzZXRzL1tuYW1lXS5bZXh0XSEuL2Fzc2V0cy9pbWdzL3Rlc3QucG5nXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtlbiBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgna2VuJywgWydjb3VudCddKVxuXG4gICAgdGhpcy5fb25LZXlkb3duID0gdGhpcy5vbktleWRvd24uYmluZCh0aGlzKVxuICAgIHRoaXMuX29uS2V5dXAgPSB0aGlzLm9uS2V5dXAuYmluZCh0aGlzKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleWRvd24pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXl1cClcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcblxuICAgIHRoaXMuX21vZHMgPSAwXG4gICAgdGhpcy5fam95c3RpY2sgPSAwXG4gICAgdGhpcy5fa2V5cyA9IHt9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleWRvd24pXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXl1cClcbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxuXG4gIGdldCBtb2RzICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgfVxuICBnZXQgam95c3RpY2sgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgfVxuICBnZXQga2V5cyAoKSB7IHJldHVybiB0aGlzLl9rZXlzIH1cblxuICBnZXQgc2hpZnQgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyAmIDB4MDEgfVxuICBnZXQgY3RybCAoKSB7IHJldHVybiB0aGlzLl9tb2RzICYgMHgwMiB9XG4gIGdldCBhbHQgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyAmIDB4MDQgfVxuICBnZXQgbWV0YSAoKSB7IHJldHVybiB0aGlzLl9tb2RzICYgMHgwOCB9XG4gIGdldCBudW1wYWQgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyAmIDB4MTAgfVxuICBnZXQgYnRuMCAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MTAgfVxuICBnZXQgYnRuMSAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MjAgfVxuICBnZXQgYnRuMiAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4NDAgfVxuICBnZXQgYnRuMyAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4ODAgfVxuICBnZXQgYnRuNCAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MTAwIH1cbiAgZ2V0IHVwICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHgwMSB9XG4gIGdldCBkb3duICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHgwMiB9XG4gIGdldCByaWdodCAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MDQgfVxuICBnZXQgbGVmdCAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MDggfVxuXG4gIGV2ZW50RGV0YWlscyAoZSkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IGUua2V5LFxuICAgICAga2V5Q29kZTogZS5rZXlDb2RlLFxuICAgICAga2V5czogdGhpcy5fa2V5cyxcbiAgICAgIG1vZHM6IHRoaXMuX21vZHMsXG4gICAgICBqb3lzdGljazogdGhpcy5fam95c3RpY2ssXG4gICAgICBzaGlmdDogdGhpcy5zaGlmdCxcbiAgICAgIGN0cmw6IHRoaXMuY3RybCxcbiAgICAgIGFsdDogdGhpcy5hbHQsXG4gICAgICBtZXRhOiB0aGlzLm1ldGEsXG4gICAgICBudW1wYWQ6IHRoaXMubnVtcGFkLFxuICAgICAgYnRuMDogdGhpcy5idG4wLFxuICAgICAgYnRuMTogdGhpcy5idG4xLFxuICAgICAgYnRuMjogdGhpcy5idG4yLFxuICAgICAgYnRuMzogdGhpcy5idG4zLFxuICAgICAgYnRuNDogdGhpcy5idG40LFxuICAgICAgdXA6IHRoaXMudXAsXG4gICAgICBkb3duOiB0aGlzLmRvd24sXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICB9XG4gIH1cblxuICBvbktleWRvd24gKGUpIHtcbiAgICBsZXQgbnVtcGFkID0gZS5sb2NhdGlvbiA9PT0gM1xuICAgIGlmIChudW1wYWQpIHtcbiAgICAgIHRoaXMuX21vZHMgfD0gMHgxMFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX21vZHMgJj0gfjB4MTBcbiAgICB9XG4gICAgdGhpcy5fa2V5c1tlLmtleUNvZGVdID0gMVxuXG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgY2FzZSAnU2hpZnQnOlxuICAgICAgICB0aGlzLl9tb2RzIHw9IDB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQ29udHJvbCc6XG4gICAgICAgIHRoaXMuX21vZHMgfD0gMHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBbHQnOlxuICAgICAgICB0aGlzLl9tb2RzIHw9IDB4MDRcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnTWV0YSc6XG4gICAgICAgIHRoaXMuX21vZHMgfD0gMHgwOFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICc4JzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDFcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDAyXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzInOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwMlxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDRcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnNCc6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDA0XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDhcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnNic6IC8vIG51bXBhZCA2XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDA4XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAneic6IC8vIGJ1dHRvbiAwXG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MTBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAneCc6IC8vIGJ1dHRvbiAxXG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MjBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnYyc6IC8vIGJ1dHRvbiAyXG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4NDBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnICc6IC8vIGJ1dHRvbiAzXG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4ODBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnRW50ZXInOiAvLyBidXR0b24gNFxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDEwMFxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgna2V5LmRvd24nLCB0aGlzLmV2ZW50RGV0YWlscyhlKSlcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuXG4gIG9uS2V5dXAgKGUpIHtcbiAgICBsZXQgbnVtcGFkID0gZS5sb2NhdGlvbiA9PT0gM1xuICAgIGlmIChudW1wYWQpIHtcbiAgICAgIHRoaXMuX21vZHMgfD0gMHgxMFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX21vZHMgJj0gfjB4MTBcbiAgICB9XG4gICAgdGhpcy5fa2V5c1tlLmtleUNvZGVdID0gMFxuXG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgY2FzZSAnU2hpZnQnOlxuICAgICAgICB0aGlzLl9tb2RzICY9IH4weDAxXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0NvbnRyb2wnOlxuICAgICAgICB0aGlzLl9tb2RzICY9IH4weDAyXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0FsdCc6XG4gICAgICAgIHRoaXMuX21vZHMgJj0gfjB4MDRcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnTWV0YSc6XG4gICAgICAgIHRoaXMuX21vZHMgJj0gfjB4MDhcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDAxXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzgnOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDFcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICcyJzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDAyXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDRcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnNCc6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwNFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwOFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICc2JzogLy8gbnVtcGFkIDZcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDA4XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAneic6IC8vIGJ1dHRvbiAwXG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDEwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3gnOiAvLyBidXR0b24gMVxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgyMFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdjJzogLy8gYnV0dG9uIDJcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4NDBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnICc6IC8vIGJ1dHRvbiAzXG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDgwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0VudGVyJzogLy8gYnV0dG9uIDRcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MTAwXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdrZXkudXAnLCB0aGlzLmV2ZW50RGV0YWlscyhlKSlcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMva2VuLmpzIiwiaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuLi8uLi9nbG9iYWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaWNrZXkgZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoJ21pY2tleScsIFsnY291bnQnLCAnZnJhbWUnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ2NvbG9yJywgJ2RibENsaWNrRGVsYXknLCAnZGJsQ2xpY2tEaXN0YW5jZSddKVxuXG4gICAgdGhpcy5fZGVmYXVsdF9mcmFtZSA9IHRoaXMuX2ZyYW1lXG4gICAgdGhpcy5fZGVmYXVsdF9jb2xvciA9IHRoaXMuX2NvbG9yXG5cbiAgICBsZXQgc3RhZ2UgPSBtYWluLnN0YWdlXG4gICAgaWYgKHN0YWdlKSB7XG4gICAgICBzdGFnZS5pbnRlcmFjdGl2ZSA9IHRydWVcblxuICAgICAgdGhpcy5fb25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcylcbiAgICAgIHRoaXMuX29uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpXG4gICAgICB0aGlzLl9vbk1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpXG5cbiAgICAgIHN0YWdlLm9uKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlRG93bilcbiAgICAgIHN0YWdlLm9uKCdyaWdodGRvd24nLCB0aGlzLl9vbk1vdXNlRG93bilcbiAgICAgIHN0YWdlLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Nb3VzZURvd24pXG5cbiAgICAgIHN0YWdlLm9uKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSlcblxuICAgICAgc3RhZ2Uub24oJ21vdXNldXAnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgICBzdGFnZS5vbigndG91Y2hlbmQnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgICBzdGFnZS5vbignbW91c2V1cG91dHNpZGUnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgICBzdGFnZS5vbigndG91Y2hlbmRvdXRzaWRlJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgIH1cblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcblxuICAgIHRoaXMuX3ggPSAwXG4gICAgdGhpcy5feSA9IDBcbiAgICB0aGlzLl9jb2xvciA9IHRoaXMuX2RlZmF1bHRfY29sb3JcbiAgICB0aGlzLl9mcmFtZSA9IHRoaXMuX2RlZmF1bHRfZnJhbWVcbiAgICB0aGlzLl9idG5zID0gMFxuXG4gICAgdGhpcy5tZW1vcnkuZnJvbV9hcnJheV9tYXNrKHRoaXMuX3RvcCArIHRoaXMuX2ZyYW1lICogdGhpcy5fY2VsbF9zaXplLCBbXG4gICAgICAnLi4gICAgJyxcbiAgICAgICcudy4gICAnLFxuICAgICAgJy53dy4gICcsXG4gICAgICAnLnd3dy4gJyxcbiAgICAgICcud3d3dy4nLFxuICAgICAgJy53Li4uLicsXG4gICAgICAnLi4uICAgJyxcbiAgICBdLCBkZWZhdWx0cy5jaGFyc19tYXApXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgbGV0IHN0YWdlID0gdGhpcy5fbWFpbi5zdGFnZVxuICAgIGlmIChzdGFnZSkge1xuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlRG93bilcbiAgICAgIHN0YWdlLm9mZigncmlnaHRkb3duJywgdGhpcy5fb25Nb3VzZURvd24pXG4gICAgICBzdGFnZS5vZmYoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vbk1vdXNlRG93bilcblxuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSlcblxuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub2ZmKCd0b3VjaGVuZCcsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9mZignbW91c2V1cG91dHNpZGUnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgICBzdGFnZS5vZmYoJ3RvdWNoZW5kb3V0c2lkZScsIHRoaXMuX29uTW91c2VVcClcbiAgICB9XG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICBnZXQgeCAoKSB7IHJldHVybiB0aGlzLl94IH1cbiAgc2V0IHggKHZhbHVlKSB7XG4gICAgdGhpcy5yZXN0b3JlKClcbiAgICB0aGlzLl94ID0gdmFsdWVcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgZ2V0IHkgKCkgeyByZXR1cm4gdGhpcy5feSB9XG4gIHNldCB5ICh2YWx1ZSkge1xuICAgIHRoaXMucmVzdG9yZSgpXG4gICAgdGhpcy5feSA9IHZhbHVlXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIGdldCBmcmFtZSAoKSB7IHJldHVybiB0aGlzLl9mcmFtZSB9XG4gIHNldCBmcmFtZSAodmFsdWUpIHtcbiAgICB0aGlzLnJlc3RvcmUoKVxuICAgIHRoaXMuX2ZyYW1lID0gdmFsdWVcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgZ2V0IGJ0bnMgKCkgeyByZXR1cm4gdGhpcy5fYnRucyB9XG4gIHNldCBidG5zICh2YWx1ZSkge1xuICAgIHRoaXMuX2J0bnMgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGRibENsaWNrRGVsYXkgKCkgeyByZXR1cm4gdGhpcy5fZGJsQ2xpY2tEZWxheSB9XG5cbiAgZ2V0IGRibENsaWNrRGlzdGFuY2UgKCkgeyByZXR1cm4gdGhpcy5fZGJsQ2xpY2tEaXN0YW5jZSB9XG5cbiAgc3RvcmUgKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5ndWlkZW8uY29weV9yZWN0KHggfHwgdGhpcy5feCwgeSB8fCB0aGlzLl95LCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCB0aGlzLl90b3AgKyB0aGlzLl9jb3VudCAqIHRoaXMuX2NlbGxfc2l6ZSlcbiAgfVxuXG4gIHJlc3RvcmUgKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5ndWlkZW8uYmxpdCh0aGlzLl90b3AgKyB0aGlzLl9jb3VudCAqIHRoaXMuX2NlbGxfc2l6ZSwgeCB8fCB0aGlzLl94LCB5IHx8IHRoaXMuX3ksIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gIH1cblxuICBkcmF3IChmcmFtZSwgeCwgeSwgY29sb3IpIHtcbiAgICB0aGlzLnN0b3JlKHgsIHkpXG4gICAgcmV0dXJuIHRoaXMuZ3VpZGVvLmJsaXQodGhpcy5fdG9wICsgKGZyYW1lIHx8IHRoaXMuX2ZyYW1lKSAqIHRoaXMuX2NlbGxfc2l6ZSwgeCB8fCB0aGlzLl94LCB5IHx8IHRoaXMuX3ksIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gIH1cblxuICBnZXRFdmVudEluZm8gKGUpIHtcbiAgICBsZXQgcmVuZGVyZXIgPSB0aGlzLl9tYWluLnJlbmRlcmVyXG5cbiAgICBsZXQgc2l6ZSA9IG5ldyBQSVhJLlBvaW50KHJlbmRlcmVyLndpZHRoIC0gdGhpcy5fd2lkdGgsIHJlbmRlcmVyLmhlaWdodCAtIHRoaXMuX2hlaWdodClcblxuICAgIGxldCB4ID0gTWF0aC50cnVuYyhNYXRoLm1pbihzaXplLngsIE1hdGgubWF4KDAsIGUuZGF0YS5nbG9iYWwueCkpIC8gdGhpcy5ndWlkZW8uc2NhbGUpXG4gICAgbGV0IHkgPSBNYXRoLnRydW5jKE1hdGgubWluKHNpemUueSwgTWF0aC5tYXgoMCwgZS5kYXRhLmdsb2JhbC55KSkgLyB0aGlzLmd1aWRlby5zY2FsZSlcblxuICAgIHJldHVybiB7IHgsIHksIGJ1dHRvbjogZS5kYXRhLm9yaWdpbmFsRXZlbnQuYnV0dG9uIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duIChlKSB7XG4gICAgbGV0IHsgeCwgeSwgYnV0dG9uIH0gPSB0aGlzLmdldEV2ZW50SW5mbyhlKVxuXG4gICAgc3dpdGNoIChidXR0b24pIHtcbiAgICAgIGNhc2UgMDogLy8gbGVmdFxuICAgICAgICB0aGlzLl9idG5zIHw9IDB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAxOiAvLyBtaWRkbGVcbiAgICAgICAgdGhpcy5fYnRucyB8PSAweDAyXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgMjogLy8gcmlnaHRcbiAgICAgICAgdGhpcy5fYnRucyB8PSAweDA0XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdtb3VzZS5kb3duJywgeyB4LCB5LCBidXR0b24gfSlcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuXG4gIG9uTW91c2VNb3ZlIChlKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmd1aWRlby53aWR0aFxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ3VpZGVvLmhlaWdodFxuXG4gICAgbGV0IHsgeCwgeSwgYnV0dG9uIH0gPSB0aGlzLmdldEV2ZW50SW5mbyhlKVxuXG4gICAgdGhpcy5yZXN0b3JlKClcblxuICAgIHRoaXMuX3ggPSBNYXRoLm1pbih4LCB3aWR0aCAtIHRoaXMuX3dpZHRoKVxuICAgIHRoaXMuX3kgPSBNYXRoLm1pbih5LCBoZWlnaHQgLSB0aGlzLl9oZWlnaHQpXG5cbiAgICB0aGlzLmRyYXcoKVxuXG4gICAgdGhpcy5lbWl0KCdtb3VzZS5tb3ZlJywgeyB4LCB5LCBidXR0b24gfSlcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuXG4gIG9uTW91c2VVcCAoZSkge1xuICAgIGxldCB7IHgsIHksIGJ1dHRvbiB9ID0gdGhpcy5nZXRFdmVudEluZm8oZSlcblxuICAgIHN3aXRjaCAoYnV0dG9uKSB7XG4gICAgICBjYXNlIDA6IC8vIGxlZnRcbiAgICAgICAgdGhpcy5fYnRucyAmPSB+MHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIDE6IC8vIG1pZGRsZVxuICAgICAgICB0aGlzLl9idG5zICY9IH4weDAyXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgMjogLy8gcmlnaHRcbiAgICAgICAgdGhpcy5fYnRucyAmPSB+MHgwNFxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnbW91c2UudXAnLCB7IHgsIHksIGJ1dHRvbiB9KVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy9taWNrZXkuanMiXSwic291cmNlUm9vdCI6IiJ9