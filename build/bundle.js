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
	
	var _main = __webpack_require__(77);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _emitter = __webpack_require__(13);
	
	var _lexer = __webpack_require__(14);
	
	var _lexer2 = _interopRequireDefault(_lexer);
	
	var _parser = __webpack_require__(26);
	
	var _parser2 = _interopRequireDefault(_parser);
	
	var _transpiler = __webpack_require__(43);
	
	var _transpiler2 = _interopRequireDefault(_transpiler);
	
	var _memory = __webpack_require__(57);
	
	var _memorymanager = __webpack_require__(59);
	
	var _memorymanager2 = _interopRequireDefault(_memorymanager);
	
	var _stack = __webpack_require__(61);
	
	var _stack2 = _interopRequireDefault(_stack);
	
	var _interrupt = __webpack_require__(62);
	
	var _interrupt2 = _interopRequireDefault(_interrupt);
	
	var _guideo = __webpack_require__(63);
	
	var _guideo2 = _interopRequireDefault(_guideo);
	
	var _ken = __webpack_require__(75);
	
	var _ken2 = _interopRequireDefault(_ken);
	
	var _mickey = __webpack_require__(76);
	
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _utils = __webpack_require__(3);
	
	var _types = __webpack_require__(15);
	
	var _types2 = _interopRequireDefault(_types);
	
	var _const = __webpack_require__(24);
	
	var _const2 = _interopRequireDefault(_const);
	
	var _include = __webpack_require__(25);
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _assigns = __webpack_require__(16);
	
	var _assigns2 = _interopRequireDefault(_assigns);
	
	var _delimiters = __webpack_require__(17);
	
	var _delimiters2 = _interopRequireDefault(_delimiters);
	
	var _comments = __webpack_require__(18);
	
	var _comments2 = _interopRequireDefault(_comments);
	
	var _groups = __webpack_require__(19);
	
	var _groups2 = _interopRequireDefault(_groups);
	
	var _literals = __webpack_require__(20);
	
	var _literals2 = _interopRequireDefault(_literals);
	
	var _operators = __webpack_require__(21);
	
	var _operators2 = _interopRequireDefault(_operators);
	
	var _primitives = __webpack_require__(22);
	
	var _primitives2 = _interopRequireDefault(_primitives);
	
	var _reserved = __webpack_require__(23);
	
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
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  comment: /^\/\/([^\r\n]*)/
	};

/***/ },
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lexer = __webpack_require__(14);
	
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _globals = __webpack_require__(12);
	
	var _frame = __webpack_require__(27);
	
	var _key_literal = __webpack_require__(28);
	
	var _key_literal2 = _interopRequireDefault(_key_literal);
	
	var _statements = __webpack_require__(29);
	
	var _statements2 = _interopRequireDefault(_statements);
	
	var _id = __webpack_require__(30);
	
	var _id2 = _interopRequireDefault(_id);
	
	var _assign = __webpack_require__(31);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _return = __webpack_require__(32);
	
	var _return2 = _interopRequireDefault(_return);
	
	var _class = __webpack_require__(33);
	
	var _class2 = _interopRequireDefault(_class);
	
	var _conditions = __webpack_require__(34);
	
	var _conditions2 = _interopRequireDefault(_conditions);
	
	var _var = __webpack_require__(35);
	
	var _var2 = _interopRequireDefault(_var);
	
	var _loops = __webpack_require__(36);
	
	var _loops2 = _interopRequireDefault(_loops);
	
	var _expressions = __webpack_require__(37);
	
	var _expressions2 = _interopRequireDefault(_expressions);
	
	var _array = __webpack_require__(38);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _dict = __webpack_require__(39);
	
	var _dict2 = _interopRequireDefault(_dict);
	
	var _fn = __webpack_require__(40);
	
	var _fn2 = _interopRequireDefault(_fn);
	
	var _id3 = __webpack_require__(41);
	
	var _id4 = _interopRequireDefault(_id3);
	
	var _class3 = __webpack_require__(42);
	
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
/* 27 */
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(26);
	
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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(26);
	
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(26);
	
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(26);
	
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(26);
	
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lexer = __webpack_require__(14);
	
	var _parser = __webpack_require__(26);
	
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(26);
	
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
/* 37 */
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(26);
	
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(26);
	
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _parser = __webpack_require__(26);
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _globals = __webpack_require__(12);
	
	var _parser = __webpack_require__(26);
	
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
/* 42 */
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _templates = __webpack_require__(44);
	
	var _templates2 = _interopRequireDefault(_templates);
	
	var _code = __webpack_require__(45);
	
	var _code2 = _interopRequireDefault(_code);
	
	var _block = __webpack_require__(46);
	
	var _block2 = _interopRequireDefault(_block);
	
	var _statements = __webpack_require__(47);
	
	var _statements2 = _interopRequireDefault(_statements);
	
	var _expressions = __webpack_require__(48);
	
	var _expressions2 = _interopRequireDefault(_expressions);
	
	var _primitives = __webpack_require__(49);
	
	var _primitives2 = _interopRequireDefault(_primitives);
	
	var _operators = __webpack_require__(50);
	
	var _operators2 = _interopRequireDefault(_operators);
	
	var _id = __webpack_require__(51);
	
	var _id2 = _interopRequireDefault(_id);
	
	var _class = __webpack_require__(52);
	
	var _class2 = _interopRequireDefault(_class);
	
	var _fn = __webpack_require__(53);
	
	var _fn2 = _interopRequireDefault(_fn);
	
	var _array = __webpack_require__(54);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _dict = __webpack_require__(55);
	
	var _dict2 = _interopRequireDefault(_dict);
	
	var _assign = __webpack_require__(56);
	
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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Memory = exports.data_type_size = exports.data_type_fns = exports.data_type_sizes = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _hexy = __webpack_require__(58);
	
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
/* 58 */
/***/ function(module, exports) {

	module.exports = require("hexy");

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _hexy = __webpack_require__(58);
	
	var _hexy2 = _interopRequireDefault(_hexy);
	
	var _prettyBytes = __webpack_require__(60);
	
	var _prettyBytes2 = _interopRequireDefault(_prettyBytes);
	
	var _memory = __webpack_require__(57);
	
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
/* 60 */
/***/ function(module, exports) {

	module.exports = require("pretty-bytes");

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _globals = __webpack_require__(12);
	
	var _memory = __webpack_require__(57);
	
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
/* 62 */
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _rainbow = __webpack_require__(64);
	
	var _rainbow2 = _interopRequireDefault(_rainbow);
	
	var _fonzo = __webpack_require__(66);
	
	var _fonzo2 = _interopRequireDefault(_fonzo);
	
	var _orwell = __webpack_require__(67);
	
	var _orwell2 = _interopRequireDefault(_orwell);
	
	var _beagle = __webpack_require__(68);
	
	var _beagle2 = _interopRequireDefault(_beagle);
	
	var _violet = __webpack_require__(69);
	
	var _violet2 = _interopRequireDefault(_violet);
	
	var _overlays = __webpack_require__(70);
	
	var _chip = __webpack_require__(65);
	
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
	
	    _this._onResize = _this.resize.bind(_this);
	    _this.on('resize', _this._onResize);
	
	    _this.async(function () {
	      this._rainbow = new _rainbow2.default(main);
	      this._fonzo = new _fonzo2.default(main);
	      this._orwell = new _orwell2.default(main);
	      this._beagle = new _beagle2.default(main);
	      this._violet = new _violet2.default(main);
	
	      this._overlays = new _overlays.Overlays(main, {
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
	
	      this._force_redraw = false;
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
	        var pixels = this._pixels;
	        var palette = this._rainbow.data;
	        var sz = this._size;
	
	        for (var i = 0; i < sz; i++) {
	          pixels[i] = palette[data[i]];
	        }
	
	        this._context.putImageData(this._imageData, 0, 0);
	
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
	        this._overlays.screen.sprite.addChild(this._sprite);
	      } else {
	        this._sprite.texture = this._texture;
	      }
	
	      this._context = this._canvas.getContext('2d', { alpha: true, antialias: false });
	      this._context.clearRect(0, 0, this._width, this._height);
	
	      this._imageData = this._context.getImageData(0, 0, this._width, this._height);
	
	      this._pixels = new Uint32Array(this._imageData.data.buffer);
	
	      this._overlays.resize();
	
	      this.center();
	
	      this.test();
	
	      return this;
	    }
	  }, {
	    key: 'pixel',
	    value: function pixel(x, y, c) {
	      var i = void 0;
	      if (_.isNumber(c)) {
	        i = this.toIndex(x, y);
	      } else {
	        i = x;
	        c = y;
	      }
	      var data = this._data;
	      if (data[i] !== c) {
	        data[i] = c || 0;
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
	
	      var tex = PIXI.Texture.fromImage('./build/' + __webpack_require__(72)("./" + filename), undefined, PIXI.SCALE_MODES.NEAREST);
	      tex.on('update', function () {
	        return _this2.update();
	      });
	      return tex;
	    }
	  }, {
	    key: 'test',
	    value: function test() {
	      this.clear();
	
	      this.pixel(10, 10, 13);
	      this.pixel(20, 10, 5);
	      this.pixel(30, 10, 6);
	
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(65);
	
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _emitter = __webpack_require__(13);
	
	var _utils = __webpack_require__(3);
	
	var _memory = __webpack_require__(57);
	
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
	        this._size = (this._count || 1) * ((this._width || 1) * (this._height || 1)) * sz;
	
	        this._top = _.get(main, 'mem_map.' + name + '.top', currentOffset);
	        this._bottom = this._top + this._size - 1;
	
	        _.set(main, 'mem_map.' + name, {
	          top: this._top,
	          bottom: this._bottom,
	          size: this._size
	        });
	
	        currentOffset = this._bottom + 1;
	
	        this._data = new window[_memory.data_type_fns[_.isString(data_size) ? data_size : 'i8'] + 'Array'](this.memory.buffer, this._top, this._count);
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
	
	      this.guideo.force_redraw = true;
	      this.guideo.force_flip = this.guideo.force_flip || flip;
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
	      return this.update();
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
	    key: 'count',
	    get: function get() {
	      return this._count;
	    }
	  }]);
	
	  return Chip;
	}(_emitter.Emitter);
	
	exports.default = Chip;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _chip = __webpack_require__(65);
	
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _chip = __webpack_require__(65);
	
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(65);
	
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(65);
	
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
/* 70 */
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
	  function Overlay(overlays, width, height) {
	    _classCallCheck(this, Overlay);
	
	    this._overlays = overlays;
	
	    this.width = width;
	    this.height = height;
	
	    this.reset();
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
	    key: 'reset',
	    value: function reset() {
	      this._last = 0;
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      if (this.canvas) {
	        this.canvas.destroy();
	        this.canvas = null;
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
	  }]);
	
	  return Overlay;
	}();
	
	var ScreenOverlay = exports.ScreenOverlay = function (_Overlay) {
	  _inherits(ScreenOverlay, _Overlay);
	
	  function ScreenOverlay(overlays, width, height, options) {
	    _classCallCheck(this, ScreenOverlay);
	
	    var _this = _possibleConstructorReturn(this, (ScreenOverlay.__proto__ || Object.getPrototypeOf(ScreenOverlay)).call(this, overlays, width, height));
	
	    _this.create();
	
	    _this.sprite.x = _this.guideo.offset_x + _this.guideo.margins_x / 2;
	    _this.sprite.y = _this.guideo.offset_y + _this.guideo.margins_y / 2;
	    return _this;
	  }
	
	  return ScreenOverlay;
	}(Overlay);
	
	var ScanlinesOverlay = exports.ScanlinesOverlay = function (_Overlay2) {
	  _inherits(ScanlinesOverlay, _Overlay2);
	
	  function ScanlinesOverlay(overlays, width, height, options) {
	    _classCallCheck(this, ScanlinesOverlay);
	
	    var _this2 = _possibleConstructorReturn(this, (ScanlinesOverlay.__proto__ || Object.getPrototypeOf(ScanlinesOverlay)).call(this, overlays, width, height));
	
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
	
	  function ScanlineOverlay(overlays, width, height, options) {
	    _classCallCheck(this, ScanlineOverlay);
	
	    var _this3 = _possibleConstructorReturn(this, (ScanlineOverlay.__proto__ || Object.getPrototypeOf(ScanlineOverlay)).call(this, overlays, width, height));
	
	    _this3.rate = _lodash2.default.get(options, 'rate', 50);
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
	      if (t - this._last >= this.rate) {
	        this.sprite.y += this.speed;
	        if (this.sprite.y > this.height) {
	          this.sprite.y = -this.sprite.height;
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
	
	    _this4.rate = _lodash2.default.get(options, 'rate', 250);
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
	      if (t - this._last >= this.rate) {
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
	
	  function CrtOverlay(overlays, width, height, options) {
	    _classCallCheck(this, CrtOverlay);
	
	    var _this6 = _possibleConstructorReturn(this, (CrtOverlay.__proto__ || Object.getPrototypeOf(CrtOverlay)).call(this, overlays, width, height));
	
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
	    var scale = 1;
	    var margins_x = this.margins_x || 0;
	    var margins_y = this.margins_y || 0;
	
	    this._list = {};
	    var l = this._list;
	
	    if (_lodash2.default.get(options, 'screen')) {
	      l.screen = new ScreenOverlay(this, this.guideo.width, this.guideo.height, _lodash2.default.get(options, 'screen'));
	      l.screen.sprite.scale = new PIXI.Point(scale, scale);
	      stage.addChild(l.screen.sprite);
	    }
	
	    if (_lodash2.default.get(options, 'scanlines')) {
	      l.scanlines = new ScanlinesOverlay(this, width, height, _lodash2.default.get(options, 'scanlines'));
	      stage.addChild(l.scanlines.sprite);
	    }
	
	    if (_lodash2.default.get(options, 'scanline')) {
	      l.scanline = new ScanlineOverlay(this, width, height, _lodash2.default.get(options, 'scanline'));
	      stage.addChild(l.scanline.sprite);
	    }
	
	    if (_lodash2.default.get(options, 'rgb')) {
	      l.rgb = new RgbOverlay(this, width, height, _lodash2.default.get(options, 'rgb'));
	      stage.addChild(l.rgb.sprite);
	    }
	
	    if (_lodash2.default.get(options, 'noises')) {
	      l.noises = new NoisesOverlay(this, width, height, _lodash2.default.get(options, 'noises'));
	    }
	
	    if (_lodash2.default.get(options, 'crt')) {
	      l.crt = new CrtOverlay(this, width, height, _lodash2.default.get(options, 'crt'));
	      stage.addChild(l.crt.sprite);
	    }
	
	    if (_lodash2.default.get(options, 'monitor')) {
	      var tex = PIXI.Texture.fromImage('./build/' + __webpack_require__(71));
	      l.monitor = new PIXI.Sprite(tex);
	      l.monitor.width = width + margins_x;
	      l.monitor.height = height + margins_y;
	      l.monitor.x = margins_x / -2;
	      l.monitor.y = margins_y / -2;
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/assets/imgs//crt.png";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./crt.png": 73,
		"./test.png": 74
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
	webpackContext.id = 72;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/crt.png";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/test.png";

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(65);
	
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(65);
	
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
	
	      // let size = new PIXI.Point(renderer.width - this._sprite.width, renderer.height - this._sprite.height)
	
	      // let x = Math.trunc(Math.min(size.x, Math.max(0, e.data.global.x)) / this._main.scale)
	      // let y = Math.trunc(Math.min(size.y, Math.max(0, e.data.global.y)) / this._main.scale)
	
	      // return { x, y, button: e.data.originalEvent.button }
	      return { x: 0, y: 0, button: e.data.originalEvent.button };
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(78);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(79)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  background-color: #000;\n  color: #fff;\n}\n\ncanvas {\n  cursor: none !important;\n}\n", "", {"version":3,"sources":["/./style/main.css"],"names":[],"mappings":"AAEA;EACE,uBAA+C;EAC/C,YAAyB;CAC1B;;AAED;EACE,wBAAwB;CACzB","file":"main.css","sourcesContent":["@import url(./colors.css);\n\nbody {\n  background-color: var(--main-background-color);\n  color: var(--main-color);\n}\n\ncanvas {\n  cursor: none !important;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 79 */
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
/* 80 */
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
		if(true) {
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


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDVkNTllNzRjMDc3MjUwZTQ2MzgiLCJ3ZWJwYWNrOi8vLy4vYXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGl4aS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYi1hdWRpby1kYXdcIiIsIndlYnBhY2s6Ly8vLi9hcHAvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJhZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBlcmZvcm1hbmNlLW5vd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1peHdpdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuZGVyc2NvcmUtcGx1c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9hcHAvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvbGV4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2Fzc2lnbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy9kZWxpbWl0ZXJzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy9ncm91cHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy9saXRlcmFscy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL29wZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL3ByaW1pdGl2ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3Rva2Vucy9yZXNlcnZlZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdG9rZW5zL2NvbnN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90b2tlbnMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvcGFyc2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9rZXlfbGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL3N0YXRlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9pZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL3JldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2NsYXNzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvY29uZGl0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL3Zhci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2xvb3BzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2V4cHJlc3Npb25zLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2FycmF5LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2RpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZm4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvaWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RyYW5zcGlsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9jb2RlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9zdGF0ZW1lbnRzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZXhwcmVzc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9wcmltaXRpdmVzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvb3BlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvaWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2ZuLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9kaWN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvYXNzaWduLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9tZW1vcnkuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGV4eVwiIiwid2VicGFjazovLy8uL2FwcC92bS9tZW1vcnltYW5hZ2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInByZXR0eS1ieXRlc1wiIiwid2VicGFjazovLy8uL2FwcC92bS9zdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vaW50ZXJydXB0LmpzIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy9ndWlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL3JhaW5ib3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL2NoaXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL2ZvbnpvLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy9vcndlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL2JlYWdsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvdmlvbGV0LmpzIiwid2VicGFjazovLy8uL2FwcC92bS9vdmVybGF5cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1ncy9jcnQucG5nPzNlODIiLCJ3ZWJwYWNrOi8vL15cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZ3MvY3J0LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1ncy90ZXN0LnBuZyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMva2VuLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy9taWNrZXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGUvbWFpbi5jc3M/ZjQ4MiIsIndlYnBhY2s6Ly8vLi9zdHlsZS9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyJdLCJuYW1lcyI6WyJfU1RPUFBFRCIsIl9SVU5OSU5HIiwiX1BBVVNFRCIsIk1haW4iLCJvcHRpb25zIiwicmVzZXQiLCJfdXBkYXRlcyIsInF1ZXVlIiwiYWRkIiwibyIsIl8iLCJnZXQiLCJfX2luVXBkYXRlcyIsInB1c2giLCJyZW1vdmUiLCJyZWplY3QiLCJvYmplY3QiLCJiIiwiQXJyYXlCdWZmZXIiLCJhIiwiVWludDMyQXJyYXkiLCJjIiwiVWludDhBcnJheSIsIkxFIiwiX21lbW9yeSIsIl9tZW1vcnlNYW5hZ2VyIiwiX3N0YWNrIiwiX2ludGVycnVwdHMiLCJfZ3VpZGVvIiwiX2tlbiIsIl9taWNrZXkiLCJfb25SZXNpemUiLCJvblJlc2l6ZSIsImJpbmQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidGhhdCIsIlBJWEkiLCJ0aWNrZXIiLCJzaGFyZWQiLCJzdGF0dXMiLCJ0aWNrIiwicGVyZm9ybWFuY2UiLCJub3ciLCJkZWx0YSIsInEiLCJjYiIsImFyZ3MiLCJzdGFydCIsImRlc3Ryb3kiLCJfc3RhdHVzIiwiX3Byb2dyYW0iLCJwYXRoIiwidW5kZWZpbmVkIiwiY29kZSIsImZuIiwibmFtZSIsImVtaXQiLCJzdG9wIiwidCIsInRva2VucyIsInJ1biIsImNvbnNvbGUiLCJsb2ciLCJwIiwibm9kZXMiLCJlcnJvcnMiLCJGdW5jdGlvbiIsImFwcGx5IiwidGVzdCIsInZhbHVlIiwiX3N0YWdlIiwiX3JlbmRlcmVyIiwibWFpbiIsImFwcCIsImVsZWN0cm9uIiwicmVxdWlyZSIsInJlbW90ZSIsInNjcmVlbiIsImRpYWxvZyIsIkJyb3dzZXJXaW5kb3ciLCJleHRlbmQiLCJ0ZW1wbGF0ZVNldHRpbmdzIiwiaW50ZXJwb2xhdGUiLCJmcyIsIk1peGluIiwibWl4IiwidXNlclBhdGgiLCJqb2luIiwiZ2V0QXBwUGF0aCIsImV4aXN0c1N5bmMiLCJta2RpcnMiLCJJU19XSU4iLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJJU19PU1giLCJJU19MSU5VWCIsImRpcnMiLCJidWlsZCIsIl9fZGlybmFtZSIsImN3ZCIsImhvbWUiLCJnZXRQYXRoIiwidXNlciIsInRtcCIsInJvb3QiLCJub2RlX21vZHVsZXMiLCJ1c2VyX3BrZyIsImdldE5hbWUiLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsIm9wZW5GaWxlIiwic2hvd09wZW5EaWFsb2ciLCJlcnIiLCJlcnJvciIsInNhdmVGaWxlIiwic2hvd1NhdmVEaWFsb2ciLCJtZXNzYWdlQm94Iiwic2hvd01lc3NhZ2VCb3giLCJtYXBfZ2V0dGVycyIsInNvdXJjZSIsInRhcmdldCIsImRlZnMiLCJrIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjYWxsIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIm1hcF9nZXR0ZXJzX3JldHVybl90aGlzIiwiZGVsYXkiLCJtcyIsImFzeW5jIiwiY29udGV4dCIsImlzTnVtYmVyIiwiaXNBcnJheSIsInNldFRpbWVvdXQiLCJidWZmZXJfdG9fc3RyaW5nIiwibGVuIiwibGVuZ3RoIiwiaSIsInMiLCJ0b1N0cmluZyIsInN0cmluZ190b19idWZmZXIiLCJzdHIiLCJCdWZmZXIiLCJNYXRoIiwidHJ1bmMiLCJ4IiwiaGV4Iiwic3Vic3RyIiwicGFyc2VJbnQiLCJzdHJpbmdfYnVmZmVyIiwid3JpdGUiLCJub3JtYWxpemVNZXNzYWdlcyIsIm1lc3NhZ2UiLCJtIiwiaXNTdHJpbmciLCJzaXplIiwicGFkU3RhcnQiLCJidWZmZXJfZHVtcCIsImJ1ZmZlciIsIndpZHRoIiwiY2FwcyIsImluZGVudCIsInJlcGVhdCIsInplcm8iLCJuIiwibWF4IiwidG9VcHBlckNhc2UiLCJtaW4iLCJieXRlTGVuZ3RoIiwicm93cyIsImNlaWwiLCJsYXN0Iiwib2Zmc2V0TGVuZ3RoIiwiYXJyIiwibGFzdEJ5dGVzIiwibGFzdFNwYWNlcyIsImoiLCJ2IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwidXRvYSIsImJ0b2EiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImF0b3UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlc2NhcGUiLCJhdG9iIiwiaW5zdGFuY2VGdW5jdGlvbiIsImZvcmNlIiwiaGFzT3duUHJvcGVydHkiLCJ3cml0YWJsZSIsImluc3RhbmNlRnVuY3Rpb25zIiwibmFtZXMiLCJyYWYiLCJQb2ludCIsInByb3RvdHlwZSIsImRpc3RhbmNlIiwic3FydCIsInkiLCJ0ZW1wbGF0ZSIsIlJlY3RhbmdsZSIsImRlZmF1bHRzIiwiYm91bmRzY2hlY2siLCJ0eXBlIiwibWVtb3J5IiwibWVtb3J5X21hbmFnZXIiLCJjb2xsZWN0X2RlbGF5IiwiZ3VpZGVvIiwiaGVpZ2h0Iiwic2NhbGUiLCJyYWluYm93IiwiY291bnQiLCJmb256byIsIm9yd2VsbCIsImJlYWdsZSIsImNvbG9yIiwiYmxpbmtyYXRlIiwidmlvbGV0Iiwia2VuIiwibWlja2V5IiwiZGJsQ2xpY2tEZWxheSIsImRibENsaWNrRGlzdGFuY2UiLCJuZXR3b3JrIiwiYWx0byIsIm1zZyIsInJvdyIsImNvbCIsInJ1bnRpbWVfZXJyb3IiLCJlIiwiaW9fZXJyb3IiLCJFdmVudCIsImRhdGEiLCJidWJibGVzIiwiX19ldmVudE9iamVjdCIsInRpbWVTdGFtcCIsInN0b3BwZWQiLCJzdG9wcGVkSW1tZWRpYXRlIiwiZGVmYXVsdFByZXZlbnRlZCIsIkVtaXR0ZXIiLCJvcmRlciIsIl9saXN0ZW5lcnMiLCJzb3J0QnkiLCJvbmNlSGFuZGxlcldyYXBwZXIiLCJvZmYiLCJfb3JpZ2luYWxIYW5kbGVyIiwib24iLCJsaXN0Iiwic3BsaWNlIiwiaXNFbXB0eSIsIm9yaWdFdmVudERhdGEiLCJsaXN0ZW5lcnMiLCJjbG9uZSIsImwiLCJjYW5jZWxCdWJibGUiLCJwYXJlbnQiLCJUb2tlbiIsImxleGVyIiwiZW5kIiwiX3R5cGUiLCJfcmVzZXJ2ZWQiLCJvZmZzZXQiLCJsaW5lIiwiY29sdW1uIiwicGFydHMiLCJzcGxpdCIsImlzIiwiaXNSZWdFeHAiLCJtYXRjaCIsImJhc2VuYW1lIiwiRW1wdHlDbGFzcyIsIkxleGVyIiwidGV4dCIsImNvbnN0YW50cyIsInZhbGlkT2Zmc2V0IiwiY2hhckF0Iiwic3Vic3RyaW5nIiwicG9zX2luZm8iLCJ0b2tlbiIsImluZGV4T2YiLCJjaGFyX2F0IiwibmV4dF9pc19zcGFjZSIsIm9sZF9vZmZzZXQiLCJ0b2tlbl90eXBlcyIsInIiLCJzdWJ0ZXh0IiwiaW5kZXgiLCJzbGljZSIsImluc2VydFRva2VuIiwicGVlayIsImNvbnN0X3Rva2VuIiwiaW5jbHVkZV90b2tlbiIsIm5leHQiLCJpbmZvIiwid2l0aCIsIl90b2tlbl90eXBlcyIsInN1cGVyY2xhc3MiLCJhc3NpZ24iLCJtYXRoX2Fzc2lnbiIsImxvZ2ljX2Fzc2lnbiIsImZuX2Fzc2lnbiIsImVvbCIsImNvbW1hIiwiY29sb24iLCJjb21tZW50Iiwib3Blbl9wYXJlbiIsImNsb3NlX3BhcmVuIiwib3Blbl9icmFja2V0IiwiY2xvc2VfYnJhY2tldCIsIm9wZW5fY3VybHkiLCJjbG9zZV9jdXJseSIsImtleSIsImlkIiwiaWRfZmllbGQiLCJ0aGlzIiwidGhpc19maWVsZCIsInN5bWJvbCIsIm1hdGgiLCJsb2dpYyIsImNvbXAiLCJudW1iZXIiLCJzdHJpbmciLCJjaGFyIiwiaW5jbHVkZSIsImNvbnN0IiwicmVzZXJ2ZWQiLCJleHRuYW1lIiwicG4iLCJzdGF0U3luYyIsInNyYyIsInJlYWRGaWxlU3luYyIsImx4IiwiY29uY2F0IiwiTm9kZSIsInBhcnNlciIsIl9pbl9jbGFzcyIsIl9mbl9sZXZlbCIsInRva2VuX3Byb3AiLCJQYXJzZXIiLCJmcmFtZXMiLCJwcmV2X2ZyYW1lIiwiaW5fY2xhc3MiLCJmbl9sZXZlbCIsImVvcyIsIm1hdGNoZXMiLCJ0b2tlbl9hdCIsImVuZF9uZXh0Iiwic2tpcCIsImV4cGVjdCIsImxlZnQiLCJyaWdodCIsImV4cHIiLCJub2RlIiwic3RhdGVtZW50cyIsIkZyYW1lIiwiRnJhbWVzIiwiRnJhbWVJdGVtIiwiY3VycmVudCIsIml0ZW1fdHlwZSIsImV4aXN0cyIsImZyYW1lIiwiaXNfbG9jYWwiLCJpc19nbG9iYWwiLCJpdGVtcyIsIl9nbG9iYWwiLCJmaW5kIiwiYmxvY2tfdHlwZSIsImxvb3Bfd2hpbGUiLCJzdGF0ZW1lbnQiLCJibG9jayIsInZhcl9zdGF0ZW1lbnQiLCJhc3NpZ25fc3RhdGVtZW50IiwiaWZfc3RhdGVtZW50IiwiZm9yX3N0YXRlbWVudCIsIndoaWxlX3N0YXRlbWVudCIsInJldHVybl9zdGF0ZW1lbnQiLCJzaW5nbGVfc3RhdGVtZW50IiwiY2xhc3Nfc3RhdGVtZW50IiwiaWRfc3RhdGVtZW50IiwiZmlyc3QiLCJzdXBlcl9leHByIiwiaWRfZXhwciIsImZuX2V4cHIiLCJfZm4iLCJleHBycyIsInNpbmdsZSIsIl9leHRlbmRzIiwiY2xhc3NfbGlzdCIsImJvZHkiLCJleHBlY3RfZW5kIiwiZXhwcl9ibG9jayIsInRydWVfYm9keSIsImZhbHNlX2JvZHkiLCJlbHNlX3N0YXRlbWVudCIsIl9sZXQiLCJtaW5fZXhwciIsIm1heF9leHByIiwic3RlcF9leHByIiwic2ltcGxlX2V4cHIiLCJ0ZXJtIiwidGVybV9leHByIiwiZmFjdG9yIiwiZmFjdG9yX2V4cHIiLCJjb25kaXRpb25hbCIsImNvbmRpdGlvbmFsX2V4cHIiLCJqdW5jdGlvbiIsImp1bmN0aW9uX2V4cHIiLCJuZXh0X2V4cHJfbm9kZSIsInN1Yl9leHByIiwiYXJyYXlfZXhwciIsImRpY3RfZXhwciIsInRoaXNfZXhwciIsIm5ld19leHByIiwiZGVmIiwia2V5X2xpdGVyYWwiLCJmbl9hcmdzX2RlZiIsImZuX2FyZyIsImZpZWxkcyIsIl9maWVsZCIsIlRyYW5zcGlsZXIiLCJub2RlX2F0IiwidmFsdWVzIiwibGluZXMiLCJpbmRlbnRfbGV2ZWwiLCJlbmRzV2l0aCIsInJlcGxhY2UiLCJjb2RlX3N0YXJ0Iiwid3JpdGVsbiIsImNvZGVfZW5kIiwiZCIsIm5vZGVfdGVtcGxhdGUiLCJmbl9jYWxsX3RlbXBsYXRlIiwiZm5fYXNzaWduX3RlbXBsYXRlIiwiYXJyYXlfdGVtcGxhdGUiLCJkaWN0X3RlbXBsYXRlIiwib3BlcmF0b3JfdGVtcGxhdGUiLCJ0aGlzX3RlbXBsYXRlIiwibmV3X3RlbXBsYXRlIiwic3RyaW5nX3RlbXBsYXRlIiwiaWRfdGVtcGxhdGUiLCJ2YWx1ZV90ZW1wbGF0ZSIsImxuIiwic3RhdGVtZW50X3RlbXBsYXRlIiwiZm5fY2FsbCIsInRtcGwiLCJkYXQiLCJ3b3JkIiwic2VwYXJhdG9yIiwib3AiLCJleHByX3RlbXBsYXRlIiwiZmllbGQiLCJkb3QiLCJibG9ja190ZW1wbGF0ZSIsImZuX2RlZiIsIm1hcCIsImYiLCJkYXRhX3R5cGVfc2l6ZXMiLCJpOCIsInM4IiwiaTE2IiwiczE2IiwiaTMyIiwiczMyIiwiZjMyIiwiZGF0YV90eXBlX2ZucyIsImRhdGFfdHlwZV9zaXplIiwiTWVtb3J5IiwiX3NpemUiLCJkZWZhdWx0IiwiX3RvcCIsIl9ib3R0b20iLCJfYnVmZmVyIiwiX2RhdGEiLCJfdmlldyIsIkRhdGFWaWV3IiwiX2ZucyIsImNsZWFyIiwiZmlsbCIsImFkZHIiLCJzeiIsImhsdCIsImNoa19ib3VuZHMiLCJkYiIsIl92bSIsImxpdHRsZUVuZGlhbiIsImxkIiwic3QiLCJsZGwiLCJib3R0b20iLCJtZW0iLCJsZHMiLCJzZXQiLCJzdWJhcnJheSIsInN0bCIsImNoYXJDb2RlQXQiLCJzdHMiLCJ0b3AiLCJ0Z3QiLCJjb3B5V2l0aGluIiwiY29weSIsImhleHkiLCJfbWFpbiIsIk1lbW9yeU1hbmFnZXIiLCJfY29sbGVjdF9kZWxheSIsIl9ibG9ja3MiLCJfbGFzdCIsImNvbGxlY3QiLCJ1c2VkIiwib2IiLCJhdmFpbF9tZW0iLCJfYWxsb2MiLCJ1c2VkX21lbSIsImZyZWVfbWVtIiwibWVtX2J1ZmZlciIsIlN0YWNrRW50cnkiLCJzdGFjayIsInJvbGxpbmciLCJfbWF4IiwiX3JvbGxpbmciLCJfcHRyIiwicmVhZCIsInRvdGFsX3NpemUiLCJTdGFjayIsIl9saXN0IiwiYXJndW1lbnRzIiwicG9wIiwiX0lOVF9SVU5OSU5HIiwiX0lOVF9QQVVTRUQiLCJJbnRlcnJ1cHQiLCJzdG9wX2FsbCIsIkd1aWRlbyIsImluaXQiLCJhdXRvRGV0ZWN0UmVuZGVyZXIiLCJfd2lkdGgiLCJfc2NhbGUiLCJfaGVpZ2h0IiwidmlldyIsInN0eWxlIiwicG9zaXRpb24iLCJjdXJzb3IiLCJkb2N1bWVudCIsImFwcGVuZENoaWxkIiwiQ29udGFpbmVyIiwicmVzaXplIiwiX3JhaW5ib3ciLCJfZm9uem8iLCJfb3J3ZWxsIiwiX2JlYWdsZSIsIl92aW9sZXQiLCJfb3ZlcmxheXMiLCJzY2FubGluZXMiLCJzY2FubGluZSIsInJnYiIsIm5vaXNlcyIsImNydCIsIm1vbml0b3IiLCJfc3ByaXRlIiwiX3RleHR1cmUiLCJfY2FudmFzIiwiX2ZvcmNlX3JlZHJhdyIsIl9mb3JjZV9mbGlwIiwicmVkcmF3IiwicGl4ZWxzIiwiX3BpeGVscyIsInBhbGV0dGUiLCJfY29udGV4dCIsInB1dEltYWdlRGF0YSIsIl9pbWFnZURhdGEiLCJyZW5kZXIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ0ZXh0dXJlIiwiY3JlYXRlRWxlbWVudCIsImRpc3BsYXkiLCJUZXh0dXJlIiwiZnJvbUNhbnZhcyIsIlNDQUxFX01PREVTIiwiTkVBUkVTVCIsIlNwcml0ZSIsInNwcml0ZSIsImFkZENoaWxkIiwiZ2V0Q29udGV4dCIsImFscGhhIiwiYW50aWFsaWFzIiwiY2xlYXJSZWN0IiwiZ2V0SW1hZ2VEYXRhIiwiY2VudGVyIiwidG9JbmRleCIsImx3IiwidXBkYXRlIiwiZmlsZW5hbWUiLCJ0ZXgiLCJmcm9tSW1hZ2UiLCJwaXhlbCIsIlJhaW5ib3ciLCJjdXJyZW50T2Zmc2V0IiwiQ2hpcCIsImRhdGFfc2l6ZSIsImtleXMiLCJub2RhdGEiLCJfY291bnQiLCJmbGlwIiwiZm9yY2VfcmVkcmF3IiwiZm9yY2VfZmxpcCIsIkZvbnpvIiwiZmciLCJiZyIsInciLCJoIiwicHRyIiwiYnkiLCJwaSIsImJ4IiwiT3J3ZWxsIiwiY2giLCJmbnQiLCJmdyIsImZoIiwiaWR4IiwicHkiLCJkcmF3IiwidGlkeCIsImNyIiwiYnMiLCJwb3MiLCJkcmF3X2NoYXIiLCJwdXRfY2hhciIsIm1vdmVfdG8iLCJtb3ZlX2J5Iiwic3kiLCJ0eSIsInNpIiwic3giLCJ0eCIsImxzIiwiZHkiLCJCZWFnbGUiLCJfeCIsIl95IiwiX2JsaW5rX2hpZGRlbiIsIl9ibGlua3JhdGUiLCJibGluayIsIl9jb2xvciIsIlZpb2xldCIsInoiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJzdyIsInNoIiwic2wiLCJzcyIsIk92ZXJsYXkiLCJvdmVybGF5cyIsImNhbnZhcyIsIkNhbnZhc0J1ZmZlciIsInNjYWxlTW9kZSIsInN0YWdlIiwicmVuZGVyZXIiLCJTY3JlZW5PdmVybGF5IiwiY3JlYXRlIiwib2Zmc2V0X3giLCJtYXJnaW5zX3giLCJvZmZzZXRfeSIsIm1hcmdpbnNfeSIsIlNjYW5saW5lc092ZXJsYXkiLCJnYXAiLCJTY2FubGluZU92ZXJsYXkiLCJyYXRlIiwic3BlZWQiLCJhYSIsIk5vaXNlc092ZXJsYXkiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJub2lzZSIsInZpc2libGUiLCJnIiwiX3JhdGUiLCJyYW5kb20iLCJub2lzZUtleXMiLCJSZ2JPdmVybGF5IiwiQ3J0T3ZlcmxheSIsInJhZGl1cyIsImluc2lkZV9hbHBoYSIsIm91dHNpZGVfYWxwaGEiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJPdmVybGF5cyIsIktlbiIsIl9vbktleWRvd24iLCJvbktleWRvd24iLCJfb25LZXl1cCIsIm9uS2V5dXAiLCJfbW9kcyIsIl9qb3lzdGljayIsIl9rZXlzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleUNvZGUiLCJtb2RzIiwiam95c3RpY2siLCJzaGlmdCIsImN0cmwiLCJhbHQiLCJtZXRhIiwibnVtcGFkIiwiYnRuMCIsImJ0bjEiLCJidG4yIiwiYnRuMyIsImJ0bjQiLCJ1cCIsImRvd24iLCJsb2NhdGlvbiIsImV2ZW50RGV0YWlscyIsInN0b3BQcm9wYWdhdGlvbiIsIk1pY2tleSIsImludGVyYWN0aXZlIiwiX29uTW91c2VEb3duIiwib25Nb3VzZURvd24iLCJfb25Nb3VzZU1vdmUiLCJvbk1vdXNlTW92ZSIsIl9vbk1vdXNlVXAiLCJvbk1vdXNlVXAiLCJfYnRucyIsImJ1dHRvbiIsIm9yaWdpbmFsRXZlbnQiLCJnZXRFdmVudEluZm8iLCJfZGJsQ2xpY2tEZWxheSIsIl9kYmxDbGlja0Rpc3RhbmNlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7OztBQU9BOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQWxCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBZ0JBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPLEtBQU1BLDhCQUFXLENBQWpCO0FBQ0EsS0FBTUMsOEJBQVcsQ0FBakI7QUFDQSxLQUFNQyw0QkFBVSxDQUFoQjs7S0FFTUMsSSxXQUFBQSxJOzs7QUFFWCxpQkFBYUMsT0FBYixFQUFzQjtBQUFBOztBQUFBOztBQUdwQixXQUFLQyxLQUFMOztBQUVBLFdBQUtDLFFBQUwsR0FBZ0I7QUFDZEMsY0FBTyxFQURPOztBQUdkQyxZQUFLLHNCQUFXO0FBQ2QsYUFBSUMsSUFBSUMsRUFBRUMsR0FBRixDQUFNUCxPQUFOLEVBQWUsUUFBZixDQUFSO0FBQ0EsYUFBSUssS0FBSyxDQUFDQSxFQUFFRyxXQUFaLEVBQXlCO0FBQ3ZCSCxhQUFFRyxXQUFGLEdBQWdCLElBQWhCO0FBQ0EsaUJBQUtOLFFBQUwsQ0FBY0MsS0FBZCxDQUFvQk0sSUFBcEIsQ0FBeUJULE9BQXpCO0FBQ0Q7QUFDRixRQVRhOztBQVdkVSxlQUFRLG1CQUFLO0FBQ1gsZUFBS1IsUUFBTCxDQUFjQyxLQUFkLEdBQXNCRyxFQUFFSyxNQUFGLENBQVMsTUFBS1QsUUFBTCxDQUFjQyxLQUF2QixFQUE4QixFQUFFUyxRQUFRUCxDQUFWLEVBQTlCLENBQXRCO0FBQ0FBLFdBQUVHLFdBQUYsR0FBZ0IsS0FBaEI7QUFDRDtBQWRhLE1BQWhCOztBQWlCQTtBQUNBLFNBQUlLLElBQUksSUFBSUMsV0FBSixDQUFnQixDQUFoQixDQUFSO0FBQ0EsU0FBSUMsSUFBSSxJQUFJQyxXQUFKLENBQWdCSCxDQUFoQixDQUFSO0FBQ0EsU0FBSUksSUFBSSxJQUFJQyxVQUFKLENBQWVMLENBQWYsQ0FBUjtBQUNBRSxPQUFFLENBQUYsSUFBTyxVQUFQO0FBQ0EsV0FBS0ksRUFBTCxHQUFVRixFQUFFLENBQUYsTUFBUyxJQUFuQjs7QUFFQSxXQUFLRyxPQUFMLEdBQWUseUJBQWY7QUFDQSxXQUFLQyxjQUFMLEdBQXNCLGtDQUF0QjtBQUNBLFdBQUtDLE1BQUwsR0FBYywwQkFBZDtBQUNBLFdBQUtDLFdBQUwsR0FBbUIsOEJBQW5COztBQUVBLFdBQUtDLE9BQUwsR0FBZSwyQkFBZjtBQUNBLFdBQUtDLElBQUwsR0FBWSx3QkFBWjtBQUNBLFdBQUtDLE9BQUwsR0FBZSwyQkFBZjs7QUFFQSxXQUFLQyxTQUFMLEdBQWlCLE1BQUtDLFFBQUwsQ0FBY0MsSUFBZCxPQUFqQjtBQUNBQyxZQUFPQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxNQUFLSixTQUF2Qzs7QUFFQSxTQUFJSyxZQUFKO0FBQ0FDLFVBQUtDLE1BQUwsQ0FBWUMsTUFBWixDQUFtQi9CLEdBQW5CLENBQXVCLGlCQUFTO0FBQzlCLFdBQUk0QixLQUFLSSxNQUFMLEtBQWdCdkMsUUFBcEIsRUFBOEI7QUFDNUJtQyxjQUFLSyxJQUFMLENBQVVDLFlBQVlDLEdBQVosRUFBVixFQUE2QkMsS0FBN0I7O0FBRUE7O0FBSDRCO0FBQUE7QUFBQTs7QUFBQTtBQUs1QixnQ0FBY1IsS0FBSzlCLFFBQUwsQ0FBY0MsS0FBNUIsOEhBQW1DO0FBQUEsaUJBQTFCc0MsQ0FBMEI7O0FBQ2pDQSxlQUFFN0IsTUFBRixDQUFTSixXQUFULEdBQXVCLEtBQXZCO0FBQ0E7QUFDRTtBQUNGO0FBQ0EsaUJBQUlpQyxFQUFFQyxFQUFOLEVBQVU7QUFDUkQsaUJBQUVDLEVBQUYsV0FBS0QsRUFBRTdCLE1BQVAsNEJBQW1CNkIsRUFBRUUsSUFBRixJQUFVLEVBQTdCO0FBQ0Q7QUFDRjtBQWIyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWU1QlgsY0FBSzlCLFFBQUwsQ0FBY0MsS0FBZCxHQUFzQixFQUF0Qjs7QUFFQTtBQUNFO0FBQ0Y7QUFDRDtBQUNGLE1BdEJEOztBQXdCQSw4QkFBWSxNQUFLeUMsS0FBakIsRUFBd0IsR0FBeEI7QUFsRW9CO0FBbUVyQjs7OzsrQkFFVTtBQUNULFlBQUtwQixPQUFMLENBQWFxQixPQUFiO0FBQ0EsWUFBS3BCLElBQUwsQ0FBVW9CLE9BQVY7QUFDQSxZQUFLbkIsT0FBTCxDQUFhbUIsT0FBYjtBQUNBLFlBQUt0QixXQUFMLENBQWlCc0IsT0FBakI7QUFDQSxZQUFLeEIsY0FBTCxDQUFvQndCLE9BQXBCO0FBQ0EsWUFBS3pCLE9BQUwsQ0FBYXlCLE9BQWI7QUFDQTtBQUNEOzs7NkJBRVE7QUFDUCxZQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFlBQUtDLFFBQUwsR0FBZ0I7QUFDZEMsZUFBTUMsU0FEUTtBQUVkQyxlQUFNRCxTQUZRO0FBR2RFLGFBQUlGO0FBSFUsUUFBaEI7QUFLRDs7OzhCQUVRRyxJLEVBQU07QUFBRSxjQUFPOUMsRUFBRUMsR0FBRixvQkFBZ0I2QyxJQUFoQixDQUFQO0FBQThCOzs7Z0NBd0JuQztBQUNWLFlBQUs1QixPQUFMLENBQWE2QixJQUFiLENBQWtCLFFBQWxCO0FBQ0EsY0FBTyxJQUFQO0FBQ0Q7Ozt5QkFFSUgsSSxFQUFNO0FBQ1QsV0FBSUEsT0FBTyxDQUFYLEVBQWM7QUFDWixxQ0FBY0EsSUFBZDtBQUNEO0FBQ0QsWUFBS0ksSUFBTDtBQUNEOzs7MEJBRUtOLEksRUFBTTtBQUNWLFdBQUlPLElBQUkscUJBQVI7QUFDQSxXQUFJQyxTQUFTRCxFQUFFRSxHQUFGLENBQU1ULElBQU4sQ0FBYjtBQUNBVSxlQUFRQyxHQUFSLENBQVlILE1BQVo7O0FBRUEsV0FBSUksSUFBSSxzQkFBUjtBQUNBLFdBQUlDLFFBQVFELEVBQUVILEdBQUYsQ0FBTUQsTUFBTixDQUFaO0FBQ0FFLGVBQVFDLEdBQVIsQ0FBWUUsS0FBWjs7QUFFQSxXQUFJRCxFQUFFRSxNQUFGLEtBQWEsQ0FBakIsRUFBb0I7QUFDbEIsYUFBSVAsS0FBSSwwQkFBUjtBQUNBLGFBQUlMLE9BQU9LLEdBQUVFLEdBQUYsQ0FBTUksS0FBTixDQUFYO0FBQ0FILGlCQUFRQyxHQUFSLENBQVlULElBQVo7O0FBRUEsYUFBSUssR0FBRU8sTUFBRixLQUFhLENBQWpCLEVBQW9CO0FBQ2xCLGdCQUFLZixRQUFMLENBQWNHLElBQWQsR0FBcUJBLElBQXJCO0FBQ0EsZ0JBQUtILFFBQUwsQ0FBY0MsSUFBZCxHQUFxQkEsSUFBckI7QUFDQSxnQkFBS0QsUUFBTCxDQUFjSSxFQUFkLEdBQW1CLElBQUlZLFFBQUosQ0FBYSxDQUFDLE1BQUQsQ0FBYixFQUF1QixLQUFLaEIsUUFBTCxDQUFjRyxJQUFyQyxDQUFuQjtBQUNEO0FBQ0Y7QUFDRjs7OzJCQUVhO0FBQ1osV0FBSUMsS0FBSzdDLEVBQUVDLEdBQUYsQ0FBTSxJQUFOLEVBQVksYUFBWixDQUFUOztBQURZLHlDQUFOb0MsSUFBTTtBQUFOQSxhQUFNO0FBQUE7O0FBRVosY0FBT1EsS0FBS0EsR0FBR2EsS0FBSCxDQUFTLElBQVQsRUFBZXJCLElBQWYsQ0FBTCxHQUE0QixJQUFuQztBQUNEOzs7NkJBRVE7QUFDUCxZQUFLUCxNQUFMLEdBQWN2QyxRQUFkO0FBQ0EsWUFBS29FLElBQUw7QUFDQSxjQUFPLElBQVA7QUFDRDs7OzRCQUVPO0FBQ04sWUFBSzdCLE1BQUwsR0FBY3hDLFFBQWQ7QUFDQSxjQUFPLElBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsWUFBS3dDLE1BQUwsR0FBY3RDLE9BQWQ7QUFDQSxjQUFPLElBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsWUFBS3NDLE1BQUwsR0FBY3ZDLFFBQWQ7QUFDQSxjQUFPLElBQVA7QUFDRDs7OzBCQUVLMEQsQyxFQUFHO0FBQ1AsWUFBS25DLE9BQUwsQ0FBYWlCLElBQWIsQ0FBa0JrQixDQUFsQjtBQUNBLFlBQUtsQyxjQUFMLENBQW9CZ0IsSUFBcEIsQ0FBeUJrQixDQUF6QjtBQUNBLFlBQUs5QixJQUFMLENBQVVZLElBQVYsQ0FBZWtCLENBQWY7QUFDQSxZQUFLN0IsT0FBTCxDQUFhVyxJQUFiLENBQWtCa0IsQ0FBbEI7QUFDQSxZQUFLaEMsV0FBTCxDQUFpQmMsSUFBakIsQ0FBc0JrQixDQUF0QjtBQUNBLFlBQUsvQixPQUFMLENBQWFhLElBQWIsQ0FBa0JrQixDQUFsQjtBQUNEOzs7NEJBRU8sQ0FDUDs7O3lCQTVGYTtBQUFFLGNBQU8sS0FBS1QsT0FBWjtBQUFxQixNO3VCQUN6Qm9CLEssRUFBTztBQUNqQixXQUFJLEtBQUtwQixPQUFMLEtBQWlCb0IsS0FBckIsRUFBNEI7QUFDMUIsY0FBS3BCLE9BQUwsR0FBZW9CLEtBQWY7QUFDRDtBQUNGOzs7eUJBRWE7QUFBRSxjQUFPLEtBQUs5QyxPQUFaO0FBQXFCOzs7eUJBQ2hCO0FBQUUsY0FBTyxLQUFLQyxjQUFaO0FBQTRCOzs7eUJBQ2pDO0FBQUUsY0FBTyxLQUFLRSxXQUFaO0FBQXlCOzs7eUJBRTlCO0FBQUUsY0FBTyxLQUFLckIsUUFBWjtBQUFzQjs7O3lCQUV6QjtBQUFFLGNBQU8sS0FBS3NCLE9BQVo7QUFBcUI7Ozt5QkFDaEI7QUFBRSxjQUFPLEtBQUtDLElBQVo7QUFBa0I7Ozt5QkFDM0I7QUFBRSxjQUFPLEtBQUtDLE9BQVo7QUFBcUI7Ozt5QkFFeEI7QUFBRSxjQUFPLEtBQUtGLE9BQUwsQ0FBYTJDLE1BQXBCO0FBQTRCOzs7eUJBQzNCO0FBQUUsY0FBTyxLQUFLM0MsT0FBTCxDQUFhNEMsU0FBcEI7QUFBK0I7Ozt5QkFFbEM7QUFBRSxjQUFPLEtBQUtyQixRQUFaO0FBQXNCOzs7Ozs7QUE0RWxDLEtBQUlzQixzQkFBTyxJQUFJdEUsSUFBSixFQUFYO0FBQ1ArQixRQUFPd0MsR0FBUCxHQUFhRCxJQUFiLEM7Ozs7OztBQzFPQSxxQzs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7Ozs7QUNZQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBaEJBLEtBQU1FLFdBQVcsbUJBQUFDLENBQVEsQ0FBUixDQUFqQjtLQUNRQyxNLEdBQTJCRixRLENBQTNCRSxNO0tBQVFDLE0sR0FBbUJILFEsQ0FBbkJHLE07S0FBUUMsTSxHQUFXSixRLENBQVhJLE07S0FDaEJMLEcsR0FBdUJHLE0sQ0FBdkJILEc7S0FBS00sYSxHQUFrQkgsTSxDQUFsQkcsYTs7O0FBRWIsS0FBTXRFLElBQUksbUJBQUFrRSxDQUFRLENBQVIsQ0FBVjtBQUNBbEUsR0FBRXVFLE1BQUYsQ0FBU3ZFLENBQVQsRUFBWSxtQkFBQWtFLENBQVEsRUFBUixDQUFaO0FBQ0ExQyxRQUFPeEIsQ0FBUCxHQUFXQSxDQUFYOztBQUVBQSxHQUFFd0UsZ0JBQUYsQ0FBbUJDLFdBQW5CLEdBQWlDLGdCQUFqQzs7QUFFQSxLQUFNQyxLQUFLLG1CQUFBUixDQUFRLEVBQVIsQ0FBWDs7QUFPQTFDLFFBQU9tRCxLQUFQO0FBQ0FuRCxRQUFPb0QsR0FBUDs7QUFFQSxLQUFJQyxXQUFXLGVBQUtDLElBQUwsQ0FBVWQsSUFBSWUsVUFBSixFQUFWLEVBQTRCLE9BQTVCLENBQWY7QUFDQSxLQUFJLENBQUNMLEdBQUdNLFVBQUgsQ0FBY0gsUUFBZCxDQUFMLEVBQThCO0FBQzVCSCxNQUFHTyxNQUFILENBQVVKLFFBQVY7QUFDRDs7QUFFRCxLQUFJSyxTQUFTLE9BQU92QixJQUFQLENBQVl3QixRQUFRQyxRQUFwQixDQUFiO0FBQ0EsS0FBSUMsU0FBU0YsUUFBUUMsUUFBUixLQUFxQixRQUFsQztBQUNBLEtBQUlFLFdBQVdILFFBQVFDLFFBQVIsS0FBcUIsT0FBcEM7QUFDQSxLQUFJRyxPQUFPO0FBQ1RDLFVBQU9DLFNBREU7QUFFVEMsUUFBSzFCLElBQUllLFVBQUosRUFGSTtBQUdUWSxTQUFNM0IsSUFBSTRCLE9BQUosQ0FBWSxNQUFaLENBSEc7QUFJVDVCLFFBQUtBLElBQUk0QixPQUFKLENBQVksU0FBWixDQUpJO0FBS1RDLFNBQU1oQixRQUxHO0FBTVRpQixRQUFLOUIsSUFBSTRCLE9BQUosQ0FBWSxNQUFaLENBTkk7QUFPVEcsU0FBTS9CLElBQUk0QixPQUFKLENBQVksS0FBWixDQVBHO0FBUVRJLGlCQUFjLGVBQUtsQixJQUFMLENBQVVELFFBQVYsRUFBb0IsY0FBcEIsQ0FSTDtBQVNUb0IsYUFBVSxlQUFLbkIsSUFBTCxDQUFVRCxRQUFWLEVBQW9CLGNBQXBCO0FBVEQsRUFBWDs7QUFZQSxLQUFJL0IsT0FBT2tCLElBQUlrQyxPQUFKLEVBQVg7QUFDQSxLQUFJQyxVQUFVbkMsSUFBSW9DLFVBQUosRUFBZDs7QUFFQSxLQUFJQyxXQUFXLFNBQVhBLFFBQVcsR0FBYTtBQUFBLHFDQUFUaEUsSUFBUztBQUFUQSxTQUFTO0FBQUE7O0FBQzFCLE9BQUk7QUFDRixZQUFPZ0MsT0FBT2lDLGNBQVAsQ0FBc0I1QyxLQUF0QixDQUE0QlcsTUFBNUIsRUFBb0NoQyxJQUFwQyxDQUFQO0FBQ0QsSUFGRCxDQUdBLE9BQU9rRSxHQUFQLEVBQVk7QUFDVm5ELGFBQVFvRCxLQUFSLENBQWNELEdBQWQ7QUFDRDtBQUNELFVBQU8sSUFBUDtBQUNELEVBUkQ7O0FBVUEsS0FBSUUsV0FBVyxTQUFYQSxRQUFXLEdBQWE7QUFBQSxzQ0FBVHBFLElBQVM7QUFBVEEsU0FBUztBQUFBOztBQUMxQixPQUFJO0FBQ0YsWUFBT2dDLE9BQU9xQyxjQUFQLENBQXNCaEQsS0FBdEIsQ0FBNEJXLE1BQTVCLEVBQW9DaEMsSUFBcEMsQ0FBUDtBQUNELElBRkQsQ0FHQSxPQUFPa0UsR0FBUCxFQUFZO0FBQ1ZuRCxhQUFRb0QsS0FBUixDQUFjRCxHQUFkO0FBQ0Q7QUFDRCxVQUFPLElBQVA7QUFDRCxFQVJEOztBQVVBLEtBQUlJLGFBQWEsU0FBYkEsVUFBYSxHQUFhO0FBQUEsc0NBQVR0RSxJQUFTO0FBQVRBLFNBQVM7QUFBQTs7QUFDNUIsT0FBSTtBQUNGLFlBQU9nQyxPQUFPdUMsY0FBUCxDQUFzQmxELEtBQXRCLENBQTRCVyxNQUE1QixFQUFvQ2hDLElBQXBDLENBQVA7QUFDRCxJQUZELENBR0EsT0FBT2tFLEdBQVAsRUFBWTtBQUNWbkQsYUFBUW9ELEtBQVIsQ0FBY0QsR0FBZDtBQUNEO0FBQ0QsVUFBTyxJQUFQO0FBQ0QsRUFSRDs7QUFVQSxLQUFJTSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULEVBQWlCQyxJQUFqQixFQUEwQjtBQUFBLDhCQUNqQ0MsQ0FEaUM7QUFFeEMsU0FBSXBFLEtBQUttRSxLQUFLQyxDQUFMLENBQVQ7QUFDQUMsWUFBT0MsY0FBUCxDQUFzQkwsTUFBdEIsRUFBOEJHLENBQTlCLEVBQWlDO0FBQy9CaEgsWUFBSztBQUFBLGdCQUFNNEMsR0FBR3VFLElBQUgsQ0FBUUwsTUFBUixFQUFnQkQsTUFBaEIsQ0FBTjtBQUFBLFFBRDBCO0FBRS9CTyxtQkFBWSxJQUZtQjtBQUcvQkMscUJBQWM7QUFIaUIsTUFBakM7QUFId0M7O0FBQzFDLFFBQUssSUFBSUwsQ0FBVCxJQUFjRCxJQUFkLEVBQW9CO0FBQUEsV0FBWEMsQ0FBVztBQU9uQjtBQUNGLEVBVEQ7O0FBV0EsS0FBSU0sMEJBQTBCLFNBQTFCQSx1QkFBMEIsQ0FBQ1QsTUFBRCxFQUFTQyxNQUFULEVBQWlCQyxJQUFqQixFQUEwQjtBQUFBLGdDQUM3Q0MsQ0FENkM7QUFFcEQsU0FBSXBFLEtBQUttRSxLQUFLQyxDQUFMLENBQVQ7QUFDQUMsWUFBT0MsY0FBUCxDQUFzQkwsTUFBdEIsRUFBOEJHLENBQTlCLEVBQWlDO0FBQy9CaEgsWUFBSyxlQUFNO0FBQ1Q0QyxZQUFHdUUsSUFBSCxDQUFRTCxNQUFSLEVBQWdCRCxNQUFoQjtBQUNBLGdCQUFPQSxNQUFQO0FBQ0QsUUFKOEI7QUFLL0JPLG1CQUFZLElBTG1CO0FBTS9CQyxxQkFBYztBQU5pQixNQUFqQztBQUhvRDs7QUFDdEQsUUFBSyxJQUFJTCxDQUFULElBQWNELElBQWQsRUFBb0I7QUFBQSxZQUFYQyxDQUFXO0FBVW5CO0FBQ0YsRUFaRDs7QUFjQSxLQUFJaEYsTUFBTSxTQUFOQSxHQUFNO0FBQUEsVUFBTSx5QkFBWUEsR0FBWixFQUFOO0FBQUEsRUFBVjs7QUFFQSxLQUFJdUYsUUFBUSxTQUFSQSxLQUFRLEtBQU07QUFDaEI7QUFDQSxPQUFJdkUsSUFBSSx5QkFBWWhCLEdBQVosRUFBUjtBQUNBLE9BQUl0QixJQUFJc0MsQ0FBUjtBQUNBLFVBQU90QyxJQUFJc0MsQ0FBSixJQUFTd0UsRUFBaEIsRUFBb0I7QUFDbEI7QUFDQTlHLFNBQUkseUJBQVlzQixHQUFaLEVBQUo7QUFDRDtBQUNGLEVBUkQ7O0FBVUEsS0FBSXlGLFFBQVEsU0FBUkEsS0FBUSxDQUFDQyxPQUFELEVBQVU5RSxFQUFWLEVBQWNSLElBQWQsRUFBb0JtRixLQUFwQixFQUE4QjtBQUN4QyxPQUFJeEgsRUFBRTRILFFBQUYsQ0FBV3ZGLElBQVgsQ0FBSixFQUFzQjtBQUNwQm1GLGFBQVFuRixJQUFSO0FBQ0FBLFlBQU8sRUFBUDtBQUNEO0FBQ0QsT0FBSSxDQUFDckMsRUFBRTZILE9BQUYsQ0FBVXhGLElBQVYsQ0FBTCxFQUFzQjtBQUNwQkEsWUFBTyxDQUFDQSxJQUFELENBQVA7QUFDRDtBQUNEeUYsY0FBVyxZQUFNO0FBQ2ZqRixRQUFHdUUsSUFBSCxZQUFRTyxPQUFSLDRCQUFvQnRGLElBQXBCO0FBQ0QsSUFGRCxFQUVHbUYsU0FBUyxDQUZaO0FBR0QsRUFYRDs7QUFhQSxLQUFJTyxtQkFBbUIsU0FBbkJBLGdCQUFtQixJQUFLO0FBQzFCLE9BQUlDLE1BQU16SCxFQUFFMEgsTUFBWjtBQUNBLE9BQUlDLElBQUksQ0FBUjtBQUNBLE9BQUlDLElBQUksRUFBUjtBQUNBLFVBQU9ELElBQUlGLEdBQVgsRUFBZ0I7QUFDZEcsVUFBSzVILEVBQUUySCxHQUFGLEVBQU9FLFFBQVAsQ0FBZ0IsRUFBaEIsQ0FBTDtBQUNEO0FBQ0QsVUFBT0QsQ0FBUDtBQUNELEVBUkQ7O0FBVUEsS0FBSUUsbUJBQW1CLFNBQW5CQSxnQkFBbUIsTUFBTztBQUM1QixPQUFJTCxNQUFNTSxJQUFJTCxNQUFkO0FBQ0EsT0FBSUMsSUFBSSxDQUFSO0FBQ0EsT0FBSTNILElBQUksSUFBSWdJLE1BQUosQ0FBV0MsS0FBS0MsS0FBTCxDQUFXSCxJQUFJTCxNQUFKLEdBQWEsQ0FBeEIsQ0FBWCxDQUFSO0FBQ0EsT0FBSVMsSUFBSSxDQUFSO0FBQ0EsVUFBT1IsSUFBSUYsR0FBWCxFQUFnQjtBQUNkLFNBQUlXLE9BQU1MLElBQUlNLE1BQUosQ0FBV1YsQ0FBWCxFQUFjLENBQWQsQ0FBVjtBQUNBM0gsT0FBRW1JLEdBQUYsSUFBU0csU0FBU0YsSUFBVCxFQUFjLEVBQWQsQ0FBVDtBQUNBVCxVQUFLLENBQUw7QUFDRDtBQUNELFVBQU8zSCxDQUFQO0FBQ0QsRUFYRDs7QUFhQSxLQUFJdUksZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDUixHQUFELEVBQWtCO0FBQUEsT0FBWk4sR0FBWSx1RUFBTixDQUFNOztBQUNwQ0EsU0FBTUEsT0FBT00sSUFBSUwsTUFBakI7QUFDQSxPQUFJMUgsSUFBSSxJQUFJZ0ksTUFBSixDQUFXUCxHQUFYLENBQVI7QUFDQXpILEtBQUV3SSxLQUFGLENBQVFULEdBQVIsRUFBYSxDQUFiLEVBQWdCQSxJQUFJTCxNQUFwQixFQUE0QixPQUE1QjtBQUNBLFVBQU8xSCxDQUFQO0FBQ0QsRUFMRDs7QUFPQSxLQUFJeUksb0JBQW9CLFNBQXBCQSxpQkFBb0IsR0FBZ0I7QUFBQSxzQ0FBWkMsT0FBWTtBQUFaQSxZQUFZO0FBQUE7O0FBQ3RDLE9BQUk1RyxPQUFPLEVBQVg7QUFEc0M7QUFBQTtBQUFBOztBQUFBO0FBRXRDLDBCQUFjNEcsT0FBZCw4SEFBdUI7QUFBQSxXQUFkQyxDQUFjOztBQUNyQixXQUFJbEosRUFBRTZILE9BQUYsQ0FBVXFCLENBQVYsQ0FBSixFQUFrQjtBQUNoQjdHLGNBQUtsQyxJQUFMLENBQVUrSSxFQUFFcEUsSUFBRixDQUFPLElBQVAsQ0FBVjtBQUNELFFBRkQsTUFHSyxJQUFJOUUsRUFBRW1KLFFBQUYsQ0FBV0QsQ0FBWCxDQUFKLEVBQW1CO0FBQ3RCN0csY0FBS2xDLElBQUwsQ0FBVStJLENBQVY7QUFDRDtBQUNGO0FBVHFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVXRDLFVBQU83RyxJQUFQO0FBQ0QsRUFYRDs7QUFhQSxLQUFJc0csTUFBTSxTQUFOQSxHQUFNLENBQUMvRSxLQUFEO0FBQUEsT0FBUXdGLElBQVIsdUVBQWUsRUFBZjtBQUFBLFVBQXNCLE1BQU1wSixFQUFFcUosUUFBRixDQUFXekYsTUFBTXdFLFFBQU4sQ0FBZSxFQUFmLENBQVgsRUFBK0JJLEtBQUtDLEtBQUwsQ0FBV1csT0FBTyxDQUFsQixDQUEvQixFQUFxRCxHQUFyRCxDQUE1QjtBQUFBLEVBQVY7O0FBRUEsS0FBSUUsY0FBYyxTQUFkQSxXQUFjLENBQUNDLE1BQUQsRUFBMEI7QUFBQSxPQUFqQjdKLE9BQWlCLHVFQUFQLEVBQU87O0FBQzFDLE9BQUk4SixRQUFROUosUUFBUThKLEtBQVIsSUFBaUIsRUFBN0I7QUFDQSxPQUFJQyxPQUFPL0osUUFBUStKLElBQVIsSUFBZ0IsT0FBM0I7QUFDQSxPQUFJQyxTQUFTMUosRUFBRTJKLE1BQUYsQ0FBUyxHQUFULEVBQWNqSyxRQUFRZ0ssTUFBUixJQUFrQixDQUFoQyxDQUFiOztBQUVBLE9BQUlFLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxDQUFELEVBQUlDLEdBQUosRUFBWTtBQUNyQkQsU0FBSUEsRUFBRXpCLFFBQUYsQ0FBVyxFQUFYLENBQUo7QUFDQSxTQUFJcUIsU0FBUyxPQUFiLEVBQXNCO0FBQUVJLFdBQUlBLEVBQUVFLFdBQUYsRUFBSjtBQUFxQjtBQUM3QyxZQUFPRixFQUFFNUIsTUFBRixHQUFXNkIsR0FBbEIsRUFBdUI7QUFDckJELFdBQUksTUFBTUEsQ0FBVjtBQUNEO0FBQ0QsWUFBT0EsQ0FBUDtBQUNELElBUEQ7O0FBU0EsT0FBSTdCLE1BQU1RLEtBQUt3QixHQUFMLENBQVNULE9BQU9VLFVBQWhCLEVBQTRCdkssUUFBUXVJLE1BQVIsSUFBa0JzQixPQUFPVSxVQUFyRCxDQUFWO0FBQ0EsT0FBSUMsT0FBTzFCLEtBQUsyQixJQUFMLENBQVVuQyxNQUFNd0IsS0FBaEIsQ0FBWDtBQUNBLE9BQUlZLE9BQU9wQyxNQUFNd0IsS0FBTixJQUFlQSxLQUExQjtBQUNBLE9BQUlhLGVBQWVyQyxJQUFJSSxRQUFKLENBQWEsRUFBYixFQUFpQkgsTUFBcEM7QUFDQSxPQUFJb0MsZUFBZSxDQUFuQixFQUFzQjtBQUFFQSxvQkFBZSxDQUFmO0FBQWtCOztBQUUxQyxPQUFJQyxNQUFNLElBQUkxSixVQUFKLENBQWUySSxNQUFmLENBQVY7O0FBRUEsT0FBSWpCLE1BQU1vQixTQUFTLFFBQW5CO0FBQ0EsVUFBT3BCLElBQUlMLE1BQUosR0FBYW9DLFlBQXBCLEVBQWtDO0FBQ2hDL0IsWUFBTyxHQUFQO0FBQ0Q7O0FBRURBLFVBQU8sSUFBUDs7QUFFQSxRQUFLLElBQUlKLElBQUksQ0FBYixFQUFnQkEsSUFBSXNCLEtBQXBCLEVBQTJCdEIsR0FBM0IsRUFBZ0M7QUFDOUJJLFlBQU8sTUFBTXNCLEtBQUsxQixDQUFMLEVBQVEsQ0FBUixDQUFiO0FBQ0Q7O0FBRUQsT0FBSUYsR0FBSixFQUFTO0FBQ1BNLFlBQU8sSUFBUDtBQUNEOztBQUVELE9BQUkvSCxJQUFJLENBQVI7O0FBRUEsUUFBSyxJQUFJMkgsS0FBSSxDQUFiLEVBQWdCQSxLQUFJZ0MsSUFBcEIsRUFBMEJoQyxJQUExQixFQUErQjtBQUM3QkksWUFBT29CLFNBQVNFLEtBQUtySixDQUFMLEVBQVE4SixZQUFSLENBQVQsR0FBaUMsSUFBeEM7QUFDQSxTQUFJRSxZQUFZckMsT0FBTWdDLE9BQU8sQ0FBYixHQUFpQkUsSUFBakIsR0FBd0JaLEtBQXhDO0FBQ0EsU0FBSWdCLGFBQWFoQixRQUFRZSxTQUF6Qjs7QUFFQSxVQUFLLElBQUlFLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsU0FBcEIsRUFBK0JFLEdBQS9CLEVBQW9DO0FBQ2xDbkMsY0FBTyxNQUFNc0IsS0FBS1UsSUFBSS9KLENBQUosQ0FBTCxFQUFhLENBQWIsQ0FBYjtBQUNBQTtBQUNEOztBQUVELFVBQUssSUFBSWtLLEtBQUksQ0FBYixFQUFnQkEsS0FBSUQsVUFBcEIsRUFBZ0NDLElBQWhDLEVBQXFDO0FBQ25DbkMsY0FBTyxLQUFQO0FBQ0Q7O0FBRUQvSCxVQUFLZ0ssU0FBTDtBQUNBakMsWUFBTyxLQUFQOztBQUVBLFVBQUssSUFBSW1DLE1BQUksQ0FBYixFQUFnQkEsTUFBSUYsU0FBcEIsRUFBK0JFLEtBQS9CLEVBQW9DO0FBQ2xDLFdBQUlDLElBQUlKLElBQUkvSixDQUFKLENBQVI7QUFDQStILGNBQU9vQyxJQUFJLEVBQUosSUFBVUEsSUFBSSxHQUFkLElBQXFCQSxJQUFJLEdBQXpCLEdBQStCQyxPQUFPQyxZQUFQLENBQW9CRixDQUFwQixDQUEvQixHQUF3RCxHQUEvRDtBQUNBbks7QUFDRDs7QUFFRCtILFlBQU8sSUFBUDtBQUNEOztBQUVELFVBQU9BLEdBQVA7QUFDRCxFQWxFRDs7QUFvRUEsS0FBSXVDLE9BQU8sU0FBUEEsSUFBTztBQUFBLFVBQU9ySixPQUFPc0osSUFBUCxDQUFZQyxTQUFTQyxtQkFBbUIxQyxHQUFuQixDQUFULENBQVosQ0FBUDtBQUFBLEVBQVg7O0FBRUEsS0FBSTJDLE9BQU8sU0FBUEEsSUFBTztBQUFBLFVBQU9DLG1CQUFtQkMsT0FBTzNKLE9BQU80SixJQUFQLENBQVk5QyxHQUFaLENBQVAsQ0FBbkIsQ0FBUDtBQUFBLEVBQVg7O0FBRUE5RyxRQUFPcUosSUFBUCxHQUFjQSxJQUFkO0FBQ0FySixRQUFPeUosSUFBUCxHQUFjQSxJQUFkOztBQUdBLEtBQUlJLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUN0RSxNQUFELEVBQVNqRSxJQUFULEVBQWVELEVBQWYsRUFBcUM7QUFBQSxPQUFsQnlJLEtBQWtCLHVFQUFWLEtBQVU7O0FBQzFELE9BQUlBLFNBQVMsQ0FBQ3ZFLE9BQU93RSxjQUFQLENBQXNCekksSUFBdEIsQ0FBZCxFQUEyQztBQUN6Q29FLFlBQU9DLGNBQVAsQ0FBc0JKLE1BQXRCLEVBQThCakUsSUFBOUIsRUFBb0M7QUFDbENjLGNBQU9mLEVBRDJCO0FBRWxDMkksaUJBQVU7QUFGd0IsTUFBcEM7QUFJRDtBQUNGLEVBUEQ7O0FBU0EsS0FBSUMsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQzFFLE1BQUQsRUFBU0QsTUFBVCxFQUFpQjRFLEtBQWpCLEVBQTJCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ2pELDJCQUFjQSxLQUFkLG1JQUFxQjtBQUFBLFdBQVo3QixDQUFZOztBQUNuQixXQUFJN0osRUFBRTZILE9BQUYsQ0FBVWdDLENBQVYsQ0FBSixFQUFrQjtBQUNoQndCLDBCQUFpQnRFLE1BQWpCLEVBQXlCOEMsRUFBRSxDQUFGLENBQXpCLEVBQStCL0MsT0FBTytDLEVBQUUsQ0FBRixDQUFQLENBQS9CO0FBQ0QsUUFGRCxNQUdLO0FBQ0h3QiwwQkFBaUJ0RSxNQUFqQixFQUF5QjhDLENBQXpCLEVBQTRCL0MsT0FBTytDLENBQVAsQ0FBNUI7QUFDRDtBQUNGO0FBUmdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTbEQsRUFURDs7U0FZRTdKLEMsR0FBQUEsQztTQUNBOEMsSSxHQUFBQSxJO1NBQ0FxRCxPLEdBQUFBLE87U0FDQWxDLFEsR0FBQUEsUTtTQUNBSSxNLEdBQUFBLE07U0FDQWdDLFEsR0FBQUEsUTtTQUNBSSxRLEdBQUFBLFE7U0FDQUUsVSxHQUFBQSxVO1NBQ0F4QyxNLEdBQUFBLE07U0FDQUMsTSxHQUFBQSxNO1NBQ0FFLGEsR0FBQUEsYTtTQUNBTixHLEdBQUFBLEc7U0FDQVUsRSxHQUFBQSxFO1NBQ0FoQyxJO1NBQ0FtQyxRLEdBQUFBLFE7U0FDQUssTSxHQUFBQSxNO1NBQ0FHLE0sR0FBQUEsTTtTQUNBQyxRLEdBQUFBLFE7U0FDQUMsSSxHQUFBQSxJO1NBQ0FvRyxHO1NBQ0ExSixHLEdBQUFBLEc7U0FDQTBDLEs7U0FDQUMsRztTQUNBaUMsVyxHQUFBQSxXO1NBQ0FVLHVCLEdBQUFBLHVCO1NBQ0FDLEssR0FBQUEsSztTQUNBRSxLLEdBQUFBLEs7U0FDQUssZ0IsR0FBQUEsZ0I7U0FDQU0sZ0IsR0FBQUEsZ0I7U0FDQVMsYSxHQUFBQSxhO1NBQ0FFLGlCLEdBQUFBLGlCO1NBQ0FMLEcsR0FBQUEsRztTQUNBVyxXLEdBQUFBLFc7U0FDQXVCLEksR0FBQUEsSTtTQUNBSSxJLEdBQUFBLEk7U0FDQUksZ0IsR0FBQUEsZ0I7U0FDQUksaUIsR0FBQUEsaUI7Ozs7Ozs7QUM3U0Ysa0M7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEscUM7Ozs7OztBQ0FBLHNDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsb0M7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBOUosTUFBS2lLLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsUUFBckIsR0FBZ0MsVUFBVS9FLE1BQVYsRUFBa0I7QUFDaEQsVUFBT3lCLEtBQUt1RCxJQUFMLENBQVUsQ0FBQyxLQUFLckQsQ0FBTCxHQUFTM0IsT0FBTzJCLENBQWpCLEtBQXVCLEtBQUtBLENBQUwsR0FBUzNCLE9BQU8yQixDQUF2QyxJQUE0QyxDQUFDLEtBQUtzRCxDQUFMLEdBQVNqRixPQUFPaUYsQ0FBakIsS0FBdUIsS0FBS0EsQ0FBTCxHQUFTakYsT0FBT2lGLENBQXZDLENBQXRELENBQVA7QUFDRCxFQUZEOztBQUlBckssTUFBS2lLLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQnpELFFBQXJCLEdBQWdDLFlBQVk7QUFDMUMsVUFBT3BJLEVBQUVpTSxRQUFGLENBQVcsY0FBWCxFQUEyQixJQUEzQixDQUFQO0FBQ0QsRUFGRDs7QUFJQXRLLE1BQUt1SyxTQUFMLENBQWVMLFNBQWYsQ0FBeUJ6RCxRQUF6QixHQUFvQyxZQUFZO0FBQzlDLFVBQU9wSSxFQUFFaU0sUUFBRixDQUFXLGdFQUFYLEVBQTZFLElBQTdFLENBQVA7QUFDRCxFQUZEOztBQUlBLEtBQU1FLFdBQVc7QUFDZkMsZ0JBQWEsS0FERTs7QUFHZkMsU0FBTSxLQUhTOztBQUtmQyxXQUFRO0FBQ05sRCxXQUFNLE1BQU07QUFETixJQUxPOztBQVNmbUQsbUJBQWdCO0FBQ2RDLG9CQUFlLEtBQUs7QUFETixJQVREOztBQWFmQyxXQUFRO0FBQ05qRCxZQUFPLEdBREQ7QUFFTmtELGFBQVEsR0FGRjtBQUdOQyxZQUFPO0FBSEQsSUFiTzs7QUFtQmZDLFlBQVM7QUFDUEMsWUFBTztBQURBLElBbkJNOztBQXVCZkMsVUFBTztBQUNMRCxZQUFPLEdBREY7QUFFTHJELFlBQU8sQ0FGRjtBQUdMa0QsYUFBUTtBQUhILElBdkJROztBQTZCZkssV0FBUTtBQUNOdkQsWUFBTyxNQUFNLENBRFA7QUFFTmtELGFBQVEsTUFBTTtBQUZSLElBN0JPOztBQWtDZk0sV0FBUTtBQUNOeEQsWUFBTyxDQUREO0FBRU5rRCxhQUFRLENBRkY7QUFHTk8sWUFBTyxFQUhEO0FBSU5DLGdCQUFXO0FBSkwsSUFsQ087O0FBeUNmQyxXQUFRO0FBQ05OLFlBQU8sRUFERDtBQUVOckQsWUFBTyxFQUZEO0FBR05rRCxhQUFRO0FBSEYsSUF6Q087O0FBK0NmVSxRQUFLO0FBQ0hQLFlBQU87QUFESixJQS9DVTs7QUFtRGZRLFdBQVE7QUFDTlIsWUFBTyxHQUREO0FBRU5TLG9CQUFlLEdBRlQ7QUFHTkMsdUJBQWtCO0FBSFosSUFuRE87O0FBeURmQyxZQUFTO0FBQ1BwRSxXQUFNLEtBQUs7QUFESixJQXpETTs7QUE2RGZxRSxTQUFNO0FBQ0pyRSxXQUFNLElBQUk7QUFETjtBQTdEUyxFQUFqQjs7QUFrRUEsS0FBSTVGLFNBQVMsQ0FBYjs7QUFFQSxLQUFJZ0QsUUFBUSxTQUFSQSxLQUFRLENBQUN2RCxDQUFELEVBQUl5SyxHQUFKLEVBQVk7QUFDdEI7QUFDQSxXQTJFQWxLLE1BM0VBO0FBQ0FKLFdBQVFvRCxLQUFSLENBQWNrSCxHQUFkLEVBQW1CLElBQW5CLEVBQXlCekssRUFBRVcsS0FBM0IsRUFBa0MsTUFBTVgsRUFBRTBLLEdBQVIsR0FBYyxHQUFkLEdBQW9CMUssRUFBRTJLLEdBQXRCLEdBQTRCLEdBQTlEO0FBQ0QsRUFKRDs7QUFNQSxLQUFJQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLE9BQVE7QUFDMUIsT0FBSUMsSUFBSSx1QkFBUjtBQUNBLFdBQVFsTCxJQUFSO0FBQ0UsVUFBSyxJQUFMO0FBQ0VrTCxXQUFJLGVBQUo7QUFDQTtBQUNGLFVBQUssSUFBTDtBQUNFQSxXQUFJLGlCQUFKO0FBQ0E7QUFDRixVQUFLLElBQUw7QUFDRUEsV0FBSSxnQkFBSjtBQUNBO0FBQ0YsVUFBSyxJQUFMO0FBQ0VBLFdBQUksdUJBQUo7QUFDQTtBQUNGLFVBQUssSUFBTDtBQUNFQSxXQUFJLGdDQUFKO0FBQ0E7QUFDRixVQUFLLElBQUw7QUFDRUEsV0FBSSwwQkFBSjtBQUNBO0FBQ0YsVUFBSyxJQUFMO0FBQ0VBLFdBQUkscUJBQUo7QUFDQTtBQUNGLFVBQUssSUFBTDtBQUNFQSxXQUFJLHVCQUFKO0FBQ0E7QUF4Qko7QUEwQkExSyxXQUFRb0QsS0FBUixDQUFjc0gsQ0FBZDtBQUNELEVBN0JEOztBQStCQSxLQUFJQyxXQUFXLFNBQVhBLFFBQVcsT0FBUTtBQUNyQixPQUFJRCxJQUFJLG1CQUFSO0FBQ0EsV0FBUWxMLElBQVI7QUFDRSxVQUFLLElBQUw7QUFDRWtMLFdBQUksZ0JBQUo7QUFDQTtBQUNGLFVBQUssSUFBTDtBQUNFQSxXQUFJLGtCQUFKO0FBQ0E7QUFDRixVQUFLLElBQUw7QUFDRUEsV0FBSSxtQkFBSjtBQUNBO0FBQ0YsVUFBSyxJQUFMO0FBQ0VBLFdBQUksa0JBQUo7QUFDQTtBQUNGLFVBQUssSUFBTDtBQUNFQSxXQUFJLG9CQUFKO0FBQ0E7QUFDRixVQUFLLElBQUw7QUFDRUEsV0FBSSxpQkFBSjtBQUNBO0FBQ0YsVUFBSyxJQUFMO0FBQ0VBLFdBQUksa0NBQUo7QUFDQTtBQUNGLFVBQUssSUFBTDtBQUNFQSxXQUFJLG9CQUFKO0FBQ0E7QUFDRixVQUFLLElBQUw7QUFDRUEsV0FBSSxvQkFBSjtBQUNBO0FBQ0YsVUFBSyxJQUFMO0FBQ0VBLFdBQUksdUJBQUo7QUFDQTtBQTlCSjtBQWdDQTFLLFdBQVFvRCxLQUFSLENBQWNzSCxDQUFkO0FBQ0QsRUFuQ0Q7O1NBdUNFM0IsUSxHQUFBQSxRO1NBQ0EzSSxNLEdBQUFBLE07U0FDQWdELEssR0FBQUEsSztTQUNBcUgsYSxHQUFBQSxhO1NBQ0FFLFEsR0FBQUEsUTs7Ozs7Ozs7Ozs7Ozs7O0FDaEtGOzs7Ozs7OztLQUVhQyxLLFdBQUFBLEs7QUFFWCxrQkFBYWpILE1BQWIsRUFBcUJqRSxJQUFyQixFQUEyQm1MLElBQTNCLEVBQWlEO0FBQUEsU0FBaEJDLE9BQWdCLHVFQUFOLElBQU07O0FBQUE7O0FBQy9DLFVBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCcE0sWUFBWUMsR0FBWixFQUFqQjtBQUNBLFVBQUs4RSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLc0YsSUFBTCxHQUFZdkosSUFBWjtBQUNBLFVBQUttTCxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxVQUFLRyxPQUFMLEdBQWUsS0FBZjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCLEtBQXhCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0IsS0FBeEI7QUFDRDs7Ozs0QkFFTztBQUNOLFlBQUtGLE9BQUwsR0FBZSxJQUFmO0FBQ0Q7OztxQ0FFZ0I7QUFDZixZQUFLQyxnQkFBTCxHQUF3QixJQUF4QjtBQUNEOzs7dUNBRWtCO0FBQ2pCLFlBQUtELE9BQUwsR0FBZSxJQUFmO0FBQ0Q7OztnREFFMkI7QUFDMUIsWUFBS0MsZ0JBQUwsR0FBd0IsSUFBeEI7QUFDRDs7O29DQUVlO0FBQ2QsWUFBS0osT0FBTCxHQUFlLEtBQWY7QUFDRDs7O3NDQUVpQjtBQUNoQixZQUFLSyxnQkFBTCxHQUF3QixJQUF4QjtBQUNEOzs7Ozs7S0FJVUMsTyxXQUFBQSxPOzs7Ozs7O3dCQUVQMUwsSSxFQUFNRCxFLEVBQWU7QUFBQSxXQUFYNEwsS0FBVyx1RUFBSCxDQUFHOztBQUN2QixZQUFLQyxVQUFMLEdBQWtCLEtBQUtBLFVBQUwsSUFBbUIsRUFBckM7QUFDQSxZQUFLQSxVQUFMLENBQWdCNUwsSUFBaEIsSUFBd0IsS0FBSzRMLFVBQUwsQ0FBZ0I1TCxJQUFoQixLQUF5QixFQUFqRDtBQUNBLFlBQUs0TCxVQUFMLENBQWdCNUwsSUFBaEIsRUFBc0IzQyxJQUF0QixDQUEyQixFQUFFMEMsTUFBRixFQUFNNEwsWUFBTixFQUEzQjtBQUNBLFlBQUtDLFVBQUwsQ0FBZ0I1TCxJQUFoQixJQUF3QixpQkFBRTZMLE1BQUYsQ0FBUyxLQUFLRCxVQUFMLENBQWdCNUwsSUFBaEIsQ0FBVCxFQUFnQyxPQUFoQyxDQUF4QjtBQUNBLGNBQU8sSUFBUDtBQUNEOzs7MEJBRUtBLEksRUFBTUQsRSxFQUFJO0FBQUE7O0FBQ2QsWUFBSzZMLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxJQUFtQixFQUFyQzs7QUFFQSxXQUFJaE4sT0FBTyxJQUFYO0FBQ0EsV0FBSWtOLHFCQUFxQixTQUFyQkEsa0JBQXFCLEdBQU07QUFDN0IvTCxZQUFHYSxLQUFILENBQVNoQyxLQUFLbU4sR0FBTCxDQUFTL0wsSUFBVCxFQUFlOEwsa0JBQWYsQ0FBVDtBQUNELFFBRkQ7QUFHQUEsMEJBQW1CRSxnQkFBbkIsR0FBc0NqTSxFQUF0Qzs7QUFFQSxjQUFPLEtBQUtrTSxFQUFMLENBQVFqTSxJQUFSLEVBQWM4TCxrQkFBZCxDQUFQO0FBQ0Q7Ozt5QkFFSTlMLEksRUFBTUQsRSxFQUFJO0FBQ2IsWUFBSzZMLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxJQUFtQixFQUFyQzs7QUFFQSxXQUFJLENBQUMsS0FBS0EsVUFBTCxDQUFnQjVMLElBQWhCLENBQUwsRUFBNEI7QUFDMUIsZ0JBQU8sSUFBUDtBQUNEOztBQUVELFdBQUlrTSxPQUFPLEtBQUtOLFVBQUwsQ0FBZ0I1TCxJQUFoQixDQUFYO0FBQ0EsV0FBSW9GLElBQUlyRixLQUFLbU0sS0FBSy9HLE1BQVYsR0FBbUIsQ0FBM0I7O0FBRUEsY0FBT0MsTUFBTSxDQUFiLEVBQWdCO0FBQ2QsYUFBSThHLEtBQUs5RyxDQUFMLEVBQVFyRixFQUFSLEtBQWVBLEVBQWYsSUFBcUJtTSxLQUFLOUcsQ0FBTCxFQUFRNEcsZ0JBQVIsS0FBNkJqTSxFQUF0RCxFQUEwRDtBQUN4RG1NLGdCQUFLQyxNQUFMLENBQVkvRyxDQUFaLEVBQWUsQ0FBZjtBQUNEO0FBQ0Y7O0FBRUQsV0FBSSxpQkFBRWdILE9BQUYsQ0FBVUYsSUFBVixDQUFKLEVBQXFCO0FBQ25CLGdCQUFPLEtBQUtOLFVBQUwsQ0FBZ0I1TCxJQUFoQixDQUFQO0FBQ0Q7O0FBRUQsY0FBTyxJQUFQO0FBQ0Q7OzswQkFFS0EsSSxFQUFNbUwsSSxFQUFNO0FBQ2hCLFlBQUtTLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxJQUFtQixFQUFyQzs7QUFFQSxXQUFJUyxzQkFBSjs7QUFFQSxXQUFJLENBQUNsQixJQUFELElBQVNBLEtBQUtFLGFBQUwsS0FBdUIsSUFBcEMsRUFBMEM7QUFDeEMsYUFBSUYsUUFBUUEsS0FBS0EsSUFBYixJQUFxQkEsS0FBSzVCLElBQTlCLEVBQW9DO0FBQ2xDOEMsMkJBQWdCbEIsSUFBaEI7QUFDQUEsa0JBQU9BLEtBQUtBLElBQVo7QUFDRDtBQUNEQSxnQkFBTyxJQUFJRCxLQUFKLENBQVUsSUFBVixFQUFnQmxMLElBQWhCLEVBQXNCbUwsSUFBdEIsQ0FBUDtBQUNEOztBQUVELFdBQUksS0FBS1MsVUFBTCxDQUFnQjVMLElBQWhCLENBQUosRUFBMkI7QUFDekIsYUFBSXNNLFlBQVksaUJBQUVDLEtBQUYsQ0FBUSxLQUFLWCxVQUFMLENBQWdCNUwsSUFBaEIsQ0FBUixDQUFoQjtBQUR5QjtBQUFBO0FBQUE7O0FBQUE7QUFFekIsZ0NBQWNzTSxTQUFkLDhIQUF5QjtBQUFBLGlCQUFoQkUsQ0FBZ0I7O0FBQ3ZCQSxlQUFFek0sRUFBRixDQUFLdUUsSUFBTCxDQUFVLElBQVYsRUFBZ0I2RyxJQUFoQjtBQUNBLGlCQUFJQSxLQUFLSyxnQkFBVCxFQUEyQjtBQUN6QixzQkFBTyxJQUFQO0FBQ0Q7QUFDRjtBQVB3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVF6QixhQUFJTCxLQUFLSSxPQUFULEVBQWtCO0FBQ2hCLGVBQUljLGFBQUosRUFBbUI7QUFDakJBLDJCQUFjZCxPQUFkLEdBQXdCLElBQXhCO0FBQ0FKLGtCQUFLc0IsWUFBTDtBQUNEO0FBQ0Qsa0JBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBSXRCLEtBQUtDLE9BQUwsSUFBZ0IsS0FBS3NCLE1BQXJCLElBQStCLEtBQUtBLE1BQUwsQ0FBWXpNLElBQS9DLEVBQXFEO0FBQ25ELGNBQUt5TSxNQUFMLENBQVl6TSxJQUFaLENBQWlCRCxJQUFqQixFQUF1Qm1MLElBQXZCO0FBQ0Q7O0FBRUQsY0FBTyxLQUFLTSxnQkFBWjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSEg7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNa0IsSztBQUVKLGtCQUFhQyxLQUFiLEVBQW9CckQsSUFBcEIsRUFBMEJ6SSxLQUExQixFQUFpQ3RCLEtBQWpDLEVBQXdDcU4sR0FBeEMsRUFBNkM7QUFBQTs7QUFDM0MsU0FBSUQsaUJBQWlCRCxLQUFyQixFQUE0QjtBQUMxQixXQUFJeE0sSUFBSXlNLEtBQVI7QUFDQSxZQUFLQSxLQUFMLEdBQWF6TSxFQUFFeU0sS0FBZjtBQUNBLFlBQUtFLEtBQUwsR0FBYTNNLEVBQUUyTSxLQUFmO0FBQ0EsWUFBS0MsU0FBTCxHQUFpQjVNLEVBQUU0TSxTQUFuQjtBQUNBLFlBQUtqTSxLQUFMLEdBQWFYLEVBQUVXLEtBQWY7QUFDQSxZQUFLdEIsS0FBTCxHQUFhLGlCQUFFK00sS0FBRixDQUFRcE0sRUFBRVgsS0FBVixDQUFiO0FBQ0EsWUFBS3FOLEdBQUwsR0FBVyxpQkFBRU4sS0FBRixDQUFRcE0sRUFBRTBNLEdBQVYsQ0FBWDtBQUNBLFlBQUsxSCxNQUFMLEdBQWNoRixFQUFFVyxLQUFGLENBQVFxRSxNQUF0QjtBQUNELE1BVEQsTUFVSztBQUNILFlBQUt5SCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxZQUFLRSxLQUFMLEdBQWF2RCxJQUFiO0FBQ0EsWUFBS3dELFNBQUwsR0FBaUIsS0FBakI7QUFDQSxZQUFLak0sS0FBTCxHQUFhQSxTQUFTLEVBQXRCO0FBQ0EsWUFBS3RCLEtBQUwsR0FBYUEsU0FBUyxFQUFFd04sUUFBUSxDQUFWLEVBQWFDLE1BQU0sQ0FBbkIsRUFBc0JDLFFBQVEsQ0FBOUIsRUFBdEI7QUFDQSxZQUFLTCxHQUFMLEdBQVdBLE9BQU8sRUFBRUcsUUFBUSxDQUFWLEVBQWFDLE1BQU0sQ0FBbkIsRUFBc0JDLFFBQVEsQ0FBOUIsRUFBbEI7QUFDQSxZQUFLL0gsTUFBTCxHQUFjLEtBQUswSCxHQUFMLENBQVNHLE1BQVQsR0FBa0IsS0FBS3hOLEtBQUwsQ0FBV3dOLE1BQTNDO0FBQ0Q7QUFDRjs7Ozt3QkFFR2hDLEMsRUFBRztBQUNMLFdBQUksaUJBQUUzRSxRQUFGLENBQVcyRSxDQUFYLENBQUosRUFBbUI7QUFDakIsYUFBSW1DLFFBQVFuQyxFQUFFb0MsS0FBRixDQUFRLEdBQVIsQ0FBWjtBQUNBLGFBQUlELE1BQU1oSSxNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDcEIsa0NBQWNnSSxLQUFkLDhIQUFxQjtBQUFBLG1CQUFaM00sQ0FBWTs7QUFDbkIsbUJBQUksS0FBSzZNLEVBQUwsQ0FBUTdNLENBQVIsQ0FBSixFQUFnQjtBQUNkLHdCQUFPLElBQVA7QUFDRDtBQUNGO0FBTG1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNckIsVUFORCxNQU9LO0FBQ0gsa0JBQU93SyxNQUFNLEdBQU4sSUFBYSxLQUFLekIsSUFBTCxLQUFjeUIsQ0FBM0IsSUFBZ0MsS0FBS2xLLEtBQUwsS0FBZWtLLENBQXREO0FBQ0Q7QUFDRixRQVpELE1BYUssSUFBSSxpQkFBRXNDLFFBQUYsQ0FBV3RDLENBQVgsQ0FBSixFQUFtQjtBQUN0QixnQkFBTyxLQUFLekIsSUFBTCxDQUFVZ0UsS0FBVixDQUFnQnZDLENBQWhCLEtBQXNCLEtBQUtsSyxLQUFMLENBQVd5TSxLQUFYLENBQWlCdkMsQ0FBakIsQ0FBN0I7QUFDRCxRQUZJLE1BR0EsSUFBSSxpQkFBRWpHLE9BQUYsQ0FBVWlHLENBQVYsQ0FBSixFQUFrQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNyQixpQ0FBY0EsQ0FBZCxtSUFBaUI7QUFBQSxpQkFBUjVGLENBQVE7O0FBQ2YsaUJBQUksS0FBS2lJLEVBQUwsQ0FBUWpJLENBQVIsQ0FBSixFQUFnQjtBQUNkLHNCQUFPLElBQVA7QUFDRDtBQUNGO0FBTG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNdEI7QUFDRCxjQUFPLEtBQVA7QUFDRDs7O2dDQVlXO0FBQ1YsY0FBTyxpQkFBRStELFFBQUYsQ0FBVywwQ0FBWCxFQUF1RCxFQUFFckksT0FBTyxLQUFLQSxLQUFkLEVBQXFCbU0sTUFBTSxLQUFLek4sS0FBTCxDQUFXeU4sSUFBdEMsRUFBNENDLFFBQVEsS0FBSzFOLEtBQUwsQ0FBVzBOLE1BQS9ELEVBQXVFdE4sTUFBTSxZQUFLNE4sUUFBTCxDQUFjLEtBQUtaLEtBQUwsQ0FBV2hOLElBQXpCLENBQTdFLEVBQXZELENBQVA7QUFDRDs7O3lCQVpXO0FBQ1YsV0FBSSxLQUFLa04sS0FBTCxLQUFlLGFBQWYsSUFBZ0MsS0FBS0EsS0FBTCxLQUFlLGNBQW5ELEVBQW1FO0FBQ2pFLGNBQUtBLEtBQUwsR0FBYSxRQUFiO0FBQ0QsUUFGRCxNQUdLLElBQUksS0FBS0EsS0FBTCxLQUFlLE9BQW5CLEVBQTRCO0FBQy9CLGNBQUtBLEtBQUwsR0FBYSxPQUFiO0FBQ0Q7QUFDRCxjQUFPLEtBQUtBLEtBQVo7QUFDRDs7Ozs7O0tBU0dXLFU7Ozs7S0FFZUMsSzs7O0FBTW5CLG9CQUFlO0FBQUE7O0FBQUE7O0FBRWIsV0FBSzdRLEtBQUw7QUFGYTtBQUdkOzs7OzJCQUVNK0MsSSxFQUFNK04sSSxFQUFNO0FBQ2pCLFlBQUtqTixNQUFMLEdBQWMsQ0FBZDtBQUNBLFlBQUtkLElBQUwsR0FBWUEsUUFBUSxFQUFwQjtBQUNBLFlBQUsrTixJQUFMLEdBQVlBLFFBQVEsRUFBcEI7QUFDQSxZQUFLeEksTUFBTCxHQUFjLEtBQUt3SSxJQUFMLENBQVV4SSxNQUF4QjtBQUNBLFlBQUs2SCxNQUFMLEdBQWMsQ0FBZDtBQUNBLFlBQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EsWUFBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxZQUFLOU0sTUFBTCxHQUFjLEVBQWQ7QUFDQSxZQUFLd04sU0FBTCxHQUFpQixFQUFqQjtBQUNBLGNBQU8sSUFBUDtBQUNEOzs7aUNBRVlaLE0sRUFBUTtBQUFFLGNBQU9BLFVBQVUsQ0FBVixJQUFlQSxTQUFTLEtBQUs3SCxNQUFwQztBQUE0Qzs7OzJCQUU1RDtBQUFFLGNBQU8sS0FBSzBJLFdBQUwsQ0FBaUIsS0FBS2IsTUFBdEIsQ0FBUDtBQUFzQzs7OzZCQUV0QzVILEMsRUFBRztBQUFFLGNBQU8sS0FBS3VJLElBQUwsQ0FBVUcsTUFBVixDQUFpQjFJLENBQWpCLENBQVA7QUFBNEI7Ozs2QkFFakNBLEMsRUFBRztBQUFFLGNBQU8sS0FBS3VJLElBQUwsQ0FBVUksU0FBVixDQUFvQjNJLENBQXBCLENBQVA7QUFBK0I7Ozs0QkFFckM7QUFDTixXQUFJNEksV0FBVyxTQUFYQSxRQUFXLENBQUNoQixNQUFELEVBQVNDLElBQVQsRUFBZUMsTUFBZixFQUEwQjtBQUFFLGdCQUFPLEVBQUVGLGNBQUYsRUFBVUMsVUFBVixFQUFnQkMsY0FBaEIsRUFBUDtBQUFpQyxRQUE1RTs7QUFFQSxXQUFJZSxRQUFRLElBQVo7QUFDQSxXQUFJekIsSUFBSSxpQkFBRWxGLElBQUYsQ0FBTyxLQUFLbEgsTUFBWixDQUFSO0FBQ0EsV0FBSTRNLFNBQVMsS0FBS0EsTUFBbEI7QUFDQSxXQUFJOUgsTUFBTSxDQUFWOztBQUVBLGNBQU8sQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZZ0osT0FBWixDQUFvQixLQUFLQyxPQUFMLENBQWFuQixNQUFiLENBQXBCLE1BQThDLENBQUMsQ0FBdEQsRUFBeUQ7QUFDdkQsYUFBSVIsS0FBSyxDQUFDQSxFQUFFNEIsYUFBWixFQUEyQjtBQUN6QjVCLGFBQUU0QixhQUFGLEdBQWtCLElBQWxCO0FBQ0Q7QUFDRCxhQUFJLENBQUMsS0FBS1AsV0FBTCxDQUFpQmIsTUFBakIsQ0FBTCxFQUErQjtBQUM3QixrQkFBTyxFQUFFaUIsWUFBRixFQUFTakIsY0FBVCxFQUFQO0FBQ0Q7QUFDREE7QUFDRDs7QUFFRCxXQUFJcUIsYUFBYXJCLE1BQWpCOztBQUVBLFdBQUlDLE9BQU8sS0FBS0EsSUFBaEI7QUFDQSxXQUFJQyxTQUFTLEtBQUtBLE1BQWxCO0FBQ0EsWUFBSyxJQUFJL0ksQ0FBVCxJQUFjLEtBQUttSyxXQUFuQixFQUFnQztBQUM5QixhQUFJQyxJQUFJLEtBQUtDLE9BQUwsQ0FBYXhCLE1BQWIsRUFBcUJPLEtBQXJCLENBQTJCLEtBQUtlLFdBQUwsQ0FBaUJuSyxDQUFqQixDQUEzQixDQUFSO0FBQ0EsYUFBSW9LLEtBQUtBLEVBQUVFLEtBQUYsS0FBWSxDQUFyQixFQUF3QjtBQUN0QixlQUFJM04sUUFBUXlOLEVBQUVwSixNQUFGLEdBQVcsQ0FBWCxHQUFlb0osRUFBRUcsS0FBRixDQUFRLENBQVIsRUFBVzFNLElBQVgsQ0FBZ0IsRUFBaEIsQ0FBZixHQUFxQ3VNLEVBQUV2TSxJQUFGLENBQU8sRUFBUCxDQUFqRDtBQUNBa0QsaUJBQU1xSixFQUFFLENBQUYsRUFBS3BKLE1BQVg7QUFDQThJLG1CQUFRLElBQUl0QixLQUFKLENBQVUsSUFBVixFQUFnQnhJLENBQWhCLEVBQW1CckQsS0FBbkIsRUFBMEJrTixTQUFTaEIsTUFBVCxFQUFpQkMsSUFBakIsRUFBdUJDLE1BQXZCLENBQTFCLEVBQTBEYyxTQUFTaEIsU0FBUzlILEdBQWxCLEVBQXVCK0gsSUFBdkIsRUFBNkJDLFNBQVNoSSxHQUFULEdBQWUsQ0FBNUMsQ0FBMUQsQ0FBUjtBQUNBOEgscUJBQVU5SCxHQUFWO0FBQ0E7QUFDRDtBQUNGO0FBQ0QsV0FBSThILFdBQVdxQixVQUFmLEVBQTJCO0FBQ3pCLGNBQUtyQixNQUFMLEdBQWNBLFNBQVMsQ0FBdkI7QUFDRDtBQUNELGNBQU8sRUFBRWlCLFlBQUYsRUFBU2pCLGNBQVQsRUFBaUI5SCxRQUFqQixFQUFQO0FBQ0Q7OztpQ0FFWS9FLEMsRUFBRztBQUNkLFdBQUl0QyxJQUFJLEtBQUsrUCxTQUFMLENBQWV6TixFQUFFVyxLQUFqQixDQUFSO0FBQ0EsV0FBSSxpQkFBRWlFLE9BQUYsQ0FBVWxILENBQVYsQ0FBSixFQUFrQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNoQixpQ0FBY0EsQ0FBZCxtSUFBaUI7QUFBQSxpQkFBUnNDLEVBQVE7O0FBQ2Ysa0JBQUt3TyxXQUFMLENBQWlCeE8sRUFBakI7QUFDRDtBQUhlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJakIsUUFKRCxNQUtLO0FBQ0gsY0FBS0MsTUFBTCxDQUFZL0MsSUFBWixDQUFpQjhDLENBQWpCO0FBQ0Q7QUFDRjs7OzRCQUVPO0FBQUEsbUJBQ3VCLEtBQUt5TyxJQUFMLEVBRHZCO0FBQUEsV0FDQVgsS0FEQSxTQUNBQSxLQURBO0FBQUEsV0FDT2pCLE1BRFAsU0FDT0EsTUFEUDtBQUFBLFdBQ2U5SCxHQURmLFNBQ2VBLEdBRGY7O0FBR04sY0FBTytJLFNBQVNBLE1BQU1uQixLQUFOLEtBQWdCLFNBQWhDLEVBQTJDO0FBQ3pDLGFBQUkzTSxJQUFJLEtBQUt5TyxJQUFMLEVBQVI7QUFDQVgsaUJBQVE5TixFQUFFOE4sS0FBVjtBQUNBakIsa0JBQVM3TSxFQUFFNk0sTUFBWDtBQUNBOUgsZUFBTS9FLEVBQUUrRSxHQUFSO0FBQ0EsY0FBSzhILE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtFLE1BQUwsSUFBZWhJLE1BQU0sQ0FBckI7QUFDRDs7QUFFRCxXQUFJK0ksS0FBSixFQUFXO0FBQ1QsYUFBSUEsTUFBTTFFLElBQU4sS0FBZSxPQUFuQixFQUE0QjtBQUMxQjBFLG1CQUFRLEtBQUtZLFdBQUwsQ0FBaUJaLEtBQWpCLEVBQXdCakIsTUFBeEIsRUFBZ0M5SCxHQUFoQyxDQUFSO0FBQ0QsVUFGRCxNQUlLLElBQUkrSSxNQUFNMUUsSUFBTixLQUFlLFNBQW5CLEVBQThCO0FBQ2pDMEUsbUJBQVEsS0FBS2EsYUFBTCxDQUFtQmIsS0FBbkIsRUFBMEJqQixNQUExQixFQUFrQzlILEdBQWxDLENBQVI7QUFDRCxVQUZJLE1BSUE7QUFDSCxnQkFBS3lKLFdBQUwsQ0FBaUJWLEtBQWpCO0FBQ0EsZ0JBQUtqQixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxnQkFBS0UsTUFBTCxJQUFlaEksTUFBTSxDQUFyQjtBQUNEOztBQUVELGFBQUkrSSxTQUFTQSxNQUFNWixFQUFOLENBQVMsS0FBVCxDQUFiLEVBQThCO0FBQzVCLGdCQUFLSixJQUFMO0FBQ0EsZ0JBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0Q7QUFDRjs7QUFFRCxjQUFPZSxLQUFQO0FBQ0Q7Ozt5QkFFSXJPLEksRUFBTStOLEksRUFBTTtBQUNmLFdBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1RBLGdCQUFPL04sSUFBUDtBQUNBQSxnQkFBTyxFQUFQO0FBQ0Q7QUFDRCxZQUFLL0MsS0FBTCxDQUFXK0MsSUFBWCxFQUFpQitOLElBQWpCO0FBQ0EsY0FBTyxLQUFLRSxXQUFMLENBQWlCLEtBQUtiLE1BQXRCLENBQVAsRUFBc0M7QUFDcEMsY0FBSytCLElBQUw7QUFDRDtBQUNELGNBQU8sSUFBUDtBQUNEOzs7NEJBRU87QUFDTnpPLGVBQVEwTyxJQUFSLENBQWEsWUFBYjtBQUNBMU8sZUFBUUMsR0FBUixDQUFZLEtBQUtILE1BQWpCO0FBQ0FFLGVBQVFDLEdBQVIsQ0FBWSxFQUFaO0FBQ0Q7Ozs7R0F0SWdDdUIsSUFBSTJMLFVBQUosRUFBZ0J3QixJQUFoQixxRDs7bUJBQWR2QixLOzs7Ozs7Ozs7Ozs7OztBQzdFckI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O21CQUVlN0wsTUFBTTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwyQkFFQTtBQUNqQixhQUFJLENBQUMsS0FBS3FOLFlBQVYsRUFBd0I7QUFDdEIsZ0JBQUtBLFlBQUwsR0FBb0JoUyxFQUFFdUUsTUFBRixDQUFTLEVBQVQsbUtBQXBCO0FBVUQ7QUFDRCxnQkFBTyxLQUFLeU4sWUFBWjtBQUNEO0FBaEJrQjs7QUFBQTtBQUFBLEtBQXVDQyxVQUF2QztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7bUJDVEE7QUFDYkMsV0FBUSxXQURLO0FBRWJDLGdCQUFhLGVBRkE7QUFHYkMsaUJBQWMsWUFIRDtBQUliQyxjQUFXO0FBSkUsRTs7Ozs7Ozs7Ozs7bUJDQUE7QUFDYkMsUUFBSyxXQURRO0FBRWJDLFVBQU8sSUFGTTtBQUdiQyxVQUFPO0FBSE0sRTs7Ozs7Ozs7Ozs7bUJDQUE7QUFDYkMsWUFBUztBQURJLEU7Ozs7Ozs7Ozs7O21CQ0FBO0FBQ2JDLGVBQVksS0FEQztBQUViQyxnQkFBYSxLQUZBOztBQUliQyxpQkFBYyxLQUpEO0FBS2JDLGtCQUFlLEtBTEY7O0FBT2JDLGVBQVksS0FQQztBQVFiQyxnQkFBYTtBQVJBLEU7Ozs7Ozs7Ozs7O21CQ0FBO0FBQ2JDLFFBQUssdUJBRFE7O0FBR2JDLE9BQUksc0JBSFM7QUFJYkMsYUFBVSx3QkFKRzs7QUFNYkMsU0FBTSxnQkFOTztBQU9iQyxlQUFZO0FBUEMsRTs7Ozs7Ozs7Ozs7bUJDQUE7QUFDYkMsV0FBUSxPQURLOztBQUdiQyxTQUFNLGtCQUhPO0FBSWJDLFVBQU8sZUFKTTtBQUtiQyxTQUFNO0FBTE8sRTs7Ozs7Ozs7Ozs7bUJDQUE7QUFDYjdLLFFBQUssK0JBRFE7QUFFYjhLLFdBQVEsMkNBRks7O0FBSWJDLFdBQVEsZ0JBSks7QUFLYkMsU0FBTTtBQUxPLEU7Ozs7Ozs7Ozs7O21CQ0FBO0FBQ2JDLFlBQVMsY0FESTs7QUFHYkMsVUFBTyx1QkFITTs7QUFLYkMsYUFBVTtBQUxHLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQ0NBblAsTUFBTTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxtQ0FFTm9NLEtBRk0sRUFFQ2pCLE1BRkQsRUFFUzlILEdBRlQsRUFFYztBQUMvQixhQUFJckgsSUFBSSxFQUFSO0FBQ0EsY0FBSytQLFNBQUwsQ0FBZUssTUFBTW5OLEtBQXJCLElBQThCakQsQ0FBOUI7QUFDQSxjQUFLbVAsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0UsTUFBTCxJQUFlaEksTUFBTSxDQUFyQjtBQUNBLGdCQUFPLElBQVAsRUFBYTtBQUNYLGVBQUkxRSxJQUFJLEtBQUtvTyxJQUFMLEVBQVI7QUFDQVgsbUJBQVF6TixFQUFFeU4sS0FBVjtBQUNBLGVBQUlBLEtBQUosRUFBVztBQUNULGtCQUFLakIsTUFBTCxHQUFjeE0sRUFBRXdNLE1BQWhCO0FBQ0Esa0JBQUtFLE1BQUwsSUFBZTFNLEVBQUUwRSxHQUFGLEdBQVEsQ0FBdkI7QUFDRDtBQUNELGVBQUksQ0FBQytJLEtBQUQsSUFBVUEsTUFBTVosRUFBTixDQUFTLEtBQVQsQ0FBZCxFQUErQjtBQUM3QjtBQUNEO0FBQ0QsZUFBSVksS0FBSixFQUFXO0FBQ1RwUSxlQUFFUixJQUFGLENBQU80USxLQUFQO0FBQ0Q7QUFDRjtBQUNELGdCQUFPQSxLQUFQO0FBQ0Q7QUF0QmtCOztBQUFBO0FBQUEsS0FBdUNrQixVQUF2QztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7QUNEZjs7QUFDQTs7Ozs7Ozs7bUJBRWV0TixNQUFNO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFDQUVKb00sS0FGSSxFQUVHakIsTUFGSCxFQUVXOUgsR0FGWCxFQUVnQjtBQUNqQyxjQUFLOEgsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0UsTUFBTCxJQUFlaEksTUFBTSxDQUFyQjtBQUNBLGFBQUluRixLQUFLa08sTUFBTW5OLEtBQU4sSUFBZSxZQUFLbVEsT0FBTCxDQUFhaEQsTUFBTW5OLEtBQW5CLE1BQThCLEVBQTlCLEdBQW1DLE1BQW5DLEdBQTRDLEVBQTNELENBQVQ7QUFDQSxhQUFJb1EsS0FBSyxZQUFLbFAsSUFBTCxDQUFVVyxTQUFWLEVBQXFCNUMsRUFBckIsQ0FBVDtBQUNBLGFBQUk7QUFDRixxQkFBR29SLFFBQUgsQ0FBWUQsRUFBWjtBQUNELFVBRkQsQ0FHQSxPQUFPbEcsQ0FBUCxFQUFVO0FBQ1IsZUFBSTtBQUNGa0csa0JBQUssWUFBS2xQLElBQUwsQ0FBVSxZQUFLZSxJQUFmLEVBQXFCaEQsRUFBckIsQ0FBTDtBQUNBLHVCQUFHb1IsUUFBSCxDQUFZRCxFQUFaO0FBQ0QsWUFIRCxDQUlBLE9BQU9sRyxDQUFQLEVBQVU7QUFDUmtHLGtCQUFLLEVBQUw7QUFDRDtBQUNGO0FBQ0QsYUFBSUEsT0FBTyxFQUFYLEVBQWU7QUFDYixlQUFJRSxNQUFNLFVBQUdDLFlBQUgsQ0FBZ0JILEVBQWhCLEVBQW9CLE1BQXBCLENBQVY7QUFDQSxlQUFJSSxLQUFLLGtCQUFUO0FBQ0FBLGNBQUdqUixHQUFILENBQU82USxFQUFQLEVBQVdFLEdBQVg7QUFDQSxlQUFJLENBQUNFLEdBQUc1USxNQUFSLEVBQWdCO0FBQ2R4RCxlQUFFdUUsTUFBRixDQUFTLEtBQUttTSxTQUFkLEVBQXlCMEQsR0FBRzFELFNBQTVCO0FBQ0Esa0JBQUt4TixNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZbVIsTUFBWixDQUFtQkQsR0FBR2xSLE1BQXRCLENBQWQ7QUFDRDtBQUNGO0FBQ0QsZ0JBQU82TixLQUFQO0FBQ0Q7QUE3QmtCOztBQUFBO0FBQUEsS0FBeUNrQixVQUF6QztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7O0FDSGY7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNcUMsSTtBQUVKLGlCQUFhQyxNQUFiLEVBQXFCeEQsS0FBckIsRUFBNEI5QyxJQUE1QixFQUFrQztBQUFBOztBQUNoQyxVQUFLc0csTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS3hELEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUt5RCxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLFVBQUt4RyxJQUFMLEdBQVlBLFFBQVEsRUFBcEI7QUFDRDs7OztnQ0FFV25MLEksRUFBTTtBQUFFLGNBQU8sS0FBS2lPLEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVdqTyxJQUFYLENBQWIsR0FBZ0MsSUFBdkM7QUFBNkM7Ozt3QkFZN0RnTCxDLEVBQUc7QUFBRSxjQUFPLEtBQUtpRCxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXWixFQUFYLENBQWNyQyxDQUFkLENBQWIsR0FBZ0MsS0FBdkM7QUFBOEM7OztnQ0FFM0M7QUFBRSxjQUFPLEtBQUtpRCxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXM0ksUUFBWCxFQUFiLEdBQXFDLEVBQTVDO0FBQWdEOzs7eUJBWmpEO0FBQUUsY0FBTyxLQUFLc00sVUFBTCxDQUFnQixPQUFoQixDQUFQO0FBQWlDOzs7eUJBRXBDO0FBQUUsY0FBTyxLQUFLQSxVQUFMLENBQWdCLE1BQWhCLENBQVA7QUFBZ0M7Ozt5QkFFakM7QUFBRSxjQUFPLEtBQUtBLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBUDtBQUFpQzs7O3lCQUVyQztBQUFFLGNBQU8sS0FBS0EsVUFBTCxDQUFnQixLQUFoQixDQUFQO0FBQStCOzs7eUJBRTlCO0FBQUUsY0FBTyxLQUFLQSxVQUFMLENBQWdCLFFBQWhCLENBQVA7QUFBa0M7Ozs7OztLQVM5Q25FLFU7Ozs7S0FFZW9FLE07OztBQW9CbkIscUJBQWU7QUFBQTs7QUFBQTs7QUFFYixXQUFLaFYsS0FBTDtBQUZhO0FBR2Q7Ozs7MkJBRU11RCxNLEVBQVE7QUFDYixZQUFLTSxNQUFMLEdBQWMsQ0FBZDtBQUNBLFlBQUtzTSxNQUFMLEdBQWMsQ0FBZDtBQUNBLFlBQUt2TSxLQUFMLEdBQWEsRUFBYjtBQUNBLFlBQUtxUixNQUFMLEdBQWMsbUJBQWQ7QUFDQSxZQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsWUFBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFlBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxZQUFLN1IsTUFBTCxHQUFjQSxVQUFVLEVBQXhCO0FBQ0Q7OztpQ0FFWTRNLE0sRUFBUTtBQUFFLGNBQU9BLFVBQVUsQ0FBVixJQUFlQSxTQUFTLEtBQUs3SCxNQUFwQztBQUE0Qzs7OzhCQUV6RDZILE0sRUFBUTtBQUFFLGNBQU8sS0FBS2EsV0FBTCxDQUFpQmIsTUFBakIsSUFBMkIsS0FBSzVNLE1BQUwsQ0FBWTRNLE1BQVosQ0FBM0IsR0FBaUQsSUFBeEQ7QUFBOEQ7OzswQkFRNUVoQyxDLEVBQUc7QUFBRSxjQUFPLEtBQUtxQyxFQUFMLENBQVFyQyxDQUFSLEtBQWMsQ0FBQyxLQUFLa0gsR0FBM0IsRUFBZ0M7QUFBRSxjQUFLbkQsSUFBTDtBQUFhO0FBQUU7Ozt3QkFFeEQvRCxDLEVBQUc7QUFBRSxjQUFPLEtBQUtpRCxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXWixFQUFYLENBQWNyQyxDQUFkLENBQWIsR0FBZ0MsS0FBdkM7QUFBOEM7Ozs0QkFFL0NBLEMsRUFBZ0I7QUFBQSxXQUFiK0QsSUFBYSx1RUFBTixJQUFNOztBQUN0QixXQUFJUixJQUFJLEtBQUtOLEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVdaLEVBQVgsQ0FBY3JDLENBQWQsQ0FBYixHQUFnQyxLQUF4QztBQUNBLFdBQUl1RCxDQUFKLEVBQU87QUFDTCxhQUFJUSxJQUFKLEVBQVU7QUFBRSxnQkFBS0EsSUFBTDtBQUFhO0FBQzFCLFFBRkQsTUFHSztBQUFFLDZCQUFNLElBQU4sRUFBWSxLQUFLZCxLQUFqQixFQUF3QmpELENBQXhCLEVBQTJCLFVBQTNCO0FBQXdDO0FBQy9DLGNBQU91RCxDQUFQO0FBQ0Q7OzsyQkFFTXZCLE0sRUFBUW1GLE8sRUFBUztBQUN0QixXQUFJLENBQUMsaUJBQUVyTixRQUFGLENBQVdrSSxNQUFYLENBQUwsRUFBeUI7QUFDdkJtRixtQkFBVW5GLE1BQVY7QUFDQUEsa0JBQVMsS0FBS0EsTUFBZDtBQUNEO0FBQ0QsV0FBSTVNLFNBQVMsRUFBYjtBQUNBLFdBQUlnRyxJQUFJLENBQVI7QUFDQSxjQUFPLEtBQUt5SCxXQUFMLENBQWlCYixNQUFqQixLQUE0QjVHLElBQUkrTCxRQUFRaE4sTUFBL0MsRUFBdUQ7QUFDckQsYUFBSThJLFFBQVEsS0FBSzdOLE1BQUwsQ0FBWTRNLFFBQVosQ0FBWjtBQUNBLGFBQUksQ0FBQ2lCLE1BQU1aLEVBQU4sQ0FBUzhFLFFBQVEvTCxHQUFSLENBQVQsQ0FBTCxFQUE2QjtBQUFFLGtCQUFPLElBQVA7QUFBYTtBQUM1Q2hHLGdCQUFPL0MsSUFBUCxDQUFZNFEsS0FBWjtBQUNEO0FBQ0QsY0FBTzdOLE9BQU8rRSxNQUFQLEdBQWdCL0UsTUFBaEIsR0FBeUIsSUFBaEM7QUFDRDs7OzRCQUVZO0FBQUEsV0FBUHZDLENBQU8sdUVBQUgsQ0FBRztBQUFFLGNBQU8sS0FBS3VVLFFBQUwsQ0FBYyxLQUFLcEYsTUFBTCxHQUFjblAsQ0FBNUIsQ0FBUDtBQUF1Qzs7OzRCQUV6QztBQUFBLFdBQVBBLENBQU8sdUVBQUgsQ0FBRzs7QUFDWCxZQUFLbVAsTUFBTCxJQUFlblAsQ0FBZjtBQUNBLGNBQU8sSUFBUDtBQUNEOzs7Z0NBRVdrQyxFLEVBQUlvUyxPLEVBQVN0RixHLEVBQUt3RixRLEVBQVVDLEksRUFBTTtBQUM1QyxXQUFJN1IsUUFBUSxFQUFaO0FBQ0EsV0FBSTZSLElBQUosRUFBVTtBQUFFLGNBQUtBLElBQUwsQ0FBVUEsSUFBVjtBQUFpQjtBQUM3QixjQUFPLENBQUMsS0FBS0osR0FBTixLQUFjLENBQUNyRixHQUFELElBQVEsQ0FBQyxLQUFLUSxFQUFMLENBQVFSLEdBQVIsQ0FBdkIsTUFBeUMsQ0FBQ3NGLE9BQUQsSUFBWSxLQUFLNUUsS0FBTCxDQUFXNEUsT0FBWCxDQUFyRCxDQUFQLEVBQWtGO0FBQ2hGMVIsZUFBTXBELElBQU4sQ0FBVzBDLEdBQUd1RSxJQUFILENBQVEsSUFBUixDQUFYO0FBQ0EsYUFBSWdPLElBQUosRUFBVTtBQUFFLGdCQUFLQSxJQUFMLENBQVVBLElBQVY7QUFBaUI7QUFDOUI7QUFDRCxXQUFJekYsR0FBSixFQUFTO0FBQUUsY0FBSzBGLE1BQUwsQ0FBWTFGLEdBQVosRUFBaUJ3RixRQUFqQjtBQUE0QjtBQUN2QyxjQUFPNVIsS0FBUDtBQUNEOzs7b0NBRWUrUixJLEVBQU07QUFDcEIsV0FBSXZFLFFBQVEsS0FBS0EsS0FBakI7QUFDQSxXQUFJOUMsT0FBTyxFQUFYO0FBQ0EsV0FBSXFILElBQUosRUFBVTtBQUNSLGNBQUt6RCxJQUFMO0FBQ0E1RCxnQkFBTyxFQUFFcUgsVUFBRixFQUFRQyxPQUFPLEtBQUtDLElBQUwsRUFBZixFQUFQO0FBQ0Q7QUFDRCxXQUFJQyxPQUFPLElBQUluQixJQUFKLENBQVMsSUFBVCxFQUFldkQsS0FBZixFQUFzQjlDLElBQXRCLENBQVg7QUFDQSxXQUFJLENBQUNxSCxJQUFMLEVBQVc7QUFBRSxjQUFLekQsSUFBTDtBQUFhO0FBQzFCLGNBQU80RCxJQUFQO0FBQ0Q7Ozt5QkFFSXZTLE0sRUFBUTtBQUNYLFlBQUt2RCxLQUFMLENBQVd1RCxNQUFYO0FBQ0EsWUFBSzBSLE1BQUwsQ0FBWXRTLEtBQVosQ0FBa0IsU0FBbEI7QUFDQSxXQUFJaUIsUUFBUSxLQUFLbVMsVUFBTCxFQUFaO0FBQ0EsWUFBS2QsTUFBTCxDQUFZakYsR0FBWjtBQUNBLFlBQUtwTSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFPQSxLQUFQO0FBQ0Q7Ozs0QkFFTztBQUNOSCxlQUFRME8sSUFBUixDQUFhLGFBQWI7QUFDQTFPLGVBQVFDLEdBQVIsQ0FBWSxLQUFLRSxLQUFqQjtBQUNBSCxlQUFRQyxHQUFSLENBQVksRUFBWjtBQUNEOzs7eUJBN0VVO0FBQUUsY0FBTyxLQUFLeU0sTUFBTCxJQUFlLEtBQUs3SCxNQUEzQjtBQUFtQzs7O3lCQUVsQztBQUFFLGNBQU8sS0FBSy9FLE1BQUwsQ0FBWStFLE1BQW5CO0FBQTJCOzs7eUJBRTlCO0FBQUUsY0FBTyxLQUFLaU4sUUFBTCxDQUFjLEtBQUtwRixNQUFuQixDQUFQO0FBQW1DOzs7O0dBNUNoQmxMLElBQUkyTCxVQUFKLEVBQWdCd0IsSUFBaEIsMlE7O21CQUFmNEMsTTs7Ozs7Ozs7Ozs7Ozs7O0FDdERyQjs7Ozs7Ozs7QUFFTyxLQUFJZ0IsaUNBQUo7QUFDQSxLQUFJQyxtQ0FBSjtBQUNBLEtBQUlDLHlDQUFKOztBQUVQLFNBSFdELE1BR1g7QUFFRSxxQkFBZTtBQUFBOztBQUNiLFVBQUtqVyxLQUFMO0FBQ0Q7O0FBSkg7QUFBQTtBQUFBLDZCQU1XO0FBQ1AsWUFBS21XLE9BQUwsR0FBZSxJQUFmO0FBQ0Q7QUFSSDtBQUFBO0FBQUEsMkJBVVN6SixJQVZULEVBVWU7QUFBRSxZQUFLeUosT0FBTCxHQUFlLElBQUlILEtBQUosQ0FBVSxJQUFWLEVBQWdCLEtBQUtHLE9BQXJCLEVBQThCekosSUFBOUIsQ0FBZjtBQUFvRDtBQVZyRTtBQUFBO0FBQUEsMkJBWVM7QUFBRSxZQUFLeUosT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYXRHLE1BQTVCO0FBQW9DO0FBWi9DO0FBQUE7QUFBQSx5QkFjT2lHLElBZFAsRUFjYWpHLE1BZGIsRUFjcUJ1RyxTQWRyQixFQWNnQztBQUFFLGNBQU8sS0FBS0QsT0FBTCxDQUFhaFcsR0FBYixDQUFpQjJWLElBQWpCLEVBQXVCakcsTUFBdkIsRUFBK0J1RyxTQUEvQixDQUFQO0FBQWtEO0FBZHBGO0FBQUE7QUFBQSw0QkFnQlVqVCxJQWhCVixFQWdCZ0JpVCxTQWhCaEIsRUFnQjJCO0FBQ3ZCLFdBQUlwVixJQUFJLEtBQUttVixPQUFiO0FBQ0EsY0FBT25WLENBQVAsRUFBVTtBQUNSLGFBQUl1SCxJQUFJdkgsRUFBRXFWLE1BQUYsQ0FBU2xULElBQVQsRUFBZWlULFNBQWYsQ0FBUjtBQUNBLGFBQUk3TixDQUFKLEVBQU87QUFDTCxrQkFBT0EsQ0FBUDtBQUNEO0FBQ0R2SCxhQUFJQSxFQUFFNk8sTUFBTjtBQUNEO0FBQ0QsY0FBTyxJQUFQO0FBQ0Q7QUExQkg7QUFBQTtBQUFBLCtCQTRCYTFNLElBNUJiLEVBNEJtQjtBQUNmLGNBQU8sS0FBS2tULE1BQUwsQ0FBWWxULElBQVosRUFBa0IsSUFBbEIsQ0FBUDtBQUNEO0FBOUJIO0FBQUE7QUFBQSxrQ0FnQ2dCQSxJQWhDaEIsRUFnQ3NCO0FBQ2xCLGNBQU8sS0FBS2tULE1BQUwsQ0FBWWxULElBQVosRUFBa0IsT0FBbEIsQ0FBUDtBQUNEO0FBbENIO0FBQUE7QUFBQSxnQ0FvQ2NBLElBcENkLEVBb0NvQjtBQUNoQixjQUFPLEtBQUtrVCxNQUFMLENBQVlsVCxJQUFaLEVBQWtCLEtBQWxCLENBQVA7QUFDRDtBQXRDSDs7QUFBQTtBQUFBOztBQTJDQSxTQTdDVytTLFNBNkNYO0FBRUUsc0JBQWFJLEtBQWIsRUFBb0J6RyxNQUFwQixFQUE0QmlHLElBQTVCLEVBQWtDTSxTQUFsQyxFQUE2QztBQUFBOztBQUMzQyxVQUFLRSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLekcsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS3VHLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsVUFBS04sSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7O0FBUEg7QUFBQTtBQUFBLHlCQVNjO0FBQUUsY0FBTyxLQUFLQSxJQUFMLENBQVV4SCxJQUFqQjtBQUF1QjtBQVR2QztBQUFBO0FBQUEseUJBV2M7QUFBRSxjQUFPLEtBQUt3SCxJQUFMLENBQVU3UixLQUFqQjtBQUF3QjtBQVh4QztBQUFBO0FBQUEseUJBYWM7QUFBRSxjQUFPLEtBQUs2UixJQUFMLENBQVVwSixJQUFqQjtBQUF1QjtBQWJ2QztBQUFBO0FBQUEseUJBZWdCO0FBQUUsY0FBTyxLQUFLMEosU0FBTCxLQUFtQixLQUExQjtBQUFpQztBQWZuRDtBQUFBO0FBQUEseUJBaUJrQjtBQUFFLGNBQU8sS0FBS0EsU0FBTCxLQUFtQixPQUExQjtBQUFtQztBQWpCdkQ7QUFBQTtBQUFBLHlCQW1CZTtBQUFFLGNBQU8sS0FBS0EsU0FBTCxLQUFtQixJQUExQjtBQUFnQztBQW5CakQ7QUFBQTtBQUFBLHlCQXFCa0I7QUFBRSxjQUFPLEtBQUtFLEtBQUwsQ0FBV0MsUUFBbEI7QUFBNEI7QUFyQmhEO0FBQUE7QUFBQSx5QkF1Qm1CO0FBQUUsY0FBTyxLQUFLRCxLQUFMLENBQVdFLFNBQWxCO0FBQTZCO0FBdkJsRDs7QUFBQTtBQUFBOztBQTRCQSxTQTNFV1IsS0EyRVg7QUFFRSxrQkFBYWYsTUFBYixFQUFxQnBGLE1BQXJCLEVBQTZCbkQsSUFBN0IsRUFBbUM7QUFBQTs7QUFDakMsVUFBS3VJLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtwRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLbkQsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBSytKLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7O0FBUEg7QUFBQTtBQUFBLHlCQWVPWCxJQWZQLEVBZWFqRyxNQWZiLEVBZXFCdUcsU0FmckIsRUFlZ0M7QUFDNUIsV0FBSTdOLElBQUksSUFBSTJOLFNBQUosQ0FBYyxJQUFkLEVBQW9CckcsTUFBcEIsRUFBNEJpRyxJQUE1QixFQUFrQ00sU0FBbEMsQ0FBUjtBQUNBLFlBQUtLLEtBQUwsQ0FBV2pXLElBQVgsQ0FBZ0IrSCxDQUFoQjtBQUNBdU4sWUFBS1ksT0FBTCxHQUFlLEtBQUtGLFNBQXBCO0FBQ0EsY0FBT2pPLENBQVA7QUFDRDtBQXBCSDtBQUFBO0FBQUEsNEJBc0JVcEYsSUF0QlYsRUFzQmdCaVQsU0F0QmhCLEVBc0IyQjtBQUFFLGNBQU8saUJBQUVPLElBQUYsQ0FBTyxLQUFLRixLQUFaLEVBQW1CTCxZQUFZLEVBQUVqVCxVQUFGLEVBQVFpVCxvQkFBUixFQUFaLEdBQWtDLEVBQUVqVCxVQUFGLEVBQXJELENBQVA7QUFBdUU7QUF0QnBHO0FBQUE7QUFBQSwrQkF3QmFBLElBeEJiLEVBd0JtQjtBQUNmLGNBQU8sS0FBS2tULE1BQUwsQ0FBWWxULElBQVosRUFBa0IsSUFBbEIsQ0FBUDtBQUNEO0FBMUJIO0FBQUE7QUFBQSxnQ0E0QmNBLElBNUJkLEVBNEJvQjtBQUNoQixjQUFPLEtBQUtrVCxNQUFMLENBQVlsVCxJQUFaLEVBQWtCLEtBQWxCLENBQVA7QUFDRDtBQTlCSDtBQUFBO0FBQUEsa0NBZ0NnQkEsSUFoQ2hCLEVBZ0NzQjtBQUNsQixjQUFPLEtBQUtrVCxNQUFMLENBQVlsVCxJQUFaLEVBQWtCLE9BQWxCLENBQVA7QUFDRDtBQWxDSDtBQUFBO0FBQUEseUJBU2M7QUFBRSxjQUFPLEtBQUswTSxNQUFMLEdBQWMsSUFBZCxHQUFxQixJQUE1QjtBQUFrQztBQVRsRDtBQUFBO0FBQUEseUJBV2tCO0FBQUUsY0FBTyxLQUFLQSxNQUFMLEtBQWdCLElBQXZCO0FBQTZCO0FBWGpEO0FBQUE7QUFBQSx5QkFhbUI7QUFBRSxjQUFPLEtBQUtBLE1BQUwsS0FBZ0IsSUFBdkI7QUFBNkI7QUFibEQ7O0FBQUE7QUFBQSxLOzs7Ozs7Ozs7Ozs7OztBQzdFQTs7Ozs7Ozs7bUJBRWU3SyxNQUFNO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFDQUVKO0FBQ2IsYUFBSThRLE9BQU8saUJBQVMsSUFBVCxFQUFlLEtBQUsxRSxLQUFwQixDQUFYO0FBQ0EsY0FBS3NFLE1BQUwsQ0FBWSxLQUFaO0FBQ0FJLGNBQUt4SCxJQUFMLENBQVV1SCxJQUFWLEdBQWlCLEtBQUtBLElBQUwsRUFBakI7QUFDQSxnQkFBT0MsSUFBUDtBQUNEO0FBUGtCOztBQUFBO0FBQUEsS0FBd0N4RCxVQUF4QztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7Ozs7Ozs7bUJBRWV0TixNQUFNO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDZCQUVaZ0wsR0FGWSxFQUU2QjtBQUFBLGFBQXBDd0YsUUFBb0MsdUVBQXpCLElBQXlCO0FBQUEsYUFBbkJvQixVQUFtQix1RUFBTixJQUFNOztBQUM5QyxhQUFJQSxVQUFKLEVBQWdCO0FBQ2QsZ0JBQUszQixNQUFMLENBQVl0UyxLQUFaLENBQWtCaVUsVUFBbEI7QUFDRDtBQUNELGFBQUloVCxRQUFRLEtBQUtpVCxVQUFMLENBQWdCLEtBQUtDLFNBQXJCLEVBQWdDLElBQWhDLEVBQXNDOUcsR0FBdEMsRUFBMkN3RixRQUEzQyxFQUFxRCxLQUFyRCxDQUFaO0FBQ0EsYUFBSW9CLFVBQUosRUFBZ0I7QUFDZCxnQkFBSzNCLE1BQUwsQ0FBWWpGLEdBQVo7QUFDRDtBQUNELGdCQUFPcE0sS0FBUDtBQUNEO0FBWGtCO0FBQUE7QUFBQSxvQ0FhTDtBQUFFLGdCQUFPLEtBQUttVCxLQUFMLEVBQVA7QUFBcUI7QUFibEI7QUFBQTtBQUFBLDBDQWVDO0FBQ2xCLGFBQUlqQixPQUFPLElBQUluQixJQUFKLENBQVMsSUFBVCxFQUFlLEtBQUt2RCxLQUFwQixDQUFYO0FBQ0EsY0FBS2MsSUFBTDtBQUNBLGdCQUFPNEQsSUFBUDtBQUNEO0FBbkJrQjtBQUFBO0FBQUEsbUNBcUJOO0FBQ1gsYUFBSSxLQUFLcEYsS0FBTCxDQUFXLENBQUMsS0FBRCxFQUFRLElBQVIsQ0FBWCxDQUFKLEVBQStCO0FBQUUsa0JBQU8sS0FBS3NHLGFBQUwsRUFBUDtBQUE2QixVQUE5RCxDQUErRDtBQUEvRCxjQUNLLElBQUksS0FBS3RHLEtBQUwsQ0FBVyxDQUFDLHdCQUFELEVBQTJCLGtCQUEzQixDQUFYLENBQUosRUFBZ0U7QUFBRSxvQkFBTyxLQUFLdUcsZ0JBQUwsRUFBUDtBQUFnQyxZQUFsRyxDQUFtRztBQUFuRyxnQkFDQSxJQUFJLEtBQUt6RyxFQUFMLENBQVEsSUFBUixDQUFKLEVBQW1CO0FBQUUsc0JBQU8sS0FBSzBHLFlBQUwsRUFBUDtBQUE0QixjQUFqRCxDQUFrRDtBQUFsRCxrQkFDQSxJQUFJLEtBQUsxRyxFQUFMLENBQVEsS0FBUixDQUFKLEVBQW9CO0FBQUUsd0JBQU8sS0FBSzJHLGFBQUwsRUFBUDtBQUE2QixnQkFBbkQsQ0FBb0Q7QUFBcEQsb0JBQ0EsSUFBSSxLQUFLM0csRUFBTCxDQUFRLE9BQVIsQ0FBSixFQUFzQjtBQUFFLDBCQUFPLEtBQUs0RyxlQUFMLEVBQVA7QUFBK0Isa0JBQXZELENBQXdEO0FBQXhELHNCQUNBLElBQUksS0FBSzVHLEVBQUwsQ0FBUSxRQUFSLENBQUosRUFBdUI7QUFBRSw0QkFBTyxLQUFLNkcsZ0JBQUwsRUFBUDtBQUFnQyxvQkFBekQsQ0FBMEQ7QUFBMUQsd0JBQ0EsSUFBSSxLQUFLN0csRUFBTCxDQUFRLENBQUMsT0FBRCxFQUFVLFVBQVYsQ0FBUixDQUFKLEVBQW9DO0FBQUUsOEJBQU8sS0FBSzhHLGdCQUFMLEVBQVA7QUFBZ0Msc0JBQXRFLENBQXVFO0FBQXZFLDBCQUNBLElBQUksS0FBSzlHLEVBQUwsQ0FBUSxPQUFSLENBQUosRUFBc0I7QUFBRSxnQ0FBTyxLQUFLK0csZUFBTCxFQUFQO0FBQStCLHdCQUF2RCxDQUF3RDtBQUF4RCw0QkFDQSxJQUFJLEtBQUsvRyxFQUFMLENBQVEsQ0FBQyxJQUFELEVBQU8sT0FBUCxDQUFSLENBQUosRUFBOEI7QUFBRSxrQ0FBTyxLQUFLZ0gsWUFBTCxFQUFQO0FBQTRCLDBCQUE1RCxDQUE2RDtBQUE3RCw4QkFDQTtBQUNILGlEQUFNLElBQU4sRUFBWSxLQUFLcEcsS0FBakIsRUFBd0IsY0FBeEI7QUFDQSxrQ0FBS2MsSUFBTDtBQUNEO0FBQ0QsZ0JBQU8sSUFBUDtBQUNEO0FBcENrQjs7QUFBQTtBQUFBLEtBQXVDSSxVQUF2QztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDREF0TixNQUFNO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHNDQUVTO0FBQUEsYUFBZHlTLEtBQWMsdUVBQU4sSUFBTTs7QUFDMUIsYUFBSSxLQUFLakgsRUFBTCxDQUFRLE9BQVIsQ0FBSixFQUFzQjtBQUNwQixrQkFBTyxLQUFLa0gsVUFBTCxFQUFQO0FBQ0QsVUFGRCxNQUdLO0FBQ0gsa0JBQU8sS0FBS0MsT0FBTCxDQUFhRixLQUFiLENBQVA7QUFDRDtBQUNGO0FBVGtCOztBQUFBO0FBQUEsS0FBeUNuRixVQUF6QztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7QUNEZjs7Ozs7Ozs7bUJBRWV0TixNQUFNO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDBDQUVDO0FBQ2xCLGFBQUk4USxPQUFPLElBQVg7QUFDQSxhQUFJeEMsS0FBSyxLQUFLbEMsS0FBZDtBQUNBLGNBQUtjLElBQUw7QUFDQSxhQUFJLEtBQUsxQixFQUFMLENBQVEsV0FBUixDQUFKLEVBQTBCO0FBQ3hCc0Ysa0JBQU8sS0FBSzhCLE9BQUwsQ0FBYXRFLEVBQWIsRUFBaUIsSUFBakIsQ0FBUDtBQUNBQSxjQUFHdUUsR0FBSCxHQUFTLElBQVQ7QUFDRCxVQUhELE1BSUs7QUFDSC9CLGtCQUFPLGlCQUFTLElBQVQsRUFBZSxLQUFLMUUsS0FBcEIsRUFBMkIsRUFBRWtDLE1BQUYsRUFBM0IsQ0FBUDtBQUNBLGdCQUFLcEIsSUFBTDtBQUNBNEQsZ0JBQUt4SCxJQUFMLENBQVV1SCxJQUFWLEdBQWlCLEtBQUtBLElBQUwsRUFBakI7QUFDRDtBQUNELGNBQUtaLE1BQUwsQ0FBWTlVLEdBQVosQ0FBZ0JtVCxFQUFoQixFQUFvQixJQUFwQixFQUEwQkEsR0FBR3VFLEdBQUgsR0FBUyxJQUFULEdBQWdCLEtBQTFDO0FBQ0EsZ0JBQU8vQixJQUFQO0FBQ0Q7QUFqQmtCOztBQUFBO0FBQUEsS0FBNkN4RCxVQUE3QztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7Ozs7Ozs7bUJBRWV0TixNQUFNO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDBDQUVDO0FBQ2xCLGFBQUlyQixJQUFJLEtBQVI7QUFDQSxhQUFJcU0sTUFBTSxxQkFBVjtBQUNBLGFBQUk4RixPQUFPLGlCQUFTLElBQVQsRUFBZSxLQUFLMUUsS0FBcEIsQ0FBWDtBQUNBMEUsY0FBS3hILElBQUwsQ0FBVTVMLElBQVYsR0FBaUIsRUFBakI7QUFDQSxjQUFLd1AsSUFBTDtBQUNBLGFBQUksS0FBSzFCLEVBQUwsQ0FBUSxZQUFSLENBQUosRUFBMkI7QUFDekI3TSxlQUFJLElBQUo7QUFDQXFNLGlCQUFNLGFBQU47QUFDQSxnQkFBS2tDLElBQUw7QUFDRDtBQUNELGFBQUksQ0FBQ3ZPLENBQUQsSUFBTSxDQUFDLEtBQUs2TSxFQUFMLENBQVEsYUFBUixDQUFYLEVBQW1DO0FBQ2pDc0YsZ0JBQUt4SCxJQUFMLENBQVU1TCxJQUFWLEdBQWlCLEtBQUtvVixLQUFMLENBQVc5SCxHQUFYLEVBQWdCLEtBQWhCLENBQWpCO0FBQ0Q7QUFDRCxhQUFJck0sQ0FBSixFQUFPO0FBQ0wsZ0JBQUsrUixNQUFMLENBQVksYUFBWjtBQUNEO0FBQ0QsZ0JBQU9JLElBQVA7QUFDRDtBQXBCa0I7O0FBQUE7QUFBQSxLQUE2Q3hELFVBQTdDO0FBQUEsRUFBTixDOzs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7OzttQkFFZXROLE1BQU07QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsb0NBRUw7QUFBRSxnQkFBTyxLQUFLNlIsVUFBTCxDQUFnQixLQUFLa0IsTUFBckIsRUFBNkIsQ0FBQyxJQUFELENBQTdCLEVBQXFDLEtBQXJDLEVBQTRDLElBQTVDLEVBQWtELE9BQWxELENBQVA7QUFBbUU7QUFGaEU7QUFBQTtBQUFBLHlDQUlBO0FBQ2pCLGFBQUkzRyxRQUFRLEtBQUtBLEtBQWpCO0FBQ0EsY0FBS2MsSUFBTDtBQUNBLGFBQUk4RixXQUFXLElBQWY7QUFDQSxhQUFJMUUsS0FBSyxLQUFLbEMsS0FBZDtBQUNBLGNBQUtjLElBQUw7QUFDQSxhQUFJLEtBQUsxQixFQUFMLENBQVEsR0FBUixDQUFKLEVBQWtCO0FBQ2hCLGdCQUFLMEIsSUFBTDtBQUNBOEYsc0JBQVcsS0FBS0MsVUFBTCxFQUFYO0FBQ0Q7QUFDRCxjQUFLaEQsTUFBTCxDQUFZOVUsR0FBWixDQUFnQm1ULEVBQWhCLEVBQW9CLElBQXBCLEVBQTBCLE9BQTFCO0FBQ0EsY0FBSzZCLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxhQUFJK0MsT0FBTyxLQUFLbkIsS0FBTCxDQUFXLEtBQVgsRUFBa0IsS0FBbEIsRUFBeUIsT0FBekIsQ0FBWDtBQUNBLGNBQUs1QixRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsY0FBS08sTUFBTCxDQUFZLEtBQVo7QUFDQSxnQkFBTyxpQkFBUyxJQUFULEVBQWV0RSxLQUFmLEVBQXNCLEVBQUVrQyxNQUFGLEVBQU0wRSxrQkFBTixFQUFnQkUsVUFBaEIsRUFBdEIsQ0FBUDtBQUNEO0FBcEJrQjs7QUFBQTtBQUFBLEtBQTRDNUYsVUFBNUM7QUFBQSxFQUFOLEM7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7Ozs7O21CQUVldE4sTUFBTTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxzQ0FFYztBQUFBLGFBQW5CbVQsVUFBbUIsdUVBQU4sSUFBTTs7QUFDL0IsYUFBSS9HLFFBQVEsS0FBS0EsS0FBakI7QUFDQSxjQUFLYyxJQUFMO0FBQ0EsYUFBSWtHLG1CQUFKO0FBQ0EsYUFBSSxLQUFLNUgsRUFBTCxDQUFRLFlBQVIsQ0FBSixFQUEyQjtBQUN6QixnQkFBSzBCLElBQUw7QUFDQWtHLHdCQUFhLEtBQUt2QyxJQUFMLEVBQWI7QUFDQSxnQkFBS0gsTUFBTCxDQUFZLGFBQVo7QUFDRCxVQUpELE1BS0s7QUFDSDBDLHdCQUFhLEtBQUt2QyxJQUFMLEVBQWI7QUFDRDtBQUNELGFBQUl3QyxZQUFZLEtBQUt0QixLQUFMLENBQVcsQ0FBQyxNQUFELEVBQVMsS0FBVCxDQUFYLEVBQTRCLEtBQTVCLEVBQW1DLElBQW5DLENBQWhCO0FBQ0EsYUFBSXVCLGFBQWEsS0FBSzlILEVBQUwsQ0FBUSxNQUFSLElBQWtCLEtBQUsrSCxjQUFMLENBQW9CLEtBQXBCLENBQWxCLEdBQStDLElBQWhFO0FBQ0EsYUFBSUosVUFBSixFQUFnQjtBQUFFLGdCQUFLekMsTUFBTCxDQUFZLEtBQVo7QUFBb0I7QUFDdEMsZ0JBQU8saUJBQVMsSUFBVCxFQUFldEUsS0FBZixFQUFzQixFQUFFeUUsTUFBTXVDLFVBQVIsRUFBb0JDLG9CQUFwQixFQUErQkMsc0JBQS9CLEVBQXRCLENBQVA7QUFDRDtBQWxCa0I7QUFBQTtBQUFBLHdDQW9CZ0I7QUFBQSxhQUFuQkgsVUFBbUIsdUVBQU4sSUFBTTs7QUFDakMsYUFBSS9HLFFBQVEsS0FBS0EsS0FBakI7QUFDQSxhQUFJMEUsT0FBTyxJQUFYO0FBQ0EsY0FBSzVELElBQUw7QUFDQSxhQUFJLEtBQUsxQixFQUFMLENBQVEsSUFBUixDQUFKLEVBQW1CO0FBQ2pCc0Ysa0JBQU8sS0FBS29CLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBUDtBQUNBcEIsZ0JBQUsxRSxLQUFMLEdBQWFBLEtBQWI7QUFDRCxVQUhELE1BSUs7QUFDSDBFLGtCQUFPLGlCQUFTLElBQVQsRUFBZTFFLEtBQWYsRUFBc0IsRUFBRWtILFlBQVksS0FBS3ZCLEtBQUwsQ0FBVyxLQUFYLEVBQWtCLEtBQWxCLEVBQXlCLE1BQXpCLENBQWQsRUFBdEIsQ0FBUDtBQUNEO0FBQ0QsYUFBSW9CLFVBQUosRUFBZ0I7QUFBRSxnQkFBS3pDLE1BQUwsQ0FBWSxLQUFaO0FBQW9CO0FBQ3RDLGdCQUFPSSxJQUFQO0FBQ0Q7QUFqQ2tCOztBQUFBO0FBQUEsS0FBZ0R4RCxVQUFoRDtBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7QUFDQTs7Ozs7Ozs7bUJBRWV0TixNQUFNO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVDQUVGO0FBQ2YsYUFBSThRLE9BQU8sSUFBWDtBQUNBLGNBQUs1RCxJQUFMO0FBQ0EsYUFBSSxDQUFDLEtBQUtILElBQUwsR0FBWXZCLEVBQVosQ0FBZSxrQkFBZixDQUFMLEVBQXlDO0FBQ3ZDLGVBQUlsTixJQUFJLGlCQUFVLEtBQUs4TixLQUFmLENBQVI7QUFDQTlOLGFBQUVXLEtBQUYsR0FBVSxHQUFWO0FBQ0FYLGFBQUUyTSxLQUFGLEdBQVUsUUFBVjtBQUNBNkYsa0JBQU8saUJBQVMsSUFBVCxFQUFleFMsQ0FBZixFQUFrQixFQUFFZ1EsSUFBSSxLQUFLbEMsS0FBWCxFQUFrQnlFLE1BQU0sSUFBeEIsRUFBbEIsQ0FBUDtBQUNBLGdCQUFLWixNQUFMLENBQVk5VSxHQUFaLENBQWdCLEtBQUtpUixLQUFyQixFQUE0QixJQUE1QixFQUFrQyxLQUFsQztBQUNELFVBTkQsTUFPSztBQUNIMEUsa0JBQU8sS0FBS21CLGdCQUFMLEVBQVA7QUFDRDtBQUNEbkIsY0FBSzBDLElBQUwsR0FBWSxJQUFaO0FBQ0EsZ0JBQU8xQyxJQUFQO0FBQ0Q7QUFqQmtCOztBQUFBO0FBQUEsS0FBMEN4RCxVQUExQztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7QUNIZjs7Ozs7Ozs7bUJBRWV0TixNQUFNO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVDQUVGO0FBQ2YsYUFBSW9NLFFBQVEsS0FBS0EsS0FBakI7QUFDQSxjQUFLYyxJQUFMOztBQUVBLGFBQUluSCxJQUFJLEtBQUtxRyxLQUFiO0FBQ0EsY0FBS3NFLE1BQUwsQ0FBWSxRQUFaO0FBQ0EsY0FBS0EsTUFBTCxDQUFZLFFBQVo7QUFDQSxhQUFJK0MsV0FBVyxLQUFLNUMsSUFBTCxFQUFmO0FBQ0EsY0FBS0gsTUFBTCxDQUFZLElBQVo7QUFDQSxhQUFJZ0QsV0FBVyxLQUFLN0MsSUFBTCxFQUFmO0FBQ0EsYUFBSThDLFlBQVksSUFBaEI7QUFDQSxhQUFJLEtBQUtuSSxFQUFMLENBQVEsTUFBUixDQUFKLEVBQXFCO0FBQ25CLGdCQUFLMEIsSUFBTDtBQUNBeUcsdUJBQVksS0FBSzlDLElBQUwsRUFBWjtBQUNEO0FBQ0QsYUFBSXFDLE9BQU8sS0FBS25CLEtBQUwsQ0FBVyxLQUFYLEVBQWtCLEtBQWxCLEVBQXlCLEtBQXpCLENBQVg7QUFDQSxjQUFLckIsTUFBTCxDQUFZLEtBQVo7QUFDQSxnQkFBTyxpQkFBUyxJQUFULEVBQWV0RSxLQUFmLEVBQXNCLEVBQUVyRyxJQUFGLEVBQUswTixrQkFBTCxFQUFlQyxrQkFBZixFQUF5QkMsb0JBQXpCLEVBQW9DVCxVQUFwQyxFQUF0QixDQUFQO0FBQ0Q7QUFwQmtCO0FBQUE7QUFBQSx5Q0FzQkE7QUFDakIsYUFBSTlHLFFBQVEsS0FBS0EsS0FBakI7QUFDQSxjQUFLYyxJQUFMO0FBQ0EsYUFBSWtHLG1CQUFKO0FBQ0EsYUFBSSxLQUFLNUgsRUFBTCxDQUFRLFlBQVIsQ0FBSixFQUEyQjtBQUN6QixnQkFBSzBCLElBQUw7QUFDQWtHLHdCQUFhLEtBQUt2QyxJQUFMLEVBQWI7QUFDQSxnQkFBS0gsTUFBTCxDQUFZLGFBQVo7QUFDRCxVQUpELE1BS0s7QUFDSDBDLHdCQUFhLEtBQUt2QyxJQUFMLEVBQWI7QUFDRDtBQUNELGFBQUlxQyxPQUFPLEtBQUtuQixLQUFMLENBQVcsS0FBWCxFQUFrQixLQUFsQixFQUF5QixPQUF6QixDQUFYO0FBQ0EsY0FBS3JCLE1BQUwsQ0FBWSxLQUFaO0FBQ0EsZ0JBQU8saUJBQVMsSUFBVCxFQUFldEUsS0FBZixFQUFzQixFQUFFeUUsTUFBTXVDLFVBQVIsRUFBb0JGLFVBQXBCLEVBQXRCLENBQVA7QUFDRDtBQXJDa0I7O0FBQUE7QUFBQSxLQUEyQzVGLFVBQTNDO0FBQUEsRUFBTixDOzs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7Ozs7OzttQkFFZXROLE1BQU07QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBRVpnTCxHQUZZLEVBRVB3RixRQUZPLEVBRUc7QUFBRSxnQkFBTyxLQUFLcUIsVUFBTCxDQUFnQixLQUFLaEIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUM3RixHQUFqQyxFQUFzQ3dGLFFBQXRDLEVBQWdELE9BQWhELENBQVA7QUFBaUU7QUFGdEU7QUFBQTtBQUFBLDhCQUlYO0FBQ04sYUFBSU0sT0FBTyxLQUFLOEMsV0FBTCxFQUFYO0FBQ0EsYUFBSTlDLElBQUosRUFBVTtBQUNSLGVBQUkrQyxPQUFPLEtBQUtDLFNBQUwsQ0FBZWhELElBQWYsQ0FBWDtBQUNBLGVBQUkrQyxJQUFKLEVBQVU7QUFBRSxvQkFBT0EsSUFBUDtBQUFhOztBQUV6QixlQUFJRSxTQUFTLEtBQUtDLFdBQUwsQ0FBaUJsRCxJQUFqQixDQUFiO0FBQ0EsZUFBSWlELE1BQUosRUFBWTtBQUFFLG9CQUFPQSxNQUFQO0FBQWU7O0FBRTdCLGVBQUlFLGNBQWMsS0FBS0MsZ0JBQUwsQ0FBc0JwRCxJQUF0QixDQUFsQjtBQUNBLGVBQUltRCxXQUFKLEVBQWlCO0FBQUUsb0JBQU9BLFdBQVA7QUFBb0I7O0FBRXZDLGVBQUlFLFdBQVcsS0FBS0MsYUFBTCxDQUFtQnRELElBQW5CLENBQWY7QUFDQSxlQUFJcUQsUUFBSixFQUFjO0FBQUUsb0JBQU9BLFFBQVA7QUFBaUI7QUFDbEM7QUFDRCxnQkFBT3JELElBQVA7QUFDRDtBQXBCa0I7QUFBQTtBQUFBLHFDQXNCSjtBQUNiLGFBQUksS0FBS3RGLEVBQUwsQ0FBUSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLE1BQXJCLENBQVIsQ0FBSixFQUEyQztBQUFFLGtCQUFPLEtBQUs2SSxjQUFMLEVBQVA7QUFBOEIsVUFBM0UsTUFDSyxJQUFJLEtBQUs3SSxFQUFMLENBQVEsV0FBUixDQUFKLEVBQTBCO0FBQUUsa0JBQU8sS0FBS29ILE9BQUwsRUFBUDtBQUF1QixVQUFuRCxNQUNBLElBQUksS0FBS3BILEVBQUwsQ0FBUSxZQUFSLENBQUosRUFBMkI7QUFBRSxrQkFBTyxLQUFLOEksUUFBTCxFQUFQO0FBQXdCLFVBQXJELE1BQ0EsSUFBSSxLQUFLOUksRUFBTCxDQUFRLGNBQVIsQ0FBSixFQUE2QjtBQUFFLGtCQUFPLEtBQUsrSSxVQUFMLEVBQVA7QUFBMEIsVUFBekQsTUFDQSxJQUFJLEtBQUsvSSxFQUFMLENBQVEsWUFBUixDQUFKLEVBQTJCO0FBQUUsa0JBQU8sS0FBS2dKLFNBQUwsRUFBUDtBQUF5QixVQUF0RCxNQUNBLElBQUksS0FBS2hKLEVBQUwsQ0FBUSxDQUFDLE1BQUQsRUFBUyxZQUFULENBQVIsQ0FBSixFQUFxQztBQUFFLGtCQUFPLEtBQUtpSixTQUFMLEVBQVA7QUFBeUIsVUFBaEUsTUFDQSxJQUFJLEtBQUtqSixFQUFMLENBQVEsT0FBUixDQUFKLEVBQXNCO0FBQUUsa0JBQU8sS0FBS2tILFVBQUwsRUFBUDtBQUEwQixVQUFsRCxNQUNBLElBQUksS0FBS2xILEVBQUwsQ0FBUSxLQUFSLENBQUosRUFBb0I7QUFBRSxrQkFBTyxLQUFLa0osUUFBTCxFQUFQO0FBQXdCLFVBQTlDLE1BQ0EsSUFBSSxLQUFLbEosRUFBTCxDQUFRLElBQVIsQ0FBSixFQUFtQjtBQUFFLGtCQUFPLEtBQUttSCxPQUFMLEVBQVA7QUFBdUIsVUFBNUMsTUFDQTtBQUNILCtCQUFNLElBQU4sRUFBWSxLQUFLdkcsS0FBakIsRUFBd0IsK0VBQXhCO0FBQ0EsZ0JBQUtjLElBQUw7QUFDRDtBQUNELGdCQUFPLElBQVA7QUFDRDtBQXJDa0I7QUFBQTtBQUFBLGtDQXVDUDtBQUNWLGFBQUl0TyxRQUFRLEVBQVo7QUFDQUEsZUFBTXBELElBQU4sQ0FBVyxJQUFJbVUsSUFBSixDQUFTLElBQVQsRUFBZSxLQUFLdkQsS0FBcEIsQ0FBWDtBQUNBLGNBQUtzRSxNQUFMLENBQVksWUFBWjtBQUNBLGFBQUksQ0FBQyxLQUFLbEYsRUFBTCxDQUFRLGFBQVIsQ0FBTCxFQUE2QjtBQUMzQjVNLGlCQUFNcEQsSUFBTixDQUFXLEtBQUtxVixJQUFMLEVBQVg7QUFDRDtBQUNEalMsZUFBTXBELElBQU4sQ0FBVyxJQUFJbVUsSUFBSixDQUFTLElBQVQsRUFBZSxLQUFLdkQsS0FBcEIsQ0FBWDtBQUNBLGNBQUtzRSxNQUFMLENBQVksYUFBWjtBQUNBLGdCQUFPOVIsS0FBUDtBQUNEO0FBakRrQjtBQUFBO0FBQUEsaUNBbURSK1IsSUFuRFEsRUFtREY7QUFBRSxnQkFBTyxLQUFLbkYsRUFBTCxDQUFRLE1BQVIsSUFBa0IsS0FBSzZJLGNBQUwsQ0FBb0IxRCxJQUFwQixDQUFsQixHQUE4QyxJQUFyRDtBQUEyRDtBQW5EM0Q7QUFBQTtBQUFBLG1DQXFETkEsSUFyRE0sRUFxREE7QUFBRSxnQkFBTyxLQUFLbkYsRUFBTCxDQUFRLE9BQVIsSUFBbUIsS0FBSzZJLGNBQUwsQ0FBb0IxRCxJQUFwQixDQUFuQixHQUErQyxJQUF0RDtBQUE0RDtBQXJEOUQ7QUFBQTtBQUFBLHdDQXVEREEsSUF2REMsRUF1REs7QUFBRSxnQkFBTyxLQUFLbkYsRUFBTCxDQUFRLG9CQUFSLElBQWdDLEtBQUs2SSxjQUFMLENBQW9CMUQsSUFBcEIsQ0FBaEMsR0FBNEQsSUFBbkU7QUFBeUU7QUF2RGhGO0FBQUE7QUFBQSxxQ0F5REpBLElBekRJLEVBeURFO0FBQUUsZ0JBQU8sS0FBS25GLEVBQUwsQ0FBUSxNQUFSLElBQWtCLEtBQUs2SSxjQUFMLENBQW9CMUQsSUFBcEIsQ0FBbEIsR0FBOEMsSUFBckQ7QUFBMkQ7QUF6RC9EOztBQUFBO0FBQUEsS0FBd0NyRCxVQUF4QztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7Ozs7Ozs7bUJBRWV0TixNQUFNO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG9DQUVMO0FBQ1osYUFBSThRLE9BQU8saUJBQVMsSUFBVCxFQUFlLEtBQUsxRSxLQUFwQixDQUFYO0FBQ0EwRSxjQUFLeEgsSUFBTCxDQUFVNUwsSUFBVixHQUFpQixFQUFqQjtBQUNBLGNBQUtnVCxNQUFMLENBQVksY0FBWjtBQUNBLGFBQUksQ0FBQyxLQUFLbEYsRUFBTCxDQUFRLGVBQVIsQ0FBTCxFQUErQjtBQUM3QnNGLGdCQUFLeEgsSUFBTCxDQUFVNUwsSUFBVixHQUFpQixLQUFLbVUsVUFBTCxDQUFnQixLQUFLaEIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUMsZUFBakMsRUFBa0QsS0FBbEQsRUFBeUQsV0FBekQsQ0FBakI7QUFDRDtBQUNELGNBQUtILE1BQUwsQ0FBWSxlQUFaO0FBQ0EsZ0JBQU9JLElBQVA7QUFDRDtBQVhrQjs7QUFBQTtBQUFBLEtBQTZDeEQsVUFBN0M7QUFBQSxFQUFOLEM7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7Ozs7O21CQUVldE4sTUFBTTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxtQ0FFTjtBQUNYLGFBQUk4USxPQUFPLGlCQUFTLElBQVQsRUFBZSxLQUFLMUUsS0FBcEIsQ0FBWDtBQUNBMEUsY0FBS3hILElBQUwsQ0FBVXFMLEdBQVYsR0FBZ0IsRUFBaEI7QUFDQSxjQUFLakUsTUFBTCxDQUFZLFlBQVo7QUFDQSxhQUFJLENBQUMsS0FBS2xGLEVBQUwsQ0FBUSxhQUFSLENBQUwsRUFBNkI7QUFDM0JzRixnQkFBS3hILElBQUwsQ0FBVXFMLEdBQVYsR0FBZ0IsS0FBSzlDLFVBQUwsQ0FBZ0IsS0FBSytDLFdBQXJCLEVBQWtDLENBQUMsS0FBRCxDQUFsQyxFQUEyQyxhQUEzQyxFQUEwRCxLQUExRCxFQUFpRSxXQUFqRSxDQUFoQjtBQUNEO0FBQ0QsY0FBS2xFLE1BQUwsQ0FBWSxhQUFaO0FBQ0EsZ0JBQU9JLElBQVA7QUFDRDtBQVhrQjs7QUFBQTtBQUFBLEtBQTRDeEQsVUFBNUM7QUFBQSxFQUFOLEM7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7Ozs7O21CQUVldE4sTUFBTTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkFFVnNPLEVBRlUsRUFFYTtBQUFBLGFBQW5Cd0QsU0FBbUIsdUVBQVAsS0FBTzs7QUFDOUIsYUFBSWhCLE9BQU8saUJBQVMsSUFBVCxFQUFlLEtBQUsxRSxLQUFwQixFQUEyQixFQUFFa0MsTUFBRixFQUEzQixDQUFYO0FBQ0F3QyxjQUFLeEgsSUFBTCxDQUFVNUwsSUFBVixHQUFpQixFQUFqQjtBQUNBLGFBQUlvVSxTQUFKLEVBQWU7QUFDYmhCLGdCQUFLakIsU0FBTCxHQUFpQixLQUFLTSxRQUF0QjtBQUNBVyxnQkFBS2hCLFNBQUwsR0FBaUIsS0FBS00sUUFBTCxFQUFqQjtBQUNEO0FBQ0QsY0FBS2xELElBQUw7QUFDQSxjQUFLK0MsTUFBTCxDQUFZdFMsS0FBWixDQUFrQixJQUFsQjtBQUNBLGFBQUksS0FBSzZOLEVBQUwsQ0FBUSxZQUFSLENBQUosRUFBMkI7QUFDekIsZ0JBQUswQixJQUFMO0FBQ0EsZUFBSSxDQUFDLEtBQUsxQixFQUFMLENBQVEsYUFBUixDQUFMLEVBQTZCO0FBQzNCc0Ysa0JBQUt4SCxJQUFMLENBQVU1TCxJQUFWLEdBQWlCLEtBQUttWCxXQUFMLEVBQWpCO0FBQ0Q7QUFDRCxnQkFBS25FLE1BQUwsQ0FBWSxhQUFaO0FBQ0Q7QUFDREksY0FBS3hILElBQUwsQ0FBVTRKLElBQVYsR0FBaUIsS0FBS25CLEtBQUwsQ0FBVyxLQUFYLEVBQWtCLEtBQWxCLENBQWpCO0FBQ0EsY0FBSzlCLE1BQUwsQ0FBWWpGLEdBQVo7QUFDQSxjQUFLMEYsTUFBTCxDQUFZLEtBQVo7QUFDQSxhQUFJb0IsU0FBSixFQUFlO0FBQ2IsZ0JBQUsxQixRQUFMO0FBQ0Q7QUFDRCxnQkFBT1UsSUFBUDtBQUNEO0FBekJrQjtBQUFBO0FBQUEsZ0NBMkJUO0FBQ1IsY0FBS2IsTUFBTCxDQUFZOVUsR0FBWixDQUFnQixLQUFLaVIsS0FBckIsRUFBNEIsSUFBNUIsRUFBa0MsS0FBbEM7QUFDQSxhQUFJMEUsT0FBTyxpQkFBUyxJQUFULEVBQWUsS0FBSzFFLEtBQXBCLENBQVg7QUFDQSxjQUFLYyxJQUFMO0FBQ0EsYUFBSSxLQUFLMUIsRUFBTCxDQUFRLFFBQVIsQ0FBSixFQUF1QjtBQUNyQixnQkFBSzBCLElBQUw7QUFDQTRELGdCQUFLeEgsSUFBTCxDQUFVaUUsTUFBVixHQUFtQixLQUFLc0QsSUFBTCxFQUFuQjtBQUNEO0FBQ0QsZ0JBQU9DLElBQVA7QUFDRDtBQXBDa0I7QUFBQTtBQUFBLHFDQXNDSjtBQUFFLGdCQUFPLEtBQUtlLFVBQUwsQ0FBZ0IsS0FBS2lELE1BQXJCLEVBQTZCLENBQUMsSUFBRCxDQUE3QixFQUFxQyxhQUFyQyxFQUFvRCxLQUFwRCxFQUEyRCxXQUEzRCxDQUFQO0FBQWdGO0FBdEM5RTs7QUFBQTtBQUFBLEtBQTBDeEgsVUFBMUM7QUFBQSxFQUFOLEM7Ozs7Ozs7Ozs7Ozs7O0FDRmY7O0FBQ0E7Ozs7Ozs7O21CQUVldE4sTUFBTTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxpQ0FFSTtBQUFBLGFBQWR5UyxLQUFjLHVFQUFOLElBQU07O0FBQ3JCLGFBQUlBLFNBQVMsQ0FBQyxLQUFLeEMsTUFBTCxDQUFZb0IsTUFBWixDQUFtQixLQUFLakYsS0FBTCxDQUFXbk4sS0FBOUIsQ0FBZCxFQUFvRDtBQUNsRCwrQkFBTSxJQUFOLEVBQVksS0FBS21OLEtBQWpCLEVBQXdCLHVCQUF4QjtBQUNBLGtCQUFPLElBQVA7QUFDRDtBQUNELGFBQUkwRSxPQUFPLGlCQUFTLElBQVQsRUFBZSxLQUFLMUUsS0FBcEIsQ0FBWDtBQUNBLGNBQUtjLElBQUw7QUFDQSxhQUFJLEtBQUsxQixFQUFMLENBQVEsY0FBUixDQUFKLEVBQTZCO0FBQzNCLGVBQUksQ0FBQ3NGLEtBQUt4SCxJQUFMLENBQVV5TCxNQUFmLEVBQXVCO0FBQ3JCakUsa0JBQUt4SCxJQUFMLENBQVV5TCxNQUFWLEdBQW1CLEVBQW5CO0FBQ0Q7QUFDRGpFLGdCQUFLeEgsSUFBTCxDQUFVeUwsTUFBVixDQUFpQnZaLElBQWpCLENBQXNCLEtBQUsrWSxVQUFMLEVBQXRCO0FBQ0Q7QUFDRCxhQUFJLEtBQUsvSSxFQUFMLENBQVEsWUFBUixDQUFKLEVBQTJCO0FBQ3pCLGdCQUFLMEIsSUFBTDtBQUNBNEQsZ0JBQUsxRSxLQUFMLENBQVduQixLQUFYLEdBQW1CLElBQW5CO0FBQ0EsZUFBSSxDQUFDLEtBQUtPLEVBQUwsQ0FBUSxhQUFSLENBQUwsRUFBNkI7QUFDM0JzRixrQkFBS3hILElBQUwsQ0FBVTVMLElBQVYsR0FBaUIsS0FBS29WLEtBQUwsQ0FBVyxhQUFYLEVBQTBCLEtBQTFCLENBQWpCO0FBQ0Q7QUFDRCxnQkFBS3BDLE1BQUwsQ0FBWSxhQUFaO0FBQ0Q7QUFDRCxnQkFBTyxLQUFLbEYsRUFBTCxDQUFRLENBQUMsVUFBRCxFQUFhLGNBQWIsQ0FBUixDQUFQLEVBQThDO0FBQzVDLGVBQUksQ0FBQ3NGLEtBQUt4SCxJQUFMLENBQVV5TCxNQUFmLEVBQXVCO0FBQ3JCakUsa0JBQUt4SCxJQUFMLENBQVV5TCxNQUFWLEdBQW1CLEVBQW5CO0FBQ0Q7QUFDRGpFLGdCQUFLeEgsSUFBTCxDQUFVeUwsTUFBVixDQUFpQnZaLElBQWpCLENBQXNCLEtBQUsrUyxRQUFMLEVBQXRCO0FBQ0EsZ0JBQUtrQyxJQUFMLENBQVUsT0FBVjtBQUNEO0FBQ0QsZ0JBQU9LLElBQVA7QUFDRDtBQS9Ca0I7QUFBQTtBQUFBLGtDQWlDUDtBQUNWLGFBQUlBLE9BQU8saUJBQVMsSUFBVCxFQUFlLEtBQUsxRSxLQUFwQixDQUFYO0FBQ0EwRSxjQUFLeEgsSUFBTCxDQUFVNUwsSUFBVixHQUFpQixFQUFqQjtBQUNBb1QsY0FBSzFFLEtBQUwsQ0FBV25CLEtBQVgsR0FBbUIsSUFBbkI7QUFDQTZGLGNBQUtrRSxNQUFMLEdBQWMsSUFBZDtBQUNBLGNBQUs5SCxJQUFMO0FBQ0EsYUFBSSxLQUFLMUIsRUFBTCxDQUFRLGNBQVIsQ0FBSixFQUE2QjtBQUMzQixlQUFJLENBQUNzRixLQUFLeEgsSUFBTCxDQUFVeUwsTUFBZixFQUF1QjtBQUNyQmpFLGtCQUFLeEgsSUFBTCxDQUFVeUwsTUFBVixHQUFtQixFQUFuQjtBQUNEO0FBQ0RqRSxnQkFBS3hILElBQUwsQ0FBVXlMLE1BQVYsQ0FBaUJ2WixJQUFqQixDQUFzQixLQUFLK1ksVUFBTCxFQUF0QjtBQUNEO0FBQ0QsYUFBSSxLQUFLL0ksRUFBTCxDQUFRLFlBQVIsQ0FBSixFQUEyQjtBQUN6QixnQkFBSzBCLElBQUw7QUFDQTRELGdCQUFLMUUsS0FBTCxDQUFXbkIsS0FBWCxHQUFtQixJQUFuQjtBQUNBLGVBQUksQ0FBQyxLQUFLTyxFQUFMLENBQVEsYUFBUixDQUFMLEVBQTZCO0FBQzNCc0Ysa0JBQUt4SCxJQUFMLENBQVU1TCxJQUFWLEdBQWlCLEtBQUtvVixLQUFMLENBQVcsYUFBWCxFQUEwQixLQUExQixDQUFqQjtBQUNEO0FBQ0QsZ0JBQUtwQyxNQUFMLENBQVksYUFBWjtBQUNEO0FBQ0QsZ0JBQU9JLElBQVA7QUFDRDtBQXREa0I7O0FBQUE7QUFBQSxLQUEwQ3hELFVBQTFDO0FBQUEsRUFBTixDOzs7Ozs7Ozs7Ozs7OztBQ0hmOzs7Ozs7OzttQkFFZXROLE1BQU07QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsa0NBRVA7QUFDVixhQUFJb00sUUFBUSxLQUFLQSxLQUFqQjtBQUNBLGNBQUtjLElBQUw7QUFDQSxhQUFJb0IsS0FBSyxLQUFLbEMsS0FBZDtBQUNBLGNBQUtjLElBQUw7QUFDQSxhQUFJLENBQUMsS0FBSytDLE1BQUwsQ0FBWW9CLE1BQVosQ0FBbUIvQyxHQUFHclAsS0FBdEIsRUFBNkIsT0FBN0IsQ0FBTCxFQUE0QztBQUMxQywrQkFBTSxJQUFOLEVBQVlxUCxFQUFaLEVBQWdCLGtCQUFoQjtBQUNBLGtCQUFPLElBQVA7QUFDRDtBQUNELGFBQUk1USxPQUFPLEVBQVg7QUFDQSxhQUFJLEtBQUs4TixFQUFMLENBQVEsWUFBUixDQUFKLEVBQTJCO0FBQ3pCLGdCQUFLMEIsSUFBTDtBQUNBLGVBQUksQ0FBQyxLQUFLMUIsRUFBTCxDQUFRLGFBQVIsQ0FBTCxFQUE2QjtBQUMzQjlOLG9CQUFPLEtBQUtvVixLQUFMLENBQVcsYUFBWCxFQUEwQixLQUExQixDQUFQO0FBQ0Q7QUFDRCxnQkFBS3BDLE1BQUwsQ0FBWSxhQUFaO0FBQ0Q7QUFDRCxnQkFBTyxJQUFJZixJQUFKLENBQVMsSUFBVCxFQUFldkQsS0FBZixFQUFzQixFQUFFa0MsTUFBRixFQUFNNVEsVUFBTixFQUF0QixDQUFQO0FBQ0Q7QUFwQmtCO0FBQUE7QUFBQSxtQ0FzQk47QUFDWCxhQUFJLENBQUMsS0FBS3lTLFFBQVYsRUFBb0I7QUFDbEIsK0JBQU0sSUFBTixFQUFZLEtBQUsvRCxLQUFqQixFQUF3QiwyQ0FBeEI7QUFDQSxnQkFBS2MsSUFBTDtBQUNBLGtCQUFPLElBQVA7QUFDRDtBQUNELGFBQUksS0FBSzFCLEVBQUwsQ0FBUSxNQUFSLENBQUosRUFBcUI7QUFDbkIsa0JBQU8sS0FBSzZJLGNBQUwsRUFBUDtBQUNELFVBRkQsTUFHSyxJQUFJLEtBQUs3SSxFQUFMLENBQVEsWUFBUixDQUFKLEVBQTJCO0FBQzlCLGtCQUFPLEtBQUttSCxPQUFMLENBQWEsS0FBYixDQUFQO0FBQ0Q7QUFDRCxnQkFBTyxJQUFQO0FBQ0Q7QUFuQ2tCO0FBQUE7QUFBQSxvQ0FxQ0w7QUFDWixhQUFJLENBQUMsS0FBS3hDLFFBQVYsRUFBb0I7QUFDbEIsK0JBQU0sSUFBTixFQUFZLEtBQUsvRCxLQUFqQixFQUF3QiwrQ0FBeEI7QUFDQSxnQkFBS2MsSUFBTDtBQUNBLGtCQUFPLElBQVA7QUFDRDtBQUNELGdCQUFPLEtBQUt5RixPQUFMLENBQWEsS0FBYixDQUFQO0FBQ0Q7QUE1Q2tCOztBQUFBO0FBQUEsS0FBNkNyRixVQUE3QztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTTFCLFU7Ozs7S0FFZXFKLFU7OztBQXFCbkIseUJBQWU7QUFBQTs7QUFBQTs7QUFFYixXQUFLamEsS0FBTDtBQUZhO0FBR2Q7Ozs7aUNBUVltUSxNLEVBQVE7QUFBRSxjQUFPQSxVQUFVLENBQVYsSUFBZUEsU0FBUyxLQUFLdk0sS0FBTCxDQUFXMEUsTUFBMUM7QUFBa0Q7Ozs2QkFFaEU2SCxNLEVBQVE7QUFBRSxjQUFPLEtBQUthLFdBQUwsQ0FBaUJiLE1BQWpCLElBQTJCLEtBQUt2TSxLQUFMLENBQVd1TSxNQUFYLENBQTNCLEdBQWdELElBQXZEO0FBQTZEOzs7NEJBRW5FO0FBQUEsV0FBUG5QLENBQU8sdUVBQUgsQ0FBRztBQUFFLGNBQU8sS0FBS2taLE9BQUwsQ0FBYSxLQUFLL0osTUFBTCxHQUFjblAsQ0FBM0IsQ0FBUDtBQUFzQzs7OzRCQUV4QztBQUFBLFdBQVBBLENBQU8sdUVBQUgsQ0FBRztBQUFFLFlBQUttUCxNQUFMLElBQWVuUCxDQUFmO0FBQWtCOzs7NkJBRWY7QUFBQSx5Q0FBUm1aLE1BQVE7QUFBUkEsZUFBUTtBQUFBOztBQUFFLFlBQUsvSixJQUFMLElBQWErSixPQUFPaFYsSUFBUCxDQUFZLEVBQVosQ0FBYjtBQUE4Qjs7OytCQUU5QjtBQUNsQixZQUFLaUUsS0FBTDtBQUNBLFlBQUtnUixLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXMUYsTUFBWCxDQUFrQixLQUFLdEUsSUFBTCxDQUFVRyxLQUFWLENBQWdCLElBQWhCLENBQWxCLENBQWI7QUFDQSxZQUFLSCxJQUFMLEdBQVksRUFBWjtBQUNEOzs7MkJBRU14TSxLLEVBQU87QUFDWixZQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFlBQUtELEtBQUwsR0FBYUEsU0FBUyxFQUF0QjtBQUNBLFlBQUt3VyxLQUFMLEdBQWEsRUFBYjtBQUNBLFlBQUtoSyxJQUFMLEdBQVksRUFBWjtBQUNBLFlBQUtELE1BQUwsR0FBYyxDQUFkO0FBQ0EsWUFBS2xOLElBQUwsR0FBWSxFQUFaO0FBQ0EsWUFBS29YLFlBQUwsR0FBb0IsQ0FBcEI7QUFDRDs7OzJCQUVNelcsSyxFQUFPO0FBQ1osV0FBSTlDLElBQUksRUFBUjtBQURZO0FBQUE7QUFBQTs7QUFBQTtBQUVaLDhCQUFjOEMsS0FBZCw4SEFBcUI7QUFBQSxlQUFac0csQ0FBWTs7QUFDbkJwSixhQUFFTixJQUFGLENBQU8wSixhQUFheUssSUFBYixHQUFvQixLQUFLa0IsSUFBTCxDQUFVM0wsQ0FBVixDQUFwQixHQUFtQ0EsQ0FBMUM7QUFDRDtBQUpXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS1osY0FBT3BKLEVBQUVxRSxJQUFGLENBQU8sSUFBUCxDQUFQO0FBQ0Q7Ozt3QkFFR3dELEcsRUFBSztBQUFFLGNBQU9BLE9BQU8sQ0FBQyxpQkFBRTJSLFFBQUYsQ0FBVzNSLEdBQVgsRUFBZ0IsSUFBaEIsQ0FBRCxHQUF5QixJQUF6QixHQUFnQyxFQUF2QyxDQUFQO0FBQW1EOzs7NEJBRXREQSxHLEVBQUs7QUFBRSxjQUFPLGlCQUFFZSxRQUFGLENBQVcsRUFBWCxFQUFlLEtBQUsyUSxZQUFMLEdBQW9CLENBQW5DLElBQXdDMVIsR0FBL0M7QUFBb0Q7Ozt5QkFFOUQxRSxLLEVBQU87QUFBRSxjQUFPLE9BQU9BLE1BQU1zVyxPQUFOLENBQWMsSUFBZCxFQUFvQixJQUFwQixDQUFQLEdBQW1DLElBQTFDO0FBQWdEOzs7eUJBRXpEM1csSyxFQUFPO0FBQ1YsWUFBSzVELEtBQUwsQ0FBVzRELEtBQVg7QUFDQSxZQUFLNFcsVUFBTDtBQUNBLGNBQU8sQ0FBQyxLQUFLbkYsR0FBYixFQUFrQjtBQUNoQixjQUFLb0YsT0FBTCxDQUFhLEtBQUszRCxTQUFMLENBQWUsS0FBS2hCLElBQXBCLENBQWI7QUFDQSxjQUFLNUQsSUFBTDtBQUNEO0FBQ0QsWUFBS3dJLFFBQUw7QUFDQSxZQUFLelgsSUFBTCxHQUFZLEtBQUttWCxLQUFMLENBQVdqVixJQUFYLENBQWdCLElBQWhCLENBQVo7QUFDQSxjQUFPLEtBQUtsQyxJQUFaO0FBQ0Q7Ozs0QkFFTztBQUNOUSxlQUFRME8sSUFBUixDQUFhLGlCQUFiO0FBQ0ExTyxlQUFRQyxHQUFSLENBQVksS0FBS1QsSUFBakI7QUFDQVEsZUFBUUMsR0FBUixDQUFZLEVBQVo7QUFDRDs7O3lCQTlEYTtBQUFFLGNBQU8sS0FBSzBXLEtBQUwsQ0FBVzlSLE1BQWxCO0FBQTBCOzs7eUJBRS9CO0FBQUUsY0FBTyxLQUFLNkgsTUFBTCxJQUFlLEtBQUt2TSxLQUFMLENBQVcwRSxNQUFqQztBQUF5Qzs7O3lCQUUxQztBQUFFLGNBQU8sS0FBSzRSLE9BQUwsQ0FBYSxLQUFLL0osTUFBbEIsQ0FBUDtBQUFrQzs7OztHQTlCVmxMLElBQUkyTCxVQUFKLEVBQWdCd0IsSUFBaEIsOE87O21CQUFuQjZILFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQ2pCTmpWLE1BQU07QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsZ0NBRVQ4USxJQUZTLEVBRUg2RSxDQUZHLEVBRUE7QUFDakIsYUFBSXRhLEVBQUVtSixRQUFGLENBQVdzTSxJQUFYLENBQUosRUFBc0I7QUFDcEIsa0JBQU8sS0FBSzhFLGFBQUwsQ0FBbUI5RSxJQUFuQixDQUFQO0FBQ0QsVUFGRCxNQUdLLElBQUlBLEtBQUt0RixFQUFMLENBQVEsSUFBUixDQUFKLEVBQW1CO0FBQ3RCLGtCQUFPLEtBQUtxSyxnQkFBTCxDQUFzQi9FLElBQXRCLENBQVA7QUFDRCxVQUZJLE1BR0EsSUFBSUEsS0FBS3RGLEVBQUwsQ0FBUSxXQUFSLENBQUosRUFBMEI7QUFDN0Isa0JBQU8sS0FBS3NLLGtCQUFMLENBQXdCaEYsSUFBeEIsRUFBOEI2RSxDQUE5QixDQUFQO0FBQ0QsVUFGSSxNQUdBLElBQUk3RSxLQUFLdEYsRUFBTCxDQUFRLGNBQVIsQ0FBSixFQUE2QjtBQUNoQyxrQkFBTyxLQUFLdUssY0FBTCxDQUFvQmpGLElBQXBCLEVBQTBCNkUsQ0FBMUIsQ0FBUDtBQUNELFVBRkksTUFHQSxJQUFJN0UsS0FBS3RGLEVBQUwsQ0FBUSxZQUFSLENBQUosRUFBMkI7QUFDOUIsa0JBQU8sS0FBS3dLLGFBQUwsQ0FBbUJsRixJQUFuQixFQUF5QjZFLENBQXpCLENBQVA7QUFDRCxVQUZJLE1BR0EsSUFBSTdFLEtBQUt0RixFQUFMLENBQVEsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixNQUFsQixDQUFSLENBQUosRUFBd0M7QUFDM0Msa0JBQU8sS0FBS3lLLGlCQUFMLENBQXVCbkYsSUFBdkIsRUFBNkI2RSxDQUE3QixDQUFQO0FBQ0QsVUFGSSxNQUdBLElBQUk3RSxLQUFLdEYsRUFBTCxDQUFRLENBQUMsTUFBRCxFQUFTLFlBQVQsQ0FBUixDQUFKLEVBQXFDO0FBQ3hDLGtCQUFPLEtBQUswSyxhQUFMLENBQW1CcEYsSUFBbkIsRUFBeUI2RSxDQUF6QixDQUFQO0FBQ0QsVUFGSSxNQUdBLElBQUk3RSxLQUFLdEYsRUFBTCxDQUFRLEtBQVIsQ0FBSixFQUFvQjtBQUN2QixrQkFBTyxLQUFLMkssWUFBTCxDQUFrQnJGLElBQWxCLEVBQXdCNkUsQ0FBeEIsQ0FBUDtBQUNELFVBRkksTUFHQSxJQUFJN0UsS0FBS3RGLEVBQUwsQ0FBUSxDQUFDLE1BQUQsRUFBUyxRQUFULENBQVIsQ0FBSixFQUFpQztBQUNwQyxrQkFBTyxLQUFLNEssZUFBTCxDQUFxQnRGLElBQXJCLEVBQTJCNkUsQ0FBM0IsQ0FBUDtBQUNELFVBRkksTUFHQSxJQUFJN0UsS0FBS3RGLEVBQUwsQ0FBUSxJQUFSLENBQUosRUFBbUI7QUFDdEIsa0JBQU8sS0FBSzZLLFdBQUwsQ0FBaUJ2RixJQUFqQixFQUF1QjZFLENBQXZCLENBQVA7QUFDRCxVQUZJLE1BR0E7QUFDSCxrQkFBTyxLQUFLVyxjQUFMLENBQW9CeEYsSUFBcEIsRUFBMEI2RSxDQUExQixDQUFQO0FBQ0Q7QUFDRjtBQXBDa0I7O0FBQUE7QUFBQSxLQUFzQ3JJLFVBQXRDO0FBQUEsRUFBTixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkNBQXROLE1BQU07QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkNBRUk7QUFDckIsY0FBS3lWLE9BQUwsQ0FBYSxnQkFBYjtBQUNBLGNBQUtKLFlBQUw7QUFDQSxjQUFLSSxPQUFMLENBQWEsaUJBQWI7QUFDQSxjQUFLQSxPQUFMO0FBQ0Q7QUFQa0I7QUFBQTtBQUFBLDJDQVNFO0FBQ25CLGNBQUtBLE9BQUwsQ0FBYSxPQUFiO0FBQ0EsY0FBS0osWUFBTDtBQUNBLGNBQUtJLE9BQUw7QUFDRDtBQWJrQjs7QUFBQTtBQUFBLEtBQTBDbkksVUFBMUM7QUFBQSxFQUFOLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQ0FBdE4sTUFBTTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxzQ0FFSDhRLElBRkcsRUFFRztBQUNwQixhQUFJbk4sTUFBTSxLQUFLNFMsRUFBTCxDQUFRLEdBQVIsQ0FBVjs7QUFFQSxjQUFLbEIsWUFBTDs7QUFFQSxhQUFJaGEsRUFBRTZILE9BQUYsQ0FBVTROLElBQVYsQ0FBSixFQUFxQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNuQixrQ0FBY0EsSUFBZCw4SEFBb0I7QUFBQSxtQkFBWDVMLENBQVc7O0FBQ2xCdkIsc0JBQU8sS0FBSzZTLGtCQUFMLENBQXdCdFIsQ0FBeEIsQ0FBUDtBQUNEO0FBSGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJcEIsVUFKRCxNQUtLO0FBQ0h2QixpQkFBTSxLQUFLNlMsa0JBQUwsQ0FBd0IxRixJQUF4QixDQUFOO0FBQ0Q7O0FBRUQsY0FBS3VFLFlBQUw7O0FBRUExUixnQkFBTyxLQUFLNFMsRUFBTCxDQUFRLEtBQUt4UixNQUFMLENBQVksR0FBWixDQUFSLENBQVA7O0FBRUEsZ0JBQU9wQixHQUFQO0FBQ0Q7QUFyQmtCOztBQUFBO0FBQUEsS0FBMkMySixVQUEzQztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDQUF0TixNQUFNO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDBDQUVDOFEsSUFGRCxFQUVPNkUsQ0FGUCxFQUVVO0FBQzNCLGFBQUloUyxNQUFNLEVBQVY7O0FBRUEsYUFBSXRJLEVBQUU2SCxPQUFGLENBQVU0TixJQUFWLENBQUosRUFBcUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDbkIsa0NBQWNBLElBQWQsOEhBQW9CO0FBQUEsbUJBQVg1TCxDQUFXOztBQUNsQnZCLHNCQUFPLEtBQUttTyxTQUFMLENBQWU1TSxDQUFmLENBQVA7QUFDRDtBQUhrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSXBCLFVBSkQsTUFLSyxJQUFJNEwsSUFBSixFQUFVO0FBQ2IsZUFBSTZFLEtBQUk3RSxLQUFLeEgsSUFBTCxJQUFhLEVBQXJCO0FBQ0EsZUFBSWhMLElBQUksRUFBUjs7QUFFQSxlQUFJd1MsS0FBS3RGLEVBQUwsQ0FBUSxDQUFDLFFBQUQsRUFBVyxXQUFYLENBQVIsQ0FBSixFQUFzQztBQUNwQ2xOLGlCQUFJLEtBQUtpUCxNQUFMLENBQVl1RCxJQUFaLENBQUo7QUFDRCxZQUZELE1BR0ssSUFBSUEsS0FBS3RGLEVBQUwsQ0FBUSxJQUFSLENBQUosRUFBbUI7QUFDdEJsTixpQkFBSSxLQUFLbVksT0FBTCxDQUFhM0YsSUFBYixFQUFtQixJQUFuQixDQUFKO0FBQ0QsWUFGSSxNQUdBLElBQUlBLEtBQUt0RixFQUFMLENBQVEsSUFBUixDQUFKLEVBQW1CO0FBQ3RCbE4saUJBQUk7QUFDRm9ZLHFCQUFNLHdDQURKO0FBRUZDLG9CQUFLO0FBQ0g5Rix1QkFBTSxLQUFLQSxJQUFMLENBQVU4RSxHQUFFOUUsSUFBWixDQURIO0FBRUh3Qyw0QkFBVyxLQUFLdEIsS0FBTCxDQUFXNEQsR0FBRXRDLFNBQWIsQ0FGUjtBQUdIQyw2QkFBWSxLQUFLeEIsU0FBTCxDQUFlNkQsR0FBRXJDLFVBQWpCO0FBSFQ7QUFGSCxjQUFKO0FBUUQsWUFUSSxNQVVBLElBQUl4QyxLQUFLdEYsRUFBTCxDQUFRLE1BQVIsQ0FBSixFQUFxQjtBQUN4QixpQkFBSW1LLEdBQUU5RSxJQUFOLEVBQVk7QUFBRTtBQUNadlMsbUJBQUk7QUFDRm9ZLHVCQUFNLDZDQURKO0FBRUZDLHNCQUFLO0FBQ0g5Rix5QkFBTSxLQUFLQSxJQUFMLENBQVU4RSxHQUFFOUUsSUFBWixDQURIO0FBRUh3Qyw4QkFBVyxLQUFLdEIsS0FBTCxDQUFXNEQsR0FBRXRDLFNBQWIsQ0FGUjtBQUdIQywrQkFBWSxLQUFLeEIsU0FBTCxDQUFlNkQsR0FBRXJDLFVBQWpCO0FBSFQ7QUFGSCxnQkFBSjtBQVFELGNBVEQsTUFVSztBQUNIaFYsbUJBQUk7QUFDRm9ZLHVCQUFNLG9CQURKO0FBRUZDLHNCQUFLLEVBQUVyRCxZQUFZLEtBQUt2QixLQUFMLENBQVc0RCxHQUFFckMsVUFBYixDQUFkO0FBRkgsZ0JBQUo7QUFJRDtBQUNGLFlBakJJLE1Ba0JBLElBQUl4QyxLQUFLdEYsRUFBTCxDQUFRLE9BQVIsQ0FBSixFQUFzQjtBQUN6QmxOLGlCQUFJO0FBQ0ZvWSxxQkFBTSx5QkFESjtBQUVGQyxvQkFBSztBQUNIOUYsdUJBQU0sS0FBS0EsSUFBTCxDQUFVOEUsR0FBRTlFLElBQVosQ0FESDtBQUVIcUMsdUJBQU0sS0FBS25CLEtBQUwsQ0FBVzRELEdBQUV6QyxJQUFiO0FBRkg7QUFGSCxjQUFKO0FBT0QsWUFSSSxNQVNBLElBQUlwQyxLQUFLdEYsRUFBTCxDQUFRLEtBQVIsQ0FBSixFQUFvQjtBQUN2QmxOLGlCQUFJO0FBQ0ZvWSxxQkFBTSxnRkFESjtBQUVGQyxvQkFBSztBQUNINVEsb0JBQUc0UCxHQUFFNVAsQ0FBRixDQUFJOUcsS0FESjtBQUVId1UsMkJBQVUsS0FBSzVDLElBQUwsQ0FBVThFLEdBQUVsQyxRQUFaLENBRlA7QUFHSEMsMkJBQVUsS0FBSzdDLElBQUwsQ0FBVThFLEdBQUVqQyxRQUFaLENBSFA7QUFJSEMsNEJBQVdnQyxHQUFFaEMsU0FBRixHQUFjLEtBQUs5QyxJQUFMLENBQVU4RSxHQUFFaEMsU0FBWixDQUFkLEdBQXVDLEdBSi9DO0FBS0hULHVCQUFNLEtBQUtuQixLQUFMLENBQVc0RCxHQUFFekMsSUFBYjtBQUxIO0FBRkgsY0FBSjtBQVVELFlBWEksTUFZQSxJQUFJcEMsS0FBS3RGLEVBQUwsQ0FBUSxRQUFSLENBQUosRUFBdUI7QUFDMUJsTixpQkFBSTtBQUNGb1kscUJBQU0sZ0JBREo7QUFFRkMsb0JBQUssRUFBRWpaLE1BQU0sS0FBS21ULElBQUwsQ0FBVThFLEdBQUVqWSxJQUFaLEVBQWtCLElBQWxCLENBQVI7QUFGSCxjQUFKO0FBSUQsWUFMSSxNQU1BLElBQUlvVCxLQUFLdEYsRUFBTCxDQUFRLENBQUMsT0FBRCxFQUFVLFVBQVYsQ0FBUixDQUFKLEVBQW9DO0FBQ3ZDbE4saUJBQUk7QUFDRm9ZLHFCQUFNLFNBREo7QUFFRkMsb0JBQUssRUFBRUMsTUFBTTlGLEtBQUs3UixLQUFiO0FBRkgsY0FBSjtBQUlELFlBTEksTUFNQSxJQUFJNlIsS0FBS3RGLEVBQUwsQ0FBUSxPQUFSLENBQUosRUFBc0I7QUFDekJsTixpQkFBSTtBQUNGb1kscUJBQU0sa0NBREo7QUFFRkMsb0JBQUs7QUFDSHhZLHVCQUFNd1gsR0FBRXJILEVBQUYsQ0FBS3JQLEtBRFI7QUFFSCtULDJCQUFVMkMsR0FBRTNDLFFBQUYsR0FBYSxjQUFjLEtBQUtuQyxJQUFMLENBQVU4RSxHQUFFM0MsUUFBWixFQUFzQixJQUF0QixDQUEzQixHQUF5RCxFQUZoRTtBQUdIRSx1QkFBTSxLQUFLbkIsS0FBTCxDQUFXNEQsR0FBRXpDLElBQWI7QUFISDtBQUZILGNBQUo7QUFRRDs7QUFFRHZQLGlCQUFNdEksRUFBRWlNLFFBQUYsQ0FBV2hKLEVBQUVvWSxJQUFiLEVBQW1CcFksRUFBRXFZLEdBQXJCLENBQU47QUFDRDs7QUFFRCxnQkFBTyxLQUFLSixFQUFMLENBQVEsS0FBS3hSLE1BQUwsQ0FBWXBCLEdBQVosQ0FBUixDQUFQO0FBQ0Q7QUFoR2tCOztBQUFBO0FBQUEsS0FBK0MySixVQUEvQztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDQUF0TixNQUFNO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFDQUVKOFEsSUFGSSxFQUVFK0YsU0FGRixFQUVhO0FBQzlCLGFBQUlsVCxNQUFNLEVBQVY7O0FBRUEsYUFBSXRJLEVBQUU2SCxPQUFGLENBQVU0TixJQUFWLENBQUosRUFBcUI7QUFDbkIsZUFBSWhWLElBQUksRUFBUjtBQURtQjtBQUFBO0FBQUE7O0FBQUE7QUFFbkIsa0NBQWNnVixJQUFkLDhIQUFvQjtBQUFBLG1CQUFYNUwsQ0FBVzs7QUFDbEJwSixpQkFBRU4sSUFBRixDQUFPLEtBQUtxVixJQUFMLENBQVUzTCxDQUFWLENBQVA7QUFDRDtBQUprQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtuQnZCLGlCQUFNN0gsRUFBRXFFLElBQUYsQ0FBTzBXLGFBQWEsRUFBcEIsQ0FBTjtBQUNELFVBTkQsTUFRSztBQUNILGVBQUlsQixJQUFJN0UsUUFBUUEsS0FBS3hILElBQWIsSUFBcUIsRUFBN0I7QUFDQSxlQUFJaEwsSUFBSXdTLE9BQU8sS0FBS3hKLFFBQUwsQ0FBY3dKLElBQWQsRUFBb0I2RSxDQUFwQixDQUFQLEdBQWdDLEVBQUVlLE1BQU0sV0FBUixFQUFxQkMsS0FBSyxFQUExQixFQUF4QztBQUNBaFQsaUJBQU10SSxFQUFFaU0sUUFBRixDQUFXaEosRUFBRW9ZLElBQWIsRUFBbUJwWSxFQUFFcVksR0FBckIsQ0FBTjtBQUNEOztBQUVELGdCQUFPaFQsR0FBUDtBQUNEO0FBcEJrQjs7QUFBQTtBQUFBLEtBQWdEMkosVUFBaEQ7QUFBQSxFQUFOLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQ0FBdE4sTUFBTTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx1Q0FFRjhRLElBRkUsRUFFSTZFLENBRkosRUFFTztBQUN4QixnQkFBTztBQUNMZSxpQkFBTSxVQUREO0FBRUxDLGdCQUFLLEVBQUUxWCxPQUFPLEtBQUswRSxHQUFMLENBQVNtTixLQUFLN1IsS0FBZCxDQUFUO0FBRkEsVUFBUDtBQUlEO0FBUGtCOztBQUFBO0FBQUEsS0FBK0NxTyxVQUEvQztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDQUF0TixNQUFNO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHlDQUVBOFEsSUFGQSxFQUVNNkUsQ0FGTixFQUVTO0FBQzFCLGdCQUFPO0FBQ0xlLGlCQUFNLHdCQUREO0FBRUxDLGdCQUFLO0FBQ0hHLGlCQUFJaEcsS0FBSzdSLEtBRE47QUFFSDBSLG1CQUFNLEtBQUtvRyxhQUFMLENBQW1CcEIsRUFBRWhGLElBQXJCLENBRkg7QUFHSEMsb0JBQU8sS0FBS21HLGFBQUwsQ0FBbUJwQixFQUFFL0UsS0FBckI7QUFISjtBQUZBLFVBQVA7QUFRRDtBQVhrQjs7QUFBQTtBQUFBLEtBQThDdEQsVUFBOUM7QUFBQSxFQUFOLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQ0FBdE4sTUFBTTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQ0FFSjhRLElBRkksRUFFRTZFLENBRkYsRUFFSztBQUN0QixnQkFBTztBQUNMZSxpQkFBTSxTQUREO0FBRUxDLGdCQUFLLEVBQUU3RixVQUFGO0FBRkEsVUFBUDtBQUlEO0FBUGtCO0FBQUE7QUFBQSxtQ0FTTkEsSUFUTSxFQVNBNkUsQ0FUQSxFQVNHO0FBQ3BCLGdCQUFPO0FBQ0xlLGlCQUFNLG9DQUREO0FBRUxDLGdCQUFLO0FBQ0hLLG9CQUFPbEcsS0FBS2tFLE1BQUwsR0FBYyxHQUFkLEdBQW9CLEVBRHhCO0FBRUgvVixvQkFBTzZSLEtBQUs3UixLQUZUO0FBR0g4VixxQkFBUVksRUFBRVosTUFBRixHQUFXLEtBQUtnQyxhQUFMLENBQW1CcEIsRUFBRVosTUFBckIsRUFBNkIsRUFBN0IsQ0FBWCxHQUE4QyxFQUhuRDtBQUlIeEgscUJBQVFvSSxFQUFFcEksTUFBRixHQUFXLFFBQVEsS0FBS3dKLGFBQUwsQ0FBbUJwQixFQUFFcEksTUFBckIsRUFBNkIsRUFBN0IsQ0FBbkIsR0FBc0Q7QUFKM0Q7QUFGQSxVQUFQO0FBU0Q7QUFuQmtCO0FBQUE7QUFBQSxzQ0FxQkh1RCxJQXJCRyxFQXFCRzZFLENBckJILEVBcUJNO0FBQ3ZCLGdCQUFPO0FBQ0xlLGlCQUFNLFVBREQ7QUFFTEMsZ0JBQUssRUFBRTFYLE9BQU82UixLQUFLN1IsS0FBZDtBQUZBLFVBQVA7QUFJRDtBQTFCa0I7O0FBQUE7QUFBQSxLQUF3Q3FPLFVBQXhDO0FBQUEsRUFBTixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkNBQXROLE1BQU07QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUNBRUo4USxJQUZJLEVBRUU2RSxDQUZGLEVBRUs7QUFDdEIsZ0JBQU87QUFDTGUsaUJBQU0sNkJBREQ7QUFFTEMsZ0JBQUs7QUFDSE0sa0JBQUtuRyxLQUFLdEYsRUFBTCxDQUFRLFlBQVIsSUFBd0IsR0FBeEIsR0FBOEIsRUFEaEM7QUFFSHdMLG9CQUFPbEcsS0FBS3RGLEVBQUwsQ0FBUSxZQUFSLElBQXdCc0YsS0FBSzdSLEtBQTdCLEdBQXFDLEVBRnpDO0FBR0g4VixxQkFBUVksRUFBRVosTUFBRixHQUFXLEtBQUtnQyxhQUFMLENBQW1CcEIsRUFBRVosTUFBckIsRUFBNkIsRUFBN0IsQ0FBWCxHQUE4QztBQUhuRDtBQUZBLFVBQVA7QUFRRDtBQVhrQjtBQUFBO0FBQUEsb0NBYUxqRSxJQWJLLEVBYUM2RSxDQWJELEVBYUk7QUFDckIsZ0JBQU87QUFDTGUsaUJBQU0sb0JBREQ7QUFFTEMsZ0JBQUs7QUFDSHJJLGlCQUFJcUgsRUFBRXJILEVBQUYsQ0FBS3JQLEtBRE47QUFFSHZCLG1CQUFNLEtBQUtxWixhQUFMLENBQW1CcEIsRUFBRWpZLElBQXJCLEVBQTJCLElBQTNCO0FBRkg7QUFGQSxVQUFQO0FBT0Q7QUFyQmtCOztBQUFBO0FBQUEsS0FBMkM0UCxVQUEzQztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDQUF0TixNQUFNO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDhCQUVYdEMsSUFGVyxFQUVMd1YsSUFGSyxFQUVDL0MsUUFGRCxFQUVXO0FBQzVCLGdCQUFPOVUsRUFBRWlNLFFBQUYsQ0FBVyx3QkFBWCxFQUFxQztBQUMxQ3BKLGVBQUksQ0FBQ2lTLFFBQUQsR0FBWSxXQUFaLEdBQTBCLEVBRFk7QUFFMUN6UyxpQkFBTSxLQUFLcVosYUFBTCxDQUFtQnJaLElBQW5CLEVBQXlCLElBQXpCLENBRm9DO0FBRzFDd1YsaUJBQU0sS0FBS2dFLGNBQUwsQ0FBb0JoRSxJQUFwQjtBQUhvQyxVQUFyQyxDQUFQO0FBS0Q7QUFSa0I7QUFBQTtBQUFBLHdDQVVEcEMsSUFWQyxFQVVLNkUsQ0FWTCxFQVVRO0FBQ3pCLGFBQUlyWCxJQUFJLEVBQVI7QUFDQSxhQUFJd1MsSUFBSixFQUFVO0FBQ1IsZUFBSTZFLEtBQUk3RSxLQUFLeEgsSUFBTCxJQUFhLEVBQXJCO0FBQ0FoTCxlQUFJO0FBQ0ZvWSxtQkFBTSx3QkFESjtBQUVGQyxrQkFBSztBQUNISyxzQkFBT2xHLEtBQUtrRSxNQUFMLEdBQWMsR0FBZCxHQUFvQixFQUR4QjtBQUVIOVcsbUJBQUk0UyxLQUFLN1IsS0FGTjtBQUdIdkIscUJBQU0sS0FBS3FaLGFBQUwsQ0FBbUJwQixHQUFFalksSUFBckIsRUFBMkIsSUFBM0I7QUFISDtBQUZILFlBQUo7QUFRRDtBQUNELGdCQUFPWSxDQUFQO0FBQ0Q7QUF4QmtCO0FBQUE7QUFBQSwwQ0EwQkN3UyxJQTFCRCxFQTBCTzZFLENBMUJQLEVBMEJVO0FBQzNCLGdCQUFPO0FBQ0xlLGlCQUFNLE9BREQ7QUFFTEMsZ0JBQUssRUFBRXpZLElBQUksS0FBS2laLE1BQUwsQ0FBWXhCLEVBQUVqWSxJQUFkLEVBQW9CaVksRUFBRXpDLElBQXRCLENBQU47QUFGQSxVQUFQO0FBSUQ7QUEvQmtCOztBQUFBO0FBQUEsS0FBd0M1RixVQUF4QztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDQUF0TixNQUFNO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHNDQUVIOFEsSUFGRyxFQUVHNkUsQ0FGSCxFQUVNO0FBQ3ZCLGdCQUFPO0FBQ0xlLGlCQUFNLG9CQUREO0FBRUxDLGdCQUFLO0FBQ0hqWixtQkFBTSxLQUFLcVosYUFBTCxDQUFtQnBCLEVBQUVqWSxJQUFyQixFQUEyQixJQUEzQixDQURIO0FBRUhxWCxxQkFBUVksRUFBRVosTUFBRixHQUFXLEtBQUtnQyxhQUFMLENBQW1CcEIsRUFBRVosTUFBckIsRUFBNkIsRUFBN0IsQ0FBWCxHQUE4QztBQUZuRDtBQUZBLFVBQVA7QUFPRDtBQVZrQjs7QUFBQTtBQUFBLEtBQTJDekgsVUFBM0M7QUFBQSxFQUFOLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQ0FBdE4sTUFBTTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQ0FFSjhRLElBRkksRUFFRTZFLENBRkYsRUFFSztBQUFBOztBQUN0QixhQUFJaEIsTUFBTXRaLEVBQUUrYixHQUFGLENBQU16QixFQUFFaEIsR0FBUixFQUFhO0FBQUEsa0JBQUt0WixFQUFFaU0sUUFBRixDQUFXLG1CQUFYLEVBQWdDLEVBQUVySSxPQUFPb1ksRUFBRXBZLEtBQVgsRUFBa0I0UixNQUFNLE9BQUtrRyxhQUFMLENBQW1CTSxFQUFFL04sSUFBRixDQUFPdUgsSUFBMUIsQ0FBeEIsRUFBaEMsQ0FBTDtBQUFBLFVBQWIsQ0FBVjtBQUNBLGdCQUFPO0FBQ0w2RixpQkFBTSxtQkFERDtBQUVMQyxnQkFBSztBQUNIaEMsa0JBQUssS0FBS29DLGFBQUwsQ0FBbUJwQyxHQUFuQixFQUF3QixJQUF4QixDQURGO0FBRUhJLHFCQUFRWSxFQUFFWixNQUFGLEdBQVcsS0FBS2dDLGFBQUwsQ0FBbUJwQixFQUFFWixNQUFyQixFQUE2QixFQUE3QixDQUFYLEdBQThDO0FBRm5EO0FBRkEsVUFBUDtBQU9EO0FBWGtCOztBQUFBO0FBQUEsS0FBMEN6SCxVQUExQztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDQUF0TixNQUFNO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVDQUVGOFEsSUFGRSxFQUVJO0FBQ3JCLGFBQUl4UyxJQUFJLEVBQVI7QUFDQSxhQUFJd1MsSUFBSixFQUFVO0FBQ1IsZUFBSTZFLElBQUk3RSxLQUFLeEgsSUFBTCxJQUFhLEVBQXJCOztBQUVBLGVBQUlnRixLQUFLLEtBQUt5SSxhQUFMLENBQW1CcEIsRUFBRXJILEVBQXJCLENBQVQ7QUFDQSxlQUFJa0YsT0FBTzFDLEtBQUswQyxJQUFMLEdBQVksTUFBWixHQUFxQixFQUFoQztBQUNBLGVBQUkzQyxhQUFKO0FBQ0EsZUFBSWlHLFdBQUo7O0FBRUEsZUFBSWhHLEtBQUt0RixFQUFMLENBQVEsUUFBUixDQUFKLEVBQXVCO0FBQ3JCc0wsa0JBQUssTUFBTWhHLEtBQUs3UixLQUFYLEdBQW1CLEdBQXhCO0FBQ0E0UixvQkFBTyxLQUFLa0csYUFBTCxDQUFtQnBCLEVBQUU5RSxJQUFyQixDQUFQO0FBQ0QsWUFIRCxNQUlLLElBQUlDLEtBQUt0RixFQUFMLENBQVEsV0FBUixDQUFKLEVBQTBCO0FBQzdCc0wsa0JBQUssQ0FBQ2hHLEtBQUtqQixTQUFOLElBQW1CaUIsS0FBS2hCLFNBQUwsR0FBaUIsQ0FBcEMsR0FBd0MsS0FBeEMsR0FBZ0QsR0FBckQ7QUFDQWUsb0JBQU8sS0FBS3NHLE1BQUwsQ0FBWXhCLEVBQUVqWSxJQUFkLEVBQW9CaVksRUFBRXpDLElBQXRCLEVBQTRCcEMsS0FBS2pCLFNBQUwsSUFBa0JpQixLQUFLaEIsU0FBTCxLQUFtQixDQUFqRSxDQUFQO0FBQ0Q7O0FBRUR4UixlQUFJO0FBQ0ZvWSxtQkFBTSwwQkFESjtBQUVGQyxrQkFBSyxFQUFFbkQsVUFBRixFQUFRbEYsTUFBUixFQUFZd0ksTUFBWixFQUFnQmpHLFVBQWhCO0FBRkgsWUFBSjtBQUlEO0FBQ0QsZ0JBQU92UyxDQUFQO0FBQ0Q7QUEzQmtCOztBQUFBO0FBQUEsS0FBNENnUCxVQUE1QztBQUFBLEVBQU4sQzs7Ozs7Ozs7Ozs7Ozs7O0FDRGY7Ozs7QUFDQTs7Ozs7O0FBRU8sS0FBTWdLLDRDQUFrQjtBQUM3QkMsT0FBSSxDQUR5QjtBQUU3QkMsT0FBSSxDQUZ5QjtBQUc3QkMsUUFBSyxDQUh3QjtBQUk3QkMsUUFBSyxDQUp3QjtBQUs3QkMsUUFBSyxDQUx3QjtBQU03QkMsUUFBSyxDQU53QjtBQU83QkMsUUFBSyxDQVB3QjtBQVE3QmxVLFFBQUs7QUFSd0IsRUFBeEI7O0FBV0EsS0FBTW1VLHdDQUFnQjtBQUMzQlAsT0FBSSxPQUR1QjtBQUUzQkMsT0FBSSxNQUZ1QjtBQUczQkMsUUFBSyxRQUhzQjtBQUkzQkMsUUFBSyxPQUpzQjtBQUszQkMsUUFBSyxRQUxzQjtBQU0zQkMsUUFBSyxPQU5zQjtBQU8zQkMsUUFBSztBQVBzQixFQUF0Qjs7QUFVQSxLQUFJRSwwQ0FBaUIsU0FBakJBLGNBQWlCO0FBQUEsVUFBUTFjLEVBQUU0SCxRQUFGLENBQVd5RSxJQUFYLElBQW1CQSxJQUFuQixHQUEwQjRQLGdCQUFnQjVQLElBQWhCLENBQWxDO0FBQUEsRUFBckI7O0tBRU1zUSxNLFdBQUFBLE07QUFFWCxtQkFBYTVZLElBQWIsRUFBbUI7QUFBQTs7QUFDakIsVUFBSzZZLEtBQUwsR0FBYTdZLEtBQUs4WSxPQUFMLENBQWEsYUFBYixDQUFiO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLENBQVo7QUFDQSxVQUFLQyxPQUFMLEdBQWUsS0FBS0QsSUFBTCxHQUFZLEtBQUtGLEtBQWpCLEdBQXlCLENBQXhDOztBQUVBLFVBQUtJLE9BQUwsR0FBZSxJQUFJeGMsV0FBSixDQUFnQixLQUFLb2MsS0FBckIsQ0FBZjs7QUFFQSxVQUFLSyxLQUFMLEdBQWEsSUFBSXJjLFVBQUosQ0FBZSxLQUFLb2MsT0FBcEIsQ0FBYjs7QUFFQSxVQUFLRSxLQUFMLEdBQWEsSUFBSUMsUUFBSixDQUFhLEtBQUtILE9BQWxCLENBQWI7O0FBRUEsVUFBS0ksSUFBTCxHQUFZO0FBQ1ZsQixXQUFJLE9BRE07QUFFVkMsV0FBSSxNQUZNO0FBR1ZDLFlBQUssUUFISztBQUlWQyxZQUFLLE9BSks7QUFLVkMsWUFBSyxRQUxLO0FBTVZDLFlBQUssT0FOSztBQU9WQyxZQUFLO0FBUEssTUFBWjtBQVNEOzs7OzBCQUVLdlosQyxFQUFHLENBQ1I7Ozs2QkFFUTtBQUNQLGNBQU8sS0FBS29hLEtBQUwsRUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxZQUFLSCxLQUFMLEdBQWEsSUFBYjtBQUNBLFlBQUtELEtBQUwsR0FBYSxJQUFiO0FBQ0EsWUFBS0QsT0FBTCxHQUFlLElBQWY7QUFDRDs7OzZCQVdhO0FBQUEsV0FBUDFDLENBQU8sdUVBQUgsQ0FBRzs7QUFDWixZQUFLZ0QsSUFBTCxDQUFVLENBQVYsRUFBYSxLQUFLUixJQUFsQixFQUF3QixLQUFLRixLQUE3QjtBQUNBLGNBQU8sSUFBUDtBQUNEOzs7Z0NBRVdXLEksRUFBYztBQUFBLFdBQVJDLEVBQVEsdUVBQUgsQ0FBRzs7QUFDeEIsV0FBSUQsT0FBTyxLQUFLVCxJQUFaLElBQW9CUyxPQUFPQyxFQUFQLEdBQVksS0FBS1QsT0FBekMsRUFBa0Q7QUFDaEQsY0FBS1UsR0FBTCxDQUFTLElBQVQ7QUFDRDtBQUNELGNBQU8sSUFBUDtBQUNEOzs7d0JBR0dwUixJLEVBQU1rUixJLEVBQWU7QUFDdkIsV0FBSUMsS0FBS3ZCLGdCQUFnQjVQLElBQWhCLENBQVQ7QUFDQSxXQUFJeEosS0FBSyxLQUFLcWEsS0FBTCxDQUFXLFFBQVEsS0FBS0UsSUFBTCxDQUFVL1EsSUFBVixDQUFuQixDQUFUOztBQUZ1Qix5Q0FBTmhLLElBQU07QUFBTkEsYUFBTTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUd2Qiw4QkFBY0EsSUFBZCw4SEFBb0I7QUFBQSxlQUFYNUIsQ0FBVzs7QUFDbEJvQyxjQUFHdUUsSUFBSCxDQUFRLEtBQUs4VixLQUFiLEVBQW9CSyxJQUFwQixFQUEwQjljLENBQTFCO0FBQ0E4YyxtQkFBUUMsRUFBUjtBQUNEO0FBTnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT3ZCLGNBQU9ELElBQVA7QUFDRDs7OzJCQUVNbFIsSSxFQUFNa1IsSSxFQUFlO0FBQUEsMENBQU5sYixJQUFNO0FBQU5BLGFBQU07QUFBQTs7QUFDMUIsWUFBS3FiLFVBQUwsQ0FBZ0JILElBQWhCLEVBQXNCbGIsS0FBSzRGLE1BQUwsR0FBY2dVLGdCQUFnQjVQLElBQWhCLENBQXBDO0FBQ0EsWUFBS3NSLEVBQUwsY0FBUXRSLElBQVIsRUFBY2tSLElBQWQsU0FBdUJsYixJQUF2QjtBQUNEOzs7d0JBRUdnSyxJLEVBQU1rUixJLEVBQU07QUFBRSxjQUFPLEtBQUtMLEtBQUwsQ0FBVyxRQUFRLEtBQUtFLElBQUwsQ0FBVS9RLElBQVYsQ0FBbkIsRUFBb0NrUixJQUFwQyxFQUEwQ0ssSUFBSUMsWUFBOUMsQ0FBUDtBQUFvRTs7O3lCQUVqRk4sSSxFQUFNO0FBQUUsY0FBTyxLQUFLTyxFQUFMLENBQVEsSUFBUixFQUFjUCxJQUFkLENBQVA7QUFBNEI7Ozt5QkFFcENBLEksRUFBTTtBQUFFLGNBQU8sS0FBS08sRUFBTCxDQUFRLEtBQVIsRUFBZVAsSUFBZixDQUFQO0FBQTZCOzs7eUJBRXJDQSxJLEVBQU07QUFBRSxjQUFPLEtBQUtPLEVBQUwsQ0FBUSxLQUFSLEVBQWVQLElBQWYsQ0FBUDtBQUE2Qjs7O3lCQUVyQ0EsSSxFQUFNO0FBQUUsY0FBTyxLQUFLTyxFQUFMLENBQVEsS0FBUixFQUFlUCxJQUFmLENBQVA7QUFBNkI7OzsyQkFFbkNsUixJLEVBQU1rUixJLEVBQU07QUFDakIsWUFBS0csVUFBTCxDQUFnQkgsSUFBaEIsRUFBc0J0QixnQkFBZ0I1UCxJQUFoQixDQUF0QjtBQUNBLGNBQU8sS0FBS3lSLEVBQUwsQ0FBUXpSLElBQVIsRUFBY2tSLElBQWQsQ0FBUDtBQUNEOzs7d0JBRUdsUixJLEVBQU1rUixJLEVBQU0zWixLLEVBQU87QUFBRSxZQUFLc1osS0FBTCxDQUFXLFFBQVEsS0FBS0UsSUFBTCxDQUFVL1EsSUFBVixDQUFuQixFQUFvQ2tSLElBQXBDLEVBQTBDM1osS0FBMUMsRUFBaURnYSxJQUFJQyxZQUFyRDtBQUFvRTs7O3lCQUV4Rk4sSSxFQUFNM1osSyxFQUFPO0FBQUUsWUFBS21hLEVBQUwsQ0FBUSxJQUFSLEVBQWNSLElBQWQsRUFBb0IzWixLQUFwQjtBQUE0Qjs7O3lCQUUzQzJaLEksRUFBTTNaLEssRUFBTztBQUFFLFlBQUttYSxFQUFMLENBQVEsS0FBUixFQUFlUixJQUFmLEVBQXFCM1osS0FBckI7QUFBNkI7Ozt5QkFFNUMyWixJLEVBQU0zWixLLEVBQU87QUFBRSxZQUFLbWEsRUFBTCxDQUFRLEtBQVIsRUFBZVIsSUFBZixFQUFxQjNaLEtBQXJCO0FBQTZCOzs7eUJBRTVDMlosSSxFQUFNM1osSyxFQUFPO0FBQUUsWUFBS21hLEVBQUwsQ0FBUSxLQUFSLEVBQWVSLElBQWYsRUFBcUIzWixLQUFyQjtBQUE2Qjs7OzJCQUUxQ3lJLEksRUFBTWtSLEksRUFBTTNaLEssRUFBTztBQUN4QixZQUFLOFosVUFBTCxDQUFnQkgsSUFBaEIsRUFBc0J0QixnQkFBZ0I1UCxJQUFoQixDQUF0QjtBQUNBLFlBQUswUixFQUFMLENBQVExUixJQUFSLEVBQWNrUixJQUFkLEVBQW9CM1osS0FBcEI7QUFDRDs7O3lCQUVJMlosSSxFQUFNblUsSSxFQUFNO0FBQUUsY0FBTyxLQUFLNlQsS0FBTCxDQUFXekwsS0FBWCxDQUFpQitMLElBQWpCLEVBQXVCQSxPQUFPblUsSUFBUCxHQUFjLENBQXJDLENBQVA7QUFBZ0Q7Ozs0QkFFM0RtVSxJLEVBQU1uVSxJLEVBQU07QUFDbEIsWUFBS3NVLFVBQUwsQ0FBZ0JILElBQWhCLEVBQXNCblUsSUFBdEI7QUFDQSxjQUFPLEtBQUs0VSxHQUFMLENBQVNULElBQVQsRUFBZW5VLElBQWYsQ0FBUDtBQUNEOzs7eUJBRUltVSxJLEVBQU1uVSxJLEVBQU07QUFDZixXQUFJcEosRUFBRW1KLFFBQUYsQ0FBV29VLElBQVgsQ0FBSixFQUFzQjtBQUFHO0FBQ3ZCLGdCQUFPQSxJQUFQO0FBQ0Q7O0FBRUQsV0FBSXBWLElBQUksRUFBUjtBQUNBaUIsY0FBT0EsUUFBUTZTLGdCQUFnQjNULEdBQS9CO0FBQ0EsV0FBSTJWLFNBQVN6VixLQUFLd0IsR0FBTCxDQUFTdVQsT0FBT25VLElBQVAsR0FBYyxDQUF2QixFQUEwQixLQUFLMlQsT0FBL0IsQ0FBYjtBQUNBLFdBQUltQixNQUFNLEtBQUtqQixLQUFmO0FBQ0EsY0FBT00sUUFBUVUsTUFBZixFQUF1QjtBQUNyQixhQUFJdGQsSUFBSXVkLElBQUlYLE1BQUosQ0FBUjtBQUNBLGFBQUk1YyxNQUFNLENBQVYsRUFBYTtBQUNYO0FBQ0QsVUFGRCxNQUdLO0FBQ0h3SCxnQkFBS3dDLE9BQU9DLFlBQVAsQ0FBb0JqSyxDQUFwQixDQUFMO0FBQ0Q7QUFDRjtBQUNELGNBQU93SCxDQUFQO0FBQ0Q7Ozs0QkFFT29WLEksRUFBTW5VLEksRUFBTTtBQUNsQixZQUFLc1UsVUFBTCxDQUFnQkgsSUFBaEIsRUFBc0IvVSxLQUFLd0IsR0FBTCxDQUFTWixRQUFRLENBQWpCLEVBQW9CNlMsZ0JBQWdCM1QsR0FBcEMsQ0FBdEI7QUFDQSxjQUFPLEtBQUs2VixHQUFMLENBQVNaLElBQVQsRUFBZW5VLElBQWYsQ0FBUDtBQUNEOzs7eUJBRUltVSxJLEVBQU0zWixLLEVBQU93RixJLEVBQU07QUFBRSxZQUFLNlQsS0FBTCxDQUFXbUIsR0FBWCxDQUFleGEsTUFBTXlhLFFBQU4sQ0FBZSxDQUFmLEVBQWtCalYsUUFBUXhGLE1BQU1xRyxVQUFoQyxDQUFmLEVBQTREc1QsSUFBNUQ7QUFBbUU7Ozs0QkFFckZBLEksRUFBTTNaLEssRUFBT3dGLEksRUFBTTtBQUN6QixZQUFLc1UsVUFBTCxDQUFnQkgsSUFBaEIsRUFBc0IvVSxLQUFLd0IsR0FBTCxDQUFTWixRQUFRLENBQWpCLEVBQW9CeEYsTUFBTXFHLFVBQTFCLENBQXRCO0FBQ0EsWUFBS3FVLEdBQUwsQ0FBU2YsSUFBVCxFQUFlM1osS0FBZixFQUFzQndGLElBQXRCO0FBQ0Q7Ozt5QkFFSW1VLEksRUFBTWpWLEcsRUFBS2MsSSxFQUFNO0FBQ3BCQSxjQUFPQSxRQUFRNlMsZ0JBQWdCM1QsR0FBaEIsR0FBc0IsQ0FBckM7QUFDQSxXQUFJN0gsSUFBSVQsRUFBRStiLEdBQUYsQ0FBTXpULElBQUk0SCxLQUFKLENBQVUsRUFBVixDQUFOLEVBQXFCO0FBQUEsZ0JBQUtoSSxFQUFFcVcsVUFBRixDQUFhLENBQWIsQ0FBTDtBQUFBLFFBQXJCLENBQVI7QUFDQTlkLFNBQUV3SCxNQUFGLEdBQVdPLEtBQUt3QixHQUFMLENBQVNaLElBQVQsRUFBZTNJLEVBQUV3SCxNQUFqQixDQUFYO0FBQ0EsWUFBS3FWLElBQUwsQ0FBVSxDQUFWLEVBQWFDLElBQWIsRUFBbUJuVSxJQUFuQjtBQUNBLFlBQUs2VCxLQUFMLENBQVdtQixHQUFYLENBQWUzZCxDQUFmLEVBQWtCOGMsSUFBbEI7QUFDRDs7OzRCQUVPQSxJLEVBQU1qVixHLEVBQUtjLEksRUFBTTtBQUN2QixZQUFLc1UsVUFBTCxDQUFnQkgsSUFBaEIsRUFBc0IvVSxLQUFLd0IsR0FBTCxDQUFTWixJQUFULEVBQWU2UyxnQkFBZ0IzVCxHQUEvQixDQUF0QjtBQUNBLFlBQUtrVyxHQUFMLENBQVNqQixJQUFULEVBQWVqVixHQUFmLEVBQW9CYyxJQUFwQjtBQUNEOzs7MEJBRUt4RixLLEVBQU82YSxHLEVBQUtyVixJLEVBQU07QUFBRSxZQUFLNlQsS0FBTCxDQUFXSyxJQUFYLENBQWdCMVosU0FBUyxDQUF6QixFQUE0QjZhLEdBQTVCLEVBQWlDQSxNQUFNclYsSUFBdkM7QUFBOEM7Ozs2QkFFL0R4RixLLEVBQU82YSxHLEVBQUtyVixJLEVBQU07QUFDekIsWUFBS3NVLFVBQUwsQ0FBZ0JlLEdBQWhCLEVBQXFCclYsSUFBckI7QUFDQSxZQUFLa1UsSUFBTCxDQUFVMVosS0FBVixFQUFpQjZhLEdBQWpCLEVBQXNCclYsSUFBdEI7QUFDRDs7OzBCQUVLOEssRyxFQUFLd0ssRyxFQUFLdFYsSSxFQUFNO0FBQUUsWUFBSzZULEtBQUwsQ0FBVzBCLFVBQVgsQ0FBc0JELEdBQXRCLEVBQTJCeEssR0FBM0IsRUFBZ0NBLE1BQU05SyxJQUFOLEdBQWEsQ0FBN0M7QUFBaUQ7Ozs2QkFFaEU4SyxHLEVBQUt3SyxHLEVBQUt0VixJLEVBQU07QUFDdkIsWUFBS3NVLFVBQUwsQ0FBZ0J4SixHQUFoQixFQUFxQjlLLElBQXJCO0FBQ0EsWUFBS3NVLFVBQUwsQ0FBZ0JnQixHQUFoQixFQUFxQnRWLElBQXJCO0FBQ0EsWUFBS3dWLElBQUwsQ0FBVTFLLEdBQVYsRUFBZXdLLEdBQWYsRUFBb0J0VixJQUFwQjtBQUNEOzs7MEJBRUttVSxJLEVBQW1CO0FBQUEsV0FBYmxSLElBQWEsdUVBQU4sSUFBTTs7QUFDdkIsV0FBSXpJLGNBQUo7QUFDQSxXQUFJNUQsRUFBRTRILFFBQUYsQ0FBV3lFLElBQVgsQ0FBSixFQUFzQjtBQUNwQnpJLGlCQUFRLEtBQUtxWixLQUFMLENBQVd6TCxLQUFYLENBQWlCK0wsSUFBakIsRUFBdUJBLE9BQU9sUixJQUFQLEdBQWMsQ0FBckMsQ0FBUjtBQUNELFFBRkQsTUFHSyxJQUFJQSxTQUFTLEtBQWIsRUFBb0I7QUFDdkJ6SSxpQkFBUSxLQUFLdWEsR0FBTCxDQUFTWixJQUFULENBQVI7QUFDRCxRQUZJLE1BR0E7QUFDSDNaLGlCQUFRLEtBQUtrYSxFQUFMLENBQVF6UixJQUFSLEVBQWNrUixJQUFkLENBQVI7QUFDRDtBQUNELGNBQU8zWixLQUFQO0FBQ0Q7OzsyQkFFTUEsSyxFQUFPMlosSSxFQUFtQjtBQUFBLFdBQWJsUixJQUFhLHVFQUFOLElBQU07O0FBQy9CLFdBQUltUixXQUFKO0FBQ0EsV0FBSXhkLEVBQUU0SCxRQUFGLENBQVd5RSxJQUFYLENBQUosRUFBc0I7QUFDcEIsY0FBSzRRLEtBQUwsQ0FBV21CLEdBQVgsQ0FBZXhhLE1BQU15YSxRQUFOLENBQWUsQ0FBZixFQUFrQmhTLE9BQU8sQ0FBekIsQ0FBZixFQUE0Q2tSLElBQTVDO0FBQ0FDLGNBQUtuUixJQUFMO0FBQ0QsUUFIRCxNQUlLLElBQUlBLFNBQVMsS0FBYixFQUFvQjtBQUN2QixjQUFLbVMsR0FBTCxDQUFTakIsSUFBVCxFQUFlM1osS0FBZjtBQUNBNFosY0FBS3ZCLGdCQUFnQjVQLElBQWhCLENBQUw7QUFDRCxRQUhJLE1BSUE7QUFDSCxjQUFLMFIsRUFBTCxDQUFRMVIsSUFBUixFQUFja1IsSUFBZCxFQUFvQjNaLEtBQXBCO0FBQ0E0WixjQUFLdkIsZ0JBQWdCNVAsSUFBaEIsQ0FBTDtBQUNEO0FBQ0QsY0FBT2tSLE9BQU9DLEVBQWQ7QUFDRDs7OzRCQUU0QjtBQUFBLFdBQXZCRCxJQUF1Qix1RUFBaEIsQ0FBZ0I7QUFBQSxXQUFiblUsSUFBYSx1RUFBTixJQUFNOztBQUMzQmhHLGVBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCK0YsSUFBdkIsRUFBNkIsd0JBQTdCLEVBQXVELGtCQUFJbVUsSUFBSixDQUF2RDtBQUNBbmEsZUFBUUMsR0FBUixDQUFZLGVBQUt3YixJQUFMLENBQVUsS0FBSzdCLE9BQWYsRUFBd0IsRUFBRWxOLFFBQVF5TixJQUFWLEVBQWdCdFYsUUFBUW1CLElBQXhCLEVBQThCSSxPQUFPLEVBQXJDLEVBQXlDQyxNQUFNLE9BQS9DLEVBQXdEQyxRQUFRLENBQWhFLEVBQXhCLENBQVo7QUFDRDs7O3lCQXpLVztBQUFFLGNBQU8sS0FBS29WLEtBQVo7QUFBbUI7Ozt5QkFFbkI7QUFBRSxjQUFPLEtBQUs5QixPQUFaO0FBQXFCOzs7eUJBQ3pCO0FBQUUsY0FBTyxLQUFLQyxLQUFaO0FBQW1COzs7eUJBQ3JCO0FBQUUsY0FBTyxLQUFLQyxLQUFaO0FBQW1COzs7eUJBQ3RCO0FBQUUsY0FBTyxLQUFLSixJQUFaO0FBQWtCOzs7eUJBQ2pCO0FBQUUsY0FBTyxLQUFLQyxPQUFaO0FBQXFCOzs7eUJBQ3pCO0FBQUUsY0FBTyxLQUFLSCxLQUFaO0FBQW1COzs7Ozs7Ozs7O0FDdEVuQyxrQzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztLQUdxQm1DLGE7QUFFbkIsMEJBQWFoYixJQUFiLEVBQW1CO0FBQUE7O0FBQ2pCLFVBQUsrYSxLQUFMLEdBQWEvYSxJQUFiOztBQUVBLFVBQUtpYixjQUFMLEdBQXNCamIsS0FBSzhZLE9BQUwsQ0FBYSw4QkFBYixDQUF0Qjs7QUFFQSxVQUFLbGQsS0FBTDtBQUNEOzs7OzZCQUVRO0FBQ1AsWUFBS3NmLE9BQUwsR0FBZSxFQUFmO0FBQ0EsWUFBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxjQUFPLEtBQUtDLE9BQUwsRUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxZQUFLQSxPQUFMO0FBQ0EsWUFBS0YsT0FBTCxHQUFlLEVBQWY7QUFDQSxZQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNEOzs7MEJBRUtqYyxDLEVBQUc7QUFDUCxXQUFJQSxJQUFJLEtBQUtpYyxLQUFULElBQWtCLEtBQUtGLGNBQTNCLEVBQTJDO0FBQ3pDLGNBQUtHLE9BQUw7QUFDQSxjQUFLRCxLQUFMLEdBQWFqYyxDQUFiO0FBQ0Q7QUFDRjs7OzRCQXVCT29KLEksRUFBTVEsSyxFQUFPO0FBQ25CQSxlQUFRQSxTQUFTLENBQWpCO0FBQ0EsV0FBSXpELE9BQU8sNEJBQWVpRCxJQUFmLElBQXVCUSxLQUFsQztBQUNBLFdBQUloRCxJQUFJLENBQVI7O0FBSG1CO0FBQUE7QUFBQTs7QUFBQTtBQUtuQiw4QkFBYyxLQUFLb1YsT0FBbkIsOEhBQTRCO0FBQUEsZUFBbkIxZSxDQUFtQjs7QUFDMUIsZUFBSUEsRUFBRTBkLE1BQUYsR0FBV3BVLENBQWYsRUFBa0I7QUFDaEJBLGlCQUFJdEosRUFBRTBkLE1BQU47QUFDRDs7QUFFRCxlQUFJLENBQUMxZCxFQUFFNmUsSUFBSCxJQUFXN2UsRUFBRTZJLElBQUYsSUFBVUEsSUFBekIsRUFBK0I7QUFDN0IsaUJBQUk3SSxFQUFFNkksSUFBRixLQUFXQSxJQUFmLEVBQXFCO0FBQ25CN0ksaUJBQUU2ZSxJQUFGLEdBQVMsSUFBVDtBQUNBLHNCQUFPN2UsRUFBRWtlLEdBQVQ7QUFDRDtBQUNELGlCQUFJWSxLQUFLOWUsRUFBRTBkLE1BQVg7QUFDQTFkLGVBQUUwZCxNQUFGLEdBQVcxZCxFQUFFa2UsR0FBRixHQUFRclYsSUFBUixHQUFlLENBQTFCO0FBQ0E3SSxlQUFFNkksSUFBRixHQUFTQSxJQUFUO0FBQ0E3SSxlQUFFc00sS0FBRixHQUFVQSxLQUFWO0FBQ0F0TSxlQUFFNmUsSUFBRixHQUFTLElBQVQ7O0FBRUEsa0JBQUtILE9BQUwsQ0FBYTllLElBQWIsQ0FBa0IsRUFBRXNlLEtBQUtsZSxFQUFFMGQsTUFBRixHQUFXLENBQWxCLEVBQXFCQSxRQUFRb0IsRUFBN0IsRUFBaUNqVyxNQUFNaVcsTUFBTTllLEVBQUUwZCxNQUFGLEdBQVcsQ0FBakIsQ0FBdkMsRUFBNERwUixZQUE1RCxFQUFtRVIsVUFBbkUsRUFBeUUrUyxNQUFNLEtBQS9FLEVBQWxCOztBQUVBLG9CQUFPN2UsRUFBRWtlLEdBQVQ7QUFDRDtBQUNGO0FBekJrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTJCbkIsV0FBSTVVLElBQUlULElBQUosR0FBVyxLQUFLa1csU0FBcEIsRUFBK0I7QUFDN0IxQixhQUFJSCxHQUFKO0FBQ0EsZ0JBQU8sQ0FBUDtBQUNEOztBQUVELFdBQUlGLE9BQU8xVCxJQUFJLENBQWY7O0FBRUEsWUFBS29WLE9BQUwsQ0FBYTllLElBQWIsQ0FBa0IsRUFBRXNlLEtBQUtsQixJQUFQLEVBQWFVLFFBQVFWLE9BQU9uVSxJQUFQLEdBQWMsQ0FBbkMsRUFBc0NBLFVBQXRDLEVBQTRDeUQsWUFBNUMsRUFBbURSLFVBQW5ELEVBQXlEK1MsTUFBTSxJQUEvRCxFQUFsQjs7QUFFQXhCLFdBQUlOLElBQUosQ0FBUyxDQUFULEVBQVlDLElBQVosRUFBa0JuVSxJQUFsQjs7QUFFQSxjQUFPbVUsSUFBUDtBQUNEOzs7MkJBRU1sUixJLEVBQU1RLEssRUFBaUI7QUFDNUIsV0FBSTBRLE9BQU8sS0FBS2dDLE1BQUwsQ0FBWWxULElBQVosRUFBa0JRLEtBQWxCLENBQVg7O0FBRDRCLHlDQUFQakosS0FBTztBQUFQQSxjQUFPO0FBQUE7O0FBRzVCLFdBQUlBLEtBQUosRUFBVztBQUNULGFBQUl3RixPQUFPLDRCQUFlaUQsSUFBZixJQUF1QlEsS0FBbEM7QUFDQSxhQUFJcE0sSUFBSThjLElBQVI7QUFGUztBQUFBO0FBQUE7O0FBQUE7QUFHVCxpQ0FBYzNaLEtBQWQsbUlBQXFCO0FBQUEsaUJBQVo4RyxDQUFZOztBQUNuQmtULGlCQUFJN1UsS0FBSixDQUFVMkIsQ0FBVixFQUFhakssQ0FBYixFQUFnQjRMLElBQWhCO0FBQ0E1TCxrQkFBSzJJLElBQUw7QUFDRDtBQU5RO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPVjs7QUFFRCxjQUFPbVUsSUFBUDtBQUNEOzs7MEJBRUtBLEksRUFBTTtBQUNWLFdBQUloZCxJQUFJLEtBQUttVyxLQUFMLENBQVc2RyxJQUFYLENBQVI7QUFDQSxXQUFJaGQsQ0FBSixFQUFPO0FBQ0xBLFdBQUU2ZSxJQUFGLEdBQVMsS0FBVDtBQUNEO0FBQ0Y7OzsyQkFFTTdCLEksRUFBTTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNYLCtCQUFjLEtBQUswQixPQUFuQixtSUFBNEI7QUFBQSxlQUFuQjFlLENBQW1COztBQUMxQixlQUFJQSxFQUFFa2UsR0FBRixLQUFVbEIsSUFBZCxFQUFvQjtBQUNsQixvQkFBT2hkLENBQVA7QUFDRDtBQUNGO0FBTFU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNWCxjQUFPLElBQVA7QUFDRDs7OzBCQUVLZ2QsSSxFQUFNO0FBQ1YsV0FBSWhkLElBQUksS0FBS21XLEtBQUwsQ0FBVzZHLElBQVgsQ0FBUjtBQUNBLGNBQU9oZCxLQUFLQSxFQUFFNmUsSUFBUCxHQUFjN2UsRUFBRThMLElBQWhCLEdBQXVCLElBQTlCO0FBQ0Q7OzswQkFFS2tSLEksRUFBTTtBQUNWLFdBQUloZCxJQUFJLEtBQUttVyxLQUFMLENBQVc2RyxJQUFYLENBQVI7QUFDQSxjQUFPaGQsS0FBS0EsRUFBRTZlLElBQVAsR0FBYzdlLEVBQUU2SSxJQUFoQixHQUF1QixDQUFDLENBQS9CO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUlTLElBQUksRUFBUjtBQURTO0FBQUE7QUFBQTs7QUFBQTtBQUVULCtCQUFjLEtBQUtvVixPQUFuQixtSUFBNEI7QUFBQSxlQUFuQjFlLENBQW1COztBQUMxQixlQUFJLENBQUNBLEVBQUU2ZSxJQUFQLEVBQWE7QUFDWHZWLGVBQUUxSixJQUFGLENBQU9JLENBQVA7QUFDRDtBQUNGO0FBTlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPVCxZQUFLMGUsT0FBTCxHQUFlcFYsQ0FBZjtBQUNBLGNBQU8sSUFBUDtBQUNEOzs7NEJBRU87QUFDTnpHLGVBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQyxZQUF0QyxFQUFvRCwyQkFBWSxLQUFLaWMsU0FBakIsQ0FBcEQsRUFBaUYsT0FBakYsRUFBMEYsMkJBQVksS0FBS0UsUUFBakIsQ0FBMUYsRUFBc0gsT0FBdEgsRUFBK0gsMkJBQVksS0FBS0MsUUFBakIsQ0FBL0g7QUFETTtBQUFBO0FBQUE7O0FBQUE7QUFFTiwrQkFBYyxLQUFLUixPQUFuQixtSUFBNEI7QUFBQSxlQUFuQjFlLENBQW1COztBQUMxQjZDLG1CQUFRQyxHQUFSLENBQVksRUFBWjtBQUNBRCxtQkFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJ1YSxJQUFJalYsR0FBSixDQUFRcEksRUFBRWtlLEdBQVYsRUFBZSxFQUFmLENBQXZCLEVBQTJDLE9BQTNDLEVBQW9ELEtBQUtyVixJQUFMLENBQVU3SSxFQUFFa2UsR0FBWixDQUFwRCxFQUFzRSxPQUF0RSxFQUErRSxLQUFLcFMsSUFBTCxDQUFVOUwsRUFBRWtlLEdBQVosQ0FBL0U7QUFDQXJiLG1CQUFRQyxHQUFSLENBQVksZUFBS3diLElBQUwsQ0FBVWpCLElBQUk4QixVQUFkLEVBQTBCLEVBQUU1UCxRQUFRdlAsRUFBRWtlLEdBQVosRUFBaUJ4VyxRQUFRTyxLQUFLd0IsR0FBTCxDQUFTLEdBQVQsRUFBY3pKLEVBQUU2SSxJQUFoQixDQUF6QixFQUFnREksT0FBTyxFQUF2RCxFQUEyREMsTUFBTSxPQUFqRSxFQUEwRUMsUUFBUSxDQUFsRixFQUExQixDQUFaO0FBQ0Q7QUFOSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT1A7Ozt5QkF6SFc7QUFBRSxjQUFPLEtBQUtvVixLQUFaO0FBQW1COzs7eUJBQ25CO0FBQUUsY0FBTyxLQUFLQSxLQUFMLENBQVd4UyxNQUFsQjtBQUEwQjs7O3lCQUU1QjtBQUFFLGNBQU8sS0FBSzJTLE9BQVo7QUFBcUI7Ozt5QkFDekI7QUFBRSxjQUFPLEtBQUtDLEtBQVo7QUFBbUI7Ozt5QkFDWjtBQUFFLGNBQU8sS0FBS0YsY0FBWjtBQUE0Qjs7O3lCQUVsQztBQUFFLGNBQU8sS0FBS0YsS0FBTCxDQUFXMVYsSUFBbEI7QUFBd0I7Ozt5QkFFM0I7QUFDZCxXQUFJQSxPQUFPLENBQVg7QUFEYztBQUFBO0FBQUE7O0FBQUE7QUFFZCwrQkFBYyxLQUFLNlYsT0FBbkIsbUlBQTRCO0FBQUEsZUFBbkIxZSxDQUFtQjs7QUFDMUIsZUFBSUEsRUFBRTZlLElBQU4sRUFBWTtBQUNWaFcscUJBQVE3SSxFQUFFNkksSUFBVjtBQUNEO0FBQ0Y7QUFOYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9kLGNBQU9BLElBQVA7QUFDRDs7O3lCQUVlO0FBQUUsY0FBTyxLQUFLa1csU0FBTCxHQUFpQixLQUFLRSxRQUE3QjtBQUF1Qzs7Ozs7O21CQWhEdENULGE7Ozs7OztBQ0xyQiwwQzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQTs7OztLQUVNWSxVO0FBRUosdUJBQWFDLEtBQWIsRUFBd0Y7QUFBQSxTQUFwRTlQLE1BQW9FLHVFQUEzRCxDQUEyRDtBQUFBLFNBQXhEaEcsR0FBd0QsdUVBQWxELEdBQWtEO0FBQUEsU0FBN0N1QyxJQUE2Qyx1RUFBdEMsa0JBQVNBLElBQTZCO0FBQUEsU0FBdkJqRCxJQUF1QjtBQUFBLFNBQWpCeVcsT0FBaUIsdUVBQVAsS0FBTzs7QUFBQTs7QUFDdEYsVUFBSzdlLE1BQUwsR0FBYzRlLEtBQWQ7O0FBRUEsVUFBS0UsSUFBTCxHQUFZaFcsR0FBWjtBQUNBLFVBQUs4UyxLQUFMLEdBQWF4VCxRQUFRLDRCQUFlaUQsSUFBZixDQUFyQjtBQUNBLFVBQUt5USxJQUFMLEdBQVloTixNQUFaO0FBQ0EsVUFBS2lOLE9BQUwsR0FBZSxLQUFLRCxJQUFMLEdBQVksS0FBS0YsS0FBakIsR0FBeUIsQ0FBeEM7QUFDQSxVQUFLaE4sS0FBTCxHQUFhdkQsSUFBYjtBQUNBLFVBQUswVCxRQUFMLEdBQWdCRixXQUFXLEtBQTNCOztBQUVBLFVBQUs3USxJQUFMLENBQVUsS0FBSzhOLElBQWYsSUFBdUIsSUFBdkI7QUFDRDs7Ozs2QkFFUTtBQUNQLFlBQUtrRCxJQUFMLEdBQVksS0FBS2xELElBQWpCO0FBQ0Q7OzsrQkFFVTtBQUNULFlBQUs5TixJQUFMLENBQVUsS0FBSzhOLElBQWYsSUFBdUJuYSxTQUF2QjtBQUNEOzs7NEJBaUJlO0FBQ2QsV0FBSTZhLEtBQUssS0FBS1osS0FBZDtBQUNBLFdBQUkzWixJQUFJLEtBQUsyTSxLQUFiO0FBQ0EsV0FBSTZPLE1BQU0sS0FBSzNCLElBQWY7QUFDQSxXQUFJbUIsU0FBUyxLQUFLbEIsT0FBbEI7QUFDQSxXQUFJOEMsVUFBVSxLQUFLRSxRQUFuQjs7QUFMYyx5Q0FBUG5jLEtBQU87QUFBUEEsY0FBTztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQU1kLDhCQUFjQSxLQUFkLDhIQUFxQjtBQUFBLGVBQVo4RyxDQUFZOztBQUNuQixlQUFJbVYsV0FBVyxLQUFLRyxJQUFMLElBQWEvQixNQUE1QixFQUFvQztBQUNsQyxrQkFBS1csSUFBTCxDQUFVSCxNQUFNakIsRUFBaEIsRUFBb0JpQixHQUFwQixFQUF5QlIsU0FBU1QsRUFBbEM7QUFDQSxrQkFBS3dDLElBQUwsSUFBYXhDLEVBQWI7QUFDRDtBQUNELGVBQUksS0FBS3dDLElBQUwsR0FBWXhDLEVBQVosR0FBaUJTLE1BQXJCLEVBQTZCO0FBQzNCLGtCQUFLbFYsS0FBTCxDQUFXMkIsQ0FBWCxFQUFjLEtBQUtzVixJQUFuQixFQUF5Qi9jLENBQXpCO0FBQ0Esa0JBQUsrYyxJQUFMLElBQWF4QyxFQUFiO0FBQ0QsWUFIRCxNQUlLO0FBQ0gseUNBQWMsSUFBZDtBQUNBO0FBQ0Q7QUFDRjtBQW5CYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JmOzs7MkJBRU07QUFDTCxXQUFJLEtBQUt3QyxJQUFMLEdBQVksS0FBS2xELElBQXJCLEVBQTJCO0FBQ3pCLGNBQUtrRCxJQUFMLElBQWEsS0FBS3BELEtBQWxCO0FBQ0EsZ0JBQU8sS0FBS3FELElBQUwsQ0FBVSxLQUFLRCxJQUFmLEVBQXFCLEtBQUtwUSxLQUExQixDQUFQO0FBQ0QsUUFIRCxNQUlLO0FBQ0gscUNBQWMsSUFBZDtBQUNBLGdCQUFPLENBQVA7QUFDRDtBQUNGOzs7eUJBOUNXO0FBQUUsY0FBTyxLQUFLNU8sTUFBTCxDQUFZK0MsSUFBbkI7QUFBeUI7Ozt5QkFDMUI7QUFBRSxjQUFPLEtBQUsvQyxNQUFaO0FBQW9COzs7eUJBQ3ZCO0FBQUUsY0FBTyxLQUFLQSxNQUFMLENBQVlnTyxJQUFuQjtBQUF5Qjs7O3lCQUU1QjtBQUFFLGNBQU8sS0FBSzhOLElBQVo7QUFBa0I7Ozt5QkFDakI7QUFBRSxjQUFPLEtBQUtDLE9BQVo7QUFBcUI7Ozt5QkFDekI7QUFBRSxjQUFPLEtBQUtILEtBQVo7QUFBbUI7Ozt5QkFFdEI7QUFBRSxjQUFPLEtBQUtrRCxJQUFaO0FBQWtCOzs7eUJBQ3BCO0FBQUUsY0FBTyxLQUFLRSxJQUFaO0FBQWtCOzs7eUJBRWI7QUFBRSxjQUFPLEtBQUtGLElBQUwsR0FBWSxLQUFLbEQsS0FBeEI7QUFBK0I7Ozt5QkFDdkM7QUFBRSxjQUFPcFUsS0FBS0MsS0FBTCxDQUFXLENBQUMsS0FBS3VYLElBQUwsR0FBWSxLQUFLbEQsSUFBbEIsSUFBMEIsS0FBS0YsS0FBMUMsQ0FBUDtBQUF5RDs7O3lCQUMxRDtBQUFFLGNBQU8sS0FBS3NELFVBQUwsR0FBa0IsS0FBS2QsSUFBOUI7QUFBb0M7Ozs7OztLQXNDaENlLEs7QUFFbkIsa0JBQWFwYyxJQUFiLEVBQW1CO0FBQUE7O0FBQ2pCLFVBQUsrYSxLQUFMLEdBQWEvYSxJQUFiOztBQUVBLFVBQUtwRSxLQUFMO0FBQ0Q7Ozs7NkJBRVE7QUFDUCxZQUFLeWdCLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7OzsrQkFFVTtBQUNULFlBQUtBLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7OzswQkFJSXRRLE0sRUFBUWhHLEcsRUFBS3VDLEksRUFBTWpELEksRUFBTXlXLE8sRUFBUztBQUNyQyxXQUFJMVgsSUFBSSxLQUFLaVksS0FBTCxDQUFXdFEsTUFBWCxDQUFSO0FBQ0EsV0FBSSxDQUFDM0gsQ0FBTCxFQUFRO0FBQ04sbURBQVd3WCxVQUFYLGlCQUFzQixJQUF0Qiw4QkFBK0JVLFNBQS9CO0FBQ0QsUUFGRCxNQUdLO0FBQ0gscUNBQWMsSUFBZDtBQUNBLGdCQUFPLElBQVA7QUFDRDtBQUNGOzs7MEJBRUt2USxNLEVBQW1CO0FBQ3ZCLFdBQUkzSCxJQUFJLEtBQUtpWSxLQUFMLENBQVd0USxNQUFYLENBQVI7QUFDQSxXQUFJM0gsQ0FBSixFQUFPO0FBQUEsNENBRlEyUixNQUVSO0FBRlFBLGlCQUVSO0FBQUE7O0FBQ0wsZ0JBQU8zUixFQUFFaEksSUFBRixVQUFVMlosTUFBVixDQUFQO0FBQ0QsUUFGRCxNQUdLO0FBQ0gscUNBQWMsSUFBZDtBQUNBLGdCQUFPLENBQVA7QUFDRDtBQUNGOzs7eUJBRUloSyxNLEVBQVE7QUFDWCxXQUFJM0gsSUFBSSxLQUFLaVksS0FBTCxDQUFXdFEsTUFBWCxDQUFSO0FBQ0EsV0FBSTNILENBQUosRUFBTztBQUNMLGdCQUFPQSxFQUFFbVksR0FBRixFQUFQO0FBQ0QsUUFGRCxNQUdLO0FBQ0gscUNBQWMsSUFBZDtBQUNBLGdCQUFPLENBQVA7QUFDRDtBQUNGOzs7MEJBRUt4USxNLEVBQVE7QUFDWixXQUFJM0gsSUFBSSxLQUFLaVksS0FBTCxDQUFXdFEsTUFBWCxDQUFSO0FBQ0EsV0FBSTNILENBQUosRUFBTztBQUNMLGdCQUFPQSxFQUFFaVgsSUFBVDtBQUNELFFBRkQsTUFHSztBQUNILHFDQUFjLElBQWQ7QUFDQSxnQkFBTyxDQUFQO0FBQ0Q7QUFDRjs7O3lCQUVJdFAsTSxFQUFRO0FBQ1gsV0FBSTNILElBQUksS0FBS2lZLEtBQUwsQ0FBV3RRLE1BQVgsQ0FBUjtBQUNBLFdBQUkzSCxDQUFKLEVBQU87QUFDTCxnQkFBT0EsRUFBRTJCLEdBQVQ7QUFDRCxRQUZELE1BR0s7QUFDSCxxQ0FBYyxJQUFkO0FBQ0EsZ0JBQU8sQ0FBUDtBQUNEO0FBQ0Y7OzswQkFFS2dHLE0sRUFBUTtBQUNaLFdBQUkzSCxJQUFJLEtBQUtpWSxLQUFMLENBQVd0USxNQUFYLENBQVI7QUFDQSxXQUFJM0gsQ0FBSixFQUFPO0FBQ0wsZ0JBQU9BLEVBQUVpQixJQUFUO0FBQ0QsUUFGRCxNQUdLO0FBQ0gscUNBQWMsSUFBZDtBQUNBLGdCQUFPLENBQVA7QUFDRDtBQUNGOzs7MEJBRUswRyxNLEVBQVE7QUFDWixXQUFJM0gsSUFBSSxLQUFLaVksS0FBTCxDQUFXdFEsTUFBWCxDQUFSO0FBQ0EsV0FBSTNILENBQUosRUFBTztBQUNMLGdCQUFPQSxFQUFFa0UsSUFBVDtBQUNELFFBRkQsTUFHSztBQUNILHFDQUFjLElBQWQ7QUFDQSxnQkFBTyxDQUFQO0FBQ0Q7QUFDRjs7O3lCQTdFVztBQUFFLGNBQU8sS0FBSytULEtBQVo7QUFBbUI7Ozs7OzttQkFoQmRELEs7Ozs7Ozs7Ozs7Ozs7O0FDN0VyQjs7OztBQUVBLEtBQU1JLGVBQWUsQ0FBckI7QUFDQSxLQUFNQyxjQUFjLENBQXBCOztLQUVxQkMsUztBQUVuQixzQkFBYTFjLElBQWIsRUFBbUI7QUFBQTs7QUFDakIsVUFBS3FjLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBS3RCLEtBQUwsR0FBYS9hLElBQWI7QUFDRDs7Ozs2QkFFUTtBQUNQLFlBQUsyYyxRQUFMO0FBQ0EsY0FBTyxJQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFlBQUsvZ0IsS0FBTDtBQUNEOzs7MEJBS0ttRCxJLEVBQU07QUFBRSxjQUFPLEtBQUtzZCxLQUFMLENBQVd0ZCxJQUFYLENBQVA7QUFBeUI7Ozs0QkFFL0JBLEksRUFBTUQsRSxFQUFjO0FBQUEsV0FBVjRFLEVBQVUsdUVBQUwsR0FBSzs7QUFDMUIsV0FBSSxDQUFDLEtBQUs2TyxJQUFMLENBQVV4VCxJQUFWLENBQUwsRUFBc0I7QUFDcEIsY0FBS3NkLEtBQUwsQ0FBV3RkLElBQVgsSUFBbUIsRUFBRUEsVUFBRixFQUFRaEIsUUFBUXllLFlBQWhCLEVBQThCOVksTUFBOUIsRUFBa0M1RSxNQUFsQyxFQUFzQ3VILE1BQU0sQ0FBNUMsRUFBbkI7QUFDRCxRQUZELE1BR0s7QUFDSCxxQ0FBYyxJQUFkO0FBQ0Q7QUFDRCxjQUFPLElBQVA7QUFDRDs7OzRCQUVPdEgsSSxFQUFNO0FBQ1osV0FBSSxLQUFLd1QsSUFBTCxDQUFVeFQsSUFBVixDQUFKLEVBQXFCO0FBQ25CLGNBQUtzZCxLQUFMLENBQVd0ZCxJQUFYLEVBQWlCaEIsTUFBakIsR0FBMEJ5ZSxZQUExQjtBQUNBLGNBQUtILEtBQUwsQ0FBV3RkLElBQVgsRUFBaUJzSCxJQUFqQixHQUF3QnBJLFlBQVlDLEdBQVosRUFBeEI7QUFDRCxRQUhELE1BSUs7QUFDSCxxQ0FBYyxJQUFkO0FBQ0Q7QUFDRCxjQUFPLElBQVA7QUFDRDs7OzJCQUVNYSxJLEVBQU07QUFDWCxXQUFJLEtBQUt3VCxJQUFMLENBQVV4VCxJQUFWLENBQUosRUFBcUI7QUFDbkIsY0FBS3NkLEtBQUwsQ0FBV3RkLElBQVgsRUFBaUJoQixNQUFqQixHQUEwQjBlLFdBQTFCO0FBQ0QsUUFGRCxNQUdLO0FBQ0gscUNBQWMsSUFBZDtBQUNEO0FBQ0QsY0FBTyxJQUFQO0FBQ0Q7OzswQkFFSzFkLEksRUFBTTtBQUNWLFdBQUksS0FBS3dULElBQUwsQ0FBVXhULElBQVYsQ0FBSixFQUFxQjtBQUNuQixnQkFBTyxLQUFLc2QsS0FBTCxDQUFXdGQsSUFBWCxDQUFQO0FBQ0QsUUFGRCxNQUdLO0FBQ0gscUNBQWMsSUFBZDtBQUNEO0FBQ0QsY0FBTyxJQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLFlBQUssSUFBSW1FLENBQVQsSUFBYyxLQUFLbVosS0FBbkIsRUFBMEI7QUFDeEIsY0FBS3BkLElBQUwsQ0FBVWlFLENBQVY7QUFDRDtBQUNELFlBQUttWixLQUFMLEdBQWEsRUFBYjtBQUNBLGNBQU8sSUFBUDtBQUNEOzs7MEJBRUtuZCxDLEVBQUc7QUFDUCxZQUFLLElBQUlnRSxDQUFULElBQWMsS0FBS21aLEtBQW5CLEVBQTBCO0FBQ3hCLGFBQUlsWSxJQUFJLEtBQUtrWSxLQUFMLENBQVduWixDQUFYLENBQVI7QUFDQSxhQUFJaUIsRUFBRXBHLE1BQUYsS0FBYXllLFlBQWpCLEVBQStCO0FBQzdCLGVBQUkvWSxRQUFRdkUsSUFBSWlGLEVBQUVrQyxJQUFsQjtBQUNBLGVBQUk1QyxTQUFTVSxFQUFFVCxFQUFmLEVBQW1CO0FBQ2pCUyxlQUFFckYsRUFBRixDQUFLYSxLQUFMLENBQVcsSUFBWCxFQUFpQixDQUFDOEQsUUFBUVUsRUFBRVQsRUFBWCxDQUFqQjtBQUNBUyxlQUFFa0MsSUFBRixHQUFTbkgsQ0FBVDtBQUNEO0FBQ0Y7QUFDRjtBQUNGOzs7eUJBakVXO0FBQUUsY0FBTyxLQUFLNmIsS0FBWjtBQUFtQjs7O3lCQUNuQjtBQUFFLGNBQU8sS0FBS0EsS0FBTCxDQUFXeFMsTUFBbEI7QUFBMEI7Ozs7OzttQkFqQnZCbVUsUzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztLQUVxQkUsTTs7O0FBRW5CLG1CQUFhNWMsSUFBYixFQUFtQjtBQUFBOztBQUFBLGlIQUNYQSxJQURXOztBQUdqQixXQUFLNmMsSUFBTCxDQUFVLElBQVYsRUFBZ0IsUUFBaEIsRUFBMEIsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixPQUFwQixDQUExQjs7QUFFQSxXQUFLOWMsU0FBTCxHQUFpQixJQUFJbkMsS0FBS2tmLGtCQUFULENBQTRCLE1BQUtDLE1BQUwsR0FBYyxNQUFLQyxNQUEvQyxFQUF1RCxNQUFLQyxPQUFMLEdBQWUsTUFBS0QsTUFBM0UsRUFBbUYsRUFBbkYsQ0FBakI7QUFDQSxXQUFLamQsU0FBTCxDQUFlbWQsSUFBZixDQUFvQkMsS0FBcEIsQ0FBMEJDLFFBQTFCLEdBQXFDLFVBQXJDO0FBQ0EsV0FBS3JkLFNBQUwsQ0FBZW1kLElBQWYsQ0FBb0JDLEtBQXBCLENBQTBCRSxNQUExQixHQUFtQyxNQUFuQztBQUNBLFdBQUt0ZCxTQUFMLENBQWVtZCxJQUFmLENBQW9CaE8sRUFBcEIsR0FBeUIsUUFBekI7QUFDQW9PLGNBQVN4SixJQUFULENBQWN5SixXQUFkLENBQTBCLE1BQUt4ZCxTQUFMLENBQWVtZCxJQUF6Qzs7QUFFQSxXQUFLcGQsTUFBTCxHQUFjLElBQUlsQyxLQUFLNGYsU0FBVCxFQUFkOztBQUVBLFdBQUtsZ0IsU0FBTCxHQUFpQixNQUFLbWdCLE1BQUwsQ0FBWWpnQixJQUFaLE9BQWpCO0FBQ0EsV0FBS3dOLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLE1BQUsxTixTQUF2Qjs7QUFFQSxXQUFLcUcsS0FBTCxDQUFXLFlBQVk7QUFDckIsWUFBSytaLFFBQUwsR0FBZ0Isc0JBQVkxZCxJQUFaLENBQWhCO0FBQ0EsWUFBSzJkLE1BQUwsR0FBYyxvQkFBVTNkLElBQVYsQ0FBZDtBQUNBLFlBQUs0ZCxPQUFMLEdBQWUscUJBQVc1ZCxJQUFYLENBQWY7QUFDQSxZQUFLNmQsT0FBTCxHQUFlLHFCQUFXN2QsSUFBWCxDQUFmO0FBQ0EsWUFBSzhkLE9BQUwsR0FBZSxxQkFBVzlkLElBQVgsQ0FBZjs7QUFFQSxZQUFLK2QsU0FBTCxHQUFpQix1QkFBYS9kLElBQWIsRUFBbUI7QUFDbENLLGlCQUFRLEVBRDBCO0FBRWxDMmQsb0JBQVcsRUFGdUI7QUFHbENDLG1CQUFVLEVBSHdCO0FBSWxDQyxjQUFLLEVBSjZCO0FBS2xDQyxpQkFBUSxFQUwwQjtBQU1sQ0MsY0FBSyxFQU42QjtBQU9sQ0Msa0JBQVM7QUFQeUIsUUFBbkIsQ0FBakI7O0FBVUEsWUFBS3ppQixLQUFMO0FBQ0QsTUFsQkQ7QUFoQmlCO0FBbUNsQjs7OzsrQkFFVTtBQUNULFlBQUtrUCxHQUFMLENBQVMsUUFBVCxFQUFtQixLQUFLeE4sU0FBeEI7O0FBRUEsWUFBS29nQixRQUFMLENBQWNsZixPQUFkO0FBQ0EsWUFBS21mLE1BQUwsQ0FBWW5mLE9BQVo7QUFDQSxZQUFLb2YsT0FBTCxDQUFhcGYsT0FBYjtBQUNBLFlBQUtxZixPQUFMLENBQWFyZixPQUFiO0FBQ0EsWUFBS3NmLE9BQUwsQ0FBYXRmLE9BQWI7O0FBRUEsWUFBS3VmLFNBQUwsQ0FBZXZmLE9BQWY7O0FBRUEsV0FBSSxLQUFLOGYsT0FBVCxFQUFrQjtBQUNoQixjQUFLQSxPQUFMLENBQWE5ZixPQUFiO0FBQ0Q7O0FBRUQsV0FBSSxLQUFLK2YsUUFBVCxFQUFtQjtBQUNqQixjQUFLQSxRQUFMLENBQWMvZixPQUFkO0FBQ0EsY0FBSytmLFFBQUwsR0FBZ0IsSUFBaEI7QUFDRDs7QUFFRCxXQUFJLEtBQUtDLE9BQVQsRUFBa0I7QUFDaEIsY0FBS0EsT0FBTCxDQUFhbmlCLE1BQWI7QUFDQSxjQUFLbWlCLE9BQUwsR0FBZSxJQUFmO0FBQ0Q7O0FBRUQ7QUFDRDs7OzZCQUVRO0FBQ1A7O0FBRUEsWUFBS2xGLEtBQUw7O0FBRUEsWUFBS21GLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxZQUFLQyxXQUFMLEdBQW1CLEtBQW5COztBQUVBLFlBQUtoQixRQUFMLENBQWM5aEIsS0FBZDtBQUNBLFlBQUsraEIsTUFBTCxDQUFZL2hCLEtBQVo7QUFDQSxZQUFLZ2lCLE9BQUwsQ0FBYWhpQixLQUFiO0FBQ0EsWUFBS2lpQixPQUFMLENBQWFqaUIsS0FBYjtBQUNBLFlBQUtraUIsT0FBTCxDQUFhbGlCLEtBQWI7QUFDQSxZQUFLbWlCLFNBQUwsQ0FBZW5pQixLQUFmOztBQUVBLGNBQU8sS0FBSzZoQixNQUFMLEVBQVA7QUFDRDs7OzBCQTJDS3ZlLEMsRUFBRztBQUNQLFlBQUt3ZSxRQUFMLENBQWMxZixJQUFkLENBQW1Ca0IsQ0FBbkI7QUFDQSxZQUFLeWUsTUFBTCxDQUFZM2YsSUFBWixDQUFpQmtCLENBQWpCO0FBQ0EsWUFBSzBlLE9BQUwsQ0FBYTVmLElBQWIsQ0FBa0JrQixDQUFsQjtBQUNBLFlBQUsyZSxPQUFMLENBQWE3ZixJQUFiLENBQWtCa0IsQ0FBbEI7QUFDQSxZQUFLNGUsT0FBTCxDQUFhOWYsSUFBYixDQUFrQmtCLENBQWxCO0FBQ0EsWUFBSzZlLFNBQUwsQ0FBZS9mLElBQWYsQ0FBb0JrQixDQUFwQjs7QUFFQSxXQUFJLEtBQUt1ZixhQUFULEVBQXdCO0FBQ3RCLGNBQUtFLE1BQUw7QUFDQSxjQUFLRixhQUFMLEdBQXFCLEtBQXJCO0FBQ0Q7QUFDRjs7OzhCQUVTO0FBQ1IsV0FBSSxLQUFLQyxXQUFULEVBQXNCO0FBQ3BCLGFBQUl4VSxPQUFPLEtBQUtnUCxLQUFoQjtBQUNBLGFBQUkwRixTQUFTLEtBQUtDLE9BQWxCO0FBQ0EsYUFBSUMsVUFBVSxLQUFLcEIsUUFBTCxDQUFjeFQsSUFBNUI7QUFDQSxhQUFJdVAsS0FBSyxLQUFLWixLQUFkOztBQUVBLGNBQUssSUFBSTFVLElBQUksQ0FBYixFQUFnQkEsSUFBSXNWLEVBQXBCLEVBQXdCdFYsR0FBeEIsRUFBNkI7QUFDM0J5YSxrQkFBT3phLENBQVAsSUFBWTJhLFFBQVE1VSxLQUFLL0YsQ0FBTCxDQUFSLENBQVo7QUFDRDs7QUFFRCxjQUFLNGEsUUFBTCxDQUFjQyxZQUFkLENBQTJCLEtBQUtDLFVBQWhDLEVBQTRDLENBQTVDLEVBQStDLENBQS9DOztBQUVBLGNBQUtqZ0IsSUFBTCxDQUFVLE1BQVY7O0FBRUEsY0FBSzBmLFdBQUwsR0FBbUIsS0FBbkI7QUFDRDs7QUFFRCxZQUFLMWYsSUFBTCxDQUFVLFFBQVY7O0FBRUEsWUFBS2UsU0FBTCxDQUFlbWYsTUFBZixDQUFzQixLQUFLcGYsTUFBM0I7O0FBRUEsY0FBTyxJQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLFlBQUtDLFNBQUwsQ0FBZW1kLElBQWYsQ0FBb0JDLEtBQXBCLENBQTBCNUwsSUFBMUIsR0FBaUM5VCxPQUFPMGhCLFVBQVAsR0FBb0IsR0FBcEIsR0FBMEIsS0FBS3BmLFNBQUwsQ0FBZTBGLEtBQWYsR0FBdUIsR0FBakQsR0FBdUQsSUFBeEY7QUFDQSxZQUFLMUYsU0FBTCxDQUFlbWQsSUFBZixDQUFvQkMsS0FBcEIsQ0FBMEJ6QyxHQUExQixHQUFnQ2pkLE9BQU8yaEIsV0FBUCxHQUFxQixHQUFyQixHQUEyQixLQUFLcmYsU0FBTCxDQUFlNEksTUFBZixHQUF3QixHQUFuRCxHQUF5RCxJQUF6RjtBQUNBLGNBQU8sSUFBUDtBQUNEOzs7OEJBRVM7QUFDUixZQUFLNUksU0FBTCxDQUFlMGQsTUFBZixDQUFzQixLQUFLVixNQUFMLEdBQWMsS0FBS0MsTUFBekMsRUFBaUQsS0FBS0MsT0FBTCxHQUFlLEtBQUtELE1BQXJFOztBQUVBLFdBQUksS0FBS3NCLE9BQVQsRUFBa0I7QUFDaEIsY0FBS0EsT0FBTCxDQUFhZSxPQUFiLEdBQXVCLElBQXZCO0FBQ0Q7O0FBRUQsV0FBSSxLQUFLZCxRQUFULEVBQW1CO0FBQ2pCLGNBQUtBLFFBQUwsQ0FBYy9mLE9BQWQ7QUFDQSxjQUFLK2YsUUFBTCxHQUFnQixJQUFoQjtBQUNEOztBQUVELFdBQUksS0FBS0MsT0FBVCxFQUFrQjtBQUNoQixjQUFLQSxPQUFMLENBQWFuaUIsTUFBYjtBQUNEOztBQUVELFlBQUttaUIsT0FBTCxHQUFlbEIsU0FBU2dDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBLFlBQUtkLE9BQUwsQ0FBYXJCLEtBQWIsQ0FBbUJvQyxPQUFuQixHQUE2QixNQUE3QjtBQUNBLFlBQUtmLE9BQUwsQ0FBYS9ZLEtBQWIsR0FBcUIsS0FBS3NYLE1BQTFCO0FBQ0EsWUFBS3lCLE9BQUwsQ0FBYTdWLE1BQWIsR0FBc0IsS0FBS3NVLE9BQTNCO0FBQ0FLLGdCQUFTeEosSUFBVCxDQUFjeUosV0FBZCxDQUEwQixLQUFLaUIsT0FBL0I7O0FBRUEsWUFBS0QsUUFBTCxHQUFnQjNnQixLQUFLNGhCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QixLQUFLakIsT0FBN0IsRUFBc0M1Z0IsS0FBSzhoQixXQUFMLENBQWlCQyxPQUF2RCxDQUFoQjs7QUFFQSxXQUFJLENBQUMsS0FBS3JCLE9BQVYsRUFBbUI7QUFDakIsY0FBS0EsT0FBTCxHQUFlLElBQUkxZ0IsS0FBS2dpQixNQUFULENBQWdCLEtBQUtyQixRQUFyQixDQUFmO0FBQ0EsY0FBS1IsU0FBTCxDQUFlMWQsTUFBZixDQUFzQndmLE1BQXRCLENBQTZCQyxRQUE3QixDQUFzQyxLQUFLeEIsT0FBM0M7QUFDRCxRQUhELE1BSUs7QUFDSCxjQUFLQSxPQUFMLENBQWFlLE9BQWIsR0FBdUIsS0FBS2QsUUFBNUI7QUFDRDs7QUFFRCxZQUFLUSxRQUFMLEdBQWdCLEtBQUtQLE9BQUwsQ0FBYXVCLFVBQWIsQ0FBd0IsSUFBeEIsRUFBOEIsRUFBRUMsT0FBTyxJQUFULEVBQWVDLFdBQVcsS0FBMUIsRUFBOUIsQ0FBaEI7QUFDQSxZQUFLbEIsUUFBTCxDQUFjbUIsU0FBZCxDQUF3QixDQUF4QixFQUEyQixDQUEzQixFQUE4QixLQUFLbkQsTUFBbkMsRUFBMkMsS0FBS0UsT0FBaEQ7O0FBRUEsWUFBS2dDLFVBQUwsR0FBa0IsS0FBS0YsUUFBTCxDQUFjb0IsWUFBZCxDQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFpQyxLQUFLcEQsTUFBdEMsRUFBOEMsS0FBS0UsT0FBbkQsQ0FBbEI7O0FBRUEsWUFBSzRCLE9BQUwsR0FBZSxJQUFJbGlCLFdBQUosQ0FBZ0IsS0FBS3NpQixVQUFMLENBQWdCL1UsSUFBaEIsQ0FBcUIxRSxNQUFyQyxDQUFmOztBQUVBLFlBQUt1WSxTQUFMLENBQWVOLE1BQWY7O0FBRUEsWUFBSzJDLE1BQUw7O0FBRUEsWUFBS3hnQixJQUFMOztBQUVBLGNBQU8sSUFBUDtBQUNEOzs7MkJBRU0rRSxDLEVBQUdzRCxDLEVBQUdyTCxDLEVBQUc7QUFDZCxXQUFJdUgsVUFBSjtBQUNBLFdBQUlsSSxFQUFFNEgsUUFBRixDQUFXakgsQ0FBWCxDQUFKLEVBQW1CO0FBQ2pCdUgsYUFBSSxLQUFLa2MsT0FBTCxDQUFhMWIsQ0FBYixFQUFnQnNELENBQWhCLENBQUo7QUFDRCxRQUZELE1BR0s7QUFDSDlELGFBQUlRLENBQUo7QUFDQS9ILGFBQUlxTCxDQUFKO0FBQ0Q7QUFDRCxXQUFNaUMsT0FBTyxLQUFLZ1AsS0FBbEI7QUFDQSxXQUFJaFAsS0FBSy9GLENBQUwsTUFBWXZILENBQWhCLEVBQW1CO0FBQ2pCc04sY0FBSy9GLENBQUwsSUFBVXZILEtBQUssQ0FBZjtBQUNEO0FBQ0QsY0FBT3NOLEtBQUsvRixDQUFMLENBQVA7QUFDRDs7OzZCQUVRUSxDLEVBQUdzRCxDLEVBQUc7QUFBRSxjQUFPQSxJQUFJLEtBQUs4VSxNQUFULEdBQWtCcFksQ0FBekI7QUFBNEI7OzsrQkFFbENSLEMsRUFBRztBQUNaLFdBQUk4RCxJQUFJeEQsS0FBS3dCLEdBQUwsQ0FBU3hCLEtBQUtDLEtBQUwsQ0FBV1AsSUFBSSxLQUFLNFksTUFBcEIsQ0FBVCxFQUFzQyxLQUFLRSxPQUFMLEdBQWUsQ0FBckQsQ0FBUjtBQUNBLFdBQUl0WSxJQUFJUixJQUFJOEQsQ0FBWjtBQUNBLGNBQU8sRUFBRXRELElBQUYsRUFBS3NELElBQUwsRUFBUDtBQUNEOzs7NEJBRU90RCxDLEVBQUdzRCxDLEVBQUc7QUFDWixXQUFJcVksS0FBS3JZLElBQUksS0FBSzhVLE1BQWxCO0FBQ0EsV0FBSTNZLElBQUlrYyxFQUFSO0FBQ0EsV0FBSXZXLElBQUksS0FBSzhPLEtBQUwsR0FBYXlILEVBQXJCO0FBQ0EsWUFBS3BILEtBQUwsQ0FBVzJCLElBQVgsQ0FBZ0J6VyxDQUFoQixFQUFtQixDQUFuQixFQUFzQjJGLElBQUkzRixDQUExQjtBQUNBLGNBQU8sS0FBS21jLE1BQUwsRUFBUDtBQUNEOzs7aUNBRVlDLFEsRUFBVTtBQUFBOztBQUNyQixXQUFJQyxNQUFNN2lCLEtBQUs0aEIsT0FBTCxDQUFha0IsU0FBYixDQUF1QixhQUFhLDRCQUFRLEdBQXdERixRQUFoRSxDQUFwQyxFQUErRzVoQixTQUEvRyxFQUEwSGhCLEtBQUs4aEIsV0FBTCxDQUFpQkMsT0FBM0ksQ0FBVjtBQUNBYyxXQUFJelYsRUFBSixDQUFPLFFBQVAsRUFBaUI7QUFBQSxnQkFBTSxPQUFLdVYsTUFBTCxFQUFOO0FBQUEsUUFBakI7QUFDQSxjQUFPRSxHQUFQO0FBQ0Q7Ozs0QkFFTztBQUNOLFlBQUtuSCxLQUFMOztBQUVBLFlBQUtxSCxLQUFMLENBQVcsRUFBWCxFQUFlLEVBQWYsRUFBbUIsRUFBbkI7QUFDQSxZQUFLQSxLQUFMLENBQVcsRUFBWCxFQUFlLEVBQWYsRUFBbUIsQ0FBbkI7QUFDQSxZQUFLQSxLQUFMLENBQVcsRUFBWCxFQUFlLEVBQWYsRUFBbUIsQ0FBbkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQUtKLE1BQUwsQ0FBWSxJQUFaO0FBQ0Q7Ozt5QkFyTVk7QUFBRSxjQUFPLEtBQUt2RCxNQUFaO0FBQW9CLE07dUJBQ3hCbmQsSyxFQUFPO0FBQ2hCLFlBQUttZCxNQUFMLEdBQWNuZCxLQUFkO0FBQ0EsWUFBSzRkLE1BQUw7QUFDRDs7O3VCQUVVNWQsSyxFQUFPO0FBQ2hCLFlBQUtrZCxNQUFMLEdBQWNsZCxLQUFkO0FBQ0EsWUFBSzRkLE1BQUw7QUFDRDs7O3VCQUVXNWQsSyxFQUFPO0FBQ2pCLFlBQUtvZCxPQUFMLEdBQWVwZCxLQUFmO0FBQ0EsWUFBSzRkLE1BQUw7QUFDRDs7O3lCQUVpQjtBQUFFLGNBQU8sSUFBUDtBQUFhOzs7eUJBQ2xCO0FBQUUsY0FBTyxLQUFLQyxRQUFaO0FBQXNCOzs7eUJBQzFCO0FBQUUsY0FBTyxLQUFLQyxNQUFaO0FBQW9COzs7eUJBQ3JCO0FBQUUsY0FBTyxLQUFLQyxPQUFaO0FBQXFCOzs7eUJBQ3ZCO0FBQUUsY0FBTyxLQUFLQyxPQUFaO0FBQXFCOzs7eUJBQ3ZCO0FBQUUsY0FBTyxLQUFLQyxPQUFaO0FBQXFCOzs7eUJBRXJCO0FBQUUsY0FBTyxLQUFLQyxTQUFaO0FBQXVCOzs7eUJBRTVCO0FBQUUsY0FBTyxLQUFLamUsTUFBWjtBQUFvQjs7O3lCQUNuQjtBQUFFLGNBQU8sS0FBS0MsU0FBWjtBQUF1Qjs7O3lCQUUzQjtBQUFFLGNBQU8sS0FBS3VlLE9BQVo7QUFBcUI7Ozt5QkFDdEI7QUFBRSxjQUFPLEtBQUtDLFFBQVo7QUFBc0I7Ozt5QkFDekI7QUFBRSxjQUFPLEtBQUtDLE9BQVo7QUFBcUI7Ozt5QkFDdEI7QUFBRSxjQUFPLEtBQUtPLFFBQVo7QUFBc0I7Ozt5QkFDdEI7QUFBRSxjQUFPLEtBQUtFLFVBQVo7QUFBd0I7Ozt5QkFDN0I7QUFBRSxjQUFPLEtBQUtKLE9BQVo7QUFBcUI7Ozt5QkFFakI7QUFBRSxjQUFPLEtBQUtKLGFBQVo7QUFBMkIsTTt1QkFDL0I1ZSxLLEVBQU87QUFBRSxZQUFLNGUsYUFBTCxHQUFxQjVlLEtBQXJCO0FBQTRCOzs7eUJBRXJDO0FBQUUsY0FBTyxLQUFLNmUsV0FBWjtBQUF5QixNO3VCQUM3QjdlLEssRUFBTztBQUFFLFlBQUs2ZSxXQUFMLEdBQW1CN2UsS0FBbkI7QUFBMEI7Ozs7OzttQkE1SGhDK2MsTTs7Ozs7Ozs7Ozs7Ozs7OztBQ1RyQjs7Ozs7Ozs7Ozs7O0tBRXFCZ0UsTzs7O0FBRW5CLG9CQUFhNWdCLElBQWIsRUFBbUI7QUFBQTs7QUFBQSxtSEFDWEEsSUFEVzs7QUFHakIsV0FBSzZjLElBQUwsQ0FBVSxLQUFWLEVBQWlCLFNBQWpCLEVBQTRCLENBQUMsT0FBRCxDQUE1Qjs7QUFFQSxXQUFLamhCLEtBQUw7QUFMaUI7QUFNbEI7Ozs7NkJBRVE7QUFDUDs7QUFFQSxZQUFLc2QsS0FBTCxDQUFXLENBQVgsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxLQUFMLENBQVcsQ0FBWCxJQUFnQixRQUFoQjtBQUNBLFlBQUtBLEtBQUwsQ0FBVyxDQUFYLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsS0FBTCxDQUFXLENBQVgsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxLQUFMLENBQVcsQ0FBWCxJQUFnQixRQUFoQjtBQUNBLFlBQUtBLEtBQUwsQ0FBVyxDQUFYLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsS0FBTCxDQUFXLENBQVgsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxLQUFMLENBQVcsQ0FBWCxJQUFnQixRQUFoQjtBQUNBLFlBQUtBLEtBQUwsQ0FBVyxDQUFYLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsS0FBTCxDQUFXLENBQVgsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxLQUFMLENBQVcsRUFBWCxJQUFpQixRQUFqQjtBQUNBLFlBQUtBLEtBQUwsQ0FBVyxFQUFYLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsS0FBTCxDQUFXLEVBQVgsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxLQUFMLENBQVcsRUFBWCxJQUFpQixRQUFqQjtBQUNBLFlBQUtBLEtBQUwsQ0FBVyxFQUFYLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsS0FBTCxDQUFXLEVBQVgsSUFBaUIsUUFBakI7O0FBRUEsY0FBTyxJQUFQO0FBQ0Q7Ozs4QkFtQlN0YyxDLEVBQUc7QUFBRSxjQUFPWCxFQUFFc1csSUFBRixDQUFPLEtBQUsyRyxLQUFaLEVBQW1CdGMsQ0FBbkIsQ0FBUDtBQUE4Qjs7OzRCQUVyQ0EsQyxFQUFHO0FBQUUsY0FBTyxLQUFLc2MsS0FBTCxDQUFXdGMsQ0FBWCxDQUFQO0FBQXNCOzs7eUJBbkJ0QjtBQUFFLGNBQU8sQ0FBUDtBQUFVOzs7eUJBQ1o7QUFBRSxjQUFPLENBQVA7QUFBVTs7O3lCQUNWO0FBQUUsY0FBTyxDQUFQO0FBQVU7Ozt5QkFDWDtBQUFFLGNBQU8sQ0FBUDtBQUFVOzs7eUJBQ2Q7QUFBRSxjQUFPLENBQVA7QUFBVTs7O3lCQUNUO0FBQUUsY0FBTyxDQUFQO0FBQVU7Ozt5QkFDakI7QUFBRSxjQUFPLENBQVA7QUFBVTs7O3lCQUNaO0FBQUUsY0FBTyxDQUFQO0FBQVU7Ozt5QkFDVjtBQUFFLGNBQU8sQ0FBUDtBQUFVOzs7eUJBQ2Y7QUFBRSxjQUFPLENBQVA7QUFBVTs7O3lCQUNYO0FBQUUsY0FBTyxFQUFQO0FBQVc7Ozt5QkFDWDtBQUFFLGNBQU8sRUFBUDtBQUFXOzs7eUJBQ2Y7QUFBRSxjQUFPLEVBQVA7QUFBVzs7O3lCQUNWO0FBQUUsY0FBTyxFQUFQO0FBQVc7Ozt5QkFDaEI7QUFBRSxjQUFPLEVBQVA7QUFBVzs7O3lCQUNaO0FBQUUsY0FBTyxFQUFQO0FBQVc7Ozs7OzttQkFoRFBna0IsTzs7Ozs7Ozs7Ozs7Ozs7QUNGckI7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsS0FBSUMsZ0JBQWdCLENBQXBCOztLQUVxQkMsSTs7O0FBRW5CLGlCQUFhOWdCLElBQWIsRUFBbUI7QUFBQTs7QUFBQTs7QUFFakIsV0FBSythLEtBQUwsR0FBYS9hLElBQWI7QUFGaUI7QUFHbEI7Ozs7NEJBRTZEO0FBQUEsV0FBeEQrZ0IsU0FBd0QsdUVBQTVDLElBQTRDO0FBQUEsV0FBdENoaUIsSUFBc0MsdUVBQS9CLEVBQStCO0FBQUEsV0FBM0JpaUIsSUFBMkIsdUVBQXBCLEVBQW9CO0FBQUEsV0FBaEJDLE1BQWdCLHVFQUFQLEtBQU87O0FBQzVELFdBQUlqaEIsT0FBTyxLQUFLK2EsS0FBaEI7O0FBRDREO0FBQUE7QUFBQTs7QUFBQTtBQUc1RCw4QkFBY2lHLElBQWQsOEhBQW9CO0FBQUEsZUFBWDlkLENBQVc7O0FBQ2xCLGdCQUFLLE1BQU1BLENBQVgsSUFBZ0JsRCxLQUFLOFksT0FBTCxDQUFhL1osT0FBTyxHQUFQLEdBQWFtRSxDQUExQixDQUFoQjtBQUNEO0FBTDJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTzVELFdBQUksQ0FBQytkLE1BQUwsRUFBYTtBQUNYLGFBQUl4SCxLQUFLeGQsRUFBRTRILFFBQUYsQ0FBV2tkLFNBQVgsSUFBd0JBLFNBQXhCLEdBQW9DLHdCQUFnQkEsU0FBaEIsQ0FBN0M7QUFDQSxjQUFLbEksS0FBTCxHQUFhLENBQUMsS0FBS3FJLE1BQUwsSUFBZSxDQUFoQixLQUFzQixDQUFDLEtBQUtuRSxNQUFMLElBQWUsQ0FBaEIsS0FBc0IsS0FBS0UsT0FBTCxJQUFnQixDQUF0QyxDQUF0QixJQUFrRXhELEVBQS9FOztBQUVBLGNBQUtWLElBQUwsR0FBWTljLEVBQUVDLEdBQUYsQ0FBTThELElBQU4sRUFBWSxhQUFhakIsSUFBYixHQUFvQixNQUFoQyxFQUF3QzhoQixhQUF4QyxDQUFaO0FBQ0EsY0FBSzdILE9BQUwsR0FBZSxLQUFLRCxJQUFMLEdBQVksS0FBS0YsS0FBakIsR0FBeUIsQ0FBeEM7O0FBRUE1YyxXQUFFb2UsR0FBRixDQUFNcmEsSUFBTixFQUFZLGFBQWFqQixJQUF6QixFQUErQjtBQUM3QjJiLGdCQUFLLEtBQUszQixJQURtQjtBQUU3Qm1CLG1CQUFRLEtBQUtsQixPQUZnQjtBQUc3QjNULGlCQUFNLEtBQUt3VDtBQUhrQixVQUEvQjs7QUFNQWdJLHlCQUFnQixLQUFLN0gsT0FBTCxHQUFlLENBQS9COztBQUVBLGNBQUtFLEtBQUwsR0FBYSxJQUFJemIsT0FBTyxzQkFBY3hCLEVBQUVtSixRQUFGLENBQVcyYixTQUFYLElBQXdCQSxTQUF4QixHQUFvQyxJQUFsRCxJQUEwRCxPQUFqRSxDQUFKLENBQThFLEtBQUt4WSxNQUFMLENBQVkvQyxNQUExRixFQUFrRyxLQUFLdVQsSUFBdkcsRUFBNkcsS0FBS21JLE1BQWxILENBQWI7QUFDRDs7QUFFRCxjQUFPLElBQVA7QUFDRDs7OzZCQUVRO0FBQ1AsY0FBTyxLQUFLNUgsS0FBTCxFQUFQO0FBQ0Q7OzsrQkFFVSxDQUNWOzs7OEJBcUJxQjtBQUFBLFdBQWQ2SCxJQUFjLHVFQUFQLEtBQU87O0FBQ3BCLFlBQUt6WSxNQUFMLENBQVkwWSxZQUFaLEdBQTJCLElBQTNCO0FBQ0EsWUFBSzFZLE1BQUwsQ0FBWTJZLFVBQVosR0FBeUIsS0FBSzNZLE1BQUwsQ0FBWTJZLFVBQVosSUFBMEJGLElBQW5EO0FBQ0EsY0FBTyxJQUFQO0FBQ0Q7OzswQkFFS2ppQixDLEVBQUcsQ0FDUjs7OzZCQUVhO0FBQUEsV0FBUHlILENBQU8sdUVBQUgsQ0FBRzs7QUFDWixXQUFJLEtBQUt1UyxLQUFULEVBQWdCO0FBQ2QsY0FBS0EsS0FBTCxDQUFXSyxJQUFYLENBQWdCNVMsQ0FBaEI7QUFDRDtBQUNELGNBQU8sS0FBSzRaLE1BQUwsRUFBUDtBQUNEOzs7MkJBRU16aEIsRSxFQUFJUixJLEVBQU1tRixLLEVBQU87QUFDdEIseUJBQU0sSUFBTixFQUFZM0UsRUFBWixFQUFnQlIsSUFBaEIsRUFBc0JtRixLQUF0QjtBQUNEOzs7eUJBckNXO0FBQUUsY0FBTyxLQUFLc1gsS0FBWjtBQUFtQjs7O3lCQUNuQjtBQUFFLGNBQU8sS0FBS0EsS0FBTCxDQUFXeFMsTUFBbEI7QUFBMEI7Ozt5QkFFNUI7QUFBRSxjQUFPLEtBQUt3UyxLQUFMLENBQVdyUyxNQUFsQjtBQUEwQjs7O3lCQUMzQjtBQUFFLGNBQU8sS0FBS0EsTUFBTCxDQUFZRyxPQUFuQjtBQUE0Qjs7O3lCQUNoQztBQUFFLGNBQU8sS0FBS0gsTUFBTCxDQUFZSyxLQUFuQjtBQUEwQjs7O3lCQUMzQjtBQUFFLGNBQU8sS0FBS0wsTUFBTCxDQUFZTSxNQUFuQjtBQUEyQjs7O3lCQUM3QjtBQUFFLGNBQU8sS0FBS0EsTUFBTCxDQUFZQyxNQUFuQjtBQUEyQjs7O3lCQUM3QjtBQUFFLGNBQU8sS0FBS1AsTUFBTCxDQUFZVSxNQUFuQjtBQUEyQjs7O3lCQUUvQjtBQUFFLGNBQU8sS0FBSzhQLEtBQVo7QUFBbUI7Ozt5QkFDdEI7QUFBRSxjQUFPLEtBQUtILElBQVo7QUFBa0I7Ozt5QkFDakI7QUFBRSxjQUFPLEtBQUtDLE9BQVo7QUFBcUI7Ozt5QkFDekI7QUFBRSxjQUFPLEtBQUtILEtBQVo7QUFBbUI7Ozt5QkFFcEI7QUFBRSxjQUFPLEtBQUtrRSxNQUFaO0FBQW9COzs7eUJBQ3JCO0FBQUUsY0FBTyxLQUFLRSxPQUFaO0FBQXFCOzs7eUJBQ3hCO0FBQUUsY0FBTyxLQUFLaUUsTUFBWjtBQUFvQjs7Ozs7O21CQTNEaEJKLEk7Ozs7Ozs7Ozs7Ozs7O0FDTnJCOzs7Ozs7Ozs7Ozs7S0FFcUJRLEs7OztBQUVuQixrQkFBYXRoQixJQUFiLEVBQW1CO0FBQUE7O0FBQUEsK0dBQ1hBLElBRFc7O0FBR2pCLFdBQUs2YyxJQUFMLENBQVUsSUFBVixFQUFnQixPQUFoQixFQUF5QixDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLFFBQW5CLENBQXpCOztBQUVBLFdBQUtqaEIsS0FBTDtBQUxpQjtBQU1sQjs7OzswQkFFSytJLEMsRUFBR3NELEMsRUFBR3JMLEMsRUFBbUI7QUFBQSxXQUFoQjJrQixFQUFnQix1RUFBWCxDQUFXO0FBQUEsV0FBUkMsRUFBUSx1RUFBSCxDQUFHOztBQUM3QixXQUFJQyxJQUFJLEtBQUsxRSxNQUFiO0FBQ0EsV0FBSTJFLElBQUksS0FBS3pFLE9BQWI7QUFDQSxXQUFJeEQsS0FBSyxLQUFLWixLQUFkO0FBQ0EsV0FBSTNPLE9BQU8sS0FBS2dQLEtBQWhCO0FBQ0EsV0FBSXhRLFNBQVMsS0FBS0EsTUFBbEI7O0FBRUEsV0FBSWlaLE1BQU0sS0FBSzVJLElBQUwsR0FBWW5jLElBQUk2YyxFQUExQjtBQUNBLFlBQUssSUFBSW1JLEtBQUssQ0FBZCxFQUFpQkEsS0FBS0YsQ0FBdEIsRUFBeUJFLElBQXpCLEVBQStCO0FBQzdCLGFBQUlDLEtBQUssQ0FBQzVaLElBQUkyWixFQUFMLElBQVdILENBQVgsR0FBZTljLENBQXhCO0FBQ0EsY0FBSyxJQUFJbWQsS0FBSyxDQUFkLEVBQWlCQSxLQUFLTCxDQUF0QixFQUF5QkssSUFBekIsRUFBK0I7QUFDN0JwWixrQkFBT2lZLEtBQVAsQ0FBYWtCLElBQWIsRUFBbUIzWCxLQUFLeVgsS0FBTCxJQUFjSixFQUFkLEdBQW1CQyxFQUF0QztBQUNEO0FBQ0Y7O0FBRUQsY0FBTyxLQUFLakIsTUFBTCxFQUFQO0FBQ0Q7Ozs7OzttQkExQmtCZSxLOzs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0tBRXFCUyxNOzs7QUFFbkIsbUJBQWEvaEIsSUFBYixFQUFtQjtBQUFBOztBQUFBLGlIQUNYQSxJQURXOztBQUdqQixXQUFLNmMsSUFBTCxDQUFVLENBQVYsRUFBYSxRQUFiLEVBQXVCLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FBdkI7O0FBRUEsV0FBS2poQixLQUFMO0FBTGlCO0FBTWxCOzs7OzZCQUV3QjtBQUFBLFdBQWxCb21CLEVBQWtCLHVFQUFiLEdBQWE7QUFBQSxXQUFSUixFQUFRLHVFQUFILENBQUc7O0FBQ3ZCLFlBQUt0SSxLQUFMLENBQVdLLElBQVgsQ0FBZ0IsV0FBV3lJLEdBQUd4SCxVQUFILENBQWMsQ0FBZCxDQUFYLEdBQThCLFdBQVdnSCxFQUF6RDtBQUNBLGNBQU8sS0FBS2pCLE1BQUwsRUFBUDtBQUNEOzs7NEJBRU87QUFDTixXQUFJa0IsSUFBSSxLQUFLMUUsTUFBYjtBQUNBLFdBQUkyRSxJQUFJLEtBQUt6RSxPQUFiO0FBQ0EsV0FBSTlDLE1BQU0sS0FBS2pCLEtBQWY7QUFDQSxXQUFJK0ksTUFBTSxLQUFLbFosS0FBZjtBQUNBLFdBQUltWixLQUFLRCxJQUFJeGMsS0FBYjtBQUNBLFdBQUkwYyxLQUFLRixJQUFJdFosTUFBYjs7QUFFQSxXQUFJeVosTUFBTSxDQUFWO0FBQ0EsWUFBSyxJQUFJbmEsSUFBSSxDQUFiLEVBQWdCQSxJQUFJeVosQ0FBcEIsRUFBdUJ6WixHQUF2QixFQUE0QjtBQUMxQixhQUFJb2EsS0FBS3BhLElBQUlrYSxFQUFiO0FBQ0EsY0FBSyxJQUFJeGQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJOGMsQ0FBcEIsRUFBdUI5YyxHQUF2QixFQUE0QjtBQUMxQixlQUFJL0gsSUFBSXVkLElBQUlpSSxHQUFKLENBQVI7QUFDQSxlQUFJeGxCLENBQUosRUFBTztBQUNMcWxCLGlCQUFJSyxJQUFKLENBQVMzZCxJQUFJdWQsRUFBYixFQUFpQkcsRUFBakIsRUFBcUJ6bEIsQ0FBckIsRUFBd0J1ZCxJQUFJaUksTUFBTSxDQUFWLENBQXhCLEVBQXNDakksSUFBSWlJLE1BQU0sQ0FBVixDQUF0QztBQUNEO0FBQ0RBLGtCQUFPLENBQVA7QUFDRDtBQUNGOztBQUVELGNBQU8sS0FBSzdCLE1BQUwsRUFBUDtBQUNEOzs7K0JBRVU1YixDLEVBQUdzRCxDLEVBQUdyTCxDLEVBQUcya0IsRSxFQUFJQyxFLEVBQUk7QUFDMUIsV0FBSVMsTUFBTSxLQUFLbFosS0FBZjtBQUNBa1osV0FBSUssSUFBSixDQUFTM2QsSUFBSXNkLElBQUl4YyxLQUFqQixFQUF3QndDLElBQUlnYSxJQUFJdFosTUFBaEMsRUFBd0MvTCxDQUF4QyxFQUEyQzJrQixFQUEzQyxFQUErQ0MsRUFBL0M7QUFDQSxjQUFPLEtBQUtqQixNQUFMLEVBQVA7QUFDRDs7OzJCQUVNNWIsQyxFQUFHc0QsQyxFQUFHO0FBQ1gsY0FBTyxDQUFDLENBQUNBLElBQUksQ0FBTCxJQUFVLEtBQUs4VSxNQUFmLElBQXlCcFksSUFBSSxDQUE3QixDQUFELElBQW9DLENBQTNDO0FBQ0Q7OzswQkFFS3NELEMsRUFBRztBQUNQLFdBQUlzRCxJQUFJLEtBQUt3UixNQUFMLEdBQWMsQ0FBdEI7QUFDQSxjQUFPLEVBQUV4ZSxPQUFPMEosSUFBSXNELENBQWIsRUFBZ0JLLEtBQUssQ0FBQzNELElBQUksQ0FBTCxJQUFVc0QsQ0FBVixHQUFjLENBQW5DLEVBQXNDckgsUUFBUXFILENBQTlDLEVBQVA7QUFDRDs7OzZCQUVRNUcsQyxFQUFHc0QsQyxFQUFHO0FBQ2IsV0FBSXNhLE9BQU8sS0FBSy9VLEtBQUwsQ0FBVzdJLENBQVgsRUFBY3NELENBQWQsQ0FBWDtBQUNBLFdBQUlrUyxNQUFNLEtBQUtqQixLQUFmO0FBQ0EsY0FBTyxFQUFFOEksSUFBSTdILElBQUlvSSxJQUFKLENBQU4sRUFBaUJoQixJQUFJcEgsSUFBSW9JLE9BQU8sQ0FBWCxDQUFyQixFQUFvQ2YsSUFBSXJILElBQUlvSSxPQUFPLENBQVgsQ0FBeEMsRUFBUDtBQUNEOzs7OEJBRVNQLEUsRUFBb0I7QUFBQSxXQUFoQlQsRUFBZ0IsdUVBQVgsQ0FBVztBQUFBLFdBQVJDLEVBQVEsdUVBQUgsQ0FBRzs7QUFDNUIsZUFBUVEsR0FBR3hILFVBQUgsQ0FBYyxDQUFkLENBQVI7QUFDRSxjQUFLLEVBQUw7QUFDQSxjQUFLLEVBQUw7QUFDRSxrQkFBTyxLQUFLZ0ksRUFBTCxFQUFQO0FBQ0YsY0FBSyxDQUFMO0FBQ0Usa0JBQU8sS0FBS0MsRUFBTCxFQUFQO0FBTEo7O0FBRDRCLGtCQVNiLEtBQUtDLEdBQUwsRUFUYTtBQUFBLFdBU3RCL2QsQ0FUc0IsUUFTdEJBLENBVHNCO0FBQUEsV0FTbkJzRCxDQVRtQixRQVNuQkEsQ0FUbUI7O0FBVTVCLFlBQUtpUixLQUFMLENBQVdtQixHQUFYLENBQWUsQ0FBQzJILEdBQUd4SCxVQUFILENBQWMsQ0FBZCxDQUFELEVBQW1CK0csRUFBbkIsRUFBdUJDLEVBQXZCLENBQWYsRUFBMkMsS0FBS2hVLEtBQUwsQ0FBVzdJLENBQVgsRUFBY3NELENBQWQsQ0FBM0M7O0FBRUEsWUFBS2dCLE1BQUwsQ0FBWXRFLENBQVo7QUFDQSxXQUFJLEtBQUtzRSxNQUFMLENBQVl0RSxDQUFaLEdBQWdCLEtBQUtvWSxNQUF6QixFQUFpQztBQUMvQixjQUFLeUYsRUFBTDtBQUNEOztBQUVELGNBQU8sS0FBS0csU0FBTCxDQUFlaGUsQ0FBZixFQUFrQnNELENBQWxCLEVBQXFCK1osRUFBckIsRUFBeUJULEVBQXpCLEVBQTZCQyxFQUE3QixDQUFQO0FBQ0Q7OzsyQkFFTTlVLEksRUFBTTZVLEUsRUFBSUMsRSxFQUFJO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ25CLDhCQUFjOVUsSUFBZCw4SEFBb0I7QUFBQSxlQUFYOVAsQ0FBVzs7QUFDbEIsZ0JBQUtnbUIsUUFBTCxDQUFjaG1CLENBQWQsRUFBaUIya0IsRUFBakIsRUFBcUJDLEVBQXJCO0FBQ0Q7QUFIa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJbkIsY0FBTyxJQUFQO0FBQ0Q7OzsyQkFFTTtBQUFFLGNBQU8sRUFBRTdjLEdBQUcsS0FBS3NFLE1BQUwsQ0FBWXRFLENBQWpCLEVBQW9Cc0QsR0FBRyxLQUFLZ0IsTUFBTCxDQUFZaEIsQ0FBbkMsRUFBUDtBQUErQzs7OzZCQUUvQ3RELEMsRUFBR3NELEMsRUFBRztBQUFFLGNBQU8sS0FBS2dCLE1BQUwsQ0FBWTRaLE9BQVosQ0FBb0JsZSxDQUFwQixFQUF1QnNELENBQXZCLENBQVA7QUFBa0M7Ozs2QkFFMUN0RCxDLEVBQUdzRCxDLEVBQUc7QUFBRSxjQUFPLEtBQUtnQixNQUFMLENBQVk2WixPQUFaLENBQW9CbmUsQ0FBcEIsRUFBdUJzRCxDQUF2QixDQUFQO0FBQWtDOzs7MkJBRTVDO0FBQUUsY0FBTyxLQUFLNGEsT0FBTCxDQUFhLENBQWIsRUFBZ0IsS0FBSzVaLE1BQUwsQ0FBWWhCLENBQTVCLENBQVA7QUFBdUM7OzsyQkFFekM7QUFBRSxjQUFPLEtBQUs0YSxPQUFMLENBQWEsS0FBSzlGLE1BQWxCLEVBQTBCLEtBQUs5VCxNQUFMLENBQVloQixDQUF0QyxDQUFQO0FBQWlEOzs7MkJBRW5EO0FBQUUsY0FBTyxLQUFLNGEsT0FBTCxDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBUDtBQUEyQjs7OzJCQUU3QjtBQUFFLGNBQU8sS0FBS0EsT0FBTCxDQUFhLEtBQUs5RixNQUFsQixFQUEwQixLQUFLRSxPQUEvQixDQUFQO0FBQWdEOzs7MEJBRW5EO0FBQUUsY0FBTyxLQUFLMUwsSUFBTCxHQUFZcVIsUUFBWixDQUFxQixHQUFyQixFQUEwQnJSLElBQTFCLEVBQVA7QUFBeUM7OzswQkFFM0M7QUFBRSxjQUFPLEtBQUtzUixPQUFMLENBQWEsQ0FBYixFQUFnQixLQUFLNVosTUFBTCxDQUFZaEIsQ0FBWixHQUFnQixDQUFoQyxDQUFQO0FBQTJDOzs7MEJBRTdDO0FBQUUsY0FBTyxLQUFLNGEsT0FBTCxDQUFhLEtBQUs1WixNQUFMLENBQVl0RSxDQUF6QixFQUE0QixLQUFLc0UsTUFBTCxDQUFZaEIsQ0FBWixHQUFnQixDQUE1QyxDQUFQO0FBQXVEOzs7MEJBRXpEO0FBQUUsY0FBTyxLQUFLNGEsT0FBTCxDQUFhLEtBQUs1WixNQUFMLENBQVl0RSxDQUF6QixFQUE0QixLQUFLc0UsTUFBTCxDQUFZaEIsQ0FBWixHQUFnQixDQUE1QyxDQUFQO0FBQXVEOzs7NEJBRXZEO0FBQUUsY0FBTyxLQUFLNGEsT0FBTCxDQUFhLEtBQUs1WixNQUFMLENBQVl0RSxDQUFaLEdBQWdCLENBQTdCLEVBQWdDLEtBQUtzRSxNQUFMLENBQVloQixDQUE1QyxDQUFQO0FBQXVEOzs7NEJBRXpEO0FBQUUsY0FBTyxLQUFLNGEsT0FBTCxDQUFhLEtBQUs1WixNQUFMLENBQVl0RSxDQUF6QixFQUE0QixLQUFLc0UsTUFBTCxDQUFZaEIsQ0FBWixHQUFnQixDQUE1QyxDQUFQO0FBQXVEOzs7NkJBRXhEO0FBQUUsY0FBTyxLQUFLNGEsT0FBTCxDQUFhLEtBQUs1WixNQUFMLENBQVl0RSxDQUFaLEdBQWdCLENBQTdCLEVBQWdDLEtBQUtzRSxNQUFMLENBQVloQixDQUE1QyxDQUFQO0FBQXVEOzs7aUNBRS9DO0FBQUEsV0FBUnVaLEVBQVEsdUVBQUgsQ0FBRzs7QUFBQSxtQkFDRixLQUFLa0IsR0FBTCxFQURFO0FBQUEsV0FDWC9kLENBRFcsU0FDWEEsQ0FEVztBQUFBLFdBQ1JzRCxDQURRLFNBQ1JBLENBRFE7O0FBRWpCLFdBQUk3RCxJQUFJLEtBQUtvSixLQUFMLENBQVc3SSxDQUFYLEVBQWNzRCxDQUFkLENBQVI7QUFDQSxZQUFLaVIsS0FBTCxDQUFXSyxJQUFYLENBQWdCLFdBQVdpSSxFQUEzQixFQUErQnBkLENBQS9CLEVBQWtDLEtBQUtvSixLQUFMLENBQVcsS0FBS3VQLE1BQWhCLEVBQXdCOVUsQ0FBeEIsSUFBNkI3RCxDQUEvRDtBQUNBLGNBQU8sS0FBS21jLE1BQUwsRUFBUDtBQUNEOzs7aUNBRWtCO0FBQUEsV0FBUmlCLEVBQVEsdUVBQUgsQ0FBRzs7QUFBQSxtQkFDRixLQUFLa0IsR0FBTCxFQURFO0FBQUEsV0FDWC9kLENBRFcsU0FDWEEsQ0FEVztBQUFBLFdBQ1JzRCxDQURRLFNBQ1JBLENBRFE7O0FBRWpCLFdBQUk3RCxJQUFJLEtBQUtvSixLQUFMLENBQVc3SSxDQUFYLEVBQWNzRCxDQUFkLENBQVI7QUFDQSxZQUFLaVIsS0FBTCxDQUFXSyxJQUFYLENBQWdCLFdBQVdpSSxFQUEzQixFQUErQnBkLENBQS9CLEVBQWtDLEtBQUt5VSxLQUFMLEdBQWF6VSxDQUEvQztBQUNBLGNBQU8sS0FBS21jLE1BQUwsRUFBUDtBQUNEOzs7aUNBRWtCO0FBQUEsV0FBUmlCLEVBQVEsdUVBQUgsQ0FBRzs7QUFBQSxtQkFDRixLQUFLa0IsR0FBTCxFQURFO0FBQUEsV0FDWC9kLENBRFcsU0FDWEEsQ0FEVztBQUFBLFdBQ1JzRCxDQURRLFNBQ1JBLENBRFE7O0FBRWpCLFdBQUk3RCxJQUFJLEtBQUtvSixLQUFMLENBQVc3SSxDQUFYLEVBQWNzRCxDQUFkLENBQVI7QUFDQSxZQUFLaVIsS0FBTCxDQUFXSyxJQUFYLENBQWdCLFdBQVdpSSxFQUEzQixFQUErQnBkLENBQS9CLEVBQWtDLEtBQUtvSixLQUFMLENBQVcsQ0FBWCxFQUFjdkYsQ0FBZCxJQUFtQjdELENBQXJEO0FBQ0EsY0FBTyxLQUFLbWMsTUFBTCxFQUFQO0FBQ0Q7OztpQ0FFa0I7QUFBQSxXQUFSaUIsRUFBUSx1RUFBSCxDQUFHOztBQUFBLG1CQUNGLEtBQUtrQixHQUFMLEVBREU7QUFBQSxXQUNYL2QsQ0FEVyxTQUNYQSxDQURXO0FBQUEsV0FDUnNELENBRFEsU0FDUkEsQ0FEUTs7QUFFakIsWUFBS2lSLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQixXQUFXaUksRUFBM0IsRUFBK0IsQ0FBL0IsRUFBa0MsS0FBS2hVLEtBQUwsQ0FBVzdJLENBQVgsRUFBY3NELENBQWQsSUFBbUIsQ0FBckQ7QUFDQSxjQUFPLEtBQUtzWSxNQUFMLEVBQVA7QUFDRDs7OytCQUVVd0MsRSxFQUFJQyxFLEVBQUk7QUFDakIsV0FBSUMsS0FBSyxLQUFLalgsSUFBTCxDQUFVK1csRUFBVixDQUFUO0FBQ0EsWUFBSzdKLEtBQUwsQ0FBVzJCLElBQVgsQ0FBZ0JvSSxHQUFHMWtCLEtBQW5CLEVBQTBCLEtBQUt5TixJQUFMLENBQVVnWCxFQUFWLENBQTFCLEVBQXlDQyxHQUFHL2UsTUFBNUM7QUFDQSxjQUFPLEtBQUtxYyxNQUFMLEVBQVA7QUFDRDs7OzhCQUVTMkMsRSxFQUFJQyxFLEVBQUk7QUFDaEIsV0FBSWhKLE1BQU0sS0FBS2pCLEtBQWY7QUFDQWdLLGFBQU0sQ0FBTjtBQUNBQyxhQUFNLENBQU47QUFDQSxZQUFLLElBQUlsYixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS2dWLE9BQXpCLEVBQWtDaFYsR0FBbEMsRUFBdUM7QUFDckMsYUFBSTlELElBQUksS0FBSzZILElBQUwsQ0FBVS9ELENBQVYsQ0FBUjtBQUNBa1MsYUFBSVUsSUFBSixDQUFTMVcsRUFBRTVGLEtBQUYsR0FBVTJrQixFQUFuQixFQUF1Qi9lLEVBQUU1RixLQUFGLEdBQVU0a0IsRUFBakMsRUFBcUMsQ0FBckM7QUFDRDtBQUNELGNBQU8sS0FBSzVDLE1BQUwsRUFBUDtBQUNEOzs7Z0NBRVd0WSxDLEVBQVc7QUFBQSxXQUFSdVosRUFBUSx1RUFBSCxDQUFHOztBQUNyQixXQUFJcmQsSUFBSSxLQUFLNkgsSUFBTCxDQUFVL0QsQ0FBVixDQUFSO0FBQ0EsWUFBS2lSLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQixXQUFXaUksRUFBM0IsRUFBK0JyZCxFQUFFNUYsS0FBakMsRUFBd0M0RixFQUFFRCxNQUExQztBQUNBLGNBQU8sS0FBS3FjLE1BQUwsRUFBUDtBQUNEOzs7K0JBRVU1YixDLEVBQVc7QUFBQSxXQUFSNmMsRUFBUSx1RUFBSCxDQUFHOztBQUNwQixXQUFJckgsTUFBTSxLQUFLakIsS0FBZjtBQUNBLFdBQUlrSyxLQUFLLEtBQUtwWCxJQUFMLENBQVUsQ0FBVixFQUFhek4sS0FBYixHQUFxQm9HLElBQUksQ0FBbEM7QUFDQSxXQUFJL0gsSUFBSSxXQUFXNGtCLEVBQW5CO0FBQ0EsWUFBSyxJQUFJdlosSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtnVixPQUF6QixFQUFrQ2hWLEdBQWxDLEVBQXVDO0FBQ3JDa1MsYUFBSVosSUFBSixDQUFTM2MsQ0FBVCxFQUFZd21CLEVBQVosRUFBZ0IsQ0FBaEI7QUFDQUEsZUFBTSxLQUFLckcsTUFBTCxHQUFjLENBQXBCO0FBQ0Q7QUFDRCxjQUFPLEtBQUt3RCxNQUFMLEVBQVA7QUFDRDs7OzRCQUVPOEMsRSxFQUFJO0FBQ1YsV0FBSUEsS0FBSyxDQUFULEVBQVk7QUFDVixhQUFJbGYsSUFBSSxLQUFLNkgsSUFBTCxDQUFVcVgsS0FBSyxDQUFmLENBQVI7QUFDQSxjQUFLbkssS0FBTCxDQUFXMkIsSUFBWCxDQUFnQjFXLEVBQUU1RixLQUFsQixFQUF5QixDQUF6QixFQUE0QixLQUFLc2EsS0FBakM7QUFDQTFVLGFBQUksS0FBSzZILElBQUwsQ0FBVXFYLEVBQVYsQ0FBSjtBQUNBLGFBQUlqZixJQUFJRCxFQUFFNUYsS0FBVjtBQUNBLGNBQUsyYSxLQUFMLENBQVdLLElBQVgsQ0FBZ0IsQ0FBaEIsRUFBbUJuVixDQUFuQixFQUFzQixLQUFLeVUsS0FBTCxHQUFhelUsQ0FBbkM7QUFDQSxnQkFBTyxLQUFLbWMsTUFBTCxFQUFQO0FBQ0QsUUFQRCxNQVFLLElBQUk4QyxLQUFLLENBQVQsRUFBWTtBQUNmLGFBQUlsZixLQUFJLEtBQUs2SCxJQUFMLENBQVVxWCxLQUFLLENBQWYsQ0FBUjtBQUNBLGNBQUtuSyxLQUFMLENBQVcyQixJQUFYLENBQWdCMVcsR0FBRTVGLEtBQWxCLEVBQXlCLENBQXpCLEVBQTRCLEtBQUtzYSxLQUFqQztBQUNBMVUsY0FBSSxLQUFLNkgsSUFBTCxDQUFVcVgsRUFBVixDQUFKO0FBQ0EsYUFBSWpmLEtBQUlELEdBQUU1RixLQUFWO0FBQ0EsY0FBSzJhLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQixDQUFoQixFQUFtQm5WLEVBQW5CLEVBQXNCLEtBQUt5VSxLQUFMLEdBQWF6VSxFQUFuQztBQUNBLGdCQUFPLEtBQUttYyxNQUFMLEVBQVA7QUFDRDtBQUNELGNBQU8sSUFBUDtBQUNEOzs7Ozs7bUJBak1rQndCLE07Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckI7Ozs7Ozs7Ozs7OztLQUVxQnVCLE07OztBQUVuQixtQkFBYXRqQixJQUFiLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1hBLElBRFc7O0FBR2pCLFdBQUs2YyxJQUFMLENBQVUsQ0FBVixFQUFhLFFBQWIsRUFBdUIsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixPQUFwQixFQUE2QixXQUE3QixDQUF2Qjs7QUFFQSxXQUFLamhCLEtBQUw7QUFMaUI7QUFNbEI7Ozs7NkJBRVE7QUFDUDtBQUNBLFlBQUsybkIsRUFBTCxHQUFVLENBQVY7QUFDQSxZQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNBLFlBQUtySSxLQUFMLEdBQWEsQ0FBYjtBQUNBLFlBQUtzSSxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsY0FBTyxJQUFQO0FBQ0Q7OzswQkFFS3ZrQixDLEVBQUc7QUFDUCxXQUFJQSxJQUFJLEtBQUtpYyxLQUFULElBQWtCLEtBQUt1SSxVQUEzQixFQUF1QztBQUNyQyxjQUFLQyxLQUFMO0FBQ0EsY0FBS3hJLEtBQUwsR0FBYWpjLENBQWI7QUFDRDtBQUNGOzs7NkJBY1E7QUFDUCxZQUFLdWtCLGFBQUwsR0FBcUIsQ0FBQyxLQUFLQSxhQUEzQjtBQUNBLGNBQU8sS0FBS2xELE1BQUwsRUFBUDtBQUNEOzs7NkJBRVE1YixDLEVBQUdzRCxDLEVBQUc7QUFDYixXQUFJd1osSUFBSSxLQUFLelksTUFBTCxDQUFZdkQsS0FBcEI7QUFDQSxXQUFJaWMsSUFBSSxLQUFLMVksTUFBTCxDQUFZTCxNQUFwQjs7QUFFQSxXQUFJaEUsSUFBSThjLENBQVIsRUFBVztBQUNUOWMsYUFBSThjLENBQUo7QUFDRCxRQUZELE1BR0ssSUFBSTljLElBQUksQ0FBUixFQUFXO0FBQ2RBLGFBQUksQ0FBSjtBQUNEOztBQUVELFdBQUlzRCxJQUFJeVosQ0FBUixFQUFXO0FBQ1R6WixhQUFJeVosQ0FBSjtBQUNELFFBRkQsTUFHSyxJQUFJelosSUFBSSxDQUFSLEVBQVc7QUFDZEEsYUFBSSxDQUFKO0FBQ0Q7O0FBRUQsWUFBS3NiLEVBQUwsR0FBVTVlLENBQVY7QUFDQSxZQUFLNmUsRUFBTCxHQUFVdmIsQ0FBVjs7QUFFQSxjQUFPLEtBQUtxYSxJQUFMLENBQVUzZCxDQUFWLEVBQWFzRCxDQUFiLENBQVA7QUFDRDs7OzZCQUVRdEQsQyxFQUFHc0QsQyxFQUFHO0FBQUUsY0FBTyxLQUFLNGEsT0FBTCxDQUFhLEtBQUtVLEVBQUwsR0FBVTVlLENBQXZCLEVBQTBCLEtBQUs2ZSxFQUFMLEdBQVV2YixDQUFwQyxDQUFQO0FBQStDOzs7MEJBRTFEdEQsQyxFQUFHc0QsQyxFQUFHO0FBQ1YsV0FBSXdaLElBQUksS0FBSzFFLE1BQWI7QUFDQSxXQUFJMkUsSUFBSSxLQUFLekUsT0FBYjtBQUNBLFdBQUlyZ0IsSUFBSSxLQUFLZ25CLE1BQWI7QUFDQSxXQUFJbGIsU0FBUyxLQUFLQSxNQUFsQjs7QUFFQSxZQUFLLElBQUlrWixLQUFLLENBQWQsRUFBaUJBLEtBQUtGLENBQXRCLEVBQXlCRSxJQUF6QixFQUErQjtBQUM3QixhQUFJQyxLQUFLLENBQUM1WixJQUFJMlosRUFBTCxJQUFXSCxDQUFYLEdBQWU5YyxDQUF4QjtBQUNBLGNBQUssSUFBSW1kLEtBQUssQ0FBZCxFQUFpQkEsS0FBS0wsQ0FBdEIsRUFBeUJLLElBQXpCLEVBQStCO0FBQzdCcFosa0JBQU9pWSxLQUFQLENBQWFrQixJQUFiLEVBQW1CamxCLENBQW5CO0FBQ0Q7QUFDRjs7QUFFRCxjQUFPLEtBQUsyakIsTUFBTCxFQUFQO0FBQ0Q7Ozt5QkF6RFE7QUFBRSxjQUFPLEtBQUtnRCxFQUFaO0FBQWdCLE07dUJBQ3BCMWpCLEssRUFBTztBQUFFLFlBQUswakIsRUFBTCxHQUFVMWpCLEtBQVY7QUFBaUI7Ozt5QkFFeEI7QUFBRSxjQUFPLEtBQUsyakIsRUFBWjtBQUFnQixNO3VCQUNwQjNqQixLLEVBQU87QUFBRSxZQUFLMmpCLEVBQUwsR0FBVTNqQixLQUFWO0FBQWlCOzs7eUJBRXBCO0FBQUUsY0FBTyxLQUFLK2pCLE1BQVo7QUFBb0IsTTt1QkFDeEIvakIsSyxFQUFPO0FBQUUsWUFBSytqQixNQUFMLEdBQWMvakIsS0FBZDtBQUFxQjs7O3lCQUV4QjtBQUFFLGNBQU8sS0FBSzZqQixVQUFaO0FBQXdCLE07dUJBQzVCN2pCLEssRUFBTztBQUFFLFlBQUs2akIsVUFBTCxHQUFrQjdqQixLQUFsQjtBQUF5Qjs7Ozs7O21CQXBDOUJ5akIsTTs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0tBRXFCTyxNOzs7QUFFbkIsbUJBQWE3akIsSUFBYixFQUFtQjtBQUFBOztBQUFBLGlIQUNYQSxJQURXOztBQUdqQixXQUFLcWMsS0FBTCxHQUFhLEVBQWI7O0FBRUEsV0FBS1EsSUFBTCxDQUFVLElBQVYsRUFBZ0IsUUFBaEIsRUFBMEIsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixRQUFuQixDQUExQjs7QUFFQSxXQUFLamhCLEtBQUw7QUFQaUI7QUFRbEI7Ozs7NkJBRWE7QUFBQSxXQUFQK0ssQ0FBTyx1RUFBSCxDQUFHOztBQUNaLFlBQUswVixLQUFMLEdBQWEsRUFBYjtBQUNBLG9IQUFtQjFWLENBQW5CO0FBQ0Q7OzswQkFFSzVILEksRUFBTTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNWLDhCQUFjLEtBQUtzZCxLQUFuQiw4SEFBMEI7QUFBQSxlQUFqQmpZLENBQWlCOztBQUN4QixlQUFJQSxFQUFFckYsSUFBRixLQUFXQSxJQUFmLEVBQXFCO0FBQ25CLG9CQUFPcUYsQ0FBUDtBQUNEO0FBQ0Y7QUFMUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1WLGNBQU8sSUFBUDtBQUNEOzs7eUJBRUlyRixJLEVBQU1tVCxLLEVBQU92TixDLEVBQUdzRCxDLEVBQUc2YixDLEVBQUc7QUFDekIsWUFBS3pILEtBQUwsQ0FBV2pnQixJQUFYLENBQWdCLEVBQUUyQyxVQUFGLEVBQVFtVCxZQUFSLEVBQWV2TixJQUFmLEVBQWtCc0QsSUFBbEIsRUFBcUI2YixJQUFyQixFQUF3QnRXLE9BQU91VyxPQUFPQyxTQUF0QyxFQUFoQjtBQUNBLGNBQU8sSUFBUDtBQUNEOzs7eUJBRUlqbEIsSSxFQUFNO0FBQ1QsV0FBSXFGLElBQUksS0FBS21PLElBQUwsQ0FBVXhULElBQVYsQ0FBUjtBQUNBLFdBQUlxRixDQUFKLEVBQU87QUFDTCxjQUFLaVksS0FBTCxDQUFXblIsTUFBWCxDQUFrQjlHLEVBQUVvSixLQUFwQixFQUEyQixDQUEzQjtBQUNEO0FBQ0QsY0FBTyxJQUFQO0FBQ0Q7OzswQkFFS3pPLEksRUFBTTRGLEMsRUFBR3NELEMsRUFBRzZiLEMsRUFBRztBQUNuQixXQUFJMWYsSUFBSSxLQUFLbU8sSUFBTCxDQUFVeFQsSUFBVixDQUFSO0FBQ0EsV0FBSXFGLENBQUosRUFBTztBQUNMQSxXQUFFTyxDQUFGLEdBQU1BLENBQU47QUFDQVAsV0FBRTZELENBQUYsR0FBTUEsQ0FBTjtBQUNBLGFBQUk2YixDQUFKLEVBQU87QUFDTDFmLGFBQUUwZixDQUFGLEdBQU1BLENBQU47QUFDRDtBQUNELGNBQUt2RCxNQUFMO0FBQ0Q7QUFDRCxjQUFPLElBQVA7QUFDRDs7OzZCQUVReGhCLEksRUFBTTRGLEMsRUFBR3NELEMsRUFBRztBQUNuQixXQUFJN0QsSUFBSSxLQUFLbU8sSUFBTCxDQUFVeFQsSUFBVixDQUFSO0FBQ0EsV0FBSXFGLENBQUosRUFBTztBQUNMQSxXQUFFTyxDQUFGLEdBQU1BLENBQU47QUFDQVAsV0FBRTZELENBQUYsR0FBTUEsQ0FBTjtBQUNBLGNBQUtzWSxNQUFMO0FBQ0Q7QUFDRCxjQUFPLElBQVA7QUFDRDs7OzRCQUVPO0FBQ04sV0FBSTBELEtBQUssS0FBS2xILE1BQWQ7QUFDQSxXQUFJbUgsS0FBSyxLQUFLakgsT0FBZDtBQUNBLFdBQUlrSCxLQUFLLEtBQUs5SCxLQUFkO0FBQ0EsV0FBSStILEtBQUssS0FBS3ZMLEtBQWQ7QUFDQSxXQUFJM08sT0FBTyxLQUFLZ1AsS0FBaEI7QUFDQSxXQUFJeFEsU0FBUyxLQUFLQSxNQUFsQjs7QUFOTTtBQUFBO0FBQUE7O0FBQUE7QUFRTiwrQkFBY3pNLEVBQUUyTyxNQUFGLENBQVN1WixFQUFULEVBQWEsR0FBYixDQUFkLG1JQUFpQztBQUFBLGVBQXhCL2YsQ0FBd0I7O0FBQy9CLGVBQUl1ZCxNQUFNd0MsS0FBSy9mLEVBQUU4TixLQUFGLEdBQVVrUyxFQUF6QjtBQUNBLGdCQUFLLElBQUl4QyxLQUFLLENBQWQsRUFBaUJBLEtBQUtzQyxFQUF0QixFQUEwQnRDLElBQTFCLEVBQWdDO0FBQzlCLGlCQUFJQyxLQUFLLENBQUN6ZCxFQUFFNkQsQ0FBRixHQUFNMlosRUFBUCxJQUFhcUMsRUFBYixHQUFrQjdmLEVBQUVPLENBQTdCO0FBQ0Esa0JBQUssSUFBSW1kLEtBQUssQ0FBZCxFQUFpQkEsS0FBS21DLEVBQXRCLEVBQTBCbkMsSUFBMUIsRUFBZ0M7QUFDOUJwWixzQkFBT2lZLEtBQVAsQ0FBYWtCLElBQWIsRUFBbUIzWCxLQUFLeVgsS0FBTCxDQUFuQjtBQUNEO0FBQ0Y7QUFDRjtBQWhCSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCTixjQUFPLEtBQUtwQixNQUFMLEVBQVA7QUFDRDs7Ozs7O21CQWpGa0JzRCxNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0tBR2FRLE8sV0FBQUEsTztBQUVYLG9CQUFhQyxRQUFiLEVBQXVCN2UsS0FBdkIsRUFBOEJrRCxNQUE5QixFQUFzQztBQUFBOztBQUNwQyxVQUFLb1YsU0FBTCxHQUFpQnVHLFFBQWpCOztBQUVBLFVBQUs3ZSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLa0QsTUFBTCxHQUFjQSxNQUFkOztBQUVBLFVBQUsvTSxLQUFMO0FBQ0Q7Ozs7OEJBRVM7QUFDUixZQUFLMm9CLE1BQUwsR0FBYyxJQUFJM21CLEtBQUs0bUIsWUFBVCxDQUFzQixLQUFLL2UsS0FBM0IsRUFBa0MsS0FBS2tELE1BQXZDLENBQWQ7O0FBRUEsWUFBSzhYLEdBQUwsR0FBVzdpQixLQUFLNGhCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QixLQUFLOEUsTUFBTCxDQUFZQSxNQUFwQyxFQUE0QzNtQixLQUFLOGhCLFdBQUwsQ0FBaUJDLE9BQTdELENBQVg7QUFDQSxZQUFLYyxHQUFMLENBQVNnRSxTQUFULEdBQXFCN21CLEtBQUs4aEIsV0FBTCxDQUFpQkMsT0FBdEM7O0FBRUEsWUFBS0UsTUFBTCxHQUFjLElBQUlqaUIsS0FBS2dpQixNQUFULENBQWdCLEtBQUthLEdBQXJCLENBQWQ7O0FBRUEsWUFBSzdjLE9BQUwsR0FBZSxLQUFLMmdCLE1BQUwsQ0FBWUEsTUFBWixDQUFtQnhFLFVBQW5CLENBQThCLElBQTlCLEVBQW9DLEVBQUVDLE9BQU8sSUFBVCxFQUFlQyxXQUFXLEtBQTFCLEVBQXBDLENBQWY7QUFDRDs7OzZCQUVRO0FBQ1AsWUFBSzlFLEtBQUwsR0FBYSxDQUFiO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUksS0FBS29KLE1BQVQsRUFBaUI7QUFDZixjQUFLQSxNQUFMLENBQVkvbEIsT0FBWjtBQUNBLGNBQUsrbEIsTUFBTCxHQUFjLElBQWQ7QUFDRDtBQUNGOzs7MEJBRUtybEIsQyxFQUFHLENBQ1I7Ozs4QkFFUztBQUNSLFlBQUt3SixNQUFMLENBQVk2WCxNQUFaO0FBQ0Q7Ozt5QkFFVztBQUFFLGNBQU8sS0FBS3hDLFNBQUwsQ0FBZS9kLElBQXRCO0FBQTRCOzs7eUJBQzVCO0FBQUUsY0FBTyxLQUFLQSxJQUFMLENBQVUwSSxNQUFqQjtBQUF5Qjs7O3lCQUM1QjtBQUFFLGNBQU8sS0FBSzFJLElBQUwsQ0FBVTBrQixLQUFqQjtBQUF3Qjs7O3lCQUN2QjtBQUFFLGNBQU8sS0FBSzFrQixJQUFMLENBQVUya0IsUUFBakI7QUFBMkI7Ozs7OztLQUtsQ0MsYSxXQUFBQSxhOzs7QUFFWCwwQkFBYU4sUUFBYixFQUF1QjdlLEtBQXZCLEVBQThCa0QsTUFBOUIsRUFBc0NoTixPQUF0QyxFQUErQztBQUFBOztBQUFBLCtIQUN2QzJvQixRQUR1QyxFQUM3QjdlLEtBRDZCLEVBQ3RCa0QsTUFEc0I7O0FBRzdDLFdBQUtrYyxNQUFMOztBQUVBLFdBQUtoRixNQUFMLENBQVlsYixDQUFaLEdBQWdCLE1BQUsrRCxNQUFMLENBQVlvYyxRQUFaLEdBQXVCLE1BQUtwYyxNQUFMLENBQVlxYyxTQUFaLEdBQXdCLENBQS9EO0FBQ0EsV0FBS2xGLE1BQUwsQ0FBWTVYLENBQVosR0FBZ0IsTUFBS1MsTUFBTCxDQUFZc2MsUUFBWixHQUF1QixNQUFLdGMsTUFBTCxDQUFZdWMsU0FBWixHQUF3QixDQUEvRDtBQU42QztBQU85Qzs7O0dBVGdDWixPOztLQWN0QmEsZ0IsV0FBQUEsZ0I7OztBQUVYLDZCQUFhWixRQUFiLEVBQXVCN2UsS0FBdkIsRUFBOEJrRCxNQUE5QixFQUFzQ2hOLE9BQXRDLEVBQStDO0FBQUE7O0FBQUEsc0lBQ3ZDMm9CLFFBRHVDLEVBQzdCN2UsS0FENkIsRUFDdEJrRCxNQURzQjs7QUFHN0MsWUFBS3djLEdBQUwsR0FBVyxpQkFBRWpwQixHQUFGLENBQU1QLE9BQU4sRUFBZSxLQUFmLEVBQXNCLENBQXRCLENBQVg7QUFDQSxZQUFLcWtCLEtBQUwsR0FBYSxpQkFBRTlqQixHQUFGLENBQU1QLE9BQU4sRUFBZSxPQUFmLEVBQXdCLElBQXhCLENBQWI7O0FBRUEsWUFBS2twQixNQUFMOztBQUVBLFNBQUlub0IsSUFBSSxPQUFLc2pCLEtBQUwsR0FBYSxHQUFyQjtBQUNBLFNBQUk5VixPQUFPLE9BQUt0RyxPQUFMLENBQWF1YyxZQUFiLENBQTBCLENBQTFCLEVBQTZCLENBQTdCLEVBQWdDLE9BQUsxYSxLQUFyQyxFQUE0QyxPQUFLa0QsTUFBakQsQ0FBWDtBQUNBLFNBQUlpVyxTQUFTMVUsS0FBS0EsSUFBbEI7QUFDQSxTQUFJdVAsS0FBSyxPQUFLaFUsS0FBTCxHQUFhLENBQXRCO0FBQ0EsU0FBSTJjLFlBQUo7QUFDQSxVQUFLLElBQUluYSxJQUFJLENBQWIsRUFBZ0JBLElBQUksT0FBS1UsTUFBekIsRUFBaUNWLEtBQUssT0FBS2tkLEdBQTNDLEVBQWdEO0FBQzlDL0MsYUFBTW5hLElBQUl3UixFQUFWO0FBQ0EsWUFBSyxJQUFJdFYsSUFBSWllLEdBQWIsRUFBa0JqZSxJQUFJaWUsTUFBTTNJLEVBQTVCLEVBQWdDdFYsS0FBSyxDQUFyQyxFQUF3QztBQUN0Q3lhLGdCQUFPdkUsR0FBUCxDQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUzZCxDQUFWLENBQVgsRUFBeUJ5SCxDQUF6QjtBQUNEO0FBQ0Y7QUFDRCxZQUFLUCxPQUFMLENBQWFvYixZQUFiLENBQTBCOVUsSUFBMUIsRUFBZ0MsQ0FBaEMsRUFBbUMsQ0FBbkM7QUFuQjZDO0FBb0I5Qzs7O0dBdEJtQ21hLE87O0tBMkJ6QmUsZSxXQUFBQSxlOzs7QUFFWCw0QkFBYWQsUUFBYixFQUF1QjdlLEtBQXZCLEVBQThCa0QsTUFBOUIsRUFBc0NoTixPQUF0QyxFQUErQztBQUFBOztBQUFBLG9JQUN2QzJvQixRQUR1QyxFQUM3QjdlLEtBRDZCLEVBQ3RCa0QsTUFEc0I7O0FBRzdDLFlBQUswYyxJQUFMLEdBQVksaUJBQUVucEIsR0FBRixDQUFNUCxPQUFOLEVBQWUsTUFBZixFQUF1QixFQUF2QixDQUFaO0FBQ0EsWUFBSzJwQixLQUFMLEdBQWEsaUJBQUVwcEIsR0FBRixDQUFNUCxPQUFOLEVBQWUsT0FBZixFQUF3QixFQUF4QixDQUFiO0FBQ0EsWUFBS3FrQixLQUFMLEdBQWEsaUJBQUU5akIsR0FBRixDQUFNUCxPQUFOLEVBQWUsT0FBZixFQUF3QixHQUF4QixDQUFiOztBQUVBLFlBQUtrcEIsTUFBTDs7QUFFQSxTQUFJM2EsT0FBTyxPQUFLdEcsT0FBTCxDQUFhdWMsWUFBYixDQUEwQixDQUExQixFQUE2QixDQUE3QixFQUFnQyxPQUFLMWEsS0FBckMsRUFBNEMsT0FBS2tELE1BQWpELENBQVg7QUFDQSxTQUFJaVcsU0FBUzFVLEtBQUtBLElBQWxCO0FBQ0EsU0FBSXVQLEtBQUssT0FBS2hVLEtBQUwsR0FBYSxDQUF0QjtBQUNBLFNBQUl4QixNQUFNLE9BQUswRSxNQUFMLEdBQWM4USxFQUF4QjtBQUNBLFNBQUlsTyxJQUFJLENBQVI7QUFDQSxTQUFJbVcsSUFBSSxPQUFLL1ksTUFBYjtBQUNBLFNBQUlqTSxJQUFJLE9BQUtzakIsS0FBTCxHQUFhLEdBQXJCO0FBQ0EsU0FBSXVGLFdBQUo7QUFDQSxVQUFLLElBQUl0ZCxJQUFJLENBQWIsRUFBZ0JBLElBQUloRSxHQUFwQixFQUF5QmdFLEtBQUt3UixFQUE5QixFQUFrQztBQUNoQzhMLFlBQUtoYSxJQUFJbVcsQ0FBSixHQUFRaGxCLENBQWI7QUFDQSxZQUFLLElBQUlpSSxJQUFJc0QsQ0FBYixFQUFnQnRELElBQUlzRCxJQUFJd1IsRUFBeEIsRUFBNEI5VSxLQUFLLENBQWpDLEVBQW9DO0FBQ2xDaWEsZ0JBQU92RSxHQUFQLENBQVcsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYWtMLEVBQWIsQ0FBWCxFQUE2QjVnQixDQUE3QjtBQUNEO0FBQ0Q0RztBQUNEO0FBQ0QsWUFBSzNILE9BQUwsQ0FBYW9iLFlBQWIsQ0FBMEI5VSxJQUExQixFQUFnQyxDQUFoQyxFQUFtQyxDQUFuQzs7QUFFQSxZQUFLMlYsTUFBTCxDQUFZNVgsQ0FBWixHQUFnQixDQUFDLE9BQUs0WCxNQUFMLENBQVlsWCxNQUE3QjtBQTFCNkM7QUEyQjlDOzs7OzBCQUVLekosQyxFQUFHO0FBQ1AsV0FBSUEsSUFBSSxLQUFLaWMsS0FBVCxJQUFrQixLQUFLa0ssSUFBM0IsRUFBaUM7QUFDL0IsY0FBS3hGLE1BQUwsQ0FBWTVYLENBQVosSUFBaUIsS0FBS3FkLEtBQXRCO0FBQ0EsYUFBSSxLQUFLekYsTUFBTCxDQUFZNVgsQ0FBWixHQUFnQixLQUFLVSxNQUF6QixFQUFpQztBQUMvQixnQkFBS2tYLE1BQUwsQ0FBWTVYLENBQVosR0FBZ0IsQ0FBQyxLQUFLNFgsTUFBTCxDQUFZbFgsTUFBN0I7QUFDRDtBQUNELGNBQUt3UyxLQUFMLEdBQWFqYyxDQUFiOztBQUVBLGNBQUtxaEIsTUFBTDtBQUNEO0FBQ0Y7Ozs7R0F6Q2tDOEQsTzs7S0E4Q3hCbUIsYSxXQUFBQSxhOzs7QUFFWCwwQkFBYWxCLFFBQWIsRUFBdUI3ZSxLQUF2QixFQUE4QmtELE1BQTlCLEVBQXNDaE4sT0FBdEMsRUFBK0M7QUFBQTs7QUFBQSxnSUFDdkMyb0IsUUFEdUMsRUFDN0I3ZSxLQUQ2QixFQUN0QmtELE1BRHNCOztBQUc3QyxZQUFLMGMsSUFBTCxHQUFZLGlCQUFFbnBCLEdBQUYsQ0FBTVAsT0FBTixFQUFlLE1BQWYsRUFBdUIsR0FBdkIsQ0FBWjtBQUNBLFlBQUttTixLQUFMLEdBQWEsaUJBQUU1TSxHQUFGLENBQU1QLE9BQU4sRUFBZSxPQUFmLEVBQXdCLENBQXhCLENBQWI7QUFDQSxZQUFLMHBCLElBQUwsR0FBWSxpQkFBRW5wQixHQUFGLENBQU1QLE9BQU4sRUFBZSxNQUFmLEVBQXVCLElBQXZCLENBQVo7QUFDQSxZQUFLOHBCLEdBQUwsR0FBVyxpQkFBRXZwQixHQUFGLENBQU1QLE9BQU4sRUFBZSxLQUFmLEVBQXNCLEdBQXRCLENBQVg7QUFDQSxZQUFLK3BCLEtBQUwsR0FBYSxpQkFBRXhwQixHQUFGLENBQU1QLE9BQU4sRUFBZSxPQUFmLEVBQXdCLEdBQXhCLENBQWI7QUFDQSxZQUFLZ3FCLElBQUwsR0FBWSxpQkFBRXpwQixHQUFGLENBQU1QLE9BQU4sRUFBZSxNQUFmLEVBQXVCLEdBQXZCLENBQVo7QUFDQSxZQUFLcWtCLEtBQUwsR0FBYSxpQkFBRTlqQixHQUFGLENBQU1QLE9BQU4sRUFBZSxPQUFmLEVBQXdCLElBQXhCLENBQWI7O0FBRUEsWUFBS3dpQixNQUFMLEdBQWMsRUFBZDs7QUFFQSxTQUFJemhCLElBQUksT0FBS3NqQixLQUFMLEdBQWEsR0FBckI7QUFDQSxVQUFLLElBQUlwakIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLE9BQUtrTSxLQUF6QixFQUFnQ2xNLEdBQWhDLEVBQXFDO0FBQ25DLFdBQUlncEIsUUFBUSxJQUFJdkIsT0FBSixDQUFZLE9BQUszYixNQUFqQixFQUF5QixPQUFLakQsS0FBOUIsRUFBcUMsT0FBS2tELE1BQTFDLENBQVo7QUFDQWlkLGFBQU1mLE1BQU47QUFDQWUsYUFBTS9GLE1BQU4sQ0FBYWdHLE9BQWIsR0FBdUJqcEIsTUFBTSxDQUE3Qjs7QUFFQSxXQUFJc04sT0FBTzBiLE1BQU1oaUIsT0FBTixDQUFjdWMsWUFBZCxDQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFpQyxPQUFLMWEsS0FBdEMsRUFBNkMsT0FBS2tELE1BQWxELENBQVg7QUFDQSxXQUFJaVcsVUFBUzFVLEtBQUtBLElBQWxCO0FBQ0EsV0FBSWpHLE9BQU0yYSxRQUFPMWEsTUFBakI7QUFDQSxXQUFJb0osSUFBSSxPQUFLbVksR0FBYjtBQUNBLFdBQUlLLElBQUksT0FBS0osS0FBYjtBQUNBLFdBQUlscEIsSUFBSSxPQUFLbXBCLElBQWI7QUFDQSxXQUFJSSxRQUFRLE9BQUtWLElBQWpCO0FBQ0EsWUFBSyxJQUFJbGhCLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsSUFBcEIsRUFBeUJFLEtBQUssQ0FBOUIsRUFBaUM7QUFDL0IsYUFBSU0sS0FBS3VoQixNQUFMLE1BQWlCRCxLQUFyQixFQUE0QjtBQUMxQm5ILG1CQUFPdkUsR0FBUCxDQUFXLENBQUM1VixLQUFLQyxLQUFMLENBQVdELEtBQUt1aEIsTUFBTCxLQUFnQjFZLENBQTNCLENBQUQsRUFBZ0M3SSxLQUFLQyxLQUFMLENBQVdELEtBQUt1aEIsTUFBTCxLQUFnQkYsQ0FBM0IsQ0FBaEMsRUFBK0RyaEIsS0FBS0MsS0FBTCxDQUFXRCxLQUFLdWhCLE1BQUwsS0FBZ0J4cEIsQ0FBM0IsQ0FBL0QsRUFBOEZFLENBQTlGLENBQVgsRUFBNkd5SCxDQUE3RztBQUNEO0FBQ0Y7QUFDRHloQixhQUFNaGlCLE9BQU4sQ0FBY29iLFlBQWQsQ0FBMkI5VSxJQUEzQixFQUFpQyxDQUFqQyxFQUFvQyxDQUFwQztBQUNBLGNBQUtpVSxNQUFMLENBQVl2aEIsQ0FBWixJQUFpQmdwQixLQUFqQjtBQUNBLGNBQUtsZCxNQUFMLENBQVlxUyxLQUFaLENBQWtCMkosS0FBbEIsQ0FBd0I1RSxRQUF4QixDQUFpQzhGLE1BQU0vRixNQUF2QztBQUNEOztBQUVELFlBQUtvRyxTQUFMLEdBQWlCLGlCQUFFakYsSUFBRixDQUFPLE9BQUs3QyxNQUFaLENBQWpCO0FBcEM2QztBQXFDOUM7Ozs7K0JBRVU7QUFDVDs7QUFFQSxZQUFLLElBQUlqYixDQUFULElBQWMsS0FBS2liLE1BQW5CLEVBQTJCO0FBQ3pCLGFBQUl5SCxRQUFRLEtBQUt6SCxNQUFMLENBQVlqYixDQUFaLENBQVo7QUFDQTBpQixlQUFNcG5CLE9BQU47QUFDRDs7QUFFRCxZQUFLMmYsTUFBTCxHQUFjLEVBQWQ7QUFDQSxZQUFLOEgsU0FBTCxHQUFpQixFQUFqQjtBQUNEOzs7MEJBRUsvbUIsQyxFQUFHO0FBQ1AsV0FBSUEsSUFBSSxLQUFLaWMsS0FBVCxJQUFrQixLQUFLa0ssSUFBM0IsRUFBaUM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDL0IsZ0NBQWMsS0FBS1ksU0FBbkIsOEhBQThCO0FBQUEsaUJBQXJCL2lCLENBQXFCOztBQUM1QixrQkFBS2liLE1BQUwsQ0FBWWpiLENBQVosRUFBZTJjLE1BQWYsQ0FBc0JnRyxPQUF0QixHQUFnQyxLQUFoQztBQUNEO0FBSDhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSy9CLGFBQUlELFFBQVEsS0FBS0ssU0FBTCxDQUFleGhCLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS3VoQixNQUFMLEtBQWdCLEtBQUtDLFNBQUwsQ0FBZS9oQixNQUExQyxDQUFmLENBQVo7QUFDQSxjQUFLaWEsTUFBTCxDQUFZeUgsS0FBWixFQUFtQi9GLE1BQW5CLENBQTBCZ0csT0FBMUIsR0FBb0MsSUFBcEM7O0FBRUEsY0FBSzFLLEtBQUwsR0FBYWpjLENBQWI7O0FBRUEsY0FBS3FoQixNQUFMO0FBQ0Q7QUFDRjs7OztHQWxFZ0M4RCxPOztLQXVFdEI2QixVLFdBQUFBLFU7OztBQUVYLHVCQUFhNUIsUUFBYixFQUF1QjdlLEtBQXZCLEVBQThCa0QsTUFBOUIsRUFBc0NoTixPQUF0QyxFQUErQztBQUFBOztBQUFBLDBIQUN2QzJvQixRQUR1QyxFQUM3QjdlLEtBRDZCLEVBQ3RCa0QsTUFEc0I7O0FBRzdDLFlBQUtxWCxLQUFMLEdBQWEsaUJBQUU5akIsR0FBRixDQUFNUCxPQUFOLEVBQWUsT0FBZixFQUF3QixLQUF4QixDQUFiOztBQUVBLFlBQUtrcEIsTUFBTDs7QUFFQSxTQUFJM2EsT0FBTyxPQUFLdEcsT0FBTCxDQUFhdWMsWUFBYixDQUEwQixDQUExQixFQUE2QixDQUE3QixFQUFnQyxPQUFLMWEsS0FBckMsRUFBNEMsT0FBS2tELE1BQWpELENBQVg7QUFDQSxTQUFJaVcsU0FBUzFVLEtBQUtBLElBQWxCO0FBQ0EsU0FBSWpHLE1BQU0yYSxPQUFPMWEsTUFBakI7QUFDQSxTQUFJeEgsSUFBSSxPQUFLc2pCLEtBQUwsR0FBYSxHQUFyQjtBQUNBLFVBQUssSUFBSTdiLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsR0FBcEIsRUFBeUJFLEtBQUssRUFBOUIsRUFBa0M7QUFDaEN5YSxjQUFPdkUsR0FBUCxDQUFXLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCM2QsQ0FBaEIsQ0FBWCxFQUErQnlILENBQS9CO0FBQ0Q7QUFDRCxZQUFLUCxPQUFMLENBQWFvYixZQUFiLENBQTBCOVUsSUFBMUIsRUFBZ0MsQ0FBaEMsRUFBbUMsQ0FBbkM7QUFkNkM7QUFlOUM7OztHQWpCNkJtYSxPOztLQXNCbkI4QixVLFdBQUFBLFU7OztBQUVYLHVCQUFhN0IsUUFBYixFQUF1QjdlLEtBQXZCLEVBQThCa0QsTUFBOUIsRUFBc0NoTixPQUF0QyxFQUErQztBQUFBOztBQUFBLDBIQUN2QzJvQixRQUR1QyxFQUM3QjdlLEtBRDZCLEVBQ3RCa0QsTUFEc0I7O0FBRzdDLFlBQUt5ZCxNQUFMLEdBQWMsaUJBQUVscUIsR0FBRixDQUFNUCxPQUFOLEVBQWUsUUFBZixFQUF5QixJQUF6QixDQUFkO0FBQ0EsWUFBSzBxQixZQUFMLEdBQW9CLGlCQUFFbnFCLEdBQUYsQ0FBTVAsT0FBTixFQUFlLGNBQWYsRUFBK0IsR0FBL0IsQ0FBcEI7QUFDQSxZQUFLMnFCLGFBQUwsR0FBcUIsaUJBQUVwcUIsR0FBRixDQUFNUCxPQUFOLEVBQWUsZUFBZixFQUFnQyxJQUFoQyxDQUFyQjs7QUFFQSxZQUFLa3BCLE1BQUw7O0FBRUEsWUFBS2poQixPQUFMLENBQWEyaUIsd0JBQWIsR0FBd0MsUUFBeEM7QUFDQSxTQUFJQyxXQUFXLE9BQUs1aUIsT0FBTCxDQUFhNmlCLG9CQUFiLENBQWtDLE9BQUtoaEIsS0FBTCxHQUFhLENBQS9DLEVBQWtELE9BQUtrRCxNQUFMLEdBQWMsQ0FBaEUsRUFBbUUsT0FBS0EsTUFBTCxHQUFjLENBQWpGLEVBQW9GLE9BQUtsRCxLQUFMLEdBQWEsQ0FBakcsRUFBb0csT0FBS2tELE1BQUwsR0FBYyxDQUFsSCxFQUFxSCxPQUFLQSxNQUFMLEdBQWMsT0FBS3lkLE1BQXhJLENBQWY7QUFDQUksY0FBU0UsWUFBVCxDQUFzQixDQUF0QixFQUF5Qix5QkFBeUIsT0FBS0wsWUFBOUIsR0FBNkMsR0FBdEU7QUFDQUcsY0FBU0UsWUFBVCxDQUFzQixDQUF0QixFQUF5QixtQkFBbUIsT0FBS0osYUFBeEIsR0FBd0MsR0FBakU7QUFDQSxZQUFLMWlCLE9BQUwsQ0FBYStpQixTQUFiLEdBQXlCSCxRQUF6QjtBQUNBLFlBQUs1aUIsT0FBTCxDQUFhZ2pCLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsT0FBS25oQixLQUFqQyxFQUF3QyxPQUFLa0QsTUFBN0M7QUFDQSxZQUFLL0UsT0FBTCxDQUFhMmlCLHdCQUFiLEdBQXdDLGFBQXhDO0FBZjZDO0FBZ0I5Qzs7O0dBbEI2QmxDLE87O0tBdUJuQndDLFEsV0FBQUEsUTtBQUVYLHFCQUFhN21CLElBQWIsRUFBaUM7QUFBQSxTQUFkckUsT0FBYyx1RUFBSixFQUFJOztBQUFBOztBQUMvQixVQUFLb2YsS0FBTCxHQUFhL2EsSUFBYjs7QUFFQSxTQUFJMGtCLFFBQVExa0IsS0FBSzBrQixLQUFqQjtBQUNBLFNBQUlDLFdBQVcza0IsS0FBSzJrQixRQUFwQjs7QUFFQSxTQUFJbGYsUUFBUWtmLFNBQVNsZixLQUFyQjtBQUNBLFNBQUlrRCxTQUFTZ2MsU0FBU2hjLE1BQXRCO0FBQ0EsU0FBSUMsUUFBUSxDQUFaO0FBQ0EsU0FBSW1jLFlBQVksS0FBS0EsU0FBTCxJQUFrQixDQUFsQztBQUNBLFNBQUlFLFlBQVksS0FBS0EsU0FBTCxJQUFrQixDQUFsQzs7QUFFQSxVQUFLNUksS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFJOVEsSUFBSSxLQUFLOFEsS0FBYjs7QUFFQSxTQUFJLGlCQUFFbmdCLEdBQUYsQ0FBTVAsT0FBTixFQUFlLFFBQWYsQ0FBSixFQUE4QjtBQUM1QjRQLFNBQUVsTCxNQUFGLEdBQVcsSUFBSXVrQixhQUFKLENBQWtCLElBQWxCLEVBQXdCLEtBQUtsYyxNQUFMLENBQVlqRCxLQUFwQyxFQUEyQyxLQUFLaUQsTUFBTCxDQUFZQyxNQUF2RCxFQUErRCxpQkFBRXpNLEdBQUYsQ0FBTVAsT0FBTixFQUFlLFFBQWYsQ0FBL0QsQ0FBWDtBQUNBNFAsU0FBRWxMLE1BQUYsQ0FBU3dmLE1BQVQsQ0FBZ0JqWCxLQUFoQixHQUF3QixJQUFJaEwsS0FBS2lLLEtBQVQsQ0FBZWUsS0FBZixFQUFzQkEsS0FBdEIsQ0FBeEI7QUFDQThiLGFBQU01RSxRQUFOLENBQWV2VSxFQUFFbEwsTUFBRixDQUFTd2YsTUFBeEI7QUFDRDs7QUFFRCxTQUFJLGlCQUFFM2pCLEdBQUYsQ0FBTVAsT0FBTixFQUFlLFdBQWYsQ0FBSixFQUFpQztBQUMvQjRQLFNBQUV5UyxTQUFGLEdBQWMsSUFBSWtILGdCQUFKLENBQXFCLElBQXJCLEVBQTJCemYsS0FBM0IsRUFBa0NrRCxNQUFsQyxFQUEwQyxpQkFBRXpNLEdBQUYsQ0FBTVAsT0FBTixFQUFlLFdBQWYsQ0FBMUMsQ0FBZDtBQUNBK29CLGFBQU01RSxRQUFOLENBQWV2VSxFQUFFeVMsU0FBRixDQUFZNkIsTUFBM0I7QUFDRDs7QUFFRCxTQUFJLGlCQUFFM2pCLEdBQUYsQ0FBTVAsT0FBTixFQUFlLFVBQWYsQ0FBSixFQUFnQztBQUM5QjRQLFNBQUUwUyxRQUFGLEdBQWEsSUFBSW1ILGVBQUosQ0FBb0IsSUFBcEIsRUFBMEIzZixLQUExQixFQUFpQ2tELE1BQWpDLEVBQXlDLGlCQUFFek0sR0FBRixDQUFNUCxPQUFOLEVBQWUsVUFBZixDQUF6QyxDQUFiO0FBQ0Erb0IsYUFBTTVFLFFBQU4sQ0FBZXZVLEVBQUUwUyxRQUFGLENBQVc0QixNQUExQjtBQUNEOztBQUVELFNBQUksaUJBQUUzakIsR0FBRixDQUFNUCxPQUFOLEVBQWUsS0FBZixDQUFKLEVBQTJCO0FBQ3pCNFAsU0FBRTJTLEdBQUYsR0FBUSxJQUFJZ0ksVUFBSixDQUFlLElBQWYsRUFBcUJ6Z0IsS0FBckIsRUFBNEJrRCxNQUE1QixFQUFvQyxpQkFBRXpNLEdBQUYsQ0FBTVAsT0FBTixFQUFlLEtBQWYsQ0FBcEMsQ0FBUjtBQUNBK29CLGFBQU01RSxRQUFOLENBQWV2VSxFQUFFMlMsR0FBRixDQUFNMkIsTUFBckI7QUFDRDs7QUFFRCxTQUFJLGlCQUFFM2pCLEdBQUYsQ0FBTVAsT0FBTixFQUFlLFFBQWYsQ0FBSixFQUE4QjtBQUM1QjRQLFNBQUU0UyxNQUFGLEdBQVcsSUFBSXFILGFBQUosQ0FBa0IsSUFBbEIsRUFBd0IvZixLQUF4QixFQUErQmtELE1BQS9CLEVBQXVDLGlCQUFFek0sR0FBRixDQUFNUCxPQUFOLEVBQWUsUUFBZixDQUF2QyxDQUFYO0FBQ0Q7O0FBRUQsU0FBSSxpQkFBRU8sR0FBRixDQUFNUCxPQUFOLEVBQWUsS0FBZixDQUFKLEVBQTJCO0FBQ3pCNFAsU0FBRTZTLEdBQUYsR0FBUSxJQUFJK0gsVUFBSixDQUFlLElBQWYsRUFBcUIxZ0IsS0FBckIsRUFBNEJrRCxNQUE1QixFQUFvQyxpQkFBRXpNLEdBQUYsQ0FBTVAsT0FBTixFQUFlLEtBQWYsQ0FBcEMsQ0FBUjtBQUNBK29CLGFBQU01RSxRQUFOLENBQWV2VSxFQUFFNlMsR0FBRixDQUFNeUIsTUFBckI7QUFDRDs7QUFFRCxTQUFJLGlCQUFFM2pCLEdBQUYsQ0FBTVAsT0FBTixFQUFlLFNBQWYsQ0FBSixFQUErQjtBQUM3QixXQUFJOGtCLE1BQU03aUIsS0FBSzRoQixPQUFMLENBQWFrQixTQUFiLENBQXVCLGFBQWEsbUJBQUF2Z0IsQ0FBUSxFQUFSLENBQXBDLENBQVY7QUFDQW9MLFNBQUU4UyxPQUFGLEdBQVksSUFBSXpnQixLQUFLZ2lCLE1BQVQsQ0FBZ0JhLEdBQWhCLENBQVo7QUFDQWxWLFNBQUU4UyxPQUFGLENBQVU1WSxLQUFWLEdBQWtCQSxRQUFRc2YsU0FBMUI7QUFDQXhaLFNBQUU4UyxPQUFGLENBQVUxVixNQUFWLEdBQW1CQSxTQUFTc2MsU0FBNUI7QUFDQTFaLFNBQUU4UyxPQUFGLENBQVUxWixDQUFWLEdBQWNvZ0IsWUFBWSxDQUFDLENBQTNCO0FBQ0F4WixTQUFFOFMsT0FBRixDQUFVcFcsQ0FBVixHQUFjZ2QsWUFBWSxDQUFDLENBQTNCO0FBQ0FQLGFBQU01RSxRQUFOLENBQWV2VSxFQUFFOFMsT0FBakI7QUFDRDtBQUNGOzs7OzBCQUVLbmYsQyxFQUFHO0FBQ1AsV0FBTXFNLElBQUksS0FBSzhRLEtBQWY7QUFDQSxZQUFLLElBQUluWixDQUFULElBQWNxSSxDQUFkLEVBQWlCO0FBQ2YsYUFBSUEsRUFBRXJJLENBQUYsRUFBS2xGLElBQVQsRUFBZTtBQUNidU4sYUFBRXJJLENBQUYsRUFBS2xGLElBQUwsQ0FBVWtCLENBQVY7QUFDRDtBQUNGO0FBQ0Y7Ozs2QkFFUTtBQUNQLFdBQU1xTSxJQUFJLEtBQUs4USxLQUFmO0FBQ0EsWUFBSyxJQUFJblosQ0FBVCxJQUFjcUksQ0FBZCxFQUFpQjtBQUNmLGFBQUlBLEVBQUVySSxDQUFGLEVBQUt0SCxLQUFULEVBQWdCO0FBQ2QyUCxhQUFFckksQ0FBRixFQUFLdEgsS0FBTDtBQUNEO0FBQ0Y7QUFDRjs7OytCQUVVO0FBQ1QsV0FBTTJQLElBQUksS0FBSzhRLEtBQWY7QUFDQSxZQUFLLElBQUluWixDQUFULElBQWNxSSxDQUFkLEVBQWlCO0FBQ2YsYUFBSUEsRUFBRXJJLENBQUYsRUFBSzFFLE9BQVQsRUFBa0I7QUFDaEIrTSxhQUFFckksQ0FBRixFQUFLMUUsT0FBTDtBQUNEO0FBQ0Y7QUFDRjs7OzhCQVFTLENBRVQ7Ozt5QkFSVztBQUFFLGNBQU8sS0FBS3VjLEtBQVo7QUFBbUI7Ozt5QkFDbkI7QUFBRSxjQUFPLEtBQUtBLEtBQUwsQ0FBV3JTLE1BQWxCO0FBQTBCOzs7eUJBQzdCO0FBQUUsY0FBTyxLQUFLcVMsS0FBTCxDQUFXMkosS0FBbEI7QUFBeUI7Ozt5QkFDeEI7QUFBRSxjQUFPLEtBQUszSixLQUFMLENBQVc0SixRQUFsQjtBQUE0Qjs7O3lCQUNoQztBQUFFLGNBQU8sS0FBS3RJLEtBQUwsQ0FBV2hjLE1BQWxCO0FBQTBCOzs7Ozs7Ozs7O0FDdlY1Qyx3RTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyx1REFBdUQ7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNmQSwyRDs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0tBRXFCeW1CLEc7OztBQUVuQixnQkFBYTltQixJQUFiLEVBQW1CO0FBQUE7O0FBQUEsMkdBQ1hBLElBRFc7O0FBR2pCLFdBQUs2YyxJQUFMLENBQVUsS0FBVixFQUFpQixLQUFqQixFQUF3QixDQUFDLE9BQUQsQ0FBeEI7O0FBRUEsV0FBS2tLLFVBQUwsR0FBa0IsTUFBS0MsU0FBTCxDQUFleHBCLElBQWYsT0FBbEI7QUFDQSxXQUFLeXBCLFFBQUwsR0FBZ0IsTUFBS0MsT0FBTCxDQUFhMXBCLElBQWIsT0FBaEI7O0FBRUFDLFlBQU9DLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLE1BQUtxcEIsVUFBeEM7QUFDQXRwQixZQUFPQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxNQUFLdXBCLFFBQXRDOztBQUVBLFdBQUtyckIsS0FBTDtBQVhpQjtBQVlsQjs7Ozs2QkFFUTtBQUNQOztBQUVBLFlBQUt1ckIsS0FBTCxHQUFhLENBQWI7QUFDQSxZQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsWUFBS0MsS0FBTCxHQUFhLEVBQWI7O0FBRUEsY0FBTyxJQUFQO0FBQ0Q7OzsrQkFFVTtBQUNUNXBCLGNBQU82cEIsbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0MsS0FBS1AsVUFBM0M7QUFDQXRwQixjQUFPNnBCLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DLEtBQUtMLFFBQXpDO0FBQ0E7QUFDRDs7O2tDQXFCYWxkLEMsRUFBRztBQUNmLGNBQU87QUFDTGtGLGNBQUtsRixFQUFFa0YsR0FERjtBQUVMc1ksa0JBQVN4ZCxFQUFFd2QsT0FGTjtBQUdMdkcsZUFBTSxLQUFLcUcsS0FITjtBQUlMRyxlQUFNLEtBQUtMLEtBSk47QUFLTE0sbUJBQVUsS0FBS0wsU0FMVjtBQU1MTSxnQkFBTyxLQUFLQSxLQU5QO0FBT0xDLGVBQU0sS0FBS0EsSUFQTjtBQVFMQyxjQUFLLEtBQUtBLEdBUkw7QUFTTEMsZUFBTSxLQUFLQSxJQVROO0FBVUxDLGlCQUFRLEtBQUtBLE1BVlI7QUFXTEMsZUFBTSxLQUFLQSxJQVhOO0FBWUxDLGVBQU0sS0FBS0EsSUFaTjtBQWFMQyxlQUFNLEtBQUtBLElBYk47QUFjTEMsZUFBTSxLQUFLQSxJQWROO0FBZUxDLGVBQU0sS0FBS0EsSUFmTjtBQWdCTEMsYUFBSSxLQUFLQSxFQWhCSjtBQWlCTEMsZUFBTSxLQUFLQSxJQWpCTjtBQWtCTDdXLGdCQUFPLEtBQUtBLEtBbEJQO0FBbUJMRCxlQUFNLEtBQUtBO0FBbkJOLFFBQVA7QUFxQkQ7OzsrQkFFVXhILEMsRUFBRztBQUNaLFdBQUkrZCxTQUFTL2QsRUFBRXVlLFFBQUYsS0FBZSxDQUE1QjtBQUNBLFdBQUlSLE1BQUosRUFBWTtBQUNWLGNBQUtYLEtBQUwsSUFBYyxJQUFkO0FBQ0QsUUFGRCxNQUdLO0FBQ0gsY0FBS0EsS0FBTCxJQUFjLENBQUMsSUFBZjtBQUNEO0FBQ0QsWUFBS0UsS0FBTCxDQUFXdGQsRUFBRXdkLE9BQWIsSUFBd0IsQ0FBeEI7O0FBRUEsZUFBUXhkLEVBQUVrRixHQUFWO0FBQ0UsY0FBSyxPQUFMO0FBQ0UsZ0JBQUtrWSxLQUFMLElBQWMsSUFBZDtBQUNBOztBQUVGLGNBQUssU0FBTDtBQUNFLGdCQUFLQSxLQUFMLElBQWMsSUFBZDtBQUNBOztBQUVGLGNBQUssS0FBTDtBQUNFLGdCQUFLQSxLQUFMLElBQWMsSUFBZDtBQUNBOztBQUVGLGNBQUssTUFBTDtBQUNFLGdCQUFLQSxLQUFMLElBQWMsSUFBZDtBQUNBOztBQUVGLGNBQUssU0FBTDtBQUNFLGdCQUFLQyxTQUFMLElBQWtCLElBQWxCO0FBQ0E7O0FBRUYsY0FBSyxHQUFMO0FBQ0UsZUFBSVUsTUFBSixFQUFZO0FBQ1Ysa0JBQUtWLFNBQUwsSUFBa0IsSUFBbEI7QUFDRDtBQUNEOztBQUVGLGNBQUssV0FBTDtBQUNFLGdCQUFLQSxTQUFMLElBQWtCLElBQWxCO0FBQ0E7O0FBRUYsY0FBSyxHQUFMO0FBQ0UsZUFBSVUsTUFBSixFQUFZO0FBQ1Ysa0JBQUtWLFNBQUwsSUFBa0IsSUFBbEI7QUFDRDtBQUNEOztBQUVGLGNBQUssV0FBTDtBQUNFLGdCQUFLQSxTQUFMLElBQWtCLElBQWxCO0FBQ0E7O0FBRUYsY0FBSyxHQUFMO0FBQ0UsZUFBSVUsTUFBSixFQUFZO0FBQ1Ysa0JBQUtWLFNBQUwsSUFBa0IsSUFBbEI7QUFDRDtBQUNEOztBQUVGLGNBQUssWUFBTDtBQUNFLGdCQUFLQSxTQUFMLElBQWtCLElBQWxCO0FBQ0E7O0FBRUYsY0FBSyxHQUFMO0FBQVU7QUFDUixlQUFJVSxNQUFKLEVBQVk7QUFDVixrQkFBS1YsU0FBTCxJQUFrQixJQUFsQjtBQUNEO0FBQ0Q7O0FBRUYsY0FBSyxHQUFMO0FBQVU7QUFDUixnQkFBS0EsU0FBTCxJQUFrQixJQUFsQjtBQUNBOztBQUVGLGNBQUssR0FBTDtBQUFVO0FBQ1IsZ0JBQUtBLFNBQUwsSUFBa0IsSUFBbEI7QUFDQTs7QUFFRixjQUFLLEdBQUw7QUFBVTtBQUNSLGdCQUFLQSxTQUFMLElBQWtCLElBQWxCO0FBQ0E7O0FBRUYsY0FBSyxHQUFMO0FBQVU7QUFDUixnQkFBS0EsU0FBTCxJQUFrQixJQUFsQjtBQUNBOztBQUVGLGNBQUssT0FBTDtBQUFjO0FBQ1osZ0JBQUtBLFNBQUwsSUFBa0IsS0FBbEI7QUFDQTtBQTNFSjs7QUE4RUEsWUFBS3BvQixJQUFMLENBQVUsVUFBVixFQUFzQixLQUFLdXBCLFlBQUwsQ0FBa0J4ZSxDQUFsQixDQUF0Qjs7QUFFQUEsU0FBRXllLGVBQUY7QUFDRDs7OzZCQUVRemUsQyxFQUFHO0FBQ1YsV0FBSStkLFNBQVMvZCxFQUFFdWUsUUFBRixLQUFlLENBQTVCO0FBQ0EsV0FBSVIsTUFBSixFQUFZO0FBQ1YsY0FBS1gsS0FBTCxJQUFjLElBQWQ7QUFDRCxRQUZELE1BR0s7QUFDSCxjQUFLQSxLQUFMLElBQWMsQ0FBQyxJQUFmO0FBQ0Q7QUFDRCxZQUFLRSxLQUFMLENBQVd0ZCxFQUFFd2QsT0FBYixJQUF3QixDQUF4Qjs7QUFFQSxlQUFReGQsRUFBRWtGLEdBQVY7QUFDRSxjQUFLLE9BQUw7QUFDRSxnQkFBS2tZLEtBQUwsSUFBYyxDQUFDLElBQWY7QUFDQTs7QUFFRixjQUFLLFNBQUw7QUFDRSxnQkFBS0EsS0FBTCxJQUFjLENBQUMsSUFBZjtBQUNBOztBQUVGLGNBQUssS0FBTDtBQUNFLGdCQUFLQSxLQUFMLElBQWMsQ0FBQyxJQUFmO0FBQ0E7O0FBRUYsY0FBSyxNQUFMO0FBQ0UsZ0JBQUtBLEtBQUwsSUFBYyxDQUFDLElBQWY7QUFDQTs7QUFFRixjQUFLLFNBQUw7QUFDRSxnQkFBS0MsU0FBTCxJQUFrQixDQUFDLElBQW5CO0FBQ0E7O0FBRUYsY0FBSyxHQUFMO0FBQ0UsZUFBSVUsTUFBSixFQUFZO0FBQ1Ysa0JBQUtWLFNBQUwsSUFBa0IsQ0FBQyxJQUFuQjtBQUNEO0FBQ0Q7O0FBRUYsY0FBSyxXQUFMO0FBQ0UsZ0JBQUtBLFNBQUwsSUFBa0IsQ0FBQyxJQUFuQjtBQUNBOztBQUVGLGNBQUssR0FBTDtBQUNFLGVBQUlVLE1BQUosRUFBWTtBQUNWLGtCQUFLVixTQUFMLElBQWtCLENBQUMsSUFBbkI7QUFDRDtBQUNEOztBQUVGLGNBQUssV0FBTDtBQUNFLGdCQUFLQSxTQUFMLElBQWtCLENBQUMsSUFBbkI7QUFDQTs7QUFFRixjQUFLLEdBQUw7QUFDRSxlQUFJVSxNQUFKLEVBQVk7QUFDVixrQkFBS1YsU0FBTCxJQUFrQixDQUFDLElBQW5CO0FBQ0Q7QUFDRDs7QUFFRixjQUFLLFlBQUw7QUFDRSxnQkFBS0EsU0FBTCxJQUFrQixDQUFDLElBQW5CO0FBQ0E7O0FBRUYsY0FBSyxHQUFMO0FBQVU7QUFDUixlQUFJVSxNQUFKLEVBQVk7QUFDVixrQkFBS1YsU0FBTCxJQUFrQixDQUFDLElBQW5CO0FBQ0Q7QUFDRDs7QUFFRixjQUFLLEdBQUw7QUFBVTtBQUNSLGdCQUFLQSxTQUFMLElBQWtCLENBQUMsSUFBbkI7QUFDQTs7QUFFRixjQUFLLEdBQUw7QUFBVTtBQUNSLGdCQUFLQSxTQUFMLElBQWtCLENBQUMsSUFBbkI7QUFDQTs7QUFFRixjQUFLLEdBQUw7QUFBVTtBQUNSLGdCQUFLQSxTQUFMLElBQWtCLENBQUMsSUFBbkI7QUFDQTs7QUFFRixjQUFLLEdBQUw7QUFBVTtBQUNSLGdCQUFLQSxTQUFMLElBQWtCLENBQUMsSUFBbkI7QUFDQTs7QUFFRixjQUFLLE9BQUw7QUFBYztBQUNaLGdCQUFLQSxTQUFMLElBQWtCLENBQUMsS0FBbkI7QUFDQTtBQTNFSjs7QUE4RUEsWUFBS3BvQixJQUFMLENBQVUsUUFBVixFQUFvQixLQUFLdXBCLFlBQUwsQ0FBa0J4ZSxDQUFsQixDQUFwQjs7QUFFQUEsU0FBRXllLGVBQUY7QUFDRDs7O3lCQW5PVztBQUFFLGNBQU8sS0FBS3JCLEtBQVo7QUFBbUI7Ozt5QkFDakI7QUFBRSxjQUFPLEtBQUtDLFNBQVo7QUFBdUI7Ozt5QkFDN0I7QUFBRSxjQUFPLEtBQUtDLEtBQVo7QUFBbUI7Ozt5QkFFcEI7QUFBRSxjQUFPLEtBQUtGLEtBQUwsR0FBYSxJQUFwQjtBQUEwQjs7O3lCQUM3QjtBQUFFLGNBQU8sS0FBS0EsS0FBTCxHQUFhLElBQXBCO0FBQTBCOzs7eUJBQzdCO0FBQUUsY0FBTyxLQUFLQSxLQUFMLEdBQWEsSUFBcEI7QUFBMEI7Ozt5QkFDM0I7QUFBRSxjQUFPLEtBQUtBLEtBQUwsR0FBYSxJQUFwQjtBQUEwQjs7O3lCQUMxQjtBQUFFLGNBQU8sS0FBS0EsS0FBTCxHQUFhLElBQXBCO0FBQTBCOzs7eUJBQzlCO0FBQUUsY0FBTyxLQUFLQyxTQUFMLEdBQWlCLElBQXhCO0FBQThCOzs7eUJBQ2hDO0FBQUUsY0FBTyxLQUFLQSxTQUFMLEdBQWlCLElBQXhCO0FBQThCOzs7eUJBQ2hDO0FBQUUsY0FBTyxLQUFLQSxTQUFMLEdBQWlCLElBQXhCO0FBQThCOzs7eUJBQ2hDO0FBQUUsY0FBTyxLQUFLQSxTQUFMLEdBQWlCLElBQXhCO0FBQThCOzs7eUJBQ2hDO0FBQUUsY0FBTyxLQUFLQSxTQUFMLEdBQWlCLEtBQXhCO0FBQStCOzs7eUJBQ25DO0FBQUUsY0FBTyxLQUFLQSxTQUFMLEdBQWlCLElBQXhCO0FBQThCOzs7eUJBQzlCO0FBQUUsY0FBTyxLQUFLQSxTQUFMLEdBQWlCLElBQXhCO0FBQThCOzs7eUJBQy9CO0FBQUUsY0FBTyxLQUFLQSxTQUFMLEdBQWlCLElBQXhCO0FBQThCOzs7eUJBQ2pDO0FBQUUsY0FBTyxLQUFLQSxTQUFMLEdBQWlCLElBQXhCO0FBQThCOzs7Ozs7bUJBakR6Qk4sRzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0tBRXFCMkIsTTs7O0FBRW5CLG1CQUFhem9CLElBQWIsRUFBbUI7QUFBQTs7QUFBQSxpSEFDWEEsSUFEVzs7QUFHakIsV0FBSzZjLElBQUwsQ0FBVSxLQUFWLEVBQWlCLFFBQWpCLEVBQTJCLENBQUMsT0FBRCxFQUFVLGVBQVYsRUFBMkIsa0JBQTNCLENBQTNCOztBQUVBLFNBQUk2SCxRQUFRMWtCLEtBQUswa0IsS0FBakI7QUFDQSxTQUFJQSxLQUFKLEVBQVc7QUFDVEEsYUFBTWdFLFdBQU4sR0FBb0IsSUFBcEI7O0FBRUEsYUFBS0MsWUFBTCxHQUFvQixNQUFLQyxXQUFMLENBQWlCcHJCLElBQWpCLE9BQXBCO0FBQ0EsYUFBS3FyQixZQUFMLEdBQW9CLE1BQUtDLFdBQUwsQ0FBaUJ0ckIsSUFBakIsT0FBcEI7QUFDQSxhQUFLdXJCLFVBQUwsR0FBa0IsTUFBS0MsU0FBTCxDQUFleHJCLElBQWYsT0FBbEI7O0FBRUFrbkIsYUFBTTFaLEVBQU4sQ0FBUyxXQUFULEVBQXNCLE1BQUsyZCxZQUEzQjtBQUNBakUsYUFBTTFaLEVBQU4sQ0FBUyxXQUFULEVBQXNCLE1BQUsyZCxZQUEzQjtBQUNBakUsYUFBTTFaLEVBQU4sQ0FBUyxZQUFULEVBQXVCLE1BQUsyZCxZQUE1Qjs7QUFFQWpFLGFBQU0xWixFQUFOLENBQVMsV0FBVCxFQUFzQixNQUFLNmQsWUFBM0I7O0FBRUFuRSxhQUFNMVosRUFBTixDQUFTLFNBQVQsRUFBb0IsTUFBSytkLFVBQXpCO0FBQ0FyRSxhQUFNMVosRUFBTixDQUFTLFVBQVQsRUFBcUIsTUFBSytkLFVBQTFCO0FBQ0FyRSxhQUFNMVosRUFBTixDQUFTLGdCQUFULEVBQTJCLE1BQUsrZCxVQUFoQztBQUNBckUsYUFBTTFaLEVBQU4sQ0FBUyxpQkFBVCxFQUE0QixNQUFLK2QsVUFBakM7QUFDRDs7QUFFRCxXQUFLbnRCLEtBQUw7QUF6QmlCO0FBMEJsQjs7Ozs2QkFFUTtBQUNQOztBQUVBLFlBQUsybkIsRUFBTCxHQUFVLENBQVY7QUFDQSxZQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNBLFlBQUt5RixLQUFMLEdBQWEsQ0FBYjs7QUFFQSxjQUFPLElBQVA7QUFDRDs7OytCQUVVO0FBQ1QsV0FBSXZFLFFBQVEsS0FBSzNKLEtBQUwsQ0FBVzJKLEtBQXZCO0FBQ0EsV0FBSUEsS0FBSixFQUFXO0FBQ1RBLGVBQU01WixHQUFOLENBQVUsV0FBVixFQUF1QixLQUFLNmQsWUFBNUI7QUFDQWpFLGVBQU01WixHQUFOLENBQVUsV0FBVixFQUF1QixLQUFLNmQsWUFBNUI7QUFDQWpFLGVBQU01WixHQUFOLENBQVUsWUFBVixFQUF3QixLQUFLNmQsWUFBN0I7O0FBRUFqRSxlQUFNNVosR0FBTixDQUFVLFdBQVYsRUFBdUIsS0FBSytkLFlBQTVCOztBQUVBbkUsZUFBTTVaLEdBQU4sQ0FBVSxTQUFWLEVBQXFCLEtBQUtpZSxVQUExQjtBQUNBckUsZUFBTTVaLEdBQU4sQ0FBVSxVQUFWLEVBQXNCLEtBQUtpZSxVQUEzQjtBQUNBckUsZUFBTTVaLEdBQU4sQ0FBVSxnQkFBVixFQUE0QixLQUFLaWUsVUFBakM7QUFDQXJFLGVBQU01WixHQUFOLENBQVUsaUJBQVYsRUFBNkIsS0FBS2llLFVBQWxDO0FBQ0Q7QUFDRDtBQUNEOzs7NEJBMkJPO0FBQ04sY0FBTyxJQUFQO0FBQ0Q7OztrQ0FFYWhmLEMsRUFBRztBQUNmLFdBQUk0YSxXQUFXLEtBQUs1SixLQUFMLENBQVc0SixRQUExQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsY0FBTyxFQUFFaGdCLEdBQUcsQ0FBTCxFQUFRc0QsR0FBRyxDQUFYLEVBQWNpaEIsUUFBUW5mLEVBQUVHLElBQUYsQ0FBT2lmLGFBQVAsQ0FBcUJELE1BQTNDLEVBQVA7QUFDRDs7O2lDQUVZbmYsQyxFQUFHO0FBQUEsMkJBQ1MsS0FBS3FmLFlBQUwsQ0FBa0JyZixDQUFsQixDQURUO0FBQUEsV0FDUnBGLENBRFEsaUJBQ1JBLENBRFE7QUFBQSxXQUNMc0QsQ0FESyxpQkFDTEEsQ0FESztBQUFBLFdBQ0ZpaEIsTUFERSxpQkFDRkEsTUFERTs7QUFHZCxlQUFRQSxNQUFSO0FBQ0UsY0FBSyxDQUFMO0FBQVE7QUFDTixnQkFBS0QsS0FBTCxJQUFjLElBQWQ7QUFDQTs7QUFFRixjQUFLLENBQUw7QUFBUTtBQUNOLGdCQUFLQSxLQUFMLElBQWMsSUFBZDtBQUNBOztBQUVGLGNBQUssQ0FBTDtBQUFRO0FBQ04sZ0JBQUtBLEtBQUwsSUFBYyxJQUFkO0FBQ0E7QUFYSjs7QUFjQSxZQUFLanFCLElBQUwsQ0FBVSxZQUFWLEVBQXdCLEVBQUUyRixJQUFGLEVBQUtzRCxJQUFMLEVBQVFpaEIsY0FBUixFQUF4Qjs7QUFFQW5mLFNBQUV5ZSxlQUFGO0FBQ0Q7OztpQ0FFWXplLEMsRUFBRztBQUFBLDRCQUNTLEtBQUtxZixZQUFMLENBQWtCcmYsQ0FBbEIsQ0FEVDtBQUFBLFdBQ1JwRixDQURRLGtCQUNSQSxDQURRO0FBQUEsV0FDTHNELENBREssa0JBQ0xBLENBREs7QUFBQSxXQUNGaWhCLE1BREUsa0JBQ0ZBLE1BREU7O0FBR2QsWUFBSzNGLEVBQUwsR0FBVTVlLENBQVY7QUFDQSxZQUFLNmUsRUFBTCxHQUFVdmIsQ0FBVjs7QUFFQSxZQUFLakosSUFBTCxDQUFVLFlBQVYsRUFBd0IsRUFBRTJGLElBQUYsRUFBS3NELElBQUwsRUFBUWloQixjQUFSLEVBQXhCOztBQUVBLFlBQUszSSxNQUFMOztBQUVBeFcsU0FBRXllLGVBQUY7QUFDRDs7OytCQUVVemUsQyxFQUFHO0FBQUEsNEJBQ1csS0FBS3FmLFlBQUwsQ0FBa0JyZixDQUFsQixDQURYO0FBQUEsV0FDTnBGLENBRE0sa0JBQ05BLENBRE07QUFBQSxXQUNIc0QsQ0FERyxrQkFDSEEsQ0FERztBQUFBLFdBQ0FpaEIsTUFEQSxrQkFDQUEsTUFEQTs7QUFHWixlQUFRQSxNQUFSO0FBQ0UsY0FBSyxDQUFMO0FBQVE7QUFDTixnQkFBS0QsS0FBTCxJQUFjLENBQUMsSUFBZjtBQUNBOztBQUVGLGNBQUssQ0FBTDtBQUFRO0FBQ04sZ0JBQUtBLEtBQUwsSUFBYyxDQUFDLElBQWY7QUFDQTs7QUFFRixjQUFLLENBQUw7QUFBUTtBQUNOLGdCQUFLQSxLQUFMLElBQWMsQ0FBQyxJQUFmO0FBQ0E7QUFYSjs7QUFjQSxZQUFLanFCLElBQUwsQ0FBVSxVQUFWLEVBQXNCLEVBQUUyRixJQUFGLEVBQUtzRCxJQUFMLEVBQVFpaEIsY0FBUixFQUF0Qjs7QUFFQW5mLFNBQUV5ZSxlQUFGO0FBQ0Q7Ozt5QkFoR1E7QUFBRSxjQUFPLEtBQUtqRixFQUFaO0FBQWdCLE07dUJBQ3BCMWpCLEssRUFBTztBQUNaLFlBQUswakIsRUFBTCxHQUFVMWpCLEtBQVY7QUFDRDs7O3lCQUVRO0FBQUUsY0FBTyxLQUFLMmpCLEVBQVo7QUFBZ0IsTTt1QkFDcEIzakIsSyxFQUFPO0FBQ1osWUFBSzJqQixFQUFMLEdBQVUzakIsS0FBVjtBQUNEOzs7eUJBRVc7QUFBRSxjQUFPLEtBQUtvcEIsS0FBWjtBQUFtQixNO3VCQUN2QnBwQixLLEVBQU87QUFDZixZQUFLb3BCLEtBQUwsR0FBYXBwQixLQUFiO0FBQ0Q7Ozt5QkFFb0I7QUFBRSxjQUFPLEtBQUt3cEIsY0FBWjtBQUE0QixNO3VCQUNoQ3hwQixLLEVBQU87QUFDeEIsWUFBS3dwQixjQUFMLEdBQXNCeHBCLEtBQXRCO0FBQ0Q7Ozt5QkFFdUI7QUFBRSxjQUFPLEtBQUt5cEIsaUJBQVo7QUFBK0IsTTt1QkFDbkN6cEIsSyxFQUFPO0FBQzNCLFlBQUt5cEIsaUJBQUwsR0FBeUJ6cEIsS0FBekI7QUFDRDs7Ozs7O21CQWhGa0I0b0IsTTs7Ozs7O0FDRnJCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQThFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSxpQ0FBZ0MsMkJBQTJCLGdCQUFnQixHQUFHLFlBQVksNEJBQTRCLEdBQUcsVUFBVSx3RUFBd0UsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLHNFQUFzRSxVQUFVLG1EQUFtRCw2QkFBNkIsR0FBRyxZQUFZLDRCQUE0QixHQUFHLCtCQUErQjs7QUFFeGU7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQSx5Q0FBd0MsZ0JBQWdCO0FBQ3hELEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQSxtQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBLFNBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxrQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0EsaUNBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXVEO0FBQ3ZEOztBQUVBLDhCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NWQ1OWU3NGMwNzcyNTBlNDYzOCIsImltcG9ydCAncGl4aS5qcydcbmltcG9ydCAnd2ViLWF1ZGlvLWRhdydcblxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tICcuL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZGVmYXVsdHMsIHJ1bnRpbWVfZXJyb3IgfSBmcm9tICcuL2dsb2JhbHMuanMnXG5cbmltcG9ydCBjc3MgZnJvbSAnLi4vc3R5bGUvbWFpbi5jc3MnXG4vLyBpbXBvcnQgdCBmcm9tICcuLi9odG1sL21haW4uaHRtbCdcblxuLy8gbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vIGVsLmlubmVySFRNTCA9IHRcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG5cbmltcG9ydCB7IEVtaXR0ZXIgfSBmcm9tICcuL2VtaXR0ZXIuanMnXG5cbmltcG9ydCBMZXhlciBmcm9tICcuL2NvbXBpbGVyL2xleGVyLmpzJ1xuaW1wb3J0IFBhcnNlciBmcm9tICcuL2NvbXBpbGVyL3BhcnNlci5qcydcbmltcG9ydCBUcmFuc3BpbGVyIGZyb20gJy4vY29tcGlsZXIvdHJhbnNwaWxlci5qcydcblxuaW1wb3J0IHsgTWVtb3J5IH0gZnJvbSAnLi92bS9tZW1vcnkuanMnXG5pbXBvcnQgTWVtb3J5TWFuYWdlciBmcm9tICcuL3ZtL21lbW9yeW1hbmFnZXIuanMnXG5pbXBvcnQgU3RhY2sgZnJvbSAnLi92bS9zdGFjay5qcydcbmltcG9ydCBJbnRlcnJ1cHQgZnJvbSAnLi92bS9pbnRlcnJ1cHQuanMnXG5pbXBvcnQgR3VpZGVvIGZyb20gJy4vdm0vY2hpcHMvZ3VpZGVvLmpzJ1xuaW1wb3J0IEtlbiBmcm9tICcuL3ZtL2NoaXBzL2tlbi5qcydcbmltcG9ydCBNaWNrZXkgZnJvbSAnLi92bS9jaGlwcy9taWNrZXkuanMnXG5cbi8vIGltcG9ydCB7IFZNIH0gZnJvbSAnLi9pbnRlcnByZXRlci92bS5qcydcblxuLy8gc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgIGxldCBzcmMgPSByZXF1aXJlKCdyYXchLi4vdGVzdC90ZXN0MS54MzInKVxuLy8gICBjb25zb2xlLmxvZyhzcmMpXG5cbi8vICAgbGV0IHZtID0gbmV3IFZNKClcbi8vICAgdm0ubG9hZChzcmMpXG4vLyAgIHZtLnJ1bigpXG4vLyAgIHZtLmR1bXAoKVxuLy8gfSwgMTAwKVxuXG4vLyBjb25zb2xlLmxvZyhoZXh5LmhleHkodm0ubWVtX2J1ZmZlciwgeyBvZmZzZXQ6IDAsIGxlbmd0aDogNTEyLCBkaXNwbGF5X29mZnNldDogMHgwMCwgd2lkdGg6IDE2LCBjYXBzOiAndXBwZXInLCBpbmRlbnQ6IDIgfSkpXG5cbmV4cG9ydCBjb25zdCBfU1RPUFBFRCA9IDBcbmV4cG9ydCBjb25zdCBfUlVOTklORyA9IDFcbmV4cG9ydCBjb25zdCBfUEFVU0VEID0gMlxuXG5leHBvcnQgY2xhc3MgTWFpbiBleHRlbmRzIEVtaXR0ZXIge1xuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICB0aGlzLl91cGRhdGVzID0ge1xuICAgICAgcXVldWU6IFtdLFxuXG4gICAgICBhZGQ6IG9wdGlvbnMgPT4ge1xuICAgICAgICBsZXQgbyA9IF8uZ2V0KG9wdGlvbnMsICdvYmplY3QnKVxuICAgICAgICBpZiAobyAmJiAhby5fX2luVXBkYXRlcykge1xuICAgICAgICAgIG8uX19pblVwZGF0ZXMgPSB0cnVlXG4gICAgICAgICAgdGhpcy5fdXBkYXRlcy5xdWV1ZS5wdXNoKG9wdGlvbnMpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogbyA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZXMucXVldWUgPSBfLnJlamVjdCh0aGlzLl91cGRhdGVzLnF1ZXVlLCB7IG9iamVjdDogbyB9KVxuICAgICAgICBvLl9faW5VcGRhdGVzID0gZmFsc2VcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpdHRsZUVuZGlhblxuICAgIGxldCBiID0gbmV3IEFycmF5QnVmZmVyKDQpXG4gICAgbGV0IGEgPSBuZXcgVWludDMyQXJyYXkoYilcbiAgICBsZXQgYyA9IG5ldyBVaW50OEFycmF5KGIpXG4gICAgYVswXSA9IDB4ZGVhZGJlZWZcbiAgICB0aGlzLkxFID0gY1swXSA9PT0gMHhlZlxuXG4gICAgdGhpcy5fbWVtb3J5ID0gbmV3IE1lbW9yeSh0aGlzKVxuICAgIHRoaXMuX21lbW9yeU1hbmFnZXIgPSBuZXcgTWVtb3J5TWFuYWdlcih0aGlzKVxuICAgIHRoaXMuX3N0YWNrID0gbmV3IFN0YWNrKHRoaXMpXG4gICAgdGhpcy5faW50ZXJydXB0cyA9IG5ldyBJbnRlcnJ1cHQodGhpcylcblxuICAgIHRoaXMuX2d1aWRlbyA9IG5ldyBHdWlkZW8odGhpcylcbiAgICB0aGlzLl9rZW4gPSBuZXcgS2VuKHRoaXMpXG4gICAgdGhpcy5fbWlja2V5ID0gbmV3IE1pY2tleSh0aGlzKVxuXG4gICAgdGhpcy5fb25SZXNpemUgPSB0aGlzLm9uUmVzaXplLmJpbmQodGhpcylcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25SZXNpemUpXG5cbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBQSVhJLnRpY2tlci5zaGFyZWQuYWRkKGRlbHRhID0+IHtcbiAgICAgIGlmICh0aGF0LnN0YXR1cyA9PT0gX1JVTk5JTkcpIHtcbiAgICAgICAgdGhhdC50aWNrKHBlcmZvcm1hbmNlLm5vdygpLCBkZWx0YSlcblxuICAgICAgICAvLyBsZXQgcmVuZGVyID0gZmFsc2VcblxuICAgICAgICBmb3IgKGxldCBxIG9mIHRoYXQuX3VwZGF0ZXMucXVldWUpIHtcbiAgICAgICAgICBxLm9iamVjdC5fX2luVXBkYXRlcyA9IGZhbHNlXG4gICAgICAgICAgLy8gaWYgKHEucmVuZGVyKSB7XG4gICAgICAgICAgICAvLyByZW5kZXIgPSB0cnVlXG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIGlmIChxLmNiKSB7XG4gICAgICAgICAgICBxLmNiKHEub2JqZWN0LCAuLi4ocS5hcmdzIHx8IFtdKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGF0Ll91cGRhdGVzLnF1ZXVlID0gW11cblxuICAgICAgICAvLyBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgLy8gdGhhdC5fZ3VpZGVvLnJlbmRlcmVyLnJlbmRlcih0aGF0Ll9ndWlkZW8uc3RhZ2UpXG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYXN5bmModGhpcywgdGhpcy5zdGFydCwgMTAwKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fZ3VpZGVvLmRlc3Ryb3koKVxuICAgIHRoaXMuX2tlbi5kZXN0cm95KClcbiAgICB0aGlzLl9taWNrZXkuZGVzdHJveSgpXG4gICAgdGhpcy5faW50ZXJydXB0cy5kZXN0cm95KClcbiAgICB0aGlzLl9tZW1vcnlNYW5hZ2VyLmRlc3Ryb3koKVxuICAgIHRoaXMuX21lbW9yeS5kZXN0cm95KClcbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSAwXG4gICAgdGhpcy5fcHJvZ3JhbSA9IHtcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGNvZGU6IHVuZGVmaW5lZCxcbiAgICAgIGZuOiB1bmRlZmluZWQsXG4gICAgfVxuICB9XG5cbiAgZGVmYXVsdCAobmFtZSkgeyByZXR1cm4gXy5nZXQoZGVmYXVsdHMsIG5hbWUpIH1cblxuICBnZXQgc3RhdHVzICgpIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyB9XG4gIHNldCBzdGF0dXMgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX3N0YXR1cyAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgZ2V0IG1lbW9yeSAoKSB7IHJldHVybiB0aGlzLl9tZW1vcnkgfVxuICBnZXQgbWVtb3J5TWFuYWdlciAoKSB7IHJldHVybiB0aGlzLl9tZW1vcnlNYW5hZ2VyIH1cbiAgZ2V0IGludGVycnVwdHMgKCkgeyByZXR1cm4gdGhpcy5faW50ZXJydXB0cyB9XG5cbiAgZ2V0IHVwZGF0ZXMgKCkgeyByZXR1cm4gdGhpcy5fdXBkYXRlcyB9XG5cbiAgZ2V0IGd1aWRlbyAoKSB7IHJldHVybiB0aGlzLl9ndWlkZW8gfVxuICBnZXQga2V5Ym9hcmRfY2hpcCAoKSB7IHJldHVybiB0aGlzLl9rZW4gfVxuICBnZXQgbWlja2V5ICgpIHsgcmV0dXJuIHRoaXMuX21pY2tleSB9XG5cbiAgZ2V0IHN0YWdlICgpIHsgcmV0dXJuIHRoaXMuX2d1aWRlby5fc3RhZ2UgfVxuICBnZXQgcmVuZGVyZXIgKCkgeyByZXR1cm4gdGhpcy5fZ3VpZGVvLl9yZW5kZXJlciB9XG5cbiAgZ2V0IHByb2dyYW0gKCkgeyByZXR1cm4gdGhpcy5fcHJvZ3JhbSB9XG5cbiAgb25SZXNpemUgKCkge1xuICAgIHRoaXMuX2d1aWRlby5lbWl0KCdyZXNpemUnKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBobHQgKGNvZGUpIHtcbiAgICBpZiAoY29kZSA+IDApIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoY29kZSlcbiAgICB9XG4gICAgdGhpcy5zdG9wKClcbiAgfVxuXG4gIGxvYWQgKHBhdGgpIHtcbiAgICBsZXQgdCA9IG5ldyBMZXhlcigpXG4gICAgbGV0IHRva2VucyA9IHQucnVuKHBhdGgpXG4gICAgY29uc29sZS5sb2codG9rZW5zKVxuXG4gICAgbGV0IHAgPSBuZXcgUGFyc2VyKClcbiAgICBsZXQgbm9kZXMgPSBwLnJ1bih0b2tlbnMpXG4gICAgY29uc29sZS5sb2cobm9kZXMpXG5cbiAgICBpZiAocC5lcnJvcnMgPT09IDApIHtcbiAgICAgIGxldCB0ID0gbmV3IFRyYW5zcGlsZXIoKVxuICAgICAgbGV0IGNvZGUgPSB0LnJ1bihub2RlcylcbiAgICAgIGNvbnNvbGUubG9nKGNvZGUpXG5cbiAgICAgIGlmICh0LmVycm9ycyA9PT0gMCkge1xuICAgICAgICB0aGlzLl9wcm9ncmFtLmNvZGUgPSBjb2RlXG4gICAgICAgIHRoaXMuX3Byb2dyYW0ucGF0aCA9IHBhdGhcbiAgICAgICAgdGhpcy5fcHJvZ3JhbS5mbiA9IG5ldyBGdW5jdGlvbihbJ2FyZ3MnXSwgdGhpcy5fcHJvZ3JhbS5jb2RlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJ1biAoLi4uYXJncykge1xuICAgIGxldCBmbiA9IF8uZ2V0KHRoaXMsICdfcHJvZ3JhbS5mbicpXG4gICAgcmV0dXJuIGZuID8gZm4uYXBwbHkodGhpcywgYXJncykgOiBudWxsXG4gIH1cblxuICBzdGFydCAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBfUlVOTklOR1xuICAgIHRoaXMudGVzdCgpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0b3AgKCkge1xuICAgIHRoaXMuc3RhdHVzID0gX1NUT1BQRURcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcGF1c2UgKCkge1xuICAgIHRoaXMuc3RhdHVzID0gX1BBVVNFRFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXN1bWUgKCkge1xuICAgIHRoaXMuc3RhdHVzID0gX1JVTk5JTkdcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdGljayAodCkge1xuICAgIHRoaXMuX21lbW9yeS50aWNrKHQpXG4gICAgdGhpcy5fbWVtb3J5TWFuYWdlci50aWNrKHQpXG4gICAgdGhpcy5fa2VuLnRpY2sodClcbiAgICB0aGlzLl9taWNrZXkudGljayh0KVxuICAgIHRoaXMuX2ludGVycnVwdHMudGljayh0KVxuICAgIHRoaXMuX2d1aWRlby50aWNrKHQpXG4gIH1cblxuICB0ZXN0ICgpIHtcbiAgfVxuXG59XG5cbmV4cG9ydCBsZXQgbWFpbiA9IG5ldyBNYWluKClcbndpbmRvdy5hcHAgPSBtYWluXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvbWFpbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBpeGkuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwaXhpLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViLWF1ZGlvLWRhd1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYi1hdWRpby1kYXdcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBlbGVjdHJvbiA9IHJlcXVpcmUoJ2VsZWN0cm9uJylcbmNvbnN0IHsgcmVtb3RlLCBzY3JlZW4sIGRpYWxvZyB9ID0gZWxlY3Ryb25cbmNvbnN0IHsgYXBwLCBCcm93c2VyV2luZG93IH0gPSByZW1vdGVcblxuY29uc3QgXyA9IHJlcXVpcmUoJ3VuZGVyc2NvcmUtcGx1cycpXG5fLmV4dGVuZChfLCByZXF1aXJlKCdsb2Rhc2gnKSlcbndpbmRvdy5fID0gX1xuXG5fLnRlbXBsYXRlU2V0dGluZ3MuaW50ZXJwb2xhdGUgPSAvI3soW1xcc1xcU10rPyl9L2dcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcy1wcm9taXNlJylcblxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCByYWYgZnJvbSAncmFmJ1xuaW1wb3J0IHBlcmZvcm1hbmNlIGZyb20gJ3BlcmZvcm1hbmNlLW5vdydcblxuaW1wb3J0IHsgTWl4aW4sIG1peCB9IGZyb20gJ21peHdpdGgnXG53aW5kb3cuTWl4aW4gPSBNaXhpblxud2luZG93Lm1peCA9IG1peFxuXG5sZXQgdXNlclBhdGggPSBwYXRoLmpvaW4oYXBwLmdldEFwcFBhdGgoKSwgJy91c2VyJylcbmlmICghZnMuZXhpc3RzU3luYyh1c2VyUGF0aCkpIHtcbiAgZnMubWtkaXJzKHVzZXJQYXRoKVxufVxuXG5sZXQgSVNfV0lOID0gL153aW4vLnRlc3QocHJvY2Vzcy5wbGF0Zm9ybSlcbmxldCBJU19PU1ggPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnZGFyd2luJ1xubGV0IElTX0xJTlVYID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2xpbnV4J1xubGV0IGRpcnMgPSB7XG4gIGJ1aWxkOiBfX2Rpcm5hbWUsXG4gIGN3ZDogYXBwLmdldEFwcFBhdGgoKSxcbiAgaG9tZTogYXBwLmdldFBhdGgoJ2hvbWUnKSxcbiAgYXBwOiBhcHAuZ2V0UGF0aCgnYXBwRGF0YScpLFxuICB1c2VyOiB1c2VyUGF0aCxcbiAgdG1wOiBhcHAuZ2V0UGF0aCgndGVtcCcpLFxuICByb290OiBhcHAuZ2V0UGF0aCgnZXhlJyksXG4gIG5vZGVfbW9kdWxlczogcGF0aC5qb2luKHVzZXJQYXRoLCAnbm9kZV9tb2R1bGVzJyksXG4gIHVzZXJfcGtnOiBwYXRoLmpvaW4odXNlclBhdGgsICdwYWNrYWdlLmpzb24nKSxcbn1cblxubGV0IG5hbWUgPSBhcHAuZ2V0TmFtZSgpXG5sZXQgdmVyc2lvbiA9IGFwcC5nZXRWZXJzaW9uKClcblxubGV0IG9wZW5GaWxlID0gKC4uLmFyZ3MpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGlhbG9nLnNob3dPcGVuRGlhbG9nLmFwcGx5KGRpYWxvZywgYXJncylcbiAgfVxuICBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxubGV0IHNhdmVGaWxlID0gKC4uLmFyZ3MpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGlhbG9nLnNob3dTYXZlRGlhbG9nLmFwcGx5KGRpYWxvZywgYXJncylcbiAgfVxuICBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxubGV0IG1lc3NhZ2VCb3ggPSAoLi4uYXJncykgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBkaWFsb2cuc2hvd01lc3NhZ2VCb3guYXBwbHkoZGlhbG9nLCBhcmdzKVxuICB9XG4gIGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5sZXQgbWFwX2dldHRlcnMgPSAoc291cmNlLCB0YXJnZXQsIGRlZnMpID0+IHtcbiAgZm9yIChsZXQgayBpbiBkZWZzKSB7XG4gICAgbGV0IGZuID0gZGVmc1trXVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzb3VyY2UsIGssIHtcbiAgICAgIGdldDogKCkgPT4gZm4uY2FsbCh0YXJnZXQsIHNvdXJjZSksXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH0pXG4gIH1cbn1cblxubGV0IG1hcF9nZXR0ZXJzX3JldHVybl90aGlzID0gKHNvdXJjZSwgdGFyZ2V0LCBkZWZzKSA9PiB7XG4gIGZvciAobGV0IGsgaW4gZGVmcykge1xuICAgIGxldCBmbiA9IGRlZnNba11cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc291cmNlLCBrLCB7XG4gICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgZm4uY2FsbCh0YXJnZXQsIHNvdXJjZSlcbiAgICAgICAgcmV0dXJuIHNvdXJjZVxuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgfSlcbiAgfVxufVxuXG5sZXQgbm93ID0gKCkgPT4gcGVyZm9ybWFuY2Uubm93KClcblxubGV0IGRlbGF5ID0gbXMgPT4ge1xuICAvLyBzZXRUaW1lb3V0KCgpID0+IHt9LCBtcylcbiAgbGV0IHQgPSBwZXJmb3JtYW5jZS5ub3coKVxuICBsZXQgYyA9IHRcbiAgd2hpbGUgKGMgLSB0IDw9IG1zKSB7XG4gICAgLy8gUElYSS50aWNrZXIuc2hhcmVkLnVwZGF0ZShjKVxuICAgIGMgPSBwZXJmb3JtYW5jZS5ub3coKVxuICB9XG59XG5cbmxldCBhc3luYyA9IChjb250ZXh0LCBmbiwgYXJncywgZGVsYXkpID0+IHtcbiAgaWYgKF8uaXNOdW1iZXIoYXJncykpIHtcbiAgICBkZWxheSA9IGFyZ3NcbiAgICBhcmdzID0gW11cbiAgfVxuICBpZiAoIV8uaXNBcnJheShhcmdzKSkge1xuICAgIGFyZ3MgPSBbYXJnc11cbiAgfVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBmbi5jYWxsKGNvbnRleHQsIC4uLmFyZ3MpXG4gIH0sIGRlbGF5IHx8IDEpXG59XG5cbmxldCBidWZmZXJfdG9fc3RyaW5nID0gYiA9PiB7XG4gIGxldCBsZW4gPSBiLmxlbmd0aFxuICBsZXQgaSA9IDBcbiAgbGV0IHMgPSAnJ1xuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHMgKz0gYltpKytdLnRvU3RyaW5nKDE2KVxuICB9XG4gIHJldHVybiBzXG59XG5cbmxldCBzdHJpbmdfdG9fYnVmZmVyID0gc3RyID0+IHtcbiAgbGV0IGxlbiA9IHN0ci5sZW5ndGhcbiAgbGV0IGkgPSAwXG4gIGxldCBiID0gbmV3IEJ1ZmZlcihNYXRoLnRydW5jKHN0ci5sZW5ndGggLyAyKSlcbiAgbGV0IHggPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgbGV0IGhleCA9IHN0ci5zdWJzdHIoaSwgMilcbiAgICBiW3grK10gPSBwYXJzZUludChoZXgsIDE2KVxuICAgIGkgKz0gMlxuICB9XG4gIHJldHVybiBiXG59XG5cbmxldCBzdHJpbmdfYnVmZmVyID0gKHN0ciwgbGVuID0gMCkgPT4ge1xuICBsZW4gPSBsZW4gfHwgc3RyLmxlbmd0aFxuICB2YXIgYiA9IG5ldyBCdWZmZXIobGVuKVxuICBiLndyaXRlKHN0ciwgMCwgc3RyLmxlbmd0aCwgJ2FzY2lpJylcbiAgcmV0dXJuIGJcbn1cblxubGV0IG5vcm1hbGl6ZU1lc3NhZ2VzID0gKC4uLm1lc3NhZ2UpID0+IHtcbiAgbGV0IGFyZ3MgPSBbXVxuICBmb3IgKGxldCBtIG9mIG1lc3NhZ2UpIHtcbiAgICBpZiAoXy5pc0FycmF5KG0pKSB7XG4gICAgICBhcmdzLnB1c2gobS5qb2luKCcsICcpKVxuICAgIH1cbiAgICBlbHNlIGlmIChfLmlzU3RyaW5nKG0pKSB7XG4gICAgICBhcmdzLnB1c2gobSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFyZ3Ncbn1cblxubGV0IGhleCA9ICh2YWx1ZSwgc2l6ZSA9IDMyKSA9PiAnJCcgKyBfLnBhZFN0YXJ0KHZhbHVlLnRvU3RyaW5nKDE2KSwgTWF0aC50cnVuYyhzaXplIC8gNCksICcwJylcblxubGV0IGJ1ZmZlcl9kdW1wID0gKGJ1ZmZlciwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGxldCB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgMTZcbiAgbGV0IGNhcHMgPSBvcHRpb25zLmNhcHMgfHwgJ3VwcGVyJ1xuICBsZXQgaW5kZW50ID0gXy5yZXBlYXQoJyAnLCBvcHRpb25zLmluZGVudCB8fCAwKVxuXG4gIGxldCB6ZXJvID0gKG4sIG1heCkgPT4ge1xuICAgIG4gPSBuLnRvU3RyaW5nKDE2KVxuICAgIGlmIChjYXBzID09PSAndXBwZXInKSB7IG4gPSBuLnRvVXBwZXJDYXNlKCkgfVxuICAgIHdoaWxlIChuLmxlbmd0aCA8IG1heCkge1xuICAgICAgbiA9ICcwJyArIG5cbiAgICB9XG4gICAgcmV0dXJuIG5cbiAgfVxuXG4gIGxldCBsZW4gPSBNYXRoLm1pbihidWZmZXIuYnl0ZUxlbmd0aCwgb3B0aW9ucy5sZW5ndGggfHwgYnVmZmVyLmJ5dGVMZW5ndGgpXG4gIGxldCByb3dzID0gTWF0aC5jZWlsKGxlbiAvIHdpZHRoKVxuICBsZXQgbGFzdCA9IGxlbiAlIHdpZHRoIHx8IHdpZHRoXG4gIGxldCBvZmZzZXRMZW5ndGggPSBsZW4udG9TdHJpbmcoMTYpLmxlbmd0aFxuICBpZiAob2Zmc2V0TGVuZ3RoIDwgNikgeyBvZmZzZXRMZW5ndGggPSA2IH1cblxuICBsZXQgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKVxuXG4gIGxldCBzdHIgPSBpbmRlbnQgKyAnT2Zmc2V0J1xuICB3aGlsZSAoc3RyLmxlbmd0aCA8IG9mZnNldExlbmd0aCkge1xuICAgIHN0ciArPSAnICdcbiAgfVxuXG4gIHN0ciArPSAnICAnXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgc3RyICs9ICcgJyArIHplcm8oaSwgMilcbiAgfVxuXG4gIGlmIChsZW4pIHtcbiAgICBzdHIgKz0gJ1xcbidcbiAgfVxuXG4gIGxldCBiID0gMFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgc3RyICs9IGluZGVudCArIHplcm8oYiwgb2Zmc2V0TGVuZ3RoKSArICcgICdcbiAgICBsZXQgbGFzdEJ5dGVzID0gaSA9PT0gcm93cyAtIDEgPyBsYXN0IDogd2lkdGhcbiAgICBsZXQgbGFzdFNwYWNlcyA9IHdpZHRoIC0gbGFzdEJ5dGVzXG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxhc3RCeXRlczsgaisrKSB7XG4gICAgICBzdHIgKz0gJyAnICsgemVybyhhcnJbYl0sIDIpXG4gICAgICBiKytcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxhc3RTcGFjZXM7IGorKykge1xuICAgICAgc3RyICs9ICcgICAnXG4gICAgfVxuXG4gICAgYiAtPSBsYXN0Qnl0ZXNcbiAgICBzdHIgKz0gJyAgICdcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGFzdEJ5dGVzOyBqKyspIHtcbiAgICAgIGxldCB2ID0gYXJyW2JdXG4gICAgICBzdHIgKz0gdiA+IDMxICYmIHYgPCAxMjcgfHwgdiA+IDE1OSA/IFN0cmluZy5mcm9tQ2hhckNvZGUodikgOiAnLidcbiAgICAgIGIrK1xuICAgIH1cblxuICAgIHN0ciArPSAnXFxuJ1xuICB9XG5cbiAgcmV0dXJuIHN0clxufVxuXG5sZXQgdXRvYSA9IHN0ciA9PiB3aW5kb3cuYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSkpXG5cbmxldCBhdG91ID0gc3RyID0+IGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUod2luZG93LmF0b2Ioc3RyKSkpXG5cbndpbmRvdy51dG9hID0gdXRvYVxud2luZG93LmF0b3UgPSBhdG91XG5cblxubGV0IGluc3RhbmNlRnVuY3Rpb24gPSAodGFyZ2V0LCBuYW1lLCBmbiwgZm9yY2UgPSBmYWxzZSkgPT4ge1xuICBpZiAoZm9yY2UgfHwgIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcbiAgICAgIHZhbHVlOiBmbixcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIH0pXG4gIH1cbn1cblxubGV0IGluc3RhbmNlRnVuY3Rpb25zID0gKHRhcmdldCwgc291cmNlLCBuYW1lcykgPT4ge1xuICBmb3IgKGxldCBuIG9mIG5hbWVzKSB7XG4gICAgaWYgKF8uaXNBcnJheShuKSkge1xuICAgICAgaW5zdGFuY2VGdW5jdGlvbih0YXJnZXQsIG5bMF0sIHNvdXJjZVtuWzFdXSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbnN0YW5jZUZ1bmN0aW9uKHRhcmdldCwgbiwgc291cmNlW25dKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBfLFxuICBuYW1lLFxuICB2ZXJzaW9uLFxuICBlbGVjdHJvbixcbiAgZGlhbG9nLFxuICBvcGVuRmlsZSxcbiAgc2F2ZUZpbGUsXG4gIG1lc3NhZ2VCb3gsXG4gIHJlbW90ZSxcbiAgc2NyZWVuLFxuICBCcm93c2VyV2luZG93LFxuICBhcHAsXG4gIGZzLFxuICBwYXRoLFxuICB1c2VyUGF0aCxcbiAgSVNfV0lOLFxuICBJU19PU1gsXG4gIElTX0xJTlVYLFxuICBkaXJzLFxuICByYWYsXG4gIG5vdyxcbiAgTWl4aW4sXG4gIG1peCxcbiAgbWFwX2dldHRlcnMsXG4gIG1hcF9nZXR0ZXJzX3JldHVybl90aGlzLFxuICBkZWxheSxcbiAgYXN5bmMsXG4gIGJ1ZmZlcl90b19zdHJpbmcsXG4gIHN0cmluZ190b19idWZmZXIsXG4gIHN0cmluZ19idWZmZXIsXG4gIG5vcm1hbGl6ZU1lc3NhZ2VzLFxuICBoZXgsXG4gIGJ1ZmZlcl9kdW1wLFxuICB1dG9hLFxuICBhdG91LFxuICBpbnN0YW5jZUZ1bmN0aW9uLFxuICBpbnN0YW5jZUZ1bmN0aW9ucyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC91dGlscy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmFmXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmFmXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGVyZm9ybWFuY2Utbm93XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGVyZm9ybWFuY2Utbm93XCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWl4d2l0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1peHdpdGhcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImVsZWN0cm9uXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5kZXJzY29yZS1wbHVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidW5kZXJzY29yZS1wbHVzXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzLXByb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmcy1wcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlBJWEkuUG9pbnQucHJvdG90eXBlLmRpc3RhbmNlID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gTWF0aC5zcXJ0KCh0aGlzLnggLSB0YXJnZXQueCkgKiAodGhpcy54IC0gdGFyZ2V0LngpICsgKHRoaXMueSAtIHRhcmdldC55KSAqICh0aGlzLnkgLSB0YXJnZXQueSkpXG59XG5cblBJWEkuUG9pbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gXy50ZW1wbGF0ZSgnKCN7eH0sICN7eX0pJykodGhpcylcbn1cblxuUElYSS5SZWN0YW5nbGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gXy50ZW1wbGF0ZSgnKCN7eH0sICN7eX0sICN7eCArIHdpZHRofSwgI3t5ICsgaGVpZ2h0fSkoI3t3aWR0aH0sICN7aGVpZ2h0fSknKSh0aGlzKVxufVxuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgYm91bmRzY2hlY2s6IGZhbHNlLFxuXG4gIHR5cGU6ICdpMzInLFxuXG4gIG1lbW9yeToge1xuICAgIHNpemU6IDUxMiAqIDEwMjQsXG4gIH0sXG5cbiAgbWVtb3J5X21hbmFnZXI6IHtcbiAgICBjb2xsZWN0X2RlbGF5OiAzMCAqIDEwMDAsXG4gIH0sXG5cbiAgZ3VpZGVvOiB7XG4gICAgd2lkdGg6IDMyMCxcbiAgICBoZWlnaHQ6IDI0MCxcbiAgICBzY2FsZTogNCxcbiAgfSxcblxuICByYWluYm93OiB7XG4gICAgY291bnQ6IDE2LFxuICB9LFxuXG4gIGZvbnpvOiB7XG4gICAgY291bnQ6IDI1NSxcbiAgICB3aWR0aDogNCxcbiAgICBoZWlnaHQ6IDYsXG4gIH0sXG5cbiAgb3J3ZWxsOiB7XG4gICAgd2lkdGg6IDMyMCAvIDQsXG4gICAgaGVpZ2h0OiAyNDAgLyA2LFxuICB9LFxuXG4gIGJlYWdsZToge1xuICAgIHdpZHRoOiA0LFxuICAgIGhlaWdodDogNixcbiAgICBjb2xvcjogMTUsXG4gICAgYmxpbmtyYXRlOiA1MDAsXG4gIH0sXG5cbiAgdmlvbGV0OiB7XG4gICAgY291bnQ6IDMyLFxuICAgIHdpZHRoOiAxNixcbiAgICBoZWlnaHQ6IDE2LFxuICB9LFxuXG4gIGtlbjoge1xuICAgIGNvdW50OiAyNTUsXG4gIH0sXG5cbiAgbWlja2V5OiB7XG4gICAgY291bnQ6IDI1NSxcbiAgICBkYmxDbGlja0RlbGF5OiAyNTAsXG4gICAgZGJsQ2xpY2tEaXN0YW5jZTogOCxcbiAgfSxcblxuICBuZXR3b3JrOiB7XG4gICAgc2l6ZTogMzIgKiAxMDI0LFxuICB9LFxuXG4gIGFsdG86IHtcbiAgICBzaXplOiA0ICogMTAyNCxcbiAgfSxcbn1cblxubGV0IGVycm9ycyA9IDBcblxubGV0IGVycm9yID0gKHQsIG1zZykgPT4ge1xuICBkZWJ1Z2dlclxuICBlcnJvcnMrK1xuICBjb25zb2xlLmVycm9yKG1zZywgJ2F0JywgdC52YWx1ZSwgJygnICsgdC5yb3cgKyAnLCcgKyB0LmNvbCArICcpJylcbn1cblxubGV0IHJ1bnRpbWVfZXJyb3IgPSBjb2RlID0+IHtcbiAgbGV0IGUgPSAnVW5rbm93biBydW50aW1lIGVycm9yJ1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIDB4MDE6XG4gICAgICBlID0gJ091dCBvZiBtZW1vcnknXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwMjpcbiAgICAgIGUgPSAnU3RhY2sgdW5kZXJmbG93J1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDM6XG4gICAgICBlID0gJ1N0YWNrIG92ZXJmbG93J1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDQ6XG4gICAgICBlID0gJ0ludmFsaWQgc3RhY2sgYWRkcmVzcydcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA1OlxuICAgICAgZSA9ICdTdGFjayBhZGRyZXNzIGFscmVhZHkgYXNzaWduZWQnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNjpcbiAgICAgIGUgPSAnSW50ZXJydXB0IGFscmVhZHkgZXhpc3RzJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDc6XG4gICAgICBlID0gJ0ludGVycnVwdCBub3QgZm91bmQnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwODpcbiAgICAgIGUgPSAnQWRkcmVzcyBvdXQgb2YgYm91bmRzJ1xuICAgICAgYnJlYWtcbiAgfVxuICBjb25zb2xlLmVycm9yKGUpXG59XG5cbmxldCBpb19lcnJvciA9IGNvZGUgPT4ge1xuICBsZXQgZSA9ICdJL08gcnVudGltZSBlcnJvcidcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSAweDAxOlxuICAgICAgZSA9ICdGaWxlIG5vdCBmb3VuZCdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDAyOlxuICAgICAgZSA9ICdDYW5ub3Qgb3BlbiBmaWxlJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDM6XG4gICAgICBlID0gJ0Nhbm5vdCBjbG9zZSBmaWxlJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDQ6XG4gICAgICBlID0gJ0Nhbm5vdCBsb2NrIGZpbGUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNTpcbiAgICAgIGUgPSAnQ2Fubm90IHVubG9jayBmaWxlJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDY6XG4gICAgICBlID0gJ0ludmFsaWQgZmlsZSBpZCdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA3OlxuICAgICAgZSA9ICdBIGZsb3BweSBpcyBhbHJlYWR5IGluIHRoZSBkcml2ZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA4OlxuICAgICAgZSA9ICdObyBmbG9wcHkgaW4gZHJpdmUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwOTpcbiAgICAgIGUgPSAnQ2Fubm90IGRlbGV0ZSBmaWxlJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MTA6XG4gICAgICBlID0gJ0RyaXZlIGlzIG5vdCBzcGlubmluZydcbiAgICAgIGJyZWFrXG4gIH1cbiAgY29uc29sZS5lcnJvcihlKVxufVxuXG5cbmV4cG9ydCB7XG4gIGRlZmF1bHRzLFxuICBlcnJvcnMsXG4gIGVycm9yLFxuICBydW50aW1lX2Vycm9yLFxuICBpb19lcnJvcixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9nbG9iYWxzLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgY2xhc3MgRXZlbnQge1xuXG4gIGNvbnN0cnVjdG9yICh0YXJnZXQsIG5hbWUsIGRhdGEsIGJ1YmJsZXMgPSB0cnVlKSB7XG4gICAgdGhpcy5fX2V2ZW50T2JqZWN0ID0gdHJ1ZVxuICAgIHRoaXMudGltZVN0YW1wID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldFxuICAgIHRoaXMudHlwZSA9IG5hbWVcbiAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgdGhpcy5idWJibGVzID0gYnViYmxlc1xuICAgIHRoaXMuc3RvcHBlZCA9IGZhbHNlXG4gICAgdGhpcy5zdG9wcGVkSW1tZWRpYXRlID0gZmFsc2VcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuICB9XG5cbiAgc3RvcCAoKSB7XG4gICAgdGhpcy5zdG9wcGVkID0gdHJ1ZVxuICB9XG5cbiAgc3RvcEltbWVkaWF0ZSAoKSB7XG4gICAgdGhpcy5zdG9wcGVkSW1tZWRpYXRlID0gdHJ1ZVxuICB9XG5cbiAgc3RvcFByb3BhZ2F0aW9uICgpIHtcbiAgICB0aGlzLnN0b3BwZWQgPSB0cnVlXG4gIH1cblxuICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gKCkge1xuICAgIHRoaXMuc3RvcHBlZEltbWVkaWF0ZSA9IHRydWVcbiAgfVxuXG4gIGNhbmNlbEJ1YmJsZSAoKSB7XG4gICAgdGhpcy5idWJibGVzID0gZmFsc2VcbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0ICgpIHtcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlXG4gIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRW1pdHRlciB7XG5cbiAgb24gKG5hbWUsIGZuLCBvcmRlciA9IDApIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cbiAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0gPSB0aGlzLl9saXN0ZW5lcnNbbmFtZV0gfHwgW11cbiAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0ucHVzaCh7IGZuLCBvcmRlciB9KVxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSA9IF8uc29ydEJ5KHRoaXMuX2xpc3RlbmVyc1tuYW1lXSwgJ29yZGVyJylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgb25jZSAobmFtZSwgZm4pIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cblxuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIGxldCBvbmNlSGFuZGxlcldyYXBwZXIgPSAoKSA9PiB7XG4gICAgICBmbi5hcHBseSh0aGF0Lm9mZihuYW1lLCBvbmNlSGFuZGxlcldyYXBwZXIpLCBhcmd1bWVudHMpXG4gICAgfVxuICAgIG9uY2VIYW5kbGVyV3JhcHBlci5fb3JpZ2luYWxIYW5kbGVyID0gZm5cblxuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIG9uY2VIYW5kbGVyV3JhcHBlcilcbiAgfVxuXG4gIG9mZiAobmFtZSwgZm4pIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cblxuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGxldCBsaXN0ID0gdGhpcy5fbGlzdGVuZXJzW25hbWVdXG4gICAgbGV0IGkgPSBmbiA/IGxpc3QubGVuZ3RoIDogMFxuXG4gICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgIGlmIChsaXN0W2ldLmZuID09PSBmbiB8fCBsaXN0W2ldLl9vcmlnaW5hbEhhbmRsZXIgPT09IGZuKSB7XG4gICAgICAgIGxpc3Quc3BsaWNlKGksIDEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF8uaXNFbXB0eShsaXN0KSkge1xuICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tuYW1lXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBlbWl0IChuYW1lLCBkYXRhKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzIHx8IHt9XG5cbiAgICBsZXQgb3JpZ0V2ZW50RGF0YVxuXG4gICAgaWYgKCFkYXRhIHx8IGRhdGEuX19ldmVudE9iamVjdCAhPT0gdHJ1ZSkge1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5kYXRhICYmIGRhdGEudHlwZSkge1xuICAgICAgICBvcmlnRXZlbnREYXRhID0gZGF0YVxuICAgICAgICBkYXRhID0gZGF0YS5kYXRhXG4gICAgICB9XG4gICAgICBkYXRhID0gbmV3IEV2ZW50KHRoaXMsIG5hbWUsIGRhdGEpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgbGV0IGxpc3RlbmVycyA9IF8uY2xvbmUodGhpcy5fbGlzdGVuZXJzW25hbWVdKVxuICAgICAgZm9yIChsZXQgbCBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgbC5mbi5jYWxsKHRoaXMsIGRhdGEpXG4gICAgICAgIGlmIChkYXRhLnN0b3BwZWRJbW1lZGlhdGUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZGF0YS5zdG9wcGVkKSB7XG4gICAgICAgIGlmIChvcmlnRXZlbnREYXRhKSB7XG4gICAgICAgICAgb3JpZ0V2ZW50RGF0YS5zdG9wcGVkID0gdHJ1ZVxuICAgICAgICAgIGRhdGEuY2FuY2VsQnViYmxlKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRhLmJ1YmJsZXMgJiYgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZW1pdCkge1xuICAgICAgdGhpcy5wYXJlbnQuZW1pdChuYW1lLCBkYXRhKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWRcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvZW1pdHRlci5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IHBhdGggfSBmcm9tICcuLi91dGlscy5qcydcblxuaW1wb3J0IFRva2VuVHlwZXMgZnJvbSAnLi90b2tlbnMvdHlwZXMuanMnXG5pbXBvcnQgQ29uc3RUb2tlbiBmcm9tICcuL3Rva2Vucy9jb25zdC5qcydcbmltcG9ydCBJbmNsdWRlVG9rZW4gZnJvbSAnLi90b2tlbnMvaW5jbHVkZS5qcydcblxuY2xhc3MgVG9rZW4ge1xuXG4gIGNvbnN0cnVjdG9yIChsZXhlciwgdHlwZSwgdmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAobGV4ZXIgaW5zdGFuY2VvZiBUb2tlbikge1xuICAgICAgbGV0IHQgPSBsZXhlclxuICAgICAgdGhpcy5sZXhlciA9IHQubGV4ZXJcbiAgICAgIHRoaXMuX3R5cGUgPSB0Ll90eXBlXG4gICAgICB0aGlzLl9yZXNlcnZlZCA9IHQuX3Jlc2VydmVkXG4gICAgICB0aGlzLnZhbHVlID0gdC52YWx1ZVxuICAgICAgdGhpcy5zdGFydCA9IF8uY2xvbmUodC5zdGFydClcbiAgICAgIHRoaXMuZW5kID0gXy5jbG9uZSh0LmVuZClcbiAgICAgIHRoaXMubGVuZ3RoID0gdC52YWx1ZS5sZW5ndGhcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmxleGVyID0gbGV4ZXJcbiAgICAgIHRoaXMuX3R5cGUgPSB0eXBlXG4gICAgICB0aGlzLl9yZXNlcnZlZCA9IGZhbHNlXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgJydcbiAgICAgIHRoaXMuc3RhcnQgPSBzdGFydCB8fCB7IG9mZnNldDogMCwgbGluZTogMCwgY29sdW1uOiAwIH1cbiAgICAgIHRoaXMuZW5kID0gZW5kIHx8IHsgb2Zmc2V0OiAwLCBsaW5lOiAwLCBjb2x1bW46IDAgfVxuICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmVuZC5vZmZzZXQgLSB0aGlzLnN0YXJ0Lm9mZnNldFxuICAgIH1cbiAgfVxuXG4gIGlzIChlKSB7XG4gICAgaWYgKF8uaXNTdHJpbmcoZSkpIHtcbiAgICAgIGxldCBwYXJ0cyA9IGUuc3BsaXQoJ3wnKVxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yIChsZXQgcCBvZiBwYXJ0cykge1xuICAgICAgICAgIGlmICh0aGlzLmlzKHApKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBlID09PSAnLicgfHwgdGhpcy50eXBlID09PSBlIHx8IHRoaXMudmFsdWUgPT09IGVcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoXy5pc1JlZ0V4cChlKSkge1xuICAgICAgcmV0dXJuIHRoaXMudHlwZS5tYXRjaChlKSB8fCB0aGlzLnZhbHVlLm1hdGNoKGUpXG4gICAgfVxuICAgIGVsc2UgaWYgKF8uaXNBcnJheShlKSkge1xuICAgICAgZm9yIChsZXQgaSBvZiBlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzKGkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGdldCB0eXBlICgpIHtcbiAgICBpZiAodGhpcy5fdHlwZSA9PT0gJ21hdGhfYXNzaWduJyB8fCB0aGlzLl90eXBlID09PSAnbG9naWNfYXNzaWduJykge1xuICAgICAgdGhpcy5fdHlwZSA9ICdhc3NpZ24nXG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuX3R5cGUgPT09ICdzdXBlcicpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSAnc3VwZXInXG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90eXBlXG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIF8udGVtcGxhdGUoJ1wiI3t2YWx1ZX1cIiBhdCAje3BhdGh9KCN7bGluZX06I3tjb2x1bW59KScpKHsgdmFsdWU6IHRoaXMudmFsdWUsIGxpbmU6IHRoaXMuc3RhcnQubGluZSwgY29sdW1uOiB0aGlzLnN0YXJ0LmNvbHVtbiwgcGF0aDogcGF0aC5iYXNlbmFtZSh0aGlzLmxleGVyLnBhdGgpIH0pXG4gIH1cblxufVxuXG5cbmNsYXNzIEVtcHR5Q2xhc3Mge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV4ZXIgZXh0ZW5kcyBtaXgoRW1wdHlDbGFzcykud2l0aChcbiAgVG9rZW5UeXBlcyxcbiAgQ29uc3RUb2tlbixcbiAgSW5jbHVkZVRva2VuXG4pIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKHBhdGgsIHRleHQpIHtcbiAgICB0aGlzLmVycm9ycyA9IDBcbiAgICB0aGlzLnBhdGggPSBwYXRoIHx8ICcnXG4gICAgdGhpcy50ZXh0ID0gdGV4dCB8fCAnJ1xuICAgIHRoaXMubGVuZ3RoID0gdGhpcy50ZXh0Lmxlbmd0aFxuICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgIHRoaXMubGluZSA9IDFcbiAgICB0aGlzLmNvbHVtbiA9IDFcbiAgICB0aGlzLnRva2VucyA9IFtdXG4gICAgdGhpcy5jb25zdGFudHMgPSB7fVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB2YWxpZE9mZnNldCAob2Zmc2V0KSB7IHJldHVybiBvZmZzZXQgPj0gMCAmJiBvZmZzZXQgPCB0aGlzLmxlbmd0aCB9XG5cbiAgZW9zICgpIHsgcmV0dXJuIHRoaXMudmFsaWRPZmZzZXQodGhpcy5vZmZzZXQpIH1cblxuICBjaGFyX2F0IChpKSB7IHJldHVybiB0aGlzLnRleHQuY2hhckF0KGkpIH1cblxuICBzdWJ0ZXh0IChpKSB7IHJldHVybiB0aGlzLnRleHQuc3Vic3RyaW5nKGkpIH1cblxuICBwZWVrICgpIHtcbiAgICBsZXQgcG9zX2luZm8gPSAob2Zmc2V0LCBsaW5lLCBjb2x1bW4pID0+IHsgcmV0dXJuIHsgb2Zmc2V0LCBsaW5lLCBjb2x1bW4gfSB9XG5cbiAgICBsZXQgdG9rZW4gPSBudWxsXG4gICAgbGV0IGwgPSBfLmxhc3QodGhpcy50b2tlbnMpXG4gICAgbGV0IG9mZnNldCA9IHRoaXMub2Zmc2V0XG4gICAgbGV0IGxlbiA9IDBcblxuICAgIHdoaWxlIChbJyAnLCAnXFx0J10uaW5kZXhPZih0aGlzLmNoYXJfYXQob2Zmc2V0KSkgIT09IC0xKSB7XG4gICAgICBpZiAobCAmJiAhbC5uZXh0X2lzX3NwYWNlKSB7XG4gICAgICAgIGwubmV4dF9pc19zcGFjZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy52YWxpZE9mZnNldChvZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiB7IHRva2VuLCBvZmZzZXQgfVxuICAgICAgfVxuICAgICAgb2Zmc2V0KytcbiAgICB9XG5cbiAgICBsZXQgb2xkX29mZnNldCA9IG9mZnNldFxuXG4gICAgbGV0IGxpbmUgPSB0aGlzLmxpbmVcbiAgICBsZXQgY29sdW1uID0gdGhpcy5jb2x1bW5cbiAgICBmb3IgKGxldCBrIGluIHRoaXMudG9rZW5fdHlwZXMpIHtcbiAgICAgIGxldCByID0gdGhpcy5zdWJ0ZXh0KG9mZnNldCkubWF0Y2godGhpcy50b2tlbl90eXBlc1trXSlcbiAgICAgIGlmIChyICYmIHIuaW5kZXggPT09IDApIHtcbiAgICAgICAgbGV0IHZhbHVlID0gci5sZW5ndGggPiAxID8gci5zbGljZSgxKS5qb2luKCcnKSA6IHIuam9pbignJylcbiAgICAgICAgbGVuID0gclswXS5sZW5ndGhcbiAgICAgICAgdG9rZW4gPSBuZXcgVG9rZW4odGhpcywgaywgdmFsdWUsIHBvc19pbmZvKG9mZnNldCwgbGluZSwgY29sdW1uKSwgcG9zX2luZm8ob2Zmc2V0ICsgbGVuLCBsaW5lLCBjb2x1bW4gKyBsZW4gLSAxKSlcbiAgICAgICAgb2Zmc2V0ICs9IGxlblxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2Zmc2V0ID09PSBvbGRfb2Zmc2V0KSB7XG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldCArIDFcbiAgICB9XG4gICAgcmV0dXJuIHsgdG9rZW4sIG9mZnNldCwgbGVuIH1cbiAgfVxuXG4gIGluc2VydFRva2VuICh0KSB7XG4gICAgbGV0IGMgPSB0aGlzLmNvbnN0YW50c1t0LnZhbHVlXVxuICAgIGlmIChfLmlzQXJyYXkoYykpIHtcbiAgICAgIGZvciAobGV0IHQgb2YgYykge1xuICAgICAgICB0aGlzLmluc2VydFRva2VuKHQpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh0KVxuICAgIH1cbiAgfVxuXG4gIG5leHQgKCkge1xuICAgIGxldCB7IHRva2VuLCBvZmZzZXQsIGxlbiB9ID0gdGhpcy5wZWVrKClcblxuICAgIHdoaWxlICh0b2tlbiAmJiB0b2tlbi5fdHlwZSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgICBsZXQgdCA9IHRoaXMucGVlaygpXG4gICAgICB0b2tlbiA9IHQudG9rZW5cbiAgICAgIG9mZnNldCA9IHQub2Zmc2V0XG4gICAgICBsZW4gPSB0LmxlblxuICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXRcbiAgICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICB9XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGlmICh0b2tlbi50eXBlID09PSAnY29uc3QnKSB7XG4gICAgICAgIHRva2VuID0gdGhpcy5jb25zdF90b2tlbih0b2tlbiwgb2Zmc2V0LCBsZW4pXG4gICAgICB9XG5cbiAgICAgIGVsc2UgaWYgKHRva2VuLnR5cGUgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB0b2tlbiA9IHRoaXMuaW5jbHVkZV90b2tlbih0b2tlbiwgb2Zmc2V0LCBsZW4pXG4gICAgICB9XG5cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmluc2VydFRva2VuKHRva2VuKVxuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgICAgICB0aGlzLmNvbHVtbiArPSBsZW4gKyAxXG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbiAmJiB0b2tlbi5pcygnZW9sJykpIHtcbiAgICAgICAgdGhpcy5saW5lKytcbiAgICAgICAgdGhpcy5jb2x1bW4gPSAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuXG4gIH1cblxuICBydW4gKHBhdGgsIHRleHQpIHtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHRleHQgPSBwYXRoXG4gICAgICBwYXRoID0gJydcbiAgICB9XG4gICAgdGhpcy5yZXNldChwYXRoLCB0ZXh0KVxuICAgIHdoaWxlICh0aGlzLnZhbGlkT2Zmc2V0KHRoaXMub2Zmc2V0KSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIGNvbnNvbGUuaW5mbygnbGV4ZXIgZHVtcCcpXG4gICAgY29uc29sZS5sb2codGhpcy50b2tlbnMpXG4gICAgY29uc29sZS5sb2coJycpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2xleGVyLmpzIiwiaW1wb3J0IGFzc2lnbl90b2tlbnMgZnJvbSAnLi9hc3NpZ25zLmpzJ1xuaW1wb3J0IGRlbGltaXRlcl90b2tlbnMgZnJvbSAnLi9kZWxpbWl0ZXJzLmpzJ1xuaW1wb3J0IGNvbW1lbnRfdG9rZW5zIGZyb20gJy4vY29tbWVudHMuanMnXG5pbXBvcnQgZ3JvdXBfdG9rZW5zIGZyb20gJy4vZ3JvdXBzLmpzJ1xuaW1wb3J0IGxpdGVyYWxfdG9rZW5zIGZyb20gJy4vbGl0ZXJhbHMuanMnXG5pbXBvcnQgb3BlcmF0b3JfdG9rZW5zIGZyb20gJy4vb3BlcmF0b3JzLmpzJ1xuaW1wb3J0IHByaW1pdGl2ZV90b2tlbnMgZnJvbSAnLi9wcmltaXRpdmVzLmpzJ1xuaW1wb3J0IHJlc2VydmVkX3Rva2VucyBmcm9tICcuL3Jlc2VydmVkLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFRva2VuVHlwZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBnZXQgdG9rZW5fdHlwZXMgKCkge1xuICAgIGlmICghdGhpcy5fdG9rZW5fdHlwZXMpIHtcbiAgICAgIHRoaXMuX3Rva2VuX3R5cGVzID0gXy5leHRlbmQoe30sXG4gICAgICAgIGRlbGltaXRlcl90b2tlbnMsXG4gICAgICAgIGNvbW1lbnRfdG9rZW5zLFxuICAgICAgICBwcmltaXRpdmVfdG9rZW5zLFxuICAgICAgICByZXNlcnZlZF90b2tlbnMsXG4gICAgICAgIGxpdGVyYWxfdG9rZW5zLFxuICAgICAgICBncm91cF90b2tlbnMsXG4gICAgICAgIG9wZXJhdG9yX3Rva2VucyxcbiAgICAgICAgYXNzaWduX3Rva2Vuc1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdG9rZW5fdHlwZXNcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy90eXBlcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYXNzaWduOiAvXig9KVtePT5dLyxcbiAgbWF0aF9hc3NpZ246IC9eW1xcK1xcLVxcKlxcLyVdPS8sXG4gIGxvZ2ljX2Fzc2lnbjogL15bISZcXHxcXF5dPS8sXG4gIGZuX2Fzc2lnbjogL149Pi8sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2Fzc2lnbnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGVvbDogL15bXFxyXFxuXXw7LyxcbiAgY29tbWE6IC9eLC8sXG4gIGNvbG9uOiAvXjooPz1bXkEtWl9dKS9pLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9kZWxpbWl0ZXJzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBjb21tZW50OiAvXlxcL1xcLyhbXlxcclxcbl0qKS8sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2NvbW1lbnRzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBvcGVuX3BhcmVuOiAvXlxcKC8sXG4gIGNsb3NlX3BhcmVuOiAvXlxcKS8sXG5cbiAgb3Blbl9icmFja2V0OiAvXlxcWy8sXG4gIGNsb3NlX2JyYWNrZXQ6IC9eXFxdLyxcblxuICBvcGVuX2N1cmx5OiAvXlxcey8sXG4gIGNsb3NlX2N1cmx5OiAvXlxcfS8sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2dyb3Vwcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAga2V5OiAvXjooW0EtWl9dW0EtWl8wLTldKikvaSxcblxuICBpZDogL14oW0EtWl9dW0EtWl8wLTldKikvaSxcbiAgaWRfZmllbGQ6IC9eXFwuKFtBLVpfXVtBLVpfMC05XSopL2ksXG5cbiAgdGhpczogL15AKD89W15BLVpfXSkvaSxcbiAgdGhpc19maWVsZDogL15AKFtBLVpfXVtBLVpfMC05XSopL2ksXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL2xpdGVyYWxzLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzeW1ib2w6IC9eW1xcJF0vLFxuXG4gIG1hdGg6IC9eW1xcK1xcLVxcKlxcLyVdW149XS8sXG4gIGxvZ2ljOiAvXlshJlxcfFxcXl1bXj1dLyxcbiAgY29tcDogL14+fDx8Pj18PD18IT18PT0vLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9vcGVyYXRvcnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGhleDogL15cXCQoWzAtOUEtRl0rKXwweChbMC05QS1GXSspL2ksXG4gIG51bWJlcjogL14oWy0rXT9bMC05XSpcXC4/WzAtOV0rKFtlRV1bLStdP1swLTldKyk/KS8sXG5cbiAgc3RyaW5nOiAvXlwifCcoW15cIl0qKVwifCcvLFxuICBjaGFyOiAvXicoLiknLyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvcHJpbWl0aXZlcy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW5jbHVkZTogL14jXCIoW15cIl0qKVwiL2ksXG5cbiAgY29uc3Q6IC9eIyhbQS1aX11bQS1aXzAtOV0qKS9pLFxuXG4gIHJlc2VydmVkOiAvXihwdXRzfHB1dGMpL2ksXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdG9rZW5zL3Jlc2VydmVkLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIENvbnN0VG9rZW4gZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBjb25zdF90b2tlbiAodG9rZW4sIG9mZnNldCwgbGVuKSB7XG4gICAgbGV0IGMgPSBbXVxuICAgIHRoaXMuY29uc3RhbnRzW3Rva2VuLnZhbHVlXSA9IGNcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IHAgPSB0aGlzLnBlZWsoKVxuICAgICAgdG9rZW4gPSBwLnRva2VuXG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBwLm9mZnNldFxuICAgICAgICB0aGlzLmNvbHVtbiArPSBwLmxlbiArIDFcbiAgICAgIH1cbiAgICAgIGlmICghdG9rZW4gfHwgdG9rZW4uaXMoJ2VvbCcpKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgYy5wdXNoKHRva2VuKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9rZW5cbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90b2tlbnMvY29uc3QuanMiLCJpbXBvcnQgeyBMZXhlciB9IGZyb20gJy4uL2xleGVyLmpzJ1xuaW1wb3J0IHsgcGF0aCwgZGlycywgZnMgfSBmcm9tICcuLi8uLi91dGlscy5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJbmNsdWRlVG9rZW4gZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBpbmNsdWRlX3Rva2VuICh0b2tlbiwgb2Zmc2V0LCBsZW4pIHtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldFxuICAgIHRoaXMuY29sdW1uICs9IGxlbiArIDFcbiAgICBsZXQgZm4gPSB0b2tlbi52YWx1ZSArIChwYXRoLmV4dG5hbWUodG9rZW4udmFsdWUpID09PSAnJyA/ICcuc2hwJyA6ICcnKVxuICAgIGxldCBwbiA9IHBhdGguam9pbihfX2Rpcm5hbWUsIGZuKVxuICAgIHRyeSB7XG4gICAgICBmcy5zdGF0U3luYyhwbilcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBuID0gcGF0aC5qb2luKGRpcnMudXNlciwgZm4pXG4gICAgICAgIGZzLnN0YXRTeW5jKHBuKVxuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcG4gPSAnJ1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocG4gIT09ICcnKSB7XG4gICAgICBsZXQgc3JjID0gZnMucmVhZEZpbGVTeW5jKHBuLCAndXRmOCcpXG4gICAgICBsZXQgbHggPSBuZXcgTGV4ZXIoKVxuICAgICAgbHgucnVuKHBuLCBzcmMpXG4gICAgICBpZiAoIWx4LmVycm9ycykge1xuICAgICAgICBfLmV4dGVuZCh0aGlzLmNvbnN0YW50cywgbHguY29uc3RhbnRzKVxuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMudG9rZW5zLmNvbmNhdChseC50b2tlbnMpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b2tlblxuICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3Rva2Vucy9pbmNsdWRlLmpzIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uL2dsb2JhbHMuanMnXG5pbXBvcnQgeyBGcmFtZXMgfSBmcm9tICcuL2ZyYW1lLmpzJ1xuXG5pbXBvcnQgS2V5TGl0ZXJhbCBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMva2V5X2xpdGVyYWwuanMnXG5cbmltcG9ydCBTdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL3N0YXRlbWVudHMuanMnXG5pbXBvcnQgSWRTdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL2lkLmpzJ1xuaW1wb3J0IEFzc2lnblN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvYXNzaWduLmpzJ1xuaW1wb3J0IFJldHVyblN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvcmV0dXJuLmpzJ1xuaW1wb3J0IENsYXNzU3RhdGVtZW50cyBmcm9tICcuL2dyYW1tYXIvc3RhdGVtZW50cy9jbGFzcy5qcydcbmltcG9ydCBDb25kaXRpb25TdGF0ZW1lbnRzIGZyb20gJy4vZ3JhbW1hci9zdGF0ZW1lbnRzL2NvbmRpdGlvbnMuanMnXG5pbXBvcnQgVmFyU3RhdGVtZW50cyBmcm9tICcuL2dyYW1tYXIvc3RhdGVtZW50cy92YXIuanMnXG5pbXBvcnQgTG9vcFN0YXRlbWVudHMgZnJvbSAnLi9ncmFtbWFyL3N0YXRlbWVudHMvbG9vcHMuanMnXG5cbmltcG9ydCBFeHByZXNzaW9ucyBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMvZXhwcmVzc2lvbnMuanMnXG5pbXBvcnQgQXJyYXlFeHByZXNzaW9ucyBmcm9tICcuL2dyYW1tYXIvZXhwcmVzc2lvbnMvYXJyYXkuanMnXG5pbXBvcnQgRGljdEV4cHJlc3Npb25zIGZyb20gJy4vZ3JhbW1hci9leHByZXNzaW9ucy9kaWN0LmpzJ1xuaW1wb3J0IEZuRXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2ZuLmpzJ1xuaW1wb3J0IElkRXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2lkLmpzJ1xuaW1wb3J0IENsYXNzRXhwcmVzc2lvbnMgZnJvbSAnLi9ncmFtbWFyL2V4cHJlc3Npb25zL2NsYXNzLmpzJ1xuXG5jbGFzcyBOb2RlIHtcblxuICBjb25zdHJ1Y3RvciAocGFyc2VyLCB0b2tlbiwgZGF0YSkge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyXG4gICAgdGhpcy50b2tlbiA9IHRva2VuXG4gICAgdGhpcy5faW5fY2xhc3MgPSBmYWxzZVxuICAgIHRoaXMuX2ZuX2xldmVsID0gMFxuICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwge31cbiAgfVxuXG4gIHRva2VuX3Byb3AgKG5hbWUpIHsgcmV0dXJuIHRoaXMudG9rZW4gPyB0aGlzLnRva2VuW25hbWVdIDogbnVsbCB9XG5cbiAgZ2V0IHZhbHVlICgpIHsgcmV0dXJuIHRoaXMudG9rZW5fcHJvcCgndmFsdWUnKSB9XG5cbiAgZ2V0IHR5cGUgKCkgeyByZXR1cm4gdGhpcy50b2tlbl9wcm9wKCd0eXBlJykgfVxuXG4gIGdldCBzdGFydCAoKSB7IHJldHVybiB0aGlzLnRva2VuX3Byb3AoJ3N0YXJ0JykgfVxuXG4gIGdldCBlbmQgKCkgeyByZXR1cm4gdGhpcy50b2tlbl9wcm9wKCdlbmQnKSB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7IHJldHVybiB0aGlzLnRva2VuX3Byb3AoJ2xlbmd0aCcpIH1cblxuICBpcyAoZSkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4uaXMoZSkgOiBmYWxzZSB9XG5cbiAgdG9TdHJpbmcgKCkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4udG9TdHJpbmcoKSA6ICcnIH1cblxufVxuXG5cbmNsYXNzIEVtcHR5Q2xhc3Mge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VyIGV4dGVuZHMgbWl4KEVtcHR5Q2xhc3MpLndpdGgoXG4gIEtleUxpdGVyYWwsXG5cbiAgU3RhdGVtZW50cyxcbiAgSWRTdGF0ZW1lbnRzLFxuICBBc3NpZ25TdGF0ZW1lbnRzLFxuICBSZXR1cm5TdGF0ZW1lbnRzLFxuICBDbGFzc1N0YXRlbWVudHMsXG4gIENvbmRpdGlvblN0YXRlbWVudHMsXG4gIFZhclN0YXRlbWVudHMsXG4gIExvb3BTdGF0ZW1lbnRzLFxuXG4gIEV4cHJlc3Npb25zLFxuICBBcnJheUV4cHJlc3Npb25zLFxuICBEaWN0RXhwcmVzc2lvbnMsXG4gIEZuRXhwcmVzc2lvbnMsXG4gIElkRXhwcmVzc2lvbnMsXG4gIENsYXNzRXhwcmVzc2lvbnNcbikge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAodG9rZW5zKSB7XG4gICAgdGhpcy5lcnJvcnMgPSAwXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgdGhpcy5ub2RlcyA9IFtdXG4gICAgdGhpcy5mcmFtZXMgPSBuZXcgRnJhbWVzKClcbiAgICB0aGlzLnByZXZfZnJhbWUgPSBudWxsXG4gICAgdGhpcy5pbl9jbGFzcyA9IGZhbHNlXG4gICAgdGhpcy5mbl9sZXZlbCA9IDBcbiAgICB0aGlzLnRva2VucyA9IHRva2VucyB8fCBbXVxuICB9XG5cbiAgdmFsaWRPZmZzZXQgKG9mZnNldCkgeyByZXR1cm4gb2Zmc2V0ID49IDAgJiYgb2Zmc2V0IDwgdGhpcy5sZW5ndGggfVxuXG4gIHRva2VuX2F0IChvZmZzZXQpIHsgcmV0dXJuIHRoaXMudmFsaWRPZmZzZXQob2Zmc2V0KSA/IHRoaXMudG9rZW5zW29mZnNldF0gOiBudWxsIH1cblxuICBnZXQgZW9zICgpIHsgcmV0dXJuIHRoaXMub2Zmc2V0ID49IHRoaXMubGVuZ3RoIH1cblxuICBnZXQgbGVuZ3RoICgpIHsgcmV0dXJuIHRoaXMudG9rZW5zLmxlbmd0aCB9XG5cbiAgZ2V0IHRva2VuICgpIHsgcmV0dXJuIHRoaXMudG9rZW5fYXQodGhpcy5vZmZzZXQpIH1cblxuICBza2lwIChlKSB7IHdoaWxlICh0aGlzLmlzKGUpICYmICF0aGlzLmVvcykgeyB0aGlzLm5leHQoKSB9IH1cblxuICBpcyAoZSkgeyByZXR1cm4gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4uaXMoZSkgOiBmYWxzZSB9XG5cbiAgZXhwZWN0IChlLCBuZXh0ID0gdHJ1ZSkge1xuICAgIGxldCByID0gdGhpcy50b2tlbiA/IHRoaXMudG9rZW4uaXMoZSkgOiBmYWxzZVxuICAgIGlmIChyKSB7XG4gICAgICBpZiAobmV4dCkgeyB0aGlzLm5leHQoKSB9XG4gICAgfVxuICAgIGVsc2UgeyBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCBlLCAnZXhwZWN0ZWQnKSB9XG4gICAgcmV0dXJuIHJcbiAgfVxuXG4gIG1hdGNoIChvZmZzZXQsIG1hdGNoZXMpIHtcbiAgICBpZiAoIV8uaXNOdW1iZXIob2Zmc2V0KSkge1xuICAgICAgbWF0Y2hlcyA9IG9mZnNldFxuICAgICAgb2Zmc2V0ID0gdGhpcy5vZmZzZXRcbiAgICB9XG4gICAgbGV0IHRva2VucyA9IFtdXG4gICAgbGV0IG0gPSAwXG4gICAgd2hpbGUgKHRoaXMudmFsaWRPZmZzZXQob2Zmc2V0KSAmJiBtIDwgbWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5zW29mZnNldCsrXVxuICAgICAgaWYgKCF0b2tlbi5pcyhtYXRjaGVzW20rK10pKSB7IHJldHVybiBudWxsIH1cbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKVxuICAgIH1cbiAgICByZXR1cm4gdG9rZW5zLmxlbmd0aCA/IHRva2VucyA6IG51bGxcbiAgfVxuXG4gIHBlZWsgKGMgPSAxKSB7IHJldHVybiB0aGlzLnRva2VuX2F0KHRoaXMub2Zmc2V0ICsgYykgfVxuXG4gIG5leHQgKGMgPSAxKSB7XG4gICAgdGhpcy5vZmZzZXQgKz0gY1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBsb29wX3doaWxlIChmbiwgbWF0Y2hlcywgZW5kLCBlbmRfbmV4dCwgc2tpcCkge1xuICAgIGxldCBub2RlcyA9IFtdXG4gICAgaWYgKHNraXApIHsgdGhpcy5za2lwKHNraXApIH1cbiAgICB3aGlsZSAoIXRoaXMuZW9zICYmICghZW5kIHx8ICF0aGlzLmlzKGVuZCkpICYmICghbWF0Y2hlcyB8fCB0aGlzLm1hdGNoKG1hdGNoZXMpKSkge1xuICAgICAgbm9kZXMucHVzaChmbi5jYWxsKHRoaXMpKVxuICAgICAgaWYgKHNraXApIHsgdGhpcy5za2lwKHNraXApIH1cbiAgICB9XG4gICAgaWYgKGVuZCkgeyB0aGlzLmV4cGVjdChlbmQsIGVuZF9uZXh0KSB9XG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cblxuICBuZXh0X2V4cHJfbm9kZSAobGVmdCkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICBsZXQgZGF0YSA9IHt9XG4gICAgaWYgKGxlZnQpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBkYXRhID0geyBsZWZ0LCByaWdodDogdGhpcy5leHByKCkgfVxuICAgIH1cbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRva2VuLCBkYXRhKVxuICAgIGlmICghbGVmdCkgeyB0aGlzLm5leHQoKSB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIHJ1biAodG9rZW5zKSB7XG4gICAgdGhpcy5yZXNldCh0b2tlbnMpXG4gICAgdGhpcy5mcmFtZXMuc3RhcnQoJ2dsb2JhbHMnKVxuICAgIGxldCBub2RlcyA9IHRoaXMuc3RhdGVtZW50cygpXG4gICAgdGhpcy5mcmFtZXMuZW5kKClcbiAgICB0aGlzLm5vZGVzID0gbm9kZXNcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIGNvbnNvbGUuaW5mbygncGFyc2VyIGR1bXAnKVxuICAgIGNvbnNvbGUubG9nKHRoaXMubm9kZXMpXG4gICAgY29uc29sZS5sb2coJycpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3BhcnNlci5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IHZhciBGcmFtZVxuZXhwb3J0IHZhciBGcmFtZXNcbmV4cG9ydCB2YXIgRnJhbWVJdGVtXG5cbkZyYW1lcyA9IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gbnVsbFxuICB9XG5cbiAgc3RhcnQgKHR5cGUpIHsgdGhpcy5jdXJyZW50ID0gbmV3IEZyYW1lKHRoaXMsIHRoaXMuY3VycmVudCwgdHlwZSkgfVxuXG4gIGVuZCAoKSB7IHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudC5wYXJlbnQgfVxuXG4gIGFkZCAobm9kZSwgcGFyZW50LCBpdGVtX3R5cGUpIHsgcmV0dXJuIHRoaXMuY3VycmVudC5hZGQobm9kZSwgcGFyZW50LCBpdGVtX3R5cGUpIH1cblxuICBleGlzdHMgKG5hbWUsIGl0ZW1fdHlwZSkge1xuICAgIGxldCBjID0gdGhpcy5jdXJyZW50XG4gICAgd2hpbGUgKGMpIHtcbiAgICAgIGxldCBpID0gYy5leGlzdHMobmFtZSwgaXRlbV90eXBlKVxuICAgICAgaWYgKGkpIHtcbiAgICAgICAgcmV0dXJuIGlcbiAgICAgIH1cbiAgICAgIGMgPSBjLnBhcmVudFxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZm5fZXhpc3RzIChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhpc3RzKG5hbWUsICdmbicpXG4gIH1cblxuICBjbGFzc19leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2NsYXNzJylcbiAgfVxuXG4gIHZhcl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ3ZhcicpXG4gIH1cblxufVxuXG5cbkZyYW1lSXRlbSA9IGNsYXNzIHtcblxuICBjb25zdHJ1Y3RvciAoZnJhbWUsIHBhcmVudCwgbm9kZSwgaXRlbV90eXBlKSB7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICB0aGlzLml0ZW1fdHlwZSA9IGl0ZW1fdHlwZVxuICAgIHRoaXMubm9kZSA9IG5vZGVcbiAgfVxuXG4gIGdldCBkYXRhICgpIHsgcmV0dXJuIHRoaXMubm9kZS5kYXRhIH1cblxuICBnZXQgbmFtZSAoKSB7IHJldHVybiB0aGlzLm5vZGUudmFsdWUgfVxuXG4gIGdldCB0eXBlICgpIHsgcmV0dXJuIHRoaXMubm9kZS50eXBlIH1cblxuICBnZXQgaXNfdmFyICgpIHsgcmV0dXJuIHRoaXMuaXRlbV90eXBlID09PSAndmFyJyB9XG5cbiAgZ2V0IGlzX2NsYXNzICgpIHsgcmV0dXJuIHRoaXMuaXRlbV90eXBlID09PSAnY2xhc3MnIH1cblxuICBnZXQgaXNfZm4gKCkgeyByZXR1cm4gdGhpcy5pdGVtX3R5cGUgPT09ICdmbicgfVxuXG4gIGdldCBpc19sb2NhbCAoKSB7IHJldHVybiB0aGlzLmZyYW1lLmlzX2xvY2FsIH1cblxuICBnZXQgaXNfZ2xvYmFsICgpIHsgcmV0dXJuIHRoaXMuZnJhbWUuaXNfZ2xvYmFsIH1cblxufVxuXG5cbkZyYW1lID0gY2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yIChmcmFtZXMsIHBhcmVudCwgdHlwZSkge1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICB0aGlzLnR5cGUgPSB0eXBlXG4gICAgdGhpcy5pdGVtcyA9IFtdXG4gIH1cblxuICBnZXQgbmFtZSAoKSB7IHJldHVybiB0aGlzLnBhcmVudCA/ICckcycgOiAnJGcnIH1cblxuICBnZXQgaXNfbG9jYWwgKCkgeyByZXR1cm4gdGhpcy5wYXJlbnQgIT09IG51bGwgfVxuXG4gIGdldCBpc19nbG9iYWwgKCkgeyByZXR1cm4gdGhpcy5wYXJlbnQgPT09IG51bGwgfVxuXG4gIGFkZCAobm9kZSwgcGFyZW50LCBpdGVtX3R5cGUpIHtcbiAgICBsZXQgaSA9IG5ldyBGcmFtZUl0ZW0odGhpcywgcGFyZW50LCBub2RlLCBpdGVtX3R5cGUpXG4gICAgdGhpcy5pdGVtcy5wdXNoKGkpXG4gICAgbm9kZS5fZ2xvYmFsID0gdGhpcy5pc19nbG9iYWxcbiAgICByZXR1cm4gaVxuICB9XG5cbiAgZXhpc3RzIChuYW1lLCBpdGVtX3R5cGUpIHsgcmV0dXJuIF8uZmluZCh0aGlzLml0ZW1zLCBpdGVtX3R5cGUgPyB7IG5hbWUsIGl0ZW1fdHlwZSB9IDogeyBuYW1lIH0pIH1cblxuICBmbl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2ZuJylcbiAgfVxuXG4gIHZhcl9leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ3ZhcicpXG4gIH1cblxuICBjbGFzc19leGlzdHMgKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5leGlzdHMobmFtZSwgJ2NsYXNzJylcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZnJhbWUuanMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEtleUxpdGVyYWxzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAga2V5X2xpdGVyYWwgKCkge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICB0aGlzLmV4cGVjdCgna2V5JylcbiAgICBub2RlLmRhdGEuZXhwciA9IHRoaXMuZXhwcigpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMva2V5X2xpdGVyYWwuanMiLCJpbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGJsb2NrIChlbmQsIGVuZF9uZXh0ID0gdHJ1ZSwgYmxvY2tfdHlwZSA9IG51bGwpIHtcbiAgICBpZiAoYmxvY2tfdHlwZSkge1xuICAgICAgdGhpcy5mcmFtZXMuc3RhcnQoYmxvY2tfdHlwZSlcbiAgICB9XG4gICAgbGV0IG5vZGVzID0gdGhpcy5sb29wX3doaWxlKHRoaXMuc3RhdGVtZW50LCBudWxsLCBlbmQsIGVuZF9uZXh0LCAnZW9sJylcbiAgICBpZiAoYmxvY2tfdHlwZSkge1xuICAgICAgdGhpcy5mcmFtZXMuZW5kKClcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cblxuICBzdGF0ZW1lbnRzICgpIHsgcmV0dXJuIHRoaXMuYmxvY2soKSB9XG5cbiAgc2luZ2xlX3N0YXRlbWVudCAoKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIHRoaXMubmV4dCgpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIHN0YXRlbWVudCAoKSB7XG4gICAgaWYgKHRoaXMubWF0Y2goWydsZXQnLCAnaWQnXSkpIHsgcmV0dXJuIHRoaXMudmFyX3N0YXRlbWVudCgpIH0gLy8gdmFyaWFibGUgZGVmaW5pdGlvblxuICAgIGVsc2UgaWYgKHRoaXMubWF0Y2goWydpZHxpZF9maWVsZHx0aGlzX2ZpZWxkJywgJ2Fzc2lnbnxmbl9hc3NpZ24nXSkpIHsgcmV0dXJuIHRoaXMuYXNzaWduX3N0YXRlbWVudCgpIH0gLy8gdmFyaWFibGUgYXNzaWdubWVudFxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2lmJykpIHsgcmV0dXJuIHRoaXMuaWZfc3RhdGVtZW50KCkgfSAvLyBpZiBibG9ja1xuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2ZvcicpKSB7IHJldHVybiB0aGlzLmZvcl9zdGF0ZW1lbnQoKSB9IC8vIHdoaWxlIGJsb2NrXG4gICAgZWxzZSBpZiAodGhpcy5pcygnd2hpbGUnKSkgeyByZXR1cm4gdGhpcy53aGlsZV9zdGF0ZW1lbnQoKSB9IC8vIHdoaWxlIGJsb2NrXG4gICAgZWxzZSBpZiAodGhpcy5pcygncmV0dXJuJykpIHsgcmV0dXJuIHRoaXMucmV0dXJuX3N0YXRlbWVudCgpIH0gLy8gcmV0dXJuIGZyb20gZnVuY3Rpb25cbiAgICBlbHNlIGlmICh0aGlzLmlzKFsnYnJlYWsnLCAnY29udGludWUnXSkpIHsgcmV0dXJuIHRoaXMuc2luZ2xlX3N0YXRlbWVudCgpIH0gLy8gc2luZ2xlIHN0YXRlbWVudFxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2NsYXNzJykpIHsgcmV0dXJuIHRoaXMuY2xhc3Nfc3RhdGVtZW50KCkgfSAvLyBjbGFzcyBzdGF0ZW1lbnRcbiAgICBlbHNlIGlmICh0aGlzLmlzKFsnaWQnLCAnc3VwZXInXSkpIHsgcmV0dXJuIHRoaXMuaWRfc3RhdGVtZW50KCkgfSAvLyBmdW5jdGlvbiBjYWxsXG4gICAgZWxzZSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnc3ludGF4IGVycm9yJylcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvc3RhdGVtZW50cy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJZFN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBpZF9zdGF0ZW1lbnQgKGZpcnN0ID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLmlzKCdzdXBlcicpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdXBlcl9leHByKClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5pZF9leHByKGZpcnN0KVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9pZC5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQXNzaWduU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGFzc2lnbl9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCBub2RlID0gbnVsbFxuICAgIGxldCBpZCA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICh0aGlzLmlzKCdmbl9hc3NpZ24nKSkge1xuICAgICAgbm9kZSA9IHRoaXMuZm5fZXhwcihpZCwgdHJ1ZSlcbiAgICAgIGlkLl9mbiA9IHRydWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbiwgeyBpZCB9KVxuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIG5vZGUuZGF0YS5leHByID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgdGhpcy5mcmFtZXMuYWRkKGlkLCBudWxsLCBpZC5fZm4gPyAnZm4nIDogJ3ZhcicpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvc3RhdGVtZW50cy9hc3NpZ24uanMiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFJldHVyblN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICByZXR1cm5fc3RhdGVtZW50ICgpIHtcbiAgICBsZXQgcCA9IGZhbHNlXG4gICAgbGV0IGVuZCA9ICdlb2x8ZW5kfGNsb3NlX3BhcmVuJ1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICBub2RlLmRhdGEuYXJncyA9IFtdXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7XG4gICAgICBwID0gdHJ1ZVxuICAgICAgZW5kID0gJ2Nsb3NlX3BhcmVuJ1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgaWYgKCFwIHx8ICF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICBub2RlLmRhdGEuYXJncyA9IHRoaXMuZXhwcnMoZW5kLCBmYWxzZSlcbiAgICB9XG4gICAgaWYgKHApIHtcbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvcmV0dXJuLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBDbGFzc1N0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBjbGFzc19saXN0ICgpIHsgcmV0dXJuIHRoaXMubG9vcF93aGlsZSh0aGlzLnNpbmdsZSwgWydpZCddLCAnZW9sJywgdHJ1ZSwgJ2NvbW1hJykgfVxuXG4gIGNsYXNzX3N0YXRlbWVudCAoKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgbGV0IF9leHRlbmRzID0gbnVsbFxuICAgIGxldCBpZCA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICh0aGlzLmlzKCc6JykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBfZXh0ZW5kcyA9IHRoaXMuY2xhc3NfbGlzdCgpXG4gICAgfVxuICAgIHRoaXMuZnJhbWVzLmFkZChpZCwgbnVsbCwgJ2NsYXNzJylcbiAgICB0aGlzLmluX2NsYXNzID0gdHJ1ZVxuICAgIGxldCBib2R5ID0gdGhpcy5ibG9jaygnZW5kJywgZmFsc2UsICdjbGFzcycpXG4gICAgdGhpcy5pbl9jbGFzcyA9IGZhbHNlXG4gICAgdGhpcy5leHBlY3QoJ2VuZCcpXG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IGlkLCBfZXh0ZW5kcywgYm9keSB9KVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2NsYXNzLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBDb25kaXRpb25TdGF0ZW1lbnRzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgaWZfc3RhdGVtZW50IChleHBlY3RfZW5kID0gdHJ1ZSkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGxldCBleHByX2Jsb2NrXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fcGFyZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIGV4cHJfYmxvY2sgPSB0aGlzLmV4cHIoKVxuICAgICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleHByX2Jsb2NrID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgbGV0IHRydWVfYm9keSA9IHRoaXMuYmxvY2soWydlbHNlJywgJ2VuZCddLCBmYWxzZSwgJ2lmJylcbiAgICBsZXQgZmFsc2VfYm9keSA9IHRoaXMuaXMoJ2Vsc2UnKSA/IHRoaXMuZWxzZV9zdGF0ZW1lbnQoZmFsc2UpIDogbnVsbFxuICAgIGlmIChleHBlY3RfZW5kKSB7IHRoaXMuZXhwZWN0KCdlbmQnKSB9XG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IGV4cHI6IGV4cHJfYmxvY2ssIHRydWVfYm9keSwgZmFsc2VfYm9keSB9KVxuICB9XG5cbiAgZWxzZV9zdGF0ZW1lbnQgKGV4cGVjdF9lbmQgPSB0cnVlKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIGxldCBub2RlID0gbnVsbFxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ2lmJykpIHtcbiAgICAgIG5vZGUgPSB0aGlzLmlmX3N0YXRlbWVudChmYWxzZSlcbiAgICAgIG5vZGUudG9rZW4gPSB0b2tlblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0b2tlbiwgeyBmYWxzZV9ib2R5OiB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ2Vsc2UnKSB9KVxuICAgIH1cbiAgICBpZiAoZXhwZWN0X2VuZCkgeyB0aGlzLmV4cGVjdCgnZW5kJykgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvY29uZGl0aW9ucy5qcyIsImltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi4vLi4vbGV4ZXIuanMnXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vLi4vcGFyc2VyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFZhclN0YXRlbWVudHMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICB2YXJfc3RhdGVtZW50ICgpIHtcbiAgICBsZXQgbm9kZSA9IG51bGxcbiAgICB0aGlzLm5leHQoKVxuICAgIGlmICghdGhpcy5wZWVrKCkuaXMoJ2Fzc2lnbnxmbl9hc3NpZ24nKSkge1xuICAgICAgbGV0IHQgPSBuZXcgVG9rZW4odGhpcy50b2tlbilcbiAgICAgIHQudmFsdWUgPSAnPSdcbiAgICAgIHQuX3R5cGUgPSAnYXNzaWduJ1xuICAgICAgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHQsIHsgaWQ6IHRoaXMudG9rZW4sIGV4cHI6IG51bGwgfSlcbiAgICAgIHRoaXMuZnJhbWVzLmFkZCh0aGlzLnRva2VuLCBudWxsLCAndmFyJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlID0gdGhpcy5hc3NpZ25fc3RhdGVtZW50KClcbiAgICB9XG4gICAgbm9kZS5fbGV0ID0gdHJ1ZVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL3N0YXRlbWVudHMvdmFyLmpzIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBMb29wU3RhdGVtZW50cyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGZvcl9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuXG4gICAgbGV0IHYgPSB0aGlzLnRva2VuXG4gICAgdGhpcy5leHBlY3QoJ2lkfHZhcicpXG4gICAgdGhpcy5leHBlY3QoJ2Fzc2lnbicpXG4gICAgbGV0IG1pbl9leHByID0gdGhpcy5leHByKClcbiAgICB0aGlzLmV4cGVjdCgndG8nKVxuICAgIGxldCBtYXhfZXhwciA9IHRoaXMuZXhwcigpXG4gICAgbGV0IHN0ZXBfZXhwciA9IG51bGxcbiAgICBpZiAodGhpcy5pcygnc3RlcCcpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgc3RlcF9leHByID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgbGV0IGJvZHkgPSB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ2ZvcicpXG4gICAgdGhpcy5leHBlY3QoJ2VuZCcpXG4gICAgcmV0dXJuIG5ldyBOb2RlKHRoaXMsIHRva2VuLCB7IHYsIG1pbl9leHByLCBtYXhfZXhwciwgc3RlcF9leHByLCBib2R5IH0pXG4gIH1cblxuICB3aGlsZV9zdGF0ZW1lbnQgKCkge1xuICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5cbiAgICB0aGlzLm5leHQoKVxuICAgIGxldCBleHByX2Jsb2NrXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fcGFyZW4nKSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIGV4cHJfYmxvY2sgPSB0aGlzLmV4cHIoKVxuICAgICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBleHByX2Jsb2NrID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgbGV0IGJvZHkgPSB0aGlzLmJsb2NrKCdlbmQnLCBmYWxzZSwgJ3doaWxlJylcbiAgICB0aGlzLmV4cGVjdCgnZW5kJylcbiAgICByZXR1cm4gbmV3IE5vZGUodGhpcywgdG9rZW4sIHsgZXhwcjogZXhwcl9ibG9jaywgYm9keSB9KVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9zdGF0ZW1lbnRzL2xvb3BzLmpzIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZXhwcnMgKGVuZCwgZW5kX25leHQpIHsgcmV0dXJuIHRoaXMubG9vcF93aGlsZSh0aGlzLmV4cHIsIG51bGwsIGVuZCwgZW5kX25leHQsICdjb21tYScpIH1cblxuICBleHByICgpIHtcbiAgICBsZXQgbm9kZSA9IHRoaXMuc2ltcGxlX2V4cHIoKVxuICAgIGlmIChub2RlKSB7XG4gICAgICBsZXQgdGVybSA9IHRoaXMudGVybV9leHByKG5vZGUpXG4gICAgICBpZiAodGVybSkgeyByZXR1cm4gdGVybSB9XG5cbiAgICAgIGxldCBmYWN0b3IgPSB0aGlzLmZhY3Rvcl9leHByKG5vZGUpXG4gICAgICBpZiAoZmFjdG9yKSB7IHJldHVybiBmYWN0b3IgfVxuXG4gICAgICBsZXQgY29uZGl0aW9uYWwgPSB0aGlzLmNvbmRpdGlvbmFsX2V4cHIobm9kZSlcbiAgICAgIGlmIChjb25kaXRpb25hbCkgeyByZXR1cm4gY29uZGl0aW9uYWwgfVxuXG4gICAgICBsZXQganVuY3Rpb24gPSB0aGlzLmp1bmN0aW9uX2V4cHIobm9kZSlcbiAgICAgIGlmIChqdW5jdGlvbikgeyByZXR1cm4ganVuY3Rpb24gfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgc2ltcGxlX2V4cHIgKCkge1xuICAgIGlmICh0aGlzLmlzKFsnbnVtYmVyJywgJ3N0cmluZycsICdjaGFyJ10pKSB7IHJldHVybiB0aGlzLm5leHRfZXhwcl9ub2RlKCkgfVxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ2ZuX2Fzc2lnbicpKSB7IHJldHVybiB0aGlzLmZuX2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7IHJldHVybiB0aGlzLnN1Yl9leHByKCkgfVxuICAgIGVsc2UgaWYgKHRoaXMuaXMoJ29wZW5fYnJhY2tldCcpKSB7IHJldHVybiB0aGlzLmFycmF5X2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnb3Blbl9jdXJseScpKSB7IHJldHVybiB0aGlzLmRpY3RfZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKFsndGhpcycsICd0aGlzX2ZpZWxkJ10pKSB7IHJldHVybiB0aGlzLnRoaXNfZXhwcigpIH1cbiAgICBlbHNlIGlmICh0aGlzLmlzKCdzdXBlcicpKSB7IHJldHVybiB0aGlzLnN1cGVyX2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnbmV3JykpIHsgcmV0dXJuIHRoaXMubmV3X2V4cHIoKSB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygnaWQnKSkgeyByZXR1cm4gdGhpcy5pZF9leHByKCkgfVxuICAgIGVsc2Uge1xuICAgICAgZXJyb3IodGhpcywgdGhpcy50b2tlbiwgJ251bWJlciwgc3RyaW5nLCB2YXJpYWJsZSwgdmFyaWFibGUgcGFyZW4gb3IgZnVuY3Rpb24gY2FsbC9leHByZXNzaW9uIGV4cGVjdGVkJylcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBzdWJfZXhwciAoKSB7XG4gICAgbGV0IG5vZGVzID0gW11cbiAgICBub2Rlcy5wdXNoKG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pKVxuICAgIHRoaXMuZXhwZWN0KCdvcGVuX3BhcmVuJylcbiAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgIG5vZGVzLnB1c2godGhpcy5leHByKCkpXG4gICAgfVxuICAgIG5vZGVzLnB1c2gobmV3IE5vZGUodGhpcywgdGhpcy50b2tlbikpXG4gICAgdGhpcy5leHBlY3QoJ2Nsb3NlX3BhcmVuJylcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxuXG4gIHRlcm1fZXhwciAobGVmdCkgeyByZXR1cm4gdGhpcy5pcygvXFwrfC0vKSA/IHRoaXMubmV4dF9leHByX25vZGUobGVmdCkgOiBudWxsIH1cblxuICBmYWN0b3JfZXhwciAobGVmdCkgeyByZXR1cm4gdGhpcy5pcygvXFwvfFxcKi8pID8gdGhpcy5uZXh0X2V4cHJfbm9kZShsZWZ0KSA6IG51bGwgfVxuXG4gIGNvbmRpdGlvbmFsX2V4cHIgKGxlZnQpIHsgcmV0dXJuIHRoaXMuaXMoLz58Pj18PHw8PXwhPXw8Pnw9PS8pID8gdGhpcy5uZXh0X2V4cHJfbm9kZShsZWZ0KSA6IG51bGwgfVxuXG4gIGp1bmN0aW9uX2V4cHIgKGxlZnQpIHsgcmV0dXJuIHRoaXMuaXMoLyZ8XFx8LykgPyB0aGlzLm5leHRfZXhwcl9ub2RlKGxlZnQpIDogbnVsbCB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9leHByZXNzaW9ucy5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQXJyYXlFeHByZXNzaW9ucyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGFycmF5X2V4cHIgKCkge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbilcbiAgICBub2RlLmRhdGEuYXJncyA9IFtdXG4gICAgdGhpcy5leHBlY3QoJ29wZW5fYnJhY2tldCcpXG4gICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9icmFja2V0JykpIHtcbiAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5sb29wX3doaWxlKHRoaXMuZXhwciwgbnVsbCwgJ2Nsb3NlX2JyYWNrZXQnLCBmYWxzZSwgJ2NvbW1hfGVvbCcpXG4gICAgfVxuICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9icmFja2V0JylcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9hcnJheS5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgRGljdEV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZGljdF9leHByICgpIHtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgbm9kZS5kYXRhLmRlZiA9IFtdXG4gICAgdGhpcy5leHBlY3QoJ29wZW5fY3VybHknKVxuICAgIGlmICghdGhpcy5pcygnY2xvc2VfY3VybHknKSkge1xuICAgICAgbm9kZS5kYXRhLmRlZiA9IHRoaXMubG9vcF93aGlsZSh0aGlzLmtleV9saXRlcmFsLCBbJ2tleSddLCAnY2xvc2VfY3VybHknLCBmYWxzZSwgJ2NvbW1hfGVvbCcpXG4gICAgfVxuICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9jdXJseScpXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL2dyYW1tYXIvZXhwcmVzc2lvbnMvZGljdC5qcyIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi8uLi9wYXJzZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgRm5FeHByZXNzaW9ucyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGZuX2V4cHIgKGlkLCBzdGF0ZW1lbnQgPSBmYWxzZSkge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodGhpcywgdGhpcy50b2tlbiwgeyBpZCB9KVxuICAgIG5vZGUuZGF0YS5hcmdzID0gW11cbiAgICBpZiAoc3RhdGVtZW50KSB7XG4gICAgICBub2RlLl9pbl9jbGFzcyA9IHRoaXMuaW5fY2xhc3NcbiAgICAgIG5vZGUuX2ZuX2xldmVsID0gdGhpcy5mbl9sZXZlbCsrXG4gICAgfVxuICAgIHRoaXMubmV4dCgpXG4gICAgdGhpcy5mcmFtZXMuc3RhcnQoJ2ZuJylcbiAgICBpZiAodGhpcy5pcygnb3Blbl9wYXJlbicpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5mbl9hcmdzX2RlZigpXG4gICAgICB9XG4gICAgICB0aGlzLmV4cGVjdCgnY2xvc2VfcGFyZW4nKVxuICAgIH1cbiAgICBub2RlLmRhdGEuYm9keSA9IHRoaXMuYmxvY2soJ2VuZCcsIGZhbHNlKVxuICAgIHRoaXMuZnJhbWVzLmVuZCgpXG4gICAgdGhpcy5leHBlY3QoJ2VuZCcpXG4gICAgaWYgKHN0YXRlbWVudCkge1xuICAgICAgdGhpcy5mbl9sZXZlbC0tXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBmbl9hcmcgKCkge1xuICAgIHRoaXMuZnJhbWVzLmFkZCh0aGlzLnRva2VuLCBudWxsLCAndmFyJylcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHRoaXMsIHRoaXMudG9rZW4pXG4gICAgdGhpcy5uZXh0KClcbiAgICBpZiAodGhpcy5pcygnYXNzaWduJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBub2RlLmRhdGEuYXNzaWduID0gdGhpcy5leHByKClcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGZuX2FyZ3NfZGVmICgpIHsgcmV0dXJuIHRoaXMubG9vcF93aGlsZSh0aGlzLmZuX2FyZywgWydpZCddLCAnY2xvc2VfcGFyZW4nLCBmYWxzZSwgJ2NvbW1hfGVvbCcpIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2ZuLmpzIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzLmpzJ1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uLy4uL3BhcnNlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBJZEV4cHJlc3Npb25zIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgaWRfZXhwciAoZmlyc3QgPSB0cnVlKSB7XG4gICAgaWYgKGZpcnN0ICYmICF0aGlzLmZyYW1lcy5leGlzdHModGhpcy50b2tlbi52YWx1ZSkpIHtcbiAgICAgIGVycm9yKHRoaXMsIHRoaXMudG9rZW4sICd1bmRlY2xhcmVkIGlkZW50aWZpZXInKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fYnJhY2tldCcpKSB7XG4gICAgICBpZiAoIW5vZGUuZGF0YS5maWVsZHMpIHtcbiAgICAgICAgbm9kZS5kYXRhLmZpZWxkcyA9IFtdXG4gICAgICB9XG4gICAgICBub2RlLmRhdGEuZmllbGRzLnB1c2godGhpcy5hcnJheV9leHByKCkpXG4gICAgfVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBub2RlLnRva2VuLl90eXBlID0gJ2ZuJ1xuICAgICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5leHBycygnY2xvc2VfcGFyZW4nLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHdoaWxlICh0aGlzLmlzKFsnaWRfZmllbGQnLCAnb3Blbl9icmFja2V0J10pKSB7XG4gICAgICBpZiAoIW5vZGUuZGF0YS5maWVsZHMpIHtcbiAgICAgICAgbm9kZS5kYXRhLmZpZWxkcyA9IFtdXG4gICAgICB9XG4gICAgICBub2RlLmRhdGEuZmllbGRzLnB1c2godGhpcy5pZF9maWVsZCgpKVxuICAgICAgdGhpcy5za2lwKCdjb21tYScpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBpZF9maWVsZCAoKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLCB0aGlzLnRva2VuKVxuICAgIG5vZGUuZGF0YS5hcmdzID0gW11cbiAgICBub2RlLnRva2VuLl90eXBlID0gJ2lkJ1xuICAgIG5vZGUuX2ZpZWxkID0gdHJ1ZVxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKHRoaXMuaXMoJ29wZW5fYnJhY2tldCcpKSB7XG4gICAgICBpZiAoIW5vZGUuZGF0YS5maWVsZHMpIHtcbiAgICAgICAgbm9kZS5kYXRhLmZpZWxkcyA9IFtdXG4gICAgICB9XG4gICAgICBub2RlLmRhdGEuZmllbGRzLnB1c2godGhpcy5hcnJheV9leHByKCkpXG4gICAgfVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBub2RlLnRva2VuLl90eXBlID0gJ2ZuJ1xuICAgICAgaWYgKCF0aGlzLmlzKCdjbG9zZV9wYXJlbicpKSB7XG4gICAgICAgIG5vZGUuZGF0YS5hcmdzID0gdGhpcy5leHBycygnY2xvc2VfcGFyZW4nLCBmYWxzZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuZXhwZWN0KCdjbG9zZV9wYXJlbicpXG4gICAgfVxuICAgIHJldHVybiBub2RlXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci9ncmFtbWFyL2V4cHJlc3Npb25zL2lkLmpzIiwiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIENsYXNzRXhwcmVzc2lvbnMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBuZXdfZXhwciAoKSB7XG4gICAgbGV0IHRva2VuID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgbGV0IGlkID0gdGhpcy50b2tlblxuICAgIHRoaXMubmV4dCgpXG4gICAgaWYgKCF0aGlzLmZyYW1lcy5leGlzdHMoaWQudmFsdWUsICdjbGFzcycpKSB7XG4gICAgICBlcnJvcih0aGlzLCBpZCwgJ3VuZGVjbGFyZWQgY2xhc3MnKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgbGV0IGFyZ3MgPSBbXVxuICAgIGlmICh0aGlzLmlzKCdvcGVuX3BhcmVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICBpZiAoIXRoaXMuaXMoJ2Nsb3NlX3BhcmVuJykpIHtcbiAgICAgICAgYXJncyA9IHRoaXMuZXhwcnMoJ2Nsb3NlX3BhcmVuJywgZmFsc2UpXG4gICAgICB9XG4gICAgICB0aGlzLmV4cGVjdCgnY2xvc2VfcGFyZW4nKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IE5vZGUodGhpcywgdG9rZW4sIHsgaWQsIGFyZ3MgfSlcbiAgfVxuXG4gIHRoaXNfZXhwciAoKSB7XG4gICAgaWYgKCF0aGlzLmluX2NsYXNzKSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnQCBjYW5ub3QgYmUgdXNlZCBvdXRzaWRlIGNsYXNzIGRlZmluaXRpb24nKVxuICAgICAgdGhpcy5uZXh0KClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGlmICh0aGlzLmlzKCd0aGlzJykpIHtcbiAgICAgIHJldHVybiB0aGlzLm5leHRfZXhwcl9ub2RlKClcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5pcygndGhpc19maWVsZCcpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pZF9leHByKGZhbHNlKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgc3VwZXJfZXhwciAoKSB7XG4gICAgaWYgKCF0aGlzLmluX2NsYXNzKSB7XG4gICAgICBlcnJvcih0aGlzLCB0aGlzLnRva2VuLCAnc3VwZXIgY2Fubm90IGJlIHVzZWQgb3V0c2lkZSBjbGFzcyBkZWZpbml0aW9uJylcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pZF9leHByKGZhbHNlKVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvZ3JhbW1hci9leHByZXNzaW9ucy9jbGFzcy5qcyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IFRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy90ZW1wbGF0ZXMuanMnXG5pbXBvcnQgQ29kZVRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9jb2RlLmpzJ1xuaW1wb3J0IEJsb2NrVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2Jsb2NrLmpzJ1xuaW1wb3J0IFN0YXRlbWVudFRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcy9zdGF0ZW1lbnRzLmpzJ1xuaW1wb3J0IEV4cHJlc3Npb25UZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvZXhwcmVzc2lvbnMuanMnXG5pbXBvcnQgUHJpbWl0aXZlVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL3ByaW1pdGl2ZXMuanMnXG5pbXBvcnQgT3BlcmF0b3JUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvb3BlcmF0b3JzLmpzJ1xuaW1wb3J0IElkVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2lkLmpzJ1xuaW1wb3J0IENsYXNzVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2NsYXNzLmpzJ1xuaW1wb3J0IEZuVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2ZuLmpzJ1xuaW1wb3J0IEFycmF5VGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzL2FycmF5LmpzJ1xuaW1wb3J0IERpY3RUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvZGljdC5qcydcbmltcG9ydCBBc3NpZ25UZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMvYXNzaWduLmpzJ1xuXG5jbGFzcyBFbXB0eUNsYXNzIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zcGlsZXIgZXh0ZW5kcyBtaXgoRW1wdHlDbGFzcykud2l0aChcbiAgVGVtcGxhdGVzLFxuICBDb2RlVGVtcGxhdGVzLFxuXG4gIEJsb2NrVGVtcGxhdGVzLFxuICBTdGF0ZW1lbnRUZW1wbGF0ZXMsXG4gIEV4cHJlc3Npb25UZW1wbGF0ZXMsXG5cbiAgUHJpbWl0aXZlVGVtcGxhdGVzLFxuICBPcGVyYXRvclRlbXBsYXRlcyxcbiAgSWRUZW1wbGF0ZXMsXG5cbiAgQ2xhc3NUZW1wbGF0ZXMsXG4gIEZuVGVtcGxhdGVzLFxuXG4gIEFycmF5VGVtcGxhdGVzLFxuICBEaWN0VGVtcGxhdGVzLFxuXG4gIEFzc2lnblRlbXBsYXRlc1xuKSB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIGdldCBsZW5ndGggKCkgeyByZXR1cm4gdGhpcy5saW5lcy5sZW5ndGggfVxuXG4gIGdldCBlb3MgKCkgeyByZXR1cm4gdGhpcy5vZmZzZXQgPj0gdGhpcy5ub2Rlcy5sZW5ndGggfVxuXG4gIGdldCBub2RlICgpIHsgcmV0dXJuIHRoaXMubm9kZV9hdCh0aGlzLm9mZnNldCkgfVxuXG4gIHZhbGlkT2Zmc2V0IChvZmZzZXQpIHsgcmV0dXJuIG9mZnNldCA+PSAwICYmIG9mZnNldCA8IHRoaXMubm9kZXMubGVuZ3RoIH1cblxuICBub2RlX2F0IChvZmZzZXQpIHsgcmV0dXJuIHRoaXMudmFsaWRPZmZzZXQob2Zmc2V0KSA/IHRoaXMubm9kZXNbb2Zmc2V0XSA6IG51bGwgfVxuXG4gIHBlZWsgKGMgPSAxKSB7IHJldHVybiB0aGlzLm5vZGVfYXQodGhpcy5vZmZzZXQgKyBjKSB9XG5cbiAgbmV4dCAoYyA9IDEpIHsgdGhpcy5vZmZzZXQgKz0gYyB9XG5cbiAgd3JpdGUgKC4uLnZhbHVlcykgeyB0aGlzLmxpbmUgKz0gdmFsdWVzLmpvaW4oJycpIH1cblxuICB3cml0ZWxuICguLi52YWx1ZXMpIHtcbiAgICB0aGlzLndyaXRlKC4uLnZhbHVlcylcbiAgICB0aGlzLmxpbmVzID0gdGhpcy5saW5lcy5jb25jYXQodGhpcy5saW5lLnNwbGl0KCdcXG4nKSlcbiAgICB0aGlzLmxpbmUgPSAnJ1xuICB9XG5cbiAgcmVzZXQgKG5vZGVzKSB7XG4gICAgdGhpcy5lcnJvcnMgPSAwXG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzIHx8IFtdXG4gICAgdGhpcy5saW5lcyA9IFtdXG4gICAgdGhpcy5saW5lID0gJydcbiAgICB0aGlzLm9mZnNldCA9IDBcbiAgICB0aGlzLmNvZGUgPSAnJ1xuICAgIHRoaXMuaW5kZW50X2xldmVsID0gMFxuICB9XG5cbiAgY29tbWEgKG5vZGVzKSB7XG4gICAgbGV0IGEgPSBbXVxuICAgIGZvciAobGV0IG4gb2Ygbm9kZXMpIHtcbiAgICAgIGEucHVzaChuIGluc3RhbmNlb2YgTm9kZSA/IHRoaXMuZXhwcihuKSA6IG4pXG4gICAgfVxuICAgIHJldHVybiBhLmpvaW4oJywgJylcbiAgfVxuXG4gIGxuIChzdHIpIHsgcmV0dXJuIHN0ciArICghXy5lbmRzV2l0aChzdHIsICdcXG4nKSA/ICdcXG4nIDogJycpIH1cblxuICBpbmRlbnQgKHN0cikgeyByZXR1cm4gXy5wYWRTdGFydCgnJywgdGhpcy5pbmRlbnRfbGV2ZWwgKiAyKSArIHN0ciB9XG5cbiAgc3RyICh2YWx1ZSkgeyByZXR1cm4gJ1xcJycgKyB2YWx1ZS5yZXBsYWNlKC8nL2csICdcXCcnKSArICdcXCcnIH1cblxuICBydW4gKG5vZGVzKSB7XG4gICAgdGhpcy5yZXNldChub2RlcylcbiAgICB0aGlzLmNvZGVfc3RhcnQoKVxuICAgIHdoaWxlICghdGhpcy5lb3MpIHtcbiAgICAgIHRoaXMud3JpdGVsbih0aGlzLnN0YXRlbWVudCh0aGlzLm5vZGUpKVxuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gICAgdGhpcy5jb2RlX2VuZCgpXG4gICAgdGhpcy5jb2RlID0gdGhpcy5saW5lcy5qb2luKCdcXG4nKVxuICAgIHJldHVybiB0aGlzLmNvZGVcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIGNvbnNvbGUuaW5mbygndHJhbnNwaWxlciBkdW1wJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvZGUpXG4gICAgY29uc29sZS5sb2coJycpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RyYW5zcGlsZXIuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICBpZiAoXy5pc1N0cmluZyhub2RlKSkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZV90ZW1wbGF0ZShub2RlKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKCdmbicpKSB7XG4gICAgICByZXR1cm4gdGhpcy5mbl9jYWxsX3RlbXBsYXRlKG5vZGUpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2ZuX2Fzc2lnbicpKSB7XG4gICAgICByZXR1cm4gdGhpcy5mbl9hc3NpZ25fdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnb3Blbl9icmFja2V0JykpIHtcbiAgICAgIHJldHVybiB0aGlzLmFycmF5X3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoJ29wZW5fY3VybHknKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGljdF90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKFsnbWF0aCcsICdsb2dpYycsICdjb21wJ10pKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcGVyYXRvcl90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLmlzKFsndGhpcycsICd0aGlzX2ZpZWxkJ10pKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGlzX3RlbXBsYXRlKG5vZGUsIGQpXG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUuaXMoJ25ldycpKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZXdfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcyhbJ2NoYXInLCAnc3RyaW5nJ10pKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJpbmdfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5pcygnaWQnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuaWRfdGVtcGxhdGUobm9kZSwgZClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZV90ZW1wbGF0ZShub2RlLCBkKVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy90ZW1wbGF0ZXMuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQ29kZVRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIGNvZGVfc3RhcnRfdGVtcGxhdGUgKCkge1xuICAgIHRoaXMud3JpdGVsbignKGZ1bmN0aW9uICgpIHsnKVxuICAgIHRoaXMuaW5kZW50X2xldmVsKytcbiAgICB0aGlzLndyaXRlbG4oJ1xcJ3VzZSBzdHJpY3RcXCc7JylcbiAgICB0aGlzLndyaXRlbG4oKVxuICB9XG5cbiAgY29kZV9lbmRfdGVtcGxhdGUgKCkge1xuICAgIHRoaXMud3JpdGVsbignfSkoKTsnKVxuICAgIHRoaXMuaW5kZW50X2xldmVsLS1cbiAgICB0aGlzLndyaXRlbG4oKVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NvZGUuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQmxvY2tUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBibG9ja190ZW1wbGF0ZSAobm9kZSkge1xuICAgIGxldCBzdHIgPSB0aGlzLmxuKCd7JylcblxuICAgIHRoaXMuaW5kZW50X2xldmVsKytcblxuICAgIGlmIChfLmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAobGV0IG4gb2Ygbm9kZSkge1xuICAgICAgICBzdHIgKz0gdGhpcy5zdGF0ZW1lbnRfdGVtcGxhdGUobilcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzdHIgPSB0aGlzLnN0YXRlbWVudF90ZW1wbGF0ZShub2RlKVxuICAgIH1cblxuICAgIHRoaXMuaW5kZW50X2xldmVsLS1cblxuICAgIHN0ciArPSB0aGlzLmxuKHRoaXMuaW5kZW50KCd9JykpXG5cbiAgICByZXR1cm4gc3RyXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvYmxvY2suanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgU3RhdGVtZW50VGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgc3RhdGVtZW50X3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgbGV0IHN0ciA9ICcnXG5cbiAgICBpZiAoXy5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKGxldCBuIG9mIG5vZGUpIHtcbiAgICAgICAgc3RyICs9IHRoaXMuc3RhdGVtZW50KG4pXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIGxldCBkID0gbm9kZS5kYXRhIHx8IHt9XG4gICAgICBsZXQgdCA9IHt9XG5cbiAgICAgIGlmIChub2RlLmlzKFsnYXNzaWduJywgJ2ZuX2Fzc2lnbiddKSkge1xuICAgICAgICB0ID0gdGhpcy5hc3NpZ24obm9kZSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2ZuJykpIHtcbiAgICAgICAgdCA9IHRoaXMuZm5fY2FsbChub2RlLCB0cnVlKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnaWYnKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICdpZiAoI3tleHByfSkgI3t0cnVlX2JvZHl9I3tmYWxzZV9ib2R5fScsXG4gICAgICAgICAgZGF0OiB7XG4gICAgICAgICAgICBleHByOiB0aGlzLmV4cHIoZC5leHByKSxcbiAgICAgICAgICAgIHRydWVfYm9keTogdGhpcy5ibG9jayhkLnRydWVfYm9keSksXG4gICAgICAgICAgICBmYWxzZV9ib2R5OiB0aGlzLnN0YXRlbWVudChkLmZhbHNlX2JvZHkpLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnZWxzZScpKSB7XG4gICAgICAgIGlmIChkLmV4cHIpIHsgLy8gZWxzZSBpZlxuICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICB0bXBsOiAnZWxzZSBpZiAoI3tleHByfSkgI3t0cnVlX2JvZHl9I3tmYWxzZV9ib2R5fScsXG4gICAgICAgICAgICBkYXQ6IHtcbiAgICAgICAgICAgICAgZXhwcjogdGhpcy5leHByKGQuZXhwciksXG4gICAgICAgICAgICAgIHRydWVfYm9keTogdGhpcy5ibG9jayhkLnRydWVfYm9keSksXG4gICAgICAgICAgICAgIGZhbHNlX2JvZHk6IHRoaXMuc3RhdGVtZW50KGQuZmFsc2VfYm9keSksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICB0bXBsOiAnZWxzZSAje2ZhbHNlX2JvZHl9JyxcbiAgICAgICAgICAgIGRhdDogeyBmYWxzZV9ib2R5OiB0aGlzLmJsb2NrKGQuZmFsc2VfYm9keSkgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnd2hpbGUnKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICd3aGlsZSAoI3tleHByfSkgI3tib2R5fScsXG4gICAgICAgICAgZGF0OiB7XG4gICAgICAgICAgICBleHByOiB0aGlzLmV4cHIoZC5leHByKSxcbiAgICAgICAgICAgIGJvZHk6IHRoaXMuYmxvY2soZC5ib2R5KSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2ZvcicpKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgdG1wbDogJ2ZvciAobGV0ICN7dn0gPSAje21pbl9leHByfTsgI3t2fSA8ICN7bWF4X2V4cHJ9OyAje3Z9ICs9ICN7c3RlcF9leHByfSkgI3tib2R5fScsXG4gICAgICAgICAgZGF0OiB7XG4gICAgICAgICAgICB2OiBkLnYudmFsdWUsXG4gICAgICAgICAgICBtaW5fZXhwcjogdGhpcy5leHByKGQubWluX2V4cHIpLFxuICAgICAgICAgICAgbWF4X2V4cHI6IHRoaXMuZXhwcihkLm1heF9leHByKSxcbiAgICAgICAgICAgIHN0ZXBfZXhwcjogZC5zdGVwX2V4cHIgPyB0aGlzLmV4cHIoZC5zdGVwX2V4cHIpIDogJzEnLFxuICAgICAgICAgICAgYm9keTogdGhpcy5ibG9jayhkLmJvZHkpLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygncmV0dXJuJykpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICB0bXBsOiAncmV0dXJuICN7YXJnc30nLFxuICAgICAgICAgIGRhdDogeyBhcmdzOiB0aGlzLmV4cHIoZC5hcmdzLCAnLCAnKSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUuaXMoWydicmVhaycsICdjb250aW51ZSddKSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIHRtcGw6ICcje3dvcmR9JyxcbiAgICAgICAgICBkYXQ6IHsgd29yZDogbm9kZS52YWx1ZSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUuaXMoJ2NsYXNzJykpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICB0bXBsOiAnY2xhc3MgI3tuYW1lfSN7X2V4dGVuZHN9ICN7Ym9keX0nLFxuICAgICAgICAgIGRhdDoge1xuICAgICAgICAgICAgbmFtZTogZC5pZC52YWx1ZSxcbiAgICAgICAgICAgIF9leHRlbmRzOiBkLl9leHRlbmRzID8gJyBleHRlbmRzICcgKyB0aGlzLmV4cHIoZC5fZXh0ZW5kcywgJywgJykgOiAnJyxcbiAgICAgICAgICAgIGJvZHk6IHRoaXMuYmxvY2soZC5ib2R5KSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RyID0gXy50ZW1wbGF0ZSh0LnRtcGwpKHQuZGF0KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxuKHRoaXMuaW5kZW50KHN0cikpXG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvc3RhdGVtZW50cy5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBFeHByZXNzaW9uVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZXhwcl90ZW1wbGF0ZSAobm9kZSwgc2VwYXJhdG9yKSB7XG4gICAgbGV0IHN0ciA9ICcnXG5cbiAgICBpZiAoXy5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBsZXQgYSA9IFtdXG4gICAgICBmb3IgKGxldCBuIG9mIG5vZGUpIHtcbiAgICAgICAgYS5wdXNoKHRoaXMuZXhwcihuKSlcbiAgICAgIH1cbiAgICAgIHN0ciA9IGEuam9pbihzZXBhcmF0b3IgfHwgJycpXG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICBsZXQgZCA9IG5vZGUgJiYgbm9kZS5kYXRhIHx8IHt9XG4gICAgICBsZXQgdCA9IG5vZGUgPyB0aGlzLnRlbXBsYXRlKG5vZGUsIGQpIDogeyB0bXBsOiAndW5kZWZpbmVkJywgZGF0OiB7fSB9XG4gICAgICBzdHIgPSBfLnRlbXBsYXRlKHQudG1wbCkodC5kYXQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0clxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2V4cHJlc3Npb25zLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIFByaW1pdGl2ZVRlbXBsYXRlcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuXG4gIHN0cmluZ190ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnI3t2YWx1ZX0nLFxuICAgICAgZGF0OiB7IHZhbHVlOiB0aGlzLnN0cihub2RlLnZhbHVlKSB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL3ByaW1pdGl2ZXMuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgT3BlcmF0b3JUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBvcGVyYXRvcl90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnI3tsZWZ0fSAje29wfSAje3JpZ2h0fScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgb3A6IG5vZGUudmFsdWUsXG4gICAgICAgIGxlZnQ6IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmxlZnQpLFxuICAgICAgICByaWdodDogdGhpcy5leHByX3RlbXBsYXRlKGQucmlnaHQpLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9vcGVyYXRvcnMuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgSWRUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBub2RlX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje25vZGV9JyxcbiAgICAgIGRhdDogeyBub2RlIH1cbiAgICB9XG4gIH1cblxuICBpZF90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnI3tmaWVsZH0je3ZhbHVlfSN7ZmllbGRzfSN7YXNzaWdufScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgZmllbGQ6IG5vZGUuX2ZpZWxkID8gJy4nIDogJycsXG4gICAgICAgIHZhbHVlOiBub2RlLnZhbHVlLFxuICAgICAgICBmaWVsZHM6IGQuZmllbGRzID8gdGhpcy5leHByX3RlbXBsYXRlKGQuZmllbGRzLCAnJykgOiAnJyxcbiAgICAgICAgYXNzaWduOiBkLmFzc2lnbiA/ICcgPSAnICsgdGhpcy5leHByX3RlbXBsYXRlKGQuYXNzaWduLCAnJykgOiAnJyxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YWx1ZV90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnI3t2YWx1ZX0nLFxuICAgICAgZGF0OiB7IHZhbHVlOiBub2RlLnZhbHVlIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvaWQuanMiLCJcbmV4cG9ydCBkZWZhdWx0IE1peGluKHN1cGVyY2xhc3MgPT4gY2xhc3MgQ2xhc3NUZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICB0aGlzX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICd0aGlzI3tkb3R9I3tmaWVsZH0je2ZpZWxkc30nLFxuICAgICAgZGF0OiB7XG4gICAgICAgIGRvdDogbm9kZS5pcygndGhpc19maWVsZCcpID8gJy4nIDogJycsXG4gICAgICAgIGZpZWxkOiBub2RlLmlzKCd0aGlzX2ZpZWxkJykgPyBub2RlLnZhbHVlIDogJycsXG4gICAgICAgIGZpZWxkczogZC5maWVsZHMgPyB0aGlzLmV4cHJfdGVtcGxhdGUoZC5maWVsZHMsICcnKSA6ICcnLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld190ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bXBsOiAnbmV3ICN7aWR9KCN7YXJnc30pJyxcbiAgICAgIGRhdDoge1xuICAgICAgICBpZDogZC5pZC52YWx1ZSxcbiAgICAgICAgYXJnczogdGhpcy5leHByX3RlbXBsYXRlKGQuYXJncywgJywgJyksXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2NsYXNzLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEZuVGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZm5fZGVmIChhcmdzLCBib2R5LCBpbl9jbGFzcykge1xuICAgIHJldHVybiBfLnRlbXBsYXRlKCcje2ZufSgje2FyZ3N9KSAje2JvZHl9Jykoe1xuICAgICAgZm46ICFpbl9jbGFzcyA/ICdmdW5jdGlvbiAnIDogJycsXG4gICAgICBhcmdzOiB0aGlzLmV4cHJfdGVtcGxhdGUoYXJncywgJywgJyksXG4gICAgICBib2R5OiB0aGlzLmJsb2NrX3RlbXBsYXRlKGJvZHkpLFxuICAgIH0pXG4gIH1cblxuICBmbl9jYWxsX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgbGV0IHQgPSB7fVxuICAgIGlmIChub2RlKSB7XG4gICAgICBsZXQgZCA9IG5vZGUuZGF0YSB8fCB7fVxuICAgICAgdCA9IHtcbiAgICAgICAgdG1wbDogJyN7ZmllbGR9I3tmbn0oI3thcmdzfSknLFxuICAgICAgICBkYXQ6IHtcbiAgICAgICAgICBmaWVsZDogbm9kZS5fZmllbGQgPyAnLicgOiAnJyxcbiAgICAgICAgICBmbjogbm9kZS52YWx1ZSxcbiAgICAgICAgICBhcmdzOiB0aGlzLmV4cHJfdGVtcGxhdGUoZC5hcmdzLCAnLCAnKSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdFxuICB9XG5cbiAgZm5fYXNzaWduX3RlbXBsYXRlIChub2RlLCBkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICcje2ZufScsXG4gICAgICBkYXQ6IHsgZm46IHRoaXMuZm5fZGVmKGQuYXJncywgZC5ib2R5KSB9XG4gICAgfVxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2ZuLmpzIiwiXG5leHBvcnQgZGVmYXVsdCBNaXhpbihzdXBlcmNsYXNzID0+IGNsYXNzIEFycmF5VGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgYXJyYXlfdGVtcGxhdGUgKG5vZGUsIGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG1wbDogJ1sje2FyZ3N9XSN7ZmllbGRzfScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgYXJnczogdGhpcy5leHByX3RlbXBsYXRlKGQuYXJncywgJywgJyksXG4gICAgICAgIGZpZWxkczogZC5maWVsZHMgPyB0aGlzLmV4cHJfdGVtcGxhdGUoZC5maWVsZHMsICcnKSA6ICcnLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBpbGVyL3RlbXBsYXRlcy9hcnJheS5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBEaWN0VGVtcGxhdGVzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG5cbiAgZGljdF90ZW1wbGF0ZSAobm9kZSwgZCkge1xuICAgIGxldCBkZWYgPSBfLm1hcChkLmRlZiwgZiA9PiBfLnRlbXBsYXRlKCcje3ZhbHVlfTogI3tleHByfScpKHsgdmFsdWU6IGYudmFsdWUsIGV4cHI6IHRoaXMuZXhwcl90ZW1wbGF0ZShmLmRhdGEuZXhwcikgfSkpXG4gICAgcmV0dXJuIHtcbiAgICAgIHRtcGw6ICd7I3tkZWZ9fSN7ZmllbGRzfScsXG4gICAgICBkYXQ6IHtcbiAgICAgICAgZGVmOiB0aGlzLmV4cHJfdGVtcGxhdGUoZGVmLCAnLCAnKSxcbiAgICAgICAgZmllbGRzOiBkLmZpZWxkcyA/IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmZpZWxkcywgJycpIDogJydcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21waWxlci90ZW1wbGF0ZXMvZGljdC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgTWl4aW4oc3VwZXJjbGFzcyA9PiBjbGFzcyBBc3NpZ25UZW1wbGF0ZXMgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcblxuICBhc3NpZ25fdGVtcGxhdGUgKG5vZGUpIHtcbiAgICBsZXQgdCA9IHt9XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGxldCBkID0gbm9kZS5kYXRhIHx8IHt9XG5cbiAgICAgIGxldCBpZCA9IHRoaXMuZXhwcl90ZW1wbGF0ZShkLmlkKVxuICAgICAgbGV0IF9sZXQgPSBub2RlLl9sZXQgPyAnbGV0ICcgOiAnJ1xuICAgICAgbGV0IGV4cHJcbiAgICAgIGxldCBvcFxuXG4gICAgICBpZiAobm9kZS5pcygnYXNzaWduJykpIHtcbiAgICAgICAgb3AgPSAnICcgKyBub2RlLnZhbHVlICsgJyAnXG4gICAgICAgIGV4cHIgPSB0aGlzLmV4cHJfdGVtcGxhdGUoZC5leHByKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9kZS5pcygnZm5fYXNzaWduJykpIHtcbiAgICAgICAgb3AgPSAhbm9kZS5faW5fY2xhc3MgfHwgbm9kZS5fZm5fbGV2ZWwgPiAwID8gJyA9ICcgOiAnICdcbiAgICAgICAgZXhwciA9IHRoaXMuZm5fZGVmKGQuYXJncywgZC5ib2R5LCBub2RlLl9pbl9jbGFzcyAmJiBub2RlLl9mbl9sZXZlbCA9PT0gMClcbiAgICAgIH1cblxuICAgICAgdCA9IHtcbiAgICAgICAgdG1wbDogJyN7X2xldH0je2lkfSN7b3B9I3tleHByfScsXG4gICAgICAgIGRhdDogeyBfbGV0LCBpZCwgb3AsIGV4cHIgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdFxuICB9XG5cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcGlsZXIvdGVtcGxhdGVzL2Fzc2lnbi5qcyIsImltcG9ydCBoZXh5IGZyb20gJ2hleHknXG5pbXBvcnQgeyBoZXggfSBmcm9tICcuLi9nbG9iYWxzLmpzJ1xuXG5leHBvcnQgY29uc3QgZGF0YV90eXBlX3NpemVzID0ge1xuICBpODogMSxcbiAgczg6IDEsXG4gIGkxNjogMixcbiAgczE2OiAyLFxuICBpMzI6IDQsXG4gIHMzMjogNCxcbiAgZjMyOiA0LFxuICBzdHI6IDY0LFxufVxuXG5leHBvcnQgY29uc3QgZGF0YV90eXBlX2ZucyA9IHtcbiAgaTg6ICdVaW50OCcsXG4gIHM4OiAnSW50OCcsXG4gIGkxNjogJ1VpbnQxNicsXG4gIHMxNjogJ0ludDE2JyxcbiAgaTMyOiAnVWludDMyJyxcbiAgczMyOiAnSW50MzInLFxuICBmMzI6ICdGbG9hdDMyJyxcbn1cblxuZXhwb3J0IHZhciBkYXRhX3R5cGVfc2l6ZSA9IHR5cGUgPT4gXy5pc051bWJlcih0eXBlKSA/IHR5cGUgOiBkYXRhX3R5cGVfc2l6ZXNbdHlwZV1cblxuZXhwb3J0IGNsYXNzIE1lbW9yeSB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICB0aGlzLl9zaXplID0gbWFpbi5kZWZhdWx0KCdtZW1vcnkuc2l6ZScpXG4gICAgdGhpcy5fdG9wID0gMFxuICAgIHRoaXMuX2JvdHRvbSA9IHRoaXMuX3RvcCArIHRoaXMuX3NpemUgLSAxXG5cbiAgICB0aGlzLl9idWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy5fc2l6ZSlcblxuICAgIHRoaXMuX2RhdGEgPSBuZXcgVWludDhBcnJheSh0aGlzLl9idWZmZXIpXG5cbiAgICB0aGlzLl92aWV3ID0gbmV3IERhdGFWaWV3KHRoaXMuX2J1ZmZlcilcblxuICAgIHRoaXMuX2ZucyA9IHtcbiAgICAgIGk4OiAnVWludDgnLFxuICAgICAgczg6ICdJbnQ4JyxcbiAgICAgIGkxNjogJ1VpbnQxNicsXG4gICAgICBzMTY6ICdJbnQxNicsXG4gICAgICBpMzI6ICdVaW50MzInLFxuICAgICAgczMyOiAnSW50MzInLFxuICAgICAgZjMyOiAnRmxvYXQzMicsXG4gICAgfVxuICB9XG5cbiAgdGljayAodCkge1xuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHJldHVybiB0aGlzLmNsZWFyKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX3ZpZXcgPSBudWxsXG4gICAgdGhpcy5fZGF0YSA9IG51bGxcbiAgICB0aGlzLl9idWZmZXIgPSBudWxsXG4gIH1cblxuICBnZXQgbWFpbiAoKSB7IHJldHVybiB0aGlzLl9tYWluIH1cblxuICBnZXQgYnVmZmVyICgpIHsgcmV0dXJuIHRoaXMuX2J1ZmZlciB9XG4gIGdldCBkYXRhICgpIHsgcmV0dXJuIHRoaXMuX2RhdGEgfVxuICBnZXQgdmlldyAoKSB7IHJldHVybiB0aGlzLl92aWV3IH1cbiAgZ2V0IHRvcCAoKSB7IHJldHVybiB0aGlzLl90b3AgfVxuICBnZXQgYm90dG9tICgpIHsgcmV0dXJuIHRoaXMuX2JvdHRvbSB9XG4gIGdldCBzaXplICgpIHsgcmV0dXJuIHRoaXMuX3NpemUgfVxuXG4gIGNsZWFyIChkID0gMCkge1xuICAgIHRoaXMuZmlsbCgwLCB0aGlzLl90b3AsIHRoaXMuX3NpemUpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGNoa19ib3VuZHMgKGFkZHIsIHN6ID0gNCkge1xuICAgIGlmIChhZGRyIDwgdGhpcy5fdG9wIHx8IGFkZHIgKyBzeiA+IHRoaXMuX2JvdHRvbSkge1xuICAgICAgdGhpcy5obHQoMHgwOClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgZGIgKHR5cGUsIGFkZHIsIC4uLmFyZ3MpIHtcbiAgICBsZXQgc3ogPSBkYXRhX3R5cGVfc2l6ZXNbdHlwZV1cbiAgICBsZXQgZm4gPSB0aGlzLl92aWV3WydzZXQnICsgdGhpcy5fZm5zW3R5cGVdXVxuICAgIGZvciAobGV0IGEgb2YgYXJncykge1xuICAgICAgZm4uY2FsbCh0aGlzLl92aWV3LCBhZGRyLCBhKVxuICAgICAgYWRkciArPSBzelxuICAgIH1cbiAgICByZXR1cm4gYWRkclxuICB9XG5cbiAgZGJfYmMgKHR5cGUsIGFkZHIsIC4uLmFyZ3MpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgYXJncy5sZW5ndGggKiBkYXRhX3R5cGVfc2l6ZXNbdHlwZV0pXG4gICAgdGhpcy5kYih0eXBlLCBhZGRyLCAuLi5hcmdzKVxuICB9XG5cbiAgbGQgKHR5cGUsIGFkZHIpIHsgcmV0dXJuIHRoaXMuX3ZpZXdbJ2dldCcgKyB0aGlzLl9mbnNbdHlwZV1dKGFkZHIsIF92bS5saXR0bGVFbmRpYW4pIH1cblxuICBsZGIgKGFkZHIpIHsgcmV0dXJuIHRoaXMubGQoJ2k4JywgYWRkcikgfVxuXG4gIGxkdyAoYWRkcikgeyByZXR1cm4gdGhpcy5sZCgnaTE2JywgYWRkcikgfVxuXG4gIGxkZCAoYWRkcikgeyByZXR1cm4gdGhpcy5sZCgnaTMyJywgYWRkcikgfVxuXG4gIGxkZiAoYWRkcikgeyByZXR1cm4gdGhpcy5sZCgnZjMyJywgYWRkcikgfVxuXG4gIGxkX2JjICh0eXBlLCBhZGRyKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKGFkZHIsIGRhdGFfdHlwZV9zaXplc1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcy5sZCh0eXBlLCBhZGRyKVxuICB9XG5cbiAgc3QgKHR5cGUsIGFkZHIsIHZhbHVlKSB7IHRoaXMuX3ZpZXdbJ3NldCcgKyB0aGlzLl9mbnNbdHlwZV1dKGFkZHIsIHZhbHVlLCBfdm0ubGl0dGxlRW5kaWFuKSB9XG5cbiAgc3RiIChhZGRyLCB2YWx1ZSkgeyB0aGlzLnN0KCdpOCcsIGFkZHIsIHZhbHVlKSB9XG5cbiAgc3R3IChhZGRyLCB2YWx1ZSkgeyB0aGlzLnN0KCdpMTYnLCBhZGRyLCB2YWx1ZSkgfVxuXG4gIHN0ZCAoYWRkciwgdmFsdWUpIHsgdGhpcy5zdCgnaTMyJywgYWRkciwgdmFsdWUpIH1cblxuICBzdGYgKGFkZHIsIHZhbHVlKSB7IHRoaXMuc3QoJ2YzMicsIGFkZHIsIHZhbHVlKSB9XG5cbiAgc3RfYmMgKHR5cGUsIGFkZHIsIHZhbHVlKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKGFkZHIsIGRhdGFfdHlwZV9zaXplc1t0eXBlXSlcbiAgICB0aGlzLnN0KHR5cGUsIGFkZHIsIHZhbHVlKVxuICB9XG5cbiAgbGRsIChhZGRyLCBzaXplKSB7IHJldHVybiB0aGlzLl9kYXRhLnNsaWNlKGFkZHIsIGFkZHIgKyBzaXplIC0gMSkgfVxuXG4gIGxkbF9iYyAoYWRkciwgc2l6ZSkge1xuICAgIHRoaXMuY2hrX2JvdW5kcyhhZGRyLCBzaXplKVxuICAgIHJldHVybiB0aGlzLmxkbChhZGRyLCBzaXplKVxuICB9XG5cbiAgbGRzIChhZGRyLCBzaXplKSB7XG4gICAgaWYgKF8uaXNTdHJpbmcoYWRkcikpIHsgIC8vIGFzc2VtYmxlciB3aWxsIHVzZSBsZHMoXCJcIilcbiAgICAgIHJldHVybiBhZGRyXG4gICAgfVxuXG4gICAgbGV0IHMgPSAnJ1xuICAgIHNpemUgPSBzaXplIHx8IGRhdGFfdHlwZV9zaXplcy5zdHJcbiAgICBsZXQgYm90dG9tID0gTWF0aC5taW4oYWRkciArIHNpemUgLSAxLCB0aGlzLl9ib3R0b20pXG4gICAgbGV0IG1lbSA9IHRoaXMuX2RhdGFcbiAgICB3aGlsZSAoYWRkciA8PSBib3R0b20pIHtcbiAgICAgIGxldCBjID0gbWVtW2FkZHIrK11cbiAgICAgIGlmIChjID09PSAwKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzXG4gIH1cblxuICBsZHNfYmMgKGFkZHIsIHNpemUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgTWF0aC5taW4oc2l6ZSB8fCAwLCBkYXRhX3R5cGVfc2l6ZXMuc3RyKSlcbiAgICByZXR1cm4gdGhpcy5sZHMoYWRkciwgc2l6ZSlcbiAgfVxuXG4gIHN0bCAoYWRkciwgdmFsdWUsIHNpemUpIHsgdGhpcy5fZGF0YS5zZXQodmFsdWUuc3ViYXJyYXkoMCwgc2l6ZSB8fCB2YWx1ZS5ieXRlTGVuZ3RoKSwgYWRkcikgfVxuXG4gIHN0bF9iYyAoYWRkciwgdmFsdWUsIHNpemUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgTWF0aC5taW4oc2l6ZSB8fCAwLCB2YWx1ZS5ieXRlTGVuZ3RoKSlcbiAgICB0aGlzLnN0bChhZGRyLCB2YWx1ZSwgc2l6ZSlcbiAgfVxuXG4gIHN0cyAoYWRkciwgc3RyLCBzaXplKSB7XG4gICAgc2l6ZSA9IHNpemUgfHwgZGF0YV90eXBlX3NpemVzLnN0ciAtIDFcbiAgICBsZXQgYSA9IF8ubWFwKHN0ci5zcGxpdCgnJyksIGkgPT4gaS5jaGFyQ29kZUF0KDApKVxuICAgIGEubGVuZ3RoID0gTWF0aC5taW4oc2l6ZSwgYS5sZW5ndGgpXG4gICAgdGhpcy5maWxsKDAsIGFkZHIsIHNpemUpXG4gICAgdGhpcy5fZGF0YS5zZXQoYSwgYWRkcilcbiAgfVxuXG4gIHN0c19iYyAoYWRkciwgc3RyLCBzaXplKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKGFkZHIsIE1hdGgubWluKHNpemUsIGRhdGFfdHlwZV9zaXplcy5zdHIpKVxuICAgIHRoaXMuc3RzKGFkZHIsIHN0ciwgc2l6ZSlcbiAgfVxuXG4gIGZpbGwgKHZhbHVlLCB0b3AsIHNpemUpIHsgdGhpcy5fZGF0YS5maWxsKHZhbHVlIHx8IDAsIHRvcCwgdG9wICsgc2l6ZSkgfVxuXG4gIGZpbGxfYmMgKHZhbHVlLCB0b3AsIHNpemUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHModG9wLCBzaXplKVxuICAgIHRoaXMuZmlsbCh2YWx1ZSwgdG9wLCBzaXplKVxuICB9XG5cbiAgY29weSAoc3JjLCB0Z3QsIHNpemUpIHsgdGhpcy5fZGF0YS5jb3B5V2l0aGluKHRndCwgc3JjLCBzcmMgKyBzaXplIC0gMSkgfVxuXG4gIGNvcHlfYmMgKHNyYywgdGd0LCBzaXplKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKHNyYywgc2l6ZSlcbiAgICB0aGlzLmNoa19ib3VuZHModGd0LCBzaXplKVxuICAgIHRoaXMuY29weShzcmMsIHRndCwgc2l6ZSlcbiAgfVxuXG4gIHJlYWQgKGFkZHIsIHR5cGUgPSAnaTgnKSB7XG4gICAgbGV0IHZhbHVlXG4gICAgaWYgKF8uaXNOdW1iZXIodHlwZSkpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5fZGF0YS5zbGljZShhZGRyLCBhZGRyICsgdHlwZSAtIDEpXG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzdHInKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubGRzKGFkZHIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFsdWUgPSB0aGlzLmxkKHR5cGUsIGFkZHIpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgd3JpdGUgKHZhbHVlLCBhZGRyLCB0eXBlID0gJ2k4Jykge1xuICAgIGxldCBzelxuICAgIGlmIChfLmlzTnVtYmVyKHR5cGUpKSB7XG4gICAgICB0aGlzLl9kYXRhLnNldCh2YWx1ZS5zdWJhcnJheSgwLCB0eXBlIC0gMSksIGFkZHIpXG4gICAgICBzeiA9IHR5cGVcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cicpIHtcbiAgICAgIHRoaXMuc3RzKGFkZHIsIHZhbHVlKVxuICAgICAgc3ogPSBkYXRhX3R5cGVfc2l6ZXNbdHlwZV1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnN0KHR5cGUsIGFkZHIsIHZhbHVlKVxuICAgICAgc3ogPSBkYXRhX3R5cGVfc2l6ZXNbdHlwZV1cbiAgICB9XG4gICAgcmV0dXJuIGFkZHIgKyBzelxuICB9XG5cbiAgZHVtcCAoYWRkciA9IDAsIHNpemUgPSAxMDI0KSB7XG4gICAgY29uc29sZS5sb2coJ0R1bXBpbmcnLCBzaXplLCAnIGJ5dGVzIGZyb20gbWVtb3J5IGF0ICcsIGhleChhZGRyKSlcbiAgICBjb25zb2xlLmxvZyhoZXh5LmhleHkodGhpcy5fYnVmZmVyLCB7IG9mZnNldDogYWRkciwgbGVuZ3RoOiBzaXplLCB3aWR0aDogMTYsIGNhcHM6ICd1cHBlcicsIGluZGVudDogMiB9KSlcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vbWVtb3J5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGV4eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImhleHlcIlxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGhleHkgZnJvbSAnaGV4eSdcbmltcG9ydCBwcmV0dHlCeXRlcyBmcm9tICdwcmV0dHktYnl0ZXMnXG5pbXBvcnQgeyBkYXRhX3R5cGVfc2l6ZSB9IGZyb20gJy4vbWVtb3J5LmpzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbW9yeU1hbmFnZXIge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgdGhpcy5fbWFpbiA9IG1haW5cblxuICAgIHRoaXMuX2NvbGxlY3RfZGVsYXkgPSBtYWluLmRlZmF1bHQoJ21lbW9yeV9tYW5hZ2VyLmNvbGxlY3RfZGVsYXknKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fYmxvY2tzID0gW11cbiAgICB0aGlzLl9sYXN0ID0gMFxuICAgIHJldHVybiB0aGlzLmNvbGxlY3QoKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jb2xsZWN0KClcbiAgICB0aGlzLl9ibG9ja3MgPSBbXVxuICAgIHRoaXMuX2xhc3QgPSAwXG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgaWYgKHQgLSB0aGlzLl9sYXN0ID49IHRoaXMuX2NvbGxlY3RfZGVsYXkpIHtcbiAgICAgIHRoaXMuY29sbGVjdCgpXG4gICAgICB0aGlzLl9sYXN0ID0gdFxuICAgIH1cbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuICBnZXQgbWVtb3J5ICgpIHsgcmV0dXJuIHRoaXMuX21haW4ubWVtb3J5IH1cblxuICBnZXQgYmxvY2tzICgpIHsgcmV0dXJuIHRoaXMuX2Jsb2NrcyB9XG4gIGdldCBsYXN0ICgpIHsgcmV0dXJuIHRoaXMuX2xhc3QgfVxuICBnZXQgY29sbGVjdF9kZWxheSAoKSB7IHJldHVybiB0aGlzLl9jb2xsZWN0X2RlbGF5IH1cblxuICBnZXQgYXZhaWxfbWVtICgpIHsgcmV0dXJuIHRoaXMuX21haW4uc2l6ZSB9XG5cbiAgZ2V0IHVzZWRfbWVtICgpIHtcbiAgICBsZXQgc2l6ZSA9IDBcbiAgICBmb3IgKGxldCBiIG9mIHRoaXMuX2Jsb2Nrcykge1xuICAgICAgaWYgKGIudXNlZCkge1xuICAgICAgICBzaXplICs9IGIuc2l6ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2l6ZVxuICB9XG5cbiAgZ2V0IGZyZWVfbWVtICgpIHsgcmV0dXJuIHRoaXMuYXZhaWxfbWVtIC0gdGhpcy51c2VkX21lbSB9XG5cbiAgX2FsbG9jICh0eXBlLCBjb3VudCkge1xuICAgIGNvdW50ID0gY291bnQgfHwgMVxuICAgIGxldCBzaXplID0gZGF0YV90eXBlX3NpemUodHlwZSkgKiBjb3VudFxuICAgIGxldCBuID0gMFxuXG4gICAgZm9yIChsZXQgYiBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgIGlmIChiLmJvdHRvbSA+IG4pIHtcbiAgICAgICAgbiA9IGIuYm90dG9tXG4gICAgICB9XG5cbiAgICAgIGlmICghYi51c2VkICYmIGIuc2l6ZSA+PSBzaXplKSB7XG4gICAgICAgIGlmIChiLnNpemUgPT09IHNpemUpIHtcbiAgICAgICAgICBiLnVzZWQgPSB0cnVlXG4gICAgICAgICAgcmV0dXJuIGIudG9wXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9iID0gYi5ib3R0b21cbiAgICAgICAgYi5ib3R0b20gPSBiLnRvcCArIHNpemUgLSAxXG4gICAgICAgIGIuc2l6ZSA9IHNpemVcbiAgICAgICAgYi5jb3VudCA9IGNvdW50XG4gICAgICAgIGIudXNlZCA9IHRydWVcblxuICAgICAgICB0aGlzLl9ibG9ja3MucHVzaCh7IHRvcDogYi5ib3R0b20gKyAxLCBib3R0b206IG9iLCBzaXplOiBvYiAtIChiLmJvdHRvbSArIDEpLCBjb3VudCwgdHlwZSwgdXNlZDogZmFsc2UgfSlcblxuICAgICAgICByZXR1cm4gYi50b3BcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobiArIHNpemUgPiB0aGlzLmF2YWlsX21lbSkge1xuICAgICAgX3ZtLmhsdCgpXG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIGxldCBhZGRyID0gbiArIDFcblxuICAgIHRoaXMuX2Jsb2Nrcy5wdXNoKHsgdG9wOiBhZGRyLCBib3R0b206IGFkZHIgKyBzaXplIC0gMSwgc2l6ZSwgY291bnQsIHR5cGUsIHVzZWQ6IHRydWUgfSlcblxuICAgIF92bS5maWxsKDAsIGFkZHIsIHNpemUpXG5cbiAgICByZXR1cm4gYWRkclxuICB9XG5cbiAgYWxsb2MgKHR5cGUsIGNvdW50LCAuLi52YWx1ZSkge1xuICAgIGxldCBhZGRyID0gdGhpcy5fYWxsb2ModHlwZSwgY291bnQpXG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBzaXplID0gZGF0YV90eXBlX3NpemUodHlwZSkgKiBjb3VudFxuICAgICAgbGV0IGEgPSBhZGRyXG4gICAgICBmb3IgKGxldCB2IG9mIHZhbHVlKSB7XG4gICAgICAgIF92bS53cml0ZSh2LCBhLCB0eXBlKVxuICAgICAgICBhICs9IHNpemVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWRkclxuICB9XG5cbiAgZnJlZSAoYWRkcikge1xuICAgIGxldCBiID0gdGhpcy5ibG9jayhhZGRyKVxuICAgIGlmIChiKSB7XG4gICAgICBiLnVzZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGJsb2NrIChhZGRyKSB7XG4gICAgZm9yIChsZXQgYiBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgIGlmIChiLnRvcCA9PT0gYWRkcikge1xuICAgICAgICByZXR1cm4gYlxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgdHlwZSAoYWRkcikge1xuICAgIGxldCBiID0gdGhpcy5ibG9jayhhZGRyKVxuICAgIHJldHVybiBiICYmIGIudXNlZCA/IGIudHlwZSA6IG51bGxcbiAgfVxuXG4gIHNpemUgKGFkZHIpIHtcbiAgICBsZXQgYiA9IHRoaXMuYmxvY2soYWRkcilcbiAgICByZXR1cm4gYiAmJiBiLnVzZWQgPyBiLnNpemUgOiAtMVxuICB9XG5cbiAgY29sbGVjdCAoKSB7XG4gICAgbGV0IG4gPSBbXVxuICAgIGZvciAobGV0IGIgb2YgdGhpcy5fYmxvY2tzKSB7XG4gICAgICBpZiAoIWIudXNlZCkge1xuICAgICAgICBuLnB1c2goYilcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fYmxvY2tzID0gblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkdW1wICgpIHtcbiAgICBjb25zb2xlLmxvZygnbWVtb3J5IF9ibG9ja3MgZHVtcC4uLicsICdhdmFpbF9tZW06JywgcHJldHR5Qnl0ZXModGhpcy5hdmFpbF9tZW0pLCAndXNlZDonLCBwcmV0dHlCeXRlcyh0aGlzLnVzZWRfbWVtKSwgJ2ZyZWU6JywgcHJldHR5Qnl0ZXModGhpcy5mcmVlX21lbSkpXG4gICAgZm9yIChsZXQgYiBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKCcnKVxuICAgICAgY29uc29sZS5sb2coJ29mZnNldDonLCBfdm0uaGV4KGIudG9wLCAzMiksICdzaXplOicsIHRoaXMuc2l6ZShiLnRvcCksICd0eXBlOicsIHRoaXMudHlwZShiLnRvcCkpXG4gICAgICBjb25zb2xlLmxvZyhoZXh5LmhleHkoX3ZtLm1lbV9idWZmZXIsIHsgb2Zmc2V0OiBiLnRvcCwgbGVuZ3RoOiBNYXRoLm1pbigyNTUsIGIuc2l6ZSksIHdpZHRoOiAxNiwgY2FwczogJ3VwcGVyJywgaW5kZW50OiAyIH0pKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL21lbW9yeW1hbmFnZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmV0dHktYnl0ZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmV0dHktYnl0ZXNcIlxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZGVmYXVsdHMsIHJ1bnRpbWVfZXJyb3IgfSBmcm9tICcuLi9nbG9iYWxzLmpzJ1xuaW1wb3J0IHsgZGF0YV90eXBlX3NpemUgfSBmcm9tICcuL21lbW9yeS5qcydcblxuY2xhc3MgU3RhY2tFbnRyeSB7XG5cbiAgY29uc3RydWN0b3IgKHN0YWNrLCBvZmZzZXQgPSAwLCBtYXggPSAyNTUsIHR5cGUgPSBkZWZhdWx0cy50eXBlLCBzaXplLCByb2xsaW5nID0gZmFsc2UpIHtcbiAgICB0aGlzLl9zdGFjayA9IHN0YWNrXG5cbiAgICB0aGlzLl9tYXggPSBtYXhcbiAgICB0aGlzLl9zaXplID0gc2l6ZSB8fCBkYXRhX3R5cGVfc2l6ZSh0eXBlKVxuICAgIHRoaXMuX3RvcCA9IG9mZnNldFxuICAgIHRoaXMuX2JvdHRvbSA9IHRoaXMuX3RvcCArIHRoaXMuX3NpemUgLSAxXG4gICAgdGhpcy5fdHlwZSA9IHR5cGVcbiAgICB0aGlzLl9yb2xsaW5nID0gcm9sbGluZyB8fCBmYWxzZVxuXG4gICAgdGhpcy5saXN0W3RoaXMuX3RvcF0gPSB0aGlzXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fcHRyID0gdGhpcy5fdG9wXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmxpc3RbdGhpcy5fdG9wXSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fc3RhY2subWFpbiB9XG4gIGdldCBzdGFjayAoKSB7IHJldHVybiB0aGlzLl9zdGFjayB9XG4gIGdldCBsaXN0ICgpIHsgcmV0dXJuIHRoaXMuX3N0YWNrLmxpc3QgfVxuXG4gIGdldCB0b3AgKCkgeyByZXR1cm4gdGhpcy5fdG9wIH1cbiAgZ2V0IGJvdHRvbSAoKSB7IHJldHVybiB0aGlzLl9ib3R0b20gfVxuICBnZXQgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9zaXplIH1cblxuICBnZXQgbWF4ICgpIHsgcmV0dXJuIHRoaXMuX21heCB9XG4gIGdldCBwdHIgKCkgeyByZXR1cm4gdGhpcy5fcHRyIH1cblxuICBnZXQgdG90YWxfc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9tYXggKiB0aGlzLl9zaXplIH1cbiAgZ2V0IHVzZWQgKCkgeyByZXR1cm4gTWF0aC50cnVuYygodGhpcy5fcHRyIC0gdGhpcy5fdG9wKSAvIHRoaXMuX3NpemUpIH1cbiAgZ2V0IGF2YWlsICgpIHsgcmV0dXJuIHRoaXMudG90YWxfc2l6ZSAtIHRoaXMudXNlZCB9XG5cbiAgcHVzaCAoLi4udmFsdWUpIHtcbiAgICBsZXQgc3ogPSB0aGlzLl9zaXplXG4gICAgbGV0IHQgPSB0aGlzLl90eXBlXG4gICAgbGV0IHRvcCA9IHRoaXMuX3RvcFxuICAgIGxldCBib3R0b20gPSB0aGlzLl9ib3R0b21cbiAgICBsZXQgcm9sbGluZyA9IHRoaXMuX3JvbGxpbmdcbiAgICBmb3IgKGxldCB2IG9mIHZhbHVlKSB7XG4gICAgICBpZiAocm9sbGluZyAmJiB0aGlzLl9wdHIgPj0gYm90dG9tKSB7XG4gICAgICAgIHRoaXMuY29weSh0b3AgKyBzeiwgdG9wLCBib3R0b20gLSBzeilcbiAgICAgICAgdGhpcy5fcHRyIC09IHN6XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fcHRyICsgc3ogPCBib3R0b20pIHtcbiAgICAgICAgdGhpcy53cml0ZSh2LCB0aGlzLl9wdHIsIHQpXG4gICAgICAgIHRoaXMuX3B0ciArPSBzelxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwMylcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwb3AgKCkge1xuICAgIGlmICh0aGlzLl9wdHIgPiB0aGlzLl90b3ApIHtcbiAgICAgIHRoaXMuX3B0ciAtPSB0aGlzLl9zaXplXG4gICAgICByZXR1cm4gdGhpcy5yZWFkKHRoaXMuX3B0ciwgdGhpcy5fdHlwZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDIpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhY2sge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgdGhpcy5fbWFpbiA9IG1haW5cblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX2xpc3QgPSB7fVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fbGlzdCA9IHt9XG4gIH1cblxuICBnZXQgbGlzdCAoKSB7IHJldHVybiB0aGlzLl9saXN0IH1cblxuICBuZXcgKG9mZnNldCwgbWF4LCB0eXBlLCBzaXplLCByb2xsaW5nKSB7XG4gICAgbGV0IHMgPSB0aGlzLl9saXN0W29mZnNldF1cbiAgICBpZiAoIXMpIHtcbiAgICAgIHJldHVybiBuZXcgU3RhY2tFbnRyeSh0aGlzLCAuLi5hcmd1bWVudHMpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcnVudGltZV9lcnJvcigweDA0KVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBwdXNoIChvZmZzZXQsIC4uLnZhbHVlcykge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBzLnB1c2goLi4udmFsdWVzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgcG9wIChvZmZzZXQpIHtcbiAgICBsZXQgcyA9IHRoaXMuX2xpc3Rbb2Zmc2V0XVxuICAgIGlmIChzKSB7XG4gICAgICByZXR1cm4gcy5wb3AoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgdXNlZCAob2Zmc2V0KSB7XG4gICAgbGV0IHMgPSB0aGlzLl9saXN0W29mZnNldF1cbiAgICBpZiAocykge1xuICAgICAgcmV0dXJuIHMudXNlZFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJ1bnRpbWVfZXJyb3IoMHgwNClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgbWF4IChvZmZzZXQpIHtcbiAgICBsZXQgcyA9IHRoaXMuX2xpc3Rbb2Zmc2V0XVxuICAgIGlmIChzKSB7XG4gICAgICByZXR1cm4gcy5tYXhcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDQpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIHNpemUgKG9mZnNldCkge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBzLnNpemVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDQpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIHR5cGUgKG9mZnNldCkge1xuICAgIGxldCBzID0gdGhpcy5fbGlzdFtvZmZzZXRdXG4gICAgaWYgKHMpIHtcbiAgICAgIHJldHVybiBzLnR5cGVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDQpXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vc3RhY2suanMiLCJpbXBvcnQgeyBydW50aW1lX2Vycm9yIH0gZnJvbSAnLi4vZ2xvYmFscy5qcydcblxuY29uc3QgX0lOVF9SVU5OSU5HID0gMVxuY29uc3QgX0lOVF9QQVVTRUQgPSAyXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVycnVwdCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICB0aGlzLl9saXN0ID0ge31cbiAgICB0aGlzLl9tYWluID0gbWFpblxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuc3RvcF9hbGwoKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuICBnZXQgbWVtb3J5ICgpIHsgcmV0dXJuIHRoaXMuX21haW4ubWVtb3J5IH1cblxuICBmaW5kIChuYW1lKSB7IHJldHVybiB0aGlzLl9saXN0W25hbWVdIH1cblxuICBjcmVhdGUgKG5hbWUsIGZuLCBtcyA9IDUwMCkge1xuICAgIGlmICghdGhpcy5maW5kKG5hbWUpKSB7XG4gICAgICB0aGlzLl9saXN0W25hbWVdID0geyBuYW1lLCBzdGF0dXM6IF9JTlRfUlVOTklORywgbXMsIGZuLCBsYXN0OiAwIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDYpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXN1bWUgKG5hbWUpIHtcbiAgICBpZiAodGhpcy5maW5kKG5hbWUpKSB7XG4gICAgICB0aGlzLl9saXN0W25hbWVdLnN0YXR1cyA9IF9JTlRfUlVOTklOR1xuICAgICAgdGhpcy5fbGlzdFtuYW1lXS5sYXN0ID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwYXVzZSAobmFtZSkge1xuICAgIGlmICh0aGlzLmZpbmQobmFtZSkpIHtcbiAgICAgIHRoaXMuX2xpc3RbbmFtZV0uc3RhdHVzID0gX0lOVF9QQVVTRURcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdG9wIChuYW1lKSB7XG4gICAgaWYgKHRoaXMuZmluZChuYW1lKSkge1xuICAgICAgZGVsZXRlIHRoaXMuX2xpc3RbbmFtZV1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdG9wX2FsbCAoKSB7XG4gICAgZm9yIChsZXQgayBpbiB0aGlzLl9saXN0KSB7XG4gICAgICB0aGlzLnN0b3AoaylcbiAgICB9XG4gICAgdGhpcy5fbGlzdCA9IHt9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBmb3IgKGxldCBrIGluIHRoaXMuX2xpc3QpIHtcbiAgICAgIGxldCBpID0gdGhpcy5fbGlzdFtrXVxuICAgICAgaWYgKGkuc3RhdHVzID09PSBfSU5UX1JVTk5JTkcpIHtcbiAgICAgICAgbGV0IGRlbGF5ID0gdCAtIGkubGFzdFxuICAgICAgICBpZiAoZGVsYXkgPj0gaS5tcykge1xuICAgICAgICAgIGkuZm4uYXBwbHkodGhpcywgW2RlbGF5IC0gaS5tc10pXG4gICAgICAgICAgaS5sYXN0ID0gdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9pbnRlcnJ1cHQuanMiLCJpbXBvcnQgUmFpbmJvdyBmcm9tICcuL3JhaW5ib3cuanMnXG5pbXBvcnQgRm9uem8gZnJvbSAnLi9mb256by5qcydcbmltcG9ydCBPcndlbGwgZnJvbSAnLi9vcndlbGwuanMnXG5pbXBvcnQgQmVhZ2xlIGZyb20gJy4vYmVhZ2xlLmpzJ1xuaW1wb3J0IFZpb2xldCBmcm9tICcuL3Zpb2xldC5qcydcbmltcG9ydCB7IE92ZXJsYXlzIH0gZnJvbSAnLi4vb3ZlcmxheXMuanMnXG5cbmltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpZGVvIGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdpOCcsICdndWlkZW8nLCBbJ3dpZHRoJywgJ2hlaWdodCcsICdzY2FsZSddKVxuXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBuZXcgUElYSS5hdXRvRGV0ZWN0UmVuZGVyZXIodGhpcy5fd2lkdGggKiB0aGlzLl9zY2FsZSwgdGhpcy5faGVpZ2h0ICogdGhpcy5fc2NhbGUsIHt9KVxuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgdGhpcy5fcmVuZGVyZXIudmlldy5zdHlsZS5jdXJzb3IgPSAnbm9uZSdcbiAgICB0aGlzLl9yZW5kZXJlci52aWV3LmlkID0gJ2d1aWRlbydcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX3JlbmRlcmVyLnZpZXcpXG5cbiAgICB0aGlzLl9zdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG5cbiAgICB0aGlzLl9vblJlc2l6ZSA9IHRoaXMucmVzaXplLmJpbmQodGhpcylcbiAgICB0aGlzLm9uKCdyZXNpemUnLCB0aGlzLl9vblJlc2l6ZSlcblxuICAgIHRoaXMuYXN5bmMoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fcmFpbmJvdyA9IG5ldyBSYWluYm93KG1haW4pXG4gICAgICB0aGlzLl9mb256byA9IG5ldyBGb256byhtYWluKVxuICAgICAgdGhpcy5fb3J3ZWxsID0gbmV3IE9yd2VsbChtYWluKVxuICAgICAgdGhpcy5fYmVhZ2xlID0gbmV3IEJlYWdsZShtYWluKVxuICAgICAgdGhpcy5fdmlvbGV0ID0gbmV3IFZpb2xldChtYWluKVxuXG4gICAgICB0aGlzLl9vdmVybGF5cyA9IG5ldyBPdmVybGF5cyhtYWluLCB7XG4gICAgICAgIHNjcmVlbjoge30sXG4gICAgICAgIHNjYW5saW5lczoge30sXG4gICAgICAgIHNjYW5saW5lOiB7fSxcbiAgICAgICAgcmdiOiB7fSxcbiAgICAgICAgbm9pc2VzOiB7fSxcbiAgICAgICAgY3J0OiB7fSxcbiAgICAgICAgbW9uaXRvcjoge30sXG4gICAgICB9KVxuXG4gICAgICB0aGlzLnJlc2V0KClcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5vZmYoJ3Jlc2l6ZScsIHRoaXMuX29uUmVzaXplKVxuXG4gICAgdGhpcy5fcmFpbmJvdy5kZXN0cm95KClcbiAgICB0aGlzLl9mb256by5kZXN0cm95KClcbiAgICB0aGlzLl9vcndlbGwuZGVzdHJveSgpXG4gICAgdGhpcy5fYmVhZ2xlLmRlc3Ryb3koKVxuICAgIHRoaXMuX3Zpb2xldC5kZXN0cm95KClcblxuICAgIHRoaXMuX292ZXJsYXlzLmRlc3Ryb3koKVxuXG4gICAgaWYgKHRoaXMuX3Nwcml0ZSkge1xuICAgICAgdGhpcy5fc3ByaXRlLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl90ZXh0dXJlKSB7XG4gICAgICB0aGlzLl90ZXh0dXJlLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fdGV4dHVyZSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY2FudmFzKSB7XG4gICAgICB0aGlzLl9jYW52YXMucmVtb3ZlKClcbiAgICAgIHRoaXMuX2NhbnZhcyA9IG51bGxcbiAgICB9XG5cbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBzdXBlci5yZXNldCgpXG5cbiAgICB0aGlzLmNsZWFyKClcblxuICAgIHRoaXMuX2ZvcmNlX3JlZHJhdyA9IGZhbHNlXG4gICAgdGhpcy5fZm9yY2VfZmxpcCA9IGZhbHNlXG5cbiAgICB0aGlzLl9yYWluYm93LnJlc2V0KClcbiAgICB0aGlzLl9mb256by5yZXNldCgpXG4gICAgdGhpcy5fb3J3ZWxsLnJlc2V0KClcbiAgICB0aGlzLl9iZWFnbGUucmVzZXQoKVxuICAgIHRoaXMuX3Zpb2xldC5yZXNldCgpXG4gICAgdGhpcy5fb3ZlcmxheXMucmVzZXQoKVxuXG4gICAgcmV0dXJuIHRoaXMucmVzaXplKClcbiAgfVxuXG4gIGdldCBzY2FsZSAoKSB7IHJldHVybiB0aGlzLl9zY2FsZSB9XG4gIHNldCBzY2FsZSAodmFsdWUpIHtcbiAgICB0aGlzLl9zY2FsZSA9IHZhbHVlXG4gICAgdGhpcy5yZXNpemUoKVxuICB9XG5cbiAgc2V0IHdpZHRoICh2YWx1ZSkge1xuICAgIHRoaXMuX3dpZHRoID0gdmFsdWVcbiAgICB0aGlzLnJlc2l6ZSgpXG4gIH1cblxuICBzZXQgaGVpZ2h0ICh2YWx1ZSkge1xuICAgIHRoaXMuX2hlaWdodCA9IHZhbHVlXG4gICAgdGhpcy5yZXNpemUoKVxuICB9XG5cbiAgZ2V0IHZpZGVvX2NoaXAgKCkgeyByZXR1cm4gdGhpcyB9XG4gIGdldCByYWluYm93ICgpIHsgcmV0dXJuIHRoaXMuX3JhaW5ib3cgfVxuICBnZXQgZm9uem8gKCkgeyByZXR1cm4gdGhpcy5fZm9uem8gfVxuICBnZXQgb3J3ZWxsICgpIHsgcmV0dXJuIHRoaXMuX29yd2VsbCB9XG4gIGdldCBiZWFnbGUgKCkgeyByZXR1cm4gdGhpcy5fYmVhZ2xlIH1cbiAgZ2V0IHZpb2xldCAoKSB7IHJldHVybiB0aGlzLl92aW9sZXQgfVxuXG4gIGdldCBvdmVybGF5cyAoKSB7IHJldHVybiB0aGlzLl9vdmVybGF5cyB9XG5cbiAgZ2V0IHN0YWdlICgpIHsgcmV0dXJuIHRoaXMuX3N0YWdlIH1cbiAgZ2V0IHJlbmRlcmVyICgpIHsgcmV0dXJuIHRoaXMuX3JlbmRlcmVyIH1cblxuICBnZXQgc3ByaXRlICgpIHsgcmV0dXJuIHRoaXMuX3Nwcml0ZSB9XG4gIGdldCB0ZXh0dXJlICgpIHsgcmV0dXJuIHRoaXMuX3RleHR1cmUgfVxuICBnZXQgY2FudmFzICgpIHsgcmV0dXJuIHRoaXMuX2NhbnZhcyB9XG4gIGdldCBjb250ZXh0ICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRleHQgfVxuICBnZXQgaW1hZ2VEYXRhICgpIHsgcmV0dXJuIHRoaXMuX2ltYWdlRGF0YSB9XG4gIGdldCBwaXhlbHMgKCkgeyByZXR1cm4gdGhpcy5fcGl4ZWxzIH1cblxuICBnZXQgZm9yY2VfcmVkcmF3ICgpIHsgcmV0dXJuIHRoaXMuX2ZvcmNlX3JlZHJhdyB9XG4gIHNldCBmb3JjZV9yZWRyYXcgKHZhbHVlKSB7IHRoaXMuX2ZvcmNlX3JlZHJhdyA9IHZhbHVlIH1cblxuICBnZXQgZm9yY2VfZmxpcCAoKSB7IHJldHVybiB0aGlzLl9mb3JjZV9mbGlwIH1cbiAgc2V0IGZvcmNlX2ZsaXAgKHZhbHVlKSB7IHRoaXMuX2ZvcmNlX2ZsaXAgPSB2YWx1ZSB9XG5cbiAgdGljayAodCkge1xuICAgIHRoaXMuX3JhaW5ib3cudGljayh0KVxuICAgIHRoaXMuX2ZvbnpvLnRpY2sodClcbiAgICB0aGlzLl9vcndlbGwudGljayh0KVxuICAgIHRoaXMuX2JlYWdsZS50aWNrKHQpXG4gICAgdGhpcy5fdmlvbGV0LnRpY2sodClcbiAgICB0aGlzLl9vdmVybGF5cy50aWNrKHQpXG5cbiAgICBpZiAodGhpcy5fZm9yY2VfcmVkcmF3KSB7XG4gICAgICB0aGlzLnJlZHJhdygpXG4gICAgICB0aGlzLl9mb3JjZV9yZWRyYXcgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJlZHJhdyAoKSB7XG4gICAgaWYgKHRoaXMuX2ZvcmNlX2ZsaXApIHtcbiAgICAgIGxldCBkYXRhID0gdGhpcy5fZGF0YVxuICAgICAgbGV0IHBpeGVscyA9IHRoaXMuX3BpeGVsc1xuICAgICAgbGV0IHBhbGV0dGUgPSB0aGlzLl9yYWluYm93LmRhdGFcbiAgICAgIGxldCBzeiA9IHRoaXMuX3NpemVcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzejsgaSsrKSB7XG4gICAgICAgIHBpeGVsc1tpXSA9IHBhbGV0dGVbZGF0YVtpXV1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29udGV4dC5wdXRJbWFnZURhdGEodGhpcy5faW1hZ2VEYXRhLCAwLCAwKVxuXG4gICAgICB0aGlzLmVtaXQoJ2ZsaXAnKVxuXG4gICAgICB0aGlzLl9mb3JjZV9mbGlwID0gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3JlZHJhdycpXG5cbiAgICB0aGlzLl9yZW5kZXJlci5yZW5kZXIodGhpcy5fc3RhZ2UpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgY2VudGVyICgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci52aWV3LnN0eWxlLmxlZnQgPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNSAtIHRoaXMuX3JlbmRlcmVyLndpZHRoICogMC41ICsgJ3B4J1xuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcuc3R5bGUudG9wID0gd2luZG93LmlubmVySGVpZ2h0ICogMC41IC0gdGhpcy5fcmVuZGVyZXIuaGVpZ2h0ICogMC41ICsgJ3B4J1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXNpemUgKCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlc2l6ZSh0aGlzLl93aWR0aCAqIHRoaXMuX3NjYWxlLCB0aGlzLl9oZWlnaHQgKiB0aGlzLl9zY2FsZSlcblxuICAgIGlmICh0aGlzLl9zcHJpdGUpIHtcbiAgICAgIHRoaXMuX3Nwcml0ZS50ZXh0dXJlID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLl90ZXh0dXJlKSB7XG4gICAgICB0aGlzLl90ZXh0dXJlLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fdGV4dHVyZSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY2FudmFzKSB7XG4gICAgICB0aGlzLl9jYW52YXMucmVtb3ZlKClcbiAgICB9XG5cbiAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIHRoaXMuX2NhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fd2lkdGhcbiAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5faGVpZ2h0XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpXG5cbiAgICB0aGlzLl90ZXh0dXJlID0gUElYSS5UZXh0dXJlLmZyb21DYW52YXModGhpcy5fY2FudmFzLCBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1QpXG5cbiAgICBpZiAoIXRoaXMuX3Nwcml0ZSkge1xuICAgICAgdGhpcy5fc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX3RleHR1cmUpXG4gICAgICB0aGlzLl9vdmVybGF5cy5zY3JlZW4uc3ByaXRlLmFkZENoaWxkKHRoaXMuX3Nwcml0ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9zcHJpdGUudGV4dHVyZSA9IHRoaXMuX3RleHR1cmVcbiAgICB9XG5cbiAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJywgeyBhbHBoYTogdHJ1ZSwgYW50aWFsaWFzOiBmYWxzZSB9KVxuICAgIHRoaXMuX2NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG5cbiAgICB0aGlzLl9pbWFnZURhdGEgPSB0aGlzLl9jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuXG4gICAgdGhpcy5fcGl4ZWxzID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2ltYWdlRGF0YS5kYXRhLmJ1ZmZlcilcblxuICAgIHRoaXMuX292ZXJsYXlzLnJlc2l6ZSgpXG5cbiAgICB0aGlzLmNlbnRlcigpXG5cbiAgICB0aGlzLnRlc3QoKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHBpeGVsICh4LCB5LCBjKSB7XG4gICAgbGV0IGlcbiAgICBpZiAoXy5pc051bWJlcihjKSkge1xuICAgICAgaSA9IHRoaXMudG9JbmRleCh4LCB5KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGkgPSB4XG4gICAgICBjID0geVxuICAgIH1cbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGlmIChkYXRhW2ldICE9PSBjKSB7XG4gICAgICBkYXRhW2ldID0gYyB8fCAwXG4gICAgfVxuICAgIHJldHVybiBkYXRhW2ldXG4gIH1cblxuICB0b0luZGV4ICh4LCB5KSB7IHJldHVybiB5ICogdGhpcy5fd2lkdGggKyB4IH1cblxuICBmcm9tSW5kZXggKGkpIHtcbiAgICBsZXQgeSA9IE1hdGgubWluKE1hdGgudHJ1bmMoaSAvIHRoaXMuX3dpZHRoKSwgdGhpcy5faGVpZ2h0IC0gMSlcbiAgICBsZXQgeCA9IGkgLSB5XG4gICAgcmV0dXJuIHsgeCwgeSB9XG4gIH1cblxuICBzY3JvbGwgKHgsIHkpIHtcbiAgICBsZXQgbHcgPSB5ICogdGhpcy5fd2lkdGhcbiAgICBsZXQgcyA9IGx3XG4gICAgbGV0IGUgPSB0aGlzLl9zaXplIC0gbHdcbiAgICB0aGlzLl9kYXRhLmNvcHkocywgMCwgZSAtIHMpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGxvYWRUZXh0dXJlIChmaWxlbmFtZSkge1xuICAgIGxldCB0ZXggPSBQSVhJLlRleHR1cmUuZnJvbUltYWdlKCcuL2J1aWxkLycgKyByZXF1aXJlKCdmaWxlP25hbWU9YXNzZXRzL1tuYW1lXS5bZXh0XSEuLi8uLi8uLi9hc3NldHMvaW1ncy8nICsgZmlsZW5hbWUpLCB1bmRlZmluZWQsIFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVClcbiAgICB0ZXgub24oJ3VwZGF0ZScsICgpID0+IHRoaXMudXBkYXRlKCkpXG4gICAgcmV0dXJuIHRleFxuICB9XG5cbiAgdGVzdCAoKSB7XG4gICAgdGhpcy5jbGVhcigpXG5cbiAgICB0aGlzLnBpeGVsKDEwLCAxMCwgMTMpXG4gICAgdGhpcy5waXhlbCgyMCwgMTAsIDUpXG4gICAgdGhpcy5waXhlbCgzMCwgMTAsIDYpXG5cbiAgICAvLyBsZXQgc2NyZWVuID0gdGhpcy5fb3ZlcmxheXMuc2NyZWVuLnNwcml0ZVxuICAgIC8vIHNjcmVlbi5yZW1vdmVDaGlsZHJlbigpXG5cbiAgICAvLyBsZXQgdCA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLmxvYWRUZXh0dXJlKCd0ZXN0LnBuZycpKVxuICAgIC8vIHNjcmVlbi5hZGRDaGlsZCh0KVxuXG4gICAgLy8gbGV0IHRleHQgPSBuZXcgUElYSS5UZXh0KCdUaGlzIGlzIGEgcGl4aSB0ZXh0JywgeyBmb250OiAnMjBweCBcIkdsYXNzIFRUWSBWVDIyMFwiJywgZmlsbDogMHhGRkZGRkYgfSlcbiAgICAvLyB0ZXh0LnRleHR1cmUuYmFzZVRleHR1cmUuc2NhbGVNb2RlID0gUElYSS5TQ0FMRV9NT0RFUy5ORUFSRVNUXG4gICAgLy8gdGV4dC5jb250ZXh0LmNhbnZhcy5zdHlsZVsnZm9udC1zbW9vdGhpbmcnXSA9ICduZXZlcidcbiAgICAvLyB0ZXh0LmNvbnRleHQuY2FudmFzLnN0eWxlWyctd2Via2l0LWZvbnQtc21vb3RoaW5nJ10gPSAnbm9uZSdcbiAgICAvLyB0ZXh0LmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2VcbiAgICAvLyB0ZXh0LmNvbnRleHQuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnaGlkZGVuJ1xuICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dC5jb250ZXh0LmNhbnZhcylcbiAgICAvLyB0ZXh0LnVwZGF0ZVRleHQoKVxuICAgIC8vIHNjcmVlbi5hZGRDaGlsZCh0ZXh0KVxuICAgIC8vIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dC5jb250ZXh0LmNhbnZhcylcblxuICAgIHRoaXMudXBkYXRlKHRydWUpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL2d1aWRlby5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFpbmJvdyBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgnaTMyJywgJ3JhaW5ib3cnLCBbJ2NvdW50J10pXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBzdXBlci5yZXNldCgpXG5cbiAgICB0aGlzLl9kYXRhWzBdID0gMHgwMDAwMDBcbiAgICB0aGlzLl9kYXRhWzFdID0gMHg4MDAwMDBcbiAgICB0aGlzLl9kYXRhWzJdID0gMHgwMDgwMDBcbiAgICB0aGlzLl9kYXRhWzNdID0gMHg4MDgwMDBcbiAgICB0aGlzLl9kYXRhWzRdID0gMHgwMDAwODBcbiAgICB0aGlzLl9kYXRhWzVdID0gMHg4MDAwODBcbiAgICB0aGlzLl9kYXRhWzZdID0gMHgwMDgwODBcbiAgICB0aGlzLl9kYXRhWzddID0gMHhjMGMwYzBcbiAgICB0aGlzLl9kYXRhWzhdID0gMHg4MDgwODBcbiAgICB0aGlzLl9kYXRhWzldID0gMHhmZjAwMDBcbiAgICB0aGlzLl9kYXRhWzEwXSA9IDB4MDBmZjAwXG4gICAgdGhpcy5fZGF0YVsxMV0gPSAweGZmZmYwMFxuICAgIHRoaXMuX2RhdGFbMTJdID0gMHgwMDAwZmZcbiAgICB0aGlzLl9kYXRhWzEzXSA9IDB4ZmYwMGZmXG4gICAgdGhpcy5fZGF0YVsxNF0gPSAweDAwZmZmZlxuICAgIHRoaXMuX2RhdGFbMTVdID0gMHhmZmZmZmZcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXQgYmxhY2sgKCkgeyByZXR1cm4gMCB9XG4gIGdldCBka3JlZCAoKSB7IHJldHVybiAxIH1cbiAgZ2V0IGRrZ3JlZW4gKCkgeyByZXR1cm4gMiB9XG4gIGdldCBka3llbGxvdyAoKSB7IHJldHVybiAzIH1cbiAgZ2V0IGRrYmx1ZSAoKSB7IHJldHVybiA0IH1cbiAgZ2V0IGRrZnVjaHNpYSAoKSB7IHJldHVybiA1IH1cbiAgZ2V0IHRlYWwgKCkgeyByZXR1cm4gNiB9XG4gIGdldCBncmV5ICgpIHsgcmV0dXJuIDcgfVxuICBnZXQgZGtncmV5ICgpIHsgcmV0dXJuIDggfVxuICBnZXQgcmVkICgpIHsgcmV0dXJuIDkgfVxuICBnZXQgbGltZSAoKSB7IHJldHVybiAxMCB9XG4gIGdldCB5ZWxsb3cgKCkgeyByZXR1cm4gMTEgfVxuICBnZXQgYmx1ZSAoKSB7IHJldHVybiAxMiB9XG4gIGdldCBmdWNoc2lhICgpIHsgcmV0dXJuIDEzIH1cbiAgZ2V0IGN5YW4gKCkgeyByZXR1cm4gMTQgfVxuICBnZXQgd2hpdGUgKCkgeyByZXR1cm4gMTUgfVxuXG4gIGZyb21fcmdiIChjKSB7IHJldHVybiBfLmZpbmQodGhpcy5fZGF0YSwgYykgfVxuXG4gIHRvX3JnYiAoYykgeyByZXR1cm4gdGhpcy5fZGF0YVtjXSB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy9yYWluYm93LmpzIiwiaW1wb3J0IHsgRW1pdHRlciB9IGZyb20gJy4uLy4uL2VtaXR0ZXIuanMnXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gJy4uLy4uL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZGF0YV90eXBlX3NpemVzLCBkYXRhX3R5cGVfZm5zIH0gZnJvbSAnLi4vbWVtb3J5LmpzJ1xuXG52YXIgY3VycmVudE9mZnNldCA9IDBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpcCBleHRlbmRzIEVtaXR0ZXIge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX21haW4gPSBtYWluXG4gIH1cblxuICBpbml0IChkYXRhX3NpemUgPSAnaTgnLCBuYW1lID0gJycsIGtleXMgPSBbXSwgbm9kYXRhID0gZmFsc2UpIHtcbiAgICBsZXQgbWFpbiA9IHRoaXMuX21haW5cblxuICAgIGZvciAobGV0IGsgb2Yga2V5cykge1xuICAgICAgdGhpc1snXycgKyBrXSA9IG1haW4uZGVmYXVsdChuYW1lICsgJy4nICsgaylcbiAgICB9XG5cbiAgICBpZiAoIW5vZGF0YSkge1xuICAgICAgbGV0IHN6ID0gXy5pc051bWJlcihkYXRhX3NpemUpID8gZGF0YV9zaXplIDogZGF0YV90eXBlX3NpemVzW2RhdGFfc2l6ZV1cbiAgICAgIHRoaXMuX3NpemUgPSAodGhpcy5fY291bnQgfHwgMSkgKiAoKHRoaXMuX3dpZHRoIHx8IDEpICogKHRoaXMuX2hlaWdodCB8fCAxKSkgKiBzelxuXG4gICAgICB0aGlzLl90b3AgPSBfLmdldChtYWluLCAnbWVtX21hcC4nICsgbmFtZSArICcudG9wJywgY3VycmVudE9mZnNldClcbiAgICAgIHRoaXMuX2JvdHRvbSA9IHRoaXMuX3RvcCArIHRoaXMuX3NpemUgLSAxXG5cbiAgICAgIF8uc2V0KG1haW4sICdtZW1fbWFwLicgKyBuYW1lLCB7XG4gICAgICAgIHRvcDogdGhpcy5fdG9wLFxuICAgICAgICBib3R0b206IHRoaXMuX2JvdHRvbSxcbiAgICAgICAgc2l6ZTogdGhpcy5fc2l6ZSxcbiAgICAgIH0pXG5cbiAgICAgIGN1cnJlbnRPZmZzZXQgPSB0aGlzLl9ib3R0b20gKyAxXG5cbiAgICAgIHRoaXMuX2RhdGEgPSBuZXcgd2luZG93W2RhdGFfdHlwZV9mbnNbXy5pc1N0cmluZyhkYXRhX3NpemUpID8gZGF0YV9zaXplIDogJ2k4J10gKyAnQXJyYXknXSh0aGlzLm1lbW9yeS5idWZmZXIsIHRoaXMuX3RvcCwgdGhpcy5fY291bnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGVhcigpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuICBnZXQgbWVtb3J5ICgpIHsgcmV0dXJuIHRoaXMuX21haW4ubWVtb3J5IH1cblxuICBnZXQgZ3VpZGVvICgpIHsgcmV0dXJuIHRoaXMuX21haW4uZ3VpZGVvIH1cbiAgZ2V0IHJhaW5ib3cgKCkgeyByZXR1cm4gdGhpcy5ndWlkZW8ucmFpbmJvdyB9XG4gIGdldCBmb256byAoKSB7IHJldHVybiB0aGlzLmd1aWRlby5mb256byB9XG4gIGdldCBvcndlbGwgKCkgeyByZXR1cm4gdGhpcy5ndWlkZW8ub3J3ZWxsIH1cbiAgZ2V0IGJlYWdsZSAoKSB7IHJldHVybiB0aGlzLm9yd2VsbC5iZWFnbGUgfVxuICBnZXQgdmlvbGV0ICgpIHsgcmV0dXJuIHRoaXMuZ3VpZGVvLnZpb2xldCB9XG5cbiAgZ2V0IGRhdGEgKCkgeyByZXR1cm4gdGhpcy5fZGF0YSB9XG4gIGdldCB0b3AgKCkgeyByZXR1cm4gdGhpcy5fdG9wIH1cbiAgZ2V0IGJvdHRvbSAoKSB7IHJldHVybiB0aGlzLl9ib3R0b20gfVxuICBnZXQgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9zaXplIH1cblxuICBnZXQgd2lkdGggKCkgeyByZXR1cm4gdGhpcy5fd2lkdGggfVxuICBnZXQgaGVpZ2h0ICgpIHsgcmV0dXJuIHRoaXMuX2hlaWdodCB9XG4gIGdldCBjb3VudCAoKSB7IHJldHVybiB0aGlzLl9jb3VudCB9XG5cbiAgdXBkYXRlIChmbGlwID0gZmFsc2UpIHtcbiAgICB0aGlzLmd1aWRlby5mb3JjZV9yZWRyYXcgPSB0cnVlXG4gICAgdGhpcy5ndWlkZW8uZm9yY2VfZmxpcCA9IHRoaXMuZ3VpZGVvLmZvcmNlX2ZsaXAgfHwgZmxpcFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0aWNrICh0KSB7XG4gIH1cblxuICBjbGVhciAodiA9IDApIHtcbiAgICBpZiAodGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5fZGF0YS5maWxsKHYpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBhc3luYyAoZm4sIGFyZ3MsIGRlbGF5KSB7XG4gICAgYXN5bmModGhpcywgZm4sIGFyZ3MsIGRlbGF5KVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy9jaGlwLmpzIiwiaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb256byBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgnaTgnLCAnZm9uem8nLCBbJ2NvdW50JywgJ3dpZHRoJywgJ2hlaWdodCddKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICBkcmF3ICh4LCB5LCBjLCBmZyA9IDEsIGJnID0gMCkge1xuICAgIGxldCB3ID0gdGhpcy5fd2lkdGhcbiAgICBsZXQgaCA9IHRoaXMuX2hlaWdodFxuICAgIGxldCBzeiA9IHRoaXMuX3NpemVcbiAgICBsZXQgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgZ3VpZGVvID0gdGhpcy5ndWlkZW9cblxuICAgIGxldCBwdHIgPSB0aGlzLl90b3AgKyBjICogc3pcbiAgICBmb3IgKGxldCBieSA9IDA7IGJ5IDwgaDsgYnkrKykge1xuICAgICAgbGV0IHBpID0gKHkgKyBieSkgKiB3ICsgeFxuICAgICAgZm9yIChsZXQgYnggPSAwOyBieCA8IHc7IGJ4KyspIHtcbiAgICAgICAgZ3VpZGVvLnBpeGVsKHBpKyssIGRhdGFbcHRyKytdID8gZmcgOiBiZylcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy9mb256by5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3J3ZWxsIGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KDMsICdvcndlbGwnLCBbJ3dpZHRoJywgJ2hlaWdodCddKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICBjbGVhciAoY2ggPSAnICcsIGJnID0gMCkge1xuICAgIHRoaXMuX2RhdGEuZmlsbCgweEZGMDAwMCAmIGNoLmNoYXJDb2RlQXQoMCkgfCAweDAwMDBGRiAmIGJnKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBsZXQgdyA9IHRoaXMuX3dpZHRoXG4gICAgbGV0IGggPSB0aGlzLl9oZWlnaHRcbiAgICBsZXQgbWVtID0gdGhpcy5fZGF0YVxuICAgIGxldCBmbnQgPSB0aGlzLmZvbnpvXG4gICAgbGV0IGZ3ID0gZm50LndpZHRoXG4gICAgbGV0IGZoID0gZm50LmhlaWdodFxuXG4gICAgbGV0IGlkeCA9IDBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGg7IHkrKykge1xuICAgICAgbGV0IHB5ID0geSAqIGZoXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHc7IHgrKykge1xuICAgICAgICBsZXQgYyA9IG1lbVtpZHhdXG4gICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgZm50LmRyYXcoeCAqIGZ3LCBweSwgYywgbWVtW2lkeCArIDFdLCBtZW1baWR4ICsgMl0pXG4gICAgICAgIH1cbiAgICAgICAgaWR4ICs9IDNcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgZHJhd19jaGFyICh4LCB5LCBjLCBmZywgYmcpIHtcbiAgICBsZXQgZm50ID0gdGhpcy5mb256b1xuICAgIGZudC5kcmF3KHggKiBmbnQud2lkdGgsIHkgKiBmbnQuaGVpZ2h0LCBjLCBmZywgYmcpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGluZGV4ICh4LCB5KSB7XG4gICAgcmV0dXJuICgoeSAtIDEpICogdGhpcy5fd2lkdGggKyAoeCAtIDEpKSAqIDNcbiAgfVxuXG4gIGxpbmUgKHkpIHtcbiAgICBsZXQgbCA9IHRoaXMuX3dpZHRoICogM1xuICAgIHJldHVybiB7IHN0YXJ0OiB5ICogbCwgZW5kOiAoeSArIDEpICogbCAtIDMsIGxlbmd0aDogbCB9XG4gIH1cblxuICBjaGFyX2F0ICh4LCB5KSB7XG4gICAgbGV0IHRpZHggPSB0aGlzLmluZGV4KHgsIHkpXG4gICAgbGV0IG1lbSA9IHRoaXMuX2RhdGFcbiAgICByZXR1cm4geyBjaDogbWVtW3RpZHhdLCBmZzogbWVtW3RpZHggKyAxXSwgYmc6IG1lbVt0aWR4ICsgMl0gfVxuICB9XG5cbiAgcHV0X2NoYXIgKGNoLCBmZyA9IDEsIGJnID0gMCkge1xuICAgIHN3aXRjaCAoY2guY2hhckNvZGVBdCgwKSkge1xuICAgICAgY2FzZSAxMzpcbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIHJldHVybiB0aGlzLmNyKClcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcmV0dXJuIHRoaXMuYnMoKVxuICAgIH1cblxuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zKClcbiAgICB0aGlzLl9kYXRhLnNldChbY2guY2hhckNvZGVBdCgwKSwgZmcsIGJnXSwgdGhpcy5pbmRleCh4LCB5KSlcblxuICAgIHRoaXMuYmVhZ2xlLngrK1xuICAgIGlmICh0aGlzLmJlYWdsZS54ID4gdGhpcy5fd2lkdGgpIHtcbiAgICAgIHRoaXMuY3IoKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRyYXdfY2hhcih4LCB5LCBjaCwgZmcsIGJnKVxuICB9XG5cbiAgcHJpbnQgKHRleHQsIGZnLCBiZykge1xuICAgIGZvciAobGV0IGMgb2YgdGV4dCkge1xuICAgICAgdGhpcy5wdXRfY2hhcihjLCBmZywgYmcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwb3MgKCkgeyByZXR1cm4geyB4OiB0aGlzLmJlYWdsZS54LCB5OiB0aGlzLmJlYWdsZS55IH0gfVxuXG4gIG1vdmVfdG8gKHgsIHkpIHsgcmV0dXJuIHRoaXMuYmVhZ2xlLm1vdmVfdG8oeCwgeSkgfVxuXG4gIG1vdmVfYnkgKHgsIHkpIHsgcmV0dXJuIHRoaXMuYmVhZ2xlLm1vdmVfYnkoeCwgeSkgfVxuXG4gIGJvbCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8oMSwgdGhpcy5iZWFnbGUueSkgfVxuXG4gIGVvbCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5fd2lkdGgsIHRoaXMuYmVhZ2xlLnkpIH1cblxuICBib3MgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKDEsIDEpIH1cblxuICBlb3MgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpIH1cblxuICBicyAoKSB7IHJldHVybiB0aGlzLmxlZnQoKS5wdXRfY2hhcignICcpLmxlZnQoKSB9XG5cbiAgY3IgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKDEsIHRoaXMuYmVhZ2xlLnkgKyAxKSB9XG5cbiAgbGYgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuYmVhZ2xlLngsIHRoaXMuYmVhZ2xlLnkgKyAxKSB9XG5cbiAgdXAgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuYmVhZ2xlLngsIHRoaXMuYmVhZ2xlLnkgLSAxKSB9XG5cbiAgbGVmdCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5iZWFnbGUueCAtIDEsIHRoaXMuYmVhZ2xlLnkpIH1cblxuICBkb3duICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLmJlYWdsZS54LCB0aGlzLmJlYWdsZS55ICsgMSkgfVxuXG4gIHJpZ2h0ICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLmJlYWdsZS54ICsgMSwgdGhpcy5iZWFnbGUueSkgfVxuXG4gIGNsZWFyX2VvbCAoYmcgPSAwKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MoKVxuICAgIGxldCBzID0gdGhpcy5pbmRleCh4LCB5KVxuICAgIHRoaXMuX2RhdGEuZmlsbCgweDAwMDBGRiAmIGJnLCBzLCB0aGlzLmluZGV4KHRoaXMuX3dpZHRoLCB5KSAtIHMpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNsZWFyX2VvcyAoYmcgPSAwKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MoKVxuICAgIGxldCBzID0gdGhpcy5pbmRleCh4LCB5KVxuICAgIHRoaXMuX2RhdGEuZmlsbCgweDAwMDBGRiAmIGJnLCBzLCB0aGlzLl9zaXplIC0gcylcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY2xlYXJfYm9sIChiZyA9IDApIHtcbiAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcygpXG4gICAgbGV0IHMgPSB0aGlzLmluZGV4KHgsIHkpXG4gICAgdGhpcy5fZGF0YS5maWxsKDB4MDAwMEZGICYgYmcsIHMsIHRoaXMuaW5kZXgoMSwgeSkgLSBzKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjbGVhcl9ib3MgKGJnID0gMCkge1xuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zKClcbiAgICB0aGlzLl9kYXRhLmZpbGwoMHgwMDAwRkYgJiBiZywgMCwgdGhpcy5pbmRleCh4LCB5KSAtIDEpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNvcHlfbGluZSAoc3ksIHR5KSB7XG4gICAgbGV0IHNpID0gdGhpcy5saW5lKHN5KVxuICAgIHRoaXMuX2RhdGEuY29weShzaS5zdGFydCwgdGhpcy5saW5lKHR5KSwgc2kubGVuZ3RoKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjb3B5X2NvbCAoc3gsIHR4KSB7XG4gICAgbGV0IG1lbSA9IHRoaXMuX2RhdGFcbiAgICBzeCAqPSA0XG4gICAgdHggKj0gNFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5faGVpZ2h0OyB5KyspIHtcbiAgICAgIGxldCBpID0gdGhpcy5saW5lKHkpXG4gICAgICBtZW0uY29weShpLnN0YXJ0ICsgc3gsIGkuc3RhcnQgKyB0eCwgMylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGVyYXNlX2xpbmUgKHksIGJnID0gMCkge1xuICAgIGxldCBpID0gdGhpcy5saW5lKHkpXG4gICAgdGhpcy5fZGF0YS5maWxsKDB4MDAwMEZGICYgYmcsIGkuc3RhcnQsIGkubGVuZ3RoKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBlcmFzZV9jb2wgKHgsIGJnID0gMCkge1xuICAgIGxldCBtZW0gPSB0aGlzLl9kYXRhXG4gICAgbGV0IGxzID0gdGhpcy5saW5lKDApLnN0YXJ0ICsgeCAqIDNcbiAgICBsZXQgYyA9IDB4MDAwMEZGICYgYmdcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX2hlaWdodDsgeSsrKSB7XG4gICAgICBtZW0uZmlsbChjLCBscywgMylcbiAgICAgIGxzICs9IHRoaXMuX3dpZHRoICogM1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgc2Nyb2xsIChkeSkge1xuICAgIGlmIChkeSA+IDApIHtcbiAgICAgIGxldCBpID0gdGhpcy5saW5lKGR5ICsgMSlcbiAgICAgIHRoaXMuX2RhdGEuY29weShpLnN0YXJ0LCAwLCB0aGlzLl9zaXplKVxuICAgICAgaSA9IHRoaXMubGluZShkeSlcbiAgICAgIGxldCBzID0gaS5zdGFydFxuICAgICAgdGhpcy5fZGF0YS5maWxsKDAsIHMsIHRoaXMuX3NpemUgLSBzKVxuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgICB9XG4gICAgZWxzZSBpZiAoZHkgPCAwKSB7XG4gICAgICBsZXQgaSA9IHRoaXMubGluZShkeSArIDEpXG4gICAgICB0aGlzLl9kYXRhLmNvcHkoaS5zdGFydCwgMCwgdGhpcy5fc2l6ZSlcbiAgICAgIGkgPSB0aGlzLmxpbmUoZHkpXG4gICAgICBsZXQgcyA9IGkuc3RhcnRcbiAgICAgIHRoaXMuX2RhdGEuZmlsbCgwLCBzLCB0aGlzLl9zaXplIC0gcylcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL29yd2VsbC5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVhZ2xlIGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KDIsICdiZWFnbGUnLCBbJ3dpZHRoJywgJ2hlaWdodCcsICdjb2xvcicsICdibGlua3JhdGUnXSlcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcbiAgICB0aGlzLl94ID0gMFxuICAgIHRoaXMuX3kgPSAwXG4gICAgdGhpcy5fbGFzdCA9IDBcbiAgICB0aGlzLl9ibGlua19oaWRkZW4gPSBmYWxzZVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgaWYgKHQgLSB0aGlzLl9sYXN0ID49IHRoaXMuX2JsaW5rcmF0ZSkge1xuICAgICAgdGhpcy5ibGluaygpXG4gICAgICB0aGlzLl9sYXN0ID0gdFxuICAgIH1cbiAgfVxuXG4gIGdldCB4ICgpIHsgcmV0dXJuIHRoaXMuX3ggfVxuICBzZXQgeCAodmFsdWUpIHsgdGhpcy5feCA9IHZhbHVlIH1cblxuICBnZXQgeSAoKSB7IHJldHVybiB0aGlzLl95IH1cbiAgc2V0IHkgKHZhbHVlKSB7IHRoaXMuX3kgPSB2YWx1ZSB9XG5cbiAgZ2V0IGNvbG9yICgpIHsgcmV0dXJuIHRoaXMuX2NvbG9yIH1cbiAgc2V0IGNvbG9yICh2YWx1ZSkgeyB0aGlzLl9jb2xvciA9IHZhbHVlIH1cblxuICBnZXQgYmxpbmtyYXRlICgpIHsgcmV0dXJuIHRoaXMuX2JsaW5rcmF0ZSB9XG4gIHNldCBibGlua3JhdGUgKHZhbHVlKSB7IHRoaXMuX2JsaW5rcmF0ZSA9IHZhbHVlIH1cblxuICBibGluayAoKSB7XG4gICAgdGhpcy5fYmxpbmtfaGlkZGVuID0gIXRoaXMuX2JsaW5rX2hpZGRlblxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBtb3ZlX3RvICh4LCB5KSB7XG4gICAgbGV0IHcgPSB0aGlzLm9yd2VsbC53aWR0aFxuICAgIGxldCBoID0gdGhpcy5vcndlbGwuaGVpZ2h0XG5cbiAgICBpZiAoeCA+IHcpIHtcbiAgICAgIHggPSB3XG4gICAgfVxuICAgIGVsc2UgaWYgKHggPCAxKSB7XG4gICAgICB4ID0gMVxuICAgIH1cblxuICAgIGlmICh5ID4gaCkge1xuICAgICAgeSA9IGhcbiAgICB9XG4gICAgZWxzZSBpZiAoeSA8IDEpIHtcbiAgICAgIHkgPSAxXG4gICAgfVxuXG4gICAgdGhpcy5feCA9IHhcbiAgICB0aGlzLl95ID0geVxuXG4gICAgcmV0dXJuIHRoaXMuZHJhdyh4LCB5KVxuICB9XG5cbiAgbW92ZV9ieSAoeCwgeSkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuX3ggKyB4LCB0aGlzLl95ICsgeSkgfVxuXG4gIGRyYXcgKHgsIHkpIHtcbiAgICBsZXQgdyA9IHRoaXMuX3dpZHRoXG4gICAgbGV0IGggPSB0aGlzLl9oZWlnaHRcbiAgICBsZXQgYyA9IHRoaXMuX2NvbG9yXG4gICAgbGV0IGd1aWRlbyA9IHRoaXMuZ3VpZGVvXG5cbiAgICBmb3IgKGxldCBieSA9IDA7IGJ5IDwgaDsgYnkrKykge1xuICAgICAgbGV0IHBpID0gKHkgKyBieSkgKiB3ICsgeFxuICAgICAgZm9yIChsZXQgYnggPSAwOyBieCA8IHc7IGJ4KyspIHtcbiAgICAgICAgZ3VpZGVvLnBpeGVsKHBpKyssIGMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvYmVhZ2xlLmpzIiwiaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaW9sZXQgZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLl9saXN0ID0gW11cblxuICAgIHRoaXMuaW5pdCgnaTgnLCAndmlvbGV0JywgWydjb3VudCcsICd3aWR0aCcsICdoZWlnaHQnXSlcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgY2xlYXIgKHYgPSAwKSB7XG4gICAgdGhpcy5fbGlzdCA9IFtdXG4gICAgcmV0dXJuIHN1cGVyLmNsZWFyKHYpXG4gIH1cblxuICBmaW5kIChuYW1lKSB7XG4gICAgZm9yIChsZXQgcyBvZiB0aGlzLl9saXN0KSB7XG4gICAgICBpZiAocy5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiBzXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBhZGQgKG5hbWUsIGZyYW1lLCB4LCB5LCB6KSB7XG4gICAgdGhpcy5fbGlzdC5wdXNoKHsgbmFtZSwgZnJhbWUsIHgsIHksIHosIGluZGV4OiBOdW1iZXIuTUFYX1ZBTFVFIH0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGRlbCAobmFtZSkge1xuICAgIGxldCBzID0gdGhpcy5maW5kKG5hbWUpXG4gICAgaWYgKHMpIHtcbiAgICAgIHRoaXMuX2xpc3Quc3BsaWNlKHMuaW5kZXgsIDEpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBtb3ZlIChuYW1lLCB4LCB5LCB6KSB7XG4gICAgbGV0IHMgPSB0aGlzLmZpbmQobmFtZSlcbiAgICBpZiAocykge1xuICAgICAgcy54ID0geFxuICAgICAgcy55ID0geVxuICAgICAgaWYgKHopIHtcbiAgICAgICAgcy56ID0gelxuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgbW92ZV9ieSAobmFtZSwgeCwgeSkge1xuICAgIGxldCBzID0gdGhpcy5maW5kKG5hbWUpXG4gICAgaWYgKHMpIHtcbiAgICAgIHMueCA9IHhcbiAgICAgIHMueSA9IHlcbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGxldCBzdyA9IHRoaXMuX3dpZHRoXG4gICAgbGV0IHNoID0gdGhpcy5faGVpZ2h0XG4gICAgbGV0IHNsID0gdGhpcy5fbGlzdFxuICAgIGxldCBzcyA9IHRoaXMuX3NpemVcbiAgICBsZXQgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgZ3VpZGVvID0gdGhpcy5ndWlkZW9cblxuICAgIGZvciAobGV0IHMgb2YgXy5zb3J0Qnkoc2wsICd6JykpIHtcbiAgICAgIGxldCBwdHIgPSBzbCArIHMuZnJhbWUgKiBzc1xuICAgICAgZm9yIChsZXQgYnkgPSAwOyBieSA8IHNoOyBieSsrKSB7XG4gICAgICAgIGxldCBwaSA9IChzLnkgKyBieSkgKiBzdyArIHMueFxuICAgICAgICBmb3IgKGxldCBieCA9IDA7IGJ4IDwgc3c7IGJ4KyspIHtcbiAgICAgICAgICBndWlkZW8ucGl4ZWwocGkrKywgZGF0YVtwdHIrK10pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy92aW9sZXQuanMiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cblxuZXhwb3J0IGNsYXNzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuX292ZXJsYXlzID0gb3ZlcmxheXNcblxuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIGNyZWF0ZSAoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBuZXcgUElYSS5DYW52YXNCdWZmZXIodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG5cbiAgICB0aGlzLnRleCA9IFBJWEkuVGV4dHVyZS5mcm9tQ2FudmFzKHRoaXMuY2FudmFzLmNhbnZhcywgUElYSS5TQ0FMRV9NT0RFUy5ORUFSRVNUKVxuICAgIHRoaXMudGV4LnNjYWxlTW9kZSA9IFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVFxuXG4gICAgdGhpcy5zcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUodGhpcy50ZXgpXG5cbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7IGFscGhhOiB0cnVlLCBhbnRpYWxpYXM6IGZhbHNlIH0pXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fbGFzdCA9IDBcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNhbnZhcykge1xuICAgICAgdGhpcy5jYW52YXMuZGVzdHJveSgpXG4gICAgICB0aGlzLmNhbnZhcyA9IG51bGxcbiAgICB9XG4gIH1cblxuICB0aWNrICh0KSB7XG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuZ3VpZGVvLnVwZGF0ZSgpXG4gIH1cblxuICBnZXQgbWFpbiAoKSB7IHJldHVybiB0aGlzLl9vdmVybGF5cy5tYWluIH1cbiAgZ2V0IGd1aWRlbyAoKSB7IHJldHVybiB0aGlzLm1haW4uZ3VpZGVvIH1cbiAgZ2V0IHN0YWdlICgpIHsgcmV0dXJuIHRoaXMubWFpbi5zdGFnZSB9XG4gIGdldCByZW5kZXJlciAoKSB7IHJldHVybiB0aGlzLm1haW4ucmVuZGVyZXIgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIFNjcmVlbk92ZXJsYXkgZXh0ZW5kcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihvdmVybGF5cywgd2lkdGgsIGhlaWdodClcblxuICAgIHRoaXMuY3JlYXRlKClcblxuICAgIHRoaXMuc3ByaXRlLnggPSB0aGlzLmd1aWRlby5vZmZzZXRfeCArIHRoaXMuZ3VpZGVvLm1hcmdpbnNfeCAvIDJcbiAgICB0aGlzLnNwcml0ZS55ID0gdGhpcy5ndWlkZW8ub2Zmc2V0X3kgKyB0aGlzLmd1aWRlby5tYXJnaW5zX3kgLyAyXG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBTY2FubGluZXNPdmVybGF5IGV4dGVuZHMgT3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IgKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLmdhcCA9IF8uZ2V0KG9wdGlvbnMsICdnYXAnLCAzKVxuICAgIHRoaXMuYWxwaGEgPSBfLmdldChvcHRpb25zLCAnYWxwaGEnLCAwLjM1KVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuXG4gICAgbGV0IGEgPSB0aGlzLmFscGhhICogMjU1XG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIGxldCBwaXhlbHMgPSBkYXRhLmRhdGFcbiAgICBsZXQgc3ogPSB0aGlzLndpZHRoICogNFxuICAgIGxldCBpZHhcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5ICs9IHRoaXMuZ2FwKSB7XG4gICAgICBpZHggPSB5ICogc3pcbiAgICAgIGZvciAobGV0IGkgPSBpZHg7IGkgPCBpZHggKyBzejsgaSArPSA0KSB7XG4gICAgICAgIHBpeGVscy5zZXQoWzAsIDAsIDAsIGFdLCBpKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApXG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBTY2FubGluZU92ZXJsYXkgZXh0ZW5kcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihvdmVybGF5cywgd2lkdGgsIGhlaWdodClcblxuICAgIHRoaXMucmF0ZSA9IF8uZ2V0KG9wdGlvbnMsICdyYXRlJywgNTApXG4gICAgdGhpcy5zcGVlZCA9IF8uZ2V0KG9wdGlvbnMsICdzcGVlZCcsIDE2KVxuICAgIHRoaXMuYWxwaGEgPSBfLmdldChvcHRpb25zLCAnYWxwaGEnLCAwLjEpXG5cbiAgICB0aGlzLmNyZWF0ZSgpXG5cbiAgICBsZXQgZGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgbGV0IHBpeGVscyA9IGRhdGEuZGF0YVxuICAgIGxldCBzeiA9IHRoaXMud2lkdGggKiA0XG4gICAgbGV0IGxlbiA9IHRoaXMuaGVpZ2h0ICogc3pcbiAgICBsZXQgbCA9IDBcbiAgICBsZXQgaCA9IHRoaXMuaGVpZ2h0XG4gICAgbGV0IGEgPSB0aGlzLmFscGhhICogMjU1XG4gICAgbGV0IGFhXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBsZW47IHkgKz0gc3opIHtcbiAgICAgIGFhID0gbCAvIGggKiBhXG4gICAgICBmb3IgKGxldCB4ID0geTsgeCA8IHkgKyBzejsgeCArPSA0KSB7XG4gICAgICAgIHBpeGVscy5zZXQoWzI1LCAyNSwgMjUsIGFhXSwgeClcbiAgICAgIH1cbiAgICAgIGwrK1xuICAgIH1cbiAgICB0aGlzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApXG5cbiAgICB0aGlzLnNwcml0ZS55ID0gLXRoaXMuc3ByaXRlLmhlaWdodFxuICB9XG5cbiAgdGljayAodCkge1xuICAgIGlmICh0IC0gdGhpcy5fbGFzdCA+PSB0aGlzLnJhdGUpIHtcbiAgICAgIHRoaXMuc3ByaXRlLnkgKz0gdGhpcy5zcGVlZFxuICAgICAgaWYgKHRoaXMuc3ByaXRlLnkgPiB0aGlzLmhlaWdodCkge1xuICAgICAgICB0aGlzLnNwcml0ZS55ID0gLXRoaXMuc3ByaXRlLmhlaWdodFxuICAgICAgfVxuICAgICAgdGhpcy5fbGFzdCA9IHRcblxuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIE5vaXNlc092ZXJsYXkgZXh0ZW5kcyBPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvciAob3ZlcmxheXMsIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihvdmVybGF5cywgd2lkdGgsIGhlaWdodClcblxuICAgIHRoaXMucmF0ZSA9IF8uZ2V0KG9wdGlvbnMsICdyYXRlJywgMjUwKVxuICAgIHRoaXMuY291bnQgPSBfLmdldChvcHRpb25zLCAnY291bnQnLCA4KVxuICAgIHRoaXMucmF0ZSA9IF8uZ2V0KG9wdGlvbnMsICdyYXRlJywgMC44NSlcbiAgICB0aGlzLnJlZCA9IF8uZ2V0KG9wdGlvbnMsICdyZWQnLCAxMDApXG4gICAgdGhpcy5ncmVlbiA9IF8uZ2V0KG9wdGlvbnMsICdncmVlbicsIDEwMClcbiAgICB0aGlzLmJsdWUgPSBfLmdldChvcHRpb25zLCAnYmx1ZScsIDEwMClcbiAgICB0aGlzLmFscGhhID0gXy5nZXQob3B0aW9ucywgJ2FscGhhJywgMC4xNSlcblxuICAgIHRoaXMubm9pc2VzID0ge31cblxuICAgIGxldCBhID0gdGhpcy5hbHBoYSAqIDI1NVxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5jb3VudDsgYysrKSB7XG4gICAgICBsZXQgbm9pc2UgPSBuZXcgT3ZlcmxheSh0aGlzLmd1aWRlbywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICBub2lzZS5jcmVhdGUoKVxuICAgICAgbm9pc2Uuc3ByaXRlLnZpc2libGUgPSBjID09PSAwXG5cbiAgICAgIGxldCBkYXRhID0gbm9pc2UuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICBsZXQgcGl4ZWxzID0gZGF0YS5kYXRhXG4gICAgICBsZXQgbGVuID0gcGl4ZWxzLmxlbmd0aFxuICAgICAgbGV0IHIgPSB0aGlzLnJlZFxuICAgICAgbGV0IGcgPSB0aGlzLmdyZWVuXG4gICAgICBsZXQgYiA9IHRoaXMuYmx1ZVxuICAgICAgbGV0IF9yYXRlID0gdGhpcy5yYXRlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID49IF9yYXRlKSB7XG4gICAgICAgICAgcGl4ZWxzLnNldChbTWF0aC50cnVuYyhNYXRoLnJhbmRvbSgpICogciksIE1hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIGcpLCBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiBiKSwgYV0sIGkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5vaXNlLmNvbnRleHQucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApXG4gICAgICB0aGlzLm5vaXNlc1tjXSA9IG5vaXNlXG4gICAgICB0aGlzLmd1aWRlby5fbWFpbi5zdGFnZS5hZGRDaGlsZChub2lzZS5zcHJpdGUpXG4gICAgfVxuXG4gICAgdGhpcy5ub2lzZUtleXMgPSBfLmtleXModGhpcy5ub2lzZXMpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBzdXBlci5kZXN0cm95KClcblxuICAgIGZvciAobGV0IGsgaW4gdGhpcy5ub2lzZXMpIHtcbiAgICAgIGxldCBub2lzZSA9IHRoaXMubm9pc2VzW2tdXG4gICAgICBub2lzZS5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLm5vaXNlcyA9IHt9XG4gICAgdGhpcy5ub2lzZUtleXMgPSBbXVxuICB9XG5cbiAgdGljayAodCkge1xuICAgIGlmICh0IC0gdGhpcy5fbGFzdCA+PSB0aGlzLnJhdGUpIHtcbiAgICAgIGZvciAobGV0IGsgb2YgdGhpcy5ub2lzZUtleXMpIHtcbiAgICAgICAgdGhpcy5ub2lzZXNba10uc3ByaXRlLnZpc2libGUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBsZXQgbm9pc2UgPSB0aGlzLm5vaXNlS2V5c1tNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiB0aGlzLm5vaXNlS2V5cy5sZW5ndGgpXVxuICAgICAgdGhpcy5ub2lzZXNbbm9pc2VdLnNwcml0ZS52aXNpYmxlID0gdHJ1ZVxuXG4gICAgICB0aGlzLl9sYXN0ID0gdFxuXG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgUmdiT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5hbHBoYSA9IF8uZ2V0KG9wdGlvbnMsICdhbHBoYScsIDAuMDc1KVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuXG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIGxldCBwaXhlbHMgPSBkYXRhLmRhdGFcbiAgICBsZXQgbGVuID0gcGl4ZWxzLmxlbmd0aFxuICAgIGxldCBhID0gdGhpcy5hbHBoYSAqIDI1NVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEyKSB7XG4gICAgICBwaXhlbHMuc2V0KFsxMDAsIDEwMCwgMTAwLCBhXSwgaSlcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgQ3J0T3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yIChvdmVybGF5cywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKG92ZXJsYXlzLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5yYWRpdXMgPSBfLmdldChvcHRpb25zLCAncmFkaXVzJywgMC4yNSlcbiAgICB0aGlzLmluc2lkZV9hbHBoYSA9IF8uZ2V0KG9wdGlvbnMsICdpbnNpZGVfYWxwaGEnLCAwLjIpXG4gICAgdGhpcy5vdXRzaWRlX2FscGhhID0gXy5nZXQob3B0aW9ucywgJ291dHNpZGVfYWxwaGEnLCAwLjE1KVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuXG4gICAgdGhpcy5jb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkYXJrZXInXG4gICAgbGV0IGdyYWRpZW50ID0gdGhpcy5jb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy5oZWlnaHQgLyB0aGlzLnJhZGl1cylcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgJyArIHRoaXMuaW5zaWRlX2FscGhhICsgJyknKVxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgwLCAwLCAwLCAnICsgdGhpcy5vdXRzaWRlX2FscGhhICsgJyknKVxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudFxuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJ1xuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgT3ZlcmxheXMge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluLCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9tYWluID0gbWFpblxuXG4gICAgbGV0IHN0YWdlID0gbWFpbi5zdGFnZVxuICAgIGxldCByZW5kZXJlciA9IG1haW4ucmVuZGVyZXJcblxuICAgIGxldCB3aWR0aCA9IHJlbmRlcmVyLndpZHRoXG4gICAgbGV0IGhlaWdodCA9IHJlbmRlcmVyLmhlaWdodFxuICAgIGxldCBzY2FsZSA9IDFcbiAgICBsZXQgbWFyZ2luc194ID0gdGhpcy5tYXJnaW5zX3ggfHwgMFxuICAgIGxldCBtYXJnaW5zX3kgPSB0aGlzLm1hcmdpbnNfeSB8fCAwXG5cbiAgICB0aGlzLl9saXN0ID0ge31cbiAgICBsZXQgbCA9IHRoaXMuX2xpc3RcblxuICAgIGlmIChfLmdldChvcHRpb25zLCAnc2NyZWVuJykpIHtcbiAgICAgIGwuc2NyZWVuID0gbmV3IFNjcmVlbk92ZXJsYXkodGhpcywgdGhpcy5ndWlkZW8ud2lkdGgsIHRoaXMuZ3VpZGVvLmhlaWdodCwgXy5nZXQob3B0aW9ucywgJ3NjcmVlbicpKVxuICAgICAgbC5zY3JlZW4uc3ByaXRlLnNjYWxlID0gbmV3IFBJWEkuUG9pbnQoc2NhbGUsIHNjYWxlKVxuICAgICAgc3RhZ2UuYWRkQ2hpbGQobC5zY3JlZW4uc3ByaXRlKVxuICAgIH1cblxuICAgIGlmIChfLmdldChvcHRpb25zLCAnc2NhbmxpbmVzJykpIHtcbiAgICAgIGwuc2NhbmxpbmVzID0gbmV3IFNjYW5saW5lc092ZXJsYXkodGhpcywgd2lkdGgsIGhlaWdodCwgXy5nZXQob3B0aW9ucywgJ3NjYW5saW5lcycpKVxuICAgICAgc3RhZ2UuYWRkQ2hpbGQobC5zY2FubGluZXMuc3ByaXRlKVxuICAgIH1cblxuICAgIGlmIChfLmdldChvcHRpb25zLCAnc2NhbmxpbmUnKSkge1xuICAgICAgbC5zY2FubGluZSA9IG5ldyBTY2FubGluZU92ZXJsYXkodGhpcywgd2lkdGgsIGhlaWdodCwgXy5nZXQob3B0aW9ucywgJ3NjYW5saW5lJykpXG4gICAgICBzdGFnZS5hZGRDaGlsZChsLnNjYW5saW5lLnNwcml0ZSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ3JnYicpKSB7XG4gICAgICBsLnJnYiA9IG5ldyBSZ2JPdmVybGF5KHRoaXMsIHdpZHRoLCBoZWlnaHQsIF8uZ2V0KG9wdGlvbnMsICdyZ2InKSlcbiAgICAgIHN0YWdlLmFkZENoaWxkKGwucmdiLnNwcml0ZSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ25vaXNlcycpKSB7XG4gICAgICBsLm5vaXNlcyA9IG5ldyBOb2lzZXNPdmVybGF5KHRoaXMsIHdpZHRoLCBoZWlnaHQsIF8uZ2V0KG9wdGlvbnMsICdub2lzZXMnKSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ2NydCcpKSB7XG4gICAgICBsLmNydCA9IG5ldyBDcnRPdmVybGF5KHRoaXMsIHdpZHRoLCBoZWlnaHQsIF8uZ2V0KG9wdGlvbnMsICdjcnQnKSlcbiAgICAgIHN0YWdlLmFkZENoaWxkKGwuY3J0LnNwcml0ZSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ21vbml0b3InKSkge1xuICAgICAgbGV0IHRleCA9IFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoJy4vYnVpbGQvJyArIHJlcXVpcmUoJ2ZpbGU/bmFtZT1hc3NldHMvW3BhdGhdL1tuYW1lXS5bZXh0XSEuLi8uLi9hc3NldHMvaW1ncy9jcnQucG5nJykpXG4gICAgICBsLm1vbml0b3IgPSBuZXcgUElYSS5TcHJpdGUodGV4KVxuICAgICAgbC5tb25pdG9yLndpZHRoID0gd2lkdGggKyBtYXJnaW5zX3hcbiAgICAgIGwubW9uaXRvci5oZWlnaHQgPSBoZWlnaHQgKyBtYXJnaW5zX3lcbiAgICAgIGwubW9uaXRvci54ID0gbWFyZ2luc194IC8gLTJcbiAgICAgIGwubW9uaXRvci55ID0gbWFyZ2luc195IC8gLTJcbiAgICAgIHN0YWdlLmFkZENoaWxkKGwubW9uaXRvcilcbiAgICB9XG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgY29uc3QgbCA9IHRoaXMuX2xpc3RcbiAgICBmb3IgKGxldCBrIGluIGwpIHtcbiAgICAgIGlmIChsW2tdLnRpY2spIHtcbiAgICAgICAgbFtrXS50aWNrKHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIGNvbnN0IGwgPSB0aGlzLl9saXN0XG4gICAgZm9yIChsZXQgayBpbiBsKSB7XG4gICAgICBpZiAobFtrXS5yZXNldCkge1xuICAgICAgICBsW2tdLnJlc2V0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBjb25zdCBsID0gdGhpcy5fbGlzdFxuICAgIGZvciAobGV0IGsgaW4gbCkge1xuICAgICAgaWYgKGxba10uZGVzdHJveSkge1xuICAgICAgICBsW2tdLmRlc3Ryb3koKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuICBnZXQgZ3VpZGVvICgpIHsgcmV0dXJuIHRoaXMuX21haW4uZ3VpZGVvIH1cbiAgZ2V0IHN0YWdlICgpIHsgcmV0dXJuIHRoaXMuX21haW4uc3RhZ2UgfVxuICBnZXQgcmVuZGVyZXIgKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5yZW5kZXJlciB9XG4gIGdldCBzY3JlZW4gKCkgeyByZXR1cm4gdGhpcy5fbGlzdC5zY3JlZW4gfVxuXG4gIHJlc2l6ZSAoKSB7XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vb3ZlcmxheXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvYXNzZXRzL2ltZ3MvL2NydC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmlsZS1sb2FkZXI/bmFtZT1hc3NldHMvW3BhdGhdL1tuYW1lXS5bZXh0XSEuL2Fzc2V0cy9pbWdzL2NydC5wbmdcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXAgPSB7XG5cdFwiLi9jcnQucG5nXCI6IDczLFxuXHRcIi4vdGVzdC5wbmdcIjogNzRcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNzI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9pbWdzIC4vfi9maWxlLWxvYWRlcj9uYW1lPWFzc2V0cy9bbmFtZV0uW2V4dF0hXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2NydC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmlsZS1sb2FkZXI/bmFtZT1hc3NldHMvW25hbWVdLltleHRdIS4vYXNzZXRzL2ltZ3MvY3J0LnBuZ1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3Rlc3QucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpbGUtbG9hZGVyP25hbWU9YXNzZXRzL1tuYW1lXS5bZXh0XSEuL2Fzc2V0cy9pbWdzL3Rlc3QucG5nXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtlbiBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgnaTMyJywgJ2tlbicsIFsnY291bnQnXSlcblxuICAgIHRoaXMuX29uS2V5ZG93biA9IHRoaXMub25LZXlkb3duLmJpbmQodGhpcylcbiAgICB0aGlzLl9vbktleXVwID0gdGhpcy5vbktleXVwLmJpbmQodGhpcylcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5dXApXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBzdXBlci5yZXNldCgpXG5cbiAgICB0aGlzLl9tb2RzID0gMFxuICAgIHRoaXMuX2pveXN0aWNrID0gMFxuICAgIHRoaXMuX2tleXMgPSB7fVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5dXApXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICBnZXQgbW9kcyAoKSB7IHJldHVybiB0aGlzLl9tb2RzIH1cbiAgZ2V0IGpveXN0aWNrICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrIH1cbiAgZ2V0IGtleXMgKCkgeyByZXR1cm4gdGhpcy5fa2V5cyB9XG5cbiAgZ2V0IHNoaWZ0ICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDAxIH1cbiAgZ2V0IGN0cmwgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyAmIDB4MDIgfVxuICBnZXQgYWx0ICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDA0IH1cbiAgZ2V0IG1ldGEgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyAmIDB4MDggfVxuICBnZXQgbnVtcGFkICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDEwIH1cbiAgZ2V0IGJ0bjAgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDEwIH1cbiAgZ2V0IGJ0bjEgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDIwIH1cbiAgZ2V0IGJ0bjIgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDQwIH1cbiAgZ2V0IGJ0bjMgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDgwIH1cbiAgZ2V0IGJ0bjQgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDEwMCB9XG4gIGdldCB1cCAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MDEgfVxuICBnZXQgZG93biAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MDIgfVxuICBnZXQgcmlnaHQgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDA0IH1cbiAgZ2V0IGxlZnQgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDA4IH1cblxuICBldmVudERldGFpbHMgKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBlLmtleSxcbiAgICAgIGtleUNvZGU6IGUua2V5Q29kZSxcbiAgICAgIGtleXM6IHRoaXMuX2tleXMsXG4gICAgICBtb2RzOiB0aGlzLl9tb2RzLFxuICAgICAgam95c3RpY2s6IHRoaXMuX2pveXN0aWNrLFxuICAgICAgc2hpZnQ6IHRoaXMuc2hpZnQsXG4gICAgICBjdHJsOiB0aGlzLmN0cmwsXG4gICAgICBhbHQ6IHRoaXMuYWx0LFxuICAgICAgbWV0YTogdGhpcy5tZXRhLFxuICAgICAgbnVtcGFkOiB0aGlzLm51bXBhZCxcbiAgICAgIGJ0bjA6IHRoaXMuYnRuMCxcbiAgICAgIGJ0bjE6IHRoaXMuYnRuMSxcbiAgICAgIGJ0bjI6IHRoaXMuYnRuMixcbiAgICAgIGJ0bjM6IHRoaXMuYnRuMyxcbiAgICAgIGJ0bjQ6IHRoaXMuYnRuNCxcbiAgICAgIHVwOiB0aGlzLnVwLFxuICAgICAgZG93bjogdGhpcy5kb3duLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgfVxuICB9XG5cbiAgb25LZXlkb3duIChlKSB7XG4gICAgbGV0IG51bXBhZCA9IGUubG9jYXRpb24gPT09IDNcbiAgICBpZiAobnVtcGFkKSB7XG4gICAgICB0aGlzLl9tb2RzIHw9IDB4MTBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9tb2RzICY9IH4weDEwXG4gICAgfVxuICAgIHRoaXMuX2tleXNbZS5rZXlDb2RlXSA9IDFcblxuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ1NoaWZ0JzpcbiAgICAgICAgdGhpcy5fbW9kcyB8PSAweDAxXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0NvbnRyb2wnOlxuICAgICAgICB0aGlzLl9tb2RzIHw9IDB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQWx0JzpcbiAgICAgICAgdGhpcy5fbW9kcyB8PSAweDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ01ldGEnOlxuICAgICAgICB0aGlzLl9tb2RzIHw9IDB4MDhcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnOCc6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDAxXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICcyJzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDJcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzQnOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwNFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDA4XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzYnOiAvLyBudW1wYWQgNlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwOFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3onOiAvLyBidXR0b24gMFxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDEwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3gnOiAvLyBidXR0b24gMVxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDIwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2MnOiAvLyBidXR0b24gMlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDQwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJyAnOiAvLyBidXR0b24gM1xuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDgwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0VudGVyJzogLy8gYnV0dG9uIDRcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgxMDBcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ2tleS5kb3duJywgdGhpcy5ldmVudERldGFpbHMoZSkpXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICBvbktleXVwIChlKSB7XG4gICAgbGV0IG51bXBhZCA9IGUubG9jYXRpb24gPT09IDNcbiAgICBpZiAobnVtcGFkKSB7XG4gICAgICB0aGlzLl9tb2RzIHw9IDB4MTBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9tb2RzICY9IH4weDEwXG4gICAgfVxuICAgIHRoaXMuX2tleXNbZS5rZXlDb2RlXSA9IDBcblxuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ1NoaWZ0JzpcbiAgICAgICAgdGhpcy5fbW9kcyAmPSB+MHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdDb250cm9sJzpcbiAgICAgICAgdGhpcy5fbW9kcyAmPSB+MHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBbHQnOlxuICAgICAgICB0aGlzLl9tb2RzICY9IH4weDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ01ldGEnOlxuICAgICAgICB0aGlzLl9tb2RzICY9IH4weDA4XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICc4JzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDAxXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnMic6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwMlxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzQnOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDRcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDhcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnNic6IC8vIG51bXBhZCA2XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwOFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3onOiAvLyBidXR0b24gMFxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgxMFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICd4JzogLy8gYnV0dG9uIDFcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MjBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnYyc6IC8vIGJ1dHRvbiAyXG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDQwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJyAnOiAvLyBidXR0b24gM1xuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHg4MFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdFbnRlcic6IC8vIGJ1dHRvbiA0XG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDEwMFxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgna2V5LnVwJywgdGhpcy5ldmVudERldGFpbHMoZSkpXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL2tlbi5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlja2V5IGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdpMzInLCAnbWlja2V5JywgWydjb3VudCcsICdkYmxDbGlja0RlbGF5JywgJ2RibENsaWNrRGlzdGFuY2UnXSlcblxuICAgIGxldCBzdGFnZSA9IG1haW4uc3RhZ2VcbiAgICBpZiAoc3RhZ2UpIHtcbiAgICAgIHN0YWdlLmludGVyYWN0aXZlID0gdHJ1ZVxuXG4gICAgICB0aGlzLl9vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKVxuICAgICAgdGhpcy5fb25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcylcbiAgICAgIHRoaXMuX29uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcylcblxuICAgICAgc3RhZ2Uub24oJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duKVxuICAgICAgc3RhZ2Uub24oJ3JpZ2h0ZG93bicsIHRoaXMuX29uTW91c2VEb3duKVxuICAgICAgc3RhZ2Uub24oJ3RvdWNoc3RhcnQnLCB0aGlzLl9vbk1vdXNlRG93bilcblxuICAgICAgc3RhZ2Uub24oJ21vdXNlbW92ZScsIHRoaXMuX29uTW91c2VNb3ZlKVxuXG4gICAgICBzdGFnZS5vbignbW91c2V1cCcsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9uKCd0b3VjaGVuZCcsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9uKCdtb3VzZXVwb3V0c2lkZScsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9uKCd0b3VjaGVuZG91dHNpZGUnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgfVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuXG4gICAgdGhpcy5feCA9IDBcbiAgICB0aGlzLl95ID0gMFxuICAgIHRoaXMuX2J0bnMgPSAwXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgbGV0IHN0YWdlID0gdGhpcy5fbWFpbi5zdGFnZVxuICAgIGlmIChzdGFnZSkge1xuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlRG93bilcbiAgICAgIHN0YWdlLm9mZigncmlnaHRkb3duJywgdGhpcy5fb25Nb3VzZURvd24pXG4gICAgICBzdGFnZS5vZmYoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vbk1vdXNlRG93bilcblxuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSlcblxuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub2ZmKCd0b3VjaGVuZCcsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9mZignbW91c2V1cG91dHNpZGUnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgICBzdGFnZS5vZmYoJ3RvdWNoZW5kb3V0c2lkZScsIHRoaXMuX29uTW91c2VVcClcbiAgICB9XG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICBnZXQgeCAoKSB7IHJldHVybiB0aGlzLl94IH1cbiAgc2V0IHggKHZhbHVlKSB7XG4gICAgdGhpcy5feCA9IHZhbHVlXG4gIH1cblxuICBnZXQgeSAoKSB7IHJldHVybiB0aGlzLl95IH1cbiAgc2V0IHkgKHZhbHVlKSB7XG4gICAgdGhpcy5feSA9IHZhbHVlXG4gIH1cblxuICBnZXQgYnRucyAoKSB7IHJldHVybiB0aGlzLl9idG5zIH1cbiAgc2V0IGJ0bnMgKHZhbHVlKSB7XG4gICAgdGhpcy5fYnRucyA9IHZhbHVlXG4gIH1cblxuICBnZXQgZGJsQ2xpY2tEZWxheSAoKSB7IHJldHVybiB0aGlzLl9kYmxDbGlja0RlbGF5IH1cbiAgc2V0IGRibENsaWNrRGVsYXkgKHZhbHVlKSB7XG4gICAgdGhpcy5fZGJsQ2xpY2tEZWxheSA9IHZhbHVlXG4gIH1cblxuICBnZXQgZGJsQ2xpY2tEaXN0YW5jZSAoKSB7IHJldHVybiB0aGlzLl9kYmxDbGlja0Rpc3RhbmNlIH1cbiAgc2V0IGRibENsaWNrRGlzdGFuY2UgKHZhbHVlKSB7XG4gICAgdGhpcy5fZGJsQ2xpY2tEaXN0YW5jZSA9IHZhbHVlXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0RXZlbnRJbmZvIChlKSB7XG4gICAgbGV0IHJlbmRlcmVyID0gdGhpcy5fbWFpbi5yZW5kZXJlclxuXG4gICAgLy8gbGV0IHNpemUgPSBuZXcgUElYSS5Qb2ludChyZW5kZXJlci53aWR0aCAtIHRoaXMuX3Nwcml0ZS53aWR0aCwgcmVuZGVyZXIuaGVpZ2h0IC0gdGhpcy5fc3ByaXRlLmhlaWdodClcblxuICAgIC8vIGxldCB4ID0gTWF0aC50cnVuYyhNYXRoLm1pbihzaXplLngsIE1hdGgubWF4KDAsIGUuZGF0YS5nbG9iYWwueCkpIC8gdGhpcy5fbWFpbi5zY2FsZSlcbiAgICAvLyBsZXQgeSA9IE1hdGgudHJ1bmMoTWF0aC5taW4oc2l6ZS55LCBNYXRoLm1heCgwLCBlLmRhdGEuZ2xvYmFsLnkpKSAvIHRoaXMuX21haW4uc2NhbGUpXG5cbiAgICAvLyByZXR1cm4geyB4LCB5LCBidXR0b246IGUuZGF0YS5vcmlnaW5hbEV2ZW50LmJ1dHRvbiB9XG4gICAgcmV0dXJuIHsgeDogMCwgeTogMCwgYnV0dG9uOiBlLmRhdGEub3JpZ2luYWxFdmVudC5idXR0b24gfVxuICB9XG5cbiAgb25Nb3VzZURvd24gKGUpIHtcbiAgICBsZXQgeyB4LCB5LCBidXR0b24gfSA9IHRoaXMuZ2V0RXZlbnRJbmZvKGUpXG5cbiAgICBzd2l0Y2ggKGJ1dHRvbikge1xuICAgICAgY2FzZSAwOiAvLyBsZWZ0XG4gICAgICAgIHRoaXMuX2J0bnMgfD0gMHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIDE6IC8vIG1pZGRsZVxuICAgICAgICB0aGlzLl9idG5zIHw9IDB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAyOiAvLyByaWdodFxuICAgICAgICB0aGlzLl9idG5zIHw9IDB4MDRcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ21vdXNlLmRvd24nLCB7IHgsIHksIGJ1dHRvbiB9KVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG5cbiAgb25Nb3VzZU1vdmUgKGUpIHtcbiAgICBsZXQgeyB4LCB5LCBidXR0b24gfSA9IHRoaXMuZ2V0RXZlbnRJbmZvKGUpXG5cbiAgICB0aGlzLl94ID0geFxuICAgIHRoaXMuX3kgPSB5XG5cbiAgICB0aGlzLmVtaXQoJ21vdXNlLm1vdmUnLCB7IHgsIHksIGJ1dHRvbiB9KVxuXG4gICAgdGhpcy51cGRhdGUoKVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG5cbiAgb25Nb3VzZVVwIChlKSB7XG4gICAgbGV0IHsgeCwgeSwgYnV0dG9uIH0gPSB0aGlzLmdldEV2ZW50SW5mbyhlKVxuXG4gICAgc3dpdGNoIChidXR0b24pIHtcbiAgICAgIGNhc2UgMDogLy8gbGVmdFxuICAgICAgICB0aGlzLl9idG5zICY9IH4weDAxXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgMTogLy8gbWlkZGxlXG4gICAgICAgIHRoaXMuX2J0bnMgJj0gfjB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAyOiAvLyByaWdodFxuICAgICAgICB0aGlzLl9idG5zICY9IH4weDA0XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdtb3VzZS51cCcsIHsgeCwgeSwgYnV0dG9uIH0pXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL21pY2tleS5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL2Nzc25leHQtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uL25vZGVfbW9kdWxlcy9jc3NuZXh0LWxvYWRlci9pbmRleC5qcyEuL21haW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL2Nzc25leHQtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3R5bGUvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zdHlsZS9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHVCQUErQztFQUMvQyxZQUF5QjtDQUMxQjs7QUFFRDtFQUNFLHdCQUF3QjtDQUN6QlwiLFwiZmlsZVwiOlwibWFpbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoLi9jb2xvcnMuY3NzKTtcXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbmNhbnZhcyB7XFxuICBjdXJzb3I6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L2Nzc25leHQtbG9hZGVyIS4vc3R5bGUvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW87XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbWVtbztcblx0XHR9O1xuXHR9LFxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qoc2VsZi5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuXHR9KSxcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG5cdH0pLFxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2Vcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XG5cdHJldHVybiBsaW5rRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdGlmKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XG5cblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKVxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9