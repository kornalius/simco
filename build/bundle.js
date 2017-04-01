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
	
	      this.memory.from_array_mask(this._top + 33 * this._cell_size, ['       ', '   X   ', '   X   ', '   X   ', '   X   ', '   X   ', '       ', '   X   ', '       '], { ' ': 16, X: 1 });
	
	      this.memory.from_array_mask(this._top + 65 * this._cell_size, ['       ', '   X   ', '  X X  ', ' X   X ', ' X   X ', ' XXXXX ', ' X   X ', ' X   X ', '       '], { ' ': 16, X: 1 });
	
	      this.memory.from_array_mask(this._top + 66 * this._cell_size, ['       ', ' XXXX  ', ' X   X ', ' X   X ', ' XXXX  ', ' X   X ', ' X   X ', ' XXXX  ', '       '], { ' ': 16, X: 1 });
	
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
	
	      this.memory.from_array_mask(this._top + this._frame * this._cell_size, ['..    ', '.X.   ', '.XX.  ', '.XXX. ', '.XXXX.', '.X....', '...   '], { ' ': 16, X: 15, '.': 0 });
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmRjZDYxYmRiZTJhNGY4OTE3OWMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGl4aS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYi1hdWRpby1kYXdcIiIsIndlYnBhY2s6Ly8vLi9hcHAvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJhZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBlcmZvcm1hbmNlLW5vd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1peHdpdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuZGVyc2NvcmUtcGx1c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9hcHAvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9tYWluLmNzcz9mNDgyIiwid2VicGFjazovLy8uL3N0eWxlL21haW4uY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9sZXhlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL3R5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvYXNzaWducy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2RlbGltaXRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2dyb3Vwcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2xpdGVyYWxzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvb3BlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL3Jlc2VydmVkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy9pbmNsdWRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2tleV9saXRlcmFsLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvc3RhdGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2lkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvYXNzaWduLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvcmV0dXJuLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9jb25kaXRpb25zLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvdmFyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvbG9vcHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZXhwcmVzc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZGljdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9mbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9pZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdHJhbnNwaWxlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3N0YXRlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9leHByZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3ByaW1pdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9vcGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9pZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NsYXNzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZm4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2RpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL21lbW9yeS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZXh5XCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL21lbW9yeW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJldHR5LWJ5dGVzXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL3N0YWNrLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9pbnRlcnJ1cHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL2d1aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvcmFpbmJvdy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvY2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvZm9uem8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL29yd2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvYmVhZ2xlLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy92aW9sZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL292ZXJsYXlzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWdzL2NydC5wbmc/M2U4MiIsIndlYnBhY2s6Ly8vXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1ncy9jcnQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWdzL3Rlc3QucG5nIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL21pY2tleS5qcyJdLCJuYW1lcyI6WyJfU1RPUFBFRCIsIl9SVU5OSU5HIiwiX1BBVVNFRCIsIk1haW4iLCJvcHRpb25zIiwicmVzZXQiLCJfdXBkYXRlcyIsInF1ZXVlIiwiYWRkIiwibyIsIl8iLCJnZXQiLCJfX2luVXBkYXRlcyIsInB1c2giLCJyZW1vdmUiLCJyZWplY3QiLCJvYmplY3QiLCJiIiwiQXJyYXlCdWZmZXIiLCJhIiwiVWludDMyQXJyYXkiLCJjIiwiVWludDhBcnJheSIsIkxFIiwiX21lbW9yeSIsIl9tZW1vcnlNYW5hZ2VyIiwiX3N0YWNrIiwiX2ludGVycnVwdHMiLCJfZ3VpZGVvIiwiY3JlYXRlQ2hpcHMiLCJfa2VuIiwiX21pY2tleSIsIl9vblJlc2l6ZSIsIm9uUmVzaXplIiwiYmluZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aGF0IiwiUElYSSIsInRpY2tlciIsInNoYXJlZCIsInN0YXR1cyIsInRpY2siLCJwZXJmb3JtYW5jZSIsIm5vdyIsImRlbHRhIiwicSIsImNiIiwiYXJncyIsInN0YXJ0IiwiZGVzdHJveSIsIl9zdGF0dXMiLCJfcHJvZ3JhbSIsInBhdGgiLCJ1bmRlZmluZWQiLCJjb2RlIiwiZm4iLCJuYW1lIiwiZW1pdCIsInN0b3AiLCJ0IiwidG9rZW5zIiwicnVuIiwiY29uc29sZSIsImxvZyIsInAiLCJub2RlcyIsImVycm9ycyIsIkZ1bmN0aW9uIiwiYXBwbHkiLCJ0ZXN0IiwidmFsdWUiLCJfc3RhZ2UiLCJfcmVuZGVyZXIiLCJtYWluIiwiYXBwIiwiZWxlY3Ryb24iLCJyZXF1aXJlIiwicmVtb3RlIiwic2NyZWVuIiwiZGlhbG9nIiwiQnJvd3NlcldpbmRvdyIsImV4dGVuZCIsInRlbXBsYXRlU2V0dGluZ3MiLCJpbnRlcnBvbGF0ZSIsImZzIiwiTWl4aW4iLCJtaXgiLCJ1c2VyUGF0aCIsImpvaW4iLCJnZXRBcHBQYXRoIiwiZXhpc3RzU3luYyIsIm1rZGlycyIsIklTX1dJTiIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsIklTX09TWCIsIklTX0xJTlVYIiwiZGlycyIsImJ1aWxkIiwiX19kaXJuYW1lIiwiY3dkIiwiaG9tZSIsImdldFBhdGgiLCJ1c2VyIiwidG1wIiwicm9vdCIsIm5vZGVfbW9kdWxlcyIsInVzZXJfcGtnIiwiZ2V0TmFtZSIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwib3BlbkZpbGUiLCJzaG93T3BlbkRpYWxvZyIsImVyciIsImVycm9yIiwic2F2ZUZpbGUiLCJzaG93U2F2ZURpYWxvZyIsIm1lc3NhZ2VCb3giLCJzaG93TWVzc2FnZUJveCIsIm1hcF9nZXR0ZXJzIiwic291cmNlIiwidGFyZ2V0IiwiZGVmcyIsImsiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNhbGwiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwibWFwX2dldHRlcnNfcmV0dXJuX3RoaXMiLCJkZWxheSIsIm1zIiwiYXN5bmMiLCJjb250ZXh0IiwiaXNOdW1iZXIiLCJpc0FycmF5Iiwic2V0VGltZW91dCIsImJ1ZmZlcl90b19zdHJpbmciLCJsZW4iLCJsZW5ndGgiLCJpIiwicyIsInRvU3RyaW5nIiwic3RyaW5nX3RvX2J1ZmZlciIsInN0ciIsIkJ1ZmZlciIsIk1hdGgiLCJ0cnVuYyIsIngiLCJoZXgiLCJzdWJzdHIiLCJwYXJzZUludCIsInN0cmluZ19idWZmZXIiLCJ3cml0ZSIsIm5vcm1hbGl6ZU1lc3NhZ2VzIiwibWVzc2FnZSIsIm0iLCJpc1N0cmluZyIsInNpemUiLCJwYWRTdGFydCIsImJ1ZmZlcl9kdW1wIiwiYnVmZmVyIiwid2lkdGgiLCJjYXBzIiwiaW5kZW50IiwicmVwZWF0IiwiemVybyIsIm4iLCJtYXgiLCJ0b1VwcGVyQ2FzZSIsIm1pbiIsImJ5dGVMZW5ndGgiLCJyb3dzIiwiY2VpbCIsImxhc3QiLCJvZmZzZXRMZW5ndGgiLCJhcnIiLCJsYXN0Qnl0ZXMiLCJsYXN0U3BhY2VzIiwiaiIsInYiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJ1dG9hIiwiYnRvYSIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYXRvdSIsImRlY29kZVVSSUNvbXBvbmVudCIsImVzY2FwZSIsImF0b2IiLCJpbnN0YW5jZUZ1bmN0aW9uIiwiZm9yY2UiLCJoYXNPd25Qcm9wZXJ0eSIsIndyaXRhYmxlIiwiaW5zdGFuY2VGdW5jdGlvbnMiLCJuYW1lcyIsInJhZiIsIlBvaW50IiwicHJvdG90eXBlIiwiZGlzdGFuY2UiLCJzcXJ0IiwieSIsInRlbXBsYXRlIiwiUmVjdGFuZ2xlIiwiZGVmYXVsdHMiLCJib3VuZHNjaGVjayIsInR5cGUiLCJtZW1vcnkiLCJtZW1vcnlfbWFuYWdlciIsImNvbGxlY3RfZGVsYXkiLCJndWlkZW8iLCJoZWlnaHQiLCJzY2FsZSIsInJhaW5ib3ciLCJjb3VudCIsImRhdGFfZm9ybWF0IiwiZm9uem8iLCJvcndlbGwiLCJiZWFnbGUiLCJjb2xvciIsImJsaW5rcmF0ZSIsInZpb2xldCIsImtlbiIsIm1pY2tleSIsImZyYW1lIiwiZGJsQ2xpY2tEZWxheSIsImRibENsaWNrRGlzdGFuY2UiLCJuZXR3b3JrIiwiYWx0byIsIm1zZyIsInJvdyIsImNvbCIsInJ1bnRpbWVfZXJyb3IiLCJlIiwiaW9fZXJyb3IiLCJFdmVudCIsImRhdGEiLCJidWJibGVzIiwiX19ldmVudE9iamVjdCIsInRpbWVTdGFtcCIsInN0b3BwZWQiLCJzdG9wcGVkSW1tZWRpYXRlIiwiZGVmYXVsdFByZXZlbnRlZCIsIkVtaXR0ZXIiLCJvcmRlciIsIl9saXN0ZW5lcnMiLCJzb3J0QnkiLCJvbmNlSGFuZGxlcldyYXBwZXIiLCJvZmYiLCJfb3JpZ2luYWxIYW5kbGVyIiwib24iLCJsaXN0Iiwic3BsaWNlIiwiaXNFbXB0eSIsIm9yaWdFdmVudERhdGEiLCJsaXN0ZW5lcnMiLCJjbG9uZSIsImwiLCJjYW5jZWxCdWJibGUiLCJwYXJlbnQiLCJUb2tlbiIsImxleGVyIiwiZW5kIiwiX3R5cGUiLCJfcmVzZXJ2ZWQiLCJvZmZzZXQiLCJsaW5lIiwiY29sdW1uIiwicGFydHMiLCJzcGxpdCIsImlzIiwiaXNSZWdFeHAiLCJtYXRjaCIsImJhc2VuYW1lIiwiRW1wdHlDbGFzcyIsIkxleGVyIiwidGV4dCIsImNvbnN0YW50cyIsInZhbGlkT2Zmc2V0IiwiY2hhckF0Iiwic3Vic3RyaW5nIiwicG9zX2luZm8iLCJ0b2tlbiIsImluZGV4T2YiLCJjaGFyX2F0IiwibmV4dF9pc19zcGFjZSIsIm9sZF9vZmZzZXQiLCJ0b2tlbl90eXBlcyIsInIiLCJzdWJ0ZXh0IiwiaW5kZXgiLCJzbGljZSIsImluc2VydFRva2VuIiwicGVlayIsImNvbnN0X3Rva2VuIiwiaW5jbHVkZV90b2tlbiIsIm5leHQiLCJpbmZvIiwid2l0aCIsIl90b2tlbl90eXBlcyIsInN1cGVyY2xhc3MiLCJhc3NpZ24iLCJtYXRoX2Fzc2lnbiIsImxvZ2ljX2Fzc2lnbiIsImZuX2Fzc2lnbiIsImVvbCIsImNvbW1hIiwiY29sb24iLCJjb21tZW50Iiwib3Blbl9wYXJlbiIsImNsb3NlX3BhcmVuIiwib3Blbl9icmFja2V0IiwiY2xvc2VfYnJhY2tldCIsIm9wZW5fY3VybHkiLCJjbG9zZV9jdXJseSIsImtleSIsImlkIiwiaWRfZmllbGQiLCJ0aGlzIiwidGhpc19maWVsZCIsInN5bWJvbCIsIm1hdGgiLCJsb2dpYyIsImNvbXAiLCJudW1iZXIiLCJzdHJpbmciLCJjaGFyIiwiaW5jbHVkZSIsImNvbnN0IiwicmVzZXJ2ZWQiLCJleHRuYW1lIiwicG4iLCJzdGF0U3luYyIsInNyYyIsInJlYWRGaWxlU3luYyIsImx4IiwiY29uY2F0IiwiTm9kZSIsInBhcnNlciIsIl9pbl9jbGFzcyIsIl9mbl9sZXZlbCIsInRva2VuX3Byb3AiLCJQYXJzZXIiLCJmcmFtZXMiLCJwcmV2X2ZyYW1lIiwiaW5fY2xhc3MiLCJmbl9sZXZlbCIsImVvcyIsIm1hdGNoZXMiLCJ0b2tlbl9hdCIsImVuZF9uZXh0Iiwic2tpcCIsImV4cGVjdCIsImxlZnQiLCJyaWdodCIsImV4cHIiLCJub2RlIiwic3RhdGVtZW50cyIsIkZyYW1lIiwiRnJhbWVzIiwiRnJhbWVJdGVtIiwiY3VycmVudCIsIml0ZW1fdHlwZSIsImV4aXN0cyIsImlzX2xvY2FsIiwiaXNfZ2xvYmFsIiwiaXRlbXMiLCJfZ2xvYmFsIiwiZmluZCIsImJsb2NrX3R5cGUiLCJsb29wX3doaWxlIiwic3RhdGVtZW50IiwiYmxvY2siLCJ2YXJfc3RhdGVtZW50IiwiYXNzaWduX3N0YXRlbWVudCIsImlmX3N0YXRlbWVudCIsImZvcl9zdGF0ZW1lbnQiLCJ3aGlsZV9zdGF0ZW1lbnQiLCJyZXR1cm5fc3RhdGVtZW50Iiwic2luZ2xlX3N0YXRlbWVudCIsImNsYXNzX3N0YXRlbWVudCIsImlkX3N0YXRlbWVudCIsImZpcnN0Iiwic3VwZXJfZXhwciIsImlkX2V4cHIiLCJmbl9leHByIiwiX2ZuIiwiZXhwcnMiLCJzaW5nbGUiLCJfZXh0ZW5kcyIsImNsYXNzX2xpc3QiLCJib2R5IiwiZXhwZWN0X2VuZCIsImV4cHJfYmxvY2siLCJ0cnVlX2JvZHkiLCJmYWxzZV9ib2R5IiwiZWxzZV9zdGF0ZW1lbnQiLCJfbGV0IiwibWluX2V4cHIiLCJtYXhfZXhwciIsInN0ZXBfZXhwciIsInNpbXBsZV9leHByIiwidGVybSIsInRlcm1fZXhwciIsImZhY3RvciIsImZhY3Rvcl9leHByIiwiY29uZGl0aW9uYWwiLCJjb25kaXRpb25hbF9leHByIiwianVuY3Rpb24iLCJqdW5jdGlvbl9leHByIiwibmV4dF9leHByX25vZGUiLCJzdWJfZXhwciIsImFycmF5X2V4cHIiLCJkaWN0X2V4cHIiLCJ0aGlzX2V4cHIiLCJuZXdfZXhwciIsImRlZiIsImtleV9saXRlcmFsIiwiZm5fYXJnc19kZWYiLCJmbl9hcmciLCJmaWVsZHMiLCJfZmllbGQiLCJUcmFuc3BpbGVyIiwibm9kZV9hdCIsInZhbHVlcyIsImxpbmVzIiwiaW5kZW50X2xldmVsIiwiZW5kc1dpdGgiLCJyZXBsYWNlIiwiY29kZV9zdGFydCIsIndyaXRlbG4iLCJjb2RlX2VuZCIsImQiLCJub2RlX3RlbXBsYXRlIiwiZm5fY2FsbF90ZW1wbGF0ZSIsImZuX2Fzc2lnbl90ZW1wbGF0ZSIsImFycmF5X3RlbXBsYXRlIiwiZGljdF90ZW1wbGF0ZSIsIm9wZXJhdG9yX3RlbXBsYXRlIiwidGhpc190ZW1wbGF0ZSIsIm5ld190ZW1wbGF0ZSIsInN0cmluZ190ZW1wbGF0ZSIsImlkX3RlbXBsYXRlIiwidmFsdWVfdGVtcGxhdGUiLCJsbiIsInN0YXRlbWVudF90ZW1wbGF0ZSIsImZuX2NhbGwiLCJ0bXBsIiwiZGF0Iiwid29yZCIsInNlcGFyYXRvciIsIm9wIiwiZXhwcl90ZW1wbGF0ZSIsImZpZWxkIiwiZG90IiwiYmxvY2tfdGVtcGxhdGUiLCJmbl9kZWYiLCJtYXAiLCJmIiwiZGF0YV90eXBlX3NpemVzIiwiaTgiLCJzOCIsImkxNiIsInMxNiIsImkzMiIsInMzMiIsImYzMiIsImRhdGFfdHlwZV9mbnMiLCJkYXRhX3R5cGVfc2l6ZSIsIk1lbW9yeSIsIl9zaXplIiwiX3RvcCIsIl9ib3R0b20iLCJfYnVmZmVyIiwiX2RhdGEiLCJfdmlldyIsIkRhdGFWaWV3IiwiY2xlYXIiLCJmaWxsIiwiYWRkciIsInN6IiwiaGx0IiwiY2hrX2JvdW5kcyIsImRiIiwiX3ZtIiwibGl0dGxlRW5kaWFuIiwibGQiLCJzdCIsImxkbCIsImJvdHRvbSIsIm1lbSIsImxkcyIsInNldCIsInN1YmFycmF5Iiwic3RsIiwiY2hhckNvZGVBdCIsInN0cyIsInRvcCIsInRndCIsImNvcHlXaXRoaW4iLCJjb3B5IiwidyIsInRpIiwibWFzayIsImgiLCJmcm9tX3N0cmluZyIsImZyb21fc3RyaW5nX21hc2siLCJ0b19zdHJpbmciLCJ0b19zdHJpbmdfbWFzayIsImhleHkiLCJfbWFpbiIsIk1lbW9yeU1hbmFnZXIiLCJfY29sbGVjdF9kZWxheSIsIl9ibG9ja3MiLCJfbGFzdCIsImNvbGxlY3QiLCJ1c2VkIiwib2IiLCJhdmFpbF9tZW0iLCJfYWxsb2MiLCJ1c2VkX21lbSIsImZyZWVfbWVtIiwibWVtX2J1ZmZlciIsIlN0YWNrRW50cnkiLCJzdGFjayIsInJvbGxpbmciLCJfbWF4IiwiX3JvbGxpbmciLCJfcHRyIiwicmVhZCIsInRvdGFsX3NpemUiLCJTdGFjayIsIl9saXN0IiwiYXJndW1lbnRzIiwicG9wIiwiX0lOVF9SVU5OSU5HIiwiX0lOVF9QQVVTRUQiLCJJbnRlcnJ1cHQiLCJzdG9wX2FsbCIsIkd1aWRlbyIsImluaXQiLCJhdXRvRGV0ZWN0UmVuZGVyZXIiLCJfd2lkdGgiLCJfc2NhbGUiLCJfaGVpZ2h0IiwidmlldyIsInN0eWxlIiwicG9zaXRpb24iLCJjdXJzb3IiLCJkb2N1bWVudCIsImFwcGVuZENoaWxkIiwiQ29udGFpbmVyIiwicmVzaXplIiwiX3JhaW5ib3ciLCJfZm9uem8iLCJfb3J3ZWxsIiwiX2JlYWdsZSIsIl92aW9sZXQiLCJfb3ZlcmxheXMiLCJzY2FubGluZXMiLCJzY2FubGluZSIsInJnYiIsIm5vaXNlcyIsImNydCIsIm1vbml0b3IiLCJfc2NyZWVuIiwiY2xlYXJSZWN0IiwiX2ltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsIl9waXhlbHMiLCJfZm9yY2VfcmVkcmF3IiwiX2ZvcmNlX2ZsaXAiLCJyZWRyYXciLCJwYWxldHRlIiwicGl4ZWxzIiwicHV0SW1hZ2VEYXRhIiwidGV4dHVyZSIsInVwZGF0ZSIsInJlbmRlciIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNlbnRlciIsInRvSW5kZXgiLCJzaSIsImJ5IiwiYngiLCJmZyIsImJnIiwibHciLCJmaWxlbmFtZSIsInRleCIsIlRleHR1cmUiLCJmcm9tSW1hZ2UiLCJTQ0FMRV9NT0RFUyIsIk5FQVJFU1QiLCJwaXhlbCIsInNwcml0ZSIsImNhbnZhc0J1ZmZlciIsImNhbnZhcyIsInQzMiIsInQ4IiwicmV2ZXJzZSIsIlJhaW5ib3ciLCJfTEUiLCJyZ2JhIiwiZyIsIl9jb3VudCIsImN1cnJlbnRPZmZzZXQiLCJDaGlwIiwiX2RhdGFfc2l6ZSIsImtleXMiLCJub2RhdGEiLCJfZGF0YV9mb3JtYXQiLCJfY2VsbF9zaXplIiwiZGF0YV9zaXplIiwiY2VsbF9zaXplIiwiZmxpcCIsImZvcmNlX3JlZHJhdyIsImZvcmNlX2ZsaXAiLCJGb256byIsImZyb21fYXJyYXlfbWFzayIsIlgiLCJibGl0X21hc2siLCJkcmF3IiwiT3J3ZWxsIiwiY2giLCJmbnQiLCJmdyIsImZoIiwiaWR4IiwicHkiLCJ0aWR4IiwiY3IiLCJicyIsInBvcyIsImRyYXdfY2hhciIsInB1dF9jaGFyIiwibW92ZV90byIsIm1vdmVfYnkiLCJzeSIsInR5Iiwic3giLCJ0eCIsImxzIiwiZHkiLCJCZWFnbGUiLCJfeCIsIl95IiwiX2JsaW5rX2hpZGRlbiIsIl9ibGlua3JhdGUiLCJibGluayIsIl92aXNpYmxlIiwiX2NvbG9yIiwicGkiLCJWaW9sZXQiLCJ6IiwiaXNVbmRlZmluZWQiLCJibGl0IiwiT3ZlcmxheSIsIm92ZXJsYXlzIiwiX2NhbnZhc0J1ZmZlciIsIkNhbnZhc0J1ZmZlciIsIl90ZXh0dXJlIiwiZnJvbUNhbnZhcyIsInNjYWxlTW9kZSIsIl9zcHJpdGUiLCJTcHJpdGUiLCJfY29udGV4dCIsImdldENvbnRleHQiLCJhbHBoYSIsImFudGlhbGlhcyIsInN0YWdlIiwicmVuZGVyZXIiLCJTY3JlZW5PdmVybGF5IiwiY3JlYXRlIiwiU2NhbmxpbmVzT3ZlcmxheSIsIl9nYXAiLCJfYWxwaGEiLCJTY2FubGluZU92ZXJsYXkiLCJfcmF0ZSIsIl9zcGVlZCIsImFhIiwiTm9pc2VzT3ZlcmxheSIsIl9yZWQiLCJfZ3JlZW4iLCJfYmx1ZSIsIl9ub2lzZXMiLCJub2lzZSIsInZpc2libGUiLCJyYW5kb20iLCJhZGRDaGlsZCIsIl9ub2lzZUtleXMiLCJSZ2JPdmVybGF5IiwiQ3J0T3ZlcmxheSIsIl9yYWRpdXMiLCJfaW5zaWRlX2FscGhhIiwiX291dHNpZGVfYWxwaGEiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJPdmVybGF5cyIsIl9jcmVhdGVPdmVybGF5IiwiY3R4IiwiQ2xzIiwiZGVmYXVsdHNEZWVwIiwibXgiLCJteSIsIktlbiIsIl9vbktleWRvd24iLCJvbktleWRvd24iLCJfb25LZXl1cCIsIm9uS2V5dXAiLCJfbW9kcyIsIl9qb3lzdGljayIsIl9rZXlzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleUNvZGUiLCJtb2RzIiwiam95c3RpY2siLCJzaGlmdCIsImN0cmwiLCJhbHQiLCJtZXRhIiwibnVtcGFkIiwiYnRuMCIsImJ0bjEiLCJidG4yIiwiYnRuMyIsImJ0bjQiLCJ1cCIsImRvd24iLCJsb2NhdGlvbiIsImV2ZW50RGV0YWlscyIsInN0b3BQcm9wYWdhdGlvbiIsIk1pY2tleSIsIl9kZWZhdWx0X2ZyYW1lIiwiX2ZyYW1lIiwiX2RlZmF1bHRfY29sb3IiLCJpbnRlcmFjdGl2ZSIsIl9vbk1vdXNlRG93biIsIm9uTW91c2VEb3duIiwiX29uTW91c2VNb3ZlIiwib25Nb3VzZU1vdmUiLCJfb25Nb3VzZVVwIiwib25Nb3VzZVVwIiwiX2J0bnMiLCJjb3B5X3JlY3QiLCJzdG9yZSIsImdsb2JhbCIsImJ1dHRvbiIsIm9yaWdpbmFsRXZlbnQiLCJnZXRFdmVudEluZm8iLCJyZXN0b3JlIiwiX2RibENsaWNrRGVsYXkiLCJfZGJsQ2xpY2tEaXN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFPQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFsQkE7O0FBRUE7QUFDQTtBQUNBOztBQWdCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTyxLQUFNQSw4QkFBVyxDQUFq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QVo7QUFBb0IsTTt1QkFDeEI5cEIsSyxFQUFPO0FBQ2hCLFlBQUs4cUIsT0FBTDtBQUNBLFlBQUtoQixNQUFMLEdBQWM5cEIsS0FBZDtBQUNBLFlBQUswaUIsSUFBTDtBQUNEOzs7eUJBRVc7QUFBRSxjQUFPLEtBQUs2SCxLQUFaO0FBQW1CLE07dUJBQ3ZCdnFCLEssRUFBTztBQUNmLFlBQUt1cUIsS0FBTCxHQUFhdnFCLEtBQWI7QUFDRDs7O3lCQUVvQjtBQUFFLGNBQU8sS0FBSytxQixjQUFaO0FBQTRCOzs7eUJBRTNCO0FBQUUsY0FBTyxLQUFLQyxpQkFBWjtBQUErQjs7Ozs7O21CQXBHdENwQixNIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJkY2Q2MWJkYmUyYTRmODkxNzljIiwiaW1wb3J0ICdwaXhpLmpzJ1xuaW1wb3J0ICd3ZWItYXVkaW8tZGF3J1xuXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gJy4vdXRpbHMuanMnXG5pbXBvcnQgeyBkZWZhdWx0cywgcnVudGltZV9lcnJvciB9IGZyb20gJy4vZ2xvYmFscy5qcydcblxuaW1wb3J0IGNzcyBmcm9tICcuLi9zdHlsZS9tYWluLmNzcydcbi8vIGltcG9ydCB0IGZyb20gJy4uL2h0bWwvbWFpbi5odG1sJ1xuXG4vLyBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gZWwuaW5uZXJIVE1MID0gdFxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbClcblxuaW1wb3J0IHsgRW1pdHRlciB9IGZyb20gJy4vZW1pdHRlci5qcydcblxuaW1wb3J0IExleGVyIGZyb20gJy4vY29tcGlsZXIvbGV4ZXIuanMnXG5pbXBvcnQgUGFyc2VyIGZyb20gJy4vY29tcGlsZXIvcGFyc2VyLmpzJ1xuaW1wb3J0IFRyYW5zcGlsZXIgZnJvbSAnLi9jb21waWxlci90cmFuc3BpbGVyLmpzJ1xuXG5pbXBvcnQgeyBNZW1vcnkgfSBmcm9tICcuL3ZtL21lbW9yeS5qcydcbmltcG9ydCBNZW1vcnlNYW5hZ2VyIGZyb20gJy4vdm0vbWVtb3J5bWFuYWdlci5qcydcbmltcG9ydCBTdGFjayBmcm9tICcuL3ZtL3N0YWNrLmpzJ1xuaW1wb3J0IEludGVycnVwdCBmcm9tICcuL3ZtL2ludGVycnVwdC5qcydcbmltcG9ydCBHdWlkZW8gZnJvbSAnLi92bS9jaGlwcy9ndWlkZW8uanMnXG5pbXBvcnQgS2VuIGZyb20gJy4vdm0vY2hpcHMva2VuLmpzJ1xuaW1wb3J0IE1pY2tleSBmcm9tICcuL3ZtL2NoaXBzL21pY2tleS5qcydcblxuLy8gaW1wb3J0IHsgVk0gfSBmcm9tICcuL2ludGVycHJldGVyL3ZtLmpzJ1xuXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgbGV0IHNyYyA9IHJlcXVpcmUoJ3JhdyEuLi90ZXN0L3Rlc3QxLngzMicpXG4vLyAgIGNvbnNvbGUubG9nKHNyYylcblxuLy8gICBsZXQgdm0gPSBuZXcgVk0oKVxuLy8gICB2bS5sb2FkKHNyYylcbi8vICAgdm0ucnVuKClcbi8vICAgdm0uZHVtcCgpXG4vLyB9LCAxMDApXG5cbi8vIGNvbnNvbGUubG9nKGhleHkuaGV4eSh2bS5tZW1fYnVmZmVyLCB7IG9mZnNldDogMCwgbGVuZ3RoOiA1MTIsIGRpc3BsYXlfb2Zmc2V0OiAweDAwLCB3aWR0aDogMTYsIGNhcHM6ICd1cHBlcicsIGluZGVudDogMiB9KSlcblxuZXhwb3J0IGNvbnN0IF9TVE9QUEVEID0gMFxuZXhwb3J0IGNvbnN0IF9SVU5OSU5HID0gMVxuZXhwb3J0IGNvbnN0IF9QQVVTRUQgPSAyXG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgRW1pdHRlciB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnJlc2V0KClcblxuICAgIHRoaXMuX3VwZGF0ZXMgPSB7XG4gICAgICBxdWV1ZTogW10sXG5cbiAgICAgIGFkZDogb3B0aW9ucyA9PiB7XG4gICAgICAgIGxldCBvID0gXy5nZXQob3B0aW9ucywgJ29iamVjdCcpXG4gICAgICAgIGlmIChvICYmICFvLl9faW5VcGRhdGVzKSB7XG4gICAgICAgICAgby5fX2luVXBkYXRlcyA9IHRydWVcbiAgICAgICAgICB0aGlzLl91cGRhdGVzLnF1ZXVlLnB1c2gob3B0aW9ucylcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBvID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlcy5xdWV1ZSA9IF8ucmVqZWN0KHRoaXMuX3VwZGF0ZXMucXVldWUsIHsgb2JqZWN0OiBvIH0pXG4gICAgICAgIG8uX19pblVwZGF0ZXMgPSBmYWxzZVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGl0dGxlRW5kaWFuXG4gICAgbGV0IGIgPSBuZXcgQXJyYXlCdWZmZXIoNClcbiAgICBsZXQgYSA9IG5ldyBVaW50MzJBcnJheShiKVxuICAgIGxldCBjID0gbmV3IFVpbnQ4QXJyYXkoYilcbiAgICBhWzBdID0gMHhkZWFkYmVlZlxuICAgIHRoaXMuTEUgPSBjWzBdID09PSAweGVmXG5cbiAgICB0aGlzLl9tZW1vcnkgPSBuZXcgTWVtb3J5KHRoaXMpXG4gICAgdGhpcy5fbWVtb3J5TWFuYWdlciA9IG5ldyBNZW1vcnlNYW5hZ2VyKHRoaXMpXG4gICAgdGhpcy5fc3RhY2sgPSBuZXcgU3RhY2sodGhpcylcbiAgICB0aGlzLl9pbnRlcnJ1cHRzID0gbmV3IEludGVycnVwdCh0aGlzKVxuXG4gICAgdGhpcy5fZ3VpZGVvID0gbmV3IEd1aWRlbyh0aGlzKVxuICAgIHRoaXMuX2d1aWRlby5jcmVhdGVDaGlwcygpXG5cbiAgICB0aGlzLl9rZW4gPSBuZXcgS2VuKHRoaXMpXG4gICAgdGhpcy5fbWlja2V5ID0gbmV3IE1pY2tleSh0aGlzKVxuXG4gICAgdGhpcy5fb25SZXNpemUgPSB0aGlzLm9uUmVzaXplLmJpbmQodGhpcylcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25SZXNpemUpXG5cbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBQSVhJLnRpY2tlci5zaGFyZWQuYWRkKGRlbHRhID0+IHtcbiAgICAgIGlmICh0aGF0LnN0YXR1cyA9PT0gX1JVTk5JTkcpIHtcbiAgICAgICAgdGhhdC50aWNrKHBlcmZvcm1hbmNlLm5vdygpLCBkZWx0YSlcblxuICAgICAgICAvLyBsZXQgcmVuZGVyID0gZmFsc2VcblxuICAgICAgICBmb3IgKGxldCBxIG9mIHRoYXQuX3VwZGF0ZXMucXVldWUpIHtcbiAgICAgICAgICBxLm9iamVjdC5fX2luVXBkYXRlcyA9IGZhbHNlXG4gICAgICAgICAgLy8gaWYgKHEucmVuZGVyKSB7XG4gICAgICAgICAgICAvLyByZW5kZXIgPSB0cnVlXG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIGlmIChxLmNiKSB7XG4gICAgICAgICAgICBxLmNiKHEub2JqZWN0LCAuLi4ocS5hcmdzIHx8IFtdKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGF0Ll91cGRhdGVzLnF1ZXVlID0gW11cblxuICAgICAgICAvLyBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgLy8gdGhhdC5fZ3VpZGVvLnJlbmRlcmVyLnJlbmRlcih0aGF0Ll9ndWlkZW8uc3RhZ2UpXG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYXN5bmModGhpcywgdGhpcy5zdGFydCwgMTAwKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fZ3VpZGVvLmRlc3Ryb3koKVxuICAgIHRoaXMuX2tlbi5kZXN0cm95KClcbiAgICB0aGlzLl9taWNrZXkuZGVzdHJveSgpXG4gICAgdGhpcy5faW50ZXJydXB0cy5kZXN0cm95KClcbiAgICB0aGlzLl9tZW1vcnlNYW5hZ2VyLmRlc3Ryb3koKVxuICAgIHRoaXMuX21lbW9yeS5kZXN0cm95KClcbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSAwXG4gICAgdGhpcy5fcHJvZ3JhbSA9IHtcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGNvZGU6IHVuZGVmaW5lZCxcbiAgICAgIGZuOiB1bmRlZmluZWQsXG4gICAgfVxuICB9XG5cbiAgZGVmYXVsdHMgKG5hbWUpIHsgcmV0dXJuIF8uZ2V0KGRlZmF1bHRzLCBuYW1lKSB9XG5cbiAgZ2V0IHN0YXR1cyAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXMgfVxuICBzZXQgc3RhdHVzICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9zdGF0dXMgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGdldCBtZW1vcnkgKCkgeyByZXR1cm4gdGhpcy5fbWVtb3J5IH1cbiAgZ2V0IG1lbW9yeU1hbmFnZXIgKCkgeyByZXR1cm4gdGhpcy5fbWVtb3J5TWFuYWdlciB9XG4gIGdldCBpbnRlcnJ1cHRzICgpIHsgcmV0dXJuIHRoaXMuX2ludGVycnVwdHMgfVxuXG4gIGdldCB1cGRhdGVzICgpIHsgcmV0dXJuIHRoaXMuX3VwZGF0ZXMgfVxuXG4gIGdldCBndWlkZW8gKCkgeyByZXR1cm4gdGhpcy5fZ3VpZGVvIH1cbiAgZ2V0IGtleWJvYXJkX2NoaXAgKCkgeyByZXR1cm4gdGhpcy5fa2VuIH1cbiAgZ2V0IG1pY2tleSAoKSB7IHJldHVybiB0aGlzLl9taWNrZXkgfVxuXG4gIGdldCBzdGFnZSAoKSB7IHJldHVybiB0aGlzLl9ndWlkZW8uX3N0YWdlIH1cbiAgZ2V0IHJlbmRlcmVyICgpIHsgcmV0dXJuIHRoaXMuX2d1aWRlby5fcmVuZGVyZXIgfVxuXG4gIGdldCBwcm9ncmFtICgpIHsgcmV0dXJuIHRoaXMuX3Byb2dyYW0gfVxuXG4gIG9uUmVzaXplICgpIHtcbiAgICB0aGlzLl9ndWlkZW8uZW1pdCgncmVzaXplJylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgaGx0IChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPiAwKSB7XG4gICAgICBydW50aW1lX2Vycm9yKGNvZGUpXG4gICAgfVxuICAgIHRoaXMuc3RvcCgpXG4gIH1cblxuICBsb2FkIChwYXRoKSB7XG4gICAgbGV0IHQgPSBuZXcgTGV4ZXIoKVxuICAgIGxldCB0b2tlbnMgPSB0LnJ1bihwYXRoKVxuICAgIGNvbnNvbGUubG9nKHRva2VucylcblxuICAgIGxldCBwID0gbmV3IFBhcnNlcigpXG4gICAgbGV0IG5vZGVzID0gcC5ydW4odG9rZW5zKVxuICAgIGNvbnNvbGUubG9nKG5vZGVzKVxuXG4gICAgaWYgKHAuZXJyb3JzID09PSAwKSB7XG4gICAgICBsZXQgdCA9IG5ldyBUcmFuc3BpbGVyKClcbiAgICAgIGxldCBjb2RlID0gdC5ydW4obm9kZXMpXG4gICAgICBjb25zb2xlLmxvZyhjb2RlKVxuXG4gICAgICBpZiAodC5lcnJvcnMgPT09IDApIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbS5jb2RlID0gY29kZVxuICAgICAgICB0aGlzLl9wcm9ncmFtLnBhdGggPSBwYXRoXG4gICAgICAgIHRoaXMuX3Byb2dyYW0uZm4gPSBuZXcgRnVuY3Rpb24oWydhcmdzJ10sIHRoaXMuX3Byb2dyYW0uY29kZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBydW4gKC4uLmFyZ3MpIHtcbiAgICBsZXQgZm4gPSBfLmdldCh0aGlzLCAnX3Byb2dyYW0uZm4nKVxuICAgIHJldHVybiBmbiA/IGZuLmFwcGx5KHRoaXMsIGFyZ3MpIDogbnVsbFxuICB9XG5cbiAgc3RhcnQgKCkge1xuICAgIHRoaXMuc3RhdHVzID0gX1JVTk5JTkdcbiAgICB0aGlzLnRlc3QoKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdG9wICgpIHtcbiAgICB0aGlzLnN0YXR1cyA9IF9TVE9QUEVEXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHBhdXNlICgpIHtcbiAgICB0aGlzLnN0YXR1cyA9IF9QQVVTRURcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcmVzdW1lICgpIHtcbiAgICB0aGlzLnN0YXR1cyA9IF9SVU5OSU5HXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICB0aGlzLl9tZW1vcnkudGljayh0KVxuICAgIHRoaXMuX21lbW9yeU1hbmFnZXIudGljayh0KVxuICAgIHRoaXMuX2tlbi50aWNrKHQpXG4gICAgdGhpcy5fbWlja2V5LnRpY2sodClcbiAgICB0aGlzLl9pbnRlcnJ1cHRzLnRpY2sodClcbiAgICB0aGlzLl9ndWlkZW8udGljayh0KVxuICB9XG5cbiAgdGVzdCAoKSB7XG4gIH1cblxufVxuXG5leHBvcnQgbGV0IG1haW4gPSBuZXcgTWFpbigpXG53aW5kb3cuYXBwID0gbWFpblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL21haW4uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwaXhpLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGl4aS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYi1hdWRpby1kYXdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWItYXVkaW8tZGF3XCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgZWxlY3Ryb24gPSByZXF1aXJlKCdlbGVjdHJvbicpXG5jb25zdCB7IHJlbW90ZSwgc2NyZWVuLCBkaWFsb2cgfSA9IGVsZWN0cm9uXG5jb25zdCB7IGFwcCwgQnJvd3NlcldpbmRvdyB9ID0gcmVtb3RlXG5cbmNvbnN0IF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlLXBsdXMnKVxuXy5leHRlbmQoXywgcmVxdWlyZSgnbG9kYXNoJykpXG53aW5kb3cuXyA9IF9cblxuXy50ZW1wbGF0ZVNldHRpbmdzLmludGVycG9sYXRlID0gLyN7KFtcXHNcXFNdKz8pfS9nXG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMtcHJvbWlzZScpXG5cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgcmFmIGZyb20gJ3JhZidcbmltcG9ydCBwZXJmb3JtYW5jZSBmcm9tICdwZXJmb3JtYW5jZS1ub3cnXG5cbmltcG9ydCB7IE1peGluLCBtaXggfSBmcm9tICdtaXh3aXRoJ1xud2luZG93Lk1peGluID0gTWl4aW5cbndpbmRvdy5taXggPSBtaXhcblxubGV0IHVzZXJQYXRoID0gcGF0aC5qb2luKGFwcC5nZXRBcHBQYXRoKCksICcvdXNlcicpXG5pZiAoIWZzLmV4aXN0c1N5bmModXNlclBhdGgpKSB7XG4gIGZzLm1rZGlycyh1c2VyUGF0aClcbn1cblxubGV0IElTX1dJTiA9IC9ed2luLy50ZXN0KHByb2Nlc3MucGxhdGZvcm0pXG5sZXQgSVNfT1NYID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2RhcndpbidcbmxldCBJU19MSU5VWCA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICdsaW51eCdcbmxldCBkaXJzID0ge1xuICBidWlsZDogX19kaXJuYW1lLFxuICBjd2Q6IGFwcC5nZXRBcHBQYXRoKCksXG4gIGhvbWU6IGFwcC5nZXRQYXRoKCdob21lJyksXG4gIGFwcDogYXBwLmdldFBhdGgoJ2FwcERhdGEnKSxcbiAgdXNlcjogdXNlclBhdGgsXG4gIHRtcDogYXBwLmdldFBhdGgoJ3RlbXAnKSxcbiAgcm9vdDogYXBwLmdldFBhdGgoJ2V4ZScpLFxuICBub2RlX21vZHVsZXM6IHBhdGguam9pbih1c2VyUGF0aCwgJ25vZGVfbW9kdWxlcycpLFxuICB1c2VyX3BrZzogcGF0aC5qb2luKHVzZXJQYXRoLCAncGFja2FnZS5qc29uJyksXG59XG5cbmxldCBuYW1lID0gYXBwLmdldE5hbWUoKVxubGV0IHZlcnNpb24gPSBhcHAuZ2V0VmVyc2lvbigpXG5cbmxldCBvcGVuRmlsZSA9ICguLi5hcmdzKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRpYWxvZy5zaG93T3BlbkRpYWxvZy5hcHBseShkaWFsb2csIGFyZ3MpXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmxldCBzYXZlRmlsZSA9ICguLi5hcmdzKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRpYWxvZy5zaG93U2F2ZURpYWxvZy5hcHBseShkaWFsb2csIGFyZ3MpXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmxldCBtZXNzYWdlQm94ID0gKC4uLmFyZ3MpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGlhbG9nLnNob3dNZXNzYWdlQm94LmFwcGx5KGRpYWxvZywgYXJncylcbiAgfVxuICBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxubGV0IG1hcF9nZXR0ZXJzID0gKHNvdXJjZSwgdGFyZ2V0LCBkZWZzKSA9PiB7XG4gIGZvciAobGV0IGsgaW4gZGVmcykge1xuICAgIGxldCBmbiA9IGRlZnNba11cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc291cmNlLCBrLCB7XG4gICAgICBnZXQ6ICgpID0+IGZuLmNhbGwodGFyZ2V0LCBzb3VyY2UpLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9KVxuICB9XG59XG5cbmxldCBtYXBfZ2V0dGVyc19yZXR1cm5fdGhpcyA9IChzb3VyY2UsIHRhcmdldCwgZGVmcykgPT4ge1xuICBmb3IgKGxldCBrIGluIGRlZnMpIHtcbiAgICBsZXQgZm4gPSBkZWZzW2tdXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNvdXJjZSwgaywge1xuICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgIGZuLmNhbGwodGFyZ2V0LCBzb3VyY2UpXG4gICAgICAgIHJldHVybiBzb3VyY2VcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH0pXG4gIH1cbn1cblxubGV0IG5vdyA9ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpXG5cbmxldCBkZWxheSA9IG1zID0+IHtcbiAgLy8gc2V0VGltZW91dCgoKSA9PiB7fSwgbXMpXG4gIGxldCB0ID0gcGVyZm9ybWFuY2Uubm93KClcbiAgbGV0IGMgPSB0XG4gIHdoaWxlIChjIC0gdCA8PSBtcykge1xuICAgIC8vIFBJWEkudGlja2VyLnNoYXJlZC51cGRhdGUoYylcbiAgICBjID0gcGVyZm9ybWFuY2Uubm93KClcbiAgfVxufVxuXG5sZXQgYXN5bmMgPSAoY29udGV4dCwgZm4sIGFyZ3MsIGRlbGF5KSA9PiB7XG4gIGlmIChfLmlzTnVtYmVyKGFyZ3MpKSB7XG4gICAgZGVsYXkgPSBhcmdzXG4gICAgYXJncyA9IFtdXG4gIH1cbiAgaWYgKCFfLmlzQXJyYXkoYXJncykpIHtcbiAgICBhcmdzID0gW2FyZ3NdXG4gIH1cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZm4uY2FsbChjb250ZXh0LCAuLi5hcmdzKVxuICB9LCBkZWxheSB8fCAxKVxufVxuXG5sZXQgYnVmZmVyX3RvX3N0cmluZyA9IGIgPT4ge1xuICBsZXQgbGVuID0gYi5sZW5ndGhcbiAgbGV0IGkgPSAwXG4gIGxldCBzID0gJydcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBzICs9IGJbaSsrXS50b1N0cmluZygxNilcbiAgfVxuICByZXR1cm4gc1xufVxuXG5sZXQgc3RyaW5nX3RvX2J1ZmZlciA9IHN0ciA9PiB7XG4gIGxldCBsZW4gPSBzdHIubGVuZ3RoXG4gIGxldCBpID0gMFxuICBsZXQgYiA9IG5ldyBCdWZmZXIoTWF0aC50cnVuYyhzdHIubGVuZ3RoIC8gMikpXG4gIGxldCB4ID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIGxldCBoZXggPSBzdHIuc3Vic3RyKGksIDIpXG4gICAgYlt4KytdID0gcGFyc2VJbnQoaGV4LCAxNilcbiAgICBpICs9IDJcbiAgfVxuICByZXR1cm4gYlxufVxuXG5sZXQgc3RyaW5nX2J1ZmZlciA9IChzdHIsIGxlbiA9IDApID0+IHtcbiAgbGVuID0gbGVuIHx8IHN0ci5sZW5ndGhcbiAgdmFyIGIgPSBuZXcgQnVmZmVyKGxlbilcbiAgYi53cml0ZShzdHIsIDAsIHN0ci5sZW5ndGgsICdhc2NpaScpXG4gIHJldHVybiBiXG59XG5cbmxldCBub3JtYWxpemVNZXNzYWdlcyA9ICguLi5tZXNzYWdlKSA9PiB7XG4gIGxldCBhcmdzID0gW11cbiAgZm9yIChsZXQgbSBvZiBtZXNzYWdlKSB7XG4gICAgaWYgKF8uaXNBcnJheShtKSkge1xuICAgICAgYXJncy5wdXNoKG0uam9pbignLCAnKSlcbiAgICB9XG4gICAgZWxzZSBpZiAoXy5pc1N0cmluZyhtKSkge1xuICAgICAgYXJncy5wdXNoKG0pXG4gICAgfVxuICB9XG4gIHJldHVybiBhcmdzXG59XG5cbmxldCBoZXggPSAodmFsdWUsIHNpemUgPSAzMikgPT4gJyQnICsgXy5wYWRTdGFydCh2YWx1ZS50b1N0cmluZygxNiksIE1hdGgudHJ1bmMoc2l6ZSAvIDQpLCAnMCcpXG5cbmxldCBidWZmZXJfZHVtcCA9IChidWZmZXIsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBsZXQgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDE2XG4gIGxldCBjYXBzID0gb3B0aW9ucy5jYXBzIHx8ICd1cHBlcidcbiAgbGV0IGluZGVudCA9IF8ucmVwZWF0KCcgJywgb3B0aW9ucy5pbmRlbnQgfHwgMClcblxuICBsZXQgemVybyA9IChuLCBtYXgpID0+IHtcbiAgICBuID0gbi50b1N0cmluZygxNilcbiAgICBpZiAoY2FwcyA9PT0gJ3VwcGVyJykgeyBuID0gbi50b1VwcGVyQ2FzZSgpIH1cbiAgICB3aGlsZSAobi5sZW5ndGggPCBtYXgpIHtcbiAgICAgIG4gPSAnMCcgKyBuXG4gICAgfVxuICAgIHJldHVybiBuXG4gIH1cblxuICBsZXQgbGVuID0gTWF0aC5taW4oYnVmZmVyLmJ5dGVMZW5ndGgsIG9wdGlvbnMubGVuZ3RoIHx8IGJ1ZmZlci5ieXRlTGVuZ3RoKVxuICBsZXQgcm93cyA9IE1hdGguY2VpbChsZW4gLyB3aWR0aClcbiAgbGV0IGxhc3QgPSBsZW4gJSB3aWR0aCB8fCB3aWR0aFxuICBsZXQgb2Zmc2V0TGVuZ3RoID0gbGVuLnRvU3RyaW5nKDE2KS5sZW5ndGhcbiAgaWYgKG9mZnNldExlbmd0aCA8IDYpIHsgb2Zmc2V0TGVuZ3RoID0gNiB9XG5cbiAgbGV0IGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcilcblxuICBsZXQgc3RyID0gaW5kZW50ICsgJ09mZnNldCdcbiAgd2hpbGUgKHN0ci5sZW5ndGggPCBvZmZzZXRMZW5ndGgpIHtcbiAgICBzdHIgKz0gJyAnXG4gIH1cblxuICBzdHIgKz0gJyAgJ1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgIHN0ciArPSAnICcgKyB6ZXJvKGksIDIpXG4gIH1cblxuICBpZiAobGVuKSB7XG4gICAgc3RyICs9ICdcXG4nXG4gIH1cblxuICBsZXQgYiA9IDBcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgIHN0ciArPSBpbmRlbnQgKyB6ZXJvKGIsIG9mZnNldExlbmd0aCkgKyAnICAnXG4gICAgbGV0IGxhc3RCeXRlcyA9IGkgPT09IHJvd3MgLSAxID8gbGFzdCA6IHdpZHRoXG4gICAgbGV0IGxhc3RTcGFjZXMgPSB3aWR0aCAtIGxhc3RCeXRlc1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsYXN0Qnl0ZXM7IGorKykge1xuICAgICAgc3RyICs9ICcgJyArIHplcm8oYXJyW2JdLCAyKVxuICAgICAgYisrXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsYXN0U3BhY2VzOyBqKyspIHtcbiAgICAgIHN0ciArPSAnICAgJ1xuICAgIH1cblxuICAgIGIgLT0gbGFzdEJ5dGVzXG4gICAgc3RyICs9ICcgICAnXG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxhc3RCeXRlczsgaisrKSB7XG4gICAgICBsZXQgdiA9IGFycltiXVxuICAgICAgc3RyICs9IHYgPiAzMSAmJiB2IDwgMTI3IHx8IHYgPiAxNTkgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKHYpIDogJy4nXG4gICAgICBiKytcbiAgICB9XG5cbiAgICBzdHIgKz0gJ1xcbidcbiAgfVxuXG4gIHJldHVybiBzdHJcbn1cblxubGV0IHV0b2EgPSBzdHIgPT4gd2luZG93LmJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpKVxuXG5sZXQgYXRvdSA9IHN0ciA9PiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKHdpbmRvdy5hdG9iKHN0cikpKVxuXG53aW5kb3cudXRvYSA9IHV0b2FcbndpbmRvdy5hdG91ID0gYXRvdVxuXG5cbmxldCBpbnN0YW5jZUZ1bmN0aW9uID0gKHRhcmdldCwgbmFtZSwgZm4sIGZvcmNlID0gZmFsc2UpID0+IHtcbiAgaWYgKGZvcmNlIHx8ICF0YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICB2YWx1ZTogZm4sXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9KVxuICB9XG59XG5cbmxldCBpbnN0YW5jZUZ1bmN0aW9ucyA9ICh0YXJnZXQsIHNvdXJjZSwgbmFtZXMpID0+IHtcbiAgZm9yIChsZXQgbiBvZiBuYW1lcykge1xuICAgIGlmIChfLmlzQXJyYXkobikpIHtcbiAgICAgIGluc3RhbmNlRnVuY3Rpb24odGFyZ2V0LCBuWzBdLCBzb3VyY2VbblsxXV0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaW5zdGFuY2VGdW5jdGlvbih0YXJnZXQsIG4sIHNvdXJjZVtuXSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgXyxcbiAgbmFtZSxcbiAgdmVyc2lvbixcbiAgZWxlY3Ryb24sXG4gIGRpYWxvZyxcbiAgb3BlbkZpbGUsXG4gIHNhdmVGaWxlLFxuICBtZXNzYWdlQm94LFxuICByZW1vdGUsXG4gIHNjcmVlbixcbiAgQnJvd3NlcldpbmRvdyxcbiAgYXBwLFxuICBmcyxcbiAgcGF0aCxcbiAgdXNlclBhdGgsXG4gIElTX1dJTixcbiAgSVNfT1NYLFxuICBJU19MSU5VWCxcbiAgZGlycyxcbiAgcmFmLFxuICBub3csXG4gIE1peGluLFxuICBtaXgsXG4gIG1hcF9nZXR0ZXJzLFxuICBtYXBfZ2V0dGVyc19yZXR1cm5fdGhpcyxcbiAgZGVsYXksXG4gIGFzeW5jLFxuICBidWZmZXJfdG9fc3RyaW5nLFxuICBzdHJpbmdfdG9fYnVmZmVyLFxuICBzdHJpbmdfYnVmZmVyLFxuICBub3JtYWxpemVNZXNzYWdlcyxcbiAgaGV4LFxuICBidWZmZXJfZHVtcCxcbiAgdXRvYSxcbiAgYXRvdSxcbiAgaW5zdGFuY2VGdW5jdGlvbixcbiAgaW5zdGFuY2VGdW5jdGlvbnMsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdXRpbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJhZlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJhZlwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBlcmZvcm1hbmNlLW5vd1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBlcmZvcm1hbmNlLW5vd1wiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1peHdpdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtaXh3aXRoXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJlbGVjdHJvblwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuZGVyc2NvcmUtcGx1c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVuZGVyc2NvcmUtcGx1c1wiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaFwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1wcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnMtcHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJQSVhJLlBvaW50LnByb3RvdHlwZS5kaXN0YW5jZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIE1hdGguc3FydCgodGhpcy54IC0gdGFyZ2V0LngpICogKHRoaXMueCAtIHRhcmdldC54KSArICh0aGlzLnkgLSB0YXJnZXQueSkgKiAodGhpcy55IC0gdGFyZ2V0LnkpKVxufVxuXG5QSVhJLlBvaW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF8udGVtcGxhdGUoJygje3h9LCAje3l9KScpKHRoaXMpXG59XG5cblBJWEkuUmVjdGFuZ2xlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF8udGVtcGxhdGUoJygje3h9LCAje3l9LCAje3ggKyB3aWR0aH0sICN7eSArIGhlaWdodH0pKCN7d2lkdGh9LCAje2hlaWdodH0pJykodGhpcylcbn1cblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gIGJvdW5kc2NoZWNrOiBmYWxzZSxcblxuICB0eXBlOiAnaTMyJyxcblxuICBtZW1vcnk6IHtcbiAgICBzaXplOiA1MTIgKiAxMDI0LFxuICB9LFxuXG4gIG1lbW9yeV9tYW5hZ2VyOiB7XG4gICAgY29sbGVjdF9kZWxheTogMzAgKiAxMDAwLFxuICB9LFxuXG4gIGd1aWRlbzoge1xuICAgIHdpZHRoOiAzMjAsXG4gICAgaGVpZ2h0OiAyNDAsXG4gICAgc2NhbGU6IDQsXG4gIH0sXG5cbiAgcmFpbmJvdzoge1xuICAgIGNvdW50OiAxNixcbiAgICBkYXRhX2Zvcm1hdDogJ2kzMicsXG4gIH0sXG5cbiAgZm9uem86IHtcbiAgICBjb3VudDogMjU2LFxuICAgIHdpZHRoOiA3LFxuICAgIGhlaWdodDogOSxcbiAgfSxcblxuICBvcndlbGw6IHtcbiAgICB3aWR0aDogMzIwIC8gNCxcbiAgICBoZWlnaHQ6IDI0MCAvIDYsXG4gIH0sXG5cbiAgYmVhZ2xlOiB7XG4gICAgd2lkdGg6IDQsXG4gICAgaGVpZ2h0OiA2LFxuICAgIGNvbG9yOiAxNSxcbiAgICBibGlua3JhdGU6IDUwMCxcbiAgfSxcblxuICB2aW9sZXQ6IHtcbiAgICBjb3VudDogMzIsXG4gICAgd2lkdGg6IDE2LFxuICAgIGhlaWdodDogMTYsXG4gIH0sXG5cbiAga2VuOiB7XG4gICAgY291bnQ6IDI1NixcbiAgfSxcblxuICBtaWNrZXk6IHtcbiAgICBjb3VudDogMTcsXG4gICAgd2lkdGg6IDYsXG4gICAgaGVpZ2h0OiA3LFxuICAgIGNvbG9yOiAxNSxcbiAgICBmcmFtZTogMCxcbiAgICBkYmxDbGlja0RlbGF5OiAyNTAsXG4gICAgZGJsQ2xpY2tEaXN0YW5jZTogOCxcbiAgfSxcblxuICBuZXR3b3JrOiB7XG4gICAgY291bnQ6IDMyICogMTAyNCxcbiAgfSxcblxuICBhbHRvOiB7XG4gICAgY291bnQ6IDQgKiAxMDI0LFxuICB9LFxufVxuXG5sZXQgZXJyb3JzID0gMFxuXG5sZXQgZXJyb3IgPSAodCwgbXNnKSA9PiB7XG4gIGRlYnVnZ2VyXG4gIGVycm9ycysrXG4gIGNvbnNvbGUuZXJyb3IobXNnLCAnYXQnLCB0LnZhbHVlLCAnKCcgKyB0LnJvdyArICcsJyArIHQuY29sICsgJyknKVxufVxuXG5sZXQgcnVudGltZV9lcnJvciA9IGNvZGUgPT4ge1xuICBsZXQgZSA9ICdVbmtub3duIHJ1bnRpbWUgZXJyb3InXG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgMHgwMTpcbiAgICAgIGUgPSAnT3V0IG9mIG1lbW9yeSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDAyOlxuICAgICAgZSA9ICdTdGFjayB1bmRlcmZsb3cnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwMzpcbiAgICAgIGUgPSAnU3RhY2sgb3ZlcmZsb3cnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNDpcbiAgICAgIGUgPSAnSW52YWxpZCBzdGFjayBhZGRyZXNzJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDU6XG4gICAgICBlID0gJ1N0YWNrIGFkZHJlc3MgYWxyZWFkeSBhc3NpZ25lZCdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA2OlxuICAgICAgZSA9ICdJbnRlcnJ1cHQgYWxyZWFkeSBleGlzdHMnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNzpcbiAgICAgIGUgPSAnSW50ZXJydXB0IG5vdCBmb3VuZCdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA4OlxuICAgICAgZSA9ICdBZGRyZXNzIG91dCBvZiBib3VuZHMnXG4gICAgICBicmVha1xuICB9XG4gIGNvbnNvbGUuZXJyb3IoZSlcbn1cblxubGV0IGlvX2Vycm9yID0gY29kZSA9PiB7XG4gIGxldCBlID0gJ0kvTyBydW50aW1lIGVycm9yJ1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIDB4MDE6XG4gICAgICBlID0gJ0ZpbGUgbm90IGZvdW5kJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDI6XG4gICAgICBlID0gJ0Nhbm5vdCBvcGVuIGZpbGUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwMzpcbiAgICAgIGUgPSAnQ2Fubm90IGNsb3NlIGZpbGUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNDpcbiAgICAgIGUgPSAnQ2Fubm90IGxvY2sgZmlsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA1OlxuICAgICAgZSA9ICdDYW5ub3QgdW5sb2NrIGZpbGUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNjpcbiAgICAgIGUgPSAnSW52YWxpZCBmaWxlIGlkJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDc6XG4gICAgICBlID0gJ0EgZmxvcHB5IGlzIGFscmVhZHkgaW4gdGhlIGRyaXZlJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDg6XG4gICAgICBlID0gJ05vIGZsb3BweSBpbiBkcml2ZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA5OlxuICAgICAgZSA9ICdDYW5ub3QgZGVsZXRlIGZpbGUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgxMDpcbiAgICAgIGUgPSAnRHJpdmUgaXMgbm90IHNwaW5uaW5nJ1xuICAgICAgYnJlYWtcbiAgfVxuICBjb25zb2xlLmVycm9yKGUpXG59XG5cblxuZXhwb3J0IHtcbiAgZGVmYXVsdHMsXG4gIGVycm9ycyxcbiAgZXJyb3IsXG4gIHJ1bnRpbWVfZXJyb3IsXG4gIGlvX2Vycm9yLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2dsb2JhbHMuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uL25vZGVfbW9kdWxlcy9jc3NuZXh0LWxvYWRlci9pbmRleC5qcyEuL21haW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi9ub2RlX21vZHVsZXMvY3NzbmV4dC1sb2FkZXIvaW5kZXguanMhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uL25vZGVfbW9kdWxlcy9jc3NuZXh0LWxvYWRlci9pbmRleC5qcyEuL21haW4uY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuY2FudmFzIHtcXG4gIGN1cnNvcjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3R5bGUvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx1QkFBK0M7RUFDL0MsWUFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSx3QkFBd0I7Q0FDekJcIixcImZpbGVcIjpcIm1haW4uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKC4vY29sb3JzLmNzcyk7XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi9jc3NuZXh0LWxvYWRlciEuL3N0eWxlL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHNlbGYubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuXHRcdGlmKG5ld09iaikge1xuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHRpZihzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xuXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYylcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgY2xhc3MgRXZlbnQge1xuXG4gIGNvbnN0cnVjdG9yICh0YXJnZXQsIG5hbWUsIGRhdGEsIGJ1YmJsZXMgPSB0cnVlKSB7XG4gICAgdGhpcy5fX2V2ZW50T2JqZWN0ID0gdHJ1ZVxuICAgIHRoaXMudGltZVN0YW1wID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldFxuICAgIHRoaXMudHlwZSA9IG5hbWVcbiAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgdGhpcy5idWJibGVzID0gYnViYmxlc1xuICAgIHRoaXMuc3RvcHBlZCA9IGZhbHNlXG4gICAgdGhpcy5zdG9wcGVkSW1tZWRpYXRlID0gZmFsc2VcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuICB9XG5cbiAgc3RvcCAoKSB7XG4gICAgdGhpcy5zdG9wcGVkID0gdHJ1ZVxuICB9XG5cbiAgc3RvcEltbWVkaWF0ZSAoKSB7XG4gICAgdGhpcy5zdG9wcGVkSW1tZWRpYXRlID0gdHJ1ZVxuICB9XG5cbiAgc3RvcFByb3BhZ2F0aW9uICgpIHtcbiAgICB0aGlzLnN0b3BwZWQgPSB0cnVlXG4gIH1cblxuICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gKCkge1xuICAgIHRoaXMuc3RvcHBlZEltbWVkaWF0ZSA9IHRydWVcbiAgfVxuXG4gIGNhbmNlbEJ1YmJsZSAoKSB7XG4gICAgdGhpcy5idWJibGVzID0gZmFsc2VcbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0ICgpIHtcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlXG4gIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRW1pdHRlciB7XG5cbiAgb24gKG5hbWUsIGZuLCBvcmRlciA9IDApIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cbiAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0gPSB0aGlzLl9saXN0ZW5lcnNbbmFtZV0gfHwgW11cbiAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0ucHVzaCh7IGZuLCBvcmRlciB9KVxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSA9IF8uc29ydEJ5KHRoaXMuX2xpc3RlbmVyc1tuYW1lXSwgJ29yZGVyJylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgb25jZSAobmFtZSwgZm4pIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cblxuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIGxldCBvbmNlSGFuZGxlcldyYXBwZXIgPSAoKSA9PiB7XG4gICAgICBmbi5hcHBseSh0aGF0Lm9mZihuYW1lLCBvbmNlSGFuZGxlcldyYXBwZXIpLCBhcmd1bWVudHMpXG4gICAgfVxuICAgIG9uY2VIYW5kbGVyV3JhcHBlci5fb3JpZ2luYWxIYW5kbGVyID0gZm5cblxuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIG9uY2VIYW5kbGVyV3JhcHBlcilcbiAgfVxuXG4gIG9mZiAobmFtZSwgZm4pIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cblxuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGxldCBsaXN0ID0gdGhpcy5fbGlzdGVuZXJzW25hbWVdXG4gICAgbGV0IGkgPSBmbiA/IGxpc3QubGVuZ3RoIDogMFxuXG4gICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgIGlmIChsaXN0W2ldLmZuID09PSBmbiB8fCBsaXN0W2ldLl9vcmlnaW5hbEhhbmRsZXIgPT09IGZuKSB7XG4gICAgICAgIGxpc3Quc3BsaWNlKGksIDEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF8uaXNFbXB0eShsaXN0KSkge1xuICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tuYW1lXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBlbWl0IChuYW1lLCBkYXRhKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzIHx8IHt9XG5cbiAgICBsZXQgb3JpZ0V2ZW50RGF0YVxuXG4gICAgaWYgKCFkYXRhIHx8IGRhdGEuX19ldmVudE9iamVjdCAhPT0gdHJ1ZSkge1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5kYXRhICYmIGRhdGEudHlwZSkge1xuICAgICAgICBvcmlnRXZlbnREYXRhID0gZGF0YVxuICAgICAgICBkYXRhID0gZGF0YS5kYXRhXG4gICAgICB9XG4gICAgICBkYXRhID0gbmV3IEV2ZW50KHRoaXMsIG5hbWUsIGRhdGEpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgbGV0IGxpc3RlbmVycyA9IF8uY2xvbmUodGhpcy5fbGlzdGVuZXJzW25hbWVdKVxuICAgICAgZm9yIChsZXQgbCBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgbC5mbi5jYWxsKHRoaXMsIGRhdGEpXG4gICAgICAgIGlmIChkYXRhLnN0b3BwZWRJbW1lZGlhdGUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZGF0YS5zdG9wcGVkKSB7XG4gICAgICAgIGlmIChvcmlnRXZlbnREYXRhKSB7XG4gICAgICAgICAgb3JpZ0V2ZW50RGF0YS5zdG9wcGVkID0gdHJ1ZVxuICAgICAgICAgIGRhdGEuY2FuY2VsQnViYmxlKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRhLmJ1YmJsZXMgJiYgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZW1pdCkge1xuICAgICAgdGhpcy5wYXJlbnQuZW1pdChuYW1lLCBkYXRhKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWRcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvZW1pdHRlci5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IHBhdGggfSBmcm9tICcuLi91dGlscy5qcydcblxuaW1wb3J0IFRva2VuVHlwZXMgZnJvbSAnLi90b2tlbnMvdHlwZXMuanMnXG5pbXBvcnQgQ29uc3RUb2tlbiBmcm9tICcuL3Rva2Vucy9jb25zdC5qcydcbmltcG9ydCBJbmNsdWRlVG9rZW4gZnJvbSAnLi90b2tlbnMvaW5jbHVkZS5qcydcblxuY2xhc3MgVG9rZW4ge1xuXG4gIGNvbnN0cnVjdG9yIChsZXhlciwgdHlwZSwgdmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAobGV4ZXIgaW5zdGFuY2VvZiBUb2tlbikge1xuICAgICAgbGV0IHQgPSBsZXhlclxuICAgICAgdGhpcy5sZXhlciA9IHQubGV4ZXJcbiAgICAgIHRoaXMuX3R5cGUgPSB0Ll90eXBlXG4gICAgICB0aGlzLl9yZXNlcnZlZCA9IHQuX3Jlc2VydmVkXG4gICAgICB0aGlzLnZhbHVlID0gdC52YWx1ZVxuICAgICAgdGhpcy5zdGFydCA9IF8uY2xvbmUodC5zdGFydClcbiAgICAgIHRoaXMuZW5kID0gXy5jbG9uZSh0LmVuZClcbiAgICAgIHRoaXMubGVuZ3RoID0gdC52YWx1ZS5sZW5ndGhcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmxleGVyID0gbGV4ZXJcbiAgICAgIHRoaXMuX3R5cGUgPSB0eXBlXG4gICAgICB0aGlzLl9yZXNlcnZlZCA9IGZhbHNlXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgJydcbiAgICAgIHRoaXMuc3RhcnQgPSBzdGFydCB8fCB7IG9mZnNldDogMCwgbGluZTogMCwgY29sdW1uOiAwIH1cbiAgICAgIHRoaXMuZW5kID0gZW5kIHx8IHsgb2Zmc2V0OiAwLCBsaW5lOiAwLCBjb2x1bW46IDAgfVxuICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmVuZC5vZmZzZXQgLSB0aGlzLnN0YXJ0Lm9mZnNldFxuICAgIH1cbiAgfVxuXG4gIGlzIChlKSB7XG4gICAgaWYgKF8uaXNTdHJpbmcoZSkpIHtcbiAgICAgIGxldCBwYXJ0cyA9IGUuc3BsaXQoJ3wnKVxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yIChsZXQgcCBvZiBwYXJ0cykge1xuICAgICAgICAgIGlmICh0aGlzLmlzKHApKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBlID09PSAnLicgfHwgdGhpcy50eXBlID09PSBlIHx8IHRoaXMudmFsdWUgPT09IGVcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoXy5pc1JlZ0V4cChlKSkge1xuICAgICAgcmV0dXJuIHRoaXMudHlwZS5tYXRjaChlKSB8fCB0aGlzLnZhbHVlLm1hdGNoKGUpXG4gICAgfVxuICAgIGVsc2UgaWYgKF8uaXNBcnJheShlKSkge1xuICAgICAgZm9yIChsZXQgaSBvZiBlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzKGkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGdldCB0eXBlICgpIHtcbiAgICBpZiAodGhpcy5fdHlwZSA9PT0gJ21hdGhfYXNzaWduJyB8fCB0aGlzLl90eXBlID09PSAnbG9naWNfYXNzaWduJykge1xuICAgICAgdGhpcy5fdHlwZSA9ICdhc3NpZ24nXG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuX3R5cGUgPT09ICdzdXBlcicpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSAnc3VwZXInXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90eXBlXG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIF8udGVtcGxhdGUoJ1wiI3t2YWx1ZX1cIiBhdCAje3BhdGh9KCN7bGluZX06I3tjb2x1bW59KScpKHsgdmFsdWU6IHRoaXMudmFsdWUsIGxpbmU6IHRoaXMuc3RhcnQubGluZSwgY29sdW1uOiB0aGlzLnN0YXJ0LmNvbHVtbiwgcGF0aDogcGF0aC5iYXNlbmFtZSh0aGlzLmxleGVyLnBhdGgpIH0pXG4gIH1cblxufVxuXG5cbmNsYXNzIEVtcHR5Q2xhc3Mge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV4ZXIgZXh0ZW5kcyBtaXgoRW1wdHlDbGFzcykud2l0aChcbiAgVG9rZW5UeXBlcyxcbiAgQ29uc3RUb2tlbixcbiAgSW5jbHVkZVRva2VuXG4pIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKHBhdGgsIHRleHQpIHtcbiAgICB0aGlzLmVycm9ycyA9IDBcbiAgICB0aGlzLnBhdGggPSBwYXRoIHx8ICcnXG4gICAgdGhpcy50ZXh0ID0gdGV4dCB8fCAnJ1xuICAgIHRoaXMubGVuZ3RoID0gdGhpcy50ZXh0Lmxlbmd0aFxuICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgIHRoaXMubGluZSA9IDFcbiAgICB0aGlzLmNvbHVtbiA9IDFcbiAgICB0aGlzLnRva2VucyA9IFtdXG4gICAgdGhpcy5jb25zdGFudHMgPSB7fVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB2YWxpZE9mZnNldCAob2Zmc2V0KSB7IHJldHVybiBvZmZzZXQgPj0gMCAmJiBvZmZzZXQgPCB0aGlzLmxlbmd0aCB9XG5cbiAgZW9zICgpIHsgcmV0dXJuIHRoaXMudmFsaWRPZmZzZXQodGhpcy5vZmZzZXQpIH1cblxuICBjaGFyX2F0IChpKSB7IHJldHVybiB0aGlzLnRleHQuY2hhckF0KGkpIH1cblxuICBzdWJ0ZXh0IChpKSB7IHJldHVybiB0aGlzLnRleHQuc3Vic3RyaW5nKGkpIH1cblxuICBwZWVrICgpIHtcbiAgICBsZXQgcG9zX2luZm8gPSAob2Zmc2V0LCBsaW5lLCBjb2x1bW4pID0+IHsgcmV0dXJuIHsgb2Zmc2V0LCBsaW5lLCBjb2x1bW4gfSB9XG5cbiAgICBsZXQgdG9rZW4gPSBudWxsXG4gICAgbGV0IGwgPSBfLmxhc3QodGhpcy50b2tlbnMpXG4gICAgbGV0IG9mZnNldCA9IHRoaXMub2Zmc2V0XG4gICAgbGV0IGxlbiA9IDBcblxuICAgIHdoaWxlIChbJyAnLCAnXFx0J10uaW5kZXhPZih0aGlzLmNoYXJfYXQob2Zmc2V0KSkgIT09IC0xKSB7XG4gICAgICBpZiAobCAmJiAhbC5uZXh0X2lzX3NwYWNlKSB7XG4gICAgICAgIGwubmV4dF9pc19zcGFjZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy52YWxpZE9mZnNldChvZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiB7IHRva2VuLCBvZmZzZXQgfVxuICAgICAgfVxuICAgICAgb2Zmc2V0KytcbiAgICB9XG5cbiAgICBsZXQgb2xkX29mZnNldCA9IG9mZnNldFxuXG4gICAgbGV0IGxpbmUgPSB0aGlzLmxpbmVcbiAgICBsZXQgY29sdW1uID0gdGhpcy5jb2x1bW5cbiAgICBmb3IgKGxldCBrIGluIHRoaXMudG9rZW5fdHlwZXMpIHtcbiAgICAgIGxldCByID0gdGhpcy5zdWJ0ZXh0KG9mZnNldCkubWF0Y2godGhpcy50b2tlbl90eXBlc1trXSlcbiAgICAgIGlmIChyICYmIHIuaW5kZXggPT09IDApIHtcbiAgICAgICAgbGV0IHZhbHVlID0gci5sZW5ndGggPiAxID8gci5zbGljZSgxKS5qb2luKCcnKSA6IHIuam9pbignJylcbiAgICAgICAgbGVuID0gclswXS5sZW5ndGhcbiAgICAgICAgdG9rZW4gPSBuZXcgVG9rZW4odGhpcywgaywgdmFsdWUsIHBvc19pbmZvKG9mZnNldCwgbGluZSwgY29sdW1uKSwgcG9zX2luZm8ob2Zmc2V0ICsgbGVuLCBsaW5lLCBjb2x1bW4gKyBsZW4gLSAxKSlcbiAgICAgICAgb2Zmc2V0ICs9IGxlblxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2Zmc2V0ID09PSBvbGRfb2Zmc2V0KSB7XG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldCArIDFcbiAgICB9XG4gICAgcmV0dXJuIHsgdG9rZW4sIG9mZnNldCwgbGVuIH1cbiAgfVxuXG4gIGluc2VydFRva2VuICh0KSB7XG4gICAgbGV0IGMgPSB0aGlzLmNvbnN0YW50c1t0LnZhbHVlXVxuICAgIGlmIChfLmlzQXJyYXkoYykpIHtcbiAgICAgIGZvciAobGV0IHQgb2YgYykge1xuICAgICAgICB0aGlzLmluc2VydFRva2VuKHQpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh0KVxuICAgIH1cbiAgfVxuXG4gIG5leHQgKCkge1xuICAgIGxldCB7IHRva2VuLCBvZmZzZXQsIGxlbiB9ID0gdGhpcy5wZWVrKClcblxuICAgIHdoaWxlICh0b2tlbiAmJiB0b2tlbi5fdHlwZSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgICBsZXQgdCA9IHRoaXMucGVlaygpXG4gICAgICB0b2tlbiA9IHQudG9rZW5cbiAgICAgIG9mZnNldCA9IHQub2Zmc2V0XG4gICAgICBsZW4gPSB0LmxlblxuICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXRcbiAgICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICB9XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGlmICh0b2tlbi50eXBlID09PSAnY29uc3QnKSB7XG4gICAgICAgIHRva2VuID0gdGhpcy5jb25zdF90b2tlbih0b2tlbiwgb2Zmc2V0LCBsZW4pXG4gICAgICB9XG5cbiAgICAgIGVsc2UgaWYgKHRva2VuLnR5cGUgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB0b2tlbiA9IHRoaXMuaW5jbHVkZV90b2tlbih0b2tlbiwgb2Zmc2V0LCBsZW4pXG4gICAgICB9XG5cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmluc2VydFRva2VuKHRva2VuKVxuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgICAgICB0aGlzLmNvbHVtbiArPSBsZW4gKyAxXG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbiAmJiB0b2tlbi5pcygnZW9sJykpIHtcbiAgICAgICAgdGhpcy5saW5lKytcbiAgICAgICAgdGhpcy5jb2x1bW4gPSAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuXG4gIH1cblxuICBydW4gKHBhdGgsIHRleHQpIHtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHRleHQgPSBwYXRoXG4gICAgICBwYXRoID0gJydcbiAgICB9XG4gICAgdGhpcy5yZXNldChwYXRoLCB0ZXh0KVxuICAgIHdoaWxlICh0aGlzLnZhbGlkT2Zmc2V0KHRoaXMub2Zmc2V0KSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIGNvbnNvbGUuaW5mbygnbGV4ZXIgZHVtcCcpXG4gICAgY29uc29sZS5sb2codGhpcy50b2tlbnMpXG4gICAgY29uc29sZS5sb2coJycpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2xleGVyLmpzIiwiaW1wb3J0IGFzc2lnbl90b2tlbnMgZnJvbSAnLi9hc3NpZ25zLmpzJ1xuaW1wb3J0IGRlbGltaXRlcl90b2tlbnMgZnJvbSAnLi9kZWxpbWl0ZXJzLmpzJ1xuaW1wb3J0IGNvbW1lbnRfdG9rZW5zIGZyb20gJy4vY29tbWVudHMuanMnXG5pbXBvcnQgZ3JvdXBfdG9rZW5zIGZyb20gJy4vZ3JvdXBzLmpzJ1xuaW1wb3J0IGxpdGVyYWxfdG9rZW5zIGZyb20gJy4vbGl0ZXJhbHMuanMnXG5pbXBvcnQgb3BlcmF0b3JfdG9rZW5zIGZyb20gJy4vb3BlcmF0b3JzLmpzJ1xuaW1wb3J0IHByaW1pdGl2ZV90b2tlbnMgZnJvbSAnLi9wcmltaXRpdmVzLmpzJ1xuaW1wb3J0IHJlc2VydmVkX3Rva2VucyBmcm9tICcuL3Jlc2VydmVkLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFRva2VuVHlwZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBnZXQgdG9rZW5fdHlwZXMgKCkge1xuICAgIGlmICghdGhpcy5fdG9rZW5fdHlwZXMpIHtcbiAgICAgIHRoaXMuX3Rva2VuX3R5cGVzID0gXy5leHRlbmQoe30sXG4gICAgICAgIGRlbGltaXRlcl90b2tlbnMsXG4gICAgICAgIGNvbW1lbnRfdG9rZW5zLFxuICAgICAgICBwcmltaXRpdmVfdG9rZW5zLFxuICAgICAgICByZXNlcnZlZF90b2tlbnMsXG4gICAgICAgIGxpdGVyYWxfdG9rZW5zLFxuICAgICAgICBncm91cF90b2tlbnMsXG4gICAgICAgIG9wZXJhdG9yX3Rva2VucyxcbiAgICAgICAgYXNzaWduX3Rva2Vuc1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdG9rZW5fdHlwZXNcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy90eXBlcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYXNzaWduOiAvXig9KVtePT5dLyxcbiAgbWF0aF9hc3NpZ246IC9eW1xcK1xcLVxcKlxcLyVdPS8sXG4gIGxvZ2ljX2Fzc2lnbjogL15bISZcXHxcXF5dPS8sXG4gIGZuX2Fzc2lnbjogL149Pi8sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2Fzc2lnbnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGVvbDogL15bXFxyXFxuXXw7LyxcbiAgY29tbWE6IC9eLC8sXG4gIGNvbG9uOiAvXjooPz1bXkEtWl9dKS9pLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9kZWxpbWl0ZXJzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBjb21tZW50OiAvXlxcL1xcLyhbXlxcclxcbl0qKS8sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2NvbW1lbnRzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBvcGVuX3BhcmVuOiAvXlxcKC8sXG4gIGNsb3NlX3BhcmVuOiAvXlxcKS8sXG5cbiAgb3Blbl9icmFja2V0OiAvXlxcWy8sXG4gIGNsb3NlX2JyYWNrZXQ6IC9eXFxdLyxcblxuICBvcGVuX2N1cmx5OiAvXlxcey8sXG4gIGNsb3NlX2N1cmx5OiAvXlxcfS8sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2dyb3Vwcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAga2V5OiAvXjooW0EtWl9dW0EtWl8wLTldKikvaSxcblxuICBpZDogL14oW0EtWl9dW0EtWl8wLTldKikvaSxcbiAgaWRfZmllbGQ6IC9eXFwuKFtBLVpfXVtBLVpfMC05XSopL2ksXG5cbiAgdGhpczogL15AKD89W15BLVpfXSkvaSxcbiAgdGhpc19maWVsZDogL15AKFtBLVpfXVtBLVpfMC05XSopL2ksXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2xpdGVyYWxzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzeW1ib2w6IC9eW1xcJF0vLFxuXG4gIG1hdGg6IC9eW1xcK1xcLVxcKlxcLyVdW149XS8sXG4gIGxvZ2ljOiAvXlshJlxcfFxcXl1bXj1dLyxcbiAgY29tcDogL14+fDx8Pj18PD18IT18PT0vLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9vcGVyYXRvcnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGhleDogL15cXCQoWzAtOUEtRl0rKXwweChbMC05QS1GXSspL2ksXG4gIG51bWJlcjogL14oWy0rXT9bMC05XSpcXC4/WzAtOV0rKFtlRV1bLStdP1swLTldKyk/KS8sXG5cbiAgc3RyaW5nOiAvXlwifCcoW15cIl0qKVwifCcvLFxuICBjaGFyOiAvXicoLiknLyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvcHJpbWl0aXZlcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW5jbHVkZTogL14jXCIoW15cIl0qKVwiL2ksXG5cbiAgY29uc3Q6IC9eIyhbQS1aX11bQS1aXzAtOV0qKS9pLFxuXG4gIHJlc2VydmVkOiAvXihwdXRzfHB1dGMpL2ksXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL3Jlc2VydmVkLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIENvbnN0VG9rZW4gZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBjb25zdF90b2tlbiAodG9rZW4sIG9mZnNldCwgbGVuKSB7XG4gICAgbGV0IGMgPSBbXVxuICAgIHRoaXMuY29uc3RhbnRzW3Rva2VuLnZhbHVlXSA9IGNcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IHAgPSB0aGlzLnBlZWsoKVxuICAgICAgdG9rZW4gPSBwLnRva2VuXG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBwLm9mZnNldFxuICAgICAgICB0aGlzLmNvbHVtbiArPSBwLmxlbiArIDFcbiAgICAgIH1cbiAgICAgIGlmICghdG9rZW4gfHwgdG9rZW4uaXMoJ2VvbCcpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgYy5wdXNoKHRva2VuKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9rZW5cbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvY29uc3QuanMiLCJpbXBvcnQgeyBMZXhlciB9IGZyb20gJy4uL2xleGVyLmpzJ1xuaW1wb3J0IHsgcGF0aCwgZGlycywgZnMgfSBmcm9tICcuLi8uLi91dGlscy5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJbmNsdWRlVG9rZW4gZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBpbmNsdWRlX3Rva2VuICh0b2tlbiwgb2Zmc2V0LCBsZW4pIHtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICBsZXQgZm4gPSB0b2tlbi52YWx1ZSArIChwYXRoLmV4dG5hbWUodG9rZW4udmFsdWUpID09PSAnJyA/ICcuc2hwJyA6ICcnKVxuICAgIGxldCBwbiA9IHBhdGguam9pbihfX2Rpcm5hbWUsIGZuKVxuICAgIHRyeSB7XG4gICAgICBmcy5zdGF0U3luYyhwbilcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBuID0gcGF0aC5qb2luKGRpcnMudXNlciwgZm4pXG4gICAgICAgIGZzLnN0YXRTeW5jKHBuKVxuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcG4gPSAnJ1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocG4gIT09ICcnKSB7XG4gICAgICBsZXQgc3JjID0gZnMucmVhZEZpbGVTeW5jKHBuLCAndXRmOCcpXG4gICAgICBsZXQgbHggPSBuZXcgTGV4ZXIoKVxuICAgICAgbHgucnVuKHBuLCBzcmMpXG4gICAgICBpZiAoIWx4LmVycm9ycykge1xuICAgICAgICBfLmV4dGVuZCh0aGlzLmNvbnN0YW50cywgbHguY29uc3RhbnRzKVxuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMudG9rZW5zLmNvbmNhdChseC50b2tlbnMpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b2tlblxuICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9pbmNsdWRlLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uL2dsb2JhbHMuanMnXG5pbXBvcnQgeyBGcmFtZXMgfSBmcm9tICcuL2ZyYW1lLmpzJ1xuXG5pbXBvcnQgS2V5TGl0ZXJhbCBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMva2V5X2xpdGVyYWwuanMnXG5cbmltcG9ydCBTdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL3N0YXRlbWVudHMuanMnXG5pbXBvcnQgSWRTdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL2lkLmpzJ1xuaW1wb3J0IEFzc2lnblN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvYXNzaWduLmpzJ1xuaW1wb3J0IFJldHVyblN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvcmV0dXJuLmpzJ1xuaW1wb3J0IENsYXNzU3RhdGVtZW50cyBmcm9tICcuL2dyYW1tYXIvc3RhdGVtZW50cy9jbGFzcy5qcydcbmltcG9ydCBDb25kaXRpb25TdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL2NvbmRpdGlvbnMuanMnXG5pbXBvcnQgVmFyU3RhdGVtZW50cyBmcm9tICcuL2dyYW1tYXIvc3RhdGVtZW50cy92YXIuanMnXG5pbXBvcnQgTG9vcFN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvbG9vcHMuanMnXG5cbmltcG9ydCBFeHByZXNzaW9ucyBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMvZXhwcmVzc2lvbnMuanMnXG5pbXBvcnQgQXJyYXlFeHByZXNzaW9ucyBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMvYXJyYXkuanMnXG5pbXBvcnQgRGljdEV4cHJlc3Npb25zIGZyb20gJy4vZ3JhbW1hci9leHByZXNzaW9ucy9kaWN0LmpzJ1xuaW1wb3J0IEZuRXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2ZuLmpzJ1xuaW1wb3J0IElkRXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2lkLmpzJ1xuaW1wb3J0IENsYXNzRXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2NsYXNzLmpzJ1xuXG5jbGFzcyBOb2RlIHtcblxuICBjb25zdHJ1Y3RvciAocGFyc2VyLCB0b2tlbiwgZGF0YSkge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyXG4gICAgdGhpcy50b2tlbiA9IHRva2VuXG4gICAgdGhpcy5faW5fY2xhc3MgPSBmYWxzZVxuICAgIHRoaXMuX2ZuX2xldmVsID0gMFxuICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwge31cbiAgfVxuXG4gIHRva2VuX3Byb3AgKG5hbWUpIHsgcmV0dXJuIHRoaXMudG9rZW4gPyB0aGlzLnRva2VuW25hbWVdIDogbnVsbCB9XG5cbiAgZ2V0IHZhbHVlICgpIHsgcmV0dXJuIHRoaXMudG9rZW5fcHJvcCgndmFsdWUnKSB9XG5cbiAgZ2V0IHR5cGUgKCkgeyByZXR1cm4gdGhpcy50b2tlbl9wcm9wKCd0eXBlJykgfVxuXG4gIGdldCBzdGFydCAoKSB7IHJldHVybiB0aGlzLnRva2VuX3Byb3AoJ3N0YXJ0JykgfVxuXG4gIGdldCBlbmQgKCkgeyByZXR1cm4gdGhpcy50b2tlbl9wcm9wKCdlbmQnKSB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7IHJldHVybiB0aGlzLnRva2VuX3Byb3AoJ2xlbmd0aCcpIH1cblxuICBpcyAoZSkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4uaXMoZSkgOiBmYWxzZSB9XG5cbiAgdG9TdHJpbmcgKCkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4udG9TdHJpbmcoKSA6ICcnIH1cblxufVxuXG5cbmNsYXNzIEVtcHR5Q2xhc3Mge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VyIGV4dGVuZHMgbWl4KEVtcHR5Q2xhc3MpLndpdGgoXG4gIEtleUxpdGVyYWwsXG5cbiAgU3RhdGVtZW50cyxcbiAgSWRTdGF0ZW1lbnRzLFxuICBBc3NpZ25TdGF0ZW1lbnRzLFxuICBSZXR1cm5TdGF0ZW1lbnRzLFxuICBDbGFzc1N0YXRlbWVudHMsXG4gIENvbmRpdGlvblN0YXRlbWVudHMsXG4gIFZhclN0YXRlbWVudHMsXG4gIExvb3BTdGF0ZW1lbnRzLFxuXG4gIEV4cHJlc3Npb25zLFxuICBBcnJheUV4cHJlc3Npb25zLFxuICBEaWN0RXhwcmVzc2lvbnMsXG4gIEZuRXhwcmVzc2lvbnMsXG4gIElkRXhwcmVzc2lvbnMsXG4gIENsYXNzRXhwcmVzc2lvbnNcbikge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAodG9rZW5zKSB7XG4gICAgdGhpcy5lcnJvcnMgPSAwXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgdGhpcy5ub2RlcyA9IFtdXG4gICAgdGhpcy5mcmFtZXMgPSBuZXcgRnJhbWVzKClcbiAgICB0aGlzLnByZXZfZnJhbWUgPSBudWxsXG4gICAgdGhpcy5pbl9jbGFzcyA9IGZhbHNlXG4gICAgdGhpcy5mbl9sZXZlbCA9IDBcbiAgICB0aGlzLnRva2VucyA9IHRva2VucyB8fCBbXVxuICB9XG5cbiAgdmFsaWRPZmZzZXQgKG9mZnNldCkgeyByZXR1cm4gb2Zmc2V0ID49IDAgJiYgb2Zmc2V0IDwgdGhpcy5sZW5ndGggfVxuXG4gIHRva2VuX2F0IChvZmZzZXQpIHsgcmV0dXJuIHRoaXMudmFsaWRPZmZzZXQob2Zmc2V0KSA/IHRoaXMudG9rZW5zW29mZnNldF0gOiBudWxsIH1cblxuICBnZXQgZW9zICgpIHsgcmV0dXJuIHRoaXMub2Zmc2V0ID49IHRoaXMubGVuZ3RoIH1cblxuICBnZXQgbGVuZ3RoICgpIHsgcmV0dXJuIHRoaXMudG9rZW5zLmxlbmd0aCB9XG5cbiAgZ2V0IHRva2VuICgpIHsgcmV0dXJuIHRoaXMudG9rZW5fYXQodGhpcy5vZmZzZXQpIH1cblxuICBza2lwIChlKSB7IHdoaWxlICh0aGlzLmlzKGUpICYmICF0aGlzLmVvcykgeyB0aGlzLm5leHQoKSB9IH1cblxuICBpcyAoZSkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4uaXMoZSkgOiBmYWxzZSB9XG5cbiAgZXhwZWN0IChlLCBuZXh0ID0gdHJ1ZSkge1xuICAgIGxldCByID0gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4uaXMoZSkgOiBmYWxzZVxuICAgIGlmIChyKSB7XG4gICAgICBpZiAobmV4dCkgeyB0aGlzLm5leHQoKSB9XG4gICAgfVxuICAgIGVsc2UgeyBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCBlLCAnZXhwZWN0ZWQnKSB9XG4gICAgcmV0dXJuIHJcbiAgfVxuXG4gIG1hdGNoIChvZmZzZXQsIG1hdGNoZXMpIHtcbiAgICBpZiAoIV8uaXNOdW1iZXIob2Zmc2V0KSkge1xuICAgICAgbWF0Y2hlcyA9IG9mZnNldFxuICAgICAgb2Zmc2V0ID0gdGhpcy5vZmZzZXRcbiAgICB9XG4gICAgbGV0IHRva2VucyA9IFtdXG4gICAgbGV0IG0gPSAwXG4gICAgd2hpbGUgKHRoaXMudmFsaWRPZmZzZXQob2Zmc2V0KSAmJiBtIDwgbWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5zW29mZnNldCsrXVxuICAgICAgaWYgKCF0b2tlbi5pcyhtYXRjaGVzW20rK10pKSB7IHJldHVybiBudWxsIH1cbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKVxuICAgIH1cbiAgICByZXR1cm4gdG9rZW5zLmxlbmd0aCA/IHRva2VucyA6IG51bGxcbiAgfVxuXG4gIHBlZWsgKGMgPSAxKSB7IHJldHVybiB0aGlzLnRva2VuX2F0KHRoaXMub2Zmc2V0ICsgYykgfVxuXG4gIG5leHQgKGMgPSAxKSB7XG4gICAgdGhpcy5vZmZzZXQgKz0gY1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBsb29wX3doaWxlIChmbiwgbWF0Y2hlcywgZW5kLCBlbmRfbmV4dCwgc2tpcCkge1xuICAgIGxldCBub2RlcyA9IFtdXG4gICAgaWYgKHNraXApIHsgdGhpcy5za2lwKHNraXApIH1cbiAgICB3aGlsZSAoIXRoaXMuZW9zICYmICghZW5kIHx8ICF0aGlzLmlzKGVuZCkpICYmICghbWF0Y2hlcyB8fCB0aGlzLm1hdGNoKG1hdGNoZXMpKSkge1xuICAgICAgbm9kZXMucHVzaChmbi5jYWxsKHRoaXMpKVxuICAgICAgaWYgKHNraXApIHsgdGhpcy5za2lwKHNraXApIH1cbiAgICB9XG4gICAgaWYgKGVuZCkgeyB0aGlzLmV4cGVjdChlbmQsIGVuZF9uZXh0KSB9XG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cblxuICBuZXh0X2V4cHJfbm9kZSAobGVmdCkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICBsZXQgZGF0YSA9IHt9XG4gICAgaWYgKGxlZnQpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBkYXRhID0geyBsZWZ0LCByaWdodDogdGhpcy5leHByKCkgfVxuICAgIH1cbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRva2VuLCBkYXRhKVxuICAgIGlmICghbGVmdCkgeyB0aGlzLm5leHQoKSB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIHJ1biAodG9rZW5zKSB7XG4gICAgdGhpcy5yZXNldCh0b2tlbnMpXG4gICAgdGhpcy5mcmFtZXMuc3RhcnQoJ2dsb2JhbHMnKVxuICAgIGxldCBub2RlcyA9IHRoaXMuc3RhdGVtZW50cygpXG4gICAgdGhpcy5mcmFtZXMuZW5kKClcbiAgICB0aGlzLm5vZGVzID0gbm9kZXNcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIGNvbnNvbGUuaW5mbygncGFyc2VyIGR1bXAnKVxuICAgIGNvbnNvbGUubG9nKHRoaXMubm9kZXMpXG4gICAgY29uc29sZS5sb2coJycpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3BhcnNlci5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IHZhciBGcmFtZVxuZXhwb3J0IHZhciBGcmFtZXNcbmV4cG9ydCB2YXIgRnJhbWVJdGVtXG5cbkZyYW1lcyA9IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gbnVsbFxuICB9XG5cbiAgc3RhcnQgKHR5cGUpIHsgdGhpcy5jdXJyZW50ID0gbmV3IEZyYW1lKHRoaXMsIHRoaXMuY3VycmVudCwgdHlwZSkgfVxuXG4gIGVuZCAoKSB7IHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudC5wYXJlbnQgfVxuXG4gIGFkZCAobm9kZSwgcGFyZW50LCBpdGVtX3R5cGUpIHsgcmV0dXJuIHRoaXMuY3VycmVudC5hZGQobm9kZSwgcGFyZW50LCBpdGVtX3R5cGUpIH1cblxuICBleGlzdHMgKG5hbWUsIGl0ZW1fdHlwZSkge1xuICAgIGxldCBjID0gdGhpcy5jdXJyZW50XG4gICAgd2hpbGUgKGMpIHtcbiAgICAgIGxldCBpID0gYy5leGlzdHMobmFtZSwgaXRlbV90eXBlKVxuICAgICAgaWYgKGkpIHtcbiAgICAgICAgcmV0dXJuIGlcbiAgICAgIH1cbiAgICAgIGMgPSBjLnBhcmVudFxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZm5fZXhpc3RzIChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhpc3RzKG5hbWUsICdmbicpXG4gIH1cblxuICBjbGFzc19leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2NsYXNzJylcbiAgfVxuXG4gIHZhcl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ3ZhcicpXG4gIH1cblxufVxuXG5cbkZyYW1lSXRlbSA9IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvciAoZnJhbWUsIHBhcmVudCwgbm9kZSwgaXRlbV90eXBlKSB7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICB0aGlzLml0ZW1fdHlwZSA9IGl0ZW1fdHlwZVxuICAgIHRoaXMubm9kZSA9IG5vZGVcbiAgfVxuXG4gIGdldCBkYXRhICgpIHsgcmV0dXJuIHRoaXMubm9kZS5kYXRhIH1cblxuICBnZXQgbmFtZSAoKSB7IHJldHVybiB0aGlzLm5vZGUudmFsdWUgfVxuXG4gIGdldCB0eXBlICgpIHsgcmV0dXJuIHRoaXMubm9kZS50eXBlIH1cblxuICBnZXQgaXNfdmFyICgpIHsgcmV0dXJuIHRoaXMuaXRlbV90eXBlID09PSAndmFyJyB9XG5cbiAgZ2V0IGlzX2NsYXNzICgpIHsgcmV0dXJuIHRoaXMuaXRlbV90eXBlID09PSAnY2xhc3MnIH1cblxuICBnZXQgaXNfZm4gKCkgeyByZXR1cm4gdGhpcy5pdGVtX3R5cGUgPT09ICdmbicgfVxuXG4gIGdldCBpc19sb2NhbCAoKSB7IHJldHVybiB0aGlzLmZyYW1lLmlzX2xvY2FsIH1cblxuICBnZXQgaXNfZ2xvYmFsICgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuaXNfZ2xvYmFsIH1cblxufVxuXG5cbkZyYW1lID0gY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yIChmcmFtZXMsIHBhcmVudCwgdHlwZSkge1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICB0aGlzLnR5cGUgPSB0eXBlXG4gICAgdGhpcy5pdGVtcyA9IFtdXG4gIH1cblxuICBnZXQgbmFtZSAoKSB7IHJldHVybiB0aGlzLnBhcmVudCA/ICckcycgOiAnJGcnIH1cblxuICBnZXQgaXNfbG9jYWwgKCkgeyByZXR1cm4gdGhpcy5wYXJlbnQgIT09IG51bGwgfVxuXG4gIGdldCBpc19nbG9iYWwgKCkgeyByZXR1cm4gdGhpcy5wYXJlbnQgPT09IG51bGwgfVxuXG4gIGFkZCAobm9kZSwgcGFyZW50LCBpdGVtX3R5cGUpIHtcbiAgICBsZXQgaSA9IG5ldyBGcmFtZUl0ZW0odGhpcywgcGFyZW50LCBub2RlLCBpdGVtX3R5cGUpXG4gICAgdGhpcy5pdGVtcy5wdXNoKGkpXG4gICAgbm9kZS5fZ2xvYmFsID0gdGhpcy5pc19nbG9iYWxcbiAgICByZXR1cm4gaVxuICB9XG5cbiAgZXhpc3RzIChuYW1lLCBpdGVtX3R5cGUpIHsgcmV0dXJuIF8uZmluZCh0aGlzLml0ZW1zLCBpdGVtX3R5cGUgPyB7IG5hbWUsIGl0ZW1fdHlwZSB9IDogeyBuYW1lIH0pIH1cblxuICBmbl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2ZuJylcbiAgfVxuXG4gIHZhcl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ3ZhcicpXG4gIH1cblxuICBjbGFzc19leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2NsYXNzJylcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZnJhbWUuanMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEtleUxpdGVyYWxzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAga2V5X2xpdGVyYWwgKCkge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICB0aGlzLmV4cGVjdCgna2V5JylcbiAgICBub2RlLmRhdGEuZXhwciA9IHRoaXMuZXhwcigpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMva2V5X2xpdGVyYWwuanMiLCJpbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGJsb2NrIChlbmQsIGVuZF9uZXh0ID0gdHJ1ZSwgYmxvY2tfdHlwZSA9IG51bGwpIHtcbiAgICBpZiAoYmxvY2tfdHlwZSkge1xuICAgICAgdGhpcy5mcmFtZXMuc3RhcnQoYmxvY2tfdHlwZSlcbiAgICB9XG4gICAgbGV0IG5vZGVzID0gdGhpcy5sb29wX3doaWxlKHRoaXMuc3RhdGVtZW50LCBudWxsLCBlbmQsIGVuZF9uZXh0LCAnZW9sJylcbiAgICBpZiAoYmxvY2tfdHlwZSkge1xuICAgICAgdGhpcy5mcmFtZXMuZW5kKClcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cblxuICBzdGF0ZW1lbnRzICgpIHsgcmV0dXJuIHRoaXMuYmxvY2soKSB9XG5cbiAgc2luZ2xlX3N0YXRlbWVudCAoKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIHRoaXMubmV4dCgpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIHN0YXRlbWVudCAoKSB7XG4gICAgaWYgKHRoaXMubWF0Y2goWydsZXQnLCAnaWQnXSkpIHsgcmV0dXJuIHRoaXMudmFyX3N0YXRlbWVudCgpIH0gLy8gdmFyaWFibGUgZGVmaW5pdGlvblxuICAgIGVsc2UgaWYgKHRoaXMubWF0Y2goWydpZHxpZF9maWVsZHx0aGlzX2ZpZWxkJywgJ2Fzc2lnbnxmbl9hc3NpZ24nXSkpIHsgcmV0dXJuIHRoaXMuYXNzaWduX3N0YXRlbWVudCgpIH0gLy8gdmFyaWFibGUgYXNzaWdubWVudFxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2lmJykpIHsgcmV0dXJuIHRoaXMuaWZfc3RhdGVtZW50KCkgfSAvLyBpZiBibG9ja1xuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2ZvcicpKSB7IHJldHVybiB0aGlzLmZvcl9zdGF0ZW1lbnQoKSB9IC8vIHdoaWxlIGJsb2NrXG4gICAgZWxzZSBpZiAodGhpcy5pcygnd2hpbGUnKSkgeyByZXR1cm4gdGhpcy53aGlsZV9zdGF0ZW1lbnQoKSB9IC8vIHdoaWxlIGJsb2NrXG4gICAgZWxzZSBpZiAodGhpcy5pcygncmV0dXJuJykpIHsgcmV0dXJuIHRoaXMucmV0dXJuX3N0YXRlbWVudCgpIH0gLy8gcmV0dXJuIGZyb20gZnVuY3Rpb25cbiAgICBlbHNlIGlmICh0aGlzLmlzKFsnYnJlYWsnLCAnY29udGludWUnXSkpIHsgcmV0dXJuIHRoaXMuc2luZ2xlX3N0YXRlbWVudCgpIH0gLy8gc2luZ2xlIHN0YXRlbWVudFxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2NsYXNzJykpIHsgcmV0dXJuIHRoaXMuY2xhc3Nfc3RhdGVtZW50KCkgfSAvLyBjbGFzcyBzdGF0ZW1lbnRcbiAgICBlbHNlIGlmICh0aGlzLmlzKFsnaWQnLCAnc3VwZXInXSkpIHsgcmV0dXJuIHRoaXMuaWRfc3RhdGVtZW50KCkgfSAvLyBmdW5jdGlvbiBjYWxsXG4gICAgZWxzZSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnc3ludGF4IGVycm9yJylcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvc3RhdGVtZW50cy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJZFN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBpZF9zdGF0ZW1lbnQgKGZpcnN0ID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLmlzKCdzdXBlcicpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdXBlcl9leHByKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pZF9leHByKGZpcnN0KVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9pZC5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQXNzaWduU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGFzc2lnbl9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCBub2RlID0gbnVsbFxuICAgIGxldCBpZCA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICh0aGlzLmlzKCdmbl9hc3NpZ24nKSkge1xuICAgICAgbm9kZSA9IHRoaXMuZm5fZXhwcihpZCwgdHJ1ZSlcbiAgICAgIGlkLl9mbiA9IHRydWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbiwgeyBpZCB9KVxuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIG5vZGUuZGF0YS5leHByID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgdGhpcy5mcmFtZXMuYWRkKGlkLCBudWxsLCBpZC5fZm4gPyAnZm4nIDogJ3ZhcicpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9hc3NpZ24uanMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFJldHVyblN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICByZXR1cm5fc3RhdGVtZW50ICgpIHtcbiAgICBsZXQgcCA9IGZhbHNlXG4gICAgbGV0IGVuZCA9ICdlb2x8ZW5kfGNsb3NlX3BhcmVuJ1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICBub2RlLmRhdGEuYXJncyA9IFtdXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7XG4gICAgICBwID0gdHJ1ZVxuICAgICAgZW5kID0gJ2Nsb3NlX3BhcmVuJ1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgaWYgKCFwIHx8ICF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICBub2RlLmRhdGEuYXJncyA9IHRoaXMuZXhwcnMoZW5kLCBmYWxzZSlcbiAgICB9XG4gICAgaWYgKHApIHtcbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvcmV0dXJuLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBDbGFzc1N0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBjbGFzc19saXN0ICgpIHsgcmV0dXJuIHRoaXMubG9vcF93aGlsZSh0aGlzLnNpbmdsZSwgWydpZCddLCAnZW9sJywgdHJ1ZSwgJ2NvbW1hJykgfVxuXG4gIGNsYXNzX3N0YXRlbWVudCAoKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgbGV0IF9leHRlbmRzID0gbnVsbFxuICAgIGxldCBpZCA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICh0aGlzLmlzKCc6JykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBfZXh0ZW5kcyA9IHRoaXMuY2xhc3NfbGlzdCgpXG4gICAgfVxuICAgIHRoaXMuZnJhbWVzLmFkZChpZCwgbnVsbCwgJ2NsYXNzJylcbiAgICB0aGlzLmluX2NsYXNzID0gdHJ1ZVxuICAgIGxldCBib2R5ID0gdGhpcy5ibG9jaygnZW5kJywgZmFsc2UsICdjbGFzcycpXG4gICAgdGhpcy5pbl9jbGFzcyA9IGZhbHNlXG4gICAgdGhpcy5leHBlY3QoJ2VuZCcpXG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IGlkLCBfZXh0ZW5kcywgYm9keSB9KVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2NsYXNzLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBDb25kaXRpb25TdGF0ZW1lbnRzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgaWZfc3RhdGVtZW50IChleHBlY3RfZW5kID0gdHJ1ZSkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGxldCBleHByX2Jsb2NrXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fcGFyZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIGV4cHJfYmxvY2sgPSB0aGlzLmV4cHIoKVxuICAgICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleHByX2Jsb2NrID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgbGV0IHRydWVfYm9keSA9IHRoaXMuYmxvY2soWydlbHNlJywgJ2VuZCddLCBmYWxzZSwgJ2lmJylcbiAgICBsZXQgZmFsc2VfYm9keSA9IHRoaXMuaXMoJ2Vsc2UnKSA/IHRoaXMuZWxzZV9zdGF0ZW1lbnQoZmFsc2UpIDogbnVsbFxuICAgIGlmIChleHBlY3RfZW5kKSB7IHRoaXMuZXhwZWN0KCdlbmQnKSB9XG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IGV4cHI6IGV4cHJfYmxvY2ssIHRydWVfYm9keSwgZmFsc2VfYm9keSB9KVxuICB9XG5cbiAgZWxzZV9zdGF0ZW1lbnQgKGV4cGVjdF9lbmQgPSB0cnVlKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIGxldCBub2RlID0gbnVsbFxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ2lmJykpIHtcbiAgICAgIG5vZGUgPSB0aGlzLmlmX3N0YXRlbWVudChmYWxzZSlcbiAgICAgIG5vZGUudG9rZW4gPSB0b2tlblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0b2tlbiwgeyBmYWxzZV9ib2R5OiB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ2Vsc2UnKSB9KVxuICAgIH1cbiAgICBpZiAoZXhwZWN0X2VuZCkgeyB0aGlzLmV4cGVjdCgnZW5kJykgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvY29uZGl0aW9ucy5qcyIsImltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi4vLi4vbGV4ZXIuanMnXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFZhclN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICB2YXJfc3RhdGVtZW50ICgpIHtcbiAgICBsZXQgbm9kZSA9IG51bGxcbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICghdGhpcy5wZWVrKCkuaXMoJ2Fzc2lnbnxmbl9hc3NpZ24nKSkge1xuICAgICAgbGV0IHQgPSBuZXcgVG9rZW4odGhpcy50b2tlbilcbiAgICAgIHQudmFsdWUgPSAnPSdcbiAgICAgIHQuX3R5cGUgPSAnYXNzaWduJ1xuICAgICAgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHQsIHsgaWQ6IHRoaXMudG9rZW4sIGV4cHI6IG51bGwgfSlcbiAgICAgIHRoaXMuZnJhbWVzLmFkZCh0aGlzLnRva2VuLCBudWxsLCAndmFyJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlID0gdGhpcy5hc3NpZ25fc3RhdGVtZW50KClcbiAgICB9XG4gICAgbm9kZS5fbGV0ID0gdHJ1ZVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvdmFyLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBMb29wU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGZvcl9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuXG4gICAgbGV0IHYgPSB0aGlzLnRva2VuXG4gICAgdGhpcy5leHBlY3QoJ2lkfHZhcicpXG4gICAgdGhpcy5leHBlY3QoJ2Fzc2lnbicpXG4gICAgbGV0IG1pbl9leHByID0gdGhpcy5leHByKClcbiAgICB0aGlzLmV4cGVjdCgndG8nKVxuICAgIGxldCBtYXhfZXhwciA9IHRoaXMuZXhwcigpXG4gICAgbGV0IHN0ZXBfZXhwciA9IG51bGxcbiAgICBpZiAodGhpcy5pcygnc3RlcCcpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgc3RlcF9leHByID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgbGV0IGJvZHkgPSB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ2ZvcicpXG4gICAgdGhpcy5leHBlY3QoJ2VuZCcpXG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IHYsIG1pbl9leHByLCBtYXhfZXhwciwgc3RlcF9leHByLCBib2R5IH0pXG4gIH1cblxuICB3aGlsZV9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGxldCBleHByX2Jsb2NrXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fcGFyZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIGV4cHJfYmxvY2sgPSB0aGlzLmV4cHIoKVxuICAgICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleHByX2Jsb2NrID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgbGV0IGJvZHkgPSB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ3doaWxlJylcbiAgICB0aGlzLmV4cGVjdCgnZW5kJylcbiAgICByZXR1cm4gbmV3IE5vZGUodGhpcywgdG9rZW4sIHsgZXhwcjogZXhwcl9ibG9jaywgYm9keSB9KVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2xvb3BzLmpzIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZXhwcnMgKGVuZCwgZW5kX25leHQpIHsgcmV0dXJuIHRoaXMubG9vcF93aGlsZSh0aGlzLmV4cHIsIG51bGwsIGVuZCwgZW5kX25leHQsICdjb21tYScpIH1cblxuICBleHByICgpIHtcbiAgICBsZXQgbm9kZSA9IHRoaXMuc2ltcGxlX2V4cHIoKVxuICAgIGlmIChub2RlKSB7XG4gICAgICBsZXQgdGVybSA9IHRoaXMudGVybV9leHByKG5vZGUpXG4gICAgICBpZiAodGVybSkgeyByZXR1cm4gdGVybSB9XG5cbiAgICAgIGxldCBmYWN0b3IgPSB0aGlzLmZhY3Rvcl9leHByKG5vZGUpXG4gICAgICBpZiAoZmFjdG9yKSB7IHJldHVybiBmYWN0b3IgfVxuXG4gICAgICBsZXQgY29uZGl0aW9uYWwgPSB0aGlzLmNvbmRpdGlvbmFsX2V4cHIobm9kZSlcbiAgICAgIGlmIChjb25kaXRpb25hbCkgeyByZXR1cm4gY29uZGl0aW9uYWwgfVxuXG4gICAgICBsZXQganVuY3Rpb24gPSB0aGlzLmp1bmN0aW9uX2V4cHIobm9kZSlcbiAgICAgIGlmIChqdW5jdGlvbikgeyByZXR1cm4ganVuY3Rpb24gfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgc2ltcGxlX2V4cHIgKCkge1xuICAgIGlmICh0aGlzLmlzKFsnbnVtYmVyJywgJ3N0cmluZycsICdjaGFyJ10pKSB7IHJldHVybiB0aGlzLm5leHRfZXhwcl9ub2RlKCkgfVxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2ZuX2Fzc2lnbicpKSB7IHJldHVybiB0aGlzLmZuX2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7IHJldHVybiB0aGlzLnN1Yl9leHByKCkgfVxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ29wZW5fYnJhY2tldCcpKSB7IHJldHVybiB0aGlzLmFycmF5X2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnb3Blbl9jdXJseScpKSB7IHJldHVybiB0aGlzLmRpY3RfZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKFsndGhpcycsICd0aGlzX2ZpZWxkJ10pKSB7IHJldHVybiB0aGlzLnRoaXNfZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKCdzdXBlcicpKSB7IHJldHVybiB0aGlzLnN1cGVyX2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnbmV3JykpIHsgcmV0dXJuIHRoaXMubmV3X2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnaWQnKSkgeyByZXR1cm4gdGhpcy5pZF9leHByKCkgfVxuICAgIGVsc2Uge1xuICAgICAgZXJyb3IodGhpcywgdGhpcy50b2tlbiwgJ251bWJlciwgc3RyaW5nLCB2YXJpYWJsZSwgdmFyaWFibGUgcGFyZW4gb3IgZnVuY3Rpb24gY2FsbC9leHByZXNzaW9uIGV4cGVjdGVkJylcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBzdWJfZXhwciAoKSB7XG4gICAgbGV0IG5vZGVzID0gW11cbiAgICBub2Rlcy5wdXNoKG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pKVxuICAgIHRoaXMuZXhwZWN0KCdvcGVuX3BhcmVuJylcbiAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgIG5vZGVzLnB1c2godGhpcy5leHByKCkpXG4gICAgfVxuICAgIG5vZGVzLnB1c2gobmV3IE5vZGUodGhpcywgdGhpcy50b2tlbikpXG4gICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxuXG4gIHRlcm1fZXhwciAobGVmdCkgeyByZXR1cm4gdGhpcy5pcygvXFwrfC0vKSA/IHRoaXMubmV4dF9leHByX25vZGUobGVmdCkgOiBudWxsIH1cblxuICBmYWN0b3JfZXhwciAobGVmdCkgeyByZXR1cm4gdGhpcy5pcygvXFwvfFxcKi8pID8gdGhpcy5uZXh0X2V4cHJfbm9kZShsZWZ0KSA6IG51bGwgfVxuXG4gIGNvbmRpdGlvbmFsX2V4cHIgKGxlZnQpIHsgcmV0dXJuIHRoaXMuaXMoLz58Pj18PHw8PXwhPXw8Pnw9PS8pID8gdGhpcy5uZXh0X2V4cHJfbm9kZShsZWZ0KSA6IG51bGwgfVxuXG4gIGp1bmN0aW9uX2V4cHIgKGxlZnQpIHsgcmV0dXJuIHRoaXMuaXMoLyZ8XFx8LykgPyB0aGlzLm5leHRfZXhwcl9ub2RlKGxlZnQpIDogbnVsbCB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9leHByZXNzaW9ucy5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQXJyYXlFeHByZXNzaW9ucyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGFycmF5X2V4cHIgKCkge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICBub2RlLmRhdGEuYXJncyA9IFtdXG4gICAgdGhpcy5leHBlY3QoJ29wZW5fYnJhY2tldCcpXG4gICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9icmFja2V0JykpIHtcbiAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5sb29wX3doaWxlKHRoaXMuZXhwciwgbnVsbCwgJ2Nsb3NlX2JyYWNrZXQnLCBmYWxzZSwgJ2NvbW1hfGVvbCcpXG4gICAgfVxuICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9icmFja2V0JylcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9hcnJheS5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgRGljdEV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZGljdF9leHByICgpIHtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgbm9kZS5kYXRhLmRlZiA9IFtdXG4gICAgdGhpcy5leHBlY3QoJ29wZW5fY3VybHknKVxuICAgIGlmICghdGhpcy5pcygnY2xvc2VfY3VybHknKSkge1xuICAgICAgbm9kZS5kYXRhLmRlZiA9IHRoaXMubG9vcF93aGlsZSh0aGlzLmtleV9saXRlcmFsLCBbJ2tleSddLCAnY2xvc2VfY3VybHknLCBmYWxzZSwgJ2NvbW1hfGVvbCcpXG4gICAgfVxuICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9jdXJseScpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZGljdC5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgRm5FeHByZXNzaW9ucyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGZuX2V4cHIgKGlkLCBzdGF0ZW1lbnQgPSBmYWxzZSkge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbiwgeyBpZCB9KVxuICAgIG5vZGUuZGF0YS5hcmdzID0gW11cbiAgICBpZiAoc3RhdGVtZW50KSB7XG4gICAgICBub2RlLl9pbl9jbGFzcyA9IHRoaXMuaW5fY2xhc3NcbiAgICAgIG5vZGUuX2ZuX2xldmVsID0gdGhpcy5mbl9sZXZlbCsrXG4gICAgfVxuICAgIHRoaXMubmV4dCgpXG4gICAgdGhpcy5mcmFtZXMuc3RhcnQoJ2ZuJylcbiAgICBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5mbl9hcmdzX2RlZigpXG4gICAgICB9XG4gICAgICB0aGlzLmV4cGVjdCgnY2xvc2VfcGFyZW4nKVxuICAgIH1cbiAgICBub2RlLmRhdGEuYm9keSA9IHRoaXMuYmxvY2soJ2VuZCcsIGZhbHNlKVxuICAgIHRoaXMuZnJhbWVzLmVuZCgpXG4gICAgdGhpcy5leHBlY3QoJ2VuZCcpXG4gICAgaWYgKHN0YXRlbWVudCkge1xuICAgICAgdGhpcy5mbl9sZXZlbC0tXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBmbl9hcmcgKCkge1xuICAgIHRoaXMuZnJhbWVzLmFkZCh0aGlzLnRva2VuLCBudWxsLCAndmFyJylcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAodGhpcy5pcygnYXNzaWduJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBub2RlLmRhdGEuYXNzaWduID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGZuX2FyZ3NfZGVmICgpIHsgcmV0dXJuIHRoaXMubG9vcF93aGlsZSh0aGlzLmZuX2FyZywgWydpZCddLCAnY2xvc2VfcGFyZW4nLCBmYWxzZSwgJ2NvbW1hfGVvbCcpIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2ZuLmpzIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzLmpzJ1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJZEV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgaWRfZXhwciAoZmlyc3QgPSB0cnVlKSB7XG4gICAgaWYgKGZpcnN0ICYmICF0aGlzLmZyYW1lcy5leGlzdHModGhpcy50b2tlbi52YWx1ZSkpIHtcbiAgICAgIGVycm9yKHRoaXMsIHRoaXMudG9rZW4sICd1bmRlY2xhcmVkIGlkZW50aWZpZXInKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fYnJhY2tldCcpKSB7XG4gICAgICBpZiAoIW5vZGUuZGF0YS5maWVsZHMpIHtcbiAgICAgICAgbm9kZS5kYXRhLmZpZWxkcyA9IFtdXG4gICAgICB9XG4gICAgICBub2RlLmRhdGEuZmllbGRzLnB1c2godGhpcy5hcnJheV9leHByKCkpXG4gICAgfVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBub2RlLnRva2VuLl90eXBlID0gJ2ZuJ1xuICAgICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5leHBycygnY2xvc2VfcGFyZW4nLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHdoaWxlICh0aGlzLmlzKFsnaWRfZmllbGQnLCAnb3Blbl9icmFja2V0J10pKSB7XG4gICAgICBpZiAoIW5vZGUuZGF0YS5maWVsZHMpIHtcbiAgICAgICAgbm9kZS5kYXRhLmZpZWxkcyA9IFtdXG4gICAgICB9XG4gICAgICBub2RlLmRhdGEuZmllbGRzLnB1c2godGhpcy5pZF9maWVsZCgpKVxuICAgICAgdGhpcy5za2lwKCdjb21tYScpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBpZF9maWVsZCAoKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIG5vZGUuZGF0YS5hcmdzID0gW11cbiAgICBub2RlLnRva2VuLl90eXBlID0gJ2lkJ1xuICAgIG5vZGUuX2ZpZWxkID0gdHJ1ZVxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fYnJhY2tldCcpKSB7XG4gICAgICBpZiAoIW5vZGUuZGF0YS5maWVsZHMpIHtcbiAgICAgICAgbm9kZS5kYXRhLmZpZWxkcyA9IFtdXG4gICAgICB9XG4gICAgICBub2RlLmRhdGEuZmllbGRzLnB1c2godGhpcy5hcnJheV9leHByKCkpXG4gICAgfVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBub2RlLnRva2VuLl90eXBlID0gJ2ZuJ1xuICAgICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5leHBycygnY2xvc2VfcGFyZW4nLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2lkLmpzIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIENsYXNzRXhwcmVzc2lvbnMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBuZXdfZXhwciAoKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgbGV0IGlkID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKCF0aGlzLmZyYW1lcy5leGlzdHMoaWQudmFsdWUsICdjbGFzcycpKSB7XG4gICAgICBlcnJvcih0aGlzLCBpZCwgJ3VuZGVjbGFyZWQgY2xhc3MnKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgbGV0IGFyZ3MgPSBbXVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgICAgYXJncyA9IHRoaXMuZXhwcnMoJ2Nsb3NlX3BhcmVuJywgZmFsc2UpXG4gICAgICB9XG4gICAgICB0aGlzLmV4cGVjdCgnY2xvc2VfcGFyZW4nKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IE5vZGUodGhpcywgdG9rZW4sIHsgaWQsIGFyZ3MgfSlcbiAgfVxuXG4gIHRoaXNfZXhwciAoKSB7XG4gICAgaWYgKCF0aGlzLmluX2NsYXNzKSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnQCBjYW5ub3QgYmUgdXNlZCBvdXRzaWRlIGNsYXNzIGRlZmluaXRpb24nKVxuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICh0aGlzLmlzKCd0aGlzJykpIHtcbiAgICAgIHJldHVybiB0aGlzLm5leHRfZXhwcl9ub2RlKClcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygndGhpc19maWVsZCcpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pZF9leHByKGZhbHNlKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgc3VwZXJfZXhwciAoKSB7XG4gICAgaWYgKCF0aGlzLmluX2NsYXNzKSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnc3VwZXIgY2Fubm90IGJlIHVzZWQgb3V0c2lkZSBjbGFzcyBkZWZpbml0aW9uJylcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pZF9leHByKGZhbHNlKVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9jbGFzcy5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IFRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy90ZW1wbGF0ZXMuanMnXG5pbXBvcnQgQ29kZVRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9jb2RlLmpzJ1xuaW1wb3J0IEJsb2NrVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2Jsb2NrLmpzJ1xuaW1wb3J0IFN0YXRlbWVudFRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9zdGF0ZW1lbnRzLmpzJ1xuaW1wb3J0IEV4cHJlc3Npb25UZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvZXhwcmVzc2lvbnMuanMnXG5pbXBvcnQgUHJpbWl0aXZlVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL3ByaW1pdGl2ZXMuanMnXG5pbXBvcnQgT3BlcmF0b3JUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvb3BlcmF0b3JzLmpzJ1xuaW1wb3J0IElkVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2lkLmpzJ1xuaW1wb3J0IENsYXNzVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2NsYXNzLmpzJ1xuaW1wb3J0IEZuVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2ZuLmpzJ1xuaW1wb3J0IEFycmF5VGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2FycmF5LmpzJ1xuaW1wb3J0IERpY3RUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvZGljdC5qcydcbmltcG9ydCBBc3NpZ25UZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvYXNzaWduLmpzJ1xuXG5jbGFzcyBFbXB0eUNsYXNzIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zcGlsZXIgZXh0ZW5kcyBtaXgoRW1wdHlDbGFzcykud2l0aChcbiAgVGVtcGxhdGVzLFxuICBDb2RlVGVtcGxhdGVzLFxuXG4gIEJsb2NrVGVtcGxhdGVzLFxuICBTdGF0ZW1lbnRUZW1wbGF0ZXMsXG4gIEV4cHJlc3Npb25UZW1wbGF0ZXMsXG5cbiAgUHJpbWl0aXZlVGVtcGxhdGVzLFxuICBPcGVyYXRvclRlbXBsYXRlcyxcbiAgSWRUZW1wbGF0ZXMsXG5cbiAgQ2xhc3NUZW1wbGF0ZXMsXG4gIEZuVGVtcGxhdGVzLFxuXG4gIEFycmF5VGVtcGxhdGVzLFxuICBEaWN0VGVtcGxhdGVzLFxuXG4gIEFzc2lnblRlbXBsYXRlc1xuKSB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIGdldCBsZW5ndGggKCkgeyByZXR1cm4gdGhpcy5saW5lcy5sZW5ndGggfVxuXG4gIGdldCBlb3MgKCkgeyByZXR1cm4gdGhpcy5vZmZzZXQgPj0gdGhpcy5ub2Rlcy5sZW5ndGggfVxuXG4gIGdldCBub2RlICgpIHsgcmV0dXJuIHRoaXMubm9kZV9hdCh0aGlzLm9mZnNldCkgfVxuXG4gIHZhbGlkT2Zmc2V0IChvZmZzZXQpIHsgcmV0dXJuIG9mZnNldCA+PSAwICYmIG9mZnNldCA8IHRoaXMubm9kZXMubGVuZ3RoIH1cblxuICBub2RlX2F0IChvZmZzZXQpIHsgcmV0dXJuIHRoaXMudmFsaWRPZmZzZXQob2Zmc2V0KSA/IHRoaXMubm9kZXNbb2Zmc2V0XSA6IG51bGwgfVxuXG4gIHBlZWsgKGMgPSAxKSB7IHJldHVybiB0aGlzLm5vZGVfYXQodGhpcy5vZmZzZXQgKyBjKSB9XG5cbiAgbmV4dCAoYyA9IDEpIHsgdGhpcy5vZmZzZXQgKz0gYyB9XG5cbiAgd3JpdGUgKC4uLnZhbHVlcykgeyB0aGlzLmxpbmUgKz0gdmFsdWVzLmpvaW4oJycpIH1cblxuICB3cml0ZWxuICguLi52YWx1ZXMpIHtcbiAgICB0aGlzLndyaXRlKC4uLnZhbHVlcylcbiAgICB0aGlzLmxpbmVzID0gdGhpcy5saW5lcy5jb25jYXQodGhpcy5saW5lLnNwbGl0KCdcXG4nKSlcbiAgICB0aGlzLmxpbmUgPSAnJ1xuICB9XG5cbiAgcmVzZXQgKG5vZGVzKSB7XG4gICAgdGhpcy5lcnJvcnMgPSAwXG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzIHx8IFtdXG4gICAgdGhpcy5saW5lcyA9IFtdXG4gICAgdGhpcy5saW5lID0gJydcbiAgICB0aGlzLm9mZnNldCA9IDBcbiAgICB0aGlzLmNvZGUgPSAnJ1xuICAgIHRoaXMuaW5kZW50X2xldmVsID0gMFxuICB9XG5cbiAgY29tbWEgKG5vZGVzKSB7XG4gICAgbGV0IGEgPSBbXVxuICAgIGZvciAobGV0IG4gb2Ygbm9kZXMpIHtcbiAgICAgIGEucHVzaChuIGluc3RhbmNlb2YgTm9kZSA/IHRoaXMuZXhwcihuKSA6IG4pXG4gICAgfVxuICAgIHJldHVybiBhLmpvaW4oJywgJylcbiAgfVxuXG4gIGxuIChzdHIpIHsgcmV0dXJuIHN0ciArICghXy5lbmRzV2l0aChzdHIsICdcXG4nKSA/ICdcXG4nIDogJycpIH1cblxuICBpbmRlbnQgKHN0cikgeyByZXR1cm4gXy5wYWRTdGFydCgnJywgdGhpcy5pbmRlbnRfbGV2ZWwgKiAyKSArIHN0ciB9XG5cbiAgc3RyICh2YWx1ZSkgeyByZXR1cm4gJ1xcJycgKyB2YWx1ZS5yZXBsYWNlKC8nL2csICdcXCcnKSArICdcXCcnIH1cblxuICBydW4gKG5vZGVzKSB7XG4gICAgdGhpcy5yZXNldChub2RlcylcbiAgICB0aGlzLmNvZGVfc3RhcnQoKVxuICAgIHdoaWxlICghdGhpcy5lb3MpIHtcbiAgICAgIHRoaXMud3JpdGVsbih0aGlzLnN0YXRlbWVudCh0aGlzLm5vZGUpKVxuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgdGhpcy5jb2RlX2VuZCgpXG4gICAgdGhpcy5jb2RlID0gdGhpcy5saW5lcy5qb2luKCdcXG4nKVxuICAgIHJldHVybiB0aGlzLmNvZGVcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIGNvbnNvbGUuaW5mbygndHJhbnNwaWxlciBkdW1wJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvZGUpXG4gICAgY29uc29sZS5sb2coJycpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RyYW5zcGlsZXIuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICBpZiAoXy5pc1N0cmluZyhub2RlKSkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZV90ZW1wbGF0ZShub2RlKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKCdmbicpKSB7XG4gICAgICByZXR1cm4gdGhpcy5mbl9jYWxsX3RlbXBsYXRlKG5vZGUpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2ZuX2Fzc2lnbicpKSB7XG4gICAgICByZXR1cm4gdGhpcy5mbl9hc3NpZ25fdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnb3Blbl9icmFja2V0JykpIHtcbiAgICAgIHJldHVybiB0aGlzLmFycmF5X3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoJ29wZW5fY3VybHknKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGljdF90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKFsnbWF0aCcsICdsb2dpYycsICdjb21wJ10pKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcGVyYXRvcl90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKFsndGhpcycsICd0aGlzX2ZpZWxkJ10pKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGlzX3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoJ25ldycpKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZXdfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcyhbJ2NoYXInLCAnc3RyaW5nJ10pKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJpbmdfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnaWQnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuaWRfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZV90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy90ZW1wbGF0ZXMuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQ29kZVRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGNvZGVfc3RhcnRfdGVtcGxhdGUgKCkge1xuICAgIHRoaXMud3JpdGVsbignKGZ1bmN0aW9uICgpIHsnKVxuICAgIHRoaXMuaW5kZW50X2xldmVsKytcbiAgICB0aGlzLndyaXRlbG4oJ1xcJ3VzZSBzdHJpY3RcXCc7JylcbiAgICB0aGlzLndyaXRlbG4oKVxuICB9XG5cbiAgY29kZV9lbmRfdGVtcGxhdGUgKCkge1xuICAgIHRoaXMud3JpdGVsbignfSkoKTsnKVxuICAgIHRoaXMuaW5kZW50X2xldmVsLS1cbiAgICB0aGlzLndyaXRlbG4oKVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NvZGUuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQmxvY2tUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBibG9ja190ZW1wbGF0ZSAobm9kZSkge1xuICAgIGxldCBzdHIgPSB0aGlzLmxuKCd7JylcblxuICAgIHRoaXMuaW5kZW50X2xldmVsKytcblxuICAgIGlmIChfLmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAobGV0IG4gb2Ygbm9kZSkge1xuICAgICAgICBzdHIgKz0gdGhpcy5zdGF0ZW1lbnRfdGVtcGxhdGUobilcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzdHIgPSB0aGlzLnN0YXRlbWVudF90ZW1wbGF0ZShub2RlKVxuICAgIH1cblxuICAgIHRoaXMuaW5kZW50X2xldmVsLS1cblxuICAgIHN0ciArPSB0aGlzLmxuKHRoaXMuaW5kZW50KCd9JykpXG5cbiAgICByZXR1cm4gc3RyXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvYmxvY2suanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgU3RhdGVtZW50VGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgc3RhdGVtZW50X3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgbGV0IHN0ciA9ICcnXG5cbiAgICBpZiAoXy5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKGxldCBuIG9mIG5vZGUpIHtcbiAgICAgICAgc3RyICs9IHRoaXMuc3RhdGVtZW50KG4pXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIGxldCBkID0gbm9kZS5kYXRhIHx8IHt9XG4gICAgICBsZXQgdCA9IHt9XG5cbiAgICAgIGlmIChub2RlLmlzKFsnYXNzaWduJywgJ2ZuX2Fzc2lnbiddKSkge1xuICAgICAgICB0ID0gdGhpcy5hc3NpZ24obm9kZSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2ZuJykpIHtcbiAgICAgICAgdCA9IHRoaXMuZm5fY2FsbChub2RlLCB0cnVlKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnaWYnKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICdpZiAoI3tleHByfSkgI3t0cnVlX2JvZHl9I3tmYWxzZV9ib2R5fScsXG4gICAgICAgICAgZGF0OiB7XG4gICAgICAgICAgICBleHByOiB0aGlzLmV4cHIoZC5leHByKSxcbiAgICAgICAgICAgIHRydWVfYm9keTogdGhpcy5ibG9jayhkLnRydWVfYm9keSksXG4gICAgICAgICAgICBmYWxzZV9ib2R5OiB0aGlzLnN0YXRlbWVudChkLmZhbHNlX2JvZHkpLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnZWxzZScpKSB7XG4gICAgICAgIGlmIChkLmV4cHIpIHsgLy8gZWxzZSBpZlxuICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICB0bXBsOiAnZWxzZSBpZiAoI3tleHByfSkgI3t0cnVlX2JvZHl9I3tmYWxzZV9ib2R5fScsXG4gICAgICAgICAgICBkYXQ6IHtcbiAgICAgICAgICAgICAgZXhwcjogdGhpcy5leHByKGQuZXhwciksXG4gICAgICAgICAgICAgIHRydWVfYm9keTogdGhpcy5ibG9jayhkLnRydWVfYm9keSksXG4gICAgICAgICAgICAgIGZhbHNlX2JvZHk6IHRoaXMuc3RhdGVtZW50KGQuZmFsc2VfYm9keSksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICB0bXBsOiAnZWxzZSAje2ZhbHNlX2JvZHl9JyxcbiAgICAgICAgICAgIGRhdDogeyBmYWxzZV9ib2R5OiB0aGlzLmJsb2NrKGQuZmFsc2VfYm9keSkgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnd2hpbGUnKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICd3aGlsZSAoI3tleHByfSkgI3tib2R5fScsXG4gICAgICAgICAgZGF0OiB7XG4gICAgICAgICAgICBleHByOiB0aGlzLmV4cHIoZC5leHByKSxcbiAgICAgICAgICAgIGJvZHk6IHRoaXMuYmxvY2soZC5ib2R5KSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2ZvcicpKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgdG1wbDogJ2ZvciAobGV0ICN7dn0gPSAje21pbl9leHByfTsgI3t2fSA8ICN7bWF4X2V4cHJ9OyAje3Z9ICs9ICN7c3RlcF9leHByfSkgI3tib2R5fScsXG4gICAgICAgICAgZGF0OiB7XG4gICAgICAgICAgICB2OiBkLnYudmFsdWUsXG4gICAgICAgICAgICBtaW5fZXhwcjogdGhpcy5leHByKGQubWluX2V4cHIpLFxuICAgICAgICAgICAgbWF4X2V4cHI6IHRoaXMuZXhwcihkLm1heF9leHByKSxcbiAgICAgICAgICAgIHN0ZXBfZXhwcjogZC5zdGVwX2V4cHIgPyB0aGlzLmV4cHIoZC5zdGVwX2V4cHIpIDogJzEnLFxuICAgICAgICAgICAgYm9keTogdGhpcy5ibG9jayhkLmJvZHkpLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygncmV0dXJuJykpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICB0bXBsOiAncmV0dXJuICN7YXJnc30nLFxuICAgICAgICAgIGRhdDogeyBhcmdzOiB0aGlzLmV4cHIoZC5hcmdzLCAnLCAnKSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUuaXMoWydicmVhaycsICdjb250aW51ZSddKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICcje3dvcmR9JyxcbiAgICAgICAgICBkYXQ6IHsgd29yZDogbm9kZS52YWx1ZSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2NsYXNzJykpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICB0bXBsOiAnY2xhc3MgI3tuYW1lfSN7X2V4dGVuZHN9ICN7Ym9keX0nLFxuICAgICAgICAgIGRhdDoge1xuICAgICAgICAgICAgbmFtZTogZC5pZC52YWx1ZSxcbiAgICAgICAgICAgIF9leHRlbmRzOiBkLl9leHRlbmRzID8gJyBleHRlbmRzICcgKyB0aGlzLmV4cHIoZC5fZXh0ZW5kcywgJywgJykgOiAnJyxcbiAgICAgICAgICAgIGJvZHk6IHRoaXMuYmxvY2soZC5ib2R5KSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RyID0gXy50ZW1wbGF0ZSh0LnRtcGwpKHQuZGF0KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxuKHRoaXMuaW5kZW50KHN0cikpXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvc3RhdGVtZW50cy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBFeHByZXNzaW9uVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZXhwcl90ZW1wbGF0ZSAobm9kZSwgc2VwYXJhdG9yKSB7XG4gICAgbGV0IHN0ciA9ICcnXG5cbiAgICBpZiAoXy5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBsZXQgYSA9IFtdXG4gICAgICBmb3IgKGxldCBuIG9mIG5vZGUpIHtcbiAgICAgICAgYS5wdXNoKHRoaXMuZXhwcihuKSlcbiAgICAgIH1cbiAgICAgIHN0ciA9IGEuam9pbihzZXBhcmF0b3IgfHwgJycpXG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICBsZXQgZCA9IG5vZGUgJiYgbm9kZS5kYXRhIHx8IHt9XG4gICAgICBsZXQgdCA9IG5vZGUgPyB0aGlzLnRlbXBsYXRlKG5vZGUsIGQpIDogeyB0bXBsOiAndW5kZWZpbmVkJywgZGF0OiB7fSB9XG4gICAgICBzdHIgPSBfLnRlbXBsYXRlKHQudG1wbCkodC5kYXQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0clxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2V4cHJlc3Npb25zLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFByaW1pdGl2ZVRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIHN0cmluZ190ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnI3t2YWx1ZX0nLFxuICAgICAgZGF0OiB7IHZhbHVlOiB0aGlzLnN0cihub2RlLnZhbHVlKSB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3ByaW1pdGl2ZXMuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgT3BlcmF0b3JUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBvcGVyYXRvcl90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnI3tsZWZ0fSAje29wfSAje3JpZ2h0fScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgb3A6IG5vZGUudmFsdWUsXG4gICAgICAgIGxlZnQ6IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmxlZnQpLFxuICAgICAgICByaWdodDogdGhpcy5leHByX3RlbXBsYXRlKGQucmlnaHQpLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9vcGVyYXRvcnMuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgSWRUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBub2RlX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje25vZGV9JyxcbiAgICAgIGRhdDogeyBub2RlIH1cbiAgICB9XG4gIH1cblxuICBpZF90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnI3tmaWVsZH0je3ZhbHVlfSN7ZmllbGRzfSN7YXNzaWdufScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgZmllbGQ6IG5vZGUuX2ZpZWxkID8gJy4nIDogJycsXG4gICAgICAgIHZhbHVlOiBub2RlLnZhbHVlLFxuICAgICAgICBmaWVsZHM6IGQuZmllbGRzID8gdGhpcy5leHByX3RlbXBsYXRlKGQuZmllbGRzLCAnJykgOiAnJyxcbiAgICAgICAgYXNzaWduOiBkLmFzc2lnbiA/ICcgPSAnICsgdGhpcy5leHByX3RlbXBsYXRlKGQuYXNzaWduLCAnJykgOiAnJyxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YWx1ZV90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnI3t2YWx1ZX0nLFxuICAgICAgZGF0OiB7IHZhbHVlOiBub2RlLnZhbHVlIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvaWQuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQ2xhc3NUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICB0aGlzX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICd0aGlzI3tkb3R9I3tmaWVsZH0je2ZpZWxkc30nLFxuICAgICAgZGF0OiB7XG4gICAgICAgIGRvdDogbm9kZS5pcygndGhpc19maWVsZCcpID8gJy4nIDogJycsXG4gICAgICAgIGZpZWxkOiBub2RlLmlzKCd0aGlzX2ZpZWxkJykgPyBub2RlLnZhbHVlIDogJycsXG4gICAgICAgIGZpZWxkczogZC5maWVsZHMgPyB0aGlzLmV4cHJfdGVtcGxhdGUoZC5maWVsZHMsICcnKSA6ICcnLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld190ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnbmV3ICN7aWR9KCN7YXJnc30pJyxcbiAgICAgIGRhdDoge1xuICAgICAgICBpZDogZC5pZC52YWx1ZSxcbiAgICAgICAgYXJnczogdGhpcy5leHByX3RlbXBsYXRlKGQuYXJncywgJywgJyksXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NsYXNzLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEZuVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZm5fZGVmIChhcmdzLCBib2R5LCBpbl9jbGFzcykge1xuICAgIHJldHVybiBfLnRlbXBsYXRlKCcje2ZufSgje2FyZ3N9KSAje2JvZHl9Jykoe1xuICAgICAgZm46ICFpbl9jbGFzcyA/ICdmdW5jdGlvbiAnIDogJycsXG4gICAgICBhcmdzOiB0aGlzLmV4cHJfdGVtcGxhdGUoYXJncywgJywgJyksXG4gICAgICBib2R5OiB0aGlzLmJsb2NrX3RlbXBsYXRlKGJvZHkpLFxuICAgIH0pXG4gIH1cblxuICBmbl9jYWxsX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgbGV0IHQgPSB7fVxuICAgIGlmIChub2RlKSB7XG4gICAgICBsZXQgZCA9IG5vZGUuZGF0YSB8fCB7fVxuICAgICAgdCA9IHtcbiAgICAgICAgdG1wbDogJyN7ZmllbGR9I3tmbn0oI3thcmdzfSknLFxuICAgICAgICBkYXQ6IHtcbiAgICAgICAgICBmaWVsZDogbm9kZS5fZmllbGQgPyAnLicgOiAnJyxcbiAgICAgICAgICBmbjogbm9kZS52YWx1ZSxcbiAgICAgICAgICBhcmdzOiB0aGlzLmV4cHJfdGVtcGxhdGUoZC5hcmdzLCAnLCAnKSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdFxuICB9XG5cbiAgZm5fYXNzaWduX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje2ZufScsXG4gICAgICBkYXQ6IHsgZm46IHRoaXMuZm5fZGVmKGQuYXJncywgZC5ib2R5KSB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2ZuLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEFycmF5VGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgYXJyYXlfdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG1wbDogJ1sje2FyZ3N9XSN7ZmllbGRzfScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgYXJnczogdGhpcy5leHByX3RlbXBsYXRlKGQuYXJncywgJywgJyksXG4gICAgICAgIGZpZWxkczogZC5maWVsZHMgPyB0aGlzLmV4cHJfdGVtcGxhdGUoZC5maWVsZHMsICcnKSA6ICcnLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9hcnJheS5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBEaWN0VGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZGljdF90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIGxldCBkZWYgPSBfLm1hcChkLmRlZiwgZiA9PiBfLnRlbXBsYXRlKCcje3ZhbHVlfTogI3tleHByfScpKHsgdmFsdWU6IGYudmFsdWUsIGV4cHI6IHRoaXMuZXhwcl90ZW1wbGF0ZShmLmRhdGEuZXhwcikgfSkpXG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICd7I3tkZWZ9fSN7ZmllbGRzfScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgZGVmOiB0aGlzLmV4cHJfdGVtcGxhdGUoZGVmLCAnLCAnKSxcbiAgICAgICAgZmllbGRzOiBkLmZpZWxkcyA/IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmZpZWxkcywgJycpIDogJydcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZGljdC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBBc3NpZ25UZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBhc3NpZ25fdGVtcGxhdGUgKG5vZGUpIHtcbiAgICBsZXQgdCA9IHt9XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGxldCBkID0gbm9kZS5kYXRhIHx8IHt9XG5cbiAgICAgIGxldCBpZCA9IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmlkKVxuICAgICAgbGV0IF9sZXQgPSBub2RlLl9sZXQgPyAnbGV0ICcgOiAnJ1xuICAgICAgbGV0IGV4cHJcbiAgICAgIGxldCBvcFxuXG4gICAgICBpZiAobm9kZS5pcygnYXNzaWduJykpIHtcbiAgICAgICAgb3AgPSAnICcgKyBub2RlLnZhbHVlICsgJyAnXG4gICAgICAgIGV4cHIgPSB0aGlzLmV4cHJfdGVtcGxhdGUoZC5leHByKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnZm5fYXNzaWduJykpIHtcbiAgICAgICAgb3AgPSAhbm9kZS5faW5fY2xhc3MgfHwgbm9kZS5fZm5fbGV2ZWwgPiAwID8gJyA9ICcgOiAnICdcbiAgICAgICAgZXhwciA9IHRoaXMuZm5fZGVmKGQuYXJncywgZC5ib2R5LCBub2RlLl9pbl9jbGFzcyAmJiBub2RlLl9mbl9sZXZlbCA9PT0gMClcbiAgICAgIH1cblxuICAgICAgdCA9IHtcbiAgICAgICAgdG1wbDogJyN7X2xldH0je2lkfSN7b3B9I3tleHByfScsXG4gICAgICAgIGRhdDogeyBfbGV0LCBpZCwgb3AsIGV4cHIgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdFxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2Fzc2lnbi5qcyIsImltcG9ydCBoZXh5IGZyb20gJ2hleHknXG5pbXBvcnQgeyBoZXggfSBmcm9tICcuLi9nbG9iYWxzLmpzJ1xuXG5leHBvcnQgY29uc3QgZGF0YV90eXBlX3NpemVzID0ge1xuICBpODogMSxcbiAgczg6IDEsXG4gIGkxNjogMixcbiAgczE2OiAyLFxuICBpMzI6IDQsXG4gIHMzMjogNCxcbiAgZjMyOiA0LFxuICBzdHI6IDY0LFxufVxuXG5leHBvcnQgY29uc3QgZGF0YV90eXBlX2ZucyA9IHtcbiAgaTg6ICdVaW50OCcsXG4gIHM4OiAnSW50OCcsXG4gIGkxNjogJ1VpbnQxNicsXG4gIHMxNjogJ0ludDE2JyxcbiAgaTMyOiAnVWludDMyJyxcbiAgczMyOiAnSW50MzInLFxuICBmMzI6ICdGbG9hdDMyJyxcbn1cblxuZXhwb3J0IHZhciBkYXRhX3R5cGVfc2l6ZSA9IHR5cGUgPT4gXy5pc051bWJlcih0eXBlKSA/IHR5cGUgOiBkYXRhX3R5cGVfc2l6ZXNbdHlwZV1cblxuZXhwb3J0IGNsYXNzIE1lbW9yeSB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICB0aGlzLl9zaXplID0gbWFpbi5kZWZhdWx0cygnbWVtb3J5LnNpemUnKVxuICAgIHRoaXMuX3RvcCA9IDBcbiAgICB0aGlzLl9ib3R0b20gPSB0aGlzLl90b3AgKyB0aGlzLl9zaXplIC0gMVxuXG4gICAgdGhpcy5fYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuX3NpemUpXG5cbiAgICB0aGlzLl9kYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fYnVmZmVyKVxuXG4gICAgdGhpcy5fdmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLl9idWZmZXIpXG4gIH1cblxuICB0aWNrICh0KSB7XG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXIoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fdmlldyA9IG51bGxcbiAgICB0aGlzLl9kYXRhID0gbnVsbFxuICAgIHRoaXMuX2J1ZmZlciA9IG51bGxcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuXG4gIGdldCBidWZmZXIgKCkgeyByZXR1cm4gdGhpcy5fYnVmZmVyIH1cbiAgZ2V0IGRhdGEgKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9XG4gIGdldCB2aWV3ICgpIHsgcmV0dXJuIHRoaXMuX3ZpZXcgfVxuICBnZXQgdG9wICgpIHsgcmV0dXJuIHRoaXMuX3RvcCB9XG4gIGdldCBib3R0b20gKCkgeyByZXR1cm4gdGhpcy5fYm90dG9tIH1cbiAgZ2V0IHNpemUgKCkgeyByZXR1cm4gdGhpcy5fc2l6ZSB9XG5cbiAgY2xlYXIgKGQgPSAwKSB7XG4gICAgdGhpcy5maWxsKDAsIHRoaXMuX3RvcCwgdGhpcy5fc2l6ZSlcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgY2hrX2JvdW5kcyAoYWRkciwgc3ogPSA0KSB7XG4gICAgaWYgKGFkZHIgPCB0aGlzLl90b3AgfHwgYWRkciArIHN6ID4gdGhpcy5fYm90dG9tKSB7XG4gICAgICB0aGlzLmhsdCgweDA4KVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZGIgKHR5cGUsIGFkZHIsIC4uLmFyZ3MpIHtcbiAgICBsZXQgc3ogPSBkYXRhX3R5cGVfc2l6ZXNbdHlwZV1cbiAgICBsZXQgZm4gPSB0aGlzLl92aWV3WydzZXQnICsgZGF0YV90eXBlX2Zuc1t0eXBlXV1cbiAgICBmb3IgKGxldCBhIG9mIGFyZ3MpIHtcbiAgICAgIGZuLmNhbGwodGhpcy5fdmlldywgYWRkciwgYSlcbiAgICAgIGFkZHIgKz0gc3pcbiAgICB9XG4gICAgcmV0dXJuIGFkZHJcbiAgfVxuXG4gIGRiX2JjICh0eXBlLCBhZGRyLCAuLi5hcmdzKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKGFkZHIsIGFyZ3MubGVuZ3RoICogZGF0YV90eXBlX3NpemVzW3R5cGVdKVxuICAgIHRoaXMuZGIodHlwZSwgYWRkciwgLi4uYXJncylcbiAgfVxuXG4gIGxkICh0eXBlLCBhZGRyKSB7IHJldHVybiB0aGlzLl92aWV3WydnZXQnICsgZGF0YV90eXBlX2Zuc1t0eXBlXV0oYWRkciwgX3ZtLmxpdHRsZUVuZGlhbikgfVxuXG4gIGxkYiAoYWRkcikgeyByZXR1cm4gdGhpcy5sZCgnaTgnLCBhZGRyKSB9XG5cbiAgbGR3IChhZGRyKSB7IHJldHVybiB0aGlzLmxkKCdpMTYnLCBhZGRyKSB9XG5cbiAgbGRkIChhZGRyKSB7IHJldHVybiB0aGlzLmxkKCdpMzInLCBhZGRyKSB9XG5cbiAgbGRmIChhZGRyKSB7IHJldHVybiB0aGlzLmxkKCdmMzInLCBhZGRyKSB9XG5cbiAgbGRfYmMgKHR5cGUsIGFkZHIpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgZGF0YV90eXBlX3NpemVzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzLmxkKHR5cGUsIGFkZHIpXG4gIH1cblxuICBzdCAodHlwZSwgYWRkciwgdmFsdWUpIHsgdGhpcy5fdmlld1snc2V0JyArIGRhdGFfdHlwZV9mbnNbdHlwZV1dKGFkZHIsIHZhbHVlLCBfdm0ubGl0dGxlRW5kaWFuKSB9XG5cbiAgc3RiIChhZGRyLCB2YWx1ZSkgeyB0aGlzLnN0KCdpOCcsIGFkZHIsIHZhbHVlKSB9XG5cbiAgc3R3IChhZGRyLCB2YWx1ZSkgeyB0aGlzLnN0KCdpMTYnLCBhZGRyLCB2YWx1ZSkgfVxuXG4gIHN0ZCAoYWRkciwgdmFsdWUpIHsgdGhpcy5zdCgnaTMyJywgYWRkciwgdmFsdWUpIH1cblxuICBzdGYgKGFkZHIsIHZhbHVlKSB7IHRoaXMuc3QoJ2YzMicsIGFkZHIsIHZhbHVlKSB9XG5cbiAgc3RfYmMgKHR5cGUsIGFkZHIsIHZhbHVlKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKGFkZHIsIGRhdGFfdHlwZV9zaXplc1t0eXBlXSlcbiAgICB0aGlzLnN0KHR5cGUsIGFkZHIsIHZhbHVlKVxuICB9XG5cbiAgbGRsIChhZGRyLCBzaXplKSB7IHJldHVybiB0aGlzLl9kYXRhLnNsaWNlKGFkZHIsIGFkZHIgKyBzaXplIC0gMSkgfVxuXG4gIGxkbF9iYyAoYWRkciwgc2l6ZSkge1xuICAgIHRoaXMuY2hrX2JvdW5kcyhhZGRyLCBzaXplKVxuICAgIHJldHVybiB0aGlzLmxkbChhZGRyLCBzaXplKVxuICB9XG5cbiAgbGRzIChhZGRyLCBzaXplKSB7XG4gICAgaWYgKF8uaXNTdHJpbmcoYWRkcikpIHsgIC8vIGFzc2VtYmxlciB3aWxsIHVzZSBsZHMoXCJcIilcbiAgICAgIHJldHVybiBhZGRyXG4gICAgfVxuXG4gICAgbGV0IHMgPSAnJ1xuICAgIHNpemUgPSBzaXplIHx8IGRhdGFfdHlwZV9zaXplcy5zdHJcbiAgICBsZXQgYm90dG9tID0gTWF0aC5taW4oYWRkciArIHNpemUgLSAxLCB0aGlzLl9ib3R0b20pXG4gICAgbGV0IG1lbSA9IHRoaXMuX2RhdGFcbiAgICB3aGlsZSAoYWRkciA8PSBib3R0b20pIHtcbiAgICAgIGxldCBjID0gbWVtW2FkZHIrK11cbiAgICAgIGlmIChjID09PSAwKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzXG4gIH1cblxuICBsZHNfYmMgKGFkZHIsIHNpemUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgTWF0aC5taW4oc2l6ZSB8fCAwLCBkYXRhX3R5cGVfc2l6ZXMuc3RyKSlcbiAgICByZXR1cm4gdGhpcy5sZHMoYWRkciwgc2l6ZSlcbiAgfVxuXG4gIHN0bCAoYWRkciwgdmFsdWUsIHNpemUpIHsgdGhpcy5fZGF0YS5zZXQodmFsdWUuc3ViYXJyYXkoMCwgc2l6ZSB8fCB2YWx1ZS5ieXRlTGVuZ3RoKSwgYWRkcikgfVxuXG4gIHN0bF9iYyAoYWRkciwgdmFsdWUsIHNpemUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgTWF0aC5taW4oc2l6ZSB8fCAwLCB2YWx1ZS5ieXRlTGVuZ3RoKSlcbiAgICB0aGlzLnN0bChhZGRyLCB2YWx1ZSwgc2l6ZSlcbiAgfVxuXG4gIHN0cyAoYWRkciwgc3RyLCBzaXplKSB7XG4gICAgc2l6ZSA9IHNpemUgfHwgZGF0YV90eXBlX3NpemVzLnN0ciAtIDFcbiAgICBsZXQgYSA9IF8ubWFwKHN0ci5zcGxpdCgnJyksIGkgPT4gaS5jaGFyQ29kZUF0KDApKVxuICAgIGEubGVuZ3RoID0gTWF0aC5taW4oc2l6ZSwgYS5sZW5ndGgpXG4gICAgdGhpcy5maWxsKDAsIGFkZHIsIHNpemUpXG4gICAgdGhpcy5fZGF0YS5zZXQoYSwgYWRkcilcbiAgfVxuXG4gIHN0c19iYyAoYWRkciwgc3RyLCBzaXplKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKGFkZHIsIE1hdGgubWluKHNpemUsIGRhdGFfdHlwZV9zaXplcy5zdHIpKVxuICAgIHRoaXMuc3RzKGFkZHIsIHN0ciwgc2l6ZSlcbiAgfVxuXG4gIGZpbGwgKHZhbHVlLCB0b3AsIHNpemUpIHsgdGhpcy5fZGF0YS5maWxsKHZhbHVlIHx8IDAsIHRvcCwgdG9wICsgc2l6ZSkgfVxuXG4gIGZpbGxfYmMgKHZhbHVlLCB0b3AsIHNpemUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHModG9wLCBzaXplKVxuICAgIHRoaXMuZmlsbCh2YWx1ZSwgdG9wLCBzaXplKVxuICB9XG5cbiAgY29weSAoc3JjLCB0Z3QsIHNpemUpIHsgdGhpcy5fZGF0YS5jb3B5V2l0aGluKHRndCwgc3JjLCBzcmMgKyBzaXplIC0gMSkgfVxuXG4gIGNvcHlfYmMgKHNyYywgdGd0LCBzaXplKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKHNyYywgc2l6ZSlcbiAgICB0aGlzLmNoa19ib3VuZHModGd0LCBzaXplKVxuICAgIHRoaXMuY29weShzcmMsIHRndCwgc2l6ZSlcbiAgfVxuXG4gIHJlYWQgKGFkZHIsIHR5cGUgPSAnaTgnKSB7XG4gICAgbGV0IHZhbHVlXG4gICAgaWYgKF8uaXNOdW1iZXIodHlwZSkpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5fZGF0YS5zbGljZShhZGRyLCBhZGRyICsgdHlwZSAtIDEpXG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzdHInKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubGRzKGFkZHIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFsdWUgPSB0aGlzLmxkKHR5cGUsIGFkZHIpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgd3JpdGUgKHZhbHVlLCBhZGRyLCB0eXBlID0gJ2k4Jykge1xuICAgIGxldCBzelxuICAgIGlmIChfLmlzTnVtYmVyKHR5cGUpKSB7XG4gICAgICB0aGlzLl9kYXRhLnNldCh2YWx1ZS5zdWJhcnJheSgwLCB0eXBlIC0gMSksIGFkZHIpXG4gICAgICBzeiA9IHR5cGVcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cicpIHtcbiAgICAgIHRoaXMuc3RzKGFkZHIsIHZhbHVlKVxuICAgICAgc3ogPSBkYXRhX3R5cGVfc2l6ZXNbdHlwZV1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnN0KHR5cGUsIGFkZHIsIHZhbHVlKVxuICAgICAgc3ogPSBkYXRhX3R5cGVfc2l6ZXNbdHlwZV1cbiAgICB9XG4gICAgcmV0dXJuIGFkZHIgKyBzelxuICB9XG5cbiAgZnJvbV9zdHJpbmcgKGFkZHIsIHN0cikge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgbGV0IHcgPSBzdHIubGVuZ3RoXG5cbiAgICBsZXQgdGkgPSBhZGRyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB3OyB4KyspIHtcbiAgICAgIGRhdGFbdGkrK10gPSBzdHIuY2hhckNvZGVBdCh4KVxuICAgIH1cblxuICAgIHJldHVybiB0aVxuICB9XG5cbiAgZnJvbV9zdHJpbmdfbWFzayAoYWRkciwgc3RyLCBtYXNrKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgdyA9IHN0ci5sZW5ndGhcblxuICAgIGxldCB0aSA9IGFkZHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHc7IHgrKykge1xuICAgICAgZGF0YVt0aSsrXSA9IG1hc2tbc3RyW3hdXVxuICAgIH1cblxuICAgIHJldHVybiB0aVxuICB9XG5cbiAgdG9fc3RyaW5nIChhZGRyLCBzaXplKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgcyA9ICcnXG5cbiAgICBsZXQgdGkgPSBhZGRyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplOyB5KyspIHtcbiAgICAgIHMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXRhW3RpKytdKVxuICAgIH1cblxuICAgIHJldHVybiBzXG4gIH1cblxuICB0b19zdHJpbmdfbWFzayAoYWRkciwgc2l6ZSwgbWFzaykge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgbGV0IHMgPSAnJ1xuXG4gICAgbGV0IHRpID0gYWRkclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZTsgeSsrKSB7XG4gICAgICBzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobWFza1tkYXRhW3RpKytdXSlcbiAgICB9XG5cbiAgICByZXR1cm4gc1xuICB9XG5cbiAgZnJvbV9hcnJheSAoYWRkciwgYXJyKSB7XG4gICAgbGV0IGggPSBhcnIubGVuZ3RoXG5cbiAgICBsZXQgdGkgPSBhZGRyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICAgIHRpID0gdGhpcy5mcm9tX3N0cmluZyh0aSwgYXJyW3ldKVxuICAgIH1cblxuICAgIHJldHVybiB0aVxuICB9XG5cbiAgZnJvbV9hcnJheV9tYXNrIChhZGRyLCBhcnIsIG1hc2sgPSB7fSkge1xuICAgIGxldCBoID0gYXJyLmxlbmd0aFxuXG4gICAgbGV0IHRpID0gYWRkclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XG4gICAgICB0aSA9IHRoaXMuZnJvbV9zdHJpbmdfbWFzayh0aSwgYXJyW3ldLCBtYXNrKVxuICAgIH1cblxuICAgIHJldHVybiB0aVxuICB9XG5cbiAgdG9fYXJyYXkgKGFkZHIsIHcsIGgpIHtcbiAgICBsZXQgYXJyID0gW11cblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XG4gICAgICBhcnIucHVzaCh0aGlzLnRvX3N0cmluZyhhZGRyICsgeSAqIHcsIHcpKVxuICAgIH1cblxuICAgIHJldHVybiBhcnJcbiAgfVxuXG4gIHRvX2FycmF5X21hc2sgKGFkZHIsIHcsIGgsIG1hc2spIHtcbiAgICBsZXQgYXJyID0gW11cblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XG4gICAgICBhcnIucHVzaCh0aGlzLnRvX3N0cmluZ19tYXNrKGFkZHIgKyB5ICogdywgdywgbWFzaykpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFyclxuICB9XG5cbiAgZHVtcCAoYWRkciA9IDAsIHNpemUgPSAxMDI0KSB7XG4gICAgY29uc29sZS5sb2coJ0R1bXBpbmcnLCBzaXplLCAnIGJ5dGVzIGZyb20gbWVtb3J5IGF0ICcsIGhleChhZGRyKSlcbiAgICBjb25zb2xlLmxvZyhoZXh5LmhleHkodGhpcy5fYnVmZmVyLCB7IG9mZnNldDogYWRkciwgbGVuZ3RoOiBzaXplLCB3aWR0aDogMTYsIGNhcHM6ICd1cHBlcicsIGluZGVudDogMiB9KSlcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vbWVtb3J5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGV4eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImhleHlcIlxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGhleHkgZnJvbSAnaGV4eSdcbmltcG9ydCBwcmV0dHlCeXRlcyBmcm9tICdwcmV0dHktYnl0ZXMnXG5pbXBvcnQgeyBkYXRhX3R5cGVfc2l6ZSB9IGZyb20gJy4vbWVtb3J5LmpzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbW9yeU1hbmFnZXIge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgdGhpcy5fbWFpbiA9IG1haW5cblxuICAgIHRoaXMuX2NvbGxlY3RfZGVsYXkgPSBtYWluLmRlZmF1bHRzKCdtZW1vcnlfbWFuYWdlci5jb2xsZWN0X2RlbGF5JylcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX2Jsb2NrcyA9IFtdXG4gICAgdGhpcy5fbGFzdCA9IDBcbiAgICByZXR1cm4gdGhpcy5jb2xsZWN0KClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuY29sbGVjdCgpXG4gICAgdGhpcy5fYmxvY2tzID0gW11cbiAgICB0aGlzLl9sYXN0ID0gMFxuICB9XG5cbiAgdGljayAodCkge1xuICAgIGlmICh0IC0gdGhpcy5fbGFzdCA+PSB0aGlzLl9jb2xsZWN0X2RlbGF5KSB7XG4gICAgICB0aGlzLmNvbGxlY3QoKVxuICAgICAgdGhpcy5fbGFzdCA9IHRcbiAgICB9XG4gIH1cblxuICBnZXQgbWFpbiAoKSB7IHJldHVybiB0aGlzLl9tYWluIH1cbiAgZ2V0IG1lbW9yeSAoKSB7IHJldHVybiB0aGlzLl9tYWluLm1lbW9yeSB9XG5cbiAgZ2V0IGJsb2NrcyAoKSB7IHJldHVybiB0aGlzLl9ibG9ja3MgfVxuICBnZXQgbGFzdCAoKSB7IHJldHVybiB0aGlzLl9sYXN0IH1cbiAgZ2V0IGNvbGxlY3RfZGVsYXkgKCkgeyByZXR1cm4gdGhpcy5fY29sbGVjdF9kZWxheSB9XG5cbiAgZ2V0IGF2YWlsX21lbSAoKSB7IHJldHVybiB0aGlzLl9tYWluLnNpemUgfVxuXG4gIGdldCB1c2VkX21lbSAoKSB7XG4gICAgbGV0IHNpemUgPSAwXG4gICAgZm9yIChsZXQgYiBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgIGlmIChiLnVzZWQpIHtcbiAgICAgICAgc2l6ZSArPSBiLnNpemVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNpemVcbiAgfVxuXG4gIGdldCBmcmVlX21lbSAoKSB7IHJldHVybiB0aGlzLmF2YWlsX21lbSAtIHRoaXMudXNlZF9tZW0gfVxuXG4gIF9hbGxvYyAodHlwZSwgY291bnQpIHtcbiAgICBjb3VudCA9IGNvdW50IHx8IDFcbiAgICBsZXQgc2l6ZSA9IGRhdGFfdHlwZV9zaXplKHR5cGUpICogY291bnRcbiAgICBsZXQgbiA9IDBcblxuICAgIGZvciAobGV0IGIgb2YgdGhpcy5fYmxvY2tzKSB7XG4gICAgICBpZiAoYi5ib3R0b20gPiBuKSB7XG4gICAgICAgIG4gPSBiLmJvdHRvbVxuICAgICAgfVxuXG4gICAgICBpZiAoIWIudXNlZCAmJiBiLnNpemUgPj0gc2l6ZSkge1xuICAgICAgICBpZiAoYi5zaXplID09PSBzaXplKSB7XG4gICAgICAgICAgYi51c2VkID0gdHJ1ZVxuICAgICAgICAgIHJldHVybiBiLnRvcFxuICAgICAgICB9XG4gICAgICAgIGxldCBvYiA9IGIuYm90dG9tXG4gICAgICAgIGIuYm90dG9tID0gYi50b3AgKyBzaXplIC0gMVxuICAgICAgICBiLnNpemUgPSBzaXplXG4gICAgICAgIGIuY291bnQgPSBjb3VudFxuICAgICAgICBiLnVzZWQgPSB0cnVlXG5cbiAgICAgICAgdGhpcy5fYmxvY2tzLnB1c2goeyB0b3A6IGIuYm90dG9tICsgMSwgYm90dG9tOiBvYiwgc2l6ZTogb2IgLSAoYi5ib3R0b20gKyAxKSwgY291bnQsIHR5cGUsIHVzZWQ6IGZhbHNlIH0pXG5cbiAgICAgICAgcmV0dXJuIGIudG9wXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG4gKyBzaXplID4gdGhpcy5hdmFpbF9tZW0pIHtcbiAgICAgIF92bS5obHQoKVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICBsZXQgYWRkciA9IG4gKyAxXG5cbiAgICB0aGlzLl9ibG9ja3MucHVzaCh7IHRvcDogYWRkciwgYm90dG9tOiBhZGRyICsgc2l6ZSAtIDEsIHNpemUsIGNvdW50LCB0eXBlLCB1c2VkOiB0cnVlIH0pXG5cbiAgICBfdm0uZmlsbCgwLCBhZGRyLCBzaXplKVxuXG4gICAgcmV0dXJuIGFkZHJcbiAgfVxuXG4gIGFsbG9jICh0eXBlLCBjb3VudCwgLi4udmFsdWUpIHtcbiAgICBsZXQgYWRkciA9IHRoaXMuX2FsbG9jKHR5cGUsIGNvdW50KVxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgc2l6ZSA9IGRhdGFfdHlwZV9zaXplKHR5cGUpICogY291bnRcbiAgICAgIGxldCBhID0gYWRkclxuICAgICAgZm9yIChsZXQgdiBvZiB2YWx1ZSkge1xuICAgICAgICBfdm0ud3JpdGUodiwgYSwgdHlwZSlcbiAgICAgICAgYSArPSBzaXplXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZHJcbiAgfVxuXG4gIGZyZWUgKGFkZHIpIHtcbiAgICBsZXQgYiA9IHRoaXMuYmxvY2soYWRkcilcbiAgICBpZiAoYikge1xuICAgICAgYi51c2VkID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBibG9jayAoYWRkcikge1xuICAgIGZvciAobGV0IGIgb2YgdGhpcy5fYmxvY2tzKSB7XG4gICAgICBpZiAoYi50b3AgPT09IGFkZHIpIHtcbiAgICAgICAgcmV0dXJuIGJcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHR5cGUgKGFkZHIpIHtcbiAgICBsZXQgYiA9IHRoaXMuYmxvY2soYWRkcilcbiAgICByZXR1cm4gYiAmJiBiLnVzZWQgPyBiLnR5cGUgOiBudWxsXG4gIH1cblxuICBzaXplIChhZGRyKSB7XG4gICAgbGV0IGIgPSB0aGlzLmJsb2NrKGFkZHIpXG4gICAgcmV0dXJuIGIgJiYgYi51c2VkID8gYi5zaXplIDogLTFcbiAgfVxuXG4gIGNvbGxlY3QgKCkge1xuICAgIGxldCBuID0gW11cbiAgICBmb3IgKGxldCBiIG9mIHRoaXMuX2Jsb2Nrcykge1xuICAgICAgaWYgKCFiLnVzZWQpIHtcbiAgICAgICAgbi5wdXNoKGIpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2Jsb2NrcyA9IG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZHVtcCAoKSB7XG4gICAgY29uc29sZS5sb2coJ21lbW9yeSBfYmxvY2tzIGR1bXAuLi4nLCAnYXZhaWxfbWVtOicsIHByZXR0eUJ5dGVzKHRoaXMuYXZhaWxfbWVtKSwgJ3VzZWQ6JywgcHJldHR5Qnl0ZXModGhpcy51c2VkX21lbSksICdmcmVlOicsIHByZXR0eUJ5dGVzKHRoaXMuZnJlZV9tZW0pKVxuICAgIGZvciAobGV0IGIgb2YgdGhpcy5fYmxvY2tzKSB7XG4gICAgICBjb25zb2xlLmxvZygnJylcbiAgICAgIGNvbnNvbGUubG9nKCdvZmZzZXQ6JywgX3ZtLmhleChiLnRvcCwgMzIpLCAnc2l6ZTonLCB0aGlzLnNpemUoYi50b3ApLCAndHlwZTonLCB0aGlzLnR5cGUoYi50b3ApKVxuICAgICAgY29uc29sZS5sb2coaGV4eS5oZXh5KF92bS5tZW1fYnVmZmVyLCB7IG9mZnNldDogYi50b3AsIGxlbmd0aDogTWF0aC5taW4oMjU1LCBiLnNpemUpLCB3aWR0aDogMTYsIGNhcHM6ICd1cHBlcicsIGluZGVudDogMiB9KSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9tZW1vcnltYW5hZ2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJldHR5LWJ5dGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJldHR5LWJ5dGVzXCJcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGRlZmF1bHRzLCBydW50aW1lX2Vycm9yIH0gZnJvbSAnLi4vZ2xvYmFscy5qcydcbmltcG9ydCB7IGRhdGFfdHlwZV9zaXplIH0gZnJvbSAnLi9tZW1vcnkuanMnXG5cbmNsYXNzIFN0YWNrRW50cnkge1xuXG4gIGNvbnN0cnVjdG9yIChzdGFjaywgb2Zmc2V0ID0gMCwgbWF4ID0gMjU1LCB0eXBlID0gZGVmYXVsdHMudHlwZSwgc2l6ZSwgcm9sbGluZyA9IGZhbHNlKSB7XG4gICAgdGhpcy5fc3RhY2sgPSBzdGFja1xuXG4gICAgdGhpcy5fbWF4ID0gbWF4XG4gICAgdGhpcy5fc2l6ZSA9IHNpemUgfHwgZGF0YV90eXBlX3NpemUodHlwZSlcbiAgICB0aGlzLl90b3AgPSBvZmZzZXRcbiAgICB0aGlzLl9ib3R0b20gPSB0aGlzLl90b3AgKyB0aGlzLl9zaXplIC0gMVxuICAgIHRoaXMuX3R5cGUgPSB0eXBlXG4gICAgdGhpcy5fcm9sbGluZyA9IHJvbGxpbmcgfHwgZmFsc2VcblxuICAgIHRoaXMubGlzdFt0aGlzLl90b3BdID0gdGhpc1xuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX3B0ciA9IHRoaXMuX3RvcFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5saXN0W3RoaXMuX3RvcF0gPSB1bmRlZmluZWRcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX3N0YWNrLm1haW4gfVxuICBnZXQgc3RhY2sgKCkgeyByZXR1cm4gdGhpcy5fc3RhY2sgfVxuICBnZXQgbGlzdCAoKSB7IHJldHVybiB0aGlzLl9zdGFjay5saXN0IH1cblxuICBnZXQgdG9wICgpIHsgcmV0dXJuIHRoaXMuX3RvcCB9XG4gIGdldCBib3R0b20gKCkgeyByZXR1cm4gdGhpcy5fYm90dG9tIH1cbiAgZ2V0IHNpemUgKCkgeyByZXR1cm4gdGhpcy5fc2l6ZSB9XG5cbiAgZ2V0IG1heCAoKSB7IHJldHVybiB0aGlzLl9tYXggfVxuICBnZXQgcHRyICgpIHsgcmV0dXJuIHRoaXMuX3B0ciB9XG5cbiAgZ2V0IHRvdGFsX3NpemUgKCkgeyByZXR1cm4gdGhpcy5fbWF4ICogdGhpcy5fc2l6ZSB9XG4gIGdldCB1c2VkICgpIHsgcmV0dXJuIE1hdGgudHJ1bmMoKHRoaXMuX3B0ciAtIHRoaXMuX3RvcCkgLyB0aGlzLl9zaXplKSB9XG4gIGdldCBhdmFpbCAoKSB7IHJldHVybiB0aGlzLnRvdGFsX3NpemUgLSB0aGlzLnVzZWQgfVxuXG4gIHB1c2ggKC4uLnZhbHVlKSB7XG4gICAgbGV0IHN6ID0gdGhpcy5fc2l6ZVxuICAgIGxldCB0ID0gdGhpcy5fdHlwZVxuICAgIGxldCB0b3AgPSB0aGlzLl90b3BcbiAgICBsZXQgYm90dG9tID0gdGhpcy5fYm90dG9tXG4gICAgbGV0IHJvbGxpbmcgPSB0aGlzLl9yb2xsaW5nXG4gICAgZm9yIChsZXQgdiBvZiB2YWx1ZSkge1xuICAgICAgaWYgKHJvbGxpbmcgJiYgdGhpcy5fcHRyID49IGJvdHRvbSkge1xuICAgICAgICB0aGlzLmNvcHkodG9wICsgc3osIHRvcCwgYm90dG9tIC0gc3opXG4gICAgICAgIHRoaXMuX3B0ciAtPSBzelxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3B0ciArIHN6IDwgYm90dG9tKSB7XG4gICAgICAgIHRoaXMud3JpdGUodiwgdGhpcy5fcHRyLCB0KVxuICAgICAgICB0aGlzLl9wdHIgKz0gc3pcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBydW50aW1lX2Vycm9yKDB4MDMpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcG9wICgpIHtcbiAgICBpZiAodGhpcy5fcHRyID4gdGhpcy5fdG9wKSB7XG4gICAgICB0aGlzLl9wdHIgLT0gdGhpcy5fc2l6ZVxuICAgICAgcmV0dXJuIHRoaXMucmVhZCh0aGlzLl9wdHIsIHRoaXMuX3R5cGUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnVudGltZV9lcnJvcigweDAyKVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWNrIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHRoaXMuX21haW4gPSBtYWluXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9saXN0ID0ge31cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX2xpc3QgPSB7fVxuICB9XG5cbiAgZ2V0IGxpc3QgKCkgeyByZXR1cm4gdGhpcy5fbGlzdCB9XG5cbiAgbmV3IChvZmZzZXQsIG1heCwgdHlwZSwgc2l6ZSwgcm9sbGluZykge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgaWYgKCFzKSB7XG4gICAgICByZXR1cm4gbmV3IFN0YWNrRW50cnkodGhpcywgLi4uYXJndW1lbnRzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgcHVzaCAob2Zmc2V0LCAuLi52YWx1ZXMpIHtcbiAgICBsZXQgcyA9IHRoaXMuX2xpc3Rbb2Zmc2V0XVxuICAgIGlmIChzKSB7XG4gICAgICByZXR1cm4gcy5wdXNoKC4uLnZhbHVlcylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDQpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIHBvcCAob2Zmc2V0KSB7XG4gICAgbGV0IHMgPSB0aGlzLl9saXN0W29mZnNldF1cbiAgICBpZiAocykge1xuICAgICAgcmV0dXJuIHMucG9wKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDQpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIHVzZWQgKG9mZnNldCkge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBzLnVzZWRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDQpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIG1heCAob2Zmc2V0KSB7XG4gICAgbGV0IHMgPSB0aGlzLl9saXN0W29mZnNldF1cbiAgICBpZiAocykge1xuICAgICAgcmV0dXJuIHMubWF4XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnVudGltZV9lcnJvcigweDA0KVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBzaXplIChvZmZzZXQpIHtcbiAgICBsZXQgcyA9IHRoaXMuX2xpc3Rbb2Zmc2V0XVxuICAgIGlmIChzKSB7XG4gICAgICByZXR1cm4gcy5zaXplXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnVudGltZV9lcnJvcigweDA0KVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICB0eXBlIChvZmZzZXQpIHtcbiAgICBsZXQgcyA9IHRoaXMuX2xpc3Rbb2Zmc2V0XVxuICAgIGlmIChzKSB7XG4gICAgICByZXR1cm4gcy50eXBlXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnVudGltZV9lcnJvcigweDA0KVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL3N0YWNrLmpzIiwiaW1wb3J0IHsgcnVudGltZV9lcnJvciB9IGZyb20gJy4uL2dsb2JhbHMuanMnXG5cbmNvbnN0IF9JTlRfUlVOTklORyA9IDFcbmNvbnN0IF9JTlRfUEFVU0VEID0gMlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcnJ1cHQge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgdGhpcy5fbGlzdCA9IHt9XG4gICAgdGhpcy5fbWFpbiA9IG1haW5cbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLnN0b3BfYWxsKClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICBnZXQgbWFpbiAoKSB7IHJldHVybiB0aGlzLl9tYWluIH1cbiAgZ2V0IG1lbW9yeSAoKSB7IHJldHVybiB0aGlzLl9tYWluLm1lbW9yeSB9XG5cbiAgZmluZCAobmFtZSkgeyByZXR1cm4gdGhpcy5fbGlzdFtuYW1lXSB9XG5cbiAgY3JlYXRlIChuYW1lLCBmbiwgbXMgPSA1MDApIHtcbiAgICBpZiAoIXRoaXMuZmluZChuYW1lKSkge1xuICAgICAgdGhpcy5fbGlzdFtuYW1lXSA9IHsgbmFtZSwgc3RhdHVzOiBfSU5UX1JVTk5JTkcsIG1zLCBmbiwgbGFzdDogMCB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnVudGltZV9lcnJvcigweDA2KVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcmVzdW1lIChuYW1lKSB7XG4gICAgaWYgKHRoaXMuZmluZChuYW1lKSkge1xuICAgICAgdGhpcy5fbGlzdFtuYW1lXS5zdGF0dXMgPSBfSU5UX1JVTk5JTkdcbiAgICAgIHRoaXMuX2xpc3RbbmFtZV0ubGFzdCA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnVudGltZV9lcnJvcigweDA3KVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcGF1c2UgKG5hbWUpIHtcbiAgICBpZiAodGhpcy5maW5kKG5hbWUpKSB7XG4gICAgICB0aGlzLl9saXN0W25hbWVdLnN0YXR1cyA9IF9JTlRfUEFVU0VEXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnVudGltZV9lcnJvcigweDA3KVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RvcCAobmFtZSkge1xuICAgIGlmICh0aGlzLmZpbmQobmFtZSkpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9saXN0W25hbWVdXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnVudGltZV9lcnJvcigweDA3KVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RvcF9hbGwgKCkge1xuICAgIGZvciAobGV0IGsgaW4gdGhpcy5fbGlzdCkge1xuICAgICAgdGhpcy5zdG9wKGspXG4gICAgfVxuICAgIHRoaXMuX2xpc3QgPSB7fVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgZm9yIChsZXQgayBpbiB0aGlzLl9saXN0KSB7XG4gICAgICBsZXQgaSA9IHRoaXMuX2xpc3Rba11cbiAgICAgIGlmIChpLnN0YXR1cyA9PT0gX0lOVF9SVU5OSU5HKSB7XG4gICAgICAgIGxldCBkZWxheSA9IHQgLSBpLmxhc3RcbiAgICAgICAgaWYgKGRlbGF5ID49IGkubXMpIHtcbiAgICAgICAgICBpLmZuLmFwcGx5KHRoaXMsIFtkZWxheSAtIGkubXNdKVxuICAgICAgICAgIGkubGFzdCA9IHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vaW50ZXJydXB0LmpzIiwiaW1wb3J0IFJhaW5ib3cgZnJvbSAnLi9yYWluYm93LmpzJ1xuaW1wb3J0IEZvbnpvIGZyb20gJy4vZm9uem8uanMnXG5pbXBvcnQgT3J3ZWxsIGZyb20gJy4vb3J3ZWxsLmpzJ1xuaW1wb3J0IEJlYWdsZSBmcm9tICcuL2JlYWdsZS5qcydcbmltcG9ydCBWaW9sZXQgZnJvbSAnLi92aW9sZXQuanMnXG5pbXBvcnQgeyBPdmVybGF5cyB9IGZyb20gJy4uL292ZXJsYXlzLmpzJ1xuXG5pbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1aWRlbyBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgnZ3VpZGVvJywgWyd3aWR0aCcsICdoZWlnaHQnLCAnc2NhbGUnXSlcblxuICAgIHRoaXMuX3JlbmRlcmVyID0gbmV3IFBJWEkuYXV0b0RldGVjdFJlbmRlcmVyKHRoaXMuX3dpZHRoICogdGhpcy5fc2NhbGUsIHRoaXMuX2hlaWdodCAqIHRoaXMuX3NjYWxlLCB7fSlcbiAgICB0aGlzLl9yZW5kZXJlci52aWV3LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcuc3R5bGUuY3Vyc29yID0gJ25vbmUnXG4gICAgdGhpcy5fcmVuZGVyZXIudmlldy5pZCA9ICdndWlkZW8nXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9yZW5kZXJlci52aWV3KVxuXG4gICAgdGhpcy5fc3RhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKVxuXG4gICAgdGhpcy5fb25SZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbigncmVzaXplJywgdGhpcy5fb25SZXNpemUpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLm9mZigncmVzaXplJywgdGhpcy5fb25SZXNpemUpXG5cbiAgICB0aGlzLl9yYWluYm93LmRlc3Ryb3koKVxuICAgIHRoaXMuX2ZvbnpvLmRlc3Ryb3koKVxuICAgIHRoaXMuX29yd2VsbC5kZXN0cm95KClcbiAgICB0aGlzLl9iZWFnbGUuZGVzdHJveSgpXG4gICAgdGhpcy5fdmlvbGV0LmRlc3Ryb3koKVxuICAgIHRoaXMuX292ZXJsYXlzLmRlc3Ryb3koKVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICBjcmVhdGVDaGlwcyAoKSB7XG4gICAgbGV0IG1haW4gPSB0aGlzLl9tYWluXG5cbiAgICB0aGlzLl9yYWluYm93ID0gbmV3IFJhaW5ib3cobWFpbilcbiAgICB0aGlzLl9mb256byA9IG5ldyBGb256byhtYWluKVxuICAgIHRoaXMuX29yd2VsbCA9IG5ldyBPcndlbGwobWFpbilcbiAgICB0aGlzLl9iZWFnbGUgPSBuZXcgQmVhZ2xlKG1haW4pXG4gICAgdGhpcy5fdmlvbGV0ID0gbmV3IFZpb2xldChtYWluKVxuXG4gICAgdGhpcy5fb3ZlcmxheXMgPSBuZXcgT3ZlcmxheXMobWFpbiwge1xuICAgICAgc2NyZWVuOiB7IHNjYWxlOiB0aGlzLl9zY2FsZSB9LFxuICAgICAgc2NhbmxpbmVzOiB7fSxcbiAgICAgIHNjYW5saW5lOiB7fSxcbiAgICAgIHJnYjoge30sXG4gICAgICBub2lzZXM6IHt9LFxuICAgICAgY3J0OiB7fSxcbiAgICAgIG1vbml0b3I6IHt9LFxuICAgIH0pXG5cbiAgICB0aGlzLl9zY3JlZW4gPSB0aGlzLl9vdmVybGF5cy5zY3JlZW5cblxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICB0aGlzLl9pbWFnZURhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gICAgdGhpcy5fcGl4ZWxzID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2ltYWdlRGF0YS5kYXRhLmJ1ZmZlcilcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcblxuICAgIHRoaXMuX2ZvcmNlX3JlZHJhdyA9IGZhbHNlXG4gICAgdGhpcy5fZm9yY2VfZmxpcCA9IGZhbHNlXG5cbiAgICB0aGlzLl9yYWluYm93LnJlc2V0KClcbiAgICB0aGlzLl9mb256by5yZXNldCgpXG4gICAgdGhpcy5fb3J3ZWxsLnJlc2V0KClcbiAgICB0aGlzLl9iZWFnbGUucmVzZXQoKVxuICAgIHRoaXMuX3Zpb2xldC5yZXNldCgpXG4gICAgdGhpcy5fb3ZlcmxheXMucmVzZXQoKVxuXG4gICAgdGhpcy5jbGVhcigpXG5cbiAgICByZXR1cm4gdGhpcy5yZXNpemUoKVxuICB9XG5cbiAgZ2V0IHNjYWxlICgpIHsgcmV0dXJuIHRoaXMuX3NjYWxlIH1cbiAgc2V0IHNjYWxlICh2YWx1ZSkge1xuICAgIHRoaXMuX3NjYWxlID0gdmFsdWVcbiAgfVxuXG4gIGdldCByYWluYm93ICgpIHsgcmV0dXJuIHRoaXMuX3JhaW5ib3cgfVxuICBnZXQgZm9uem8gKCkgeyByZXR1cm4gdGhpcy5fZm9uem8gfVxuICBnZXQgb3J3ZWxsICgpIHsgcmV0dXJuIHRoaXMuX29yd2VsbCB9XG4gIGdldCBiZWFnbGUgKCkgeyByZXR1cm4gdGhpcy5fYmVhZ2xlIH1cbiAgZ2V0IHZpb2xldCAoKSB7IHJldHVybiB0aGlzLl92aW9sZXQgfVxuXG4gIGdldCBvdmVybGF5cyAoKSB7IHJldHVybiB0aGlzLl9vdmVybGF5cyB9XG5cbiAgZ2V0IHN0YWdlICgpIHsgcmV0dXJuIHRoaXMuX3N0YWdlIH1cbiAgZ2V0IHJlbmRlcmVyICgpIHsgcmV0dXJuIHRoaXMuX3JlbmRlcmVyIH1cblxuICBnZXQgc2NyZWVuICgpIHsgcmV0dXJuIHRoaXMuX3NjcmVlbiB9XG4gIGdldCBzcHJpdGUgKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuLnNwcml0ZSB9XG4gIGdldCB0ZXh0dXJlICgpIHsgcmV0dXJuIHRoaXMuc3ByaXRlLnRleHR1cmUgfVxuICBnZXQgY2FudmFzQnVmZmVyICgpIHsgcmV0dXJuIHRoaXMuX3NjcmVlbi5jYW52YXNCdWZmZXIgfVxuICBnZXQgY2FudmFzICgpIHsgcmV0dXJuIHRoaXMuY2FudmFzQnVmZmVyLmNhbnZhcyB9XG4gIGdldCBjb250ZXh0ICgpIHsgcmV0dXJuIHRoaXMuX3NjcmVlbi5jb250ZXh0IH1cbiAgZ2V0IGltYWdlRGF0YSAoKSB7IHJldHVybiB0aGlzLl9pbWFnZURhdGEgfVxuICBnZXQgcGl4ZWxzICgpIHsgcmV0dXJuIHRoaXMuX3BpeGVscyB9XG5cbiAgZ2V0IGZvcmNlX3JlZHJhdyAoKSB7IHJldHVybiB0aGlzLl9mb3JjZV9yZWRyYXcgfVxuICBzZXQgZm9yY2VfcmVkcmF3ICh2YWx1ZSkgeyB0aGlzLl9mb3JjZV9yZWRyYXcgPSB2YWx1ZSB9XG5cbiAgZ2V0IGZvcmNlX2ZsaXAgKCkgeyByZXR1cm4gdGhpcy5fZm9yY2VfZmxpcCB9XG4gIHNldCBmb3JjZV9mbGlwICh2YWx1ZSkgeyB0aGlzLl9mb3JjZV9mbGlwID0gdmFsdWUgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICB0aGlzLl9yYWluYm93LnRpY2sodClcbiAgICB0aGlzLl9mb256by50aWNrKHQpXG4gICAgdGhpcy5fb3J3ZWxsLnRpY2sodClcbiAgICB0aGlzLl9iZWFnbGUudGljayh0KVxuICAgIHRoaXMuX3Zpb2xldC50aWNrKHQpXG4gICAgdGhpcy5fb3ZlcmxheXMudGljayh0KVxuXG4gICAgaWYgKHRoaXMuX2ZvcmNlX3JlZHJhdykge1xuICAgICAgdGhpcy5yZWRyYXcoKVxuICAgICAgdGhpcy5fZm9yY2VfcmVkcmF3ID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZWRyYXcgKCkge1xuICAgIGlmICh0aGlzLl9mb3JjZV9mbGlwKSB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgICAgbGV0IHNpemUgPSB0aGlzLl9zaXplXG4gICAgICBjb25zdCBwYWxldHRlID0gdGhpcy5fcmFpbmJvd1xuICAgICAgY29uc3QgcGl4ZWxzID0gdGhpcy5fcGl4ZWxzXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIHBpeGVsc1tpXSA9IHBhbGV0dGUuY29sb3IoZGF0YVtpXSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLl9pbWFnZURhdGEsIDAsIDApXG5cbiAgICAgIHRoaXMudGV4dHVyZS51cGRhdGUoKVxuXG4gICAgICB0aGlzLmVtaXQoJ2ZsaXAnKVxuXG4gICAgICB0aGlzLl9mb3JjZV9mbGlwID0gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3JlZHJhdycpXG5cbiAgICB0aGlzLl9yZW5kZXJlci5yZW5kZXIodGhpcy5fc3RhZ2UpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgY2VudGVyICgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci52aWV3LnN0eWxlLmxlZnQgPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNSAtIHRoaXMuX3JlbmRlcmVyLndpZHRoICogMC41ICsgJ3B4J1xuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcuc3R5bGUudG9wID0gd2luZG93LmlubmVySGVpZ2h0ICogMC41IC0gdGhpcy5fcmVuZGVyZXIuaGVpZ2h0ICogMC41ICsgJ3B4J1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXNpemUgKCkge1xuICAgIHRoaXMuX292ZXJsYXlzLnJlc2l6ZSgpXG4gICAgdGhpcy5jZW50ZXIoKVxuICAgIHRoaXMudGVzdCgpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHBpeGVsICh4LCB5LCBjKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcblxuICAgIGxldCBpXG4gICAgaWYgKF8uaXNOdW1iZXIoYykpIHtcbiAgICAgIGkgPSB0aGlzLnRvSW5kZXgoeCwgeSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpID0geFxuICAgICAgYyA9IHlcbiAgICB9XG5cbiAgICBpZiAoZGF0YVtpXSAhPT0gYykge1xuICAgICAgZGF0YVtpXSA9IGMgfHwgMFxuICAgIH1cblxuICAgIHJldHVybiBkYXRhW2ldXG4gIH1cblxuICBibGl0IChhZGRyLCB4LCB5LCB3LCBoKSB7XG4gICAgY29uc3QgbWVtID0gdGhpcy5tZW1vcnkuZGF0YVxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgY29uc3QgdG9wID0gdGhpcy5fdG9wXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLl93aWR0aFxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5yYWluYm93LmNvdW50XG5cbiAgICBsZXQgc2kgPSBhZGRyXG4gICAgZm9yIChsZXQgYnkgPSAwOyBieSA8IGg7IGJ5KyspIHtcbiAgICAgIGxldCB0aSA9IHRvcCArICgoeSArIGJ5KSAqIHdpZHRoICsgeClcbiAgICAgIGZvciAobGV0IGJ4ID0gMDsgYnggPCB3OyBieCsrKSB7XG4gICAgICAgIGxldCBjID0gbWVtW3NpKytdXG4gICAgICAgIGRhdGFbdGldID0gYyA8IGNvdW50ID8gYyA6IGRhdGFbdGldXG4gICAgICAgIHRpKytcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUodHJ1ZSlcbiAgfVxuXG4gIGJsaXRfbWFzayAoYWRkciwgeCwgeSwgdywgaCwgZmcgPSAxNSwgYmcgPSAtMSkge1xuICAgIGNvbnN0IG1lbSA9IHRoaXMubWVtb3J5LmRhdGFcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGNvbnN0IHRvcCA9IHRoaXMuX3RvcFxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fd2lkdGhcbiAgICBjb25zdCBjb3VudCA9IHRoaXMucmFpbmJvdy5jb3VudFxuXG4gICAgbGV0IHNpID0gYWRkclxuICAgIGZvciAobGV0IGJ5ID0gMDsgYnkgPCBoOyBieSsrKSB7XG4gICAgICBsZXQgdGkgPSB0b3AgKyAoKHkgKyBieSkgKiB3aWR0aCArIHgpXG4gICAgICBmb3IgKGxldCBieCA9IDA7IGJ4IDwgdzsgYngrKykge1xuICAgICAgICBsZXQgYyA9IG1lbVtzaSsrXVxuICAgICAgICBkYXRhW3RpXSA9IGMgPCBjb3VudCA/IGZnIDogYmcgPT09IC0xID8gZGF0YVt0aV0gOiBiZ1xuICAgICAgICB0aSsrXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKHRydWUpXG4gIH1cblxuICBibGl0X2FycmF5IChhcnIsIHgsIHksIG1hc2sgPSB7fSkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgY29uc3QgdG9wID0gdGhpcy5fdG9wXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLl93aWR0aFxuXG4gICAgbGV0IHcgPSBfLmZpcnN0KGFycikubGVuZ3RoXG4gICAgbGV0IGggPSBhcnIubGVuZ3RoXG5cbiAgICBmb3IgKGxldCBieSA9IDA7IGJ5IDwgaDsgYnkrKykge1xuICAgICAgbGV0IHRpID0gdG9wICsgKChieSArIHkpICogd2lkdGggKyB4KVxuICAgICAgZm9yIChsZXQgYnggPSAwOyBieCA8IHc7IGJ4KyspIHtcbiAgICAgICAgZGF0YVt0aSsrXSA9IG1hc2tbYXJyW2J5XV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb3B5X3JlY3QgKHgsIHksIHcsIGgsIGFkZHIpIHtcbiAgICBjb25zdCBtZW0gPSB0aGlzLm1lbW9yeS5kYXRhXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBjb25zdCB0b3AgPSB0aGlzLl90b3BcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuX3dpZHRoXG5cbiAgICBsZXQgdGkgPSBhZGRyXG4gICAgZm9yIChsZXQgYnkgPSAwOyBieSA8IGg7IGJ5KyspIHtcbiAgICAgIGxldCBzaSA9IHRvcCArICgoYnkgKyB5KSAqIHdpZHRoICsgeClcbiAgICAgIGZvciAobGV0IGJ4ID0gMDsgYnggPCB3OyBieCsrKSB7XG4gICAgICAgIG1lbVt0aSsrXSA9IGRhdGFbc2krK11cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGlcbiAgfVxuXG4gIHRvX2FycmF5ICh4LCB5LCB3LCBoLCBtYXNrID0ge30pIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGNvbnN0IHRvcCA9IHRoaXMuX3RvcFxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fd2lkdGhcblxuICAgIGxldCBhcnIgPSBbXVxuXG4gICAgZm9yIChsZXQgYnkgPSAwOyBieSA8IGg7IGJ5KyspIHtcbiAgICAgIGxldCB0aSA9IHRvcCArICgoYnkgKyB5KSAqIHdpZHRoICsgeClcbiAgICAgIGxldCBzID0gJydcbiAgICAgIGZvciAobGV0IGJ4ID0gMDsgYnggPCB3OyBieCsrKSB7XG4gICAgICAgIHMgKz0gbWFza1tkYXRhW3RpKytdXVxuICAgICAgfVxuICAgICAgYXJyLnB1c2gocylcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyXG4gIH1cblxuICB0b0luZGV4ICh4LCB5KSB7IHJldHVybiB5ICogdGhpcy5fd2lkdGggKyB4IH1cblxuICBmcm9tSW5kZXggKGkpIHtcbiAgICBsZXQgeSA9IE1hdGgubWluKE1hdGgudHJ1bmMoaSAvIHRoaXMuX3dpZHRoKSwgdGhpcy5faGVpZ2h0IC0gMSlcbiAgICBsZXQgeCA9IGkgLSB5XG4gICAgcmV0dXJuIHsgeCwgeSB9XG4gIH1cblxuICBzY3JvbGwgKHgsIHkpIHtcbiAgICBsZXQgbHcgPSB5ICogdGhpcy5fd2lkdGhcbiAgICBsZXQgcyA9IGx3XG4gICAgbGV0IGUgPSB0aGlzLl9zaXplIC0gbHdcbiAgICB0aGlzLl9kYXRhLmNvcHkocywgMCwgZSAtIHMpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGxvYWRUZXh0dXJlIChmaWxlbmFtZSkge1xuICAgIGxldCB0ZXggPSBQSVhJLlRleHR1cmUuZnJvbUltYWdlKCcuL2J1aWxkLycgKyByZXF1aXJlKCdmaWxlP25hbWU9YXNzZXRzL1tuYW1lXS5bZXh0XSEuLi8uLi8uLi9hc3NldHMvaW1ncy8nICsgZmlsZW5hbWUpLCB1bmRlZmluZWQsIFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVClcbiAgICB0ZXgub24oJ3VwZGF0ZScsICgpID0+IHRoaXMudXBkYXRlKCkpXG4gICAgcmV0dXJuIHRleFxuICB9XG5cbiAgdGVzdCAoKSB7XG4gICAgdGhpcy5waXhlbCgxMCwgMTAsIDEzKVxuICAgIHRoaXMucGl4ZWwoMjAsIDEwLCA1KVxuICAgIHRoaXMucGl4ZWwoMzAsIDEwLCA2KVxuXG4gICAgdGhpcy5fZm9uem8udGVzdCgpXG5cbiAgICAvLyBsZXQgc2NyZWVuID0gdGhpcy5fb3ZlcmxheXMuc2NyZWVuLnNwcml0ZVxuICAgIC8vIHNjcmVlbi5yZW1vdmVDaGlsZHJlbigpXG5cbiAgICAvLyBsZXQgdCA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLmxvYWRUZXh0dXJlKCd0ZXN0LnBuZycpKVxuICAgIC8vIHNjcmVlbi5hZGRDaGlsZCh0KVxuXG4gICAgLy8gbGV0IHRleHQgPSBuZXcgUElYSS5UZXh0KCdUaGlzIGlzIGEgcGl4aSB0ZXh0JywgeyBmb250OiAnMjBweCBcIkdsYXNzIFRUWSBWVDIyMFwiJywgZmlsbDogMHhGRkZGRkYgfSlcbiAgICAvLyB0ZXh0LnRleHR1cmUuYmFzZVRleHR1cmUuc2NhbGVNb2RlID0gUElYSS5TQ0FMRV9NT0RFUy5ORUFSRVNUXG4gICAgLy8gdGV4dC5jb250ZXh0LmNhbnZhcy5zdHlsZVsnZm9udC1zbW9vdGhpbmcnXSA9ICduZXZlcidcbiAgICAvLyB0ZXh0LmNvbnRleHQuY2FudmFzLnN0eWxlWyctd2Via2l0LWZvbnQtc21vb3RoaW5nJ10gPSAnbm9uZSdcbiAgICAvLyB0ZXh0LmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2VcbiAgICAvLyB0ZXh0LmNvbnRleHQuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnaGlkZGVuJ1xuICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dC5jb250ZXh0LmNhbnZhcylcbiAgICAvLyB0ZXh0LnVwZGF0ZVRleHQoKVxuICAgIC8vIHNjcmVlbi5hZGRDaGlsZCh0ZXh0KVxuICAgIC8vIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dC5jb250ZXh0LmNhbnZhcylcblxuICAgIHRoaXMudXBkYXRlKHRydWUpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL2d1aWRlby5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuY29uc3QgczMyID0gbmV3IFVpbnQzMkFycmF5KDQpXG5jb25zdCBzOCA9IG5ldyBVaW50OEFycmF5KHMzMi5idWZmZXIpXG5jb25zdCB0MzIgPSBuZXcgVWludDMyQXJyYXkoNClcbmNvbnN0IHQ4ID0gbmV3IFVpbnQ4QXJyYXkodDMyLmJ1ZmZlcilcblxubGV0IHJldmVyc2UgPSB4ID0+IHtcbiAgczMyWzBdID0geFxuICB0OFswXSA9IHM4WzNdXG4gIHQ4WzFdID0gczhbMl1cbiAgdDhbMl0gPSBzOFsxXVxuICB0OFszXSA9IHM4WzBdXG4gIHJldHVybiB0MzJbMF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFpbmJvdyBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgncmFpbmJvdycsIFsnY291bnQnXSlcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcblxuICAgIHRoaXMuX0xFID0gdGhpcy5tYWluLkxFXG5cbiAgICB0aGlzLmNvbG9yKDAsIDB4MDAwMDAwZmYpXG4gICAgdGhpcy5jb2xvcigxLCAweDgwMDAwMGZmKVxuICAgIHRoaXMuY29sb3IoMiwgMHgwMDgwMDBmZilcbiAgICB0aGlzLmNvbG9yKDMsIDB4ODA4MDAwZmYpXG4gICAgdGhpcy5jb2xvcig0LCAweDAwMDA4MGZmKVxuICAgIHRoaXMuY29sb3IoNSwgMHg4MDAwODBmZilcbiAgICB0aGlzLmNvbG9yKDYsIDB4MDA4MDgwZmYpXG4gICAgdGhpcy5jb2xvcig3LCAweGMwYzBjMGZmKVxuICAgIHRoaXMuY29sb3IoOCwgMHg4MDgwODBmZilcbiAgICB0aGlzLmNvbG9yKDksIDB4ZmYwMDAwZmYpXG4gICAgdGhpcy5jb2xvcigxMCwgMHgwMGZmMDBmZilcbiAgICB0aGlzLmNvbG9yKDExLCAweGZmZmYwMGZmKVxuICAgIHRoaXMuY29sb3IoMTIsIDB4MDAwMGZmZmYpXG4gICAgdGhpcy5jb2xvcigxMywgMHhmZjAwZmZmZilcbiAgICB0aGlzLmNvbG9yKDE0LCAweDAwZmZmZmZmKVxuICAgIHRoaXMuY29sb3IoMTUsIDB4ZmZmZmZmZmYpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0IGJsYWNrICgpIHsgcmV0dXJuIDAgfVxuICBnZXQgZGtyZWQgKCkgeyByZXR1cm4gMSB9XG4gIGdldCBka2dyZWVuICgpIHsgcmV0dXJuIDIgfVxuICBnZXQgZGt5ZWxsb3cgKCkgeyByZXR1cm4gMyB9XG4gIGdldCBka2JsdWUgKCkgeyByZXR1cm4gNCB9XG4gIGdldCBka2Z1Y2hzaWEgKCkgeyByZXR1cm4gNSB9XG4gIGdldCB0ZWFsICgpIHsgcmV0dXJuIDYgfVxuICBnZXQgZ3JleSAoKSB7IHJldHVybiA3IH1cbiAgZ2V0IGRrZ3JleSAoKSB7IHJldHVybiA4IH1cbiAgZ2V0IHJlZCAoKSB7IHJldHVybiA5IH1cbiAgZ2V0IGxpbWUgKCkgeyByZXR1cm4gMTAgfVxuICBnZXQgeWVsbG93ICgpIHsgcmV0dXJuIDExIH1cbiAgZ2V0IGJsdWUgKCkgeyByZXR1cm4gMTIgfVxuICBnZXQgZnVjaHNpYSAoKSB7IHJldHVybiAxMyB9XG4gIGdldCBjeWFuICgpIHsgcmV0dXJuIDE0IH1cbiAgZ2V0IHdoaXRlICgpIHsgcmV0dXJuIDE1IH1cblxuICB0b19yZWQgKHJnYmEpIHsgcmV0dXJuIHRoaXMucmdiYShyZ2JhKS5yIH1cblxuICB0b19ncmVlbiAocmdiYSkgeyByZXR1cm4gdGhpcy5yZ2JhKHJnYmEpLmcgfVxuXG4gIHRvX2JsdWUgKHJnYmEpIHsgcmV0dXJuIHRoaXMucmdiYShyZ2JhKS5iIH1cblxuICB0b19hbHBoYSAocmdiYSkgeyByZXR1cm4gdGhpcy5yZ2JhKHJnYmEpLmEgfVxuXG4gIHNwbGl0IChyZ2JhKSB7XG4gICAgY29uc3QgTEUgPSB0aGlzLl9MRVxuICAgIHJldHVybiB7XG4gICAgICByOiByZ2JhID4+IChMRSA/IDI0IDogMCkgJiAweEZGLFxuICAgICAgZzogcmdiYSA+PiAoTEUgPyAxNiA6IDgpICYgMHhGRixcbiAgICAgIGI6IHJnYmEgPj4gKExFID8gOCA6IDE2KSAmIDB4RkYsXG4gICAgICBhOiByZ2JhID4+IChMRSA/IDAgOiAyNCkgJiAweEZGLFxuICAgIH1cbiAgfVxuXG4gIHJnYmEgKHIsIGcsIGIsIGEpIHtcbiAgICBsZXQgYyA9IGcgPyBhIDw8IDI0IHwgciA8PCAxNiB8IGcgPDwgOCB8IGIgOiByXG4gICAgcmV0dXJuIHRoaXMuX0xFID8gcmV2ZXJzZShjKSA6IGNcbiAgfVxuXG4gIGNvbG9yIChjLCByLCBnLCBiLCBhKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBpZiAocikge1xuICAgICAgZGF0YVtjXSA9IHRoaXMucmdiYShyLCBnLCBiLCBhKVxuICAgIH1cbiAgICByZXR1cm4gZGF0YVtjXVxuICB9XG5cbiAgZmluZF9jb2xvciAociwgZywgYiwgYSkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgbGV0IGNvbG9yID0gdGhpcy5yZ2JhKHIsIGcsIGIsIGEpXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLl9jb3VudDsgYysrKSB7XG4gICAgICBpZiAoZGF0YVtjXSA9PT0gY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIGNcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL3JhaW5ib3cuanMiLCJpbXBvcnQgeyBFbWl0dGVyIH0gZnJvbSAnLi4vLi4vZW1pdHRlci5qcydcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSAnLi4vLi4vdXRpbHMuanMnXG5pbXBvcnQgeyBkYXRhX3R5cGVfc2l6ZXMsIGRhdGFfdHlwZV9mbnMgfSBmcm9tICcuLi9tZW1vcnkuanMnXG5cbnZhciBjdXJyZW50T2Zmc2V0ID0gMFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlwIGV4dGVuZHMgRW1pdHRlciB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLl9tYWluID0gbWFpblxuXG4gICAgdGhpcy5fZGF0YSA9IG51bGxcbiAgICB0aGlzLl93aWR0aCA9IDBcbiAgICB0aGlzLl9oZWlnaHQgPSAwXG4gICAgdGhpcy5fY291bnQgPSAwXG4gICAgdGhpcy5fc2l6ZSA9IDBcbiAgICB0aGlzLl90b3AgPSAwXG4gICAgdGhpcy5fYm90dG9tID0gMFxuICAgIHRoaXMuX2RhdGFfc2l6ZSA9IDBcbiAgfVxuXG4gIGluaXQgKG5hbWUgPSAnJywga2V5cyA9IFtdLCBub2RhdGEgPSBmYWxzZSkge1xuICAgIGxldCBtYWluID0gdGhpcy5fbWFpblxuXG4gICAgZm9yIChsZXQgayBvZiBrZXlzKSB7XG4gICAgICB0aGlzWydfJyArIGtdID0gbWFpbi5kZWZhdWx0cyhuYW1lICsgJy4nICsgaylcbiAgICB9XG5cbiAgICBpZiAoIW5vZGF0YSkge1xuICAgICAgdGhpcy5fY291bnQgPSB0aGlzLl9jb3VudCB8fCAxXG4gICAgICB0aGlzLl93aWR0aCA9IHRoaXMuX3dpZHRoIHx8IDFcbiAgICAgIHRoaXMuX2hlaWdodCA9IHRoaXMuX2hlaWdodCB8fCAxXG5cbiAgICAgIHRoaXMuX2RhdGFfZm9ybWF0ID0gbWFpbi5kZWZhdWx0cyhuYW1lICsgJy5kYXRhX2Zvcm1hdCcpIHx8ICdpOCdcbiAgICAgIHRoaXMuX2RhdGFfc2l6ZSA9IG1haW4uZGVmYXVsdHMobmFtZSArICcuZGF0YV9zaXplJykgfHwgMVxuICAgICAgdGhpcy5fZGF0YV9zaXplID0gXy5pc1N0cmluZyh0aGlzLl9kYXRhX2Zvcm1hdCkgPyBkYXRhX3R5cGVfc2l6ZXNbdGhpcy5fZGF0YV9mb3JtYXRdIDogdGhpcy5fZGF0YV9zaXplXG4gICAgICB0aGlzLl9jZWxsX3NpemUgPSB0aGlzLl93aWR0aCAqIHRoaXMuX2hlaWdodCAqIHRoaXMuX2RhdGFfc2l6ZVxuXG4gICAgICB0aGlzLl9zaXplID0gdGhpcy5fd2lkdGggKiB0aGlzLl9oZWlnaHQgKiB0aGlzLl9kYXRhX3NpemUgKiB0aGlzLl9jb3VudFxuXG4gICAgICB0aGlzLl90b3AgPSBfLmdldChtYWluLCAnbWVtX21hcC4nICsgbmFtZSArICcudG9wJywgY3VycmVudE9mZnNldClcbiAgICAgIHRoaXMuX2JvdHRvbSA9IHRoaXMuX3RvcCArIHRoaXMuX3NpemUgLSAxXG5cbiAgICAgIF8uc2V0KG1haW4sICdtZW1fbWFwLicgKyBuYW1lLCB7XG4gICAgICAgIHRvcDogdGhpcy5fdG9wLFxuICAgICAgICBib3R0b206IHRoaXMuX2JvdHRvbSxcbiAgICAgICAgc2l6ZTogdGhpcy5fc2l6ZSxcbiAgICAgICAgZGF0YV9mb3JtYXQ6IHRoaXMuX2RhdGFfZm9ybWF0LFxuICAgICAgICBkYXRhX3NpemU6IHRoaXMuX2RhdGFfc2l6ZSxcbiAgICAgICAgY2VsbF9zaXplOiB0aGlzLl9jZWxsX3NpemUsXG4gICAgICAgIGNvdW50OiB0aGlzLl9jb3VudCxcbiAgICAgIH0pXG5cbiAgICAgIGN1cnJlbnRPZmZzZXQgPSB0aGlzLl9ib3R0b20gKyAxXG5cbiAgICAgIHRoaXMuX2RhdGEgPSBuZXcgd2luZG93W2RhdGFfdHlwZV9mbnNbdGhpcy5fZGF0YV9mb3JtYXRdICsgJ0FycmF5J10odGhpcy5tZW1vcnkuYnVmZmVyLCB0aGlzLl90b3AsIHRoaXMuX2NlbGxfc2l6ZSAqIHRoaXMuX2NvdW50KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXIoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gIH1cblxuICBnZXQgbWFpbiAoKSB7IHJldHVybiB0aGlzLl9tYWluIH1cbiAgZ2V0IG1lbW9yeSAoKSB7IHJldHVybiB0aGlzLl9tYWluLm1lbW9yeSB9XG5cbiAgZ2V0IGd1aWRlbyAoKSB7IHJldHVybiB0aGlzLl9tYWluLmd1aWRlbyB9XG4gIGdldCByYWluYm93ICgpIHsgcmV0dXJuIHRoaXMuZ3VpZGVvLnJhaW5ib3cgfVxuICBnZXQgZm9uem8gKCkgeyByZXR1cm4gdGhpcy5ndWlkZW8uZm9uem8gfVxuICBnZXQgb3J3ZWxsICgpIHsgcmV0dXJuIHRoaXMuZ3VpZGVvLm9yd2VsbCB9XG4gIGdldCBiZWFnbGUgKCkgeyByZXR1cm4gdGhpcy5vcndlbGwuYmVhZ2xlIH1cbiAgZ2V0IHZpb2xldCAoKSB7IHJldHVybiB0aGlzLmd1aWRlby52aW9sZXQgfVxuXG4gIGdldCBkYXRhICgpIHsgcmV0dXJuIHRoaXMuX2RhdGEgfVxuICBnZXQgdG9wICgpIHsgcmV0dXJuIHRoaXMuX3RvcCB9XG4gIGdldCBib3R0b20gKCkgeyByZXR1cm4gdGhpcy5fYm90dG9tIH1cbiAgZ2V0IHNpemUgKCkgeyByZXR1cm4gdGhpcy5fc2l6ZSB9XG5cbiAgZ2V0IGNvdW50ICgpIHsgcmV0dXJuIHRoaXMuX2NvdW50IH1cbiAgZ2V0IGRhdGFfc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9kYXRhX3NpemUgfVxuXG4gIGdldCB3aWR0aCAoKSB7IHJldHVybiB0aGlzLl93aWR0aCB9XG4gIGdldCBoZWlnaHQgKCkgeyByZXR1cm4gdGhpcy5faGVpZ2h0IH1cblxuICB1cGRhdGUgKGZsaXAgPSBmYWxzZSkge1xuICAgIGxldCBndWlkZW8gPSB0aGlzLmd1aWRlb1xuICAgIGd1aWRlby5mb3JjZV9yZWRyYXcgPSB0cnVlXG4gICAgZ3VpZGVvLmZvcmNlX2ZsaXAgPSBndWlkZW8uZm9yY2VfZmxpcCB8fCBmbGlwXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgfVxuXG4gIGNsZWFyICh2ID0gMCkge1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl9kYXRhLmZpbGwodilcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFzeW5jIChmbiwgYXJncywgZGVsYXkpIHtcbiAgICBhc3luYyh0aGlzLCBmbiwgYXJncywgZGVsYXkpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL2NoaXAuanMiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbnpvIGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdmb256bycsIFsnY291bnQnLCAnd2lkdGgnLCAnaGVpZ2h0J10pXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBzdXBlci5yZXNldCgpXG5cbiAgICB0aGlzLm1lbW9yeS5mcm9tX2FycmF5X21hc2sodGhpcy5fdG9wICsgMzMgKiB0aGlzLl9jZWxsX3NpemUsIFtcbiAgICAgICcgICAgICAgJyxcbiAgICAgICcgICBYICAgJyxcbiAgICAgICcgICBYICAgJyxcbiAgICAgICcgICBYICAgJyxcbiAgICAgICcgICBYICAgJyxcbiAgICAgICcgICBYICAgJyxcbiAgICAgICcgICAgICAgJyxcbiAgICAgICcgICBYICAgJyxcbiAgICAgICcgICAgICAgJyxcbiAgICBdLCB7ICcgJzogMTYsIFg6IDEgfSlcblxuICAgIHRoaXMubWVtb3J5LmZyb21fYXJyYXlfbWFzayh0aGlzLl90b3AgKyA2NSAqIHRoaXMuX2NlbGxfc2l6ZSwgW1xuICAgICAgJyAgICAgICAnLFxuICAgICAgJyAgIFggICAnLFxuICAgICAgJyAgWCBYICAnLFxuICAgICAgJyBYICAgWCAnLFxuICAgICAgJyBYICAgWCAnLFxuICAgICAgJyBYWFhYWCAnLFxuICAgICAgJyBYICAgWCAnLFxuICAgICAgJyBYICAgWCAnLFxuICAgICAgJyAgICAgICAnLFxuICAgIF0sIHsgJyAnOiAxNiwgWDogMSB9KVxuXG4gICAgdGhpcy5tZW1vcnkuZnJvbV9hcnJheV9tYXNrKHRoaXMuX3RvcCArIDY2ICogdGhpcy5fY2VsbF9zaXplLCBbXG4gICAgICAnICAgICAgICcsXG4gICAgICAnIFhYWFggICcsXG4gICAgICAnIFggICBYICcsXG4gICAgICAnIFggICBYICcsXG4gICAgICAnIFhYWFggICcsXG4gICAgICAnIFggICBYICcsXG4gICAgICAnIFggICBYICcsXG4gICAgICAnIFhYWFggICcsXG4gICAgICAnICAgICAgICcsXG4gICAgXSwgeyAnICc6IDE2LCBYOiAxIH0pXG5cbiAgICB0aGlzLnRlc3QoKVxuICB9XG5cbiAgZHJhdyAoeCwgeSwgYywgZmcgPSAxNSwgYmcgPSAwKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3VpZGVvLmJsaXRfbWFzayh0aGlzLl90b3AgKyBjICogdGhpcy5fY2VsbF9zaXplLCB4LCB5LCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCBmZywgYmcpXG4gIH1cblxuICB0ZXN0ICgpIHtcbiAgICB0aGlzLmRyYXcoNDAsIDQwLCA2NSwgMTAsIDMpXG4gICAgdGhpcy5kcmF3KDQ3LCA0MCwgNjYsIDEyLCAxNSlcbiAgICB0aGlzLmRyYXcoNTQsIDQwLCAzMywgNSwgOClcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvZm9uem8uanMiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yd2VsbCBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgnb3J3ZWxsJywgWyd3aWR0aCcsICdoZWlnaHQnXSlcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgY2xlYXIgKGNoID0gJyAnLCBiZyA9IDApIHtcbiAgICB0aGlzLl9kYXRhLmZpbGwoMHhGRjAwMDAgJiBjaC5jaGFyQ29kZUF0KDApIHwgMHgwMDAwRkYgJiBiZylcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgbGV0IHcgPSB0aGlzLl93aWR0aFxuICAgIGxldCBoID0gdGhpcy5faGVpZ2h0XG4gICAgbGV0IG1lbSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgZm50ID0gdGhpcy5mb256b1xuICAgIGxldCBmdyA9IGZudC53aWR0aFxuICAgIGxldCBmaCA9IGZudC5oZWlnaHRcblxuICAgIGxldCBpZHggPSAwXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICAgIGxldCBweSA9IHkgKiBmaFxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3OyB4KyspIHtcbiAgICAgICAgbGV0IGMgPSBtZW1baWR4XVxuICAgICAgICBpZiAoYykge1xuICAgICAgICAgIGZudC5kcmF3KHggKiBmdywgcHksIGMsIG1lbVtpZHggKyAxXSwgbWVtW2lkeCArIDJdKVxuICAgICAgICB9XG4gICAgICAgIGlkeCArPSAzXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGRyYXdfY2hhciAoeCwgeSwgYywgZmcsIGJnKSB7XG4gICAgbGV0IGZudCA9IHRoaXMuZm9uem9cbiAgICBmbnQuZHJhdyh4ICogZm50LndpZHRoLCB5ICogZm50LmhlaWdodCwgYywgZmcsIGJnKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBpbmRleCAoeCwgeSkge1xuICAgIHJldHVybiAoKHkgLSAxKSAqIHRoaXMuX3dpZHRoICsgKHggLSAxKSkgKiAzXG4gIH1cblxuICBsaW5lICh5KSB7XG4gICAgbGV0IGwgPSB0aGlzLl93aWR0aCAqIDNcbiAgICByZXR1cm4geyBzdGFydDogeSAqIGwsIGVuZDogKHkgKyAxKSAqIGwgLSAzLCBsZW5ndGg6IGwgfVxuICB9XG5cbiAgY2hhcl9hdCAoeCwgeSkge1xuICAgIGxldCB0aWR4ID0gdGhpcy5pbmRleCh4LCB5KVxuICAgIGxldCBtZW0gPSB0aGlzLl9kYXRhXG4gICAgcmV0dXJuIHsgY2g6IG1lbVt0aWR4XSwgZmc6IG1lbVt0aWR4ICsgMV0sIGJnOiBtZW1bdGlkeCArIDJdIH1cbiAgfVxuXG4gIHB1dF9jaGFyIChjaCwgZmcgPSAxLCBiZyA9IDApIHtcbiAgICBzd2l0Y2ggKGNoLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgIGNhc2UgMTM6XG4gICAgICBjYXNlIDEwOlxuICAgICAgICByZXR1cm4gdGhpcy5jcigpXG4gICAgICBjYXNlIDg6XG4gICAgICAgIHJldHVybiB0aGlzLmJzKClcbiAgICB9XG5cbiAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcygpXG4gICAgdGhpcy5fZGF0YS5zZXQoW2NoLmNoYXJDb2RlQXQoMCksIGZnLCBiZ10sIHRoaXMuaW5kZXgoeCwgeSkpXG5cbiAgICB0aGlzLmJlYWdsZS54KytcbiAgICBpZiAodGhpcy5iZWFnbGUueCA+IHRoaXMuX3dpZHRoKSB7XG4gICAgICB0aGlzLmNyKClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kcmF3X2NoYXIoeCwgeSwgY2gsIGZnLCBiZylcbiAgfVxuXG4gIHByaW50ICh0ZXh0LCBmZywgYmcpIHtcbiAgICBmb3IgKGxldCBjIG9mIHRleHQpIHtcbiAgICAgIHRoaXMucHV0X2NoYXIoYywgZmcsIGJnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcG9zICgpIHsgcmV0dXJuIHsgeDogdGhpcy5iZWFnbGUueCwgeTogdGhpcy5iZWFnbGUueSB9IH1cblxuICBtb3ZlX3RvICh4LCB5KSB7IHJldHVybiB0aGlzLmJlYWdsZS5tb3ZlX3RvKHgsIHkpIH1cblxuICBtb3ZlX2J5ICh4LCB5KSB7IHJldHVybiB0aGlzLmJlYWdsZS5tb3ZlX2J5KHgsIHkpIH1cblxuICBib2wgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKDEsIHRoaXMuYmVhZ2xlLnkpIH1cblxuICBlb2wgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuX3dpZHRoLCB0aGlzLmJlYWdsZS55KSB9XG5cbiAgYm9zICgpIHsgcmV0dXJuIHRoaXMubW92ZV90bygxLCAxKSB9XG5cbiAgZW9zICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KSB9XG5cbiAgYnMgKCkgeyByZXR1cm4gdGhpcy5sZWZ0KCkucHV0X2NoYXIoJyAnKS5sZWZ0KCkgfVxuXG4gIGNyICgpIHsgcmV0dXJuIHRoaXMubW92ZV90bygxLCB0aGlzLmJlYWdsZS55ICsgMSkgfVxuXG4gIGxmICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLmJlYWdsZS54LCB0aGlzLmJlYWdsZS55ICsgMSkgfVxuXG4gIHVwICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLmJlYWdsZS54LCB0aGlzLmJlYWdsZS55IC0gMSkgfVxuXG4gIGxlZnQgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuYmVhZ2xlLnggLSAxLCB0aGlzLmJlYWdsZS55KSB9XG5cbiAgZG93biAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5iZWFnbGUueCwgdGhpcy5iZWFnbGUueSArIDEpIH1cblxuICByaWdodCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5iZWFnbGUueCArIDEsIHRoaXMuYmVhZ2xlLnkpIH1cblxuICBjbGVhcl9lb2wgKGJnID0gMCkge1xuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zKClcbiAgICBsZXQgcyA9IHRoaXMuaW5kZXgoeCwgeSlcbiAgICB0aGlzLl9kYXRhLmZpbGwoMHgwMDAwRkYgJiBiZywgcywgdGhpcy5pbmRleCh0aGlzLl93aWR0aCwgeSkgLSBzKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjbGVhcl9lb3MgKGJnID0gMCkge1xuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zKClcbiAgICBsZXQgcyA9IHRoaXMuaW5kZXgoeCwgeSlcbiAgICB0aGlzLl9kYXRhLmZpbGwoMHgwMDAwRkYgJiBiZywgcywgdGhpcy5fc2l6ZSAtIHMpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNsZWFyX2JvbCAoYmcgPSAwKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MoKVxuICAgIGxldCBzID0gdGhpcy5pbmRleCh4LCB5KVxuICAgIHRoaXMuX2RhdGEuZmlsbCgweDAwMDBGRiAmIGJnLCBzLCB0aGlzLmluZGV4KDEsIHkpIC0gcylcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY2xlYXJfYm9zIChiZyA9IDApIHtcbiAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcygpXG4gICAgdGhpcy5fZGF0YS5maWxsKDB4MDAwMEZGICYgYmcsIDAsIHRoaXMuaW5kZXgoeCwgeSkgLSAxKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjb3B5X2xpbmUgKHN5LCB0eSkge1xuICAgIGxldCBzaSA9IHRoaXMubGluZShzeSlcbiAgICB0aGlzLl9kYXRhLmNvcHkoc2kuc3RhcnQsIHRoaXMubGluZSh0eSksIHNpLmxlbmd0aClcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY29weV9jb2wgKHN4LCB0eCkge1xuICAgIGxldCBtZW0gPSB0aGlzLl9kYXRhXG4gICAgc3ggKj0gNFxuICAgIHR4ICo9IDRcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX2hlaWdodDsgeSsrKSB7XG4gICAgICBsZXQgaSA9IHRoaXMubGluZSh5KVxuICAgICAgbWVtLmNvcHkoaS5zdGFydCArIHN4LCBpLnN0YXJ0ICsgdHgsIDMpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBlcmFzZV9saW5lICh5LCBiZyA9IDApIHtcbiAgICBsZXQgaSA9IHRoaXMubGluZSh5KVxuICAgIHRoaXMuX2RhdGEuZmlsbCgweDAwMDBGRiAmIGJnLCBpLnN0YXJ0LCBpLmxlbmd0aClcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgZXJhc2VfY29sICh4LCBiZyA9IDApIHtcbiAgICBsZXQgbWVtID0gdGhpcy5fZGF0YVxuICAgIGxldCBscyA9IHRoaXMubGluZSgwKS5zdGFydCArIHggKiAzXG4gICAgbGV0IGMgPSAweDAwMDBGRiAmIGJnXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLl9oZWlnaHQ7IHkrKykge1xuICAgICAgbWVtLmZpbGwoYywgbHMsIDMpXG4gICAgICBscyArPSB0aGlzLl93aWR0aCAqIDNcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIHNjcm9sbCAoZHkpIHtcbiAgICBpZiAoZHkgPiAwKSB7XG4gICAgICBsZXQgaSA9IHRoaXMubGluZShkeSArIDEpXG4gICAgICB0aGlzLl9kYXRhLmNvcHkoaS5zdGFydCwgMCwgdGhpcy5fc2l6ZSlcbiAgICAgIGkgPSB0aGlzLmxpbmUoZHkpXG4gICAgICBsZXQgcyA9IGkuc3RhcnRcbiAgICAgIHRoaXMuX2RhdGEuZmlsbCgwLCBzLCB0aGlzLl9zaXplIC0gcylcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICAgIGVsc2UgaWYgKGR5IDwgMCkge1xuICAgICAgbGV0IGkgPSB0aGlzLmxpbmUoZHkgKyAxKVxuICAgICAgdGhpcy5fZGF0YS5jb3B5KGkuc3RhcnQsIDAsIHRoaXMuX3NpemUpXG4gICAgICBpID0gdGhpcy5saW5lKGR5KVxuICAgICAgbGV0IHMgPSBpLnN0YXJ0XG4gICAgICB0aGlzLl9kYXRhLmZpbGwoMCwgcywgdGhpcy5fc2l6ZSAtIHMpXG4gICAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy9vcndlbGwuanMiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlYWdsZSBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgnYmVhZ2xlJywgWyd3aWR0aCcsICdoZWlnaHQnLCAnY29sb3InLCAnYmxpbmtyYXRlJywgJ3Zpc2libGUnXSlcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcbiAgICB0aGlzLl94ID0gMFxuICAgIHRoaXMuX3kgPSAwXG4gICAgdGhpcy5fbGFzdCA9IDBcbiAgICB0aGlzLl9ibGlua19oaWRkZW4gPSBmYWxzZVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgaWYgKHQgLSB0aGlzLl9sYXN0ID49IHRoaXMuX2JsaW5rcmF0ZSkge1xuICAgICAgdGhpcy5ibGluaygpXG4gICAgICB0aGlzLl9sYXN0ID0gdFxuICAgIH1cbiAgfVxuXG4gIGdldCB4ICgpIHsgcmV0dXJuIHRoaXMuX3ggfVxuICBzZXQgeCAodmFsdWUpIHsgdGhpcy5feCA9IHZhbHVlIH1cblxuICBnZXQgeSAoKSB7IHJldHVybiB0aGlzLl95IH1cbiAgc2V0IHkgKHZhbHVlKSB7IHRoaXMuX3kgPSB2YWx1ZSB9XG5cbiAgZ2V0IGNvbG9yICgpIHsgcmV0dXJuIHRoaXMuX2NvbG9yIH1cbiAgc2V0IGNvbG9yICh2YWx1ZSkgeyB0aGlzLl9jb2xvciA9IHZhbHVlIH1cblxuICBnZXQgYmxpbmtyYXRlICgpIHsgcmV0dXJuIHRoaXMuX2JsaW5rcmF0ZSB9XG4gIHNldCBibGlua3JhdGUgKHZhbHVlKSB7IHRoaXMuX2JsaW5rcmF0ZSA9IHZhbHVlIH1cblxuICBibGluayAoKSB7XG4gICAgaWYgKHRoaXMuX3Zpc2libGUpIHtcbiAgICAgIHRoaXMuX2JsaW5rX2hpZGRlbiA9ICF0aGlzLl9ibGlua19oaWRkZW5cbiAgICAgIHRoaXMudXBkYXRlKHRydWUpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBtb3ZlX3RvICh4LCB5KSB7XG4gICAgY29uc3Qgb3J3ZWxsID0gdGhpcy5vcndlbGxcbiAgICBsZXQgdyA9IG9yd2VsbC53aWR0aFxuICAgIGxldCBoID0gb3J3ZWxsLmhlaWdodFxuXG4gICAgaWYgKHggPiB3KSB7XG4gICAgICB4ID0gd1xuICAgIH1cbiAgICBlbHNlIGlmICh4IDwgMSkge1xuICAgICAgeCA9IDFcbiAgICB9XG5cbiAgICBpZiAoeSA+IGgpIHtcbiAgICAgIHkgPSBoXG4gICAgfVxuICAgIGVsc2UgaWYgKHkgPCAxKSB7XG4gICAgICB5ID0gMVxuICAgIH1cblxuICAgIHRoaXMuX3ggPSB4XG4gICAgdGhpcy5feSA9IHlcblxuICAgIHJldHVybiB0aGlzLmRyYXcoeCwgeSlcbiAgfVxuXG4gIG1vdmVfYnkgKHgsIHkpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLl94ICsgeCwgdGhpcy5feSArIHkpIH1cblxuICBkcmF3ICh4LCB5KSB7XG4gICAgbGV0IHcgPSB0aGlzLl93aWR0aFxuICAgIGxldCBoID0gdGhpcy5faGVpZ2h0XG4gICAgbGV0IGMgPSB0aGlzLl9jb2xvclxuICAgIGxldCBndWlkZW8gPSB0aGlzLmd1aWRlb1xuXG4gICAgZm9yIChsZXQgYnkgPSAwOyBieSA8IGg7IGJ5KyspIHtcbiAgICAgIGxldCBwaSA9ICh5ICsgYnkpICogdyArIHhcbiAgICAgIGZvciAobGV0IGJ4ID0gMDsgYnggPCB3OyBieCsrKSB7XG4gICAgICAgIGd1aWRlby5waXhlbChwaSsrLCBjKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSh0cnVlKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy9iZWFnbGUuanMiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpb2xldCBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuX2xpc3QgPSBbXVxuXG4gICAgdGhpcy5pbml0KCd2aW9sZXQnLCBbJ2RhdGFfc2l6ZScsICdjb3VudCcsICd3aWR0aCcsICdoZWlnaHQnXSlcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgZ2V0IGxpc3QgKCkgeyByZXR1cm4gdGhpcy5fbGlzdCB9XG5cbiAgY2xlYXIgKHYgPSAwKSB7XG4gICAgdGhpcy5fbGlzdCA9IFtdXG4gICAgcmV0dXJuIHN1cGVyLmNsZWFyKHYpXG4gIH1cblxuICBmaW5kIChuYW1lKSB7XG4gICAgcmV0dXJuIF8uZmluZCh0aGlzLl9saXN0LCB7IG5hbWUgfSlcbiAgfVxuXG4gIGluZGV4IChuYW1lKSB7XG4gICAgcmV0dXJuIF8uaW5kZXhPZih0aGlzLl9saXN0LCB7IG5hbWUgfSlcbiAgfVxuXG4gIGFkZCAobmFtZSwgZnJhbWUsIHgsIHksIHopIHtcbiAgICB0aGlzLl9saXN0LnB1c2goeyBuYW1lLCBmcmFtZSwgeCwgeSwgeiB9KVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkZWwgKG5hbWUpIHtcbiAgICBsZXQgaSA9IHRoaXMuaW5kZXgobmFtZSlcbiAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuX2xpc3Quc3BsaWNlKGksIDEpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB4IChuYW1lLCB2YWx1ZSkge1xuICAgIGxldCBzID0gdGhpcy5maW5kKG5hbWUpXG4gICAgaWYgKHMgJiYgdmFsdWUpIHtcbiAgICAgIHMueCA9IHZhbHVlXG4gICAgfVxuICAgIHJldHVybiBzID8gcy54IDogMFxuICB9XG5cbiAgeSAobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgcyA9IHRoaXMuZmluZChuYW1lKVxuICAgIGlmIChzICYmIHZhbHVlKSB7XG4gICAgICBzLnkgPSB2YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gcyA/IHMueSA6IDBcbiAgfVxuXG4gIHogKG5hbWUsIHZhbHVlKSB7XG4gICAgbGV0IHMgPSB0aGlzLmZpbmQobmFtZSlcbiAgICBpZiAocyAmJiB2YWx1ZSkge1xuICAgICAgcy56ID0gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIHMgPyBzLnogOiAwXG4gIH1cblxuICBtb3ZlX3RvIChuYW1lLCB4LCB5LCB6KSB7XG4gICAgbGV0IHMgPSB0aGlzLmZpbmQobmFtZSlcbiAgICBpZiAocykge1xuICAgICAgcy54ID0geFxuICAgICAgcy55ID0geVxuICAgICAgaWYgKHopIHtcbiAgICAgICAgcy56ID0gelxuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgbW92ZV9ieSAobmFtZSwgeCwgeSwgeikge1xuICAgIGxldCBzID0gdGhpcy5maW5kKG5hbWUpXG4gICAgaWYgKHMpIHtcbiAgICAgIHMueCArPSB4XG4gICAgICBzLnkgKz0geVxuICAgICAgaWYgKHopIHtcbiAgICAgICAgcy56ICs9IHpcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGRyYXcgKGZyYW1lLCB4LCB5KSB7XG4gICAgaWYgKF8uaXNVbmRlZmluZWQoZnJhbWUpKSB7XG4gICAgICBmb3IgKGxldCBzIG9mIF8uc29ydEJ5KHRoaXMuX2xpc3QsICd6JykpIHtcbiAgICAgICAgdGhpcy5kcmF3KHMuZnJhbWUsIHMueCwgcy55KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZ3VpZGVvLmJsaXQodGhpcy5fdG9wICsgZnJhbWUgKiB0aGlzLl9jZWxsX3NpemUsIHgsIHksIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvdmlvbGV0LmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5cbmV4cG9ydCBjbGFzcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLl9vdmVybGF5cyA9IG92ZXJsYXlzXG5cbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0XG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIGNyZWF0ZSAoKSB7XG4gICAgdGhpcy5fY2FudmFzQnVmZmVyID0gbmV3IFBJWEkuQ2FudmFzQnVmZmVyKHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG5cbiAgICB0aGlzLl90ZXh0dXJlID0gUElYSS5UZXh0dXJlLmZyb21DYW52YXModGhpcy5fY2FudmFzQnVmZmVyLmNhbnZhcywgUElYSS5TQ0FMRV9NT0RFUy5ORUFSRVNUKVxuICAgIHRoaXMuX3RleHR1cmUuc2NhbGVNb2RlID0gUElYSS5TQ0FMRV9NT0RFUy5ORUFSRVNUXG5cbiAgICB0aGlzLl9zcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fdGV4dHVyZSlcblxuICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXNCdWZmZXIuY2FudmFzLmdldENvbnRleHQoJzJkJywgeyBhbHBoYTogdHJ1ZSwgYW50aWFsaWFzOiBmYWxzZSB9KVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX2xhc3QgPSAwXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5fdGV4dHVyZSkge1xuICAgICAgdGhpcy5fdGV4dHVyZS5kZXN0cm95KClcbiAgICAgIHRoaXMuX3RleHR1cmUgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NhbnZhc0J1ZmZlcikge1xuICAgICAgdGhpcy5fY2FudmFzQnVmZmVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fY2FudmFzQnVmZmVyID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9zcHJpdGUpIHtcbiAgICAgIHRoaXMuX3Nwcml0ZS5kZXN0cm95KClcbiAgICAgIHRoaXMuX3Nwcml0ZSA9IG51bGxcbiAgICB9XG4gIH1cblxuICB0aWNrICh0KSB7XG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuZ3VpZGVvLnVwZGF0ZSgpXG4gIH1cblxuICBnZXQgbWFpbiAoKSB7IHJldHVybiB0aGlzLl9vdmVybGF5cy5tYWluIH1cbiAgZ2V0IGd1aWRlbyAoKSB7IHJldHVybiB0aGlzLm1haW4uZ3VpZGVvIH1cbiAgZ2V0IHN0YWdlICgpIHsgcmV0dXJuIHRoaXMubWFpbi5zdGFnZSB9XG4gIGdldCByZW5kZXJlciAoKSB7IHJldHVybiB0aGlzLm1haW4ucmVuZGVyZXIgfVxuXG4gIGdldCBjYW52YXNCdWZmZXIgKCkgeyByZXR1cm4gdGhpcy5fY2FudmFzQnVmZmVyIH1cbiAgZ2V0IHRleHR1cmUgKCkgeyByZXR1cm4gdGhpcy5fdGV4dHVyZSB9XG4gIGdldCBzcHJpdGUgKCkgeyByZXR1cm4gdGhpcy5fc3ByaXRlIH1cbiAgZ2V0IGNvbnRleHQgKCkgeyByZXR1cm4gdGhpcy5fY29udGV4dCB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgU2NyZWVuT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuXG4gICAgdGhpcy5fc3ByaXRlLnggPSBfLmdldChvcHRpb25zLCAnb2Zmc2V0LngnLCAwKSArIF8uZ2V0KG9wdGlvbnMsICdtYXJnaW5zLngnLCAwKSAvIDJcbiAgICB0aGlzLl9zcHJpdGUueSA9IF8uZ2V0KG9wdGlvbnMsICdvZmZzZXQueScsIDApICsgXy5nZXQob3B0aW9ucywgJ21hcmdpbnMueScsIDApIC8gMlxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLmd1aWRlby51cGRhdGUodHJ1ZSlcbiAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIFNjYW5saW5lc092ZXJsYXkgZXh0ZW5kcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihvdmVybGF5cywgd2lkdGgsIGhlaWdodClcblxuICAgIHRoaXMuX2dhcCA9IF8uZ2V0KG9wdGlvbnMsICdnYXAnLCAzKVxuICAgIHRoaXMuX2FscGhhID0gXy5nZXQob3B0aW9ucywgJ2FscGhhJywgMC4zNSlcblxuICAgIHRoaXMuY3JlYXRlKClcblxuICAgIGxldCBhID0gdGhpcy5fYWxwaGEgKiAyNTVcbiAgICBsZXQgZGF0YSA9IHRoaXMuX2NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gICAgbGV0IHBpeGVscyA9IGRhdGEuZGF0YVxuICAgIGxldCBzeiA9IHRoaXMuX3dpZHRoICogNFxuICAgIGxldCBpZHhcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX2hlaWdodDsgeSArPSB0aGlzLl9nYXApIHtcbiAgICAgIGlkeCA9IHkgKiBzelxuICAgICAgZm9yIChsZXQgaSA9IGlkeDsgaSA8IGlkeCArIHN6OyBpICs9IDQpIHtcbiAgICAgICAgcGl4ZWxzLnNldChbMCwgMCwgMCwgYV0sIGkpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2NvbnRleHQucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApXG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBTY2FubGluZU92ZXJsYXkgZXh0ZW5kcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihvdmVybGF5cywgd2lkdGgsIGhlaWdodClcblxuICAgIHRoaXMuX3JhdGUgPSBfLmdldChvcHRpb25zLCAncmF0ZScsIDUwKVxuICAgIHRoaXMuX3NwZWVkID0gXy5nZXQob3B0aW9ucywgJ3NwZWVkJywgMTYpXG4gICAgdGhpcy5fYWxwaGEgPSBfLmdldChvcHRpb25zLCAnYWxwaGEnLCAwLjEpXG5cbiAgICB0aGlzLmNyZWF0ZSgpXG5cbiAgICBsZXQgZGF0YSA9IHRoaXMuX2NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gICAgbGV0IHBpeGVscyA9IGRhdGEuZGF0YVxuICAgIGxldCBzeiA9IHRoaXMuX3dpZHRoICogNFxuICAgIGxldCBsZW4gPSB0aGlzLl9oZWlnaHQgKiBzelxuICAgIGxldCBsID0gMFxuICAgIGxldCBoID0gdGhpcy5faGVpZ2h0XG4gICAgbGV0IGEgPSB0aGlzLl9hbHBoYSAqIDI1NVxuICAgIGxldCBhYVxuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBsZW47IHkgKz0gc3opIHtcbiAgICAgIGFhID0gbCAvIGggKiBhXG4gICAgICBmb3IgKGxldCB4ID0geTsgeCA8IHkgKyBzejsgeCArPSA0KSB7XG4gICAgICAgIHBpeGVscy5zZXQoWzI1LCAyNSwgMjUsIGFhXSwgeClcbiAgICAgIH1cbiAgICAgIGwrK1xuICAgIH1cblxuICAgIHRoaXMuX2NvbnRleHQucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApXG5cbiAgICB0aGlzLl9zcHJpdGUueSA9IC10aGlzLl9zcHJpdGUuaGVpZ2h0XG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgaWYgKHQgLSB0aGlzLl9sYXN0ID49IHRoaXMuX3JhdGUpIHtcbiAgICAgIHRoaXMuc3ByaXRlLnkgKz0gdGhpcy5fc3BlZWRcbiAgICAgIGlmICh0aGlzLl9zcHJpdGUueSA+IHRoaXMuX2hlaWdodCkge1xuICAgICAgICB0aGlzLl9zcHJpdGUueSA9IC10aGlzLl9zcHJpdGUuaGVpZ2h0XG4gICAgICB9XG4gICAgICB0aGlzLl9sYXN0ID0gdFxuXG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgTm9pc2VzT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5fcmF0ZSA9IF8uZ2V0KG9wdGlvbnMsICdyYXRlJywgMjUwKVxuICAgIHRoaXMuX2NvdW50ID0gXy5nZXQob3B0aW9ucywgJ2NvdW50JywgOClcbiAgICB0aGlzLl9yYXRlID0gXy5nZXQob3B0aW9ucywgJ3JhdGUnLCAwLjg1KVxuICAgIHRoaXMuX3JlZCA9IF8uZ2V0KG9wdGlvbnMsICdyZWQnLCAxMDApXG4gICAgdGhpcy5fZ3JlZW4gPSBfLmdldChvcHRpb25zLCAnZ3JlZW4nLCAxMDApXG4gICAgdGhpcy5fYmx1ZSA9IF8uZ2V0KG9wdGlvbnMsICdibHVlJywgMTAwKVxuICAgIHRoaXMuX2FscGhhID0gXy5nZXQob3B0aW9ucywgJ2FscGhhJywgMC4xNSlcblxuICAgIHRoaXMuX25vaXNlcyA9IHt9XG5cbiAgICBsZXQgYSA9IHRoaXMuX2FscGhhICogMjU1XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLl9jb3VudDsgYysrKSB7XG4gICAgICBsZXQgbm9pc2UgPSBuZXcgT3ZlcmxheShvdmVybGF5cywgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICAgIG5vaXNlLmNyZWF0ZSgpXG4gICAgICBub2lzZS5fc3ByaXRlLnZpc2libGUgPSBjID09PSAwXG5cbiAgICAgIGxldCBkYXRhID0gbm9pc2UuX2NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gICAgICBsZXQgcGl4ZWxzID0gZGF0YS5kYXRhXG4gICAgICBsZXQgbGVuID0gcGl4ZWxzLmxlbmd0aFxuICAgICAgbGV0IHIgPSB0aGlzLl9yZWRcbiAgICAgIGxldCBnID0gdGhpcy5fZ3JlZW5cbiAgICAgIGxldCBiID0gdGhpcy5fYmx1ZVxuICAgICAgbGV0IF9yYXRlID0gdGhpcy5fcmF0ZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+PSBfcmF0ZSkge1xuICAgICAgICAgIHBpeGVscy5zZXQoW01hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIHIpLCBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiBnKSwgTWF0aC50cnVuYyhNYXRoLnJhbmRvbSgpICogYiksIGFdLCBpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBub2lzZS5fY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMClcbiAgICAgIHRoaXMuX25vaXNlc1tjXSA9IG5vaXNlXG4gICAgICB0aGlzLmd1aWRlby5zdGFnZS5hZGRDaGlsZChub2lzZS5zcHJpdGUpXG4gICAgfVxuXG4gICAgdGhpcy5fbm9pc2VLZXlzID0gXy5rZXlzKHRoaXMuX25vaXNlcylcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKVxuXG4gICAgZm9yIChsZXQgayBpbiB0aGlzLl9ub2lzZXMpIHtcbiAgICAgIGxldCBub2lzZSA9IHRoaXMuX25vaXNlc1trXVxuICAgICAgbm9pc2UuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy5fbm9pc2VzID0ge31cbiAgICB0aGlzLl9ub2lzZUtleXMgPSBbXVxuICB9XG5cbiAgdGljayAodCkge1xuICAgIGlmICh0IC0gdGhpcy5fbGFzdCA+PSB0aGlzLl9yYXRlKSB7XG4gICAgICBmb3IgKGxldCBrIG9mIHRoaXMuX25vaXNlS2V5cykge1xuICAgICAgICB0aGlzLl9ub2lzZXNba10uc3ByaXRlLnZpc2libGUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBsZXQgbm9pc2UgPSB0aGlzLl9ub2lzZUtleXNbTWF0aC50cnVuYyhNYXRoLnJhbmRvbSgpICogdGhpcy5fbm9pc2VLZXlzLmxlbmd0aCldXG4gICAgICB0aGlzLl9ub2lzZXNbbm9pc2VdLnNwcml0ZS52aXNpYmxlID0gdHJ1ZVxuXG4gICAgICB0aGlzLl9sYXN0ID0gdFxuXG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgUmdiT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5fYWxwaGEgPSBfLmdldChvcHRpb25zLCAnYWxwaGEnLCAwLjA3NSlcblxuICAgIHRoaXMuY3JlYXRlKClcblxuICAgIGxldCBkYXRhID0gdGhpcy5fY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICBsZXQgcGl4ZWxzID0gZGF0YS5kYXRhXG4gICAgbGV0IGxlbiA9IHBpeGVscy5sZW5ndGhcbiAgICBsZXQgYSA9IHRoaXMuX2FscGhhICogMjU1XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMTIpIHtcbiAgICAgIHBpeGVscy5zZXQoWzEwMCwgMTAwLCAxMDAsIGFdLCBpKVxuICAgIH1cbiAgICB0aGlzLl9jb250ZXh0LnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgQ3J0T3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5fcmFkaXVzID0gXy5nZXQob3B0aW9ucywgJ3JhZGl1cycsIDAuMjUpXG4gICAgdGhpcy5faW5zaWRlX2FscGhhID0gXy5nZXQob3B0aW9ucywgJ2luc2lkZV9hbHBoYScsIDAuMilcbiAgICB0aGlzLl9vdXRzaWRlX2FscGhhID0gXy5nZXQob3B0aW9ucywgJ291dHNpZGVfYWxwaGEnLCAwLjE1KVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuXG4gICAgdGhpcy5fY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGFya2VyJ1xuICAgIGxldCBncmFkaWVudCA9IHRoaXMuX2NvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQodGhpcy5fd2lkdGggLyAyLCB0aGlzLl9oZWlnaHQgLyAyLCB0aGlzLl9oZWlnaHQgLyAyLCB0aGlzLl93aWR0aCAvIDIsIHRoaXMuX2hlaWdodCAvIDIsIHRoaXMuX2hlaWdodCAvIHRoaXMuX3JhZGl1cylcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgJyArIHRoaXMuX2luc2lkZV9hbHBoYSArICcpJylcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMCwgMCwgMCwgJyArIHRoaXMuX291dHNpZGVfYWxwaGEgKyAnKScpXG4gICAgdGhpcy5fY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudFxuICAgIHRoaXMuX2NvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICB0aGlzLl9jb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3ZlcidcbiAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIE92ZXJsYXlzIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbiwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5fbWFpbiA9IG1haW5cblxuICAgIGxldCBzdGFnZSA9IG1haW4uc3RhZ2VcbiAgICBsZXQgcmVuZGVyZXIgPSBtYWluLnJlbmRlcmVyXG5cbiAgICBsZXQgd2lkdGggPSByZW5kZXJlci53aWR0aFxuICAgIGxldCBoZWlnaHQgPSByZW5kZXJlci5oZWlnaHRcblxuICAgIHRoaXMuX2xpc3QgPSB7fVxuICAgIGxldCBsID0gdGhpcy5fbGlzdFxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZU92ZXJsYXkgKGN0eCwgQ2xzLCBuYW1lLCBkZWZhdWx0cyA9IHt9KSB7XG4gICAgICBsZXQgbyA9IF8uZGVmYXVsdHNEZWVwKHt9LCBvcHRpb25zLCB7IFtuYW1lXTogZGVmYXVsdHMgfSlcbiAgICAgIGxldCBzID0gXy5nZXQob1tuYW1lXSwgJ3NjYWxlJywgMSlcbiAgICAgIGxbbmFtZV0gPSBuZXcgQ2xzKGN0eCwgXy5nZXQob1tuYW1lXSwgJ3dpZHRoJywgMCksIF8uZ2V0KG9bbmFtZV0sICdoZWlnaHQnLCAwKSwgb1tuYW1lXSlcbiAgICAgIGxbbmFtZV0uc3ByaXRlLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQocywgcylcbiAgICAgIHN0YWdlLmFkZENoaWxkKGxbbmFtZV0uc3ByaXRlKVxuICAgICAgcmV0dXJuIGxbbmFtZV1cbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ3NjcmVlbicpKSB7XG4gICAgICBfY3JlYXRlT3ZlcmxheSh0aGlzLCBTY3JlZW5PdmVybGF5LCAnc2NyZWVuJywgeyB3aWR0aDogdGhpcy5ndWlkZW8ud2lkdGgsIGhlaWdodDogdGhpcy5ndWlkZW8uaGVpZ2h0IH0pXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdzY2FubGluZXMnKSkge1xuICAgICAgX2NyZWF0ZU92ZXJsYXkodGhpcywgU2NhbmxpbmVzT3ZlcmxheSwgJ3NjYW5saW5lcycsIHsgd2lkdGgsIGhlaWdodCB9KVxuICAgIH1cblxuICAgIGlmIChfLmdldChvcHRpb25zLCAnc2NhbmxpbmUnKSkge1xuICAgICAgX2NyZWF0ZU92ZXJsYXkodGhpcywgU2NhbmxpbmVPdmVybGF5LCAnc2NhbmxpbmUnLCB7IHdpZHRoLCBoZWlnaHQgfSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ3JnYicpKSB7XG4gICAgICBfY3JlYXRlT3ZlcmxheSh0aGlzLCBSZ2JPdmVybGF5LCAncmdiJywgeyB3aWR0aCwgaGVpZ2h0IH0pXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdub2lzZXMnKSkge1xuICAgICAgbGV0IHcgPSBfLmdldChvcHRpb25zLCAnbm9pc2VzLndpZHRoJywgd2lkdGgpXG4gICAgICBsZXQgaCA9IF8uZ2V0KG9wdGlvbnMsICdub2lzZXMuaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgbC5ub2lzZXMgPSBuZXcgTm9pc2VzT3ZlcmxheSh0aGlzLCB3LCBoLCBfLmdldChvcHRpb25zLCAnbm9pc2VzJykpXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdjcnQnKSkge1xuICAgICAgX2NyZWF0ZU92ZXJsYXkodGhpcywgQ3J0T3ZlcmxheSwgJ2NydCcsIHsgd2lkdGgsIGhlaWdodCB9KVxuICAgIH1cblxuICAgIGlmIChfLmdldChvcHRpb25zLCAnbW9uaXRvcicpKSB7XG4gICAgICBsZXQgbXggPSBfLmdldChvcHRpb25zLCAnbW9uaXRvci5tYXJnaW5zLngnLCAwKVxuICAgICAgbGV0IG15ID0gXy5nZXQob3B0aW9ucywgJ21vbml0b3IubWFyZ2lucy55JywgMClcbiAgICAgIGxldCB3ID0gXy5nZXQob3B0aW9ucywgJ21vbml0b3Iud2lkdGgnLCB3aWR0aClcbiAgICAgIGxldCBoID0gXy5nZXQob3B0aW9ucywgJ21vbml0b3IuaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgbGV0IHMgPSBfLmdldChvcHRpb25zLCAnbW9uaXRvci5zY2FsZScsIDEpXG5cbiAgICAgIGxldCB0ZXggPSBQSVhJLlRleHR1cmUuZnJvbUltYWdlKCcuL2J1aWxkLycgKyByZXF1aXJlKCdmaWxlP25hbWU9YXNzZXRzL1twYXRoXS9bbmFtZV0uW2V4dF0hLi4vLi4vYXNzZXRzL2ltZ3MvY3J0LnBuZycpKVxuICAgICAgbC5tb25pdG9yID0gbmV3IFBJWEkuU3ByaXRlKHRleClcbiAgICAgIGwubW9uaXRvci53aWR0aCA9IHcgKyBteFxuICAgICAgbC5tb25pdG9yLmhlaWdodCA9IGggKyBteVxuICAgICAgbC5tb25pdG9yLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQocywgcylcbiAgICAgIGwubW9uaXRvci54ID0gXy5nZXQob3B0aW9ucywgJ21vbml0b3Iub2Zmc2V0LngnLCAwKSArIG14IC8gLTJcbiAgICAgIGwubW9uaXRvci55ID0gXy5nZXQob3B0aW9ucywgJ21vbml0b3Iub2Zmc2V0LnknLCAwKSArIG15IC8gLTJcbiAgICAgIHN0YWdlLmFkZENoaWxkKGwubW9uaXRvcilcbiAgICB9XG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgY29uc3QgbCA9IHRoaXMuX2xpc3RcbiAgICBmb3IgKGxldCBrIGluIGwpIHtcbiAgICAgIGlmIChsW2tdLnRpY2spIHtcbiAgICAgICAgbFtrXS50aWNrKHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIGNvbnN0IGwgPSB0aGlzLl9saXN0XG4gICAgZm9yIChsZXQgayBpbiBsKSB7XG4gICAgICBpZiAobFtrXS5yZXNldCkge1xuICAgICAgICBsW2tdLnJlc2V0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBjb25zdCBsID0gdGhpcy5fbGlzdFxuICAgIGZvciAobGV0IGsgaW4gbCkge1xuICAgICAgaWYgKGxba10uZGVzdHJveSkge1xuICAgICAgICBsW2tdLmRlc3Ryb3koKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuICBnZXQgZ3VpZGVvICgpIHsgcmV0dXJuIHRoaXMuX21haW4uZ3VpZGVvIH1cbiAgZ2V0IHN0YWdlICgpIHsgcmV0dXJuIHRoaXMuX21haW4uc3RhZ2UgfVxuICBnZXQgcmVuZGVyZXIgKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5yZW5kZXJlciB9XG4gIGdldCBzY3JlZW4gKCkgeyByZXR1cm4gdGhpcy5fbGlzdC5zY3JlZW4gfVxuXG4gIHJlc2l6ZSAoKSB7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL292ZXJsYXlzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2Fzc2V0cy9pbWdzLy9jcnQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpbGUtbG9hZGVyP25hbWU9YXNzZXRzL1twYXRoXS9bbmFtZV0uW2V4dF0hLi9hc3NldHMvaW1ncy9jcnQucG5nXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY3J0LnBuZ1wiOiA3Nyxcblx0XCIuL3Rlc3QucG5nXCI6IDc4XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDc2O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvaW1ncyAuL34vZmlsZS1sb2FkZXI/bmFtZT1hc3NldHMvW25hbWVdLltleHRdIV5cXC5cXC8uKiRcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9jcnQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpbGUtbG9hZGVyP25hbWU9YXNzZXRzL1tuYW1lXS5bZXh0XSEuL2Fzc2V0cy9pbWdzL2NydC5wbmdcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy90ZXN0LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9maWxlLWxvYWRlcj9uYW1lPWFzc2V0cy9bbmFtZV0uW2V4dF0hLi9hc3NldHMvaW1ncy90ZXN0LnBuZ1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZW4gZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoJ2tlbicsIFsnY291bnQnXSlcblxuICAgIHRoaXMuX29uS2V5ZG93biA9IHRoaXMub25LZXlkb3duLmJpbmQodGhpcylcbiAgICB0aGlzLl9vbktleXVwID0gdGhpcy5vbktleXVwLmJpbmQodGhpcylcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5dXApXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBzdXBlci5yZXNldCgpXG5cbiAgICB0aGlzLl9tb2RzID0gMFxuICAgIHRoaXMuX2pveXN0aWNrID0gMFxuICAgIHRoaXMuX2tleXMgPSB7fVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5dXApXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICBnZXQgbW9kcyAoKSB7IHJldHVybiB0aGlzLl9tb2RzIH1cbiAgZ2V0IGpveXN0aWNrICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrIH1cbiAgZ2V0IGtleXMgKCkgeyByZXR1cm4gdGhpcy5fa2V5cyB9XG5cbiAgZ2V0IHNoaWZ0ICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDAxIH1cbiAgZ2V0IGN0cmwgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyAmIDB4MDIgfVxuICBnZXQgYWx0ICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDA0IH1cbiAgZ2V0IG1ldGEgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyAmIDB4MDggfVxuICBnZXQgbnVtcGFkICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDEwIH1cbiAgZ2V0IGJ0bjAgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDEwIH1cbiAgZ2V0IGJ0bjEgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDIwIH1cbiAgZ2V0IGJ0bjIgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDQwIH1cbiAgZ2V0IGJ0bjMgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDgwIH1cbiAgZ2V0IGJ0bjQgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDEwMCB9XG4gIGdldCB1cCAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MDEgfVxuICBnZXQgZG93biAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MDIgfVxuICBnZXQgcmlnaHQgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDA0IH1cbiAgZ2V0IGxlZnQgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDA4IH1cblxuICBldmVudERldGFpbHMgKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBlLmtleSxcbiAgICAgIGtleUNvZGU6IGUua2V5Q29kZSxcbiAgICAgIGtleXM6IHRoaXMuX2tleXMsXG4gICAgICBtb2RzOiB0aGlzLl9tb2RzLFxuICAgICAgam95c3RpY2s6IHRoaXMuX2pveXN0aWNrLFxuICAgICAgc2hpZnQ6IHRoaXMuc2hpZnQsXG4gICAgICBjdHJsOiB0aGlzLmN0cmwsXG4gICAgICBhbHQ6IHRoaXMuYWx0LFxuICAgICAgbWV0YTogdGhpcy5tZXRhLFxuICAgICAgbnVtcGFkOiB0aGlzLm51bXBhZCxcbiAgICAgIGJ0bjA6IHRoaXMuYnRuMCxcbiAgICAgIGJ0bjE6IHRoaXMuYnRuMSxcbiAgICAgIGJ0bjI6IHRoaXMuYnRuMixcbiAgICAgIGJ0bjM6IHRoaXMuYnRuMyxcbiAgICAgIGJ0bjQ6IHRoaXMuYnRuNCxcbiAgICAgIHVwOiB0aGlzLnVwLFxuICAgICAgZG93bjogdGhpcy5kb3duLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgfVxuICB9XG5cbiAgb25LZXlkb3duIChlKSB7XG4gICAgbGV0IG51bXBhZCA9IGUubG9jYXRpb24gPT09IDNcbiAgICBpZiAobnVtcGFkKSB7XG4gICAgICB0aGlzLl9tb2RzIHw9IDB4MTBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9tb2RzICY9IH4weDEwXG4gICAgfVxuICAgIHRoaXMuX2tleXNbZS5rZXlDb2RlXSA9IDFcblxuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ1NoaWZ0JzpcbiAgICAgICAgdGhpcy5fbW9kcyB8PSAweDAxXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0NvbnRyb2wnOlxuICAgICAgICB0aGlzLl9tb2RzIHw9IDB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQWx0JzpcbiAgICAgICAgdGhpcy5fbW9kcyB8PSAweDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ01ldGEnOlxuICAgICAgICB0aGlzLl9tb2RzIHw9IDB4MDhcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnOCc6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDAxXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICcyJzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDJcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzQnOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwNFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDA4XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzYnOiAvLyBudW1wYWQgNlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwOFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3onOiAvLyBidXR0b24gMFxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDEwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3gnOiAvLyBidXR0b24gMVxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDIwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2MnOiAvLyBidXR0b24gMlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDQwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJyAnOiAvLyBidXR0b24gM1xuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDgwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0VudGVyJzogLy8gYnV0dG9uIDRcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgxMDBcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ2tleS5kb3duJywgdGhpcy5ldmVudERldGFpbHMoZSkpXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICBvbktleXVwIChlKSB7XG4gICAgbGV0IG51bXBhZCA9IGUubG9jYXRpb24gPT09IDNcbiAgICBpZiAobnVtcGFkKSB7XG4gICAgICB0aGlzLl9tb2RzIHw9IDB4MTBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9tb2RzICY9IH4weDEwXG4gICAgfVxuICAgIHRoaXMuX2tleXNbZS5rZXlDb2RlXSA9IDBcblxuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ1NoaWZ0JzpcbiAgICAgICAgdGhpcy5fbW9kcyAmPSB+MHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdDb250cm9sJzpcbiAgICAgICAgdGhpcy5fbW9kcyAmPSB+MHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBbHQnOlxuICAgICAgICB0aGlzLl9tb2RzICY9IH4weDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ01ldGEnOlxuICAgICAgICB0aGlzLl9tb2RzICY9IH4weDA4XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICc4JzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDAxXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnMic6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwMlxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzQnOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDRcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDhcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnNic6IC8vIG51bXBhZCA2XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwOFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3onOiAvLyBidXR0b24gMFxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgxMFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICd4JzogLy8gYnV0dG9uIDFcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MjBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnYyc6IC8vIGJ1dHRvbiAyXG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDQwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJyAnOiAvLyBidXR0b24gM1xuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHg4MFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdFbnRlcic6IC8vIGJ1dHRvbiA0XG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDEwMFxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgna2V5LnVwJywgdGhpcy5ldmVudERldGFpbHMoZSkpXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL2tlbi5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlja2V5IGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdtaWNrZXknLCBbJ2NvdW50JywgJ2ZyYW1lJywgJ3dpZHRoJywgJ2hlaWdodCcsICdjb2xvcicsICdkYmxDbGlja0RlbGF5JywgJ2RibENsaWNrRGlzdGFuY2UnXSlcblxuICAgIHRoaXMuX2RlZmF1bHRfZnJhbWUgPSB0aGlzLl9mcmFtZVxuICAgIHRoaXMuX2RlZmF1bHRfY29sb3IgPSB0aGlzLl9jb2xvclxuXG4gICAgbGV0IHN0YWdlID0gbWFpbi5zdGFnZVxuICAgIGlmIChzdGFnZSkge1xuICAgICAgc3RhZ2UuaW50ZXJhY3RpdmUgPSB0cnVlXG5cbiAgICAgIHRoaXMuX29uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpXG4gICAgICB0aGlzLl9vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKVxuICAgICAgdGhpcy5fb25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKVxuXG4gICAgICBzdGFnZS5vbignbW91c2Vkb3duJywgdGhpcy5fb25Nb3VzZURvd24pXG4gICAgICBzdGFnZS5vbigncmlnaHRkb3duJywgdGhpcy5fb25Nb3VzZURvd24pXG4gICAgICBzdGFnZS5vbigndG91Y2hzdGFydCcsIHRoaXMuX29uTW91c2VEb3duKVxuXG4gICAgICBzdGFnZS5vbignbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUpXG5cbiAgICAgIHN0YWdlLm9uKCdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub24oJ3RvdWNoZW5kJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub24oJ21vdXNldXBvdXRzaWRlJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub24oJ3RvdWNoZW5kb3V0c2lkZScsIHRoaXMuX29uTW91c2VVcClcbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBzdXBlci5yZXNldCgpXG5cbiAgICB0aGlzLl94ID0gMFxuICAgIHRoaXMuX3kgPSAwXG4gICAgdGhpcy5fY29sb3IgPSB0aGlzLl9kZWZhdWx0X2NvbG9yXG4gICAgdGhpcy5fZnJhbWUgPSB0aGlzLl9kZWZhdWx0X2ZyYW1lXG4gICAgdGhpcy5fYnRucyA9IDBcblxuICAgIHRoaXMubWVtb3J5LmZyb21fYXJyYXlfbWFzayh0aGlzLl90b3AgKyB0aGlzLl9mcmFtZSAqIHRoaXMuX2NlbGxfc2l6ZSwgW1xuICAgICAgJy4uICAgICcsXG4gICAgICAnLlguICAgJyxcbiAgICAgICcuWFguICAnLFxuICAgICAgJy5YWFguICcsXG4gICAgICAnLlhYWFguJyxcbiAgICAgICcuWC4uLi4nLFxuICAgICAgJy4uLiAgICcsXG4gICAgXSwgeyAnICc6IDE2LCBYOiAxNSwgJy4nOiAwIH0pXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgbGV0IHN0YWdlID0gdGhpcy5fbWFpbi5zdGFnZVxuICAgIGlmIChzdGFnZSkge1xuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlRG93bilcbiAgICAgIHN0YWdlLm9mZigncmlnaHRkb3duJywgdGhpcy5fb25Nb3VzZURvd24pXG4gICAgICBzdGFnZS5vZmYoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vbk1vdXNlRG93bilcblxuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSlcblxuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub2ZmKCd0b3VjaGVuZCcsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9mZignbW91c2V1cG91dHNpZGUnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgICBzdGFnZS5vZmYoJ3RvdWNoZW5kb3V0c2lkZScsIHRoaXMuX29uTW91c2VVcClcbiAgICB9XG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICBnZXQgeCAoKSB7IHJldHVybiB0aGlzLl94IH1cbiAgc2V0IHggKHZhbHVlKSB7XG4gICAgdGhpcy5yZXN0b3JlKClcbiAgICB0aGlzLl94ID0gdmFsdWVcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgZ2V0IHkgKCkgeyByZXR1cm4gdGhpcy5feSB9XG4gIHNldCB5ICh2YWx1ZSkge1xuICAgIHRoaXMucmVzdG9yZSgpXG4gICAgdGhpcy5feSA9IHZhbHVlXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIGdldCBmcmFtZSAoKSB7IHJldHVybiB0aGlzLl9mcmFtZSB9XG4gIHNldCBmcmFtZSAodmFsdWUpIHtcbiAgICB0aGlzLnJlc3RvcmUoKVxuICAgIHRoaXMuX2ZyYW1lID0gdmFsdWVcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgZ2V0IGJ0bnMgKCkgeyByZXR1cm4gdGhpcy5fYnRucyB9XG4gIHNldCBidG5zICh2YWx1ZSkge1xuICAgIHRoaXMuX2J0bnMgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGRibENsaWNrRGVsYXkgKCkgeyByZXR1cm4gdGhpcy5fZGJsQ2xpY2tEZWxheSB9XG5cbiAgZ2V0IGRibENsaWNrRGlzdGFuY2UgKCkgeyByZXR1cm4gdGhpcy5fZGJsQ2xpY2tEaXN0YW5jZSB9XG5cbiAgc3RvcmUgKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5ndWlkZW8uY29weV9yZWN0KHggfHwgdGhpcy5feCwgeSB8fCB0aGlzLl95LCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCB0aGlzLl90b3AgKyB0aGlzLl9jb3VudCAqIHRoaXMuX2NlbGxfc2l6ZSlcbiAgfVxuXG4gIHJlc3RvcmUgKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5ndWlkZW8uYmxpdCh0aGlzLl90b3AgKyB0aGlzLl9jb3VudCAqIHRoaXMuX2NlbGxfc2l6ZSwgeCB8fCB0aGlzLl94LCB5IHx8IHRoaXMuX3ksIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gIH1cblxuICBkcmF3IChmcmFtZSwgeCwgeSwgY29sb3IpIHtcbiAgICB0aGlzLnN0b3JlKHgsIHkpXG4gICAgcmV0dXJuIHRoaXMuZ3VpZGVvLmJsaXQodGhpcy5fdG9wICsgKGZyYW1lIHx8IHRoaXMuX2ZyYW1lKSAqIHRoaXMuX2NlbGxfc2l6ZSwgeCB8fCB0aGlzLl94LCB5IHx8IHRoaXMuX3ksIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gIH1cblxuICBnZXRFdmVudEluZm8gKGUpIHtcbiAgICBsZXQgcmVuZGVyZXIgPSB0aGlzLl9tYWluLnJlbmRlcmVyXG5cbiAgICBsZXQgc2l6ZSA9IG5ldyBQSVhJLlBvaW50KHJlbmRlcmVyLndpZHRoIC0gdGhpcy5fd2lkdGgsIHJlbmRlcmVyLmhlaWdodCAtIHRoaXMuX2hlaWdodClcblxuICAgIGxldCB4ID0gTWF0aC50cnVuYyhNYXRoLm1pbihzaXplLngsIE1hdGgubWF4KDAsIGUuZGF0YS5nbG9iYWwueCkpIC8gdGhpcy5ndWlkZW8uc2NhbGUpXG4gICAgbGV0IHkgPSBNYXRoLnRydW5jKE1hdGgubWluKHNpemUueSwgTWF0aC5tYXgoMCwgZS5kYXRhLmdsb2JhbC55KSkgLyB0aGlzLmd1aWRlby5zY2FsZSlcblxuICAgIHJldHVybiB7IHgsIHksIGJ1dHRvbjogZS5kYXRhLm9yaWdpbmFsRXZlbnQuYnV0dG9uIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duIChlKSB7XG4gICAgbGV0IHsgeCwgeSwgYnV0dG9uIH0gPSB0aGlzLmdldEV2ZW50SW5mbyhlKVxuXG4gICAgc3dpdGNoIChidXR0b24pIHtcbiAgICAgIGNhc2UgMDogLy8gbGVmdFxuICAgICAgICB0aGlzLl9idG5zIHw9IDB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAxOiAvLyBtaWRkbGVcbiAgICAgICAgdGhpcy5fYnRucyB8PSAweDAyXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgMjogLy8gcmlnaHRcbiAgICAgICAgdGhpcy5fYnRucyB8PSAweDA0XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdtb3VzZS5kb3duJywgeyB4LCB5LCBidXR0b24gfSlcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuXG4gIG9uTW91c2VNb3ZlIChlKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmd1aWRlby53aWR0aFxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ3VpZGVvLmhlaWdodFxuXG4gICAgbGV0IHsgeCwgeSwgYnV0dG9uIH0gPSB0aGlzLmdldEV2ZW50SW5mbyhlKVxuXG4gICAgdGhpcy5yZXN0b3JlKClcblxuICAgIHRoaXMuX3ggPSBNYXRoLm1pbih4LCB3aWR0aCAtIHRoaXMuX3dpZHRoKVxuICAgIHRoaXMuX3kgPSBNYXRoLm1pbih5LCBoZWlnaHQgLSB0aGlzLl9oZWlnaHQpXG5cbiAgICB0aGlzLmRyYXcoKVxuXG4gICAgdGhpcy5lbWl0KCdtb3VzZS5tb3ZlJywgeyB4LCB5LCBidXR0b24gfSlcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuXG4gIG9uTW91c2VVcCAoZSkge1xuICAgIGxldCB7IHgsIHksIGJ1dHRvbiB9ID0gdGhpcy5nZXRFdmVudEluZm8oZSlcblxuICAgIHN3aXRjaCAoYnV0dG9uKSB7XG4gICAgICBjYXNlIDA6IC8vIGxlZnRcbiAgICAgICAgdGhpcy5fYnRucyAmPSB+MHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIDE6IC8vIG1pZGRsZVxuICAgICAgICB0aGlzLl9idG5zICY9IH4weDAyXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgMjogLy8gcmlnaHRcbiAgICAgICAgdGhpcy5fYnRucyAmPSB+MHgwNFxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnbW91c2UudXAnLCB7IHgsIHksIGJ1dHRvbiB9KVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy9taWNrZXkuanMiXSwic291cmNlUm9vdCI6IiJ9