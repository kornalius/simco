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
	
	__webpack_require__(11);
	
	__webpack_require__(12);
	
	var _utils = __webpack_require__(1);
	
	var _globals = __webpack_require__(10);
	
	var _emitter = __webpack_require__(13);
	
	var _memory = __webpack_require__(14);
	
	var _memorymanager = __webpack_require__(16);
	
	var _memorymanager2 = _interopRequireDefault(_memorymanager);
	
	var _interrupt = __webpack_require__(18);
	
	var _interrupt2 = _interopRequireDefault(_interrupt);
	
	var _video = __webpack_require__(19);
	
	var _video2 = _interopRequireDefault(_video);
	
	var _keyboard = __webpack_require__(29);
	
	var _keyboard2 = _interopRequireDefault(_keyboard);
	
	var _mouse = __webpack_require__(30);
	
	var _mouse2 = _interopRequireDefault(_mouse);
	
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
	
	    _this._memory = new _memory.Memory(_this);
	    _this._memoryManager = new _memorymanager2.default(_this);
	    _this._interrupts = new _interrupt2.default(_this);
	
	    _this._video_chip = new _video2.default(_this);
	    _this._keyboard_chip = new _keyboard2.default(_this);
	    _this._mouse_chip = new _mouse2.default(_this);
	
	    _this._onResize = _this.onResize.bind(_this);
	    window.addEventListener('resize', _this._onResize);
	
	    var that = _this;
	    PIXI.ticker.shared.add(function (time) {
	      if (that.status === _RUNNING) {
	        that.tick(time);
	
	        var render = false;
	
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = that._updates.queue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var q = _step.value;
	
	            q.object.__addedToUpdates = false;
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
	          that._video_chip.renderer.render(that._video_chip.stage);
	        }
	      }
	    });
	
	    (0, _utils.async)(_this, _this.start, 100);
	    return _this;
	  }
	
	  _createClass(Main, [{
	    key: 'destroy',
	    value: function destroy() {
	      this._video_chip.destroy();
	      this._keyboard_chip.destroy();
	      this._mouse_chip.destroy();
	      this._interrupts.destroy();
	      this._memoryManager.destroy();
	      this._memory.destroy();
	      _get(Main.prototype.__proto__ || Object.getPrototypeOf(Main.prototype), 'destroy', this).call(this);
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var _this2 = this;
	
	      this._status = 0;
	
	      this._updates = {
	        queue: [],
	
	        add: function add(options) {
	          var o = _.get(options, 'object');
	          if (o && !o.__addedToUpdates) {
	            o.__addedToUpdates = true;
	            _this2._updates.queue.push(options);
	          }
	        },
	
	        remove: function remove(o) {
	          _this2._updates.queue = _.reject(_this2._updates.queue, { object: o });
	          o.__addedToUpdates = false;
	        }
	      };
	
	      // Check for littleEndian
	      var b = new ArrayBuffer(4);
	      var a = new Uint32Array(b);
	      var c = new Uint8Array(b);
	      a[0] = 0xdeadbeef;
	      this.LE = c[0] === 0xef;
	    }
	  }, {
	    key: 'default',
	    value: function _default(name) {
	      return _.get(_globals.defaults, name);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	      this._video_chip.emit('resize');
	      return this;
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
	      this._keyboard_chip.tick(time);
	      this._mouse_chip.tick(time);
	      this._interrupts.tick(time);
	      this._video_chip.tick(time);
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
	    key: 'video_chip',
	    get: function get() {
	      return this._video_chip;
	    }
	  }, {
	    key: 'keyboard_chip',
	    get: function get() {
	      return this._keyboard_chip;
	    }
	  }, {
	    key: 'mouse_chip',
	    get: function get() {
	      return this._mouse_chip;
	    }
	  }, {
	    key: 'stage',
	    get: function get() {
	      return this._video_chip._stage;
	    }
	  }, {
	    key: 'renderer',
	    get: function get() {
	      return this._video_chip._renderer;
	    }
	  }]);
	
	  return Main;
	}(_emitter.Emitter);
	
	var main = exports.main = new Main();
	window.app = main;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.instanceFunctions = exports.instanceFunction = exports.atou = exports.utoa = exports.buffer_dump = exports.hex = exports.normalizeMessages = exports.string_buffer = exports.string_to_buffer = exports.buffer_to_string = exports.async = exports.delay = exports.map_getters_return_this = exports.map_getters = exports.mix = exports.Mixin = exports.now = exports.raf = exports.dirs = exports.IS_LINUX = exports.IS_OSX = exports.IS_WIN = exports.userPath = exports.path = exports.fs = exports.app = exports.BrowserWindow = exports.screen = exports.remote = exports.messageBox = exports.saveFile = exports.openFile = exports.dialog = exports.electron = exports.version = exports.name = exports._ = undefined;
	
	var _path = __webpack_require__(2);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _raf = __webpack_require__(3);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _performanceNow = __webpack_require__(4);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _mixwith = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var electron = __webpack_require__(6);
	var remote = electron.remote,
	    screen = electron.screen,
	    dialog = electron.dialog;
	var app = remote.app,
	    BrowserWindow = remote.BrowserWindow;
	
	
	var _ = __webpack_require__(7);
	_.extend(_, __webpack_require__(8));
	window._ = _;
	
	_.templateSettings.interpolate = /#{([\s\S]+?)}/g;
	
	var fs = __webpack_require__(9);
	
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
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("raf");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("performance-now");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("mixwith");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("underscore-plus");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("fs-promise");

/***/ },
/* 10 */
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
	
	  video: {
	    width: 320,
	    height: 240,
	    scale: 4
	  },
	
	  palette: {
	    count: 16
	  },
	
	  font: {
	    count: 255,
	    width: 4,
	    height: 6
	  },
	
	  text: {
	    width: 320 / 4,
	    height: 240 / 6
	  },
	
	  sprite: {
	    count: 32,
	    width: 16,
	    height: 16
	  },
	
	  keyboard: {
	    count: 255
	  },
	
	  mouse: {
	    count: 255,
	    dblClickDelay: 250,
	    dblClickDistance: 8
	  },
	
	  network: {
	    size: 32 * 1024
	  },
	
	  sound: {
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
/* 11 */
/***/ function(module, exports) {

	module.exports = require("pixi.js");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("web-audio-daw");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Emitter = exports.Event = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(8);
	
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
	
	var _globals = __webpack_require__(10);
	
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
	    this._blocks = [];
	    this._last = 0;
	    this._collect_delay = main.default('memory_manager.collect_delay');
	  }
	
	  _createClass(MemoryManager, [{
	    key: 'reset',
	    value: function reset() {
	      return this.collect();
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
	    key: 'destroy',
	    value: function destroy() {
	      this.collect();
	      this._blocks = [];
	      this._last = 0;
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
	
	var _globals = __webpack_require__(10);
	
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _palette = __webpack_require__(20);
	
	var _palette2 = _interopRequireDefault(_palette);
	
	var _font = __webpack_require__(22);
	
	var _font2 = _interopRequireDefault(_font);
	
	var _text = __webpack_require__(23);
	
	var _text2 = _interopRequireDefault(_text);
	
	var _cursor = __webpack_require__(32);
	
	var _cursor2 = _interopRequireDefault(_cursor);
	
	var _sprite = __webpack_require__(24);
	
	var _sprite2 = _interopRequireDefault(_sprite);
	
	var _overlays = __webpack_require__(25);
	
	var _chip = __webpack_require__(21);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Video = function (_Chip) {
	  _inherits(Video, _Chip);
	
	  function Video(main) {
	    _classCallCheck(this, Video);
	
	    var _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, main));
	
	    _this.init('i8', 'video', ['width', 'height', 'scale']);
	
	    _this._renderer = new PIXI.autoDetectRenderer(_this._width * _this._scale, _this._height * _this._scale, {});
	    _this._renderer.view.style.position = 'absolute';
	    _this._renderer.view.style.cursor = 'none';
	    _this._renderer.view.id = 'video';
	    document.body.appendChild(_this._renderer.view);
	
	    _this._stage = new PIXI.Container();
	    _this._stage.scale = new PIXI.Point(_this._scale, _this._scale);
	
	    _this._onResize = _this.resize.bind(_this);
	    _this.on('resize', _this._onResize);
	
	    _this.async(function () {
	      this._palette_chip = new _palette2.default(main);
	      this._font_chip = new _font2.default(main);
	      this._text_chip = new _text2.default(main);
	      this._cursor_chip = new _cursor2.default(main);
	      this._sprite_chip = new _sprite2.default(main);
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
	
	  _createClass(Video, [{
	    key: 'destroy',
	    value: function destroy() {
	      this.off('resize', this._onResize);
	
	      this._palette_chip.destroy();
	      this._font_chip.destroy();
	      this._text_chip.destroy();
	      this._cursor_chip.destroy();
	      this._sprite_chip.destroy();
	
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
	
	      _get(Video.prototype.__proto__ || Object.getPrototypeOf(Video.prototype), 'destroy', this).call(this);
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      _get(Video.prototype.__proto__ || Object.getPrototypeOf(Video.prototype), 'reset', this).call(this);
	
	      this.clear();
	
	      this._force_update = false;
	      this._force_flip = false;
	
	      this._palette_chip.reset();
	      this._font_chip.reset();
	      this._text_chip.reset();
	      this._cursor_chip.reset();
	      this._sprite_chip.reset();
	      this._overlays.reset();
	
	      return this.resize();
	    }
	  }, {
	    key: 'tick',
	    value: function tick(delta) {
	      this._palette_chip.tick(delta);
	      this._font_chip.tick(delta);
	      this._text_chip.tick(delta);
	      this._cursor_chip.tick(delta);
	      this._sprite_chip.tick(delta);
	
	      if (this._force_update) {
	        this._force_update = false;
	
	        if (this._force_flip) {
	          this.flip();
	        }
	
	        this._renderer.render(this._stage);
	      }
	
	      this._overlays.tick(delta);
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
	      var pal = this._palette_chip;
	
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
	        data[i] = Math.max(0, Math.min(c, this._palette_chip.count - 1));
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
	
	      var tex = PIXI.Texture.fromImage('./build/' + __webpack_require__(26)("./" + filename), undefined, PIXI.SCALE_MODES.NEAREST);
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
	    key: 'palette_chip',
	    get: function get() {
	      return this._palette_chip;
	    }
	  }, {
	    key: 'font_chip',
	    get: function get() {
	      return this._font_chip;
	    }
	  }, {
	    key: 'text_chip',
	    get: function get() {
	      return this._text_chip;
	    }
	  }, {
	    key: 'cursor_chip',
	    get: function get() {
	      return this._cursor_chip;
	    }
	  }, {
	    key: 'sprite_chip',
	    get: function get() {
	      return this._sprite_chip;
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
	
	  return Video;
	}(_chip2.default);
	
	exports.default = Video;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(21);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Palette = function (_Chip) {
	  _inherits(Palette, _Chip);
	
	  function Palette(main) {
	    _classCallCheck(this, Palette);
	
	    var _this = _possibleConstructorReturn(this, (Palette.__proto__ || Object.getPrototypeOf(Palette)).call(this, main));
	
	    _this.init('i32', 'palette', ['count']);
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Palette, [{
	    key: 'reset',
	    value: function reset() {
	      _get(Palette.prototype.__proto__ || Object.getPrototypeOf(Palette.prototype), 'reset', this).call(this);
	
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
	
	  return Palette;
	}(_chip2.default);
	
	exports.default = Palette;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _emitter = __webpack_require__(13);
	
	var _utils = __webpack_require__(1);
	
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
	    value: function tick(delta) {
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
	
	      this.video_chip.force_update = true;
	      this.video_chip.refresh(flip);
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
	    key: 'video_chip',
	    get: function get() {
	      return this._main.video_chip;
	    }
	  }, {
	    key: 'palette_chip',
	    get: function get() {
	      return this.video_chip.palette_chip;
	    }
	  }, {
	    key: 'font_chip',
	    get: function get() {
	      return this.video_chip.font_chip;
	    }
	  }, {
	    key: 'text_chip',
	    get: function get() {
	      return this.video_chip.text_chip;
	    }
	  }, {
	    key: 'cursor_chip',
	    get: function get() {
	      return this.text_chip.cursor_chip;
	    }
	  }, {
	    key: 'sprite_chip',
	    get: function get() {
	      return this.video_chip.sprite_chip;
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _chip = __webpack_require__(21);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Font = function (_Chip) {
	  _inherits(Font, _Chip);
	
	  function Font(main) {
	    _classCallCheck(this, Font);
	
	    var _this = _possibleConstructorReturn(this, (Font.__proto__ || Object.getPrototypeOf(Font)).call(this, main));
	
	    _this.init('i8', 'font', ['count', 'width', 'height']);
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Font, [{
	    key: 'draw',
	    value: function draw(x, y, c) {
	      var fg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	      var bg = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	
	      var w = this._width;
	      var h = this._height;
	      var sz = this._size;
	      var data = this._data;
	      var video = this.video_chip;
	
	      var ptr = this._top + c * sz;
	      for (var by = 0; by < h; by++) {
	        var pi = (y + by) * w + x;
	        for (var bx = 0; bx < w; bx++) {
	          video.pixel(pi++, data[ptr++] ? fg : bg);
	        }
	      }
	
	      return this.update();
	    }
	  }]);
	
	  return Font;
	}(_chip2.default);
	
	exports.default = Font;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _chip = __webpack_require__(21);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Text = function (_Chip) {
	  _inherits(Text, _Chip);
	
	  function Text(main) {
	    _classCallCheck(this, Text);
	
	    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, main));
	
	    _this.init(3, 'text', ['width', 'height']);
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Text, [{
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
	      var fnt = this.font_chip;
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
	      var fnt = this.font_chip;
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
	
	      this.cursor_chip.x++;
	      if (this.cursor_chip.x > this._width) {
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
	      return { x: this.cursor_chip.x, y: this.cursor_chip.y };
	    }
	  }, {
	    key: 'move_to',
	    value: function move_to(x, y) {
	      return this.cursor_chip.move_to(x, y);
	    }
	  }, {
	    key: 'move_by',
	    value: function move_by(x, y) {
	      return this.cursor_chip.move_by(x, y);
	    }
	  }, {
	    key: 'bol',
	    value: function bol() {
	      return this.move_to(1, this.cursor_chip.y);
	    }
	  }, {
	    key: 'eol',
	    value: function eol() {
	      return this.move_to(this._width, this.cursor_chip.y);
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
	      return this.move_to(1, this.cursor_chip.y + 1);
	    }
	  }, {
	    key: 'lf',
	    value: function lf() {
	      return this.move_to(this.cursor_chip.x, this.cursor_chip.y + 1);
	    }
	  }, {
	    key: 'up',
	    value: function up() {
	      return this.move_to(this.cursor_chip.x, this.cursor_chip.y - 1);
	    }
	  }, {
	    key: 'left',
	    value: function left() {
	      return this.move_to(this.cursor_chip.x - 1, this.cursor_chip.y);
	    }
	  }, {
	    key: 'down',
	    value: function down() {
	      return this.move_to(this.cursor_chip.x, this.cursor_chip.y + 1);
	    }
	  }, {
	    key: 'right',
	    value: function right() {
	      return this.move_to(this.cursor_chip.x + 1, this.cursor_chip.y);
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
	
	  return Text;
	}(_chip2.default);
	
	exports.default = Text;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(21);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Sprite = function (_Chip) {
	  _inherits(Sprite, _Chip);
	
	  function Sprite(main) {
	    _classCallCheck(this, Sprite);
	
	    var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this, main));
	
	    _this._list = [];
	
	    _this.init('i8', 'sprite', ['count', 'width', 'height']);
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Sprite, [{
	    key: 'clear',
	    value: function clear() {
	      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      this._list = [];
	      return _get(Sprite.prototype.__proto__ || Object.getPrototypeOf(Sprite.prototype), 'clear', this).call(this, v);
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
	      var video = this.video_chip;
	
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
	              video.pixel(pi++, data[ptr++]);
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
	
	  return Sprite;
	}(_chip2.default);
	
	exports.default = Sprite;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Overlays = exports.CrtOverlay = exports.RgbOverlay = exports.NoisesOverlay = exports.ScanlineOverlay = exports.ScanlinesOverlay = exports.ScreenOverlay = exports.Overlay = undefined;
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(8);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Overlay = exports.Overlay = function () {
	  function Overlay(video, width, height) {
	    _classCallCheck(this, Overlay);
	
	    this.video = video;
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
	      this.video.force_update = true;
	    }
	  }]);
	
	  return Overlay;
	}();
	
	var ScreenOverlay = exports.ScreenOverlay = function (_Overlay) {
	  _inherits(ScreenOverlay, _Overlay);
	
	  function ScreenOverlay(video, width, height, options) {
	    _classCallCheck(this, ScreenOverlay);
	
	    var _this = _possibleConstructorReturn(this, (ScreenOverlay.__proto__ || Object.getPrototypeOf(ScreenOverlay)).call(this, video, width, height));
	
	    _this.create();
	
	    _this.sprite.x = _this.video.offset_x + _this.video.margins_x / 2;
	    _this.sprite.y = _this.video.offset_y + _this.video.margins_y / 2;
	    return _this;
	  }
	
	  return ScreenOverlay;
	}(Overlay);
	
	var ScanlinesOverlay = exports.ScanlinesOverlay = function (_Overlay2) {
	  _inherits(ScanlinesOverlay, _Overlay2);
	
	  function ScanlinesOverlay(video, width, height, options) {
	    _classCallCheck(this, ScanlinesOverlay);
	
	    var _this2 = _possibleConstructorReturn(this, (ScanlinesOverlay.__proto__ || Object.getPrototypeOf(ScanlinesOverlay)).call(this, video, width, height));
	
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
	
	  function ScanlineOverlay(video, width, height, options) {
	    _classCallCheck(this, ScanlineOverlay);
	
	    var _this3 = _possibleConstructorReturn(this, (ScanlineOverlay.__proto__ || Object.getPrototypeOf(ScanlineOverlay)).call(this, video, width, height));
	
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
	
	  function NoisesOverlay(video, width, height, options) {
	    _classCallCheck(this, NoisesOverlay);
	
	    var _this4 = _possibleConstructorReturn(this, (NoisesOverlay.__proto__ || Object.getPrototypeOf(NoisesOverlay)).call(this, video, width, height));
	
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
	      var noise = new Overlay(_this4.video, _this4.width, _this4.height);
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
	      _this4.video._main.stage.addChild(noise.sprite);
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
	
	  function RgbOverlay(video, width, height, options) {
	    _classCallCheck(this, RgbOverlay);
	
	    var _this5 = _possibleConstructorReturn(this, (RgbOverlay.__proto__ || Object.getPrototypeOf(RgbOverlay)).call(this, video, width, height));
	
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
	
	  function CrtOverlay(video, width, height, options) {
	    _classCallCheck(this, CrtOverlay);
	
	    var _this6 = _possibleConstructorReturn(this, (CrtOverlay.__proto__ || Object.getPrototypeOf(CrtOverlay)).call(this, video, width, height));
	
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
	      var tex = PIXI.Texture.fromImage('./build/' + __webpack_require__(33));
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./crt.png": 27,
		"./test.png": 28
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
	webpackContext.id = 26;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/crt.png";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/test.png";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(21);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Keyboard = function (_Chip) {
	  _inherits(Keyboard, _Chip);
	
	  function Keyboard(main) {
	    _classCallCheck(this, Keyboard);
	
	    var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, main));
	
	    _this.init('i32', 'keyboard', ['count']);
	
	    _this._onKeydown = _this.onKeydown.bind(_this);
	    _this._onKeyup = _this.onKeyup.bind(_this);
	
	    window.addEventListener('keydown', _this._onKeydown);
	    window.addEventListener('keyup', _this._onKeyup);
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Keyboard, [{
	    key: 'reset',
	    value: function reset() {
	      _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), 'reset', this).call(this);
	
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
	      _get(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), 'destroy', this).call(this);
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
	
	  return Keyboard;
	}(_chip2.default);
	
	exports.default = Keyboard;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(21);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Mouse = function (_Chip) {
	  _inherits(Mouse, _Chip);
	
	  function Mouse(main) {
	    _classCallCheck(this, Mouse);
	
	    var _this = _possibleConstructorReturn(this, (Mouse.__proto__ || Object.getPrototypeOf(Mouse)).call(this, main));
	
	    _this.init('i32', 'mouse', ['count', 'dblClickDelay', 'dblClickDistance']);
	
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
	
	  _createClass(Mouse, [{
	    key: 'reset',
	    value: function reset() {
	      _get(Mouse.prototype.__proto__ || Object.getPrototypeOf(Mouse.prototype), 'reset', this).call(this);
	
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
	      _get(Mouse.prototype.__proto__ || Object.getPrototypeOf(Mouse.prototype), 'destroy', this).call(this);
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
	
	  return Mouse;
	}(_chip2.default);
	
	exports.default = Mouse;

/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _chip = __webpack_require__(21);
	
	var _chip2 = _interopRequireDefault(_chip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Cursor = function (_Chip) {
	  _inherits(Cursor, _Chip);
	
	  function Cursor(main) {
	    _classCallCheck(this, Cursor);
	
	    var _this = _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call(this, main));
	
	    _this._width = _this.font_chip.width;
	    _this._height = _this.font_chip.height;
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Cursor, [{
	    key: 'reset',
	    value: function reset() {
	      _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'reset', this).call(this);
	      this._x = 0;
	      this._y = 0;
	      this._color = this.palette_chip.white;
	      return this;
	    }
	  }, {
	    key: 'move_to',
	    value: function move_to(x, y) {
	      var w = this.text_chip.width;
	      var h = this.text_chip.height;
	
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
	      var video = this.video_chip;
	
	      for (var by = 0; by < h; by++) {
	        var pi = (y + by) * w + x;
	        for (var bx = 0; bx < w; bx++) {
	          video.pixel(pi++, c);
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
	  }]);
	
	  return Cursor;
	}(_chip2.default);
	
	exports.default = Cursor;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/assets/imgs//crt.png";

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGExYTQ1OTQ3MWNiY2NkNjUwYjMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYWZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwZXJmb3JtYW5jZS1ub3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtaXh3aXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlLXBsdXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGl4aS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYi1hdWRpby1kYXdcIiIsIndlYnBhY2s6Ly8vLi9hcHAvZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vbWVtb3J5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImhleHlcIiIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vbWVtb3J5bWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmV0dHktYnl0ZXNcIiIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vaW50ZXJydXB0LmpzIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy92aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvcGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvY2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvZm9udC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvc3ByaXRlLmpzIiwid2VicGFjazovLy8uL2FwcC92bS9vdmVybGF5cy5qcyIsIndlYnBhY2s6Ly8vXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1ncy9jcnQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWdzL3Rlc3QucG5nIiwid2VicGFjazovLy8uL2FwcC92bS9jaGlwcy9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdm0vY2hpcHMvbW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3ZtL2NoaXBzL2N1cnNvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1ncy9jcnQucG5nPzNlODIiXSwibmFtZXMiOlsiX1NUT1BQRUQiLCJfUlVOTklORyIsIl9QQVVTRUQiLCJNYWluIiwib3B0aW9ucyIsInJlc2V0IiwiX21lbW9yeSIsIl9tZW1vcnlNYW5hZ2VyIiwiX2ludGVycnVwdHMiLCJfdmlkZW9fY2hpcCIsIl9rZXlib2FyZF9jaGlwIiwiX21vdXNlX2NoaXAiLCJfb25SZXNpemUiLCJvblJlc2l6ZSIsImJpbmQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidGhhdCIsIlBJWEkiLCJ0aWNrZXIiLCJzaGFyZWQiLCJhZGQiLCJzdGF0dXMiLCJ0aWNrIiwidGltZSIsInJlbmRlciIsIl91cGRhdGVzIiwicXVldWUiLCJxIiwib2JqZWN0IiwiX19hZGRlZFRvVXBkYXRlcyIsImNiIiwiYXJncyIsInJlbmRlcmVyIiwic3RhZ2UiLCJzdGFydCIsImRlc3Ryb3kiLCJfc3RhdHVzIiwibyIsIl8iLCJnZXQiLCJwdXNoIiwicmVtb3ZlIiwicmVqZWN0IiwiYiIsIkFycmF5QnVmZmVyIiwiYSIsIlVpbnQzMkFycmF5IiwiYyIsIlVpbnQ4QXJyYXkiLCJMRSIsIm5hbWUiLCJlbWl0IiwidGVzdCIsInZhbHVlIiwiX3N0YWdlIiwiX3JlbmRlcmVyIiwibWFpbiIsImFwcCIsImVsZWN0cm9uIiwicmVxdWlyZSIsInJlbW90ZSIsInNjcmVlbiIsImRpYWxvZyIsIkJyb3dzZXJXaW5kb3ciLCJleHRlbmQiLCJ0ZW1wbGF0ZVNldHRpbmdzIiwiaW50ZXJwb2xhdGUiLCJmcyIsIk1peGluIiwibWl4IiwidXNlclBhdGgiLCJqb2luIiwiZ2V0QXBwUGF0aCIsImV4aXN0c1N5bmMiLCJta2RpcnMiLCJJU19XSU4iLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJJU19PU1giLCJJU19MSU5VWCIsImRpcnMiLCJidWlsZCIsIl9fZGlybmFtZSIsImN3ZCIsImhvbWUiLCJnZXRQYXRoIiwidXNlciIsInRtcCIsInJvb3QiLCJub2RlX21vZHVsZXMiLCJ1c2VyX3BrZyIsImdldE5hbWUiLCJ2ZXJzaW9uIiwiZ2V0VmVyc2lvbiIsIm9wZW5GaWxlIiwic2hvd09wZW5EaWFsb2ciLCJhcHBseSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInNhdmVGaWxlIiwic2hvd1NhdmVEaWFsb2ciLCJtZXNzYWdlQm94Iiwic2hvd01lc3NhZ2VCb3giLCJtYXBfZ2V0dGVycyIsInNvdXJjZSIsInRhcmdldCIsImRlZnMiLCJrIiwiZm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNhbGwiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwibWFwX2dldHRlcnNfcmV0dXJuX3RoaXMiLCJub3ciLCJkZWxheSIsInQiLCJtcyIsImFzeW5jIiwiY29udGV4dCIsImlzTnVtYmVyIiwiaXNBcnJheSIsInNldFRpbWVvdXQiLCJidWZmZXJfdG9fc3RyaW5nIiwibGVuIiwibGVuZ3RoIiwiaSIsInMiLCJ0b1N0cmluZyIsInN0cmluZ190b19idWZmZXIiLCJzdHIiLCJCdWZmZXIiLCJNYXRoIiwidHJ1bmMiLCJ4IiwiaGV4Iiwic3Vic3RyIiwicGFyc2VJbnQiLCJzdHJpbmdfYnVmZmVyIiwid3JpdGUiLCJub3JtYWxpemVNZXNzYWdlcyIsIm1lc3NhZ2UiLCJtIiwiaXNTdHJpbmciLCJzaXplIiwicGFkU3RhcnQiLCJidWZmZXJfZHVtcCIsImJ1ZmZlciIsIndpZHRoIiwiY2FwcyIsImluZGVudCIsInJlcGVhdCIsInplcm8iLCJuIiwibWF4IiwidG9VcHBlckNhc2UiLCJtaW4iLCJieXRlTGVuZ3RoIiwicm93cyIsImNlaWwiLCJsYXN0Iiwib2Zmc2V0TGVuZ3RoIiwiYXJyIiwibGFzdEJ5dGVzIiwibGFzdFNwYWNlcyIsImoiLCJ2IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwidXRvYSIsImJ0b2EiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImF0b3UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlc2NhcGUiLCJhdG9iIiwiaW5zdGFuY2VGdW5jdGlvbiIsImZvcmNlIiwiaGFzT3duUHJvcGVydHkiLCJ3cml0YWJsZSIsImluc3RhbmNlRnVuY3Rpb25zIiwibmFtZXMiLCJwYXRoIiwicmFmIiwiUG9pbnQiLCJwcm90b3R5cGUiLCJkaXN0YW5jZSIsInNxcnQiLCJ5IiwidGVtcGxhdGUiLCJSZWN0YW5nbGUiLCJkZWZhdWx0cyIsImJvdW5kc2NoZWNrIiwidHlwZSIsIm1lbW9yeSIsIm1lbW9yeV9tYW5hZ2VyIiwiY29sbGVjdF9kZWxheSIsInZpZGVvIiwiaGVpZ2h0Iiwic2NhbGUiLCJwYWxldHRlIiwiY291bnQiLCJmb250IiwidGV4dCIsInNwcml0ZSIsImtleWJvYXJkIiwibW91c2UiLCJkYmxDbGlja0RlbGF5IiwiZGJsQ2xpY2tEaXN0YW5jZSIsIm5ldHdvcmsiLCJzb3VuZCIsImVycm9ycyIsIm1zZyIsInJvdyIsImNvbCIsInJ1bnRpbWVfZXJyb3IiLCJlIiwiY29kZSIsImlvX2Vycm9yIiwiRXZlbnQiLCJkYXRhIiwiYnViYmxlcyIsIl9fZXZlbnRPYmplY3QiLCJ0aW1lU3RhbXAiLCJwZXJmb3JtYW5jZSIsInN0b3BwZWQiLCJzdG9wcGVkSW1tZWRpYXRlIiwiZGVmYXVsdFByZXZlbnRlZCIsIkVtaXR0ZXIiLCJvcmRlciIsIl9saXN0ZW5lcnMiLCJzb3J0QnkiLCJvbmNlSGFuZGxlcldyYXBwZXIiLCJvZmYiLCJfb3JpZ2luYWxIYW5kbGVyIiwib24iLCJsaXN0Iiwic3BsaWNlIiwiaXNFbXB0eSIsIm9yaWdFdmVudERhdGEiLCJsaXN0ZW5lcnMiLCJjbG9uZSIsImwiLCJjYW5jZWxCdWJibGUiLCJwYXJlbnQiLCJkYXRhX3R5cGVfc2l6ZXMiLCJpOCIsInM4IiwiaTE2IiwiczE2IiwiaTMyIiwiczMyIiwiZjMyIiwiZGF0YV90eXBlX2ZucyIsImRhdGFfdHlwZV9zaXplIiwiTWVtb3J5IiwiX3NpemUiLCJkZWZhdWx0IiwiX3RvcCIsIl9ib3R0b20iLCJfYnVmZmVyIiwiX2RhdGEiLCJfdmlldyIsIkRhdGFWaWV3IiwiX2ZucyIsImNsZWFyIiwiZCIsImZpbGwiLCJhZGRyIiwic3oiLCJobHQiLCJjaGtfYm91bmRzIiwiZGIiLCJfdm0iLCJsaXR0bGVFbmRpYW4iLCJsZCIsInN0Iiwic2xpY2UiLCJsZGwiLCJib3R0b20iLCJtZW0iLCJsZHMiLCJzZXQiLCJzdWJhcnJheSIsInN0bCIsIm1hcCIsInNwbGl0IiwiY2hhckNvZGVBdCIsInN0cyIsInRvcCIsInNyYyIsInRndCIsImNvcHlXaXRoaW4iLCJjb3B5IiwibG9nIiwiaGV4eSIsIm9mZnNldCIsIl9tYWluIiwiTWVtb3J5TWFuYWdlciIsIl9ibG9ja3MiLCJfbGFzdCIsIl9jb2xsZWN0X2RlbGF5IiwiY29sbGVjdCIsInVzZWQiLCJvYiIsImF2YWlsX21lbSIsIl9hbGxvYyIsImJsb2NrIiwidXNlZF9tZW0iLCJmcmVlX21lbSIsIm1lbV9idWZmZXIiLCJfSU5UX1JVTk5JTkciLCJfSU5UX1BBVVNFRCIsIkludGVycnVwdCIsIl9saXN0Iiwic3RvcF9hbGwiLCJmaW5kIiwic3RvcCIsIlZpZGVvIiwiaW5pdCIsImF1dG9EZXRlY3RSZW5kZXJlciIsIl93aWR0aCIsIl9zY2FsZSIsIl9oZWlnaHQiLCJ2aWV3Iiwic3R5bGUiLCJwb3NpdGlvbiIsImN1cnNvciIsImlkIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJDb250YWluZXIiLCJyZXNpemUiLCJfcGFsZXR0ZV9jaGlwIiwiX2ZvbnRfY2hpcCIsIl90ZXh0X2NoaXAiLCJfY3Vyc29yX2NoaXAiLCJfc3ByaXRlX2NoaXAiLCJfb3ZlcmxheXMiLCJzY2FubGluZXMiLCJzY2FubGluZSIsInJnYiIsIm5vaXNlcyIsImNydCIsIm1vbml0b3IiLCJfc3ByaXRlIiwiX3RleHR1cmUiLCJfY2FudmFzIiwiX2ZvcmNlX3VwZGF0ZSIsIl9mb3JjZV9mbGlwIiwiZGVsdGEiLCJmbGlwIiwicGl4ZWxzIiwiX3BpeGVscyIsInBhbCIsIl9jb250ZXh0IiwicHV0SW1hZ2VEYXRhIiwiX2ltYWdlRGF0YSIsImxlZnQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ0ZXh0dXJlIiwiY3JlYXRlRWxlbWVudCIsImRpc3BsYXkiLCJUZXh0dXJlIiwiZnJvbUNhbnZhcyIsIlNDQUxFX01PREVTIiwiTkVBUkVTVCIsIlNwcml0ZSIsImdldENvbnRleHQiLCJhbHBoYSIsImFudGlhbGlhcyIsImNsZWFyUmVjdCIsImdldEltYWdlRGF0YSIsImNlbnRlciIsInVuZGVmaW5lZCIsImx3IiwidXBkYXRlIiwiZmlsZW5hbWUiLCJ0ZXgiLCJmcm9tSW1hZ2UiLCJyZW1vdmVDaGlsZHJlbiIsImxvYWRUZXh0dXJlIiwiYWRkQ2hpbGQiLCJUZXh0IiwiYmFzZVRleHR1cmUiLCJzY2FsZU1vZGUiLCJjYW52YXMiLCJpbWFnZVNtb290aGluZ0VuYWJsZWQiLCJ1cGRhdGVUZXh0IiwicmVtb3ZlQ2hpbGQiLCJQYWxldHRlIiwiQ2hpcCIsImRhdGFfc2l6ZSIsImtleXMiLCJub2RhdGEiLCJfY291bnQiLCJyZWZyZXNoIiwidmlkZW9fY2hpcCIsImZvcmNlX3VwZGF0ZSIsInBhbGV0dGVfY2hpcCIsImZvbnRfY2hpcCIsInRleHRfY2hpcCIsImN1cnNvcl9jaGlwIiwic3ByaXRlX2NoaXAiLCJGb250IiwiZmciLCJiZyIsInciLCJoIiwicHRyIiwiYnkiLCJwaSIsImJ4IiwicGl4ZWwiLCJjaCIsImZudCIsImZ3IiwiZmgiLCJpZHgiLCJweSIsImRyYXciLCJlbmQiLCJ0aWR4IiwiaW5kZXgiLCJjciIsImJzIiwicG9zIiwiZHJhd19jaGFyIiwicHV0X2NoYXIiLCJtb3ZlX3RvIiwibW92ZV9ieSIsInN5IiwidHkiLCJzaSIsImxpbmUiLCJzeCIsInR4IiwibHMiLCJkeSIsImZyYW1lIiwieiIsIk51bWJlciIsIk1BWF9WQUxVRSIsInN3Iiwic2giLCJzbCIsInNzIiwiT3ZlcmxheSIsIkNhbnZhc0J1ZmZlciIsIlNjcmVlbk92ZXJsYXkiLCJjcmVhdGUiLCJvZmZzZXRfeCIsIm1hcmdpbnNfeCIsIm9mZnNldF95IiwibWFyZ2luc195IiwiU2NhbmxpbmVzT3ZlcmxheSIsImdhcCIsIlNjYW5saW5lT3ZlcmxheSIsInNwZWVkIiwiYWEiLCJOb2lzZXNPdmVybGF5IiwicmF0ZSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsIm5vaXNlIiwidmlzaWJsZSIsInIiLCJnIiwiX3JhdGUiLCJyYW5kb20iLCJub2lzZUtleXMiLCJSZ2JPdmVybGF5IiwiQ3J0T3ZlcmxheSIsInJhZGl1cyIsImluc2lkZV9hbHBoYSIsIm91dHNpZGVfYWxwaGEiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJPdmVybGF5cyIsIktleWJvYXJkIiwiX29uS2V5ZG93biIsIm9uS2V5ZG93biIsIl9vbktleXVwIiwib25LZXl1cCIsIl9tb2RzIiwiX2pveXN0aWNrIiwiX2tleXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwia2V5Iiwia2V5Q29kZSIsIm1vZHMiLCJqb3lzdGljayIsInNoaWZ0IiwiY3RybCIsImFsdCIsIm1ldGEiLCJudW1wYWQiLCJidG4wIiwiYnRuMSIsImJ0bjIiLCJidG4zIiwiYnRuNCIsInVwIiwiZG93biIsInJpZ2h0IiwibG9jYXRpb24iLCJldmVudERldGFpbHMiLCJzdG9wUHJvcGFnYXRpb24iLCJNb3VzZSIsImludGVyYWN0aXZlIiwiX29uTW91c2VEb3duIiwib25Nb3VzZURvd24iLCJfb25Nb3VzZU1vdmUiLCJvbk1vdXNlTW92ZSIsIl9vbk1vdXNlVXAiLCJvbk1vdXNlVXAiLCJfeCIsIl95IiwiX2J0bnMiLCJnbG9iYWwiLCJidXR0b24iLCJvcmlnaW5hbEV2ZW50IiwiZ2V0RXZlbnRJbmZvIiwiX2RibENsaWNrRGVsYXkiLCJfZGJsQ2xpY2tEaXN0YW5jZSIsIkN1cnNvciIsIl9jb2xvciIsIndoaXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFTQTs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQWRBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQVdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPLEtBQU1BLDhCQUFXLENBQWpCO0FBQ0EsS0FBTUMsOEJBQVcsQ0FBakI7QUFDQSxLQUFNQyw0QkFBVSxDQUFoQjs7S0FFTUMsSSxXQUFBQSxJOzs7QUFFWCxpQkFBYUMsT0FBYixFQUFzQjtBQUFBOztBQUFBOztBQUdwQixXQUFLQyxLQUFMOztBQUVBLFdBQUtDLE9BQUwsR0FBZSx5QkFBZjtBQUNBLFdBQUtDLGNBQUwsR0FBc0Isa0NBQXRCO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQiw4QkFBbkI7O0FBRUEsV0FBS0MsV0FBTCxHQUFtQiwwQkFBbkI7QUFDQSxXQUFLQyxjQUFMLEdBQXNCLDZCQUF0QjtBQUNBLFdBQUtDLFdBQUwsR0FBbUIs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XHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0YTFhNDU5NDcxY2JjY2Q2NTBiMyIsImltcG9ydCAncGl4aS5qcydcbmltcG9ydCAnd2ViLWF1ZGlvLWRhdydcblxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tICcuL3V0aWxzLmpzJ1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL2dsb2JhbHMuanMnXG5cbi8vIGltcG9ydCBjc3MgZnJvbSAnLi4vc3R5bGUvbWFpbi5jc3MnXG4vLyBpbXBvcnQgdCBmcm9tICcuLi9odG1sL21haW4uaHRtbCdcblxuLy8gbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vIGVsLmlubmVySFRNTCA9IHRcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG5cbmltcG9ydCB7IEVtaXR0ZXIgfSBmcm9tICcuL2VtaXR0ZXIuanMnXG5cbmltcG9ydCB7IE1lbW9yeSB9IGZyb20gJy4vdm0vbWVtb3J5LmpzJ1xuaW1wb3J0IE1lbW9yeU1hbmFnZXIgZnJvbSAnLi92bS9tZW1vcnltYW5hZ2VyLmpzJ1xuaW1wb3J0IEludGVycnVwdCBmcm9tICcuL3ZtL2ludGVycnVwdC5qcydcbmltcG9ydCBWaWRlbyBmcm9tICcuL3ZtL2NoaXBzL3ZpZGVvLmpzJ1xuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4vdm0vY2hpcHMva2V5Ym9hcmQuanMnXG5pbXBvcnQgTW91c2UgZnJvbSAnLi92bS9jaGlwcy9tb3VzZS5qcydcblxuLy8gaW1wb3J0IHsgVk0gfSBmcm9tICcuL2ludGVycHJldGVyL3ZtLmpzJ1xuXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgbGV0IHNyYyA9IHJlcXVpcmUoJ3JhdyEuLi90ZXN0L3Rlc3QxLngzMicpXG4vLyAgIGNvbnNvbGUubG9nKHNyYylcblxuLy8gICBsZXQgdm0gPSBuZXcgVk0oKVxuLy8gICB2bS5sb2FkKHNyYylcbi8vICAgdm0ucnVuKClcbi8vICAgdm0uZHVtcCgpXG4vLyB9LCAxMDApXG5cbi8vIGNvbnNvbGUubG9nKGhleHkuaGV4eSh2bS5tZW1fYnVmZmVyLCB7IG9mZnNldDogMCwgbGVuZ3RoOiA1MTIsIGRpc3BsYXlfb2Zmc2V0OiAweDAwLCB3aWR0aDogMTYsIGNhcHM6ICd1cHBlcicsIGluZGVudDogMiB9KSlcblxuZXhwb3J0IGNvbnN0IF9TVE9QUEVEID0gMFxuZXhwb3J0IGNvbnN0IF9SVU5OSU5HID0gMVxuZXhwb3J0IGNvbnN0IF9QQVVTRUQgPSAyXG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgRW1pdHRlciB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnJlc2V0KClcblxuICAgIHRoaXMuX21lbW9yeSA9IG5ldyBNZW1vcnkodGhpcylcbiAgICB0aGlzLl9tZW1vcnlNYW5hZ2VyID0gbmV3IE1lbW9yeU1hbmFnZXIodGhpcylcbiAgICB0aGlzLl9pbnRlcnJ1cHRzID0gbmV3IEludGVycnVwdCh0aGlzKVxuXG4gICAgdGhpcy5fdmlkZW9fY2hpcCA9IG5ldyBWaWRlbyh0aGlzKVxuICAgIHRoaXMuX2tleWJvYXJkX2NoaXAgPSBuZXcgS2V5Ym9hcmQodGhpcylcbiAgICB0aGlzLl9tb3VzZV9jaGlwID0gbmV3IE1vdXNlKHRoaXMpXG5cbiAgICB0aGlzLl9vblJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vblJlc2l6ZSlcblxuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIFBJWEkudGlja2VyLnNoYXJlZC5hZGQodGltZSA9PiB7XG4gICAgICBpZiAodGhhdC5zdGF0dXMgPT09IF9SVU5OSU5HKSB7XG4gICAgICAgIHRoYXQudGljayh0aW1lKVxuXG4gICAgICAgIGxldCByZW5kZXIgPSBmYWxzZVxuXG4gICAgICAgIGZvciAobGV0IHEgb2YgdGhhdC5fdXBkYXRlcy5xdWV1ZSkge1xuICAgICAgICAgIHEub2JqZWN0Ll9fYWRkZWRUb1VwZGF0ZXMgPSBmYWxzZVxuICAgICAgICAgIGlmIChxLnJlbmRlcikge1xuICAgICAgICAgICAgcmVuZGVyID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocS5jYikge1xuICAgICAgICAgICAgcS5jYihxLm9iamVjdCwgLi4uKHEuYXJncyB8fCBbXSkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhhdC5fdXBkYXRlcy5xdWV1ZSA9IFtdXG5cbiAgICAgICAgaWYgKHJlbmRlcikge1xuICAgICAgICAgIHRoYXQuX3ZpZGVvX2NoaXAucmVuZGVyZXIucmVuZGVyKHRoYXQuX3ZpZGVvX2NoaXAuc3RhZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYXN5bmModGhpcywgdGhpcy5zdGFydCwgMTAwKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fdmlkZW9fY2hpcC5kZXN0cm95KClcbiAgICB0aGlzLl9rZXlib2FyZF9jaGlwLmRlc3Ryb3koKVxuICAgIHRoaXMuX21vdXNlX2NoaXAuZGVzdHJveSgpXG4gICAgdGhpcy5faW50ZXJydXB0cy5kZXN0cm95KClcbiAgICB0aGlzLl9tZW1vcnlNYW5hZ2VyLmRlc3Ryb3koKVxuICAgIHRoaXMuX21lbW9yeS5kZXN0cm95KClcbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSAwXG5cbiAgICB0aGlzLl91cGRhdGVzID0ge1xuICAgICAgcXVldWU6IFtdLFxuXG4gICAgICBhZGQ6IG9wdGlvbnMgPT4ge1xuICAgICAgICBsZXQgbyA9IF8uZ2V0KG9wdGlvbnMsICdvYmplY3QnKVxuICAgICAgICBpZiAobyAmJiAhby5fX2FkZGVkVG9VcGRhdGVzKSB7XG4gICAgICAgICAgby5fX2FkZGVkVG9VcGRhdGVzID0gdHJ1ZVxuICAgICAgICAgIHRoaXMuX3VwZGF0ZXMucXVldWUucHVzaChvcHRpb25zKVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IG8gPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVzLnF1ZXVlID0gXy5yZWplY3QodGhpcy5fdXBkYXRlcy5xdWV1ZSwgeyBvYmplY3Q6IG8gfSlcbiAgICAgICAgby5fX2FkZGVkVG9VcGRhdGVzID0gZmFsc2VcbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpdHRsZUVuZGlhblxuICAgIGxldCBiID0gbmV3IEFycmF5QnVmZmVyKDQpXG4gICAgbGV0IGEgPSBuZXcgVWludDMyQXJyYXkoYilcbiAgICBsZXQgYyA9IG5ldyBVaW50OEFycmF5KGIpXG4gICAgYVswXSA9IDB4ZGVhZGJlZWZcbiAgICB0aGlzLkxFID0gY1swXSA9PT0gMHhlZlxuICB9XG5cbiAgZGVmYXVsdCAobmFtZSkgeyByZXR1cm4gXy5nZXQoZGVmYXVsdHMsIG5hbWUpIH1cblxuICBnZXQgc3RhdHVzICgpIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyB9XG4gIHNldCBzdGF0dXMgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX3N0YXR1cyAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgZ2V0IG1lbW9yeSAoKSB7IHJldHVybiB0aGlzLl9tZW1vcnkgfVxuICBnZXQgbWVtb3J5TWFuYWdlciAoKSB7IHJldHVybiB0aGlzLl9tZW1vcnlNYW5hZ2VyIH1cbiAgZ2V0IGludGVycnVwdHMgKCkgeyByZXR1cm4gdGhpcy5faW50ZXJydXB0cyB9XG5cbiAgZ2V0IHVwZGF0ZXMgKCkgeyByZXR1cm4gdGhpcy5fdXBkYXRlcyB9XG5cbiAgZ2V0IHZpZGVvX2NoaXAgKCkgeyByZXR1cm4gdGhpcy5fdmlkZW9fY2hpcCB9XG4gIGdldCBrZXlib2FyZF9jaGlwICgpIHsgcmV0dXJuIHRoaXMuX2tleWJvYXJkX2NoaXAgfVxuICBnZXQgbW91c2VfY2hpcCAoKSB7IHJldHVybiB0aGlzLl9tb3VzZV9jaGlwIH1cblxuICBnZXQgc3RhZ2UgKCkgeyByZXR1cm4gdGhpcy5fdmlkZW9fY2hpcC5fc3RhZ2UgfVxuICBnZXQgcmVuZGVyZXIgKCkgeyByZXR1cm4gdGhpcy5fdmlkZW9fY2hpcC5fcmVuZGVyZXIgfVxuXG4gIG9uUmVzaXplICgpIHtcbiAgICB0aGlzLl92aWRlb19jaGlwLmVtaXQoJ3Jlc2l6ZScpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ICgpIHtcbiAgICB0aGlzLnN0YXR1cyA9IF9SVU5OSU5HXG4gICAgdGhpcy50ZXN0KClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RvcCAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBfU1RPUFBFRFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBfUEFVU0VEXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc3VtZSAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBfUlVOTklOR1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0aWNrICh0aW1lKSB7XG4gICAgdGhpcy5fbWVtb3J5LnRpY2sodGltZSlcbiAgICB0aGlzLl9tZW1vcnlNYW5hZ2VyLnRpY2sodGltZSlcbiAgICB0aGlzLl9rZXlib2FyZF9jaGlwLnRpY2sodGltZSlcbiAgICB0aGlzLl9tb3VzZV9jaGlwLnRpY2sodGltZSlcbiAgICB0aGlzLl9pbnRlcnJ1cHRzLnRpY2sodGltZSlcbiAgICB0aGlzLl92aWRlb19jaGlwLnRpY2sodGltZSlcbiAgfVxuXG4gIHRlc3QgKCkge1xuICB9XG5cbn1cblxuZXhwb3J0IGxldCBtYWluID0gbmV3IE1haW4oKVxud2luZG93LmFwcCA9IG1haW5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9tYWluLmpzIiwiY29uc3QgZWxlY3Ryb24gPSByZXF1aXJlKCdlbGVjdHJvbicpXG5jb25zdCB7IHJlbW90ZSwgc2NyZWVuLCBkaWFsb2cgfSA9IGVsZWN0cm9uXG5jb25zdCB7IGFwcCwgQnJvd3NlcldpbmRvdyB9ID0gcmVtb3RlXG5cbmNvbnN0IF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlLXBsdXMnKVxuXy5leHRlbmQoXywgcmVxdWlyZSgnbG9kYXNoJykpXG53aW5kb3cuXyA9IF9cblxuXy50ZW1wbGF0ZVNldHRpbmdzLmludGVycG9sYXRlID0gLyN7KFtcXHNcXFNdKz8pfS9nXG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMtcHJvbWlzZScpXG5cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgcmFmIGZyb20gJ3JhZidcbmltcG9ydCBwZXJmb3JtYW5jZSBmcm9tICdwZXJmb3JtYW5jZS1ub3cnXG5cbmltcG9ydCB7IE1peGluLCBtaXggfSBmcm9tICdtaXh3aXRoJ1xud2luZG93Lk1peGluID0gTWl4aW5cbndpbmRvdy5taXggPSBtaXhcblxubGV0IHVzZXJQYXRoID0gcGF0aC5qb2luKGFwcC5nZXRBcHBQYXRoKCksICcvdXNlcicpXG5pZiAoIWZzLmV4aXN0c1N5bmModXNlclBhdGgpKSB7XG4gIGZzLm1rZGlycyh1c2VyUGF0aClcbn1cblxubGV0IElTX1dJTiA9IC9ed2luLy50ZXN0KHByb2Nlc3MucGxhdGZvcm0pXG5sZXQgSVNfT1NYID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2RhcndpbidcbmxldCBJU19MSU5VWCA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICdsaW51eCdcbmxldCBkaXJzID0ge1xuICBidWlsZDogX19kaXJuYW1lLFxuICBjd2Q6IGFwcC5nZXRBcHBQYXRoKCksXG4gIGhvbWU6IGFwcC5nZXRQYXRoKCdob21lJyksXG4gIGFwcDogYXBwLmdldFBhdGgoJ2FwcERhdGEnKSxcbiAgdXNlcjogdXNlclBhdGgsXG4gIHRtcDogYXBwLmdldFBhdGgoJ3RlbXAnKSxcbiAgcm9vdDogYXBwLmdldFBhdGgoJ2V4ZScpLFxuICBub2RlX21vZHVsZXM6IHBhdGguam9pbih1c2VyUGF0aCwgJ25vZGVfbW9kdWxlcycpLFxuICB1c2VyX3BrZzogcGF0aC5qb2luKHVzZXJQYXRoLCAncGFja2FnZS5qc29uJyksXG59XG5cbmxldCBuYW1lID0gYXBwLmdldE5hbWUoKVxubGV0IHZlcnNpb24gPSBhcHAuZ2V0VmVyc2lvbigpXG5cbmxldCBvcGVuRmlsZSA9ICguLi5hcmdzKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRpYWxvZy5zaG93T3BlbkRpYWxvZy5hcHBseShkaWFsb2csIGFyZ3MpXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmxldCBzYXZlRmlsZSA9ICguLi5hcmdzKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRpYWxvZy5zaG93U2F2ZURpYWxvZy5hcHBseShkaWFsb2csIGFyZ3MpXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmxldCBtZXNzYWdlQm94ID0gKC4uLmFyZ3MpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGlhbG9nLnNob3dNZXNzYWdlQm94LmFwcGx5KGRpYWxvZywgYXJncylcbiAgfVxuICBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxubGV0IG1hcF9nZXR0ZXJzID0gKHNvdXJjZSwgdGFyZ2V0LCBkZWZzKSA9PiB7XG4gIGZvciAobGV0IGsgaW4gZGVmcykge1xuICAgIGxldCBmbiA9IGRlZnNba11cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc291cmNlLCBrLCB7XG4gICAgICBnZXQ6ICgpID0+IGZuLmNhbGwodGFyZ2V0LCBzb3VyY2UpLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9KVxuICB9XG59XG5cbmxldCBtYXBfZ2V0dGVyc19yZXR1cm5fdGhpcyA9IChzb3VyY2UsIHRhcmdldCwgZGVmcykgPT4ge1xuICBmb3IgKGxldCBrIGluIGRlZnMpIHtcbiAgICBsZXQgZm4gPSBkZWZzW2tdXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNvdXJjZSwgaywge1xuICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgIGZuLmNhbGwodGFyZ2V0LCBzb3VyY2UpXG4gICAgICAgIHJldHVybiBzb3VyY2VcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH0pXG4gIH1cbn1cblxubGV0IG5vdyA9ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpXG5cbmxldCBkZWxheSA9IG1zID0+IHtcbiAgLy8gc2V0VGltZW91dCgoKSA9PiB7fSwgbXMpXG4gIGxldCB0ID0gcGVyZm9ybWFuY2Uubm93KClcbiAgbGV0IGMgPSB0XG4gIHdoaWxlIChjIC0gdCA8PSBtcykge1xuICAgIC8vIFBJWEkudGlja2VyLnNoYXJlZC51cGRhdGUoYylcbiAgICBjID0gcGVyZm9ybWFuY2Uubm93KClcbiAgfVxufVxuXG5sZXQgYXN5bmMgPSAoY29udGV4dCwgZm4sIGFyZ3MsIGRlbGF5KSA9PiB7XG4gIGlmIChfLmlzTnVtYmVyKGFyZ3MpKSB7XG4gICAgZGVsYXkgPSBhcmdzXG4gICAgYXJncyA9IFtdXG4gIH1cbiAgaWYgKCFfLmlzQXJyYXkoYXJncykpIHtcbiAgICBhcmdzID0gW2FyZ3NdXG4gIH1cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZm4uY2FsbChjb250ZXh0LCAuLi5hcmdzKVxuICB9LCBkZWxheSB8fCAxKVxufVxuXG5sZXQgYnVmZmVyX3RvX3N0cmluZyA9IGIgPT4ge1xuICBsZXQgbGVuID0gYi5sZW5ndGhcbiAgbGV0IGkgPSAwXG4gIGxldCBzID0gJydcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBzICs9IGJbaSsrXS50b1N0cmluZygxNilcbiAgfVxuICByZXR1cm4gc1xufVxuXG5sZXQgc3RyaW5nX3RvX2J1ZmZlciA9IHN0ciA9PiB7XG4gIGxldCBsZW4gPSBzdHIubGVuZ3RoXG4gIGxldCBpID0gMFxuICBsZXQgYiA9IG5ldyBCdWZmZXIoTWF0aC50cnVuYyhzdHIubGVuZ3RoIC8gMikpXG4gIGxldCB4ID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIGxldCBoZXggPSBzdHIuc3Vic3RyKGksIDIpXG4gICAgYlt4KytdID0gcGFyc2VJbnQoaGV4LCAxNilcbiAgICBpICs9IDJcbiAgfVxuICByZXR1cm4gYlxufVxuXG5sZXQgc3RyaW5nX2J1ZmZlciA9IChzdHIsIGxlbiA9IDApID0+IHtcbiAgbGVuID0gbGVuIHx8IHN0ci5sZW5ndGhcbiAgdmFyIGIgPSBuZXcgQnVmZmVyKGxlbilcbiAgYi53cml0ZShzdHIsIDAsIHN0ci5sZW5ndGgsICdhc2NpaScpXG4gIHJldHVybiBiXG59XG5cbmxldCBub3JtYWxpemVNZXNzYWdlcyA9ICguLi5tZXNzYWdlKSA9PiB7XG4gIGxldCBhcmdzID0gW11cbiAgZm9yIChsZXQgbSBvZiBtZXNzYWdlKSB7XG4gICAgaWYgKF8uaXNBcnJheShtKSkge1xuICAgICAgYXJncy5wdXNoKG0uam9pbignLCAnKSlcbiAgICB9XG4gICAgZWxzZSBpZiAoXy5pc1N0cmluZyhtKSkge1xuICAgICAgYXJncy5wdXNoKG0pXG4gICAgfVxuICB9XG4gIHJldHVybiBhcmdzXG59XG5cbmxldCBoZXggPSAodmFsdWUsIHNpemUgPSAzMikgPT4gJyQnICsgXy5wYWRTdGFydCh2YWx1ZS50b1N0cmluZygxNiksIE1hdGgudHJ1bmMoc2l6ZSAvIDQpLCAnMCcpXG5cbmxldCBidWZmZXJfZHVtcCA9IChidWZmZXIsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBsZXQgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDE2XG4gIGxldCBjYXBzID0gb3B0aW9ucy5jYXBzIHx8ICd1cHBlcidcbiAgbGV0IGluZGVudCA9IF8ucmVwZWF0KCcgJywgb3B0aW9ucy5pbmRlbnQgfHwgMClcblxuICBsZXQgemVybyA9IChuLCBtYXgpID0+IHtcbiAgICBuID0gbi50b1N0cmluZygxNilcbiAgICBpZiAoY2FwcyA9PT0gJ3VwcGVyJykgeyBuID0gbi50b1VwcGVyQ2FzZSgpIH1cbiAgICB3aGlsZSAobi5sZW5ndGggPCBtYXgpIHtcbiAgICAgIG4gPSAnMCcgKyBuXG4gICAgfVxuICAgIHJldHVybiBuXG4gIH1cblxuICBsZXQgbGVuID0gTWF0aC5taW4oYnVmZmVyLmJ5dGVMZW5ndGgsIG9wdGlvbnMubGVuZ3RoIHx8IGJ1ZmZlci5ieXRlTGVuZ3RoKVxuICBsZXQgcm93cyA9IE1hdGguY2VpbChsZW4gLyB3aWR0aClcbiAgbGV0IGxhc3QgPSBsZW4gJSB3aWR0aCB8fCB3aWR0aFxuICBsZXQgb2Zmc2V0TGVuZ3RoID0gbGVuLnRvU3RyaW5nKDE2KS5sZW5ndGhcbiAgaWYgKG9mZnNldExlbmd0aCA8IDYpIHsgb2Zmc2V0TGVuZ3RoID0gNiB9XG5cbiAgbGV0IGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcilcblxuICBsZXQgc3RyID0gaW5kZW50ICsgJ09mZnNldCdcbiAgd2hpbGUgKHN0ci5sZW5ndGggPCBvZmZzZXRMZW5ndGgpIHtcbiAgICBzdHIgKz0gJyAnXG4gIH1cblxuICBzdHIgKz0gJyAgJ1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgIHN0ciArPSAnICcgKyB6ZXJvKGksIDIpXG4gIH1cblxuICBpZiAobGVuKSB7XG4gICAgc3RyICs9ICdcXG4nXG4gIH1cblxuICBsZXQgYiA9IDBcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgIHN0ciArPSBpbmRlbnQgKyB6ZXJvKGIsIG9mZnNldExlbmd0aCkgKyAnICAnXG4gICAgbGV0IGxhc3RCeXRlcyA9IGkgPT09IHJvd3MgLSAxID8gbGFzdCA6IHdpZHRoXG4gICAgbGV0IGxhc3RTcGFjZXMgPSB3aWR0aCAtIGxhc3RCeXRlc1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsYXN0Qnl0ZXM7IGorKykge1xuICAgICAgc3RyICs9ICcgJyArIHplcm8oYXJyW2JdLCAyKVxuICAgICAgYisrXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsYXN0U3BhY2VzOyBqKyspIHtcbiAgICAgIHN0ciArPSAnICAgJ1xuICAgIH1cblxuICAgIGIgLT0gbGFzdEJ5dGVzXG4gICAgc3RyICs9ICcgICAnXG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxhc3RCeXRlczsgaisrKSB7XG4gICAgICBsZXQgdiA9IGFycltiXVxuICAgICAgc3RyICs9IHYgPiAzMSAmJiB2IDwgMTI3IHx8IHYgPiAxNTkgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKHYpIDogJy4nXG4gICAgICBiKytcbiAgICB9XG5cbiAgICBzdHIgKz0gJ1xcbidcbiAgfVxuXG4gIHJldHVybiBzdHJcbn1cblxubGV0IHV0b2EgPSBzdHIgPT4gd2luZG93LmJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpKVxuXG5sZXQgYXRvdSA9IHN0ciA9PiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKHdpbmRvdy5hdG9iKHN0cikpKVxuXG53aW5kb3cudXRvYSA9IHV0b2FcbndpbmRvdy5hdG91ID0gYXRvdVxuXG5cbmxldCBpbnN0YW5jZUZ1bmN0aW9uID0gKHRhcmdldCwgbmFtZSwgZm4sIGZvcmNlID0gZmFsc2UpID0+IHtcbiAgaWYgKGZvcmNlIHx8ICF0YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICB2YWx1ZTogZm4sXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB9KVxuICB9XG59XG5cbmxldCBpbnN0YW5jZUZ1bmN0aW9ucyA9ICh0YXJnZXQsIHNvdXJjZSwgbmFtZXMpID0+IHtcbiAgZm9yIChsZXQgbiBvZiBuYW1lcykge1xuICAgIGlmIChfLmlzQXJyYXkobikpIHtcbiAgICAgIGluc3RhbmNlRnVuY3Rpb24odGFyZ2V0LCBuWzBdLCBzb3VyY2VbblsxXV0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaW5zdGFuY2VGdW5jdGlvbih0YXJnZXQsIG4sIHNvdXJjZVtuXSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgXyxcbiAgbmFtZSxcbiAgdmVyc2lvbixcbiAgZWxlY3Ryb24sXG4gIGRpYWxvZyxcbiAgb3BlbkZpbGUsXG4gIHNhdmVGaWxlLFxuICBtZXNzYWdlQm94LFxuICByZW1vdGUsXG4gIHNjcmVlbixcbiAgQnJvd3NlcldpbmRvdyxcbiAgYXBwLFxuICBmcyxcbiAgcGF0aCxcbiAgdXNlclBhdGgsXG4gIElTX1dJTixcbiAgSVNfT1NYLFxuICBJU19MSU5VWCxcbiAgZGlycyxcbiAgcmFmLFxuICBub3csXG4gIE1peGluLFxuICBtaXgsXG4gIG1hcF9nZXR0ZXJzLFxuICBtYXBfZ2V0dGVyc19yZXR1cm5fdGhpcyxcbiAgZGVsYXksXG4gIGFzeW5jLFxuICBidWZmZXJfdG9fc3RyaW5nLFxuICBzdHJpbmdfdG9fYnVmZmVyLFxuICBzdHJpbmdfYnVmZmVyLFxuICBub3JtYWxpemVNZXNzYWdlcyxcbiAgaGV4LFxuICBidWZmZXJfZHVtcCxcbiAgdXRvYSxcbiAgYXRvdSxcbiAgaW5zdGFuY2VGdW5jdGlvbixcbiAgaW5zdGFuY2VGdW5jdGlvbnMsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdXRpbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJhZlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJhZlwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBlcmZvcm1hbmNlLW5vd1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBlcmZvcm1hbmNlLW5vd1wiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1peHdpdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtaXh3aXRoXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJlbGVjdHJvblwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuZGVyc2NvcmUtcGx1c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVuZGVyc2NvcmUtcGx1c1wiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaFwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzLXByb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmcy1wcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiUElYSS5Qb2ludC5wcm90b3R5cGUuZGlzdGFuY2UgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoKHRoaXMueCAtIHRhcmdldC54KSAqICh0aGlzLnggLSB0YXJnZXQueCkgKyAodGhpcy55IC0gdGFyZ2V0LnkpICogKHRoaXMueSAtIHRhcmdldC55KSlcbn1cblxuUElYSS5Qb2ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfLnRlbXBsYXRlKCcoI3t4fSwgI3t5fSknKSh0aGlzKVxufVxuXG5QSVhJLlJlY3RhbmdsZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfLnRlbXBsYXRlKCcoI3t4fSwgI3t5fSwgI3t4ICsgd2lkdGh9LCAje3kgKyBoZWlnaHR9KSgje3dpZHRofSwgI3toZWlnaHR9KScpKHRoaXMpXG59XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBib3VuZHNjaGVjazogZmFsc2UsXG5cbiAgdHlwZTogJ2kzMicsXG5cbiAgbWVtb3J5OiB7XG4gICAgc2l6ZTogNTEyICogMTAyNCxcbiAgfSxcblxuICBtZW1vcnlfbWFuYWdlcjoge1xuICAgIGNvbGxlY3RfZGVsYXk6IDMwICogMTAwMCxcbiAgfSxcblxuICB2aWRlbzoge1xuICAgIHdpZHRoOiAzMjAsXG4gICAgaGVpZ2h0OiAyNDAsXG4gICAgc2NhbGU6IDQsXG4gIH0sXG5cbiAgcGFsZXR0ZToge1xuICAgIGNvdW50OiAxNixcbiAgfSxcblxuICBmb250OiB7XG4gICAgY291bnQ6IDI1NSxcbiAgICB3aWR0aDogNCxcbiAgICBoZWlnaHQ6IDYsXG4gIH0sXG5cbiAgdGV4dDoge1xuICAgIHdpZHRoOiAzMjAgLyA0LFxuICAgIGhlaWdodDogMjQwIC8gNixcbiAgfSxcblxuICBzcHJpdGU6IHtcbiAgICBjb3VudDogMzIsXG4gICAgd2lkdGg6IDE2LFxuICAgIGhlaWdodDogMTYsXG4gIH0sXG5cbiAga2V5Ym9hcmQ6IHtcbiAgICBjb3VudDogMjU1LFxuICB9LFxuXG4gIG1vdXNlOiB7XG4gICAgY291bnQ6IDI1NSxcbiAgICBkYmxDbGlja0RlbGF5OiAyNTAsXG4gICAgZGJsQ2xpY2tEaXN0YW5jZTogOCxcbiAgfSxcblxuICBuZXR3b3JrOiB7XG4gICAgc2l6ZTogMzIgKiAxMDI0LFxuICB9LFxuXG4gIHNvdW5kOiB7XG4gICAgc2l6ZTogNCAqIDEwMjQsXG4gIH0sXG59XG5cbmxldCBlcnJvcnMgPSAwXG5cbmxldCBlcnJvciA9ICh0LCBtc2cpID0+IHtcbiAgZGVidWdnZXJcbiAgZXJyb3JzKytcbiAgY29uc29sZS5lcnJvcihtc2csICdhdCcsIHQudmFsdWUsICcoJyArIHQucm93ICsgJywnICsgdC5jb2wgKyAnKScpXG59XG5cbmxldCBydW50aW1lX2Vycm9yID0gY29kZSA9PiB7XG4gIGxldCBlID0gJ1Vua25vd24gcnVudGltZSBlcnJvcidcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSAweDAxOlxuICAgICAgZSA9ICdPdXQgb2YgbWVtb3J5J1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDI6XG4gICAgICBlID0gJ1N0YWNrIHVuZGVyZmxvdydcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDAzOlxuICAgICAgZSA9ICdTdGFjayBvdmVyZmxvdydcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA0OlxuICAgICAgZSA9ICdJbnZhbGlkIHN0YWNrIGFkZHJlc3MnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNTpcbiAgICAgIGUgPSAnU3RhY2sgYWRkcmVzcyBhbHJlYWR5IGFzc2lnbmVkJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDY6XG4gICAgICBlID0gJ0ludGVycnVwdCBhbHJlYWR5IGV4aXN0cydcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA3OlxuICAgICAgZSA9ICdJbnRlcnJ1cHQgbm90IGZvdW5kJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDg6XG4gICAgICBlID0gJ0FkZHJlc3Mgb3V0IG9mIGJvdW5kcydcbiAgICAgIGJyZWFrXG4gIH1cbiAgY29uc29sZS5lcnJvcihlKVxufVxuXG5sZXQgaW9fZXJyb3IgPSBjb2RlID0+IHtcbiAgbGV0IGUgPSAnSS9PIHJ1bnRpbWUgZXJyb3InXG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgMHgwMTpcbiAgICAgIGUgPSAnRmlsZSBub3QgZm91bmQnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwMjpcbiAgICAgIGUgPSAnQ2Fubm90IG9wZW4gZmlsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDAzOlxuICAgICAgZSA9ICdDYW5ub3QgY2xvc2UgZmlsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA0OlxuICAgICAgZSA9ICdDYW5ub3QgbG9jayBmaWxlJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDU6XG4gICAgICBlID0gJ0Nhbm5vdCB1bmxvY2sgZmlsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDA2OlxuICAgICAgZSA9ICdJbnZhbGlkIGZpbGUgaWQnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwNzpcbiAgICAgIGUgPSAnQSBmbG9wcHkgaXMgYWxyZWFkeSBpbiB0aGUgZHJpdmUnXG4gICAgICBicmVha1xuICAgIGNhc2UgMHgwODpcbiAgICAgIGUgPSAnTm8gZmxvcHB5IGluIGRyaXZlJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIDB4MDk6XG4gICAgICBlID0gJ0Nhbm5vdCBkZWxldGUgZmlsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAweDEwOlxuICAgICAgZSA9ICdEcml2ZSBpcyBub3Qgc3Bpbm5pbmcnXG4gICAgICBicmVha1xuICB9XG4gIGNvbnNvbGUuZXJyb3IoZSlcbn1cblxuXG5leHBvcnQge1xuICBkZWZhdWx0cyxcbiAgZXJyb3JzLFxuICBlcnJvcixcbiAgcnVudGltZV9lcnJvcixcbiAgaW9fZXJyb3IsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvZ2xvYmFscy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBpeGkuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwaXhpLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYi1hdWRpby1kYXdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWItYXVkaW8tZGF3XCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGNsYXNzIEV2ZW50IHtcblxuICBjb25zdHJ1Y3RvciAodGFyZ2V0LCBuYW1lLCBkYXRhLCBidWJibGVzID0gdHJ1ZSkge1xuICAgIHRoaXMuX19ldmVudE9iamVjdCA9IHRydWVcbiAgICB0aGlzLnRpbWVTdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXRcbiAgICB0aGlzLnR5cGUgPSBuYW1lXG4gICAgdGhpcy5kYXRhID0gZGF0YVxuICAgIHRoaXMuYnViYmxlcyA9IGJ1YmJsZXNcbiAgICB0aGlzLnN0b3BwZWQgPSBmYWxzZVxuICAgIHRoaXMuc3RvcHBlZEltbWVkaWF0ZSA9IGZhbHNlXG4gICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gZmFsc2VcbiAgfVxuXG4gIHN0b3AgKCkge1xuICAgIHRoaXMuc3RvcHBlZCA9IHRydWVcbiAgfVxuXG4gIHN0b3BJbW1lZGlhdGUgKCkge1xuICAgIHRoaXMuc3RvcHBlZEltbWVkaWF0ZSA9IHRydWVcbiAgfVxuXG4gIHN0b3BQcm9wYWdhdGlvbiAoKSB7XG4gICAgdGhpcy5zdG9wcGVkID0gdHJ1ZVxuICB9XG5cbiAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uICgpIHtcbiAgICB0aGlzLnN0b3BwZWRJbW1lZGlhdGUgPSB0cnVlXG4gIH1cblxuICBjYW5jZWxCdWJibGUgKCkge1xuICAgIHRoaXMuYnViYmxlcyA9IGZhbHNlXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdCAoKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gdHJ1ZVxuICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIEVtaXR0ZXIge1xuXG4gIG9uIChuYW1lLCBmbiwgb3JkZXIgPSAwKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzIHx8IHt9XG4gICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdID0gdGhpcy5fbGlzdGVuZXJzW25hbWVdIHx8IFtdXG4gICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdLnB1c2goeyBmbiwgb3JkZXIgfSlcbiAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0gPSBfLnNvcnRCeSh0aGlzLl9saXN0ZW5lcnNbbmFtZV0sICdvcmRlcicpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIG9uY2UgKG5hbWUsIGZuKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzIHx8IHt9XG5cbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBsZXQgb25jZUhhbmRsZXJXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgZm4uYXBwbHkodGhhdC5vZmYobmFtZSwgb25jZUhhbmRsZXJXcmFwcGVyKSwgYXJndW1lbnRzKVxuICAgIH1cbiAgICBvbmNlSGFuZGxlcldyYXBwZXIuX29yaWdpbmFsSGFuZGxlciA9IGZuXG5cbiAgICByZXR1cm4gdGhpcy5vbihuYW1lLCBvbmNlSGFuZGxlcldyYXBwZXIpXG4gIH1cblxuICBvZmYgKG5hbWUsIGZuKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzIHx8IHt9XG5cbiAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBsZXQgbGlzdCA9IHRoaXMuX2xpc3RlbmVyc1tuYW1lXVxuICAgIGxldCBpID0gZm4gPyBsaXN0Lmxlbmd0aCA6IDBcblxuICAgIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgICBpZiAobGlzdFtpXS5mbiA9PT0gZm4gfHwgbGlzdFtpXS5fb3JpZ2luYWxIYW5kbGVyID09PSBmbikge1xuICAgICAgICBsaXN0LnNwbGljZShpLCAxKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChfLmlzRW1wdHkobGlzdCkpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNbbmFtZV1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZW1pdCAobmFtZSwgZGF0YSkge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fVxuXG4gICAgbGV0IG9yaWdFdmVudERhdGFcblxuICAgIGlmICghZGF0YSB8fCBkYXRhLl9fZXZlbnRPYmplY3QgIT09IHRydWUpIHtcbiAgICAgIGlmIChkYXRhICYmIGRhdGEuZGF0YSAmJiBkYXRhLnR5cGUpIHtcbiAgICAgICAgb3JpZ0V2ZW50RGF0YSA9IGRhdGFcbiAgICAgICAgZGF0YSA9IGRhdGEuZGF0YVxuICAgICAgfVxuICAgICAgZGF0YSA9IG5ldyBFdmVudCh0aGlzLCBuYW1lLCBkYXRhKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIGxldCBsaXN0ZW5lcnMgPSBfLmNsb25lKHRoaXMuX2xpc3RlbmVyc1tuYW1lXSlcbiAgICAgIGZvciAobGV0IGwgb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgIGwuZm4uY2FsbCh0aGlzLCBkYXRhKVxuICAgICAgICBpZiAoZGF0YS5zdG9wcGVkSW1tZWRpYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGRhdGEuc3RvcHBlZCkge1xuICAgICAgICBpZiAob3JpZ0V2ZW50RGF0YSkge1xuICAgICAgICAgIG9yaWdFdmVudERhdGEuc3RvcHBlZCA9IHRydWVcbiAgICAgICAgICBkYXRhLmNhbmNlbEJ1YmJsZSgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGF0YS5idWJibGVzICYmIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmVtaXQpIHtcbiAgICAgIHRoaXMucGFyZW50LmVtaXQobmFtZSwgZGF0YSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2VtaXR0ZXIuanMiLCJpbXBvcnQgaGV4eSBmcm9tICdoZXh5J1xuaW1wb3J0IHsgaGV4IH0gZnJvbSAnLi4vZ2xvYmFscy5qcydcblxuZXhwb3J0IGNvbnN0IGRhdGFfdHlwZV9zaXplcyA9IHtcbiAgaTg6IDEsXG4gIHM4OiAxLFxuICBpMTY6IDIsXG4gIHMxNjogMixcbiAgaTMyOiA0LFxuICBzMzI6IDQsXG4gIGYzMjogNCxcbiAgc3RyOiA2NCxcbn1cblxuZXhwb3J0IGNvbnN0IGRhdGFfdHlwZV9mbnMgPSB7XG4gIGk4OiAnVWludDgnLFxuICBzODogJ0ludDgnLFxuICBpMTY6ICdVaW50MTYnLFxuICBzMTY6ICdJbnQxNicsXG4gIGkzMjogJ1VpbnQzMicsXG4gIHMzMjogJ0ludDMyJyxcbiAgZjMyOiAnRmxvYXQzMicsXG59XG5cbmV4cG9ydCB2YXIgZGF0YV90eXBlX3NpemUgPSB0eXBlID0+IF8uaXNOdW1iZXIodHlwZSkgPyB0eXBlIDogZGF0YV90eXBlX3NpemVzW3R5cGVdXG5cbmV4cG9ydCBjbGFzcyBNZW1vcnkge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgdGhpcy5fc2l6ZSA9IG1haW4uZGVmYXVsdCgnbWVtb3J5LnNpemUnKVxuICAgIHRoaXMuX3RvcCA9IDBcbiAgICB0aGlzLl9ib3R0b20gPSB0aGlzLl90b3AgKyB0aGlzLl9zaXplIC0gMVxuXG4gICAgdGhpcy5fYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHRoaXMuX3NpemUpXG5cbiAgICB0aGlzLl9kYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fYnVmZmVyKVxuXG4gICAgdGhpcy5fdmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLl9idWZmZXIpXG5cbiAgICB0aGlzLl9mbnMgPSB7XG4gICAgICBpODogJ1VpbnQ4JyxcbiAgICAgIHM4OiAnSW50OCcsXG4gICAgICBpMTY6ICdVaW50MTYnLFxuICAgICAgczE2OiAnSW50MTYnLFxuICAgICAgaTMyOiAnVWludDMyJyxcbiAgICAgIHMzMjogJ0ludDMyJyxcbiAgICAgIGYzMjogJ0Zsb2F0MzInLFxuICAgIH1cbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGVhcigpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl92aWV3ID0gbnVsbFxuICAgIHRoaXMuX2RhdGEgPSBudWxsXG4gICAgdGhpcy5fYnVmZmVyID0gbnVsbFxuICB9XG5cbiAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fbWFpbiB9XG5cbiAgZ2V0IGJ1ZmZlciAoKSB7IHJldHVybiB0aGlzLl9idWZmZXIgfVxuICBnZXQgZGF0YSAoKSB7IHJldHVybiB0aGlzLl9kYXRhIH1cbiAgZ2V0IHZpZXcgKCkgeyByZXR1cm4gdGhpcy5fdmlldyB9XG4gIGdldCB0b3AgKCkgeyByZXR1cm4gdGhpcy5fdG9wIH1cbiAgZ2V0IGJvdHRvbSAoKSB7IHJldHVybiB0aGlzLl9ib3R0b20gfVxuICBnZXQgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9zaXplIH1cblxuICBjbGVhciAoZCA9IDApIHtcbiAgICB0aGlzLmZpbGwoMCwgdGhpcy5fdG9wLCB0aGlzLl9zaXplKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBjaGtfYm91bmRzIChhZGRyLCBzeiA9IDQpIHtcbiAgICBpZiAoYWRkciA8IHRoaXMuX3RvcCB8fCBhZGRyICsgc3ogPiB0aGlzLl9ib3R0b20pIHtcbiAgICAgIHRoaXMuaGx0KDB4MDgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIGRiICh0eXBlLCBhZGRyLCAuLi5hcmdzKSB7XG4gICAgbGV0IHN6ID0gZGF0YV90eXBlX3NpemVzW3R5cGVdXG4gICAgbGV0IGZuID0gdGhpcy5fdmlld1snc2V0JyArIHRoaXMuX2Zuc1t0eXBlXV1cbiAgICBmb3IgKGxldCBhIG9mIGFyZ3MpIHtcbiAgICAgIGZuLmNhbGwodGhpcy5fdmlldywgYWRkciwgYSlcbiAgICAgIGFkZHIgKz0gc3pcbiAgICB9XG4gICAgcmV0dXJuIGFkZHJcbiAgfVxuXG4gIGRiX2JjICh0eXBlLCBhZGRyLCAuLi5hcmdzKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKGFkZHIsIGFyZ3MubGVuZ3RoICogZGF0YV90eXBlX3NpemVzW3R5cGVdKVxuICAgIHRoaXMuZGIodHlwZSwgYWRkciwgLi4uYXJncylcbiAgfVxuXG4gIGxkICh0eXBlLCBhZGRyKSB7IHJldHVybiB0aGlzLl92aWV3WydnZXQnICsgdGhpcy5fZm5zW3R5cGVdXShhZGRyLCBfdm0ubGl0dGxlRW5kaWFuKSB9XG5cbiAgbGRiIChhZGRyKSB7IHJldHVybiB0aGlzLmxkKCdpOCcsIGFkZHIpIH1cblxuICBsZHcgKGFkZHIpIHsgcmV0dXJuIHRoaXMubGQoJ2kxNicsIGFkZHIpIH1cblxuICBsZGQgKGFkZHIpIHsgcmV0dXJuIHRoaXMubGQoJ2kzMicsIGFkZHIpIH1cblxuICBsZGYgKGFkZHIpIHsgcmV0dXJuIHRoaXMubGQoJ2YzMicsIGFkZHIpIH1cblxuICBsZF9iYyAodHlwZSwgYWRkcikge1xuICAgIHRoaXMuY2hrX2JvdW5kcyhhZGRyLCBkYXRhX3R5cGVfc2l6ZXNbdHlwZV0pXG4gICAgcmV0dXJuIHRoaXMubGQodHlwZSwgYWRkcilcbiAgfVxuXG4gIHN0ICh0eXBlLCBhZGRyLCB2YWx1ZSkgeyB0aGlzLl92aWV3WydzZXQnICsgdGhpcy5fZm5zW3R5cGVdXShhZGRyLCB2YWx1ZSwgX3ZtLmxpdHRsZUVuZGlhbikgfVxuXG4gIHN0YiAoYWRkciwgdmFsdWUpIHsgdGhpcy5zdCgnaTgnLCBhZGRyLCB2YWx1ZSkgfVxuXG4gIHN0dyAoYWRkciwgdmFsdWUpIHsgdGhpcy5zdCgnaTE2JywgYWRkciwgdmFsdWUpIH1cblxuICBzdGQgKGFkZHIsIHZhbHVlKSB7IHRoaXMuc3QoJ2kzMicsIGFkZHIsIHZhbHVlKSB9XG5cbiAgc3RmIChhZGRyLCB2YWx1ZSkgeyB0aGlzLnN0KCdmMzInLCBhZGRyLCB2YWx1ZSkgfVxuXG4gIHN0X2JjICh0eXBlLCBhZGRyLCB2YWx1ZSkge1xuICAgIHRoaXMuY2hrX2JvdW5kcyhhZGRyLCBkYXRhX3R5cGVfc2l6ZXNbdHlwZV0pXG4gICAgdGhpcy5zdCh0eXBlLCBhZGRyLCB2YWx1ZSlcbiAgfVxuXG4gIGxkbCAoYWRkciwgc2l6ZSkgeyByZXR1cm4gdGhpcy5fZGF0YS5zbGljZShhZGRyLCBhZGRyICsgc2l6ZSAtIDEpIH1cblxuICBsZGxfYmMgKGFkZHIsIHNpemUpIHtcbiAgICB0aGlzLmNoa19ib3VuZHMoYWRkciwgc2l6ZSlcbiAgICByZXR1cm4gdGhpcy5sZGwoYWRkciwgc2l6ZSlcbiAgfVxuXG4gIGxkcyAoYWRkciwgc2l6ZSkge1xuICAgIGlmIChfLmlzU3RyaW5nKGFkZHIpKSB7ICAvLyBhc3NlbWJsZXIgd2lsbCB1c2UgbGRzKFwiXCIpXG4gICAgICByZXR1cm4gYWRkclxuICAgIH1cblxuICAgIGxldCBzID0gJydcbiAgICBzaXplID0gc2l6ZSB8fCBkYXRhX3R5cGVfc2l6ZXMuc3RyXG4gICAgbGV0IGJvdHRvbSA9IE1hdGgubWluKGFkZHIgKyBzaXplIC0gMSwgdGhpcy5fYm90dG9tKVxuICAgIGxldCBtZW0gPSB0aGlzLl9kYXRhXG4gICAgd2hpbGUgKGFkZHIgPD0gYm90dG9tKSB7XG4gICAgICBsZXQgYyA9IG1lbVthZGRyKytdXG4gICAgICBpZiAoYyA9PT0gMCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc1xuICB9XG5cbiAgbGRzX2JjIChhZGRyLCBzaXplKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKGFkZHIsIE1hdGgubWluKHNpemUgfHwgMCwgZGF0YV90eXBlX3NpemVzLnN0cikpXG4gICAgcmV0dXJuIHRoaXMubGRzKGFkZHIsIHNpemUpXG4gIH1cblxuICBzdGwgKGFkZHIsIHZhbHVlLCBzaXplKSB7IHRoaXMuX2RhdGEuc2V0KHZhbHVlLnN1YmFycmF5KDAsIHNpemUgfHwgdmFsdWUuYnl0ZUxlbmd0aCksIGFkZHIpIH1cblxuICBzdGxfYmMgKGFkZHIsIHZhbHVlLCBzaXplKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKGFkZHIsIE1hdGgubWluKHNpemUgfHwgMCwgdmFsdWUuYnl0ZUxlbmd0aCkpXG4gICAgdGhpcy5zdGwoYWRkciwgdmFsdWUsIHNpemUpXG4gIH1cblxuICBzdHMgKGFkZHIsIHN0ciwgc2l6ZSkge1xuICAgIHNpemUgPSBzaXplIHx8IGRhdGFfdHlwZV9zaXplcy5zdHIgLSAxXG4gICAgbGV0IGEgPSBfLm1hcChzdHIuc3BsaXQoJycpLCBpID0+IGkuY2hhckNvZGVBdCgwKSlcbiAgICBhLmxlbmd0aCA9IE1hdGgubWluKHNpemUsIGEubGVuZ3RoKVxuICAgIHRoaXMuZmlsbCgwLCBhZGRyLCBzaXplKVxuICAgIHRoaXMuX2RhdGEuc2V0KGEsIGFkZHIpXG4gIH1cblxuICBzdHNfYmMgKGFkZHIsIHN0ciwgc2l6ZSkge1xuICAgIHRoaXMuY2hrX2JvdW5kcyhhZGRyLCBNYXRoLm1pbihzaXplLCBkYXRhX3R5cGVfc2l6ZXMuc3RyKSlcbiAgICB0aGlzLnN0cyhhZGRyLCBzdHIsIHNpemUpXG4gIH1cblxuICBmaWxsICh2YWx1ZSwgdG9wLCBzaXplKSB7IHRoaXMuX2RhdGEuZmlsbCh2YWx1ZSB8fCAwLCB0b3AsIHRvcCArIHNpemUpIH1cblxuICBmaWxsX2JjICh2YWx1ZSwgdG9wLCBzaXplKSB7XG4gICAgdGhpcy5jaGtfYm91bmRzKHRvcCwgc2l6ZSlcbiAgICB0aGlzLmZpbGwodmFsdWUsIHRvcCwgc2l6ZSlcbiAgfVxuXG4gIGNvcHkgKHNyYywgdGd0LCBzaXplKSB7IHRoaXMuX2RhdGEuY29weVdpdGhpbih0Z3QsIHNyYywgc3JjICsgc2l6ZSAtIDEpIH1cblxuICBjb3B5X2JjIChzcmMsIHRndCwgc2l6ZSkge1xuICAgIHRoaXMuY2hrX2JvdW5kcyhzcmMsIHNpemUpXG4gICAgdGhpcy5jaGtfYm91bmRzKHRndCwgc2l6ZSlcbiAgICB0aGlzLmNvcHkoc3JjLCB0Z3QsIHNpemUpXG4gIH1cblxuICByZWFkIChhZGRyLCB0eXBlID0gJ2k4Jykge1xuICAgIGxldCB2YWx1ZVxuICAgIGlmIChfLmlzTnVtYmVyKHR5cGUpKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuX2RhdGEuc2xpY2UoYWRkciwgYWRkciArIHR5cGUgLSAxKVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3RyJykge1xuICAgICAgdmFsdWUgPSB0aGlzLmxkcyhhZGRyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbHVlID0gdGhpcy5sZCh0eXBlLCBhZGRyKVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHdyaXRlICh2YWx1ZSwgYWRkciwgdHlwZSA9ICdpOCcpIHtcbiAgICBsZXQgc3pcbiAgICBpZiAoXy5pc051bWJlcih0eXBlKSkge1xuICAgICAgdGhpcy5fZGF0YS5zZXQodmFsdWUuc3ViYXJyYXkoMCwgdHlwZSAtIDEpLCBhZGRyKVxuICAgICAgc3ogPSB0eXBlXG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzdHInKSB7XG4gICAgICB0aGlzLnN0cyhhZGRyLCB2YWx1ZSlcbiAgICAgIHN6ID0gZGF0YV90eXBlX3NpemVzW3R5cGVdXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zdCh0eXBlLCBhZGRyLCB2YWx1ZSlcbiAgICAgIHN6ID0gZGF0YV90eXBlX3NpemVzW3R5cGVdXG4gICAgfVxuICAgIHJldHVybiBhZGRyICsgc3pcbiAgfVxuXG4gIGR1bXAgKGFkZHIgPSAwLCBzaXplID0gMTAyNCkge1xuICAgIGNvbnNvbGUubG9nKCdEdW1waW5nJywgc2l6ZSwgJyBieXRlcyBmcm9tIG1lbW9yeSBhdCAnLCBoZXgoYWRkcikpXG4gICAgY29uc29sZS5sb2coaGV4eS5oZXh5KHRoaXMuX2J1ZmZlciwgeyBvZmZzZXQ6IGFkZHIsIGxlbmd0aDogc2l6ZSwgd2lkdGg6IDE2LCBjYXBzOiAndXBwZXInLCBpbmRlbnQ6IDIgfSkpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL21lbW9yeS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhleHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJoZXh5XCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBoZXh5IGZyb20gJ2hleHknXG5pbXBvcnQgcHJldHR5Qnl0ZXMgZnJvbSAncHJldHR5LWJ5dGVzJ1xuaW1wb3J0IHsgZGF0YV90eXBlX3NpemUgfSBmcm9tICcuL21lbW9yeS5qcydcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW1vcnlNYW5hZ2VyIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHRoaXMuX21haW4gPSBtYWluXG4gICAgdGhpcy5fYmxvY2tzID0gW11cbiAgICB0aGlzLl9sYXN0ID0gMFxuICAgIHRoaXMuX2NvbGxlY3RfZGVsYXkgPSBtYWluLmRlZmF1bHQoJ21lbW9yeV9tYW5hZ2VyLmNvbGxlY3RfZGVsYXknKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHJldHVybiB0aGlzLmNvbGxlY3QoKVxuICB9XG5cbiAgdGljayAodCkge1xuICAgIGlmICh0IC0gdGhpcy5fbGFzdCA+PSB0aGlzLl9jb2xsZWN0X2RlbGF5KSB7XG4gICAgICB0aGlzLmNvbGxlY3QoKVxuICAgICAgdGhpcy5fbGFzdCA9IHRcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNvbGxlY3QoKVxuICAgIHRoaXMuX2Jsb2NrcyA9IFtdXG4gICAgdGhpcy5fbGFzdCA9IDBcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuXG4gIGdldCBibG9ja3MgKCkgeyByZXR1cm4gdGhpcy5fYmxvY2tzIH1cbiAgZ2V0IGxhc3QgKCkgeyByZXR1cm4gdGhpcy5fbGFzdCB9XG4gIGdldCBjb2xsZWN0X2RlbGF5ICgpIHsgcmV0dXJuIHRoaXMuX2NvbGxlY3RfZGVsYXkgfVxuXG4gIGdldCBhdmFpbF9tZW0gKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5zaXplIH1cblxuICBnZXQgdXNlZF9tZW0gKCkge1xuICAgIGxldCBzaXplID0gMFxuICAgIGZvciAobGV0IGIgb2YgdGhpcy5fYmxvY2tzKSB7XG4gICAgICBpZiAoYi51c2VkKSB7XG4gICAgICAgIHNpemUgKz0gYi5zaXplXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaXplXG4gIH1cblxuICBnZXQgZnJlZV9tZW0gKCkgeyByZXR1cm4gdGhpcy5hdmFpbF9tZW0gLSB0aGlzLnVzZWRfbWVtIH1cblxuICBfYWxsb2MgKHR5cGUsIGNvdW50KSB7XG4gICAgY291bnQgPSBjb3VudCB8fCAxXG4gICAgbGV0IHNpemUgPSBkYXRhX3R5cGVfc2l6ZSh0eXBlKSAqIGNvdW50XG4gICAgbGV0IG4gPSAwXG5cbiAgICBmb3IgKGxldCBiIG9mIHRoaXMuX2Jsb2Nrcykge1xuICAgICAgaWYgKGIuYm90dG9tID4gbikge1xuICAgICAgICBuID0gYi5ib3R0b21cbiAgICAgIH1cblxuICAgICAgaWYgKCFiLnVzZWQgJiYgYi5zaXplID49IHNpemUpIHtcbiAgICAgICAgaWYgKGIuc2l6ZSA9PT0gc2l6ZSkge1xuICAgICAgICAgIGIudXNlZCA9IHRydWVcbiAgICAgICAgICByZXR1cm4gYi50b3BcbiAgICAgICAgfVxuICAgICAgICBsZXQgb2IgPSBiLmJvdHRvbVxuICAgICAgICBiLmJvdHRvbSA9IGIudG9wICsgc2l6ZSAtIDFcbiAgICAgICAgYi5zaXplID0gc2l6ZVxuICAgICAgICBiLmNvdW50ID0gY291bnRcbiAgICAgICAgYi51c2VkID0gdHJ1ZVxuXG4gICAgICAgIHRoaXMuX2Jsb2Nrcy5wdXNoKHsgdG9wOiBiLmJvdHRvbSArIDEsIGJvdHRvbTogb2IsIHNpemU6IG9iIC0gKGIuYm90dG9tICsgMSksIGNvdW50LCB0eXBlLCB1c2VkOiBmYWxzZSB9KVxuXG4gICAgICAgIHJldHVybiBiLnRvcFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuICsgc2l6ZSA+IHRoaXMuYXZhaWxfbWVtKSB7XG4gICAgICBfdm0uaGx0KClcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgbGV0IGFkZHIgPSBuICsgMVxuXG4gICAgdGhpcy5fYmxvY2tzLnB1c2goeyB0b3A6IGFkZHIsIGJvdHRvbTogYWRkciArIHNpemUgLSAxLCBzaXplLCBjb3VudCwgdHlwZSwgdXNlZDogdHJ1ZSB9KVxuXG4gICAgX3ZtLmZpbGwoMCwgYWRkciwgc2l6ZSlcblxuICAgIHJldHVybiBhZGRyXG4gIH1cblxuICBhbGxvYyAodHlwZSwgY291bnQsIC4uLnZhbHVlKSB7XG4gICAgbGV0IGFkZHIgPSB0aGlzLl9hbGxvYyh0eXBlLCBjb3VudClcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IHNpemUgPSBkYXRhX3R5cGVfc2l6ZSh0eXBlKSAqIGNvdW50XG4gICAgICBsZXQgYSA9IGFkZHJcbiAgICAgIGZvciAobGV0IHYgb2YgdmFsdWUpIHtcbiAgICAgICAgX3ZtLndyaXRlKHYsIGEsIHR5cGUpXG4gICAgICAgIGEgKz0gc2l6ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhZGRyXG4gIH1cblxuICBmcmVlIChhZGRyKSB7XG4gICAgbGV0IGIgPSB0aGlzLmJsb2NrKGFkZHIpXG4gICAgaWYgKGIpIHtcbiAgICAgIGIudXNlZCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgYmxvY2sgKGFkZHIpIHtcbiAgICBmb3IgKGxldCBiIG9mIHRoaXMuX2Jsb2Nrcykge1xuICAgICAgaWYgKGIudG9wID09PSBhZGRyKSB7XG4gICAgICAgIHJldHVybiBiXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICB0eXBlIChhZGRyKSB7XG4gICAgbGV0IGIgPSB0aGlzLmJsb2NrKGFkZHIpXG4gICAgcmV0dXJuIGIgJiYgYi51c2VkID8gYi50eXBlIDogbnVsbFxuICB9XG5cbiAgc2l6ZSAoYWRkcikge1xuICAgIGxldCBiID0gdGhpcy5ibG9jayhhZGRyKVxuICAgIHJldHVybiBiICYmIGIudXNlZCA/IGIuc2l6ZSA6IC0xXG4gIH1cblxuICBjb2xsZWN0ICgpIHtcbiAgICBsZXQgbiA9IFtdXG4gICAgZm9yIChsZXQgYiBvZiB0aGlzLl9ibG9ja3MpIHtcbiAgICAgIGlmICghYi51c2VkKSB7XG4gICAgICAgIG4ucHVzaChiKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9ibG9ja3MgPSBuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIGNvbnNvbGUubG9nKCdtZW1vcnkgX2Jsb2NrcyBkdW1wLi4uJywgJ2F2YWlsX21lbTonLCBwcmV0dHlCeXRlcyh0aGlzLmF2YWlsX21lbSksICd1c2VkOicsIHByZXR0eUJ5dGVzKHRoaXMudXNlZF9tZW0pLCAnZnJlZTonLCBwcmV0dHlCeXRlcyh0aGlzLmZyZWVfbWVtKSlcbiAgICBmb3IgKGxldCBiIG9mIHRoaXMuX2Jsb2Nrcykge1xuICAgICAgY29uc29sZS5sb2coJycpXG4gICAgICBjb25zb2xlLmxvZygnb2Zmc2V0OicsIF92bS5oZXgoYi50b3AsIDMyKSwgJ3NpemU6JywgdGhpcy5zaXplKGIudG9wKSwgJ3R5cGU6JywgdGhpcy50eXBlKGIudG9wKSlcbiAgICAgIGNvbnNvbGUubG9nKGhleHkuaGV4eShfdm0ubWVtX2J1ZmZlciwgeyBvZmZzZXQ6IGIudG9wLCBsZW5ndGg6IE1hdGgubWluKDI1NSwgYi5zaXplKSwgd2lkdGg6IDE2LCBjYXBzOiAndXBwZXInLCBpbmRlbnQ6IDIgfSkpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vbWVtb3J5bWFuYWdlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByZXR0eS1ieXRlc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByZXR0eS1ieXRlc1wiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBydW50aW1lX2Vycm9yIH0gZnJvbSAnLi4vZ2xvYmFscy5qcydcblxuY29uc3QgX0lOVF9SVU5OSU5HID0gMVxuY29uc3QgX0lOVF9QQVVTRUQgPSAyXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVycnVwdCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICB0aGlzLl9saXN0ID0ge31cbiAgICB0aGlzLl9tYWluID0gbWFpblxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuc3RvcF9hbGwoKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuICBnZXQgbWVtb3J5ICgpIHsgcmV0dXJuIHRoaXMuX21haW4ubWVtb3J5IH1cblxuICBmaW5kIChuYW1lKSB7IHJldHVybiB0aGlzLl9saXN0W25hbWVdIH1cblxuICBjcmVhdGUgKG5hbWUsIGZuLCBtcyA9IDUwMCkge1xuICAgIGlmICghdGhpcy5maW5kKG5hbWUpKSB7XG4gICAgICB0aGlzLl9saXN0W25hbWVdID0geyBuYW1lLCBzdGF0dXM6IF9JTlRfUlVOTklORywgbXMsIGZuLCBsYXN0OiAwIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDYpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXN1bWUgKG5hbWUpIHtcbiAgICBpZiAodGhpcy5maW5kKG5hbWUpKSB7XG4gICAgICB0aGlzLl9saXN0W25hbWVdLnN0YXR1cyA9IF9JTlRfUlVOTklOR1xuICAgICAgdGhpcy5fbGlzdFtuYW1lXS5sYXN0ID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwYXVzZSAobmFtZSkge1xuICAgIGlmICh0aGlzLmZpbmQobmFtZSkpIHtcbiAgICAgIHRoaXMuX2xpc3RbbmFtZV0uc3RhdHVzID0gX0lOVF9QQVVTRURcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdG9wIChuYW1lKSB7XG4gICAgaWYgKHRoaXMuZmluZChuYW1lKSkge1xuICAgICAgZGVsZXRlIHRoaXMuX2xpc3RbbmFtZV1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBydW50aW1lX2Vycm9yKDB4MDcpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdG9wX2FsbCAoKSB7XG4gICAgZm9yIChsZXQgayBpbiB0aGlzLl9saXN0KSB7XG4gICAgICB0aGlzLnN0b3AoaylcbiAgICB9XG4gICAgdGhpcy5fbGlzdCA9IHt9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBmb3IgKGxldCBrIGluIHRoaXMuX2xpc3QpIHtcbiAgICAgIGxldCBpID0gdGhpcy5fbGlzdFtrXVxuICAgICAgaWYgKGkuc3RhdHVzID09PSBfSU5UX1JVTk5JTkcpIHtcbiAgICAgICAgbGV0IGRlbGF5ID0gdCAtIGkubGFzdFxuICAgICAgICBpZiAoZGVsYXkgPj0gaS5tcykge1xuICAgICAgICAgIGkuZm4uYXBwbHkodGhpcywgW2RlbGF5IC0gaS5tc10pXG4gICAgICAgICAgaS5sYXN0ID0gdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9pbnRlcnJ1cHQuanMiLCJpbXBvcnQgUGFsZXR0ZSBmcm9tICcuL3BhbGV0dGUuanMnXG5pbXBvcnQgRm9udCBmcm9tICcuL2ZvbnQuanMnXG5pbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnXG5pbXBvcnQgQ3Vyc29yIGZyb20gJy4vY3Vyc29yLmpzJ1xuaW1wb3J0IFNwcml0ZSBmcm9tICcuL3Nwcml0ZS5qcydcbmltcG9ydCB7IE92ZXJsYXlzIH0gZnJvbSAnLi4vb3ZlcmxheXMuanMnXG5cbmltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW8gZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoJ2k4JywgJ3ZpZGVvJywgWyd3aWR0aCcsICdoZWlnaHQnLCAnc2NhbGUnXSlcblxuICAgIHRoaXMuX3JlbmRlcmVyID0gbmV3IFBJWEkuYXV0b0RldGVjdFJlbmRlcmVyKHRoaXMuX3dpZHRoICogdGhpcy5fc2NhbGUsIHRoaXMuX2hlaWdodCAqIHRoaXMuX3NjYWxlLCB7fSlcbiAgICB0aGlzLl9yZW5kZXJlci52aWV3LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcuc3R5bGUuY3Vyc29yID0gJ25vbmUnXG4gICAgdGhpcy5fcmVuZGVyZXIudmlldy5pZCA9ICd2aWRlbydcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX3JlbmRlcmVyLnZpZXcpXG5cbiAgICB0aGlzLl9zdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG4gICAgdGhpcy5fc3RhZ2Uuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCh0aGlzLl9zY2FsZSwgdGhpcy5fc2NhbGUpXG5cbiAgICB0aGlzLl9vblJlc2l6ZSA9IHRoaXMucmVzaXplLmJpbmQodGhpcylcbiAgICB0aGlzLm9uKCdyZXNpemUnLCB0aGlzLl9vblJlc2l6ZSlcblxuICAgIHRoaXMuYXN5bmMoZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fcGFsZXR0ZV9jaGlwID0gbmV3IFBhbGV0dGUobWFpbilcbiAgICAgIHRoaXMuX2ZvbnRfY2hpcCA9IG5ldyBGb250KG1haW4pXG4gICAgICB0aGlzLl90ZXh0X2NoaXAgPSBuZXcgVGV4dChtYWluKVxuICAgICAgdGhpcy5fY3Vyc29yX2NoaXAgPSBuZXcgQ3Vyc29yKG1haW4pXG4gICAgICB0aGlzLl9zcHJpdGVfY2hpcCA9IG5ldyBTcHJpdGUobWFpbilcbiAgICAgIHRoaXMuX292ZXJsYXlzID0gbmV3IE92ZXJsYXlzKHRoaXMsIHtcbiAgICAgICAgc2NyZWVuOiB7fSxcbiAgICAgICAgc2NhbmxpbmVzOiB7fSxcbiAgICAgICAgc2NhbmxpbmU6IHt9LFxuICAgICAgICByZ2I6IHt9LFxuICAgICAgICBub2lzZXM6IHt9LFxuICAgICAgICBjcnQ6IHt9LFxuICAgICAgICBtb25pdG9yOiB7fSxcbiAgICAgIH0pXG4gICAgICB0aGlzLnJlc2V0KClcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5vZmYoJ3Jlc2l6ZScsIHRoaXMuX29uUmVzaXplKVxuXG4gICAgdGhpcy5fcGFsZXR0ZV9jaGlwLmRlc3Ryb3koKVxuICAgIHRoaXMuX2ZvbnRfY2hpcC5kZXN0cm95KClcbiAgICB0aGlzLl90ZXh0X2NoaXAuZGVzdHJveSgpXG4gICAgdGhpcy5fY3Vyc29yX2NoaXAuZGVzdHJveSgpXG4gICAgdGhpcy5fc3ByaXRlX2NoaXAuZGVzdHJveSgpXG5cbiAgICB0aGlzLl9vdmVybGF5cy5kZXN0cm95KClcblxuICAgIGlmICh0aGlzLl9zcHJpdGUpIHtcbiAgICAgIHRoaXMuX3Nwcml0ZS5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdGV4dHVyZSkge1xuICAgICAgdGhpcy5fdGV4dHVyZS5kZXN0cm95KClcbiAgICAgIHRoaXMuX3RleHR1cmUgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NhbnZhcykge1xuICAgICAgdGhpcy5fY2FudmFzLnJlbW92ZSgpXG4gICAgICB0aGlzLl9jYW52YXMgPSBudWxsXG4gICAgfVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuXG4gICAgdGhpcy5jbGVhcigpXG5cbiAgICB0aGlzLl9mb3JjZV91cGRhdGUgPSBmYWxzZVxuICAgIHRoaXMuX2ZvcmNlX2ZsaXAgPSBmYWxzZVxuXG4gICAgdGhpcy5fcGFsZXR0ZV9jaGlwLnJlc2V0KClcbiAgICB0aGlzLl9mb250X2NoaXAucmVzZXQoKVxuICAgIHRoaXMuX3RleHRfY2hpcC5yZXNldCgpXG4gICAgdGhpcy5fY3Vyc29yX2NoaXAucmVzZXQoKVxuICAgIHRoaXMuX3Nwcml0ZV9jaGlwLnJlc2V0KClcbiAgICB0aGlzLl9vdmVybGF5cy5yZXNldCgpXG5cbiAgICByZXR1cm4gdGhpcy5yZXNpemUoKVxuICB9XG5cbiAgZ2V0IHNjYWxlICgpIHsgcmV0dXJuIHRoaXMuX3NjYWxlIH1cbiAgc2V0IHNjYWxlICh2YWx1ZSkge1xuICAgIHRoaXMuX3NjYWxlID0gdmFsdWVcbiAgICB0aGlzLnJlc2l6ZSgpXG4gIH1cblxuICBzZXQgd2lkdGggKHZhbHVlKSB7XG4gICAgdGhpcy5fd2lkdGggPSB2YWx1ZVxuICAgIHRoaXMucmVzaXplKClcbiAgfVxuXG4gIHNldCBoZWlnaHQgKHZhbHVlKSB7XG4gICAgdGhpcy5faGVpZ2h0ID0gdmFsdWVcbiAgICB0aGlzLnJlc2l6ZSgpXG4gIH1cblxuICBnZXQgdmlkZW9fY2hpcCAoKSB7IHJldHVybiB0aGlzIH1cbiAgZ2V0IHBhbGV0dGVfY2hpcCAoKSB7IHJldHVybiB0aGlzLl9wYWxldHRlX2NoaXAgfVxuICBnZXQgZm9udF9jaGlwICgpIHsgcmV0dXJuIHRoaXMuX2ZvbnRfY2hpcCB9XG4gIGdldCB0ZXh0X2NoaXAgKCkgeyByZXR1cm4gdGhpcy5fdGV4dF9jaGlwIH1cbiAgZ2V0IGN1cnNvcl9jaGlwICgpIHsgcmV0dXJuIHRoaXMuX2N1cnNvcl9jaGlwIH1cbiAgZ2V0IHNwcml0ZV9jaGlwICgpIHsgcmV0dXJuIHRoaXMuX3Nwcml0ZV9jaGlwIH1cblxuICBnZXQgb3ZlcmxheXMgKCkgeyByZXR1cm4gdGhpcy5fb3ZlcmxheXMgfVxuXG4gIGdldCBzdGFnZSAoKSB7IHJldHVybiB0aGlzLl9zdGFnZSB9XG4gIGdldCByZW5kZXJlciAoKSB7IHJldHVybiB0aGlzLl9yZW5kZXJlciB9XG5cbiAgZ2V0IHNwcml0ZSAoKSB7IHJldHVybiB0aGlzLl9zcHJpdGUgfVxuICBnZXQgdGV4dHVyZSAoKSB7IHJldHVybiB0aGlzLl90ZXh0dXJlIH1cbiAgZ2V0IGNhbnZhcyAoKSB7IHJldHVybiB0aGlzLl9jYW52YXMgfVxuICBnZXQgY29udGV4dCAoKSB7IHJldHVybiB0aGlzLl9jb250ZXh0IH1cbiAgZ2V0IGltYWdlRGF0YSAoKSB7IHJldHVybiB0aGlzLl9pbWFnZURhdGEgfVxuICBnZXQgcGl4ZWxzICgpIHsgcmV0dXJuIHRoaXMuX3BpeGVscyB9XG5cbiAgZ2V0IGZvcmNlX2ZsaXAgKCkgeyByZXR1cm4gdGhpcy5fZm9yY2VfZmxpcCB9XG4gIHNldCBmb3JjZV9mbGlwICh2YWx1ZSkgeyB0aGlzLl9mb3JjZV9mbGlwID0gdmFsdWUgfVxuXG4gIHRpY2sgKGRlbHRhKSB7XG4gICAgdGhpcy5fcGFsZXR0ZV9jaGlwLnRpY2soZGVsdGEpXG4gICAgdGhpcy5fZm9udF9jaGlwLnRpY2soZGVsdGEpXG4gICAgdGhpcy5fdGV4dF9jaGlwLnRpY2soZGVsdGEpXG4gICAgdGhpcy5fY3Vyc29yX2NoaXAudGljayhkZWx0YSlcbiAgICB0aGlzLl9zcHJpdGVfY2hpcC50aWNrKGRlbHRhKVxuXG4gICAgaWYgKHRoaXMuX2ZvcmNlX3VwZGF0ZSkge1xuICAgICAgdGhpcy5fZm9yY2VfdXBkYXRlID0gZmFsc2VcblxuICAgICAgaWYgKHRoaXMuX2ZvcmNlX2ZsaXApIHtcbiAgICAgICAgdGhpcy5mbGlwKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVuZGVyZXIucmVuZGVyKHRoaXMuX3N0YWdlKVxuICAgIH1cblxuICAgIHRoaXMuX292ZXJsYXlzLnRpY2soZGVsdGEpXG4gIH1cblxuICByZWZyZXNoIChmbGlwID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMuX2ZvcmNlX2ZsaXApIHtcbiAgICAgIHRoaXMuX2ZvcmNlX2ZsaXAgPSBmbGlwXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdyZWZyZXNoJywgeyBmbGlwIH0pXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZmxpcCAoKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgbGV0IHBpeGVscyA9IHRoaXMuX3BpeGVsc1xuICAgIGxldCBwYWwgPSB0aGlzLl9wYWxldHRlX2NoaXBcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKSB7XG4gICAgICBwaXhlbHNbaV0gPSBwYWwuZGF0YVtkYXRhW2ldXVxuICAgIH1cblxuICAgIHRoaXMuX2NvbnRleHQucHV0SW1hZ2VEYXRhKHRoaXMuX2ltYWdlRGF0YSwgMCwgMClcblxuICAgIHRoaXMuX2ZvcmNlX2ZsaXAgPSBmYWxzZVxuXG4gICAgdGhpcy5lbWl0KCdmbGlwJylcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBjZW50ZXIgKCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcuc3R5bGUubGVmdCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC41IC0gdGhpcy5fcmVuZGVyZXIud2lkdGggKiAwLjUgKyAncHgnXG4gICAgdGhpcy5fcmVuZGVyZXIudmlldy5zdHlsZS50b3AgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjUgLSB0aGlzLl9yZW5kZXJlci5oZWlnaHQgKiAwLjUgKyAncHgnXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc2NhbGUgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCgncmVzY2FsZScsIHsgd2lkdGgsIGhlaWdodCB9KS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICB0aGlzLnNjYWxlID0gTWF0aC5jZWlsKE1hdGgubWluKHdpZHRoIC8gdGhpcy5fcmVuZGVyZXIud2lkdGgsIGhlaWdodCAvIHRoaXMuX3JlbmRlcmVyLmhlaWdodCkpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXNpemUgKCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlc2l6ZSh0aGlzLl93aWR0aCAqIHRoaXMuX3NjYWxlLCB0aGlzLl9oZWlnaHQgKiB0aGlzLl9zY2FsZSlcblxuICAgIGlmICh0aGlzLl9zcHJpdGUpIHtcbiAgICAgIHRoaXMuX3Nwcml0ZS50ZXh0dXJlID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLl90ZXh0dXJlKSB7XG4gICAgICB0aGlzLl90ZXh0dXJlLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fdGV4dHVyZSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY2FudmFzKSB7XG4gICAgICB0aGlzLl9jYW52YXMucmVtb3ZlKClcbiAgICB9XG5cbiAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIHRoaXMuX2NhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fd2lkdGhcbiAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5faGVpZ2h0XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9jYW52YXMpXG5cbiAgICB0aGlzLl90ZXh0dXJlID0gUElYSS5UZXh0dXJlLmZyb21DYW52YXModGhpcy5fY2FudmFzLCBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1QpXG5cbiAgICBpZiAoIXRoaXMuX3Nwcml0ZSkge1xuICAgICAgdGhpcy5fc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMuX3RleHR1cmUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fc3ByaXRlLnRleHR1cmUgPSB0aGlzLl90ZXh0dXJlXG4gICAgfVxuXG4gICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHsgYWxwaGE6IHRydWUsIGFudGlhbGlhczogZmFsc2UgfSlcbiAgICB0aGlzLl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuXG4gICAgdGhpcy5faW1hZ2VEYXRhID0gdGhpcy5fY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcblxuICAgIHRoaXMuX3BpeGVscyA9IG5ldyBVaW50MzJBcnJheSh0aGlzLl9pbWFnZURhdGEuZGF0YS5idWZmZXIpXG5cbiAgICB0aGlzLmNlbnRlcigpXG5cbiAgICB0aGlzLnRlc3QoKVxuXG4gICAgdGhpcy5fb3ZlcmxheXMucmVzaXplKClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwaXhlbCAoaSwgYykge1xuICAgIGxldCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGlmIChjICE9PSB1bmRlZmluZWQgJiYgZGF0YVtpXSAhPT0gYykge1xuICAgICAgZGF0YVtpXSA9IE1hdGgubWF4KDAsIE1hdGgubWluKGMsIHRoaXMuX3BhbGV0dGVfY2hpcC5jb3VudCAtIDEpKVxuICAgIH1cbiAgICByZXR1cm4gZGF0YVtpXVxuICB9XG5cbiAgdG9JbmRleCAoeCwgeSkgeyByZXR1cm4geSAqIHRoaXMuX3dpZHRoICsgeCB9XG5cbiAgZnJvbUluZGV4IChpKSB7XG4gICAgbGV0IHkgPSBNYXRoLm1pbihNYXRoLnRydW5jKGkgLyB0aGlzLl93aWR0aCksIHRoaXMuX2hlaWdodCAtIDEpXG4gICAgbGV0IHggPSBpIC0geVxuICAgIHJldHVybiB7IHgsIHkgfVxuICB9XG5cbiAgc2Nyb2xsICh4LCB5KSB7XG4gICAgbGV0IGx3ID0geSAqIHRoaXMuX3dpZHRoXG4gICAgbGV0IHMgPSBsd1xuICAgIGxldCBlID0gdGhpcy5fc2l6ZSAtIGx3XG4gICAgdGhpcy5fZGF0YS5jb3B5KHMsIDAsIGUgLSBzKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBsb2FkVGV4dHVyZSAoZmlsZW5hbWUpIHtcbiAgICBsZXQgdGV4ID0gUElYSS5UZXh0dXJlLmZyb21JbWFnZSgnLi9idWlsZC8nICsgcmVxdWlyZSgnZmlsZT9uYW1lPWFzc2V0cy9bbmFtZV0uW2V4dF0hLi4vLi4vLi4vYXNzZXRzL2ltZ3MvJyArIGZpbGVuYW1lKSwgdW5kZWZpbmVkLCBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1QpXG4gICAgdGV4Lm9uKCd1cGRhdGUnLCAoKSA9PiB0aGlzLnVwZGF0ZSgpKVxuICAgIHJldHVybiB0ZXhcbiAgfVxuXG4gIHRlc3QgKCkge1xuICAgIHRoaXMuY2xlYXIoKVxuXG4gICAgdGhpcy5fc3RhZ2UucmVtb3ZlQ2hpbGRyZW4oKVxuXG4gICAgbGV0IHQgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5sb2FkVGV4dHVyZSgndGVzdC5wbmcnKSlcbiAgICB0aGlzLl9zdGFnZS5hZGRDaGlsZCh0KVxuXG4gICAgbGV0IHRleHQgPSBuZXcgUElYSS5UZXh0KCdUaGlzIGlzIGEgcGl4aSB0ZXh0JywgeyBmb250OiAnMjBweCBcIkdsYXNzIFRUWSBWVDIyMFwiJywgZmlsbDogMHhGRkZGRkYgfSlcbiAgICB0ZXh0LnRleHR1cmUuYmFzZVRleHR1cmUuc2NhbGVNb2RlID0gUElYSS5TQ0FMRV9NT0RFUy5ORUFSRVNUXG4gICAgdGV4dC5jb250ZXh0LmNhbnZhcy5zdHlsZVsnZm9udC1zbW9vdGhpbmcnXSA9ICduZXZlcidcbiAgICB0ZXh0LmNvbnRleHQuY2FudmFzLnN0eWxlWyctd2Via2l0LWZvbnQtc21vb3RoaW5nJ10gPSAnbm9uZSdcbiAgICB0ZXh0LmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2VcbiAgICB0ZXh0LmNvbnRleHQuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnaGlkZGVuJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dC5jb250ZXh0LmNhbnZhcylcbiAgICB0ZXh0LnVwZGF0ZVRleHQoKVxuICAgIHRoaXMuX3N0YWdlLmFkZENoaWxkKHRleHQpXG4gICAgdGhpcy51cGRhdGUoKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGV4dC5jb250ZXh0LmNhbnZhcylcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvdmlkZW8uanMiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbGV0dGUgZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoJ2kzMicsICdwYWxldHRlJywgWydjb3VudCddKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuXG4gICAgdGhpcy5fZGF0YVswXSA9IDB4MDAwMDAwXG4gICAgdGhpcy5fZGF0YVsxXSA9IDB4ODAwMDAwXG4gICAgdGhpcy5fZGF0YVsyXSA9IDB4MDA4MDAwXG4gICAgdGhpcy5fZGF0YVszXSA9IDB4ODA4MDAwXG4gICAgdGhpcy5fZGF0YVs0XSA9IDB4MDAwMDgwXG4gICAgdGhpcy5fZGF0YVs1XSA9IDB4ODAwMDgwXG4gICAgdGhpcy5fZGF0YVs2XSA9IDB4MDA4MDgwXG4gICAgdGhpcy5fZGF0YVs3XSA9IDB4YzBjMGMwXG4gICAgdGhpcy5fZGF0YVs4XSA9IDB4ODA4MDgwXG4gICAgdGhpcy5fZGF0YVs5XSA9IDB4ZmYwMDAwXG4gICAgdGhpcy5fZGF0YVsxMF0gPSAweDAwZmYwMFxuICAgIHRoaXMuX2RhdGFbMTFdID0gMHhmZmZmMDBcbiAgICB0aGlzLl9kYXRhWzEyXSA9IDB4MDAwMGZmXG4gICAgdGhpcy5fZGF0YVsxM10gPSAweGZmMDBmZlxuICAgIHRoaXMuX2RhdGFbMTRdID0gMHgwMGZmZmZcbiAgICB0aGlzLl9kYXRhWzE1XSA9IDB4ZmZmZmZmXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0IGJsYWNrICgpIHsgcmV0dXJuIDAgfVxuICBnZXQgZGtyZWQgKCkgeyByZXR1cm4gMSB9XG4gIGdldCBka2dyZWVuICgpIHsgcmV0dXJuIDIgfVxuICBnZXQgZGt5ZWxsb3cgKCkgeyByZXR1cm4gMyB9XG4gIGdldCBka2JsdWUgKCkgeyByZXR1cm4gNCB9XG4gIGdldCBka2Z1Y2hzaWEgKCkgeyByZXR1cm4gNSB9XG4gIGdldCB0ZWFsICgpIHsgcmV0dXJuIDYgfVxuICBnZXQgZ3JleSAoKSB7IHJldHVybiA3IH1cbiAgZ2V0IGRrZ3JleSAoKSB7IHJldHVybiA4IH1cbiAgZ2V0IHJlZCAoKSB7IHJldHVybiA5IH1cbiAgZ2V0IGxpbWUgKCkgeyByZXR1cm4gMTAgfVxuICBnZXQgeWVsbG93ICgpIHsgcmV0dXJuIDExIH1cbiAgZ2V0IGJsdWUgKCkgeyByZXR1cm4gMTIgfVxuICBnZXQgZnVjaHNpYSAoKSB7IHJldHVybiAxMyB9XG4gIGdldCBjeWFuICgpIHsgcmV0dXJuIDE0IH1cbiAgZ2V0IHdoaXRlICgpIHsgcmV0dXJuIDE1IH1cblxuICBmcm9tX3JnYiAoYykgeyByZXR1cm4gXy5maW5kKHRoaXMuX2RhdGEsIGMpIH1cblxuICB0b19yZ2IgKGMpIHsgcmV0dXJuIHRoaXMuX2RhdGFbY10gfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvcGFsZXR0ZS5qcyIsImltcG9ydCB7IEVtaXR0ZXIgfSBmcm9tICcuLi8uLi9lbWl0dGVyLmpzJ1xuaW1wb3J0IHsgYXN5bmMgfSBmcm9tICcuLi8uLi91dGlscy5qcydcbmltcG9ydCB7IGRhdGFfdHlwZV9zaXplcywgZGF0YV90eXBlX2ZucyB9IGZyb20gJy4uL21lbW9yeS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpcCBleHRlbmRzIEVtaXR0ZXIge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX21haW4gPSBtYWluXG4gIH1cblxuICBpbml0IChkYXRhX3NpemUgPSAnaTgnLCBuYW1lID0gJycsIGtleXMgPSBbXSwgbm9kYXRhID0gZmFsc2UpIHtcbiAgICBsZXQgbWFpbiA9IHRoaXMuX21haW5cblxuICAgIGZvciAobGV0IGsgb2Yga2V5cykge1xuICAgICAgdGhpc1snXycgKyBrXSA9IG1haW4uZGVmYXVsdChuYW1lICsgJy4nICsgaylcbiAgICB9XG5cbiAgICBpZiAoIW5vZGF0YSkge1xuICAgICAgbGV0IHN6ID0gXy5pc051bWJlcihkYXRhX3NpemUpID8gZGF0YV9zaXplIDogZGF0YV90eXBlX3NpemVzW2RhdGFfc2l6ZV1cbiAgICAgIHRoaXMuX3NpemUgPSAodGhpcy5fY291bnQgfHwgMSkgKiAodGhpcy5fd2lkdGggKiB0aGlzLl9oZWlnaHQpICogc3pcblxuICAgICAgdGhpcy5fdG9wID0gXy5nZXQobWFpbiwgJ21lbV9tYXAuJyArIG5hbWUgKyAnLnRvcCcsIDApXG4gICAgICB0aGlzLl9ib3R0b20gPSB0aGlzLl90b3AgKyB0aGlzLl9zaXplIC0gMVxuXG4gICAgICB0aGlzLl9kYXRhID0gbmV3IHdpbmRvd1tkYXRhX3R5cGVfZm5zW18uaXNTdHJpbmcoZGF0YV9zaXplKSA/IGRhdGFfc2l6ZSA6ICdpOCddICsgJ0FycmF5J10odGhpcy5tZW1vcnkuYnVmZmVyLCB0aGlzLl90b3AsIHRoaXMuX3NpemUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9mb3JjZV91cGRhdGUgPSBmYWxzZVxuICAgIHJldHVybiB0aGlzLmNsZWFyKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICB9XG5cbiAgZ2V0IG1haW4gKCkgeyByZXR1cm4gdGhpcy5fbWFpbiB9XG4gIGdldCBtZW1vcnkgKCkgeyByZXR1cm4gdGhpcy5fbWFpbi5tZW1vcnkgfVxuXG4gIGdldCB2aWRlb19jaGlwICgpIHsgcmV0dXJuIHRoaXMuX21haW4udmlkZW9fY2hpcCB9XG4gIGdldCBwYWxldHRlX2NoaXAgKCkgeyByZXR1cm4gdGhpcy52aWRlb19jaGlwLnBhbGV0dGVfY2hpcCB9XG4gIGdldCBmb250X2NoaXAgKCkgeyByZXR1cm4gdGhpcy52aWRlb19jaGlwLmZvbnRfY2hpcCB9XG4gIGdldCB0ZXh0X2NoaXAgKCkgeyByZXR1cm4gdGhpcy52aWRlb19jaGlwLnRleHRfY2hpcCB9XG4gIGdldCBjdXJzb3JfY2hpcCAoKSB7IHJldHVybiB0aGlzLnRleHRfY2hpcC5jdXJzb3JfY2hpcCB9XG4gIGdldCBzcHJpdGVfY2hpcCAoKSB7IHJldHVybiB0aGlzLnZpZGVvX2NoaXAuc3ByaXRlX2NoaXAgfVxuXG4gIGdldCBkYXRhICgpIHsgcmV0dXJuIHRoaXMuX2RhdGEgfVxuICBnZXQgdG9wICgpIHsgcmV0dXJuIHRoaXMuX3RvcCB9XG4gIGdldCBib3R0b20gKCkgeyByZXR1cm4gdGhpcy5fYm90dG9tIH1cbiAgZ2V0IHNpemUgKCkgeyByZXR1cm4gdGhpcy5fc2l6ZSB9XG5cbiAgZ2V0IHdpZHRoICgpIHsgcmV0dXJuIHRoaXMuX3dpZHRoIH1cbiAgZ2V0IGhlaWdodCAoKSB7IHJldHVybiB0aGlzLl9oZWlnaHQgfVxuXG4gIGdldCBmb3JjZV91cGRhdGUgKCkgeyByZXR1cm4gdGhpcy5fZm9yY2VfdXBkYXRlIH1cbiAgc2V0IGZvcmNlX3VwZGF0ZSAodmFsdWUpIHsgdGhpcy5fZm9yY2VfdXBkYXRlID0gdmFsdWUgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5fZm9yY2VfdXBkYXRlID0gdHJ1ZVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0aWNrIChkZWx0YSkge1xuICAgIGlmICh0aGlzLl9mb3JjZV91cGRhdGUpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgICB0aGlzLl9mb3JjZV91cGRhdGUgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyICh2ID0gMCkge1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl9kYXRhLmZpbGwodilcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIHJlZnJlc2ggKGZsaXAgPSB0cnVlKSB7XG4gICAgdGhpcy52aWRlb19jaGlwLmZvcmNlX3VwZGF0ZSA9IHRydWVcbiAgICB0aGlzLnZpZGVvX2NoaXAucmVmcmVzaChmbGlwKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBhc3luYyAoZm4sIGFyZ3MsIGRlbGF5KSB7XG4gICAgYXN5bmModGhpcywgZm4sIGFyZ3MsIGRlbGF5KVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy9jaGlwLmpzIiwiaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb250IGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KCdpOCcsICdmb250JywgWydjb3VudCcsICd3aWR0aCcsICdoZWlnaHQnXSlcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgZHJhdyAoeCwgeSwgYywgZmcgPSAxLCBiZyA9IDApIHtcbiAgICBsZXQgdyA9IHRoaXMuX3dpZHRoXG4gICAgbGV0IGggPSB0aGlzLl9oZWlnaHRcbiAgICBsZXQgc3ogPSB0aGlzLl9zaXplXG4gICAgbGV0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgbGV0IHZpZGVvID0gdGhpcy52aWRlb19jaGlwXG5cbiAgICBsZXQgcHRyID0gdGhpcy5fdG9wICsgYyAqIHN6XG4gICAgZm9yIChsZXQgYnkgPSAwOyBieSA8IGg7IGJ5KyspIHtcbiAgICAgIGxldCBwaSA9ICh5ICsgYnkpICogdyArIHhcbiAgICAgIGZvciAobGV0IGJ4ID0gMDsgYnggPCB3OyBieCsrKSB7XG4gICAgICAgIHZpZGVvLnBpeGVsKHBpKyssIGRhdGFbcHRyKytdID8gZmcgOiBiZylcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy9mb250LmpzIiwiaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5pbml0KDMsICd0ZXh0JywgWyd3aWR0aCcsICdoZWlnaHQnXSlcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgY2xlYXIgKGNoID0gJyAnLCBiZyA9IDApIHtcbiAgICB0aGlzLl9kYXRhLmZpbGwoMHhGRjAwMDAgJiBjaC5jaGFyQ29kZUF0KDApIHwgMHgwMDAwRkYgJiBiZylcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgZHJhdyAoKSB7XG4gICAgbGV0IHcgPSB0aGlzLl93aWR0aFxuICAgIGxldCBoID0gdGhpcy5faGVpZ2h0XG4gICAgbGV0IG1lbSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgZm50ID0gdGhpcy5mb250X2NoaXBcbiAgICBsZXQgZncgPSBmbnQud2lkdGhcbiAgICBsZXQgZmggPSBmbnQuaGVpZ2h0XG5cbiAgICBsZXQgaWR4ID0gMFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XG4gICAgICBsZXQgcHkgPSB5ICogZmhcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdzsgeCsrKSB7XG4gICAgICAgIGxldCBjID0gbWVtW2lkeF1cbiAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICBmbnQuZHJhdyh4ICogZncsIHB5LCBjLCBtZW1baWR4ICsgMV0sIG1lbVtpZHggKyAyXSlcbiAgICAgICAgfVxuICAgICAgICBpZHggKz0gM1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBkcmF3X2NoYXIgKHgsIHksIGMsIGZnLCBiZykge1xuICAgIGxldCBmbnQgPSB0aGlzLmZvbnRfY2hpcFxuICAgIGZudC5kcmF3KHggKiBmbnQud2lkdGgsIHkgKiBmbnQuaGVpZ2h0LCBjLCBmZywgYmcpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGluZGV4ICh4LCB5KSB7XG4gICAgcmV0dXJuICgoeSAtIDEpICogdGhpcy5fd2lkdGggKyAoeCAtIDEpKSAqIDNcbiAgfVxuXG4gIGxpbmUgKHkpIHtcbiAgICBsZXQgbCA9IHRoaXMuX3dpZHRoICogM1xuICAgIHJldHVybiB7IHN0YXJ0OiB5ICogbCwgZW5kOiAoeSArIDEpICogbCAtIDMsIGxlbmd0aDogbCB9XG4gIH1cblxuICBjaGFyX2F0ICh4LCB5KSB7XG4gICAgbGV0IHRpZHggPSB0aGlzLmluZGV4KHgsIHkpXG4gICAgbGV0IG1lbSA9IHRoaXMuX2RhdGFcbiAgICByZXR1cm4geyBjaDogbWVtW3RpZHhdLCBmZzogbWVtW3RpZHggKyAxXSwgYmc6IG1lbVt0aWR4ICsgMl0gfVxuICB9XG5cbiAgcHV0X2NoYXIgKGNoLCBmZyA9IDEsIGJnID0gMCkge1xuICAgIHN3aXRjaCAoY2guY2hhckNvZGVBdCgwKSkge1xuICAgICAgY2FzZSAxMzpcbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIHJldHVybiB0aGlzLmNyKClcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcmV0dXJuIHRoaXMuYnMoKVxuICAgIH1cblxuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zKClcbiAgICB0aGlzLl9kYXRhLnNldChbY2guY2hhckNvZGVBdCgwKSwgZmcsIGJnXSwgdGhpcy5pbmRleCh4LCB5KSlcblxuICAgIHRoaXMuY3Vyc29yX2NoaXAueCsrXG4gICAgaWYgKHRoaXMuY3Vyc29yX2NoaXAueCA+IHRoaXMuX3dpZHRoKSB7XG4gICAgICB0aGlzLmNyKClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kcmF3X2NoYXIoeCwgeSwgY2gsIGZnLCBiZylcbiAgfVxuXG4gIHByaW50ICh0ZXh0LCBmZywgYmcpIHtcbiAgICBmb3IgKGxldCBjIG9mIHRleHQpIHtcbiAgICAgIHRoaXMucHV0X2NoYXIoYywgZmcsIGJnKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcG9zICgpIHsgcmV0dXJuIHsgeDogdGhpcy5jdXJzb3JfY2hpcC54LCB5OiB0aGlzLmN1cnNvcl9jaGlwLnkgfSB9XG5cbiAgbW92ZV90byAoeCwgeSkgeyByZXR1cm4gdGhpcy5jdXJzb3JfY2hpcC5tb3ZlX3RvKHgsIHkpIH1cblxuICBtb3ZlX2J5ICh4LCB5KSB7IHJldHVybiB0aGlzLmN1cnNvcl9jaGlwLm1vdmVfYnkoeCwgeSkgfVxuXG4gIGJvbCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8oMSwgdGhpcy5jdXJzb3JfY2hpcC55KSB9XG5cbiAgZW9sICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLl93aWR0aCwgdGhpcy5jdXJzb3JfY2hpcC55KSB9XG5cbiAgYm9zICgpIHsgcmV0dXJuIHRoaXMubW92ZV90bygxLCAxKSB9XG5cbiAgZW9zICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KSB9XG5cbiAgYnMgKCkgeyByZXR1cm4gdGhpcy5sZWZ0KCkucHV0X2NoYXIoJyAnKS5sZWZ0KCkgfVxuXG4gIGNyICgpIHsgcmV0dXJuIHRoaXMubW92ZV90bygxLCB0aGlzLmN1cnNvcl9jaGlwLnkgKyAxKSB9XG5cbiAgbGYgKCkgeyByZXR1cm4gdGhpcy5tb3ZlX3RvKHRoaXMuY3Vyc29yX2NoaXAueCwgdGhpcy5jdXJzb3JfY2hpcC55ICsgMSkgfVxuXG4gIHVwICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLmN1cnNvcl9jaGlwLngsIHRoaXMuY3Vyc29yX2NoaXAueSAtIDEpIH1cblxuICBsZWZ0ICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLmN1cnNvcl9jaGlwLnggLSAxLCB0aGlzLmN1cnNvcl9jaGlwLnkpIH1cblxuICBkb3duICgpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLmN1cnNvcl9jaGlwLngsIHRoaXMuY3Vyc29yX2NoaXAueSArIDEpIH1cblxuICByaWdodCAoKSB7IHJldHVybiB0aGlzLm1vdmVfdG8odGhpcy5jdXJzb3JfY2hpcC54ICsgMSwgdGhpcy5jdXJzb3JfY2hpcC55KSB9XG5cbiAgY2xlYXJfZW9sIChiZyA9IDApIHtcbiAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcygpXG4gICAgbGV0IHMgPSB0aGlzLmluZGV4KHgsIHkpXG4gICAgdGhpcy5fZGF0YS5maWxsKDB4MDAwMEZGICYgYmcsIHMsIHRoaXMuaW5kZXgodGhpcy5fd2lkdGgsIHkpIC0gcylcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY2xlYXJfZW9zIChiZyA9IDApIHtcbiAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLnBvcygpXG4gICAgbGV0IHMgPSB0aGlzLmluZGV4KHgsIHkpXG4gICAgdGhpcy5fZGF0YS5maWxsKDB4MDAwMEZGICYgYmcsIHMsIHRoaXMuX3NpemUgLSBzKVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjbGVhcl9ib2wgKGJnID0gMCkge1xuICAgIGxldCB7IHgsIHkgfSA9IHRoaXMucG9zKClcbiAgICBsZXQgcyA9IHRoaXMuaW5kZXgoeCwgeSlcbiAgICB0aGlzLl9kYXRhLmZpbGwoMHgwMDAwRkYgJiBiZywgcywgdGhpcy5pbmRleCgxLCB5KSAtIHMpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNsZWFyX2JvcyAoYmcgPSAwKSB7XG4gICAgbGV0IHsgeCwgeSB9ID0gdGhpcy5wb3MoKVxuICAgIHRoaXMuX2RhdGEuZmlsbCgweDAwMDBGRiAmIGJnLCAwLCB0aGlzLmluZGV4KHgsIHkpIC0gMSlcbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY29weV9saW5lIChzeSwgdHkpIHtcbiAgICBsZXQgc2kgPSB0aGlzLmxpbmUoc3kpXG4gICAgdGhpcy5fZGF0YS5jb3B5KHNpLnN0YXJ0LCB0aGlzLmxpbmUodHkpLCBzaS5sZW5ndGgpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNvcHlfY29sIChzeCwgdHgpIHtcbiAgICBsZXQgbWVtID0gdGhpcy5fZGF0YVxuICAgIHN4ICo9IDRcbiAgICB0eCAqPSA0XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLl9oZWlnaHQ7IHkrKykge1xuICAgICAgbGV0IGkgPSB0aGlzLmxpbmUoeSlcbiAgICAgIG1lbS5jb3B5KGkuc3RhcnQgKyBzeCwgaS5zdGFydCArIHR4LCAzKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgZXJhc2VfbGluZSAoeSwgYmcgPSAwKSB7XG4gICAgbGV0IGkgPSB0aGlzLmxpbmUoeSlcbiAgICB0aGlzLl9kYXRhLmZpbGwoMHgwMDAwRkYgJiBiZywgaS5zdGFydCwgaS5sZW5ndGgpXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGVyYXNlX2NvbCAoeCwgYmcgPSAwKSB7XG4gICAgbGV0IG1lbSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgbHMgPSB0aGlzLmxpbmUoMCkuc3RhcnQgKyB4ICogM1xuICAgIGxldCBjID0gMHgwMDAwRkYgJiBiZ1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5faGVpZ2h0OyB5KyspIHtcbiAgICAgIG1lbS5maWxsKGMsIGxzLCAzKVxuICAgICAgbHMgKz0gdGhpcy5fd2lkdGggKiAzXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBzY3JvbGwgKGR5KSB7XG4gICAgaWYgKGR5ID4gMCkge1xuICAgICAgbGV0IGkgPSB0aGlzLmxpbmUoZHkgKyAxKVxuICAgICAgdGhpcy5fZGF0YS5jb3B5KGkuc3RhcnQsIDAsIHRoaXMuX3NpemUpXG4gICAgICBpID0gdGhpcy5saW5lKGR5KVxuICAgICAgbGV0IHMgPSBpLnN0YXJ0XG4gICAgICB0aGlzLl9kYXRhLmZpbGwoMCwgcywgdGhpcy5fc2l6ZSAtIHMpXG4gICAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgICBlbHNlIGlmIChkeSA8IDApIHtcbiAgICAgIGxldCBpID0gdGhpcy5saW5lKGR5ICsgMSlcbiAgICAgIHRoaXMuX2RhdGEuY29weShpLnN0YXJ0LCAwLCB0aGlzLl9zaXplKVxuICAgICAgaSA9IHRoaXMubGluZShkeSlcbiAgICAgIGxldCBzID0gaS5zdGFydFxuICAgICAgdGhpcy5fZGF0YS5maWxsKDAsIHMsIHRoaXMuX3NpemUgLSBzKVxuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvdGV4dC5qcyIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByaXRlIGV4dGVuZHMgQ2hpcCB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcihtYWluKVxuXG4gICAgdGhpcy5fbGlzdCA9IFtdXG5cbiAgICB0aGlzLmluaXQoJ2k4JywgJ3Nwcml0ZScsIFsnY291bnQnLCAnd2lkdGgnLCAnaGVpZ2h0J10pXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIGNsZWFyICh2ID0gMCkge1xuICAgIHRoaXMuX2xpc3QgPSBbXVxuICAgIHJldHVybiBzdXBlci5jbGVhcih2KVxuICB9XG5cbiAgZmluZCAobmFtZSkge1xuICAgIGZvciAobGV0IHMgb2YgdGhpcy5fbGlzdCkge1xuICAgICAgaWYgKHMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gc1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgYWRkIChuYW1lLCBmcmFtZSwgeCwgeSwgeikge1xuICAgIHRoaXMuX2xpc3QucHVzaCh7IG5hbWUsIGZyYW1lLCB4LCB5LCB6LCBpbmRleDogTnVtYmVyLk1BWF9WQUxVRSB9KVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkZWwgKG5hbWUpIHtcbiAgICBsZXQgcyA9IHRoaXMuZmluZChuYW1lKVxuICAgIGlmIChzKSB7XG4gICAgICB0aGlzLl9saXN0LnNwbGljZShzLmluZGV4LCAxKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgbW92ZSAobmFtZSwgeCwgeSwgeikge1xuICAgIGxldCBzID0gdGhpcy5maW5kKG5hbWUpXG4gICAgaWYgKHMpIHtcbiAgICAgIHMueCA9IHhcbiAgICAgIHMueSA9IHlcbiAgICAgIGlmICh6KSB7XG4gICAgICAgIHMueiA9IHpcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIG1vdmVfYnkgKG5hbWUsIHgsIHkpIHtcbiAgICBsZXQgcyA9IHRoaXMuZmluZChuYW1lKVxuICAgIGlmIChzKSB7XG4gICAgICBzLnggPSB4XG4gICAgICBzLnkgPSB5XG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICBsZXQgc3cgPSB0aGlzLl93aWR0aFxuICAgIGxldCBzaCA9IHRoaXMuX2hlaWdodFxuICAgIGxldCBzbCA9IHRoaXMuX2xpc3RcbiAgICBsZXQgc3MgPSB0aGlzLl9zaXplXG4gICAgbGV0IGRhdGEgPSB0aGlzLl9kYXRhXG4gICAgbGV0IHZpZGVvID0gdGhpcy52aWRlb19jaGlwXG5cbiAgICBmb3IgKGxldCBzIG9mIF8uc29ydEJ5KHNsLCAneicpKSB7XG4gICAgICBsZXQgcHRyID0gc2wgKyBzLmZyYW1lICogc3NcbiAgICAgIGZvciAobGV0IGJ5ID0gMDsgYnkgPCBzaDsgYnkrKykge1xuICAgICAgICBsZXQgcGkgPSAocy55ICsgYnkpICogc3cgKyBzLnhcbiAgICAgICAgZm9yIChsZXQgYnggPSAwOyBieCA8IHN3OyBieCsrKSB7XG4gICAgICAgICAgdmlkZW8ucGl4ZWwocGkrKywgZGF0YVtwdHIrK10pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC92bS9jaGlwcy9zcHJpdGUuanMiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cblxuZXhwb3J0IGNsYXNzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yICh2aWRlbywgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMudmlkZW8gPSB2aWRlb1xuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgdGhpcy5sYXN0ID0gMFxuICB9XG5cbiAgY3JlYXRlICgpIHtcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBQSVhJLkNhbnZhc0J1ZmZlcih0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcblxuICAgIHRoaXMudGV4ID0gUElYSS5UZXh0dXJlLmZyb21DYW52YXModGhpcy5jYW52YXMuY2FudmFzLCBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1QpXG4gICAgdGhpcy50ZXguc2NhbGVNb2RlID0gUElYSS5TQ0FMRV9NT0RFUy5ORUFSRVNUXG5cbiAgICB0aGlzLnNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLnRleClcblxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHsgYWxwaGE6IHRydWUsIGFudGlhbGlhczogZmFsc2UgfSlcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmNhbnZhcykge1xuICAgICAgdGhpcy5jYW52YXMuZGVzdHJveSgpXG4gICAgICB0aGlzLmNhbnZhcyA9IG51bGxcbiAgICB9XG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMudmlkZW8uZm9yY2VfdXBkYXRlID0gdHJ1ZVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgU2NyZWVuT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yICh2aWRlbywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKHZpZGVvLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuXG4gICAgdGhpcy5zcHJpdGUueCA9IHRoaXMudmlkZW8ub2Zmc2V0X3ggKyB0aGlzLnZpZGVvLm1hcmdpbnNfeCAvIDJcbiAgICB0aGlzLnNwcml0ZS55ID0gdGhpcy52aWRlby5vZmZzZXRfeSArIHRoaXMudmlkZW8ubWFyZ2luc195IC8gMlxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgU2NhbmxpbmVzT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yICh2aWRlbywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKHZpZGVvLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5nYXAgPSBfLmdldChvcHRpb25zLCAnZ2FwJywgMylcbiAgICB0aGlzLmFscGhhID0gXy5nZXQob3B0aW9ucywgJ2FscGhhJywgMC4zNSlcblxuICAgIHRoaXMuY3JlYXRlKClcblxuICAgIGxldCBhID0gdGhpcy5hbHBoYSAqIDI1NVxuICAgIGxldCBkYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICBsZXQgcGl4ZWxzID0gZGF0YS5kYXRhXG4gICAgbGV0IHN6ID0gdGhpcy53aWR0aCAqIDRcbiAgICBsZXQgaWR4XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSArPSB0aGlzLmdhcCkge1xuICAgICAgaWR4ID0geSAqIHN6XG4gICAgICBmb3IgKGxldCBpID0gaWR4OyBpIDwgaWR4ICsgc3o7IGkgKz0gNCkge1xuICAgICAgICBwaXhlbHMuc2V0KFswLCAwLCAwLCBhXSwgaSlcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgU2NhbmxpbmVPdmVybGF5IGV4dGVuZHMgT3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IgKHZpZGVvLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIodmlkZW8sIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLnJlZnJlc2ggPSBfLmdldChvcHRpb25zLCAncmVmcmVzaCcsIDUwKVxuICAgIHRoaXMuc3BlZWQgPSBfLmdldChvcHRpb25zLCAnc3BlZWQnLCAxNilcbiAgICB0aGlzLmFscGhhID0gXy5nZXQob3B0aW9ucywgJ2FscGhhJywgMC4xKVxuXG4gICAgdGhpcy5jcmVhdGUoKVxuXG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIGxldCBwaXhlbHMgPSBkYXRhLmRhdGFcbiAgICBsZXQgc3ogPSB0aGlzLndpZHRoICogNFxuICAgIGxldCBsZW4gPSB0aGlzLmhlaWdodCAqIHN6XG4gICAgbGV0IGwgPSAwXG4gICAgbGV0IGggPSB0aGlzLmhlaWdodFxuICAgIGxldCBhID0gdGhpcy5hbHBoYSAqIDI1NVxuICAgIGxldCBhYVxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbGVuOyB5ICs9IHN6KSB7XG4gICAgICBhYSA9IGwgLyBoICogYVxuICAgICAgZm9yIChsZXQgeCA9IHk7IHggPCB5ICsgc3o7IHggKz0gNCkge1xuICAgICAgICBwaXhlbHMuc2V0KFsyNSwgMjUsIDI1LCBhYV0sIHgpXG4gICAgICB9XG4gICAgICBsKytcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKVxuXG4gICAgdGhpcy5zcHJpdGUueSA9IC10aGlzLnNwcml0ZS5oZWlnaHRcbiAgfVxuXG4gIHRpY2sgKHQpIHtcbiAgICBpZiAodCAtIHRoaXMubGFzdCA+PSB0aGlzLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuc3ByaXRlLnkgKz0gdGhpcy5zcGVlZFxuICAgICAgaWYgKHRoaXMuc3ByaXRlLnkgPiB0aGlzLmhlaWdodCkge1xuICAgICAgICB0aGlzLnNwcml0ZS55ID0gLXRoaXMuc3ByaXRlLmhlaWdodFxuICAgICAgfVxuICAgICAgdGhpcy5sYXN0ID0gdFxuXG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgTm9pc2VzT3ZlcmxheSBleHRlbmRzIE92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yICh2aWRlbywgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHN1cGVyKHZpZGVvLCB3aWR0aCwgaGVpZ2h0KVxuXG4gICAgdGhpcy5yZWZyZXNoID0gXy5nZXQob3B0aW9ucywgJ3JlZnJlc2gnLCAyNTApXG4gICAgdGhpcy5jb3VudCA9IF8uZ2V0KG9wdGlvbnMsICdjb3VudCcsIDgpXG4gICAgdGhpcy5yYXRlID0gXy5nZXQob3B0aW9ucywgJ3JhdGUnLCAwLjg1KVxuICAgIHRoaXMucmVkID0gXy5nZXQob3B0aW9ucywgJ3JlZCcsIDEwMClcbiAgICB0aGlzLmdyZWVuID0gXy5nZXQob3B0aW9ucywgJ2dyZWVuJywgMTAwKVxuICAgIHRoaXMuYmx1ZSA9IF8uZ2V0KG9wdGlvbnMsICdibHVlJywgMTAwKVxuICAgIHRoaXMuYWxwaGEgPSBfLmdldChvcHRpb25zLCAnYWxwaGEnLCAwLjE1KVxuXG4gICAgdGhpcy5ub2lzZXMgPSB7fVxuXG4gICAgbGV0IGEgPSB0aGlzLmFscGhhICogMjU1XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmNvdW50OyBjKyspIHtcbiAgICAgIGxldCBub2lzZSA9IG5ldyBPdmVybGF5KHRoaXMudmlkZW8sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgbm9pc2UuY3JlYXRlKClcbiAgICAgIG5vaXNlLnNwcml0ZS52aXNpYmxlID0gYyA9PT0gMFxuXG4gICAgICBsZXQgZGF0YSA9IG5vaXNlLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgbGV0IHBpeGVscyA9IGRhdGEuZGF0YVxuICAgICAgbGV0IGxlbiA9IHBpeGVscy5sZW5ndGhcbiAgICAgIGxldCByID0gdGhpcy5yZWRcbiAgICAgIGxldCBnID0gdGhpcy5ncmVlblxuICAgICAgbGV0IGIgPSB0aGlzLmJsdWVcbiAgICAgIGxldCBfcmF0ZSA9IHRoaXMucmF0ZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+PSBfcmF0ZSkge1xuICAgICAgICAgIHBpeGVscy5zZXQoW01hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIHIpLCBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiBnKSwgTWF0aC50cnVuYyhNYXRoLnJhbmRvbSgpICogYiksIGFdLCBpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBub2lzZS5jb250ZXh0LnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKVxuICAgICAgdGhpcy5ub2lzZXNbY10gPSBub2lzZVxuICAgICAgdGhpcy52aWRlby5fbWFpbi5zdGFnZS5hZGRDaGlsZChub2lzZS5zcHJpdGUpXG4gICAgfVxuXG4gICAgdGhpcy5ub2lzZUtleXMgPSBfLmtleXModGhpcy5ub2lzZXMpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBzdXBlci5kZXN0cm95KClcbiAgICBmb3IgKGxldCBrIGluIHRoaXMubm9pc2VzKSB7XG4gICAgICBsZXQgbm9pc2UgPSB0aGlzLm5vaXNlc1trXVxuICAgICAgbm9pc2UuZGVzdHJveSgpXG4gICAgfVxuICAgIHRoaXMubm9pc2VzID0ge31cbiAgICB0aGlzLm5vaXNlS2V5cyA9IFtdXG4gIH1cblxuICB0aWNrICh0KSB7XG4gICAgaWYgKHQgLSB0aGlzLmxhc3QgPj0gdGhpcy5yZWZyZXNoKSB7XG4gICAgICBmb3IgKGxldCBrIG9mIHRoaXMubm9pc2VLZXlzKSB7XG4gICAgICAgIHRoaXMubm9pc2VzW2tdLnNwcml0ZS52aXNpYmxlID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIGxldCBub2lzZSA9IHRoaXMubm9pc2VLZXlzW01hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIHRoaXMubm9pc2VLZXlzLmxlbmd0aCldXG4gICAgICB0aGlzLm5vaXNlc1tub2lzZV0uc3ByaXRlLnZpc2libGUgPSB0cnVlXG4gICAgICB0aGlzLmxhc3QgPSB0XG5cbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9XG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBSZ2JPdmVybGF5IGV4dGVuZHMgT3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IgKHZpZGVvLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIodmlkZW8sIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLmFscGhhID0gXy5nZXQob3B0aW9ucywgJ2FscGhhJywgMC4wNzUpXG5cbiAgICB0aGlzLmNyZWF0ZSgpXG5cbiAgICBsZXQgZGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgbGV0IHBpeGVscyA9IGRhdGEuZGF0YVxuICAgIGxldCBsZW4gPSBwaXhlbHMubGVuZ3RoXG4gICAgbGV0IGEgPSB0aGlzLmFscGhhICogMjU1XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMTIpIHtcbiAgICAgIHBpeGVscy5zZXQoWzEwMCwgMTAwLCAxMDAsIGFdLCBpKVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApXG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBDcnRPdmVybGF5IGV4dGVuZHMgT3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IgKHZpZGVvLCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIodmlkZW8sIHdpZHRoLCBoZWlnaHQpXG5cbiAgICB0aGlzLnJhZGl1cyA9IF8uZ2V0KG9wdGlvbnMsICdyYWRpdXMnLCAwLjI1KVxuICAgIHRoaXMuaW5zaWRlX2FscGhhID0gXy5nZXQob3B0aW9ucywgJ2luc2lkZV9hbHBoYScsIDAuMilcbiAgICB0aGlzLm91dHNpZGVfYWxwaGEgPSBfLmdldChvcHRpb25zLCAnb3V0c2lkZV9hbHBoYScsIDAuMTUpXG5cbiAgICB0aGlzLmNyZWF0ZSgpXG5cbiAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2RhcmtlcidcbiAgICBsZXQgZ3JhZGllbnQgPSB0aGlzLmNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy5oZWlnaHQgLyAyLCB0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyLCB0aGlzLmhlaWdodCAvIHRoaXMucmFkaXVzKVxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsIDI1NSwgMjU1LCAnICsgdGhpcy5pbnNpZGVfYWxwaGEgKyAnKScpXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDAsIDAsIDAsICcgKyB0aGlzLm91dHNpZGVfYWxwaGEgKyAnKScpXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50XG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIHRoaXMuY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInXG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBPdmVybGF5cyB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4sIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX21haW4gPSBtYWluXG5cbiAgICBsZXQgc3RhZ2UgPSBtYWluLnN0YWdlXG4gICAgbGV0IHJlbmRlcmVyID0gbWFpbi5yZW5kZXJlclxuXG4gICAgbGV0IHdpZHRoID0gcmVuZGVyZXIud2lkdGhcbiAgICBsZXQgaGVpZ2h0ID0gcmVuZGVyZXIuaGVpZ2h0XG4gICAgbGV0IHNjYWxlID0gdGhpcy5zY2FsZVxuICAgIGxldCBtYXJnaW5zX3ggPSB0aGlzLm1hcmdpbnNfeFxuICAgIGxldCBtYXJnaW5zX3kgPSB0aGlzLm1hcmdpbnNfeVxuXG4gICAgdGhpcy5fbGlzdCA9IHt9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ3NjcmVlbicpKSB7XG4gICAgICB0aGlzLl9saXN0LnNjcmVlbiA9IG5ldyBTY3JlZW5PdmVybGF5KHRoaXMsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQsIF8uZ2V0KG9wdGlvbnMsICdzY3JlZW4nKSlcbiAgICAgIHRoaXMuX2xpc3Quc2NyZWVuLnNwcml0ZS5zY2FsZSA9IG5ldyBQSVhJLlBvaW50KHNjYWxlLCBzY2FsZSlcbiAgICAgIHN0YWdlLmFkZENoaWxkKHRoaXMuX2xpc3Quc2NyZWVuLnNwcml0ZSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ3NjYW5saW5lcycpKSB7XG4gICAgICB0aGlzLl9saXN0LnNjYW5saW5lcyA9IG5ldyBTY2FubGluZXNPdmVybGF5KHRoaXMsIHdpZHRoLCBoZWlnaHQsIF8uZ2V0KG9wdGlvbnMsICdzY2FubGluZXMnKSlcbiAgICAgIHN0YWdlLmFkZENoaWxkKHRoaXMuX2xpc3Quc2NhbmxpbmVzLnNwcml0ZSlcbiAgICB9XG5cbiAgICBpZiAoXy5nZXQob3B0aW9ucywgJ3NjYW5saW5lJykpIHtcbiAgICAgIHRoaXMuX2xpc3Quc2NhbmxpbmUgPSBuZXcgU2NhbmxpbmVPdmVybGF5KHRoaXMsIHdpZHRoLCBoZWlnaHQsIF8uZ2V0KG9wdGlvbnMsICdzY2FubGluZScpKVxuICAgICAgc3RhZ2UuYWRkQ2hpbGQodGhpcy5fbGlzdC5zY2FubGluZS5zcHJpdGUpXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdyZ2InKSkge1xuICAgICAgdGhpcy5fbGlzdC5yZ2IgPSBuZXcgUmdiT3ZlcmxheSh0aGlzLCB3aWR0aCwgaGVpZ2h0LCBfLmdldChvcHRpb25zLCAncmdiJykpXG4gICAgICBzdGFnZS5hZGRDaGlsZCh0aGlzLl9saXN0LnJnYi5zcHJpdGUpXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdub2lzZXMnKSkge1xuICAgICAgdGhpcy5fbGlzdC5ub2lzZXMgPSBuZXcgTm9pc2VzT3ZlcmxheSh0aGlzLCB3aWR0aCwgaGVpZ2h0LCBfLmdldChvcHRpb25zLCAnbm9pc2VzJykpXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdjcnQnKSkge1xuICAgICAgdGhpcy5fbGlzdC5jcnQgPSBuZXcgQ3J0T3ZlcmxheSh0aGlzLCB3aWR0aCwgaGVpZ2h0LCBfLmdldChvcHRpb25zLCAnY3J0JykpXG4gICAgICBzdGFnZS5hZGRDaGlsZCh0aGlzLl9saXN0LmNydC5zcHJpdGUpXG4gICAgfVxuXG4gICAgaWYgKF8uZ2V0KG9wdGlvbnMsICdtb25pdG9yJykpIHtcbiAgICAgIGxldCB0ZXggPSBQSVhJLlRleHR1cmUuZnJvbUltYWdlKCcuL2J1aWxkLycgKyByZXF1aXJlKCdmaWxlP25hbWU9YXNzZXRzL1twYXRoXS9bbmFtZV0uW2V4dF0hLi4vLi4vYXNzZXRzL2ltZ3MvY3J0LnBuZycpKVxuICAgICAgdGhpcy5fbGlzdC5tb25pdG9yID0gbmV3IFBJWEkuU3ByaXRlKHRleClcbiAgICAgIHRoaXMuX2xpc3QubW9uaXRvci53aWR0aCA9IHdpZHRoICsgbWFyZ2luc194XG4gICAgICB0aGlzLl9saXN0Lm1vbml0b3IuaGVpZ2h0ID0gaGVpZ2h0ICsgbWFyZ2luc195XG4gICAgICB0aGlzLl9saXN0Lm1vbml0b3IueCA9IG1hcmdpbnNfeCAvIC0yXG4gICAgICB0aGlzLl9saXN0Lm1vbml0b3IueSA9IG1hcmdpbnNfeSAvIC0yXG4gICAgICBzdGFnZS5hZGRDaGlsZCh0aGlzLl9saXN0Lm1vbml0b3IpXG4gICAgfVxuICB9XG5cbiAgdGljayAoZGVsYXkpIHtcbiAgICBmb3IgKGxldCBrIGluIHRoaXMuX2xpc3QpIHtcbiAgICAgIGlmICh0aGlzLl9saXN0W2tdLnRpY2spIHtcbiAgICAgICAgdGhpcy5fbGlzdFtrXS50aWNrKGRlbGF5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBmb3IgKGxldCBrIGluIHRoaXMuX2xpc3QpIHtcbiAgICAgIGlmICh0aGlzLl9saXN0W2tdLnJlc2V0KSB7XG4gICAgICAgIHRoaXMuX2xpc3Rba10ucmVzZXQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIGZvciAobGV0IGsgaW4gdGhpcy5fbGlzdCkge1xuICAgICAgaWYgKHRoaXMuX2xpc3Rba10uZGVzdHJveSkge1xuICAgICAgICB0aGlzLl9saXN0W2tdLmRlc3Ryb3koKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZSAoKSB7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL292ZXJsYXlzLmpzIiwidmFyIG1hcCA9IHtcblx0XCIuL2NydC5wbmdcIjogMjcsXG5cdFwiLi90ZXN0LnBuZ1wiOiAyOFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyNjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltZ3MgLi9+L2ZpbGUtbG9hZGVyP25hbWU9YXNzZXRzL1tuYW1lXS5bZXh0XSFeXFwuXFwvLiokXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvY3J0LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9maWxlLWxvYWRlcj9uYW1lPWFzc2V0cy9bbmFtZV0uW2V4dF0hLi9hc3NldHMvaW1ncy9jcnQucG5nXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvdGVzdC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmlsZS1sb2FkZXI/bmFtZT1hc3NldHMvW25hbWVdLltleHRdIS4vYXNzZXRzL2ltZ3MvdGVzdC5wbmdcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDaGlwIGZyb20gJy4vY2hpcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBDaGlwIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKG1haW4pXG5cbiAgICB0aGlzLmluaXQoJ2kzMicsICdrZXlib2FyZCcsIFsnY291bnQnXSlcblxuICAgIHRoaXMuX29uS2V5ZG93biA9IHRoaXMub25LZXlkb3duLmJpbmQodGhpcylcbiAgICB0aGlzLl9vbktleXVwID0gdGhpcy5vbktleXVwLmJpbmQodGhpcylcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5dXApXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBzdXBlci5yZXNldCgpXG5cbiAgICB0aGlzLl9tb2RzID0gMFxuICAgIHRoaXMuX2pveXN0aWNrID0gMFxuICAgIHRoaXMuX2tleXMgPSB7fVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5dXApXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICBnZXQgbW9kcyAoKSB7IHJldHVybiB0aGlzLl9tb2RzIH1cbiAgZ2V0IGpveXN0aWNrICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrIH1cbiAgZ2V0IGtleXMgKCkgeyByZXR1cm4gdGhpcy5fa2V5cyB9XG5cbiAgZ2V0IHNoaWZ0ICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDAxIH1cbiAgZ2V0IGN0cmwgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyAmIDB4MDIgfVxuICBnZXQgYWx0ICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDA0IH1cbiAgZ2V0IG1ldGEgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyAmIDB4MDggfVxuICBnZXQgbnVtcGFkICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDEwIH1cbiAgZ2V0IGJ0bjAgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDEwIH1cbiAgZ2V0IGJ0bjEgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDIwIH1cbiAgZ2V0IGJ0bjIgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDQwIH1cbiAgZ2V0IGJ0bjMgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDgwIH1cbiAgZ2V0IGJ0bjQgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDEwMCB9XG4gIGdldCB1cCAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MDEgfVxuICBnZXQgZG93biAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayAmIDB4MDIgfVxuICBnZXQgcmlnaHQgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDA0IH1cbiAgZ2V0IGxlZnQgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDA4IH1cblxuICBldmVudERldGFpbHMgKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBlLmtleSxcbiAgICAgIGtleUNvZGU6IGUua2V5Q29kZSxcbiAgICAgIGtleXM6IHRoaXMuX2tleXMsXG4gICAgICBtb2RzOiB0aGlzLl9tb2RzLFxuICAgICAgam95c3RpY2s6IHRoaXMuX2pveXN0aWNrLFxuICAgICAgc2hpZnQ6IHRoaXMuc2hpZnQsXG4gICAgICBjdHJsOiB0aGlzLmN0cmwsXG4gICAgICBhbHQ6IHRoaXMuYWx0LFxuICAgICAgbWV0YTogdGhpcy5tZXRhLFxuICAgICAgbnVtcGFkOiB0aGlzLm51bXBhZCxcbiAgICAgIGJ0bjA6IHRoaXMuYnRuMCxcbiAgICAgIGJ0bjE6IHRoaXMuYnRuMSxcbiAgICAgIGJ0bjI6IHRoaXMuYnRuMixcbiAgICAgIGJ0bjM6IHRoaXMuYnRuMyxcbiAgICAgIGJ0bjQ6IHRoaXMuYnRuNCxcbiAgICAgIHVwOiB0aGlzLnVwLFxuICAgICAgZG93bjogdGhpcy5kb3duLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgfVxuICB9XG5cbiAgb25LZXlkb3duIChlKSB7XG4gICAgbGV0IG51bXBhZCA9IGUubG9jYXRpb24gPT09IDNcbiAgICBpZiAobnVtcGFkKSB7XG4gICAgICB0aGlzLl9tb2RzIHw9IDB4MTBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9tb2RzICY9IH4weDEwXG4gICAgfVxuICAgIHRoaXMuX2tleXNbZS5rZXlDb2RlXSA9IDFcblxuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ1NoaWZ0JzpcbiAgICAgICAgdGhpcy5fbW9kcyB8PSAweDAxXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0NvbnRyb2wnOlxuICAgICAgICB0aGlzLl9tb2RzIHw9IDB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQWx0JzpcbiAgICAgICAgdGhpcy5fbW9kcyB8PSAweDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ01ldGEnOlxuICAgICAgICB0aGlzLl9tb2RzIHw9IDB4MDhcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnOCc6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDAxXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICcyJzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDJcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzQnOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwNFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDA4XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzYnOiAvLyBudW1wYWQgNlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwOFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3onOiAvLyBidXR0b24gMFxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDEwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3gnOiAvLyBidXR0b24gMVxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDIwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2MnOiAvLyBidXR0b24gMlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDQwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJyAnOiAvLyBidXR0b24gM1xuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDgwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0VudGVyJzogLy8gYnV0dG9uIDRcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgxMDBcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ2tleS5kb3duJywgdGhpcy5ldmVudERldGFpbHMoZSkpXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICBvbktleXVwIChlKSB7XG4gICAgbGV0IG51bXBhZCA9IGUubG9jYXRpb24gPT09IDNcbiAgICBpZiAobnVtcGFkKSB7XG4gICAgICB0aGlzLl9tb2RzIHw9IDB4MTBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9tb2RzICY9IH4weDEwXG4gICAgfVxuICAgIHRoaXMuX2tleXNbZS5rZXlDb2RlXSA9IDBcblxuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ1NoaWZ0JzpcbiAgICAgICAgdGhpcy5fbW9kcyAmPSB+MHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdDb250cm9sJzpcbiAgICAgICAgdGhpcy5fbW9kcyAmPSB+MHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBbHQnOlxuICAgICAgICB0aGlzLl9tb2RzICY9IH4weDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ01ldGEnOlxuICAgICAgICB0aGlzLl9tb2RzICY9IH4weDA4XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICc4JzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDAxXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnMic6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwMlxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzQnOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDRcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDhcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnNic6IC8vIG51bXBhZCA2XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwOFxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3onOiAvLyBidXR0b24gMFxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgxMFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICd4JzogLy8gYnV0dG9uIDFcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MjBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnYyc6IC8vIGJ1dHRvbiAyXG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDQwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJyAnOiAvLyBidXR0b24gM1xuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHg4MFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdFbnRlcic6IC8vIGJ1dHRvbiA0XG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDEwMFxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgna2V5LnVwJywgdGhpcy5ldmVudERldGFpbHMoZSkpXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3ZtL2NoaXBzL2tleWJvYXJkLmpzIiwiaW1wb3J0IENoaXAgZnJvbSAnLi9jaGlwLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZSBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuaW5pdCgnaTMyJywgJ21vdXNlJywgWydjb3VudCcsICdkYmxDbGlja0RlbGF5JywgJ2RibENsaWNrRGlzdGFuY2UnXSlcblxuICAgIGxldCBzdGFnZSA9IG1haW4uc3RhZ2VcbiAgICBpZiAoc3RhZ2UpIHtcbiAgICAgIHN0YWdlLmludGVyYWN0aXZlID0gdHJ1ZVxuXG4gICAgICB0aGlzLl9vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKVxuICAgICAgdGhpcy5fb25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcylcbiAgICAgIHRoaXMuX29uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcylcblxuICAgICAgc3RhZ2Uub24oJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duKVxuICAgICAgc3RhZ2Uub24oJ3JpZ2h0ZG93bicsIHRoaXMuX29uTW91c2VEb3duKVxuICAgICAgc3RhZ2Uub24oJ3RvdWNoc3RhcnQnLCB0aGlzLl9vbk1vdXNlRG93bilcblxuICAgICAgc3RhZ2Uub24oJ21vdXNlbW92ZScsIHRoaXMuX29uTW91c2VNb3ZlKVxuXG4gICAgICBzdGFnZS5vbignbW91c2V1cCcsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9uKCd0b3VjaGVuZCcsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9uKCdtb3VzZXVwb3V0c2lkZScsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9uKCd0b3VjaGVuZG91dHNpZGUnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgfVxuXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgc3VwZXIucmVzZXQoKVxuXG4gICAgdGhpcy5feCA9IDBcbiAgICB0aGlzLl95ID0gMFxuICAgIHRoaXMuX2J0bnMgPSAwXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgbGV0IHN0YWdlID0gdGhpcy5fbWFpbi5zdGFnZVxuICAgIGlmIChzdGFnZSkge1xuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlRG93bilcbiAgICAgIHN0YWdlLm9mZigncmlnaHRkb3duJywgdGhpcy5fb25Nb3VzZURvd24pXG4gICAgICBzdGFnZS5vZmYoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vbk1vdXNlRG93bilcblxuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSlcblxuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub2ZmKCd0b3VjaGVuZCcsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9mZignbW91c2V1cG91dHNpZGUnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgICBzdGFnZS5vZmYoJ3RvdWNoZW5kb3V0c2lkZScsIHRoaXMuX29uTW91c2VVcClcbiAgICB9XG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICBnZXQgeCAoKSB7IHJldHVybiB0aGlzLl94IH1cbiAgc2V0IHggKHZhbHVlKSB7XG4gICAgdGhpcy5feCA9IHZhbHVlXG4gIH1cblxuICBnZXQgeSAoKSB7IHJldHVybiB0aGlzLl95IH1cbiAgc2V0IHkgKHZhbHVlKSB7XG4gICAgdGhpcy5feSA9IHZhbHVlXG4gIH1cblxuICBnZXQgYnRucyAoKSB7IHJldHVybiB0aGlzLl9idG5zIH1cbiAgc2V0IGJ0bnMgKHZhbHVlKSB7XG4gICAgdGhpcy5fYnRucyA9IHZhbHVlXG4gIH1cblxuICBnZXQgZGJsQ2xpY2tEZWxheSAoKSB7IHJldHVybiB0aGlzLl9kYmxDbGlja0RlbGF5IH1cbiAgc2V0IGRibENsaWNrRGVsYXkgKHZhbHVlKSB7XG4gICAgdGhpcy5fZGJsQ2xpY2tEZWxheSA9IHZhbHVlXG4gIH1cblxuICBnZXQgZGJsQ2xpY2tEaXN0YW5jZSAoKSB7IHJldHVybiB0aGlzLl9kYmxDbGlja0Rpc3RhbmNlIH1cbiAgc2V0IGRibENsaWNrRGlzdGFuY2UgKHZhbHVlKSB7XG4gICAgdGhpcy5fZGJsQ2xpY2tEaXN0YW5jZSA9IHZhbHVlXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZ2V0RXZlbnRJbmZvIChlKSB7XG4gICAgbGV0IHJlbmRlcmVyID0gdGhpcy5fbWFpbi5yZW5kZXJlclxuXG4gICAgbGV0IHNpemUgPSBuZXcgUElYSS5Qb2ludChyZW5kZXJlci53aWR0aCAtIHRoaXMuX3Nwcml0ZS53aWR0aCwgcmVuZGVyZXIuaGVpZ2h0IC0gdGhpcy5fc3ByaXRlLmhlaWdodClcblxuICAgIGxldCB4ID0gTWF0aC50cnVuYyhNYXRoLm1pbihzaXplLngsIE1hdGgubWF4KDAsIGUuZGF0YS5nbG9iYWwueCkpIC8gdGhpcy5fbWFpbi5zY2FsZSlcbiAgICBsZXQgeSA9IE1hdGgudHJ1bmMoTWF0aC5taW4oc2l6ZS55LCBNYXRoLm1heCgwLCBlLmRhdGEuZ2xvYmFsLnkpKSAvIHRoaXMuX21haW4uc2NhbGUpXG5cbiAgICByZXR1cm4geyB4LCB5LCBidXR0b246IGUuZGF0YS5vcmlnaW5hbEV2ZW50LmJ1dHRvbiB9XG4gIH1cblxuICBvbk1vdXNlRG93biAoZSkge1xuICAgIGxldCB7IHgsIHksIGJ1dHRvbiB9ID0gdGhpcy5nZXRFdmVudEluZm8oZSlcblxuICAgIHN3aXRjaCAoYnV0dG9uKSB7XG4gICAgICBjYXNlIDA6IC8vIGxlZnRcbiAgICAgICAgdGhpcy5fYnRucyB8PSAweDAxXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgMTogLy8gbWlkZGxlXG4gICAgICAgIHRoaXMuX2J0bnMgfD0gMHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIDI6IC8vIHJpZ2h0XG4gICAgICAgIHRoaXMuX2J0bnMgfD0gMHgwNFxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnbW91c2UuZG93bicsIHsgeCwgeSwgYnV0dG9uIH0pXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICBvbk1vdXNlTW92ZSAoZSkge1xuICAgIGxldCB7IHgsIHksIGJ1dHRvbiB9ID0gdGhpcy5nZXRFdmVudEluZm8oZSlcblxuICAgIHRoaXMuX3ggPSB4XG4gICAgdGhpcy5feSA9IHlcblxuICAgIHRoaXMuZW1pdCgnbW91c2UubW92ZScsIHsgeCwgeSwgYnV0dG9uIH0pXG5cbiAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICBvbk1vdXNlVXAgKGUpIHtcbiAgICBsZXQgeyB4LCB5LCBidXR0b24gfSA9IHRoaXMuZ2V0RXZlbnRJbmZvKGUpXG5cbiAgICBzd2l0Y2ggKGJ1dHRvbikge1xuICAgICAgY2FzZSAwOiAvLyBsZWZ0XG4gICAgICAgIHRoaXMuX2J0bnMgJj0gfjB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAxOiAvLyBtaWRkbGVcbiAgICAgICAgdGhpcy5fYnRucyAmPSB+MHgwMlxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIDI6IC8vIHJpZ2h0XG4gICAgICAgIHRoaXMuX2J0bnMgJj0gfjB4MDRcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ21vdXNlLnVwJywgeyB4LCB5LCBidXR0b24gfSlcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvbW91c2UuanMiLCJpbXBvcnQgQ2hpcCBmcm9tICcuL2NoaXAuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciBleHRlbmRzIENoaXAge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluKSB7XG4gICAgc3VwZXIobWFpbilcblxuICAgIHRoaXMuX3dpZHRoID0gdGhpcy5mb250X2NoaXAud2lkdGhcbiAgICB0aGlzLl9oZWlnaHQgPSB0aGlzLmZvbnRfY2hpcC5oZWlnaHRcblxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHN1cGVyLnJlc2V0KClcbiAgICB0aGlzLl94ID0gMFxuICAgIHRoaXMuX3kgPSAwXG4gICAgdGhpcy5fY29sb3IgPSB0aGlzLnBhbGV0dGVfY2hpcC53aGl0ZVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXQgeCAoKSB7IHJldHVybiB0aGlzLl94IH1cbiAgc2V0IHggKHZhbHVlKSB7IHRoaXMuX3ggPSB2YWx1ZSB9XG5cbiAgZ2V0IHkgKCkgeyByZXR1cm4gdGhpcy5feSB9XG4gIHNldCB5ICh2YWx1ZSkgeyB0aGlzLl95ID0gdmFsdWUgfVxuXG4gIGdldCBjb2xvciAoKSB7IHJldHVybiB0aGlzLl9jb2xvciB9XG4gIHNldCBjb2xvciAodmFsdWUpIHsgdGhpcy5fY29sb3IgPSB2YWx1ZSB9XG5cbiAgbW92ZV90byAoeCwgeSkge1xuICAgIGxldCB3ID0gdGhpcy50ZXh0X2NoaXAud2lkdGhcbiAgICBsZXQgaCA9IHRoaXMudGV4dF9jaGlwLmhlaWdodFxuXG4gICAgaWYgKHggPiB3KSB7XG4gICAgICB4ID0gd1xuICAgIH1cbiAgICBlbHNlIGlmICh4IDwgMSkge1xuICAgICAgeCA9IDFcbiAgICB9XG5cbiAgICBpZiAoeSA+IGgpIHtcbiAgICAgIHkgPSBoXG4gICAgfVxuICAgIGVsc2UgaWYgKHkgPCAxKSB7XG4gICAgICB5ID0gMVxuICAgIH1cblxuICAgIHRoaXMuX3ggPSB4XG4gICAgdGhpcy5feSA9IHlcblxuICAgIHJldHVybiB0aGlzLmRyYXcoeCwgeSlcbiAgfVxuXG4gIG1vdmVfYnkgKHgsIHkpIHsgcmV0dXJuIHRoaXMubW92ZV90byh0aGlzLl94ICsgeCwgdGhpcy5feSArIHkpIH1cblxuICBkcmF3ICh4LCB5KSB7XG4gICAgbGV0IHcgPSB0aGlzLl93aWR0aFxuICAgIGxldCBoID0gdGhpcy5faGVpZ2h0XG4gICAgbGV0IGMgPSB0aGlzLl9jb2xvclxuICAgIGxldCB2aWRlbyA9IHRoaXMudmlkZW9fY2hpcFxuXG4gICAgZm9yIChsZXQgYnkgPSAwOyBieSA8IGg7IGJ5KyspIHtcbiAgICAgIGxldCBwaSA9ICh5ICsgYnkpICogdyArIHhcbiAgICAgIGZvciAobGV0IGJ4ID0gMDsgYnggPCB3OyBieCsrKSB7XG4gICAgICAgIHZpZGVvLnBpeGVsKHBpKyssIGMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKClcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdm0vY2hpcHMvY3Vyc29yLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2Fzc2V0cy9pbWdzLy9jcnQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpbGUtbG9hZGVyP25hbWU9YXNzZXRzL1twYXRoXS9bbmFtZV0uW2V4dF0hLi9hc3NldHMvaW1ncy9jcnQucG5nXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9