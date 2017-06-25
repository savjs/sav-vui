var app = (function (VueRouter,Vue) {
'use strict';

VueRouter = 'default' in VueRouter ? VueRouter['default'] : VueRouter;
Vue = 'default' in Vue ? Vue['default'] : Vue;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var savUtil_cjs = createCommonjsModule(function (module, exports) {
/*!
 * sav-util v0.0.7
 * (c) 2016 jetiny 86287344@qq.com
 * Release under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function toStringType(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

var isArray = Array.isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

function isString(arg) {
  return typeof arg === 'string';
}

function isFunction(arg) {
  return typeof arg === 'function';
}

function isObject(arg) {
  return toStringType(arg) === 'Object' && arg !== null;
}

function isNumber(arg) {
  return typeof arg === 'number' && !isNaN(arg);
}

function isInteger(arg) {
  return isNumber(arg) && parseInt(arg) === arg;
}

function isUndefined(arg) {
  return arg === undefined;
}

function isNull(arg) {
  return arg === null;
}

function isNan(arg) {
  return typeof arg === 'number' && isNaN(arg);
}

function isRegExp(arg) {
  return toStringType(arg) === 'RegExp';
}

function isDate(arg) {
  return toStringType(arg) === 'Date';
}

function typeValue(arg) {
  if (isNan(arg)) {
    return 'Nan';
  }
  switch (arg) {
    case undefined:
      return 'Undefined';
    case null:
      return 'Null';
    default:
      return toStringType(arg);
  }
}

var isInt = isInteger;
function isUint(arg) {
  return isInteger(arg) && arg >= 0;
}

var types = {
  isBoolean: isBoolean,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isArray: isArray,
  isFunction: isFunction,
  isRegExp: isRegExp,
  isDate: isDate,
  isNull: isNull,
  isUndefined: isUndefined,
  isInt: isInt,
  isUint: isUint
};

function defined(val) {
  return val !== 'undefined';
}

var probe = {
  Map: defined(typeof Map),
  Proxy: defined(typeof Proxy),
  MessageChannel: defined(typeof MessageChannel),
  localStorage: defined(typeof localStorage),
  XMLHttpRequest: defined(typeof XMLHttpRequest),
  MutationObserver: defined(typeof MutationObserver),
  FormData: defined(typeof FormData),
  window: defined(typeof window),
  document: defined(typeof document)
};

/*
 * @Description      URL解析
 * @File             url.js
 * @Auth             jetiny@hfjy.com
 */

// jsuri https://code.google.com/r/jonhwendell-jsuri/
// https://username:password@www.test.com:8080/path/index.html?this=that&some=thing#content
var REKeys = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
var URL_RE = /^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#/]*\.[^?#/.]+(?:[?#]|$)))*\/?)?([^?#/]*))(?:\?([^#]*))?(?:#(.*))?)/;

function parseUrl(str) {
  var _uri = {};
  var _m = URL_RE.exec(str || '');
  var _i = REKeys.length;
  while (_i--) {
    _uri[REKeys[_i]] = _m[_i] || '';
  }
  return _uri;
}

function stringifyUrl(uri) {
  var str = '';
  if (uri) {
    if (uri.host) {
      if (uri.protocol) {
        str += uri.protocol + ':';
      }
      str += '//';
      if (uri.user) {
        str += uri.user + ':';
      }
      if (uri.password) {
        str += uri.password + '@';
      }
      str += uri.host;
      if (uri.port) {
        str += ':' + uri.port;
      }
    }
    str += uri.path || '';
    if (uri.query) {
      str += '?' + uri.query;
    }
    if (uri.anchor) {
      str += '#' + uri.anchor;
    }
  }
  return str;
}

var Url = {
  parse: parseUrl,
  stringify: stringifyUrl
};

var _encode = encodeURIComponent;
var r20 = /%20/g;
var rbracket = /\[]$/;

function buildParams(prefix, obj, add) {
  if (Array.isArray(obj)) {
    // Serialize array item.
    obj.forEach(function (v, i) {
      if (rbracket.test(prefix)) {
        // Treat each array item as a scalar.
        add(prefix, v);
      } else {
        // Item is non-scalar (array or object), encode its numeric index.
        buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, add);
      }
    });
  } else if (isObject(obj)) {
    // Serialize object item.
    for (var name in obj) {
      buildParams(prefix + '[' + name + ']', obj[name], add);
    }
  } else {
    // Serialize scalar item.
    add(prefix, obj);
  }
}

// # http://stackoverflow.com/questions/1131630/the-param-inverse-function-in-javascript-jquery
// a[b]=1&a[c]=2&d[]=3&d[]=4&d[2][e]=5 <=> { a: { b: 1, c: 2 }, d: [ 3, 4, { e: 5 } ] }
function parseQuery(str, opts) {
  if (opts === void 0) opts = {};

  var _querys = {};
  decodeURIComponent(str || '').replace(/\+/g, ' '
  // (optional no-capturing & )(key)=(value)
  ).replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, _name, _value) {
    if (_name) {
      var _path, _acc, _tmp, _ref;
      (_path = []).unshift(_name = _name.replace(/\[([^\]]*)]/g, function ($0, _k) {
        _path.push(_k);
        return '';
      }));
      _ref = _querys;
      for (var j = 0; j < _path.length - 1; j++) {
        _acc = _path[j];
        _tmp = _path[j + 1];
        if (!_ref[_acc]) {
          _ref[_acc] = _tmp === '' || /^[0-9]+$/.test(_tmp) ? [] : {};
        }
        _ref = _ref[_acc];
      }
      if (opts.boolval) {
        // first
        if (_value === 'true') {
          _value = true;
        } else if (_value === 'false') {
          _value = false;
        }
      } else if (opts.intval) {
        // skip "true" & "false"
        if (_tmp = parseInt(_value) === _value) {
          _value = _tmp;
        }
      }
      if ((_acc = _path[_path.length - 1]) === '') {
        _ref.push(_value);
      } else {
        _ref[_acc] = _value;
      }
    }
  });
  return _querys;
}

function stringifyQuery(query) {
  // # http://api.jquery.com/jQuery.param
  var _add = function (key, value) {
    /* jshint eqnull:true */
    _str.push(_encode(key) + '=' + (value === null || value === undefined ? '' : _encode(value)));
    // _str.push(( key ) + "=" +  (value == null ? "" : ( value )));
  };
  var _str = [];
  query || (query = {});
  for (var x in query) {
    buildParams(x, query[x], _add);
  }
  return _str.join('&').replace(r20, '+');
}

var Query = {
  parse: parseQuery,
  stringify: stringifyQuery
};

function extend() {
  var arguments$1 = arguments;

  // form jQuery & remove this
  var options, name, src, copy, copyIsArray, clone;
  var target = arguments[0] || {};
  var i = 1;
  var length = arguments.length;
  var deep = false;
  if (isBoolean(target)) {
    deep = target;
    target = arguments[i] || {};
    i++;
  }
  if (typeof target !== 'object' && !isFunction(target)) {
    target = {};
  }
  for (; i < length; i++) {
    options = arguments$1[i];
    /* jshint eqnull:true */
    if (options != null) {
      for (name in options) {
        src = target[name];
        copy = options[name];
        if (target !== copy) {
          if (deep && copy && (isObject(copy) || (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];
            } else {
              clone = src && isObject(src) ? src : {};
            }
            target[name] = extend(deep, clone, copy);
          } else {
            target[name] = copy;
          }
        }
      }
    }
  }
  return target;
}

function clone(val) {
  if (isArray(val)) {
    return extend(true, [], val);
  } else if (isObject(val)) {
    return extend(true, {}, val);
  }
  return extend(true, [], [val])[0];
}

/**
 * 对象或数组遍历
 * @param  {Array|Object} obj      要遍历的对象
 * @param  {Function} iterator 遍历函数，统一遵循值在前的模式
 * @param  {Mixed} context  上下文对象
 * @return {Mixed}          返回要遍历的对象
 *
 * @example
 * each(['a','b'], function(val, key){
 *     if (val == 'a') {
 *         console.log(val);
 *         return false;
 *     }
 * });
 */
function each(obj, iterator, context) {
  if (obj) {
    var _length = obj.length;
    var _key;
    if (_length === +_length) {
      // array like
      for (_key = 0; _key < _length; _key++) {
        if (iterator.call(context, obj[_key], _key) === false) {
          return obj;
        }
      }
    } else {
      // object
      for (_key in obj) {
        if (obj.hasOwnProperty(_key)) {
          if (iterator.call(context, obj[_key], _key) === false) {
            return obj;
          }
        }
      }
    }
  }
  return obj;
}

function unique(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('array-unique expects an array.');
  }
  var len = arr.length;
  var i = -1;
  while (i++ < len) {
    var j = i + 1;
    for (; j < arr.length; ++j) {
      if (arr[i] === arr[j]) {
        arr.splice(j--, 1);
      }
    }
  }
  return arr;
}

function isPromiseLike(obj) {
  return obj && obj.then;
}

function uuid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function guid() {
  return new Date().getTime().toString(32) + Math.floor(Math.random() * 10000000000).toString(32) + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function inherits(ctor, superCtor, useSuper) {
  Object.setPrototypeOf(ctor.prototype, superCtor.prototype);
  // same as
  // ctor.prototype = new superCtor;
  // ctor.prototype.constructor = superCtor;

  // ctor.prototype.name = 'ctor';
  if (useSuper) {
    ctor.super_ = superCtor;
  }
  return ctor;
}

function prop(target, key, value) {
  Object.defineProperty(target, key, { value: value });
}

function strRepeat(s, n) {
  return new Array(Math.max(n || 0, 0) + 1).join(s);
}

function noop() {}

function splitEach(str, callback, chr, context) {
  return str.split(chr || ' ').forEach(callback, context);
}

function proxy(fn, context) {
  return function () {
    fn.apply(context, arguments);
  };
}

function formatDate(fmt, date) {
  if (!fmt) {
    fmt = 'yyyy-MM-dd';
  }
  if (!date) {
    date = new Date();
  } else {
    date = new Date(date);
  }
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds // 毫秒
    () };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return fmt;
}

function bindEvent(target) {
  var _events = {};
  prop(target, 'on', function (event, fn) {
    (_events[event] || (_events[event] = [])).push(fn);
  });

  prop(target, 'off', function (event, fn) {
    if (_events[event]) {
      var list = _events[event];
      if (fn) {
        var pos = list.indexOf(fn);
        if (pos !== -1) {
          list.splice(pos, 1);
        }
      } else {
        delete _events[event];
      }
    }
  });

  prop(target, 'once', function (event, fn) {
    var once = function () {
      var args = [],
          len = arguments.length;
      while (len--) args[len] = arguments[len];

      target.off(event, fn);
      fn.apply(void 0, args);
    };
    target.on(event, once);
  });

  prop(target, 'subscribe', function (event, fn) {
    target.on(event, fn);
    return function () {
      target.off(event, fn);
    };
  });

  prop(target, 'emit', function (event) {
    var args = [],
        len = arguments.length - 1;
    while (len-- > 0) args[len] = arguments[len + 1];

    if (_events[event]) {
      var list = _events[event].slice();
      var fn;
      while (fn = list.shift()) {
        fn.apply(void 0, args);
      }
    }
  });
}

var PROMISE = Promise;
var promise = {
  resolve: PROMISE.resolve.bind(PROMISE),
  reject: PROMISE.reject.bind(PROMISE),
  all: PROMISE.all.bind(PROMISE),
  then: function (fn) {
    return new PROMISE(fn);
  }
};

/**
 * ajax 方法
 * @param  {Object}   opts 请求对象
 * {
 *     method:"GET",
 *     dataType:"JSON",
 *     headers:{},
 *     url:"",
 *     data:{},
 * }
 * @param  {Function} next 回调
 * @return {XMLHttpRequest}        xhr对象
 */
function ajax(opts, next) {
  var method = (opts.method || 'GET').toUpperCase();
  var dataType = (opts.dataType || 'JSON').toUpperCase();
  var timeout = opts.timeout;
  /* global XMLHttpRequest */
  var req = new XMLHttpRequest();
  var data = null;
  var isPost = method === 'POST';
  var isGet = method === 'GET';
  var isFormData = false;
  var emit = function (err, data, headers) {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    req.onload = req.onreadystatechange = req.onerror = null;
    if (next) {
      var tmp = next;
      next = null;
      tmp(err, data, headers);
    }
  };
  if (isGet) {
    if (opts.data) {
      var u = parseUrl(opts.url);
      var q = parseQuery(u.query);
      for (var x in opts.data) {
        q[x] = opts.data[x];
      }
      u.query = stringifyQuery(q);
      opts.url = stringifyUrl(u);
      opts.data = null;
    }
  } else if (isPost) {
    data = opts.data;
    /* global FormData */
    if (probe.FormData) {
      isFormData = data instanceof FormData;
      if (!isFormData) {
        data = stringifyQuery(data);
      }
    }
  }
  if (timeout) {
    timeout = setTimeout(function () {
      req.abort();
      emit(new Error('error_timeout'));
    }, timeout);
  }
  try {
    opts.xhr && opts.xhr(req);
    if (dataType === 'BINARY') {
      req.responseType = 'arraybuffer';
    }
    req.open(method, opts.url, true);
    if (opts.headers) {
      for (var x$1 in opts.headers) {
        req.setRequestHeader(x$1, opts.headers[x$1]);
      }
    }
    if (isPost && !isFormData) {
      req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    if (opts.headerOnly) {
      req.onreadystatechange = function () {
        // console.log('state', req.readyState, req);
        if (req.readyState === 2) {
          // HEADERS_RECEIVED
          var headers = parseHeaders(req.getAllResponseHeaders(), opts.camelHeaders);
          req.abort();
          emit(null, undefined, headers);
        }
      };
    }
    req.onload = function () {
      // if(req.readyState != 4) return;
      if ([200, 304, 206, 0].indexOf(req.status) === -1) {
        // error
        emit(new Error('error_status_' + req.status));
      } else {
        var data = req.response;
        try {
          if (dataType === 'JSON') {
            data = JSON.parse(req.responseText);
          } else if (dataType === 'XML') {
            data = req.responseXML;
          } else if (dataType === 'TEXT') {
            data = req.responseText;
          } else if (dataType === 'BINARY') {
            var arrayBuffer = new Uint8Array(data);
            var str = '';
            for (var i = 0; i < arrayBuffer.length; i++) {
              str += String.fromCharCode(arrayBuffer[i]);
            }
            data = str;
          }
        } catch (err) {
          return emit(err);
        }
        emit(null, data, parseHeaders(req.getAllResponseHeaders(), opts.camelHeaders));
      }
    };
    req.onerror = function (e) {
      emit(new Error('error_network'));
    };
    // 进度
    if (opts.onprogress && !opts.headerOnly) {
      req.onloadend = req.onprogress = function (e) {
        var info = {
          total: e.total,
          loaded: e.loaded,
          percent: e.total ? Math.trunc(100 * e.loaded / e.total) : 0
        };
        if (e.type === 'loadend') {
          info.percent = 100;
        } else if (e.total === e.loaded) {
          return;
        }
        if (e.total < e.loaded) {
          info.total = info.loaded;
        }
        if (info.percent === 0) {
          return;
        }
        opts.onprogress(info);
      };
    }
    req.send(data);
  } catch (e) {
    emit(e);
  }
  return req;
}

function parseHeaders(str, camelHeaders) {
  var ret = {};
  str.trim().split('\n').forEach(function (key) {
    key = key.replace(/\r/g, '');
    var arr = key.split(': ');
    var name = arr.shift().toLowerCase();
    ret[camelHeaders ? camelCase(name) : name] = arr.shift();
  });
  return ret;
}

function camelCase(s) {
  return s.replace(/-(.)/g, function (a, $1) {
    return $1.toUpperCase();
  });
}

exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isString = isString;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isNumber = isNumber;
exports.isInteger = isInteger;
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isNan = isNan;
exports.isRegExp = isRegExp;
exports.isDate = isDate;
exports.typeValue = typeValue;
exports.isInt = isInt;
exports.isUint = isUint;
exports.types = types;
exports.probe = probe;
exports.parseUrl = parseUrl;
exports.stringifyUrl = stringifyUrl;
exports.Url = Url;
exports.parseQuery = parseQuery;
exports.stringifyQuery = stringifyQuery;
exports.Query = Query;
exports.clone = clone;
exports.each = each;
exports.extend = extend;
exports.bindEvent = bindEvent;
exports.unique = unique;
exports.isPromiseLike = isPromiseLike;
exports.uuid = uuid;
exports.guid = guid;
exports.inherits = inherits;
exports.prop = prop;
exports.strRepeat = strRepeat;
exports.noop = noop;
exports.splitEach = splitEach;
exports.proxy = proxy;
exports.formatDate = formatDate;
exports.promise = promise;
exports.ajax = ajax;
});

var savFlux_cjs$1 = createCommonjsModule(function (module, exports) {
/*!
 * sav-flux v0.0.16
 * (c) 2017 jetiny 86287344@qq.com
 * Release under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });



function Flux(opts) {
  if (opts === void 0) opts = { strict: true };

  var flux = this;
  var prop = initProp(flux);
  prop('flux', flux);
  prop('prop', prop);
  prop('mutations', {});
  prop('actions', {});
  prop('proxys', {});
  prop('opts', opts);
  initUse(flux)([initUtil, savUtil_cjs.bindEvent, initPromise, initCloneThen, initState, initCommit, initDispatch, initProxy, initDeclare]);
}

function initProp(flux) {
  var prop = function (key, value, opts) {
    if (opts === void 0) opts = {};

    opts.value = value;
    Object.defineProperty(flux, key, opts);
  };
  prop.get = function (key, value, opts) {
    if (opts === void 0) opts = {};

    opts.get = value;
    Object.defineProperty(flux, key, opts);
  };
  return prop;
}

function initUse(ref) {
  var flux = ref.flux;
  var prop = ref.prop;

  var use = function (plugin, opts) {
    if (Array.isArray(plugin)) {
      return plugin.forEach(function (plugin) {
        flux.use(plugin, opts);
      });
    }
    plugin(flux, opts);
  };
  prop('use', use);
  return use;
}

function initUtil(ref) {
  var prop = ref.prop;
  var opts = ref.opts;

  prop('clone', savUtil_cjs.clone);
  prop('extend', savUtil_cjs.extend);
  prop('opt', function (name, defaultVal) {
    if (defaultVal === void 0) defaultVal = null;

    return name in opts ? opts[name] : defaultVal;
  });
}

function initState(ref) {
  var prop = ref.prop;
  var emit = ref.emit;
  var cloneThen = ref.cloneThen;
  var clone$$1 = ref.clone;
  var resolve = ref.resolve;

  var state = {};
  prop.get('state', function () {
    return state;
  }, {
    set: function set() {
      throw new Error('[flux] Use flux.replaceState() to explicit replace store state.');
    }
  });
  prop('getState', function () {
    return clone$$1(state);
  });

  prop('replaceState', function (newState) {
    var stateStr = JSON.stringify(newState);
    newState = JSON.parse(stateStr);
    for (var x in state) {
      delete state[x];
    }
    for (var x$1 in newState) {
      state[x$1] = newState[x$1];
    }
    return Promise.resolve(JSON.parse(stateStr)).then(function (cloneState) {
      emit('replace', cloneState);
      return cloneState;
    });
  });

  prop('updateState', function (changedState, slice) {
    if (typeof changedState !== 'object') {
      throw new Error('[flux] updateState require new state as object');
    }
    if (changedState !== state) {
      Object.keys(changedState).map(function (key) {
        state[key] = changedState[key];
      });
    }
    if (!slice) {
      return cloneThen(changedState).then(function (cloneState) {
        emit('update', cloneState);
        return cloneState;
      });
    }
    return resolve();
  });
}

function initCommit(ref) {
  var prop = ref.prop;
  var flux = ref.flux;
  var updateState = ref.updateState;
  var resolve = ref.resolve;

  var commit = function (type, payload) {
    var mutations = flux.mutations;
    if (typeof type === 'object') {
      payload = type;
      type = type.type;
    }
    var entry = mutations[type];
    if (!entry) {
      throw new Error('[flux] unknown mutation : ' + type);
    }
    var state = flux.state;
    var ret = entry(flux, payload);
    var update = function (ret) {
      if (ret) {
        if (ret === state) {
          throw new Error('[flux] commit require new object rather than old state');
        }
        if (typeof ret !== 'object') {
          throw new Error('[flux] commit require new object');
        }
        return updateState(ret);
      }
      return resolve();
    };
    if (savUtil_cjs.isPromiseLike(ret)) {
      return ret.then(update);
    } else {
      return update(ret);
    }
  };
  prop('commit', flux.opts.noProxy ? commit : proxyApi(commit));
}

function initDispatch(ref) {
  var prop = ref.prop;
  var flux = ref.flux;
  var commit = ref.commit;
  var resolve = ref.resolve;
  var reject = ref.reject;
  var opts = ref.opts;
  var cloneThen = ref.cloneThen;

  var dispatch = function (action, payload) {
    var actions = flux.actions;
    var mutations = flux.mutations;
    var proxys = flux.proxys;
    var entry = action in actions && actions[action] || action in mutations && function (_, payload) {
      return commit(action, payload);
    };
    if (!entry && proxys[action]) {
      entry = proxys[action];
    }
    if (!entry) {
      return reject('[flux] unknown action : ' + action);
    }
    var err, ret;
    try {
      ret = entry(flux, payload);
    } catch (e) {
      err = e;
    }
    if (err) {
      return reject(err);
    }
    if (!savUtil_cjs.isPromiseLike(ret)) {
      ret = resolve(ret);
    }
    // make copy
    return opts.strict ? ret.then(function (data) {
      if (Array.isArray(data) || typeof data === 'object') {
        if (data.__clone) {
          return resolve(data);
        }
        return cloneThen(data).then(function (newData) {
          Object.defineProperty(newData, '__clone', { value: true });
          return resolve(newData);
        });
      }
      return resolve(data);
    }) : ret;
  };
  prop('dispatch', flux.opts.noProxy ? dispatch : proxyApi(dispatch));
}

function initProxy(ref) {
  var prop = ref.prop;
  var proxys = ref.proxys;

  prop('proxy', function (name, value) {
    if (typeof name === 'object') {
      // batch mode
      for (var x in name) {
        if (value === null) {
          delete proxys[x];
        } else {
          proxys[x] = name[x];
        }
      }
    } else {
      // once mode
      if (value === null) {
        delete proxys[name];
      } else {
        proxys[name] = value;
      }
    }
  });
}

function initDeclare(ref) {
  var prop = ref.prop;
  var flux = ref.flux;
  var emit = ref.emit;
  var commit = ref.commit;
  var dispatch = ref.dispatch;
  var updateState = ref.updateState;

  var declare = function (mod) {
    if (!mod) {
      return;
    }
    if (Array.isArray(mod)) {
      return mod.forEach(declare);
    }
    if (mod.mutations) {
      for (var mutation in mod.mutations) {
        if (flux.mutations[mutation]) {
          throw new Error("[flux] mutation exists: " + mutation);
        }
        flux.mutations[mutation] = mod.mutations[mutation];
        if (flux.opts.noProxy || !savUtil_cjs.probe.Proxy) {
          proxyFunction(commit, mutation);
          proxyFunction(dispatch, mutation);
        }
      }
    }
    // if (mod.proxys) {
    //   for(let action in mod.proxys) {
    //     flux.proxys[action] = mod.proxys[action]
    //   }
    // }
    if (mod.actions) {
      for (var action in mod.actions) {
        if (flux.actions[action]) {
          throw new Error("[flux] action exists: " + action);
        }
        flux.actions[action] = mod.actions[action];
        if (flux.opts.noProxy || !savUtil_cjs.probe.Proxy) {
          proxyFunction(dispatch, action);
        }
      }
    }
    if (mod.state) {
      var states = flux.state;
      for (var state in mod.state) {
        if (state in states) {
          throw new Error("[flux] state exists: " + state);
        }
      }
      updateState(mod.state, true);
    }
    emit('declare', mod);
  };
  prop('declare', declare);
}

function proxyFunction(target, name) {
  target[name] = function (payload) {
    return target(name, payload);
  };
}

function proxyApi(entry) {
  if (savUtil_cjs.probe.Proxy) {
    return new Proxy(entry, {
      get: function get(target, name) {
        return function (payload) {
          return entry(name, payload);
        };
      }
    });
  }
  return entry;
}

function initPromise(ref) {
  var prop = ref.prop;

  var PROMISE = Promise;
  prop('resolve', PROMISE.resolve.bind(PROMISE));
  prop('reject', PROMISE.reject.bind(PROMISE));
  prop('all', PROMISE.all.bind(PROMISE));
  prop('then', function (fn) {
    return new PROMISE(fn);
  });
}

function initCloneThen(ref) {
  var prop = ref.prop;
  var clone$$1 = ref.clone;
  var resolve = ref.resolve;
  var then = ref.then;

  if (!savUtil_cjs.probe.MessageChannel) {
    prop('cloneThen', function (value) {
      return resolve().then(function () {
        return resolve(clone$$1(value));
      });
    });
    return;
  }
  /* global MessageChannel */
  var channel = new MessageChannel();
  var maps = {};
  var idx = 0;
  var port2 = channel.port2;
  port2.start();
  port2.onmessage = function (ref) {
    var ref_data = ref.data;
    var key = ref_data.key;
    var value = ref_data.value;

    var resolve = maps[key];
    resolve(value);
    delete maps[key];
  };
  prop('cloneThen', function (value) {
    return new Promise(function (resolve) {
      var key = idx++;
      maps[key] = resolve;
      try {
        channel.port1.postMessage({ key: key, value: value });
      } catch (err) {
        console.error('cloneThen.postMessage', err);
        delete maps[key];
        try {
          value = JSON.parse(JSON.stringify(value));
        } catch (err) {
          console.error('cloneThen.JSON', err);
          value = clone$$1(value);
        }
        return then(function () {
          return resolve(value);
        });
      }
    });
  });
}

function resetStoreVM(Vue$$1, flux, vaf, state) {
  var oldVm = vaf.vm;
  if (oldVm) {
    flux.off('update', vaf.watch);
  }
  var silent = Vue$$1.config.silent;
  Vue$$1.config.silent = true;
  var vm = vaf.vm = new Vue$$1({ data: { state: state } });
  flux.on('update', vaf.watch = function (newState) {
    if (isVmGetterMode) {
      var updates = [];
      var loop = function (key) {
        if (key in vm.state) {
          vm.state[key] = newState[key];
        } else {
          // dynamic computed methods
          Vue$$1.util.defineReactive(vm.state, key, newState[key]);
          if (vmGetterMaps[key]) {
            vmGetterMaps[key].forEach(function (vmIt) {
              if (vmIt._computedWatchers && vmIt._computedWatchers[key]) {
                updates.indexOf(vmIt) === -1 && updates.push(vmIt);
                vmIt._computedWatchers[key].update();
              }
            });
          }
        }
      };

      for (var key in newState) loop(key);
      updates.forEach(function (vm) {
        return vm.$forceUpdate();
      });
    } else {
      // old version use mapGetters
      for (var key$1 in newState) {
        vm.state[key$1] = newState[key$1];
      }
    }
  });
  Vue$$1.config.silent = silent;
  if (oldVm) {
    oldVm.state = null;
    Vue$$1.nextTick(function () {
      return oldVm.$destroy();
    });
  }
}

var Vue$$1;

function FluxVue(ref) {
  var flux = ref.flux;
  var mixinActions = ref.mixinActions;if (mixinActions === void 0) mixinActions = false;
  var injects = ref.injects;if (injects === void 0) injects = [];

  var vaf = {
    dispatch: flux.dispatch,
    proxy: flux.proxy
  };
  injects.forEach(function (key) {
    vaf[key] = flux[key];
  });
  resetStoreVM(Vue$$1, flux, vaf, flux.getState());
  flux.on('replace', function (state) {
    resetStoreVM(Vue$$1, flux, vaf, state);
  });
  if (mixinActions) {
    Vue$$1.mixin({
      methods: mapActions(savUtil_cjs.unique(Object.keys(flux.mutations).concat(Object.keys(flux.actions))))
    });
  }
  Vue$$1.mixin({
    methods: {
      dispatch: function dispatch(method, payload) {
        return vaf.dispatch(method, payload);
      }
    }
  });
  return vaf;
}

var vmGetterMaps = {};
var isVmGetterMode = false;

function registerVmGetters(vm, getters) {
  isVmGetterMode || (isVmGetterMode = true);
  getters = vm._getters = Object.keys(getters);
  getters.forEach(function (key) {
    var arr = vmGetterMaps[key] || (vmGetterMaps[key] = []);
    arr.push(vm);
  });
}

function destroyVmGetters(vm) {
  if (vm._getters) {
    vm._getters.forEach(function (key) {
      if (vmGetterMaps[key]) {
        var arr = vmGetterMaps[key];
        var pos = arr.indexOf(vm);
        if (pos >= -1) {
          arr.splice(pos, 1);
        }
      }
    });
  }
}

FluxVue.install = function install(vue) {
  Vue$$1 = vue;
  Vue$$1.mixin({
    beforeCreate: function beforeCreate() {
      var this$1 = this;

      var options = this.$options;
      if (options.vaf) {
        this.$flux = options.vaf;
      } else if (options.parent && options.parent.$flux) {
        this.$flux = options.parent.$flux;
      }
      var proxys = options.proxys;
      var methods = options.methods;
      var actions = options.actions;
      var getters = options.getters;
      var computed = options.computed;
      if (this.$flux) {
        if (actions) {
          methods || (methods = options.methods = {});
          Object.assign(methods, mapActions(actions));
        }
        if (getters) {
          computed || (computed = options.computed = {});
          var getterMaps = mapGetters(getters);
          registerVmGetters(this, getterMaps);
          Object.assign(computed, getterMaps);
        }
        if (proxys) {
          var maps = this.__vafMaps = {};
          Object.keys(proxys).map(function (key) {
            maps[key] = (typeof proxys[key] === 'function' ? proxys[key] : methods[proxys[key]]).bind(this$1);
          });
          this.$flux.proxy(maps);
        }
      }
    },
    beforeDestroy: function beforeDestroy() {
      var options = this.$options;
      var proxys = options.proxys;
      if (proxys && this.$flux && this.__vafMaps) {
        this.$flux.proxy(this.__vafMaps, null);
      }
      if (isVmGetterMode) {
        destroyVmGetters(this);
      }
      if (this.$flux) {
        delete this.$flux;
      }
    }
  });
};

// 后续不建议使用
function mapGetters(getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = savUtil_cjs.isFunction(val) ? function mappedGetter() {
      // function(state){}
      return val.call(this, this.$flux.vm.state);
    } : function mappedGetter() {
      return this.$flux.vm.state[val];
    };
  });
  return res;
}

function mapActions(actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = function mappedAction(payload) {
      if (!this.$flux) {
        var message = "can not call action " + key + " without flux";
        return Promise.reject(new Error(message));
      }
      return this.$flux.dispatch(val, payload);
    };
  });
  return res;
}

function normalizeMap(map) {
  return Array.isArray(map) ? map.map(function (key) {
    return {
      key: key,
      val: key
    };
  }) : Object.keys(map).map(function (key) {
    return {
      key: key,
      val: map[key]
    };
  });
}

var FluxRedux = function FluxRedux(ref) {
  var this$1 = this;
  var flux = ref.flux;

  this.flux = flux;
  this.dispatch = flux.dispatch;
  this.state = flux.getState();
  flux.on('update', this.watchUpdate = function (newState) {
    this$1.state = Object.assign({}, this$1.state, newState);
    flux.emit('redux_change');
  });
  flux.on('replace', this.watchReplace = function (newState) {
    this$1.state = newState;
    flux.emit('redux_change');
  });
};
FluxRedux.prototype.getState = function getState() {
  return this.state;
};
FluxRedux.prototype.subscribe = function subscribe(fn) {
  return this.flux.subscribe('redux_change', fn);
};

exports.Flux = Flux;
exports.FluxVue = FluxVue;
exports.mapGetters = mapGetters;
exports.mapActions = mapActions;
exports.FluxRedux = FluxRedux;
});

var savFlux_cjs_1 = savFlux_cjs$1.Flux;
var savFlux_cjs_2 = savFlux_cjs$1.FluxVue;

var SavBtn = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('button', { staticClass: "sav-btn" }, [_vm._v("btn")]);
  },
  staticRenderFns: []

};

var SavInput = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('input', { staticClass: "sav-input" });
  },
  staticRenderFns: []
};

var SavText = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c("div");
  },
  staticRenderFns: []
};

var SavCheck = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c("div");
  },
  staticRenderFns: []
};

var SavRadio = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c("div");
  },
  staticRenderFns: []
};

var SavIcon = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c("div");
  },
  staticRenderFns: []
};

var SavField = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.isLabel ? _c('label', { staticClass: "sav-field" }, [_vm._t("title", [_c('span', { staticClass: "sav-label" }, [_vm._v(_vm._s(_vm.labelText))])]), _vm._v(" "), _c('div', { staticClass: "field-body" }, [_vm._t("default")], 2)], 2) : _c('div', { staticClass: "sav-field" }, [_vm._t("title", [_c('span', { staticClass: "sav-label" }, [_vm._v(_vm._s(_vm.labelText))])]), _vm._v(" "), _c('div', { staticClass: "field-body" }, [_vm._t("default")], 2)], 2);
  },
  staticRenderFns: [],
  props: {
    isLabel: {
      type: Boolean,
      default: true
    },
    labelText: {
      type: String,
      default: ''
    }
  }
};

var SavForm = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: ['sav-flex-block', _vm.isAlign] }, [_c('form', { class: ['sav-form', _vm.isAlign, _vm.horizontal ? 'is-horizontal' : 'is-vertical'] }, [_vm._t("default")], 2)]);
  },
  staticRenderFns: [],
  props: {
    isAlign: {
      type: String,
      default: 'is-center'
    },
    horizontal: {
      type: Boolean,
      default: false
    }
  }
};

var focus = {
  inserted(el) {
    el.focus();
  }
};

var directives = {
  focus
};

function install(Vue$$1) {
  Object.keys(directives).forEach(it => {
    Vue$$1.directive(it, directives[it]);
  });
  Object.keys(components).forEach(it => {
    Vue$$1.component(it, components[it]);
  });
}

let components = {
  SavBtn,
  SavInput,
  SavText,
  SavCheck,
  SavRadio,
  SavIcon,
  SavField,
  SavForm
};

Object.defineProperty(components, 'install', {
  value: install,
  enumerable: false,
  configurable: true
});

// @NOTICE This file is generated by sav-cli.

// 全局的VUE组件需要在这里注册
// 其他需要用Vue的需要从这里引入
Vue.use(VueRouter);
Vue.use(savFlux_cjs_2);
Vue.use(components);

var Element = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "element" }, [_c('router-view')], 1);
  },
  staticRenderFns: [],
  name: 'Element',
  getters: [],
  actions: []
};

var ElementTabs = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "element-tabs" }, [_vm._v("\n  ElementTabs\n")]);
  },
  staticRenderFns: [],
  name: 'ElementTabs',
  getters: [],
  actions: []
};

var ElementButtons = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "element-buttons" }, [_vm._v("\n  ElementButtons\n")]);
  },
  staticRenderFns: [],
  name: 'ElementButtons',
  getters: [],
  actions: []
};

var Home = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "home" }, [_c('router-view')], 1);
  },
  staticRenderFns: [],
  name: 'Home',
  getters: [],
  actions: []
};

var HomeIndex = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "home-index" }, [_c('router-link', { attrs: { "to": { name: 'PageLogin' } } }, [_vm._v("登录页面")]), _vm._v(" "), _c('router-link', { attrs: { "to": { name: 'PageRegister' } } }, [_vm._v("注册页面")])], 1);
  },
  staticRenderFns: [],
  name: 'HomeIndex',
  getters: [],
  actions: []
};

var Page = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "page" }, [_c('router-view')], 1);
  },
  staticRenderFns: [],
  name: 'Page',
  getters: [],
  actions: []
};

var PageLogin = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "page-login" }, [_c('div', { staticClass: "sav-flex-block is-center" }, [_c('form', { staticClass: "sav-form is-vertical" }, [_c('label', { staticClass: "sav-field" }, [_c('span', { staticClass: "sav-label" }, [_vm._v("您的帐号")]), _vm._v(" "), _c('div', { staticClass: "field-body" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.username, expression: "username" }], staticClass: "sav-input", attrs: { "type": "text" }, domProps: { "value": _vm.username }, on: { "input": function ($event) {
          if ($event.target.composing) {
            return;
          }_vm.username = $event.target.value;
        } } })])]), _vm._v(" "), _c('label', { staticClass: "sav-field" }, [_c('span', { staticClass: "sav-label" }, [_vm._v("您的密码")]), _vm._v(" "), _c('div', { staticClass: "field-body" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.username, expression: "username" }], staticClass: "sav-input", attrs: { "type": "password" }, domProps: { "value": _vm.username }, on: { "input": function ($event) {
          if ($event.target.composing) {
            return;
          }_vm.username = $event.target.value;
        } } })])]), _vm._v(" "), _c('div', { staticClass: "sav-field" }, [_c('label', { staticClass: "sav-label" }), _vm._v(" "), _c('div', { staticClass: "field-body" }, [_c('button', { staticClass: "field-item sav-btn is-primary", on: { "click": function ($event) {
          _vm.$router.back();
        } } }, [_vm._v("登录")])])])])])]);
  },
  staticRenderFns: [],
  name: 'PageLogin',
  getters: ['username', 'password'],
  actions: []
};

var PageRegister = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "page-register" }, [_c('sav-form', [_c('sav-field', { attrs: { "labelText": "您的帐号" } }, [_c('input', { directives: [{ name: "focus", rawName: "v-focus" }, { name: "model", rawName: "v-model", value: _vm.username, expression: "username" }], attrs: { "type": "text" }, domProps: { "value": _vm.username }, on: { "input": function ($event) {
          if ($event.target.composing) {
            return;
          }_vm.username = $event.target.value;
        } } })]), _vm._v(" "), _c('sav-field', { attrs: { "labelText": "您的昵称" } }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.nickname, expression: "nickname" }], attrs: { "type": "text" }, domProps: { "value": _vm.nickname }, on: { "input": function ($event) {
          if ($event.target.composing) {
            return;
          }_vm.nickname = $event.target.value;
        } } })]), _vm._v(" "), _c('sav-field', { attrs: { "labelText": "您的密码" } }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.password, expression: "password" }], attrs: { "type": "password" }, domProps: { "value": _vm.password }, on: { "input": function ($event) {
          if ($event.target.composing) {
            return;
          }_vm.password = $event.target.value;
        } } })]), _vm._v(" "), _c('sav-field', { attrs: { "labelText": "确认秘密" } }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.confirmPassword, expression: "confirmPassword" }], attrs: { "type": "password" }, domProps: { "value": _vm.confirmPassword }, on: { "input": function ($event) {
          if ($event.target.composing) {
            return;
          }_vm.confirmPassword = $event.target.value;
        } } })]), _vm._v(" "), _c('sav-field', { attrs: { "isLabel": false } }, [_c('button', { staticClass: "field-item sav-btn is-primary", on: { "click": function ($event) {
          _vm.$router.back();
        } } }, [_vm._v("注册")])])], 1)], 1);
  },
  staticRenderFns: [],
  name: 'PageRegister',
  getters: ['nickname', 'username', 'password', 'confirmPassword'],
  actions: []
};

// @NOTICE This file is generated by sav-cli.

/* eslint quotes: ["off"] */
var routes = [{
  component: Element,
  path: "/element",
  children: [{
    component: ElementTabs,
    name: "ElementTabs",
    path: "tabs"
  }, {
    component: ElementButtons,
    name: "ElementButtons",
    path: "buttons"
  }]
}, {
  component: Home,
  path: "/",
  children: [{
    component: HomeIndex,
    name: "HomeIndex",
    path: ""
  }]
}, {
  component: Page,
  path: "/page",
  children: [{
    component: PageLogin,
    name: "PageLogin",
    path: "login"
  }, {
    component: PageRegister,
    name: "PageRegister",
    path: "register"
  }]
}];

var App = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { attrs: { "id": "app" } }, [_c('router-view', { staticClass: "view" })], 1);
  },
  staticRenderFns: [],
  name: 'App',
  getters: [],
  actions: []
};

var savSchema = createCommonjsModule(function (module, exports) {
/*!
 * sav-schema v0.0.17
 * (c) 2017 jetiny 86287344@qq.com
 * Release under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class SchemaTypeError extends Error {
  constructor(type, value, message = '数据类型 {type} 无法识别数值 {value}') {
    super(message.replace('{type}', type).replace('{value}', String(value)));
    this.type = type;
    this.value = value;
  }
}

class SchemaEnumError extends Error {
  constructor(type, value, message = '枚举类型 {type} 无法识别数值 {value}') {
    super(message.replace('{type}', type).replace('{value}', String(value)));
    this.type = type;
    this.value = value;
  }
}

class SchemaRequiredError extends Error {
  constructor(field, message = '字段{field}不存在') {
    super(message.replace('{field}', field));
    this.field = field;
  }
}

class SchemaCheckedError extends Error {
  constructor(field, rule, message = '字段{field}不满足校验规则{rule}') {
    super(message.replace('{field}', field).replace('{rule}', rule));
    this.field = field;
    this.rule = rule;
  }
}

class SchemaNoRuleError extends Error {
  constructor(rule, message = '校验规则{rule}不存在') {
    super(message.replace('{rule}', rule));
    this.rule = rule;
  }
}

class SchemaInvalidRegexpError extends Error {
  constructor(regexp, message = '非法的正则表达式{regexp}') {
    super(message.replace('{regexp}', regexp));
    this.regexp = regexp;
  }
}

/*!
 * sav-util v0.0.9
 * (c) 2017 jetiny 86287344@qq.com
 * Release under the MIT License.
 */
function toStringType(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

var isArray = Array.isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

function isString(arg) {
  return typeof arg === 'string';
}

function isFunction(arg) {
  return typeof arg === 'function';
}

function isObject(arg) {
  return toStringType(arg) === 'Object' && arg !== null;
}

function isNumber(arg) {
  return typeof arg === 'number' && !isNaN(arg);
}

function isInteger(arg) {
  return isNumber(arg) && parseInt(arg) === arg;
}

function isUndefined(arg) {
  return arg === undefined;
}

function isNull(arg) {
  return arg === null;
}

var isInt = isInteger;
function isUint(arg) {
  return isInteger(arg) && arg >= 0;
}

function defined(val) {
  return val !== 'undefined';
}

var probe = {
  Map: defined(typeof Map),
  Proxy: defined(typeof Proxy),
  MessageChannel: defined(typeof MessageChannel),
  localStorage: defined(typeof localStorage),
  XMLHttpRequest: defined(typeof XMLHttpRequest),
  MutationObserver: defined(typeof MutationObserver),
  FormData: defined(typeof FormData),
  window: defined(typeof window),
  document: defined(typeof document)
};

/*
 * @Description      URL解析
 * @File             url.js
 * @Auth             jetiny@hfjy.com
 */

// jsuri https://code.google.com/r/jonhwendell-jsuri/
// https://username:password@www.test.com:8080/path/index.html?this=that&some=thing#content
var REKeys = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
var URL_RE = /^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#/]*\.[^?#/.]+(?:[?#]|$)))*\/?)?([^?#/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var _encode = encodeURIComponent;
var r20 = /%20/g;
var rbracket = /\[]$/;

function extend() {
  var arguments$1 = arguments;

  // form jQuery & remove this
  var options, name, src, copy, copyIsArray, clone;
  var target = arguments[0] || {};
  var i = 1;
  var length = arguments.length;
  var deep = false;
  if (isBoolean(target)) {
    deep = target;
    target = arguments[i] || {};
    i++;
  }
  if (typeof target !== 'object' && !isFunction(target)) {
    target = {};
  }
  for (; i < length; i++) {
    options = arguments$1[i];
    /* jshint eqnull:true */
    if (options != null) {
      for (name in options) {
        src = target[name];
        copy = options[name];
        if (target !== copy) {
          if (deep && copy && (isObject(copy) || (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];
            } else {
              clone = src && isObject(src) ? src : {};
            }
            target[name] = extend(deep, clone, copy);
          } else {
            target[name] = copy;
          }
        }
      }
    }
  }
  return target;
}

function clone(val) {
  if (isArray(val)) {
    return extend(true, [], val);
  } else if (isObject(val)) {
    return extend(true, {}, val);
  }
  return extend(true, [], [val])[0];
}

var PROMISE = Promise;
var promise = {
  resolve: PROMISE.resolve.bind(PROMISE),
  reject: PROMISE.reject.bind(PROMISE),
  all: PROMISE.all.bind(PROMISE),
  then: function (fn, reject) {
    return new PROMISE(fn, reject);
  }
};

const defaultTypes = [];

function registerType(opts) {
  if (isArray(opts)) {
    defaultTypes.push.apply(defaultTypes, opts);
  } else if (isObject(opts)) {
    defaultTypes.push(opts);
  }
}

function applyTypes(schema) {
  schema.declare(defaultTypes);
}

const defaultCheckes = {};

function registerCheck(name, func) {
  if (isObject(name, func)) {
    Object.assign(defaultCheckes, name, func);
  } else {
    defaultCheckes[name] = func;
  }
}

function applyCheckValue(value, rules) {
  if (isArray(rules)) {
    for (let rule of rules) {
      let [name] = rule;
      if (!defaultCheckes[name]) {
        throw new SchemaNoRuleError(name);
      }
      if (!defaultCheckes[name](value, rule)) {
        return rule;
      }
    }
  }
}

const SCHEMA_TYPE = 1;
const SCHEMA_ENUM = 2;
const SCHEMA_STURCT = 3;

function objectAssign(target, obj, excludes) {
  if (isObject(obj)) {
    let isExclude = isArray(excludes);
    for (let key in obj) {
      if (!isExclude || excludes.indexOf(key) === -1) {
        target[key] = obj[key];
      }
    }
  }
}

/**
 * 枚举类型
 */
/*
{
  name: 'Sex',
  enums: [
    {key: 'male', value: 1},
    {key: 'female', value: 2}
  ],
  strict: true,
  default: 'male'
}
 */

class SchemaEnum {
  constructor(props, schema) {
    this.schemaType = SCHEMA_ENUM;
    this.schema = schema;
    objectAssign(this, props, ['enums']);
    let enums = isObject(props.enums) ? toArray(props.enums) : isArray(props.enums) ? props.enums : [];
    this.enums = [];
    this.keyMaps = {};
    this.keys = [];
    this.values = [];
    this.valueMaps = {};
    enums.forEach(item => this.addEnum(item));
    if (this.name) {
      schema.export(this);
    }
  }
  addEnum(item) {
    this.keyMaps[item.key] = item;
    this.valueMaps[item.value] = item;
    this.keys.push(item.key);
    this.values.push(item.value);
    this.enums.push(item);
  }
  hasKey(key) {
    return this.isStrict ? this.keys.indexOf(key) !== -1 : !!this.keyMaps[key];
  }
  hasValue(value) {
    return this.isStrict ? this.values.indexOf(value) !== -1 : !!this.valueMaps[value];
  }
  value(key) {
    if (this.isStrict) {
      let idx = this.keys.indexOf(key);
      if (idx !== -1) {
        return this.keyMaps[key].value;
      }
    } else {
      return this.keyMaps[key].value;
    }
  }
  key(value) {
    if (this.isStrict) {
      let idx = this.values.indexOf(value);
      if (idx !== -1) {
        return this.keyMaps[this.keys[idx]].key;
      }
    } else {
      return this.valueMaps[value].key;
    }
  }
  create(val) {
    if (this.hasValue(val)) {
      return val;
    } else if (isFunction(val)) {
      return val();
    } else if (val !== this.default) {
      return this.create(this.default);
    }
  }
  check(val) {
    return this.hasValue(val);
  }
  parse(val) {
    if (this.values.indexOf(val) !== -1) {
      return val;
    } else if (this.valueMaps[val]) {
      return this.valueMaps[val].value;
    }
  }
  get isStrict() {
    return 'strict' in this ? this.strict : this.schema && this.schema.isStrict;
  }
}

function toArray(enums) {
  return Object.keys(enums).map(it => {
    return isObject(enums[it]) ? enums[it] : { key: it, value: enums[it] };
  });
}

/**
 * 简单类型
 */
/*
{
  name: String
}
虽然支持以下形式 但是基本数据类型不建议使用
{
  name: 'String',
  default: String
}
{
  name: 'String',
  default: ''
}
 */

class SchemaType {
  constructor(props, schema) {
    this.schemaType = SCHEMA_TYPE;
    this.schema = schema;
    Object.assign(this, props);
    if (isFunction(this.name)) {
      if (!('default' in this)) {
        this.default = this.name;
      }
      this.name = this.name.name;
    }
    if (this.name) {
      schema.export(this);
    }
  }
  // parse
  // check
  create(val) {
    if (arguments.length) {
      if (isFunction(val)) {
        return this.parse(val());
      }
      return this.parse(val);
    } else {
      return isFunction(this.default) ? this.default() : this.default;
    }
  }
}

/*
{
  name: 'followers',

  type: 'Array',      // 可能未定义
  subTef: 'User',
  ref: Array,
  subRef: User,

  required: false,
  optional: true,
  message: "用户关注数据非法"
}
 */
class SchemaField {
  constructor(props, struct) {
    Object.assign(this, props);
    this.struct = struct;
    let { schema } = struct;
    // delay
    if (!this.ref && this.type) {
      schema.delay(() => {
        this.ref = schema[this.type];
      });
    }
    if (!this.subRef && this.subType) {
      schema.delay(() => {
        this.subRef = schema[this.subType];
      });
    }
  }
  create(value) {
    let ret = arguments.length ? this.ref.create(value) : this.ref.create();
    if (isArray(ret) && ret.length && this.type === 'Array' && this.subRef) {
      ret = ret.map(item => this.subRef.create(item));
    }
    return ret;
  }
  validate(obj, inPlace) {
    let val = checkField(obj, this, inPlace);
    if (this.subRef) {
      val = checkSubField(val, this, inPlace);
    }
    return val;
  }
}

function checkSubField(val, field, inPlace) {
  let { subRef, subType } = field;
  // if (!isArray(val)) { // allow Array<Struct> only
  //   throw new SchemaTypeError(field.type, val)
  // }
  let ret = inPlace ? val : [];
  for (let i = 0, l = val.length; i < l; ++i) {
    try {
      let subVal;
      if (subRef.schemaType === SCHEMA_STURCT) {
        subVal = subRef.validate(val[i], inPlace);
      } else {
        subVal = checkValue(val[i], subRef, subType);
      }
      ret[i] = subVal;
    } catch (err) {
      (err.keys || (err.keys = [])).unshift(i);
      throw err;
    }
  }
  return ret;
}

function checkField(obj, field, inPlace) {
  let { name, required, nullable, ref, type } = field;
  if (!required && !(name in obj)) {
    return;
  }
  if (nullable && isNull(obj[name])) {
    return;
  }
  try {
    if (!(name in obj)) {
      throw new SchemaRequiredError(name);
    }
    let val = obj[name];
    let rule = applyCheckValue(val, field.checkes);
    if (rule) {
      throw new SchemaCheckedError(name, rule[0]);
    }
    if (ref.schemaType === SCHEMA_STURCT) {
      val = ref.validate(val, inPlace);
    } else {
      val = checkValue(val, ref, type);
    }
    return val;
  } catch (err) {
    if (field.message) {
      err.message = field.message;
    }
    throw err;
  }
}

function checkValue(val, ref, type) {
  if (!ref.check(val)) {
    let pass;
    if (ref.parse) {
      pass = ref.check(ref.parse(val));
    }
    if (!pass) {
      // 仍然失败
      if (ref.schemaType === SCHEMA_ENUM) {
        throw new SchemaEnumError(type, val);
      } else if (ref.schemaType === SCHEMA_TYPE) {
        throw new SchemaTypeError(type, val);
      }
    }
  }
  return val;
}

function updateField(field, { schema, root }) {
  // override [type, subType, ref, subRef, required, key]
  const { type } = field;
  if (isString(type)) {
    if (type.indexOf('<') > 0) {
      // ["Array<User>", "Array", "User"]
      const mat = type.match(/^(\w+)(?:<(\w+)>)?$/);
      field.type = mat[1];
      field.subType = mat[2];
    }
    if (!field.ref) {
      field.ref = root.refs[field.type] || schema[field.type];
    }
  } else if (isObject(type)) {
    field.type = type.name;
    field.ref = type;
  }
  if (field.ref && !field.ref.schema) {
    // 支持使用ref定义
    field.ref = schema.declare(field.ref, root);
  }
  if (field.subType) {
    // 支持使用subType定义
    if (!field.subRef) {
      if (isString(field.subType)) {
        field.subRef = root.refs[field.subType] || schema[field.subType];
      } else if (isObject(field.subType)) {
        field.subRef = schema.declare(field.subType, root);
        field.subType = field.subRef.name;
      }
    }
  }
  if (field.subRef && !field.subRef.schema) {
    // 支持使用 subRef定义
    field.subRef = schema.declare(field.subRef, root);
  }
  field.required = 'required' in field ? field.required : !field.optional;
}

/**
createField('Number|@comment:text|@optional|len,4,10')
=>
{
    "type": "Number",
    "optional": true,
    "checkes": [
        [ "len", "4", "10" ]
    ],
    "comment": "text"
}
 */

function createField(input, { schema, root }) {
  if (isString(input)) {
    return parseFieldStr(input);
  }
  let ret = Object.create(null);
  if (isFunction(input)) {
    // {userName: String} => {userName: 'String'}
    ret.type = input.name;
  } else if (isObject(input)) {
    if (input.schema) {
      // { sex: schema.declare({name: 'Sex', enums: []) } => {sex: {type: SexObject}}
      ret.type = input;
    } else {
      Object.assign(ret, input); // 赋值属性
      let inputType = input.type;
      if (isFunction(inputType)) {
        //  {userName: {type: String, comment: '用户名'}} =>
        ret.type = inputType.name;
      } else if (isString(inputType)) {
        //  {userName: {type: 'String|@comment:用户名'}}
        if (inputType.indexOf('|') !== -1) {
          // 合并解析后的内容
          Object.assign(ret, parseFieldStr(inputType));
        }
      } else if (isObject(inputType)) {
        if (inputType.schema) {
          // {sex: {type: schema.declare({name: 'Sex', enums: []) }}
          ret.type = inputType;
        } else {
          // {sex: {type: {name: 'Sex', enums: []} }
          ret.type = schema.declare(inputType, root);
        }
      }
    }
  }
  return ret;
}

function parseFieldStr(input) {
  if (propCache[input]) {
    return clone$1(propCache[input]);
  }
  let ret = Object.create(null);
  let strs = input.split('|');
  ret.type = strs.shift(); // 数据类型放在第一位
  strs.forEach(it => {
    if (it[0] === '@') {
      // 提取属性 @comment:text => {comment: 'text'}
      let map = it.substr(1, it.length).split(':');
      let key = map.shift();
      ret[lcword(key)] = map.length ? parseValue(map.shift()) : true; // 默认为 true
    } else {
      // 提取校验字段 checkes len,4,10 => [ "len", 4, 10 ]
      let map = it.split(',');
      let method = map.shift();
      if (method.length) {
        let checkes = ret.checkes || (ret.checkes = []);
        checkes.push([method].concat(map.map(parseValue)));
      }
    }
  });
  return clone$1(propCache[input] = ret);
}

const propCache = {};

function clone$1(val) {
  return JSON.parse(JSON.stringify(val));
}

function lcword(s) {
  return s.length ? s.substr(0, 1).toLowerCase() + s.substr(1, s.length) : s;
}

function parseValue(val) {
  if (val === 'true' || val === 'on') {
    return true;
  } else if (val === 'false' || val === 'off') {
    return false;
  }
  let ret;
  if (String(ret = parseInt(val)) === val) {
    return ret;
  } else if (String(ret = parseFloat(val)) === val) {
    return ret;
  }
  return val;
}

/**
 * 结构体类型
 */
/*
props: {
  name: String,
  name1: 'String',
  age: {
    type: Number
  },
  age1: 'Number',
  sex: 'Sex',
  sex1: {
    type: 'Sex',
    optional: true
  }
},
refs: {
  Sex: {
    enums: [
      {key: 'male', value: 1},
      {key: 'female', value: 2}
    ]
  }
}
 */

class SchemaStruct {
  constructor(opts, schema, root) {
    this.schemaType = SCHEMA_STURCT;
    this.schema = schema;
    this.fields = [];
    this.root = root || this;
    this.refs = root ? null : {}; // 使用root的refs
    objectAssign(this, opts, ['props, refs', 'export']);
    if (this.name) {
      schema.export(this);
    }
    let refs = opts.refs;
    for (let ref in refs) {
      this.addRef(refs[ref], ref);
    }
    let props = opts.props;
    for (let prop$$1 in props) {
      this.addField(props[prop$$1], prop$$1);
    }
  }
  addField(value, name) {
    let field = createField(value, this);
    field.name = name;
    updateField(field, this);
    this.fields.push(new SchemaField(field, this));
  }
  addRef(ref, name) {
    if (ref.export && !ref.name) {
      ref.name = name;
    }
    this.root.refs[name] = this.schema.declare(ref, this.root);
  }
  create(obj = {}) {
    let struct = {};
    let isObj = isObject(obj);
    this.fields.forEach(it => {
      struct[it.name] = isObj && it.name in obj ? it.create(obj[it.name]) : it.create();
    });
    return struct;
  }
  createRequest(obj) {
    return this.create(Object.assign(isObject(this.req) ? clone(this.req) : {}, obj));
  }
  createResponse(obj) {
    return this.create(Object.assign(isObject(this.res) ? clone(this.res) : {}, obj));
  }
  validate(obj, inPlace) {
    try {
      let ret = inPlace ? obj : {};
      for (let field of this.fields) {
        try {
          let val = field.validate(obj, inPlace);
          if (!isUndefined(val)) {
            ret[field.name] = val;
          }
        } catch (err) {
          (err.keys || (err.keys = [])).unshift(field.name);
          throw err;
        }
      }
      return ret;
    } catch (err) {
      if (err.keys) {
        err.path = err.keys.join('.');
      }
      throw err;
    }
  }
  check(obj) {
    return this.validate(obj, true);
  }
  checkThen(obj) {
    return Promise.resolve().then(() => {
      return this.check(obj);
    });
  }
  extract(obj) {
    return this.validate(obj, false);
  }
  extractThen(obj) {
    return Promise.resolve().then(() => {
      return this.extract(obj);
    });
  }
}

class Schema {
  constructor(opts) {
    this.opts = Object.assign({
      strict: true
    }, opts);
    applyTypes(this);
  }
  get isStrict() {
    return this.strict;
  }
  export(struct) {
    this[struct.name] = struct;
  }
  declare(opts, root) {
    if (isArray(opts)) {
      return opts.map(it => this.declare(it));
    } else if (isObject(opts)) {
      let ret = createSchemaType(this, opts, root);
      return ret;
    }
  }
  delay(fn) {
    if (this._promise) {
      this._promise.queue(fn);
    } else {
      let promise$$1 = {
        promise: Promise.resolve().then(() => {
          delete this._promise;
          let ret = Promise.resolve();
          promise$$1.queues.forEach(fn => ret.then(fn));
          return ret;
        }),
        queues: [fn],
        queue(fn) {
          promise$$1.queues.push(fn);
          return promise$$1;
        }
      };
      this._promise = promise$$1;
    }
  }
  ready(fn) {
    if (this._promise) {
      return fn ? this._promise.promise.then(fn) : this._promise.promise;
    } else {
      return Promise.resolve().then(fn);
    }
  }
}

function createSchemaType(schema, opts, root) {
  let struct;
  if (opts.enums) {
    struct = new SchemaEnum(opts, schema);
  } else if (opts.props) {
    struct = new SchemaStruct(opts, schema, root);
  } else {
    struct = new SchemaType(opts, schema);
  }
  return struct;
}

function stringVal(val) {
  if (isNumber(val) || isBoolean(val)) {
    return String(val);
  }
  return val;
}

function boolVal(val) {
  if (isNumber(val)) {
    return Boolean(val);
  }
  if (isString(val)) {
    if (val === 'true' || val === 'on') {
      return true;
    }
    return false;
  }
  return val;
}

function numberVal(val) {
  if (isBoolean(val)) {
    return Number(val);
  } else if (isString(val)) {
    if (val === 'true' || val === 'on') {
      return Number(true);
    } else if (val === 'false' || val === 'off') {
      return Number(false);
    } else {
      return Number(val);
    }
  }
  return val;
}

function arrayVal(val) {
  if (isString(val)) {
    if (val[0] === '[') {
      return JSON.parse(val);
    } else if (val.indexOf(',') !== -1) {
      return val.split(',');
    }
  }
  return val;
}

function objectVal(val) {
  if (isString(val)) {
    if (val[0] === '{') {
      return JSON.parse(val);
    }
  }
  return val;
}

var defaultSchema = [{ name: String, check: isString, parse: stringVal }, { name: Number, check: isNumber, parse: numberVal }, { name: Boolean, check: isBoolean, parse: boolVal }, { name: Array, check: isArray, parse: arrayVal }, { name: Object, check: isObject, parse: objectVal }, { name: 'Int', default: Number, check: isInt, parse: numberVal }, { name: 'Uint', default: Number, check: isUint, parse: numberVal }];

// 数字大小
function gt(value, [, arg1]) {
  return value > arg1;
}

function gte(value, [, arg1]) {
  return value >= arg1;
}

function lt(value, [, arg1]) {
  return value < arg1;
}

function lte(value, [, arg1]) {
  return value <= arg1;
}

// 包含
function $in(value, argv) {
  return argv.indexOf(value) > 0;
}

function nin(value, argv) {
  return argv.indexOf(value) <= 0;
}

// 字符串或数组长度
function lgt(value, argv) {
  return gt(value.length, argv);
}

function lgte(value, argv) {
  return gte(value.length, argv);
}

function llt(value, argv) {
  return lt(value.length, argv);
}

function llte(value, argv) {
  return lte(value.length, argv);
}

let regexpMaps = {};
// 正则表达式
function re(value, [, regexp]) {
  if (typeof regexp === 'string') {
    if (!regexpMaps[regexp]) {
      regexpMaps[regexp] = toRegExp(regexp);
    }
  }
  return (regexpMaps[regexp] || regexp).test(value);
}

// https://github.com/borela/str-to-regexp/blob/master/src/index.js
const COMPLEX_BEGIN = /^\s*\//;
const COMPLEX_REGEX = /^\s*\/(.+)\/(\w*)\s*$/;

function parseWithFlags(fullPattern) {
  try {
    let [, pattern, flags] = fullPattern.match(COMPLEX_REGEX);
    return flags ? new RegExp(pattern, flags) : new RegExp(pattern);
  } catch (e) {
    throw new SchemaInvalidRegexpError(fullPattern);
  }
}

function toRegExp(pattern) {
  return COMPLEX_BEGIN.test(pattern) ? parseWithFlags(pattern) : new RegExp(pattern);
}

var defaultCheck = {
  gt,
  gte,
  lt,
  lte,
  in: $in,
  nin,
  lgt,
  lgte,
  llt,
  llte,
  re
};

registerType(defaultSchema);
registerCheck(defaultCheck);

var index = new Schema();

exports.Schema = Schema;
exports.registerCheck = registerCheck;
exports.registerType = registerType;
exports['default'] = index;
});

var savUtil_cjs$2 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function toStringType(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

const isArray = Array.isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

function isString(arg) {
  return typeof arg === 'string';
}

function isFunction(arg) {
  return typeof arg === 'function';
}

function isObject(arg) {
  return toStringType(arg) === 'Object' && arg !== null;
}

function isNumber(arg) {
  return typeof arg === 'number' && !isNaN(arg);
}

function isInteger(arg) {
  return isNumber(arg) && parseInt(arg) === arg;
}

function isUndefined(arg) {
  return arg === undefined;
}

function isNull(arg) {
  return arg === null;
}

function isNan(arg) {
  return typeof arg === 'number' && isNaN(arg);
}

function isRegExp(arg) {
  return toStringType(arg) === 'RegExp';
}

function isDate(arg) {
  return toStringType(arg) === 'Date';
}

function typeValue(arg) {
  if (isNan(arg)) {
    return 'Nan';
  }
  switch (arg) {
    case undefined:
      return 'Undefined';
    case null:
      return 'Null';
    default:
      return toStringType(arg);
  }
}

const isInt = isInteger;
function isUint(arg) {
  return isInteger(arg) && arg >= 0;
}

function isAsync(func) {
  return isFunction(func) && func.constructor.name === 'AsyncFunction';
}

function isPromise(obj) {
  return obj && isFunction(obj.then);
}

let types = {
  isBoolean,
  isString,
  isNumber,
  isObject,
  isArray,
  isFunction,
  isRegExp,
  isDate,
  isNull,
  isUndefined,
  isInt,
  isUint
};

function defined(val) {
  return val !== 'undefined';
}

let probe = {
  Map: defined(typeof Map),
  Proxy: defined(typeof Proxy),
  MessageChannel: defined(typeof MessageChannel),
  localStorage: defined(typeof localStorage),
  XMLHttpRequest: defined(typeof XMLHttpRequest),
  MutationObserver: defined(typeof MutationObserver),
  FormData: defined(typeof FormData),
  window: defined(typeof window),
  document: defined(typeof document)
};

/*
 * @Description      URL解析
 * @File             url.js
 * @Auth             jetiny@hfjy.com
 */

// jsuri https://code.google.com/r/jonhwendell-jsuri/
// https://username:password@www.test.com:8080/path/index.html?this=that&some=thing#content
const REKeys = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
const URL_RE = /^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#/]*\.[^?#/.]+(?:[?#]|$)))*\/?)?([^?#/]*))(?:\?([^#]*))?(?:#(.*))?)/;

function parseUrl(str) {
  let _uri = {};
  let _m = URL_RE.exec(str || '');
  let _i = REKeys.length;
  while (_i--) {
    _uri[REKeys[_i]] = _m[_i] || '';
  }
  return _uri;
}

function stringifyUrl(uri) {
  let str = '';
  if (uri) {
    if (uri.host) {
      if (uri.protocol) str += uri.protocol + ':';
      str += '//';
      if (uri.user) str += uri.user + ':';
      if (uri.password) str += uri.password + '@';
      str += uri.host;
      if (uri.port) str += ':' + uri.port;
    }
    str += uri.path || '';
    if (uri.query) str += '?' + uri.query;
    if (uri.anchor) str += '#' + uri.anchor;
  }
  return str;
}

const Url = {
  parse: parseUrl,
  stringify: stringifyUrl
};

const _encode = encodeURIComponent;
const r20 = /%20/g;
const rbracket = /\[]$/;

function buildParams(prefix, obj, add) {
  if (Array.isArray(obj)) {
    // Serialize array item.
    obj.forEach(function (v, i) {
      if (rbracket.test(prefix)) {
        // Treat each array item as a scalar.
        add(prefix, v);
      } else {
        // Item is non-scalar (array or object), encode its numeric index.
        buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, add);
      }
    });
  } else if (isObject(obj)) {
    // Serialize object item.
    for (let name in obj) {
      buildParams(prefix + '[' + name + ']', obj[name], add);
    }
  } else {
    // Serialize scalar item.
    add(prefix, obj);
  }
}

// # http://stackoverflow.com/questions/1131630/the-param-inverse-function-in-javascript-jquery
// a[b]=1&a[c]=2&d[]=3&d[]=4&d[2][e]=5 <=> { a: { b: 1, c: 2 }, d: [ 3, 4, { e: 5 } ] }
function parseQuery(str, opts = {}) {
  let _querys = {};
  decodeURIComponent(str || '').replace(/\+/g, ' '
  // (optional no-capturing & )(key)=(value)
  ).replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, _name, _value) {
    if (_name) {
      let _path, _acc, _tmp, _ref;
      (_path = []).unshift(_name = _name.replace(/\[([^\]]*)]/g, function ($0, _k) {
        _path.push(_k);
        return '';
      }));
      _ref = _querys;
      for (let j = 0; j < _path.length - 1; j++) {
        _acc = _path[j];
        _tmp = _path[j + 1];
        if (!_ref[_acc]) {
          _ref[_acc] = _tmp === '' || /^[0-9]+$/.test(_tmp) ? [] : {};
        }
        _ref = _ref[_acc];
      }
      if (opts.boolval) {
        // first
        if (_value === 'true') {
          _value = true;
        } else if (_value === 'false') {
          _value = false;
        }
      } else if (opts.intval) {
        // skip "true" & "false"
        if (_tmp = parseInt(_value) === _value) {
          _value = _tmp;
        }
      }
      if ((_acc = _path[_path.length - 1]) === '') {
        _ref.push(_value);
      } else {
        _ref[_acc] = _value;
      }
    }
  });
  return _querys;
}

function stringifyQuery(query) {
  // # http://api.jquery.com/jQuery.param
  let _add = (key, value) => {
    /* jshint eqnull:true */
    _str.push(_encode(key) + '=' + (value === null || value === undefined ? '' : _encode(value)));
    // _str.push(( key ) + "=" +  (value == null ? "" : ( value )));
  };
  let _str = [];
  query || (query = {});
  for (let x in query) {
    buildParams(x, query[x], _add);
  }
  return _str.join('&').replace(r20, '+');
}

const Query = {
  parse: parseQuery,
  stringify: stringifyQuery
};

function extend() {
  // form jQuery & remove this
  let options, name, src, copy, copyIsArray, clone;
  let target = arguments[0] || {};
  let i = 1;
  let length = arguments.length;
  let deep = false;
  if (isBoolean(target)) {
    deep = target;
    target = arguments[i] || {};
    i++;
  }
  if (typeof target !== 'object' && !isFunction(target)) {
    target = {};
  }
  for (; i < length; i++) {
    options = arguments[i];
    /* jshint eqnull:true */
    if (options != null) {
      for (name in options) {
        src = target[name];
        copy = options[name];
        if (target !== copy) {
          if (deep && copy && (isObject(copy) || (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];
            } else {
              clone = src && isObject(src) ? src : {};
            }
            target[name] = extend(deep, clone, copy);
          } else {
            target[name] = copy;
          }
        }
      }
    }
  }
  return target;
}

function clone(val) {
  if (isArray(val)) {
    return extend(true, [], val);
  } else if (isObject(val)) {
    return extend(true, {}, val);
  }
  return extend(true, [], [val])[0];
}

/**
 * 对象或数组遍历
 * @param  {Array|Object} obj      要遍历的对象
 * @param  {Function} iterator 遍历函数，统一遵循值在前的模式
 * @param  {Mixed} context  上下文对象
 * @return {Mixed}          返回要遍历的对象
 *
 * @example
 * each(['a','b'], function(val, key){
 *     if (val == 'a') {
 *         console.log(val);
 *         return false;
 *     }
 * });
 */
function each(obj, iterator, context) {
  if (obj) {
    let _length = obj.length;
    let _key;
    if (_length === +_length) {
      // array like
      for (_key = 0; _key < _length; _key++) {
        if (iterator.call(context, obj[_key], _key) === false) {
          return obj;
        }
      }
    } else {
      // object
      for (_key in obj) {
        if (obj.hasOwnProperty(_key)) {
          if (iterator.call(context, obj[_key], _key) === false) {
            return obj;
          }
        }
      }
    }
  }
  return obj;
}

function prop(target, key, value) {
  Object.defineProperty(target, key, { value, writable: true, configurable: true });
}

function makePropFunc(target, propName) {
  if (!target._props_) {
    prop(target, '_props_', ['_props_']);
  }
  let props = target._props_;
  return (key, value) => {
    if (isObject(key)) {
      for (let name in key) {
        Object.defineProperty(target, name, { [`${propName}`]: key[name], writable: true, configurable: true });
        props.push(name);
      }
    } else {
      let descriptor = { [`${propName}`]: value, configurable: true };
      if (propName === 'value') {
        descriptor.writable = true;
      }
      Object.defineProperty(target, key, descriptor);
      props.push(key);
    }
  };
}

function delProps(target) {
  if (target._props_) {
    target._props_.forEach(it => {
      delete target[it];
    });
  }
}

function makeProp(ctx, name) {
  if (ctx.prop) {
    return ctx.prop;
  }
  let prop = makePropFunc(ctx, 'value');
  prop.getter = makePropFunc(ctx, 'get');
  prop.setter = makePropFunc(ctx, 'set');
  if (isString(name) || isUndefined(name)) {
    prop(name || 'ctx', ctx);
  }
  prop('prop', prop);
  return prop;
}

function bindEvent(target) {
  let _events = {};
  prop(target, 'on', (event, fn) => {
    (_events[event] || (_events[event] = [])).push(fn);
  });

  prop(target, 'before', (event, fn) => {
    (_events[event] || (_events[event] = [])).unshift(fn);
  });

  prop(target, 'off', (event, fn) => {
    if (_events[event]) {
      let list = _events[event];
      if (fn) {
        let pos = list.indexOf(fn);
        if (pos !== -1) {
          list.splice(pos, 1);
        }
      } else {
        delete _events[event];
      }
    }
  });

  prop(target, 'once', (event, fn) => {
    let once = (...args) => {
      target.off(event, fn);
      fn(...args);
    };
    target.on(event, once);
  });

  prop(target, 'subscribe', (event, fn) => {
    target.on(event, fn);
    return () => {
      target.off(event, fn);
    };
  });

  prop(target, 'emit', (event, ...args) => {
    if (_events[event]) {
      let list = _events[event].slice();
      let fn;
      while (fn = list.shift()) {
        fn(...args);
      }
    }
  });
}

function unique(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('array-unique expects an array.');
  }
  let len = arr.length;
  let i = -1;
  while (i++ < len) {
    let j = i + 1;
    for (; j < arr.length; ++j) {
      if (arr[i] === arr[j]) {
        arr.splice(j--, 1);
      }
    }
  }
  return arr;
}

function isPromiseLike(obj) {
  return !!(obj && obj.then);
}

function uuid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function guid() {
  return new Date().getTime().toString(32) + Math.floor(Math.random() * 10000000000).toString(32) + s4();
}

function shortId() {
  let a = Math.random() + new Date().getTime();
  return a.toString(16).replace('.', '');
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function inherits(ctor, SuperCtor, useSuper) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ctor.prototype, SuperCtor.prototype);
  } else {
    ctor.prototype = new SuperCtor();
    ctor.prototype.constructor = SuperCtor;
  }
  if (useSuper) {
    ctor.super_ = SuperCtor;
  }
  return ctor;
}

function strRepeat(s, n) {
  return new Array(Math.max(n || 0, 0) + 1).join(s);
}

function noop() {}

function splitEach(str, callback, chr, context) {
  return str.split(chr || ' ').forEach(callback, context);
}

function proxy(fn, context) {
  return function () {
    fn.apply(context, arguments);
  };
}

function formatDate(fmt, date) {
  if (!fmt) fmt = 'yyyy-MM-dd';
  if (!date) {
    date = new Date();
  } else {
    date = new Date(date);
  }
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds // 毫秒
    () };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return fmt;
}

let PROMISE = Promise;
let promise = {
  resolve: PROMISE.resolve.bind(PROMISE),
  reject: PROMISE.reject.bind(PROMISE),
  all: PROMISE.all.bind(PROMISE),
  then: (fn, reject) => {
    // @NOTICE deprecated to be removed next
    return new PROMISE(fn, reject);
  }
};

function toPromise(target, methods) {
  let dist = Object.create(null);
  methods.forEach(name => {
    dist[name] = (...args) => {
      return promise.then((resolve, reject) => {
        try {
          return resolve(target[name].apply(target, args));
        } catch (err) {
          return reject(err);
        }
      });
    };
  });
  return dist;
}

function next() {
  let promise = Promise.resolve();
  let ret = (resolve, reject) => {
    if (resolve || reject) {
      promise = promise.then(resolve, reject);
    }
    return promise;
  };
  return ret;
}

function convertCase(type, str) {
  switch (type) {
    case 'pascal':
      return pascalCase(str);
    case 'camel':
      return camelCase(str);
    case 'snake':
      return snakeCase(str);
    case 'hyphen':
      return hyphenCase(str);
    default:
      return str;
  }
}

/**
 * Camelize a hyphen-delmited string.
 */
const camelCaseRE = /[-_](\w)/g;
function camelCase(str) {
  return lcfirst(str.replace(camelCaseRE, (_, c) => c ? c.toUpperCase() : ''));
}

/**
 * Capitalize a string.
 */
function ucfirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * UnCapitalize a string.
 */
function lcfirst(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

const replaceAZRE = /([A-Z])/g;

/**
 * Hyphenate a camelCase string.
 */
function hyphenCase(str) {
  return camelCase(str).replace(replaceAZRE, '-$1').toLowerCase();
}

function snakeCase(str) {
  return camelCase(str).replace(replaceAZRE, '_$1').toLowerCase();
}

function pascalCase(str) {
  return ucfirst(camelCase(str));
}

/**
 * ajax 方法
 * @param  {Object}   opts 请求对象
 * {
 *     method:"GET",
 *     dataType:"JSON",
 *     headers:{},
 *     url:"",
 *     data:{},
 * }
 * @param  {Function} next 回调
 * @return {XMLHttpRequest}        xhr对象
 */
function ajax(opts, next) {
  let method = (opts.method || 'GET').toUpperCase();
  let dataType = (opts.dataType || 'JSON').toUpperCase();
  let timeout = opts.timeout;
  /* global XMLHttpRequest */
  let req = new XMLHttpRequest();
  let data = null;
  let isPost = method === 'POST';
  let isGet = method === 'GET';
  let isFormData = false;
  let emit = function (err, data, headers) {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    req.onload = req.onreadystatechange = req.onerror = null;
    if (next) {
      let tmp = next;
      next = null;
      tmp(err, data, headers);
    }
  };
  if (isGet) {
    if (opts.data) {
      let u = parseUrl(opts.url);
      let q = parseQuery(u.query);
      for (let x in opts.data) {
        q[x] = opts.data[x];
      }
      u.query = stringifyQuery(q);
      opts.url = stringifyUrl(u);
      opts.data = null;
    }
  } else if (isPost) {
    data = opts.data;
    /* global FormData */
    if (probe.FormData) {
      isFormData = data instanceof FormData;
      if (!isFormData) {
        data = stringifyQuery(data);
      }
    }
  }
  if (timeout) {
    timeout = setTimeout(function () {
      req.abort();
      emit(new Error('error_timeout'));
    }, timeout);
  }
  try {
    opts.xhr && opts.xhr(req);
    if (dataType === 'BINARY') {
      req.responseType = 'arraybuffer';
    }
    req.open(method, opts.url, true);
    if (opts.headers) {
      for (let x in opts.headers) {
        req.setRequestHeader(x, opts.headers[x]);
      }
    }
    if (isPost && !isFormData) {
      req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    if (opts.headerOnly) {
      req.onreadystatechange = function () {
        // console.log('state', req.readyState, req);
        if (req.readyState === 2) {
          // HEADERS_RECEIVED
          let headers = parseHeaders(req.getAllResponseHeaders(), opts.camelHeaders);
          req.abort();
          emit(null, undefined, headers);
        }
      };
    }
    req.onload = function () {
      // if(req.readyState != 4) return;
      if ([200, 304, 206, 0].indexOf(req.status) === -1) {
        // error
        emit(new Error('error_status_' + req.status));
      } else {
        let data = req.response;
        try {
          if (dataType === 'JSON') {
            data = JSON.parse(req.responseText);
          } else if (dataType === 'XML') {
            data = req.responseXML;
          } else if (dataType === 'TEXT') {
            data = req.responseText;
          } else if (dataType === 'BINARY') {
            let arrayBuffer = new Uint8Array(data);
            let str = '';
            for (let i = 0; i < arrayBuffer.length; i++) {
              str += String.fromCharCode(arrayBuffer[i]);
            }
            data = str;
          }
        } catch (err) {
          return emit(err);
        }
        emit(null, data, parseHeaders(req.getAllResponseHeaders(), opts.camelHeaders));
      }
    };
    req.onerror = function (e) {
      emit(new Error('error_network'));
    };
    // 进度
    if (opts.onprogress && !opts.headerOnly) {
      req.onloadend = req.onprogress = function (e) {
        let info = {
          total: e.total,
          loaded: e.loaded,
          percent: e.total ? Math.trunc(100 * e.loaded / e.total) : 0
        };
        if (e.type === 'loadend') {
          info.percent = 100;
        } else if (e.total === e.loaded) {
          return;
        }
        if (e.total < e.loaded) {
          info.total = info.loaded;
        }
        if (info.percent === 0) {
          return;
        }
        opts.onprogress(info);
      };
    }
    req.send(data);
  } catch (e) {
    emit(e);
  }
  return req;
}

function parseHeaders(str, camelHeaders) {
  let ret = {};
  str.trim().split('\n').forEach(function (key) {
    key = key.replace(/\r/g, '');
    let arr = key.split(': ');
    let name = arr.shift().toLowerCase();
    ret[camelHeaders ? camelCase(name) : name] = arr.shift();
  });
  return ret;
}

exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isString = isString;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isNumber = isNumber;
exports.isInteger = isInteger;
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isNan = isNan;
exports.isRegExp = isRegExp;
exports.isDate = isDate;
exports.typeValue = typeValue;
exports.isInt = isInt;
exports.isUint = isUint;
exports.isAsync = isAsync;
exports.isPromise = isPromise;
exports.types = types;
exports.probe = probe;
exports.parseUrl = parseUrl;
exports.stringifyUrl = stringifyUrl;
exports.Url = Url;
exports.parseQuery = parseQuery;
exports.stringifyQuery = stringifyQuery;
exports.Query = Query;
exports.clone = clone;
exports.each = each;
exports.extend = extend;
exports.bindEvent = bindEvent;
exports.unique = unique;
exports.isPromiseLike = isPromiseLike;
exports.uuid = uuid;
exports.guid = guid;
exports.shortId = shortId;
exports.inherits = inherits;
exports.strRepeat = strRepeat;
exports.noop = noop;
exports.splitEach = splitEach;
exports.proxy = proxy;
exports.formatDate = formatDate;
exports.promise = promise;
exports.toPromise = toPromise;
exports.next = next;
exports.ajax = ajax;
exports.convertCase = convertCase;
exports.camelCase = camelCase;
exports.ucfirst = ucfirst;
exports.lcfirst = lcfirst;
exports.hyphenCase = hyphenCase;
exports.snakeCase = snakeCase;
exports.pascalCase = pascalCase;
exports.prop = prop;
exports.delProps = delProps;
exports.makeProp = makeProp;
});

var savClient$1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var SavSchema = _interopDefault(savSchema);


// uri资源处理, 扁平化


let modalGroups = ['page', 'layout', 'api'];

function normalizeUris(groups) {
  let uris = {};
  for (let groupName in groups) {
    if (modalGroups.indexOf(groupName) === -1) {
      continue;
    }
    let group = groups[groupName];
    let groupRef = uris[groupName] = {
      // name: groupName,
      uri: groupName,
      // isGroup: true,
      props: group
      // prop(groupRef, 'uri', groupName)
      // prop(groupRef, 'props', group)
    };savUtil_cjs$2.prop(groupRef, 'name', groupName);
    savUtil_cjs$2.prop(groupRef, 'isGroup', true);
    for (let modalName in group) {
      let modal = group[modalName];
      let modalUri = `${groupName}.${modalName}`;
      let modalRef = uris[modalUri] = {
        // name: modalName,
        uri: modalUri,
        // parent: groupRef,
        // isModal: true,
        props: modal
        // prop(modalRef, 'uri', modalUri)
        // prop(modalRef, 'props', modal)
      };savUtil_cjs$2.prop(modalRef, 'name', modalName);
      savUtil_cjs$2.prop(modalRef, 'isModal', true);
      savUtil_cjs$2.prop(modalRef, 'parent', groupRef);
      for (let routeName in modal.routes) {
        let route = modal.routes[routeName];
        let routeUri = `${modalUri}.${routeName}`;
        let routeRef = {
          // name: routeName,
          uri: routeUri,
          // parent: modalRef,
          // isRoute: true,
          props: route
        };
        uris[routeUri] = routeRef;
        // prop(routeRef, 'uri', routeUri)
        // prop(routeRef, 'props', route)
        savUtil_cjs$2.prop(routeRef, 'name', routeName);
        savUtil_cjs$2.prop(routeRef, 'parent', modalRef);
        savUtil_cjs$2.prop(routeRef, 'isRoute', true);
      }
    }
  }
  savUtil_cjs$2.prop(groups, 'uris', uris);
  return uris;
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys);
  }

  if (index$1(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
  }

  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

let proto = Error.prototype;

proto.toJSON = function () {
  return Object.assign({
    message: this.message,
    type: this.constructor.name,
    stack: this.stack
  }, this);
};

// 功能尚未实现


// 没有匹配到路由


// 参数错误


// 调用错误

// 路由中间件


function normalizeRoutes({ uris }) {
  let routes = [];
  for (let uri in uris) {
    let ret = uris[uri];
    if (ret.isModal) {
      routes.push(getModalRoute(ret));
    } else if (ret.isRoute) {
      createRoute(ret);
    }
  }
  return routes;
}

const caseType = 'camel';
const prefix = '/';

function getDefaultMethod(modalGroup) {
  return modalGroup === 'api' ? 'POST' : 'GET';
}

function createRoute(ref) {
  if (!ref.route) {
    let { name, props, uri, parent } = ref;
    let parentRoute = getModalRoute(parent);
    let path = convertPath(props.path, caseType, name);
    let isRelative = path[0] !== '/';
    if (isRelative) {
      // 相对路由
      path = normalPath(parentRoute.path + (path ? '/' + path : ''));
    }
    let savRoute = {
      uri,
      path,
      method: props.method || getDefaultMethod(parent.parent.name)
    };
    if (isRelative) {
      parentRoute.relatives.push(savRoute);
    } else {
      parentRoute.absolutes.push(savRoute);
    }
    savUtil_cjs$2.prop(savRoute, 'regexp', index.compile(path));
    savUtil_cjs$2.prop(ref, 'route', savRoute);
  }
}

function getModalRoute(ref) {
  if (!ref.route) {
    let { name, props, uri } = ref;
    let routePrefix = props.prefix || '';
    if (routePrefix.length) {
      routePrefix = normalPath(routePrefix + '/');
    }
    let route = {
      uri,
      path: normalPath(prefix + routePrefix + convertPath(props.path, caseType, name)),
      relatives: [],
      absolutes: []
    };
    savUtil_cjs$2.prop(ref, 'route', route);
  }
  return ref.route;
}

function convertPath(path, caseType, name) {
  if (!savUtil_cjs$2.isString(path)) {
    path = savUtil_cjs$2.convertCase(caseType, name);
  }
  return path;
}

function normalPath(path) {
  return path.replace(/\/\//g, '/');
}

// Schema中间件


function normalizeSchema(payload, schema, isExport) {
  for (let name in payload.schema) {
    payload.schema[name].name = name;
    schema.declare(payload.schema[name]);
  }
  let { uris } = payload;
  for (let uri in uris) {
    let ret = uris[uri];
    if (ret.isRoute) {
      // 提取路由中的schema定义
      extractSchema(ret, 'request', schema, isExport);
      extractSchema(ret, 'response', schema, isExport);
    }
  }
}

const shortMaps = {
  request: 'Req',
  response: 'Res'
};

function extractSchema(ref, type, schema, isExport) {
  let value = ref.props[type];
  let structName = savUtil_cjs$2.pascalCase((shortMaps[type] + '_' + ref.parent.name + '_' + ref.name).replace(/\./g, '_'
  // let structName = pascalCase((shortMaps[type] + '_' + uri.replace('page.', '')).replace(/\./g, '_'))
  ));if (savUtil_cjs$2.isString(value)) {
    structName = value;
  } else if (savUtil_cjs$2.isObject(value)) {
    if (value.name) {
      structName = value.name;
    } else {
      value.name = structName;
    }
    schema.declare(value);
  }
  ref[type] = structName;
  if (isExport) {
    ref[`${type}Schema`] = schema[structName];
  }
}

function promiseNext() {
  let promise = Promise.resolve();
  let ret = (resolve, reject) => {
    if (resolve || reject) {
      promise = promise.then(resolve, reject);
    }
    return promise;
  };
  return ret;
}

function toJSON() {
  return Object.assign({
    message: this.message,
    type: this.constructor.name,
    stack: this.stack
  }, this);
}

function normalizeFetch(contract, flux) {
  flux.prop('fetchRoute', fetchRoute.bind(flux));
  let { actions, fetchs } = createActions(contract, flux);
  flux.prop('fetch', fetchs);
  flux.declare({
    actions: Object.assign({
      fetchPage
    }, actions)
  });
  flux.on('fetch', fetchFromMockState.bind(flux));
}

function fetchFromMockState(ctx) {
  let rule = ctx.rule;
  if (!rule) {
    return;
  }
  let mockState = this.opt('mockState');
  if (mockState) {
    if (!rule.responseSchema) {
      throw new Error(`uri ${rule.uri} has no responseSchma.`);
    }
    let mockData;
    if (this.contract.mock) {
      let mocks = this.contract.mock[rule.response];
      if (mocks) {
        mockData = mocks[0];
        ctx.mockData = mockData;
      }
    }
    ctx.fetch = () => {
      return Promise.resolve().then(() => {
        let data;
        if (ctx.mockData) {
          data = rule.responseSchema.create(ctx.mockData.props);
        } else {
          data = rule.responseSchema.createResponse();
        }
        return {
          data
        };
      });
    };
  }
}

function fetchPage({ flux, updateState }, data) {
  return flux.fetchRoute(data).then(({ data }) => {
    let newData = Object.assign({ error: {} }, data);
    return updateState(newData);
  }, err => {
    let error = toJSON.call(err);
    return updateState({ error }).then(() => {
      throw error;
    });
  });
}

function fetchUri({ flux, updateState }, data) {
  return flux.fetchRoute(data).then(({ data }) => {
    let newData = Object.assign({ error: {} }, data);
    return updateState(newData);
  }, err => {
    let error = toJSON.call(err);
    return updateState({ error }).then(() => {
      throw error;
    });
  });
}

function createActions(contract, flux) {
  let fetchs = {};
  let actions = {};
  let { uris } = contract;
  for (let uri in uris) {
    let ret = uris[uri];
    if (ret.isRoute) {
      let { props } = ret;
      let isPage = ret.isPage = uri.indexOf('page.') === 0;
      let { method } = props;
      if (!method) {
        method = isPage ? 'GET' : 'POST';
      }
      ret.method = method;
      let actionName = ret.actionName = method.toLowerCase() + savUtil_cjs$2.pascalCase(`${uri}`.replace(/\./g, '_'));
      fetchs[actionName] = data => {
        return fetchUri(flux, Object.assign({ uri }, data));
      };
      actions[actionName] = ({ fetch }, data) => {
        return fetch[actionName](data);
      };
    }
  }
  return { fetchs, actions };
}

function fetchRoute(opts) {
  // {uri, url, params, data} + route
  let ctx = Object.assign({
    headers: {},
    rule: this.contract.uris[opts.uri]
  }, opts);
  let next = promiseNext();
  try {
    if (ctx.rule) {
      let { props, route } = ctx.rule;
      if (props.timeout) {
        ctx.timeout = props.timeout;
      }
      if (!ctx.method) {
        ctx.method = route.method;
      }
      if (!ctx.url) {
        ctx.url = route.regexp(ctx.params);
      }
    }
    // url 合并
    if (!/^http(s)?:/.test(ctx.url) || !/^\/\//.test(ctx.url)) {
      // 指定协议或使用 //
      ctx.url = this.opt('baseUrl', '') + ctx.url;
    }
    ctx.fetch = ajaxFetch;
    this.emit('fetch', ctx, next // prepare
    );next(() => {
      return ctx.fetch(ctx).then(res => {
        if (!this.opt('mockState') && ctx.rule) {
          let rule = ctx.rule;
          if (rule.responseSchema) {
            try {
              rule.responseSchema.check(res.data);
            } catch (err) {
              if (this.opt('checkSlient')) {
                this.emit('error', err);
              } else {
                throw err;
              }
            }
          }
        }
        return res;
      });
    });
  } catch (err) {
    next(() => {
      throw err;
    });
  }
  return next();
}

function ajaxFetch(ctx) {
  return new Promise((resolve, reject) => {
    savUtil_cjs$2.ajax(ctx, (err, data, headers) => {
      if (err) {
        reject(err);
      }
      resolve({ data, headers, ctx });
    });
  });
}

function normalizeVue(contract, router, flux) {
  let { uris } = contract;
  let nameUris = {};
  for (let uri in uris) {
    let ret = uris[uri];
    if (ret.isRoute) {
      let name = savUtil_cjs$2.pascalCase(`${ret.parent.name}_${ret.name}`);
      nameUris[name] = uri;
    }
  }
  router.beforeEach((to, from, next) => {
    if (!to.name) {
      return next();
    }
    let uri = nameUris[to.name];
    if (!uri) {
      return next();
    }
    return flux.dispatch('fetchPage', {
      uri,
      url: to.fullPath,
      params: to.params,
      query: to.query
    }).then(next);
  });
  contract.nameUris = nameUris;
}

function normalizeState(contract, flux) {
  let state = {};
  let { uris } = contract;
  let dismiss = [];
  for (let uri in uris) {
    let ret = uris[uri];
    if (ret.isPage && ret.isRoute) {
      if (ret.responseSchema) {
        Object.assign(state, ret.responseSchema.createResponse());
      } else {
        dismiss.push({ uri, schema: ret.response });
      }
      if (ret.props.reqstate) {
        if (ret.requestSchema) {
          Object.assign(state, ret.requestSchema.createRequest());
        } else {
          dismiss.push({ uri, schema: ret.request });
        }
      }
    }
  }
  if (dismiss.length) {
    flux.emit('schemaRequired', dismiss);
  }
  flux.declare({ state });
}

function resolveContract({ contract, schema, flux, router, opts }) {
  schema || (schema = SavSchema);
  if (opts) {
    Object.assign(flux.opts, opts);
  }
  flux.prop('contract', contract);
  flux.prop('schema', schema);
  if (!savUtil_cjs$2.isString(flux.opts.baseUrl)) {
    flux.opts.baseUrl = router.options.baseUrl || '';
  }
  normalizeUris(contract);
  normalizeRoutes(contract);
  normalizeVue(contract, router, flux);
  normalizeSchema(contract, schema, true);
  normalizeFetch(contract, flux, router);
  return schema.ready().then(() => {
    if (typeof window !== 'undefined') {
      if (window.INIT_STATE) {
        flux.replaceState(window.INIT_STATE);
      }
    }
    normalizeState(contract, flux);
  });
}

exports.resolveContract = resolveContract;
});

var savClient_1 = savClient$1.resolveContract;

// @NOTICE This file is generated by sav-cli.

/* eslint quotes: ["off"] */
var Element$1 = {
  routes: {
    tabs: {
      method: "GET",
      title: "标签页"
    },
    buttons: {
      method: "GET",
      title: "按钮"
    }
  }
};

// @NOTICE This file is generated by sav-cli.

/* eslint quotes: ["off"] */
var Home$1 = {
  path: "",
  routes: {
    index: {
      method: "GET",
      path: "",
      title: "仪表板"
    }
  }
};

// @NOTICE This file is generated by sav-cli.

/* eslint quotes: ["off"] */
var Page$1 = {
  routes: {
    login: {
      method: "GET",
      title: "登录页面"
    },
    register: {
      method: "GET",
      title: "注册页面"
    }
  }
};

// @NOTICE This file is generated by sav-cli.

var index$1 = {
  Element: Element$1,
  Home: Home$1,
  Page: Page$1
};

// @NOTICE This file is generated by sav-cli.

/* eslint quotes: ["off"] */
var home = {
  ResHomeIndex: {
    props: {}
  }
};

// @NOTICE This file is generated by sav-cli.

/* eslint quotes: ["off"] */
var page = {
  ResPageLogin: {
    props: {
      username: "String",
      password: "String"
    },
    res: {
      username: "jetiny",
      password: "123465"
    }
  },
  ResPageRegister: {
    props: {
      username: "String",
      nickname: "String",
      password: "String",
      confirmPassword: "String"
    },
    res: {
      username: "jetiny",
      nickname: "helo",
      password: "123465",
      confirmPassword: "123456"
    }
  }
};

// @NOTICE This file is generated by sav-cli.

var index$3 = Object.assign({}, home, page);

// @NOTICE This file is generated by sav-cli.

var index = {
  page: index$1,
  schema: index$3
};

// @NOTICE This file is generated by sav-cli.

// 程序入口文件
// 宏定义采用注释的方式, 需要打包工具根据环境变量来匹配
// 区块宏 IS_DEV     是否开发环境
// 区块宏 IS_PROD    是否生产环境
// 区块宏 IS_MOCK    是否mock环境
// 区块宏 IS_LOCAL   是否本地环境

// @TODO 这里替换为真正的contract
// 定义路由

let routerMode;

// #if IS_LOCAL
routerMode = 'hash';
// #endif

if (!routerMode) {
  routerMode = 'history';
}

let router = new VueRouter(Object.assign({
  mode: routerMode,
  routes,
  linkActiveClass: 'is-active'
}));

let flux = new savFlux_cjs_1({
  // #if IS_DEV
  noProxy: true, // 开发模式下不使用Proxy方便调用dispatch
  // #endif
  // #if IS_MOCK
  mockState: true,
  // #endif
  strict: true
});

// flux服务在这里嵌入
// flux.declare(...)

// #if IS_DEV
// 打印一下未定义schema的接口
flux.on('schemaRequired', lists => {
  console.warn('schemaRequired', lists);
}
// #endif

);let ret = {};

savClient_1({ contract: index, flux, router }).then(() => {
  // 或者flux服务在这里嵌入
  // flux.declare(...)

  let vm = new Vue(Object.assign({ vaf: new savFlux_cjs_2({ flux }), router }, App));
  vm.$mount('#app'
  // #if IS_DEV
  );Object.assign(ret, {
    router,
    vm,
    flux
  }
  // #endif
  );
});

return ret;

}(VueRouter,Vue));
//# sourceMappingURL=client-entry.js.map
