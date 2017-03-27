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
	
	var _utils = __webpack_require__(1);
	
	__webpack_require__(10);
	
	__webpack_require__(11);
	
	var _main = __webpack_require__(12);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _main3 = __webpack_require__(16);
	
	var _main4 = _interopRequireDefault(_main3);
	
	var _emitter = __webpack_require__(17);
	
	var _screen = __webpack_require__(18);
	
	var _screen2 = _interopRequireDefault(_screen);
	
	var _keyboard = __webpack_require__(23);
	
	var _keyboard2 = _interopRequireDefault(_keyboard);
	
	var _mouse = __webpack_require__(24);
	
	var _mouse2 = _interopRequireDefault(_mouse);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	
	var el = document.createElement('div');
	el.innerHTML = _main4.default;
	document.body.appendChild(el);
	
	var _STOPPED = exports._STOPPED = 0;
	var _RUNNING = exports._RUNNING = 1;
	var _PAUSED = exports._PAUSED = 2;
	
	var Main = exports.Main = function (_Emitter) {
	  _inherits(Main, _Emitter);
	
	  function Main(options) {
	    _classCallCheck(this, Main);
	
	    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));
	
	    _this.reset();
	
	    _this._defaults = _utils._.get(options, 'defaults', {
	      width: 320,
	      height: 240,
	      scale: 4,
	      dblClickDelay: 250,
	      dblClickDistance: 8
	    });
	
	    var defaults = _this._defaults;
	
	    _this._width = _utils._.get(options, 'width', defaults.width);
	    _this._height = _utils._.get(options, 'height', defaults.height);
	    _this._scale = _utils._.get(options, 'scale', defaults.scale);
	
	    _this._dblClickDelay = _utils._.get(options, 'dblClickDelay', defaults.dblClickDelay);
	    _this._dblClickDistance = _utils._.get(options, 'dblClickDistance', defaults.dblClickDistance);
	
	    _this.screen = new _screen2.default(_this, _this._width, _this._height, _this._scale);
	    _this.keyboard = new _keyboard2.default(_this);
	    _this.mouse = new _mouse2.default(_this);
	
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
	          that.screen.renderer.render(that.screen.stage);
	        }
	      }
	    });
	
	    (0, _utils.async)(_this, _this.start, 100);
	    return _this;
	  }
	
	  _createClass(Main, [{
	    key: 'destroy',
	    value: function destroy() {
	      this.screen.destroy();
	      this.keyboard.destroy();
	      this.mouse.destroy();
	      _get(Main.prototype.__proto__ || Object.getPrototypeOf(Main.prototype), 'destroy', this).call(this);
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var _this2 = this;
	
	      this._status = 0;
	
	      this._currentOver = null;
	
	      this._updates = {
	        queue: [],
	
	        add: function add(options) {
	          var o = _utils._.get(options, 'object');
	          if (o && !o.__addedToUpdates) {
	            o.__addedToUpdates = true;
	            _this2._updates.queue.push(options);
	          }
	        },
	
	        remove: function remove(o) {
	          _this2._updates.queue = _utils._.reject(_this2._updates.queue, { object: o });
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
	    key: 'onResize',
	    value: function onResize() {
	      this.screen.emit('resize');
	      this.keyboard.emit('resize');
	      this.mouse.emit('resize');
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
	      this.screen.tick(time);
	      this.keyboard.tick(time);
	      this.mouse.tick(time);
	    }
	  }, {
	    key: 'test',
	    value: function test() {}
	  }, {
	    key: 'defaults',
	    get: function get() {
	      return this._defaults;
	    }
	  }, {
	    key: 'currentOver',
	    get: function get() {
	      return this._currentOver;
	    },
	    set: function set(value) {
	      if (this._currentOver !== value) {
	        this._currentOver = value;
	      }
	    }
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
	    key: 'updates',
	    get: function get() {
	      return this._updates;
	    }
	  }, {
	    key: 'dblClickDelay',
	    get: function get() {
	      return this._dblClickDelay;
	    },
	    set: function set(value) {
	      if (this._dblClickDelay !== value) {
	        this._dblClickDelay = value;
	      }
	    }
	  }, {
	    key: 'dblClickDistance',
	    get: function get() {
	      return this._dblClickDistance;
	    },
	    set: function set(value) {
	      if (this._dblClickDistance !== value) {
	        this._dblClickDistance = value;
	      }
	    }
	  }]);
	
	  return Main;
	}(_emitter.Emitter);
	
	var main = exports.main = new Main();
	window.app = main;
	
	console.log(window.app);

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

	module.exports = require("pixi.js");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("web-audio-daw");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  background-color: #000;\n  color: #fff;\n}\n\ncanvas {\n  cursor: none !important;\n}\n", "", {"version":3,"sources":["/./style/main.css"],"names":[],"mappings":"AAEA;EACE,uBAA+C;EAC/C,YAAyB;CAC1B;;AAED;EACE,wBAAwB;CACzB","file":"main.css","sourcesContent":["@import url(./colors.css);\n\nbody {\n  background-color: var(--main-background-color);\n  color: var(--main-color);\n}\n\ncanvas {\n  cursor: none !important;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 14 */
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
/* 15 */
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


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "";

/***/ },
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _palette = __webpack_require__(19);
	
	var _palette2 = _interopRequireDefault(_palette);
	
	var _emitter = __webpack_require__(17);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Screen = function (_Emitter) {
	  _inherits(Screen, _Emitter);
	
	  function Screen(main) {
	    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 640;
	    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 480;
	    var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	
	    _classCallCheck(this, Screen);
	
	    var _this = _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).call(this));
	
	    _this._main = main;
	
	    _this._width = width;
	    _this._height = height;
	    _this._size = width * height;
	    _this._scale = scale;
	
	    _this._palette = new _palette2.default(_this);
	
	    _this.force_update = false;
	
	    _this._renderer = new PIXI.autoDetectRenderer(_this._width * _this._scale, _this._height * _this._scale, {});
	    _this._renderer.view.style.position = 'absolute';
	    _this._renderer.view.style.cursor = 'none';
	    _this._renderer.view.id = 'screen';
	    document.body.appendChild(_this._renderer.view);
	
	    _this._stage = new PIXI.Container();
	    _this._stage.scale = new PIXI.Point(_this._scale, _this._scale);
	
	    _this.reset();
	
	    _this._onResize = _this.resize.bind(_this);
	    _this.on('resize', _this._onResize);
	
	    _this._onScroll = _this.onScroll.bind(_this);
	    _this._renderer.view.addEventListener('wheel', _this._onScroll, false);
	    return _this;
	  }
	
	  _createClass(Screen, [{
	    key: 'destroy',
	    value: function destroy() {
	      this.off('resize', this._onResize);
	      this._renderer.view.removeEventListener('wheel', this._onScroll);
	
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
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this._force_update = false;
	      this._force_flip = false;
	      this._data = new Uint8ClampedArray(this._size);
	      this.clear();
	      this.resize();
	    }
	  }, {
	    key: 'tick',
	    value: function tick(delta) {
	      if (this._force_update) {
	        this._force_update = false;
	        this._renderer.render(this._stage);
	      }
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
	
	      this.pixels = new Uint32Array(this._imageData.data.buffer);
	
	      this.center();
	
	      this.clear();
	
	      this.test();
	
	      return this;
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh() {
	      var flip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      this.force_update = true;
	      if (!this._force_flip) {
	        this.force_flip = flip;
	      }
	      this.emit('refresh', { flip: flip });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this._data.fill(1);
	      return this.refresh(true);
	    }
	  }, {
	    key: 'flip',
	    value: function flip() {
	      var data = this._data;
	      var pixels = this.pixels;
	      var pal = this._palette;
	      for (var i = 0; i < this._size; i++) {
	        pixels[i] = pal.data[data[i]];
	      }
	      this._context.putImageData(this._imageData, 0, 0);
	      this.force_flip = false;
	      this.emit('flip');
	      return this;
	    }
	  }, {
	    key: 'pixel',
	    value: function pixel(i, c) {
	      var data = this._data;
	      if (c !== undefined && data[i] !== c) {
	        data[i] = Math.max(0, Math.min(c, this._palette.count - 1));
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
	    key: 'loadTexture',
	    value: function loadTexture(filename) {
	      var _this2 = this;
	
	      var tex = PIXI.Texture.fromImage('./build/' + __webpack_require__(20)("./" + filename), undefined, PIXI.SCALE_MODES.NEAREST);
	      tex.on('update', function () {
	        return _this2.refresh();
	      });
	      return tex;
	    }
	  }, {
	    key: 'test',
	    value: function test() {
	      this._stage.removeChildren();
	
	      var t = new PIXI.Sprite(this.loadTexture('imgs/test.png'));
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
	      this.refresh();
	      document.body.removeChild(text.context.canvas);
	    }
	  }, {
	    key: 'onScroll',
	    value: function onScroll(e) {
	      var t = this.currentOver;
	      if (t && t.scrollable) {
	        var res = -120;
	        var deltaX = 0;
	        var deltaY = 0;
	
	        if (t.scrollable.x) {
	          deltaX = e.wheelDeltaX * res;
	          if (deltaX <= res) {
	            deltaX = -1;
	          } else if (deltaX > res) {
	            deltaX = 1;
	          }
	        }
	
	        if (t.scrollable.y) {
	          deltaY = e.wheelDeltaY * res;
	          if (deltaY <= res) {
	            deltaY = -1;
	          } else if (deltaY > res) {
	            deltaY = 1;
	          }
	        }
	
	        if (!e.detail) {
	          e.detail = {};
	        }
	        e.detail.scroll = new PIXI.Point(deltaX, deltaY);
	        t.onScroll(e);
	      }
	
	      e.stopPropagation();
	
	      return false;
	    }
	  }, {
	    key: 'main',
	    get: function get() {
	      return this._main;
	    }
	  }, {
	    key: 'currentOver',
	    get: function get() {
	      return this._main.currentOver;
	    },
	    set: function set(value) {
	      this._main.currentOver = value;
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
	    get: function get() {
	      return this._width;
	    },
	    set: function set(value) {
	      this._width = value;
	      this.resize();
	    }
	  }, {
	    key: 'height',
	    get: function get() {
	      return this._height;
	    },
	    set: function set(value) {
	      this._height = value;
	      this.resize();
	    }
	  }, {
	    key: 'data',
	    get: function get() {
	      return this._data;
	    }
	  }, {
	    key: 'palette',
	    get: function get() {
	      return this._palette;
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
	    key: 'force_update',
	    get: function get() {
	      return this._force_update;
	    },
	    set: function set(value) {
	      this._force_update = value;
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
	
	  return Screen;
	}(_emitter.Emitter);
	
	exports.default = Screen;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _emitter = __webpack_require__(17);
	
	var _utils = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Palette = function (_Emitter) {
	  _inherits(Palette, _Emitter);
	
	  function Palette(game) {
	    var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;
	
	    _classCallCheck(this, Palette);
	
	    var _this = _possibleConstructorReturn(this, (Palette.__proto__ || Object.getPrototypeOf(Palette)).call(this));
	
	    _this.game = game;
	
	    _this.count = count;
	
	    _this.data = new Uint32Array(_this.count);
	
	    _this.reset();
	    return _this;
	  }
	
	  _createClass(Palette, [{
	    key: 'reset',
	    value: function reset() {
	      this.data[0] = 0x000000;
	      this.data[1] = 0x800000;
	      this.data[2] = 0x008000;
	      this.data[3] = 0x808000;
	      this.data[4] = 0x000080;
	      this.data[5] = 0x800080;
	      this.data[6] = 0x008080;
	      this.data[7] = 0xc0c0c0;
	      this.data[8] = 0x808080;
	      this.data[9] = 0xff0000;
	      this.data[10] = 0x00ff00;
	      this.data[11] = 0xffff00;
	      this.data[12] = 0x0000ff;
	      this.data[13] = 0xff00ff;
	      this.data[14] = 0x00ffff;
	      this.data[15] = 0xffffff;
	
	      this.data[16] = 0x000000;
	      this.data[22] = 0x005f00;
	      this.data[28] = 0x008700;
	      this.data[34] = 0x00af00;
	      this.data[40] = 0x00d700;
	      this.data[46] = 0x00ff00;
	      this.data[52] = 0x5f0000;
	      this.data[58] = 0x5f5f00;
	      this.data[64] = 0x5f8700;
	      this.data[70] = 0x5faf00;
	      this.data[76] = 0x5fd700;
	      this.data[82] = 0x5fff00;
	      this.data[88] = 0x870000;
	      this.data[94] = 0x875f00;
	      this.data[100] = 0x878700;
	      this.data[106] = 0x87af00;
	      this.data[112] = 0x87d700;
	      this.data[118] = 0x87ff00;
	      this.data[124] = 0xaf0000;
	      this.data[130] = 0xaf5f00;
	      this.data[136] = 0xaf8700;
	      this.data[142] = 0xafaf00;
	      this.data[148] = 0xafd700;
	      this.data[154] = 0xafff00;
	      this.data[160] = 0xd70000;
	      this.data[166] = 0xd75f00;
	      this.data[172] = 0xd78700;
	      this.data[178] = 0xd7af00;
	      this.data[184] = 0xd7d700;
	      this.data[190] = 0xd7ff00;
	      this.data[196] = 0xff0000;
	      this.data[202] = 0xff5f00;
	      this.data[208] = 0xff8700;
	      this.data[214] = 0xffaf00;
	      this.data[220] = 0xffd700;
	      this.data[226] = 0xffff00;
	      this.data[232] = 0x080808;
	      this.data[238] = 0x444444;
	      this.data[244] = 0x808080;
	      this.data[250] = 0xbcbcbc;
	      this.data[17] = 0x00005f;
	      this.data[23] = 0x005f5f;
	      this.data[29] = 0x00875f;
	      this.data[35] = 0x00af5f;
	      this.data[41] = 0x00d75f;
	      this.data[47] = 0x00ff5f;
	      this.data[53] = 0x5f005f;
	      this.data[59] = 0x5f5f5f;
	      this.data[65] = 0x5f875f;
	      this.data[71] = 0x5faf5f;
	      this.data[77] = 0x5fd75f;
	      this.data[83] = 0x5fff5f;
	      this.data[89] = 0x87005f;
	      this.data[95] = 0x875f5f;
	      this.data[101] = 0x87875f;
	      this.data[107] = 0x87af5f;
	      this.data[113] = 0x87d75f;
	      this.data[119] = 0x87ff5f;
	      this.data[125] = 0xaf005f;
	      this.data[131] = 0xaf5f5f;
	      this.data[137] = 0xaf875f;
	      this.data[143] = 0xafaf5f;
	      this.data[149] = 0xafd75f;
	      this.data[155] = 0xafff5f;
	      this.data[161] = 0xd7005f;
	      this.data[167] = 0xd75f5f;
	      this.data[173] = 0xd7875f;
	      this.data[179] = 0xd7af5f;
	      this.data[185] = 0xd7d75f;
	      this.data[191] = 0xd7ff5f;
	      this.data[197] = 0xff005f;
	      this.data[203] = 0xff5f5f;
	      this.data[209] = 0xff875f;
	      this.data[215] = 0xffaf5f;
	      this.data[221] = 0xffd75f;
	      this.data[227] = 0xffff5f;
	      this.data[233] = 0x121212;
	      this.data[239] = 0x4e4e4e;
	      this.data[245] = 0x8a8a8a;
	      this.data[251] = 0xc6c6c6;
	      this.data[18] = 0x000087;
	      this.data[24] = 0x005f87;
	      this.data[30] = 0x008787;
	      this.data[36] = 0x00af87;
	      this.data[42] = 0x00d787;
	      this.data[48] = 0x00ff87;
	      this.data[54] = 0x5f0087;
	      this.data[60] = 0x5f5f87;
	      this.data[66] = 0x5f8787;
	      this.data[72] = 0x5faf87;
	      this.data[78] = 0x5fd787;
	      this.data[84] = 0x5fff87;
	      this.data[90] = 0x870087;
	      this.data[96] = 0x875f87;
	      this.data[102] = 0x878787;
	      this.data[108] = 0x87af87;
	      this.data[114] = 0x87d787;
	      this.data[120] = 0x87ff87;
	      this.data[126] = 0xaf0087;
	      this.data[132] = 0xaf5f87;
	      this.data[138] = 0xaf8787;
	      this.data[144] = 0xafaf87;
	      this.data[150] = 0xafd787;
	      this.data[156] = 0xafff87;
	      this.data[162] = 0xd70087;
	      this.data[168] = 0xd75f87;
	      this.data[174] = 0xd78787;
	      this.data[180] = 0xd7af87;
	      this.data[186] = 0xd7d787;
	      this.data[192] = 0xd7ff87;
	      this.data[198] = 0xff0087;
	      this.data[204] = 0xff5f87;
	      this.data[210] = 0xff8787;
	      this.data[216] = 0xffaf87;
	      this.data[222] = 0xffd787;
	      this.data[228] = 0xffff87;
	      this.data[234] = 0x1c1c1c;
	      this.data[240] = 0x585858;
	      this.data[246] = 0x949494;
	      this.data[252] = 0xd0d0d0;
	      this.data[19] = 0x0000af;
	      this.data[25] = 0x005faf;
	      this.data[31] = 0x0087af;
	      this.data[37] = 0x00afaf;
	      this.data[43] = 0x00d7af;
	      this.data[49] = 0x00ffaf;
	      this.data[55] = 0x5f00af;
	      this.data[61] = 0x5f5faf;
	      this.data[67] = 0x5f87af;
	      this.data[73] = 0x5fafaf;
	      this.data[79] = 0x5fd7af;
	      this.data[85] = 0x5fffaf;
	      this.data[91] = 0x8700af;
	      this.data[97] = 0x875faf;
	      this.data[103] = 0x8787af;
	      this.data[109] = 0x87afaf;
	      this.data[115] = 0x87d7af;
	      this.data[121] = 0x87ffaf;
	      this.data[127] = 0xaf00af;
	      this.data[133] = 0xaf5faf;
	      this.data[139] = 0xaf87af;
	      this.data[145] = 0xafafaf;
	      this.data[151] = 0xafd7af;
	      this.data[157] = 0xafffaf;
	      this.data[163] = 0xd700af;
	      this.data[169] = 0xd75faf;
	      this.data[175] = 0xd787af;
	      this.data[181] = 0xd7afaf;
	      this.data[187] = 0xd7d7af;
	      this.data[193] = 0xd7ffaf;
	      this.data[199] = 0xff00af;
	      this.data[205] = 0xff5faf;
	      this.data[211] = 0xff87af;
	      this.data[217] = 0xffafaf;
	      this.data[223] = 0xffd7af;
	      this.data[229] = 0xffffaf;
	      this.data[235] = 0x262626;
	      this.data[241] = 0x606060;
	      this.data[247] = 0x9e9e9e;
	      this.data[253] = 0xdadada;
	      this.data[20] = 0x0000d7;
	      this.data[26] = 0x005fd7;
	      this.data[32] = 0x0087d7;
	      this.data[38] = 0x00afd7;
	      this.data[44] = 0x00d7d7;
	      this.data[50] = 0x00ffd7;
	      this.data[56] = 0x5f00d7;
	      this.data[62] = 0x5f5fd7;
	      this.data[68] = 0x5f87d7;
	      this.data[74] = 0x5fafd7;
	      this.data[80] = 0x5fd7d7;
	      this.data[86] = 0x5fffd7;
	      this.data[92] = 0x8700d7;
	      this.data[98] = 0x875fd7;
	      this.data[104] = 0x8787d7;
	      this.data[110] = 0x87afd7;
	      this.data[116] = 0x87d7d7;
	      this.data[122] = 0x87ffd7;
	      this.data[128] = 0xaf00d7;
	      this.data[134] = 0xaf5fd7;
	      this.data[140] = 0xaf87d7;
	      this.data[146] = 0xafafd7;
	      this.data[152] = 0xafd7d7;
	      this.data[158] = 0xafffd7;
	      this.data[164] = 0xd700d7;
	      this.data[170] = 0xd75fd7;
	      this.data[176] = 0xd787d7;
	      this.data[182] = 0xd7afd7;
	      this.data[188] = 0xd7d7d7;
	      this.data[194] = 0xd7ffd7;
	      this.data[200] = 0xff00d7;
	      this.data[206] = 0xff5fd7;
	      this.data[212] = 0xff87d7;
	      this.data[218] = 0xffafd7;
	      this.data[224] = 0xffd7d7;
	      this.data[230] = 0xffffd7;
	      this.data[236] = 0x303030;
	      this.data[242] = 0x666666;
	      this.data[248] = 0xa8a8a8;
	      this.data[254] = 0xe4e4e4;
	      this.data[21] = 0x0000ff;
	      this.data[27] = 0x005fff;
	      this.data[33] = 0x0087ff;
	      this.data[39] = 0x00afff;
	      this.data[45] = 0x00d7ff;
	      this.data[51] = 0x00ffff;
	      this.data[57] = 0x5f00ff;
	      this.data[63] = 0x5f5fff;
	      this.data[69] = 0x5f87ff;
	      this.data[75] = 0x5fafff;
	      this.data[81] = 0x5fd7ff;
	      this.data[87] = 0x5fffff;
	      this.data[93] = 0x8700ff;
	      this.data[99] = 0x875fff;
	      this.data[105] = 0x8787ff;
	      this.data[111] = 0x87afff;
	      this.data[117] = 0x87d7ff;
	      this.data[123] = 0x87ffff;
	      this.data[129] = 0xaf00ff;
	      this.data[135] = 0xaf5fff;
	      this.data[141] = 0xaf87ff;
	      this.data[147] = 0xafafff;
	      this.data[153] = 0xafd7ff;
	      this.data[159] = 0xafffff;
	      this.data[165] = 0xd700ff;
	      this.data[171] = 0xd75fff;
	      this.data[177] = 0xd787ff;
	      this.data[183] = 0xd7afff;
	      this.data[189] = 0xd7d7ff;
	      this.data[195] = 0xd7ffff;
	      this.data[201] = 0xff00ff;
	      this.data[207] = 0xff5fff;
	      this.data[213] = 0xff87ff;
	      this.data[219] = 0xffafff;
	      this.data[225] = 0xffd7ff;
	      this.data[231] = 0xffffff;
	      this.data[237] = 0x3a3a3a;
	      this.data[243] = 0x767676;
	      this.data[249] = 0xb2b2b2;
	      this.data[255] = 0xeeeeee;
	
	      this.names = {
	        black: 0,
	        dkred: 1,
	        dkgreen: 2,
	        dkyellow: 3,
	        dkblue: 4,
	        dkfuchsia: 5,
	        teal: 6,
	        grey: 7,
	        dkgrey: 8,
	        red: 9,
	        lime: 10,
	        yellow: 11,
	        blue: 12,
	        fuchsia: 13,
	        cyan: 14,
	        white: 15
	      };
	
	      (0, _utils.map_getters)(this, this, _utils._.mapValues(this.names, function (v) {
	        return function () {
	          return v;
	        };
	      }));
	    }
	  }, {
	    key: 'from_rgb',
	    value: function from_rgb(c) {
	      return _utils._.find(this.data, c);
	    }
	  }, {
	    key: 'to_rgb',
	    value: function to_rgb(c) {
	      return this.data[c];
	    }
	  }]);
	
	  return Palette;
	}(_emitter.Emitter);
	
	exports.default = Palette;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./imgs/crt.png": 21,
		"./imgs/test.png": 22
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
	webpackContext.id = 20;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/crt.png";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/test.png";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _emitter = __webpack_require__(17);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Keyboard = function (_Emitter) {
	  _inherits(Keyboard, _Emitter);
	
	  function Keyboard(main) {
	    _classCallCheck(this, Keyboard);
	
	    var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this));
	
	    _this._main = main;
	
	    _this.reset();
	
	    _this._onKeydown = _this.onKeydown.bind(_this);
	    _this._onKeyup = _this.onKeyup.bind(_this);
	
	    window.addEventListener('keydown', _this._onKeydown);
	    window.addEventListener('keyup', _this._onKeyup);
	    return _this;
	  }
	
	  _createClass(Keyboard, [{
	    key: 'reset',
	    value: function reset() {
	      this._mods = 0;
	      this._joystick = 0;
	      this._keys = {};
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      window.removeEventListener('keydown', this._onKeydown);
	      window.removeEventListener('keyup', this._onKeyup);
	    }
	  }, {
	    key: 'tick',
	    value: function tick(delta) {}
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
	}(_emitter.Emitter);
	
	exports.default = Keyboard;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _emitter = __webpack_require__(17);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Mouse = function (_Emitter) {
	  _inherits(Mouse, _Emitter);
	
	  function Mouse(main) {
	    _classCallCheck(this, Mouse);
	
	    var _this = _possibleConstructorReturn(this, (Mouse.__proto__ || Object.getPrototypeOf(Mouse)).call(this));
	
	    _this._main = main;
	
	    _this.reset();
	
	    _this._sprite = new PIXI.Sprite();
	
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
	    return _this;
	  }
	
	  _createClass(Mouse, [{
	    key: 'reset',
	    value: function reset() {
	      this._x = 0;
	      this._y = 0;
	      this._btns = 0;
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
	    }
	  }, {
	    key: 'tick',
	    value: function tick(delta) {}
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
	    key: 'onMouseUp',
	    value: function onMouseUp(e) {
	      var _getEventInfo2 = this.getEventInfo(e),
	          x = _getEventInfo2.x,
	          y = _getEventInfo2.y,
	          button = _getEventInfo2.button;
	
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
	    key: 'onMouseMove',
	    value: function onMouseMove(e) {
	      var _getEventInfo3 = this.getEventInfo(e),
	          x = _getEventInfo3.x,
	          y = _getEventInfo3.y,
	          button = _getEventInfo3.button;
	
	      this._x = x;
	      this._y = y;
	
	      this.emit('mouse.move', { x: x, y: y, button: button });
	
	      this._main.refresh();
	
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
	  }]);
	
	  return Mouse;
	}(_emitter.Emitter);
	
	exports.default = Mouse;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2MwNzVmZDg2NzI5Y2NmMjQzZDQiLCJ3ZWJwYWNrOi8vLy4vYXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYWZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwZXJmb3JtYW5jZS1ub3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtaXh3aXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlLXBsdXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGl4aS5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYi1hdWRpby1kYXdcIiIsIndlYnBhY2s6Ly8vLi9zdHlsZS9tYWluLmNzcz9mNDgyIiwid2VicGFjazovLy8uL3N0eWxlL21haW4uY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2h0bWwvbWFpbi5odG1sIiwid2VicGFjazovLy8uL2FwcC9lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhbGV0dGUuanMiLCJ3ZWJwYWNrOi8vL15cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZ3MvY3J0LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1ncy90ZXN0LnBuZyIsIndlYnBhY2s6Ly8vLi9hcHAva2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vdXNlLmpzIl0sIm5hbWVzIjpbImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYm9keSIsImFwcGVuZENoaWxkIiwiX1NUT1BQRUQiLCJfUlVOTklORyIsIl9QQVVTRUQiLCJNYWluIiwib3B0aW9ucyIsInJlc2V0IiwiX2RlZmF1bHRzIiwiZ2V0Iiwid2lkdGgiLCJoZWlnaHQiLCJzY2FsZSIsImRibENsaWNrRGVsYXkiLCJkYmxDbGlja0Rpc3RhbmNlIiwiZGVmYXVsdHMiLCJfd2lkdGgiLCJfaGVpZ2h0IiwiX3NjYWxlIiwiX2RibENsaWNrRGVsYXkiLCJfZGJsQ2xpY2tEaXN0YW5jZSIsInNjcmVlbiIsImtleWJvYXJkIiwibW91c2UiLCJfb25SZXNpemUiLCJvblJlc2l6ZSIsImJpbmQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidGhhdCIsIlBJWEkiLCJ0aWNrZXIiLCJzaGFyZWQiLCJhZGQiLCJzdGF0dXMiLCJ0aWNrIiwidGltZSIsInJlbmRlciIsIl91cGRhdGVzIiwicXVldWUiLCJxIiwib2JqZWN0IiwiX19hZGRlZFRvVXBkYXRlcyIsImNiIiwiYXJncyIsInJlbmRlcmVyIiwic3RhZ2UiLCJzdGFydCIsImRlc3Ryb3kiLCJfc3RhdHVzIiwiX2N1cnJlbnRPdmVyIiwibyIsInB1c2giLCJyZW1vdmUiLCJyZWplY3QiLCJiIiwiQXJyYXlCdWZmZXIiLCJhIiwiVWludDMyQXJyYXkiLCJjIiwiVWludDhBcnJheSIsIkxFIiwiZW1pdCIsInRlc3QiLCJ2YWx1ZSIsIm1haW4iLCJhcHAiLCJjb25zb2xlIiwibG9nIiwiZWxlY3Ryb24iLCJyZXF1aXJlIiwicmVtb3RlIiwiZGlhbG9nIiwiQnJvd3NlcldpbmRvdyIsIl8iLCJleHRlbmQiLCJ0ZW1wbGF0ZVNldHRpbmdzIiwiaW50ZXJwb2xhdGUiLCJmcyIsIk1peGluIiwibWl4IiwidXNlclBhdGgiLCJqb2luIiwiZ2V0QXBwUGF0aCIsImV4aXN0c1N5bmMiLCJta2RpcnMiLCJJU19XSU4iLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJJU19PU1giLCJJU19MSU5VWCIsImRpcnMiLCJidWlsZCIsIl9fZGlybmFtZSIsImN3ZCIsImhvbWUiLCJnZXRQYXRoIiwidXNlciIsInRtcCIsInJvb3QiLCJub2RlX21vZHVsZXMiLCJ1c2VyX3BrZyIsIm5hbWUiLCJnZXROYW1lIiwidmVyc2lvbiIsImdldFZlcnNpb24iLCJvcGVuRmlsZSIsInNob3dPcGVuRGlhbG9nIiwiYXBwbHkiLCJlcnIiLCJlcnJvciIsInNhdmVGaWxlIiwic2hvd1NhdmVEaWFsb2ciLCJtZXNzYWdlQm94Iiwic2hvd01lc3NhZ2VCb3giLCJtYXBfZ2V0dGVycyIsInNvdXJjZSIsInRhcmdldCIsImRlZnMiLCJrIiwiZm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNhbGwiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwibWFwX2dldHRlcnNfcmV0dXJuX3RoaXMiLCJub3ciLCJkZWxheSIsInQiLCJtcyIsImFzeW5jIiwiY29udGV4dCIsImlzTnVtYmVyIiwiaXNBcnJheSIsInNldFRpbWVvdXQiLCJidWZmZXJfdG9fc3RyaW5nIiwibGVuIiwibGVuZ3RoIiwiaSIsInMiLCJ0b1N0cmluZyIsInN0cmluZ190b19idWZmZXIiLCJzdHIiLCJCdWZmZXIiLCJNYXRoIiwidHJ1bmMiLCJ4IiwiaGV4Iiwic3Vic3RyIiwicGFyc2VJbnQiLCJzdHJpbmdfYnVmZmVyIiwid3JpdGUiLCJub3JtYWxpemVNZXNzYWdlcyIsIm1lc3NhZ2UiLCJtIiwiaXNTdHJpbmciLCJzaXplIiwicGFkU3RhcnQiLCJidWZmZXJfZHVtcCIsImJ1ZmZlciIsImNhcHMiLCJpbmRlbnQiLCJyZXBlYXQiLCJ6ZXJvIiwibiIsIm1heCIsInRvVXBwZXJDYXNlIiwibWluIiwiYnl0ZUxlbmd0aCIsInJvd3MiLCJjZWlsIiwibGFzdCIsIm9mZnNldExlbmd0aCIsImFyciIsImxhc3RCeXRlcyIsImxhc3RTcGFjZXMiLCJqIiwidiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInV0b2EiLCJidG9hIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJhdG91IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZXNjYXBlIiwiYXRvYiIsImluc3RhbmNlRnVuY3Rpb24iLCJmb3JjZSIsImhhc093blByb3BlcnR5Iiwid3JpdGFibGUiLCJpbnN0YW5jZUZ1bmN0aW9ucyIsIm5hbWVzIiwicGF0aCIsInJhZiIsIkV2ZW50IiwiZGF0YSIsImJ1YmJsZXMiLCJfX2V2ZW50T2JqZWN0IiwidGltZVN0YW1wIiwicGVyZm9ybWFuY2UiLCJ0eXBlIiwic3RvcHBlZCIsInN0b3BwZWRJbW1lZGlhdGUiLCJkZWZhdWx0UHJldmVudGVkIiwiRW1pdHRlciIsIm9yZGVyIiwiX2xpc3RlbmVycyIsInNvcnRCeSIsIm9uY2VIYW5kbGVyV3JhcHBlciIsIm9mZiIsIl9vcmlnaW5hbEhhbmRsZXIiLCJvbiIsImxpc3QiLCJzcGxpY2UiLCJpc0VtcHR5Iiwib3JpZ0V2ZW50RGF0YSIsImxpc3RlbmVycyIsImNsb25lIiwibCIsImNhbmNlbEJ1YmJsZSIsInBhcmVudCIsIlNjcmVlbiIsIl9tYWluIiwiX3NpemUiLCJfcGFsZXR0ZSIsImZvcmNlX3VwZGF0ZSIsIl9yZW5kZXJlciIsImF1dG9EZXRlY3RSZW5kZXJlciIsInZpZXciLCJzdHlsZSIsInBvc2l0aW9uIiwiY3Vyc29yIiwiaWQiLCJfc3RhZ2UiLCJDb250YWluZXIiLCJQb2ludCIsInJlc2l6ZSIsIl9vblNjcm9sbCIsIm9uU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9zcHJpdGUiLCJfdGV4dHVyZSIsIl9jYW52YXMiLCJfZm9yY2VfdXBkYXRlIiwiX2ZvcmNlX2ZsaXAiLCJfZGF0YSIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiY2xlYXIiLCJkZWx0YSIsImxlZnQiLCJpbm5lcldpZHRoIiwidG9wIiwiaW5uZXJIZWlnaHQiLCJ0ZXh0dXJlIiwiZGlzcGxheSIsIlRleHR1cmUiLCJmcm9tQ2FudmFzIiwiU0NBTEVfTU9ERVMiLCJORUFSRVNUIiwiU3ByaXRlIiwiX2NvbnRleHQiLCJnZXRDb250ZXh0IiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJjbGVhclJlY3QiLCJfaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwicGl4ZWxzIiwiY2VudGVyIiwiZmxpcCIsImZvcmNlX2ZsaXAiLCJmaWxsIiwicmVmcmVzaCIsInBhbCIsInB1dEltYWdlRGF0YSIsInVuZGVmaW5lZCIsImNvdW50IiwieSIsImZpbGVuYW1lIiwidGV4IiwiZnJvbUltYWdlIiwicmVtb3ZlQ2hpbGRyZW4iLCJsb2FkVGV4dHVyZSIsImFkZENoaWxkIiwidGV4dCIsIlRleHQiLCJmb250IiwiYmFzZVRleHR1cmUiLCJzY2FsZU1vZGUiLCJjYW52YXMiLCJpbWFnZVNtb290aGluZ0VuYWJsZWQiLCJ1cGRhdGVUZXh0IiwicmVtb3ZlQ2hpbGQiLCJlIiwiY3VycmVudE92ZXIiLCJzY3JvbGxhYmxlIiwicmVzIiwiZGVsdGFYIiwiZGVsdGFZIiwid2hlZWxEZWx0YVgiLCJ3aGVlbERlbHRhWSIsImRldGFpbCIsInNjcm9sbCIsInN0b3BQcm9wYWdhdGlvbiIsIlBhbGV0dGUiLCJnYW1lIiwiYmxhY2siLCJka3JlZCIsImRrZ3JlZW4iLCJka3llbGxvdyIsImRrYmx1ZSIsImRrZnVjaHNpYSIsInRlYWwiLCJncmV5IiwiZGtncmV5IiwicmVkIiwibGltZSIsInllbGxvdyIsImJsdWUiLCJmdWNoc2lhIiwiY3lhbiIsIndoaXRlIiwibWFwVmFsdWVzIiwiZmluZCIsIktleWJvYXJkIiwiX29uS2V5ZG93biIsIm9uS2V5ZG93biIsIl9vbktleXVwIiwib25LZXl1cCIsIl9tb2RzIiwiX2pveXN0aWNrIiwiX2tleXMiLCJrZXkiLCJrZXlDb2RlIiwia2V5cyIsIm1vZHMiLCJqb3lzdGljayIsInNoaWZ0IiwiY3RybCIsImFsdCIsIm1ldGEiLCJudW1wYWQiLCJidG4wIiwiYnRuMSIsImJ0bjIiLCJidG4zIiwiYnRuNCIsInVwIiwiZG93biIsInJpZ2h0IiwibG9jYXRpb24iLCJldmVudERldGFpbHMiLCJNb3VzZSIsImludGVyYWN0aXZlIiwiX29uTW91c2VEb3duIiwib25Nb3VzZURvd24iLCJfb25Nb3VzZU1vdmUiLCJvbk1vdXNlTW92ZSIsIl9vbk1vdXNlVXAiLCJvbk1vdXNlVXAiLCJfeCIsIl95IiwiX2J0bnMiLCJnbG9iYWwiLCJidXR0b24iLCJvcmlnaW5hbEV2ZW50IiwiZ2V0RXZlbnRJbmZvIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEtBQUlBLEtBQUtDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVDtBQUNBRixJQUFHRyxTQUFIO0FBQ0FGLFVBQVNHLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsRUFBMUI7O0FBRU8sS0FBTU0sOEJBQVcsQ0FBakI7QUFDQSxLQUFNQyw4QkFBVyxDQUFqQjtBQUNBLEtBQU1DLDRCQUFVLENBQWhCOztLQUVNQyxJLFdBQUFBLEk7OztBQUVYLGlCQUFhQyxPQUFiLEVBQXNCO0FBQUE7O0FBQUE7O0FBR3BCLFdBQUtDLEtBQUw7O0FBRUEsV0FBS0MsU0FBTCxHQUFpQixTQUFFQyxHQUFGLENBQU1ILE9BQU4sRUFBZSxVQUFmLEVBQTJCO0FBQzFDSSxjQUFPLEdBRG1DO0FBRTFDQyxlQUFRLEdBRmtDO0FBRzFDQyxjQUFPLENBSG1DO0FBSTFDQyxzQkFBZSxHQUoyQjtBQUsxQ0Ms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VSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjs7QUFFQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxFQUFWLElBQWdCLFFBQWhCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEVBQVYsSUFBZ0IsUUFBaEI7QUFDQSxZQUFLQSxJQUFMLENBQVUsRUFBVixJQUFnQixRQUFoQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJQUFMLENBQVUsR0FBVixJQUFpQixRQUFqQjtBQUNBLFlBQUtBLElBQUwsQ0FBVSxHQUFWLElBQWlCLFFBQWpCO0FBQ0EsWUFBS0EsSUFBTCxDQUFVLEdBQVYsSUFBaUIsUUFBakI7QUFDQSxZQUFLQSxJ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S0FBVjtBQUNEOzs7eUJBUlc7QUFBRSxjQUFPLEtBQUs2UyxLQUFaO0FBQW1CLE07dUJBVXZCN1MsSyxFQUFPO0FBQ2YsWUFBSzZTLEtBQUwsR0FBYTdTLEtBQWI7QUFDRDs7Ozs7O21CQXZFa0JtUyxLIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNjMDc1ZmQ4NjcyOWNjZjI0M2Q0IiwiaW1wb3J0IHsgXywgYXN5bmMgfSBmcm9tICcuL3V0aWxzLmpzJ1xuXG5pbXBvcnQgJ3BpeGkuanMnXG5pbXBvcnQgJ3dlYi1hdWRpby1kYXcnXG5cbmltcG9ydCBjc3MgZnJvbSAnLi4vc3R5bGUvbWFpbi5jc3MnXG5pbXBvcnQgdCBmcm9tICcuLi9odG1sL21haW4uaHRtbCdcblxuaW1wb3J0IHsgRW1pdHRlciB9IGZyb20gJy4vZW1pdHRlci5qcydcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9zY3JlZW4uanMnXG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi9rZXlib2FyZC5qcydcbmltcG9ydCBNb3VzZSBmcm9tICcuL21vdXNlLmpzJ1xuXG4vLyBpbXBvcnQgeyBWTSB9IGZyb20gJy4vaW50ZXJwcmV0ZXIvdm0uanMnXG5cbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICBsZXQgc3JjID0gcmVxdWlyZSgncmF3IS4uL3Rlc3QvdGVzdDEueDMyJylcbi8vICAgY29uc29sZS5sb2coc3JjKVxuXG4vLyAgIGxldCB2bSA9IG5ldyBWTSgpXG4vLyAgIHZtLmxvYWQoc3JjKVxuLy8gICB2bS5ydW4oKVxuLy8gICB2bS5kdW1wKClcbi8vIH0sIDEwMClcblxuLy8gY29uc29sZS5sb2coaGV4eS5oZXh5KHZtLm1lbV9idWZmZXIsIHsgb2Zmc2V0OiAwLCBsZW5ndGg6IDUxMiwgZGlzcGxheV9vZmZzZXQ6IDB4MDAsIHdpZHRoOiAxNiwgY2FwczogJ3VwcGVyJywgaW5kZW50OiAyIH0pKVxuXG5sZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZWwuaW5uZXJIVE1MID0gdFxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbClcblxuZXhwb3J0IGNvbnN0IF9TVE9QUEVEID0gMFxuZXhwb3J0IGNvbnN0IF9SVU5OSU5HID0gMVxuZXhwb3J0IGNvbnN0IF9QQVVTRUQgPSAyXG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgRW1pdHRlciB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnJlc2V0KClcblxuICAgIHRoaXMuX2RlZmF1bHRzID0gXy5nZXQob3B0aW9ucywgJ2RlZmF1bHRzJywge1xuICAgICAgd2lkdGg6IDMyMCxcbiAgICAgIGhlaWdodDogMjQwLFxuICAgICAgc2NhbGU6IDQsXG4gICAgICBkYmxDbGlja0RlbGF5OiAyNTAsXG4gICAgICBkYmxDbGlja0Rpc3RhbmNlOiA4LFxuICAgIH0pXG5cbiAgICBsZXQgZGVmYXVsdHMgPSB0aGlzLl9kZWZhdWx0c1xuXG4gICAgdGhpcy5fd2lkdGggPSBfLmdldChvcHRpb25zLCAnd2lkdGgnLCBkZWZhdWx0cy53aWR0aClcbiAgICB0aGlzLl9oZWlnaHQgPSBfLmdldChvcHRpb25zLCAnaGVpZ2h0JywgZGVmYXVsdHMuaGVpZ2h0KVxuICAgIHRoaXMuX3NjYWxlID0gXy5nZXQob3B0aW9ucywgJ3NjYWxlJywgZGVmYXVsdHMuc2NhbGUpXG5cbiAgICB0aGlzLl9kYmxDbGlja0RlbGF5ID0gXy5nZXQob3B0aW9ucywgJ2RibENsaWNrRGVsYXknLCBkZWZhdWx0cy5kYmxDbGlja0RlbGF5KVxuICAgIHRoaXMuX2RibENsaWNrRGlzdGFuY2UgPSBfLmdldChvcHRpb25zLCAnZGJsQ2xpY2tEaXN0YW5jZScsIGRlZmF1bHRzLmRibENsaWNrRGlzdGFuY2UpXG5cbiAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4odGhpcywgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCwgdGhpcy5fc2NhbGUpXG4gICAgdGhpcy5rZXlib2FyZCA9IG5ldyBLZXlib2FyZCh0aGlzKVxuICAgIHRoaXMubW91c2UgPSBuZXcgTW91c2UodGhpcylcblxuICAgIHRoaXMuX29uUmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uUmVzaXplKVxuXG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgUElYSS50aWNrZXIuc2hhcmVkLmFkZCh0aW1lID0+IHtcbiAgICAgIGlmICh0aGF0LnN0YXR1cyA9PT0gX1JVTk5JTkcpIHtcbiAgICAgICAgdGhhdC50aWNrKHRpbWUpXG5cbiAgICAgICAgbGV0IHJlbmRlciA9IGZhbHNlXG5cbiAgICAgICAgZm9yIChsZXQgcSBvZiB0aGF0Ll91cGRhdGVzLnF1ZXVlKSB7XG4gICAgICAgICAgcS5vYmplY3QuX19hZGRlZFRvVXBkYXRlcyA9IGZhbHNlXG4gICAgICAgICAgaWYgKHEucmVuZGVyKSB7XG4gICAgICAgICAgICByZW5kZXIgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChxLmNiKSB7XG4gICAgICAgICAgICBxLmNiKHEub2JqZWN0LCAuLi4ocS5hcmdzIHx8IFtdKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGF0Ll91cGRhdGVzLnF1ZXVlID0gW11cblxuICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgdGhhdC5zY3JlZW4ucmVuZGVyZXIucmVuZGVyKHRoYXQuc2NyZWVuLnN0YWdlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGFzeW5jKHRoaXMsIHRoaXMuc3RhcnQsIDEwMClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuc2NyZWVuLmRlc3Ryb3koKVxuICAgIHRoaXMua2V5Ym9hcmQuZGVzdHJveSgpXG4gICAgdGhpcy5tb3VzZS5kZXN0cm95KClcbiAgICBzdXBlci5kZXN0cm95KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSAwXG5cbiAgICB0aGlzLl9jdXJyZW50T3ZlciA9IG51bGxcblxuICAgIHRoaXMuX3VwZGF0ZXMgPSB7XG4gICAgICBxdWV1ZTogW10sXG5cbiAgICAgIGFkZDogb3B0aW9ucyA9PiB7XG4gICAgICAgIGxldCBvID0gXy5nZXQob3B0aW9ucywgJ29iamVjdCcpXG4gICAgICAgIGlmIChvICYmICFvLl9fYWRkZWRUb1VwZGF0ZXMpIHtcbiAgICAgICAgICBvLl9fYWRkZWRUb1VwZGF0ZXMgPSB0cnVlXG4gICAgICAgICAgdGhpcy5fdXBkYXRlcy5xdWV1ZS5wdXNoKG9wdGlvbnMpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogbyA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZXMucXVldWUgPSBfLnJlamVjdCh0aGlzLl91cGRhdGVzLnF1ZXVlLCB7IG9iamVjdDogbyB9KVxuICAgICAgICBvLl9fYWRkZWRUb1VwZGF0ZXMgPSBmYWxzZVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGl0dGxlRW5kaWFuXG4gICAgbGV0IGIgPSBuZXcgQXJyYXlCdWZmZXIoNClcbiAgICBsZXQgYSA9IG5ldyBVaW50MzJBcnJheShiKVxuICAgIGxldCBjID0gbmV3IFVpbnQ4QXJyYXkoYilcbiAgICBhWzBdID0gMHhkZWFkYmVlZlxuICAgIHRoaXMuTEUgPSBjWzBdID09PSAweGVmXG4gIH1cblxuICBnZXQgZGVmYXVsdHMgKCkgeyByZXR1cm4gdGhpcy5fZGVmYXVsdHMgfVxuXG4gIGdldCBjdXJyZW50T3ZlciAoKSB7IHJldHVybiB0aGlzLl9jdXJyZW50T3ZlciB9XG4gIHNldCBjdXJyZW50T3ZlciAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudE92ZXIgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9jdXJyZW50T3ZlciA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgZ2V0IHN0YXR1cyAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXMgfVxuICBzZXQgc3RhdHVzICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9zdGF0dXMgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGdldCB1cGRhdGVzICgpIHsgcmV0dXJuIHRoaXMuX3VwZGF0ZXMgfVxuXG4gIGdldCBkYmxDbGlja0RlbGF5ICgpIHsgcmV0dXJuIHRoaXMuX2RibENsaWNrRGVsYXkgfVxuICBzZXQgZGJsQ2xpY2tEZWxheSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5fZGJsQ2xpY2tEZWxheSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX2RibENsaWNrRGVsYXkgPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGdldCBkYmxDbGlja0Rpc3RhbmNlICgpIHsgcmV0dXJuIHRoaXMuX2RibENsaWNrRGlzdGFuY2UgfVxuICBzZXQgZGJsQ2xpY2tEaXN0YW5jZSAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5fZGJsQ2xpY2tEaXN0YW5jZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX2RibENsaWNrRGlzdGFuY2UgPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplICgpIHtcbiAgICB0aGlzLnNjcmVlbi5lbWl0KCdyZXNpemUnKVxuICAgIHRoaXMua2V5Ym9hcmQuZW1pdCgncmVzaXplJylcbiAgICB0aGlzLm1vdXNlLmVtaXQoJ3Jlc2l6ZScpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ICgpIHtcbiAgICB0aGlzLnN0YXR1cyA9IF9SVU5OSU5HXG4gICAgdGhpcy50ZXN0KClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RvcCAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBfU1RPUFBFRFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwYXVzZSAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBfUEFVU0VEXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc3VtZSAoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBfUlVOTklOR1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0aWNrICh0aW1lKSB7XG4gICAgdGhpcy5zY3JlZW4udGljayh0aW1lKVxuICAgIHRoaXMua2V5Ym9hcmQudGljayh0aW1lKVxuICAgIHRoaXMubW91c2UudGljayh0aW1lKVxuICB9XG5cbiAgdGVzdCAoKSB7XG4gIH1cblxufVxuXG5leHBvcnQgbGV0IG1haW4gPSBuZXcgTWFpbigpXG53aW5kb3cuYXBwID0gbWFpblxuXG5jb25zb2xlLmxvZyh3aW5kb3cuYXBwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9tYWluLmpzIiwiY29uc3QgZWxlY3Ryb24gPSByZXF1aXJlKCdlbGVjdHJvbicpXG5jb25zdCB7IHJlbW90ZSwgc2NyZWVuLCBkaWFsb2cgfSA9IGVsZWN0cm9uXG5jb25zdCB7IGFwcCwgQnJvd3NlcldpbmRvdyB9ID0gcmVtb3RlXG5cbmNvbnN0IF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlLXBsdXMnKVxuXy5leHRlbmQoXywgcmVxdWlyZSgnbG9kYXNoJykpXG5cbl8udGVtcGxhdGVTZXR0aW5ncy5pbnRlcnBvbGF0ZSA9IC8jeyhbXFxzXFxTXSs/KX0vZ1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzLXByb21pc2UnKVxuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHJhZiBmcm9tICdyYWYnXG5pbXBvcnQgcGVyZm9ybWFuY2UgZnJvbSAncGVyZm9ybWFuY2Utbm93J1xuXG5pbXBvcnQgeyBNaXhpbiwgbWl4IH0gZnJvbSAnbWl4d2l0aCdcbndpbmRvdy5NaXhpbiA9IE1peGluXG53aW5kb3cubWl4ID0gbWl4XG5cbmxldCB1c2VyUGF0aCA9IHBhdGguam9pbihhcHAuZ2V0QXBwUGF0aCgpLCAnL3VzZXInKVxuaWYgKCFmcy5leGlzdHNTeW5jKHVzZXJQYXRoKSkge1xuICBmcy5ta2RpcnModXNlclBhdGgpXG59XG5cbmxldCBJU19XSU4gPSAvXndpbi8udGVzdChwcm9jZXNzLnBsYXRmb3JtKVxubGV0IElTX09TWCA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nXG5sZXQgSVNfTElOVVggPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnbGludXgnXG5sZXQgZGlycyA9IHtcbiAgYnVpbGQ6IF9fZGlybmFtZSxcbiAgY3dkOiBhcHAuZ2V0QXBwUGF0aCgpLFxuICBob21lOiBhcHAuZ2V0UGF0aCgnaG9tZScpLFxuICBhcHA6IGFwcC5nZXRQYXRoKCdhcHBEYXRhJyksXG4gIHVzZXI6IHVzZXJQYXRoLFxuICB0bXA6IGFwcC5nZXRQYXRoKCd0ZW1wJyksXG4gIHJvb3Q6IGFwcC5nZXRQYXRoKCdleGUnKSxcbiAgbm9kZV9tb2R1bGVzOiBwYXRoLmpvaW4odXNlclBhdGgsICdub2RlX21vZHVsZXMnKSxcbiAgdXNlcl9wa2c6IHBhdGguam9pbih1c2VyUGF0aCwgJ3BhY2thZ2UuanNvbicpLFxufVxuXG5sZXQgbmFtZSA9IGFwcC5nZXROYW1lKClcbmxldCB2ZXJzaW9uID0gYXBwLmdldFZlcnNpb24oKVxuXG5sZXQgb3BlbkZpbGUgPSAoLi4uYXJncykgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBkaWFsb2cuc2hvd09wZW5EaWFsb2cuYXBwbHkoZGlhbG9nLCBhcmdzKVxuICB9XG4gIGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5sZXQgc2F2ZUZpbGUgPSAoLi4uYXJncykgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBkaWFsb2cuc2hvd1NhdmVEaWFsb2cuYXBwbHkoZGlhbG9nLCBhcmdzKVxuICB9XG4gIGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5sZXQgbWVzc2FnZUJveCA9ICguLi5hcmdzKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRpYWxvZy5zaG93TWVzc2FnZUJveC5hcHBseShkaWFsb2csIGFyZ3MpXG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmxldCBtYXBfZ2V0dGVycyA9IChzb3VyY2UsIHRhcmdldCwgZGVmcykgPT4ge1xuICBmb3IgKGxldCBrIGluIGRlZnMpIHtcbiAgICBsZXQgZm4gPSBkZWZzW2tdXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNvdXJjZSwgaywge1xuICAgICAgZ2V0OiAoKSA9PiBmbi5jYWxsKHRhcmdldCwgc291cmNlKSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgfSlcbiAgfVxufVxuXG5sZXQgbWFwX2dldHRlcnNfcmV0dXJuX3RoaXMgPSAoc291cmNlLCB0YXJnZXQsIGRlZnMpID0+IHtcbiAgZm9yIChsZXQgayBpbiBkZWZzKSB7XG4gICAgbGV0IGZuID0gZGVmc1trXVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzb3VyY2UsIGssIHtcbiAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICBmbi5jYWxsKHRhcmdldCwgc291cmNlKVxuICAgICAgICByZXR1cm4gc291cmNlXG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9KVxuICB9XG59XG5cbmxldCBub3cgPSAoKSA9PiBwZXJmb3JtYW5jZS5ub3coKVxuXG5sZXQgZGVsYXkgPSBtcyA9PiB7XG4gIC8vIHNldFRpbWVvdXQoKCkgPT4ge30sIG1zKVxuICBsZXQgdCA9IHBlcmZvcm1hbmNlLm5vdygpXG4gIGxldCBjID0gdFxuICB3aGlsZSAoYyAtIHQgPD0gbXMpIHtcbiAgICAvLyBQSVhJLnRpY2tlci5zaGFyZWQudXBkYXRlKGMpXG4gICAgYyA9IHBlcmZvcm1hbmNlLm5vdygpXG4gIH1cbn1cblxubGV0IGFzeW5jID0gKGNvbnRleHQsIGZuLCBhcmdzLCBkZWxheSkgPT4ge1xuICBpZiAoXy5pc051bWJlcihhcmdzKSkge1xuICAgIGRlbGF5ID0gYXJnc1xuICAgIGFyZ3MgPSBbXVxuICB9XG4gIGlmICghXy5pc0FycmF5KGFyZ3MpKSB7XG4gICAgYXJncyA9IFthcmdzXVxuICB9XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGZuLmNhbGwoY29udGV4dCwgLi4uYXJncylcbiAgfSwgZGVsYXkgfHwgMSlcbn1cblxubGV0IGJ1ZmZlcl90b19zdHJpbmcgPSBiID0+IHtcbiAgbGV0IGxlbiA9IGIubGVuZ3RoXG4gIGxldCBpID0gMFxuICBsZXQgcyA9ICcnXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcyArPSBiW2krK10udG9TdHJpbmcoMTYpXG4gIH1cbiAgcmV0dXJuIHNcbn1cblxubGV0IHN0cmluZ190b19idWZmZXIgPSBzdHIgPT4ge1xuICBsZXQgbGVuID0gc3RyLmxlbmd0aFxuICBsZXQgaSA9IDBcbiAgbGV0IGIgPSBuZXcgQnVmZmVyKE1hdGgudHJ1bmMoc3RyLmxlbmd0aCAvIDIpKVxuICBsZXQgeCA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBsZXQgaGV4ID0gc3RyLnN1YnN0cihpLCAyKVxuICAgIGJbeCsrXSA9IHBhcnNlSW50KGhleCwgMTYpXG4gICAgaSArPSAyXG4gIH1cbiAgcmV0dXJuIGJcbn1cblxubGV0IHN0cmluZ19idWZmZXIgPSAoc3RyLCBsZW4gPSAwKSA9PiB7XG4gIGxlbiA9IGxlbiB8fCBzdHIubGVuZ3RoXG4gIHZhciBiID0gbmV3IEJ1ZmZlcihsZW4pXG4gIGIud3JpdGUoc3RyLCAwLCBzdHIubGVuZ3RoLCAnYXNjaWknKVxuICByZXR1cm4gYlxufVxuXG5sZXQgbm9ybWFsaXplTWVzc2FnZXMgPSAoLi4ubWVzc2FnZSkgPT4ge1xuICBsZXQgYXJncyA9IFtdXG4gIGZvciAobGV0IG0gb2YgbWVzc2FnZSkge1xuICAgIGlmIChfLmlzQXJyYXkobSkpIHtcbiAgICAgIGFyZ3MucHVzaChtLmpvaW4oJywgJykpXG4gICAgfVxuICAgIGVsc2UgaWYgKF8uaXNTdHJpbmcobSkpIHtcbiAgICAgIGFyZ3MucHVzaChtKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJnc1xufVxuXG5sZXQgaGV4ID0gKHZhbHVlLCBzaXplID0gMzIpID0+ICckJyArIF8ucGFkU3RhcnQodmFsdWUudG9TdHJpbmcoMTYpLCBNYXRoLnRydW5jKHNpemUgLyA0KSwgJzAnKVxuXG5sZXQgYnVmZmVyX2R1bXAgPSAoYnVmZmVyLCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCAxNlxuICBsZXQgY2FwcyA9IG9wdGlvbnMuY2FwcyB8fCAndXBwZXInXG4gIGxldCBpbmRlbnQgPSBfLnJlcGVhdCgnICcsIG9wdGlvbnMuaW5kZW50IHx8IDApXG5cbiAgbGV0IHplcm8gPSAobiwgbWF4KSA9PiB7XG4gICAgbiA9IG4udG9TdHJpbmcoMTYpXG4gICAgaWYgKGNhcHMgPT09ICd1cHBlcicpIHsgbiA9IG4udG9VcHBlckNhc2UoKSB9XG4gICAgd2hpbGUgKG4ubGVuZ3RoIDwgbWF4KSB7XG4gICAgICBuID0gJzAnICsgblxuICAgIH1cbiAgICByZXR1cm4gblxuICB9XG5cbiAgbGV0IGxlbiA9IE1hdGgubWluKGJ1ZmZlci5ieXRlTGVuZ3RoLCBvcHRpb25zLmxlbmd0aCB8fCBidWZmZXIuYnl0ZUxlbmd0aClcbiAgbGV0IHJvd3MgPSBNYXRoLmNlaWwobGVuIC8gd2lkdGgpXG4gIGxldCBsYXN0ID0gbGVuICUgd2lkdGggfHwgd2lkdGhcbiAgbGV0IG9mZnNldExlbmd0aCA9IGxlbi50b1N0cmluZygxNikubGVuZ3RoXG4gIGlmIChvZmZzZXRMZW5ndGggPCA2KSB7IG9mZnNldExlbmd0aCA9IDYgfVxuXG4gIGxldCBhcnIgPSBuZXcgVWludDhBcnJheShidWZmZXIpXG5cbiAgbGV0IHN0ciA9IGluZGVudCArICdPZmZzZXQnXG4gIHdoaWxlIChzdHIubGVuZ3RoIDwgb2Zmc2V0TGVuZ3RoKSB7XG4gICAgc3RyICs9ICcgJ1xuICB9XG5cbiAgc3RyICs9ICcgICdcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICBzdHIgKz0gJyAnICsgemVybyhpLCAyKVxuICB9XG5cbiAgaWYgKGxlbikge1xuICAgIHN0ciArPSAnXFxuJ1xuICB9XG5cbiAgbGV0IGIgPSAwXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICBzdHIgKz0gaW5kZW50ICsgemVybyhiLCBvZmZzZXRMZW5ndGgpICsgJyAgJ1xuICAgIGxldCBsYXN0Qnl0ZXMgPSBpID09PSByb3dzIC0gMSA/IGxhc3QgOiB3aWR0aFxuICAgIGxldCBsYXN0U3BhY2VzID0gd2lkdGggLSBsYXN0Qnl0ZXNcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGFzdEJ5dGVzOyBqKyspIHtcbiAgICAgIHN0ciArPSAnICcgKyB6ZXJvKGFycltiXSwgMilcbiAgICAgIGIrK1xuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGFzdFNwYWNlczsgaisrKSB7XG4gICAgICBzdHIgKz0gJyAgICdcbiAgICB9XG5cbiAgICBiIC09IGxhc3RCeXRlc1xuICAgIHN0ciArPSAnICAgJ1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsYXN0Qnl0ZXM7IGorKykge1xuICAgICAgbGV0IHYgPSBhcnJbYl1cbiAgICAgIHN0ciArPSB2ID4gMzEgJiYgdiA8IDEyNyB8fCB2ID4gMTU5ID8gU3RyaW5nLmZyb21DaGFyQ29kZSh2KSA6ICcuJ1xuICAgICAgYisrXG4gICAgfVxuXG4gICAgc3RyICs9ICdcXG4nXG4gIH1cblxuICByZXR1cm4gc3RyXG59XG5cbmxldCB1dG9hID0gc3RyID0+IHdpbmRvdy5idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKSlcblxubGV0IGF0b3UgPSBzdHIgPT4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSh3aW5kb3cuYXRvYihzdHIpKSlcblxud2luZG93LnV0b2EgPSB1dG9hXG53aW5kb3cuYXRvdSA9IGF0b3VcblxuXG5sZXQgaW5zdGFuY2VGdW5jdGlvbiA9ICh0YXJnZXQsIG5hbWUsIGZuLCBmb3JjZSA9IGZhbHNlKSA9PiB7XG4gIGlmIChmb3JjZSB8fCAhdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xuICAgICAgdmFsdWU6IGZuLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSlcbiAgfVxufVxuXG5sZXQgaW5zdGFuY2VGdW5jdGlvbnMgPSAodGFyZ2V0LCBzb3VyY2UsIG5hbWVzKSA9PiB7XG4gIGZvciAobGV0IG4gb2YgbmFtZXMpIHtcbiAgICBpZiAoXy5pc0FycmF5KG4pKSB7XG4gICAgICBpbnN0YW5jZUZ1bmN0aW9uKHRhcmdldCwgblswXSwgc291cmNlW25bMV1dKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGluc3RhbmNlRnVuY3Rpb24odGFyZ2V0LCBuLCBzb3VyY2Vbbl0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIF8sXG4gIG5hbWUsXG4gIHZlcnNpb24sXG4gIGVsZWN0cm9uLFxuICBkaWFsb2csXG4gIG9wZW5GaWxlLFxuICBzYXZlRmlsZSxcbiAgbWVzc2FnZUJveCxcbiAgcmVtb3RlLFxuICBzY3JlZW4sXG4gIEJyb3dzZXJXaW5kb3csXG4gIGFwcCxcbiAgZnMsXG4gIHBhdGgsXG4gIHVzZXJQYXRoLFxuICBJU19XSU4sXG4gIElTX09TWCxcbiAgSVNfTElOVVgsXG4gIGRpcnMsXG4gIHJhZixcbiAgbm93LFxuICBNaXhpbixcbiAgbWl4LFxuICBtYXBfZ2V0dGVycyxcbiAgbWFwX2dldHRlcnNfcmV0dXJuX3RoaXMsXG4gIGRlbGF5LFxuICBhc3luYyxcbiAgYnVmZmVyX3RvX3N0cmluZyxcbiAgc3RyaW5nX3RvX2J1ZmZlcixcbiAgc3RyaW5nX2J1ZmZlcixcbiAgbm9ybWFsaXplTWVzc2FnZXMsXG4gIGhleCxcbiAgYnVmZmVyX2R1bXAsXG4gIHV0b2EsXG4gIGF0b3UsXG4gIGluc3RhbmNlRnVuY3Rpb24sXG4gIGluc3RhbmNlRnVuY3Rpb25zLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3V0aWxzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYWZcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyYWZcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZXJmb3JtYW5jZS1ub3dcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwZXJmb3JtYW5jZS1ub3dcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtaXh3aXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWl4d2l0aFwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZWxlY3Ryb25cIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlLXBsdXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1bmRlcnNjb3JlLXBsdXNcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2hcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1wcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnMtcHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBpeGkuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwaXhpLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYi1hdWRpby1kYXdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWItYXVkaW8tZGF3XCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL2Nzc25leHQtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uL25vZGVfbW9kdWxlcy9jc3NuZXh0LWxvYWRlci9pbmRleC5qcyEuL21haW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL2Nzc25leHQtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3R5bGUvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zdHlsZS9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHVCQUErQztFQUMvQyxZQUF5QjtDQUMxQjs7QUFFRDtFQUNFLHdCQUF3QjtDQUN6QlwiLFwiZmlsZVwiOlwibWFpbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoLi9jb2xvcnMuY3NzKTtcXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbmNhbnZhcyB7XFxuICBjdXJzb3I6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L2Nzc25leHQtbG9hZGVyIS4vc3R5bGUvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW87XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbWVtbztcblx0XHR9O1xuXHR9LFxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qoc2VsZi5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuXHR9KSxcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG5cdH0pLFxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2Vcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XG5cdHJldHVybiBsaW5rRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdGlmKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XG5cblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKVxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9odG1sL21haW4uaHRtbFxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgY2xhc3MgRXZlbnQge1xuXG4gIGNvbnN0cnVjdG9yICh0YXJnZXQsIG5hbWUsIGRhdGEsIGJ1YmJsZXMgPSB0cnVlKSB7XG4gICAgdGhpcy5fX2V2ZW50T2JqZWN0ID0gdHJ1ZVxuICAgIHRoaXMudGltZVN0YW1wID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldFxuICAgIHRoaXMudHlwZSA9IG5hbWVcbiAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgdGhpcy5idWJibGVzID0gYnViYmxlc1xuICAgIHRoaXMuc3RvcHBlZCA9IGZhbHNlXG4gICAgdGhpcy5zdG9wcGVkSW1tZWRpYXRlID0gZmFsc2VcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuICB9XG5cbiAgc3RvcCAoKSB7XG4gICAgdGhpcy5zdG9wcGVkID0gdHJ1ZVxuICB9XG5cbiAgc3RvcEltbWVkaWF0ZSAoKSB7XG4gICAgdGhpcy5zdG9wcGVkSW1tZWRpYXRlID0gdHJ1ZVxuICB9XG5cbiAgc3RvcFByb3BhZ2F0aW9uICgpIHtcbiAgICB0aGlzLnN0b3BwZWQgPSB0cnVlXG4gIH1cblxuICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gKCkge1xuICAgIHRoaXMuc3RvcHBlZEltbWVkaWF0ZSA9IHRydWVcbiAgfVxuXG4gIGNhbmNlbEJ1YmJsZSAoKSB7XG4gICAgdGhpcy5idWJibGVzID0gZmFsc2VcbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0ICgpIHtcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlXG4gIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgRW1pdHRlciB7XG5cbiAgb24gKG5hbWUsIGZuLCBvcmRlciA9IDApIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cbiAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0gPSB0aGlzLl9saXN0ZW5lcnNbbmFtZV0gfHwgW11cbiAgICB0aGlzLl9saXN0ZW5lcnNbbmFtZV0ucHVzaCh7IGZuLCBvcmRlciB9KVxuICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSA9IF8uc29ydEJ5KHRoaXMuX2xpc3RlbmVyc1tuYW1lXSwgJ29yZGVyJylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgb25jZSAobmFtZSwgZm4pIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cblxuICAgIGxldCB0aGF0ID0gdGhpc1xuICAgIGxldCBvbmNlSGFuZGxlcldyYXBwZXIgPSAoKSA9PiB7XG4gICAgICBmbi5hcHBseSh0aGF0Lm9mZihuYW1lLCBvbmNlSGFuZGxlcldyYXBwZXIpLCBhcmd1bWVudHMpXG4gICAgfVxuICAgIG9uY2VIYW5kbGVyV3JhcHBlci5fb3JpZ2luYWxIYW5kbGVyID0gZm5cblxuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIG9uY2VIYW5kbGVyV3JhcHBlcilcbiAgfVxuXG4gIG9mZiAobmFtZSwgZm4pIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMgfHwge31cblxuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGxldCBsaXN0ID0gdGhpcy5fbGlzdGVuZXJzW25hbWVdXG4gICAgbGV0IGkgPSBmbiA/IGxpc3QubGVuZ3RoIDogMFxuXG4gICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgIGlmIChsaXN0W2ldLmZuID09PSBmbiB8fCBsaXN0W2ldLl9vcmlnaW5hbEhhbmRsZXIgPT09IGZuKSB7XG4gICAgICAgIGxpc3Quc3BsaWNlKGksIDEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF8uaXNFbXB0eShsaXN0KSkge1xuICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tuYW1lXVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBlbWl0IChuYW1lLCBkYXRhKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzIHx8IHt9XG5cbiAgICBsZXQgb3JpZ0V2ZW50RGF0YVxuXG4gICAgaWYgKCFkYXRhIHx8IGRhdGEuX19ldmVudE9iamVjdCAhPT0gdHJ1ZSkge1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5kYXRhICYmIGRhdGEudHlwZSkge1xuICAgICAgICBvcmlnRXZlbnREYXRhID0gZGF0YVxuICAgICAgICBkYXRhID0gZGF0YS5kYXRhXG4gICAgICB9XG4gICAgICBkYXRhID0gbmV3IEV2ZW50KHRoaXMsIG5hbWUsIGRhdGEpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgbGV0IGxpc3RlbmVycyA9IF8uY2xvbmUodGhpcy5fbGlzdGVuZXJzW25hbWVdKVxuICAgICAgZm9yIChsZXQgbCBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgbC5mbi5jYWxsKHRoaXMsIGRhdGEpXG4gICAgICAgIGlmIChkYXRhLnN0b3BwZWRJbW1lZGlhdGUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZGF0YS5zdG9wcGVkKSB7XG4gICAgICAgIGlmIChvcmlnRXZlbnREYXRhKSB7XG4gICAgICAgICAgb3JpZ0V2ZW50RGF0YS5zdG9wcGVkID0gdHJ1ZVxuICAgICAgICAgIGRhdGEuY2FuY2VsQnViYmxlKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRhLmJ1YmJsZXMgJiYgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZW1pdCkge1xuICAgICAgdGhpcy5wYXJlbnQuZW1pdChuYW1lLCBkYXRhKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWRcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvZW1pdHRlci5qcyIsImltcG9ydCBQYWxldHRlIGZyb20gJy4vcGFsZXR0ZS5qcydcbmltcG9ydCB7IEVtaXR0ZXIgfSBmcm9tICcuL2VtaXR0ZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbiBleHRlbmRzIEVtaXR0ZXIge1xuXG4gIGNvbnN0cnVjdG9yIChtYWluLCB3aWR0aCA9IDY0MCwgaGVpZ2h0ID0gNDgwLCBzY2FsZSA9IDEpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLl9tYWluID0gbWFpblxuXG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aFxuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodFxuICAgIHRoaXMuX3NpemUgPSB3aWR0aCAqIGhlaWdodFxuICAgIHRoaXMuX3NjYWxlID0gc2NhbGVcblxuICAgIHRoaXMuX3BhbGV0dGUgPSBuZXcgUGFsZXR0ZSh0aGlzKVxuXG4gICAgdGhpcy5mb3JjZV91cGRhdGUgPSBmYWxzZVxuXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBuZXcgUElYSS5hdXRvRGV0ZWN0UmVuZGVyZXIodGhpcy5fd2lkdGggKiB0aGlzLl9zY2FsZSwgdGhpcy5faGVpZ2h0ICogdGhpcy5fc2NhbGUsIHt9KVxuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgdGhpcy5fcmVuZGVyZXIudmlldy5zdHlsZS5jdXJzb3IgPSAnbm9uZSdcbiAgICB0aGlzLl9yZW5kZXJlci52aWV3LmlkID0gJ3NjcmVlbidcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX3JlbmRlcmVyLnZpZXcpXG5cbiAgICB0aGlzLl9zdGFnZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpXG4gICAgdGhpcy5fc3RhZ2Uuc2NhbGUgPSBuZXcgUElYSS5Qb2ludCh0aGlzLl9zY2FsZSwgdGhpcy5fc2NhbGUpXG5cbiAgICB0aGlzLnJlc2V0KClcblxuICAgIHRoaXMuX29uUmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKVxuICAgIHRoaXMub24oJ3Jlc2l6ZScsIHRoaXMuX29uUmVzaXplKVxuXG4gICAgdGhpcy5fb25TY3JvbGwgPSB0aGlzLm9uU2Nyb2xsLmJpbmQodGhpcylcbiAgICB0aGlzLl9yZW5kZXJlci52aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5fb25TY3JvbGwsIGZhbHNlKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5vZmYoJ3Jlc2l6ZScsIHRoaXMuX29uUmVzaXplKVxuICAgIHRoaXMuX3JlbmRlcmVyLnZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9vblNjcm9sbClcblxuICAgIGlmICh0aGlzLl9zcHJpdGUpIHtcbiAgICAgIHRoaXMuX3Nwcml0ZS5kZXN0cm95KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdGV4dHVyZSkge1xuICAgICAgdGhpcy5fdGV4dHVyZS5kZXN0cm95KClcbiAgICAgIHRoaXMuX3RleHR1cmUgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NhbnZhcykge1xuICAgICAgdGhpcy5fY2FudmFzLnJlbW92ZSgpXG4gICAgICB0aGlzLl9jYW52YXMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX2ZvcmNlX3VwZGF0ZSA9IGZhbHNlXG4gICAgdGhpcy5fZm9yY2VfZmxpcCA9IGZhbHNlXG4gICAgdGhpcy5fZGF0YSA9IG5ldyBVaW50OENsYW1wZWRBcnJheSh0aGlzLl9zaXplKVxuICAgIHRoaXMuY2xlYXIoKVxuICAgIHRoaXMucmVzaXplKClcbiAgfVxuXG4gIGdldCBtYWluICgpIHsgcmV0dXJuIHRoaXMuX21haW4gfVxuXG4gIGdldCBjdXJyZW50T3ZlciAoKSB7IHJldHVybiB0aGlzLl9tYWluLmN1cnJlbnRPdmVyIH1cbiAgc2V0IGN1cnJlbnRPdmVyICh2YWx1ZSkgeyB0aGlzLl9tYWluLmN1cnJlbnRPdmVyID0gdmFsdWUgfVxuXG4gIGdldCBzY2FsZSAoKSB7IHJldHVybiB0aGlzLl9zY2FsZSB9XG4gIHNldCBzY2FsZSAodmFsdWUpIHtcbiAgICB0aGlzLl9zY2FsZSA9IHZhbHVlXG4gICAgdGhpcy5yZXNpemUoKVxuICB9XG5cbiAgZ2V0IHdpZHRoICgpIHsgcmV0dXJuIHRoaXMuX3dpZHRoIH1cbiAgc2V0IHdpZHRoICh2YWx1ZSkge1xuICAgIHRoaXMuX3dpZHRoID0gdmFsdWVcbiAgICB0aGlzLnJlc2l6ZSgpXG4gIH1cblxuICBnZXQgaGVpZ2h0ICgpIHsgcmV0dXJuIHRoaXMuX2hlaWdodCB9XG4gIHNldCBoZWlnaHQgKHZhbHVlKSB7XG4gICAgdGhpcy5faGVpZ2h0ID0gdmFsdWVcbiAgICB0aGlzLnJlc2l6ZSgpXG4gIH1cblxuICBnZXQgZGF0YSAoKSB7IHJldHVybiB0aGlzLl9kYXRhIH1cblxuICBnZXQgcGFsZXR0ZSAoKSB7IHJldHVybiB0aGlzLl9wYWxldHRlIH1cblxuICBnZXQgc3RhZ2UgKCkgeyByZXR1cm4gdGhpcy5fc3RhZ2UgfVxuICBnZXQgcmVuZGVyZXIgKCkgeyByZXR1cm4gdGhpcy5fcmVuZGVyZXIgfVxuXG4gIGdldCBzcHJpdGUgKCkgeyByZXR1cm4gdGhpcy5fc3ByaXRlIH1cbiAgZ2V0IHRleHR1cmUgKCkgeyByZXR1cm4gdGhpcy5fdGV4dHVyZSB9XG4gIGdldCBjYW52YXMgKCkgeyByZXR1cm4gdGhpcy5fY2FudmFzIH1cbiAgZ2V0IGNvbnRleHQgKCkgeyByZXR1cm4gdGhpcy5fY29udGV4dCB9XG4gIGdldCBpbWFnZURhdGEgKCkgeyByZXR1cm4gdGhpcy5faW1hZ2VEYXRhIH1cblxuICBnZXQgZm9yY2VfdXBkYXRlICgpIHsgcmV0dXJuIHRoaXMuX2ZvcmNlX3VwZGF0ZSB9XG4gIHNldCBmb3JjZV91cGRhdGUgKHZhbHVlKSB7IHRoaXMuX2ZvcmNlX3VwZGF0ZSA9IHZhbHVlIH1cblxuICBnZXQgZm9yY2VfZmxpcCAoKSB7IHJldHVybiB0aGlzLl9mb3JjZV9mbGlwIH1cbiAgc2V0IGZvcmNlX2ZsaXAgKHZhbHVlKSB7IHRoaXMuX2ZvcmNlX2ZsaXAgPSB2YWx1ZSB9XG5cbiAgdGljayAoZGVsdGEpIHtcbiAgICBpZiAodGhpcy5fZm9yY2VfdXBkYXRlKSB7XG4gICAgICB0aGlzLl9mb3JjZV91cGRhdGUgPSBmYWxzZVxuICAgICAgdGhpcy5fcmVuZGVyZXIucmVuZGVyKHRoaXMuX3N0YWdlKVxuICAgIH1cbiAgfVxuXG4gIGNlbnRlciAoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIudmlldy5zdHlsZS5sZWZ0ID0gd2luZG93LmlubmVyV2lkdGggKiAwLjUgLSB0aGlzLl9yZW5kZXJlci53aWR0aCAqIDAuNSArICdweCdcbiAgICB0aGlzLl9yZW5kZXJlci52aWV3LnN0eWxlLnRvcCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNSAtIHRoaXMuX3JlbmRlcmVyLmhlaWdodCAqIDAuNSArICdweCdcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcmVzY2FsZSAod2lkdGgsIGhlaWdodCkge1xuICAgIGlmICghdGhpcy5lbWl0KCdyZXNjYWxlJywgeyB3aWR0aCwgaGVpZ2h0IH0pLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHRoaXMuc2NhbGUgPSBNYXRoLmNlaWwoTWF0aC5taW4od2lkdGggLyB0aGlzLl9yZW5kZXJlci53aWR0aCwgaGVpZ2h0IC8gdGhpcy5fcmVuZGVyZXIuaGVpZ2h0KSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlc2l6ZSAoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVzaXplKHRoaXMuX3dpZHRoICogdGhpcy5fc2NhbGUsIHRoaXMuX2hlaWdodCAqIHRoaXMuX3NjYWxlKVxuXG4gICAgaWYgKHRoaXMuX3Nwcml0ZSkge1xuICAgICAgdGhpcy5fc3ByaXRlLnRleHR1cmUgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RleHR1cmUpIHtcbiAgICAgIHRoaXMuX3RleHR1cmUuZGVzdHJveSgpXG4gICAgICB0aGlzLl90ZXh0dXJlID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jYW52YXMpIHtcbiAgICAgIHRoaXMuX2NhbnZhcy5yZW1vdmUoKVxuICAgIH1cblxuICAgIHRoaXMuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgdGhpcy5fY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLl9jYW52YXMud2lkdGggPSB0aGlzLl93aWR0aFxuICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLl9oZWlnaHRcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2NhbnZhcylcblxuICAgIHRoaXMuX3RleHR1cmUgPSBQSVhJLlRleHR1cmUuZnJvbUNhbnZhcyh0aGlzLl9jYW52YXMsIFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVClcblxuICAgIGlmICghdGhpcy5fc3ByaXRlKSB7XG4gICAgICB0aGlzLl9zcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5fdGV4dHVyZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9zcHJpdGUudGV4dHVyZSA9IHRoaXMuX3RleHR1cmVcbiAgICB9XG5cbiAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJywgeyBhbHBoYTogdHJ1ZSwgYW50aWFsaWFzOiBmYWxzZSB9KVxuICAgIHRoaXMuX2NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpXG5cbiAgICB0aGlzLl9pbWFnZURhdGEgPSB0aGlzLl9jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxuXG4gICAgdGhpcy5waXhlbHMgPSBuZXcgVWludDMyQXJyYXkodGhpcy5faW1hZ2VEYXRhLmRhdGEuYnVmZmVyKVxuXG4gICAgdGhpcy5jZW50ZXIoKVxuXG4gICAgdGhpcy5jbGVhcigpXG5cbiAgICB0aGlzLnRlc3QoKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlZnJlc2ggKGZsaXAgPSBmYWxzZSkge1xuICAgIHRoaXMuZm9yY2VfdXBkYXRlID0gdHJ1ZVxuICAgIGlmICghdGhpcy5fZm9yY2VfZmxpcCkge1xuICAgICAgdGhpcy5mb3JjZV9mbGlwID0gZmxpcFxuICAgIH1cbiAgICB0aGlzLmVtaXQoJ3JlZnJlc2gnLCB7IGZsaXAgfSlcbiAgfVxuXG4gIGNsZWFyICgpIHtcbiAgICB0aGlzLl9kYXRhLmZpbGwoMSlcbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoKHRydWUpXG4gIH1cblxuICBmbGlwICgpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuX2RhdGFcbiAgICBsZXQgcGl4ZWxzID0gdGhpcy5waXhlbHNcbiAgICBsZXQgcGFsID0gdGhpcy5fcGFsZXR0ZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKSB7XG4gICAgICBwaXhlbHNbaV0gPSBwYWwuZGF0YVtkYXRhW2ldXVxuICAgIH1cbiAgICB0aGlzLl9jb250ZXh0LnB1dEltYWdlRGF0YSh0aGlzLl9pbWFnZURhdGEsIDAsIDApXG4gICAgdGhpcy5mb3JjZV9mbGlwID0gZmFsc2VcbiAgICB0aGlzLmVtaXQoJ2ZsaXAnKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwaXhlbCAoaSwgYykge1xuICAgIGxldCBkYXRhID0gdGhpcy5fZGF0YVxuICAgIGlmIChjICE9PSB1bmRlZmluZWQgJiYgZGF0YVtpXSAhPT0gYykge1xuICAgICAgZGF0YVtpXSA9IE1hdGgubWF4KDAsIE1hdGgubWluKGMsIHRoaXMuX3BhbGV0dGUuY291bnQgLSAxKSlcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFbaV1cbiAgfVxuXG4gIHRvSW5kZXggKHgsIHkpIHsgcmV0dXJuIHkgKiB0aGlzLl93aWR0aCArIHggfVxuXG4gIGZyb21JbmRleCAoaSkge1xuICAgIGxldCB5ID0gTWF0aC5taW4oTWF0aC50cnVuYyhpIC8gdGhpcy5fd2lkdGgpLCB0aGlzLl9oZWlnaHQgLSAxKVxuICAgIGxldCB4ID0gaSAtIHlcbiAgICByZXR1cm4geyB4LCB5IH1cbiAgfVxuXG4gIGxvYWRUZXh0dXJlIChmaWxlbmFtZSkge1xuICAgIGxldCB0ZXggPSBQSVhJLlRleHR1cmUuZnJvbUltYWdlKCcuL2J1aWxkLycgKyByZXF1aXJlKCdmaWxlP25hbWU9YXNzZXRzL1tuYW1lXS5bZXh0XSEuLi9hc3NldHMvJyArIGZpbGVuYW1lKSwgdW5kZWZpbmVkLCBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1QpXG4gICAgdGV4Lm9uKCd1cGRhdGUnLCAoKSA9PiB0aGlzLnJlZnJlc2goKSlcbiAgICByZXR1cm4gdGV4XG4gIH1cblxuICB0ZXN0ICgpIHtcbiAgICB0aGlzLl9zdGFnZS5yZW1vdmVDaGlsZHJlbigpXG5cbiAgICBsZXQgdCA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLmxvYWRUZXh0dXJlKCdpbWdzL3Rlc3QucG5nJykpXG4gICAgdGhpcy5fc3RhZ2UuYWRkQ2hpbGQodClcblxuICAgIGxldCB0ZXh0ID0gbmV3IFBJWEkuVGV4dCgnVGhpcyBpcyBhIHBpeGkgdGV4dCcsIHsgZm9udDogJzIwcHggXCJHbGFzcyBUVFkgVlQyMjBcIicsIGZpbGw6IDB4RkZGRkZGIH0pXG4gICAgdGV4dC50ZXh0dXJlLmJhc2VUZXh0dXJlLnNjYWxlTW9kZSA9IFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVFxuICAgIHRleHQuY29udGV4dC5jYW52YXMuc3R5bGVbJ2ZvbnQtc21vb3RoaW5nJ10gPSAnbmV2ZXInXG4gICAgdGV4dC5jb250ZXh0LmNhbnZhcy5zdHlsZVsnLXdlYmtpdC1mb250LXNtb290aGluZyddID0gJ25vbmUnXG4gICAgdGV4dC5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlXG4gICAgdGV4dC5jb250ZXh0LmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2hpZGRlbidcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHQuY29udGV4dC5jYW52YXMpXG4gICAgdGV4dC51cGRhdGVUZXh0KClcbiAgICB0aGlzLl9zdGFnZS5hZGRDaGlsZCh0ZXh0KVxuICAgIHRoaXMucmVmcmVzaCgpXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0LmNvbnRleHQuY2FudmFzKVxuICB9XG5cbiAgb25TY3JvbGwgKGUpIHtcbiAgICBsZXQgdCA9IHRoaXMuY3VycmVudE92ZXJcbiAgICBpZiAodCAmJiB0LnNjcm9sbGFibGUpIHtcbiAgICAgIGxldCByZXMgPSAtMTIwXG4gICAgICBsZXQgZGVsdGFYID0gMFxuICAgICAgbGV0IGRlbHRhWSA9IDBcblxuICAgICAgaWYgKHQuc2Nyb2xsYWJsZS54KSB7XG4gICAgICAgIGRlbHRhWCA9IGUud2hlZWxEZWx0YVggKiByZXNcbiAgICAgICAgaWYgKGRlbHRhWCA8PSByZXMpIHtcbiAgICAgICAgICBkZWx0YVggPSAtMVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlbHRhWCA+IHJlcykge1xuICAgICAgICAgIGRlbHRhWCA9IDFcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodC5zY3JvbGxhYmxlLnkpIHtcbiAgICAgICAgZGVsdGFZID0gZS53aGVlbERlbHRhWSAqIHJlc1xuICAgICAgICBpZiAoZGVsdGFZIDw9IHJlcykge1xuICAgICAgICAgIGRlbHRhWSA9IC0xXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVsdGFZID4gcmVzKSB7XG4gICAgICAgICAgZGVsdGFZID0gMVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghZS5kZXRhaWwpIHtcbiAgICAgICAgZS5kZXRhaWwgPSB7fVxuICAgICAgfVxuICAgICAgZS5kZXRhaWwuc2Nyb2xsID0gbmV3IFBJWEkuUG9pbnQoZGVsdGFYLCBkZWx0YVkpXG4gICAgICB0Lm9uU2Nyb2xsKGUpXG4gICAgfVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmVlbi5qcyIsImltcG9ydCB7IEVtaXR0ZXIgfSBmcm9tICcuL2VtaXR0ZXIuanMnXG5pbXBvcnQgeyBfLCBtYXBfZ2V0dGVycyB9IGZyb20gJy4vdXRpbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbGV0dGUgZXh0ZW5kcyBFbWl0dGVyIHtcblxuICBjb25zdHJ1Y3RvciAoZ2FtZSwgY291bnQgPSAzMikge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuZ2FtZSA9IGdhbWVcblxuICAgIHRoaXMuY291bnQgPSBjb3VudFxuXG4gICAgdGhpcy5kYXRhID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuY291bnQpXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLmRhdGFbMF0gPSAweDAwMDAwMFxuICAgIHRoaXMuZGF0YVsxXSA9IDB4ODAwMDAwXG4gICAgdGhpcy5kYXRhWzJdID0gMHgwMDgwMDBcbiAgICB0aGlzLmRhdGFbM10gPSAweDgwODAwMFxuICAgIHRoaXMuZGF0YVs0XSA9IDB4MDAwMDgwXG4gICAgdGhpcy5kYXRhWzVdID0gMHg4MDAwODBcbiAgICB0aGlzLmRhdGFbNl0gPSAweDAwODA4MFxuICAgIHRoaXMuZGF0YVs3XSA9IDB4YzBjMGMwXG4gICAgdGhpcy5kYXRhWzhdID0gMHg4MDgwODBcbiAgICB0aGlzLmRhdGFbOV0gPSAweGZmMDAwMFxuICAgIHRoaXMuZGF0YVsxMF0gPSAweDAwZmYwMFxuICAgIHRoaXMuZGF0YVsxMV0gPSAweGZmZmYwMFxuICAgIHRoaXMuZGF0YVsxMl0gPSAweDAwMDBmZlxuICAgIHRoaXMuZGF0YVsxM10gPSAweGZmMDBmZlxuICAgIHRoaXMuZGF0YVsxNF0gPSAweDAwZmZmZlxuICAgIHRoaXMuZGF0YVsxNV0gPSAweGZmZmZmZlxuXG4gICAgdGhpcy5kYXRhWzE2XSA9IDB4MDAwMDAwXG4gICAgdGhpcy5kYXRhWzIyXSA9IDB4MDA1ZjAwXG4gICAgdGhpcy5kYXRhWzI4XSA9IDB4MDA4NzAwXG4gICAgdGhpcy5kYXRhWzM0XSA9IDB4MDBhZjAwXG4gICAgdGhpcy5kYXRhWzQwXSA9IDB4MDBkNzAwXG4gICAgdGhpcy5kYXRhWzQ2XSA9IDB4MDBmZjAwXG4gICAgdGhpcy5kYXRhWzUyXSA9IDB4NWYwMDAwXG4gICAgdGhpcy5kYXRhWzU4XSA9IDB4NWY1ZjAwXG4gICAgdGhpcy5kYXRhWzY0XSA9IDB4NWY4NzAwXG4gICAgdGhpcy5kYXRhWzcwXSA9IDB4NWZhZjAwXG4gICAgdGhpcy5kYXRhWzc2XSA9IDB4NWZkNzAwXG4gICAgdGhpcy5kYXRhWzgyXSA9IDB4NWZmZjAwXG4gICAgdGhpcy5kYXRhWzg4XSA9IDB4ODcwMDAwXG4gICAgdGhpcy5kYXRhWzk0XSA9IDB4ODc1ZjAwXG4gICAgdGhpcy5kYXRhWzEwMF0gPSAweDg3ODcwMFxuICAgIHRoaXMuZGF0YVsxMDZdID0gMHg4N2FmMDBcbiAgICB0aGlzLmRhdGFbMTEyXSA9IDB4ODdkNzAwXG4gICAgdGhpcy5kYXRhWzExOF0gPSAweDg3ZmYwMFxuICAgIHRoaXMuZGF0YVsxMjRdID0gMHhhZjAwMDBcbiAgICB0aGlzLmRhdGFbMTMwXSA9IDB4YWY1ZjAwXG4gICAgdGhpcy5kYXRhWzEzNl0gPSAweGFmODcwMFxuICAgIHRoaXMuZGF0YVsxNDJdID0gMHhhZmFmMDBcbiAgICB0aGlzLmRhdGFbMTQ4XSA9IDB4YWZkNzAwXG4gICAgdGhpcy5kYXRhWzE1NF0gPSAweGFmZmYwMFxuICAgIHRoaXMuZGF0YVsxNjBdID0gMHhkNzAwMDBcbiAgICB0aGlzLmRhdGFbMTY2XSA9IDB4ZDc1ZjAwXG4gICAgdGhpcy5kYXRhWzE3Ml0gPSAweGQ3ODcwMFxuICAgIHRoaXMuZGF0YVsxNzhdID0gMHhkN2FmMDBcbiAgICB0aGlzLmRhdGFbMTg0XSA9IDB4ZDdkNzAwXG4gICAgdGhpcy5kYXRhWzE5MF0gPSAweGQ3ZmYwMFxuICAgIHRoaXMuZGF0YVsxOTZdID0gMHhmZjAwMDBcbiAgICB0aGlzLmRhdGFbMjAyXSA9IDB4ZmY1ZjAwXG4gICAgdGhpcy5kYXRhWzIwOF0gPSAweGZmODcwMFxuICAgIHRoaXMuZGF0YVsyMTRdID0gMHhmZmFmMDBcbiAgICB0aGlzLmRhdGFbMjIwXSA9IDB4ZmZkNzAwXG4gICAgdGhpcy5kYXRhWzIyNl0gPSAweGZmZmYwMFxuICAgIHRoaXMuZGF0YVsyMzJdID0gMHgwODA4MDhcbiAgICB0aGlzLmRhdGFbMjM4XSA9IDB4NDQ0NDQ0XG4gICAgdGhpcy5kYXRhWzI0NF0gPSAweDgwODA4MFxuICAgIHRoaXMuZGF0YVsyNTBdID0gMHhiY2JjYmNcbiAgICB0aGlzLmRhdGFbMTddID0gMHgwMDAwNWZcbiAgICB0aGlzLmRhdGFbMjNdID0gMHgwMDVmNWZcbiAgICB0aGlzLmRhdGFbMjldID0gMHgwMDg3NWZcbiAgICB0aGlzLmRhdGFbMzVdID0gMHgwMGFmNWZcbiAgICB0aGlzLmRhdGFbNDFdID0gMHgwMGQ3NWZcbiAgICB0aGlzLmRhdGFbNDddID0gMHgwMGZmNWZcbiAgICB0aGlzLmRhdGFbNTNdID0gMHg1ZjAwNWZcbiAgICB0aGlzLmRhdGFbNTldID0gMHg1ZjVmNWZcbiAgICB0aGlzLmRhdGFbNjVdID0gMHg1Zjg3NWZcbiAgICB0aGlzLmRhdGFbNzFdID0gMHg1ZmFmNWZcbiAgICB0aGlzLmRhdGFbNzddID0gMHg1ZmQ3NWZcbiAgICB0aGlzLmRhdGFbODNdID0gMHg1ZmZmNWZcbiAgICB0aGlzLmRhdGFbODldID0gMHg4NzAwNWZcbiAgICB0aGlzLmRhdGFbOTVdID0gMHg4NzVmNWZcbiAgICB0aGlzLmRhdGFbMTAxXSA9IDB4ODc4NzVmXG4gICAgdGhpcy5kYXRhWzEwN10gPSAweDg3YWY1ZlxuICAgIHRoaXMuZGF0YVsxMTNdID0gMHg4N2Q3NWZcbiAgICB0aGlzLmRhdGFbMTE5XSA9IDB4ODdmZjVmXG4gICAgdGhpcy5kYXRhWzEyNV0gPSAweGFmMDA1ZlxuICAgIHRoaXMuZGF0YVsxMzFdID0gMHhhZjVmNWZcbiAgICB0aGlzLmRhdGFbMTM3XSA9IDB4YWY4NzVmXG4gICAgdGhpcy5kYXRhWzE0M10gPSAweGFmYWY1ZlxuICAgIHRoaXMuZGF0YVsxNDldID0gMHhhZmQ3NWZcbiAgICB0aGlzLmRhdGFbMTU1XSA9IDB4YWZmZjVmXG4gICAgdGhpcy5kYXRhWzE2MV0gPSAweGQ3MDA1ZlxuICAgIHRoaXMuZGF0YVsxNjddID0gMHhkNzVmNWZcbiAgICB0aGlzLmRhdGFbMTczXSA9IDB4ZDc4NzVmXG4gICAgdGhpcy5kYXRhWzE3OV0gPSAweGQ3YWY1ZlxuICAgIHRoaXMuZGF0YVsxODVdID0gMHhkN2Q3NWZcbiAgICB0aGlzLmRhdGFbMTkxXSA9IDB4ZDdmZjVmXG4gICAgdGhpcy5kYXRhWzE5N10gPSAweGZmMDA1ZlxuICAgIHRoaXMuZGF0YVsyMDNdID0gMHhmZjVmNWZcbiAgICB0aGlzLmRhdGFbMjA5XSA9IDB4ZmY4NzVmXG4gICAgdGhpcy5kYXRhWzIxNV0gPSAweGZmYWY1ZlxuICAgIHRoaXMuZGF0YVsyMjFdID0gMHhmZmQ3NWZcbiAgICB0aGlzLmRhdGFbMjI3XSA9IDB4ZmZmZjVmXG4gICAgdGhpcy5kYXRhWzIzM10gPSAweDEyMTIxMlxuICAgIHRoaXMuZGF0YVsyMzldID0gMHg0ZTRlNGVcbiAgICB0aGlzLmRhdGFbMjQ1XSA9IDB4OGE4YThhXG4gICAgdGhpcy5kYXRhWzI1MV0gPSAweGM2YzZjNlxuICAgIHRoaXMuZGF0YVsxOF0gPSAweDAwMDA4N1xuICAgIHRoaXMuZGF0YVsyNF0gPSAweDAwNWY4N1xuICAgIHRoaXMuZGF0YVszMF0gPSAweDAwODc4N1xuICAgIHRoaXMuZGF0YVszNl0gPSAweDAwYWY4N1xuICAgIHRoaXMuZGF0YVs0Ml0gPSAweDAwZDc4N1xuICAgIHRoaXMuZGF0YVs0OF0gPSAweDAwZmY4N1xuICAgIHRoaXMuZGF0YVs1NF0gPSAweDVmMDA4N1xuICAgIHRoaXMuZGF0YVs2MF0gPSAweDVmNWY4N1xuICAgIHRoaXMuZGF0YVs2Nl0gPSAweDVmODc4N1xuICAgIHRoaXMuZGF0YVs3Ml0gPSAweDVmYWY4N1xuICAgIHRoaXMuZGF0YVs3OF0gPSAweDVmZDc4N1xuICAgIHRoaXMuZGF0YVs4NF0gPSAweDVmZmY4N1xuICAgIHRoaXMuZGF0YVs5MF0gPSAweDg3MDA4N1xuICAgIHRoaXMuZGF0YVs5Nl0gPSAweDg3NWY4N1xuICAgIHRoaXMuZGF0YVsxMDJdID0gMHg4Nzg3ODdcbiAgICB0aGlzLmRhdGFbMTA4XSA9IDB4ODdhZjg3XG4gICAgdGhpcy5kYXRhWzExNF0gPSAweDg3ZDc4N1xuICAgIHRoaXMuZGF0YVsxMjBdID0gMHg4N2ZmODdcbiAgICB0aGlzLmRhdGFbMTI2XSA9IDB4YWYwMDg3XG4gICAgdGhpcy5kYXRhWzEzMl0gPSAweGFmNWY4N1xuICAgIHRoaXMuZGF0YVsxMzhdID0gMHhhZjg3ODdcbiAgICB0aGlzLmRhdGFbMTQ0XSA9IDB4YWZhZjg3XG4gICAgdGhpcy5kYXRhWzE1MF0gPSAweGFmZDc4N1xuICAgIHRoaXMuZGF0YVsxNTZdID0gMHhhZmZmODdcbiAgICB0aGlzLmRhdGFbMTYyXSA9IDB4ZDcwMDg3XG4gICAgdGhpcy5kYXRhWzE2OF0gPSAweGQ3NWY4N1xuICAgIHRoaXMuZGF0YVsxNzRdID0gMHhkNzg3ODdcbiAgICB0aGlzLmRhdGFbMTgwXSA9IDB4ZDdhZjg3XG4gICAgdGhpcy5kYXRhWzE4Nl0gPSAweGQ3ZDc4N1xuICAgIHRoaXMuZGF0YVsxOTJdID0gMHhkN2ZmODdcbiAgICB0aGlzLmRhdGFbMTk4XSA9IDB4ZmYwMDg3XG4gICAgdGhpcy5kYXRhWzIwNF0gPSAweGZmNWY4N1xuICAgIHRoaXMuZGF0YVsyMTBdID0gMHhmZjg3ODdcbiAgICB0aGlzLmRhdGFbMjE2XSA9IDB4ZmZhZjg3XG4gICAgdGhpcy5kYXRhWzIyMl0gPSAweGZmZDc4N1xuICAgIHRoaXMuZGF0YVsyMjhdID0gMHhmZmZmODdcbiAgICB0aGlzLmRhdGFbMjM0XSA9IDB4MWMxYzFjXG4gICAgdGhpcy5kYXRhWzI0MF0gPSAweDU4NTg1OFxuICAgIHRoaXMuZGF0YVsyNDZdID0gMHg5NDk0OTRcbiAgICB0aGlzLmRhdGFbMjUyXSA9IDB4ZDBkMGQwXG4gICAgdGhpcy5kYXRhWzE5XSA9IDB4MDAwMGFmXG4gICAgdGhpcy5kYXRhWzI1XSA9IDB4MDA1ZmFmXG4gICAgdGhpcy5kYXRhWzMxXSA9IDB4MDA4N2FmXG4gICAgdGhpcy5kYXRhWzM3XSA9IDB4MDBhZmFmXG4gICAgdGhpcy5kYXRhWzQzXSA9IDB4MDBkN2FmXG4gICAgdGhpcy5kYXRhWzQ5XSA9IDB4MDBmZmFmXG4gICAgdGhpcy5kYXRhWzU1XSA9IDB4NWYwMGFmXG4gICAgdGhpcy5kYXRhWzYxXSA9IDB4NWY1ZmFmXG4gICAgdGhpcy5kYXRhWzY3XSA9IDB4NWY4N2FmXG4gICAgdGhpcy5kYXRhWzczXSA9IDB4NWZhZmFmXG4gICAgdGhpcy5kYXRhWzc5XSA9IDB4NWZkN2FmXG4gICAgdGhpcy5kYXRhWzg1XSA9IDB4NWZmZmFmXG4gICAgdGhpcy5kYXRhWzkxXSA9IDB4ODcwMGFmXG4gICAgdGhpcy5kYXRhWzk3XSA9IDB4ODc1ZmFmXG4gICAgdGhpcy5kYXRhWzEwM10gPSAweDg3ODdhZlxuICAgIHRoaXMuZGF0YVsxMDldID0gMHg4N2FmYWZcbiAgICB0aGlzLmRhdGFbMTE1XSA9IDB4ODdkN2FmXG4gICAgdGhpcy5kYXRhWzEyMV0gPSAweDg3ZmZhZlxuICAgIHRoaXMuZGF0YVsxMjddID0gMHhhZjAwYWZcbiAgICB0aGlzLmRhdGFbMTMzXSA9IDB4YWY1ZmFmXG4gICAgdGhpcy5kYXRhWzEzOV0gPSAweGFmODdhZlxuICAgIHRoaXMuZGF0YVsxNDVdID0gMHhhZmFmYWZcbiAgICB0aGlzLmRhdGFbMTUxXSA9IDB4YWZkN2FmXG4gICAgdGhpcy5kYXRhWzE1N10gPSAweGFmZmZhZlxuICAgIHRoaXMuZGF0YVsxNjNdID0gMHhkNzAwYWZcbiAgICB0aGlzLmRhdGFbMTY5XSA9IDB4ZDc1ZmFmXG4gICAgdGhpcy5kYXRhWzE3NV0gPSAweGQ3ODdhZlxuICAgIHRoaXMuZGF0YVsxODFdID0gMHhkN2FmYWZcbiAgICB0aGlzLmRhdGFbMTg3XSA9IDB4ZDdkN2FmXG4gICAgdGhpcy5kYXRhWzE5M10gPSAweGQ3ZmZhZlxuICAgIHRoaXMuZGF0YVsxOTldID0gMHhmZjAwYWZcbiAgICB0aGlzLmRhdGFbMjA1XSA9IDB4ZmY1ZmFmXG4gICAgdGhpcy5kYXRhWzIxMV0gPSAweGZmODdhZlxuICAgIHRoaXMuZGF0YVsyMTddID0gMHhmZmFmYWZcbiAgICB0aGlzLmRhdGFbMjIzXSA9IDB4ZmZkN2FmXG4gICAgdGhpcy5kYXRhWzIyOV0gPSAweGZmZmZhZlxuICAgIHRoaXMuZGF0YVsyMzVdID0gMHgyNjI2MjZcbiAgICB0aGlzLmRhdGFbMjQxXSA9IDB4NjA2MDYwXG4gICAgdGhpcy5kYXRhWzI0N10gPSAweDllOWU5ZVxuICAgIHRoaXMuZGF0YVsyNTNdID0gMHhkYWRhZGFcbiAgICB0aGlzLmRhdGFbMjBdID0gMHgwMDAwZDdcbiAgICB0aGlzLmRhdGFbMjZdID0gMHgwMDVmZDdcbiAgICB0aGlzLmRhdGFbMzJdID0gMHgwMDg3ZDdcbiAgICB0aGlzLmRhdGFbMzhdID0gMHgwMGFmZDdcbiAgICB0aGlzLmRhdGFbNDRdID0gMHgwMGQ3ZDdcbiAgICB0aGlzLmRhdGFbNTBdID0gMHgwMGZmZDdcbiAgICB0aGlzLmRhdGFbNTZdID0gMHg1ZjAwZDdcbiAgICB0aGlzLmRhdGFbNjJdID0gMHg1ZjVmZDdcbiAgICB0aGlzLmRhdGFbNjhdID0gMHg1Zjg3ZDdcbiAgICB0aGlzLmRhdGFbNzRdID0gMHg1ZmFmZDdcbiAgICB0aGlzLmRhdGFbODBdID0gMHg1ZmQ3ZDdcbiAgICB0aGlzLmRhdGFbODZdID0gMHg1ZmZmZDdcbiAgICB0aGlzLmRhdGFbOTJdID0gMHg4NzAwZDdcbiAgICB0aGlzLmRhdGFbOThdID0gMHg4NzVmZDdcbiAgICB0aGlzLmRhdGFbMTA0XSA9IDB4ODc4N2Q3XG4gICAgdGhpcy5kYXRhWzExMF0gPSAweDg3YWZkN1xuICAgIHRoaXMuZGF0YVsxMTZdID0gMHg4N2Q3ZDdcbiAgICB0aGlzLmRhdGFbMTIyXSA9IDB4ODdmZmQ3XG4gICAgdGhpcy5kYXRhWzEyOF0gPSAweGFmMDBkN1xuICAgIHRoaXMuZGF0YVsxMzRdID0gMHhhZjVmZDdcbiAgICB0aGlzLmRhdGFbMTQwXSA9IDB4YWY4N2Q3XG4gICAgdGhpcy5kYXRhWzE0Nl0gPSAweGFmYWZkN1xuICAgIHRoaXMuZGF0YVsxNTJdID0gMHhhZmQ3ZDdcbiAgICB0aGlzLmRhdGFbMTU4XSA9IDB4YWZmZmQ3XG4gICAgdGhpcy5kYXRhWzE2NF0gPSAweGQ3MDBkN1xuICAgIHRoaXMuZGF0YVsxNzBdID0gMHhkNzVmZDdcbiAgICB0aGlzLmRhdGFbMTc2XSA9IDB4ZDc4N2Q3XG4gICAgdGhpcy5kYXRhWzE4Ml0gPSAweGQ3YWZkN1xuICAgIHRoaXMuZGF0YVsxODhdID0gMHhkN2Q3ZDdcbiAgICB0aGlzLmRhdGFbMTk0XSA9IDB4ZDdmZmQ3XG4gICAgdGhpcy5kYXRhWzIwMF0gPSAweGZmMDBkN1xuICAgIHRoaXMuZGF0YVsyMDZdID0gMHhmZjVmZDdcbiAgICB0aGlzLmRhdGFbMjEyXSA9IDB4ZmY4N2Q3XG4gICAgdGhpcy5kYXRhWzIxOF0gPSAweGZmYWZkN1xuICAgIHRoaXMuZGF0YVsyMjRdID0gMHhmZmQ3ZDdcbiAgICB0aGlzLmRhdGFbMjMwXSA9IDB4ZmZmZmQ3XG4gICAgdGhpcy5kYXRhWzIzNl0gPSAweDMwMzAzMFxuICAgIHRoaXMuZGF0YVsyNDJdID0gMHg2NjY2NjZcbiAgICB0aGlzLmRhdGFbMjQ4XSA9IDB4YThhOGE4XG4gICAgdGhpcy5kYXRhWzI1NF0gPSAweGU0ZTRlNFxuICAgIHRoaXMuZGF0YVsyMV0gPSAweDAwMDBmZlxuICAgIHRoaXMuZGF0YVsyN10gPSAweDAwNWZmZlxuICAgIHRoaXMuZGF0YVszM10gPSAweDAwODdmZlxuICAgIHRoaXMuZGF0YVszOV0gPSAweDAwYWZmZlxuICAgIHRoaXMuZGF0YVs0NV0gPSAweDAwZDdmZlxuICAgIHRoaXMuZGF0YVs1MV0gPSAweDAwZmZmZlxuICAgIHRoaXMuZGF0YVs1N10gPSAweDVmMDBmZlxuICAgIHRoaXMuZGF0YVs2M10gPSAweDVmNWZmZlxuICAgIHRoaXMuZGF0YVs2OV0gPSAweDVmODdmZlxuICAgIHRoaXMuZGF0YVs3NV0gPSAweDVmYWZmZlxuICAgIHRoaXMuZGF0YVs4MV0gPSAweDVmZDdmZlxuICAgIHRoaXMuZGF0YVs4N10gPSAweDVmZmZmZlxuICAgIHRoaXMuZGF0YVs5M10gPSAweDg3MDBmZlxuICAgIHRoaXMuZGF0YVs5OV0gPSAweDg3NWZmZlxuICAgIHRoaXMuZGF0YVsxMDVdID0gMHg4Nzg3ZmZcbiAgICB0aGlzLmRhdGFbMTExXSA9IDB4ODdhZmZmXG4gICAgdGhpcy5kYXRhWzExN10gPSAweDg3ZDdmZlxuICAgIHRoaXMuZGF0YVsxMjNdID0gMHg4N2ZmZmZcbiAgICB0aGlzLmRhdGFbMTI5XSA9IDB4YWYwMGZmXG4gICAgdGhpcy5kYXRhWzEzNV0gPSAweGFmNWZmZlxuICAgIHRoaXMuZGF0YVsxNDFdID0gMHhhZjg3ZmZcbiAgICB0aGlzLmRhdGFbMTQ3XSA9IDB4YWZhZmZmXG4gICAgdGhpcy5kYXRhWzE1M10gPSAweGFmZDdmZlxuICAgIHRoaXMuZGF0YVsxNTldID0gMHhhZmZmZmZcbiAgICB0aGlzLmRhdGFbMTY1XSA9IDB4ZDcwMGZmXG4gICAgdGhpcy5kYXRhWzE3MV0gPSAweGQ3NWZmZlxuICAgIHRoaXMuZGF0YVsxNzddID0gMHhkNzg3ZmZcbiAgICB0aGlzLmRhdGFbMTgzXSA9IDB4ZDdhZmZmXG4gICAgdGhpcy5kYXRhWzE4OV0gPSAweGQ3ZDdmZlxuICAgIHRoaXMuZGF0YVsxOTVdID0gMHhkN2ZmZmZcbiAgICB0aGlzLmRhdGFbMjAxXSA9IDB4ZmYwMGZmXG4gICAgdGhpcy5kYXRhWzIwN10gPSAweGZmNWZmZlxuICAgIHRoaXMuZGF0YVsyMTNdID0gMHhmZjg3ZmZcbiAgICB0aGlzLmRhdGFbMjE5XSA9IDB4ZmZhZmZmXG4gICAgdGhpcy5kYXRhWzIyNV0gPSAweGZmZDdmZlxuICAgIHRoaXMuZGF0YVsyMzFdID0gMHhmZmZmZmZcbiAgICB0aGlzLmRhdGFbMjM3XSA9IDB4M2EzYTNhXG4gICAgdGhpcy5kYXRhWzI0M10gPSAweDc2NzY3NlxuICAgIHRoaXMuZGF0YVsyNDldID0gMHhiMmIyYjJcbiAgICB0aGlzLmRhdGFbMjU1XSA9IDB4ZWVlZWVlXG5cbiAgICB0aGlzLm5hbWVzID0ge1xuICAgICAgYmxhY2s6IDAsXG4gICAgICBka3JlZDogMSxcbiAgICAgIGRrZ3JlZW46IDIsXG4gICAgICBka3llbGxvdzogMyxcbiAgICAgIGRrYmx1ZTogNCxcbiAgICAgIGRrZnVjaHNpYTogNSxcbiAgICAgIHRlYWw6IDYsXG4gICAgICBncmV5OiA3LFxuICAgICAgZGtncmV5OiA4LFxuICAgICAgcmVkOiA5LFxuICAgICAgbGltZTogMTAsXG4gICAgICB5ZWxsb3c6IDExLFxuICAgICAgYmx1ZTogMTIsXG4gICAgICBmdWNoc2lhOiAxMyxcbiAgICAgIGN5YW46IDE0LFxuICAgICAgd2hpdGU6IDE1LFxuICAgIH1cblxuICAgIG1hcF9nZXR0ZXJzKHRoaXMsIHRoaXMsIF8ubWFwVmFsdWVzKHRoaXMubmFtZXMsIHYgPT4gKCkgPT4gdikpXG4gIH1cblxuICBmcm9tX3JnYiAoYykgeyByZXR1cm4gXy5maW5kKHRoaXMuZGF0YSwgYykgfVxuICB0b19yZ2IgKGMpIHsgcmV0dXJuIHRoaXMuZGF0YVtjXSB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9wYWxldHRlLmpzIiwidmFyIG1hcCA9IHtcblx0XCIuL2ltZ3MvY3J0LnBuZ1wiOiAyMSxcblx0XCIuL2ltZ3MvdGVzdC5wbmdcIjogMjJcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMjA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cyAuL34vZmlsZS1sb2FkZXI/bmFtZT1hc3NldHMvW25hbWVdLltleHRdIV5cXC5cXC8uKiRcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9jcnQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZpbGUtbG9hZGVyP25hbWU9YXNzZXRzL1tuYW1lXS5bZXh0XSEuL2Fzc2V0cy9pbWdzL2NydC5wbmdcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy90ZXN0LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9maWxlLWxvYWRlcj9uYW1lPWFzc2V0cy9bbmFtZV0uW2V4dF0hLi9hc3NldHMvaW1ncy90ZXN0LnBuZ1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRW1pdHRlciB9IGZyb20gJy4vZW1pdHRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBFbWl0dGVyIHtcblxuICBjb25zdHJ1Y3RvciAobWFpbikge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuX21haW4gPSBtYWluXG5cbiAgICB0aGlzLnJlc2V0KClcblxuICAgIHRoaXMuX29uS2V5ZG93biA9IHRoaXMub25LZXlkb3duLmJpbmQodGhpcylcbiAgICB0aGlzLl9vbktleXVwID0gdGhpcy5vbktleXVwLmJpbmQodGhpcylcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5dXApXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fbW9kcyA9IDBcbiAgICB0aGlzLl9qb3lzdGljayA9IDBcbiAgICB0aGlzLl9rZXlzID0ge31cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5dXApXG4gIH1cblxuICB0aWNrIChkZWx0YSkge1xuICB9XG5cbiAgZ2V0IG1vZHMgKCkgeyByZXR1cm4gdGhpcy5fbW9kcyB9XG4gIGdldCBqb3lzdGljayAoKSB7IHJldHVybiB0aGlzLl9qb3lzdGljayB9XG4gIGdldCBrZXlzICgpIHsgcmV0dXJuIHRoaXMuX2tleXMgfVxuXG4gIGdldCBzaGlmdCAoKSB7IHJldHVybiB0aGlzLl9tb2RzICYgMHgwMSB9XG4gIGdldCBjdHJsICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDAyIH1cbiAgZ2V0IGFsdCAoKSB7IHJldHVybiB0aGlzLl9tb2RzICYgMHgwNCB9XG4gIGdldCBtZXRhICgpIHsgcmV0dXJuIHRoaXMuX21vZHMgJiAweDA4IH1cbiAgZ2V0IG51bXBhZCAoKSB7IHJldHVybiB0aGlzLl9tb2RzICYgMHgxMCB9XG4gIGdldCBidG4wICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHgxMCB9XG4gIGdldCBidG4xICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHgyMCB9XG4gIGdldCBidG4yICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHg0MCB9XG4gIGdldCBidG4zICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHg4MCB9XG4gIGdldCBidG40ICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHgxMDAgfVxuICBnZXQgdXAgKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDAxIH1cbiAgZ2V0IGRvd24gKCkgeyByZXR1cm4gdGhpcy5fam95c3RpY2sgJiAweDAyIH1cbiAgZ2V0IHJpZ2h0ICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHgwNCB9XG4gIGdldCBsZWZ0ICgpIHsgcmV0dXJuIHRoaXMuX2pveXN0aWNrICYgMHgwOCB9XG5cbiAgZXZlbnREZXRhaWxzIChlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleTogZS5rZXksXG4gICAgICBrZXlDb2RlOiBlLmtleUNvZGUsXG4gICAgICBrZXlzOiB0aGlzLl9rZXlzLFxuICAgICAgbW9kczogdGhpcy5fbW9kcyxcbiAgICAgIGpveXN0aWNrOiB0aGlzLl9qb3lzdGljayxcbiAgICAgIHNoaWZ0OiB0aGlzLnNoaWZ0LFxuICAgICAgY3RybDogdGhpcy5jdHJsLFxuICAgICAgYWx0OiB0aGlzLmFsdCxcbiAgICAgIG1ldGE6IHRoaXMubWV0YSxcbiAgICAgIG51bXBhZDogdGhpcy5udW1wYWQsXG4gICAgICBidG4wOiB0aGlzLmJ0bjAsXG4gICAgICBidG4xOiB0aGlzLmJ0bjEsXG4gICAgICBidG4yOiB0aGlzLmJ0bjIsXG4gICAgICBidG4zOiB0aGlzLmJ0bjMsXG4gICAgICBidG40OiB0aGlzLmJ0bjQsXG4gICAgICB1cDogdGhpcy51cCxcbiAgICAgIGRvd246IHRoaXMuZG93bixcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgIH1cbiAgfVxuXG4gIG9uS2V5ZG93biAoZSkge1xuICAgIGxldCBudW1wYWQgPSBlLmxvY2F0aW9uID09PSAzXG4gICAgaWYgKG51bXBhZCkge1xuICAgICAgdGhpcy5fbW9kcyB8PSAweDEwXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fbW9kcyAmPSB+MHgxMFxuICAgIH1cbiAgICB0aGlzLl9rZXlzW2Uua2V5Q29kZV0gPSAxXG5cbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICBjYXNlICdTaGlmdCc6XG4gICAgICAgIHRoaXMuX21vZHMgfD0gMHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdDb250cm9sJzpcbiAgICAgICAgdGhpcy5fbW9kcyB8PSAweDAyXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0FsdCc6XG4gICAgICAgIHRoaXMuX21vZHMgfD0gMHgwNFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdNZXRhJzpcbiAgICAgICAgdGhpcy5fbW9kcyB8PSAweDA4XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDAxXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzgnOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwMVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnMic6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayB8PSAweDAyXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwNFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICc0JzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDRcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgwOFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICc2JzogLy8gbnVtcGFkIDZcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MDhcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICd6JzogLy8gYnV0dG9uIDBcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgxMFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICd4JzogLy8gYnV0dG9uIDFcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHgyMFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdjJzogLy8gYnV0dG9uIDJcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHg0MFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICcgJzogLy8gYnV0dG9uIDNcbiAgICAgICAgdGhpcy5fam95c3RpY2sgfD0gMHg4MFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdFbnRlcic6IC8vIGJ1dHRvbiA0XG4gICAgICAgIHRoaXMuX2pveXN0aWNrIHw9IDB4MTAwXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdrZXkuZG93bicsIHRoaXMuZXZlbnREZXRhaWxzKGUpKVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG5cbiAgb25LZXl1cCAoZSkge1xuICAgIGxldCBudW1wYWQgPSBlLmxvY2F0aW9uID09PSAzXG4gICAgaWYgKG51bXBhZCkge1xuICAgICAgdGhpcy5fbW9kcyB8PSAweDEwXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fbW9kcyAmPSB+MHgxMFxuICAgIH1cbiAgICB0aGlzLl9rZXlzW2Uua2V5Q29kZV0gPSAwXG5cbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICBjYXNlICdTaGlmdCc6XG4gICAgICAgIHRoaXMuX21vZHMgJj0gfjB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQ29udHJvbCc6XG4gICAgICAgIHRoaXMuX21vZHMgJj0gfjB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQWx0JzpcbiAgICAgICAgdGhpcy5fbW9kcyAmPSB+MHgwNFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdNZXRhJzpcbiAgICAgICAgdGhpcy5fbW9kcyAmPSB+MHgwOFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDFcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnOCc6XG4gICAgICAgIGlmIChudW1wYWQpIHtcbiAgICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwMVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDAyXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzInOlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDJcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgwNFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICc0JzpcbiAgICAgICAgaWYgKG51bXBhZCkge1xuICAgICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDA0XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDA4XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJzYnOiAvLyBudW1wYWQgNlxuICAgICAgICBpZiAobnVtcGFkKSB7XG4gICAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MDhcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICd6JzogLy8gYnV0dG9uIDBcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4MTBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAneCc6IC8vIGJ1dHRvbiAxXG4gICAgICAgIHRoaXMuX2pveXN0aWNrICY9IH4weDIwXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2MnOiAvLyBidXR0b24gMlxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHg0MFxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICcgJzogLy8gYnV0dG9uIDNcbiAgICAgICAgdGhpcy5fam95c3RpY2sgJj0gfjB4ODBcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnRW50ZXInOiAvLyBidXR0b24gNFxuICAgICAgICB0aGlzLl9qb3lzdGljayAmPSB+MHgxMDBcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ2tleS51cCcsIHRoaXMuZXZlbnREZXRhaWxzKGUpKVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9rZXlib2FyZC5qcyIsImltcG9ydCB7IEVtaXR0ZXIgfSBmcm9tICcuL2VtaXR0ZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlIGV4dGVuZHMgRW1pdHRlciB7XG5cbiAgY29uc3RydWN0b3IgKG1haW4pIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLl9tYWluID0gbWFpblxuXG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICB0aGlzLl9zcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUoKVxuXG4gICAgbGV0IHN0YWdlID0gbWFpbi5zdGFnZVxuICAgIGlmIChzdGFnZSkge1xuICAgICAgc3RhZ2UuaW50ZXJhY3RpdmUgPSB0cnVlXG5cbiAgICAgIHRoaXMuX29uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpXG4gICAgICB0aGlzLl9vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKVxuICAgICAgdGhpcy5fb25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKVxuXG4gICAgICBzdGFnZS5vbignbW91c2Vkb3duJywgdGhpcy5fb25Nb3VzZURvd24pXG4gICAgICBzdGFnZS5vbigncmlnaHRkb3duJywgdGhpcy5fb25Nb3VzZURvd24pXG4gICAgICBzdGFnZS5vbigndG91Y2hzdGFydCcsIHRoaXMuX29uTW91c2VEb3duKVxuXG4gICAgICBzdGFnZS5vbignbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUpXG5cbiAgICAgIHN0YWdlLm9uKCdtb3VzZXVwJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub24oJ3RvdWNoZW5kJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub24oJ21vdXNldXBvdXRzaWRlJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub24oJ3RvdWNoZW5kb3V0c2lkZScsIHRoaXMuX29uTW91c2VVcClcbiAgICB9XG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5feCA9IDBcbiAgICB0aGlzLl95ID0gMFxuICAgIHRoaXMuX2J0bnMgPSAwXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBsZXQgc3RhZ2UgPSB0aGlzLl9tYWluLnN0YWdlXG4gICAgaWYgKHN0YWdlKSB7XG4gICAgICBzdGFnZS5vZmYoJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duKVxuICAgICAgc3RhZ2Uub2ZmKCdyaWdodGRvd24nLCB0aGlzLl9vbk1vdXNlRG93bilcbiAgICAgIHN0YWdlLm9mZigndG91Y2hzdGFydCcsIHRoaXMuX29uTW91c2VEb3duKVxuXG4gICAgICBzdGFnZS5vZmYoJ21vdXNlbW92ZScsIHRoaXMuX29uTW91c2VNb3ZlKVxuXG4gICAgICBzdGFnZS5vZmYoJ21vdXNldXAnLCB0aGlzLl9vbk1vdXNlVXApXG4gICAgICBzdGFnZS5vZmYoJ3RvdWNoZW5kJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgICAgc3RhZ2Uub2ZmKCdtb3VzZXVwb3V0c2lkZScsIHRoaXMuX29uTW91c2VVcClcbiAgICAgIHN0YWdlLm9mZigndG91Y2hlbmRvdXRzaWRlJywgdGhpcy5fb25Nb3VzZVVwKVxuICAgIH1cbiAgfVxuXG4gIHRpY2sgKGRlbHRhKSB7XG4gIH1cblxuICBnZXQgeCAoKSB7IHJldHVybiB0aGlzLl94IH1cbiAgZ2V0IHkgKCkgeyByZXR1cm4gdGhpcy5feSB9XG4gIGdldCBidG5zICgpIHsgcmV0dXJuIHRoaXMuX2J0bnMgfVxuXG4gIHNldCB4ICh2YWx1ZSkge1xuICAgIHRoaXMuX3ggPSB2YWx1ZVxuICB9XG5cbiAgc2V0IHkgKHZhbHVlKSB7XG4gICAgdGhpcy5feSA9IHZhbHVlXG4gIH1cblxuICBzZXQgYnRucyAodmFsdWUpIHtcbiAgICB0aGlzLl9idG5zID0gdmFsdWVcbiAgfVxuXG4gIGdldEV2ZW50SW5mbyAoZSkge1xuICAgIGxldCByZW5kZXJlciA9IHRoaXMuX21haW4ucmVuZGVyZXJcblxuICAgIGxldCBzaXplID0gbmV3IFBJWEkuUG9pbnQocmVuZGVyZXIud2lkdGggLSB0aGlzLl9zcHJpdGUud2lkdGgsIHJlbmRlcmVyLmhlaWdodCAtIHRoaXMuX3Nwcml0ZS5oZWlnaHQpXG5cbiAgICBsZXQgeCA9IE1hdGgudHJ1bmMoTWF0aC5taW4oc2l6ZS54LCBNYXRoLm1heCgwLCBlLmRhdGEuZ2xvYmFsLngpKSAvIHRoaXMuX21haW4uc2NhbGUpXG4gICAgbGV0IHkgPSBNYXRoLnRydW5jKE1hdGgubWluKHNpemUueSwgTWF0aC5tYXgoMCwgZS5kYXRhLmdsb2JhbC55KSkgLyB0aGlzLl9tYWluLnNjYWxlKVxuXG4gICAgcmV0dXJuIHsgeCwgeSwgYnV0dG9uOiBlLmRhdGEub3JpZ2luYWxFdmVudC5idXR0b24gfVxuICB9XG5cbiAgb25Nb3VzZURvd24gKGUpIHtcbiAgICBsZXQgeyB4LCB5LCBidXR0b24gfSA9IHRoaXMuZ2V0RXZlbnRJbmZvKGUpXG5cbiAgICBzd2l0Y2ggKGJ1dHRvbikge1xuICAgICAgY2FzZSAwOiAvLyBsZWZ0XG4gICAgICAgIHRoaXMuX2J0bnMgfD0gMHgwMVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlIDE6IC8vIG1pZGRsZVxuICAgICAgICB0aGlzLl9idG5zIHw9IDB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAyOiAvLyByaWdodFxuICAgICAgICB0aGlzLl9idG5zIHw9IDB4MDRcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ21vdXNlLmRvd24nLCB7IHgsIHksIGJ1dHRvbiB9KVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG5cbiAgb25Nb3VzZVVwIChlKSB7XG4gICAgbGV0IHsgeCwgeSwgYnV0dG9uIH0gPSB0aGlzLmdldEV2ZW50SW5mbyhlKVxuXG4gICAgc3dpdGNoIChidXR0b24pIHtcbiAgICAgIGNhc2UgMDogLy8gbGVmdFxuICAgICAgICB0aGlzLl9idG5zICY9IH4weDAxXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgMTogLy8gbWlkZGxlXG4gICAgICAgIHRoaXMuX2J0bnMgJj0gfjB4MDJcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAyOiAvLyByaWdodFxuICAgICAgICB0aGlzLl9idG5zICY9IH4weDA0XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdtb3VzZS51cCcsIHsgeCwgeSwgYnV0dG9uIH0pXG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH1cblxuICBvbk1vdXNlTW92ZSAoZSkge1xuICAgIGxldCB7IHgsIHksIGJ1dHRvbiB9ID0gdGhpcy5nZXRFdmVudEluZm8oZSlcblxuICAgIHRoaXMuX3ggPSB4XG4gICAgdGhpcy5feSA9IHlcblxuICAgIHRoaXMuZW1pdCgnbW91c2UubW92ZScsIHsgeCwgeSwgYnV0dG9uIH0pXG5cbiAgICB0aGlzLl9tYWluLnJlZnJlc2goKVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvbW91c2UuanMiXSwic291cmNlUm9vdCI6IiJ9