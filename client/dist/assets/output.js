"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var $l = Object.defineProperty,
  jl = Object.defineProperties;
var Dl = Object.getOwnPropertyDescriptors;
var wi = Object.getOwnPropertySymbols;
var zl = Object.prototype.hasOwnProperty,
  Bl = Object.prototype.propertyIsEnumerable;
var ki = function ki(e, t, n) {
    return t in e ? $l(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }) : e[t] = n;
  },
  Ct = function Ct(e, t) {
    for (var n in t || (t = {})) zl.call(t, n) && ki(e, n, t[n]);
    if (wi) {
      var _iterator = _createForOfIteratorHelper(wi(t)),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var n = _step.value;
          Bl.call(t, n) && ki(e, n, t[n]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return e;
  },
  It = function It(e, t) {
    return jl(e, Dl(t));
  };
(function () {
  var t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var a = _step2.value;
      r(a);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  new MutationObserver(function (a) {
    var _iterator3 = _createForOfIteratorHelper(a),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var i = _step3.value;
        if (i.type === "childList") {
          var _iterator4 = _createForOfIteratorHelper(i.addedNodes),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var o = _step4.value;
              o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }).observe(document, {
    childList: !0,
    subtree: !0
  });
  function n(a) {
    var i = {};
    return a.integrity && (i.integrity = a.integrity), a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? i.credentials = "include" : a.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function r(a) {
    if (a.ep) return;
    a.ep = !0;
    var i = n(a);
    fetch(a.href, i);
  }
})();
function $a(e, t) {
  var n = Object.create(null),
    r = e.split(",");
  for (var a = 0; a < r.length; a++) n[r[a]] = !0;
  return t ? function (a) {
    return !!n[a.toLowerCase()];
  } : function (a) {
    return !!n[a];
  };
}
function jt(e) {
  if (U(e)) {
    var t = {};
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        a = ye(r) ? Kl(r) : jt(r);
      if (a) for (var i in a) t[i] = a[i];
    }
    return t;
  } else {
    if (ye(e)) return e;
    if (ue(e)) return e;
  }
}
var Hl = /;(?![^(]*\))/g,
  Ul = /:([^]+)/,
  Wl = new RegExp("\\/\\*.*?\\*\\/", "gs");
function Kl(e) {
  var t = {};
  return e.replace(Wl, "").split(Hl).forEach(function (n) {
    if (n) {
      var r = n.split(Ul);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Cr(e) {
  var t = "";
  if (ye(e)) t = e;else if (U(e)) for (var n = 0; n < e.length; n++) {
    var r = Cr(e[n]);
    r && (t += r + " ");
  } else if (ue(e)) for (var _n2 in e) e[_n2] && (t += _n2 + " ");
  return t.trim();
}
var Yl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ql = $a(Yl);
function Ko(e) {
  return !!e || e === "";
}
var De = function De(e) {
    return ye(e) ? e : e == null ? "" : U(e) || ue(e) && (e.toString === Xo || !W(e.toString)) ? JSON.stringify(e, Yo, 2) : String(e);
  },
  Yo = function Yo(e, t) {
    return t && t.__v_isRef ? Yo(e, t.value) : Jt(t) ? _defineProperty({}, "Map(".concat(t.size, ")"), _toConsumableArray(t.entries()).reduce(function (n, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        r = _ref2[0],
        a = _ref2[1];
      return n["".concat(r, " =>")] = a, n;
    }, {})) : qo(t) ? _defineProperty({}, "Set(".concat(t.size, ")"), _toConsumableArray(t.values())) : ue(t) && !U(t) && !Qo(t) ? String(t) : t;
  },
  le = {},
  Gt = [],
  Ve = function Ve() {},
  Vl = function Vl() {
    return !1;
  },
  Xl = /^on[^a-z]/,
  Ir = function Ir(e) {
    return Xl.test(e);
  },
  ja = function ja(e) {
    return e.startsWith("onUpdate:");
  },
  Pe = Object.assign,
  Da = function Da(e, t) {
    var n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Ql = Object.prototype.hasOwnProperty,
  Q = function Q(e, t) {
    return Ql.call(e, t);
  },
  U = Array.isArray,
  Jt = function Jt(e) {
    return Rr(e) === "[object Map]";
  },
  qo = function qo(e) {
    return Rr(e) === "[object Set]";
  },
  W = function W(e) {
    return typeof e == "function";
  },
  ye = function ye(e) {
    return typeof e == "string";
  },
  za = function za(e) {
    return _typeof(e) == "symbol";
  },
  ue = function ue(e) {
    return e !== null && _typeof(e) == "object";
  },
  Vo = function Vo(e) {
    return ue(e) && W(e.then) && W(e["catch"]);
  },
  Xo = Object.prototype.toString,
  Rr = function Rr(e) {
    return Xo.call(e);
  },
  Gl = function Gl(e) {
    return Rr(e).slice(8, -1);
  },
  Qo = function Qo(e) {
    return Rr(e) === "[object Object]";
  },
  Ba = function Ba(e) {
    return ye(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
  },
  fr = $a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  Tr = function Tr(e) {
    var t = Object.create(null);
    return function (n) {
      return t[n] || (t[n] = e(n));
    };
  },
  Jl = /-(\w)/g,
  rt = Tr(function (e) {
    return e.replace(Jl, function (t, n) {
      return n ? n.toUpperCase() : "";
    });
  }),
  Zl = /\B([A-Z])/g,
  un = Tr(function (e) {
    return e.replace(Zl, "-$1").toLowerCase();
  }),
  Nr = Tr(function (e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }),
  Xr = Tr(function (e) {
    return e ? "on".concat(Nr(e)) : "";
  }),
  In = function In(e, t) {
    return !Object.is(e, t);
  },
  Qr = function Qr(e, t) {
    for (var n = 0; n < e.length; n++) e[n](t);
  },
  gr = function gr(e, t, n) {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      value: n
    });
  },
  ec = function ec(e) {
    var t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
var Ei;
var tc = function tc() {
  return Ei || (Ei = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
};
var Fe;
var Go = /*#__PURE__*/function () {
  function Go() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    _classCallCheck(this, Go);
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Fe, !t && Fe && (this.index = (Fe.scopes || (Fe.scopes = [])).push(this) - 1);
  }
  _createClass(Go, [{
    key: "active",
    get: function get() {
      return this._active;
    }
  }, {
    key: "run",
    value: function run(t) {
      if (this._active) {
        var n = Fe;
        try {
          return Fe = this, t();
        } finally {
          Fe = n;
        }
      }
    }
  }, {
    key: "on",
    value: function on() {
      Fe = this;
    }
  }, {
    key: "off",
    value: function off() {
      Fe = this.parent;
    }
  }, {
    key: "stop",
    value: function stop(t) {
      if (this._active) {
        var n, r;
        for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
        for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
        if (this.scopes) for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
        if (!this.detached && this.parent && !t) {
          var a = this.parent.scopes.pop();
          a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
        }
        this.parent = void 0, this._active = !1;
      }
    }
  }]);
  return Go;
}();
function Jo(e) {
  return new Go(e);
}
function nc(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Fe;
  t && t.active && t.effects.push(e);
}
function Zo() {
  return Fe;
}
function rc(e) {
  Fe && Fe.cleanups.push(e);
}
var Ha = function Ha(e) {
    var t = new Set(e);
    return t.w = 0, t.n = 0, t;
  },
  es = function es(e) {
    return (e.w & kt) > 0;
  },
  ts = function ts(e) {
    return (e.n & kt) > 0;
  },
  ac = function ac(_ref5) {
    var e = _ref5.deps;
    if (e.length) for (var t = 0; t < e.length; t++) e[t].w |= kt;
  },
  ic = function ic(e) {
    var t = e.deps;
    if (t.length) {
      var n = 0;
      for (var r = 0; r < t.length; r++) {
        var a = t[r];
        es(a) && !ts(a) ? a["delete"](e) : t[n++] = a, a.w &= ~kt, a.n &= ~kt;
      }
      t.length = n;
    }
  },
  vr = new WeakMap();
var yn = 0,
  kt = 1;
var ca = 30;
var Ue;
var Dt = Symbol(""),
  fa = Symbol("");
var Ua = /*#__PURE__*/function () {
  function Ua(t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var r = arguments.length > 2 ? arguments[2] : undefined;
    _classCallCheck(this, Ua);
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, nc(this, r);
  }
  _createClass(Ua, [{
    key: "run",
    value: function run() {
      if (!this.active) return this.fn();
      var t = Ue,
        n = _t;
      for (; t;) {
        if (t === this) return;
        t = t.parent;
      }
      try {
        return this.parent = Ue, Ue = this, _t = !0, kt = 1 << ++yn, yn <= ca ? ac(this) : Si(this), this.fn();
      } finally {
        yn <= ca && ic(this), kt = 1 << --yn, Ue = this.parent, _t = n, this.parent = void 0, this.deferStop && this.stop();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      Ue === this ? this.deferStop = !0 : this.active && (Si(this), this.onStop && this.onStop(), this.active = !1);
    }
  }]);
  return Ua;
}();
function Si(e) {
  var t = e.deps;
  if (t.length) {
    for (var n = 0; n < t.length; n++) t[n]["delete"](e);
    t.length = 0;
  }
}
var _t = !0;
var ns = [];
function dn() {
  ns.push(_t), _t = !1;
}
function mn() {
  var e = ns.pop();
  _t = e === void 0 ? !0 : e;
}
function Te(e, t, n) {
  if (_t && Ue) {
    var r = vr.get(e);
    r || vr.set(e, r = new Map());
    var a = r.get(n);
    a || r.set(n, a = Ha()), rs(a);
  }
}
function rs(e, t) {
  var n = !1;
  yn <= ca ? ts(e) || (e.n |= kt, n = !es(e)) : n = !e.has(Ue), n && (e.add(Ue), Ue.deps.push(e));
}
function ot(e, t, n, r, a, i) {
  var o = vr.get(e);
  if (!o) return;
  var s = [];
  if (t === "clear") s = _toConsumableArray(o.values());else if (n === "length" && U(e)) {
    var l = Number(r);
    o.forEach(function (f, c) {
      (c === "length" || c >= l) && s.push(f);
    });
  } else switch (n !== void 0 && s.push(o.get(n)), t) {
    case "add":
      U(e) ? Ba(n) && s.push(o.get("length")) : (s.push(o.get(Dt)), Jt(e) && s.push(o.get(fa)));
      break;
    case "delete":
      U(e) || (s.push(o.get(Dt)), Jt(e) && s.push(o.get(fa)));
      break;
    case "set":
      Jt(e) && s.push(o.get(Dt));
      break;
  }
  if (s.length === 1) s[0] && ua(s[0]);else {
    var _l2 = [];
    var _iterator5 = _createForOfIteratorHelper(s),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var f = _step5.value;
        f && _l2.push.apply(_l2, _toConsumableArray(f));
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    ua(Ha(_l2));
  }
}
function ua(e, t) {
  var n = U(e) ? e : _toConsumableArray(e);
  var _iterator6 = _createForOfIteratorHelper(n),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var r = _step6.value;
      r.computed && Ai(r);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  var _iterator7 = _createForOfIteratorHelper(n),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var _r2 = _step7.value;
      _r2.computed || Ai(_r2);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
}
function Ai(e, t) {
  (e !== Ue || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function oc(e, t) {
  var n;
  return (n = vr.get(e)) === null || n === void 0 ? void 0 : n.get(t);
}
var sc = $a("__proto__,__v_isRef,__isVue"),
  as = new Set(Object.getOwnPropertyNames(Symbol).filter(function (e) {
    return e !== "arguments" && e !== "caller";
  }).map(function (e) {
    return Symbol[e];
  }).filter(za)),
  lc = Wa(),
  cc = Wa(!1, !0),
  fc = Wa(!0),
  Pi = uc();
function uc() {
  var e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach(function (t) {
    e[t] = function () {
      var r = G(this);
      for (var i = 0, o = this.length; i < o; i++) Te(r, "get", i + "");
      for (var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++) {
        n[_key] = arguments[_key];
      }
      var a = r[t].apply(r, n);
      return a === -1 || a === !1 ? r[t].apply(r, _toConsumableArray(n.map(G))) : a;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach(function (t) {
    e[t] = function () {
      dn();
      for (var _len2 = arguments.length, n = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        n[_key2] = arguments[_key2];
      }
      var r = G(this)[t].apply(this, n);
      return mn(), r;
    };
  }), e;
}
function dc(e) {
  var t = G(this);
  return Te(t, "has", e), t.hasOwnProperty(e);
}
function Wa() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  return function (r, a, i) {
    if (a === "__v_isReactive") return !e;
    if (a === "__v_isReadonly") return e;
    if (a === "__v_isShallow") return t;
    if (a === "__v_raw" && i === (e ? t ? Oc : cs : t ? ls : ss).get(r)) return r;
    var o = U(r);
    if (!e) {
      if (o && Q(Pi, a)) return Reflect.get(Pi, a, i);
      if (a === "hasOwnProperty") return dc;
    }
    var s = Reflect.get(r, a, i);
    return (za(a) ? as.has(a) : sc(a)) || (e || Te(r, "get", a), t) ? s : ge(s) ? o && Ba(a) ? s : s.value : ue(s) ? e ? fs(s) : pn(s) : s;
  };
}
var mc = is(),
  pc = is(!0);
function is() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
  return function (n, r, a, i) {
    var o = n[r];
    if (nn(o) && ge(o) && !ge(a)) return !1;
    if (!e && (!br(a) && !nn(a) && (o = G(o), a = G(a)), !U(n) && ge(o) && !ge(a))) return o.value = a, !0;
    var s = U(n) && Ba(r) ? Number(r) < n.length : Q(n, r),
      l = Reflect.set(n, r, a, i);
    return n === G(i) && (s ? In(a, o) && ot(n, "set", r, a) : ot(n, "add", r, a)), l;
  };
}
function hc(e, t) {
  var n = Q(e, t);
  e[t];
  var r = Reflect.deleteProperty(e, t);
  return r && n && ot(e, "delete", t, void 0), r;
}
function gc(e, t) {
  var n = Reflect.has(e, t);
  return (!za(t) || !as.has(t)) && Te(e, "has", t), n;
}
function vc(e) {
  return Te(e, "iterate", U(e) ? "length" : Dt), Reflect.ownKeys(e);
}
var os = {
    get: lc,
    set: mc,
    deleteProperty: hc,
    has: gc,
    ownKeys: vc
  },
  bc = {
    get: fc,
    set: function set(e, t) {
      return !0;
    },
    deleteProperty: function deleteProperty(e, t) {
      return !0;
    }
  },
  yc = Pe({}, os, {
    get: cc,
    set: pc
  }),
  Ka = function Ka(e) {
    return e;
  },
  Mr = function Mr(e) {
    return Reflect.getPrototypeOf(e);
  };
function Vn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
  e = e.__v_raw;
  var a = G(e),
    i = G(t);
  n || (t !== i && Te(a, "get", t), Te(a, "get", i));
  var _Mr = Mr(a),
    o = _Mr.has,
    s = r ? Ka : n ? Va : Rn;
  if (o.call(a, t)) return s(e.get(t));
  if (o.call(a, i)) return s(e.get(i));
  e !== a && e.get(t);
}
function Xn(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var n = this.__v_raw,
    r = G(n),
    a = G(e);
  return t || (e !== a && Te(r, "has", e), Te(r, "has", a)), e === a ? n.has(e) : n.has(e) || n.has(a);
}
function Qn(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  return e = e.__v_raw, !t && Te(G(e), "iterate", Dt), Reflect.get(e, "size", e);
}
function Oi(e) {
  e = G(e);
  var t = G(this);
  return Mr(t).has.call(t, e) || (t.add(e), ot(t, "add", e, e)), this;
}
function Ci(e, t) {
  t = G(t);
  var n = G(this),
    _Mr2 = Mr(n),
    r = _Mr2.has,
    a = _Mr2.get;
  var i = r.call(n, e);
  i || (e = G(e), i = r.call(n, e));
  var o = a.call(n, e);
  return n.set(e, t), i ? In(t, o) && ot(n, "set", e, t) : ot(n, "add", e, t), this;
}
function Ii(e) {
  var t = G(this),
    _Mr3 = Mr(t),
    n = _Mr3.has,
    r = _Mr3.get;
  var a = n.call(t, e);
  a || (e = G(e), a = n.call(t, e)), r && r.call(t, e);
  var i = t["delete"](e);
  return a && ot(t, "delete", e, void 0), i;
}
function Ri() {
  var e = G(this),
    t = e.size !== 0,
    n = e.clear();
  return t && ot(e, "clear", void 0, void 0), n;
}
function Gn(e, t) {
  return function (r, a) {
    var i = this,
      o = i.__v_raw,
      s = G(o),
      l = t ? Ka : e ? Va : Rn;
    return !e && Te(s, "iterate", Dt), o.forEach(function (f, c) {
      return r.call(a, l(f), l(c), i);
    });
  };
}
function Jn(e, t, n) {
  return function () {
    var a = this.__v_raw,
      i = G(a),
      o = Jt(i),
      s = e === "entries" || e === Symbol.iterator && o,
      l = e === "keys" && o,
      f = a[e].apply(a, arguments),
      c = n ? Ka : t ? Va : Rn;
    return !t && Te(i, "iterate", l ? fa : Dt), _defineProperty({
      next: function next() {
        var _f$next = f.next(),
          d = _f$next.value,
          p = _f$next.done;
        return p ? {
          value: d,
          done: p
        } : {
          value: s ? [c(d[0]), c(d[1])] : c(d),
          done: p
        };
      }
    }, Symbol.iterator, function () {
      return this;
    });
  };
}
function pt(e) {
  return function () {
    return e === "delete" ? !1 : this;
  };
}
function _c() {
  var e = {
      get: function get(i) {
        return Vn(this, i);
      },
      get size() {
        return Qn(this);
      },
      has: Xn,
      add: Oi,
      set: Ci,
      "delete": Ii,
      clear: Ri,
      forEach: Gn(!1, !1)
    },
    t = {
      get: function get(i) {
        return Vn(this, i, !1, !0);
      },
      get size() {
        return Qn(this);
      },
      has: Xn,
      add: Oi,
      set: Ci,
      "delete": Ii,
      clear: Ri,
      forEach: Gn(!1, !0)
    },
    n = {
      get: function get(i) {
        return Vn(this, i, !0);
      },
      get size() {
        return Qn(this, !0);
      },
      has: function has(i) {
        return Xn.call(this, i, !0);
      },
      add: pt("add"),
      set: pt("set"),
      "delete": pt("delete"),
      clear: pt("clear"),
      forEach: Gn(!0, !1)
    },
    r = {
      get: function get(i) {
        return Vn(this, i, !0, !0);
      },
      get size() {
        return Qn(this, !0);
      },
      has: function has(i) {
        return Xn.call(this, i, !0);
      },
      add: pt("add"),
      set: pt("set"),
      "delete": pt("delete"),
      clear: pt("clear"),
      forEach: Gn(!0, !0)
    };
  return ["keys", "values", "entries", Symbol.iterator].forEach(function (i) {
    e[i] = Jn(i, !1, !1), n[i] = Jn(i, !0, !1), t[i] = Jn(i, !1, !0), r[i] = Jn(i, !0, !0);
  }), [e, n, t, r];
}
var _c2 = _c(),
  _c3 = _slicedToArray(_c2, 4),
  xc = _c3[0],
  wc = _c3[1],
  kc = _c3[2],
  Ec = _c3[3];
function Ya(e, t) {
  var n = t ? e ? Ec : kc : e ? wc : xc;
  return function (r, a, i) {
    return a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(Q(n, a) && a in r ? n : r, a, i);
  };
}
var Sc = {
    get: Ya(!1, !1)
  },
  Ac = {
    get: Ya(!1, !0)
  },
  Pc = {
    get: Ya(!0, !1)
  },
  ss = new WeakMap(),
  ls = new WeakMap(),
  cs = new WeakMap(),
  Oc = new WeakMap();
function Cc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ic(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Cc(Gl(e));
}
function pn(e) {
  return nn(e) ? e : qa(e, !1, os, Sc, ss);
}
function Rc(e) {
  return qa(e, !1, yc, Ac, ls);
}
function fs(e) {
  return qa(e, !0, bc, Pc, cs);
}
function qa(e, t, n, r, a) {
  if (!ue(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  var i = a.get(e);
  if (i) return i;
  var o = Ic(e);
  if (o === 0) return e;
  var s = new Proxy(e, o === 2 ? r : n);
  return a.set(e, s), s;
}
function xt(e) {
  return nn(e) ? xt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function nn(e) {
  return !!(e && e.__v_isReadonly);
}
function br(e) {
  return !!(e && e.__v_isShallow);
}
function us(e) {
  return xt(e) || nn(e);
}
function G(e) {
  var t = e && e.__v_raw;
  return t ? G(t) : e;
}
function rn(e) {
  return gr(e, "__v_skip", !0), e;
}
var Rn = function Rn(e) {
    return ue(e) ? pn(e) : e;
  },
  Va = function Va(e) {
    return ue(e) ? fs(e) : e;
  };
function ds(e) {
  _t && Ue && (e = G(e), rs(e.dep || (e.dep = Ha())));
}
function ms(e, t) {
  e = G(e);
  var n = e.dep;
  n && ua(n);
}
function ge(e) {
  return !!(e && e.__v_isRef === !0);
}
function Xa(e) {
  return ps(e, !1);
}
function Tc(e) {
  return ps(e, !0);
}
function ps(e, t) {
  return ge(e) ? e : new Nc(e, t);
}
var Nc = /*#__PURE__*/function () {
  function Nc(t, n) {
    _classCallCheck(this, Nc);
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : G(t), this._value = n ? t : Rn(t);
  }
  _createClass(Nc, [{
    key: "value",
    get: function get() {
      return ds(this), this._value;
    },
    set: function set(t) {
      var n = this.__v_isShallow || br(t) || nn(t);
      t = n ? t : G(t), In(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Rn(t), ms(this));
    }
  }]);
  return Nc;
}();
function Z(e) {
  return ge(e) ? e.value : e;
}
var Mc = {
  get: function get(e, t, n) {
    return Z(Reflect.get(e, t, n));
  },
  set: function set(e, t, n, r) {
    var a = e[t];
    return ge(a) && !ge(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function hs(e) {
  return xt(e) ? e : new Proxy(e, Mc);
}
function Fc(e) {
  var t = U(e) ? new Array(e.length) : {};
  for (var n in e) t[n] = $c(e, n);
  return t;
}
var Lc = /*#__PURE__*/function () {
  function Lc(t, n, r) {
    _classCallCheck(this, Lc);
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0;
  }
  _createClass(Lc, [{
    key: "value",
    get: function get() {
      var t = this._object[this._key];
      return t === void 0 ? this._defaultValue : t;
    },
    set: function set(t) {
      this._object[this._key] = t;
    }
  }, {
    key: "dep",
    get: function get() {
      return oc(G(this._object), this._key);
    }
  }]);
  return Lc;
}();
function $c(e, t, n) {
  var r = e[t];
  return ge(r) ? r : new Lc(e, t, n);
}
var gs;
var jc = /*#__PURE__*/function () {
  function jc(t, n, r, a) {
    var _this = this;
    _classCallCheck(this, jc);
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[gs] = !1, this._dirty = !0, this.effect = new Ua(t, function () {
      _this._dirty || (_this._dirty = !0, ms(_this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !a, this.__v_isReadonly = r;
  }
  _createClass(jc, [{
    key: "value",
    get: function get() {
      var t = G(this);
      return ds(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
    },
    set: function set(t) {
      this._setter(t);
    }
  }]);
  return jc;
}();
gs = "__v_isReadonly";
function Dc(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  var r, a;
  var i = W(e);
  return i ? (r = e, a = Ve) : (r = e.get, a = e.set), new jc(r, a, i || !a, n);
}
function wt(e, t, n, r) {
  var a;
  try {
    a = r ? e.apply(void 0, _toConsumableArray(r)) : e();
  } catch (i) {
    Fr(i, t, n);
  }
  return a;
}
function Xe(e, t, n, r) {
  if (W(e)) {
    var i = wt(e, t, n, r);
    return i && Vo(i) && i["catch"](function (o) {
      Fr(o, t, n);
    }), i;
  }
  var a = [];
  for (var _i2 = 0; _i2 < e.length; _i2++) a.push(Xe(e[_i2], t, n, r));
  return a;
}
function Fr(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
  var a = t ? t.vnode : null;
  if (t) {
    var i = t.parent;
    var o = t.proxy,
      s = n;
    for (; i;) {
      var f = i.ec;
      if (f) {
        for (var c = 0; c < f.length; c++) if (f[c](e, o, s) === !1) return;
      }
      i = i.parent;
    }
    var l = t.appContext.config.errorHandler;
    if (l) {
      wt(l, null, 10, [e, o, s]);
      return;
    }
  }
  zc(e, n, a, r);
}
function zc(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
  console.error(e);
}
var Tn = !1,
  da = !1;
var Ee = [];
var et = 0;
var Zt = [];
var it = null,
  Mt = 0;
var vs = Promise.resolve();
var Qa = null;
function Ga(e) {
  var t = Qa || vs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Bc(e) {
  var t = et + 1,
    n = Ee.length;
  for (; t < n;) {
    var r = t + n >>> 1;
    Nn(Ee[r]) < e ? t = r + 1 : n = r;
  }
  return t;
}
function Ja(e) {
  (!Ee.length || !Ee.includes(e, Tn && e.allowRecurse ? et + 1 : et)) && (e.id == null ? Ee.push(e) : Ee.splice(Bc(e.id), 0, e), bs());
}
function bs() {
  !Tn && !da && (da = !0, Qa = vs.then(_s));
}
function Hc(e) {
  var t = Ee.indexOf(e);
  t > et && Ee.splice(t, 1);
}
function Uc(e) {
  U(e) ? Zt.push.apply(Zt, _toConsumableArray(e)) : (!it || !it.includes(e, e.allowRecurse ? Mt + 1 : Mt)) && Zt.push(e), bs();
}
function Ti(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Tn ? et + 1 : 0;
  for (; t < Ee.length; t++) {
    var n = Ee[t];
    n && n.pre && (Ee.splice(t, 1), t--, n());
  }
}
function ys(e) {
  if (Zt.length) {
    var t = _toConsumableArray(new Set(Zt));
    if (Zt.length = 0, it) {
      var _it;
      (_it = it).push.apply(_it, _toConsumableArray(t));
      return;
    }
    for (it = t, it.sort(function (n, r) {
      return Nn(n) - Nn(r);
    }), Mt = 0; Mt < it.length; Mt++) it[Mt]();
    it = null, Mt = 0;
  }
}
var Nn = function Nn(e) {
    return e.id == null ? 1 / 0 : e.id;
  },
  Wc = function Wc(e, t) {
    var n = Nn(e) - Nn(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function _s(e) {
  da = !1, Tn = !0, Ee.sort(Wc);
  var t = Ve;
  try {
    for (et = 0; et < Ee.length; et++) {
      var n = Ee[et];
      n && n.active !== !1 && wt(n, null, 14);
    }
  } finally {
    et = 0, Ee.length = 0, ys(), Tn = !1, Qa = null, (Ee.length || Zt.length) && _s();
  }
}
function Kc(e, t) {
  if (e.isUnmounted) return;
  var r = e.vnode.props || le;
  for (var _len3 = arguments.length, n = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    n[_key3 - 2] = arguments[_key3];
  }
  var a = n;
  var i = t.startsWith("update:"),
    o = i && t.slice(7);
  if (o && o in r) {
    var c = "".concat(o === "modelValue" ? "model" : o, "Modifiers"),
      _ref3 = r[c] || le,
      d = _ref3.number,
      p = _ref3.trim;
    p && (a = n.map(function (h) {
      return ye(h) ? h.trim() : h;
    })), d && (a = n.map(ec));
  }
  var s,
    l = r[s = Xr(t)] || r[s = Xr(rt(t))];
  !l && i && (l = r[s = Xr(un(t))]), l && Xe(l, e, 6, a);
  var f = r[s + "Once"];
  if (f) {
    if (!e.emitted) e.emitted = {};else if (e.emitted[s]) return;
    e.emitted[s] = !0, Xe(f, e, 6, a);
  }
}
function xs(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  var r = t.emitsCache,
    a = r.get(e);
  if (a !== void 0) return a;
  var i = e.emits;
  var o = {},
    s = !1;
  if (!W(e)) {
    var l = function l(f) {
      var c = xs(f, t, !0);
      c && (s = !0, Pe(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e["extends"] && l(e["extends"]), e.mixins && e.mixins.forEach(l);
  }
  return !i && !s ? (ue(e) && r.set(e, null), null) : (U(i) ? i.forEach(function (l) {
    return o[l] = null;
  }) : Pe(o, i), ue(e) && r.set(e, o), o);
}
function Lr(e, t) {
  return !e || !Ir(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Q(e, t[0].toLowerCase() + t.slice(1)) || Q(e, un(t)) || Q(e, t));
}
var Se = null,
  ws = null;
function yr(e) {
  var t = Se;
  return Se = e, ws = e && e.type.__scopeId || null, t;
}
function ur(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Se;
  var n = arguments.length > 2 ? arguments[2] : undefined;
  if (!t || e._n) return e;
  var r = function r() {
    r._d && Bi(-1);
    var i = yr(t);
    var o;
    try {
      o = e.apply(void 0, arguments);
    } finally {
      yr(i), r._d && Bi(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Gr(e) {
  var t = e.type,
    n = e.vnode,
    r = e.proxy,
    a = e.withProxy,
    i = e.props,
    _e$propsOptions = _slicedToArray(e.propsOptions, 1),
    o = _e$propsOptions[0],
    s = e.slots,
    l = e.attrs,
    f = e.emit,
    c = e.render,
    d = e.renderCache,
    p = e.data,
    h = e.setupState,
    k = e.ctx,
    O = e.inheritAttrs;
  var F, b;
  var x = yr(e);
  try {
    if (n.shapeFlag & 4) {
      var D = a || r;
      F = Ze(c.call(D, D, d, i, h, p, k)), b = l;
    } else {
      var _D = t;
      F = Ze(_D.length > 1 ? _D(i, {
        attrs: l,
        slots: s,
        emit: f
      }) : _D(i, null)), b = t.props ? l : Yc(l);
    }
  } catch (D) {
    kn.length = 0, Fr(D, e, 1), F = fe(Et);
  }
  var A = F;
  if (b && O !== !1) {
    var _D2 = Object.keys(b),
      _A = A,
      z = _A.shapeFlag;
    _D2.length && z & 7 && (o && _D2.some(ja) && (b = qc(b, o)), A = on(A, b));
  }
  return n.dirs && (A = on(A), A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs), n.transition && (A.transition = n.transition), F = A, yr(x), F;
}
var Yc = function Yc(e) {
    var t;
    for (var n in e) (n === "class" || n === "style" || Ir(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  qc = function qc(e, t) {
    var n = {};
    for (var r in e) (!ja(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Vc(e, t, n) {
  var r = e.props,
    a = e.children,
    i = e.component,
    o = t.props,
    s = t.children,
    l = t.patchFlag,
    f = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? Ni(r, o, f) : !!o;
    if (l & 8) {
      var c = t.dynamicProps;
      for (var d = 0; d < c.length; d++) {
        var p = c[d];
        if (o[p] !== r[p] && !Lr(f, p)) return !0;
      }
    }
  } else return (a || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Ni(r, o, f) : !0 : !!o;
  return !1;
}
function Ni(e, t, n) {
  var r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (var a = 0; a < r.length; a++) {
    var i = r[a];
    if (t[i] !== e[i] && !Lr(n, i)) return !0;
  }
  return !1;
}
function Xc(_ref4, n) {
  var e = _ref4.vnode,
    t = _ref4.parent;
  for (; t && t.subTree === e;) (e = t.vnode).el = n, t = t.parent;
}
var Qc = function Qc(e) {
  return e.__isSuspense;
};
function Gc(e, t) {
  var _t$effects;
  t && t.pendingBranch ? U(e) ? (_t$effects = t.effects).push.apply(_t$effects, _toConsumableArray(e)) : t.effects.push(e) : Uc(e);
}
function dr(e, t) {
  if (he) {
    var n = he.provides;
    var r = he.parent && he.parent.provides;
    r === n && (n = he.provides = Object.create(r)), n[e] = t;
  }
}
function nt(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  var r = he || Se;
  if (r) {
    var a = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
    if (a && e in a) return a[e];
    if (arguments.length > 1) return n && W(t) ? t.call(r.proxy) : t;
  }
}
var Zn = {};
function en(e, t, n) {
  return ks(e, t, n);
}
function ks(e, t) {
  var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : le,
    n = _ref6.immediate,
    r = _ref6.deep,
    a = _ref6.flush,
    i = _ref6.onTrack,
    o = _ref6.onTrigger;
  var s = Zo() === (he == null ? void 0 : he.scope) ? he : null;
  var l,
    f = !1,
    c = !1;
  if (ge(e) ? (l = function l() {
    return e.value;
  }, f = br(e)) : xt(e) ? (l = function l() {
    return e;
  }, r = !0) : U(e) ? (c = !0, f = e.some(function (A) {
    return xt(A) || br(A);
  }), l = function l() {
    return e.map(function (A) {
      if (ge(A)) return A.value;
      if (xt(A)) return Vt(A);
      if (W(A)) return wt(A, s, 2);
    });
  }) : W(e) ? t ? l = function l() {
    return wt(e, s, 2);
  } : l = function l() {
    if (!(s && s.isUnmounted)) return d && d(), Xe(e, s, 3, [p]);
  } : l = Ve, t && r) {
    var A = l;
    l = function l() {
      return Vt(A());
    };
  }
  var d,
    p = function p(A) {
      d = b.onStop = function () {
        wt(A, s, 4);
      };
    },
    h;
  if (Fn) if (p = Ve, t ? n && Xe(t, s, 3, [l(), c ? [] : void 0, p]) : l(), a === "sync") {
    var _A2 = Vf();
    h = _A2.__watcherHandles || (_A2.__watcherHandles = []);
  } else return Ve;
  var k = c ? new Array(e.length).fill(Zn) : Zn;
  var O = function O() {
    if (b.active) if (t) {
      var _A3 = b.run();
      (r || f || (c ? _A3.some(function (D, z) {
        return In(D, k[z]);
      }) : In(_A3, k))) && (d && d(), Xe(t, s, 3, [_A3, k === Zn ? void 0 : c && k[0] === Zn ? [] : k, p]), k = _A3);
    } else b.run();
  };
  O.allowRecurse = !!t;
  var F;
  a === "sync" ? F = O : a === "post" ? F = function F() {
    return Re(O, s && s.suspense);
  } : (O.pre = !0, s && (O.id = s.uid), F = function F() {
    return Ja(O);
  });
  var b = new Ua(l, F);
  t ? n ? O() : k = b.run() : a === "post" ? Re(b.run.bind(b), s && s.suspense) : b.run();
  var x = function x() {
    b.stop(), s && s.scope && Da(s.scope.effects, b);
  };
  return h && h.push(x), x;
}
function Jc(e, t, n) {
  var r = this.proxy,
    a = ye(e) ? e.includes(".") ? Es(r, e) : function () {
      return r[e];
    } : e.bind(r, r);
  var i;
  W(t) ? i = t : (i = t.handler, n = t);
  var o = he;
  sn(this);
  var s = ks(a, i.bind(r), n);
  return o ? sn(o) : zt(), s;
}
function Es(e, t) {
  var n = t.split(".");
  return function () {
    var r = e;
    for (var a = 0; a < n.length && r; a++) r = r[n[a]];
    return r;
  };
}
function Vt(e, t) {
  if (!ue(e) || e.__v_skip || (t = t || new Set(), t.has(e))) return e;
  if (t.add(e), ge(e)) Vt(e.value, t);else if (U(e)) for (var n = 0; n < e.length; n++) Vt(e[n], t);else if (qo(e) || Jt(e)) e.forEach(function (n) {
    Vt(n, t);
  });else if (Qo(e)) for (var _n3 in e) Vt(e[_n3], t);
  return e;
}
function ft(e) {
  return W(e) ? {
    setup: e,
    name: e.name
  } : e;
}
var xn = function xn(e) {
    return !!e.type.__asyncLoader;
  },
  Ss = function Ss(e) {
    return e.type.__isKeepAlive;
  };
function Zc(e, t) {
  As(e, "a", t);
}
function ef(e, t) {
  As(e, "da", t);
}
function As(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : he;
  var r = e.__wdc || (e.__wdc = function () {
    var a = n;
    for (; a;) {
      if (a.isDeactivated) return;
      a = a.parent;
    }
    return e();
  });
  if ($r(t, r, n), n) {
    var a = n.parent;
    for (; a && a.parent;) Ss(a.parent.vnode) && tf(r, t, n, a), a = a.parent;
  }
}
function tf(e, t, n, r) {
  var a = $r(t, e, r, !0);
  Ps(function () {
    Da(r[t], a);
  }, n);
}
function $r(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : he;
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
  if (n) {
    var a = n[e] || (n[e] = []),
      i = t.__weh || (t.__weh = function () {
        if (n.isUnmounted) return;
        dn(), sn(n);
        for (var _len4 = arguments.length, o = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          o[_key4] = arguments[_key4];
        }
        var s = Xe(t, n, e, o);
        return zt(), mn(), s;
      });
    return r ? a.unshift(i) : a.push(i), i;
  }
}
var ut = function ut(e) {
    return function (t) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : he;
      return (!Fn || e === "sp") && $r(e, function () {
        return t.apply(void 0, arguments);
      }, n);
    };
  },
  nf = ut("bm"),
  rf = ut("m"),
  af = ut("bu"),
  of = ut("u"),
  sf = ut("bum"),
  Ps = ut("um"),
  lf = ut("sp"),
  cf = ut("rtg"),
  ff = ut("rtc");
function uf(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : he;
  $r("ec", e, t);
}
function Rt(e, t, n, r) {
  var a = e.dirs,
    i = t && t.dirs;
  for (var o = 0; o < a.length; o++) {
    var s = a[o];
    i && (s.oldValue = i[o].value);
    var l = s.dir[r];
    l && (dn(), Xe(l, n, 8, [e.el, s, e, t]), mn());
  }
}
var Os = "components";
function Cs(e, t) {
  return mf(Os, e, !0, t) || e;
}
var df = Symbol();
function mf(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
  var a = Se || he;
  if (a) {
    var i = a.type;
    if (e === Os) {
      var s = Kf(i, !1);
      if (s && (s === t || s === rt(t) || s === Nr(rt(t)))) return i;
    }
    var o = Mi(a[e] || i[e], t) || Mi(a.appContext[e], t);
    return !o && r ? i : o;
  }
}
function Mi(e, t) {
  return e && (e[t] || e[rt(t)] || e[Nr(rt(t))]);
}
function pf(e, t, n, r) {
  var a;
  var i = n && n[r];
  if (U(e) || ye(e)) {
    a = new Array(e.length);
    for (var o = 0, s = e.length; o < s; o++) a[o] = t(e[o], o, void 0, i && i[o]);
  } else if (typeof e == "number") {
    a = new Array(e);
    for (var _o2 = 0; _o2 < e; _o2++) a[_o2] = t(_o2 + 1, _o2, void 0, i && i[_o2]);
  } else if (ue(e)) {
    if (e[Symbol.iterator]) a = Array.from(e, function (o, s) {
      return t(o, s, void 0, i && i[s]);
    });else {
      var _o3 = Object.keys(e);
      a = new Array(_o3.length);
      for (var _s2 = 0, l = _o3.length; _s2 < l; _s2++) {
        var f = _o3[_s2];
        a[_s2] = t(e[f], f, _s2, i && i[_s2]);
      }
    }
  } else a = [];
  return n && (n[r] = a), a;
}
function _r(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var r = arguments.length > 3 ? arguments[3] : undefined;
  var a = arguments.length > 4 ? arguments[4] : undefined;
  if (Se.isCE || Se.parent && xn(Se.parent) && Se.parent.isCE) return t !== "default" && (n.name = t), fe("slot", n, r && r());
  var i = e[t];
  i && i._c && (i._d = !1), me();
  var o = i && Is(i(n)),
    s = an(Le, {
      key: n.key || o && o.key || "_".concat(t)
    }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
  return !a && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), i && i._c && (i._d = !0), s;
}
function Is(e) {
  return e.some(function (t) {
    return wr(t) ? !(t.type === Et || t.type === Le && !Is(t.children)) : !0;
  }) ? e : null;
}
var ma = function ma(e) {
    return e ? Bs(e) ? ni(e) || e.proxy : ma(e.parent) : null;
  },
  wn = Pe(Object.create(null), {
    $: function $(e) {
      return e;
    },
    $el: function $el(e) {
      return e.vnode.el;
    },
    $data: function $data(e) {
      return e.data;
    },
    $props: function $props(e) {
      return e.props;
    },
    $attrs: function $attrs(e) {
      return e.attrs;
    },
    $slots: function $slots(e) {
      return e.slots;
    },
    $refs: function $refs(e) {
      return e.refs;
    },
    $parent: function $parent(e) {
      return ma(e.parent);
    },
    $root: function $root(e) {
      return ma(e.root);
    },
    $emit: function $emit(e) {
      return e.emit;
    },
    $options: function $options(e) {
      return Za(e);
    },
    $forceUpdate: function $forceUpdate(e) {
      return e.f || (e.f = function () {
        return Ja(e.update);
      });
    },
    $nextTick: function $nextTick(e) {
      return e.n || (e.n = Ga.bind(e.proxy));
    },
    $watch: function $watch(e) {
      return Jc.bind(e);
    }
  }),
  Jr = function Jr(e, t) {
    return e !== le && !e.__isScriptSetup && Q(e, t);
  },
  hf = {
    get: function get(_ref7, t) {
      var e = _ref7._;
      var n = e.ctx,
        r = e.setupState,
        a = e.data,
        i = e.props,
        o = e.accessCache,
        s = e.type,
        l = e.appContext;
      var f;
      if (t[0] !== "$") {
        var h = o[t];
        if (h !== void 0) switch (h) {
          case 1:
            return r[t];
          case 2:
            return a[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        } else {
          if (Jr(r, t)) return o[t] = 1, r[t];
          if (a !== le && Q(a, t)) return o[t] = 2, a[t];
          if ((f = e.propsOptions[0]) && Q(f, t)) return o[t] = 3, i[t];
          if (n !== le && Q(n, t)) return o[t] = 4, n[t];
          pa && (o[t] = 0);
        }
      }
      var c = wn[t];
      var d, p;
      if (c) return t === "$attrs" && Te(e, "get", t), c(e);
      if ((d = s.__cssModules) && (d = d[t])) return d;
      if (n !== le && Q(n, t)) return o[t] = 4, n[t];
      if (p = l.config.globalProperties, Q(p, t)) return p[t];
    },
    set: function set(_ref8, t, n) {
      var e = _ref8._;
      var r = e.data,
        a = e.setupState,
        i = e.ctx;
      return Jr(a, t) ? (a[t] = n, !0) : r !== le && Q(r, t) ? (r[t] = n, !0) : Q(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
    },
    has: function has(_ref9, o) {
      var _ref9$_ = _ref9._,
        e = _ref9$_.data,
        t = _ref9$_.setupState,
        n = _ref9$_.accessCache,
        r = _ref9$_.ctx,
        a = _ref9$_.appContext,
        i = _ref9$_.propsOptions;
      var s;
      return !!n[o] || e !== le && Q(e, o) || Jr(t, o) || (s = i[0]) && Q(s, o) || Q(r, o) || Q(wn, o) || Q(a.config.globalProperties, o);
    },
    defineProperty: function defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : Q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
var pa = !0;
function gf(e) {
  var t = Za(e),
    n = e.proxy,
    r = e.ctx;
  pa = !1, t.beforeCreate && Fi(t.beforeCreate, e, "bc");
  var a = t.data,
    i = t.computed,
    o = t.methods,
    s = t.watch,
    l = t.provide,
    f = t.inject,
    c = t.created,
    d = t.beforeMount,
    p = t.mounted,
    h = t.beforeUpdate,
    k = t.updated,
    O = t.activated,
    F = t.deactivated,
    b = t.beforeDestroy,
    x = t.beforeUnmount,
    A = t.destroyed,
    D = t.unmounted,
    z = t.render,
    J = t.renderTracked,
    B = t.renderTriggered,
    Y = t.errorCaptured,
    se = t.serverPrefetch,
    xe = t.expose,
    Oe = t.inheritAttrs,
    je = t.components,
    mt = t.directives,
    Ne = t.filters;
  if (f && vf(f, r, null, e.appContext.config.unwrapInjectedRef), o) for (var re in o) {
    var te = o[re];
    W(te) && (r[re] = te.bind(n));
  }
  if (a) {
    var _re = a.call(n, n);
    ue(_re) && (e.data = pn(_re));
  }
  if (pa = !0, i) {
    var _loop = function _loop() {
      var te = i[_re2],
        ze = W(te) ? te.bind(n, n) : W(te.get) ? te.get.bind(n, n) : Ve,
        Ot = !W(te) && W(te.set) ? te.set.bind(n) : Ve,
        Be = ce({
          get: ze,
          set: Ot
        });
      Object.defineProperty(r, _re2, {
        enumerable: !0,
        configurable: !0,
        get: function get() {
          return Be.value;
        },
        set: function set(Ce) {
          return Be.value = Ce;
        }
      });
    };
    for (var _re2 in i) {
      _loop();
    }
  }
  if (s) for (var _re3 in s) Rs(s[_re3], r, n, _re3);
  if (l) {
    var _re4 = W(l) ? l.call(n) : l;
    Reflect.ownKeys(_re4).forEach(function (te) {
      dr(te, _re4[te]);
    });
  }
  c && Fi(c, e, "c");
  function ve(re, te) {
    U(te) ? te.forEach(function (ze) {
      return re(ze.bind(n));
    }) : te && re(te.bind(n));
  }
  if (ve(nf, d), ve(rf, p), ve(af, h), ve(of, k), ve(Zc, O), ve(ef, F), ve(uf, Y), ve(ff, J), ve(cf, B), ve(sf, x), ve(Ps, D), ve(lf, se), U(xe)) if (xe.length) {
    var _re5 = e.exposed || (e.exposed = {});
    xe.forEach(function (te) {
      Object.defineProperty(_re5, te, {
        get: function get() {
          return n[te];
        },
        set: function set(ze) {
          return n[te] = ze;
        }
      });
    });
  } else e.exposed || (e.exposed = {});
  z && e.render === Ve && (e.render = z), Oe != null && (e.inheritAttrs = Oe), je && (e.components = je), mt && (e.directives = mt);
}
function vf(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Ve;
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
  U(e) && (e = ha(e));
  var _loop2 = function _loop2() {
    var i = e[a];
    var o;
    ue(i) ? "default" in i ? o = nt(i.from || a, i["default"], !0) : o = nt(i.from || a) : o = nt(i), ge(o) && r ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: function get() {
        return o.value;
      },
      set: function set(s) {
        return o.value = s;
      }
    }) : t[a] = o;
  };
  for (var a in e) {
    _loop2();
  }
}
function Fi(e, t, n) {
  Xe(U(e) ? e.map(function (r) {
    return r.bind(t.proxy);
  }) : e.bind(t.proxy), t, n);
}
function Rs(e, t, n, r) {
  var a = r.includes(".") ? Es(n, r) : function () {
    return n[r];
  };
  if (ye(e)) {
    var i = t[e];
    W(i) && en(a, i);
  } else if (W(e)) en(a, e.bind(n));else if (ue(e)) if (U(e)) e.forEach(function (i) {
    return Rs(i, t, n, r);
  });else {
    var _i3 = W(e.handler) ? e.handler.bind(n) : t[e.handler];
    W(_i3) && en(a, _i3, e);
  }
}
function Za(e) {
  var t = e.type,
    n = t.mixins,
    r = t["extends"],
    _e$appContext = e.appContext,
    a = _e$appContext.mixins,
    i = _e$appContext.optionsCache,
    o = _e$appContext.config.optionMergeStrategies,
    s = i.get(t);
  var l;
  return s ? l = s : !a.length && !n && !r ? l = t : (l = {}, a.length && a.forEach(function (f) {
    return xr(l, f, o, !0);
  }), xr(l, t, o)), ue(t) && i.set(t, l), l;
}
function xr(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
  var a = t.mixins,
    i = t["extends"];
  i && xr(e, i, n, !0), a && a.forEach(function (o) {
    return xr(e, o, n, !0);
  });
  for (var o in t) if (!(r && o === "expose")) {
    var s = bf[o] || n && n[o];
    e[o] = s ? s(e[o], t[o]) : t[o];
  }
  return e;
}
var bf = {
  data: Li,
  props: Nt,
  emits: Nt,
  methods: Nt,
  computed: Nt,
  beforeCreate: Ae,
  created: Ae,
  beforeMount: Ae,
  mounted: Ae,
  beforeUpdate: Ae,
  updated: Ae,
  beforeDestroy: Ae,
  beforeUnmount: Ae,
  destroyed: Ae,
  unmounted: Ae,
  activated: Ae,
  deactivated: Ae,
  errorCaptured: Ae,
  serverPrefetch: Ae,
  components: Nt,
  directives: Nt,
  watch: _f,
  provide: Li,
  inject: yf
};
function Li(e, t) {
  return t ? e ? function () {
    return Pe(W(e) ? e.call(this, this) : e, W(t) ? t.call(this, this) : t);
  } : t : e;
}
function yf(e, t) {
  return Nt(ha(e), ha(t));
}
function ha(e) {
  if (U(e)) {
    var t = {};
    for (var n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ae(e, t) {
  return e ? _toConsumableArray(new Set([].concat(e, t))) : t;
}
function Nt(e, t) {
  return e ? Pe(Pe(Object.create(null), e), t) : t;
}
function _f(e, t) {
  if (!e) return t;
  if (!t) return e;
  var n = Pe(Object.create(null), e);
  for (var r in t) n[r] = Ae(e[r], t[r]);
  return n;
}
function xf(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
  var a = {},
    i = {};
  gr(i, Dr, 1), e.propsDefaults = Object.create(null), Ts(e, t, a, i);
  for (var o in e.propsOptions[0]) o in a || (a[o] = void 0);
  n ? e.props = r ? a : Rc(a) : e.type.props ? e.props = a : e.props = i, e.attrs = i;
}
function wf(e, t, n, r) {
  var a = e.props,
    i = e.attrs,
    o = e.vnode.patchFlag,
    s = G(a),
    _e$propsOptions2 = _slicedToArray(e.propsOptions, 1),
    l = _e$propsOptions2[0];
  var f = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      var c = e.vnode.dynamicProps;
      for (var d = 0; d < c.length; d++) {
        var p = c[d];
        if (Lr(e.emitsOptions, p)) continue;
        var h = t[p];
        if (l) {
          if (Q(i, p)) h !== i[p] && (i[p] = h, f = !0);else {
            var k = rt(p);
            a[k] = ga(l, s, k, h, e, !1);
          }
        } else h !== i[p] && (i[p] = h, f = !0);
      }
    }
  } else {
    Ts(e, t, a, i) && (f = !0);
    var _c4;
    for (var _d2 in s) (!t || !Q(t, _d2) && ((_c4 = un(_d2)) === _d2 || !Q(t, _c4))) && (l ? n && (n[_d2] !== void 0 || n[_c4] !== void 0) && (a[_d2] = ga(l, s, _d2, void 0, e, !0)) : delete a[_d2]);
    if (i !== s) for (var _d3 in i) (!t || !Q(t, _d3)) && (delete i[_d3], f = !0);
  }
  f && ot(e, "set", "$attrs");
}
function Ts(e, t, n, r) {
  var _e$propsOptions3 = _slicedToArray(e.propsOptions, 2),
    a = _e$propsOptions3[0],
    i = _e$propsOptions3[1];
  var o = !1,
    s;
  if (t) for (var l in t) {
    if (fr(l)) continue;
    var f = t[l];
    var c = void 0;
    a && Q(a, c = rt(l)) ? !i || !i.includes(c) ? n[c] = f : (s || (s = {}))[c] = f : Lr(e.emitsOptions, l) || (!(l in r) || f !== r[l]) && (r[l] = f, o = !0);
  }
  if (i) {
    var _l3 = G(n),
      _f2 = s || le;
    for (var _c5 = 0; _c5 < i.length; _c5++) {
      var d = i[_c5];
      n[d] = ga(a, _l3, d, _f2[d], e, !Q(_f2, d));
    }
  }
  return o;
}
function ga(e, t, n, r, a, i) {
  var o = e[n];
  if (o != null) {
    var s = Q(o, "default");
    if (s && r === void 0) {
      var l = o["default"];
      if (o.type !== Function && W(l)) {
        var f = a.propsDefaults;
        n in f ? r = f[n] : (sn(a), r = f[n] = l.call(null, t), zt());
      } else r = l;
    }
    o[0] && (i && !s ? r = !1 : o[1] && (r === "" || r === un(n)) && (r = !0));
  }
  return r;
}
function Ns(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  var r = t.propsCache,
    a = r.get(e);
  if (a) return a;
  var i = e.props,
    o = {},
    s = [];
  var l = !1;
  if (!W(e)) {
    var c = function c(d) {
      l = !0;
      var _Ns = Ns(d, t, !0),
        _Ns2 = _slicedToArray(_Ns, 2),
        p = _Ns2[0],
        h = _Ns2[1];
      Pe(o, p), h && s.push.apply(s, _toConsumableArray(h));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e["extends"] && c(e["extends"]), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !l) return ue(e) && r.set(e, Gt), Gt;
  if (U(i)) for (var _c6 = 0; _c6 < i.length; _c6++) {
    var d = rt(i[_c6]);
    $i(d) && (o[d] = le);
  } else if (i) for (var _c7 in i) {
    var _d4 = rt(_c7);
    if ($i(_d4)) {
      var p = i[_c7],
        h = o[_d4] = U(p) || W(p) ? {
          type: p
        } : Object.assign({}, p);
      if (h) {
        var k = zi(Boolean, h.type),
          O = zi(String, h.type);
        h[0] = k > -1, h[1] = O < 0 || k < O, (k > -1 || Q(h, "default")) && s.push(_d4);
      }
    }
  }
  var f = [o, s];
  return ue(e) && r.set(e, f), f;
}
function $i(e) {
  return e[0] !== "$";
}
function ji(e) {
  var t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Di(e, t) {
  return ji(e) === ji(t);
}
function zi(e, t) {
  return U(t) ? t.findIndex(function (n) {
    return Di(n, e);
  }) : W(t) && Di(t, e) ? 0 : -1;
}
var Ms = function Ms(e) {
    return e[0] === "_" || e === "$stable";
  },
  ei = function ei(e) {
    return U(e) ? e.map(Ze) : [Ze(e)];
  },
  kf = function kf(e, t, n) {
    if (t._n) return t;
    var r = ur(function () {
      return ei(t.apply(void 0, arguments));
    }, n);
    return r._c = !1, r;
  },
  Fs = function Fs(e, t, n) {
    var r = e._ctx;
    var _loop3 = function _loop3() {
      if (Ms(a)) return 1; // continue
      var i = e[a];
      if (W(i)) t[a] = kf(a, i, r);else if (i != null) {
        var o = ei(i);
        t[a] = function () {
          return o;
        };
      }
    };
    for (var a in e) {
      if (_loop3()) continue;
    }
  },
  Ls = function Ls(e, t) {
    var n = ei(t);
    e.slots["default"] = function () {
      return n;
    };
  },
  Ef = function Ef(e, t) {
    if (e.vnode.shapeFlag & 32) {
      var n = t._;
      n ? (e.slots = G(t), gr(t, "_", n)) : Fs(t, e.slots = {});
    } else e.slots = {}, t && Ls(e, t);
    gr(e.slots, Dr, 1);
  },
  Sf = function Sf(e, t, n) {
    var r = e.vnode,
      a = e.slots;
    var i = !0,
      o = le;
    if (r.shapeFlag & 32) {
      var s = t._;
      s ? n && s === 1 ? i = !1 : (Pe(a, t), !n && s === 1 && delete a._) : (i = !t.$stable, Fs(t, a)), o = t;
    } else t && (Ls(e, t), o = {
      "default": 1
    });
    if (i) for (var _s3 in a) !Ms(_s3) && !(_s3 in o) && delete a[_s3];
  };
function $s() {
  return {
    app: null,
    config: {
      isNativeTag: Vl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}
var Af = 0;
function Pf(e, t) {
  return function (r) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    W(r) || (r = Object.assign({}, r)), a != null && !ue(a) && (a = null);
    var i = $s(),
      o = new Set();
    var s = !1;
    var l = i.app = {
      _uid: Af++,
      _component: r,
      _props: a,
      _container: null,
      _context: i,
      _instance: null,
      version: Xf,
      get config() {
        return i.config;
      },
      set config(f) {},
      use: function use(f) {
        for (var _len5 = arguments.length, c = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          c[_key5 - 1] = arguments[_key5];
        }
        return o.has(f) || (f && W(f.install) ? (o.add(f), f.install.apply(f, [l].concat(c))) : W(f) && (o.add(f), f.apply(void 0, [l].concat(c)))), l;
      },
      mixin: function mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), l;
      },
      component: function component(f, c) {
        return c ? (i.components[f] = c, l) : i.components[f];
      },
      directive: function directive(f, c) {
        return c ? (i.directives[f] = c, l) : i.directives[f];
      },
      mount: function mount(f, c, d) {
        if (!s) {
          var p = fe(r, a);
          return p.appContext = i, c && t ? t(p, f) : e(p, f, d), s = !0, l._container = f, f.__vue_app__ = l, ni(p.component) || p.component.proxy;
        }
      },
      unmount: function unmount() {
        s && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide: function provide(f, c) {
        return i.provides[f] = c, l;
      }
    };
    return l;
  };
}
function va(e, t, n, r) {
  var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
  if (U(e)) {
    e.forEach(function (p, h) {
      return va(p, t && (U(t) ? t[h] : t), n, r, a);
    });
    return;
  }
  if (xn(r) && !a) return;
  var i = r.shapeFlag & 4 ? ni(r.component) || r.component.proxy : r.el,
    o = a ? null : i,
    s = e.i,
    l = e.r,
    f = t && t.r,
    c = s.refs === le ? s.refs = {} : s.refs,
    d = s.setupState;
  if (f != null && f !== l && (ye(f) ? (c[f] = null, Q(d, f) && (d[f] = null)) : ge(f) && (f.value = null)), W(l)) wt(l, s, 12, [o, c]);else {
    var p = ye(l),
      h = ge(l);
    if (p || h) {
      var k = function k() {
        if (e.f) {
          var O = p ? Q(d, l) ? d[l] : c[l] : l.value;
          a ? U(O) && Da(O, i) : U(O) ? O.includes(i) || O.push(i) : p ? (c[l] = [i], Q(d, l) && (d[l] = c[l])) : (l.value = [i], e.k && (c[e.k] = l.value));
        } else p ? (c[l] = o, Q(d, l) && (d[l] = o)) : h && (l.value = o, e.k && (c[e.k] = o));
      };
      o ? (k.id = -1, Re(k, n)) : k();
    }
  }
}
var Re = Gc;
function Of(e) {
  return Cf(e);
}
function Cf(e, t) {
  var _t2, _t3;
  var n = tc();
  n.__VUE__ = !0;
  var r = e.insert,
    a = e.remove,
    i = e.patchProp,
    o = e.createElement,
    s = e.createText,
    l = e.createComment,
    f = e.setText,
    c = e.setElementText,
    d = e.parentNode,
    p = e.nextSibling,
    _e$setScopeId = e.setScopeId,
    h = _e$setScopeId === void 0 ? Ve : _e$setScopeId,
    k = e.insertStaticContent,
    O = function O(u, m, g) {
      var v = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var _ = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var S = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      var I = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
      var E = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
      var P = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : !!m.dynamicChildren;
      if (u === m) return;
      u && !vn(u, m) && (v = C(u), Ce(u, _, S, !0), u = null), m.patchFlag === -2 && (P = !1, m.dynamicChildren = null);
      var w = m.type,
        $ = m.ref,
        N = m.shapeFlag;
      switch (w) {
        case jr:
          F(u, m, g, v);
          break;
        case Et:
          b(u, m, g, v);
          break;
        case Zr:
          u == null && x(m, g, v, I);
          break;
        case Le:
          je(u, m, g, v, _, S, I, E, P);
          break;
        default:
          N & 1 ? z(u, m, g, v, _, S, I, E, P) : N & 6 ? mt(u, m, g, v, _, S, I, E, P) : (N & 64 || N & 128) && w.process(u, m, g, v, _, S, I, E, P, X);
      }
      $ != null && _ && va($, u && u.ref, S, m || u, !m);
    },
    F = function F(u, m, g, v) {
      if (u == null) r(m.el = s(m.children), g, v);else {
        var _ = m.el = u.el;
        m.children !== u.children && f(_, m.children);
      }
    },
    b = function b(u, m, g, v) {
      u == null ? r(m.el = l(m.children || ""), g, v) : m.el = u.el;
    },
    x = function x(u, m, g, v) {
      var _k = k(u.children, m, g, v, u.el, u.anchor);
      var _k2 = _slicedToArray(_k, 2);
      u.el = _k2[0];
      u.anchor = _k2[1];
    },
    A = function A(_ref10, g, v) {
      var u = _ref10.el,
        m = _ref10.anchor;
      var _;
      for (; u && u !== m;) _ = p(u), r(u, g, v), u = _;
      r(m, g, v);
    },
    D = function D(_ref11) {
      var u = _ref11.el,
        m = _ref11.anchor;
      var g;
      for (; u && u !== m;) g = p(u), a(u), u = g;
      a(m);
    },
    z = function z(u, m, g, v, _, S, I, E, P) {
      I = I || m.type === "svg", u == null ? J(m, g, v, _, S, I, E, P) : se(u, m, _, S, I, E, P);
    },
    J = function J(u, m, g, v, _, S, I, E) {
      var P, w;
      var $ = u.type,
        N = u.props,
        j = u.shapeFlag,
        H = u.transition,
        q = u.dirs;
      if (P = u.el = o(u.type, S, N && N.is, N), j & 8 ? c(P, u.children) : j & 16 && Y(u.children, P, null, v, _, S && $ !== "foreignObject", I, E), q && Rt(u, null, v, "created"), B(P, u, u.scopeId, I, v), N) {
        for (var ne in N) ne !== "value" && !fr(ne) && i(P, ne, null, N[ne], S, u.children, v, _, R);
        "value" in N && i(P, "value", null, N.value), (w = N.onVnodeBeforeMount) && Je(w, v, u);
      }
      q && Rt(u, null, v, "beforeMount");
      var ae = (!_ || _ && !_.pendingBranch) && H && !H.persisted;
      ae && H.beforeEnter(P), r(P, m, g), ((w = N && N.onVnodeMounted) || ae || q) && Re(function () {
        w && Je(w, v, u), ae && H.enter(P), q && Rt(u, null, v, "mounted");
      }, _);
    },
    B = function B(u, m, g, v, _) {
      if (g && h(u, g), v) for (var S = 0; S < v.length; S++) h(u, v[S]);
      if (_) {
        var _S = _.subTree;
        if (m === _S) {
          var I = _.vnode;
          B(u, I, I.scopeId, I.slotScopeIds, _.parent);
        }
      }
    },
    Y = function Y(u, m, g, v, _, S, I, E) {
      var P = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      for (var w = P; w < u.length; w++) {
        var $ = u[w] = E ? vt(u[w]) : Ze(u[w]);
        O(null, $, m, g, v, _, S, I, E);
      }
    },
    se = function se(u, m, g, v, _, S, I) {
      var E = m.el = u.el;
      var P = m.patchFlag,
        w = m.dynamicChildren,
        $ = m.dirs;
      P |= u.patchFlag & 16;
      var N = u.props || le,
        j = m.props || le;
      var H;
      g && Tt(g, !1), (H = j.onVnodeBeforeUpdate) && Je(H, g, m, u), $ && Rt(m, u, g, "beforeUpdate"), g && Tt(g, !0);
      var q = _ && m.type !== "foreignObject";
      if (w ? xe(u.dynamicChildren, w, E, g, v, q, S) : I || te(u, m, E, null, g, v, q, S, !1), P > 0) {
        if (P & 16) Oe(E, m, N, j, g, v, _);else if (P & 2 && N["class"] !== j["class"] && i(E, "class", null, j["class"], _), P & 4 && i(E, "style", N.style, j.style, _), P & 8) {
          var ae = m.dynamicProps;
          for (var ne = 0; ne < ae.length; ne++) {
            var be = ae[ne],
              He = N[be],
              Wt = j[be];
            (Wt !== He || be === "value") && i(E, be, He, Wt, _, u.children, g, v, R);
          }
        }
        P & 1 && u.children !== m.children && c(E, m.children);
      } else !I && w == null && Oe(E, m, N, j, g, v, _);
      ((H = j.onVnodeUpdated) || $) && Re(function () {
        H && Je(H, g, m, u), $ && Rt(m, u, g, "updated");
      }, v);
    },
    xe = function xe(u, m, g, v, _, S, I) {
      for (var E = 0; E < m.length; E++) {
        var P = u[E],
          w = m[E],
          $ = P.el && (P.type === Le || !vn(P, w) || P.shapeFlag & 70) ? d(P.el) : g;
        O(P, w, $, null, v, _, S, I, !0);
      }
    },
    Oe = function Oe(u, m, g, v, _, S, I) {
      if (g !== v) {
        if (g !== le) for (var E in g) !fr(E) && !(E in v) && i(u, E, g[E], null, I, m.children, _, S, R);
        for (var _E in v) {
          if (fr(_E)) continue;
          var P = v[_E],
            w = g[_E];
          P !== w && _E !== "value" && i(u, _E, w, P, I, m.children, _, S, R);
        }
        "value" in v && i(u, "value", g.value, v.value);
      }
    },
    je = function je(u, m, g, v, _, S, I, E, P) {
      var w = m.el = u ? u.el : s(""),
        $ = m.anchor = u ? u.anchor : s("");
      var N = m.patchFlag,
        j = m.dynamicChildren,
        H = m.slotScopeIds;
      H && (E = E ? E.concat(H) : H), u == null ? (r(w, g, v), r($, g, v), Y(m.children, g, $, _, S, I, E, P)) : N > 0 && N & 64 && j && u.dynamicChildren ? (xe(u.dynamicChildren, j, g, _, S, I, E), (m.key != null || _ && m === _.subTree) && js(u, m, !0)) : te(u, m, g, $, _, S, I, E, P);
    },
    mt = function mt(u, m, g, v, _, S, I, E, P) {
      m.slotScopeIds = E, u == null ? m.shapeFlag & 512 ? _.ctx.activate(m, g, v, I, P) : Ne(m, g, v, _, S, I, P) : we(u, m, P);
    },
    Ne = function Ne(u, m, g, v, _, S, I) {
      var E = u.component = Df(u, v, _);
      if (Ss(u) && (E.ctx.renderer = X), Bf(E), E.asyncDep) {
        if (_ && _.registerDep(E, ve), !u.el) {
          var P = E.subTree = fe(Et);
          b(null, P, m, g);
        }
        return;
      }
      ve(E, u, m, g, _, S, I);
    },
    we = function we(u, m, g) {
      var v = m.component = u.component;
      if (Vc(u, m, g)) {
        if (v.asyncDep && !v.asyncResolved) {
          re(v, m, g);
          return;
        } else v.next = m, Hc(v.update), v.update();
      } else m.el = u.el, v.vnode = m;
    },
    ve = function ve(u, m, g, v, _, S, I) {
      var E = function E() {
          if (u.isMounted) {
            var $ = u.next,
              N = u.bu,
              j = u.u,
              H = u.parent,
              q = u.vnode,
              ae = $,
              ne;
            Tt(u, !1), $ ? ($.el = q.el, re(u, $, I)) : $ = q, N && Qr(N), (ne = $.props && $.props.onVnodeBeforeUpdate) && Je(ne, H, $, q), Tt(u, !0);
            var be = Gr(u),
              He = u.subTree;
            u.subTree = be, O(He, be, d(He.el), C(He), u, _, S), $.el = be.el, ae === null && Xc(u, be.el), j && Re(j, _), (ne = $.props && $.props.onVnodeUpdated) && Re(function () {
              return Je(ne, H, $, q);
            }, _);
          } else {
            var _$;
            var _m2 = m,
              _N = _m2.el,
              _j = _m2.props,
              _H = u.bm,
              _q = u.m,
              _ae = u.parent,
              _ne = xn(m);
            if (Tt(u, !1), _H && Qr(_H), !_ne && (_$ = _j && _j.onVnodeBeforeMount) && Je(_$, _ae, m), Tt(u, !0), _N && K) {
              var _be = function _be() {
                u.subTree = Gr(u), K(_N, u.subTree, u, _, null);
              };
              _ne ? m.type.__asyncLoader().then(function () {
                return !u.isUnmounted && _be();
              }) : _be();
            } else {
              var _be2 = u.subTree = Gr(u);
              O(null, _be2, g, v, u, _, S), m.el = _be2.el;
            }
            if (_q && Re(_q, _), !_ne && (_$ = _j && _j.onVnodeMounted)) {
              var _be3 = m;
              Re(function () {
                return Je(_$, _ae, _be3);
              }, _);
            }
            (m.shapeFlag & 256 || _ae && xn(_ae.vnode) && _ae.vnode.shapeFlag & 256) && u.a && Re(u.a, _), u.isMounted = !0, m = g = v = null;
          }
        },
        P = u.effect = new Ua(E, function () {
          return Ja(w);
        }, u.scope),
        w = u.update = function () {
          return P.run();
        };
      w.id = u.uid, Tt(u, !0), w();
    },
    re = function re(u, m, g) {
      m.component = u;
      var v = u.vnode.props;
      u.vnode = m, u.next = null, wf(u, m.props, v, g), Sf(u, m.children, g), dn(), Ti(), mn();
    },
    te = function te(u, m, g, v, _, S, I, E) {
      var P = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : !1;
      var w = u && u.children,
        $ = u ? u.shapeFlag : 0,
        N = m.children,
        j = m.patchFlag,
        H = m.shapeFlag;
      if (j > 0) {
        if (j & 128) {
          Ot(w, N, g, v, _, S, I, E, P);
          return;
        } else if (j & 256) {
          ze(w, N, g, v, _, S, I, E, P);
          return;
        }
      }
      H & 8 ? ($ & 16 && R(w, _, S), N !== w && c(g, N)) : $ & 16 ? H & 16 ? Ot(w, N, g, v, _, S, I, E, P) : R(w, _, S, !0) : ($ & 8 && c(g, ""), H & 16 && Y(N, g, v, _, S, I, E, P));
    },
    ze = function ze(u, m, g, v, _, S, I, E, P) {
      u = u || Gt, m = m || Gt;
      var w = u.length,
        $ = m.length,
        N = Math.min(w, $);
      var j;
      for (j = 0; j < N; j++) {
        var H = m[j] = P ? vt(m[j]) : Ze(m[j]);
        O(u[j], H, g, null, _, S, I, E, P);
      }
      w > $ ? R(u, _, S, !0, !1, N) : Y(m, g, v, _, S, I, E, P, N);
    },
    Ot = function Ot(u, m, g, v, _, S, I, E, P) {
      var w = 0;
      var $ = m.length;
      var N = u.length - 1,
        j = $ - 1;
      for (; w <= N && w <= j;) {
        var H = u[w],
          q = m[w] = P ? vt(m[w]) : Ze(m[w]);
        if (vn(H, q)) O(H, q, g, null, _, S, I, E, P);else break;
        w++;
      }
      for (; w <= N && w <= j;) {
        var _H2 = u[N],
          _q2 = m[j] = P ? vt(m[j]) : Ze(m[j]);
        if (vn(_H2, _q2)) O(_H2, _q2, g, null, _, S, I, E, P);else break;
        N--, j--;
      }
      if (w > N) {
        if (w <= j) {
          var _H3 = j + 1,
            _q3 = _H3 < $ ? m[_H3].el : v;
          for (; w <= j;) O(null, m[w] = P ? vt(m[w]) : Ze(m[w]), g, _q3, _, S, I, E, P), w++;
        }
      } else if (w > j) for (; w <= N;) Ce(u[w], _, S, !0), w++;else {
        var _H4 = w,
          _q4 = w,
          ae = new Map();
        for (w = _q4; w <= j; w++) {
          var Me = m[w] = P ? vt(m[w]) : Ze(m[w]);
          Me.key != null && ae.set(Me.key, w);
        }
        var ne,
          be = 0;
        var He = j - _q4 + 1;
        var Wt = !1,
          yi = 0;
        var gn = new Array(He);
        for (w = 0; w < He; w++) gn[w] = 0;
        for (w = _H4; w <= N; w++) {
          var _Me = u[w];
          if (be >= He) {
            Ce(_Me, _, S, !0);
            continue;
          }
          var Ge = void 0;
          if (_Me.key != null) Ge = ae.get(_Me.key);else for (ne = _q4; ne <= j; ne++) if (gn[ne - _q4] === 0 && vn(_Me, m[ne])) {
            Ge = ne;
            break;
          }
          Ge === void 0 ? Ce(_Me, _, S, !0) : (gn[Ge - _q4] = w + 1, Ge >= yi ? yi = Ge : Wt = !0, O(_Me, m[Ge], g, null, _, S, I, E, P), be++);
        }
        var _i = Wt ? If(gn) : Gt;
        for (ne = _i.length - 1, w = He - 1; w >= 0; w--) {
          var _Me2 = _q4 + w,
            _Ge = m[_Me2],
            xi = _Me2 + 1 < $ ? m[_Me2 + 1].el : v;
          gn[w] === 0 ? O(null, _Ge, g, xi, _, S, I, E, P) : Wt && (ne < 0 || w !== _i[ne] ? Be(_Ge, g, xi, 2) : ne--);
        }
      }
    },
    Be = function Be(u, m, g, v) {
      var _ = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var S = u.el,
        I = u.type,
        E = u.transition,
        P = u.children,
        w = u.shapeFlag;
      if (w & 6) {
        Be(u.component.subTree, m, g, v);
        return;
      }
      if (w & 128) {
        u.suspense.move(m, g, v);
        return;
      }
      if (w & 64) {
        I.move(u, m, g, X);
        return;
      }
      if (I === Le) {
        r(S, m, g);
        for (var N = 0; N < P.length; N++) Be(P[N], m, g, v);
        r(u.anchor, m, g);
        return;
      }
      if (I === Zr) {
        A(u, m, g);
        return;
      }
      if (v !== 2 && w & 1 && E) {
        if (v === 0) E.beforeEnter(S), r(S, m, g), Re(function () {
          return E.enter(S);
        }, _);else {
          var _N2 = E.leave,
            j = E.delayLeave,
            H = E.afterLeave,
            q = function q() {
              return r(S, m, g);
            },
            ae = function ae() {
              _N2(S, function () {
                q(), H && H();
              });
            };
          j ? j(S, q, ae) : ae();
        }
      } else r(S, m, g);
    },
    Ce = function Ce(u, m, g) {
      var v = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      var _ = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
      var S = u.type,
        I = u.props,
        E = u.ref,
        P = u.children,
        w = u.dynamicChildren,
        $ = u.shapeFlag,
        N = u.patchFlag,
        j = u.dirs;
      if (E != null && va(E, null, g, u, !0), $ & 256) {
        m.ctx.deactivate(u);
        return;
      }
      var H = $ & 1 && j,
        q = !xn(u);
      var ae;
      if (q && (ae = I && I.onVnodeBeforeUnmount) && Je(ae, m, u), $ & 6) y(u.component, g, v);else {
        if ($ & 128) {
          u.suspense.unmount(g, v);
          return;
        }
        H && Rt(u, null, m, "beforeUnmount"), $ & 64 ? u.type.remove(u, m, g, _, X, v) : w && (S !== Le || N > 0 && N & 64) ? R(w, m, g, !1, !0) : (S === Le && N & 384 || !_ && $ & 16) && R(P, m, g), v && Ut(u);
      }
      (q && (ae = I && I.onVnodeUnmounted) || H) && Re(function () {
        ae && Je(ae, m, u), H && Rt(u, null, m, "unmounted");
      }, g);
    },
    Ut = function Ut(u) {
      var m = u.type,
        g = u.el,
        v = u.anchor,
        _ = u.transition;
      if (m === Le) {
        qn(g, v);
        return;
      }
      if (m === Zr) {
        D(u);
        return;
      }
      var S = function S() {
        a(g), _ && !_.persisted && _.afterLeave && _.afterLeave();
      };
      if (u.shapeFlag & 1 && _ && !_.persisted) {
        var I = _.leave,
          E = _.delayLeave,
          P = function P() {
            return I(g, S);
          };
        E ? E(u.el, S, P) : P();
      } else S();
    },
    qn = function qn(u, m) {
      var g;
      for (; u !== m;) g = p(u), a(u), u = g;
      a(m);
    },
    y = function y(u, m, g) {
      var v = u.bum,
        _ = u.scope,
        S = u.update,
        I = u.subTree,
        E = u.um;
      v && Qr(v), _.stop(), S && (S.active = !1, Ce(I, u, m, g)), E && Re(E, m), Re(function () {
        u.isUnmounted = !0;
      }, m), m && m.pendingBranch && !m.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve());
    },
    R = function R(u, m, g) {
      var v = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      var _ = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
      var S = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      for (var I = S; I < u.length; I++) Ce(u[I], m, g, v, _);
    },
    C = function C(u) {
      return u.shapeFlag & 6 ? C(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : p(u.anchor || u.el);
    },
    L = function L(u, m, g) {
      u == null ? m._vnode && Ce(m._vnode, null, null, !0) : O(m._vnode || null, u, m, null, null, null, g), Ti(), ys(), m._vnode = u;
    },
    X = {
      p: O,
      um: Ce,
      m: Be,
      r: Ut,
      mt: Ne,
      mc: Y,
      pc: te,
      pbc: xe,
      n: C,
      o: e
    };
  var de, K;
  return t && (_t2 = t(X), _t3 = _slicedToArray(_t2, 2), de = _t3[0], K = _t3[1], _t2), {
    render: L,
    hydrate: de,
    createApp: Pf(L, de)
  };
}
function Tt(_ref12, n) {
  var e = _ref12.effect,
    t = _ref12.update;
  e.allowRecurse = t.allowRecurse = n;
}
function js(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  var r = e.children,
    a = t.children;
  if (U(r) && U(a)) for (var i = 0; i < r.length; i++) {
    var o = r[i];
    var s = a[i];
    s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = a[i] = vt(a[i]), s.el = o.el), n || js(o, s)), s.type === jr && (s.el = o.el);
  }
}
function If(e) {
  var t = e.slice(),
    n = [0];
  var r, a, i, o, s;
  var l = e.length;
  for (r = 0; r < l; r++) {
    var f = e[r];
    if (f !== 0) {
      if (a = n[n.length - 1], e[a] < f) {
        t[r] = a, n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o;) s = i + o >> 1, e[n[s]] < f ? i = s + 1 : o = s;
      f < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0;) n[i] = o, o = t[o];
  return n;
}
var Rf = function Rf(e) {
    return e.__isTeleport;
  },
  Le = Symbol(void 0),
  jr = Symbol(void 0),
  Et = Symbol(void 0),
  Zr = Symbol(void 0),
  kn = [];
var Ke = null;
function me() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
  kn.push(Ke = e ? null : []);
}
function Tf() {
  kn.pop(), Ke = kn[kn.length - 1] || null;
}
var Mn = 1;
function Bi(e) {
  Mn += e;
}
function Ds(e) {
  return e.dynamicChildren = Mn > 0 ? Ke || Gt : null, Tf(), Mn > 0 && Ke && Ke.push(e), e;
}
function ke(e, t, n, r, a, i) {
  return Ds(V(e, t, n, r, a, i, !0));
}
function an(e, t, n, r, a) {
  return Ds(fe(e, t, n, r, a, !0));
}
function wr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function vn(e, t) {
  return e.type === t.type && e.key === t.key;
}
var Dr = "__vInternal",
  zs = function zs(_ref13) {
    var e = _ref13.key;
    return e != null ? e : null;
  },
  mr = function mr(_ref14) {
    var e = _ref14.ref,
      t = _ref14.ref_key,
      n = _ref14.ref_for;
    return e != null ? ye(e) || ge(e) || W(e) ? {
      i: Se,
      r: e,
      k: t,
      f: !!n
    } : e : null;
  };
function V(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var i = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : e === Le ? 0 : 1;
  var o = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
  var s = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !1;
  var l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && zs(t),
    ref: t && mr(t),
    scopeId: ws,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: Se
  };
  return s ? (ti(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= ye(n) ? 8 : 16), Mn > 0 && !o && Ke && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && Ke.push(l), l;
}
var fe = Nf;
function Nf(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var i = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
  if ((!e || e === df) && (e = Et), wr(e)) {
    var s = on(e, t, !0);
    return n && ti(s, n), Mn > 0 && !i && Ke && (s.shapeFlag & 6 ? Ke[Ke.indexOf(e)] = s : Ke.push(s)), s.patchFlag |= -2, s;
  }
  if (Yf(e) && (e = e.__vccOpts), t) {
    t = Mf(t);
    var _t4 = t,
      _s4 = _t4["class"],
      l = _t4.style;
    _s4 && !ye(_s4) && (t["class"] = Cr(_s4)), ue(l) && (us(l) && !U(l) && (l = Pe({}, l)), t.style = jt(l));
  }
  var o = ye(e) ? 1 : Qc(e) ? 128 : Rf(e) ? 64 : ue(e) ? 4 : W(e) ? 2 : 0;
  return V(e, t, n, r, a, o, i, !0);
}
function Mf(e) {
  return e ? us(e) || Dr in e ? Pe({}, e) : e : null;
}
function on(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
  var r = e.props,
    a = e.ref,
    i = e.patchFlag,
    o = e.children,
    s = t ? Lf(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: s,
    key: s && zs(s),
    ref: t && t.ref ? n && a ? U(a) ? a.concat(mr(t)) : [a, mr(t)] : mr(t) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Le ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && on(e.ssContent),
    ssFallback: e.ssFallback && on(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Ff() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : " ";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return fe(jr, null, e, t);
}
function Ye() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  return t ? (me(), an(Et, null, e)) : fe(Et, null, e);
}
function Ze(e) {
  return e == null || typeof e == "boolean" ? fe(Et) : U(e) ? fe(Le, null, e.slice()) : _typeof(e) == "object" ? vt(e) : fe(jr, null, String(e));
}
function vt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : on(e);
}
function ti(e, t) {
  var n = 0;
  var r = e.shapeFlag;
  if (t == null) t = null;else if (U(t)) n = 16;else if (_typeof(t) == "object") {
    if (r & 65) {
      var a = t["default"];
      a && (a._c && (a._d = !1), ti(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      var _a2 = t._;
      !_a2 && !(Dr in t) ? t._ctx = Se : _a2 === 3 && Se && (Se.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  } else W(t) ? (t = {
    "default": t,
    _ctx: Se
  }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ff(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Lf() {
  var t = {};
  for (var n = 0; n < arguments.length; n++) {
    var r = n < 0 || arguments.length <= n ? undefined : arguments[n];
    for (var a in r) if (a === "class") t["class"] !== r["class"] && (t["class"] = Cr([t["class"], r["class"]]));else if (a === "style") t.style = jt([t.style, r.style]);else if (Ir(a)) {
      var i = t[a],
        o = r[a];
      o && i !== o && !(U(i) && i.includes(o)) && (t[a] = i ? [].concat(i, o) : o);
    } else a !== "" && (t[a] = r[a]);
  }
  return t;
}
function Je(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  Xe(e, t, 7, [n, r]);
}
var $f = $s();
var jf = 0;
function Df(e, t, n) {
  var r = e.type,
    a = (t ? t.appContext : e.appContext) || $f,
    i = {
      uid: jf++,
      vnode: e,
      type: r,
      parent: t,
      appContext: a,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Go(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(a.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ns(r, a),
      emitsOptions: xs(r, a),
      emit: null,
      emitted: null,
      propsDefaults: le,
      inheritAttrs: r.inheritAttrs,
      ctx: le,
      data: le,
      props: le,
      attrs: le,
      slots: le,
      refs: le,
      setupState: le,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
  return i.ctx = {
    _: i
  }, i.root = t ? t.root : i, i.emit = Kc.bind(null, i), e.ce && e.ce(i), i;
}
var he = null;
var zf = function zf() {
    return he || Se;
  },
  sn = function sn(e) {
    he = e, e.scope.on();
  },
  zt = function zt() {
    he && he.scope.off(), he = null;
  };
function Bs(e) {
  return e.vnode.shapeFlag & 4;
}
var Fn = !1;
function Bf(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  Fn = t;
  var _e$vnode = e.vnode,
    n = _e$vnode.props,
    r = _e$vnode.children,
    a = Bs(e);
  xf(e, n, a, t), Ef(e, r);
  var i = a ? Hf(e, t) : void 0;
  return Fn = !1, i;
}
function Hf(e, t) {
  var n = e.type;
  e.accessCache = Object.create(null), e.proxy = rn(new Proxy(e.ctx, hf));
  var r = n.setup;
  if (r) {
    var a = e.setupContext = r.length > 1 ? Wf(e) : null;
    sn(e), dn();
    var i = wt(r, e, 0, [e.props, a]);
    if (mn(), zt(), Vo(i)) {
      if (i.then(zt, zt), t) return i.then(function (o) {
        Hi(e, o, t);
      })["catch"](function (o) {
        Fr(o, e, 0);
      });
      e.asyncDep = i;
    } else Hi(e, i, t);
  } else Hs(e, t);
}
function Hi(e, t, n) {
  W(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ue(t) && (e.setupState = hs(t)), Hs(e, n);
}
var Ui;
function Hs(e, t, n) {
  var r = e.type;
  if (!e.render) {
    if (!t && Ui && !r.render) {
      var a = r.template || Za(e).template;
      if (a) {
        var _e$appContext$config = e.appContext.config,
          i = _e$appContext$config.isCustomElement,
          o = _e$appContext$config.compilerOptions,
          s = r.delimiters,
          l = r.compilerOptions,
          f = Pe(Pe({
            isCustomElement: i,
            delimiters: s
          }, o), l);
        r.render = Ui(a, f);
      }
    }
    e.render = r.render || Ve;
  }
  sn(e), dn(), gf(e), mn(), zt();
}
function Uf(e) {
  return new Proxy(e.attrs, {
    get: function get(t, n) {
      return Te(e, "get", "$attrs"), t[n];
    }
  });
}
function Wf(e) {
  var t = function t(r) {
    e.exposed = r || {};
  };
  var n;
  return {
    get attrs() {
      return n || (n = Uf(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ni(e) {
  if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(hs(rn(e.exposed)), {
    get: function get(t, n) {
      if (n in t) return t[n];
      if (n in wn) return wn[n](e);
    },
    has: function has(t, n) {
      return n in t || n in wn;
    }
  }));
}
function Kf(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
  return W(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Yf(e) {
  return W(e) && "__vccOpts" in e;
}
var ce = function ce(e, t) {
  return Dc(e, t, Fn);
};
function zr(e, t, n) {
  var r = arguments.length;
  return r === 2 ? ue(t) && !U(t) ? wr(t) ? fe(e, null, [t]) : fe(e, t) : fe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && wr(n) && (n = [n]), fe(e, t, n));
}
var qf = Symbol(""),
  Vf = function Vf() {
    return nt(qf);
  },
  Xf = "3.2.47",
  Qf = "http://www.w3.org/2000/svg",
  Ft = typeof document != "undefined" ? document : null,
  Wi = Ft && Ft.createElement("template"),
  Gf = {
    insert: function insert(e, t, n) {
      t.insertBefore(e, n || null);
    },
    remove: function remove(e) {
      var t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: function createElement(e, t, n, r) {
      var a = t ? Ft.createElementNS(Qf, e) : Ft.createElement(e, n ? {
        is: n
      } : void 0);
      return e === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
    },
    createText: function createText(e) {
      return Ft.createTextNode(e);
    },
    createComment: function createComment(e) {
      return Ft.createComment(e);
    },
    setText: function setText(e, t) {
      e.nodeValue = t;
    },
    setElementText: function setElementText(e, t) {
      e.textContent = t;
    },
    parentNode: function parentNode(e) {
      return e.parentNode;
    },
    nextSibling: function nextSibling(e) {
      return e.nextSibling;
    },
    querySelector: function querySelector(e) {
      return Ft.querySelector(e);
    },
    setScopeId: function setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent: function insertStaticContent(e, t, n, r, a, i) {
      var o = n ? n.previousSibling : t.lastChild;
      if (a && (a === i || a.nextSibling)) for (; t.insertBefore(a.cloneNode(!0), n), !(a === i || !(a = a.nextSibling)););else {
        Wi.innerHTML = r ? "<svg>".concat(e, "</svg>") : e;
        var s = Wi.content;
        if (r) {
          var l = s.firstChild;
          for (; l.firstChild;) s.appendChild(l.firstChild);
          s.removeChild(l);
        }
        t.insertBefore(s, n);
      }
      return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
    }
  };
function Jf(e, t, n) {
  var r = e._vtc;
  r && (t = (t ? [t].concat(_toConsumableArray(r)) : _toConsumableArray(r)).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Zf(e, t, n) {
  var r = e.style,
    a = ye(n);
  if (n && !a) {
    if (t && !ye(t)) for (var i in t) n[i] == null && ba(r, i, "");
    for (var _i4 in n) ba(r, _i4, n[_i4]);
  } else {
    var _i5 = r.display;
    a ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = _i5);
  }
}
var Ki = /\s*!important$/;
function ba(e, t, n) {
  if (U(n)) n.forEach(function (r) {
    return ba(e, t, r);
  });else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);else {
    var r = eu(e, t);
    Ki.test(n) ? e.setProperty(un(r), n.replace(Ki, ""), "important") : e[r] = n;
  }
}
var Yi = ["Webkit", "Moz", "ms"],
  ea = {};
function eu(e, t) {
  var n = ea[t];
  if (n) return n;
  var r = rt(t);
  if (r !== "filter" && r in e) return ea[t] = r;
  r = Nr(r);
  for (var a = 0; a < Yi.length; a++) {
    var i = Yi[a] + r;
    if (i in e) return ea[t] = i;
  }
  return t;
}
var qi = "http://www.w3.org/1999/xlink";
function tu(e, t, n, r, a) {
  if (r && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(qi, t.slice(6, t.length)) : e.setAttributeNS(qi, t, n);else {
    var i = ql(t);
    n == null || i && !Ko(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
  }
}
function nu(e, t, n, r, a, i, o) {
  if (t === "innerHTML" || t === "textContent") {
    r && o(r, a, i), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    var l = n == null ? "" : n;
    (e.value !== l || e.tagName === "OPTION") && (e.value = l), n == null && e.removeAttribute(t);
    return;
  }
  var s = !1;
  if (n === "" || n == null) {
    var _l4 = _typeof(e[t]);
    _l4 === "boolean" ? n = Ko(n) : n == null && _l4 === "string" ? (n = "", s = !0) : _l4 === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (l) {}
  s && e.removeAttribute(t);
}
function ru(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function au(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function iu(e, t, n, r) {
  var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var i = e._vei || (e._vei = {}),
    o = i[t];
  if (r && o) o.value = r;else {
    var _ou = ou(t),
      _ou2 = _slicedToArray(_ou, 2),
      s = _ou2[0],
      l = _ou2[1];
    if (r) {
      var f = i[t] = cu(r, a);
      ru(e, s, f, l);
    } else o && (au(e, s, o, l), i[t] = void 0);
  }
}
var Vi = /(?:Once|Passive|Capture)$/;
function ou(e) {
  var t;
  if (Vi.test(e)) {
    t = {};
    var r;
    for (; r = e.match(Vi);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : un(e.slice(2)), t];
}
var ta = 0;
var su = Promise.resolve(),
  lu = function lu() {
    return ta || (su.then(function () {
      return ta = 0;
    }), ta = Date.now());
  };
function cu(e, t) {
  var n = function n(r) {
    if (!r._vts) r._vts = Date.now();else if (r._vts <= n.attached) return;
    Xe(fu(r, n.value), t, 5, [r]);
  };
  return n.value = e, n.attached = lu(), n;
}
function fu(e, t) {
  if (U(t)) {
    var n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = function () {
      n.call(e), e._stopped = !0;
    }, t.map(function (r) {
      return function (a) {
        return !a._stopped && r && r(a);
      };
    });
  } else return t;
}
var Xi = /^on[a-z]/,
  uu = function uu(e, t, n, r) {
    var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
    var i = arguments.length > 5 ? arguments[5] : undefined;
    var o = arguments.length > 6 ? arguments[6] : undefined;
    var s = arguments.length > 7 ? arguments[7] : undefined;
    var l = arguments.length > 8 ? arguments[8] : undefined;
    t === "class" ? Jf(e, r, a) : t === "style" ? Zf(e, n, r) : Ir(t) ? ja(t) || iu(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : du(e, t, r, a)) ? nu(e, t, r, i, o, s, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), tu(e, t, r, a));
  };
function du(e, t, n, r) {
  return r ? !!(t === "innerHTML" || t === "textContent" || t in e && Xi.test(t) && W(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Xi.test(t) && ye(n) ? !1 : t in e;
}
var mu = ["ctrl", "shift", "alt", "meta"],
  pu = {
    stop: function stop(e) {
      return e.stopPropagation();
    },
    prevent: function prevent(e) {
      return e.preventDefault();
    },
    self: function self(e) {
      return e.target !== e.currentTarget;
    },
    ctrl: function ctrl(e) {
      return !e.ctrlKey;
    },
    shift: function shift(e) {
      return !e.shiftKey;
    },
    alt: function alt(e) {
      return !e.altKey;
    },
    meta: function meta(e) {
      return !e.metaKey;
    },
    left: function left(e) {
      return "button" in e && e.button !== 0;
    },
    middle: function middle(e) {
      return "button" in e && e.button !== 1;
    },
    right: function right(e) {
      return "button" in e && e.button !== 2;
    },
    exact: function exact(e, t) {
      return mu.some(function (n) {
        return e["".concat(n, "Key")] && !t.includes(n);
      });
    }
  },
  Qi = function Qi(e, t) {
    return function (n) {
      for (var a = 0; a < t.length; a++) {
        var i = pu[t[a]];
        if (i && i(n, t)) return;
      }
      for (var _len6 = arguments.length, r = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        r[_key6 - 1] = arguments[_key6];
      }
      return e.apply(void 0, [n].concat(r));
    };
  },
  hu = Pe({
    patchProp: uu
  }, Gf);
var Gi;
function gu() {
  return Gi || (Gi = Of(hu));
}
var vu = function vu() {
  var _gu;
  var t = (_gu = gu()).createApp.apply(_gu, arguments),
    n = t.mount;
  return t.mount = function (r) {
    var a = bu(r);
    if (!a) return;
    var i = t._component;
    !W(i) && !i.render && !i.template && (i.template = a.innerHTML), a.innerHTML = "";
    var o = n(a, !1, a instanceof SVGElement);
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
};
function bu(e) {
  return ye(e) ? document.querySelector(e) : e;
} /*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
var qt = typeof window != "undefined";
function yu(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
var ee = Object.assign;
function na(e, t) {
  var n = {};
  for (var r in t) {
    var a = t[r];
    n[r] = Qe(a) ? a.map(e) : e(a);
  }
  return n;
}
var En = function En() {},
  Qe = Array.isArray,
  _u = /\/$/,
  xu = function xu(e) {
    return e.replace(_u, "");
  };
function ra(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "/";
  var r,
    a = {},
    i = "",
    o = "";
  var s = t.indexOf("#");
  var l = t.indexOf("?");
  return s < l && s >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), i = t.slice(l + 1, s > -1 ? s : t.length), a = e(i)), s > -1 && (r = r || t.slice(0, s), o = t.slice(s, t.length)), r = Su(r != null ? r : t, n), {
    fullPath: r + (i && "?") + i + o,
    path: r,
    query: a,
    hash: o
  };
}
function wu(e, t) {
  var n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Ji(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function ku(e, t, n) {
  var r = t.matched.length - 1,
    a = n.matched.length - 1;
  return r > -1 && r === a && ln(t.matched[r], n.matched[a]) && Us(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ln(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Us(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var n in e) if (!Eu(e[n], t[n])) return !1;
  return !0;
}
function Eu(e, t) {
  return Qe(e) ? Zi(e, t) : Qe(t) ? Zi(t, e) : e === t;
}
function Zi(e, t) {
  return Qe(t) ? e.length === t.length && e.every(function (n, r) {
    return n === t[r];
  }) : e.length === 1 && e[0] === t;
}
function Su(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  var n = t.split("/"),
    r = e.split("/");
  var a = n.length - 1,
    i,
    o;
  for (i = 0; i < r.length; i++) if (o = r[i], o !== ".") if (o === "..") a > 1 && a--;else break;
  return n.slice(0, a).join("/") + "/" + r.slice(i - (i === r.length ? 1 : 0)).join("/");
}
var Ln;
(function (e) {
  e.pop = "pop", e.push = "push";
})(Ln || (Ln = {}));
var Sn;
(function (e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Sn || (Sn = {}));
function Au(e) {
  if (!e) if (qt) {
    var t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), xu(e);
}
var Pu = /^[^#]+#/;
function Ou(e, t) {
  return e.replace(Pu, "#") + t;
}
function Cu(e, t) {
  var n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  };
}
var Br = function Br() {
  return {
    left: window.pageXOffset,
    top: window.pageYOffset
  };
};
function Iu(e) {
  var t;
  if ("el" in e) {
    var n = e.el,
      r = typeof n == "string" && n.startsWith("#"),
      a = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!a) return;
    t = Cu(a, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function eo(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
var ya = new Map();
function Ru(e, t) {
  ya.set(e, t);
}
function Tu(e) {
  var t = ya.get(e);
  return ya["delete"](e), t;
}
var Nu = function Nu() {
  return location.protocol + "//" + location.host;
};
function Ws(e, t) {
  var n = t.pathname,
    r = t.search,
    a = t.hash,
    i = e.indexOf("#");
  if (i > -1) {
    var s = a.includes(e.slice(i)) ? e.slice(i).length : 1,
      l = a.slice(s);
    return l[0] !== "/" && (l = "/" + l), Ji(l, "");
  }
  return Ji(n, e) + r + a;
}
function Mu(e, t, n, r) {
  var a = [],
    i = [],
    o = null;
  var s = function s(_ref15) {
    var p = _ref15.state;
    var h = Ws(e, location),
      k = n.value,
      O = t.value;
    var F = 0;
    if (p) {
      if (n.value = h, t.value = p, o && o === k) {
        o = null;
        return;
      }
      F = O ? p.position - O.position : 0;
    } else r(h);
    a.forEach(function (b) {
      b(n.value, k, {
        delta: F,
        type: Ln.pop,
        direction: F ? F > 0 ? Sn.forward : Sn.back : Sn.unknown
      });
    });
  };
  function l() {
    o = n.value;
  }
  function f(p) {
    a.push(p);
    var h = function h() {
      var k = a.indexOf(p);
      k > -1 && a.splice(k, 1);
    };
    return i.push(h), h;
  }
  function c() {
    var _window = window,
      p = _window.history;
    p.state && p.replaceState(ee({}, p.state, {
      scroll: Br()
    }), "");
  }
  function d() {
    var _iterator8 = _createForOfIteratorHelper(i),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var p = _step8.value;
        p();
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    i = [], window.removeEventListener("popstate", s), window.removeEventListener("beforeunload", c);
  }
  return window.addEventListener("popstate", s), window.addEventListener("beforeunload", c), {
    pauseListeners: l,
    listen: f,
    destroy: d
  };
}
function to(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
  var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: a ? Br() : null
  };
}
function Fu(e) {
  var _window2 = window,
    t = _window2.history,
    n = _window2.location,
    r = {
      value: Ws(e, n)
    },
    a = {
      value: t.state
    };
  a.value || i(r.value, {
    back: null,
    current: r.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function i(l, f, c) {
    var d = e.indexOf("#"),
      p = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + l : Nu() + e + l;
    try {
      t[c ? "replaceState" : "pushState"](f, "", p), a.value = f;
    } catch (h) {
      console.error(h), n[c ? "replace" : "assign"](p);
    }
  }
  function o(l, f) {
    var c = ee({}, t.state, to(a.value.back, l, a.value.forward, !0), f, {
      position: a.value.position
    });
    i(l, c, !0), r.value = l;
  }
  function s(l, f) {
    var c = ee({}, a.value, t.state, {
      forward: l,
      scroll: Br()
    });
    i(c.current, c, !0);
    var d = ee({}, to(r.value, l, null), {
      position: c.position + 1
    }, f);
    i(l, d, !1), r.value = l;
  }
  return {
    location: r,
    state: a,
    push: s,
    replace: o
  };
}
function Lu(e) {
  e = Au(e);
  var t = Fu(e),
    n = Mu(e, t.state, t.location, t.replace);
  function r(i) {
    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
    o || n.pauseListeners(), history.go(i);
  }
  var a = ee({
    location: "",
    base: e,
    go: r,
    createHref: Ou.bind(null, e)
  }, t, n);
  return Object.defineProperty(a, "location", {
    enumerable: !0,
    get: function get() {
      return t.location.value;
    }
  }), Object.defineProperty(a, "state", {
    enumerable: !0,
    get: function get() {
      return t.state.value;
    }
  }), a;
}
function $u(e) {
  return typeof e == "string" || e && _typeof(e) == "object";
}
function Ks(e) {
  return typeof e == "string" || _typeof(e) == "symbol";
}
var ht = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  Ys = Symbol("");
var no;
(function (e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(no || (no = {}));
function cn(e, t) {
  return ee(new Error(), _defineProperty({
    type: e
  }, Ys, !0), t);
}
function at(e, t) {
  return e instanceof Error && Ys in e && (t == null || !!(e.type & t));
}
var ro = "[^/]+?",
  ju = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  },
  Du = /[.+*?^${}()[\]/\\]/g;
function zu(e, t) {
  var n = ee({}, ju, t),
    r = [];
  var a = n.start ? "^" : "";
  var i = [];
  var _iterator9 = _createForOfIteratorHelper(e),
    _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var _f3 = _step9.value;
      var c = _f3.length ? [] : [90];
      n.strict && !_f3.length && (a += "/");
      for (var d = 0; d < _f3.length; d++) {
        var p = _f3[d];
        var h = 40 + (n.sensitive ? .25 : 0);
        if (p.type === 0) d || (a += "/"), a += p.value.replace(Du, "\\$&"), h += 40;else if (p.type === 1) {
          var k = p.value,
            O = p.repeatable,
            F = p.optional,
            b = p.regexp;
          i.push({
            name: k,
            repeatable: O,
            optional: F
          });
          var x = b || ro;
          if (x !== ro) {
            h += 10;
            try {
              new RegExp("(".concat(x, ")"));
            } catch (D) {
              throw new Error("Invalid custom RegExp for param \"".concat(k, "\" (").concat(x, "): ") + D.message);
            }
          }
          var A = O ? "((?:".concat(x, ")(?:/(?:").concat(x, "))*)") : "(".concat(x, ")");
          d || (A = F && _f3.length < 2 ? "(?:/".concat(A, ")") : "/" + A), F && (A += "?"), a += A, h += 20, F && (h += -8), O && (h += -20), x === ".*" && (h += -50);
        }
        c.push(h);
      }
      r.push(c);
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
  if (n.strict && n.end) {
    var f = r.length - 1;
    r[f][r[f].length - 1] += .7000000000000001;
  }
  n.strict || (a += "/?"), n.end ? a += "$" : n.strict && (a += "(?:/|$)");
  var o = new RegExp(a, n.sensitive ? "" : "i");
  function s(f) {
    var c = f.match(o),
      d = {};
    if (!c) return null;
    for (var p = 1; p < c.length; p++) {
      var h = c[p] || "",
        k = i[p - 1];
      d[k.name] = h && k.repeatable ? h.split("/") : h;
    }
    return d;
  }
  function l(f) {
    var c = "",
      d = !1;
    var _iterator10 = _createForOfIteratorHelper(e),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var p = _step10.value;
        (!d || !c.endsWith("/")) && (c += "/"), d = !1;
        var _iterator11 = _createForOfIteratorHelper(p),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var h = _step11.value;
            if (h.type === 0) c += h.value;else if (h.type === 1) {
              var k = h.value,
                O = h.repeatable,
                F = h.optional,
                b = k in f ? f[k] : "";
              if (Qe(b) && !O) throw new Error("Provided param \"".concat(k, "\" is an array but it is not repeatable (* or + modifiers)"));
              var x = Qe(b) ? b.join("/") : b;
              if (!x) if (F) p.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : d = !0);else throw new Error("Missing required param \"".concat(k, "\""));
              c += x;
            }
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    return c || "/";
  }
  return {
    re: o,
    score: r,
    keys: i,
    parse: s,
    stringify: l
  };
}
function Bu(e, t) {
  var n = 0;
  for (; n < e.length && n < t.length;) {
    var r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Hu(e, t) {
  var n = 0;
  var r = e.score,
    a = t.score;
  for (; n < r.length && n < a.length;) {
    var i = Bu(r[n], a[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(a.length - r.length) === 1) {
    if (ao(r)) return 1;
    if (ao(a)) return -1;
  }
  return a.length - r.length;
}
function ao(e) {
  var t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
var Uu = {
    type: 0,
    value: ""
  },
  Wu = /[a-zA-Z0-9_]/;
function Ku(e) {
  if (!e) return [[]];
  if (e === "/") return [[Uu]];
  if (!e.startsWith("/")) throw new Error("Invalid path \"".concat(e, "\""));
  function t(h) {
    throw new Error("ERR (".concat(n, ")/\"").concat(f, "\": ").concat(h));
  }
  var n = 0,
    r = n;
  var a = [];
  var i;
  function o() {
    i && a.push(i), i = [];
  }
  var s = 0,
    l,
    f = "",
    c = "";
  function d() {
    f && (n === 0 ? i.push({
      type: 0,
      value: f
    }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (l === "*" || l === "+") && t("A repeatable param (".concat(f, ") must be alone in its segment. eg: '/:ids+.")), i.push({
      type: 1,
      value: f,
      regexp: c,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), f = "");
  }
  function p() {
    f += l;
  }
  for (; s < e.length;) {
    if (l = e[s++], l === "\\" && n !== 2) {
      r = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (f && d(), o()) : l === ":" ? (d(), n = 1) : p();
        break;
      case 4:
        p(), n = r;
        break;
      case 1:
        l === "(" ? n = 2 : Wu.test(l) ? p() : (d(), n = 0, l !== "*" && l !== "?" && l !== "+" && s--);
        break;
      case 2:
        l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
        break;
      case 3:
        d(), n = 0, l !== "*" && l !== "?" && l !== "+" && s--, c = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t("Unfinished custom RegExp for param \"".concat(f, "\"")), d(), o(), a;
}
function Yu(e, t, n) {
  var r = zu(Ku(e.path), n),
    a = ee(r, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
  return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a), a;
}
function qu(e, t) {
  var n = [],
    r = new Map();
  t = so({
    strict: !1,
    end: !0,
    sensitive: !1
  }, t);
  function a(c) {
    return r.get(c);
  }
  function i(c, d, p) {
    var h = !p,
      k = Vu(c);
    k.aliasOf = p && p.record;
    var O = so(t, c),
      F = [k];
    if ("alias" in c) {
      var A = typeof c.alias == "string" ? [c.alias] : c.alias;
      var _iterator12 = _createForOfIteratorHelper(A),
        _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var D = _step12.value;
          F.push(ee({}, k, {
            components: p ? p.record.components : k.components,
            path: D,
            aliasOf: p ? p.record : k
          }));
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }
    var b, x;
    for (var _i6 = 0, _F = F; _i6 < _F.length; _i6++) {
      var _A4 = _F[_i6];
      var _D3 = _A4.path;
      if (d && _D3[0] !== "/") {
        var z = d.record.path,
          J = z[z.length - 1] === "/" ? "" : "/";
        _A4.path = d.record.path + (_D3 && J + _D3);
      }
      if (b = Yu(_A4, d, O), p ? p.alias.push(b) : (x = x || b, x !== b && x.alias.push(b), h && c.name && !oo(b) && o(c.name)), k.children) {
        var _z = k.children;
        for (var _J = 0; _J < _z.length; _J++) i(_z[_J], b, p && p.children[_J]);
      }
      p = p || b, (b.record.components && Object.keys(b.record.components).length || b.record.name || b.record.redirect) && l(b);
    }
    return x ? function () {
      o(x);
    } : En;
  }
  function o(c) {
    if (Ks(c)) {
      var d = r.get(c);
      d && (r["delete"](c), n.splice(n.indexOf(d), 1), d.children.forEach(o), d.alias.forEach(o));
    } else {
      var _d5 = n.indexOf(c);
      _d5 > -1 && (n.splice(_d5, 1), c.record.name && r["delete"](c.record.name), c.children.forEach(o), c.alias.forEach(o));
    }
  }
  function s() {
    return n;
  }
  function l(c) {
    var d = 0;
    for (; d < n.length && Hu(c, n[d]) >= 0 && (c.record.path !== n[d].record.path || !qs(c, n[d]));) d++;
    n.splice(d, 0, c), c.record.name && !oo(c) && r.set(c.record.name, c);
  }
  function f(c, d) {
    var p,
      h = {},
      k,
      O;
    if ("name" in c && c.name) {
      if (p = r.get(c.name), !p) throw cn(1, {
        location: c
      });
      O = p.record.name, h = ee(io(d.params, p.keys.filter(function (x) {
        return !x.optional;
      }).map(function (x) {
        return x.name;
      })), c.params && io(c.params, p.keys.map(function (x) {
        return x.name;
      }))), k = p.stringify(h);
    } else if ("path" in c) k = c.path, p = n.find(function (x) {
      return x.re.test(k);
    }), p && (h = p.parse(k), O = p.record.name);else {
      if (p = d.name ? r.get(d.name) : n.find(function (x) {
        return x.re.test(d.path);
      }), !p) throw cn(1, {
        location: c,
        currentLocation: d
      });
      O = p.record.name, h = ee({}, d.params, c.params), k = p.stringify(h);
    }
    var F = [];
    var b = p;
    for (; b;) F.unshift(b.record), b = b.parent;
    return {
      name: O,
      path: k,
      params: h,
      matched: F,
      meta: Qu(F)
    };
  }
  return e.forEach(function (c) {
    return i(c);
  }), {
    addRoute: i,
    resolve: f,
    removeRoute: o,
    getRoutes: s,
    getRecordMatcher: a
  };
}
function io(e, t) {
  var n = {};
  var _iterator13 = _createForOfIteratorHelper(t),
    _step13;
  try {
    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      var r = _step13.value;
      r in e && (n[r] = e[r]);
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }
  return n;
}
function Vu(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Xu(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && {
      "default": e.component
    }
  };
}
function Xu(e) {
  var t = {},
    n = e.props || !1;
  if ("component" in e) t["default"] = n;else for (var r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
  return t;
}
function oo(e) {
  for (; e;) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Qu(e) {
  return e.reduce(function (t, n) {
    return ee(t, n.meta);
  }, {});
}
function so(e, t) {
  var n = {};
  for (var r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function qs(e, t) {
  return t.children.some(function (n) {
    return n === e || qs(e, n);
  });
}
var Vs = /#/g,
  Gu = /&/g,
  Ju = /\//g,
  Zu = /=/g,
  ed = /\?/g,
  Xs = /\+/g,
  td = /%5B/g,
  nd = /%5D/g,
  Qs = /%5E/g,
  rd = /%60/g,
  Gs = /%7B/g,
  ad = /%7C/g,
  Js = /%7D/g,
  id = /%20/g;
function ri(e) {
  return encodeURI("" + e).replace(ad, "|").replace(td, "[").replace(nd, "]");
}
function od(e) {
  return ri(e).replace(Gs, "{").replace(Js, "}").replace(Qs, "^");
}
function _a(e) {
  return ri(e).replace(Xs, "%2B").replace(id, "+").replace(Vs, "%23").replace(Gu, "%26").replace(rd, "`").replace(Gs, "{").replace(Js, "}").replace(Qs, "^");
}
function sd(e) {
  return _a(e).replace(Zu, "%3D");
}
function ld(e) {
  return ri(e).replace(Vs, "%23").replace(ed, "%3F");
}
function cd(e) {
  return e == null ? "" : ld(e).replace(Ju, "%2F");
}
function kr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {}
  return "" + e;
}
function fd(e) {
  var t = {};
  if (e === "" || e === "?") return t;
  var r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (var a = 0; a < r.length; ++a) {
    var i = r[a].replace(Xs, " "),
      o = i.indexOf("="),
      s = kr(o < 0 ? i : i.slice(0, o)),
      l = o < 0 ? null : kr(i.slice(o + 1));
    if (s in t) {
      var f = t[s];
      Qe(f) || (f = t[s] = [f]), f.push(l);
    } else t[s] = l;
  }
  return t;
}
function lo(e) {
  var t = "";
  var _loop4 = function _loop4(n) {
    var r = e[n];
    if (n = sd(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      return 1; // continue
    }
    (Qe(r) ? r.map(function (i) {
      return i && _a(i);
    }) : [r && _a(r)]).forEach(function (i) {
      i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i));
    });
  };
  for (var n in e) {
    if (_loop4(n)) continue;
  }
  return t;
}
function ud(e) {
  var t = {};
  for (var n in e) {
    var r = e[n];
    r !== void 0 && (t[n] = Qe(r) ? r.map(function (a) {
      return a == null ? null : "" + a;
    }) : r == null ? r : "" + r);
  }
  return t;
}
var dd = Symbol(""),
  co = Symbol(""),
  ai = Symbol(""),
  Zs = Symbol(""),
  xa = Symbol("");
function bn() {
  var e = [];
  function t(r) {
    return e.push(r), function () {
      var a = e.indexOf(r);
      a > -1 && e.splice(a, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: function list() {
      return e;
    },
    reset: n
  };
}
function bt(e, t, n, r, a) {
  var i = r && (r.enterCallbacks[a] = r.enterCallbacks[a] || []);
  return function () {
    return new Promise(function (o, s) {
      var l = function l(d) {
          d === !1 ? s(cn(4, {
            from: n,
            to: t
          })) : d instanceof Error ? s(d) : $u(d) ? s(cn(2, {
            from: t,
            to: d
          })) : (i && r.enterCallbacks[a] === i && typeof d == "function" && i.push(d), o());
        },
        f = e.call(r && r.instances[a], t, n, l);
      var c = Promise.resolve(f);
      e.length < 3 && (c = c.then(l)), c["catch"](function (d) {
        return s(d);
      });
    });
  };
}
function aa(e, t, n, r) {
  var a = [];
  var _iterator14 = _createForOfIteratorHelper(e),
    _step14;
  try {
    var _loop5 = function _loop5() {
      var i = _step14.value;
      var _loop6 = function _loop6(o) {
        var s = i.components[o];
        if (!(t !== "beforeRouteEnter" && !i.instances[o])) if (md(s)) {
          var f = (s.__vccOpts || s)[t];
          f && a.push(bt(f, n, r, i, o));
        } else {
          var l = s();
          a.push(function () {
            return l.then(function (f) {
              if (!f) return Promise.reject(new Error("Couldn't resolve component \"".concat(o, "\" at \"").concat(i.path, "\"")));
              var c = yu(f) ? f["default"] : f;
              i.components[o] = c;
              var p = (c.__vccOpts || c)[t];
              return p && bt(p, n, r, i, o)();
            });
          });
        }
      };
      for (var o in i.components) {
        _loop6(o);
      }
    };
    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
      _loop5();
    }
  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }
  return a;
}
function md(e) {
  return _typeof(e) == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function fo(e) {
  var t = nt(ai),
    n = nt(Zs),
    r = ce(function () {
      return t.resolve(Z(e.to));
    }),
    a = ce(function () {
      var l = r.value.matched,
        f = l.length,
        c = l[f - 1],
        d = n.matched;
      if (!c || !d.length) return -1;
      var p = d.findIndex(ln.bind(null, c));
      if (p > -1) return p;
      var h = uo(l[f - 2]);
      return f > 1 && uo(c) === h && d[d.length - 1].path !== h ? d.findIndex(ln.bind(null, l[f - 2])) : p;
    }),
    i = ce(function () {
      return a.value > -1 && vd(n.params, r.value.params);
    }),
    o = ce(function () {
      return a.value > -1 && a.value === n.matched.length - 1 && Us(n.params, r.value.params);
    });
  function s() {
    var l = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return gd(l) ? t[Z(e.replace) ? "replace" : "push"](Z(e.to))["catch"](En) : Promise.resolve();
  }
  return {
    route: r,
    href: ce(function () {
      return r.value.href;
    }),
    isActive: i,
    isExactActive: o,
    navigate: s
  };
}
var pd = ft({
    name: "RouterLink",
    compatConfig: {
      MODE: 3
    },
    props: {
      to: {
        type: [String, Object],
        required: !0
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        "default": "page"
      }
    },
    useLink: fo,
    setup: function setup(e, _ref16) {
      var t = _ref16.slots;
      var n = pn(fo(e)),
        _nt = nt(ai),
        r = _nt.options,
        a = ce(function () {
          return _defineProperty(_defineProperty({}, mo(e.activeClass, r.linkActiveClass, "router-link-active"), n.isActive), mo(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active"), n.isExactActive);
        });
      return function () {
        var i = t["default"] && t["default"](n);
        return e.custom ? i : zr("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          "class": a.value
        }, i);
      };
    }
  }),
  hd = pd;
function gd(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      var t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function vd(e, t) {
  var _loop7 = function _loop7() {
      var r = t[n],
        a = e[n];
      if (typeof r == "string") {
        if (r !== a) return {
          v: !1
        };
      } else if (!Qe(a) || a.length !== r.length || r.some(function (i, o) {
        return i !== a[o];
      })) return {
        v: !1
      };
    },
    _ret;
  for (var n in t) {
    _ret = _loop7();
    if (_ret) return _ret.v;
  }
  return !0;
}
function uo(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var mo = function mo(e, t, n) {
    return e != null ? e : t != null ? t : n;
  },
  bd = ft({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
      name: {
        type: String,
        "default": "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup: function setup(e, _ref18) {
      var t = _ref18.attrs,
        n = _ref18.slots;
      var r = nt(xa),
        a = ce(function () {
          return e.route || r.value;
        }),
        i = nt(co, 0),
        o = ce(function () {
          var f = Z(i);
          var c = a.value.matched;
          var d;
          for (; (d = c[f]) && !d.components;) f++;
          return f;
        }),
        s = ce(function () {
          return a.value.matched[o.value];
        });
      dr(co, ce(function () {
        return o.value + 1;
      })), dr(dd, s), dr(xa, a);
      var l = Xa();
      return en(function () {
        return [l.value, s.value, e.name];
      }, function (_ref19, _ref20) {
        var _ref21 = _slicedToArray(_ref19, 3),
          f = _ref21[0],
          c = _ref21[1],
          d = _ref21[2];
        var _ref22 = _slicedToArray(_ref20, 3),
          p = _ref22[0],
          h = _ref22[1],
          k = _ref22[2];
        c && (c.instances[d] = f, h && h !== c && f && f === p && (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards), c.updateGuards.size || (c.updateGuards = h.updateGuards))), f && c && (!h || !ln(c, h) || !p) && (c.enterCallbacks[d] || []).forEach(function (O) {
          return O(f);
        });
      }, {
        flush: "post"
      }), function () {
        var f = a.value,
          c = e.name,
          d = s.value,
          p = d && d.components[c];
        if (!p) return po(n["default"], {
          Component: p,
          route: f
        });
        var h = d.props[c],
          k = h ? h === !0 ? f.params : typeof h == "function" ? h(f) : h : null,
          F = zr(p, ee({}, k, t, {
            onVnodeUnmounted: function onVnodeUnmounted(b) {
              b.component.isUnmounted && (d.instances[c] = null);
            },
            ref: l
          }));
        return po(n["default"], {
          Component: F,
          route: f
        }) || F;
      };
    }
  });
function po(e, t) {
  if (!e) return null;
  var n = e(t);
  return n.length === 1 ? n[0] : n;
}
var el = bd;
function yd(e) {
  var t = qu(e.routes, e),
    n = e.parseQuery || fd,
    r = e.stringifyQuery || lo,
    a = e.history,
    i = bn(),
    o = bn(),
    s = bn(),
    l = Tc(ht);
  var f = ht;
  qt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  var c = na.bind(null, function (y) {
      return "" + y;
    }),
    d = na.bind(null, cd),
    p = na.bind(null, kr);
  function h(y, R) {
    var C, L;
    return Ks(y) ? (C = t.getRecordMatcher(y), L = R) : L = y, t.addRoute(L, C);
  }
  function k(y) {
    var R = t.getRecordMatcher(y);
    R && t.removeRoute(R);
  }
  function O() {
    return t.getRoutes().map(function (y) {
      return y.record;
    });
  }
  function F(y) {
    return !!t.getRecordMatcher(y);
  }
  function b(y, R) {
    if (R = ee({}, R || l.value), typeof y == "string") {
      var u = ra(n, y, R.path),
        _m3 = t.resolve({
          path: u.path
        }, R),
        g = a.createHref(u.fullPath);
      return ee(u, _m3, {
        params: p(_m3.params),
        hash: kr(u.hash),
        redirectedFrom: void 0,
        href: g
      });
    }
    var C;
    if ("path" in y) C = ee({}, y, {
      path: ra(n, y.path, R.path).path
    });else {
      var _u2 = ee({}, y.params);
      for (var _m4 in _u2) _u2[_m4] == null && delete _u2[_m4];
      C = ee({}, y, {
        params: d(y.params)
      }), R.params = d(R.params);
    }
    var L = t.resolve(C, R),
      X = y.hash || "";
    L.params = c(p(L.params));
    var de = wu(r, ee({}, y, {
        hash: od(X),
        path: L.path
      })),
      K = a.createHref(de);
    return ee({
      fullPath: de,
      hash: X,
      query: r === lo ? ud(y.query) : y.query || {}
    }, L, {
      redirectedFrom: void 0,
      href: K
    });
  }
  function x(y) {
    return typeof y == "string" ? ra(n, y, l.value.path) : ee({}, y);
  }
  function A(y, R) {
    if (f !== y) return cn(8, {
      from: R,
      to: y
    });
  }
  function D(y) {
    return B(y);
  }
  function z(y) {
    return D(ee(x(y), {
      replace: !0
    }));
  }
  function J(y) {
    var R = y.matched[y.matched.length - 1];
    if (R && R.redirect) {
      var C = R.redirect;
      var L = typeof C == "function" ? C(y) : C;
      return typeof L == "string" && (L = L.includes("?") || L.includes("#") ? L = x(L) : {
        path: L
      }, L.params = {}), ee({
        query: y.query,
        hash: y.hash,
        params: "path" in L ? {} : y.params
      }, L);
    }
  }
  function B(y, R) {
    var C = f = b(y),
      L = l.value,
      X = y.state,
      de = y.force,
      K = y.replace === !0,
      u = J(C);
    if (u) return B(ee(x(u), {
      state: _typeof(u) == "object" ? ee({}, X, u.state) : X,
      force: de,
      replace: K
    }), R || C);
    var m = C;
    m.redirectedFrom = R;
    var g;
    return !de && ku(r, L, C) && (g = cn(16, {
      to: m,
      from: L
    }), Ot(L, L, !0, !1)), (g ? Promise.resolve(g) : se(m, L))["catch"](function (v) {
      return at(v) ? at(v, 2) ? v : ze(v) : re(v, m, L);
    }).then(function (v) {
      if (v) {
        if (at(v, 2)) return B(ee({
          replace: K
        }, x(v.to), {
          state: _typeof(v.to) == "object" ? ee({}, X, v.to.state) : X,
          force: de
        }), R || m);
      } else v = Oe(m, L, !0, K, X);
      return xe(m, L, v), v;
    });
  }
  function Y(y, R) {
    var C = A(y, R);
    return C ? Promise.reject(C) : Promise.resolve();
  }
  function se(y, R) {
    var C;
    var _d6 = _d(y, R),
      _d7 = _slicedToArray(_d6, 3),
      L = _d7[0],
      X = _d7[1],
      de = _d7[2];
    C = aa(L.reverse(), "beforeRouteLeave", y, R);
    var _iterator15 = _createForOfIteratorHelper(L),
      _step15;
    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var u = _step15.value;
        u.leaveGuards.forEach(function (m) {
          C.push(bt(m, y, R));
        });
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }
    var K = Y.bind(null, y, R);
    return C.push(K), Kt(C).then(function () {
      C = [];
      var _iterator16 = _createForOfIteratorHelper(i.list()),
        _step16;
      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var u = _step16.value;
          C.push(bt(u, y, R));
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
      return C.push(K), Kt(C);
    }).then(function () {
      C = aa(X, "beforeRouteUpdate", y, R);
      var _iterator17 = _createForOfIteratorHelper(X),
        _step17;
      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var u = _step17.value;
          u.updateGuards.forEach(function (m) {
            C.push(bt(m, y, R));
          });
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
      return C.push(K), Kt(C);
    }).then(function () {
      C = [];
      var _iterator18 = _createForOfIteratorHelper(y.matched),
        _step18;
      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var u = _step18.value;
          if (u.beforeEnter && !R.matched.includes(u)) if (Qe(u.beforeEnter)) {
            var _iterator19 = _createForOfIteratorHelper(u.beforeEnter),
              _step19;
            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var _m5 = _step19.value;
                C.push(bt(_m5, y, R));
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
          } else C.push(bt(u.beforeEnter, y, R));
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
      return C.push(K), Kt(C);
    }).then(function () {
      return y.matched.forEach(function (u) {
        return u.enterCallbacks = {};
      }), C = aa(de, "beforeRouteEnter", y, R), C.push(K), Kt(C);
    }).then(function () {
      C = [];
      var _iterator20 = _createForOfIteratorHelper(o.list()),
        _step20;
      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var u = _step20.value;
          C.push(bt(u, y, R));
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
      return C.push(K), Kt(C);
    })["catch"](function (u) {
      return at(u, 8) ? u : Promise.reject(u);
    });
  }
  function xe(y, R, C) {
    var _iterator21 = _createForOfIteratorHelper(s.list()),
      _step21;
    try {
      for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
        var L = _step21.value;
        L(y, R, C);
      }
    } catch (err) {
      _iterator21.e(err);
    } finally {
      _iterator21.f();
    }
  }
  function Oe(y, R, C, L, X) {
    var de = A(y, R);
    if (de) return de;
    var K = R === ht,
      u = qt ? history.state : {};
    C && (L || K ? a.replace(y.fullPath, ee({
      scroll: K && u && u.scroll
    }, X)) : a.push(y.fullPath, X)), l.value = y, Ot(y, R, C, K), ze();
  }
  var je;
  function mt() {
    je || (je = a.listen(function (y, R, C) {
      if (!qn.listening) return;
      var L = b(y),
        X = J(L);
      if (X) {
        B(ee(X, {
          replace: !0
        }), L)["catch"](En);
        return;
      }
      f = L;
      var de = l.value;
      qt && Ru(eo(de.fullPath, C.delta), Br()), se(L, de)["catch"](function (K) {
        return at(K, 12) ? K : at(K, 2) ? (B(K.to, L).then(function (u) {
          at(u, 20) && !C.delta && C.type === Ln.pop && a.go(-1, !1);
        })["catch"](En), Promise.reject()) : (C.delta && a.go(-C.delta, !1), re(K, L, de));
      }).then(function (K) {
        K = K || Oe(L, de, !1), K && (C.delta && !at(K, 8) ? a.go(-C.delta, !1) : C.type === Ln.pop && at(K, 20) && a.go(-1, !1)), xe(L, de, K);
      })["catch"](En);
    }));
  }
  var Ne = bn(),
    we = bn(),
    ve;
  function re(y, R, C) {
    ze(y);
    var L = we.list();
    return L.length ? L.forEach(function (X) {
      return X(y, R, C);
    }) : console.error(y), Promise.reject(y);
  }
  function te() {
    return ve && l.value !== ht ? Promise.resolve() : new Promise(function (y, R) {
      Ne.add([y, R]);
    });
  }
  function ze(y) {
    return ve || (ve = !y, mt(), Ne.list().forEach(function (_ref23) {
      var _ref24 = _slicedToArray(_ref23, 2),
        R = _ref24[0],
        C = _ref24[1];
      return y ? C(y) : R();
    }), Ne.reset()), y;
  }
  function Ot(y, R, C, L) {
    var X = e.scrollBehavior;
    if (!qt || !X) return Promise.resolve();
    var de = !C && Tu(eo(y.fullPath, 0)) || (L || !C) && history.state && history.state.scroll || null;
    return Ga().then(function () {
      return X(y, R, de);
    }).then(function (K) {
      return K && Iu(K);
    })["catch"](function (K) {
      return re(K, y, R);
    });
  }
  var Be = function Be(y) {
    return a.go(y);
  };
  var Ce;
  var Ut = new Set(),
    qn = {
      currentRoute: l,
      listening: !0,
      addRoute: h,
      removeRoute: k,
      hasRoute: F,
      getRoutes: O,
      resolve: b,
      options: e,
      push: D,
      replace: z,
      go: Be,
      back: function back() {
        return Be(-1);
      },
      forward: function forward() {
        return Be(1);
      },
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: s.add,
      onError: we.add,
      isReady: te,
      install: function install(y) {
        var R = this;
        y.component("RouterLink", hd), y.component("RouterView", el), y.config.globalProperties.$router = R, Object.defineProperty(y.config.globalProperties, "$route", {
          enumerable: !0,
          get: function get() {
            return Z(l);
          }
        }), qt && !Ce && l.value === ht && (Ce = !0, D(a.location)["catch"](function (X) {}));
        var C = {};
        var _loop8 = function _loop8(X) {
          C[X] = ce(function () {
            return l.value[X];
          });
        };
        for (var X in ht) {
          _loop8(X);
        }
        y.provide(ai, R), y.provide(Zs, pn(C)), y.provide(xa, l);
        var L = y.unmount;
        Ut.add(y), y.unmount = function () {
          Ut["delete"](y), Ut.size < 1 && (f = ht, je && je(), je = null, l.value = ht, Ce = !1, ve = !1), L();
        };
      }
    };
  return qn;
}
function Kt(e) {
  return e.reduce(function (t, n) {
    return t.then(function () {
      return n();
    });
  }, Promise.resolve());
}
function _d(e, t) {
  var n = [],
    r = [],
    a = [],
    i = Math.max(t.matched.length, e.matched.length);
  var _loop9 = function _loop9() {
    var s = t.matched[o];
    s && (e.matched.find(function (f) {
      return ln(f, s);
    }) ? r.push(s) : n.push(s));
    var l = e.matched[o];
    l && (t.matched.find(function (f) {
      return ln(f, l);
    }) || a.push(l));
  };
  for (var o = 0; o < i; o++) {
    _loop9();
  }
  return [n, r, a];
}
var xd = ft({
  __name: "App",
  setup: function setup(e) {
    return function (t, n) {
      return me(), an(Z(el));
    };
  }
});
var wd = !1; /*!
             * pinia v2.0.31
             * (c) 2023 Eduardo San Martin Morote
             * @license MIT
             */
var tl;
var Hr = function Hr(e) {
    return tl = e;
  },
  nl = Symbol();
function wa(e) {
  return e && _typeof(e) == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var An;
(function (e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(An || (An = {}));
function kd() {
  var e = Jo(!0),
    t = e.run(function () {
      return Xa({});
    });
  var n = [],
    r = [];
  var a = rn({
    install: function install(i) {
      Hr(a), a._a = i, i.provide(nl, a), i.config.globalProperties.$pinia = a, r.forEach(function (o) {
        return n.push(o);
      }), r = [];
    },
    use: function use(i) {
      return !this._a && !wd ? r.push(i) : n.push(i), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t
  });
  return a;
}
var rl = function rl() {};
function ho(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : rl;
  e.push(t);
  var a = function a() {
    var i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), r());
  };
  return !n && Zo() && rc(a), a;
}
function Yt(e) {
  for (var _len7 = arguments.length, t = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    t[_key7 - 1] = arguments[_key7];
  }
  e.slice().forEach(function (n) {
    n.apply(void 0, t);
  });
}
function ka(e, t) {
  e instanceof Map && t instanceof Map && t.forEach(function (n, r) {
    return e.set(r, n);
  }), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (var n in t) {
    if (!t.hasOwnProperty(n)) continue;
    var r = t[n],
      a = e[n];
    wa(a) && wa(r) && e.hasOwnProperty(n) && !ge(r) && !xt(r) ? e[n] = ka(a, r) : e[n] = r;
  }
  return e;
}
var Ed = Symbol();
function Sd(e) {
  return !wa(e) || !e.hasOwnProperty(Ed);
}
var yt = Object.assign;
function Ad(e) {
  return !!(ge(e) && e.effect);
}
function Pd(e, t, n, r) {
  var a = t.state,
    i = t.actions,
    o = t.getters,
    s = n.state.value[e];
  var l;
  function f() {
    s || (n.state.value[e] = a ? a() : {});
    var c = Fc(n.state.value[e]);
    return yt(c, i, Object.keys(o || {}).reduce(function (d, p) {
      return d[p] = rn(ce(function () {
        Hr(n);
        var h = n._s.get(e);
        return o[p].call(h, h);
      })), d;
    }, {}));
  }
  return l = al(e, f, t, n, r, !0), l.$reset = function () {
    var d = a ? a() : {};
    this.$patch(function (p) {
      yt(p, d);
    });
  }, l;
}
function al(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var r = arguments.length > 3 ? arguments[3] : undefined;
  var a = arguments.length > 4 ? arguments[4] : undefined;
  var i = arguments.length > 5 ? arguments[5] : undefined;
  var o;
  var s = yt({
      actions: {}
    }, n),
    l = {
      deep: !0
    };
  var f,
    c,
    d = rn([]),
    p = rn([]),
    h;
  var k = r.state.value[e];
  !i && !k && (r.state.value[e] = {}), Xa({});
  var O;
  function F(B) {
    var Y;
    f = c = !1, typeof B == "function" ? (B(r.state.value[e]), Y = {
      type: An.patchFunction,
      storeId: e,
      events: h
    }) : (ka(r.state.value[e], B), Y = {
      type: An.patchObject,
      payload: B,
      storeId: e,
      events: h
    });
    var se = O = Symbol();
    Ga().then(function () {
      O === se && (f = !0);
    }), c = !0, Yt(d, Y, r.state.value[e]);
  }
  var b = rl;
  function x() {
    o.stop(), d = [], p = [], r._s["delete"](e);
  }
  function A(B, Y) {
    return function () {
      Hr(r);
      var se = Array.from(arguments),
        xe = [],
        Oe = [];
      function je(we) {
        xe.push(we);
      }
      function mt(we) {
        Oe.push(we);
      }
      Yt(p, {
        args: se,
        name: B,
        store: z,
        after: je,
        onError: mt
      });
      var Ne;
      try {
        Ne = Y.apply(this && this.$id === e ? this : z, se);
      } catch (we) {
        throw Yt(Oe, we), we;
      }
      return Ne instanceof Promise ? Ne.then(function (we) {
        return Yt(xe, we), we;
      })["catch"](function (we) {
        return Yt(Oe, we), Promise.reject(we);
      }) : (Yt(xe, Ne), Ne);
    };
  }
  var D = {
      _p: r,
      $id: e,
      $onAction: ho.bind(null, p),
      $patch: F,
      $reset: b,
      $subscribe: function $subscribe(B) {
        var Y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var se = ho(d, B, Y.detached, function () {
            return xe();
          }),
          xe = o.run(function () {
            return en(function () {
              return r.state.value[e];
            }, function (Oe) {
              (Y.flush === "sync" ? c : f) && B({
                storeId: e,
                type: An.direct,
                events: h
              }, Oe);
            }, yt({}, l, Y));
          });
        return se;
      },
      $dispose: x
    },
    z = pn(D);
  r._s.set(e, z);
  var J = r._e.run(function () {
    return o = Jo(), o.run(function () {
      return t();
    });
  });
  for (var B in J) {
    var Y = J[B];
    if (ge(Y) && !Ad(Y) || xt(Y)) i || (k && Sd(Y) && (ge(Y) ? Y.value = k[B] : ka(Y, k[B])), r.state.value[e][B] = Y);else if (typeof Y == "function") {
      var se = A(B, Y);
      J[B] = se, s.actions[B] = Y;
    }
  }
  return yt(z, J), yt(G(z), J), Object.defineProperty(z, "$state", {
    get: function get() {
      return r.state.value[e];
    },
    set: function set(B) {
      F(function (Y) {
        yt(Y, B);
      });
    }
  }), r._p.forEach(function (B) {
    yt(z, o.run(function () {
      return B({
        store: z,
        app: r._a,
        pinia: r,
        options: s
      });
    }));
  }), k && i && n.hydrate && n.hydrate(z.$state, k), f = !0, c = !0, z;
}
function Od(e, t, n) {
  var r, a;
  var i = typeof t == "function";
  typeof e == "string" ? (r = e, a = i ? n : t) : (a = e, r = e.id);
  function o(s, l) {
    var f = zf();
    return s = s || f && nt(nl, null), s && Hr(s), s = tl, s._s.has(r) || (i ? al(r, t, a, s) : Pd(r, a, s)), s._s.get(r);
  }
  return o.$id = r, o;
}
var Cd = {
  data: function data() {
    return {
      holdStartTimestamp: 0
    };
  },
  props: {
    name: {
      type: String,
      "default": "Food name"
    },
    icon: {
      type: String,
      "default": "egg"
    },
    description: {
      type: String,
      "default": ""
    },
    protein: {
      type: Number,
      "default": 0
    },
    fat: {
      type: Number,
      "default": 0
    },
    carbs: {
      type: Number,
      "default": 0
    },
    amount: {
      type: Number,
      "default": void 0
    },
    selected: {
      type: Boolean,
      "default": !1
    },
    extra: {
      type: String,
      "default": void 0
    }
  },
  computed: {
    calories: function calories() {
      return 9 * this.fat + 4 * this.protein + 4 * this.carbs;
    },
    amountDisplay: function amountDisplay() {
      if (this.amount !== void 0) return this.amount == .5 ? "½" : this.amount.toString();
    }
  },
  methods: {
    resolveImg: function resolveImg(e) {
      return "./food/".concat(e, ".svg");
    },
    heldLongEnough: function heldLongEnough() {
      var e = new Date().getTime(),
        t = 500;
      return e - this.holdStartTimestamp > t;
    },
    topClick: function topClick() {
      this.heldLongEnough() || this.$emit("topClick");
    },
    bottomClick: function bottomClick() {
      this.heldLongEnough() || this.$emit("bottomClick");
    },
    holdStart: function holdStart() {
      this.holdStartTimestamp = new Date().getTime();
    },
    holdEnd: function holdEnd() {
      this.heldLongEnough() && this.$emit("hold");
    }
  }
};
var Hn = function Hn(e, t) {
    var n = e.__vccOpts || e;
    var _iterator22 = _createForOfIteratorHelper(t),
      _step22;
    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
        var _step22$value = _slicedToArray(_step22.value, 2),
          r = _step22$value[0],
          a = _step22$value[1];
        n[r] = a;
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }
    return n;
  },
  Id = {
    "class": "food-icon"
  },
  Rd = ["src"],
  Td = {
    key: 0,
    "class": "food-amount"
  },
  Nd = {
    key: 1,
    "class": "food-quantity"
  },
  Md = {
    "class": "food-name"
  };
function Fd(e, t, n, r, a, i) {
  return me(), ke("div", {
    "class": Cr(["food-item", {
      selected: n.selected
    }])
  }, [V("div", {
    "class": "food-item-top",
    onClick: t[0] || (t[0] = function (o) {
      return i.topClick();
    }),
    onMousedown: t[1] || (t[1] = function (o) {
      return i.holdStart();
    }),
    onMouseup: t[2] || (t[2] = function (o) {
      return i.holdEnd();
    }),
    onTouchstart: t[3] || (t[3] = function (o) {
      return i.holdStart();
    }),
    onTouchend: t[4] || (t[4] = function (o) {
      return i.holdEnd();
    })
  }, null, 32), V("div", {
    "class": "food-item-bottom",
    onClick: t[5] || (t[5] = function (o) {
      return i.bottomClick();
    }),
    onMousedown: t[6] || (t[6] = function (o) {
      return i.holdStart();
    }),
    onMouseup: t[7] || (t[7] = function (o) {
      return i.holdEnd();
    }),
    onTouchstart: t[8] || (t[8] = function (o) {
      return i.holdStart();
    }),
    onTouchend: t[9] || (t[9] = function (o) {
      return i.holdEnd();
    })
  }, null, 32), V("div", Id, [V("img", {
    src: i.resolveImg(n.icon)
  }, null, 8, Rd)]), n.amount ? (me(), ke("div", Td, De(n.amount), 1)) : Ye("", !0), n.extra ? (me(), ke("div", Nd, De(n.extra), 1)) : Ye("", !0), V("div", Md, [V("span", null, De(n.name), 1)])], 2);
}
var Ld = Hn(Cd, [["render", Fd]]);
var il = function (e) {
  return e.ALL = "all", e.PROTEIN = "protein", e.FAT = "fat", e.CARBS = "carbs", e;
}(il || {});
var $d = {
  proteinSetpoint: 110,
  fatSetpoint: 105,
  carbsSetpoint: 100,
  daysSetpoint: 1,
  calculationMethod: "all"
};
function go(e, t) {
  var n = _toConsumableArray(e),
    r = 1,
    a = n.sort(function () {
      return .5 - Math.random();
    }),
    i = [];
  var _iterator23 = _createForOfIteratorHelper(a.slice(0, r)),
    _step23;
  try {
    for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
      var o = _step23.value;
      i.push(It(Ct({}, o), {
        amount: 1,
        selected: !1
      })), i.push(It(Ct({}, o), {
        amount: .5,
        selected: !1
      }));
    }
  } catch (err) {
    _iterator23.e(err);
  } finally {
    _iterator23.f();
  }
  return i;
}
var jd = [{
    id: "1",
    name: "Wrap",
    icon: "burrito",
    description: "Wrap con 2 fetas de queso y 4 fetas de fiambre.",
    protein: 38.61,
    fat: 42.5,
    carbs: 50.6
  }, {
    id: "2",
    name: "Wrap 🌿",
    icon: "burrito",
    description: "Wrap veggie con 2 fetas de queso, palta, tomate y lechuga.",
    protein: 44.7,
    fat: 49,
    carbs: 49.1
  }, {
    id: "3",
    name: "Sandwich",
    icon: "sandwich",
    description: "Sandwich con 1 feta de queso y 3 fetas de fiambre.",
    protein: 36.61,
    fat: 40.5,
    carbs: 33.3
  }, {
    id: "4",
    name: "Sandwich 🌿",
    icon: "sandwich",
    description: "Sandwich veggie con 2 fetas de queso, lechuga y tomate o palta.",
    protein: 42.7,
    fat: 47,
    carbs: 37.8
  }, {
    id: "5",
    name: "Taquito carne",
    icon: "burrito",
    description: "Taquito con carne de cerdo o pollo, ketchup, beans y choclo.",
    protein: 44.97,
    fat: 40.435,
    carbs: 49.1
  }, {
    id: "6",
    name: "Bread slice",
    icon: "bread",
    description: "One slice of white bread.",
    protein: 2.3,
    fat: .8,
    carbs: 9.9
  }, {
    id: "7",
    name: "Peanut butter",
    icon: "peanut-butter",
    description: "One spoonful (25g) of peanut butter.",
    protein: 6.75,
    fat: 13.25,
    carbs: 4.25
  }, {
    id: "8",
    name: "Peanuts",
    icon: "peanut",
    description: "10 peanuts, nuts or cashews (25g).",
    protein: 7.3,
    fat: 6.1,
    carbs: 13.8
  }, {
    id: "9",
    name: "Tarta acelga",
    description: "2 porciones de tarta de acelga.",
    icon: "tart",
    protein: 27.6,
    fat: 34.35,
    carbs: 38.25
  }, {
    id: "9.5",
    name: "Tarta J&Q",
    icon: "tart",
    description: "2 porciones de jamon y queso.",
    protein: 37.9,
    fat: 51.65,
    carbs: 32.25
  }, {
    id: "9.6",
    name: "Tarta atun",
    icon: "tart",
    description: "2 porciones de empanada gallega.",
    protein: 21.8,
    fat: 18.5,
    carbs: 57.5
  }, {
    id: "10",
    name: "Burger (patty)",
    icon: "burger",
    description: "Plain burger (patty) with some ketchup.",
    protein: 7.3,
    fat: 6.1,
    carbs: 13.8
  }, {
    id: "11.5",
    name: "Burger",
    icon: "burger",
    description: "Complete burger (buns, patty, lettuce, egg and ketchup).",
    protein: 37.6,
    fat: 44.4,
    carbs: 35.2
  }, {
    id: "11.6",
    name: "Empanada",
    icon: "dumpling",
    description: "Una empanada de carne o jamon y queso.",
    protein: 8.7,
    fat: 14.2,
    carbs: 24.1
  }, {
    id: "11",
    name: "Fish nuggets",
    icon: "fish",
    description: "4 fish sticks or chicken nuggets.",
    protein: 15.6,
    fat: 9.6,
    carbs: 21.2
  }, {
    id: "12",
    name: "Diced meat",
    icon: "meat",
    description: "130 grams of pork, chicken or beef.",
    protein: 36.64,
    fat: 22.83,
    carbs: 0
  }, {
    id: "12.1",
    name: "Steak",
    icon: "steak",
    description: "Beef steak or mileansea",
    protein: 53.8,
    fat: 14.4,
    carbs: 20
  }, {
    id: "13",
    name: "Egg",
    icon: "egg",
    description: "1 boiled egg.",
    protein: 6.1,
    fat: 5.6,
    carbs: .1
  }, {
    id: "14",
    name: "Baby carrots",
    icon: "carrot",
    description: "10 baby carrots (100 grams).",
    protein: .5,
    fat: .3,
    carbs: 13.6
  }, {
    id: "15",
    name: "Potatoes",
    icon: "potato",
    description: "1 serving of mashed or baked potatoes",
    protein: 9.255,
    fat: 14.46,
    carbs: 53.04
  }, {
    id: "16",
    name: "Torrejas",
    icon: "broccoli",
    description: "4 torrejas de brocoli o arroz.",
    protein: 2.261,
    fat: 14.763,
    carbs: 20.083
  }, {
    id: "16.5",
    name: "Pasta",
    description: "One medium serving of spaghetti with tomato sauce.",
    icon: "noodles",
    protein: 13.5,
    fat: 5.9,
    carbs: 54.5
  }, {
    id: "17",
    name: "Pop-corn",
    description: "Half a bowl of pop-corn.",
    icon: "pop-corn",
    protein: 2.9,
    fat: 13.5,
    carbs: 22
  }, {
    id: "18",
    name: "Fruit",
    icon: "kiwi",
    description: "1 kiwi, 1 orange, 10 grapes, 1 tangerine or half an apple",
    protein: .5,
    fat: .3,
    carbs: 13.6
  }, {
    id: "19",
    name: "Chocolate",
    descriptions: "One block (50g) of dark chocolate",
    icon: "chocolate",
    protein: .53,
    fat: 2.9,
    carbs: 5.4
  }, {
    id: "19.1",
    name: "Cookie",
    description: "Tree normal cookies or two chocolate-chip cookies",
    icon: "cookie",
    protein: 1.1,
    fat: 4.1,
    carbs: 15.3
  }, {
    id: "20",
    description: "3 slices of home-made pizza.",
    name: "Pizza",
    icon: "pizza",
    protein: 20.2,
    fat: 21.6,
    carbs: 51.5
  }, {
    id: "21",
    description: "Fries with ketchup (oven or air-fried) or nachos with guacamole.",
    name: "Fries",
    icon: "fries",
    protein: 4.8,
    fat: 19.5,
    carbs: 51.4
  }],
  Un = Od("mainStore", {
    state: function state() {
      return {
        allFoods: jd,
        planData: [],
        planInfo: void 0,
        today: 0,
        modal_food_info: void 0
      };
    },
    getters: {
      maxFoodCalories: function maxFoodCalories() {
        var e = function e(t) {
          return t.protein * 4 + t.fat * 9 + t.carbs * 4;
        };
        return Math.max.apply(Math, _toConsumableArray(this.allFoods.map(e)));
      },
      todaysFoods: function todaysFoods() {
        return this.planData[this.today];
      },
      todaysFoodsExtended: function todaysFoodsExtended() {
        var e = new Map();
        var _iterator24 = _createForOfIteratorHelper(this.planData[this.today]),
          _step24;
        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var t = _step24.value;
            e.set(t.id, (e.get(t.id) || 0) + (t.amount || 0));
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
        return this.allFoods.map(function (t) {
          return It(Ct({}, t), {
            amount: e.get(t.id)
          });
        });
      },
      todaysQuantities: function todaysQuantities() {
        var e = {
          protein: 0,
          fat: 0,
          carbs: 0
        };
        var _iterator25 = _createForOfIteratorHelper(this.planData[this.today]),
          _step25;
        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var t = _step25.value;
            e.protein += t.protein * (t.amount || 0), e.fat += t.fat * (t.amount || 0), e.carbs += t.carbs * (t.amount || 0);
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
        return e;
      },
      todaysQuantitiesSelected: function todaysQuantitiesSelected() {
        var e = {
          protein: 0,
          fat: 0,
          carbs: 0
        };
        var _iterator26 = _createForOfIteratorHelper(this.planData[this.today]),
          _step26;
        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var t = _step26.value;
            t.selected && (e.protein += t.protein * (t.amount || 0), e.fat += t.fat * (t.amount || 0), e.carbs += t.carbs * (t.amount || 0));
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }
        return e;
      },
      allPlanQuantities: function allPlanQuantities() {
        var e = {
          protein: 0,
          fat: 0,
          carbs: 0
        };
        for (var t = 0; t < this.planData.length; t++) {
          var _iterator27 = _createForOfIteratorHelper(this.planData[t]),
            _step27;
          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var n = _step27.value;
              e.protein += n.protein * (n.amount || 0), e.fat += n.fat * (n.amount || 0), e.carbs += n.carbs * (n.amount || 0);
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }
        }
        return e;
      }
    },
    actions: {
      log: function log(e) {
        console.log("[INFO]", e);
      },
      error: function error(e) {
        console.error("[ERROR]", e);
      },
      save: function save() {
        localStorage.setItem("planData", JSON.stringify(this.planData)), this.planInfo !== void 0 && localStorage.setItem("planInfo", JSON.stringify(this.planInfo));
      },
      load: function load() {
        var e = localStorage.getItem("planData");
        this.planData = e ? JSON.parse(e) : [[]];
        var t = localStorage.getItem("planInfo");
        t ? this.planInfo = JSON.parse(t) : this.planInfo = It(Ct({}, $d), {
          created: new Date().getTime()
        });
      },
      updateFoodAmount: function updateFoodAmount(e, t) {
        var n = (e.amount || 0) + t;
        if (n < 0) return;
        var r = new Map();
        var _iterator28 = _createForOfIteratorHelper(this.planData[this.today]),
          _step28;
        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var i = _step28.value;
            r.set(i.id, (r.get(i.id) || 0) + (i.amount || 0));
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
        r.set(e.id, n);
        var a = [];
        var _iterator29 = _createForOfIteratorHelper(this.allFoods),
          _step29;
        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var _i7 = _step29.value;
            var o = r.get(_i7.id);
            o !== void 0 && o !== 0 && a.push(It(Ct({}, _i7), {
              amount: o
            }));
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
        this.planData[this.today] = a, this.planData = _toConsumableArray(this.planData), this.save();
      },
      toggleSelected: function toggleSelected(e) {
        e.selected = e.selected !== void 0 ? !e.selected : !0, this.save();
      },
      redoPlanToday: function redoPlanToday() {
        this.planInfo !== void 0 && (this.planData[this.today] = go(this.allFoods, this.planInfo), this.save());
      },
      redoPlanAll: function redoPlanAll() {
        if (this.planInfo === void 0) return;
        var e = [];
        for (var t = 0; t < this.planInfo.daysSetpoint; t++) e.push(go(this.allFoods, this.planInfo));
        this.planData = e, this.save();
      },
      nextDay: function nextDay() {
        this.today += 1, this.today >= this.planData.length && (this.today = this.planData.length - 1);
      },
      previousDay: function previousDay() {
        this.today -= 1, this.today < 0 && (this.today = 0);
      },
      openModalFoodInfo: function openModalFoodInfo(e) {
        this.modal_food_info = e;
      },
      closeModals: function closeModals() {
        this.modal_food_info = void 0;
      }
    }
  }),
  Dd = "/assets/logo-ae6256b8.svg";
var zd = {},
  Bd = {
    "class": "title-container"
  },
  Hd = {
    "class": "title-icon"
  },
  Ud = V("img", {
    src: Dd
  }, null, -1),
  Wd = {
    "class": "title-icon"
  };
function Kd(e, t) {
  return me(), ke("div", Bd, [V("div", Hd, [_r(e.$slots, "left-icon")]), Ud, V("div", Wd, [_r(e.$slots, "right-icon")])]);
}
var Yd = Hn(zd, [["render", Kd]]),
  qd = ft({
    __name: "DayEdit",
    setup: function setup(e) {
      var t = Un();
      return function (n, r) {
        return me(!0), ke(Le, null, pf(Z(t).todaysFoodsExtended, function (a) {
          return me(), an(Ld, {
            name: a.name,
            icon: a.icon,
            description: a.description,
            protein: a.protein,
            fat: a.fat,
            carbs: a.carbs,
            amount: a.amount,
            selected: a.amount ? a.amount > 0 : !1,
            onTopClick: function onTopClick(i) {
              return Z(t).updateFoodAmount(a, 1);
            },
            onBottomClick: function onBottomClick(i) {
              return Z(t).updateFoodAmount(a, -1);
            },
            onHold: function onHold(i) {
              return Z(t).openModalFoodInfo(a);
            }
          }, null, 8, ["name", "icon", "description", "protein", "fat", "carbs", "amount", "selected", "onTopClick", "onBottomClick", "onHold"]);
        }), 256);
      };
    }
  }),
  vo = {
    primary: "#3089b3",
    secondary: "#0745FF",
    danger: "#d8062d",
    gray_0: "##dfdfdf",
    gray_1: "##c2c2c2",
    gray_2: "##848484",
    bg_light: "#F2F2F2",
    bg_dark: "#181818",
    text_light: "#000000",
    text_dark: "#FFFFFF"
  },
  Vd = {
    props: {
      value: {
        type: Number,
        "default": 0
      },
      setpoint: {
        type: Number,
        "default": 0
      },
      unit: {
        type: String,
        "default": ""
      },
      text: {
        type: String,
        "default": ""
      }
    },
    computed: {
      valuePercentage: function valuePercentage() {
        return this.setpoint == 0 ? 0 : 100 * this.value / this.setpoint;
      },
      valueRounded: function valueRounded() {
        return this.value.toFixed();
      },
      barWidth: function barWidth() {
        return this.valuePercentage < 50 ? 0 : this.valuePercentage > 150 ? 100 : 100 * (this.valuePercentage - 50) / (150 - 50);
      },
      barColor: function barColor() {
        return this.valuePercentage < 85 || this.valuePercentage > 115 ? vo.danger : vo.primary;
      }
    }
  };
var Xd = {
    "class": "quantity-bar-container"
  },
  Qd = {
    "class": "quantity-bar-outer"
  },
  Gd = {
    key: 0
  },
  Jd = {
    key: 1
  };
function Zd(e, t, n, r, a, i) {
  return me(), ke("div", Xd, [V("small", null, De(n.text), 1), V("div", Qd, [V("div", {
    "class": "quantity-bar-inner",
    style: jt({
      width: i.barWidth + "%",
      backgroundColor: i.barColor
    })
  }, null, 4)]), n.value != 0 ? (me(), ke("small", Gd, De(i.valueRounded) + De(n.unit), 1)) : Ye("", !0), n.value == 0 ? (me(), ke("small", Jd, "-")) : Ye("", !0)]);
}
var er = Hn(Vd, [["render", Zd]]),
  em = {
    "class": "info-panel-container"
  },
  tm = V("div", {
    "class": "info-panel-icon"
  }, null, -1),
  nm = V("div", {
    style: {
      flex: "1"
    }
  }, null, -1),
  rm = V("div", {
    style: {
      flex: "1"
    }
  }, null, -1),
  am = V("div", {
    "class": "info-panel-icon"
  }, null, -1),
  im = {
    props: {
      protein: {
        type: Number,
        "default": 0
      },
      fat: {
        type: Number,
        "default": 0
      },
      carbs: {
        type: Number,
        "default": 0
      },
      proteinSetpoint: {
        type: Number,
        "default": 0
      },
      fatSetpoint: {
        type: Number,
        "default": 0
      },
      carbsSetpoint: {
        type: Number,
        "default": 0
      }
    },
    computed: {
      calories: function calories() {
        return 4 * this.protein + 4 * this.carbs + 9 * this.fat;
      },
      caloriesSetpoint: function caloriesSetpoint() {
        return 4 * this.proteinSetpoint + 4 * this.carbsSetpoint + 9 * this.fatSetpoint;
      }
    }
  },
  om = ft(It(Ct({}, im), {
    __name: "InfoPanel",
    setup: function setup(e) {
      return function (t, n) {
        return me(), ke("div", em, [_r(t.$slots, "left-icon", {}, function () {
          return [tm];
        }), nm, fe(er, {
          text: "Protein",
          value: e.protein,
          unit: "g",
          setpoint: e.proteinSetpoint
        }, null, 8, ["value", "setpoint"]), fe(er, {
          text: "Fat",
          value: e.fat,
          unit: "g",
          setpoint: e.fatSetpoint
        }, null, 8, ["value", "setpoint"]), fe(er, {
          text: "Carbs",
          value: e.carbs,
          unit: "g",
          setpoint: e.carbsSetpoint
        }, null, 8, ["value", "setpoint"]), fe(er, {
          text: "Calories",
          value: t.calories,
          unit: "",
          setpoint: t.caloriesSetpoint
        }, null, 8, ["value", "setpoint"]), rm, _r(t.$slots, "right-icon", {}, function () {
          return [am];
        })]);
      };
    }
  }));
var sm = {
  data: function data() {
    return {
      maxCalories: Un().maxFoodCalories
    };
  },
  props: {
    protein: {
      type: Number,
      "default": 0
    },
    fat: {
      type: Number,
      "default": 0
    },
    carbs: {
      type: Number,
      "default": 0
    }
  },
  computed: {
    calories: function calories() {
      return 9 * this.fat + 4 * this.protein + 4 * this.carbs;
    },
    proteinBarWidth: function proteinBarWidth() {
      return 100 * (4 * this.protein / this.calories);
    },
    fatBarWidth: function fatBarWidth() {
      return 100 * (9 * this.fat / this.calories);
    },
    carbsBarWidth: function carbsBarWidth() {
      return 100 * (4 * this.carbs / this.calories);
    }
  }
};
var lm = {
    "class": "food-quantity-bar"
  },
  cm = {
    key: 0
  },
  fm = {
    key: 0
  },
  um = {
    key: 0
  };
function dm(e, t, n, r, a, i) {
  return me(), ke("div", lm, [V("div", {
    "class": "protein-bar",
    style: jt({
      width: i.proteinBarWidth + "%"
    })
  }, [i.proteinBarWidth > 5 ? (me(), ke("span", cm, De(n.protein.toFixed()) + "g", 1)) : Ye("", !0)], 4), V("div", {
    "class": "fat-bar",
    style: jt({
      width: i.fatBarWidth + "%"
    })
  }, [i.fatBarWidth > 5 ? (me(), ke("span", fm, De(n.fat.toFixed()) + "g", 1)) : Ye("", !0)], 4), V("div", {
    "class": "carbs-bar",
    style: jt({
      width: i.carbsBarWidth + "%"
    })
  }, [i.carbsBarWidth > 5 ? (me(), ke("span", um, De(n.carbs.toFixed()) + "g", 1)) : Ye("", !0)], 4)]);
}
var mm = Hn(sm, [["render", dm]]),
  pm = {
    props: {
      name: {
        type: String,
        "default": "Food name"
      },
      icon: {
        type: String,
        "default": "egg"
      },
      description: {
        type: String,
        "default": ""
      },
      protein: {
        type: Number,
        "default": 0
      },
      fat: {
        type: Number,
        "default": 0
      },
      carbs: {
        type: Number,
        "default": 0
      }
    },
    computed: {
      calories: function calories() {
        return (4 * this.protein + 9 * this.fat + 4 * this.carbs).toFixed();
      }
    },
    methods: {
      resolveImg: function resolveImg(e) {
        return "./food/".concat(e, ".svg");
      },
      close: function close() {
        Un().closeModals();
      }
    },
    components: {
      FoodQuantityBar: mm
    }
  };
var hm = {
    "class": "modal"
  },
  gm = {
    "class": "modal-inside"
  },
  vm = {
    "class": "modal-food-info-name"
  },
  bm = {
    "class": "modal-food-info-description"
  },
  ym = V("div", {
    style: {
      flex: "1"
    }
  }, null, -1),
  _m = {
    "class": "modal-food-info-icon"
  },
  xm = ["src"],
  wm = {
    style: {
      padding: "10px"
    }
  },
  km = V("div", {
    style: {
      flex: "1"
    }
  }, null, -1);
function Em(e, t, n, r, a, i) {
  var o = Cs("FoodQuantityBar");
  return me(), ke("div", {
    "class": "modal-outside",
    onClick: t[1] || (t[1] = Qi(function (s) {
      return i.close();
    }, ["self"]))
  }, [V("div", hm, [V("div", gm, [V("div", vm, De(n.name), 1), V("div", bm, De(n.description), 1), ym, V("div", _m, [V("img", {
    src: i.resolveImg(n.icon)
  }, null, 8, xm)]), V("span", wm, De(i.calories) + " kcal", 1), km, fe(o, {
    protein: n.protein,
    fat: n.fat,
    carbs: n.carbs
  }, null, 8, ["protein", "fat", "carbs"])]), V("div", {
    "class": "modal-button",
    onClick: t[0] || (t[0] = Qi(function (s) {
      return i.close();
    }, ["self"]))
  }, "Close")])]);
}
var Sm = Hn(pm, [["render", Em]]),
  Am = {
    "class": "main-container"
  },
  Pm = {
    "class": "main-info-panel-container"
  },
  Om = {
    "class": "main-day-container"
  },
  Cm = ft({
    __name: "MainView",
    setup: function setup(e) {
      var t = Un();
      return function (n, r) {
        var a = Cs("font-awesome-icon");
        return me(), ke(Le, null, [fe(Yd, null, {
          "right-icon": ur(function () {
            return [fe(a, {
              icon: "fa-solid fa-ellipsis"
            })];
          }),
          _: 1
        }), V("div", Am, [Z(t).modal_food_info !== void 0 ? (me(), an(Sm, {
          key: 0,
          name: Z(t).modal_food_info.name,
          icon: Z(t).modal_food_info.icon,
          description: Z(t).modal_food_info.description,
          protein: Z(t).modal_food_info.protein,
          fat: Z(t).modal_food_info.fat,
          carbs: Z(t).modal_food_info.carbs
        }, null, 8, ["name", "icon", "description", "protein", "fat", "carbs"])) : Ye("", !0), V("div", Pm, [Z(t).planInfo !== void 0 ? (me(), an(om, {
          key: 0,
          protein: Z(t).todaysQuantities.protein,
          fat: Z(t).todaysQuantities.fat,
          carbs: Z(t).todaysQuantities.carbs,
          "protein-setpoint": Z(t).planInfo.proteinSetpoint,
          "fat-setpoint": Z(t).planInfo.fatSetpoint,
          "carbs-setpoint": Z(t).planInfo.carbsSetpoint
        }, {
          "left-icon": ur(function () {
            return [Z(t).today > 0 ? (me(), ke("div", {
              key: 0,
              onClick: r[0] || (r[0] = function (i) {
                return Z(t).previousDay();
              }),
              "class": "info-panel-icon"
            }, [fe(a, {
              icon: "fa-solid fa-chevron-left"
            })])) : Ye("", !0)];
          }),
          "right-icon": ur(function () {
            return [Z(t).today + 1 < Z(t).planData.length ? (me(), ke("div", {
              key: 0,
              onClick: r[1] || (r[1] = function (i) {
                return Z(t).nextDay();
              }),
              "class": "info-panel-icon"
            }, [fe(a, {
              icon: "fa-solid fa-chevron-right"
            })])) : Ye("", !0)];
          }),
          _: 1
        }, 8, ["protein", "fat", "carbs", "protein-setpoint", "fat-setpoint", "carbs-setpoint"])) : Ye("", !0)]), V("div", Om, [fe(qd)])])], 64);
      };
    }
  });
var Im = yd({
  history: Lu("/"),
  routes: [{
    path: "/",
    name: "main",
    component: Cm
  }]
});
function bo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bo(Object(n), !0).forEach(function (r) {
      _e(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bo(Object(n)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Er(e) {
  "@babel/helpers - typeof";

  return Er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
    return typeof t;
  } : function (t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Er(e);
}
function Rm(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function yo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Tm(e, t, n) {
  return t && yo(e.prototype, t), n && yo(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _e(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ii(e, t) {
  return Mm(e) || Lm(e, t) || ol(e, t) || jm();
}
function Wn(e) {
  return Nm(e) || Fm(e) || ol(e) || $m();
}
function Nm(e) {
  if (Array.isArray(e)) return Ea(e);
}
function Mm(e) {
  if (Array.isArray(e)) return e;
}
function Fm(e) {
  if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Lm(e, t) {
  var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [],
      a = !0,
      i = !1,
      o,
      s;
    try {
      for (n = n.call(e); !(a = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); a = !0);
    } catch (l) {
      i = !0, s = l;
    } finally {
      try {
        !a && n["return"] != null && n["return"]();
      } finally {
        if (i) throw s;
      }
    }
    return r;
  }
}
function ol(e, t) {
  if (e) {
    if (typeof e == "string") return Ea(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ea(e, t);
  }
}
function Ea(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function $m() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function jm() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var _o = function _o() {},
  oi = {},
  sl = {},
  ll = null,
  cl = {
    mark: _o,
    measure: _o
  };
try {
  typeof window != "undefined" && (oi = window), typeof document != "undefined" && (sl = document), typeof MutationObserver != "undefined" && (ll = MutationObserver), typeof performance != "undefined" && (cl = performance);
} catch (e) {}
var Dm = oi.navigator || {},
  xo = Dm.userAgent,
  wo = xo === void 0 ? "" : xo,
  St = oi,
  oe = sl,
  ko = ll,
  tr = cl;
St.document;
var dt = !!oe.documentElement && !!oe.head && typeof oe.addEventListener == "function" && typeof oe.createElement == "function",
  fl = ~wo.indexOf("MSIE") || ~wo.indexOf("Trident/"),
  nr,
  rr,
  ar,
  ir,
  or,
  st = "___FONT_AWESOME___",
  Sa = 16,
  ul = "fa",
  dl = "svg-inline--fa",
  Bt = "data-fa-i2svg",
  Aa = "data-fa-pseudo-element",
  zm = "data-fa-pseudo-element-pending",
  si = "data-prefix",
  li = "data-icon",
  Eo = "fontawesome-i2svg",
  Bm = "async",
  Hm = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  ml = function () {
    try {
      return !0;
    } catch (e) {
      return !1;
    }
  }(),
  ie = "classic",
  pe = "sharp",
  ci = [ie, pe];
function Kn(e) {
  return new Proxy(e, {
    get: function get(n, r) {
      return r in n ? n[r] : n[ie];
    }
  });
}
var $n = Kn((nr = {}, _e(nr, ie, {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fad: "duotone",
    "fa-duotone": "duotone",
    fab: "brands",
    "fa-brands": "brands",
    fak: "kit",
    "fa-kit": "kit"
  }), _e(nr, pe, {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular"
  }), nr)),
  jn = Kn((rr = {}, _e(rr, ie, {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    duotone: "fad",
    brands: "fab",
    kit: "fak"
  }), _e(rr, pe, {
    solid: "fass",
    regular: "fasr"
  }), rr)),
  Dn = Kn((ar = {}, _e(ar, ie, {
    fab: "fa-brands",
    fad: "fa-duotone",
    fak: "fa-kit",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  }), _e(ar, pe, {
    fass: "fa-solid",
    fasr: "fa-regular"
  }), ar)),
  Um = Kn((ir = {}, _e(ir, ie, {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-kit": "fak",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  }), _e(ir, pe, {
    "fa-solid": "fass",
    "fa-regular": "fasr"
  }), ir)),
  Wm = /fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,
  pl = "fa-layers-text",
  Km = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  Ym = Kn((or = {}, _e(or, ie, {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  }), _e(or, pe, {
    900: "fass",
    400: "fasr"
  }), or)),
  hl = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  qm = hl.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  Vm = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
  Lt = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
  },
  zn = new Set();
Object.keys(jn[ie]).map(zn.add.bind(zn));
Object.keys(jn[pe]).map(zn.add.bind(zn));
var Xm = [].concat(ci, Wn(zn), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Lt.GROUP, Lt.SWAP_OPACITY, Lt.PRIMARY, Lt.SECONDARY]).concat(hl.map(function (e) {
    return "".concat(e, "x");
  })).concat(qm.map(function (e) {
    return "w-".concat(e);
  })),
  Pn = St.FontAwesomeConfig || {};
function Qm(e) {
  var t = oe.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function Gm(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (oe && typeof oe.querySelector == "function") {
  var Jm = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Jm.forEach(function (e) {
    var t = ii(e, 2),
      n = t[0],
      r = t[1],
      a = Gm(Qm(n));
    a != null && (Pn[r] = a);
  });
}
var gl = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: ul,
  replacementClass: dl,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Pn.familyPrefix && (Pn.cssPrefix = Pn.familyPrefix);
var fn = T(T({}, gl), Pn);
fn.autoReplaceSvg || (fn.observeMutations = !1);
var M = {};
Object.keys(gl).forEach(function (e) {
  Object.defineProperty(M, e, {
    enumerable: !0,
    set: function set(n) {
      fn[e] = n, On.forEach(function (r) {
        return r(M);
      });
    },
    get: function get() {
      return fn[e];
    }
  });
});
Object.defineProperty(M, "familyPrefix", {
  enumerable: !0,
  set: function set(t) {
    fn.cssPrefix = t, On.forEach(function (n) {
      return n(M);
    });
  },
  get: function get() {
    return fn.cssPrefix;
  }
});
St.FontAwesomeConfig = M;
var On = [];
function Zm(e) {
  return On.push(e), function () {
    On.splice(On.indexOf(e), 1);
  };
}
var gt = Sa,
  tt = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: !1,
    flipY: !1
  };
function ep(e) {
  if (!(!e || !dt)) {
    var t = oe.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = oe.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
      var i = n[a],
        o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
    }
    return oe.head.insertBefore(t, r), e;
  }
}
var tp = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Bn() {
  for (var e = 12, t = ""; e-- > 0;) t += tp[Math.random() * 62 | 0];
  return t;
}
function hn(e) {
  for (var t = [], n = (e || []).length >>> 0; n--;) t[n] = e[n];
  return t;
}
function fi(e) {
  return e.classList ? hn(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function (t) {
    return t;
  });
}
function vl(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function np(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + "".concat(n, '="').concat(vl(e[n]), '" ');
  }, "").trim();
}
function Ur(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function ui(e) {
  return e.size !== tt.size || e.x !== tt.x || e.y !== tt.y || e.rotate !== tt.rotate || e.flipX || e.flipY;
}
function rp(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    a = {
      transform: "translate(".concat(n / 2, " 256)")
    },
    i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "),
    s = "rotate(".concat(t.rotate, " 0 0)"),
    l = {
      transform: "".concat(i, " ").concat(o, " ").concat(s)
    },
    f = {
      transform: "translate(".concat(r / 2 * -1, " -256)")
    };
  return {
    outer: a,
    inner: l,
    path: f
  };
}
function ap(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? Sa : n,
    a = e.height,
    i = a === void 0 ? Sa : a,
    o = e.startCentered,
    s = o === void 0 ? !1 : o,
    l = "";
  return s && fl ? l += "translate(".concat(t.x / gt - r / 2, "em, ").concat(t.y / gt - i / 2, "em) ") : s ? l += "translate(calc(-50% + ".concat(t.x / gt, "em), calc(-50% + ").concat(t.y / gt, "em)) ") : l += "translate(".concat(t.x / gt, "em, ").concat(t.y / gt, "em) "), l += "scale(".concat(t.size / gt * (t.flipX ? -1 : 1), ", ").concat(t.size / gt * (t.flipY ? -1 : 1), ") "), l += "rotate(".concat(t.rotate, "deg) "), l;
}
var ip = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Solid\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Regular\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Light\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Thin\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-sharp-solid: normal 900 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-regular: normal 400 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}";
function bl() {
  var e = ul,
    t = dl,
    n = M.cssPrefix,
    r = M.replacementClass,
    a = ip;
  if (n !== e || r !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"),
      o = new RegExp("\\--".concat(e, "\\-"), "g"),
      s = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return a;
}
var So = !1;
function ia() {
  M.autoAddCss && !So && (ep(bl()), So = !0);
}
var op = {
    mixout: function mixout() {
      return {
        dom: {
          css: bl,
          insertCss: ia
        }
      };
    },
    hooks: function hooks() {
      return {
        beforeDOMElementCreation: function beforeDOMElementCreation() {
          ia();
        },
        beforeI2svg: function beforeI2svg() {
          ia();
        }
      };
    }
  },
  lt = St || {};
lt[st] || (lt[st] = {});
lt[st].styles || (lt[st].styles = {});
lt[st].hooks || (lt[st].hooks = {});
lt[st].shims || (lt[st].shims = []);
var qe = lt[st],
  yl = [],
  sp = function e() {
    oe.removeEventListener("DOMContentLoaded", e), Sr = 1, yl.map(function (t) {
      return t();
    });
  },
  Sr = !1;
dt && (Sr = (oe.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(oe.readyState), Sr || oe.addEventListener("DOMContentLoaded", sp));
function lp(e) {
  dt && (Sr ? setTimeout(e, 0) : yl.push(e));
}
function Yn(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    a = e.children,
    i = a === void 0 ? [] : a;
  return typeof e == "string" ? vl(e) : "<".concat(t, " ").concat(np(r), ">").concat(i.map(Yn).join(""), "</").concat(t, ">");
}
function Ao(e, t, n) {
  if (e && e[t] && e[t][n]) return {
    prefix: t,
    iconName: n,
    icon: e[t][n]
  };
}
var cp = function cp(t, n) {
    return function (r, a, i, o) {
      return t.call(n, r, a, i, o);
    };
  },
  oa = function oa(t, n, r, a) {
    var i = Object.keys(t),
      o = i.length,
      s = a !== void 0 ? cp(n, a) : n,
      l,
      f,
      c;
    for (r === void 0 ? (l = 1, c = t[i[0]]) : (l = 0, c = r); l < o; l++) f = i[l], c = s(c, t[f], f, t);
    return c;
  };
function fp(e) {
  for (var t = [], n = 0, r = e.length; n < r;) {
    var a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      var i = e.charCodeAt(n++);
      (i & 64512) == 56320 ? t.push(((a & 1023) << 10) + (i & 1023) + 65536) : (t.push(a), n--);
    } else t.push(a);
  }
  return t;
}
function Pa(e) {
  var t = fp(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function up(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function Po(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      a = !!r.icon;
    return a ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Oa(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    a = r === void 0 ? !1 : r,
    i = Po(t);
  typeof qe.hooks.addPack == "function" && !a ? qe.hooks.addPack(e, Po(t)) : qe.styles[e] = T(T({}, qe.styles[e] || {}), i), e === "fas" && Oa("fa", t);
}
var sr,
  lr,
  cr,
  Xt = qe.styles,
  dp = qe.shims,
  mp = (sr = {}, _e(sr, ie, Object.values(Dn[ie])), _e(sr, pe, Object.values(Dn[pe])), sr),
  di = null,
  _l = {},
  xl = {},
  wl = {},
  kl = {},
  El = {},
  pp = (lr = {}, _e(lr, ie, Object.keys($n[ie])), _e(lr, pe, Object.keys($n[pe])), lr);
function hp(e) {
  return ~Xm.indexOf(e);
}
function gp(e, t) {
  var n = t.split("-"),
    r = n[0],
    a = n.slice(1).join("-");
  return r === e && a !== "" && !hp(a) ? a : null;
}
var Sl = function Sl() {
  var t = function t(i) {
    return oa(Xt, function (o, s, l) {
      return o[l] = oa(s, i, {}), o;
    }, {});
  };
  _l = t(function (a, i, o) {
    if (i[3] && (a[i[3]] = o), i[2]) {
      var s = i[2].filter(function (l) {
        return typeof l == "number";
      });
      s.forEach(function (l) {
        a[l.toString(16)] = o;
      });
    }
    return a;
  }), xl = t(function (a, i, o) {
    if (a[o] = o, i[2]) {
      var s = i[2].filter(function (l) {
        return typeof l == "string";
      });
      s.forEach(function (l) {
        a[l] = o;
      });
    }
    return a;
  }), El = t(function (a, i, o) {
    var s = i[2];
    return a[o] = o, s.forEach(function (l) {
      a[l] = o;
    }), a;
  });
  var n = "far" in Xt || M.autoFetchSvg,
    r = oa(dp, function (a, i) {
      var o = i[0],
        s = i[1],
        l = i[2];
      return s === "far" && !n && (s = "fas"), typeof o == "string" && (a.names[o] = {
        prefix: s,
        iconName: l
      }), typeof o == "number" && (a.unicodes[o.toString(16)] = {
        prefix: s,
        iconName: l
      }), a;
    }, {
      names: {},
      unicodes: {}
    });
  wl = r.names, kl = r.unicodes, di = Wr(M.styleDefault, {
    family: M.familyDefault
  });
};
Zm(function (e) {
  di = Wr(e.styleDefault, {
    family: M.familyDefault
  });
});
Sl();
function mi(e, t) {
  return (_l[e] || {})[t];
}
function vp(e, t) {
  return (xl[e] || {})[t];
}
function $t(e, t) {
  return (El[e] || {})[t];
}
function Al(e) {
  return wl[e] || {
    prefix: null,
    iconName: null
  };
}
function bp(e) {
  var t = kl[e],
    n = mi("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function At() {
  return di;
}
var pi = function pi() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Wr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? ie : n,
    a = $n[r][e],
    i = jn[r][e] || jn[r][a],
    o = e in qe.styles ? e : null;
  return i || o || null;
}
var Oo = (cr = {}, _e(cr, ie, Object.keys(Dn[ie])), _e(cr, pe, Object.keys(Dn[pe])), cr);
function Kr(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    a = r === void 0 ? !1 : r,
    i = (t = {}, _e(t, ie, "".concat(M.cssPrefix, "-").concat(ie)), _e(t, pe, "".concat(M.cssPrefix, "-").concat(pe)), t),
    o = null,
    s = ie;
  (e.includes(i[ie]) || e.some(function (f) {
    return Oo[ie].includes(f);
  })) && (s = ie), (e.includes(i[pe]) || e.some(function (f) {
    return Oo[pe].includes(f);
  })) && (s = pe);
  var l = e.reduce(function (f, c) {
    var d = gp(M.cssPrefix, c);
    if (Xt[c] ? (c = mp[s].includes(c) ? Um[s][c] : c, o = c, f.prefix = c) : pp[s].indexOf(c) > -1 ? (o = c, f.prefix = Wr(c, {
      family: s
    })) : d ? f.iconName = d : c !== M.replacementClass && c !== i[ie] && c !== i[pe] && f.rest.push(c), !a && f.prefix && f.iconName) {
      var p = o === "fa" ? Al(f.iconName) : {},
        h = $t(f.prefix, f.iconName);
      p.prefix && (o = null), f.iconName = p.iconName || h || f.iconName, f.prefix = p.prefix || f.prefix, f.prefix === "far" && !Xt.far && Xt.fas && !M.autoFetchSvg && (f.prefix = "fas");
    }
    return f;
  }, pi());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && s === pe && (Xt.fass || M.autoFetchSvg) && (l.prefix = "fass", l.iconName = $t(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || o === "fa") && (l.prefix = At() || "fas"), l;
}
var yp = function () {
    function e() {
      Rm(this, e), this.definitions = {};
    }
    return Tm(e, [{
      key: "add",
      value: function value() {
        for (var n = this, r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
        var o = a.reduce(this._pullDefinitions, {});
        Object.keys(o).forEach(function (s) {
          n.definitions[s] = T(T({}, n.definitions[s] || {}), o[s]), Oa(s, o[s]);
          var l = Dn[ie][s];
          l && Oa(l, o[s]), Sl();
        });
      }
    }, {
      key: "reset",
      value: function value() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function value(n, r) {
        var a = r.prefix && r.iconName && r.icon ? {
          0: r
        } : r;
        return Object.keys(a).map(function (i) {
          var o = a[i],
            s = o.prefix,
            l = o.iconName,
            f = o.icon,
            c = f[2];
          n[s] || (n[s] = {}), c.length > 0 && c.forEach(function (d) {
            typeof d == "string" && (n[s][d] = f);
          }), n[s][l] = f;
        }), n;
      }
    }]), e;
  }(),
  Co = [],
  Qt = {},
  tn = {},
  _p = Object.keys(tn);
function xp(e, t) {
  var n = t.mixoutsTo;
  return Co = e, Qt = {}, Object.keys(tn).forEach(function (r) {
    _p.indexOf(r) === -1 && delete tn[r];
  }), Co.forEach(function (r) {
    var a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach(function (o) {
      typeof a[o] == "function" && (n[o] = a[o]), Er(a[o]) === "object" && Object.keys(a[o]).forEach(function (s) {
        n[o] || (n[o] = {}), n[o][s] = a[o][s];
      });
    }), r.hooks) {
      var i = r.hooks();
      Object.keys(i).forEach(function (o) {
        Qt[o] || (Qt[o] = []), Qt[o].push(i[o]);
      });
    }
    r.provides && r.provides(tn);
  }), n;
}
function Ca(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
  var i = Qt[e] || [];
  return i.forEach(function (o) {
    t = o.apply(null, [t].concat(r));
  }), t;
}
function Ht(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  var a = Qt[e] || [];
  a.forEach(function (i) {
    i.apply(null, n);
  });
}
function ct() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return tn[e] ? tn[e].apply(null, t) : void 0;
}
function Ia(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName,
    n = e.prefix || At();
  if (t) return t = $t(n, t) || t, Ao(Pl.definitions, n, t) || Ao(qe.styles, n, t);
}
var Pl = new yp(),
  wp = function wp() {
    M.autoReplaceSvg = !1, M.observeMutations = !1, Ht("noAuto");
  },
  kp = {
    i2svg: function i2svg() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return dt ? (Ht("beforeI2svg", t), ct("pseudoElements2svg", t), ct("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
    },
    watch: function watch() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      M.autoReplaceSvg === !1 && (M.autoReplaceSvg = !0), M.observeMutations = !0, lp(function () {
        Sp({
          autoReplaceSvgRoot: n
        }), Ht("watch", t);
      });
    }
  },
  Ep = {
    icon: function icon(t) {
      if (t === null) return null;
      if (Er(t) === "object" && t.prefix && t.iconName) return {
        prefix: t.prefix,
        iconName: $t(t.prefix, t.iconName) || t.iconName
      };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
          r = Wr(t[0]);
        return {
          prefix: r,
          iconName: $t(r, n) || n
        };
      }
      if (typeof t == "string" && (t.indexOf("".concat(M.cssPrefix, "-")) > -1 || t.match(Wm))) {
        var a = Kr(t.split(" "), {
          skipLookups: !0
        });
        return {
          prefix: a.prefix || At(),
          iconName: $t(a.prefix, a.iconName) || a.iconName
        };
      }
      if (typeof t == "string") {
        var i = At();
        return {
          prefix: i,
          iconName: $t(i, t) || t
        };
      }
    }
  },
  $e = {
    noAuto: wp,
    config: M,
    dom: kp,
    parse: Ep,
    library: Pl,
    findIconDefinition: Ia,
    toHtml: Yn
  },
  Sp = function Sp() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? oe : n;
    (Object.keys(qe.styles).length > 0 || M.autoFetchSvg) && dt && M.autoReplaceSvg && $e.dom.i2svg({
      node: r
    });
  };
function Yr(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function get() {
      return e["abstract"].map(function (r) {
        return Yn(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function get() {
      if (dt) {
        var r = oe.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function Ap(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    a = e.attributes,
    i = e.styles,
    o = e.transform;
  if (ui(o) && n.found && !r.found) {
    var s = n.width,
      l = n.height,
      f = {
        x: s / l / 2,
        y: .5
      };
    a.style = Ur(T(T({}, i), {}, {
      "transform-origin": "".concat(f.x + o.x / 16, "em ").concat(f.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Pp(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    a = e.attributes,
    i = e.symbol,
    o = i === !0 ? "".concat(t, "-").concat(M.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: T(T({}, a), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function hi(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    a = e.prefix,
    i = e.iconName,
    o = e.transform,
    s = e.symbol,
    l = e.title,
    f = e.maskId,
    c = e.titleId,
    d = e.extra,
    p = e.watchable,
    h = p === void 0 ? !1 : p,
    k = r.found ? r : n,
    O = k.width,
    F = k.height,
    b = a === "fak",
    x = [M.replacementClass, i ? "".concat(M.cssPrefix, "-").concat(i) : ""].filter(function (se) {
      return d.classes.indexOf(se) === -1;
    }).filter(function (se) {
      return se !== "" || !!se;
    }).concat(d.classes).join(" "),
    A = {
      children: [],
      attributes: T(T({}, d.attributes), {}, {
        "data-prefix": a,
        "data-icon": i,
        "class": x,
        role: d.attributes.role || "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(O, " ").concat(F)
      })
    },
    D = b && !~d.classes.indexOf("fa-fw") ? {
      width: "".concat(O / F * 16 * .0625, "em")
    } : {};
  h && (A.attributes[Bt] = ""), l && (A.children.push({
    tag: "title",
    attributes: {
      id: A.attributes["aria-labelledby"] || "title-".concat(c || Bn())
    },
    children: [l]
  }), delete A.attributes.title);
  var z = T(T({}, A), {}, {
      prefix: a,
      iconName: i,
      main: n,
      mask: r,
      maskId: f,
      transform: o,
      symbol: s,
      styles: T(T({}, D), d.styles)
    }),
    J = r.found && n.found ? ct("generateAbstractMask", z) || {
      children: [],
      attributes: {}
    } : ct("generateAbstractIcon", z) || {
      children: [],
      attributes: {}
    },
    B = J.children,
    Y = J.attributes;
  return z.children = B, z.attributes = Y, s ? Pp(z) : Ap(z);
}
function Io(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    a = e.transform,
    i = e.title,
    o = e.extra,
    s = e.watchable,
    l = s === void 0 ? !1 : s,
    f = T(T(T({}, o.attributes), i ? {
      title: i
    } : {}), {}, {
      "class": o.classes.join(" ")
    });
  l && (f[Bt] = "");
  var c = T({}, o.styles);
  ui(a) && (c.transform = ap({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), c["-webkit-transform"] = c.transform);
  var d = Ur(c);
  d.length > 0 && (f.style = d);
  var p = [];
  return p.push({
    tag: "span",
    attributes: f,
    children: [t]
  }), i && p.push({
    tag: "span",
    attributes: {
      "class": "sr-only"
    },
    children: [i]
  }), p;
}
function Op(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    a = T(T(T({}, r.attributes), n ? {
      title: n
    } : {}), {}, {
      "class": r.classes.join(" ")
    }),
    i = Ur(r.styles);
  i.length > 0 && (a.style = i);
  var o = [];
  return o.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      "class": "sr-only"
    },
    children: [n]
  }), o;
}
var sa = qe.styles;
function Ra(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    a = ii(r, 1),
    i = a[0],
    o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      "class": "".concat(M.cssPrefix, "-").concat(Lt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        "class": "".concat(M.cssPrefix, "-").concat(Lt.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        "class": "".concat(M.cssPrefix, "-").concat(Lt.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: o
  };
}
var Cp = {
  found: !1,
  width: 512,
  height: 512
};
function Ip(e, t) {
  !ml && !M.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Ta(e, t) {
  var n = t;
  return t === "fa" && M.styleDefault !== null && (t = At()), new Promise(function (r, a) {
    if (ct("missingIconAbstract"), n === "fa") {
      var i = Al(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && sa[t] && sa[t][e]) {
      var o = sa[t][e];
      return r(Ra(o));
    }
    Ip(e, t), r(T(T({}, Cp), {}, {
      icon: M.showMissingIcons && e ? ct("missingIconAbstract") || {} : {}
    }));
  });
}
var Ro = function Ro() {},
  Na = M.measurePerformance && tr && tr.mark && tr.measure ? tr : {
    mark: Ro,
    measure: Ro
  },
  _n = 'FA "6.3.0"',
  Rp = function Rp(t) {
    return Na.mark("".concat(_n, " ").concat(t, " begins")), function () {
      return Ol(t);
    };
  },
  Ol = function Ol(t) {
    Na.mark("".concat(_n, " ").concat(t, " ends")), Na.measure("".concat(_n, " ").concat(t), "".concat(_n, " ").concat(t, " begins"), "".concat(_n, " ").concat(t, " ends"));
  },
  gi = {
    begin: Rp,
    end: Ol
  },
  pr = function pr() {};
function To(e) {
  var t = e.getAttribute ? e.getAttribute(Bt) : null;
  return typeof t == "string";
}
function Tp(e) {
  var t = e.getAttribute ? e.getAttribute(si) : null,
    n = e.getAttribute ? e.getAttribute(li) : null;
  return t && n;
}
function Np(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(M.replacementClass);
}
function Mp() {
  if (M.autoReplaceSvg === !0) return hr.replace;
  var e = hr[M.autoReplaceSvg];
  return e || hr.replace;
}
function Fp(e) {
  return oe.createElementNS("http://www.w3.org/2000/svg", e);
}
function Lp(e) {
  return oe.createElement(e);
}
function Cl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? e.tag === "svg" ? Fp : Lp : n;
  if (typeof e == "string") return oe.createTextNode(e);
  var a = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (o) {
    a.setAttribute(o, e.attributes[o]);
  });
  var i = e.children || [];
  return i.forEach(function (o) {
    a.appendChild(Cl(o, {
      ceFn: r
    }));
  }), a;
}
function $p(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var hr = {
  replace: function replace(t) {
    var n = t[0];
    if (n.parentNode) if (t[1].forEach(function (a) {
      n.parentNode.insertBefore(Cl(a), n);
    }), n.getAttribute(Bt) === null && M.keepOriginalSource) {
      var r = oe.createComment($p(n));
      n.parentNode.replaceChild(r, n);
    } else n.remove();
  },
  nest: function nest(t) {
    var n = t[0],
      r = t[1];
    if (~fi(n).indexOf(M.replacementClass)) return hr.replace(t);
    var a = new RegExp("".concat(M.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes["class"]) {
      var i = r[0].attributes["class"].split(" ").reduce(function (s, l) {
        return l === M.replacementClass || l.match(a) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes["class"] = i.toSvg.join(" "), i.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", i.toNode.join(" "));
    }
    var o = r.map(function (s) {
      return Yn(s);
    }).join("\n");
    n.setAttribute(Bt, ""), n.innerHTML = o;
  }
};
function No(e) {
  e();
}
function Il(e, t) {
  var n = typeof t == "function" ? t : pr;
  if (e.length === 0) n();else {
    var r = No;
    M.mutateApproach === Bm && (r = St.requestAnimationFrame || No), r(function () {
      var a = Mp(),
        i = gi.begin("mutate");
      e.map(a), i(), n();
    });
  }
}
var vi = !1;
function Rl() {
  vi = !0;
}
function Ma() {
  vi = !1;
}
var Ar = null;
function Mo(e) {
  if (ko && M.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? pr : t,
      r = e.nodeCallback,
      a = r === void 0 ? pr : r,
      i = e.pseudoElementsCallback,
      o = i === void 0 ? pr : i,
      s = e.observeMutationsRoot,
      l = s === void 0 ? oe : s;
    Ar = new ko(function (f) {
      if (!vi) {
        var c = At();
        hn(f).forEach(function (d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !To(d.addedNodes[0]) && (M.searchPseudoElements && o(d.target), n(d.target)), d.type === "attributes" && d.target.parentNode && M.searchPseudoElements && o(d.target.parentNode), d.type === "attributes" && To(d.target) && ~Vm.indexOf(d.attributeName)) if (d.attributeName === "class" && Tp(d.target)) {
            var p = Kr(fi(d.target)),
              h = p.prefix,
              k = p.iconName;
            d.target.setAttribute(si, h || c), k && d.target.setAttribute(li, k);
          } else Np(d.target) && a(d.target);
        });
      }
    }), dt && Ar.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function jp() {
  Ar && Ar.disconnect();
}
function Dp(e) {
  var t = e.getAttribute("style"),
    n = [];
  return t && (n = t.split(";").reduce(function (r, a) {
    var i = a.split(":"),
      o = i[0],
      s = i.slice(1);
    return o && s.length > 0 && (r[o] = s.join(":").trim()), r;
  }, {})), n;
}
function zp(e) {
  var t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "",
    a = Kr(fi(e));
  return a.prefix || (a.prefix = At()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = vp(a.prefix, e.innerText) || mi(a.prefix, Pa(e.innerText))), !a.iconName && M.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function Bp(e) {
  var t = hn(e.attributes).reduce(function (a, i) {
      return a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a;
    }, {}),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return M.autoA11y && (n ? t["aria-labelledby"] = "".concat(M.replacementClass, "-title-").concat(r || Bn()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Hp() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: tt,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Fo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      styleParser: !0
    },
    n = zp(e),
    r = n.iconName,
    a = n.prefix,
    i = n.rest,
    o = Bp(e),
    s = Ca("parseNodeAttributes", {}, e),
    l = t.styleParser ? Dp(e) : [];
  return T({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: tt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: o
    }
  }, s);
}
var Up = qe.styles;
function Tl(e) {
  var t = M.autoReplaceSvg === "nest" ? Fo(e, {
    styleParser: !1
  }) : Fo(e);
  return ~t.extra.classes.indexOf(pl) ? ct("generateLayersText", e, t) : ct("generateSvgReplacementMutation", e, t);
}
var Pt = new Set();
ci.map(function (e) {
  Pt.add("fa-".concat(e));
});
Object.keys($n[ie]).map(Pt.add.bind(Pt));
Object.keys($n[pe]).map(Pt.add.bind(Pt));
Pt = Wn(Pt);
function Lo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!dt) return Promise.resolve();
  var n = oe.documentElement.classList,
    r = function r(d) {
      return n.add("".concat(Eo, "-").concat(d));
    },
    a = function a(d) {
      return n.remove("".concat(Eo, "-").concat(d));
    },
    i = M.autoFetchSvg ? Pt : ci.map(function (c) {
      return "fa-".concat(c);
    }).concat(Object.keys(Up));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(pl, ":not([").concat(Bt, "])")].concat(i.map(function (c) {
    return ".".concat(c, ":not([").concat(Bt, "])");
  })).join(", ");
  if (o.length === 0) return Promise.resolve();
  var s = [];
  try {
    s = hn(e.querySelectorAll(o));
  } catch (c) {}
  if (s.length > 0) r("pending"), a("complete");else return Promise.resolve();
  var l = gi.begin("onTree"),
    f = s.reduce(function (c, d) {
      try {
        var p = Tl(d);
        p && c.push(p);
      } catch (h) {
        ml || h.name === "MissingIcon" && console.error(h);
      }
      return c;
    }, []);
  return new Promise(function (c, d) {
    Promise.all(f).then(function (p) {
      Il(p, function () {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), l(), c();
      });
    })["catch"](function (p) {
      l(), d(p);
    });
  });
}
function Wp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Tl(e).then(function (n) {
    n && Il([n], t);
  });
}
function Kp(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : Ia(t || {}),
      a = n.mask;
    return a && (a = (a || {}).icon ? a : Ia(a || {})), e(r, T(T({}, n), {}, {
      mask: a
    }));
  };
}
var Yp = function Yp(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      a = r === void 0 ? tt : r,
      i = n.symbol,
      o = i === void 0 ? !1 : i,
      s = n.mask,
      l = s === void 0 ? null : s,
      f = n.maskId,
      c = f === void 0 ? null : f,
      d = n.title,
      p = d === void 0 ? null : d,
      h = n.titleId,
      k = h === void 0 ? null : h,
      O = n.classes,
      F = O === void 0 ? [] : O,
      b = n.attributes,
      x = b === void 0 ? {} : b,
      A = n.styles,
      D = A === void 0 ? {} : A;
    if (t) {
      var z = t.prefix,
        J = t.iconName,
        B = t.icon;
      return Yr(T({
        type: "icon"
      }, t), function () {
        return Ht("beforeDOMElementCreation", {
          iconDefinition: t,
          params: n
        }), M.autoA11y && (p ? x["aria-labelledby"] = "".concat(M.replacementClass, "-title-").concat(k || Bn()) : (x["aria-hidden"] = "true", x.focusable = "false")), hi({
          icons: {
            main: Ra(B),
            mask: l ? Ra(l.icon) : {
              found: !1,
              width: null,
              height: null,
              icon: {}
            }
          },
          prefix: z,
          iconName: J,
          transform: T(T({}, tt), a),
          symbol: o,
          title: p,
          maskId: c,
          titleId: k,
          extra: {
            attributes: x,
            styles: D,
            classes: F
          }
        });
      });
    }
  },
  qp = {
    mixout: function mixout() {
      return {
        icon: Kp(Yp)
      };
    },
    hooks: function hooks() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(n) {
          return n.treeCallback = Lo, n.nodeCallback = Wp, n;
        }
      };
    },
    provides: function provides(t) {
      t.i2svg = function (n) {
        var r = n.node,
          a = r === void 0 ? oe : r,
          i = n.callback,
          o = i === void 0 ? function () {} : i;
        return Lo(a, o);
      }, t.generateSvgReplacementMutation = function (n, r) {
        var a = r.iconName,
          i = r.title,
          o = r.titleId,
          s = r.prefix,
          l = r.transform,
          f = r.symbol,
          c = r.mask,
          d = r.maskId,
          p = r.extra;
        return new Promise(function (h, k) {
          Promise.all([Ta(a, s), c.iconName ? Ta(c.iconName, c.prefix) : Promise.resolve({
            found: !1,
            width: 512,
            height: 512,
            icon: {}
          })]).then(function (O) {
            var F = ii(O, 2),
              b = F[0],
              x = F[1];
            h([n, hi({
              icons: {
                main: b,
                mask: x
              },
              prefix: s,
              iconName: a,
              transform: l,
              symbol: f,
              maskId: d,
              title: i,
              titleId: o,
              extra: p,
              watchable: !0
            })]);
          })["catch"](k);
        });
      }, t.generateAbstractIcon = function (n) {
        var r = n.children,
          a = n.attributes,
          i = n.main,
          o = n.transform,
          s = n.styles,
          l = Ur(s);
        l.length > 0 && (a.style = l);
        var f;
        return ui(o) && (f = ct("generateAbstractTransformGrouping", {
          main: i,
          transform: o,
          containerWidth: i.width,
          iconWidth: i.width
        })), r.push(f || i.icon), {
          children: r,
          attributes: a
        };
      };
    }
  },
  Vp = {
    mixout: function mixout() {
      return {
        layer: function layer(n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            a = r.classes,
            i = a === void 0 ? [] : a;
          return Yr({
            type: "layer"
          }, function () {
            Ht("beforeDOMElementCreation", {
              assembler: n,
              params: r
            });
            var o = [];
            return n(function (s) {
              Array.isArray(s) ? s.map(function (l) {
                o = o.concat(l["abstract"]);
              }) : o = o.concat(s["abstract"]);
            }), [{
              tag: "span",
              attributes: {
                "class": ["".concat(M.cssPrefix, "-layers")].concat(Wn(i)).join(" ")
              },
              children: o
            }];
          });
        }
      };
    }
  },
  Xp = {
    mixout: function mixout() {
      return {
        counter: function counter(n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            a = r.title,
            i = a === void 0 ? null : a,
            o = r.classes,
            s = o === void 0 ? [] : o,
            l = r.attributes,
            f = l === void 0 ? {} : l,
            c = r.styles,
            d = c === void 0 ? {} : c;
          return Yr({
            type: "counter",
            content: n
          }, function () {
            return Ht("beforeDOMElementCreation", {
              content: n,
              params: r
            }), Op({
              content: n.toString(),
              title: i,
              extra: {
                attributes: f,
                styles: d,
                classes: ["".concat(M.cssPrefix, "-layers-counter")].concat(Wn(s))
              }
            });
          });
        }
      };
    }
  },
  Qp = {
    mixout: function mixout() {
      return {
        text: function text(n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            a = r.transform,
            i = a === void 0 ? tt : a,
            o = r.title,
            s = o === void 0 ? null : o,
            l = r.classes,
            f = l === void 0 ? [] : l,
            c = r.attributes,
            d = c === void 0 ? {} : c,
            p = r.styles,
            h = p === void 0 ? {} : p;
          return Yr({
            type: "text",
            content: n
          }, function () {
            return Ht("beforeDOMElementCreation", {
              content: n,
              params: r
            }), Io({
              content: n,
              transform: T(T({}, tt), i),
              title: s,
              extra: {
                attributes: d,
                styles: h,
                classes: ["".concat(M.cssPrefix, "-layers-text")].concat(Wn(f))
              }
            });
          });
        }
      };
    },
    provides: function provides(t) {
      t.generateLayersText = function (n, r) {
        var a = r.title,
          i = r.transform,
          o = r.extra,
          s = null,
          l = null;
        if (fl) {
          var f = parseInt(getComputedStyle(n).fontSize, 10),
            c = n.getBoundingClientRect();
          s = c.width / f, l = c.height / f;
        }
        return M.autoA11y && !a && (o.attributes["aria-hidden"] = "true"), Promise.resolve([n, Io({
          content: n.innerHTML,
          width: s,
          height: l,
          transform: i,
          title: a,
          extra: o,
          watchable: !0
        })]);
      };
    }
  },
  Gp = new RegExp('"', "ug"),
  $o = [1105920, 1112319];
function Jp(e) {
  var t = e.replace(Gp, ""),
    n = up(t, 0),
    r = n >= $o[0] && n <= $o[1],
    a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Pa(a ? t[0] : t),
    isSecondary: r || a
  };
}
function jo(e, t) {
  var n = "".concat(zm).concat(t.replace(":", "-"));
  return new Promise(function (r, a) {
    if (e.getAttribute(n) !== null) return r();
    var i = hn(e.children),
      o = i.filter(function (B) {
        return B.getAttribute(Aa) === t;
      })[0],
      s = St.getComputedStyle(e, t),
      l = s.getPropertyValue("font-family").match(Km),
      f = s.getPropertyValue("font-weight"),
      c = s.getPropertyValue("content");
    if (o && !l) return e.removeChild(o), r();
    if (l && c !== "none" && c !== "") {
      var d = s.getPropertyValue("content"),
        p = ~["Sharp"].indexOf(l[2]) ? pe : ie,
        h = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? jn[p][l[2].toLowerCase()] : Ym[p][f],
        k = Jp(d),
        O = k.value,
        F = k.isSecondary,
        b = l[0].startsWith("FontAwesome"),
        x = mi(h, O),
        A = x;
      if (b) {
        var D = bp(O);
        D.iconName && D.prefix && (x = D.iconName, h = D.prefix);
      }
      if (x && !F && (!o || o.getAttribute(si) !== h || o.getAttribute(li) !== A)) {
        e.setAttribute(n, A), o && e.removeChild(o);
        var z = Hp(),
          J = z.extra;
        J.attributes[Aa] = t, Ta(x, h).then(function (B) {
          var Y = hi(T(T({}, z), {}, {
              icons: {
                main: B,
                mask: pi()
              },
              prefix: h,
              iconName: A,
              extra: J,
              watchable: !0
            })),
            se = oe.createElement("svg");
          t === "::before" ? e.insertBefore(se, e.firstChild) : e.appendChild(se), se.outerHTML = Y.map(function (xe) {
            return Yn(xe);
          }).join("\n"), e.removeAttribute(n), r();
        })["catch"](a);
      } else r();
    } else r();
  });
}
function Zp(e) {
  return Promise.all([jo(e, "::before"), jo(e, "::after")]);
}
function eh(e) {
  return e.parentNode !== document.head && !~Hm.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Aa) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Do(e) {
  if (dt) return new Promise(function (t, n) {
    var r = hn(e.querySelectorAll("*")).filter(eh).map(Zp),
      a = gi.begin("searchPseudoElements");
    Rl(), Promise.all(r).then(function () {
      a(), Ma(), t();
    })["catch"](function () {
      a(), Ma(), n();
    });
  });
}
var th = {
    hooks: function hooks() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(n) {
          return n.pseudoElementsCallback = Do, n;
        }
      };
    },
    provides: function provides(t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          a = r === void 0 ? oe : r;
        M.searchPseudoElements && Do(a);
      };
    }
  },
  zo = !1,
  nh = {
    mixout: function mixout() {
      return {
        dom: {
          unwatch: function unwatch() {
            Rl(), zo = !0;
          }
        }
      };
    },
    hooks: function hooks() {
      return {
        bootstrap: function bootstrap() {
          Mo(Ca("mutationObserverCallbacks", {}));
        },
        noAuto: function noAuto() {
          jp();
        },
        watch: function watch(n) {
          var r = n.observeMutationsRoot;
          zo ? Ma() : Mo(Ca("mutationObserverCallbacks", {
            observeMutationsRoot: r
          }));
        }
      };
    }
  },
  Bo = function Bo(t) {
    var n = {
      size: 16,
      x: 0,
      y: 0,
      flipX: !1,
      flipY: !1,
      rotate: 0
    };
    return t.toLowerCase().split(" ").reduce(function (r, a) {
      var i = a.toLowerCase().split("-"),
        o = i[0],
        s = i.slice(1).join("-");
      if (o && s === "h") return r.flipX = !0, r;
      if (o && s === "v") return r.flipY = !0, r;
      if (s = parseFloat(s), isNaN(s)) return r;
      switch (o) {
        case "grow":
          r.size = r.size + s;
          break;
        case "shrink":
          r.size = r.size - s;
          break;
        case "left":
          r.x = r.x - s;
          break;
        case "right":
          r.x = r.x + s;
          break;
        case "up":
          r.y = r.y - s;
          break;
        case "down":
          r.y = r.y + s;
          break;
        case "rotate":
          r.rotate = r.rotate + s;
          break;
      }
      return r;
    }, n);
  },
  rh = {
    mixout: function mixout() {
      return {
        parse: {
          transform: function transform(n) {
            return Bo(n);
          }
        }
      };
    },
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(n, r) {
          var a = r.getAttribute("data-fa-transform");
          return a && (n.transform = Bo(a)), n;
        }
      };
    },
    provides: function provides(t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          a = n.transform,
          i = n.containerWidth,
          o = n.iconWidth,
          s = {
            transform: "translate(".concat(i / 2, " 256)")
          },
          l = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "),
          f = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "),
          c = "rotate(".concat(a.rotate, " 0 0)"),
          d = {
            transform: "".concat(l, " ").concat(f, " ").concat(c)
          },
          p = {
            transform: "translate(".concat(o / 2 * -1, " -256)")
          },
          h = {
            outer: s,
            inner: d,
            path: p
          };
        return {
          tag: "g",
          attributes: T({}, h.outer),
          children: [{
            tag: "g",
            attributes: T({}, h.inner),
            children: [{
              tag: r.icon.tag,
              children: r.icon.children,
              attributes: T(T({}, r.icon.attributes), h.path)
            }]
          }]
        };
      };
    }
  },
  la = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
  };
function Ho(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function ah(e) {
  return e.tag === "g" ? e.children : [e];
}
var ih = {
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(n, r) {
          var a = r.getAttribute("data-fa-mask"),
            i = a ? Kr(a.split(" ").map(function (o) {
              return o.trim();
            })) : pi();
          return i.prefix || (i.prefix = At()), n.mask = i, n.maskId = r.getAttribute("data-fa-mask-id"), n;
        }
      };
    },
    provides: function provides(t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          a = n.attributes,
          i = n.main,
          o = n.mask,
          s = n.maskId,
          l = n.transform,
          f = i.width,
          c = i.icon,
          d = o.width,
          p = o.icon,
          h = rp({
            transform: l,
            containerWidth: d,
            iconWidth: f
          }),
          k = {
            tag: "rect",
            attributes: T(T({}, la), {}, {
              fill: "white"
            })
          },
          O = c.children ? {
            children: c.children.map(Ho)
          } : {},
          F = {
            tag: "g",
            attributes: T({}, h.inner),
            children: [Ho(T({
              tag: c.tag,
              attributes: T(T({}, c.attributes), h.path)
            }, O))]
          },
          b = {
            tag: "g",
            attributes: T({}, h.outer),
            children: [F]
          },
          x = "mask-".concat(s || Bn()),
          A = "clip-".concat(s || Bn()),
          D = {
            tag: "mask",
            attributes: T(T({}, la), {}, {
              id: x,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse"
            }),
            children: [k, b]
          },
          z = {
            tag: "defs",
            children: [{
              tag: "clipPath",
              attributes: {
                id: A
              },
              children: ah(p)
            }, D]
          };
        return r.push(z, {
          tag: "rect",
          attributes: T({
            fill: "currentColor",
            "clip-path": "url(#".concat(A, ")"),
            mask: "url(#".concat(x, ")")
          }, la)
        }), {
          children: r,
          attributes: a
        };
      };
    }
  },
  oh = {
    provides: function provides(t) {
      var n = !1;
      St.matchMedia && (n = St.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function () {
        var r = [],
          a = {
            fill: "currentColor"
          },
          i = {
            attributeType: "XML",
            repeatCount: "indefinite",
            dur: "2s"
          };
        r.push({
          tag: "path",
          attributes: T(T({}, a), {}, {
            d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
          })
        });
        var o = T(T({}, i), {}, {
            attributeName: "opacity"
          }),
          s = {
            tag: "circle",
            attributes: T(T({}, a), {}, {
              cx: "256",
              cy: "364",
              r: "28"
            }),
            children: []
          };
        return n || s.children.push({
          tag: "animate",
          attributes: T(T({}, i), {}, {
            attributeName: "r",
            values: "28;14;28;28;14;28;"
          })
        }, {
          tag: "animate",
          attributes: T(T({}, o), {}, {
            values: "1;0;1;1;0;1;"
          })
        }), r.push(s), r.push({
          tag: "path",
          attributes: T(T({}, a), {}, {
            opacity: "1",
            d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
          }),
          children: n ? [] : [{
            tag: "animate",
            attributes: T(T({}, o), {}, {
              values: "1;0;0;0;0;1;"
            })
          }]
        }), n || r.push({
          tag: "path",
          attributes: T(T({}, a), {}, {
            opacity: "0",
            d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
          }),
          children: [{
            tag: "animate",
            attributes: T(T({}, o), {}, {
              values: "0;0;1;1;0;0;"
            })
          }]
        }), {
          tag: "g",
          attributes: {
            "class": "missing"
          },
          children: r
        };
      };
    }
  },
  sh = {
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(n, r) {
          var a = r.getAttribute("data-fa-symbol"),
            i = a === null ? !1 : a === "" ? !0 : a;
          return n.symbol = i, n;
        }
      };
    }
  },
  lh = [op, qp, Vp, Xp, Qp, th, nh, rh, ih, oh, sh];
xp(lh, {
  mixoutsTo: $e
});
$e.noAuto;
var Nl = $e.config,
  qr = $e.library;
$e.dom;
var Pr = $e.parse;
$e.findIconDefinition;
$e.toHtml;
var ch = $e.icon;
$e.layer;
var fh = $e.text;
$e.counter;
var uh = {
    prefix: "fas",
    iconName: "ellipsis",
    icon: [448, 512, ["ellipsis-h"], "f141", "M0 256a56 56 0 1 1 112 0A56 56 0 1 1 0 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]
  },
  dh = {
    prefix: "fas",
    iconName: "map",
    icon: [576, 512, [128506, 62072], "f279", "M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z"]
  },
  mh = {
    prefix: "fas",
    iconName: "chevron-left",
    icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
  },
  ph = {
    prefix: "fas",
    iconName: "chevron-right",
    icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
  };
function Uo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function (a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function We(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uo(Object(n), !0).forEach(function (r) {
      Ie(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Uo(Object(n)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Or(e) {
  "@babel/helpers - typeof";

  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
    return typeof t;
  } : function (t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(e);
}
function Ie(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function hh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    a,
    i;
  for (i = 0; i < r.length; i++) a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function gh(e, t) {
  if (e == null) return {};
  var n = hh(e, t),
    r,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++) r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Fa(e) {
  return vh(e) || bh(e) || yh(e) || _h();
}
function vh(e) {
  if (Array.isArray(e)) return La(e);
}
function bh(e) {
  if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function yh(e, t) {
  if (e) {
    if (typeof e == "string") return La(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return La(e, t);
  }
}
function La(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function _h() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var xh = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
  Ml = {
    exports: {}
  };
(function (e) {
  (function (t) {
    var n = function n(b, x, A) {
        if (!f(x) || d(x) || p(x) || h(x) || l(x)) return x;
        var D,
          z = 0,
          J = 0;
        if (c(x)) for (D = [], J = x.length; z < J; z++) D.push(n(b, x[z], A));else {
          D = {};
          for (var B in x) Object.prototype.hasOwnProperty.call(x, B) && (D[b(B, A)] = n(b, x[B], A));
        }
        return D;
      },
      r = function r(b, x) {
        x = x || {};
        var A = x.separator || "_",
          D = x.split || /(?=[A-Z])/;
        return b.split(D).join(A);
      },
      a = function a(b) {
        return k(b) ? b : (b = b.replace(/[\-_\s]+(.)?/g, function (x, A) {
          return A ? A.toUpperCase() : "";
        }), b.substr(0, 1).toLowerCase() + b.substr(1));
      },
      i = function i(b) {
        var x = a(b);
        return x.substr(0, 1).toUpperCase() + x.substr(1);
      },
      o = function o(b, x) {
        return r(b, x).toLowerCase();
      },
      s = Object.prototype.toString,
      l = function l(b) {
        return typeof b == "function";
      },
      f = function f(b) {
        return b === Object(b);
      },
      c = function c(b) {
        return s.call(b) == "[object Array]";
      },
      d = function d(b) {
        return s.call(b) == "[object Date]";
      },
      p = function p(b) {
        return s.call(b) == "[object RegExp]";
      },
      h = function h(b) {
        return s.call(b) == "[object Boolean]";
      },
      k = function k(b) {
        return b = b - 0, b === b;
      },
      O = function O(b, x) {
        var A = x && "process" in x ? x.process : x;
        return typeof A != "function" ? b : function (D, z) {
          return A(D, b, z);
        };
      },
      F = {
        camelize: a,
        decamelize: o,
        pascalize: i,
        depascalize: o,
        camelizeKeys: function camelizeKeys(b, x) {
          return n(O(a, x), b);
        },
        decamelizeKeys: function decamelizeKeys(b, x) {
          return n(O(o, x), b, x);
        },
        pascalizeKeys: function pascalizeKeys(b, x) {
          return n(O(i, x), b);
        },
        depascalizeKeys: function depascalizeKeys() {
          return this.decamelizeKeys.apply(this, arguments);
        }
      };
    e.exports ? e.exports = F : t.humps = F;
  })(xh);
})(Ml);
var wh = Ml.exports,
  kh = ["class", "style"];
function Eh(e) {
  return e.split(";").map(function (t) {
    return t.trim();
  }).filter(function (t) {
    return t;
  }).reduce(function (t, n) {
    var r = n.indexOf(":"),
      a = wh.camelize(n.slice(0, r)),
      i = n.slice(r + 1).trim();
    return t[a] = i, t;
  }, {});
}
function Sh(e) {
  return e.split(/\s+/).reduce(function (t, n) {
    return t[n] = !0, t;
  }, {});
}
function bi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string") return e;
  var r = (e.children || []).map(function (l) {
      return bi(l);
    }),
    a = Object.keys(e.attributes || {}).reduce(function (l, f) {
      var c = e.attributes[f];
      switch (f) {
        case "class":
          l["class"] = Sh(c);
          break;
        case "style":
          l.style = Eh(c);
          break;
        default:
          l.attrs[f] = c;
      }
      return l;
    }, {
      attrs: {},
      "class": {},
      style: {}
    });
  n["class"];
  var i = n.style,
    o = i === void 0 ? {} : i,
    s = gh(n, kh);
  return zr(e.tag, We(We(We({}, t), {}, {
    "class": a["class"],
    style: We(We({}, a.style), o)
  }, a.attrs), s), r);
}
var Fl = !1;
try {
  Fl = !0;
} catch (e) {}
function Ah() {
  if (!Fl && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Cn(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Ie({}, e, t) : {};
}
function Ph(e) {
  var t,
    n = (t = {
      "fa-spin": e.spin,
      "fa-pulse": e.pulse,
      "fa-fw": e.fixedWidth,
      "fa-border": e.border,
      "fa-li": e.listItem,
      "fa-inverse": e.inverse,
      "fa-flip": e.flip === !0,
      "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
      "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
    }, Ie(t, "fa-".concat(e.size), e.size !== null), Ie(t, "fa-rotate-".concat(e.rotation), e.rotation !== null), Ie(t, "fa-pull-".concat(e.pull), e.pull !== null), Ie(t, "fa-swap-opacity", e.swapOpacity), Ie(t, "fa-bounce", e.bounce), Ie(t, "fa-shake", e.shake), Ie(t, "fa-beat", e.beat), Ie(t, "fa-fade", e.fade), Ie(t, "fa-beat-fade", e.beatFade), Ie(t, "fa-flash", e.flash), Ie(t, "fa-spin-pulse", e.spinPulse), Ie(t, "fa-spin-reverse", e.spinReverse), t);
  return Object.keys(n).map(function (r) {
    return n[r] ? r : null;
  }).filter(function (r) {
    return r;
  });
}
function Wo(e) {
  if (e && Or(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (Pr.icon) return Pr.icon(e);
  if (e === null) return null;
  if (Or(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2) return {
    prefix: e[0],
    iconName: e[1]
  };
  if (typeof e == "string") return {
    prefix: "fas",
    iconName: e
  };
}
var Oh = ft({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      "default": !1
    },
    fixedWidth: {
      type: Boolean,
      "default": !1
    },
    flip: {
      type: [Boolean, String],
      "default": !1,
      validator: function validator(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      "default": null
    },
    listItem: {
      type: Boolean,
      "default": !1
    },
    pull: {
      type: String,
      "default": null,
      validator: function validator(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      "default": !1
    },
    rotation: {
      type: [String, Number],
      "default": null,
      validator: function validator(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      "default": !1
    },
    size: {
      type: String,
      "default": null,
      validator: function validator(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
      }
    },
    spin: {
      type: Boolean,
      "default": !1
    },
    transform: {
      type: [String, Object],
      "default": null
    },
    symbol: {
      type: [Boolean, String],
      "default": !1
    },
    title: {
      type: String,
      "default": null
    },
    inverse: {
      type: Boolean,
      "default": !1
    },
    bounce: {
      type: Boolean,
      "default": !1
    },
    shake: {
      type: Boolean,
      "default": !1
    },
    beat: {
      type: Boolean,
      "default": !1
    },
    fade: {
      type: Boolean,
      "default": !1
    },
    beatFade: {
      type: Boolean,
      "default": !1
    },
    flash: {
      type: Boolean,
      "default": !1
    },
    spinPulse: {
      type: Boolean,
      "default": !1
    },
    spinReverse: {
      type: Boolean,
      "default": !1
    }
  },
  setup: function setup(t, n) {
    var r = n.attrs,
      a = ce(function () {
        return Wo(t.icon);
      }),
      i = ce(function () {
        return Cn("classes", Ph(t));
      }),
      o = ce(function () {
        return Cn("transform", typeof t.transform == "string" ? Pr.transform(t.transform) : t.transform);
      }),
      s = ce(function () {
        return Cn("mask", Wo(t.mask));
      }),
      l = ce(function () {
        return ch(a.value, We(We(We(We({}, i.value), o.value), s.value), {}, {
          symbol: t.symbol,
          title: t.title
        }));
      });
    en(l, function (c) {
      if (!c) return Ah("Could not find one or more icon(s)", a.value, s.value);
    }, {
      immediate: !0
    });
    var f = ce(function () {
      return l.value ? bi(l.value["abstract"][0], {}, r) : null;
    });
    return function () {
      return f.value;
    };
  }
});
ft({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      "default": !1
    }
  },
  setup: function setup(t, n) {
    var r = n.slots,
      a = Nl.familyPrefix,
      i = ce(function () {
        return ["".concat(a, "-layers")].concat(Fa(t.fixedWidth ? ["".concat(a, "-fw")] : []));
      });
    return function () {
      return zr("div", {
        "class": i.value
      }, r["default"] ? r["default"]() : []);
    };
  }
});
ft({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      "default": ""
    },
    transform: {
      type: [String, Object],
      "default": null
    },
    counter: {
      type: Boolean,
      "default": !1
    },
    position: {
      type: String,
      "default": null,
      validator: function validator(t) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(t) > -1;
      }
    }
  },
  setup: function setup(t, n) {
    var r = n.attrs,
      a = Nl.familyPrefix,
      i = ce(function () {
        return Cn("classes", [].concat(Fa(t.counter ? ["".concat(a, "-layers-counter")] : []), Fa(t.position ? ["".concat(a, "-layers-").concat(t.position)] : [])));
      }),
      o = ce(function () {
        return Cn("transform", typeof t.transform == "string" ? Pr.transform(t.transform) : t.transform);
      }),
      s = ce(function () {
        var f = fh(t.value.toString(), We(We({}, o.value), i.value)),
          c = f["abstract"];
        return t.counter && (c[0].attributes["class"] = c[0].attributes["class"].replace("fa-layers-text", "")), c[0];
      }),
      l = ce(function () {
        return bi(s.value, {}, r);
      });
    return function () {
      return l.value;
    };
  }
});
var Vr = vu(xd),
  Ch = kd();
Vr.use(Im);
Vr.use(Ch);
var Ll = Un();
Ll.planInfo = {
  created: 0,
  proteinSetpoint: 100,
  fatSetpoint: 100,
  carbsSetpoint: 100,
  daysSetpoint: 2,
  calculationMethod: il.ALL
};
Ll.load();
qr.add(mh);
qr.add(ph);
qr.add(dh);
qr.add(uh);
Vr.component("font-awesome-icon", Oh);
Vr.mount("#app");
