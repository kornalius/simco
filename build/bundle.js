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
	    color: 1
	  },
	
	  guideo: {
	    width: 320,
	    height: 240,
	    scale: 3
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
	    key: 'from_2d_array_mask',
	    value: function from_2d_array_mask(addr, frame, count, width, arr) {
	      var mask = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
	
	      var h = arr.length;
	      var fullWidth = width * count;
	      var offset = frame * width;
	
	      for (var y = 0; y < h; y++) {
	        var ti = addr + y * fullWidth + offset;
	        this.from_string_mask(ti, arr[y], mask);
	      }
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
	    value: function blit(addr, x, y, w, h) {
	      var mem = this.memory.data;
	      var data = this._data;
	      var top = this._top;
	      var width = this._width;
	
	      var si = addr;
	      for (var by = 0; by < h; by++) {
	        var ti = top + ((y + by) * width + x);
	        for (var bx = 0; bx < w; bx++) {
	          data[ti++] = mem[si++];
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
	
	      var tex = PIXI.Texture.fromImage('./build/' + __webpack_require__(77)("./" + filename), undefined, PIXI.SCALE_MODES.NEAREST);
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
	
	var _canvastexture = __webpack_require__(74);
	
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
/* 74 */
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
	
	var _canvastexture = __webpack_require__(74);
	
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
	      this._graphics.beginFill(this.guideo.rainbow.color(this._color), 255);
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
	  }]);
	
	  return ScreenOverlay;
	}(Overlay);
	
	var ScanlinesOverlay = exports.ScanlinesOverlay = function (_Overlay3) {
	  _inherits(ScanlinesOverlay, _Overlay3);
	
	  function ScanlinesOverlay(overlays, width, height, options) {
	    _classCallCheck(this, ScanlinesOverlay);
	
	    var _this3 = _possibleConstructorReturn(this, (ScanlinesOverlay.__proto__ || Object.getPrototypeOf(ScanlinesOverlay)).call(this, overlays, width, height));
	
	    _this3._gap = _lodash2.default.get(options, 'gap', 3);
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
	    _this4._speed = _lodash2.default.get(options, 'speed', 16);
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
	        pixels.set([25, 25, 25, aa], x);
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
	
	var _canvastexture = __webpack_require__(74);
	
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
	
	      this.memory.from_2d_array_mask(this._top, 0, this.count, this._width, ['..    ', '.w.   ', '.ww.  ', '.www. ', '.wwww.', '.w....', '...   '], _globals.defaults.chars_map);
	
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
	
	      var gx = e.data.global.x - this.guideo.screenSprite.x;
	      var gy = e.data.global.y - this.guideo.screenSprite.y;
	
	      var x = Math.trunc(Math.min(size.x, Math.max(0, gx)) / this.guideo.scale);
	      var y = Math.trunc(Math.min(size.y, Math.max(0, gy)) / this.guideo.scale);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjUyYmI4ZmNkMjdhZTQ0N2VkZTkiLCJ3ZWJwYWNrOi8vLy4vYXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGl4aS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYi1hdWRpby1kYXdcIiIsIndlYnBhY2s6Ly8vLi9hcHAvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJhZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBlcmZvcm1hbmNlLW5vd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1peHdpdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuZGVyc2NvcmUtcGx1c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9hcHAvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9tYWluLmNzcz9mNDgyIiwid2VicGFjazovLy8uL3N0eWxlL21haW4uY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9sZXhlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL3R5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvYXNzaWducy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2RlbGltaXRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2dyb3Vwcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2xpdGVyYWxzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvb3BlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL3Jlc2VydmVkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy9pbmNsdWRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2tleV9saXRlcmFsLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvc3RhdGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2lkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvYXNzaWduLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvcmV0dXJuLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9jb25kaXRpb25zLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvdmFyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvbG9vcHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZXhwcmVzc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZGljdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9mbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9pZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdHJhbnNwaWxlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3N0YXRlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9leHByZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3ByaW1pdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9vcGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9pZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NsYXNzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZm4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2RpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL21lbW9yeS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZXh5XCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL21lbW9yeW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJldHR5LWJ5dGVzXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL3N0YWNrLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9pbnRlcnJ1cHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL2d1aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvcmFpbmJvdy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvY2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvZm9uem8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL29yd2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvYmVhZ2xlLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy92aW9sZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NhbnZhc3RleHR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL292ZXJsYXlzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWdzL2NydC5wbmc/M2U4MiIsIndlYnBhY2s6Ly8vXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1ncy9jcnQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWdzL3Rlc3QucG5nIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL21pY2tleS5qcyJdLCJuYW1lcyI6WyJfU1RPUFBFRCIsIl9SVU5OSU5HIiwiX1BBVVNFRCIsIk1haW4iLCJvcHRpb25zIiwicmVzZXQiLCJfdXBkYXRlcyIsInF1ZXVlIiwiYWRkIiwibyIsIl8iLCJnZXQiLCJfX2luVXBkYXRlcyIsInB1c2giLCJyZW1vdmUiLCJyZWplY3QiLCJvYmplY3QiLCJiIiwiQXJyYXlCdWZmZXIiLCJhIiwiVWludDMyQXJyYXkiLCJjIiwiVWludDhBcnJheSIsIkxFIiwiX21lbW9yeSIsIl9tZW1vcnlNYW5hZ2VyIiwiX3N0YWNrIiwiX2ludGVycnVwdHMiLCJfZ3VpZGVvIiwiY3JlYXRlQ2hpcHMiLCJfa2VuIiwiX21pY2tleSIsIl9vblJlc2l6ZSIsIm9uUmVzaXplIiwiYmluZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aGF0IiwiUElYSSIsInRpY2tlciIsInNoYXJlZCIsInN0YXR1cyIsInRpY2siLCJwZXJmb3JtYW5jZSIsIm5vdyIsImRlbHRhIiwicSIsImNiIiwiYXJncyIsInN0YXJ0IiwiZGVzdHJveSIsIl9zdGF0dXMiLCJfcHJvZ3JhbSIsInBhdGgiLCJ1bmRlZmluZWQiLCJjb2RlIiwiZm4iLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwiZW1pdCIsInN0b3AiLCJ0IiwidG9rZW5zIiwicnVuIiwiY29uc29sZSIsImxvZyIsInAiLCJub2RlcyIsImVycm9ycyIsIkZ1bmN0aW9uIiwiYXBwbHkiLCJ0ZXN0IiwidmFsdWUiLCJfc3RhZ2UiLCJfcmVuZGVyZXIiLCJtYWluIiwiYXBwIiwiZWxlY3Ryb24iLCJyZXF1aXJlIiwicmVtb3RlIiwic2NyZWVuIiwiZGlhbG9nIiwiQnJvd3NlcldpbmRvdyIsImV4dGVuZCIsInRlbXBsYXRlU2V0dGluZ3MiLCJpbnRlcnBvbGF0ZSIsImZzIiwiTWl4aW4iLCJtaXgiLCJ1c2VyUGF0aCIsImpvaW4iLCJnZXRBcHBQYXRoIiwiZXhpc3RzU3luYyIsIm1rZGlycyIsIklTX1dJTiIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsIklTX09TWCIsIklTX0xJTlVYIiwiZGlycyIsImJ1aWxkIiwiX19kaXJuYW1lIiwiY3dkIiwiaG9tZSIsImdldFBhdGgiLCJ1c2VyIiwidG1wIiwicm9vdCIsIm5vZGVfbW9kdWxlcyIsInVzZXJfcGtnIiwiZ2V0TmFtZSIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwib3BlbkZpbGUiLCJzaG93T3BlbkRpYWxvZyIsImVyciIsImVycm9yIiwic2F2ZUZpbGUiLCJzaG93U2F2ZURpYWxvZyIsIm1lc3NhZ2VCb3giLCJzaG93TWVzc2FnZUJveCIsIm1hcF9nZXR0ZXJzIiwic291cmNlIiwidGFyZ2V0IiwiZGVmcyIsImsiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNhbGwiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwibWFwX2dldHRlcnNfcmV0dXJuX3RoaXMiLCJkZWxheSIsIm1zIiwiYXN5bmMiLCJjb250ZXh0IiwiaXNOdW1iZXIiLCJpc0FycmF5Iiwic2V0VGltZW91dCIsImJ1ZmZlcl90b19zdHJpbmciLCJsZW4iLCJsZW5ndGgiLCJpIiwicyIsInRvU3RyaW5nIiwic3RyaW5nX3RvX2J1ZmZlciIsInN0ciIsIkJ1ZmZlciIsIk1hdGgiLCJ0cnVuYyIsIngiLCJoZXgiLCJzdWJzdHIiLCJwYXJzZUludCIsInN0cmluZ19idWZmZXIiLCJ3cml0ZSIsIm5vcm1hbGl6ZU1lc3NhZ2VzIiwibWVzc2FnZSIsIm0iLCJpc1N0cmluZyIsInNpemUiLCJwYWRTdGFydCIsImJ1ZmZlcl9kdW1wIiwiYnVmZmVyIiwid2lkdGgiLCJjYXBzIiwiaW5kZW50IiwicmVwZWF0IiwiemVybyIsIm4iLCJtYXgiLCJ0b1VwcGVyQ2FzZSIsIm1pbiIsImJ5dGVMZW5ndGgiLCJyb3dzIiwiY2VpbCIsImxhc3QiLCJvZmZzZXRMZW5ndGgiLCJhcnIiLCJsYXN0Qnl0ZXMiLCJsYXN0U3BhY2VzIiwiaiIsInYiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJ1dG9hIiwiYnRvYSIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYXRvdSIsImRlY29kZVVSSUNvbXBvbmVudCIsImVzY2FwZSIsImF0b2IiLCJpbnN0YW5jZUZ1bmN0aW9uIiwiZm9yY2UiLCJoYXNPd25Qcm9wZXJ0eSIsIndyaXRhYmxlIiwiaW5zdGFuY2VGdW5jdGlvbnMiLCJuYW1lcyIsInJhZiIsIlBvaW50IiwicHJvdG90eXBlIiwiZGlzdGFuY2UiLCJzcXJ0IiwieSIsInRlbXBsYXRlIiwiUmVjdGFuZ2xlIiwiZGVmYXVsdHMiLCJib3VuZHNjaGVjayIsInR5cGUiLCJtZW1vcnkiLCJtZW1vcnlfbWFuYWdlciIsImNvbGxlY3RfZGVsYXkiLCJib3JkZXIiLCJjb2xvciIsImd1aWRlbyIsImhlaWdodCIsInNjYWxlIiwicmFpbmJvdyIsImNvdW50IiwiZGF0YV9mb3JtYXQiLCJmb256byIsIm9yd2VsbCIsImJlYWdsZSIsImJsaW5rcmF0ZSIsInZpb2xldCIsImtlbiIsIm1pY2tleSIsImZyYW1lIiwiZGJsQ2xpY2tEZWxheSIsImRibENsaWNrRGlzdGFuY2UiLCJuZXR3b3JrIiwiYWx0byIsImNoYXJzX21hcCIsInIiLCJnIiwiRSIsImUiLCJSIiwiRyIsIlkiLCJCIiwiUCIsIkMiLCJ3IiwibXNnIiwicm93IiwiY29sIiwicnVudGltZV9lcnJvciIsImlvX2Vycm9yIiwiRXZlbnQiLCJkYXRhIiwiYnViYmxlcyIsIl9fZXZlbnRPYmplY3QiLCJ0aW1lU3RhbXAiLCJzdG9wcGVkIiwic3RvcHBlZEltbWVkaWF0ZSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJFbWl0dGVyIiwib3JkZXIiLCJfbGlzdGVuZXJzIiwic29ydEJ5Iiwib25jZUhhbmRsZXJXcmFwcGVyIiwib2ZmIiwiX29yaWdpbmFsSGFuZGxlciIsIm9uIiwibGlzdCIsInNwbGljZSIsImlzRW1wdHkiLCJvcmlnRXZlbnREYXRhIiwibGlzdGVuZXJzIiwiY2xvbmUiLCJsIiwiY2FuY2VsQnViYmxlIiwicGFyZW50IiwiVG9rZW4iLCJsZXhlciIsImVuZCIsIl90eXBlIiwiX3Jlc2VydmVkIiwib2Zmc2V0IiwibGluZSIsImNvbHVtbiIsInBhcnRzIiwic3BsaXQiLCJpcyIsImlzUmVnRXhwIiwibWF0Y2giLCJiYXNlbmFtZSIsIkVtcHR5Q2xhc3MiLCJMZXhlciIsInRleHQiLCJjb25zdGFudHMiLCJ2YWxpZE9mZnNldCIsImNoYXJBdCIsInN1YnN0cmluZyIsInBvc19pbmZvIiwidG9rZW4iLCJpbmRleE9mIiwiY2hhcl9hdCIsIm5leHRfaXNfc3BhY2UiLCJvbGRfb2Zmc2V0IiwidG9rZW5fdHlwZXMiLCJzdWJ0ZXh0IiwiaW5kZXgiLCJzbGljZSIsImluc2VydFRva2VuIiwicGVlayIsImNvbnN0X3Rva2VuIiwiaW5jbHVkZV90b2tlbiIsIm5leHQiLCJpbmZvIiwid2l0aCIsIl90b2tlbl90eXBlcyIsInN1cGVyY2xhc3MiLCJhc3NpZ24iLCJtYXRoX2Fzc2lnbiIsImxvZ2ljX2Fzc2lnbiIsImZuX2Fzc2lnbiIsImVvbCIsImNvbW1hIiwiY29sb24iLCJjb21tZW50Iiwib3Blbl9wYXJlbiIsImNsb3NlX3BhcmVuIiwib3Blbl9icmFja2V0IiwiY2xvc2VfYnJhY2tldCIsIm9wZW5fY3VybHkiLCJjbG9zZV9jdXJseSIsImtleSIsImlkIiwiaWRfZmllbGQiLCJ0aGlzIiwidGhpc19maWVsZCIsInN5bWJvbCIsIm1hdGgiLCJsb2dpYyIsImNvbXAiLCJudW1iZXIiLCJzdHJpbmciLCJjaGFyIiwiaW5jbHVkZSIsImNvbnN0IiwicmVzZXJ2ZWQiLCJleHRuYW1lIiwicG4iLCJzdGF0U3luYyIsInNyYyIsInJlYWRGaWxlU3luYyIsImx4IiwiY29uY2F0IiwiTm9kZSIsInBhcnNlciIsIl9pbl9jbGFzcyIsIl9mbl9sZXZlbCIsInRva2VuX3Byb3AiLCJQYXJzZXIiLCJmcmFtZXMiLCJwcmV2X2ZyYW1lIiwiaW5fY2xhc3MiLCJmbl9sZXZlbCIsImVvcyIsIm1hdGNoZXMiLCJ0b2tlbl9hdCIsImVuZF9uZXh0Iiwic2tpcCIsImV4cGVjdCIsImxlZnQiLCJyaWdodCIsImV4cHIiLCJub2RlIiwic3RhdGVtZW50cyIsIkZyYW1lIiwiRnJhbWVzIiwiRnJhbWVJdGVtIiwiY3VycmVudCIsIml0ZW1fdHlwZSIsImV4aXN0cyIsImlzX2xvY2FsIiwiaXNfZ2xvYmFsIiwiaXRlbXMiLCJfZ2xvYmFsIiwiZmluZCIsImJsb2NrX3R5cGUiLCJsb29wX3doaWxlIiwic3RhdGVtZW50IiwiYmxvY2siLCJ2YXJfc3RhdGVtZW50IiwiYXNzaWduX3N0YXRlbWVudCIsImlmX3N0YXRlbWVudCIsImZvcl9zdGF0ZW1lbnQiLCJ3aGlsZV9zdGF0ZW1lbnQiLCJyZXR1cm5fc3RhdGVtZW50Iiwic2luZ2xlX3N0YXRlbWVudCIsImNsYXNzX3N0YXRlbWVudCIsImlkX3N0YXRlbWVudCIsImZpcnN0Iiwic3VwZXJfZXhwciIsImlkX2V4cHIiLCJmbl9leHByIiwiX2ZuIiwiZXhwcnMiLCJzaW5nbGUiLCJfZXh0ZW5kcyIsImNsYXNzX2xpc3QiLCJib2R5IiwiZXhwZWN0X2VuZCIsImV4cHJfYmxvY2siLCJ0cnVlX2JvZHkiLCJmYWxzZV9ib2R5IiwiZWxzZV9zdGF0ZW1lbnQiLCJfbGV0IiwibWluX2V4cHIiLCJtYXhfZXhwciIsInN0ZXBfZXhwciIsInNpbXBsZV9leHByIiwidGVybSIsInRlcm1fZXhwciIsImZhY3RvciIsImZhY3Rvcl9leHByIiwiY29uZGl0aW9uYWwiLCJjb25kaXRpb25hbF9leHByIiwianVuY3Rpb24iLCJqdW5jdGlvbl9leHByIiwibmV4dF9leHByX25vZGUiLCJzdWJfZXhwciIsImFycmF5X2V4cHIiLCJkaWN0X2V4cHIiLCJ0aGlzX2V4cHIiLCJuZXdfZXhwciIsImRlZiIsImtleV9saXRlcmFsIiwiZm5fYXJnc19kZWYiLCJmbl9hcmciLCJmaWVsZHMiLCJfZmllbGQiLCJUcmFuc3BpbGVyIiwibm9kZV9hdCIsInZhbHVlcyIsImxpbmVzIiwiaW5kZW50X2xldmVsIiwiZW5kc1dpdGgiLCJyZXBsYWNlIiwiY29kZV9zdGFydCIsIndyaXRlbG4iLCJjb2RlX2VuZCIsImQiLCJub2RlX3RlbXBsYXRlIiwiZm5fY2FsbF90ZW1wbGF0ZSIsImZuX2Fzc2lnbl90ZW1wbGF0ZSIsImFycmF5X3RlbXBsYXRlIiwiZGljdF90ZW1wbGF0ZSIsIm9wZXJhdG9yX3RlbXBsYXRlIiwidGhpc190ZW1wbGF0ZSIsIm5ld190ZW1wbGF0ZSIsInN0cmluZ190ZW1wbGF0ZSIsImlkX3RlbXBsYXRlIiwidmFsdWVfdGVtcGxhdGUiLCJsbiIsInN0YXRlbWVudF90ZW1wbGF0ZSIsImZuX2NhbGwiLCJ0bXBsIiwiZGF0Iiwid29yZCIsInNlcGFyYXRvciIsIm9wIiwiZXhwcl90ZW1wbGF0ZSIsImZpZWxkIiwiZG90IiwiYmxvY2tfdGVtcGxhdGUiLCJmbl9kZWYiLCJtYXAiLCJmIiwiZGF0YV90eXBlX3NpemVzIiwiaTgiLCJzOCIsImkxNiIsInMxNiIsImkzMiIsInMzMiIsImYzMiIsImRhdGFfdHlwZV9mbnMiLCJkYXRhX3R5cGVfc2l6ZSIsIk1lbW9yeSIsIl9zaXplIiwiX3RvcCIsIl9ib3R0b20iLCJfYnVmZmVyIiwiX2RhdGEiLCJfdmlldyIsIkRhdGFWaWV3IiwiY2xlYXIiLCJmaWxsIiwiYWRkciIsInN6IiwiaGx0IiwiY2hrX2JvdW5kcyIsImRiIiwiX3ZtIiwibGl0dGxlRW5kaWFuIiwibGQiLCJzdCIsImxkbCIsImJvdHRvbSIsIm1lbSIsImxkcyIsInNldCIsInN1YmFycmF5Iiwic3RsIiwiY2hhckNvZGVBdCIsInN0cyIsInRvcCIsInRndCIsImNvcHlXaXRoaW4iLCJjb3B5IiwidGkiLCJtYXNrIiwiaCIsImZyb21fc3RyaW5nIiwiZnJvbV9zdHJpbmdfbWFzayIsImZ1bGxXaWR0aCIsInRvX3N0cmluZyIsInRvX3N0cmluZ19tYXNrIiwiaGV4eSIsIl9tYWluIiwiTWVtb3J5TWFuYWdlciIsIl9jb2xsZWN0X2RlbGF5IiwiX2Jsb2NrcyIsIl9sYXN0IiwiY29sbGVjdCIsInVzZWQiLCJvYiIsImF2YWlsX21lbSIsIl9hbGxvYyIsInVzZWRfbWVtIiwiZnJlZV9tZW0iLCJtZW1fYnVmZmVyIiwiU3RhY2tFbnRyeSIsInN0YWNrIiwicm9sbGluZyIsIl9tYXgiLCJfcm9sbGluZyIsIl9wdHIiLCJyZWFkIiwidG90YWxfc2l6ZSIsIlN0YWNrIiwiX2xpc3QiLCJhcmd1bWVudHMiLCJwb3AiLCJfSU5UX1JVTk5JTkciLCJfSU5UX1BBVVNFRCIsIkludGVycnVwdCIsInN0b3BfYWxsIiwiR3VpZGVvIiwiaW5pdCIsImJvcmRlclNpemUiLCJhdXRvRGV0ZWN0UmVuZGVyZXIiLCJfd2lkdGgiLCJfc2NhbGUiLCJfaGVpZ2h0IiwidmlldyIsInN0eWxlIiwicG9zaXRpb24iLCJjdXJzb3IiLCJkb2N1bWVudCIsImFwcGVuZENoaWxkIiwiQ29udGFpbmVyIiwicmVzaXplIiwiX3JhaW5ib3ciLCJfZm9uem8iLCJfb3J3ZWxsIiwiX2JlYWdsZSIsIl92aW9sZXQiLCJfb3ZlcmxheXMiLCJzY2FubGluZXMiLCJzY2FubGluZSIsInJnYiIsIm5vaXNlcyIsImNydCIsIm1vbml0b3IiLCJfc2NyZWVuIiwiY2xlYXJSZWN0IiwiX2ltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsIl9waXhlbHMiLCJfZm9yY2VfcmVkcmF3IiwiX2ZvcmNlX2ZsaXAiLCJyZWRyYXciLCJ1cGRhdGVUZXh0dXJlIiwicmVuZGVyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY2VudGVyIiwidG9JbmRleCIsInNpIiwiYnkiLCJieCIsInVwZGF0ZSIsImZnIiwiYmciLCJsdyIsImZpbGVuYW1lIiwidGV4IiwiVGV4dHVyZSIsImZyb21JbWFnZSIsIlNDQUxFX01PREVTIiwiTkVBUkVTVCIsInBpeGVsIiwic3ByaXRlIiwic3ByaXRlc0xheWVyIiwibW91c2VMYXllciIsInRleHR1cmUiLCJjYW52YXNCdWZmZXIiLCJjYW52YXMiLCJ0MzIiLCJ0OCIsInJldmVyc2UiLCJSYWluYm93IiwiX0xFIiwicmdiYSIsIl9jb3VudCIsImN1cnJlbnRPZmZzZXQiLCJDaGlwIiwiX2RhdGFfZm9ybWF0IiwiX2NlbGxfc2l6ZSIsIl9kYXRhX3NpemUiLCJrZXlzIiwibm9kYXRhIiwiZGF0YV9zaXplIiwiY2VsbF9zaXplIiwiZmxpcCIsImZvcmNlX3JlZHJhdyIsImZvcmNlX2ZsaXAiLCJGb256byIsImZyb21fYXJyYXlfbWFzayIsImJsaXRfbWFzayIsImRyYXciLCJPcndlbGwiLCJjaCIsImZudCIsImZ3IiwiZmgiLCJpZHgiLCJweSIsInRpZHgiLCJjciIsImJzIiwicG9zIiwiZHJhd19jaGFyIiwicHV0X2NoYXIiLCJtb3ZlX3RvIiwibW92ZV9ieSIsInN5IiwidHkiLCJzeCIsInR4IiwibHMiLCJkeSIsIkJlYWdsZSIsIl94IiwiX3kiLCJfYmxpbmtfaGlkZGVuIiwiX2JsaW5rcmF0ZSIsImJsaW5rIiwiX3Zpc2libGUiLCJfY29sb3IiLCJwaSIsIlZpb2xldCIsIl9jYW52YXNUZXh0dXJlIiwiY3JlYXRlIiwiX3Nwcml0ZXNMYXllciIsInJlbW92ZUNoaWxkcmVuIiwiY2hpbGRyZW4iLCJfbmFtZSIsInoiLCJTcHJpdGUiLCJfdGV4dHVyZSIsImFkZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJfX2ZyYW1lIiwiZnJhbWVSZWN0IiwiQ2FudmFzVGV4dHVyZSIsIl9jYW52YXNCdWZmZXIiLCJDYW52YXNCdWZmZXIiLCJmcm9tQ2FudmFzIiwic2NhbGVNb2RlIiwiX2NvbnRleHQiLCJnZXRDb250ZXh0IiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJfc3ByaXRlIiwicGFsZXR0ZSIsInBpeGVscyIsInB1dEltYWdlRGF0YSIsIk92ZXJsYXkiLCJvdmVybGF5cyIsInN0YWdlIiwicmVuZGVyZXIiLCJpbWFnZURhdGEiLCJCb3JkZXJPdmVybGF5IiwiX2dyYXBoaWNzIiwiR3JhcGhpY3MiLCJiZWdpbkZpbGwiLCJkcmF3UmVjdCIsImVuZEZpbGwiLCJTY3JlZW5PdmVybGF5IiwiX21vdXNlTGF5ZXIiLCJfcGFsZXR0ZSIsIlNjYW5saW5lc092ZXJsYXkiLCJfZ2FwIiwiX2FscGhhIiwiU2NhbmxpbmVPdmVybGF5IiwiX3JhdGUiLCJfc3BlZWQiLCJhYSIsIk5vaXNlc092ZXJsYXkiLCJfcmVkIiwiX2dyZWVuIiwiX2JsdWUiLCJfbm9pc2VzIiwibm9pc2UiLCJ2aXNpYmxlIiwicmFuZG9tIiwiX25vaXNlS2V5cyIsIlJnYk92ZXJsYXkiLCJDcnRPdmVybGF5IiwiX3JhZGl1cyIsIl9pbnNpZGVfYWxwaGEiLCJfb3V0c2lkZV9hbHBoYSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImdyYWRpZW50IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIk92ZXJsYXlzIiwiX2NyZWF0ZU92ZXJsYXkiLCJjdHgiLCJDbHMiLCJkZWZhdWx0c0RlZXAiLCJLZW4iLCJfb25LZXlkb3duIiwib25LZXlkb3duIiwiX29uS2V5dXAiLCJvbktleXVwIiwiX21vZHMiLCJfam95c3RpY2siLCJfa2V5cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXlDb2RlIiwibW9kcyIsImpveXN0aWNrIiwic2hpZnQiLCJjdHJsIiwiYWx0IiwibWV0YSIsIm51bXBhZCIsImJ0bjAiLCJidG4xIiwiYnRuMiIsImJ0bjMiLCJidG40IiwidXAiLCJkb3duIiwibG9jYXRpb24iLCJldmVudERldGFpbHMiLCJzdG9wUHJvcGFnYXRpb24iLCJNaWNrZXkiLCJfZGVmYXVsdF9mcmFtZSIsIl9mcmFtZSIsIl9kZWZhdWx0X2NvbG9yIiwiaW50ZXJhY3RpdmUiLCJfb25Nb3VzZURvd24iLCJvbk1vdXNlRG93biIsIl9vbk1vdXNlTW92ZSIsIm9uTW91c2VNb3ZlIiwiX29uTW91c2VVcCIsIm9uTW91c2VVcCIsIl9idG5zIiwiZnJvbV8yZF9hcnJheV9tYXNrIiwiZ3giLCJnbG9iYWwiLCJzY3JlZW5TcHJpdGUiLCJneSIsImJ1dHRvbiIsIm9yaWdpbmFsRXZlbnQiLCJnZXRFdmVudEluZm8iLCJfZGJsQ2xpY2tEZWxheSIsIl9kYmxDbGlja0Rpc3RhbmNlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7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bUIsTTt1QkFDdkJsc0IsSyxFQUFPO0FBQ2YsWUFBS2tzQixLQUFMLEdBQWFsc0IsS0FBYjtBQUNEOzs7eUJBRW9CO0FBQUUsY0FBTyxLQUFLMnNCLGNBQVo7QUFBNEI7Ozt5QkFFM0I7QUFBRSxjQUFPLEtBQUtDLGlCQUFaO0FBQStCOzs7Ozs7bUJBN0l0Q3JCLE0iLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjUyYmI4ZmNkMjdhZTQ0N2VkZTkiLCJpbXBvcnQgJ3BpeGkuanMnXG5pbXBvcnQgJ3dlYi1hdWRpby1kYXcnXG5cbmltcG9ydCB7IGFzeW5jIH0gZnJvbSAnLi91dGlscy5qcydcbmltcG9ydCB7IGRlZmF1bHRzLCBydW50aW1lX2Vycm9yIH0gZnJvbSAnLi9nbG9iYWxzLmpzJ1xuXG5pbXBvcnQgY3NzIGZyb20gJy4uL3N0eWxlL21haW4uY3NzJ1xuLy8gaW1wb3J0IHQgZnJvbSAnLi4vaHRtbC9tYWluLmh0bWwnXG5cbi8vIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyBlbC5pbm5lckhUTUwgPSB0XG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKVxuXG5pbXBvcnQgeyBFbWl0dGVyIH0gZnJvbSAnLi9lbWl0dGVyLmpzJ1xuXG5pbXBvcnQgTGV4ZXIgZnJvbSAnLi9jb21waWxlci9sZXhlci5qcydcbmltcG9ydCBQYXJzZXIgZnJvbSAnLi9jb21waWxlci9wYXJzZXIuanMnXG5pbXBvcnQgVHJhbnNwaWxlciBmcm9tICcuL2NvbXBpbGVyL3RyYW5zcGlsZXIuanMnXG5cbmltcG9ydCB7IE1lbW9yeSB9IGZyb20gJy4vdm0vbWVtb3J5LmpzJ1xuaW1wb3J0IE1lbW9yeU1hbmFnZXIgZnJvbSAnLi92bS9tZW1vcnltYW5hZ2VyLmpzJ1xuaW1wb3J0IFN0YWNrIGZyb20gJy4vdm0vc3RhY2suanMnXG5pbXBvcnQgSW50ZXJydXB0IGZyb20gJy4vdm0vaW50ZXJydXB0LmpzJ1xuaW1wb3J0IEd1aWRlbyBmcm9tICcuL3ZtL2NoaXBzL2d1aWRlby5qcydcbmltcG9ydCBLZW4gZnJvbSAnLi92bS9jaGlwcy9rZW4uanMnXG5pbXBvcnQgTWlja2V5IGZyb20gJy4vdm0vY2hpcHMvbWlja2V5LmpzJ1xuXG4vLyBpbXBvcnQgeyBWTSB9IGZyb20gJy4vaW50ZXJwcmV0ZXIvdm0uanMnXG5cbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICBsZXQgc3JjID0gcmVxdWlyZSgncmF3IS4uL3Rlc3QvdGVzdDEueDMyJylcbi8vICAgY29uc29sZS5sb2coc3JjKVxuXG4vLyAgIGxldCB2bSA9IG5ldyBWTSgpXG4vLyAgIHZtLmxvYWQoc3JjKVxuLy8gICB2bS5ydW4oKVxuLy8gICB2bS5kdW1wKClcbi8vIH0sIDEwMClcblxuLy8gY29uc29sZS5sb2coaGV4eS5oZXh5KHZtLm1lbV9idWZmZXIsIHsgb2Zmc2V0OiAwLCBsZW5ndGg6IDUxMiwgZGlzcGxheV9vZmZzZXQ6IDB4MDAsIHdpZHRoOiAxNiwgY2FwczogJ3VwcGVyJywgaW5kZW50OiAyIH0pKVxuXG5leHBvcnQgY29uc3QgX1NUT1BQRUQgPSAwXG5leHBvcnQgY29uc3QgX1JVTk5JTkcgPSAxXG5leHBvcnQgY29uc3QgX1BBVVNFRCA9IDJcblxuZXhwb3J0IGNsYXNzIE1haW4gZXh0ZW5kcyBFbWl0dGVyIHtcblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgdGhpcy5fdXBkYXRlcyA9IHtcbiAgICAgIHF1ZXVlOiBbXSxcblxuICAgICAgYWRkOiBvcHRpb25zID0+IHtcbiAgICAgICAgbGV0IG8gPSBfLmdldChvcHRpb25zLCAnb2JqZWN0JylcbiAgICAgICAgaWYgKG8gJiYgIW8uX19pblVwZGF0ZXMpIHtcbiAgICAgICAgICBvLl9faW5VcGRhdGVzID0gdHJ1ZVxuICAgICAgICAgIHRoaXMuX3VwZGF0ZXMucXVldWUucHVzaChvcHRpb25zKVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IG8gPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVzLnF1ZXVlID0gXy5yZWplY3QodGhpcy5fdXBkYXRlcy5xdWV1ZSwgeyBvYmplY3Q6IG8gfSlcbiAgICAgICAgby5fX2luVXBkYXRlcyA9IGZhbHNlXG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXR0bGVFbmRpYW5cbiAgICBsZXQgYiA9IG5ldyBBcnJheUJ1ZmZlcig0KVxuICAgIGxldCBhID0gbmV3IFVpbnQzMkFycmF5KGIpXG4gICAgbGV0IGMgPSBuZXcgVWludDhBcnJheShiKVxuICAgIGFbMF0gPSAweGRlYWRiZWVmXG4gICAgdGhpcy5MRSA9IGNbMF0gPT09IDB4ZWZcblxuICAgIHRoaXMuX21lbW9yeSA9IG5ldyBNZW1vcnkodGhpcylcbiAgICB0aGlzLl9tZW1vcnlNYW5hZ2VyID0gbmV3IE1lbW9yeU1hbmFnZXIodGhpcylcbiAgICB0aGlzLl9zdGFjayA9IG5ldyBTdGFjayh0aGlzKVxuICAgIHRoaXMuX2ludGVycnVwdHMgPSBuZXcgSW50ZXJydXB0KHRoaXMpXG5cbiAgICB0aGlzLl9ndWlkZW8gPSBuZXcgR3VpZGVvKHRoaXMpXG4gICAgdGhpcy5fZ3VpZGVvLmNyZWF0ZUNoaXBzKClcblxuICAgIHRoaXMuX2tlbiA9IG5ldyBLZW4odGhpcylcbiAgICB0aGlzLl9taWNrZXkgPSBuZXcgTWlja2V5KHRoaXMpXG5cbiAgICB0aGlzLl9vblJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vblJlc2l6ZSlcblxuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIFBJWEkudGlja2VyLnNoYXJlZC5hZGQoZGVsdGEgPT4ge1xuICAgICAgaWYgKHRoYXQuc3RhdHVzID09PSBfUlVOTklORykge1xuICAgICAgICB0aGF0LnRpY2socGVyZm9ybWFuY2Uubm93KCksIGRlbHRhKVxuXG4gICAgICAgIC8vIGxldCByZW5kZXIgPSBmYWxzZVxuXG4gICAgICAgIGZvciAobGV0IHEgb2YgdGhhdC5fdXBkYXRlcy5xdWV1ZSkge1xuICAgICAgICAgIHEub2JqZWN0Ll9faW5VcGRhdGVzID0gZmFsc2VcbiAgICAgICAgICAvLyBpZiAocS5yZW5kZXIpIHtcbiAgICAgICAgICAgIC8vIHJlbmRlciA9IHRydWVcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgaWYgKHEuY2IpIHtcbiAgICAgICAgICAgIHEuY2IocS5vYmplY3QsIC4uLihxLmFyZ3MgfHwgW10pKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoYXQuX3VwZGF0ZXMucXVldWUgPSBbXVxuXG4gICAgICAgIC8vIGlmIChyZW5kZXIpIHtcbiAgICAgICAgICAvLyB0aGF0Ll9ndWlkZW8ucmVuZGVyZXIucmVuZGVyKHRoYXQuX2d1aWRlby5zdGFnZSlcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBhc3luYyh0aGlzLCB0aGlzLnN0YXJ0LCAxMDApXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9ndWlkZW8uZGVzdHJveSgpXG4gICAgdGhpcy5fa2VuLmRlc3Ryb3koKVxuICAgIHRoaXMuX21pY2tleS5kZXN0cm95KClcbiAgICB0aGlzLl9pbnRlcnJ1cHRzLmRlc3Ryb3koKVxuICAgIHRoaXMuX21lbW9yeU1hbmFnZXIuZGVzdHJveSgpXG4gICAgdGhpcy5fbWVtb3J5LmRlc3Ryb3koKVxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX3N0YXR1cyA9IDBcbiAgICB0aGlzLl9wcm9ncmFtID0ge1xuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgY29kZTogdW5kZWZpbmVkLFxuICAgICAgZm46IHVuZGVmaW5lZCxcbiAgICB9XG4gIH1cblxuICBkZWZhdWx0cyAobmFtZSwgZGVmYXVsdFZhbHVlKSB7IHJldHVybiBfLmdldChkZWZhdWx0cywgbmFtZSwgZGVmYXVsdFZhbHVlKSB9XG5cbiAgZ2V0IHN0YXR1cyAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXMgfVxuICBzZXQgc3RhdHVzICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9zdGF0dXMgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGdldCBtZW1vcnkgKCkgeyByZXR1cm4gdGhpcy5fbWVtb3J5IH1cbiAgZ2V0IG1lbW9yeU1hbmFnZXIgKCkgeyByZXR1cm4gdGhpcy5fbWVtb3J5TWFuYWdlciB9XG4gIGdldCBpbnRlcnJ1cHRzICgpIHsgcmV0dXJuIHRoaXMuX2ludGVycnVwdHMgfVxuXG4gIGdldCB1cGRhdGVzICgpIHsgcmV0dXJuIHRoaXMuX3VwZGF0ZXMgfVxuXG4gIGdldCBndWlkZW8gKCkgeyByZXR1cm4gdGhpcy5fZ3VpZGVvIH1cbiAgZ2V0IGtleWJvYXJkX2NoaXAgKCkgeyByZXR1cm4gdGhpcy5fa2VuIH1cbiAgZ2V0IG1pY2tleSAoKSB7IHJldHVybiB0aGlzLl9taWNrZXkgfVxuXG4gIGdldCBzdGFnZSAoKSB7IHJldHVybiB0aGlzLl9ndWlkZW8uX3N0YWdlIH1cbiAgZ2V0IHJlbmRlcmVyICgpIHsgcmV0dXJuIHRoaXMuX2d1aWRlby5fcmVuZGVyZXIgfVxuXG4gIGdldCBwcm9ncmFtICgpIHsgcmV0dXJuIHRoaXMuX3Byb2dyYW0gfVxuXG4gIG9uUmVzaXplICgpIHtcbiAgICB0aGlzLl9ndWlkZW8uZW1pdCgncmVzaXplJylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgaGx0IChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPiAwKSB7XG4gICAgICBydW50aW1lX2Vycm9yKGNvZGUpXG4gICAgfVxuICAgIHRoaXMuc3RvcCgpXG4gIH1cblxuICBsb2FkIChwYXRoKSB7XG4gICAgbGV0IHQgPSBuZXcgTGV4ZXIoKVxuICAgIGxldCB0b2tlbnMgPSB0LnJ1bihwYXRoKVxuICAgIGNvbnNvbGUubG9nKHRva2VucylcblxuICAgIGxldCBwID0gbmV3IFBhcnNlcigpXG4gICAgbGV0IG5vZGVzID0gcC5ydW4odG9rZW5zKVxuICAgIGNvbnNvbGUubG9nKG5vZGVzKVxuXG4gICAgaWYgKHAuZXJyb3JzID09PSAwKSB7XG4gICAgICBsZXQgdCA9IG5ldyBUcmFuc3BpbGVyKClcbiAgICAgIGxldCBjb2RlID0gdC5ydW4obm9kZXMpXG4gICAgICBjb25zb2xlLmxvZyhjb2RlKVxuXG4gICAgICBpZiAodC5lcnJvcnMgPT09IDApIHtcbiAgICAgICAgdGhpcy5fcHJvZ3JhbS5jb2RlID0gY29kZVxuICAgICAgICB0aGlzLl9wcm9ncmFtLnBhdGggPSBwYXRoXG4gICAgICAgIHRoaXMuX3Byb2dyYW0uZm4gPSBuZXcgRnVuY3Rpb24oWydhcmdzJ10sIHRoaXMuX3Byb2dyYW0uY29kZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBydW4gKC4uLmFyZ3MpIHtcbiAgICBsZXQgZm4gPSBfLmdldCh0aGlzLCAnX3Byb2dyYW0uZm4nKVxuICAgIHJldHVybiBmbiA/IGZuLmFwcGx5KHRoaXMsIGFyZ3MpIDogbnVsbFxuICB9XG5cbiAgc3RhcnQgKCkge1xuICAgIHRoaXMuc3RhdHVzID0gX1JVTk5JTkdcbiAgICB0aGlzLnRlc3QoKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdG9wICgpIHtcbiAgICB0aGlzLnN0YXR1cyA9IF9TVE9QUEVEXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHBhdXNlICgpIHtcbiAgICB0aGlzLnN0YXR1cyA9IF9QQVVTRURcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcmVzdW1lICgpIHtcbiAgICB0aGlzLnN0YXR1cyA9IF9SVU5OSU5HXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICB0aGlzLl9tZW1vcnkudGljayh0KVxuICAgIHRoaXMuX21lbW9yeU1hbmFnZXIudGljayh0KVxuICAgIHRoaXMuX2tlbi50aWNrKHQpXG4gICAgdGhpcy5fbWlja2V5LnRpY2sodClcbiAgICB0aGlzLl9pbnRlcnJ1cHRzLnRpY2sodClcbiAgICB0aGlzLl9ndWlkZW8udGljayh0KVxuICB9XG5cbiAgdGVzdCAoKSB7XG4gIH1cblxufVxuXG5leHBvcnQgbGV0IG1haW4gPSBuZXcgTWFpbigpXG53aW5kb3cuYXBwID0gbWFpblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL21haW4uanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwaXhpLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGl4aS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYi1hdWRpby1kYXdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWItYXVkaW8tZGF3XCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgZWxlY3Ryb24gPSByZXF1aXJlKCdlbGVjdHJvbicpXG5jb25zdCB7IHJlbW90ZSwgc2NyZWVuLCBkaWFsb2cgfSA9IGVsZWN0cm9uXG5jb25zdCB7IGFwcCwgQnJvd3NlcldpbmRvdyB9ID0gcmVtb3RlXG5cbmNvbnN0IF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlLXBsdXMnKVxuXy5leHRlbmQoXywgcmVxdWlyZSgnbG9kYXNoJykpXG53aW5kb3cuXyA9IF9cblxuXy50ZW1wbGF0ZVNldHRpbmdzLmludGVycG9sYXRlID0gLyN7KFtcXHNcXFNdKz8pfS9nXG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMtcHJvbWlzZScpXG5cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgcmFmIGZyb20gJ3JhZidcbmltcG9ydCBwZXJmb3JtYW5jZSBmcm9tICdwZXJmb3JtYW5jZS1ub3cnXG5cbmltcG9ydCB7IE1peGluLCBtaXggfSBmcm9tICdtaXh3aXRoJ1xud2luZG93Lk1peGluID0gTWl4aW5cbndpbmRvdy5taXggPSBtaXhcblxubGV0IHVzZXJQYXRoID0gcGF0aC5qb2luKGFwcC5nZXRBcHBQYXRoKCksICcvdXNlcicpXG5pZiAoIWZzLmV4aXN0c1N5bmModXNlclBhdGgpKSB7XG4gIGZzLm1rZGlycyh1c2VyUGF0aClcbn1cblxubGV0IElTX1dJTiA9IC9ed2luLy50ZXN0KHByb2Nlc3MucGxhdGZvcm0pXG5sZXQgSVNfT1NYID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2RhcndpbidcbmxldCBJU19MSU5VWCA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICdsaW51eCdcbmxldCBkaXJzID0ge1xuICBidWlsZDogX19kaXJuYW1lLFxuICBjd2Q6IGFwcC5nZXRBcHBQYXRoKCksXG4gIGhvbWU6IGFwcC5nZXRQYXRoKCdob21lJyksXG4gIGFwcDogYXBwLmdldFBhdGgoJ2FwcERhdGEnKSxcbiAgdXNlcjogdXNlclBhdGgsXG4gIHRtcDogYXBwLmdldFBhdGgoJ3RlbXAnKSxcbiAgcm9vdDogYXBwLmdldFBhdGgoJ2V4ZScpLFxuICBub2RlX21vZHVsZXM6IHBhdGguam9pbih1c2VyUGF0aCwgJ25vZGVfbW9kdWxlcycpLFxuICB1c2VyX3BrZzogcGF0aC5qb2luKHVzZXJQYXRoLCAncGFja2FnZS5qc29uJyksXG59XG5cbmxldCBuYW1lID0gYXBwLmdldE5hbWUoKVxubGV0IHZlcnNpb24gPSBhcHAuZ2V0VmVyc2lvbigpXG5cbmxldCBvcGVuRmlsZSA9ICguLi5hcmdzKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRpYWxvZy5zaG93T3BlbkRpYWxvZy5hcHBseShkaWFsb2csIGFyZ3MpXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmxldCBzYXZlRmlsZSA9ICguLi5hcmdzKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRpYWxvZy5zaG93U2F2ZURpYWxvZy5hcHBseShkaWFsb2csIGFyZ3MpXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmxldCBtZXNzYWdlQm94ID0gKC4uLmFyZ3MpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGlhbG9nLnNob3dNZXNzYWdlQm94LmFwcGx5KGRpYWxvZywgYXJncylcbiAgfVxuICBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxubGV0IG1hcF9nZXR0ZXJzID0gKHNvdXJjZSwgdGFyZ2V0LCBkZWZzKSA9PiB7XG4gIGZvciAobGV0IGsgaW4gZGVmcykge1xuICAgIGxldCBmbiA9IGRlZnNba11cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc291cmNlLCBrLCB7XG4gICAgICBnZXQ6ICgpID0+IGZuLmNhbGwodGFyZ2V0LCBzb3VyY2UpLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9KVxuICB9XG59XG5cbmxldCBtYXBfZ2V0dGVyc19yZXR1cm5fdGhpcyA9IChzb3VyY2UsIHRhcmdldCwgZGVmcykgPT4ge1xuICBmb3IgKGxldCBrIGluIGRlZnMpIHtcbiAgICBsZXQgZm4gPSBkZWZzW2tdXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNvdXJjZSwgaywge1xuICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgIGZuLmNhbGwodGFyZ2V0LCBzb3VyY2UpXG4gICAgICAgIHJldHVybiBzb3VyY2VcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH0pXG4gIH1cbn1cblxubGV0IG5vdyA9ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpXG5cbmxldCBkZWxheSA9IG1zID0+IHtcbiAgLy8gc2V0VGltZW91dCgoKSA9PiB7fSwgbXMpXG4gIGxldCB0ID0gcGVyZm9ybWFuY2Uubm93KClcbiAgbGV0IGMgPSB0XG4gIHdoaWxlIChjIC0gdCA8PSBtcykge1xuICAgIC8vIFBJWEkudGlja2VyLnNoYXJlZC51cGRhdGUoYylcbiAgICBjID0gcGVyZm9ybWFuY2Uubm93KClcbiAgfVxufVxuXG5sZXQgYXN5bmMgPSAoY29udGV4dCwgZm4sIGFyZ3MsIGRlbGF5KSA9PiB7XG4gIGlmIChfLmlzTnVtYmVyKGFyZ3MpKSB7XG4gICAgZGVsYXkgPSBhcmdzXG4gICAgYXJncyA9IFtdXG4gIH1cbiAgaWYgKCFfLmlzQXJyYXkoYXJncykpIHtcbiAgICBhcmdzID0gW2FyZ3NdXG4gIH1cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZm4uY2FsbChjb250ZXh0LCAuLi5hcmdzKVxuICB9LCBkZWxheSB8fCAxKVxufVxuXG5sZXQgYnVmZmVyX3RvX3N0cmluZyA9IGIgPT4ge1xuICBsZXQgbGVuID0gYi5sZW5ndGhcbiAgbGV0IGkgPSAwXG4gIGxldCBzID0gJydcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBzICs9IGJbaSsrXS50b1N0cmluZygxNilcbiAgfVxuICByZXR1cm4gc1xufVxuXG5sZXQgc3RyaW5nX3RvX2J1ZmZlciA9IHN0ciA9PiB7XG4gIGxldCBsZW4gPSBzdHIubGVuZ3RoXG4gIGxldCBpID0gMFxuICBsZXQgYiA9IG5ldyBCdWZmZXIoTWF0aC50cnVuYyhzdHIubGVuZ3RoIC8gMikpXG4gIGxldCB4ID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIGxldCBoZXggPSBzdHIuc3Vic3RyKGksIDIpXG4gICAgYlt4KytdID0gcGFyc2VJbnQoaGV4LCAxNilcbiAgICBpICs9IDJcbiAgfVxuICByZXR1cm4gYlxufVxuXG5sZXQgc3RyaW5nX2J1ZmZlciA9IChzdHIsIGxlbiA9IDApID0+IHtcbiAgbGVuID0gbGVuIHx8IHN0ci5sZW5ndGhcbiAgdmFyIGIgPSBuZXcgQnVmZmVyKGxlbilcbiAgYi53cml0ZShzdHIsIDAsIHN0ci5sZW5ndGgsICdhc2NpaScpXG4gIHJldHVybiBiXG59XG5cbmxldCBub3JtYWxpemVNZXNzYWdlcyA9ICguLi5tZXNzYWdlKSA9PiB7XG4gIGxldCBhcmdzID0gW11cbiAgZm9yIChsZXQgbSBvZiBtZXNzYWdlKSB7XG4gICAgaWYgKF8uaXNBcnJheShtKSkge1xuICAgICAgYXJncy5wdXNoKG0uam9pbignLCAnKSlcbiAgICB9XG4gICAgZWxzZSBpZiAoXy5pc1N0cmluZyhtKSkge1xuICAgICAgYXJncy5wdXNoKG0pXG4gICAgfVxuICB9XG4gIHJldHVybiBhcmdzXG59XG5cbmxldCBoZXggPSAodmFsdWUsIHNpemUgPSAzMikgPT4gJyQnICsgXy5wYWRTdGFydCh2YWx1ZS50b1N0cmluZygxNiksIE1hdGgudHJ1bmMoc2l6ZSAvIDQpLCAnMCcpXG5cbmxldCBidWZmZXJfZHVtcCA9IChidWZmZXIsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBsZXQgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDE2XG4gIGxldCBjYXBzID0gb3B0aW9ucy5jYXBzIHx8ICd1cHBlcidcbiAgbGV0IGluZGVudCA9IF8ucmVwZWF0KCcgJywgb3B0aW9ucy5pbmRlbnQgfHwgMClcblxuICBsZXQgemVybyA9IChuLCBtYXgpID0+IHtcbiAgICBuID0gbi50b1N0cmluZygxNilcbiAgICBpZiAoY2FwcyA9PT0gJ3VwcGVyJykgeyBuID0gbi50b1VwcGVyQ2FzZSgpIH1cbiAgICB3aGlsZSAobi5sZW5ndGggPCBtYXgpIHtcbiAgICAgIG4gPSAnMCcgKyBuXG4gICAgfVxuICAgIHJldHVybiBuXG4gIH1cblxuICBsZXQgbGVuID0gTWF0aC5taW4oYnVmZmVyLmJ5dGVMZW5ndGgsIG9wdGlvbnMubGVuZ3RoIHx8IGJ1ZmZlci5ieXRlTGVuZ3RoKVxuICBsZXQgcm93cyA9IE1hdGguY2VpbChsZW4gLyB3aWR0aClcbiAgbGV0IGxhc3QgPSBsZW4gJSB3aWR0aCB8fCB3aWR0aFxuICBsZXQgb2Zmc2V0TGVuZ3RoID0gbGVuLnRvU3RyaW5nKDE2KS5sZW5ndGhcbiAgaWYgKG9mZnNldExlbmd0aCA8IDYpIHsgb2Zmc2V0TGVuZ3RoID0gNiB9XG5cbiAgbGV0IGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcilcblxuICBsZXQgc3RyID0gaW5kZW50ICsgJ09mZnNldCdcbiAgd2hpbGUgKHN0ci5sZW5ndGggPCBvZmZzZXRMZW5ndGgpIHtcbiAgICBzdHIgKz0gJyAnXG4gIH1cblxuICBzdHIgKz0gJyAgJ1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgIHN0ciArPSAnICcgKyB6ZXJvKGksIDIpXG4gIH1cblxuICBpZiAobGVuKSB7XG4gICAgc3RyICs9ICdcXG4nXG4gIH1cblxuICBsZXQgYiA9IDBcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgIHN0ciArPSBpbmRlbnQgKyB6ZXJvKGIsIG9mZnNldExlbmd0aCkgKyAnICAnXG4gICAgbGV0IGxhc3RCeXRlcyA9IGkgPT09IHJvd3MgLSAxID8gbGFzdCA6IHdpZHRoXG4gICAgbGV0IGxhc3RTcGFjZXMgPSB3aWR0aCAtIGxhc3RCeXRlc1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsYXN0Qnl0ZXM7IGorKykge1xuICAgICAgc3RyICs9ICcgJyArIHplcm8oYXJyW2JdLCAyKVxuICAgICAgYisrXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsYXN0U3BhY2VzOyBqKyspIHtcbiAgICAgIHN0ciArPSAnICAgJ1xuICAgIH1cblxuICAgIGIgLT0gbGFzdEJ5dGVzXG4gICAgc3RyICs9ICcgICAnXG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxhc3RCeXRlczsgaisrKSB7XG4gICAgICBsZXQgdiA9IGFycltiXVxuICAgICAgc3RyICs9IHYgPiAzMSAmJiB2IDwgMTI3IHx8IHYgPiAxNTkgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKHYpIDogJy4nXG4gICAgICBiKytcbiAgICB9XG5cbiAgICBzdHIgKz0gJ1xcbidcbiAgfVxuXG4gIHJldHVybiBzdHJcbn1cblxubGV0IHV0b2EgPSBzdHIgPT4gd2luZG93LmJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpKVxuXG5sZXQgYXRvdSA9IHN0ciA9PiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKHdpbmRvdy5hdG9iKHN0cikpKVxuXG53aW5kb3cudXRvYSA9IHV0b2FcbndpbmRvdy5hdG91ID0gYXRvdVxuXG5cbmxldCBpbnN0YW5jZUZ1bmN0aW9uID0gKHRhcmdldCwgbmFtZSwgZm4sIGZvcmNlID0gZmFsc2UpID0+IHtcbiAgaWYgKGZvcmNlIHx8ICF0YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICB2YWx1ZTogZm4sXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9KVxuICB9XG59XG5cbmxldCBpbnN0YW5jZUZ1bmN0aW9ucyA9ICh0YXJnZXQsIHNvdXJjZSwgbmFtZXMpID0+IHtcbiAgZm9yIChsZXQgbiBvZiBuYW1lcykge1xuICAgIGlmIChfLmlzQXJyYXkobikpIHtcbiAgICAgIGluc3RhbmNlRnVuY3Rpb24odGFyZ2V0LCBuWzBdLCBzb3VyY2VbblsxXV0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaW5zdGFuY2VGdW5jdGlvbih0YXJnZXQsIG4sIHNvdXJjZVtuXSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgXyxcbiAgbmFtZSxcbiAgdmVyc2lvbixcbiAgZWxlY3Ryb24sXG4gIGRpYWxvZyxcbiAgb3BlbkZpbGUsXG4gIHNhdmVGaWxlLFxuICBtZXNzYWdlQm94LFxuICByZW1vdGUsXG4gIHNjcmVlbixcbiAgQnJvd3NlcldpbmRvdyxcbiAgYXBwLFxuICBmcyxcbiAgcGF0aCxcbiAgdXNlclBhdGgsXG4gIElTX1dJTixcbiAgSVNfT1NYLFxuICBJU19MSU5VWCxcbiAgZGlycyxcbiAgcmFmLFxuICBub3csXG4gIE1peGluLFxuICBtaXgsXG4gIG1hcF9nZXR0ZXJzLFxuICBtYXBfZ2V0dGVyc19yZXR1cm5fdGhpcyxcbiAgZGVsYXksXG4gIGFzeW5jLFxuICBidWZmZXJfdG9fc3RyaW5nLFxuICBzdHJpbmdfdG9fYnVmZmVyLFxuICBzdHJpbmdfYnVmZmVyLFxuICBub3JtYWxpemVNZXNzYWdlcyxcbiAgaGV4LFxuICBidWZmZXJfZHVtcCxcbiAgdXRvYSxcbiAgYXRvdSxcbiAgaW5zdGFuY2VGdW5jdGlvbixcbiAgaW5zdGFuY2VGdW5jdGlvbnMsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdXRpbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJhZlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJhZlwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBlcmZvcm1hbmNlLW5vd1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBlcmZvcm1hbmNlLW5vd1wiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1peHdpdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtaXh3aXRoXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJlbGVjdHJvblwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuZGVyc2NvcmUtcGx1c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVuZGVyc2NvcmUtcGx1c1wiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaFwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1wcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnMtcHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJQSVhJLlBvaW50LnByb3RvdHlwZS5kaXN0YW5jZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIE1hdGguc3FydCgodGhpcy54IC0gdGFyZ2V0LngpICogKHRoaXMueCAtIHRhcmdldC54KSArICh0aGlzLnkgLSB0YXJnZXQueSkgKiAodGhpcy55IC0gdGFyZ2V0LnkpKVxufVxuXG5QSVhJLlBvaW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF8udGVtcGxhdGUoJygje3h9LCAje3l9KScpKHRoaXMpXG59XG5cblBJWEkuUmVjdGFuZ2xlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF8udGVtcGxhdGUoJygje3h9LCAje3l9LCAje3ggKyB3aWR0aH0sICN7eSArIGhlaWdodH0pKCN7d2lkdGh9LCAje2hlaWdodH0pJykodGhpcylcbn1cblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gIGJvdW5kc2NoZWNrOiBmYWxzZSxcblxuICB0eXBlOiAnaTMyJyxcblxuICBtZW1vcnk6IHtcbiAgICBzaXplOiA1MTIgKiAxMDI0LFxuICB9LFxuXG4gIG1lbW9yeV9tYW5hZ2VyOiB7XG4gICAgY29sbGVjdF9kZWxheTogMzAgKiAxMDAwLFxuICB9LFxuXG4gIGJvcmRlcjoge1xuICAgIHNpemU6IDY0LFxuICAgIGNvbG9yOiAxLFxuICB9LFxuXG4gIGd1aWRlbzoge1xuICAgIHdpZHRoOiAzMjAsXG4gICAgaGVpZ2h0OiAyNDAsXG4gICAgc2NhbGU6IDMsXG4gIH0sXG5cbiAgcmFpbmJvdzoge1xuICAgIGNvdW50OiAxNixcbiAgICBkYXRhX2Zvcm1hdDogJ2kzMicsXG4gIH0sXG5cbiAgZm9uem86IHtcbiAgICBjb3VudDogMjU2LFxuICAgIHdpZHRoOiA3LFxuICAgIGhlaWdodDogOSxcbiAgfSxcblxuICBvcndlbGw6IHtcbiAgICB3aWR0aDogMzIwIC8gNCxcbiAgICBoZWlnaHQ6IDI0MCAvIDYsXG4gIH0sXG5cbiAgYmVhZ2xlOiB7XG4gICAgd2lkdGg6IDQsXG4gICAgaGVpZ2h0OiA2LFxuICAgIGNvbG9yOiAxNSxcbiAgICBibGlua3JhdGU6IDUwMCxcbiAgfSxcblxuICB2aW9sZXQ6IHtcbiAgICBjb3VudDogMzIsXG4gICAgd2lkdGg6IDE2LFxuICAgIGhlaWdodDogMTYsXG4gIH0sXG5cbiAga2VuOiB7XG4gICAgY291bnQ6IDI1NixcbiAgfSxcblxuICBtaWNrZXk6IHtcbiAgICBjb3VudDogMTcsXG4gICAgd2lkdGg6IDYsXG4gICAgaGVpZ2h0OiA3LFxuICAgIGNvbG9yOiAxNSxcbiAgICBmcmFtZTogMCxcbiAgICBkYmxDbGlja0RlbGF5OiAyNTAsXG4gICAgZGJsQ2xpY2tEaXN0YW5jZTogOCxcbiAgfSxcblxuICBuZXR3b3JrOiB7XG4gICAgY291bnQ6IDMyICogMTAyNCxcbiAgfSxcblxuICBhbHRvOiB7XG4gICAgY291bnQ6IDQgKiAxMDI0LFxuICB9LFxuXG4gIGNoYXJzX21hcDoge1xuICAgICcuJzogMCxcbiAgICByOiAxLFxuICAgIGc6IDIsXG4gICAgeTogMyxcbiAgICBiOiA0LFxuICAgIHA6IDUsXG4gICAgYzogNixcbiAgICBFOiA3LFxuICAgIGU6IDgsXG4gICAgUjogOSxcbiAgICBHOiAxMCxcbiAgICBZOiAxMSxcbiAgICBCOiAxMixcbiAgICBQOiAxMyxcbiAgICBDOiAxNCxcbiAgICB3OiAxNSxcbiAgICAnICc6IDE2LFxuICB9XG59XG5cbmxldCBlcnJvcnMgPSAwXG5cbmxldCBlcnJvciA9ICh0LCBtc2cpID0+IHtcbiAgZGVidWdnZXJcbiAgZXJyb3JzKytcbiAgY29uc29sZS5lcnJvcihtc2csICdhdCcsIHQudmFsdWUsICcoJyArIHQucm93ICsgJywnICsgdC5jb2wgKyAnKScpXG59XG5cbmxldCBydW50aW1lX2Vycm9yID0gY29kZSA9PiB7XG4gIGxldCBlID0gJ1Vua25vd24gcnVudGltZSBlcnJvcidcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSAweDAxOlxuICAgICAgZSA9ICdPdXQgb2YgbWVtb3J5J1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDI6XG4gICAgICBlID0gJ1N0YWNrIHVuZGVyZmxvdydcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDAzOlxuICAgICAgZSA9ICdTdGFjayBvdmVyZmxvdydcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA0OlxuICAgICAgZSA9ICdJbnZhbGlkIHN0YWNrIGFkZHJlc3MnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNTpcbiAgICAgIGUgPSAnU3RhY2sgYWRkcmVzcyBhbHJlYWR5IGFzc2lnbmVkJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDY6XG4gICAgICBlID0gJ0ludGVycnVwdCBhbHJlYWR5IGV4aXN0cydcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA3OlxuICAgICAgZSA9ICdJbnRlcnJ1cHQgbm90IGZvdW5kJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDg6XG4gICAgICBlID0gJ0FkZHJlc3Mgb3V0IG9mIGJvdW5kcydcbiAgICAgIGJyZWFrXG4gIH1cbiAgY29uc29sZS5lcnJvcihlKVxufVxuXG5sZXQgaW9fZXJyb3IgPSBjb2RlID0+IHtcbiAgbGV0IGUgPSAnSS9PIHJ1bnRpbWUgZXJyb3InXG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgMHgwMTpcbiAgICAgIGUgPSAnRmlsZSBub3QgZm91bmQnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwMjpcbiAgICAgIGUgPSAnQ2Fubm90IG9wZW4gZmlsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDAzOlxuICAgICAgZSA9ICdDYW5ub3QgY2xvc2UgZmlsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA0OlxuICAgICAgZSA9ICdDYW5ub3QgbG9jayBmaWxlJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDU6XG4gICAgICBlID0gJ0Nhbm5vdCB1bmxvY2sgZmlsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA2OlxuICAgICAgZSA9ICdJbnZhbGlkIGZpbGUgaWQnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNzpcbiAgICAgIGUgPSAnQSBmbG9wcHkgaXMgYWxyZWFkeSBpbiB0aGUgZHJpdmUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwODpcbiAgICAgIGUgPSAnTm8gZmxvcHB5IGluIGRyaXZlJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDk6XG4gICAgICBlID0gJ0Nhbm5vdCBkZWxldGUgZmlsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDEwOlxuICAgICAgZSA9ICdEcml2ZSBpcyBub3Qgc3Bpbm5pbmcnXG4gICAgICBicmVha1xuICB9XG4gIGNvbnNvbGUuZXJyb3IoZSlcbn1cblxuXG5leHBvcnQge1xuICBkZWZhdWx0cyxcbiAgZXJyb3JzLFxuICBlcnJvcixcbiAgcnVudGltZV9lcnJvcixcbiAgaW9fZXJyb3IsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvZ2xvYmFscy5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL2Nzc25leHQtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uL25vZGVfbW9kdWxlcy9jc3NuZXh0LWxvYWRlci9pbmRleC5qcyEuL21haW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL2Nzc25leHQtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3R5bGUvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zdHlsZS9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHVCQUErQztFQUMvQyxZQUF5QjtDQUMxQjs7QUFFRDtFQUNFLHdCQUF3QjtDQUN6QlwiLFwiZmlsZVwiOlwibWFpbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoLi9jb2xvcnMuY3NzKTtcXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbmNhbnZhcyB7XFxuICBjdXJzb3I6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L2Nzc25leHQtbG9hZGVyIS4vc3R5bGUvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW87XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbWVtbztcblx0XHR9O1xuXHR9LFxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qoc2VsZi5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuXHR9KSxcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG5cdH0pLFxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2Vcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XG5cdHJldHVybiBsaW5rRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdGlmKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XG5cblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKVxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBjbGFzcyBFdmVudCB7XG5cbiAgY29uc3RydWN0b3IgKHRhcmdldCwgbmFtZSwgZGF0YSwgYnViYmxlcyA9IHRydWUpIHtcbiAgICB0aGlzLl9fZXZlbnRPYmplY3QgPSB0cnVlXG4gICAgdGhpcy50aW1lU3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKVxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0XG4gICAgdGhpcy50eXBlID0gbmFtZVxuICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICB0aGlzLmJ1YmJsZXMgPSBidWJibGVzXG4gICAgdGhpcy5zdG9wcGVkID0gZmFsc2VcbiAgICB0aGlzLnN0b3BwZWRJbW1lZGlhdGUgPSBmYWxzZVxuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlXG4gIH1cblxuICBzdG9wICgpIHtcbiAgICB0aGlzLnN0b3BwZWQgPSB0cnVlXG4gIH1cblxuICBzdG9wSW1tZWRpYXRlICgpIHtcbiAgICB0aGlzLnN0b3BwZWRJbW1lZGlhdGUgPSB0cnVlXG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24gKCkge1xuICAgIHRoaXMuc3RvcHBlZCA9IHRydWVcbiAgfVxuXG4gIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAoKSB7XG4gICAgdGhpcy5zdG9wcGVkSW1tZWRpYXRlID0gdHJ1ZVxuICB9XG5cbiAgY2FuY2VsQnViYmxlICgpIHtcbiAgICB0aGlzLmJ1YmJsZXMgPSBmYWxzZVxuICB9XG5cbiAgcHJldmVudERlZmF1bHQgKCkge1xuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWVcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBFbWl0dGVyIHtcblxuICBvbiAobmFtZSwgZm4sIG9yZGVyID0gMCkge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fVxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSA9IHRoaXMuX2xpc3RlbmVyc1tuYW1lXSB8fCBbXVxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXS5wdXNoKHsgZm4sIG9yZGVyIH0pXG4gICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdID0gXy5zb3J0QnkodGhpcy5fbGlzdGVuZXJzW25hbWVdLCAnb3JkZXInKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBvbmNlIChuYW1lLCBmbikge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fVxuXG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgbGV0IG9uY2VIYW5kbGVyV3JhcHBlciA9ICgpID0+IHtcbiAgICAgIGZuLmFwcGx5KHRoYXQub2ZmKG5hbWUsIG9uY2VIYW5kbGVyV3JhcHBlciksIGFyZ3VtZW50cylcbiAgICB9XG4gICAgb25jZUhhbmRsZXJXcmFwcGVyLl9vcmlnaW5hbEhhbmRsZXIgPSBmblxuXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgb25jZUhhbmRsZXJXcmFwcGVyKVxuICB9XG5cbiAgb2ZmIChuYW1lLCBmbikge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fVxuXG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgbGV0IGxpc3QgPSB0aGlzLl9saXN0ZW5lcnNbbmFtZV1cbiAgICBsZXQgaSA9IGZuID8gbGlzdC5sZW5ndGggOiAwXG5cbiAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgaWYgKGxpc3RbaV0uZm4gPT09IGZuIHx8IGxpc3RbaV0uX29yaWdpbmFsSGFuZGxlciA9PT0gZm4pIHtcbiAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXy5pc0VtcHR5KGxpc3QpKSB7XG4gICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW25hbWVdXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGVtaXQgKG5hbWUsIGRhdGEpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cblxuICAgIGxldCBvcmlnRXZlbnREYXRhXG5cbiAgICBpZiAoIWRhdGEgfHwgZGF0YS5fX2V2ZW50T2JqZWN0ICE9PSB0cnVlKSB7XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLmRhdGEgJiYgZGF0YS50eXBlKSB7XG4gICAgICAgIG9yaWdFdmVudERhdGEgPSBkYXRhXG4gICAgICAgIGRhdGEgPSBkYXRhLmRhdGFcbiAgICAgIH1cbiAgICAgIGRhdGEgPSBuZXcgRXZlbnQodGhpcywgbmFtZSwgZGF0YSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICBsZXQgbGlzdGVuZXJzID0gXy5jbG9uZSh0aGlzLl9saXN0ZW5lcnNbbmFtZV0pXG4gICAgICBmb3IgKGxldCBsIG9mIGxpc3RlbmVycykge1xuICAgICAgICBsLmZuLmNhbGwodGhpcywgZGF0YSlcbiAgICAgICAgaWYgKGRhdGEuc3RvcHBlZEltbWVkaWF0ZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkYXRhLnN0b3BwZWQpIHtcbiAgICAgICAgaWYgKG9yaWdFdmVudERhdGEpIHtcbiAgICAgICAgICBvcmlnRXZlbnREYXRhLnN0b3BwZWQgPSB0cnVlXG4gICAgICAgICAgZGF0YS5jYW5jZWxCdWJibGUoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuYnViYmxlcyAmJiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5lbWl0KSB7XG4gICAgICB0aGlzLnBhcmVudC5lbWl0KG5hbWUsIGRhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZFxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9lbWl0dGVyLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgcGF0aCB9IGZyb20gJy4uL3V0aWxzLmpzJ1xuXG5pbXBvcnQgVG9rZW5UeXBlcyBmcm9tICcuL3Rva2Vucy90eXBlcy5qcydcbmltcG9ydCBDb25zdFRva2VuIGZyb20gJy4vdG9rZW5zL2NvbnN0LmpzJ1xuaW1wb3J0IEluY2x1ZGVUb2tlbiBmcm9tICcuL3Rva2Vucy9pbmNsdWRlLmpzJ1xuXG5jbGFzcyBUb2tlbiB7XG5cbiAgY29uc3RydWN0b3IgKGxleGVyLCB0eXBlLCB2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICAgIGlmIChsZXhlciBpbnN0YW5jZW9mIFRva2VuKSB7XG4gICAgICBsZXQgdCA9IGxleGVyXG4gICAgICB0aGlzLmxleGVyID0gdC5sZXhlclxuICAgICAgdGhpcy5fdHlwZSA9IHQuX3R5cGVcbiAgICAgIHRoaXMuX3Jlc2VydmVkID0gdC5fcmVzZXJ2ZWRcbiAgICAgIHRoaXMudmFsdWUgPSB0LnZhbHVlXG4gICAgICB0aGlzLnN0YXJ0ID0gXy5jbG9uZSh0LnN0YXJ0KVxuICAgICAgdGhpcy5lbmQgPSBfLmNsb25lKHQuZW5kKVxuICAgICAgdGhpcy5sZW5ndGggPSB0LnZhbHVlLmxlbmd0aFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMubGV4ZXIgPSBsZXhlclxuICAgICAgdGhpcy5fdHlwZSA9IHR5cGVcbiAgICAgIHRoaXMuX3Jlc2VydmVkID0gZmFsc2VcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCAnJ1xuICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0IHx8IHsgb2Zmc2V0OiAwLCBsaW5lOiAwLCBjb2x1bW46IDAgfVxuICAgICAgdGhpcy5lbmQgPSBlbmQgfHwgeyBvZmZzZXQ6IDAsIGxpbmU6IDAsIGNvbHVtbjogMCB9XG4gICAgICB0aGlzLmxlbmd0aCA9IHRoaXMuZW5kLm9mZnNldCAtIHRoaXMuc3RhcnQub2Zmc2V0XG4gICAgfVxuICB9XG5cbiAgaXMgKGUpIHtcbiAgICBpZiAoXy5pc1N0cmluZyhlKSkge1xuICAgICAgbGV0IHBhcnRzID0gZS5zcGxpdCgnfCcpXG4gICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKGxldCBwIG9mIHBhcnRzKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXMocCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGUgPT09ICcuJyB8fCB0aGlzLnR5cGUgPT09IGUgfHwgdGhpcy52YWx1ZSA9PT0gZVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChfLmlzUmVnRXhwKGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy50eXBlLm1hdGNoKGUpIHx8IHRoaXMudmFsdWUubWF0Y2goZSlcbiAgICB9XG4gICAgZWxzZSBpZiAoXy5pc0FycmF5KGUpKSB7XG4gICAgICBmb3IgKGxldCBpIG9mIGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXMoaSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZ2V0IHR5cGUgKCkge1xuICAgIGlmICh0aGlzLl90eXBlID09PSAnbWF0aF9hc3NpZ24nIHx8IHRoaXMuX3R5cGUgPT09ICdsb2dpY19hc3NpZ24nKSB7XG4gICAgICB0aGlzLl90eXBlID0gJ2Fzc2lnbidcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5fdHlwZSA9PT0gJ3N1cGVyJykge1xuICAgICAgdGhpcy5fdHlwZSA9ICdzdXBlcidcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3R5cGVcbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gXy50ZW1wbGF0ZSgnXCIje3ZhbHVlfVwiIGF0ICN7cGF0aH0oI3tsaW5lfToje2NvbHVtbn0pJykoeyB2YWx1ZTogdGhpcy52YWx1ZSwgbGluZTogdGhpcy5zdGFydC5saW5lLCBjb2x1bW46IHRoaXMuc3RhcnQuY29sdW1uLCBwYXRoOiBwYXRoLmJhc2VuYW1lKHRoaXMubGV4ZXIucGF0aCkgfSlcbiAgfVxuXG59XG5cblxuY2xhc3MgRW1wdHlDbGFzcyB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXhlciBleHRlbmRzIG1peChFbXB0eUNsYXNzKS53aXRoKFxuICBUb2tlblR5cGVzLFxuICBDb25zdFRva2VuLFxuICBJbmNsdWRlVG9rZW5cbikge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAocGF0aCwgdGV4dCkge1xuICAgIHRoaXMuZXJyb3JzID0gMFxuICAgIHRoaXMucGF0aCA9IHBhdGggfHwgJydcbiAgICB0aGlzLnRleHQgPSB0ZXh0IHx8ICcnXG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLnRleHQubGVuZ3RoXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgdGhpcy5saW5lID0gMVxuICAgIHRoaXMuY29sdW1uID0gMVxuICAgIHRoaXMudG9rZW5zID0gW11cbiAgICB0aGlzLmNvbnN0YW50cyA9IHt9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHZhbGlkT2Zmc2V0IChvZmZzZXQpIHsgcmV0dXJuIG9mZnNldCA+PSAwICYmIG9mZnNldCA8IHRoaXMubGVuZ3RoIH1cblxuICBlb3MgKCkgeyByZXR1cm4gdGhpcy52YWxpZE9mZnNldCh0aGlzLm9mZnNldCkgfVxuXG4gIGNoYXJfYXQgKGkpIHsgcmV0dXJuIHRoaXMudGV4dC5jaGFyQXQoaSkgfVxuXG4gIHN1YnRleHQgKGkpIHsgcmV0dXJuIHRoaXMudGV4dC5zdWJzdHJpbmcoaSkgfVxuXG4gIHBlZWsgKCkge1xuICAgIGxldCBwb3NfaW5mbyA9IChvZmZzZXQsIGxpbmUsIGNvbHVtbikgPT4geyByZXR1cm4geyBvZmZzZXQsIGxpbmUsIGNvbHVtbiB9IH1cblxuICAgIGxldCB0b2tlbiA9IG51bGxcbiAgICBsZXQgbCA9IF8ubGFzdCh0aGlzLnRva2VucylcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5vZmZzZXRcbiAgICBsZXQgbGVuID0gMFxuXG4gICAgd2hpbGUgKFsnICcsICdcXHQnXS5pbmRleE9mKHRoaXMuY2hhcl9hdChvZmZzZXQpKSAhPT0gLTEpIHtcbiAgICAgIGlmIChsICYmICFsLm5leHRfaXNfc3BhY2UpIHtcbiAgICAgICAgbC5uZXh0X2lzX3NwYWNlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnZhbGlkT2Zmc2V0KG9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIHsgdG9rZW4sIG9mZnNldCB9XG4gICAgICB9XG4gICAgICBvZmZzZXQrK1xuICAgIH1cblxuICAgIGxldCBvbGRfb2Zmc2V0ID0gb2Zmc2V0XG5cbiAgICBsZXQgbGluZSA9IHRoaXMubGluZVxuICAgIGxldCBjb2x1bW4gPSB0aGlzLmNvbHVtblxuICAgIGZvciAobGV0IGsgaW4gdGhpcy50b2tlbl90eXBlcykge1xuICAgICAgbGV0IHIgPSB0aGlzLnN1YnRleHQob2Zmc2V0KS5tYXRjaCh0aGlzLnRva2VuX3R5cGVzW2tdKVxuICAgICAgaWYgKHIgJiYgci5pbmRleCA9PT0gMCkge1xuICAgICAgICBsZXQgdmFsdWUgPSByLmxlbmd0aCA+IDEgPyByLnNsaWNlKDEpLmpvaW4oJycpIDogci5qb2luKCcnKVxuICAgICAgICBsZW4gPSByWzBdLmxlbmd0aFxuICAgICAgICB0b2tlbiA9IG5ldyBUb2tlbih0aGlzLCBrLCB2YWx1ZSwgcG9zX2luZm8ob2Zmc2V0LCBsaW5lLCBjb2x1bW4pLCBwb3NfaW5mbyhvZmZzZXQgKyBsZW4sIGxpbmUsIGNvbHVtbiArIGxlbiAtIDEpKVxuICAgICAgICBvZmZzZXQgKz0gbGVuXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvZmZzZXQgPT09IG9sZF9vZmZzZXQpIHtcbiAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0ICsgMVxuICAgIH1cbiAgICByZXR1cm4geyB0b2tlbiwgb2Zmc2V0LCBsZW4gfVxuICB9XG5cbiAgaW5zZXJ0VG9rZW4gKHQpIHtcbiAgICBsZXQgYyA9IHRoaXMuY29uc3RhbnRzW3QudmFsdWVdXG4gICAgaWYgKF8uaXNBcnJheShjKSkge1xuICAgICAgZm9yIChsZXQgdCBvZiBjKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0VG9rZW4odClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHQpXG4gICAgfVxuICB9XG5cbiAgbmV4dCAoKSB7XG4gICAgbGV0IHsgdG9rZW4sIG9mZnNldCwgbGVuIH0gPSB0aGlzLnBlZWsoKVxuXG4gICAgd2hpbGUgKHRva2VuICYmIHRva2VuLl90eXBlID09PSAnY29tbWVudCcpIHtcbiAgICAgIGxldCB0ID0gdGhpcy5wZWVrKClcbiAgICAgIHRva2VuID0gdC50b2tlblxuICAgICAgb2Zmc2V0ID0gdC5vZmZzZXRcbiAgICAgIGxlbiA9IHQubGVuXG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgICAgdGhpcy5jb2x1bW4gKz0gbGVuICsgMVxuICAgIH1cblxuICAgIGlmICh0b2tlbikge1xuICAgICAgaWYgKHRva2VuLnR5cGUgPT09ICdjb25zdCcpIHtcbiAgICAgICAgdG9rZW4gPSB0aGlzLmNvbnN0X3Rva2VuKHRva2VuLCBvZmZzZXQsIGxlbilcbiAgICAgIH1cblxuICAgICAgZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHRva2VuID0gdGhpcy5pbmNsdWRlX3Rva2VuKHRva2VuLCBvZmZzZXQsIGxlbilcbiAgICAgIH1cblxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0VG9rZW4odG9rZW4pXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0XG4gICAgICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuICYmIHRva2VuLmlzKCdlb2wnKSkge1xuICAgICAgICB0aGlzLmxpbmUrK1xuICAgICAgICB0aGlzLmNvbHVtbiA9IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5cbiAgfVxuXG4gIHJ1biAocGF0aCwgdGV4dCkge1xuICAgIGlmICghdGV4dCkge1xuICAgICAgdGV4dCA9IHBhdGhcbiAgICAgIHBhdGggPSAnJ1xuICAgIH1cbiAgICB0aGlzLnJlc2V0KHBhdGgsIHRleHQpXG4gICAgd2hpbGUgKHRoaXMudmFsaWRPZmZzZXQodGhpcy5vZmZzZXQpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZHVtcCAoKSB7XG4gICAgY29uc29sZS5pbmZvKCdsZXhlciBkdW1wJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRva2VucylcbiAgICBjb25zb2xlLmxvZygnJylcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvbGV4ZXIuanMiLCJpbXBvcnQgYXNzaWduX3Rva2VucyBmcm9tICcuL2Fzc2lnbnMuanMnXG5pbXBvcnQgZGVsaW1pdGVyX3Rva2VucyBmcm9tICcuL2RlbGltaXRlcnMuanMnXG5pbXBvcnQgY29tbWVudF90b2tlbnMgZnJvbSAnLi9jb21tZW50cy5qcydcbmltcG9ydCBncm91cF90b2tlbnMgZnJvbSAnLi9ncm91cHMuanMnXG5pbXBvcnQgbGl0ZXJhbF90b2tlbnMgZnJvbSAnLi9saXRlcmFscy5qcydcbmltcG9ydCBvcGVyYXRvcl90b2tlbnMgZnJvbSAnLi9vcGVyYXRvcnMuanMnXG5pbXBvcnQgcHJpbWl0aXZlX3Rva2VucyBmcm9tICcuL3ByaW1pdGl2ZXMuanMnXG5pbXBvcnQgcmVzZXJ2ZWRfdG9rZW5zIGZyb20gJy4vcmVzZXJ2ZWQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgVG9rZW5UeXBlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGdldCB0b2tlbl90eXBlcyAoKSB7XG4gICAgaWYgKCF0aGlzLl90b2tlbl90eXBlcykge1xuICAgICAgdGhpcy5fdG9rZW5fdHlwZXMgPSBfLmV4dGVuZCh7fSxcbiAgICAgICAgZGVsaW1pdGVyX3Rva2VucyxcbiAgICAgICAgY29tbWVudF90b2tlbnMsXG4gICAgICAgIHByaW1pdGl2ZV90b2tlbnMsXG4gICAgICAgIHJlc2VydmVkX3Rva2VucyxcbiAgICAgICAgbGl0ZXJhbF90b2tlbnMsXG4gICAgICAgIGdyb3VwX3Rva2VucyxcbiAgICAgICAgb3BlcmF0b3JfdG9rZW5zLFxuICAgICAgICBhc3NpZ25fdG9rZW5zXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90b2tlbl90eXBlc1xuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL3R5cGVzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhc3NpZ246IC9eKD0pW149Pl0vLFxuICBtYXRoX2Fzc2lnbjogL15bXFwrXFwtXFwqXFwvJV09LyxcbiAgbG9naWNfYXNzaWduOiAvXlshJlxcfFxcXl09LyxcbiAgZm5fYXNzaWduOiAvXj0+Lyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvYXNzaWducy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZW9sOiAvXltcXHJcXG5dfDsvLFxuICBjb21tYTogL14sLyxcbiAgY29sb246IC9eOig/PVteQS1aX10pL2ksXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2RlbGltaXRlcnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbW1lbnQ6IC9eXFwvXFwvKFteXFxyXFxuXSopLyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvY29tbWVudHMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG9wZW5fcGFyZW46IC9eXFwoLyxcbiAgY2xvc2VfcGFyZW46IC9eXFwpLyxcblxuICBvcGVuX2JyYWNrZXQ6IC9eXFxbLyxcbiAgY2xvc2VfYnJhY2tldDogL15cXF0vLFxuXG4gIG9wZW5fY3VybHk6IC9eXFx7LyxcbiAgY2xvc2VfY3VybHk6IC9eXFx9Lyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvZ3JvdXBzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBrZXk6IC9eOihbQS1aX11bQS1aXzAtOV0qKS9pLFxuXG4gIGlkOiAvXihbQS1aX11bQS1aXzAtOV0qKS9pLFxuICBpZF9maWVsZDogL15cXC4oW0EtWl9dW0EtWl8wLTldKikvaSxcblxuICB0aGlzOiAvXkAoPz1bXkEtWl9dKS9pLFxuICB0aGlzX2ZpZWxkOiAvXkAoW0EtWl9dW0EtWl8wLTldKikvaSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvbGl0ZXJhbHMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHN5bWJvbDogL15bXFwkXS8sXG5cbiAgbWF0aDogL15bXFwrXFwtXFwqXFwvJV1bXj1dLyxcbiAgbG9naWM6IC9eWyEmXFx8XFxeXVtePV0vLFxuICBjb21wOiAvXj58PHw+PXw8PXwhPXw9PS8sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL29wZXJhdG9ycy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaGV4OiAvXlxcJChbMC05QS1GXSspfDB4KFswLTlBLUZdKykvaSxcbiAgbnVtYmVyOiAvXihbLStdP1swLTldKlxcLj9bMC05XSsoW2VFXVstK10/WzAtOV0rKT8pLyxcblxuICBzdHJpbmc6IC9eXCJ8JyhbXlwiXSopXCJ8Jy8sXG4gIGNoYXI6IC9eJyguKScvLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9wcmltaXRpdmVzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBpbmNsdWRlOiAvXiNcIihbXlwiXSopXCIvaSxcblxuICBjb25zdDogL14jKFtBLVpfXVtBLVpfMC05XSopL2ksXG5cbiAgcmVzZXJ2ZWQ6IC9eKHB1dHN8cHV0YykvaSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvcmVzZXJ2ZWQuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQ29uc3RUb2tlbiBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGNvbnN0X3Rva2VuICh0b2tlbiwgb2Zmc2V0LCBsZW4pIHtcbiAgICBsZXQgYyA9IFtdXG4gICAgdGhpcy5jb25zdGFudHNbdG9rZW4udmFsdWVdID0gY1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0XG4gICAgdGhpcy5jb2x1bW4gKz0gbGVuICsgMVxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgcCA9IHRoaXMucGVlaygpXG4gICAgICB0b2tlbiA9IHAudG9rZW5cbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICB0aGlzLm9mZnNldCA9IHAub2Zmc2V0XG4gICAgICAgIHRoaXMuY29sdW1uICs9IHAubGVuICsgMVxuICAgICAgfVxuICAgICAgaWYgKCF0b2tlbiB8fCB0b2tlbi5pcygnZW9sJykpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBjLnB1c2godG9rZW4pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b2tlblxuICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9jb25zdC5qcyIsImltcG9ydCB7IExleGVyIH0gZnJvbSAnLi4vbGV4ZXIuanMnXG5pbXBvcnQgeyBwYXRoLCBkaXJzLCBmcyB9IGZyb20gJy4uLy4uL3V0aWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEluY2x1ZGVUb2tlbiBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGluY2x1ZGVfdG9rZW4gKHRva2VuLCBvZmZzZXQsIGxlbikge1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0XG4gICAgdGhpcy5jb2x1bW4gKz0gbGVuICsgMVxuICAgIGxldCBmbiA9IHRva2VuLnZhbHVlICsgKHBhdGguZXh0bmFtZSh0b2tlbi52YWx1ZSkgPT09ICcnID8gJy5zaHAnIDogJycpXG4gICAgbGV0IHBuID0gcGF0aC5qb2luKF9fZGlybmFtZSwgZm4pXG4gICAgdHJ5IHtcbiAgICAgIGZzLnN0YXRTeW5jKHBuKVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcG4gPSBwYXRoLmpvaW4oZGlycy51c2VyLCBmbilcbiAgICAgICAgZnMuc3RhdFN5bmMocG4pXG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICBwbiA9ICcnXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwbiAhPT0gJycpIHtcbiAgICAgIGxldCBzcmMgPSBmcy5yZWFkRmlsZVN5bmMocG4sICd1dGY4JylcbiAgICAgIGxldCBseCA9IG5ldyBMZXhlcigpXG4gICAgICBseC5ydW4ocG4sIHNyYylcbiAgICAgIGlmICghbHguZXJyb3JzKSB7XG4gICAgICAgIF8uZXh0ZW5kKHRoaXMuY29uc3RhbnRzLCBseC5jb25zdGFudHMpXG4gICAgICAgIHRoaXMudG9rZW5zID0gdGhpcy50b2tlbnMuY29uY2F0KGx4LnRva2VucylcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRva2VuXG4gIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2luY2x1ZGUuanMiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnLi4vZ2xvYmFscy5qcydcbmltcG9ydCB7IEZyYW1lcyB9IGZyb20gJy4vZnJhbWUuanMnXG5cbmltcG9ydCBLZXlMaXRlcmFsIGZyb20gJy4vZ3JhbW1hci9leHByZXNzaW9ucy9rZXlfbGl0ZXJhbC5qcydcblxuaW1wb3J0IFN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvc3RhdGVtZW50cy5qcydcbmltcG9ydCBJZFN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvaWQuanMnXG5pbXBvcnQgQXNzaWduU3RhdGVtZW50cyBmcm9tICcuL2dyYW1tYXIvc3RhdGVtZW50cy9hc3NpZ24uanMnXG5pbXBvcnQgUmV0dXJuU3RhdGVtZW50cyBmcm9tICcuL2dyYW1tYXIvc3RhdGVtZW50cy9yZXR1cm4uanMnXG5pbXBvcnQgQ2xhc3NTdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL2NsYXNzLmpzJ1xuaW1wb3J0IENvbmRpdGlvblN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvY29uZGl0aW9ucy5qcydcbmltcG9ydCBWYXJTdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL3Zhci5qcydcbmltcG9ydCBMb29wU3RhdGVtZW50cyBmcm9tICcuL2dyYW1tYXIvc3RhdGVtZW50cy9sb29wcy5qcydcblxuaW1wb3J0IEV4cHJlc3Npb25zIGZyb20gJy4vZ3JhbW1hci9leHByZXNzaW9ucy9leHByZXNzaW9ucy5qcydcbmltcG9ydCBBcnJheUV4cHJlc3Npb25zIGZyb20gJy4vZ3JhbW1hci9leHByZXNzaW9ucy9hcnJheS5qcydcbmltcG9ydCBEaWN0RXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2RpY3QuanMnXG5pbXBvcnQgRm5FeHByZXNzaW9ucyBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMvZm4uanMnXG5pbXBvcnQgSWRFeHByZXNzaW9ucyBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMvaWQuanMnXG5pbXBvcnQgQ2xhc3NFeHByZXNzaW9ucyBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMvY2xhc3MuanMnXG5cbmNsYXNzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yIChwYXJzZXIsIHRva2VuLCBkYXRhKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXJcbiAgICB0aGlzLnRva2VuID0gdG9rZW5cbiAgICB0aGlzLl9pbl9jbGFzcyA9IGZhbHNlXG4gICAgdGhpcy5fZm5fbGV2ZWwgPSAwXG4gICAgdGhpcy5kYXRhID0gZGF0YSB8fCB7fVxuICB9XG5cbiAgdG9rZW5fcHJvcCAobmFtZSkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW5bbmFtZV0gOiBudWxsIH1cblxuICBnZXQgdmFsdWUgKCkgeyByZXR1cm4gdGhpcy50b2tlbl9wcm9wKCd2YWx1ZScpIH1cblxuICBnZXQgdHlwZSAoKSB7IHJldHVybiB0aGlzLnRva2VuX3Byb3AoJ3R5cGUnKSB9XG5cbiAgZ2V0IHN0YXJ0ICgpIHsgcmV0dXJuIHRoaXMudG9rZW5fcHJvcCgnc3RhcnQnKSB9XG5cbiAgZ2V0IGVuZCAoKSB7IHJldHVybiB0aGlzLnRva2VuX3Byb3AoJ2VuZCcpIH1cblxuICBnZXQgbGVuZ3RoICgpIHsgcmV0dXJuIHRoaXMudG9rZW5fcHJvcCgnbGVuZ3RoJykgfVxuXG4gIGlzIChlKSB7IHJldHVybiB0aGlzLnRva2VuID8gdGhpcy50b2tlbi5pcyhlKSA6IGZhbHNlIH1cblxuICB0b1N0cmluZyAoKSB7IHJldHVybiB0aGlzLnRva2VuID8gdGhpcy50b2tlbi50b1N0cmluZygpIDogJycgfVxuXG59XG5cblxuY2xhc3MgRW1wdHlDbGFzcyB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzZXIgZXh0ZW5kcyBtaXgoRW1wdHlDbGFzcykud2l0aChcbiAgS2V5TGl0ZXJhbCxcblxuICBTdGF0ZW1lbnRzLFxuICBJZFN0YXRlbWVudHMsXG4gIEFzc2lnblN0YXRlbWVudHMsXG4gIFJldHVyblN0YXRlbWVudHMsXG4gIENsYXNzU3RhdGVtZW50cyxcbiAgQ29uZGl0aW9uU3RhdGVtZW50cyxcbiAgVmFyU3RhdGVtZW50cyxcbiAgTG9vcFN0YXRlbWVudHMsXG5cbiAgRXhwcmVzc2lvbnMsXG4gIEFycmF5RXhwcmVzc2lvbnMsXG4gIERpY3RFeHByZXNzaW9ucyxcbiAgRm5FeHByZXNzaW9ucyxcbiAgSWRFeHByZXNzaW9ucyxcbiAgQ2xhc3NFeHByZXNzaW9uc1xuKSB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICh0b2tlbnMpIHtcbiAgICB0aGlzLmVycm9ycyA9IDBcbiAgICB0aGlzLm9mZnNldCA9IDBcbiAgICB0aGlzLm5vZGVzID0gW11cbiAgICB0aGlzLmZyYW1lcyA9IG5ldyBGcmFtZXMoKVxuICAgIHRoaXMucHJldl9mcmFtZSA9IG51bGxcbiAgICB0aGlzLmluX2NsYXNzID0gZmFsc2VcbiAgICB0aGlzLmZuX2xldmVsID0gMFxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zIHx8IFtdXG4gIH1cblxuICB2YWxpZE9mZnNldCAob2Zmc2V0KSB7IHJldHVybiBvZmZzZXQgPj0gMCAmJiBvZmZzZXQgPCB0aGlzLmxlbmd0aCB9XG5cbiAgdG9rZW5fYXQgKG9mZnNldCkgeyByZXR1cm4gdGhpcy52YWxpZE9mZnNldChvZmZzZXQpID8gdGhpcy50b2tlbnNbb2Zmc2V0XSA6IG51bGwgfVxuXG4gIGdldCBlb3MgKCkgeyByZXR1cm4gdGhpcy5vZmZzZXQgPj0gdGhpcy5sZW5ndGggfVxuXG4gIGdldCBsZW5ndGggKCkgeyByZXR1cm4gdGhpcy50b2tlbnMubGVuZ3RoIH1cblxuICBnZXQgdG9rZW4gKCkgeyByZXR1cm4gdGhpcy50b2tlbl9hdCh0aGlzLm9mZnNldCkgfVxuXG4gIHNraXAgKGUpIHsgd2hpbGUgKHRoaXMuaXMoZSkgJiYgIXRoaXMuZW9zKSB7IHRoaXMubmV4dCgpIH0gfVxuXG4gIGlzIChlKSB7IHJldHVybiB0aGlzLnRva2VuID8gdGhpcy50b2tlbi5pcyhlKSA6IGZhbHNlIH1cblxuICBleHBlY3QgKGUsIG5leHQgPSB0cnVlKSB7XG4gICAgbGV0IHIgPSB0aGlzLnRva2VuID8gdGhpcy50b2tlbi5pcyhlKSA6IGZhbHNlXG4gICAgaWYgKHIpIHtcbiAgICAgIGlmIChuZXh0KSB7IHRoaXMubmV4dCgpIH1cbiAgICB9XG4gICAgZWxzZSB7IGVycm9yKHRoaXMsIHRoaXMudG9rZW4sIGUsICdleHBlY3RlZCcpIH1cbiAgICByZXR1cm4gclxuICB9XG5cbiAgbWF0Y2ggKG9mZnNldCwgbWF0Y2hlcykge1xuICAgIGlmICghXy5pc051bWJlcihvZmZzZXQpKSB7XG4gICAgICBtYXRjaGVzID0gb2Zmc2V0XG4gICAgICBvZmZzZXQgPSB0aGlzLm9mZnNldFxuICAgIH1cbiAgICBsZXQgdG9rZW5zID0gW11cbiAgICBsZXQgbSA9IDBcbiAgICB3aGlsZSAodGhpcy52YWxpZE9mZnNldChvZmZzZXQpICYmIG0gPCBtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgbGV0IHRva2VuID0gdGhpcy50b2tlbnNbb2Zmc2V0KytdXG4gICAgICBpZiAoIXRva2VuLmlzKG1hdGNoZXNbbSsrXSkpIHsgcmV0dXJuIG51bGwgfVxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pXG4gICAgfVxuICAgIHJldHVybiB0b2tlbnMubGVuZ3RoID8gdG9rZW5zIDogbnVsbFxuICB9XG5cbiAgcGVlayAoYyA9IDEpIHsgcmV0dXJuIHRoaXMudG9rZW5fYXQodGhpcy5vZmZzZXQgKyBjKSB9XG5cbiAgbmV4dCAoYyA9IDEpIHtcbiAgICB0aGlzLm9mZnNldCArPSBjXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGxvb3Bfd2hpbGUgKGZuLCBtYXRjaGVzLCBlbmQsIGVuZF9uZXh0LCBza2lwKSB7XG4gICAgbGV0IG5vZGVzID0gW11cbiAgICBpZiAoc2tpcCkgeyB0aGlzLnNraXAoc2tpcCkgfVxuICAgIHdoaWxlICghdGhpcy5lb3MgJiYgKCFlbmQgfHwgIXRoaXMuaXMoZW5kKSkgJiYgKCFtYXRjaGVzIHx8IHRoaXMubWF0Y2gobWF0Y2hlcykpKSB7XG4gICAgICBub2Rlcy5wdXNoKGZuLmNhbGwodGhpcykpXG4gICAgICBpZiAoc2tpcCkgeyB0aGlzLnNraXAoc2tpcCkgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7IHRoaXMuZXhwZWN0KGVuZCwgZW5kX25leHQpIH1cbiAgICByZXR1cm4gbm9kZXNcbiAgfVxuXG4gIG5leHRfZXhwcl9ub2RlIChsZWZ0KSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIGxldCBkYXRhID0ge31cbiAgICBpZiAobGVmdCkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIGRhdGEgPSB7IGxlZnQsIHJpZ2h0OiB0aGlzLmV4cHIoKSB9XG4gICAgfVxuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdG9rZW4sIGRhdGEpXG4gICAgaWYgKCFsZWZ0KSB7IHRoaXMubmV4dCgpIH1cbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgcnVuICh0b2tlbnMpIHtcbiAgICB0aGlzLnJlc2V0KHRva2VucylcbiAgICB0aGlzLmZyYW1lcy5zdGFydCgnZ2xvYmFscycpXG4gICAgbGV0IG5vZGVzID0gdGhpcy5zdGF0ZW1lbnRzKClcbiAgICB0aGlzLmZyYW1lcy5lbmQoKVxuICAgIHRoaXMubm9kZXMgPSBub2Rlc1xuICAgIHJldHVybiBub2Rlc1xuICB9XG5cbiAgZHVtcCAoKSB7XG4gICAgY29uc29sZS5pbmZvKCdwYXJzZXIgZHVtcCcpXG4gICAgY29uc29sZS5sb2codGhpcy5ub2RlcylcbiAgICBjb25zb2xlLmxvZygnJylcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvcGFyc2VyLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgdmFyIEZyYW1lXG5leHBvcnQgdmFyIEZyYW1lc1xuZXhwb3J0IHZhciBGcmFtZUl0ZW1cblxuRnJhbWVzID0gY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBudWxsXG4gIH1cblxuICBzdGFydCAodHlwZSkgeyB0aGlzLmN1cnJlbnQgPSBuZXcgRnJhbWUodGhpcywgdGhpcy5jdXJyZW50LCB0eXBlKSB9XG5cbiAgZW5kICgpIHsgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50LnBhcmVudCB9XG5cbiAgYWRkIChub2RlLCBwYXJlbnQsIGl0ZW1fdHlwZSkgeyByZXR1cm4gdGhpcy5jdXJyZW50LmFkZChub2RlLCBwYXJlbnQsIGl0ZW1fdHlwZSkgfVxuXG4gIGV4aXN0cyAobmFtZSwgaXRlbV90eXBlKSB7XG4gICAgbGV0IGMgPSB0aGlzLmN1cnJlbnRcbiAgICB3aGlsZSAoYykge1xuICAgICAgbGV0IGkgPSBjLmV4aXN0cyhuYW1lLCBpdGVtX3R5cGUpXG4gICAgICBpZiAoaSkge1xuICAgICAgICByZXR1cm4gaVxuICAgICAgfVxuICAgICAgYyA9IGMucGFyZW50XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBmbl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2ZuJylcbiAgfVxuXG4gIGNsYXNzX2V4aXN0cyAobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmV4aXN0cyhuYW1lLCAnY2xhc3MnKVxuICB9XG5cbiAgdmFyX2V4aXN0cyAobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmV4aXN0cyhuYW1lLCAndmFyJylcbiAgfVxuXG59XG5cblxuRnJhbWVJdGVtID0gY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yIChmcmFtZSwgcGFyZW50LCBub2RlLCBpdGVtX3R5cGUpIHtcbiAgICB0aGlzLmZyYW1lID0gZnJhbWVcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICAgIHRoaXMuaXRlbV90eXBlID0gaXRlbV90eXBlXG4gICAgdGhpcy5ub2RlID0gbm9kZVxuICB9XG5cbiAgZ2V0IGRhdGEgKCkgeyByZXR1cm4gdGhpcy5ub2RlLmRhdGEgfVxuXG4gIGdldCBuYW1lICgpIHsgcmV0dXJuIHRoaXMubm9kZS52YWx1ZSB9XG5cbiAgZ2V0IHR5cGUgKCkgeyByZXR1cm4gdGhpcy5ub2RlLnR5cGUgfVxuXG4gIGdldCBpc192YXIgKCkgeyByZXR1cm4gdGhpcy5pdGVtX3R5cGUgPT09ICd2YXInIH1cblxuICBnZXQgaXNfY2xhc3MgKCkgeyByZXR1cm4gdGhpcy5pdGVtX3R5cGUgPT09ICdjbGFzcycgfVxuXG4gIGdldCBpc19mbiAoKSB7IHJldHVybiB0aGlzLml0ZW1fdHlwZSA9PT0gJ2ZuJyB9XG5cbiAgZ2V0IGlzX2xvY2FsICgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuaXNfbG9jYWwgfVxuXG4gIGdldCBpc19nbG9iYWwgKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5pc19nbG9iYWwgfVxuXG59XG5cblxuRnJhbWUgPSBjbGFzcyB7XG5cbiAgY29uc3RydWN0b3IgKGZyYW1lcywgcGFyZW50LCB0eXBlKSB7XG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXNcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICAgIHRoaXMudHlwZSA9IHR5cGVcbiAgICB0aGlzLml0ZW1zID0gW11cbiAgfVxuXG4gIGdldCBuYW1lICgpIHsgcmV0dXJuIHRoaXMucGFyZW50ID8gJyRzJyA6ICckZycgfVxuXG4gIGdldCBpc19sb2NhbCAoKSB7IHJldHVybiB0aGlzLnBhcmVudCAhPT0gbnVsbCB9XG5cbiAgZ2V0IGlzX2dsb2JhbCAoKSB7IHJldHVybiB0aGlzLnBhcmVudCA9PT0gbnVsbCB9XG5cbiAgYWRkIChub2RlLCBwYXJlbnQsIGl0ZW1fdHlwZSkge1xuICAgIGxldCBpID0gbmV3IEZyYW1lSXRlbSh0aGlzLCBwYXJlbnQsIG5vZGUsIGl0ZW1fdHlwZSlcbiAgICB0aGlzLml0ZW1zLnB1c2goaSlcbiAgICBub2RlLl9nbG9iYWwgPSB0aGlzLmlzX2dsb2JhbFxuICAgIHJldHVybiBpXG4gIH1cblxuICBleGlzdHMgKG5hbWUsIGl0ZW1fdHlwZSkgeyByZXR1cm4gXy5maW5kKHRoaXMuaXRlbXMsIGl0ZW1fdHlwZSA/IHsgbmFtZSwgaXRlbV90eXBlIH0gOiB7IG5hbWUgfSkgfVxuXG4gIGZuX2V4aXN0cyAobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmV4aXN0cyhuYW1lLCAnZm4nKVxuICB9XG5cbiAgdmFyX2V4aXN0cyAobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmV4aXN0cyhuYW1lLCAndmFyJylcbiAgfVxuXG4gIGNsYXNzX2V4aXN0cyAobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmV4aXN0cyhuYW1lLCAnY2xhc3MnKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9mcmFtZS5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgS2V5TGl0ZXJhbHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBrZXlfbGl0ZXJhbCAoKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIHRoaXMuZXhwZWN0KCdrZXknKVxuICAgIG5vZGUuZGF0YS5leHByID0gdGhpcy5leHByKClcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9rZXlfbGl0ZXJhbC5qcyIsImltcG9ydCB7IGVycm9yIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFscy5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBTdGF0ZW1lbnRzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgYmxvY2sgKGVuZCwgZW5kX25leHQgPSB0cnVlLCBibG9ja190eXBlID0gbnVsbCkge1xuICAgIGlmIChibG9ja190eXBlKSB7XG4gICAgICB0aGlzLmZyYW1lcy5zdGFydChibG9ja190eXBlKVxuICAgIH1cbiAgICBsZXQgbm9kZXMgPSB0aGlzLmxvb3Bfd2hpbGUodGhpcy5zdGF0ZW1lbnQsIG51bGwsIGVuZCwgZW5kX25leHQsICdlb2wnKVxuICAgIGlmIChibG9ja190eXBlKSB7XG4gICAgICB0aGlzLmZyYW1lcy5lbmQoKVxuICAgIH1cbiAgICByZXR1cm4gbm9kZXNcbiAgfVxuXG4gIHN0YXRlbWVudHMgKCkgeyByZXR1cm4gdGhpcy5ibG9jaygpIH1cblxuICBzaW5nbGVfc3RhdGVtZW50ICgpIHtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgdGhpcy5uZXh0KClcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgc3RhdGVtZW50ICgpIHtcbiAgICBpZiAodGhpcy5tYXRjaChbJ2xldCcsICdpZCddKSkgeyByZXR1cm4gdGhpcy52YXJfc3RhdGVtZW50KCkgfSAvLyB2YXJpYWJsZSBkZWZpbml0aW9uXG4gICAgZWxzZSBpZiAodGhpcy5tYXRjaChbJ2lkfGlkX2ZpZWxkfHRoaXNfZmllbGQnLCAnYXNzaWdufGZuX2Fzc2lnbiddKSkgeyByZXR1cm4gdGhpcy5hc3NpZ25fc3RhdGVtZW50KCkgfSAvLyB2YXJpYWJsZSBhc3NpZ25tZW50XG4gICAgZWxzZSBpZiAodGhpcy5pcygnaWYnKSkgeyByZXR1cm4gdGhpcy5pZl9zdGF0ZW1lbnQoKSB9IC8vIGlmIGJsb2NrXG4gICAgZWxzZSBpZiAodGhpcy5pcygnZm9yJykpIHsgcmV0dXJuIHRoaXMuZm9yX3N0YXRlbWVudCgpIH0gLy8gd2hpbGUgYmxvY2tcbiAgICBlbHNlIGlmICh0aGlzLmlzKCd3aGlsZScpKSB7IHJldHVybiB0aGlzLndoaWxlX3N0YXRlbWVudCgpIH0gLy8gd2hpbGUgYmxvY2tcbiAgICBlbHNlIGlmICh0aGlzLmlzKCdyZXR1cm4nKSkgeyByZXR1cm4gdGhpcy5yZXR1cm5fc3RhdGVtZW50KCkgfSAvLyByZXR1cm4gZnJvbSBmdW5jdGlvblxuICAgIGVsc2UgaWYgKHRoaXMuaXMoWydicmVhaycsICdjb250aW51ZSddKSkgeyByZXR1cm4gdGhpcy5zaW5nbGVfc3RhdGVtZW50KCkgfSAvLyBzaW5nbGUgc3RhdGVtZW50XG4gICAgZWxzZSBpZiAodGhpcy5pcygnY2xhc3MnKSkgeyByZXR1cm4gdGhpcy5jbGFzc19zdGF0ZW1lbnQoKSB9IC8vIGNsYXNzIHN0YXRlbWVudFxuICAgIGVsc2UgaWYgKHRoaXMuaXMoWydpZCcsICdzdXBlciddKSkgeyByZXR1cm4gdGhpcy5pZF9zdGF0ZW1lbnQoKSB9IC8vIGZ1bmN0aW9uIGNhbGxcbiAgICBlbHNlIHtcbiAgICAgIGVycm9yKHRoaXMsIHRoaXMudG9rZW4sICdzeW50YXggZXJyb3InKVxuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9zdGF0ZW1lbnRzLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIElkU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGlkX3N0YXRlbWVudCAoZmlyc3QgPSB0cnVlKSB7XG4gICAgaWYgKHRoaXMuaXMoJ3N1cGVyJykpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1cGVyX2V4cHIoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmlkX2V4cHIoZmlyc3QpXG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2lkLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBBc3NpZ25TdGF0ZW1lbnRzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgYXNzaWduX3N0YXRlbWVudCAoKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsXG4gICAgbGV0IGlkID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ2ZuX2Fzc2lnbicpKSB7XG4gICAgICBub2RlID0gdGhpcy5mbl9leHByKGlkLCB0cnVlKVxuICAgICAgaWQuX2ZuID0gdHJ1ZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuLCB7IGlkIH0pXG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgbm9kZS5kYXRhLmV4cHIgPSB0aGlzLmV4cHIoKVxuICAgIH1cbiAgICB0aGlzLmZyYW1lcy5hZGQoaWQsIG51bGwsIGlkLl9mbiA/ICdmbicgOiAndmFyJylcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2Fzc2lnbi5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgUmV0dXJuU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIHJldHVybl9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCBwID0gZmFsc2VcbiAgICBsZXQgZW5kID0gJ2VvbHxlbmR8Y2xvc2VfcGFyZW4nXG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIG5vZGUuZGF0YS5hcmdzID0gW11cbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHAgPSB0cnVlXG4gICAgICBlbmQgPSAnY2xvc2VfcGFyZW4nXG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgICBpZiAoIXAgfHwgIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5leHBycyhlbmQsIGZhbHNlKVxuICAgIH1cbiAgICBpZiAocCkge1xuICAgICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9yZXR1cm4uanMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIENsYXNzU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGNsYXNzX2xpc3QgKCkgeyByZXR1cm4gdGhpcy5sb29wX3doaWxlKHRoaXMuc2luZ2xlLCBbJ2lkJ10sICdlb2wnLCB0cnVlLCAnY29tbWEnKSB9XG5cbiAgY2xhc3Nfc3RhdGVtZW50ICgpIHtcbiAgICBsZXQgdG9rZW4gPSB0aGlzLnRva2VuXG4gICAgdGhpcy5uZXh0KClcbiAgICBsZXQgX2V4dGVuZHMgPSBudWxsXG4gICAgbGV0IGlkID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJzonKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIF9leHRlbmRzID0gdGhpcy5jbGFzc19saXN0KClcbiAgICB9XG4gICAgdGhpcy5mcmFtZXMuYWRkKGlkLCBudWxsLCAnY2xhc3MnKVxuICAgIHRoaXMuaW5fY2xhc3MgPSB0cnVlXG4gICAgbGV0IGJvZHkgPSB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ2NsYXNzJylcbiAgICB0aGlzLmluX2NsYXNzID0gZmFsc2VcbiAgICB0aGlzLmV4cGVjdCgnZW5kJylcbiAgICByZXR1cm4gbmV3IE5vZGUodGhpcywgdG9rZW4sIHsgaWQsIF9leHRlbmRzLCBib2R5IH0pXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvY2xhc3MuanMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIENvbmRpdGlvblN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBpZl9zdGF0ZW1lbnQgKGV4cGVjdF9lbmQgPSB0cnVlKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgbGV0IGV4cHJfYmxvY2tcbiAgICBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgZXhwcl9ibG9jayA9IHRoaXMuZXhwcigpXG4gICAgICB0aGlzLmV4cGVjdCgnY2xvc2VfcGFyZW4nKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGV4cHJfYmxvY2sgPSB0aGlzLmV4cHIoKVxuICAgIH1cbiAgICBsZXQgdHJ1ZV9ib2R5ID0gdGhpcy5ibG9jayhbJ2Vsc2UnLCAnZW5kJ10sIGZhbHNlLCAnaWYnKVxuICAgIGxldCBmYWxzZV9ib2R5ID0gdGhpcy5pcygnZWxzZScpID8gdGhpcy5lbHNlX3N0YXRlbWVudChmYWxzZSkgOiBudWxsXG4gICAgaWYgKGV4cGVjdF9lbmQpIHsgdGhpcy5leHBlY3QoJ2VuZCcpIH1cbiAgICByZXR1cm4gbmV3IE5vZGUodGhpcywgdG9rZW4sIHsgZXhwcjogZXhwcl9ibG9jaywgdHJ1ZV9ib2R5LCBmYWxzZV9ib2R5IH0pXG4gIH1cblxuICBlbHNlX3N0YXRlbWVudCAoZXhwZWN0X2VuZCA9IHRydWUpIHtcbiAgICBsZXQgdG9rZW4gPSB0aGlzLnRva2VuXG4gICAgbGV0IG5vZGUgPSBudWxsXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAodGhpcy5pcygnaWYnKSkge1xuICAgICAgbm9kZSA9IHRoaXMuaWZfc3RhdGVtZW50KGZhbHNlKVxuICAgICAgbm9kZS50b2tlbiA9IHRva2VuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IGZhbHNlX2JvZHk6IHRoaXMuYmxvY2soJ2VuZCcsIGZhbHNlLCAnZWxzZScpIH0pXG4gICAgfVxuICAgIGlmIChleHBlY3RfZW5kKSB7IHRoaXMuZXhwZWN0KCdlbmQnKSB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9jb25kaXRpb25zLmpzIiwiaW1wb3J0IHsgVG9rZW4gfSBmcm9tICcuLi8uLi9sZXhlci5qcydcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgVmFyU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIHZhcl9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCBub2RlID0gbnVsbFxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKCF0aGlzLnBlZWsoKS5pcygnYXNzaWdufGZuX2Fzc2lnbicpKSB7XG4gICAgICBsZXQgdCA9IG5ldyBUb2tlbih0aGlzLnRva2VuKVxuICAgICAgdC52YWx1ZSA9ICc9J1xuICAgICAgdC5fdHlwZSA9ICdhc3NpZ24nXG4gICAgICBub2RlID0gbmV3IE5vZGUodGhpcywgdCwgeyBpZDogdGhpcy50b2tlbiwgZXhwcjogbnVsbCB9KVxuICAgICAgdGhpcy5mcmFtZXMuYWRkKHRoaXMudG9rZW4sIG51bGwsICd2YXInKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5vZGUgPSB0aGlzLmFzc2lnbl9zdGF0ZW1lbnQoKVxuICAgIH1cbiAgICBub2RlLl9sZXQgPSB0cnVlXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy92YXIuanMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIExvb3BTdGF0ZW1lbnRzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZm9yX3N0YXRlbWVudCAoKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG5cbiAgICBsZXQgdiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLmV4cGVjdCgnaWR8dmFyJylcbiAgICB0aGlzLmV4cGVjdCgnYXNzaWduJylcbiAgICBsZXQgbWluX2V4cHIgPSB0aGlzLmV4cHIoKVxuICAgIHRoaXMuZXhwZWN0KCd0bycpXG4gICAgbGV0IG1heF9leHByID0gdGhpcy5leHByKClcbiAgICBsZXQgc3RlcF9leHByID0gbnVsbFxuICAgIGlmICh0aGlzLmlzKCdzdGVwJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBzdGVwX2V4cHIgPSB0aGlzLmV4cHIoKVxuICAgIH1cbiAgICBsZXQgYm9keSA9IHRoaXMuYmxvY2soJ2VuZCcsIGZhbHNlLCAnZm9yJylcbiAgICB0aGlzLmV4cGVjdCgnZW5kJylcbiAgICByZXR1cm4gbmV3IE5vZGUodGhpcywgdG9rZW4sIHsgdiwgbWluX2V4cHIsIG1heF9leHByLCBzdGVwX2V4cHIsIGJvZHkgfSlcbiAgfVxuXG4gIHdoaWxlX3N0YXRlbWVudCAoKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgbGV0IGV4cHJfYmxvY2tcbiAgICBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgZXhwcl9ibG9jayA9IHRoaXMuZXhwcigpXG4gICAgICB0aGlzLmV4cGVjdCgnY2xvc2VfcGFyZW4nKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGV4cHJfYmxvY2sgPSB0aGlzLmV4cHIoKVxuICAgIH1cbiAgICBsZXQgYm9keSA9IHRoaXMuYmxvY2soJ2VuZCcsIGZhbHNlLCAnd2hpbGUnKVxuICAgIHRoaXMuZXhwZWN0KCdlbmQnKVxuICAgIHJldHVybiBuZXcgTm9kZSh0aGlzLCB0b2tlbiwgeyBleHByOiBleHByX2Jsb2NrLCBib2R5IH0pXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvbG9vcHMuanMiLCJpbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgRXhwcmVzc2lvbnMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBleHBycyAoZW5kLCBlbmRfbmV4dCkgeyByZXR1cm4gdGhpcy5sb29wX3doaWxlKHRoaXMuZXhwciwgbnVsbCwgZW5kLCBlbmRfbmV4dCwgJ2NvbW1hJykgfVxuXG4gIGV4cHIgKCkge1xuICAgIGxldCBub2RlID0gdGhpcy5zaW1wbGVfZXhwcigpXG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGxldCB0ZXJtID0gdGhpcy50ZXJtX2V4cHIobm9kZSlcbiAgICAgIGlmICh0ZXJtKSB7IHJldHVybiB0ZXJtIH1cblxuICAgICAgbGV0IGZhY3RvciA9IHRoaXMuZmFjdG9yX2V4cHIobm9kZSlcbiAgICAgIGlmIChmYWN0b3IpIHsgcmV0dXJuIGZhY3RvciB9XG5cbiAgICAgIGxldCBjb25kaXRpb25hbCA9IHRoaXMuY29uZGl0aW9uYWxfZXhwcihub2RlKVxuICAgICAgaWYgKGNvbmRpdGlvbmFsKSB7IHJldHVybiBjb25kaXRpb25hbCB9XG5cbiAgICAgIGxldCBqdW5jdGlvbiA9IHRoaXMuanVuY3Rpb25fZXhwcihub2RlKVxuICAgICAgaWYgKGp1bmN0aW9uKSB7IHJldHVybiBqdW5jdGlvbiB9XG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBzaW1wbGVfZXhwciAoKSB7XG4gICAgaWYgKHRoaXMuaXMoWydudW1iZXInLCAnc3RyaW5nJywgJ2NoYXInXSkpIHsgcmV0dXJuIHRoaXMubmV4dF9leHByX25vZGUoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnZm5fYXNzaWduJykpIHsgcmV0dXJuIHRoaXMuZm5fZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHsgcmV0dXJuIHRoaXMuc3ViX2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnb3Blbl9icmFja2V0JykpIHsgcmV0dXJuIHRoaXMuYXJyYXlfZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKCdvcGVuX2N1cmx5JykpIHsgcmV0dXJuIHRoaXMuZGljdF9leHByKCkgfVxuICAgIGVsc2UgaWYgKHRoaXMuaXMoWyd0aGlzJywgJ3RoaXNfZmllbGQnXSkpIHsgcmV0dXJuIHRoaXMudGhpc19leHByKCkgfVxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ3N1cGVyJykpIHsgcmV0dXJuIHRoaXMuc3VwZXJfZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKCduZXcnKSkgeyByZXR1cm4gdGhpcy5uZXdfZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKCdpZCcpKSB7IHJldHVybiB0aGlzLmlkX2V4cHIoKSB9XG4gICAgZWxzZSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnbnVtYmVyLCBzdHJpbmcsIHZhcmlhYmxlLCB2YXJpYWJsZSBwYXJlbiBvciBmdW5jdGlvbiBjYWxsL2V4cHJlc3Npb24gZXhwZWN0ZWQnKVxuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHN1Yl9leHByICgpIHtcbiAgICBsZXQgbm9kZXMgPSBbXVxuICAgIG5vZGVzLnB1c2gobmV3IE5vZGUodGhpcywgdGhpcy50b2tlbikpXG4gICAgdGhpcy5leHBlY3QoJ29wZW5fcGFyZW4nKVxuICAgIGlmICghdGhpcy5pcygnY2xvc2VfcGFyZW4nKSkge1xuICAgICAgbm9kZXMucHVzaCh0aGlzLmV4cHIoKSlcbiAgICB9XG4gICAgbm9kZXMucHVzaChuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKSlcbiAgICB0aGlzLmV4cGVjdCgnY2xvc2VfcGFyZW4nKVxuICAgIHJldHVybiBub2Rlc1xuICB9XG5cbiAgdGVybV9leHByIChsZWZ0KSB7IHJldHVybiB0aGlzLmlzKC9cXCt8LS8pID8gdGhpcy5uZXh0X2V4cHJfbm9kZShsZWZ0KSA6IG51bGwgfVxuXG4gIGZhY3Rvcl9leHByIChsZWZ0KSB7IHJldHVybiB0aGlzLmlzKC9cXC98XFwqLykgPyB0aGlzLm5leHRfZXhwcl9ub2RlKGxlZnQpIDogbnVsbCB9XG5cbiAgY29uZGl0aW9uYWxfZXhwciAobGVmdCkgeyByZXR1cm4gdGhpcy5pcygvPnw+PXw8fDw9fCE9fDw+fD09LykgPyB0aGlzLm5leHRfZXhwcl9ub2RlKGxlZnQpIDogbnVsbCB9XG5cbiAganVuY3Rpb25fZXhwciAobGVmdCkgeyByZXR1cm4gdGhpcy5pcygvJnxcXHwvKSA/IHRoaXMubmV4dF9leHByX25vZGUobGVmdCkgOiBudWxsIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2V4cHJlc3Npb25zLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBBcnJheUV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgYXJyYXlfZXhwciAoKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIG5vZGUuZGF0YS5hcmdzID0gW11cbiAgICB0aGlzLmV4cGVjdCgnb3Blbl9icmFja2V0JylcbiAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX2JyYWNrZXQnKSkge1xuICAgICAgbm9kZS5kYXRhLmFyZ3MgPSB0aGlzLmxvb3Bfd2hpbGUodGhpcy5leHByLCBudWxsLCAnY2xvc2VfYnJhY2tldCcsIGZhbHNlLCAnY29tbWF8ZW9sJylcbiAgICB9XG4gICAgdGhpcy5leHBlY3QoJ2Nsb3NlX2JyYWNrZXQnKVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2FycmF5LmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBEaWN0RXhwcmVzc2lvbnMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBkaWN0X2V4cHIgKCkge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICBub2RlLmRhdGEuZGVmID0gW11cbiAgICB0aGlzLmV4cGVjdCgnb3Blbl9jdXJseScpXG4gICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9jdXJseScpKSB7XG4gICAgICBub2RlLmRhdGEuZGVmID0gdGhpcy5sb29wX3doaWxlKHRoaXMua2V5X2xpdGVyYWwsIFsna2V5J10sICdjbG9zZV9jdXJseScsIGZhbHNlLCAnY29tbWF8ZW9sJylcbiAgICB9XG4gICAgdGhpcy5leHBlY3QoJ2Nsb3NlX2N1cmx5JylcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9kaWN0LmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBGbkV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZm5fZXhwciAoaWQsIHN0YXRlbWVudCA9IGZhbHNlKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuLCB7IGlkIH0pXG4gICAgbm9kZS5kYXRhLmFyZ3MgPSBbXVxuICAgIGlmIChzdGF0ZW1lbnQpIHtcbiAgICAgIG5vZGUuX2luX2NsYXNzID0gdGhpcy5pbl9jbGFzc1xuICAgICAgbm9kZS5fZm5fbGV2ZWwgPSB0aGlzLmZuX2xldmVsKytcbiAgICB9XG4gICAgdGhpcy5uZXh0KClcbiAgICB0aGlzLmZyYW1lcy5zdGFydCgnZm4nKVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgICAgbm9kZS5kYXRhLmFyZ3MgPSB0aGlzLmZuX2FyZ3NfZGVmKClcbiAgICAgIH1cbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIG5vZGUuZGF0YS5ib2R5ID0gdGhpcy5ibG9jaygnZW5kJywgZmFsc2UpXG4gICAgdGhpcy5mcmFtZXMuZW5kKClcbiAgICB0aGlzLmV4cGVjdCgnZW5kJylcbiAgICBpZiAoc3RhdGVtZW50KSB7XG4gICAgICB0aGlzLmZuX2xldmVsLS1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGZuX2FyZyAoKSB7XG4gICAgdGhpcy5mcmFtZXMuYWRkKHRoaXMudG9rZW4sIG51bGwsICd2YXInKVxuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICh0aGlzLmlzKCdhc3NpZ24nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIG5vZGUuZGF0YS5hc3NpZ24gPSB0aGlzLmV4cHIoKVxuICAgIH1cbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgZm5fYXJnc19kZWYgKCkgeyByZXR1cm4gdGhpcy5sb29wX3doaWxlKHRoaXMuZm5fYXJnLCBbJ2lkJ10sICdjbG9zZV9wYXJlbicsIGZhbHNlLCAnY29tbWF8ZW9sJykgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZm4uanMiLCJpbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbHMuanMnXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIElkRXhwcmVzc2lvbnMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBpZF9leHByIChmaXJzdCA9IHRydWUpIHtcbiAgICBpZiAoZmlyc3QgJiYgIXRoaXMuZnJhbWVzLmV4aXN0cyh0aGlzLnRva2VuLnZhbHVlKSkge1xuICAgICAgZXJyb3IodGhpcywgdGhpcy50b2tlbiwgJ3VuZGVjbGFyZWQgaWRlbnRpZmllcicpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAodGhpcy5pcygnb3Blbl9icmFja2V0JykpIHtcbiAgICAgIGlmICghbm9kZS5kYXRhLmZpZWxkcykge1xuICAgICAgICBub2RlLmRhdGEuZmllbGRzID0gW11cbiAgICAgIH1cbiAgICAgIG5vZGUuZGF0YS5maWVsZHMucHVzaCh0aGlzLmFycmF5X2V4cHIoKSlcbiAgICB9XG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fcGFyZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIG5vZGUudG9rZW4uX3R5cGUgPSAnZm4nXG4gICAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgICAgbm9kZS5kYXRhLmFyZ3MgPSB0aGlzLmV4cHJzKCdjbG9zZV9wYXJlbicsIGZhbHNlKVxuICAgICAgfVxuICAgICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICB9XG4gICAgd2hpbGUgKHRoaXMuaXMoWydpZF9maWVsZCcsICdvcGVuX2JyYWNrZXQnXSkpIHtcbiAgICAgIGlmICghbm9kZS5kYXRhLmZpZWxkcykge1xuICAgICAgICBub2RlLmRhdGEuZmllbGRzID0gW11cbiAgICAgIH1cbiAgICAgIG5vZGUuZGF0YS5maWVsZHMucHVzaCh0aGlzLmlkX2ZpZWxkKCkpXG4gICAgICB0aGlzLnNraXAoJ2NvbW1hJylcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGlkX2ZpZWxkICgpIHtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgbm9kZS5kYXRhLmFyZ3MgPSBbXVxuICAgIG5vZGUudG9rZW4uX3R5cGUgPSAnaWQnXG4gICAgbm9kZS5fZmllbGQgPSB0cnVlXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAodGhpcy5pcygnb3Blbl9icmFja2V0JykpIHtcbiAgICAgIGlmICghbm9kZS5kYXRhLmZpZWxkcykge1xuICAgICAgICBub2RlLmRhdGEuZmllbGRzID0gW11cbiAgICAgIH1cbiAgICAgIG5vZGUuZGF0YS5maWVsZHMucHVzaCh0aGlzLmFycmF5X2V4cHIoKSlcbiAgICB9XG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fcGFyZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIG5vZGUudG9rZW4uX3R5cGUgPSAnZm4nXG4gICAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgICAgbm9kZS5kYXRhLmFyZ3MgPSB0aGlzLmV4cHJzKCdjbG9zZV9wYXJlbicsIGZhbHNlKVxuICAgICAgfVxuICAgICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvaWQuanMiLCJpbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQ2xhc3NFeHByZXNzaW9ucyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIG5ld19leHByICgpIHtcbiAgICBsZXQgdG9rZW4gPSB0aGlzLnRva2VuXG4gICAgdGhpcy5uZXh0KClcbiAgICBsZXQgaWQgPSB0aGlzLnRva2VuXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAoIXRoaXMuZnJhbWVzLmV4aXN0cyhpZC52YWx1ZSwgJ2NsYXNzJykpIHtcbiAgICAgIGVycm9yKHRoaXMsIGlkLCAndW5kZWNsYXJlZCBjbGFzcycpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBsZXQgYXJncyA9IFtdXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fcGFyZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIGlmICghdGhpcy5pcygnY2xvc2VfcGFyZW4nKSkge1xuICAgICAgICBhcmdzID0gdGhpcy5leHBycygnY2xvc2VfcGFyZW4nLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHJldHVybiBuZXcgTm9kZSh0aGlzLCB0b2tlbiwgeyBpZCwgYXJncyB9KVxuICB9XG5cbiAgdGhpc19leHByICgpIHtcbiAgICBpZiAoIXRoaXMuaW5fY2xhc3MpIHtcbiAgICAgIGVycm9yKHRoaXMsIHRoaXMudG9rZW4sICdAIGNhbm5vdCBiZSB1c2VkIG91dHNpZGUgY2xhc3MgZGVmaW5pdGlvbicpXG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgaWYgKHRoaXMuaXMoJ3RoaXMnKSkge1xuICAgICAgcmV0dXJuIHRoaXMubmV4dF9leHByX25vZGUoKVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKCd0aGlzX2ZpZWxkJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmlkX2V4cHIoZmFsc2UpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBzdXBlcl9leHByICgpIHtcbiAgICBpZiAoIXRoaXMuaW5fY2xhc3MpIHtcbiAgICAgIGVycm9yKHRoaXMsIHRoaXMudG9rZW4sICdzdXBlciBjYW5ub3QgYmUgdXNlZCBvdXRzaWRlIGNsYXNzIGRlZmluaXRpb24nKVxuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlkX2V4cHIoZmFsc2UpXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2NsYXNzLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL3RlbXBsYXRlcy5qcydcbmltcG9ydCBDb2RlVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2NvZGUuanMnXG5pbXBvcnQgQmxvY2tUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvYmxvY2suanMnXG5pbXBvcnQgU3RhdGVtZW50VGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL3N0YXRlbWVudHMuanMnXG5pbXBvcnQgRXhwcmVzc2lvblRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9leHByZXNzaW9ucy5qcydcbmltcG9ydCBQcmltaXRpdmVUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvcHJpbWl0aXZlcy5qcydcbmltcG9ydCBPcGVyYXRvclRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9vcGVyYXRvcnMuanMnXG5pbXBvcnQgSWRUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvaWQuanMnXG5pbXBvcnQgQ2xhc3NUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvY2xhc3MuanMnXG5pbXBvcnQgRm5UZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvZm4uanMnXG5pbXBvcnQgQXJyYXlUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvYXJyYXkuanMnXG5pbXBvcnQgRGljdFRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9kaWN0LmpzJ1xuaW1wb3J0IEFzc2lnblRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9hc3NpZ24uanMnXG5cbmNsYXNzIEVtcHR5Q2xhc3Mge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNwaWxlciBleHRlbmRzIG1peChFbXB0eUNsYXNzKS53aXRoKFxuICBUZW1wbGF0ZXMsXG4gIENvZGVUZW1wbGF0ZXMsXG5cbiAgQmxvY2tUZW1wbGF0ZXMsXG4gIFN0YXRlbWVudFRlbXBsYXRlcyxcbiAgRXhwcmVzc2lvblRlbXBsYXRlcyxcblxuICBQcmltaXRpdmVUZW1wbGF0ZXMsXG4gIE9wZXJhdG9yVGVtcGxhdGVzLFxuICBJZFRlbXBsYXRlcyxcblxuICBDbGFzc1RlbXBsYXRlcyxcbiAgRm5UZW1wbGF0ZXMsXG5cbiAgQXJyYXlUZW1wbGF0ZXMsXG4gIERpY3RUZW1wbGF0ZXMsXG5cbiAgQXNzaWduVGVtcGxhdGVzXG4pIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7IHJldHVybiB0aGlzLmxpbmVzLmxlbmd0aCB9XG5cbiAgZ2V0IGVvcyAoKSB7IHJldHVybiB0aGlzLm9mZnNldCA+PSB0aGlzLm5vZGVzLmxlbmd0aCB9XG5cbiAgZ2V0IG5vZGUgKCkgeyByZXR1cm4gdGhpcy5ub2RlX2F0KHRoaXMub2Zmc2V0KSB9XG5cbiAgdmFsaWRPZmZzZXQgKG9mZnNldCkgeyByZXR1cm4gb2Zmc2V0ID49IDAgJiYgb2Zmc2V0IDwgdGhpcy5ub2Rlcy5sZW5ndGggfVxuXG4gIG5vZGVfYXQgKG9mZnNldCkgeyByZXR1cm4gdGhpcy52YWxpZE9mZnNldChvZmZzZXQpID8gdGhpcy5ub2Rlc1tvZmZzZXRdIDogbnVsbCB9XG5cbiAgcGVlayAoYyA9IDEpIHsgcmV0dXJuIHRoaXMubm9kZV9hdCh0aGlzLm9mZnNldCArIGMpIH1cblxuICBuZXh0IChjID0gMSkgeyB0aGlzLm9mZnNldCArPSBjIH1cblxuICB3cml0ZSAoLi4udmFsdWVzKSB7IHRoaXMubGluZSArPSB2YWx1ZXMuam9pbignJykgfVxuXG4gIHdyaXRlbG4gKC4uLnZhbHVlcykge1xuICAgIHRoaXMud3JpdGUoLi4udmFsdWVzKVxuICAgIHRoaXMubGluZXMgPSB0aGlzLmxpbmVzLmNvbmNhdCh0aGlzLmxpbmUuc3BsaXQoJ1xcbicpKVxuICAgIHRoaXMubGluZSA9ICcnXG4gIH1cblxuICByZXNldCAobm9kZXMpIHtcbiAgICB0aGlzLmVycm9ycyA9IDBcbiAgICB0aGlzLm5vZGVzID0gbm9kZXMgfHwgW11cbiAgICB0aGlzLmxpbmVzID0gW11cbiAgICB0aGlzLmxpbmUgPSAnJ1xuICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgIHRoaXMuY29kZSA9ICcnXG4gICAgdGhpcy5pbmRlbnRfbGV2ZWwgPSAwXG4gIH1cblxuICBjb21tYSAobm9kZXMpIHtcbiAgICBsZXQgYSA9IFtdXG4gICAgZm9yIChsZXQgbiBvZiBub2Rlcykge1xuICAgICAgYS5wdXNoKG4gaW5zdGFuY2VvZiBOb2RlID8gdGhpcy5leHByKG4pIDogbilcbiAgICB9XG4gICAgcmV0dXJuIGEuam9pbignLCAnKVxuICB9XG5cbiAgbG4gKHN0cikgeyByZXR1cm4gc3RyICsgKCFfLmVuZHNXaXRoKHN0ciwgJ1xcbicpID8gJ1xcbicgOiAnJykgfVxuXG4gIGluZGVudCAoc3RyKSB7IHJldHVybiBfLnBhZFN0YXJ0KCcnLCB0aGlzLmluZGVudF9sZXZlbCAqIDIpICsgc3RyIH1cblxuICBzdHIgKHZhbHVlKSB7IHJldHVybiAnXFwnJyArIHZhbHVlLnJlcGxhY2UoLycvZywgJ1xcJycpICsgJ1xcJycgfVxuXG4gIHJ1biAobm9kZXMpIHtcbiAgICB0aGlzLnJlc2V0KG5vZGVzKVxuICAgIHRoaXMuY29kZV9zdGFydCgpXG4gICAgd2hpbGUgKCF0aGlzLmVvcykge1xuICAgICAgdGhpcy53cml0ZWxuKHRoaXMuc3RhdGVtZW50KHRoaXMubm9kZSkpXG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgICB0aGlzLmNvZGVfZW5kKClcbiAgICB0aGlzLmNvZGUgPSB0aGlzLmxpbmVzLmpvaW4oJ1xcbicpXG4gICAgcmV0dXJuIHRoaXMuY29kZVxuICB9XG5cbiAgZHVtcCAoKSB7XG4gICAgY29uc29sZS5pbmZvKCd0cmFuc3BpbGVyIGR1bXAnKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29kZSlcbiAgICBjb25zb2xlLmxvZygnJylcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdHJhbnNwaWxlci5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICB0ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIGlmIChfLmlzU3RyaW5nKG5vZGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlX3RlbXBsYXRlKG5vZGUpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2ZuJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmZuX2NhbGxfdGVtcGxhdGUobm9kZSlcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnZm5fYXNzaWduJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmZuX2Fzc2lnbl90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKCdvcGVuX2JyYWNrZXQnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuYXJyYXlfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnb3Blbl9jdXJseScpKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaWN0X3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoWydtYXRoJywgJ2xvZ2ljJywgJ2NvbXAnXSkpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wZXJhdG9yX3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoWyd0aGlzJywgJ3RoaXNfZmllbGQnXSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoaXNfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnbmV3JykpIHtcbiAgICAgIHJldHVybiB0aGlzLm5ld190ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKFsnY2hhcicsICdzdHJpbmcnXSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0cmluZ190ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKCdpZCcpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pZF90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlX3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBDb2RlVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgY29kZV9zdGFydF90ZW1wbGF0ZSAoKSB7XG4gICAgdGhpcy53cml0ZWxuKCcoZnVuY3Rpb24gKCkgeycpXG4gICAgdGhpcy5pbmRlbnRfbGV2ZWwrK1xuICAgIHRoaXMud3JpdGVsbignXFwndXNlIHN0cmljdFxcJzsnKVxuICAgIHRoaXMud3JpdGVsbigpXG4gIH1cblxuICBjb2RlX2VuZF90ZW1wbGF0ZSAoKSB7XG4gICAgdGhpcy53cml0ZWxuKCd9KSgpOycpXG4gICAgdGhpcy5pbmRlbnRfbGV2ZWwtLVxuICAgIHRoaXMud3JpdGVsbigpXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvY29kZS5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBCbG9ja1RlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGJsb2NrX3RlbXBsYXRlIChub2RlKSB7XG4gICAgbGV0IHN0ciA9IHRoaXMubG4oJ3snKVxuXG4gICAgdGhpcy5pbmRlbnRfbGV2ZWwrK1xuXG4gICAgaWYgKF8uaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yIChsZXQgbiBvZiBub2RlKSB7XG4gICAgICAgIHN0ciArPSB0aGlzLnN0YXRlbWVudF90ZW1wbGF0ZShuKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHN0ciA9IHRoaXMuc3RhdGVtZW50X3RlbXBsYXRlKG5vZGUpXG4gICAgfVxuXG4gICAgdGhpcy5pbmRlbnRfbGV2ZWwtLVxuXG4gICAgc3RyICs9IHRoaXMubG4odGhpcy5pbmRlbnQoJ30nKSlcblxuICAgIHJldHVybiBzdHJcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9ibG9jay5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBTdGF0ZW1lbnRUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBzdGF0ZW1lbnRfdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICBsZXQgc3RyID0gJydcblxuICAgIGlmIChfLmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAobGV0IG4gb2Ygbm9kZSkge1xuICAgICAgICBzdHIgKz0gdGhpcy5zdGF0ZW1lbnQobilcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZSkge1xuICAgICAgbGV0IGQgPSBub2RlLmRhdGEgfHwge31cbiAgICAgIGxldCB0ID0ge31cblxuICAgICAgaWYgKG5vZGUuaXMoWydhc3NpZ24nLCAnZm5fYXNzaWduJ10pKSB7XG4gICAgICAgIHQgPSB0aGlzLmFzc2lnbihub2RlKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnZm4nKSkge1xuICAgICAgICB0ID0gdGhpcy5mbl9jYWxsKG5vZGUsIHRydWUpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChub2RlLmlzKCdpZicpKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgdG1wbDogJ2lmICgje2V4cHJ9KSAje3RydWVfYm9keX0je2ZhbHNlX2JvZHl9JyxcbiAgICAgICAgICBkYXQ6IHtcbiAgICAgICAgICAgIGV4cHI6IHRoaXMuZXhwcihkLmV4cHIpLFxuICAgICAgICAgICAgdHJ1ZV9ib2R5OiB0aGlzLmJsb2NrKGQudHJ1ZV9ib2R5KSxcbiAgICAgICAgICAgIGZhbHNlX2JvZHk6IHRoaXMuc3RhdGVtZW50KGQuZmFsc2VfYm9keSksXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChub2RlLmlzKCdlbHNlJykpIHtcbiAgICAgICAgaWYgKGQuZXhwcikgeyAvLyBlbHNlIGlmXG4gICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgIHRtcGw6ICdlbHNlIGlmICgje2V4cHJ9KSAje3RydWVfYm9keX0je2ZhbHNlX2JvZHl9JyxcbiAgICAgICAgICAgIGRhdDoge1xuICAgICAgICAgICAgICBleHByOiB0aGlzLmV4cHIoZC5leHByKSxcbiAgICAgICAgICAgICAgdHJ1ZV9ib2R5OiB0aGlzLmJsb2NrKGQudHJ1ZV9ib2R5KSxcbiAgICAgICAgICAgICAgZmFsc2VfYm9keTogdGhpcy5zdGF0ZW1lbnQoZC5mYWxzZV9ib2R5KSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgIHRtcGw6ICdlbHNlICN7ZmFsc2VfYm9keX0nLFxuICAgICAgICAgICAgZGF0OiB7IGZhbHNlX2JvZHk6IHRoaXMuYmxvY2soZC5mYWxzZV9ib2R5KSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChub2RlLmlzKCd3aGlsZScpKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgdG1wbDogJ3doaWxlICgje2V4cHJ9KSAje2JvZHl9JyxcbiAgICAgICAgICBkYXQ6IHtcbiAgICAgICAgICAgIGV4cHI6IHRoaXMuZXhwcihkLmV4cHIpLFxuICAgICAgICAgICAgYm9keTogdGhpcy5ibG9jayhkLmJvZHkpLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnZm9yJykpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICB0bXBsOiAnZm9yIChsZXQgI3t2fSA9ICN7bWluX2V4cHJ9OyAje3Z9IDwgI3ttYXhfZXhwcn07ICN7dn0gKz0gI3tzdGVwX2V4cHJ9KSAje2JvZHl9JyxcbiAgICAgICAgICBkYXQ6IHtcbiAgICAgICAgICAgIHY6IGQudi52YWx1ZSxcbiAgICAgICAgICAgIG1pbl9leHByOiB0aGlzLmV4cHIoZC5taW5fZXhwciksXG4gICAgICAgICAgICBtYXhfZXhwcjogdGhpcy5leHByKGQubWF4X2V4cHIpLFxuICAgICAgICAgICAgc3RlcF9leHByOiBkLnN0ZXBfZXhwciA/IHRoaXMuZXhwcihkLnN0ZXBfZXhwcikgOiAnMScsXG4gICAgICAgICAgICBib2R5OiB0aGlzLmJsb2NrKGQuYm9keSksXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChub2RlLmlzKCdyZXR1cm4nKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICdyZXR1cm4gI3thcmdzfScsXG4gICAgICAgICAgZGF0OiB7IGFyZ3M6IHRoaXMuZXhwcihkLmFyZ3MsICcsICcpIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcyhbJ2JyZWFrJywgJ2NvbnRpbnVlJ10pKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgdG1wbDogJyN7d29yZH0nLFxuICAgICAgICAgIGRhdDogeyB3b3JkOiBub2RlLnZhbHVlIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnY2xhc3MnKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICdjbGFzcyAje25hbWV9I3tfZXh0ZW5kc30gI3tib2R5fScsXG4gICAgICAgICAgZGF0OiB7XG4gICAgICAgICAgICBuYW1lOiBkLmlkLnZhbHVlLFxuICAgICAgICAgICAgX2V4dGVuZHM6IGQuX2V4dGVuZHMgPyAnIGV4dGVuZHMgJyArIHRoaXMuZXhwcihkLl9leHRlbmRzLCAnLCAnKSA6ICcnLFxuICAgICAgICAgICAgYm9keTogdGhpcy5ibG9jayhkLmJvZHkpLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdHIgPSBfLnRlbXBsYXRlKHQudG1wbCkodC5kYXQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubG4odGhpcy5pbmRlbnQoc3RyKSlcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9zdGF0ZW1lbnRzLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEV4cHJlc3Npb25UZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBleHByX3RlbXBsYXRlIChub2RlLCBzZXBhcmF0b3IpIHtcbiAgICBsZXQgc3RyID0gJydcblxuICAgIGlmIChfLmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGxldCBhID0gW11cbiAgICAgIGZvciAobGV0IG4gb2Ygbm9kZSkge1xuICAgICAgICBhLnB1c2godGhpcy5leHByKG4pKVxuICAgICAgfVxuICAgICAgc3RyID0gYS5qb2luKHNlcGFyYXRvciB8fCAnJylcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgIGxldCBkID0gbm9kZSAmJiBub2RlLmRhdGEgfHwge31cbiAgICAgIGxldCB0ID0gbm9kZSA/IHRoaXMudGVtcGxhdGUobm9kZSwgZCkgOiB7IHRtcGw6ICd1bmRlZmluZWQnLCBkYXQ6IHt9IH1cbiAgICAgIHN0ciA9IF8udGVtcGxhdGUodC50bXBsKSh0LmRhdClcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZXhwcmVzc2lvbnMuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgUHJpbWl0aXZlVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgc3RyaW5nX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje3ZhbHVlfScsXG4gICAgICBkYXQ6IHsgdmFsdWU6IHRoaXMuc3RyKG5vZGUudmFsdWUpIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvcHJpbWl0aXZlcy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBPcGVyYXRvclRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIG9wZXJhdG9yX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje2xlZnR9ICN7b3B9ICN7cmlnaHR9JyxcbiAgICAgIGRhdDoge1xuICAgICAgICBvcDogbm9kZS52YWx1ZSxcbiAgICAgICAgbGVmdDogdGhpcy5leHByX3RlbXBsYXRlKGQubGVmdCksXG4gICAgICAgIHJpZ2h0OiB0aGlzLmV4cHJfdGVtcGxhdGUoZC5yaWdodCksXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL29wZXJhdG9ycy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJZFRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIG5vZGVfdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG1wbDogJyN7bm9kZX0nLFxuICAgICAgZGF0OiB7IG5vZGUgfVxuICAgIH1cbiAgfVxuXG4gIGlkX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje2ZpZWxkfSN7dmFsdWV9I3tmaWVsZHN9I3thc3NpZ259JyxcbiAgICAgIGRhdDoge1xuICAgICAgICBmaWVsZDogbm9kZS5fZmllbGQgPyAnLicgOiAnJyxcbiAgICAgICAgdmFsdWU6IG5vZGUudmFsdWUsXG4gICAgICAgIGZpZWxkczogZC5maWVsZHMgPyB0aGlzLmV4cHJfdGVtcGxhdGUoZC5maWVsZHMsICcnKSA6ICcnLFxuICAgICAgICBhc3NpZ246IGQuYXNzaWduID8gJyA9ICcgKyB0aGlzLmV4cHJfdGVtcGxhdGUoZC5hc3NpZ24sICcnKSA6ICcnLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhbHVlX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje3ZhbHVlfScsXG4gICAgICBkYXQ6IHsgdmFsdWU6IG5vZGUudmFsdWUgfVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9pZC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBDbGFzc1RlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIHRoaXNfdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG1wbDogJ3RoaXMje2RvdH0je2ZpZWxkfSN7ZmllbGRzfScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgZG90OiBub2RlLmlzKCd0aGlzX2ZpZWxkJykgPyAnLicgOiAnJyxcbiAgICAgICAgZmllbGQ6IG5vZGUuaXMoJ3RoaXNfZmllbGQnKSA/IG5vZGUudmFsdWUgOiAnJyxcbiAgICAgICAgZmllbGRzOiBkLmZpZWxkcyA/IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmZpZWxkcywgJycpIDogJycsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3X3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICduZXcgI3tpZH0oI3thcmdzfSknLFxuICAgICAgZGF0OiB7XG4gICAgICAgIGlkOiBkLmlkLnZhbHVlLFxuICAgICAgICBhcmdzOiB0aGlzLmV4cHJfdGVtcGxhdGUoZC5hcmdzLCAnLCAnKSxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvY2xhc3MuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgRm5UZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBmbl9kZWYgKGFyZ3MsIGJvZHksIGluX2NsYXNzKSB7XG4gICAgcmV0dXJuIF8udGVtcGxhdGUoJyN7Zm59KCN7YXJnc30pICN7Ym9keX0nKSh7XG4gICAgICBmbjogIWluX2NsYXNzID8gJ2Z1bmN0aW9uICcgOiAnJyxcbiAgICAgIGFyZ3M6IHRoaXMuZXhwcl90ZW1wbGF0ZShhcmdzLCAnLCAnKSxcbiAgICAgIGJvZHk6IHRoaXMuYmxvY2tfdGVtcGxhdGUoYm9keSksXG4gICAgfSlcbiAgfVxuXG4gIGZuX2NhbGxfdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICBsZXQgdCA9IHt9XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGxldCBkID0gbm9kZS5kYXRhIHx8IHt9XG4gICAgICB0ID0ge1xuICAgICAgICB0bXBsOiAnI3tmaWVsZH0je2ZufSgje2FyZ3N9KScsXG4gICAgICAgIGRhdDoge1xuICAgICAgICAgIGZpZWxkOiBub2RlLl9maWVsZCA/ICcuJyA6ICcnLFxuICAgICAgICAgIGZuOiBub2RlLnZhbHVlLFxuICAgICAgICAgIGFyZ3M6IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmFyZ3MsICcsICcpLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0XG4gIH1cblxuICBmbl9hc3NpZ25fdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG1wbDogJyN7Zm59JyxcbiAgICAgIGRhdDogeyBmbjogdGhpcy5mbl9kZWYoZC5hcmdzLCBkLmJvZHkpIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZm4uanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQXJyYXlUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBhcnJheV90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnWyN7YXJnc31dI3tmaWVsZHN9JyxcbiAgICAgIGRhdDoge1xuICAgICAgICBhcmdzOiB0aGlzLmV4cHJfdGVtcGxhdGUoZC5hcmdzLCAnLCAnKSxcbiAgICAgICAgZmllbGRzOiBkLmZpZWxkcyA/IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmZpZWxkcywgJycpIDogJycsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2FycmF5LmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIERpY3RUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBkaWN0X3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgbGV0IGRlZiA9IF8ubWFwKGQuZGVmLCBmID0+IF8udGVtcGxhdGUoJyN7dmFsdWV9OiAje2V4cHJ9JykoeyB2YWx1ZTogZi52YWx1ZSwgZXhwcjogdGhpcy5leHByX3RlbXBsYXRlKGYuZGF0YS5leHByKSB9KSlcbiAgICByZXR1cm4ge1xuICAgICAgdG1wbDogJ3sje2RlZn19I3tmaWVsZHN9JyxcbiAgICAgIGRhdDoge1xuICAgICAgICBkZWY6IHRoaXMuZXhwcl90ZW1wbGF0ZShkZWYsICcsICcpLFxuICAgICAgICBmaWVsZHM6IGQuZmllbGRzID8gdGhpcy5leHByX3RlbXBsYXRlKGQuZmllbGRzLCAnJykgOiAnJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9kaWN0LmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEFzc2lnblRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGFzc2lnbl90ZW1wbGF0ZSAobm9kZSkge1xuICAgIGxldCB0ID0ge31cbiAgICBpZiAobm9kZSkge1xuICAgICAgbGV0IGQgPSBub2RlLmRhdGEgfHwge31cblxuICAgICAgbGV0IGlkID0gdGhpcy5leHByX3RlbXBsYXRlKGQuaWQpXG4gICAgICBsZXQgX2xldCA9IG5vZGUuX2xldCA/ICdsZXQgJyA6ICcnXG4gICAgICBsZXQgZXhwclxuICAgICAgbGV0IG9wXG5cbiAgICAgIGlmIChub2RlLmlzKCdhc3NpZ24nKSkge1xuICAgICAgICBvcCA9ICcgJyArIG5vZGUudmFsdWUgKyAnICdcbiAgICAgICAgZXhwciA9IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmV4cHIpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChub2RlLmlzKCdmbl9hc3NpZ24nKSkge1xuICAgICAgICBvcCA9ICFub2RlLl9pbl9jbGFzcyB8fCBub2RlLl9mbl9sZXZlbCA+IDAgPyAnID0gJyA6ICcgJ1xuICAgICAgICBleHByID0gdGhpcy5mbl9kZWYoZC5hcmdzLCBkLmJvZHksIG5vZGUuX2luX2NsYXNzICYmIG5vZGUuX2ZuX2xldmVsID09PSAwKVxuICAgICAgfVxuXG4gICAgICB0ID0ge1xuICAgICAgICB0bXBsOiAnI3tfbGV0fSN7aWR9I3tvcH0je2V4cHJ9JyxcbiAgICAgICAgZGF0OiB7IF9sZXQsIGlkLCBvcCwgZXhwciB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvYXNzaWduLmpzIiwiaW1wb3J0IGhleHkgZnJvbSAnaGV4eSdcbmltcG9ydCB7IGhleCB9IGZyb20gJy4uL2dsb2JhbHMuanMnXG5cbmV4cG9ydCBjb25zdCBkYXRhX3R5cGVfc2l6ZXMgPSB7XG4gIGk4OiAxLFxuICBzODogMSxcbiAgaTE2OiAyLFxuICBzMTY6IDIsXG4gIGkzMjogNCxcbiAgczMyOiA0LFxuICBmMzI6IDQsXG4gIHN0cjogNjQsXG59XG5cbmV4cG9ydCBjb25zdCBkYXRhX3R5cGVfZm5zID0ge1xuICBpODogJ1VpbnQ4JyxcbiAgczg6ICdJbnQ4JyxcbiAgaTE2OiAnVWludDE2JyxcbiAgczE2OiAnSW50MTYnLFxuICBpMzI6ICdVaW50MzInLFxuICBzMzI6ICdJbnQzMicsXG4gIGYzMjogJ0Zsb2F0MzInLFxufVxuXG5leHBvcnQgdmFyIGRhdGFfdHlwZV9zaXplID0gdHlwZSA9PiBfLmlzTnVtYmVyKHR5cGUpID8gdHlwZSA6IGRhdGFfdHlwZV9zaXplc1t0eXBlXVxuXG5leHBvcnQgY2xhc3MgTWVtb3J5IHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHRoaXMuX3NpemUgPSBtYWluLmRlZmF1bHRzKCdtZW1vcnkuc2l6ZScpXG4gICAgdGhpcy5fdG9wID0gMFxuICAgIHRoaXMuX2JvdHRvbSA9IHRoaXMuX3RvcCArIHRoaXMuX3NpemUgLSAxXG5cbiAgICB0aGlzLl9idWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy5fc2l6ZSlcblxuICAgIHRoaXMuX2RhdGEgPSBuZXcgVWludDhBcnJheSh0aGlzLl9idWZmZXIpXG5cbiAgICB0aGlzLl92aWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuX2J1ZmZlcilcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGVhcigpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl92aWV3ID0gbnVsbFxuICAgIHRoaXMuX2RhdGEgPSBudWxsXG4gICAgdGhpcy5fYnVmZmVyID0gbnVsbFxuICB9XG5cbiAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fbWFpbiB9XG5cbiAgZ2V0IGJ1ZmZlciAoKSB7IHJldHVybiB0aGlzLl9idWZmZXIgfVxuICBnZXQgZGF0YSAoKSB7IHJldHVybiB0aGlzLl9kYXRhIH1cbiAgZ2V0IHZpZXcgKCkgeyByZXR1cm4gdGhpcy5fdmlldyB9XG4gIGdldCB0b3AgKCkgeyByZXR1cm4gdGhpcy5fdG9wIH1cbiAgZ2V0IGJvdHRvbSAoKSB7IHJldHVybiB0aGlzLl9ib3R0b20gfVxuICBnZXQgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9zaXplIH1cblxuICBjbGVhciAoZCA9IDApIHtcbiAgICB0aGlzLmZpbGwoMCwgdGhpcy5fdG9wLCB0aGlzLl9zaXplKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBjaGtfYm91bmRzIChhZGRyLCBzeiA9IDQpIHtcbiAgICBpZiAoYWRkciA8IHRoaXMuX3RvcCB8fCBhZGRyICsgc3ogPiB0aGlzLl9ib3R0b20pIHtcbiAgICAgIHRoaXMuaGx0KDB4MDgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkYiAodHlwZSwgYWRkciwgLi4uYXJncykge1xuICAgIGxldCBzeiA9IGRhdGFfdHlwZV9zaXplc1t0eXBlXVxuICAgIGxldCBmbiA9IHRoaXMuX3ZpZXdbJ3NldCcgKyBkYXRhX3R5cGVfZm5zW3R5cGVdXVxuICAgIGZvciAobGV0IGEgb2YgYXJncykge1xuICAgICAgZm4uY2FsbCh0aGlzLl92aWV3LCBhZGRyLCBhKVxuICAgICAgYWRkciArPSBzelxuICAgIH1cbiAgICByZXR1cm4gYWRkclxuICB9XG5cbiAgZGJfYmMgKHR5cGUsIGFkZHIsIC4uLmFyZ3MpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgYXJncy5sZW5ndGggKiBkYXRhX3R5cGVfc2l6ZXNbdHlwZV0pXG4gICAgdGhpcy5kYih0eXBlLCBhZGRyLCAuLi5hcmdzKVxuICB9XG5cbiAgbGQgKHR5cGUsIGFkZHIpIHsgcmV0dXJuIHRoaXMuX3ZpZXdbJ2dldCcgKyBkYXRhX3R5cGVfZm5zW3R5cGVdXShhZGRyLCBfdm0ubGl0dGxlRW5kaWFuKSB9XG5cbiAgbGRiIChhZGRyKSB7IHJldHVybiB0aGlzLmxkKCdpOCcsIGFkZHIpIH1cblxuICBsZHcgKGFkZHIpIHsgcmV0dXJuIHRoaXMubGQoJ2kxNicsIGFkZHIpIH1cblxuICBsZGQgKGFkZHIpIHsgcmV0dXJuIHRoaXMubGQoJ2kzMicsIGFkZHIpIH1cblxuICBsZGYgKGFkZHIpIHsgcmV0dXJuIHRoaXMubGQoJ2YzMicsIGFkZHIpIH1cblxuICBsZF9iYyAodHlwZSwgYWRkcikge1xuICAgIHRoaXMuY2hrX2JvdW5kcyhhZGRyLCBkYXRhX3R5cGVfc2l6ZXNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXMubGQodHlwZSwgYWRkcilcbiAgfVxuXG4gIHN0ICh0eXBlLCBhZGRyLCB2YWx1ZSkgeyB0aGlzLl92aWV3WydzZXQnICsgZGF0YV90eXBlX2Zuc1t0eXBlXV0oYWRkciwgdmFsdWUsIF92bS5saXR0bGVFbmRpYW4pIH1cblxuICBzdGIgKGFkZHIsIHZhbHVlKSB7IHRoaXMuc3QoJ2k4JywgYWRkciwgdmFsdWUpIH1cblxuICBzdHcgKGFkZHIsIHZhbHVlKSB7IHRoaXMuc3QoJ2kxNicsIGFkZHIsIHZhbHVlKSB9XG5cbiAgc3RkIChhZGRyLCB2YWx1ZSkgeyB0aGlzLnN0KCdpMzInLCBhZGRyLCB2YWx1ZSkgfVxuXG4gIHN0ZiAoYWRkciwgdmFsdWUpIHsgdGhpcy5zdCgnZjMyJywgYWRkciwgdmFsdWUpIH1cblxuICBzdF9iYyAodHlwZSwgYWRkciwgdmFsdWUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgZGF0YV90eXBlX3NpemVzW3R5cGVdKVxuICAgIHRoaXMuc3QodHlwZSwgYWRkciwgdmFsdWUpXG4gIH1cblxuICBsZGwgKGFkZHIsIHNpemUpIHsgcmV0dXJuIHRoaXMuX2RhdGEuc2xpY2UoYWRkciwgYWRkciArIHNpemUgLSAxKSB9XG5cbiAgbGRsX2JjIChhZGRyLCBzaXplKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKGFkZHIsIHNpemUpXG4gICAgcmV0dXJuIHRoaXMubGRsKGFkZHIsIHNpemUpXG4gIH1cblxuICBsZHMgKGFkZHIsIHNpemUpIHtcbiAgICBpZiAoXy5pc1N0cmluZyhhZGRyKSkgeyAgLy8gYXNzZW1ibGVyIHdpbGwgdXNlIGxkcyhcIlwiKVxuICAgICAgcmV0dXJuIGFkZHJcbiAgICB9XG5cbiAgICBsZXQgcyA9ICcnXG4gICAgc2l6ZSA9IHNpemUgfHwgZGF0YV90eXBlX3NpemVzLnN0clxuICAgIGxldCBib3R0b20gPSBNYXRoLm1pbihhZGRyICsgc2l6ZSAtIDEsIHRoaXMuX2JvdHRvbSlcbiAgICBsZXQgbWVtID0gdGhpcy5fZGF0YVxuICAgIHdoaWxlIChhZGRyIDw9IGJvdHRvbSkge1xuICAgICAgbGV0IGMgPSBtZW1bYWRkcisrXVxuICAgICAgaWYgKGMgPT09IDApIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYylcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNcbiAgfVxuXG4gIGxkc19iYyAoYWRkciwgc2l6ZSkge1xuICAgIHRoaXMuY2hrX2JvdW5kcyhhZGRyLCBNYXRoLm1pbihzaXplIHx8IDAsIGRhdGFfdHlwZV9zaXplcy5zdHIpKVxuICAgIHJldHVybiB0aGlzLmxkcyhhZGRyLCBzaXplKVxuICB9XG5cbiAgc3RsIChhZGRyLCB2YWx1ZSwgc2l6ZSkgeyB0aGlzLl9kYXRhLnNldCh2YWx1ZS5zdWJhcnJheSgwLCBzaXplIHx8IHZhbHVlLmJ5dGVMZW5ndGgpLCBhZGRyKSB9XG5cbiAgc3RsX2JjIChhZGRyLCB2YWx1ZSwgc2l6ZSkge1xuICAgIHRoaXMuY2hrX2JvdW5kcyhhZGRyLCBNYXRoLm1pbihzaXplIHx8IDAsIHZhbHVlLmJ5dGVMZW5ndGgpKVxuICAgIHRoaXMuc3RsKGFkZHIsIHZhbHVlLCBzaXplKVxuICB9XG5cbiAgc3RzIChhZGRyLCBzdHIsIHNpemUpIHtcbiAgICBzaXplID0gc2l6ZSB8fCBkYXRhX3R5cGVfc2l6ZXMuc3RyIC0gMVxuICAgIGxldCBhID0gXy5tYXAoc3RyLnNwbGl0KCcnKSwgaSA9PiBpLmNoYXJDb2RlQXQoMCkpXG4gICAgYS5sZW5ndGggPSBNYXRoLm1pbihzaXplLCBhLmxlbmd0aClcbiAgICB0aGlzLmZpbGwoMCwgYWRkciwgc2l6ZSlcbiAgICB0aGlzLl9kYXRhLnNldChhLCBhZGRyKVxuICB9XG5cbiAgc3RzX2JjIChhZGRyLCBzdHIsIHNpemUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgTWF0aC5taW4oc2l6ZSwgZGF0YV90eXBlX3NpemVzLnN0cikpXG4gICAgdGhpcy5zdHMoYWRkciwgc3RyLCBzaXplKVxuICB9XG5cbiAgZmlsbCAodmFsdWUsIHRvcCwgc2l6ZSkgeyB0aGlzLl9kYXRhLmZpbGwodmFsdWUgfHwgMCwgdG9wLCB0b3AgKyBzaXplKSB9XG5cbiAgZmlsbF9iYyAodmFsdWUsIHRvcCwgc2l6ZSkge1xuICAgIHRoaXMuY2hrX2JvdW5kcyh0b3AsIHNpemUpXG4gICAgdGhpcy5maWxsKHZhbHVlLCB0b3AsIHNpemUpXG4gIH1cblxuICBjb3B5IChzcmMsIHRndCwgc2l6ZSkgeyB0aGlzLl9kYXRhLmNvcHlXaXRoaW4odGd0LCBzcmMsIHNyYyArIHNpemUgLSAxKSB9XG5cbiAgY29weV9iYyAoc3JjLCB0Z3QsIHNpemUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoc3JjLCBzaXplKVxuICAgIHRoaXMuY2hrX2JvdW5kcyh0Z3QsIHNpemUpXG4gICAgdGhpcy5jb3B5KHNyYywgdGd0LCBzaXplKVxuICB9XG5cbiAgcmVhZCAoYWRkciwgdHlwZSA9ICdpOCcpIHtcbiAgICBsZXQgdmFsdWVcbiAgICBpZiAoXy5pc051bWJlcih0eXBlKSkge1xuICAgICAgdmFsdWUgPSB0aGlzLl9kYXRhLnNsaWNlKGFkZHIsIGFkZHIgKyB0eXBlIC0gMSlcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cicpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5sZHMoYWRkcilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubGQodHlwZSwgYWRkcilcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICB3cml0ZSAodmFsdWUsIGFkZHIsIHR5cGUgPSAnaTgnKSB7XG4gICAgbGV0IHN6XG4gICAgaWYgKF8uaXNOdW1iZXIodHlwZSkpIHtcbiAgICAgIHRoaXMuX2RhdGEuc2V0KHZhbHVlLnN1YmFycmF5KDAsIHR5cGUgLSAxKSwgYWRkcilcbiAgICAgIHN6ID0gdHlwZVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3RyJykge1xuICAgICAgdGhpcy5zdHMoYWRkciwgdmFsdWUpXG4gICAgICBzeiA9IGRhdGFfdHlwZV9zaXplc1t0eXBlXVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3QodHlwZSwgYWRkciwgdmFsdWUpXG4gICAgICBzeiA9IGRhdGFfdHlwZV9zaXplc1t0eXBlXVxuICAgIH1cbiAgICByZXR1cm4gYWRkciArIHN6XG4gIH1cblxuICBmcm9tX3N0cmluZyAoYWRkciwgc3RyKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgdyA9IHN0ci5sZW5ndGhcblxuICAgIGxldCB0aSA9IGFkZHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHc7IHgrKykge1xuICAgICAgZGF0YVt0aSsrXSA9IHN0ci5jaGFyQ29kZUF0KHgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpXG4gIH1cblxuICBmcm9tX3N0cmluZ19tYXNrIChhZGRyLCBzdHIsIG1hc2spIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGxldCB3ID0gc3RyLmxlbmd0aFxuXG4gICAgbGV0IHRpID0gYWRkclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgdzsgeCsrKSB7XG4gICAgICBkYXRhW3RpKytdID0gbWFza1tzdHJbeF1dXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpXG4gIH1cblxuICB0b19zdHJpbmcgKGFkZHIsIHNpemUpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGxldCBzID0gJydcblxuICAgIGxldCB0aSA9IGFkZHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemU7IHkrKykge1xuICAgICAgcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGRhdGFbdGkrK10pXG4gICAgfVxuXG4gICAgcmV0dXJuIHNcbiAgfVxuXG4gIHRvX3N0cmluZ19tYXNrIChhZGRyLCBzaXplLCBtYXNrKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgcyA9ICcnXG5cbiAgICBsZXQgdGkgPSBhZGRyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplOyB5KyspIHtcbiAgICAgIHMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShtYXNrW2RhdGFbdGkrK11dKVxuICAgIH1cblxuICAgIHJldHVybiBzXG4gIH1cblxuICBmcm9tX2FycmF5IChhZGRyLCBhcnIpIHtcbiAgICBsZXQgaCA9IGFyci5sZW5ndGhcblxuICAgIGxldCB0aSA9IGFkZHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGg7IHkrKykge1xuICAgICAgdGkgPSB0aGlzLmZyb21fc3RyaW5nKHRpLCBhcnJbeV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpXG4gIH1cblxuICBmcm9tX2FycmF5X21hc2sgKGFkZHIsIGFyciwgbWFzayA9IHt9KSB7XG4gICAgbGV0IGggPSBhcnIubGVuZ3RoXG5cbiAgICBsZXQgdGkgPSBhZGRyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICAgIHRpID0gdGhpcy5mcm9tX3N0cmluZ19tYXNrKHRpLCBhcnJbeV0sIG1hc2spXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpXG4gIH1cblxuICBmcm9tXzJkX2FycmF5X21hc2sgKGFkZHIsIGZyYW1lLCBjb3VudCwgd2lkdGgsIGFyciwgbWFzayA9IHt9KSB7XG4gICAgbGV0IGggPSBhcnIubGVuZ3RoXG4gICAgbGV0IGZ1bGxXaWR0aCA9IHdpZHRoICogY291bnRcbiAgICBsZXQgb2Zmc2V0ID0gZnJhbWUgKiB3aWR0aFxuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICAgIGxldCB0aSA9IGFkZHIgKyB5ICogZnVsbFdpZHRoICsgb2Zmc2V0XG4gICAgICB0aGlzLmZyb21fc3RyaW5nX21hc2sodGksIGFyclt5XSwgbWFzaylcbiAgICB9XG4gIH1cblxuICB0b19hcnJheSAoYWRkciwgdywgaCkge1xuICAgIGxldCBhcnIgPSBbXVxuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICAgIGFyci5wdXNoKHRoaXMudG9fc3RyaW5nKGFkZHIgKyB5ICogdywgdykpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFyclxuICB9XG5cbiAgdG9fYXJyYXlfbWFzayAoYWRkciwgdywgaCwgbWFzaykge1xuICAgIGxldCBhcnIgPSBbXVxuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICAgIGFyci5wdXNoKHRoaXMudG9fc3RyaW5nX21hc2soYWRkciArIHkgKiB3LCB3LCBtYXNrKSlcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyXG4gIH1cblxuICBkdW1wIChhZGRyID0gMCwgc2l6ZSA9IDEwMjQpIHtcbiAgICBjb25zb2xlLmxvZygnRHVtcGluZycsIHNpemUsICcgYnl0ZXMgZnJvbSBtZW1vcnkgYXQgJywgaGV4KGFkZHIpKVxuICAgIGNvbnNvbGUubG9nKGhleHkuaGV4eSh0aGlzLl9idWZmZXIsIHsgb2Zmc2V0OiBhZGRyLCBsZW5ndGg6IHNpemUsIHdpZHRoOiAxNiwgY2FwczogJ3VwcGVyJywgaW5kZW50OiAyIH0pKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9tZW1vcnkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZXh5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaGV4eVwiXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaGV4eSBmcm9tICdoZXh5J1xuaW1wb3J0IHByZXR0eUJ5dGVzIGZyb20gJ3ByZXR0eS1ieXRlcydcbmltcG9ydCB7IGRhdGFfdHlwZV9zaXplIH0gZnJvbSAnLi9tZW1vcnkuanMnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtb3J5TWFuYWdlciB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICB0aGlzLl9tYWluID0gbWFpblxuXG4gICAgdGhpcy5fY29sbGVjdF9kZWxheSA9IG1haW4uZGVmYXVsdHMoJ21lbW9yeV9tYW5hZ2VyLmNvbGxlY3RfZGVsYXknKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fYmxvY2tzID0gW11cbiAgICB0aGlzLl9sYXN0ID0gMFxuICAgIHJldHVybiB0aGlzLmNvbGxlY3QoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jb2xsZWN0KClcbiAgICB0aGlzLl9ibG9ja3MgPSBbXVxuICAgIHRoaXMuX2xhc3QgPSAwXG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgaWYgKHQgLSB0aGlzLl9sYXN0ID49IHRoaXMuX2NvbGxlY3RfZGVsYXkpIHtcbiAgICAgIHRoaXMuY29sbGVjdCgpXG4gICAgICB0aGlzLl9sYXN0ID0gdFxuICAgIH1cbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuICBnZXQgbWVtb3J5ICgpIHsgcmV0dXJuIHRoaXMuX21haW4ubWVtb3J5IH1cblxuICBnZXQgYmxvY2tzICgpIHsgcmV0dXJuIHRoaXMuX2Jsb2NrcyB9XG4gIGdldCBsYXN0ICgpIHsgcmV0dXJuIHRoaXMuX2xhc3QgfVxuICBnZXQgY29sbGVjdF9kZWxheSAoKSB7IHJldHVybiB0aGlzLl9jb2xsZWN0X2RlbGF5IH1cblxuICBnZXQgYXZhaWxfbWVtICgpIHsgcmV0dXJuIHRoaXMuX21haW4uc2l6ZSB9XG5cbiAgZ2V0IHVzZWRfbWVtICgpIHtcbiAgICBsZXQgc2l6ZSA9IDBcbiAgICBmb3IgKGxldCBiIG9mIHRoaXMuX2Jsb2Nrcykge1xuICAgICAgaWYgKGIudXNlZCkge1xuICAgICAgICBzaXplICs9IGIuc2l6ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2l6ZVxuICB9XG5cbiAgZ2V0IGZyZWVfbWVtICgpIHsgcmV0dXJuIHRoaXMuYXZhaWxfbWVtIC0gdGhpcy51c2VkX21lbSB9XG5cbiAgX2FsbG9jICh0eXBlLCBjb3VudCkge1xuICAgIGNvdW50ID0gY291bnQgfHwgMVxuICAgIGxldCBzaXplID0gZGF0YV90eXBlX3NpemUodHlwZSkgKiBjb3VudFxuICAgIGxldCBuID0gMFxuXG4gICAgZm9yIChsZXQgYiBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgIGlmIChiLmJvdHRvbSA+IG4pIHtcbiAgICAgICAgbiA9IGIuYm90dG9tXG4gICAgICB9XG5cbiAgICAgIGlmICghYi51c2VkICYmIGIuc2l6ZSA+PSBzaXplKSB7XG4gICAgICAgIGlmIChiLnNpemUgPT09IHNpemUpIHtcbiAgICAgICAgICBiLnVzZWQgPSB0cnVlXG4gICAgICAgICAgcmV0dXJuIGIudG9wXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9iID0gYi5ib3R0b21cbiAgICAgICAgYi5ib3R0b20gPSBiLnRvcCArIHNpemUgLSAxXG4gICAgICAgIGIuc2l6ZSA9IHNpemVcbiAgICAgICAgYi5jb3VudCA9IGNvdW50XG4gICAgICAgIGIudXNlZCA9IHRydWVcblxuICAgICAgICB0aGlzLl9ibG9ja3MucHVzaCh7IHRvcDogYi5ib3R0b20gKyAxLCBib3R0b206IG9iLCBzaXplOiBvYiAtIChiLmJvdHRvbSArIDEpLCBjb3VudCwgdHlwZSwgdXNlZDogZmFsc2UgfSlcblxuICAgICAgICByZXR1cm4gYi50b3BcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobiArIHNpemUgPiB0aGlzLmF2YWlsX21lbSkge1xuICAgICAgX3ZtLmhsdCgpXG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIGxldCBhZGRyID0gbiArIDFcblxuICAgIHRoaXMuX2Jsb2Nrcy5wdXNoKHsgdG9wOiBhZGRyLCBib3R0b206IGFkZHIgKyBzaXplIC0gMSwgc2l6ZSwgY291bnQsIHR5cGUsIHVzZWQ6IHRydWUgfSlcblxuICAgIF92bS5maWxsKDAsIGFkZHIsIHNpemUpXG5cbiAgICByZXR1cm4gYWRkclxuICB9XG5cbiAgYWxsb2MgKHR5cGUsIGNvdW50LCAuLi52YWx1ZSkge1xuICAgIGxldCBhZGRyID0gdGhpcy5fYWxsb2ModHlwZSwgY291bnQpXG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBzaXplID0gZGF0YV90eXBlX3NpemUodHlwZSkgKiBjb3VudFxuICAgICAgbGV0IGEgPSBhZGRyXG4gICAgICBmb3IgKGxldCB2IG9mIHZhbHVlKSB7XG4gICAgICAgIF92bS53cml0ZSh2LCBhLCB0eXBlKVxuICAgICAgICBhICs9IHNpemVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWRkclxuICB9XG5cbiAgZnJlZSAoYWRkcikge1xuICAgIGxldCBiID0gdGhpcy5ibG9jayhhZGRyKVxuICAgIGlmIChiKSB7XG4gICAgICBiLnVzZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGJsb2NrIChhZGRyKSB7XG4gICAgZm9yIChsZXQgYiBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgIGlmIChiLnRvcCA9PT0gYWRkcikge1xuICAgICAgICByZXR1cm4gYlxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgdHlwZSAoYWRkcikge1xuICAgIGxldCBiID0gdGhpcy5ibG9jayhhZGRyKVxuICAgIHJldHVybiBiICYmIGIudXNlZCA/IGIudHlwZSA6IG51bGxcbiAgfVxuXG4gIHNpemUgKGFkZHIpIHtcbiAgICBsZXQgYiA9IHRoaXMuYmxvY2soYWRkcilcbiAgICByZXR1cm4gYiAmJiBiLnVzZWQgPyBiLnNpemUgOiAtMVxuICB9XG5cbiAgY29sbGVjdCAoKSB7XG4gICAgbGV0IG4gPSBbXVxuICAgIGZvciAobGV0IGIgb2YgdGhpcy5fYmxvY2tzKSB7XG4gICAgICBpZiAoIWIudXNlZCkge1xuICAgICAgICBuLnB1c2goYilcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fYmxvY2tzID0gblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkdW1wICgpIHtcbiAgICBjb25zb2xlLmxvZygnbWVtb3J5IF9ibG9ja3MgZHVtcC4uLicsICdhdmFpbF9tZW06JywgcHJldHR5Qnl0ZXModGhpcy5hdmFpbF9tZW0pLCAndXNlZDonLCBwcmV0dHlCeXRlcyh0aGlzLnVzZWRfbWVtKSwgJ2ZyZWU6JywgcHJldHR5Qnl0ZXModGhpcy5mcmVlX21lbSkpXG4gICAgZm9yIChsZXQgYiBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKCcnKVxuICAgICAgY29uc29sZS5sb2coJ29mZnNldDonLCBfdm0uaGV4KGIudG9wLCAzMiksICdzaXplOicsIHRoaXMuc2l6ZShiLnRvcCksICd0eXBlOicsIHRoaXMudHlwZShiLnRvcCkpXG4gICAgICBjb25zb2xlLmxvZyhoZXh5LmhleHkoX3ZtLm1lbV9idWZmZXIsIHsgb2Zmc2V0OiBiLnRvcCwgbGVuZ3RoOiBNYXRoLm1pbigyNTUsIGIuc2l6ZSksIHdpZHRoOiAxNiwgY2FwczogJ3VwcGVyJywgaW5kZW50OiAyIH0pKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL21lbW9yeW1hbmFnZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmV0dHktYnl0ZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmV0dHktYnl0ZXNcIlxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZGVmYXVsdHMsIHJ1bnRpbWVfZXJyb3IgfSBmcm9tICcuLi9nbG9iYWxzLmpzJ1xuaW1wb3J0IHsgZGF0YV90eXBlX3NpemUgfSBmcm9tICcuL21lbW9yeS5qcydcblxuY2xhc3MgU3RhY2tFbnRyeSB7XG5cbiAgY29uc3RydWN0b3IgKHN0YWNrLCBvZmZzZXQgPSAwLCBtYXggPSAyNTUsIHR5cGUgPSBkZWZhdWx0cy50eXBlLCBzaXplLCByb2xsaW5nID0gZmFsc2UpIHtcbiAgICB0aGlzLl9zdGFjayA9IHN0YWNrXG5cbiAgICB0aGlzLl9tYXggPSBtYXhcbiAgICB0aGlzLl9zaXplID0gc2l6ZSB8fCBkYXRhX3R5cGVfc2l6ZSh0eXBlKVxuICAgIHRoaXMuX3RvcCA9IG9mZnNldFxuICAgIHRoaXMuX2JvdHRvbSA9IHRoaXMuX3RvcCArIHRoaXMuX3NpemUgLSAxXG4gICAgdGhpcy5fdHlwZSA9IHR5cGVcbiAgICB0aGlzLl9yb2xsaW5nID0gcm9sbGluZyB8fCBmYWxzZVxuXG4gICAgdGhpcy5saXN0W3RoaXMuX3RvcF0gPSB0aGlzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fcHRyID0gdGhpcy5fdG9wXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmxpc3RbdGhpcy5fdG9wXSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fc3RhY2subWFpbiB9XG4gIGdldCBzdGFjayAoKSB7IHJldHVybiB0aGlzLl9zdGFjayB9XG4gIGdldCBsaXN0ICgpIHsgcmV0dXJuIHRoaXMuX3N0YWNrLmxpc3QgfVxuXG4gIGdldCB0b3AgKCkgeyByZXR1cm4gdGhpcy5fdG9wIH1cbiAgZ2V0IGJvdHRvbSAoKSB7IHJldHVybiB0aGlzLl9ib3R0b20gfVxuICBnZXQgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9zaXplIH1cblxuICBnZXQgbWF4ICgpIHsgcmV0dXJuIHRoaXMuX21heCB9XG4gIGdldCBwdHIgKCkgeyByZXR1cm4gdGhpcy5fcHRyIH1cblxuICBnZXQgdG90YWxfc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9tYXggKiB0aGlzLl9zaXplIH1cbiAgZ2V0IHVzZWQgKCkgeyByZXR1cm4gTWF0aC50cnVuYygodGhpcy5fcHRyIC0gdGhpcy5fdG9wKSAvIHRoaXMuX3NpemUpIH1cbiAgZ2V0IGF2YWlsICgpIHsgcmV0dXJuIHRoaXMudG90YWxfc2l6ZSAtIHRoaXMudXNlZCB9XG5cbiAgcHVzaCAoLi4udmFsdWUpIHtcbiAgICBsZXQgc3ogPSB0aGlzLl9zaXplXG4gICAgbGV0IHQgPSB0aGlzLl90eXBlXG4gICAgbGV0IHRvcCA9IHRoaXMuX3RvcFxuICAgIGxldCBib3R0b20gPSB0aGlzLl9ib3R0b21cbiAgICBsZXQgcm9sbGluZyA9IHRoaXMuX3JvbGxpbmdcbiAgICBmb3IgKGxldCB2IG9mIHZhbHVlKSB7XG4gICAgICBpZiAocm9sbGluZyAmJiB0aGlzLl9wdHIgPj0gYm90dG9tKSB7XG4gICAgICAgIHRoaXMuY29weSh0b3AgKyBzeiwgdG9wLCBib3R0b20gLSBzeilcbiAgICAgICAgdGhpcy5fcHRyIC09IHN6XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fcHRyICsgc3ogPCBib3R0b20pIHtcbiAgICAgICAgdGhpcy53cml0ZSh2LCB0aGlzLl9wdHIsIHQpXG4gICAgICAgIHRoaXMuX3B0ciArPSBzelxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwMylcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwb3AgKCkge1xuICAgIGlmICh0aGlzLl9wdHIgPiB0aGlzLl90b3ApIHtcbiAgICAgIHRoaXMuX3B0ciAtPSB0aGlzLl9zaXplXG4gICAgICByZXR1cm4gdGhpcy5yZWFkKHRoaXMuX3B0ciwgdGhpcy5fdHlwZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDIpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhY2sge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgdGhpcy5fbWFpbiA9IG1haW5cblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX2xpc3QgPSB7fVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fbGlzdCA9IHt9XG4gIH1cblxuICBnZXQgbGlzdCAoKSB7IHJldHVybiB0aGlzLl9saXN0IH1cblxuICBuZXcgKG9mZnNldCwgbWF4LCB0eXBlLCBzaXplLCByb2xsaW5nKSB7XG4gICAgbGV0IHMgPSB0aGlzLl9saXN0W29mZnNldF1cbiAgICBpZiAoIXMpIHtcbiAgICAgIHJldHVybiBuZXcgU3RhY2tFbnRyeSh0aGlzLCAuLi5hcmd1bWVudHMpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnVudGltZV9lcnJvcigweDA0KVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBwdXNoIChvZmZzZXQsIC4uLnZhbHVlcykge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBzLnB1c2goLi4udmFsdWVzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgcG9wIChvZmZzZXQpIHtcbiAgICBsZXQgcyA9IHRoaXMuX2xpc3Rbb2Zmc2V0XVxuICAgIGlmIChzKSB7XG4gICAgICByZXR1cm4gcy5wb3AoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgdXNlZCAob2Zmc2V0KSB7XG4gICAgbGV0IHMgPSB0aGlzLl9saXN0W29mZnNldF1cbiAgICBpZiAocykge1xuICAgICAgcmV0dXJuIHMudXNlZFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgbWF4IChvZmZzZXQpIHtcbiAgICBsZXQgcyA9IHRoaXMuX2xpc3Rbb2Zmc2V0XVxuICAgIGlmIChzKSB7XG4gICAgICByZXR1cm4gcy5tYXhcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDQpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIHNpemUgKG9mZnNldCkge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBzLnNpemVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDQpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIHR5cGUgKG9mZnNldCkge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBzLnR5cGVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDQpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vc3RhY2suanMiLCJpbXBvcnQgeyBydW50aW1lX2Vycm9yIH0gZnJvbSAnLi4vZ2xvYmFscy5qcydcblxuY29uc3QgX0lOVF9SVU5OSU5HID0gMVxuY29uc3QgX0lOVF9QQVVTRUQgPSAyXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVycnVwdCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICB0aGlzLl9saXN0ID0ge31cbiAgICB0aGlzLl9tYWluID0gbWFpblxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuc3RvcF9hbGwoKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuICBnZXQgbWVtb3J5ICgpIHsgcmV0dXJuIHRoaXMuX21haW4ubWVtb3J5IH1cblxuICBmaW5kIChuYW1lKSB7IHJldHVybiB0aGlzLl9saXN0W25hbWVdIH1cblxuICBjcmVhdGUgKG5hbWUsIGZuLCBtcyA9IDUwMCkge1xuICAgIGlmICghdGhpcy5maW5kKG5hbWUpKSB7XG4gICAgICB0aGlzLl9saXN0W25hbWVdID0geyBuYW1lLCBzdGF0dXM6IF9JTlRfUlVOTklORywgbXMsIGZuLCBsYXN0OiAwIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDYpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXN1bWUgKG5hbWUpIHtcbiAgICBpZiAodGhpcy5maW5kKG5hbWUpKSB7XG4gICAgICB0aGlzLl9saXN0W25hbWVdLnN0YXR1cyA9IF9JTlRfUlVOTklOR1xuICAgICAgdGhpcy5fbGlzdFtuYW1lXS5sYXN0ID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwYXVzZSAobmFtZSkge1xuICAgIGlmICh0aGlzLmZpbmQobmFtZSkpIHtcbiAgICAgIHRoaXMuX2xpc3RbbmFtZV0uc3RhdHVzID0gX0lOVF9QQVVTRURcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdG9wIChuYW1lKSB7XG4gICAgaWYgKHRoaXMuZmluZChuYW1lKSkge1xuICAgICAgZGVsZXRlIHRoaXMuX2xpc3RbbmFtZV1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdG9wX2FsbCAoKSB7XG4gICAgZm9yIChsZXQgayBpbiB0aGlzLl9saXN0KSB7XG4gICAgICB0aGlzLnN0b3AoaylcbiAgICB9XG4gICAgdGhpcy5fbGlzdCA9IHt9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBmb3IgKGxldCBrIGluIHRoaXMuX2xpc3QpIHtcbiAgICAgIGxldCBpID0gdGhpcy5fbGlzdFtrXVxuICAgICAgaWYgKGkuc3RhdHVzID09PSBfSU5UX1JVTk5JTkcpIHtcbiAgICAgICAgbGV0IGRlbGF5ID0gdCAtIGkubGFzdFxuICAgICAgICBpZiAoZGVsYXkgPj0gaS5tcykge1xuICAgICAgICAgIGkuZm4uYXBwbHkodGhpcywgW2RlbGF5IC0gaS5tc10pXG4gICAgICAgICAgaS5sYXN0ID0gdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9pbnRlcnJ1cHQuanMiLCJpbXBvcnQgUmFpbmJvdyBmcm9tICcuL3JhaW5ib3cuanMnXG5pbXBvcnQgRm9uem8gZnJvbSAnLi9mb256by5qcydcbmltcG9ydCBPcndlbGwgZnJvbSAnLi9vcndlbGwuanMnXG5pbXBvcnQgQmVhZ2xlIGZyb20gJy4vYmVhZ2xlLmpzJ1xuaW1wb3J0IFZpb2xldCBmcm9tICcuL3Zpb2xldC5qcydcbmltcG9ydCB7IE92ZXJsYXlzIH0gZnJvbSAnLi4vb3ZlcmxheXMuanMnXG5cbmltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpZGVvIGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdndWlkZW8nLCBbJ3dpZHRoJywgJ2hlaWdodCcsICdzY2FsZSddKVxuXG4gICAgbGV0IGJvcmRlclNpemUgPSBtYWluLmRlZmF1bHRzKCdib3JkZXIuc2l6ZScsIDApICogMlxuXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBuZXcgUElYSS5hdXRvRGV0ZWN0UmVuZGVyZXIodGhpcy5fd2lkdGggKiB0aGlzLl9zY2FsZSArIGJvcmRlclNpemUsIHRoaXMuX2hlaWdodCAqIHRoaXMuX3NjYWxlICsgYm9yZGVyU2l6ZSwge30pXG4gICAgdGhpcy5fcmVuZGVyZXIudmlldy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICB0aGlzLl9yZW5kZXJlci52aWV3LnN0eWxlLmN1cnNvciA9ICdub25lJ1xuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcuaWQgPSAnZ3VpZGVvJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fcmVuZGVyZXIudmlldylcblxuICAgIHRoaXMuX3N0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKClcblxuICAgIHRoaXMuX29uUmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKVxuICAgIHRoaXMub24oJ3Jlc2l6ZScsIHRoaXMuX29uUmVzaXplKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5vZmYoJ3Jlc2l6ZScsIHRoaXMuX29uUmVzaXplKVxuXG4gICAgdGhpcy5fcmFpbmJvdy5kZXN0cm95KClcbiAgICB0aGlzLl9mb256by5kZXN0cm95KClcbiAgICB0aGlzLl9vcndlbGwuZGVzdHJveSgpXG4gICAgdGhpcy5fYmVhZ2xlLmRlc3Ryb3koKVxuICAgIHRoaXMuX3Zpb2xldC5kZXN0cm95KClcbiAgICB0aGlzLl9vdmVybGF5cy5kZXN0cm95KClcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG5cbiAgY3JlYXRlQ2hpcHMgKCkge1xuICAgIGxldCBtYWluID0gdGhpcy5fbWFpblxuXG4gICAgdGhpcy5fcmFpbmJvdyA9IG5ldyBSYWluYm93KG1haW4pXG5cbiAgICB0aGlzLl9vdmVybGF5cyA9IG5ldyBPdmVybGF5cyhtYWluLCB7XG4gICAgICBib3JkZXI6IHsgc2l6ZTogbWFpbi5kZWZhdWx0cygnYm9yZGVyLnNpemUnLCAwKSwgY29sb3I6IG1haW4uZGVmYXVsdHMoJ2JvcmRlci5jb2xvcicsIDApIH0sXG4gICAgICBzY3JlZW46IHsgc2NhbGU6IHRoaXMuX3NjYWxlIH0sXG4gICAgICBzY2FubGluZXM6IHt9LFxuICAgICAgc2NhbmxpbmU6IHt9LFxuICAgICAgcmdiOiB7fSxcbiAgICAgIG5vaXNlczoge30sXG4gICAgICBjcnQ6IHt9LFxuICAgICAgbW9uaXRvcjoge30sXG4gICAgfSlcblxuICAgIHRoaXMuX3NjcmVlbiA9IHRoaXMuX292ZXJsYXlzLnNjcmVlblxuICAgIHRoaXMuX3NjcmVlbi5fZGF0YSA9IHRoaXMuX2RhdGFcblxuICAgIHRoaXMuX2ZvbnpvID0gbmV3IEZvbnpvKG1haW4pXG4gICAgdGhpcy5fb3J3ZWxsID0gbmV3IE9yd2VsbChtYWluKVxuICAgIHRoaXMuX2JlYWdsZSA9IG5ldyBCZWFnbGUobWFpbilcbiAgICB0aGlzLl92aW9sZXQgPSBuZXcgVmlvbGV0KG1haW4pXG5cbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG5cbiAgICB0aGlzLl9pbWFnZURhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gICAgdGhpcy5fcGl4ZWxzID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2ltYWdlRGF0YS5kYXRhLmJ1ZmZlcilcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcblxuICAgIHRoaXMuX2ZvcmNlX3JlZHJhdyA9IGZhbHNlXG4gICAgdGhpcy5fZm9yY2VfZmxpcCA9IGZhbHNlXG5cbiAgICB0aGlzLl9yYWluYm93LnJlc2V0KClcbiAgICB0aGlzLl9mb256by5yZXNldCgpXG4gICAgdGhpcy5fb3J3ZWxsLnJlc2V0KClcbiAgICB0aGlzLl9iZWFnbGUucmVzZXQoKVxuICAgIHRoaXMuX3Zpb2xldC5yZXNldCgpXG4gICAgdGhpcy5fb3ZlcmxheXMucmVzZXQoKVxuXG4gICAgdGhpcy5jbGVhcigpXG5cbiAgICByZXR1cm4gdGhpcy5yZXNpemUoKVxuICB9XG5cbiAgZ2V0IHNjYWxlICgpIHsgcmV0dXJuIHRoaXMuX3NjYWxlIH1cbiAgc2V0IHNjYWxlICh2YWx1ZSkge1xuICAgIHRoaXMuX3NjYWxlID0gdmFsdWVcbiAgfVxuXG4gIGdldCByYWluYm93ICgpIHsgcmV0dXJuIHRoaXMuX3JhaW5ib3cgfVxuICBnZXQgZm9uem8gKCkgeyByZXR1cm4gdGhpcy5fZm9uem8gfVxuICBnZXQgb3J3ZWxsICgpIHsgcmV0dXJuIHRoaXMuX29yd2VsbCB9XG4gIGdldCBiZWFnbGUgKCkgeyByZXR1cm4gdGhpcy5fYmVhZ2xlIH1cbiAgZ2V0IHZpb2xldCAoKSB7IHJldHVybiB0aGlzLl92aW9sZXQgfVxuXG4gIGdldCBvdmVybGF5cyAoKSB7IHJldHVybiB0aGlzLl9vdmVybGF5cyB9XG5cbiAgZ2V0IHN0YWdlICgpIHsgcmV0dXJuIHRoaXMuX3N0YWdlIH1cbiAgZ2V0IHJlbmRlcmVyICgpIHsgcmV0dXJuIHRoaXMuX3JlbmRlcmVyIH1cblxuICBnZXQgc2NyZWVuICgpIHsgcmV0dXJuIHRoaXMuX3NjcmVlbiB9XG4gIGdldCBzY3JlZW5TcHJpdGUgKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuLnNwcml0ZSB9XG4gIGdldCBzcHJpdGVzTGF5ZXIgKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuLnNwcml0ZXNMYXllciB9XG4gIGdldCBtb3VzZUxheWVyICgpIHsgcmV0dXJuIHRoaXMuX3NjcmVlbi5tb3VzZUxheWVyIH1cblxuICBnZXQgdGV4dHVyZSAoKSB7IHJldHVybiB0aGlzLl9zY3JlZW4udGV4dHVyZSB9XG4gIGdldCBjYW52YXNCdWZmZXIgKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuLmNhbnZhc0J1ZmZlciB9XG4gIGdldCBjYW52YXMgKCkgeyByZXR1cm4gdGhpcy5jYW52YXNCdWZmZXIuY2FudmFzIH1cbiAgZ2V0IGNvbnRleHQgKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuLmNvbnRleHQgfVxuICBnZXQgaW1hZ2VEYXRhICgpIHsgcmV0dXJuIHRoaXMuX2ltYWdlRGF0YSB9XG4gIGdldCBwaXhlbHMgKCkgeyByZXR1cm4gdGhpcy5fcGl4ZWxzIH1cblxuICBnZXQgZm9yY2VfcmVkcmF3ICgpIHsgcmV0dXJuIHRoaXMuX2ZvcmNlX3JlZHJhdyB9XG4gIHNldCBmb3JjZV9yZWRyYXcgKHZhbHVlKSB7IHRoaXMuX2ZvcmNlX3JlZHJhdyA9IHZhbHVlIH1cblxuICBnZXQgZm9yY2VfZmxpcCAoKSB7IHJldHVybiB0aGlzLl9mb3JjZV9mbGlwIH1cbiAgc2V0IGZvcmNlX2ZsaXAgKHZhbHVlKSB7IHRoaXMuX2ZvcmNlX2ZsaXAgPSB2YWx1ZSB9XG5cbiAgdGljayAodCkge1xuICAgIHRoaXMuX3JhaW5ib3cudGljayh0KVxuICAgIHRoaXMuX2ZvbnpvLnRpY2sodClcbiAgICB0aGlzLl9vcndlbGwudGljayh0KVxuICAgIHRoaXMuX2JlYWdsZS50aWNrKHQpXG4gICAgdGhpcy5fdmlvbGV0LnRpY2sodClcbiAgICB0aGlzLl9vdmVybGF5cy50aWNrKHQpXG5cbiAgICBpZiAodGhpcy5fZm9yY2VfcmVkcmF3KSB7XG4gICAgICB0aGlzLnJlZHJhdygpXG4gICAgICB0aGlzLl9mb3JjZV9yZWRyYXcgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJlZHJhdyAoKSB7XG4gICAgaWYgKHRoaXMuX2ZvcmNlX2ZsaXApIHtcbiAgICAgIHRoaXMuX3NjcmVlbi51cGRhdGVUZXh0dXJlKHRoaXMuX2RhdGEsIHRoaXMuX3JhaW5ib3cpXG5cbiAgICAgIHRoaXMuZW1pdCgnZmxpcCcpXG5cbiAgICAgIHRoaXMuX2ZvcmNlX2ZsaXAgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgncmVkcmF3JylcblxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbmRlcih0aGlzLl9zdGFnZSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBjZW50ZXIgKCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcuc3R5bGUubGVmdCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC41IC0gdGhpcy5fcmVuZGVyZXIud2lkdGggKiAwLjUgKyAncHgnXG4gICAgdGhpcy5fcmVuZGVyZXIudmlldy5zdHlsZS50b3AgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjUgLSB0aGlzLl9yZW5kZXJlci5oZWlnaHQgKiAwLjUgKyAncHgnXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc2l6ZSAoKSB7XG4gICAgdGhpcy5fb3ZlcmxheXMucmVzaXplKClcbiAgICB0aGlzLmNlbnRlcigpXG4gICAgdGhpcy50ZXN0KClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcGl4ZWwgKHgsIHksIGMpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuXG4gICAgbGV0IGlcbiAgICBpZiAoXy5pc051bWJlcihjKSkge1xuICAgICAgaSA9IHRoaXMudG9JbmRleCh4LCB5KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGkgPSB4XG4gICAgICBjID0geVxuICAgIH1cblxuICAgIGlmIChkYXRhW2ldICE9PSBjKSB7XG4gICAgICBkYXRhW2ldID0gYyB8fCAwXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFbaV1cbiAgfVxuXG4gIGJsaXQgKGFkZHIsIHgsIHksIHcsIGgpIHtcbiAgICBjb25zdCBtZW0gPSB0aGlzLm1lbW9yeS5kYXRhXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBjb25zdCB0b3AgPSB0aGlzLl90b3BcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuX3dpZHRoXG5cbiAgICBsZXQgc2kgPSBhZGRyXG4gICAgZm9yIChsZXQgYnkgPSAwOyBieSA8IGg7IGJ5KyspIHtcbiAgICAgIGxldCB0aSA9IHRvcCArICgoeSArIGJ5KSAqIHdpZHRoICsgeClcbiAgICAgIGZvciAobGV0IGJ4ID0gMDsgYnggPCB3OyBieCsrKSB7XG4gICAgICAgIGRhdGFbdGkrK10gPSBtZW1bc2krK11cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUodHJ1ZSlcbiAgfVxuXG4gIGJsaXRfbWFzayAoYWRkciwgeCwgeSwgdywgaCwgZmcgPSAxNSwgYmcgPSAtMSkge1xuICAgIGNvbnN0IG1lbSA9IHRoaXMubWVtb3J5LmRhdGFcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGNvbnN0IHRvcCA9IHRoaXMuX3RvcFxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fd2lkdGhcbiAgICBjb25zdCBjb3VudCA9IHRoaXMucmFpbmJvdy5jb3VudFxuXG4gICAgbGV0IHNpID0gYWRkclxuICAgIGZvciAobGV0IGJ5ID0gMDsgYnkgPCBoOyBieSsrKSB7XG4gICAgICBsZXQgdGkgPSB0b3AgKyAoKHkgKyBieSkgKiB3aWR0aCArIHgpXG4gICAgICBmb3IgKGxldCBieCA9IDA7IGJ4IDwgdzsgYngrKykge1xuICAgICAgICBsZXQgYyA9IG1lbVtzaSsrXVxuICAgICAgICBkYXRhW3RpXSA9IGMgPCBjb3VudCA/IGZnIDogYmcgPT09IC0xID8gZGF0YVt0aV0gOiBiZ1xuICAgICAgICB0aSsrXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKHRydWUpXG4gIH1cblxuICBibGl0X2FycmF5IChhcnIsIHgsIHksIG1hc2sgPSB7fSkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgY29uc3QgdG9wID0gdGhpcy5fdG9wXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLl93aWR0aFxuXG4gICAgbGV0IHcgPSBfLmZpcnN0KGFycikubGVuZ3RoXG4gICAgbGV0IGggPSBhcnIubGVuZ3RoXG5cbiAgICBmb3IgKGxldCBieSA9IDA7IGJ5IDwgaDsgYnkrKykge1xuICAgICAgbGV0IHRpID0gdG9wICsgKChieSArIHkpICogd2lkdGggKyB4KVxuICAgICAgZm9yIChsZXQgYnggPSAwOyBieCA8IHc7IGJ4KyspIHtcbiAgICAgICAgZGF0YVt0aSsrXSA9IG1hc2tbYXJyW2J5XV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb3B5X3JlY3QgKHgsIHksIHcsIGgsIGFkZHIpIHtcbiAgICBjb25zdCBtZW0gPSB0aGlzLm1lbW9yeS5kYXRhXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBjb25zdCB0b3AgPSB0aGlzLl90b3BcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuX3dpZHRoXG5cbiAgICBsZXQgdGkgPSBhZGRyXG4gICAgZm9yIChsZXQgYnkgPSAwOyBieSA8IGg7IGJ5KyspIHtcbiAgICAgIGxldCBzaSA9IHRvcCArICgoYnkgKyB5KSAqIHdpZHRoICsgeClcbiAgICAgIGZvciAobGV0IGJ4ID0gMDsgYnggPCB3OyBieCsrKSB7XG4gICAgICAgIG1lbVt0aSsrXSA9IGRhdGFbc2krK11cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGlcbiAgfVxuXG4gIHRvX2FycmF5ICh4LCB5LCB3LCBoLCBtYXNrID0ge30pIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGNvbnN0IHRvcCA9IHRoaXMuX3RvcFxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fd2lkdGhcblxuICAgIGxldCBhcnIgPSBbXVxuXG4gICAgZm9yIChsZXQgYnkgPSAwOyBieSA8IGg7IGJ5KyspIHtcbiAgICAgIGxldCB0aSA9IHRvcCArICgoYnkgKyB5KSAqIHdpZHRoICsgeClcbiAgICAgIGxldCBzID0gJydcbiAgICAgIGZvciAobGV0IGJ4ID0gMDsgYnggPCB3OyBieCsrKSB7XG4gICAgICAgIHMgKz0gbWFza1tkYXRhW3RpKytdXVxuICAgICAgfVxuICAgICAgYXJyLnB1c2gocylcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyXG4gIH1cblxuICB0b0luZGV4ICh4LCB5KSB7IHJldHVybiB5ICogdGhpcy5fd2lkdGggKyB4IH1cblxuICBmcm9tSW5kZXggKGkpIHtcbiAgICBsZXQgeSA9IE1hdGgubWluKE1hdGgudHJ1bmMoaSAvIHRoaXMuX3dpZHRoKSwgdGhpcy5faGVpZ2h0IC0gMSlcbiAgICBsZXQgeCA9IGkgLSB5XG4gICAgcmV0dXJuIHsgeCwgeSB9XG4gIH1cblxuICBzY3JvbGwgKHgsIHkpIHtcbiAgICBsZXQgbHcgPSB5ICogdGhpcy5fd2lkdGhcbiAgICBsZXQgcyA9IGx3XG4gICAgbGV0IGUgPSB0aGlzLl9zaXplIC0gbHdcbiAgICB0aGlzLl9kYXRhLmNvcHkocywgMCwgZSAtIHMpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGxvYWRUZXh0dXJlIChmaWxlbmFtZSkge1xuICAgIGxldCB0ZXggPSBQSVhJLlRleHR1cmUuZnJvbUltYWdlKCcuL2J1aWxkLycgKyByZXF1aXJlKCdmaWxlP25hbWU9YXNzZXRzL1tuYW1lXS5bZXh0XSEuLi8uLi8uLi9hc3NldHMvaW1ncy8nICsgZmlsZW5hbWUpLCB1bmRlZmluZWQsIFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVClcbiAgICB0ZXgub24oJ3VwZGF0ZScsICgpID0+IHRoaXMudXBkYXRlKCkpXG4gICAgcmV0dXJuIHRleFxuICB9XG5cbiAgdGVzdCAoKSB7XG4gICAgdGhpcy5waXhlbCgxMCwgMTAsIDEzKVxuICAgIHRoaXMucGl4ZWwoMjAsIDEwLCA1KVxuICAgIHRoaXMucGl4ZWwoMzAsIDEwLCA2KVxuXG4gICAgdGhpcy5fZm9uem8udGVzdCgpXG5cbiAgICAvLyBsZXQgc2NyZWVuID0gdGhpcy5fb3ZlcmxheXMuc2NyZWVuLnNwcml0ZVxuICAgIC8vIHNjcmVlbi5yZW1vdmVDaGlsZHJlbigpXG5cbiAgICAvLyBsZXQgdCA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLmxvYWRUZXh0dXJlKCd0ZXN0LnBuZycpKVxuICAgIC8vIHNjcmVlbi5hZGRDaGlsZCh0KVxuXG4gICAgLy8gbGV0IHRleHQgPSBuZXcgUElYSS5UZXh0KCdUaGlzIGlzIGEgcGl4aSB0ZXh0JywgeyBmb250OiAnMjBweCBcIkdsYXNzIFRUWSBWVDIyMFwiJywgZmlsbDogMHhGRkZGRkYgfSlcbiAgICAvLyB0ZXh0LnRleHR1cmUuYmFzZVRleHR1cmUuc2NhbGVNb2RlID0gUElYSS5TQ0FMRV9NT0RFUy5ORUFSRVNUXG4gICAgLy8gdGV4dC5jb250ZXh0LmNhbnZhcy5zdHlsZVsnZm9udC1zbW9vdGhpbmcnXSA9ICduZXZlcidcbiAgICAvLyB0ZXh0LmNvbnRleHQuY2FudmFzLnN0eWxlWyctd2Via2l0LWZvbnQtc21vb3RoaW5nJ10gPSAnbm9uZSdcbiAgICAvLyB0ZXh0LmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2VcbiAgICAvLyB0ZXh0LmNvbnRleHQuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnaGlkZGVuJ1xuICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dC5jb250ZXh0LmNhbnZhcylcbiAgICAvLyB0ZXh0LnVwZGF0ZVRleHQoKVxuICAgIC8vIHNjcmVlbi5hZGRDaGlsZCh0ZXh0KVxuICAgIC8vIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dC5jb250ZXh0LmNhbnZhcylcblxuICAgIHRoaXMudXBkYXRlKHRydWUpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL2d1aWRlby5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuY29uc3QgczMyID0gbmV3IFVpbnQzMkFycmF5KDQpXG5jb25zdCBzOCA9IG5ldyBVaW50OEFycmF5KHMzMi5idWZmZXIpXG5jb25zdCB0MzIgPSBuZXcgVWludDMyQXJyYXkoNClcbmNvbnN0IHQ4ID0gbmV3IFVpbnQ4QXJyYXkodDMyLmJ1ZmZlcilcblxubGV0IHJldmVyc2UgPSB4ID0+IHtcbiAgczMyWzBdID0geFxuICB0OFswXSA9IHM4WzNdXG4gIHQ4WzFdID0gczhbMl1cbiAgdDhbMl0gPSBzOFsxXVxuICB0OFszXSA9IHM4WzBdXG4gIHJldHVybiB0MzJbMF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFpbmJvdyBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgncmFpbmJvdycsIFsnY291bnQnXSlcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcblxuICAgIHRoaXMuX0xFID0gdGhpcy5tYWluLkxFXG5cbiAgICB0aGlzLmNvbG9yKDAsIDB4MDAwMDAwZmYpXG4gICAgdGhpcy5jb2xvcigxLCAweDgwMDAwMGZmKVxuICAgIHRoaXMuY29sb3IoMiwgMHgwMDgwMDBmZilcbiAgICB0aGlzLmNvbG9yKDMsIDB4ODA4MDAwZmYpXG4gICAgdGhpcy5jb2xvcig0LCAweDAwMDA4MGZmKVxuICAgIHRoaXMuY29sb3IoNSwgMHg4MDAwODBmZilcbiAgICB0aGlzLmNvbG9yKDYsIDB4MDA4MDgwZmYpXG4gICAgdGhpcy5jb2xvcig3LCAweGMwYzBjMGZmKVxuICAgIHRoaXMuY29sb3IoOCwgMHg4MDgwODBmZilcbiAgICB0aGlzLmNvbG9yKDksIDB4ZmYwMDAwZmYpXG4gICAgdGhpcy5jb2xvcigxMCwgMHgwMGZmMDBmZilcbiAgICB0aGlzLmNvbG9yKDExLCAweGZmZmYwMGZmKVxuICAgIHRoaXMuY29sb3IoMTIsIDB4MDAwMGZmZmYpXG4gICAgdGhpcy5jb2xvcigxMywgMHhmZjAwZmZmZilcbiAgICB0aGlzLmNvbG9yKDE0LCAweDAwZmZmZmZmKVxuICAgIHRoaXMuY29sb3IoMTUsIDB4ZmZmZmZmZmYpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0IGJsYWNrICgpIHsgcmV0dXJuIDAgfVxuICBnZXQgZGtyZWQgKCkgeyByZXR1cm4gMSB9XG4gIGdldCBka2dyZWVuICgpIHsgcmV0dXJuIDIgfVxuICBnZXQgZGt5ZWxsb3cgKCkgeyByZXR1cm4gMyB9XG4gIGdldCBka2JsdWUgKCkgeyByZXR1cm4gNCB9XG4gIGdldCBka2Z1Y2hzaWEgKCkgeyByZXR1cm4gNSB9XG4gIGdldCB0ZWFsICgpIHsgcmV0dXJuIDYgfVxuICBnZXQgZ3JleSAoKSB7IHJldHVybiA3IH1cbiAgZ2V0IGRrZ3JleSAoKSB7IHJldHVybiA4IH1cbiAgZ2V0IHJlZCAoKSB7IHJldHVybiA5IH1cbiAgZ2V0IGxpbWUgKCkgeyByZXR1cm4gMTAgfVxuICBnZXQgeWVsbG93ICgpIHsgcmV0dXJuIDExIH1cbiAgZ2V0IGJsdWUgKCkgeyByZXR1cm4gMTIgfVxuICBnZXQgZnVjaHNpYSAoKSB7IHJldHVybiAxMyB9XG4gIGdldCBjeWFuICgpIHsgcmV0dXJuIDE0IH1cbiAgZ2V0IHdoaXRlICgpIHsgcmV0dXJuIDE1IH1cblxuICB0b19yZWQgKHJnYmEpIHsgcmV0dXJuIHRoaXMucmdiYShyZ2JhKS5yIH1cblxuICB0b19ncmVlbiAocmdiYSkgeyByZXR1cm4gdGhpcy5yZ2JhKHJnYmEpLmcgfVxuXG4gIHRvX2JsdWUgKHJnYmEpIHsgcmV0dXJuIHRoaXMucmdiYShyZ2JhKS5iIH1cblxuICB0b19hbHBoYSAocmdiYSkgeyByZXR1cm4gdGhpcy5yZ2JhKHJnYmEpLmEgfVxuXG4gIHNwbGl0IChyZ2JhKSB7XG4gICAgY29uc3QgTEUgPSB0aGlzLl9MRVxuICAgIHJldHVybiB7XG4gICAgICByOiByZ2JhID4+IChMRSA/IDI0IDogMCkgJiAweEZGLFxuICAgICAgZzogcmdiYSA+PiAoTEUgPyAxNiA6IDgpICYgMHhGRixcbiAgICAgIGI6IHJnYmEgPj4gKExFID8gOCA6IDE2KSAmIDB4RkYsXG4gICAgICBhOiByZ2JhID4+IChMRSA/IDAgOiAyNCkgJiAweEZGLFxuICAgIH1cbiAgfVxuXG4gIHJnYmEgKHIsIGcsIGIsIGEpIHtcbiAgICBsZXQgYyA9IGcgPyBhIDw8IDI0IHwgciA8PCAxNiB8IGcgPDwgOCB8IGIgOiByXG4gICAgcmV0dXJuIHRoaXMuX0xFID8gcmV2ZXJzZShjKSA6IGNcbiAgfVxuXG4gIGNvbG9yIChjLCByLCBnLCBiLCBhKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBpZiAocikge1xuICAgICAgZGF0YVtjXSA9IHRoaXMucmdiYShyLCBnLCBiLCBhKVxuICAgIH1cbiAgICByZXR1cm4gZGF0YVtjXVxuICB9XG5cbiAgZmluZF9jb2xvciAociwgZywgYiwgYSkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgbGV0IGNvbG9yID0gdGhpcy5yZ2JhKHIsIGcsIGIsIGEpXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLl9jb3VudDsgYysrKSB7XG4gICAgICBpZiAoZGF0YVtjXSA9PT0gY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIGNcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL3JhaW5ib3cuanMiLCJpbXBvcnQgeyBFbWl0dGVyIH0gZnJvbSAnLi4vLi4vZW1pdHRlci5qcydcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSAnLi4vLi4vdXRpbHMuanMnXG5pbXBvcnQgeyBkYXRhX3R5cGVfc2l6ZXMsIGRhdGFfdHlwZV9mbnMgfSBmcm9tICcuLi9tZW1vcnkuanMnXG5cbnZhciBjdXJyZW50T2Zmc2V0ID0gMFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlwIGV4dGVuZHMgRW1pdHRlciB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLl9tYWluID0gbWFpblxuXG4gICAgdGhpcy5fd2lkdGggPSAwXG4gICAgdGhpcy5faGVpZ2h0ID0gMFxuXG4gICAgdGhpcy5fY291bnQgPSAwXG5cbiAgICB0aGlzLl9kYXRhID0gbnVsbFxuICAgIHRoaXMuX2RhdGFfZm9ybWF0ID0gbnVsbFxuICAgIHRoaXMuX3RvcCA9IDBcbiAgICB0aGlzLl9ib3R0b20gPSAwXG4gICAgdGhpcy5fc2l6ZSA9IDBcbiAgICB0aGlzLl9jZWxsX3NpemUgPSAwXG4gICAgdGhpcy5fZGF0YV9zaXplID0gMFxuICB9XG5cbiAgaW5pdCAobmFtZSA9ICcnLCBrZXlzID0gW10sIG5vZGF0YSA9IGZhbHNlKSB7XG4gICAgbGV0IG1haW4gPSB0aGlzLl9tYWluXG5cbiAgICBmb3IgKGxldCBrIG9mIGtleXMpIHtcbiAgICAgIHRoaXNbJ18nICsga10gPSBtYWluLmRlZmF1bHRzKG5hbWUgKyAnLicgKyBrKVxuICAgIH1cblxuICAgIGlmICghbm9kYXRhKSB7XG4gICAgICB0aGlzLl9jb3VudCA9IHRoaXMuX2NvdW50IHx8IDFcbiAgICAgIHRoaXMuX3dpZHRoID0gdGhpcy5fd2lkdGggfHwgMVxuICAgICAgdGhpcy5faGVpZ2h0ID0gdGhpcy5faGVpZ2h0IHx8IDFcblxuICAgICAgdGhpcy5fZGF0YV9mb3JtYXQgPSBtYWluLmRlZmF1bHRzKG5hbWUgKyAnLmRhdGFfZm9ybWF0JykgfHwgJ2k4J1xuICAgICAgdGhpcy5fZGF0YV9zaXplID0gbWFpbi5kZWZhdWx0cyhuYW1lICsgJy5kYXRhX3NpemUnKSB8fCAxXG4gICAgICB0aGlzLl9kYXRhX3NpemUgPSBfLmlzU3RyaW5nKHRoaXMuX2RhdGFfZm9ybWF0KSA/IGRhdGFfdHlwZV9zaXplc1t0aGlzLl9kYXRhX2Zvcm1hdF0gOiB0aGlzLl9kYXRhX3NpemVcblxuICAgICAgdGhpcy5fY2VsbF9zaXplID0gdGhpcy5fd2lkdGggKiB0aGlzLl9oZWlnaHQgKiB0aGlzLl9kYXRhX3NpemVcblxuICAgICAgdGhpcy5fc2l6ZSA9IHRoaXMuX2NlbGxfc2l6ZSAqIHRoaXMuX2NvdW50XG5cbiAgICAgIHRoaXMuX3RvcCA9IF8uZ2V0KG1haW4sICdtZW1fbWFwLicgKyBuYW1lICsgJy50b3AnLCBjdXJyZW50T2Zmc2V0KVxuICAgICAgdGhpcy5fYm90dG9tID0gdGhpcy5fdG9wICsgdGhpcy5fc2l6ZSAtIDFcblxuICAgICAgXy5zZXQobWFpbiwgJ21lbV9tYXAuJyArIG5hbWUsIHtcbiAgICAgICAgdG9wOiB0aGlzLl90b3AsXG4gICAgICAgIGJvdHRvbTogdGhpcy5fYm90dG9tLFxuICAgICAgICBzaXplOiB0aGlzLl9zaXplLFxuICAgICAgICBkYXRhX2Zvcm1hdDogdGhpcy5fZGF0YV9mb3JtYXQsXG4gICAgICAgIGRhdGFfc2l6ZTogdGhpcy5fZGF0YV9zaXplLFxuICAgICAgICBjZWxsX3NpemU6IHRoaXMuX2NlbGxfc2l6ZSxcbiAgICAgICAgY291bnQ6IHRoaXMuX2NvdW50LFxuICAgICAgfSlcblxuICAgICAgY3VycmVudE9mZnNldCA9IHRoaXMuX2JvdHRvbSArIDFcblxuICAgICAgdGhpcy5fZGF0YSA9IG5ldyB3aW5kb3dbZGF0YV90eXBlX2Zuc1t0aGlzLl9kYXRhX2Zvcm1hdF0gKyAnQXJyYXknXSh0aGlzLm1lbW9yeS5idWZmZXIsIHRoaXMuX3RvcCwgdGhpcy5fc2l6ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHJldHVybiB0aGlzLmNsZWFyKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICB9XG5cbiAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fbWFpbiB9XG4gIGdldCBtZW1vcnkgKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5tZW1vcnkgfVxuXG4gIGdldCBndWlkZW8gKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5ndWlkZW8gfVxuICBnZXQgcmFpbmJvdyAoKSB7IHJldHVybiB0aGlzLmd1aWRlby5yYWluYm93IH1cbiAgZ2V0IGZvbnpvICgpIHsgcmV0dXJuIHRoaXMuZ3VpZGVvLmZvbnpvIH1cbiAgZ2V0IG9yd2VsbCAoKSB7IHJldHVybiB0aGlzLmd1aWRlby5vcndlbGwgfVxuICBnZXQgYmVhZ2xlICgpIHsgcmV0dXJuIHRoaXMub3J3ZWxsLmJlYWdsZSB9XG4gIGdldCB2aW9sZXQgKCkgeyByZXR1cm4gdGhpcy5ndWlkZW8udmlvbGV0IH1cblxuICBnZXQgZGF0YSAoKSB7IHJldHVybiB0aGlzLl9kYXRhIH1cbiAgZ2V0IHRvcCAoKSB7IHJldHVybiB0aGlzLl90b3AgfVxuICBnZXQgYm90dG9tICgpIHsgcmV0dXJuIHRoaXMuX2JvdHRvbSB9XG4gIGdldCBzaXplICgpIHsgcmV0dXJuIHRoaXMuX3NpemUgfVxuXG4gIGdldCBjb3VudCAoKSB7IHJldHVybiB0aGlzLl9jb3VudCB9XG4gIGdldCBkYXRhX3NpemUgKCkgeyByZXR1cm4gdGhpcy5fZGF0YV9zaXplIH1cbiAgZ2V0IGNlbGxfc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9jZWxsX3NpemUgfVxuXG4gIGdldCB3aWR0aCAoKSB7IHJldHVybiB0aGlzLl93aWR0aCB9XG4gIGdldCBoZWlnaHQgKCkgeyByZXR1cm4gdGhpcy5faGVpZ2h0IH1cblxuICB1cGRhdGUgKGZsaXAgPSBmYWxzZSkge1xuICAgIGxldCBndWlkZW8gPSB0aGlzLmd1aWRlb1xuICAgIGd1aWRlby5mb3JjZV9yZWRyYXcgPSB0cnVlXG4gICAgZ3VpZGVvLmZvcmNlX2ZsaXAgPSBndWlkZW8uZm9yY2VfZmxpcCB8fCBmbGlwXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgfVxuXG4gIGNsZWFyICh2ID0gMCkge1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl9kYXRhLmZpbGwodilcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFzeW5jIChmbiwgYXJncywgZGVsYXkpIHtcbiAgICBhc3luYyh0aGlzLCBmbiwgYXJncywgZGVsYXkpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL2NoaXAuanMiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5pbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4uLy4uL2dsb2JhbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbnpvIGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdmb256bycsIFsnY291bnQnLCAnd2lkdGgnLCAnaGVpZ2h0J10pXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBzdXBlci5yZXNldCgpXG5cbiAgICB0aGlzLm1lbW9yeS5mcm9tX2FycmF5X21hc2sodGhpcy5fdG9wICsgMzMgKiB0aGlzLl9jZWxsX3NpemUsIFtcbiAgICAgICcgICAgICAgJyxcbiAgICAgICcgICB3ICAgJyxcbiAgICAgICcgICB3ICAgJyxcbiAgICAgICcgICB3ICAgJyxcbiAgICAgICcgICB3ICAgJyxcbiAgICAgICcgICB3ICAgJyxcbiAgICAgICcgICAgICAgJyxcbiAgICAgICcgICB3ICAgJyxcbiAgICAgICcgICAgICAgJyxcbiAgICBdLCBkZWZhdWx0cy5jaGFyc19tYXApXG5cbiAgICB0aGlzLm1lbW9yeS5mcm9tX2FycmF5X21hc2sodGhpcy5fdG9wICsgNjUgKiB0aGlzLl9jZWxsX3NpemUsIFtcbiAgICAgICcgICAgICAgJyxcbiAgICAgICcgICB3ICAgJyxcbiAgICAgICcgIHcgdyAgJyxcbiAgICAgICcgdyAgIHcgJyxcbiAgICAgICcgdyAgIHcgJyxcbiAgICAgICcgd3d3d3cgJyxcbiAgICAgICcgdyAgIHcgJyxcbiAgICAgICcgdyAgIHcgJyxcbiAgICAgICcgICAgICAgJyxcbiAgICBdLCBkZWZhdWx0cy5jaGFyc19tYXApXG5cbiAgICB0aGlzLm1lbW9yeS5mcm9tX2FycmF5X21hc2sodGhpcy5fdG9wICsgNjYgKiB0aGlzLl9jZWxsX3NpemUsIFtcbiAgICAgICcgICAgICAgJyxcbiAgICAgICcgd3d3dyAgJyxcbiAgICAgICcgdyAgIHcgJyxcbiAgICAgICcgdyAgIHcgJyxcbiAgICAgICcgd3d3dyAgJyxcbiAgICAgICcgdyAgIHcgJyxcbiAgICAgICcgdyAgIHcgJyxcbiAgICAgICcgd3d3dyAgJyxcbiAgICAgICcgICAgICAgJyxcbiAgICBdLCBkZWZhdWx0cy5jaGFyc19tYXApXG5cbiAgICB0aGlzLnRlc3QoKVxuICB9XG5cbiAgZHJhdyAoeCwgeSwgYywgZmcgPSAxNSwgYmcgPSAwKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3VpZGVvLmJsaXRfbWFzayh0aGlzLl90b3AgKyBjICogdGhpcy5fY2VsbF9zaXplLCB4LCB5LCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCBmZywgYmcpXG4gIH1cblxuICB0ZXN0ICgpIHtcbiAgICB0aGlzLmRyYXcoNDAsIDQwLCA2NSwgMTAsIDMpXG4gICAgdGhpcy5kcmF3KDQ3LCA0MCwgNjYsIDEyLCAxNSlcbiAgICB0aGlzLmRyYXcoNTQsIDQwLCAzMywgNSwgOClcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvZm9uem8uanMiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yd2VsbCBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgnb3J3ZWxsJywgWyd3aWR0aCcsICdoZWlnaHQnXSlcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgY2xlYXIgKGNoID0gJyAnLCBiZyA9IDApIHtcbiAgICB0aGlzLl9kYXRhLmZpbGwoMHhGRjAwMDAgJiBjaC5jaGFyQ29kZUF0KDApIHwgMHgwMDAwRkYgJiBiZylcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgbGV0IHcgPSB0aGlzLl93aWR0aFxuICAgIGxldCBoID0gdGhpcy5faGVpZ2h0XG4gICAgbGV0IG1lbSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgZm50ID0gdGhpcy5mb256b1xuICAgIGxldCBmdyA9IGZudC53aWR0aFxuICAgIGxldCBmaCA9IGZudC5oZWlnaHRcblxuICAgIGxldCBpZHggPSAwXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICAgIGxldCBweSA9IHkgKiBmaFxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3OyB4KyspIHtcbiAgICAgICAgbGV0IGMgPSBtZW1baWR4XVxuICAgICAgICBpZiAoYykge1xuICAgICAgICAgIGZudC5kcmF3KHggKiBmdywgcHksIGMsIG1lbVtpZHggKyAxXSwgbWVtW2lkeCArIDJdKVxuICAgICAgICB9XG4gICAgICAgIGlkeCArPSAzXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGRyYXdfY2hhciAoeCwgeSwgYywgZmcsIGJnKSB7XG4gICAgbGV0IGZudCA9IHRoaXMuZm9uem9cbiAgICBmbnQuZHJhdyh4ICogZm50LndpZHRoLCB5ICogZm50LmhlaWdodCwgYywgZmcsIGJnKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBpbmRleCAoeCwgeSkge1xuICAgIHJldHVybiAoKHkgLSAxKSAqIHRoaXMuX3dpZHRoICsgKHggLSAxKSkgKiAzXG4gIH1cblxuICBsaW5lICh5KSB7XG4gICAgbGV0IGwgPSB0aGlzLl93aWR0aCAqIDNcbiAgICByZXR1cm4geyBzdGFydDogeSAqIGwsIGVuZDogKHkgKyAxKSAqIGwgLSAzLCBsZW5ndGg6IGwgfVxuICB9XG5cbiAgY2hhcl9hdCAoeCwgeSkge1xuICAgIGxldCB0aWR4ID0gdGhpcy5pbmRleCh4LCB5KVxuICAgIGxldCBtZW0gPSB0aGlzLl9kYXRhXG4gICAgcmV0dXJuIHsgY2g6IG1lbVt0aWR4XSwgZmc6IG1lbVt0aWR4ICsgMV0sIGJnOiBtZW1bdGlkeCArIDJdIH1cbiAgfVxuXG4gIHB1dF9jaGFyIChjaCwgZmcgPSAxLCBiZyA9IDApIHtcbiAgICBzd2l0Y2ggKGNoLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgIGNhc2UgMTM6XG4gICAgICBjYXNlIDEwOlxuICAgICAgICByZXR1cm4gdGhpcy5jcigpXG4gICAgICBjYXNlIDg6XG4gICAgICAgIHJldHVybiB0aGlzLmJzKClcbiAgICB9XG5cbiAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcygpXG4gICAgdGhpcy5fZGF0YS5zZXQoW2NoLmNoYXJDb2RlQXQoMCksIGZnLCBiZ10sIHRoaXMuaW5kZXgoeCwgeSkpXG5cbiAgICB0aGlzLmJlYWdsZS54KytcbiAgICBpZiAodGhpcy5iZWFnbGUueCA+IHRoaXMuX3dpZHRoKSB7XG4gICAgICB0aGlzLmNyKClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kcmF3X2NoYXIoeCwgeSwgY2gsIGZnLCBiZylcbiAgfVxuXG4gIHByaW50ICh0ZXh0LCBmZywgYmcpIHtcbiAgICBmb3IgKGxldCBjIG9mIHRleHQpIHtcbiAgICAgIHRoaXMucHV0X2NoYXIoYywgZmcsIGJnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcG9zICgpIHsgcmV0dXJuIHsgeDogdGhpcy5iZWFnbGUueCwgeTogdGhpcy5iZWFnbGUueSB9IH1cblxuICBtb3ZlX3RvICh4LCB5KSB7IHJldHVybiB0aGlzLmJlYWdsZS5tb3ZlX3RvKHgsIHkpIH1cblxuICBtb3ZlX2J5ICh4LCB5KSB7IHJldHVybiB0aGlzLmJlYWdsZS5tb3ZlX2J5KHgsIHkpIH1cblxuICBib2wgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKDEsIHRoaXMuYmVhZ2xlLnkpIH1cblxuICBlb2wgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuX3dpZHRoLCB0aGlzLmJlYWdsZS55KSB9XG5cbiAgYm9zICgpIHsgcmV0dXJuIHRoaXMubW92ZV90bygxLCAxKSB9XG5cbiAgZW9zICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KSB9XG5cbiAgYnMgKCkgeyByZXR1cm4gdGhpcy5sZWZ0KCkucHV0X2NoYXIoJyAnKS5sZWZ0KCkgfVxuXG4gIGNyICgpIHsgcmV0dXJuIHRoaXMubW92ZV90bygxLCB0aGlzLmJlYWdsZS55ICsgMSkgfVxuXG4gIGxmICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLmJlYWdsZS54LCB0aGlzLmJlYWdsZS55ICsgMSkgfVxuXG4gIHVwICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLmJlYWdsZS54LCB0aGlzLmJlYWdsZS55IC0gMSkgfVxuXG4gIGxlZnQgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuYmVhZ2xlLnggLSAxLCB0aGlzLmJlYWdsZS55KSB9XG5cbiAgZG93biAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5iZWFnbGUueCwgdGhpcy5iZWFnbGUueSArIDEpIH1cblxuICByaWdodCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5iZWFnbGUueCArIDEsIHRoaXMuYmVhZ2xlLnkpIH1cblxuICBjbGVhcl9lb2wgKGJnID0gMCkge1xuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zKClcbiAgICBsZXQgcyA9IHRoaXMuaW5kZXgoeCwgeSlcbiAgICB0aGlzLl9kYXRhLmZpbGwoMHgwMDAwRkYgJiBiZywgcywgdGhpcy5pbmRleCh0aGlzLl93aWR0aCwgeSkgLSBzKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjbGVhcl9lb3MgKGJnID0gMCkge1xuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zKClcbiAgICBsZXQgcyA9IHRoaXMuaW5kZXgoeCwgeSlcbiAgICB0aGlzLl9kYXRhLmZpbGwoMHgwMDAwRkYgJiBiZywgcywgdGhpcy5fc2l6ZSAtIHMpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNsZWFyX2JvbCAoYmcgPSAwKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MoKVxuICAgIGxldCBzID0gdGhpcy5pbmRleCh4LCB5KVxuICAgIHRoaXMuX2RhdGEuZmlsbCgweDAwMDBGRiAmIGJnLCBzLCB0aGlzLmluZGV4KDEsIHkpIC0gcylcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY2xlYXJfYm9zIChiZyA9IDApIHtcbiAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcygpXG4gICAgdGhpcy5fZGF0YS5maWxsKDB4MDAwMEZGICYgYmcsIDAsIHRoaXMuaW5kZXgoeCwgeSkgLSAxKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjb3B5X2xpbmUgKHN5LCB0eSkge1xuICAgIGxldCBzaSA9IHRoaXMubGluZShzeSlcbiAgICB0aGlzLl9kYXRhLmNvcHkoc2kuc3RhcnQsIHRoaXMubGluZSh0eSksIHNpLmxlbmd0aClcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY29weV9jb2wgKHN4LCB0eCkge1xuICAgIGxldCBtZW0gPSB0aGlzLl9kYXRhXG4gICAgc3ggKj0gNFxuICAgIHR4ICo9IDRcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX2hlaWdodDsgeSsrKSB7XG4gICAgICBsZXQgaSA9IHRoaXMubGluZSh5KVxuICAgICAgbWVtLmNvcHkoaS5zdGFydCArIHN4LCBpLnN0YXJ0ICsgdHgsIDMpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBlcmFzZV9saW5lICh5LCBiZyA9IDApIHtcbiAgICBsZXQgaSA9IHRoaXMubGluZSh5KVxuICAgIHRoaXMuX2RhdGEuZmlsbCgweDAwMDBGRiAmIGJnLCBpLnN0YXJ0LCBpLmxlbmd0aClcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgZXJhc2VfY29sICh4LCBiZyA9IDApIHtcbiAgICBsZXQgbWVtID0gdGhpcy5fZGF0YVxuICAgIGxldCBscyA9IHRoaXMubGluZSgwKS5zdGFydCArIHggKiAzXG4gICAgbGV0IGMgPSAweDAwMDBGRiAmIGJnXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLl9oZWlnaHQ7IHkrKykge1xuICAgICAgbWVtLmZpbGwoYywgbHMsIDMpXG4gICAgICBscyArPSB0aGlzLl93aWR0aCAqIDNcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIHNjcm9sbCAoZHkpIHtcbiAgICBpZiAoZHkgPiAwKSB7XG4gICAgICBsZXQgaSA9IHRoaXMubGluZShkeSArIDEpXG4gICAgICB0aGlzLl9kYXRhLmNvcHkoaS5zdGFydCwgMCwgdGhpcy5fc2l6ZSlcbiAgICAgIGkgPSB0aGlzLmxpbmUoZHkpXG4gICAgICBsZXQgcyA9IGkuc3RhcnRcbiAgICAgIHRoaXMuX2RhdGEuZmlsbCgwLCBzLCB0aGlzLl9zaXplIC0gcylcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICAgIGVsc2UgaWYgKGR5IDwgMCkge1xuICAgICAgbGV0IGkgPSB0aGlzLmxpbmUoZHkgKyAxKVxuICAgICAgdGhpcy5fZGF0YS5jb3B5KGkuc3RhcnQsIDAsIHRoaXMuX3NpemUpXG4gICAgICBpID0gdGhpcy5saW5lKGR5KVxuICAgICAgbGV0IHMgPSBpLnN0YXJ0XG4gICAgICB0aGlzLl9kYXRhLmZpbGwoMCwgcywgdGhpcy5fc2l6ZSAtIHMpXG4gICAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy9vcndlbGwuanMiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlYWdsZSBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgnYmVhZ2xlJywgWyd3aWR0aCcsICdoZWlnaHQnLCAnY29sb3InLCAnYmxpbmtyYXRlJywgJ3Zpc2libGUnXSlcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcbiAgICB0aGlzLl94ID0gMFxuICAgIHRoaXMuX3kgPSAwXG4gICAgdGhpcy5fbGFzdCA9IDBcbiAgICB0aGlzLl9ibGlua19oaWRkZW4gPSBmYWxzZVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgaWYgKHQgLSB0aGlzLl9sYXN0ID49IHRoaXMuX2JsaW5rcmF0ZSkge1xuICAgICAgdGhpcy5ibGluaygpXG4gICAgICB0aGlzLl9sYXN0ID0gdFxuICAgIH1cbiAgfVxuXG4gIGdldCB4ICgpIHsgcmV0dXJuIHRoaXMuX3ggfVxuICBzZXQgeCAodmFsdWUpIHsgdGhpcy5feCA9IHZhbHVlIH1cblxuICBnZXQgeSAoKSB7IHJldHVybiB0aGlzLl95IH1cbiAgc2V0IHkgKHZhbHVlKSB7IHRoaXMuX3kgPSB2YWx1ZSB9XG5cbiAgZ2V0IGNvbG9yICgpIHsgcmV0dXJuIHRoaXMuX2NvbG9yIH1cbiAgc2V0IGNvbG9yICh2YWx1ZSkgeyB0aGlzLl9jb2xvciA9IHZhbHVlIH1cblxuICBnZXQgYmxpbmtyYXRlICgpIHsgcmV0dXJuIHRoaXMuX2JsaW5rcmF0ZSB9XG4gIHNldCBibGlua3JhdGUgKHZhbHVlKSB7IHRoaXMuX2JsaW5rcmF0ZSA9IHZhbHVlIH1cblxuICBibGluayAoKSB7XG4gICAgaWYgKHRoaXMuX3Zpc2libGUpIHtcbiAgICAgIHRoaXMuX2JsaW5rX2hpZGRlbiA9ICF0aGlzLl9ibGlua19oaWRkZW5cbiAgICAgIHRoaXMudXBkYXRlKHRydWUpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBtb3ZlX3RvICh4LCB5KSB7XG4gICAgY29uc3Qgb3J3ZWxsID0gdGhpcy5vcndlbGxcbiAgICBsZXQgdyA9IG9yd2VsbC53aWR0aFxuICAgIGxldCBoID0gb3J3ZWxsLmhlaWdodFxuXG4gICAgaWYgKHggPiB3KSB7XG4gICAgICB4ID0gd1xuICAgIH1cbiAgICBlbHNlIGlmICh4IDwgMSkge1xuICAgICAgeCA9IDFcbiAgICB9XG5cbiAgICBpZiAoeSA+IGgpIHtcbiAgICAgIHkgPSBoXG4gICAgfVxuICAgIGVsc2UgaWYgKHkgPCAxKSB7XG4gICAgICB5ID0gMVxuICAgIH1cblxuICAgIHRoaXMuX3ggPSB4XG4gICAgdGhpcy5feSA9IHlcblxuICAgIHJldHVybiB0aGlzLmRyYXcoeCwgeSlcbiAgfVxuXG4gIG1vdmVfYnkgKHgsIHkpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLl94ICsgeCwgdGhpcy5feSArIHkpIH1cblxuICBkcmF3ICh4LCB5KSB7XG4gICAgbGV0IHcgPSB0aGlzLl93aWR0aFxuICAgIGxldCBoID0gdGhpcy5faGVpZ2h0XG4gICAgbGV0IGMgPSB0aGlzLl9jb2xvclxuICAgIGxldCBndWlkZW8gPSB0aGlzLmd1aWRlb1xuXG4gICAgZm9yIChsZXQgYnkgPSAwOyBieSA8IGg7IGJ5KyspIHtcbiAgICAgIGxldCBwaSA9ICh5ICsgYnkpICogdyArIHhcbiAgICAgIGZvciAobGV0IGJ4ID0gMDsgYnggPCB3OyBieCsrKSB7XG4gICAgICAgIGd1aWRlby5waXhlbChwaSsrLCBjKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSh0cnVlKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy9iZWFnbGUuanMiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5pbXBvcnQgQ2FudmFzVGV4dHVyZSBmcm9tICcuLi9jYW52YXN0ZXh0dXJlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaW9sZXQgZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoJ3Zpb2xldCcsIFsnZGF0YV9zaXplJywgJ2NvdW50JywgJ3dpZHRoJywgJ2hlaWdodCddKVxuXG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZSA9IG5ldyBDYW52YXNUZXh0dXJlKClcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcblxuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUuZGVzdHJveSgpXG5cbiAgICB0aGlzLl9jYW52YXNUZXh0dXJlLmNyZWF0ZSh0aGlzLl93aWR0aCAqIHRoaXMuX2NvdW50LCB0aGlzLl9oZWlnaHQpXG5cbiAgICB0aGlzLl9zcHJpdGVzTGF5ZXIgPSB0aGlzLl9tYWluLmd1aWRlby5zcHJpdGVzTGF5ZXJcblxuICAgIHRoaXMuY2xlYXIoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZS5kZXN0cm95KClcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG5cbiAgY2xlYXIgKCkge1xuICAgIGlmICh0aGlzLl9zcHJpdGVzTGF5ZXIpIHtcbiAgICAgIHRoaXMuX3Nwcml0ZXNMYXllci5yZW1vdmVDaGlsZHJlbigpXG4gICAgfVxuXG4gICAgc3VwZXIuY2xlYXIoKVxuXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGdldCBzcHJpdGVzTGF5ZXIgKCkgeyByZXR1cm4gdGhpcy5fc3ByaXRlc0xheWVyIH1cblxuICBnZXQgY2FudmFzVGV4dHVyZSAoKSB7IHJldHVybiB0aGlzLl9jYW52YXNUZXh0dXJlIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUudXBkYXRlVGV4dHVyZSh0aGlzLl9kYXRhLCB0aGlzLnJhaW5ib3cpXG4gIH1cblxuICBmaW5kIChuYW1lKSB7XG4gICAgcmV0dXJuIF8uZmluZCh0aGlzLnNwcml0ZXNMYXllci5jaGlsZHJlbiwgeyBfbmFtZTogbmFtZSB9KVxuICB9XG5cbiAgYWRkIChuYW1lLCBmcmFtZSwgeCwgeSwgeikge1xuICAgIGxldCBzID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX3RleHR1cmUpXG4gICAgcy5fbmFtZSA9IG5hbWVcbiAgICB0aGlzLmZyYW1lKG5hbWUsIGZyYW1lKVxuICAgIHRoaXMuc3ByaXRlc0xheWVyLmFkZENoaWxkKHMpXG4gICAgcmV0dXJuIHNcbiAgfVxuXG4gIGRlbCAobmFtZSkge1xuICAgIGxldCBzID0gdGhpcy5maW5kKG5hbWUpXG4gICAgaWYgKHMpIHtcbiAgICAgIHRoaXMuc3ByaXRlc0xheWVyLnJlbW92ZUNoaWxkKHMpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBmcmFtZVJlY3QgKGZyYW1lKSB7XG4gICAgY29uc3QgdyA9IHRoaXMuX3dpZHRoXG4gICAgY29uc3QgaCA9IHRoaXMuX2hlaWdodFxuICAgIHJldHVybiBuZXcgUElYSS5SZWN0YW5nbGUoZnJhbWUgKiB3LCAwLCBmcmFtZSAqIHcgKyB3LCBoKVxuICB9XG5cbiAgeCAobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgcyA9IHRoaXMuZmluZChuYW1lKVxuICAgIGlmIChzICYmIHZhbHVlKSB7XG4gICAgICBzLnggPSB2YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gcyA/IHMueCA6IDBcbiAgfVxuXG4gIHkgKG5hbWUsIHZhbHVlKSB7XG4gICAgbGV0IHMgPSB0aGlzLmZpbmQobmFtZSlcbiAgICBpZiAocyAmJiB2YWx1ZSkge1xuICAgICAgcy55ID0gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIHMgPyBzLnkgOiAwXG4gIH1cblxuICB6IChuYW1lLCB2YWx1ZSkge1xuICAgIGxldCBzID0gdGhpcy5maW5kKG5hbWUpXG4gICAgaWYgKHMgJiYgdmFsdWUpIHtcbiAgICAgIHMueiA9IHZhbHVlXG4gICAgfVxuICAgIHJldHVybiBzID8gcy56IDogMFxuICB9XG5cbiAgZnJhbWUgKG5hbWUsIHZhbHVlKSB7XG4gICAgbGV0IHMgPSB0aGlzLmZpbmQobmFtZSlcbiAgICBpZiAocyAmJiB2YWx1ZSkge1xuICAgICAgcy5fX2ZyYW1lID0gdmFsdWVcbiAgICAgIHMudGV4dHVyZSA9IG5ldyBQSVhJLlRleHR1cmUodGhpcy5fY2FudmFzVGV4dHVyZS50ZXh0dXJlLCB0aGlzLmZyYW1lUmVjdCh2YWx1ZSkpXG4gICAgfVxuICAgIHJldHVybiBzID8gcy5fX2ZyYW1lIDogMFxuICB9XG5cbiAgbW92ZV90byAobmFtZSwgeCwgeSwgeikge1xuICAgIGxldCBzID0gdGhpcy5maW5kKG5hbWUpXG4gICAgaWYgKHMpIHtcbiAgICAgIHMueCA9IHhcbiAgICAgIHMueSA9IHlcbiAgICAgIGlmICh6KSB7XG4gICAgICAgIHMueiA9IHpcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIG1vdmVfYnkgKG5hbWUsIHgsIHksIHopIHtcbiAgICBsZXQgcyA9IHRoaXMuZmluZChuYW1lKVxuICAgIGlmIChzKSB7XG4gICAgICBzLnggKz0geFxuICAgICAgcy55ICs9IHlcbiAgICAgIGlmICh6KSB7XG4gICAgICAgIHMueiArPSB6XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL3Zpb2xldC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzVGV4dHVyZSB7XG5cbiAgY3JlYXRlICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aFxuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodFxuXG4gICAgdGhpcy5fc2l6ZSA9IHdpZHRoICogaGVpZ2h0XG5cbiAgICB0aGlzLl9jYW52YXNCdWZmZXIgPSBuZXcgUElYSS5DYW52YXNCdWZmZXIod2lkdGgsIGhlaWdodClcblxuICAgIHRoaXMuX3RleHR1cmUgPSBQSVhJLlRleHR1cmUuZnJvbUNhbnZhcyh0aGlzLl9jYW52YXNCdWZmZXIuY2FudmFzLCBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1QpXG4gICAgdGhpcy5fdGV4dHVyZS5zY2FsZU1vZGUgPSBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1RcblxuICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXNCdWZmZXIuY2FudmFzLmdldENvbnRleHQoJzJkJywgeyBhbHBoYTogdHJ1ZSwgYW50aWFsaWFzOiBmYWxzZSB9KVxuICAgIHRoaXMuX2NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLl9pbWFnZURhdGEgPSB0aGlzLl9jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5fcGl4ZWxzID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2ltYWdlRGF0YS5kYXRhLmJ1ZmZlcilcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLl90ZXh0dXJlKSB7XG4gICAgICB0aGlzLl90ZXh0dXJlLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fdGV4dHVyZSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY2FudmFzQnVmZmVyKSB7XG4gICAgICB0aGlzLl9jYW52YXNCdWZmZXIuZGVzdHJveSgpXG4gICAgICB0aGlzLl9jYW52YXNCdWZmZXIgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Nwcml0ZSkge1xuICAgICAgdGhpcy5fc3ByaXRlLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fc3ByaXRlID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGdldCBzaXplICgpIHsgcmV0dXJuIHRoaXMuX3NpemUgfVxuXG4gIGdldCB3aWR0aCAoKSB7IHJldHVybiB0aGlzLl93aWR0aCB9XG4gIGdldCBoZWlnaHQgKCkgeyByZXR1cm4gdGhpcy5faGVpZ2h0IH1cblxuICBnZXQgdGV4dHVyZSAoKSB7IHJldHVybiB0aGlzLl90ZXh0dXJlIH1cbiAgZ2V0IGNvbnRleHQgKCkgeyByZXR1cm4gdGhpcy5fY29udGV4dCB9XG4gIGdldCBjYW52YXNCdWZmZXIgKCkgeyByZXR1cm4gdGhpcy5fY2FudmFzQnVmZmVyIH1cbiAgZ2V0IGNhbnZhcyAoKSB7IHJldHVybiB0aGlzLl9jYW52YXNCdWZmZXIuY2FudmFzIH1cbiAgZ2V0IGltYWdlRGF0YSAoKSB7IHJldHVybiB0aGlzLl9pbWFnZURhdGEgfVxuICBnZXQgcGl4ZWxzICgpIHsgcmV0dXJuIHRoaXMuX3BpeGVscyB9XG5cbiAgZ2V0IHNwcml0ZSAoKSB7XG4gICAgaWYgKCF0aGlzLl9zcHJpdGUpIHtcbiAgICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl90ZXh0dXJlKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3ByaXRlXG4gIH1cblxuICB1cGRhdGVUZXh0dXJlIChkYXRhLCBwYWxldHRlKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRleHQpIHtcbiAgICAgIGNvbnN0IHNpemUgPSB0aGlzLl9zaXplXG4gICAgICBjb25zdCBwaXhlbHMgPSB0aGlzLl9waXhlbHNcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgcGl4ZWxzW2ldID0gcGFsZXR0ZS5jb2xvcihkYXRhW2ldKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9jb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLl9pbWFnZURhdGEsIDAsIDApXG5cbiAgICAgIHRoaXMuX3RleHR1cmUudXBkYXRlKClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jYW52YXN0ZXh0dXJlLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IENhbnZhc1RleHR1cmUgZnJvbSAnLi9jYW52YXN0ZXh0dXJlLmpzJ1xuXG5leHBvcnQgY2xhc3MgT3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IgKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5fb3ZlcmxheXMgPSBvdmVybGF5c1xuXG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aFxuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodFxuXG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZSA9IG5ldyBDYW52YXNUZXh0dXJlKClcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgY3JlYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNpemUodGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLl9zcHJpdGUpIHtcbiAgICAgIHRoaXMuX3Nwcml0ZS5kZXN0cm95KClcbiAgICAgIHRoaXMuX3Nwcml0ZSA9IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLl9jYW52YXNUZXh0dXJlLmRlc3Ryb3koKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX2xhc3QgPSAwXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcmVzaXplICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aFxuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodFxuXG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZS5kZXN0cm95KClcblxuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUuY3JlYXRlKHdpZHRoLCBoZWlnaHQpXG5cbiAgICBpZiAodGhpcy5fc3ByaXRlKSB7XG4gICAgICB0aGlzLl9zcHJpdGUuZGVzdHJveSgpXG4gICAgICB0aGlzLl9zcHJpdGUgPSBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5fc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMudGV4dHVyZSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0aWNrICh0KSB7XG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHJldHVybiB0aGlzLmd1aWRlby51cGRhdGUoKVxuICB9XG5cbiAgdXBkYXRlVGV4dHVyZSAoZGF0YSwgcGFsZXR0ZSkge1xuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUudXBkYXRlVGV4dHVyZShkYXRhLCBwYWxldHRlKVxuICAgIHJldHVybiB0aGlzLmd1aWRlby51cGRhdGUodHJ1ZSlcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX292ZXJsYXlzLm1haW4gfVxuICBnZXQgZ3VpZGVvICgpIHsgcmV0dXJuIHRoaXMubWFpbi5ndWlkZW8gfVxuICBnZXQgc3RhZ2UgKCkgeyByZXR1cm4gdGhpcy5tYWluLnN0YWdlIH1cbiAgZ2V0IHJlbmRlcmVyICgpIHsgcmV0dXJuIHRoaXMubWFpbi5yZW5kZXJlciB9XG5cbiAgZ2V0IHNwcml0ZSAoKSB7IHJldHVybiB0aGlzLl9zcHJpdGUgfVxuXG4gIGdldCBjb250ZXh0ICgpIHsgcmV0dXJuIHRoaXMuX2NhbnZhc1RleHR1cmUuY29udGV4dCB9XG4gIGdldCB0ZXh0dXJlICgpIHsgcmV0dXJuIHRoaXMuX2NhbnZhc1RleHR1cmUudGV4dHVyZSB9XG4gIGdldCBpbWFnZURhdGEgKCkgeyByZXR1cm4gdGhpcy5fY2FudmFzVGV4dHVyZS5pbWFnZURhdGEgfVxuICBnZXQgcGl4ZWxzICgpIHsgcmV0dXJuIHRoaXMuX2NhbnZhc1RleHR1cmUucGl4ZWxzIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBCb3JkZXJPdmVybGF5IGV4dGVuZHMgT3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IgKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIob3ZlcmxheXMsIHdpZHRoICsgXy5nZXQob3B0aW9ucywgJ3NpemUnLCAwKSAqIDIsIGhlaWdodCArIF8uZ2V0KG9wdGlvbnMsICdzaXplJywgMCkgKiAyKVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuXG4gICAgdGhpcy5fZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpXG4gICAgdGhpcy5fc3ByaXRlLmFkZENoaWxkKHRoaXMuX2dyYXBoaWNzKVxuXG4gICAgdGhpcy5jb2xvciA9IF8uZ2V0KG9wdGlvbnMsICdjb2xvcicsIDApXG4gIH1cblxuICBnZXQgY29sb3IgKCkgeyByZXR1cm4gdGhpcy5fY29sb3IgfVxuICBzZXQgY29sb3IgKHZhbHVlKSB7XG4gICAgdGhpcy5fY29sb3IgPSB2YWx1ZVxuICAgIHRoaXMuX2dyYXBoaWNzLmJlZ2luRmlsbCh0aGlzLmd1aWRlby5yYWluYm93LmNvbG9yKHRoaXMuX2NvbG9yKSwgMjU1KVxuICAgIHRoaXMuX2dyYXBoaWNzLmRyYXdSZWN0KDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gICAgdGhpcy5fZ3JhcGhpY3MuZW5kRmlsbCgpXG4gIH1cblxuICBnZXQgZ3JhcGhpY3MgKCkgeyByZXR1cm4gdGhpcy5fZ3JhcGhpY3MgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIFNjcmVlbk92ZXJsYXkgZXh0ZW5kcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihvdmVybGF5cywgd2lkdGgsIGhlaWdodClcblxuICAgIHRoaXMuY3JlYXRlKClcbiAgfVxuXG4gIGNyZWF0ZSAoKSB7XG4gICAgc3VwZXIuY3JlYXRlKClcblxuICAgIHRoaXMuX3Nwcml0ZS54ID0gdGhpcy5tYWluLmRlZmF1bHRzKCdib3JkZXIuc2l6ZScsIDApXG4gICAgdGhpcy5fc3ByaXRlLnkgPSB0aGlzLm1haW4uZGVmYXVsdHMoJ2JvcmRlci5zaXplJywgMClcblxuICAgIHRoaXMuX3Nwcml0ZXNMYXllciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG4gICAgdGhpcy5fc3ByaXRlLmFkZENoaWxkKHRoaXMuX3Nwcml0ZXNMYXllcilcblxuICAgIHRoaXMuX21vdXNlTGF5ZXIgPSBuZXcgUElYSS5Db250YWluZXIoKVxuICAgIHRoaXMuX3Nwcml0ZS5hZGRDaGlsZCh0aGlzLl9tb3VzZUxheWVyKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX2RhdGEgPSBudWxsXG4gICAgdGhpcy5fcGFsZXR0ZSA9IG51bGxcblxuICAgIHJldHVybiBzdXBlci5yZXNldCgpXG4gIH1cblxuICBnZXQgc3ByaXRlc0xheWVyICgpIHsgcmV0dXJuIHRoaXMuX3Nwcml0ZXNMYXllciB9XG4gIGdldCBtb3VzZUxheWVyICgpIHsgcmV0dXJuIHRoaXMuX21vdXNlTGF5ZXIgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy51cGRhdGVUZXh0dXJlKHRoaXMuX2RhdGEsIHRoaXMuX3BhbGV0dGUpXG4gICAgcmV0dXJuIHRoaXMuZ3VpZGVvLnVwZGF0ZSh0cnVlKVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgU2NhbmxpbmVzT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5fZ2FwID0gXy5nZXQob3B0aW9ucywgJ2dhcCcsIDMpXG4gICAgdGhpcy5fYWxwaGEgPSBfLmdldChvcHRpb25zLCAnYWxwaGEnLCAwLjM1KVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuXG4gICAgbGV0IGEgPSB0aGlzLl9hbHBoYSAqIDI1NVxuICAgIGxldCBkYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuICAgIGxldCBwaXhlbHMgPSBkYXRhLmRhdGFcbiAgICBsZXQgc3ogPSB0aGlzLl93aWR0aCAqIDRcbiAgICBsZXQgaWR4XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLl9oZWlnaHQ7IHkgKz0gdGhpcy5fZ2FwKSB7XG4gICAgICBpZHggPSB5ICogc3pcbiAgICAgIGZvciAobGV0IGkgPSBpZHg7IGkgPCBpZHggKyBzejsgaSArPSA0KSB7XG4gICAgICAgIHBpeGVscy5zZXQoWzAsIDAsIDAsIGFdLCBpKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApXG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBTY2FubGluZU92ZXJsYXkgZXh0ZW5kcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihvdmVybGF5cywgd2lkdGgsIGhlaWdodClcblxuICAgIHRoaXMuX3JhdGUgPSBfLmdldChvcHRpb25zLCAncmF0ZScsIDUwKVxuICAgIHRoaXMuX3NwZWVkID0gXy5nZXQob3B0aW9ucywgJ3NwZWVkJywgMTYpXG4gICAgdGhpcy5fYWxwaGEgPSBfLmdldChvcHRpb25zLCAnYWxwaGEnLCAwLjEpXG5cbiAgICB0aGlzLmNyZWF0ZSgpXG5cbiAgICBsZXQgZGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICBsZXQgcGl4ZWxzID0gZGF0YS5kYXRhXG4gICAgbGV0IHN6ID0gdGhpcy5fd2lkdGggKiA0XG4gICAgbGV0IGxlbiA9IHRoaXMuX2hlaWdodCAqIHN6XG4gICAgbGV0IGwgPSAwXG4gICAgbGV0IGggPSB0aGlzLl9oZWlnaHRcbiAgICBsZXQgYSA9IHRoaXMuX2FscGhhICogMjU1XG4gICAgbGV0IGFhXG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbjsgeSArPSBzeikge1xuICAgICAgYWEgPSBsIC8gaCAqIGFcbiAgICAgIGZvciAobGV0IHggPSB5OyB4IDwgeSArIHN6OyB4ICs9IDQpIHtcbiAgICAgICAgcGl4ZWxzLnNldChbMjUsIDI1LCAyNSwgYWFdLCB4KVxuICAgICAgfVxuICAgICAgbCsrXG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKVxuXG4gICAgdGhpcy5fc3ByaXRlLnkgPSAtdGhpcy5fc3ByaXRlLmhlaWdodFxuICB9XG5cbiAgdGljayAodCkge1xuICAgIGlmICh0IC0gdGhpcy5fbGFzdCA+PSB0aGlzLl9yYXRlKSB7XG4gICAgICB0aGlzLnNwcml0ZS55ICs9IHRoaXMuX3NwZWVkXG4gICAgICBpZiAodGhpcy5fc3ByaXRlLnkgPiB0aGlzLl9oZWlnaHQpIHtcbiAgICAgICAgdGhpcy5fc3ByaXRlLnkgPSAtdGhpcy5fc3ByaXRlLmhlaWdodFxuICAgICAgfVxuICAgICAgdGhpcy5fbGFzdCA9IHRcblxuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIE5vaXNlc092ZXJsYXkgZXh0ZW5kcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihvdmVybGF5cywgd2lkdGgsIGhlaWdodClcblxuICAgIHRoaXMuX3JhdGUgPSBfLmdldChvcHRpb25zLCAncmF0ZScsIDI1MClcbiAgICB0aGlzLl9jb3VudCA9IF8uZ2V0KG9wdGlvbnMsICdjb3VudCcsIDgpXG4gICAgdGhpcy5fcmF0ZSA9IF8uZ2V0KG9wdGlvbnMsICdyYXRlJywgMC44NSlcbiAgICB0aGlzLl9yZWQgPSBfLmdldChvcHRpb25zLCAncmVkJywgMTAwKVxuICAgIHRoaXMuX2dyZWVuID0gXy5nZXQob3B0aW9ucywgJ2dyZWVuJywgMTAwKVxuICAgIHRoaXMuX2JsdWUgPSBfLmdldChvcHRpb25zLCAnYmx1ZScsIDEwMClcbiAgICB0aGlzLl9hbHBoYSA9IF8uZ2V0KG9wdGlvbnMsICdhbHBoYScsIDAuMTUpXG5cbiAgICB0aGlzLl9ub2lzZXMgPSB7fVxuXG4gICAgbGV0IGEgPSB0aGlzLl9hbHBoYSAqIDI1NVxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5fY291bnQ7IGMrKykge1xuICAgICAgbGV0IG5vaXNlID0gbmV3IE92ZXJsYXkob3ZlcmxheXMsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gICAgICBub2lzZS5jcmVhdGUoKVxuICAgICAgbm9pc2UuX3Nwcml0ZS52aXNpYmxlID0gYyA9PT0gMFxuXG4gICAgICBsZXQgZGF0YSA9IG5vaXNlLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gICAgICBsZXQgcGl4ZWxzID0gZGF0YS5kYXRhXG4gICAgICBsZXQgbGVuID0gcGl4ZWxzLmxlbmd0aFxuICAgICAgbGV0IHIgPSB0aGlzLl9yZWRcbiAgICAgIGxldCBnID0gdGhpcy5fZ3JlZW5cbiAgICAgIGxldCBiID0gdGhpcy5fYmx1ZVxuICAgICAgbGV0IF9yYXRlID0gdGhpcy5fcmF0ZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+PSBfcmF0ZSkge1xuICAgICAgICAgIHBpeGVscy5zZXQoW01hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIHIpLCBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiBnKSwgTWF0aC50cnVuYyhNYXRoLnJhbmRvbSgpICogYiksIGFdLCBpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBub2lzZS5jb250ZXh0LnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKVxuICAgICAgdGhpcy5fbm9pc2VzW2NdID0gbm9pc2VcbiAgICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQobm9pc2Uuc3ByaXRlKVxuICAgIH1cblxuICAgIHRoaXMuX25vaXNlS2V5cyA9IF8ua2V5cyh0aGlzLl9ub2lzZXMpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBzdXBlci5kZXN0cm95KClcblxuICAgIGZvciAobGV0IGsgaW4gdGhpcy5fbm9pc2VzKSB7XG4gICAgICBsZXQgbm9pc2UgPSB0aGlzLl9ub2lzZXNba11cbiAgICAgIG5vaXNlLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHRoaXMuX25vaXNlcyA9IHt9XG4gICAgdGhpcy5fbm9pc2VLZXlzID0gW11cbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBpZiAodCAtIHRoaXMuX2xhc3QgPj0gdGhpcy5fcmF0ZSkge1xuICAgICAgZm9yIChsZXQgayBvZiB0aGlzLl9ub2lzZUtleXMpIHtcbiAgICAgICAgdGhpcy5fbm9pc2VzW2tdLnNwcml0ZS52aXNpYmxlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgbGV0IG5vaXNlID0gdGhpcy5fbm9pc2VLZXlzW01hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIHRoaXMuX25vaXNlS2V5cy5sZW5ndGgpXVxuICAgICAgdGhpcy5fbm9pc2VzW25vaXNlXS5zcHJpdGUudmlzaWJsZSA9IHRydWVcblxuICAgICAgdGhpcy5fbGFzdCA9IHRcblxuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIFJnYk92ZXJsYXkgZXh0ZW5kcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihvdmVybGF5cywgd2lkdGgsIGhlaWdodClcblxuICAgIHRoaXMuX2FscGhhID0gXy5nZXQob3B0aW9ucywgJ2FscGhhJywgMC4wNzUpXG5cbiAgICB0aGlzLmNyZWF0ZSgpXG5cbiAgICBsZXQgZGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICBsZXQgcGl4ZWxzID0gZGF0YS5kYXRhXG4gICAgbGV0IGxlbiA9IHBpeGVscy5sZW5ndGhcbiAgICBsZXQgYSA9IHRoaXMuX2FscGhhICogMjU1XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMTIpIHtcbiAgICAgIHBpeGVscy5zZXQoWzEwMCwgMTAwLCAxMDAsIGFdLCBpKVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApXG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBDcnRPdmVybGF5IGV4dGVuZHMgT3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IgKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLl9yYWRpdXMgPSBfLmdldChvcHRpb25zLCAncmFkaXVzJywgMC4yNSlcbiAgICB0aGlzLl9pbnNpZGVfYWxwaGEgPSBfLmdldChvcHRpb25zLCAnaW5zaWRlX2FscGhhJywgMC4yKVxuICAgIHRoaXMuX291dHNpZGVfYWxwaGEgPSBfLmdldChvcHRpb25zLCAnb3V0c2lkZV9hbHBoYScsIDAuMTUpXG5cbiAgICB0aGlzLmNyZWF0ZSgpXG5cbiAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2RhcmtlcidcbiAgICBsZXQgZ3JhZGllbnQgPSB0aGlzLmNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQodGhpcy5fd2lkdGggLyAyLCB0aGlzLl9oZWlnaHQgLyAyLCB0aGlzLl9oZWlnaHQgLyAyLCB0aGlzLl93aWR0aCAvIDIsIHRoaXMuX2hlaWdodCAvIDIsIHRoaXMuX2hlaWdodCAvIHRoaXMuX3JhZGl1cylcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgJyArIHRoaXMuX2luc2lkZV9hbHBoYSArICcpJylcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMCwgMCwgMCwgJyArIHRoaXMuX291dHNpZGVfYWxwaGEgKyAnKScpXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50XG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gICAgdGhpcy5jb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3ZlcidcbiAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIE92ZXJsYXlzIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbiwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5fbWFpbiA9IG1haW5cblxuICAgIGxldCBzdGFnZSA9IG1haW4uc3RhZ2VcbiAgICBsZXQgcmVuZGVyZXIgPSBtYWluLnJlbmRlcmVyXG5cbiAgICBsZXQgd2lkdGggPSByZW5kZXJlci53aWR0aFxuICAgIGxldCBoZWlnaHQgPSByZW5kZXJlci5oZWlnaHRcblxuICAgIHRoaXMuX2xpc3QgPSB7fVxuICAgIGxldCBsID0gdGhpcy5fbGlzdFxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZU92ZXJsYXkgKGN0eCwgQ2xzLCBuYW1lLCBkZWZhdWx0cyA9IHt9KSB7XG4gICAgICBsZXQgbyA9IF8uZGVmYXVsdHNEZWVwKHt9LCBvcHRpb25zLCB7IFtuYW1lXTogZGVmYXVsdHMgfSlcbiAgICAgIGxldCBzID0gXy5nZXQob1tuYW1lXSwgJ3NjYWxlJywgMSlcbiAgICAgIGxbbmFtZV0gPSBuZXcgQ2xzKGN0eCwgXy5nZXQob1tuYW1lXSwgJ3dpZHRoJywgMCksIF8uZ2V0KG9bbmFtZV0sICdoZWlnaHQnLCAwKSwgb1tuYW1lXSlcbiAgICAgIGxbbmFtZV0uc3ByaXRlLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQocywgcylcbiAgICAgIHN0YWdlLmFkZENoaWxkKGxbbmFtZV0uc3ByaXRlKVxuICAgICAgcmV0dXJuIGxbbmFtZV1cbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ2JvcmRlcicpKSB7XG4gICAgICBfY3JlYXRlT3ZlcmxheSh0aGlzLCBCb3JkZXJPdmVybGF5LCAnYm9yZGVyJywgeyB3aWR0aCwgaGVpZ2h0IH0pXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdzY3JlZW4nKSkge1xuICAgICAgX2NyZWF0ZU92ZXJsYXkodGhpcywgU2NyZWVuT3ZlcmxheSwgJ3NjcmVlbicsIHsgd2lkdGg6IHRoaXMuZ3VpZGVvLndpZHRoLCBoZWlnaHQ6IHRoaXMuZ3VpZGVvLmhlaWdodCB9KVxuICAgIH1cblxuICAgIGlmIChfLmdldChvcHRpb25zLCAnc2NhbmxpbmVzJykpIHtcbiAgICAgIF9jcmVhdGVPdmVybGF5KHRoaXMsIFNjYW5saW5lc092ZXJsYXksICdzY2FubGluZXMnLCB7IHdpZHRoLCBoZWlnaHQgfSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ3NjYW5saW5lJykpIHtcbiAgICAgIF9jcmVhdGVPdmVybGF5KHRoaXMsIFNjYW5saW5lT3ZlcmxheSwgJ3NjYW5saW5lJywgeyB3aWR0aCwgaGVpZ2h0IH0pXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdyZ2InKSkge1xuICAgICAgX2NyZWF0ZU92ZXJsYXkodGhpcywgUmdiT3ZlcmxheSwgJ3JnYicsIHsgd2lkdGgsIGhlaWdodCB9KVxuICAgIH1cblxuICAgIGlmIChfLmdldChvcHRpb25zLCAnbm9pc2VzJykpIHtcbiAgICAgIGxldCB3ID0gXy5nZXQob3B0aW9ucywgJ25vaXNlcy53aWR0aCcsIHdpZHRoKVxuICAgICAgbGV0IGggPSBfLmdldChvcHRpb25zLCAnbm9pc2VzLmhlaWdodCcsIGhlaWdodClcbiAgICAgIGwubm9pc2VzID0gbmV3IE5vaXNlc092ZXJsYXkodGhpcywgdywgaCwgXy5nZXQob3B0aW9ucywgJ25vaXNlcycpKVxuICAgIH1cblxuICAgIGlmIChfLmdldChvcHRpb25zLCAnY3J0JykpIHtcbiAgICAgIF9jcmVhdGVPdmVybGF5KHRoaXMsIENydE92ZXJsYXksICdjcnQnLCB7IHdpZHRoLCBoZWlnaHQgfSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ21vbml0b3InKSkge1xuICAgICAgbGV0IHcgPSBfLmdldChvcHRpb25zLCAnbW9uaXRvci53aWR0aCcsIHdpZHRoKVxuICAgICAgbGV0IGggPSBfLmdldChvcHRpb25zLCAnbW9uaXRvci5oZWlnaHQnLCBoZWlnaHQpXG4gICAgICBsZXQgcyA9IF8uZ2V0KG9wdGlvbnMsICdtb25pdG9yLnNjYWxlJywgMSlcblxuICAgICAgbGV0IHRleCA9IFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoJy4vYnVpbGQvJyArIHJlcXVpcmUoJ2ZpbGU/bmFtZT1hc3NldHMvW3BhdGhdL1tuYW1lXS5bZXh0XSEuLi8uLi9hc3NldHMvaW1ncy9jcnQucG5nJykpXG4gICAgICBsLm1vbml0b3IgPSBuZXcgUElYSS5TcHJpdGUodGV4KVxuICAgICAgbC5tb25pdG9yLnggPSAwXG4gICAgICBsLm1vbml0b3IueSA9IDBcbiAgICAgIGwubW9uaXRvci53aWR0aCA9IHdcbiAgICAgIGwubW9uaXRvci5oZWlnaHQgPSBoXG4gICAgICBsLm1vbml0b3Iuc2NhbGUgPSBuZXcgUElYSS5Qb2ludChzLCBzKVxuICAgICAgc3RhZ2UuYWRkQ2hpbGQobC5tb25pdG9yKVxuICAgIH1cbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBjb25zdCBsID0gdGhpcy5fbGlzdFxuICAgIGZvciAobGV0IGsgaW4gbCkge1xuICAgICAgaWYgKGxba10udGljaykge1xuICAgICAgICBsW2tdLnRpY2sodClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgY29uc3QgbCA9IHRoaXMuX2xpc3RcbiAgICBmb3IgKGxldCBrIGluIGwpIHtcbiAgICAgIGlmIChsW2tdLnJlc2V0KSB7XG4gICAgICAgIGxba10ucmVzZXQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGNvbnN0IGwgPSB0aGlzLl9saXN0XG4gICAgZm9yIChsZXQgayBpbiBsKSB7XG4gICAgICBpZiAobFtrXS5kZXN0cm95KSB7XG4gICAgICAgIGxba10uZGVzdHJveSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fbWFpbiB9XG4gIGdldCBndWlkZW8gKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5ndWlkZW8gfVxuICBnZXQgc3RhZ2UgKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5zdGFnZSB9XG4gIGdldCByZW5kZXJlciAoKSB7IHJldHVybiB0aGlzLl9tYWluLnJlbmRlcmVyIH1cbiAgZ2V0IHNjcmVlbiAoKSB7IHJldHVybiB0aGlzLl9saXN0LnNjcmVlbiB9XG5cbiAgcmVzaXplICgpIHtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vb3ZlcmxheXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvYXNzZXRzL2ltZ3MvL2NydC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmlsZS1sb2FkZXI/bmFtZT1hc3NldHMvW3BhdGhdL1tuYW1lXS5bZXh0XSEuL2Fzc2V0cy9pbWdzL2NydC5wbmdcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXAgPSB7XG5cdFwiLi9jcnQucG5nXCI6IDc4LFxuXHRcIi4vdGVzdC5wbmdcIjogNzlcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNzc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9pbWdzIC4vfi9maWxlLWxvYWRlcj9uYW1lPWFzc2V0cy9bbmFtZV0uW2V4dF0hXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2NydC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmlsZS1sb2FkZXI/bmFtZT1hc3NldHMvW25hbWVdLltleHRdIS4vYXNzZXRzL2ltZ3MvY3J0LnBuZ1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3Rlc3QucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpbGUtbG9hZGVyP25hbWU9YXNzZXRzL1tuYW1lXS5bZXh0XSEuL2Fzc2V0cy9pbWdzL3Rlc3QucG5nXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtlbiBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgna2VuJywgWydjb3VudCddKVxuXG4gICAgdGhpcy5fb25LZXlkb3duID0gdGhpcy5vbktleWRvd24uYmluZCh0aGlzKVxuICAgIHRoaXMuX29uS2V5dXAgPSB0aGlzLm9uS2V5dXAuYmluZCh0aGlzKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleWRvd24pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXl1cClcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcblxuICAgIHRoaXMuX21vZHMgPSAwXG4gICAgdGhpcy5fam95c3RpY2sgPSAwXG4gICAgdGhpcy5fa2V5cyA9IHt9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleWRvd24pXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXl1cClcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG5cbiAgZ2V0IG1vZHMgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyB9XG4gIGdldCBqb3lzdGljayAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayB9XG4gIGdldCBrZXlzICgpIHsgcmV0dXJuIHRoaXMuX2tleXMgfVxuXG4gIGdldCBzaGlmdCAoKSB7IHJldHVybiB0aGlzLl9tb2RzICYgMHgwMSB9XG4gIGdldCBjdHJsICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDAyIH1cbiAgZ2V0IGFsdCAoKSB7IHJldHVybiB0aGlzLl9tb2RzICYgMHgwNCB9XG4gIGdldCBtZXRhICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDA4IH1cbiAgZ2V0IG51bXBhZCAoKSB7IHJldHVybiB0aGlzLl9tb2RzICYgMHgxMCB9XG4gIGdldCBidG4wICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHgxMCB9XG4gIGdldCBidG4xICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHgyMCB9XG4gIGdldCBidG4yICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHg0MCB9XG4gIGdldCBidG4zICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHg4MCB9XG4gIGdldCBidG40ICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHgxMDAgfVxuICBnZXQgdXAgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDAxIH1cbiAgZ2V0IGRvd24gKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDAyIH1cbiAgZ2V0IHJpZ2h0ICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHgwNCB9XG4gIGdldCBsZWZ0ICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHgwOCB9XG5cbiAgZXZlbnREZXRhaWxzIChlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleTogZS5rZXksXG4gICAgICBrZXlDb2RlOiBlLmtleUNvZGUsXG4gICAgICBrZXlzOiB0aGlzLl9rZXlzLFxuICAgICAgbW9kczogdGhpcy5fbW9kcyxcbiAgICAgIGpveXN0aWNrOiB0aGlzLl9qb3lzdGljayxcbiAgICAgIHNoaWZ0OiB0aGlzLnNoaWZ0LFxuICAgICAgY3RybDogdGhpcy5jdHJsLFxuICAgICAgYWx0OiB0aGlzLmFsdCxcbiAgICAgIG1ldGE6IHRoaXMubWV0YSxcbiAgICAgIG51bXBhZDogdGhpcy5udW1wYWQsXG4gICAgICBidG4wOiB0aGlzLmJ0bjAsXG4gICAgICBidG4xOiB0aGlzLmJ0bjEsXG4gICAgICBidG4yOiB0aGlzLmJ0bjIsXG4gICAgICBidG4zOiB0aGlzLmJ0bjMsXG4gICAgICBidG40OiB0aGlzLmJ0bjQsXG4gICAgICB1cDogdGhpcy51cCxcbiAgICAgIGRvd246IHRoaXMuZG93bixcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgIH1cbiAgfVxuXG4gIG9uS2V5ZG93biAoZSkge1xuICAgIGxldCBudW1wYWQgPSBlLmxvY2F0aW9uID09PSAzXG4gICAgaWYgKG51bXBhZCkge1xuICAgICAgdGhpcy5fbW9kcyB8PSAweDEwXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fbW9kcyAmPSB+MHgxMFxuICAgIH1cbiAgICB0aGlzLl9rZXlzW2Uua2V5Q29kZV0gPSAxXG5cbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICBjYXNlICdTaGlmdCc6XG4gICAgICAgIHRoaXMuX21vZHMgfD0gMHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdDb250cm9sJzpcbiAgICAgICAgdGhpcy5fbW9kcyB8PSAweDAyXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0FsdCc6XG4gICAgICAgIHRoaXMuX21vZHMgfD0gMHgwNFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdNZXRhJzpcbiAgICAgICAgdGhpcy5fbW9kcyB8PSAweDA4XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDAxXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzgnOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwMVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnMic6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDAyXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwNFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICc0JzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDRcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwOFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICc2JzogLy8gbnVtcGFkIDZcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDhcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICd6JzogLy8gYnV0dG9uIDBcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgxMFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICd4JzogLy8gYnV0dG9uIDFcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgyMFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdjJzogLy8gYnV0dG9uIDJcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHg0MFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICcgJzogLy8gYnV0dG9uIDNcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHg4MFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdFbnRlcic6IC8vIGJ1dHRvbiA0XG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MTAwXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdrZXkuZG93bicsIHRoaXMuZXZlbnREZXRhaWxzKGUpKVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG5cbiAgb25LZXl1cCAoZSkge1xuICAgIGxldCBudW1wYWQgPSBlLmxvY2F0aW9uID09PSAzXG4gICAgaWYgKG51bXBhZCkge1xuICAgICAgdGhpcy5fbW9kcyB8PSAweDEwXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fbW9kcyAmPSB+MHgxMFxuICAgIH1cbiAgICB0aGlzLl9rZXlzW2Uua2V5Q29kZV0gPSAwXG5cbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICBjYXNlICdTaGlmdCc6XG4gICAgICAgIHRoaXMuX21vZHMgJj0gfjB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQ29udHJvbCc6XG4gICAgICAgIHRoaXMuX21vZHMgJj0gfjB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQWx0JzpcbiAgICAgICAgdGhpcy5fbW9kcyAmPSB+MHgwNFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdNZXRhJzpcbiAgICAgICAgdGhpcy5fbW9kcyAmPSB+MHgwOFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnOCc6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwMVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDAyXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzInOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDJcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwNFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICc0JzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDA0XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDA4XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzYnOiAvLyBudW1wYWQgNlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDhcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICd6JzogLy8gYnV0dG9uIDBcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MTBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAneCc6IC8vIGJ1dHRvbiAxXG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDIwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2MnOiAvLyBidXR0b24gMlxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHg0MFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICcgJzogLy8gYnV0dG9uIDNcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4ODBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnRW50ZXInOiAvLyBidXR0b24gNFxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgxMDBcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ2tleS51cCcsIHRoaXMuZXZlbnREZXRhaWxzKGUpKVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy9rZW4uanMiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5pbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4uLy4uL2dsb2JhbHMuanMnXG5pbXBvcnQgQ2FudmFzVGV4dHVyZSBmcm9tICcuLi9jYW52YXN0ZXh0dXJlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaWNrZXkgZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoJ21pY2tleScsIFsnY291bnQnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ2ZyYW1lJywgJ2NvbG9yJywgJ2RibENsaWNrRGVsYXknLCAnZGJsQ2xpY2tEaXN0YW5jZSddKVxuXG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZSA9IG5ldyBDYW52YXNUZXh0dXJlKClcblxuICAgIHRoaXMuX2RlZmF1bHRfZnJhbWUgPSB0aGlzLl9mcmFtZVxuICAgIHRoaXMuX2RlZmF1bHRfY29sb3IgPSB0aGlzLl9jb2xvclxuXG4gICAgbGV0IHN0YWdlID0gbWFpbi5zdGFnZVxuICAgIGlmIChzdGFnZSkge1xuICAgICAgc3RhZ2UuaW50ZXJhY3RpdmUgPSB0cnVlXG5cbiAgICAgIHRoaXMuX29uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpXG4gICAgICB0aGlzLl9vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKVxuICAgICAgdGhpcy5fb25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKVxuXG4gICAgICBzdGFnZS5vbignbW91c2Vkb3duJywgdGhpcy5fb25Nb3VzZURvd24pXG4gICAgICBzdGFnZS5vbigncmlnaHRkb3duJywgdGhpcy5fb25Nb3VzZURvd24pXG4gICAgICBzdGFnZS5vbigndG91Y2hzdGFydCcsIHRoaXMuX29uTW91c2VEb3duKVxuXG4gICAgICBzdGFnZS5vbignbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUpXG5cbiAgICAgIHN0YWdlLm9uKCdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub24oJ3RvdWNoZW5kJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub24oJ21vdXNldXBvdXRzaWRlJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub24oJ3RvdWNoZW5kb3V0c2lkZScsIHRoaXMuX29uTW91c2VVcClcbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBzdXBlci5yZXNldCgpXG5cbiAgICB0aGlzLl94ID0gMFxuICAgIHRoaXMuX3kgPSAwXG4gICAgdGhpcy5fY29sb3IgPSB0aGlzLl9kZWZhdWx0X2NvbG9yXG4gICAgdGhpcy5fZnJhbWUgPSB0aGlzLl9kZWZhdWx0X2ZyYW1lXG4gICAgdGhpcy5fYnRucyA9IDBcblxuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUuZGVzdHJveSgpXG5cbiAgICB0aGlzLl9jYW52YXNUZXh0dXJlLmNyZWF0ZSh0aGlzLl93aWR0aCAqIHRoaXMuX2NvdW50LCB0aGlzLl9oZWlnaHQpXG5cbiAgICB0aGlzLl9tb3VzZUxheWVyID0gdGhpcy5fbWFpbi5ndWlkZW8ubW91c2VMYXllclxuXG4gICAgaWYgKHRoaXMuX3Nwcml0ZSkge1xuICAgICAgdGhpcy5fc3ByaXRlLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fc3ByaXRlID0gbnVsbFxuICAgIH1cblxuICAgIHRoaXMuX21vdXNlTGF5ZXIucmVtb3ZlQ2hpbGRyZW4oKVxuXG4gICAgdGhpcy5tZW1vcnkuZnJvbV8yZF9hcnJheV9tYXNrKHRoaXMuX3RvcCwgMCwgdGhpcy5jb3VudCwgdGhpcy5fd2lkdGgsIFtcbiAgICAgICcuLiAgICAnLFxuICAgICAgJy53LiAgICcsXG4gICAgICAnLnd3LiAgJyxcbiAgICAgICcud3d3LiAnLFxuICAgICAgJy53d3d3LicsXG4gICAgICAnLncuLi4uJyxcbiAgICAgICcuLi4gICAnLFxuICAgIF0sIGRlZmF1bHRzLmNoYXJzX21hcClcblxuICAgIHRoaXMudXBkYXRlKClcblxuICAgIHRoaXMuX3Nwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLl9jYW52YXNUZXh0dXJlLnRleHR1cmUpXG5cbiAgICB0aGlzLmZyYW1lID0gdGhpcy5fZGVmYXVsdF9mcmFtZVxuXG4gICAgdGhpcy5fbW91c2VMYXllci5hZGRDaGlsZCh0aGlzLl9zcHJpdGUpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgbGV0IHN0YWdlID0gdGhpcy5fbWFpbi5zdGFnZVxuICAgIGlmIChzdGFnZSkge1xuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlRG93bilcbiAgICAgIHN0YWdlLm9mZigncmlnaHRkb3duJywgdGhpcy5fb25Nb3VzZURvd24pXG4gICAgICBzdGFnZS5vZmYoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vbk1vdXNlRG93bilcblxuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSlcblxuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub2ZmKCd0b3VjaGVuZCcsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9mZignbW91c2V1cG91dHNpZGUnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgICBzdGFnZS5vZmYoJ3RvdWNoZW5kb3V0c2lkZScsIHRoaXMuX29uTW91c2VVcClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc3ByaXRlKSB7XG4gICAgICB0aGlzLl9zcHJpdGUuZGVzdHJveSgpXG4gICAgICB0aGlzLl9zcHJpdGUgPSBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5tb3VzZUxheWVyLnJlbW92ZUNoaWxkcmVuKClcblxuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUuZGVzdHJveSgpXG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxuXG4gIGdldCBtb3VzZUxheWVyICgpIHsgcmV0dXJuIHRoaXMuX21vdXNlTGF5ZXIgfVxuICBnZXQgc3ByaXRlICgpIHsgcmV0dXJuIHRoaXMuX3Nwcml0ZSB9XG5cbiAgZ2V0IGNhbnZhc1RleHR1cmUgKCkgeyByZXR1cm4gdGhpcy5fY2FudmFzVGV4dHVyZSB9XG5cbiAgZnJhbWVSZWN0IChmcmFtZSkge1xuICAgIGNvbnN0IHcgPSB0aGlzLl93aWR0aFxuICAgIGNvbnN0IGggPSB0aGlzLl9oZWlnaHRcbiAgICByZXR1cm4gbmV3IFBJWEkuUmVjdGFuZ2xlKGZyYW1lICogdywgMCwgZnJhbWUgKiB3ICsgdywgaClcbiAgfVxuXG4gIGdldCB4ICgpIHsgcmV0dXJuIHRoaXMuX3ggfVxuICBzZXQgeCAodmFsdWUpIHtcbiAgICB0aGlzLl94ID0gdmFsdWVcbiAgICB0aGlzLl9zcHJpdGUueCA9IHZhbHVlXG4gIH1cblxuICBnZXQgeSAoKSB7IHJldHVybiB0aGlzLl95IH1cbiAgc2V0IHkgKHZhbHVlKSB7XG4gICAgdGhpcy5feSA9IHZhbHVlXG4gICAgdGhpcy5fc3ByaXRlLnkgPSB2YWx1ZVxuICB9XG5cbiAgZ2V0IGZyYW1lICgpIHsgcmV0dXJuIHRoaXMuX2ZyYW1lIH1cbiAgc2V0IGZyYW1lICh2YWx1ZSkge1xuICAgIHRoaXMuX2ZyYW1lID0gdmFsdWVcbiAgICB0aGlzLl9zcHJpdGUudGV4dHVyZSA9IG5ldyBQSVhJLlRleHR1cmUodGhpcy5fY2FudmFzVGV4dHVyZS50ZXh0dXJlLCB0aGlzLmZyYW1lUmVjdCh0aGlzLl9mcmFtZSkpXG4gIH1cblxuICBnZXQgYnRucyAoKSB7IHJldHVybiB0aGlzLl9idG5zIH1cbiAgc2V0IGJ0bnMgKHZhbHVlKSB7XG4gICAgdGhpcy5fYnRucyA9IHZhbHVlXG4gIH1cblxuICBnZXQgZGJsQ2xpY2tEZWxheSAoKSB7IHJldHVybiB0aGlzLl9kYmxDbGlja0RlbGF5IH1cblxuICBnZXQgZGJsQ2xpY2tEaXN0YW5jZSAoKSB7IHJldHVybiB0aGlzLl9kYmxDbGlja0Rpc3RhbmNlIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUudXBkYXRlVGV4dHVyZSh0aGlzLl9kYXRhLCB0aGlzLnJhaW5ib3cpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGdldEV2ZW50SW5mbyAoZSkge1xuICAgIGxldCByZW5kZXJlciA9IHRoaXMuX21haW4ucmVuZGVyZXJcblxuICAgIGxldCBzaXplID0gbmV3IFBJWEkuUG9pbnQocmVuZGVyZXIud2lkdGggLSB0aGlzLl93aWR0aCwgcmVuZGVyZXIuaGVpZ2h0IC0gdGhpcy5faGVpZ2h0KVxuXG4gICAgbGV0IGd4ID0gZS5kYXRhLmdsb2JhbC54IC0gdGhpcy5ndWlkZW8uc2NyZWVuU3ByaXRlLnhcbiAgICBsZXQgZ3kgPSBlLmRhdGEuZ2xvYmFsLnkgLSB0aGlzLmd1aWRlby5zY3JlZW5TcHJpdGUueVxuXG4gICAgbGV0IHggPSBNYXRoLnRydW5jKE1hdGgubWluKHNpemUueCwgTWF0aC5tYXgoMCwgZ3gpKSAvIHRoaXMuZ3VpZGVvLnNjYWxlKVxuICAgIGxldCB5ID0gTWF0aC50cnVuYyhNYXRoLm1pbihzaXplLnksIE1hdGgubWF4KDAsIGd5KSkgLyB0aGlzLmd1aWRlby5zY2FsZSlcblxuICAgIHJldHVybiB7IHgsIHksIGJ1dHRvbjogZS5kYXRhLm9yaWdpbmFsRXZlbnQuYnV0dG9uIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duIChlKSB7XG4gICAgbGV0IHsgeCwgeSwgYnV0dG9uIH0gPSB0aGlzLmdldEV2ZW50SW5mbyhlKVxuXG4gICAgc3dpdGNoIChidXR0b24pIHtcbiAgICAgIGNhc2UgMDogLy8gbGVmdFxuICAgICAgICB0aGlzLl9idG5zIHw9IDB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAxOiAvLyBtaWRkbGVcbiAgICAgICAgdGhpcy5fYnRucyB8PSAweDAyXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgMjogLy8gcmlnaHRcbiAgICAgICAgdGhpcy5fYnRucyB8PSAweDA0XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdtb3VzZS5kb3duJywgeyB4LCB5LCBidXR0b24gfSlcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuXG4gIG9uTW91c2VNb3ZlIChlKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmd1aWRlby53aWR0aFxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ3VpZGVvLmhlaWdodFxuXG4gICAgbGV0IHsgeCwgeSwgYnV0dG9uIH0gPSB0aGlzLmdldEV2ZW50SW5mbyhlKVxuXG4gICAgdGhpcy54ID0gTWF0aC5taW4oeCwgd2lkdGggLSB0aGlzLl93aWR0aClcbiAgICB0aGlzLnkgPSBNYXRoLm1pbih5LCBoZWlnaHQgLSB0aGlzLl9oZWlnaHQpXG5cbiAgICB0aGlzLmVtaXQoJ21vdXNlLm1vdmUnLCB7IHgsIHksIGJ1dHRvbiB9KVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG5cbiAgb25Nb3VzZVVwIChlKSB7XG4gICAgbGV0IHsgeCwgeSwgYnV0dG9uIH0gPSB0aGlzLmdldEV2ZW50SW5mbyhlKVxuXG4gICAgc3dpdGNoIChidXR0b24pIHtcbiAgICAgIGNhc2UgMDogLy8gbGVmdFxuICAgICAgICB0aGlzLl9idG5zICY9IH4weDAxXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgMTogLy8gbWlkZGxlXG4gICAgICAgIHRoaXMuX2J0bnMgJj0gfjB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAyOiAvLyByaWdodFxuICAgICAgICB0aGlzLl9idG5zICY9IH4weDA0XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdtb3VzZS51cCcsIHsgeCwgeSwgYnV0dG9uIH0pXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL21pY2tleS5qcyJdLCJzb3VyY2VSb290IjoiIn0=