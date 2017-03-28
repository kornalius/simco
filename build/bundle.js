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
	
	var _emitter = __webpack_require__(13);
	
	var _lexer = __webpack_require__(34);
	
	var _lexer2 = _interopRequireDefault(_lexer);
	
	var _parser = __webpack_require__(45);
	
	var _parser2 = _interopRequireDefault(_parser);
	
	var _transpiler = __webpack_require__(63);
	
	var _transpiler2 = _interopRequireDefault(_transpiler);
	
	var _memory = __webpack_require__(14);
	
	var _memorymanager = __webpack_require__(16);
	
	var _memorymanager2 = _interopRequireDefault(_memorymanager);
	
	var _stack = __webpack_require__(18);
	
	var _stack2 = _interopRequireDefault(_stack);
	
	var _interrupt = __webpack_require__(19);
	
	var _interrupt2 = _interopRequireDefault(_interrupt);
	
	var _guideo = __webpack_require__(20);
	
	var _guideo2 = _interopRequireDefault(_guideo);
	
	var _ken = __webpack_require__(32);
	
	var _ken2 = _interopRequireDefault(_ken);
	
	var _mickey = __webpack_require__(33);
	
	var _mickey2 = _interopRequireDefault(_mickey);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import css from '../style/main.css'
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
	    _this._ken = new _ken2.default(_this);
	    _this._mickey = new _mickey2.default(_this);
	
	    _this._onResize = _this.onResize.bind(_this);
	    window.addEventListener('resize', _this._onResize);
	
	    var that = _this;
	    PIXI.ticker.shared.add(function (t) {
	      if (that.status === _RUNNING) {
	        that.tick(t);
	
	        var render = false;
	
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = that._updates.queue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var q = _step.value;
	
	            q.object.__inUpdates = false;
	            if (q.render) {
	              render = true;
	            }
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
	
	        if (render) {
	          that._guideo.renderer.render(that._guideo.stage);
	        }
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
	    key: 'default',
	    value: function _default(name) {
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
	    value: function tick(time) {
	      this._memory.tick(time);
	      this._memoryManager.tick(time);
	      this._ken.tick(time);
	      this._mickey.tick(time);
	      this._interrupts.tick(time);
	      this._guideo.tick(time);
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
	    count: 16
	  },
	
	  fonzo: {
	    count: 255,
	    width: 4,
	    height: 6
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
	    count: 255
	  },
	
	  mickey: {
	    count: 255,
	    dblClickDelay: 250,
	    dblClickDistance: 8
	  },
	
	  network: {
	    size: 32 * 1024
	  },
	
	  alto: {
	    size: 4 * 1024
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Memory = exports.data_type_size = exports.data_type_fns = exports.data_type_sizes = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _hexy = __webpack_require__(15);
	
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
	
	    this._size = main.default('memory.size');
	    this._top = 0;
	    this._bottom = this._top + this._size - 1;
	
	    this._buffer = new ArrayBuffer(this._size);
	
	    this._data = new Uint8Array(this._buffer);
	
	    this._view = new DataView(this._buffer);
	
	    this._fns = {
	      i8: 'Uint8',
	      s8: 'Int8',
	      i16: 'Uint16',
	      s16: 'Int16',
	      i32: 'Uint32',
	      s32: 'Int32',
	      f32: 'Float32'
	    };
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
	      var fn = this._view['set' + this._fns[type]];
	
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
	      return this._view['get' + this._fns[type]](addr, _vm.littleEndian);
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
	      this._view['set' + this._fns[type]](addr, value, _vm.littleEndian);
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
/* 15 */
/***/ function(module, exports) {

	module.exports = require("hexy");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _hexy = __webpack_require__(15);
	
	var _hexy2 = _interopRequireDefault(_hexy);
	
	var _prettyBytes = __webpack_require__(17);
	
	var _prettyBytes2 = _interopRequireDefault(_prettyBytes);
	
	var _memory = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MemoryManager = function () {
	  function MemoryManager(main) {
	    _classCallCheck(this, MemoryManager);
	
	    this._main = main;
	
	    this._collect_delay = main.default('memory_manager.collect_delay');
	
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
/* 17 */
/***/ function(module, exports) {

	module.exports = require("pretty-bytes");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _globals = __webpack_require__(12);
	
	var _memory = __webpack_require__(14);
	
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
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _rainbow = __webpack_require__(21);
	
	var _rainbow2 = _interopRequireDefault(_rainbow);
	
	var _fonzo = __webpack_require__(23);
	
	var _fonzo2 = _interopRequireDefault(_fonzo);
	
	var _orwell = __webpack_require__(24);
	
	var _orwell2 = _interopRequireDefault(_orwell);
	
	var _beagle = __webpack_require__(25);
	
	var _beagle2 = _interopRequireDefault(_beagle);
	
	var _violet = __webpack_require__(26);
	
	var _violet2 = _interopRequireDefault(_violet);
	
	var _overlays = __webpack_require__(27);
	
	var _chip = __webpack_require__(22);
	
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
	
	    _this.init('i8', 'guideo', ['width', 'height', 'scale']);
	
	    _this._renderer = new PIXI.autoDetectRenderer(_this._width * _this._scale, _this._height * _this._scale, {});
	    _this._renderer.view.style.position = 'absolute';
	    _this._renderer.view.style.cursor = 'none';
	    _this._renderer.view.id = 'guideo';
	    document.body.appendChild(_this._renderer.view);
	
	    _this._stage = new PIXI.Container();
	    _this._stage.scale = new PIXI.Point(_this._scale, _this._scale);
	
	    _this._onResize = _this.resize.bind(_this);
	    _this.on('resize', _this._onResize);
	
	    _this.async(function () {
	      this._rainbow = new _rainbow2.default(main);
	      this._fonzo = new _fonzo2.default(main);
	      this._orwell = new _orwell2.default(main);
	      this._beagle = new _beagle2.default(main);
	      this._violet = new _violet2.default(main);
	      this._overlays = new _overlays.Overlays(this, {
	        screen: {},
	        scanlines: {},
	        scanline: {},
	        rgb: {},
	        noises: {},
	        crt: {},
	        monitor: {}
	      });
	      this.reset();
	    });
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
	
	      if (this._sprite) {
	        this._sprite.destroy();
	      }
	
	      if (this._texture) {
	        this._texture.destroy();
	        this._texture = null;
	      }
	
	      if (this._canvas) {
	        this._canvas.remove();
	        this._canvas = null;
	      }
	
	      _get(Guideo.prototype.__proto__ || Object.getPrototypeOf(Guideo.prototype), 'destroy', this).call(this);
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      _get(Guideo.prototype.__proto__ || Object.getPrototypeOf(Guideo.prototype), 'reset', this).call(this);
	
	      this.clear();
	
	      this._force_update = false;
	      this._force_flip = false;
	
	      this._rainbow.reset();
	      this._fonzo.reset();
	      this._orwell.reset();
	      this._beagle.reset();
	      this._violet.reset();
	      this._overlays.reset();
	
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
	
	      if (this._force_update) {
	        this._force_update = false;
	
	        if (this._force_flip) {
	          this.flip();
	        }
	
	        this._renderer.render(this._stage);
	      }
	
	      this._overlays.tick(t);
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh() {
	      var flip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      if (!this._force_flip) {
	        this._force_flip = flip;
	      }
	
	      this.emit('refresh', { flip: flip });
	
	      return this;
	    }
	  }, {
	    key: 'flip',
	    value: function flip() {
	      var data = this._data;
	      var pixels = this._pixels;
	      var pal = this._rainbow;
	
	      for (var i = 0; i < this._size; i++) {
	        pixels[i] = pal.data[data[i]];
	      }
	
	      this._context.putImageData(this._imageData, 0, 0);
	
	      this._force_flip = false;
	
	      this.emit('flip');
	
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
	    key: 'rescale',
	    value: function rescale(width, height) {
	      if (!this.emit('rescale', { width: width, height: height }).defaultPrevented) {
	        this.scale = Math.ceil(Math.min(width / this._renderer.width, height / this._renderer.height));
	      }
	      return this;
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {
	      this._renderer.resize(this._width * this._scale, this._height * this._scale);
	
	      if (this._sprite) {
	        this._sprite.texture = null;
	      }
	
	      if (this._texture) {
	        this._texture.destroy();
	        this._texture = null;
	      }
	
	      if (this._canvas) {
	        this._canvas.remove();
	      }
	
	      this._canvas = document.createElement('canvas');
	      this._canvas.style.display = 'none';
	      this._canvas.width = this._width;
	      this._canvas.height = this._height;
	      document.body.appendChild(this._canvas);
	
	      this._texture = PIXI.Texture.fromCanvas(this._canvas, PIXI.SCALE_MODES.NEAREST);
	
	      if (!this._sprite) {
	        this._sprite = new PIXI.Sprite(this._texture);
	      } else {
	        this._sprite.texture = this._texture;
	      }
	
	      this._context = this._canvas.getContext('2d', { alpha: true, antialias: false });
	      this._context.clearRect(0, 0, this._width, this._height);
	
	      this._imageData = this._context.getImageData(0, 0, this._width, this._height);
	
	      this._pixels = new Uint32Array(this._imageData.data.buffer);
	
	      this.center();
	
	      this.test();
	
	      this._overlays.resize();
	
	      return this;
	    }
	  }, {
	    key: 'pixel',
	    value: function pixel(i, c) {
	      var data = this._data;
	      if (c !== undefined && data[i] !== c) {
	        data[i] = Math.max(0, Math.min(c, this._rainbow.count - 1));
	      }
	      return data[i];
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
	
	      var tex = PIXI.Texture.fromImage('./build/' + __webpack_require__(29)("./" + filename), undefined, PIXI.SCALE_MODES.NEAREST);
	      tex.on('update', function () {
	        return _this2.update();
	      });
	      return tex;
	    }
	  }, {
	    key: 'test',
	    value: function test() {
	      this.clear();
	
	      this._stage.removeChildren();
	
	      var t = new PIXI.Sprite(this.loadTexture('test.png'));
	      this._stage.addChild(t);
	
	      var text = new PIXI.Text('This is a pixi text', { font: '20px "Glass TTY VT220"', fill: 0xFFFFFF });
	      text.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
	      text.context.canvas.style['font-smoothing'] = 'never';
	      text.context.canvas.style['-webkit-font-smoothing'] = 'none';
	      text.context.imageSmoothingEnabled = false;
	      text.context.canvas.style.display = 'hidden';
	      document.body.appendChild(text.context.canvas);
	      text.updateText();
	      this._stage.addChild(text);
	      this.update();
	      document.body.removeChild(text.context.canvas);
	    }
	  }, {
	    key: 'scale',
	    get: function get() {
	      return this._scale;
	    },
	    set: function set(value) {
	      this._scale = value;
	      this.resize();
	    }
	  }, {
	    key: 'width',
	    set: function set(value) {
	      this._width = value;
	      this.resize();
	    }
	  }, {
	    key: 'height',
	    set: function set(value) {
	      this._height = value;
	      this.resize();
	    }
	  }, {
	    key: 'video_chip',
	    get: function get() {
	      return this;
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
	    key: 'sprite',
	    get: function get() {
	      return this._sprite;
	    }
	  }, {
	    key: 'texture',
	    get: function get() {
	      return this._texture;
	    }
	  }, {
	    key: 'canvas',
	    get: function get() {
	      return this._canvas;
	    }
	  }, {
	    key: 'context',
	    get: function get() {
	      return this._context;
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(22);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Rainbow = function (_Chip) {
	  _inherits(Rainbow, _Chip);
	
	  function Rainbow(main) {
	    _classCallCheck(this, Rainbow);
	
	    var _this = _possibleConstructorReturn(this, (Rainbow.__proto__ || Object.getPrototypeOf(Rainbow)).call(this, main));
	
	    _this.init('i32', 'rainbow', ['count']);
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Rainbow, [{
	    key: 'reset',
	    value: function reset() {
	      _get(Rainbow.prototype.__proto__ || Object.getPrototypeOf(Rainbow.prototype), 'reset', this).call(this);
	
	      this._data[0] = 0x000000;
	      this._data[1] = 0x800000;
	      this._data[2] = 0x008000;
	      this._data[3] = 0x808000;
	      this._data[4] = 0x000080;
	      this._data[5] = 0x800080;
	      this._data[6] = 0x008080;
	      this._data[7] = 0xc0c0c0;
	      this._data[8] = 0x808080;
	      this._data[9] = 0xff0000;
	      this._data[10] = 0x00ff00;
	      this._data[11] = 0xffff00;
	      this._data[12] = 0x0000ff;
	      this._data[13] = 0xff00ff;
	      this._data[14] = 0x00ffff;
	      this._data[15] = 0xffffff;
	
	      return this;
	    }
	  }, {
	    key: 'from_rgb',
	    value: function from_rgb(c) {
	      return _.find(this._data, c);
	    }
	  }, {
	    key: 'to_rgb',
	    value: function to_rgb(c) {
	      return this._data[c];
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _emitter = __webpack_require__(13);
	
	var _utils = __webpack_require__(3);
	
	var _memory = __webpack_require__(14);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Chip = function (_Emitter) {
	  _inherits(Chip, _Emitter);
	
	  function Chip(main) {
	    _classCallCheck(this, Chip);
	
	    var _this = _possibleConstructorReturn(this, (Chip.__proto__ || Object.getPrototypeOf(Chip)).call(this));
	
	    _this._main = main;
	    return _this;
	  }
	
	  _createClass(Chip, [{
	    key: 'init',
	    value: function init() {
	      var data_size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'i8';
	      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	      var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	      var nodata = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	
	      var main = this._main;
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var k = _step.value;
	
	          this['_' + k] = main.default(name + '.' + k);
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
	        var sz = _.isNumber(data_size) ? data_size : _memory.data_type_sizes[data_size];
	        this._size = (this._count || 1) * (this._width * this._height) * sz;
	
	        this._top = _.get(main, 'mem_map.' + name + '.top', 0);
	        this._bottom = this._top + this._size - 1;
	
	        this._data = new window[_memory.data_type_fns[_.isString(data_size) ? data_size : 'i8'] + 'Array'](this.memory.buffer, this._top, this._size);
	      }
	
	      return this;
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this._force_update = false;
	      return this.clear();
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {}
	  }, {
	    key: 'update',
	    value: function update() {
	      this._force_update = true;
	      return this;
	    }
	  }, {
	    key: 'tick',
	    value: function tick(t) {
	      if (this._force_update) {
	        this.refresh();
	        this._force_update = false;
	      }
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      if (this._data) {
	        this._data.fill(v);
	      }
	      return this.update();
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh() {
	      var flip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	      this.guideo.force_update = true;
	      this.guideo.refresh(flip);
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
	    key: 'force_update',
	    get: function get() {
	      return this._force_update;
	    },
	    set: function set(value) {
	      this._force_update = value;
	    }
	  }]);
	
	  return Chip;
	}(_emitter.Emitter);
	
	exports.default = Chip;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _chip = __webpack_require__(22);
	
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
	
	    _this.init('i8', 'fonzo', ['count', 'width', 'height']);
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Fonzo, [{
	    key: 'draw',
	    value: function draw(x, y, c) {
	      var fg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	      var bg = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	
	      var w = this._width;
	      var h = this._height;
	      var sz = this._size;
	      var data = this._data;
	      var guideo = this.guideo;
	
	      var ptr = this._top + c * sz;
	      for (var by = 0; by < h; by++) {
	        var pi = (y + by) * w + x;
	        for (var bx = 0; bx < w; bx++) {
	          guideo.pixel(pi++, data[ptr++] ? fg : bg);
	        }
	      }
	
	      return this.update();
	    }
	  }]);
	
	  return Fonzo;
	}(_chip2.default);
	
	exports.default = Fonzo;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _chip = __webpack_require__(22);
	
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
	
	    _this.init(3, 'orwell', ['width', 'height']);
	
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(22);
	
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
	
	    _this.init(2, 'beagle', ['width', 'height', 'color', 'blinkrate']);
	
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
	      this._blink_hidden = !this._blink_hidden;
	      return this.update();
	    }
	  }, {
	    key: 'move_to',
	    value: function move_to(x, y) {
	      var w = this.orwell.width;
	      var h = this.orwell.height;
	
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
	
	      return this.update();
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(22);
	
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
	
	    _this.init('i8', 'violet', ['count', 'width', 'height']);
	
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
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = this._list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var s = _step.value;
	
	          if (s.name === name) {
	            return s;
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
	
	      return null;
	    }
	  }, {
	    key: 'add',
	    value: function add(name, frame, x, y, z) {
	      this._list.push({ name: name, frame: frame, x: x, y: y, z: z, index: Number.MAX_VALUE });
	      return this;
	    }
	  }, {
	    key: 'del',
	    value: function del(name) {
	      var s = this.find(name);
	      if (s) {
	        this._list.splice(s.index, 1);
	      }
	      return this;
	    }
	  }, {
	    key: 'move',
	    value: function move(name, x, y, z) {
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
	    value: function move_by(name, x, y) {
	      var s = this.find(name);
	      if (s) {
	        s.x = x;
	        s.y = y;
	        this.update();
	      }
	      return this;
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var sw = this._width;
	      var sh = this._height;
	      var sl = this._list;
	      var ss = this._size;
	      var data = this._data;
	      var guideo = this.guideo;
	
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = _.sortBy(sl, 'z')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var s = _step2.value;
	
	          var ptr = sl + s.frame * ss;
	          for (var by = 0; by < sh; by++) {
	            var pi = (s.y + by) * sw + s.x;
	            for (var bx = 0; bx < sw; bx++) {
	              guideo.pixel(pi++, data[ptr++]);
	            }
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
	
	      return this.update();
	    }
	  }]);
	
	  return Violet;
	}(_chip2.default);
	
	exports.default = Violet;

/***/ },
/* 27 */
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
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Overlay = exports.Overlay = function () {
	  function Overlay(guideo, width, height) {
	    _classCallCheck(this, Overlay);
	
	    this.guideo = guideo;
	    this.width = width;
	    this.height = height;
	    this.last = 0;
	  }
	
	  _createClass(Overlay, [{
	    key: 'create',
	    value: function create() {
	      this.canvas = new PIXI.CanvasBuffer(this.width, this.height);
	
	      this.tex = PIXI.Texture.fromCanvas(this.canvas.canvas, PIXI.SCALE_MODES.NEAREST);
	      this.tex.scaleMode = PIXI.SCALE_MODES.NEAREST;
	
	      this.sprite = new PIXI.Sprite(this.tex);
	
	      this.context = this.canvas.canvas.getContext('2d', { alpha: true, antialias: false });
	    }
	  }, {
	    key: 'tick',
	    value: function tick(t) {}
	  }, {
	    key: 'reset',
	    value: function reset() {}
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      if (this.canvas) {
	        this.canvas.destroy();
	        this.canvas = null;
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.guideo.force_update = true;
	    }
	  }]);
	
	  return Overlay;
	}();
	
	var ScreenOverlay = exports.ScreenOverlay = function (_Overlay) {
	  _inherits(ScreenOverlay, _Overlay);
	
	  function ScreenOverlay(guideo, width, height, options) {
	    _classCallCheck(this, ScreenOverlay);
	
	    var _this = _possibleConstructorReturn(this, (ScreenOverlay.__proto__ || Object.getPrototypeOf(ScreenOverlay)).call(this, guideo, width, height));
	
	    _this.create();
	
	    _this.sprite.x = _this.guideo.offset_x + _this.guideo.margins_x / 2;
	    _this.sprite.y = _this.guideo.offset_y + _this.guideo.margins_y / 2;
	    return _this;
	  }
	
	  return ScreenOverlay;
	}(Overlay);
	
	var ScanlinesOverlay = exports.ScanlinesOverlay = function (_Overlay2) {
	  _inherits(ScanlinesOverlay, _Overlay2);
	
	  function ScanlinesOverlay(guideo, width, height, options) {
	    _classCallCheck(this, ScanlinesOverlay);
	
	    var _this2 = _possibleConstructorReturn(this, (ScanlinesOverlay.__proto__ || Object.getPrototypeOf(ScanlinesOverlay)).call(this, guideo, width, height));
	
	    _this2.gap = _lodash2.default.get(options, 'gap', 3);
	    _this2.alpha = _lodash2.default.get(options, 'alpha', 0.35);
	
	    _this2.create();
	
	    var a = _this2.alpha * 255;
	    var data = _this2.context.getImageData(0, 0, _this2.width, _this2.height);
	    var pixels = data.data;
	    var sz = _this2.width * 4;
	    var idx = void 0;
	    for (var y = 0; y < _this2.height; y += _this2.gap) {
	      idx = y * sz;
	      for (var i = idx; i < idx + sz; i += 4) {
	        pixels.set([0, 0, 0, a], i);
	      }
	    }
	    _this2.context.putImageData(data, 0, 0);
	    return _this2;
	  }
	
	  return ScanlinesOverlay;
	}(Overlay);
	
	var ScanlineOverlay = exports.ScanlineOverlay = function (_Overlay3) {
	  _inherits(ScanlineOverlay, _Overlay3);
	
	  function ScanlineOverlay(guideo, width, height, options) {
	    _classCallCheck(this, ScanlineOverlay);
	
	    var _this3 = _possibleConstructorReturn(this, (ScanlineOverlay.__proto__ || Object.getPrototypeOf(ScanlineOverlay)).call(this, guideo, width, height));
	
	    _this3.refresh = _lodash2.default.get(options, 'refresh', 50);
	    _this3.speed = _lodash2.default.get(options, 'speed', 16);
	    _this3.alpha = _lodash2.default.get(options, 'alpha', 0.1);
	
	    _this3.create();
	
	    var data = _this3.context.getImageData(0, 0, _this3.width, _this3.height);
	    var pixels = data.data;
	    var sz = _this3.width * 4;
	    var len = _this3.height * sz;
	    var l = 0;
	    var h = _this3.height;
	    var a = _this3.alpha * 255;
	    var aa = void 0;
	    for (var y = 0; y < len; y += sz) {
	      aa = l / h * a;
	      for (var x = y; x < y + sz; x += 4) {
	        pixels.set([25, 25, 25, aa], x);
	      }
	      l++;
	    }
	    _this3.context.putImageData(data, 0, 0);
	
	    _this3.sprite.y = -_this3.sprite.height;
	    return _this3;
	  }
	
	  _createClass(ScanlineOverlay, [{
	    key: 'tick',
	    value: function tick(t) {
	      if (t - this.last >= this.refresh) {
	        this.sprite.y += this.speed;
	        if (this.sprite.y > this.height) {
	          this.sprite.y = -this.sprite.height;
	        }
	        this.last = t;
	
	        this.update();
	      }
	    }
	  }]);
	
	  return ScanlineOverlay;
	}(Overlay);
	
	var NoisesOverlay = exports.NoisesOverlay = function (_Overlay4) {
	  _inherits(NoisesOverlay, _Overlay4);
	
	  function NoisesOverlay(guideo, width, height, options) {
	    _classCallCheck(this, NoisesOverlay);
	
	    var _this4 = _possibleConstructorReturn(this, (NoisesOverlay.__proto__ || Object.getPrototypeOf(NoisesOverlay)).call(this, guideo, width, height));
	
	    _this4.refresh = _lodash2.default.get(options, 'refresh', 250);
	    _this4.count = _lodash2.default.get(options, 'count', 8);
	    _this4.rate = _lodash2.default.get(options, 'rate', 0.85);
	    _this4.red = _lodash2.default.get(options, 'red', 100);
	    _this4.green = _lodash2.default.get(options, 'green', 100);
	    _this4.blue = _lodash2.default.get(options, 'blue', 100);
	    _this4.alpha = _lodash2.default.get(options, 'alpha', 0.15);
	
	    _this4.noises = {};
	
	    var a = _this4.alpha * 255;
	    for (var c = 0; c < _this4.count; c++) {
	      var noise = new Overlay(_this4.guideo, _this4.width, _this4.height);
	      noise.create();
	      noise.sprite.visible = c === 0;
	
	      var data = noise.context.getImageData(0, 0, _this4.width, _this4.height);
	      var _pixels = data.data;
	      var _len = _pixels.length;
	      var r = _this4.red;
	      var g = _this4.green;
	      var b = _this4.blue;
	      var _rate = _this4.rate;
	      for (var i = 0; i < _len; i += 4) {
	        if (Math.random() >= _rate) {
	          _pixels.set([Math.trunc(Math.random() * r), Math.trunc(Math.random() * g), Math.trunc(Math.random() * b), a], i);
	        }
	      }
	      noise.context.putImageData(data, 0, 0);
	      _this4.noises[c] = noise;
	      _this4.guideo._main.stage.addChild(noise.sprite);
	    }
	
	    _this4.noiseKeys = _lodash2.default.keys(_this4.noises);
	    return _this4;
	  }
	
	  _createClass(NoisesOverlay, [{
	    key: 'destroy',
	    value: function destroy() {
	      _get(NoisesOverlay.prototype.__proto__ || Object.getPrototypeOf(NoisesOverlay.prototype), 'destroy', this).call(this);
	      for (var k in this.noises) {
	        var noise = this.noises[k];
	        noise.destroy();
	      }
	      this.noises = {};
	      this.noiseKeys = [];
	    }
	  }, {
	    key: 'tick',
	    value: function tick(t) {
	      if (t - this.last >= this.refresh) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = this.noiseKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var k = _step.value;
	
	            this.noises[k].sprite.visible = false;
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
	
	        var noise = this.noiseKeys[Math.trunc(Math.random() * this.noiseKeys.length)];
	        this.noises[noise].sprite.visible = true;
	        this.last = t;
	
	        this.update();
	      }
	    }
	  }]);
	
	  return NoisesOverlay;
	}(Overlay);
	
	var RgbOverlay = exports.RgbOverlay = function (_Overlay5) {
	  _inherits(RgbOverlay, _Overlay5);
	
	  function RgbOverlay(guideo, width, height, options) {
	    _classCallCheck(this, RgbOverlay);
	
	    var _this5 = _possibleConstructorReturn(this, (RgbOverlay.__proto__ || Object.getPrototypeOf(RgbOverlay)).call(this, guideo, width, height));
	
	    _this5.alpha = _lodash2.default.get(options, 'alpha', 0.075);
	
	    _this5.create();
	
	    var data = _this5.context.getImageData(0, 0, _this5.width, _this5.height);
	    var pixels = data.data;
	    var len = pixels.length;
	    var a = _this5.alpha * 255;
	    for (var i = 0; i < len; i += 12) {
	      pixels.set([100, 100, 100, a], i);
	    }
	    _this5.context.putImageData(data, 0, 0);
	    return _this5;
	  }
	
	  return RgbOverlay;
	}(Overlay);
	
	var CrtOverlay = exports.CrtOverlay = function (_Overlay6) {
	  _inherits(CrtOverlay, _Overlay6);
	
	  function CrtOverlay(guideo, width, height, options) {
	    _classCallCheck(this, CrtOverlay);
	
	    var _this6 = _possibleConstructorReturn(this, (CrtOverlay.__proto__ || Object.getPrototypeOf(CrtOverlay)).call(this, guideo, width, height));
	
	    _this6.radius = _lodash2.default.get(options, 'radius', 0.25);
	    _this6.inside_alpha = _lodash2.default.get(options, 'inside_alpha', 0.2);
	    _this6.outside_alpha = _lodash2.default.get(options, 'outside_alpha', 0.15);
	
	    _this6.create();
	
	    _this6.context.globalCompositeOperation = 'darker';
	    var gradient = _this6.context.createRadialGradient(_this6.width / 2, _this6.height / 2, _this6.height / 2, _this6.width / 2, _this6.height / 2, _this6.height / _this6.radius);
	    gradient.addColorStop(0, 'rgba(255, 255, 255, ' + _this6.inside_alpha + ')');
	    gradient.addColorStop(1, 'rgba(0, 0, 0, ' + _this6.outside_alpha + ')');
	    _this6.context.fillStyle = gradient;
	    _this6.context.fillRect(0, 0, _this6.width, _this6.height);
	    _this6.context.globalCompositeOperation = 'source-over';
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
	    var scale = this.scale;
	    var margins_x = this.margins_x;
	    var margins_y = this.margins_y;
	
	    this._list = {};
	
	    if (_lodash2.default.get(options, 'screen')) {
	      this._list.screen = new ScreenOverlay(this, this._width, this._height, _lodash2.default.get(options, 'screen'));
	      this._list.screen.sprite.scale = new PIXI.Point(scale, scale);
	      stage.addChild(this._list.screen.sprite);
	    }
	
	    if (_lodash2.default.get(options, 'scanlines')) {
	      this._list.scanlines = new ScanlinesOverlay(this, width, height, _lodash2.default.get(options, 'scanlines'));
	      stage.addChild(this._list.scanlines.sprite);
	    }
	
	    if (_lodash2.default.get(options, 'scanline')) {
	      this._list.scanline = new ScanlineOverlay(this, width, height, _lodash2.default.get(options, 'scanline'));
	      stage.addChild(this._list.scanline.sprite);
	    }
	
	    if (_lodash2.default.get(options, 'rgb')) {
	      this._list.rgb = new RgbOverlay(this, width, height, _lodash2.default.get(options, 'rgb'));
	      stage.addChild(this._list.rgb.sprite);
	    }
	
	    if (_lodash2.default.get(options, 'noises')) {
	      this._list.noises = new NoisesOverlay(this, width, height, _lodash2.default.get(options, 'noises'));
	    }
	
	    if (_lodash2.default.get(options, 'crt')) {
	      this._list.crt = new CrtOverlay(this, width, height, _lodash2.default.get(options, 'crt'));
	      stage.addChild(this._list.crt.sprite);
	    }
	
	    if (_lodash2.default.get(options, 'monitor')) {
	      var tex = PIXI.Texture.fromImage('./build/' + __webpack_require__(28));
	      this._list.monitor = new PIXI.Sprite(tex);
	      this._list.monitor.width = width + margins_x;
	      this._list.monitor.height = height + margins_y;
	      this._list.monitor.x = margins_x / -2;
	      this._list.monitor.y = margins_y / -2;
	      stage.addChild(this._list.monitor);
	    }
	  }
	
	  _createClass(Overlays, [{
	    key: 'tick',
	    value: function tick(delay) {
	      for (var k in this._list) {
	        if (this._list[k].tick) {
	          this._list[k].tick(delay);
	        }
	      }
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      for (var k in this._list) {
	        if (this._list[k].reset) {
	          this._list[k].reset();
	        }
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      for (var k in this._list) {
	        if (this._list[k].destroy) {
	          this._list[k].destroy();
	        }
	      }
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {}
	  }]);

	  return Overlays;
	}();

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/assets/imgs//crt.png";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./crt.png": 30,
		"./test.png": 31
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
	webpackContext.id = 29;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/crt.png";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/test.png";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(22);
	
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
	
	    _this.init('i32', 'ken', ['count']);
	
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(22);
	
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
	
	    _this.init('i32', 'mickey', ['count', 'dblClickDelay', 'dblClickDistance']);
	
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
	      this._btns = 0;
	
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
	    key: 'draw',
	    value: function draw() {
	      return this;
	    }
	  }, {
	    key: 'getEventInfo',
	    value: function getEventInfo(e) {
	      var renderer = this._main.renderer;
	
	      var size = new PIXI.Point(renderer.width - this._sprite.width, renderer.height - this._sprite.height);
	
	      var x = Math.trunc(Math.min(size.x, Math.max(0, e.data.global.x)) / this._main.scale);
	      var y = Math.trunc(Math.min(size.y, Math.max(0, e.data.global.y)) / this._main.scale);
	
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
	      var _getEventInfo2 = this.getEventInfo(e),
	          x = _getEventInfo2.x,
	          y = _getEventInfo2.y,
	          button = _getEventInfo2.button;
	
	      this._x = x;
	      this._y = y;
	
	      this.emit('mouse.move', { x: x, y: y, button: button });
	
	      this.update();
	
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
	    },
	    set: function set(value) {
	      this._dblClickDelay = value;
	    }
	  }, {
	    key: 'dblClickDistance',
	    get: function get() {
	      return this._dblClickDistance;
	    },
	    set: function set(value) {
	      this._dblClickDistance = value;
	    }
	  }]);
	
	  return Mickey;
	}(_chip2.default);
	
	exports.default = Mickey;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _utils = __webpack_require__(3);
	
	var _types = __webpack_require__(35);
	
	var _types2 = _interopRequireDefault(_types);
	
	var _const = __webpack_require__(43);
	
	var _const2 = _interopRequireDefault(_const);
	
	var _include = __webpack_require__(44);
	
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _assigns = __webpack_require__(36);
	
	var _assigns2 = _interopRequireDefault(_assigns);
	
	var _delimiters = __webpack_require__(37);
	
	var _delimiters2 = _interopRequireDefault(_delimiters);
	
	var _comments = __webpack_require__(38);
	
	var _comments2 = _interopRequireDefault(_comments);
	
	var _groups = __webpack_require__(39);
	
	var _groups2 = _interopRequireDefault(_groups);
	
	var _literals = __webpack_require__(40);
	
	var _literals2 = _interopRequireDefault(_literals);
	
	var _operators = __webpack_require__(41);
	
	var _operators2 = _interopRequireDefault(_operators);
	
	var _primitives = __webpack_require__(42);
	
	var _primitives2 = _interopRequireDefault(_primitives);
	
	var _reserved = __webpack_require__(61);
	
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
/* 36 */
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
/* 37 */
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
/* 38 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  comment: /^\/\/([^\r\n]*)/
	};

/***/ },
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lexer = __webpack_require__(34);
	
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _globals = __webpack_require__(12);
	
	var _frame = __webpack_require__(46);
	
	var _key_literal = __webpack_require__(62);
	
	var _key_literal2 = _interopRequireDefault(_key_literal);
	
	var _statements = __webpack_require__(47);
	
	var _statements2 = _interopRequireDefault(_statements);
	
	var _id = __webpack_require__(48);
	
	var _id2 = _interopRequireDefault(_id);
	
	var _assign = __webpack_require__(49);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _return = __webpack_require__(50);
	
	var _return2 = _interopRequireDefault(_return);
	
	var _class = __webpack_require__(51);
	
	var _class2 = _interopRequireDefault(_class);
	
	var _conditions = __webpack_require__(52);
	
	var _conditions2 = _interopRequireDefault(_conditions);
	
	var _var = __webpack_require__(53);
	
	var _var2 = _interopRequireDefault(_var);
	
	var _loops = __webpack_require__(54);
	
	var _loops2 = _interopRequireDefault(_loops);
	
	var _expressions = __webpack_require__(55);
	
	var _expressions2 = _interopRequireDefault(_expressions);
	
	var _array = __webpack_require__(56);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _dict = __webpack_require__(57);
	
	var _dict2 = _interopRequireDefault(_dict);
	
	var _fn = __webpack_require__(58);
	
	var _fn2 = _interopRequireDefault(_fn);
	
	var _id3 = __webpack_require__(59);
	
	var _id4 = _interopRequireDefault(_id3);
	
	var _class3 = __webpack_require__(60);
	
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
/* 46 */
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
/* 47 */
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(45);
	
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(45);
	
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(45);
	
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(45);
	
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lexer = __webpack_require__(34);
	
	var _parser = __webpack_require__(45);
	
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(45);
	
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
/* 55 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(45);
	
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(45);
	
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(45);
	
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _globals = __webpack_require__(12);
	
	var _parser = __webpack_require__(45);
	
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
/* 60 */
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
/* 61 */
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(45);
	
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _templates = __webpack_require__(64);
	
	var _templates2 = _interopRequireDefault(_templates);
	
	var _code = __webpack_require__(65);
	
	var _code2 = _interopRequireDefault(_code);
	
	var _block = __webpack_require__(66);
	
	var _block2 = _interopRequireDefault(_block);
	
	var _statements = __webpack_require__(67);
	
	var _statements2 = _interopRequireDefault(_statements);
	
	var _expressions = __webpack_require__(68);
	
	var _expressions2 = _interopRequireDefault(_expressions);
	
	var _primitives = __webpack_require__(69);
	
	var _primitives2 = _interopRequireDefault(_primitives);
	
	var _operators = __webpack_require__(70);
	
	var _operators2 = _interopRequireDefault(_operators);
	
	var _id = __webpack_require__(71);
	
	var _id2 = _interopRequireDefault(_id);
	
	var _class = __webpack_require__(72);
	
	var _class2 = _interopRequireDefault(_class);
	
	var _fn = __webpack_require__(73);
	
	var _fn2 = _interopRequireDefault(_fn);
	
	var _array = __webpack_require__(74);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _dict = __webpack_require__(75);
	
	var _dict2 = _interopRequireDefault(_dict);
	
	var _assign = __webpack_require__(76);
	
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
/* 64 */
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
/* 65 */
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
/* 66 */
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
/* 67 */
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
/* 68 */
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
/* 69 */
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
/* 70 */
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
/* 71 */
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
/* 72 */
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
/* 73 */
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
/* 74 */
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
/* 75 */
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
/* 76 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTVhYTM1ZTY4YWI5MDAyOTlmZTQiLCJ3ZWJwYWNrOi8vLy4vYXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGl4aS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYi1hdWRpby1kYXdcIiIsIndlYnBhY2s6Ly8vLi9hcHAvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJhZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBlcmZvcm1hbmNlLW5vd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1peHdpdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuZGVyc2NvcmUtcGx1c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9hcHAvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vbWVtb3J5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImhleHlcIiIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vbWVtb3J5bWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmV0dHktYnl0ZXNcIiIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vc3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2ludGVycnVwdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvZ3VpZGVvLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy9yYWluYm93LmpzIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy9jaGlwLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy9mb256by5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvb3J3ZWxsLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy9iZWFnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL3Zpb2xldC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vb3ZlcmxheXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZ3MvY3J0LnBuZz8zZTgyIiwid2VicGFjazovLy9eXFwuXFwvLiokIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWdzL2NydC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZ3MvdGVzdC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvbWlja2V5LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9sZXhlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL3R5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvYXNzaWducy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2RlbGltaXRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2dyb3Vwcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2xpdGVyYWxzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvb3BlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvcHJpbWl0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2NvbnN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvcGFyc2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL3N0YXRlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9pZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL3JldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2NsYXNzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvY29uZGl0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL3Zhci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2xvb3BzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2V4cHJlc3Npb25zLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2FycmF5LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2RpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZm4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvaWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy9yZXNlcnZlZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9rZXlfbGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdHJhbnNwaWxlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3N0YXRlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9leHByZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3ByaW1pdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9vcGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9pZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NsYXNzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZm4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2RpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9hc3NpZ24uanMiXSwibmFtZXMiOlsiX1NUT1BQRUQiLCJfUlVOTklORyIsIl9QQVVTRUQiLCJNYWluIiwib3B0aW9ucyIsInJlc2V0IiwiX3VwZGF0ZXMiLCJxdWV1ZSIsImFkZCIsIm8iLCJfIiwiZ2V0IiwiX19pblVwZGF0ZXMiLCJwdXNoIiwicmVtb3ZlIiwicmVqZWN0Iiwib2JqZWN0IiwiYiIsIkFycmF5QnVmZmVyIiwiYSIsIlVpbnQzMkFycmF5IiwiYyIsIlVpbnQ4QXJyYXkiLCJMRSIsIl9tZW1vcnkiLCJfbWVtb3J5TWFuYWdlciIsIl9zdGFjayIsIl9pbnRlcnJ1cHRzIiwiX2d1aWRlbyIsIl9rZW4iLCJfbWlja2V5IiwiX29uUmVzaXplIiwib25SZXNpemUiLCJiaW5kIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRoYXQiLCJQSVhJIiwidGlja2VyIiwic2hhcmVkIiwic3RhdHVzIiwidGljayIsInQiLCJyZW5kZXIiLCJxIiwiY2IiLCJhcmdzIiwicmVuZGVyZXIiLCJzdGFnZSIsInN0YXJ0IiwiZGVzdHJveSIsIl9zdGF0dXMiLCJfcHJvZ3JhbSIsInBhdGgiLCJ1bmRlZmluZWQiLCJjb2RlIiwiZm4iLCJuYW1lIiwiZW1pdCIsInN0b3AiLCJ0b2tlbnMiLCJydW4iLCJjb25zb2xlIiwibG9nIiwicCIsIm5vZGVzIiwiZXJyb3JzIiwiRnVuY3Rpb24iLCJhcHBseSIsInRlc3QiLCJ0aW1lIiwidmFsdWUiLCJfc3RhZ2UiLCJfcmVuZGVyZXIiLCJtYWluIiwiYXBwIiwiZWxlY3Ryb24iLCJyZXF1aXJlIiwicmVtb3RlIiwic2NyZWVuIiwiZGlhbG9nIiwiQnJvd3NlcldpbmRvdyIsImV4dGVuZCIsInRlbXBsYXRlU2V0dGluZ3MiLCJpbnRlcnBvbGF0ZSIsImZzIiwiTWl4aW4iLCJtaXgiLCJ1c2VyUGF0aCIsImpvaW4iLCJnZXRBcHBQYXRoIiwiZXhpc3RzU3luYyIsIm1rZGlycyIsIklTX1dJTiIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsIklTX09TWCIsIklTX0xJTlVYIiwiZGlycyIsImJ1aWxkIiwiX19kaXJuYW1lIiwiY3dkIiwiaG9tZSIsImdldFBhdGgiLCJ1c2VyIiwidG1wIiwicm9vdCIsIm5vZGVfbW9kdWxlcyIsInVzZXJfcGtnIiwiZ2V0TmFtZSIsInZlcnNpb24iLCJnZXRWZXJzaW9uIiwib3BlbkZpbGUiLCJzaG93T3BlbkRpYWxvZyIsImVyciIsImVycm9yIiwic2F2ZUZpbGUiLCJzaG93U2F2ZURpYWxvZyIsIm1lc3NhZ2VCb3giLCJzaG93TWVzc2FnZUJveCIsIm1hcF9nZXR0ZXJzIiwic291cmNlIiwidGFyZ2V0IiwiZGVmcyIsImsiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNhbGwiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwibWFwX2dldHRlcnNfcmV0dXJuX3RoaXMiLCJub3ciLCJkZWxheSIsIm1zIiwiYXN5bmMiLCJjb250ZXh0IiwiaXNOdW1iZXIiLCJpc0FycmF5Iiwic2V0VGltZW91dCIsImJ1ZmZlcl90b19zdHJpbmciLCJsZW4iLCJsZW5ndGgiLCJpIiwicyIsInRvU3RyaW5nIiwic3RyaW5nX3RvX2J1ZmZlciIsInN0ciIsIkJ1ZmZlciIsIk1hdGgiLCJ0cnVuYyIsIngiLCJoZXgiLCJzdWJzdHIiLCJwYXJzZUludCIsInN0cmluZ19idWZmZXIiLCJ3cml0ZSIsIm5vcm1hbGl6ZU1lc3NhZ2VzIiwibWVzc2FnZSIsIm0iLCJpc1N0cmluZyIsInNpemUiLCJwYWRTdGFydCIsImJ1ZmZlcl9kdW1wIiwiYnVmZmVyIiwid2lkdGgiLCJjYXBzIiwiaW5kZW50IiwicmVwZWF0IiwiemVybyIsIm4iLCJtYXgiLCJ0b1VwcGVyQ2FzZSIsIm1pbiIsImJ5dGVMZW5ndGgiLCJyb3dzIiwiY2VpbCIsImxhc3QiLCJvZmZzZXRMZW5ndGgiLCJhcnIiLCJsYXN0Qnl0ZXMiLCJsYXN0U3BhY2VzIiwiaiIsInYiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJ1dG9hIiwiYnRvYSIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYXRvdSIsImRlY29kZVVSSUNvbXBvbmVudCIsImVzY2FwZSIsImF0b2IiLCJpbnN0YW5jZUZ1bmN0aW9uIiwiZm9yY2UiLCJoYXNPd25Qcm9wZXJ0eSIsIndyaXRhYmxlIiwiaW5zdGFuY2VGdW5jdGlvbnMiLCJuYW1lcyIsInJhZiIsIlBvaW50IiwicHJvdG90eXBlIiwiZGlzdGFuY2UiLCJzcXJ0IiwieSIsInRlbXBsYXRlIiwiUmVjdGFuZ2xlIiwiZGVmYXVsdHMiLCJib3VuZHNjaGVjayIsInR5cGUiLCJtZW1vcnkiLCJtZW1vcnlfbWFuYWdlciIsImNvbGxlY3RfZGVsYXkiLCJndWlkZW8iLCJoZWlnaHQiLCJzY2FsZSIsInJhaW5ib3ciLCJjb3VudCIsImZvbnpvIiwib3J3ZWxsIiwiYmVhZ2xlIiwiY29sb3IiLCJibGlua3JhdGUiLCJ2aW9sZXQiLCJrZW4iLCJtaWNrZXkiLCJkYmxDbGlja0RlbGF5IiwiZGJsQ2xpY2tEaXN0YW5jZSIsIm5ldHdvcmsiLCJhbHRvIiwibXNnIiwicm93IiwiY29sIiwicnVudGltZV9lcnJvciIsImUiLCJpb19lcnJvciIsIkV2ZW50IiwiZGF0YSIsImJ1YmJsZXMiLCJfX2V2ZW50T2JqZWN0IiwidGltZVN0YW1wIiwicGVyZm9ybWFuY2UiLCJzdG9wcGVkIiwic3RvcHBlZEltbWVkaWF0ZSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJFbWl0dGVyIiwib3JkZXIiLCJfbGlzdGVuZXJzIiwic29ydEJ5Iiwib25jZUhhbmRsZXJXcmFwcGVyIiwib2ZmIiwiX29yaWdpbmFsSGFuZGxlciIsIm9uIiwibGlzdCIsInNwbGljZSIsImlzRW1wdHkiLCJvcmlnRXZlbnREYXRhIiwibGlzdGVuZXJzIiwiY2xvbmUiLCJsIiwiY2FuY2VsQnViYmxlIiwicGFyZW50IiwiZGF0YV90eXBlX3NpemVzIiwiaTgiLCJzOCIsImkxNiIsInMxNiIsImkzMiIsInMzMiIsImYzMiIsImRhdGFfdHlwZV9mbnMiLCJkYXRhX3R5cGVfc2l6ZSIsIk1lbW9yeSIsIl9zaXplIiwiZGVmYXVsdCIsIl90b3AiLCJfYm90dG9tIiwiX2J1ZmZlciIsIl9kYXRhIiwiX3ZpZXciLCJEYXRhVmlldyIsIl9mbnMiLCJjbGVhciIsImQiLCJmaWxsIiwiYWRkciIsInN6IiwiaGx0IiwiY2hrX2JvdW5kcyIsImRiIiwiX3ZtIiwibGl0dGxlRW5kaWFuIiwibGQiLCJzdCIsInNsaWNlIiwibGRsIiwiYm90dG9tIiwibWVtIiwibGRzIiwic2V0Iiwic3ViYXJyYXkiLCJzdGwiLCJtYXAiLCJzcGxpdCIsImNoYXJDb2RlQXQiLCJzdHMiLCJ0b3AiLCJzcmMiLCJ0Z3QiLCJjb3B5V2l0aGluIiwiY29weSIsImhleHkiLCJvZmZzZXQiLCJfbWFpbiIsIk1lbW9yeU1hbmFnZXIiLCJfY29sbGVjdF9kZWxheSIsIl9ibG9ja3MiLCJfbGFzdCIsImNvbGxlY3QiLCJ1c2VkIiwib2IiLCJhdmFpbF9tZW0iLCJfYWxsb2MiLCJibG9jayIsInVzZWRfbWVtIiwiZnJlZV9tZW0iLCJtZW1fYnVmZmVyIiwiU3RhY2tFbnRyeSIsInN0YWNrIiwicm9sbGluZyIsIl9tYXgiLCJfdHlwZSIsIl9yb2xsaW5nIiwiX3B0ciIsInJlYWQiLCJ0b3RhbF9zaXplIiwiU3RhY2siLCJfbGlzdCIsImFyZ3VtZW50cyIsInZhbHVlcyIsInBvcCIsIl9JTlRfUlVOTklORyIsIl9JTlRfUEFVU0VEIiwiSW50ZXJydXB0Iiwic3RvcF9hbGwiLCJmaW5kIiwiR3VpZGVvIiwiaW5pdCIsImF1dG9EZXRlY3RSZW5kZXJlciIsIl93aWR0aCIsIl9zY2FsZSIsIl9oZWlnaHQiLCJ2aWV3Iiwic3R5bGUiLCJwb3NpdGlvbiIsImN1cnNvciIsImlkIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJDb250YWluZXIiLCJyZXNpemUiLCJfcmFpbmJvdyIsIl9mb256byIsIl9vcndlbGwiLCJfYmVhZ2xlIiwiX3Zpb2xldCIsIl9vdmVybGF5cyIsInNjYW5saW5lcyIsInNjYW5saW5lIiwicmdiIiwibm9pc2VzIiwiY3J0IiwibW9uaXRvciIsIl9zcHJpdGUiLCJfdGV4dHVyZSIsIl9jYW52YXMiLCJfZm9yY2VfdXBkYXRlIiwiX2ZvcmNlX2ZsaXAiLCJmbGlwIiwicGl4ZWxzIiwiX3BpeGVscyIsInBhbCIsIl9jb250ZXh0IiwicHV0SW1hZ2VEYXRhIiwiX2ltYWdlRGF0YSIsImxlZnQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ0ZXh0dXJlIiwiY3JlYXRlRWxlbWVudCIsImRpc3BsYXkiLCJUZXh0dXJlIiwiZnJvbUNhbnZhcyIsIlNDQUxFX01PREVTIiwiTkVBUkVTVCIsIlNwcml0ZSIsImdldENvbnRleHQiLCJhbHBoYSIsImFudGlhbGlhcyIsImNsZWFyUmVjdCIsImdldEltYWdlRGF0YSIsImNlbnRlciIsImx3IiwidXBkYXRlIiwiZmlsZW5hbWUiLCJ0ZXgiLCJmcm9tSW1hZ2UiLCJyZW1vdmVDaGlsZHJlbiIsImxvYWRUZXh0dXJlIiwiYWRkQ2hpbGQiLCJ0ZXh0IiwiVGV4dCIsImZvbnQiLCJiYXNlVGV4dHVyZSIsInNjYWxlTW9kZSIsImNhbnZhcyIsImltYWdlU21vb3RoaW5nRW5hYmxlZCIsInVwZGF0ZVRleHQiLCJyZW1vdmVDaGlsZCIsIlJhaW5ib3ciLCJDaGlwIiwiZGF0YV9zaXplIiwia2V5cyIsIm5vZGF0YSIsIl9jb3VudCIsInJlZnJlc2giLCJmb3JjZV91cGRhdGUiLCJGb256byIsImZnIiwiYmciLCJ3IiwiaCIsInB0ciIsImJ5IiwicGkiLCJieCIsInBpeGVsIiwiT3J3ZWxsIiwiY2giLCJmbnQiLCJmdyIsImZoIiwiaWR4IiwicHkiLCJkcmF3IiwiZW5kIiwidGlkeCIsImluZGV4IiwiY3IiLCJicyIsInBvcyIsImRyYXdfY2hhciIsInB1dF9jaGFyIiwibW92ZV90byIsIm1vdmVfYnkiLCJzeSIsInR5Iiwic2kiLCJsaW5lIiwic3giLCJ0eCIsImxzIiwiZHkiLCJCZWFnbGUiLCJfeCIsIl95IiwiX2JsaW5rX2hpZGRlbiIsIl9ibGlua3JhdGUiLCJibGluayIsIl9jb2xvciIsIlZpb2xldCIsImZyYW1lIiwieiIsIk51bWJlciIsIk1BWF9WQUxVRSIsInN3Iiwic2giLCJzbCIsInNzIiwiT3ZlcmxheSIsIkNhbnZhc0J1ZmZlciIsInNwcml0ZSIsIlNjcmVlbk92ZXJsYXkiLCJjcmVhdGUiLCJvZmZzZXRfeCIsIm1hcmdpbnNfeCIsIm9mZnNldF95IiwibWFyZ2luc195IiwiU2NhbmxpbmVzT3ZlcmxheSIsImdhcCIsIlNjYW5saW5lT3ZlcmxheSIsInNwZWVkIiwiYWEiLCJOb2lzZXNPdmVybGF5IiwicmF0ZSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsIm5vaXNlIiwidmlzaWJsZSIsInIiLCJnIiwiX3JhdGUiLCJyYW5kb20iLCJub2lzZUtleXMiLCJSZ2JPdmVybGF5IiwiQ3J0T3ZlcmxheSIsInJhZGl1cyIsImluc2lkZV9hbHBoYSIsIm91dHNpZGVfYWxwaGEiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJPdmVybGF5cyIsIktlbiIsIl9vbktleWRvd24iLCJvbktleWRvd24iLCJfb25LZXl1cCIsIm9uS2V5dXAiLCJfbW9kcyIsIl9qb3lzdGljayIsIl9rZXlzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleSIsImtleUNvZGUiLCJtb2RzIiwiam95c3RpY2siLCJzaGlmdCIsImN0cmwiLCJhbHQiLCJtZXRhIiwibnVtcGFkIiwiYnRuMCIsImJ0bjEiLCJidG4yIiwiYnRuMyIsImJ0bjQiLCJ1cCIsImRvd24iLCJyaWdodCIsImxvY2F0aW9uIiwiZXZlbnREZXRhaWxzIiwic3RvcFByb3BhZ2F0aW9uIiwiTWlja2V5IiwiaW50ZXJhY3RpdmUiLCJfb25Nb3VzZURvd24iLCJvbk1vdXNlRG93biIsIl9vbk1vdXNlTW92ZSIsIm9uTW91c2VNb3ZlIiwiX29uTW91c2VVcCIsIm9uTW91c2VVcCIsIl9idG5zIiwiZ2xvYmFsIiwiYnV0dG9uIiwib3JpZ2luYWxFdmVudCIsImdldEV2ZW50SW5mbyIsIl9kYmxDbGlja0RlbGF5IiwiX2RibENsaWNrRGlzdGFuY2UiLCJUb2tlbiIsImxleGVyIiwiX3Jlc2VydmVkIiwiY29sdW1uIiwicGFydHMiLCJpcyIsImlzUmVnRXhwIiwibWF0Y2giLCJiYXNlbmFtZSIsIkVtcHR5Q2xhc3MiLCJMZXhlciIsImNvbnN0YW50cyIsInZhbGlkT2Zmc2V0IiwiY2hhckF0Iiwic3Vic3RyaW5nIiwicG9zX2luZm8iLCJ0b2tlbiIsImluZGV4T2YiLCJjaGFyX2F0IiwibmV4dF9pc19zcGFjZSIsIm9sZF9vZmZzZXQiLCJ0b2tlbl90eXBlcyIsInN1YnRleHQiLCJpbnNlcnRUb2tlbiIsInBlZWsiLCJjb25zdF90b2tlbiIsImluY2x1ZGVfdG9rZW4iLCJuZXh0IiwiaW5mbyIsIndpdGgiLCJfdG9rZW5fdHlwZXMiLCJzdXBlcmNsYXNzIiwiYXNzaWduIiwibWF0aF9hc3NpZ24iLCJsb2dpY19hc3NpZ24iLCJmbl9hc3NpZ24iLCJlb2wiLCJjb21tYSIsImNvbG9uIiwiY29tbWVudCIsIm9wZW5fcGFyZW4iLCJjbG9zZV9wYXJlbiIsIm9wZW5fYnJhY2tldCIsImNsb3NlX2JyYWNrZXQiLCJvcGVuX2N1cmx5IiwiY2xvc2VfY3VybHkiLCJpZF9maWVsZCIsInRoaXMiLCJ0aGlzX2ZpZWxkIiwic3ltYm9sIiwibWF0aCIsImxvZ2ljIiwiY29tcCIsIm51bWJlciIsInN0cmluZyIsImNoYXIiLCJleHRuYW1lIiwicG4iLCJzdGF0U3luYyIsInJlYWRGaWxlU3luYyIsImx4IiwiY29uY2F0IiwiTm9kZSIsInBhcnNlciIsIl9pbl9jbGFzcyIsIl9mbl9sZXZlbCIsInRva2VuX3Byb3AiLCJQYXJzZXIiLCJmcmFtZXMiLCJwcmV2X2ZyYW1lIiwiaW5fY2xhc3MiLCJmbl9sZXZlbCIsImVvcyIsIm1hdGNoZXMiLCJ0b2tlbl9hdCIsImVuZF9uZXh0Iiwic2tpcCIsImV4cGVjdCIsImV4cHIiLCJub2RlIiwic3RhdGVtZW50cyIsIkZyYW1lIiwiRnJhbWVzIiwiRnJhbWVJdGVtIiwiY3VycmVudCIsIml0ZW1fdHlwZSIsImV4aXN0cyIsImlzX2xvY2FsIiwiaXNfZ2xvYmFsIiwiaXRlbXMiLCJfZ2xvYmFsIiwiYmxvY2tfdHlwZSIsImxvb3Bfd2hpbGUiLCJzdGF0ZW1lbnQiLCJ2YXJfc3RhdGVtZW50IiwiYXNzaWduX3N0YXRlbWVudCIsImlmX3N0YXRlbWVudCIsImZvcl9zdGF0ZW1lbnQiLCJ3aGlsZV9zdGF0ZW1lbnQiLCJyZXR1cm5fc3RhdGVtZW50Iiwic2luZ2xlX3N0YXRlbWVudCIsImNsYXNzX3N0YXRlbWVudCIsImlkX3N0YXRlbWVudCIsImZpcnN0Iiwic3VwZXJfZXhwciIsImlkX2V4cHIiLCJmbl9leHByIiwiX2ZuIiwiZXhwcnMiLCJzaW5nbGUiLCJfZXh0ZW5kcyIsImNsYXNzX2xpc3QiLCJleHBlY3RfZW5kIiwiZXhwcl9ibG9jayIsInRydWVfYm9keSIsImZhbHNlX2JvZHkiLCJlbHNlX3N0YXRlbWVudCIsIl9sZXQiLCJtaW5fZXhwciIsIm1heF9leHByIiwic3RlcF9leHByIiwic2ltcGxlX2V4cHIiLCJ0ZXJtIiwidGVybV9leHByIiwiZmFjdG9yIiwiZmFjdG9yX2V4cHIiLCJjb25kaXRpb25hbCIsImNvbmRpdGlvbmFsX2V4cHIiLCJqdW5jdGlvbiIsImp1bmN0aW9uX2V4cHIiLCJuZXh0X2V4cHJfbm9kZSIsInN1Yl9leHByIiwiYXJyYXlfZXhwciIsImRpY3RfZXhwciIsInRoaXNfZXhwciIsIm5ld19leHByIiwiZGVmIiwia2V5X2xpdGVyYWwiLCJmbl9hcmdzX2RlZiIsImZuX2FyZyIsImZpZWxkcyIsIl9maWVsZCIsImluY2x1ZGUiLCJjb25zdCIsInJlc2VydmVkIiwiVHJhbnNwaWxlciIsIm5vZGVfYXQiLCJsaW5lcyIsImluZGVudF9sZXZlbCIsImVuZHNXaXRoIiwicmVwbGFjZSIsImNvZGVfc3RhcnQiLCJ3cml0ZWxuIiwiY29kZV9lbmQiLCJub2RlX3RlbXBsYXRlIiwiZm5fY2FsbF90ZW1wbGF0ZSIsImZuX2Fzc2lnbl90ZW1wbGF0ZSIsImFycmF5X3RlbXBsYXRlIiwiZGljdF90ZW1wbGF0ZSIsIm9wZXJhdG9yX3RlbXBsYXRlIiwidGhpc190ZW1wbGF0ZSIsIm5ld190ZW1wbGF0ZSIsInN0cmluZ190ZW1wbGF0ZSIsImlkX3RlbXBsYXRlIiwidmFsdWVfdGVtcGxhdGUiLCJsbiIsInN0YXRlbWVudF90ZW1wbGF0ZSIsImZuX2NhbGwiLCJ0bXBsIiwiZGF0Iiwid29yZCIsInNlcGFyYXRvciIsIm9wIiwiZXhwcl90ZW1wbGF0ZSIsImZpZWxkIiwiZG90IiwiYmxvY2tfdGVtcGxhdGUiLCJmbl9kZWYiLCJmIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFTQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBbkJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQWdCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTyxLQUFNQSw4QkFBVyxDQUFqQjtBQUNBLEtBQU1DLDhCQUFXLENBQWpCO0FBQ0EsS0FBTUMsNEJBQVUsQ0FBaEI7O0tBRU1DLEksV0FBQUEsSTs7O0FBRVgsaUJBQWFDLE9BQWIsRUFBc0I7QUFBQTs7QUFBQTs7QUFHcEIsV0FBS0MsS0FBTDs7QUFFQSxXQUFLQyxRQUFMLEdBQWdCO0FBQ2RDLGNBQU8sRUFETzs7QUFHZEMsWUFBSyxzQkFBVztBQUNkLGFBQUlDLElBQUlDLEVBQUVDLEdBQUYsQ0FBTVAsT0FBTixFQUFlLFFBQWYsQ0FBUjtBQUNBLGFBQUlLLEtBQUssQ0FBQ0EsRUFBRUcsV0FBWixFQUF5QjtBQUN2QkgsYUFBRUcsV0FBRixHQUFnQixJQUFoQjtBQUNBLGlCQUFLTixRQUFMLENBQWNDLEtBQWQsQ0FBb0JNLElBQXBCLENBQXlCVCxPQUF6QjtBQUNEO0FBQ0YsUUFUYTs7QUFXZFUsZUFBUSxtQkFBSztBQUNYLGVBQUtS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RUFBckIsQ0FBVDtBQUNBLGVBQUltVSxPQUFPdEMsS0FBS3NDLElBQUwsR0FBWSxNQUFaLEdBQXFCLEVBQWhDO0FBQ0EsZUFBSXZDLGFBQUo7QUFDQSxlQUFJOEYsV0FBSjs7QUFFQSxlQUFJN0YsS0FBSzFFLEVBQUwsQ0FBUSxRQUFSLENBQUosRUFBdUI7QUFDckJ1SyxrQkFBSyxNQUFNN0YsS0FBSzFqQixLQUFYLEdBQW1CLEdBQXhCO0FBQ0F5akIsb0JBQU8sS0FBSytGLGFBQUwsQ0FBbUJwYyxFQUFFcVcsSUFBckIsQ0FBUDtBQUNELFlBSEQsTUFJSyxJQUFJQyxLQUFLMUUsRUFBTCxDQUFRLFdBQVIsQ0FBSixFQUEwQjtBQUM3QnVLLGtCQUFLLENBQUM3RixLQUFLZixTQUFOLElBQW1CZSxLQUFLZCxTQUFMLEdBQWlCLENBQXBDLEdBQXdDLEtBQXhDLEdBQWdELEdBQXJEO0FBQ0FhLG9CQUFPLEtBQUttRyxNQUFMLENBQVl4YyxFQUFFN08sSUFBZCxFQUFvQjZPLEVBQUUyRSxJQUF0QixFQUE0QjJSLEtBQUtmLFNBQUwsSUFBa0JlLEtBQUtkLFNBQUwsS0FBbUIsQ0FBakUsQ0FBUDtBQUNEOztBQUVEemtCLGVBQUk7QUFDRmdyQixtQkFBTSwwQkFESjtBQUVGQyxrQkFBSyxFQUFFcEQsVUFBRixFQUFRblUsTUFBUixFQUFZMFgsTUFBWixFQUFnQjlGLFVBQWhCO0FBRkgsWUFBSjtBQUlEO0FBQ0QsZ0JBQU90bEIsQ0FBUDtBQUNEO0FBM0JrQjs7QUFBQTtBQUFBLEtBQTRDdWlCLFVBQTVDO0FBQUEsRUFBTixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU1YWEzNWU2OGFiOTAwMjk5ZmU0IiwiaW1wb3J0ICdwaXhpLmpzJ1xuaW1wb3J0ICd3ZWItYXVkaW8tZGF3J1xuXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gJy4vdXRpbHMuanMnXG5pbXBvcnQgeyBkZWZhdWx0cywgcnVudGltZV9lcnJvciB9IGZyb20gJy4vZ2xvYmFscy5qcydcblxuLy8gaW1wb3J0IGNzcyBmcm9tICcuLi9zdHlsZS9tYWluLmNzcydcbi8vIGltcG9ydCB0IGZyb20gJy4uL2h0bWwvbWFpbi5odG1sJ1xuXG4vLyBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gZWwuaW5uZXJIVE1MID0gdFxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbClcblxuaW1wb3J0IHsgRW1pdHRlciB9IGZyb20gJy4vZW1pdHRlci5qcydcblxuaW1wb3J0IExleGVyIGZyb20gJy4vY29tcGlsZXIvbGV4ZXIuanMnXG5pbXBvcnQgUGFyc2VyIGZyb20gJy4vY29tcGlsZXIvcGFyc2VyLmpzJ1xuaW1wb3J0IFRyYW5zcGlsZXIgZnJvbSAnLi9jb21waWxlci90cmFuc3BpbGVyLmpzJ1xuXG5pbXBvcnQgeyBNZW1vcnkgfSBmcm9tICcuL3ZtL21lbW9yeS5qcydcbmltcG9ydCBNZW1vcnlNYW5hZ2VyIGZyb20gJy4vdm0vbWVtb3J5bWFuYWdlci5qcydcbmltcG9ydCBTdGFjayBmcm9tICcuL3ZtL3N0YWNrLmpzJ1xuaW1wb3J0IEludGVycnVwdCBmcm9tICcuL3ZtL2ludGVycnVwdC5qcydcbmltcG9ydCBHdWlkZW8gZnJvbSAnLi92bS9jaGlwcy9ndWlkZW8uanMnXG5pbXBvcnQgS2VuIGZyb20gJy4vdm0vY2hpcHMva2VuLmpzJ1xuaW1wb3J0IE1pY2tleSBmcm9tICcuL3ZtL2NoaXBzL21pY2tleS5qcydcblxuLy8gaW1wb3J0IHsgVk0gfSBmcm9tICcuL2ludGVycHJldGVyL3ZtLmpzJ1xuXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgbGV0IHNyYyA9IHJlcXVpcmUoJ3JhdyEuLi90ZXN0L3Rlc3QxLngzMicpXG4vLyAgIGNvbnNvbGUubG9nKHNyYylcblxuLy8gICBsZXQgdm0gPSBuZXcgVk0oKVxuLy8gICB2bS5sb2FkKHNyYylcbi8vICAgdm0ucnVuKClcbi8vICAgdm0uZHVtcCgpXG4vLyB9LCAxMDApXG5cbi8vIGNvbnNvbGUubG9nKGhleHkuaGV4eSh2bS5tZW1fYnVmZmVyLCB7IG9mZnNldDogMCwgbGVuZ3RoOiA1MTIsIGRpc3BsYXlfb2Zmc2V0OiAweDAwLCB3aWR0aDogMTYsIGNhcHM6ICd1cHBlcicsIGluZGVudDogMiB9KSlcblxuZXhwb3J0IGNvbnN0IF9TVE9QUEVEID0gMFxuZXhwb3J0IGNvbnN0IF9SVU5OSU5HID0gMVxuZXhwb3J0IGNvbnN0IF9QQVVTRUQgPSAyXG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgRW1pdHRlciB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnJlc2V0KClcblxuICAgIHRoaXMuX3VwZGF0ZXMgPSB7XG4gICAgICBxdWV1ZTogW10sXG5cbiAgICAgIGFkZDogb3B0aW9ucyA9PiB7XG4gICAgICAgIGxldCBvID0gXy5nZXQob3B0aW9ucywgJ29iamVjdCcpXG4gICAgICAgIGlmIChvICYmICFvLl9faW5VcGRhdGVzKSB7XG4gICAgICAgICAgby5fX2luVXBkYXRlcyA9IHRydWVcbiAgICAgICAgICB0aGlzLl91cGRhdGVzLnF1ZXVlLnB1c2gob3B0aW9ucylcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBvID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlcy5xdWV1ZSA9IF8ucmVqZWN0KHRoaXMuX3VwZGF0ZXMucXVldWUsIHsgb2JqZWN0OiBvIH0pXG4gICAgICAgIG8uX19pblVwZGF0ZXMgPSBmYWxzZVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGl0dGxlRW5kaWFuXG4gICAgbGV0IGIgPSBuZXcgQXJyYXlCdWZmZXIoNClcbiAgICBsZXQgYSA9IG5ldyBVaW50MzJBcnJheShiKVxuICAgIGxldCBjID0gbmV3IFVpbnQ4QXJyYXkoYilcbiAgICBhWzBdID0gMHhkZWFkYmVlZlxuICAgIHRoaXMuTEUgPSBjWzBdID09PSAweGVmXG5cbiAgICB0aGlzLl9tZW1vcnkgPSBuZXcgTWVtb3J5KHRoaXMpXG4gICAgdGhpcy5fbWVtb3J5TWFuYWdlciA9IG5ldyBNZW1vcnlNYW5hZ2VyKHRoaXMpXG4gICAgdGhpcy5fc3RhY2sgPSBuZXcgU3RhY2sodGhpcylcbiAgICB0aGlzLl9pbnRlcnJ1cHRzID0gbmV3IEludGVycnVwdCh0aGlzKVxuXG4gICAgdGhpcy5fZ3VpZGVvID0gbmV3IEd1aWRlbyh0aGlzKVxuICAgIHRoaXMuX2tlbiA9IG5ldyBLZW4odGhpcylcbiAgICB0aGlzLl9taWNrZXkgPSBuZXcgTWlja2V5KHRoaXMpXG5cbiAgICB0aGlzLl9vblJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vblJlc2l6ZSlcblxuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIFBJWEkudGlja2VyLnNoYXJlZC5hZGQodCA9PiB7XG4gICAgICBpZiAodGhhdC5zdGF0dXMgPT09IF9SVU5OSU5HKSB7XG4gICAgICAgIHRoYXQudGljayh0KVxuXG4gICAgICAgIGxldCByZW5kZXIgPSBmYWxzZVxuXG4gICAgICAgIGZvciAobGV0IHEgb2YgdGhhdC5fdXBkYXRlcy5xdWV1ZSkge1xuICAgICAgICAgIHEub2JqZWN0Ll9faW5VcGRhdGVzID0gZmFsc2VcbiAgICAgICAgICBpZiAocS5yZW5kZXIpIHtcbiAgICAgICAgICAgIHJlbmRlciA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHEuY2IpIHtcbiAgICAgICAgICAgIHEuY2IocS5vYmplY3QsIC4uLihxLmFyZ3MgfHwgW10pKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoYXQuX3VwZGF0ZXMucXVldWUgPSBbXVxuXG4gICAgICAgIGlmIChyZW5kZXIpIHtcbiAgICAgICAgICB0aGF0Ll9ndWlkZW8ucmVuZGVyZXIucmVuZGVyKHRoYXQuX2d1aWRlby5zdGFnZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBhc3luYyh0aGlzLCB0aGlzLnN0YXJ0LCAxMDApXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9ndWlkZW8uZGVzdHJveSgpXG4gICAgdGhpcy5fa2VuLmRlc3Ryb3koKVxuICAgIHRoaXMuX21pY2tleS5kZXN0cm95KClcbiAgICB0aGlzLl9pbnRlcnJ1cHRzLmRlc3Ryb3koKVxuICAgIHRoaXMuX21lbW9yeU1hbmFnZXIuZGVzdHJveSgpXG4gICAgdGhpcy5fbWVtb3J5LmRlc3Ryb3koKVxuICAgIHN1cGVyLmRlc3Ryb3koKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX3N0YXR1cyA9IDBcbiAgICB0aGlzLl9wcm9ncmFtID0ge1xuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgY29kZTogdW5kZWZpbmVkLFxuICAgICAgZm46IHVuZGVmaW5lZCxcbiAgICB9XG4gIH1cblxuICBkZWZhdWx0IChuYW1lKSB7IHJldHVybiBfLmdldChkZWZhdWx0cywgbmFtZSkgfVxuXG4gIGdldCBzdGF0dXMgKCkgeyByZXR1cm4gdGhpcy5fc3RhdHVzIH1cbiAgc2V0IHN0YXR1cyAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5fc3RhdHVzICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fc3RhdHVzID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICBnZXQgbWVtb3J5ICgpIHsgcmV0dXJuIHRoaXMuX21lbW9yeSB9XG4gIGdldCBtZW1vcnlNYW5hZ2VyICgpIHsgcmV0dXJuIHRoaXMuX21lbW9yeU1hbmFnZXIgfVxuICBnZXQgaW50ZXJydXB0cyAoKSB7IHJldHVybiB0aGlzLl9pbnRlcnJ1cHRzIH1cblxuICBnZXQgdXBkYXRlcyAoKSB7IHJldHVybiB0aGlzLl91cGRhdGVzIH1cblxuICBnZXQgZ3VpZGVvICgpIHsgcmV0dXJuIHRoaXMuX2d1aWRlbyB9XG4gIGdldCBrZXlib2FyZF9jaGlwICgpIHsgcmV0dXJuIHRoaXMuX2tlbiB9XG4gIGdldCBtaWNrZXkgKCkgeyByZXR1cm4gdGhpcy5fbWlja2V5IH1cblxuICBnZXQgc3RhZ2UgKCkgeyByZXR1cm4gdGhpcy5fZ3VpZGVvLl9zdGFnZSB9XG4gIGdldCByZW5kZXJlciAoKSB7IHJldHVybiB0aGlzLl9ndWlkZW8uX3JlbmRlcmVyIH1cblxuICBnZXQgcHJvZ3JhbSAoKSB7IHJldHVybiB0aGlzLl9wcm9ncmFtIH1cblxuICBvblJlc2l6ZSAoKSB7XG4gICAgdGhpcy5fZ3VpZGVvLmVtaXQoJ3Jlc2l6ZScpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGhsdCAoY29kZSkge1xuICAgIGlmIChjb2RlID4gMCkge1xuICAgICAgcnVudGltZV9lcnJvcihjb2RlKVxuICAgIH1cbiAgICB0aGlzLnN0b3AoKVxuICB9XG5cbiAgbG9hZCAocGF0aCkge1xuICAgIGxldCB0ID0gbmV3IExleGVyKClcbiAgICBsZXQgdG9rZW5zID0gdC5ydW4ocGF0aClcbiAgICBjb25zb2xlLmxvZyh0b2tlbnMpXG5cbiAgICBsZXQgcCA9IG5ldyBQYXJzZXIoKVxuICAgIGxldCBub2RlcyA9IHAucnVuKHRva2VucylcbiAgICBjb25zb2xlLmxvZyhub2RlcylcblxuICAgIGlmIChwLmVycm9ycyA9PT0gMCkge1xuICAgICAgbGV0IHQgPSBuZXcgVHJhbnNwaWxlcigpXG4gICAgICBsZXQgY29kZSA9IHQucnVuKG5vZGVzKVxuICAgICAgY29uc29sZS5sb2coY29kZSlcblxuICAgICAgaWYgKHQuZXJyb3JzID09PSAwKSB7XG4gICAgICAgIHRoaXMuX3Byb2dyYW0uY29kZSA9IGNvZGVcbiAgICAgICAgdGhpcy5fcHJvZ3JhbS5wYXRoID0gcGF0aFxuICAgICAgICB0aGlzLl9wcm9ncmFtLmZuID0gbmV3IEZ1bmN0aW9uKFsnYXJncyddLCB0aGlzLl9wcm9ncmFtLmNvZGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcnVuICguLi5hcmdzKSB7XG4gICAgbGV0IGZuID0gXy5nZXQodGhpcywgJ19wcm9ncmFtLmZuJylcbiAgICByZXR1cm4gZm4gPyBmbi5hcHBseSh0aGlzLCBhcmdzKSA6IG51bGxcbiAgfVxuXG4gIHN0YXJ0ICgpIHtcbiAgICB0aGlzLnN0YXR1cyA9IF9SVU5OSU5HXG4gICAgdGhpcy50ZXN0KClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RvcCAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBfU1RPUFBFRFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBfUEFVU0VEXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc3VtZSAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBfUlVOTklOR1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0aWNrICh0aW1lKSB7XG4gICAgdGhpcy5fbWVtb3J5LnRpY2sodGltZSlcbiAgICB0aGlzLl9tZW1vcnlNYW5hZ2VyLnRpY2sodGltZSlcbiAgICB0aGlzLl9rZW4udGljayh0aW1lKVxuICAgIHRoaXMuX21pY2tleS50aWNrKHRpbWUpXG4gICAgdGhpcy5faW50ZXJydXB0cy50aWNrKHRpbWUpXG4gICAgdGhpcy5fZ3VpZGVvLnRpY2sodGltZSlcbiAgfVxuXG4gIHRlc3QgKCkge1xuICB9XG5cbn1cblxuZXhwb3J0IGxldCBtYWluID0gbmV3IE1haW4oKVxud2luZG93LmFwcCA9IG1haW5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9tYWluLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGl4aS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBpeGkuanNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWItYXVkaW8tZGF3XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2ViLWF1ZGlvLWRhd1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGVsZWN0cm9uID0gcmVxdWlyZSgnZWxlY3Ryb24nKVxuY29uc3QgeyByZW1vdGUsIHNjcmVlbiwgZGlhbG9nIH0gPSBlbGVjdHJvblxuY29uc3QgeyBhcHAsIEJyb3dzZXJXaW5kb3cgfSA9IHJlbW90ZVxuXG5jb25zdCBfID0gcmVxdWlyZSgndW5kZXJzY29yZS1wbHVzJylcbl8uZXh0ZW5kKF8sIHJlcXVpcmUoJ2xvZGFzaCcpKVxud2luZG93Ll8gPSBfXG5cbl8udGVtcGxhdGVTZXR0aW5ncy5pbnRlcnBvbGF0ZSA9IC8jeyhbXFxzXFxTXSs/KX0vZ1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzLXByb21pc2UnKVxuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHJhZiBmcm9tICdyYWYnXG5pbXBvcnQgcGVyZm9ybWFuY2UgZnJvbSAncGVyZm9ybWFuY2Utbm93J1xuXG5pbXBvcnQgeyBNaXhpbiwgbWl4IH0gZnJvbSAnbWl4d2l0aCdcbndpbmRvdy5NaXhpbiA9IE1peGluXG53aW5kb3cubWl4ID0gbWl4XG5cbmxldCB1c2VyUGF0aCA9IHBhdGguam9pbihhcHAuZ2V0QXBwUGF0aCgpLCAnL3VzZXInKVxuaWYgKCFmcy5leGlzdHNTeW5jKHVzZXJQYXRoKSkge1xuICBmcy5ta2RpcnModXNlclBhdGgpXG59XG5cbmxldCBJU19XSU4gPSAvXndpbi8udGVzdChwcm9jZXNzLnBsYXRmb3JtKVxubGV0IElTX09TWCA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nXG5sZXQgSVNfTElOVVggPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnbGludXgnXG5sZXQgZGlycyA9IHtcbiAgYnVpbGQ6IF9fZGlybmFtZSxcbiAgY3dkOiBhcHAuZ2V0QXBwUGF0aCgpLFxuICBob21lOiBhcHAuZ2V0UGF0aCgnaG9tZScpLFxuICBhcHA6IGFwcC5nZXRQYXRoKCdhcHBEYXRhJyksXG4gIHVzZXI6IHVzZXJQYXRoLFxuICB0bXA6IGFwcC5nZXRQYXRoKCd0ZW1wJyksXG4gIHJvb3Q6IGFwcC5nZXRQYXRoKCdleGUnKSxcbiAgbm9kZV9tb2R1bGVzOiBwYXRoLmpvaW4odXNlclBhdGgsICdub2RlX21vZHVsZXMnKSxcbiAgdXNlcl9wa2c6IHBhdGguam9pbih1c2VyUGF0aCwgJ3BhY2thZ2UuanNvbicpLFxufVxuXG5sZXQgbmFtZSA9IGFwcC5nZXROYW1lKClcbmxldCB2ZXJzaW9uID0gYXBwLmdldFZlcnNpb24oKVxuXG5sZXQgb3BlbkZpbGUgPSAoLi4uYXJncykgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBkaWFsb2cuc2hvd09wZW5EaWFsb2cuYXBwbHkoZGlhbG9nLCBhcmdzKVxuICB9XG4gIGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5sZXQgc2F2ZUZpbGUgPSAoLi4uYXJncykgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBkaWFsb2cuc2hvd1NhdmVEaWFsb2cuYXBwbHkoZGlhbG9nLCBhcmdzKVxuICB9XG4gIGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5sZXQgbWVzc2FnZUJveCA9ICguLi5hcmdzKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRpYWxvZy5zaG93TWVzc2FnZUJveC5hcHBseShkaWFsb2csIGFyZ3MpXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmxldCBtYXBfZ2V0dGVycyA9IChzb3VyY2UsIHRhcmdldCwgZGVmcykgPT4ge1xuICBmb3IgKGxldCBrIGluIGRlZnMpIHtcbiAgICBsZXQgZm4gPSBkZWZzW2tdXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNvdXJjZSwgaywge1xuICAgICAgZ2V0OiAoKSA9PiBmbi5jYWxsKHRhcmdldCwgc291cmNlKSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgfSlcbiAgfVxufVxuXG5sZXQgbWFwX2dldHRlcnNfcmV0dXJuX3RoaXMgPSAoc291cmNlLCB0YXJnZXQsIGRlZnMpID0+IHtcbiAgZm9yIChsZXQgayBpbiBkZWZzKSB7XG4gICAgbGV0IGZuID0gZGVmc1trXVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzb3VyY2UsIGssIHtcbiAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICBmbi5jYWxsKHRhcmdldCwgc291cmNlKVxuICAgICAgICByZXR1cm4gc291cmNlXG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9KVxuICB9XG59XG5cbmxldCBub3cgPSAoKSA9PiBwZXJmb3JtYW5jZS5ub3coKVxuXG5sZXQgZGVsYXkgPSBtcyA9PiB7XG4gIC8vIHNldFRpbWVvdXQoKCkgPT4ge30sIG1zKVxuICBsZXQgdCA9IHBlcmZvcm1hbmNlLm5vdygpXG4gIGxldCBjID0gdFxuICB3aGlsZSAoYyAtIHQgPD0gbXMpIHtcbiAgICAvLyBQSVhJLnRpY2tlci5zaGFyZWQudXBkYXRlKGMpXG4gICAgYyA9IHBlcmZvcm1hbmNlLm5vdygpXG4gIH1cbn1cblxubGV0IGFzeW5jID0gKGNvbnRleHQsIGZuLCBhcmdzLCBkZWxheSkgPT4ge1xuICBpZiAoXy5pc051bWJlcihhcmdzKSkge1xuICAgIGRlbGF5ID0gYXJnc1xuICAgIGFyZ3MgPSBbXVxuICB9XG4gIGlmICghXy5pc0FycmF5KGFyZ3MpKSB7XG4gICAgYXJncyA9IFthcmdzXVxuICB9XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGZuLmNhbGwoY29udGV4dCwgLi4uYXJncylcbiAgfSwgZGVsYXkgfHwgMSlcbn1cblxubGV0IGJ1ZmZlcl90b19zdHJpbmcgPSBiID0+IHtcbiAgbGV0IGxlbiA9IGIubGVuZ3RoXG4gIGxldCBpID0gMFxuICBsZXQgcyA9ICcnXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcyArPSBiW2krK10udG9TdHJpbmcoMTYpXG4gIH1cbiAgcmV0dXJuIHNcbn1cblxubGV0IHN0cmluZ190b19idWZmZXIgPSBzdHIgPT4ge1xuICBsZXQgbGVuID0gc3RyLmxlbmd0aFxuICBsZXQgaSA9IDBcbiAgbGV0IGIgPSBuZXcgQnVmZmVyKE1hdGgudHJ1bmMoc3RyLmxlbmd0aCAvIDIpKVxuICBsZXQgeCA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBsZXQgaGV4ID0gc3RyLnN1YnN0cihpLCAyKVxuICAgIGJbeCsrXSA9IHBhcnNlSW50KGhleCwgMTYpXG4gICAgaSArPSAyXG4gIH1cbiAgcmV0dXJuIGJcbn1cblxubGV0IHN0cmluZ19idWZmZXIgPSAoc3RyLCBsZW4gPSAwKSA9PiB7XG4gIGxlbiA9IGxlbiB8fCBzdHIubGVuZ3RoXG4gIHZhciBiID0gbmV3IEJ1ZmZlcihsZW4pXG4gIGIud3JpdGUoc3RyLCAwLCBzdHIubGVuZ3RoLCAnYXNjaWknKVxuICByZXR1cm4gYlxufVxuXG5sZXQgbm9ybWFsaXplTWVzc2FnZXMgPSAoLi4ubWVzc2FnZSkgPT4ge1xuICBsZXQgYXJncyA9IFtdXG4gIGZvciAobGV0IG0gb2YgbWVzc2FnZSkge1xuICAgIGlmIChfLmlzQXJyYXkobSkpIHtcbiAgICAgIGFyZ3MucHVzaChtLmpvaW4oJywgJykpXG4gICAgfVxuICAgIGVsc2UgaWYgKF8uaXNTdHJpbmcobSkpIHtcbiAgICAgIGFyZ3MucHVzaChtKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJnc1xufVxuXG5sZXQgaGV4ID0gKHZhbHVlLCBzaXplID0gMzIpID0+ICckJyArIF8ucGFkU3RhcnQodmFsdWUudG9TdHJpbmcoMTYpLCBNYXRoLnRydW5jKHNpemUgLyA0KSwgJzAnKVxuXG5sZXQgYnVmZmVyX2R1bXAgPSAoYnVmZmVyLCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCAxNlxuICBsZXQgY2FwcyA9IG9wdGlvbnMuY2FwcyB8fCAndXBwZXInXG4gIGxldCBpbmRlbnQgPSBfLnJlcGVhdCgnICcsIG9wdGlvbnMuaW5kZW50IHx8IDApXG5cbiAgbGV0IHplcm8gPSAobiwgbWF4KSA9PiB7XG4gICAgbiA9IG4udG9TdHJpbmcoMTYpXG4gICAgaWYgKGNhcHMgPT09ICd1cHBlcicpIHsgbiA9IG4udG9VcHBlckNhc2UoKSB9XG4gICAgd2hpbGUgKG4ubGVuZ3RoIDwgbWF4KSB7XG4gICAgICBuID0gJzAnICsgblxuICAgIH1cbiAgICByZXR1cm4gblxuICB9XG5cbiAgbGV0IGxlbiA9IE1hdGgubWluKGJ1ZmZlci5ieXRlTGVuZ3RoLCBvcHRpb25zLmxlbmd0aCB8fCBidWZmZXIuYnl0ZUxlbmd0aClcbiAgbGV0IHJvd3MgPSBNYXRoLmNlaWwobGVuIC8gd2lkdGgpXG4gIGxldCBsYXN0ID0gbGVuICUgd2lkdGggfHwgd2lkdGhcbiAgbGV0IG9mZnNldExlbmd0aCA9IGxlbi50b1N0cmluZygxNikubGVuZ3RoXG4gIGlmIChvZmZzZXRMZW5ndGggPCA2KSB7IG9mZnNldExlbmd0aCA9IDYgfVxuXG4gIGxldCBhcnIgPSBuZXcgVWludDhBcnJheShidWZmZXIpXG5cbiAgbGV0IHN0ciA9IGluZGVudCArICdPZmZzZXQnXG4gIHdoaWxlIChzdHIubGVuZ3RoIDwgb2Zmc2V0TGVuZ3RoKSB7XG4gICAgc3RyICs9ICcgJ1xuICB9XG5cbiAgc3RyICs9ICcgICdcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICBzdHIgKz0gJyAnICsgemVybyhpLCAyKVxuICB9XG5cbiAgaWYgKGxlbikge1xuICAgIHN0ciArPSAnXFxuJ1xuICB9XG5cbiAgbGV0IGIgPSAwXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICBzdHIgKz0gaW5kZW50ICsgemVybyhiLCBvZmZzZXRMZW5ndGgpICsgJyAgJ1xuICAgIGxldCBsYXN0Qnl0ZXMgPSBpID09PSByb3dzIC0gMSA/IGxhc3QgOiB3aWR0aFxuICAgIGxldCBsYXN0U3BhY2VzID0gd2lkdGggLSBsYXN0Qnl0ZXNcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGFzdEJ5dGVzOyBqKyspIHtcbiAgICAgIHN0ciArPSAnICcgKyB6ZXJvKGFycltiXSwgMilcbiAgICAgIGIrK1xuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGFzdFNwYWNlczsgaisrKSB7XG4gICAgICBzdHIgKz0gJyAgICdcbiAgICB9XG5cbiAgICBiIC09IGxhc3RCeXRlc1xuICAgIHN0ciArPSAnICAgJ1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsYXN0Qnl0ZXM7IGorKykge1xuICAgICAgbGV0IHYgPSBhcnJbYl1cbiAgICAgIHN0ciArPSB2ID4gMzEgJiYgdiA8IDEyNyB8fCB2ID4gMTU5ID8gU3RyaW5nLmZyb21DaGFyQ29kZSh2KSA6ICcuJ1xuICAgICAgYisrXG4gICAgfVxuXG4gICAgc3RyICs9ICdcXG4nXG4gIH1cblxuICByZXR1cm4gc3RyXG59XG5cbmxldCB1dG9hID0gc3RyID0+IHdpbmRvdy5idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKSlcblxubGV0IGF0b3UgPSBzdHIgPT4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSh3aW5kb3cuYXRvYihzdHIpKSlcblxud2luZG93LnV0b2EgPSB1dG9hXG53aW5kb3cuYXRvdSA9IGF0b3VcblxuXG5sZXQgaW5zdGFuY2VGdW5jdGlvbiA9ICh0YXJnZXQsIG5hbWUsIGZuLCBmb3JjZSA9IGZhbHNlKSA9PiB7XG4gIGlmIChmb3JjZSB8fCAhdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xuICAgICAgdmFsdWU6IGZuLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSlcbiAgfVxufVxuXG5sZXQgaW5zdGFuY2VGdW5jdGlvbnMgPSAodGFyZ2V0LCBzb3VyY2UsIG5hbWVzKSA9PiB7XG4gIGZvciAobGV0IG4gb2YgbmFtZXMpIHtcbiAgICBpZiAoXy5pc0FycmF5KG4pKSB7XG4gICAgICBpbnN0YW5jZUZ1bmN0aW9uKHRhcmdldCwgblswXSwgc291cmNlW25bMV1dKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGluc3RhbmNlRnVuY3Rpb24odGFyZ2V0LCBuLCBzb3VyY2Vbbl0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIF8sXG4gIG5hbWUsXG4gIHZlcnNpb24sXG4gIGVsZWN0cm9uLFxuICBkaWFsb2csXG4gIG9wZW5GaWxlLFxuICBzYXZlRmlsZSxcbiAgbWVzc2FnZUJveCxcbiAgcmVtb3RlLFxuICBzY3JlZW4sXG4gIEJyb3dzZXJXaW5kb3csXG4gIGFwcCxcbiAgZnMsXG4gIHBhdGgsXG4gIHVzZXJQYXRoLFxuICBJU19XSU4sXG4gIElTX09TWCxcbiAgSVNfTElOVVgsXG4gIGRpcnMsXG4gIHJhZixcbiAgbm93LFxuICBNaXhpbixcbiAgbWl4LFxuICBtYXBfZ2V0dGVycyxcbiAgbWFwX2dldHRlcnNfcmV0dXJuX3RoaXMsXG4gIGRlbGF5LFxuICBhc3luYyxcbiAgYnVmZmVyX3RvX3N0cmluZyxcbiAgc3RyaW5nX3RvX2J1ZmZlcixcbiAgc3RyaW5nX2J1ZmZlcixcbiAgbm9ybWFsaXplTWVzc2FnZXMsXG4gIGhleCxcbiAgYnVmZmVyX2R1bXAsXG4gIHV0b2EsXG4gIGF0b3UsXG4gIGluc3RhbmNlRnVuY3Rpb24sXG4gIGluc3RhbmNlRnVuY3Rpb25zLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3V0aWxzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYWZcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyYWZcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZXJmb3JtYW5jZS1ub3dcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwZXJmb3JtYW5jZS1ub3dcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtaXh3aXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWl4d2l0aFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZWxlY3Ryb25cIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlLXBsdXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlLXBsdXNcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtcHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzLXByb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiUElYSS5Qb2ludC5wcm90b3R5cGUuZGlzdGFuY2UgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoKHRoaXMueCAtIHRhcmdldC54KSAqICh0aGlzLnggLSB0YXJnZXQueCkgKyAodGhpcy55IC0gdGFyZ2V0LnkpICogKHRoaXMueSAtIHRhcmdldC55KSlcbn1cblxuUElYSS5Qb2ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfLnRlbXBsYXRlKCcoI3t4fSwgI3t5fSknKSh0aGlzKVxufVxuXG5QSVhJLlJlY3RhbmdsZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfLnRlbXBsYXRlKCcoI3t4fSwgI3t5fSwgI3t4ICsgd2lkdGh9LCAje3kgKyBoZWlnaHR9KSgje3dpZHRofSwgI3toZWlnaHR9KScpKHRoaXMpXG59XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBib3VuZHNjaGVjazogZmFsc2UsXG5cbiAgdHlwZTogJ2kzMicsXG5cbiAgbWVtb3J5OiB7XG4gICAgc2l6ZTogNTEyICogMTAyNCxcbiAgfSxcblxuICBtZW1vcnlfbWFuYWdlcjoge1xuICAgIGNvbGxlY3RfZGVsYXk6IDMwICogMTAwMCxcbiAgfSxcblxuICBndWlkZW86IHtcbiAgICB3aWR0aDogMzIwLFxuICAgIGhlaWdodDogMjQwLFxuICAgIHNjYWxlOiA0LFxuICB9LFxuXG4gIHJhaW5ib3c6IHtcbiAgICBjb3VudDogMTYsXG4gIH0sXG5cbiAgZm9uem86IHtcbiAgICBjb3VudDogMjU1LFxuICAgIHdpZHRoOiA0LFxuICAgIGhlaWdodDogNixcbiAgfSxcblxuICBvcndlbGw6IHtcbiAgICB3aWR0aDogMzIwIC8gNCxcbiAgICBoZWlnaHQ6IDI0MCAvIDYsXG4gIH0sXG5cbiAgYmVhZ2xlOiB7XG4gICAgd2lkdGg6IDQsXG4gICAgaGVpZ2h0OiA2LFxuICAgIGNvbG9yOiAxNSxcbiAgICBibGlua3JhdGU6IDUwMCxcbiAgfSxcblxuICB2aW9sZXQ6IHtcbiAgICBjb3VudDogMzIsXG4gICAgd2lkdGg6IDE2LFxuICAgIGhlaWdodDogMTYsXG4gIH0sXG5cbiAga2VuOiB7XG4gICAgY291bnQ6IDI1NSxcbiAgfSxcblxuICBtaWNrZXk6IHtcbiAgICBjb3VudDogMjU1LFxuICAgIGRibENsaWNrRGVsYXk6IDI1MCxcbiAgICBkYmxDbGlja0Rpc3RhbmNlOiA4LFxuICB9LFxuXG4gIG5ldHdvcms6IHtcbiAgICBzaXplOiAzMiAqIDEwMjQsXG4gIH0sXG5cbiAgYWx0bzoge1xuICAgIHNpemU6IDQgKiAxMDI0LFxuICB9LFxufVxuXG5sZXQgZXJyb3JzID0gMFxuXG5sZXQgZXJyb3IgPSAodCwgbXNnKSA9PiB7XG4gIGRlYnVnZ2VyXG4gIGVycm9ycysrXG4gIGNvbnNvbGUuZXJyb3IobXNnLCAnYXQnLCB0LnZhbHVlLCAnKCcgKyB0LnJvdyArICcsJyArIHQuY29sICsgJyknKVxufVxuXG5sZXQgcnVudGltZV9lcnJvciA9IGNvZGUgPT4ge1xuICBsZXQgZSA9ICdVbmtub3duIHJ1bnRpbWUgZXJyb3InXG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgMHgwMTpcbiAgICAgIGUgPSAnT3V0IG9mIG1lbW9yeSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDAyOlxuICAgICAgZSA9ICdTdGFjayB1bmRlcmZsb3cnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwMzpcbiAgICAgIGUgPSAnU3RhY2sgb3ZlcmZsb3cnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNDpcbiAgICAgIGUgPSAnSW52YWxpZCBzdGFjayBhZGRyZXNzJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDU6XG4gICAgICBlID0gJ1N0YWNrIGFkZHJlc3MgYWxyZWFkeSBhc3NpZ25lZCdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA2OlxuICAgICAgZSA9ICdJbnRlcnJ1cHQgYWxyZWFkeSBleGlzdHMnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNzpcbiAgICAgIGUgPSAnSW50ZXJydXB0IG5vdCBmb3VuZCdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA4OlxuICAgICAgZSA9ICdBZGRyZXNzIG91dCBvZiBib3VuZHMnXG4gICAgICBicmVha1xuICB9XG4gIGNvbnNvbGUuZXJyb3IoZSlcbn1cblxubGV0IGlvX2Vycm9yID0gY29kZSA9PiB7XG4gIGxldCBlID0gJ0kvTyBydW50aW1lIGVycm9yJ1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIDB4MDE6XG4gICAgICBlID0gJ0ZpbGUgbm90IGZvdW5kJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDI6XG4gICAgICBlID0gJ0Nhbm5vdCBvcGVuIGZpbGUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwMzpcbiAgICAgIGUgPSAnQ2Fubm90IGNsb3NlIGZpbGUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNDpcbiAgICAgIGUgPSAnQ2Fubm90IGxvY2sgZmlsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA1OlxuICAgICAgZSA9ICdDYW5ub3QgdW5sb2NrIGZpbGUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNjpcbiAgICAgIGUgPSAnSW52YWxpZCBmaWxlIGlkJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDc6XG4gICAgICBlID0gJ0EgZmxvcHB5IGlzIGFscmVhZHkgaW4gdGhlIGRyaXZlJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDg6XG4gICAgICBlID0gJ05vIGZsb3BweSBpbiBkcml2ZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA5OlxuICAgICAgZSA9ICdDYW5ub3QgZGVsZXRlIGZpbGUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgxMDpcbiAgICAgIGUgPSAnRHJpdmUgaXMgbm90IHNwaW5uaW5nJ1xuICAgICAgYnJlYWtcbiAgfVxuICBjb25zb2xlLmVycm9yKGUpXG59XG5cblxuZXhwb3J0IHtcbiAgZGVmYXVsdHMsXG4gIGVycm9ycyxcbiAgZXJyb3IsXG4gIHJ1bnRpbWVfZXJyb3IsXG4gIGlvX2Vycm9yLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2dsb2JhbHMuanMiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBjbGFzcyBFdmVudCB7XG5cbiAgY29uc3RydWN0b3IgKHRhcmdldCwgbmFtZSwgZGF0YSwgYnViYmxlcyA9IHRydWUpIHtcbiAgICB0aGlzLl9fZXZlbnRPYmplY3QgPSB0cnVlXG4gICAgdGhpcy50aW1lU3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKVxuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0XG4gICAgdGhpcy50eXBlID0gbmFtZVxuICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICB0aGlzLmJ1YmJsZXMgPSBidWJibGVzXG4gICAgdGhpcy5zdG9wcGVkID0gZmFsc2VcbiAgICB0aGlzLnN0b3BwZWRJbW1lZGlhdGUgPSBmYWxzZVxuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlXG4gIH1cblxuICBzdG9wICgpIHtcbiAgICB0aGlzLnN0b3BwZWQgPSB0cnVlXG4gIH1cblxuICBzdG9wSW1tZWRpYXRlICgpIHtcbiAgICB0aGlzLnN0b3BwZWRJbW1lZGlhdGUgPSB0cnVlXG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24gKCkge1xuICAgIHRoaXMuc3RvcHBlZCA9IHRydWVcbiAgfVxuXG4gIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAoKSB7XG4gICAgdGhpcy5zdG9wcGVkSW1tZWRpYXRlID0gdHJ1ZVxuICB9XG5cbiAgY2FuY2VsQnViYmxlICgpIHtcbiAgICB0aGlzLmJ1YmJsZXMgPSBmYWxzZVxuICB9XG5cbiAgcHJldmVudERlZmF1bHQgKCkge1xuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWVcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBFbWl0dGVyIHtcblxuICBvbiAobmFtZSwgZm4sIG9yZGVyID0gMCkge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fVxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSA9IHRoaXMuX2xpc3RlbmVyc1tuYW1lXSB8fCBbXVxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXS5wdXNoKHsgZm4sIG9yZGVyIH0pXG4gICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdID0gXy5zb3J0QnkodGhpcy5fbGlzdGVuZXJzW25hbWVdLCAnb3JkZXInKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBvbmNlIChuYW1lLCBmbikge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fVxuXG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgbGV0IG9uY2VIYW5kbGVyV3JhcHBlciA9ICgpID0+IHtcbiAgICAgIGZuLmFwcGx5KHRoYXQub2ZmKG5hbWUsIG9uY2VIYW5kbGVyV3JhcHBlciksIGFyZ3VtZW50cylcbiAgICB9XG4gICAgb25jZUhhbmRsZXJXcmFwcGVyLl9vcmlnaW5hbEhhbmRsZXIgPSBmblxuXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgb25jZUhhbmRsZXJXcmFwcGVyKVxuICB9XG5cbiAgb2ZmIChuYW1lLCBmbikge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fVxuXG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgbGV0IGxpc3QgPSB0aGlzLl9saXN0ZW5lcnNbbmFtZV1cbiAgICBsZXQgaSA9IGZuID8gbGlzdC5sZW5ndGggOiAwXG5cbiAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgaWYgKGxpc3RbaV0uZm4gPT09IGZuIHx8IGxpc3RbaV0uX29yaWdpbmFsSGFuZGxlciA9PT0gZm4pIHtcbiAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXy5pc0VtcHR5KGxpc3QpKSB7XG4gICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW25hbWVdXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGVtaXQgKG5hbWUsIGRhdGEpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cblxuICAgIGxldCBvcmlnRXZlbnREYXRhXG5cbiAgICBpZiAoIWRhdGEgfHwgZGF0YS5fX2V2ZW50T2JqZWN0ICE9PSB0cnVlKSB7XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLmRhdGEgJiYgZGF0YS50eXBlKSB7XG4gICAgICAgIG9yaWdFdmVudERhdGEgPSBkYXRhXG4gICAgICAgIGRhdGEgPSBkYXRhLmRhdGFcbiAgICAgIH1cbiAgICAgIGRhdGEgPSBuZXcgRXZlbnQodGhpcywgbmFtZSwgZGF0YSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICBsZXQgbGlzdGVuZXJzID0gXy5jbG9uZSh0aGlzLl9saXN0ZW5lcnNbbmFtZV0pXG4gICAgICBmb3IgKGxldCBsIG9mIGxpc3RlbmVycykge1xuICAgICAgICBsLmZuLmNhbGwodGhpcywgZGF0YSlcbiAgICAgICAgaWYgKGRhdGEuc3RvcHBlZEltbWVkaWF0ZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkYXRhLnN0b3BwZWQpIHtcbiAgICAgICAgaWYgKG9yaWdFdmVudERhdGEpIHtcbiAgICAgICAgICBvcmlnRXZlbnREYXRhLnN0b3BwZWQgPSB0cnVlXG4gICAgICAgICAgZGF0YS5jYW5jZWxCdWJibGUoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuYnViYmxlcyAmJiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5lbWl0KSB7XG4gICAgICB0aGlzLnBhcmVudC5lbWl0KG5hbWUsIGRhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZFxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9lbWl0dGVyLmpzIiwiaW1wb3J0IGhleHkgZnJvbSAnaGV4eSdcbmltcG9ydCB7IGhleCB9IGZyb20gJy4uL2dsb2JhbHMuanMnXG5cbmV4cG9ydCBjb25zdCBkYXRhX3R5cGVfc2l6ZXMgPSB7XG4gIGk4OiAxLFxuICBzODogMSxcbiAgaTE2OiAyLFxuICBzMTY6IDIsXG4gIGkzMjogNCxcbiAgczMyOiA0LFxuICBmMzI6IDQsXG4gIHN0cjogNjQsXG59XG5cbmV4cG9ydCBjb25zdCBkYXRhX3R5cGVfZm5zID0ge1xuICBpODogJ1VpbnQ4JyxcbiAgczg6ICdJbnQ4JyxcbiAgaTE2OiAnVWludDE2JyxcbiAgczE2OiAnSW50MTYnLFxuICBpMzI6ICdVaW50MzInLFxuICBzMzI6ICdJbnQzMicsXG4gIGYzMjogJ0Zsb2F0MzInLFxufVxuXG5leHBvcnQgdmFyIGRhdGFfdHlwZV9zaXplID0gdHlwZSA9PiBfLmlzTnVtYmVyKHR5cGUpID8gdHlwZSA6IGRhdGFfdHlwZV9zaXplc1t0eXBlXVxuXG5leHBvcnQgY2xhc3MgTWVtb3J5IHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHRoaXMuX3NpemUgPSBtYWluLmRlZmF1bHQoJ21lbW9yeS5zaXplJylcbiAgICB0aGlzLl90b3AgPSAwXG4gICAgdGhpcy5fYm90dG9tID0gdGhpcy5fdG9wICsgdGhpcy5fc2l6ZSAtIDFcblxuICAgIHRoaXMuX2J1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0aGlzLl9zaXplKVxuXG4gICAgdGhpcy5fZGF0YSA9IG5ldyBVaW50OEFycmF5KHRoaXMuX2J1ZmZlcilcblxuICAgIHRoaXMuX3ZpZXcgPSBuZXcgRGF0YVZpZXcodGhpcy5fYnVmZmVyKVxuXG4gICAgdGhpcy5fZm5zID0ge1xuICAgICAgaTg6ICdVaW50OCcsXG4gICAgICBzODogJ0ludDgnLFxuICAgICAgaTE2OiAnVWludDE2JyxcbiAgICAgIHMxNjogJ0ludDE2JyxcbiAgICAgIGkzMjogJ1VpbnQzMicsXG4gICAgICBzMzI6ICdJbnQzMicsXG4gICAgICBmMzI6ICdGbG9hdDMyJyxcbiAgICB9XG4gIH1cblxuICB0aWNrICh0KSB7XG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXIoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fdmlldyA9IG51bGxcbiAgICB0aGlzLl9kYXRhID0gbnVsbFxuICAgIHRoaXMuX2J1ZmZlciA9IG51bGxcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuXG4gIGdldCBidWZmZXIgKCkgeyByZXR1cm4gdGhpcy5fYnVmZmVyIH1cbiAgZ2V0IGRhdGEgKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9XG4gIGdldCB2aWV3ICgpIHsgcmV0dXJuIHRoaXMuX3ZpZXcgfVxuICBnZXQgdG9wICgpIHsgcmV0dXJuIHRoaXMuX3RvcCB9XG4gIGdldCBib3R0b20gKCkgeyByZXR1cm4gdGhpcy5fYm90dG9tIH1cbiAgZ2V0IHNpemUgKCkgeyByZXR1cm4gdGhpcy5fc2l6ZSB9XG5cbiAgY2xlYXIgKGQgPSAwKSB7XG4gICAgdGhpcy5maWxsKDAsIHRoaXMuX3RvcCwgdGhpcy5fc2l6ZSlcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgY2hrX2JvdW5kcyAoYWRkciwgc3ogPSA0KSB7XG4gICAgaWYgKGFkZHIgPCB0aGlzLl90b3AgfHwgYWRkciArIHN6ID4gdGhpcy5fYm90dG9tKSB7XG4gICAgICB0aGlzLmhsdCgweDA4KVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICBkYiAodHlwZSwgYWRkciwgLi4uYXJncykge1xuICAgIGxldCBzeiA9IGRhdGFfdHlwZV9zaXplc1t0eXBlXVxuICAgIGxldCBmbiA9IHRoaXMuX3ZpZXdbJ3NldCcgKyB0aGlzLl9mbnNbdHlwZV1dXG4gICAgZm9yIChsZXQgYSBvZiBhcmdzKSB7XG4gICAgICBmbi5jYWxsKHRoaXMuX3ZpZXcsIGFkZHIsIGEpXG4gICAgICBhZGRyICs9IHN6XG4gICAgfVxuICAgIHJldHVybiBhZGRyXG4gIH1cblxuICBkYl9iYyAodHlwZSwgYWRkciwgLi4uYXJncykge1xuICAgIHRoaXMuY2hrX2JvdW5kcyhhZGRyLCBhcmdzLmxlbmd0aCAqIGRhdGFfdHlwZV9zaXplc1t0eXBlXSlcbiAgICB0aGlzLmRiKHR5cGUsIGFkZHIsIC4uLmFyZ3MpXG4gIH1cblxuICBsZCAodHlwZSwgYWRkcikgeyByZXR1cm4gdGhpcy5fdmlld1snZ2V0JyArIHRoaXMuX2Zuc1t0eXBlXV0oYWRkciwgX3ZtLmxpdHRsZUVuZGlhbikgfVxuXG4gIGxkYiAoYWRkcikgeyByZXR1cm4gdGhpcy5sZCgnaTgnLCBhZGRyKSB9XG5cbiAgbGR3IChhZGRyKSB7IHJldHVybiB0aGlzLmxkKCdpMTYnLCBhZGRyKSB9XG5cbiAgbGRkIChhZGRyKSB7IHJldHVybiB0aGlzLmxkKCdpMzInLCBhZGRyKSB9XG5cbiAgbGRmIChhZGRyKSB7IHJldHVybiB0aGlzLmxkKCdmMzInLCBhZGRyKSB9XG5cbiAgbGRfYmMgKHR5cGUsIGFkZHIpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgZGF0YV90eXBlX3NpemVzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzLmxkKHR5cGUsIGFkZHIpXG4gIH1cblxuICBzdCAodHlwZSwgYWRkciwgdmFsdWUpIHsgdGhpcy5fdmlld1snc2V0JyArIHRoaXMuX2Zuc1t0eXBlXV0oYWRkciwgdmFsdWUsIF92bS5saXR0bGVFbmRpYW4pIH1cblxuICBzdGIgKGFkZHIsIHZhbHVlKSB7IHRoaXMuc3QoJ2k4JywgYWRkciwgdmFsdWUpIH1cblxuICBzdHcgKGFkZHIsIHZhbHVlKSB7IHRoaXMuc3QoJ2kxNicsIGFkZHIsIHZhbHVlKSB9XG5cbiAgc3RkIChhZGRyLCB2YWx1ZSkgeyB0aGlzLnN0KCdpMzInLCBhZGRyLCB2YWx1ZSkgfVxuXG4gIHN0ZiAoYWRkciwgdmFsdWUpIHsgdGhpcy5zdCgnZjMyJywgYWRkciwgdmFsdWUpIH1cblxuICBzdF9iYyAodHlwZSwgYWRkciwgdmFsdWUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgZGF0YV90eXBlX3NpemVzW3R5cGVdKVxuICAgIHRoaXMuc3QodHlwZSwgYWRkciwgdmFsdWUpXG4gIH1cblxuICBsZGwgKGFkZHIsIHNpemUpIHsgcmV0dXJuIHRoaXMuX2RhdGEuc2xpY2UoYWRkciwgYWRkciArIHNpemUgLSAxKSB9XG5cbiAgbGRsX2JjIChhZGRyLCBzaXplKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKGFkZHIsIHNpemUpXG4gICAgcmV0dXJuIHRoaXMubGRsKGFkZHIsIHNpemUpXG4gIH1cblxuICBsZHMgKGFkZHIsIHNpemUpIHtcbiAgICBpZiAoXy5pc1N0cmluZyhhZGRyKSkgeyAgLy8gYXNzZW1ibGVyIHdpbGwgdXNlIGxkcyhcIlwiKVxuICAgICAgcmV0dXJuIGFkZHJcbiAgICB9XG5cbiAgICBsZXQgcyA9ICcnXG4gICAgc2l6ZSA9IHNpemUgfHwgZGF0YV90eXBlX3NpemVzLnN0clxuICAgIGxldCBib3R0b20gPSBNYXRoLm1pbihhZGRyICsgc2l6ZSAtIDEsIHRoaXMuX2JvdHRvbSlcbiAgICBsZXQgbWVtID0gdGhpcy5fZGF0YVxuICAgIHdoaWxlIChhZGRyIDw9IGJvdHRvbSkge1xuICAgICAgbGV0IGMgPSBtZW1bYWRkcisrXVxuICAgICAgaWYgKGMgPT09IDApIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYylcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNcbiAgfVxuXG4gIGxkc19iYyAoYWRkciwgc2l6ZSkge1xuICAgIHRoaXMuY2hrX2JvdW5kcyhhZGRyLCBNYXRoLm1pbihzaXplIHx8IDAsIGRhdGFfdHlwZV9zaXplcy5zdHIpKVxuICAgIHJldHVybiB0aGlzLmxkcyhhZGRyLCBzaXplKVxuICB9XG5cbiAgc3RsIChhZGRyLCB2YWx1ZSwgc2l6ZSkgeyB0aGlzLl9kYXRhLnNldCh2YWx1ZS5zdWJhcnJheSgwLCBzaXplIHx8IHZhbHVlLmJ5dGVMZW5ndGgpLCBhZGRyKSB9XG5cbiAgc3RsX2JjIChhZGRyLCB2YWx1ZSwgc2l6ZSkge1xuICAgIHRoaXMuY2hrX2JvdW5kcyhhZGRyLCBNYXRoLm1pbihzaXplIHx8IDAsIHZhbHVlLmJ5dGVMZW5ndGgpKVxuICAgIHRoaXMuc3RsKGFkZHIsIHZhbHVlLCBzaXplKVxuICB9XG5cbiAgc3RzIChhZGRyLCBzdHIsIHNpemUpIHtcbiAgICBzaXplID0gc2l6ZSB8fCBkYXRhX3R5cGVfc2l6ZXMuc3RyIC0gMVxuICAgIGxldCBhID0gXy5tYXAoc3RyLnNwbGl0KCcnKSwgaSA9PiBpLmNoYXJDb2RlQXQoMCkpXG4gICAgYS5sZW5ndGggPSBNYXRoLm1pbihzaXplLCBhLmxlbmd0aClcbiAgICB0aGlzLmZpbGwoMCwgYWRkciwgc2l6ZSlcbiAgICB0aGlzLl9kYXRhLnNldChhLCBhZGRyKVxuICB9XG5cbiAgc3RzX2JjIChhZGRyLCBzdHIsIHNpemUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgTWF0aC5taW4oc2l6ZSwgZGF0YV90eXBlX3NpemVzLnN0cikpXG4gICAgdGhpcy5zdHMoYWRkciwgc3RyLCBzaXplKVxuICB9XG5cbiAgZmlsbCAodmFsdWUsIHRvcCwgc2l6ZSkgeyB0aGlzLl9kYXRhLmZpbGwodmFsdWUgfHwgMCwgdG9wLCB0b3AgKyBzaXplKSB9XG5cbiAgZmlsbF9iYyAodmFsdWUsIHRvcCwgc2l6ZSkge1xuICAgIHRoaXMuY2hrX2JvdW5kcyh0b3AsIHNpemUpXG4gICAgdGhpcy5maWxsKHZhbHVlLCB0b3AsIHNpemUpXG4gIH1cblxuICBjb3B5IChzcmMsIHRndCwgc2l6ZSkgeyB0aGlzLl9kYXRhLmNvcHlXaXRoaW4odGd0LCBzcmMsIHNyYyArIHNpemUgLSAxKSB9XG5cbiAgY29weV9iYyAoc3JjLCB0Z3QsIHNpemUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoc3JjLCBzaXplKVxuICAgIHRoaXMuY2hrX2JvdW5kcyh0Z3QsIHNpemUpXG4gICAgdGhpcy5jb3B5KHNyYywgdGd0LCBzaXplKVxuICB9XG5cbiAgcmVhZCAoYWRkciwgdHlwZSA9ICdpOCcpIHtcbiAgICBsZXQgdmFsdWVcbiAgICBpZiAoXy5pc051bWJlcih0eXBlKSkge1xuICAgICAgdmFsdWUgPSB0aGlzLl9kYXRhLnNsaWNlKGFkZHIsIGFkZHIgKyB0eXBlIC0gMSlcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cicpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5sZHMoYWRkcilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubGQodHlwZSwgYWRkcilcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICB3cml0ZSAodmFsdWUsIGFkZHIsIHR5cGUgPSAnaTgnKSB7XG4gICAgbGV0IHN6XG4gICAgaWYgKF8uaXNOdW1iZXIodHlwZSkpIHtcbiAgICAgIHRoaXMuX2RhdGEuc2V0KHZhbHVlLnN1YmFycmF5KDAsIHR5cGUgLSAxKSwgYWRkcilcbiAgICAgIHN6ID0gdHlwZVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3RyJykge1xuICAgICAgdGhpcy5zdHMoYWRkciwgdmFsdWUpXG4gICAgICBzeiA9IGRhdGFfdHlwZV9zaXplc1t0eXBlXVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc3QodHlwZSwgYWRkciwgdmFsdWUpXG4gICAgICBzeiA9IGRhdGFfdHlwZV9zaXplc1t0eXBlXVxuICAgIH1cbiAgICByZXR1cm4gYWRkciArIHN6XG4gIH1cblxuICBkdW1wIChhZGRyID0gMCwgc2l6ZSA9IDEwMjQpIHtcbiAgICBjb25zb2xlLmxvZygnRHVtcGluZycsIHNpemUsICcgYnl0ZXMgZnJvbSBtZW1vcnkgYXQgJywgaGV4KGFkZHIpKVxuICAgIGNvbnNvbGUubG9nKGhleHkuaGV4eSh0aGlzLl9idWZmZXIsIHsgb2Zmc2V0OiBhZGRyLCBsZW5ndGg6IHNpemUsIHdpZHRoOiAxNiwgY2FwczogJ3VwcGVyJywgaW5kZW50OiAyIH0pKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9tZW1vcnkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZXh5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaGV4eVwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaGV4eSBmcm9tICdoZXh5J1xuaW1wb3J0IHByZXR0eUJ5dGVzIGZyb20gJ3ByZXR0eS1ieXRlcydcbmltcG9ydCB7IGRhdGFfdHlwZV9zaXplIH0gZnJvbSAnLi9tZW1vcnkuanMnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtb3J5TWFuYWdlciB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICB0aGlzLl9tYWluID0gbWFpblxuXG4gICAgdGhpcy5fY29sbGVjdF9kZWxheSA9IG1haW4uZGVmYXVsdCgnbWVtb3J5X21hbmFnZXIuY29sbGVjdF9kZWxheScpXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9ibG9ja3MgPSBbXVxuICAgIHRoaXMuX2xhc3QgPSAwXG4gICAgcmV0dXJuIHRoaXMuY29sbGVjdCgpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNvbGxlY3QoKVxuICAgIHRoaXMuX2Jsb2NrcyA9IFtdXG4gICAgdGhpcy5fbGFzdCA9IDBcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBpZiAodCAtIHRoaXMuX2xhc3QgPj0gdGhpcy5fY29sbGVjdF9kZWxheSkge1xuICAgICAgdGhpcy5jb2xsZWN0KClcbiAgICAgIHRoaXMuX2xhc3QgPSB0XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fbWFpbiB9XG4gIGdldCBtZW1vcnkgKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5tZW1vcnkgfVxuXG4gIGdldCBibG9ja3MgKCkgeyByZXR1cm4gdGhpcy5fYmxvY2tzIH1cbiAgZ2V0IGxhc3QgKCkgeyByZXR1cm4gdGhpcy5fbGFzdCB9XG4gIGdldCBjb2xsZWN0X2RlbGF5ICgpIHsgcmV0dXJuIHRoaXMuX2NvbGxlY3RfZGVsYXkgfVxuXG4gIGdldCBhdmFpbF9tZW0gKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5zaXplIH1cblxuICBnZXQgdXNlZF9tZW0gKCkge1xuICAgIGxldCBzaXplID0gMFxuICAgIGZvciAobGV0IGIgb2YgdGhpcy5fYmxvY2tzKSB7XG4gICAgICBpZiAoYi51c2VkKSB7XG4gICAgICAgIHNpemUgKz0gYi5zaXplXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaXplXG4gIH1cblxuICBnZXQgZnJlZV9tZW0gKCkgeyByZXR1cm4gdGhpcy5hdmFpbF9tZW0gLSB0aGlzLnVzZWRfbWVtIH1cblxuICBfYWxsb2MgKHR5cGUsIGNvdW50KSB7XG4gICAgY291bnQgPSBjb3VudCB8fCAxXG4gICAgbGV0IHNpemUgPSBkYXRhX3R5cGVfc2l6ZSh0eXBlKSAqIGNvdW50XG4gICAgbGV0IG4gPSAwXG5cbiAgICBmb3IgKGxldCBiIG9mIHRoaXMuX2Jsb2Nrcykge1xuICAgICAgaWYgKGIuYm90dG9tID4gbikge1xuICAgICAgICBuID0gYi5ib3R0b21cbiAgICAgIH1cblxuICAgICAgaWYgKCFiLnVzZWQgJiYgYi5zaXplID49IHNpemUpIHtcbiAgICAgICAgaWYgKGIuc2l6ZSA9PT0gc2l6ZSkge1xuICAgICAgICAgIGIudXNlZCA9IHRydWVcbiAgICAgICAgICByZXR1cm4gYi50b3BcbiAgICAgICAgfVxuICAgICAgICBsZXQgb2IgPSBiLmJvdHRvbVxuICAgICAgICBiLmJvdHRvbSA9IGIudG9wICsgc2l6ZSAtIDFcbiAgICAgICAgYi5zaXplID0gc2l6ZVxuICAgICAgICBiLmNvdW50ID0gY291bnRcbiAgICAgICAgYi51c2VkID0gdHJ1ZVxuXG4gICAgICAgIHRoaXMuX2Jsb2Nrcy5wdXNoKHsgdG9wOiBiLmJvdHRvbSArIDEsIGJvdHRvbTogb2IsIHNpemU6IG9iIC0gKGIuYm90dG9tICsgMSksIGNvdW50LCB0eXBlLCB1c2VkOiBmYWxzZSB9KVxuXG4gICAgICAgIHJldHVybiBiLnRvcFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuICsgc2l6ZSA+IHRoaXMuYXZhaWxfbWVtKSB7XG4gICAgICBfdm0uaGx0KClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgbGV0IGFkZHIgPSBuICsgMVxuXG4gICAgdGhpcy5fYmxvY2tzLnB1c2goeyB0b3A6IGFkZHIsIGJvdHRvbTogYWRkciArIHNpemUgLSAxLCBzaXplLCBjb3VudCwgdHlwZSwgdXNlZDogdHJ1ZSB9KVxuXG4gICAgX3ZtLmZpbGwoMCwgYWRkciwgc2l6ZSlcblxuICAgIHJldHVybiBhZGRyXG4gIH1cblxuICBhbGxvYyAodHlwZSwgY291bnQsIC4uLnZhbHVlKSB7XG4gICAgbGV0IGFkZHIgPSB0aGlzLl9hbGxvYyh0eXBlLCBjb3VudClcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IHNpemUgPSBkYXRhX3R5cGVfc2l6ZSh0eXBlKSAqIGNvdW50XG4gICAgICBsZXQgYSA9IGFkZHJcbiAgICAgIGZvciAobGV0IHYgb2YgdmFsdWUpIHtcbiAgICAgICAgX3ZtLndyaXRlKHYsIGEsIHR5cGUpXG4gICAgICAgIGEgKz0gc2l6ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhZGRyXG4gIH1cblxuICBmcmVlIChhZGRyKSB7XG4gICAgbGV0IGIgPSB0aGlzLmJsb2NrKGFkZHIpXG4gICAgaWYgKGIpIHtcbiAgICAgIGIudXNlZCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgYmxvY2sgKGFkZHIpIHtcbiAgICBmb3IgKGxldCBiIG9mIHRoaXMuX2Jsb2Nrcykge1xuICAgICAgaWYgKGIudG9wID09PSBhZGRyKSB7XG4gICAgICAgIHJldHVybiBiXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICB0eXBlIChhZGRyKSB7XG4gICAgbGV0IGIgPSB0aGlzLmJsb2NrKGFkZHIpXG4gICAgcmV0dXJuIGIgJiYgYi51c2VkID8gYi50eXBlIDogbnVsbFxuICB9XG5cbiAgc2l6ZSAoYWRkcikge1xuICAgIGxldCBiID0gdGhpcy5ibG9jayhhZGRyKVxuICAgIHJldHVybiBiICYmIGIudXNlZCA/IGIuc2l6ZSA6IC0xXG4gIH1cblxuICBjb2xsZWN0ICgpIHtcbiAgICBsZXQgbiA9IFtdXG4gICAgZm9yIChsZXQgYiBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgIGlmICghYi51c2VkKSB7XG4gICAgICAgIG4ucHVzaChiKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9ibG9ja3MgPSBuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIGNvbnNvbGUubG9nKCdtZW1vcnkgX2Jsb2NrcyBkdW1wLi4uJywgJ2F2YWlsX21lbTonLCBwcmV0dHlCeXRlcyh0aGlzLmF2YWlsX21lbSksICd1c2VkOicsIHByZXR0eUJ5dGVzKHRoaXMudXNlZF9tZW0pLCAnZnJlZTonLCBwcmV0dHlCeXRlcyh0aGlzLmZyZWVfbWVtKSlcbiAgICBmb3IgKGxldCBiIG9mIHRoaXMuX2Jsb2Nrcykge1xuICAgICAgY29uc29sZS5sb2coJycpXG4gICAgICBjb25zb2xlLmxvZygnb2Zmc2V0OicsIF92bS5oZXgoYi50b3AsIDMyKSwgJ3NpemU6JywgdGhpcy5zaXplKGIudG9wKSwgJ3R5cGU6JywgdGhpcy50eXBlKGIudG9wKSlcbiAgICAgIGNvbnNvbGUubG9nKGhleHkuaGV4eShfdm0ubWVtX2J1ZmZlciwgeyBvZmZzZXQ6IGIudG9wLCBsZW5ndGg6IE1hdGgubWluKDI1NSwgYi5zaXplKSwgd2lkdGg6IDE2LCBjYXBzOiAndXBwZXInLCBpbmRlbnQ6IDIgfSkpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vbWVtb3J5bWFuYWdlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByZXR0eS1ieXRlc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByZXR0eS1ieXRlc1wiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBkZWZhdWx0cywgcnVudGltZV9lcnJvciB9IGZyb20gJy4uL2dsb2JhbHMuanMnXG5pbXBvcnQgeyBkYXRhX3R5cGVfc2l6ZSB9IGZyb20gJy4vbWVtb3J5LmpzJ1xuXG5jbGFzcyBTdGFja0VudHJ5IHtcblxuICBjb25zdHJ1Y3RvciAoc3RhY2ssIG9mZnNldCA9IDAsIG1heCA9IDI1NSwgdHlwZSA9IGRlZmF1bHRzLnR5cGUsIHNpemUsIHJvbGxpbmcgPSBmYWxzZSkge1xuICAgIHRoaXMuX3N0YWNrID0gc3RhY2tcblxuICAgIHRoaXMuX21heCA9IG1heFxuICAgIHRoaXMuX3NpemUgPSBzaXplIHx8IGRhdGFfdHlwZV9zaXplKHR5cGUpXG4gICAgdGhpcy5fdG9wID0gb2Zmc2V0XG4gICAgdGhpcy5fYm90dG9tID0gdGhpcy5fdG9wICsgdGhpcy5fc2l6ZSAtIDFcbiAgICB0aGlzLl90eXBlID0gdHlwZVxuICAgIHRoaXMuX3JvbGxpbmcgPSByb2xsaW5nIHx8IGZhbHNlXG5cbiAgICB0aGlzLmxpc3RbdGhpcy5fdG9wXSA9IHRoaXNcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9wdHIgPSB0aGlzLl90b3BcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMubGlzdFt0aGlzLl90b3BdID0gdW5kZWZpbmVkXG4gIH1cblxuICBnZXQgbWFpbiAoKSB7IHJldHVybiB0aGlzLl9zdGFjay5tYWluIH1cbiAgZ2V0IHN0YWNrICgpIHsgcmV0dXJuIHRoaXMuX3N0YWNrIH1cbiAgZ2V0IGxpc3QgKCkgeyByZXR1cm4gdGhpcy5fc3RhY2subGlzdCB9XG5cbiAgZ2V0IHRvcCAoKSB7IHJldHVybiB0aGlzLl90b3AgfVxuICBnZXQgYm90dG9tICgpIHsgcmV0dXJuIHRoaXMuX2JvdHRvbSB9XG4gIGdldCBzaXplICgpIHsgcmV0dXJuIHRoaXMuX3NpemUgfVxuXG4gIGdldCBtYXggKCkgeyByZXR1cm4gdGhpcy5fbWF4IH1cbiAgZ2V0IHB0ciAoKSB7IHJldHVybiB0aGlzLl9wdHIgfVxuXG4gIGdldCB0b3RhbF9zaXplICgpIHsgcmV0dXJuIHRoaXMuX21heCAqIHRoaXMuX3NpemUgfVxuICBnZXQgdXNlZCAoKSB7IHJldHVybiBNYXRoLnRydW5jKCh0aGlzLl9wdHIgLSB0aGlzLl90b3ApIC8gdGhpcy5fc2l6ZSkgfVxuICBnZXQgYXZhaWwgKCkgeyByZXR1cm4gdGhpcy50b3RhbF9zaXplIC0gdGhpcy51c2VkIH1cblxuICBwdXNoICguLi52YWx1ZSkge1xuICAgIGxldCBzeiA9IHRoaXMuX3NpemVcbiAgICBsZXQgdCA9IHRoaXMuX3R5cGVcbiAgICBsZXQgdG9wID0gdGhpcy5fdG9wXG4gICAgbGV0IGJvdHRvbSA9IHRoaXMuX2JvdHRvbVxuICAgIGxldCByb2xsaW5nID0gdGhpcy5fcm9sbGluZ1xuICAgIGZvciAobGV0IHYgb2YgdmFsdWUpIHtcbiAgICAgIGlmIChyb2xsaW5nICYmIHRoaXMuX3B0ciA+PSBib3R0b20pIHtcbiAgICAgICAgdGhpcy5jb3B5KHRvcCArIHN6LCB0b3AsIGJvdHRvbSAtIHN6KVxuICAgICAgICB0aGlzLl9wdHIgLT0gc3pcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9wdHIgKyBzeiA8IGJvdHRvbSkge1xuICAgICAgICB0aGlzLndyaXRlKHYsIHRoaXMuX3B0ciwgdClcbiAgICAgICAgdGhpcy5fcHRyICs9IHN6XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcnVudGltZV9lcnJvcigweDAzKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBvcCAoKSB7XG4gICAgaWYgKHRoaXMuX3B0ciA+IHRoaXMuX3RvcCkge1xuICAgICAgdGhpcy5fcHRyIC09IHRoaXMuX3NpemVcbiAgICAgIHJldHVybiB0aGlzLnJlYWQodGhpcy5fcHRyLCB0aGlzLl90eXBlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwMilcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFjayB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICB0aGlzLl9tYWluID0gbWFpblxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fbGlzdCA9IHt9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9saXN0ID0ge31cbiAgfVxuXG4gIGdldCBsaXN0ICgpIHsgcmV0dXJuIHRoaXMuX2xpc3QgfVxuXG4gIG5ldyAob2Zmc2V0LCBtYXgsIHR5cGUsIHNpemUsIHJvbGxpbmcpIHtcbiAgICBsZXQgcyA9IHRoaXMuX2xpc3Rbb2Zmc2V0XVxuICAgIGlmICghcykge1xuICAgICAgcmV0dXJuIG5ldyBTdGFja0VudHJ5KHRoaXMsIC4uLmFyZ3VtZW50cylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDQpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHB1c2ggKG9mZnNldCwgLi4udmFsdWVzKSB7XG4gICAgbGV0IHMgPSB0aGlzLl9saXN0W29mZnNldF1cbiAgICBpZiAocykge1xuICAgICAgcmV0dXJuIHMucHVzaCguLi52YWx1ZXMpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnVudGltZV9lcnJvcigweDA0KVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBwb3AgKG9mZnNldCkge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBzLnBvcCgpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnVudGltZV9lcnJvcigweDA0KVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICB1c2VkIChvZmZzZXQpIHtcbiAgICBsZXQgcyA9IHRoaXMuX2xpc3Rbb2Zmc2V0XVxuICAgIGlmIChzKSB7XG4gICAgICByZXR1cm4gcy51c2VkXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnVudGltZV9lcnJvcigweDA0KVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBtYXggKG9mZnNldCkge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBzLm1heFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgc2l6ZSAob2Zmc2V0KSB7XG4gICAgbGV0IHMgPSB0aGlzLl9saXN0W29mZnNldF1cbiAgICBpZiAocykge1xuICAgICAgcmV0dXJuIHMuc2l6ZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgdHlwZSAob2Zmc2V0KSB7XG4gICAgbGV0IHMgPSB0aGlzLl9saXN0W29mZnNldF1cbiAgICBpZiAocykge1xuICAgICAgcmV0dXJuIHMudHlwZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9zdGFjay5qcyIsImltcG9ydCB7IHJ1bnRpbWVfZXJyb3IgfSBmcm9tICcuLi9nbG9iYWxzLmpzJ1xuXG5jb25zdCBfSU5UX1JVTk5JTkcgPSAxXG5jb25zdCBfSU5UX1BBVVNFRCA9IDJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJydXB0IHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHRoaXMuX2xpc3QgPSB7fVxuICAgIHRoaXMuX21haW4gPSBtYWluXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5zdG9wX2FsbCgpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fbWFpbiB9XG4gIGdldCBtZW1vcnkgKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5tZW1vcnkgfVxuXG4gIGZpbmQgKG5hbWUpIHsgcmV0dXJuIHRoaXMuX2xpc3RbbmFtZV0gfVxuXG4gIGNyZWF0ZSAobmFtZSwgZm4sIG1zID0gNTAwKSB7XG4gICAgaWYgKCF0aGlzLmZpbmQobmFtZSkpIHtcbiAgICAgIHRoaXMuX2xpc3RbbmFtZV0gPSB7IG5hbWUsIHN0YXR1czogX0lOVF9SVU5OSU5HLCBtcywgZm4sIGxhc3Q6IDAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNilcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc3VtZSAobmFtZSkge1xuICAgIGlmICh0aGlzLmZpbmQobmFtZSkpIHtcbiAgICAgIHRoaXMuX2xpc3RbbmFtZV0uc3RhdHVzID0gX0lOVF9SVU5OSU5HXG4gICAgICB0aGlzLl9saXN0W25hbWVdLmxhc3QgPSBwZXJmb3JtYW5jZS5ub3coKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHBhdXNlIChuYW1lKSB7XG4gICAgaWYgKHRoaXMuZmluZChuYW1lKSkge1xuICAgICAgdGhpcy5fbGlzdFtuYW1lXS5zdGF0dXMgPSBfSU5UX1BBVVNFRFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0b3AgKG5hbWUpIHtcbiAgICBpZiAodGhpcy5maW5kKG5hbWUpKSB7XG4gICAgICBkZWxldGUgdGhpcy5fbGlzdFtuYW1lXVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0b3BfYWxsICgpIHtcbiAgICBmb3IgKGxldCBrIGluIHRoaXMuX2xpc3QpIHtcbiAgICAgIHRoaXMuc3RvcChrKVxuICAgIH1cbiAgICB0aGlzLl9saXN0ID0ge31cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdGljayAodCkge1xuICAgIGZvciAobGV0IGsgaW4gdGhpcy5fbGlzdCkge1xuICAgICAgbGV0IGkgPSB0aGlzLl9saXN0W2tdXG4gICAgICBpZiAoaS5zdGF0dXMgPT09IF9JTlRfUlVOTklORykge1xuICAgICAgICBsZXQgZGVsYXkgPSB0IC0gaS5sYXN0XG4gICAgICAgIGlmIChkZWxheSA+PSBpLm1zKSB7XG4gICAgICAgICAgaS5mbi5hcHBseSh0aGlzLCBbZGVsYXkgLSBpLm1zXSlcbiAgICAgICAgICBpLmxhc3QgPSB0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2ludGVycnVwdC5qcyIsImltcG9ydCBSYWluYm93IGZyb20gJy4vcmFpbmJvdy5qcydcbmltcG9ydCBGb256byBmcm9tICcuL2ZvbnpvLmpzJ1xuaW1wb3J0IE9yd2VsbCBmcm9tICcuL29yd2VsbC5qcydcbmltcG9ydCBCZWFnbGUgZnJvbSAnLi9iZWFnbGUuanMnXG5pbXBvcnQgVmlvbGV0IGZyb20gJy4vdmlvbGV0LmpzJ1xuaW1wb3J0IHsgT3ZlcmxheXMgfSBmcm9tICcuLi9vdmVybGF5cy5qcydcblxuaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWlkZW8gZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoJ2k4JywgJ2d1aWRlbycsIFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3NjYWxlJ10pXG5cbiAgICB0aGlzLl9yZW5kZXJlciA9IG5ldyBQSVhJLmF1dG9EZXRlY3RSZW5kZXJlcih0aGlzLl93aWR0aCAqIHRoaXMuX3NjYWxlLCB0aGlzLl9oZWlnaHQgKiB0aGlzLl9zY2FsZSwge30pXG4gICAgdGhpcy5fcmVuZGVyZXIudmlldy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICB0aGlzLl9yZW5kZXJlci52aWV3LnN0eWxlLmN1cnNvciA9ICdub25lJ1xuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcuaWQgPSAnZ3VpZGVvJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fcmVuZGVyZXIudmlldylcblxuICAgIHRoaXMuX3N0YWdlID0gbmV3IFBJWEkuQ29udGFpbmVyKClcbiAgICB0aGlzLl9zdGFnZS5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KHRoaXMuX3NjYWxlLCB0aGlzLl9zY2FsZSlcblxuICAgIHRoaXMuX29uUmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKVxuICAgIHRoaXMub24oJ3Jlc2l6ZScsIHRoaXMuX29uUmVzaXplKVxuXG4gICAgdGhpcy5hc3luYyhmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9yYWluYm93ID0gbmV3IFJhaW5ib3cobWFpbilcbiAgICAgIHRoaXMuX2ZvbnpvID0gbmV3IEZvbnpvKG1haW4pXG4gICAgICB0aGlzLl9vcndlbGwgPSBuZXcgT3J3ZWxsKG1haW4pXG4gICAgICB0aGlzLl9iZWFnbGUgPSBuZXcgQmVhZ2xlKG1haW4pXG4gICAgICB0aGlzLl92aW9sZXQgPSBuZXcgVmlvbGV0KG1haW4pXG4gICAgICB0aGlzLl9vdmVybGF5cyA9IG5ldyBPdmVybGF5cyh0aGlzLCB7XG4gICAgICAgIHNjcmVlbjoge30sXG4gICAgICAgIHNjYW5saW5lczoge30sXG4gICAgICAgIHNjYW5saW5lOiB7fSxcbiAgICAgICAgcmdiOiB7fSxcbiAgICAgICAgbm9pc2VzOiB7fSxcbiAgICAgICAgY3J0OiB7fSxcbiAgICAgICAgbW9uaXRvcjoge30sXG4gICAgICB9KVxuICAgICAgdGhpcy5yZXNldCgpXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMub2ZmKCdyZXNpemUnLCB0aGlzLl9vblJlc2l6ZSlcblxuICAgIHRoaXMuX3JhaW5ib3cuZGVzdHJveSgpXG4gICAgdGhpcy5fZm9uem8uZGVzdHJveSgpXG4gICAgdGhpcy5fb3J3ZWxsLmRlc3Ryb3koKVxuICAgIHRoaXMuX2JlYWdsZS5kZXN0cm95KClcbiAgICB0aGlzLl92aW9sZXQuZGVzdHJveSgpXG5cbiAgICB0aGlzLl9vdmVybGF5cy5kZXN0cm95KClcblxuICAgIGlmICh0aGlzLl9zcHJpdGUpIHtcbiAgICAgIHRoaXMuX3Nwcml0ZS5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdGV4dHVyZSkge1xuICAgICAgdGhpcy5fdGV4dHVyZS5kZXN0cm95KClcbiAgICAgIHRoaXMuX3RleHR1cmUgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NhbnZhcykge1xuICAgICAgdGhpcy5fY2FudmFzLnJlbW92ZSgpXG4gICAgICB0aGlzLl9jYW52YXMgPSBudWxsXG4gICAgfVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuXG4gICAgdGhpcy5jbGVhcigpXG5cbiAgICB0aGlzLl9mb3JjZV91cGRhdGUgPSBmYWxzZVxuICAgIHRoaXMuX2ZvcmNlX2ZsaXAgPSBmYWxzZVxuXG4gICAgdGhpcy5fcmFpbmJvdy5yZXNldCgpXG4gICAgdGhpcy5fZm9uem8ucmVzZXQoKVxuICAgIHRoaXMuX29yd2VsbC5yZXNldCgpXG4gICAgdGhpcy5fYmVhZ2xlLnJlc2V0KClcbiAgICB0aGlzLl92aW9sZXQucmVzZXQoKVxuICAgIHRoaXMuX292ZXJsYXlzLnJlc2V0KClcblxuICAgIHJldHVybiB0aGlzLnJlc2l6ZSgpXG4gIH1cblxuICBnZXQgc2NhbGUgKCkgeyByZXR1cm4gdGhpcy5fc2NhbGUgfVxuICBzZXQgc2NhbGUgKHZhbHVlKSB7XG4gICAgdGhpcy5fc2NhbGUgPSB2YWx1ZVxuICAgIHRoaXMucmVzaXplKClcbiAgfVxuXG4gIHNldCB3aWR0aCAodmFsdWUpIHtcbiAgICB0aGlzLl93aWR0aCA9IHZhbHVlXG4gICAgdGhpcy5yZXNpemUoKVxuICB9XG5cbiAgc2V0IGhlaWdodCAodmFsdWUpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB2YWx1ZVxuICAgIHRoaXMucmVzaXplKClcbiAgfVxuXG4gIGdldCB2aWRlb19jaGlwICgpIHsgcmV0dXJuIHRoaXMgfVxuICBnZXQgcmFpbmJvdyAoKSB7IHJldHVybiB0aGlzLl9yYWluYm93IH1cbiAgZ2V0IGZvbnpvICgpIHsgcmV0dXJuIHRoaXMuX2ZvbnpvIH1cbiAgZ2V0IG9yd2VsbCAoKSB7IHJldHVybiB0aGlzLl9vcndlbGwgfVxuICBnZXQgYmVhZ2xlICgpIHsgcmV0dXJuIHRoaXMuX2JlYWdsZSB9XG4gIGdldCB2aW9sZXQgKCkgeyByZXR1cm4gdGhpcy5fdmlvbGV0IH1cblxuICBnZXQgb3ZlcmxheXMgKCkgeyByZXR1cm4gdGhpcy5fb3ZlcmxheXMgfVxuXG4gIGdldCBzdGFnZSAoKSB7IHJldHVybiB0aGlzLl9zdGFnZSB9XG4gIGdldCByZW5kZXJlciAoKSB7IHJldHVybiB0aGlzLl9yZW5kZXJlciB9XG5cbiAgZ2V0IHNwcml0ZSAoKSB7IHJldHVybiB0aGlzLl9zcHJpdGUgfVxuICBnZXQgdGV4dHVyZSAoKSB7IHJldHVybiB0aGlzLl90ZXh0dXJlIH1cbiAgZ2V0IGNhbnZhcyAoKSB7IHJldHVybiB0aGlzLl9jYW52YXMgfVxuICBnZXQgY29udGV4dCAoKSB7IHJldHVybiB0aGlzLl9jb250ZXh0IH1cbiAgZ2V0IGltYWdlRGF0YSAoKSB7IHJldHVybiB0aGlzLl9pbWFnZURhdGEgfVxuICBnZXQgcGl4ZWxzICgpIHsgcmV0dXJuIHRoaXMuX3BpeGVscyB9XG5cbiAgZ2V0IGZvcmNlX2ZsaXAgKCkgeyByZXR1cm4gdGhpcy5fZm9yY2VfZmxpcCB9XG4gIHNldCBmb3JjZV9mbGlwICh2YWx1ZSkgeyB0aGlzLl9mb3JjZV9mbGlwID0gdmFsdWUgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICB0aGlzLl9yYWluYm93LnRpY2sodClcbiAgICB0aGlzLl9mb256by50aWNrKHQpXG4gICAgdGhpcy5fb3J3ZWxsLnRpY2sodClcbiAgICB0aGlzLl9iZWFnbGUudGljayh0KVxuICAgIHRoaXMuX3Zpb2xldC50aWNrKHQpXG5cbiAgICBpZiAodGhpcy5fZm9yY2VfdXBkYXRlKSB7XG4gICAgICB0aGlzLl9mb3JjZV91cGRhdGUgPSBmYWxzZVxuXG4gICAgICBpZiAodGhpcy5fZm9yY2VfZmxpcCkge1xuICAgICAgICB0aGlzLmZsaXAoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW5kZXIodGhpcy5fc3RhZ2UpXG4gICAgfVxuXG4gICAgdGhpcy5fb3ZlcmxheXMudGljayh0KVxuICB9XG5cbiAgcmVmcmVzaCAoZmxpcCA9IGZhbHNlKSB7XG4gICAgaWYgKCF0aGlzLl9mb3JjZV9mbGlwKSB7XG4gICAgICB0aGlzLl9mb3JjZV9mbGlwID0gZmxpcFxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgncmVmcmVzaCcsIHsgZmxpcCB9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGZsaXAgKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGxldCBwaXhlbHMgPSB0aGlzLl9waXhlbHNcbiAgICBsZXQgcGFsID0gdGhpcy5fcmFpbmJvd1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspIHtcbiAgICAgIHBpeGVsc1tpXSA9IHBhbC5kYXRhW2RhdGFbaV1dXG4gICAgfVxuXG4gICAgdGhpcy5fY29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5faW1hZ2VEYXRhLCAwLCAwKVxuXG4gICAgdGhpcy5fZm9yY2VfZmxpcCA9IGZhbHNlXG5cbiAgICB0aGlzLmVtaXQoJ2ZsaXAnKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGNlbnRlciAoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIudmlldy5zdHlsZS5sZWZ0ID0gd2luZG93LmlubmVyV2lkdGggKiAwLjUgLSB0aGlzLl9yZW5kZXJlci53aWR0aCAqIDAuNSArICdweCdcbiAgICB0aGlzLl9yZW5kZXJlci52aWV3LnN0eWxlLnRvcCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNSAtIHRoaXMuX3JlbmRlcmVyLmhlaWdodCAqIDAuNSArICdweCdcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcmVzY2FsZSAod2lkdGgsIGhlaWdodCkge1xuICAgIGlmICghdGhpcy5lbWl0KCdyZXNjYWxlJywgeyB3aWR0aCwgaGVpZ2h0IH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHRoaXMuc2NhbGUgPSBNYXRoLmNlaWwoTWF0aC5taW4od2lkdGggLyB0aGlzLl9yZW5kZXJlci53aWR0aCwgaGVpZ2h0IC8gdGhpcy5fcmVuZGVyZXIuaGVpZ2h0KSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc2l6ZSAoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVzaXplKHRoaXMuX3dpZHRoICogdGhpcy5fc2NhbGUsIHRoaXMuX2hlaWdodCAqIHRoaXMuX3NjYWxlKVxuXG4gICAgaWYgKHRoaXMuX3Nwcml0ZSkge1xuICAgICAgdGhpcy5fc3ByaXRlLnRleHR1cmUgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RleHR1cmUpIHtcbiAgICAgIHRoaXMuX3RleHR1cmUuZGVzdHJveSgpXG4gICAgICB0aGlzLl90ZXh0dXJlID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jYW52YXMpIHtcbiAgICAgIHRoaXMuX2NhbnZhcy5yZW1vdmUoKVxuICAgIH1cblxuICAgIHRoaXMuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgdGhpcy5fY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLl9jYW52YXMud2lkdGggPSB0aGlzLl93aWR0aFxuICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLl9oZWlnaHRcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2NhbnZhcylcblxuICAgIHRoaXMuX3RleHR1cmUgPSBQSVhJLlRleHR1cmUuZnJvbUNhbnZhcyh0aGlzLl9jYW52YXMsIFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVClcblxuICAgIGlmICghdGhpcy5fc3ByaXRlKSB7XG4gICAgICB0aGlzLl9zcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fdGV4dHVyZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9zcHJpdGUudGV4dHVyZSA9IHRoaXMuX3RleHR1cmVcbiAgICB9XG5cbiAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJywgeyBhbHBoYTogdHJ1ZSwgYW50aWFsaWFzOiBmYWxzZSB9KVxuICAgIHRoaXMuX2NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG5cbiAgICB0aGlzLl9pbWFnZURhdGEgPSB0aGlzLl9jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuXG4gICAgdGhpcy5fcGl4ZWxzID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2ltYWdlRGF0YS5kYXRhLmJ1ZmZlcilcblxuICAgIHRoaXMuY2VudGVyKClcblxuICAgIHRoaXMudGVzdCgpXG5cbiAgICB0aGlzLl9vdmVybGF5cy5yZXNpemUoKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHBpeGVsIChpLCBjKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgaWYgKGMgIT09IHVuZGVmaW5lZCAmJiBkYXRhW2ldICE9PSBjKSB7XG4gICAgICBkYXRhW2ldID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oYywgdGhpcy5fcmFpbmJvdy5jb3VudCAtIDEpKVxuICAgIH1cbiAgICByZXR1cm4gZGF0YVtpXVxuICB9XG5cbiAgdG9JbmRleCAoeCwgeSkgeyByZXR1cm4geSAqIHRoaXMuX3dpZHRoICsgeCB9XG5cbiAgZnJvbUluZGV4IChpKSB7XG4gICAgbGV0IHkgPSBNYXRoLm1pbihNYXRoLnRydW5jKGkgLyB0aGlzLl93aWR0aCksIHRoaXMuX2hlaWdodCAtIDEpXG4gICAgbGV0IHggPSBpIC0geVxuICAgIHJldHVybiB7IHgsIHkgfVxuICB9XG5cbiAgc2Nyb2xsICh4LCB5KSB7XG4gICAgbGV0IGx3ID0geSAqIHRoaXMuX3dpZHRoXG4gICAgbGV0IHMgPSBsd1xuICAgIGxldCBlID0gdGhpcy5fc2l6ZSAtIGx3XG4gICAgdGhpcy5fZGF0YS5jb3B5KHMsIDAsIGUgLSBzKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBsb2FkVGV4dHVyZSAoZmlsZW5hbWUpIHtcbiAgICBsZXQgdGV4ID0gUElYSS5UZXh0dXJlLmZyb21JbWFnZSgnLi9idWlsZC8nICsgcmVxdWlyZSgnZmlsZT9uYW1lPWFzc2V0cy9bbmFtZV0uW2V4dF0hLi4vLi4vLi4vYXNzZXRzL2ltZ3MvJyArIGZpbGVuYW1lKSwgdW5kZWZpbmVkLCBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1QpXG4gICAgdGV4Lm9uKCd1cGRhdGUnLCAoKSA9PiB0aGlzLnVwZGF0ZSgpKVxuICAgIHJldHVybiB0ZXhcbiAgfVxuXG4gIHRlc3QgKCkge1xuICAgIHRoaXMuY2xlYXIoKVxuXG4gICAgdGhpcy5fc3RhZ2UucmVtb3ZlQ2hpbGRyZW4oKVxuXG4gICAgbGV0IHQgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5sb2FkVGV4dHVyZSgndGVzdC5wbmcnKSlcbiAgICB0aGlzLl9zdGFnZS5hZGRDaGlsZCh0KVxuXG4gICAgbGV0IHRleHQgPSBuZXcgUElYSS5UZXh0KCdUaGlzIGlzIGEgcGl4aSB0ZXh0JywgeyBmb250OiAnMjBweCBcIkdsYXNzIFRUWSBWVDIyMFwiJywgZmlsbDogMHhGRkZGRkYgfSlcbiAgICB0ZXh0LnRleHR1cmUuYmFzZVRleHR1cmUuc2NhbGVNb2RlID0gUElYSS5TQ0FMRV9NT0RFUy5ORUFSRVNUXG4gICAgdGV4dC5jb250ZXh0LmNhbnZhcy5zdHlsZVsnZm9udC1zbW9vdGhpbmcnXSA9ICduZXZlcidcbiAgICB0ZXh0LmNvbnRleHQuY2FudmFzLnN0eWxlWyctd2Via2l0LWZvbnQtc21vb3RoaW5nJ10gPSAnbm9uZSdcbiAgICB0ZXh0LmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2VcbiAgICB0ZXh0LmNvbnRleHQuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnaGlkZGVuJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dC5jb250ZXh0LmNhbnZhcylcbiAgICB0ZXh0LnVwZGF0ZVRleHQoKVxuICAgIHRoaXMuX3N0YWdlLmFkZENoaWxkKHRleHQpXG4gICAgdGhpcy51cGRhdGUoKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dC5jb250ZXh0LmNhbnZhcylcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvZ3VpZGVvLmpzIiwiaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWluYm93IGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdpMzInLCAncmFpbmJvdycsIFsnY291bnQnXSlcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcblxuICAgIHRoaXMuX2RhdGFbMF0gPSAweDAwMDAwMFxuICAgIHRoaXMuX2RhdGFbMV0gPSAweDgwMDAwMFxuICAgIHRoaXMuX2RhdGFbMl0gPSAweDAwODAwMFxuICAgIHRoaXMuX2RhdGFbM10gPSAweDgwODAwMFxuICAgIHRoaXMuX2RhdGFbNF0gPSAweDAwMDA4MFxuICAgIHRoaXMuX2RhdGFbNV0gPSAweDgwMDA4MFxuICAgIHRoaXMuX2RhdGFbNl0gPSAweDAwODA4MFxuICAgIHRoaXMuX2RhdGFbN10gPSAweGMwYzBjMFxuICAgIHRoaXMuX2RhdGFbOF0gPSAweDgwODA4MFxuICAgIHRoaXMuX2RhdGFbOV0gPSAweGZmMDAwMFxuICAgIHRoaXMuX2RhdGFbMTBdID0gMHgwMGZmMDBcbiAgICB0aGlzLl9kYXRhWzExXSA9IDB4ZmZmZjAwXG4gICAgdGhpcy5fZGF0YVsxMl0gPSAweDAwMDBmZlxuICAgIHRoaXMuX2RhdGFbMTNdID0gMHhmZjAwZmZcbiAgICB0aGlzLl9kYXRhWzE0XSA9IDB4MDBmZmZmXG4gICAgdGhpcy5fZGF0YVsxNV0gPSAweGZmZmZmZlxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGdldCBibGFjayAoKSB7IHJldHVybiAwIH1cbiAgZ2V0IGRrcmVkICgpIHsgcmV0dXJuIDEgfVxuICBnZXQgZGtncmVlbiAoKSB7IHJldHVybiAyIH1cbiAgZ2V0IGRreWVsbG93ICgpIHsgcmV0dXJuIDMgfVxuICBnZXQgZGtibHVlICgpIHsgcmV0dXJuIDQgfVxuICBnZXQgZGtmdWNoc2lhICgpIHsgcmV0dXJuIDUgfVxuICBnZXQgdGVhbCAoKSB7IHJldHVybiA2IH1cbiAgZ2V0IGdyZXkgKCkgeyByZXR1cm4gNyB9XG4gIGdldCBka2dyZXkgKCkgeyByZXR1cm4gOCB9XG4gIGdldCByZWQgKCkgeyByZXR1cm4gOSB9XG4gIGdldCBsaW1lICgpIHsgcmV0dXJuIDEwIH1cbiAgZ2V0IHllbGxvdyAoKSB7IHJldHVybiAxMSB9XG4gIGdldCBibHVlICgpIHsgcmV0dXJuIDEyIH1cbiAgZ2V0IGZ1Y2hzaWEgKCkgeyByZXR1cm4gMTMgfVxuICBnZXQgY3lhbiAoKSB7IHJldHVybiAxNCB9XG4gIGdldCB3aGl0ZSAoKSB7IHJldHVybiAxNSB9XG5cbiAgZnJvbV9yZ2IgKGMpIHsgcmV0dXJuIF8uZmluZCh0aGlzLl9kYXRhLCBjKSB9XG5cbiAgdG9fcmdiIChjKSB7IHJldHVybiB0aGlzLl9kYXRhW2NdIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL3JhaW5ib3cuanMiLCJpbXBvcnQgeyBFbWl0dGVyIH0gZnJvbSAnLi4vLi4vZW1pdHRlci5qcydcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSAnLi4vLi4vdXRpbHMuanMnXG5pbXBvcnQgeyBkYXRhX3R5cGVfc2l6ZXMsIGRhdGFfdHlwZV9mbnMgfSBmcm9tICcuLi9tZW1vcnkuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaXAgZXh0ZW5kcyBFbWl0dGVyIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9tYWluID0gbWFpblxuICB9XG5cbiAgaW5pdCAoZGF0YV9zaXplID0gJ2k4JywgbmFtZSA9ICcnLCBrZXlzID0gW10sIG5vZGF0YSA9IGZhbHNlKSB7XG4gICAgbGV0IG1haW4gPSB0aGlzLl9tYWluXG5cbiAgICBmb3IgKGxldCBrIG9mIGtleXMpIHtcbiAgICAgIHRoaXNbJ18nICsga10gPSBtYWluLmRlZmF1bHQobmFtZSArICcuJyArIGspXG4gICAgfVxuXG4gICAgaWYgKCFub2RhdGEpIHtcbiAgICAgIGxldCBzeiA9IF8uaXNOdW1iZXIoZGF0YV9zaXplKSA/IGRhdGFfc2l6ZSA6IGRhdGFfdHlwZV9zaXplc1tkYXRhX3NpemVdXG4gICAgICB0aGlzLl9zaXplID0gKHRoaXMuX2NvdW50IHx8IDEpICogKHRoaXMuX3dpZHRoICogdGhpcy5faGVpZ2h0KSAqIHN6XG5cbiAgICAgIHRoaXMuX3RvcCA9IF8uZ2V0KG1haW4sICdtZW1fbWFwLicgKyBuYW1lICsgJy50b3AnLCAwKVxuICAgICAgdGhpcy5fYm90dG9tID0gdGhpcy5fdG9wICsgdGhpcy5fc2l6ZSAtIDFcblxuICAgICAgdGhpcy5fZGF0YSA9IG5ldyB3aW5kb3dbZGF0YV90eXBlX2Zuc1tfLmlzU3RyaW5nKGRhdGFfc2l6ZSkgPyBkYXRhX3NpemUgOiAnaTgnXSArICdBcnJheSddKHRoaXMubWVtb3J5LmJ1ZmZlciwgdGhpcy5fdG9wLCB0aGlzLl9zaXplKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fZm9yY2VfdXBkYXRlID0gZmFsc2VcbiAgICByZXR1cm4gdGhpcy5jbGVhcigpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuICBnZXQgbWVtb3J5ICgpIHsgcmV0dXJuIHRoaXMuX21haW4ubWVtb3J5IH1cblxuICBnZXQgZ3VpZGVvICgpIHsgcmV0dXJuIHRoaXMuX21haW4uZ3VpZGVvIH1cbiAgZ2V0IHJhaW5ib3cgKCkgeyByZXR1cm4gdGhpcy5ndWlkZW8ucmFpbmJvdyB9XG4gIGdldCBmb256byAoKSB7IHJldHVybiB0aGlzLmd1aWRlby5mb256byB9XG4gIGdldCBvcndlbGwgKCkgeyByZXR1cm4gdGhpcy5ndWlkZW8ub3J3ZWxsIH1cbiAgZ2V0IGJlYWdsZSAoKSB7IHJldHVybiB0aGlzLm9yd2VsbC5iZWFnbGUgfVxuICBnZXQgdmlvbGV0ICgpIHsgcmV0dXJuIHRoaXMuZ3VpZGVvLnZpb2xldCB9XG5cbiAgZ2V0IGRhdGEgKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9XG4gIGdldCB0b3AgKCkgeyByZXR1cm4gdGhpcy5fdG9wIH1cbiAgZ2V0IGJvdHRvbSAoKSB7IHJldHVybiB0aGlzLl9ib3R0b20gfVxuICBnZXQgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9zaXplIH1cblxuICBnZXQgd2lkdGggKCkgeyByZXR1cm4gdGhpcy5fd2lkdGggfVxuICBnZXQgaGVpZ2h0ICgpIHsgcmV0dXJuIHRoaXMuX2hlaWdodCB9XG5cbiAgZ2V0IGZvcmNlX3VwZGF0ZSAoKSB7IHJldHVybiB0aGlzLl9mb3JjZV91cGRhdGUgfVxuICBzZXQgZm9yY2VfdXBkYXRlICh2YWx1ZSkgeyB0aGlzLl9mb3JjZV91cGRhdGUgPSB2YWx1ZSB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLl9mb3JjZV91cGRhdGUgPSB0cnVlXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBpZiAodGhpcy5fZm9yY2VfdXBkYXRlKSB7XG4gICAgICB0aGlzLnJlZnJlc2goKVxuICAgICAgdGhpcy5fZm9yY2VfdXBkYXRlID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBjbGVhciAodiA9IDApIHtcbiAgICBpZiAodGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5fZGF0YS5maWxsKHYpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICByZWZyZXNoIChmbGlwID0gdHJ1ZSkge1xuICAgIHRoaXMuZ3VpZGVvLmZvcmNlX3VwZGF0ZSA9IHRydWVcbiAgICB0aGlzLmd1aWRlby5yZWZyZXNoKGZsaXApXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFzeW5jIChmbiwgYXJncywgZGVsYXkpIHtcbiAgICBhc3luYyh0aGlzLCBmbiwgYXJncywgZGVsYXkpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL2NoaXAuanMiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbnpvIGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdpOCcsICdmb256bycsIFsnY291bnQnLCAnd2lkdGgnLCAnaGVpZ2h0J10pXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIGRyYXcgKHgsIHksIGMsIGZnID0gMSwgYmcgPSAwKSB7XG4gICAgbGV0IHcgPSB0aGlzLl93aWR0aFxuICAgIGxldCBoID0gdGhpcy5faGVpZ2h0XG4gICAgbGV0IHN6ID0gdGhpcy5fc2l6ZVxuICAgIGxldCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGxldCBndWlkZW8gPSB0aGlzLmd1aWRlb1xuXG4gICAgbGV0IHB0ciA9IHRoaXMuX3RvcCArIGMgKiBzelxuICAgIGZvciAobGV0IGJ5ID0gMDsgYnkgPCBoOyBieSsrKSB7XG4gICAgICBsZXQgcGkgPSAoeSArIGJ5KSAqIHcgKyB4XG4gICAgICBmb3IgKGxldCBieCA9IDA7IGJ4IDwgdzsgYngrKykge1xuICAgICAgICBndWlkZW8ucGl4ZWwocGkrKywgZGF0YVtwdHIrK10gPyBmZyA6IGJnKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL2ZvbnpvLmpzIiwiaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcndlbGwgZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoMywgJ29yd2VsbCcsIFsnd2lkdGgnLCAnaGVpZ2h0J10pXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIGNsZWFyIChjaCA9ICcgJywgYmcgPSAwKSB7XG4gICAgdGhpcy5fZGF0YS5maWxsKDB4RkYwMDAwICYgY2guY2hhckNvZGVBdCgwKSB8IDB4MDAwMEZGICYgYmcpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGxldCB3ID0gdGhpcy5fd2lkdGhcbiAgICBsZXQgaCA9IHRoaXMuX2hlaWdodFxuICAgIGxldCBtZW0gPSB0aGlzLl9kYXRhXG4gICAgbGV0IGZudCA9IHRoaXMuZm9uem9cbiAgICBsZXQgZncgPSBmbnQud2lkdGhcbiAgICBsZXQgZmggPSBmbnQuaGVpZ2h0XG5cbiAgICBsZXQgaWR4ID0gMFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XG4gICAgICBsZXQgcHkgPSB5ICogZmhcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdzsgeCsrKSB7XG4gICAgICAgIGxldCBjID0gbWVtW2lkeF1cbiAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICBmbnQuZHJhdyh4ICogZncsIHB5LCBjLCBtZW1baWR4ICsgMV0sIG1lbVtpZHggKyAyXSlcbiAgICAgICAgfVxuICAgICAgICBpZHggKz0gM1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBkcmF3X2NoYXIgKHgsIHksIGMsIGZnLCBiZykge1xuICAgIGxldCBmbnQgPSB0aGlzLmZvbnpvXG4gICAgZm50LmRyYXcoeCAqIGZudC53aWR0aCwgeSAqIGZudC5oZWlnaHQsIGMsIGZnLCBiZylcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgaW5kZXggKHgsIHkpIHtcbiAgICByZXR1cm4gKCh5IC0gMSkgKiB0aGlzLl93aWR0aCArICh4IC0gMSkpICogM1xuICB9XG5cbiAgbGluZSAoeSkge1xuICAgIGxldCBsID0gdGhpcy5fd2lkdGggKiAzXG4gICAgcmV0dXJuIHsgc3RhcnQ6IHkgKiBsLCBlbmQ6ICh5ICsgMSkgKiBsIC0gMywgbGVuZ3RoOiBsIH1cbiAgfVxuXG4gIGNoYXJfYXQgKHgsIHkpIHtcbiAgICBsZXQgdGlkeCA9IHRoaXMuaW5kZXgoeCwgeSlcbiAgICBsZXQgbWVtID0gdGhpcy5fZGF0YVxuICAgIHJldHVybiB7IGNoOiBtZW1bdGlkeF0sIGZnOiBtZW1bdGlkeCArIDFdLCBiZzogbWVtW3RpZHggKyAyXSB9XG4gIH1cblxuICBwdXRfY2hhciAoY2gsIGZnID0gMSwgYmcgPSAwKSB7XG4gICAgc3dpdGNoIChjaC5jaGFyQ29kZUF0KDApKSB7XG4gICAgICBjYXNlIDEzOlxuICAgICAgY2FzZSAxMDpcbiAgICAgICAgcmV0dXJuIHRoaXMuY3IoKVxuICAgICAgY2FzZSA4OlxuICAgICAgICByZXR1cm4gdGhpcy5icygpXG4gICAgfVxuXG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MoKVxuICAgIHRoaXMuX2RhdGEuc2V0KFtjaC5jaGFyQ29kZUF0KDApLCBmZywgYmddLCB0aGlzLmluZGV4KHgsIHkpKVxuXG4gICAgdGhpcy5iZWFnbGUueCsrXG4gICAgaWYgKHRoaXMuYmVhZ2xlLnggPiB0aGlzLl93aWR0aCkge1xuICAgICAgdGhpcy5jcigpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZHJhd19jaGFyKHgsIHksIGNoLCBmZywgYmcpXG4gIH1cblxuICBwcmludCAodGV4dCwgZmcsIGJnKSB7XG4gICAgZm9yIChsZXQgYyBvZiB0ZXh0KSB7XG4gICAgICB0aGlzLnB1dF9jaGFyKGMsIGZnLCBiZylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHBvcyAoKSB7IHJldHVybiB7IHg6IHRoaXMuYmVhZ2xlLngsIHk6IHRoaXMuYmVhZ2xlLnkgfSB9XG5cbiAgbW92ZV90byAoeCwgeSkgeyByZXR1cm4gdGhpcy5iZWFnbGUubW92ZV90byh4LCB5KSB9XG5cbiAgbW92ZV9ieSAoeCwgeSkgeyByZXR1cm4gdGhpcy5iZWFnbGUubW92ZV9ieSh4LCB5KSB9XG5cbiAgYm9sICgpIHsgcmV0dXJuIHRoaXMubW92ZV90bygxLCB0aGlzLmJlYWdsZS55KSB9XG5cbiAgZW9sICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLl93aWR0aCwgdGhpcy5iZWFnbGUueSkgfVxuXG4gIGJvcyAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8oMSwgMSkgfVxuXG4gIGVvcyAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCkgfVxuXG4gIGJzICgpIHsgcmV0dXJuIHRoaXMubGVmdCgpLnB1dF9jaGFyKCcgJykubGVmdCgpIH1cblxuICBjciAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8oMSwgdGhpcy5iZWFnbGUueSArIDEpIH1cblxuICBsZiAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5iZWFnbGUueCwgdGhpcy5iZWFnbGUueSArIDEpIH1cblxuICB1cCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5iZWFnbGUueCwgdGhpcy5iZWFnbGUueSAtIDEpIH1cblxuICBsZWZ0ICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLmJlYWdsZS54IC0gMSwgdGhpcy5iZWFnbGUueSkgfVxuXG4gIGRvd24gKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuYmVhZ2xlLngsIHRoaXMuYmVhZ2xlLnkgKyAxKSB9XG5cbiAgcmlnaHQgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuYmVhZ2xlLnggKyAxLCB0aGlzLmJlYWdsZS55KSB9XG5cbiAgY2xlYXJfZW9sIChiZyA9IDApIHtcbiAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcygpXG4gICAgbGV0IHMgPSB0aGlzLmluZGV4KHgsIHkpXG4gICAgdGhpcy5fZGF0YS5maWxsKDB4MDAwMEZGICYgYmcsIHMsIHRoaXMuaW5kZXgodGhpcy5fd2lkdGgsIHkpIC0gcylcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY2xlYXJfZW9zIChiZyA9IDApIHtcbiAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcygpXG4gICAgbGV0IHMgPSB0aGlzLmluZGV4KHgsIHkpXG4gICAgdGhpcy5fZGF0YS5maWxsKDB4MDAwMEZGICYgYmcsIHMsIHRoaXMuX3NpemUgLSBzKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjbGVhcl9ib2wgKGJnID0gMCkge1xuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zKClcbiAgICBsZXQgcyA9IHRoaXMuaW5kZXgoeCwgeSlcbiAgICB0aGlzLl9kYXRhLmZpbGwoMHgwMDAwRkYgJiBiZywgcywgdGhpcy5pbmRleCgxLCB5KSAtIHMpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNsZWFyX2JvcyAoYmcgPSAwKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MoKVxuICAgIHRoaXMuX2RhdGEuZmlsbCgweDAwMDBGRiAmIGJnLCAwLCB0aGlzLmluZGV4KHgsIHkpIC0gMSlcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY29weV9saW5lIChzeSwgdHkpIHtcbiAgICBsZXQgc2kgPSB0aGlzLmxpbmUoc3kpXG4gICAgdGhpcy5fZGF0YS5jb3B5KHNpLnN0YXJ0LCB0aGlzLmxpbmUodHkpLCBzaS5sZW5ndGgpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNvcHlfY29sIChzeCwgdHgpIHtcbiAgICBsZXQgbWVtID0gdGhpcy5fZGF0YVxuICAgIHN4ICo9IDRcbiAgICB0eCAqPSA0XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLl9oZWlnaHQ7IHkrKykge1xuICAgICAgbGV0IGkgPSB0aGlzLmxpbmUoeSlcbiAgICAgIG1lbS5jb3B5KGkuc3RhcnQgKyBzeCwgaS5zdGFydCArIHR4LCAzKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgZXJhc2VfbGluZSAoeSwgYmcgPSAwKSB7XG4gICAgbGV0IGkgPSB0aGlzLmxpbmUoeSlcbiAgICB0aGlzLl9kYXRhLmZpbGwoMHgwMDAwRkYgJiBiZywgaS5zdGFydCwgaS5sZW5ndGgpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGVyYXNlX2NvbCAoeCwgYmcgPSAwKSB7XG4gICAgbGV0IG1lbSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgbHMgPSB0aGlzLmxpbmUoMCkuc3RhcnQgKyB4ICogM1xuICAgIGxldCBjID0gMHgwMDAwRkYgJiBiZ1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5faGVpZ2h0OyB5KyspIHtcbiAgICAgIG1lbS5maWxsKGMsIGxzLCAzKVxuICAgICAgbHMgKz0gdGhpcy5fd2lkdGggKiAzXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBzY3JvbGwgKGR5KSB7XG4gICAgaWYgKGR5ID4gMCkge1xuICAgICAgbGV0IGkgPSB0aGlzLmxpbmUoZHkgKyAxKVxuICAgICAgdGhpcy5fZGF0YS5jb3B5KGkuc3RhcnQsIDAsIHRoaXMuX3NpemUpXG4gICAgICBpID0gdGhpcy5saW5lKGR5KVxuICAgICAgbGV0IHMgPSBpLnN0YXJ0XG4gICAgICB0aGlzLl9kYXRhLmZpbGwoMCwgcywgdGhpcy5fc2l6ZSAtIHMpXG4gICAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgICBlbHNlIGlmIChkeSA8IDApIHtcbiAgICAgIGxldCBpID0gdGhpcy5saW5lKGR5ICsgMSlcbiAgICAgIHRoaXMuX2RhdGEuY29weShpLnN0YXJ0LCAwLCB0aGlzLl9zaXplKVxuICAgICAgaSA9IHRoaXMubGluZShkeSlcbiAgICAgIGxldCBzID0gaS5zdGFydFxuICAgICAgdGhpcy5fZGF0YS5maWxsKDAsIHMsIHRoaXMuX3NpemUgLSBzKVxuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvb3J3ZWxsLmpzIiwiaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWFnbGUgZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoMiwgJ2JlYWdsZScsIFsnd2lkdGgnLCAnaGVpZ2h0JywgJ2NvbG9yJywgJ2JsaW5rcmF0ZSddKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuICAgIHRoaXMuX3ggPSAwXG4gICAgdGhpcy5feSA9IDBcbiAgICB0aGlzLl9sYXN0ID0gMFxuICAgIHRoaXMuX2JsaW5rX2hpZGRlbiA9IGZhbHNlXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBpZiAodCAtIHRoaXMuX2xhc3QgPj0gdGhpcy5fYmxpbmtyYXRlKSB7XG4gICAgICB0aGlzLmJsaW5rKClcbiAgICAgIHRoaXMuX2xhc3QgPSB0XG4gICAgfVxuICB9XG5cbiAgZ2V0IHggKCkgeyByZXR1cm4gdGhpcy5feCB9XG4gIHNldCB4ICh2YWx1ZSkgeyB0aGlzLl94ID0gdmFsdWUgfVxuXG4gIGdldCB5ICgpIHsgcmV0dXJuIHRoaXMuX3kgfVxuICBzZXQgeSAodmFsdWUpIHsgdGhpcy5feSA9IHZhbHVlIH1cblxuICBnZXQgY29sb3IgKCkgeyByZXR1cm4gdGhpcy5fY29sb3IgfVxuICBzZXQgY29sb3IgKHZhbHVlKSB7IHRoaXMuX2NvbG9yID0gdmFsdWUgfVxuXG4gIGdldCBibGlua3JhdGUgKCkgeyByZXR1cm4gdGhpcy5fYmxpbmtyYXRlIH1cbiAgc2V0IGJsaW5rcmF0ZSAodmFsdWUpIHsgdGhpcy5fYmxpbmtyYXRlID0gdmFsdWUgfVxuXG4gIGJsaW5rICgpIHtcbiAgICB0aGlzLl9ibGlua19oaWRkZW4gPSAhdGhpcy5fYmxpbmtfaGlkZGVuXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIG1vdmVfdG8gKHgsIHkpIHtcbiAgICBsZXQgdyA9IHRoaXMub3J3ZWxsLndpZHRoXG4gICAgbGV0IGggPSB0aGlzLm9yd2VsbC5oZWlnaHRcblxuICAgIGlmICh4ID4gdykge1xuICAgICAgeCA9IHdcbiAgICB9XG4gICAgZWxzZSBpZiAoeCA8IDEpIHtcbiAgICAgIHggPSAxXG4gICAgfVxuXG4gICAgaWYgKHkgPiBoKSB7XG4gICAgICB5ID0gaFxuICAgIH1cbiAgICBlbHNlIGlmICh5IDwgMSkge1xuICAgICAgeSA9IDFcbiAgICB9XG5cbiAgICB0aGlzLl94ID0geFxuICAgIHRoaXMuX3kgPSB5XG5cbiAgICByZXR1cm4gdGhpcy5kcmF3KHgsIHkpXG4gIH1cblxuICBtb3ZlX2J5ICh4LCB5KSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5feCArIHgsIHRoaXMuX3kgKyB5KSB9XG5cbiAgZHJhdyAoeCwgeSkge1xuICAgIGxldCB3ID0gdGhpcy5fd2lkdGhcbiAgICBsZXQgaCA9IHRoaXMuX2hlaWdodFxuICAgIGxldCBjID0gdGhpcy5fY29sb3JcbiAgICBsZXQgZ3VpZGVvID0gdGhpcy5ndWlkZW9cblxuICAgIGZvciAobGV0IGJ5ID0gMDsgYnkgPCBoOyBieSsrKSB7XG4gICAgICBsZXQgcGkgPSAoeSArIGJ5KSAqIHcgKyB4XG4gICAgICBmb3IgKGxldCBieCA9IDA7IGJ4IDwgdzsgYngrKykge1xuICAgICAgICBndWlkZW8ucGl4ZWwocGkrKywgYylcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy9iZWFnbGUuanMiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpb2xldCBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuX2xpc3QgPSBbXVxuXG4gICAgdGhpcy5pbml0KCdpOCcsICd2aW9sZXQnLCBbJ2NvdW50JywgJ3dpZHRoJywgJ2hlaWdodCddKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICBjbGVhciAodiA9IDApIHtcbiAgICB0aGlzLl9saXN0ID0gW11cbiAgICByZXR1cm4gc3VwZXIuY2xlYXIodilcbiAgfVxuXG4gIGZpbmQgKG5hbWUpIHtcbiAgICBmb3IgKGxldCBzIG9mIHRoaXMuX2xpc3QpIHtcbiAgICAgIGlmIChzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHNcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGFkZCAobmFtZSwgZnJhbWUsIHgsIHksIHopIHtcbiAgICB0aGlzLl9saXN0LnB1c2goeyBuYW1lLCBmcmFtZSwgeCwgeSwgeiwgaW5kZXg6IE51bWJlci5NQVhfVkFMVUUgfSlcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZGVsIChuYW1lKSB7XG4gICAgbGV0IHMgPSB0aGlzLmZpbmQobmFtZSlcbiAgICBpZiAocykge1xuICAgICAgdGhpcy5fbGlzdC5zcGxpY2Uocy5pbmRleCwgMSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIG1vdmUgKG5hbWUsIHgsIHksIHopIHtcbiAgICBsZXQgcyA9IHRoaXMuZmluZChuYW1lKVxuICAgIGlmIChzKSB7XG4gICAgICBzLnggPSB4XG4gICAgICBzLnkgPSB5XG4gICAgICBpZiAoeikge1xuICAgICAgICBzLnogPSB6XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBtb3ZlX2J5IChuYW1lLCB4LCB5KSB7XG4gICAgbGV0IHMgPSB0aGlzLmZpbmQobmFtZSlcbiAgICBpZiAocykge1xuICAgICAgcy54ID0geFxuICAgICAgcy55ID0geVxuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgbGV0IHN3ID0gdGhpcy5fd2lkdGhcbiAgICBsZXQgc2ggPSB0aGlzLl9oZWlnaHRcbiAgICBsZXQgc2wgPSB0aGlzLl9saXN0XG4gICAgbGV0IHNzID0gdGhpcy5fc2l6ZVxuICAgIGxldCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGxldCBndWlkZW8gPSB0aGlzLmd1aWRlb1xuXG4gICAgZm9yIChsZXQgcyBvZiBfLnNvcnRCeShzbCwgJ3onKSkge1xuICAgICAgbGV0IHB0ciA9IHNsICsgcy5mcmFtZSAqIHNzXG4gICAgICBmb3IgKGxldCBieSA9IDA7IGJ5IDwgc2g7IGJ5KyspIHtcbiAgICAgICAgbGV0IHBpID0gKHMueSArIGJ5KSAqIHN3ICsgcy54XG4gICAgICAgIGZvciAobGV0IGJ4ID0gMDsgYnggPCBzdzsgYngrKykge1xuICAgICAgICAgIGd1aWRlby5waXhlbChwaSsrLCBkYXRhW3B0cisrXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL3Zpb2xldC5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuXG5leHBvcnQgY2xhc3MgT3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IgKGd1aWRlbywgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuZ3VpZGVvID0gZ3VpZGVvXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLmxhc3QgPSAwXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIHRoaXMuY2FudmFzID0gbmV3IFBJWEkuQ2FudmFzQnVmZmVyKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuXG4gICAgdGhpcy50ZXggPSBQSVhJLlRleHR1cmUuZnJvbUNhbnZhcyh0aGlzLmNhbnZhcy5jYW52YXMsIFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVClcbiAgICB0aGlzLnRleC5zY2FsZU1vZGUgPSBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1RcblxuICAgIHRoaXMuc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMudGV4KVxuXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuY2FudmFzLmdldENvbnRleHQoJzJkJywgeyBhbHBoYTogdHJ1ZSwgYW50aWFsaWFzOiBmYWxzZSB9KVxuICB9XG5cbiAgdGljayAodCkge1xuICB9XG5cbiAgcmVzZXQgKCkge1xuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuY2FudmFzKSB7XG4gICAgICB0aGlzLmNhbnZhcy5kZXN0cm95KClcbiAgICAgIHRoaXMuY2FudmFzID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5ndWlkZW8uZm9yY2VfdXBkYXRlID0gdHJ1ZVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgU2NyZWVuT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChndWlkZW8sIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihndWlkZW8sIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLmNyZWF0ZSgpXG5cbiAgICB0aGlzLnNwcml0ZS54ID0gdGhpcy5ndWlkZW8ub2Zmc2V0X3ggKyB0aGlzLmd1aWRlby5tYXJnaW5zX3ggLyAyXG4gICAgdGhpcy5zcHJpdGUueSA9IHRoaXMuZ3VpZGVvLm9mZnNldF95ICsgdGhpcy5ndWlkZW8ubWFyZ2luc195IC8gMlxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgU2NhbmxpbmVzT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChndWlkZW8sIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihndWlkZW8sIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLmdhcCA9IF8uZ2V0KG9wdGlvbnMsICdnYXAnLCAzKVxuICAgIHRoaXMuYWxwaGEgPSBfLmdldChvcHRpb25zLCAnYWxwaGEnLCAwLjM1KVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuXG4gICAgbGV0IGEgPSB0aGlzLmFscGhhICogMjU1XG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIGxldCBwaXhlbHMgPSBkYXRhLmRhdGFcbiAgICBsZXQgc3ogPSB0aGlzLndpZHRoICogNFxuICAgIGxldCBpZHhcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5ICs9IHRoaXMuZ2FwKSB7XG4gICAgICBpZHggPSB5ICogc3pcbiAgICAgIGZvciAobGV0IGkgPSBpZHg7IGkgPCBpZHggKyBzejsgaSArPSA0KSB7XG4gICAgICAgIHBpeGVscy5zZXQoWzAsIDAsIDAsIGFdLCBpKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApXG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBTY2FubGluZU92ZXJsYXkgZXh0ZW5kcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAoZ3VpZGVvLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIoZ3VpZGVvLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5yZWZyZXNoID0gXy5nZXQob3B0aW9ucywgJ3JlZnJlc2gnLCA1MClcbiAgICB0aGlzLnNwZWVkID0gXy5nZXQob3B0aW9ucywgJ3NwZWVkJywgMTYpXG4gICAgdGhpcy5hbHBoYSA9IF8uZ2V0KG9wdGlvbnMsICdhbHBoYScsIDAuMSlcblxuICAgIHRoaXMuY3JlYXRlKClcblxuICAgIGxldCBkYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICBsZXQgcGl4ZWxzID0gZGF0YS5kYXRhXG4gICAgbGV0IHN6ID0gdGhpcy53aWR0aCAqIDRcbiAgICBsZXQgbGVuID0gdGhpcy5oZWlnaHQgKiBzelxuICAgIGxldCBsID0gMFxuICAgIGxldCBoID0gdGhpcy5oZWlnaHRcbiAgICBsZXQgYSA9IHRoaXMuYWxwaGEgKiAyNTVcbiAgICBsZXQgYWFcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbjsgeSArPSBzeikge1xuICAgICAgYWEgPSBsIC8gaCAqIGFcbiAgICAgIGZvciAobGV0IHggPSB5OyB4IDwgeSArIHN6OyB4ICs9IDQpIHtcbiAgICAgICAgcGl4ZWxzLnNldChbMjUsIDI1LCAyNSwgYWFdLCB4KVxuICAgICAgfVxuICAgICAgbCsrXG4gICAgfVxuICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMClcblxuICAgIHRoaXMuc3ByaXRlLnkgPSAtdGhpcy5zcHJpdGUuaGVpZ2h0XG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgaWYgKHQgLSB0aGlzLmxhc3QgPj0gdGhpcy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLnNwcml0ZS55ICs9IHRoaXMuc3BlZWRcbiAgICAgIGlmICh0aGlzLnNwcml0ZS55ID4gdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgdGhpcy5zcHJpdGUueSA9IC10aGlzLnNwcml0ZS5oZWlnaHRcbiAgICAgIH1cbiAgICAgIHRoaXMubGFzdCA9IHRcblxuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIE5vaXNlc092ZXJsYXkgZXh0ZW5kcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAoZ3VpZGVvLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIoZ3VpZGVvLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5yZWZyZXNoID0gXy5nZXQob3B0aW9ucywgJ3JlZnJlc2gnLCAyNTApXG4gICAgdGhpcy5jb3VudCA9IF8uZ2V0KG9wdGlvbnMsICdjb3VudCcsIDgpXG4gICAgdGhpcy5yYXRlID0gXy5nZXQob3B0aW9ucywgJ3JhdGUnLCAwLjg1KVxuICAgIHRoaXMucmVkID0gXy5nZXQob3B0aW9ucywgJ3JlZCcsIDEwMClcbiAgICB0aGlzLmdyZWVuID0gXy5nZXQob3B0aW9ucywgJ2dyZWVuJywgMTAwKVxuICAgIHRoaXMuYmx1ZSA9IF8uZ2V0KG9wdGlvbnMsICdibHVlJywgMTAwKVxuICAgIHRoaXMuYWxwaGEgPSBfLmdldChvcHRpb25zLCAnYWxwaGEnLCAwLjE1KVxuXG4gICAgdGhpcy5ub2lzZXMgPSB7fVxuXG4gICAgbGV0IGEgPSB0aGlzLmFscGhhICogMjU1XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmNvdW50OyBjKyspIHtcbiAgICAgIGxldCBub2lzZSA9IG5ldyBPdmVybGF5KHRoaXMuZ3VpZGVvLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgIG5vaXNlLmNyZWF0ZSgpXG4gICAgICBub2lzZS5zcHJpdGUudmlzaWJsZSA9IGMgPT09IDBcblxuICAgICAgbGV0IGRhdGEgPSBub2lzZS5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgIGxldCBwaXhlbHMgPSBkYXRhLmRhdGFcbiAgICAgIGxldCBsZW4gPSBwaXhlbHMubGVuZ3RoXG4gICAgICBsZXQgciA9IHRoaXMucmVkXG4gICAgICBsZXQgZyA9IHRoaXMuZ3JlZW5cbiAgICAgIGxldCBiID0gdGhpcy5ibHVlXG4gICAgICBsZXQgX3JhdGUgPSB0aGlzLnJhdGVcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPj0gX3JhdGUpIHtcbiAgICAgICAgICBwaXhlbHMuc2V0KFtNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiByKSwgTWF0aC50cnVuYyhNYXRoLnJhbmRvbSgpICogZyksIE1hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIGIpLCBhXSwgaSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbm9pc2UuY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMClcbiAgICAgIHRoaXMubm9pc2VzW2NdID0gbm9pc2VcbiAgICAgIHRoaXMuZ3VpZGVvLl9tYWluLnN0YWdlLmFkZENoaWxkKG5vaXNlLnNwcml0ZSlcbiAgICB9XG5cbiAgICB0aGlzLm5vaXNlS2V5cyA9IF8ua2V5cyh0aGlzLm5vaXNlcylcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKVxuICAgIGZvciAobGV0IGsgaW4gdGhpcy5ub2lzZXMpIHtcbiAgICAgIGxldCBub2lzZSA9IHRoaXMubm9pc2VzW2tdXG4gICAgICBub2lzZS5kZXN0cm95KClcbiAgICB9XG4gICAgdGhpcy5ub2lzZXMgPSB7fVxuICAgIHRoaXMubm9pc2VLZXlzID0gW11cbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBpZiAodCAtIHRoaXMubGFzdCA+PSB0aGlzLnJlZnJlc2gpIHtcbiAgICAgIGZvciAobGV0IGsgb2YgdGhpcy5ub2lzZUtleXMpIHtcbiAgICAgICAgdGhpcy5ub2lzZXNba10uc3ByaXRlLnZpc2libGUgPSBmYWxzZVxuICAgICAgfVxuICAgICAgbGV0IG5vaXNlID0gdGhpcy5ub2lzZUtleXNbTWF0aC50cnVuYyhNYXRoLnJhbmRvbSgpICogdGhpcy5ub2lzZUtleXMubGVuZ3RoKV1cbiAgICAgIHRoaXMubm9pc2VzW25vaXNlXS5zcHJpdGUudmlzaWJsZSA9IHRydWVcbiAgICAgIHRoaXMubGFzdCA9IHRcblxuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIFJnYk92ZXJsYXkgZXh0ZW5kcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAoZ3VpZGVvLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIoZ3VpZGVvLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5hbHBoYSA9IF8uZ2V0KG9wdGlvbnMsICdhbHBoYScsIDAuMDc1KVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuXG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIGxldCBwaXhlbHMgPSBkYXRhLmRhdGFcbiAgICBsZXQgbGVuID0gcGl4ZWxzLmxlbmd0aFxuICAgIGxldCBhID0gdGhpcy5hbHBoYSAqIDI1NVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEyKSB7XG4gICAgICBwaXhlbHMuc2V0KFsxMDAsIDEwMCwgMTAwLCBhXSwgaSlcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgQ3J0T3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChndWlkZW8sIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihndWlkZW8sIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLnJhZGl1cyA9IF8uZ2V0KG9wdGlvbnMsICdyYWRpdXMnLCAwLjI1KVxuICAgIHRoaXMuaW5zaWRlX2FscGhhID0gXy5nZXQob3B0aW9ucywgJ2luc2lkZV9hbHBoYScsIDAuMilcbiAgICB0aGlzLm91dHNpZGVfYWxwaGEgPSBfLmdldChvcHRpb25zLCAnb3V0c2lkZV9hbHBoYScsIDAuMTUpXG5cbiAgICB0aGlzLmNyZWF0ZSgpXG5cbiAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2RhcmtlcidcbiAgICBsZXQgZ3JhZGllbnQgPSB0aGlzLmNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy5oZWlnaHQgLyAyLCB0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyLCB0aGlzLmhlaWdodCAvIHRoaXMucmFkaXVzKVxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsIDI1NSwgMjU1LCAnICsgdGhpcy5pbnNpZGVfYWxwaGEgKyAnKScpXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDAsIDAsIDAsICcgKyB0aGlzLm91dHNpZGVfYWxwaGEgKyAnKScpXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50XG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIHRoaXMuY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInXG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBPdmVybGF5cyB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4sIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX21haW4gPSBtYWluXG5cbiAgICBsZXQgc3RhZ2UgPSBtYWluLnN0YWdlXG4gICAgbGV0IHJlbmRlcmVyID0gbWFpbi5yZW5kZXJlclxuXG4gICAgbGV0IHdpZHRoID0gcmVuZGVyZXIud2lkdGhcbiAgICBsZXQgaGVpZ2h0ID0gcmVuZGVyZXIuaGVpZ2h0XG4gICAgbGV0IHNjYWxlID0gdGhpcy5zY2FsZVxuICAgIGxldCBtYXJnaW5zX3ggPSB0aGlzLm1hcmdpbnNfeFxuICAgIGxldCBtYXJnaW5zX3kgPSB0aGlzLm1hcmdpbnNfeVxuXG4gICAgdGhpcy5fbGlzdCA9IHt9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ3NjcmVlbicpKSB7XG4gICAgICB0aGlzLl9saXN0LnNjcmVlbiA9IG5ldyBTY3JlZW5PdmVybGF5KHRoaXMsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQsIF8uZ2V0KG9wdGlvbnMsICdzY3JlZW4nKSlcbiAgICAgIHRoaXMuX2xpc3Quc2NyZWVuLnNwcml0ZS5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KHNjYWxlLCBzY2FsZSlcbiAgICAgIHN0YWdlLmFkZENoaWxkKHRoaXMuX2xpc3Quc2NyZWVuLnNwcml0ZSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ3NjYW5saW5lcycpKSB7XG4gICAgICB0aGlzLl9saXN0LnNjYW5saW5lcyA9IG5ldyBTY2FubGluZXNPdmVybGF5KHRoaXMsIHdpZHRoLCBoZWlnaHQsIF8uZ2V0KG9wdGlvbnMsICdzY2FubGluZXMnKSlcbiAgICAgIHN0YWdlLmFkZENoaWxkKHRoaXMuX2xpc3Quc2NhbmxpbmVzLnNwcml0ZSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ3NjYW5saW5lJykpIHtcbiAgICAgIHRoaXMuX2xpc3Quc2NhbmxpbmUgPSBuZXcgU2NhbmxpbmVPdmVybGF5KHRoaXMsIHdpZHRoLCBoZWlnaHQsIF8uZ2V0KG9wdGlvbnMsICdzY2FubGluZScpKVxuICAgICAgc3RhZ2UuYWRkQ2hpbGQodGhpcy5fbGlzdC5zY2FubGluZS5zcHJpdGUpXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdyZ2InKSkge1xuICAgICAgdGhpcy5fbGlzdC5yZ2IgPSBuZXcgUmdiT3ZlcmxheSh0aGlzLCB3aWR0aCwgaGVpZ2h0LCBfLmdldChvcHRpb25zLCAncmdiJykpXG4gICAgICBzdGFnZS5hZGRDaGlsZCh0aGlzLl9saXN0LnJnYi5zcHJpdGUpXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdub2lzZXMnKSkge1xuICAgICAgdGhpcy5fbGlzdC5ub2lzZXMgPSBuZXcgTm9pc2VzT3ZlcmxheSh0aGlzLCB3aWR0aCwgaGVpZ2h0LCBfLmdldChvcHRpb25zLCAnbm9pc2VzJykpXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdjcnQnKSkge1xuICAgICAgdGhpcy5fbGlzdC5jcnQgPSBuZXcgQ3J0T3ZlcmxheSh0aGlzLCB3aWR0aCwgaGVpZ2h0LCBfLmdldChvcHRpb25zLCAnY3J0JykpXG4gICAgICBzdGFnZS5hZGRDaGlsZCh0aGlzLl9saXN0LmNydC5zcHJpdGUpXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdtb25pdG9yJykpIHtcbiAgICAgIGxldCB0ZXggPSBQSVhJLlRleHR1cmUuZnJvbUltYWdlKCcuL2J1aWxkLycgKyByZXF1aXJlKCdmaWxlP25hbWU9YXNzZXRzL1twYXRoXS9bbmFtZV0uW2V4dF0hLi4vLi4vYXNzZXRzL2ltZ3MvY3J0LnBuZycpKVxuICAgICAgdGhpcy5fbGlzdC5tb25pdG9yID0gbmV3IFBJWEkuU3ByaXRlKHRleClcbiAgICAgIHRoaXMuX2xpc3QubW9uaXRvci53aWR0aCA9IHdpZHRoICsgbWFyZ2luc194XG4gICAgICB0aGlzLl9saXN0Lm1vbml0b3IuaGVpZ2h0ID0gaGVpZ2h0ICsgbWFyZ2luc195XG4gICAgICB0aGlzLl9saXN0Lm1vbml0b3IueCA9IG1hcmdpbnNfeCAvIC0yXG4gICAgICB0aGlzLl9saXN0Lm1vbml0b3IueSA9IG1hcmdpbnNfeSAvIC0yXG4gICAgICBzdGFnZS5hZGRDaGlsZCh0aGlzLl9saXN0Lm1vbml0b3IpXG4gICAgfVxuICB9XG5cbiAgdGljayAoZGVsYXkpIHtcbiAgICBmb3IgKGxldCBrIGluIHRoaXMuX2xpc3QpIHtcbiAgICAgIGlmICh0aGlzLl9saXN0W2tdLnRpY2spIHtcbiAgICAgICAgdGhpcy5fbGlzdFtrXS50aWNrKGRlbGF5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBmb3IgKGxldCBrIGluIHRoaXMuX2xpc3QpIHtcbiAgICAgIGlmICh0aGlzLl9saXN0W2tdLnJlc2V0KSB7XG4gICAgICAgIHRoaXMuX2xpc3Rba10ucmVzZXQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGZvciAobGV0IGsgaW4gdGhpcy5fbGlzdCkge1xuICAgICAgaWYgKHRoaXMuX2xpc3Rba10uZGVzdHJveSkge1xuICAgICAgICB0aGlzLl9saXN0W2tdLmRlc3Ryb3koKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSAoKSB7XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vb3ZlcmxheXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvYXNzZXRzL2ltZ3MvL2NydC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmlsZS1sb2FkZXI/bmFtZT1hc3NldHMvW3BhdGhdL1tuYW1lXS5bZXh0XSEuL2Fzc2V0cy9pbWdzL2NydC5wbmdcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXAgPSB7XG5cdFwiLi9jcnQucG5nXCI6IDMwLFxuXHRcIi4vdGVzdC5wbmdcIjogMzFcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMjk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9pbWdzIC4vfi9maWxlLWxvYWRlcj9uYW1lPWFzc2V0cy9bbmFtZV0uW2V4dF0hXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2NydC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmlsZS1sb2FkZXI/bmFtZT1hc3NldHMvW25hbWVdLltleHRdIS4vYXNzZXRzL2ltZ3MvY3J0LnBuZ1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3Rlc3QucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpbGUtbG9hZGVyP25hbWU9YXNzZXRzL1tuYW1lXS5bZXh0XSEuL2Fzc2V0cy9pbWdzL3Rlc3QucG5nXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtlbiBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgnaTMyJywgJ2tlbicsIFsnY291bnQnXSlcblxuICAgIHRoaXMuX29uS2V5ZG93biA9IHRoaXMub25LZXlkb3duLmJpbmQodGhpcylcbiAgICB0aGlzLl9vbktleXVwID0gdGhpcy5vbktleXVwLmJpbmQodGhpcylcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5dXApXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBzdXBlci5yZXNldCgpXG5cbiAgICB0aGlzLl9tb2RzID0gMFxuICAgIHRoaXMuX2pveXN0aWNrID0gMFxuICAgIHRoaXMuX2tleXMgPSB7fVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5dXApXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICBnZXQgbW9kcyAoKSB7IHJldHVybiB0aGlzLl9tb2RzIH1cbiAgZ2V0IGpveXN0aWNrICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrIH1cbiAgZ2V0IGtleXMgKCkgeyByZXR1cm4gdGhpcy5fa2V5cyB9XG5cbiAgZ2V0IHNoaWZ0ICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDAxIH1cbiAgZ2V0IGN0cmwgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyAmIDB4MDIgfVxuICBnZXQgYWx0ICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDA0IH1cbiAgZ2V0IG1ldGEgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyAmIDB4MDggfVxuICBnZXQgbnVtcGFkICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDEwIH1cbiAgZ2V0IGJ0bjAgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDEwIH1cbiAgZ2V0IGJ0bjEgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDIwIH1cbiAgZ2V0IGJ0bjIgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDQwIH1cbiAgZ2V0IGJ0bjMgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDgwIH1cbiAgZ2V0IGJ0bjQgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDEwMCB9XG4gIGdldCB1cCAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MDEgfVxuICBnZXQgZG93biAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MDIgfVxuICBnZXQgcmlnaHQgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDA0IH1cbiAgZ2V0IGxlZnQgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDA4IH1cblxuICBldmVudERldGFpbHMgKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBlLmtleSxcbiAgICAgIGtleUNvZGU6IGUua2V5Q29kZSxcbiAgICAgIGtleXM6IHRoaXMuX2tleXMsXG4gICAgICBtb2RzOiB0aGlzLl9tb2RzLFxuICAgICAgam95c3RpY2s6IHRoaXMuX2pveXN0aWNrLFxuICAgICAgc2hpZnQ6IHRoaXMuc2hpZnQsXG4gICAgICBjdHJsOiB0aGlzLmN0cmwsXG4gICAgICBhbHQ6IHRoaXMuYWx0LFxuICAgICAgbWV0YTogdGhpcy5tZXRhLFxuICAgICAgbnVtcGFkOiB0aGlzLm51bXBhZCxcbiAgICAgIGJ0bjA6IHRoaXMuYnRuMCxcbiAgICAgIGJ0bjE6IHRoaXMuYnRuMSxcbiAgICAgIGJ0bjI6IHRoaXMuYnRuMixcbiAgICAgIGJ0bjM6IHRoaXMuYnRuMyxcbiAgICAgIGJ0bjQ6IHRoaXMuYnRuNCxcbiAgICAgIHVwOiB0aGlzLnVwLFxuICAgICAgZG93bjogdGhpcy5kb3duLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgfVxuICB9XG5cbiAgb25LZXlkb3duIChlKSB7XG4gICAgbGV0IG51bXBhZCA9IGUubG9jYXRpb24gPT09IDNcbiAgICBpZiAobnVtcGFkKSB7XG4gICAgICB0aGlzLl9tb2RzIHw9IDB4MTBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9tb2RzICY9IH4weDEwXG4gICAgfVxuICAgIHRoaXMuX2tleXNbZS5rZXlDb2RlXSA9IDFcblxuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ1NoaWZ0JzpcbiAgICAgICAgdGhpcy5fbW9kcyB8PSAweDAxXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0NvbnRyb2wnOlxuICAgICAgICB0aGlzLl9tb2RzIHw9IDB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQWx0JzpcbiAgICAgICAgdGhpcy5fbW9kcyB8PSAweDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ01ldGEnOlxuICAgICAgICB0aGlzLl9tb2RzIHw9IDB4MDhcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnOCc6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDAxXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICcyJzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDJcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzQnOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwNFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDA4XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzYnOiAvLyBudW1wYWQgNlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwOFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3onOiAvLyBidXR0b24gMFxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDEwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3gnOiAvLyBidXR0b24gMVxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDIwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2MnOiAvLyBidXR0b24gMlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDQwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJyAnOiAvLyBidXR0b24gM1xuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDgwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0VudGVyJzogLy8gYnV0dG9uIDRcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgxMDBcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ2tleS5kb3duJywgdGhpcy5ldmVudERldGFpbHMoZSkpXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICBvbktleXVwIChlKSB7XG4gICAgbGV0IG51bXBhZCA9IGUubG9jYXRpb24gPT09IDNcbiAgICBpZiAobnVtcGFkKSB7XG4gICAgICB0aGlzLl9tb2RzIHw9IDB4MTBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9tb2RzICY9IH4weDEwXG4gICAgfVxuICAgIHRoaXMuX2tleXNbZS5rZXlDb2RlXSA9IDBcblxuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ1NoaWZ0JzpcbiAgICAgICAgdGhpcy5fbW9kcyAmPSB+MHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdDb250cm9sJzpcbiAgICAgICAgdGhpcy5fbW9kcyAmPSB+MHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBbHQnOlxuICAgICAgICB0aGlzLl9tb2RzICY9IH4weDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ01ldGEnOlxuICAgICAgICB0aGlzLl9tb2RzICY9IH4weDA4XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICc4JzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDAxXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnMic6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwMlxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzQnOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDRcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDhcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnNic6IC8vIG51bXBhZCA2XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwOFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3onOiAvLyBidXR0b24gMFxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgxMFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICd4JzogLy8gYnV0dG9uIDFcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MjBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnYyc6IC8vIGJ1dHRvbiAyXG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDQwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJyAnOiAvLyBidXR0b24gM1xuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHg4MFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdFbnRlcic6IC8vIGJ1dHRvbiA0XG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDEwMFxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgna2V5LnVwJywgdGhpcy5ldmVudERldGFpbHMoZSkpXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL2tlbi5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlja2V5IGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdpMzInLCAnbWlja2V5JywgWydjb3VudCcsICdkYmxDbGlja0RlbGF5JywgJ2RibENsaWNrRGlzdGFuY2UnXSlcblxuICAgIGxldCBzdGFnZSA9IG1haW4uc3RhZ2VcbiAgICBpZiAoc3RhZ2UpIHtcbiAgICAgIHN0YWdlLmludGVyYWN0aXZlID0gdHJ1ZVxuXG4gICAgICB0aGlzLl9vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKVxuICAgICAgdGhpcy5fb25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcylcbiAgICAgIHRoaXMuX29uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcylcblxuICAgICAgc3RhZ2Uub24oJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duKVxuICAgICAgc3RhZ2Uub24oJ3JpZ2h0ZG93bicsIHRoaXMuX29uTW91c2VEb3duKVxuICAgICAgc3RhZ2Uub24oJ3RvdWNoc3RhcnQnLCB0aGlzLl9vbk1vdXNlRG93bilcblxuICAgICAgc3RhZ2Uub24oJ21vdXNlbW92ZScsIHRoaXMuX29uTW91c2VNb3ZlKVxuXG4gICAgICBzdGFnZS5vbignbW91c2V1cCcsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9uKCd0b3VjaGVuZCcsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9uKCdtb3VzZXVwb3V0c2lkZScsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9uKCd0b3VjaGVuZG91dHNpZGUnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgfVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuXG4gICAgdGhpcy5feCA9IDBcbiAgICB0aGlzLl95ID0gMFxuICAgIHRoaXMuX2J0bnMgPSAwXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgbGV0IHN0YWdlID0gdGhpcy5fbWFpbi5zdGFnZVxuICAgIGlmIChzdGFnZSkge1xuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlRG93bilcbiAgICAgIHN0YWdlLm9mZigncmlnaHRkb3duJywgdGhpcy5fb25Nb3VzZURvd24pXG4gICAgICBzdGFnZS5vZmYoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vbk1vdXNlRG93bilcblxuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSlcblxuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub2ZmKCd0b3VjaGVuZCcsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9mZignbW91c2V1cG91dHNpZGUnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgICBzdGFnZS5vZmYoJ3RvdWNoZW5kb3V0c2lkZScsIHRoaXMuX29uTW91c2VVcClcbiAgICB9XG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICBnZXQgeCAoKSB7IHJldHVybiB0aGlzLl94IH1cbiAgc2V0IHggKHZhbHVlKSB7XG4gICAgdGhpcy5feCA9IHZhbHVlXG4gIH1cblxuICBnZXQgeSAoKSB7IHJldHVybiB0aGlzLl95IH1cbiAgc2V0IHkgKHZhbHVlKSB7XG4gICAgdGhpcy5feSA9IHZhbHVlXG4gIH1cblxuICBnZXQgYnRucyAoKSB7IHJldHVybiB0aGlzLl9idG5zIH1cbiAgc2V0IGJ0bnMgKHZhbHVlKSB7XG4gICAgdGhpcy5fYnRucyA9IHZhbHVlXG4gIH1cblxuICBnZXQgZGJsQ2xpY2tEZWxheSAoKSB7IHJldHVybiB0aGlzLl9kYmxDbGlja0RlbGF5IH1cbiAgc2V0IGRibENsaWNrRGVsYXkgKHZhbHVlKSB7XG4gICAgdGhpcy5fZGJsQ2xpY2tEZWxheSA9IHZhbHVlXG4gIH1cblxuICBnZXQgZGJsQ2xpY2tEaXN0YW5jZSAoKSB7IHJldHVybiB0aGlzLl9kYmxDbGlja0Rpc3RhbmNlIH1cbiAgc2V0IGRibENsaWNrRGlzdGFuY2UgKHZhbHVlKSB7XG4gICAgdGhpcy5fZGJsQ2xpY2tEaXN0YW5jZSA9IHZhbHVlXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0RXZlbnRJbmZvIChlKSB7XG4gICAgbGV0IHJlbmRlcmVyID0gdGhpcy5fbWFpbi5yZW5kZXJlclxuXG4gICAgbGV0IHNpemUgPSBuZXcgUElYSS5Qb2ludChyZW5kZXJlci53aWR0aCAtIHRoaXMuX3Nwcml0ZS53aWR0aCwgcmVuZGVyZXIuaGVpZ2h0IC0gdGhpcy5fc3ByaXRlLmhlaWdodClcblxuICAgIGxldCB4ID0gTWF0aC50cnVuYyhNYXRoLm1pbihzaXplLngsIE1hdGgubWF4KDAsIGUuZGF0YS5nbG9iYWwueCkpIC8gdGhpcy5fbWFpbi5zY2FsZSlcbiAgICBsZXQgeSA9IE1hdGgudHJ1bmMoTWF0aC5taW4oc2l6ZS55LCBNYXRoLm1heCgwLCBlLmRhdGEuZ2xvYmFsLnkpKSAvIHRoaXMuX21haW4uc2NhbGUpXG5cbiAgICByZXR1cm4geyB4LCB5LCBidXR0b246IGUuZGF0YS5vcmlnaW5hbEV2ZW50LmJ1dHRvbiB9XG4gIH1cblxuICBvbk1vdXNlRG93biAoZSkge1xuICAgIGxldCB7IHgsIHksIGJ1dHRvbiB9ID0gdGhpcy5nZXRFdmVudEluZm8oZSlcblxuICAgIHN3aXRjaCAoYnV0dG9uKSB7XG4gICAgICBjYXNlIDA6IC8vIGxlZnRcbiAgICAgICAgdGhpcy5fYnRucyB8PSAweDAxXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgMTogLy8gbWlkZGxlXG4gICAgICAgIHRoaXMuX2J0bnMgfD0gMHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIDI6IC8vIHJpZ2h0XG4gICAgICAgIHRoaXMuX2J0bnMgfD0gMHgwNFxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnbW91c2UuZG93bicsIHsgeCwgeSwgYnV0dG9uIH0pXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICBvbk1vdXNlTW92ZSAoZSkge1xuICAgIGxldCB7IHgsIHksIGJ1dHRvbiB9ID0gdGhpcy5nZXRFdmVudEluZm8oZSlcblxuICAgIHRoaXMuX3ggPSB4XG4gICAgdGhpcy5feSA9IHlcblxuICAgIHRoaXMuZW1pdCgnbW91c2UubW92ZScsIHsgeCwgeSwgYnV0dG9uIH0pXG5cbiAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICBvbk1vdXNlVXAgKGUpIHtcbiAgICBsZXQgeyB4LCB5LCBidXR0b24gfSA9IHRoaXMuZ2V0RXZlbnRJbmZvKGUpXG5cbiAgICBzd2l0Y2ggKGJ1dHRvbikge1xuICAgICAgY2FzZSAwOiAvLyBsZWZ0XG4gICAgICAgIHRoaXMuX2J0bnMgJj0gfjB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAxOiAvLyBtaWRkbGVcbiAgICAgICAgdGhpcy5fYnRucyAmPSB+MHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIDI6IC8vIHJpZ2h0XG4gICAgICAgIHRoaXMuX2J0bnMgJj0gfjB4MDRcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ21vdXNlLnVwJywgeyB4LCB5LCBidXR0b24gfSlcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvbWlja2V5LmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgcGF0aCB9IGZyb20gJy4uL3V0aWxzLmpzJ1xuXG5pbXBvcnQgVG9rZW5UeXBlcyBmcm9tICcuL3Rva2Vucy90eXBlcy5qcydcbmltcG9ydCBDb25zdFRva2VuIGZyb20gJy4vdG9rZW5zL2NvbnN0LmpzJ1xuaW1wb3J0IEluY2x1ZGVUb2tlbiBmcm9tICcuL3Rva2Vucy9pbmNsdWRlLmpzJ1xuXG5jbGFzcyBUb2tlbiB7XG5cbiAgY29uc3RydWN0b3IgKGxleGVyLCB0eXBlLCB2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICAgIGlmIChsZXhlciBpbnN0YW5jZW9mIFRva2VuKSB7XG4gICAgICBsZXQgdCA9IGxleGVyXG4gICAgICB0aGlzLmxleGVyID0gdC5sZXhlclxuICAgICAgdGhpcy5fdHlwZSA9IHQuX3R5cGVcbiAgICAgIHRoaXMuX3Jlc2VydmVkID0gdC5fcmVzZXJ2ZWRcbiAgICAgIHRoaXMudmFsdWUgPSB0LnZhbHVlXG4gICAgICB0aGlzLnN0YXJ0ID0gXy5jbG9uZSh0LnN0YXJ0KVxuICAgICAgdGhpcy5lbmQgPSBfLmNsb25lKHQuZW5kKVxuICAgICAgdGhpcy5sZW5ndGggPSB0LnZhbHVlLmxlbmd0aFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMubGV4ZXIgPSBsZXhlclxuICAgICAgdGhpcy5fdHlwZSA9IHR5cGVcbiAgICAgIHRoaXMuX3Jlc2VydmVkID0gZmFsc2VcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCAnJ1xuICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0IHx8IHsgb2Zmc2V0OiAwLCBsaW5lOiAwLCBjb2x1bW46IDAgfVxuICAgICAgdGhpcy5lbmQgPSBlbmQgfHwgeyBvZmZzZXQ6IDAsIGxpbmU6IDAsIGNvbHVtbjogMCB9XG4gICAgICB0aGlzLmxlbmd0aCA9IHRoaXMuZW5kLm9mZnNldCAtIHRoaXMuc3RhcnQub2Zmc2V0XG4gICAgfVxuICB9XG5cbiAgaXMgKGUpIHtcbiAgICBpZiAoXy5pc1N0cmluZyhlKSkge1xuICAgICAgbGV0IHBhcnRzID0gZS5zcGxpdCgnfCcpXG4gICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKGxldCBwIG9mIHBhcnRzKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXMocCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGUgPT09ICcuJyB8fCB0aGlzLnR5cGUgPT09IGUgfHwgdGhpcy52YWx1ZSA9PT0gZVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChfLmlzUmVnRXhwKGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy50eXBlLm1hdGNoKGUpIHx8IHRoaXMudmFsdWUubWF0Y2goZSlcbiAgICB9XG4gICAgZWxzZSBpZiAoXy5pc0FycmF5KGUpKSB7XG4gICAgICBmb3IgKGxldCBpIG9mIGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXMoaSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZ2V0IHR5cGUgKCkge1xuICAgIGlmICh0aGlzLl90eXBlID09PSAnbWF0aF9hc3NpZ24nIHx8IHRoaXMuX3R5cGUgPT09ICdsb2dpY19hc3NpZ24nKSB7XG4gICAgICB0aGlzLl90eXBlID0gJ2Fzc2lnbidcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5fdHlwZSA9PT0gJ3N1cGVyJykge1xuICAgICAgdGhpcy5fdHlwZSA9ICdzdXBlcidcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3R5cGVcbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gXy50ZW1wbGF0ZSgnXCIje3ZhbHVlfVwiIGF0ICN7cGF0aH0oI3tsaW5lfToje2NvbHVtbn0pJykoeyB2YWx1ZTogdGhpcy52YWx1ZSwgbGluZTogdGhpcy5zdGFydC5saW5lLCBjb2x1bW46IHRoaXMuc3RhcnQuY29sdW1uLCBwYXRoOiBwYXRoLmJhc2VuYW1lKHRoaXMubGV4ZXIucGF0aCkgfSlcbiAgfVxuXG59XG5cblxuY2xhc3MgRW1wdHlDbGFzcyB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXhlciBleHRlbmRzIG1peChFbXB0eUNsYXNzKS53aXRoKFxuICBUb2tlblR5cGVzLFxuICBDb25zdFRva2VuLFxuICBJbmNsdWRlVG9rZW5cbikge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAocGF0aCwgdGV4dCkge1xuICAgIHRoaXMuZXJyb3JzID0gMFxuICAgIHRoaXMucGF0aCA9IHBhdGggfHwgJydcbiAgICB0aGlzLnRleHQgPSB0ZXh0IHx8ICcnXG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLnRleHQubGVuZ3RoXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgdGhpcy5saW5lID0gMVxuICAgIHRoaXMuY29sdW1uID0gMVxuICAgIHRoaXMudG9rZW5zID0gW11cbiAgICB0aGlzLmNvbnN0YW50cyA9IHt9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHZhbGlkT2Zmc2V0IChvZmZzZXQpIHsgcmV0dXJuIG9mZnNldCA+PSAwICYmIG9mZnNldCA8IHRoaXMubGVuZ3RoIH1cblxuICBlb3MgKCkgeyByZXR1cm4gdGhpcy52YWxpZE9mZnNldCh0aGlzLm9mZnNldCkgfVxuXG4gIGNoYXJfYXQgKGkpIHsgcmV0dXJuIHRoaXMudGV4dC5jaGFyQXQoaSkgfVxuXG4gIHN1YnRleHQgKGkpIHsgcmV0dXJuIHRoaXMudGV4dC5zdWJzdHJpbmcoaSkgfVxuXG4gIHBlZWsgKCkge1xuICAgIGxldCBwb3NfaW5mbyA9IChvZmZzZXQsIGxpbmUsIGNvbHVtbikgPT4geyByZXR1cm4geyBvZmZzZXQsIGxpbmUsIGNvbHVtbiB9IH1cblxuICAgIGxldCB0b2tlbiA9IG51bGxcbiAgICBsZXQgbCA9IF8ubGFzdCh0aGlzLnRva2VucylcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5vZmZzZXRcbiAgICBsZXQgbGVuID0gMFxuXG4gICAgd2hpbGUgKFsnICcsICdcXHQnXS5pbmRleE9mKHRoaXMuY2hhcl9hdChvZmZzZXQpKSAhPT0gLTEpIHtcbiAgICAgIGlmIChsICYmICFsLm5leHRfaXNfc3BhY2UpIHtcbiAgICAgICAgbC5uZXh0X2lzX3NwYWNlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnZhbGlkT2Zmc2V0KG9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIHsgdG9rZW4sIG9mZnNldCB9XG4gICAgICB9XG4gICAgICBvZmZzZXQrK1xuICAgIH1cblxuICAgIGxldCBvbGRfb2Zmc2V0ID0gb2Zmc2V0XG5cbiAgICBsZXQgbGluZSA9IHRoaXMubGluZVxuICAgIGxldCBjb2x1bW4gPSB0aGlzLmNvbHVtblxuICAgIGZvciAobGV0IGsgaW4gdGhpcy50b2tlbl90eXBlcykge1xuICAgICAgbGV0IHIgPSB0aGlzLnN1YnRleHQob2Zmc2V0KS5tYXRjaCh0aGlzLnRva2VuX3R5cGVzW2tdKVxuICAgICAgaWYgKHIgJiYgci5pbmRleCA9PT0gMCkge1xuICAgICAgICBsZXQgdmFsdWUgPSByLmxlbmd0aCA+IDEgPyByLnNsaWNlKDEpLmpvaW4oJycpIDogci5qb2luKCcnKVxuICAgICAgICBsZW4gPSByWzBdLmxlbmd0aFxuICAgICAgICB0b2tlbiA9IG5ldyBUb2tlbih0aGlzLCBrLCB2YWx1ZSwgcG9zX2luZm8ob2Zmc2V0LCBsaW5lLCBjb2x1bW4pLCBwb3NfaW5mbyhvZmZzZXQgKyBsZW4sIGxpbmUsIGNvbHVtbiArIGxlbiAtIDEpKVxuICAgICAgICBvZmZzZXQgKz0gbGVuXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvZmZzZXQgPT09IG9sZF9vZmZzZXQpIHtcbiAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0ICsgMVxuICAgIH1cbiAgICByZXR1cm4geyB0b2tlbiwgb2Zmc2V0LCBsZW4gfVxuICB9XG5cbiAgaW5zZXJ0VG9rZW4gKHQpIHtcbiAgICBsZXQgYyA9IHRoaXMuY29uc3RhbnRzW3QudmFsdWVdXG4gICAgaWYgKF8uaXNBcnJheShjKSkge1xuICAgICAgZm9yIChsZXQgdCBvZiBjKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0VG9rZW4odClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHQpXG4gICAgfVxuICB9XG5cbiAgbmV4dCAoKSB7XG4gICAgbGV0IHsgdG9rZW4sIG9mZnNldCwgbGVuIH0gPSB0aGlzLnBlZWsoKVxuXG4gICAgd2hpbGUgKHRva2VuICYmIHRva2VuLl90eXBlID09PSAnY29tbWVudCcpIHtcbiAgICAgIGxldCB0ID0gdGhpcy5wZWVrKClcbiAgICAgIHRva2VuID0gdC50b2tlblxuICAgICAgb2Zmc2V0ID0gdC5vZmZzZXRcbiAgICAgIGxlbiA9IHQubGVuXG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgICAgdGhpcy5jb2x1bW4gKz0gbGVuICsgMVxuICAgIH1cblxuICAgIGlmICh0b2tlbikge1xuICAgICAgaWYgKHRva2VuLnR5cGUgPT09ICdjb25zdCcpIHtcbiAgICAgICAgdG9rZW4gPSB0aGlzLmNvbnN0X3Rva2VuKHRva2VuLCBvZmZzZXQsIGxlbilcbiAgICAgIH1cblxuICAgICAgZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHRva2VuID0gdGhpcy5pbmNsdWRlX3Rva2VuKHRva2VuLCBvZmZzZXQsIGxlbilcbiAgICAgIH1cblxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0VG9rZW4odG9rZW4pXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0XG4gICAgICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuICYmIHRva2VuLmlzKCdlb2wnKSkge1xuICAgICAgICB0aGlzLmxpbmUrK1xuICAgICAgICB0aGlzLmNvbHVtbiA9IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5cbiAgfVxuXG4gIHJ1biAocGF0aCwgdGV4dCkge1xuICAgIGlmICghdGV4dCkge1xuICAgICAgdGV4dCA9IHBhdGhcbiAgICAgIHBhdGggPSAnJ1xuICAgIH1cbiAgICB0aGlzLnJlc2V0KHBhdGgsIHRleHQpXG4gICAgd2hpbGUgKHRoaXMudmFsaWRPZmZzZXQodGhpcy5vZmZzZXQpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZHVtcCAoKSB7XG4gICAgY29uc29sZS5pbmZvKCdsZXhlciBkdW1wJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRva2VucylcbiAgICBjb25zb2xlLmxvZygnJylcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvbGV4ZXIuanMiLCJpbXBvcnQgYXNzaWduX3Rva2VucyBmcm9tICcuL2Fzc2lnbnMuanMnXG5pbXBvcnQgZGVsaW1pdGVyX3Rva2VucyBmcm9tICcuL2RlbGltaXRlcnMuanMnXG5pbXBvcnQgY29tbWVudF90b2tlbnMgZnJvbSAnLi9jb21tZW50cy5qcydcbmltcG9ydCBncm91cF90b2tlbnMgZnJvbSAnLi9ncm91cHMuanMnXG5pbXBvcnQgbGl0ZXJhbF90b2tlbnMgZnJvbSAnLi9saXRlcmFscy5qcydcbmltcG9ydCBvcGVyYXRvcl90b2tlbnMgZnJvbSAnLi9vcGVyYXRvcnMuanMnXG5pbXBvcnQgcHJpbWl0aXZlX3Rva2VucyBmcm9tICcuL3ByaW1pdGl2ZXMuanMnXG5pbXBvcnQgcmVzZXJ2ZWRfdG9rZW5zIGZyb20gJy4vcmVzZXJ2ZWQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgVG9rZW5UeXBlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGdldCB0b2tlbl90eXBlcyAoKSB7XG4gICAgaWYgKCF0aGlzLl90b2tlbl90eXBlcykge1xuICAgICAgdGhpcy5fdG9rZW5fdHlwZXMgPSBfLmV4dGVuZCh7fSxcbiAgICAgICAgZGVsaW1pdGVyX3Rva2VucyxcbiAgICAgICAgY29tbWVudF90b2tlbnMsXG4gICAgICAgIHByaW1pdGl2ZV90b2tlbnMsXG4gICAgICAgIHJlc2VydmVkX3Rva2VucyxcbiAgICAgICAgbGl0ZXJhbF90b2tlbnMsXG4gICAgICAgIGdyb3VwX3Rva2VucyxcbiAgICAgICAgb3BlcmF0b3JfdG9rZW5zLFxuICAgICAgICBhc3NpZ25fdG9rZW5zXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90b2tlbl90eXBlc1xuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL3R5cGVzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhc3NpZ246IC9eKD0pW149Pl0vLFxuICBtYXRoX2Fzc2lnbjogL15bXFwrXFwtXFwqXFwvJV09LyxcbiAgbG9naWNfYXNzaWduOiAvXlshJlxcfFxcXl09LyxcbiAgZm5fYXNzaWduOiAvXj0+Lyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvYXNzaWducy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZW9sOiAvXltcXHJcXG5dfDsvLFxuICBjb21tYTogL14sLyxcbiAgY29sb246IC9eOig/PVteQS1aX10pL2ksXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2RlbGltaXRlcnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbW1lbnQ6IC9eXFwvXFwvKFteXFxyXFxuXSopLyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvY29tbWVudHMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG9wZW5fcGFyZW46IC9eXFwoLyxcbiAgY2xvc2VfcGFyZW46IC9eXFwpLyxcblxuICBvcGVuX2JyYWNrZXQ6IC9eXFxbLyxcbiAgY2xvc2VfYnJhY2tldDogL15cXF0vLFxuXG4gIG9wZW5fY3VybHk6IC9eXFx7LyxcbiAgY2xvc2VfY3VybHk6IC9eXFx9Lyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvZ3JvdXBzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBrZXk6IC9eOihbQS1aX11bQS1aXzAtOV0qKS9pLFxuXG4gIGlkOiAvXihbQS1aX11bQS1aXzAtOV0qKS9pLFxuICBpZF9maWVsZDogL15cXC4oW0EtWl9dW0EtWl8wLTldKikvaSxcblxuICB0aGlzOiAvXkAoPz1bXkEtWl9dKS9pLFxuICB0aGlzX2ZpZWxkOiAvXkAoW0EtWl9dW0EtWl8wLTldKikvaSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvbGl0ZXJhbHMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHN5bWJvbDogL15bXFwkXS8sXG5cbiAgbWF0aDogL15bXFwrXFwtXFwqXFwvJV1bXj1dLyxcbiAgbG9naWM6IC9eWyEmXFx8XFxeXVtePV0vLFxuICBjb21wOiAvXj58PHw+PXw8PXwhPXw9PS8sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL29wZXJhdG9ycy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaGV4OiAvXlxcJChbMC05QS1GXSspfDB4KFswLTlBLUZdKykvaSxcbiAgbnVtYmVyOiAvXihbLStdP1swLTldKlxcLj9bMC05XSsoW2VFXVstK10/WzAtOV0rKT8pLyxcblxuICBzdHJpbmc6IC9eXCJ8JyhbXlwiXSopXCJ8Jy8sXG4gIGNoYXI6IC9eJyguKScvLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9wcmltaXRpdmVzLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIENvbnN0VG9rZW4gZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBjb25zdF90b2tlbiAodG9rZW4sIG9mZnNldCwgbGVuKSB7XG4gICAgbGV0IGMgPSBbXVxuICAgIHRoaXMuY29uc3RhbnRzW3Rva2VuLnZhbHVlXSA9IGNcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IHAgPSB0aGlzLnBlZWsoKVxuICAgICAgdG9rZW4gPSBwLnRva2VuXG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBwLm9mZnNldFxuICAgICAgICB0aGlzLmNvbHVtbiArPSBwLmxlbiArIDFcbiAgICAgIH1cbiAgICAgIGlmICghdG9rZW4gfHwgdG9rZW4uaXMoJ2VvbCcpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgYy5wdXNoKHRva2VuKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9rZW5cbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvY29uc3QuanMiLCJpbXBvcnQgeyBMZXhlciB9IGZyb20gJy4uL2xleGVyLmpzJ1xuaW1wb3J0IHsgcGF0aCwgZGlycywgZnMgfSBmcm9tICcuLi8uLi91dGlscy5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJbmNsdWRlVG9rZW4gZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBpbmNsdWRlX3Rva2VuICh0b2tlbiwgb2Zmc2V0LCBsZW4pIHtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICBsZXQgZm4gPSB0b2tlbi52YWx1ZSArIChwYXRoLmV4dG5hbWUodG9rZW4udmFsdWUpID09PSAnJyA/ICcuc2hwJyA6ICcnKVxuICAgIGxldCBwbiA9IHBhdGguam9pbihfX2Rpcm5hbWUsIGZuKVxuICAgIHRyeSB7XG4gICAgICBmcy5zdGF0U3luYyhwbilcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBuID0gcGF0aC5qb2luKGRpcnMudXNlciwgZm4pXG4gICAgICAgIGZzLnN0YXRTeW5jKHBuKVxuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcG4gPSAnJ1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocG4gIT09ICcnKSB7XG4gICAgICBsZXQgc3JjID0gZnMucmVhZEZpbGVTeW5jKHBuLCAndXRmOCcpXG4gICAgICBsZXQgbHggPSBuZXcgTGV4ZXIoKVxuICAgICAgbHgucnVuKHBuLCBzcmMpXG4gICAgICBpZiAoIWx4LmVycm9ycykge1xuICAgICAgICBfLmV4dGVuZCh0aGlzLmNvbnN0YW50cywgbHguY29uc3RhbnRzKVxuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMudG9rZW5zLmNvbmNhdChseC50b2tlbnMpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b2tlblxuICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9pbmNsdWRlLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uL2dsb2JhbHMuanMnXG5pbXBvcnQgeyBGcmFtZXMgfSBmcm9tICcuL2ZyYW1lLmpzJ1xuXG5pbXBvcnQgS2V5TGl0ZXJhbCBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMva2V5X2xpdGVyYWwuanMnXG5cbmltcG9ydCBTdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL3N0YXRlbWVudHMuanMnXG5pbXBvcnQgSWRTdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL2lkLmpzJ1xuaW1wb3J0IEFzc2lnblN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvYXNzaWduLmpzJ1xuaW1wb3J0IFJldHVyblN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvcmV0dXJuLmpzJ1xuaW1wb3J0IENsYXNzU3RhdGVtZW50cyBmcm9tICcuL2dyYW1tYXIvc3RhdGVtZW50cy9jbGFzcy5qcydcbmltcG9ydCBDb25kaXRpb25TdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL2NvbmRpdGlvbnMuanMnXG5pbXBvcnQgVmFyU3RhdGVtZW50cyBmcm9tICcuL2dyYW1tYXIvc3RhdGVtZW50cy92YXIuanMnXG5pbXBvcnQgTG9vcFN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvbG9vcHMuanMnXG5cbmltcG9ydCBFeHByZXNzaW9ucyBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMvZXhwcmVzc2lvbnMuanMnXG5pbXBvcnQgQXJyYXlFeHByZXNzaW9ucyBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMvYXJyYXkuanMnXG5pbXBvcnQgRGljdEV4cHJlc3Npb25zIGZyb20gJy4vZ3JhbW1hci9leHByZXNzaW9ucy9kaWN0LmpzJ1xuaW1wb3J0IEZuRXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2ZuLmpzJ1xuaW1wb3J0IElkRXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2lkLmpzJ1xuaW1wb3J0IENsYXNzRXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2NsYXNzLmpzJ1xuXG5jbGFzcyBOb2RlIHtcblxuICBjb25zdHJ1Y3RvciAocGFyc2VyLCB0b2tlbiwgZGF0YSkge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyXG4gICAgdGhpcy50b2tlbiA9IHRva2VuXG4gICAgdGhpcy5faW5fY2xhc3MgPSBmYWxzZVxuICAgIHRoaXMuX2ZuX2xldmVsID0gMFxuICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwge31cbiAgfVxuXG4gIHRva2VuX3Byb3AgKG5hbWUpIHsgcmV0dXJuIHRoaXMudG9rZW4gPyB0aGlzLnRva2VuW25hbWVdIDogbnVsbCB9XG5cbiAgZ2V0IHZhbHVlICgpIHsgcmV0dXJuIHRoaXMudG9rZW5fcHJvcCgndmFsdWUnKSB9XG5cbiAgZ2V0IHR5cGUgKCkgeyByZXR1cm4gdGhpcy50b2tlbl9wcm9wKCd0eXBlJykgfVxuXG4gIGdldCBzdGFydCAoKSB7IHJldHVybiB0aGlzLnRva2VuX3Byb3AoJ3N0YXJ0JykgfVxuXG4gIGdldCBlbmQgKCkgeyByZXR1cm4gdGhpcy50b2tlbl9wcm9wKCdlbmQnKSB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7IHJldHVybiB0aGlzLnRva2VuX3Byb3AoJ2xlbmd0aCcpIH1cblxuICBpcyAoZSkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4uaXMoZSkgOiBmYWxzZSB9XG5cbiAgdG9TdHJpbmcgKCkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4udG9TdHJpbmcoKSA6ICcnIH1cblxufVxuXG5cbmNsYXNzIEVtcHR5Q2xhc3Mge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VyIGV4dGVuZHMgbWl4KEVtcHR5Q2xhc3MpLndpdGgoXG4gIEtleUxpdGVyYWwsXG5cbiAgU3RhdGVtZW50cyxcbiAgSWRTdGF0ZW1lbnRzLFxuICBBc3NpZ25TdGF0ZW1lbnRzLFxuICBSZXR1cm5TdGF0ZW1lbnRzLFxuICBDbGFzc1N0YXRlbWVudHMsXG4gIENvbmRpdGlvblN0YXRlbWVudHMsXG4gIFZhclN0YXRlbWVudHMsXG4gIExvb3BTdGF0ZW1lbnRzLFxuXG4gIEV4cHJlc3Npb25zLFxuICBBcnJheUV4cHJlc3Npb25zLFxuICBEaWN0RXhwcmVzc2lvbnMsXG4gIEZuRXhwcmVzc2lvbnMsXG4gIElkRXhwcmVzc2lvbnMsXG4gIENsYXNzRXhwcmVzc2lvbnNcbikge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAodG9rZW5zKSB7XG4gICAgdGhpcy5lcnJvcnMgPSAwXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgdGhpcy5ub2RlcyA9IFtdXG4gICAgdGhpcy5mcmFtZXMgPSBuZXcgRnJhbWVzKClcbiAgICB0aGlzLnByZXZfZnJhbWUgPSBudWxsXG4gICAgdGhpcy5pbl9jbGFzcyA9IGZhbHNlXG4gICAgdGhpcy5mbl9sZXZlbCA9IDBcbiAgICB0aGlzLnRva2VucyA9IHRva2VucyB8fCBbXVxuICB9XG5cbiAgdmFsaWRPZmZzZXQgKG9mZnNldCkgeyByZXR1cm4gb2Zmc2V0ID49IDAgJiYgb2Zmc2V0IDwgdGhpcy5sZW5ndGggfVxuXG4gIHRva2VuX2F0IChvZmZzZXQpIHsgcmV0dXJuIHRoaXMudmFsaWRPZmZzZXQob2Zmc2V0KSA/IHRoaXMudG9rZW5zW29mZnNldF0gOiBudWxsIH1cblxuICBnZXQgZW9zICgpIHsgcmV0dXJuIHRoaXMub2Zmc2V0ID49IHRoaXMubGVuZ3RoIH1cblxuICBnZXQgbGVuZ3RoICgpIHsgcmV0dXJuIHRoaXMudG9rZW5zLmxlbmd0aCB9XG5cbiAgZ2V0IHRva2VuICgpIHsgcmV0dXJuIHRoaXMudG9rZW5fYXQodGhpcy5vZmZzZXQpIH1cblxuICBza2lwIChlKSB7IHdoaWxlICh0aGlzLmlzKGUpICYmICF0aGlzLmVvcykgeyB0aGlzLm5leHQoKSB9IH1cblxuICBpcyAoZSkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4uaXMoZSkgOiBmYWxzZSB9XG5cbiAgZXhwZWN0IChlLCBuZXh0ID0gdHJ1ZSkge1xuICAgIGxldCByID0gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4uaXMoZSkgOiBmYWxzZVxuICAgIGlmIChyKSB7XG4gICAgICBpZiAobmV4dCkgeyB0aGlzLm5leHQoKSB9XG4gICAgfVxuICAgIGVsc2UgeyBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCBlLCAnZXhwZWN0ZWQnKSB9XG4gICAgcmV0dXJuIHJcbiAgfVxuXG4gIG1hdGNoIChvZmZzZXQsIG1hdGNoZXMpIHtcbiAgICBpZiAoIV8uaXNOdW1iZXIob2Zmc2V0KSkge1xuICAgICAgbWF0Y2hlcyA9IG9mZnNldFxuICAgICAgb2Zmc2V0ID0gdGhpcy5vZmZzZXRcbiAgICB9XG4gICAgbGV0IHRva2VucyA9IFtdXG4gICAgbGV0IG0gPSAwXG4gICAgd2hpbGUgKHRoaXMudmFsaWRPZmZzZXQob2Zmc2V0KSAmJiBtIDwgbWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5zW29mZnNldCsrXVxuICAgICAgaWYgKCF0b2tlbi5pcyhtYXRjaGVzW20rK10pKSB7IHJldHVybiBudWxsIH1cbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKVxuICAgIH1cbiAgICByZXR1cm4gdG9rZW5zLmxlbmd0aCA/IHRva2VucyA6IG51bGxcbiAgfVxuXG4gIHBlZWsgKGMgPSAxKSB7IHJldHVybiB0aGlzLnRva2VuX2F0KHRoaXMub2Zmc2V0ICsgYykgfVxuXG4gIG5leHQgKGMgPSAxKSB7XG4gICAgdGhpcy5vZmZzZXQgKz0gY1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBsb29wX3doaWxlIChmbiwgbWF0Y2hlcywgZW5kLCBlbmRfbmV4dCwgc2tpcCkge1xuICAgIGxldCBub2RlcyA9IFtdXG4gICAgaWYgKHNraXApIHsgdGhpcy5za2lwKHNraXApIH1cbiAgICB3aGlsZSAoIXRoaXMuZW9zICYmICghZW5kIHx8ICF0aGlzLmlzKGVuZCkpICYmICghbWF0Y2hlcyB8fCB0aGlzLm1hdGNoKG1hdGNoZXMpKSkge1xuICAgICAgbm9kZXMucHVzaChmbi5jYWxsKHRoaXMpKVxuICAgICAgaWYgKHNraXApIHsgdGhpcy5za2lwKHNraXApIH1cbiAgICB9XG4gICAgaWYgKGVuZCkgeyB0aGlzLmV4cGVjdChlbmQsIGVuZF9uZXh0KSB9XG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cblxuICBuZXh0X2V4cHJfbm9kZSAobGVmdCkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICBsZXQgZGF0YSA9IHt9XG4gICAgaWYgKGxlZnQpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBkYXRhID0geyBsZWZ0LCByaWdodDogdGhpcy5leHByKCkgfVxuICAgIH1cbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRva2VuLCBkYXRhKVxuICAgIGlmICghbGVmdCkgeyB0aGlzLm5leHQoKSB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIHJ1biAodG9rZW5zKSB7XG4gICAgdGhpcy5yZXNldCh0b2tlbnMpXG4gICAgdGhpcy5mcmFtZXMuc3RhcnQoJ2dsb2JhbHMnKVxuICAgIGxldCBub2RlcyA9IHRoaXMuc3RhdGVtZW50cygpXG4gICAgdGhpcy5mcmFtZXMuZW5kKClcbiAgICB0aGlzLm5vZGVzID0gbm9kZXNcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIGNvbnNvbGUuaW5mbygncGFyc2VyIGR1bXAnKVxuICAgIGNvbnNvbGUubG9nKHRoaXMubm9kZXMpXG4gICAgY29uc29sZS5sb2coJycpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3BhcnNlci5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IHZhciBGcmFtZVxuZXhwb3J0IHZhciBGcmFtZXNcbmV4cG9ydCB2YXIgRnJhbWVJdGVtXG5cbkZyYW1lcyA9IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gbnVsbFxuICB9XG5cbiAgc3RhcnQgKHR5cGUpIHsgdGhpcy5jdXJyZW50ID0gbmV3IEZyYW1lKHRoaXMsIHRoaXMuY3VycmVudCwgdHlwZSkgfVxuXG4gIGVuZCAoKSB7IHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudC5wYXJlbnQgfVxuXG4gIGFkZCAobm9kZSwgcGFyZW50LCBpdGVtX3R5cGUpIHsgcmV0dXJuIHRoaXMuY3VycmVudC5hZGQobm9kZSwgcGFyZW50LCBpdGVtX3R5cGUpIH1cblxuICBleGlzdHMgKG5hbWUsIGl0ZW1fdHlwZSkge1xuICAgIGxldCBjID0gdGhpcy5jdXJyZW50XG4gICAgd2hpbGUgKGMpIHtcbiAgICAgIGxldCBpID0gYy5leGlzdHMobmFtZSwgaXRlbV90eXBlKVxuICAgICAgaWYgKGkpIHtcbiAgICAgICAgcmV0dXJuIGlcbiAgICAgIH1cbiAgICAgIGMgPSBjLnBhcmVudFxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZm5fZXhpc3RzIChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhpc3RzKG5hbWUsICdmbicpXG4gIH1cblxuICBjbGFzc19leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2NsYXNzJylcbiAgfVxuXG4gIHZhcl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ3ZhcicpXG4gIH1cblxufVxuXG5cbkZyYW1lSXRlbSA9IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvciAoZnJhbWUsIHBhcmVudCwgbm9kZSwgaXRlbV90eXBlKSB7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICB0aGlzLml0ZW1fdHlwZSA9IGl0ZW1fdHlwZVxuICAgIHRoaXMubm9kZSA9IG5vZGVcbiAgfVxuXG4gIGdldCBkYXRhICgpIHsgcmV0dXJuIHRoaXMubm9kZS5kYXRhIH1cblxuICBnZXQgbmFtZSAoKSB7IHJldHVybiB0aGlzLm5vZGUudmFsdWUgfVxuXG4gIGdldCB0eXBlICgpIHsgcmV0dXJuIHRoaXMubm9kZS50eXBlIH1cblxuICBnZXQgaXNfdmFyICgpIHsgcmV0dXJuIHRoaXMuaXRlbV90eXBlID09PSAndmFyJyB9XG5cbiAgZ2V0IGlzX2NsYXNzICgpIHsgcmV0dXJuIHRoaXMuaXRlbV90eXBlID09PSAnY2xhc3MnIH1cblxuICBnZXQgaXNfZm4gKCkgeyByZXR1cm4gdGhpcy5pdGVtX3R5cGUgPT09ICdmbicgfVxuXG4gIGdldCBpc19sb2NhbCAoKSB7IHJldHVybiB0aGlzLmZyYW1lLmlzX2xvY2FsIH1cblxuICBnZXQgaXNfZ2xvYmFsICgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuaXNfZ2xvYmFsIH1cblxufVxuXG5cbkZyYW1lID0gY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yIChmcmFtZXMsIHBhcmVudCwgdHlwZSkge1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICB0aGlzLnR5cGUgPSB0eXBlXG4gICAgdGhpcy5pdGVtcyA9IFtdXG4gIH1cblxuICBnZXQgbmFtZSAoKSB7IHJldHVybiB0aGlzLnBhcmVudCA/ICckcycgOiAnJGcnIH1cblxuICBnZXQgaXNfbG9jYWwgKCkgeyByZXR1cm4gdGhpcy5wYXJlbnQgIT09IG51bGwgfVxuXG4gIGdldCBpc19nbG9iYWwgKCkgeyByZXR1cm4gdGhpcy5wYXJlbnQgPT09IG51bGwgfVxuXG4gIGFkZCAobm9kZSwgcGFyZW50LCBpdGVtX3R5cGUpIHtcbiAgICBsZXQgaSA9IG5ldyBGcmFtZUl0ZW0odGhpcywgcGFyZW50LCBub2RlLCBpdGVtX3R5cGUpXG4gICAgdGhpcy5pdGVtcy5wdXNoKGkpXG4gICAgbm9kZS5fZ2xvYmFsID0gdGhpcy5pc19nbG9iYWxcbiAgICByZXR1cm4gaVxuICB9XG5cbiAgZXhpc3RzIChuYW1lLCBpdGVtX3R5cGUpIHsgcmV0dXJuIF8uZmluZCh0aGlzLml0ZW1zLCBpdGVtX3R5cGUgPyB7IG5hbWUsIGl0ZW1fdHlwZSB9IDogeyBuYW1lIH0pIH1cblxuICBmbl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2ZuJylcbiAgfVxuXG4gIHZhcl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ3ZhcicpXG4gIH1cblxuICBjbGFzc19leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2NsYXNzJylcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZnJhbWUuanMiLCJpbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGJsb2NrIChlbmQsIGVuZF9uZXh0ID0gdHJ1ZSwgYmxvY2tfdHlwZSA9IG51bGwpIHtcbiAgICBpZiAoYmxvY2tfdHlwZSkge1xuICAgICAgdGhpcy5mcmFtZXMuc3RhcnQoYmxvY2tfdHlwZSlcbiAgICB9XG4gICAgbGV0IG5vZGVzID0gdGhpcy5sb29wX3doaWxlKHRoaXMuc3RhdGVtZW50LCBudWxsLCBlbmQsIGVuZF9uZXh0LCAnZW9sJylcbiAgICBpZiAoYmxvY2tfdHlwZSkge1xuICAgICAgdGhpcy5mcmFtZXMuZW5kKClcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cblxuICBzdGF0ZW1lbnRzICgpIHsgcmV0dXJuIHRoaXMuYmxvY2soKSB9XG5cbiAgc2luZ2xlX3N0YXRlbWVudCAoKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIHRoaXMubmV4dCgpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIHN0YXRlbWVudCAoKSB7XG4gICAgaWYgKHRoaXMubWF0Y2goWydsZXQnLCAnaWQnXSkpIHsgcmV0dXJuIHRoaXMudmFyX3N0YXRlbWVudCgpIH0gLy8gdmFyaWFibGUgZGVmaW5pdGlvblxuICAgIGVsc2UgaWYgKHRoaXMubWF0Y2goWydpZHxpZF9maWVsZHx0aGlzX2ZpZWxkJywgJ2Fzc2lnbnxmbl9hc3NpZ24nXSkpIHsgcmV0dXJuIHRoaXMuYXNzaWduX3N0YXRlbWVudCgpIH0gLy8gdmFyaWFibGUgYXNzaWdubWVudFxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2lmJykpIHsgcmV0dXJuIHRoaXMuaWZfc3RhdGVtZW50KCkgfSAvLyBpZiBibG9ja1xuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2ZvcicpKSB7IHJldHVybiB0aGlzLmZvcl9zdGF0ZW1lbnQoKSB9IC8vIHdoaWxlIGJsb2NrXG4gICAgZWxzZSBpZiAodGhpcy5pcygnd2hpbGUnKSkgeyByZXR1cm4gdGhpcy53aGlsZV9zdGF0ZW1lbnQoKSB9IC8vIHdoaWxlIGJsb2NrXG4gICAgZWxzZSBpZiAodGhpcy5pcygncmV0dXJuJykpIHsgcmV0dXJuIHRoaXMucmV0dXJuX3N0YXRlbWVudCgpIH0gLy8gcmV0dXJuIGZyb20gZnVuY3Rpb25cbiAgICBlbHNlIGlmICh0aGlzLmlzKFsnYnJlYWsnLCAnY29udGludWUnXSkpIHsgcmV0dXJuIHRoaXMuc2luZ2xlX3N0YXRlbWVudCgpIH0gLy8gc2luZ2xlIHN0YXRlbWVudFxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2NsYXNzJykpIHsgcmV0dXJuIHRoaXMuY2xhc3Nfc3RhdGVtZW50KCkgfSAvLyBjbGFzcyBzdGF0ZW1lbnRcbiAgICBlbHNlIGlmICh0aGlzLmlzKFsnaWQnLCAnc3VwZXInXSkpIHsgcmV0dXJuIHRoaXMuaWRfc3RhdGVtZW50KCkgfSAvLyBmdW5jdGlvbiBjYWxsXG4gICAgZWxzZSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnc3ludGF4IGVycm9yJylcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvc3RhdGVtZW50cy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJZFN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBpZF9zdGF0ZW1lbnQgKGZpcnN0ID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLmlzKCdzdXBlcicpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdXBlcl9leHByKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pZF9leHByKGZpcnN0KVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9pZC5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQXNzaWduU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGFzc2lnbl9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCBub2RlID0gbnVsbFxuICAgIGxldCBpZCA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICh0aGlzLmlzKCdmbl9hc3NpZ24nKSkge1xuICAgICAgbm9kZSA9IHRoaXMuZm5fZXhwcihpZCwgdHJ1ZSlcbiAgICAgIGlkLl9mbiA9IHRydWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbiwgeyBpZCB9KVxuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIG5vZGUuZGF0YS5leHByID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgdGhpcy5mcmFtZXMuYWRkKGlkLCBudWxsLCBpZC5fZm4gPyAnZm4nIDogJ3ZhcicpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9hc3NpZ24uanMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFJldHVyblN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICByZXR1cm5fc3RhdGVtZW50ICgpIHtcbiAgICBsZXQgcCA9IGZhbHNlXG4gICAgbGV0IGVuZCA9ICdlb2x8ZW5kfGNsb3NlX3BhcmVuJ1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICBub2RlLmRhdGEuYXJncyA9IFtdXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7XG4gICAgICBwID0gdHJ1ZVxuICAgICAgZW5kID0gJ2Nsb3NlX3BhcmVuJ1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgaWYgKCFwIHx8ICF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICBub2RlLmRhdGEuYXJncyA9IHRoaXMuZXhwcnMoZW5kLCBmYWxzZSlcbiAgICB9XG4gICAgaWYgKHApIHtcbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvcmV0dXJuLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBDbGFzc1N0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBjbGFzc19saXN0ICgpIHsgcmV0dXJuIHRoaXMubG9vcF93aGlsZSh0aGlzLnNpbmdsZSwgWydpZCddLCAnZW9sJywgdHJ1ZSwgJ2NvbW1hJykgfVxuXG4gIGNsYXNzX3N0YXRlbWVudCAoKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgbGV0IF9leHRlbmRzID0gbnVsbFxuICAgIGxldCBpZCA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICh0aGlzLmlzKCc6JykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBfZXh0ZW5kcyA9IHRoaXMuY2xhc3NfbGlzdCgpXG4gICAgfVxuICAgIHRoaXMuZnJhbWVzLmFkZChpZCwgbnVsbCwgJ2NsYXNzJylcbiAgICB0aGlzLmluX2NsYXNzID0gdHJ1ZVxuICAgIGxldCBib2R5ID0gdGhpcy5ibG9jaygnZW5kJywgZmFsc2UsICdjbGFzcycpXG4gICAgdGhpcy5pbl9jbGFzcyA9IGZhbHNlXG4gICAgdGhpcy5leHBlY3QoJ2VuZCcpXG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IGlkLCBfZXh0ZW5kcywgYm9keSB9KVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2NsYXNzLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBDb25kaXRpb25TdGF0ZW1lbnRzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgaWZfc3RhdGVtZW50IChleHBlY3RfZW5kID0gdHJ1ZSkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGxldCBleHByX2Jsb2NrXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fcGFyZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIGV4cHJfYmxvY2sgPSB0aGlzLmV4cHIoKVxuICAgICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleHByX2Jsb2NrID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgbGV0IHRydWVfYm9keSA9IHRoaXMuYmxvY2soWydlbHNlJywgJ2VuZCddLCBmYWxzZSwgJ2lmJylcbiAgICBsZXQgZmFsc2VfYm9keSA9IHRoaXMuaXMoJ2Vsc2UnKSA/IHRoaXMuZWxzZV9zdGF0ZW1lbnQoZmFsc2UpIDogbnVsbFxuICAgIGlmIChleHBlY3RfZW5kKSB7IHRoaXMuZXhwZWN0KCdlbmQnKSB9XG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IGV4cHI6IGV4cHJfYmxvY2ssIHRydWVfYm9keSwgZmFsc2VfYm9keSB9KVxuICB9XG5cbiAgZWxzZV9zdGF0ZW1lbnQgKGV4cGVjdF9lbmQgPSB0cnVlKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIGxldCBub2RlID0gbnVsbFxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ2lmJykpIHtcbiAgICAgIG5vZGUgPSB0aGlzLmlmX3N0YXRlbWVudChmYWxzZSlcbiAgICAgIG5vZGUudG9rZW4gPSB0b2tlblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0b2tlbiwgeyBmYWxzZV9ib2R5OiB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ2Vsc2UnKSB9KVxuICAgIH1cbiAgICBpZiAoZXhwZWN0X2VuZCkgeyB0aGlzLmV4cGVjdCgnZW5kJykgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvY29uZGl0aW9ucy5qcyIsImltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi4vLi4vbGV4ZXIuanMnXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFZhclN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICB2YXJfc3RhdGVtZW50ICgpIHtcbiAgICBsZXQgbm9kZSA9IG51bGxcbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICghdGhpcy5wZWVrKCkuaXMoJ2Fzc2lnbnxmbl9hc3NpZ24nKSkge1xuICAgICAgbGV0IHQgPSBuZXcgVG9rZW4odGhpcy50b2tlbilcbiAgICAgIHQudmFsdWUgPSAnPSdcbiAgICAgIHQuX3R5cGUgPSAnYXNzaWduJ1xuICAgICAgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHQsIHsgaWQ6IHRoaXMudG9rZW4sIGV4cHI6IG51bGwgfSlcbiAgICAgIHRoaXMuZnJhbWVzLmFkZCh0aGlzLnRva2VuLCBudWxsLCAndmFyJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlID0gdGhpcy5hc3NpZ25fc3RhdGVtZW50KClcbiAgICB9XG4gICAgbm9kZS5fbGV0ID0gdHJ1ZVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvdmFyLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBMb29wU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGZvcl9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuXG4gICAgbGV0IHYgPSB0aGlzLnRva2VuXG4gICAgdGhpcy5leHBlY3QoJ2lkfHZhcicpXG4gICAgdGhpcy5leHBlY3QoJ2Fzc2lnbicpXG4gICAgbGV0IG1pbl9leHByID0gdGhpcy5leHByKClcbiAgICB0aGlzLmV4cGVjdCgndG8nKVxuICAgIGxldCBtYXhfZXhwciA9IHRoaXMuZXhwcigpXG4gICAgbGV0IHN0ZXBfZXhwciA9IG51bGxcbiAgICBpZiAodGhpcy5pcygnc3RlcCcpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgc3RlcF9leHByID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgbGV0IGJvZHkgPSB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ2ZvcicpXG4gICAgdGhpcy5leHBlY3QoJ2VuZCcpXG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IHYsIG1pbl9leHByLCBtYXhfZXhwciwgc3RlcF9leHByLCBib2R5IH0pXG4gIH1cblxuICB3aGlsZV9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGxldCBleHByX2Jsb2NrXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fcGFyZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIGV4cHJfYmxvY2sgPSB0aGlzLmV4cHIoKVxuICAgICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleHByX2Jsb2NrID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgbGV0IGJvZHkgPSB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ3doaWxlJylcbiAgICB0aGlzLmV4cGVjdCgnZW5kJylcbiAgICByZXR1cm4gbmV3IE5vZGUodGhpcywgdG9rZW4sIHsgZXhwcjogZXhwcl9ibG9jaywgYm9keSB9KVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2xvb3BzLmpzIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZXhwcnMgKGVuZCwgZW5kX25leHQpIHsgcmV0dXJuIHRoaXMubG9vcF93aGlsZSh0aGlzLmV4cHIsIG51bGwsIGVuZCwgZW5kX25leHQsICdjb21tYScpIH1cblxuICBleHByICgpIHtcbiAgICBsZXQgbm9kZSA9IHRoaXMuc2ltcGxlX2V4cHIoKVxuICAgIGlmIChub2RlKSB7XG4gICAgICBsZXQgdGVybSA9IHRoaXMudGVybV9leHByKG5vZGUpXG4gICAgICBpZiAodGVybSkgeyByZXR1cm4gdGVybSB9XG5cbiAgICAgIGxldCBmYWN0b3IgPSB0aGlzLmZhY3Rvcl9leHByKG5vZGUpXG4gICAgICBpZiAoZmFjdG9yKSB7IHJldHVybiBmYWN0b3IgfVxuXG4gICAgICBsZXQgY29uZGl0aW9uYWwgPSB0aGlzLmNvbmRpdGlvbmFsX2V4cHIobm9kZSlcbiAgICAgIGlmIChjb25kaXRpb25hbCkgeyByZXR1cm4gY29uZGl0aW9uYWwgfVxuXG4gICAgICBsZXQganVuY3Rpb24gPSB0aGlzLmp1bmN0aW9uX2V4cHIobm9kZSlcbiAgICAgIGlmIChqdW5jdGlvbikgeyByZXR1cm4ganVuY3Rpb24gfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgc2ltcGxlX2V4cHIgKCkge1xuICAgIGlmICh0aGlzLmlzKFsnbnVtYmVyJywgJ3N0cmluZycsICdjaGFyJ10pKSB7IHJldHVybiB0aGlzLm5leHRfZXhwcl9ub2RlKCkgfVxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2ZuX2Fzc2lnbicpKSB7IHJldHVybiB0aGlzLmZuX2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7IHJldHVybiB0aGlzLnN1Yl9leHByKCkgfVxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ29wZW5fYnJhY2tldCcpKSB7IHJldHVybiB0aGlzLmFycmF5X2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnb3Blbl9jdXJseScpKSB7IHJldHVybiB0aGlzLmRpY3RfZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKFsndGhpcycsICd0aGlzX2ZpZWxkJ10pKSB7IHJldHVybiB0aGlzLnRoaXNfZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKCdzdXBlcicpKSB7IHJldHVybiB0aGlzLnN1cGVyX2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnbmV3JykpIHsgcmV0dXJuIHRoaXMubmV3X2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnaWQnKSkgeyByZXR1cm4gdGhpcy5pZF9leHByKCkgfVxuICAgIGVsc2Uge1xuICAgICAgZXJyb3IodGhpcywgdGhpcy50b2tlbiwgJ251bWJlciwgc3RyaW5nLCB2YXJpYWJsZSwgdmFyaWFibGUgcGFyZW4gb3IgZnVuY3Rpb24gY2FsbC9leHByZXNzaW9uIGV4cGVjdGVkJylcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBzdWJfZXhwciAoKSB7XG4gICAgbGV0IG5vZGVzID0gW11cbiAgICBub2Rlcy5wdXNoKG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pKVxuICAgIHRoaXMuZXhwZWN0KCdvcGVuX3BhcmVuJylcbiAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgIG5vZGVzLnB1c2godGhpcy5leHByKCkpXG4gICAgfVxuICAgIG5vZGVzLnB1c2gobmV3IE5vZGUodGhpcywgdGhpcy50b2tlbikpXG4gICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxuXG4gIHRlcm1fZXhwciAobGVmdCkgeyByZXR1cm4gdGhpcy5pcygvXFwrfC0vKSA/IHRoaXMubmV4dF9leHByX25vZGUobGVmdCkgOiBudWxsIH1cblxuICBmYWN0b3JfZXhwciAobGVmdCkgeyByZXR1cm4gdGhpcy5pcygvXFwvfFxcKi8pID8gdGhpcy5uZXh0X2V4cHJfbm9kZShsZWZ0KSA6IG51bGwgfVxuXG4gIGNvbmRpdGlvbmFsX2V4cHIgKGxlZnQpIHsgcmV0dXJuIHRoaXMuaXMoLz58Pj18PHw8PXwhPXw8Pnw9PS8pID8gdGhpcy5uZXh0X2V4cHJfbm9kZShsZWZ0KSA6IG51bGwgfVxuXG4gIGp1bmN0aW9uX2V4cHIgKGxlZnQpIHsgcmV0dXJuIHRoaXMuaXMoLyZ8XFx8LykgPyB0aGlzLm5leHRfZXhwcl9ub2RlKGxlZnQpIDogbnVsbCB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9leHByZXNzaW9ucy5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQXJyYXlFeHByZXNzaW9ucyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGFycmF5X2V4cHIgKCkge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICBub2RlLmRhdGEuYXJncyA9IFtdXG4gICAgdGhpcy5leHBlY3QoJ29wZW5fYnJhY2tldCcpXG4gICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9icmFja2V0JykpIHtcbiAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5sb29wX3doaWxlKHRoaXMuZXhwciwgbnVsbCwgJ2Nsb3NlX2JyYWNrZXQnLCBmYWxzZSwgJ2NvbW1hfGVvbCcpXG4gICAgfVxuICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9icmFja2V0JylcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9hcnJheS5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgRGljdEV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZGljdF9leHByICgpIHtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgbm9kZS5kYXRhLmRlZiA9IFtdXG4gICAgdGhpcy5leHBlY3QoJ29wZW5fY3VybHknKVxuICAgIGlmICghdGhpcy5pcygnY2xvc2VfY3VybHknKSkge1xuICAgICAgbm9kZS5kYXRhLmRlZiA9IHRoaXMubG9vcF93aGlsZSh0aGlzLmtleV9saXRlcmFsLCBbJ2tleSddLCAnY2xvc2VfY3VybHknLCBmYWxzZSwgJ2NvbW1hfGVvbCcpXG4gICAgfVxuICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9jdXJseScpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZGljdC5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgRm5FeHByZXNzaW9ucyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGZuX2V4cHIgKGlkLCBzdGF0ZW1lbnQgPSBmYWxzZSkge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbiwgeyBpZCB9KVxuICAgIG5vZGUuZGF0YS5hcmdzID0gW11cbiAgICBpZiAoc3RhdGVtZW50KSB7XG4gICAgICBub2RlLl9pbl9jbGFzcyA9IHRoaXMuaW5fY2xhc3NcbiAgICAgIG5vZGUuX2ZuX2xldmVsID0gdGhpcy5mbl9sZXZlbCsrXG4gICAgfVxuICAgIHRoaXMubmV4dCgpXG4gICAgdGhpcy5mcmFtZXMuc3RhcnQoJ2ZuJylcbiAgICBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5mbl9hcmdzX2RlZigpXG4gICAgICB9XG4gICAgICB0aGlzLmV4cGVjdCgnY2xvc2VfcGFyZW4nKVxuICAgIH1cbiAgICBub2RlLmRhdGEuYm9keSA9IHRoaXMuYmxvY2soJ2VuZCcsIGZhbHNlKVxuICAgIHRoaXMuZnJhbWVzLmVuZCgpXG4gICAgdGhpcy5leHBlY3QoJ2VuZCcpXG4gICAgaWYgKHN0YXRlbWVudCkge1xuICAgICAgdGhpcy5mbl9sZXZlbC0tXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBmbl9hcmcgKCkge1xuICAgIHRoaXMuZnJhbWVzLmFkZCh0aGlzLnRva2VuLCBudWxsLCAndmFyJylcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAodGhpcy5pcygnYXNzaWduJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBub2RlLmRhdGEuYXNzaWduID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGZuX2FyZ3NfZGVmICgpIHsgcmV0dXJuIHRoaXMubG9vcF93aGlsZSh0aGlzLmZuX2FyZywgWydpZCddLCAnY2xvc2VfcGFyZW4nLCBmYWxzZSwgJ2NvbW1hfGVvbCcpIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2ZuLmpzIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzLmpzJ1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJZEV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgaWRfZXhwciAoZmlyc3QgPSB0cnVlKSB7XG4gICAgaWYgKGZpcnN0ICYmICF0aGlzLmZyYW1lcy5leGlzdHModGhpcy50b2tlbi52YWx1ZSkpIHtcbiAgICAgIGVycm9yKHRoaXMsIHRoaXMudG9rZW4sICd1bmRlY2xhcmVkIGlkZW50aWZpZXInKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fYnJhY2tldCcpKSB7XG4gICAgICBpZiAoIW5vZGUuZGF0YS5maWVsZHMpIHtcbiAgICAgICAgbm9kZS5kYXRhLmZpZWxkcyA9IFtdXG4gICAgICB9XG4gICAgICBub2RlLmRhdGEuZmllbGRzLnB1c2godGhpcy5hcnJheV9leHByKCkpXG4gICAgfVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBub2RlLnRva2VuLl90eXBlID0gJ2ZuJ1xuICAgICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5leHBycygnY2xvc2VfcGFyZW4nLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHdoaWxlICh0aGlzLmlzKFsnaWRfZmllbGQnLCAnb3Blbl9icmFja2V0J10pKSB7XG4gICAgICBpZiAoIW5vZGUuZGF0YS5maWVsZHMpIHtcbiAgICAgICAgbm9kZS5kYXRhLmZpZWxkcyA9IFtdXG4gICAgICB9XG4gICAgICBub2RlLmRhdGEuZmllbGRzLnB1c2godGhpcy5pZF9maWVsZCgpKVxuICAgICAgdGhpcy5za2lwKCdjb21tYScpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBpZF9maWVsZCAoKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIG5vZGUuZGF0YS5hcmdzID0gW11cbiAgICBub2RlLnRva2VuLl90eXBlID0gJ2lkJ1xuICAgIG5vZGUuX2ZpZWxkID0gdHJ1ZVxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fYnJhY2tldCcpKSB7XG4gICAgICBpZiAoIW5vZGUuZGF0YS5maWVsZHMpIHtcbiAgICAgICAgbm9kZS5kYXRhLmZpZWxkcyA9IFtdXG4gICAgICB9XG4gICAgICBub2RlLmRhdGEuZmllbGRzLnB1c2godGhpcy5hcnJheV9leHByKCkpXG4gICAgfVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBub2RlLnRva2VuLl90eXBlID0gJ2ZuJ1xuICAgICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5leHBycygnY2xvc2VfcGFyZW4nLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2lkLmpzIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIENsYXNzRXhwcmVzc2lvbnMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBuZXdfZXhwciAoKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgbGV0IGlkID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKCF0aGlzLmZyYW1lcy5leGlzdHMoaWQudmFsdWUsICdjbGFzcycpKSB7XG4gICAgICBlcnJvcih0aGlzLCBpZCwgJ3VuZGVjbGFyZWQgY2xhc3MnKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgbGV0IGFyZ3MgPSBbXVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgICAgYXJncyA9IHRoaXMuZXhwcnMoJ2Nsb3NlX3BhcmVuJywgZmFsc2UpXG4gICAgICB9XG4gICAgICB0aGlzLmV4cGVjdCgnY2xvc2VfcGFyZW4nKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IE5vZGUodGhpcywgdG9rZW4sIHsgaWQsIGFyZ3MgfSlcbiAgfVxuXG4gIHRoaXNfZXhwciAoKSB7XG4gICAgaWYgKCF0aGlzLmluX2NsYXNzKSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnQCBjYW5ub3QgYmUgdXNlZCBvdXRzaWRlIGNsYXNzIGRlZmluaXRpb24nKVxuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICh0aGlzLmlzKCd0aGlzJykpIHtcbiAgICAgIHJldHVybiB0aGlzLm5leHRfZXhwcl9ub2RlKClcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygndGhpc19maWVsZCcpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pZF9leHByKGZhbHNlKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgc3VwZXJfZXhwciAoKSB7XG4gICAgaWYgKCF0aGlzLmluX2NsYXNzKSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnc3VwZXIgY2Fubm90IGJlIHVzZWQgb3V0c2lkZSBjbGFzcyBkZWZpbml0aW9uJylcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pZF9leHByKGZhbHNlKVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9jbGFzcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW5jbHVkZTogL14jXCIoW15cIl0qKVwiL2ksXG5cbiAgY29uc3Q6IC9eIyhbQS1aX11bQS1aXzAtOV0qKS9pLFxuXG4gIHJlc2VydmVkOiAvXihwdXRzfHB1dGMpL2ksXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL3Jlc2VydmVkLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBLZXlMaXRlcmFscyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGtleV9saXRlcmFsICgpIHtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgdGhpcy5leHBlY3QoJ2tleScpXG4gICAgbm9kZS5kYXRhLmV4cHIgPSB0aGlzLmV4cHIoKVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2tleV9saXRlcmFsLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL3RlbXBsYXRlcy5qcydcbmltcG9ydCBDb2RlVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2NvZGUuanMnXG5pbXBvcnQgQmxvY2tUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvYmxvY2suanMnXG5pbXBvcnQgU3RhdGVtZW50VGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL3N0YXRlbWVudHMuanMnXG5pbXBvcnQgRXhwcmVzc2lvblRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9leHByZXNzaW9ucy5qcydcbmltcG9ydCBQcmltaXRpdmVUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvcHJpbWl0aXZlcy5qcydcbmltcG9ydCBPcGVyYXRvclRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9vcGVyYXRvcnMuanMnXG5pbXBvcnQgSWRUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvaWQuanMnXG5pbXBvcnQgQ2xhc3NUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvY2xhc3MuanMnXG5pbXBvcnQgRm5UZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvZm4uanMnXG5pbXBvcnQgQXJyYXlUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvYXJyYXkuanMnXG5pbXBvcnQgRGljdFRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9kaWN0LmpzJ1xuaW1wb3J0IEFzc2lnblRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9hc3NpZ24uanMnXG5cbmNsYXNzIEVtcHR5Q2xhc3Mge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNwaWxlciBleHRlbmRzIG1peChFbXB0eUNsYXNzKS53aXRoKFxuICBUZW1wbGF0ZXMsXG4gIENvZGVUZW1wbGF0ZXMsXG5cbiAgQmxvY2tUZW1wbGF0ZXMsXG4gIFN0YXRlbWVudFRlbXBsYXRlcyxcbiAgRXhwcmVzc2lvblRlbXBsYXRlcyxcblxuICBQcmltaXRpdmVUZW1wbGF0ZXMsXG4gIE9wZXJhdG9yVGVtcGxhdGVzLFxuICBJZFRlbXBsYXRlcyxcblxuICBDbGFzc1RlbXBsYXRlcyxcbiAgRm5UZW1wbGF0ZXMsXG5cbiAgQXJyYXlUZW1wbGF0ZXMsXG4gIERpY3RUZW1wbGF0ZXMsXG5cbiAgQXNzaWduVGVtcGxhdGVzXG4pIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7IHJldHVybiB0aGlzLmxpbmVzLmxlbmd0aCB9XG5cbiAgZ2V0IGVvcyAoKSB7IHJldHVybiB0aGlzLm9mZnNldCA+PSB0aGlzLm5vZGVzLmxlbmd0aCB9XG5cbiAgZ2V0IG5vZGUgKCkgeyByZXR1cm4gdGhpcy5ub2RlX2F0KHRoaXMub2Zmc2V0KSB9XG5cbiAgdmFsaWRPZmZzZXQgKG9mZnNldCkgeyByZXR1cm4gb2Zmc2V0ID49IDAgJiYgb2Zmc2V0IDwgdGhpcy5ub2Rlcy5sZW5ndGggfVxuXG4gIG5vZGVfYXQgKG9mZnNldCkgeyByZXR1cm4gdGhpcy52YWxpZE9mZnNldChvZmZzZXQpID8gdGhpcy5ub2Rlc1tvZmZzZXRdIDogbnVsbCB9XG5cbiAgcGVlayAoYyA9IDEpIHsgcmV0dXJuIHRoaXMubm9kZV9hdCh0aGlzLm9mZnNldCArIGMpIH1cblxuICBuZXh0IChjID0gMSkgeyB0aGlzLm9mZnNldCArPSBjIH1cblxuICB3cml0ZSAoLi4udmFsdWVzKSB7IHRoaXMubGluZSArPSB2YWx1ZXMuam9pbignJykgfVxuXG4gIHdyaXRlbG4gKC4uLnZhbHVlcykge1xuICAgIHRoaXMud3JpdGUoLi4udmFsdWVzKVxuICAgIHRoaXMubGluZXMgPSB0aGlzLmxpbmVzLmNvbmNhdCh0aGlzLmxpbmUuc3BsaXQoJ1xcbicpKVxuICAgIHRoaXMubGluZSA9ICcnXG4gIH1cblxuICByZXNldCAobm9kZXMpIHtcbiAgICB0aGlzLmVycm9ycyA9IDBcbiAgICB0aGlzLm5vZGVzID0gbm9kZXMgfHwgW11cbiAgICB0aGlzLmxpbmVzID0gW11cbiAgICB0aGlzLmxpbmUgPSAnJ1xuICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgIHRoaXMuY29kZSA9ICcnXG4gICAgdGhpcy5pbmRlbnRfbGV2ZWwgPSAwXG4gIH1cblxuICBjb21tYSAobm9kZXMpIHtcbiAgICBsZXQgYSA9IFtdXG4gICAgZm9yIChsZXQgbiBvZiBub2Rlcykge1xuICAgICAgYS5wdXNoKG4gaW5zdGFuY2VvZiBOb2RlID8gdGhpcy5leHByKG4pIDogbilcbiAgICB9XG4gICAgcmV0dXJuIGEuam9pbignLCAnKVxuICB9XG5cbiAgbG4gKHN0cikgeyByZXR1cm4gc3RyICsgKCFfLmVuZHNXaXRoKHN0ciwgJ1xcbicpID8gJ1xcbicgOiAnJykgfVxuXG4gIGluZGVudCAoc3RyKSB7IHJldHVybiBfLnBhZFN0YXJ0KCcnLCB0aGlzLmluZGVudF9sZXZlbCAqIDIpICsgc3RyIH1cblxuICBzdHIgKHZhbHVlKSB7IHJldHVybiAnXFwnJyArIHZhbHVlLnJlcGxhY2UoLycvZywgJ1xcJycpICsgJ1xcJycgfVxuXG4gIHJ1biAobm9kZXMpIHtcbiAgICB0aGlzLnJlc2V0KG5vZGVzKVxuICAgIHRoaXMuY29kZV9zdGFydCgpXG4gICAgd2hpbGUgKCF0aGlzLmVvcykge1xuICAgICAgdGhpcy53cml0ZWxuKHRoaXMuc3RhdGVtZW50KHRoaXMubm9kZSkpXG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgICB0aGlzLmNvZGVfZW5kKClcbiAgICB0aGlzLmNvZGUgPSB0aGlzLmxpbmVzLmpvaW4oJ1xcbicpXG4gICAgcmV0dXJuIHRoaXMuY29kZVxuICB9XG5cbiAgZHVtcCAoKSB7XG4gICAgY29uc29sZS5pbmZvKCd0cmFuc3BpbGVyIGR1bXAnKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29kZSlcbiAgICBjb25zb2xlLmxvZygnJylcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdHJhbnNwaWxlci5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICB0ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIGlmIChfLmlzU3RyaW5nKG5vZGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlX3RlbXBsYXRlKG5vZGUpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2ZuJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmZuX2NhbGxfdGVtcGxhdGUobm9kZSlcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnZm5fYXNzaWduJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmZuX2Fzc2lnbl90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKCdvcGVuX2JyYWNrZXQnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuYXJyYXlfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnb3Blbl9jdXJseScpKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaWN0X3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoWydtYXRoJywgJ2xvZ2ljJywgJ2NvbXAnXSkpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wZXJhdG9yX3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoWyd0aGlzJywgJ3RoaXNfZmllbGQnXSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoaXNfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnbmV3JykpIHtcbiAgICAgIHJldHVybiB0aGlzLm5ld190ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKFsnY2hhcicsICdzdHJpbmcnXSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0cmluZ190ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKCdpZCcpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pZF90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlX3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3RlbXBsYXRlcy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBDb2RlVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgY29kZV9zdGFydF90ZW1wbGF0ZSAoKSB7XG4gICAgdGhpcy53cml0ZWxuKCcoZnVuY3Rpb24gKCkgeycpXG4gICAgdGhpcy5pbmRlbnRfbGV2ZWwrK1xuICAgIHRoaXMud3JpdGVsbignXFwndXNlIHN0cmljdFxcJzsnKVxuICAgIHRoaXMud3JpdGVsbigpXG4gIH1cblxuICBjb2RlX2VuZF90ZW1wbGF0ZSAoKSB7XG4gICAgdGhpcy53cml0ZWxuKCd9KSgpOycpXG4gICAgdGhpcy5pbmRlbnRfbGV2ZWwtLVxuICAgIHRoaXMud3JpdGVsbigpXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvY29kZS5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBCbG9ja1RlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGJsb2NrX3RlbXBsYXRlIChub2RlKSB7XG4gICAgbGV0IHN0ciA9IHRoaXMubG4oJ3snKVxuXG4gICAgdGhpcy5pbmRlbnRfbGV2ZWwrK1xuXG4gICAgaWYgKF8uaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yIChsZXQgbiBvZiBub2RlKSB7XG4gICAgICAgIHN0ciArPSB0aGlzLnN0YXRlbWVudF90ZW1wbGF0ZShuKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHN0ciA9IHRoaXMuc3RhdGVtZW50X3RlbXBsYXRlKG5vZGUpXG4gICAgfVxuXG4gICAgdGhpcy5pbmRlbnRfbGV2ZWwtLVxuXG4gICAgc3RyICs9IHRoaXMubG4odGhpcy5pbmRlbnQoJ30nKSlcblxuICAgIHJldHVybiBzdHJcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9ibG9jay5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBTdGF0ZW1lbnRUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBzdGF0ZW1lbnRfdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICBsZXQgc3RyID0gJydcblxuICAgIGlmIChfLmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAobGV0IG4gb2Ygbm9kZSkge1xuICAgICAgICBzdHIgKz0gdGhpcy5zdGF0ZW1lbnQobilcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZSkge1xuICAgICAgbGV0IGQgPSBub2RlLmRhdGEgfHwge31cbiAgICAgIGxldCB0ID0ge31cblxuICAgICAgaWYgKG5vZGUuaXMoWydhc3NpZ24nLCAnZm5fYXNzaWduJ10pKSB7XG4gICAgICAgIHQgPSB0aGlzLmFzc2lnbihub2RlKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnZm4nKSkge1xuICAgICAgICB0ID0gdGhpcy5mbl9jYWxsKG5vZGUsIHRydWUpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChub2RlLmlzKCdpZicpKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgdG1wbDogJ2lmICgje2V4cHJ9KSAje3RydWVfYm9keX0je2ZhbHNlX2JvZHl9JyxcbiAgICAgICAgICBkYXQ6IHtcbiAgICAgICAgICAgIGV4cHI6IHRoaXMuZXhwcihkLmV4cHIpLFxuICAgICAgICAgICAgdHJ1ZV9ib2R5OiB0aGlzLmJsb2NrKGQudHJ1ZV9ib2R5KSxcbiAgICAgICAgICAgIGZhbHNlX2JvZHk6IHRoaXMuc3RhdGVtZW50KGQuZmFsc2VfYm9keSksXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChub2RlLmlzKCdlbHNlJykpIHtcbiAgICAgICAgaWYgKGQuZXhwcikgeyAvLyBlbHNlIGlmXG4gICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgIHRtcGw6ICdlbHNlIGlmICgje2V4cHJ9KSAje3RydWVfYm9keX0je2ZhbHNlX2JvZHl9JyxcbiAgICAgICAgICAgIGRhdDoge1xuICAgICAgICAgICAgICBleHByOiB0aGlzLmV4cHIoZC5leHByKSxcbiAgICAgICAgICAgICAgdHJ1ZV9ib2R5OiB0aGlzLmJsb2NrKGQudHJ1ZV9ib2R5KSxcbiAgICAgICAgICAgICAgZmFsc2VfYm9keTogdGhpcy5zdGF0ZW1lbnQoZC5mYWxzZV9ib2R5KSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgIHRtcGw6ICdlbHNlICN7ZmFsc2VfYm9keX0nLFxuICAgICAgICAgICAgZGF0OiB7IGZhbHNlX2JvZHk6IHRoaXMuYmxvY2soZC5mYWxzZV9ib2R5KSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChub2RlLmlzKCd3aGlsZScpKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgdG1wbDogJ3doaWxlICgje2V4cHJ9KSAje2JvZHl9JyxcbiAgICAgICAgICBkYXQ6IHtcbiAgICAgICAgICAgIGV4cHI6IHRoaXMuZXhwcihkLmV4cHIpLFxuICAgICAgICAgICAgYm9keTogdGhpcy5ibG9jayhkLmJvZHkpLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnZm9yJykpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICB0bXBsOiAnZm9yIChsZXQgI3t2fSA9ICN7bWluX2V4cHJ9OyAje3Z9IDwgI3ttYXhfZXhwcn07ICN7dn0gKz0gI3tzdGVwX2V4cHJ9KSAje2JvZHl9JyxcbiAgICAgICAgICBkYXQ6IHtcbiAgICAgICAgICAgIHY6IGQudi52YWx1ZSxcbiAgICAgICAgICAgIG1pbl9leHByOiB0aGlzLmV4cHIoZC5taW5fZXhwciksXG4gICAgICAgICAgICBtYXhfZXhwcjogdGhpcy5leHByKGQubWF4X2V4cHIpLFxuICAgICAgICAgICAgc3RlcF9leHByOiBkLnN0ZXBfZXhwciA/IHRoaXMuZXhwcihkLnN0ZXBfZXhwcikgOiAnMScsXG4gICAgICAgICAgICBib2R5OiB0aGlzLmJsb2NrKGQuYm9keSksXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChub2RlLmlzKCdyZXR1cm4nKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICdyZXR1cm4gI3thcmdzfScsXG4gICAgICAgICAgZGF0OiB7IGFyZ3M6IHRoaXMuZXhwcihkLmFyZ3MsICcsICcpIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcyhbJ2JyZWFrJywgJ2NvbnRpbnVlJ10pKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgdG1wbDogJyN7d29yZH0nLFxuICAgICAgICAgIGRhdDogeyB3b3JkOiBub2RlLnZhbHVlIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnY2xhc3MnKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICdjbGFzcyAje25hbWV9I3tfZXh0ZW5kc30gI3tib2R5fScsXG4gICAgICAgICAgZGF0OiB7XG4gICAgICAgICAgICBuYW1lOiBkLmlkLnZhbHVlLFxuICAgICAgICAgICAgX2V4dGVuZHM6IGQuX2V4dGVuZHMgPyAnIGV4dGVuZHMgJyArIHRoaXMuZXhwcihkLl9leHRlbmRzLCAnLCAnKSA6ICcnLFxuICAgICAgICAgICAgYm9keTogdGhpcy5ibG9jayhkLmJvZHkpLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdHIgPSBfLnRlbXBsYXRlKHQudG1wbCkodC5kYXQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubG4odGhpcy5pbmRlbnQoc3RyKSlcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9zdGF0ZW1lbnRzLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEV4cHJlc3Npb25UZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBleHByX3RlbXBsYXRlIChub2RlLCBzZXBhcmF0b3IpIHtcbiAgICBsZXQgc3RyID0gJydcblxuICAgIGlmIChfLmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGxldCBhID0gW11cbiAgICAgIGZvciAobGV0IG4gb2Ygbm9kZSkge1xuICAgICAgICBhLnB1c2godGhpcy5leHByKG4pKVxuICAgICAgfVxuICAgICAgc3RyID0gYS5qb2luKHNlcGFyYXRvciB8fCAnJylcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgIGxldCBkID0gbm9kZSAmJiBub2RlLmRhdGEgfHwge31cbiAgICAgIGxldCB0ID0gbm9kZSA/IHRoaXMudGVtcGxhdGUobm9kZSwgZCkgOiB7IHRtcGw6ICd1bmRlZmluZWQnLCBkYXQ6IHt9IH1cbiAgICAgIHN0ciA9IF8udGVtcGxhdGUodC50bXBsKSh0LmRhdClcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZXhwcmVzc2lvbnMuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgUHJpbWl0aXZlVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgc3RyaW5nX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje3ZhbHVlfScsXG4gICAgICBkYXQ6IHsgdmFsdWU6IHRoaXMuc3RyKG5vZGUudmFsdWUpIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvcHJpbWl0aXZlcy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBPcGVyYXRvclRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIG9wZXJhdG9yX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje2xlZnR9ICN7b3B9ICN7cmlnaHR9JyxcbiAgICAgIGRhdDoge1xuICAgICAgICBvcDogbm9kZS52YWx1ZSxcbiAgICAgICAgbGVmdDogdGhpcy5leHByX3RlbXBsYXRlKGQubGVmdCksXG4gICAgICAgIHJpZ2h0OiB0aGlzLmV4cHJfdGVtcGxhdGUoZC5yaWdodCksXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL29wZXJhdG9ycy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJZFRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIG5vZGVfdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG1wbDogJyN7bm9kZX0nLFxuICAgICAgZGF0OiB7IG5vZGUgfVxuICAgIH1cbiAgfVxuXG4gIGlkX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje2ZpZWxkfSN7dmFsdWV9I3tmaWVsZHN9I3thc3NpZ259JyxcbiAgICAgIGRhdDoge1xuICAgICAgICBmaWVsZDogbm9kZS5fZmllbGQgPyAnLicgOiAnJyxcbiAgICAgICAgdmFsdWU6IG5vZGUudmFsdWUsXG4gICAgICAgIGZpZWxkczogZC5maWVsZHMgPyB0aGlzLmV4cHJfdGVtcGxhdGUoZC5maWVsZHMsICcnKSA6ICcnLFxuICAgICAgICBhc3NpZ246IGQuYXNzaWduID8gJyA9ICcgKyB0aGlzLmV4cHJfdGVtcGxhdGUoZC5hc3NpZ24sICcnKSA6ICcnLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhbHVlX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje3ZhbHVlfScsXG4gICAgICBkYXQ6IHsgdmFsdWU6IG5vZGUudmFsdWUgfVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9pZC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBDbGFzc1RlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIHRoaXNfdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG1wbDogJ3RoaXMje2RvdH0je2ZpZWxkfSN7ZmllbGRzfScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgZG90OiBub2RlLmlzKCd0aGlzX2ZpZWxkJykgPyAnLicgOiAnJyxcbiAgICAgICAgZmllbGQ6IG5vZGUuaXMoJ3RoaXNfZmllbGQnKSA/IG5vZGUudmFsdWUgOiAnJyxcbiAgICAgICAgZmllbGRzOiBkLmZpZWxkcyA/IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmZpZWxkcywgJycpIDogJycsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3X3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICduZXcgI3tpZH0oI3thcmdzfSknLFxuICAgICAgZGF0OiB7XG4gICAgICAgIGlkOiBkLmlkLnZhbHVlLFxuICAgICAgICBhcmdzOiB0aGlzLmV4cHJfdGVtcGxhdGUoZC5hcmdzLCAnLCAnKSxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvY2xhc3MuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgRm5UZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBmbl9kZWYgKGFyZ3MsIGJvZHksIGluX2NsYXNzKSB7XG4gICAgcmV0dXJuIF8udGVtcGxhdGUoJyN7Zm59KCN7YXJnc30pICN7Ym9keX0nKSh7XG4gICAgICBmbjogIWluX2NsYXNzID8gJ2Z1bmN0aW9uICcgOiAnJyxcbiAgICAgIGFyZ3M6IHRoaXMuZXhwcl90ZW1wbGF0ZShhcmdzLCAnLCAnKSxcbiAgICAgIGJvZHk6IHRoaXMuYmxvY2tfdGVtcGxhdGUoYm9keSksXG4gICAgfSlcbiAgfVxuXG4gIGZuX2NhbGxfdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICBsZXQgdCA9IHt9XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGxldCBkID0gbm9kZS5kYXRhIHx8IHt9XG4gICAgICB0ID0ge1xuICAgICAgICB0bXBsOiAnI3tmaWVsZH0je2ZufSgje2FyZ3N9KScsXG4gICAgICAgIGRhdDoge1xuICAgICAgICAgIGZpZWxkOiBub2RlLl9maWVsZCA/ICcuJyA6ICcnLFxuICAgICAgICAgIGZuOiBub2RlLnZhbHVlLFxuICAgICAgICAgIGFyZ3M6IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmFyZ3MsICcsICcpLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0XG4gIH1cblxuICBmbl9hc3NpZ25fdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG1wbDogJyN7Zm59JyxcbiAgICAgIGRhdDogeyBmbjogdGhpcy5mbl9kZWYoZC5hcmdzLCBkLmJvZHkpIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZm4uanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQXJyYXlUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBhcnJheV90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnWyN7YXJnc31dI3tmaWVsZHN9JyxcbiAgICAgIGRhdDoge1xuICAgICAgICBhcmdzOiB0aGlzLmV4cHJfdGVtcGxhdGUoZC5hcmdzLCAnLCAnKSxcbiAgICAgICAgZmllbGRzOiBkLmZpZWxkcyA/IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmZpZWxkcywgJycpIDogJycsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2FycmF5LmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIERpY3RUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBkaWN0X3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgbGV0IGRlZiA9IF8ubWFwKGQuZGVmLCBmID0+IF8udGVtcGxhdGUoJyN7dmFsdWV9OiAje2V4cHJ9JykoeyB2YWx1ZTogZi52YWx1ZSwgZXhwcjogdGhpcy5leHByX3RlbXBsYXRlKGYuZGF0YS5leHByKSB9KSlcbiAgICByZXR1cm4ge1xuICAgICAgdG1wbDogJ3sje2RlZn19I3tmaWVsZHN9JyxcbiAgICAgIGRhdDoge1xuICAgICAgICBkZWY6IHRoaXMuZXhwcl90ZW1wbGF0ZShkZWYsICcsICcpLFxuICAgICAgICBmaWVsZHM6IGQuZmllbGRzID8gdGhpcy5leHByX3RlbXBsYXRlKGQuZmllbGRzLCAnJykgOiAnJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9kaWN0LmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEFzc2lnblRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGFzc2lnbl90ZW1wbGF0ZSAobm9kZSkge1xuICAgIGxldCB0ID0ge31cbiAgICBpZiAobm9kZSkge1xuICAgICAgbGV0IGQgPSBub2RlLmRhdGEgfHwge31cblxuICAgICAgbGV0IGlkID0gdGhpcy5leHByX3RlbXBsYXRlKGQuaWQpXG4gICAgICBsZXQgX2xldCA9IG5vZGUuX2xldCA/ICdsZXQgJyA6ICcnXG4gICAgICBsZXQgZXhwclxuICAgICAgbGV0IG9wXG5cbiAgICAgIGlmIChub2RlLmlzKCdhc3NpZ24nKSkge1xuICAgICAgICBvcCA9ICcgJyArIG5vZGUudmFsdWUgKyAnICdcbiAgICAgICAgZXhwciA9IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmV4cHIpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChub2RlLmlzKCdmbl9hc3NpZ24nKSkge1xuICAgICAgICBvcCA9ICFub2RlLl9pbl9jbGFzcyB8fCBub2RlLl9mbl9sZXZlbCA+IDAgPyAnID0gJyA6ICcgJ1xuICAgICAgICBleHByID0gdGhpcy5mbl9kZWYoZC5hcmdzLCBkLmJvZHksIG5vZGUuX2luX2NsYXNzICYmIG5vZGUuX2ZuX2xldmVsID09PSAwKVxuICAgICAgfVxuXG4gICAgICB0ID0ge1xuICAgICAgICB0bXBsOiAnI3tfbGV0fSN7aWR9I3tvcH0je2V4cHJ9JyxcbiAgICAgICAgZGF0OiB7IF9sZXQsIGlkLCBvcCwgZXhwciB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvYXNzaWduLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==