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
	
	var _ken = __webpack_require__(80);
	
	var _ken2 = _interopRequireDefault(_ken);
	
	var _mickey = __webpack_require__(81);
	
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
	    value: function defaults(name, defaultValue) {
	      return _.get(_globals.defaults, name, defaultValue);
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
	
	  border: {
	    size: 64,
	    color: 12
	  },
	
	  guideo: {
	    width: 240,
	    height: 168,
	    scale: 4
	  },
	
	  rainbow: {
	    count: 16,
	    data_format: 'i32'
	  },
	
	  fonzo: {
	    count: 256,
	    width: 6,
	    height: 7
	  },
	
	  orwell: {
	    width: 240 / 6,
	    height: 168 / 7
	  },
	
	  beagle: {
	    width: 6,
	    height: 7,
	    color: 15,
	    blinkrate: 500,
	    visible: true
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
	  },
	
	  runtime_errors: {
	    0x01: 'Out of memory',
	    0x02: 'Stack underflow',
	    0x03: 'Stack overflow',
	    0x04: 'Invalid stack address',
	    0x05: 'Stack address already assigned',
	    0x06: 'Interrupt already exists',
	    0x07: 'Interrupt not found',
	    0x08: 'Address out of bounds'
	  }
	
	};
	
	var errors = 0;
	
	var error = function error(t, msg) {
	  debugger;
	  exports.errors = errors += 1;
	  console.error(msg, 'at', t.value, '(' + t.row + ',' + t.col + ')');
	  return null;
	};
	
	var runtime_error = function runtime_error(code) {
	  console.error(defaults.runtime_errors[code] || 'Unknown runtime error');
	  return 0;
	};
	
	exports.defaults = defaults;
	exports.errors = errors;
	exports.error = error;
	exports.runtime_error = runtime_error;

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
	    key: 'db',
	    value: function db(type, addr, args) {
	      var sz = data_type_sizes[type];
	      var fn = this._view['set' + data_type_fns[type]];
	
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
	    key: 'ld',
	    value: function ld(type, addr) {
	      return this._view['get' + data_type_fns[type]](addr, this._main.LE);
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
	    key: 'st',
	    value: function st(type, addr, value) {
	      this._view['set' + data_type_fns[type]](addr, value, this._main.LE);
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
	    key: 'ldl',
	    value: function ldl(addr, size) {
	      return this._data.slice(addr, addr + size - 1);
	    }
	  }, {
	    key: 'lds',
	    value: function lds(addr) {
	      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : data_type_sizes.str;
	
	      var data = this._data;
	      var bottom = Math.min(addr + size - 1, this._bottom);
	      var s = '';
	
	      while (addr <= bottom) {
	        var c = data[addr++];
	        if (c === 0) {
	          break;
	        } else {
	          s += String.fromCharCode(c);
	        }
	      }
	
	      return s;
	    }
	  }, {
	    key: 'stl',
	    value: function stl(addr, value, size) {
	      this._data.set(value.subarray(0, size || value.byteLength), addr);
	    }
	  }, {
	    key: 'sts',
	    value: function sts(addr, str) {
	      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : data_type_sizes.str - 1;
	
	      var a = _.map(str.split(''), function (i) {
	        return i.charCodeAt(0);
	      });
	      a.length = Math.min(size, a.length);
	      this.fill(0, addr, size);
	      this._data.set(a, addr);
	    }
	  }, {
	    key: 'fill',
	    value: function fill(value, top, size) {
	      this._data.fill(value || 0, top, top + size);
	    }
	  }, {
	    key: 'copy',
	    value: function copy(src, tgt, size) {
	      this._data.copyWithin(tgt, src, src + size - 1);
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
	    value: function from_string(addr, str, mask) {
	      var data = this._data;
	      var w = str.length;
	
	      for (var x = 0; x < w; x++) {
	        var c = str[x];
	        data[addr++] = mask ? mask[c] : c;
	      }
	
	      return addr;
	    }
	  }, {
	    key: 'from_array',
	    value: function from_array(addr, arr, mask) {
	      var h = arr.length;
	
	      for (var y = 0; y < h; y++) {
	        if (_.isArray(arr[y])) {
	          addr = this.from_array(addr, arr[y], mask);
	        } else {
	          addr = this.from_string(addr, arr[y], mask);
	        }
	      }
	
	      return addr;
	    }
	  }, {
	    key: 'from_2d_array',
	    value: function from_2d_array(addr, frame, count, width, arr, mask) {
	      var h = arr.length;
	      var fullWidth = width * count;
	      var offset = frame * width;
	
	      for (var y = 0; y < h; y++) {
	        var ti = addr + y * fullWidth + offset;
	        if (_.isArray(arr[y])) {
	          this.from_2d_array(ti, frame, count, width, arr[y], mask);
	        } else {
	          this.from_string(ti, arr[y], mask);
	        }
	      }
	    }
	  }, {
	    key: 'to_string',
	    value: function to_string(addr, size, mask) {
	      var data = this._data;
	      var s = '';
	
	      var ti = addr;
	      for (var y = 0; y < size; y++) {
	        var d = data[ti++];
	        s += String.fromCharCode(mask ? mask[d] : d);
	      }
	
	      return s;
	    }
	  }, {
	    key: 'to_array',
	    value: function to_array(addr, w, h, mask) {
	      var arr = [];
	
	      for (var y = 0; y < h; y++) {
	        arr.push(this.to_string(addr + y * w, w, mask));
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
	
	var _globals = __webpack_require__(12);
	
	var _utils = __webpack_require__(3);
	
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
	        (0, _globals.runtime_error)(0x01);
	        return 0;
	      }
	
	      var addr = n + 1;
	
	      this._blocks.push({ top: addr, bottom: addr + size - 1, size: size, count: count, type: type, used: true });
	
	      this._main.memory.fill(0, addr, size);
	
	      return addr;
	    }
	  }, {
	    key: 'alloc',
	    value: function alloc(type, count) {
	      var addr = this._alloc(type, count);
	      var main = this._main;
	
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
	
	            main.write(v, a, type);
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
	      return this;
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
	          console.log('offset:', (0, _utils.hex)(b.top, 32), 'size:', this.size(b.top), 'type:', this.type(b.top));
	          console.log(_hexy2.default.hexy(this._main.mem_buffer, { offset: b.top, length: Math.min(255, b.size), width: 16, caps: 'upper', indent: 2 }));
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
	
	    this.reset();
	  }
	
	  _createClass(StackEntry, [{
	    key: 'reset',
	    value: function reset() {
	      this._ptr = this._top;
	
	      return this;
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
	
	      var ptr = this._ptr;
	
	      for (var _len = arguments.length, value = Array(_len), _key = 0; _key < _len; _key++) {
	        value[_key] = arguments[_key];
	      }
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var v = _step.value;
	
	          if (rolling && ptr >= bottom) {
	            this.copy(top + sz, top, bottom - sz);
	            ptr -= sz;
	          }
	          if (ptr + sz < bottom) {
	            this.write(v, ptr, t);
	            ptr += sz;
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
	
	      this._ptr = ptr;
	
	      return this;
	    }
	  }, {
	    key: 'pop',
	    value: function pop() {
	      if (this._ptr > this._top) {
	        this._ptr -= this._size;
	        return this.read(this._ptr, this._type);
	      }
	      (0, _globals.runtime_error)(0x02);
	      return 0;
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
	
	      return this;
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this._list = {};
	    }
	  }, {
	    key: 'new',
	    value: function _new(offset, max, type, size, rolling) {
	      return !this._list[offset] ? new (Function.prototype.bind.apply(StackEntry, [null].concat([this], Array.prototype.slice.call(arguments))))() : (0, _globals.runtime_error)(0x04);
	    }
	  }, {
	    key: 'push',
	    value: function push(offset) {
	      var s = this._list[offset];
	
	      for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        values[_key2 - 1] = arguments[_key2];
	      }
	
	      return s ? s.push.apply(s, values) : (0, _globals.runtime_error)(0x04);
	    }
	  }, {
	    key: 'pop',
	    value: function pop(offset) {
	      var s = this._list[offset];
	      return s ? s.pop() : (0, _globals.runtime_error)(0x04);
	    }
	  }, {
	    key: 'used',
	    value: function used(offset) {
	      var s = this._list[offset];
	      return s ? s.used : (0, _globals.runtime_error)(0x04);
	    }
	  }, {
	    key: 'max',
	    value: function max(offset) {
	      var s = this._list[offset];
	      return s ? s.max : (0, _globals.runtime_error)(0x04);
	    }
	  }, {
	    key: 'size',
	    value: function size(offset) {
	      var s = this._list[offset];
	      return s ? s.size : (0, _globals.runtime_error)(0x04);
	    }
	  }, {
	    key: 'type',
	    value: function type(offset) {
	      var s = this._list[offset];
	      return s ? s.type : (0, _globals.runtime_error)(0x04);
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
	
	var _violet = __webpack_require__(74);
	
	var _violet2 = _interopRequireDefault(_violet);
	
	var _overlays = __webpack_require__(75);
	
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
	
	    var borderSize = main.defaults('border.size', 0) * 2;
	
	    _this._renderer = new PIXI.autoDetectRenderer(_this._width * _this._scale + borderSize, _this._height * _this._scale + borderSize, {});
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
	
	      this._overlays = new _overlays.Overlays(main, {
	        border: { size: main.defaults('border.size', 0), color: main.defaults('border.color', 0) },
	        screen: { scale: this._scale },
	        scanlines: {},
	        scanline: {},
	        rgb: {},
	        noises: {},
	        crt: {},
	        monitor: {}
	      });
	
	      this._screen = this._overlays.screen;
	      this._screen._data = this._data;
	
	      this._fonzo = new _fonzo2.default(main);
	      this._orwell = new _orwell2.default(main);
	      this._beagle = new _beagle2.default(main);
	      this._violet = new _violet2.default(main);
	
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
	        this._screen.updateTexture(this._data, this._rainbow);
	
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
	    value: function blit(addr, x, y, w, h, fg, bg) {
	      var mem = this.memory.data;
	      var data = this._data;
	      var top = this._top;
	      var width = this._width;
	      var count = this.rainbow.count;
	
	      var hasFg = !_.isUndefined(fg);
	      var hasBg = !_.isUndefined(bg);
	
	      for (var by = 0; by < h; by++) {
	        var ti = top + ((y + by) * width + x);
	        for (var bx = 0; bx < w; bx++) {
	          var c = mem[addr++];
	          if (c < count) {
	            // not transparent
	            if (hasFg) {
	              c = fg;
	            }
	          } else {
	            c = hasBg ? bg : data[ti];
	          }
	          data[ti++] = c;
	        }
	      }
	
	      return this;
	    }
	  }, {
	    key: 'blit_array',
	    value: function blit_array(arr, x, y, mask) {
	      var data = this._data;
	      var top = this._top;
	      var width = this._width;
	
	      var w = _.first(arr).length;
	      var h = arr.length;
	
	      for (var by = 0; by < h; by++) {
	        var ti = top + ((by + y) * width + x);
	        for (var bx = 0; bx < w; bx++) {
	          var a = arr[by];
	          data[ti++] = mask ? mask[a] : a;
	        }
	      }
	
	      return this;
	    }
	  }, {
	    key: 'copy_rect',
	    value: function copy_rect(x, y, w, h, addr) {
	      var mem = this.memory.data;
	      var data = this._data;
	      var top = this._top;
	      var width = this._width;
	
	      for (var by = 0; by < h; by++) {
	        var si = top + ((by + y) * width + x);
	        for (var bx = 0; bx < w; bx++) {
	          mem[addr++] = data[si++];
	        }
	      }
	
	      return this;
	    }
	  }, {
	    key: 'fillrect',
	    value: function fillrect(x, y, w, h, color) {
	      var data = this._data;
	      var top = this._top;
	      var width = this._width;
	
	      for (var by = 0; by < h; by++) {
	        var si = top + ((by + y) * width + x);
	        for (var bx = 0; bx < w; bx++) {
	          data[si++] = color;
	        }
	      }
	
	      return this;
	    }
	  }, {
	    key: 'to_array',
	    value: function to_array(x, y, w, h, mask) {
	      var data = this._data;
	      var top = this._top;
	      var width = this._width;
	
	      var arr = [];
	
	      for (var by = 0; by < h; by++) {
	        var ti = top + ((by + y) * width + x);
	        var s = '';
	        for (var bx = 0; bx < w; bx++) {
	          var d = data[ti++];
	          s += mask ? mask[d] : String.fromCharCode(d);
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
	
	      var tex = PIXI.Texture.fromImage('./build/' + __webpack_require__(77)("./" + filename), undefined, PIXI.SCALE_MODES.NEAREST);
	      tex.on('update', function () {
	        return _this2.update();
	      });
	      return tex;
	    }
	  }, {
	    key: 'test',
	    value: function test() {
	      this.guideo.clear(12);
	
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
	    key: 'screenSprite',
	    get: function get() {
	      return this._screen.sprite;
	    }
	  }, {
	    key: 'spritesLayer',
	    get: function get() {
	      return this._screen.spritesLayer;
	    }
	  }, {
	    key: 'mouseLayer',
	    get: function get() {
	      return this._screen.mouseLayer;
	    }
	  }, {
	    key: 'cursorLayer',
	    get: function get() {
	      return this._screen.cursorLayer;
	    }
	  }, {
	    key: 'texture',
	    get: function get() {
	      return this._screen.texture;
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
	      return this.split(rgba).r;
	    }
	  }, {
	    key: 'to_green',
	    value: function to_green(rgba) {
	      return this.split(rgba).g;
	    }
	  }, {
	    key: 'to_blue',
	    value: function to_blue(rgba) {
	      return this.split(rgba).b;
	    }
	  }, {
	    key: 'to_alpha',
	    value: function to_alpha(rgba) {
	      return this.split(rgba).a;
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
	    key: 'color_rgb',
	    value: function color_rgb(c) {
	      c = this._data[c];
	      c = this._LE ? reverse(c) : c;
	      return c >> 8;
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
	
	    _this._width = 0;
	    _this._height = 0;
	
	    _this._count = 0;
	
	    _this._data = null;
	    _this._data_format = null;
	    _this._top = 0;
	    _this._bottom = 0;
	    _this._size = 0;
	    _this._cell_size = 0;
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
	
	        this._size = this._cell_size * this._count;
	
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
	
	        this._data = new window[_memory.data_type_fns[this._data_format] + 'Array'](this.memory.buffer, this._top, this._size);
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
	    key: 'cell_size',
	    get: function get() {
	      return this._cell_size;
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
	
	      this.memory.from_array(this._top + 33 * this._cell_size, [['      ', '   w  ', '   w  ', '   w  ', '      ', '   w  ', '      '], ['      ', '  w w ', '  w w ', '      ', '      ', '      ', '      '], ['      ', '  ww  ', ' wwww ', '  ww  ', ' wwww ', '  ww  ', '      '], ['      ', '  www ', ' www  ', '  w w ', ' www  ', '  w   ', '      '], ['      ', ' w  w ', '   w  ', '  w   ', ' w  w ', '      ', '      '], ['      ', '  w   ', ' w w  ', ' www w', ' w  w ', '  ww w', '      '], ['      ', '  w   ', '  w   ', '      ', '      ', '      ', '      '], ['      ', '   w  ', '  w   ', '  w   ', '  w   ', '   w  ', '      '], ['      ', '  w   ', '   w  ', '   w  ', '   w  ', '  w   ', '      '], ['      ', ' w w  ', '  w   ', ' www  ', '  w   ', ' w w  ', '      '], ['      ', '      ', '  w   ', ' www  ', '  w   ', '      ', '      '], ['      ', '      ', '      ', '      ', '  w   ', ' w    ', '      '], ['      ', '      ', '      ', ' www  ', '      ', '      ', '      '], ['      ', '      ', '      ', '      ', '      ', '  w   ', '      '], ['      ', '    w ', '   w  ', '  w   ', ' w    ', '      ', '      '], ['      ', ' wwww ', ' w  w ', ' w  w ', ' w  w ', ' wwww ', '      '], ['      ', '   w  ', '  ww  ', '   w  ', '   w  ', '   w  ', '      '], ['      ', ' www  ', '    w ', '  ww  ', ' w    ', ' wwww ', '      '], ['      ', ' www  ', '    w ', '  ww  ', '    w ', ' www  ', '      '], ['      ', ' w  w ', ' w  w ', ' wwww ', '    w ', '    w ', '      '], ['      ', ' wwww ', ' w    ', ' www  ', '    w ', ' www  ', '      '], ['      ', '  www ', ' w    ', ' www  ', ' w  w ', '  ww  ', '      '], ['      ', ' wwww ', '    w ', '   w  ', '   w  ', '  w   ', '      '], ['      ', '  ww  ', ' w  w ', '  ww  ', ' w  w ', '  ww  ', '      '], ['      ', ' wwww ', ' w  w ', ' wwww ', '    w ', ' wwww ', '      '], ['      ', '      ', '  w   ', '      ', '  w   ', '      ', '      '], ['      ', '      ', '  w   ', '      ', '  w   ', ' w    ', '      '], ['      ', '   w  ', '  w   ', ' w    ', '  w   ', '   w  ', '      '], ['      ', '      ', ' www  ', '      ', ' www  ', '      ', '      '], ['      ', ' w    ', '  w   ', '   w  ', '  w   ', ' w    ', '      '], ['      ', ' ww   ', '   w  ', '  w   ', '      ', '  w   ', '      '], ['      ', '  ww  ', ' w ww ', ' w ww ', ' w    ', '  www ', '      '], ['      ', '  ww  ', ' w  w ', ' wwww ', ' w  w ', ' w  w ', '      '], ['      ', ' www  ', ' w  w ', ' www  ', ' w  w ', ' www  ', '      '], ['      ', '  www ', ' w    ', ' w    ', ' w    ', '  www ', '      '], ['      ', ' www  ', ' w  w ', ' w  w ', ' w  w ', ' www  ', '      '], ['      ', ' wwww ', ' w    ', ' www  ', ' w    ', ' wwww ', '      '], ['      ', ' wwww ', ' w    ', ' www  ', ' w    ', ' w    ', '      '], ['      ', '  ww  ', ' w  w ', ' w    ', ' w ww ', '  ww  ', '      '], ['      ', ' w  w ', ' w  w ', ' wwww ', ' w  w ', ' w  w ', '      '], ['      ', ' www  ', '  w   ', '  w   ', '  w   ', ' www  ', '      '], ['      ', '  www ', '   w  ', '   w  ', ' w w  ', '  w   ', '      '], ['      ', ' w  w ', ' w w  ', ' ww   ', ' w w  ', ' w  w ', '      '], ['      ', ' w    ', ' w    ', ' w    ', ' w    ', ' wwww ', '      '], ['      ', ' w   w', ' wwwww', ' w w w', ' w   w', ' w   w', '      '], ['      ', ' w   w', ' ww  w', ' w w w', ' w  ww', ' w   w', '      '], ['      ', '  ww  ', ' w  w ', ' w  w ', ' w  w ', '  ww  ', '      '], ['      ', ' www  ', ' w  w ', ' www  ', ' w    ', ' w    ', '      '], ['      ', '  ww  ', ' w  w ', ' w  w ', ' w  w ', '  ww  ', '   w  '], ['      ', ' www  ', ' w  w ', ' www  ', ' w  w ', ' w  w ', '      '], ['      ', '  www ', ' w    ', '  ww  ', '    w ', ' www  ', '      '], ['      ', ' wwwww', '   w  ', '   w  ', '   w  ', '   w  ', '      '], ['      ', ' w  w ', ' w  w ', ' w  w ', ' w  w ', '  ww  ', '      '], ['      ', ' w   w', ' w   w', ' w   w', '  w w ', '   w  ', '      '], ['      ', ' w   w', ' w   w', ' w   w', ' w w w', ' ww ww', '      '], ['      ', ' w   w', '  w w ', '   w  ', '  w w ', ' w   w', '      '], ['      ', ' w   w', '  w w ', '   w  ', '   w  ', '   w  ', '      '], ['      ', ' wwww ', '    w ', '  ww  ', ' w    ', ' wwww ', '      '], ['      ', ' www  ', ' w    ', ' w    ', ' w    ', ' www  ', '      '], ['      ', ' w    ', '  w   ', '   w  ', '    w ', '      ', '      '], ['      ', '  www ', '    w ', '    w ', '    w ', '  www ', '      '], ['      ', '  w   ', ' w w  ', '      ', '      ', '      ', '      '], ['      ', '      ', '      ', '      ', '      ', ' wwww ', '      '], ['      ', '  w   ', '   w  ', '      ', '      ', '      ', '      '], ['      ', '  ww  ', '    w ', '  www ', ' w  w ', '  ww  ', '      '], ['      ', ' w    ', ' www  ', ' w  w ', ' w  w ', ' www  ', '      '], ['      ', '      ', '  www ', ' w    ', ' w    ', '  www ', '      '], ['      ', '    w ', '  www ', ' w  w ', ' w  w ', '  www ', '      '], ['      ', '  ww  ', ' w  w ', ' wwww ', ' w    ', '  www ', '      '], ['      ', '  ww  ', ' w  w ', 'www   ', ' w    ', ' w    ', '      '], ['      ', '  ww  ', ' w  w ', '  www ', '    w ', ' www  ', '      '], ['      ', ' w    ', ' w    ', ' www  ', ' w  w ', ' w  w ', '      '], ['      ', '  w   ', '      ', '  w   ', '  w   ', '  w   ', '      '], ['      ', '    w ', '      ', '    w ', ' w  w ', '  ww  ', '      '], ['      ', '    w ', ' w w  ', ' ww   ', ' w w  ', ' w  w ', '      '], ['      ', '   w  ', '   w  ', '   w  ', '   w  ', '   w  ', '      '], ['      ', '      ', '  w w ', ' w w w', ' w   w', ' w   w', '      '], ['      ', '      ', ' www  ', ' w  w ', ' w  w ', ' w  w ', '      '], ['      ', '      ', '  ww  ', ' w  w ', ' w  w ', '  ww  ', '      '], ['      ', '      ', '  ww  ', ' w  w ', ' www  ', ' w    ', '      '], ['      ', '      ', '  ww  ', ' w  w ', '  www ', '    w ', '      '], ['      ', '      ', '  ww  ', ' w  w ', ' w    ', ' w    ', '      '], ['      ', '  ww  ', ' w    ', '  w   ', '   w  ', ' ww   ', '      '], ['      ', '  w   ', ' www  ', '  w   ', '  w w ', '   w  ', '      '], ['      ', '      ', ' w  w ', ' w  w ', ' w  w ', '  ww  ', '      '], ['      ', '      ', ' w  w ', ' w w  ', ' ww   ', ' w    ', '      '], ['      ', '      ', ' w   w', ' w   w', ' w w w', '  w w ', '      '], ['      ', '      ', '  w w ', '   w  ', '   w  ', '  w w ', '      '], ['      ', '      ', ' w  w ', '  www ', '    w ', ' www  ', '      '], ['      ', '      ', ' wwww ', '   w  ', '  w   ', ' wwww ', '      '], ['      ', '   ww ', '  w   ', ' ww   ', '  w   ', '   ww ', '      '], ['      ', '  w   ', '  w   ', '  w   ', '  w   ', '  w   ', '      '], ['      ', ' ww   ', '   w  ', '   ww ', '   w  ', ' ww   ', '      '], ['      ', '      ', '    w ', '  ww  ', ' w    ', '      ', '      ']], _globals.defaults.chars_map);
	
	      this.test();
	    }
	  }, {
	    key: 'draw',
	    value: function draw(x, y, c, fg, bg) {
	      return this.guideo.blit(this._top + c * this._cell_size, x, y, this._width, this._height, fg, bg);
	    }
	  }, {
	    key: 'test',
	    value: function test() {
	      // this.draw(40, 40, 65, 10, 3)
	      // this.draw(47, 40, 66, 12, 15)
	      // this.draw(54, 40, 33, 5, 8)
	
	      var cw = this._width;
	      var ch = this._height;
	
	      var xx = 0;
	      var y = 4 * ch;
	      for (var x = 33; x < 73; x++) {
	        this.draw(xx * cw, y, x, _.random(2, 15));
	        xx++;
	      }
	
	      xx = 0;
	      y = 5 * ch;
	      for (var _x = 73; _x < 113; _x++) {
	        this.draw(xx * cw, y, _x, _.random(2, 15));
	        xx++;
	      }
	
	      xx = 0;
	      y = 6 * ch;
	      for (var _x2 = 113; _x2 < 126; _x2++) {
	        this.draw(xx * cw, y, _x2, _.random(2, 15));
	        xx++;
	      }
	
	      this.draw(10 * cw, 10 * ch, 'A'.charCodeAt(0));
	      this.draw(11 * cw, 10 * ch, 'l'.charCodeAt(0));
	      this.draw(12 * cw, 10 * ch, 'a'.charCodeAt(0));
	      this.draw(13 * cw, 10 * ch, 'i'.charCodeAt(0));
	      this.draw(14 * cw, 10 * ch, 'n'.charCodeAt(0));
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
	      var fonzo = this.fonzo;
	      var fw = fonzo.width;
	      var fh = fonzo.height;
	
	      var idx = 0;
	      for (var y = 0; y < h; y++) {
	        var py = y * fh;
	        for (var x = 0; x < w; x++) {
	          var c = mem[idx];
	          if (c) {
	            fonzo.draw(x * fw, py, c, mem[idx + 1], mem[idx + 2]);
	          }
	          idx += 3;
	        }
	      }
	    }
	  }, {
	    key: 'draw_char',
	    value: function draw_char(x, y, c, fg, bg) {
	      var fonzo = this.fonzo;
	      fonzo.draw(x * fonzo.width, y * fonzo.height, c, fg, bg);
	      return this;
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
	    value: function put_char(ch, fg, bg) {
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
	
	var _canvastexture = __webpack_require__(73);
	
	var _canvastexture2 = _interopRequireDefault(_canvastexture);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Beagle = function (_Chip) {
	  _inherits(Beagle, _Chip);
	
	  function Beagle(main) {
	    _classCallCheck(this, Beagle);
	
	    var _this = _possibleConstructorReturn(this, (Beagle.__proto__ || Object.getPrototypeOf(Beagle)).call(this, main));
	
	    _this.init('beagle', ['width', 'height', 'blinkrate', 'visible']);
	
	    _this._canvasTexture = new _canvastexture2.default();
	
	    _this._color = main.defaults('beagle.color', 15);
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Beagle, [{
	    key: 'reset',
	    value: function reset() {
	      _get(Beagle.prototype.__proto__ || Object.getPrototypeOf(Beagle.prototype), 'reset', this).call(this);
	
	      this._last = 0;
	
	      this._screenSprite = this.guideo.screenSprite;
	      this._scale = this.guideo.scale;
	
	      this._canvasTexture.destroy();
	
	      this._canvasTexture.create(this._width, this._height);
	
	      this._cursorLayer = this._main.guideo.cursorLayer;
	
	      if (this._sprite) {
	        this._sprite.destroy();
	        this._sprite = null;
	      }
	
	      this._cursorLayer.removeChildren();
	
	      this._sprite = new PIXI.Graphics();
	      this._sprite.visible = false;
	
	      this._cursorLayer.addChild(this._sprite);
	
	      this.draw();
	
	      return this.move_to(13, 6);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      if (this._sprite) {
	        this._sprite.destroy();
	        this._sprite = null;
	      }
	
	      this.cursorLayer.removeChildren();
	
	      this._canvasTexture.destroy();
	
	      _get(Beagle.prototype.__proto__ || Object.getPrototypeOf(Beagle.prototype), 'destroy', this).call(this);
	    }
	  }, {
	    key: 'tick',
	    value: function tick(t) {
	      if (t - this._last >= this._blinkrate) {
	        this.blink();
	        this._last = t;
	      }
	      _get(Beagle.prototype.__proto__ || Object.getPrototypeOf(Beagle.prototype), 'tick', this).call(this, t);
	    }
	  }, {
	    key: 'blink',
	    value: function blink() {
	      if (this._visible) {
	        this._sprite.visible = !this._sprite.visible;
	        this.update();
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
	      } else if (x < 0) {
	        x = 0;
	      }
	
	      if (y > h) {
	        y = h;
	      } else if (y < 0) {
	        y = 0;
	      }
	
	      this._x = x;
	      this._y = y;
	
	      this._sprite.x = x * this._width;
	      this._sprite.y = y * this._height;
	
	      return this.update();
	    }
	  }, {
	    key: 'move_by',
	    value: function move_by(x, y) {
	      return this.move_to(this._x + x, this._y + y);
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var c = this.guideo.rainbow.color_rgb(this._color);
	      this._sprite.beginFill(c, 1);
	      this._sprite.drawRect(0, 0, this._width, this._height);
	      this._sprite.endFill();
	      return this;
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
	      this.draw();
	      console.log(this._color);
	    }
	  }, {
	    key: 'cursorLayer',
	    get: function get() {
	      return this._cursorLayer;
	    }
	  }, {
	    key: 'sprite',
	    get: function get() {
	      return this._sprite;
	    }
	  }, {
	    key: 'canvasTexture',
	    get: function get() {
	      return this._canvasTexture;
	    }
	  }]);
	
	  return Beagle;
	}(_chip2.default);
	
	exports.default = Beagle;

/***/ },
/* 73 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CanvasTexture = function () {
	  function CanvasTexture() {
	    _classCallCheck(this, CanvasTexture);
	  }
	
	  _createClass(CanvasTexture, [{
	    key: 'create',
	    value: function create(width, height) {
	      this._width = width;
	      this._height = height;
	
	      this._size = width * height;
	
	      this._canvasBuffer = new PIXI.CanvasBuffer(width, height);
	
	      this._texture = PIXI.Texture.fromCanvas(this._canvasBuffer.canvas, PIXI.SCALE_MODES.NEAREST);
	      this._texture.scaleMode = PIXI.SCALE_MODES.NEAREST;
	
	      this._context = this._canvasBuffer.canvas.getContext('2d', { alpha: true, antialias: false });
	      this._context.clearRect(0, 0, width, height);
	
	      this._imageData = this._context.getImageData(0, 0, width, height);
	
	      this._pixels = new Uint32Array(this._imageData.data.buffer);
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
	    key: 'updateTexture',
	    value: function updateTexture(data, palette) {
	      if (this._context) {
	        var size = this._size;
	        var pixels = this._pixels;
	
	        for (var i = 0; i < size; i++) {
	          pixels[i] = palette.color(data[i]);
	        }
	
	        this._context.putImageData(this._imageData, 0, 0);
	
	        this._texture.update();
	      }
	
	      return this;
	    }
	  }, {
	    key: 'size',
	    get: function get() {
	      return this._size;
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
	  }, {
	    key: 'texture',
	    get: function get() {
	      return this._texture;
	    }
	  }, {
	    key: 'context',
	    get: function get() {
	      return this._context;
	    }
	  }, {
	    key: 'canvasBuffer',
	    get: function get() {
	      return this._canvasBuffer;
	    }
	  }, {
	    key: 'canvas',
	    get: function get() {
	      return this._canvasBuffer.canvas;
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
	    key: 'sprite',
	    get: function get() {
	      if (!this._sprite) {
	        this._sprite = new PIXI.Sprite(this._texture);
	      }
	      return this._sprite;
	    }
	  }]);
	
	  return CanvasTexture;
	}();
	
	exports.default = CanvasTexture;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(69);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	var _canvastexture = __webpack_require__(73);
	
	var _canvastexture2 = _interopRequireDefault(_canvastexture);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Violet = function (_Chip) {
	  _inherits(Violet, _Chip);
	
	  function Violet(main) {
	    _classCallCheck(this, Violet);
	
	    var _this = _possibleConstructorReturn(this, (Violet.__proto__ || Object.getPrototypeOf(Violet)).call(this, main));
	
	    _this.init('violet', ['data_size', 'count', 'width', 'height']);
	
	    _this._canvasTexture = new _canvastexture2.default();
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Violet, [{
	    key: 'reset',
	    value: function reset() {
	      _get(Violet.prototype.__proto__ || Object.getPrototypeOf(Violet.prototype), 'reset', this).call(this);
	
	      this._canvasTexture.destroy();
	
	      this._canvasTexture.create(this._width * this._count, this._height);
	
	      this._spritesLayer = this._main.guideo.spritesLayer;
	
	      this.clear();
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this._canvasTexture.destroy();
	
	      _get(Violet.prototype.__proto__ || Object.getPrototypeOf(Violet.prototype), 'destroy', this).call(this);
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      if (this._spritesLayer) {
	        this._spritesLayer.removeChildren();
	      }
	
	      _get(Violet.prototype.__proto__ || Object.getPrototypeOf(Violet.prototype), 'clear', this).call(this);
	
	      return this.update();
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this._canvasTexture.updateTexture(this._data, this.rainbow);
	    }
	  }, {
	    key: 'find',
	    value: function find(name) {
	      return _.find(this.spritesLayer.children, { _name: name });
	    }
	  }, {
	    key: 'add',
	    value: function add(name, frame, x, y, z) {
	      var s = new PIXI.Sprite(this._texture);
	      s._name = name;
	      this.frame(name, frame);
	      this.spritesLayer.addChild(s);
	      return s;
	    }
	  }, {
	    key: 'del',
	    value: function del(name) {
	      var s = this.find(name);
	      if (s) {
	        this.spritesLayer.removeChild(s);
	      }
	      return this;
	    }
	  }, {
	    key: 'frameRect',
	    value: function frameRect(frame) {
	      var w = this._width;
	      var h = this._height;
	      return new PIXI.Rectangle(frame * w, 0, frame * w + w, h);
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
	    key: 'frame',
	    value: function frame(name, value) {
	      var s = this.find(name);
	      if (s && value) {
	        s.__frame = value;
	        s.texture = new PIXI.Texture(this._canvasTexture.texture, this.frameRect(value));
	      }
	      return s ? s.__frame : 0;
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
	    key: 'spritesLayer',
	    get: function get() {
	      return this._spritesLayer;
	    }
	  }, {
	    key: 'canvasTexture',
	    get: function get() {
	      return this._canvasTexture;
	    }
	  }]);
	
	  return Violet;
	}(_chip2.default);
	
	exports.default = Violet;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Overlays = exports.CrtOverlay = exports.RgbOverlay = exports.NoisesOverlay = exports.ScanlineOverlay = exports.ScanlinesOverlay = exports.ScreenOverlay = exports.BorderOverlay = exports.Overlay = undefined;
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _canvastexture = __webpack_require__(73);
	
	var _canvastexture2 = _interopRequireDefault(_canvastexture);
	
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
	
	    this._canvasTexture = new _canvastexture2.default();
	
	    this.reset();
	  }
	
	  _createClass(Overlay, [{
	    key: 'create',
	    value: function create() {
	      return this.resize(this._width, this._height);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      if (this._sprite) {
	        this._sprite.destroy();
	        this._sprite = null;
	      }
	
	      this._canvasTexture.destroy();
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this._last = 0;
	
	      return this;
	    }
	  }, {
	    key: 'resize',
	    value: function resize(width, height) {
	      this._width = width;
	      this._height = height;
	
	      this._canvasTexture.destroy();
	
	      this._canvasTexture.create(width, height);
	
	      if (this._sprite) {
	        this._sprite.destroy();
	        this._sprite = null;
	      }
	
	      this._sprite = new PIXI.Sprite(this.texture);
	
	      return this;
	    }
	  }, {
	    key: 'tick',
	    value: function tick(t) {}
	  }, {
	    key: 'update',
	    value: function update() {
	      return this.guideo.update();
	    }
	  }, {
	    key: 'updateTexture',
	    value: function updateTexture(data, palette) {
	      this._canvasTexture.updateTexture(data, palette);
	      return this.guideo.update(true);
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
	    key: 'sprite',
	    get: function get() {
	      return this._sprite;
	    }
	  }, {
	    key: 'context',
	    get: function get() {
	      return this._canvasTexture.context;
	    }
	  }, {
	    key: 'texture',
	    get: function get() {
	      return this._canvasTexture.texture;
	    }
	  }, {
	    key: 'imageData',
	    get: function get() {
	      return this._canvasTexture.imageData;
	    }
	  }, {
	    key: 'pixels',
	    get: function get() {
	      return this._canvasTexture.pixels;
	    }
	  }]);
	
	  return Overlay;
	}();
	
	var BorderOverlay = exports.BorderOverlay = function (_Overlay) {
	  _inherits(BorderOverlay, _Overlay);
	
	  function BorderOverlay(overlays, width, height, options) {
	    _classCallCheck(this, BorderOverlay);
	
	    var _this = _possibleConstructorReturn(this, (BorderOverlay.__proto__ || Object.getPrototypeOf(BorderOverlay)).call(this, overlays, width + _lodash2.default.get(options, 'size', 0) * 2, height + _lodash2.default.get(options, 'size', 0) * 2));
	
	    _this.create();
	
	    _this._graphics = new PIXI.Graphics();
	    _this._sprite.addChild(_this._graphics);
	
	    _this.color = _lodash2.default.get(options, 'color', 0);
	    return _this;
	  }
	
	  _createClass(BorderOverlay, [{
	    key: 'color',
	    get: function get() {
	      return this._color;
	    },
	    set: function set(value) {
	      this._color = value;
	      var c = this.guideo.rainbow.color_rgb(this._color);
	      this._graphics.beginFill(c, 1);
	      this._graphics.drawRect(0, 0, this._width, this._height);
	      this._graphics.endFill();
	    }
	  }, {
	    key: 'graphics',
	    get: function get() {
	      return this._graphics;
	    }
	  }]);
	
	  return BorderOverlay;
	}(Overlay);
	
	var ScreenOverlay = exports.ScreenOverlay = function (_Overlay2) {
	  _inherits(ScreenOverlay, _Overlay2);
	
	  function ScreenOverlay(overlays, width, height, options) {
	    _classCallCheck(this, ScreenOverlay);
	
	    var _this2 = _possibleConstructorReturn(this, (ScreenOverlay.__proto__ || Object.getPrototypeOf(ScreenOverlay)).call(this, overlays, width, height));
	
	    _this2.create();
	    return _this2;
	  }
	
	  _createClass(ScreenOverlay, [{
	    key: 'create',
	    value: function create() {
	      _get(ScreenOverlay.prototype.__proto__ || Object.getPrototypeOf(ScreenOverlay.prototype), 'create', this).call(this);
	
	      this._sprite.x = this.main.defaults('border.size', 0);
	      this._sprite.y = this.main.defaults('border.size', 0);
	
	      this._cursorLayer = new PIXI.Container();
	      this._sprite.addChild(this._cursorLayer);
	
	      this._spritesLayer = new PIXI.Container();
	      this._sprite.addChild(this._spritesLayer);
	
	      this._mouseLayer = new PIXI.Container();
	      this._sprite.addChild(this._mouseLayer);
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this._data = null;
	      this._palette = null;
	
	      return _get(ScreenOverlay.prototype.__proto__ || Object.getPrototypeOf(ScreenOverlay.prototype), 'reset', this).call(this);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.updateTexture(this._data, this._palette);
	      return this.guideo.update(true);
	    }
	  }, {
	    key: 'spritesLayer',
	    get: function get() {
	      return this._spritesLayer;
	    }
	  }, {
	    key: 'mouseLayer',
	    get: function get() {
	      return this._mouseLayer;
	    }
	  }, {
	    key: 'cursorLayer',
	    get: function get() {
	      return this._cursorLayer;
	    }
	  }]);
	
	  return ScreenOverlay;
	}(Overlay);
	
	var ScanlinesOverlay = exports.ScanlinesOverlay = function (_Overlay3) {
	  _inherits(ScanlinesOverlay, _Overlay3);
	
	  function ScanlinesOverlay(overlays, width, height, options) {
	    _classCallCheck(this, ScanlinesOverlay);
	
	    var _this3 = _possibleConstructorReturn(this, (ScanlinesOverlay.__proto__ || Object.getPrototypeOf(ScanlinesOverlay)).call(this, overlays, width, height));
	
	    _this3._gap = _lodash2.default.get(options, 'gap', 4);
	    _this3._alpha = _lodash2.default.get(options, 'alpha', 0.35);
	
	    _this3.create();
	
	    var a = _this3._alpha * 255;
	    var data = _this3.context.getImageData(0, 0, _this3._width, _this3._height);
	    var pixels = data.data;
	    var sz = _this3._width * 4;
	    var idx = void 0;
	    for (var y = 0; y < _this3._height; y += _this3._gap) {
	      idx = y * sz;
	      for (var i = idx; i < idx + sz; i += 4) {
	        pixels.set([0, 0, 0, a], i);
	      }
	    }
	    _this3.context.putImageData(data, 0, 0);
	    return _this3;
	  }
	
	  return ScanlinesOverlay;
	}(Overlay);
	
	var ScanlineOverlay = exports.ScanlineOverlay = function (_Overlay4) {
	  _inherits(ScanlineOverlay, _Overlay4);
	
	  function ScanlineOverlay(overlays, width, height, options) {
	    _classCallCheck(this, ScanlineOverlay);
	
	    var _this4 = _possibleConstructorReturn(this, (ScanlineOverlay.__proto__ || Object.getPrototypeOf(ScanlineOverlay)).call(this, overlays, width, height));
	
	    _this4._rate = _lodash2.default.get(options, 'rate', 50);
	    _this4._speed = _lodash2.default.get(options, 'speed', 26);
	    _this4._alpha = _lodash2.default.get(options, 'alpha', 0.1);
	
	    _this4.create();
	
	    var data = _this4.context.getImageData(0, 0, _this4._width, _this4._height);
	    var pixels = data.data;
	    var sz = _this4._width * 4;
	    var len = _this4._height * sz;
	    var l = 0;
	    var h = _this4._height;
	    var a = _this4._alpha * 255;
	    var aa = void 0;
	
	    for (var y = 0; y < len; y += sz) {
	      aa = l / h * a;
	      for (var x = y; x < y + sz; x += 4) {
	        pixels.set([50, 50, 50, aa], x);
	      }
	      l++;
	    }
	
	    _this4.context.putImageData(data, 0, 0);
	
	    _this4._sprite.y = -_this4._sprite.height;
	    return _this4;
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
	
	var NoisesOverlay = exports.NoisesOverlay = function (_Overlay5) {
	  _inherits(NoisesOverlay, _Overlay5);
	
	  function NoisesOverlay(overlays, width, height, options) {
	    _classCallCheck(this, NoisesOverlay);
	
	    var _this5 = _possibleConstructorReturn(this, (NoisesOverlay.__proto__ || Object.getPrototypeOf(NoisesOverlay)).call(this, overlays, width, height));
	
	    _this5._rate = _lodash2.default.get(options, 'rate', 250);
	    _this5._count = _lodash2.default.get(options, 'count', 8);
	    _this5._rate = _lodash2.default.get(options, 'rate', 0.85);
	    _this5._red = _lodash2.default.get(options, 'red', 100);
	    _this5._green = _lodash2.default.get(options, 'green', 100);
	    _this5._blue = _lodash2.default.get(options, 'blue', 100);
	    _this5._alpha = _lodash2.default.get(options, 'alpha', 0.15);
	
	    _this5._noises = {};
	
	    var a = _this5._alpha * 255;
	    for (var c = 0; c < _this5._count; c++) {
	      var noise = new Overlay(overlays, _this5._width, _this5._height);
	      noise.create();
	      noise._sprite.visible = c === 0;
	
	      var data = noise.context.getImageData(0, 0, _this5._width, _this5._height);
	      var _pixels = data.data;
	      var _len = _pixels.length;
	      var r = _this5._red;
	      var g = _this5._green;
	      var b = _this5._blue;
	      var _rate = _this5._rate;
	      for (var i = 0; i < _len; i += 4) {
	        if (Math.random() >= _rate) {
	          _pixels.set([Math.trunc(Math.random() * r), Math.trunc(Math.random() * g), Math.trunc(Math.random() * b), a], i);
	        }
	      }
	      noise.context.putImageData(data, 0, 0);
	      _this5._noises[c] = noise;
	      _this5.stage.addChild(noise.sprite);
	    }
	
	    _this5._noiseKeys = _lodash2.default.keys(_this5._noises);
	    return _this5;
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
	
	var RgbOverlay = exports.RgbOverlay = function (_Overlay6) {
	  _inherits(RgbOverlay, _Overlay6);
	
	  function RgbOverlay(overlays, width, height, options) {
	    _classCallCheck(this, RgbOverlay);
	
	    var _this6 = _possibleConstructorReturn(this, (RgbOverlay.__proto__ || Object.getPrototypeOf(RgbOverlay)).call(this, overlays, width, height));
	
	    _this6._alpha = _lodash2.default.get(options, 'alpha', 0.075);
	
	    _this6.create();
	
	    var data = _this6.context.getImageData(0, 0, _this6._width, _this6._height);
	    var pixels = data.data;
	    var len = pixels.length;
	    var a = _this6._alpha * 255;
	    for (var i = 0; i < len; i += 12) {
	      pixels.set([100, 100, 100, a], i);
	    }
	    _this6.context.putImageData(data, 0, 0);
	    return _this6;
	  }
	
	  return RgbOverlay;
	}(Overlay);
	
	var CrtOverlay = exports.CrtOverlay = function (_Overlay7) {
	  _inherits(CrtOverlay, _Overlay7);
	
	  function CrtOverlay(overlays, width, height, options) {
	    _classCallCheck(this, CrtOverlay);
	
	    var _this7 = _possibleConstructorReturn(this, (CrtOverlay.__proto__ || Object.getPrototypeOf(CrtOverlay)).call(this, overlays, width, height));
	
	    _this7._radius = _lodash2.default.get(options, 'radius', 0.25);
	    _this7._inside_alpha = _lodash2.default.get(options, 'inside_alpha', 0.2);
	    _this7._outside_alpha = _lodash2.default.get(options, 'outside_alpha', 0.15);
	
	    _this7.create();
	
	    _this7.context.globalCompositeOperation = 'darker';
	    var gradient = _this7.context.createRadialGradient(_this7._width / 2, _this7._height / 2, _this7._height / 2, _this7._width / 2, _this7._height / 2, _this7._height / _this7._radius);
	    gradient.addColorStop(0, 'rgba(255, 255, 255, ' + _this7._inside_alpha + ')');
	    gradient.addColorStop(1, 'rgba(0, 0, 0, ' + _this7._outside_alpha + ')');
	    _this7.context.fillStyle = gradient;
	    _this7.context.fillRect(0, 0, _this7._width, _this7._height);
	    _this7.context.globalCompositeOperation = 'source-over';
	    return _this7;
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
	
	    if (_lodash2.default.get(options, 'border')) {
	      _createOverlay(this, BorderOverlay, 'border', { width: width, height: height });
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
	      var _w = _lodash2.default.get(options, 'monitor.width', width);
	      var _h2 = _lodash2.default.get(options, 'monitor.height', height);
	      var s = _lodash2.default.get(options, 'monitor.scale', 1);
	
	      var tex = PIXI.Texture.fromImage('./build/' + __webpack_require__(76));
	      l.monitor = new PIXI.Sprite(tex);
	      l.monitor.x = 0;
	      l.monitor.y = 0;
	      l.monitor.width = _w;
	      l.monitor.height = _h2;
	      l.monitor.scale = new PIXI.Point(s, s);
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/assets/imgs//crt.png";

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./crt.png": 78,
		"./test.png": 79
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
	webpackContext.id = 77;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/crt.png";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/test.png";

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
/* 81 */
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
	
	var _canvastexture = __webpack_require__(73);
	
	var _canvastexture2 = _interopRequireDefault(_canvastexture);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Mickey = function (_Chip) {
	  _inherits(Mickey, _Chip);
	
	  function Mickey(main) {
	    _classCallCheck(this, Mickey);
	
	    var _this = _possibleConstructorReturn(this, (Mickey.__proto__ || Object.getPrototypeOf(Mickey)).call(this, main));
	
	    _this.init('mickey', ['count', 'width', 'height', 'frame', 'color', 'dblClickDelay', 'dblClickDistance']);
	
	    _this._canvasTexture = new _canvastexture2.default();
	
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
	
	      this._screenSprite = this.guideo.screenSprite;
	      this._scale = this.guideo.scale;
	
	      this._x = 0;
	      this._y = 0;
	      this._color = this._default_color;
	      this._frame = this._default_frame;
	      this._btns = 0;
	
	      this._canvasTexture.destroy();
	
	      this._canvasTexture.create(this._width * this._count, this._height);
	
	      this._mouseLayer = this._main.guideo.mouseLayer;
	
	      if (this._sprite) {
	        this._sprite.destroy();
	        this._sprite = null;
	      }
	
	      this._mouseLayer.removeChildren();
	
	      this.memory.from_2d_array(this._top, 0, this.count, this._width, ['..    ', '.w.   ', '.ww.  ', '.www. ', '.wwww.', '.w....', '...   '], _globals.defaults.chars_map);
	
	      this.update();
	
	      this._sprite = new PIXI.Sprite(this._canvasTexture.texture);
	
	      this.frame = this._default_frame;
	
	      this._mouseLayer.addChild(this._sprite);
	
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
	
	      if (this._sprite) {
	        this._sprite.destroy();
	        this._sprite = null;
	      }
	
	      this.mouseLayer.removeChildren();
	
	      this._canvasTexture.destroy();
	
	      _get(Mickey.prototype.__proto__ || Object.getPrototypeOf(Mickey.prototype), 'destroy', this).call(this);
	    }
	  }, {
	    key: 'frameRect',
	    value: function frameRect(frame) {
	      var w = this._width;
	      var h = this._height;
	      return new PIXI.Rectangle(frame * w, 0, frame * w + w, h);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this._canvasTexture.updateTexture(this._data, this.rainbow);
	      return this;
	    }
	  }, {
	    key: 'getEventInfo',
	    value: function getEventInfo(e) {
	      var renderer = this._main.renderer;
	
	      var size = new PIXI.Point(renderer.width - this._width, renderer.height - this._height);
	
	      var gx = e.data.global.x - this._screenSprite.x;
	      var gy = e.data.global.y - this._screenSprite.y;
	
	      var x = Math.trunc(Math.min(size.x, Math.max(0, gx)) / this._scale);
	      var y = Math.trunc(Math.min(size.y, Math.max(0, gy)) / this._scale);
	
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
	
	      this.x = Math.min(x, width - this._width);
	      this.y = Math.min(y, height - this._height);
	
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
	    key: 'mouseLayer',
	    get: function get() {
	      return this._mouseLayer;
	    }
	  }, {
	    key: 'sprite',
	    get: function get() {
	      return this._sprite;
	    }
	  }, {
	    key: 'canvasTexture',
	    get: function get() {
	      return this._canvasTexture;
	    }
	  }, {
	    key: 'x',
	    get: function get() {
	      return this._x;
	    },
	    set: function set(value) {
	      this._x = value;
	      this._sprite.x = value;
	    }
	  }, {
	    key: 'y',
	    get: function get() {
	      return this._y;
	    },
	    set: function set(value) {
	      this._y = value;
	      this._sprite.y = value;
	    }
	  }, {
	    key: 'frame',
	    get: function get() {
	      return this._frame;
	    },
	    set: function set(value) {
	      this._frame = value;
	      this._sprite.texture = new PIXI.Texture(this._canvasTexture.texture, this.frameRect(this._frame));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDQyZmQ5OTc5MmNjNzkwNDk4ODEiLCJ3ZWJwYWNrOi8vLy4vYXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGl4aS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYi1hdWRpby1kYXdcIiIsIndlYnBhY2s6Ly8vLi9hcHAvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJhZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBlcmZvcm1hbmNlLW5vd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1peHdpdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuZGVyc2NvcmUtcGx1c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9hcHAvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9tYWluLmNzcz9mNDgyIiwid2VicGFjazovLy8uL3N0eWxlL21haW4uY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9sZXhlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL3R5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvYXNzaWducy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2RlbGltaXRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2dyb3Vwcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2xpdGVyYWxzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvb3BlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL3Jlc2VydmVkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy9pbmNsdWRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2tleV9saXRlcmFsLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvc3RhdGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2lkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvYXNzaWduLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvcmV0dXJuLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9jb25kaXRpb25zLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvdmFyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvbG9vcHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZXhwcmVzc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZGljdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9mbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9pZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdHJhbnNwaWxlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3N0YXRlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9leHByZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3ByaW1pdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9vcGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9pZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NsYXNzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZm4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2RpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL21lbW9yeS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZXh5XCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL21lbW9yeW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJldHR5LWJ5dGVzXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL3N0YWNrLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9pbnRlcnJ1cHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL2d1aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvcmFpbmJvdy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvY2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvZm9uem8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL29yd2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvYmVhZ2xlLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9jYW52YXN0ZXh0dXJlLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy92aW9sZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL292ZXJsYXlzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWdzL2NydC5wbmc/M2U4MiIsIndlYnBhY2s6Ly8vXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1ncy9jcnQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWdzL3Rlc3QucG5nIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL21pY2tleS5qcyJdLCJuYW1lcyI6WyJfU1RPUFBFRCIsIl9SVU5OSU5HIiwiX1BBVVNFRCIsIk1haW4iLCJvcHRpb25zIiwicmVzZXQiLCJfdXBkYXRlcyIsInF1ZXVlIiwiYWRkIiwibyIsIl8iLCJnZXQiLCJfX2luVXBkYXRlcyIsInB1c2giLCJyZW1vdmUiLCJyZWplY3QiLCJvYmplY3QiLCJiIiwiQXJyYXlCdWZmZXIiLCJhIiwiVWludDMyQXJyYXkiLCJjIiwiVWludDhBcnJheSIsIkxFIiwiX21lbW9yeSIsIl9tZW1vcnlNYW5hZ2VyIiwiX3N0YWNrIiwiX2ludGVycnVwdHMiLCJfZ3VpZGVvIiwiY3JlYXRlQ2hpcHMiLCJfa2VuIiwiX21pY2tleSIsIl9vblJlc2l6ZSIsIm9uUmVzaXplIiwiYmluZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aGF0IiwiUElYSSIsInRpY2tlciIsInNoYXJlZCIsInN0YXR1cyIsInRpY2siLCJwZXJmb3JtYW5jZSIsIm5vdyIsImRlbHRhIiwicSIsImNiIiwiYXJncyIsInN0YXJ0IiwiZGVzdHJveSIsIl9zdGF0dXMiLCJfcHJvZ3JhbSIsInBhdGgiLCJ1bmRlZmluZWQiLCJjb2RlIiwiZm4iLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwiZW1pdCIsInN0b3AiLCJ0IiwidG9rZW5zIiwicnVuIiwiY29uc29sZSIsImxvZyIsInAiLCJub2RlcyIsImVycm9ycyIsIkZ1bmN0aW9uIiwiYXBwbHkiLCJ0ZXN0IiwidmFsdWUiLCJfc3RhZ2UiLCJfcmVuZGVyZXIiLCJtYWluIiwiYXBwIiwiZWxlY3Ryb24iLCJyZXF1aXJlIiwicmVtb3RlIiwic2NyZWVuIiwiZGlhbG9nIiwiQnJvd3NlcldpbmRvdyIsImV4dGVuZCIsInRlbXBsYXRlU2V0dGluZ3MiLCJpbnRlcnBvbGF0ZSIsImZzIiwiTWl4aW4iLCJtaXgiLCJ1c2VyUGF0aCIsImpvaW4iLCJnZXRBcHBQYXRoIiwiZXhpc3RzU3luYyIsIm1rZGlycyIsIklTX1dJTiIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsIklTX09TWCIsIklTX0xJTlVYIiwiZGlycyIsImJ1aWxkIiwiX19kaXJuYW1lIiwiY3dkIiwiaG9tZSIsImdldFBhdGgiLCJ1c2VyIiwidG1wIiwicm9vdCIsIm5vZGVfbW9kdWxlcyIsInVzZXJfcGtnIiwiZ2V0TmFtZSIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwib3BlbkZpbGUiLCJzaG93T3BlbkRpYWxvZyIsImVyciIsImVycm9yIiwic2F2ZUZpbGUiLCJzaG93U2F2ZURpYWxvZyIsIm1lc3NhZ2VCb3giLCJzaG93TWVzc2FnZUJveCIsIm1hcF9nZXR0ZXJzIiwic291cmNlIiwidGFyZ2V0IiwiZGVmcyIsImsiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNhbGwiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwibWFwX2dldHRlcnNfcmV0dXJuX3RoaXMiLCJkZWxheSIsIm1zIiwiYXN5bmMiLCJjb250ZXh0IiwiaXNOdW1iZXIiLCJpc0FycmF5Iiwic2V0VGltZW91dCIsImJ1ZmZlcl90b19zdHJpbmciLCJsZW4iLCJsZW5ndGgiLCJpIiwicyIsInRvU3RyaW5nIiwic3RyaW5nX3RvX2J1ZmZlciIsInN0ciIsIkJ1ZmZlciIsIk1hdGgiLCJ0cnVuYyIsIngiLCJoZXgiLCJzdWJzdHIiLCJwYXJzZUludCIsInN0cmluZ19idWZmZXIiLCJ3cml0ZSIsIm5vcm1hbGl6ZU1lc3NhZ2VzIiwibWVzc2FnZSIsIm0iLCJpc1N0cmluZyIsInNpemUiLCJwYWRTdGFydCIsImJ1ZmZlcl9kdW1wIiwiYnVmZmVyIiwid2lkdGgiLCJjYXBzIiwiaW5kZW50IiwicmVwZWF0IiwiemVybyIsIm4iLCJtYXgiLCJ0b1VwcGVyQ2FzZSIsIm1pbiIsImJ5dGVMZW5ndGgiLCJyb3dzIiwiY2VpbCIsImxhc3QiLCJvZmZzZXRMZW5ndGgiLCJhcnIiLCJsYXN0Qnl0ZXMiLCJsYXN0U3BhY2VzIiwiaiIsInYiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJ1dG9hIiwiYnRvYSIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYXRvdSIsImRlY29kZVVSSUNvbXBvbmVudCIsImVzY2FwZSIsImF0b2IiLCJpbnN0YW5jZUZ1bmN0aW9uIiwiZm9yY2UiLCJoYXNPd25Qcm9wZXJ0eSIsIndyaXRhYmxlIiwiaW5zdGFuY2VGdW5jdGlvbnMiLCJuYW1lcyIsInJhZiIsIlBvaW50IiwicHJvdG90eXBlIiwiZGlzdGFuY2UiLCJzcXJ0IiwieSIsInRlbXBsYXRlIiwiUmVjdGFuZ2xlIiwiZGVmYXVsdHMiLCJib3VuZHNjaGVjayIsInR5cGUiLCJtZW1vcnkiLCJtZW1vcnlfbWFuYWdlciIsImNvbGxlY3RfZGVsYXkiLCJib3JkZXIiLCJjb2xvciIsImd1aWRlbyIsImhlaWdodCIsInNjYWxlIiwicmFpbmJvdyIsImNvdW50IiwiZGF0YV9mb3JtYXQiLCJmb256byIsIm9yd2VsbCIsImJlYWdsZSIsImJsaW5rcmF0ZSIsInZpc2libGUiLCJ2aW9sZXQiLCJrZW4iLCJtaWNrZXkiLCJmcmFtZSIsImRibENsaWNrRGVsYXkiLCJkYmxDbGlja0Rpc3RhbmNlIiwibmV0d29yayIsImFsdG8iLCJjaGFyc19tYXAiLCJyIiwiZyIsIkUiLCJlIiwiUiIsIkciLCJZIiwiQiIsIlAiLCJDIiwidyIsInJ1bnRpbWVfZXJyb3JzIiwibXNnIiwicm93IiwiY29sIiwicnVudGltZV9lcnJvciIsIkV2ZW50IiwiZGF0YSIsImJ1YmJsZXMiLCJfX2V2ZW50T2JqZWN0IiwidGltZVN0YW1wIiwic3RvcHBlZCIsInN0b3BwZWRJbW1lZGlhdGUiLCJkZWZhdWx0UHJldmVudGVkIiwiRW1pdHRlciIsIm9yZGVyIiwiX2xpc3RlbmVycyIsInNvcnRCeSIsIm9uY2VIYW5kbGVyV3JhcHBlciIsIm9mZiIsIl9vcmlnaW5hbEhhbmRsZXIiLCJvbiIsImxpc3QiLCJzcGxpY2UiLCJpc0VtcHR5Iiwib3JpZ0V2ZW50RGF0YSIsImxpc3RlbmVycyIsImNsb25lIiwibCIsImNhbmNlbEJ1YmJsZSIsInBhcmVudCIsIlRva2VuIiwibGV4ZXIiLCJlbmQiLCJfdHlwZSIsIl9yZXNlcnZlZCIsIm9mZnNldCIsImxpbmUiLCJjb2x1bW4iLCJwYXJ0cyIsInNwbGl0IiwiaXMiLCJpc1JlZ0V4cCIsIm1hdGNoIiwiYmFzZW5hbWUiLCJFbXB0eUNsYXNzIiwiTGV4ZXIiLCJ0ZXh0IiwiY29uc3RhbnRzIiwidmFsaWRPZmZzZXQiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJwb3NfaW5mbyIsInRva2VuIiwiaW5kZXhPZiIsImNoYXJfYXQiLCJuZXh0X2lzX3NwYWNlIiwib2xkX29mZnNldCIsInRva2VuX3R5cGVzIiwic3VidGV4dCIsImluZGV4Iiwic2xpY2UiLCJpbnNlcnRUb2tlbiIsInBlZWsiLCJjb25zdF90b2tlbiIsImluY2x1ZGVfdG9rZW4iLCJuZXh0IiwiaW5mbyIsIndpdGgiLCJfdG9rZW5fdHlwZXMiLCJzdXBlcmNsYXNzIiwiYXNzaWduIiwibWF0aF9hc3NpZ24iLCJsb2dpY19hc3NpZ24iLCJmbl9hc3NpZ24iLCJlb2wiLCJjb21tYSIsImNvbG9uIiwiY29tbWVudCIsIm9wZW5fcGFyZW4iLCJjbG9zZV9wYXJlbiIsIm9wZW5fYnJhY2tldCIsImNsb3NlX2JyYWNrZXQiLCJvcGVuX2N1cmx5IiwiY2xvc2VfY3VybHkiLCJrZXkiLCJpZCIsImlkX2ZpZWxkIiwidGhpcyIsInRoaXNfZmllbGQiLCJzeW1ib2wiLCJtYXRoIiwibG9naWMiLCJjb21wIiwibnVtYmVyIiwic3RyaW5nIiwiY2hhciIsImluY2x1ZGUiLCJjb25zdCIsInJlc2VydmVkIiwiZXh0bmFtZSIsInBuIiwic3RhdFN5bmMiLCJzcmMiLCJyZWFkRmlsZVN5bmMiLCJseCIsImNvbmNhdCIsIk5vZGUiLCJwYXJzZXIiLCJfaW5fY2xhc3MiLCJfZm5fbGV2ZWwiLCJ0b2tlbl9wcm9wIiwiUGFyc2VyIiwiZnJhbWVzIiwicHJldl9mcmFtZSIsImluX2NsYXNzIiwiZm5fbGV2ZWwiLCJlb3MiLCJtYXRjaGVzIiwidG9rZW5fYXQiLCJlbmRfbmV4dCIsInNraXAiLCJleHBlY3QiLCJsZWZ0IiwicmlnaHQiLCJleHByIiwibm9kZSIsInN0YXRlbWVudHMiLCJGcmFtZSIsIkZyYW1lcyIsIkZyYW1lSXRlbSIsImN1cnJlbnQiLCJpdGVtX3R5cGUiLCJleGlzdHMiLCJpc19sb2NhbCIsImlzX2dsb2JhbCIsIml0ZW1zIiwiX2dsb2JhbCIsImZpbmQiLCJibG9ja190eXBlIiwibG9vcF93aGlsZSIsInN0YXRlbWVudCIsImJsb2NrIiwidmFyX3N0YXRlbWVudCIsImFzc2lnbl9zdGF0ZW1lbnQiLCJpZl9zdGF0ZW1lbnQiLCJmb3Jfc3RhdGVtZW50Iiwid2hpbGVfc3RhdGVtZW50IiwicmV0dXJuX3N0YXRlbWVudCIsInNpbmdsZV9zdGF0ZW1lbnQiLCJjbGFzc19zdGF0ZW1lbnQiLCJpZF9zdGF0ZW1lbnQiLCJmaXJzdCIsInN1cGVyX2V4cHIiLCJpZF9leHByIiwiZm5fZXhwciIsIl9mbiIsImV4cHJzIiwic2luZ2xlIiwiX2V4dGVuZHMiLCJjbGFzc19saXN0IiwiYm9keSIsImV4cGVjdF9lbmQiLCJleHByX2Jsb2NrIiwidHJ1ZV9ib2R5IiwiZmFsc2VfYm9keSIsImVsc2Vfc3RhdGVtZW50IiwiX2xldCIsIm1pbl9leHByIiwibWF4X2V4cHIiLCJzdGVwX2V4cHIiLCJzaW1wbGVfZXhwciIsInRlcm0iLCJ0ZXJtX2V4cHIiLCJmYWN0b3IiLCJmYWN0b3JfZXhwciIsImNvbmRpdGlvbmFsIiwiY29uZGl0aW9uYWxfZXhwciIsImp1bmN0aW9uIiwianVuY3Rpb25fZXhwciIsIm5leHRfZXhwcl9ub2RlIiwic3ViX2V4cHIiLCJhcnJheV9leHByIiwiZGljdF9leHByIiwidGhpc19leHByIiwibmV3X2V4cHIiLCJkZWYiLCJrZXlfbGl0ZXJhbCIsImZuX2FyZ3NfZGVmIiwiZm5fYXJnIiwiZmllbGRzIiwiX2ZpZWxkIiwiVHJhbnNwaWxlciIsIm5vZGVfYXQiLCJ2YWx1ZXMiLCJsaW5lcyIsImluZGVudF9sZXZlbCIsImVuZHNXaXRoIiwicmVwbGFjZSIsImNvZGVfc3RhcnQiLCJ3cml0ZWxuIiwiY29kZV9lbmQiLCJkIiwibm9kZV90ZW1wbGF0ZSIsImZuX2NhbGxfdGVtcGxhdGUiLCJmbl9hc3NpZ25fdGVtcGxhdGUiLCJhcnJheV90ZW1wbGF0ZSIsImRpY3RfdGVtcGxhdGUiLCJvcGVyYXRvcl90ZW1wbGF0ZSIsInRoaXNfdGVtcGxhdGUiLCJuZXdfdGVtcGxhdGUiLCJzdHJpbmdfdGVtcGxhdGUiLCJpZF90ZW1wbGF0ZSIsInZhbHVlX3RlbXBsYXRlIiwibG4iLCJzdGF0ZW1lbnRfdGVtcGxhdGUiLCJmbl9jYWxsIiwidG1wbCIsImRhdCIsIndvcmQiLCJzZXBhcmF0b3IiLCJvcCIsImV4cHJfdGVtcGxhdGUiLCJmaWVsZCIsImRvdCIsImJsb2NrX3RlbXBsYXRlIiwiZm5fZGVmIiwibWFwIiwiZiIsImRhdGFfdHlwZV9zaXplcyIsImk4IiwiczgiLCJpMTYiLCJzMTYiLCJpMzIiLCJzMzIiLCJmMzIiLCJkYXRhX3R5cGVfZm5zIiwiZGF0YV90eXBlX3NpemUiLCJNZW1vcnkiLCJfc2l6ZSIsIl90b3AiLCJfYm90dG9tIiwiX2J1ZmZlciIsIl9kYXRhIiwiX3ZpZXciLCJEYXRhVmlldyIsImNsZWFyIiwiZmlsbCIsImFkZHIiLCJzeiIsIl9tYWluIiwibGQiLCJzdCIsImJvdHRvbSIsInNldCIsInN1YmFycmF5IiwiY2hhckNvZGVBdCIsInRvcCIsInRndCIsImNvcHlXaXRoaW4iLCJsZHMiLCJzdHMiLCJtYXNrIiwiaCIsImZyb21fYXJyYXkiLCJmcm9tX3N0cmluZyIsImZ1bGxXaWR0aCIsInRpIiwiZnJvbV8yZF9hcnJheSIsInRvX3N0cmluZyIsImhleHkiLCJNZW1vcnlNYW5hZ2VyIiwiX2NvbGxlY3RfZGVsYXkiLCJfYmxvY2tzIiwiX2xhc3QiLCJjb2xsZWN0IiwidXNlZCIsIm9iIiwiYXZhaWxfbWVtIiwiX2FsbG9jIiwidXNlZF9tZW0iLCJmcmVlX21lbSIsIm1lbV9idWZmZXIiLCJTdGFja0VudHJ5Iiwic3RhY2siLCJyb2xsaW5nIiwiX21heCIsIl9yb2xsaW5nIiwiX3B0ciIsInB0ciIsImNvcHkiLCJyZWFkIiwidG90YWxfc2l6ZSIsIlN0YWNrIiwiX2xpc3QiLCJhcmd1bWVudHMiLCJwb3AiLCJfSU5UX1JVTk5JTkciLCJfSU5UX1BBVVNFRCIsIkludGVycnVwdCIsInN0b3BfYWxsIiwiR3VpZGVvIiwiaW5pdCIsImJvcmRlclNpemUiLCJhdXRvRGV0ZWN0UmVuZGVyZXIiLCJfd2lkdGgiLCJfc2NhbGUiLCJfaGVpZ2h0IiwidmlldyIsInN0eWxlIiwicG9zaXRpb24iLCJjdXJzb3IiLCJkb2N1bWVudCIsImFwcGVuZENoaWxkIiwiQ29udGFpbmVyIiwicmVzaXplIiwiX3JhaW5ib3ciLCJfZm9uem8iLCJfb3J3ZWxsIiwiX2JlYWdsZSIsIl92aW9sZXQiLCJfb3ZlcmxheXMiLCJzY2FubGluZXMiLCJzY2FubGluZSIsInJnYiIsIm5vaXNlcyIsImNydCIsIm1vbml0b3IiLCJfc2NyZWVuIiwiY2xlYXJSZWN0IiwiX2ltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsIl9waXhlbHMiLCJfZm9yY2VfcmVkcmF3IiwiX2ZvcmNlX2ZsaXAiLCJyZWRyYXciLCJ1cGRhdGVUZXh0dXJlIiwicmVuZGVyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY2VudGVyIiwidG9JbmRleCIsImZnIiwiYmciLCJtZW0iLCJoYXNGZyIsImlzVW5kZWZpbmVkIiwiaGFzQmciLCJieSIsImJ4Iiwic2kiLCJsdyIsInVwZGF0ZSIsImZpbGVuYW1lIiwidGV4IiwiVGV4dHVyZSIsImZyb21JbWFnZSIsIlNDQUxFX01PREVTIiwiTkVBUkVTVCIsInBpeGVsIiwic3ByaXRlIiwic3ByaXRlc0xheWVyIiwibW91c2VMYXllciIsImN1cnNvckxheWVyIiwidGV4dHVyZSIsImNhbnZhc0J1ZmZlciIsImNhbnZhcyIsInQzMiIsInQ4IiwicmV2ZXJzZSIsIlJhaW5ib3ciLCJfTEUiLCJyZ2JhIiwiX2NvdW50IiwiY3VycmVudE9mZnNldCIsIkNoaXAiLCJfZGF0YV9mb3JtYXQiLCJfY2VsbF9zaXplIiwiX2RhdGFfc2l6ZSIsImtleXMiLCJub2RhdGEiLCJkYXRhX3NpemUiLCJjZWxsX3NpemUiLCJmbGlwIiwiZm9yY2VfcmVkcmF3IiwiZm9yY2VfZmxpcCIsIkZvbnpvIiwiYmxpdCIsImN3IiwiY2giLCJ4eCIsImRyYXciLCJyYW5kb20iLCJPcndlbGwiLCJmdyIsImZoIiwiaWR4IiwicHkiLCJ0aWR4IiwiY3IiLCJicyIsInBvcyIsImRyYXdfY2hhciIsInB1dF9jaGFyIiwibW92ZV90byIsIm1vdmVfYnkiLCJzeSIsInR5Iiwic3giLCJ0eCIsImxzIiwiZHkiLCJCZWFnbGUiLCJfY2FudmFzVGV4dHVyZSIsIl9jb2xvciIsIl9zY3JlZW5TcHJpdGUiLCJzY3JlZW5TcHJpdGUiLCJjcmVhdGUiLCJfY3Vyc29yTGF5ZXIiLCJfc3ByaXRlIiwicmVtb3ZlQ2hpbGRyZW4iLCJHcmFwaGljcyIsImFkZENoaWxkIiwiX2JsaW5rcmF0ZSIsImJsaW5rIiwiX3Zpc2libGUiLCJfeCIsIl95IiwiY29sb3JfcmdiIiwiYmVnaW5GaWxsIiwiZHJhd1JlY3QiLCJlbmRGaWxsIiwiQ2FudmFzVGV4dHVyZSIsIl9jYW52YXNCdWZmZXIiLCJDYW52YXNCdWZmZXIiLCJfdGV4dHVyZSIsImZyb21DYW52YXMiLCJzY2FsZU1vZGUiLCJfY29udGV4dCIsImdldENvbnRleHQiLCJhbHBoYSIsImFudGlhbGlhcyIsInBhbGV0dGUiLCJwaXhlbHMiLCJwdXRJbWFnZURhdGEiLCJTcHJpdGUiLCJWaW9sZXQiLCJfc3ByaXRlc0xheWVyIiwiY2hpbGRyZW4iLCJfbmFtZSIsInoiLCJyZW1vdmVDaGlsZCIsIl9fZnJhbWUiLCJmcmFtZVJlY3QiLCJPdmVybGF5Iiwib3ZlcmxheXMiLCJzdGFnZSIsInJlbmRlcmVyIiwiaW1hZ2VEYXRhIiwiQm9yZGVyT3ZlcmxheSIsIl9ncmFwaGljcyIsIlNjcmVlbk92ZXJsYXkiLCJfbW91c2VMYXllciIsIl9wYWxldHRlIiwiU2NhbmxpbmVzT3ZlcmxheSIsIl9nYXAiLCJfYWxwaGEiLCJTY2FubGluZU92ZXJsYXkiLCJfcmF0ZSIsIl9zcGVlZCIsImFhIiwiTm9pc2VzT3ZlcmxheSIsIl9yZWQiLCJfZ3JlZW4iLCJfYmx1ZSIsIl9ub2lzZXMiLCJub2lzZSIsIl9ub2lzZUtleXMiLCJSZ2JPdmVybGF5IiwiQ3J0T3ZlcmxheSIsIl9yYWRpdXMiLCJfaW5zaWRlX2FscGhhIiwiX291dHNpZGVfYWxwaGEiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJPdmVybGF5cyIsIl9jcmVhdGVPdmVybGF5IiwiY3R4IiwiQ2xzIiwiZGVmYXVsdHNEZWVwIiwiS2VuIiwiX29uS2V5ZG93biIsIm9uS2V5ZG93biIsIl9vbktleXVwIiwib25LZXl1cCIsIl9tb2RzIiwiX2pveXN0aWNrIiwiX2tleXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwia2V5Q29kZSIsIm1vZHMiLCJqb3lzdGljayIsInNoaWZ0IiwiY3RybCIsImFsdCIsIm1ldGEiLCJudW1wYWQiLCJidG4wIiwiYnRuMSIsImJ0bjIiLCJidG4zIiwiYnRuNCIsInVwIiwiZG93biIsImxvY2F0aW9uIiwiZXZlbnREZXRhaWxzIiwic3RvcFByb3BhZ2F0aW9uIiwiTWlja2V5IiwiX2RlZmF1bHRfZnJhbWUiLCJfZnJhbWUiLCJfZGVmYXVsdF9jb2xvciIsImludGVyYWN0aXZlIiwiX29uTW91c2VEb3duIiwib25Nb3VzZURvd24iLCJfb25Nb3VzZU1vdmUiLCJvbk1vdXNlTW92ZSIsIl9vbk1vdXNlVXAiLCJvbk1vdXNlVXAiLCJfYnRucyIsImd4IiwiZ2xvYmFsIiwiZ3kiLCJidXR0b24iLCJvcmlnaW5hbEV2ZW50IiwiZ2V0RXZlbnRJbmZvIiwiX2RibENsaWNrRGVsYXkiLCJfZGJsQ2xpY2tEaXN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVB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LEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBOUx1RCxFQXVNdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBdk11RCxFQWdOdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBaE51RCxFQXlOdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBek51RCxFQWtPdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBbE91RCxFQTJPdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBM091RCxFQW9QdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBcFB1RCxFQTZQdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBN1B1RCxFQXNRdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBdFF1RCxFQStRdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBL1F1RCxFQXdSdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBeFJ1RCxFQWlTdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBalN1RCxFQTBTdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBMVN1RCxFQW1UdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBblR1RCxFQTRUdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBNVR1RCxFQXFVdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBclV1RCxFQThVdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBOVV1RCxFQXVWdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBdlZ1RCxFQWdXdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBaFd1RCxFQXlXdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBeld1RCxFQWtYdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBbFh1RCxFQTJYdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBM1h1RCxFQW9ZdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBcFl1RCxFQTZZdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBN1l1RCxFQXNadkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBdFp1RCxFQStadkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBL1p1RCxFQXdhdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBeGF1RCxFQWlidkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBamJ1RCxFQTBidkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBMWJ1RCxFQW1jdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBbmN1RCxFQTRjdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBNWN1RCxFQXFkdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixFQU1FLFFBTkYsRUFPRSxRQVBGLENBcmR1RCxFQThkdkQsQ0FDRSxRQURGLEVBRUUsUUFGRixFQUdFLFFBSEYsRUFJRSxRQUpGLEVBS0UsUUFMRixF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LFlBQUtrc0IsS0FBTCxHQUFhbHNCLEtBQWI7QUFDRDs7O3lCQUVvQjtBQUFFLGNBQU8sS0FBS3lzQixjQUFaO0FBQTRCOzs7eUJBRTNCO0FBQUUsY0FBTyxLQUFLQyxpQkFBWjtBQUErQjs7Ozs7O21CQWhKdENuQixNIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ0MmZkOTk3OTJjYzc5MDQ5ODgxIiwiaW1wb3J0ICdwaXhpLmpzJ1xuaW1wb3J0ICd3ZWItYXVkaW8tZGF3J1xuXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gJy4vdXRpbHMuanMnXG5pbXBvcnQgeyBkZWZhdWx0cywgcnVudGltZV9lcnJvciB9IGZyb20gJy4vZ2xvYmFscy5qcydcblxuaW1wb3J0IGNzcyBmcm9tICcuLi9zdHlsZS9tYWluLmNzcydcbi8vIGltcG9ydCB0IGZyb20gJy4uL2h0bWwvbWFpbi5odG1sJ1xuXG4vLyBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gZWwuaW5uZXJIVE1MID0gdFxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbClcblxuaW1wb3J0IHsgRW1pdHRlciB9IGZyb20gJy4vZW1pdHRlci5qcydcblxuaW1wb3J0IExleGVyIGZyb20gJy4vY29tcGlsZXIvbGV4ZXIuanMnXG5pbXBvcnQgUGFyc2VyIGZyb20gJy4vY29tcGlsZXIvcGFyc2VyLmpzJ1xuaW1wb3J0IFRyYW5zcGlsZXIgZnJvbSAnLi9jb21waWxlci90cmFuc3BpbGVyLmpzJ1xuXG5pbXBvcnQgeyBNZW1vcnkgfSBmcm9tICcuL3ZtL21lbW9yeS5qcydcbmltcG9ydCBNZW1vcnlNYW5hZ2VyIGZyb20gJy4vdm0vbWVtb3J5bWFuYWdlci5qcydcbmltcG9ydCBTdGFjayBmcm9tICcuL3ZtL3N0YWNrLmpzJ1xuaW1wb3J0IEludGVycnVwdCBmcm9tICcuL3ZtL2ludGVycnVwdC5qcydcbmltcG9ydCBHdWlkZW8gZnJvbSAnLi92bS9jaGlwcy9ndWlkZW8uanMnXG5pbXBvcnQgS2VuIGZyb20gJy4vdm0vY2hpcHMva2VuLmpzJ1xuaW1wb3J0IE1pY2tleSBmcm9tICcuL3ZtL2NoaXBzL21pY2tleS5qcydcblxuLy8gaW1wb3J0IHsgVk0gfSBmcm9tICcuL2ludGVycHJldGVyL3ZtLmpzJ1xuXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgbGV0IHNyYyA9IHJlcXVpcmUoJ3JhdyEuLi90ZXN0L3Rlc3QxLngzMicpXG4vLyAgIGNvbnNvbGUubG9nKHNyYylcblxuLy8gICBsZXQgdm0gPSBuZXcgVk0oKVxuLy8gICB2bS5sb2FkKHNyYylcbi8vICAgdm0ucnVuKClcbi8vICAgdm0uZHVtcCgpXG4vLyB9LCAxMDApXG5cbi8vIGNvbnNvbGUubG9nKGhleHkuaGV4eSh2bS5tZW1fYnVmZmVyLCB7IG9mZnNldDogMCwgbGVuZ3RoOiA1MTIsIGRpc3BsYXlfb2Zmc2V0OiAweDAwLCB3aWR0aDogMTYsIGNhcHM6ICd1cHBlcicsIGluZGVudDogMiB9KSlcblxuZXhwb3J0IGNvbnN0IF9TVE9QUEVEID0gMFxuZXhwb3J0IGNvbnN0IF9SVU5OSU5HID0gMVxuZXhwb3J0IGNvbnN0IF9QQVVTRUQgPSAyXG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgRW1pdHRlciB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnJlc2V0KClcblxuICAgIHRoaXMuX3VwZGF0ZXMgPSB7XG4gICAgICBxdWV1ZTogW10sXG5cbiAgICAgIGFkZDogb3B0aW9ucyA9PiB7XG4gICAgICAgIGxldCBvID0gXy5nZXQob3B0aW9ucywgJ29iamVjdCcpXG4gICAgICAgIGlmIChvICYmICFvLl9faW5VcGRhdGVzKSB7XG4gICAgICAgICAgby5fX2luVXBkYXRlcyA9IHRydWVcbiAgICAgICAgICB0aGlzLl91cGRhdGVzLnF1ZXVlLnB1c2gob3B0aW9ucylcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBvID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlcy5xdWV1ZSA9IF8ucmVqZWN0KHRoaXMuX3VwZGF0ZXMucXVldWUsIHsgb2JqZWN0OiBvIH0pXG4gICAgICAgIG8uX19pblVwZGF0ZXMgPSBmYWxzZVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGl0dGxlRW5kaWFuXG4gICAgbGV0IGIgPSBuZXcgQXJyYXlCdWZmZXIoNClcbiAgICBsZXQgYSA9IG5ldyBVaW50MzJBcnJheShiKVxuICAgIGxldCBjID0gbmV3IFVpbnQ4QXJyYXkoYilcbiAgICBhWzBdID0gMHhkZWFkYmVlZlxuICAgIHRoaXMuTEUgPSBjWzBdID09PSAweGVmXG5cbiAgICB0aGlzLl9tZW1vcnkgPSBuZXcgTWVtb3J5KHRoaXMpXG4gICAgdGhpcy5fbWVtb3J5TWFuYWdlciA9IG5ldyBNZW1vcnlNYW5hZ2VyKHRoaXMpXG4gICAgdGhpcy5fc3RhY2sgPSBuZXcgU3RhY2sodGhpcylcbiAgICB0aGlzLl9pbnRlcnJ1cHRzID0gbmV3IEludGVycnVwdCh0aGlzKVxuXG4gICAgdGhpcy5fZ3VpZGVvID0gbmV3IEd1aWRlbyh0aGlzKVxuICAgIHRoaXMuX2d1aWRlby5jcmVhdGVDaGlwcygpXG5cbiAgICB0aGlzLl9rZW4gPSBuZXcgS2VuKHRoaXMpXG4gICAgdGhpcy5fbWlja2V5ID0gbmV3IE1pY2tleSh0aGlzKVxuXG4gICAgdGhpcy5fb25SZXNpemUgPSB0aGlzLm9uUmVzaXplLmJpbmQodGhpcylcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25SZXNpemUpXG5cbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBQSVhJLnRpY2tlci5zaGFyZWQuYWRkKGRlbHRhID0+IHtcbiAgICAgIGlmICh0aGF0LnN0YXR1cyA9PT0gX1JVTk5JTkcpIHtcbiAgICAgICAgdGhhdC50aWNrKHBlcmZvcm1hbmNlLm5vdygpLCBkZWx0YSlcblxuICAgICAgICAvLyBsZXQgcmVuZGVyID0gZmFsc2VcblxuICAgICAgICBmb3IgKGxldCBxIG9mIHRoYXQuX3VwZGF0ZXMucXVldWUpIHtcbiAgICAgICAgICBxLm9iamVjdC5fX2luVXBkYXRlcyA9IGZhbHNlXG4gICAgICAgICAgLy8gaWYgKHEucmVuZGVyKSB7XG4gICAgICAgICAgICAvLyByZW5kZXIgPSB0cnVlXG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIGlmIChxLmNiKSB7XG4gICAgICAgICAgICBxLmNiKHEub2JqZWN0LCAuLi4ocS5hcmdzIHx8IFtdKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGF0Ll91cGRhdGVzLnF1ZXVlID0gW11cblxuICAgICAgICAvLyBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgLy8gdGhhdC5fZ3VpZGVvLnJlbmRlcmVyLnJlbmRlcih0aGF0Ll9ndWlkZW8uc3RhZ2UpXG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYXN5bmModGhpcywgdGhpcy5zdGFydCwgMTAwKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fZ3VpZGVvLmRlc3Ryb3koKVxuICAgIHRoaXMuX2tlbi5kZXN0cm95KClcbiAgICB0aGlzLl9taWNrZXkuZGVzdHJveSgpXG4gICAgdGhpcy5faW50ZXJydXB0cy5kZXN0cm95KClcbiAgICB0aGlzLl9tZW1vcnlNYW5hZ2VyLmRlc3Ryb3koKVxuICAgIHRoaXMuX21lbW9yeS5kZXN0cm95KClcbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSAwXG4gICAgdGhpcy5fcHJvZ3JhbSA9IHtcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGNvZGU6IHVuZGVmaW5lZCxcbiAgICAgIGZuOiB1bmRlZmluZWQsXG4gICAgfVxuICB9XG5cbiAgZGVmYXVsdHMgKG5hbWUsIGRlZmF1bHRWYWx1ZSkgeyByZXR1cm4gXy5nZXQoZGVmYXVsdHMsIG5hbWUsIGRlZmF1bHRWYWx1ZSkgfVxuXG4gIGdldCBzdGF0dXMgKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzIH1cbiAgc2V0IHN0YXR1cyAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5fc3RhdHVzICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fc3RhdHVzID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICBnZXQgbWVtb3J5ICgpIHsgcmV0dXJuIHRoaXMuX21lbW9yeSB9XG4gIGdldCBtZW1vcnlNYW5hZ2VyICgpIHsgcmV0dXJuIHRoaXMuX21lbW9yeU1hbmFnZXIgfVxuICBnZXQgaW50ZXJydXB0cyAoKSB7IHJldHVybiB0aGlzLl9pbnRlcnJ1cHRzIH1cblxuICBnZXQgdXBkYXRlcyAoKSB7IHJldHVybiB0aGlzLl91cGRhdGVzIH1cblxuICBnZXQgZ3VpZGVvICgpIHsgcmV0dXJuIHRoaXMuX2d1aWRlbyB9XG4gIGdldCBrZXlib2FyZF9jaGlwICgpIHsgcmV0dXJuIHRoaXMuX2tlbiB9XG4gIGdldCBtaWNrZXkgKCkgeyByZXR1cm4gdGhpcy5fbWlja2V5IH1cblxuICBnZXQgc3RhZ2UgKCkgeyByZXR1cm4gdGhpcy5fZ3VpZGVvLl9zdGFnZSB9XG4gIGdldCByZW5kZXJlciAoKSB7IHJldHVybiB0aGlzLl9ndWlkZW8uX3JlbmRlcmVyIH1cblxuICBnZXQgcHJvZ3JhbSAoKSB7IHJldHVybiB0aGlzLl9wcm9ncmFtIH1cblxuICBvblJlc2l6ZSAoKSB7XG4gICAgdGhpcy5fZ3VpZGVvLmVtaXQoJ3Jlc2l6ZScpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGhsdCAoY29kZSkge1xuICAgIGlmIChjb2RlID4gMCkge1xuICAgICAgcnVudGltZV9lcnJvcihjb2RlKVxuICAgIH1cbiAgICB0aGlzLnN0b3AoKVxuICB9XG5cbiAgbG9hZCAocGF0aCkge1xuICAgIGxldCB0ID0gbmV3IExleGVyKClcbiAgICBsZXQgdG9rZW5zID0gdC5ydW4ocGF0aClcbiAgICBjb25zb2xlLmxvZyh0b2tlbnMpXG5cbiAgICBsZXQgcCA9IG5ldyBQYXJzZXIoKVxuICAgIGxldCBub2RlcyA9IHAucnVuKHRva2VucylcbiAgICBjb25zb2xlLmxvZyhub2RlcylcblxuICAgIGlmIChwLmVycm9ycyA9PT0gMCkge1xuICAgICAgbGV0IHQgPSBuZXcgVHJhbnNwaWxlcigpXG4gICAgICBsZXQgY29kZSA9IHQucnVuKG5vZGVzKVxuICAgICAgY29uc29sZS5sb2coY29kZSlcblxuICAgICAgaWYgKHQuZXJyb3JzID09PSAwKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW0uY29kZSA9IGNvZGVcbiAgICAgICAgdGhpcy5fcHJvZ3JhbS5wYXRoID0gcGF0aFxuICAgICAgICB0aGlzLl9wcm9ncmFtLmZuID0gbmV3IEZ1bmN0aW9uKFsnYXJncyddLCB0aGlzLl9wcm9ncmFtLmNvZGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcnVuICguLi5hcmdzKSB7XG4gICAgbGV0IGZuID0gXy5nZXQodGhpcywgJ19wcm9ncmFtLmZuJylcbiAgICByZXR1cm4gZm4gPyBmbi5hcHBseSh0aGlzLCBhcmdzKSA6IG51bGxcbiAgfVxuXG4gIHN0YXJ0ICgpIHtcbiAgICB0aGlzLnN0YXR1cyA9IF9SVU5OSU5HXG4gICAgdGhpcy50ZXN0KClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RvcCAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBfU1RPUFBFRFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBfUEFVU0VEXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc3VtZSAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBfUlVOTklOR1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgdGhpcy5fbWVtb3J5LnRpY2sodClcbiAgICB0aGlzLl9tZW1vcnlNYW5hZ2VyLnRpY2sodClcbiAgICB0aGlzLl9rZW4udGljayh0KVxuICAgIHRoaXMuX21pY2tleS50aWNrKHQpXG4gICAgdGhpcy5faW50ZXJydXB0cy50aWNrKHQpXG4gICAgdGhpcy5fZ3VpZGVvLnRpY2sodClcbiAgfVxuXG4gIHRlc3QgKCkge1xuICB9XG5cbn1cblxuZXhwb3J0IGxldCBtYWluID0gbmV3IE1haW4oKVxud2luZG93LmFwcCA9IG1haW5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9tYWluLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGl4aS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBpeGkuanNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWItYXVkaW8tZGF3XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2ViLWF1ZGlvLWRhd1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGVsZWN0cm9uID0gcmVxdWlyZSgnZWxlY3Ryb24nKVxuY29uc3QgeyByZW1vdGUsIHNjcmVlbiwgZGlhbG9nIH0gPSBlbGVjdHJvblxuY29uc3QgeyBhcHAsIEJyb3dzZXJXaW5kb3cgfSA9IHJlbW90ZVxuXG5jb25zdCBfID0gcmVxdWlyZSgndW5kZXJzY29yZS1wbHVzJylcbl8uZXh0ZW5kKF8sIHJlcXVpcmUoJ2xvZGFzaCcpKVxud2luZG93Ll8gPSBfXG5cbl8udGVtcGxhdGVTZXR0aW5ncy5pbnRlcnBvbGF0ZSA9IC8jeyhbXFxzXFxTXSs/KX0vZ1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzLXByb21pc2UnKVxuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHJhZiBmcm9tICdyYWYnXG5pbXBvcnQgcGVyZm9ybWFuY2UgZnJvbSAncGVyZm9ybWFuY2Utbm93J1xuXG5pbXBvcnQgeyBNaXhpbiwgbWl4IH0gZnJvbSAnbWl4d2l0aCdcbndpbmRvdy5NaXhpbiA9IE1peGluXG53aW5kb3cubWl4ID0gbWl4XG5cbmxldCB1c2VyUGF0aCA9IHBhdGguam9pbihhcHAuZ2V0QXBwUGF0aCgpLCAnL3VzZXInKVxuaWYgKCFmcy5leGlzdHNTeW5jKHVzZXJQYXRoKSkge1xuICBmcy5ta2RpcnModXNlclBhdGgpXG59XG5cbmxldCBJU19XSU4gPSAvXndpbi8udGVzdChwcm9jZXNzLnBsYXRmb3JtKVxubGV0IElTX09TWCA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nXG5sZXQgSVNfTElOVVggPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnbGludXgnXG5sZXQgZGlycyA9IHtcbiAgYnVpbGQ6IF9fZGlybmFtZSxcbiAgY3dkOiBhcHAuZ2V0QXBwUGF0aCgpLFxuICBob21lOiBhcHAuZ2V0UGF0aCgnaG9tZScpLFxuICBhcHA6IGFwcC5nZXRQYXRoKCdhcHBEYXRhJyksXG4gIHVzZXI6IHVzZXJQYXRoLFxuICB0bXA6IGFwcC5nZXRQYXRoKCd0ZW1wJyksXG4gIHJvb3Q6IGFwcC5nZXRQYXRoKCdleGUnKSxcbiAgbm9kZV9tb2R1bGVzOiBwYXRoLmpvaW4odXNlclBhdGgsICdub2RlX21vZHVsZXMnKSxcbiAgdXNlcl9wa2c6IHBhdGguam9pbih1c2VyUGF0aCwgJ3BhY2thZ2UuanNvbicpLFxufVxuXG5sZXQgbmFtZSA9IGFwcC5nZXROYW1lKClcbmxldCB2ZXJzaW9uID0gYXBwLmdldFZlcnNpb24oKVxuXG5sZXQgb3BlbkZpbGUgPSAoLi4uYXJncykgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBkaWFsb2cuc2hvd09wZW5EaWFsb2cuYXBwbHkoZGlhbG9nLCBhcmdzKVxuICB9XG4gIGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5sZXQgc2F2ZUZpbGUgPSAoLi4uYXJncykgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBkaWFsb2cuc2hvd1NhdmVEaWFsb2cuYXBwbHkoZGlhbG9nLCBhcmdzKVxuICB9XG4gIGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5sZXQgbWVzc2FnZUJveCA9ICguLi5hcmdzKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRpYWxvZy5zaG93TWVzc2FnZUJveC5hcHBseShkaWFsb2csIGFyZ3MpXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmxldCBtYXBfZ2V0dGVycyA9IChzb3VyY2UsIHRhcmdldCwgZGVmcykgPT4ge1xuICBmb3IgKGxldCBrIGluIGRlZnMpIHtcbiAgICBsZXQgZm4gPSBkZWZzW2tdXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNvdXJjZSwgaywge1xuICAgICAgZ2V0OiAoKSA9PiBmbi5jYWxsKHRhcmdldCwgc291cmNlKSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgfSlcbiAgfVxufVxuXG5sZXQgbWFwX2dldHRlcnNfcmV0dXJuX3RoaXMgPSAoc291cmNlLCB0YXJnZXQsIGRlZnMpID0+IHtcbiAgZm9yIChsZXQgayBpbiBkZWZzKSB7XG4gICAgbGV0IGZuID0gZGVmc1trXVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzb3VyY2UsIGssIHtcbiAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICBmbi5jYWxsKHRhcmdldCwgc291cmNlKVxuICAgICAgICByZXR1cm4gc291cmNlXG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9KVxuICB9XG59XG5cbmxldCBub3cgPSAoKSA9PiBwZXJmb3JtYW5jZS5ub3coKVxuXG5sZXQgZGVsYXkgPSBtcyA9PiB7XG4gIC8vIHNldFRpbWVvdXQoKCkgPT4ge30sIG1zKVxuICBsZXQgdCA9IHBlcmZvcm1hbmNlLm5vdygpXG4gIGxldCBjID0gdFxuICB3aGlsZSAoYyAtIHQgPD0gbXMpIHtcbiAgICAvLyBQSVhJLnRpY2tlci5zaGFyZWQudXBkYXRlKGMpXG4gICAgYyA9IHBlcmZvcm1hbmNlLm5vdygpXG4gIH1cbn1cblxubGV0IGFzeW5jID0gKGNvbnRleHQsIGZuLCBhcmdzLCBkZWxheSkgPT4ge1xuICBpZiAoXy5pc051bWJlcihhcmdzKSkge1xuICAgIGRlbGF5ID0gYXJnc1xuICAgIGFyZ3MgPSBbXVxuICB9XG4gIGlmICghXy5pc0FycmF5KGFyZ3MpKSB7XG4gICAgYXJncyA9IFthcmdzXVxuICB9XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGZuLmNhbGwoY29udGV4dCwgLi4uYXJncylcbiAgfSwgZGVsYXkgfHwgMSlcbn1cblxubGV0IGJ1ZmZlcl90b19zdHJpbmcgPSBiID0+IHtcbiAgbGV0IGxlbiA9IGIubGVuZ3RoXG4gIGxldCBpID0gMFxuICBsZXQgcyA9ICcnXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcyArPSBiW2krK10udG9TdHJpbmcoMTYpXG4gIH1cbiAgcmV0dXJuIHNcbn1cblxubGV0IHN0cmluZ190b19idWZmZXIgPSBzdHIgPT4ge1xuICBsZXQgbGVuID0gc3RyLmxlbmd0aFxuICBsZXQgaSA9IDBcbiAgbGV0IGIgPSBuZXcgQnVmZmVyKE1hdGgudHJ1bmMoc3RyLmxlbmd0aCAvIDIpKVxuICBsZXQgeCA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBsZXQgaGV4ID0gc3RyLnN1YnN0cihpLCAyKVxuICAgIGJbeCsrXSA9IHBhcnNlSW50KGhleCwgMTYpXG4gICAgaSArPSAyXG4gIH1cbiAgcmV0dXJuIGJcbn1cblxubGV0IHN0cmluZ19idWZmZXIgPSAoc3RyLCBsZW4gPSAwKSA9PiB7XG4gIGxlbiA9IGxlbiB8fCBzdHIubGVuZ3RoXG4gIHZhciBiID0gbmV3IEJ1ZmZlcihsZW4pXG4gIGIud3JpdGUoc3RyLCAwLCBzdHIubGVuZ3RoLCAnYXNjaWknKVxuICByZXR1cm4gYlxufVxuXG5sZXQgbm9ybWFsaXplTWVzc2FnZXMgPSAoLi4ubWVzc2FnZSkgPT4ge1xuICBsZXQgYXJncyA9IFtdXG4gIGZvciAobGV0IG0gb2YgbWVzc2FnZSkge1xuICAgIGlmIChfLmlzQXJyYXkobSkpIHtcbiAgICAgIGFyZ3MucHVzaChtLmpvaW4oJywgJykpXG4gICAgfVxuICAgIGVsc2UgaWYgKF8uaXNTdHJpbmcobSkpIHtcbiAgICAgIGFyZ3MucHVzaChtKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJnc1xufVxuXG5sZXQgaGV4ID0gKHZhbHVlLCBzaXplID0gMzIpID0+ICckJyArIF8ucGFkU3RhcnQodmFsdWUudG9TdHJpbmcoMTYpLCBNYXRoLnRydW5jKHNpemUgLyA0KSwgJzAnKVxuXG5sZXQgYnVmZmVyX2R1bXAgPSAoYnVmZmVyLCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCAxNlxuICBsZXQgY2FwcyA9IG9wdGlvbnMuY2FwcyB8fCAndXBwZXInXG4gIGxldCBpbmRlbnQgPSBfLnJlcGVhdCgnICcsIG9wdGlvbnMuaW5kZW50IHx8IDApXG5cbiAgbGV0IHplcm8gPSAobiwgbWF4KSA9PiB7XG4gICAgbiA9IG4udG9TdHJpbmcoMTYpXG4gICAgaWYgKGNhcHMgPT09ICd1cHBlcicpIHsgbiA9IG4udG9VcHBlckNhc2UoKSB9XG4gICAgd2hpbGUgKG4ubGVuZ3RoIDwgbWF4KSB7XG4gICAgICBuID0gJzAnICsgblxuICAgIH1cbiAgICByZXR1cm4gblxuICB9XG5cbiAgbGV0IGxlbiA9IE1hdGgubWluKGJ1ZmZlci5ieXRlTGVuZ3RoLCBvcHRpb25zLmxlbmd0aCB8fCBidWZmZXIuYnl0ZUxlbmd0aClcbiAgbGV0IHJvd3MgPSBNYXRoLmNlaWwobGVuIC8gd2lkdGgpXG4gIGxldCBsYXN0ID0gbGVuICUgd2lkdGggfHwgd2lkdGhcbiAgbGV0IG9mZnNldExlbmd0aCA9IGxlbi50b1N0cmluZygxNikubGVuZ3RoXG4gIGlmIChvZmZzZXRMZW5ndGggPCA2KSB7IG9mZnNldExlbmd0aCA9IDYgfVxuXG4gIGxldCBhcnIgPSBuZXcgVWludDhBcnJheShidWZmZXIpXG5cbiAgbGV0IHN0ciA9IGluZGVudCArICdPZmZzZXQnXG4gIHdoaWxlIChzdHIubGVuZ3RoIDwgb2Zmc2V0TGVuZ3RoKSB7XG4gICAgc3RyICs9ICcgJ1xuICB9XG5cbiAgc3RyICs9ICcgICdcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICBzdHIgKz0gJyAnICsgemVybyhpLCAyKVxuICB9XG5cbiAgaWYgKGxlbikge1xuICAgIHN0ciArPSAnXFxuJ1xuICB9XG5cbiAgbGV0IGIgPSAwXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICBzdHIgKz0gaW5kZW50ICsgemVybyhiLCBvZmZzZXRMZW5ndGgpICsgJyAgJ1xuICAgIGxldCBsYXN0Qnl0ZXMgPSBpID09PSByb3dzIC0gMSA/IGxhc3QgOiB3aWR0aFxuICAgIGxldCBsYXN0U3BhY2VzID0gd2lkdGggLSBsYXN0Qnl0ZXNcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGFzdEJ5dGVzOyBqKyspIHtcbiAgICAgIHN0ciArPSAnICcgKyB6ZXJvKGFycltiXSwgMilcbiAgICAgIGIrK1xuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGFzdFNwYWNlczsgaisrKSB7XG4gICAgICBzdHIgKz0gJyAgICdcbiAgICB9XG5cbiAgICBiIC09IGxhc3RCeXRlc1xuICAgIHN0ciArPSAnICAgJ1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsYXN0Qnl0ZXM7IGorKykge1xuICAgICAgbGV0IHYgPSBhcnJbYl1cbiAgICAgIHN0ciArPSB2ID4gMzEgJiYgdiA8IDEyNyB8fCB2ID4gMTU5ID8gU3RyaW5nLmZyb21DaGFyQ29kZSh2KSA6ICcuJ1xuICAgICAgYisrXG4gICAgfVxuXG4gICAgc3RyICs9ICdcXG4nXG4gIH1cblxuICByZXR1cm4gc3RyXG59XG5cbmxldCB1dG9hID0gc3RyID0+IHdpbmRvdy5idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKSlcblxubGV0IGF0b3UgPSBzdHIgPT4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSh3aW5kb3cuYXRvYihzdHIpKSlcblxud2luZG93LnV0b2EgPSB1dG9hXG53aW5kb3cuYXRvdSA9IGF0b3VcblxuXG5sZXQgaW5zdGFuY2VGdW5jdGlvbiA9ICh0YXJnZXQsIG5hbWUsIGZuLCBmb3JjZSA9IGZhbHNlKSA9PiB7XG4gIGlmIChmb3JjZSB8fCAhdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xuICAgICAgdmFsdWU6IGZuLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSlcbiAgfVxufVxuXG5sZXQgaW5zdGFuY2VGdW5jdGlvbnMgPSAodGFyZ2V0LCBzb3VyY2UsIG5hbWVzKSA9PiB7XG4gIGZvciAobGV0IG4gb2YgbmFtZXMpIHtcbiAgICBpZiAoXy5pc0FycmF5KG4pKSB7XG4gICAgICBpbnN0YW5jZUZ1bmN0aW9uKHRhcmdldCwgblswXSwgc291cmNlW25bMV1dKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGluc3RhbmNlRnVuY3Rpb24odGFyZ2V0LCBuLCBzb3VyY2Vbbl0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIF8sXG4gIG5hbWUsXG4gIHZlcnNpb24sXG4gIGVsZWN0cm9uLFxuICBkaWFsb2csXG4gIG9wZW5GaWxlLFxuICBzYXZlRmlsZSxcbiAgbWVzc2FnZUJveCxcbiAgcmVtb3RlLFxuICBzY3JlZW4sXG4gIEJyb3dzZXJXaW5kb3csXG4gIGFwcCxcbiAgZnMsXG4gIHBhdGgsXG4gIHVzZXJQYXRoLFxuICBJU19XSU4sXG4gIElTX09TWCxcbiAgSVNfTElOVVgsXG4gIGRpcnMsXG4gIHJhZixcbiAgbm93LFxuICBNaXhpbixcbiAgbWl4LFxuICBtYXBfZ2V0dGVycyxcbiAgbWFwX2dldHRlcnNfcmV0dXJuX3RoaXMsXG4gIGRlbGF5LFxuICBhc3luYyxcbiAgYnVmZmVyX3RvX3N0cmluZyxcbiAgc3RyaW5nX3RvX2J1ZmZlcixcbiAgc3RyaW5nX2J1ZmZlcixcbiAgbm9ybWFsaXplTWVzc2FnZXMsXG4gIGhleCxcbiAgYnVmZmVyX2R1bXAsXG4gIHV0b2EsXG4gIGF0b3UsXG4gIGluc3RhbmNlRnVuY3Rpb24sXG4gIGluc3RhbmNlRnVuY3Rpb25zLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3V0aWxzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYWZcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyYWZcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZXJmb3JtYW5jZS1ub3dcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwZXJmb3JtYW5jZS1ub3dcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtaXh3aXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWl4d2l0aFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZWxlY3Ryb25cIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlLXBsdXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlLXBsdXNcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtcHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzLXByb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiUElYSS5Qb2ludC5wcm90b3R5cGUuZGlzdGFuY2UgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoKHRoaXMueCAtIHRhcmdldC54KSAqICh0aGlzLnggLSB0YXJnZXQueCkgKyAodGhpcy55IC0gdGFyZ2V0LnkpICogKHRoaXMueSAtIHRhcmdldC55KSlcbn1cblxuUElYSS5Qb2ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfLnRlbXBsYXRlKCcoI3t4fSwgI3t5fSknKSh0aGlzKVxufVxuXG5QSVhJLlJlY3RhbmdsZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfLnRlbXBsYXRlKCcoI3t4fSwgI3t5fSwgI3t4ICsgd2lkdGh9LCAje3kgKyBoZWlnaHR9KSgje3dpZHRofSwgI3toZWlnaHR9KScpKHRoaXMpXG59XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBib3VuZHNjaGVjazogZmFsc2UsXG5cbiAgdHlwZTogJ2kzMicsXG5cbiAgbWVtb3J5OiB7XG4gICAgc2l6ZTogNTEyICogMTAyNCxcbiAgfSxcblxuICBtZW1vcnlfbWFuYWdlcjoge1xuICAgIGNvbGxlY3RfZGVsYXk6IDMwICogMTAwMCxcbiAgfSxcblxuICBib3JkZXI6IHtcbiAgICBzaXplOiA2NCxcbiAgICBjb2xvcjogMTIsXG4gIH0sXG5cbiAgZ3VpZGVvOiB7XG4gICAgd2lkdGg6IDI0MCxcbiAgICBoZWlnaHQ6IDE2OCxcbiAgICBzY2FsZTogNCxcbiAgfSxcblxuICByYWluYm93OiB7XG4gICAgY291bnQ6IDE2LFxuICAgIGRhdGFfZm9ybWF0OiAnaTMyJyxcbiAgfSxcblxuICBmb256bzoge1xuICAgIGNvdW50OiAyNTYsXG4gICAgd2lkdGg6IDYsXG4gICAgaGVpZ2h0OiA3LFxuICB9LFxuXG4gIG9yd2VsbDoge1xuICAgIHdpZHRoOiAyNDAgLyA2LFxuICAgIGhlaWdodDogMTY4IC8gNyxcbiAgfSxcblxuICBiZWFnbGU6IHtcbiAgICB3aWR0aDogNixcbiAgICBoZWlnaHQ6IDcsXG4gICAgY29sb3I6IDE1LFxuICAgIGJsaW5rcmF0ZTogNTAwLFxuICAgIHZpc2libGU6IHRydWUsXG4gIH0sXG5cbiAgdmlvbGV0OiB7XG4gICAgY291bnQ6IDMyLFxuICAgIHdpZHRoOiAxNixcbiAgICBoZWlnaHQ6IDE2LFxuICB9LFxuXG4gIGtlbjoge1xuICAgIGNvdW50OiAyNTYsXG4gIH0sXG5cbiAgbWlja2V5OiB7XG4gICAgY291bnQ6IDE3LFxuICAgIHdpZHRoOiA2LFxuICAgIGhlaWdodDogNyxcbiAgICBjb2xvcjogMTUsXG4gICAgZnJhbWU6IDAsXG4gICAgZGJsQ2xpY2tEZWxheTogMjUwLFxuICAgIGRibENsaWNrRGlzdGFuY2U6IDgsXG4gIH0sXG5cbiAgbmV0d29yazoge1xuICAgIGNvdW50OiAzMiAqIDEwMjQsXG4gIH0sXG5cbiAgYWx0bzoge1xuICAgIGNvdW50OiA0ICogMTAyNCxcbiAgfSxcblxuICBjaGFyc19tYXA6IHtcbiAgICAnLic6IDAsXG4gICAgcjogMSxcbiAgICBnOiAyLFxuICAgIHk6IDMsXG4gICAgYjogNCxcbiAgICBwOiA1LFxuICAgIGM6IDYsXG4gICAgRTogNyxcbiAgICBlOiA4LFxuICAgIFI6IDksXG4gICAgRzogMTAsXG4gICAgWTogMTEsXG4gICAgQjogMTIsXG4gICAgUDogMTMsXG4gICAgQzogMTQsXG4gICAgdzogMTUsXG4gICAgJyAnOiAxNixcbiAgfSxcblxuICBydW50aW1lX2Vycm9yczoge1xuICAgIDB4MDE6ICdPdXQgb2YgbWVtb3J5JyxcbiAgICAweDAyOiAnU3RhY2sgdW5kZXJmbG93JyxcbiAgICAweDAzOiAnU3RhY2sgb3ZlcmZsb3cnLFxuICAgIDB4MDQ6ICdJbnZhbGlkIHN0YWNrIGFkZHJlc3MnLFxuICAgIDB4MDU6ICdTdGFjayBhZGRyZXNzIGFscmVhZHkgYXNzaWduZWQnLFxuICAgIDB4MDY6ICdJbnRlcnJ1cHQgYWxyZWFkeSBleGlzdHMnLFxuICAgIDB4MDc6ICdJbnRlcnJ1cHQgbm90IGZvdW5kJyxcbiAgICAweDA4OiAnQWRkcmVzcyBvdXQgb2YgYm91bmRzJyxcbiAgfSxcblxufVxuXG5sZXQgZXJyb3JzID0gMFxuXG5sZXQgZXJyb3IgPSAodCwgbXNnKSA9PiB7XG4gIGRlYnVnZ2VyXG4gIGVycm9ycysrXG4gIGNvbnNvbGUuZXJyb3IobXNnLCAnYXQnLCB0LnZhbHVlLCAnKCcgKyB0LnJvdyArICcsJyArIHQuY29sICsgJyknKVxuICByZXR1cm4gbnVsbFxufVxuXG5sZXQgcnVudGltZV9lcnJvciA9IGNvZGUgPT4ge1xuICBjb25zb2xlLmVycm9yKGRlZmF1bHRzLnJ1bnRpbWVfZXJyb3JzW2NvZGVdIHx8ICdVbmtub3duIHJ1bnRpbWUgZXJyb3InKVxuICByZXR1cm4gMFxufVxuXG5cbmV4cG9ydCB7XG4gIGRlZmF1bHRzLFxuICBlcnJvcnMsXG4gIGVycm9yLFxuICBydW50aW1lX2Vycm9yLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2dsb2JhbHMuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uL25vZGVfbW9kdWxlcy9jc3NuZXh0LWxvYWRlci9pbmRleC5qcyEuL21haW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi9ub2RlX21vZHVsZXMvY3NzbmV4dC1sb2FkZXIvaW5kZXguanMhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uL25vZGVfbW9kdWxlcy9jc3NuZXh0LWxvYWRlci9pbmRleC5qcyEuL21haW4uY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuY2FudmFzIHtcXG4gIGN1cnNvcjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3R5bGUvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx1QkFBK0M7RUFDL0MsWUFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSx3QkFBd0I7Q0FDekJcIixcImZpbGVcIjpcIm1haW4uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKC4vY29sb3JzLmNzcyk7XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi9jc3NuZXh0LWxvYWRlciEuL3N0eWxlL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHNlbGYubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuXHRcdGlmKG5ld09iaikge1xuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHRpZihzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xuXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYylcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgY2xhc3MgRXZlbnQge1xuXG4gIGNvbnN0cnVjdG9yICh0YXJnZXQsIG5hbWUsIGRhdGEsIGJ1YmJsZXMgPSB0cnVlKSB7XG4gICAgdGhpcy5fX2V2ZW50T2JqZWN0ID0gdHJ1ZVxuICAgIHRoaXMudGltZVN0YW1wID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldFxuICAgIHRoaXMudHlwZSA9IG5hbWVcbiAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgdGhpcy5idWJibGVzID0gYnViYmxlc1xuICAgIHRoaXMuc3RvcHBlZCA9IGZhbHNlXG4gICAgdGhpcy5zdG9wcGVkSW1tZWRpYXRlID0gZmFsc2VcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuICB9XG5cbiAgc3RvcCAoKSB7XG4gICAgdGhpcy5zdG9wcGVkID0gdHJ1ZVxuICB9XG5cbiAgc3RvcEltbWVkaWF0ZSAoKSB7XG4gICAgdGhpcy5zdG9wcGVkSW1tZWRpYXRlID0gdHJ1ZVxuICB9XG5cbiAgc3RvcFByb3BhZ2F0aW9uICgpIHtcbiAgICB0aGlzLnN0b3BwZWQgPSB0cnVlXG4gIH1cblxuICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gKCkge1xuICAgIHRoaXMuc3RvcHBlZEltbWVkaWF0ZSA9IHRydWVcbiAgfVxuXG4gIGNhbmNlbEJ1YmJsZSAoKSB7XG4gICAgdGhpcy5idWJibGVzID0gZmFsc2VcbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0ICgpIHtcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlXG4gIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRW1pdHRlciB7XG5cbiAgb24gKG5hbWUsIGZuLCBvcmRlciA9IDApIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cbiAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0gPSB0aGlzLl9saXN0ZW5lcnNbbmFtZV0gfHwgW11cbiAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0ucHVzaCh7IGZuLCBvcmRlciB9KVxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSA9IF8uc29ydEJ5KHRoaXMuX2xpc3RlbmVyc1tuYW1lXSwgJ29yZGVyJylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgb25jZSAobmFtZSwgZm4pIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cblxuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIGxldCBvbmNlSGFuZGxlcldyYXBwZXIgPSAoKSA9PiB7XG4gICAgICBmbi5hcHBseSh0aGF0Lm9mZihuYW1lLCBvbmNlSGFuZGxlcldyYXBwZXIpLCBhcmd1bWVudHMpXG4gICAgfVxuICAgIG9uY2VIYW5kbGVyV3JhcHBlci5fb3JpZ2luYWxIYW5kbGVyID0gZm5cblxuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIG9uY2VIYW5kbGVyV3JhcHBlcilcbiAgfVxuXG4gIG9mZiAobmFtZSwgZm4pIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cblxuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGxldCBsaXN0ID0gdGhpcy5fbGlzdGVuZXJzW25hbWVdXG4gICAgbGV0IGkgPSBmbiA/IGxpc3QubGVuZ3RoIDogMFxuXG4gICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgIGlmIChsaXN0W2ldLmZuID09PSBmbiB8fCBsaXN0W2ldLl9vcmlnaW5hbEhhbmRsZXIgPT09IGZuKSB7XG4gICAgICAgIGxpc3Quc3BsaWNlKGksIDEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF8uaXNFbXB0eShsaXN0KSkge1xuICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tuYW1lXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBlbWl0IChuYW1lLCBkYXRhKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzIHx8IHt9XG5cbiAgICBsZXQgb3JpZ0V2ZW50RGF0YVxuXG4gICAgaWYgKCFkYXRhIHx8IGRhdGEuX19ldmVudE9iamVjdCAhPT0gdHJ1ZSkge1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5kYXRhICYmIGRhdGEudHlwZSkge1xuICAgICAgICBvcmlnRXZlbnREYXRhID0gZGF0YVxuICAgICAgICBkYXRhID0gZGF0YS5kYXRhXG4gICAgICB9XG4gICAgICBkYXRhID0gbmV3IEV2ZW50KHRoaXMsIG5hbWUsIGRhdGEpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgbGV0IGxpc3RlbmVycyA9IF8uY2xvbmUodGhpcy5fbGlzdGVuZXJzW25hbWVdKVxuICAgICAgZm9yIChsZXQgbCBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgbC5mbi5jYWxsKHRoaXMsIGRhdGEpXG4gICAgICAgIGlmIChkYXRhLnN0b3BwZWRJbW1lZGlhdGUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZGF0YS5zdG9wcGVkKSB7XG4gICAgICAgIGlmIChvcmlnRXZlbnREYXRhKSB7XG4gICAgICAgICAgb3JpZ0V2ZW50RGF0YS5zdG9wcGVkID0gdHJ1ZVxuICAgICAgICAgIGRhdGEuY2FuY2VsQnViYmxlKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRhLmJ1YmJsZXMgJiYgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZW1pdCkge1xuICAgICAgdGhpcy5wYXJlbnQuZW1pdChuYW1lLCBkYXRhKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWRcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvZW1pdHRlci5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IHBhdGggfSBmcm9tICcuLi91dGlscy5qcydcblxuaW1wb3J0IFRva2VuVHlwZXMgZnJvbSAnLi90b2tlbnMvdHlwZXMuanMnXG5pbXBvcnQgQ29uc3RUb2tlbiBmcm9tICcuL3Rva2Vucy9jb25zdC5qcydcbmltcG9ydCBJbmNsdWRlVG9rZW4gZnJvbSAnLi90b2tlbnMvaW5jbHVkZS5qcydcblxuY2xhc3MgVG9rZW4ge1xuXG4gIGNvbnN0cnVjdG9yIChsZXhlciwgdHlwZSwgdmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAobGV4ZXIgaW5zdGFuY2VvZiBUb2tlbikge1xuICAgICAgbGV0IHQgPSBsZXhlclxuICAgICAgdGhpcy5sZXhlciA9IHQubGV4ZXJcbiAgICAgIHRoaXMuX3R5cGUgPSB0Ll90eXBlXG4gICAgICB0aGlzLl9yZXNlcnZlZCA9IHQuX3Jlc2VydmVkXG4gICAgICB0aGlzLnZhbHVlID0gdC52YWx1ZVxuICAgICAgdGhpcy5zdGFydCA9IF8uY2xvbmUodC5zdGFydClcbiAgICAgIHRoaXMuZW5kID0gXy5jbG9uZSh0LmVuZClcbiAgICAgIHRoaXMubGVuZ3RoID0gdC52YWx1ZS5sZW5ndGhcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmxleGVyID0gbGV4ZXJcbiAgICAgIHRoaXMuX3R5cGUgPSB0eXBlXG4gICAgICB0aGlzLl9yZXNlcnZlZCA9IGZhbHNlXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgJydcbiAgICAgIHRoaXMuc3RhcnQgPSBzdGFydCB8fCB7IG9mZnNldDogMCwgbGluZTogMCwgY29sdW1uOiAwIH1cbiAgICAgIHRoaXMuZW5kID0gZW5kIHx8IHsgb2Zmc2V0OiAwLCBsaW5lOiAwLCBjb2x1bW46IDAgfVxuICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmVuZC5vZmZzZXQgLSB0aGlzLnN0YXJ0Lm9mZnNldFxuICAgIH1cbiAgfVxuXG4gIGlzIChlKSB7XG4gICAgaWYgKF8uaXNTdHJpbmcoZSkpIHtcbiAgICAgIGxldCBwYXJ0cyA9IGUuc3BsaXQoJ3wnKVxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yIChsZXQgcCBvZiBwYXJ0cykge1xuICAgICAgICAgIGlmICh0aGlzLmlzKHApKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBlID09PSAnLicgfHwgdGhpcy50eXBlID09PSBlIHx8IHRoaXMudmFsdWUgPT09IGVcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoXy5pc1JlZ0V4cChlKSkge1xuICAgICAgcmV0dXJuIHRoaXMudHlwZS5tYXRjaChlKSB8fCB0aGlzLnZhbHVlLm1hdGNoKGUpXG4gICAgfVxuICAgIGVsc2UgaWYgKF8uaXNBcnJheShlKSkge1xuICAgICAgZm9yIChsZXQgaSBvZiBlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzKGkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGdldCB0eXBlICgpIHtcbiAgICBpZiAodGhpcy5fdHlwZSA9PT0gJ21hdGhfYXNzaWduJyB8fCB0aGlzLl90eXBlID09PSAnbG9naWNfYXNzaWduJykge1xuICAgICAgdGhpcy5fdHlwZSA9ICdhc3NpZ24nXG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuX3R5cGUgPT09ICdzdXBlcicpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSAnc3VwZXInXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90eXBlXG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIF8udGVtcGxhdGUoJ1wiI3t2YWx1ZX1cIiBhdCAje3BhdGh9KCN7bGluZX06I3tjb2x1bW59KScpKHsgdmFsdWU6IHRoaXMudmFsdWUsIGxpbmU6IHRoaXMuc3RhcnQubGluZSwgY29sdW1uOiB0aGlzLnN0YXJ0LmNvbHVtbiwgcGF0aDogcGF0aC5iYXNlbmFtZSh0aGlzLmxleGVyLnBhdGgpIH0pXG4gIH1cblxufVxuXG5cbmNsYXNzIEVtcHR5Q2xhc3Mge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV4ZXIgZXh0ZW5kcyBtaXgoRW1wdHlDbGFzcykud2l0aChcbiAgVG9rZW5UeXBlcyxcbiAgQ29uc3RUb2tlbixcbiAgSW5jbHVkZVRva2VuXG4pIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKHBhdGgsIHRleHQpIHtcbiAgICB0aGlzLmVycm9ycyA9IDBcbiAgICB0aGlzLnBhdGggPSBwYXRoIHx8ICcnXG4gICAgdGhpcy50ZXh0ID0gdGV4dCB8fCAnJ1xuICAgIHRoaXMubGVuZ3RoID0gdGhpcy50ZXh0Lmxlbmd0aFxuICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgIHRoaXMubGluZSA9IDFcbiAgICB0aGlzLmNvbHVtbiA9IDFcbiAgICB0aGlzLnRva2VucyA9IFtdXG4gICAgdGhpcy5jb25zdGFudHMgPSB7fVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB2YWxpZE9mZnNldCAob2Zmc2V0KSB7IHJldHVybiBvZmZzZXQgPj0gMCAmJiBvZmZzZXQgPCB0aGlzLmxlbmd0aCB9XG5cbiAgZW9zICgpIHsgcmV0dXJuIHRoaXMudmFsaWRPZmZzZXQodGhpcy5vZmZzZXQpIH1cblxuICBjaGFyX2F0IChpKSB7IHJldHVybiB0aGlzLnRleHQuY2hhckF0KGkpIH1cblxuICBzdWJ0ZXh0IChpKSB7IHJldHVybiB0aGlzLnRleHQuc3Vic3RyaW5nKGkpIH1cblxuICBwZWVrICgpIHtcbiAgICBsZXQgcG9zX2luZm8gPSAob2Zmc2V0LCBsaW5lLCBjb2x1bW4pID0+IHsgcmV0dXJuIHsgb2Zmc2V0LCBsaW5lLCBjb2x1bW4gfSB9XG5cbiAgICBsZXQgdG9rZW4gPSBudWxsXG4gICAgbGV0IGwgPSBfLmxhc3QodGhpcy50b2tlbnMpXG4gICAgbGV0IG9mZnNldCA9IHRoaXMub2Zmc2V0XG4gICAgbGV0IGxlbiA9IDBcblxuICAgIHdoaWxlIChbJyAnLCAnXFx0J10uaW5kZXhPZih0aGlzLmNoYXJfYXQob2Zmc2V0KSkgIT09IC0xKSB7XG4gICAgICBpZiAobCAmJiAhbC5uZXh0X2lzX3NwYWNlKSB7XG4gICAgICAgIGwubmV4dF9pc19zcGFjZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy52YWxpZE9mZnNldChvZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiB7IHRva2VuLCBvZmZzZXQgfVxuICAgICAgfVxuICAgICAgb2Zmc2V0KytcbiAgICB9XG5cbiAgICBsZXQgb2xkX29mZnNldCA9IG9mZnNldFxuXG4gICAgbGV0IGxpbmUgPSB0aGlzLmxpbmVcbiAgICBsZXQgY29sdW1uID0gdGhpcy5jb2x1bW5cbiAgICBmb3IgKGxldCBrIGluIHRoaXMudG9rZW5fdHlwZXMpIHtcbiAgICAgIGxldCByID0gdGhpcy5zdWJ0ZXh0KG9mZnNldCkubWF0Y2godGhpcy50b2tlbl90eXBlc1trXSlcbiAgICAgIGlmIChyICYmIHIuaW5kZXggPT09IDApIHtcbiAgICAgICAgbGV0IHZhbHVlID0gci5sZW5ndGggPiAxID8gci5zbGljZSgxKS5qb2luKCcnKSA6IHIuam9pbignJylcbiAgICAgICAgbGVuID0gclswXS5sZW5ndGhcbiAgICAgICAgdG9rZW4gPSBuZXcgVG9rZW4odGhpcywgaywgdmFsdWUsIHBvc19pbmZvKG9mZnNldCwgbGluZSwgY29sdW1uKSwgcG9zX2luZm8ob2Zmc2V0ICsgbGVuLCBsaW5lLCBjb2x1bW4gKyBsZW4gLSAxKSlcbiAgICAgICAgb2Zmc2V0ICs9IGxlblxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2Zmc2V0ID09PSBvbGRfb2Zmc2V0KSB7XG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldCArIDFcbiAgICB9XG4gICAgcmV0dXJuIHsgdG9rZW4sIG9mZnNldCwgbGVuIH1cbiAgfVxuXG4gIGluc2VydFRva2VuICh0KSB7XG4gICAgbGV0IGMgPSB0aGlzLmNvbnN0YW50c1t0LnZhbHVlXVxuICAgIGlmIChfLmlzQXJyYXkoYykpIHtcbiAgICAgIGZvciAobGV0IHQgb2YgYykge1xuICAgICAgICB0aGlzLmluc2VydFRva2VuKHQpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh0KVxuICAgIH1cbiAgfVxuXG4gIG5leHQgKCkge1xuICAgIGxldCB7IHRva2VuLCBvZmZzZXQsIGxlbiB9ID0gdGhpcy5wZWVrKClcblxuICAgIHdoaWxlICh0b2tlbiAmJiB0b2tlbi5fdHlwZSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgICBsZXQgdCA9IHRoaXMucGVlaygpXG4gICAgICB0b2tlbiA9IHQudG9rZW5cbiAgICAgIG9mZnNldCA9IHQub2Zmc2V0XG4gICAgICBsZW4gPSB0LmxlblxuICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXRcbiAgICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICB9XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGlmICh0b2tlbi50eXBlID09PSAnY29uc3QnKSB7XG4gICAgICAgIHRva2VuID0gdGhpcy5jb25zdF90b2tlbih0b2tlbiwgb2Zmc2V0LCBsZW4pXG4gICAgICB9XG5cbiAgICAgIGVsc2UgaWYgKHRva2VuLnR5cGUgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB0b2tlbiA9IHRoaXMuaW5jbHVkZV90b2tlbih0b2tlbiwgb2Zmc2V0LCBsZW4pXG4gICAgICB9XG5cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmluc2VydFRva2VuKHRva2VuKVxuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgICAgICB0aGlzLmNvbHVtbiArPSBsZW4gKyAxXG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbiAmJiB0b2tlbi5pcygnZW9sJykpIHtcbiAgICAgICAgdGhpcy5saW5lKytcbiAgICAgICAgdGhpcy5jb2x1bW4gPSAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuXG4gIH1cblxuICBydW4gKHBhdGgsIHRleHQpIHtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHRleHQgPSBwYXRoXG4gICAgICBwYXRoID0gJydcbiAgICB9XG4gICAgdGhpcy5yZXNldChwYXRoLCB0ZXh0KVxuICAgIHdoaWxlICh0aGlzLnZhbGlkT2Zmc2V0KHRoaXMub2Zmc2V0KSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIGNvbnNvbGUuaW5mbygnbGV4ZXIgZHVtcCcpXG4gICAgY29uc29sZS5sb2codGhpcy50b2tlbnMpXG4gICAgY29uc29sZS5sb2coJycpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2xleGVyLmpzIiwiaW1wb3J0IGFzc2lnbl90b2tlbnMgZnJvbSAnLi9hc3NpZ25zLmpzJ1xuaW1wb3J0IGRlbGltaXRlcl90b2tlbnMgZnJvbSAnLi9kZWxpbWl0ZXJzLmpzJ1xuaW1wb3J0IGNvbW1lbnRfdG9rZW5zIGZyb20gJy4vY29tbWVudHMuanMnXG5pbXBvcnQgZ3JvdXBfdG9rZW5zIGZyb20gJy4vZ3JvdXBzLmpzJ1xuaW1wb3J0IGxpdGVyYWxfdG9rZW5zIGZyb20gJy4vbGl0ZXJhbHMuanMnXG5pbXBvcnQgb3BlcmF0b3JfdG9rZW5zIGZyb20gJy4vb3BlcmF0b3JzLmpzJ1xuaW1wb3J0IHByaW1pdGl2ZV90b2tlbnMgZnJvbSAnLi9wcmltaXRpdmVzLmpzJ1xuaW1wb3J0IHJlc2VydmVkX3Rva2VucyBmcm9tICcuL3Jlc2VydmVkLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFRva2VuVHlwZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBnZXQgdG9rZW5fdHlwZXMgKCkge1xuICAgIGlmICghdGhpcy5fdG9rZW5fdHlwZXMpIHtcbiAgICAgIHRoaXMuX3Rva2VuX3R5cGVzID0gXy5leHRlbmQoe30sXG4gICAgICAgIGRlbGltaXRlcl90b2tlbnMsXG4gICAgICAgIGNvbW1lbnRfdG9rZW5zLFxuICAgICAgICBwcmltaXRpdmVfdG9rZW5zLFxuICAgICAgICByZXNlcnZlZF90b2tlbnMsXG4gICAgICAgIGxpdGVyYWxfdG9rZW5zLFxuICAgICAgICBncm91cF90b2tlbnMsXG4gICAgICAgIG9wZXJhdG9yX3Rva2VucyxcbiAgICAgICAgYXNzaWduX3Rva2Vuc1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdG9rZW5fdHlwZXNcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy90eXBlcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYXNzaWduOiAvXig9KVtePT5dLyxcbiAgbWF0aF9hc3NpZ246IC9eW1xcK1xcLVxcKlxcLyVdPS8sXG4gIGxvZ2ljX2Fzc2lnbjogL15bISZcXHxcXF5dPS8sXG4gIGZuX2Fzc2lnbjogL149Pi8sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2Fzc2lnbnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGVvbDogL15bXFxyXFxuXXw7LyxcbiAgY29tbWE6IC9eLC8sXG4gIGNvbG9uOiAvXjooPz1bXkEtWl9dKS9pLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9kZWxpbWl0ZXJzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBjb21tZW50OiAvXlxcL1xcLyhbXlxcclxcbl0qKS8sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2NvbW1lbnRzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBvcGVuX3BhcmVuOiAvXlxcKC8sXG4gIGNsb3NlX3BhcmVuOiAvXlxcKS8sXG5cbiAgb3Blbl9icmFja2V0OiAvXlxcWy8sXG4gIGNsb3NlX2JyYWNrZXQ6IC9eXFxdLyxcblxuICBvcGVuX2N1cmx5OiAvXlxcey8sXG4gIGNsb3NlX2N1cmx5OiAvXlxcfS8sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2dyb3Vwcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAga2V5OiAvXjooW0EtWl9dW0EtWl8wLTldKikvaSxcblxuICBpZDogL14oW0EtWl9dW0EtWl8wLTldKikvaSxcbiAgaWRfZmllbGQ6IC9eXFwuKFtBLVpfXVtBLVpfMC05XSopL2ksXG5cbiAgdGhpczogL15AKD89W15BLVpfXSkvaSxcbiAgdGhpc19maWVsZDogL15AKFtBLVpfXVtBLVpfMC05XSopL2ksXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2xpdGVyYWxzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzeW1ib2w6IC9eW1xcJF0vLFxuXG4gIG1hdGg6IC9eW1xcK1xcLVxcKlxcLyVdW149XS8sXG4gIGxvZ2ljOiAvXlshJlxcfFxcXl1bXj1dLyxcbiAgY29tcDogL14+fDx8Pj18PD18IT18PT0vLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9vcGVyYXRvcnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGhleDogL15cXCQoWzAtOUEtRl0rKXwweChbMC05QS1GXSspL2ksXG4gIG51bWJlcjogL14oWy0rXT9bMC05XSpcXC4/WzAtOV0rKFtlRV1bLStdP1swLTldKyk/KS8sXG5cbiAgc3RyaW5nOiAvXlwifCcoW15cIl0qKVwifCcvLFxuICBjaGFyOiAvXicoLiknLyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvcHJpbWl0aXZlcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW5jbHVkZTogL14jXCIoW15cIl0qKVwiL2ksXG5cbiAgY29uc3Q6IC9eIyhbQS1aX11bQS1aXzAtOV0qKS9pLFxuXG4gIHJlc2VydmVkOiAvXihwdXRzfHB1dGMpL2ksXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL3Jlc2VydmVkLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIENvbnN0VG9rZW4gZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBjb25zdF90b2tlbiAodG9rZW4sIG9mZnNldCwgbGVuKSB7XG4gICAgbGV0IGMgPSBbXVxuICAgIHRoaXMuY29uc3RhbnRzW3Rva2VuLnZhbHVlXSA9IGNcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IHAgPSB0aGlzLnBlZWsoKVxuICAgICAgdG9rZW4gPSBwLnRva2VuXG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBwLm9mZnNldFxuICAgICAgICB0aGlzLmNvbHVtbiArPSBwLmxlbiArIDFcbiAgICAgIH1cbiAgICAgIGlmICghdG9rZW4gfHwgdG9rZW4uaXMoJ2VvbCcpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgYy5wdXNoKHRva2VuKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9rZW5cbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvY29uc3QuanMiLCJpbXBvcnQgeyBMZXhlciB9IGZyb20gJy4uL2xleGVyLmpzJ1xuaW1wb3J0IHsgcGF0aCwgZGlycywgZnMgfSBmcm9tICcuLi8uLi91dGlscy5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJbmNsdWRlVG9rZW4gZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBpbmNsdWRlX3Rva2VuICh0b2tlbiwgb2Zmc2V0LCBsZW4pIHtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICBsZXQgZm4gPSB0b2tlbi52YWx1ZSArIChwYXRoLmV4dG5hbWUodG9rZW4udmFsdWUpID09PSAnJyA/ICcuc2hwJyA6ICcnKVxuICAgIGxldCBwbiA9IHBhdGguam9pbihfX2Rpcm5hbWUsIGZuKVxuICAgIHRyeSB7XG4gICAgICBmcy5zdGF0U3luYyhwbilcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBuID0gcGF0aC5qb2luKGRpcnMudXNlciwgZm4pXG4gICAgICAgIGZzLnN0YXRTeW5jKHBuKVxuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcG4gPSAnJ1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocG4gIT09ICcnKSB7XG4gICAgICBsZXQgc3JjID0gZnMucmVhZEZpbGVTeW5jKHBuLCAndXRmOCcpXG4gICAgICBsZXQgbHggPSBuZXcgTGV4ZXIoKVxuICAgICAgbHgucnVuKHBuLCBzcmMpXG4gICAgICBpZiAoIWx4LmVycm9ycykge1xuICAgICAgICBfLmV4dGVuZCh0aGlzLmNvbnN0YW50cywgbHguY29uc3RhbnRzKVxuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMudG9rZW5zLmNvbmNhdChseC50b2tlbnMpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b2tlblxuICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9pbmNsdWRlLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uL2dsb2JhbHMuanMnXG5pbXBvcnQgeyBGcmFtZXMgfSBmcm9tICcuL2ZyYW1lLmpzJ1xuXG5pbXBvcnQgS2V5TGl0ZXJhbCBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMva2V5X2xpdGVyYWwuanMnXG5cbmltcG9ydCBTdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL3N0YXRlbWVudHMuanMnXG5pbXBvcnQgSWRTdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL2lkLmpzJ1xuaW1wb3J0IEFzc2lnblN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvYXNzaWduLmpzJ1xuaW1wb3J0IFJldHVyblN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvcmV0dXJuLmpzJ1xuaW1wb3J0IENsYXNzU3RhdGVtZW50cyBmcm9tICcuL2dyYW1tYXIvc3RhdGVtZW50cy9jbGFzcy5qcydcbmltcG9ydCBDb25kaXRpb25TdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL2NvbmRpdGlvbnMuanMnXG5pbXBvcnQgVmFyU3RhdGVtZW50cyBmcm9tICcuL2dyYW1tYXIvc3RhdGVtZW50cy92YXIuanMnXG5pbXBvcnQgTG9vcFN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvbG9vcHMuanMnXG5cbmltcG9ydCBFeHByZXNzaW9ucyBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMvZXhwcmVzc2lvbnMuanMnXG5pbXBvcnQgQXJyYXlFeHByZXNzaW9ucyBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMvYXJyYXkuanMnXG5pbXBvcnQgRGljdEV4cHJlc3Npb25zIGZyb20gJy4vZ3JhbW1hci9leHByZXNzaW9ucy9kaWN0LmpzJ1xuaW1wb3J0IEZuRXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2ZuLmpzJ1xuaW1wb3J0IElkRXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2lkLmpzJ1xuaW1wb3J0IENsYXNzRXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2NsYXNzLmpzJ1xuXG5jbGFzcyBOb2RlIHtcblxuICBjb25zdHJ1Y3RvciAocGFyc2VyLCB0b2tlbiwgZGF0YSkge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyXG4gICAgdGhpcy50b2tlbiA9IHRva2VuXG4gICAgdGhpcy5faW5fY2xhc3MgPSBmYWxzZVxuICAgIHRoaXMuX2ZuX2xldmVsID0gMFxuICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwge31cbiAgfVxuXG4gIHRva2VuX3Byb3AgKG5hbWUpIHsgcmV0dXJuIHRoaXMudG9rZW4gPyB0aGlzLnRva2VuW25hbWVdIDogbnVsbCB9XG5cbiAgZ2V0IHZhbHVlICgpIHsgcmV0dXJuIHRoaXMudG9rZW5fcHJvcCgndmFsdWUnKSB9XG5cbiAgZ2V0IHR5cGUgKCkgeyByZXR1cm4gdGhpcy50b2tlbl9wcm9wKCd0eXBlJykgfVxuXG4gIGdldCBzdGFydCAoKSB7IHJldHVybiB0aGlzLnRva2VuX3Byb3AoJ3N0YXJ0JykgfVxuXG4gIGdldCBlbmQgKCkgeyByZXR1cm4gdGhpcy50b2tlbl9wcm9wKCdlbmQnKSB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7IHJldHVybiB0aGlzLnRva2VuX3Byb3AoJ2xlbmd0aCcpIH1cblxuICBpcyAoZSkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4uaXMoZSkgOiBmYWxzZSB9XG5cbiAgdG9TdHJpbmcgKCkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4udG9TdHJpbmcoKSA6ICcnIH1cblxufVxuXG5cbmNsYXNzIEVtcHR5Q2xhc3Mge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VyIGV4dGVuZHMgbWl4KEVtcHR5Q2xhc3MpLndpdGgoXG4gIEtleUxpdGVyYWwsXG5cbiAgU3RhdGVtZW50cyxcbiAgSWRTdGF0ZW1lbnRzLFxuICBBc3NpZ25TdGF0ZW1lbnRzLFxuICBSZXR1cm5TdGF0ZW1lbnRzLFxuICBDbGFzc1N0YXRlbWVudHMsXG4gIENvbmRpdGlvblN0YXRlbWVudHMsXG4gIFZhclN0YXRlbWVudHMsXG4gIExvb3BTdGF0ZW1lbnRzLFxuXG4gIEV4cHJlc3Npb25zLFxuICBBcnJheUV4cHJlc3Npb25zLFxuICBEaWN0RXhwcmVzc2lvbnMsXG4gIEZuRXhwcmVzc2lvbnMsXG4gIElkRXhwcmVzc2lvbnMsXG4gIENsYXNzRXhwcmVzc2lvbnNcbikge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAodG9rZW5zKSB7XG4gICAgdGhpcy5lcnJvcnMgPSAwXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgdGhpcy5ub2RlcyA9IFtdXG4gICAgdGhpcy5mcmFtZXMgPSBuZXcgRnJhbWVzKClcbiAgICB0aGlzLnByZXZfZnJhbWUgPSBudWxsXG4gICAgdGhpcy5pbl9jbGFzcyA9IGZhbHNlXG4gICAgdGhpcy5mbl9sZXZlbCA9IDBcbiAgICB0aGlzLnRva2VucyA9IHRva2VucyB8fCBbXVxuICB9XG5cbiAgdmFsaWRPZmZzZXQgKG9mZnNldCkgeyByZXR1cm4gb2Zmc2V0ID49IDAgJiYgb2Zmc2V0IDwgdGhpcy5sZW5ndGggfVxuXG4gIHRva2VuX2F0IChvZmZzZXQpIHsgcmV0dXJuIHRoaXMudmFsaWRPZmZzZXQob2Zmc2V0KSA/IHRoaXMudG9rZW5zW29mZnNldF0gOiBudWxsIH1cblxuICBnZXQgZW9zICgpIHsgcmV0dXJuIHRoaXMub2Zmc2V0ID49IHRoaXMubGVuZ3RoIH1cblxuICBnZXQgbGVuZ3RoICgpIHsgcmV0dXJuIHRoaXMudG9rZW5zLmxlbmd0aCB9XG5cbiAgZ2V0IHRva2VuICgpIHsgcmV0dXJuIHRoaXMudG9rZW5fYXQodGhpcy5vZmZzZXQpIH1cblxuICBza2lwIChlKSB7IHdoaWxlICh0aGlzLmlzKGUpICYmICF0aGlzLmVvcykgeyB0aGlzLm5leHQoKSB9IH1cblxuICBpcyAoZSkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4uaXMoZSkgOiBmYWxzZSB9XG5cbiAgZXhwZWN0IChlLCBuZXh0ID0gdHJ1ZSkge1xuICAgIGxldCByID0gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4uaXMoZSkgOiBmYWxzZVxuICAgIGlmIChyKSB7XG4gICAgICBpZiAobmV4dCkgeyB0aGlzLm5leHQoKSB9XG4gICAgfVxuICAgIGVsc2UgeyBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCBlLCAnZXhwZWN0ZWQnKSB9XG4gICAgcmV0dXJuIHJcbiAgfVxuXG4gIG1hdGNoIChvZmZzZXQsIG1hdGNoZXMpIHtcbiAgICBpZiAoIV8uaXNOdW1iZXIob2Zmc2V0KSkge1xuICAgICAgbWF0Y2hlcyA9IG9mZnNldFxuICAgICAgb2Zmc2V0ID0gdGhpcy5vZmZzZXRcbiAgICB9XG4gICAgbGV0IHRva2VucyA9IFtdXG4gICAgbGV0IG0gPSAwXG4gICAgd2hpbGUgKHRoaXMudmFsaWRPZmZzZXQob2Zmc2V0KSAmJiBtIDwgbWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5zW29mZnNldCsrXVxuICAgICAgaWYgKCF0b2tlbi5pcyhtYXRjaGVzW20rK10pKSB7IHJldHVybiBudWxsIH1cbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKVxuICAgIH1cbiAgICByZXR1cm4gdG9rZW5zLmxlbmd0aCA/IHRva2VucyA6IG51bGxcbiAgfVxuXG4gIHBlZWsgKGMgPSAxKSB7IHJldHVybiB0aGlzLnRva2VuX2F0KHRoaXMub2Zmc2V0ICsgYykgfVxuXG4gIG5leHQgKGMgPSAxKSB7XG4gICAgdGhpcy5vZmZzZXQgKz0gY1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBsb29wX3doaWxlIChmbiwgbWF0Y2hlcywgZW5kLCBlbmRfbmV4dCwgc2tpcCkge1xuICAgIGxldCBub2RlcyA9IFtdXG4gICAgaWYgKHNraXApIHsgdGhpcy5za2lwKHNraXApIH1cbiAgICB3aGlsZSAoIXRoaXMuZW9zICYmICghZW5kIHx8ICF0aGlzLmlzKGVuZCkpICYmICghbWF0Y2hlcyB8fCB0aGlzLm1hdGNoKG1hdGNoZXMpKSkge1xuICAgICAgbm9kZXMucHVzaChmbi5jYWxsKHRoaXMpKVxuICAgICAgaWYgKHNraXApIHsgdGhpcy5za2lwKHNraXApIH1cbiAgICB9XG4gICAgaWYgKGVuZCkgeyB0aGlzLmV4cGVjdChlbmQsIGVuZF9uZXh0KSB9XG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cblxuICBuZXh0X2V4cHJfbm9kZSAobGVmdCkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICBsZXQgZGF0YSA9IHt9XG4gICAgaWYgKGxlZnQpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBkYXRhID0geyBsZWZ0LCByaWdodDogdGhpcy5leHByKCkgfVxuICAgIH1cbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRva2VuLCBkYXRhKVxuICAgIGlmICghbGVmdCkgeyB0aGlzLm5leHQoKSB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIHJ1biAodG9rZW5zKSB7XG4gICAgdGhpcy5yZXNldCh0b2tlbnMpXG4gICAgdGhpcy5mcmFtZXMuc3RhcnQoJ2dsb2JhbHMnKVxuICAgIGxldCBub2RlcyA9IHRoaXMuc3RhdGVtZW50cygpXG4gICAgdGhpcy5mcmFtZXMuZW5kKClcbiAgICB0aGlzLm5vZGVzID0gbm9kZXNcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIGNvbnNvbGUuaW5mbygncGFyc2VyIGR1bXAnKVxuICAgIGNvbnNvbGUubG9nKHRoaXMubm9kZXMpXG4gICAgY29uc29sZS5sb2coJycpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3BhcnNlci5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IHZhciBGcmFtZVxuZXhwb3J0IHZhciBGcmFtZXNcbmV4cG9ydCB2YXIgRnJhbWVJdGVtXG5cbkZyYW1lcyA9IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gbnVsbFxuICB9XG5cbiAgc3RhcnQgKHR5cGUpIHsgdGhpcy5jdXJyZW50ID0gbmV3IEZyYW1lKHRoaXMsIHRoaXMuY3VycmVudCwgdHlwZSkgfVxuXG4gIGVuZCAoKSB7IHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudC5wYXJlbnQgfVxuXG4gIGFkZCAobm9kZSwgcGFyZW50LCBpdGVtX3R5cGUpIHsgcmV0dXJuIHRoaXMuY3VycmVudC5hZGQobm9kZSwgcGFyZW50LCBpdGVtX3R5cGUpIH1cblxuICBleGlzdHMgKG5hbWUsIGl0ZW1fdHlwZSkge1xuICAgIGxldCBjID0gdGhpcy5jdXJyZW50XG4gICAgd2hpbGUgKGMpIHtcbiAgICAgIGxldCBpID0gYy5leGlzdHMobmFtZSwgaXRlbV90eXBlKVxuICAgICAgaWYgKGkpIHtcbiAgICAgICAgcmV0dXJuIGlcbiAgICAgIH1cbiAgICAgIGMgPSBjLnBhcmVudFxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZm5fZXhpc3RzIChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhpc3RzKG5hbWUsICdmbicpXG4gIH1cblxuICBjbGFzc19leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2NsYXNzJylcbiAgfVxuXG4gIHZhcl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ3ZhcicpXG4gIH1cblxufVxuXG5cbkZyYW1lSXRlbSA9IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvciAoZnJhbWUsIHBhcmVudCwgbm9kZSwgaXRlbV90eXBlKSB7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICB0aGlzLml0ZW1fdHlwZSA9IGl0ZW1fdHlwZVxuICAgIHRoaXMubm9kZSA9IG5vZGVcbiAgfVxuXG4gIGdldCBkYXRhICgpIHsgcmV0dXJuIHRoaXMubm9kZS5kYXRhIH1cblxuICBnZXQgbmFtZSAoKSB7IHJldHVybiB0aGlzLm5vZGUudmFsdWUgfVxuXG4gIGdldCB0eXBlICgpIHsgcmV0dXJuIHRoaXMubm9kZS50eXBlIH1cblxuICBnZXQgaXNfdmFyICgpIHsgcmV0dXJuIHRoaXMuaXRlbV90eXBlID09PSAndmFyJyB9XG5cbiAgZ2V0IGlzX2NsYXNzICgpIHsgcmV0dXJuIHRoaXMuaXRlbV90eXBlID09PSAnY2xhc3MnIH1cblxuICBnZXQgaXNfZm4gKCkgeyByZXR1cm4gdGhpcy5pdGVtX3R5cGUgPT09ICdmbicgfVxuXG4gIGdldCBpc19sb2NhbCAoKSB7IHJldHVybiB0aGlzLmZyYW1lLmlzX2xvY2FsIH1cblxuICBnZXQgaXNfZ2xvYmFsICgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuaXNfZ2xvYmFsIH1cblxufVxuXG5cbkZyYW1lID0gY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yIChmcmFtZXMsIHBhcmVudCwgdHlwZSkge1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICB0aGlzLnR5cGUgPSB0eXBlXG4gICAgdGhpcy5pdGVtcyA9IFtdXG4gIH1cblxuICBnZXQgbmFtZSAoKSB7IHJldHVybiB0aGlzLnBhcmVudCA/ICckcycgOiAnJGcnIH1cblxuICBnZXQgaXNfbG9jYWwgKCkgeyByZXR1cm4gdGhpcy5wYXJlbnQgIT09IG51bGwgfVxuXG4gIGdldCBpc19nbG9iYWwgKCkgeyByZXR1cm4gdGhpcy5wYXJlbnQgPT09IG51bGwgfVxuXG4gIGFkZCAobm9kZSwgcGFyZW50LCBpdGVtX3R5cGUpIHtcbiAgICBsZXQgaSA9IG5ldyBGcmFtZUl0ZW0odGhpcywgcGFyZW50LCBub2RlLCBpdGVtX3R5cGUpXG4gICAgdGhpcy5pdGVtcy5wdXNoKGkpXG4gICAgbm9kZS5fZ2xvYmFsID0gdGhpcy5pc19nbG9iYWxcbiAgICByZXR1cm4gaVxuICB9XG5cbiAgZXhpc3RzIChuYW1lLCBpdGVtX3R5cGUpIHsgcmV0dXJuIF8uZmluZCh0aGlzLml0ZW1zLCBpdGVtX3R5cGUgPyB7IG5hbWUsIGl0ZW1fdHlwZSB9IDogeyBuYW1lIH0pIH1cblxuICBmbl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2ZuJylcbiAgfVxuXG4gIHZhcl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ3ZhcicpXG4gIH1cblxuICBjbGFzc19leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2NsYXNzJylcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZnJhbWUuanMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEtleUxpdGVyYWxzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAga2V5X2xpdGVyYWwgKCkge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICB0aGlzLmV4cGVjdCgna2V5JylcbiAgICBub2RlLmRhdGEuZXhwciA9IHRoaXMuZXhwcigpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMva2V5X2xpdGVyYWwuanMiLCJpbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGJsb2NrIChlbmQsIGVuZF9uZXh0ID0gdHJ1ZSwgYmxvY2tfdHlwZSA9IG51bGwpIHtcbiAgICBpZiAoYmxvY2tfdHlwZSkge1xuICAgICAgdGhpcy5mcmFtZXMuc3RhcnQoYmxvY2tfdHlwZSlcbiAgICB9XG4gICAgbGV0IG5vZGVzID0gdGhpcy5sb29wX3doaWxlKHRoaXMuc3RhdGVtZW50LCBudWxsLCBlbmQsIGVuZF9uZXh0LCAnZW9sJylcbiAgICBpZiAoYmxvY2tfdHlwZSkge1xuICAgICAgdGhpcy5mcmFtZXMuZW5kKClcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cblxuICBzdGF0ZW1lbnRzICgpIHsgcmV0dXJuIHRoaXMuYmxvY2soKSB9XG5cbiAgc2luZ2xlX3N0YXRlbWVudCAoKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIHRoaXMubmV4dCgpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIHN0YXRlbWVudCAoKSB7XG4gICAgaWYgKHRoaXMubWF0Y2goWydsZXQnLCAnaWQnXSkpIHsgcmV0dXJuIHRoaXMudmFyX3N0YXRlbWVudCgpIH0gLy8gdmFyaWFibGUgZGVmaW5pdGlvblxuICAgIGVsc2UgaWYgKHRoaXMubWF0Y2goWydpZHxpZF9maWVsZHx0aGlzX2ZpZWxkJywgJ2Fzc2lnbnxmbl9hc3NpZ24nXSkpIHsgcmV0dXJuIHRoaXMuYXNzaWduX3N0YXRlbWVudCgpIH0gLy8gdmFyaWFibGUgYXNzaWdubWVudFxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2lmJykpIHsgcmV0dXJuIHRoaXMuaWZfc3RhdGVtZW50KCkgfSAvLyBpZiBibG9ja1xuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2ZvcicpKSB7IHJldHVybiB0aGlzLmZvcl9zdGF0ZW1lbnQoKSB9IC8vIHdoaWxlIGJsb2NrXG4gICAgZWxzZSBpZiAodGhpcy5pcygnd2hpbGUnKSkgeyByZXR1cm4gdGhpcy53aGlsZV9zdGF0ZW1lbnQoKSB9IC8vIHdoaWxlIGJsb2NrXG4gICAgZWxzZSBpZiAodGhpcy5pcygncmV0dXJuJykpIHsgcmV0dXJuIHRoaXMucmV0dXJuX3N0YXRlbWVudCgpIH0gLy8gcmV0dXJuIGZyb20gZnVuY3Rpb25cbiAgICBlbHNlIGlmICh0aGlzLmlzKFsnYnJlYWsnLCAnY29udGludWUnXSkpIHsgcmV0dXJuIHRoaXMuc2luZ2xlX3N0YXRlbWVudCgpIH0gLy8gc2luZ2xlIHN0YXRlbWVudFxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2NsYXNzJykpIHsgcmV0dXJuIHRoaXMuY2xhc3Nfc3RhdGVtZW50KCkgfSAvLyBjbGFzcyBzdGF0ZW1lbnRcbiAgICBlbHNlIGlmICh0aGlzLmlzKFsnaWQnLCAnc3VwZXInXSkpIHsgcmV0dXJuIHRoaXMuaWRfc3RhdGVtZW50KCkgfSAvLyBmdW5jdGlvbiBjYWxsXG4gICAgZWxzZSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnc3ludGF4IGVycm9yJylcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvc3RhdGVtZW50cy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJZFN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBpZF9zdGF0ZW1lbnQgKGZpcnN0ID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLmlzKCdzdXBlcicpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdXBlcl9leHByKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pZF9leHByKGZpcnN0KVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9pZC5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQXNzaWduU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGFzc2lnbl9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCBub2RlID0gbnVsbFxuICAgIGxldCBpZCA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICh0aGlzLmlzKCdmbl9hc3NpZ24nKSkge1xuICAgICAgbm9kZSA9IHRoaXMuZm5fZXhwcihpZCwgdHJ1ZSlcbiAgICAgIGlkLl9mbiA9IHRydWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbiwgeyBpZCB9KVxuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIG5vZGUuZGF0YS5leHByID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgdGhpcy5mcmFtZXMuYWRkKGlkLCBudWxsLCBpZC5fZm4gPyAnZm4nIDogJ3ZhcicpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9hc3NpZ24uanMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFJldHVyblN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICByZXR1cm5fc3RhdGVtZW50ICgpIHtcbiAgICBsZXQgcCA9IGZhbHNlXG4gICAgbGV0IGVuZCA9ICdlb2x8ZW5kfGNsb3NlX3BhcmVuJ1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICBub2RlLmRhdGEuYXJncyA9IFtdXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7XG4gICAgICBwID0gdHJ1ZVxuICAgICAgZW5kID0gJ2Nsb3NlX3BhcmVuJ1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgaWYgKCFwIHx8ICF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICBub2RlLmRhdGEuYXJncyA9IHRoaXMuZXhwcnMoZW5kLCBmYWxzZSlcbiAgICB9XG4gICAgaWYgKHApIHtcbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvcmV0dXJuLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBDbGFzc1N0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBjbGFzc19saXN0ICgpIHsgcmV0dXJuIHRoaXMubG9vcF93aGlsZSh0aGlzLnNpbmdsZSwgWydpZCddLCAnZW9sJywgdHJ1ZSwgJ2NvbW1hJykgfVxuXG4gIGNsYXNzX3N0YXRlbWVudCAoKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgbGV0IF9leHRlbmRzID0gbnVsbFxuICAgIGxldCBpZCA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICh0aGlzLmlzKCc6JykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBfZXh0ZW5kcyA9IHRoaXMuY2xhc3NfbGlzdCgpXG4gICAgfVxuICAgIHRoaXMuZnJhbWVzLmFkZChpZCwgbnVsbCwgJ2NsYXNzJylcbiAgICB0aGlzLmluX2NsYXNzID0gdHJ1ZVxuICAgIGxldCBib2R5ID0gdGhpcy5ibG9jaygnZW5kJywgZmFsc2UsICdjbGFzcycpXG4gICAgdGhpcy5pbl9jbGFzcyA9IGZhbHNlXG4gICAgdGhpcy5leHBlY3QoJ2VuZCcpXG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IGlkLCBfZXh0ZW5kcywgYm9keSB9KVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2NsYXNzLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBDb25kaXRpb25TdGF0ZW1lbnRzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgaWZfc3RhdGVtZW50IChleHBlY3RfZW5kID0gdHJ1ZSkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGxldCBleHByX2Jsb2NrXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fcGFyZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIGV4cHJfYmxvY2sgPSB0aGlzLmV4cHIoKVxuICAgICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleHByX2Jsb2NrID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgbGV0IHRydWVfYm9keSA9IHRoaXMuYmxvY2soWydlbHNlJywgJ2VuZCddLCBmYWxzZSwgJ2lmJylcbiAgICBsZXQgZmFsc2VfYm9keSA9IHRoaXMuaXMoJ2Vsc2UnKSA/IHRoaXMuZWxzZV9zdGF0ZW1lbnQoZmFsc2UpIDogbnVsbFxuICAgIGlmIChleHBlY3RfZW5kKSB7IHRoaXMuZXhwZWN0KCdlbmQnKSB9XG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IGV4cHI6IGV4cHJfYmxvY2ssIHRydWVfYm9keSwgZmFsc2VfYm9keSB9KVxuICB9XG5cbiAgZWxzZV9zdGF0ZW1lbnQgKGV4cGVjdF9lbmQgPSB0cnVlKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIGxldCBub2RlID0gbnVsbFxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ2lmJykpIHtcbiAgICAgIG5vZGUgPSB0aGlzLmlmX3N0YXRlbWVudChmYWxzZSlcbiAgICAgIG5vZGUudG9rZW4gPSB0b2tlblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0b2tlbiwgeyBmYWxzZV9ib2R5OiB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ2Vsc2UnKSB9KVxuICAgIH1cbiAgICBpZiAoZXhwZWN0X2VuZCkgeyB0aGlzLmV4cGVjdCgnZW5kJykgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvY29uZGl0aW9ucy5qcyIsImltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi4vLi4vbGV4ZXIuanMnXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFZhclN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICB2YXJfc3RhdGVtZW50ICgpIHtcbiAgICBsZXQgbm9kZSA9IG51bGxcbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICghdGhpcy5wZWVrKCkuaXMoJ2Fzc2lnbnxmbl9hc3NpZ24nKSkge1xuICAgICAgbGV0IHQgPSBuZXcgVG9rZW4odGhpcy50b2tlbilcbiAgICAgIHQudmFsdWUgPSAnPSdcbiAgICAgIHQuX3R5cGUgPSAnYXNzaWduJ1xuICAgICAgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHQsIHsgaWQ6IHRoaXMudG9rZW4sIGV4cHI6IG51bGwgfSlcbiAgICAgIHRoaXMuZnJhbWVzLmFkZCh0aGlzLnRva2VuLCBudWxsLCAndmFyJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlID0gdGhpcy5hc3NpZ25fc3RhdGVtZW50KClcbiAgICB9XG4gICAgbm9kZS5fbGV0ID0gdHJ1ZVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvdmFyLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBMb29wU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGZvcl9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuXG4gICAgbGV0IHYgPSB0aGlzLnRva2VuXG4gICAgdGhpcy5leHBlY3QoJ2lkfHZhcicpXG4gICAgdGhpcy5leHBlY3QoJ2Fzc2lnbicpXG4gICAgbGV0IG1pbl9leHByID0gdGhpcy5leHByKClcbiAgICB0aGlzLmV4cGVjdCgndG8nKVxuICAgIGxldCBtYXhfZXhwciA9IHRoaXMuZXhwcigpXG4gICAgbGV0IHN0ZXBfZXhwciA9IG51bGxcbiAgICBpZiAodGhpcy5pcygnc3RlcCcpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgc3RlcF9leHByID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgbGV0IGJvZHkgPSB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ2ZvcicpXG4gICAgdGhpcy5leHBlY3QoJ2VuZCcpXG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IHYsIG1pbl9leHByLCBtYXhfZXhwciwgc3RlcF9leHByLCBib2R5IH0pXG4gIH1cblxuICB3aGlsZV9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGxldCBleHByX2Jsb2NrXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fcGFyZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIGV4cHJfYmxvY2sgPSB0aGlzLmV4cHIoKVxuICAgICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleHByX2Jsb2NrID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgbGV0IGJvZHkgPSB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ3doaWxlJylcbiAgICB0aGlzLmV4cGVjdCgnZW5kJylcbiAgICByZXR1cm4gbmV3IE5vZGUodGhpcywgdG9rZW4sIHsgZXhwcjogZXhwcl9ibG9jaywgYm9keSB9KVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2xvb3BzLmpzIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZXhwcnMgKGVuZCwgZW5kX25leHQpIHsgcmV0dXJuIHRoaXMubG9vcF93aGlsZSh0aGlzLmV4cHIsIG51bGwsIGVuZCwgZW5kX25leHQsICdjb21tYScpIH1cblxuICBleHByICgpIHtcbiAgICBsZXQgbm9kZSA9IHRoaXMuc2ltcGxlX2V4cHIoKVxuICAgIGlmIChub2RlKSB7XG4gICAgICBsZXQgdGVybSA9IHRoaXMudGVybV9leHByKG5vZGUpXG4gICAgICBpZiAodGVybSkgeyByZXR1cm4gdGVybSB9XG5cbiAgICAgIGxldCBmYWN0b3IgPSB0aGlzLmZhY3Rvcl9leHByKG5vZGUpXG4gICAgICBpZiAoZmFjdG9yKSB7IHJldHVybiBmYWN0b3IgfVxuXG4gICAgICBsZXQgY29uZGl0aW9uYWwgPSB0aGlzLmNvbmRpdGlvbmFsX2V4cHIobm9kZSlcbiAgICAgIGlmIChjb25kaXRpb25hbCkgeyByZXR1cm4gY29uZGl0aW9uYWwgfVxuXG4gICAgICBsZXQganVuY3Rpb24gPSB0aGlzLmp1bmN0aW9uX2V4cHIobm9kZSlcbiAgICAgIGlmIChqdW5jdGlvbikgeyByZXR1cm4ganVuY3Rpb24gfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgc2ltcGxlX2V4cHIgKCkge1xuICAgIGlmICh0aGlzLmlzKFsnbnVtYmVyJywgJ3N0cmluZycsICdjaGFyJ10pKSB7IHJldHVybiB0aGlzLm5leHRfZXhwcl9ub2RlKCkgfVxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2ZuX2Fzc2lnbicpKSB7IHJldHVybiB0aGlzLmZuX2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7IHJldHVybiB0aGlzLnN1Yl9leHByKCkgfVxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ29wZW5fYnJhY2tldCcpKSB7IHJldHVybiB0aGlzLmFycmF5X2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnb3Blbl9jdXJseScpKSB7IHJldHVybiB0aGlzLmRpY3RfZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKFsndGhpcycsICd0aGlzX2ZpZWxkJ10pKSB7IHJldHVybiB0aGlzLnRoaXNfZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKCdzdXBlcicpKSB7IHJldHVybiB0aGlzLnN1cGVyX2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnbmV3JykpIHsgcmV0dXJuIHRoaXMubmV3X2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnaWQnKSkgeyByZXR1cm4gdGhpcy5pZF9leHByKCkgfVxuICAgIGVsc2Uge1xuICAgICAgZXJyb3IodGhpcywgdGhpcy50b2tlbiwgJ251bWJlciwgc3RyaW5nLCB2YXJpYWJsZSwgdmFyaWFibGUgcGFyZW4gb3IgZnVuY3Rpb24gY2FsbC9leHByZXNzaW9uIGV4cGVjdGVkJylcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBzdWJfZXhwciAoKSB7XG4gICAgbGV0IG5vZGVzID0gW11cbiAgICBub2Rlcy5wdXNoKG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pKVxuICAgIHRoaXMuZXhwZWN0KCdvcGVuX3BhcmVuJylcbiAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgIG5vZGVzLnB1c2godGhpcy5leHByKCkpXG4gICAgfVxuICAgIG5vZGVzLnB1c2gobmV3IE5vZGUodGhpcywgdGhpcy50b2tlbikpXG4gICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxuXG4gIHRlcm1fZXhwciAobGVmdCkgeyByZXR1cm4gdGhpcy5pcygvXFwrfC0vKSA/IHRoaXMubmV4dF9leHByX25vZGUobGVmdCkgOiBudWxsIH1cblxuICBmYWN0b3JfZXhwciAobGVmdCkgeyByZXR1cm4gdGhpcy5pcygvXFwvfFxcKi8pID8gdGhpcy5uZXh0X2V4cHJfbm9kZShsZWZ0KSA6IG51bGwgfVxuXG4gIGNvbmRpdGlvbmFsX2V4cHIgKGxlZnQpIHsgcmV0dXJuIHRoaXMuaXMoLz58Pj18PHw8PXwhPXw8Pnw9PS8pID8gdGhpcy5uZXh0X2V4cHJfbm9kZShsZWZ0KSA6IG51bGwgfVxuXG4gIGp1bmN0aW9uX2V4cHIgKGxlZnQpIHsgcmV0dXJuIHRoaXMuaXMoLyZ8XFx8LykgPyB0aGlzLm5leHRfZXhwcl9ub2RlKGxlZnQpIDogbnVsbCB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9leHByZXNzaW9ucy5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQXJyYXlFeHByZXNzaW9ucyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGFycmF5X2V4cHIgKCkge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICBub2RlLmRhdGEuYXJncyA9IFtdXG4gICAgdGhpcy5leHBlY3QoJ29wZW5fYnJhY2tldCcpXG4gICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9icmFja2V0JykpIHtcbiAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5sb29wX3doaWxlKHRoaXMuZXhwciwgbnVsbCwgJ2Nsb3NlX2JyYWNrZXQnLCBmYWxzZSwgJ2NvbW1hfGVvbCcpXG4gICAgfVxuICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9icmFja2V0JylcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9hcnJheS5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgRGljdEV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZGljdF9leHByICgpIHtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgbm9kZS5kYXRhLmRlZiA9IFtdXG4gICAgdGhpcy5leHBlY3QoJ29wZW5fY3VybHknKVxuICAgIGlmICghdGhpcy5pcygnY2xvc2VfY3VybHknKSkge1xuICAgICAgbm9kZS5kYXRhLmRlZiA9IHRoaXMubG9vcF93aGlsZSh0aGlzLmtleV9saXRlcmFsLCBbJ2tleSddLCAnY2xvc2VfY3VybHknLCBmYWxzZSwgJ2NvbW1hfGVvbCcpXG4gICAgfVxuICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9jdXJseScpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZGljdC5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgRm5FeHByZXNzaW9ucyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGZuX2V4cHIgKGlkLCBzdGF0ZW1lbnQgPSBmYWxzZSkge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbiwgeyBpZCB9KVxuICAgIG5vZGUuZGF0YS5hcmdzID0gW11cbiAgICBpZiAoc3RhdGVtZW50KSB7XG4gICAgICBub2RlLl9pbl9jbGFzcyA9IHRoaXMuaW5fY2xhc3NcbiAgICAgIG5vZGUuX2ZuX2xldmVsID0gdGhpcy5mbl9sZXZlbCsrXG4gICAgfVxuICAgIHRoaXMubmV4dCgpXG4gICAgdGhpcy5mcmFtZXMuc3RhcnQoJ2ZuJylcbiAgICBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5mbl9hcmdzX2RlZigpXG4gICAgICB9XG4gICAgICB0aGlzLmV4cGVjdCgnY2xvc2VfcGFyZW4nKVxuICAgIH1cbiAgICBub2RlLmRhdGEuYm9keSA9IHRoaXMuYmxvY2soJ2VuZCcsIGZhbHNlKVxuICAgIHRoaXMuZnJhbWVzLmVuZCgpXG4gICAgdGhpcy5leHBlY3QoJ2VuZCcpXG4gICAgaWYgKHN0YXRlbWVudCkge1xuICAgICAgdGhpcy5mbl9sZXZlbC0tXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBmbl9hcmcgKCkge1xuICAgIHRoaXMuZnJhbWVzLmFkZCh0aGlzLnRva2VuLCBudWxsLCAndmFyJylcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAodGhpcy5pcygnYXNzaWduJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBub2RlLmRhdGEuYXNzaWduID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGZuX2FyZ3NfZGVmICgpIHsgcmV0dXJuIHRoaXMubG9vcF93aGlsZSh0aGlzLmZuX2FyZywgWydpZCddLCAnY2xvc2VfcGFyZW4nLCBmYWxzZSwgJ2NvbW1hfGVvbCcpIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2ZuLmpzIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzLmpzJ1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJZEV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgaWRfZXhwciAoZmlyc3QgPSB0cnVlKSB7XG4gICAgaWYgKGZpcnN0ICYmICF0aGlzLmZyYW1lcy5leGlzdHModGhpcy50b2tlbi52YWx1ZSkpIHtcbiAgICAgIGVycm9yKHRoaXMsIHRoaXMudG9rZW4sICd1bmRlY2xhcmVkIGlkZW50aWZpZXInKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fYnJhY2tldCcpKSB7XG4gICAgICBpZiAoIW5vZGUuZGF0YS5maWVsZHMpIHtcbiAgICAgICAgbm9kZS5kYXRhLmZpZWxkcyA9IFtdXG4gICAgICB9XG4gICAgICBub2RlLmRhdGEuZmllbGRzLnB1c2godGhpcy5hcnJheV9leHByKCkpXG4gICAgfVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBub2RlLnRva2VuLl90eXBlID0gJ2ZuJ1xuICAgICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5leHBycygnY2xvc2VfcGFyZW4nLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHdoaWxlICh0aGlzLmlzKFsnaWRfZmllbGQnLCAnb3Blbl9icmFja2V0J10pKSB7XG4gICAgICBpZiAoIW5vZGUuZGF0YS5maWVsZHMpIHtcbiAgICAgICAgbm9kZS5kYXRhLmZpZWxkcyA9IFtdXG4gICAgICB9XG4gICAgICBub2RlLmRhdGEuZmllbGRzLnB1c2godGhpcy5pZF9maWVsZCgpKVxuICAgICAgdGhpcy5za2lwKCdjb21tYScpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBpZF9maWVsZCAoKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIG5vZGUuZGF0YS5hcmdzID0gW11cbiAgICBub2RlLnRva2VuLl90eXBlID0gJ2lkJ1xuICAgIG5vZGUuX2ZpZWxkID0gdHJ1ZVxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fYnJhY2tldCcpKSB7XG4gICAgICBpZiAoIW5vZGUuZGF0YS5maWVsZHMpIHtcbiAgICAgICAgbm9kZS5kYXRhLmZpZWxkcyA9IFtdXG4gICAgICB9XG4gICAgICBub2RlLmRhdGEuZmllbGRzLnB1c2godGhpcy5hcnJheV9leHByKCkpXG4gICAgfVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBub2RlLnRva2VuLl90eXBlID0gJ2ZuJ1xuICAgICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5leHBycygnY2xvc2VfcGFyZW4nLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2lkLmpzIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIENsYXNzRXhwcmVzc2lvbnMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBuZXdfZXhwciAoKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgbGV0IGlkID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKCF0aGlzLmZyYW1lcy5leGlzdHMoaWQudmFsdWUsICdjbGFzcycpKSB7XG4gICAgICBlcnJvcih0aGlzLCBpZCwgJ3VuZGVjbGFyZWQgY2xhc3MnKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgbGV0IGFyZ3MgPSBbXVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgICAgYXJncyA9IHRoaXMuZXhwcnMoJ2Nsb3NlX3BhcmVuJywgZmFsc2UpXG4gICAgICB9XG4gICAgICB0aGlzLmV4cGVjdCgnY2xvc2VfcGFyZW4nKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IE5vZGUodGhpcywgdG9rZW4sIHsgaWQsIGFyZ3MgfSlcbiAgfVxuXG4gIHRoaXNfZXhwciAoKSB7XG4gICAgaWYgKCF0aGlzLmluX2NsYXNzKSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnQCBjYW5ub3QgYmUgdXNlZCBvdXRzaWRlIGNsYXNzIGRlZmluaXRpb24nKVxuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICh0aGlzLmlzKCd0aGlzJykpIHtcbiAgICAgIHJldHVybiB0aGlzLm5leHRfZXhwcl9ub2RlKClcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygndGhpc19maWVsZCcpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pZF9leHByKGZhbHNlKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgc3VwZXJfZXhwciAoKSB7XG4gICAgaWYgKCF0aGlzLmluX2NsYXNzKSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnc3VwZXIgY2Fubm90IGJlIHVzZWQgb3V0c2lkZSBjbGFzcyBkZWZpbml0aW9uJylcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pZF9leHByKGZhbHNlKVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9jbGFzcy5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IFRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy90ZW1wbGF0ZXMuanMnXG5pbXBvcnQgQ29kZVRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9jb2RlLmpzJ1xuaW1wb3J0IEJsb2NrVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2Jsb2NrLmpzJ1xuaW1wb3J0IFN0YXRlbWVudFRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9zdGF0ZW1lbnRzLmpzJ1xuaW1wb3J0IEV4cHJlc3Npb25UZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvZXhwcmVzc2lvbnMuanMnXG5pbXBvcnQgUHJpbWl0aXZlVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL3ByaW1pdGl2ZXMuanMnXG5pbXBvcnQgT3BlcmF0b3JUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvb3BlcmF0b3JzLmpzJ1xuaW1wb3J0IElkVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2lkLmpzJ1xuaW1wb3J0IENsYXNzVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2NsYXNzLmpzJ1xuaW1wb3J0IEZuVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2ZuLmpzJ1xuaW1wb3J0IEFycmF5VGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2FycmF5LmpzJ1xuaW1wb3J0IERpY3RUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvZGljdC5qcydcbmltcG9ydCBBc3NpZ25UZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvYXNzaWduLmpzJ1xuXG5jbGFzcyBFbXB0eUNsYXNzIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zcGlsZXIgZXh0ZW5kcyBtaXgoRW1wdHlDbGFzcykud2l0aChcbiAgVGVtcGxhdGVzLFxuICBDb2RlVGVtcGxhdGVzLFxuXG4gIEJsb2NrVGVtcGxhdGVzLFxuICBTdGF0ZW1lbnRUZW1wbGF0ZXMsXG4gIEV4cHJlc3Npb25UZW1wbGF0ZXMsXG5cbiAgUHJpbWl0aXZlVGVtcGxhdGVzLFxuICBPcGVyYXRvclRlbXBsYXRlcyxcbiAgSWRUZW1wbGF0ZXMsXG5cbiAgQ2xhc3NUZW1wbGF0ZXMsXG4gIEZuVGVtcGxhdGVzLFxuXG4gIEFycmF5VGVtcGxhdGVzLFxuICBEaWN0VGVtcGxhdGVzLFxuXG4gIEFzc2lnblRlbXBsYXRlc1xuKSB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIGdldCBsZW5ndGggKCkgeyByZXR1cm4gdGhpcy5saW5lcy5sZW5ndGggfVxuXG4gIGdldCBlb3MgKCkgeyByZXR1cm4gdGhpcy5vZmZzZXQgPj0gdGhpcy5ub2Rlcy5sZW5ndGggfVxuXG4gIGdldCBub2RlICgpIHsgcmV0dXJuIHRoaXMubm9kZV9hdCh0aGlzLm9mZnNldCkgfVxuXG4gIHZhbGlkT2Zmc2V0IChvZmZzZXQpIHsgcmV0dXJuIG9mZnNldCA+PSAwICYmIG9mZnNldCA8IHRoaXMubm9kZXMubGVuZ3RoIH1cblxuICBub2RlX2F0IChvZmZzZXQpIHsgcmV0dXJuIHRoaXMudmFsaWRPZmZzZXQob2Zmc2V0KSA/IHRoaXMubm9kZXNbb2Zmc2V0XSA6IG51bGwgfVxuXG4gIHBlZWsgKGMgPSAxKSB7IHJldHVybiB0aGlzLm5vZGVfYXQodGhpcy5vZmZzZXQgKyBjKSB9XG5cbiAgbmV4dCAoYyA9IDEpIHsgdGhpcy5vZmZzZXQgKz0gYyB9XG5cbiAgd3JpdGUgKC4uLnZhbHVlcykgeyB0aGlzLmxpbmUgKz0gdmFsdWVzLmpvaW4oJycpIH1cblxuICB3cml0ZWxuICguLi52YWx1ZXMpIHtcbiAgICB0aGlzLndyaXRlKC4uLnZhbHVlcylcbiAgICB0aGlzLmxpbmVzID0gdGhpcy5saW5lcy5jb25jYXQodGhpcy5saW5lLnNwbGl0KCdcXG4nKSlcbiAgICB0aGlzLmxpbmUgPSAnJ1xuICB9XG5cbiAgcmVzZXQgKG5vZGVzKSB7XG4gICAgdGhpcy5lcnJvcnMgPSAwXG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzIHx8IFtdXG4gICAgdGhpcy5saW5lcyA9IFtdXG4gICAgdGhpcy5saW5lID0gJydcbiAgICB0aGlzLm9mZnNldCA9IDBcbiAgICB0aGlzLmNvZGUgPSAnJ1xuICAgIHRoaXMuaW5kZW50X2xldmVsID0gMFxuICB9XG5cbiAgY29tbWEgKG5vZGVzKSB7XG4gICAgbGV0IGEgPSBbXVxuICAgIGZvciAobGV0IG4gb2Ygbm9kZXMpIHtcbiAgICAgIGEucHVzaChuIGluc3RhbmNlb2YgTm9kZSA/IHRoaXMuZXhwcihuKSA6IG4pXG4gICAgfVxuICAgIHJldHVybiBhLmpvaW4oJywgJylcbiAgfVxuXG4gIGxuIChzdHIpIHsgcmV0dXJuIHN0ciArICghXy5lbmRzV2l0aChzdHIsICdcXG4nKSA/ICdcXG4nIDogJycpIH1cblxuICBpbmRlbnQgKHN0cikgeyByZXR1cm4gXy5wYWRTdGFydCgnJywgdGhpcy5pbmRlbnRfbGV2ZWwgKiAyKSArIHN0ciB9XG5cbiAgc3RyICh2YWx1ZSkgeyByZXR1cm4gJ1xcJycgKyB2YWx1ZS5yZXBsYWNlKC8nL2csICdcXCcnKSArICdcXCcnIH1cblxuICBydW4gKG5vZGVzKSB7XG4gICAgdGhpcy5yZXNldChub2RlcylcbiAgICB0aGlzLmNvZGVfc3RhcnQoKVxuICAgIHdoaWxlICghdGhpcy5lb3MpIHtcbiAgICAgIHRoaXMud3JpdGVsbih0aGlzLnN0YXRlbWVudCh0aGlzLm5vZGUpKVxuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgdGhpcy5jb2RlX2VuZCgpXG4gICAgdGhpcy5jb2RlID0gdGhpcy5saW5lcy5qb2luKCdcXG4nKVxuICAgIHJldHVybiB0aGlzLmNvZGVcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIGNvbnNvbGUuaW5mbygndHJhbnNwaWxlciBkdW1wJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvZGUpXG4gICAgY29uc29sZS5sb2coJycpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RyYW5zcGlsZXIuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICBpZiAoXy5pc1N0cmluZyhub2RlKSkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZV90ZW1wbGF0ZShub2RlKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKCdmbicpKSB7XG4gICAgICByZXR1cm4gdGhpcy5mbl9jYWxsX3RlbXBsYXRlKG5vZGUpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2ZuX2Fzc2lnbicpKSB7XG4gICAgICByZXR1cm4gdGhpcy5mbl9hc3NpZ25fdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnb3Blbl9icmFja2V0JykpIHtcbiAgICAgIHJldHVybiB0aGlzLmFycmF5X3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoJ29wZW5fY3VybHknKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGljdF90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKFsnbWF0aCcsICdsb2dpYycsICdjb21wJ10pKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcGVyYXRvcl90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKFsndGhpcycsICd0aGlzX2ZpZWxkJ10pKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGlzX3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoJ25ldycpKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZXdfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcyhbJ2NoYXInLCAnc3RyaW5nJ10pKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJpbmdfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnaWQnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuaWRfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZV90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy90ZW1wbGF0ZXMuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQ29kZVRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGNvZGVfc3RhcnRfdGVtcGxhdGUgKCkge1xuICAgIHRoaXMud3JpdGVsbignKGZ1bmN0aW9uICgpIHsnKVxuICAgIHRoaXMuaW5kZW50X2xldmVsKytcbiAgICB0aGlzLndyaXRlbG4oJ1xcJ3VzZSBzdHJpY3RcXCc7JylcbiAgICB0aGlzLndyaXRlbG4oKVxuICB9XG5cbiAgY29kZV9lbmRfdGVtcGxhdGUgKCkge1xuICAgIHRoaXMud3JpdGVsbignfSkoKTsnKVxuICAgIHRoaXMuaW5kZW50X2xldmVsLS1cbiAgICB0aGlzLndyaXRlbG4oKVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NvZGUuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQmxvY2tUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBibG9ja190ZW1wbGF0ZSAobm9kZSkge1xuICAgIGxldCBzdHIgPSB0aGlzLmxuKCd7JylcblxuICAgIHRoaXMuaW5kZW50X2xldmVsKytcblxuICAgIGlmIChfLmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAobGV0IG4gb2Ygbm9kZSkge1xuICAgICAgICBzdHIgKz0gdGhpcy5zdGF0ZW1lbnRfdGVtcGxhdGUobilcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzdHIgPSB0aGlzLnN0YXRlbWVudF90ZW1wbGF0ZShub2RlKVxuICAgIH1cblxuICAgIHRoaXMuaW5kZW50X2xldmVsLS1cblxuICAgIHN0ciArPSB0aGlzLmxuKHRoaXMuaW5kZW50KCd9JykpXG5cbiAgICByZXR1cm4gc3RyXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvYmxvY2suanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgU3RhdGVtZW50VGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgc3RhdGVtZW50X3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgbGV0IHN0ciA9ICcnXG5cbiAgICBpZiAoXy5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKGxldCBuIG9mIG5vZGUpIHtcbiAgICAgICAgc3RyICs9IHRoaXMuc3RhdGVtZW50KG4pXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIGxldCBkID0gbm9kZS5kYXRhIHx8IHt9XG4gICAgICBsZXQgdCA9IHt9XG5cbiAgICAgIGlmIChub2RlLmlzKFsnYXNzaWduJywgJ2ZuX2Fzc2lnbiddKSkge1xuICAgICAgICB0ID0gdGhpcy5hc3NpZ24obm9kZSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2ZuJykpIHtcbiAgICAgICAgdCA9IHRoaXMuZm5fY2FsbChub2RlLCB0cnVlKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnaWYnKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICdpZiAoI3tleHByfSkgI3t0cnVlX2JvZHl9I3tmYWxzZV9ib2R5fScsXG4gICAgICAgICAgZGF0OiB7XG4gICAgICAgICAgICBleHByOiB0aGlzLmV4cHIoZC5leHByKSxcbiAgICAgICAgICAgIHRydWVfYm9keTogdGhpcy5ibG9jayhkLnRydWVfYm9keSksXG4gICAgICAgICAgICBmYWxzZV9ib2R5OiB0aGlzLnN0YXRlbWVudChkLmZhbHNlX2JvZHkpLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnZWxzZScpKSB7XG4gICAgICAgIGlmIChkLmV4cHIpIHsgLy8gZWxzZSBpZlxuICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICB0bXBsOiAnZWxzZSBpZiAoI3tleHByfSkgI3t0cnVlX2JvZHl9I3tmYWxzZV9ib2R5fScsXG4gICAgICAgICAgICBkYXQ6IHtcbiAgICAgICAgICAgICAgZXhwcjogdGhpcy5leHByKGQuZXhwciksXG4gICAgICAgICAgICAgIHRydWVfYm9keTogdGhpcy5ibG9jayhkLnRydWVfYm9keSksXG4gICAgICAgICAgICAgIGZhbHNlX2JvZHk6IHRoaXMuc3RhdGVtZW50KGQuZmFsc2VfYm9keSksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICB0bXBsOiAnZWxzZSAje2ZhbHNlX2JvZHl9JyxcbiAgICAgICAgICAgIGRhdDogeyBmYWxzZV9ib2R5OiB0aGlzLmJsb2NrKGQuZmFsc2VfYm9keSkgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnd2hpbGUnKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICd3aGlsZSAoI3tleHByfSkgI3tib2R5fScsXG4gICAgICAgICAgZGF0OiB7XG4gICAgICAgICAgICBleHByOiB0aGlzLmV4cHIoZC5leHByKSxcbiAgICAgICAgICAgIGJvZHk6IHRoaXMuYmxvY2soZC5ib2R5KSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2ZvcicpKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgdG1wbDogJ2ZvciAobGV0ICN7dn0gPSAje21pbl9leHByfTsgI3t2fSA8ICN7bWF4X2V4cHJ9OyAje3Z9ICs9ICN7c3RlcF9leHByfSkgI3tib2R5fScsXG4gICAgICAgICAgZGF0OiB7XG4gICAgICAgICAgICB2OiBkLnYudmFsdWUsXG4gICAgICAgICAgICBtaW5fZXhwcjogdGhpcy5leHByKGQubWluX2V4cHIpLFxuICAgICAgICAgICAgbWF4X2V4cHI6IHRoaXMuZXhwcihkLm1heF9leHByKSxcbiAgICAgICAgICAgIHN0ZXBfZXhwcjogZC5zdGVwX2V4cHIgPyB0aGlzLmV4cHIoZC5zdGVwX2V4cHIpIDogJzEnLFxuICAgICAgICAgICAgYm9keTogdGhpcy5ibG9jayhkLmJvZHkpLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygncmV0dXJuJykpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICB0bXBsOiAncmV0dXJuICN7YXJnc30nLFxuICAgICAgICAgIGRhdDogeyBhcmdzOiB0aGlzLmV4cHIoZC5hcmdzLCAnLCAnKSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUuaXMoWydicmVhaycsICdjb250aW51ZSddKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICcje3dvcmR9JyxcbiAgICAgICAgICBkYXQ6IHsgd29yZDogbm9kZS52YWx1ZSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2NsYXNzJykpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICB0bXBsOiAnY2xhc3MgI3tuYW1lfSN7X2V4dGVuZHN9ICN7Ym9keX0nLFxuICAgICAgICAgIGRhdDoge1xuICAgICAgICAgICAgbmFtZTogZC5pZC52YWx1ZSxcbiAgICAgICAgICAgIF9leHRlbmRzOiBkLl9leHRlbmRzID8gJyBleHRlbmRzICcgKyB0aGlzLmV4cHIoZC5fZXh0ZW5kcywgJywgJykgOiAnJyxcbiAgICAgICAgICAgIGJvZHk6IHRoaXMuYmxvY2soZC5ib2R5KSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RyID0gXy50ZW1wbGF0ZSh0LnRtcGwpKHQuZGF0KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxuKHRoaXMuaW5kZW50KHN0cikpXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvc3RhdGVtZW50cy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBFeHByZXNzaW9uVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZXhwcl90ZW1wbGF0ZSAobm9kZSwgc2VwYXJhdG9yKSB7XG4gICAgbGV0IHN0ciA9ICcnXG5cbiAgICBpZiAoXy5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBsZXQgYSA9IFtdXG4gICAgICBmb3IgKGxldCBuIG9mIG5vZGUpIHtcbiAgICAgICAgYS5wdXNoKHRoaXMuZXhwcihuKSlcbiAgICAgIH1cbiAgICAgIHN0ciA9IGEuam9pbihzZXBhcmF0b3IgfHwgJycpXG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICBsZXQgZCA9IG5vZGUgJiYgbm9kZS5kYXRhIHx8IHt9XG4gICAgICBsZXQgdCA9IG5vZGUgPyB0aGlzLnRlbXBsYXRlKG5vZGUsIGQpIDogeyB0bXBsOiAndW5kZWZpbmVkJywgZGF0OiB7fSB9XG4gICAgICBzdHIgPSBfLnRlbXBsYXRlKHQudG1wbCkodC5kYXQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0clxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2V4cHJlc3Npb25zLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFByaW1pdGl2ZVRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIHN0cmluZ190ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnI3t2YWx1ZX0nLFxuICAgICAgZGF0OiB7IHZhbHVlOiB0aGlzLnN0cihub2RlLnZhbHVlKSB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3ByaW1pdGl2ZXMuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgT3BlcmF0b3JUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBvcGVyYXRvcl90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnI3tsZWZ0fSAje29wfSAje3JpZ2h0fScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgb3A6IG5vZGUudmFsdWUsXG4gICAgICAgIGxlZnQ6IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmxlZnQpLFxuICAgICAgICByaWdodDogdGhpcy5leHByX3RlbXBsYXRlKGQucmlnaHQpLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9vcGVyYXRvcnMuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgSWRUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBub2RlX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje25vZGV9JyxcbiAgICAgIGRhdDogeyBub2RlIH1cbiAgICB9XG4gIH1cblxuICBpZF90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnI3tmaWVsZH0je3ZhbHVlfSN7ZmllbGRzfSN7YXNzaWdufScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgZmllbGQ6IG5vZGUuX2ZpZWxkID8gJy4nIDogJycsXG4gICAgICAgIHZhbHVlOiBub2RlLnZhbHVlLFxuICAgICAgICBmaWVsZHM6IGQuZmllbGRzID8gdGhpcy5leHByX3RlbXBsYXRlKGQuZmllbGRzLCAnJykgOiAnJyxcbiAgICAgICAgYXNzaWduOiBkLmFzc2lnbiA/ICcgPSAnICsgdGhpcy5leHByX3RlbXBsYXRlKGQuYXNzaWduLCAnJykgOiAnJyxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YWx1ZV90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnI3t2YWx1ZX0nLFxuICAgICAgZGF0OiB7IHZhbHVlOiBub2RlLnZhbHVlIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvaWQuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQ2xhc3NUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICB0aGlzX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICd0aGlzI3tkb3R9I3tmaWVsZH0je2ZpZWxkc30nLFxuICAgICAgZGF0OiB7XG4gICAgICAgIGRvdDogbm9kZS5pcygndGhpc19maWVsZCcpID8gJy4nIDogJycsXG4gICAgICAgIGZpZWxkOiBub2RlLmlzKCd0aGlzX2ZpZWxkJykgPyBub2RlLnZhbHVlIDogJycsXG4gICAgICAgIGZpZWxkczogZC5maWVsZHMgPyB0aGlzLmV4cHJfdGVtcGxhdGUoZC5maWVsZHMsICcnKSA6ICcnLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld190ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnbmV3ICN7aWR9KCN7YXJnc30pJyxcbiAgICAgIGRhdDoge1xuICAgICAgICBpZDogZC5pZC52YWx1ZSxcbiAgICAgICAgYXJnczogdGhpcy5leHByX3RlbXBsYXRlKGQuYXJncywgJywgJyksXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NsYXNzLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEZuVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZm5fZGVmIChhcmdzLCBib2R5LCBpbl9jbGFzcykge1xuICAgIHJldHVybiBfLnRlbXBsYXRlKCcje2ZufSgje2FyZ3N9KSAje2JvZHl9Jykoe1xuICAgICAgZm46ICFpbl9jbGFzcyA/ICdmdW5jdGlvbiAnIDogJycsXG4gICAgICBhcmdzOiB0aGlzLmV4cHJfdGVtcGxhdGUoYXJncywgJywgJyksXG4gICAgICBib2R5OiB0aGlzLmJsb2NrX3RlbXBsYXRlKGJvZHkpLFxuICAgIH0pXG4gIH1cblxuICBmbl9jYWxsX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgbGV0IHQgPSB7fVxuICAgIGlmIChub2RlKSB7XG4gICAgICBsZXQgZCA9IG5vZGUuZGF0YSB8fCB7fVxuICAgICAgdCA9IHtcbiAgICAgICAgdG1wbDogJyN7ZmllbGR9I3tmbn0oI3thcmdzfSknLFxuICAgICAgICBkYXQ6IHtcbiAgICAgICAgICBmaWVsZDogbm9kZS5fZmllbGQgPyAnLicgOiAnJyxcbiAgICAgICAgICBmbjogbm9kZS52YWx1ZSxcbiAgICAgICAgICBhcmdzOiB0aGlzLmV4cHJfdGVtcGxhdGUoZC5hcmdzLCAnLCAnKSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdFxuICB9XG5cbiAgZm5fYXNzaWduX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje2ZufScsXG4gICAgICBkYXQ6IHsgZm46IHRoaXMuZm5fZGVmKGQuYXJncywgZC5ib2R5KSB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2ZuLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEFycmF5VGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgYXJyYXlfdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG1wbDogJ1sje2FyZ3N9XSN7ZmllbGRzfScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgYXJnczogdGhpcy5leHByX3RlbXBsYXRlKGQuYXJncywgJywgJyksXG4gICAgICAgIGZpZWxkczogZC5maWVsZHMgPyB0aGlzLmV4cHJfdGVtcGxhdGUoZC5maWVsZHMsICcnKSA6ICcnLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9hcnJheS5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBEaWN0VGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZGljdF90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIGxldCBkZWYgPSBfLm1hcChkLmRlZiwgZiA9PiBfLnRlbXBsYXRlKCcje3ZhbHVlfTogI3tleHByfScpKHsgdmFsdWU6IGYudmFsdWUsIGV4cHI6IHRoaXMuZXhwcl90ZW1wbGF0ZShmLmRhdGEuZXhwcikgfSkpXG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICd7I3tkZWZ9fSN7ZmllbGRzfScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgZGVmOiB0aGlzLmV4cHJfdGVtcGxhdGUoZGVmLCAnLCAnKSxcbiAgICAgICAgZmllbGRzOiBkLmZpZWxkcyA/IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmZpZWxkcywgJycpIDogJydcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZGljdC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBBc3NpZ25UZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBhc3NpZ25fdGVtcGxhdGUgKG5vZGUpIHtcbiAgICBsZXQgdCA9IHt9XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGxldCBkID0gbm9kZS5kYXRhIHx8IHt9XG5cbiAgICAgIGxldCBpZCA9IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmlkKVxuICAgICAgbGV0IF9sZXQgPSBub2RlLl9sZXQgPyAnbGV0ICcgOiAnJ1xuICAgICAgbGV0IGV4cHJcbiAgICAgIGxldCBvcFxuXG4gICAgICBpZiAobm9kZS5pcygnYXNzaWduJykpIHtcbiAgICAgICAgb3AgPSAnICcgKyBub2RlLnZhbHVlICsgJyAnXG4gICAgICAgIGV4cHIgPSB0aGlzLmV4cHJfdGVtcGxhdGUoZC5leHByKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnZm5fYXNzaWduJykpIHtcbiAgICAgICAgb3AgPSAhbm9kZS5faW5fY2xhc3MgfHwgbm9kZS5fZm5fbGV2ZWwgPiAwID8gJyA9ICcgOiAnICdcbiAgICAgICAgZXhwciA9IHRoaXMuZm5fZGVmKGQuYXJncywgZC5ib2R5LCBub2RlLl9pbl9jbGFzcyAmJiBub2RlLl9mbl9sZXZlbCA9PT0gMClcbiAgICAgIH1cblxuICAgICAgdCA9IHtcbiAgICAgICAgdG1wbDogJyN7X2xldH0je2lkfSN7b3B9I3tleHByfScsXG4gICAgICAgIGRhdDogeyBfbGV0LCBpZCwgb3AsIGV4cHIgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdFxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2Fzc2lnbi5qcyIsImltcG9ydCBoZXh5IGZyb20gJ2hleHknXG5pbXBvcnQgeyBoZXggfSBmcm9tICcuLi9nbG9iYWxzLmpzJ1xuXG5leHBvcnQgY29uc3QgZGF0YV90eXBlX3NpemVzID0ge1xuICBpODogMSxcbiAgczg6IDEsXG4gIGkxNjogMixcbiAgczE2OiAyLFxuICBpMzI6IDQsXG4gIHMzMjogNCxcbiAgZjMyOiA0LFxuICBzdHI6IDY0LFxufVxuXG5leHBvcnQgY29uc3QgZGF0YV90eXBlX2ZucyA9IHtcbiAgaTg6ICdVaW50OCcsXG4gIHM4OiAnSW50OCcsXG4gIGkxNjogJ1VpbnQxNicsXG4gIHMxNjogJ0ludDE2JyxcbiAgaTMyOiAnVWludDMyJyxcbiAgczMyOiAnSW50MzInLFxuICBmMzI6ICdGbG9hdDMyJyxcbn1cblxuZXhwb3J0IHZhciBkYXRhX3R5cGVfc2l6ZSA9IHR5cGUgPT4gXy5pc051bWJlcih0eXBlKSA/IHR5cGUgOiBkYXRhX3R5cGVfc2l6ZXNbdHlwZV1cblxuZXhwb3J0IGNsYXNzIE1lbW9yeSB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICB0aGlzLl9zaXplID0gbWFpbi5kZWZhdWx0cygnbWVtb3J5LnNpemUnKVxuICAgIHRoaXMuX3RvcCA9IDBcbiAgICB0aGlzLl9ib3R0b20gPSB0aGlzLl90b3AgKyB0aGlzLl9zaXplIC0gMVxuXG4gICAgdGhpcy5fYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuX3NpemUpXG5cbiAgICB0aGlzLl9kYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fYnVmZmVyKVxuXG4gICAgdGhpcy5fdmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLl9idWZmZXIpXG4gIH1cblxuICB0aWNrICh0KSB7XG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXIoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fdmlldyA9IG51bGxcbiAgICB0aGlzLl9kYXRhID0gbnVsbFxuICAgIHRoaXMuX2J1ZmZlciA9IG51bGxcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuXG4gIGdldCBidWZmZXIgKCkgeyByZXR1cm4gdGhpcy5fYnVmZmVyIH1cbiAgZ2V0IGRhdGEgKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9XG4gIGdldCB2aWV3ICgpIHsgcmV0dXJuIHRoaXMuX3ZpZXcgfVxuXG4gIGdldCB0b3AgKCkgeyByZXR1cm4gdGhpcy5fdG9wIH1cbiAgZ2V0IGJvdHRvbSAoKSB7IHJldHVybiB0aGlzLl9ib3R0b20gfVxuICBnZXQgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9zaXplIH1cblxuICBjbGVhciAoZCA9IDApIHtcbiAgICB0aGlzLmZpbGwoMCwgdGhpcy5fdG9wLCB0aGlzLl9zaXplKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkYiAodHlwZSwgYWRkciwgYXJncykge1xuICAgIGxldCBzeiA9IGRhdGFfdHlwZV9zaXplc1t0eXBlXVxuICAgIGxldCBmbiA9IHRoaXMuX3ZpZXdbJ3NldCcgKyBkYXRhX3R5cGVfZm5zW3R5cGVdXVxuXG4gICAgZm9yIChsZXQgYSBvZiBhcmdzKSB7XG4gICAgICBmbi5jYWxsKHRoaXMuX3ZpZXcsIGFkZHIsIGEpXG4gICAgICBhZGRyICs9IHN6XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZHJcbiAgfVxuXG4gIGxkICh0eXBlLCBhZGRyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdbJ2dldCcgKyBkYXRhX3R5cGVfZm5zW3R5cGVdXShhZGRyLCB0aGlzLl9tYWluLkxFKVxuICB9XG5cbiAgbGRiIChhZGRyKSB7IHJldHVybiB0aGlzLmxkKCdpOCcsIGFkZHIpIH1cblxuICBsZHcgKGFkZHIpIHsgcmV0dXJuIHRoaXMubGQoJ2kxNicsIGFkZHIpIH1cblxuICBsZGQgKGFkZHIpIHsgcmV0dXJuIHRoaXMubGQoJ2kzMicsIGFkZHIpIH1cblxuICBsZGYgKGFkZHIpIHsgcmV0dXJuIHRoaXMubGQoJ2YzMicsIGFkZHIpIH1cblxuICBzdCAodHlwZSwgYWRkciwgdmFsdWUpIHtcbiAgICB0aGlzLl92aWV3WydzZXQnICsgZGF0YV90eXBlX2Zuc1t0eXBlXV0oYWRkciwgdmFsdWUsIHRoaXMuX21haW4uTEUpXG4gIH1cblxuICBzdGIgKGFkZHIsIHZhbHVlKSB7IHRoaXMuc3QoJ2k4JywgYWRkciwgdmFsdWUpIH1cblxuICBzdHcgKGFkZHIsIHZhbHVlKSB7IHRoaXMuc3QoJ2kxNicsIGFkZHIsIHZhbHVlKSB9XG5cbiAgc3RkIChhZGRyLCB2YWx1ZSkgeyB0aGlzLnN0KCdpMzInLCBhZGRyLCB2YWx1ZSkgfVxuXG4gIHN0ZiAoYWRkciwgdmFsdWUpIHsgdGhpcy5zdCgnZjMyJywgYWRkciwgdmFsdWUpIH1cblxuICBsZGwgKGFkZHIsIHNpemUpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YS5zbGljZShhZGRyLCBhZGRyICsgc2l6ZSAtIDEpXG4gIH1cblxuICBsZHMgKGFkZHIsIHNpemUgPSBkYXRhX3R5cGVfc2l6ZXMuc3RyKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgYm90dG9tID0gTWF0aC5taW4oYWRkciArIHNpemUgLSAxLCB0aGlzLl9ib3R0b20pXG4gICAgbGV0IHMgPSAnJ1xuXG4gICAgd2hpbGUgKGFkZHIgPD0gYm90dG9tKSB7XG4gICAgICBsZXQgYyA9IGRhdGFbYWRkcisrXVxuICAgICAgaWYgKGMgPT09IDApIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYylcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc1xuICB9XG5cbiAgc3RsIChhZGRyLCB2YWx1ZSwgc2l6ZSkge1xuICAgIHRoaXMuX2RhdGEuc2V0KHZhbHVlLnN1YmFycmF5KDAsIHNpemUgfHwgdmFsdWUuYnl0ZUxlbmd0aCksIGFkZHIpXG4gIH1cblxuICBzdHMgKGFkZHIsIHN0ciwgc2l6ZSA9IGRhdGFfdHlwZV9zaXplcy5zdHIgLSAxKSB7XG4gICAgbGV0IGEgPSBfLm1hcChzdHIuc3BsaXQoJycpLCBpID0+IGkuY2hhckNvZGVBdCgwKSlcbiAgICBhLmxlbmd0aCA9IE1hdGgubWluKHNpemUsIGEubGVuZ3RoKVxuICAgIHRoaXMuZmlsbCgwLCBhZGRyLCBzaXplKVxuICAgIHRoaXMuX2RhdGEuc2V0KGEsIGFkZHIpXG4gIH1cblxuICBmaWxsICh2YWx1ZSwgdG9wLCBzaXplKSB7XG4gICAgdGhpcy5fZGF0YS5maWxsKHZhbHVlIHx8IDAsIHRvcCwgdG9wICsgc2l6ZSlcbiAgfVxuXG4gIGNvcHkgKHNyYywgdGd0LCBzaXplKSB7XG4gICAgdGhpcy5fZGF0YS5jb3B5V2l0aGluKHRndCwgc3JjLCBzcmMgKyBzaXplIC0gMSlcbiAgfVxuXG4gIHJlYWQgKGFkZHIsIHR5cGUgPSAnaTgnKSB7XG4gICAgbGV0IHZhbHVlXG4gICAgaWYgKF8uaXNOdW1iZXIodHlwZSkpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5fZGF0YS5zbGljZShhZGRyLCBhZGRyICsgdHlwZSAtIDEpXG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzdHInKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubGRzKGFkZHIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFsdWUgPSB0aGlzLmxkKHR5cGUsIGFkZHIpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgd3JpdGUgKHZhbHVlLCBhZGRyLCB0eXBlID0gJ2k4Jykge1xuICAgIGxldCBzelxuICAgIGlmIChfLmlzTnVtYmVyKHR5cGUpKSB7XG4gICAgICB0aGlzLl9kYXRhLnNldCh2YWx1ZS5zdWJhcnJheSgwLCB0eXBlIC0gMSksIGFkZHIpXG4gICAgICBzeiA9IHR5cGVcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cicpIHtcbiAgICAgIHRoaXMuc3RzKGFkZHIsIHZhbHVlKVxuICAgICAgc3ogPSBkYXRhX3R5cGVfc2l6ZXNbdHlwZV1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnN0KHR5cGUsIGFkZHIsIHZhbHVlKVxuICAgICAgc3ogPSBkYXRhX3R5cGVfc2l6ZXNbdHlwZV1cbiAgICB9XG4gICAgcmV0dXJuIGFkZHIgKyBzelxuICB9XG5cbiAgZnJvbV9zdHJpbmcgKGFkZHIsIHN0ciwgbWFzaykge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgbGV0IHcgPSBzdHIubGVuZ3RoXG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHc7IHgrKykge1xuICAgICAgbGV0IGMgPSBzdHJbeF1cbiAgICAgIGRhdGFbYWRkcisrXSA9IG1hc2sgPyBtYXNrW2NdIDogY1xuICAgIH1cblxuICAgIHJldHVybiBhZGRyXG4gIH1cblxuICBmcm9tX2FycmF5IChhZGRyLCBhcnIsIG1hc2spIHtcbiAgICBsZXQgaCA9IGFyci5sZW5ndGhcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XG4gICAgICBpZiAoXy5pc0FycmF5KGFyclt5XSkpIHtcbiAgICAgICAgYWRkciA9IHRoaXMuZnJvbV9hcnJheShhZGRyLCBhcnJbeV0sIG1hc2spXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYWRkciA9IHRoaXMuZnJvbV9zdHJpbmcoYWRkciwgYXJyW3ldLCBtYXNrKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhZGRyXG4gIH1cblxuICBmcm9tXzJkX2FycmF5IChhZGRyLCBmcmFtZSwgY291bnQsIHdpZHRoLCBhcnIsIG1hc2spIHtcbiAgICBsZXQgaCA9IGFyci5sZW5ndGhcbiAgICBsZXQgZnVsbFdpZHRoID0gd2lkdGggKiBjb3VudFxuICAgIGxldCBvZmZzZXQgPSBmcmFtZSAqIHdpZHRoXG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGg7IHkrKykge1xuICAgICAgbGV0IHRpID0gYWRkciArIHkgKiBmdWxsV2lkdGggKyBvZmZzZXRcbiAgICAgIGlmIChfLmlzQXJyYXkoYXJyW3ldKSkge1xuICAgICAgICB0aGlzLmZyb21fMmRfYXJyYXkodGksIGZyYW1lLCBjb3VudCwgd2lkdGgsIGFyclt5XSwgbWFzaylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmZyb21fc3RyaW5nKHRpLCBhcnJbeV0sIG1hc2spXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9fc3RyaW5nIChhZGRyLCBzaXplLCBtYXNrKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgcyA9ICcnXG5cbiAgICBsZXQgdGkgPSBhZGRyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplOyB5KyspIHtcbiAgICAgIGxldCBkID0gZGF0YVt0aSsrXVxuICAgICAgcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG1hc2sgPyBtYXNrW2RdIDogZClcbiAgICB9XG5cbiAgICByZXR1cm4gc1xuICB9XG5cbiAgdG9fYXJyYXkgKGFkZHIsIHcsIGgsIG1hc2spIHtcbiAgICBsZXQgYXJyID0gW11cblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XG4gICAgICBhcnIucHVzaCh0aGlzLnRvX3N0cmluZyhhZGRyICsgeSAqIHcsIHcsIG1hc2spKVxuICAgIH1cblxuICAgIHJldHVybiBhcnJcbiAgfVxuXG4gIGR1bXAgKGFkZHIgPSAwLCBzaXplID0gMTAyNCkge1xuICAgIGNvbnNvbGUubG9nKCdEdW1waW5nJywgc2l6ZSwgJyBieXRlcyBmcm9tIG1lbW9yeSBhdCAnLCBoZXgoYWRkcikpXG4gICAgY29uc29sZS5sb2coaGV4eS5oZXh5KHRoaXMuX2J1ZmZlciwgeyBvZmZzZXQ6IGFkZHIsIGxlbmd0aDogc2l6ZSwgd2lkdGg6IDE2LCBjYXBzOiAndXBwZXInLCBpbmRlbnQ6IDIgfSkpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL21lbW9yeS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhleHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJoZXh5XCJcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBoZXh5IGZyb20gJ2hleHknXG5pbXBvcnQgcHJldHR5Qnl0ZXMgZnJvbSAncHJldHR5LWJ5dGVzJ1xuaW1wb3J0IHsgZGF0YV90eXBlX3NpemUgfSBmcm9tICcuL21lbW9yeS5qcydcbmltcG9ydCB7IHJ1bnRpbWVfZXJyb3IgfSBmcm9tICcuLi9nbG9iYWxzLmpzJ1xuaW1wb3J0IHsgaGV4IH0gZnJvbSAnLi4vdXRpbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbW9yeU1hbmFnZXIge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgdGhpcy5fbWFpbiA9IG1haW5cblxuICAgIHRoaXMuX2NvbGxlY3RfZGVsYXkgPSBtYWluLmRlZmF1bHRzKCdtZW1vcnlfbWFuYWdlci5jb2xsZWN0X2RlbGF5JylcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX2Jsb2NrcyA9IFtdXG4gICAgdGhpcy5fbGFzdCA9IDBcblxuICAgIHJldHVybiB0aGlzLmNvbGxlY3QoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jb2xsZWN0KClcblxuICAgIHRoaXMuX2Jsb2NrcyA9IFtdXG4gICAgdGhpcy5fbGFzdCA9IDBcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBpZiAodCAtIHRoaXMuX2xhc3QgPj0gdGhpcy5fY29sbGVjdF9kZWxheSkge1xuICAgICAgdGhpcy5jb2xsZWN0KClcbiAgICAgIHRoaXMuX2xhc3QgPSB0XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fbWFpbiB9XG4gIGdldCBtZW1vcnkgKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5tZW1vcnkgfVxuXG4gIGdldCBibG9ja3MgKCkgeyByZXR1cm4gdGhpcy5fYmxvY2tzIH1cbiAgZ2V0IGxhc3QgKCkgeyByZXR1cm4gdGhpcy5fbGFzdCB9XG4gIGdldCBjb2xsZWN0X2RlbGF5ICgpIHsgcmV0dXJuIHRoaXMuX2NvbGxlY3RfZGVsYXkgfVxuXG4gIGdldCBhdmFpbF9tZW0gKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5zaXplIH1cblxuICBnZXQgdXNlZF9tZW0gKCkge1xuICAgIGxldCBzaXplID0gMFxuICAgIGZvciAobGV0IGIgb2YgdGhpcy5fYmxvY2tzKSB7XG4gICAgICBpZiAoYi51c2VkKSB7XG4gICAgICAgIHNpemUgKz0gYi5zaXplXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaXplXG4gIH1cblxuICBnZXQgZnJlZV9tZW0gKCkgeyByZXR1cm4gdGhpcy5hdmFpbF9tZW0gLSB0aGlzLnVzZWRfbWVtIH1cblxuICBfYWxsb2MgKHR5cGUsIGNvdW50KSB7XG4gICAgY291bnQgPSBjb3VudCB8fCAxXG4gICAgbGV0IHNpemUgPSBkYXRhX3R5cGVfc2l6ZSh0eXBlKSAqIGNvdW50XG4gICAgbGV0IG4gPSAwXG5cbiAgICBmb3IgKGxldCBiIG9mIHRoaXMuX2Jsb2Nrcykge1xuICAgICAgaWYgKGIuYm90dG9tID4gbikge1xuICAgICAgICBuID0gYi5ib3R0b21cbiAgICAgIH1cblxuICAgICAgaWYgKCFiLnVzZWQgJiYgYi5zaXplID49IHNpemUpIHtcbiAgICAgICAgaWYgKGIuc2l6ZSA9PT0gc2l6ZSkge1xuICAgICAgICAgIGIudXNlZCA9IHRydWVcbiAgICAgICAgICByZXR1cm4gYi50b3BcbiAgICAgICAgfVxuICAgICAgICBsZXQgb2IgPSBiLmJvdHRvbVxuICAgICAgICBiLmJvdHRvbSA9IGIudG9wICsgc2l6ZSAtIDFcbiAgICAgICAgYi5zaXplID0gc2l6ZVxuICAgICAgICBiLmNvdW50ID0gY291bnRcbiAgICAgICAgYi51c2VkID0gdHJ1ZVxuXG4gICAgICAgIHRoaXMuX2Jsb2Nrcy5wdXNoKHsgdG9wOiBiLmJvdHRvbSArIDEsIGJvdHRvbTogb2IsIHNpemU6IG9iIC0gKGIuYm90dG9tICsgMSksIGNvdW50LCB0eXBlLCB1c2VkOiBmYWxzZSB9KVxuXG4gICAgICAgIHJldHVybiBiLnRvcFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuICsgc2l6ZSA+IHRoaXMuYXZhaWxfbWVtKSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDEpXG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIGxldCBhZGRyID0gbiArIDFcblxuICAgIHRoaXMuX2Jsb2Nrcy5wdXNoKHsgdG9wOiBhZGRyLCBib3R0b206IGFkZHIgKyBzaXplIC0gMSwgc2l6ZSwgY291bnQsIHR5cGUsIHVzZWQ6IHRydWUgfSlcblxuICAgIHRoaXMuX21haW4ubWVtb3J5LmZpbGwoMCwgYWRkciwgc2l6ZSlcblxuICAgIHJldHVybiBhZGRyXG4gIH1cblxuICBhbGxvYyAodHlwZSwgY291bnQsIC4uLnZhbHVlKSB7XG4gICAgbGV0IGFkZHIgPSB0aGlzLl9hbGxvYyh0eXBlLCBjb3VudClcbiAgICBjb25zdCBtYWluID0gdGhpcy5fbWFpblxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgc2l6ZSA9IGRhdGFfdHlwZV9zaXplKHR5cGUpICogY291bnRcbiAgICAgIGxldCBhID0gYWRkclxuICAgICAgZm9yIChsZXQgdiBvZiB2YWx1ZSkge1xuICAgICAgICBtYWluLndyaXRlKHYsIGEsIHR5cGUpXG4gICAgICAgIGEgKz0gc2l6ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhZGRyXG4gIH1cblxuICBmcmVlIChhZGRyKSB7XG4gICAgbGV0IGIgPSB0aGlzLmJsb2NrKGFkZHIpXG4gICAgaWYgKGIpIHtcbiAgICAgIGIudXNlZCA9IGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBibG9jayAoYWRkcikge1xuICAgIGZvciAobGV0IGIgb2YgdGhpcy5fYmxvY2tzKSB7XG4gICAgICBpZiAoYi50b3AgPT09IGFkZHIpIHtcbiAgICAgICAgcmV0dXJuIGJcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHR5cGUgKGFkZHIpIHtcbiAgICBsZXQgYiA9IHRoaXMuYmxvY2soYWRkcilcbiAgICByZXR1cm4gYiAmJiBiLnVzZWQgPyBiLnR5cGUgOiBudWxsXG4gIH1cblxuICBzaXplIChhZGRyKSB7XG4gICAgbGV0IGIgPSB0aGlzLmJsb2NrKGFkZHIpXG4gICAgcmV0dXJuIGIgJiYgYi51c2VkID8gYi5zaXplIDogLTFcbiAgfVxuXG4gIGNvbGxlY3QgKCkge1xuICAgIGxldCBuID0gW11cblxuICAgIGZvciAobGV0IGIgb2YgdGhpcy5fYmxvY2tzKSB7XG4gICAgICBpZiAoIWIudXNlZCkge1xuICAgICAgICBuLnB1c2goYilcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9ibG9ja3MgPSBuXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZHVtcCAoKSB7XG4gICAgY29uc29sZS5sb2coJ21lbW9yeSBfYmxvY2tzIGR1bXAuLi4nLCAnYXZhaWxfbWVtOicsIHByZXR0eUJ5dGVzKHRoaXMuYXZhaWxfbWVtKSwgJ3VzZWQ6JywgcHJldHR5Qnl0ZXModGhpcy51c2VkX21lbSksICdmcmVlOicsIHByZXR0eUJ5dGVzKHRoaXMuZnJlZV9tZW0pKVxuICAgIGZvciAobGV0IGIgb2YgdGhpcy5fYmxvY2tzKSB7XG4gICAgICBjb25zb2xlLmxvZygnJylcbiAgICAgIGNvbnNvbGUubG9nKCdvZmZzZXQ6JywgaGV4KGIudG9wLCAzMiksICdzaXplOicsIHRoaXMuc2l6ZShiLnRvcCksICd0eXBlOicsIHRoaXMudHlwZShiLnRvcCkpXG4gICAgICBjb25zb2xlLmxvZyhoZXh5LmhleHkodGhpcy5fbWFpbi5tZW1fYnVmZmVyLCB7IG9mZnNldDogYi50b3AsIGxlbmd0aDogTWF0aC5taW4oMjU1LCBiLnNpemUpLCB3aWR0aDogMTYsIGNhcHM6ICd1cHBlcicsIGluZGVudDogMiB9KSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9tZW1vcnltYW5hZ2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJldHR5LWJ5dGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJldHR5LWJ5dGVzXCJcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGRlZmF1bHRzLCBydW50aW1lX2Vycm9yIH0gZnJvbSAnLi4vZ2xvYmFscy5qcydcbmltcG9ydCB7IGRhdGFfdHlwZV9zaXplIH0gZnJvbSAnLi9tZW1vcnkuanMnXG5cbmNsYXNzIFN0YWNrRW50cnkge1xuXG4gIGNvbnN0cnVjdG9yIChzdGFjaywgb2Zmc2V0ID0gMCwgbWF4ID0gMjU1LCB0eXBlID0gZGVmYXVsdHMudHlwZSwgc2l6ZSwgcm9sbGluZyA9IGZhbHNlKSB7XG4gICAgdGhpcy5fc3RhY2sgPSBzdGFja1xuXG4gICAgdGhpcy5fbWF4ID0gbWF4XG4gICAgdGhpcy5fc2l6ZSA9IHNpemUgfHwgZGF0YV90eXBlX3NpemUodHlwZSlcbiAgICB0aGlzLl90b3AgPSBvZmZzZXRcbiAgICB0aGlzLl9ib3R0b20gPSB0aGlzLl90b3AgKyB0aGlzLl9zaXplIC0gMVxuXG4gICAgdGhpcy5fdHlwZSA9IHR5cGVcblxuICAgIHRoaXMuX3JvbGxpbmcgPSByb2xsaW5nIHx8IGZhbHNlXG5cbiAgICB0aGlzLmxpc3RbdGhpcy5fdG9wXSA9IHRoaXNcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX3B0ciA9IHRoaXMuX3RvcFxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMubGlzdFt0aGlzLl90b3BdID0gdW5kZWZpbmVkXG4gIH1cblxuICBnZXQgbWFpbiAoKSB7IHJldHVybiB0aGlzLl9zdGFjay5tYWluIH1cbiAgZ2V0IHN0YWNrICgpIHsgcmV0dXJuIHRoaXMuX3N0YWNrIH1cbiAgZ2V0IGxpc3QgKCkgeyByZXR1cm4gdGhpcy5fc3RhY2subGlzdCB9XG5cbiAgZ2V0IHRvcCAoKSB7IHJldHVybiB0aGlzLl90b3AgfVxuICBnZXQgYm90dG9tICgpIHsgcmV0dXJuIHRoaXMuX2JvdHRvbSB9XG4gIGdldCBzaXplICgpIHsgcmV0dXJuIHRoaXMuX3NpemUgfVxuXG4gIGdldCBtYXggKCkgeyByZXR1cm4gdGhpcy5fbWF4IH1cbiAgZ2V0IHB0ciAoKSB7IHJldHVybiB0aGlzLl9wdHIgfVxuXG4gIGdldCB0b3RhbF9zaXplICgpIHsgcmV0dXJuIHRoaXMuX21heCAqIHRoaXMuX3NpemUgfVxuICBnZXQgdXNlZCAoKSB7IHJldHVybiBNYXRoLnRydW5jKCh0aGlzLl9wdHIgLSB0aGlzLl90b3ApIC8gdGhpcy5fc2l6ZSkgfVxuICBnZXQgYXZhaWwgKCkgeyByZXR1cm4gdGhpcy50b3RhbF9zaXplIC0gdGhpcy51c2VkIH1cblxuICBwdXNoICguLi52YWx1ZSkge1xuICAgIGNvbnN0IHN6ID0gdGhpcy5fc2l6ZVxuICAgIGNvbnN0IHQgPSB0aGlzLl90eXBlXG4gICAgY29uc3QgdG9wID0gdGhpcy5fdG9wXG4gICAgY29uc3QgYm90dG9tID0gdGhpcy5fYm90dG9tXG4gICAgY29uc3Qgcm9sbGluZyA9IHRoaXMuX3JvbGxpbmdcblxuICAgIGxldCBwdHIgPSB0aGlzLl9wdHJcblxuICAgIGZvciAobGV0IHYgb2YgdmFsdWUpIHtcbiAgICAgIGlmIChyb2xsaW5nICYmIHB0ciA+PSBib3R0b20pIHtcbiAgICAgICAgdGhpcy5jb3B5KHRvcCArIHN6LCB0b3AsIGJvdHRvbSAtIHN6KVxuICAgICAgICBwdHIgLT0gc3pcbiAgICAgIH1cbiAgICAgIGlmIChwdHIgKyBzeiA8IGJvdHRvbSkge1xuICAgICAgICB0aGlzLndyaXRlKHYsIHB0ciwgdClcbiAgICAgICAgcHRyICs9IHN6XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcnVudGltZV9lcnJvcigweDAzKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3B0ciA9IHB0clxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHBvcCAoKSB7XG4gICAgaWYgKHRoaXMuX3B0ciA+IHRoaXMuX3RvcCkge1xuICAgICAgdGhpcy5fcHRyIC09IHRoaXMuX3NpemVcbiAgICAgIHJldHVybiB0aGlzLnJlYWQodGhpcy5fcHRyLCB0aGlzLl90eXBlKVxuICAgIH1cbiAgICBydW50aW1lX2Vycm9yKDB4MDIpXG4gICAgcmV0dXJuIDBcbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhY2sge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgdGhpcy5fbWFpbiA9IG1haW5cblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX2xpc3QgPSB7fVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX2xpc3QgPSB7fVxuICB9XG5cbiAgZ2V0IGxpc3QgKCkgeyByZXR1cm4gdGhpcy5fbGlzdCB9XG5cbiAgbmV3IChvZmZzZXQsIG1heCwgdHlwZSwgc2l6ZSwgcm9sbGluZykge1xuICAgIHJldHVybiAhdGhpcy5fbGlzdFtvZmZzZXRdID8gbmV3IFN0YWNrRW50cnkodGhpcywgLi4uYXJndW1lbnRzKSA6IHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgfVxuXG4gIHB1c2ggKG9mZnNldCwgLi4udmFsdWVzKSB7XG4gICAgbGV0IHMgPSB0aGlzLl9saXN0W29mZnNldF1cbiAgICByZXR1cm4gcyA/IHMucHVzaCguLi52YWx1ZXMpIDogcnVudGltZV9lcnJvcigweDA0KVxuICB9XG5cbiAgcG9wIChvZmZzZXQpIHtcbiAgICBsZXQgcyA9IHRoaXMuX2xpc3Rbb2Zmc2V0XVxuICAgIHJldHVybiBzID8gcy5wb3AoKSA6IHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgfVxuXG4gIHVzZWQgKG9mZnNldCkge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgcmV0dXJuIHMgPyBzLnVzZWQgOiBydW50aW1lX2Vycm9yKDB4MDQpXG4gIH1cblxuICBtYXggKG9mZnNldCkge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgcmV0dXJuIHMgPyBzLm1heCA6IHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgfVxuXG4gIHNpemUgKG9mZnNldCkge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgcmV0dXJuIHMgPyBzLnNpemUgOiBydW50aW1lX2Vycm9yKDB4MDQpXG4gIH1cblxuICB0eXBlIChvZmZzZXQpIHtcbiAgICBsZXQgcyA9IHRoaXMuX2xpc3Rbb2Zmc2V0XVxuICAgIHJldHVybiBzID8gcy50eXBlIDogcnVudGltZV9lcnJvcigweDA0KVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9zdGFjay5qcyIsImltcG9ydCB7IHJ1bnRpbWVfZXJyb3IgfSBmcm9tICcuLi9nbG9iYWxzLmpzJ1xuXG5jb25zdCBfSU5UX1JVTk5JTkcgPSAxXG5jb25zdCBfSU5UX1BBVVNFRCA9IDJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJydXB0IHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHRoaXMuX2xpc3QgPSB7fVxuICAgIHRoaXMuX21haW4gPSBtYWluXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5zdG9wX2FsbCgpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fbWFpbiB9XG4gIGdldCBtZW1vcnkgKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5tZW1vcnkgfVxuXG4gIGZpbmQgKG5hbWUpIHsgcmV0dXJuIHRoaXMuX2xpc3RbbmFtZV0gfVxuXG4gIGNyZWF0ZSAobmFtZSwgZm4sIG1zID0gNTAwKSB7XG4gICAgaWYgKCF0aGlzLmZpbmQobmFtZSkpIHtcbiAgICAgIHRoaXMuX2xpc3RbbmFtZV0gPSB7IG5hbWUsIHN0YXR1czogX0lOVF9SVU5OSU5HLCBtcywgZm4sIGxhc3Q6IDAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNilcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc3VtZSAobmFtZSkge1xuICAgIGlmICh0aGlzLmZpbmQobmFtZSkpIHtcbiAgICAgIHRoaXMuX2xpc3RbbmFtZV0uc3RhdHVzID0gX0lOVF9SVU5OSU5HXG4gICAgICB0aGlzLl9saXN0W25hbWVdLmxhc3QgPSBwZXJmb3JtYW5jZS5ub3coKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHBhdXNlIChuYW1lKSB7XG4gICAgaWYgKHRoaXMuZmluZChuYW1lKSkge1xuICAgICAgdGhpcy5fbGlzdFtuYW1lXS5zdGF0dXMgPSBfSU5UX1BBVVNFRFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0b3AgKG5hbWUpIHtcbiAgICBpZiAodGhpcy5maW5kKG5hbWUpKSB7XG4gICAgICBkZWxldGUgdGhpcy5fbGlzdFtuYW1lXVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0b3BfYWxsICgpIHtcbiAgICBmb3IgKGxldCBrIGluIHRoaXMuX2xpc3QpIHtcbiAgICAgIHRoaXMuc3RvcChrKVxuICAgIH1cbiAgICB0aGlzLl9saXN0ID0ge31cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdGljayAodCkge1xuICAgIGZvciAobGV0IGsgaW4gdGhpcy5fbGlzdCkge1xuICAgICAgbGV0IGkgPSB0aGlzLl9saXN0W2tdXG4gICAgICBpZiAoaS5zdGF0dXMgPT09IF9JTlRfUlVOTklORykge1xuICAgICAgICBsZXQgZGVsYXkgPSB0IC0gaS5sYXN0XG4gICAgICAgIGlmIChkZWxheSA+PSBpLm1zKSB7XG4gICAgICAgICAgaS5mbi5hcHBseSh0aGlzLCBbZGVsYXkgLSBpLm1zXSlcbiAgICAgICAgICBpLmxhc3QgPSB0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2ludGVycnVwdC5qcyIsImltcG9ydCBSYWluYm93IGZyb20gJy4vcmFpbmJvdy5qcydcbmltcG9ydCBGb256byBmcm9tICcuL2ZvbnpvLmpzJ1xuaW1wb3J0IE9yd2VsbCBmcm9tICcuL29yd2VsbC5qcydcbmltcG9ydCBCZWFnbGUgZnJvbSAnLi9iZWFnbGUuanMnXG5pbXBvcnQgVmlvbGV0IGZyb20gJy4vdmlvbGV0LmpzJ1xuaW1wb3J0IHsgT3ZlcmxheXMgfSBmcm9tICcuLi9vdmVybGF5cy5qcydcblxuaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWlkZW8gZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoJ2d1aWRlbycsIFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3NjYWxlJ10pXG5cbiAgICBsZXQgYm9yZGVyU2l6ZSA9IG1haW4uZGVmYXVsdHMoJ2JvcmRlci5zaXplJywgMCkgKiAyXG5cbiAgICB0aGlzLl9yZW5kZXJlciA9IG5ldyBQSVhJLmF1dG9EZXRlY3RSZW5kZXJlcih0aGlzLl93aWR0aCAqIHRoaXMuX3NjYWxlICsgYm9yZGVyU2l6ZSwgdGhpcy5faGVpZ2h0ICogdGhpcy5fc2NhbGUgKyBib3JkZXJTaXplLCB7fSlcbiAgICB0aGlzLl9yZW5kZXJlci52aWV3LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcuc3R5bGUuY3Vyc29yID0gJ25vbmUnXG4gICAgdGhpcy5fcmVuZGVyZXIudmlldy5pZCA9ICdndWlkZW8nXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9yZW5kZXJlci52aWV3KVxuXG4gICAgdGhpcy5fc3RhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKVxuXG4gICAgdGhpcy5fb25SZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbigncmVzaXplJywgdGhpcy5fb25SZXNpemUpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLm9mZigncmVzaXplJywgdGhpcy5fb25SZXNpemUpXG5cbiAgICB0aGlzLl9yYWluYm93LmRlc3Ryb3koKVxuICAgIHRoaXMuX2ZvbnpvLmRlc3Ryb3koKVxuICAgIHRoaXMuX29yd2VsbC5kZXN0cm95KClcbiAgICB0aGlzLl9iZWFnbGUuZGVzdHJveSgpXG4gICAgdGhpcy5fdmlvbGV0LmRlc3Ryb3koKVxuICAgIHRoaXMuX292ZXJsYXlzLmRlc3Ryb3koKVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICBjcmVhdGVDaGlwcyAoKSB7XG4gICAgbGV0IG1haW4gPSB0aGlzLl9tYWluXG5cbiAgICB0aGlzLl9yYWluYm93ID0gbmV3IFJhaW5ib3cobWFpbilcblxuICAgIHRoaXMuX292ZXJsYXlzID0gbmV3IE92ZXJsYXlzKG1haW4sIHtcbiAgICAgIGJvcmRlcjogeyBzaXplOiBtYWluLmRlZmF1bHRzKCdib3JkZXIuc2l6ZScsIDApLCBjb2xvcjogbWFpbi5kZWZhdWx0cygnYm9yZGVyLmNvbG9yJywgMCkgfSxcbiAgICAgIHNjcmVlbjogeyBzY2FsZTogdGhpcy5fc2NhbGUgfSxcbiAgICAgIHNjYW5saW5lczoge30sXG4gICAgICBzY2FubGluZToge30sXG4gICAgICByZ2I6IHt9LFxuICAgICAgbm9pc2VzOiB7fSxcbiAgICAgIGNydDoge30sXG4gICAgICBtb25pdG9yOiB7fSxcbiAgICB9KVxuXG4gICAgdGhpcy5fc2NyZWVuID0gdGhpcy5fb3ZlcmxheXMuc2NyZWVuXG4gICAgdGhpcy5fc2NyZWVuLl9kYXRhID0gdGhpcy5fZGF0YVxuXG4gICAgdGhpcy5fZm9uem8gPSBuZXcgRm9uem8obWFpbilcbiAgICB0aGlzLl9vcndlbGwgPSBuZXcgT3J3ZWxsKG1haW4pXG4gICAgdGhpcy5fYmVhZ2xlID0gbmV3IEJlYWdsZShtYWluKVxuICAgIHRoaXMuX3Zpb2xldCA9IG5ldyBWaW9sZXQobWFpbilcblxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcblxuICAgIHRoaXMuX2ltYWdlRGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICB0aGlzLl9waXhlbHMgPSBuZXcgVWludDMyQXJyYXkodGhpcy5faW1hZ2VEYXRhLmRhdGEuYnVmZmVyKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuXG4gICAgdGhpcy5fZm9yY2VfcmVkcmF3ID0gZmFsc2VcbiAgICB0aGlzLl9mb3JjZV9mbGlwID0gZmFsc2VcblxuICAgIHRoaXMuX3JhaW5ib3cucmVzZXQoKVxuICAgIHRoaXMuX2ZvbnpvLnJlc2V0KClcbiAgICB0aGlzLl9vcndlbGwucmVzZXQoKVxuICAgIHRoaXMuX2JlYWdsZS5yZXNldCgpXG4gICAgdGhpcy5fdmlvbGV0LnJlc2V0KClcbiAgICB0aGlzLl9vdmVybGF5cy5yZXNldCgpXG5cbiAgICB0aGlzLmNsZWFyKClcblxuICAgIHJldHVybiB0aGlzLnJlc2l6ZSgpXG4gIH1cblxuICBnZXQgc2NhbGUgKCkgeyByZXR1cm4gdGhpcy5fc2NhbGUgfVxuICBzZXQgc2NhbGUgKHZhbHVlKSB7XG4gICAgdGhpcy5fc2NhbGUgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IHJhaW5ib3cgKCkgeyByZXR1cm4gdGhpcy5fcmFpbmJvdyB9XG4gIGdldCBmb256byAoKSB7IHJldHVybiB0aGlzLl9mb256byB9XG4gIGdldCBvcndlbGwgKCkgeyByZXR1cm4gdGhpcy5fb3J3ZWxsIH1cbiAgZ2V0IGJlYWdsZSAoKSB7IHJldHVybiB0aGlzLl9iZWFnbGUgfVxuICBnZXQgdmlvbGV0ICgpIHsgcmV0dXJuIHRoaXMuX3Zpb2xldCB9XG5cbiAgZ2V0IG92ZXJsYXlzICgpIHsgcmV0dXJuIHRoaXMuX292ZXJsYXlzIH1cblxuICBnZXQgc3RhZ2UgKCkgeyByZXR1cm4gdGhpcy5fc3RhZ2UgfVxuICBnZXQgcmVuZGVyZXIgKCkgeyByZXR1cm4gdGhpcy5fcmVuZGVyZXIgfVxuXG4gIGdldCBzY3JlZW4gKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuIH1cbiAgZ2V0IHNjcmVlblNwcml0ZSAoKSB7IHJldHVybiB0aGlzLl9zY3JlZW4uc3ByaXRlIH1cbiAgZ2V0IHNwcml0ZXNMYXllciAoKSB7IHJldHVybiB0aGlzLl9zY3JlZW4uc3ByaXRlc0xheWVyIH1cbiAgZ2V0IG1vdXNlTGF5ZXIgKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuLm1vdXNlTGF5ZXIgfVxuICBnZXQgY3Vyc29yTGF5ZXIgKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuLmN1cnNvckxheWVyIH1cblxuICBnZXQgdGV4dHVyZSAoKSB7IHJldHVybiB0aGlzLl9zY3JlZW4udGV4dHVyZSB9XG4gIGdldCBjYW52YXNCdWZmZXIgKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuLmNhbnZhc0J1ZmZlciB9XG4gIGdldCBjYW52YXMgKCkgeyByZXR1cm4gdGhpcy5jYW52YXNCdWZmZXIuY2FudmFzIH1cbiAgZ2V0IGNvbnRleHQgKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuLmNvbnRleHQgfVxuICBnZXQgaW1hZ2VEYXRhICgpIHsgcmV0dXJuIHRoaXMuX2ltYWdlRGF0YSB9XG4gIGdldCBwaXhlbHMgKCkgeyByZXR1cm4gdGhpcy5fcGl4ZWxzIH1cblxuICBnZXQgZm9yY2VfcmVkcmF3ICgpIHsgcmV0dXJuIHRoaXMuX2ZvcmNlX3JlZHJhdyB9XG4gIHNldCBmb3JjZV9yZWRyYXcgKHZhbHVlKSB7IHRoaXMuX2ZvcmNlX3JlZHJhdyA9IHZhbHVlIH1cblxuICBnZXQgZm9yY2VfZmxpcCAoKSB7IHJldHVybiB0aGlzLl9mb3JjZV9mbGlwIH1cbiAgc2V0IGZvcmNlX2ZsaXAgKHZhbHVlKSB7IHRoaXMuX2ZvcmNlX2ZsaXAgPSB2YWx1ZSB9XG5cbiAgdGljayAodCkge1xuICAgIHRoaXMuX3JhaW5ib3cudGljayh0KVxuICAgIHRoaXMuX2ZvbnpvLnRpY2sodClcbiAgICB0aGlzLl9vcndlbGwudGljayh0KVxuICAgIHRoaXMuX2JlYWdsZS50aWNrKHQpXG4gICAgdGhpcy5fdmlvbGV0LnRpY2sodClcbiAgICB0aGlzLl9vdmVybGF5cy50aWNrKHQpXG5cbiAgICBpZiAodGhpcy5fZm9yY2VfcmVkcmF3KSB7XG4gICAgICB0aGlzLnJlZHJhdygpXG4gICAgICB0aGlzLl9mb3JjZV9yZWRyYXcgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJlZHJhdyAoKSB7XG4gICAgaWYgKHRoaXMuX2ZvcmNlX2ZsaXApIHtcbiAgICAgIHRoaXMuX3NjcmVlbi51cGRhdGVUZXh0dXJlKHRoaXMuX2RhdGEsIHRoaXMuX3JhaW5ib3cpXG5cbiAgICAgIHRoaXMuZW1pdCgnZmxpcCcpXG5cbiAgICAgIHRoaXMuX2ZvcmNlX2ZsaXAgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgncmVkcmF3JylcblxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbmRlcih0aGlzLl9zdGFnZSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBjZW50ZXIgKCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcuc3R5bGUubGVmdCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC41IC0gdGhpcy5fcmVuZGVyZXIud2lkdGggKiAwLjUgKyAncHgnXG4gICAgdGhpcy5fcmVuZGVyZXIudmlldy5zdHlsZS50b3AgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjUgLSB0aGlzLl9yZW5kZXJlci5oZWlnaHQgKiAwLjUgKyAncHgnXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc2l6ZSAoKSB7XG4gICAgdGhpcy5fb3ZlcmxheXMucmVzaXplKClcbiAgICB0aGlzLmNlbnRlcigpXG4gICAgdGhpcy50ZXN0KClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcGl4ZWwgKHgsIHksIGMpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuXG4gICAgbGV0IGlcbiAgICBpZiAoXy5pc051bWJlcihjKSkge1xuICAgICAgaSA9IHRoaXMudG9JbmRleCh4LCB5KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGkgPSB4XG4gICAgICBjID0geVxuICAgIH1cblxuICAgIGlmIChkYXRhW2ldICE9PSBjKSB7XG4gICAgICBkYXRhW2ldID0gYyB8fCAwXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFbaV1cbiAgfVxuXG4gIGJsaXQgKGFkZHIsIHgsIHksIHcsIGgsIGZnLCBiZykge1xuICAgIGNvbnN0IG1lbSA9IHRoaXMubWVtb3J5LmRhdGFcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGNvbnN0IHRvcCA9IHRoaXMuX3RvcFxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fd2lkdGhcbiAgICBjb25zdCBjb3VudCA9IHRoaXMucmFpbmJvdy5jb3VudFxuXG4gICAgbGV0IGhhc0ZnID0gIV8uaXNVbmRlZmluZWQoZmcpXG4gICAgbGV0IGhhc0JnID0gIV8uaXNVbmRlZmluZWQoYmcpXG5cbiAgICBmb3IgKGxldCBieSA9IDA7IGJ5IDwgaDsgYnkrKykge1xuICAgICAgbGV0IHRpID0gdG9wICsgKCh5ICsgYnkpICogd2lkdGggKyB4KVxuICAgICAgZm9yIChsZXQgYnggPSAwOyBieCA8IHc7IGJ4KyspIHtcbiAgICAgICAgbGV0IGMgPSBtZW1bYWRkcisrXVxuICAgICAgICBpZiAoYyA8IGNvdW50KSB7IC8vIG5vdCB0cmFuc3BhcmVudFxuICAgICAgICAgIGlmIChoYXNGZykge1xuICAgICAgICAgICAgYyA9IGZnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGMgPSBoYXNCZyA/IGJnIDogZGF0YVt0aV1cbiAgICAgICAgfVxuICAgICAgICBkYXRhW3RpKytdID0gY1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBibGl0X2FycmF5IChhcnIsIHgsIHksIG1hc2spIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGNvbnN0IHRvcCA9IHRoaXMuX3RvcFxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fd2lkdGhcblxuICAgIGxldCB3ID0gXy5maXJzdChhcnIpLmxlbmd0aFxuICAgIGxldCBoID0gYXJyLmxlbmd0aFxuXG4gICAgZm9yIChsZXQgYnkgPSAwOyBieSA8IGg7IGJ5KyspIHtcbiAgICAgIGxldCB0aSA9IHRvcCArICgoYnkgKyB5KSAqIHdpZHRoICsgeClcbiAgICAgIGZvciAobGV0IGJ4ID0gMDsgYnggPCB3OyBieCsrKSB7XG4gICAgICAgIGxldCBhID0gYXJyW2J5XVxuICAgICAgICBkYXRhW3RpKytdID0gbWFzayA/IG1hc2tbYV0gOiBhXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGNvcHlfcmVjdCAoeCwgeSwgdywgaCwgYWRkcikge1xuICAgIGNvbnN0IG1lbSA9IHRoaXMubWVtb3J5LmRhdGFcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGNvbnN0IHRvcCA9IHRoaXMuX3RvcFxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fd2lkdGhcblxuICAgIGZvciAobGV0IGJ5ID0gMDsgYnkgPCBoOyBieSsrKSB7XG4gICAgICBsZXQgc2kgPSB0b3AgKyAoKGJ5ICsgeSkgKiB3aWR0aCArIHgpXG4gICAgICBmb3IgKGxldCBieCA9IDA7IGJ4IDwgdzsgYngrKykge1xuICAgICAgICBtZW1bYWRkcisrXSA9IGRhdGFbc2krK11cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZmlsbHJlY3QgKHgsIHksIHcsIGgsIGNvbG9yKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBjb25zdCB0b3AgPSB0aGlzLl90b3BcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuX3dpZHRoXG5cbiAgICBmb3IgKGxldCBieSA9IDA7IGJ5IDwgaDsgYnkrKykge1xuICAgICAgbGV0IHNpID0gdG9wICsgKChieSArIHkpICogd2lkdGggKyB4KVxuICAgICAgZm9yIChsZXQgYnggPSAwOyBieCA8IHc7IGJ4KyspIHtcbiAgICAgICAgZGF0YVtzaSsrXSA9IGNvbG9yXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRvX2FycmF5ICh4LCB5LCB3LCBoLCBtYXNrKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBjb25zdCB0b3AgPSB0aGlzLl90b3BcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuX3dpZHRoXG5cbiAgICBsZXQgYXJyID0gW11cblxuICAgIGZvciAobGV0IGJ5ID0gMDsgYnkgPCBoOyBieSsrKSB7XG4gICAgICBsZXQgdGkgPSB0b3AgKyAoKGJ5ICsgeSkgKiB3aWR0aCArIHgpXG4gICAgICBsZXQgcyA9ICcnXG4gICAgICBmb3IgKGxldCBieCA9IDA7IGJ4IDwgdzsgYngrKykge1xuICAgICAgICBsZXQgZCA9IGRhdGFbdGkrK11cbiAgICAgICAgcyArPSBtYXNrID8gbWFza1tkXSA6IFN0cmluZy5mcm9tQ2hhckNvZGUoZClcbiAgICAgIH1cbiAgICAgIGFyci5wdXNoKHMpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFyclxuICB9XG5cbiAgdG9JbmRleCAoeCwgeSkgeyByZXR1cm4geSAqIHRoaXMuX3dpZHRoICsgeCB9XG5cbiAgZnJvbUluZGV4IChpKSB7XG4gICAgbGV0IHkgPSBNYXRoLm1pbihNYXRoLnRydW5jKGkgLyB0aGlzLl93aWR0aCksIHRoaXMuX2hlaWdodCAtIDEpXG4gICAgbGV0IHggPSBpIC0geVxuICAgIHJldHVybiB7IHgsIHkgfVxuICB9XG5cbiAgc2Nyb2xsICh4LCB5KSB7XG4gICAgbGV0IGx3ID0geSAqIHRoaXMuX3dpZHRoXG4gICAgbGV0IHMgPSBsd1xuICAgIGxldCBlID0gdGhpcy5fc2l6ZSAtIGx3XG4gICAgdGhpcy5fZGF0YS5jb3B5KHMsIDAsIGUgLSBzKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBsb2FkVGV4dHVyZSAoZmlsZW5hbWUpIHtcbiAgICBsZXQgdGV4ID0gUElYSS5UZXh0dXJlLmZyb21JbWFnZSgnLi9idWlsZC8nICsgcmVxdWlyZSgnZmlsZT9uYW1lPWFzc2V0cy9bbmFtZV0uW2V4dF0hLi4vLi4vLi4vYXNzZXRzL2ltZ3MvJyArIGZpbGVuYW1lKSwgdW5kZWZpbmVkLCBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1QpXG4gICAgdGV4Lm9uKCd1cGRhdGUnLCAoKSA9PiB0aGlzLnVwZGF0ZSgpKVxuICAgIHJldHVybiB0ZXhcbiAgfVxuXG4gIHRlc3QgKCkge1xuICAgIHRoaXMuZ3VpZGVvLmNsZWFyKDEyKVxuXG4gICAgdGhpcy5waXhlbCgxMCwgMTAsIDEzKVxuICAgIHRoaXMucGl4ZWwoMjAsIDEwLCA1KVxuICAgIHRoaXMucGl4ZWwoMzAsIDEwLCA2KVxuXG4gICAgdGhpcy5fZm9uem8udGVzdCgpXG5cbiAgICAvLyBsZXQgc2NyZWVuID0gdGhpcy5fb3ZlcmxheXMuc2NyZWVuLnNwcml0ZVxuICAgIC8vIHNjcmVlbi5yZW1vdmVDaGlsZHJlbigpXG5cbiAgICAvLyBsZXQgdCA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLmxvYWRUZXh0dXJlKCd0ZXN0LnBuZycpKVxuICAgIC8vIHNjcmVlbi5hZGRDaGlsZCh0KVxuXG4gICAgLy8gbGV0IHRleHQgPSBuZXcgUElYSS5UZXh0KCdUaGlzIGlzIGEgcGl4aSB0ZXh0JywgeyBmb250OiAnMjBweCBcIkdsYXNzIFRUWSBWVDIyMFwiJywgZmlsbDogMHhGRkZGRkYgfSlcbiAgICAvLyB0ZXh0LnRleHR1cmUuYmFzZVRleHR1cmUuc2NhbGVNb2RlID0gUElYSS5TQ0FMRV9NT0RFUy5ORUFSRVNUXG4gICAgLy8gdGV4dC5jb250ZXh0LmNhbnZhcy5zdHlsZVsnZm9udC1zbW9vdGhpbmcnXSA9ICduZXZlcidcbiAgICAvLyB0ZXh0LmNvbnRleHQuY2FudmFzLnN0eWxlWyctd2Via2l0LWZvbnQtc21vb3RoaW5nJ10gPSAnbm9uZSdcbiAgICAvLyB0ZXh0LmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2VcbiAgICAvLyB0ZXh0LmNvbnRleHQuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnaGlkZGVuJ1xuICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dC5jb250ZXh0LmNhbnZhcylcbiAgICAvLyB0ZXh0LnVwZGF0ZVRleHQoKVxuICAgIC8vIHNjcmVlbi5hZGRDaGlsZCh0ZXh0KVxuICAgIC8vIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dC5jb250ZXh0LmNhbnZhcylcblxuICAgIHRoaXMudXBkYXRlKHRydWUpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL2d1aWRlby5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuY29uc3QgczMyID0gbmV3IFVpbnQzMkFycmF5KDQpXG5jb25zdCBzOCA9IG5ldyBVaW50OEFycmF5KHMzMi5idWZmZXIpXG5jb25zdCB0MzIgPSBuZXcgVWludDMyQXJyYXkoNClcbmNvbnN0IHQ4ID0gbmV3IFVpbnQ4QXJyYXkodDMyLmJ1ZmZlcilcblxubGV0IHJldmVyc2UgPSB4ID0+IHtcbiAgczMyWzBdID0geFxuICB0OFswXSA9IHM4WzNdXG4gIHQ4WzFdID0gczhbMl1cbiAgdDhbMl0gPSBzOFsxXVxuICB0OFszXSA9IHM4WzBdXG4gIHJldHVybiB0MzJbMF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFpbmJvdyBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgncmFpbmJvdycsIFsnY291bnQnXSlcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcblxuICAgIHRoaXMuX0xFID0gdGhpcy5tYWluLkxFXG5cbiAgICB0aGlzLmNvbG9yKDAsIDB4MDAwMDAwZmYpXG4gICAgdGhpcy5jb2xvcigxLCAweDgwMDAwMGZmKVxuICAgIHRoaXMuY29sb3IoMiwgMHgwMDgwMDBmZilcbiAgICB0aGlzLmNvbG9yKDMsIDB4ODA4MDAwZmYpXG4gICAgdGhpcy5jb2xvcig0LCAweDAwMDA4MGZmKVxuICAgIHRoaXMuY29sb3IoNSwgMHg4MDAwODBmZilcbiAgICB0aGlzLmNvbG9yKDYsIDB4MDA4MDgwZmYpXG4gICAgdGhpcy5jb2xvcig3LCAweGMwYzBjMGZmKVxuICAgIHRoaXMuY29sb3IoOCwgMHg4MDgwODBmZilcbiAgICB0aGlzLmNvbG9yKDksIDB4ZmYwMDAwZmYpXG4gICAgdGhpcy5jb2xvcigxMCwgMHgwMGZmMDBmZilcbiAgICB0aGlzLmNvbG9yKDExLCAweGZmZmYwMGZmKVxuICAgIHRoaXMuY29sb3IoMTIsIDB4MDAwMGZmZmYpXG4gICAgdGhpcy5jb2xvcigxMywgMHhmZjAwZmZmZilcbiAgICB0aGlzLmNvbG9yKDE0LCAweDAwZmZmZmZmKVxuICAgIHRoaXMuY29sb3IoMTUsIDB4ZmZmZmZmZmYpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0IGJsYWNrICgpIHsgcmV0dXJuIDAgfVxuICBnZXQgZGtyZWQgKCkgeyByZXR1cm4gMSB9XG4gIGdldCBka2dyZWVuICgpIHsgcmV0dXJuIDIgfVxuICBnZXQgZGt5ZWxsb3cgKCkgeyByZXR1cm4gMyB9XG4gIGdldCBka2JsdWUgKCkgeyByZXR1cm4gNCB9XG4gIGdldCBka2Z1Y2hzaWEgKCkgeyByZXR1cm4gNSB9XG4gIGdldCB0ZWFsICgpIHsgcmV0dXJuIDYgfVxuICBnZXQgZ3JleSAoKSB7IHJldHVybiA3IH1cbiAgZ2V0IGRrZ3JleSAoKSB7IHJldHVybiA4IH1cbiAgZ2V0IHJlZCAoKSB7IHJldHVybiA5IH1cbiAgZ2V0IGxpbWUgKCkgeyByZXR1cm4gMTAgfVxuICBnZXQgeWVsbG93ICgpIHsgcmV0dXJuIDExIH1cbiAgZ2V0IGJsdWUgKCkgeyByZXR1cm4gMTIgfVxuICBnZXQgZnVjaHNpYSAoKSB7IHJldHVybiAxMyB9XG4gIGdldCBjeWFuICgpIHsgcmV0dXJuIDE0IH1cbiAgZ2V0IHdoaXRlICgpIHsgcmV0dXJuIDE1IH1cblxuICB0b19yZWQgKHJnYmEpIHsgcmV0dXJuIHRoaXMuc3BsaXQocmdiYSkuciB9XG5cbiAgdG9fZ3JlZW4gKHJnYmEpIHsgcmV0dXJuIHRoaXMuc3BsaXQocmdiYSkuZyB9XG5cbiAgdG9fYmx1ZSAocmdiYSkgeyByZXR1cm4gdGhpcy5zcGxpdChyZ2JhKS5iIH1cblxuICB0b19hbHBoYSAocmdiYSkgeyByZXR1cm4gdGhpcy5zcGxpdChyZ2JhKS5hIH1cblxuICBzcGxpdCAocmdiYSkge1xuICAgIGNvbnN0IExFID0gdGhpcy5fTEVcbiAgICByZXR1cm4ge1xuICAgICAgcjogcmdiYSA+PiAoTEUgPyAyNCA6IDApICYgMHhGRixcbiAgICAgIGc6IHJnYmEgPj4gKExFID8gMTYgOiA4KSAmIDB4RkYsXG4gICAgICBiOiByZ2JhID4+IChMRSA/IDggOiAxNikgJiAweEZGLFxuICAgICAgYTogcmdiYSA+PiAoTEUgPyAwIDogMjQpICYgMHhGRixcbiAgICB9XG4gIH1cblxuICByZ2JhIChyLCBnLCBiLCBhKSB7XG4gICAgbGV0IGMgPSBnID8gYSA8PCAyNCB8IHIgPDwgMTYgfCBnIDw8IDggfCBiIDogclxuICAgIHJldHVybiB0aGlzLl9MRSA/IHJldmVyc2UoYykgOiBjXG4gIH1cblxuICBjb2xvciAoYywgciwgZywgYiwgYSkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgaWYgKHIpIHtcbiAgICAgIGRhdGFbY10gPSB0aGlzLnJnYmEociwgZywgYiwgYSlcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFbY11cbiAgfVxuXG4gIGNvbG9yX3JnYiAoYykge1xuICAgIGMgPSB0aGlzLl9kYXRhW2NdXG4gICAgYyA9IHRoaXMuX0xFID8gcmV2ZXJzZShjKSA6IGNcbiAgICByZXR1cm4gYyA+PiA4XG4gIH1cblxuICBmaW5kX2NvbG9yIChyLCBnLCBiLCBhKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgY29sb3IgPSB0aGlzLnJnYmEociwgZywgYiwgYSlcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuX2NvdW50OyBjKyspIHtcbiAgICAgIGlmIChkYXRhW2NdID09PSBjb2xvcikge1xuICAgICAgICByZXR1cm4gY1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTFcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvcmFpbmJvdy5qcyIsImltcG9ydCB7IEVtaXR0ZXIgfSBmcm9tICcuLi8uLi9lbWl0dGVyLmpzJ1xuaW1wb3J0IHsgYXN5bmMgfSBmcm9tICcuLi8uLi91dGlscy5qcydcbmltcG9ydCB7IGRhdGFfdHlwZV9zaXplcywgZGF0YV90eXBlX2ZucyB9IGZyb20gJy4uL21lbW9yeS5qcydcblxudmFyIGN1cnJlbnRPZmZzZXQgPSAwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaXAgZXh0ZW5kcyBFbWl0dGVyIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuX21haW4gPSBtYWluXG5cbiAgICB0aGlzLl93aWR0aCA9IDBcbiAgICB0aGlzLl9oZWlnaHQgPSAwXG5cbiAgICB0aGlzLl9jb3VudCA9IDBcblxuICAgIHRoaXMuX2RhdGEgPSBudWxsXG4gICAgdGhpcy5fZGF0YV9mb3JtYXQgPSBudWxsXG4gICAgdGhpcy5fdG9wID0gMFxuICAgIHRoaXMuX2JvdHRvbSA9IDBcbiAgICB0aGlzLl9zaXplID0gMFxuICAgIHRoaXMuX2NlbGxfc2l6ZSA9IDBcbiAgICB0aGlzLl9kYXRhX3NpemUgPSAwXG4gIH1cblxuICBpbml0IChuYW1lID0gJycsIGtleXMgPSBbXSwgbm9kYXRhID0gZmFsc2UpIHtcbiAgICBsZXQgbWFpbiA9IHRoaXMuX21haW5cblxuICAgIGZvciAobGV0IGsgb2Yga2V5cykge1xuICAgICAgdGhpc1snXycgKyBrXSA9IG1haW4uZGVmYXVsdHMobmFtZSArICcuJyArIGspXG4gICAgfVxuXG4gICAgaWYgKCFub2RhdGEpIHtcbiAgICAgIHRoaXMuX2NvdW50ID0gdGhpcy5fY291bnQgfHwgMVxuICAgICAgdGhpcy5fd2lkdGggPSB0aGlzLl93aWR0aCB8fCAxXG4gICAgICB0aGlzLl9oZWlnaHQgPSB0aGlzLl9oZWlnaHQgfHwgMVxuXG4gICAgICB0aGlzLl9kYXRhX2Zvcm1hdCA9IG1haW4uZGVmYXVsdHMobmFtZSArICcuZGF0YV9mb3JtYXQnKSB8fCAnaTgnXG4gICAgICB0aGlzLl9kYXRhX3NpemUgPSBtYWluLmRlZmF1bHRzKG5hbWUgKyAnLmRhdGFfc2l6ZScpIHx8IDFcbiAgICAgIHRoaXMuX2RhdGFfc2l6ZSA9IF8uaXNTdHJpbmcodGhpcy5fZGF0YV9mb3JtYXQpID8gZGF0YV90eXBlX3NpemVzW3RoaXMuX2RhdGFfZm9ybWF0XSA6IHRoaXMuX2RhdGFfc2l6ZVxuXG4gICAgICB0aGlzLl9jZWxsX3NpemUgPSB0aGlzLl93aWR0aCAqIHRoaXMuX2hlaWdodCAqIHRoaXMuX2RhdGFfc2l6ZVxuXG4gICAgICB0aGlzLl9zaXplID0gdGhpcy5fY2VsbF9zaXplICogdGhpcy5fY291bnRcblxuICAgICAgdGhpcy5fdG9wID0gXy5nZXQobWFpbiwgJ21lbV9tYXAuJyArIG5hbWUgKyAnLnRvcCcsIGN1cnJlbnRPZmZzZXQpXG4gICAgICB0aGlzLl9ib3R0b20gPSB0aGlzLl90b3AgKyB0aGlzLl9zaXplIC0gMVxuXG4gICAgICBfLnNldChtYWluLCAnbWVtX21hcC4nICsgbmFtZSwge1xuICAgICAgICB0b3A6IHRoaXMuX3RvcCxcbiAgICAgICAgYm90dG9tOiB0aGlzLl9ib3R0b20sXG4gICAgICAgIHNpemU6IHRoaXMuX3NpemUsXG4gICAgICAgIGRhdGFfZm9ybWF0OiB0aGlzLl9kYXRhX2Zvcm1hdCxcbiAgICAgICAgZGF0YV9zaXplOiB0aGlzLl9kYXRhX3NpemUsXG4gICAgICAgIGNlbGxfc2l6ZTogdGhpcy5fY2VsbF9zaXplLFxuICAgICAgICBjb3VudDogdGhpcy5fY291bnQsXG4gICAgICB9KVxuXG4gICAgICBjdXJyZW50T2Zmc2V0ID0gdGhpcy5fYm90dG9tICsgMVxuXG4gICAgICB0aGlzLl9kYXRhID0gbmV3IHdpbmRvd1tkYXRhX3R5cGVfZm5zW3RoaXMuX2RhdGFfZm9ybWF0XSArICdBcnJheSddKHRoaXMubWVtb3J5LmJ1ZmZlciwgdGhpcy5fdG9wLCB0aGlzLl9zaXplKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXIoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gIH1cblxuICBnZXQgbWFpbiAoKSB7IHJldHVybiB0aGlzLl9tYWluIH1cbiAgZ2V0IG1lbW9yeSAoKSB7IHJldHVybiB0aGlzLl9tYWluLm1lbW9yeSB9XG5cbiAgZ2V0IGd1aWRlbyAoKSB7IHJldHVybiB0aGlzLl9tYWluLmd1aWRlbyB9XG4gIGdldCByYWluYm93ICgpIHsgcmV0dXJuIHRoaXMuZ3VpZGVvLnJhaW5ib3cgfVxuICBnZXQgZm9uem8gKCkgeyByZXR1cm4gdGhpcy5ndWlkZW8uZm9uem8gfVxuICBnZXQgb3J3ZWxsICgpIHsgcmV0dXJuIHRoaXMuZ3VpZGVvLm9yd2VsbCB9XG4gIGdldCBiZWFnbGUgKCkgeyByZXR1cm4gdGhpcy5vcndlbGwuYmVhZ2xlIH1cbiAgZ2V0IHZpb2xldCAoKSB7IHJldHVybiB0aGlzLmd1aWRlby52aW9sZXQgfVxuXG4gIGdldCBkYXRhICgpIHsgcmV0dXJuIHRoaXMuX2RhdGEgfVxuICBnZXQgdG9wICgpIHsgcmV0dXJuIHRoaXMuX3RvcCB9XG4gIGdldCBib3R0b20gKCkgeyByZXR1cm4gdGhpcy5fYm90dG9tIH1cbiAgZ2V0IHNpemUgKCkgeyByZXR1cm4gdGhpcy5fc2l6ZSB9XG5cbiAgZ2V0IGNvdW50ICgpIHsgcmV0dXJuIHRoaXMuX2NvdW50IH1cbiAgZ2V0IGRhdGFfc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9kYXRhX3NpemUgfVxuICBnZXQgY2VsbF9zaXplICgpIHsgcmV0dXJuIHRoaXMuX2NlbGxfc2l6ZSB9XG5cbiAgZ2V0IHdpZHRoICgpIHsgcmV0dXJuIHRoaXMuX3dpZHRoIH1cbiAgZ2V0IGhlaWdodCAoKSB7IHJldHVybiB0aGlzLl9oZWlnaHQgfVxuXG4gIHVwZGF0ZSAoZmxpcCA9IGZhbHNlKSB7XG4gICAgbGV0IGd1aWRlbyA9IHRoaXMuZ3VpZGVvXG4gICAgZ3VpZGVvLmZvcmNlX3JlZHJhdyA9IHRydWVcbiAgICBndWlkZW8uZm9yY2VfZmxpcCA9IGd1aWRlby5mb3JjZV9mbGlwIHx8IGZsaXBcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdGljayAodCkge1xuICB9XG5cbiAgY2xlYXIgKHYgPSAwKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGEuZmlsbCh2KVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgYXN5bmMgKGZuLCBhcmdzLCBkZWxheSkge1xuICAgIGFzeW5jKHRoaXMsIGZuLCBhcmdzLCBkZWxheSlcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvY2hpcC5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi4vLi4vZ2xvYmFscy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9uem8gZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoJ2ZvbnpvJywgWydjb3VudCcsICd3aWR0aCcsICdoZWlnaHQnXSlcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcblxuICAgIHRoaXMubWVtb3J5LmZyb21fYXJyYXkodGhpcy5fdG9wICsgMzMgKiB0aGlzLl9jZWxsX3NpemUsIFtcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgdyB3ICcsXG4gICAgICAgICcgIHcgdyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyB3d3d3ICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnIHd3d3cgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHd3dyAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyAgdyB3ICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyB3IHcgICcsXG4gICAgICAgICcgd3d3IHcnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyAgd3cgdycsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgdyB3ICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnIHcgdyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgd3d3dyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHd3d3cgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyAgICB3ICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyB3d3d3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgICAgdyAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHd3d3cgJyxcbiAgICAgICAgJyAgICB3ICcsXG4gICAgICAgICcgICAgdyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHd3d3cgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHd3dyAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3d3ICcsXG4gICAgICAgICcgICAgdyAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgd3d3dyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3d3d3ICcsXG4gICAgICAgICcgICAgdyAnLFxuICAgICAgICAnIHd3d3cgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgd3cgICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgdyB3dyAnLFxuICAgICAgICAnIHcgd3cgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgIHd3dyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgd3d3dyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgd3d3ICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgIHd3dyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgd3d3dyAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHd3d3cgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3d3ICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHcgd3cgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3d3d3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3d3cgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnIHcgdyAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgdyAgJyxcbiAgICAgICAgJyB3dyAgICcsXG4gICAgICAgICcgdyB3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgd3d3dyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHcgICB3JyxcbiAgICAgICAgJyB3d3d3dycsXG4gICAgICAgICcgdyB3IHcnLFxuICAgICAgICAnIHcgICB3JyxcbiAgICAgICAgJyB3ICAgdycsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgdyAgIHcnLFxuICAgICAgICAnIHd3ICB3JyxcbiAgICAgICAgJyB3IHcgdycsXG4gICAgICAgICcgdyAgd3cnLFxuICAgICAgICAnIHcgICB3JyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3d3cgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgd3d3d3cnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHcgICB3JyxcbiAgICAgICAgJyB3ICAgdycsXG4gICAgICAgICcgdyAgIHcnLFxuICAgICAgICAnICB3IHcgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgdyAgIHcnLFxuICAgICAgICAnIHcgICB3JyxcbiAgICAgICAgJyB3ICAgdycsXG4gICAgICAgICcgdyB3IHcnLFxuICAgICAgICAnIHd3IHd3JyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3ICAgdycsXG4gICAgICAgICcgIHcgdyAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgdyB3ICcsXG4gICAgICAgICcgdyAgIHcnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHcgICB3JyxcbiAgICAgICAgJyAgdyB3ICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgd3d3dyAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHd3d3cgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHd3dyAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyAgICB3ICcsXG4gICAgICAgICcgICAgdyAnLFxuICAgICAgICAnICB3d3cgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgdyB3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3d3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgICAgdyAnLFxuICAgICAgICAnICB3d3cgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3d3cgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnICB3d3cgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICB3ICcsXG4gICAgICAgICcgIHd3dyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgIHd3dyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgd3d3dyAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyAgd3d3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJ3d3dyAgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnICB3d3cgJyxcbiAgICAgICAgJyAgICB3ICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICB3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyB3IHcgICcsXG4gICAgICAgICcgd3cgICAnLFxuICAgICAgICAnIHcgdyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHcgdyAnLFxuICAgICAgICAnIHcgdyB3JyxcbiAgICAgICAgJyB3ICAgdycsXG4gICAgICAgICcgdyAgIHcnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnICB3d3cgJyxcbiAgICAgICAgJyAgICB3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgd3cgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICB3IHcgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgdyAgJyxcbiAgICAgICAgJyB3dyAgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3ICAgdycsXG4gICAgICAgICcgdyAgIHcnLFxuICAgICAgICAnIHcgdyB3JyxcbiAgICAgICAgJyAgdyB3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3IHcgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICB3IHcgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnICB3d3cgJyxcbiAgICAgICAgJyAgICB3ICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3d3ICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyB3d3d3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICB3dyAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyB3dyAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICAgd3cgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHd3ICAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICB3dyAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyB3dyAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgIF0sIGRlZmF1bHRzLmNoYXJzX21hcClcblxuICAgIHRoaXMudGVzdCgpXG4gIH1cblxuICBkcmF3ICh4LCB5LCBjLCBmZywgYmcpIHtcbiAgICByZXR1cm4gdGhpcy5ndWlkZW8uYmxpdCh0aGlzLl90b3AgKyBjICogdGhpcy5fY2VsbF9zaXplLCB4LCB5LCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCBmZywgYmcpXG4gIH1cblxuICB0ZXN0ICgpIHtcbiAgICAvLyB0aGlzLmRyYXcoNDAsIDQwLCA2NSwgMTAsIDMpXG4gICAgLy8gdGhpcy5kcmF3KDQ3LCA0MCwgNjYsIDEyLCAxNSlcbiAgICAvLyB0aGlzLmRyYXcoNTQsIDQwLCAzMywgNSwgOClcblxuICAgIGxldCBjdyA9IHRoaXMuX3dpZHRoXG4gICAgbGV0IGNoID0gdGhpcy5faGVpZ2h0XG5cbiAgICBsZXQgeHggPSAwXG4gICAgbGV0IHkgPSA0ICogY2hcbiAgICBmb3IgKGxldCB4ID0gMzM7IHggPCA3MzsgeCsrKSB7XG4gICAgICB0aGlzLmRyYXcoeHggKiBjdywgeSwgeCwgXy5yYW5kb20oMiwgMTUpKVxuICAgICAgeHgrK1xuICAgIH1cblxuICAgIHh4ID0gMFxuICAgIHkgPSA1ICogY2hcbiAgICBmb3IgKGxldCB4ID0gNzM7IHggPCAxMTM7IHgrKykge1xuICAgICAgdGhpcy5kcmF3KHh4ICogY3csIHksIHgsIF8ucmFuZG9tKDIsIDE1KSlcbiAgICAgIHh4KytcbiAgICB9XG5cbiAgICB4eCA9IDBcbiAgICB5ID0gNiAqIGNoXG4gICAgZm9yIChsZXQgeCA9IDExMzsgeCA8IDEyNjsgeCsrKSB7XG4gICAgICB0aGlzLmRyYXcoeHggKiBjdywgeSwgeCwgXy5yYW5kb20oMiwgMTUpKVxuICAgICAgeHgrK1xuICAgIH1cblxuICAgIHRoaXMuZHJhdygxMCAqIGN3LCAxMCAqIGNoLCAnQScuY2hhckNvZGVBdCgwKSlcbiAgICB0aGlzLmRyYXcoMTEgKiBjdywgMTAgKiBjaCwgJ2wnLmNoYXJDb2RlQXQoMCkpXG4gICAgdGhpcy5kcmF3KDEyICogY3csIDEwICogY2gsICdhJy5jaGFyQ29kZUF0KDApKVxuICAgIHRoaXMuZHJhdygxMyAqIGN3LCAxMCAqIGNoLCAnaScuY2hhckNvZGVBdCgwKSlcbiAgICB0aGlzLmRyYXcoMTQgKiBjdywgMTAgKiBjaCwgJ24nLmNoYXJDb2RlQXQoMCkpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL2ZvbnpvLmpzIiwiaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcndlbGwgZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoJ29yd2VsbCcsIFsnd2lkdGgnLCAnaGVpZ2h0J10pXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIGNsZWFyIChjaCA9ICcgJywgYmcgPSAwKSB7XG4gICAgdGhpcy5fZGF0YS5maWxsKDB4RkYwMDAwICYgY2guY2hhckNvZGVBdCgwKSB8IDB4MDAwMEZGICYgYmcpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGxldCB3ID0gdGhpcy5fd2lkdGhcbiAgICBsZXQgaCA9IHRoaXMuX2hlaWdodFxuICAgIGxldCBtZW0gPSB0aGlzLl9kYXRhXG4gICAgbGV0IGZvbnpvID0gdGhpcy5mb256b1xuICAgIGxldCBmdyA9IGZvbnpvLndpZHRoXG4gICAgbGV0IGZoID0gZm9uem8uaGVpZ2h0XG5cbiAgICBsZXQgaWR4ID0gMFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XG4gICAgICBsZXQgcHkgPSB5ICogZmhcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdzsgeCsrKSB7XG4gICAgICAgIGxldCBjID0gbWVtW2lkeF1cbiAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICBmb256by5kcmF3KHggKiBmdywgcHksIGMsIG1lbVtpZHggKyAxXSwgbWVtW2lkeCArIDJdKVxuICAgICAgICB9XG4gICAgICAgIGlkeCArPSAzXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd19jaGFyICh4LCB5LCBjLCBmZywgYmcpIHtcbiAgICBsZXQgZm9uem8gPSB0aGlzLmZvbnpvXG4gICAgZm9uem8uZHJhdyh4ICogZm9uem8ud2lkdGgsIHkgKiBmb256by5oZWlnaHQsIGMsIGZnLCBiZylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgaW5kZXggKHgsIHkpIHtcbiAgICByZXR1cm4gKCh5IC0gMSkgKiB0aGlzLl93aWR0aCArICh4IC0gMSkpICogM1xuICB9XG5cbiAgbGluZSAoeSkge1xuICAgIGxldCBsID0gdGhpcy5fd2lkdGggKiAzXG4gICAgcmV0dXJuIHsgc3RhcnQ6IHkgKiBsLCBlbmQ6ICh5ICsgMSkgKiBsIC0gMywgbGVuZ3RoOiBsIH1cbiAgfVxuXG4gIGNoYXJfYXQgKHgsIHkpIHtcbiAgICBsZXQgdGlkeCA9IHRoaXMuaW5kZXgoeCwgeSlcbiAgICBsZXQgbWVtID0gdGhpcy5fZGF0YVxuICAgIHJldHVybiB7IGNoOiBtZW1bdGlkeF0sIGZnOiBtZW1bdGlkeCArIDFdLCBiZzogbWVtW3RpZHggKyAyXSB9XG4gIH1cblxuICBwdXRfY2hhciAoY2gsIGZnLCBiZykge1xuICAgIHN3aXRjaCAoY2guY2hhckNvZGVBdCgwKSkge1xuICAgICAgY2FzZSAxMzpcbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIHJldHVybiB0aGlzLmNyKClcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcmV0dXJuIHRoaXMuYnMoKVxuICAgIH1cblxuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zKClcbiAgICB0aGlzLl9kYXRhLnNldChbY2guY2hhckNvZGVBdCgwKSwgZmcsIGJnXSwgdGhpcy5pbmRleCh4LCB5KSlcblxuICAgIHRoaXMuYmVhZ2xlLngrK1xuICAgIGlmICh0aGlzLmJlYWdsZS54ID4gdGhpcy5fd2lkdGgpIHtcbiAgICAgIHRoaXMuY3IoKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRyYXdfY2hhcih4LCB5LCBjaCwgZmcsIGJnKVxuICB9XG5cbiAgcHJpbnQgKHRleHQsIGZnLCBiZykge1xuICAgIGZvciAobGV0IGMgb2YgdGV4dCkge1xuICAgICAgdGhpcy5wdXRfY2hhcihjLCBmZywgYmcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwb3MgKCkgeyByZXR1cm4geyB4OiB0aGlzLmJlYWdsZS54LCB5OiB0aGlzLmJlYWdsZS55IH0gfVxuXG4gIG1vdmVfdG8gKHgsIHkpIHsgcmV0dXJuIHRoaXMuYmVhZ2xlLm1vdmVfdG8oeCwgeSkgfVxuXG4gIG1vdmVfYnkgKHgsIHkpIHsgcmV0dXJuIHRoaXMuYmVhZ2xlLm1vdmVfYnkoeCwgeSkgfVxuXG4gIGJvbCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8oMSwgdGhpcy5iZWFnbGUueSkgfVxuXG4gIGVvbCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5fd2lkdGgsIHRoaXMuYmVhZ2xlLnkpIH1cblxuICBib3MgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKDEsIDEpIH1cblxuICBlb3MgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpIH1cblxuICBicyAoKSB7IHJldHVybiB0aGlzLmxlZnQoKS5wdXRfY2hhcignICcpLmxlZnQoKSB9XG5cbiAgY3IgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKDEsIHRoaXMuYmVhZ2xlLnkgKyAxKSB9XG5cbiAgbGYgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuYmVhZ2xlLngsIHRoaXMuYmVhZ2xlLnkgKyAxKSB9XG5cbiAgdXAgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuYmVhZ2xlLngsIHRoaXMuYmVhZ2xlLnkgLSAxKSB9XG5cbiAgbGVmdCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5iZWFnbGUueCAtIDEsIHRoaXMuYmVhZ2xlLnkpIH1cblxuICBkb3duICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLmJlYWdsZS54LCB0aGlzLmJlYWdsZS55ICsgMSkgfVxuXG4gIHJpZ2h0ICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLmJlYWdsZS54ICsgMSwgdGhpcy5iZWFnbGUueSkgfVxuXG4gIGNsZWFyX2VvbCAoYmcgPSAwKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MoKVxuICAgIGxldCBzID0gdGhpcy5pbmRleCh4LCB5KVxuICAgIHRoaXMuX2RhdGEuZmlsbCgweDAwMDBGRiAmIGJnLCBzLCB0aGlzLmluZGV4KHRoaXMuX3dpZHRoLCB5KSAtIHMpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNsZWFyX2VvcyAoYmcgPSAwKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MoKVxuICAgIGxldCBzID0gdGhpcy5pbmRleCh4LCB5KVxuICAgIHRoaXMuX2RhdGEuZmlsbCgweDAwMDBGRiAmIGJnLCBzLCB0aGlzLl9zaXplIC0gcylcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY2xlYXJfYm9sIChiZyA9IDApIHtcbiAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcygpXG4gICAgbGV0IHMgPSB0aGlzLmluZGV4KHgsIHkpXG4gICAgdGhpcy5fZGF0YS5maWxsKDB4MDAwMEZGICYgYmcsIHMsIHRoaXMuaW5kZXgoMSwgeSkgLSBzKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjbGVhcl9ib3MgKGJnID0gMCkge1xuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zKClcbiAgICB0aGlzLl9kYXRhLmZpbGwoMHgwMDAwRkYgJiBiZywgMCwgdGhpcy5pbmRleCh4LCB5KSAtIDEpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNvcHlfbGluZSAoc3ksIHR5KSB7XG4gICAgbGV0IHNpID0gdGhpcy5saW5lKHN5KVxuICAgIHRoaXMuX2RhdGEuY29weShzaS5zdGFydCwgdGhpcy5saW5lKHR5KSwgc2kubGVuZ3RoKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjb3B5X2NvbCAoc3gsIHR4KSB7XG4gICAgbGV0IG1lbSA9IHRoaXMuX2RhdGFcbiAgICBzeCAqPSA0XG4gICAgdHggKj0gNFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5faGVpZ2h0OyB5KyspIHtcbiAgICAgIGxldCBpID0gdGhpcy5saW5lKHkpXG4gICAgICBtZW0uY29weShpLnN0YXJ0ICsgc3gsIGkuc3RhcnQgKyB0eCwgMylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGVyYXNlX2xpbmUgKHksIGJnID0gMCkge1xuICAgIGxldCBpID0gdGhpcy5saW5lKHkpXG4gICAgdGhpcy5fZGF0YS5maWxsKDB4MDAwMEZGICYgYmcsIGkuc3RhcnQsIGkubGVuZ3RoKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBlcmFzZV9jb2wgKHgsIGJnID0gMCkge1xuICAgIGxldCBtZW0gPSB0aGlzLl9kYXRhXG4gICAgbGV0IGxzID0gdGhpcy5saW5lKDApLnN0YXJ0ICsgeCAqIDNcbiAgICBsZXQgYyA9IDB4MDAwMEZGICYgYmdcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX2hlaWdodDsgeSsrKSB7XG4gICAgICBtZW0uZmlsbChjLCBscywgMylcbiAgICAgIGxzICs9IHRoaXMuX3dpZHRoICogM1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgc2Nyb2xsIChkeSkge1xuICAgIGlmIChkeSA+IDApIHtcbiAgICAgIGxldCBpID0gdGhpcy5saW5lKGR5ICsgMSlcbiAgICAgIHRoaXMuX2RhdGEuY29weShpLnN0YXJ0LCAwLCB0aGlzLl9zaXplKVxuICAgICAgaSA9IHRoaXMubGluZShkeSlcbiAgICAgIGxldCBzID0gaS5zdGFydFxuICAgICAgdGhpcy5fZGF0YS5maWxsKDAsIHMsIHRoaXMuX3NpemUgLSBzKVxuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgICB9XG4gICAgZWxzZSBpZiAoZHkgPCAwKSB7XG4gICAgICBsZXQgaSA9IHRoaXMubGluZShkeSArIDEpXG4gICAgICB0aGlzLl9kYXRhLmNvcHkoaS5zdGFydCwgMCwgdGhpcy5fc2l6ZSlcbiAgICAgIGkgPSB0aGlzLmxpbmUoZHkpXG4gICAgICBsZXQgcyA9IGkuc3RhcnRcbiAgICAgIHRoaXMuX2RhdGEuZmlsbCgwLCBzLCB0aGlzLl9zaXplIC0gcylcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL29yd2VsbC5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcbmltcG9ydCBDYW52YXNUZXh0dXJlIGZyb20gJy4uL2NhbnZhc3RleHR1cmUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlYWdsZSBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgnYmVhZ2xlJywgWyd3aWR0aCcsICdoZWlnaHQnLCAnYmxpbmtyYXRlJywgJ3Zpc2libGUnXSlcblxuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUgPSBuZXcgQ2FudmFzVGV4dHVyZSgpXG5cbiAgICB0aGlzLl9jb2xvciA9IG1haW4uZGVmYXVsdHMoJ2JlYWdsZS5jb2xvcicsIDE1KVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuXG4gICAgdGhpcy5fbGFzdCA9IDBcblxuICAgIHRoaXMuX3NjcmVlblNwcml0ZSA9IHRoaXMuZ3VpZGVvLnNjcmVlblNwcml0ZVxuICAgIHRoaXMuX3NjYWxlID0gdGhpcy5ndWlkZW8uc2NhbGVcblxuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUuZGVzdHJveSgpXG5cbiAgICB0aGlzLl9jYW52YXNUZXh0dXJlLmNyZWF0ZSh0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuXG4gICAgdGhpcy5fY3Vyc29yTGF5ZXIgPSB0aGlzLl9tYWluLmd1aWRlby5jdXJzb3JMYXllclxuXG4gICAgaWYgKHRoaXMuX3Nwcml0ZSkge1xuICAgICAgdGhpcy5fc3ByaXRlLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fc3ByaXRlID0gbnVsbFxuICAgIH1cblxuICAgIHRoaXMuX2N1cnNvckxheWVyLnJlbW92ZUNoaWxkcmVuKClcblxuICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBQSVhJLkdyYXBoaWNzKClcbiAgICB0aGlzLl9zcHJpdGUudmlzaWJsZSA9IGZhbHNlXG5cbiAgICB0aGlzLl9jdXJzb3JMYXllci5hZGRDaGlsZCh0aGlzLl9zcHJpdGUpXG5cbiAgICB0aGlzLmRyYXcoKVxuXG4gICAgcmV0dXJuIHRoaXMubW92ZV90bygxMywgNilcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLl9zcHJpdGUpIHtcbiAgICAgIHRoaXMuX3Nwcml0ZS5kZXN0cm95KClcbiAgICAgIHRoaXMuX3Nwcml0ZSA9IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLmN1cnNvckxheWVyLnJlbW92ZUNoaWxkcmVuKClcblxuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUuZGVzdHJveSgpXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBpZiAodCAtIHRoaXMuX2xhc3QgPj0gdGhpcy5fYmxpbmtyYXRlKSB7XG4gICAgICB0aGlzLmJsaW5rKClcbiAgICAgIHRoaXMuX2xhc3QgPSB0XG4gICAgfVxuICAgIHN1cGVyLnRpY2sodClcbiAgfVxuXG4gIGdldCB4ICgpIHsgcmV0dXJuIHRoaXMuX3ggfVxuICBzZXQgeCAodmFsdWUpIHsgdGhpcy5feCA9IHZhbHVlIH1cblxuICBnZXQgeSAoKSB7IHJldHVybiB0aGlzLl95IH1cbiAgc2V0IHkgKHZhbHVlKSB7IHRoaXMuX3kgPSB2YWx1ZSB9XG5cbiAgZ2V0IGNvbG9yICgpIHsgcmV0dXJuIHRoaXMuX2NvbG9yIH1cbiAgc2V0IGNvbG9yICh2YWx1ZSkge1xuICAgIHRoaXMuX2NvbG9yID0gdmFsdWVcbiAgICB0aGlzLmRyYXcoKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuX2NvbG9yKVxuICB9XG5cbiAgZ2V0IGN1cnNvckxheWVyICgpIHsgcmV0dXJuIHRoaXMuX2N1cnNvckxheWVyIH1cbiAgZ2V0IHNwcml0ZSAoKSB7IHJldHVybiB0aGlzLl9zcHJpdGUgfVxuXG4gIGdldCBjYW52YXNUZXh0dXJlICgpIHsgcmV0dXJuIHRoaXMuX2NhbnZhc1RleHR1cmUgfVxuXG4gIGJsaW5rICgpIHtcbiAgICBpZiAodGhpcy5fdmlzaWJsZSkge1xuICAgICAgdGhpcy5fc3ByaXRlLnZpc2libGUgPSAhdGhpcy5fc3ByaXRlLnZpc2libGVcbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIG1vdmVfdG8gKHgsIHkpIHtcbiAgICBjb25zdCBvcndlbGwgPSB0aGlzLm9yd2VsbFxuICAgIGNvbnN0IHcgPSBvcndlbGwud2lkdGhcbiAgICBjb25zdCBoID0gb3J3ZWxsLmhlaWdodFxuXG4gICAgaWYgKHggPiB3KSB7XG4gICAgICB4ID0gd1xuICAgIH1cbiAgICBlbHNlIGlmICh4IDwgMCkge1xuICAgICAgeCA9IDBcbiAgICB9XG5cbiAgICBpZiAoeSA+IGgpIHtcbiAgICAgIHkgPSBoXG4gICAgfVxuICAgIGVsc2UgaWYgKHkgPCAwKSB7XG4gICAgICB5ID0gMFxuICAgIH1cblxuICAgIHRoaXMuX3ggPSB4XG4gICAgdGhpcy5feSA9IHlcblxuICAgIHRoaXMuX3Nwcml0ZS54ID0geCAqIHRoaXMuX3dpZHRoXG4gICAgdGhpcy5fc3ByaXRlLnkgPSB5ICogdGhpcy5faGVpZ2h0XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgbW92ZV9ieSAoeCwgeSkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuX3ggKyB4LCB0aGlzLl95ICsgeSkgfVxuXG4gIGRyYXcgKCkge1xuICAgIGxldCBjID0gdGhpcy5ndWlkZW8ucmFpbmJvdy5jb2xvcl9yZ2IodGhpcy5fY29sb3IpXG4gICAgdGhpcy5fc3ByaXRlLmJlZ2luRmlsbChjLCAxKVxuICAgIHRoaXMuX3Nwcml0ZS5kcmF3UmVjdCgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuICAgIHRoaXMuX3Nwcml0ZS5lbmRGaWxsKClcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvYmVhZ2xlLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNUZXh0dXJlIHtcblxuICBjcmVhdGUgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0XG5cbiAgICB0aGlzLl9zaXplID0gd2lkdGggKiBoZWlnaHRcblxuICAgIHRoaXMuX2NhbnZhc0J1ZmZlciA9IG5ldyBQSVhJLkNhbnZhc0J1ZmZlcih3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5fdGV4dHVyZSA9IFBJWEkuVGV4dHVyZS5mcm9tQ2FudmFzKHRoaXMuX2NhbnZhc0J1ZmZlci5jYW52YXMsIFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVClcbiAgICB0aGlzLl90ZXh0dXJlLnNjYWxlTW9kZSA9IFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVFxuXG4gICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhc0J1ZmZlci5jYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7IGFscGhhOiB0cnVlLCBhbnRpYWxpYXM6IGZhbHNlIH0pXG4gICAgdGhpcy5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodClcblxuICAgIHRoaXMuX2ltYWdlRGF0YSA9IHRoaXMuX2NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLl9waXhlbHMgPSBuZXcgVWludDMyQXJyYXkodGhpcy5faW1hZ2VEYXRhLmRhdGEuYnVmZmVyKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuX3RleHR1cmUpIHtcbiAgICAgIHRoaXMuX3RleHR1cmUuZGVzdHJveSgpXG4gICAgICB0aGlzLl90ZXh0dXJlID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jYW52YXNCdWZmZXIpIHtcbiAgICAgIHRoaXMuX2NhbnZhc0J1ZmZlci5kZXN0cm95KClcbiAgICAgIHRoaXMuX2NhbnZhc0J1ZmZlciA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc3ByaXRlKSB7XG4gICAgICB0aGlzLl9zcHJpdGUuZGVzdHJveSgpXG4gICAgICB0aGlzLl9zcHJpdGUgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgZ2V0IHNpemUgKCkgeyByZXR1cm4gdGhpcy5fc2l6ZSB9XG5cbiAgZ2V0IHdpZHRoICgpIHsgcmV0dXJuIHRoaXMuX3dpZHRoIH1cbiAgZ2V0IGhlaWdodCAoKSB7IHJldHVybiB0aGlzLl9oZWlnaHQgfVxuXG4gIGdldCB0ZXh0dXJlICgpIHsgcmV0dXJuIHRoaXMuX3RleHR1cmUgfVxuICBnZXQgY29udGV4dCAoKSB7IHJldHVybiB0aGlzLl9jb250ZXh0IH1cbiAgZ2V0IGNhbnZhc0J1ZmZlciAoKSB7IHJldHVybiB0aGlzLl9jYW52YXNCdWZmZXIgfVxuICBnZXQgY2FudmFzICgpIHsgcmV0dXJuIHRoaXMuX2NhbnZhc0J1ZmZlci5jYW52YXMgfVxuICBnZXQgaW1hZ2VEYXRhICgpIHsgcmV0dXJuIHRoaXMuX2ltYWdlRGF0YSB9XG4gIGdldCBwaXhlbHMgKCkgeyByZXR1cm4gdGhpcy5fcGl4ZWxzIH1cblxuICBnZXQgc3ByaXRlICgpIHtcbiAgICBpZiAoIXRoaXMuX3Nwcml0ZSkge1xuICAgICAgdGhpcy5fc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX3RleHR1cmUpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zcHJpdGVcbiAgfVxuXG4gIHVwZGF0ZVRleHR1cmUgKGRhdGEsIHBhbGV0dGUpIHtcbiAgICBpZiAodGhpcy5fY29udGV4dCkge1xuICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuX3NpemVcbiAgICAgIGNvbnN0IHBpeGVscyA9IHRoaXMuX3BpeGVsc1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBwaXhlbHNbaV0gPSBwYWxldHRlLmNvbG9yKGRhdGFbaV0pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NvbnRleHQucHV0SW1hZ2VEYXRhKHRoaXMuX2ltYWdlRGF0YSwgMCwgMClcblxuICAgICAgdGhpcy5fdGV4dHVyZS51cGRhdGUoKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NhbnZhc3RleHR1cmUuanMiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5pbXBvcnQgQ2FudmFzVGV4dHVyZSBmcm9tICcuLi9jYW52YXN0ZXh0dXJlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaW9sZXQgZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoJ3Zpb2xldCcsIFsnZGF0YV9zaXplJywgJ2NvdW50JywgJ3dpZHRoJywgJ2hlaWdodCddKVxuXG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZSA9IG5ldyBDYW52YXNUZXh0dXJlKClcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcblxuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUuZGVzdHJveSgpXG5cbiAgICB0aGlzLl9jYW52YXNUZXh0dXJlLmNyZWF0ZSh0aGlzLl93aWR0aCAqIHRoaXMuX2NvdW50LCB0aGlzLl9oZWlnaHQpXG5cbiAgICB0aGlzLl9zcHJpdGVzTGF5ZXIgPSB0aGlzLl9tYWluLmd1aWRlby5zcHJpdGVzTGF5ZXJcblxuICAgIHRoaXMuY2xlYXIoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZS5kZXN0cm95KClcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG5cbiAgY2xlYXIgKCkge1xuICAgIGlmICh0aGlzLl9zcHJpdGVzTGF5ZXIpIHtcbiAgICAgIHRoaXMuX3Nwcml0ZXNMYXllci5yZW1vdmVDaGlsZHJlbigpXG4gICAgfVxuXG4gICAgc3VwZXIuY2xlYXIoKVxuXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGdldCBzcHJpdGVzTGF5ZXIgKCkgeyByZXR1cm4gdGhpcy5fc3ByaXRlc0xheWVyIH1cblxuICBnZXQgY2FudmFzVGV4dHVyZSAoKSB7IHJldHVybiB0aGlzLl9jYW52YXNUZXh0dXJlIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUudXBkYXRlVGV4dHVyZSh0aGlzLl9kYXRhLCB0aGlzLnJhaW5ib3cpXG4gIH1cblxuICBmaW5kIChuYW1lKSB7XG4gICAgcmV0dXJuIF8uZmluZCh0aGlzLnNwcml0ZXNMYXllci5jaGlsZHJlbiwgeyBfbmFtZTogbmFtZSB9KVxuICB9XG5cbiAgYWRkIChuYW1lLCBmcmFtZSwgeCwgeSwgeikge1xuICAgIGxldCBzID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX3RleHR1cmUpXG4gICAgcy5fbmFtZSA9IG5hbWVcbiAgICB0aGlzLmZyYW1lKG5hbWUsIGZyYW1lKVxuICAgIHRoaXMuc3ByaXRlc0xheWVyLmFkZENoaWxkKHMpXG4gICAgcmV0dXJuIHNcbiAgfVxuXG4gIGRlbCAobmFtZSkge1xuICAgIGxldCBzID0gdGhpcy5maW5kKG5hbWUpXG4gICAgaWYgKHMpIHtcbiAgICAgIHRoaXMuc3ByaXRlc0xheWVyLnJlbW92ZUNoaWxkKHMpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBmcmFtZVJlY3QgKGZyYW1lKSB7XG4gICAgY29uc3QgdyA9IHRoaXMuX3dpZHRoXG4gICAgY29uc3QgaCA9IHRoaXMuX2hlaWdodFxuICAgIHJldHVybiBuZXcgUElYSS5SZWN0YW5nbGUoZnJhbWUgKiB3LCAwLCBmcmFtZSAqIHcgKyB3LCBoKVxuICB9XG5cbiAgeCAobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgcyA9IHRoaXMuZmluZChuYW1lKVxuICAgIGlmIChzICYmIHZhbHVlKSB7XG4gICAgICBzLnggPSB2YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gcyA/IHMueCA6IDBcbiAgfVxuXG4gIHkgKG5hbWUsIHZhbHVlKSB7XG4gICAgbGV0IHMgPSB0aGlzLmZpbmQobmFtZSlcbiAgICBpZiAocyAmJiB2YWx1ZSkge1xuICAgICAgcy55ID0gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIHMgPyBzLnkgOiAwXG4gIH1cblxuICB6IChuYW1lLCB2YWx1ZSkge1xuICAgIGxldCBzID0gdGhpcy5maW5kKG5hbWUpXG4gICAgaWYgKHMgJiYgdmFsdWUpIHtcbiAgICAgIHMueiA9IHZhbHVlXG4gICAgfVxuICAgIHJldHVybiBzID8gcy56IDogMFxuICB9XG5cbiAgZnJhbWUgKG5hbWUsIHZhbHVlKSB7XG4gICAgbGV0IHMgPSB0aGlzLmZpbmQobmFtZSlcbiAgICBpZiAocyAmJiB2YWx1ZSkge1xuICAgICAgcy5fX2ZyYW1lID0gdmFsdWVcbiAgICAgIHMudGV4dHVyZSA9IG5ldyBQSVhJLlRleHR1cmUodGhpcy5fY2FudmFzVGV4dHVyZS50ZXh0dXJlLCB0aGlzLmZyYW1lUmVjdCh2YWx1ZSkpXG4gICAgfVxuICAgIHJldHVybiBzID8gcy5fX2ZyYW1lIDogMFxuICB9XG5cbiAgbW92ZV90byAobmFtZSwgeCwgeSwgeikge1xuICAgIGxldCBzID0gdGhpcy5maW5kKG5hbWUpXG4gICAgaWYgKHMpIHtcbiAgICAgIHMueCA9IHhcbiAgICAgIHMueSA9IHlcbiAgICAgIGlmICh6KSB7XG4gICAgICAgIHMueiA9IHpcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIG1vdmVfYnkgKG5hbWUsIHgsIHksIHopIHtcbiAgICBsZXQgcyA9IHRoaXMuZmluZChuYW1lKVxuICAgIGlmIChzKSB7XG4gICAgICBzLnggKz0geFxuICAgICAgcy55ICs9IHlcbiAgICAgIGlmICh6KSB7XG4gICAgICAgIHMueiArPSB6XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL3Zpb2xldC5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBDYW52YXNUZXh0dXJlIGZyb20gJy4vY2FudmFzdGV4dHVyZS5qcydcblxuZXhwb3J0IGNsYXNzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuX292ZXJsYXlzID0gb3ZlcmxheXNcblxuICAgIHRoaXMuX3dpZHRoID0gd2lkdGhcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHRcblxuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUgPSBuZXcgQ2FudmFzVGV4dHVyZSgpXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIGNyZWF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzaXplKHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5fc3ByaXRlKSB7XG4gICAgICB0aGlzLl9zcHJpdGUuZGVzdHJveSgpXG4gICAgICB0aGlzLl9zcHJpdGUgPSBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZS5kZXN0cm95KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9sYXN0ID0gMFxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc2l6ZSAod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuX3dpZHRoID0gd2lkdGhcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHRcblxuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUuZGVzdHJveSgpXG5cbiAgICB0aGlzLl9jYW52YXNUZXh0dXJlLmNyZWF0ZSh3aWR0aCwgaGVpZ2h0KVxuXG4gICAgaWYgKHRoaXMuX3Nwcml0ZSkge1xuICAgICAgdGhpcy5fc3ByaXRlLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fc3ByaXRlID0gbnVsbFxuICAgIH1cblxuICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLnRleHR1cmUpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdGljayAodCkge1xuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5ndWlkZW8udXBkYXRlKClcbiAgfVxuXG4gIHVwZGF0ZVRleHR1cmUgKGRhdGEsIHBhbGV0dGUpIHtcbiAgICB0aGlzLl9jYW52YXNUZXh0dXJlLnVwZGF0ZVRleHR1cmUoZGF0YSwgcGFsZXR0ZSlcbiAgICByZXR1cm4gdGhpcy5ndWlkZW8udXBkYXRlKHRydWUpXG4gIH1cblxuICBnZXQgbWFpbiAoKSB7IHJldHVybiB0aGlzLl9vdmVybGF5cy5tYWluIH1cbiAgZ2V0IGd1aWRlbyAoKSB7IHJldHVybiB0aGlzLm1haW4uZ3VpZGVvIH1cbiAgZ2V0IHN0YWdlICgpIHsgcmV0dXJuIHRoaXMubWFpbi5zdGFnZSB9XG4gIGdldCByZW5kZXJlciAoKSB7IHJldHVybiB0aGlzLm1haW4ucmVuZGVyZXIgfVxuXG4gIGdldCBzcHJpdGUgKCkgeyByZXR1cm4gdGhpcy5fc3ByaXRlIH1cblxuICBnZXQgY29udGV4dCAoKSB7IHJldHVybiB0aGlzLl9jYW52YXNUZXh0dXJlLmNvbnRleHQgfVxuICBnZXQgdGV4dHVyZSAoKSB7IHJldHVybiB0aGlzLl9jYW52YXNUZXh0dXJlLnRleHR1cmUgfVxuICBnZXQgaW1hZ2VEYXRhICgpIHsgcmV0dXJuIHRoaXMuX2NhbnZhc1RleHR1cmUuaW1hZ2VEYXRhIH1cbiAgZ2V0IHBpeGVscyAoKSB7IHJldHVybiB0aGlzLl9jYW52YXNUZXh0dXJlLnBpeGVscyB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgQm9yZGVyT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKG92ZXJsYXlzLCB3aWR0aCArIF8uZ2V0KG9wdGlvbnMsICdzaXplJywgMCkgKiAyLCBoZWlnaHQgKyBfLmdldChvcHRpb25zLCAnc2l6ZScsIDApICogMilcblxuICAgIHRoaXMuY3JlYXRlKClcblxuICAgIHRoaXMuX2dyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxuICAgIHRoaXMuX3Nwcml0ZS5hZGRDaGlsZCh0aGlzLl9ncmFwaGljcylcblxuICAgIHRoaXMuY29sb3IgPSBfLmdldChvcHRpb25zLCAnY29sb3InLCAwKVxuICB9XG5cbiAgZ2V0IGNvbG9yICgpIHsgcmV0dXJuIHRoaXMuX2NvbG9yIH1cbiAgc2V0IGNvbG9yICh2YWx1ZSkge1xuICAgIHRoaXMuX2NvbG9yID0gdmFsdWVcbiAgICBsZXQgYyA9IHRoaXMuZ3VpZGVvLnJhaW5ib3cuY29sb3JfcmdiKHRoaXMuX2NvbG9yKVxuICAgIHRoaXMuX2dyYXBoaWNzLmJlZ2luRmlsbChjLCAxKVxuICAgIHRoaXMuX2dyYXBoaWNzLmRyYXdSZWN0KDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gICAgdGhpcy5fZ3JhcGhpY3MuZW5kRmlsbCgpXG4gIH1cblxuICBnZXQgZ3JhcGhpY3MgKCkgeyByZXR1cm4gdGhpcy5fZ3JhcGhpY3MgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIFNjcmVlbk92ZXJsYXkgZXh0ZW5kcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihvdmVybGF5cywgd2lkdGgsIGhlaWdodClcblxuICAgIHRoaXMuY3JlYXRlKClcbiAgfVxuXG4gIGNyZWF0ZSAoKSB7XG4gICAgc3VwZXIuY3JlYXRlKClcblxuICAgIHRoaXMuX3Nwcml0ZS54ID0gdGhpcy5tYWluLmRlZmF1bHRzKCdib3JkZXIuc2l6ZScsIDApXG4gICAgdGhpcy5fc3ByaXRlLnkgPSB0aGlzLm1haW4uZGVmYXVsdHMoJ2JvcmRlci5zaXplJywgMClcblxuICAgIHRoaXMuX2N1cnNvckxheWVyID0gbmV3IFBJWEkuQ29udGFpbmVyKClcbiAgICB0aGlzLl9zcHJpdGUuYWRkQ2hpbGQodGhpcy5fY3Vyc29yTGF5ZXIpXG5cbiAgICB0aGlzLl9zcHJpdGVzTGF5ZXIgPSBuZXcgUElYSS5Db250YWluZXIoKVxuICAgIHRoaXMuX3Nwcml0ZS5hZGRDaGlsZCh0aGlzLl9zcHJpdGVzTGF5ZXIpXG5cbiAgICB0aGlzLl9tb3VzZUxheWVyID0gbmV3IFBJWEkuQ29udGFpbmVyKClcbiAgICB0aGlzLl9zcHJpdGUuYWRkQ2hpbGQodGhpcy5fbW91c2VMYXllcilcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9kYXRhID0gbnVsbFxuICAgIHRoaXMuX3BhbGV0dGUgPSBudWxsXG5cbiAgICByZXR1cm4gc3VwZXIucmVzZXQoKVxuICB9XG5cbiAgZ2V0IHNwcml0ZXNMYXllciAoKSB7IHJldHVybiB0aGlzLl9zcHJpdGVzTGF5ZXIgfVxuICBnZXQgbW91c2VMYXllciAoKSB7IHJldHVybiB0aGlzLl9tb3VzZUxheWVyIH1cbiAgZ2V0IGN1cnNvckxheWVyICgpIHsgcmV0dXJuIHRoaXMuX2N1cnNvckxheWVyIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMudXBkYXRlVGV4dHVyZSh0aGlzLl9kYXRhLCB0aGlzLl9wYWxldHRlKVxuICAgIHJldHVybiB0aGlzLmd1aWRlby51cGRhdGUodHJ1ZSlcbiAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIFNjYW5saW5lc092ZXJsYXkgZXh0ZW5kcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihvdmVybGF5cywgd2lkdGgsIGhlaWdodClcblxuICAgIHRoaXMuX2dhcCA9IF8uZ2V0KG9wdGlvbnMsICdnYXAnLCA0KVxuICAgIHRoaXMuX2FscGhhID0gXy5nZXQob3B0aW9ucywgJ2FscGhhJywgMC4zNSlcblxuICAgIHRoaXMuY3JlYXRlKClcblxuICAgIGxldCBhID0gdGhpcy5fYWxwaGEgKiAyNTVcbiAgICBsZXQgZGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICBsZXQgcGl4ZWxzID0gZGF0YS5kYXRhXG4gICAgbGV0IHN6ID0gdGhpcy5fd2lkdGggKiA0XG4gICAgbGV0IGlkeFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5faGVpZ2h0OyB5ICs9IHRoaXMuX2dhcCkge1xuICAgICAgaWR4ID0geSAqIHN6XG4gICAgICBmb3IgKGxldCBpID0gaWR4OyBpIDwgaWR4ICsgc3o7IGkgKz0gNCkge1xuICAgICAgICBwaXhlbHMuc2V0KFswLCAwLCAwLCBhXSwgaSlcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgU2NhbmxpbmVPdmVybGF5IGV4dGVuZHMgT3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IgKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLl9yYXRlID0gXy5nZXQob3B0aW9ucywgJ3JhdGUnLCA1MClcbiAgICB0aGlzLl9zcGVlZCA9IF8uZ2V0KG9wdGlvbnMsICdzcGVlZCcsIDI2KVxuICAgIHRoaXMuX2FscGhhID0gXy5nZXQob3B0aW9ucywgJ2FscGhhJywgMC4xKVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuXG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gICAgbGV0IHBpeGVscyA9IGRhdGEuZGF0YVxuICAgIGxldCBzeiA9IHRoaXMuX3dpZHRoICogNFxuICAgIGxldCBsZW4gPSB0aGlzLl9oZWlnaHQgKiBzelxuICAgIGxldCBsID0gMFxuICAgIGxldCBoID0gdGhpcy5faGVpZ2h0XG4gICAgbGV0IGEgPSB0aGlzLl9hbHBoYSAqIDI1NVxuICAgIGxldCBhYVxuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBsZW47IHkgKz0gc3opIHtcbiAgICAgIGFhID0gbCAvIGggKiBhXG4gICAgICBmb3IgKGxldCB4ID0geTsgeCA8IHkgKyBzejsgeCArPSA0KSB7XG4gICAgICAgIHBpeGVscy5zZXQoWzUwLCA1MCwgNTAsIGFhXSwgeClcbiAgICAgIH1cbiAgICAgIGwrK1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMClcblxuICAgIHRoaXMuX3Nwcml0ZS55ID0gLXRoaXMuX3Nwcml0ZS5oZWlnaHRcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBpZiAodCAtIHRoaXMuX2xhc3QgPj0gdGhpcy5fcmF0ZSkge1xuICAgICAgdGhpcy5zcHJpdGUueSArPSB0aGlzLl9zcGVlZFxuICAgICAgaWYgKHRoaXMuX3Nwcml0ZS55ID4gdGhpcy5faGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuX3Nwcml0ZS55ID0gLXRoaXMuX3Nwcml0ZS5oZWlnaHRcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3QgPSB0XG5cbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9XG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBOb2lzZXNPdmVybGF5IGV4dGVuZHMgT3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IgKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLl9yYXRlID0gXy5nZXQob3B0aW9ucywgJ3JhdGUnLCAyNTApXG4gICAgdGhpcy5fY291bnQgPSBfLmdldChvcHRpb25zLCAnY291bnQnLCA4KVxuICAgIHRoaXMuX3JhdGUgPSBfLmdldChvcHRpb25zLCAncmF0ZScsIDAuODUpXG4gICAgdGhpcy5fcmVkID0gXy5nZXQob3B0aW9ucywgJ3JlZCcsIDEwMClcbiAgICB0aGlzLl9ncmVlbiA9IF8uZ2V0KG9wdGlvbnMsICdncmVlbicsIDEwMClcbiAgICB0aGlzLl9ibHVlID0gXy5nZXQob3B0aW9ucywgJ2JsdWUnLCAxMDApXG4gICAgdGhpcy5fYWxwaGEgPSBfLmdldChvcHRpb25zLCAnYWxwaGEnLCAwLjE1KVxuXG4gICAgdGhpcy5fbm9pc2VzID0ge31cblxuICAgIGxldCBhID0gdGhpcy5fYWxwaGEgKiAyNTVcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuX2NvdW50OyBjKyspIHtcbiAgICAgIGxldCBub2lzZSA9IG5ldyBPdmVybGF5KG92ZXJsYXlzLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuICAgICAgbm9pc2UuY3JlYXRlKClcbiAgICAgIG5vaXNlLl9zcHJpdGUudmlzaWJsZSA9IGMgPT09IDBcblxuICAgICAgbGV0IGRhdGEgPSBub2lzZS5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuICAgICAgbGV0IHBpeGVscyA9IGRhdGEuZGF0YVxuICAgICAgbGV0IGxlbiA9IHBpeGVscy5sZW5ndGhcbiAgICAgIGxldCByID0gdGhpcy5fcmVkXG4gICAgICBsZXQgZyA9IHRoaXMuX2dyZWVuXG4gICAgICBsZXQgYiA9IHRoaXMuX2JsdWVcbiAgICAgIGxldCBfcmF0ZSA9IHRoaXMuX3JhdGVcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPj0gX3JhdGUpIHtcbiAgICAgICAgICBwaXhlbHMuc2V0KFtNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiByKSwgTWF0aC50cnVuYyhNYXRoLnJhbmRvbSgpICogZyksIE1hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIGIpLCBhXSwgaSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbm9pc2UuY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMClcbiAgICAgIHRoaXMuX25vaXNlc1tjXSA9IG5vaXNlXG4gICAgICB0aGlzLnN0YWdlLmFkZENoaWxkKG5vaXNlLnNwcml0ZSlcbiAgICB9XG5cbiAgICB0aGlzLl9ub2lzZUtleXMgPSBfLmtleXModGhpcy5fbm9pc2VzKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpXG5cbiAgICBmb3IgKGxldCBrIGluIHRoaXMuX25vaXNlcykge1xuICAgICAgbGV0IG5vaXNlID0gdGhpcy5fbm9pc2VzW2tdXG4gICAgICBub2lzZS5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9ub2lzZXMgPSB7fVxuICAgIHRoaXMuX25vaXNlS2V5cyA9IFtdXG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgaWYgKHQgLSB0aGlzLl9sYXN0ID49IHRoaXMuX3JhdGUpIHtcbiAgICAgIGZvciAobGV0IGsgb2YgdGhpcy5fbm9pc2VLZXlzKSB7XG4gICAgICAgIHRoaXMuX25vaXNlc1trXS5zcHJpdGUudmlzaWJsZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGxldCBub2lzZSA9IHRoaXMuX25vaXNlS2V5c1tNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9ub2lzZUtleXMubGVuZ3RoKV1cbiAgICAgIHRoaXMuX25vaXNlc1tub2lzZV0uc3ByaXRlLnZpc2libGUgPSB0cnVlXG5cbiAgICAgIHRoaXMuX2xhc3QgPSB0XG5cbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9XG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBSZ2JPdmVybGF5IGV4dGVuZHMgT3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IgKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLl9hbHBoYSA9IF8uZ2V0KG9wdGlvbnMsICdhbHBoYScsIDAuMDc1KVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuXG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gICAgbGV0IHBpeGVscyA9IGRhdGEuZGF0YVxuICAgIGxldCBsZW4gPSBwaXhlbHMubGVuZ3RoXG4gICAgbGV0IGEgPSB0aGlzLl9hbHBoYSAqIDI1NVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEyKSB7XG4gICAgICBwaXhlbHMuc2V0KFsxMDAsIDEwMCwgMTAwLCBhXSwgaSlcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgQ3J0T3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5fcmFkaXVzID0gXy5nZXQob3B0aW9ucywgJ3JhZGl1cycsIDAuMjUpXG4gICAgdGhpcy5faW5zaWRlX2FscGhhID0gXy5nZXQob3B0aW9ucywgJ2luc2lkZV9hbHBoYScsIDAuMilcbiAgICB0aGlzLl9vdXRzaWRlX2FscGhhID0gXy5nZXQob3B0aW9ucywgJ291dHNpZGVfYWxwaGEnLCAwLjE1KVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuXG4gICAgdGhpcy5jb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkYXJrZXInXG4gICAgbGV0IGdyYWRpZW50ID0gdGhpcy5jb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHRoaXMuX3dpZHRoIC8gMiwgdGhpcy5faGVpZ2h0IC8gMiwgdGhpcy5faGVpZ2h0IC8gMiwgdGhpcy5fd2lkdGggLyAyLCB0aGlzLl9oZWlnaHQgLyAyLCB0aGlzLl9oZWlnaHQgLyB0aGlzLl9yYWRpdXMpXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwgMjU1LCAyNTUsICcgKyB0aGlzLl9pbnNpZGVfYWxwaGEgKyAnKScpXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDAsIDAsIDAsICcgKyB0aGlzLl9vdXRzaWRlX2FscGhhICsgJyknKVxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudFxuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuICAgIHRoaXMuY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInXG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBPdmVybGF5cyB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4sIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX21haW4gPSBtYWluXG5cbiAgICBsZXQgc3RhZ2UgPSBtYWluLnN0YWdlXG4gICAgbGV0IHJlbmRlcmVyID0gbWFpbi5yZW5kZXJlclxuXG4gICAgbGV0IHdpZHRoID0gcmVuZGVyZXIud2lkdGhcbiAgICBsZXQgaGVpZ2h0ID0gcmVuZGVyZXIuaGVpZ2h0XG5cbiAgICB0aGlzLl9saXN0ID0ge31cbiAgICBsZXQgbCA9IHRoaXMuX2xpc3RcblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVPdmVybGF5IChjdHgsIENscywgbmFtZSwgZGVmYXVsdHMgPSB7fSkge1xuICAgICAgbGV0IG8gPSBfLmRlZmF1bHRzRGVlcCh7fSwgb3B0aW9ucywgeyBbbmFtZV06IGRlZmF1bHRzIH0pXG4gICAgICBsZXQgcyA9IF8uZ2V0KG9bbmFtZV0sICdzY2FsZScsIDEpXG4gICAgICBsW25hbWVdID0gbmV3IENscyhjdHgsIF8uZ2V0KG9bbmFtZV0sICd3aWR0aCcsIDApLCBfLmdldChvW25hbWVdLCAnaGVpZ2h0JywgMCksIG9bbmFtZV0pXG4gICAgICBsW25hbWVdLnNwcml0ZS5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KHMsIHMpXG4gICAgICBzdGFnZS5hZGRDaGlsZChsW25hbWVdLnNwcml0ZSlcbiAgICAgIHJldHVybiBsW25hbWVdXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdib3JkZXInKSkge1xuICAgICAgX2NyZWF0ZU92ZXJsYXkodGhpcywgQm9yZGVyT3ZlcmxheSwgJ2JvcmRlcicsIHsgd2lkdGgsIGhlaWdodCB9KVxuICAgIH1cblxuICAgIGlmIChfLmdldChvcHRpb25zLCAnc2NyZWVuJykpIHtcbiAgICAgIF9jcmVhdGVPdmVybGF5KHRoaXMsIFNjcmVlbk92ZXJsYXksICdzY3JlZW4nLCB7IHdpZHRoOiB0aGlzLmd1aWRlby53aWR0aCwgaGVpZ2h0OiB0aGlzLmd1aWRlby5oZWlnaHQgfSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ3NjYW5saW5lcycpKSB7XG4gICAgICBfY3JlYXRlT3ZlcmxheSh0aGlzLCBTY2FubGluZXNPdmVybGF5LCAnc2NhbmxpbmVzJywgeyB3aWR0aCwgaGVpZ2h0IH0pXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdzY2FubGluZScpKSB7XG4gICAgICBfY3JlYXRlT3ZlcmxheSh0aGlzLCBTY2FubGluZU92ZXJsYXksICdzY2FubGluZScsIHsgd2lkdGgsIGhlaWdodCB9KVxuICAgIH1cblxuICAgIGlmIChfLmdldChvcHRpb25zLCAncmdiJykpIHtcbiAgICAgIF9jcmVhdGVPdmVybGF5KHRoaXMsIFJnYk92ZXJsYXksICdyZ2InLCB7IHdpZHRoLCBoZWlnaHQgfSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ25vaXNlcycpKSB7XG4gICAgICBsZXQgdyA9IF8uZ2V0KG9wdGlvbnMsICdub2lzZXMud2lkdGgnLCB3aWR0aClcbiAgICAgIGxldCBoID0gXy5nZXQob3B0aW9ucywgJ25vaXNlcy5oZWlnaHQnLCBoZWlnaHQpXG4gICAgICBsLm5vaXNlcyA9IG5ldyBOb2lzZXNPdmVybGF5KHRoaXMsIHcsIGgsIF8uZ2V0KG9wdGlvbnMsICdub2lzZXMnKSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ2NydCcpKSB7XG4gICAgICBfY3JlYXRlT3ZlcmxheSh0aGlzLCBDcnRPdmVybGF5LCAnY3J0JywgeyB3aWR0aCwgaGVpZ2h0IH0pXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdtb25pdG9yJykpIHtcbiAgICAgIGxldCB3ID0gXy5nZXQob3B0aW9ucywgJ21vbml0b3Iud2lkdGgnLCB3aWR0aClcbiAgICAgIGxldCBoID0gXy5nZXQob3B0aW9ucywgJ21vbml0b3IuaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgbGV0IHMgPSBfLmdldChvcHRpb25zLCAnbW9uaXRvci5zY2FsZScsIDEpXG5cbiAgICAgIGxldCB0ZXggPSBQSVhJLlRleHR1cmUuZnJvbUltYWdlKCcuL2J1aWxkLycgKyByZXF1aXJlKCdmaWxlP25hbWU9YXNzZXRzL1twYXRoXS9bbmFtZV0uW2V4dF0hLi4vLi4vYXNzZXRzL2ltZ3MvY3J0LnBuZycpKVxuICAgICAgbC5tb25pdG9yID0gbmV3IFBJWEkuU3ByaXRlKHRleClcbiAgICAgIGwubW9uaXRvci54ID0gMFxuICAgICAgbC5tb25pdG9yLnkgPSAwXG4gICAgICBsLm1vbml0b3Iud2lkdGggPSB3XG4gICAgICBsLm1vbml0b3IuaGVpZ2h0ID0gaFxuICAgICAgbC5tb25pdG9yLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQocywgcylcbiAgICAgIHN0YWdlLmFkZENoaWxkKGwubW9uaXRvcilcbiAgICB9XG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgY29uc3QgbCA9IHRoaXMuX2xpc3RcbiAgICBmb3IgKGxldCBrIGluIGwpIHtcbiAgICAgIGlmIChsW2tdLnRpY2spIHtcbiAgICAgICAgbFtrXS50aWNrKHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIGNvbnN0IGwgPSB0aGlzLl9saXN0XG4gICAgZm9yIChsZXQgayBpbiBsKSB7XG4gICAgICBpZiAobFtrXS5yZXNldCkge1xuICAgICAgICBsW2tdLnJlc2V0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBjb25zdCBsID0gdGhpcy5fbGlzdFxuICAgIGZvciAobGV0IGsgaW4gbCkge1xuICAgICAgaWYgKGxba10uZGVzdHJveSkge1xuICAgICAgICBsW2tdLmRlc3Ryb3koKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuICBnZXQgZ3VpZGVvICgpIHsgcmV0dXJuIHRoaXMuX21haW4uZ3VpZGVvIH1cbiAgZ2V0IHN0YWdlICgpIHsgcmV0dXJuIHRoaXMuX21haW4uc3RhZ2UgfVxuICBnZXQgcmVuZGVyZXIgKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5yZW5kZXJlciB9XG4gIGdldCBzY3JlZW4gKCkgeyByZXR1cm4gdGhpcy5fbGlzdC5zY3JlZW4gfVxuXG4gIHJlc2l6ZSAoKSB7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL292ZXJsYXlzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2Fzc2V0cy9pbWdzLy9jcnQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpbGUtbG9hZGVyP25hbWU9YXNzZXRzL1twYXRoXS9bbmFtZV0uW2V4dF0hLi9hc3NldHMvaW1ncy9jcnQucG5nXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY3J0LnBuZ1wiOiA3OCxcblx0XCIuL3Rlc3QucG5nXCI6IDc5XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDc3O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvaW1ncyAuL34vZmlsZS1sb2FkZXI/bmFtZT1hc3NldHMvW25hbWVdLltleHRdIV5cXC5cXC8uKiRcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9jcnQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpbGUtbG9hZGVyP25hbWU9YXNzZXRzL1tuYW1lXS5bZXh0XSEuL2Fzc2V0cy9pbWdzL2NydC5wbmdcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy90ZXN0LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9maWxlLWxvYWRlcj9uYW1lPWFzc2V0cy9bbmFtZV0uW2V4dF0hLi9hc3NldHMvaW1ncy90ZXN0LnBuZ1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZW4gZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoJ2tlbicsIFsnY291bnQnXSlcblxuICAgIHRoaXMuX29uS2V5ZG93biA9IHRoaXMub25LZXlkb3duLmJpbmQodGhpcylcbiAgICB0aGlzLl9vbktleXVwID0gdGhpcy5vbktleXVwLmJpbmQodGhpcylcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5dXApXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBzdXBlci5yZXNldCgpXG5cbiAgICB0aGlzLl9tb2RzID0gMFxuICAgIHRoaXMuX2pveXN0aWNrID0gMFxuICAgIHRoaXMuX2tleXMgPSB7fVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5dXApXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxuXG4gIGdldCBtb2RzICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgfVxuICBnZXQgam95c3RpY2sgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgfVxuICBnZXQga2V5cyAoKSB7IHJldHVybiB0aGlzLl9rZXlzIH1cblxuICBnZXQgc2hpZnQgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyAmIDB4MDEgfVxuICBnZXQgY3RybCAoKSB7IHJldHVybiB0aGlzLl9tb2RzICYgMHgwMiB9XG4gIGdldCBhbHQgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyAmIDB4MDQgfVxuICBnZXQgbWV0YSAoKSB7IHJldHVybiB0aGlzLl9tb2RzICYgMHgwOCB9XG4gIGdldCBudW1wYWQgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyAmIDB4MTAgfVxuICBnZXQgYnRuMCAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MTAgfVxuICBnZXQgYnRuMSAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MjAgfVxuICBnZXQgYnRuMiAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4NDAgfVxuICBnZXQgYnRuMyAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4ODAgfVxuICBnZXQgYnRuNCAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MTAwIH1cbiAgZ2V0IHVwICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHgwMSB9XG4gIGdldCBkb3duICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHgwMiB9XG4gIGdldCByaWdodCAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MDQgfVxuICBnZXQgbGVmdCAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MDggfVxuXG4gIGV2ZW50RGV0YWlscyAoZSkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IGUua2V5LFxuICAgICAga2V5Q29kZTogZS5rZXlDb2RlLFxuICAgICAga2V5czogdGhpcy5fa2V5cyxcbiAgICAgIG1vZHM6IHRoaXMuX21vZHMsXG4gICAgICBqb3lzdGljazogdGhpcy5fam95c3RpY2ssXG4gICAgICBzaGlmdDogdGhpcy5zaGlmdCxcbiAgICAgIGN0cmw6IHRoaXMuY3RybCxcbiAgICAgIGFsdDogdGhpcy5hbHQsXG4gICAgICBtZXRhOiB0aGlzLm1ldGEsXG4gICAgICBudW1wYWQ6IHRoaXMubnVtcGFkLFxuICAgICAgYnRuMDogdGhpcy5idG4wLFxuICAgICAgYnRuMTogdGhpcy5idG4xLFxuICAgICAgYnRuMjogdGhpcy5idG4yLFxuICAgICAgYnRuMzogdGhpcy5idG4zLFxuICAgICAgYnRuNDogdGhpcy5idG40LFxuICAgICAgdXA6IHRoaXMudXAsXG4gICAgICBkb3duOiB0aGlzLmRvd24sXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICB9XG4gIH1cblxuICBvbktleWRvd24gKGUpIHtcbiAgICBsZXQgbnVtcGFkID0gZS5sb2NhdGlvbiA9PT0gM1xuICAgIGlmIChudW1wYWQpIHtcbiAgICAgIHRoaXMuX21vZHMgfD0gMHgxMFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX21vZHMgJj0gfjB4MTBcbiAgICB9XG4gICAgdGhpcy5fa2V5c1tlLmtleUNvZGVdID0gMVxuXG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgY2FzZSAnU2hpZnQnOlxuICAgICAgICB0aGlzLl9tb2RzIHw9IDB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQ29udHJvbCc6XG4gICAgICAgIHRoaXMuX21vZHMgfD0gMHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBbHQnOlxuICAgICAgICB0aGlzLl9tb2RzIHw9IDB4MDRcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnTWV0YSc6XG4gICAgICAgIHRoaXMuX21vZHMgfD0gMHgwOFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICc4JzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDFcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDAyXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzInOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwMlxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDRcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnNCc6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDA0XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDhcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnNic6IC8vIG51bXBhZCA2XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDA4XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAneic6IC8vIGJ1dHRvbiAwXG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MTBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAneCc6IC8vIGJ1dHRvbiAxXG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MjBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnYyc6IC8vIGJ1dHRvbiAyXG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4NDBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnICc6IC8vIGJ1dHRvbiAzXG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4ODBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnRW50ZXInOiAvLyBidXR0b24gNFxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDEwMFxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgna2V5LmRvd24nLCB0aGlzLmV2ZW50RGV0YWlscyhlKSlcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuXG4gIG9uS2V5dXAgKGUpIHtcbiAgICBsZXQgbnVtcGFkID0gZS5sb2NhdGlvbiA9PT0gM1xuICAgIGlmIChudW1wYWQpIHtcbiAgICAgIHRoaXMuX21vZHMgfD0gMHgxMFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX21vZHMgJj0gfjB4MTBcbiAgICB9XG4gICAgdGhpcy5fa2V5c1tlLmtleUNvZGVdID0gMFxuXG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgY2FzZSAnU2hpZnQnOlxuICAgICAgICB0aGlzLl9tb2RzICY9IH4weDAxXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0NvbnRyb2wnOlxuICAgICAgICB0aGlzLl9tb2RzICY9IH4weDAyXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0FsdCc6XG4gICAgICAgIHRoaXMuX21vZHMgJj0gfjB4MDRcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnTWV0YSc6XG4gICAgICAgIHRoaXMuX21vZHMgJj0gfjB4MDhcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDAxXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzgnOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDFcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICcyJzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDAyXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDRcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnNCc6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwNFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwOFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICc2JzogLy8gbnVtcGFkIDZcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDA4XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAneic6IC8vIGJ1dHRvbiAwXG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDEwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3gnOiAvLyBidXR0b24gMVxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgyMFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdjJzogLy8gYnV0dG9uIDJcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4NDBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnICc6IC8vIGJ1dHRvbiAzXG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDgwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0VudGVyJzogLy8gYnV0dG9uIDRcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MTAwXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdrZXkudXAnLCB0aGlzLmV2ZW50RGV0YWlscyhlKSlcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMva2VuLmpzIiwiaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuLi8uLi9nbG9iYWxzLmpzJ1xuaW1wb3J0IENhbnZhc1RleHR1cmUgZnJvbSAnLi4vY2FudmFzdGV4dHVyZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlja2V5IGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdtaWNrZXknLCBbJ2NvdW50JywgJ3dpZHRoJywgJ2hlaWdodCcsICdmcmFtZScsICdjb2xvcicsICdkYmxDbGlja0RlbGF5JywgJ2RibENsaWNrRGlzdGFuY2UnXSlcblxuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUgPSBuZXcgQ2FudmFzVGV4dHVyZSgpXG5cbiAgICB0aGlzLl9kZWZhdWx0X2ZyYW1lID0gdGhpcy5fZnJhbWVcbiAgICB0aGlzLl9kZWZhdWx0X2NvbG9yID0gdGhpcy5fY29sb3JcblxuICAgIGxldCBzdGFnZSA9IG1haW4uc3RhZ2VcbiAgICBpZiAoc3RhZ2UpIHtcbiAgICAgIHN0YWdlLmludGVyYWN0aXZlID0gdHJ1ZVxuXG4gICAgICB0aGlzLl9vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKVxuICAgICAgdGhpcy5fb25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcylcbiAgICAgIHRoaXMuX29uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcylcblxuICAgICAgc3RhZ2Uub24oJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duKVxuICAgICAgc3RhZ2Uub24oJ3JpZ2h0ZG93bicsIHRoaXMuX29uTW91c2VEb3duKVxuICAgICAgc3RhZ2Uub24oJ3RvdWNoc3RhcnQnLCB0aGlzLl9vbk1vdXNlRG93bilcblxuICAgICAgc3RhZ2Uub24oJ21vdXNlbW92ZScsIHRoaXMuX29uTW91c2VNb3ZlKVxuXG4gICAgICBzdGFnZS5vbignbW91c2V1cCcsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9uKCd0b3VjaGVuZCcsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9uKCdtb3VzZXVwb3V0c2lkZScsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9uKCd0b3VjaGVuZG91dHNpZGUnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgfVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuXG4gICAgdGhpcy5fc2NyZWVuU3ByaXRlID0gdGhpcy5ndWlkZW8uc2NyZWVuU3ByaXRlXG4gICAgdGhpcy5fc2NhbGUgPSB0aGlzLmd1aWRlby5zY2FsZVxuXG4gICAgdGhpcy5feCA9IDBcbiAgICB0aGlzLl95ID0gMFxuICAgIHRoaXMuX2NvbG9yID0gdGhpcy5fZGVmYXVsdF9jb2xvclxuICAgIHRoaXMuX2ZyYW1lID0gdGhpcy5fZGVmYXVsdF9mcmFtZVxuICAgIHRoaXMuX2J0bnMgPSAwXG5cbiAgICB0aGlzLl9jYW52YXNUZXh0dXJlLmRlc3Ryb3koKVxuXG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZS5jcmVhdGUodGhpcy5fd2lkdGggKiB0aGlzLl9jb3VudCwgdGhpcy5faGVpZ2h0KVxuXG4gICAgdGhpcy5fbW91c2VMYXllciA9IHRoaXMuX21haW4uZ3VpZGVvLm1vdXNlTGF5ZXJcblxuICAgIGlmICh0aGlzLl9zcHJpdGUpIHtcbiAgICAgIHRoaXMuX3Nwcml0ZS5kZXN0cm95KClcbiAgICAgIHRoaXMuX3Nwcml0ZSA9IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLl9tb3VzZUxheWVyLnJlbW92ZUNoaWxkcmVuKClcblxuICAgIHRoaXMubWVtb3J5LmZyb21fMmRfYXJyYXkodGhpcy5fdG9wLCAwLCB0aGlzLmNvdW50LCB0aGlzLl93aWR0aCwgW1xuICAgICAgJy4uICAgICcsXG4gICAgICAnLncuICAgJyxcbiAgICAgICcud3cuICAnLFxuICAgICAgJy53d3cuICcsXG4gICAgICAnLnd3d3cuJyxcbiAgICAgICcudy4uLi4nLFxuICAgICAgJy4uLiAgICcsXG4gICAgXSwgZGVmYXVsdHMuY2hhcnNfbWFwKVxuXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gICAgdGhpcy5fc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2NhbnZhc1RleHR1cmUudGV4dHVyZSlcblxuICAgIHRoaXMuZnJhbWUgPSB0aGlzLl9kZWZhdWx0X2ZyYW1lXG5cbiAgICB0aGlzLl9tb3VzZUxheWVyLmFkZENoaWxkKHRoaXMuX3Nwcml0ZSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBsZXQgc3RhZ2UgPSB0aGlzLl9tYWluLnN0YWdlXG4gICAgaWYgKHN0YWdlKSB7XG4gICAgICBzdGFnZS5vZmYoJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duKVxuICAgICAgc3RhZ2Uub2ZmKCdyaWdodGRvd24nLCB0aGlzLl9vbk1vdXNlRG93bilcbiAgICAgIHN0YWdlLm9mZigndG91Y2hzdGFydCcsIHRoaXMuX29uTW91c2VEb3duKVxuXG4gICAgICBzdGFnZS5vZmYoJ21vdXNlbW92ZScsIHRoaXMuX29uTW91c2VNb3ZlKVxuXG4gICAgICBzdGFnZS5vZmYoJ21vdXNldXAnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgICBzdGFnZS5vZmYoJ3RvdWNoZW5kJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZXVwb3V0c2lkZScsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9mZigndG91Y2hlbmRvdXRzaWRlJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9zcHJpdGUpIHtcbiAgICAgIHRoaXMuX3Nwcml0ZS5kZXN0cm95KClcbiAgICAgIHRoaXMuX3Nwcml0ZSA9IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLm1vdXNlTGF5ZXIucmVtb3ZlQ2hpbGRyZW4oKVxuXG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZS5kZXN0cm95KClcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG5cbiAgZ2V0IG1vdXNlTGF5ZXIgKCkgeyByZXR1cm4gdGhpcy5fbW91c2VMYXllciB9XG4gIGdldCBzcHJpdGUgKCkgeyByZXR1cm4gdGhpcy5fc3ByaXRlIH1cblxuICBnZXQgY2FudmFzVGV4dHVyZSAoKSB7IHJldHVybiB0aGlzLl9jYW52YXNUZXh0dXJlIH1cblxuICBmcmFtZVJlY3QgKGZyYW1lKSB7XG4gICAgY29uc3QgdyA9IHRoaXMuX3dpZHRoXG4gICAgY29uc3QgaCA9IHRoaXMuX2hlaWdodFxuICAgIHJldHVybiBuZXcgUElYSS5SZWN0YW5nbGUoZnJhbWUgKiB3LCAwLCBmcmFtZSAqIHcgKyB3LCBoKVxuICB9XG5cbiAgZ2V0IHggKCkgeyByZXR1cm4gdGhpcy5feCB9XG4gIHNldCB4ICh2YWx1ZSkge1xuICAgIHRoaXMuX3ggPSB2YWx1ZVxuICAgIHRoaXMuX3Nwcml0ZS54ID0gdmFsdWVcbiAgfVxuXG4gIGdldCB5ICgpIHsgcmV0dXJuIHRoaXMuX3kgfVxuICBzZXQgeSAodmFsdWUpIHtcbiAgICB0aGlzLl95ID0gdmFsdWVcbiAgICB0aGlzLl9zcHJpdGUueSA9IHZhbHVlXG4gIH1cblxuICBnZXQgZnJhbWUgKCkgeyByZXR1cm4gdGhpcy5fZnJhbWUgfVxuICBzZXQgZnJhbWUgKHZhbHVlKSB7XG4gICAgdGhpcy5fZnJhbWUgPSB2YWx1ZVxuICAgIHRoaXMuX3Nwcml0ZS50ZXh0dXJlID0gbmV3IFBJWEkuVGV4dHVyZSh0aGlzLl9jYW52YXNUZXh0dXJlLnRleHR1cmUsIHRoaXMuZnJhbWVSZWN0KHRoaXMuX2ZyYW1lKSlcbiAgfVxuXG4gIGdldCBidG5zICgpIHsgcmV0dXJuIHRoaXMuX2J0bnMgfVxuICBzZXQgYnRucyAodmFsdWUpIHtcbiAgICB0aGlzLl9idG5zID0gdmFsdWVcbiAgfVxuXG4gIGdldCBkYmxDbGlja0RlbGF5ICgpIHsgcmV0dXJuIHRoaXMuX2RibENsaWNrRGVsYXkgfVxuXG4gIGdldCBkYmxDbGlja0Rpc3RhbmNlICgpIHsgcmV0dXJuIHRoaXMuX2RibENsaWNrRGlzdGFuY2UgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZS51cGRhdGVUZXh0dXJlKHRoaXMuX2RhdGEsIHRoaXMucmFpbmJvdylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0RXZlbnRJbmZvIChlKSB7XG4gICAgbGV0IHJlbmRlcmVyID0gdGhpcy5fbWFpbi5yZW5kZXJlclxuXG4gICAgbGV0IHNpemUgPSBuZXcgUElYSS5Qb2ludChyZW5kZXJlci53aWR0aCAtIHRoaXMuX3dpZHRoLCByZW5kZXJlci5oZWlnaHQgLSB0aGlzLl9oZWlnaHQpXG5cbiAgICBsZXQgZ3ggPSBlLmRhdGEuZ2xvYmFsLnggLSB0aGlzLl9zY3JlZW5TcHJpdGUueFxuICAgIGxldCBneSA9IGUuZGF0YS5nbG9iYWwueSAtIHRoaXMuX3NjcmVlblNwcml0ZS55XG5cbiAgICBsZXQgeCA9IE1hdGgudHJ1bmMoTWF0aC5taW4oc2l6ZS54LCBNYXRoLm1heCgwLCBneCkpIC8gdGhpcy5fc2NhbGUpXG4gICAgbGV0IHkgPSBNYXRoLnRydW5jKE1hdGgubWluKHNpemUueSwgTWF0aC5tYXgoMCwgZ3kpKSAvIHRoaXMuX3NjYWxlKVxuXG4gICAgcmV0dXJuIHsgeCwgeSwgYnV0dG9uOiBlLmRhdGEub3JpZ2luYWxFdmVudC5idXR0b24gfVxuICB9XG5cbiAgb25Nb3VzZURvd24gKGUpIHtcbiAgICBsZXQgeyB4LCB5LCBidXR0b24gfSA9IHRoaXMuZ2V0RXZlbnRJbmZvKGUpXG5cbiAgICBzd2l0Y2ggKGJ1dHRvbikge1xuICAgICAgY2FzZSAwOiAvLyBsZWZ0XG4gICAgICAgIHRoaXMuX2J0bnMgfD0gMHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIDE6IC8vIG1pZGRsZVxuICAgICAgICB0aGlzLl9idG5zIHw9IDB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAyOiAvLyByaWdodFxuICAgICAgICB0aGlzLl9idG5zIHw9IDB4MDRcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ21vdXNlLmRvd24nLCB7IHgsIHksIGJ1dHRvbiB9KVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG5cbiAgb25Nb3VzZU1vdmUgKGUpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ3VpZGVvLndpZHRoXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5ndWlkZW8uaGVpZ2h0XG5cbiAgICBsZXQgeyB4LCB5LCBidXR0b24gfSA9IHRoaXMuZ2V0RXZlbnRJbmZvKGUpXG5cbiAgICB0aGlzLnggPSBNYXRoLm1pbih4LCB3aWR0aCAtIHRoaXMuX3dpZHRoKVxuICAgIHRoaXMueSA9IE1hdGgubWluKHksIGhlaWdodCAtIHRoaXMuX2hlaWdodClcblxuICAgIHRoaXMuZW1pdCgnbW91c2UubW92ZScsIHsgeCwgeSwgYnV0dG9uIH0pXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICBvbk1vdXNlVXAgKGUpIHtcbiAgICBsZXQgeyB4LCB5LCBidXR0b24gfSA9IHRoaXMuZ2V0RXZlbnRJbmZvKGUpXG5cbiAgICBzd2l0Y2ggKGJ1dHRvbikge1xuICAgICAgY2FzZSAwOiAvLyBsZWZ0XG4gICAgICAgIHRoaXMuX2J0bnMgJj0gfjB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAxOiAvLyBtaWRkbGVcbiAgICAgICAgdGhpcy5fYnRucyAmPSB+MHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIDI6IC8vIHJpZ2h0XG4gICAgICAgIHRoaXMuX2J0bnMgJj0gfjB4MDRcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ21vdXNlLnVwJywgeyB4LCB5LCBidXR0b24gfSlcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvbWlja2V5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==