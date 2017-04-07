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
	    key: 'from_2d_array',
	    value: function from_2d_array(addr, frame, count, width, arr) {
	      var h = arr.length;
	      var fullWidth = width * count;
	      var offset = frame * width;
	
	      for (var y = 0; y < h; y++) {
	        var ti = addr + y * fullWidth + offset;
	        if (_.isArray(arr[y])) {
	          this.from_array_mask(ti, arr[y]);
	        } else {
	          this.from_string(ti, arr[y]);
	        }
	      }
	    }
	  }, {
	    key: 'from_array_mask',
	    value: function from_array_mask(addr, arr) {
	      var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	      var h = arr.length;
	
	      var ti = addr;
	      for (var y = 0; y < h; y++) {
	        if (_.isArray(arr[y])) {
	          ti = this.from_array_mask(ti, arr[y], mask);
	        } else {
	          ti = this.from_string_mask(ti, arr[y], mask);
	        }
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
	
	      return this;
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
	
	      return this;
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
	
	      return this;
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
	
	      this.memory.from_array_mask(this._top + 33 * this._cell_size, [['      ', '   w  ', '   w  ', '   w  ', '      ', '   w  ', '      '], ['      ', '  w w ', '  w w ', '      ', '      ', '      ', '      '], ['      ', '  ww  ', ' wwww ', '  ww  ', ' wwww ', '  ww  ', '      '], ['      ', '  www ', ' www  ', '  w w ', ' www  ', '  w   ', '      '], ['      ', ' w  w ', '   w  ', '  w   ', ' w  w ', '      ', '      '], ['      ', '  w   ', ' w w  ', ' www w', ' w  w ', '  ww w', '      '], ['      ', '  w   ', '  w   ', '      ', '      ', '      ', '      '], ['      ', '   w  ', '  w   ', '  w   ', '  w   ', '   w  ', '      '], ['      ', '  w   ', '   w  ', '   w  ', '   w  ', '  w   ', '      '], ['      ', ' w w  ', '  w   ', ' www  ', '  w   ', ' w w  ', '      '], ['      ', '      ', '  w   ', ' www  ', '  w   ', '      ', '      '], ['      ', '      ', '      ', '      ', '  w   ', ' w    ', '      '], ['      ', '      ', '      ', ' www  ', '      ', '      ', '      '], ['      ', '      ', '      ', '      ', '      ', '  w   ', '      '], ['      ', '    w ', '   w  ', '  w   ', ' w    ', '      ', '      '], ['      ', ' wwww ', ' w  w ', ' w  w ', ' w  w ', ' wwww ', '      '], ['      ', '   w  ', '  ww  ', '   w  ', '   w  ', '   w  ', '      '], ['      ', ' www  ', '    w ', '  ww  ', ' w    ', ' wwww ', '      '], ['      ', ' www  ', '    w ', '  ww  ', '    w ', ' www  ', '      '], ['      ', ' w  w ', ' w  w ', ' wwww ', '    w ', '    w ', '      '], ['      ', ' wwww ', ' w    ', ' www  ', '    w ', ' www  ', '      '], ['      ', '  www ', ' w    ', ' www  ', ' w  w ', '  ww  ', '      '], ['      ', ' wwww ', '    w ', '   w  ', '   w  ', '  w   ', '      '], ['      ', '  ww  ', ' w  w ', '  ww  ', ' w  w ', '  ww  ', '      '], ['      ', ' wwww ', ' w  w ', ' wwww ', '    w ', ' wwww ', '      '], ['      ', '      ', '  w   ', '      ', '  w   ', '      ', '      '], ['      ', '      ', '  w   ', '      ', '  w   ', ' w    ', '      '], ['      ', '   w  ', '  w   ', ' w    ', '  w   ', '   w  ', '      '], ['      ', '      ', ' www  ', '      ', ' www  ', '      ', '      '], ['      ', ' w    ', '  w   ', '   w  ', '  w   ', ' w    ', '      '], ['      ', ' ww   ', '   w  ', '  w   ', '      ', '  w   ', '      '], ['      ', '  ww  ', ' w ww ', ' w ww ', ' w    ', '  www ', '      '], ['      ', '  ww  ', ' w  w ', ' wwww ', ' w  w ', ' w  w ', '      '], ['      ', ' www  ', ' w  w ', ' www  ', ' w  w ', ' www  ', '      '], ['      ', '  www ', ' w    ', ' w    ', ' w    ', '  www ', '      '], ['      ', ' www  ', ' w  w ', ' w  w ', ' w  w ', ' www  ', '      '], ['      ', ' wwww ', ' w    ', ' www  ', ' w    ', ' wwww ', '      '], ['      ', ' wwww ', ' w    ', ' www  ', ' w    ', ' w    ', '      '], ['      ', '  ww  ', ' w  w ', ' w    ', ' w ww ', '  ww  ', '      '], ['      ', ' w  w ', ' w  w ', ' wwww ', ' w  w ', ' w  w ', '      '], ['      ', ' www  ', '  w   ', '  w   ', '  w   ', ' www  ', '      '], ['      ', '  www ', '   w  ', '   w  ', ' w w  ', '  w   ', '      '], ['      ', ' w  w ', ' w w  ', ' ww   ', ' w w  ', ' w  w ', '      '], ['      ', ' w    ', ' w    ', ' w    ', ' w    ', ' wwww ', '      '], ['      ', ' w   w', ' wwwww', ' w w w', ' w   w', ' w   w', '      '], ['      ', ' w   w', ' ww  w', ' w w w', ' w  ww', ' w   w', '      '], ['      ', '  ww  ', ' w  w ', ' w  w ', ' w  w ', '  ww  ', '      '], ['      ', ' www  ', ' w  w ', ' www  ', ' w    ', ' w    ', '      '], ['      ', '  ww  ', ' w  w ', ' w  w ', ' w  w ', '  ww  ', '   w  '], ['      ', ' www  ', ' w  w ', ' www  ', ' w  w ', ' w  w ', '      '], ['      ', '  www ', ' w    ', '  ww  ', '    w ', ' www  ', '      '], ['      ', ' wwwww', '   w  ', '   w  ', '   w  ', '   w  ', '      '], ['      ', ' w  w ', ' w  w ', ' w  w ', ' w  w ', '  ww  ', '      '], ['      ', ' w   w', ' w   w', ' w   w', '  w w ', '   w  ', '      '], ['      ', ' w   w', ' w   w', ' w   w', ' w w w', ' ww ww', '      '], ['      ', ' w   w', '  w w ', '   w  ', '  w w ', ' w   w', '      '], ['      ', ' w   w', '  w w ', '   w  ', '   w  ', '   w  ', '      '], ['      ', ' wwww ', '    w ', '  ww  ', ' w    ', ' wwww ', '      '], ['      ', ' www  ', ' w    ', ' w    ', ' w    ', ' www  ', '      '], ['      ', ' w    ', '  w   ', '   w  ', '    w ', '      ', '      '], ['      ', '  www ', '    w ', '    w ', '    w ', '  www ', '      '], ['      ', '  w   ', ' w w  ', '      ', '      ', '      ', '      '], ['      ', '      ', '      ', '      ', '      ', ' wwww ', '      '], ['      ', '  w   ', '   w  ', '      ', '      ', '      ', '      '], ['      ', '  ww  ', '    w ', '  www ', ' w  w ', '  ww  ', '      '], ['      ', ' w    ', ' www  ', ' w  w ', ' w  w ', ' www  ', '      '], ['      ', '      ', '  www ', ' w    ', ' w    ', '  www ', '      '], ['      ', '    w ', '  www ', ' w  w ', ' w  w ', '  www ', '      '], ['      ', '  ww  ', ' w  w ', ' wwww ', ' w    ', '  www ', '      '], ['      ', '  ww  ', ' w  w ', 'www   ', ' w    ', ' w    ', '      '], ['      ', '  ww  ', ' w  w ', '  www ', '    w ', ' www  ', '      '], ['      ', ' w    ', ' w    ', ' www  ', ' w  w ', ' w  w ', '      '], ['      ', '  w   ', '      ', '  w   ', '  w   ', '  w   ', '      '], ['      ', '    w ', '      ', '    w ', ' w  w ', '  ww  ', '      '], ['      ', '    w ', ' w w  ', ' ww   ', ' w w  ', ' w  w ', '      '], ['      ', '   w  ', '   w  ', '   w  ', '   w  ', '   w  ', '      '], ['      ', '      ', '  w w ', ' w w w', ' w   w', ' w   w', '      '], ['      ', '      ', ' www  ', ' w  w ', ' w  w ', ' w  w ', '      '], ['      ', '      ', '  ww  ', ' w  w ', ' w  w ', '  ww  ', '      '], ['      ', '      ', '  ww  ', ' w  w ', ' www  ', ' w    ', '      '], ['      ', '      ', '  ww  ', ' w  w ', '  www ', '    w ', '      '], ['      ', '      ', '  ww  ', ' w  w ', ' w    ', ' w    ', '      '], ['      ', '  ww  ', ' w    ', '  w   ', '   w  ', ' ww   ', '      '], ['      ', '  w   ', ' www  ', '  w   ', '  w w ', '   w  ', '      '], ['      ', '      ', ' w  w ', ' w  w ', ' w  w ', '  ww  ', '      '], ['      ', '      ', ' w  w ', ' w w  ', ' ww   ', ' w    ', '      '], ['      ', '      ', ' w   w', ' w   w', ' w w w', '  w w ', '      '], ['      ', '      ', '  w w ', '   w  ', '   w  ', '  w w ', '      '], ['      ', '      ', ' w  w ', '  www ', '    w ', ' www  ', '      '], ['      ', '      ', ' wwww ', '   w  ', '  w   ', ' wwww ', '      '], ['      ', '   ww ', '  w   ', ' ww   ', '  w   ', '   ww ', '      '], ['      ', '  w   ', '  w   ', '  w   ', '  w   ', '  w   ', '      '], ['      ', ' ww   ', '   w  ', '   ww ', '   w  ', ' ww   ', '      '], ['      ', '      ', '    w ', '  ww  ', ' w    ', '      ', '      ']], _globals.defaults.chars_map);
	
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
	      // this.draw(40, 40, 65, 10, 3)
	      // this.draw(47, 40, 66, 12, 15)
	      // this.draw(54, 40, 33, 5, 8)
	
	      var cw = this._width;
	      var ch = this._height;
	
	      var xx = 0;
	      var y = 4 * ch;
	      for (var x = 33; x < 73; x++) {
	        this.draw(xx * cw, y, x, _.random(2, 15), 1);
	        xx++;
	      }
	
	      xx = 0;
	      y = 5 * ch;
	      for (var _x3 = 73; _x3 < 113; _x3++) {
	        this.draw(xx * cw, y, _x3, _.random(2, 15), 1);
	        xx++;
	      }
	
	      xx = 0;
	      y = 6 * ch;
	      for (var _x4 = 113; _x4 < 126; _x4++) {
	        this.draw(xx * cw, y, _x4, _.random(2, 15), 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTQ2M2ZiZDE1ZjBhM2VkYjFiYWQiLCJ3ZWJwYWNrOi8vLy4vYXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGl4aS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYi1hdWRpby1kYXdcIiIsIndlYnBhY2s6Ly8vLi9hcHAvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJhZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBlcmZvcm1hbmNlLW5vd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1peHdpdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuZGVyc2NvcmUtcGx1c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9hcHAvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS9tYWluLmNzcz9mNDgyIiwid2VicGFjazovLy8uL3N0eWxlL21haW4uY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9sZXhlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL3R5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvYXNzaWducy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2RlbGltaXRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2dyb3Vwcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2xpdGVyYWxzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvb3BlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL3Jlc2VydmVkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy9pbmNsdWRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2tleV9saXRlcmFsLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvc3RhdGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2lkLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvYXNzaWduLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvcmV0dXJuLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9jb25kaXRpb25zLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvdmFyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvbG9vcHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZXhwcmVzc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZGljdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9mbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9pZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdHJhbnNwaWxlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3N0YXRlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9leHByZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3ByaW1pdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9vcGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9pZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NsYXNzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZm4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2RpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL21lbW9yeS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZXh5XCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL21lbW9yeW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJldHR5LWJ5dGVzXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL3N0YWNrLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9pbnRlcnJ1cHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL2d1aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvcmFpbmJvdy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvY2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvZm9uem8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL29yd2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvYmVhZ2xlLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy92aW9sZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NhbnZhc3RleHR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL292ZXJsYXlzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWdzL2NydC5wbmc/M2U4MiIsIndlYnBhY2s6Ly8vXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1ncy9jcnQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWdzL3Rlc3QucG5nIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL21pY2tleS5qcyJdLCJuYW1lcyI6WyJfU1RPUFBFRCIsIl9SVU5OSU5HIiwiX1BBVVNFRCIsIk1haW4iLCJvcHRpb25zIiwicmVzZXQiLCJfdXBkYXRlcyIsInF1ZXVlIiwiYWRkIiwibyIsIl8iLCJnZXQiLCJfX2luVXBkYXRlcyIsInB1c2giLCJyZW1vdmUiLCJyZWplY3QiLCJvYmplY3QiLCJiIiwiQXJyYXlCdWZmZXIiLCJhIiwiVWludDMyQXJyYXkiLCJjIiwiVWludDhBcnJheSIsIkxFIiwiX21lbW9yeSIsIl9tZW1vcnlNYW5hZ2VyIiwiX3N0YWNrIiwiX2ludGVycnVwdHMiLCJfZ3VpZGVvIiwiY3JlYXRlQ2hpcHMiLCJfa2VuIiwiX21pY2tleSIsIl9vblJlc2l6ZSIsIm9uUmVzaXplIiwiYmluZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aGF0IiwiUElYSSIsInRpY2tlciIsInNoYXJlZCIsInN0YXR1cyIsInRpY2siLCJwZXJmb3JtYW5jZSIsIm5vdyIsImRlbHRhIiwicSIsImNiIiwiYXJncyIsInN0YXJ0IiwiZGVzdHJveSIsIl9zdGF0dXMiLCJfcHJvZ3JhbSIsInBhdGgiLCJ1bmRlZmluZWQiLCJjb2RlIiwiZm4iLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwiZW1pdCIsInN0b3AiLCJ0IiwidG9rZW5zIiwicnVuIiwiY29uc29sZSIsImxvZyIsInAiLCJub2RlcyIsImVycm9ycyIsIkZ1bmN0aW9uIiwiYXBwbHkiLCJ0ZXN0IiwidmFsdWUiLCJfc3RhZ2UiLCJfcmVuZGVyZXIiLCJtYWluIiwiYXBwIiwiZWxlY3Ryb24iLCJyZXF1aXJlIiwicmVtb3RlIiwic2NyZWVuIiwiZGlhbG9nIiwiQnJvd3NlcldpbmRvdyIsImV4dGVuZCIsInRlbXBsYXRlU2V0dGluZ3MiLCJpbnRlcnBvbGF0ZSIsImZzIiwiTWl4aW4iLCJtaXgiLCJ1c2VyUGF0aCIsImpvaW4iLCJnZXRBcHBQYXRoIiwiZXhpc3RzU3luYyIsIm1rZGlycyIsIklTX1dJTiIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsIklTX09TWCIsIklTX0xJTlVYIiwiZGlycyIsImJ1aWxkIiwiX19kaXJuYW1lIiwiY3dkIiwiaG9tZSIsImdldFBhdGgiLCJ1c2VyIiwidG1wIiwicm9vdCIsIm5vZGVfbW9kdWxlcyIsInVzZXJfcGtnIiwiZ2V0TmFtZSIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwib3BlbkZpbGUiLCJzaG93T3BlbkRpYWxvZyIsImVyciIsImVycm9yIiwic2F2ZUZpbGUiLCJzaG93U2F2ZURpYWxvZyIsIm1lc3NhZ2VCb3giLCJzaG93TWVzc2FnZUJveCIsIm1hcF9nZXR0ZXJzIiwic291cmNlIiwidGFyZ2V0IiwiZGVmcyIsImsiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNhbGwiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwibWFwX2dldHRlcnNfcmV0dXJuX3RoaXMiLCJkZWxheSIsIm1zIiwiYXN5bmMiLCJjb250ZXh0IiwiaXNOdW1iZXIiLCJpc0FycmF5Iiwic2V0VGltZW91dCIsImJ1ZmZlcl90b19zdHJpbmciLCJsZW4iLCJsZW5ndGgiLCJpIiwicyIsInRvU3RyaW5nIiwic3RyaW5nX3RvX2J1ZmZlciIsInN0ciIsIkJ1ZmZlciIsIk1hdGgiLCJ0cnVuYyIsIngiLCJoZXgiLCJzdWJzdHIiLCJwYXJzZUludCIsInN0cmluZ19idWZmZXIiLCJ3cml0ZSIsIm5vcm1hbGl6ZU1lc3NhZ2VzIiwibWVzc2FnZSIsIm0iLCJpc1N0cmluZyIsInNpemUiLCJwYWRTdGFydCIsImJ1ZmZlcl9kdW1wIiwiYnVmZmVyIiwid2lkdGgiLCJjYXBzIiwiaW5kZW50IiwicmVwZWF0IiwiemVybyIsIm4iLCJtYXgiLCJ0b1VwcGVyQ2FzZSIsIm1pbiIsImJ5dGVMZW5ndGgiLCJyb3dzIiwiY2VpbCIsImxhc3QiLCJvZmZzZXRMZW5ndGgiLCJhcnIiLCJsYXN0Qnl0ZXMiLCJsYXN0U3BhY2VzIiwiaiIsInYiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJ1dG9hIiwiYnRvYSIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYXRvdSIsImRlY29kZVVSSUNvbXBvbmVudCIsImVzY2FwZSIsImF0b2IiLCJpbnN0YW5jZUZ1bmN0aW9uIiwiZm9yY2UiLCJoYXNPd25Qcm9wZXJ0eSIsIndyaXRhYmxlIiwiaW5zdGFuY2VGdW5jdGlvbnMiLCJuYW1lcyIsInJhZiIsIlBvaW50IiwicHJvdG90eXBlIiwiZGlzdGFuY2UiLCJzcXJ0IiwieSIsInRlbXBsYXRlIiwiUmVjdGFuZ2xlIiwiZGVmYXVsdHMiLCJib3VuZHNjaGVjayIsInR5cGUiLCJtZW1vcnkiLCJtZW1vcnlfbWFuYWdlciIsImNvbGxlY3RfZGVsYXkiLCJib3JkZXIiLCJjb2xvciIsImd1aWRlbyIsImhlaWdodCIsInNjYWxlIiwicmFpbmJvdyIsImNvdW50IiwiZGF0YV9mb3JtYXQiLCJmb256byIsIm9yd2VsbCIsImJlYWdsZSIsImJsaW5rcmF0ZSIsInZpb2xldCIsImtlbiIsIm1pY2tleSIsImZyYW1lIiwiZGJsQ2xpY2tEZWxheSIsImRibENsaWNrRGlzdGFuY2UiLCJuZXR3b3JrIiwiYWx0byIsImNoYXJzX21hcCIsInIiLCJnIiwiRSIsImUiLCJSIiwiRyIsIlkiLCJCIiwiUCIsIkMiLCJ3IiwibXNnIiwicm93IiwiY29sIiwicnVudGltZV9lcnJvciIsImlvX2Vycm9yIiwiRXZlbnQiLCJkYXRhIiwiYnViYmxlcyIsIl9fZXZlbnRPYmplY3QiLCJ0aW1lU3RhbXAiLCJzdG9wcGVkIiwic3RvcHBlZEltbWVkaWF0ZSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJFbWl0dGVyIiwib3JkZXIiLCJfbGlzdGVuZXJzIiwic29ydEJ5Iiwib25jZUhhbmRsZXJXcmFwcGVyIiwib2ZmIiwiX29yaWdpbmFsSGFuZGxlciIsIm9uIiwibGlzdCIsInNwbGljZSIsImlzRW1wdHkiLCJvcmlnRXZlbnREYXRhIiwibGlzdGVuZXJzIiwiY2xvbmUiLCJsIiwiY2FuY2VsQnViYmxlIiwicGFyZW50IiwiVG9rZW4iLCJsZXhlciIsImVuZCIsIl90eXBlIiwiX3Jlc2VydmVkIiwib2Zmc2V0IiwibGluZSIsImNvbHVtbiIsInBhcnRzIiwic3BsaXQiLCJpcyIsImlzUmVnRXhwIiwibWF0Y2giLCJiYXNlbmFtZSIsIkVtcHR5Q2xhc3MiLCJMZXhlciIsInRleHQiLCJjb25zdGFudHMiLCJ2YWxpZE9mZnNldCIsImNoYXJBdCIsInN1YnN0cmluZyIsInBvc19pbmZvIiwidG9rZW4iLCJpbmRleE9mIiwiY2hhcl9hdCIsIm5leHRfaXNfc3BhY2UiLCJvbGRfb2Zmc2V0IiwidG9rZW5fdHlwZXMiLCJzdWJ0ZXh0IiwiaW5kZXgiLCJzbGljZSIsImluc2VydFRva2VuIiwicGVlayIsImNvbnN0X3Rva2VuIiwiaW5jbHVkZV90b2tlbiIsIm5leHQiLCJpbmZvIiwid2l0aCIsIl90b2tlbl90eXBlcyIsInN1cGVyY2xhc3MiLCJhc3NpZ24iLCJtYXRoX2Fzc2lnbiIsImxvZ2ljX2Fzc2lnbiIsImZuX2Fzc2lnbiIsImVvbCIsImNvbW1hIiwiY29sb24iLCJjb21tZW50Iiwib3Blbl9wYXJlbiIsImNsb3NlX3BhcmVuIiwib3Blbl9icmFja2V0IiwiY2xvc2VfYnJhY2tldCIsIm9wZW5fY3VybHkiLCJjbG9zZV9jdXJseSIsImtleSIsImlkIiwiaWRfZmllbGQiLCJ0aGlzIiwidGhpc19maWVsZCIsInN5bWJvbCIsIm1hdGgiLCJsb2dpYyIsImNvbXAiLCJudW1iZXIiLCJzdHJpbmciLCJjaGFyIiwiaW5jbHVkZSIsImNvbnN0IiwicmVzZXJ2ZWQiLCJleHRuYW1lIiwicG4iLCJzdGF0U3luYyIsInNyYyIsInJlYWRGaWxlU3luYyIsImx4IiwiY29uY2F0IiwiTm9kZSIsInBhcnNlciIsIl9pbl9jbGFzcyIsIl9mbl9sZXZlbCIsInRva2VuX3Byb3AiLCJQYXJzZXIiLCJmcmFtZXMiLCJwcmV2X2ZyYW1lIiwiaW5fY2xhc3MiLCJmbl9sZXZlbCIsImVvcyIsIm1hdGNoZXMiLCJ0b2tlbl9hdCIsImVuZF9uZXh0Iiwic2tpcCIsImV4cGVjdCIsImxlZnQiLCJyaWdodCIsImV4cHIiLCJub2RlIiwic3RhdGVtZW50cyIsIkZyYW1lIiwiRnJhbWVzIiwiRnJhbWVJdGVtIiwiY3VycmVudCIsIml0ZW1fdHlwZSIsImV4aXN0cyIsImlzX2xvY2FsIiwiaXNfZ2xvYmFsIiwiaXRlbXMiLCJfZ2xvYmFsIiwiZmluZCIsImJsb2NrX3R5cGUiLCJsb29wX3doaWxlIiwic3RhdGVtZW50IiwiYmxvY2siLCJ2YXJfc3RhdGVtZW50IiwiYXNzaWduX3N0YXRlbWVudCIsImlmX3N0YXRlbWVudCIsImZvcl9zdGF0ZW1lbnQiLCJ3aGlsZV9zdGF0ZW1lbnQiLCJyZXR1cm5fc3RhdGVtZW50Iiwic2luZ2xlX3N0YXRlbWVudCIsImNsYXNzX3N0YXRlbWVudCIsImlkX3N0YXRlbWVudCIsImZpcnN0Iiwic3VwZXJfZXhwciIsImlkX2V4cHIiLCJmbl9leHByIiwiX2ZuIiwiZXhwcnMiLCJzaW5nbGUiLCJfZXh0ZW5kcyIsImNsYXNzX2xpc3QiLCJib2R5IiwiZXhwZWN0X2VuZCIsImV4cHJfYmxvY2siLCJ0cnVlX2JvZHkiLCJmYWxzZV9ib2R5IiwiZWxzZV9zdGF0ZW1lbnQiLCJfbGV0IiwibWluX2V4cHIiLCJtYXhfZXhwciIsInN0ZXBfZXhwciIsInNpbXBsZV9leHByIiwidGVybSIsInRlcm1fZXhwciIsImZhY3RvciIsImZhY3Rvcl9leHByIiwiY29uZGl0aW9uYWwiLCJjb25kaXRpb25hbF9leHByIiwianVuY3Rpb24iLCJqdW5jdGlvbl9leHByIiwibmV4dF9leHByX25vZGUiLCJzdWJfZXhwciIsImFycmF5X2V4cHIiLCJkaWN0X2V4cHIiLCJ0aGlzX2V4cHIiLCJuZXdfZXhwciIsImRlZiIsImtleV9saXRlcmFsIiwiZm5fYXJnc19kZWYiLCJmbl9hcmciLCJmaWVsZHMiLCJfZmllbGQiLCJUcmFuc3BpbGVyIiwibm9kZV9hdCIsInZhbHVlcyIsImxpbmVzIiwiaW5kZW50X2xldmVsIiwiZW5kc1dpdGgiLCJyZXBsYWNlIiwiY29kZV9zdGFydCIsIndyaXRlbG4iLCJjb2RlX2VuZCIsImQiLCJub2RlX3RlbXBsYXRlIiwiZm5fY2FsbF90ZW1wbGF0ZSIsImZuX2Fzc2lnbl90ZW1wbGF0ZSIsImFycmF5X3RlbXBsYXRlIiwiZGljdF90ZW1wbGF0ZSIsIm9wZXJhdG9yX3RlbXBsYXRlIiwidGhpc190ZW1wbGF0ZSIsIm5ld190ZW1wbGF0ZSIsInN0cmluZ190ZW1wbGF0ZSIsImlkX3RlbXBsYXRlIiwidmFsdWVfdGVtcGxhdGUiLCJsbiIsInN0YXRlbWVudF90ZW1wbGF0ZSIsImZuX2NhbGwiLCJ0bXBsIiwiZGF0Iiwid29yZCIsInNlcGFyYXRvciIsIm9wIiwiZXhwcl90ZW1wbGF0ZSIsImZpZWxkIiwiZG90IiwiYmxvY2tfdGVtcGxhdGUiLCJmbl9kZWYiLCJtYXAiLCJmIiwiZGF0YV90eXBlX3NpemVzIiwiaTgiLCJzOCIsImkxNiIsInMxNiIsImkzMiIsInMzMiIsImYzMiIsImRhdGFfdHlwZV9mbnMiLCJkYXRhX3R5cGVfc2l6ZSIsIk1lbW9yeSIsIl9zaXplIiwiX3RvcCIsIl9ib3R0b20iLCJfYnVmZmVyIiwiX2RhdGEiLCJfdmlldyIsIkRhdGFWaWV3IiwiY2xlYXIiLCJmaWxsIiwiYWRkciIsInN6IiwiaGx0IiwiY2hrX2JvdW5kcyIsImRiIiwiX3ZtIiwibGl0dGxlRW5kaWFuIiwibGQiLCJzdCIsImxkbCIsImJvdHRvbSIsIm1lbSIsImxkcyIsInNldCIsInN1YmFycmF5Iiwic3RsIiwiY2hhckNvZGVBdCIsInN0cyIsInRvcCIsInRndCIsImNvcHlXaXRoaW4iLCJjb3B5IiwidGkiLCJtYXNrIiwiaCIsImZyb21fc3RyaW5nIiwiZnVsbFdpZHRoIiwiZnJvbV9hcnJheV9tYXNrIiwiZnJvbV9zdHJpbmdfbWFzayIsInRvX3N0cmluZyIsInRvX3N0cmluZ19tYXNrIiwiaGV4eSIsIl9tYWluIiwiTWVtb3J5TWFuYWdlciIsIl9jb2xsZWN0X2RlbGF5IiwiX2Jsb2NrcyIsIl9sYXN0IiwiY29sbGVjdCIsInVzZWQiLCJvYiIsImF2YWlsX21lbSIsIl9hbGxvYyIsInVzZWRfbWVtIiwiZnJlZV9tZW0iLCJtZW1fYnVmZmVyIiwiU3RhY2tFbnRyeSIsInN0YWNrIiwicm9sbGluZyIsIl9tYXgiLCJfcm9sbGluZyIsIl9wdHIiLCJyZWFkIiwidG90YWxfc2l6ZSIsIlN0YWNrIiwiX2xpc3QiLCJhcmd1bWVudHMiLCJwb3AiLCJfSU5UX1JVTk5JTkciLCJfSU5UX1BBVVNFRCIsIkludGVycnVwdCIsInN0b3BfYWxsIiwiR3VpZGVvIiwiaW5pdCIsImJvcmRlclNpemUiLCJhdXRvRGV0ZWN0UmVuZGVyZXIiLCJfd2lkdGgiLCJfc2NhbGUiLCJfaGVpZ2h0IiwidmlldyIsInN0eWxlIiwicG9zaXRpb24iLCJjdXJzb3IiLCJkb2N1bWVudCIsImFwcGVuZENoaWxkIiwiQ29udGFpbmVyIiwicmVzaXplIiwiX3JhaW5ib3ciLCJfZm9uem8iLCJfb3J3ZWxsIiwiX2JlYWdsZSIsIl92aW9sZXQiLCJfb3ZlcmxheXMiLCJzY2FubGluZXMiLCJzY2FubGluZSIsInJnYiIsIm5vaXNlcyIsImNydCIsIm1vbml0b3IiLCJfc2NyZWVuIiwiY2xlYXJSZWN0IiwiX2ltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsIl9waXhlbHMiLCJfZm9yY2VfcmVkcmF3IiwiX2ZvcmNlX2ZsaXAiLCJyZWRyYXciLCJ1cGRhdGVUZXh0dXJlIiwicmVuZGVyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY2VudGVyIiwidG9JbmRleCIsInNpIiwiYnkiLCJieCIsImZnIiwiYmciLCJsdyIsInVwZGF0ZSIsImZpbGVuYW1lIiwidGV4IiwiVGV4dHVyZSIsImZyb21JbWFnZSIsIlNDQUxFX01PREVTIiwiTkVBUkVTVCIsInBpeGVsIiwic3ByaXRlIiwic3ByaXRlc0xheWVyIiwibW91c2VMYXllciIsInRleHR1cmUiLCJjYW52YXNCdWZmZXIiLCJjYW52YXMiLCJ0MzIiLCJ0OCIsInJldmVyc2UiLCJSYWluYm93IiwiX0xFIiwicmdiYSIsIl9jb3VudCIsImN1cnJlbnRPZmZzZXQiLCJDaGlwIiwiX2RhdGFfZm9ybWF0IiwiX2NlbGxfc2l6ZSIsIl9kYXRhX3NpemUiLCJrZXlzIiwibm9kYXRhIiwiZGF0YV9zaXplIiwiY2VsbF9zaXplIiwiZmxpcCIsImZvcmNlX3JlZHJhdyIsImZvcmNlX2ZsaXAiLCJGb256byIsImJsaXRfbWFzayIsImN3IiwiY2giLCJ4eCIsImRyYXciLCJyYW5kb20iLCJPcndlbGwiLCJmbnQiLCJmdyIsImZoIiwiaWR4IiwicHkiLCJ0aWR4IiwiY3IiLCJicyIsInBvcyIsImRyYXdfY2hhciIsInB1dF9jaGFyIiwibW92ZV90byIsIm1vdmVfYnkiLCJzeSIsInR5Iiwic3giLCJ0eCIsImxzIiwiZHkiLCJCZWFnbGUiLCJfeCIsIl95IiwiX2JsaW5rX2hpZGRlbiIsIl9ibGlua3JhdGUiLCJibGluayIsIl92aXNpYmxlIiwiX2NvbG9yIiwicGkiLCJWaW9sZXQiLCJfY2FudmFzVGV4dHVyZSIsImNyZWF0ZSIsIl9zcHJpdGVzTGF5ZXIiLCJyZW1vdmVDaGlsZHJlbiIsImNoaWxkcmVuIiwiX25hbWUiLCJ6IiwiU3ByaXRlIiwiX3RleHR1cmUiLCJhZGRDaGlsZCIsInJlbW92ZUNoaWxkIiwiX19mcmFtZSIsImZyYW1lUmVjdCIsIkNhbnZhc1RleHR1cmUiLCJfY2FudmFzQnVmZmVyIiwiQ2FudmFzQnVmZmVyIiwiZnJvbUNhbnZhcyIsInNjYWxlTW9kZSIsIl9jb250ZXh0IiwiZ2V0Q29udGV4dCIsImFscGhhIiwiYW50aWFsaWFzIiwiX3Nwcml0ZSIsInBhbGV0dGUiLCJwaXhlbHMiLCJwdXRJbWFnZURhdGEiLCJPdmVybGF5Iiwib3ZlcmxheXMiLCJzdGFnZSIsInJlbmRlcmVyIiwiaW1hZ2VEYXRhIiwiQm9yZGVyT3ZlcmxheSIsIl9ncmFwaGljcyIsIkdyYXBoaWNzIiwiYmVnaW5GaWxsIiwiZHJhd1JlY3QiLCJlbmRGaWxsIiwiU2NyZWVuT3ZlcmxheSIsIl9tb3VzZUxheWVyIiwiX3BhbGV0dGUiLCJTY2FubGluZXNPdmVybGF5IiwiX2dhcCIsIl9hbHBoYSIsIlNjYW5saW5lT3ZlcmxheSIsIl9yYXRlIiwiX3NwZWVkIiwiYWEiLCJOb2lzZXNPdmVybGF5IiwiX3JlZCIsIl9ncmVlbiIsIl9ibHVlIiwiX25vaXNlcyIsIm5vaXNlIiwidmlzaWJsZSIsIl9ub2lzZUtleXMiLCJSZ2JPdmVybGF5IiwiQ3J0T3ZlcmxheSIsIl9yYWRpdXMiLCJfaW5zaWRlX2FscGhhIiwiX291dHNpZGVfYWxwaGEiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJPdmVybGF5cyIsIl9jcmVhdGVPdmVybGF5IiwiY3R4IiwiQ2xzIiwiZGVmYXVsdHNEZWVwIiwiS2VuIiwiX29uS2V5ZG93biIsIm9uS2V5ZG93biIsIl9vbktleXVwIiwib25LZXl1cCIsIl9tb2RzIiwiX2pveXN0aWNrIiwiX2tleXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwia2V5Q29kZSIsIm1vZHMiLCJqb3lzdGljayIsInNoaWZ0IiwiY3RybCIsImFsdCIsIm1ldGEiLCJudW1wYWQiLCJidG4wIiwiYnRuMSIsImJ0bjIiLCJidG4zIiwiYnRuNCIsInVwIiwiZG93biIsImxvY2F0aW9uIiwiZXZlbnREZXRhaWxzIiwic3RvcFByb3BhZ2F0aW9uIiwiTWlja2V5IiwiX2RlZmF1bHRfZnJhbWUiLCJfZnJhbWUiLCJfZGVmYXVsdF9jb2xvciIsImludGVyYWN0aXZlIiwiX29uTW91c2VEb3duIiwib25Nb3VzZURvd24iLCJfb25Nb3VzZU1vdmUiLCJvbk1vdXNlTW92ZSIsIl9vbk1vdXNlVXAiLCJvbk1vdXNlVXAiLCJfc2NyZWVuU3ByaXRlIiwic2NyZWVuU3ByaXRlIiwiX2J0bnMiLCJmcm9tXzJkX2FycmF5X21hc2siLCJneCIsImdsb2JhbCIsImd5IiwiYnV0dG9uIiwib3JpZ2luYWxFdmVudCIsImdldEV2ZW50SW5mbyIsIl9kYmxDbGlja0RlbGF5IiwiX2RibENsaWNrRGlzdGFuY2UiXSwibWFw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aEI7QUFBRSxjQUFPLEtBQUt0QixjQUFaO0FBQTRCOzs7eUJBUTFDO0FBQUUsY0FBTyxLQUFLVCxFQUFaO0FBQWdCLE07dUJBQ3BCOWtCLEssRUFBTztBQUNaLFlBQUs4a0IsRUFBTCxHQUFVOWtCLEtBQVY7QUFDQSxZQUFLNm1CLE9BQUwsQ0FBYS9oQixDQUFiLEdBQWlCOUUsS0FBakI7QUFDRDs7O3lCQUVRO0FBQUUsY0FBTyxLQUFLK2tCLEVBQVo7QUFBZ0IsTTt1QkFDcEIva0IsSyxFQUFPO0FBQ1osWUFBSytrQixFQUFMLEdBQVUva0IsS0FBVjtBQUNBLFlBQUs2bUIsT0FBTCxDQUFhemUsQ0FBYixHQUFpQnBJLEtBQWpCO0FBQ0Q7Ozt5QkFFWTtBQUFFLGNBQU8sS0FBSzJyQixNQUFaO0FBQW9CLE07dUJBQ3hCM3JCLEssRUFBTztBQUNoQixZQUFLMnJCLE1BQUwsR0FBYzNyQixLQUFkO0FBQ0EsWUFBSzZtQixPQUFMLENBQWFqRixPQUFiLEdBQXVCLElBQUk5akIsS0FBS3NqQixPQUFULENBQWlCLEtBQUttRSxjQUFMLENBQW9CM0QsT0FBckMsRUFBOEMsS0FBS3VFLFNBQUwsQ0FBZSxLQUFLd0YsTUFBcEIsQ0FBOUMsQ0FBdkI7QUFDRDs7O3lCQUVXO0FBQUUsY0FBTyxLQUFLVyxLQUFaO0FBQW1CLE07dUJBQ3ZCdHNCLEssRUFBTztBQUNmLFlBQUtzc0IsS0FBTCxHQUFhdHNCLEtBQWI7QUFDRDs7O3lCQUVvQjtBQUFFLGNBQU8sS0FBSzhzQixjQUFaO0FBQTRCOzs7eUJBRTNCO0FBQUUsY0FBTyxLQUFLQyxpQkFBWjtBQUErQjs7Ozs7O21CQWhKdEN0QixNIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE0NjNmYmQxNWYwYTNlZGIxYmFkIiwiaW1wb3J0ICdwaXhpLmpzJ1xuaW1wb3J0ICd3ZWItYXVkaW8tZGF3J1xuXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gJy4vdXRpbHMuanMnXG5pbXBvcnQgeyBkZWZhdWx0cywgcnVudGltZV9lcnJvciB9IGZyb20gJy4vZ2xvYmFscy5qcydcblxuaW1wb3J0IGNzcyBmcm9tICcuLi9zdHlsZS9tYWluLmNzcydcbi8vIGltcG9ydCB0IGZyb20gJy4uL2h0bWwvbWFpbi5odG1sJ1xuXG4vLyBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gZWwuaW5uZXJIVE1MID0gdFxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbClcblxuaW1wb3J0IHsgRW1pdHRlciB9IGZyb20gJy4vZW1pdHRlci5qcydcblxuaW1wb3J0IExleGVyIGZyb20gJy4vY29tcGlsZXIvbGV4ZXIuanMnXG5pbXBvcnQgUGFyc2VyIGZyb20gJy4vY29tcGlsZXIvcGFyc2VyLmpzJ1xuaW1wb3J0IFRyYW5zcGlsZXIgZnJvbSAnLi9jb21waWxlci90cmFuc3BpbGVyLmpzJ1xuXG5pbXBvcnQgeyBNZW1vcnkgfSBmcm9tICcuL3ZtL21lbW9yeS5qcydcbmltcG9ydCBNZW1vcnlNYW5hZ2VyIGZyb20gJy4vdm0vbWVtb3J5bWFuYWdlci5qcydcbmltcG9ydCBTdGFjayBmcm9tICcuL3ZtL3N0YWNrLmpzJ1xuaW1wb3J0IEludGVycnVwdCBmcm9tICcuL3ZtL2ludGVycnVwdC5qcydcbmltcG9ydCBHdWlkZW8gZnJvbSAnLi92bS9jaGlwcy9ndWlkZW8uanMnXG5pbXBvcnQgS2VuIGZyb20gJy4vdm0vY2hpcHMva2VuLmpzJ1xuaW1wb3J0IE1pY2tleSBmcm9tICcuL3ZtL2NoaXBzL21pY2tleS5qcydcblxuLy8gaW1wb3J0IHsgVk0gfSBmcm9tICcuL2ludGVycHJldGVyL3ZtLmpzJ1xuXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgbGV0IHNyYyA9IHJlcXVpcmUoJ3JhdyEuLi90ZXN0L3Rlc3QxLngzMicpXG4vLyAgIGNvbnNvbGUubG9nKHNyYylcblxuLy8gICBsZXQgdm0gPSBuZXcgVk0oKVxuLy8gICB2bS5sb2FkKHNyYylcbi8vICAgdm0ucnVuKClcbi8vICAgdm0uZHVtcCgpXG4vLyB9LCAxMDApXG5cbi8vIGNvbnNvbGUubG9nKGhleHkuaGV4eSh2bS5tZW1fYnVmZmVyLCB7IG9mZnNldDogMCwgbGVuZ3RoOiA1MTIsIGRpc3BsYXlfb2Zmc2V0OiAweDAwLCB3aWR0aDogMTYsIGNhcHM6ICd1cHBlcicsIGluZGVudDogMiB9KSlcblxuZXhwb3J0IGNvbnN0IF9TVE9QUEVEID0gMFxuZXhwb3J0IGNvbnN0IF9SVU5OSU5HID0gMVxuZXhwb3J0IGNvbnN0IF9QQVVTRUQgPSAyXG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgRW1pdHRlciB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnJlc2V0KClcblxuICAgIHRoaXMuX3VwZGF0ZXMgPSB7XG4gICAgICBxdWV1ZTogW10sXG5cbiAgICAgIGFkZDogb3B0aW9ucyA9PiB7XG4gICAgICAgIGxldCBvID0gXy5nZXQob3B0aW9ucywgJ29iamVjdCcpXG4gICAgICAgIGlmIChvICYmICFvLl9faW5VcGRhdGVzKSB7XG4gICAgICAgICAgby5fX2luVXBkYXRlcyA9IHRydWVcbiAgICAgICAgICB0aGlzLl91cGRhdGVzLnF1ZXVlLnB1c2gob3B0aW9ucylcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBvID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlcy5xdWV1ZSA9IF8ucmVqZWN0KHRoaXMuX3VwZGF0ZXMucXVldWUsIHsgb2JqZWN0OiBvIH0pXG4gICAgICAgIG8uX19pblVwZGF0ZXMgPSBmYWxzZVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGl0dGxlRW5kaWFuXG4gICAgbGV0IGIgPSBuZXcgQXJyYXlCdWZmZXIoNClcbiAgICBsZXQgYSA9IG5ldyBVaW50MzJBcnJheShiKVxuICAgIGxldCBjID0gbmV3IFVpbnQ4QXJyYXkoYilcbiAgICBhWzBdID0gMHhkZWFkYmVlZlxuICAgIHRoaXMuTEUgPSBjWzBdID09PSAweGVmXG5cbiAgICB0aGlzLl9tZW1vcnkgPSBuZXcgTWVtb3J5KHRoaXMpXG4gICAgdGhpcy5fbWVtb3J5TWFuYWdlciA9IG5ldyBNZW1vcnlNYW5hZ2VyKHRoaXMpXG4gICAgdGhpcy5fc3RhY2sgPSBuZXcgU3RhY2sodGhpcylcbiAgICB0aGlzLl9pbnRlcnJ1cHRzID0gbmV3IEludGVycnVwdCh0aGlzKVxuXG4gICAgdGhpcy5fZ3VpZGVvID0gbmV3IEd1aWRlbyh0aGlzKVxuICAgIHRoaXMuX2d1aWRlby5jcmVhdGVDaGlwcygpXG5cbiAgICB0aGlzLl9rZW4gPSBuZXcgS2VuKHRoaXMpXG4gICAgdGhpcy5fbWlja2V5ID0gbmV3IE1pY2tleSh0aGlzKVxuXG4gICAgdGhpcy5fb25SZXNpemUgPSB0aGlzLm9uUmVzaXplLmJpbmQodGhpcylcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25SZXNpemUpXG5cbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBQSVhJLnRpY2tlci5zaGFyZWQuYWRkKGRlbHRhID0+IHtcbiAgICAgIGlmICh0aGF0LnN0YXR1cyA9PT0gX1JVTk5JTkcpIHtcbiAgICAgICAgdGhhdC50aWNrKHBlcmZvcm1hbmNlLm5vdygpLCBkZWx0YSlcblxuICAgICAgICAvLyBsZXQgcmVuZGVyID0gZmFsc2VcblxuICAgICAgICBmb3IgKGxldCBxIG9mIHRoYXQuX3VwZGF0ZXMucXVldWUpIHtcbiAgICAgICAgICBxLm9iamVjdC5fX2luVXBkYXRlcyA9IGZhbHNlXG4gICAgICAgICAgLy8gaWYgKHEucmVuZGVyKSB7XG4gICAgICAgICAgICAvLyByZW5kZXIgPSB0cnVlXG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIGlmIChxLmNiKSB7XG4gICAgICAgICAgICBxLmNiKHEub2JqZWN0LCAuLi4ocS5hcmdzIHx8IFtdKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGF0Ll91cGRhdGVzLnF1ZXVlID0gW11cblxuICAgICAgICAvLyBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgLy8gdGhhdC5fZ3VpZGVvLnJlbmRlcmVyLnJlbmRlcih0aGF0Ll9ndWlkZW8uc3RhZ2UpXG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYXN5bmModGhpcywgdGhpcy5zdGFydCwgMTAwKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fZ3VpZGVvLmRlc3Ryb3koKVxuICAgIHRoaXMuX2tlbi5kZXN0cm95KClcbiAgICB0aGlzLl9taWNrZXkuZGVzdHJveSgpXG4gICAgdGhpcy5faW50ZXJydXB0cy5kZXN0cm95KClcbiAgICB0aGlzLl9tZW1vcnlNYW5hZ2VyLmRlc3Ryb3koKVxuICAgIHRoaXMuX21lbW9yeS5kZXN0cm95KClcbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSAwXG4gICAgdGhpcy5fcHJvZ3JhbSA9IHtcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGNvZGU6IHVuZGVmaW5lZCxcbiAgICAgIGZuOiB1bmRlZmluZWQsXG4gICAgfVxuICB9XG5cbiAgZGVmYXVsdHMgKG5hbWUsIGRlZmF1bHRWYWx1ZSkgeyByZXR1cm4gXy5nZXQoZGVmYXVsdHMsIG5hbWUsIGRlZmF1bHRWYWx1ZSkgfVxuXG4gIGdldCBzdGF0dXMgKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzIH1cbiAgc2V0IHN0YXR1cyAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5fc3RhdHVzICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fc3RhdHVzID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICBnZXQgbWVtb3J5ICgpIHsgcmV0dXJuIHRoaXMuX21lbW9yeSB9XG4gIGdldCBtZW1vcnlNYW5hZ2VyICgpIHsgcmV0dXJuIHRoaXMuX21lbW9yeU1hbmFnZXIgfVxuICBnZXQgaW50ZXJydXB0cyAoKSB7IHJldHVybiB0aGlzLl9pbnRlcnJ1cHRzIH1cblxuICBnZXQgdXBkYXRlcyAoKSB7IHJldHVybiB0aGlzLl91cGRhdGVzIH1cblxuICBnZXQgZ3VpZGVvICgpIHsgcmV0dXJuIHRoaXMuX2d1aWRlbyB9XG4gIGdldCBrZXlib2FyZF9jaGlwICgpIHsgcmV0dXJuIHRoaXMuX2tlbiB9XG4gIGdldCBtaWNrZXkgKCkgeyByZXR1cm4gdGhpcy5fbWlja2V5IH1cblxuICBnZXQgc3RhZ2UgKCkgeyByZXR1cm4gdGhpcy5fZ3VpZGVvLl9zdGFnZSB9XG4gIGdldCByZW5kZXJlciAoKSB7IHJldHVybiB0aGlzLl9ndWlkZW8uX3JlbmRlcmVyIH1cblxuICBnZXQgcHJvZ3JhbSAoKSB7IHJldHVybiB0aGlzLl9wcm9ncmFtIH1cblxuICBvblJlc2l6ZSAoKSB7XG4gICAgdGhpcy5fZ3VpZGVvLmVtaXQoJ3Jlc2l6ZScpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGhsdCAoY29kZSkge1xuICAgIGlmIChjb2RlID4gMCkge1xuICAgICAgcnVudGltZV9lcnJvcihjb2RlKVxuICAgIH1cbiAgICB0aGlzLnN0b3AoKVxuICB9XG5cbiAgbG9hZCAocGF0aCkge1xuICAgIGxldCB0ID0gbmV3IExleGVyKClcbiAgICBsZXQgdG9rZW5zID0gdC5ydW4ocGF0aClcbiAgICBjb25zb2xlLmxvZyh0b2tlbnMpXG5cbiAgICBsZXQgcCA9IG5ldyBQYXJzZXIoKVxuICAgIGxldCBub2RlcyA9IHAucnVuKHRva2VucylcbiAgICBjb25zb2xlLmxvZyhub2RlcylcblxuICAgIGlmIChwLmVycm9ycyA9PT0gMCkge1xuICAgICAgbGV0IHQgPSBuZXcgVHJhbnNwaWxlcigpXG4gICAgICBsZXQgY29kZSA9IHQucnVuKG5vZGVzKVxuICAgICAgY29uc29sZS5sb2coY29kZSlcblxuICAgICAgaWYgKHQuZXJyb3JzID09PSAwKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW0uY29kZSA9IGNvZGVcbiAgICAgICAgdGhpcy5fcHJvZ3JhbS5wYXRoID0gcGF0aFxuICAgICAgICB0aGlzLl9wcm9ncmFtLmZuID0gbmV3IEZ1bmN0aW9uKFsnYXJncyddLCB0aGlzLl9wcm9ncmFtLmNvZGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcnVuICguLi5hcmdzKSB7XG4gICAgbGV0IGZuID0gXy5nZXQodGhpcywgJ19wcm9ncmFtLmZuJylcbiAgICByZXR1cm4gZm4gPyBmbi5hcHBseSh0aGlzLCBhcmdzKSA6IG51bGxcbiAgfVxuXG4gIHN0YXJ0ICgpIHtcbiAgICB0aGlzLnN0YXR1cyA9IF9SVU5OSU5HXG4gICAgdGhpcy50ZXN0KClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RvcCAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBfU1RPUFBFRFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBfUEFVU0VEXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc3VtZSAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBfUlVOTklOR1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgdGhpcy5fbWVtb3J5LnRpY2sodClcbiAgICB0aGlzLl9tZW1vcnlNYW5hZ2VyLnRpY2sodClcbiAgICB0aGlzLl9rZW4udGljayh0KVxuICAgIHRoaXMuX21pY2tleS50aWNrKHQpXG4gICAgdGhpcy5faW50ZXJydXB0cy50aWNrKHQpXG4gICAgdGhpcy5fZ3VpZGVvLnRpY2sodClcbiAgfVxuXG4gIHRlc3QgKCkge1xuICB9XG5cbn1cblxuZXhwb3J0IGxldCBtYWluID0gbmV3IE1haW4oKVxud2luZG93LmFwcCA9IG1haW5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9tYWluLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGl4aS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBpeGkuanNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWItYXVkaW8tZGF3XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2ViLWF1ZGlvLWRhd1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGVsZWN0cm9uID0gcmVxdWlyZSgnZWxlY3Ryb24nKVxuY29uc3QgeyByZW1vdGUsIHNjcmVlbiwgZGlhbG9nIH0gPSBlbGVjdHJvblxuY29uc3QgeyBhcHAsIEJyb3dzZXJXaW5kb3cgfSA9IHJlbW90ZVxuXG5jb25zdCBfID0gcmVxdWlyZSgndW5kZXJzY29yZS1wbHVzJylcbl8uZXh0ZW5kKF8sIHJlcXVpcmUoJ2xvZGFzaCcpKVxud2luZG93Ll8gPSBfXG5cbl8udGVtcGxhdGVTZXR0aW5ncy5pbnRlcnBvbGF0ZSA9IC8jeyhbXFxzXFxTXSs/KX0vZ1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzLXByb21pc2UnKVxuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHJhZiBmcm9tICdyYWYnXG5pbXBvcnQgcGVyZm9ybWFuY2UgZnJvbSAncGVyZm9ybWFuY2Utbm93J1xuXG5pbXBvcnQgeyBNaXhpbiwgbWl4IH0gZnJvbSAnbWl4d2l0aCdcbndpbmRvdy5NaXhpbiA9IE1peGluXG53aW5kb3cubWl4ID0gbWl4XG5cbmxldCB1c2VyUGF0aCA9IHBhdGguam9pbihhcHAuZ2V0QXBwUGF0aCgpLCAnL3VzZXInKVxuaWYgKCFmcy5leGlzdHNTeW5jKHVzZXJQYXRoKSkge1xuICBmcy5ta2RpcnModXNlclBhdGgpXG59XG5cbmxldCBJU19XSU4gPSAvXndpbi8udGVzdChwcm9jZXNzLnBsYXRmb3JtKVxubGV0IElTX09TWCA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nXG5sZXQgSVNfTElOVVggPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnbGludXgnXG5sZXQgZGlycyA9IHtcbiAgYnVpbGQ6IF9fZGlybmFtZSxcbiAgY3dkOiBhcHAuZ2V0QXBwUGF0aCgpLFxuICBob21lOiBhcHAuZ2V0UGF0aCgnaG9tZScpLFxuICBhcHA6IGFwcC5nZXRQYXRoKCdhcHBEYXRhJyksXG4gIHVzZXI6IHVzZXJQYXRoLFxuICB0bXA6IGFwcC5nZXRQYXRoKCd0ZW1wJyksXG4gIHJvb3Q6IGFwcC5nZXRQYXRoKCdleGUnKSxcbiAgbm9kZV9tb2R1bGVzOiBwYXRoLmpvaW4odXNlclBhdGgsICdub2RlX21vZHVsZXMnKSxcbiAgdXNlcl9wa2c6IHBhdGguam9pbih1c2VyUGF0aCwgJ3BhY2thZ2UuanNvbicpLFxufVxuXG5sZXQgbmFtZSA9IGFwcC5nZXROYW1lKClcbmxldCB2ZXJzaW9uID0gYXBwLmdldFZlcnNpb24oKVxuXG5sZXQgb3BlbkZpbGUgPSAoLi4uYXJncykgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBkaWFsb2cuc2hvd09wZW5EaWFsb2cuYXBwbHkoZGlhbG9nLCBhcmdzKVxuICB9XG4gIGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5sZXQgc2F2ZUZpbGUgPSAoLi4uYXJncykgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBkaWFsb2cuc2hvd1NhdmVEaWFsb2cuYXBwbHkoZGlhbG9nLCBhcmdzKVxuICB9XG4gIGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5sZXQgbWVzc2FnZUJveCA9ICguLi5hcmdzKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRpYWxvZy5zaG93TWVzc2FnZUJveC5hcHBseShkaWFsb2csIGFyZ3MpXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmxldCBtYXBfZ2V0dGVycyA9IChzb3VyY2UsIHRhcmdldCwgZGVmcykgPT4ge1xuICBmb3IgKGxldCBrIGluIGRlZnMpIHtcbiAgICBsZXQgZm4gPSBkZWZzW2tdXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNvdXJjZSwgaywge1xuICAgICAgZ2V0OiAoKSA9PiBmbi5jYWxsKHRhcmdldCwgc291cmNlKSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgfSlcbiAgfVxufVxuXG5sZXQgbWFwX2dldHRlcnNfcmV0dXJuX3RoaXMgPSAoc291cmNlLCB0YXJnZXQsIGRlZnMpID0+IHtcbiAgZm9yIChsZXQgayBpbiBkZWZzKSB7XG4gICAgbGV0IGZuID0gZGVmc1trXVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzb3VyY2UsIGssIHtcbiAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICBmbi5jYWxsKHRhcmdldCwgc291cmNlKVxuICAgICAgICByZXR1cm4gc291cmNlXG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9KVxuICB9XG59XG5cbmxldCBub3cgPSAoKSA9PiBwZXJmb3JtYW5jZS5ub3coKVxuXG5sZXQgZGVsYXkgPSBtcyA9PiB7XG4gIC8vIHNldFRpbWVvdXQoKCkgPT4ge30sIG1zKVxuICBsZXQgdCA9IHBlcmZvcm1hbmNlLm5vdygpXG4gIGxldCBjID0gdFxuICB3aGlsZSAoYyAtIHQgPD0gbXMpIHtcbiAgICAvLyBQSVhJLnRpY2tlci5zaGFyZWQudXBkYXRlKGMpXG4gICAgYyA9IHBlcmZvcm1hbmNlLm5vdygpXG4gIH1cbn1cblxubGV0IGFzeW5jID0gKGNvbnRleHQsIGZuLCBhcmdzLCBkZWxheSkgPT4ge1xuICBpZiAoXy5pc051bWJlcihhcmdzKSkge1xuICAgIGRlbGF5ID0gYXJnc1xuICAgIGFyZ3MgPSBbXVxuICB9XG4gIGlmICghXy5pc0FycmF5KGFyZ3MpKSB7XG4gICAgYXJncyA9IFthcmdzXVxuICB9XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGZuLmNhbGwoY29udGV4dCwgLi4uYXJncylcbiAgfSwgZGVsYXkgfHwgMSlcbn1cblxubGV0IGJ1ZmZlcl90b19zdHJpbmcgPSBiID0+IHtcbiAgbGV0IGxlbiA9IGIubGVuZ3RoXG4gIGxldCBpID0gMFxuICBsZXQgcyA9ICcnXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcyArPSBiW2krK10udG9TdHJpbmcoMTYpXG4gIH1cbiAgcmV0dXJuIHNcbn1cblxubGV0IHN0cmluZ190b19idWZmZXIgPSBzdHIgPT4ge1xuICBsZXQgbGVuID0gc3RyLmxlbmd0aFxuICBsZXQgaSA9IDBcbiAgbGV0IGIgPSBuZXcgQnVmZmVyKE1hdGgudHJ1bmMoc3RyLmxlbmd0aCAvIDIpKVxuICBsZXQgeCA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBsZXQgaGV4ID0gc3RyLnN1YnN0cihpLCAyKVxuICAgIGJbeCsrXSA9IHBhcnNlSW50KGhleCwgMTYpXG4gICAgaSArPSAyXG4gIH1cbiAgcmV0dXJuIGJcbn1cblxubGV0IHN0cmluZ19idWZmZXIgPSAoc3RyLCBsZW4gPSAwKSA9PiB7XG4gIGxlbiA9IGxlbiB8fCBzdHIubGVuZ3RoXG4gIHZhciBiID0gbmV3IEJ1ZmZlcihsZW4pXG4gIGIud3JpdGUoc3RyLCAwLCBzdHIubGVuZ3RoLCAnYXNjaWknKVxuICByZXR1cm4gYlxufVxuXG5sZXQgbm9ybWFsaXplTWVzc2FnZXMgPSAoLi4ubWVzc2FnZSkgPT4ge1xuICBsZXQgYXJncyA9IFtdXG4gIGZvciAobGV0IG0gb2YgbWVzc2FnZSkge1xuICAgIGlmIChfLmlzQXJyYXkobSkpIHtcbiAgICAgIGFyZ3MucHVzaChtLmpvaW4oJywgJykpXG4gICAgfVxuICAgIGVsc2UgaWYgKF8uaXNTdHJpbmcobSkpIHtcbiAgICAgIGFyZ3MucHVzaChtKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJnc1xufVxuXG5sZXQgaGV4ID0gKHZhbHVlLCBzaXplID0gMzIpID0+ICckJyArIF8ucGFkU3RhcnQodmFsdWUudG9TdHJpbmcoMTYpLCBNYXRoLnRydW5jKHNpemUgLyA0KSwgJzAnKVxuXG5sZXQgYnVmZmVyX2R1bXAgPSAoYnVmZmVyLCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCAxNlxuICBsZXQgY2FwcyA9IG9wdGlvbnMuY2FwcyB8fCAndXBwZXInXG4gIGxldCBpbmRlbnQgPSBfLnJlcGVhdCgnICcsIG9wdGlvbnMuaW5kZW50IHx8IDApXG5cbiAgbGV0IHplcm8gPSAobiwgbWF4KSA9PiB7XG4gICAgbiA9IG4udG9TdHJpbmcoMTYpXG4gICAgaWYgKGNhcHMgPT09ICd1cHBlcicpIHsgbiA9IG4udG9VcHBlckNhc2UoKSB9XG4gICAgd2hpbGUgKG4ubGVuZ3RoIDwgbWF4KSB7XG4gICAgICBuID0gJzAnICsgblxuICAgIH1cbiAgICByZXR1cm4gblxuICB9XG5cbiAgbGV0IGxlbiA9IE1hdGgubWluKGJ1ZmZlci5ieXRlTGVuZ3RoLCBvcHRpb25zLmxlbmd0aCB8fCBidWZmZXIuYnl0ZUxlbmd0aClcbiAgbGV0IHJvd3MgPSBNYXRoLmNlaWwobGVuIC8gd2lkdGgpXG4gIGxldCBsYXN0ID0gbGVuICUgd2lkdGggfHwgd2lkdGhcbiAgbGV0IG9mZnNldExlbmd0aCA9IGxlbi50b1N0cmluZygxNikubGVuZ3RoXG4gIGlmIChvZmZzZXRMZW5ndGggPCA2KSB7IG9mZnNldExlbmd0aCA9IDYgfVxuXG4gIGxldCBhcnIgPSBuZXcgVWludDhBcnJheShidWZmZXIpXG5cbiAgbGV0IHN0ciA9IGluZGVudCArICdPZmZzZXQnXG4gIHdoaWxlIChzdHIubGVuZ3RoIDwgb2Zmc2V0TGVuZ3RoKSB7XG4gICAgc3RyICs9ICcgJ1xuICB9XG5cbiAgc3RyICs9ICcgICdcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICBzdHIgKz0gJyAnICsgemVybyhpLCAyKVxuICB9XG5cbiAgaWYgKGxlbikge1xuICAgIHN0ciArPSAnXFxuJ1xuICB9XG5cbiAgbGV0IGIgPSAwXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICBzdHIgKz0gaW5kZW50ICsgemVybyhiLCBvZmZzZXRMZW5ndGgpICsgJyAgJ1xuICAgIGxldCBsYXN0Qnl0ZXMgPSBpID09PSByb3dzIC0gMSA/IGxhc3QgOiB3aWR0aFxuICAgIGxldCBsYXN0U3BhY2VzID0gd2lkdGggLSBsYXN0Qnl0ZXNcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGFzdEJ5dGVzOyBqKyspIHtcbiAgICAgIHN0ciArPSAnICcgKyB6ZXJvKGFycltiXSwgMilcbiAgICAgIGIrK1xuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGFzdFNwYWNlczsgaisrKSB7XG4gICAgICBzdHIgKz0gJyAgICdcbiAgICB9XG5cbiAgICBiIC09IGxhc3RCeXRlc1xuICAgIHN0ciArPSAnICAgJ1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsYXN0Qnl0ZXM7IGorKykge1xuICAgICAgbGV0IHYgPSBhcnJbYl1cbiAgICAgIHN0ciArPSB2ID4gMzEgJiYgdiA8IDEyNyB8fCB2ID4gMTU5ID8gU3RyaW5nLmZyb21DaGFyQ29kZSh2KSA6ICcuJ1xuICAgICAgYisrXG4gICAgfVxuXG4gICAgc3RyICs9ICdcXG4nXG4gIH1cblxuICByZXR1cm4gc3RyXG59XG5cbmxldCB1dG9hID0gc3RyID0+IHdpbmRvdy5idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKSlcblxubGV0IGF0b3UgPSBzdHIgPT4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSh3aW5kb3cuYXRvYihzdHIpKSlcblxud2luZG93LnV0b2EgPSB1dG9hXG53aW5kb3cuYXRvdSA9IGF0b3VcblxuXG5sZXQgaW5zdGFuY2VGdW5jdGlvbiA9ICh0YXJnZXQsIG5hbWUsIGZuLCBmb3JjZSA9IGZhbHNlKSA9PiB7XG4gIGlmIChmb3JjZSB8fCAhdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xuICAgICAgdmFsdWU6IGZuLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSlcbiAgfVxufVxuXG5sZXQgaW5zdGFuY2VGdW5jdGlvbnMgPSAodGFyZ2V0LCBzb3VyY2UsIG5hbWVzKSA9PiB7XG4gIGZvciAobGV0IG4gb2YgbmFtZXMpIHtcbiAgICBpZiAoXy5pc0FycmF5KG4pKSB7XG4gICAgICBpbnN0YW5jZUZ1bmN0aW9uKHRhcmdldCwgblswXSwgc291cmNlW25bMV1dKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGluc3RhbmNlRnVuY3Rpb24odGFyZ2V0LCBuLCBzb3VyY2Vbbl0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIF8sXG4gIG5hbWUsXG4gIHZlcnNpb24sXG4gIGVsZWN0cm9uLFxuICBkaWFsb2csXG4gIG9wZW5GaWxlLFxuICBzYXZlRmlsZSxcbiAgbWVzc2FnZUJveCxcbiAgcmVtb3RlLFxuICBzY3JlZW4sXG4gIEJyb3dzZXJXaW5kb3csXG4gIGFwcCxcbiAgZnMsXG4gIHBhdGgsXG4gIHVzZXJQYXRoLFxuICBJU19XSU4sXG4gIElTX09TWCxcbiAgSVNfTElOVVgsXG4gIGRpcnMsXG4gIHJhZixcbiAgbm93LFxuICBNaXhpbixcbiAgbWl4LFxuICBtYXBfZ2V0dGVycyxcbiAgbWFwX2dldHRlcnNfcmV0dXJuX3RoaXMsXG4gIGRlbGF5LFxuICBhc3luYyxcbiAgYnVmZmVyX3RvX3N0cmluZyxcbiAgc3RyaW5nX3RvX2J1ZmZlcixcbiAgc3RyaW5nX2J1ZmZlcixcbiAgbm9ybWFsaXplTWVzc2FnZXMsXG4gIGhleCxcbiAgYnVmZmVyX2R1bXAsXG4gIHV0b2EsXG4gIGF0b3UsXG4gIGluc3RhbmNlRnVuY3Rpb24sXG4gIGluc3RhbmNlRnVuY3Rpb25zLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3V0aWxzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYWZcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyYWZcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZXJmb3JtYW5jZS1ub3dcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwZXJmb3JtYW5jZS1ub3dcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtaXh3aXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWl4d2l0aFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZWxlY3Ryb25cIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlLXBsdXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlLXBsdXNcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtcHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzLXByb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiUElYSS5Qb2ludC5wcm90b3R5cGUuZGlzdGFuY2UgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoKHRoaXMueCAtIHRhcmdldC54KSAqICh0aGlzLnggLSB0YXJnZXQueCkgKyAodGhpcy55IC0gdGFyZ2V0LnkpICogKHRoaXMueSAtIHRhcmdldC55KSlcbn1cblxuUElYSS5Qb2ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfLnRlbXBsYXRlKCcoI3t4fSwgI3t5fSknKSh0aGlzKVxufVxuXG5QSVhJLlJlY3RhbmdsZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfLnRlbXBsYXRlKCcoI3t4fSwgI3t5fSwgI3t4ICsgd2lkdGh9LCAje3kgKyBoZWlnaHR9KSgje3dpZHRofSwgI3toZWlnaHR9KScpKHRoaXMpXG59XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBib3VuZHNjaGVjazogZmFsc2UsXG5cbiAgdHlwZTogJ2kzMicsXG5cbiAgbWVtb3J5OiB7XG4gICAgc2l6ZTogNTEyICogMTAyNCxcbiAgfSxcblxuICBtZW1vcnlfbWFuYWdlcjoge1xuICAgIGNvbGxlY3RfZGVsYXk6IDMwICogMTAwMCxcbiAgfSxcblxuICBib3JkZXI6IHtcbiAgICBzaXplOiA2NCxcbiAgICBjb2xvcjogMSxcbiAgfSxcblxuICBndWlkZW86IHtcbiAgICB3aWR0aDogMjQwLFxuICAgIGhlaWdodDogMTY4LFxuICAgIHNjYWxlOiA0LFxuICB9LFxuXG4gIHJhaW5ib3c6IHtcbiAgICBjb3VudDogMTYsXG4gICAgZGF0YV9mb3JtYXQ6ICdpMzInLFxuICB9LFxuXG4gIGZvbnpvOiB7XG4gICAgY291bnQ6IDI1NixcbiAgICB3aWR0aDogNixcbiAgICBoZWlnaHQ6IDcsXG4gIH0sXG5cbiAgb3J3ZWxsOiB7XG4gICAgd2lkdGg6IDI0MCAvIDYsXG4gICAgaGVpZ2h0OiAxNjggLyA3LFxuICB9LFxuXG4gIGJlYWdsZToge1xuICAgIHdpZHRoOiA2LFxuICAgIGhlaWdodDogNyxcbiAgICBjb2xvcjogMTUsXG4gICAgYmxpbmtyYXRlOiA1MDAsXG4gIH0sXG5cbiAgdmlvbGV0OiB7XG4gICAgY291bnQ6IDMyLFxuICAgIHdpZHRoOiAxNixcbiAgICBoZWlnaHQ6IDE2LFxuICB9LFxuXG4gIGtlbjoge1xuICAgIGNvdW50OiAyNTYsXG4gIH0sXG5cbiAgbWlja2V5OiB7XG4gICAgY291bnQ6IDE3LFxuICAgIHdpZHRoOiA2LFxuICAgIGhlaWdodDogNyxcbiAgICBjb2xvcjogMTUsXG4gICAgZnJhbWU6IDAsXG4gICAgZGJsQ2xpY2tEZWxheTogMjUwLFxuICAgIGRibENsaWNrRGlzdGFuY2U6IDgsXG4gIH0sXG5cbiAgbmV0d29yazoge1xuICAgIGNvdW50OiAzMiAqIDEwMjQsXG4gIH0sXG5cbiAgYWx0bzoge1xuICAgIGNvdW50OiA0ICogMTAyNCxcbiAgfSxcblxuICBjaGFyc19tYXA6IHtcbiAgICAnLic6IDAsXG4gICAgcjogMSxcbiAgICBnOiAyLFxuICAgIHk6IDMsXG4gICAgYjogNCxcbiAgICBwOiA1LFxuICAgIGM6IDYsXG4gICAgRTogNyxcbiAgICBlOiA4LFxuICAgIFI6IDksXG4gICAgRzogMTAsXG4gICAgWTogMTEsXG4gICAgQjogMTIsXG4gICAgUDogMTMsXG4gICAgQzogMTQsXG4gICAgdzogMTUsXG4gICAgJyAnOiAxNixcbiAgfVxufVxuXG5sZXQgZXJyb3JzID0gMFxuXG5sZXQgZXJyb3IgPSAodCwgbXNnKSA9PiB7XG4gIGRlYnVnZ2VyXG4gIGVycm9ycysrXG4gIGNvbnNvbGUuZXJyb3IobXNnLCAnYXQnLCB0LnZhbHVlLCAnKCcgKyB0LnJvdyArICcsJyArIHQuY29sICsgJyknKVxufVxuXG5sZXQgcnVudGltZV9lcnJvciA9IGNvZGUgPT4ge1xuICBsZXQgZSA9ICdVbmtub3duIHJ1bnRpbWUgZXJyb3InXG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgMHgwMTpcbiAgICAgIGUgPSAnT3V0IG9mIG1lbW9yeSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDAyOlxuICAgICAgZSA9ICdTdGFjayB1bmRlcmZsb3cnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwMzpcbiAgICAgIGUgPSAnU3RhY2sgb3ZlcmZsb3cnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNDpcbiAgICAgIGUgPSAnSW52YWxpZCBzdGFjayBhZGRyZXNzJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDU6XG4gICAgICBlID0gJ1N0YWNrIGFkZHJlc3MgYWxyZWFkeSBhc3NpZ25lZCdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA2OlxuICAgICAgZSA9ICdJbnRlcnJ1cHQgYWxyZWFkeSBleGlzdHMnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNzpcbiAgICAgIGUgPSAnSW50ZXJydXB0IG5vdCBmb3VuZCdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA4OlxuICAgICAgZSA9ICdBZGRyZXNzIG91dCBvZiBib3VuZHMnXG4gICAgICBicmVha1xuICB9XG4gIGNvbnNvbGUuZXJyb3IoZSlcbn1cblxubGV0IGlvX2Vycm9yID0gY29kZSA9PiB7XG4gIGxldCBlID0gJ0kvTyBydW50aW1lIGVycm9yJ1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIDB4MDE6XG4gICAgICBlID0gJ0ZpbGUgbm90IGZvdW5kJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDI6XG4gICAgICBlID0gJ0Nhbm5vdCBvcGVuIGZpbGUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwMzpcbiAgICAgIGUgPSAnQ2Fubm90IGNsb3NlIGZpbGUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNDpcbiAgICAgIGUgPSAnQ2Fubm90IGxvY2sgZmlsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA1OlxuICAgICAgZSA9ICdDYW5ub3QgdW5sb2NrIGZpbGUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNjpcbiAgICAgIGUgPSAnSW52YWxpZCBmaWxlIGlkJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDc6XG4gICAgICBlID0gJ0EgZmxvcHB5IGlzIGFscmVhZHkgaW4gdGhlIGRyaXZlJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDg6XG4gICAgICBlID0gJ05vIGZsb3BweSBpbiBkcml2ZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA5OlxuICAgICAgZSA9ICdDYW5ub3QgZGVsZXRlIGZpbGUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgxMDpcbiAgICAgIGUgPSAnRHJpdmUgaXMgbm90IHNwaW5uaW5nJ1xuICAgICAgYnJlYWtcbiAgfVxuICBjb25zb2xlLmVycm9yKGUpXG59XG5cblxuZXhwb3J0IHtcbiAgZGVmYXVsdHMsXG4gIGVycm9ycyxcbiAgZXJyb3IsXG4gIHJ1bnRpbWVfZXJyb3IsXG4gIGlvX2Vycm9yLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2dsb2JhbHMuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uL25vZGVfbW9kdWxlcy9jc3NuZXh0LWxvYWRlci9pbmRleC5qcyEuL21haW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi9ub2RlX21vZHVsZXMvY3NzbmV4dC1sb2FkZXIvaW5kZXguanMhLi9tYWluLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uL25vZGVfbW9kdWxlcy9jc3NuZXh0LWxvYWRlci9pbmRleC5qcyEuL21haW4uY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuY2FudmFzIHtcXG4gIGN1cnNvcjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3R5bGUvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx1QkFBK0M7RUFDL0MsWUFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSx3QkFBd0I7Q0FDekJcIixcImZpbGVcIjpcIm1haW4uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKC4vY29sb3JzLmNzcyk7XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi9jc3NuZXh0LWxvYWRlciEuL3N0eWxlL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHNlbGYubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuXHRcdGlmKG5ld09iaikge1xuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHRpZihzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xuXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYylcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgY2xhc3MgRXZlbnQge1xuXG4gIGNvbnN0cnVjdG9yICh0YXJnZXQsIG5hbWUsIGRhdGEsIGJ1YmJsZXMgPSB0cnVlKSB7XG4gICAgdGhpcy5fX2V2ZW50T2JqZWN0ID0gdHJ1ZVxuICAgIHRoaXMudGltZVN0YW1wID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldFxuICAgIHRoaXMudHlwZSA9IG5hbWVcbiAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgdGhpcy5idWJibGVzID0gYnViYmxlc1xuICAgIHRoaXMuc3RvcHBlZCA9IGZhbHNlXG4gICAgdGhpcy5zdG9wcGVkSW1tZWRpYXRlID0gZmFsc2VcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuICB9XG5cbiAgc3RvcCAoKSB7XG4gICAgdGhpcy5zdG9wcGVkID0gdHJ1ZVxuICB9XG5cbiAgc3RvcEltbWVkaWF0ZSAoKSB7XG4gICAgdGhpcy5zdG9wcGVkSW1tZWRpYXRlID0gdHJ1ZVxuICB9XG5cbiAgc3RvcFByb3BhZ2F0aW9uICgpIHtcbiAgICB0aGlzLnN0b3BwZWQgPSB0cnVlXG4gIH1cblxuICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gKCkge1xuICAgIHRoaXMuc3RvcHBlZEltbWVkaWF0ZSA9IHRydWVcbiAgfVxuXG4gIGNhbmNlbEJ1YmJsZSAoKSB7XG4gICAgdGhpcy5idWJibGVzID0gZmFsc2VcbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0ICgpIHtcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlXG4gIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRW1pdHRlciB7XG5cbiAgb24gKG5hbWUsIGZuLCBvcmRlciA9IDApIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cbiAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0gPSB0aGlzLl9saXN0ZW5lcnNbbmFtZV0gfHwgW11cbiAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0ucHVzaCh7IGZuLCBvcmRlciB9KVxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSA9IF8uc29ydEJ5KHRoaXMuX2xpc3RlbmVyc1tuYW1lXSwgJ29yZGVyJylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgb25jZSAobmFtZSwgZm4pIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cblxuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIGxldCBvbmNlSGFuZGxlcldyYXBwZXIgPSAoKSA9PiB7XG4gICAgICBmbi5hcHBseSh0aGF0Lm9mZihuYW1lLCBvbmNlSGFuZGxlcldyYXBwZXIpLCBhcmd1bWVudHMpXG4gICAgfVxuICAgIG9uY2VIYW5kbGVyV3JhcHBlci5fb3JpZ2luYWxIYW5kbGVyID0gZm5cblxuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIG9uY2VIYW5kbGVyV3JhcHBlcilcbiAgfVxuXG4gIG9mZiAobmFtZSwgZm4pIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cblxuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGxldCBsaXN0ID0gdGhpcy5fbGlzdGVuZXJzW25hbWVdXG4gICAgbGV0IGkgPSBmbiA/IGxpc3QubGVuZ3RoIDogMFxuXG4gICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgIGlmIChsaXN0W2ldLmZuID09PSBmbiB8fCBsaXN0W2ldLl9vcmlnaW5hbEhhbmRsZXIgPT09IGZuKSB7XG4gICAgICAgIGxpc3Quc3BsaWNlKGksIDEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF8uaXNFbXB0eShsaXN0KSkge1xuICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tuYW1lXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBlbWl0IChuYW1lLCBkYXRhKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzIHx8IHt9XG5cbiAgICBsZXQgb3JpZ0V2ZW50RGF0YVxuXG4gICAgaWYgKCFkYXRhIHx8IGRhdGEuX19ldmVudE9iamVjdCAhPT0gdHJ1ZSkge1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5kYXRhICYmIGRhdGEudHlwZSkge1xuICAgICAgICBvcmlnRXZlbnREYXRhID0gZGF0YVxuICAgICAgICBkYXRhID0gZGF0YS5kYXRhXG4gICAgICB9XG4gICAgICBkYXRhID0gbmV3IEV2ZW50KHRoaXMsIG5hbWUsIGRhdGEpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgbGV0IGxpc3RlbmVycyA9IF8uY2xvbmUodGhpcy5fbGlzdGVuZXJzW25hbWVdKVxuICAgICAgZm9yIChsZXQgbCBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgbC5mbi5jYWxsKHRoaXMsIGRhdGEpXG4gICAgICAgIGlmIChkYXRhLnN0b3BwZWRJbW1lZGlhdGUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZGF0YS5zdG9wcGVkKSB7XG4gICAgICAgIGlmIChvcmlnRXZlbnREYXRhKSB7XG4gICAgICAgICAgb3JpZ0V2ZW50RGF0YS5zdG9wcGVkID0gdHJ1ZVxuICAgICAgICAgIGRhdGEuY2FuY2VsQnViYmxlKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRhLmJ1YmJsZXMgJiYgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZW1pdCkge1xuICAgICAgdGhpcy5wYXJlbnQuZW1pdChuYW1lLCBkYXRhKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWRcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvZW1pdHRlci5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IHBhdGggfSBmcm9tICcuLi91dGlscy5qcydcblxuaW1wb3J0IFRva2VuVHlwZXMgZnJvbSAnLi90b2tlbnMvdHlwZXMuanMnXG5pbXBvcnQgQ29uc3RUb2tlbiBmcm9tICcuL3Rva2Vucy9jb25zdC5qcydcbmltcG9ydCBJbmNsdWRlVG9rZW4gZnJvbSAnLi90b2tlbnMvaW5jbHVkZS5qcydcblxuY2xhc3MgVG9rZW4ge1xuXG4gIGNvbnN0cnVjdG9yIChsZXhlciwgdHlwZSwgdmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAobGV4ZXIgaW5zdGFuY2VvZiBUb2tlbikge1xuICAgICAgbGV0IHQgPSBsZXhlclxuICAgICAgdGhpcy5sZXhlciA9IHQubGV4ZXJcbiAgICAgIHRoaXMuX3R5cGUgPSB0Ll90eXBlXG4gICAgICB0aGlzLl9yZXNlcnZlZCA9IHQuX3Jlc2VydmVkXG4gICAgICB0aGlzLnZhbHVlID0gdC52YWx1ZVxuICAgICAgdGhpcy5zdGFydCA9IF8uY2xvbmUodC5zdGFydClcbiAgICAgIHRoaXMuZW5kID0gXy5jbG9uZSh0LmVuZClcbiAgICAgIHRoaXMubGVuZ3RoID0gdC52YWx1ZS5sZW5ndGhcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmxleGVyID0gbGV4ZXJcbiAgICAgIHRoaXMuX3R5cGUgPSB0eXBlXG4gICAgICB0aGlzLl9yZXNlcnZlZCA9IGZhbHNlXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgJydcbiAgICAgIHRoaXMuc3RhcnQgPSBzdGFydCB8fCB7IG9mZnNldDogMCwgbGluZTogMCwgY29sdW1uOiAwIH1cbiAgICAgIHRoaXMuZW5kID0gZW5kIHx8IHsgb2Zmc2V0OiAwLCBsaW5lOiAwLCBjb2x1bW46IDAgfVxuICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmVuZC5vZmZzZXQgLSB0aGlzLnN0YXJ0Lm9mZnNldFxuICAgIH1cbiAgfVxuXG4gIGlzIChlKSB7XG4gICAgaWYgKF8uaXNTdHJpbmcoZSkpIHtcbiAgICAgIGxldCBwYXJ0cyA9IGUuc3BsaXQoJ3wnKVxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yIChsZXQgcCBvZiBwYXJ0cykge1xuICAgICAgICAgIGlmICh0aGlzLmlzKHApKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBlID09PSAnLicgfHwgdGhpcy50eXBlID09PSBlIHx8IHRoaXMudmFsdWUgPT09IGVcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoXy5pc1JlZ0V4cChlKSkge1xuICAgICAgcmV0dXJuIHRoaXMudHlwZS5tYXRjaChlKSB8fCB0aGlzLnZhbHVlLm1hdGNoKGUpXG4gICAgfVxuICAgIGVsc2UgaWYgKF8uaXNBcnJheShlKSkge1xuICAgICAgZm9yIChsZXQgaSBvZiBlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzKGkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGdldCB0eXBlICgpIHtcbiAgICBpZiAodGhpcy5fdHlwZSA9PT0gJ21hdGhfYXNzaWduJyB8fCB0aGlzLl90eXBlID09PSAnbG9naWNfYXNzaWduJykge1xuICAgICAgdGhpcy5fdHlwZSA9ICdhc3NpZ24nXG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuX3R5cGUgPT09ICdzdXBlcicpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSAnc3VwZXInXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90eXBlXG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIF8udGVtcGxhdGUoJ1wiI3t2YWx1ZX1cIiBhdCAje3BhdGh9KCN7bGluZX06I3tjb2x1bW59KScpKHsgdmFsdWU6IHRoaXMudmFsdWUsIGxpbmU6IHRoaXMuc3RhcnQubGluZSwgY29sdW1uOiB0aGlzLnN0YXJ0LmNvbHVtbiwgcGF0aDogcGF0aC5iYXNlbmFtZSh0aGlzLmxleGVyLnBhdGgpIH0pXG4gIH1cblxufVxuXG5cbmNsYXNzIEVtcHR5Q2xhc3Mge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV4ZXIgZXh0ZW5kcyBtaXgoRW1wdHlDbGFzcykud2l0aChcbiAgVG9rZW5UeXBlcyxcbiAgQ29uc3RUb2tlbixcbiAgSW5jbHVkZVRva2VuXG4pIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKHBhdGgsIHRleHQpIHtcbiAgICB0aGlzLmVycm9ycyA9IDBcbiAgICB0aGlzLnBhdGggPSBwYXRoIHx8ICcnXG4gICAgdGhpcy50ZXh0ID0gdGV4dCB8fCAnJ1xuICAgIHRoaXMubGVuZ3RoID0gdGhpcy50ZXh0Lmxlbmd0aFxuICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgIHRoaXMubGluZSA9IDFcbiAgICB0aGlzLmNvbHVtbiA9IDFcbiAgICB0aGlzLnRva2VucyA9IFtdXG4gICAgdGhpcy5jb25zdGFudHMgPSB7fVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB2YWxpZE9mZnNldCAob2Zmc2V0KSB7IHJldHVybiBvZmZzZXQgPj0gMCAmJiBvZmZzZXQgPCB0aGlzLmxlbmd0aCB9XG5cbiAgZW9zICgpIHsgcmV0dXJuIHRoaXMudmFsaWRPZmZzZXQodGhpcy5vZmZzZXQpIH1cblxuICBjaGFyX2F0IChpKSB7IHJldHVybiB0aGlzLnRleHQuY2hhckF0KGkpIH1cblxuICBzdWJ0ZXh0IChpKSB7IHJldHVybiB0aGlzLnRleHQuc3Vic3RyaW5nKGkpIH1cblxuICBwZWVrICgpIHtcbiAgICBsZXQgcG9zX2luZm8gPSAob2Zmc2V0LCBsaW5lLCBjb2x1bW4pID0+IHsgcmV0dXJuIHsgb2Zmc2V0LCBsaW5lLCBjb2x1bW4gfSB9XG5cbiAgICBsZXQgdG9rZW4gPSBudWxsXG4gICAgbGV0IGwgPSBfLmxhc3QodGhpcy50b2tlbnMpXG4gICAgbGV0IG9mZnNldCA9IHRoaXMub2Zmc2V0XG4gICAgbGV0IGxlbiA9IDBcblxuICAgIHdoaWxlIChbJyAnLCAnXFx0J10uaW5kZXhPZih0aGlzLmNoYXJfYXQob2Zmc2V0KSkgIT09IC0xKSB7XG4gICAgICBpZiAobCAmJiAhbC5uZXh0X2lzX3NwYWNlKSB7XG4gICAgICAgIGwubmV4dF9pc19zcGFjZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy52YWxpZE9mZnNldChvZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiB7IHRva2VuLCBvZmZzZXQgfVxuICAgICAgfVxuICAgICAgb2Zmc2V0KytcbiAgICB9XG5cbiAgICBsZXQgb2xkX29mZnNldCA9IG9mZnNldFxuXG4gICAgbGV0IGxpbmUgPSB0aGlzLmxpbmVcbiAgICBsZXQgY29sdW1uID0gdGhpcy5jb2x1bW5cbiAgICBmb3IgKGxldCBrIGluIHRoaXMudG9rZW5fdHlwZXMpIHtcbiAgICAgIGxldCByID0gdGhpcy5zdWJ0ZXh0KG9mZnNldCkubWF0Y2godGhpcy50b2tlbl90eXBlc1trXSlcbiAgICAgIGlmIChyICYmIHIuaW5kZXggPT09IDApIHtcbiAgICAgICAgbGV0IHZhbHVlID0gci5sZW5ndGggPiAxID8gci5zbGljZSgxKS5qb2luKCcnKSA6IHIuam9pbignJylcbiAgICAgICAgbGVuID0gclswXS5sZW5ndGhcbiAgICAgICAgdG9rZW4gPSBuZXcgVG9rZW4odGhpcywgaywgdmFsdWUsIHBvc19pbmZvKG9mZnNldCwgbGluZSwgY29sdW1uKSwgcG9zX2luZm8ob2Zmc2V0ICsgbGVuLCBsaW5lLCBjb2x1bW4gKyBsZW4gLSAxKSlcbiAgICAgICAgb2Zmc2V0ICs9IGxlblxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2Zmc2V0ID09PSBvbGRfb2Zmc2V0KSB7XG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldCArIDFcbiAgICB9XG4gICAgcmV0dXJuIHsgdG9rZW4sIG9mZnNldCwgbGVuIH1cbiAgfVxuXG4gIGluc2VydFRva2VuICh0KSB7XG4gICAgbGV0IGMgPSB0aGlzLmNvbnN0YW50c1t0LnZhbHVlXVxuICAgIGlmIChfLmlzQXJyYXkoYykpIHtcbiAgICAgIGZvciAobGV0IHQgb2YgYykge1xuICAgICAgICB0aGlzLmluc2VydFRva2VuKHQpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh0KVxuICAgIH1cbiAgfVxuXG4gIG5leHQgKCkge1xuICAgIGxldCB7IHRva2VuLCBvZmZzZXQsIGxlbiB9ID0gdGhpcy5wZWVrKClcblxuICAgIHdoaWxlICh0b2tlbiAmJiB0b2tlbi5fdHlwZSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgICBsZXQgdCA9IHRoaXMucGVlaygpXG4gICAgICB0b2tlbiA9IHQudG9rZW5cbiAgICAgIG9mZnNldCA9IHQub2Zmc2V0XG4gICAgICBsZW4gPSB0LmxlblxuICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXRcbiAgICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICB9XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGlmICh0b2tlbi50eXBlID09PSAnY29uc3QnKSB7XG4gICAgICAgIHRva2VuID0gdGhpcy5jb25zdF90b2tlbih0b2tlbiwgb2Zmc2V0LCBsZW4pXG4gICAgICB9XG5cbiAgICAgIGVsc2UgaWYgKHRva2VuLnR5cGUgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB0b2tlbiA9IHRoaXMuaW5jbHVkZV90b2tlbih0b2tlbiwgb2Zmc2V0LCBsZW4pXG4gICAgICB9XG5cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmluc2VydFRva2VuKHRva2VuKVxuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgICAgICB0aGlzLmNvbHVtbiArPSBsZW4gKyAxXG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbiAmJiB0b2tlbi5pcygnZW9sJykpIHtcbiAgICAgICAgdGhpcy5saW5lKytcbiAgICAgICAgdGhpcy5jb2x1bW4gPSAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuXG4gIH1cblxuICBydW4gKHBhdGgsIHRleHQpIHtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHRleHQgPSBwYXRoXG4gICAgICBwYXRoID0gJydcbiAgICB9XG4gICAgdGhpcy5yZXNldChwYXRoLCB0ZXh0KVxuICAgIHdoaWxlICh0aGlzLnZhbGlkT2Zmc2V0KHRoaXMub2Zmc2V0KSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIGNvbnNvbGUuaW5mbygnbGV4ZXIgZHVtcCcpXG4gICAgY29uc29sZS5sb2codGhpcy50b2tlbnMpXG4gICAgY29uc29sZS5sb2coJycpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2xleGVyLmpzIiwiaW1wb3J0IGFzc2lnbl90b2tlbnMgZnJvbSAnLi9hc3NpZ25zLmpzJ1xuaW1wb3J0IGRlbGltaXRlcl90b2tlbnMgZnJvbSAnLi9kZWxpbWl0ZXJzLmpzJ1xuaW1wb3J0IGNvbW1lbnRfdG9rZW5zIGZyb20gJy4vY29tbWVudHMuanMnXG5pbXBvcnQgZ3JvdXBfdG9rZW5zIGZyb20gJy4vZ3JvdXBzLmpzJ1xuaW1wb3J0IGxpdGVyYWxfdG9rZW5zIGZyb20gJy4vbGl0ZXJhbHMuanMnXG5pbXBvcnQgb3BlcmF0b3JfdG9rZW5zIGZyb20gJy4vb3BlcmF0b3JzLmpzJ1xuaW1wb3J0IHByaW1pdGl2ZV90b2tlbnMgZnJvbSAnLi9wcmltaXRpdmVzLmpzJ1xuaW1wb3J0IHJlc2VydmVkX3Rva2VucyBmcm9tICcuL3Jlc2VydmVkLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFRva2VuVHlwZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBnZXQgdG9rZW5fdHlwZXMgKCkge1xuICAgIGlmICghdGhpcy5fdG9rZW5fdHlwZXMpIHtcbiAgICAgIHRoaXMuX3Rva2VuX3R5cGVzID0gXy5leHRlbmQoe30sXG4gICAgICAgIGRlbGltaXRlcl90b2tlbnMsXG4gICAgICAgIGNvbW1lbnRfdG9rZW5zLFxuICAgICAgICBwcmltaXRpdmVfdG9rZW5zLFxuICAgICAgICByZXNlcnZlZF90b2tlbnMsXG4gICAgICAgIGxpdGVyYWxfdG9rZW5zLFxuICAgICAgICBncm91cF90b2tlbnMsXG4gICAgICAgIG9wZXJhdG9yX3Rva2VucyxcbiAgICAgICAgYXNzaWduX3Rva2Vuc1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdG9rZW5fdHlwZXNcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy90eXBlcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYXNzaWduOiAvXig9KVtePT5dLyxcbiAgbWF0aF9hc3NpZ246IC9eW1xcK1xcLVxcKlxcLyVdPS8sXG4gIGxvZ2ljX2Fzc2lnbjogL15bISZcXHxcXF5dPS8sXG4gIGZuX2Fzc2lnbjogL149Pi8sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2Fzc2lnbnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGVvbDogL15bXFxyXFxuXXw7LyxcbiAgY29tbWE6IC9eLC8sXG4gIGNvbG9uOiAvXjooPz1bXkEtWl9dKS9pLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9kZWxpbWl0ZXJzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBjb21tZW50OiAvXlxcL1xcLyhbXlxcclxcbl0qKS8sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2NvbW1lbnRzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBvcGVuX3BhcmVuOiAvXlxcKC8sXG4gIGNsb3NlX3BhcmVuOiAvXlxcKS8sXG5cbiAgb3Blbl9icmFja2V0OiAvXlxcWy8sXG4gIGNsb3NlX2JyYWNrZXQ6IC9eXFxdLyxcblxuICBvcGVuX2N1cmx5OiAvXlxcey8sXG4gIGNsb3NlX2N1cmx5OiAvXlxcfS8sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2dyb3Vwcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAga2V5OiAvXjooW0EtWl9dW0EtWl8wLTldKikvaSxcblxuICBpZDogL14oW0EtWl9dW0EtWl8wLTldKikvaSxcbiAgaWRfZmllbGQ6IC9eXFwuKFtBLVpfXVtBLVpfMC05XSopL2ksXG5cbiAgdGhpczogL15AKD89W15BLVpfXSkvaSxcbiAgdGhpc19maWVsZDogL15AKFtBLVpfXVtBLVpfMC05XSopL2ksXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2xpdGVyYWxzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzeW1ib2w6IC9eW1xcJF0vLFxuXG4gIG1hdGg6IC9eW1xcK1xcLVxcKlxcLyVdW149XS8sXG4gIGxvZ2ljOiAvXlshJlxcfFxcXl1bXj1dLyxcbiAgY29tcDogL14+fDx8Pj18PD18IT18PT0vLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9vcGVyYXRvcnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGhleDogL15cXCQoWzAtOUEtRl0rKXwweChbMC05QS1GXSspL2ksXG4gIG51bWJlcjogL14oWy0rXT9bMC05XSpcXC4/WzAtOV0rKFtlRV1bLStdP1swLTldKyk/KS8sXG5cbiAgc3RyaW5nOiAvXlwifCcoW15cIl0qKVwifCcvLFxuICBjaGFyOiAvXicoLiknLyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvcHJpbWl0aXZlcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW5jbHVkZTogL14jXCIoW15cIl0qKVwiL2ksXG5cbiAgY29uc3Q6IC9eIyhbQS1aX11bQS1aXzAtOV0qKS9pLFxuXG4gIHJlc2VydmVkOiAvXihwdXRzfHB1dGMpL2ksXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL3Jlc2VydmVkLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIENvbnN0VG9rZW4gZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBjb25zdF90b2tlbiAodG9rZW4sIG9mZnNldCwgbGVuKSB7XG4gICAgbGV0IGMgPSBbXVxuICAgIHRoaXMuY29uc3RhbnRzW3Rva2VuLnZhbHVlXSA9IGNcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IHAgPSB0aGlzLnBlZWsoKVxuICAgICAgdG9rZW4gPSBwLnRva2VuXG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBwLm9mZnNldFxuICAgICAgICB0aGlzLmNvbHVtbiArPSBwLmxlbiArIDFcbiAgICAgIH1cbiAgICAgIGlmICghdG9rZW4gfHwgdG9rZW4uaXMoJ2VvbCcpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgYy5wdXNoKHRva2VuKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9rZW5cbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvY29uc3QuanMiLCJpbXBvcnQgeyBMZXhlciB9IGZyb20gJy4uL2xleGVyLmpzJ1xuaW1wb3J0IHsgcGF0aCwgZGlycywgZnMgfSBmcm9tICcuLi8uLi91dGlscy5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJbmNsdWRlVG9rZW4gZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBpbmNsdWRlX3Rva2VuICh0b2tlbiwgb2Zmc2V0LCBsZW4pIHtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICBsZXQgZm4gPSB0b2tlbi52YWx1ZSArIChwYXRoLmV4dG5hbWUodG9rZW4udmFsdWUpID09PSAnJyA/ICcuc2hwJyA6ICcnKVxuICAgIGxldCBwbiA9IHBhdGguam9pbihfX2Rpcm5hbWUsIGZuKVxuICAgIHRyeSB7XG4gICAgICBmcy5zdGF0U3luYyhwbilcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBuID0gcGF0aC5qb2luKGRpcnMudXNlciwgZm4pXG4gICAgICAgIGZzLnN0YXRTeW5jKHBuKVxuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcG4gPSAnJ1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocG4gIT09ICcnKSB7XG4gICAgICBsZXQgc3JjID0gZnMucmVhZEZpbGVTeW5jKHBuLCAndXRmOCcpXG4gICAgICBsZXQgbHggPSBuZXcgTGV4ZXIoKVxuICAgICAgbHgucnVuKHBuLCBzcmMpXG4gICAgICBpZiAoIWx4LmVycm9ycykge1xuICAgICAgICBfLmV4dGVuZCh0aGlzLmNvbnN0YW50cywgbHguY29uc3RhbnRzKVxuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMudG9rZW5zLmNvbmNhdChseC50b2tlbnMpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b2tlblxuICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9pbmNsdWRlLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uL2dsb2JhbHMuanMnXG5pbXBvcnQgeyBGcmFtZXMgfSBmcm9tICcuL2ZyYW1lLmpzJ1xuXG5pbXBvcnQgS2V5TGl0ZXJhbCBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMva2V5X2xpdGVyYWwuanMnXG5cbmltcG9ydCBTdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL3N0YXRlbWVudHMuanMnXG5pbXBvcnQgSWRTdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL2lkLmpzJ1xuaW1wb3J0IEFzc2lnblN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvYXNzaWduLmpzJ1xuaW1wb3J0IFJldHVyblN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvcmV0dXJuLmpzJ1xuaW1wb3J0IENsYXNzU3RhdGVtZW50cyBmcm9tICcuL2dyYW1tYXIvc3RhdGVtZW50cy9jbGFzcy5qcydcbmltcG9ydCBDb25kaXRpb25TdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL2NvbmRpdGlvbnMuanMnXG5pbXBvcnQgVmFyU3RhdGVtZW50cyBmcm9tICcuL2dyYW1tYXIvc3RhdGVtZW50cy92YXIuanMnXG5pbXBvcnQgTG9vcFN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvbG9vcHMuanMnXG5cbmltcG9ydCBFeHByZXNzaW9ucyBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMvZXhwcmVzc2lvbnMuanMnXG5pbXBvcnQgQXJyYXlFeHByZXNzaW9ucyBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMvYXJyYXkuanMnXG5pbXBvcnQgRGljdEV4cHJlc3Npb25zIGZyb20gJy4vZ3JhbW1hci9leHByZXNzaW9ucy9kaWN0LmpzJ1xuaW1wb3J0IEZuRXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2ZuLmpzJ1xuaW1wb3J0IElkRXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2lkLmpzJ1xuaW1wb3J0IENsYXNzRXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2NsYXNzLmpzJ1xuXG5jbGFzcyBOb2RlIHtcblxuICBjb25zdHJ1Y3RvciAocGFyc2VyLCB0b2tlbiwgZGF0YSkge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyXG4gICAgdGhpcy50b2tlbiA9IHRva2VuXG4gICAgdGhpcy5faW5fY2xhc3MgPSBmYWxzZVxuICAgIHRoaXMuX2ZuX2xldmVsID0gMFxuICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwge31cbiAgfVxuXG4gIHRva2VuX3Byb3AgKG5hbWUpIHsgcmV0dXJuIHRoaXMudG9rZW4gPyB0aGlzLnRva2VuW25hbWVdIDogbnVsbCB9XG5cbiAgZ2V0IHZhbHVlICgpIHsgcmV0dXJuIHRoaXMudG9rZW5fcHJvcCgndmFsdWUnKSB9XG5cbiAgZ2V0IHR5cGUgKCkgeyByZXR1cm4gdGhpcy50b2tlbl9wcm9wKCd0eXBlJykgfVxuXG4gIGdldCBzdGFydCAoKSB7IHJldHVybiB0aGlzLnRva2VuX3Byb3AoJ3N0YXJ0JykgfVxuXG4gIGdldCBlbmQgKCkgeyByZXR1cm4gdGhpcy50b2tlbl9wcm9wKCdlbmQnKSB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7IHJldHVybiB0aGlzLnRva2VuX3Byb3AoJ2xlbmd0aCcpIH1cblxuICBpcyAoZSkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4uaXMoZSkgOiBmYWxzZSB9XG5cbiAgdG9TdHJpbmcgKCkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4udG9TdHJpbmcoKSA6ICcnIH1cblxufVxuXG5cbmNsYXNzIEVtcHR5Q2xhc3Mge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VyIGV4dGVuZHMgbWl4KEVtcHR5Q2xhc3MpLndpdGgoXG4gIEtleUxpdGVyYWwsXG5cbiAgU3RhdGVtZW50cyxcbiAgSWRTdGF0ZW1lbnRzLFxuICBBc3NpZ25TdGF0ZW1lbnRzLFxuICBSZXR1cm5TdGF0ZW1lbnRzLFxuICBDbGFzc1N0YXRlbWVudHMsXG4gIENvbmRpdGlvblN0YXRlbWVudHMsXG4gIFZhclN0YXRlbWVudHMsXG4gIExvb3BTdGF0ZW1lbnRzLFxuXG4gIEV4cHJlc3Npb25zLFxuICBBcnJheUV4cHJlc3Npb25zLFxuICBEaWN0RXhwcmVzc2lvbnMsXG4gIEZuRXhwcmVzc2lvbnMsXG4gIElkRXhwcmVzc2lvbnMsXG4gIENsYXNzRXhwcmVzc2lvbnNcbikge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAodG9rZW5zKSB7XG4gICAgdGhpcy5lcnJvcnMgPSAwXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgdGhpcy5ub2RlcyA9IFtdXG4gICAgdGhpcy5mcmFtZXMgPSBuZXcgRnJhbWVzKClcbiAgICB0aGlzLnByZXZfZnJhbWUgPSBudWxsXG4gICAgdGhpcy5pbl9jbGFzcyA9IGZhbHNlXG4gICAgdGhpcy5mbl9sZXZlbCA9IDBcbiAgICB0aGlzLnRva2VucyA9IHRva2VucyB8fCBbXVxuICB9XG5cbiAgdmFsaWRPZmZzZXQgKG9mZnNldCkgeyByZXR1cm4gb2Zmc2V0ID49IDAgJiYgb2Zmc2V0IDwgdGhpcy5sZW5ndGggfVxuXG4gIHRva2VuX2F0IChvZmZzZXQpIHsgcmV0dXJuIHRoaXMudmFsaWRPZmZzZXQob2Zmc2V0KSA/IHRoaXMudG9rZW5zW29mZnNldF0gOiBudWxsIH1cblxuICBnZXQgZW9zICgpIHsgcmV0dXJuIHRoaXMub2Zmc2V0ID49IHRoaXMubGVuZ3RoIH1cblxuICBnZXQgbGVuZ3RoICgpIHsgcmV0dXJuIHRoaXMudG9rZW5zLmxlbmd0aCB9XG5cbiAgZ2V0IHRva2VuICgpIHsgcmV0dXJuIHRoaXMudG9rZW5fYXQodGhpcy5vZmZzZXQpIH1cblxuICBza2lwIChlKSB7IHdoaWxlICh0aGlzLmlzKGUpICYmICF0aGlzLmVvcykgeyB0aGlzLm5leHQoKSB9IH1cblxuICBpcyAoZSkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4uaXMoZSkgOiBmYWxzZSB9XG5cbiAgZXhwZWN0IChlLCBuZXh0ID0gdHJ1ZSkge1xuICAgIGxldCByID0gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4uaXMoZSkgOiBmYWxzZVxuICAgIGlmIChyKSB7XG4gICAgICBpZiAobmV4dCkgeyB0aGlzLm5leHQoKSB9XG4gICAgfVxuICAgIGVsc2UgeyBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCBlLCAnZXhwZWN0ZWQnKSB9XG4gICAgcmV0dXJuIHJcbiAgfVxuXG4gIG1hdGNoIChvZmZzZXQsIG1hdGNoZXMpIHtcbiAgICBpZiAoIV8uaXNOdW1iZXIob2Zmc2V0KSkge1xuICAgICAgbWF0Y2hlcyA9IG9mZnNldFxuICAgICAgb2Zmc2V0ID0gdGhpcy5vZmZzZXRcbiAgICB9XG4gICAgbGV0IHRva2VucyA9IFtdXG4gICAgbGV0IG0gPSAwXG4gICAgd2hpbGUgKHRoaXMudmFsaWRPZmZzZXQob2Zmc2V0KSAmJiBtIDwgbWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5zW29mZnNldCsrXVxuICAgICAgaWYgKCF0b2tlbi5pcyhtYXRjaGVzW20rK10pKSB7IHJldHVybiBudWxsIH1cbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKVxuICAgIH1cbiAgICByZXR1cm4gdG9rZW5zLmxlbmd0aCA/IHRva2VucyA6IG51bGxcbiAgfVxuXG4gIHBlZWsgKGMgPSAxKSB7IHJldHVybiB0aGlzLnRva2VuX2F0KHRoaXMub2Zmc2V0ICsgYykgfVxuXG4gIG5leHQgKGMgPSAxKSB7XG4gICAgdGhpcy5vZmZzZXQgKz0gY1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBsb29wX3doaWxlIChmbiwgbWF0Y2hlcywgZW5kLCBlbmRfbmV4dCwgc2tpcCkge1xuICAgIGxldCBub2RlcyA9IFtdXG4gICAgaWYgKHNraXApIHsgdGhpcy5za2lwKHNraXApIH1cbiAgICB3aGlsZSAoIXRoaXMuZW9zICYmICghZW5kIHx8ICF0aGlzLmlzKGVuZCkpICYmICghbWF0Y2hlcyB8fCB0aGlzLm1hdGNoKG1hdGNoZXMpKSkge1xuICAgICAgbm9kZXMucHVzaChmbi5jYWxsKHRoaXMpKVxuICAgICAgaWYgKHNraXApIHsgdGhpcy5za2lwKHNraXApIH1cbiAgICB9XG4gICAgaWYgKGVuZCkgeyB0aGlzLmV4cGVjdChlbmQsIGVuZF9uZXh0KSB9XG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cblxuICBuZXh0X2V4cHJfbm9kZSAobGVmdCkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICBsZXQgZGF0YSA9IHt9XG4gICAgaWYgKGxlZnQpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBkYXRhID0geyBsZWZ0LCByaWdodDogdGhpcy5leHByKCkgfVxuICAgIH1cbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRva2VuLCBkYXRhKVxuICAgIGlmICghbGVmdCkgeyB0aGlzLm5leHQoKSB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIHJ1biAodG9rZW5zKSB7XG4gICAgdGhpcy5yZXNldCh0b2tlbnMpXG4gICAgdGhpcy5mcmFtZXMuc3RhcnQoJ2dsb2JhbHMnKVxuICAgIGxldCBub2RlcyA9IHRoaXMuc3RhdGVtZW50cygpXG4gICAgdGhpcy5mcmFtZXMuZW5kKClcbiAgICB0aGlzLm5vZGVzID0gbm9kZXNcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIGNvbnNvbGUuaW5mbygncGFyc2VyIGR1bXAnKVxuICAgIGNvbnNvbGUubG9nKHRoaXMubm9kZXMpXG4gICAgY29uc29sZS5sb2coJycpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3BhcnNlci5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IHZhciBGcmFtZVxuZXhwb3J0IHZhciBGcmFtZXNcbmV4cG9ydCB2YXIgRnJhbWVJdGVtXG5cbkZyYW1lcyA9IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gbnVsbFxuICB9XG5cbiAgc3RhcnQgKHR5cGUpIHsgdGhpcy5jdXJyZW50ID0gbmV3IEZyYW1lKHRoaXMsIHRoaXMuY3VycmVudCwgdHlwZSkgfVxuXG4gIGVuZCAoKSB7IHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudC5wYXJlbnQgfVxuXG4gIGFkZCAobm9kZSwgcGFyZW50LCBpdGVtX3R5cGUpIHsgcmV0dXJuIHRoaXMuY3VycmVudC5hZGQobm9kZSwgcGFyZW50LCBpdGVtX3R5cGUpIH1cblxuICBleGlzdHMgKG5hbWUsIGl0ZW1fdHlwZSkge1xuICAgIGxldCBjID0gdGhpcy5jdXJyZW50XG4gICAgd2hpbGUgKGMpIHtcbiAgICAgIGxldCBpID0gYy5leGlzdHMobmFtZSwgaXRlbV90eXBlKVxuICAgICAgaWYgKGkpIHtcbiAgICAgICAgcmV0dXJuIGlcbiAgICAgIH1cbiAgICAgIGMgPSBjLnBhcmVudFxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZm5fZXhpc3RzIChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhpc3RzKG5hbWUsICdmbicpXG4gIH1cblxuICBjbGFzc19leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2NsYXNzJylcbiAgfVxuXG4gIHZhcl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ3ZhcicpXG4gIH1cblxufVxuXG5cbkZyYW1lSXRlbSA9IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvciAoZnJhbWUsIHBhcmVudCwgbm9kZSwgaXRlbV90eXBlKSB7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICB0aGlzLml0ZW1fdHlwZSA9IGl0ZW1fdHlwZVxuICAgIHRoaXMubm9kZSA9IG5vZGVcbiAgfVxuXG4gIGdldCBkYXRhICgpIHsgcmV0dXJuIHRoaXMubm9kZS5kYXRhIH1cblxuICBnZXQgbmFtZSAoKSB7IHJldHVybiB0aGlzLm5vZGUudmFsdWUgfVxuXG4gIGdldCB0eXBlICgpIHsgcmV0dXJuIHRoaXMubm9kZS50eXBlIH1cblxuICBnZXQgaXNfdmFyICgpIHsgcmV0dXJuIHRoaXMuaXRlbV90eXBlID09PSAndmFyJyB9XG5cbiAgZ2V0IGlzX2NsYXNzICgpIHsgcmV0dXJuIHRoaXMuaXRlbV90eXBlID09PSAnY2xhc3MnIH1cblxuICBnZXQgaXNfZm4gKCkgeyByZXR1cm4gdGhpcy5pdGVtX3R5cGUgPT09ICdmbicgfVxuXG4gIGdldCBpc19sb2NhbCAoKSB7IHJldHVybiB0aGlzLmZyYW1lLmlzX2xvY2FsIH1cblxuICBnZXQgaXNfZ2xvYmFsICgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuaXNfZ2xvYmFsIH1cblxufVxuXG5cbkZyYW1lID0gY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yIChmcmFtZXMsIHBhcmVudCwgdHlwZSkge1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICB0aGlzLnR5cGUgPSB0eXBlXG4gICAgdGhpcy5pdGVtcyA9IFtdXG4gIH1cblxuICBnZXQgbmFtZSAoKSB7IHJldHVybiB0aGlzLnBhcmVudCA/ICckcycgOiAnJGcnIH1cblxuICBnZXQgaXNfbG9jYWwgKCkgeyByZXR1cm4gdGhpcy5wYXJlbnQgIT09IG51bGwgfVxuXG4gIGdldCBpc19nbG9iYWwgKCkgeyByZXR1cm4gdGhpcy5wYXJlbnQgPT09IG51bGwgfVxuXG4gIGFkZCAobm9kZSwgcGFyZW50LCBpdGVtX3R5cGUpIHtcbiAgICBsZXQgaSA9IG5ldyBGcmFtZUl0ZW0odGhpcywgcGFyZW50LCBub2RlLCBpdGVtX3R5cGUpXG4gICAgdGhpcy5pdGVtcy5wdXNoKGkpXG4gICAgbm9kZS5fZ2xvYmFsID0gdGhpcy5pc19nbG9iYWxcbiAgICByZXR1cm4gaVxuICB9XG5cbiAgZXhpc3RzIChuYW1lLCBpdGVtX3R5cGUpIHsgcmV0dXJuIF8uZmluZCh0aGlzLml0ZW1zLCBpdGVtX3R5cGUgPyB7IG5hbWUsIGl0ZW1fdHlwZSB9IDogeyBuYW1lIH0pIH1cblxuICBmbl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2ZuJylcbiAgfVxuXG4gIHZhcl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ3ZhcicpXG4gIH1cblxuICBjbGFzc19leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2NsYXNzJylcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZnJhbWUuanMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEtleUxpdGVyYWxzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAga2V5X2xpdGVyYWwgKCkge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICB0aGlzLmV4cGVjdCgna2V5JylcbiAgICBub2RlLmRhdGEuZXhwciA9IHRoaXMuZXhwcigpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMva2V5X2xpdGVyYWwuanMiLCJpbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGJsb2NrIChlbmQsIGVuZF9uZXh0ID0gdHJ1ZSwgYmxvY2tfdHlwZSA9IG51bGwpIHtcbiAgICBpZiAoYmxvY2tfdHlwZSkge1xuICAgICAgdGhpcy5mcmFtZXMuc3RhcnQoYmxvY2tfdHlwZSlcbiAgICB9XG4gICAgbGV0IG5vZGVzID0gdGhpcy5sb29wX3doaWxlKHRoaXMuc3RhdGVtZW50LCBudWxsLCBlbmQsIGVuZF9uZXh0LCAnZW9sJylcbiAgICBpZiAoYmxvY2tfdHlwZSkge1xuICAgICAgdGhpcy5mcmFtZXMuZW5kKClcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cblxuICBzdGF0ZW1lbnRzICgpIHsgcmV0dXJuIHRoaXMuYmxvY2soKSB9XG5cbiAgc2luZ2xlX3N0YXRlbWVudCAoKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIHRoaXMubmV4dCgpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIHN0YXRlbWVudCAoKSB7XG4gICAgaWYgKHRoaXMubWF0Y2goWydsZXQnLCAnaWQnXSkpIHsgcmV0dXJuIHRoaXMudmFyX3N0YXRlbWVudCgpIH0gLy8gdmFyaWFibGUgZGVmaW5pdGlvblxuICAgIGVsc2UgaWYgKHRoaXMubWF0Y2goWydpZHxpZF9maWVsZHx0aGlzX2ZpZWxkJywgJ2Fzc2lnbnxmbl9hc3NpZ24nXSkpIHsgcmV0dXJuIHRoaXMuYXNzaWduX3N0YXRlbWVudCgpIH0gLy8gdmFyaWFibGUgYXNzaWdubWVudFxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2lmJykpIHsgcmV0dXJuIHRoaXMuaWZfc3RhdGVtZW50KCkgfSAvLyBpZiBibG9ja1xuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2ZvcicpKSB7IHJldHVybiB0aGlzLmZvcl9zdGF0ZW1lbnQoKSB9IC8vIHdoaWxlIGJsb2NrXG4gICAgZWxzZSBpZiAodGhpcy5pcygnd2hpbGUnKSkgeyByZXR1cm4gdGhpcy53aGlsZV9zdGF0ZW1lbnQoKSB9IC8vIHdoaWxlIGJsb2NrXG4gICAgZWxzZSBpZiAodGhpcy5pcygncmV0dXJuJykpIHsgcmV0dXJuIHRoaXMucmV0dXJuX3N0YXRlbWVudCgpIH0gLy8gcmV0dXJuIGZyb20gZnVuY3Rpb25cbiAgICBlbHNlIGlmICh0aGlzLmlzKFsnYnJlYWsnLCAnY29udGludWUnXSkpIHsgcmV0dXJuIHRoaXMuc2luZ2xlX3N0YXRlbWVudCgpIH0gLy8gc2luZ2xlIHN0YXRlbWVudFxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2NsYXNzJykpIHsgcmV0dXJuIHRoaXMuY2xhc3Nfc3RhdGVtZW50KCkgfSAvLyBjbGFzcyBzdGF0ZW1lbnRcbiAgICBlbHNlIGlmICh0aGlzLmlzKFsnaWQnLCAnc3VwZXInXSkpIHsgcmV0dXJuIHRoaXMuaWRfc3RhdGVtZW50KCkgfSAvLyBmdW5jdGlvbiBjYWxsXG4gICAgZWxzZSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnc3ludGF4IGVycm9yJylcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvc3RhdGVtZW50cy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJZFN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBpZF9zdGF0ZW1lbnQgKGZpcnN0ID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLmlzKCdzdXBlcicpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdXBlcl9leHByKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pZF9leHByKGZpcnN0KVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9pZC5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQXNzaWduU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGFzc2lnbl9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCBub2RlID0gbnVsbFxuICAgIGxldCBpZCA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICh0aGlzLmlzKCdmbl9hc3NpZ24nKSkge1xuICAgICAgbm9kZSA9IHRoaXMuZm5fZXhwcihpZCwgdHJ1ZSlcbiAgICAgIGlkLl9mbiA9IHRydWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbiwgeyBpZCB9KVxuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIG5vZGUuZGF0YS5leHByID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgdGhpcy5mcmFtZXMuYWRkKGlkLCBudWxsLCBpZC5fZm4gPyAnZm4nIDogJ3ZhcicpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9hc3NpZ24uanMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFJldHVyblN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICByZXR1cm5fc3RhdGVtZW50ICgpIHtcbiAgICBsZXQgcCA9IGZhbHNlXG4gICAgbGV0IGVuZCA9ICdlb2x8ZW5kfGNsb3NlX3BhcmVuJ1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICBub2RlLmRhdGEuYXJncyA9IFtdXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7XG4gICAgICBwID0gdHJ1ZVxuICAgICAgZW5kID0gJ2Nsb3NlX3BhcmVuJ1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgaWYgKCFwIHx8ICF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICBub2RlLmRhdGEuYXJncyA9IHRoaXMuZXhwcnMoZW5kLCBmYWxzZSlcbiAgICB9XG4gICAgaWYgKHApIHtcbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvcmV0dXJuLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBDbGFzc1N0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBjbGFzc19saXN0ICgpIHsgcmV0dXJuIHRoaXMubG9vcF93aGlsZSh0aGlzLnNpbmdsZSwgWydpZCddLCAnZW9sJywgdHJ1ZSwgJ2NvbW1hJykgfVxuXG4gIGNsYXNzX3N0YXRlbWVudCAoKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgbGV0IF9leHRlbmRzID0gbnVsbFxuICAgIGxldCBpZCA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICh0aGlzLmlzKCc6JykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBfZXh0ZW5kcyA9IHRoaXMuY2xhc3NfbGlzdCgpXG4gICAgfVxuICAgIHRoaXMuZnJhbWVzLmFkZChpZCwgbnVsbCwgJ2NsYXNzJylcbiAgICB0aGlzLmluX2NsYXNzID0gdHJ1ZVxuICAgIGxldCBib2R5ID0gdGhpcy5ibG9jaygnZW5kJywgZmFsc2UsICdjbGFzcycpXG4gICAgdGhpcy5pbl9jbGFzcyA9IGZhbHNlXG4gICAgdGhpcy5leHBlY3QoJ2VuZCcpXG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IGlkLCBfZXh0ZW5kcywgYm9keSB9KVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2NsYXNzLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBDb25kaXRpb25TdGF0ZW1lbnRzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgaWZfc3RhdGVtZW50IChleHBlY3RfZW5kID0gdHJ1ZSkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGxldCBleHByX2Jsb2NrXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fcGFyZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIGV4cHJfYmxvY2sgPSB0aGlzLmV4cHIoKVxuICAgICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleHByX2Jsb2NrID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgbGV0IHRydWVfYm9keSA9IHRoaXMuYmxvY2soWydlbHNlJywgJ2VuZCddLCBmYWxzZSwgJ2lmJylcbiAgICBsZXQgZmFsc2VfYm9keSA9IHRoaXMuaXMoJ2Vsc2UnKSA/IHRoaXMuZWxzZV9zdGF0ZW1lbnQoZmFsc2UpIDogbnVsbFxuICAgIGlmIChleHBlY3RfZW5kKSB7IHRoaXMuZXhwZWN0KCdlbmQnKSB9XG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IGV4cHI6IGV4cHJfYmxvY2ssIHRydWVfYm9keSwgZmFsc2VfYm9keSB9KVxuICB9XG5cbiAgZWxzZV9zdGF0ZW1lbnQgKGV4cGVjdF9lbmQgPSB0cnVlKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIGxldCBub2RlID0gbnVsbFxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ2lmJykpIHtcbiAgICAgIG5vZGUgPSB0aGlzLmlmX3N0YXRlbWVudChmYWxzZSlcbiAgICAgIG5vZGUudG9rZW4gPSB0b2tlblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0b2tlbiwgeyBmYWxzZV9ib2R5OiB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ2Vsc2UnKSB9KVxuICAgIH1cbiAgICBpZiAoZXhwZWN0X2VuZCkgeyB0aGlzLmV4cGVjdCgnZW5kJykgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvY29uZGl0aW9ucy5qcyIsImltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi4vLi4vbGV4ZXIuanMnXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFZhclN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICB2YXJfc3RhdGVtZW50ICgpIHtcbiAgICBsZXQgbm9kZSA9IG51bGxcbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICghdGhpcy5wZWVrKCkuaXMoJ2Fzc2lnbnxmbl9hc3NpZ24nKSkge1xuICAgICAgbGV0IHQgPSBuZXcgVG9rZW4odGhpcy50b2tlbilcbiAgICAgIHQudmFsdWUgPSAnPSdcbiAgICAgIHQuX3R5cGUgPSAnYXNzaWduJ1xuICAgICAgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHQsIHsgaWQ6IHRoaXMudG9rZW4sIGV4cHI6IG51bGwgfSlcbiAgICAgIHRoaXMuZnJhbWVzLmFkZCh0aGlzLnRva2VuLCBudWxsLCAndmFyJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlID0gdGhpcy5hc3NpZ25fc3RhdGVtZW50KClcbiAgICB9XG4gICAgbm9kZS5fbGV0ID0gdHJ1ZVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvdmFyLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBMb29wU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGZvcl9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuXG4gICAgbGV0IHYgPSB0aGlzLnRva2VuXG4gICAgdGhpcy5leHBlY3QoJ2lkfHZhcicpXG4gICAgdGhpcy5leHBlY3QoJ2Fzc2lnbicpXG4gICAgbGV0IG1pbl9leHByID0gdGhpcy5leHByKClcbiAgICB0aGlzLmV4cGVjdCgndG8nKVxuICAgIGxldCBtYXhfZXhwciA9IHRoaXMuZXhwcigpXG4gICAgbGV0IHN0ZXBfZXhwciA9IG51bGxcbiAgICBpZiAodGhpcy5pcygnc3RlcCcpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgc3RlcF9leHByID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgbGV0IGJvZHkgPSB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ2ZvcicpXG4gICAgdGhpcy5leHBlY3QoJ2VuZCcpXG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IHYsIG1pbl9leHByLCBtYXhfZXhwciwgc3RlcF9leHByLCBib2R5IH0pXG4gIH1cblxuICB3aGlsZV9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGxldCBleHByX2Jsb2NrXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fcGFyZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIGV4cHJfYmxvY2sgPSB0aGlzLmV4cHIoKVxuICAgICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleHByX2Jsb2NrID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgbGV0IGJvZHkgPSB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ3doaWxlJylcbiAgICB0aGlzLmV4cGVjdCgnZW5kJylcbiAgICByZXR1cm4gbmV3IE5vZGUodGhpcywgdG9rZW4sIHsgZXhwcjogZXhwcl9ibG9jaywgYm9keSB9KVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2xvb3BzLmpzIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZXhwcnMgKGVuZCwgZW5kX25leHQpIHsgcmV0dXJuIHRoaXMubG9vcF93aGlsZSh0aGlzLmV4cHIsIG51bGwsIGVuZCwgZW5kX25leHQsICdjb21tYScpIH1cblxuICBleHByICgpIHtcbiAgICBsZXQgbm9kZSA9IHRoaXMuc2ltcGxlX2V4cHIoKVxuICAgIGlmIChub2RlKSB7XG4gICAgICBsZXQgdGVybSA9IHRoaXMudGVybV9leHByKG5vZGUpXG4gICAgICBpZiAodGVybSkgeyByZXR1cm4gdGVybSB9XG5cbiAgICAgIGxldCBmYWN0b3IgPSB0aGlzLmZhY3Rvcl9leHByKG5vZGUpXG4gICAgICBpZiAoZmFjdG9yKSB7IHJldHVybiBmYWN0b3IgfVxuXG4gICAgICBsZXQgY29uZGl0aW9uYWwgPSB0aGlzLmNvbmRpdGlvbmFsX2V4cHIobm9kZSlcbiAgICAgIGlmIChjb25kaXRpb25hbCkgeyByZXR1cm4gY29uZGl0aW9uYWwgfVxuXG4gICAgICBsZXQganVuY3Rpb24gPSB0aGlzLmp1bmN0aW9uX2V4cHIobm9kZSlcbiAgICAgIGlmIChqdW5jdGlvbikgeyByZXR1cm4ganVuY3Rpb24gfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgc2ltcGxlX2V4cHIgKCkge1xuICAgIGlmICh0aGlzLmlzKFsnbnVtYmVyJywgJ3N0cmluZycsICdjaGFyJ10pKSB7IHJldHVybiB0aGlzLm5leHRfZXhwcl9ub2RlKCkgfVxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2ZuX2Fzc2lnbicpKSB7IHJldHVybiB0aGlzLmZuX2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7IHJldHVybiB0aGlzLnN1Yl9leHByKCkgfVxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ29wZW5fYnJhY2tldCcpKSB7IHJldHVybiB0aGlzLmFycmF5X2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnb3Blbl9jdXJseScpKSB7IHJldHVybiB0aGlzLmRpY3RfZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKFsndGhpcycsICd0aGlzX2ZpZWxkJ10pKSB7IHJldHVybiB0aGlzLnRoaXNfZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKCdzdXBlcicpKSB7IHJldHVybiB0aGlzLnN1cGVyX2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnbmV3JykpIHsgcmV0dXJuIHRoaXMubmV3X2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnaWQnKSkgeyByZXR1cm4gdGhpcy5pZF9leHByKCkgfVxuICAgIGVsc2Uge1xuICAgICAgZXJyb3IodGhpcywgdGhpcy50b2tlbiwgJ251bWJlciwgc3RyaW5nLCB2YXJpYWJsZSwgdmFyaWFibGUgcGFyZW4gb3IgZnVuY3Rpb24gY2FsbC9leHByZXNzaW9uIGV4cGVjdGVkJylcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBzdWJfZXhwciAoKSB7XG4gICAgbGV0IG5vZGVzID0gW11cbiAgICBub2Rlcy5wdXNoKG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pKVxuICAgIHRoaXMuZXhwZWN0KCdvcGVuX3BhcmVuJylcbiAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgIG5vZGVzLnB1c2godGhpcy5leHByKCkpXG4gICAgfVxuICAgIG5vZGVzLnB1c2gobmV3IE5vZGUodGhpcywgdGhpcy50b2tlbikpXG4gICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxuXG4gIHRlcm1fZXhwciAobGVmdCkgeyByZXR1cm4gdGhpcy5pcygvXFwrfC0vKSA/IHRoaXMubmV4dF9leHByX25vZGUobGVmdCkgOiBudWxsIH1cblxuICBmYWN0b3JfZXhwciAobGVmdCkgeyByZXR1cm4gdGhpcy5pcygvXFwvfFxcKi8pID8gdGhpcy5uZXh0X2V4cHJfbm9kZShsZWZ0KSA6IG51bGwgfVxuXG4gIGNvbmRpdGlvbmFsX2V4cHIgKGxlZnQpIHsgcmV0dXJuIHRoaXMuaXMoLz58Pj18PHw8PXwhPXw8Pnw9PS8pID8gdGhpcy5uZXh0X2V4cHJfbm9kZShsZWZ0KSA6IG51bGwgfVxuXG4gIGp1bmN0aW9uX2V4cHIgKGxlZnQpIHsgcmV0dXJuIHRoaXMuaXMoLyZ8XFx8LykgPyB0aGlzLm5leHRfZXhwcl9ub2RlKGxlZnQpIDogbnVsbCB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9leHByZXNzaW9ucy5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQXJyYXlFeHByZXNzaW9ucyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGFycmF5X2V4cHIgKCkge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICBub2RlLmRhdGEuYXJncyA9IFtdXG4gICAgdGhpcy5leHBlY3QoJ29wZW5fYnJhY2tldCcpXG4gICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9icmFja2V0JykpIHtcbiAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5sb29wX3doaWxlKHRoaXMuZXhwciwgbnVsbCwgJ2Nsb3NlX2JyYWNrZXQnLCBmYWxzZSwgJ2NvbW1hfGVvbCcpXG4gICAgfVxuICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9icmFja2V0JylcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9hcnJheS5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgRGljdEV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZGljdF9leHByICgpIHtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgbm9kZS5kYXRhLmRlZiA9IFtdXG4gICAgdGhpcy5leHBlY3QoJ29wZW5fY3VybHknKVxuICAgIGlmICghdGhpcy5pcygnY2xvc2VfY3VybHknKSkge1xuICAgICAgbm9kZS5kYXRhLmRlZiA9IHRoaXMubG9vcF93aGlsZSh0aGlzLmtleV9saXRlcmFsLCBbJ2tleSddLCAnY2xvc2VfY3VybHknLCBmYWxzZSwgJ2NvbW1hfGVvbCcpXG4gICAgfVxuICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9jdXJseScpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZGljdC5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgRm5FeHByZXNzaW9ucyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGZuX2V4cHIgKGlkLCBzdGF0ZW1lbnQgPSBmYWxzZSkge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbiwgeyBpZCB9KVxuICAgIG5vZGUuZGF0YS5hcmdzID0gW11cbiAgICBpZiAoc3RhdGVtZW50KSB7XG4gICAgICBub2RlLl9pbl9jbGFzcyA9IHRoaXMuaW5fY2xhc3NcbiAgICAgIG5vZGUuX2ZuX2xldmVsID0gdGhpcy5mbl9sZXZlbCsrXG4gICAgfVxuICAgIHRoaXMubmV4dCgpXG4gICAgdGhpcy5mcmFtZXMuc3RhcnQoJ2ZuJylcbiAgICBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5mbl9hcmdzX2RlZigpXG4gICAgICB9XG4gICAgICB0aGlzLmV4cGVjdCgnY2xvc2VfcGFyZW4nKVxuICAgIH1cbiAgICBub2RlLmRhdGEuYm9keSA9IHRoaXMuYmxvY2soJ2VuZCcsIGZhbHNlKVxuICAgIHRoaXMuZnJhbWVzLmVuZCgpXG4gICAgdGhpcy5leHBlY3QoJ2VuZCcpXG4gICAgaWYgKHN0YXRlbWVudCkge1xuICAgICAgdGhpcy5mbl9sZXZlbC0tXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBmbl9hcmcgKCkge1xuICAgIHRoaXMuZnJhbWVzLmFkZCh0aGlzLnRva2VuLCBudWxsLCAndmFyJylcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAodGhpcy5pcygnYXNzaWduJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBub2RlLmRhdGEuYXNzaWduID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGZuX2FyZ3NfZGVmICgpIHsgcmV0dXJuIHRoaXMubG9vcF93aGlsZSh0aGlzLmZuX2FyZywgWydpZCddLCAnY2xvc2VfcGFyZW4nLCBmYWxzZSwgJ2NvbW1hfGVvbCcpIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2ZuLmpzIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzLmpzJ1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJZEV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgaWRfZXhwciAoZmlyc3QgPSB0cnVlKSB7XG4gICAgaWYgKGZpcnN0ICYmICF0aGlzLmZyYW1lcy5leGlzdHModGhpcy50b2tlbi52YWx1ZSkpIHtcbiAgICAgIGVycm9yKHRoaXMsIHRoaXMudG9rZW4sICd1bmRlY2xhcmVkIGlkZW50aWZpZXInKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fYnJhY2tldCcpKSB7XG4gICAgICBpZiAoIW5vZGUuZGF0YS5maWVsZHMpIHtcbiAgICAgICAgbm9kZS5kYXRhLmZpZWxkcyA9IFtdXG4gICAgICB9XG4gICAgICBub2RlLmRhdGEuZmllbGRzLnB1c2godGhpcy5hcnJheV9leHByKCkpXG4gICAgfVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBub2RlLnRva2VuLl90eXBlID0gJ2ZuJ1xuICAgICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5leHBycygnY2xvc2VfcGFyZW4nLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHdoaWxlICh0aGlzLmlzKFsnaWRfZmllbGQnLCAnb3Blbl9icmFja2V0J10pKSB7XG4gICAgICBpZiAoIW5vZGUuZGF0YS5maWVsZHMpIHtcbiAgICAgICAgbm9kZS5kYXRhLmZpZWxkcyA9IFtdXG4gICAgICB9XG4gICAgICBub2RlLmRhdGEuZmllbGRzLnB1c2godGhpcy5pZF9maWVsZCgpKVxuICAgICAgdGhpcy5za2lwKCdjb21tYScpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBpZF9maWVsZCAoKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIG5vZGUuZGF0YS5hcmdzID0gW11cbiAgICBub2RlLnRva2VuLl90eXBlID0gJ2lkJ1xuICAgIG5vZGUuX2ZpZWxkID0gdHJ1ZVxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fYnJhY2tldCcpKSB7XG4gICAgICBpZiAoIW5vZGUuZGF0YS5maWVsZHMpIHtcbiAgICAgICAgbm9kZS5kYXRhLmZpZWxkcyA9IFtdXG4gICAgICB9XG4gICAgICBub2RlLmRhdGEuZmllbGRzLnB1c2godGhpcy5hcnJheV9leHByKCkpXG4gICAgfVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBub2RlLnRva2VuLl90eXBlID0gJ2ZuJ1xuICAgICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5leHBycygnY2xvc2VfcGFyZW4nLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2lkLmpzIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIENsYXNzRXhwcmVzc2lvbnMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBuZXdfZXhwciAoKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgbGV0IGlkID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKCF0aGlzLmZyYW1lcy5leGlzdHMoaWQudmFsdWUsICdjbGFzcycpKSB7XG4gICAgICBlcnJvcih0aGlzLCBpZCwgJ3VuZGVjbGFyZWQgY2xhc3MnKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgbGV0IGFyZ3MgPSBbXVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgICAgYXJncyA9IHRoaXMuZXhwcnMoJ2Nsb3NlX3BhcmVuJywgZmFsc2UpXG4gICAgICB9XG4gICAgICB0aGlzLmV4cGVjdCgnY2xvc2VfcGFyZW4nKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IE5vZGUodGhpcywgdG9rZW4sIHsgaWQsIGFyZ3MgfSlcbiAgfVxuXG4gIHRoaXNfZXhwciAoKSB7XG4gICAgaWYgKCF0aGlzLmluX2NsYXNzKSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnQCBjYW5ub3QgYmUgdXNlZCBvdXRzaWRlIGNsYXNzIGRlZmluaXRpb24nKVxuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICh0aGlzLmlzKCd0aGlzJykpIHtcbiAgICAgIHJldHVybiB0aGlzLm5leHRfZXhwcl9ub2RlKClcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygndGhpc19maWVsZCcpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pZF9leHByKGZhbHNlKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgc3VwZXJfZXhwciAoKSB7XG4gICAgaWYgKCF0aGlzLmluX2NsYXNzKSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnc3VwZXIgY2Fubm90IGJlIHVzZWQgb3V0c2lkZSBjbGFzcyBkZWZpbml0aW9uJylcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pZF9leHByKGZhbHNlKVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9jbGFzcy5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IFRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy90ZW1wbGF0ZXMuanMnXG5pbXBvcnQgQ29kZVRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9jb2RlLmpzJ1xuaW1wb3J0IEJsb2NrVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2Jsb2NrLmpzJ1xuaW1wb3J0IFN0YXRlbWVudFRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9zdGF0ZW1lbnRzLmpzJ1xuaW1wb3J0IEV4cHJlc3Npb25UZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvZXhwcmVzc2lvbnMuanMnXG5pbXBvcnQgUHJpbWl0aXZlVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL3ByaW1pdGl2ZXMuanMnXG5pbXBvcnQgT3BlcmF0b3JUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvb3BlcmF0b3JzLmpzJ1xuaW1wb3J0IElkVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2lkLmpzJ1xuaW1wb3J0IENsYXNzVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2NsYXNzLmpzJ1xuaW1wb3J0IEZuVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2ZuLmpzJ1xuaW1wb3J0IEFycmF5VGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2FycmF5LmpzJ1xuaW1wb3J0IERpY3RUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvZGljdC5qcydcbmltcG9ydCBBc3NpZ25UZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvYXNzaWduLmpzJ1xuXG5jbGFzcyBFbXB0eUNsYXNzIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zcGlsZXIgZXh0ZW5kcyBtaXgoRW1wdHlDbGFzcykud2l0aChcbiAgVGVtcGxhdGVzLFxuICBDb2RlVGVtcGxhdGVzLFxuXG4gIEJsb2NrVGVtcGxhdGVzLFxuICBTdGF0ZW1lbnRUZW1wbGF0ZXMsXG4gIEV4cHJlc3Npb25UZW1wbGF0ZXMsXG5cbiAgUHJpbWl0aXZlVGVtcGxhdGVzLFxuICBPcGVyYXRvclRlbXBsYXRlcyxcbiAgSWRUZW1wbGF0ZXMsXG5cbiAgQ2xhc3NUZW1wbGF0ZXMsXG4gIEZuVGVtcGxhdGVzLFxuXG4gIEFycmF5VGVtcGxhdGVzLFxuICBEaWN0VGVtcGxhdGVzLFxuXG4gIEFzc2lnblRlbXBsYXRlc1xuKSB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIGdldCBsZW5ndGggKCkgeyByZXR1cm4gdGhpcy5saW5lcy5sZW5ndGggfVxuXG4gIGdldCBlb3MgKCkgeyByZXR1cm4gdGhpcy5vZmZzZXQgPj0gdGhpcy5ub2Rlcy5sZW5ndGggfVxuXG4gIGdldCBub2RlICgpIHsgcmV0dXJuIHRoaXMubm9kZV9hdCh0aGlzLm9mZnNldCkgfVxuXG4gIHZhbGlkT2Zmc2V0IChvZmZzZXQpIHsgcmV0dXJuIG9mZnNldCA+PSAwICYmIG9mZnNldCA8IHRoaXMubm9kZXMubGVuZ3RoIH1cblxuICBub2RlX2F0IChvZmZzZXQpIHsgcmV0dXJuIHRoaXMudmFsaWRPZmZzZXQob2Zmc2V0KSA/IHRoaXMubm9kZXNbb2Zmc2V0XSA6IG51bGwgfVxuXG4gIHBlZWsgKGMgPSAxKSB7IHJldHVybiB0aGlzLm5vZGVfYXQodGhpcy5vZmZzZXQgKyBjKSB9XG5cbiAgbmV4dCAoYyA9IDEpIHsgdGhpcy5vZmZzZXQgKz0gYyB9XG5cbiAgd3JpdGUgKC4uLnZhbHVlcykgeyB0aGlzLmxpbmUgKz0gdmFsdWVzLmpvaW4oJycpIH1cblxuICB3cml0ZWxuICguLi52YWx1ZXMpIHtcbiAgICB0aGlzLndyaXRlKC4uLnZhbHVlcylcbiAgICB0aGlzLmxpbmVzID0gdGhpcy5saW5lcy5jb25jYXQodGhpcy5saW5lLnNwbGl0KCdcXG4nKSlcbiAgICB0aGlzLmxpbmUgPSAnJ1xuICB9XG5cbiAgcmVzZXQgKG5vZGVzKSB7XG4gICAgdGhpcy5lcnJvcnMgPSAwXG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzIHx8IFtdXG4gICAgdGhpcy5saW5lcyA9IFtdXG4gICAgdGhpcy5saW5lID0gJydcbiAgICB0aGlzLm9mZnNldCA9IDBcbiAgICB0aGlzLmNvZGUgPSAnJ1xuICAgIHRoaXMuaW5kZW50X2xldmVsID0gMFxuICB9XG5cbiAgY29tbWEgKG5vZGVzKSB7XG4gICAgbGV0IGEgPSBbXVxuICAgIGZvciAobGV0IG4gb2Ygbm9kZXMpIHtcbiAgICAgIGEucHVzaChuIGluc3RhbmNlb2YgTm9kZSA/IHRoaXMuZXhwcihuKSA6IG4pXG4gICAgfVxuICAgIHJldHVybiBhLmpvaW4oJywgJylcbiAgfVxuXG4gIGxuIChzdHIpIHsgcmV0dXJuIHN0ciArICghXy5lbmRzV2l0aChzdHIsICdcXG4nKSA/ICdcXG4nIDogJycpIH1cblxuICBpbmRlbnQgKHN0cikgeyByZXR1cm4gXy5wYWRTdGFydCgnJywgdGhpcy5pbmRlbnRfbGV2ZWwgKiAyKSArIHN0ciB9XG5cbiAgc3RyICh2YWx1ZSkgeyByZXR1cm4gJ1xcJycgKyB2YWx1ZS5yZXBsYWNlKC8nL2csICdcXCcnKSArICdcXCcnIH1cblxuICBydW4gKG5vZGVzKSB7XG4gICAgdGhpcy5yZXNldChub2RlcylcbiAgICB0aGlzLmNvZGVfc3RhcnQoKVxuICAgIHdoaWxlICghdGhpcy5lb3MpIHtcbiAgICAgIHRoaXMud3JpdGVsbih0aGlzLnN0YXRlbWVudCh0aGlzLm5vZGUpKVxuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgdGhpcy5jb2RlX2VuZCgpXG4gICAgdGhpcy5jb2RlID0gdGhpcy5saW5lcy5qb2luKCdcXG4nKVxuICAgIHJldHVybiB0aGlzLmNvZGVcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIGNvbnNvbGUuaW5mbygndHJhbnNwaWxlciBkdW1wJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvZGUpXG4gICAgY29uc29sZS5sb2coJycpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RyYW5zcGlsZXIuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICBpZiAoXy5pc1N0cmluZyhub2RlKSkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZV90ZW1wbGF0ZShub2RlKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKCdmbicpKSB7XG4gICAgICByZXR1cm4gdGhpcy5mbl9jYWxsX3RlbXBsYXRlKG5vZGUpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2ZuX2Fzc2lnbicpKSB7XG4gICAgICByZXR1cm4gdGhpcy5mbl9hc3NpZ25fdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnb3Blbl9icmFja2V0JykpIHtcbiAgICAgIHJldHVybiB0aGlzLmFycmF5X3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoJ29wZW5fY3VybHknKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGljdF90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKFsnbWF0aCcsICdsb2dpYycsICdjb21wJ10pKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcGVyYXRvcl90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKFsndGhpcycsICd0aGlzX2ZpZWxkJ10pKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGlzX3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoJ25ldycpKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZXdfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcyhbJ2NoYXInLCAnc3RyaW5nJ10pKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJpbmdfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnaWQnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuaWRfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZV90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy90ZW1wbGF0ZXMuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQ29kZVRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGNvZGVfc3RhcnRfdGVtcGxhdGUgKCkge1xuICAgIHRoaXMud3JpdGVsbignKGZ1bmN0aW9uICgpIHsnKVxuICAgIHRoaXMuaW5kZW50X2xldmVsKytcbiAgICB0aGlzLndyaXRlbG4oJ1xcJ3VzZSBzdHJpY3RcXCc7JylcbiAgICB0aGlzLndyaXRlbG4oKVxuICB9XG5cbiAgY29kZV9lbmRfdGVtcGxhdGUgKCkge1xuICAgIHRoaXMud3JpdGVsbignfSkoKTsnKVxuICAgIHRoaXMuaW5kZW50X2xldmVsLS1cbiAgICB0aGlzLndyaXRlbG4oKVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NvZGUuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQmxvY2tUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBibG9ja190ZW1wbGF0ZSAobm9kZSkge1xuICAgIGxldCBzdHIgPSB0aGlzLmxuKCd7JylcblxuICAgIHRoaXMuaW5kZW50X2xldmVsKytcblxuICAgIGlmIChfLmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAobGV0IG4gb2Ygbm9kZSkge1xuICAgICAgICBzdHIgKz0gdGhpcy5zdGF0ZW1lbnRfdGVtcGxhdGUobilcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzdHIgPSB0aGlzLnN0YXRlbWVudF90ZW1wbGF0ZShub2RlKVxuICAgIH1cblxuICAgIHRoaXMuaW5kZW50X2xldmVsLS1cblxuICAgIHN0ciArPSB0aGlzLmxuKHRoaXMuaW5kZW50KCd9JykpXG5cbiAgICByZXR1cm4gc3RyXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvYmxvY2suanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgU3RhdGVtZW50VGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgc3RhdGVtZW50X3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgbGV0IHN0ciA9ICcnXG5cbiAgICBpZiAoXy5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKGxldCBuIG9mIG5vZGUpIHtcbiAgICAgICAgc3RyICs9IHRoaXMuc3RhdGVtZW50KG4pXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIGxldCBkID0gbm9kZS5kYXRhIHx8IHt9XG4gICAgICBsZXQgdCA9IHt9XG5cbiAgICAgIGlmIChub2RlLmlzKFsnYXNzaWduJywgJ2ZuX2Fzc2lnbiddKSkge1xuICAgICAgICB0ID0gdGhpcy5hc3NpZ24obm9kZSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2ZuJykpIHtcbiAgICAgICAgdCA9IHRoaXMuZm5fY2FsbChub2RlLCB0cnVlKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnaWYnKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICdpZiAoI3tleHByfSkgI3t0cnVlX2JvZHl9I3tmYWxzZV9ib2R5fScsXG4gICAgICAgICAgZGF0OiB7XG4gICAgICAgICAgICBleHByOiB0aGlzLmV4cHIoZC5leHByKSxcbiAgICAgICAgICAgIHRydWVfYm9keTogdGhpcy5ibG9jayhkLnRydWVfYm9keSksXG4gICAgICAgICAgICBmYWxzZV9ib2R5OiB0aGlzLnN0YXRlbWVudChkLmZhbHNlX2JvZHkpLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnZWxzZScpKSB7XG4gICAgICAgIGlmIChkLmV4cHIpIHsgLy8gZWxzZSBpZlxuICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICB0bXBsOiAnZWxzZSBpZiAoI3tleHByfSkgI3t0cnVlX2JvZHl9I3tmYWxzZV9ib2R5fScsXG4gICAgICAgICAgICBkYXQ6IHtcbiAgICAgICAgICAgICAgZXhwcjogdGhpcy5leHByKGQuZXhwciksXG4gICAgICAgICAgICAgIHRydWVfYm9keTogdGhpcy5ibG9jayhkLnRydWVfYm9keSksXG4gICAgICAgICAgICAgIGZhbHNlX2JvZHk6IHRoaXMuc3RhdGVtZW50KGQuZmFsc2VfYm9keSksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICB0bXBsOiAnZWxzZSAje2ZhbHNlX2JvZHl9JyxcbiAgICAgICAgICAgIGRhdDogeyBmYWxzZV9ib2R5OiB0aGlzLmJsb2NrKGQuZmFsc2VfYm9keSkgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnd2hpbGUnKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICd3aGlsZSAoI3tleHByfSkgI3tib2R5fScsXG4gICAgICAgICAgZGF0OiB7XG4gICAgICAgICAgICBleHByOiB0aGlzLmV4cHIoZC5leHByKSxcbiAgICAgICAgICAgIGJvZHk6IHRoaXMuYmxvY2soZC5ib2R5KSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2ZvcicpKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgdG1wbDogJ2ZvciAobGV0ICN7dn0gPSAje21pbl9leHByfTsgI3t2fSA8ICN7bWF4X2V4cHJ9OyAje3Z9ICs9ICN7c3RlcF9leHByfSkgI3tib2R5fScsXG4gICAgICAgICAgZGF0OiB7XG4gICAgICAgICAgICB2OiBkLnYudmFsdWUsXG4gICAgICAgICAgICBtaW5fZXhwcjogdGhpcy5leHByKGQubWluX2V4cHIpLFxuICAgICAgICAgICAgbWF4X2V4cHI6IHRoaXMuZXhwcihkLm1heF9leHByKSxcbiAgICAgICAgICAgIHN0ZXBfZXhwcjogZC5zdGVwX2V4cHIgPyB0aGlzLmV4cHIoZC5zdGVwX2V4cHIpIDogJzEnLFxuICAgICAgICAgICAgYm9keTogdGhpcy5ibG9jayhkLmJvZHkpLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygncmV0dXJuJykpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICB0bXBsOiAncmV0dXJuICN7YXJnc30nLFxuICAgICAgICAgIGRhdDogeyBhcmdzOiB0aGlzLmV4cHIoZC5hcmdzLCAnLCAnKSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUuaXMoWydicmVhaycsICdjb250aW51ZSddKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICcje3dvcmR9JyxcbiAgICAgICAgICBkYXQ6IHsgd29yZDogbm9kZS52YWx1ZSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2NsYXNzJykpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICB0bXBsOiAnY2xhc3MgI3tuYW1lfSN7X2V4dGVuZHN9ICN7Ym9keX0nLFxuICAgICAgICAgIGRhdDoge1xuICAgICAgICAgICAgbmFtZTogZC5pZC52YWx1ZSxcbiAgICAgICAgICAgIF9leHRlbmRzOiBkLl9leHRlbmRzID8gJyBleHRlbmRzICcgKyB0aGlzLmV4cHIoZC5fZXh0ZW5kcywgJywgJykgOiAnJyxcbiAgICAgICAgICAgIGJvZHk6IHRoaXMuYmxvY2soZC5ib2R5KSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RyID0gXy50ZW1wbGF0ZSh0LnRtcGwpKHQuZGF0KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxuKHRoaXMuaW5kZW50KHN0cikpXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvc3RhdGVtZW50cy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBFeHByZXNzaW9uVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZXhwcl90ZW1wbGF0ZSAobm9kZSwgc2VwYXJhdG9yKSB7XG4gICAgbGV0IHN0ciA9ICcnXG5cbiAgICBpZiAoXy5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBsZXQgYSA9IFtdXG4gICAgICBmb3IgKGxldCBuIG9mIG5vZGUpIHtcbiAgICAgICAgYS5wdXNoKHRoaXMuZXhwcihuKSlcbiAgICAgIH1cbiAgICAgIHN0ciA9IGEuam9pbihzZXBhcmF0b3IgfHwgJycpXG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICBsZXQgZCA9IG5vZGUgJiYgbm9kZS5kYXRhIHx8IHt9XG4gICAgICBsZXQgdCA9IG5vZGUgPyB0aGlzLnRlbXBsYXRlKG5vZGUsIGQpIDogeyB0bXBsOiAndW5kZWZpbmVkJywgZGF0OiB7fSB9XG4gICAgICBzdHIgPSBfLnRlbXBsYXRlKHQudG1wbCkodC5kYXQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0clxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2V4cHJlc3Npb25zLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFByaW1pdGl2ZVRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIHN0cmluZ190ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnI3t2YWx1ZX0nLFxuICAgICAgZGF0OiB7IHZhbHVlOiB0aGlzLnN0cihub2RlLnZhbHVlKSB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3ByaW1pdGl2ZXMuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgT3BlcmF0b3JUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBvcGVyYXRvcl90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnI3tsZWZ0fSAje29wfSAje3JpZ2h0fScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgb3A6IG5vZGUudmFsdWUsXG4gICAgICAgIGxlZnQ6IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmxlZnQpLFxuICAgICAgICByaWdodDogdGhpcy5leHByX3RlbXBsYXRlKGQucmlnaHQpLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9vcGVyYXRvcnMuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgSWRUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBub2RlX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje25vZGV9JyxcbiAgICAgIGRhdDogeyBub2RlIH1cbiAgICB9XG4gIH1cblxuICBpZF90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnI3tmaWVsZH0je3ZhbHVlfSN7ZmllbGRzfSN7YXNzaWdufScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgZmllbGQ6IG5vZGUuX2ZpZWxkID8gJy4nIDogJycsXG4gICAgICAgIHZhbHVlOiBub2RlLnZhbHVlLFxuICAgICAgICBmaWVsZHM6IGQuZmllbGRzID8gdGhpcy5leHByX3RlbXBsYXRlKGQuZmllbGRzLCAnJykgOiAnJyxcbiAgICAgICAgYXNzaWduOiBkLmFzc2lnbiA/ICcgPSAnICsgdGhpcy5leHByX3RlbXBsYXRlKGQuYXNzaWduLCAnJykgOiAnJyxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YWx1ZV90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnI3t2YWx1ZX0nLFxuICAgICAgZGF0OiB7IHZhbHVlOiBub2RlLnZhbHVlIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvaWQuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQ2xhc3NUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICB0aGlzX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICd0aGlzI3tkb3R9I3tmaWVsZH0je2ZpZWxkc30nLFxuICAgICAgZGF0OiB7XG4gICAgICAgIGRvdDogbm9kZS5pcygndGhpc19maWVsZCcpID8gJy4nIDogJycsXG4gICAgICAgIGZpZWxkOiBub2RlLmlzKCd0aGlzX2ZpZWxkJykgPyBub2RlLnZhbHVlIDogJycsXG4gICAgICAgIGZpZWxkczogZC5maWVsZHMgPyB0aGlzLmV4cHJfdGVtcGxhdGUoZC5maWVsZHMsICcnKSA6ICcnLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld190ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnbmV3ICN7aWR9KCN7YXJnc30pJyxcbiAgICAgIGRhdDoge1xuICAgICAgICBpZDogZC5pZC52YWx1ZSxcbiAgICAgICAgYXJnczogdGhpcy5leHByX3RlbXBsYXRlKGQuYXJncywgJywgJyksXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NsYXNzLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEZuVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZm5fZGVmIChhcmdzLCBib2R5LCBpbl9jbGFzcykge1xuICAgIHJldHVybiBfLnRlbXBsYXRlKCcje2ZufSgje2FyZ3N9KSAje2JvZHl9Jykoe1xuICAgICAgZm46ICFpbl9jbGFzcyA/ICdmdW5jdGlvbiAnIDogJycsXG4gICAgICBhcmdzOiB0aGlzLmV4cHJfdGVtcGxhdGUoYXJncywgJywgJyksXG4gICAgICBib2R5OiB0aGlzLmJsb2NrX3RlbXBsYXRlKGJvZHkpLFxuICAgIH0pXG4gIH1cblxuICBmbl9jYWxsX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgbGV0IHQgPSB7fVxuICAgIGlmIChub2RlKSB7XG4gICAgICBsZXQgZCA9IG5vZGUuZGF0YSB8fCB7fVxuICAgICAgdCA9IHtcbiAgICAgICAgdG1wbDogJyN7ZmllbGR9I3tmbn0oI3thcmdzfSknLFxuICAgICAgICBkYXQ6IHtcbiAgICAgICAgICBmaWVsZDogbm9kZS5fZmllbGQgPyAnLicgOiAnJyxcbiAgICAgICAgICBmbjogbm9kZS52YWx1ZSxcbiAgICAgICAgICBhcmdzOiB0aGlzLmV4cHJfdGVtcGxhdGUoZC5hcmdzLCAnLCAnKSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdFxuICB9XG5cbiAgZm5fYXNzaWduX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje2ZufScsXG4gICAgICBkYXQ6IHsgZm46IHRoaXMuZm5fZGVmKGQuYXJncywgZC5ib2R5KSB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2ZuLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEFycmF5VGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgYXJyYXlfdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG1wbDogJ1sje2FyZ3N9XSN7ZmllbGRzfScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgYXJnczogdGhpcy5leHByX3RlbXBsYXRlKGQuYXJncywgJywgJyksXG4gICAgICAgIGZpZWxkczogZC5maWVsZHMgPyB0aGlzLmV4cHJfdGVtcGxhdGUoZC5maWVsZHMsICcnKSA6ICcnLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9hcnJheS5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBEaWN0VGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZGljdF90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIGxldCBkZWYgPSBfLm1hcChkLmRlZiwgZiA9PiBfLnRlbXBsYXRlKCcje3ZhbHVlfTogI3tleHByfScpKHsgdmFsdWU6IGYudmFsdWUsIGV4cHI6IHRoaXMuZXhwcl90ZW1wbGF0ZShmLmRhdGEuZXhwcikgfSkpXG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICd7I3tkZWZ9fSN7ZmllbGRzfScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgZGVmOiB0aGlzLmV4cHJfdGVtcGxhdGUoZGVmLCAnLCAnKSxcbiAgICAgICAgZmllbGRzOiBkLmZpZWxkcyA/IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmZpZWxkcywgJycpIDogJydcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZGljdC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBBc3NpZ25UZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBhc3NpZ25fdGVtcGxhdGUgKG5vZGUpIHtcbiAgICBsZXQgdCA9IHt9XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGxldCBkID0gbm9kZS5kYXRhIHx8IHt9XG5cbiAgICAgIGxldCBpZCA9IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmlkKVxuICAgICAgbGV0IF9sZXQgPSBub2RlLl9sZXQgPyAnbGV0ICcgOiAnJ1xuICAgICAgbGV0IGV4cHJcbiAgICAgIGxldCBvcFxuXG4gICAgICBpZiAobm9kZS5pcygnYXNzaWduJykpIHtcbiAgICAgICAgb3AgPSAnICcgKyBub2RlLnZhbHVlICsgJyAnXG4gICAgICAgIGV4cHIgPSB0aGlzLmV4cHJfdGVtcGxhdGUoZC5leHByKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnZm5fYXNzaWduJykpIHtcbiAgICAgICAgb3AgPSAhbm9kZS5faW5fY2xhc3MgfHwgbm9kZS5fZm5fbGV2ZWwgPiAwID8gJyA9ICcgOiAnICdcbiAgICAgICAgZXhwciA9IHRoaXMuZm5fZGVmKGQuYXJncywgZC5ib2R5LCBub2RlLl9pbl9jbGFzcyAmJiBub2RlLl9mbl9sZXZlbCA9PT0gMClcbiAgICAgIH1cblxuICAgICAgdCA9IHtcbiAgICAgICAgdG1wbDogJyN7X2xldH0je2lkfSN7b3B9I3tleHByfScsXG4gICAgICAgIGRhdDogeyBfbGV0LCBpZCwgb3AsIGV4cHIgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdFxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2Fzc2lnbi5qcyIsImltcG9ydCBoZXh5IGZyb20gJ2hleHknXG5pbXBvcnQgeyBoZXggfSBmcm9tICcuLi9nbG9iYWxzLmpzJ1xuXG5leHBvcnQgY29uc3QgZGF0YV90eXBlX3NpemVzID0ge1xuICBpODogMSxcbiAgczg6IDEsXG4gIGkxNjogMixcbiAgczE2OiAyLFxuICBpMzI6IDQsXG4gIHMzMjogNCxcbiAgZjMyOiA0LFxuICBzdHI6IDY0LFxufVxuXG5leHBvcnQgY29uc3QgZGF0YV90eXBlX2ZucyA9IHtcbiAgaTg6ICdVaW50OCcsXG4gIHM4OiAnSW50OCcsXG4gIGkxNjogJ1VpbnQxNicsXG4gIHMxNjogJ0ludDE2JyxcbiAgaTMyOiAnVWludDMyJyxcbiAgczMyOiAnSW50MzInLFxuICBmMzI6ICdGbG9hdDMyJyxcbn1cblxuZXhwb3J0IHZhciBkYXRhX3R5cGVfc2l6ZSA9IHR5cGUgPT4gXy5pc051bWJlcih0eXBlKSA/IHR5cGUgOiBkYXRhX3R5cGVfc2l6ZXNbdHlwZV1cblxuZXhwb3J0IGNsYXNzIE1lbW9yeSB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICB0aGlzLl9zaXplID0gbWFpbi5kZWZhdWx0cygnbWVtb3J5LnNpemUnKVxuICAgIHRoaXMuX3RvcCA9IDBcbiAgICB0aGlzLl9ib3R0b20gPSB0aGlzLl90b3AgKyB0aGlzLl9zaXplIC0gMVxuXG4gICAgdGhpcy5fYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuX3NpemUpXG5cbiAgICB0aGlzLl9kYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fYnVmZmVyKVxuXG4gICAgdGhpcy5fdmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLl9idWZmZXIpXG4gIH1cblxuICB0aWNrICh0KSB7XG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXIoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fdmlldyA9IG51bGxcbiAgICB0aGlzLl9kYXRhID0gbnVsbFxuICAgIHRoaXMuX2J1ZmZlciA9IG51bGxcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuXG4gIGdldCBidWZmZXIgKCkgeyByZXR1cm4gdGhpcy5fYnVmZmVyIH1cbiAgZ2V0IGRhdGEgKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9XG4gIGdldCB2aWV3ICgpIHsgcmV0dXJuIHRoaXMuX3ZpZXcgfVxuICBnZXQgdG9wICgpIHsgcmV0dXJuIHRoaXMuX3RvcCB9XG4gIGdldCBib3R0b20gKCkgeyByZXR1cm4gdGhpcy5fYm90dG9tIH1cbiAgZ2V0IHNpemUgKCkgeyByZXR1cm4gdGhpcy5fc2l6ZSB9XG5cbiAgY2xlYXIgKGQgPSAwKSB7XG4gICAgdGhpcy5maWxsKDAsIHRoaXMuX3RvcCwgdGhpcy5fc2l6ZSlcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgY2hrX2JvdW5kcyAoYWRkciwgc3ogPSA0KSB7XG4gICAgaWYgKGFkZHIgPCB0aGlzLl90b3AgfHwgYWRkciArIHN6ID4gdGhpcy5fYm90dG9tKSB7XG4gICAgICB0aGlzLmhsdCgweDA4KVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZGIgKHR5cGUsIGFkZHIsIC4uLmFyZ3MpIHtcbiAgICBsZXQgc3ogPSBkYXRhX3R5cGVfc2l6ZXNbdHlwZV1cbiAgICBsZXQgZm4gPSB0aGlzLl92aWV3WydzZXQnICsgZGF0YV90eXBlX2Zuc1t0eXBlXV1cbiAgICBmb3IgKGxldCBhIG9mIGFyZ3MpIHtcbiAgICAgIGZuLmNhbGwodGhpcy5fdmlldywgYWRkciwgYSlcbiAgICAgIGFkZHIgKz0gc3pcbiAgICB9XG4gICAgcmV0dXJuIGFkZHJcbiAgfVxuXG4gIGRiX2JjICh0eXBlLCBhZGRyLCAuLi5hcmdzKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKGFkZHIsIGFyZ3MubGVuZ3RoICogZGF0YV90eXBlX3NpemVzW3R5cGVdKVxuICAgIHRoaXMuZGIodHlwZSwgYWRkciwgLi4uYXJncylcbiAgfVxuXG4gIGxkICh0eXBlLCBhZGRyKSB7IHJldHVybiB0aGlzLl92aWV3WydnZXQnICsgZGF0YV90eXBlX2Zuc1t0eXBlXV0oYWRkciwgX3ZtLmxpdHRsZUVuZGlhbikgfVxuXG4gIGxkYiAoYWRkcikgeyByZXR1cm4gdGhpcy5sZCgnaTgnLCBhZGRyKSB9XG5cbiAgbGR3IChhZGRyKSB7IHJldHVybiB0aGlzLmxkKCdpMTYnLCBhZGRyKSB9XG5cbiAgbGRkIChhZGRyKSB7IHJldHVybiB0aGlzLmxkKCdpMzInLCBhZGRyKSB9XG5cbiAgbGRmIChhZGRyKSB7IHJldHVybiB0aGlzLmxkKCdmMzInLCBhZGRyKSB9XG5cbiAgbGRfYmMgKHR5cGUsIGFkZHIpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgZGF0YV90eXBlX3NpemVzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzLmxkKHR5cGUsIGFkZHIpXG4gIH1cblxuICBzdCAodHlwZSwgYWRkciwgdmFsdWUpIHsgdGhpcy5fdmlld1snc2V0JyArIGRhdGFfdHlwZV9mbnNbdHlwZV1dKGFkZHIsIHZhbHVlLCBfdm0ubGl0dGxlRW5kaWFuKSB9XG5cbiAgc3RiIChhZGRyLCB2YWx1ZSkgeyB0aGlzLnN0KCdpOCcsIGFkZHIsIHZhbHVlKSB9XG5cbiAgc3R3IChhZGRyLCB2YWx1ZSkgeyB0aGlzLnN0KCdpMTYnLCBhZGRyLCB2YWx1ZSkgfVxuXG4gIHN0ZCAoYWRkciwgdmFsdWUpIHsgdGhpcy5zdCgnaTMyJywgYWRkciwgdmFsdWUpIH1cblxuICBzdGYgKGFkZHIsIHZhbHVlKSB7IHRoaXMuc3QoJ2YzMicsIGFkZHIsIHZhbHVlKSB9XG5cbiAgc3RfYmMgKHR5cGUsIGFkZHIsIHZhbHVlKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKGFkZHIsIGRhdGFfdHlwZV9zaXplc1t0eXBlXSlcbiAgICB0aGlzLnN0KHR5cGUsIGFkZHIsIHZhbHVlKVxuICB9XG5cbiAgbGRsIChhZGRyLCBzaXplKSB7IHJldHVybiB0aGlzLl9kYXRhLnNsaWNlKGFkZHIsIGFkZHIgKyBzaXplIC0gMSkgfVxuXG4gIGxkbF9iYyAoYWRkciwgc2l6ZSkge1xuICAgIHRoaXMuY2hrX2JvdW5kcyhhZGRyLCBzaXplKVxuICAgIHJldHVybiB0aGlzLmxkbChhZGRyLCBzaXplKVxuICB9XG5cbiAgbGRzIChhZGRyLCBzaXplKSB7XG4gICAgaWYgKF8uaXNTdHJpbmcoYWRkcikpIHsgIC8vIGFzc2VtYmxlciB3aWxsIHVzZSBsZHMoXCJcIilcbiAgICAgIHJldHVybiBhZGRyXG4gICAgfVxuXG4gICAgbGV0IHMgPSAnJ1xuICAgIHNpemUgPSBzaXplIHx8IGRhdGFfdHlwZV9zaXplcy5zdHJcbiAgICBsZXQgYm90dG9tID0gTWF0aC5taW4oYWRkciArIHNpemUgLSAxLCB0aGlzLl9ib3R0b20pXG4gICAgbGV0IG1lbSA9IHRoaXMuX2RhdGFcbiAgICB3aGlsZSAoYWRkciA8PSBib3R0b20pIHtcbiAgICAgIGxldCBjID0gbWVtW2FkZHIrK11cbiAgICAgIGlmIChjID09PSAwKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzXG4gIH1cblxuICBsZHNfYmMgKGFkZHIsIHNpemUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgTWF0aC5taW4oc2l6ZSB8fCAwLCBkYXRhX3R5cGVfc2l6ZXMuc3RyKSlcbiAgICByZXR1cm4gdGhpcy5sZHMoYWRkciwgc2l6ZSlcbiAgfVxuXG4gIHN0bCAoYWRkciwgdmFsdWUsIHNpemUpIHsgdGhpcy5fZGF0YS5zZXQodmFsdWUuc3ViYXJyYXkoMCwgc2l6ZSB8fCB2YWx1ZS5ieXRlTGVuZ3RoKSwgYWRkcikgfVxuXG4gIHN0bF9iYyAoYWRkciwgdmFsdWUsIHNpemUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgTWF0aC5taW4oc2l6ZSB8fCAwLCB2YWx1ZS5ieXRlTGVuZ3RoKSlcbiAgICB0aGlzLnN0bChhZGRyLCB2YWx1ZSwgc2l6ZSlcbiAgfVxuXG4gIHN0cyAoYWRkciwgc3RyLCBzaXplKSB7XG4gICAgc2l6ZSA9IHNpemUgfHwgZGF0YV90eXBlX3NpemVzLnN0ciAtIDFcbiAgICBsZXQgYSA9IF8ubWFwKHN0ci5zcGxpdCgnJyksIGkgPT4gaS5jaGFyQ29kZUF0KDApKVxuICAgIGEubGVuZ3RoID0gTWF0aC5taW4oc2l6ZSwgYS5sZW5ndGgpXG4gICAgdGhpcy5maWxsKDAsIGFkZHIsIHNpemUpXG4gICAgdGhpcy5fZGF0YS5zZXQoYSwgYWRkcilcbiAgfVxuXG4gIHN0c19iYyAoYWRkciwgc3RyLCBzaXplKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKGFkZHIsIE1hdGgubWluKHNpemUsIGRhdGFfdHlwZV9zaXplcy5zdHIpKVxuICAgIHRoaXMuc3RzKGFkZHIsIHN0ciwgc2l6ZSlcbiAgfVxuXG4gIGZpbGwgKHZhbHVlLCB0b3AsIHNpemUpIHsgdGhpcy5fZGF0YS5maWxsKHZhbHVlIHx8IDAsIHRvcCwgdG9wICsgc2l6ZSkgfVxuXG4gIGZpbGxfYmMgKHZhbHVlLCB0b3AsIHNpemUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHModG9wLCBzaXplKVxuICAgIHRoaXMuZmlsbCh2YWx1ZSwgdG9wLCBzaXplKVxuICB9XG5cbiAgY29weSAoc3JjLCB0Z3QsIHNpemUpIHsgdGhpcy5fZGF0YS5jb3B5V2l0aGluKHRndCwgc3JjLCBzcmMgKyBzaXplIC0gMSkgfVxuXG4gIGNvcHlfYmMgKHNyYywgdGd0LCBzaXplKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKHNyYywgc2l6ZSlcbiAgICB0aGlzLmNoa19ib3VuZHModGd0LCBzaXplKVxuICAgIHRoaXMuY29weShzcmMsIHRndCwgc2l6ZSlcbiAgfVxuXG4gIHJlYWQgKGFkZHIsIHR5cGUgPSAnaTgnKSB7XG4gICAgbGV0IHZhbHVlXG4gICAgaWYgKF8uaXNOdW1iZXIodHlwZSkpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5fZGF0YS5zbGljZShhZGRyLCBhZGRyICsgdHlwZSAtIDEpXG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzdHInKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubGRzKGFkZHIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFsdWUgPSB0aGlzLmxkKHR5cGUsIGFkZHIpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgd3JpdGUgKHZhbHVlLCBhZGRyLCB0eXBlID0gJ2k4Jykge1xuICAgIGxldCBzelxuICAgIGlmIChfLmlzTnVtYmVyKHR5cGUpKSB7XG4gICAgICB0aGlzLl9kYXRhLnNldCh2YWx1ZS5zdWJhcnJheSgwLCB0eXBlIC0gMSksIGFkZHIpXG4gICAgICBzeiA9IHR5cGVcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cicpIHtcbiAgICAgIHRoaXMuc3RzKGFkZHIsIHZhbHVlKVxuICAgICAgc3ogPSBkYXRhX3R5cGVfc2l6ZXNbdHlwZV1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnN0KHR5cGUsIGFkZHIsIHZhbHVlKVxuICAgICAgc3ogPSBkYXRhX3R5cGVfc2l6ZXNbdHlwZV1cbiAgICB9XG4gICAgcmV0dXJuIGFkZHIgKyBzelxuICB9XG5cbiAgZnJvbV9zdHJpbmcgKGFkZHIsIHN0cikge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgbGV0IHcgPSBzdHIubGVuZ3RoXG5cbiAgICBsZXQgdGkgPSBhZGRyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB3OyB4KyspIHtcbiAgICAgIGRhdGFbdGkrK10gPSBzdHIuY2hhckNvZGVBdCh4KVxuICAgIH1cblxuICAgIHJldHVybiB0aVxuICB9XG5cbiAgZnJvbV9zdHJpbmdfbWFzayAoYWRkciwgc3RyLCBtYXNrKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgdyA9IHN0ci5sZW5ndGhcblxuICAgIGxldCB0aSA9IGFkZHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHc7IHgrKykge1xuICAgICAgZGF0YVt0aSsrXSA9IG1hc2tbc3RyW3hdXVxuICAgIH1cblxuICAgIHJldHVybiB0aVxuICB9XG5cbiAgdG9fc3RyaW5nIChhZGRyLCBzaXplKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgcyA9ICcnXG5cbiAgICBsZXQgdGkgPSBhZGRyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplOyB5KyspIHtcbiAgICAgIHMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXRhW3RpKytdKVxuICAgIH1cblxuICAgIHJldHVybiBzXG4gIH1cblxuICB0b19zdHJpbmdfbWFzayAoYWRkciwgc2l6ZSwgbWFzaykge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgbGV0IHMgPSAnJ1xuXG4gICAgbGV0IHRpID0gYWRkclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZTsgeSsrKSB7XG4gICAgICBzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobWFza1tkYXRhW3RpKytdXSlcbiAgICB9XG5cbiAgICByZXR1cm4gc1xuICB9XG5cbiAgZnJvbV9hcnJheSAoYWRkciwgYXJyKSB7XG4gICAgbGV0IGggPSBhcnIubGVuZ3RoXG5cbiAgICBsZXQgdGkgPSBhZGRyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICAgIHRpID0gdGhpcy5mcm9tX3N0cmluZyh0aSwgYXJyW3ldKVxuICAgIH1cblxuICAgIHJldHVybiB0aVxuICB9XG5cbiAgZnJvbV8yZF9hcnJheSAoYWRkciwgZnJhbWUsIGNvdW50LCB3aWR0aCwgYXJyKSB7XG4gICAgbGV0IGggPSBhcnIubGVuZ3RoXG4gICAgbGV0IGZ1bGxXaWR0aCA9IHdpZHRoICogY291bnRcbiAgICBsZXQgb2Zmc2V0ID0gZnJhbWUgKiB3aWR0aFxuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICAgIGxldCB0aSA9IGFkZHIgKyB5ICogZnVsbFdpZHRoICsgb2Zmc2V0XG4gICAgICBpZiAoXy5pc0FycmF5KGFyclt5XSkpIHtcbiAgICAgICAgdGhpcy5mcm9tX2FycmF5X21hc2sodGksIGFyclt5XSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmZyb21fc3RyaW5nKHRpLCBhcnJbeV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnJvbV9hcnJheV9tYXNrIChhZGRyLCBhcnIsIG1hc2sgPSB7fSkge1xuICAgIGxldCBoID0gYXJyLmxlbmd0aFxuXG4gICAgbGV0IHRpID0gYWRkclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XG4gICAgICBpZiAoXy5pc0FycmF5KGFyclt5XSkpIHtcbiAgICAgICAgdGkgPSB0aGlzLmZyb21fYXJyYXlfbWFzayh0aSwgYXJyW3ldLCBtYXNrKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRpID0gdGhpcy5mcm9tX3N0cmluZ19tYXNrKHRpLCBhcnJbeV0sIG1hc2spXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpXG4gIH1cblxuICBmcm9tXzJkX2FycmF5X21hc2sgKGFkZHIsIGZyYW1lLCBjb3VudCwgd2lkdGgsIGFyciwgbWFzayA9IHt9KSB7XG4gICAgbGV0IGggPSBhcnIubGVuZ3RoXG4gICAgbGV0IGZ1bGxXaWR0aCA9IHdpZHRoICogY291bnRcbiAgICBsZXQgb2Zmc2V0ID0gZnJhbWUgKiB3aWR0aFxuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICAgIGxldCB0aSA9IGFkZHIgKyB5ICogZnVsbFdpZHRoICsgb2Zmc2V0XG4gICAgICB0aGlzLmZyb21fc3RyaW5nX21hc2sodGksIGFyclt5XSwgbWFzaylcbiAgICB9XG4gIH1cblxuICB0b19hcnJheSAoYWRkciwgdywgaCkge1xuICAgIGxldCBhcnIgPSBbXVxuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICAgIGFyci5wdXNoKHRoaXMudG9fc3RyaW5nKGFkZHIgKyB5ICogdywgdykpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFyclxuICB9XG5cbiAgdG9fYXJyYXlfbWFzayAoYWRkciwgdywgaCwgbWFzaykge1xuICAgIGxldCBhcnIgPSBbXVxuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICAgIGFyci5wdXNoKHRoaXMudG9fc3RyaW5nX21hc2soYWRkciArIHkgKiB3LCB3LCBtYXNrKSlcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyXG4gIH1cblxuICBkdW1wIChhZGRyID0gMCwgc2l6ZSA9IDEwMjQpIHtcbiAgICBjb25zb2xlLmxvZygnRHVtcGluZycsIHNpemUsICcgYnl0ZXMgZnJvbSBtZW1vcnkgYXQgJywgaGV4KGFkZHIpKVxuICAgIGNvbnNvbGUubG9nKGhleHkuaGV4eSh0aGlzLl9idWZmZXIsIHsgb2Zmc2V0OiBhZGRyLCBsZW5ndGg6IHNpemUsIHdpZHRoOiAxNiwgY2FwczogJ3VwcGVyJywgaW5kZW50OiAyIH0pKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9tZW1vcnkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZXh5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaGV4eVwiXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaGV4eSBmcm9tICdoZXh5J1xuaW1wb3J0IHByZXR0eUJ5dGVzIGZyb20gJ3ByZXR0eS1ieXRlcydcbmltcG9ydCB7IGRhdGFfdHlwZV9zaXplIH0gZnJvbSAnLi9tZW1vcnkuanMnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtb3J5TWFuYWdlciB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICB0aGlzLl9tYWluID0gbWFpblxuXG4gICAgdGhpcy5fY29sbGVjdF9kZWxheSA9IG1haW4uZGVmYXVsdHMoJ21lbW9yeV9tYW5hZ2VyLmNvbGxlY3RfZGVsYXknKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fYmxvY2tzID0gW11cbiAgICB0aGlzLl9sYXN0ID0gMFxuICAgIHJldHVybiB0aGlzLmNvbGxlY3QoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jb2xsZWN0KClcbiAgICB0aGlzLl9ibG9ja3MgPSBbXVxuICAgIHRoaXMuX2xhc3QgPSAwXG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgaWYgKHQgLSB0aGlzLl9sYXN0ID49IHRoaXMuX2NvbGxlY3RfZGVsYXkpIHtcbiAgICAgIHRoaXMuY29sbGVjdCgpXG4gICAgICB0aGlzLl9sYXN0ID0gdFxuICAgIH1cbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuICBnZXQgbWVtb3J5ICgpIHsgcmV0dXJuIHRoaXMuX21haW4ubWVtb3J5IH1cblxuICBnZXQgYmxvY2tzICgpIHsgcmV0dXJuIHRoaXMuX2Jsb2NrcyB9XG4gIGdldCBsYXN0ICgpIHsgcmV0dXJuIHRoaXMuX2xhc3QgfVxuICBnZXQgY29sbGVjdF9kZWxheSAoKSB7IHJldHVybiB0aGlzLl9jb2xsZWN0X2RlbGF5IH1cblxuICBnZXQgYXZhaWxfbWVtICgpIHsgcmV0dXJuIHRoaXMuX21haW4uc2l6ZSB9XG5cbiAgZ2V0IHVzZWRfbWVtICgpIHtcbiAgICBsZXQgc2l6ZSA9IDBcbiAgICBmb3IgKGxldCBiIG9mIHRoaXMuX2Jsb2Nrcykge1xuICAgICAgaWYgKGIudXNlZCkge1xuICAgICAgICBzaXplICs9IGIuc2l6ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2l6ZVxuICB9XG5cbiAgZ2V0IGZyZWVfbWVtICgpIHsgcmV0dXJuIHRoaXMuYXZhaWxfbWVtIC0gdGhpcy51c2VkX21lbSB9XG5cbiAgX2FsbG9jICh0eXBlLCBjb3VudCkge1xuICAgIGNvdW50ID0gY291bnQgfHwgMVxuICAgIGxldCBzaXplID0gZGF0YV90eXBlX3NpemUodHlwZSkgKiBjb3VudFxuICAgIGxldCBuID0gMFxuXG4gICAgZm9yIChsZXQgYiBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgIGlmIChiLmJvdHRvbSA+IG4pIHtcbiAgICAgICAgbiA9IGIuYm90dG9tXG4gICAgICB9XG5cbiAgICAgIGlmICghYi51c2VkICYmIGIuc2l6ZSA+PSBzaXplKSB7XG4gICAgICAgIGlmIChiLnNpemUgPT09IHNpemUpIHtcbiAgICAgICAgICBiLnVzZWQgPSB0cnVlXG4gICAgICAgICAgcmV0dXJuIGIudG9wXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9iID0gYi5ib3R0b21cbiAgICAgICAgYi5ib3R0b20gPSBiLnRvcCArIHNpemUgLSAxXG4gICAgICAgIGIuc2l6ZSA9IHNpemVcbiAgICAgICAgYi5jb3VudCA9IGNvdW50XG4gICAgICAgIGIudXNlZCA9IHRydWVcblxuICAgICAgICB0aGlzLl9ibG9ja3MucHVzaCh7IHRvcDogYi5ib3R0b20gKyAxLCBib3R0b206IG9iLCBzaXplOiBvYiAtIChiLmJvdHRvbSArIDEpLCBjb3VudCwgdHlwZSwgdXNlZDogZmFsc2UgfSlcblxuICAgICAgICByZXR1cm4gYi50b3BcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobiArIHNpemUgPiB0aGlzLmF2YWlsX21lbSkge1xuICAgICAgX3ZtLmhsdCgpXG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIGxldCBhZGRyID0gbiArIDFcblxuICAgIHRoaXMuX2Jsb2Nrcy5wdXNoKHsgdG9wOiBhZGRyLCBib3R0b206IGFkZHIgKyBzaXplIC0gMSwgc2l6ZSwgY291bnQsIHR5cGUsIHVzZWQ6IHRydWUgfSlcblxuICAgIF92bS5maWxsKDAsIGFkZHIsIHNpemUpXG5cbiAgICByZXR1cm4gYWRkclxuICB9XG5cbiAgYWxsb2MgKHR5cGUsIGNvdW50LCAuLi52YWx1ZSkge1xuICAgIGxldCBhZGRyID0gdGhpcy5fYWxsb2ModHlwZSwgY291bnQpXG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBzaXplID0gZGF0YV90eXBlX3NpemUodHlwZSkgKiBjb3VudFxuICAgICAgbGV0IGEgPSBhZGRyXG4gICAgICBmb3IgKGxldCB2IG9mIHZhbHVlKSB7XG4gICAgICAgIF92bS53cml0ZSh2LCBhLCB0eXBlKVxuICAgICAgICBhICs9IHNpemVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWRkclxuICB9XG5cbiAgZnJlZSAoYWRkcikge1xuICAgIGxldCBiID0gdGhpcy5ibG9jayhhZGRyKVxuICAgIGlmIChiKSB7XG4gICAgICBiLnVzZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGJsb2NrIChhZGRyKSB7XG4gICAgZm9yIChsZXQgYiBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgIGlmIChiLnRvcCA9PT0gYWRkcikge1xuICAgICAgICByZXR1cm4gYlxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgdHlwZSAoYWRkcikge1xuICAgIGxldCBiID0gdGhpcy5ibG9jayhhZGRyKVxuICAgIHJldHVybiBiICYmIGIudXNlZCA/IGIudHlwZSA6IG51bGxcbiAgfVxuXG4gIHNpemUgKGFkZHIpIHtcbiAgICBsZXQgYiA9IHRoaXMuYmxvY2soYWRkcilcbiAgICByZXR1cm4gYiAmJiBiLnVzZWQgPyBiLnNpemUgOiAtMVxuICB9XG5cbiAgY29sbGVjdCAoKSB7XG4gICAgbGV0IG4gPSBbXVxuICAgIGZvciAobGV0IGIgb2YgdGhpcy5fYmxvY2tzKSB7XG4gICAgICBpZiAoIWIudXNlZCkge1xuICAgICAgICBuLnB1c2goYilcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fYmxvY2tzID0gblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkdW1wICgpIHtcbiAgICBjb25zb2xlLmxvZygnbWVtb3J5IF9ibG9ja3MgZHVtcC4uLicsICdhdmFpbF9tZW06JywgcHJldHR5Qnl0ZXModGhpcy5hdmFpbF9tZW0pLCAndXNlZDonLCBwcmV0dHlCeXRlcyh0aGlzLnVzZWRfbWVtKSwgJ2ZyZWU6JywgcHJldHR5Qnl0ZXModGhpcy5mcmVlX21lbSkpXG4gICAgZm9yIChsZXQgYiBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKCcnKVxuICAgICAgY29uc29sZS5sb2coJ29mZnNldDonLCBfdm0uaGV4KGIudG9wLCAzMiksICdzaXplOicsIHRoaXMuc2l6ZShiLnRvcCksICd0eXBlOicsIHRoaXMudHlwZShiLnRvcCkpXG4gICAgICBjb25zb2xlLmxvZyhoZXh5LmhleHkoX3ZtLm1lbV9idWZmZXIsIHsgb2Zmc2V0OiBiLnRvcCwgbGVuZ3RoOiBNYXRoLm1pbigyNTUsIGIuc2l6ZSksIHdpZHRoOiAxNiwgY2FwczogJ3VwcGVyJywgaW5kZW50OiAyIH0pKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL21lbW9yeW1hbmFnZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmV0dHktYnl0ZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmV0dHktYnl0ZXNcIlxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZGVmYXVsdHMsIHJ1bnRpbWVfZXJyb3IgfSBmcm9tICcuLi9nbG9iYWxzLmpzJ1xuaW1wb3J0IHsgZGF0YV90eXBlX3NpemUgfSBmcm9tICcuL21lbW9yeS5qcydcblxuY2xhc3MgU3RhY2tFbnRyeSB7XG5cbiAgY29uc3RydWN0b3IgKHN0YWNrLCBvZmZzZXQgPSAwLCBtYXggPSAyNTUsIHR5cGUgPSBkZWZhdWx0cy50eXBlLCBzaXplLCByb2xsaW5nID0gZmFsc2UpIHtcbiAgICB0aGlzLl9zdGFjayA9IHN0YWNrXG5cbiAgICB0aGlzLl9tYXggPSBtYXhcbiAgICB0aGlzLl9zaXplID0gc2l6ZSB8fCBkYXRhX3R5cGVfc2l6ZSh0eXBlKVxuICAgIHRoaXMuX3RvcCA9IG9mZnNldFxuICAgIHRoaXMuX2JvdHRvbSA9IHRoaXMuX3RvcCArIHRoaXMuX3NpemUgLSAxXG4gICAgdGhpcy5fdHlwZSA9IHR5cGVcbiAgICB0aGlzLl9yb2xsaW5nID0gcm9sbGluZyB8fCBmYWxzZVxuXG4gICAgdGhpcy5saXN0W3RoaXMuX3RvcF0gPSB0aGlzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fcHRyID0gdGhpcy5fdG9wXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmxpc3RbdGhpcy5fdG9wXSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fc3RhY2subWFpbiB9XG4gIGdldCBzdGFjayAoKSB7IHJldHVybiB0aGlzLl9zdGFjayB9XG4gIGdldCBsaXN0ICgpIHsgcmV0dXJuIHRoaXMuX3N0YWNrLmxpc3QgfVxuXG4gIGdldCB0b3AgKCkgeyByZXR1cm4gdGhpcy5fdG9wIH1cbiAgZ2V0IGJvdHRvbSAoKSB7IHJldHVybiB0aGlzLl9ib3R0b20gfVxuICBnZXQgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9zaXplIH1cblxuICBnZXQgbWF4ICgpIHsgcmV0dXJuIHRoaXMuX21heCB9XG4gIGdldCBwdHIgKCkgeyByZXR1cm4gdGhpcy5fcHRyIH1cblxuICBnZXQgdG90YWxfc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9tYXggKiB0aGlzLl9zaXplIH1cbiAgZ2V0IHVzZWQgKCkgeyByZXR1cm4gTWF0aC50cnVuYygodGhpcy5fcHRyIC0gdGhpcy5fdG9wKSAvIHRoaXMuX3NpemUpIH1cbiAgZ2V0IGF2YWlsICgpIHsgcmV0dXJuIHRoaXMudG90YWxfc2l6ZSAtIHRoaXMudXNlZCB9XG5cbiAgcHVzaCAoLi4udmFsdWUpIHtcbiAgICBsZXQgc3ogPSB0aGlzLl9zaXplXG4gICAgbGV0IHQgPSB0aGlzLl90eXBlXG4gICAgbGV0IHRvcCA9IHRoaXMuX3RvcFxuICAgIGxldCBib3R0b20gPSB0aGlzLl9ib3R0b21cbiAgICBsZXQgcm9sbGluZyA9IHRoaXMuX3JvbGxpbmdcbiAgICBmb3IgKGxldCB2IG9mIHZhbHVlKSB7XG4gICAgICBpZiAocm9sbGluZyAmJiB0aGlzLl9wdHIgPj0gYm90dG9tKSB7XG4gICAgICAgIHRoaXMuY29weSh0b3AgKyBzeiwgdG9wLCBib3R0b20gLSBzeilcbiAgICAgICAgdGhpcy5fcHRyIC09IHN6XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fcHRyICsgc3ogPCBib3R0b20pIHtcbiAgICAgICAgdGhpcy53cml0ZSh2LCB0aGlzLl9wdHIsIHQpXG4gICAgICAgIHRoaXMuX3B0ciArPSBzelxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwMylcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwb3AgKCkge1xuICAgIGlmICh0aGlzLl9wdHIgPiB0aGlzLl90b3ApIHtcbiAgICAgIHRoaXMuX3B0ciAtPSB0aGlzLl9zaXplXG4gICAgICByZXR1cm4gdGhpcy5yZWFkKHRoaXMuX3B0ciwgdGhpcy5fdHlwZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDIpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhY2sge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgdGhpcy5fbWFpbiA9IG1haW5cblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX2xpc3QgPSB7fVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fbGlzdCA9IHt9XG4gIH1cblxuICBnZXQgbGlzdCAoKSB7IHJldHVybiB0aGlzLl9saXN0IH1cblxuICBuZXcgKG9mZnNldCwgbWF4LCB0eXBlLCBzaXplLCByb2xsaW5nKSB7XG4gICAgbGV0IHMgPSB0aGlzLl9saXN0W29mZnNldF1cbiAgICBpZiAoIXMpIHtcbiAgICAgIHJldHVybiBuZXcgU3RhY2tFbnRyeSh0aGlzLCAuLi5hcmd1bWVudHMpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnVudGltZV9lcnJvcigweDA0KVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBwdXNoIChvZmZzZXQsIC4uLnZhbHVlcykge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBzLnB1c2goLi4udmFsdWVzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgcG9wIChvZmZzZXQpIHtcbiAgICBsZXQgcyA9IHRoaXMuX2xpc3Rbb2Zmc2V0XVxuICAgIGlmIChzKSB7XG4gICAgICByZXR1cm4gcy5wb3AoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgdXNlZCAob2Zmc2V0KSB7XG4gICAgbGV0IHMgPSB0aGlzLl9saXN0W29mZnNldF1cbiAgICBpZiAocykge1xuICAgICAgcmV0dXJuIHMudXNlZFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgbWF4IChvZmZzZXQpIHtcbiAgICBsZXQgcyA9IHRoaXMuX2xpc3Rbb2Zmc2V0XVxuICAgIGlmIChzKSB7XG4gICAgICByZXR1cm4gcy5tYXhcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDQpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIHNpemUgKG9mZnNldCkge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBzLnNpemVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDQpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIHR5cGUgKG9mZnNldCkge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBzLnR5cGVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDQpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vc3RhY2suanMiLCJpbXBvcnQgeyBydW50aW1lX2Vycm9yIH0gZnJvbSAnLi4vZ2xvYmFscy5qcydcblxuY29uc3QgX0lOVF9SVU5OSU5HID0gMVxuY29uc3QgX0lOVF9QQVVTRUQgPSAyXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVycnVwdCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICB0aGlzLl9saXN0ID0ge31cbiAgICB0aGlzLl9tYWluID0gbWFpblxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuc3RvcF9hbGwoKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuICBnZXQgbWVtb3J5ICgpIHsgcmV0dXJuIHRoaXMuX21haW4ubWVtb3J5IH1cblxuICBmaW5kIChuYW1lKSB7IHJldHVybiB0aGlzLl9saXN0W25hbWVdIH1cblxuICBjcmVhdGUgKG5hbWUsIGZuLCBtcyA9IDUwMCkge1xuICAgIGlmICghdGhpcy5maW5kKG5hbWUpKSB7XG4gICAgICB0aGlzLl9saXN0W25hbWVdID0geyBuYW1lLCBzdGF0dXM6IF9JTlRfUlVOTklORywgbXMsIGZuLCBsYXN0OiAwIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDYpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXN1bWUgKG5hbWUpIHtcbiAgICBpZiAodGhpcy5maW5kKG5hbWUpKSB7XG4gICAgICB0aGlzLl9saXN0W25hbWVdLnN0YXR1cyA9IF9JTlRfUlVOTklOR1xuICAgICAgdGhpcy5fbGlzdFtuYW1lXS5sYXN0ID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwYXVzZSAobmFtZSkge1xuICAgIGlmICh0aGlzLmZpbmQobmFtZSkpIHtcbiAgICAgIHRoaXMuX2xpc3RbbmFtZV0uc3RhdHVzID0gX0lOVF9QQVVTRURcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdG9wIChuYW1lKSB7XG4gICAgaWYgKHRoaXMuZmluZChuYW1lKSkge1xuICAgICAgZGVsZXRlIHRoaXMuX2xpc3RbbmFtZV1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdG9wX2FsbCAoKSB7XG4gICAgZm9yIChsZXQgayBpbiB0aGlzLl9saXN0KSB7XG4gICAgICB0aGlzLnN0b3AoaylcbiAgICB9XG4gICAgdGhpcy5fbGlzdCA9IHt9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBmb3IgKGxldCBrIGluIHRoaXMuX2xpc3QpIHtcbiAgICAgIGxldCBpID0gdGhpcy5fbGlzdFtrXVxuICAgICAgaWYgKGkuc3RhdHVzID09PSBfSU5UX1JVTk5JTkcpIHtcbiAgICAgICAgbGV0IGRlbGF5ID0gdCAtIGkubGFzdFxuICAgICAgICBpZiAoZGVsYXkgPj0gaS5tcykge1xuICAgICAgICAgIGkuZm4uYXBwbHkodGhpcywgW2RlbGF5IC0gaS5tc10pXG4gICAgICAgICAgaS5sYXN0ID0gdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9pbnRlcnJ1cHQuanMiLCJpbXBvcnQgUmFpbmJvdyBmcm9tICcuL3JhaW5ib3cuanMnXG5pbXBvcnQgRm9uem8gZnJvbSAnLi9mb256by5qcydcbmltcG9ydCBPcndlbGwgZnJvbSAnLi9vcndlbGwuanMnXG5pbXBvcnQgQmVhZ2xlIGZyb20gJy4vYmVhZ2xlLmpzJ1xuaW1wb3J0IFZpb2xldCBmcm9tICcuL3Zpb2xldC5qcydcbmltcG9ydCB7IE92ZXJsYXlzIH0gZnJvbSAnLi4vb3ZlcmxheXMuanMnXG5cbmltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpZGVvIGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdndWlkZW8nLCBbJ3dpZHRoJywgJ2hlaWdodCcsICdzY2FsZSddKVxuXG4gICAgbGV0IGJvcmRlclNpemUgPSBtYWluLmRlZmF1bHRzKCdib3JkZXIuc2l6ZScsIDApICogMlxuXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBuZXcgUElYSS5hdXRvRGV0ZWN0UmVuZGVyZXIodGhpcy5fd2lkdGggKiB0aGlzLl9zY2FsZSArIGJvcmRlclNpemUsIHRoaXMuX2hlaWdodCAqIHRoaXMuX3NjYWxlICsgYm9yZGVyU2l6ZSwge30pXG4gICAgdGhpcy5fcmVuZGVyZXIudmlldy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICB0aGlzLl9yZW5kZXJlci52aWV3LnN0eWxlLmN1cnNvciA9ICdub25lJ1xuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcuaWQgPSAnZ3VpZGVvJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fcmVuZGVyZXIudmlldylcblxuICAgIHRoaXMuX3N0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKClcblxuICAgIHRoaXMuX29uUmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKVxuICAgIHRoaXMub24oJ3Jlc2l6ZScsIHRoaXMuX29uUmVzaXplKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5vZmYoJ3Jlc2l6ZScsIHRoaXMuX29uUmVzaXplKVxuXG4gICAgdGhpcy5fcmFpbmJvdy5kZXN0cm95KClcbiAgICB0aGlzLl9mb256by5kZXN0cm95KClcbiAgICB0aGlzLl9vcndlbGwuZGVzdHJveSgpXG4gICAgdGhpcy5fYmVhZ2xlLmRlc3Ryb3koKVxuICAgIHRoaXMuX3Zpb2xldC5kZXN0cm95KClcbiAgICB0aGlzLl9vdmVybGF5cy5kZXN0cm95KClcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG5cbiAgY3JlYXRlQ2hpcHMgKCkge1xuICAgIGxldCBtYWluID0gdGhpcy5fbWFpblxuXG4gICAgdGhpcy5fcmFpbmJvdyA9IG5ldyBSYWluYm93KG1haW4pXG5cbiAgICB0aGlzLl9vdmVybGF5cyA9IG5ldyBPdmVybGF5cyhtYWluLCB7XG4gICAgICBib3JkZXI6IHsgc2l6ZTogbWFpbi5kZWZhdWx0cygnYm9yZGVyLnNpemUnLCAwKSwgY29sb3I6IG1haW4uZGVmYXVsdHMoJ2JvcmRlci5jb2xvcicsIDApIH0sXG4gICAgICBzY3JlZW46IHsgc2NhbGU6IHRoaXMuX3NjYWxlIH0sXG4gICAgICBzY2FubGluZXM6IHt9LFxuICAgICAgc2NhbmxpbmU6IHt9LFxuICAgICAgcmdiOiB7fSxcbiAgICAgIG5vaXNlczoge30sXG4gICAgICBjcnQ6IHt9LFxuICAgICAgbW9uaXRvcjoge30sXG4gICAgfSlcblxuICAgIHRoaXMuX3NjcmVlbiA9IHRoaXMuX292ZXJsYXlzLnNjcmVlblxuICAgIHRoaXMuX3NjcmVlbi5fZGF0YSA9IHRoaXMuX2RhdGFcblxuICAgIHRoaXMuX2ZvbnpvID0gbmV3IEZvbnpvKG1haW4pXG4gICAgdGhpcy5fb3J3ZWxsID0gbmV3IE9yd2VsbChtYWluKVxuICAgIHRoaXMuX2JlYWdsZSA9IG5ldyBCZWFnbGUobWFpbilcbiAgICB0aGlzLl92aW9sZXQgPSBuZXcgVmlvbGV0KG1haW4pXG5cbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG5cbiAgICB0aGlzLl9pbWFnZURhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gICAgdGhpcy5fcGl4ZWxzID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2ltYWdlRGF0YS5kYXRhLmJ1ZmZlcilcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcblxuICAgIHRoaXMuX2ZvcmNlX3JlZHJhdyA9IGZhbHNlXG4gICAgdGhpcy5fZm9yY2VfZmxpcCA9IGZhbHNlXG5cbiAgICB0aGlzLl9yYWluYm93LnJlc2V0KClcbiAgICB0aGlzLl9mb256by5yZXNldCgpXG4gICAgdGhpcy5fb3J3ZWxsLnJlc2V0KClcbiAgICB0aGlzLl9iZWFnbGUucmVzZXQoKVxuICAgIHRoaXMuX3Zpb2xldC5yZXNldCgpXG4gICAgdGhpcy5fb3ZlcmxheXMucmVzZXQoKVxuXG4gICAgdGhpcy5jbGVhcigpXG5cbiAgICByZXR1cm4gdGhpcy5yZXNpemUoKVxuICB9XG5cbiAgZ2V0IHNjYWxlICgpIHsgcmV0dXJuIHRoaXMuX3NjYWxlIH1cbiAgc2V0IHNjYWxlICh2YWx1ZSkge1xuICAgIHRoaXMuX3NjYWxlID0gdmFsdWVcbiAgfVxuXG4gIGdldCByYWluYm93ICgpIHsgcmV0dXJuIHRoaXMuX3JhaW5ib3cgfVxuICBnZXQgZm9uem8gKCkgeyByZXR1cm4gdGhpcy5fZm9uem8gfVxuICBnZXQgb3J3ZWxsICgpIHsgcmV0dXJuIHRoaXMuX29yd2VsbCB9XG4gIGdldCBiZWFnbGUgKCkgeyByZXR1cm4gdGhpcy5fYmVhZ2xlIH1cbiAgZ2V0IHZpb2xldCAoKSB7IHJldHVybiB0aGlzLl92aW9sZXQgfVxuXG4gIGdldCBvdmVybGF5cyAoKSB7IHJldHVybiB0aGlzLl9vdmVybGF5cyB9XG5cbiAgZ2V0IHN0YWdlICgpIHsgcmV0dXJuIHRoaXMuX3N0YWdlIH1cbiAgZ2V0IHJlbmRlcmVyICgpIHsgcmV0dXJuIHRoaXMuX3JlbmRlcmVyIH1cblxuICBnZXQgc2NyZWVuICgpIHsgcmV0dXJuIHRoaXMuX3NjcmVlbiB9XG4gIGdldCBzY3JlZW5TcHJpdGUgKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuLnNwcml0ZSB9XG4gIGdldCBzcHJpdGVzTGF5ZXIgKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuLnNwcml0ZXNMYXllciB9XG4gIGdldCBtb3VzZUxheWVyICgpIHsgcmV0dXJuIHRoaXMuX3NjcmVlbi5tb3VzZUxheWVyIH1cblxuICBnZXQgdGV4dHVyZSAoKSB7IHJldHVybiB0aGlzLl9zY3JlZW4udGV4dHVyZSB9XG4gIGdldCBjYW52YXNCdWZmZXIgKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuLmNhbnZhc0J1ZmZlciB9XG4gIGdldCBjYW52YXMgKCkgeyByZXR1cm4gdGhpcy5jYW52YXNCdWZmZXIuY2FudmFzIH1cbiAgZ2V0IGNvbnRleHQgKCkgeyByZXR1cm4gdGhpcy5fc2NyZWVuLmNvbnRleHQgfVxuICBnZXQgaW1hZ2VEYXRhICgpIHsgcmV0dXJuIHRoaXMuX2ltYWdlRGF0YSB9XG4gIGdldCBwaXhlbHMgKCkgeyByZXR1cm4gdGhpcy5fcGl4ZWxzIH1cblxuICBnZXQgZm9yY2VfcmVkcmF3ICgpIHsgcmV0dXJuIHRoaXMuX2ZvcmNlX3JlZHJhdyB9XG4gIHNldCBmb3JjZV9yZWRyYXcgKHZhbHVlKSB7IHRoaXMuX2ZvcmNlX3JlZHJhdyA9IHZhbHVlIH1cblxuICBnZXQgZm9yY2VfZmxpcCAoKSB7IHJldHVybiB0aGlzLl9mb3JjZV9mbGlwIH1cbiAgc2V0IGZvcmNlX2ZsaXAgKHZhbHVlKSB7IHRoaXMuX2ZvcmNlX2ZsaXAgPSB2YWx1ZSB9XG5cbiAgdGljayAodCkge1xuICAgIHRoaXMuX3JhaW5ib3cudGljayh0KVxuICAgIHRoaXMuX2ZvbnpvLnRpY2sodClcbiAgICB0aGlzLl9vcndlbGwudGljayh0KVxuICAgIHRoaXMuX2JlYWdsZS50aWNrKHQpXG4gICAgdGhpcy5fdmlvbGV0LnRpY2sodClcbiAgICB0aGlzLl9vdmVybGF5cy50aWNrKHQpXG5cbiAgICBpZiAodGhpcy5fZm9yY2VfcmVkcmF3KSB7XG4gICAgICB0aGlzLnJlZHJhdygpXG4gICAgICB0aGlzLl9mb3JjZV9yZWRyYXcgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJlZHJhdyAoKSB7XG4gICAgaWYgKHRoaXMuX2ZvcmNlX2ZsaXApIHtcbiAgICAgIHRoaXMuX3NjcmVlbi51cGRhdGVUZXh0dXJlKHRoaXMuX2RhdGEsIHRoaXMuX3JhaW5ib3cpXG5cbiAgICAgIHRoaXMuZW1pdCgnZmxpcCcpXG5cbiAgICAgIHRoaXMuX2ZvcmNlX2ZsaXAgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgncmVkcmF3JylcblxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbmRlcih0aGlzLl9zdGFnZSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBjZW50ZXIgKCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcuc3R5bGUubGVmdCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC41IC0gdGhpcy5fcmVuZGVyZXIud2lkdGggKiAwLjUgKyAncHgnXG4gICAgdGhpcy5fcmVuZGVyZXIudmlldy5zdHlsZS50b3AgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjUgLSB0aGlzLl9yZW5kZXJlci5oZWlnaHQgKiAwLjUgKyAncHgnXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc2l6ZSAoKSB7XG4gICAgdGhpcy5fb3ZlcmxheXMucmVzaXplKClcbiAgICB0aGlzLmNlbnRlcigpXG4gICAgdGhpcy50ZXN0KClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcGl4ZWwgKHgsIHksIGMpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuXG4gICAgbGV0IGlcbiAgICBpZiAoXy5pc051bWJlcihjKSkge1xuICAgICAgaSA9IHRoaXMudG9JbmRleCh4LCB5KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGkgPSB4XG4gICAgICBjID0geVxuICAgIH1cblxuICAgIGlmIChkYXRhW2ldICE9PSBjKSB7XG4gICAgICBkYXRhW2ldID0gYyB8fCAwXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFbaV1cbiAgfVxuXG4gIGJsaXQgKGFkZHIsIHgsIHksIHcsIGgpIHtcbiAgICBjb25zdCBtZW0gPSB0aGlzLm1lbW9yeS5kYXRhXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBjb25zdCB0b3AgPSB0aGlzLl90b3BcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuX3dpZHRoXG5cbiAgICBsZXQgc2kgPSBhZGRyXG4gICAgZm9yIChsZXQgYnkgPSAwOyBieSA8IGg7IGJ5KyspIHtcbiAgICAgIGxldCB0aSA9IHRvcCArICgoeSArIGJ5KSAqIHdpZHRoICsgeClcbiAgICAgIGZvciAobGV0IGJ4ID0gMDsgYnggPCB3OyBieCsrKSB7XG4gICAgICAgIGRhdGFbdGkrK10gPSBtZW1bc2krK11cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgYmxpdF9tYXNrIChhZGRyLCB4LCB5LCB3LCBoLCBmZyA9IDE1LCBiZyA9IC0xKSB7XG4gICAgY29uc3QgbWVtID0gdGhpcy5tZW1vcnkuZGF0YVxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgY29uc3QgdG9wID0gdGhpcy5fdG9wXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLl93aWR0aFxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5yYWluYm93LmNvdW50XG5cbiAgICBsZXQgc2kgPSBhZGRyXG4gICAgZm9yIChsZXQgYnkgPSAwOyBieSA8IGg7IGJ5KyspIHtcbiAgICAgIGxldCB0aSA9IHRvcCArICgoeSArIGJ5KSAqIHdpZHRoICsgeClcbiAgICAgIGZvciAobGV0IGJ4ID0gMDsgYnggPCB3OyBieCsrKSB7XG4gICAgICAgIGxldCBjID0gbWVtW3NpKytdXG4gICAgICAgIGRhdGFbdGldID0gYyA8IGNvdW50ID8gZmcgOiBiZyA9PT0gLTEgPyBkYXRhW3RpXSA6IGJnXG4gICAgICAgIHRpKytcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgYmxpdF9hcnJheSAoYXJyLCB4LCB5LCBtYXNrID0ge30pIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGNvbnN0IHRvcCA9IHRoaXMuX3RvcFxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fd2lkdGhcblxuICAgIGxldCB3ID0gXy5maXJzdChhcnIpLmxlbmd0aFxuICAgIGxldCBoID0gYXJyLmxlbmd0aFxuXG4gICAgZm9yIChsZXQgYnkgPSAwOyBieSA8IGg7IGJ5KyspIHtcbiAgICAgIGxldCB0aSA9IHRvcCArICgoYnkgKyB5KSAqIHdpZHRoICsgeClcbiAgICAgIGZvciAobGV0IGJ4ID0gMDsgYnggPCB3OyBieCsrKSB7XG4gICAgICAgIGRhdGFbdGkrK10gPSBtYXNrW2FycltieV1dXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGNvcHlfcmVjdCAoeCwgeSwgdywgaCwgYWRkcikge1xuICAgIGNvbnN0IG1lbSA9IHRoaXMubWVtb3J5LmRhdGFcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGNvbnN0IHRvcCA9IHRoaXMuX3RvcFxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fd2lkdGhcblxuICAgIGxldCB0aSA9IGFkZHJcbiAgICBmb3IgKGxldCBieSA9IDA7IGJ5IDwgaDsgYnkrKykge1xuICAgICAgbGV0IHNpID0gdG9wICsgKChieSArIHkpICogd2lkdGggKyB4KVxuICAgICAgZm9yIChsZXQgYnggPSAwOyBieCA8IHc7IGJ4KyspIHtcbiAgICAgICAgbWVtW3RpKytdID0gZGF0YVtzaSsrXVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBmaWxscmVjdCAoeCwgeSwgdywgaCwgY29sb3IpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGNvbnN0IHRvcCA9IHRoaXMuX3RvcFxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fd2lkdGhcblxuICAgIGZvciAobGV0IGJ5ID0gMDsgYnkgPCBoOyBieSsrKSB7XG4gICAgICBsZXQgc2kgPSB0b3AgKyAoKGJ5ICsgeSkgKiB3aWR0aCArIHgpXG4gICAgICBmb3IgKGxldCBieCA9IDA7IGJ4IDwgdzsgYngrKykge1xuICAgICAgICBkYXRhW3NpKytdID0gY29sb3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdG9fYXJyYXkgKHgsIHksIHcsIGgsIG1hc2sgPSB7fSkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgY29uc3QgdG9wID0gdGhpcy5fdG9wXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLl93aWR0aFxuXG4gICAgbGV0IGFyciA9IFtdXG5cbiAgICBmb3IgKGxldCBieSA9IDA7IGJ5IDwgaDsgYnkrKykge1xuICAgICAgbGV0IHRpID0gdG9wICsgKChieSArIHkpICogd2lkdGggKyB4KVxuICAgICAgbGV0IHMgPSAnJ1xuICAgICAgZm9yIChsZXQgYnggPSAwOyBieCA8IHc7IGJ4KyspIHtcbiAgICAgICAgcyArPSBtYXNrW2RhdGFbdGkrK11dXG4gICAgICB9XG4gICAgICBhcnIucHVzaChzKVxuICAgIH1cblxuICAgIHJldHVybiBhcnJcbiAgfVxuXG4gIHRvSW5kZXggKHgsIHkpIHsgcmV0dXJuIHkgKiB0aGlzLl93aWR0aCArIHggfVxuXG4gIGZyb21JbmRleCAoaSkge1xuICAgIGxldCB5ID0gTWF0aC5taW4oTWF0aC50cnVuYyhpIC8gdGhpcy5fd2lkdGgpLCB0aGlzLl9oZWlnaHQgLSAxKVxuICAgIGxldCB4ID0gaSAtIHlcbiAgICByZXR1cm4geyB4LCB5IH1cbiAgfVxuXG4gIHNjcm9sbCAoeCwgeSkge1xuICAgIGxldCBsdyA9IHkgKiB0aGlzLl93aWR0aFxuICAgIGxldCBzID0gbHdcbiAgICBsZXQgZSA9IHRoaXMuX3NpemUgLSBsd1xuICAgIHRoaXMuX2RhdGEuY29weShzLCAwLCBlIC0gcylcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgbG9hZFRleHR1cmUgKGZpbGVuYW1lKSB7XG4gICAgbGV0IHRleCA9IFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoJy4vYnVpbGQvJyArIHJlcXVpcmUoJ2ZpbGU/bmFtZT1hc3NldHMvW25hbWVdLltleHRdIS4uLy4uLy4uL2Fzc2V0cy9pbWdzLycgKyBmaWxlbmFtZSksIHVuZGVmaW5lZCwgUElYSS5TQ0FMRV9NT0RFUy5ORUFSRVNUKVxuICAgIHRleC5vbigndXBkYXRlJywgKCkgPT4gdGhpcy51cGRhdGUoKSlcbiAgICByZXR1cm4gdGV4XG4gIH1cblxuICB0ZXN0ICgpIHtcbiAgICB0aGlzLnBpeGVsKDEwLCAxMCwgMTMpXG4gICAgdGhpcy5waXhlbCgyMCwgMTAsIDUpXG4gICAgdGhpcy5waXhlbCgzMCwgMTAsIDYpXG5cbiAgICB0aGlzLl9mb256by50ZXN0KClcblxuICAgIC8vIGxldCBzY3JlZW4gPSB0aGlzLl9vdmVybGF5cy5zY3JlZW4uc3ByaXRlXG4gICAgLy8gc2NyZWVuLnJlbW92ZUNoaWxkcmVuKClcblxuICAgIC8vIGxldCB0ID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMubG9hZFRleHR1cmUoJ3Rlc3QucG5nJykpXG4gICAgLy8gc2NyZWVuLmFkZENoaWxkKHQpXG5cbiAgICAvLyBsZXQgdGV4dCA9IG5ldyBQSVhJLlRleHQoJ1RoaXMgaXMgYSBwaXhpIHRleHQnLCB7IGZvbnQ6ICcyMHB4IFwiR2xhc3MgVFRZIFZUMjIwXCInLCBmaWxsOiAweEZGRkZGRiB9KVxuICAgIC8vIHRleHQudGV4dHVyZS5iYXNlVGV4dHVyZS5zY2FsZU1vZGUgPSBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1RcbiAgICAvLyB0ZXh0LmNvbnRleHQuY2FudmFzLnN0eWxlWydmb250LXNtb290aGluZyddID0gJ25ldmVyJ1xuICAgIC8vIHRleHQuY29udGV4dC5jYW52YXMuc3R5bGVbJy13ZWJraXQtZm9udC1zbW9vdGhpbmcnXSA9ICdub25lJ1xuICAgIC8vIHRleHQuY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZVxuICAgIC8vIHRleHQuY29udGV4dC5jYW52YXMuc3R5bGUuZGlzcGxheSA9ICdoaWRkZW4nXG4gICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0LmNvbnRleHQuY2FudmFzKVxuICAgIC8vIHRleHQudXBkYXRlVGV4dCgpXG4gICAgLy8gc2NyZWVuLmFkZENoaWxkKHRleHQpXG4gICAgLy8gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0LmNvbnRleHQuY2FudmFzKVxuXG4gICAgdGhpcy51cGRhdGUodHJ1ZSlcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvZ3VpZGVvLmpzIiwiaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuXG5jb25zdCBzMzIgPSBuZXcgVWludDMyQXJyYXkoNClcbmNvbnN0IHM4ID0gbmV3IFVpbnQ4QXJyYXkoczMyLmJ1ZmZlcilcbmNvbnN0IHQzMiA9IG5ldyBVaW50MzJBcnJheSg0KVxuY29uc3QgdDggPSBuZXcgVWludDhBcnJheSh0MzIuYnVmZmVyKVxuXG5sZXQgcmV2ZXJzZSA9IHggPT4ge1xuICBzMzJbMF0gPSB4XG4gIHQ4WzBdID0gczhbM11cbiAgdDhbMV0gPSBzOFsyXVxuICB0OFsyXSA9IHM4WzFdXG4gIHQ4WzNdID0gczhbMF1cbiAgcmV0dXJuIHQzMlswXVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWluYm93IGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdyYWluYm93JywgWydjb3VudCddKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuXG4gICAgdGhpcy5fTEUgPSB0aGlzLm1haW4uTEVcblxuICAgIHRoaXMuY29sb3IoMCwgMHgwMDAwMDBmZilcbiAgICB0aGlzLmNvbG9yKDEsIDB4ODAwMDAwZmYpXG4gICAgdGhpcy5jb2xvcigyLCAweDAwODAwMGZmKVxuICAgIHRoaXMuY29sb3IoMywgMHg4MDgwMDBmZilcbiAgICB0aGlzLmNvbG9yKDQsIDB4MDAwMDgwZmYpXG4gICAgdGhpcy5jb2xvcig1LCAweDgwMDA4MGZmKVxuICAgIHRoaXMuY29sb3IoNiwgMHgwMDgwODBmZilcbiAgICB0aGlzLmNvbG9yKDcsIDB4YzBjMGMwZmYpXG4gICAgdGhpcy5jb2xvcig4LCAweDgwODA4MGZmKVxuICAgIHRoaXMuY29sb3IoOSwgMHhmZjAwMDBmZilcbiAgICB0aGlzLmNvbG9yKDEwLCAweDAwZmYwMGZmKVxuICAgIHRoaXMuY29sb3IoMTEsIDB4ZmZmZjAwZmYpXG4gICAgdGhpcy5jb2xvcigxMiwgMHgwMDAwZmZmZilcbiAgICB0aGlzLmNvbG9yKDEzLCAweGZmMDBmZmZmKVxuICAgIHRoaXMuY29sb3IoMTQsIDB4MDBmZmZmZmYpXG4gICAgdGhpcy5jb2xvcigxNSwgMHhmZmZmZmZmZilcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXQgYmxhY2sgKCkgeyByZXR1cm4gMCB9XG4gIGdldCBka3JlZCAoKSB7IHJldHVybiAxIH1cbiAgZ2V0IGRrZ3JlZW4gKCkgeyByZXR1cm4gMiB9XG4gIGdldCBka3llbGxvdyAoKSB7IHJldHVybiAzIH1cbiAgZ2V0IGRrYmx1ZSAoKSB7IHJldHVybiA0IH1cbiAgZ2V0IGRrZnVjaHNpYSAoKSB7IHJldHVybiA1IH1cbiAgZ2V0IHRlYWwgKCkgeyByZXR1cm4gNiB9XG4gIGdldCBncmV5ICgpIHsgcmV0dXJuIDcgfVxuICBnZXQgZGtncmV5ICgpIHsgcmV0dXJuIDggfVxuICBnZXQgcmVkICgpIHsgcmV0dXJuIDkgfVxuICBnZXQgbGltZSAoKSB7IHJldHVybiAxMCB9XG4gIGdldCB5ZWxsb3cgKCkgeyByZXR1cm4gMTEgfVxuICBnZXQgYmx1ZSAoKSB7IHJldHVybiAxMiB9XG4gIGdldCBmdWNoc2lhICgpIHsgcmV0dXJuIDEzIH1cbiAgZ2V0IGN5YW4gKCkgeyByZXR1cm4gMTQgfVxuICBnZXQgd2hpdGUgKCkgeyByZXR1cm4gMTUgfVxuXG4gIHRvX3JlZCAocmdiYSkgeyByZXR1cm4gdGhpcy5yZ2JhKHJnYmEpLnIgfVxuXG4gIHRvX2dyZWVuIChyZ2JhKSB7IHJldHVybiB0aGlzLnJnYmEocmdiYSkuZyB9XG5cbiAgdG9fYmx1ZSAocmdiYSkgeyByZXR1cm4gdGhpcy5yZ2JhKHJnYmEpLmIgfVxuXG4gIHRvX2FscGhhIChyZ2JhKSB7IHJldHVybiB0aGlzLnJnYmEocmdiYSkuYSB9XG5cbiAgc3BsaXQgKHJnYmEpIHtcbiAgICBjb25zdCBMRSA9IHRoaXMuX0xFXG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IHJnYmEgPj4gKExFID8gMjQgOiAwKSAmIDB4RkYsXG4gICAgICBnOiByZ2JhID4+IChMRSA/IDE2IDogOCkgJiAweEZGLFxuICAgICAgYjogcmdiYSA+PiAoTEUgPyA4IDogMTYpICYgMHhGRixcbiAgICAgIGE6IHJnYmEgPj4gKExFID8gMCA6IDI0KSAmIDB4RkYsXG4gICAgfVxuICB9XG5cbiAgcmdiYSAociwgZywgYiwgYSkge1xuICAgIGxldCBjID0gZyA/IGEgPDwgMjQgfCByIDw8IDE2IHwgZyA8PCA4IHwgYiA6IHJcbiAgICByZXR1cm4gdGhpcy5fTEUgPyByZXZlcnNlKGMpIDogY1xuICB9XG5cbiAgY29sb3IgKGMsIHIsIGcsIGIsIGEpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGlmIChyKSB7XG4gICAgICBkYXRhW2NdID0gdGhpcy5yZ2JhKHIsIGcsIGIsIGEpXG4gICAgfVxuICAgIHJldHVybiBkYXRhW2NdXG4gIH1cblxuICBmaW5kX2NvbG9yIChyLCBnLCBiLCBhKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgY29sb3IgPSB0aGlzLnJnYmEociwgZywgYiwgYSlcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuX2NvdW50OyBjKyspIHtcbiAgICAgIGlmIChkYXRhW2NdID09PSBjb2xvcikge1xuICAgICAgICByZXR1cm4gY1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTFcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvcmFpbmJvdy5qcyIsImltcG9ydCB7IEVtaXR0ZXIgfSBmcm9tICcuLi8uLi9lbWl0dGVyLmpzJ1xuaW1wb3J0IHsgYXN5bmMgfSBmcm9tICcuLi8uLi91dGlscy5qcydcbmltcG9ydCB7IGRhdGFfdHlwZV9zaXplcywgZGF0YV90eXBlX2ZucyB9IGZyb20gJy4uL21lbW9yeS5qcydcblxudmFyIGN1cnJlbnRPZmZzZXQgPSAwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaXAgZXh0ZW5kcyBFbWl0dGVyIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuX21haW4gPSBtYWluXG5cbiAgICB0aGlzLl93aWR0aCA9IDBcbiAgICB0aGlzLl9oZWlnaHQgPSAwXG5cbiAgICB0aGlzLl9jb3VudCA9IDBcblxuICAgIHRoaXMuX2RhdGEgPSBudWxsXG4gICAgdGhpcy5fZGF0YV9mb3JtYXQgPSBudWxsXG4gICAgdGhpcy5fdG9wID0gMFxuICAgIHRoaXMuX2JvdHRvbSA9IDBcbiAgICB0aGlzLl9zaXplID0gMFxuICAgIHRoaXMuX2NlbGxfc2l6ZSA9IDBcbiAgICB0aGlzLl9kYXRhX3NpemUgPSAwXG4gIH1cblxuICBpbml0IChuYW1lID0gJycsIGtleXMgPSBbXSwgbm9kYXRhID0gZmFsc2UpIHtcbiAgICBsZXQgbWFpbiA9IHRoaXMuX21haW5cblxuICAgIGZvciAobGV0IGsgb2Yga2V5cykge1xuICAgICAgdGhpc1snXycgKyBrXSA9IG1haW4uZGVmYXVsdHMobmFtZSArICcuJyArIGspXG4gICAgfVxuXG4gICAgaWYgKCFub2RhdGEpIHtcbiAgICAgIHRoaXMuX2NvdW50ID0gdGhpcy5fY291bnQgfHwgMVxuICAgICAgdGhpcy5fd2lkdGggPSB0aGlzLl93aWR0aCB8fCAxXG4gICAgICB0aGlzLl9oZWlnaHQgPSB0aGlzLl9oZWlnaHQgfHwgMVxuXG4gICAgICB0aGlzLl9kYXRhX2Zvcm1hdCA9IG1haW4uZGVmYXVsdHMobmFtZSArICcuZGF0YV9mb3JtYXQnKSB8fCAnaTgnXG4gICAgICB0aGlzLl9kYXRhX3NpemUgPSBtYWluLmRlZmF1bHRzKG5hbWUgKyAnLmRhdGFfc2l6ZScpIHx8IDFcbiAgICAgIHRoaXMuX2RhdGFfc2l6ZSA9IF8uaXNTdHJpbmcodGhpcy5fZGF0YV9mb3JtYXQpID8gZGF0YV90eXBlX3NpemVzW3RoaXMuX2RhdGFfZm9ybWF0XSA6IHRoaXMuX2RhdGFfc2l6ZVxuXG4gICAgICB0aGlzLl9jZWxsX3NpemUgPSB0aGlzLl93aWR0aCAqIHRoaXMuX2hlaWdodCAqIHRoaXMuX2RhdGFfc2l6ZVxuXG4gICAgICB0aGlzLl9zaXplID0gdGhpcy5fY2VsbF9zaXplICogdGhpcy5fY291bnRcblxuICAgICAgdGhpcy5fdG9wID0gXy5nZXQobWFpbiwgJ21lbV9tYXAuJyArIG5hbWUgKyAnLnRvcCcsIGN1cnJlbnRPZmZzZXQpXG4gICAgICB0aGlzLl9ib3R0b20gPSB0aGlzLl90b3AgKyB0aGlzLl9zaXplIC0gMVxuXG4gICAgICBfLnNldChtYWluLCAnbWVtX21hcC4nICsgbmFtZSwge1xuICAgICAgICB0b3A6IHRoaXMuX3RvcCxcbiAgICAgICAgYm90dG9tOiB0aGlzLl9ib3R0b20sXG4gICAgICAgIHNpemU6IHRoaXMuX3NpemUsXG4gICAgICAgIGRhdGFfZm9ybWF0OiB0aGlzLl9kYXRhX2Zvcm1hdCxcbiAgICAgICAgZGF0YV9zaXplOiB0aGlzLl9kYXRhX3NpemUsXG4gICAgICAgIGNlbGxfc2l6ZTogdGhpcy5fY2VsbF9zaXplLFxuICAgICAgICBjb3VudDogdGhpcy5fY291bnQsXG4gICAgICB9KVxuXG4gICAgICBjdXJyZW50T2Zmc2V0ID0gdGhpcy5fYm90dG9tICsgMVxuXG4gICAgICB0aGlzLl9kYXRhID0gbmV3IHdpbmRvd1tkYXRhX3R5cGVfZm5zW3RoaXMuX2RhdGFfZm9ybWF0XSArICdBcnJheSddKHRoaXMubWVtb3J5LmJ1ZmZlciwgdGhpcy5fdG9wLCB0aGlzLl9zaXplKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXIoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gIH1cblxuICBnZXQgbWFpbiAoKSB7IHJldHVybiB0aGlzLl9tYWluIH1cbiAgZ2V0IG1lbW9yeSAoKSB7IHJldHVybiB0aGlzLl9tYWluLm1lbW9yeSB9XG5cbiAgZ2V0IGd1aWRlbyAoKSB7IHJldHVybiB0aGlzLl9tYWluLmd1aWRlbyB9XG4gIGdldCByYWluYm93ICgpIHsgcmV0dXJuIHRoaXMuZ3VpZGVvLnJhaW5ib3cgfVxuICBnZXQgZm9uem8gKCkgeyByZXR1cm4gdGhpcy5ndWlkZW8uZm9uem8gfVxuICBnZXQgb3J3ZWxsICgpIHsgcmV0dXJuIHRoaXMuZ3VpZGVvLm9yd2VsbCB9XG4gIGdldCBiZWFnbGUgKCkgeyByZXR1cm4gdGhpcy5vcndlbGwuYmVhZ2xlIH1cbiAgZ2V0IHZpb2xldCAoKSB7IHJldHVybiB0aGlzLmd1aWRlby52aW9sZXQgfVxuXG4gIGdldCBkYXRhICgpIHsgcmV0dXJuIHRoaXMuX2RhdGEgfVxuICBnZXQgdG9wICgpIHsgcmV0dXJuIHRoaXMuX3RvcCB9XG4gIGdldCBib3R0b20gKCkgeyByZXR1cm4gdGhpcy5fYm90dG9tIH1cbiAgZ2V0IHNpemUgKCkgeyByZXR1cm4gdGhpcy5fc2l6ZSB9XG5cbiAgZ2V0IGNvdW50ICgpIHsgcmV0dXJuIHRoaXMuX2NvdW50IH1cbiAgZ2V0IGRhdGFfc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9kYXRhX3NpemUgfVxuICBnZXQgY2VsbF9zaXplICgpIHsgcmV0dXJuIHRoaXMuX2NlbGxfc2l6ZSB9XG5cbiAgZ2V0IHdpZHRoICgpIHsgcmV0dXJuIHRoaXMuX3dpZHRoIH1cbiAgZ2V0IGhlaWdodCAoKSB7IHJldHVybiB0aGlzLl9oZWlnaHQgfVxuXG4gIHVwZGF0ZSAoZmxpcCA9IGZhbHNlKSB7XG4gICAgbGV0IGd1aWRlbyA9IHRoaXMuZ3VpZGVvXG4gICAgZ3VpZGVvLmZvcmNlX3JlZHJhdyA9IHRydWVcbiAgICBndWlkZW8uZm9yY2VfZmxpcCA9IGd1aWRlby5mb3JjZV9mbGlwIHx8IGZsaXBcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdGljayAodCkge1xuICB9XG5cbiAgY2xlYXIgKHYgPSAwKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGEuZmlsbCh2KVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgYXN5bmMgKGZuLCBhcmdzLCBkZWxheSkge1xuICAgIGFzeW5jKHRoaXMsIGZuLCBhcmdzLCBkZWxheSlcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvY2hpcC5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi4vLi4vZ2xvYmFscy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9uem8gZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoJ2ZvbnpvJywgWydjb3VudCcsICd3aWR0aCcsICdoZWlnaHQnXSlcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcblxuICAgIHRoaXMubWVtb3J5LmZyb21fYXJyYXlfbWFzayh0aGlzLl90b3AgKyAzMyAqIHRoaXMuX2NlbGxfc2l6ZSwgW1xuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3IHcgJyxcbiAgICAgICAgJyAgdyB3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnIHd3d3cgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgd3d3dyAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgd3d3ICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnICB3IHcgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnIHcgdyAgJyxcbiAgICAgICAgJyB3d3cgdycsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnICB3dyB3JyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3IHcgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgdyB3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgdyAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3d3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgd3d3dyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHd3d3cgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgICAgdyAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyAgICB3ICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgd3d3dyAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyAgICB3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgd3d3dyAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgICAgdyAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgd3d3ICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHd3d3cgJyxcbiAgICAgICAgJyAgICB3ICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3d3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHd3d3cgJyxcbiAgICAgICAgJyAgICB3ICcsXG4gICAgICAgICcgd3d3dyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3dyAgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyB3IHd3ICcsXG4gICAgICAgICcgdyB3dyAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyAgd3d3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3d3d3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3d3cgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyAgd3d3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3d3ICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgd3d3dyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHd3d3cgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgdyB3dyAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHd3d3cgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHd3dyAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgdyB3ICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyB3ICAnLFxuICAgICAgICAnIHd3ICAgJyxcbiAgICAgICAgJyB3IHcgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyB3d3d3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgdyAgIHcnLFxuICAgICAgICAnIHd3d3d3JyxcbiAgICAgICAgJyB3IHcgdycsXG4gICAgICAgICcgdyAgIHcnLFxuICAgICAgICAnIHcgICB3JyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3ICAgdycsXG4gICAgICAgICcgd3cgIHcnLFxuICAgICAgICAnIHcgdyB3JyxcbiAgICAgICAgJyB3ICB3dycsXG4gICAgICAgICcgdyAgIHcnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgd3d3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHd3dyAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgICAgdyAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3d3dycsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgdyAgIHcnLFxuICAgICAgICAnIHcgICB3JyxcbiAgICAgICAgJyB3ICAgdycsXG4gICAgICAgICcgIHcgdyAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3ICAgdycsXG4gICAgICAgICcgdyAgIHcnLFxuICAgICAgICAnIHcgICB3JyxcbiAgICAgICAgJyB3IHcgdycsXG4gICAgICAgICcgd3cgd3cnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHcgICB3JyxcbiAgICAgICAgJyAgdyB3ICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICB3IHcgJyxcbiAgICAgICAgJyB3ICAgdycsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgdyAgIHcnLFxuICAgICAgICAnICB3IHcgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3d3d3ICcsXG4gICAgICAgICcgICAgdyAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgd3d3dyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICAgdyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgd3d3ICcsXG4gICAgICAgICcgICAgdyAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyAgICB3ICcsXG4gICAgICAgICcgIHd3dyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyB3IHcgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHd3d3cgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyAgICB3ICcsXG4gICAgICAgICcgIHd3dyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHd3dyAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgIHd3dyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyAgd3d3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyAgd3d3ICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3d3d3ICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnICB3d3cgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnd3d3ICAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgIHd3dyAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnIHcgICAgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgdyAnLFxuICAgICAgICAnIHcgdyAgJyxcbiAgICAgICAgJyB3dyAgICcsXG4gICAgICAgICcgdyB3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgdyB3ICcsXG4gICAgICAgICcgdyB3IHcnLFxuICAgICAgICAnIHcgICB3JyxcbiAgICAgICAgJyB3ICAgdycsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgd3cgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgIHd3dyAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgdyAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyB3dyAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnIHd3dyAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgIHcgdyAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgdyAgdyAnLFxuICAgICAgICAnIHcgIHcgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgIHd3ICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgdyB3ICAnLFxuICAgICAgICAnIHd3ICAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHcgICB3JyxcbiAgICAgICAgJyB3ICAgdycsXG4gICAgICAgICcgdyB3IHcnLFxuICAgICAgICAnICB3IHcgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgIHcgdyAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgIHcgdyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyB3ICB3ICcsXG4gICAgICAgICcgIHd3dyAnLFxuICAgICAgICAnICAgIHcgJyxcbiAgICAgICAgJyB3d3cgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnIHd3d3cgJyxcbiAgICAgICAgJyAgIHcgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnIHd3d3cgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgIHd3ICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnIHd3ICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICB3dyAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgIHcgICAnLFxuICAgICAgICAnICB3ICAgJyxcbiAgICAgICAgJyAgdyAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgd3cgICAnLFxuICAgICAgICAnICAgdyAgJyxcbiAgICAgICAgJyAgIHd3ICcsXG4gICAgICAgICcgICB3ICAnLFxuICAgICAgICAnIHd3ICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnICAgICAgJyxcbiAgICAgICAgJyAgICAgICcsXG4gICAgICAgICcgICAgdyAnLFxuICAgICAgICAnICB3dyAgJyxcbiAgICAgICAgJyB3ICAgICcsXG4gICAgICAgICcgICAgICAnLFxuICAgICAgICAnICAgICAgJyxcbiAgICAgIF0sXG4gICAgXSwgZGVmYXVsdHMuY2hhcnNfbWFwKVxuXG4gICAgdGhpcy50ZXN0KClcbiAgfVxuXG4gIGRyYXcgKHgsIHksIGMsIGZnID0gMTUsIGJnID0gMCkge1xuICAgIHJldHVybiB0aGlzLmd1aWRlby5ibGl0X21hc2sodGhpcy5fdG9wICsgYyAqIHRoaXMuX2NlbGxfc2l6ZSwgeCwgeSwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCwgZmcsIGJnKVxuICB9XG5cbiAgdGVzdCAoKSB7XG4gICAgLy8gdGhpcy5kcmF3KDQwLCA0MCwgNjUsIDEwLCAzKVxuICAgIC8vIHRoaXMuZHJhdyg0NywgNDAsIDY2LCAxMiwgMTUpXG4gICAgLy8gdGhpcy5kcmF3KDU0LCA0MCwgMzMsIDUsIDgpXG5cbiAgICBsZXQgY3cgPSB0aGlzLl93aWR0aFxuICAgIGxldCBjaCA9IHRoaXMuX2hlaWdodFxuXG4gICAgbGV0IHh4ID0gMFxuICAgIGxldCB5ID0gNCAqIGNoXG4gICAgZm9yIChsZXQgeCA9IDMzOyB4IDwgNzM7IHgrKykge1xuICAgICAgdGhpcy5kcmF3KHh4ICogY3csIHksIHgsIF8ucmFuZG9tKDIsIDE1KSwgMSlcbiAgICAgIHh4KytcbiAgICB9XG5cbiAgICB4eCA9IDBcbiAgICB5ID0gNSAqIGNoXG4gICAgZm9yIChsZXQgeCA9IDczOyB4IDwgMTEzOyB4KyspIHtcbiAgICAgIHRoaXMuZHJhdyh4eCAqIGN3LCB5LCB4LCBfLnJhbmRvbSgyLCAxNSksIDEpXG4gICAgICB4eCsrXG4gICAgfVxuXG4gICAgeHggPSAwXG4gICAgeSA9IDYgKiBjaFxuICAgIGZvciAobGV0IHggPSAxMTM7IHggPCAxMjY7IHgrKykge1xuICAgICAgdGhpcy5kcmF3KHh4ICogY3csIHksIHgsIF8ucmFuZG9tKDIsIDE1KSwgMSlcbiAgICAgIHh4KytcbiAgICB9XG5cbiAgICB0aGlzLmRyYXcoMTAgKiBjdywgMTAgKiBjaCwgJ0EnLmNoYXJDb2RlQXQoMCkpXG4gICAgdGhpcy5kcmF3KDExICogY3csIDEwICogY2gsICdsJy5jaGFyQ29kZUF0KDApKVxuICAgIHRoaXMuZHJhdygxMiAqIGN3LCAxMCAqIGNoLCAnYScuY2hhckNvZGVBdCgwKSlcbiAgICB0aGlzLmRyYXcoMTMgKiBjdywgMTAgKiBjaCwgJ2knLmNoYXJDb2RlQXQoMCkpXG4gICAgdGhpcy5kcmF3KDE0ICogY3csIDEwICogY2gsICduJy5jaGFyQ29kZUF0KDApKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy9mb256by5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3J3ZWxsIGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdvcndlbGwnLCBbJ3dpZHRoJywgJ2hlaWdodCddKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICBjbGVhciAoY2ggPSAnICcsIGJnID0gMCkge1xuICAgIHRoaXMuX2RhdGEuZmlsbCgweEZGMDAwMCAmIGNoLmNoYXJDb2RlQXQoMCkgfCAweDAwMDBGRiAmIGJnKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBsZXQgdyA9IHRoaXMuX3dpZHRoXG4gICAgbGV0IGggPSB0aGlzLl9oZWlnaHRcbiAgICBsZXQgbWVtID0gdGhpcy5fZGF0YVxuICAgIGxldCBmbnQgPSB0aGlzLmZvbnpvXG4gICAgbGV0IGZ3ID0gZm50LndpZHRoXG4gICAgbGV0IGZoID0gZm50LmhlaWdodFxuXG4gICAgbGV0IGlkeCA9IDBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGg7IHkrKykge1xuICAgICAgbGV0IHB5ID0geSAqIGZoXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHc7IHgrKykge1xuICAgICAgICBsZXQgYyA9IG1lbVtpZHhdXG4gICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgZm50LmRyYXcoeCAqIGZ3LCBweSwgYywgbWVtW2lkeCArIDFdLCBtZW1baWR4ICsgMl0pXG4gICAgICAgIH1cbiAgICAgICAgaWR4ICs9IDNcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgZHJhd19jaGFyICh4LCB5LCBjLCBmZywgYmcpIHtcbiAgICBsZXQgZm50ID0gdGhpcy5mb256b1xuICAgIGZudC5kcmF3KHggKiBmbnQud2lkdGgsIHkgKiBmbnQuaGVpZ2h0LCBjLCBmZywgYmcpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGluZGV4ICh4LCB5KSB7XG4gICAgcmV0dXJuICgoeSAtIDEpICogdGhpcy5fd2lkdGggKyAoeCAtIDEpKSAqIDNcbiAgfVxuXG4gIGxpbmUgKHkpIHtcbiAgICBsZXQgbCA9IHRoaXMuX3dpZHRoICogM1xuICAgIHJldHVybiB7IHN0YXJ0OiB5ICogbCwgZW5kOiAoeSArIDEpICogbCAtIDMsIGxlbmd0aDogbCB9XG4gIH1cblxuICBjaGFyX2F0ICh4LCB5KSB7XG4gICAgbGV0IHRpZHggPSB0aGlzLmluZGV4KHgsIHkpXG4gICAgbGV0IG1lbSA9IHRoaXMuX2RhdGFcbiAgICByZXR1cm4geyBjaDogbWVtW3RpZHhdLCBmZzogbWVtW3RpZHggKyAxXSwgYmc6IG1lbVt0aWR4ICsgMl0gfVxuICB9XG5cbiAgcHV0X2NoYXIgKGNoLCBmZyA9IDEsIGJnID0gMCkge1xuICAgIHN3aXRjaCAoY2guY2hhckNvZGVBdCgwKSkge1xuICAgICAgY2FzZSAxMzpcbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIHJldHVybiB0aGlzLmNyKClcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcmV0dXJuIHRoaXMuYnMoKVxuICAgIH1cblxuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zKClcbiAgICB0aGlzLl9kYXRhLnNldChbY2guY2hhckNvZGVBdCgwKSwgZmcsIGJnXSwgdGhpcy5pbmRleCh4LCB5KSlcblxuICAgIHRoaXMuYmVhZ2xlLngrK1xuICAgIGlmICh0aGlzLmJlYWdsZS54ID4gdGhpcy5fd2lkdGgpIHtcbiAgICAgIHRoaXMuY3IoKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRyYXdfY2hhcih4LCB5LCBjaCwgZmcsIGJnKVxuICB9XG5cbiAgcHJpbnQgKHRleHQsIGZnLCBiZykge1xuICAgIGZvciAobGV0IGMgb2YgdGV4dCkge1xuICAgICAgdGhpcy5wdXRfY2hhcihjLCBmZywgYmcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwb3MgKCkgeyByZXR1cm4geyB4OiB0aGlzLmJlYWdsZS54LCB5OiB0aGlzLmJlYWdsZS55IH0gfVxuXG4gIG1vdmVfdG8gKHgsIHkpIHsgcmV0dXJuIHRoaXMuYmVhZ2xlLm1vdmVfdG8oeCwgeSkgfVxuXG4gIG1vdmVfYnkgKHgsIHkpIHsgcmV0dXJuIHRoaXMuYmVhZ2xlLm1vdmVfYnkoeCwgeSkgfVxuXG4gIGJvbCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8oMSwgdGhpcy5iZWFnbGUueSkgfVxuXG4gIGVvbCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5fd2lkdGgsIHRoaXMuYmVhZ2xlLnkpIH1cblxuICBib3MgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKDEsIDEpIH1cblxuICBlb3MgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpIH1cblxuICBicyAoKSB7IHJldHVybiB0aGlzLmxlZnQoKS5wdXRfY2hhcignICcpLmxlZnQoKSB9XG5cbiAgY3IgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKDEsIHRoaXMuYmVhZ2xlLnkgKyAxKSB9XG5cbiAgbGYgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuYmVhZ2xlLngsIHRoaXMuYmVhZ2xlLnkgKyAxKSB9XG5cbiAgdXAgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuYmVhZ2xlLngsIHRoaXMuYmVhZ2xlLnkgLSAxKSB9XG5cbiAgbGVmdCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5iZWFnbGUueCAtIDEsIHRoaXMuYmVhZ2xlLnkpIH1cblxuICBkb3duICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLmJlYWdsZS54LCB0aGlzLmJlYWdsZS55ICsgMSkgfVxuXG4gIHJpZ2h0ICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLmJlYWdsZS54ICsgMSwgdGhpcy5iZWFnbGUueSkgfVxuXG4gIGNsZWFyX2VvbCAoYmcgPSAwKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MoKVxuICAgIGxldCBzID0gdGhpcy5pbmRleCh4LCB5KVxuICAgIHRoaXMuX2RhdGEuZmlsbCgweDAwMDBGRiAmIGJnLCBzLCB0aGlzLmluZGV4KHRoaXMuX3dpZHRoLCB5KSAtIHMpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNsZWFyX2VvcyAoYmcgPSAwKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MoKVxuICAgIGxldCBzID0gdGhpcy5pbmRleCh4LCB5KVxuICAgIHRoaXMuX2RhdGEuZmlsbCgweDAwMDBGRiAmIGJnLCBzLCB0aGlzLl9zaXplIC0gcylcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY2xlYXJfYm9sIChiZyA9IDApIHtcbiAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcygpXG4gICAgbGV0IHMgPSB0aGlzLmluZGV4KHgsIHkpXG4gICAgdGhpcy5fZGF0YS5maWxsKDB4MDAwMEZGICYgYmcsIHMsIHRoaXMuaW5kZXgoMSwgeSkgLSBzKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjbGVhcl9ib3MgKGJnID0gMCkge1xuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zKClcbiAgICB0aGlzLl9kYXRhLmZpbGwoMHgwMDAwRkYgJiBiZywgMCwgdGhpcy5pbmRleCh4LCB5KSAtIDEpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNvcHlfbGluZSAoc3ksIHR5KSB7XG4gICAgbGV0IHNpID0gdGhpcy5saW5lKHN5KVxuICAgIHRoaXMuX2RhdGEuY29weShzaS5zdGFydCwgdGhpcy5saW5lKHR5KSwgc2kubGVuZ3RoKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjb3B5X2NvbCAoc3gsIHR4KSB7XG4gICAgbGV0IG1lbSA9IHRoaXMuX2RhdGFcbiAgICBzeCAqPSA0XG4gICAgdHggKj0gNFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5faGVpZ2h0OyB5KyspIHtcbiAgICAgIGxldCBpID0gdGhpcy5saW5lKHkpXG4gICAgICBtZW0uY29weShpLnN0YXJ0ICsgc3gsIGkuc3RhcnQgKyB0eCwgMylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGVyYXNlX2xpbmUgKHksIGJnID0gMCkge1xuICAgIGxldCBpID0gdGhpcy5saW5lKHkpXG4gICAgdGhpcy5fZGF0YS5maWxsKDB4MDAwMEZGICYgYmcsIGkuc3RhcnQsIGkubGVuZ3RoKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBlcmFzZV9jb2wgKHgsIGJnID0gMCkge1xuICAgIGxldCBtZW0gPSB0aGlzLl9kYXRhXG4gICAgbGV0IGxzID0gdGhpcy5saW5lKDApLnN0YXJ0ICsgeCAqIDNcbiAgICBsZXQgYyA9IDB4MDAwMEZGICYgYmdcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX2hlaWdodDsgeSsrKSB7XG4gICAgICBtZW0uZmlsbChjLCBscywgMylcbiAgICAgIGxzICs9IHRoaXMuX3dpZHRoICogM1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgc2Nyb2xsIChkeSkge1xuICAgIGlmIChkeSA+IDApIHtcbiAgICAgIGxldCBpID0gdGhpcy5saW5lKGR5ICsgMSlcbiAgICAgIHRoaXMuX2RhdGEuY29weShpLnN0YXJ0LCAwLCB0aGlzLl9zaXplKVxuICAgICAgaSA9IHRoaXMubGluZShkeSlcbiAgICAgIGxldCBzID0gaS5zdGFydFxuICAgICAgdGhpcy5fZGF0YS5maWxsKDAsIHMsIHRoaXMuX3NpemUgLSBzKVxuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgICB9XG4gICAgZWxzZSBpZiAoZHkgPCAwKSB7XG4gICAgICBsZXQgaSA9IHRoaXMubGluZShkeSArIDEpXG4gICAgICB0aGlzLl9kYXRhLmNvcHkoaS5zdGFydCwgMCwgdGhpcy5fc2l6ZSlcbiAgICAgIGkgPSB0aGlzLmxpbmUoZHkpXG4gICAgICBsZXQgcyA9IGkuc3RhcnRcbiAgICAgIHRoaXMuX2RhdGEuZmlsbCgwLCBzLCB0aGlzLl9zaXplIC0gcylcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL29yd2VsbC5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVhZ2xlIGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdiZWFnbGUnLCBbJ3dpZHRoJywgJ2hlaWdodCcsICdjb2xvcicsICdibGlua3JhdGUnLCAndmlzaWJsZSddKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuICAgIHRoaXMuX3ggPSAwXG4gICAgdGhpcy5feSA9IDBcbiAgICB0aGlzLl9sYXN0ID0gMFxuICAgIHRoaXMuX2JsaW5rX2hpZGRlbiA9IGZhbHNlXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBpZiAodCAtIHRoaXMuX2xhc3QgPj0gdGhpcy5fYmxpbmtyYXRlKSB7XG4gICAgICB0aGlzLmJsaW5rKClcbiAgICAgIHRoaXMuX2xhc3QgPSB0XG4gICAgfVxuICB9XG5cbiAgZ2V0IHggKCkgeyByZXR1cm4gdGhpcy5feCB9XG4gIHNldCB4ICh2YWx1ZSkgeyB0aGlzLl94ID0gdmFsdWUgfVxuXG4gIGdldCB5ICgpIHsgcmV0dXJuIHRoaXMuX3kgfVxuICBzZXQgeSAodmFsdWUpIHsgdGhpcy5feSA9IHZhbHVlIH1cblxuICBnZXQgY29sb3IgKCkgeyByZXR1cm4gdGhpcy5fY29sb3IgfVxuICBzZXQgY29sb3IgKHZhbHVlKSB7IHRoaXMuX2NvbG9yID0gdmFsdWUgfVxuXG4gIGdldCBibGlua3JhdGUgKCkgeyByZXR1cm4gdGhpcy5fYmxpbmtyYXRlIH1cbiAgc2V0IGJsaW5rcmF0ZSAodmFsdWUpIHsgdGhpcy5fYmxpbmtyYXRlID0gdmFsdWUgfVxuXG4gIGJsaW5rICgpIHtcbiAgICBpZiAodGhpcy5fdmlzaWJsZSkge1xuICAgICAgdGhpcy5fYmxpbmtfaGlkZGVuID0gIXRoaXMuX2JsaW5rX2hpZGRlblxuICAgICAgdGhpcy51cGRhdGUodHJ1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIG1vdmVfdG8gKHgsIHkpIHtcbiAgICBjb25zdCBvcndlbGwgPSB0aGlzLm9yd2VsbFxuICAgIGxldCB3ID0gb3J3ZWxsLndpZHRoXG4gICAgbGV0IGggPSBvcndlbGwuaGVpZ2h0XG5cbiAgICBpZiAoeCA+IHcpIHtcbiAgICAgIHggPSB3XG4gICAgfVxuICAgIGVsc2UgaWYgKHggPCAxKSB7XG4gICAgICB4ID0gMVxuICAgIH1cblxuICAgIGlmICh5ID4gaCkge1xuICAgICAgeSA9IGhcbiAgICB9XG4gICAgZWxzZSBpZiAoeSA8IDEpIHtcbiAgICAgIHkgPSAxXG4gICAgfVxuXG4gICAgdGhpcy5feCA9IHhcbiAgICB0aGlzLl95ID0geVxuXG4gICAgcmV0dXJuIHRoaXMuZHJhdyh4LCB5KVxuICB9XG5cbiAgbW92ZV9ieSAoeCwgeSkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuX3ggKyB4LCB0aGlzLl95ICsgeSkgfVxuXG4gIGRyYXcgKHgsIHkpIHtcbiAgICBsZXQgdyA9IHRoaXMuX3dpZHRoXG4gICAgbGV0IGggPSB0aGlzLl9oZWlnaHRcbiAgICBsZXQgYyA9IHRoaXMuX2NvbG9yXG4gICAgbGV0IGd1aWRlbyA9IHRoaXMuZ3VpZGVvXG5cbiAgICBmb3IgKGxldCBieSA9IDA7IGJ5IDwgaDsgYnkrKykge1xuICAgICAgbGV0IHBpID0gKHkgKyBieSkgKiB3ICsgeFxuICAgICAgZm9yIChsZXQgYnggPSAwOyBieCA8IHc7IGJ4KyspIHtcbiAgICAgICAgZ3VpZGVvLnBpeGVsKHBpKyssIGMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKHRydWUpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL2JlYWdsZS5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcbmltcG9ydCBDYW52YXNUZXh0dXJlIGZyb20gJy4uL2NhbnZhc3RleHR1cmUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpb2xldCBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgndmlvbGV0JywgWydkYXRhX3NpemUnLCAnY291bnQnLCAnd2lkdGgnLCAnaGVpZ2h0J10pXG5cbiAgICB0aGlzLl9jYW52YXNUZXh0dXJlID0gbmV3IENhbnZhc1RleHR1cmUoKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuXG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZS5kZXN0cm95KClcblxuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUuY3JlYXRlKHRoaXMuX3dpZHRoICogdGhpcy5fY291bnQsIHRoaXMuX2hlaWdodClcblxuICAgIHRoaXMuX3Nwcml0ZXNMYXllciA9IHRoaXMuX21haW4uZ3VpZGVvLnNwcml0ZXNMYXllclxuXG4gICAgdGhpcy5jbGVhcigpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9jYW52YXNUZXh0dXJlLmRlc3Ryb3koKVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICBjbGVhciAoKSB7XG4gICAgaWYgKHRoaXMuX3Nwcml0ZXNMYXllcikge1xuICAgICAgdGhpcy5fc3ByaXRlc0xheWVyLnJlbW92ZUNoaWxkcmVuKClcbiAgICB9XG5cbiAgICBzdXBlci5jbGVhcigpXG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgZ2V0IHNwcml0ZXNMYXllciAoKSB7IHJldHVybiB0aGlzLl9zcHJpdGVzTGF5ZXIgfVxuXG4gIGdldCBjYW52YXNUZXh0dXJlICgpIHsgcmV0dXJuIHRoaXMuX2NhbnZhc1RleHR1cmUgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZS51cGRhdGVUZXh0dXJlKHRoaXMuX2RhdGEsIHRoaXMucmFpbmJvdylcbiAgfVxuXG4gIGZpbmQgKG5hbWUpIHtcbiAgICByZXR1cm4gXy5maW5kKHRoaXMuc3ByaXRlc0xheWVyLmNoaWxkcmVuLCB7IF9uYW1lOiBuYW1lIH0pXG4gIH1cblxuICBhZGQgKG5hbWUsIGZyYW1lLCB4LCB5LCB6KSB7XG4gICAgbGV0IHMgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fdGV4dHVyZSlcbiAgICBzLl9uYW1lID0gbmFtZVxuICAgIHRoaXMuZnJhbWUobmFtZSwgZnJhbWUpXG4gICAgdGhpcy5zcHJpdGVzTGF5ZXIuYWRkQ2hpbGQocylcbiAgICByZXR1cm4gc1xuICB9XG5cbiAgZGVsIChuYW1lKSB7XG4gICAgbGV0IHMgPSB0aGlzLmZpbmQobmFtZSlcbiAgICBpZiAocykge1xuICAgICAgdGhpcy5zcHJpdGVzTGF5ZXIucmVtb3ZlQ2hpbGQocylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGZyYW1lUmVjdCAoZnJhbWUpIHtcbiAgICBjb25zdCB3ID0gdGhpcy5fd2lkdGhcbiAgICBjb25zdCBoID0gdGhpcy5faGVpZ2h0XG4gICAgcmV0dXJuIG5ldyBQSVhJLlJlY3RhbmdsZShmcmFtZSAqIHcsIDAsIGZyYW1lICogdyArIHcsIGgpXG4gIH1cblxuICB4IChuYW1lLCB2YWx1ZSkge1xuICAgIGxldCBzID0gdGhpcy5maW5kKG5hbWUpXG4gICAgaWYgKHMgJiYgdmFsdWUpIHtcbiAgICAgIHMueCA9IHZhbHVlXG4gICAgfVxuICAgIHJldHVybiBzID8gcy54IDogMFxuICB9XG5cbiAgeSAobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgcyA9IHRoaXMuZmluZChuYW1lKVxuICAgIGlmIChzICYmIHZhbHVlKSB7XG4gICAgICBzLnkgPSB2YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gcyA/IHMueSA6IDBcbiAgfVxuXG4gIHogKG5hbWUsIHZhbHVlKSB7XG4gICAgbGV0IHMgPSB0aGlzLmZpbmQobmFtZSlcbiAgICBpZiAocyAmJiB2YWx1ZSkge1xuICAgICAgcy56ID0gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIHMgPyBzLnogOiAwXG4gIH1cblxuICBmcmFtZSAobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgcyA9IHRoaXMuZmluZChuYW1lKVxuICAgIGlmIChzICYmIHZhbHVlKSB7XG4gICAgICBzLl9fZnJhbWUgPSB2YWx1ZVxuICAgICAgcy50ZXh0dXJlID0gbmV3IFBJWEkuVGV4dHVyZSh0aGlzLl9jYW52YXNUZXh0dXJlLnRleHR1cmUsIHRoaXMuZnJhbWVSZWN0KHZhbHVlKSlcbiAgICB9XG4gICAgcmV0dXJuIHMgPyBzLl9fZnJhbWUgOiAwXG4gIH1cblxuICBtb3ZlX3RvIChuYW1lLCB4LCB5LCB6KSB7XG4gICAgbGV0IHMgPSB0aGlzLmZpbmQobmFtZSlcbiAgICBpZiAocykge1xuICAgICAgcy54ID0geFxuICAgICAgcy55ID0geVxuICAgICAgaWYgKHopIHtcbiAgICAgICAgcy56ID0gelxuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgbW92ZV9ieSAobmFtZSwgeCwgeSwgeikge1xuICAgIGxldCBzID0gdGhpcy5maW5kKG5hbWUpXG4gICAgaWYgKHMpIHtcbiAgICAgIHMueCArPSB4XG4gICAgICBzLnkgKz0geVxuICAgICAgaWYgKHopIHtcbiAgICAgICAgcy56ICs9IHpcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvdmlvbGV0LmpzIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNUZXh0dXJlIHtcblxuICBjcmVhdGUgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0XG5cbiAgICB0aGlzLl9zaXplID0gd2lkdGggKiBoZWlnaHRcblxuICAgIHRoaXMuX2NhbnZhc0J1ZmZlciA9IG5ldyBQSVhJLkNhbnZhc0J1ZmZlcih3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5fdGV4dHVyZSA9IFBJWEkuVGV4dHVyZS5mcm9tQ2FudmFzKHRoaXMuX2NhbnZhc0J1ZmZlci5jYW52YXMsIFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVClcbiAgICB0aGlzLl90ZXh0dXJlLnNjYWxlTW9kZSA9IFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVFxuXG4gICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhc0J1ZmZlci5jYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7IGFscGhhOiB0cnVlLCBhbnRpYWxpYXM6IGZhbHNlIH0pXG4gICAgdGhpcy5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodClcblxuICAgIHRoaXMuX2ltYWdlRGF0YSA9IHRoaXMuX2NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLl9waXhlbHMgPSBuZXcgVWludDMyQXJyYXkodGhpcy5faW1hZ2VEYXRhLmRhdGEuYnVmZmVyKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuX3RleHR1cmUpIHtcbiAgICAgIHRoaXMuX3RleHR1cmUuZGVzdHJveSgpXG4gICAgICB0aGlzLl90ZXh0dXJlID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jYW52YXNCdWZmZXIpIHtcbiAgICAgIHRoaXMuX2NhbnZhc0J1ZmZlci5kZXN0cm95KClcbiAgICAgIHRoaXMuX2NhbnZhc0J1ZmZlciA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc3ByaXRlKSB7XG4gICAgICB0aGlzLl9zcHJpdGUuZGVzdHJveSgpXG4gICAgICB0aGlzLl9zcHJpdGUgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgZ2V0IHNpemUgKCkgeyByZXR1cm4gdGhpcy5fc2l6ZSB9XG5cbiAgZ2V0IHdpZHRoICgpIHsgcmV0dXJuIHRoaXMuX3dpZHRoIH1cbiAgZ2V0IGhlaWdodCAoKSB7IHJldHVybiB0aGlzLl9oZWlnaHQgfVxuXG4gIGdldCB0ZXh0dXJlICgpIHsgcmV0dXJuIHRoaXMuX3RleHR1cmUgfVxuICBnZXQgY29udGV4dCAoKSB7IHJldHVybiB0aGlzLl9jb250ZXh0IH1cbiAgZ2V0IGNhbnZhc0J1ZmZlciAoKSB7IHJldHVybiB0aGlzLl9jYW52YXNCdWZmZXIgfVxuICBnZXQgY2FudmFzICgpIHsgcmV0dXJuIHRoaXMuX2NhbnZhc0J1ZmZlci5jYW52YXMgfVxuICBnZXQgaW1hZ2VEYXRhICgpIHsgcmV0dXJuIHRoaXMuX2ltYWdlRGF0YSB9XG4gIGdldCBwaXhlbHMgKCkgeyByZXR1cm4gdGhpcy5fcGl4ZWxzIH1cblxuICBnZXQgc3ByaXRlICgpIHtcbiAgICBpZiAoIXRoaXMuX3Nwcml0ZSkge1xuICAgICAgdGhpcy5fc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX3RleHR1cmUpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zcHJpdGVcbiAgfVxuXG4gIHVwZGF0ZVRleHR1cmUgKGRhdGEsIHBhbGV0dGUpIHtcbiAgICBpZiAodGhpcy5fY29udGV4dCkge1xuICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuX3NpemVcbiAgICAgIGNvbnN0IHBpeGVscyA9IHRoaXMuX3BpeGVsc1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBwaXhlbHNbaV0gPSBwYWxldHRlLmNvbG9yKGRhdGFbaV0pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NvbnRleHQucHV0SW1hZ2VEYXRhKHRoaXMuX2ltYWdlRGF0YSwgMCwgMClcblxuICAgICAgdGhpcy5fdGV4dHVyZS51cGRhdGUoKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NhbnZhc3RleHR1cmUuanMiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgQ2FudmFzVGV4dHVyZSBmcm9tICcuL2NhbnZhc3RleHR1cmUuanMnXG5cbmV4cG9ydCBjbGFzcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLl9vdmVybGF5cyA9IG92ZXJsYXlzXG5cbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0XG5cbiAgICB0aGlzLl9jYW52YXNUZXh0dXJlID0gbmV3IENhbnZhc1RleHR1cmUoKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIHJldHVybiB0aGlzLnJlc2l6ZSh0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuX3Nwcml0ZSkge1xuICAgICAgdGhpcy5fc3ByaXRlLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fc3ByaXRlID0gbnVsbFxuICAgIH1cblxuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUuZGVzdHJveSgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fbGFzdCA9IDBcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXNpemUgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0XG5cbiAgICB0aGlzLl9jYW52YXNUZXh0dXJlLmRlc3Ryb3koKVxuXG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZS5jcmVhdGUod2lkdGgsIGhlaWdodClcblxuICAgIGlmICh0aGlzLl9zcHJpdGUpIHtcbiAgICAgIHRoaXMuX3Nwcml0ZS5kZXN0cm95KClcbiAgICAgIHRoaXMuX3Nwcml0ZSA9IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLl9zcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUodGhpcy50ZXh0dXJlKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3VpZGVvLnVwZGF0ZSgpXG4gIH1cblxuICB1cGRhdGVUZXh0dXJlIChkYXRhLCBwYWxldHRlKSB7XG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZS51cGRhdGVUZXh0dXJlKGRhdGEsIHBhbGV0dGUpXG4gICAgcmV0dXJuIHRoaXMuZ3VpZGVvLnVwZGF0ZSh0cnVlKVxuICB9XG5cbiAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fb3ZlcmxheXMubWFpbiB9XG4gIGdldCBndWlkZW8gKCkgeyByZXR1cm4gdGhpcy5tYWluLmd1aWRlbyB9XG4gIGdldCBzdGFnZSAoKSB7IHJldHVybiB0aGlzLm1haW4uc3RhZ2UgfVxuICBnZXQgcmVuZGVyZXIgKCkgeyByZXR1cm4gdGhpcy5tYWluLnJlbmRlcmVyIH1cblxuICBnZXQgc3ByaXRlICgpIHsgcmV0dXJuIHRoaXMuX3Nwcml0ZSB9XG5cbiAgZ2V0IGNvbnRleHQgKCkgeyByZXR1cm4gdGhpcy5fY2FudmFzVGV4dHVyZS5jb250ZXh0IH1cbiAgZ2V0IHRleHR1cmUgKCkgeyByZXR1cm4gdGhpcy5fY2FudmFzVGV4dHVyZS50ZXh0dXJlIH1cbiAgZ2V0IGltYWdlRGF0YSAoKSB7IHJldHVybiB0aGlzLl9jYW52YXNUZXh0dXJlLmltYWdlRGF0YSB9XG4gIGdldCBwaXhlbHMgKCkgeyByZXR1cm4gdGhpcy5fY2FudmFzVGV4dHVyZS5waXhlbHMgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIEJvcmRlck92ZXJsYXkgZXh0ZW5kcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihvdmVybGF5cywgd2lkdGggKyBfLmdldChvcHRpb25zLCAnc2l6ZScsIDApICogMiwgaGVpZ2h0ICsgXy5nZXQob3B0aW9ucywgJ3NpemUnLCAwKSAqIDIpXG5cbiAgICB0aGlzLmNyZWF0ZSgpXG5cbiAgICB0aGlzLl9ncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKClcbiAgICB0aGlzLl9zcHJpdGUuYWRkQ2hpbGQodGhpcy5fZ3JhcGhpY3MpXG5cbiAgICB0aGlzLmNvbG9yID0gXy5nZXQob3B0aW9ucywgJ2NvbG9yJywgMClcbiAgfVxuXG4gIGdldCBjb2xvciAoKSB7IHJldHVybiB0aGlzLl9jb2xvciB9XG4gIHNldCBjb2xvciAodmFsdWUpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlXG4gICAgdGhpcy5fZ3JhcGhpY3MuYmVnaW5GaWxsKHRoaXMuZ3VpZGVvLnJhaW5ib3cuY29sb3IodGhpcy5fY29sb3IpLCAyNTUpXG4gICAgdGhpcy5fZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICB0aGlzLl9ncmFwaGljcy5lbmRGaWxsKClcbiAgfVxuXG4gIGdldCBncmFwaGljcyAoKSB7IHJldHVybiB0aGlzLl9ncmFwaGljcyB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgU2NyZWVuT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuICB9XG5cbiAgY3JlYXRlICgpIHtcbiAgICBzdXBlci5jcmVhdGUoKVxuXG4gICAgdGhpcy5fc3ByaXRlLnggPSB0aGlzLm1haW4uZGVmYXVsdHMoJ2JvcmRlci5zaXplJywgMClcbiAgICB0aGlzLl9zcHJpdGUueSA9IHRoaXMubWFpbi5kZWZhdWx0cygnYm9yZGVyLnNpemUnLCAwKVxuXG4gICAgdGhpcy5fc3ByaXRlc0xheWVyID0gbmV3IFBJWEkuQ29udGFpbmVyKClcbiAgICB0aGlzLl9zcHJpdGUuYWRkQ2hpbGQodGhpcy5fc3ByaXRlc0xheWVyKVxuXG4gICAgdGhpcy5fbW91c2VMYXllciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG4gICAgdGhpcy5fc3ByaXRlLmFkZENoaWxkKHRoaXMuX21vdXNlTGF5ZXIpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fZGF0YSA9IG51bGxcbiAgICB0aGlzLl9wYWxldHRlID0gbnVsbFxuXG4gICAgcmV0dXJuIHN1cGVyLnJlc2V0KClcbiAgfVxuXG4gIGdldCBzcHJpdGVzTGF5ZXIgKCkgeyByZXR1cm4gdGhpcy5fc3ByaXRlc0xheWVyIH1cbiAgZ2V0IG1vdXNlTGF5ZXIgKCkgeyByZXR1cm4gdGhpcy5fbW91c2VMYXllciB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLnVwZGF0ZVRleHR1cmUodGhpcy5fZGF0YSwgdGhpcy5fcGFsZXR0ZSlcbiAgICByZXR1cm4gdGhpcy5ndWlkZW8udXBkYXRlKHRydWUpXG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBTY2FubGluZXNPdmVybGF5IGV4dGVuZHMgT3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IgKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLl9nYXAgPSBfLmdldChvcHRpb25zLCAnZ2FwJywgNClcbiAgICB0aGlzLl9hbHBoYSA9IF8uZ2V0KG9wdGlvbnMsICdhbHBoYScsIDAuMzUpXG5cbiAgICB0aGlzLmNyZWF0ZSgpXG5cbiAgICBsZXQgYSA9IHRoaXMuX2FscGhhICogMjU1XG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG4gICAgbGV0IHBpeGVscyA9IGRhdGEuZGF0YVxuICAgIGxldCBzeiA9IHRoaXMuX3dpZHRoICogNFxuICAgIGxldCBpZHhcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX2hlaWdodDsgeSArPSB0aGlzLl9nYXApIHtcbiAgICAgIGlkeCA9IHkgKiBzelxuICAgICAgZm9yIChsZXQgaSA9IGlkeDsgaSA8IGlkeCArIHN6OyBpICs9IDQpIHtcbiAgICAgICAgcGl4ZWxzLnNldChbMCwgMCwgMCwgYV0sIGkpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMClcbiAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIFNjYW5saW5lT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5fcmF0ZSA9IF8uZ2V0KG9wdGlvbnMsICdyYXRlJywgNTApXG4gICAgdGhpcy5fc3BlZWQgPSBfLmdldChvcHRpb25zLCAnc3BlZWQnLCAyNilcbiAgICB0aGlzLl9hbHBoYSA9IF8uZ2V0KG9wdGlvbnMsICdhbHBoYScsIDAuMSlcblxuICAgIHRoaXMuY3JlYXRlKClcblxuICAgIGxldCBkYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuICAgIGxldCBwaXhlbHMgPSBkYXRhLmRhdGFcbiAgICBsZXQgc3ogPSB0aGlzLl93aWR0aCAqIDRcbiAgICBsZXQgbGVuID0gdGhpcy5faGVpZ2h0ICogc3pcbiAgICBsZXQgbCA9IDBcbiAgICBsZXQgaCA9IHRoaXMuX2hlaWdodFxuICAgIGxldCBhID0gdGhpcy5fYWxwaGEgKiAyNTVcbiAgICBsZXQgYWFcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbGVuOyB5ICs9IHN6KSB7XG4gICAgICBhYSA9IGwgLyBoICogYVxuICAgICAgZm9yIChsZXQgeCA9IHk7IHggPCB5ICsgc3o7IHggKz0gNCkge1xuICAgICAgICBwaXhlbHMuc2V0KFs1MCwgNTAsIDUwLCBhYV0sIHgpXG4gICAgICB9XG4gICAgICBsKytcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApXG5cbiAgICB0aGlzLl9zcHJpdGUueSA9IC10aGlzLl9zcHJpdGUuaGVpZ2h0XG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgaWYgKHQgLSB0aGlzLl9sYXN0ID49IHRoaXMuX3JhdGUpIHtcbiAgICAgIHRoaXMuc3ByaXRlLnkgKz0gdGhpcy5fc3BlZWRcbiAgICAgIGlmICh0aGlzLl9zcHJpdGUueSA+IHRoaXMuX2hlaWdodCkge1xuICAgICAgICB0aGlzLl9zcHJpdGUueSA9IC10aGlzLl9zcHJpdGUuaGVpZ2h0XG4gICAgICB9XG4gICAgICB0aGlzLl9sYXN0ID0gdFxuXG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgTm9pc2VzT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5fcmF0ZSA9IF8uZ2V0KG9wdGlvbnMsICdyYXRlJywgMjUwKVxuICAgIHRoaXMuX2NvdW50ID0gXy5nZXQob3B0aW9ucywgJ2NvdW50JywgOClcbiAgICB0aGlzLl9yYXRlID0gXy5nZXQob3B0aW9ucywgJ3JhdGUnLCAwLjg1KVxuICAgIHRoaXMuX3JlZCA9IF8uZ2V0KG9wdGlvbnMsICdyZWQnLCAxMDApXG4gICAgdGhpcy5fZ3JlZW4gPSBfLmdldChvcHRpb25zLCAnZ3JlZW4nLCAxMDApXG4gICAgdGhpcy5fYmx1ZSA9IF8uZ2V0KG9wdGlvbnMsICdibHVlJywgMTAwKVxuICAgIHRoaXMuX2FscGhhID0gXy5nZXQob3B0aW9ucywgJ2FscGhhJywgMC4xNSlcblxuICAgIHRoaXMuX25vaXNlcyA9IHt9XG5cbiAgICBsZXQgYSA9IHRoaXMuX2FscGhhICogMjU1XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLl9jb3VudDsgYysrKSB7XG4gICAgICBsZXQgbm9pc2UgPSBuZXcgT3ZlcmxheShvdmVybGF5cywgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICAgIG5vaXNlLmNyZWF0ZSgpXG4gICAgICBub2lzZS5fc3ByaXRlLnZpc2libGUgPSBjID09PSAwXG5cbiAgICAgIGxldCBkYXRhID0gbm9pc2UuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICAgIGxldCBwaXhlbHMgPSBkYXRhLmRhdGFcbiAgICAgIGxldCBsZW4gPSBwaXhlbHMubGVuZ3RoXG4gICAgICBsZXQgciA9IHRoaXMuX3JlZFxuICAgICAgbGV0IGcgPSB0aGlzLl9ncmVlblxuICAgICAgbGV0IGIgPSB0aGlzLl9ibHVlXG4gICAgICBsZXQgX3JhdGUgPSB0aGlzLl9yYXRlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID49IF9yYXRlKSB7XG4gICAgICAgICAgcGl4ZWxzLnNldChbTWF0aC50cnVuYyhNYXRoLnJhbmRvbSgpICogciksIE1hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIGcpLCBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiBiKSwgYV0sIGkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5vaXNlLmNvbnRleHQucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApXG4gICAgICB0aGlzLl9ub2lzZXNbY10gPSBub2lzZVxuICAgICAgdGhpcy5zdGFnZS5hZGRDaGlsZChub2lzZS5zcHJpdGUpXG4gICAgfVxuXG4gICAgdGhpcy5fbm9pc2VLZXlzID0gXy5rZXlzKHRoaXMuX25vaXNlcylcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKVxuXG4gICAgZm9yIChsZXQgayBpbiB0aGlzLl9ub2lzZXMpIHtcbiAgICAgIGxldCBub2lzZSA9IHRoaXMuX25vaXNlc1trXVxuICAgICAgbm9pc2UuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy5fbm9pc2VzID0ge31cbiAgICB0aGlzLl9ub2lzZUtleXMgPSBbXVxuICB9XG5cbiAgdGljayAodCkge1xuICAgIGlmICh0IC0gdGhpcy5fbGFzdCA+PSB0aGlzLl9yYXRlKSB7XG4gICAgICBmb3IgKGxldCBrIG9mIHRoaXMuX25vaXNlS2V5cykge1xuICAgICAgICB0aGlzLl9ub2lzZXNba10uc3ByaXRlLnZpc2libGUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBsZXQgbm9pc2UgPSB0aGlzLl9ub2lzZUtleXNbTWF0aC50cnVuYyhNYXRoLnJhbmRvbSgpICogdGhpcy5fbm9pc2VLZXlzLmxlbmd0aCldXG4gICAgICB0aGlzLl9ub2lzZXNbbm9pc2VdLnNwcml0ZS52aXNpYmxlID0gdHJ1ZVxuXG4gICAgICB0aGlzLl9sYXN0ID0gdFxuXG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgUmdiT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5fYWxwaGEgPSBfLmdldChvcHRpb25zLCAnYWxwaGEnLCAwLjA3NSlcblxuICAgIHRoaXMuY3JlYXRlKClcblxuICAgIGxldCBkYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuICAgIGxldCBwaXhlbHMgPSBkYXRhLmRhdGFcbiAgICBsZXQgbGVuID0gcGl4ZWxzLmxlbmd0aFxuICAgIGxldCBhID0gdGhpcy5fYWxwaGEgKiAyNTVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxMikge1xuICAgICAgcGl4ZWxzLnNldChbMTAwLCAxMDAsIDEwMCwgYV0sIGkpXG4gICAgfVxuICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMClcbiAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIENydE92ZXJsYXkgZXh0ZW5kcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihvdmVybGF5cywgd2lkdGgsIGhlaWdodClcblxuICAgIHRoaXMuX3JhZGl1cyA9IF8uZ2V0KG9wdGlvbnMsICdyYWRpdXMnLCAwLjI1KVxuICAgIHRoaXMuX2luc2lkZV9hbHBoYSA9IF8uZ2V0KG9wdGlvbnMsICdpbnNpZGVfYWxwaGEnLCAwLjIpXG4gICAgdGhpcy5fb3V0c2lkZV9hbHBoYSA9IF8uZ2V0KG9wdGlvbnMsICdvdXRzaWRlX2FscGhhJywgMC4xNSlcblxuICAgIHRoaXMuY3JlYXRlKClcblxuICAgIHRoaXMuY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGFya2VyJ1xuICAgIGxldCBncmFkaWVudCA9IHRoaXMuY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudCh0aGlzLl93aWR0aCAvIDIsIHRoaXMuX2hlaWdodCAvIDIsIHRoaXMuX2hlaWdodCAvIDIsIHRoaXMuX3dpZHRoIC8gMiwgdGhpcy5faGVpZ2h0IC8gMiwgdGhpcy5faGVpZ2h0IC8gdGhpcy5fcmFkaXVzKVxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsIDI1NSwgMjU1LCAnICsgdGhpcy5faW5zaWRlX2FscGhhICsgJyknKVxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgwLCAwLCAwLCAnICsgdGhpcy5fb3V0c2lkZV9hbHBoYSArICcpJylcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnRcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcbiAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJ1xuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgT3ZlcmxheXMge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluLCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9tYWluID0gbWFpblxuXG4gICAgbGV0IHN0YWdlID0gbWFpbi5zdGFnZVxuICAgIGxldCByZW5kZXJlciA9IG1haW4ucmVuZGVyZXJcblxuICAgIGxldCB3aWR0aCA9IHJlbmRlcmVyLndpZHRoXG4gICAgbGV0IGhlaWdodCA9IHJlbmRlcmVyLmhlaWdodFxuXG4gICAgdGhpcy5fbGlzdCA9IHt9XG4gICAgbGV0IGwgPSB0aGlzLl9saXN0XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlT3ZlcmxheSAoY3R4LCBDbHMsIG5hbWUsIGRlZmF1bHRzID0ge30pIHtcbiAgICAgIGxldCBvID0gXy5kZWZhdWx0c0RlZXAoe30sIG9wdGlvbnMsIHsgW25hbWVdOiBkZWZhdWx0cyB9KVxuICAgICAgbGV0IHMgPSBfLmdldChvW25hbWVdLCAnc2NhbGUnLCAxKVxuICAgICAgbFtuYW1lXSA9IG5ldyBDbHMoY3R4LCBfLmdldChvW25hbWVdLCAnd2lkdGgnLCAwKSwgXy5nZXQob1tuYW1lXSwgJ2hlaWdodCcsIDApLCBvW25hbWVdKVxuICAgICAgbFtuYW1lXS5zcHJpdGUuc2NhbGUgPSBuZXcgUElYSS5Qb2ludChzLCBzKVxuICAgICAgc3RhZ2UuYWRkQ2hpbGQobFtuYW1lXS5zcHJpdGUpXG4gICAgICByZXR1cm4gbFtuYW1lXVxuICAgIH1cblxuICAgIGlmIChfLmdldChvcHRpb25zLCAnYm9yZGVyJykpIHtcbiAgICAgIF9jcmVhdGVPdmVybGF5KHRoaXMsIEJvcmRlck92ZXJsYXksICdib3JkZXInLCB7IHdpZHRoLCBoZWlnaHQgfSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ3NjcmVlbicpKSB7XG4gICAgICBfY3JlYXRlT3ZlcmxheSh0aGlzLCBTY3JlZW5PdmVybGF5LCAnc2NyZWVuJywgeyB3aWR0aDogdGhpcy5ndWlkZW8ud2lkdGgsIGhlaWdodDogdGhpcy5ndWlkZW8uaGVpZ2h0IH0pXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdzY2FubGluZXMnKSkge1xuICAgICAgX2NyZWF0ZU92ZXJsYXkodGhpcywgU2NhbmxpbmVzT3ZlcmxheSwgJ3NjYW5saW5lcycsIHsgd2lkdGgsIGhlaWdodCB9KVxuICAgIH1cblxuICAgIGlmIChfLmdldChvcHRpb25zLCAnc2NhbmxpbmUnKSkge1xuICAgICAgX2NyZWF0ZU92ZXJsYXkodGhpcywgU2NhbmxpbmVPdmVybGF5LCAnc2NhbmxpbmUnLCB7IHdpZHRoLCBoZWlnaHQgfSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ3JnYicpKSB7XG4gICAgICBfY3JlYXRlT3ZlcmxheSh0aGlzLCBSZ2JPdmVybGF5LCAncmdiJywgeyB3aWR0aCwgaGVpZ2h0IH0pXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdub2lzZXMnKSkge1xuICAgICAgbGV0IHcgPSBfLmdldChvcHRpb25zLCAnbm9pc2VzLndpZHRoJywgd2lkdGgpXG4gICAgICBsZXQgaCA9IF8uZ2V0KG9wdGlvbnMsICdub2lzZXMuaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgbC5ub2lzZXMgPSBuZXcgTm9pc2VzT3ZlcmxheSh0aGlzLCB3LCBoLCBfLmdldChvcHRpb25zLCAnbm9pc2VzJykpXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdjcnQnKSkge1xuICAgICAgX2NyZWF0ZU92ZXJsYXkodGhpcywgQ3J0T3ZlcmxheSwgJ2NydCcsIHsgd2lkdGgsIGhlaWdodCB9KVxuICAgIH1cblxuICAgIGlmIChfLmdldChvcHRpb25zLCAnbW9uaXRvcicpKSB7XG4gICAgICBsZXQgdyA9IF8uZ2V0KG9wdGlvbnMsICdtb25pdG9yLndpZHRoJywgd2lkdGgpXG4gICAgICBsZXQgaCA9IF8uZ2V0KG9wdGlvbnMsICdtb25pdG9yLmhlaWdodCcsIGhlaWdodClcbiAgICAgIGxldCBzID0gXy5nZXQob3B0aW9ucywgJ21vbml0b3Iuc2NhbGUnLCAxKVxuXG4gICAgICBsZXQgdGV4ID0gUElYSS5UZXh0dXJlLmZyb21JbWFnZSgnLi9idWlsZC8nICsgcmVxdWlyZSgnZmlsZT9uYW1lPWFzc2V0cy9bcGF0aF0vW25hbWVdLltleHRdIS4uLy4uL2Fzc2V0cy9pbWdzL2NydC5wbmcnKSlcbiAgICAgIGwubW9uaXRvciA9IG5ldyBQSVhJLlNwcml0ZSh0ZXgpXG4gICAgICBsLm1vbml0b3IueCA9IDBcbiAgICAgIGwubW9uaXRvci55ID0gMFxuICAgICAgbC5tb25pdG9yLndpZHRoID0gd1xuICAgICAgbC5tb25pdG9yLmhlaWdodCA9IGhcbiAgICAgIGwubW9uaXRvci5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KHMsIHMpXG4gICAgICBzdGFnZS5hZGRDaGlsZChsLm1vbml0b3IpXG4gICAgfVxuICB9XG5cbiAgdGljayAodCkge1xuICAgIGNvbnN0IGwgPSB0aGlzLl9saXN0XG4gICAgZm9yIChsZXQgayBpbiBsKSB7XG4gICAgICBpZiAobFtrXS50aWNrKSB7XG4gICAgICAgIGxba10udGljayh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBjb25zdCBsID0gdGhpcy5fbGlzdFxuICAgIGZvciAobGV0IGsgaW4gbCkge1xuICAgICAgaWYgKGxba10ucmVzZXQpIHtcbiAgICAgICAgbFtrXS5yZXNldCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgY29uc3QgbCA9IHRoaXMuX2xpc3RcbiAgICBmb3IgKGxldCBrIGluIGwpIHtcbiAgICAgIGlmIChsW2tdLmRlc3Ryb3kpIHtcbiAgICAgICAgbFtrXS5kZXN0cm95KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgbWFpbiAoKSB7IHJldHVybiB0aGlzLl9tYWluIH1cbiAgZ2V0IGd1aWRlbyAoKSB7IHJldHVybiB0aGlzLl9tYWluLmd1aWRlbyB9XG4gIGdldCBzdGFnZSAoKSB7IHJldHVybiB0aGlzLl9tYWluLnN0YWdlIH1cbiAgZ2V0IHJlbmRlcmVyICgpIHsgcmV0dXJuIHRoaXMuX21haW4ucmVuZGVyZXIgfVxuICBnZXQgc2NyZWVuICgpIHsgcmV0dXJuIHRoaXMuX2xpc3Quc2NyZWVuIH1cblxuICByZXNpemUgKCkge1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9vdmVybGF5cy5qcyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9hc3NldHMvaW1ncy8vY3J0LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9maWxlLWxvYWRlcj9uYW1lPWFzc2V0cy9bcGF0aF0vW25hbWVdLltleHRdIS4vYXNzZXRzL2ltZ3MvY3J0LnBuZ1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1hcCA9IHtcblx0XCIuL2NydC5wbmdcIjogNzgsXG5cdFwiLi90ZXN0LnBuZ1wiOiA3OVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA3NztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltZ3MgLi9+L2ZpbGUtbG9hZGVyP25hbWU9YXNzZXRzL1tuYW1lXS5bZXh0XSFeXFwuXFwvLiokXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvY3J0LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9maWxlLWxvYWRlcj9uYW1lPWFzc2V0cy9bbmFtZV0uW2V4dF0hLi9hc3NldHMvaW1ncy9jcnQucG5nXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvdGVzdC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmlsZS1sb2FkZXI/bmFtZT1hc3NldHMvW25hbWVdLltleHRdIS4vYXNzZXRzL2ltZ3MvdGVzdC5wbmdcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2VuIGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdrZW4nLCBbJ2NvdW50J10pXG5cbiAgICB0aGlzLl9vbktleWRvd24gPSB0aGlzLm9uS2V5ZG93bi5iaW5kKHRoaXMpXG4gICAgdGhpcy5fb25LZXl1cCA9IHRoaXMub25LZXl1cC5iaW5kKHRoaXMpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5ZG93bilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleXVwKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuXG4gICAgdGhpcy5fbW9kcyA9IDBcbiAgICB0aGlzLl9qb3lzdGljayA9IDBcbiAgICB0aGlzLl9rZXlzID0ge31cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5ZG93bilcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleXVwKVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICBnZXQgbW9kcyAoKSB7IHJldHVybiB0aGlzLl9tb2RzIH1cbiAgZ2V0IGpveXN0aWNrICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrIH1cbiAgZ2V0IGtleXMgKCkgeyByZXR1cm4gdGhpcy5fa2V5cyB9XG5cbiAgZ2V0IHNoaWZ0ICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDAxIH1cbiAgZ2V0IGN0cmwgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyAmIDB4MDIgfVxuICBnZXQgYWx0ICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDA0IH1cbiAgZ2V0IG1ldGEgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyAmIDB4MDggfVxuICBnZXQgbnVtcGFkICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDEwIH1cbiAgZ2V0IGJ0bjAgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDEwIH1cbiAgZ2V0IGJ0bjEgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDIwIH1cbiAgZ2V0IGJ0bjIgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDQwIH1cbiAgZ2V0IGJ0bjMgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDgwIH1cbiAgZ2V0IGJ0bjQgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDEwMCB9XG4gIGdldCB1cCAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MDEgfVxuICBnZXQgZG93biAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MDIgfVxuICBnZXQgcmlnaHQgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDA0IH1cbiAgZ2V0IGxlZnQgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDA4IH1cblxuICBldmVudERldGFpbHMgKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBlLmtleSxcbiAgICAgIGtleUNvZGU6IGUua2V5Q29kZSxcbiAgICAgIGtleXM6IHRoaXMuX2tleXMsXG4gICAgICBtb2RzOiB0aGlzLl9tb2RzLFxuICAgICAgam95c3RpY2s6IHRoaXMuX2pveXN0aWNrLFxuICAgICAgc2hpZnQ6IHRoaXMuc2hpZnQsXG4gICAgICBjdHJsOiB0aGlzLmN0cmwsXG4gICAgICBhbHQ6IHRoaXMuYWx0LFxuICAgICAgbWV0YTogdGhpcy5tZXRhLFxuICAgICAgbnVtcGFkOiB0aGlzLm51bXBhZCxcbiAgICAgIGJ0bjA6IHRoaXMuYnRuMCxcbiAgICAgIGJ0bjE6IHRoaXMuYnRuMSxcbiAgICAgIGJ0bjI6IHRoaXMuYnRuMixcbiAgICAgIGJ0bjM6IHRoaXMuYnRuMyxcbiAgICAgIGJ0bjQ6IHRoaXMuYnRuNCxcbiAgICAgIHVwOiB0aGlzLnVwLFxuICAgICAgZG93bjogdGhpcy5kb3duLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgfVxuICB9XG5cbiAgb25LZXlkb3duIChlKSB7XG4gICAgbGV0IG51bXBhZCA9IGUubG9jYXRpb24gPT09IDNcbiAgICBpZiAobnVtcGFkKSB7XG4gICAgICB0aGlzLl9tb2RzIHw9IDB4MTBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9tb2RzICY9IH4weDEwXG4gICAgfVxuICAgIHRoaXMuX2tleXNbZS5rZXlDb2RlXSA9IDFcblxuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ1NoaWZ0JzpcbiAgICAgICAgdGhpcy5fbW9kcyB8PSAweDAxXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0NvbnRyb2wnOlxuICAgICAgICB0aGlzLl9tb2RzIHw9IDB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQWx0JzpcbiAgICAgICAgdGhpcy5fbW9kcyB8PSAweDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ01ldGEnOlxuICAgICAgICB0aGlzLl9tb2RzIHw9IDB4MDhcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnOCc6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDAxXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICcyJzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDJcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzQnOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwNFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDA4XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzYnOiAvLyBudW1wYWQgNlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwOFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3onOiAvLyBidXR0b24gMFxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDEwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3gnOiAvLyBidXR0b24gMVxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDIwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2MnOiAvLyBidXR0b24gMlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDQwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJyAnOiAvLyBidXR0b24gM1xuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDgwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0VudGVyJzogLy8gYnV0dG9uIDRcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgxMDBcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ2tleS5kb3duJywgdGhpcy5ldmVudERldGFpbHMoZSkpXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICBvbktleXVwIChlKSB7XG4gICAgbGV0IG51bXBhZCA9IGUubG9jYXRpb24gPT09IDNcbiAgICBpZiAobnVtcGFkKSB7XG4gICAgICB0aGlzLl9tb2RzIHw9IDB4MTBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9tb2RzICY9IH4weDEwXG4gICAgfVxuICAgIHRoaXMuX2tleXNbZS5rZXlDb2RlXSA9IDBcblxuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ1NoaWZ0JzpcbiAgICAgICAgdGhpcy5fbW9kcyAmPSB+MHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdDb250cm9sJzpcbiAgICAgICAgdGhpcy5fbW9kcyAmPSB+MHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBbHQnOlxuICAgICAgICB0aGlzLl9tb2RzICY9IH4weDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ01ldGEnOlxuICAgICAgICB0aGlzLl9tb2RzICY9IH4weDA4XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICc4JzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDAxXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnMic6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwMlxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzQnOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDRcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDhcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnNic6IC8vIG51bXBhZCA2XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwOFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3onOiAvLyBidXR0b24gMFxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgxMFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICd4JzogLy8gYnV0dG9uIDFcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MjBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnYyc6IC8vIGJ1dHRvbiAyXG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDQwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJyAnOiAvLyBidXR0b24gM1xuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHg4MFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdFbnRlcic6IC8vIGJ1dHRvbiA0XG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDEwMFxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgna2V5LnVwJywgdGhpcy5ldmVudERldGFpbHMoZSkpXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL2tlbi5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi4vLi4vZ2xvYmFscy5qcydcbmltcG9ydCBDYW52YXNUZXh0dXJlIGZyb20gJy4uL2NhbnZhc3RleHR1cmUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pY2tleSBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgnbWlja2V5JywgWydjb3VudCcsICd3aWR0aCcsICdoZWlnaHQnLCAnZnJhbWUnLCAnY29sb3InLCAnZGJsQ2xpY2tEZWxheScsICdkYmxDbGlja0Rpc3RhbmNlJ10pXG5cbiAgICB0aGlzLl9jYW52YXNUZXh0dXJlID0gbmV3IENhbnZhc1RleHR1cmUoKVxuXG4gICAgdGhpcy5fZGVmYXVsdF9mcmFtZSA9IHRoaXMuX2ZyYW1lXG4gICAgdGhpcy5fZGVmYXVsdF9jb2xvciA9IHRoaXMuX2NvbG9yXG5cbiAgICBsZXQgc3RhZ2UgPSBtYWluLnN0YWdlXG4gICAgaWYgKHN0YWdlKSB7XG4gICAgICBzdGFnZS5pbnRlcmFjdGl2ZSA9IHRydWVcblxuICAgICAgdGhpcy5fb25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcylcbiAgICAgIHRoaXMuX29uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpXG4gICAgICB0aGlzLl9vbk1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpXG5cbiAgICAgIHN0YWdlLm9uKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlRG93bilcbiAgICAgIHN0YWdlLm9uKCdyaWdodGRvd24nLCB0aGlzLl9vbk1vdXNlRG93bilcbiAgICAgIHN0YWdlLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Nb3VzZURvd24pXG5cbiAgICAgIHN0YWdlLm9uKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSlcblxuICAgICAgc3RhZ2Uub24oJ21vdXNldXAnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgICBzdGFnZS5vbigndG91Y2hlbmQnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgICBzdGFnZS5vbignbW91c2V1cG91dHNpZGUnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgICBzdGFnZS5vbigndG91Y2hlbmRvdXRzaWRlJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgIH1cblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcblxuICAgIHRoaXMuX3NjcmVlblNwcml0ZSA9IHRoaXMuZ3VpZGVvLnNjcmVlblNwcml0ZVxuICAgIHRoaXMuX3NjYWxlID0gdGhpcy5ndWlkZW8uc2NhbGVcblxuICAgIHRoaXMuX3ggPSAwXG4gICAgdGhpcy5feSA9IDBcbiAgICB0aGlzLl9jb2xvciA9IHRoaXMuX2RlZmF1bHRfY29sb3JcbiAgICB0aGlzLl9mcmFtZSA9IHRoaXMuX2RlZmF1bHRfZnJhbWVcbiAgICB0aGlzLl9idG5zID0gMFxuXG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZS5kZXN0cm95KClcblxuICAgIHRoaXMuX2NhbnZhc1RleHR1cmUuY3JlYXRlKHRoaXMuX3dpZHRoICogdGhpcy5fY291bnQsIHRoaXMuX2hlaWdodClcblxuICAgIHRoaXMuX21vdXNlTGF5ZXIgPSB0aGlzLl9tYWluLmd1aWRlby5tb3VzZUxheWVyXG5cbiAgICBpZiAodGhpcy5fc3ByaXRlKSB7XG4gICAgICB0aGlzLl9zcHJpdGUuZGVzdHJveSgpXG4gICAgICB0aGlzLl9zcHJpdGUgPSBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5fbW91c2VMYXllci5yZW1vdmVDaGlsZHJlbigpXG5cbiAgICB0aGlzLm1lbW9yeS5mcm9tXzJkX2FycmF5X21hc2sodGhpcy5fdG9wLCAwLCB0aGlzLmNvdW50LCB0aGlzLl93aWR0aCwgW1xuICAgICAgJy4uICAgICcsXG4gICAgICAnLncuICAgJyxcbiAgICAgICcud3cuICAnLFxuICAgICAgJy53d3cuICcsXG4gICAgICAnLnd3d3cuJyxcbiAgICAgICcudy4uLi4nLFxuICAgICAgJy4uLiAgICcsXG4gICAgXSwgZGVmYXVsdHMuY2hhcnNfbWFwKVxuXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gICAgdGhpcy5fc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX2NhbnZhc1RleHR1cmUudGV4dHVyZSlcblxuICAgIHRoaXMuZnJhbWUgPSB0aGlzLl9kZWZhdWx0X2ZyYW1lXG5cbiAgICB0aGlzLl9tb3VzZUxheWVyLmFkZENoaWxkKHRoaXMuX3Nwcml0ZSlcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBsZXQgc3RhZ2UgPSB0aGlzLl9tYWluLnN0YWdlXG4gICAgaWYgKHN0YWdlKSB7XG4gICAgICBzdGFnZS5vZmYoJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duKVxuICAgICAgc3RhZ2Uub2ZmKCdyaWdodGRvd24nLCB0aGlzLl9vbk1vdXNlRG93bilcbiAgICAgIHN0YWdlLm9mZigndG91Y2hzdGFydCcsIHRoaXMuX29uTW91c2VEb3duKVxuXG4gICAgICBzdGFnZS5vZmYoJ21vdXNlbW92ZScsIHRoaXMuX29uTW91c2VNb3ZlKVxuXG4gICAgICBzdGFnZS5vZmYoJ21vdXNldXAnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgICBzdGFnZS5vZmYoJ3RvdWNoZW5kJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZXVwb3V0c2lkZScsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9mZigndG91Y2hlbmRvdXRzaWRlJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9zcHJpdGUpIHtcbiAgICAgIHRoaXMuX3Nwcml0ZS5kZXN0cm95KClcbiAgICAgIHRoaXMuX3Nwcml0ZSA9IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLm1vdXNlTGF5ZXIucmVtb3ZlQ2hpbGRyZW4oKVxuXG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZS5kZXN0cm95KClcblxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG5cbiAgZ2V0IG1vdXNlTGF5ZXIgKCkgeyByZXR1cm4gdGhpcy5fbW91c2VMYXllciB9XG4gIGdldCBzcHJpdGUgKCkgeyByZXR1cm4gdGhpcy5fc3ByaXRlIH1cblxuICBnZXQgY2FudmFzVGV4dHVyZSAoKSB7IHJldHVybiB0aGlzLl9jYW52YXNUZXh0dXJlIH1cblxuICBmcmFtZVJlY3QgKGZyYW1lKSB7XG4gICAgY29uc3QgdyA9IHRoaXMuX3dpZHRoXG4gICAgY29uc3QgaCA9IHRoaXMuX2hlaWdodFxuICAgIHJldHVybiBuZXcgUElYSS5SZWN0YW5nbGUoZnJhbWUgKiB3LCAwLCBmcmFtZSAqIHcgKyB3LCBoKVxuICB9XG5cbiAgZ2V0IHggKCkgeyByZXR1cm4gdGhpcy5feCB9XG4gIHNldCB4ICh2YWx1ZSkge1xuICAgIHRoaXMuX3ggPSB2YWx1ZVxuICAgIHRoaXMuX3Nwcml0ZS54ID0gdmFsdWVcbiAgfVxuXG4gIGdldCB5ICgpIHsgcmV0dXJuIHRoaXMuX3kgfVxuICBzZXQgeSAodmFsdWUpIHtcbiAgICB0aGlzLl95ID0gdmFsdWVcbiAgICB0aGlzLl9zcHJpdGUueSA9IHZhbHVlXG4gIH1cblxuICBnZXQgZnJhbWUgKCkgeyByZXR1cm4gdGhpcy5fZnJhbWUgfVxuICBzZXQgZnJhbWUgKHZhbHVlKSB7XG4gICAgdGhpcy5fZnJhbWUgPSB2YWx1ZVxuICAgIHRoaXMuX3Nwcml0ZS50ZXh0dXJlID0gbmV3IFBJWEkuVGV4dHVyZSh0aGlzLl9jYW52YXNUZXh0dXJlLnRleHR1cmUsIHRoaXMuZnJhbWVSZWN0KHRoaXMuX2ZyYW1lKSlcbiAgfVxuXG4gIGdldCBidG5zICgpIHsgcmV0dXJuIHRoaXMuX2J0bnMgfVxuICBzZXQgYnRucyAodmFsdWUpIHtcbiAgICB0aGlzLl9idG5zID0gdmFsdWVcbiAgfVxuXG4gIGdldCBkYmxDbGlja0RlbGF5ICgpIHsgcmV0dXJuIHRoaXMuX2RibENsaWNrRGVsYXkgfVxuXG4gIGdldCBkYmxDbGlja0Rpc3RhbmNlICgpIHsgcmV0dXJuIHRoaXMuX2RibENsaWNrRGlzdGFuY2UgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5fY2FudmFzVGV4dHVyZS51cGRhdGVUZXh0dXJlKHRoaXMuX2RhdGEsIHRoaXMucmFpbmJvdylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0RXZlbnRJbmZvIChlKSB7XG4gICAgbGV0IHJlbmRlcmVyID0gdGhpcy5fbWFpbi5yZW5kZXJlclxuXG4gICAgbGV0IHNpemUgPSBuZXcgUElYSS5Qb2ludChyZW5kZXJlci53aWR0aCAtIHRoaXMuX3dpZHRoLCByZW5kZXJlci5oZWlnaHQgLSB0aGlzLl9oZWlnaHQpXG5cbiAgICBsZXQgZ3ggPSBlLmRhdGEuZ2xvYmFsLnggLSB0aGlzLl9zY3JlZW5TcHJpdGUueFxuICAgIGxldCBneSA9IGUuZGF0YS5nbG9iYWwueSAtIHRoaXMuX3NjcmVlblNwcml0ZS55XG5cbiAgICBsZXQgeCA9IE1hdGgudHJ1bmMoTWF0aC5taW4oc2l6ZS54LCBNYXRoLm1heCgwLCBneCkpIC8gdGhpcy5fc2NhbGUpXG4gICAgbGV0IHkgPSBNYXRoLnRydW5jKE1hdGgubWluKHNpemUueSwgTWF0aC5tYXgoMCwgZ3kpKSAvIHRoaXMuX3NjYWxlKVxuXG4gICAgcmV0dXJuIHsgeCwgeSwgYnV0dG9uOiBlLmRhdGEub3JpZ2luYWxFdmVudC5idXR0b24gfVxuICB9XG5cbiAgb25Nb3VzZURvd24gKGUpIHtcbiAgICBsZXQgeyB4LCB5LCBidXR0b24gfSA9IHRoaXMuZ2V0RXZlbnRJbmZvKGUpXG5cbiAgICBzd2l0Y2ggKGJ1dHRvbikge1xuICAgICAgY2FzZSAwOiAvLyBsZWZ0XG4gICAgICAgIHRoaXMuX2J0bnMgfD0gMHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIDE6IC8vIG1pZGRsZVxuICAgICAgICB0aGlzLl9idG5zIHw9IDB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAyOiAvLyByaWdodFxuICAgICAgICB0aGlzLl9idG5zIHw9IDB4MDRcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ21vdXNlLmRvd24nLCB7IHgsIHksIGJ1dHRvbiB9KVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG5cbiAgb25Nb3VzZU1vdmUgKGUpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ3VpZGVvLndpZHRoXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5ndWlkZW8uaGVpZ2h0XG5cbiAgICBsZXQgeyB4LCB5LCBidXR0b24gfSA9IHRoaXMuZ2V0RXZlbnRJbmZvKGUpXG5cbiAgICB0aGlzLnggPSBNYXRoLm1pbih4LCB3aWR0aCAtIHRoaXMuX3dpZHRoKVxuICAgIHRoaXMueSA9IE1hdGgubWluKHksIGhlaWdodCAtIHRoaXMuX2hlaWdodClcblxuICAgIHRoaXMuZW1pdCgnbW91c2UubW92ZScsIHsgeCwgeSwgYnV0dG9uIH0pXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICBvbk1vdXNlVXAgKGUpIHtcbiAgICBsZXQgeyB4LCB5LCBidXR0b24gfSA9IHRoaXMuZ2V0RXZlbnRJbmZvKGUpXG5cbiAgICBzd2l0Y2ggKGJ1dHRvbikge1xuICAgICAgY2FzZSAwOiAvLyBsZWZ0XG4gICAgICAgIHRoaXMuX2J0bnMgJj0gfjB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAxOiAvLyBtaWRkbGVcbiAgICAgICAgdGhpcy5fYnRucyAmPSB+MHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIDI6IC8vIHJpZ2h0XG4gICAgICAgIHRoaXMuX2J0bnMgJj0gfjB4MDRcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ21vdXNlLnVwJywgeyB4LCB5LCBidXR0b24gfSlcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvbWlja2V5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==