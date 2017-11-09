/**
 * Created by Xcar on 2016/9/19.
 */

    //jQuery
!function (a, b) {
    function c(a) {
        var b = oa[a] = {};
        return $.each(a.split(ba), function (a, c) {
            b[c] = !0
        }), b
    }

    function d(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(qa, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : pa.test(d) ? $.parseJSON(d) : d
                } catch (f) {
                }
                $.data(a, c, d)
            } else d = b
        }
        return d
    }

    function e(a) {
        var b;
        for (b in a)if (("data" !== b || !$.isEmptyObject(a[b])) && "toJSON" !== b)return !1;
        return !0
    }

    function f() {
        return !1
    }

    function g() {
        return !0
    }

    function h(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }

    function i(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function j(a, b, c) {
        if (b = b || 0, $.isFunction(b))return $.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType)return $.grep(a, function (a) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = $.grep(a, function (a) {
                return 1 === a.nodeType
            });
            if (Ka.test(b))return $.filter(b, d, !c);
            b = $.filter(b, d)
        }
        return $.grep(a, function (a) {
            return $.inArray(a, b) >= 0 === c
        })
    }

    function k(a) {
        var b = Na.split("|"), c = a.createDocumentFragment();
        if (c.createElement)for (; b.length;)c.createElement(b.pop());
        return c
    }

    function l(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }

    function m(a, b) {
        if (1 === b.nodeType && $.hasData(a)) {
            var c, d, e, f = $._data(a), g = $._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)for (d = 0, e = h[c].length; e > d; d++)$.event.add(b, c, h[c][d])
            }
            g.data && (g.data = $.extend({}, g.data))
        }
    }

    function n(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), $.support.html5Clone && a.innerHTML && !$.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Xa.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.selected = a.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue : "script" === c && b.text !== a.text && (b.text = a.text), b.removeAttribute($.expando))
    }

    function o(a) {
        return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }

    function p(a) {
        Xa.test(a.type) && (a.defaultChecked = a.checked)
    }

    function q(a, b) {
        if (b in a)return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = rb.length; e--;)if (b = rb[e] + c, b in a)return b;
        return d
    }

    function r(a, b) {
        return a = b || a, "none" === $.css(a, "display") || !$.contains(a.ownerDocument, a)
    }

    function s(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; g > f; f++)c = a[f], c.style && (e[f] = $._data(c, "olddisplay"), b ? (!e[f] && "none" === c.style.display && (c.style.display = ""), "" === c.style.display && r(c) && (e[f] = $._data(c, "olddisplay", w(c.nodeName)))) : (d = cb(c, "display"), !e[f] && "none" !== d && $._data(c, "olddisplay", d)));
        for (f = 0; g > f; f++)c = a[f], c.style && (b && "none" !== c.style.display && "" !== c.style.display || (c.style.display = b ? e[f] || "" : "none"));
        return a
    }

    function t(a, b, c) {
        var d = kb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function u(a, b, c, d) {
        for (var e = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, f = 0; 4 > e; e += 2)"margin" === c && (f += $.css(a, c + qb[e], !0)), d ? ("content" === c && (f -= parseFloat(cb(a, "padding" + qb[e])) || 0), "margin" !== c && (f -= parseFloat(cb(a, "border" + qb[e] + "Width")) || 0)) : (f += parseFloat(cb(a, "padding" + qb[e])) || 0, "padding" !== c && (f += parseFloat(cb(a, "border" + qb[e] + "Width")) || 0));
        return f
    }

    function v(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight, e = !0, f = $.support.boxSizing && "border-box" === $.css(a, "boxSizing");
        if (0 >= d || null == d) {
            if (d = cb(a, b), (0 > d || null == d) && (d = a.style[b]), lb.test(d))return d;
            e = f && ($.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + u(a, b, c || (f ? "border" : "content"), e) + "px"
    }

    function w(a) {
        if (nb[a])return nb[a];
        var b = $("<" + a + ">").appendTo(P.body), c = b.css("display");
        return b.remove(), ("none" === c || "" === c) && (db = P.body.appendChild(db || $.extend(P.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            })), eb && db.createElement || (eb = (db.contentWindow || db.contentDocument).document, eb.write("<!doctype html><html><body>"), eb.close()), b = eb.body.appendChild(eb.createElement(a)), c = cb(b, "display"), P.body.removeChild(db)), nb[a] = c, c
    }

    function x(a, b, c, d) {
        var e;
        if ($.isArray(b))$.each(b, function (b, e) {
            c || ub.test(a) ? d(a, e) : x(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== $.type(b))d(a, b); else for (e in b)x(a + "[" + e + "]", b[e], c, d)
    }

    function y(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e, f, g = b.toLowerCase().split(ba), h = 0, i = g.length;
            if ($.isFunction(c))for (; i > h; h++)d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
        }
    }

    function z(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === Kb; k > j && (l || !h); j++)h = i[j](c, d, e), "string" == typeof h && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = z(a, c, d, e, h, g)));
        return (l || !h) && !g["*"] && (h = z(a, c, d, e, "*", g)), h
    }

    function A(a, c) {
        var d, e, f = $.ajaxSettings.flatOptions || {};
        for (d in c)c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && $.extend(!0, a, e)
    }

    function B(a, c, d) {
        var e, f, g, h, i = a.contents, j = a.dataTypes, k = a.responseFields;
        for (f in k)f in d && (c[k[f]] = d[f]);
        for (; "*" === j[0];)j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e)for (f in i)if (i[f] && i[f].test(e)) {
            j.unshift(f);
            break
        }
        if (j[0]in d)g = j[0]; else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
    }

    function C(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(), h = g[0], i = {}, j = 0;
        if (a.dataFilter && (b = a.dataFilter(b, a.dataType)), g[1])for (c in a.converters)i[c.toLowerCase()] = a.converters[c];
        for (; e = g[++j];)if ("*" !== e) {
            if ("*" !== h && h !== e) {
                if (c = i[h + " " + e] || i["* " + e], !c)for (d in i)if (f = d.split(" "), f[1] === e && (c = i[h + " " + f[0]] || i["* " + f[0]])) {
                    c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                    break
                }
                if (c !== !0)if (c && a["throws"])b = c(b); else try {
                    b = c(b)
                } catch (k) {
                    return {state: "parsererror", error: c ? k : "No conversion from " + h + " to " + e}
                }
            }
            h = e
        }
        return {state: "success", data: b}
    }

    function D() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function E() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function F() {
        return setTimeout(function () {
            Vb = b
        }, 0), Vb = $.now()
    }

    function G(a, b) {
        $.each(b, function (b, c) {
            for (var d = (_b[b] || []).concat(_b["*"]), e = 0, f = d.length; f > e; e++)if (d[e].call(a, b, c))return
        })
    }

    function H(a, b, c) {
        var d, e = 0, f = $b.length, g = $.Deferred().always(function () {
            delete h.elem
        }), h = function () {
            for (var b = Vb || F(), c = Math.max(0, i.startTime + i.duration - b), d = c / i.duration || 0, e = 1 - d, f = 0, h = i.tweens.length; h > f; f++)i.tweens[f].run(e);
            return g.notifyWith(a, [i, e, c]), 1 > e && h ? c : (g.resolveWith(a, [i]), !1)
        }, i = g.promise({
            elem: a,
            props: $.extend({}, b),
            opts: $.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Vb || F(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = $.Tween(a, i.opts, b, c, i.opts.specialEasing[b] || i.opts.easing);
                return i.tweens.push(d), d
            },
            stop: function (b) {
                for (var c = 0, d = b ? i.tweens.length : 0; d > c; c++)i.tweens[c].run(1);
                return b ? g.resolveWith(a, [i, b]) : g.rejectWith(a, [i, b]), this
            }
        }), j = i.props;
        for (I(j, i.opts.specialEasing); f > e; e++)if (d = $b[e].call(i, a, j, i.opts))return d;
        return G(i, j), $.isFunction(i.opts.start) && i.opts.start.call(a, i), $.fx.timer($.extend(h, {
            anim: i,
            queue: i.opts.queue,
            elem: a
        })), i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always)
    }

    function I(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = $.camelCase(c), e = b[d], f = a[c], $.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = $.cssHooks[d], g && "expand"in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function J(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m = this, n = a.style, o = {}, p = [], q = a.nodeType && r(a);
        c.queue || (k = $._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function () {
            k.unqueued || l()
        }), k.unqueued++, m.always(function () {
            m.always(function () {
                k.unqueued--, $.queue(a, "fx").length || k.empty.fire()
            })
        })), 1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], "inline" === $.css(a, "display") && "none" === $.css(a, "float") && ($.support.inlineBlockNeedsLayout && "inline" !== w(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", $.support.shrinkWrapBlocks || m.done(function () {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)if (f = b[d], Xb.exec(f)) {
            if (delete b[d], i = i || "toggle" === f, f === (q ? "hide" : "show"))continue;
            p.push(d)
        }
        if (g = p.length) {
            h = $._data(a, "fxshow") || $._data(a, "fxshow", {}), "hidden"in h && (q = h.hidden), i && (h.hidden = !q), q ? $(a).show() : m.done(function () {
                $(a).hide()
            }), m.done(function () {
                var b;
                $.removeData(a, "fxshow", !0);
                for (b in o)$.style(a, b, o[b])
            });
            for (d = 0; g > d; d++)e = p[d], j = m.createTween(e, q ? h[e] : 0), o[e] = h[e] || $.style(a, e), e in h || (h[e] = j.start, q && (j.end = j.start, j.start = "width" === e || "height" === e ? 1 : 0))
        }
    }

    function K(a, b, c, d, e) {
        return new K.prototype.init(a, b, c, d, e)
    }

    function L(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = qb[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function M(a) {
        return $.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    var N, O, P = a.document, Q = a.location, R = a.navigator, S = a.jQuery, T = a.$, U = Array.prototype.push, V = Array.prototype.slice, W = Array.prototype.indexOf, X = Object.prototype.toString, Y = Object.prototype.hasOwnProperty, Z = String.prototype.trim, $ = function (a, b) {
        return new $.fn.init(a, b, N)
    }, _ = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, aa = /\S/, ba = /\s+/, ca = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, da = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, ea = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, fa = /^[\],:{}\s]*$/, ga = /(?:^|:|,)(?:\s*\[)+/g, ha = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, ia = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ja = /^-ms-/, ka = /-([\da-z])/gi, la = function (a, b) {
        return (b + "").toUpperCase()
    }, ma = function () {
        P.addEventListener ? (P.removeEventListener("DOMContentLoaded", ma, !1), $.ready()) : "complete" === P.readyState && (P.detachEvent("onreadystatechange", ma), $.ready())
    }, na = {};
    $.fn = $.prototype = {
        constructor: $, init: function (a, c, d) {
            var e, f, g;
            if (!a)return this;
            if (a.nodeType)return this.context = this[0] = a, this.length = 1, this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : da.exec(a), e && (e[1] || !c)) {
                    if (e[1])return c = c instanceof $ ? c[0] : c, g = c && c.nodeType ? c.ownerDocument || c : P, a = $.parseHTML(e[1], g, !0), ea.test(e[1]) && $.isPlainObject(c) && this.attr.call(a, c, !0), $.merge(this, a);
                    if (f = P.getElementById(e[2]), f && f.parentNode) {
                        if (f.id !== e[2])return d.find(a);
                        this.length = 1, this[0] = f
                    }
                    return this.context = P, this.selector = a, this
                }
                return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
            }
            return $.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), $.makeArray(a, this))
        }, selector: "", jquery: "1.8.3", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return V.call(this)
        }, get: function (a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        }, pushStack: function (a, b, c) {
            var d = $.merge(this.constructor(), a);
            return d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
        }, each: function (a, b) {
            return $.each(this, a, b)
        }, ready: function (a) {
            return $.ready.promise().done(a), this
        }, eq: function (a) {
            return a = +a, -1 === a ? this.slice(a) : this.slice(a, a + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(","))
        }, map: function (a) {
            return this.pushStack($.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: U, sort: [].sort, splice: [].splice
    }, $.fn.init.prototype = $.fn, $.extend = $.fn.extend = function () {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" != typeof h && !$.isFunction(h) && (h = {}), j === i && (h = this, --i); j > i; i++)if (null != (a = arguments[i]))for (c in a)d = h[c], e = a[c], h !== e && (k && e && ($.isPlainObject(e) || (f = $.isArray(e))) ? (f ? (f = !1, g = d && $.isArray(d) ? d : []) : g = d && $.isPlainObject(d) ? d : {}, h[c] = $.extend(k, g, e)) : e !== b && (h[c] = e));
        return h
    }, $.extend({
        noConflict: function (b) {
            return a.$ === $ && (a.$ = T), b && a.jQuery === $ && (a.jQuery = S), $
        }, isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? $.readyWait++ : $.ready(!0)
        }, ready: function (a) {
            if (a === !0 ? !--$.readyWait : !$.isReady) {
                if (!P.body)return setTimeout($.ready, 1);
                $.isReady = !0, a !== !0 && --$.readyWait > 0 || (O.resolveWith(P, [$]), $.fn.trigger && $(P).trigger("ready").off("ready"))
            }
        }, isFunction: function (a) {
            return "function" === $.type(a)
        }, isArray: Array.isArray || function (a) {
            return "array" === $.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, type: function (a) {
            return null == a ? String(a) : na[X.call(a)] || "object"
        }, isPlainObject: function (a) {
            if (!a || "object" !== $.type(a) || a.nodeType || $.isWindow(a))return !1;
            try {
                if (a.constructor && !Y.call(a, "constructor") && !Y.call(a.constructor.prototype, "isPrototypeOf"))return !1
            } catch (c) {
                return !1
            }
            var d;
            for (d in a);
            return d === b || Y.call(a, d)
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, error: function (a) {
            throw new Error(a)
        }, parseHTML: function (a, b, c) {
            var d;
            return a && "string" == typeof a ? ("boolean" == typeof b && (c = b, b = 0), b = b || P, (d = ea.exec(a)) ? [b.createElement(d[1])] : (d = $.buildFragment([a], b, c ? null : []), $.merge([], (d.cacheable ? $.clone(d.fragment) : d.fragment).childNodes))) : null
        }, parseJSON: function (b) {
            return b && "string" == typeof b ? (b = $.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : fa.test(b.replace(ha, "@").replace(ia, "]").replace(ga, "")) ? new Function("return " + b)() : void $.error("Invalid JSON: " + b)) : null
        }, parseXML: function (c) {
            var d, e;
            if (!c || "string" != typeof c)return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (f) {
                d = b
            }
            return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && $.error("Invalid XML: " + c), d
        }, noop: function () {
        }, globalEval: function (b) {
            b && aa.test(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(ja, "ms-").replace(ka, la)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, c, d) {
            var e, f = 0, g = a.length, h = g === b || $.isFunction(a);
            if (d)if (h) {
                for (e in a)if (c.apply(a[e], d) === !1)break
            } else for (; g > f && c.apply(a[f++], d) !== !1;); else if (h) {
                for (e in a)if (c.call(a[e], e, a[e]) === !1)break
            } else for (; g > f && c.call(a[f], f, a[f++]) !== !1;);
            return a
        }, trim: Z && !Z.call("\ufeff?") ? function (a) {
            return null == a ? "" : Z.call(a)
        } : function (a) {
            return null == a ? "" : (a + "").replace(ca, "")
        }, makeArray: function (a, b) {
            var c, d = b || [];
            return null != a && (c = $.type(a), null == a.length || "string" === c || "function" === c || "regexp" === c || $.isWindow(a) ? U.call(d, a) : $.merge(d, a)), d
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (W)return W.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a)return c
            }
            return -1
        }, merge: function (a, c) {
            var d = c.length, e = a.length, f = 0;
            if ("number" == typeof d)for (; d > f; f++)a[e++] = c[f]; else for (; c[f] !== b;)a[e++] = c[f++];
            return a.length = e, a
        }, grep: function (a, b, c) {
            var d, e = [], f = 0, g = a.length;
            for (c = !!c; g > f; f++)d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e
        }, map: function (a, c, d) {
            var e, f, g = [], h = 0, i = a.length, j = a instanceof $ || i !== b && "number" == typeof i && (i > 0 && a[0] && a[i - 1] || 0 === i || $.isArray(a));
            if (j)for (; i > h; h++)e = c(a[h], h, d), null != e && (g[g.length] = e); else for (f in a)e = c(a[f], f, d), null != e && (g[g.length] = e);
            return g.concat.apply([], g)
        }, guid: 1, proxy: function (a, c) {
            var d, e, f;
            return "string" == typeof c && (d = a[c], c = a, a = d), $.isFunction(a) ? (e = V.call(arguments, 2), f = function () {
                return a.apply(c, e.concat(V.call(arguments)))
            }, f.guid = a.guid = a.guid || $.guid++, f) : b
        }, access: function (a, c, d, e, f, g, h) {
            var i, j = null == d, k = 0, l = a.length;
            if (d && "object" == typeof d) {
                for (k in d)$.access(a, c, k, d[k], 1, g, e);
                f = 1
            } else if (e !== b) {
                if (i = h === b && $.isFunction(e), j && (i ? (i = c, c = function (a, b, c) {
                        return i.call($(a), c)
                    }) : (c.call(a, e), c = null)), c)for (; l > k; k++)c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
                f = 1
            }
            return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
        }, now: function () {
            return (new Date).getTime()
        }
    }), $.ready.promise = function (b) {
        if (!O)if (O = $.Deferred(), "complete" === P.readyState)setTimeout($.ready, 1); else if (P.addEventListener)P.addEventListener("DOMContentLoaded", ma, !1), a.addEventListener("load", $.ready, !1); else {
            P.attachEvent("onreadystatechange", ma), a.attachEvent("onload", $.ready);
            var c = !1;
            try {
                c = null == a.frameElement && P.documentElement
            } catch (d) {
            }
            c && c.doScroll && function e() {
                if (!$.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    $.ready()
                }
            }()
        }
        return O.promise(b)
    }, $.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
        na["[object " + b + "]"] = b.toLowerCase()
    }), N = $(P);
    var oa = {};
    $.Callbacks = function (a) {
        a = "string" == typeof a ? oa[a] || c(a) : $.extend({}, a);
        var d, e, f, g, h, i, j = [], k = !a.once && [], l = function (b) {
            for (d = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++)if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                d = !1;
                break
            }
            f = !1, j && (k ? k.length && l(k.shift()) : d ? j = [] : m.disable())
        }, m = {
            add: function () {
                if (j) {
                    var b = j.length;
                    !function c(b) {
                        $.each(b, function (b, d) {
                            var e = $.type(d);
                            "function" === e ? (!a.unique || !m.has(d)) && j.push(d) : d && d.length && "string" !== e && c(d)
                        })
                    }(arguments), f ? h = j.length : d && (g = b, l(d))
                }
                return this
            }, remove: function () {
                return j && $.each(arguments, function (a, b) {
                    for (var c; (c = $.inArray(b, j, c)) > -1;)j.splice(c, 1), f && (h >= c && h--, i >= c && i--)
                }), this
            }, has: function (a) {
                return $.inArray(a, j) > -1
            }, empty: function () {
                return j = [], this
            }, disable: function () {
                return j = k = d = b, this
            }, disabled: function () {
                return !j
            }, lock: function () {
                return k = b, d || m.disable(), this
            }, locked: function () {
                return !k
            }, fireWith: function (a, b) {
                return b = b || [], b = [a, b.slice ? b.slice() : b], j && (!e || k) && (f ? k.push(b) : l(b)), this
            }, fire: function () {
                return m.fireWith(this, arguments), this
            }, fired: function () {
                return !!e
            }
        };
        return m
    }, $.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", $.Callbacks("once memory"), "resolved"], ["reject", "fail", $.Callbacks("once memory"), "rejected"], ["notify", "progress", $.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                }, always: function () {
                    return e.done(arguments).fail(arguments), this
                }, then: function () {
                    var a = arguments;
                    return $.Deferred(function (c) {
                        $.each(b, function (b, d) {
                            var f = d[0], g = a[b];
                            e[d[1]]($.isFunction(g) ? function () {
                                var a = g.apply(this, arguments);
                                a && $.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                            } : c[f])
                        }), a = null
                    }).promise()
                }, promise: function (a) {
                    return null != a ? $.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, $.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b, c, d, e = 0, f = V.call(arguments), g = f.length, h = 1 !== g || a && $.isFunction(a.promise) ? g : 0, i = 1 === h ? a : $.Deferred(), j = function (a, c, d) {
                return function (e) {
                    c[a] = this, d[a] = arguments.length > 1 ? V.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1)for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)f[e] && $.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    }), $.support = function () {
        var b, c, d, e, f, g, h, i, j, k, l, m = P.createElement("div");
        if (m.setAttribute("className", "t"), m.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = m.getElementsByTagName("*"), d = m.getElementsByTagName("a")[0], !c || !d || !c.length)return {};
        e = P.createElement("select"), f = e.appendChild(P.createElement("option")), g = m.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b = {
            leadingWhitespace: 3 === m.firstChild.nodeType,
            tbody: !m.getElementsByTagName("tbody").length,
            htmlSerialize: !!m.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: "on" === g.value,
            optSelected: f.selected,
            getSetAttribute: "t" !== m.className,
            enctype: !!P.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== P.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === P.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
        try {
            delete m.test
        } catch (n) {
            b.deleteExpando = !1
        }
        if (!m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent("onclick", l = function () {
                b.noCloneEvent = !1
            }), m.cloneNode(!0).fireEvent("onclick"), m.detachEvent("onclick", l)), g = P.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), g.setAttribute("name", "t"), m.appendChild(g), h = P.createDocumentFragment(), h.appendChild(m.lastChild), b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, h.removeChild(g), h.appendChild(m), m.attachEvent)for (j in{
            submit: !0,
            change: !0,
            focusin: !0
        })i = "on" + j, k = i in m, k || (m.setAttribute(i, "return;"), k = "function" == typeof m[i]), b[j + "Bubbles"] = k;
        return $(function () {
            var c, d, e, f, g = "padding:0;margin:0;border:0;display:block;overflow:hidden;", h = P.getElementsByTagName("body")[0];
            h && (c = P.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", h.insertBefore(c, h.firstChild), d = P.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = d.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", k = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = k && 0 === e[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = 4 === d.offsetWidth, b.doesNotIncludeMarginInBodyOffset = 1 !== h.offsetTop, a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(d, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(d, null) || {width: "4px"}).width, f = P.createElement("div"), f.style.cssText = d.style.cssText = g, f.style.marginRight = f.style.width = "0", d.style.width = "1px", d.appendChild(f), b.reliableMarginRight = !parseFloat((a.getComputedStyle(f, null) || {}).marginRight)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = g + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== d.offsetWidth, c.style.zoom = 1), h.removeChild(c), c = d = e = f = null)
        }), h.removeChild(m), c = d = e = f = g = h = m = null, b
    }();
    var pa = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, qa = /([A-Z])/g;
    $.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + ($.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (a) {
            return a = a.nodeType ? $.cache[a[$.expando]] : a[$.expando], !!a && !e(a)
        },
        data: function (a, c, d, e) {
            if ($.acceptData(a)) {
                var f, g, h = $.expando, i = "string" == typeof c, j = a.nodeType, k = j ? $.cache : a, l = j ? a[h] : a[h] && h;
                if (l && k[l] && (e || k[l].data) || !i || d !== b)return l || (j ? a[h] = l = $.deletedIds.pop() || $.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = $.noop)), ("object" == typeof c || "function" == typeof c) && (e ? k[l] = $.extend(k[l], c) : k[l].data = $.extend(k[l].data, c)), f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[$.camelCase(c)] = d), i ? (g = f[c], null == g && (g = f[$.camelCase(c)])) : g = f, g
            }
        },
        removeData: function (a, b, c) {
            if ($.acceptData(a)) {
                var d, f, g, h = a.nodeType, i = h ? $.cache : a, j = h ? a[$.expando] : $.expando;
                if (i[j]) {
                    if (b && (d = c ? i[j] : i[j].data)) {
                        $.isArray(b) || (b in d ? b = [b] : (b = $.camelCase(b), b = b in d ? [b] : b.split(" ")));
                        for (f = 0, g = b.length; g > f; f++)delete d[b[f]];
                        if (!(c ? e : $.isEmptyObject)(d))return
                    }
                    (c || (delete i[j].data, e(i[j]))) && (h ? $.cleanData([a], !0) : $.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null)
                }
            }
        },
        _data: function (a, b, c) {
            return $.data(a, b, c, !0)
        },
        acceptData: function (a) {
            var b = a.nodeName && $.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), $.fn.extend({
        data: function (a, c) {
            var e, f, g, h, i, j = this[0], k = 0, l = null;
            if (a === b) {
                if (this.length && (l = $.data(j), 1 === j.nodeType && !$._data(j, "parsedAttrs"))) {
                    for (g = j.attributes, i = g.length; i > k; k++)h = g[k].name, h.indexOf("data-") || (h = $.camelCase(h.substring(5)), d(j, h, l[h]));
                    $._data(j, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof a ? this.each(function () {
                $.data(this, a)
            }) : (e = a.split(".", 2), e[1] = e[1] ? "." + e[1] : "", f = e[1] + "!", $.access(this, function (c) {
                return c === b ? (l = this.triggerHandler("getData" + f, [e[0]]), l === b && j && (l = $.data(j, a), l = d(j, a, l)), l === b && e[1] ? this.data(e[0]) : l) : (e[1] = c, void this.each(function () {
                    var b = $(this);
                    b.triggerHandler("setData" + f, e), $.data(this, a, c), b.triggerHandler("changeData" + f, e)
                }))
            }, null, c, arguments.length > 1, null, !1))
        }, removeData: function (a) {
            return this.each(function () {
                $.removeData(this, a)
            })
        }
    }), $.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = $._data(a, b), c && (!d || $.isArray(c) ? d = $._data(a, b, $.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = $.queue(a, b), d = c.length, e = c.shift(), f = $._queueHooks(a, b), g = function () {
                $.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return $._data(a, c) || $._data(a, c, {
                    empty: $.Callbacks("once memory").add(function () {
                        $.removeData(a, b + "queue", !0), $.removeData(a, c, !0)
                    })
                })
        }
    }), $.fn.extend({
        queue: function (a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? $.queue(this[0], a) : c === b ? this : this.each(function () {
                var b = $.queue(this, a, c);
                $._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && $.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                $.dequeue(this, a)
            })
        }, delay: function (a, b) {
            return a = $.fx ? $.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, c) {
            var d, e = 1, f = $.Deferred(), g = this, h = this.length, i = function () {
                --e || f.resolveWith(g, [g])
            };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;)d = $._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var ra, sa, ta, ua = /[\t\r\n]/g, va = /\r/g, wa = /^(?:button|input)$/i, xa = /^(?:button|input|object|select|textarea)$/i, ya = /^a(?:rea|)$/i, za = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Aa = $.support.getSetAttribute;
    $.fn.extend({
        attr: function (a, b) {
            return $.access(this, $.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                $.removeAttr(this, a)
            })
        }, prop: function (a, b) {
            return $.access(this, $.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return a = $.propFix[a] || a, this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {
                }
            })
        }, addClass: function (a) {
            var b, c, d, e, f, g, h;
            if ($.isFunction(a))return this.each(function (b) {
                $(this).addClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a)for (b = a.split(ba), c = 0, d = this.length; d > c; c++)if (e = this[c], 1 === e.nodeType)if (e.className || 1 !== b.length) {
                for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++)f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
                e.className = $.trim(f)
            } else e.className = a;
            return this
        }, removeClass: function (a) {
            var c, d, e, f, g, h, i;
            if ($.isFunction(a))return this.each(function (b) {
                $(this).removeClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a || a === b)for (c = (a || "").split(ba), h = 0, i = this.length; i > h; h++)if (e = this[h], 1 === e.nodeType && e.className) {
                for (d = (" " + e.className + " ").replace(ua, " "), f = 0, g = c.length; g > f; f++)for (; d.indexOf(" " + c[f] + " ") >= 0;)d = d.replace(" " + c[f] + " ", " ");
                e.className = a ? $.trim(d) : ""
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a, d = "boolean" == typeof b;
            return this.each($.isFunction(a) ? function (c) {
                $(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c)for (var e, f = 0, g = $(this), h = b, i = a.split(ba); e = i[f++];)h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e); else("undefined" === c || "boolean" === c) && (this.className && $._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : $._data(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ua, " ").indexOf(b) >= 0)return !0;
            return !1
        }, val: function (a) {
            var c, d, e, f = this[0];
            {
                if (arguments.length)return e = $.isFunction(a), this.each(function (d) {
                    var f, g = $(this);
                    1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : $.isArray(f) && (f = $.map(f, function (a) {
                        return null == a ? "" : a + ""
                    })), c = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()], c && "set"in c && c.set(this, f, "value") !== b || (this.value = f))
                });
                if (f)return c = $.valHooks[f.type] || $.valHooks[f.nodeName.toLowerCase()], c && "get"in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(va, "") : null == d ? "" : d)
            }
        }
    }), $.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || ($.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && $.nodeName(c.parentNode, "optgroup"))) {
                        if (b = $(c).val(), f)return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c = $.makeArray(b);
                    return $(a).find("option").each(function () {
                        this.selected = $.inArray($(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attrFn: {},
        attr: function (a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (a && 3 !== i && 8 !== i && 2 !== i)return e && $.isFunction($.fn[c]) ? $(a)[c](d) : "undefined" == typeof a.getAttribute ? $.prop(a, c, d) : (h = 1 !== i || !$.isXMLDoc(a), h && (c = c.toLowerCase(), g = $.attrHooks[c] || (za.test(c) ? sa : ra)), d !== b ? null === d ? void $.removeAttr(a, c) : g && "set"in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : g && "get"in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f))
        },
        removeAttr: function (a, b) {
            var c, d, e, f, g = 0;
            if (b && 1 === a.nodeType)for (d = b.split(ba); g < d.length; g++)e = d[g], e && (c = $.propFix[e] || e, f = za.test(e), f || $.attr(a, e, ""), a.removeAttribute(Aa ? e : c), f && c in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (wa.test(a.nodeName) && a.parentNode)$.error("type property can't be changed"); else if (!$.support.radioValue && "radio" === b && $.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }, value: {
                get: function (a, b) {
                    return ra && $.nodeName(a, "button") ? ra.get(a, b) : b in a ? a.value : null
                }, set: function (a, b, c) {
                    return ra && $.nodeName(a, "button") ? ra.set(a, b, c) : void(a.value = b)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h)return g = 1 !== h || !$.isXMLDoc(a), g && (c = $.propFix[c] || c, f = $.propHooks[c]), d !== b ? f && "set"in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get"in f && null !== (e = f.get(a, c)) ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : xa.test(a.nodeName) || ya.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), sa = {
        get: function (a, c) {
            var d, e = $.prop(a, c);
            return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        }, set: function (a, b, c) {
            var d;
            return b === !1 ? $.removeAttr(a, c) : (d = $.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, Aa || (ta = {name: !0, id: !0, coords: !0}, ra = $.valHooks.button = {
        get: function (a, c) {
            var d;
            return d = a.getAttributeNode(c), d && (ta[c] ? "" !== d.value : d.specified) ? d.value : b;

        }, set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = P.createAttribute(c), a.setAttributeNode(d)), d.value = b + ""
        }
    }, $.each(["width", "height"], function (a, b) {
        $.attrHooks[b] = $.extend($.attrHooks[b], {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        })
    }), $.attrHooks.contenteditable = {
        get: ra.get, set: function (a, b, c) {
            "" === b && (b = "false"), ra.set(a, b, c)
        }
    }), $.support.hrefNormalized || $.each(["href", "src", "width", "height"], function (a, c) {
        $.attrHooks[c] = $.extend($.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return null === d ? b : d
            }
        })
    }), $.support.style || ($.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        }, set: function (a, b) {
            return a.style.cssText = b + ""
        }
    }), $.support.optSelected || ($.propHooks.selected = $.extend($.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), $.support.enctype || ($.propFix.enctype = "encoding"), $.support.checkOn || $.each(["radio", "checkbox"], function () {
        $.valHooks[this] = {
            get: function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
        }
    }), $.each(["radio", "checkbox"], function () {
        $.valHooks[this] = $.extend($.valHooks[this], {
            set: function (a, b) {
                return $.isArray(b) ? a.checked = $.inArray($(a).val(), b) >= 0 : void 0
            }
        })
    });
    var Ba = /^(?:textarea|input|select)$/i, Ca = /^([^\.]*|)(?:\.(.+)|)$/, Da = /(?:^|\s)hover(\.\S+|)\b/, Ea = /^key/, Fa = /^(?:mouse|contextmenu)|click/, Ga = /^(?:focusinfocus|focusoutblur)$/, Ha = function (a) {
        return $.event.special.hover ? a : a.replace(Da, "mouseenter$1 mouseleave$1")
    };
    $.event = {
        add: function (a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q;
            if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = $._data(a))) {
                for (d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = $.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function (a) {
                    return "undefined" == typeof $ || a && $.event.triggered === a.type ? b : $.event.dispatch.apply(h.elem, arguments)
                }, h.elem = a), c = $.trim(Ha(c)).split(" "), j = 0; j < c.length; j++)k = Ca.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), q = $.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = $.event.special[l] || {}, n = $.extend({
                    type: l,
                    origType: k[1],
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && $.expr.match.needsContext.test(f),
                    namespace: m.join(".")
                }, o), p = i[l], p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))), q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), $.event.global[l] = !0;
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = $.hasData(a) && $._data(a);
            if (q && (m = q.events)) {
                for (b = $.trim(Ha(b || "")).split(" "), f = 0; f < b.length; f++)if (g = Ca.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
                    for (n = $.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = 0; l < o.length; l++)p = o[l], !(!e && i !== p.origType || c && c.guid !== p.guid || j && !j.test(p.namespace) || d && d !== p.selector && ("**" !== d || !p.selector) || (o.splice(l--, 1), p.selector && o.delegateCount--, !n.remove || !n.remove.call(a, p)));
                    0 === o.length && k !== o.length && ((!n.teardown || n.teardown.call(a, j, q.handle) === !1) && $.removeEvent(a, h, q.handle), delete m[h])
                } else for (h in m)$.event.remove(a, h + b[f], c, d, !0);
                $.isEmptyObject(m) && (delete q.handle, $.removeData(a, "events", !0))
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (c, d, e, f) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var g, h, i, j, k, l, m, n, o, p, q = c.type || c, r = [];
                if (Ga.test(q + $.event.triggered))return;
                if (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), (!e || $.event.customEvent[q]) && !$.event.global[q])return;
                if (c = "object" == typeof c ? c[$.expando] ? c : new $.Event(q, c) : new $.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q : "", !e) {
                    g = $.cache;
                    for (i in g)g[i].events && g[i].events[q] && $.event.trigger(c, d, g[i].handle.elem, !0);
                    return
                }
                if (c.result = b, c.target || (c.target = e), d = null != d ? $.makeArray(d) : [], d.unshift(c), m = $.event.special[q] || {}, m.trigger && m.trigger.apply(e, d) === !1)return;
                if (o = [[e, m.bindType || q]], !f && !m.noBubble && !$.isWindow(e)) {
                    for (p = m.delegateType || q, j = Ga.test(p + q) ? e : e.parentNode, k = e; j; j = j.parentNode)o.push([j, p]), k = j;
                    k === (e.ownerDocument || P) && o.push([k.defaultView || k.parentWindow || a, p])
                }
                for (i = 0; i < o.length && !c.isPropagationStopped(); i++)j = o[i][0], c.type = o[i][1], n = ($._data(j, "events") || {})[c.type] && $._data(j, "handle"), n && n.apply(j, d), n = l && j[l], n && $.acceptData(j) && n.apply && n.apply(j, d) === !1 && c.preventDefault();
                return c.type = q, !(f || c.isDefaultPrevented() || m._default && m._default.apply(e.ownerDocument, d) !== !1 || "click" === q && $.nodeName(e, "a") || !$.acceptData(e) || !l || !e[q] || ("focus" === q || "blur" === q) && 0 === c.target.offsetWidth || $.isWindow(e) || (k = e[l], k && (e[l] = null), $.event.triggered = q, e[q](), $.event.triggered = b, !k || !(e[l] = k))), c.result
            }
        },
        dispatch: function (c) {
            c = $.event.fix(c || a.event);
            var d, e, f, g, h, i, j, k, l, m = ($._data(this, "events") || {})[c.type] || [], n = m.delegateCount, o = V.call(arguments), p = !c.exclusive && !c.namespace, q = $.event.special[c.type] || {}, r = [];
            if (o[0] = c, c.delegateTarget = this, !q.preDispatch || q.preDispatch.call(this, c) !== !1) {
                if (n && (!c.button || "click" !== c.type))for (f = c.target; f != this; f = f.parentNode || this)if (f.disabled !== !0 || "click" !== c.type) {
                    for (h = {}, j = [], d = 0; n > d; d++)k = m[d], l = k.selector, h[l] === b && (h[l] = k.needsContext ? $(l, this).index(f) >= 0 : $.find(l, this, null, [f]).length), h[l] && j.push(k);
                    j.length && r.push({elem: f, matches: j})
                }
                for (m.length > n && r.push({
                    elem: this,
                    matches: m.slice(n)
                }), d = 0; d < r.length && !c.isPropagationStopped(); d++)for (i = r[d], c.currentTarget = i.elem, e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++)k = i.matches[e], (p || !c.namespace && !k.namespace || c.namespace_re && c.namespace_re.test(k.namespace)) && (c.data = k.data, c.handleObj = k, g = (($.event.special[k.origType] || {}).handle || k.handler).apply(i.elem, o), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation())));
                return q.postDispatch && q.postDispatch.call(this, c), c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, c) {
                var d, e, f, g = c.button, h = c.fromElement;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || P, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[$.expando])return a;
            var b, c, d = a, e = $.event.fixHooks[a.type] || {}, f = e.props ? this.props.concat(e.props) : this.props;
            for (a = $.Event(d), b = f.length; b;)c = f[--b], a[c] = d[c];
            return a.target || (a.target = d.srcElement || P), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, e.filter ? e.filter(a, d) : a
        },
        special: {
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (a, b, c) {
                    $.isWindow(this) && (this.onbeforeunload = c)
                }, teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = $.extend(new $.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? $.event.trigger(e, null, b) : $.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, $.event.handle = $.event.dispatch, $.removeEvent = P.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, $.Event = function (a, b) {
        return this instanceof $.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? g : f) : this.type = a, b && $.extend(this, b), this.timeStamp = a && a.timeStamp || $.now(), this[$.expando] = !0, void 0) : new $.Event(a, b)
    }, $.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = g;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = g;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = g, this.stopPropagation()
        }, isDefaultPrevented: f, isPropagationStopped: f, isImmediatePropagationStopped: f
    }, $.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        $.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                {
                    var c, d = this, e = a.relatedTarget, f = a.handleObj;
                    f.selector
                }
                return (!e || e !== d && !$.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), $.support.submitBubbles || ($.event.special.submit = {
        setup: function () {
            return $.nodeName(this, "form") ? !1 : void $.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target, d = $.nodeName(c, "input") || $.nodeName(c, "button") ? c.form : b;
                d && !$._data(d, "_submit_attached") && ($.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), $._data(d, "_submit_attached", !0))
            })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && $.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            return $.nodeName(this, "form") ? !1 : void $.event.remove(this, "._submit")
        }
    }), $.support.changeBubbles || ($.event.special.change = {
        setup: function () {
            return Ba.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && ($.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), $.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), $.event.simulate("change", this, a, !0)
            })), !1) : void $.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                Ba.test(b.nodeName) && !$._data(b, "_change_attached") && ($.event.add(b, "change._change", function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && $.event.simulate("change", this.parentNode, a, !0)
                }), $._data(b, "_change_attached", !0))
            })
        }, handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return $.event.remove(this, "._change"), !Ba.test(this.nodeName)
        }
    }), $.support.focusinBubbles || $.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = 0, d = function (a) {
            $.event.simulate(b, a.target, $.event.fix(a), !0)
        };
        $.event.special[b] = {
            setup: function () {
                0 === c++ && P.addEventListener(a, d, !0)
            }, teardown: function () {
                0 === --c && P.removeEventListener(a, d, !0)
            }
        }
    }), $.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (i in a)this.on(i, c, d, a[i], g);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1)e = f; else if (!e)return this;
            return 1 === g && (h = e, e = function (a) {
                return $().off(a), h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = $.guid++)), this.each(function () {
                $.event.add(this, a, e, d, c)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, c, d) {
            var e, g;
            if (a && a.preventDefault && a.handleObj)return e = a.handleObj, $(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (g in a)this.off(g, c, a[g]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = f), this.each(function () {
                $.event.remove(this, a, d, c)
            })
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, live: function (a, b, c) {
            return $(this.context).on(a, this.selector, b, c), this
        }, die: function (a, b) {
            return $(this.context).off(a, this.selector || "**", b), this
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }, trigger: function (a, b) {
            return this.each(function () {
                $.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            return this[0] ? $.event.trigger(a, b, this[0], !0) : void 0
        }, toggle: function (a) {
            var b = arguments, c = a.guid || $.guid++, d = 0, e = function (c) {
                var e = ($._data(this, "lastToggle" + a.guid) || 0) % d;
                return $._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
            };
            for (e.guid = c; d < b.length;)b[d++].guid = c;
            return this.click(e)
        }, hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        $.fn[b] = function (a, c) {
            return null == c && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, Ea.test(b) && ($.event.fixHooks[b] = $.event.keyHooks), Fa.test(b) && ($.event.fixHooks[b] = $.event.mouseHooks)
    }), function (a, b) {
        function c(a, b, c, d) {
            c = c || [], b = b || F;
            var e, f, g, h, i = b.nodeType;
            if (!a || "string" != typeof a)return c;
            if (1 !== i && 9 !== i)return [];
            if (g = v(b), !g && !d && (e = ca.exec(a)))if (h = e[1]) {
                if (9 === i) {
                    if (f = b.getElementById(h), !f || !f.parentNode)return c;
                    if (f.id === h)return c.push(f), c
                } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(h)) && w(b, f) && f.id === h)return c.push(f), c
            } else {
                if (e[2])return K.apply(c, L.call(b.getElementsByTagName(a), 0)), c;
                if ((h = e[3]) && ma && b.getElementsByClassName)return K.apply(c, L.call(b.getElementsByClassName(h), 0)), c
            }
            return p(a.replace(Z, "$1"), b, c, d, g)
        }

        function d(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function e(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function f(a) {
            return N(function (b) {
                return b = +b, N(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function g(a, b, c) {
            if (a === b)return c;
            for (var d = a.nextSibling; d;) {
                if (d === b)return -1;
                d = d.nextSibling
            }
            return 1
        }

        function h(a, b) {
            var d, e, f, g, h, i, j, k = Q[D][a + " "];
            if (k)return b ? 0 : k.slice(0);
            for (h = a, i = [], j = t.preFilter; h;) {
                (!d || (e = _.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = aa.exec(h)) && (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = e[0].replace(Z, " "));
                for (g in t.filter)(e = ha[g].exec(h)) && (!j[g] || (e = j[g](e))) && (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = g, d.matches = e);
                if (!d)break
            }
            return b ? h.length : h ? c.error(a) : Q(a, i).slice(0)
        }

        function i(a, b, c) {
            var d = b.dir, e = c && "parentNode" === b.dir, f = I++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];)if (e || 1 === b.nodeType)return a(b, c, f)
            } : function (b, c, g) {
                if (g) {
                    for (; b = b[d];)if ((e || 1 === b.nodeType) && a(b, c, g))return b
                } else for (var h, i = H + " " + f + " ", j = i + r; b = b[d];)if (e || 1 === b.nodeType) {
                    if ((h = b[D]) === j)return b.sizset;
                    if ("string" == typeof h && 0 === h.indexOf(i)) {
                        if (b.sizset)return b
                    } else {
                        if (b[D] = j, a(b, c, g))return b.sizset = !0, b;
                        b.sizset = !1
                    }
                }
            }
        }

        function j(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;)if (!a[e](b, c, d))return !1;
                return !0
            } : a[0]
        }

        function k(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function l(a, b, c, d, e, f) {
            return d && !d[D] && (d = l(d)), e && !e[D] && (e = l(e, f)), N(function (f, g, h, i) {
                var j, l, m, n = [], p = [], q = g.length, r = f || o(b || "*", h.nodeType ? [h] : h, []), s = !a || !f && b ? r : k(r, n, a, h, i), t = c ? e || (f ? a : q || d) ? [] : g : s;
                if (c && c(s, t, h, i), d)for (j = k(t, p), d(j, [], h, i), l = j.length; l--;)(m = j[l]) && (t[p[l]] = !(s[p[l]] = m));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], l = t.length; l--;)(m = t[l]) && j.push(s[l] = m);
                            e(null, t = [], j, i)
                        }
                        for (l = t.length; l--;)(m = t[l]) && (j = e ? M.call(f, m) : n[l]) > -1 && (f[j] = !(g[j] = m))
                    }
                } else t = k(t === g ? t.splice(q, t.length) : t), e ? e(null, g, t, i) : K.apply(g, t)
            })
        }

        function m(a) {
            for (var b, c, d, e = a.length, f = t.relative[a[0].type], g = f || t.relative[" "], h = f ? 1 : 0, k = i(function (a) {
                return a === b
            }, g, !0), n = i(function (a) {
                return M.call(b, a) > -1
            }, g, !0), o = [function (a, c, d) {
                return !f && (d || c !== A) || ((b = c).nodeType ? k(a, c, d) : n(a, c, d))
            }]; e > h; h++)if (c = t.relative[a[h].type])o = [i(j(o), c)]; else {
                if (c = t.filter[a[h].type].apply(null, a[h].matches), c[D]) {
                    for (d = ++h; e > d && !t.relative[a[d].type]; d++);
                    return l(h > 1 && j(o), h > 1 && a.slice(0, h - 1).join("").replace(Z, "$1"), c, d > h && m(a.slice(h, d)), e > d && m(a = a.slice(d)), e > d && a.join(""))
                }
                o.push(c)
            }
            return j(o)
        }

        function n(a, b) {
            var d = b.length > 0, e = a.length > 0, f = function (g, h, i, j, l) {
                var m, n, o, p = [], q = 0, s = "0", u = g && [], v = null != l, w = A, x = g || e && t.find.TAG("*", l && h.parentNode || h), y = H += null == w ? 1 : Math.E;
                for (v && (A = h !== F && h, r = f.el); null != (m = x[s]); s++) {
                    if (e && m) {
                        for (n = 0; o = a[n]; n++)if (o(m, h, i)) {
                            j.push(m);
                            break
                        }
                        v && (H = y, r = ++f.el)
                    }
                    d && ((m = !o && m) && q--, g && u.push(m))
                }
                if (q += s, d && s !== q) {
                    for (n = 0; o = b[n]; n++)o(u, p, h, i);
                    if (g) {
                        if (q > 0)for (; s--;)!u[s] && !p[s] && (p[s] = J.call(j));
                        p = k(p)
                    }
                    K.apply(j, p), v && !g && p.length > 0 && q + b.length > 1 && c.uniqueSort(j)
                }
                return v && (H = y, A = w), u
            };
            return f.el = 0, d ? N(f) : f
        }

        function o(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++)c(a, b[e], d);
            return d
        }

        function p(a, b, c, d, e) {
            {
                var f, g, i, j, k, l = h(a);
                l.length
            }
            if (!d && 1 === l.length) {
                if (g = l[0] = l[0].slice(0), g.length > 2 && "ID" === (i = g[0]).type && 9 === b.nodeType && !e && t.relative[g[1].type]) {
                    if (b = t.find.ID(i.matches[0].replace(ga, ""), b, e)[0], !b)return c;
                    a = a.slice(g.shift().length)
                }
                for (f = ha.POS.test(a) ? -1 : g.length - 1; f >= 0 && (i = g[f], !t.relative[j = i.type]); f--)if ((k = t.find[j]) && (d = k(i.matches[0].replace(ga, ""), da.test(g[0].type) && b.parentNode || b, e))) {
                    if (g.splice(f, 1), a = d.length && g.join(""), !a)return K.apply(c, L.call(d, 0)), c;
                    break
                }
            }
            return x(a, l)(d, b, e, c, da.test(a)), c
        }

        function q() {
        }

        var r, s, t, u, v, w, x, y, z, A, B = !0, C = "undefined", D = ("sizcache" + Math.random()).replace(".", ""), E = String, F = a.document, G = F.documentElement, H = 0, I = 0, J = [].pop, K = [].push, L = [].slice, M = [].indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
                return -1
            }, N = function (a, b) {
            return a[D] = null == b || b, a
        }, O = function () {
            var a = {}, b = [];
            return N(function (c, d) {
                return b.push(c) > t.cacheLength && delete a[b.shift()], a[c + " "] = d
            }, a)
        }, P = O(), Q = O(), R = O(), S = "[\\x20\\t\\r\\n\\f]", T = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", U = T.replace("w", "w#"), V = "([*^$|!~]?=)", W = "\\[" + S + "*(" + T + ")" + S + "*(?:" + V + S + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + S + "*\\]", X = ":(" + T + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + W + ")|[^:]|\\\\.)*|.*))\\)|)", Y = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + S + "*((?:-\\d)?\\d*)" + S + "*\\)|)(?=[^-]|$)", Z = new RegExp("^" + S + "+|((?:^|[^\\\\])(?:\\\\.)*)" + S + "+$", "g"), _ = new RegExp("^" + S + "*," + S + "*"), aa = new RegExp("^" + S + "*([\\x20\\t\\r\\n\\f>+~])" + S + "*"), ba = new RegExp(X), ca = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, da = /[\x20\t\r\n\f]*[+~]/, ea = /h\d/i, fa = /input|select|textarea|button/i, ga = /\\(?!\\)/g, ha = {
            ID: new RegExp("^#(" + T + ")"),
            CLASS: new RegExp("^\\.(" + T + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + T + ")['\"]?\\]"),
            TAG: new RegExp("^(" + T.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + X),
            POS: new RegExp(Y, "i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + S + "*(even|odd|(([+-]|)(\\d*)n|)" + S + "*(?:([+-]|)" + S + "*(\\d+)|))" + S + "*\\)|)", "i"),
            needsContext: new RegExp("^" + S + "*[>+~]|" + Y, "i")
        }, ia = function (a) {
            var b = F.createElement("div");
            try {
                return a(b)
            } catch (c) {
                return !1
            } finally {
                b = null
            }
        }, ja = ia(function (a) {
            return a.appendChild(F.createComment("")), !a.getElementsByTagName("*").length
        }), ka = ia(function (a) {
            return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== C && "#" === a.firstChild.getAttribute("href")
        }), la = ia(function (a) {
            a.innerHTML = "<select></select>";
            var b = typeof a.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }), ma = ia(function (a) {
            return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1
        }), na = ia(function (a) {
            a.id = D + 0, a.innerHTML = "<a name='" + D + "'></a><div name='" + D + "'></div>", G.insertBefore(a, G.firstChild);
            var b = F.getElementsByName && F.getElementsByName(D).length === 2 + F.getElementsByName(D + 0).length;
            return s = !F.getElementById(D), G.removeChild(a), b
        });
        try {
            L.call(G.childNodes, 0)[0].nodeType
        } catch (oa) {
            L = function (a) {
                for (var b, c = []; b = this[a]; a++)c.push(b);
                return c
            }
        }
        c.matches = function (a, b) {
            return c(a, null, null, b)
        }, c.matchesSelector = function (a, b) {
            return c(b, null, null, [a]).length > 0
        }, u = c.getText = function (a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += u(a)
                } else if (3 === e || 4 === e)return a.nodeValue
            } else for (; b = a[d]; d++)c += u(b);
            return c
        }, v = c.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, w = c.contains = G.contains ? function (a, b) {
            var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
            return a === d || !!(d && 1 === d.nodeType && c.contains && c.contains(d))
        } : G.compareDocumentPosition ? function (a, b) {
            return b && !!(16 & a.compareDocumentPosition(b))
        } : function (a, b) {
            for (; b = b.parentNode;)if (b === a)return !0;
            return !1
        }, c.attr = function (a, b) {
            var c, d = v(a);
            return d || (b = b.toLowerCase()), (c = t.attrHandle[b]) ? c(a) : d || la ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? "boolean" == typeof a[b] ? a[b] ? b : null : c.specified ? c.value : null : null)
        }, t = c.selectors = {
            cacheLength: 50,
            createPseudo: N,
            match: ha,
            attrHandle: ka ? {} : {
                href: function (a) {
                    return a.getAttribute("href", 2)
                }, type: function (a) {
                    return a.getAttribute("type")
                }
            },
            find: {
                ID: s ? function (a, b, c) {
                    if (typeof b.getElementById !== C && !c) {
                        var d = b.getElementById(a);
                        return d && d.parentNode ? [d] : []
                    }
                } : function (a, c, d) {
                    if (typeof c.getElementById !== C && !d) {
                        var e = c.getElementById(a);
                        return e ? e.id === a || typeof e.getAttributeNode !== C && e.getAttributeNode("id").value === a ? [e] : b : []
                    }
                }, TAG: ja ? function (a, b) {
                    return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
                } : function (a, b) {
                    var c = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (var d, e = [], f = 0; d = c[f]; f++)1 === d.nodeType && e.push(d);
                        return e
                    }
                    return c
                }, NAME: na && function (a, b) {
                    return typeof b.getElementsByName !== C ? b.getElementsByName(name) : void 0
                }, CLASS: ma && function (a, b, c) {
                    return typeof b.getElementsByClassName === C || c ? void 0 : b.getElementsByClassName(a)
                }
            },
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ga, ""), a[3] = (a[4] || a[5] || "").replace(ga, ""), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1] ? (a[2] || c.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * ("even" === a[2] || "odd" === a[2])), a[4] = +(a[6] + a[7] || "odd" === a[2])) : a[2] && c.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c;
                    return ha.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[3] : (b = a[4]) && (ba.test(b) && (c = h(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b), a.slice(0, 3))
                }
            },
            filter: {
                ID: s ? function (a) {
                    return a = a.replace(ga, ""), function (b) {
                        return b.getAttribute("id") === a
                    }
                } : function (a) {
                    return a = a.replace(ga, ""), function (b) {
                        var c = typeof b.getAttributeNode !== C && b.getAttributeNode("id");
                        return c && c.value === a
                    }
                }, TAG: function (a) {
                    return "*" === a ? function () {
                        return !0
                    } : (a = a.replace(ga, "").toLowerCase(), function (b) {
                        return b.nodeName && b.nodeName.toLowerCase() === a
                    })
                }, CLASS: function (a) {
                    var b = P[D][a + " "];
                    return b || (b = new RegExp("(^|" + S + ")" + a + "(" + S + "|$)")) && P(a, function (a) {
                            return b.test(a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                        })
                }, ATTR: function (a, b, d) {
                    return function (e) {
                        var f = c.attr(e, a);
                        return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.substr(f.length - d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.substr(0, d.length + 1) === d + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d) {
                    return "nth" === a ? function (a) {
                        var b, e, f = a.parentNode;
                        if (1 === c && 0 === d)return !0;
                        if (f)for (e = 0, b = f.firstChild; b && (1 !== b.nodeType || (e++, a !== b)); b = b.nextSibling);
                        return e -= d, e === c || e % c === 0 && e / c >= 0
                    } : function (b) {
                        var c = b;
                        switch (a) {
                            case"only":
                            case"first":
                                for (; c = c.previousSibling;)if (1 === c.nodeType)return !1;
                                if ("first" === a)return !0;
                                c = b;
                            case"last":
                                for (; c = c.nextSibling;)if (1 === c.nodeType)return !1;
                                return !0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var d, e = t.pseudos[a] || t.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return e[D] ? e(b) : e.length > 1 ? (d = [a, a, "", b], t.setFilters.hasOwnProperty(a.toLowerCase()) ? N(function (a, c) {
                        for (var d, f = e(a, b), g = f.length; g--;)d = M.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, d)
                    }) : e
                }
            },
            pseudos: {
                not: N(function (a) {
                    var b = [], c = [], d = x(a.replace(Z, "$1"));
                    return d[D] ? N(function (a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: N(function (a) {
                    return function (b) {
                        return c(a, b).length > 0
                    }
                }),
                contains: N(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || u(b)).indexOf(a) > -1
                    }
                }),
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                parent: function (a) {
                    return !t.pseudos.empty(a)
                },
                empty: function (a) {
                    var b;
                    for (a = a.firstChild; a;) {
                        if (a.nodeName > "@" || 3 === (b = a.nodeType) || 4 === b)return !1;
                        a = a.nextSibling
                    }
                    return !0
                },
                header: function (a) {
                    return ea.test(a.nodeName)
                },
                text: function (a) {
                    var b, c;
                    return "input" === a.nodeName.toLowerCase() && "text" === (b = a.type) && (null == (c = a.getAttribute("type")) || c.toLowerCase() === b)
                },
                radio: d("radio"),
                checkbox: d("checkbox"),
                file: d("file"),
                password: d("password"),
                image: d("image"),
                submit: e("submit"),
                reset: e("reset"),
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                input: function (a) {
                    return fa.test(a.nodeName)
                },
                focus: function (a) {
                    var b = a.ownerDocument;
                    return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                active: function (a) {
                    return a === a.ownerDocument.activeElement
                },
                first: f(function () {
                    return [0]
                }),
                last: f(function (a, b) {
                    return [b - 1]
                }),
                eq: f(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: f(function (a, b) {
                    for (var c = 0; b > c; c += 2)a.push(c);
                    return a
                }),
                odd: f(function (a, b) {
                    for (var c = 1; b > c; c += 2)a.push(c);
                    return a
                }),
                lt: f(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }),
                gt: f(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, y = G.compareDocumentPosition ? function (a, b) {
            return a === b ? (z = !0, 0) : (a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) : a.compareDocumentPosition) ? -1 : 1
        } : function (a, b) {
            if (a === b)return z = !0, 0;
            if (a.sourceIndex && b.sourceIndex)return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], h = a.parentNode, i = b.parentNode, j = h;
            if (h === i)return g(a, b);
            if (!h)return -1;
            if (!i)return 1;
            for (; j;)e.unshift(j), j = j.parentNode;
            for (j = i; j;)f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; c > k && d > k; k++)if (e[k] !== f[k])return g(e[k], f[k]);
            return k === c ? g(a, f[k], -1) : g(e[k], b, 1)
        }, [0, 0].sort(y), B = !z, c.uniqueSort = function (a) {
            var b, c = [], d = 1, e = 0;
            if (z = B, a.sort(y), z) {
                for (; b = a[d]; d++)b === a[d - 1] && (e = c.push(d));
                for (; e--;)a.splice(c[e], 1)
            }
            return a
        }, c.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, x = c.compile = function (a, b) {
            var c, d = [], e = [], f = R[D][a + " "];
            if (!f) {
                for (b || (b = h(a)), c = b.length; c--;)f = m(b[c]), f[D] ? d.push(f) : e.push(f);
                f = R(a, n(e, d))
            }
            return f
        }, F.querySelectorAll && function () {
            var a, b = p, d = /'|\\/g, e = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, f = [":focus"], g = [":active"], i = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector;
            ia(function (a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || f.push("\\[" + S + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || f.push(":checked")
            }), ia(function (a) {
                a.innerHTML = "<p routerTest=''></p>", a.querySelectorAll("[routerTest^='']").length && f.push("[*^$]=" + S + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || f.push(":enabled", ":disabled")
            }), f = new RegExp(f.join("|")), p = function (a, c, e, g, i) {
                if (!g && !i && !f.test(a)) {
                    var j, k, l = !0, m = D, n = c, o = 9 === c.nodeType && a;
                    if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                        for (j = h(a), (l = c.getAttribute("id")) ? m = l.replace(d, "\\$&") : c.setAttribute("id", m), m = "[id='" + m + "'] ", k = j.length; k--;)j[k] = m + j[k].join("");
                        n = da.test(a) && c.parentNode || c, o = j.join(",")
                    }
                    if (o)try {
                        return K.apply(e, L.call(n.querySelectorAll(o), 0)), e
                    } catch (p) {
                    } finally {
                        l || c.removeAttribute("id")
                    }
                }
                return b(a, c, e, g, i)
            }, i && (ia(function (b) {
                a = i.call(b, "div");
                try {
                    i.call(b, "[routerTest!='']:sizzle"), g.push("!=", X)
                } catch (c) {
                }
            }), g = new RegExp(g.join("|")), c.matchesSelector = function (b, d) {
                if (d = d.replace(e, "='$1']"), !v(b) && !g.test(d) && !f.test(d))try {
                    var h = i.call(b, d);
                    if (h || a || b.document && 11 !== b.document.nodeType)return h
                } catch (j) {
                }
                return c(d, null, null, [b]).length > 0
            })
        }(), t.pseudos.nth = t.pseudos.eq, t.filters = q.prototype = t.pseudos, t.setFilters = new q, c.attr = $.attr, $.find = c, $.expr = c.selectors, $.expr[":"] = $.expr.pseudos, $.unique = c.uniqueSort, $.text = c.getText, $.isXMLDoc = c.isXML, $.contains = c.contains
    }(a);
    var Ia = /Until$/, Ja = /^(?:parents|prev(?:Until|All))/, Ka = /^.[^:#\[\.,]*$/, La = $.expr.match.needsContext, Ma = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    $.fn.extend({
        find: function (a) {
            var b, c, d, e, f, g, h = this;
            if ("string" != typeof a)return $(a).filter(function () {
                for (b = 0, c = h.length; c > b; b++)if ($.contains(h[b], this))return !0
            });
            for (g = this.pushStack("", "find", a), b = 0, c = this.length; c > b; b++)if (d = g.length, $.find(a, this[b], g), b > 0)for (e = d; e < g.length; e++)for (f = 0; d > f; f++)if (g[f] === g[e]) {
                g.splice(e--, 1);
                break
            }
            return g
        }, has: function (a) {
            var b, c = $(a, this), d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)if ($.contains(this, c[b]))return !0
            })
        }, not: function (a) {
            return this.pushStack(j(this, a, !1), "not", a)
        }, filter: function (a) {
            return this.pushStack(j(this, a, !0), "filter", a)
        }, is: function (a) {
            return !!a && ("string" == typeof a ? La.test(a) ? $(a, this.context).index(this[0]) >= 0 : $.filter(a, this).length > 0 : this.filter(a).length > 0)
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = La.test(a) || "string" != typeof a ? $(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
                if (g ? g.index(c) > -1 : $.find.matchesSelector(c, a)) {
                    f.push(c);
                    break
                }
                c = c.parentNode
            }
            return f = f.length > 1 ? $.unique(f) : f, this.pushStack(f, "closest", a)
        }, index: function (a) {
            return a ? "string" == typeof a ? $.inArray(this[0], $(a)) : $.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        }, add: function (a, b) {
            var c = "string" == typeof a ? $(a, b) : $.makeArray(a && a.nodeType ? [a] : a), d = $.merge(this.get(), c);
            return this.pushStack(h(c[0]) || h(d[0]) ? d : $.unique(d))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), $.fn.andSelf = $.fn.addBack, $.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return $.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return $.dir(a, "parentNode", c)
        }, next: function (a) {
            return i(a, "nextSibling")
        }, prev: function (a) {
            return i(a, "previousSibling")
        }, nextAll: function (a) {
            return $.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return $.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return $.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return $.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return $.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return $.sibling(a.firstChild)
        }, contents: function (a) {
            return $.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : $.merge([], a.childNodes)
        }
    }, function (a, b) {
        $.fn[a] = function (c, d) {
            var e = $.map(this, b, c);
            return Ia.test(a) || (d = c), d && "string" == typeof d && (e = $.filter(d, e)), e = this.length > 1 && !Ma[a] ? $.unique(e) : e, this.length > 1 && Ja.test(a) && (e = e.reverse()), this.pushStack(e, a, V.call(arguments).join(","))
        }
    }), $.extend({
        filter: function (a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? $.find.matchesSelector(b[0], a) ? [b[0]] : [] : $.find.matches(a, b)
        }, dir: function (a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !$(f).is(d));)1 === f.nodeType && e.push(f),
                f = f[c];
            return e
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Na = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Oa = / jQuery\d+="(?:null|\d+)"/g, Pa = /^\s+/, Qa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ra = /<([\w:]+)/, Sa = /<tbody/i, Ta = /<|&#?\w+;/, Ua = /<(?:script|style|link)/i, Va = /<(?:script|object|embed|option|style)/i, Wa = new RegExp("<(?:" + Na + ")[\\s/>]", "i"), Xa = /^(?:checkbox|radio)$/, Ya = /checked\s*(?:[^=]|=\s*.checked.)/i, Za = /\/(java|ecma)script/i, $a = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, _a = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }, ab = k(P), bb = ab.appendChild(P.createElement("div"));
    _a.optgroup = _a.option, _a.tbody = _a.tfoot = _a.colgroup = _a.caption = _a.thead, _a.th = _a.td, $.support.htmlSerialize || (_a._default = [1, "X<div>", "</div>"]), $.fn.extend({
        text: function (a) {
            return $.access(this, function (a) {
                return a === b ? $.text(this) : this.empty().append((this[0] && this[0].ownerDocument || P).createTextNode(a))
            }, null, a, arguments.length)
        }, wrapAll: function (a) {
            if ($.isFunction(a))return this.each(function (b) {
                $(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = $(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return this.each($.isFunction(a) ? function (b) {
                $(this).wrapInner(a.call(this, b))
            } : function () {
                var b = $(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = $.isFunction(a);
            return this.each(function (c) {
                $(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                $.nodeName(this, "body") || $(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (a) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(a, this.firstChild)
            })
        }, before: function () {
            if (!h(this[0]))return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = $.clean(arguments);
                return this.pushStack($.merge(a, this), "before", this.selector)
            }
        }, after: function () {
            if (!h(this[0]))return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = $.clean(arguments);
                return this.pushStack($.merge(this, a), "after", this.selector)
            }
        }, remove: function (a, b) {
            for (var c, d = 0; null != (c = this[d]); d++)(!a || $.filter(a, [c]).length) && (!b && 1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")), $.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)for (1 === a.nodeType && $.cleanData(a.getElementsByTagName("*")); a.firstChild;)a.removeChild(a.firstChild);
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return $.clone(this, a, b)
            })
        }, html: function (a) {
            return $.access(this, function (a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b)return 1 === c.nodeType ? c.innerHTML.replace(Oa, "") : b;
                if (!("string" != typeof a || Ua.test(a) || !$.support.htmlSerialize && Wa.test(a) || !$.support.leadingWhitespace && Pa.test(a) || _a[(Ra.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Qa, "<$1></$2>");
                    try {
                        for (; e > d; d++)c = this[d] || {}, 1 === c.nodeType && ($.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (f) {
                    }
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function (a) {
            return h(this[0]) ? this.length ? this.pushStack($($.isFunction(a) ? a() : a), "replaceWith", a) : this : $.isFunction(a) ? this.each(function (b) {
                var c = $(this), d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = $(a).detach()), this.each(function () {
                var b = this.nextSibling, c = this.parentNode;
                $(this).remove(), b ? $(b).before(a) : $(c).append(a)
            }))
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, c, d) {
            a = [].concat.apply([], a);
            var e, f, g, h, i = 0, j = a[0], k = [], m = this.length;
            if (!$.support.checkClone && m > 1 && "string" == typeof j && Ya.test(j))return this.each(function () {
                $(this).domManip(a, c, d)
            });
            if ($.isFunction(j))return this.each(function (e) {
                var f = $(this);
                a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
            });
            if (this[0]) {
                if (e = $.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, 1 === g.childNodes.length && (g = f), f)for (c = c && $.nodeName(f, "tr"), h = e.cacheable || m - 1; m > i; i++)d.call(c && $.nodeName(this[i], "table") ? l(this[i], "tbody") : this[i], i === h ? g : $.clone(g, !0, !0));
                g = f = null, k.length && $.each(k, function (a, b) {
                    b.src ? $.ajax ? $.ajax({
                        url: b.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : $.error("no ajax") : $.globalEval((b.text || b.textContent || b.innerHTML || "").replace($a, "")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), $.buildFragment = function (a, c, d) {
        var e, f, g, h = a[0];
        return c = c || P, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, 1 === a.length && "string" == typeof h && h.length < 512 && c === P && "<" === h.charAt(0) && !Va.test(h) && ($.support.checkClone || !Ya.test(h)) && ($.support.html5Clone || !Wa.test(h)) && (f = !0, e = $.fragments[h], g = e !== b), e || (e = c.createDocumentFragment(), $.clean(a, c, e, d), f && ($.fragments[h] = g && e)), {
            fragment: e,
            cacheable: f
        }
    }, $.fragments = {}, $.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        $.fn[a] = function (c) {
            var d, e = 0, f = [], g = $(c), h = g.length, i = 1 === this.length && this[0].parentNode;
            if ((null == i || i && 11 === i.nodeType && 1 === i.childNodes.length) && 1 === h)return g[b](this[0]), this;
            for (; h > e; e++)d = (e > 0 ? this.clone(!0) : this).get(), $(g[e])[b](d), f = f.concat(d);
            return this.pushStack(f, a, g.selector)
        }
    }), $.extend({
        clone: function (a, b, c) {
            var d, e, f, g;
            if ($.support.html5Clone || $.isXMLDoc(a) || !Wa.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bb.innerHTML = a.outerHTML, bb.removeChild(g = bb.firstChild)), !($.support.noCloneEvent && $.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || $.isXMLDoc(a)))for (n(a, g), d = o(a), e = o(g), f = 0; d[f]; ++f)e[f] && n(d[f], e[f]);
            if (b && (m(a, g), c))for (d = o(a), e = o(g), f = 0; d[f]; ++f)m(d[f], e[f]);
            return d = e = null, g
        }, clean: function (a, b, c, d) {
            var e, f, g, h, i, j, l, m, n, o, q, r = b === P && ab, s = [];
            for (b && "undefined" != typeof b.createDocumentFragment || (b = P), e = 0; null != (g = a[e]); e++)if ("number" == typeof g && (g += ""), g) {
                if ("string" == typeof g)if (Ta.test(g)) {
                    for (r = r || k(b), l = b.createElement("div"), r.appendChild(l), g = g.replace(Qa, "<$1></$2>"), h = (Ra.exec(g) || ["", ""])[1].toLowerCase(), i = _a[h] || _a._default, j = i[0], l.innerHTML = i[1] + g + i[2]; j--;)l = l.lastChild;
                    if (!$.support.tbody)for (m = Sa.test(g), n = "table" !== h || m ? "<table>" !== i[1] || m ? [] : l.childNodes : l.firstChild && l.firstChild.childNodes, f = n.length - 1; f >= 0; --f)$.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f]);
                    !$.support.leadingWhitespace && Pa.test(g) && l.insertBefore(b.createTextNode(Pa.exec(g)[0]), l.firstChild), g = l.childNodes, l.parentNode.removeChild(l)
                } else g = b.createTextNode(g);
                g.nodeType ? s.push(g) : $.merge(s, g)
            }
            if (l && (g = l = r = null), !$.support.appendChecked)for (e = 0; null != (g = s[e]); e++)$.nodeName(g, "input") ? p(g) : "undefined" != typeof g.getElementsByTagName && $.grep(g.getElementsByTagName("input"), p);
            if (c)for (o = function (a) {
                return !a.type || Za.test(a.type) ? d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a) : void 0
            }, e = 0; null != (g = s[e]); e++)$.nodeName(g, "script") && o(g) || (c.appendChild(g), "undefined" != typeof g.getElementsByTagName && (q = $.grep($.merge([], g.getElementsByTagName("script")), o), s.splice.apply(s, [e + 1, 0].concat(q)), e += q.length));
            return s
        }, cleanData: function (a, b) {
            for (var c, d, e, f, g = 0, h = $.expando, i = $.cache, j = $.support.deleteExpando, k = $.event.special; null != (e = a[g]); g++)if ((b || $.acceptData(e)) && (d = e[h], c = d && i[d])) {
                if (c.events)for (f in c.events)k[f] ? $.event.remove(e, f) : $.removeEvent(e, f, c.handle);
                i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, $.deletedIds.push(d))
            }
        }
    }), function () {
        var a, b;
        $.uaMatch = function (a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {browser: b[1] || "", version: b[2] || "0"}
        }, a = $.uaMatch(R.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), $.browser = b, $.sub = function () {
            function a(b, c) {
                return new a.fn.init(b, c)
            }

            $.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (c, d) {
                return d && d instanceof $ && !(d instanceof a) && (d = a(d)), $.fn.init.call(this, c, d, b)
            }, a.fn.init.prototype = a.fn;
            var b = a(P);
            return a
        }
    }();
    var cb, db, eb, fb = /alpha\([^)]*\)/i, gb = /opacity=([^)]*)/, hb = /^(top|right|bottom|left)$/, ib = /^(none|table(?!-c[ea]).+)/, jb = /^margin/, kb = new RegExp("^(" + _ + ")(.*)$", "i"), lb = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"), mb = new RegExp("^([-+])=(" + _ + ")", "i"), nb = {BODY: "block"}, ob = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, pb = {
        letterSpacing: 0,
        fontWeight: 400
    }, qb = ["Top", "Right", "Bottom", "Left"], rb = ["Webkit", "O", "Moz", "ms"], sb = $.fn.toggle;
    $.fn.extend({
        css: function (a, c) {
            return $.access(this, function (a, c, d) {
                return d !== b ? $.style(a, c, d) : $.css(a, c)
            }, a, c, arguments.length > 1)
        }, show: function () {
            return s(this, !0)
        }, hide: function () {
            return s(this)
        }, toggle: function (a, b) {
            var c = "boolean" == typeof a;
            return $.isFunction(a) && $.isFunction(b) ? sb.apply(this, arguments) : this.each(function () {
                (c ? a : r(this)) ? $(this).show() : $(this).hide()
            })
        }
    }), $.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = cb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": $.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = $.camelCase(c), j = a.style;
                if (c = $.cssProps[i] || ($.cssProps[i] = q(j, i)), h = $.cssHooks[c] || $.cssHooks[i], d === b)return h && "get"in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = mb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat($.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" === g && !$.cssNumber[i] && (d += "px"), h && "set"in h && (d = h.set(a, d, e)) === b)))try {
                    j[c] = d
                } catch (k) {
                }
            }
        },
        css: function (a, c, d, e) {
            var f, g, h, i = $.camelCase(c);
            return c = $.cssProps[i] || ($.cssProps[i] = q(a.style, i)), h = $.cssHooks[c] || $.cssHooks[i], h && "get"in h && (f = h.get(a, !0, e)), f === b && (f = cb(a, c)), "normal" === f && c in pb && (f = pb[c]), d || e !== b ? (g = parseFloat(f), d || $.isNumeric(g) ? g || 0 : f) : f
        },
        swap: function (a, b, c) {
            var d, e, f = {};
            for (e in b)f[e] = a.style[e], a.style[e] = b[e];
            d = c.call(a);
            for (e in b)a.style[e] = f[e];
            return d
        }
    }), a.getComputedStyle ? cb = function (b, c) {
        var d, e, f, g, h = a.getComputedStyle(b, null), i = b.style;
        return h && (d = h.getPropertyValue(c) || h[c], "" === d && !$.contains(b.ownerDocument, b) && (d = $.style(b, c)), lb.test(d) && jb.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d
    } : P.documentElement.currentStyle && (cb = function (a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b], f = a.style;
        return null == e && f && f[b] && (e = f[b]), lb.test(e) && !hb.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = "fontSize" === b ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), "" === e ? "auto" : e
    }), $.each(["height", "width"], function (a, b) {
        $.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? 0 === a.offsetWidth && ib.test(cb(a, "display")) ? $.swap(a, ob, function () {
                    return v(a, b, d)
                }) : v(a, b, d) : void 0
            }, set: function (a, c, d) {
                return t(a, c, d ? u(a, b, d, $.support.boxSizing && "border-box" === $.css(a, "boxSizing")) : 0)
            }
        }
    }), $.support.opacity || ($.cssHooks.opacity = {
        get: function (a, b) {
            return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = $.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1, b >= 1 && "" === $.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
        }
    }), $(function () {
        $.support.reliableMarginRight || ($.cssHooks.marginRight = {
            get: function (a, b) {
                return $.swap(a, {display: "inline-block"}, function () {
                    return b ? cb(a, "marginRight") : void 0
                })
            }
        }), !$.support.pixelPosition && $.fn.position && $.each(["top", "left"], function (a, b) {
            $.cssHooks[b] = {
                get: function (a, c) {
                    if (c) {
                        var d = cb(a, b);
                        return lb.test(d) ? $(a).position()[b] + "px" : d
                    }
                }
            }
        })
    }), $.expr && $.expr.filters && ($.expr.filters.hidden = function (a) {
        return 0 === a.offsetWidth && 0 === a.offsetHeight || !$.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || cb(a, "display"))
    }, $.expr.filters.visible = function (a) {
        return !$.expr.filters.hidden(a)
    }), $.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        $.cssHooks[a + b] = {
            expand: function (c) {
                var d, e = "string" == typeof c ? c.split(" ") : [c], f = {};
                for (d = 0; 4 > d; d++)f[a + qb[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }, jb.test(a) || ($.cssHooks[a + b].set = t)
    });
    var tb = /%20/g, ub = /\[\]$/, vb = /\r?\n/g, wb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, xb = /^(?:select|textarea)/i;
    $.fn.extend({
        serialize: function () {
            return $.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? $.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || xb.test(this.nodeName) || wb.test(this.type))
            }).map(function (a, b) {
                var c = $(this).val();
                return null == c ? null : $.isArray(c) ? $.map(c, function (a) {
                    return {name: b.name, value: a.replace(vb, "\r\n")}
                }) : {name: b.name, value: c.replace(vb, "\r\n")}
            }).get()
        }
    }), $.param = function (a, c) {
        var d, e = [], f = function (a, b) {
            b = $.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (c === b && (c = $.ajaxSettings && $.ajaxSettings.traditional), $.isArray(a) || a.jquery && !$.isPlainObject(a))$.each(a, function () {
            f(this.name, this.value)
        }); else for (d in a)x(d, a[d], c, f);
        return e.join("&").replace(tb, "+")
    };
    var yb, zb, Ab = /#.*$/, Bb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cb = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Db = /^(?:GET|HEAD)$/, Eb = /^\/\//, Fb = /\?/, Gb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Hb = /([?&])_=[^&]*/, Ib = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Jb = $.fn.load, Kb = {}, Lb = {}, Mb = ["*/"] + ["*"];
    try {
        zb = Q.href
    } catch (Nb) {
        zb = P.createElement("a"), zb.href = "", zb = zb.href
    }
    yb = Ib.exec(zb.toLowerCase()) || [], $.fn.load = function (a, c, d) {
        if ("string" != typeof a && Jb)return Jb.apply(this, arguments);
        if (!this.length)return this;
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), $.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"), $.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function (a, b) {
                d && h.each(d, g || [a.responseText, b, a])
            }
        }).done(function (a) {
            g = arguments, h.html(e ? $("<div>").append(a.replace(Gb, "")).find(e) : a)
        }), this
    }, $.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        $.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), $.each(["get", "post"], function (a, c) {
        $[c] = function (a, d, e, f) {
            return $.isFunction(d) && (f = f || e, e = d, d = b), $.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }), $.extend({
        getScript: function (a, c) {
            return $.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return $.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            return b ? A(a, $.ajaxSettings) : (b = a, a = $.ajaxSettings), A(a, b), a
        },
        ajaxSettings: {
            url: zb,
            isLocal: Cb.test(yb[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Mb
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": a.String, "text html": !0, "text json": $.parseJSON, "text xml": $.parseXML},
            flatOptions: {context: !0, url: !0}
        },
        ajaxPrefilter: y(Kb),
        ajaxTransport: y(Lb),
        ajax: function (a, c) {
            function d(a, c, d, g) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), h = b, f = g || "", w.readyState = a > 0 ? 4 : 0, d && (t = B(m, w, d)), a >= 200 && 300 > a || 304 === a ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && ($.lastModified[e] = v), v = w.getResponseHeader("Etag"), v && ($.etag[e] = v)), 304 === a ? (x = "notmodified", j = !0) : (j = C(m, t), x = j.state, l = j.data, s = j.error, j = !s)) : (s = x, (!x || a) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger("ajax" + (j ? "Success" : "Error"), [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --$.active || $.event.trigger("ajaxStop")))
            }

            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = $.ajaxSetup({}, c), n = m.context || m, o = n !== m && (n.nodeType || n instanceof $) ? $(n) : $.event, p = $.Deferred(), q = $.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                setRequestHeader: function (a, b) {
                    if (!u) {
                        var c = a.toLowerCase();
                        a = t[c] = t[c] || a, s[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function () {
                    return 2 === u ? f : null
                },
                getResponseHeader: function (a) {
                    var c;
                    if (2 === u) {
                        if (!g)for (g = {}; c = Bb.exec(f);)g[c[1].toLowerCase()] = c[2];
                        c = g[a.toLowerCase()]
                    }
                    return c === b ? null : c
                },
                overrideMimeType: function (a) {
                    return u || (m.mimeType = a), this
                },
                abort: function (a) {
                    return a = a || v, h && h.abort(a), d(0, a), this
                }
            };
            if (p.promise(w), w.success = w.done, w.error = w.fail, w.complete = q.add, w.statusCode = function (a) {
                    if (a) {
                        var b;
                        if (2 > u)for (b in a)r[b] = [r[b], a[b]]; else b = a[w.status], w.always(b)
                    }
                    return this
                }, m.url = ((a || m.url) + "").replace(Ab, "").replace(Eb, yb[1] + "//"), m.dataTypes = $.trim(m.dataType || "*").toLowerCase().split(ba), null == m.crossDomain && (j = Ib.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === yb[1] && j[2] === yb[2] && (j[3] || ("http:" === j[1] ? 80 : 443)) == (yb[3] || ("http:" === yb[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = $.param(m.data, m.traditional)), z(Kb, m, c, w), 2 === u)return w;
            if (k = m.global, m.type = m.type.toUpperCase(), m.hasContent = !Db.test(m.type), k && 0 === $.active++ && $.event.trigger("ajaxStart"), !m.hasContent && (m.data && (m.url += (Fb.test(m.url) ? "&" : "?") + m.data, delete m.data), e = m.url, m.cache === !1)) {
                var x = $.now(), y = m.url.replace(Hb, "$1_=" + x);
                m.url = y + (y === m.url ? (Fb.test(m.url) ? "&" : "?") + "_=" + x : "")
            }
            (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), m.ifModified && (e = e || m.url, $.lastModified[e] && w.setRequestHeader("If-Modified-Since", $.lastModified[e]), $.etag[e] && w.setRequestHeader("If-None-Match", $.etag[e])), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Mb + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers)w.setRequestHeader(l, m.headers[l]);
            if (!m.beforeSend || m.beforeSend.call(n, w, m) !== !1 && 2 !== u) {
                v = "abort";
                for (l in{success: 1, error: 1, complete: 1})w[l](m[l]);
                if (h = z(Lb, m, c, w)) {
                    w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function () {
                        w.abort("timeout")
                    }, m.timeout));
                    try {
                        u = 1, h.send(s, d)
                    } catch (A) {
                        if (!(2 > u))throw A;
                        d(-1, A)
                    }
                } else d(-1, "No Transport");
                return w
            }
            return w.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Ob = [], Pb = /\?/, Qb = /(=)\?(?=&|$)|\?\?/, Rb = $.now();
    $.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Ob.pop() || $.expando + "_" + Rb++;
            return this[a] = !0, a
        }
    }), $.ajaxPrefilter("json jsonp", function (c, d, e) {
        var f, g, h, i = c.data, j = c.url, k = c.jsonp !== !1, l = k && Qb.test(j), m = k && !l && "string" == typeof i && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Qb.test(i);
        return "jsonp" === c.dataTypes[0] || l || m ? (f = c.jsonpCallback = $.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(Qb, "$1" + f) : m ? c.data = i.replace(Qb, "$1" + f) : k && (c.url += (Pb.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
            return h || $.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", a[f] = function () {
            h = arguments
        }, e.always(function () {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Ob.push(f)), h && $.isFunction(g) && g(h[0]), h = g = b
        }), "script") : void 0
    }), $.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (a) {
                return $.globalEval(a), a
            }
        }
    }), $.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), $.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var c, d = P.head || P.getElementsByTagName("head")[0] || P.documentElement;
            return {
                send: function (e, f) {
                    c = P.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function (a, e) {
                        (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
                    }, d.insertBefore(c, d.firstChild)
                }, abort: function () {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var Sb, Tb = a.ActiveXObject ? function () {
        for (var a in Sb)Sb[a](0, 1)
    } : !1, Ub = 0;
    $.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && D() || E()
    } : D, function (a) {
        $.extend($.support, {ajax: !!a, cors: !!a && "withCredentials"in a})
    }($.ajaxSettings.xhr()), $.support.ajax && $.ajaxTransport(function (c) {
        if (!c.crossDomain || $.support.cors) {
            var d;
            return {
                send: function (e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)for (h in c.xhrFields)i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e)i.setRequestHeader(h, e[h])
                    } catch (j) {
                    }
                    i.send(c.hasContent && c.data || null), d = function (a, e) {
                        var h, j, k, l, m;
                        try {
                            if (d && (e || 4 === i.readyState))if (d = b, g && (i.onreadystatechange = $.noop, Tb && delete Sb[g]), e)4 !== i.readyState && i.abort(); else {
                                h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                                try {
                                    l.text = i.responseText
                                } catch (n) {
                                }
                                try {
                                    j = i.statusText
                                } catch (n) {
                                    j = ""
                                }
                                h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                            }
                        } catch (o) {
                            e || f(-1, o)
                        }
                        l && f(h, j, l, k)
                    }, c.async ? 4 === i.readyState ? setTimeout(d, 0) : (g = ++Ub, Tb && (Sb || (Sb = {}, $(a).unload(Tb)), Sb[g] = d), i.onreadystatechange = d) : d()
                }, abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var Vb, Wb, Xb = /^(?:toggle|show|hide)$/, Yb = new RegExp("^(?:([-+])=|)(" + _ + ")([a-z%]*)$", "i"), Zb = /queueHooks$/, $b = [J], _b = {
        "*": [function (a, b) {
            var c, d, e = this.createTween(a, b), f = Yb.exec(b), g = e.cur(), h = +g || 0, i = 1, j = 20;
            if (f) {
                if (c = +f[2], d = f[3] || ($.cssNumber[a] ? "" : "px"), "px" !== d && h) {
                    h = $.css(e.elem, a, !0) || c || 1;
                    do i = i || ".5", h /= i, $.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && 1 !== i && --j)
                }
                e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
            }
            return e
        }]
    };
    $.Animation = $.extend(H, {
        tweener: function (a, b) {
            $.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)c = a[d], _b[c] = _b[c] || [], _b[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? $b.unshift(a) : $b.push(a)
        }
    }), $.Tween = K, K.prototype = {
        constructor: K, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || ($.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = K.propHooks[this.prop];
            return a && a.get ? a.get(this) : K.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = K.propHooks[this.prop];
            return this.pos = b = this.options.duration ? $.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : K.propHooks._default.set(this), this
        }
    }, K.prototype.init.prototype = K.prototype, K.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = $.css(a.elem, a.prop, !1, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                $.fx.step[a.prop] ? $.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[$.cssProps[a.prop]] || $.cssHooks[a.prop]) ? $.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, K.propHooks.scrollTop = K.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, $.each(["toggle", "show", "hide"], function (a, b) {
        var c = $.fn[b];
        $.fn[b] = function (d, e, f) {
            return null == d || "boolean" == typeof d || !a && $.isFunction(d) && $.isFunction(e) ? c.apply(this, arguments) : this.animate(L(b, !0), d, e, f)
        }
    }), $.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(r).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = $.isEmptyObject(a), f = $.speed(b, c, d), g = function () {
                var b = H(this, $.extend({}, a), f);
                e && b.stop(!0)
            };
            return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, c, d) {
            var e = function (a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, c = null != a && a + "queueHooks", f = $.timers, g = $._data(this);
                if (c)g[c] && g[c].stop && e(g[c]); else for (c in g)g[c] && g[c].stop && Zb.test(c) && e(g[c]);
                for (c = f.length; c--;)f[c].elem === this && (null == a || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && $.dequeue(this, a)
            })
        }
    }), $.each({
        slideDown: L("show"),
        slideUp: L("hide"),
        slideToggle: L("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        $.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), $.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? $.extend({}, a) : {
            complete: c || !c && b || $.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !$.isFunction(b) && b
        };
        return d.duration = $.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in $.fx.speeds ? $.fx.speeds[d.duration] : $.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            $.isFunction(d.old) && d.old.call(this), d.queue && $.dequeue(this, d.queue)
        }, d
    }, $.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, $.timers = [], $.fx = K.prototype.init, $.fx.tick = function () {
        var a, c = $.timers, d = 0;
        for (Vb = $.now(); d < c.length; d++)a = c[d], !a() && c[d] === a && c.splice(d--, 1);
        c.length || $.fx.stop(), Vb = b
    }, $.fx.timer = function (a) {
        a() && $.timers.push(a) && !Wb && (Wb = setInterval($.fx.tick, $.fx.interval))
    }, $.fx.interval = 13, $.fx.stop = function () {
        clearInterval(Wb), Wb = null
    }, $.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, $.fx.step = {}, $.expr && $.expr.filters && ($.expr.filters.animated = function (a) {
        return $.grep($.timers, function (b) {
            return a === b.elem
        }).length
    });
    var ac = /^(?:body|html)$/i;
    $.fn.offset = function (a) {
        if (arguments.length)return a === b ? this : this.each(function (b) {
            $.offset.setOffset(this, a, b)
        });
        var c, d, e, f, g, h, i, j = {top: 0, left: 0}, k = this[0], l = k && k.ownerDocument;
        if (l)return (d = l.body) === k ? $.offset.bodyOffset(k) : (c = l.documentElement, $.contains(c, k) ? ("undefined" != typeof k.getBoundingClientRect && (j = k.getBoundingClientRect()), e = M(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
            top: j.top + h - f,
            left: j.left + i - g
        }) : j)
    }, $.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop, c = a.offsetLeft;
            return $.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat($.css(a, "marginTop")) || 0, c += parseFloat($.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        }, setOffset: function (a, b, c) {
            var d = $.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = $(a), h = g.offset(), i = $.css(a, "top"), j = $.css(a, "left"), k = ("absolute" === d || "fixed" === d) && $.inArray("auto", [i, j]) > -1, l = {}, m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), $.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using"in b ? b.using.call(a, l) : g.css(l)
        }
    }, $.fn.extend({
        position: function () {
            if (this[0]) {
                var a = this[0], b = this.offsetParent(), c = this.offset(), d = ac.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
                return c.top -= parseFloat($.css(a, "marginTop")) || 0, c.left -= parseFloat($.css(a, "marginLeft")) || 0, d.top += parseFloat($.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat($.css(b[0], "borderLeftWidth")) || 0, {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || P.body; a && !ac.test(a.nodeName) && "static" === $.css(a, "position");)a = a.offsetParent;
                return a || P.body
            })
        }
    }), $.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, c) {
        var d = /Y/.test(c);
        $.fn[a] = function (e) {
            return $.access(this, function (a, e, f) {
                var g = M(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : void(g ? g.scrollTo(d ? $(g).scrollLeft() : f, d ? f : $(g).scrollTop()) : a[e] = f)
            }, a, e, arguments.length, null)
        }
    }), $.each({Height: "height", Width: "width"}, function (a, c) {
        $.each({padding: "inner" + a, content: c, "": "outer" + a}, function (d, e) {
            $.fn[e] = function (e, f) {
                var g = arguments.length && (d || "boolean" != typeof e), h = d || (e === !0 || f === !0 ? "margin" : "border");
                return $.access(this, function (c, d, e) {
                    var f;
                    return $.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? $.css(c, d, e, h) : $.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), a.jQuery = a.$ = $, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return $
    })
}(window),
    //jQuery插件 form表单变json{}。
    (function($){
        $.fn.serializeJson=function(){
            var serializeObj={};
            var array=this.serializeArray();
            var str=this.serialize();
            $(array).each(function(){
                if(serializeObj[this.name]){
                    if($.isArray(serializeObj[this.name])){
                        serializeObj[this.name].push(this.value);
                    }else{
                        serializeObj[this.name]=[serializeObj[this.name],this.value];
                    }
                }else{
                    serializeObj[this.name]=this.value;
                }
            });
            return serializeObj;
        };
    })(jQuery);
    //seajs
    !function (a, b) {
        function c(a) {
            return function (b) {
                return {}.toString.call(b) == "[object " + a + "]"
            }
        }

        function d() {
            return A++
        }

        function e(a) {
            return a.match(D)[0]
        }

        function f(a) {
            for (a = a.replace(E, "/"); a.match(F);)a = a.replace(F, "/");
            return a = a.replace(G, "$1/")
        }

        function g(a) {
            var b = a.length - 1, c = a.charAt(b);
            return "#" === c ? a.substring(0, b) : ".js" === a.substring(b - 2) || a.indexOf("?") > 0 || ".css" === a.substring(b - 3) || "/" === c ? a : a + ".js"
        }

        function h(a) {
            var b = v.alias;
            return b && x(b[a]) ? b[a] : a
        }

        function i(a) {
            var b, c = v.paths;
            return c && (b = a.match(H)) && x(c[b[1]]) && (a = c[b[1]] + b[2]), a
        }

        function j(a) {
            var b = v.vars;
            return b && a.indexOf("{") > -1 && (a = a.replace(I, function (a, c) {
                return x(b[c]) ? b[c] : a
            })), a
        }

        function k(a) {
            var b = v.map, c = a;
            if (b)for (var d = 0, e = b.length; e > d; d++) {
                var f = b[d];
                if (c = z(f) ? f(a) || a : a.replace(f[0], f[1]), c !== a)break
            }
            return c
        }

        function l(a, b) {
            var c, d = a.charAt(0);
            if (J.test(a))c = a; else if ("." === d)c = f((b ? e(b) : v.cwd) + a); else if ("/" === d) {
                var g = v.cwd.match(K);
                c = g ? g[0] + a.substring(1) : a
            } else c = v.base + a;
            return 0 === c.indexOf("//") && (c = location.protocol + c), c
        }

        function m(a, b) {
            if (!a)return "";
            a = h(a), a = i(a), a = j(a), a = g(a);
            var c = l(a, b);
            return c = k(c)
        }

        function n(a) {
            return a.hasAttribute ? a.src : a.getAttribute("src", 4)
        }

        function o(a, b, c) {
            var d = U.test(a), e = L.createElement(d ? "link" : "script");
            if (c) {
                var f = z(c) ? c(a) : c;
                f && (e.charset = f);

            }
            p(e, b, d, a), d ? (e.rel = "stylesheet", e.href = a) : (e.async = !0, e.src = a), Q = e, T ? S.insertBefore(e, T) : S.appendChild(e), Q = null
        }

        function p(a, c, d, e) {
            function f() {
                a.onload = a.onerror = a.onreadystatechange = null, d || v.debug || S.removeChild(a), a = null, c()
            }

            var g = "onload"in a;
            return !d || !V && g ? (g ? (a.onload = f, a.onerror = function () {
                C("error", {uri: e, node: a}), f()
            }) : a.onreadystatechange = function () {
                /loaded|complete/.test(a.readyState) && f()
            }, b) : (setTimeout(function () {
                q(a, c)
            }, 1), b)
        }

        function q(a, b) {
            var c, d = a.sheet;
            if (V)d && (c = !0); else if (d)try {
                d.cssRules && (c = !0)
            } catch (e) {
                "NS_ERROR_DOM_SECURITY_ERR" === e.name && (c = !0)
            }
            setTimeout(function () {
                c ? b() : q(a, b)
            }, 20)
        }

        function r() {
            if (Q)return Q;
            if (R && "interactive" === R.readyState)return R;
            for (var a = S.getElementsByTagName("script"), b = a.length - 1; b >= 0; b--) {
                var c = a[b];
                if ("interactive" === c.readyState)return R = c
            }
        }

        function s(a) {
            var b = [];
            return a.replace(Y, "").replace(X, function (a, c, d) {
                d && b.push(d)
            }), b
        }

        function t(a, b) {
            this.uri = a, this.dependencies = b || [], this.exports = null, this.status = 0, this._waitings = {}, this._remain = 0
        }

        if (!a.seajs) {
            var u = a.seajs = {version: "2.2.0"}, v = u.data = {}, w = c("Object"), x = c("String"), y = Array.isArray || c("Array"), z = c("Function"), A = 0, B = v.events = {};
            u.on = function (a, b) {
                var c = B[a] || (B[a] = []);
                return c.push(b), u
            }, u.off = function (a, b) {
                if (!a && !b)return B = v.events = {}, u;
                var c = B[a];
                if (c)if (b)for (var d = c.length - 1; d >= 0; d--)c[d] === b && c.splice(d, 1); else delete B[a];
                return u
            };
            var C = u.emit = function (a, b) {
                var c, d = B[a];
                if (d)for (d = d.slice(); c = d.shift();)c(b);
                return u
            }, D = /[^?#]*\//, E = /\/\.\//g, F = /\/[^/]+\/\.\.\//, G = /([^:/])\/\//g, H = /^([^/:]+)(\/.+)$/, I = /{([^{]+)}/g, J = /^\/\/.|:\//, K = /^.*?\/\/.*?\//, L = document, M = e(L.URL), N = L.scripts, O = L.getElementById("seajsnode") || N[N.length - 1], P = e(n(O) || M);
            u.resolve = m;
            var Q, R, S = L.head || L.getElementsByTagName("head")[0] || L.documentElement, T = S.getElementsByTagName("base")[0], U = /\.css(?:\?|$)/i, V = +navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/, "$1") < 536;
            u.request = o;
            var W, X = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g, Y = /\\\\/g, Z = u.cache = {}, $ = {}, _ = {}, aa = {}, ba = t.STATUS = {
                FETCHING: 1,
                SAVED: 2,
                LOADING: 3,
                LOADED: 4,
                EXECUTING: 5,
                EXECUTED: 6
            };
            t.prototype.resolve = function () {
                for (var a = this, b = a.dependencies, c = [], d = 0, e = b.length; e > d; d++)c[d] = t.resolve(b[d], a.uri);
                return c
            }, t.prototype.load = function () {
                var a = this;
                if (!(a.status >= ba.LOADING)) {
                    a.status = ba.LOADING;
                    var c = a.resolve();
                    C("load", c);
                    for (var d, e = a._remain = c.length, f = 0; e > f; f++)d = t.get(c[f]), d.status < ba.LOADED ? d._waitings[a.uri] = (d._waitings[a.uri] || 0) + 1 : a._remain--;
                    if (0 === a._remain)return a.onload(), b;
                    var g = {};
                    for (f = 0; e > f; f++)d = Z[c[f]], d.status < ba.FETCHING ? d.fetch(g) : d.status === ba.SAVED && d.load();
                    for (var h in g)g.hasOwnProperty(h) && g[h]()
                }
            }, t.prototype.onload = function () {
                var a = this;
                a.status = ba.LOADED, a.callback && a.callback();
                var b, c, d = a._waitings;
                for (b in d)d.hasOwnProperty(b) && (c = Z[b], c._remain -= d[b], 0 === c._remain && c.onload());
                delete a._waitings, delete a._remain
            }, t.prototype.fetch = function (a) {
                function c() {
                    u.request(g.requestUri, g.onRequest, g.charset)
                }

                function d() {
                    delete $[h], _[h] = !0, W && (t.save(f, W), W = null);
                    var a, b = aa[h];
                    for (delete aa[h]; a = b.shift();)a.load()
                }

                var e = this, f = e.uri;
                e.status = ba.FETCHING;
                var g = {uri: f};
                C("fetch", g);
                var h = g.requestUri || f;
                return !h || _[h] ? (e.load(), b) : $[h] ? (aa[h].push(e), b) : ($[h] = !0, aa[h] = [e], C("request", g = {
                    uri: f,
                    requestUri: h,
                    onRequest: d,
                    charset: v.charset
                }), g.requested || (a ? a[g.requestUri] = c : c()), b)
            }, t.prototype.exec = function () {
                function a(b) {
                    return t.get(a.resolve(b)).exec()
                }

                var c = this;
                if (c.status >= ba.EXECUTING)return c.exports;
                c.status = ba.EXECUTING;
                var e = c.uri;
                a.resolve = function (a) {
                    return t.resolve(a, e)
                }, a.async = function (b, c) {
                    return t.use(b, c, e + "_async_" + d()), a
                };
                var f = c.factory, g = z(f) ? f(a, c.exports = {}, c) : f;
                return g === b && (g = c.exports), delete c.factory, c.exports = g, c.status = ba.EXECUTED, C("exec", c), g
            }, t.resolve = function (a, b) {
                var c = {id: a, refUri: b};
                return C("resolve", c), c.uri || u.resolve(c.id, b)
            }, t.define = function (a, c, d) {
                var e = arguments.length;
                1 === e ? (d = a, a = b) : 2 === e && (d = c, y(a) ? (c = a, a = b) : c = b), !y(c) && z(d) && (c = s("" + d));
                var f = {id: a, uri: t.resolve(a), deps: c, factory: d};
                if (!f.uri && L.attachEvent) {
                    var g = r();
                    g && (f.uri = g.src)
                }
                C("define", f), f.uri ? t.save(f.uri, f) : W = f
            }, t.save = function (a, b) {
                var c = t.get(a);
                c.status < ba.SAVED && (c.id = b.id || a, c.dependencies = b.deps || [], c.factory = b.factory, c.status = ba.SAVED)
            }, t.get = function (a, b) {
                return Z[a] || (Z[a] = new t(a, b))
            }, t.use = function (b, c, d) {
                var e = t.get(d, y(b) ? b : [b]);
                e.callback = function () {
                    for (var b = [], d = e.resolve(), f = 0, g = d.length; g > f; f++)b[f] = Z[d[f]].exec();
                    c && c.apply(a, b), delete e.callback
                }, e.load()
            }, t.preload = function (a) {
                var b = v.preload, c = b.length;
                c ? t.use(b, function () {
                    b.splice(0, c), t.preload(a)
                }, v.cwd + "_preload_" + d()) : a()
            }, u.use = function (a, b) {
                return t.preload(function () {
                    t.use(a, b, v.cwd + "_use_" + d())
                }), u
            }, t.define.cmd = {}, a.define = t.define, u.Module = t, v.fetchedList = _, v.cid = d, u.require = function (a) {
                var b = t.get(t.resolve(a));
                return b.status < ba.EXECUTING && (b.onload(), b.exec()), b.exports
            };
            var ca = /^(.+?\/)(\?\?)?(seajs\/)+/;
            v.base = (P.match(ca) || ["", P])[1], v.dir = P, v.cwd = M, v.charset = "utf-8", v.preload = function () {
                var a = [], b = location.search.replace(/(seajs-\w+)(&|$)/g, "$1=1$2");
                return b += " " + L.cookie, b.replace(/(seajs-\w+)=1/g, function (b, c) {
                    a.push(c)
                }), a
            }(), u.config = function (a) {
                for (var b in a) {
                    var c = a[b], d = v[b];
                    if (d && w(d))for (var e in c)d[e] = c[e]; else y(d) ? c = d.concat(c) : "base" === b && ("/" !== c.slice(-1) && (c += "/"), c = l(c)), v[b] = c
                }
                return C("config", a), u
            }
        }
    }(this),
    !function () {
        var a, b = /\W/g, c = document, d = document.getElementsByTagName("head")[0] || document.documentElement;
        seajs.importStyle = function (e, f) {
            if (!f || (f = f.replace(b, "-"), !c.getElementById(f))) {
                var g;
                if (!a || f ? (g = c.createElement("style"), f && (g.id = f), d.appendChild(g)) : g = a, g.styleSheet) {
                    if (c.getElementsByTagName("style").length > 31)throw new Error("Exceed the maximal count of style tags in IE");
                    g.styleSheet.cssText += e
                } else g.appendChild(c.createTextNode(e));
                f || (a = g)
            }
        }, define("seajs/seajs-style/1.0.2/seajs-style", [], {})
    }();

//seajs-text
!function () {
    function a(a) {
        h[a.name] = a
    }

    function b(a) {
        return a && h.hasOwnProperty(a)
    }

    function c(a) {
        for (var c in h)if (b(c)) {
            var d = "," + h[c].ext.join(",") + ",";
            if (d.indexOf("," + a + ",") > -1)return c
        }
    }

    function d(a, b) {
        var c = g.XMLHttpRequest ? new g.XMLHttpRequest : new g.ActiveXObject("Microsoft.XMLHTTP");
        return c.open("GET", a, !0), c.onreadystatechange = function () {
            if (4 === c.readyState) {
                if (c.status > 399 && c.status < 600)throw new Error("Could not load: " + a + ", status = " + c.status);
                b(c.responseText)
            }
        }, c.send(null)
    }

    function e(a) {
        a && /\S/.test(a) && (g.execScript || function (a) {
            (g.eval || eval).call(g, a)
        })(a)
    }

    function f(a) {
        return a.replace(/(["\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
    }

    var g = window, h = {}, i = {};
    a({
        name: "text", ext: [".tpl", ".html"], exec: function (a, b) {
            e('define("' + a + '#", [], "' + f(b) + '")')
        }
    }), a({
        name: "json", ext: [".json"], exec: function (a, b) {
            e('define("' + a + '#", [], ' + b + ")")
        }
    }), a({
        name: "handlebars", ext: [".handlebars"], exec: function (a, b) {
            var c = ['define("' + a + '#", ["handlebars"], function(require, exports, module) {', '  var source = "' + f(b) + '"', '  var Handlebars = require("handlebars")["default"]', "  module.exports = function(data, options) {", "    options || (options = {})", "    options.helpers || (options.helpers = {})", "    for (var key in Handlebars.helpers) {", "      options.helpers[key] = options.helpers[key] || Handlebars.helpers[key]", "    }", "    return Handlebars.compile(source)(data, options)", "  }", "})"].join("\n");
            e(c)
        }
    }), seajs.on("resolve", function (a) {
        var d = a.id;
        if (!d)return "";
        var e, f;
        (f = d.match(/^(\w+)!(.+)$/)) && b(f[1]) ? (e = f[1], d = f[2]) : (f = d.match(/[^?]+(\.\w+)(?:\?|#|$)/)) && (e = c(f[1])), e && -1 === d.indexOf("#") && (d += "#");
        var g = seajs.resolve(d, a.refUri);
        e && (i[g] = e), a.uri = g
    }), seajs.on("request", function (a) {
        var b = i[a.uri];
        b && (d(a.requestUri, function (c) {
            h[b].exec(a.uri, c), a.onRequest()
        }), a.requested = !0)
    }), define("seajs/seajs-text/1.1.1/seajs-text", [], {})
}();

/*! cookiejs v1.0.8 | MIT (c) 2016 kenny wang | https://github.com/jaywcjlove/cookie.js */
//cookie
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.cookie=e()}}(function(){function e(e){return!!e&&"[object Object]"===Object.prototype.toString.call(e)}function t(e){return e instanceof Array}function n(e){return Array.prototype.slice.call(e)}function r(){return this instanceof r?void 0:new r}var o=Object.names||function(e){var t=[],n="";for(n in e)e.hasOwnProperty(n)&&t.push(n);return t};r.prototype={get:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return unescape(o.substring(t.length,o.length))}return!1},set:function(t,n,r){if(e(t))for(var o in t)t.hasOwnProperty(o)&&this.set(o,t[o],n);else{var i=e(r)?r:{expires:r},u=void 0!==i.expires?i.expires:"",a=typeof u,f=void 0!==i.path?";path="+i.path:";path=/",c=i.domain?";domain="+i.domain:"",s=i.secure?";secure":"";"string"===a&&""!==u?u=new Date(u):"number"===a&&(u=new Date(+new Date+864e5*u)),""!==u&&"toGMTString"in u&&(u=";expires="+u.toGMTString()),document.cookie=t+"="+escape(n)+u+f+c+s}},remove:function(e){e=t(e)?e:n(arguments);for(var r=0,o=e.length;o>r;r++)this.set(e[r],"",-1);return e},clear:function(e){return this.remove(o(this.all()))},all:function(){if(""===document.cookie)return{};for(var e=document.cookie.split("; "),t={},n=0,r=e.length;r>n;n++){var o=e[n].split("=");t[unescape(o[0])]=unescape(o[1])}return t}};var i=function(t,n,o){var i=arguments;return 0===i.length?r().clear():2!==i.length||n?"string"!=typeof t||n?e(t)||i.length>1&&t&&n?r().set(t,n,o):null===n?r().remove(t):r().all():r().get(t):r().clear(t)};for(var u in r.prototype)i[u]=r.prototype[u];return i});

//store.js
/* Copyright (c) 2010-2016 Marcus Westin */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.store = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    (function (global){
        "use strict";module.exports=function(){function e(){try{return o in n&&n[o]}catch(e){return!1}}var t,r={},n="undefined"!=typeof window?window:global,i=n.document,o="localStorage",a="script";if(r.disabled=!1,r.version="1.3.20",r.set=function(e,t){},r.get=function(e,t){},r.has=function(e){return void 0!==r.get(e)},r.remove=function(e){},r.clear=function(){},r.transact=function(e,t,n){null==n&&(n=t,t=null),null==t&&(t={});var i=r.get(e,t);n(i),r.set(e,i)},r.getAll=function(){},r.forEach=function(){},r.serialize=function(e){return JSON.stringify(e)},r.deserialize=function(e){if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}},e())t=n[o],r.set=function(e,n){return void 0===n?r.remove(e):(t.setItem(e,r.serialize(n)),n)},r.get=function(e,n){var i=r.deserialize(t.getItem(e));return void 0===i?n:i},r.remove=function(e){t.removeItem(e)},r.clear=function(){t.clear()},r.getAll=function(){var e={};return r.forEach(function(t,r){e[t]=r}),e},r.forEach=function(e){for(var n=0;n<t.length;n++){var i=t.key(n);e(i,r.get(i))}};else if(i&&i.documentElement.addBehavior){var c,u;try{u=new ActiveXObject("htmlfile"),u.open(),u.write("<"+a+">document.w=window</"+a+'><iframe src="/favicon.ico"></iframe>'),u.close(),c=u.w.frames[0].document,t=c.createElement("div")}catch(l){t=i.createElement("div"),c=i.body}var f=function(e){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(t),c.appendChild(t),t.addBehavior("#default#userData"),t.load(o);var i=e.apply(r,n);return c.removeChild(t),i}},d=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),s=function(e){return e.replace(/^d/,"___$&").replace(d,"___")};r.set=f(function(e,t,n){return t=s(t),void 0===n?r.remove(t):(e.setAttribute(t,r.serialize(n)),e.save(o),n)}),r.get=f(function(e,t,n){t=s(t);var i=r.deserialize(e.getAttribute(t));return void 0===i?n:i}),r.remove=f(function(e,t){t=s(t),e.removeAttribute(t),e.save(o)}),r.clear=f(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(o);for(var r=t.length-1;r>=0;r--)e.removeAttribute(t[r].name);e.save(o)}),r.getAll=function(e){var t={};return r.forEach(function(e,r){t[e]=r}),t},r.forEach=f(function(e,t){for(var n,i=e.XMLDocument.documentElement.attributes,o=0;n=i[o];++o)t(n.name,r.deserialize(e.getAttribute(n.name)))})}try{var v="__storejs__";r.set(v,v),r.get(v)!=v&&(r.disabled=!0),r.remove(v)}catch(l){r.disabled=!0}return r.enabled=!r.disabled,r}();
    }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});


/*! jQuery UI - v1.11.4 - 2015-03-11
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
    if ( typeof define === "function" && define.amd ) {

        // AMD. Register as an anonymous module.
        define([ "jquery" ], factory );
    } else {

        // Browser globals
        factory( jQuery );
    }
}(function( $ ) {
    /*!
     * jQuery UI Core 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/category/ui-core/
     */


// $.ui might exist from components with no dependencies, e.g., $.ui.position
    $.ui = $.ui || {};

    $.extend( $.ui, {
        version: "1.11.4",

        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });

// plugins
    $.fn.extend({
        scrollParent: function( includeHidden ) {
            var position = this.css( "position" ),
                excludeStaticParent = position === "absolute",
                overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                scrollParent = this.parents().filter( function() {
                    var parent = $( this );
                    if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
                        return false;
                    }
                    return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) + parent.css( "overflow-x" ) );
                }).eq( 0 );

            return position === "fixed" || !scrollParent.length ? $( this[ 0 ].ownerDocument || document ) : scrollParent;
        },

        uniqueId: (function() {
            var uuid = 0;

            return function() {
                return this.each(function() {
                    if ( !this.id ) {
                        this.id = "ui-id-" + ( ++uuid );
                    }
                });
            };
        })(),

        removeUniqueId: function() {
            return this.each(function() {
                if ( /^ui-id-\d+$/.test( this.id ) ) {
                    $( this ).removeAttr( "id" );
                }
            });
        }
    });

// selectors
    function focusable( element, isTabIndexNotNaN ) {
        var map, mapName, img,
            nodeName = element.nodeName.toLowerCase();
        if ( "area" === nodeName ) {
            map = element.parentNode;
            mapName = map.name;
            if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
                return false;
            }
            img = $( "img[usemap='#" + mapName + "']" )[ 0 ];
            return !!img && visible( img );
        }
        return ( /^(input|select|textarea|button|object)$/.test( nodeName ) ?
                !element.disabled :
                "a" === nodeName ?
                element.href || isTabIndexNotNaN :
                    isTabIndexNotNaN) &&
                // the element and all of its ancestors must be visible
            visible( element );
    }

    function visible( element ) {
        return $.expr.filters.visible( element ) &&
            !$( element ).parents().addBack().filter(function() {
                return $.css( this, "visibility" ) === "hidden";
            }).length;
    }

    $.extend( $.expr[ ":" ], {
        data: $.expr.createPseudo ?
            $.expr.createPseudo(function( dataName ) {
                return function( elem ) {
                    return !!$.data( elem, dataName );
                };
            }) :
            // support: jQuery <1.8
            function( elem, i, match ) {
                return !!$.data( elem, match[ 3 ] );
            },

        focusable: function( element ) {
            return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
        },

        tabbable: function( element ) {
            var tabIndex = $.attr( element, "tabindex" ),
                isTabIndexNaN = isNaN( tabIndex );
            return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
        }
    });

// support: jQuery <1.8
    if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
        $.each( [ "Width", "Height" ], function( i, name ) {
            var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
                type = name.toLowerCase(),
                orig = {
                    innerWidth: $.fn.innerWidth,
                    innerHeight: $.fn.innerHeight,
                    outerWidth: $.fn.outerWidth,
                    outerHeight: $.fn.outerHeight
                };

            function reduce( elem, size, border, margin ) {
                $.each( side, function() {
                    size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
                    if ( border ) {
                        size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
                    }
                    if ( margin ) {
                        size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
                    }
                });
                return size;
            }

            $.fn[ "inner" + name ] = function( size ) {
                if ( size === undefined ) {
                    return orig[ "inner" + name ].call( this );
                }

                return this.each(function() {
                    $( this ).css( type, reduce( this, size ) + "px" );
                });
            };

            $.fn[ "outer" + name] = function( size, margin ) {
                if ( typeof size !== "number" ) {
                    return orig[ "outer" + name ].call( this, size );
                }

                return this.each(function() {
                    $( this).css( type, reduce( this, size, true, margin ) + "px" );
                });
            };
        });
    }

// support: jQuery <1.8
    if ( !$.fn.addBack ) {
        $.fn.addBack = function( selector ) {
            return this.add( selector == null ?
                    this.prevObject : this.prevObject.filter( selector )
            );
        };
    }

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
    if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
        $.fn.removeData = (function( removeData ) {
            return function( key ) {
                if ( arguments.length ) {
                    return removeData.call( this, $.camelCase( key ) );
                } else {
                    return removeData.call( this );
                }
            };
        })( $.fn.removeData );
    }

// deprecated
    $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

    $.fn.extend({
        focus: (function( orig ) {
            return function( delay, fn ) {
                return typeof delay === "number" ?
                    this.each(function() {
                        var elem = this;
                        setTimeout(function() {
                            $( elem ).focus();
                            if ( fn ) {
                                fn.call( elem );
                            }
                        }, delay );
                    }) :
                    orig.apply( this, arguments );
            };
        })( $.fn.focus ),

        disableSelection: (function() {
            var eventType = "onselectstart" in document.createElement( "div" ) ?
                "selectstart" :
                "mousedown";

            return function() {
                return this.bind( eventType + ".ui-disableSelection", function( event ) {
                    event.preventDefault();
                });
            };
        })(),

        enableSelection: function() {
            return this.unbind( ".ui-disableSelection" );
        },

        zIndex: function( zIndex ) {
            if ( zIndex !== undefined ) {
                return this.css( "zIndex", zIndex );
            }

            if ( this.length ) {
                var elem = $( this[ 0 ] ), position, value;
                while ( elem.length && elem[ 0 ] !== document ) {
                    // Ignore z-index if position is set to a value where z-index is ignored by the browser
                    // This makes behavior of this function consistent across browsers
                    // WebKit always returns auto if the element is positioned
                    position = elem.css( "position" );
                    if ( position === "absolute" || position === "relative" || position === "fixed" ) {
                        // IE returns 0 when zIndex is not specified
                        // other browsers return a string
                        // we ignore the case of nested elements with an explicit value of 0
                        // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                        value = parseInt( elem.css( "zIndex" ), 10 );
                        if ( !isNaN( value ) && value !== 0 ) {
                            return value;
                        }
                    }
                    elem = elem.parent();
                }
            }

            return 0;
        }
    });

// $.ui.plugin is deprecated. Use $.widget() extensions instead.
    $.ui.plugin = {
        add: function( module, option, set ) {
            var i,
                proto = $.ui[ module ].prototype;
            for ( i in set ) {
                proto.plugins[ i ] = proto.plugins[ i ] || [];
                proto.plugins[ i ].push( [ option, set[ i ] ] );
            }
        },
        call: function( instance, name, args, allowDisconnected ) {
            var i,
                set = instance.plugins[ name ];

            if ( !set ) {
                return;
            }

            if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
                return;
            }

            for ( i = 0; i < set.length; i++ ) {
                if ( instance.options[ set[ i ][ 0 ] ] ) {
                    set[ i ][ 1 ].apply( instance.element, args );
                }
            }
        }
    };


    /*!
     * jQuery UI Widget 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/jQuery.widget/
     */


    var widget_uuid = 0,
        widget_slice = Array.prototype.slice;

    $.cleanData = (function( orig ) {
        return function( elems ) {
            var events, elem, i;
            for ( i = 0; (elem = elems[i]) != null; i++ ) {
                try {

                    // Only trigger remove when necessary to save time
                    events = $._data( elem, "events" );
                    if ( events && events.remove ) {
                        $( elem ).triggerHandler( "remove" );
                    }

                    // http://bugs.jquery.com/ticket/8235
                } catch ( e ) {}
            }
            orig( elems );
        };
    })( $.cleanData );

    $.widget = function( name, base, prototype ) {
        var fullName, existingConstructor, constructor, basePrototype,
        // proxiedPrototype allows the provided prototype to remain unmodified
        // so that it can be used as a mixin for multiple widgets (#8876)
            proxiedPrototype = {},
            namespace = name.split( "." )[ 0 ];

        name = name.split( "." )[ 1 ];
        fullName = namespace + "-" + name;

        if ( !prototype ) {
            prototype = base;
            base = $.Widget;
        }

        // create selector for plugin
        $.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
            return !!$.data( elem, fullName );
        };

        $[ namespace ] = $[ namespace ] || {};
        existingConstructor = $[ namespace ][ name ];
        constructor = $[ namespace ][ name ] = function( options, element ) {
            // allow instantiation without "new" keyword
            if ( !this._createWidget ) {
                return new constructor( options, element );
            }

            // allow instantiation without initializing for simple inheritance
            // must use "new" keyword (the code above always passes args)
            if ( arguments.length ) {
                this._createWidget( options, element );
            }
        };
        // extend with the existing constructor to carry over any static properties
        $.extend( constructor, existingConstructor, {
            version: prototype.version,
            // copy the object used to create the prototype in case we need to
            // redefine the widget later
            _proto: $.extend( {}, prototype ),
            // track widgets that inherit from this widget in case this widget is
            // redefined after a widget inherits from it
            _childConstructors: []
        });

        basePrototype = new base();
        // we need to make the options hash a property directly on the new instance
        // otherwise we'll modify the options hash on the prototype that we're
        // inheriting from
        basePrototype.options = $.widget.extend( {}, basePrototype.options );
        $.each( prototype, function( prop, value ) {
            if ( !$.isFunction( value ) ) {
                proxiedPrototype[ prop ] = value;
                return;
            }
            proxiedPrototype[ prop ] = (function() {
                var _super = function() {
                        return base.prototype[ prop ].apply( this, arguments );
                    },
                    _superApply = function( args ) {
                        return base.prototype[ prop ].apply( this, args );
                    };
                return function() {
                    var __super = this._super,
                        __superApply = this._superApply,
                        returnValue;

                    this._super = _super;
                    this._superApply = _superApply;

                    returnValue = value.apply( this, arguments );

                    this._super = __super;
                    this._superApply = __superApply;

                    return returnValue;
                };
            })();
        });
        constructor.prototype = $.widget.extend( basePrototype, {
            // TODO: remove support for widgetEventPrefix
            // always use the name + a colon as the prefix, e.g., draggable:start
            // don't prefix for widgets that aren't DOM-based
            widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });

        // If this widget is being redefined then we need to find all widgets that
        // are inheriting from it and redefine all of them so that they inherit from
        // the new version of this widget. We're essentially trying to replace one
        // level in the prototype chain.
        if ( existingConstructor ) {
            $.each( existingConstructor._childConstructors, function( i, child ) {
                var childPrototype = child.prototype;

                // redefine the child widget using the same prototype that was
                // originally used, but inherit from the new version of the base
                $.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
            });
            // remove the list of existing child constructors from the old constructor
            // so the old child constructors can be garbage collected
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push( constructor );
        }

        $.widget.bridge( name, constructor );

        return constructor;
    };

    $.widget.extend = function( target ) {
        var input = widget_slice.call( arguments, 1 ),
            inputIndex = 0,
            inputLength = input.length,
            key,
            value;
        for ( ; inputIndex < inputLength; inputIndex++ ) {
            for ( key in input[ inputIndex ] ) {
                value = input[ inputIndex ][ key ];
                if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
                    // Clone objects
                    if ( $.isPlainObject( value ) ) {
                        target[ key ] = $.isPlainObject( target[ key ] ) ?
                            $.widget.extend( {}, target[ key ], value ) :
                            // Don't extend strings, arrays, etc. with objects
                            $.widget.extend( {}, value );
                        // Copy everything else by reference
                    } else {
                        target[ key ] = value;
                    }
                }
            }
        }
        return target;
    };

    $.widget.bridge = function( name, object ) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[ name ] = function( options ) {
            var isMethodCall = typeof options === "string",
                args = widget_slice.call( arguments, 1 ),
                returnValue = this;

            if ( isMethodCall ) {
                this.each(function() {
                    var methodValue,
                        instance = $.data( this, fullName );
                    if ( options === "instance" ) {
                        returnValue = instance;
                        return false;
                    }
                    if ( !instance ) {
                        return $.error( "cannot call methods on " + name + " prior to initialization; " +
                            "attempted to call method '" + options + "'" );
                    }
                    if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
                        return $.error( "no such method '" + options + "' for " + name + " widget instance" );
                    }
                    methodValue = instance[ options ].apply( instance, args );
                    if ( methodValue !== instance && methodValue !== undefined ) {
                        returnValue = methodValue && methodValue.jquery ?
                            returnValue.pushStack( methodValue.get() ) :
                            methodValue;
                        return false;
                    }
                });
            } else {

                // Allow multiple hashes to be passed on init
                if ( args.length ) {
                    options = $.widget.extend.apply( null, [ options ].concat(args) );
                }

                this.each(function() {
                    var instance = $.data( this, fullName );
                    if ( instance ) {
                        instance.option( options || {} );
                        if ( instance._init ) {
                            instance._init();
                        }
                    } else {
                        $.data( this, fullName, new object( options, this ) );
                    }
                });
            }

            return returnValue;
        };
    };

    $.Widget = function( /* options, element */ ) {};
    $.Widget._childConstructors = [];

    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,

            // callbacks
            create: null
        },
        _createWidget: function( options, element ) {
            element = $( element || this.defaultElement || this )[ 0 ];
            this.element = $( element );
            this.uuid = widget_uuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;

            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();

            if ( element !== this ) {
                $.data( element, this.widgetFullName, this );
                this._on( true, this.element, {
                    remove: function( event ) {
                        if ( event.target === element ) {
                            this.destroy();
                        }
                    }
                });
                this.document = $( element.style ?
                    // element within the document
                    element.ownerDocument :
                    // element is window or document
                element.document || element );
                this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
            }

            this.options = $.widget.extend( {},
                this.options,
                this._getCreateOptions(),
                options );

            this._create();
            this._trigger( "create", null, this._getCreateEventData() );
            this._init();
        },
        _getCreateOptions: $.noop,
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,

        destroy: function() {
            this._destroy();
            // we can probably remove the unbind calls in 2.0
            // all event bindings should go through this._on()
            this.element
                .unbind( this.eventNamespace )
                .removeData( this.widgetFullName )
                // support: jquery <1.6.3
                // http://bugs.jquery.com/ticket/9413
                .removeData( $.camelCase( this.widgetFullName ) );
            this.widget()
                .unbind( this.eventNamespace )
                .removeAttr( "aria-disabled" )
                .removeClass(
                this.widgetFullName + "-disabled " +
                "ui-state-disabled" );

            // clean up events and states
            this.bindings.unbind( this.eventNamespace );
            this.hoverable.removeClass( "ui-state-hover" );
            this.focusable.removeClass( "ui-state-focus" );
        },
        _destroy: $.noop,

        widget: function() {
            return this.element;
        },

        option: function( key, value ) {
            var options = key,
                parts,
                curOption,
                i;

            if ( arguments.length === 0 ) {
                // don't return a reference to the internal hash
                return $.widget.extend( {}, this.options );
            }

            if ( typeof key === "string" ) {
                // handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                options = {};
                parts = key.split( "." );
                key = parts.shift();
                if ( parts.length ) {
                    curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
                    for ( i = 0; i < parts.length - 1; i++ ) {
                        curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
                        curOption = curOption[ parts[ i ] ];
                    }
                    key = parts.pop();
                    if ( arguments.length === 1 ) {
                        return curOption[ key ] === undefined ? null : curOption[ key ];
                    }
                    curOption[ key ] = value;
                } else {
                    if ( arguments.length === 1 ) {
                        return this.options[ key ] === undefined ? null : this.options[ key ];
                    }
                    options[ key ] = value;
                }
            }

            this._setOptions( options );

            return this;
        },
        _setOptions: function( options ) {
            var key;

            for ( key in options ) {
                this._setOption( key, options[ key ] );
            }

            return this;
        },
        _setOption: function( key, value ) {
            this.options[ key ] = value;

            if ( key === "disabled" ) {
                this.widget()
                    .toggleClass( this.widgetFullName + "-disabled", !!value );

                // If the widget is becoming disabled, then nothing is interactive
                if ( value ) {
                    this.hoverable.removeClass( "ui-state-hover" );
                    this.focusable.removeClass( "ui-state-focus" );
                }
            }

            return this;
        },

        enable: function() {
            return this._setOptions({ disabled: false });
        },
        disable: function() {
            return this._setOptions({ disabled: true });
        },

        _on: function( suppressDisabledCheck, element, handlers ) {
            var delegateElement,
                instance = this;

            // no suppressDisabledCheck flag, shuffle arguments
            if ( typeof suppressDisabledCheck !== "boolean" ) {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }

            // no element argument, shuffle and use this.element
            if ( !handlers ) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                element = delegateElement = $( element );
                this.bindings = this.bindings.add( element );
            }

            $.each( handlers, function( event, handler ) {
                function handlerProxy() {
                    // allow widgets to customize the disabled handling
                    // - disabled as an array instead of boolean
                    // - disabled class as method for disabling individual parts
                    if ( !suppressDisabledCheck &&
                        ( instance.options.disabled === true ||
                        $( this ).hasClass( "ui-state-disabled" ) ) ) {
                        return;
                    }
                    return ( typeof handler === "string" ? instance[ handler ] : handler )
                        .apply( instance, arguments );
                }

                // copy the guid so direct unbinding works
                if ( typeof handler !== "string" ) {
                    handlerProxy.guid = handler.guid =
                        handler.guid || handlerProxy.guid || $.guid++;
                }

                var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
                    eventName = match[1] + instance.eventNamespace,
                    selector = match[2];
                if ( selector ) {
                    delegateElement.delegate( selector, eventName, handlerProxy );
                } else {
                    element.bind( eventName, handlerProxy );
                }
            });
        },

        _off: function( element, eventName ) {
            eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) +
                this.eventNamespace;
            element.unbind( eventName ).undelegate( eventName );

            // Clear the stack to avoid memory leaks (#10056)
            this.bindings = $( this.bindings.not( element ).get() );
            this.focusable = $( this.focusable.not( element ).get() );
            this.hoverable = $( this.hoverable.not( element ).get() );
        },

        _delay: function( handler, delay ) {
            function handlerProxy() {
                return ( typeof handler === "string" ? instance[ handler ] : handler )
                    .apply( instance, arguments );
            }
            var instance = this;
            return setTimeout( handlerProxy, delay || 0 );
        },

        _hoverable: function( element ) {
            this.hoverable = this.hoverable.add( element );
            this._on( element, {
                mouseenter: function( event ) {
                    $( event.currentTarget ).addClass( "ui-state-hover" );
                },
                mouseleave: function( event ) {
                    $( event.currentTarget ).removeClass( "ui-state-hover" );
                }
            });
        },

        _focusable: function( element ) {
            this.focusable = this.focusable.add( element );
            this._on( element, {
                focusin: function( event ) {
                    $( event.currentTarget ).addClass( "ui-state-focus" );
                },
                focusout: function( event ) {
                    $( event.currentTarget ).removeClass( "ui-state-focus" );
                }
            });
        },

        _trigger: function( type, event, data ) {
            var prop, orig,
                callback = this.options[ type ];

            data = data || {};
            event = $.Event( event );
            event.type = ( type === this.widgetEventPrefix ?
                type :
            this.widgetEventPrefix + type ).toLowerCase();
            // the original event may come from any element
            // so we need to reset the target on the new event
            event.target = this.element[ 0 ];

            // copy original event properties over to the new event
            orig = event.originalEvent;
            if ( orig ) {
                for ( prop in orig ) {
                    if ( !( prop in event ) ) {
                        event[ prop ] = orig[ prop ];
                    }
                }
            }

            this.element.trigger( event, data );
            return !( $.isFunction( callback ) &&
            callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
            event.isDefaultPrevented() );
        }
    };

    $.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
        $.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
            if ( typeof options === "string" ) {
                options = { effect: options };
            }
            var hasOptions,
                effectName = !options ?
                    method :
                    options === true || typeof options === "number" ?
                        defaultEffect :
                    options.effect || defaultEffect;
            options = options || {};
            if ( typeof options === "number" ) {
                options = { duration: options };
            }
            hasOptions = !$.isEmptyObject( options );
            options.complete = callback;
            if ( options.delay ) {
                element.delay( options.delay );
            }
            if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
                element[ method ]( options );
            } else if ( effectName !== method && element[ effectName ] ) {
                element[ effectName ]( options.duration, options.easing, callback );
            } else {
                element.queue(function( next ) {
                    $( this )[ method ]();
                    if ( callback ) {
                        callback.call( element[ 0 ] );
                    }
                    next();
                });
            }
        };
    });

    var widget = $.widget;


    /*!
     * jQuery UI Mouse 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/mouse/
     */


    var mouseHandled = false;
    $( document ).mouseup( function() {
        mouseHandled = false;
    });

    var mouse = $.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var that = this;

            this.element
                .bind("mousedown." + this.widgetName, function(event) {
                    return that._mouseDown(event);
                })
                .bind("click." + this.widgetName, function(event) {
                    if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
                        $.removeData(event.target, that.widgetName + ".preventClickEvent");
                        event.stopImmediatePropagation();
                        return false;
                    }
                });

            this.started = false;
        },

        // TODO: make sure destroying one instance of mouse doesn't mess with
        // other instances of mouse
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            if ( this._mouseMoveDelegate ) {
                this.document
                    .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            }
        },

        _mouseDown: function(event) {
            // don't let more than one widget handle mouseStart
            if ( mouseHandled ) {
                return;
            }

            this._mouseMoved = false;

            // we may have missed mouseup (out of window)
            (this._mouseStarted && this._mouseUp(event));

            this._mouseDownEvent = event;

            var that = this,
                btnIsLeft = (event.which === 1),
            // event.target.nodeName works around a bug in IE 8 with
            // disabled inputs (#7620)
                elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
            if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
                return true;
            }

            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    that.mouseDelayMet = true;
                }, this.options.delay);
            }

            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted = (this._mouseStart(event) !== false);
                if (!this._mouseStarted) {
                    event.preventDefault();
                    return true;
                }
            }

            // Click event may never have fired (Gecko & Opera)
            if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
                $.removeData(event.target, this.widgetName + ".preventClickEvent");
            }

            // these delegates are required to keep context
            this._mouseMoveDelegate = function(event) {
                return that._mouseMove(event);
            };
            this._mouseUpDelegate = function(event) {
                return that._mouseUp(event);
            };

            this.document
                .bind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
                .bind( "mouseup." + this.widgetName, this._mouseUpDelegate );

            event.preventDefault();

            mouseHandled = true;
            return true;
        },

        _mouseMove: function(event) {
            // Only check for mouseups outside the document if you've moved inside the document
            // at least once. This prevents the firing of mouseup in the case of IE<9, which will
            // fire a mousemove event if content is placed under the cursor. See #7778
            // Support: IE <9
            if ( this._mouseMoved ) {
                // IE mouseup check - mouseup happened when mouse was out of window
                if ($.ui.ie && ( !document.documentMode || document.documentMode < 9 ) && !event.button) {
                    return this._mouseUp(event);

                    // Iframe mouseup check - mouseup occurred in another document
                } else if ( !event.which ) {
                    return this._mouseUp( event );
                }
            }

            if ( event.which || event.button ) {
                this._mouseMoved = true;
            }

            if (this._mouseStarted) {
                this._mouseDrag(event);
                return event.preventDefault();
            }

            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted =
                    (this._mouseStart(this._mouseDownEvent, event) !== false);
                (this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
            }

            return !this._mouseStarted;
        },

        _mouseUp: function(event) {
            this.document
                .unbind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
                .unbind( "mouseup." + this.widgetName, this._mouseUpDelegate );

            if (this._mouseStarted) {
                this._mouseStarted = false;

                if (event.target === this._mouseDownEvent.target) {
                    $.data(event.target, this.widgetName + ".preventClickEvent", true);
                }

                this._mouseStop(event);
            }

            mouseHandled = false;
            return false;
        },

        _mouseDistanceMet: function(event) {
            return (Math.max(
                    Math.abs(this._mouseDownEvent.pageX - event.pageX),
                    Math.abs(this._mouseDownEvent.pageY - event.pageY)
                ) >= this.options.distance
            );
        },

        _mouseDelayMet: function(/* event */) {
            return this.mouseDelayMet;
        },

        // These are placeholder methods, to be overriden by extending plugin
        _mouseStart: function(/* event */) {},
        _mouseDrag: function(/* event */) {},
        _mouseStop: function(/* event */) {},
        _mouseCapture: function(/* event */) { return true; }
    });


    /*!
     * jQuery UI Position 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/position/
     */

    (function() {

        $.ui = $.ui || {};

        var cachedScrollbarWidth, supportsOffsetFractions,
            max = Math.max,
            abs = Math.abs,
            round = Math.round,
            rhorizontal = /left|center|right/,
            rvertical = /top|center|bottom/,
            roffset = /[\+\-]\d+(\.[\d]+)?%?/,
            rposition = /^\w+/,
            rpercent = /%$/,
            _position = $.fn.position;

        function getOffsets( offsets, width, height ) {
            return [
                parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
                parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
            ];
        }

        function parseCss( element, property ) {
            return parseInt( $.css( element, property ), 10 ) || 0;
        }

        function getDimensions( elem ) {
            var raw = elem[0];
            if ( raw.nodeType === 9 ) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: { top: 0, left: 0 }
                };
            }
            if ( $.isWindow( raw ) ) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
                };
            }
            if ( raw.preventDefault ) {
                return {
                    width: 0,
                    height: 0,
                    offset: { top: raw.pageY, left: raw.pageX }
                };
            }
            return {
                width: elem.outerWidth(),
                height: elem.outerHeight(),
                offset: elem.offset()
            };
        }

        $.position = {
            scrollbarWidth: function() {
                if ( cachedScrollbarWidth !== undefined ) {
                    return cachedScrollbarWidth;
                }
                var w1, w2,
                    div = $( "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>" ),
                    innerDiv = div.children()[0];

                $( "body" ).append( div );
                w1 = innerDiv.offsetWidth;
                div.css( "overflow", "scroll" );

                w2 = innerDiv.offsetWidth;

                if ( w1 === w2 ) {
                    w2 = div[0].clientWidth;
                }

                div.remove();

                return (cachedScrollbarWidth = w1 - w2);
            },
            getScrollInfo: function( within ) {
                var overflowX = within.isWindow || within.isDocument ? "" :
                        within.element.css( "overflow-x" ),
                    overflowY = within.isWindow || within.isDocument ? "" :
                        within.element.css( "overflow-y" ),
                    hasOverflowX = overflowX === "scroll" ||
                        ( overflowX === "auto" && within.width < within.element[0].scrollWidth ),
                    hasOverflowY = overflowY === "scroll" ||
                        ( overflowY === "auto" && within.height < within.element[0].scrollHeight );
                return {
                    width: hasOverflowY ? $.position.scrollbarWidth() : 0,
                    height: hasOverflowX ? $.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function( element ) {
                var withinElement = $( element || window ),
                    isWindow = $.isWindow( withinElement[0] ),
                    isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9;
                return {
                    element: withinElement,
                    isWindow: isWindow,
                    isDocument: isDocument,
                    offset: withinElement.offset() || { left: 0, top: 0 },
                    scrollLeft: withinElement.scrollLeft(),
                    scrollTop: withinElement.scrollTop(),

                    // support: jQuery 1.6.x
                    // jQuery 1.6 doesn't support .outerWidth/Height() on documents or windows
                    width: isWindow || isDocument ? withinElement.width() : withinElement.outerWidth(),
                    height: isWindow || isDocument ? withinElement.height() : withinElement.outerHeight()
                };
            }
        };

        $.fn.position = function( options ) {
            if ( !options || !options.of ) {
                return _position.apply( this, arguments );
            }

            // make a copy, we don't want to modify arguments
            options = $.extend( {}, options );

            var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
                target = $( options.of ),
                within = $.position.getWithinInfo( options.within ),
                scrollInfo = $.position.getScrollInfo( within ),
                collision = ( options.collision || "flip" ).split( " " ),
                offsets = {};

            dimensions = getDimensions( target );
            if ( target[0].preventDefault ) {
                // force left top to allow flipping
                options.at = "left top";
            }
            targetWidth = dimensions.width;
            targetHeight = dimensions.height;
            targetOffset = dimensions.offset;
            // clone to reuse original targetOffset later
            basePosition = $.extend( {}, targetOffset );

            // force my and at to have valid horizontal and vertical positions
            // if a value is missing or invalid, it will be converted to center
            $.each( [ "my", "at" ], function() {
                var pos = ( options[ this ] || "" ).split( " " ),
                    horizontalOffset,
                    verticalOffset;

                if ( pos.length === 1) {
                    pos = rhorizontal.test( pos[ 0 ] ) ?
                        pos.concat( [ "center" ] ) :
                        rvertical.test( pos[ 0 ] ) ?
                            [ "center" ].concat( pos ) :
                            [ "center", "center" ];
                }
                pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
                pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

                // calculate offsets
                horizontalOffset = roffset.exec( pos[ 0 ] );
                verticalOffset = roffset.exec( pos[ 1 ] );
                offsets[ this ] = [
                    horizontalOffset ? horizontalOffset[ 0 ] : 0,
                    verticalOffset ? verticalOffset[ 0 ] : 0
                ];

                // reduce to just the positions without the offsets
                options[ this ] = [
                    rposition.exec( pos[ 0 ] )[ 0 ],
                    rposition.exec( pos[ 1 ] )[ 0 ]
                ];
            });

            // normalize collision option
            if ( collision.length === 1 ) {
                collision[ 1 ] = collision[ 0 ];
            }

            if ( options.at[ 0 ] === "right" ) {
                basePosition.left += targetWidth;
            } else if ( options.at[ 0 ] === "center" ) {
                basePosition.left += targetWidth / 2;
            }

            if ( options.at[ 1 ] === "bottom" ) {
                basePosition.top += targetHeight;
            } else if ( options.at[ 1 ] === "center" ) {
                basePosition.top += targetHeight / 2;
            }

            atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
            basePosition.left += atOffset[ 0 ];
            basePosition.top += atOffset[ 1 ];

            return this.each(function() {
                var collisionPosition, using,
                    elem = $( this ),
                    elemWidth = elem.outerWidth(),
                    elemHeight = elem.outerHeight(),
                    marginLeft = parseCss( this, "marginLeft" ),
                    marginTop = parseCss( this, "marginTop" ),
                    collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) + scrollInfo.width,
                    collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) + scrollInfo.height,
                    position = $.extend( {}, basePosition ),
                    myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

                if ( options.my[ 0 ] === "right" ) {
                    position.left -= elemWidth;
                } else if ( options.my[ 0 ] === "center" ) {
                    position.left -= elemWidth / 2;
                }

                if ( options.my[ 1 ] === "bottom" ) {
                    position.top -= elemHeight;
                } else if ( options.my[ 1 ] === "center" ) {
                    position.top -= elemHeight / 2;
                }

                position.left += myOffset[ 0 ];
                position.top += myOffset[ 1 ];

                // if the browser doesn't support fractions, then round for consistent results
                if ( !supportsOffsetFractions ) {
                    position.left = round( position.left );
                    position.top = round( position.top );
                }

                collisionPosition = {
                    marginLeft: marginLeft,
                    marginTop: marginTop
                };

                $.each( [ "left", "top" ], function( i, dir ) {
                    if ( $.ui.position[ collision[ i ] ] ) {
                        $.ui.position[ collision[ i ] ][ dir ]( position, {
                            targetWidth: targetWidth,
                            targetHeight: targetHeight,
                            elemWidth: elemWidth,
                            elemHeight: elemHeight,
                            collisionPosition: collisionPosition,
                            collisionWidth: collisionWidth,
                            collisionHeight: collisionHeight,
                            offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
                            my: options.my,
                            at: options.at,
                            within: within,
                            elem: elem
                        });
                    }
                });

                if ( options.using ) {
                    // adds feedback as second argument to using callback, if present
                    using = function( props ) {
                        var left = targetOffset.left - position.left,
                            right = left + targetWidth - elemWidth,
                            top = targetOffset.top - position.top,
                            bottom = top + targetHeight - elemHeight,
                            feedback = {
                                target: {
                                    element: target,
                                    left: targetOffset.left,
                                    top: targetOffset.top,
                                    width: targetWidth,
                                    height: targetHeight
                                },
                                element: {
                                    element: elem,
                                    left: position.left,
                                    top: position.top,
                                    width: elemWidth,
                                    height: elemHeight
                                },
                                horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
                                vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
                            };
                        if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
                            feedback.horizontal = "center";
                        }
                        if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
                            feedback.vertical = "middle";
                        }
                        if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
                            feedback.important = "horizontal";
                        } else {
                            feedback.important = "vertical";
                        }
                        options.using.call( this, props, feedback );
                    };
                }

                elem.offset( $.extend( position, { using: using } ) );
            });
        };

        $.ui.position = {
            fit: {
                left: function( position, data ) {
                    var within = data.within,
                        withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
                        outerWidth = within.width,
                        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                        overLeft = withinOffset - collisionPosLeft,
                        overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
                        newOverRight;

                    // element is wider than within
                    if ( data.collisionWidth > outerWidth ) {
                        // element is initially over the left side of within
                        if ( overLeft > 0 && overRight <= 0 ) {
                            newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
                            position.left += overLeft - newOverRight;
                            // element is initially over right side of within
                        } else if ( overRight > 0 && overLeft <= 0 ) {
                            position.left = withinOffset;
                            // element is initially over both left and right sides of within
                        } else {
                            if ( overLeft > overRight ) {
                                position.left = withinOffset + outerWidth - data.collisionWidth;
                            } else {
                                position.left = withinOffset;
                            }
                        }
                        // too far left -> align with left edge
                    } else if ( overLeft > 0 ) {
                        position.left += overLeft;
                        // too far right -> align with right edge
                    } else if ( overRight > 0 ) {
                        position.left -= overRight;
                        // adjust based on position and margin
                    } else {
                        position.left = max( position.left - collisionPosLeft, position.left );
                    }
                },
                top: function( position, data ) {
                    var within = data.within,
                        withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
                        outerHeight = data.within.height,
                        collisionPosTop = position.top - data.collisionPosition.marginTop,
                        overTop = withinOffset - collisionPosTop,
                        overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
                        newOverBottom;

                    // element is taller than within
                    if ( data.collisionHeight > outerHeight ) {
                        // element is initially over the top of within
                        if ( overTop > 0 && overBottom <= 0 ) {
                            newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
                            position.top += overTop - newOverBottom;
                            // element is initially over bottom of within
                        } else if ( overBottom > 0 && overTop <= 0 ) {
                            position.top = withinOffset;
                            // element is initially over both top and bottom of within
                        } else {
                            if ( overTop > overBottom ) {
                                position.top = withinOffset + outerHeight - data.collisionHeight;
                            } else {
                                position.top = withinOffset;
                            }
                        }
                        // too far up -> align with top
                    } else if ( overTop > 0 ) {
                        position.top += overTop;
                        // too far down -> align with bottom edge
                    } else if ( overBottom > 0 ) {
                        position.top -= overBottom;
                        // adjust based on position and margin
                    } else {
                        position.top = max( position.top - collisionPosTop, position.top );
                    }
                }
            },
            flip: {
                left: function( position, data ) {
                    var within = data.within,
                        withinOffset = within.offset.left + within.scrollLeft,
                        outerWidth = within.width,
                        offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
                        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                        overLeft = collisionPosLeft - offsetLeft,
                        overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
                        myOffset = data.my[ 0 ] === "left" ?
                            -data.elemWidth :
                            data.my[ 0 ] === "right" ?
                                data.elemWidth :
                                0,
                        atOffset = data.at[ 0 ] === "left" ?
                            data.targetWidth :
                            data.at[ 0 ] === "right" ?
                                -data.targetWidth :
                                0,
                        offset = -2 * data.offset[ 0 ],
                        newOverRight,
                        newOverLeft;

                    if ( overLeft < 0 ) {
                        newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
                        if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
                            position.left += myOffset + atOffset + offset;
                        }
                    } else if ( overRight > 0 ) {
                        newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
                        if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
                            position.left += myOffset + atOffset + offset;
                        }
                    }
                },
                top: function( position, data ) {
                    var within = data.within,
                        withinOffset = within.offset.top + within.scrollTop,
                        outerHeight = within.height,
                        offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
                        collisionPosTop = position.top - data.collisionPosition.marginTop,
                        overTop = collisionPosTop - offsetTop,
                        overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
                        top = data.my[ 1 ] === "top",
                        myOffset = top ?
                            -data.elemHeight :
                            data.my[ 1 ] === "bottom" ?
                                data.elemHeight :
                                0,
                        atOffset = data.at[ 1 ] === "top" ?
                            data.targetHeight :
                            data.at[ 1 ] === "bottom" ?
                                -data.targetHeight :
                                0,
                        offset = -2 * data.offset[ 1 ],
                        newOverTop,
                        newOverBottom;
                    if ( overTop < 0 ) {
                        newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
                        if ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) {
                            position.top += myOffset + atOffset + offset;
                        }
                    } else if ( overBottom > 0 ) {
                        newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
                        if ( newOverTop > 0 || abs( newOverTop ) < overBottom ) {
                            position.top += myOffset + atOffset + offset;
                        }
                    }
                }
            },
            flipfit: {
                left: function() {
                    $.ui.position.flip.left.apply( this, arguments );
                    $.ui.position.fit.left.apply( this, arguments );
                },
                top: function() {
                    $.ui.position.flip.top.apply( this, arguments );
                    $.ui.position.fit.top.apply( this, arguments );
                }
            }
        };

// fraction support test
        (function() {
            var testElement, testElementParent, testElementStyle, offsetLeft, i,
                body = document.getElementsByTagName( "body" )[ 0 ],
                div = document.createElement( "div" );

            //Create a "fake body" for testing based on method used in jQuery.support
            testElement = document.createElement( body ? "div" : "body" );
            testElementStyle = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            if ( body ) {
                $.extend( testElementStyle, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
            }
            for ( i in testElementStyle ) {
                testElement.style[ i ] = testElementStyle[ i ];
            }
            testElement.appendChild( div );
            testElementParent = body || document.documentElement;
            testElementParent.insertBefore( testElement, testElementParent.firstChild );

            div.style.cssText = "position: absolute; left: 10.7432222px;";

            offsetLeft = $( div ).offset().left;
            supportsOffsetFractions = offsetLeft > 10 && offsetLeft < 11;

            testElement.innerHTML = "";
            testElementParent.removeChild( testElement );
        })();

    })();

    var position = $.ui.position;


    /*!
     * jQuery UI Accordion 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/accordion/
     */


    var accordion = $.widget( "ui.accordion", {
        version: "1.11.4",
        options: {
            active: 0,
            animate: {},
            collapsible: false,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },

            // callbacks
            activate: null,
            beforeActivate: null
        },

        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },

        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },

        _create: function() {
            var options = this.options;
            this.prevShow = this.prevHide = $();
            this.element.addClass( "ui-accordion ui-widget ui-helper-reset" )
                // ARIA
                .attr( "role", "tablist" );

            // don't allow collapsible: false and active: false / null
            if ( !options.collapsible && (options.active === false || options.active == null) ) {
                options.active = 0;
            }

            this._processPanels();
            // handle negative values
            if ( options.active < 0 ) {
                options.active += this.headers.length;
            }
            this._refresh();
        },

        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: !this.active.length ? $() : this.active.next()
            };
        },

        _createIcons: function() {
            var icons = this.options.icons;
            if ( icons ) {
                $( "<span>" )
                    .addClass( "ui-accordion-header-icon ui-icon " + icons.header )
                    .prependTo( this.headers );
                this.active.children( ".ui-accordion-header-icon" )
                    .removeClass( icons.header )
                    .addClass( icons.activeHeader );
                this.headers.addClass( "ui-accordion-icons" );
            }
        },

        _destroyIcons: function() {
            this.headers
                .removeClass( "ui-accordion-icons" )
                .children( ".ui-accordion-header-icon" )
                .remove();
        },

        _destroy: function() {
            var contents;

            // clean up main element
            this.element
                .removeClass( "ui-accordion ui-widget ui-helper-reset" )
                .removeAttr( "role" );

            // clean up headers
            this.headers
                .removeClass( "ui-accordion-header ui-accordion-header-active ui-state-default " +
                "ui-corner-all ui-state-active ui-state-disabled ui-corner-top" )
                .removeAttr( "role" )
                .removeAttr( "aria-expanded" )
                .removeAttr( "aria-selected" )
                .removeAttr( "aria-controls" )
                .removeAttr( "tabIndex" )
                .removeUniqueId();

            this._destroyIcons();

            // clean up content panels
            contents = this.headers.next()
                .removeClass( "ui-helper-reset ui-widget-content ui-corner-bottom " +
                "ui-accordion-content ui-accordion-content-active ui-state-disabled" )
                .css( "display", "" )
                .removeAttr( "role" )
                .removeAttr( "aria-hidden" )
                .removeAttr( "aria-labelledby" )
                .removeUniqueId();

            if ( this.options.heightStyle !== "content" ) {
                contents.css( "height", "" );
            }
        },

        _setOption: function( key, value ) {
            if ( key === "active" ) {
                // _activate() will handle invalid values and update this.options
                this._activate( value );
                return;
            }

            if ( key === "event" ) {
                if ( this.options.event ) {
                    this._off( this.headers, this.options.event );
                }
                this._setupEvents( value );
            }

            this._super( key, value );

            // setting collapsible: false while collapsed; open first panel
            if ( key === "collapsible" && !value && this.options.active === false ) {
                this._activate( 0 );
            }

            if ( key === "icons" ) {
                this._destroyIcons();
                if ( value ) {
                    this._createIcons();
                }
            }

            // #5332 - opacity doesn't cascade to positioned elements in IE
            // so we need to add the disabled class to the headers and panels
            if ( key === "disabled" ) {
                this.element
                    .toggleClass( "ui-state-disabled", !!value )
                    .attr( "aria-disabled", value );
                this.headers.add( this.headers.next() )
                    .toggleClass( "ui-state-disabled", !!value );
            }
        },

        _keydown: function( event ) {
            if ( event.altKey || event.ctrlKey ) {
                return;
            }

            var keyCode = $.ui.keyCode,
                length = this.headers.length,
                currentIndex = this.headers.index( event.target ),
                toFocus = false;

            switch ( event.keyCode ) {
                case keyCode.RIGHT:
                case keyCode.DOWN:
                    toFocus = this.headers[ ( currentIndex + 1 ) % length ];
                    break;
                case keyCode.LEFT:
                case keyCode.UP:
                    toFocus = this.headers[ ( currentIndex - 1 + length ) % length ];
                    break;
                case keyCode.SPACE:
                case keyCode.ENTER:
                    this._eventHandler( event );
                    break;
                case keyCode.HOME:
                    toFocus = this.headers[ 0 ];
                    break;
                case keyCode.END:
                    toFocus = this.headers[ length - 1 ];
                    break;
            }

            if ( toFocus ) {
                $( event.target ).attr( "tabIndex", -1 );
                $( toFocus ).attr( "tabIndex", 0 );
                toFocus.focus();
                event.preventDefault();
            }
        },

        _panelKeyDown: function( event ) {
            if ( event.keyCode === $.ui.keyCode.UP && event.ctrlKey ) {
                $( event.currentTarget ).prev().focus();
            }
        },

        refresh: function() {
            var options = this.options;
            this._processPanels();

            // was collapsed or no panel
            if ( ( options.active === false && options.collapsible === true ) || !this.headers.length ) {
                options.active = false;
                this.active = $();
                // active false only when collapsible is true
            } else if ( options.active === false ) {
                this._activate( 0 );
                // was active, but active panel is gone
            } else if ( this.active.length && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
                // all remaining panel are disabled
                if ( this.headers.length === this.headers.find(".ui-state-disabled").length ) {
                    options.active = false;
                    this.active = $();
                    // activate previous panel
                } else {
                    this._activate( Math.max( 0, options.active - 1 ) );
                }
                // was active, active panel still exists
            } else {
                // make sure active index is correct
                options.active = this.headers.index( this.active );
            }

            this._destroyIcons();

            this._refresh();
        },

        _processPanels: function() {
            var prevHeaders = this.headers,
                prevPanels = this.panels;

            this.headers = this.element.find( this.options.header )
                .addClass( "ui-accordion-header ui-state-default ui-corner-all" );

            this.panels = this.headers.next()
                .addClass( "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" )
                .filter( ":not(.ui-accordion-content-active)" )
                .hide();

            // Avoid memory leaks (#10056)
            if ( prevPanels ) {
                this._off( prevHeaders.not( this.headers ) );
                this._off( prevPanels.not( this.panels ) );
            }
        },

        _refresh: function() {
            var maxHeight,
                options = this.options,
                heightStyle = options.heightStyle,
                parent = this.element.parent();

            this.active = this._findActive( options.active )
                .addClass( "ui-accordion-header-active ui-state-active ui-corner-top" )
                .removeClass( "ui-corner-all" );
            this.active.next()
                .addClass( "ui-accordion-content-active" )
                .show();

            this.headers
                .attr( "role", "tab" )
                .each(function() {
                    var header = $( this ),
                        headerId = header.uniqueId().attr( "id" ),
                        panel = header.next(),
                        panelId = panel.uniqueId().attr( "id" );
                    header.attr( "aria-controls", panelId );
                    panel.attr( "aria-labelledby", headerId );
                })
                .next()
                .attr( "role", "tabpanel" );

            this.headers
                .not( this.active )
                .attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                })
                .next()
                .attr({
                    "aria-hidden": "true"
                })
                .hide();

            // make sure at least one header is in the tab order
            if ( !this.active.length ) {
                this.headers.eq( 0 ).attr( "tabIndex", 0 );
            } else {
                this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
                    .next()
                    .attr({
                        "aria-hidden": "false"
                    });
            }

            this._createIcons();

            this._setupEvents( options.event );

            if ( heightStyle === "fill" ) {
                maxHeight = parent.height();
                this.element.siblings( ":visible" ).each(function() {
                    var elem = $( this ),
                        position = elem.css( "position" );

                    if ( position === "absolute" || position === "fixed" ) {
                        return;
                    }
                    maxHeight -= elem.outerHeight( true );
                });

                this.headers.each(function() {
                    maxHeight -= $( this ).outerHeight( true );
                });

                this.headers.next()
                    .each(function() {
                        $( this ).height( Math.max( 0, maxHeight -
                            $( this ).innerHeight() + $( this ).height() ) );
                    })
                    .css( "overflow", "auto" );
            } else if ( heightStyle === "auto" ) {
                maxHeight = 0;
                this.headers.next()
                    .each(function() {
                        maxHeight = Math.max( maxHeight, $( this ).css( "height", "" ).height() );
                    })
                    .height( maxHeight );
            }
        },

        _activate: function( index ) {
            var active = this._findActive( index )[ 0 ];

            // trying to activate the already active panel
            if ( active === this.active[ 0 ] ) {
                return;
            }

            // trying to collapse, simulate a click on the currently active header
            active = active || this.active[ 0 ];

            this._eventHandler({
                target: active,
                currentTarget: active,
                preventDefault: $.noop
            });
        },

        _findActive: function( selector ) {
            return typeof selector === "number" ? this.headers.eq( selector ) : $();
        },

        _setupEvents: function( event ) {
            var events = {
                keydown: "_keydown"
            };
            if ( event ) {
                $.each( event.split( " " ), function( index, eventName ) {
                    events[ eventName ] = "_eventHandler";
                });
            }

            this._off( this.headers.add( this.headers.next() ) );
            this._on( this.headers, events );
            this._on( this.headers.next(), { keydown: "_panelKeyDown" });
            this._hoverable( this.headers );
            this._focusable( this.headers );
        },

        _eventHandler: function( event ) {
            var options = this.options,
                active = this.active,
                clicked = $( event.currentTarget ),
                clickedIsActive = clicked[ 0 ] === active[ 0 ],
                collapsing = clickedIsActive && options.collapsible,
                toShow = collapsing ? $() : clicked.next(),
                toHide = active.next(),
                eventData = {
                    oldHeader: active,
                    oldPanel: toHide,
                    newHeader: collapsing ? $() : clicked,
                    newPanel: toShow
                };

            event.preventDefault();

            if (
                // click on active header, but not collapsible
            ( clickedIsActive && !options.collapsible ) ||
                // allow canceling activation
            ( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
                return;
            }

            options.active = collapsing ? false : this.headers.index( clicked );

            // when the call to ._toggle() comes after the class changes
            // it causes a very odd bug in IE 8 (see #6720)
            this.active = clickedIsActive ? $() : clicked;
            this._toggle( eventData );

            // switch classes
            // corner classes on the previously active header stay after the animation
            active.removeClass( "ui-accordion-header-active ui-state-active" );
            if ( options.icons ) {
                active.children( ".ui-accordion-header-icon" )
                    .removeClass( options.icons.activeHeader )
                    .addClass( options.icons.header );
            }

            if ( !clickedIsActive ) {
                clicked
                    .removeClass( "ui-corner-all" )
                    .addClass( "ui-accordion-header-active ui-state-active ui-corner-top" );
                if ( options.icons ) {
                    clicked.children( ".ui-accordion-header-icon" )
                        .removeClass( options.icons.header )
                        .addClass( options.icons.activeHeader );
                }

                clicked
                    .next()
                    .addClass( "ui-accordion-content-active" );
            }
        },

        _toggle: function( data ) {
            var toShow = data.newPanel,
                toHide = this.prevShow.length ? this.prevShow : data.oldPanel;

            // handle activating a panel during the animation for another activation
            this.prevShow.add( this.prevHide ).stop( true, true );
            this.prevShow = toShow;
            this.prevHide = toHide;

            if ( this.options.animate ) {
                this._animate( toShow, toHide, data );
            } else {
                toHide.hide();
                toShow.show();
                this._toggleComplete( data );
            }

            toHide.attr({
                "aria-hidden": "true"
            });
            toHide.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            // if we're switching panels, remove the old header from the tab order
            // if we're opening from collapsed state, remove the previous header from the tab order
            // if we're collapsing, then keep the collapsing header in the tab order
            if ( toShow.length && toHide.length ) {
                toHide.prev().attr({
                    "tabIndex": -1,
                    "aria-expanded": "false"
                });
            } else if ( toShow.length ) {
                this.headers.filter(function() {
                    return parseInt( $( this ).attr( "tabIndex" ), 10 ) === 0;
                })
                    .attr( "tabIndex", -1 );
            }

            toShow
                .attr( "aria-hidden", "false" )
                .prev()
                .attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                });
        },

        _animate: function( toShow, toHide, data ) {
            var total, easing, duration,
                that = this,
                adjust = 0,
                boxSizing = toShow.css( "box-sizing" ),
                down = toShow.length &&
                    ( !toHide.length || ( toShow.index() < toHide.index() ) ),
                animate = this.options.animate || {},
                options = down && animate.down || animate,
                complete = function() {
                    that._toggleComplete( data );
                };

            if ( typeof options === "number" ) {
                duration = options;
            }
            if ( typeof options === "string" ) {
                easing = options;
            }
            // fall back from options to animation in case of partial down settings
            easing = easing || options.easing || animate.easing;
            duration = duration || options.duration || animate.duration;

            if ( !toHide.length ) {
                return toShow.animate( this.showProps, duration, easing, complete );
            }
            if ( !toShow.length ) {
                return toHide.animate( this.hideProps, duration, easing, complete );
            }

            total = toShow.show().outerHeight();
            toHide.animate( this.hideProps, {
                duration: duration,
                easing: easing,
                step: function( now, fx ) {
                    fx.now = Math.round( now );
                }
            });
            toShow
                .hide()
                .animate( this.showProps, {
                    duration: duration,
                    easing: easing,
                    complete: complete,
                    step: function( now, fx ) {
                        fx.now = Math.round( now );
                        if ( fx.prop !== "height" ) {
                            if ( boxSizing === "content-box" ) {
                                adjust += fx.now;
                            }
                        } else if ( that.options.heightStyle !== "content" ) {
                            fx.now = Math.round( total - toHide.outerHeight() - adjust );
                            adjust = 0;
                        }
                    }
                });
        },

        _toggleComplete: function( data ) {
            var toHide = data.oldPanel;

            toHide
                .removeClass( "ui-accordion-content-active" )
                .prev()
                .removeClass( "ui-corner-top" )
                .addClass( "ui-corner-all" );

            // Work around for rendering bug in IE (#5421)
            if ( toHide.length ) {
                toHide.parent()[ 0 ].className = toHide.parent()[ 0 ].className;
            }
            this._trigger( "activate", null, data );
        }
    });


    /*!
     * jQuery UI Menu 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/menu/
     */


    var menu = $.widget( "ui.menu", {
        version: "1.11.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",

            // callbacks
            blur: null,
            focus: null,
            select: null
        },

        _create: function() {
            this.activeMenu = this.element;

            // Flag used to prevent firing of the click handler
            // as the event bubbles up through nested menus
            this.mouseHandled = false;
            this.element
                .uniqueId()
                .addClass( "ui-menu ui-widget ui-widget-content" )
                .toggleClass( "ui-menu-icons", !!this.element.find( ".ui-icon" ).length )
                .attr({
                    role: this.options.role,
                    tabIndex: 0
                });

            if ( this.options.disabled ) {
                this.element
                    .addClass( "ui-state-disabled" )
                    .attr( "aria-disabled", "true" );
            }

            this._on({
                // Prevent focus from sticking to links inside menu after clicking
                // them (focus should always stay on UL during navigation).
                "mousedown .ui-menu-item": function( event ) {
                    event.preventDefault();
                },
                "click .ui-menu-item": function( event ) {
                    var target = $( event.target );
                    if ( !this.mouseHandled && target.not( ".ui-state-disabled" ).length ) {
                        this.select( event );

                        // Only set the mouseHandled flag if the event will bubble, see #9469.
                        if ( !event.isPropagationStopped() ) {
                            this.mouseHandled = true;
                        }

                        // Open submenu on click
                        if ( target.has( ".ui-menu" ).length ) {
                            this.expand( event );
                        } else if ( !this.element.is( ":focus" ) && $( this.document[ 0 ].activeElement ).closest( ".ui-menu" ).length ) {

                            // Redirect focus to the menu
                            this.element.trigger( "focus", [ true ] );

                            // If the active item is on the top level, let it stay active.
                            // Otherwise, blur the active item since it is no longer visible.
                            if ( this.active && this.active.parents( ".ui-menu" ).length === 1 ) {
                                clearTimeout( this.timer );
                            }
                        }
                    }
                },
                "mouseenter .ui-menu-item": function( event ) {
                    // Ignore mouse events while typeahead is active, see #10458.
                    // Prevents focusing the wrong item when typeahead causes a scroll while the mouse
                    // is over an item in the menu
                    if ( this.previousFilter ) {
                        return;
                    }
                    var target = $( event.currentTarget );
                    // Remove ui-state-active class from siblings of the newly focused menu item
                    // to avoid a jump caused by adjacent elements both having a class with a border
                    target.siblings( ".ui-state-active" ).removeClass( "ui-state-active" );
                    this.focus( event, target );
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function( event, keepActiveItem ) {
                    // If there's already an active item, keep it active
                    // If not, activate the first item
                    var item = this.active || this.element.find( this.options.items ).eq( 0 );

                    if ( !keepActiveItem ) {
                        this.focus( event, item );
                    }
                },
                blur: function( event ) {
                    this._delay(function() {
                        if ( !$.contains( this.element[0], this.document[0].activeElement ) ) {
                            this.collapseAll( event );
                        }
                    });
                },
                keydown: "_keydown"
            });

            this.refresh();

            // Clicks outside of a menu collapse any open menus
            this._on( this.document, {
                click: function( event ) {
                    if ( this._closeOnDocumentClick( event ) ) {
                        this.collapseAll( event );
                    }

                    // Reset the mouseHandled flag
                    this.mouseHandled = false;
                }
            });
        },

        _destroy: function() {
            // Destroy (sub)menus
            this.element
                .removeAttr( "aria-activedescendant" )
                .find( ".ui-menu" ).addBack()
                .removeClass( "ui-menu ui-widget ui-widget-content ui-menu-icons ui-front" )
                .removeAttr( "role" )
                .removeAttr( "tabIndex" )
                .removeAttr( "aria-labelledby" )
                .removeAttr( "aria-expanded" )
                .removeAttr( "aria-hidden" )
                .removeAttr( "aria-disabled" )
                .removeUniqueId()
                .show();

            // Destroy menu items
            this.element.find( ".ui-menu-item" )
                .removeClass( "ui-menu-item" )
                .removeAttr( "role" )
                .removeAttr( "aria-disabled" )
                .removeUniqueId()
                .removeClass( "ui-state-hover" )
                .removeAttr( "tabIndex" )
                .removeAttr( "role" )
                .removeAttr( "aria-haspopup" )
                .children().each( function() {
                    var elem = $( this );
                    if ( elem.data( "ui-menu-submenu-carat" ) ) {
                        elem.remove();
                    }
                });

            // Destroy menu dividers
            this.element.find( ".ui-menu-divider" ).removeClass( "ui-menu-divider ui-widget-content" );
        },

        _keydown: function( event ) {
            var match, prev, character, skip,
                preventDefault = true;

            switch ( event.keyCode ) {
                case $.ui.keyCode.PAGE_UP:
                    this.previousPage( event );
                    break;
                case $.ui.keyCode.PAGE_DOWN:
                    this.nextPage( event );
                    break;
                case $.ui.keyCode.HOME:
                    this._move( "first", "first", event );
                    break;
                case $.ui.keyCode.END:
                    this._move( "last", "last", event );
                    break;
                case $.ui.keyCode.UP:
                    this.previous( event );
                    break;
                case $.ui.keyCode.DOWN:
                    this.next( event );
                    break;
                case $.ui.keyCode.LEFT:
                    this.collapse( event );
                    break;
                case $.ui.keyCode.RIGHT:
                    if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
                        this.expand( event );
                    }
                    break;
                case $.ui.keyCode.ENTER:
                case $.ui.keyCode.SPACE:
                    this._activate( event );
                    break;
                case $.ui.keyCode.ESCAPE:
                    this.collapse( event );
                    break;
                default:
                    preventDefault = false;
                    prev = this.previousFilter || "";
                    character = String.fromCharCode( event.keyCode );
                    skip = false;

                    clearTimeout( this.filterTimer );

                    if ( character === prev ) {
                        skip = true;
                    } else {
                        character = prev + character;
                    }

                    match = this._filterMenuItems( character );
                    match = skip && match.index( this.active.next() ) !== -1 ?
                        this.active.nextAll( ".ui-menu-item" ) :
                        match;

                    // If no matches on the current filter, reset to the last character pressed
                    // to move down the menu to the first item that starts with that character
                    if ( !match.length ) {
                        character = String.fromCharCode( event.keyCode );
                        match = this._filterMenuItems( character );
                    }

                    if ( match.length ) {
                        this.focus( event, match );
                        this.previousFilter = character;
                        this.filterTimer = this._delay(function() {
                            delete this.previousFilter;
                        }, 1000 );
                    } else {
                        delete this.previousFilter;
                    }
            }

            if ( preventDefault ) {
                event.preventDefault();
            }
        },

        _activate: function( event ) {
            if ( !this.active.is( ".ui-state-disabled" ) ) {
                if ( this.active.is( "[aria-haspopup='true']" ) ) {
                    this.expand( event );
                } else {
                    this.select( event );
                }
            }
        },

        refresh: function() {
            var menus, items,
                that = this,
                icon = this.options.icons.submenu,
                submenus = this.element.find( this.options.menus );

            this.element.toggleClass( "ui-menu-icons", !!this.element.find( ".ui-icon" ).length );

            // Initialize nested menus
            submenus.filter( ":not(.ui-menu)" )
                .addClass( "ui-menu ui-widget ui-widget-content ui-front" )
                .hide()
                .attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                })
                .each(function() {
                    var menu = $( this ),
                        item = menu.parent(),
                        submenuCarat = $( "<span>" )
                            .addClass( "ui-menu-icon ui-icon " + icon )
                            .data( "ui-menu-submenu-carat", true );

                    item
                        .attr( "aria-haspopup", "true" )
                        .prepend( submenuCarat );
                    menu.attr( "aria-labelledby", item.attr( "id" ) );
                });

            menus = submenus.add( this.element );
            items = menus.find( this.options.items );

            // Initialize menu-items containing spaces and/or dashes only as dividers
            items.not( ".ui-menu-item" ).each(function() {
                var item = $( this );
                if ( that._isDivider( item ) ) {
                    item.addClass( "ui-widget-content ui-menu-divider" );
                }
            });

            // Don't refresh list items that are already adapted
            items.not( ".ui-menu-item, .ui-menu-divider" )
                .addClass( "ui-menu-item" )
                .uniqueId()
                .attr({
                    tabIndex: -1,
                    role: this._itemRole()
                });

            // Add aria-disabled attribute to any disabled menu item
            items.filter( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

            // If the active item has been removed, blur the menu
            if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
                this.blur();
            }
        },

        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[ this.options.role ];
        },

        _setOption: function( key, value ) {
            if ( key === "icons" ) {
                this.element.find( ".ui-menu-icon" )
                    .removeClass( this.options.icons.submenu )
                    .addClass( value.submenu );
            }
            if ( key === "disabled" ) {
                this.element
                    .toggleClass( "ui-state-disabled", !!value )
                    .attr( "aria-disabled", value );
            }
            this._super( key, value );
        },

        focus: function( event, item ) {
            var nested, focused;
            this.blur( event, event && event.type === "focus" );

            this._scrollIntoView( item );

            this.active = item.first();
            focused = this.active.addClass( "ui-state-focus" ).removeClass( "ui-state-active" );
            // Only update aria-activedescendant if there's a role
            // otherwise we assume focus is managed elsewhere
            if ( this.options.role ) {
                this.element.attr( "aria-activedescendant", focused.attr( "id" ) );
            }

            // Highlight active parent menu item, if any
            this.active
                .parent()
                .closest( ".ui-menu-item" )
                .addClass( "ui-state-active" );

            if ( event && event.type === "keydown" ) {
                this._close();
            } else {
                this.timer = this._delay(function() {
                    this._close();
                }, this.delay );
            }

            nested = item.children( ".ui-menu" );
            if ( nested.length && event && ( /^mouse/.test( event.type ) ) ) {
                this._startOpening(nested);
            }
            this.activeMenu = item.parent();

            this._trigger( "focus", event, { item: item } );
        },

        _scrollIntoView: function( item ) {
            var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
            if ( this._hasScroll() ) {
                borderTop = parseFloat( $.css( this.activeMenu[0], "borderTopWidth" ) ) || 0;
                paddingTop = parseFloat( $.css( this.activeMenu[0], "paddingTop" ) ) || 0;
                offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
                scroll = this.activeMenu.scrollTop();
                elementHeight = this.activeMenu.height();
                itemHeight = item.outerHeight();

                if ( offset < 0 ) {
                    this.activeMenu.scrollTop( scroll + offset );
                } else if ( offset + itemHeight > elementHeight ) {
                    this.activeMenu.scrollTop( scroll + offset - elementHeight + itemHeight );
                }
            }
        },

        blur: function( event, fromFocus ) {
            if ( !fromFocus ) {
                clearTimeout( this.timer );
            }

            if ( !this.active ) {
                return;
            }

            this.active.removeClass( "ui-state-focus" );
            this.active = null;

            this._trigger( "blur", event, { item: this.active } );
        },

        _startOpening: function( submenu ) {
            clearTimeout( this.timer );

            // Don't open if already open fixes a Firefox bug that caused a .5 pixel
            // shift in the submenu position when mousing over the carat icon
            if ( submenu.attr( "aria-hidden" ) !== "true" ) {
                return;
            }

            this.timer = this._delay(function() {
                this._close();
                this._open( submenu );
            }, this.delay );
        },

        _open: function( submenu ) {
            var position = $.extend({
                of: this.active
            }, this.options.position );

            clearTimeout( this.timer );
            this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
                .hide()
                .attr( "aria-hidden", "true" );

            submenu
                .show()
                .removeAttr( "aria-hidden" )
                .attr( "aria-expanded", "true" )
                .position( position );
        },

        collapseAll: function( event, all ) {
            clearTimeout( this.timer );
            this.timer = this._delay(function() {
                // If we were passed an event, look for the submenu that contains the event
                var currentMenu = all ? this.element :
                    $( event && event.target ).closest( this.element.find( ".ui-menu" ) );

                // If we found no valid submenu ancestor, use the main menu to close all sub menus anyway
                if ( !currentMenu.length ) {
                    currentMenu = this.element;
                }

                this._close( currentMenu );

                this.blur( event );
                this.activeMenu = currentMenu;
            }, this.delay );
        },

        // With no arguments, closes the currently active menu - if nothing is active
        // it closes all menus.  If passed an argument, it will search for menus BELOW
        _close: function( startMenu ) {
            if ( !startMenu ) {
                startMenu = this.active ? this.active.parent() : this.element;
            }

            startMenu
                .find( ".ui-menu" )
                .hide()
                .attr( "aria-hidden", "true" )
                .attr( "aria-expanded", "false" )
                .end()
                .find( ".ui-state-active" ).not( ".ui-state-focus" )
                .removeClass( "ui-state-active" );
        },

        _closeOnDocumentClick: function( event ) {
            return !$( event.target ).closest( ".ui-menu" ).length;
        },

        _isDivider: function( item ) {

            // Match hyphen, em dash, en dash
            return !/[^\-\u2014\u2013\s]/.test( item.text() );
        },

        collapse: function( event ) {
            var newItem = this.active &&
                this.active.parent().closest( ".ui-menu-item", this.element );
            if ( newItem && newItem.length ) {
                this._close();
                this.focus( event, newItem );
            }
        },

        expand: function( event ) {
            var newItem = this.active &&
                this.active
                    .children( ".ui-menu " )
                    .find( this.options.items )
                    .first();

            if ( newItem && newItem.length ) {
                this._open( newItem.parent() );

                // Delay so Firefox will not hide activedescendant change in expanding submenu from AT
                this._delay(function() {
                    this.focus( event, newItem );
                });
            }
        },

        next: function( event ) {
            this._move( "next", "first", event );
        },

        previous: function( event ) {
            this._move( "prev", "last", event );
        },

        isFirstItem: function() {
            return this.active && !this.active.prevAll( ".ui-menu-item" ).length;
        },

        isLastItem: function() {
            return this.active && !this.active.nextAll( ".ui-menu-item" ).length;
        },

        _move: function( direction, filter, event ) {
            var next;
            if ( this.active ) {
                if ( direction === "first" || direction === "last" ) {
                    next = this.active
                        [ direction === "first" ? "prevAll" : "nextAll" ]( ".ui-menu-item" )
                        .eq( -1 );
                } else {
                    next = this.active
                        [ direction + "All" ]( ".ui-menu-item" )
                        .eq( 0 );
                }
            }
            if ( !next || !next.length || !this.active ) {
                next = this.activeMenu.find( this.options.items )[ filter ]();
            }

            this.focus( event, next );
        },

        nextPage: function( event ) {
            var item, base, height;

            if ( !this.active ) {
                this.next( event );
                return;
            }
            if ( this.isLastItem() ) {
                return;
            }
            if ( this._hasScroll() ) {
                base = this.active.offset().top;
                height = this.element.height();
                this.active.nextAll( ".ui-menu-item" ).each(function() {
                    item = $( this );
                    return item.offset().top - base - height < 0;
                });

                this.focus( event, item );
            } else {
                this.focus( event, this.activeMenu.find( this.options.items )
                    [ !this.active ? "first" : "last" ]() );
            }
        },

        previousPage: function( event ) {
            var item, base, height;
            if ( !this.active ) {
                this.next( event );
                return;
            }
            if ( this.isFirstItem() ) {
                return;
            }
            if ( this._hasScroll() ) {
                base = this.active.offset().top;
                height = this.element.height();
                this.active.prevAll( ".ui-menu-item" ).each(function() {
                    item = $( this );
                    return item.offset().top - base + height > 0;
                });

                this.focus( event, item );
            } else {
                this.focus( event, this.activeMenu.find( this.options.items ).first() );
            }
        },

        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop( "scrollHeight" );
        },

        select: function( event ) {
            // TODO: It should never be possible to not have an active item at this
            // point, but the tests don't trigger mouseenter before click.
            this.active = this.active || $( event.target ).closest( ".ui-menu-item" );
            var ui = { item: this.active };
            if ( !this.active.has( ".ui-menu" ).length ) {
                this.collapseAll( event, true );
            }
            this._trigger( "select", event, ui );
        },

        _filterMenuItems: function(character) {
            var escapedCharacter = character.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" ),
                regex = new RegExp( "^" + escapedCharacter, "i" );

            return this.activeMenu
                .find( this.options.items )

                // Only match on items, not dividers or other content (#10571)
                .filter( ".ui-menu-item" )
                .filter(function() {
                    return regex.test( $.trim( $( this ).text() ) );
                });
        }
    });


    /*!
     * jQuery UI Autocomplete 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/autocomplete/
     */


    $.widget( "ui.autocomplete", {
        version: "1.11.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,

            // callbacks
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },

        requestIndex: 0,
        pending: 0,

        _create: function() {
            // Some browsers only repeat keydown events, not keypress events,
            // so we use the suppressKeyPress flag to determine if we've already
            // handled the keydown event. #7269
            // Unfortunately the code for & in keypress is the same as the up arrow,
            // so we use the suppressKeyPressRepeat flag to avoid handling keypress
            // events when we know the keydown event was used to modify the
            // search term. #7799
            var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
                nodeName = this.element[ 0 ].nodeName.toLowerCase(),
                isTextarea = nodeName === "textarea",
                isInput = nodeName === "input";

            this.isMultiLine =
                // Textareas are always multi-line
                isTextarea ? true :
                    // Inputs are always single-line, even if inside a contentEditable element
                    // IE also treats inputs as contentEditable
                    isInput ? false :
                        // All other element types are determined by whether or not they're contentEditable
                        this.element.prop( "isContentEditable" );

            this.valueMethod = this.element[ isTextarea || isInput ? "val" : "text" ];
            this.isNewMenu = true;

            this.element
                .addClass( "ui-autocomplete-input" )
                .attr( "autocomplete", "off" );

            this._on( this.element, {
                keydown: function( event ) {
                    if ( this.element.prop( "readOnly" ) ) {
                        suppressKeyPress = true;
                        suppressInput = true;
                        suppressKeyPressRepeat = true;
                        return;
                    }

                    suppressKeyPress = false;
                    suppressInput = false;
                    suppressKeyPressRepeat = false;
                    var keyCode = $.ui.keyCode;
                    switch ( event.keyCode ) {
                        case keyCode.PAGE_UP:
                            suppressKeyPress = true;
                            this._move( "previousPage", event );
                            break;
                        case keyCode.PAGE_DOWN:
                            suppressKeyPress = true;
                            this._move( "nextPage", event );
                            break;
                        case keyCode.UP:
                            suppressKeyPress = true;
                            this._keyEvent( "previous", event );
                            break;
                        case keyCode.DOWN:
                            suppressKeyPress = true;
                            this._keyEvent( "next", event );
                            break;
                        case keyCode.ENTER:
                            // when menu is open and has focus
                            if ( this.menu.active ) {
                                // #6055 - Opera still allows the keypress to occur
                                // which causes forms to submit
                                suppressKeyPress = true;
                                event.preventDefault();
                                this.menu.select( event );
                            }
                            break;
                        case keyCode.TAB:
                            if ( this.menu.active ) {
                                this.menu.select( event );
                            }
                            break;
                        case keyCode.ESCAPE:
                            if ( this.menu.element.is( ":visible" ) ) {
                                if ( !this.isMultiLine ) {
                                    this._value( this.term );
                                }
                                this.close( event );
                                // Different browsers have different default behavior for escape
                                // Single press can mean undo or clear
                                // Double press in IE means clear the whole form
                                event.preventDefault();
                            }
                            break;
                        default:
                            suppressKeyPressRepeat = true;
                            // search timeout should be triggered before the input value is changed
                            this._searchTimeout( event );
                            break;
                    }
                },
                keypress: function( event ) {
                    if ( suppressKeyPress ) {
                        suppressKeyPress = false;
                        if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
                            event.preventDefault();
                        }
                        return;
                    }
                    if ( suppressKeyPressRepeat ) {
                        return;
                    }

                    // replicate some key handlers to allow them to repeat in Firefox and Opera
                    var keyCode = $.ui.keyCode;
                    switch ( event.keyCode ) {
                        case keyCode.PAGE_UP:
                            this._move( "previousPage", event );
                            break;
                        case keyCode.PAGE_DOWN:
                            this._move( "nextPage", event );
                            break;
                        case keyCode.UP:
                            this._keyEvent( "previous", event );
                            break;
                        case keyCode.DOWN:
                            this._keyEvent( "next", event );
                            break;
                    }
                },
                input: function( event ) {
                    if ( suppressInput ) {
                        suppressInput = false;
                        event.preventDefault();
                        return;
                    }
                    this._searchTimeout( event );
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value();
                },
                blur: function( event ) {
                    if ( this.cancelBlur ) {
                        delete this.cancelBlur;
                        return;
                    }

                    clearTimeout( this.searching );
                    this.close( event );
                    this._change( event );
                }
            });

            this._initSource();
            this.menu = $( "<ul>" )
                .addClass( "ui-autocomplete ui-front" )
                .appendTo( this._appendTo() )
                .menu({
                    // disable ARIA support, the live region takes care of that
                    role: null
                })
                .hide()
                .menu( "instance" );

            this._on( this.menu.element, {
                mousedown: function( event ) {
                    // prevent moving focus out of the text field
                    event.preventDefault();

                    // IE doesn't prevent moving focus even with event.preventDefault()
                    // so we set a flag to know when we should ignore the blur event
                    this.cancelBlur = true;
                    this._delay(function() {
                        delete this.cancelBlur;
                    });

                    // clicking on the scrollbar causes focus to shift to the body
                    // but we can't detect a mouseup or a click immediately afterward
                    // so we have to track the next mousedown and close the menu if
                    // the user clicks somewhere outside of the autocomplete
                    var menuElement = this.menu.element[ 0 ];
                    if ( !$( event.target ).closest( ".ui-menu-item" ).length ) {
                        this._delay(function() {
                            var that = this;
                            this.document.one( "mousedown", function( event ) {
                                if ( event.target !== that.element[ 0 ] &&
                                    event.target !== menuElement &&
                                    !$.contains( menuElement, event.target ) ) {
                                    that.close();
                                }
                            });
                        });
                    }
                },
                menufocus: function( event, ui ) {
                    var label, item;
                    // support: Firefox
                    // Prevent accidental activation of menu items in Firefox (#7024 #9118)
                    if ( this.isNewMenu ) {
                        this.isNewMenu = false;
                        if ( event.originalEvent && /^mouse/.test( event.originalEvent.type ) ) {
                            this.menu.blur();

                            this.document.one( "mousemove", function() {
                                $( event.target ).trigger( event.originalEvent );
                            });

                            return;
                        }
                    }

                    item = ui.item.data( "ui-autocomplete-item" );
                    if ( false !== this._trigger( "focus", event, { item: item } ) ) {
                        // use value to match what will end up in the input, if it was a key event
                        if ( event.originalEvent && /^key/.test( event.originalEvent.type ) ) {
                            this._value( item.value );
                        }
                    }

                    // Announce the value in the liveRegion
                    label = ui.item.attr( "aria-label" ) || item.value;
                    if ( label && $.trim( label ).length ) {
                        this.liveRegion.children().hide();
                        $( "<div>" ).text( label ).appendTo( this.liveRegion );
                    }
                },
                menuselect: function( event, ui ) {
                    var item = ui.item.data( "ui-autocomplete-item" ),
                        previous = this.previous;

                    // only trigger when focus was lost (click on menu)
                    if ( this.element[ 0 ] !== this.document[ 0 ].activeElement ) {
                        this.element.focus();
                        this.previous = previous;
                        // #6109 - IE triggers two focus events and the second
                        // is asynchronous, so we need to reset the previous
                        // term synchronously and asynchronously :-(
                        this._delay(function() {
                            this.previous = previous;
                            this.selectedItem = item;
                        });
                    }

                    if ( false !== this._trigger( "select", event, { item: item } ) ) {
                        this._value( item.value );
                    }
                    // reset the term after the select event
                    // this allows custom select handling to work properly
                    this.term = this._value();

                    this.close( event );
                    this.selectedItem = item;
                }
            });

            this.liveRegion = $( "<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            })
                .addClass( "ui-helper-hidden-accessible" )
                .appendTo( this.document[ 0 ].body );

            // turning off autocomplete prevents the browser from remembering the
            // value when navigating through history, so we re-enable autocomplete
            // if the page is unloaded before the widget is destroyed. #7790
            this._on( this.window, {
                beforeunload: function() {
                    this.element.removeAttr( "autocomplete" );
                }
            });
        },

        _destroy: function() {
            clearTimeout( this.searching );
            this.element
                .removeClass( "ui-autocomplete-input" )
                .removeAttr( "autocomplete" );
            this.menu.element.remove();
            this.liveRegion.remove();
        },

        _setOption: function( key, value ) {
            this._super( key, value );
            if ( key === "source" ) {
                this._initSource();
            }
            if ( key === "appendTo" ) {
                this.menu.element.appendTo( this._appendTo() );
            }
            if ( key === "disabled" && value && this.xhr ) {
                this.xhr.abort();
            }
        },

        _appendTo: function() {
            var element = this.options.appendTo;

            if ( element ) {
                element = element.jquery || element.nodeType ?
                    $( element ) :
                    this.document.find( element ).eq( 0 );
            }

            if ( !element || !element[ 0 ] ) {
                element = this.element.closest( ".ui-front" );
            }

            if ( !element.length ) {
                element = this.document[ 0 ].body;
            }

            return element;
        },

        _initSource: function() {
            var array, url,
                that = this;
            if ( $.isArray( this.options.source ) ) {
                array = this.options.source;
                this.source = function( request, response ) {
                    response( $.ui.autocomplete.filter( array, request.term ) );
                };
            } else if ( typeof this.options.source === "string" ) {
                url = this.options.source;
                this.source = function( request, response ) {
                    if ( that.xhr ) {
                        that.xhr.abort();
                    }
                    that.xhr = $.ajax({
                        url: url,
                        data: request,
                        dataType: "json",
                        success: function( data ) {
                            response( data );
                        },
                        error: function() {
                            response([]);
                        }
                    });
                };
            } else {
                this.source = this.options.source;
            }
        },

        _searchTimeout: function( event ) {
            clearTimeout( this.searching );
            this.searching = this._delay(function() {

                // Search if the value has changed, or if the user retypes the same value (see #7434)
                var equalValues = this.term === this._value(),
                    menuVisible = this.menu.element.is( ":visible" ),
                    modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;

                if ( !equalValues || ( equalValues && !menuVisible && !modifierKey ) ) {
                    this.selectedItem = null;
                    this.search( null, event );
                }
            }, this.options.delay );
        },

        search: function( value, event ) {
            value = value != null ? value : this._value();

            // always save the actual value, not the one passed as an argument
            this.term = this._value();

            if ( value.length < this.options.minLength ) {
                return this.close( event );
            }

            if ( this._trigger( "search", event ) === false ) {
                return;
            }

            return this._search( value );
        },

        _search: function( value ) {
            this.pending++;
            this.element.addClass( "ui-autocomplete-loading" );
            this.cancelSearch = false;

            this.source( { term: value }, this._response() );
        },

        _response: function() {
            var index = ++this.requestIndex;

            return $.proxy(function( content ) {
                if ( index === this.requestIndex ) {
                    this.__response( content );
                }

                this.pending--;
                if ( !this.pending ) {
                    this.element.removeClass( "ui-autocomplete-loading" );
                }
            }, this );
        },

        __response: function( content ) {
            if ( content ) {
                content = this._normalize( content );
            }
            this._trigger( "response", null, { content: content } );
            if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
                this._suggest( content );
                this._trigger( "open" );
            } else {
                // use ._close() instead of .close() so we don't cancel future searches
                this._close();
            }
        },

        close: function( event ) {
            this.cancelSearch = true;
            this._close( event );
        },

        _close: function( event ) {
            if ( this.menu.element.is( ":visible" ) ) {
                this.menu.element.hide();
                this.menu.blur();
                this.isNewMenu = true;
                this._trigger( "close", event );
            }
        },

        _change: function( event ) {
            if ( this.previous !== this._value() ) {
                this._trigger( "change", event, { item: this.selectedItem } );
            }
        },

        _normalize: function( items ) {
            // assume all items have the right format when the first item is complete
            if ( items.length && items[ 0 ].label && items[ 0 ].value ) {
                return items;
            }
            return $.map( items, function( item ) {
                if ( typeof item === "string" ) {
                    return {
                        label: item,
                        value: item
                    };
                }
                return $.extend( {}, item, {
                    label: item.label || item.value,
                    value: item.value || item.label
                });
            });
        },

        _suggest: function( items ) {
            var ul = this.menu.element.empty();
            this._renderMenu( ul, items );
            this.isNewMenu = true;
            this.menu.refresh();

            // size and position menu
            ul.show();
            this._resizeMenu();
            ul.position( $.extend({
                of: this.element
            }, this.options.position ) );

            if ( this.options.autoFocus ) {
                this.menu.next();
            }
        },

        _resizeMenu: function() {
            var ul = this.menu.element;
            ul.outerWidth( Math.max(
                // Firefox wraps long text (possibly a rounding bug)
                // so we add 1px to avoid the wrapping (#7513)
                ul.width( "" ).outerWidth() + 1,
                this.element.outerWidth()
            ) );
        },

        _renderMenu: function( ul, items ) {
            var that = this;
            $.each( items, function( index, item ) {
                that._renderItemData( ul, item );
            });
        },

        _renderItemData: function( ul, item ) {
            return this._renderItem( ul, item ).data( "ui-autocomplete-item", item );
        },

        _renderItem: function( ul, item ) {
            return $( "<li>" ).text( item.label ).appendTo( ul );
        },

        _move: function( direction, event ) {
            if ( !this.menu.element.is( ":visible" ) ) {
                this.search( null, event );
                return;
            }
            if ( this.menu.isFirstItem() && /^previous/.test( direction ) ||
                this.menu.isLastItem() && /^next/.test( direction ) ) {

                if ( !this.isMultiLine ) {
                    this._value( this.term );
                }

                this.menu.blur();
                return;
            }
            this.menu[ direction ]( event );
        },

        widget: function() {
            return this.menu.element;
        },

        _value: function() {
            return this.valueMethod.apply( this.element, arguments );
        },

        _keyEvent: function( keyEvent, event ) {
            if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
                this._move( keyEvent, event );

                // prevents moving cursor to beginning/end of the text field in some browsers
                event.preventDefault();
            }
        }
    });

    $.extend( $.ui.autocomplete, {
        escapeRegex: function( value ) {
            return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
        },
        filter: function( array, term ) {
            var matcher = new RegExp( $.ui.autocomplete.escapeRegex( term ), "i" );
            return $.grep( array, function( value ) {
                return matcher.test( value.label || value.value || value );
            });
        }
    });

// live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
    $.widget( "ui.autocomplete", $.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function( amount ) {
                    return amount + ( amount > 1 ? " results are" : " result is" ) +
                        " available, use up and down arrow keys to navigate.";
                }
            }
        },

        __response: function( content ) {
            var message;
            this._superApply( arguments );
            if ( this.options.disabled || this.cancelSearch ) {
                return;
            }
            if ( content && content.length ) {
                message = this.options.messages.results( content.length );
            } else {
                message = this.options.messages.noResults;
            }
            this.liveRegion.children().hide();
            $( "<div>" ).text( message ).appendTo( this.liveRegion );
        }
    });

    var autocomplete = $.ui.autocomplete;


    /*!
     * jQuery UI Button 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/button/
     */


    var lastActive,
        baseClasses = "ui-button ui-widget ui-state-default ui-corner-all",
        typeClasses = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        formResetHandler = function() {
            var form = $( this );
            setTimeout(function() {
                form.find( ":ui-button" ).button( "refresh" );
            }, 1 );
        },
        radioGroup = function( radio ) {
            var name = radio.name,
                form = radio.form,
                radios = $( [] );
            if ( name ) {
                name = name.replace( /'/g, "\\'" );
                if ( form ) {
                    radios = $( form ).find( "[name='" + name + "'][type=radio]" );
                } else {
                    radios = $( "[name='" + name + "'][type=radio]", radio.ownerDocument )
                        .filter(function() {
                            return !this.form;
                        });
                }
            }
            return radios;
        };

    $.widget( "ui.button", {
        version: "1.11.4",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: true,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest( "form" )
                .unbind( "reset" + this.eventNamespace )
                .bind( "reset" + this.eventNamespace, formResetHandler );

            if ( typeof this.options.disabled !== "boolean" ) {
                this.options.disabled = !!this.element.prop( "disabled" );
            } else {
                this.element.prop( "disabled", this.options.disabled );
            }

            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr( "title" );

            var that = this,
                options = this.options,
                toggleButton = this.type === "checkbox" || this.type === "radio",
                activeClass = !toggleButton ? "ui-state-active" : "";

            if ( options.label === null ) {
                options.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html());
            }

            this._hoverable( this.buttonElement );

            this.buttonElement
                .addClass( baseClasses )
                .attr( "role", "button" )
                .bind( "mouseenter" + this.eventNamespace, function() {
                    if ( options.disabled ) {
                        return;
                    }
                    if ( this === lastActive ) {
                        $( this ).addClass( "ui-state-active" );
                    }
                })
                .bind( "mouseleave" + this.eventNamespace, function() {
                    if ( options.disabled ) {
                        return;
                    }
                    $( this ).removeClass( activeClass );
                })
                .bind( "click" + this.eventNamespace, function( event ) {
                    if ( options.disabled ) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                    }
                });

            // Can't use _focusable() because the element that receives focus
            // and the element that gets the ui-state-focus class are different
            this._on({
                focus: function() {
                    this.buttonElement.addClass( "ui-state-focus" );
                },
                blur: function() {
                    this.buttonElement.removeClass( "ui-state-focus" );
                }
            });

            if ( toggleButton ) {
                this.element.bind( "change" + this.eventNamespace, function() {
                    that.refresh();
                });
            }

            if ( this.type === "checkbox" ) {
                this.buttonElement.bind( "click" + this.eventNamespace, function() {
                    if ( options.disabled ) {
                        return false;
                    }
                });
            } else if ( this.type === "radio" ) {
                this.buttonElement.bind( "click" + this.eventNamespace, function() {
                    if ( options.disabled ) {
                        return false;
                    }
                    $( this ).addClass( "ui-state-active" );
                    that.buttonElement.attr( "aria-pressed", "true" );

                    var radio = that.element[ 0 ];
                    radioGroup( radio )
                        .not( radio )
                        .map(function() {
                            return $( this ).button( "widget" )[ 0 ];
                        })
                        .removeClass( "ui-state-active" )
                        .attr( "aria-pressed", "false" );
                });
            } else {
                this.buttonElement
                    .bind( "mousedown" + this.eventNamespace, function() {
                        if ( options.disabled ) {
                            return false;
                        }
                        $( this ).addClass( "ui-state-active" );
                        lastActive = this;
                        that.document.one( "mouseup", function() {
                            lastActive = null;
                        });
                    })
                    .bind( "mouseup" + this.eventNamespace, function() {
                        if ( options.disabled ) {
                            return false;
                        }
                        $( this ).removeClass( "ui-state-active" );
                    })
                    .bind( "keydown" + this.eventNamespace, function(event) {
                        if ( options.disabled ) {
                            return false;
                        }
                        if ( event.keyCode === $.ui.keyCode.SPACE || event.keyCode === $.ui.keyCode.ENTER ) {
                            $( this ).addClass( "ui-state-active" );
                        }
                    })
                    // see #8559, we bind to blur here in case the button element loses
                    // focus between keydown and keyup, it would be left in an "active" state
                    .bind( "keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                        $( this ).removeClass( "ui-state-active" );
                    });

                if ( this.buttonElement.is("a") ) {
                    this.buttonElement.keyup(function(event) {
                        if ( event.keyCode === $.ui.keyCode.SPACE ) {
                            // TODO pass through original event correctly (just as 2nd argument doesn't work)
                            $( this ).click();
                        }
                    });
                }
            }

            this._setOption( "disabled", options.disabled );
            this._resetButton();
        },

        _determineButtonType: function() {
            var ancestor, labelSelector, checked;

            if ( this.element.is("[type=checkbox]") ) {
                this.type = "checkbox";
            } else if ( this.element.is("[type=radio]") ) {
                this.type = "radio";
            } else if ( this.element.is("input") ) {
                this.type = "input";
            } else {
                this.type = "button";
            }

            if ( this.type === "checkbox" || this.type === "radio" ) {
                // we don't search against the document in case the element
                // is disconnected from the DOM
                ancestor = this.element.parents().last();
                labelSelector = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = ancestor.find( labelSelector );
                if ( !this.buttonElement.length ) {
                    ancestor = ancestor.length ? ancestor.siblings() : this.element.siblings();
                    this.buttonElement = ancestor.filter( labelSelector );
                    if ( !this.buttonElement.length ) {
                        this.buttonElement = ancestor.find( labelSelector );
                    }
                }
                this.element.addClass( "ui-helper-hidden-accessible" );

                checked = this.element.is( ":checked" );
                if ( checked ) {
                    this.buttonElement.addClass( "ui-state-active" );
                }
                this.buttonElement.prop( "aria-pressed", checked );
            } else {
                this.buttonElement = this.element;
            }
        },

        widget: function() {
            return this.buttonElement;
        },

        _destroy: function() {
            this.element
                .removeClass( "ui-helper-hidden-accessible" );
            this.buttonElement
                .removeClass( baseClasses + " ui-state-active " + typeClasses )
                .removeAttr( "role" )
                .removeAttr( "aria-pressed" )
                .html( this.buttonElement.find(".ui-button-text").html() );

            if ( !this.hasTitle ) {
                this.buttonElement.removeAttr( "title" );
            }
        },

        _setOption: function( key, value ) {
            this._super( key, value );
            if ( key === "disabled" ) {
                this.widget().toggleClass( "ui-state-disabled", !!value );
                this.element.prop( "disabled", !!value );
                if ( value ) {
                    if ( this.type === "checkbox" || this.type === "radio" ) {
                        this.buttonElement.removeClass( "ui-state-focus" );
                    } else {
                        this.buttonElement.removeClass( "ui-state-focus ui-state-active" );
                    }
                }
                return;
            }
            this._resetButton();
        },

        refresh: function() {
            //See #8237 & #8828
            var isDisabled = this.element.is( "input, button" ) ? this.element.is( ":disabled" ) : this.element.hasClass( "ui-button-disabled" );

            if ( isDisabled !== this.options.disabled ) {
                this._setOption( "disabled", isDisabled );
            }
            if ( this.type === "radio" ) {
                radioGroup( this.element[0] ).each(function() {
                    if ( $( this ).is( ":checked" ) ) {
                        $( this ).button( "widget" )
                            .addClass( "ui-state-active" )
                            .attr( "aria-pressed", "true" );
                    } else {
                        $( this ).button( "widget" )
                            .removeClass( "ui-state-active" )
                            .attr( "aria-pressed", "false" );
                    }
                });
            } else if ( this.type === "checkbox" ) {
                if ( this.element.is( ":checked" ) ) {
                    this.buttonElement
                        .addClass( "ui-state-active" )
                        .attr( "aria-pressed", "true" );
                } else {
                    this.buttonElement
                        .removeClass( "ui-state-active" )
                        .attr( "aria-pressed", "false" );
                }
            }
        },

        _resetButton: function() {
            if ( this.type === "input" ) {
                if ( this.options.label ) {
                    this.element.val( this.options.label );
                }
                return;
            }
            var buttonElement = this.buttonElement.removeClass( typeClasses ),
                buttonText = $( "<span></span>", this.document[0] )
                    .addClass( "ui-button-text" )
                    .html( this.options.label )
                    .appendTo( buttonElement.empty() )
                    .text(),
                icons = this.options.icons,
                multipleIcons = icons.primary && icons.secondary,
                buttonClasses = [];

            if ( icons.primary || icons.secondary ) {
                if ( this.options.text ) {
                    buttonClasses.push( "ui-button-text-icon" + ( multipleIcons ? "s" : ( icons.primary ? "-primary" : "-secondary" ) ) );
                }

                if ( icons.primary ) {
                    buttonElement.prepend( "<span class='ui-button-icon-primary ui-icon " + icons.primary + "'></span>" );
                }

                if ( icons.secondary ) {
                    buttonElement.append( "<span class='ui-button-icon-secondary ui-icon " + icons.secondary + "'></span>" );
                }

                if ( !this.options.text ) {
                    buttonClasses.push( multipleIcons ? "ui-button-icons-only" : "ui-button-icon-only" );

                    if ( !this.hasTitle ) {
                        buttonElement.attr( "title", $.trim( buttonText ) );
                    }
                }
            } else {
                buttonClasses.push( "ui-button-text-only" );
            }
            buttonElement.addClass( buttonClasses.join( " " ) );
        }
    });

    $.widget( "ui.buttonset", {
        version: "1.11.4",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },

        _create: function() {
            this.element.addClass( "ui-buttonset" );
        },

        _init: function() {
            this.refresh();
        },

        _setOption: function( key, value ) {
            if ( key === "disabled" ) {
                this.buttons.button( "option", key, value );
            }

            this._super( key, value );
        },

        refresh: function() {
            var rtl = this.element.css( "direction" ) === "rtl",
                allButtons = this.element.find( this.options.items ),
                existingButtons = allButtons.filter( ":ui-button" );

            // Initialize new buttons
            allButtons.not( ":ui-button" ).button();

            // Refresh existing buttons
            existingButtons.button( "refresh" );

            this.buttons = allButtons
                .map(function() {
                    return $( this ).button( "widget" )[ 0 ];
                })
                .removeClass( "ui-corner-all ui-corner-left ui-corner-right" )
                .filter( ":first" )
                .addClass( rtl ? "ui-corner-right" : "ui-corner-left" )
                .end()
                .filter( ":last" )
                .addClass( rtl ? "ui-corner-left" : "ui-corner-right" )
                .end()
                .end();
        },

        _destroy: function() {
            this.element.removeClass( "ui-buttonset" );
            this.buttons
                .map(function() {
                    return $( this ).button( "widget" )[ 0 ];
                })
                .removeClass( "ui-corner-left ui-corner-right" )
                .end()
                .button( "destroy" );
        }
    });

    var button = $.ui.button;


    /*!
     * jQuery UI Datepicker 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/datepicker/
     */


    $.extend($.ui, { datepicker: { version: "1.11.4" } });

    var datepicker_instActive;

    function datepicker_getZindex( elem ) {
        var position, value;
        while ( elem.length && elem[ 0 ] !== document ) {
            // Ignore z-index if position is set to a value where z-index is ignored by the browser
            // This makes behavior of this function consistent across browsers
            // WebKit always returns auto if the element is positioned
            position = elem.css( "position" );
            if ( position === "absolute" || position === "relative" || position === "fixed" ) {
                // IE returns 0 when zIndex is not specified
                // other browsers return a string
                // we ignore the case of nested elements with an explicit value of 0
                // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                value = parseInt( elem.css( "zIndex" ), 10 );
                if ( !isNaN( value ) && value !== 0 ) {
                    return value;
                }
            }
            elem = elem.parent();
        }

        return 0;
    }
    /* Date picker manager.
     Use the singleton instance of this class, $.datepicker, to interact with the date picker.
     Settings for (groups of) date pickers are maintained in an instance object,
     allowing multiple different settings on the same page. */

    function Datepicker() {
        this._curInst = null; // The current instance in use
        this._keyEvent = false; // If the last event was a key event
        this._disabledInputs = []; // List of date picker inputs that have been disabled
        this._datepickerShowing = false; // True if the popup picker is showing , false if not
        this._inDialog = false; // True if showing within a "dialog", false if not
        this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
        this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
        this._appendClass = "ui-datepicker-append"; // The name of the append marker class
        this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
        this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
        this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
        this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
        this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
        this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
        this.regional = []; // Available regional settings, indexed by language code
        this.regional[""] = { // Default regional settings
            closeText: "Done", // Display text for close link
            prevText: "Prev", // Display text for previous month link
            nextText: "Next", // Display text for next month link
            currentText: "Today", // Display text for current month link

            //日历 英文
            //monthNames: ["January","February","March","April","May","June",
            //    "July","August","September","October","November","December"], // Names of months for drop-down and formatting
            //monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // For formatting
            //dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], // For formatting
            //dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // For formatting
            //dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"], // Column headings for days starting at Sunday


            monthNames: ["一月","二月","三月","四月","五月","六月",
                "七月","八月","九月","十月","十一月","十二月"], // Names of months for drop-down and formatting
            monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], // For formatting
            dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], // For formatting
            dayNamesShort: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], // For formatting
            dayNamesMin: ["日","一","二","三","四","五","六"], // Column headings for days starting at Sunday


            //日历 中文
            //monthNames: ["һ��","����","����","����","����","����",
            //"����","����","����","ʮ��","ʮһ��","ʮ����"], // Names of months for drop-down and formatting
            //monthNamesShort: ["һ��", "����", "����", "����", "����", "����", "����", "����", "����", "ʮ��", "ʮһ��", "ʮ����"], // For formatting
            //dayNames: ["������", "����һ", "���ڶ�", "������", "������", "������", "������"], // For formatting
            //dayNamesShort: ["������", "����һ", "���ڶ�", "������", "������", "������", "������"], // For formatting
            //dayNamesMin: ["��", "һ", "��", "��", "��", "��", "��"], // Column headings for days starting

            weekHeader: "Wk", // Column header for week of the year
            dateFormat: "yy-mm-dd", // See format options on parseDate
            firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
            isRTL: false, // True if right-to-left language, false if left-to-right
            showMonthAfterYear: false, // True if the year select precedes month, false for month then year
            yearSuffix: "" // Additional text to append to the year in the month headers
        };
        this._defaults = { // Global defaults for all the date picker instances
            showOn: "focus", // "focus" for popup on focus,
            // "button" for trigger button, or "both" for either
            showAnim: "fadeIn", // Name of jQuery animation for popup
            showOptions: {}, // Options for enhanced animations
            defaultDate: null, // Used when field is blank: actual date,
            // +/-number for offset from today, null for today
            appendText: "", // Display text following the input box, e.g. showing the format
            buttonText: "...", // Text for trigger button
            buttonImage: "", // URL for trigger button image
            buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
            hideIfNoPrevNext: false, // True to hide next/previous month links
            // if not applicable, false to just disable them
            navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
            gotoCurrent: false, // True if today link goes back to current selection instead
            changeMonth: false, // True if month can be selected directly, false if only prev/next
            changeYear: false, // True if year can be selected directly, false if only prev/next
            yearRange: "c-10:c+10", // Range of years to display in drop-down,
            // either relative to today's year (-nn:+nn), relative to currently displayed year
            // (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
            showOtherMonths: false, // True to show dates in other months, false to leave blank
            selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
            showWeek: false, // True to show week of the year, false to not show it
            calculateWeek: this.iso8601Week, // How to calculate the week of the year,
            // takes a Date and returns the number of the week for it
            shortYearCutoff: "+10", // Short year values < this are in the current century,
            // > this are in the previous century,
            // string value starting with "+" for current year + value
            minDate: null, // The earliest selectable date, or null for no limit
            maxDate: null, // The latest selectable date, or null for no limit
            duration: "fast", // Duration of display/closure
            beforeShowDay: null, // Function that takes a date and returns an array with
            // [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
            // [2] = cell title (optional), e.g. $.datepicker.noWeekends
            beforeShow: null, // Function that takes an input field and
            // returns a set of custom settings for the date picker
            onSelect: null, // Define a callback function when a date is selected
            onChangeMonthYear: null, // Define a callback function when the month or year is changed
            onClose: null, // Define a callback function when the datepicker is closed
            numberOfMonths: 1, // Number of months to show at a time
            showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
            stepMonths: 1, // Number of months to step back/forward
            stepBigMonths: 12, // Number of months to step back/forward for the big links
            altField: "", // Selector for an alternate field to store selected dates into
            altFormat: "", // The date format to use for the alternate field
            constrainInput: true, // The input is constrained by the current date format
            showButtonPanel: false, // True to show button panel, false to not show it
            autoSize: false, // True to size the input for the date format, false to leave as is
            disabled: false, // The initial disabled state
            calendarParent:'body'
        };
        $.extend(this._defaults, this.regional[""]);
        this.regional.en = $.extend( true, {}, this.regional[ "" ]);
        this.regional[ "en-US" ] = $.extend( true, {}, this.regional.en );
        this.dpDiv = datepicker_bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }

    $.extend(Datepicker.prototype, {
        /* Class name added to elements to indicate already configured with a date picker. */
        markerClassName: "hasDatepicker",

        //Keep track of the maximum number of rows displayed (see #7043)
        maxRows: 4,

        // TODO rename to "widget" when switching to widget factory
        _widgetDatepicker: function() {
            return this.dpDiv;
        },

        /* Override the default settings for all instances of the date picker.
         * @param  settings  object - the new settings to use as defaults (anonymous object)
         * @return the manager object
         */
        setDefaults: function(settings) {
            datepicker_extendRemove(this._defaults, settings || {});
            return this;
        },

        /* Attach the date picker to a jQuery selection.
         * @param  target	element - the target input field or division or span
         * @param  settings  object - the new settings to use for this date picker instance (anonymous)
         */
        _attachDatepicker: function(target, settings) {
            var nodeName, inline, inst;
            nodeName = target.nodeName.toLowerCase();
            inline = (nodeName === "div" || nodeName === "span");
            if (!target.id) {
                this.uuid += 1;
                target.id = "dp" + this.uuid;
            }
            inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {});
            if (nodeName === "input") {
                this._connectDatepicker(target, inst);
            } else if (inline) {
                this._inlineDatepicker(target, inst);
            }
        },

        /* Create a new instance object. */
        _newInst: function(target, inline) {
            var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); // escape jQuery meta chars
            return {id: id, input: target, // associated target
                selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
                drawMonth: 0, drawYear: 0, // month being drawn
                inline: inline, // is datepicker inline or not
                dpDiv: (!inline ? this.dpDiv : // presentation div
                    datepicker_bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))};
        },

        /* Attach the date picker to an input field. */
        _connectDatepicker: function(target, inst) {
            var input = $(target);
            inst.append = $([]);
            inst.trigger = $([]);
            if (input.hasClass(this.markerClassName)) {
                return;
            }
            this._attachments(input, inst);
            input.addClass(this.markerClassName).keydown(this._doKeyDown).
                keypress(this._doKeyPress).keyup(this._doKeyUp);
            this._autoSize(inst);
            $.data(target, "datepicker", inst);
            //If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
            if( inst.settings.disabled ) {
                this._disableDatepicker( target );
            }
        },

        /* Make attachments based on settings. */
        _attachments: function(input, inst) {
            var showOn, buttonText, buttonImage,
                appendText = this._get(inst, "appendText"),
                isRTL = this._get(inst, "isRTL");

            if (inst.append) {
                inst.append.remove();
            }
            if (appendText) {
                inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>");
                input[isRTL ? "before" : "after"](inst.append);
            }

            input.unbind("focus", this._showDatepicker);

            if (inst.trigger) {
                inst.trigger.remove();
            }

            showOn = this._get(inst, "showOn");
            if (showOn === "focus" || showOn === "both") { // pop-up date picker when in the marked field
                input.focus(this._showDatepicker);
            }
            if (showOn === "button" || showOn === "both") { // pop-up date picker when button clicked
                buttonText = this._get(inst, "buttonText");
                buttonImage = this._get(inst, "buttonImage");
                inst.trigger = $(this._get(inst, "buttonImageOnly") ?
                    $("<img/>").addClass(this._triggerClass).
                        attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
                    $("<button type='button'></button>").addClass(this._triggerClass).
                        html(!buttonImage ? buttonText : $("<img/>").attr(
                            { src:buttonImage, alt:buttonText, title:buttonText })));
                input[isRTL ? "before" : "after"](inst.trigger);
                inst.trigger.click(function() {
                    if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) {
                        $.datepicker._hideDatepicker();
                    } else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) {
                        $.datepicker._hideDatepicker();
                        $.datepicker._showDatepicker(input[0]);
                    } else {
                        $.datepicker._showDatepicker(input[0]);
                    }
                    return false;
                });
            }
        },

        /* Apply the maximum length for the date format. */
        _autoSize: function(inst) {
            if (this._get(inst, "autoSize") && !inst.inline) {
                var findMax, max, maxI, i,
                    date = new Date(2009, 12 - 1, 20), // Ensure double digits
                    dateFormat = this._get(inst, "dateFormat");

                if (dateFormat.match(/[DM]/)) {
                    findMax = function(names) {
                        max = 0;
                        maxI = 0;
                        for (i = 0; i < names.length; i++) {
                            if (names[i].length > max) {
                                max = names[i].length;
                                maxI = i;
                            }
                        }
                        return maxI;
                    };
                    date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
                        "monthNames" : "monthNamesShort"))));
                    date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
                            "dayNames" : "dayNamesShort"))) + 20 - date.getDay());
                }
                inst.input.attr("size", this._formatDate(inst, date).length);
            }
        },

        /* Attach an inline date picker to a div. */
        _inlineDatepicker: function(target, inst) {
            var divSpan = $(target);
            if (divSpan.hasClass(this.markerClassName)) {
                return;
            }
            divSpan.addClass(this.markerClassName).append(inst.dpDiv);
            $.data(target, "datepicker", inst);
            this._setDate(inst, this._getDefaultDate(inst), true);
            this._updateDatepicker(inst);
            this._updateAlternate(inst);
            //If disabled option is true, disable the datepicker before showing it (see ticket #5665)
            if( inst.settings.disabled ) {
                this._disableDatepicker( target );
            }
            // Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
            // http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
            inst.dpDiv.css( "display", "block" );
        },

        /* Pop-up the date picker in a "dialog" box.
         * @param  input element - ignored
         * @param  date	string or Date - the initial date to display
         * @param  onSelect  function - the function to call when a date is selected
         * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
         * @param  pos int[2] - coordinates for the dialog's position within the screen or
         *					event - with x/y coordinates or
         *					leave empty for default (screen centre)
         * @return the manager object
         */
        _dialogDatepicker: function(input, date, onSelect, settings, pos) {
            var id, browserWidth, browserHeight, scrollX, scrollY,
                inst = this._dialogInst; // internal instance

            if (!inst) {
                this.uuid += 1;
                id = "dp" + this.uuid;
                this._dialogInput = $("<input type='text' id='" + id +
                    "' style='position: absolute; top: -100px; width: 0px;'/>");
                this._dialogInput.keydown(this._doKeyDown);
                $("body").append(this._dialogInput);
                inst = this._dialogInst = this._newInst(this._dialogInput, false);
                inst.settings = {};
                $.data(this._dialogInput[0], "datepicker", inst);
            }
            datepicker_extendRemove(inst.settings, settings || {});
            date = (date && date.constructor === Date ? this._formatDate(inst, date) : date);
            this._dialogInput.val(date);

            this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
            if (!this._pos) {
                browserWidth = document.documentElement.clientWidth;
                browserHeight = document.documentElement.clientHeight;
                scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = // should use actual width/height below
                    [(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
            }

            // move input on screen for focus, but hidden behind dialog
            this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
            inst.settings.onSelect = onSelect;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if ($.blockUI) {
                $.blockUI(this.dpDiv);
            }
            $.data(this._dialogInput[0], "datepicker", inst);
            return this;
        },

        /* Detach a datepicker from its control.
         * @param  target	element - the target input field or division or span
         */
        _destroyDatepicker: function(target) {
            var nodeName,
                $target = $(target),
                inst = $.data(target, "datepicker");

            if (!$target.hasClass(this.markerClassName)) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            $.removeData(target, "datepicker");
            if (nodeName === "input") {
                inst.append.remove();
                inst.trigger.remove();
                $target.removeClass(this.markerClassName).
                    unbind("focus", this._showDatepicker).
                    unbind("keydown", this._doKeyDown).
                    unbind("keypress", this._doKeyPress).
                    unbind("keyup", this._doKeyUp);
            } else if (nodeName === "div" || nodeName === "span") {
                $target.removeClass(this.markerClassName).empty();
            }

            if ( datepicker_instActive === inst ) {
                datepicker_instActive = null;
            }
        },

        /* Enable the date picker to a jQuery selection.
         * @param  target	element - the target input field or division or span
         */
        _enableDatepicker: function(target) {
            var nodeName, inline,
                $target = $(target),
                inst = $.data(target, "datepicker");

            if (!$target.hasClass(this.markerClassName)) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            if (nodeName === "input") {
                target.disabled = false;
                inst.trigger.filter("button").
                    each(function() { this.disabled = false; }).end().
                    filter("img").css({opacity: "1.0", cursor: ""});
            } else if (nodeName === "div" || nodeName === "span") {
                inline = $target.children("." + this._inlineClass);
                inline.children().removeClass("ui-state-disabled");
                inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
                    prop("disabled", false);
            }
            this._disabledInputs = $.map(this._disabledInputs,
                function(value) { return (value === target ? null : value); }); // delete entry
        },

        /* Disable the date picker to a jQuery selection.
         * @param  target	element - the target input field or division or span
         */
        _disableDatepicker: function(target) {
            var nodeName, inline,
                $target = $(target),
                inst = $.data(target, "datepicker");

            if (!$target.hasClass(this.markerClassName)) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            if (nodeName === "input") {
                target.disabled = true;
                inst.trigger.filter("button").
                    each(function() { this.disabled = true; }).end().
                    filter("img").css({opacity: "0.5", cursor: "default"});
            } else if (nodeName === "div" || nodeName === "span") {
                inline = $target.children("." + this._inlineClass);
                inline.children().addClass("ui-state-disabled");
                inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
                    prop("disabled", true);
            }
            this._disabledInputs = $.map(this._disabledInputs,
                function(value) { return (value === target ? null : value); }); // delete entry
            this._disabledInputs[this._disabledInputs.length] = target;
        },

        /* Is the first field in a jQuery collection disabled as a datepicker?
         * @param  target	element - the target input field or division or span
         * @return boolean - true if disabled, false if enabled
         */
        _isDisabledDatepicker: function(target) {
            if (!target) {
                return false;
            }
            for (var i = 0; i < this._disabledInputs.length; i++) {
                if (this._disabledInputs[i] === target) {
                    return true;
                }
            }
            return false;
        },

        /* Retrieve the instance data for the target control.
         * @param  target  element - the target input field or division or span
         * @return  object - the associated instance data
         * @throws  error if a jQuery problem getting data
         */
        _getInst: function(target) {
            try {
                return $.data(target, "datepicker");
            }
            catch (err) {
                throw "Missing instance data for this datepicker";
            }
        },

        /* Update or retrieve the settings for a date picker attached to an input field or division.
         * @param  target  element - the target input field or division or span
         * @param  name	object - the new settings to update or
         *				string - the name of the setting to change or retrieve,
         *				when retrieving also "all" for all instance settings or
         *				"defaults" for all global defaults
         * @param  value   any - the new value for the setting
         *				(omit if above is an object or to retrieve a value)
         */
        _optionDatepicker: function(target, name, value) {
            var settings, date, minDate, maxDate,
                inst = this._getInst(target);
            if (arguments.length === 2 && typeof name === "string") {
                return (name === "defaults" ? $.extend({}, $.datepicker._defaults) :
                    (inst ? (name === "all" ? $.extend({}, inst.settings) :
                        this._get(inst, name)) : null));
            }

            settings = name || {};
            if (typeof name === "string") {
                settings = {};
                settings[name] = value;
            }

            if (inst) {
                if (this._curInst === inst) {
                    this._hideDatepicker();
                }

                date = this._getDateDatepicker(target, true);
                minDate = this._getMinMaxDate(inst, "min");
                maxDate = this._getMinMaxDate(inst, "max");
                datepicker_extendRemove(inst.settings, settings);
                // reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
                if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
                    inst.settings.minDate = this._formatDate(inst, minDate);
                }
                if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
                    inst.settings.maxDate = this._formatDate(inst, maxDate);
                }
                if ( "disabled" in settings ) {
                    if ( settings.disabled ) {
                        this._disableDatepicker(target);
                    } else {
                        this._enableDatepicker(target);
                    }
                }
                this._attachments($(target), inst);
                this._autoSize(inst);
                this._setDate(inst, date);
                this._updateAlternate(inst);
                this._updateDatepicker(inst);
            }
        },

        // change method deprecated
        _changeDatepicker: function(target, name, value) {
            this._optionDatepicker(target, name, value);
        },

        /* Redraw the date picker attached to an input field or division.
         * @param  target  element - the target input field or division or span
         */
        _refreshDatepicker: function(target) {
            var inst = this._getInst(target);
            if (inst) {
                this._updateDatepicker(inst);
            }
        },

        /* Set the dates for a jQuery selection.
         * @param  target element - the target input field or division or span
         * @param  date	Date - the new date
         */
        _setDateDatepicker: function(target, date) {
            var inst = this._getInst(target);
            if (inst) {
                this._setDate(inst, date);
                this._updateDatepicker(inst);
                this._updateAlternate(inst);
            }
        },

        /* Get the date(s) for the first entry in a jQuery selection.
         * @param  target element - the target input field or division or span
         * @param  noDefault boolean - true if no default date is to be used
         * @return Date - the current date
         */
        _getDateDatepicker: function(target, noDefault) {
            var inst = this._getInst(target);
            if (inst && !inst.inline) {
                this._setDateFromField(inst, noDefault);
            }
            return (inst ? this._getDate(inst) : null);
        },

        /* Handle keystrokes. */
        _doKeyDown: function(event) {
            var onSelect, dateStr, sel,
                inst = $.datepicker._getInst(event.target),
                handled = true,
                isRTL = inst.dpDiv.is(".ui-datepicker-rtl");

            inst._keyEvent = true;
            if ($.datepicker._datepickerShowing) {
                switch (event.keyCode) {
                    case 9: $.datepicker._hideDatepicker();
                        handled = false;
                        break; // hide on tab out
                    case 13: sel = $("td." + $.datepicker._dayOverClass + ":not(." +
                        $.datepicker._currentClass + ")", inst.dpDiv);
                        if (sel[0]) {
                            $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
                        }

                        onSelect = $.datepicker._get(inst, "onSelect");
                        if (onSelect) {
                            dateStr = $.datepicker._formatDate(inst);

                            // trigger custom callback
                            onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
                        } else {
                            $.datepicker._hideDatepicker();
                        }

                        return false; // don't submit the form
                    case 27: $.datepicker._hideDatepicker();
                        break; // hide on escape
                    case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                        -$.datepicker._get(inst, "stepBigMonths") :
                        -$.datepicker._get(inst, "stepMonths")), "M");
                        break; // previous month/year on page up/+ ctrl
                    case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                        +$.datepicker._get(inst, "stepBigMonths") :
                        +$.datepicker._get(inst, "stepMonths")), "M");
                        break; // next month/year on page down/+ ctrl
                    case 35: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._clearDate(event.target);
                    }
                        handled = event.ctrlKey || event.metaKey;
                        break; // clear on ctrl or command +end
                    case 36: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._gotoToday(event.target);
                    }
                        handled = event.ctrlKey || event.metaKey;
                        break; // current on ctrl or command +home
                    case 37: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D");
                    }
                        handled = event.ctrlKey || event.metaKey;
                        // -1 day on ctrl or command +left
                        if (event.originalEvent.altKey) {
                            $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                                -$.datepicker._get(inst, "stepBigMonths") :
                                -$.datepicker._get(inst, "stepMonths")), "M");
                        }
                        // next month/year on alt +left on Mac
                        break;
                    case 38: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, -7, "D");
                    }
                        handled = event.ctrlKey || event.metaKey;
                        break; // -1 week on ctrl or command +up
                    case 39: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D");
                    }
                        handled = event.ctrlKey || event.metaKey;
                        // +1 day on ctrl or command +right
                        if (event.originalEvent.altKey) {
                            $.datepicker._adjustDate(event.target, (event.ctrlKey ?
                                +$.datepicker._get(inst, "stepBigMonths") :
                                +$.datepicker._get(inst, "stepMonths")), "M");
                        }
                        // next month/year on alt +right
                        break;
                    case 40: if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, +7, "D");
                    }
                        handled = event.ctrlKey || event.metaKey;
                        break; // +1 week on ctrl or command +down
                    default: handled = false;
                }
            } else if (event.keyCode === 36 && event.ctrlKey) { // display the date picker on ctrl+home
                $.datepicker._showDatepicker(this);
            } else {
                handled = false;
            }

            if (handled) {
                event.preventDefault();
                event.stopPropagation();
            }
        },

        /* Filter entered characters - based on date format. */
        _doKeyPress: function(event) {
            var chars, chr,
                inst = $.datepicker._getInst(event.target);

            if ($.datepicker._get(inst, "constrainInput")) {
                chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
                chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
                return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1);
            }
        },

        /* Synchronise manual entry and field/alternate field. */
        _doKeyUp: function(event) {
            var date,
                inst = $.datepicker._getInst(event.target);

            if (inst.input.val() !== inst.lastVal) {
                try {
                    date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
                        (inst.input ? inst.input.val() : null),
                        $.datepicker._getFormatConfig(inst));

                    if (date) { // only if valid
                        $.datepicker._setDateFromField(inst);
                        $.datepicker._updateAlternate(inst);
                        $.datepicker._updateDatepicker(inst);
                    }
                }
                catch (err) {
                }
            }
            return true;
        },

        /* Pop-up the date picker for a given input field.
         * If false returned from beforeShow event handler do not show.
         * @param  input  element - the input field attached to the date picker or
         *					event - if triggered by focus
         */
        _showDatepicker: function(input) {
            input = input.target || input;
            if (input.nodeName.toLowerCase() !== "input") { // find from button/image trigger
                input = $("input", input.parentNode)[0];
            }

            if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) { // already here
                return;
            }

            var inst, beforeShow, beforeShowSettings, isFixed,
                offset, showAnim, duration;

            inst = $.datepicker._getInst(input);
            if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
                $.datepicker._curInst.dpDiv.stop(true, true);
                if ( inst && $.datepicker._datepickerShowing ) {
                    $.datepicker._hideDatepicker( $.datepicker._curInst.input[0] );
                }
            }

            beforeShow = $.datepicker._get(inst, "beforeShow");
            beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
            if(beforeShowSettings === false){
                return;
            }
            datepicker_extendRemove(inst.settings, beforeShowSettings);

            inst.lastVal = null;
            $.datepicker._lastInput = input;
            $.datepicker._setDateFromField(inst);

            if ($.datepicker._inDialog) { // hide cursor
                input.value = "";
            }
            if (!$.datepicker._pos) { // position below input
                $.datepicker._pos = $.datepicker._findPos(input);
                $.datepicker._pos[1] += input.offsetHeight; // add the height
            }

            isFixed = false;
            $(input).parents().each(function() {
                isFixed |= $(this).css("position") === "fixed";
                return !isFixed;
            });

            offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
            $.datepicker._pos = null;
            //to avoid flashes on Firefox
            inst.dpDiv.empty();
            // determine sizing offscreen
            inst.dpDiv.css({position: "absolute", display: "block", top: "-1000px"});
            $.datepicker._updateDatepicker(inst);
            // fix width for dynamic number of date pickers
            // and adjust position before showing
            offset = $.datepicker._checkOffset(inst, offset, isFixed);
            var oleft=offset.left-$(inst.settings.calendarParent).offset().left;
            var otop=offset.top-$(inst.settings.calendarParent).offset().top;
            inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
                "static" : (isFixed ? "fixed" : "absolute")), display: "none",
                left: oleft + "px", top: otop + "px"});

            if (!inst.inline) {
                showAnim = $.datepicker._get(inst, "showAnim");
                duration = $.datepicker._get(inst, "duration");
                inst.dpDiv.css( "z-index", datepicker_getZindex( $( input ) ) + 1 );
                $.datepicker._datepickerShowing = true;

                if ( $.effects && $.effects.effect[ showAnim ] ) {
                    inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration);
                } else {
                    inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
                }

                if ( $.datepicker._shouldFocusInput( inst ) ) {
                    inst.input.focus();
                }

                $.datepicker._curInst = inst;
            }
        },

        /* Generate the date picker content. */
        _updateDatepicker: function(inst) {
            this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
            datepicker_instActive = inst; // for delegate hover events
            inst.dpDiv.empty().append(this._generateHTML(inst));
            this._attachHandlers(inst);

            var origyearshtml,
                numMonths = this._getNumberOfMonths(inst),
                cols = numMonths[1],
                width = 17,
                activeCell = inst.dpDiv.find( "." + this._dayOverClass + " a" );

            if ( activeCell.length > 0 ) {
                datepicker_handleMouseover.apply( activeCell.get( 0 ) );
            }

            inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (cols > 1) {
                inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em");
            }
            inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") +
            "Class"]("ui-datepicker-multi");
            inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") +
            "Class"]("ui-datepicker-rtl");

            if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput( inst ) ) {
                inst.input.focus();
            }

            // deffered render of the years select (to avoid flashes on Firefox)
            if( inst.yearshtml ){
                origyearshtml = inst.yearshtml;
                setTimeout(function(){
                    //assure that inst.yearshtml didn't change.
                    if( origyearshtml === inst.yearshtml && inst.yearshtml ){
                        inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
                    }
                    origyearshtml = inst.yearshtml = null;
                }, 0);
            }
        },

        // #6694 - don't focus the input if it's already focused
        // this breaks the change event in IE
        // Support: IE and jQuery <1.9
        _shouldFocusInput: function( inst ) {
            return inst.input && inst.input.is( ":visible" ) && !inst.input.is( ":disabled" ) && !inst.input.is( ":focus" );
        },

        /* Check positioning to remain on screen. */
        _checkOffset: function(inst, offset, isFixed) {
            var dpWidth = inst.dpDiv.outerWidth(),
                dpHeight = inst.dpDiv.outerHeight(),
                inputWidth = inst.input ? inst.input.outerWidth() : 0,
                inputHeight = inst.input ? inst.input.outerHeight() : 0,
                viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()),
                viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

            offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
            offset.left -= (isFixed && offset.left === inst.input.offset().left) ? $(document).scrollLeft() : 0;
            offset.top -= (isFixed && offset.top === (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

            // now check if datepicker is showing outside window viewport - move to a better place if so.
            offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
                Math.abs(offset.left + dpWidth - viewWidth) : 0);
            offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
                Math.abs(dpHeight + inputHeight) : 0);

            return offset;
        },

        /* Find an object's position on the screen. */
        _findPos: function(obj) {
            var position,
                inst = this._getInst(obj),
                isRTL = this._get(inst, "isRTL");

            while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) {
                obj = obj[isRTL ? "previousSibling" : "nextSibling"];
            }

            position = $(obj).offset();
            return [position.left, position.top];
        },

        /* Hide the date picker from view.
         * @param  input  element - the input field attached to the date picker
         */
        _hideDatepicker: function(input) {
            var showAnim, duration, postProcess, onClose,
                inst = this._curInst;

            if (!inst || (input && inst !== $.data(input, "datepicker"))) {
                return;
            }
            if (this._datepickerShowing) {
                showAnim = this._get(inst, "showAnim");
                duration = this._get(inst, "duration");
                postProcess = function() {
                    $.datepicker._tidyDialog(inst);
                };

                // DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
                if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) ) {
                    inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
                } else {
                    inst.dpDiv[(showAnim === "slideDown" ? "slideUp" :
                        (showAnim === "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess);
                }

                if (!showAnim) {
                    postProcess();
                }
                this._datepickerShowing = false;

                onClose = this._get(inst, "onClose");
                if (onClose) {
                    onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst]);
                }

                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" });
                    if ($.blockUI) {
                        $.unblockUI();
                        $(inst.settings.calendarParent).append(this.dpDiv);
                    }
                }
                this._inDialog = false;
            }
        },

        /* Tidy up after a dialog display. */
        _tidyDialog: function(inst) {
            inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
        },

        /* Close date picker if clicked elsewhere. */
        _checkExternalClick: function(event) {
            if (!$.datepicker._curInst) {
                return;
            }

            var $target = $(event.target),
                inst = $.datepicker._getInst($target[0]);

            if ( ( ( $target[0].id !== $.datepicker._mainDivId &&
                $target.parents("#" + $.datepicker._mainDivId).length === 0 &&
                !$target.hasClass($.datepicker.markerClassName) &&
                !$target.closest("." + $.datepicker._triggerClass).length &&
                $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) ) ) ||
                ( $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst ) ) {
                $.datepicker._hideDatepicker();
            }
        },

        /* Adjust one of the date sub-fields. */
        _adjustDate: function(id, offset, period) {
            var target = $(id),
                inst = this._getInst(target[0]);

            if (this._isDisabledDatepicker(target[0])) {
                return;
            }
            this._adjustInstDate(inst, offset +
                (period === "M" ? this._get(inst, "showCurrentAtPos") : 0), // undo positioning
                period);
            this._updateDatepicker(inst);
        },

        /* Action for current link. */
        _gotoToday: function(id) {
            var date,
                target = $(id),
                inst = this._getInst(target[0]);

            if (this._get(inst, "gotoCurrent") && inst.currentDay) {
                inst.selectedDay = inst.currentDay;
                inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                inst.drawYear = inst.selectedYear = inst.currentYear;
            } else {
                date = new Date();
                inst.selectedDay = date.getDate();
                inst.drawMonth = inst.selectedMonth = date.getMonth();
                inst.drawYear = inst.selectedYear = date.getFullYear();
            }
            this._notifyChange(inst);
            this._adjustDate(target);
        },

        /* Action for selecting a new month/year. */
        _selectMonthYear: function(id, select, period) {
            var target = $(id),
                inst = this._getInst(target[0]);

            inst["selected" + (period === "M" ? "Month" : "Year")] =
                inst["draw" + (period === "M" ? "Month" : "Year")] =
                    parseInt(select.options[select.selectedIndex].value,10);

            this._notifyChange(inst);
            this._adjustDate(target);
        },

        /* Action for selecting a day. */
        _selectDay: function(id, month, year, td) {
            var inst,
                target = $(id);

            if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
                return;
            }

            inst = this._getInst(target[0]);
            inst.selectedDay = inst.currentDay = $("a", td).html();
            inst.selectedMonth = inst.currentMonth = month;
            inst.selectedYear = inst.currentYear = year;
            this._selectDate(id, this._formatDate(inst,
                inst.currentDay, inst.currentMonth, inst.currentYear));
        },

        /* Erase the input field and hide the date picker. */
        _clearDate: function(id) {
            var target = $(id);
            this._selectDate(target, "");
        },

        /* Update the input field with the selected date. */
        _selectDate: function(id, dateStr) {
            var onSelect,
                target = $(id),
                inst = this._getInst(target[0]);

            dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
            if (inst.input) {
                inst.input.val(dateStr);
            }
            this._updateAlternate(inst);

            onSelect = this._get(inst, "onSelect");
            if (onSelect) {
                onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
            } else if (inst.input) {
                inst.input.trigger("change"); // fire the change event
            }

            if (inst.inline){
                this._updateDatepicker(inst);
            } else {
                this._hideDatepicker();
                this._lastInput = inst.input[0];
                if (typeof(inst.input[0]) !== "object") {
                    inst.input.focus(); // restore focus
                }
                this._lastInput = null;
            }
        },

        /* Update any alternate field to synchronise with the main field. */
        _updateAlternate: function(inst) {
            var altFormat, date, dateStr,
                altField = this._get(inst, "altField");

            if (altField) { // update alternate field too
                altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
                date = this._getDate(inst);
                dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
                $(altField).each(function() { $(this).val(dateStr); });
            }
        },

        /* Set as beforeShowDay function to prevent selection of weekends.
         * @param  date  Date - the date to customise
         * @return [boolean, string] - is this date selectable?, what is its CSS class?
         */
        noWeekends: function(date) {
            var day = date.getDay();
            return [(day > 0 && day < 6), ""];
        },

        /* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
         * @param  date  Date - the date to get the week for
         * @return  number - the number of the week within the year that contains this date
         */
        iso8601Week: function(date) {
            var time,
                checkDate = new Date(date.getTime());

            // Find Thursday of this week starting on Monday
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

            time = checkDate.getTime();
            checkDate.setMonth(0); // Compare with Jan 1
            checkDate.setDate(1);
            return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
        },

        /* Parse a string value into a date object.
         * See formatDate below for the possible formats.
         *
         * @param  format string - the expected format of the date
         * @param  value string - the date in the above format
         * @param  settings Object - attributes include:
         *					shortYearCutoff  number - the cutoff year for determining the century (optional)
         *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
         *					dayNames		string[7] - names of the days from Sunday (optional)
         *					monthNamesShort string[12] - abbreviated names of the months (optional)
         *					monthNames		string[12] - names of the months (optional)
         * @return  Date - the extracted date value or null if value is blank
         */
        parseDate: function (format, value, settings) {
            if (format == null || value == null) {
                throw "Invalid arguments";
            }

            value = (typeof value === "object" ? value.toString() : value + "");
            if (value === "") {
                return null;
            }

            var iFormat, dim, extra,
                iValue = 0,
                shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                shortYearCutoff = (typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
                new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10)),
                dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
                dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
                monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
                monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
                year = -1,
                month = -1,
                day = -1,
                doy = -1,
                literal = false,
                date,
            // Check whether a format character is doubled
                lookAhead = function(match) {
                    var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
                    if (matches) {
                        iFormat++;
                    }
                    return matches;
                },
            // Extract a number from the string value
                getNumber = function(match) {
                    var isDoubled = lookAhead(match),
                        size = (match === "@" ? 14 : (match === "!" ? 20 :
                            (match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))),
                        minSize = (match === "y" ? size : 1),
                        digits = new RegExp("^\\d{" + minSize + "," + size + "}"),
                        num = value.substring(iValue).match(digits);
                    if (!num) {
                        throw "Missing number at position " + iValue;
                    }
                    iValue += num[0].length;
                    return parseInt(num[0], 10);
                },
            // Extract a name from the string value and convert to an index
                getName = function(match, shortNames, longNames) {
                    var index = -1,
                        names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
                            return [ [k, v] ];
                        }).sort(function (a, b) {
                            return -(a[1].length - b[1].length);
                        });

                    $.each(names, function (i, pair) {
                        var name = pair[1];
                        if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
                            index = pair[0];
                            iValue += name.length;
                            return false;
                        }
                    });
                    if (index !== -1) {
                        return index + 1;
                    } else {
                        throw "Unknown name at position " + iValue;
                    }
                },
            // Confirm that a literal character matches the string value
                checkLiteral = function() {
                    if (value.charAt(iValue) !== format.charAt(iFormat)) {
                        throw "Unexpected literal at position " + iValue;
                    }
                    iValue++;
                };

            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                        literal = false;
                    } else {
                        checkLiteral();
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                        case "d":
                            day = getNumber("d");
                            break;
                        case "D":
                            getName("D", dayNamesShort, dayNames);
                            break;
                        case "o":
                            doy = getNumber("o");
                            break;
                        case "m":
                            month = getNumber("m");
                            break;
                        case "M":
                            month = getName("M", monthNamesShort, monthNames);
                            break;
                        case "y":
                            year = getNumber("y");
                            break;
                        case "@":
                            date = new Date(getNumber("@"));
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case "!":
                            date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case "'":
                            if (lookAhead("'")){
                                checkLiteral();
                            } else {
                                literal = true;
                            }
                            break;
                        default:
                            checkLiteral();
                    }
                }
            }

            if (iValue < value.length){
                extra = value.substr(iValue);
                if (!/^\s+/.test(extra)) {
                    throw "Extra/unparsed characters found in date: " + extra;
                }
            }

            if (year === -1) {
                year = new Date().getFullYear();
            } else if (year < 100) {
                year += new Date().getFullYear() - new Date().getFullYear() % 100 +
                    (year <= shortYearCutoff ? 0 : -100);
            }

            if (doy > -1) {
                month = 1;
                day = doy;
                do {
                    dim = this._getDaysInMonth(year, month - 1);
                    if (day <= dim) {
                        break;
                    }
                    month++;
                    day -= dim;
                } while (true);
            }

            date = this._daylightSavingAdjust(new Date(year, month - 1, day));
            if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
                throw "Invalid date"; // E.g. 31/02/00
            }
            return date;
        },

        /* Standard date formats. */
        ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y", // RFC 822
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd", // ISO 8601

        _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
        Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

        /* Format a date object into a string value.
         * The format can be combinations of the following:
         * d  - day of month (no leading zero)
         * dd - day of month (two digit)
         * o  - day of year (no leading zeros)
         * oo - day of year (three digit)
         * D  - day name short
         * DD - day name long
         * m  - month of year (no leading zero)
         * mm - month of year (two digit)
         * M  - month name short
         * MM - month name long
         * y  - year (two digit)
         * yy - year (four digit)
         * @ - Unix timestamp (ms since 01/01/1970)
         * ! - Windows ticks (100ns since 01/01/0001)
         * "..." - literal text
         * '' - single quote
         *
         * @param  format string - the desired format of the date
         * @param  date Date - the date value to format
         * @param  settings Object - attributes include:
         *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
         *					dayNames		string[7] - names of the days from Sunday (optional)
         *					monthNamesShort string[12] - abbreviated names of the months (optional)
         *					monthNames		string[12] - names of the months (optional)
         * @return  string - the date in the above format
         */
        formatDate: function (format, date, settings) {
            if (!date) {
                return "";
            }

            var iFormat,
                dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
                dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
                monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
                monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
            // Check whether a format character is doubled
                lookAhead = function(match) {
                    var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
                    if (matches) {
                        iFormat++;
                    }
                    return matches;
                },
            // Format a number, with leading zero if necessary
                formatNumber = function(match, value, len) {
                    var num = "" + value;
                    if (lookAhead(match)) {
                        while (num.length < len) {
                            num = "0" + num;
                        }
                    }
                    return num;
                },
            // Format a name, short or long as requested
                formatName = function(match, value, shortNames, longNames) {
                    return (lookAhead(match) ? longNames[value] : shortNames[value]);
                },
                output = "",
                literal = false;

            if (date) {
                for (iFormat = 0; iFormat < format.length; iFormat++) {
                    if (literal) {
                        if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                            literal = false;
                        } else {
                            output += format.charAt(iFormat);
                        }
                    } else {
                        switch (format.charAt(iFormat)) {
                            case "d":
                                output += formatNumber("d", date.getDate(), 2);
                                break;
                            case "D":
                                output += formatName("D", date.getDay(), dayNamesShort, dayNames);
                                break;
                            case "o":
                                output += formatNumber("o",
                                    Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case "m":
                                output += formatNumber("m", date.getMonth() + 1, 2);
                                break;
                            case "M":
                                output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
                                break;
                            case "y":
                                output += (lookAhead("y") ? date.getFullYear() :
                                (date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
                                break;
                            case "@":
                                output += date.getTime();
                                break;
                            case "!":
                                output += date.getTime() * 10000 + this._ticksTo1970;
                                break;
                            case "'":
                                if (lookAhead("'")) {
                                    output += "'";
                                } else {
                                    literal = true;
                                }
                                break;
                            default:
                                output += format.charAt(iFormat);
                        }
                    }
                }
            }
            return output;
        },

        /* Extract all possible characters from the date format. */
        _possibleChars: function (format) {
            var iFormat,
                chars = "",
                literal = false,
            // Check whether a format character is doubled
                lookAhead = function(match) {
                    var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
                    if (matches) {
                        iFormat++;
                    }
                    return matches;
                };

            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                        literal = false;
                    } else {
                        chars += format.charAt(iFormat);
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                        case "d": case "m": case "y": case "@":
                        chars += "0123456789";
                        break;
                        case "D": case "M":
                        return null; // Accept anything
                        case "'":
                            if (lookAhead("'")) {
                                chars += "'";
                            } else {
                                literal = true;
                            }
                            break;
                        default:
                            chars += format.charAt(iFormat);
                    }
                }
            }
            return chars;
        },

        /* Get a setting value, defaulting if necessary. */
        _get: function(inst, name) {
            return inst.settings[name] !== undefined ?
                inst.settings[name] : this._defaults[name];
        },

        /* Parse existing date and initialise date picker. */
        _setDateFromField: function(inst, noDefault) {
            if (inst.input.val() === inst.lastVal) {
                return;
            }

            var dateFormat = this._get(inst, "dateFormat"),
                dates = inst.lastVal = inst.input ? inst.input.val() : null,
                defaultDate = this._getDefaultDate(inst),
                date = defaultDate,
                settings = this._getFormatConfig(inst);

            try {
                date = this.parseDate(dateFormat, dates, settings) || defaultDate;
            } catch (event) {
                dates = (noDefault ? "" : dates);
            }
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            inst.currentDay = (dates ? date.getDate() : 0);
            inst.currentMonth = (dates ? date.getMonth() : 0);
            inst.currentYear = (dates ? date.getFullYear() : 0);
            this._adjustInstDate(inst);
        },

        /* Retrieve the default date shown on opening. */
        _getDefaultDate: function(inst) {
            return this._restrictMinMax(inst,
                this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
        },

        /* A date may be specified as an exact value or a relative one. */
        _determineDate: function(inst, date, defaultDate) {
            var offsetNumeric = function(offset) {
                    var date = new Date();
                    date.setDate(date.getDate() + offset);
                    return date;
                },
                offsetString = function(offset) {
                    try {
                        return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
                            offset, $.datepicker._getFormatConfig(inst));
                    }
                    catch (e) {
                        // Ignore
                    }

                    var date = (offset.toLowerCase().match(/^c/) ?
                                $.datepicker._getDate(inst) : null) || new Date(),
                        year = date.getFullYear(),
                        month = date.getMonth(),
                        day = date.getDate(),
                        pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        matches = pattern.exec(offset);

                    while (matches) {
                        switch (matches[2] || "d") {
                            case "d" : case "D" :
                            day += parseInt(matches[1],10); break;
                            case "w" : case "W" :
                            day += parseInt(matches[1],10) * 7; break;
                            case "m" : case "M" :
                            month += parseInt(matches[1],10);
                            day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                            break;
                            case "y": case "Y" :
                            year += parseInt(matches[1],10);
                            day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                            break;
                        }
                        matches = pattern.exec(offset);
                    }
                    return new Date(year, month, day);
                },
                newDate = (date == null || date === "" ? defaultDate : (typeof date === "string" ? offsetString(date) :
                    (typeof date === "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));

            newDate = (newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate);
            if (newDate) {
                newDate.setHours(0);
                newDate.setMinutes(0);
                newDate.setSeconds(0);
                newDate.setMilliseconds(0);
            }
            return this._daylightSavingAdjust(newDate);
        },

        /* Handle switch to/from daylight saving.
         * Hours may be non-zero on daylight saving cut-over:
         * > 12 when midnight changeover, but then cannot generate
         * midnight datetime, so jump to 1AM, otherwise reset.
         * @param  date  (Date) the date to check
         * @return  (Date) the corrected date
         */
        _daylightSavingAdjust: function(date) {
            if (!date) {
                return null;
            }
            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
            return date;
        },

        /* Set the date(s) directly. */
        _setDate: function(inst, date, noChange) {
            var clear = !date,
                origMonth = inst.selectedMonth,
                origYear = inst.selectedYear,
                newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));

            inst.selectedDay = inst.currentDay = newDate.getDate();
            inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
            inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
            if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
                this._notifyChange(inst);
            }
            this._adjustInstDate(inst);
            if (inst.input) {
                inst.input.val(clear ? "" : this._formatDate(inst));
            }
        },

        /* Retrieve the date(s) directly. */
        _getDate: function(inst) {
            var startDate = (!inst.currentYear || (inst.input && inst.input.val() === "") ? null :
                this._daylightSavingAdjust(new Date(
                    inst.currentYear, inst.currentMonth, inst.currentDay)));
            return startDate;
        },

        /* Attach the onxxx handlers.  These are declared statically so
         * they work with static code transformers like Caja.
         */
        _attachHandlers: function(inst) {
            var stepMonths = this._get(inst, "stepMonths"),
                id = "#" + inst.id.replace( /\\\\/g, "\\" );
            inst.dpDiv.find("[data-handler]").map(function () {
                var handler = {
                    prev: function () {
                        $.datepicker._adjustDate(id, -stepMonths, "M");
                    },
                    next: function () {
                        $.datepicker._adjustDate(id, +stepMonths, "M");
                    },
                    hide: function () {
                        $.datepicker._hideDatepicker();
                    },
                    today: function () {
                        $.datepicker._gotoToday(id);
                    },
                    selectDay: function () {
                        $.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return false;
                    },
                    selectMonth: function () {
                        $.datepicker._selectMonthYear(id, this, "M");
                        return false;
                    },
                    selectYear: function () {
                        $.datepicker._selectMonthYear(id, this, "Y");
                        return false;
                    }
                };
                $(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
            });
        },

        /* Generate the HTML for the current state of the date picker. */
        _generateHTML: function(inst) {
            var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
                controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
                monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
                selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
                cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
                printDate, dRow, tbody, daySettings, otherMonth, unselectable,
                tempDate = new Date(),
                today = this._daylightSavingAdjust(
                    new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())), // clear time
                isRTL = this._get(inst, "isRTL"),
                showButtonPanel = this._get(inst, "showButtonPanel"),
                hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"),
                navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"),
                numMonths = this._getNumberOfMonths(inst),
                showCurrentAtPos = this._get(inst, "showCurrentAtPos"),
                stepMonths = this._get(inst, "stepMonths"),
                isMultiMonth = (numMonths[0] !== 1 || numMonths[1] !== 1),
                currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
                    new Date(inst.currentYear, inst.currentMonth, inst.currentDay))),
                minDate = this._getMinMaxDate(inst, "min"),
                maxDate = this._getMinMaxDate(inst, "max"),
                drawMonth = inst.drawMonth - showCurrentAtPos,
                drawYear = inst.drawYear;

            if (drawMonth < 0) {
                drawMonth += 12;
                drawYear--;
            }
            if (maxDate) {
                maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
                    maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
                maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
                while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
                    drawMonth--;
                    if (drawMonth < 0) {
                        drawMonth = 11;
                        drawYear--;
                    }
                }
            }
            inst.drawMonth = drawMonth;
            inst.drawYear = drawYear;

            prevText = this._get(inst, "prevText");
            prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
                this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
                this._getFormatConfig(inst)));

            prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
            "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
            " title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" :
                (hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+ prevText +"'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>"));

            nextText = this._get(inst, "nextText");
            nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
                this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
                this._getFormatConfig(inst)));

            next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
            "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
            " title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" :
                (hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+ nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>"));

            currentText = this._get(inst, "currentText");
            gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
            currentText = (!navigationAsDateFormat ? currentText :
                this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));

            controls = (!inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
            this._get(inst, "closeText") + "</button>" : "");

            buttonPanel = (showButtonPanel) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") +
            (this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
            ">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";

            firstDay = parseInt(this._get(inst, "firstDay"),10);
            firstDay = (isNaN(firstDay) ? 0 : firstDay);

            showWeek = this._get(inst, "showWeek");
            dayNames = this._get(inst, "dayNames");
            dayNamesMin = this._get(inst, "dayNamesMin");
            monthNames = this._get(inst, "monthNames");
            monthNamesShort = this._get(inst, "monthNamesShort");
            beforeShowDay = this._get(inst, "beforeShowDay");
            showOtherMonths = this._get(inst, "showOtherMonths");
            selectOtherMonths = this._get(inst, "selectOtherMonths");
            defaultDate = this._getDefaultDate(inst);
            html = "";
            dow;
            for (row = 0; row < numMonths[0]; row++) {
                group = "";
                this.maxRows = 4;
                for (col = 0; col < numMonths[1]; col++) {
                    selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
                    cornerClass = " ui-corner-all";
                    calender = "";
                    if (isMultiMonth) {
                        calender += "<div class='ui-datepicker-group";
                        if (numMonths[1] > 1) {
                            switch (col) {
                                case 0: calender += " ui-datepicker-group-first";
                                    cornerClass = " ui-corner-" + (isRTL ? "right" : "left"); break;
                                case numMonths[1]-1: calender += " ui-datepicker-group-last";
                                    cornerClass = " ui-corner-" + (isRTL ? "left" : "right"); break;
                                default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break;
                            }
                        }
                        calender += "'>";
                    }
                    calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
                        (/all|left/.test(cornerClass) && row === 0 ? (isRTL ? next : prev) : "") +
                        (/all|right/.test(cornerClass) && row === 0 ? (isRTL ? prev : next) : "") +
                        this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
                            row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
                        "</div><table class='ui-datepicker-calendar'><thead>" +
                        "<tr>";
                    thead = (showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "");
                    for (dow = 0; dow < 7; dow++) { // days of the week
                        day = (dow + firstDay) % 7;
                        thead += "<th scope='col'" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" +
                            "<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
                    }
                    calender += thead + "</tr></thead><tbody>";
                    daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
                    if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
                        inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
                    }
                    leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
                    curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
                    numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
                    this.maxRows = numRows;
                    printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
                    for (dRow = 0; dRow < numRows; dRow++) { // create date picker rows
                        calender += "<tr>";
                        tbody = (!showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
                        this._get(inst, "calculateWeek")(printDate) + "</td>");
                        for (dow = 0; dow < 7; dow++) { // create date picker days
                            daySettings = (beforeShowDay ?
                                beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
                            otherMonth = (printDate.getMonth() !== drawMonth);
                            unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
                                (minDate && printDate < minDate) || (maxDate && printDate > maxDate);
                            tbody += "<td class='" +
                                ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + // highlight weekends
                                (otherMonth ? " ui-datepicker-other-month" : "") + // highlight days from other months
                                ((printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent) || // user pressed key
                                (defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime()) ?
                                    // or defaultDate is current printedDate and defaultDate is selectedDate
                                " " + this._dayOverClass : "") + // highlight selected day
                                (unselectable ? " " + this._unselectableClass + " ui-state-disabled": "") +  // highlight unselectable days
                                (otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + // highlight custom dates
                                (printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + // highlight selected day
                                (printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + // highlight today (if different)
                                ((!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + // cell title
                                (unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + // actions
                                (otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
                                    (unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
                                    (printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") +
                                    (printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + // highlight selected day
                                    (otherMonth ? " ui-priority-secondary" : "") + // distinguish dates from other months
                                    "' href='#'>" + printDate.getDate() + "</a>")) + "</td>"; // display selectable date
                            printDate.setDate(printDate.getDate() + 1);
                            printDate = this._daylightSavingAdjust(printDate);
                        }
                        calender += tbody + "</tr>";
                    }
                    drawMonth++;
                    if (drawMonth > 11) {
                        drawMonth = 0;
                        drawYear++;
                    }
                    calender += "</tbody></table>" + (isMultiMonth ? "</div>" +
                        ((numMonths[0] > 0 && col === numMonths[1]-1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    group += calender;
                }
                html += group;
            }
            html += buttonPanel;
            inst._keyEvent = false;
            return html;
        },

        /* Generate the month and year header. */
        _generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
                                           secondary, monthNames, monthNamesShort) {

            var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
                changeMonth = this._get(inst, "changeMonth"),
                changeYear = this._get(inst, "changeYear"),
                showMonthAfterYear = this._get(inst, "showMonthAfterYear"),
                html = "<div class='ui-datepicker-title'>",
                monthHtml = "";

            // month selection
            if (secondary || !changeMonth) {
                monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
            } else {
                inMinYear = (minDate && minDate.getFullYear() === drawYear);
                inMaxYear = (maxDate && maxDate.getFullYear() === drawYear);
                monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for ( month = 0; month < 12; month++) {
                    if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
                        monthHtml += "<option value='" + month + "'" +
                            (month === drawMonth ? " selected='selected'" : "") +
                            ">" + monthNamesShort[month] + "</option>";
                    }
                }
                monthHtml += "</select>";
            }

            if (!showMonthAfterYear) {
                html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
            }

            // year selection
            if ( !inst.yearshtml ) {
                inst.yearshtml = "";
                if (secondary || !changeYear) {
                    html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
                } else {
                    // determine range of years to display
                    years = this._get(inst, "yearRange").split(":");
                    thisYear = new Date().getFullYear();
                    determineYear = function(value) {
                        var year = (value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) :
                            (value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) :
                                parseInt(value, 10)));
                        return (isNaN(year) ? thisYear : year);
                    };
                    year = determineYear(years[0]);
                    endYear = Math.max(year, determineYear(years[1] || ""));
                    year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
                    endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
                    inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for (; year <= endYear; year++) {
                        inst.yearshtml += "<option value='" + year + "'" +
                            (year === drawYear ? " selected='selected'" : "") +
                            ">" + year + "</option>";
                    }
                    inst.yearshtml += "</select>";

                    html += inst.yearshtml;
                    inst.yearshtml = null;
                }
            }

            html += this._get(inst, "yearSuffix");
            if (showMonthAfterYear) {
                html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
            }
            html += "</div>"; // Close datepicker_header
            return html;
        },

        /* Adjust one of the date sub-fields. */
        _adjustInstDate: function(inst, offset, period) {
            var year = inst.drawYear + (period === "Y" ? offset : 0),
                month = inst.drawMonth + (period === "M" ? offset : 0),
                day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0),
                date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));

            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            if (period === "M" || period === "Y") {
                this._notifyChange(inst);
            }
        },

        /* Ensure a date is within any min/max bounds. */
        _restrictMinMax: function(inst, date) {
            var minDate = this._getMinMaxDate(inst, "min"),
                maxDate = this._getMinMaxDate(inst, "max"),
                newDate = (minDate && date < minDate ? minDate : date);
            return (maxDate && newDate > maxDate ? maxDate : newDate);
        },

        /* Notify change of month/year. */
        _notifyChange: function(inst) {
            var onChange = this._get(inst, "onChangeMonthYear");
            if (onChange) {
                onChange.apply((inst.input ? inst.input[0] : null),
                    [inst.selectedYear, inst.selectedMonth + 1, inst]);
            }
        },

        /* Determine the number of months to show. */
        _getNumberOfMonths: function(inst) {
            var numMonths = this._get(inst, "numberOfMonths");
            return (numMonths == null ? [1, 1] : (typeof numMonths === "number" ? [1, numMonths] : numMonths));
        },

        /* Determine the current maximum date - ensure no time components are set. */
        _getMinMaxDate: function(inst, minMax) {
            return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
        },

        /* Find the number of days in a given month. */
        _getDaysInMonth: function(year, month) {
            return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
        },

        /* Find the day of the week of the first of a month. */
        _getFirstDayOfMonth: function(year, month) {
            return new Date(year, month, 1).getDay();
        },

        /* Determines if we should allow a "next/prev" month display change. */
        _canAdjustMonth: function(inst, offset, curYear, curMonth) {
            var numMonths = this._getNumberOfMonths(inst),
                date = this._daylightSavingAdjust(new Date(curYear,
                    curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));

            if (offset < 0) {
                date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
            }
            return this._isInRange(inst, date);
        },

        /* Is the given date in the accepted range? */
        _isInRange: function(inst, date) {
            var yearSplit, currentYear,
                minDate = this._getMinMaxDate(inst, "min"),
                maxDate = this._getMinMaxDate(inst, "max"),
                minYear = null,
                maxYear = null,
                years = this._get(inst, "yearRange");
            if (years){
                yearSplit = years.split(":");
                currentYear = new Date().getFullYear();
                minYear = parseInt(yearSplit[0], 10);
                maxYear = parseInt(yearSplit[1], 10);
                if ( yearSplit[0].match(/[+\-].*/) ) {
                    minYear += currentYear;
                }
                if ( yearSplit[1].match(/[+\-].*/) ) {
                    maxYear += currentYear;
                }
            }

            return ((!minDate || date.getTime() >= minDate.getTime()) &&
            (!maxDate || date.getTime() <= maxDate.getTime()) &&
            (!minYear || date.getFullYear() >= minYear) &&
            (!maxYear || date.getFullYear() <= maxYear));
        },

        /* Provide the configuration settings for formatting/parsing. */
        _getFormatConfig: function(inst) {
            var shortYearCutoff = this._get(inst, "shortYearCutoff");
            shortYearCutoff = (typeof shortYearCutoff !== "string" ? shortYearCutoff :
            new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
            return {shortYearCutoff: shortYearCutoff,
                dayNamesShort: this._get(inst, "dayNamesShort"), dayNames: this._get(inst, "dayNames"),
                monthNamesShort: this._get(inst, "monthNamesShort"), monthNames: this._get(inst, "monthNames")};
        },

        /* Format the given date for display. */
        _formatDate: function(inst, day, month, year) {
            if (!day) {
                inst.currentDay = inst.selectedDay;
                inst.currentMonth = inst.selectedMonth;
                inst.currentYear = inst.selectedYear;
            }
            var date = (day ? (typeof day === "object" ? day :
                this._daylightSavingAdjust(new Date(year, month, day))) :
                this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
            return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
        }
    });

    /*
     * Bind hover events for datepicker elements.
     * Done via delegate so the binding only occurs once in the lifetime of the parent div.
     * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
     */
    function datepicker_bindHover(dpDiv) {
        var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return dpDiv.delegate(selector, "mouseout", function() {
            $(this).removeClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                $(this).removeClass("ui-datepicker-prev-hover");
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                $(this).removeClass("ui-datepicker-next-hover");
            }
        })
            .delegate( selector, "mouseover", datepicker_handleMouseover );
    }

    function datepicker_handleMouseover() {
        if (!$.datepicker._isDisabledDatepicker( datepicker_instActive.inline? datepicker_instActive.dpDiv.parent()[0] : datepicker_instActive.input[0])) {
            $(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
            $(this).addClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                $(this).addClass("ui-datepicker-prev-hover");
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                $(this).addClass("ui-datepicker-next-hover");
            }
        }
    }

    /* jQuery extend now ignores nulls! */
    function datepicker_extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props) {
            if (props[name] == null) {
                target[name] = props[name];
            }
        }
        return target;
    }

    /* Invoke the datepicker functionality.
     @param  options  string - a command, optionally followed by additional parameters or
     Object - settings for attaching new datepicker functionality
     @return  jQuery object */
    $.fn.datepicker = function(options){

        /* Verify an empty collection wasn't passed - Fixes #6976 */
        if ( !this.length ) {
            return this;
        }

        /* Initialise the date picker. */
        if (!$.datepicker.initialized) {
            $(document).mousedown($.datepicker._checkExternalClick);
            $.datepicker.initialized = true;
        }

        /* Append datepicker main container to body if not exist. */
        if ($("#"+$.datepicker._mainDivId).length === 0) {
            if(options.calendarParent){
                $(options.calendarParent).append($.datepicker.dpDiv);
            }else{
                $("body").append($.datepicker.dpDiv);

            }
        }

        var otherArgs = Array.prototype.slice.call(arguments, 1);
        if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) {
            return $.datepicker["_" + options + "Datepicker"].
                apply($.datepicker, [this[0]].concat(otherArgs));
        }
        if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
            return $.datepicker["_" + options + "Datepicker"].
                apply($.datepicker, [this[0]].concat(otherArgs));
        }
        return this.each(function() {
            typeof options === "string" ?
                $.datepicker["_" + options + "Datepicker"].
                    apply($.datepicker, [this].concat(otherArgs)) :
                $.datepicker._attachDatepicker(this, options);
        });
    };

    $.datepicker = new Datepicker(); // singleton instance
    $.datepicker.initialized = false;
    $.datepicker.uuid = new Date().getTime();
    $.datepicker.version = "1.11.4";

    var datepicker = $.datepicker;


    /*!
     * jQuery UI Draggable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/draggable/
     */


    $.widget("ui.draggable", $.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false,

            // callbacks
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {

            if ( this.options.helper === "original" ) {
                this._setPositionRelative();
            }
            if (this.options.addClasses){
                this.element.addClass("ui-draggable");
            }
            if (this.options.disabled){
                this.element.addClass("ui-draggable-disabled");
            }
            this._setHandleClassName();

            this._mouseInit();
        },

        _setOption: function( key, value ) {
            this._super( key, value );
            if ( key === "handle" ) {
                this._removeHandleClassName();
                this._setHandleClassName();
            }
        },

        _destroy: function() {
            if ( ( this.helper || this.element ).is( ".ui-draggable-dragging" ) ) {
                this.destroyOnClear = true;
                return;
            }
            this.element.removeClass( "ui-draggable ui-draggable-dragging ui-draggable-disabled" );
            this._removeHandleClassName();
            this._mouseDestroy();
        },

        _mouseCapture: function(event) {
            var o = this.options;

            this._blurActiveElement( event );

            // among others, prevent a drag on a resizable-handle
            if (this.helper || o.disabled || $(event.target).closest(".ui-resizable-handle").length > 0) {
                return false;
            }

            //Quit if we're not on a valid handle
            this.handle = this._getHandle(event);
            if (!this.handle) {
                return false;
            }

            this._blockFrames( o.iframeFix === true ? "iframe" : o.iframeFix );

            return true;

        },

        _blockFrames: function( selector ) {
            this.iframeBlocks = this.document.find( selector ).map(function() {
                var iframe = $( this );

                return $( "<div>" )
                    .css( "position", "absolute" )
                    .appendTo( iframe.parent() )
                    .outerWidth( iframe.outerWidth() )
                    .outerHeight( iframe.outerHeight() )
                    .offset( iframe.offset() )[ 0 ];
            });
        },

        _unblockFrames: function() {
            if ( this.iframeBlocks ) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks;
            }
        },

        _blurActiveElement: function( event ) {
            var document = this.document[ 0 ];

            // Only need to blur if the event occurred on the draggable itself, see #10527
            if ( !this.handleElement.is( event.target ) ) {
                return;
            }

            // support: IE9
            // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
            try {

                // Support: IE9, IE10
                // If the <body> is blurred, IE will switch windows, see #9520
                if ( document.activeElement && document.activeElement.nodeName.toLowerCase() !== "body" ) {

                    // Blur any element that currently has focus, see #4261
                    $( document.activeElement ).blur();
                }
            } catch ( error ) {}
        },

        _mouseStart: function(event) {

            var o = this.options;

            //Create and append the visible helper
            this.helper = this._createHelper(event);

            this.helper.addClass("ui-draggable-dragging");

            //Cache the helper size
            this._cacheHelperProportions();

            //If ddmanager is used for droppables, set the global draggable
            if ($.ui.ddmanager) {
                $.ui.ddmanager.current = this;
            }

            /*
             * - Position generation -
             * This block generates everything position related - it's the core of draggables.
             */

            //Cache the margins of the original element
            this._cacheMargins();

            //Store the helper's css position
            this.cssPosition = this.helper.css( "position" );
            this.scrollParent = this.helper.scrollParent( true );
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = this.helper.parents().filter(function() {
                    return $( this ).css( "position" ) === "fixed";
                }).length > 0;

            //The element's absolute position on the page minus margins
            this.positionAbs = this.element.offset();
            this._refreshOffsets( event );

            //Generate the original position
            this.originalPosition = this.position = this._generatePosition( event, false );
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;

            //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
            (o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

            //Set a containment if given in the options
            this._setContainment();

            //Trigger event + callbacks
            if (this._trigger("start", event) === false) {
                this._clear();
                return false;
            }

            //Recache the helper size
            this._cacheHelperProportions();

            //Prepare the droppable offsets
            if ($.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(this, event);
            }

            // Reset helper's right/bottom css if they're set and set explicit width/height instead
            // as this prevents resizing of elements with right/bottom set (see #7772)
            this._normalizeRightBottom();

            this._mouseDrag(event, true); //Execute the drag once - this causes the helper not to be visible before getting its correct position

            //If the ddmanager is used for droppables, inform the manager that dragging has started (see #5003)
            if ( $.ui.ddmanager ) {
                $.ui.ddmanager.dragStart(this, event);
            }

            return true;
        },

        _refreshOffsets: function( event ) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: false,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };

            this.offset.click = {
                left: event.pageX - this.offset.left,
                top: event.pageY - this.offset.top
            };
        },

        _mouseDrag: function(event, noPropagation) {
            // reset any necessary cached properties (see #5009)
            if ( this.hasFixedAncestor ) {
                this.offset.parent = this._getParentOffset();
            }

            //Compute the helpers position
            this.position = this._generatePosition( event, true );
            this.positionAbs = this._convertPositionTo("absolute");

            //Call plugins and callbacks and use the resulting position if something is returned
            if (!noPropagation) {
                var ui = this._uiHash();
                if (this._trigger("drag", event, ui) === false) {
                    this._mouseUp({});
                    return false;
                }
                this.position = ui.position;
            }

            this.helper[ 0 ].style.left = this.position.left + "px";
            this.helper[ 0 ].style.top = this.position.top + "px";

            if ($.ui.ddmanager) {
                $.ui.ddmanager.drag(this, event);
            }

            return false;
        },

        _mouseStop: function(event) {

            //If we are using droppables, inform the manager about the drop
            var that = this,
                dropped = false;
            if ($.ui.ddmanager && !this.options.dropBehaviour) {
                dropped = $.ui.ddmanager.drop(this, event);
            }

            //if a drop comes from outside (a sortable)
            if (this.dropped) {
                dropped = this.dropped;
                this.dropped = false;
            }

            if ((this.options.revert === "invalid" && !dropped) || (this.options.revert === "valid" && dropped) || this.options.revert === true || ($.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped))) {
                $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    if (that._trigger("stop", event) !== false) {
                        that._clear();
                    }
                });
            } else {
                if (this._trigger("stop", event) !== false) {
                    this._clear();
                }
            }

            return false;
        },

        _mouseUp: function( event ) {
            this._unblockFrames();

            //If the ddmanager is used for droppables, inform the manager that dragging has stopped (see #5003)
            if ( $.ui.ddmanager ) {
                $.ui.ddmanager.dragStop(this, event);
            }

            // Only need to focus if the event occurred on the draggable itself, see #10527
            if ( this.handleElement.is( event.target ) ) {
                // The interaction is over; whether or not the click resulted in a drag, focus the element
                this.element.focus();
            }

            return $.ui.mouse.prototype._mouseUp.call(this, event);
        },

        cancel: function() {

            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp({});
            } else {
                this._clear();
            }

            return this;

        },

        _getHandle: function(event) {
            return this.options.handle ?
                !!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
                true;
        },

        _setHandleClassName: function() {
            this.handleElement = this.options.handle ?
                this.element.find( this.options.handle ) : this.element;
            this.handleElement.addClass( "ui-draggable-handle" );
        },

        _removeHandleClassName: function() {
            this.handleElement.removeClass( "ui-draggable-handle" );
        },

        _createHelper: function(event) {

            var o = this.options,
                helperIsFunction = $.isFunction( o.helper ),
                helper = helperIsFunction ?
                    $( o.helper.apply( this.element[ 0 ], [ event ] ) ) :
                    ( o.helper === "clone" ?
                        this.element.clone().removeAttr( "id" ) :
                        this.element );

            if (!helper.parents("body").length) {
                helper.appendTo((o.appendTo === "parent" ? this.element[0].parentNode : o.appendTo));
            }

            // http://bugs.jqueryui.com/ticket/9446
            // a helper function can return the original element
            // which wouldn't have been set to relative in _create
            if ( helperIsFunction && helper[ 0 ] === this.element[ 0 ] ) {
                this._setPositionRelative();
            }

            if (helper[0] !== this.element[0] && !(/(fixed|absolute)/).test(helper.css("position"))) {
                helper.css("position", "absolute");
            }

            return helper;

        },

        _setPositionRelative: function() {
            if ( !( /^(?:r|a|f)/ ).test( this.element.css( "position" ) ) ) {
                this.element[ 0 ].style.position = "relative";
            }
        },

        _adjustOffsetFromHelper: function(obj) {
            if (typeof obj === "string") {
                obj = obj.split(" ");
            }
            if ($.isArray(obj)) {
                obj = { left: +obj[0], top: +obj[1] || 0 };
            }
            if ("left" in obj) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ("right" in obj) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ("top" in obj) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ("bottom" in obj) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },

        _isRootNode: function( element ) {
            return ( /(html|body)/i ).test( element.tagName ) || element === this.document[ 0 ];
        },

        _getParentOffset: function() {

            //Get the offsetParent and cache its position
            var po = this.offsetParent.offset(),
                document = this.document[ 0 ];

            // This is a special case where we need to modify a offset calculated on start, since the following happened:
            // 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
            // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
            //    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }

            if ( this._isRootNode( this.offsetParent[ 0 ] ) ) {
                po = { top: 0, left: 0 };
            }

            return {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };

        },

        _getRelativeOffset: function() {
            if ( this.cssPosition !== "relative" ) {
                return { top: 0, left: 0 };
            }

            var p = this.element.position(),
                scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

            return {
                top: p.top - ( parseInt(this.helper.css( "top" ), 10) || 0 ) + ( !scrollIsRootNode ? this.scrollParent.scrollTop() : 0 ),
                left: p.left - ( parseInt(this.helper.css( "left" ), 10) || 0 ) + ( !scrollIsRootNode ? this.scrollParent.scrollLeft() : 0 )
            };

        },

        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.element.css("marginLeft"), 10) || 0),
                top: (parseInt(this.element.css("marginTop"), 10) || 0),
                right: (parseInt(this.element.css("marginRight"), 10) || 0),
                bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
            };
        },

        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },

        _setContainment: function() {

            var isUserScrollable, c, ce,
                o = this.options,
                document = this.document[ 0 ];

            this.relativeContainer = null;

            if ( !o.containment ) {
                this.containment = null;
                return;
            }

            if ( o.containment === "window" ) {
                this.containment = [
                    $( window ).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                    $( window ).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                    $( window ).scrollLeft() + $( window ).width() - this.helperProportions.width - this.margins.left,
                    $( window ).scrollTop() + ( $( window ).height() || document.body.parentNode.scrollHeight ) - this.helperProportions.height - this.margins.top
                ];
                return;
            }

            if ( o.containment === "document") {
                this.containment = [
                    0,
                    0,
                    $( document ).width() - this.helperProportions.width - this.margins.left,
                    ( $( document ).height() || document.body.parentNode.scrollHeight ) - this.helperProportions.height - this.margins.top
                ];
                return;
            }

            if ( o.containment.constructor === Array ) {
                this.containment = o.containment;
                return;
            }

            if ( o.containment === "parent" ) {
                o.containment = this.helper[ 0 ].parentNode;
            }

            c = $( o.containment );
            ce = c[ 0 ];

            if ( !ce ) {
                return;
            }

            isUserScrollable = /(scroll|auto)/.test( c.css( "overflow" ) );

            this.containment = [
                ( parseInt( c.css( "borderLeftWidth" ), 10 ) || 0 ) + ( parseInt( c.css( "paddingLeft" ), 10 ) || 0 ),
                ( parseInt( c.css( "borderTopWidth" ), 10 ) || 0 ) + ( parseInt( c.css( "paddingTop" ), 10 ) || 0 ),
                ( isUserScrollable ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
                ( parseInt( c.css( "borderRightWidth" ), 10 ) || 0 ) -
                ( parseInt( c.css( "paddingRight" ), 10 ) || 0 ) -
                this.helperProportions.width -
                this.margins.left -
                this.margins.right,
                ( isUserScrollable ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
                ( parseInt( c.css( "borderBottomWidth" ), 10 ) || 0 ) -
                ( parseInt( c.css( "paddingBottom" ), 10 ) || 0 ) -
                this.helperProportions.height -
                this.margins.top -
                this.margins.bottom
            ];
            this.relativeContainer = c;
        },

        _convertPositionTo: function(d, pos) {

            if (!pos) {
                pos = this.position;
            }

            var mod = d === "absolute" ? 1 : -1,
                scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

            return {
                top: (
                    pos.top	+																// The absolute mouse position
                    this.offset.relative.top * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.parent.top * mod -										// The offsetParent's offset without borders (offset + border)
                    ( ( this.cssPosition === "fixed" ? -this.offset.scroll.top : ( scrollIsRootNode ? 0 : this.offset.scroll.top ) ) * mod)
                ),
                left: (
                    pos.left +																// The absolute mouse position
                    this.offset.relative.left * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.parent.left * mod	-										// The offsetParent's offset without borders (offset + border)
                    ( ( this.cssPosition === "fixed" ? -this.offset.scroll.left : ( scrollIsRootNode ? 0 : this.offset.scroll.left ) ) * mod)
                )
            };

        },

        _generatePosition: function( event, constrainPosition ) {

            var containment, co, top, left,
                o = this.options,
                scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] ),
                pageX = event.pageX,
                pageY = event.pageY;

            // Cache the scroll
            if ( !scrollIsRootNode || !this.offset.scroll ) {
                this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                };
            }

            /*
             * - Position constraining -
             * Constrain the position to a mix of grid, containment.
             */

            // If we are not dragging yet, we won't check for options
            if ( constrainPosition ) {
                if ( this.containment ) {
                    if ( this.relativeContainer ){
                        co = this.relativeContainer.offset();
                        containment = [
                            this.containment[ 0 ] + co.left,
                            this.containment[ 1 ] + co.top,
                            this.containment[ 2 ] + co.left,
                            this.containment[ 3 ] + co.top
                        ];
                    } else {
                        containment = this.containment;
                    }

                    if (event.pageX - this.offset.click.left < containment[0]) {
                        pageX = containment[0] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top < containment[1]) {
                        pageY = containment[1] + this.offset.click.top;
                    }
                    if (event.pageX - this.offset.click.left > containment[2]) {
                        pageX = containment[2] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top > containment[3]) {
                        pageY = containment[3] + this.offset.click.top;
                    }
                }

                if (o.grid) {
                    //Check for grid elements set to 0 to prevent divide by 0 error causing invalid argument errors in IE (see ticket #6950)
                    top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
                    pageY = containment ? ((top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3]) ? top : ((top - this.offset.click.top >= containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

                    left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
                    pageX = containment ? ((left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2]) ? left : ((left - this.offset.click.left >= containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
                }

                if ( o.axis === "y" ) {
                    pageX = this.originalPageX;
                }

                if ( o.axis === "x" ) {
                    pageY = this.originalPageY;
                }
            }

            return {
                top: (
                    pageY -																	// The absolute mouse position
                    this.offset.click.top	-												// Click offset (relative to the element)
                    this.offset.relative.top -												// Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.parent.top +												// The offsetParent's offset without borders (offset + border)
                    ( this.cssPosition === "fixed" ? -this.offset.scroll.top : ( scrollIsRootNode ? 0 : this.offset.scroll.top ) )
                ),
                left: (
                    pageX -																	// The absolute mouse position
                    this.offset.click.left -												// Click offset (relative to the element)
                    this.offset.relative.left -												// Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.parent.left +												// The offsetParent's offset without borders (offset + border)
                    ( this.cssPosition === "fixed" ? -this.offset.scroll.left : ( scrollIsRootNode ? 0 : this.offset.scroll.left ) )
                )
            };

        },

        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove();
            }
            this.helper = null;
            this.cancelHelperRemoval = false;
            if ( this.destroyOnClear ) {
                this.destroy();
            }
        },

        _normalizeRightBottom: function() {
            if ( this.options.axis !== "y" && this.helper.css( "right" ) !== "auto" ) {
                this.helper.width( this.helper.width() );
                this.helper.css( "right", "auto" );
            }
            if ( this.options.axis !== "x" && this.helper.css( "bottom" ) !== "auto" ) {
                this.helper.height( this.helper.height() );
                this.helper.css( "bottom", "auto" );
            }
        },

        // From now on bulk stuff - mainly helpers

        _trigger: function( type, event, ui ) {
            ui = ui || this._uiHash();
            $.ui.plugin.call( this, type, [ event, ui, this ], true );

            // Absolute position and offset (see #6884 ) have to be recalculated after plugins
            if ( /^(drag|start|stop)/.test( type ) ) {
                this.positionAbs = this._convertPositionTo( "absolute" );
                ui.offset = this.positionAbs;
            }
            return $.Widget.prototype._trigger.call( this, type, event, ui );
        },

        plugins: {},

        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }

    });

    $.ui.plugin.add( "draggable", "connectToSortable", {
        start: function( event, ui, draggable ) {
            var uiSortable = $.extend( {}, ui, {
                item: draggable.element
            });

            draggable.sortables = [];
            $( draggable.options.connectToSortable ).each(function() {
                var sortable = $( this ).sortable( "instance" );

                if ( sortable && !sortable.options.disabled ) {
                    draggable.sortables.push( sortable );

                    // refreshPositions is called at drag start to refresh the containerCache
                    // which is used in drag. This ensures it's initialized and synchronized
                    // with any changes that might have happened on the page since initialization.
                    sortable.refreshPositions();
                    sortable._trigger("activate", event, uiSortable);
                }
            });
        },
        stop: function( event, ui, draggable ) {
            var uiSortable = $.extend( {}, ui, {
                item: draggable.element
            });

            draggable.cancelHelperRemoval = false;

            $.each( draggable.sortables, function() {
                var sortable = this;

                if ( sortable.isOver ) {
                    sortable.isOver = 0;

                    // Allow this sortable to handle removing the helper
                    draggable.cancelHelperRemoval = true;
                    sortable.cancelHelperRemoval = false;

                    // Use _storedCSS To restore properties in the sortable,
                    // as this also handles revert (#9675) since the draggable
                    // may have modified them in unexpected ways (#8809)
                    sortable._storedCSS = {
                        position: sortable.placeholder.css( "position" ),
                        top: sortable.placeholder.css( "top" ),
                        left: sortable.placeholder.css( "left" )
                    };

                    sortable._mouseStop(event);

                    // Once drag has ended, the sortable should return to using
                    // its original helper, not the shared helper from draggable
                    sortable.options.helper = sortable.options._helper;
                } else {
                    // Prevent this Sortable from removing the helper.
                    // However, don't set the draggable to remove the helper
                    // either as another connected Sortable may yet handle the removal.
                    sortable.cancelHelperRemoval = true;

                    sortable._trigger( "deactivate", event, uiSortable );
                }
            });
        },
        drag: function( event, ui, draggable ) {
            $.each( draggable.sortables, function() {
                var innermostIntersecting = false,
                    sortable = this;

                // Copy over variables that sortable's _intersectsWith uses
                sortable.positionAbs = draggable.positionAbs;
                sortable.helperProportions = draggable.helperProportions;
                sortable.offset.click = draggable.offset.click;

                if ( sortable._intersectsWith( sortable.containerCache ) ) {
                    innermostIntersecting = true;

                    $.each( draggable.sortables, function() {
                        // Copy over variables that sortable's _intersectsWith uses
                        this.positionAbs = draggable.positionAbs;
                        this.helperProportions = draggable.helperProportions;
                        this.offset.click = draggable.offset.click;

                        if ( this !== sortable &&
                            this._intersectsWith( this.containerCache ) &&
                            $.contains( sortable.element[ 0 ], this.element[ 0 ] ) ) {
                            innermostIntersecting = false;
                        }

                        return innermostIntersecting;
                    });
                }

                if ( innermostIntersecting ) {
                    // If it intersects, we use a little isOver variable and set it once,
                    // so that the move-in stuff gets fired only once.
                    if ( !sortable.isOver ) {
                        sortable.isOver = 1;

                        // Store draggable's parent in case we need to reappend to it later.
                        draggable._parent = ui.helper.parent();


                        sortable.currentItem = ui.helper
                            .appendTo( sortable.element )
                            .data( "ui-sortable-item", true );

                        // Store helper option to later restore it
                        sortable.options._helper = sortable.options.helper;

                        sortable.options.helper = function() {
                            return ui.helper[ 0 ];
                        };

                        // Fire the start events of the sortable with our passed browser event,
                        // and our own helper (so it doesn't create a new one)
                        event.target = sortable.currentItem[ 0 ];
                        sortable._mouseCapture( event, true );
                        sortable._mouseStart( event, true, true );

                        // Because the browser event is way off the new appended portlet,
                        // modify necessary variables to reflect the changes
                        sortable.offset.click.top = draggable.offset.click.top;
                        sortable.offset.click.left = draggable.offset.click.left;
                        sortable.offset.parent.left -= draggable.offset.parent.left -
                            sortable.offset.parent.left;
                        sortable.offset.parent.top -= draggable.offset.parent.top -
                            sortable.offset.parent.top;

                        draggable._trigger( "toSortable", event );

                        // Inform draggable that the helper is in a valid drop zone,
                        // used solely in the revert option to handle "valid/invalid".
                        draggable.dropped = sortable.element;

                        // Need to refreshPositions of all sortables in the case that
                        // adding to one sortable changes the location of the other sortables (#9675)
                        $.each( draggable.sortables, function() {
                            this.refreshPositions();
                        });

                        // hack so receive/update callbacks work (mostly)
                        draggable.currentItem = draggable.element;
                        sortable.fromOutside = draggable;
                    }

                    if ( sortable.currentItem ) {
                        sortable._mouseDrag( event );
                        // Copy the sortable's position because the draggable's can potentially reflect
                        // a relative position, while sortable is always absolute, which the dragged
                        // element has now become. (#8809)
                        ui.position = sortable.position;
                    }
                } else {
                    // If it doesn't intersect with the sortable, and it intersected before,
                    // we fake the drag stop of the sortable, but make sure it doesn't remove
                    // the helper by using cancelHelperRemoval.
                    if ( sortable.isOver ) {

                        sortable.isOver = 0;
                        sortable.cancelHelperRemoval = true;

                        // Calling sortable's mouseStop would trigger a revert,
                        // so revert must be temporarily false until after mouseStop is called.
                        sortable.options._revert = sortable.options.revert;
                        sortable.options.revert = false;

                        sortable._trigger( "out", event, sortable._uiHash( sortable ) );
                        sortable._mouseStop( event, true );

                        // restore sortable behaviors that were modfied
                        // when the draggable entered the sortable area (#9481)
                        sortable.options.revert = sortable.options._revert;
                        sortable.options.helper = sortable.options._helper;

                        if ( sortable.placeholder ) {
                            sortable.placeholder.remove();
                        }

                        // Restore and recalculate the draggable's offset considering the sortable
                        // may have modified them in unexpected ways. (#8809, #10669)
                        ui.helper.appendTo( draggable._parent );
                        draggable._refreshOffsets( event );
                        ui.position = draggable._generatePosition( event, true );

                        draggable._trigger( "fromSortable", event );

                        // Inform draggable that the helper is no longer in a valid drop zone
                        draggable.dropped = false;

                        // Need to refreshPositions of all sortables just in case removing
                        // from one sortable changes the location of other sortables (#9675)
                        $.each( draggable.sortables, function() {
                            this.refreshPositions();
                        });
                    }
                }
            });
        }
    });

    $.ui.plugin.add("draggable", "cursor", {
        start: function( event, ui, instance ) {
            var t = $( "body" ),
                o = instance.options;

            if (t.css("cursor")) {
                o._cursor = t.css("cursor");
            }
            t.css("cursor", o.cursor);
        },
        stop: function( event, ui, instance ) {
            var o = instance.options;
            if (o._cursor) {
                $("body").css("cursor", o._cursor);
            }
        }
    });

    $.ui.plugin.add("draggable", "opacity", {
        start: function( event, ui, instance ) {
            var t = $( ui.helper ),
                o = instance.options;
            if (t.css("opacity")) {
                o._opacity = t.css("opacity");
            }
            t.css("opacity", o.opacity);
        },
        stop: function( event, ui, instance ) {
            var o = instance.options;
            if (o._opacity) {
                $(ui.helper).css("opacity", o._opacity);
            }
        }
    });

    $.ui.plugin.add("draggable", "scroll", {
        start: function( event, ui, i ) {
            if ( !i.scrollParentNotHidden ) {
                i.scrollParentNotHidden = i.helper.scrollParent( false );
            }

            if ( i.scrollParentNotHidden[ 0 ] !== i.document[ 0 ] && i.scrollParentNotHidden[ 0 ].tagName !== "HTML" ) {
                i.overflowOffset = i.scrollParentNotHidden.offset();
            }
        },
        drag: function( event, ui, i  ) {

            var o = i.options,
                scrolled = false,
                scrollParent = i.scrollParentNotHidden[ 0 ],
                document = i.document[ 0 ];

            if ( scrollParent !== document && scrollParent.tagName !== "HTML" ) {
                if ( !o.axis || o.axis !== "x" ) {
                    if ( ( i.overflowOffset.top + scrollParent.offsetHeight ) - event.pageY < o.scrollSensitivity ) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
                    } else if ( event.pageY - i.overflowOffset.top < o.scrollSensitivity ) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
                    }
                }

                if ( !o.axis || o.axis !== "y" ) {
                    if ( ( i.overflowOffset.left + scrollParent.offsetWidth ) - event.pageX < o.scrollSensitivity ) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
                    } else if ( event.pageX - i.overflowOffset.left < o.scrollSensitivity ) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
                    }
                }

            } else {

                if (!o.axis || o.axis !== "x") {
                    if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
                    } else if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
                    }
                }

                if (!o.axis || o.axis !== "y") {
                    if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
                    } else if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
                    }
                }

            }

            if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(i, event);
            }

        }
    });

    $.ui.plugin.add("draggable", "snap", {
        start: function( event, ui, i ) {

            var o = i.options;

            i.snapElements = [];

            $(o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap).each(function() {
                var $t = $(this),
                    $o = $t.offset();
                if (this !== i.element[0]) {
                    i.snapElements.push({
                        item: this,
                        width: $t.outerWidth(), height: $t.outerHeight(),
                        top: $o.top, left: $o.left
                    });
                }
            });

        },
        drag: function( event, ui, inst ) {

            var ts, bs, ls, rs, l, r, t, b, i, first,
                o = inst.options,
                d = o.snapTolerance,
                x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
                y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

            for (i = inst.snapElements.length - 1; i >= 0; i--){

                l = inst.snapElements[i].left - inst.margins.left;
                r = l + inst.snapElements[i].width;
                t = inst.snapElements[i].top - inst.margins.top;
                b = t + inst.snapElements[i].height;

                if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d || !$.contains( inst.snapElements[ i ].item.ownerDocument, inst.snapElements[ i ].item ) ) {
                    if (inst.snapElements[i].snapping) {
                        (inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
                    }
                    inst.snapElements[i].snapping = false;
                    continue;
                }

                if (o.snapMode !== "inner") {
                    ts = Math.abs(t - y2) <= d;
                    bs = Math.abs(b - y1) <= d;
                    ls = Math.abs(l - x2) <= d;
                    rs = Math.abs(r - x1) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo("relative", { top: t - inst.helperProportions.height, left: 0 }).top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo("relative", { top: b, left: 0 }).top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l - inst.helperProportions.width }).left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r }).left;
                    }
                }

                first = (ts || bs || ls || rs);

                if (o.snapMode !== "outer") {
                    ts = Math.abs(t - y1) <= d;
                    bs = Math.abs(b - y2) <= d;
                    ls = Math.abs(l - x1) <= d;
                    rs = Math.abs(r - x2) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo("relative", { top: t, left: 0 }).top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo("relative", { top: b - inst.helperProportions.height, left: 0 }).top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l }).left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r - inst.helperProportions.width }).left;
                    }
                }

                if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
                    (inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
                }
                inst.snapElements[i].snapping = (ts || bs || ls || rs || first);

            }

        }
    });

    $.ui.plugin.add("draggable", "stack", {
        start: function( event, ui, instance ) {
            var min,
                o = instance.options,
                group = $.makeArray($(o.stack)).sort(function(a, b) {
                    return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0);
                });

            if (!group.length) { return; }

            min = parseInt($(group[0]).css("zIndex"), 10) || 0;
            $(group).each(function(i) {
                $(this).css("zIndex", min + i);
            });
            this.css("zIndex", (min + group.length));
        }
    });

    $.ui.plugin.add("draggable", "zIndex", {
        start: function( event, ui, instance ) {
            var t = $( ui.helper ),
                o = instance.options;

            if (t.css("zIndex")) {
                o._zIndex = t.css("zIndex");
            }
            t.css("zIndex", o.zIndex);
        },
        stop: function( event, ui, instance ) {
            var o = instance.options;

            if (o._zIndex) {
                $(ui.helper).css("zIndex", o._zIndex);
            }
        }
    });

    var draggable = $.ui.draggable;


    /*!
     * jQuery UI Resizable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/resizable/
     */


    $.widget("ui.resizable", $.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            containment: false,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            // See #7960
            zIndex: 90,

            // callbacks
            resize: null,
            start: null,
            stop: null
        },

        _num: function( value ) {
            return parseInt( value, 10 ) || 0;
        },

        _isNumber: function( value ) {
            return !isNaN( parseInt( value, 10 ) );
        },

        _hasScroll: function( el, a ) {

            if ( $( el ).css( "overflow" ) === "hidden") {
                return false;
            }

            var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
                has = false;

            if ( el[ scroll ] > 0 ) {
                return true;
            }

            // TODO: determine which cases actually cause this to happen
            // if the element doesn't have the scroll set, see if it's possible to
            // set the scroll
            el[ scroll ] = 1;
            has = ( el[ scroll ] > 0 );
            el[ scroll ] = 0;
            return has;
        },

        _create: function() {

            var n, i, handle, axis, hname,
                that = this,
                o = this.options;
            this.element.addClass("ui-resizable");

            $.extend(this, {
                _aspectRatio: !!(o.aspectRatio),
                aspectRatio: o.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
            });

            // Wrap the element if it cannot hold child nodes
            if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) {

                this.element.wrap(
                    $("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })
                );

                this.element = this.element.parent().data(
                    "ui-resizable", this.element.resizable( "instance" )
                );

                this.elementIsWrapper = true;

                this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                });
                this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                });
                // support: Safari
                // Prevent Safari textarea resize
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");

                this._proportionallyResizeElements.push( this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                }) );

                // support: IE9
                // avoid IE jump (hard set the margin)
                this.originalElement.css({ margin: this.originalElement.css("margin") });

                this._proportionallyResize();
            }

            this.handles = o.handles ||
                ( !$(".ui-resizable-handle", this.element).length ?
                    "e,s,se" : {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } );

            this._handles = $();
            if ( this.handles.constructor === String ) {

                if ( this.handles === "all") {
                    this.handles = "n,e,s,w,se,sw,ne,nw";
                }

                n = this.handles.split(",");
                this.handles = {};

                for (i = 0; i < n.length; i++) {

                    handle = $.trim(n[i]);
                    hname = "ui-resizable-" + handle;
                    axis = $("<div class='ui-resizable-handle " + hname + "'></div>");

                    axis.css({ zIndex: o.zIndex });

                    // TODO : What's going on here?
                    if ("se" === handle) {
                        axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
                    }

                    this.handles[handle] = ".ui-resizable-" + handle;
                    this.element.append(axis);
                }

            }

            this._renderAxis = function(target) {

                var i, axis, padPos, padWrapper;

                target = target || this.element;

                for (i in this.handles) {

                    if (this.handles[i].constructor === String) {
                        this.handles[i] = this.element.children( this.handles[ i ] ).first().show();
                    } else if ( this.handles[ i ].jquery || this.handles[ i ].nodeType ) {
                        this.handles[ i ] = $( this.handles[ i ] );
                        this._on( this.handles[ i ], { "mousedown": that._mouseDown });
                    }

                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)) {

                        axis = $(this.handles[i], this.element);

                        padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth();

                        padPos = [ "padding",
                            /ne|nw|n/.test(i) ? "Top" :
                                /se|sw|s/.test(i) ? "Bottom" :
                                    /^e$/.test(i) ? "Right" : "Left" ].join("");

                        target.css(padPos, padWrapper);

                        this._proportionallyResize();
                    }

                    this._handles = this._handles.add( this.handles[ i ] );
                }
            };

            // TODO: make renderAxis a prototype function
            this._renderAxis(this.element);

            this._handles = this._handles.add( this.element.find( ".ui-resizable-handle" ) );
            this._handles.disableSelection();

            this._handles.mouseover(function() {
                if (!that.resizing) {
                    if (this.className) {
                        axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    }
                    that.axis = axis && axis[1] ? axis[1] : "se";
                }
            });

            if (o.autoHide) {
                this._handles.hide();
                $(this.element)
                    .addClass("ui-resizable-autohide")
                    .mouseenter(function() {
                        if (o.disabled) {
                            return;
                        }
                        $(this).removeClass("ui-resizable-autohide");
                        that._handles.show();
                    })
                    .mouseleave(function() {
                        if (o.disabled) {
                            return;
                        }
                        if (!that.resizing) {
                            $(this).addClass("ui-resizable-autohide");
                            that._handles.hide();
                        }
                    });
            }

            this._mouseInit();
        },

        _destroy: function() {

            this._mouseDestroy();

            var wrapper,
                _destroy = function(exp) {
                    $(exp)
                        .removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing")
                        .removeData("resizable")
                        .removeData("ui-resizable")
                        .unbind(".resizable")
                        .find(".ui-resizable-handle")
                        .remove();
                };

            // TODO: Unwrap at same DOM position
            if (this.elementIsWrapper) {
                _destroy(this.element);
                wrapper = this.element;
                this.originalElement.css({
                    position: wrapper.css("position"),
                    width: wrapper.outerWidth(),
                    height: wrapper.outerHeight(),
                    top: wrapper.css("top"),
                    left: wrapper.css("left")
                }).insertAfter( wrapper );
                wrapper.remove();
            }

            this.originalElement.css("resize", this.originalResizeStyle);
            _destroy(this.originalElement);

            return this;
        },

        _mouseCapture: function(event) {
            var i, handle,
                capture = false;

            for (i in this.handles) {
                handle = $(this.handles[i])[0];
                if (handle === event.target || $.contains(handle, event.target)) {
                    capture = true;
                }
            }

            return !this.options.disabled && capture;
        },

        _mouseStart: function(event) {

            var curleft, curtop, cursor,
                o = this.options,
                el = this.element;

            this.resizing = true;

            this._renderProxy();

            curleft = this._num(this.helper.css("left"));
            curtop = this._num(this.helper.css("top"));

            if (o.containment) {
                curleft += $(o.containment).scrollLeft() || 0;
                curtop += $(o.containment).scrollTop() || 0;
            }

            this.offset = this.helper.offset();
            this.position = { left: curleft, top: curtop };

            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: el.width(),
                height: el.height()
            };

            this.originalSize = this._helper ? {
                width: el.outerWidth(),
                height: el.outerHeight()
            } : {
                width: el.width(),
                height: el.height()
            };

            this.sizeDiff = {
                width: el.outerWidth() - el.width(),
                height: el.outerHeight() - el.height()
            };

            this.originalPosition = { left: curleft, top: curtop };
            this.originalMousePosition = { left: event.pageX, top: event.pageY };

            this.aspectRatio = (typeof o.aspectRatio === "number") ?
                o.aspectRatio :
                ((this.originalSize.width / this.originalSize.height) || 1);

            cursor = $(".ui-resizable-" + this.axis).css("cursor");
            $("body").css("cursor", cursor === "auto" ? this.axis + "-resize" : cursor);

            el.addClass("ui-resizable-resizing");
            this._propagate("start", event);
            return true;
        },

        _mouseDrag: function(event) {

            var data, props,
                smp = this.originalMousePosition,
                a = this.axis,
                dx = (event.pageX - smp.left) || 0,
                dy = (event.pageY - smp.top) || 0,
                trigger = this._change[a];

            this._updatePrevProperties();

            if (!trigger) {
                return false;
            }

            data = trigger.apply(this, [ event, dx, dy ]);

            this._updateVirtualBoundaries(event.shiftKey);
            if (this._aspectRatio || event.shiftKey) {
                data = this._updateRatio(data, event);
            }

            data = this._respectSize(data, event);

            this._updateCache(data);

            this._propagate("resize", event);

            props = this._applyChanges();

            if ( !this._helper && this._proportionallyResizeElements.length ) {
                this._proportionallyResize();
            }

            if ( !$.isEmptyObject( props ) ) {
                this._updatePrevProperties();
                this._trigger( "resize", event, this.ui() );
                this._applyChanges();
            }

            return false;
        },

        _mouseStop: function(event) {

            this.resizing = false;
            var pr, ista, soffseth, soffsetw, s, left, top,
                o = this.options, that = this;

            if (this._helper) {

                pr = this._proportionallyResizeElements;
                ista = pr.length && (/textarea/i).test(pr[0].nodeName);
                soffseth = ista && this._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height;
                soffsetw = ista ? 0 : that.sizeDiff.width;

                s = {
                    width: (that.helper.width()  - soffsetw),
                    height: (that.helper.height() - soffseth)
                };
                left = (parseInt(that.element.css("left"), 10) +
                    (that.position.left - that.originalPosition.left)) || null;
                top = (parseInt(that.element.css("top"), 10) +
                    (that.position.top - that.originalPosition.top)) || null;

                if (!o.animate) {
                    this.element.css($.extend(s, { top: top, left: left }));
                }

                that.helper.height(that.size.height);
                that.helper.width(that.size.width);

                if (this._helper && !o.animate) {
                    this._proportionallyResize();
                }
            }

            $("body").css("cursor", "auto");

            this.element.removeClass("ui-resizable-resizing");

            this._propagate("stop", event);

            if (this._helper) {
                this.helper.remove();
            }

            return false;

        },

        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            };
        },

        _applyChanges: function() {
            var props = {};

            if ( this.position.top !== this.prevPosition.top ) {
                props.top = this.position.top + "px";
            }
            if ( this.position.left !== this.prevPosition.left ) {
                props.left = this.position.left + "px";
            }
            if ( this.size.width !== this.prevSize.width ) {
                props.width = this.size.width + "px";
            }
            if ( this.size.height !== this.prevSize.height ) {
                props.height = this.size.height + "px";
            }

            this.helper.css( props );

            return props;
        },

        _updateVirtualBoundaries: function(forceAspectRatio) {
            var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b,
                o = this.options;

            b = {
                minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : Infinity,
                minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : Infinity
            };

            if (this._aspectRatio || forceAspectRatio) {
                pMinWidth = b.minHeight * this.aspectRatio;
                pMinHeight = b.minWidth / this.aspectRatio;
                pMaxWidth = b.maxHeight * this.aspectRatio;
                pMaxHeight = b.maxWidth / this.aspectRatio;

                if (pMinWidth > b.minWidth) {
                    b.minWidth = pMinWidth;
                }
                if (pMinHeight > b.minHeight) {
                    b.minHeight = pMinHeight;
                }
                if (pMaxWidth < b.maxWidth) {
                    b.maxWidth = pMaxWidth;
                }
                if (pMaxHeight < b.maxHeight) {
                    b.maxHeight = pMaxHeight;
                }
            }
            this._vBoundaries = b;
        },

        _updateCache: function(data) {
            this.offset = this.helper.offset();
            if (this._isNumber(data.left)) {
                this.position.left = data.left;
            }
            if (this._isNumber(data.top)) {
                this.position.top = data.top;
            }
            if (this._isNumber(data.height)) {
                this.size.height = data.height;
            }
            if (this._isNumber(data.width)) {
                this.size.width = data.width;
            }
        },

        _updateRatio: function( data ) {

            var cpos = this.position,
                csize = this.size,
                a = this.axis;

            if (this._isNumber(data.height)) {
                data.width = (data.height * this.aspectRatio);
            } else if (this._isNumber(data.width)) {
                data.height = (data.width / this.aspectRatio);
            }

            if (a === "sw") {
                data.left = cpos.left + (csize.width - data.width);
                data.top = null;
            }
            if (a === "nw") {
                data.top = cpos.top + (csize.height - data.height);
                data.left = cpos.left + (csize.width - data.width);
            }

            return data;
        },

        _respectSize: function( data ) {

            var o = this._vBoundaries,
                a = this.axis,
                ismaxw = this._isNumber(data.width) && o.maxWidth && (o.maxWidth < data.width),
                ismaxh = this._isNumber(data.height) && o.maxHeight && (o.maxHeight < data.height),
                isminw = this._isNumber(data.width) && o.minWidth && (o.minWidth > data.width),
                isminh = this._isNumber(data.height) && o.minHeight && (o.minHeight > data.height),
                dw = this.originalPosition.left + this.originalSize.width,
                dh = this.position.top + this.size.height,
                cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);
            if (isminw) {
                data.width = o.minWidth;
            }
            if (isminh) {
                data.height = o.minHeight;
            }
            if (ismaxw) {
                data.width = o.maxWidth;
            }
            if (ismaxh) {
                data.height = o.maxHeight;
            }

            if (isminw && cw) {
                data.left = dw - o.minWidth;
            }
            if (ismaxw && cw) {
                data.left = dw - o.maxWidth;
            }
            if (isminh && ch) {
                data.top = dh - o.minHeight;
            }
            if (ismaxh && ch) {
                data.top = dh - o.maxHeight;
            }

            // Fixing jump error on top/left - bug #2330
            if (!data.width && !data.height && !data.left && data.top) {
                data.top = null;
            } else if (!data.width && !data.height && !data.top && data.left) {
                data.left = null;
            }

            return data;
        },

        _getPaddingPlusBorderDimensions: function( element ) {
            var i = 0,
                widths = [],
                borders = [
                    element.css( "borderTopWidth" ),
                    element.css( "borderRightWidth" ),
                    element.css( "borderBottomWidth" ),
                    element.css( "borderLeftWidth" )
                ],
                paddings = [
                    element.css( "paddingTop" ),
                    element.css( "paddingRight" ),
                    element.css( "paddingBottom" ),
                    element.css( "paddingLeft" )
                ];

            for ( ; i < 4; i++ ) {
                widths[ i ] = ( parseInt( borders[ i ], 10 ) || 0 );
                widths[ i ] += ( parseInt( paddings[ i ], 10 ) || 0 );
            }

            return {
                height: widths[ 0 ] + widths[ 2 ],
                width: widths[ 1 ] + widths[ 3 ]
            };
        },

        _proportionallyResize: function() {

            if (!this._proportionallyResizeElements.length) {
                return;
            }

            var prel,
                i = 0,
                element = this.helper || this.element;

            for ( ; i < this._proportionallyResizeElements.length; i++) {

                prel = this._proportionallyResizeElements[i];

                // TODO: Seems like a bug to cache this.outerDimensions
                // considering that we are in a loop.
                if (!this.outerDimensions) {
                    this.outerDimensions = this._getPaddingPlusBorderDimensions( prel );
                }

                prel.css({
                    height: (element.height() - this.outerDimensions.height) || 0,
                    width: (element.width() - this.outerDimensions.width) || 0
                });

            }

        },

        _renderProxy: function() {

            var el = this.element, o = this.options;
            this.elementOffset = el.offset();

            if (this._helper) {

                this.helper = this.helper || $("<div style='overflow:hidden;'></div>");

                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++o.zIndex //TODO: Don't modify option
                });

                this.helper
                    .appendTo("body")
                    .disableSelection();

            } else {
                this.helper = this.element;
            }

        },

        _change: {
            e: function(event, dx) {
                return { width: this.originalSize.width + dx };
            },
            w: function(event, dx) {
                var cs = this.originalSize, sp = this.originalPosition;
                return { left: sp.left + dx, width: cs.width - dx };
            },
            n: function(event, dx, dy) {
                var cs = this.originalSize, sp = this.originalPosition;
                return { top: sp.top + dy, height: cs.height - dy };
            },
            s: function(event, dx, dy) {
                return { height: this.originalSize.height + dy };
            },
            se: function(event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments),
                    this._change.e.apply(this, [ event, dx, dy ]));
            },
            sw: function(event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments),
                    this._change.w.apply(this, [ event, dx, dy ]));
            },
            ne: function(event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments),
                    this._change.e.apply(this, [ event, dx, dy ]));
            },
            nw: function(event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments),
                    this._change.w.apply(this, [ event, dx, dy ]));
            }
        },

        _propagate: function(n, event) {
            $.ui.plugin.call(this, n, [ event, this.ui() ]);
            (n !== "resize" && this._trigger(n, event, this.ui()));
        },

        plugins: {},

        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }

    });

    /*
     * Resizable Extensions
     */

    $.ui.plugin.add("resizable", "animate", {

        stop: function( event ) {
            var that = $(this).resizable( "instance" ),
                o = that.options,
                pr = that._proportionallyResizeElements,
                ista = pr.length && (/textarea/i).test(pr[0].nodeName),
                soffseth = ista && that._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height,
                soffsetw = ista ? 0 : that.sizeDiff.width,
                style = { width: (that.size.width - soffsetw), height: (that.size.height - soffseth) },
                left = (parseInt(that.element.css("left"), 10) +
                    (that.position.left - that.originalPosition.left)) || null,
                top = (parseInt(that.element.css("top"), 10) +
                    (that.position.top - that.originalPosition.top)) || null;

            that.element.animate(
                $.extend(style, top && left ? { top: top, left: left } : {}), {
                    duration: o.animateDuration,
                    easing: o.animateEasing,
                    step: function() {

                        var data = {
                            width: parseInt(that.element.css("width"), 10),
                            height: parseInt(that.element.css("height"), 10),
                            top: parseInt(that.element.css("top"), 10),
                            left: parseInt(that.element.css("left"), 10)
                        };

                        if (pr && pr.length) {
                            $(pr[0]).css({ width: data.width, height: data.height });
                        }

                        // propagating resize, and updating values for each animation step
                        that._updateCache(data);
                        that._propagate("resize", event);

                    }
                }
            );
        }

    });

    $.ui.plugin.add( "resizable", "containment", {

        start: function() {
            var element, p, co, ch, cw, width, height,
                that = $( this ).resizable( "instance" ),
                o = that.options,
                el = that.element,
                oc = o.containment,
                ce = ( oc instanceof $ ) ? oc.get( 0 ) : ( /parent/.test( oc ) ) ? el.parent().get( 0 ) : oc;

            if ( !ce ) {
                return;
            }

            that.containerElement = $( ce );

            if ( /document/.test( oc ) || oc === document ) {
                that.containerOffset = {
                    left: 0,
                    top: 0
                };
                that.containerPosition = {
                    left: 0,
                    top: 0
                };

                that.parentData = {
                    element: $( document ),
                    left: 0,
                    top: 0,
                    width: $( document ).width(),
                    height: $( document ).height() || document.body.parentNode.scrollHeight
                };
            } else {
                element = $( ce );
                p = [];
                $([ "Top", "Right", "Left", "Bottom" ]).each(function( i, name ) {
                    p[ i ] = that._num( element.css( "padding" + name ) );
                });

                that.containerOffset = element.offset();
                that.containerPosition = element.position();
                that.containerSize = {
                    height: ( element.innerHeight() - p[ 3 ] ),
                    width: ( element.innerWidth() - p[ 1 ] )
                };

                co = that.containerOffset;
                ch = that.containerSize.height;
                cw = that.containerSize.width;
                width = ( that._hasScroll ( ce, "left" ) ? ce.scrollWidth : cw );
                height = ( that._hasScroll ( ce ) ? ce.scrollHeight : ch ) ;

                that.parentData = {
                    element: ce,
                    left: co.left,
                    top: co.top,
                    width: width,
                    height: height
                };
            }
        },

        resize: function( event ) {
            var woset, hoset, isParent, isOffsetRelative,
                that = $( this ).resizable( "instance" ),
                o = that.options,
                co = that.containerOffset,
                cp = that.position,
                pRatio = that._aspectRatio || event.shiftKey,
                cop = {
                    top: 0,
                    left: 0
                },
                ce = that.containerElement,
                continueResize = true;

            if ( ce[ 0 ] !== document && ( /static/ ).test( ce.css( "position" ) ) ) {
                cop = co;
            }

            if ( cp.left < ( that._helper ? co.left : 0 ) ) {
                that.size.width = that.size.width +
                    ( that._helper ?
                        ( that.position.left - co.left ) :
                        ( that.position.left - cop.left ) );

                if ( pRatio ) {
                    that.size.height = that.size.width / that.aspectRatio;
                    continueResize = false;
                }
                that.position.left = o.helper ? co.left : 0;
            }

            if ( cp.top < ( that._helper ? co.top : 0 ) ) {
                that.size.height = that.size.height +
                    ( that._helper ?
                        ( that.position.top - co.top ) :
                        that.position.top );

                if ( pRatio ) {
                    that.size.width = that.size.height * that.aspectRatio;
                    continueResize = false;
                }
                that.position.top = that._helper ? co.top : 0;
            }

            isParent = that.containerElement.get( 0 ) === that.element.parent().get( 0 );
            isOffsetRelative = /relative|absolute/.test( that.containerElement.css( "position" ) );

            if ( isParent && isOffsetRelative ) {
                that.offset.left = that.parentData.left + that.position.left;
                that.offset.top = that.parentData.top + that.position.top;
            } else {
                that.offset.left = that.element.offset().left;
                that.offset.top = that.element.offset().top;
            }

            woset = Math.abs( that.sizeDiff.width +
                (that._helper ?
                that.offset.left - cop.left :
                    (that.offset.left - co.left)) );

            hoset = Math.abs( that.sizeDiff.height +
                (that._helper ?
                that.offset.top - cop.top :
                    (that.offset.top - co.top)) );

            if ( woset + that.size.width >= that.parentData.width ) {
                that.size.width = that.parentData.width - woset;
                if ( pRatio ) {
                    that.size.height = that.size.width / that.aspectRatio;
                    continueResize = false;
                }
            }

            if ( hoset + that.size.height >= that.parentData.height ) {
                that.size.height = that.parentData.height - hoset;
                if ( pRatio ) {
                    that.size.width = that.size.height * that.aspectRatio;
                    continueResize = false;
                }
            }

            if ( !continueResize ) {
                that.position.left = that.prevPosition.left;
                that.position.top = that.prevPosition.top;
                that.size.width = that.prevSize.width;
                that.size.height = that.prevSize.height;
            }
        },

        stop: function() {
            var that = $( this ).resizable( "instance" ),
                o = that.options,
                co = that.containerOffset,
                cop = that.containerPosition,
                ce = that.containerElement,
                helper = $( that.helper ),
                ho = helper.offset(),
                w = helper.outerWidth() - that.sizeDiff.width,
                h = helper.outerHeight() - that.sizeDiff.height;

            if ( that._helper && !o.animate && ( /relative/ ).test( ce.css( "position" ) ) ) {
                $( this ).css({
                    left: ho.left - cop.left - co.left,
                    width: w,
                    height: h
                });
            }

            if ( that._helper && !o.animate && ( /static/ ).test( ce.css( "position" ) ) ) {
                $( this ).css({
                    left: ho.left - cop.left - co.left,
                    width: w,
                    height: h
                });
            }
        }
    });

    $.ui.plugin.add("resizable", "alsoResize", {

        start: function() {
            var that = $(this).resizable( "instance" ),
                o = that.options;

            $(o.alsoResize).each(function() {
                var el = $(this);
                el.data("ui-resizable-alsoresize", {
                    width: parseInt(el.width(), 10), height: parseInt(el.height(), 10),
                    left: parseInt(el.css("left"), 10), top: parseInt(el.css("top"), 10)
                });
            });
        },

        resize: function(event, ui) {
            var that = $(this).resizable( "instance" ),
                o = that.options,
                os = that.originalSize,
                op = that.originalPosition,
                delta = {
                    height: (that.size.height - os.height) || 0,
                    width: (that.size.width - os.width) || 0,
                    top: (that.position.top - op.top) || 0,
                    left: (that.position.left - op.left) || 0
                };

            $(o.alsoResize).each(function() {
                var el = $(this), start = $(this).data("ui-resizable-alsoresize"), style = {},
                    css = el.parents(ui.originalElement[0]).length ?
                        [ "width", "height" ] :
                        [ "width", "height", "top", "left" ];

                $.each(css, function(i, prop) {
                    var sum = (start[prop] || 0) + (delta[prop] || 0);
                    if (sum && sum >= 0) {
                        style[prop] = sum || null;
                    }
                });

                el.css(style);
            });
        },

        stop: function() {
            $(this).removeData("resizable-alsoresize");
        }
    });

    $.ui.plugin.add("resizable", "ghost", {

        start: function() {

            var that = $(this).resizable( "instance" ), o = that.options, cs = that.size;

            that.ghost = that.originalElement.clone();
            that.ghost
                .css({
                    opacity: 0.25,
                    display: "block",
                    position: "relative",
                    height: cs.height,
                    width: cs.width,
                    margin: 0,
                    left: 0,
                    top: 0
                })
                .addClass("ui-resizable-ghost")
                .addClass(typeof o.ghost === "string" ? o.ghost : "");

            that.ghost.appendTo(that.helper);

        },

        resize: function() {
            var that = $(this).resizable( "instance" );
            if (that.ghost) {
                that.ghost.css({
                    position: "relative",
                    height: that.size.height,
                    width: that.size.width
                });
            }
        },

        stop: function() {
            var that = $(this).resizable( "instance" );
            if (that.ghost && that.helper) {
                that.helper.get(0).removeChild(that.ghost.get(0));
            }
        }

    });

    $.ui.plugin.add("resizable", "grid", {

        resize: function() {
            var outerDimensions,
                that = $(this).resizable( "instance" ),
                o = that.options,
                cs = that.size,
                os = that.originalSize,
                op = that.originalPosition,
                a = that.axis,
                grid = typeof o.grid === "number" ? [ o.grid, o.grid ] : o.grid,
                gridX = (grid[0] || 1),
                gridY = (grid[1] || 1),
                ox = Math.round((cs.width - os.width) / gridX) * gridX,
                oy = Math.round((cs.height - os.height) / gridY) * gridY,
                newWidth = os.width + ox,
                newHeight = os.height + oy,
                isMaxWidth = o.maxWidth && (o.maxWidth < newWidth),
                isMaxHeight = o.maxHeight && (o.maxHeight < newHeight),
                isMinWidth = o.minWidth && (o.minWidth > newWidth),
                isMinHeight = o.minHeight && (o.minHeight > newHeight);

            o.grid = grid;

            if (isMinWidth) {
                newWidth += gridX;
            }
            if (isMinHeight) {
                newHeight += gridY;
            }
            if (isMaxWidth) {
                newWidth -= gridX;
            }
            if (isMaxHeight) {
                newHeight -= gridY;
            }

            if (/^(se|s|e)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
            } else if (/^(ne)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.top = op.top - oy;
            } else if (/^(sw)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.left = op.left - ox;
            } else {
                if ( newHeight - gridY <= 0 || newWidth - gridX <= 0) {
                    outerDimensions = that._getPaddingPlusBorderDimensions( this );
                }

                if ( newHeight - gridY > 0 ) {
                    that.size.height = newHeight;
                    that.position.top = op.top - oy;
                } else {
                    newHeight = gridY - outerDimensions.height;
                    that.size.height = newHeight;
                    that.position.top = op.top + os.height - newHeight;
                }
                if ( newWidth - gridX > 0 ) {
                    that.size.width = newWidth;
                    that.position.left = op.left - ox;
                } else {
                    newWidth = gridX - outerDimensions.width;
                    that.size.width = newWidth;
                    that.position.left = op.left + os.width - newWidth;
                }
            }
        }

    });

    var resizable = $.ui.resizable;


    /*!
     * jQuery UI Dialog 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/dialog/
     */


    var dialog = $.widget( "ui.dialog", {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoOpen: true,
            buttons: [],
            closeOnEscape: true,
            closeText: "Close",
            dialogClass: "",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                // Ensure the titlebar is always visible
                using: function( pos ) {
                    var topOffset = $( this ).css( pos ).offset().top;
                    if ( topOffset < 0 ) {
                        $( this ).css( "top", pos.top - topOffset );
                    }
                }
            },
            resizable: true,
            show: null,
            title: null,
            width: 300,

            // callbacks
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },

        sizeRelatedOptions: {
            buttons: true,
            height: true,
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true,
            width: true
        },

        resizableRelatedOptions: {
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true
        },

        _create: function() {
            this.originalCss = {
                display: this.element[ 0 ].style.display,
                width: this.element[ 0 ].style.width,
                minHeight: this.element[ 0 ].style.minHeight,
                maxHeight: this.element[ 0 ].style.maxHeight,
                height: this.element[ 0 ].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index( this.element )
            };
            this.originalTitle = this.element.attr( "title" );
            this.options.title = this.options.title || this.originalTitle;

            this._createWrapper();

            this.element
                .show()
                .removeAttr( "title" )
                .addClass( "ui-dialog-content ui-widget-content" )
                .appendTo( this.uiDialog );

            this._createTitlebar();
            this._createButtonPane();

            if ( this.options.draggable && $.fn.draggable ) {
                this._makeDraggable();
            }
            if ( this.options.resizable && $.fn.resizable ) {
                this._makeResizable();
            }

            this._isOpen = false;

            this._trackFocus();
        },

        _init: function() {
            if ( this.options.autoOpen ) {
                this.open();
            }
        },

        _appendTo: function() {
            var element = this.options.appendTo;
            if ( element && (element.jquery || element.nodeType) ) {
                return $( element );
            }
            return this.document.find( element || "body" ).eq( 0 );
        },

        _destroy: function() {
            var next,
                originalPosition = this.originalPosition;

            this._untrackInstance();
            this._destroyOverlay();

            this.element
                .removeUniqueId()
                .removeClass( "ui-dialog-content ui-widget-content" )
                .css( this.originalCss )
                // Without detaching first, the following becomes really slow
                .detach();

            this.uiDialog.stop( true, true ).remove();

            if ( this.originalTitle ) {
                this.element.attr( "title", this.originalTitle );
            }

            next = originalPosition.parent.children().eq( originalPosition.index );
            // Don't try to place the dialog next to itself (#8613)
            if ( next.length && next[ 0 ] !== this.element[ 0 ] ) {
                next.before( this.element );
            } else {
                originalPosition.parent.append( this.element );
            }
        },

        widget: function() {
            return this.uiDialog;
        },

        disable: $.noop,
        enable: $.noop,

        close: function( event ) {
            var activeElement,
                that = this;

            if ( !this._isOpen || this._trigger( "beforeClose", event ) === false ) {
                return;
            }

            this._isOpen = false;
            this._focusedElement = null;
            this._destroyOverlay();
            this._untrackInstance();

            if ( !this.opener.filter( ":focusable" ).focus().length ) {

                // support: IE9
                // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
                try {
                    activeElement = this.document[ 0 ].activeElement;

                    // Support: IE9, IE10
                    // If the <body> is blurred, IE will switch windows, see #4520
                    if ( activeElement && activeElement.nodeName.toLowerCase() !== "body" ) {

                        // Hiding a focused element doesn't trigger blur in WebKit
                        // so in case we have nothing to focus on, explicitly blur the active element
                        // https://bugs.webkit.org/show_bug.cgi?id=47182
                        $( activeElement ).blur();
                    }
                } catch ( error ) {}
            }

            this._hide( this.uiDialog, this.options.hide, function() {
                that._trigger( "close", event );
            });
        },

        isOpen: function() {
            return this._isOpen;
        },

        moveToTop: function() {
            this._moveToTop();
        },

        _moveToTop: function( event, silent ) {
            var moved = false,
                zIndices = this.uiDialog.siblings( ".ui-front:visible" ).map(function() {
                    return +$( this ).css( "z-index" );
                }).get(),
                zIndexMax = Math.max.apply( null, zIndices );

            if ( zIndexMax >= +this.uiDialog.css( "z-index" ) ) {
                this.uiDialog.css( "z-index", zIndexMax + 1 );
                moved = true;
            }

            if ( moved && !silent ) {
                this._trigger( "focus", event );
            }
            return moved;
        },

        open: function() {
            var that = this;
            if ( this._isOpen ) {
                if ( this._moveToTop() ) {
                    this._focusTabbable();
                }
                return;
            }

            this._isOpen = true;
            this.opener = $( this.document[ 0 ].activeElement );

            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop( null, true );

            // Ensure the overlay is moved to the top with the dialog, but only when
            // opening. The overlay shouldn't move after the dialog is open so that
            // modeless dialogs opened after the modal dialog stack properly.
            if ( this.overlay ) {
                this.overlay.css( "z-index", this.uiDialog.css( "z-index" ) - 1 );
            }

            this._show( this.uiDialog, this.options.show, function() {
                that._focusTabbable();
                that._trigger( "focus" );
            });

            // Track the dialog immediately upon openening in case a focus event
            // somehow occurs outside of the dialog before an element inside the
            // dialog is focused (#10152)
            this._makeFocusTarget();

            this._trigger( "open" );
        },

        _focusTabbable: function() {
            // Set focus to the first match:
            // 1. An element that was focused previously
            // 2. First element inside the dialog matching [autofocus]
            // 3. Tabbable element inside the content element
            // 4. Tabbable element inside the buttonpane
            // 5. The close button
            // 6. The dialog itself
            var hasFocus = this._focusedElement;
            if ( !hasFocus ) {
                hasFocus = this.element.find( "[autofocus]" );
            }
            if ( !hasFocus.length ) {
                hasFocus = this.element.find( ":tabbable" );
            }
            if ( !hasFocus.length ) {
                hasFocus = this.uiDialogButtonPane.find( ":tabbable" );
            }
            if ( !hasFocus.length ) {
                hasFocus = this.uiDialogTitlebarClose.filter( ":tabbable" );
            }
            if ( !hasFocus.length ) {
                hasFocus = this.uiDialog;
            }
            hasFocus.eq( 0 ).focus();
        },

        _keepFocus: function( event ) {
            function checkFocus() {
                var activeElement = this.document[0].activeElement,
                    isActive = this.uiDialog[0] === activeElement ||
                        $.contains( this.uiDialog[0], activeElement );
                if ( !isActive ) {
                    this._focusTabbable();
                }
            }
            event.preventDefault();
            checkFocus.call( this );
            // support: IE
            // IE <= 8 doesn't prevent moving focus even with event.preventDefault()
            // so we check again later
            this._delay( checkFocus );
        },

        _createWrapper: function() {
            this.uiDialog = $("<div>")
                .addClass( "ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " +
                this.options.dialogClass )
                .hide()
                .attr({
                    // Setting tabIndex makes the div focusable
                    tabIndex: -1,
                    role: "dialog"
                })
                .appendTo( this._appendTo() );

            this._on( this.uiDialog, {
                keydown: function( event ) {
                    if ( this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode &&
                        event.keyCode === $.ui.keyCode.ESCAPE ) {
                        event.preventDefault();
                        this.close( event );
                        return;
                    }

                    // prevent tabbing out of dialogs
                    if ( event.keyCode !== $.ui.keyCode.TAB || event.isDefaultPrevented() ) {
                        return;
                    }
                    var tabbables = this.uiDialog.find( ":tabbable" ),
                        first = tabbables.filter( ":first" ),
                        last = tabbables.filter( ":last" );

                    if ( ( event.target === last[0] || event.target === this.uiDialog[0] ) && !event.shiftKey ) {
                        this._delay(function() {
                            first.focus();
                        });
                        event.preventDefault();
                    } else if ( ( event.target === first[0] || event.target === this.uiDialog[0] ) && event.shiftKey ) {
                        this._delay(function() {
                            last.focus();
                        });
                        event.preventDefault();
                    }
                },
                mousedown: function( event ) {
                    if ( this._moveToTop( event ) ) {
                        this._focusTabbable();
                    }
                }
            });

            // We assume that any existing aria-describedby attribute means
            // that the dialog content is marked up properly
            // otherwise we brute force the content as the description
            if ( !this.element.find( "[aria-describedby]" ).length ) {
                this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr( "id" )
                });
            }
        },

        _createTitlebar: function() {
            var uiDialogTitle;

            this.uiDialogTitlebar = $( "<div>" )
                .addClass( "ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix" )
                .prependTo( this.uiDialog );
            this._on( this.uiDialogTitlebar, {
                mousedown: function( event ) {
                    // Don't prevent click on close button (#8838)
                    // Focusing a dialog that is partially scrolled out of view
                    // causes the browser to scroll it into view, preventing the click event
                    if ( !$( event.target ).closest( ".ui-dialog-titlebar-close" ) ) {
                        // Dialog isn't getting focus when dragging (#8063)
                        this.uiDialog.focus();
                    }
                }
            });

            // support: IE
            // Use type="button" to prevent enter keypresses in textboxes from closing the
            // dialog in IE (#9312)
            this.uiDialogTitlebarClose = $( "<button type='button'></button>" )
                .button({
                    label: this.options.closeText,
                    icons: {
                        primary: "ui-icon-closethick"
                    },
                    text: false
                })
                .addClass( "ui-dialog-titlebar-close" )
                .appendTo( this.uiDialogTitlebar );
            this._on( this.uiDialogTitlebarClose, {
                click: function( event ) {
                    event.preventDefault();
                    this.close( event );
                }
            });

            uiDialogTitle = $( "<span>" )
                .uniqueId()
                .addClass( "ui-dialog-title" )
                .prependTo( this.uiDialogTitlebar );
            this._title( uiDialogTitle );

            this.uiDialog.attr({
                "aria-labelledby": uiDialogTitle.attr( "id" )
            });
        },

        _title: function( title ) {
            if ( !this.options.title ) {
                title.html( "&#160;" );
            }
            title.text( this.options.title );
        },

        _createButtonPane: function() {
            this.uiDialogButtonPane = $( "<div>" )
                .addClass( "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix" );

            this.uiButtonSet = $( "<div>" )
                .addClass( "ui-dialog-buttonset" )
                .appendTo( this.uiDialogButtonPane );

            this._createButtons();
        },

        _createButtons: function() {
            var that = this,
                buttons = this.options.buttons;

            // if we already have a button pane, remove it
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();

            if ( $.isEmptyObject( buttons ) || ($.isArray( buttons ) && !buttons.length) ) {
                this.uiDialog.removeClass( "ui-dialog-buttons" );
                return;
            }

            $.each( buttons, function( name, props ) {
                var click, buttonOptions;
                props = $.isFunction( props ) ?
                { click: props, text: name } :
                    props;
                // Default to a non-submitting button
                props = $.extend( { type: "button" }, props );
                // Change the context for the click callback to be the main element
                click = props.click;
                props.click = function() {
                    click.apply( that.element[ 0 ], arguments );
                };
                buttonOptions = {
                    icons: props.icons,
                    text: props.showText
                };
                delete props.icons;
                delete props.showText;
                $( "<button></button>", props )
                    .button( buttonOptions )
                    .appendTo( that.uiButtonSet );
            });
            this.uiDialog.addClass( "ui-dialog-buttons" );
            this.uiDialogButtonPane.appendTo( this.uiDialog );
        },

        _makeDraggable: function() {
            var that = this,
                options = this.options;

            function filteredUi( ui ) {
                return {
                    position: ui.position,
                    offset: ui.offset
                };
            }

            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function( event, ui ) {
                    $( this ).addClass( "ui-dialog-dragging" );
                    that._blockFrames();
                    that._trigger( "dragStart", event, filteredUi( ui ) );
                },
                drag: function( event, ui ) {
                    that._trigger( "drag", event, filteredUi( ui ) );
                },
                stop: function( event, ui ) {
                    var left = ui.offset.left - that.document.scrollLeft(),
                        top = ui.offset.top - that.document.scrollTop();

                    options.position = {
                        my: "left top",
                        at: "left" + (left >= 0 ? "+" : "") + left + " " +
                        "top" + (top >= 0 ? "+" : "") + top,
                        of: that.window
                    };
                    $( this ).removeClass( "ui-dialog-dragging" );
                    that._unblockFrames();
                    that._trigger( "dragStop", event, filteredUi( ui ) );
                }
            });
        },

        _makeResizable: function() {
            var that = this,
                options = this.options,
                handles = options.resizable,
            // .ui-resizable has position: relative defined in the stylesheet
            // but dialogs have to use absolute or fixed positioning
                position = this.uiDialog.css("position"),
                resizeHandles = typeof handles === "string" ?
                    handles	:
                    "n,e,s,w,se,sw,ne,nw";

            function filteredUi( ui ) {
                return {
                    originalPosition: ui.originalPosition,
                    originalSize: ui.originalSize,
                    position: ui.position,
                    size: ui.size
                };
            }

            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: options.maxWidth,
                maxHeight: options.maxHeight,
                minWidth: options.minWidth,
                minHeight: this._minHeight(),
                handles: resizeHandles,
                start: function( event, ui ) {
                    $( this ).addClass( "ui-dialog-resizing" );
                    that._blockFrames();
                    that._trigger( "resizeStart", event, filteredUi( ui ) );
                },
                resize: function( event, ui ) {
                    that._trigger( "resize", event, filteredUi( ui ) );
                },
                stop: function( event, ui ) {
                    var offset = that.uiDialog.offset(),
                        left = offset.left - that.document.scrollLeft(),
                        top = offset.top - that.document.scrollTop();

                    options.height = that.uiDialog.height();
                    options.width = that.uiDialog.width();
                    options.position = {
                        my: "left top",
                        at: "left" + (left >= 0 ? "+" : "") + left + " " +
                        "top" + (top >= 0 ? "+" : "") + top,
                        of: that.window
                    };
                    $( this ).removeClass( "ui-dialog-resizing" );
                    that._unblockFrames();
                    that._trigger( "resizeStop", event, filteredUi( ui ) );
                }
            })
                .css( "position", position );
        },

        _trackFocus: function() {
            this._on( this.widget(), {
                focusin: function( event ) {
                    this._makeFocusTarget();
                    this._focusedElement = $( event.target );
                }
            });
        },

        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift( this );
        },

        _untrackInstance: function() {
            var instances = this._trackingInstances(),
                exists = $.inArray( this, instances );
            if ( exists !== -1 ) {
                instances.splice( exists, 1 );
            }
        },

        _trackingInstances: function() {
            var instances = this.document.data( "ui-dialog-instances" );
            if ( !instances ) {
                instances = [];
                this.document.data( "ui-dialog-instances", instances );
            }
            return instances;
        },

        _minHeight: function() {
            var options = this.options;

            return options.height === "auto" ?
                options.minHeight :
                Math.min( options.minHeight, options.height );
        },

        _position: function() {
            // Need to show the dialog to get the actual offset in the position plugin
            var isVisible = this.uiDialog.is( ":visible" );
            if ( !isVisible ) {
                this.uiDialog.show();
            }
            this.uiDialog.position( this.options.position );
            if ( !isVisible ) {
                this.uiDialog.hide();
            }
        },

        _setOptions: function( options ) {
            var that = this,
                resize = false,
                resizableOptions = {};

            $.each( options, function( key, value ) {
                that._setOption( key, value );

                if ( key in that.sizeRelatedOptions ) {
                    resize = true;
                }
                if ( key in that.resizableRelatedOptions ) {
                    resizableOptions[ key ] = value;
                }
            });

            if ( resize ) {
                this._size();
                this._position();
            }
            if ( this.uiDialog.is( ":data(ui-resizable)" ) ) {
                this.uiDialog.resizable( "option", resizableOptions );
            }
        },

        _setOption: function( key, value ) {
            var isDraggable, isResizable,
                uiDialog = this.uiDialog;

            if ( key === "dialogClass" ) {
                uiDialog
                    .removeClass( this.options.dialogClass )
                    .addClass( value );
            }

            if ( key === "disabled" ) {
                return;
            }

            this._super( key, value );

            if ( key === "appendTo" ) {
                this.uiDialog.appendTo( this._appendTo() );
            }

            if ( key === "buttons" ) {
                this._createButtons();
            }

            if ( key === "closeText" ) {
                this.uiDialogTitlebarClose.button({
                    // Ensure that we always pass a string
                    label: "" + value
                });
            }

            if ( key === "draggable" ) {
                isDraggable = uiDialog.is( ":data(ui-draggable)" );
                if ( isDraggable && !value ) {
                    uiDialog.draggable( "destroy" );
                }

                if ( !isDraggable && value ) {
                    this._makeDraggable();
                }
            }

            if ( key === "position" ) {
                this._position();
            }

            if ( key === "resizable" ) {
                // currently resizable, becoming non-resizable
                isResizable = uiDialog.is( ":data(ui-resizable)" );
                if ( isResizable && !value ) {
                    uiDialog.resizable( "destroy" );
                }

                // currently resizable, changing handles
                if ( isResizable && typeof value === "string" ) {
                    uiDialog.resizable( "option", "handles", value );
                }

                // currently non-resizable, becoming resizable
                if ( !isResizable && value !== false ) {
                    this._makeResizable();
                }
            }

            if ( key === "title" ) {
                this._title( this.uiDialogTitlebar.find( ".ui-dialog-title" ) );
            }
        },

        _size: function() {
            // If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
            // divs will both have width and height set, so we need to reset them
            var nonContentHeight, minContentHeight, maxContentHeight,
                options = this.options;

            // Reset content sizing
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });

            if ( options.minWidth > options.width ) {
                options.width = options.minWidth;
            }

            // reset wrapper sizing
            // determine the height of all the non-content elements
            nonContentHeight = this.uiDialog.css({
                height: "auto",
                width: options.width
            })
                .outerHeight();
            minContentHeight = Math.max( 0, options.minHeight - nonContentHeight );
            maxContentHeight = typeof options.maxHeight === "number" ?
                Math.max( 0, options.maxHeight - nonContentHeight ) :
                "none";

            if ( options.height === "auto" ) {
                this.element.css({
                    minHeight: minContentHeight,
                    maxHeight: maxContentHeight,
                    height: "auto"
                });
            } else {
                this.element.height( Math.max( 0, options.height - nonContentHeight ) );
            }

            if ( this.uiDialog.is( ":data(ui-resizable)" ) ) {
                this.uiDialog.resizable( "option", "minHeight", this._minHeight() );
            }
        },

        _blockFrames: function() {
            this.iframeBlocks = this.document.find( "iframe" ).map(function() {
                var iframe = $( this );

                return $( "<div>" )
                    .css({
                        position: "absolute",
                        width: iframe.outerWidth(),
                        height: iframe.outerHeight()
                    })
                    .appendTo( iframe.parent() )
                    .offset( iframe.offset() )[0];
            });
        },

        _unblockFrames: function() {
            if ( this.iframeBlocks ) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks;
            }
        },

        _allowInteraction: function( event ) {
            if ( $( event.target ).closest( ".ui-dialog" ).length ) {
                return true;
            }

            // TODO: Remove hack when datepicker implements
            // the .ui-front logic (#8989)
            return !!$( event.target ).closest( ".ui-datepicker" ).length;
        },

        _createOverlay: function() {
            if ( !this.options.modal ) {
                return;
            }

            // We use a delay in case the overlay is created from an
            // event that we're going to be cancelling (#2804)
            var isOpening = true;
            this._delay(function() {
                isOpening = false;
            });

            if ( !this.document.data( "ui-dialog-overlays" ) ) {

                // Prevent use of anchors and inputs
                // Using _on() for an event handler shared across many instances is
                // safe because the dialogs stack and must be closed in reverse order
                this._on( this.document, {
                    focusin: function( event ) {
                        if ( isOpening ) {
                            return;
                        }

                        if ( !this._allowInteraction( event ) ) {
                            event.preventDefault();
                            this._trackingInstances()[ 0 ]._focusTabbable();
                        }
                    }
                });
            }

            this.overlay = $( "<div>" )
                .addClass( "ui-widget-overlay ui-front" )
                .appendTo( this._appendTo() );
            this._on( this.overlay, {
                mousedown: "_keepFocus"
            });
            this.document.data( "ui-dialog-overlays",
                (this.document.data( "ui-dialog-overlays" ) || 0) + 1 );
        },

        _destroyOverlay: function() {
            if ( !this.options.modal ) {
                return;
            }

            if ( this.overlay ) {
                var overlays = this.document.data( "ui-dialog-overlays" ) - 1;

                if ( !overlays ) {
                    this.document
                        .unbind( "focusin" )
                        .removeData( "ui-dialog-overlays" );
                } else {
                    this.document.data( "ui-dialog-overlays", overlays );
                }

                this.overlay.remove();
                this.overlay = null;
            }
        }
    });


    /*!
     * jQuery UI Droppable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/droppable/
     */


    $.widget( "ui.droppable", {
        version: "1.11.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: false,
            addClasses: true,
            greedy: false,
            hoverClass: false,
            scope: "default",
            tolerance: "intersect",

            // callbacks
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {

            var proportions,
                o = this.options,
                accept = o.accept;

            this.isover = false;
            this.isout = true;

            this.accept = $.isFunction( accept ) ? accept : function( d ) {
                return d.is( accept );
            };

            this.proportions = function( /* valueToWrite */ ) {
                if ( arguments.length ) {
                    // Store the droppable's proportions
                    proportions = arguments[ 0 ];
                } else {
                    // Retrieve or derive the droppable's proportions
                    return proportions ?
                        proportions :
                        proportions = {
                            width: this.element[ 0 ].offsetWidth,
                            height: this.element[ 0 ].offsetHeight
                        };
                }
            };

            this._addToManager( o.scope );

            o.addClasses && this.element.addClass( "ui-droppable" );

        },

        _addToManager: function( scope ) {
            // Add the reference and positions to the manager
            $.ui.ddmanager.droppables[ scope ] = $.ui.ddmanager.droppables[ scope ] || [];
            $.ui.ddmanager.droppables[ scope ].push( this );
        },

        _splice: function( drop ) {
            var i = 0;
            for ( ; i < drop.length; i++ ) {
                if ( drop[ i ] === this ) {
                    drop.splice( i, 1 );
                }
            }
        },

        _destroy: function() {
            var drop = $.ui.ddmanager.droppables[ this.options.scope ];

            this._splice( drop );

            this.element.removeClass( "ui-droppable ui-droppable-disabled" );
        },

        _setOption: function( key, value ) {

            if ( key === "accept" ) {
                this.accept = $.isFunction( value ) ? value : function( d ) {
                    return d.is( value );
                };
            } else if ( key === "scope" ) {
                var drop = $.ui.ddmanager.droppables[ this.options.scope ];

                this._splice( drop );
                this._addToManager( value );
            }

            this._super( key, value );
        },

        _activate: function( event ) {
            var draggable = $.ui.ddmanager.current;
            if ( this.options.activeClass ) {
                this.element.addClass( this.options.activeClass );
            }
            if ( draggable ){
                this._trigger( "activate", event, this.ui( draggable ) );
            }
        },

        _deactivate: function( event ) {
            var draggable = $.ui.ddmanager.current;
            if ( this.options.activeClass ) {
                this.element.removeClass( this.options.activeClass );
            }
            if ( draggable ){
                this._trigger( "deactivate", event, this.ui( draggable ) );
            }
        },

        _over: function( event ) {

            var draggable = $.ui.ddmanager.current;

            // Bail if draggable and droppable are same element
            if ( !draggable || ( draggable.currentItem || draggable.element )[ 0 ] === this.element[ 0 ] ) {
                return;
            }

            if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem || draggable.element ) ) ) {
                if ( this.options.hoverClass ) {
                    this.element.addClass( this.options.hoverClass );
                }
                this._trigger( "over", event, this.ui( draggable ) );
            }

        },

        _out: function( event ) {

            var draggable = $.ui.ddmanager.current;

            // Bail if draggable and droppable are same element
            if ( !draggable || ( draggable.currentItem || draggable.element )[ 0 ] === this.element[ 0 ] ) {
                return;
            }

            if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem || draggable.element ) ) ) {
                if ( this.options.hoverClass ) {
                    this.element.removeClass( this.options.hoverClass );
                }
                this._trigger( "out", event, this.ui( draggable ) );
            }

        },

        _drop: function( event, custom ) {

            var draggable = custom || $.ui.ddmanager.current,
                childrenIntersection = false;

            // Bail if draggable and droppable are same element
            if ( !draggable || ( draggable.currentItem || draggable.element )[ 0 ] === this.element[ 0 ] ) {
                return false;
            }

            this.element.find( ":data(ui-droppable)" ).not( ".ui-draggable-dragging" ).each(function() {
                var inst = $( this ).droppable( "instance" );
                if (
                    inst.options.greedy &&
                    !inst.options.disabled &&
                    inst.options.scope === draggable.options.scope &&
                    inst.accept.call( inst.element[ 0 ], ( draggable.currentItem || draggable.element ) ) &&
                    $.ui.intersect( draggable, $.extend( inst, { offset: inst.element.offset() } ), inst.options.tolerance, event )
                ) { childrenIntersection = true; return false; }
            });
            if ( childrenIntersection ) {
                return false;
            }

            if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem || draggable.element ) ) ) {
                if ( this.options.activeClass ) {
                    this.element.removeClass( this.options.activeClass );
                }
                if ( this.options.hoverClass ) {
                    this.element.removeClass( this.options.hoverClass );
                }
                this._trigger( "drop", event, this.ui( draggable ) );
                return this.element;
            }

            return false;

        },

        ui: function( c ) {
            return {
                draggable: ( c.currentItem || c.element ),
                helper: c.helper,
                position: c.position,
                offset: c.positionAbs
            };
        }

    });

    $.ui.intersect = (function() {
        function isOverAxis( x, reference, size ) {
            return ( x >= reference ) && ( x < ( reference + size ) );
        }

        return function( draggable, droppable, toleranceMode, event ) {

            if ( !droppable.offset ) {
                return false;
            }

            var x1 = ( draggable.positionAbs || draggable.position.absolute ).left + draggable.margins.left,
                y1 = ( draggable.positionAbs || draggable.position.absolute ).top + draggable.margins.top,
                x2 = x1 + draggable.helperProportions.width,
                y2 = y1 + draggable.helperProportions.height,
                l = droppable.offset.left,
                t = droppable.offset.top,
                r = l + droppable.proportions().width,
                b = t + droppable.proportions().height;

            switch ( toleranceMode ) {
                case "fit":
                    return ( l <= x1 && x2 <= r && t <= y1 && y2 <= b );
                case "intersect":
                    return ( l < x1 + ( draggable.helperProportions.width / 2 ) && // Right Half
                    x2 - ( draggable.helperProportions.width / 2 ) < r && // Left Half
                    t < y1 + ( draggable.helperProportions.height / 2 ) && // Bottom Half
                    y2 - ( draggable.helperProportions.height / 2 ) < b ); // Top Half
                case "pointer":
                    return isOverAxis( event.pageY, t, droppable.proportions().height ) && isOverAxis( event.pageX, l, droppable.proportions().width );
                case "touch":
                    return (
                            ( y1 >= t && y1 <= b ) || // Top edge touching
                            ( y2 >= t && y2 <= b ) || // Bottom edge touching
                            ( y1 < t && y2 > b ) // Surrounded vertically
                        ) && (
                            ( x1 >= l && x1 <= r ) || // Left edge touching
                            ( x2 >= l && x2 <= r ) || // Right edge touching
                            ( x1 < l && x2 > r ) // Surrounded horizontally
                        );
                default:
                    return false;
            }
        };
    })();

    /*
     This manager tracks offsets of draggables and droppables
     */
    $.ui.ddmanager = {
        current: null,
        droppables: { "default": [] },
        prepareOffsets: function( t, event ) {

            var i, j,
                m = $.ui.ddmanager.droppables[ t.options.scope ] || [],
                type = event ? event.type : null, // workaround for #2317
                list = ( t.currentItem || t.element ).find( ":data(ui-droppable)" ).addBack();

            droppablesLoop: for ( i = 0; i < m.length; i++ ) {

                // No disabled and non-accepted
                if ( m[ i ].options.disabled || ( t && !m[ i ].accept.call( m[ i ].element[ 0 ], ( t.currentItem || t.element ) ) ) ) {
                    continue;
                }

                // Filter out elements in the current dragged item
                for ( j = 0; j < list.length; j++ ) {
                    if ( list[ j ] === m[ i ].element[ 0 ] ) {
                        m[ i ].proportions().height = 0;
                        continue droppablesLoop;
                    }
                }

                m[ i ].visible = m[ i ].element.css( "display" ) !== "none";
                if ( !m[ i ].visible ) {
                    continue;
                }

                // Activate the droppable if used directly from draggables
                if ( type === "mousedown" ) {
                    m[ i ]._activate.call( m[ i ], event );
                }

                m[ i ].offset = m[ i ].element.offset();
                m[ i ].proportions({ width: m[ i ].element[ 0 ].offsetWidth, height: m[ i ].element[ 0 ].offsetHeight });

            }

        },
        drop: function( draggable, event ) {

            var dropped = false;
            // Create a copy of the droppables in case the list changes during the drop (#9116)
            $.each( ( $.ui.ddmanager.droppables[ draggable.options.scope ] || [] ).slice(), function() {

                if ( !this.options ) {
                    return;
                }
                if ( !this.options.disabled && this.visible && $.ui.intersect( draggable, this, this.options.tolerance, event ) ) {
                    dropped = this._drop.call( this, event ) || dropped;
                }

                if ( !this.options.disabled && this.visible && this.accept.call( this.element[ 0 ], ( draggable.currentItem || draggable.element ) ) ) {
                    this.isout = true;
                    this.isover = false;
                    this._deactivate.call( this, event );
                }

            });
            return dropped;

        },
        dragStart: function( draggable, event ) {
            // Listen for scrolling so that if the dragging causes scrolling the position of the droppables can be recalculated (see #5003)
            draggable.element.parentsUntil( "body" ).bind( "scroll.droppable", function() {
                if ( !draggable.options.refreshPositions ) {
                    $.ui.ddmanager.prepareOffsets( draggable, event );
                }
            });
        },
        drag: function( draggable, event ) {

            // If you have a highly dynamic page, you might try this option. It renders positions every time you move the mouse.
            if ( draggable.options.refreshPositions ) {
                $.ui.ddmanager.prepareOffsets( draggable, event );
            }

            // Run through all droppables and check their positions based on specific tolerance options
            $.each( $.ui.ddmanager.droppables[ draggable.options.scope ] || [], function() {

                if ( this.options.disabled || this.greedyChild || !this.visible ) {
                    return;
                }

                var parentInstance, scope, parent,
                    intersects = $.ui.intersect( draggable, this, this.options.tolerance, event ),
                    c = !intersects && this.isover ? "isout" : ( intersects && !this.isover ? "isover" : null );
                if ( !c ) {
                    return;
                }

                if ( this.options.greedy ) {
                    // find droppable parents with same scope
                    scope = this.options.scope;
                    parent = this.element.parents( ":data(ui-droppable)" ).filter(function() {
                        return $( this ).droppable( "instance" ).options.scope === scope;
                    });

                    if ( parent.length ) {
                        parentInstance = $( parent[ 0 ] ).droppable( "instance" );
                        parentInstance.greedyChild = ( c === "isover" );
                    }
                }

                // we just moved into a greedy child
                if ( parentInstance && c === "isover" ) {
                    parentInstance.isover = false;
                    parentInstance.isout = true;
                    parentInstance._out.call( parentInstance, event );
                }

                this[ c ] = true;
                this[c === "isout" ? "isover" : "isout"] = false;
                this[c === "isover" ? "_over" : "_out"].call( this, event );

                // we just moved out of a greedy child
                if ( parentInstance && c === "isout" ) {
                    parentInstance.isout = false;
                    parentInstance.isover = true;
                    parentInstance._over.call( parentInstance, event );
                }
            });

        },
        dragStop: function( draggable, event ) {
            draggable.element.parentsUntil( "body" ).unbind( "scroll.droppable" );
            // Call prepareOffsets one final time since IE does not fire return scroll events when overflow was caused by drag (see #5003)
            if ( !draggable.options.refreshPositions ) {
                $.ui.ddmanager.prepareOffsets( draggable, event );
            }
        }
    };

    var droppable = $.ui.droppable;


    /*!
     * jQuery UI Effects 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/category/effects-core/
     */


    var dataSpace = "ui-effects-",

    // Create a local jQuery because jQuery Color relies on it and the
    // global may not exist with AMD and a custom build (#10199)
        jQuery = $;

    $.effects = {
        effect: {}
    };

    /*!
     * jQuery Color Animations v2.1.2
     * https://github.com/jquery/jquery-color
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * Date: Wed Jan 16 08:47:09 2013 -0600
     */
    (function( jQuery, undefined ) {

        var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

        // plusequals test for += 100 -= 100
            rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
        // a set of RE's that can match strings and generate color tuples.
            stringParsers = [ {
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function( execResult ) {
                    return [
                        execResult[ 1 ],
                        execResult[ 2 ],
                        execResult[ 3 ],
                        execResult[ 4 ]
                    ];
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function( execResult ) {
                    return [
                        execResult[ 1 ] * 2.55,
                        execResult[ 2 ] * 2.55,
                        execResult[ 3 ] * 2.55,
                        execResult[ 4 ]
                    ];
                }
            }, {
                // this regex ignores A-F because it's compared against an already lowercased string
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function( execResult ) {
                    return [
                        parseInt( execResult[ 1 ], 16 ),
                        parseInt( execResult[ 2 ], 16 ),
                        parseInt( execResult[ 3 ], 16 )
                    ];
                }
            }, {
                // this regex ignores A-F because it's compared against an already lowercased string
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function( execResult ) {
                    return [
                        parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
                        parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
                        parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
                    ];
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function( execResult ) {
                    return [
                        execResult[ 1 ],
                        execResult[ 2 ] / 100,
                        execResult[ 3 ] / 100,
                        execResult[ 4 ]
                    ];
                }
            } ],

        // jQuery.Color( )
            color = jQuery.Color = function( color, green, blue, alpha ) {
                return new jQuery.Color.fn.parse( color, green, blue, alpha );
            },
            spaces = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },

                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            propTypes = {
                "byte": {
                    floor: true,
                    max: 255
                },
                "percent": {
                    max: 1
                },
                "degrees": {
                    mod: 360,
                    floor: true
                }
            },
            support = color.support = {},

        // element for support tests
            supportElem = jQuery( "<p>" )[ 0 ],

        // colors = jQuery.Color.names
            colors,

        // local aliases of functions called often
            each = jQuery.each;

// determine rgba support immediately
        supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
        support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

// define cache name and alpha properties
// for rgba and hsla spaces
        each( spaces, function( spaceName, space ) {
            space.cache = "_" + spaceName;
            space.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        });

        function clamp( value, prop, allowEmpty ) {
            var type = propTypes[ prop.type ] || {};

            if ( value == null ) {
                return (allowEmpty || !prop.def) ? null : prop.def;
            }

            // ~~ is an short way of doing floor for positive numbers
            value = type.floor ? ~~value : parseFloat( value );

            // IE will pass in empty strings as value for alpha,
            // which will hit this case
            if ( isNaN( value ) ) {
                return prop.def;
            }

            if ( type.mod ) {
                // we add mod before modding to make sure that negatives values
                // get converted properly: -10 -> 350
                return (value + type.mod) % type.mod;
            }

            // for now all property types without mod have min and max
            return 0 > value ? 0 : type.max < value ? type.max : value;
        }

        function stringParse( string ) {
            var inst = color(),
                rgba = inst._rgba = [];

            string = string.toLowerCase();

            each( stringParsers, function( i, parser ) {
                var parsed,
                    match = parser.re.exec( string ),
                    values = match && parser.parse( match ),
                    spaceName = parser.space || "rgba";

                if ( values ) {
                    parsed = inst[ spaceName ]( values );

                    // if this was an rgba parse the assignment might happen twice
                    // oh well....
                    inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
                    rgba = inst._rgba = parsed._rgba;

                    // exit each( stringParsers ) here because we matched
                    return false;
                }
            });

            // Found a stringParser that handled it
            if ( rgba.length ) {

                // if this came from a parsed string, force "transparent" when alpha is 0
                // chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
                if ( rgba.join() === "0,0,0,0" ) {
                    jQuery.extend( rgba, colors.transparent );
                }
                return inst;
            }

            // named colors
            return colors[ string ];
        }

        color.fn = jQuery.extend( color.prototype, {
            parse: function( red, green, blue, alpha ) {
                if ( red === undefined ) {
                    this._rgba = [ null, null, null, null ];
                    return this;
                }
                if ( red.jquery || red.nodeType ) {
                    red = jQuery( red ).css( green );
                    green = undefined;
                }

                var inst = this,
                    type = jQuery.type( red ),
                    rgba = this._rgba = [];

                // more than 1 argument specified - assume ( red, green, blue, alpha )
                if ( green !== undefined ) {
                    red = [ red, green, blue, alpha ];
                    type = "array";
                }

                if ( type === "string" ) {
                    return this.parse( stringParse( red ) || colors._default );
                }

                if ( type === "array" ) {
                    each( spaces.rgba.props, function( key, prop ) {
                        rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
                    });
                    return this;
                }

                if ( type === "object" ) {
                    if ( red instanceof color ) {
                        each( spaces, function( spaceName, space ) {
                            if ( red[ space.cache ] ) {
                                inst[ space.cache ] = red[ space.cache ].slice();
                            }
                        });
                    } else {
                        each( spaces, function( spaceName, space ) {
                            var cache = space.cache;
                            each( space.props, function( key, prop ) {

                                // if the cache doesn't exist, and we know how to convert
                                if ( !inst[ cache ] && space.to ) {

                                    // if the value was null, we don't need to copy it
                                    // if the key was alpha, we don't need to copy it either
                                    if ( key === "alpha" || red[ key ] == null ) {
                                        return;
                                    }
                                    inst[ cache ] = space.to( inst._rgba );
                                }

                                // this is the only case where we allow nulls for ALL properties.
                                // call clamp with alwaysAllowEmpty
                                inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
                            });

                            // everything defined but alpha?
                            if ( inst[ cache ] && jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {
                                // use the default of 1
                                inst[ cache ][ 3 ] = 1;
                                if ( space.from ) {
                                    inst._rgba = space.from( inst[ cache ] );
                                }
                            }
                        });
                    }
                    return this;
                }
            },
            is: function( compare ) {
                var is = color( compare ),
                    same = true,
                    inst = this;

                each( spaces, function( _, space ) {
                    var localCache,
                        isCache = is[ space.cache ];
                    if (isCache) {
                        localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
                        each( space.props, function( _, prop ) {
                            if ( isCache[ prop.idx ] != null ) {
                                same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
                                return same;
                            }
                        });
                    }
                    return same;
                });
                return same;
            },
            _space: function() {
                var used = [],
                    inst = this;
                each( spaces, function( spaceName, space ) {
                    if ( inst[ space.cache ] ) {
                        used.push( spaceName );
                    }
                });
                return used.pop();
            },
            transition: function( other, distance ) {
                var end = color( other ),
                    spaceName = end._space(),
                    space = spaces[ spaceName ],
                    startColor = this.alpha() === 0 ? color( "transparent" ) : this,
                    start = startColor[ space.cache ] || space.to( startColor._rgba ),
                    result = start.slice();

                end = end[ space.cache ];
                each( space.props, function( key, prop ) {
                    var index = prop.idx,
                        startValue = start[ index ],
                        endValue = end[ index ],
                        type = propTypes[ prop.type ] || {};

                    // if null, don't override start value
                    if ( endValue === null ) {
                        return;
                    }
                    // if null - use end
                    if ( startValue === null ) {
                        result[ index ] = endValue;
                    } else {
                        if ( type.mod ) {
                            if ( endValue - startValue > type.mod / 2 ) {
                                startValue += type.mod;
                            } else if ( startValue - endValue > type.mod / 2 ) {
                                startValue -= type.mod;
                            }
                        }
                        result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
                    }
                });
                return this[ spaceName ]( result );
            },
            blend: function( opaque ) {
                // if we are already opaque - return ourself
                if ( this._rgba[ 3 ] === 1 ) {
                    return this;
                }

                var rgb = this._rgba.slice(),
                    a = rgb.pop(),
                    blend = color( opaque )._rgba;

                return color( jQuery.map( rgb, function( v, i ) {
                    return ( 1 - a ) * blend[ i ] + a * v;
                }));
            },
            toRgbaString: function() {
                var prefix = "rgba(",
                    rgba = jQuery.map( this._rgba, function( v, i ) {
                        return v == null ? ( i > 2 ? 1 : 0 ) : v;
                    });

                if ( rgba[ 3 ] === 1 ) {
                    rgba.pop();
                    prefix = "rgb(";
                }

                return prefix + rgba.join() + ")";
            },
            toHslaString: function() {
                var prefix = "hsla(",
                    hsla = jQuery.map( this.hsla(), function( v, i ) {
                        if ( v == null ) {
                            v = i > 2 ? 1 : 0;
                        }

                        // catch 1 and 2
                        if ( i && i < 3 ) {
                            v = Math.round( v * 100 ) + "%";
                        }
                        return v;
                    });

                if ( hsla[ 3 ] === 1 ) {
                    hsla.pop();
                    prefix = "hsl(";
                }
                return prefix + hsla.join() + ")";
            },
            toHexString: function( includeAlpha ) {
                var rgba = this._rgba.slice(),
                    alpha = rgba.pop();

                if ( includeAlpha ) {
                    rgba.push( ~~( alpha * 255 ) );
                }

                return "#" + jQuery.map( rgba, function( v ) {

                        // default to 0 when nulls exist
                        v = ( v || 0 ).toString( 16 );
                        return v.length === 1 ? "0" + v : v;
                    }).join("");
            },
            toString: function() {
                return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
            }
        });
        color.fn.parse.prototype = color.fn;

// hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

        function hue2rgb( p, q, h ) {
            h = ( h + 1 ) % 1;
            if ( h * 6 < 1 ) {
                return p + ( q - p ) * h * 6;
            }
            if ( h * 2 < 1) {
                return q;
            }
            if ( h * 3 < 2 ) {
                return p + ( q - p ) * ( ( 2 / 3 ) - h ) * 6;
            }
            return p;
        }

        spaces.hsla.to = function( rgba ) {
            if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
                return [ null, null, null, rgba[ 3 ] ];
            }
            var r = rgba[ 0 ] / 255,
                g = rgba[ 1 ] / 255,
                b = rgba[ 2 ] / 255,
                a = rgba[ 3 ],
                max = Math.max( r, g, b ),
                min = Math.min( r, g, b ),
                diff = max - min,
                add = max + min,
                l = add * 0.5,
                h, s;

            if ( min === max ) {
                h = 0;
            } else if ( r === max ) {
                h = ( 60 * ( g - b ) / diff ) + 360;
            } else if ( g === max ) {
                h = ( 60 * ( b - r ) / diff ) + 120;
            } else {
                h = ( 60 * ( r - g ) / diff ) + 240;
            }

            // chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
            // otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
            if ( diff === 0 ) {
                s = 0;
            } else if ( l <= 0.5 ) {
                s = diff / add;
            } else {
                s = diff / ( 2 - add );
            }
            return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
        };

        spaces.hsla.from = function( hsla ) {
            if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
                return [ null, null, null, hsla[ 3 ] ];
            }
            var h = hsla[ 0 ] / 360,
                s = hsla[ 1 ],
                l = hsla[ 2 ],
                a = hsla[ 3 ],
                q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
                p = 2 * l - q;

            return [
                Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
                Math.round( hue2rgb( p, q, h ) * 255 ),
                Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
                a
            ];
        };

        each( spaces, function( spaceName, space ) {
            var props = space.props,
                cache = space.cache,
                to = space.to,
                from = space.from;

            // makes rgba() and hsla()
            color.fn[ spaceName ] = function( value ) {

                // generate a cache for this space if it doesn't exist
                if ( to && !this[ cache ] ) {
                    this[ cache ] = to( this._rgba );
                }
                if ( value === undefined ) {
                    return this[ cache ].slice();
                }

                var ret,
                    type = jQuery.type( value ),
                    arr = ( type === "array" || type === "object" ) ? value : arguments,
                    local = this[ cache ].slice();

                each( props, function( key, prop ) {
                    var val = arr[ type === "object" ? key : prop.idx ];
                    if ( val == null ) {
                        val = local[ prop.idx ];
                    }
                    local[ prop.idx ] = clamp( val, prop );
                });

                if ( from ) {
                    ret = color( from( local ) );
                    ret[ cache ] = local;
                    return ret;
                } else {
                    return color( local );
                }
            };

            // makes red() green() blue() alpha() hue() saturation() lightness()
            each( props, function( key, prop ) {
                // alpha is included in more than one space
                if ( color.fn[ key ] ) {
                    return;
                }
                color.fn[ key ] = function( value ) {
                    var vtype = jQuery.type( value ),
                        fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
                        local = this[ fn ](),
                        cur = local[ prop.idx ],
                        match;

                    if ( vtype === "undefined" ) {
                        return cur;
                    }

                    if ( vtype === "function" ) {
                        value = value.call( this, cur );
                        vtype = jQuery.type( value );
                    }
                    if ( value == null && prop.empty ) {
                        return this;
                    }
                    if ( vtype === "string" ) {
                        match = rplusequals.exec( value );
                        if ( match ) {
                            value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
                        }
                    }
                    local[ prop.idx ] = value;
                    return this[ fn ]( local );
                };
            });
        });

// add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
        color.hook = function( hook ) {
            var hooks = hook.split( " " );
            each( hooks, function( i, hook ) {
                jQuery.cssHooks[ hook ] = {
                    set: function( elem, value ) {
                        var parsed, curElem,
                            backgroundColor = "";

                        if ( value !== "transparent" && ( jQuery.type( value ) !== "string" || ( parsed = stringParse( value ) ) ) ) {
                            value = color( parsed || value );
                            if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
                                curElem = hook === "backgroundColor" ? elem.parentNode : elem;
                                while (
                                (backgroundColor === "" || backgroundColor === "transparent") &&
                                curElem && curElem.style
                                    ) {
                                    try {
                                        backgroundColor = jQuery.css( curElem, "backgroundColor" );
                                        curElem = curElem.parentNode;
                                    } catch ( e ) {
                                    }
                                }

                                value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
                                    backgroundColor :
                                    "_default" );
                            }

                            value = value.toRgbaString();
                        }
                        try {
                            elem.style[ hook ] = value;
                        } catch ( e ) {
                            // wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
                        }
                    }
                };
                jQuery.fx.step[ hook ] = function( fx ) {
                    if ( !fx.colorInit ) {
                        fx.start = color( fx.elem, hook );
                        fx.end = color( fx.end );
                        fx.colorInit = true;
                    }
                    jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
                };
            });

        };

        color.hook( stepHooks );

        jQuery.cssHooks.borderColor = {
            expand: function( value ) {
                var expanded = {};

                each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
                    expanded[ "border" + part + "Color" ] = value;
                });
                return expanded;
            }
        };

// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
        colors = jQuery.Color.names = {
            // 4.1. Basic color keywords
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",

            // 4.2.3. "transparent" color keyword
            transparent: [ null, null, null, 0 ],

            _default: "#ffffff"
        };

    })( jQuery );

    /******************************************************************************/
    /****************************** CLASS ANIMATIONS ******************************/
    /******************************************************************************/
    (function() {

        var classAnimationActions = [ "add", "remove", "toggle" ],
            shorthandStyles = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };

        $.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function( _, prop ) {
            $.fx.step[ prop ] = function( fx ) {
                if ( fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr ) {
                    jQuery.style( fx.elem, prop, fx.end );
                    fx.setAttr = true;
                }
            };
        });

        function getElementStyles( elem ) {
            var key, len,
                style = elem.ownerDocument.defaultView ?
                    elem.ownerDocument.defaultView.getComputedStyle( elem, null ) :
                    elem.currentStyle,
                styles = {};

            if ( style && style.length && style[ 0 ] && style[ style[ 0 ] ] ) {
                len = style.length;
                while ( len-- ) {
                    key = style[ len ];
                    if ( typeof style[ key ] === "string" ) {
                        styles[ $.camelCase( key ) ] = style[ key ];
                    }
                }
                // support: Opera, IE <9
            } else {
                for ( key in style ) {
                    if ( typeof style[ key ] === "string" ) {
                        styles[ key ] = style[ key ];
                    }
                }
            }

            return styles;
        }

        function styleDifference( oldStyle, newStyle ) {
            var diff = {},
                name, value;

            for ( name in newStyle ) {
                value = newStyle[ name ];
                if ( oldStyle[ name ] !== value ) {
                    if ( !shorthandStyles[ name ] ) {
                        if ( $.fx.step[ name ] || !isNaN( parseFloat( value ) ) ) {
                            diff[ name ] = value;
                        }
                    }
                }
            }

            return diff;
        }

// support: jQuery <1.8
        if ( !$.fn.addBack ) {
            $.fn.addBack = function( selector ) {
                return this.add( selector == null ?
                        this.prevObject : this.prevObject.filter( selector )
                );
            };
        }

        $.effects.animateClass = function( value, duration, easing, callback ) {
            var o = $.speed( duration, easing, callback );

            return this.queue( function() {
                var animated = $( this ),
                    baseClass = animated.attr( "class" ) || "",
                    applyClassChange,
                    allAnimations = o.children ? animated.find( "*" ).addBack() : animated;

                // map the animated objects to store the original styles.
                allAnimations = allAnimations.map(function() {
                    var el = $( this );
                    return {
                        el: el,
                        start: getElementStyles( this )
                    };
                });

                // apply class change
                applyClassChange = function() {
                    $.each( classAnimationActions, function(i, action) {
                        if ( value[ action ] ) {
                            animated[ action + "Class" ]( value[ action ] );
                        }
                    });
                };
                applyClassChange();

                // map all animated objects again - calculate new styles and diff
                allAnimations = allAnimations.map(function() {
                    this.end = getElementStyles( this.el[ 0 ] );
                    this.diff = styleDifference( this.start, this.end );
                    return this;
                });

                // apply original class
                animated.attr( "class", baseClass );

                // map all animated objects again - this time collecting a promise
                allAnimations = allAnimations.map(function() {
                    var styleInfo = this,
                        dfd = $.Deferred(),
                        opts = $.extend({}, o, {
                            queue: false,
                            complete: function() {
                                dfd.resolve( styleInfo );
                            }
                        });

                    this.el.animate( this.diff, opts );
                    return dfd.promise();
                });

                // once all animations have completed:
                $.when.apply( $, allAnimations.get() ).done(function() {

                    // set the final class
                    applyClassChange();

                    // for each animated element,
                    // clear all css properties that were animated
                    $.each( arguments, function() {
                        var el = this.el;
                        $.each( this.diff, function(key) {
                            el.css( key, "" );
                        });
                    });

                    // this is guarnteed to be there if you use jQuery.speed()
                    // it also handles dequeuing the next anim...
                    o.complete.call( animated[ 0 ] );
                });
            });
        };

        $.fn.extend({
            addClass: (function( orig ) {
                return function( classNames, speed, easing, callback ) {
                    return speed ?
                        $.effects.animateClass.call( this,
                            { add: classNames }, speed, easing, callback ) :
                        orig.apply( this, arguments );
                };
            })( $.fn.addClass ),

            removeClass: (function( orig ) {
                return function( classNames, speed, easing, callback ) {
                    return arguments.length > 1 ?
                        $.effects.animateClass.call( this,
                            { remove: classNames }, speed, easing, callback ) :
                        orig.apply( this, arguments );
                };
            })( $.fn.removeClass ),

            toggleClass: (function( orig ) {
                return function( classNames, force, speed, easing, callback ) {
                    if ( typeof force === "boolean" || force === undefined ) {
                        if ( !speed ) {
                            // without speed parameter
                            return orig.apply( this, arguments );
                        } else {
                            return $.effects.animateClass.call( this,
                                (force ? { add: classNames } : { remove: classNames }),
                                speed, easing, callback );
                        }
                    } else {
                        // without force parameter
                        return $.effects.animateClass.call( this,
                            { toggle: classNames }, force, speed, easing );
                    }
                };
            })( $.fn.toggleClass ),

            switchClass: function( remove, add, speed, easing, callback) {
                return $.effects.animateClass.call( this, {
                    add: add,
                    remove: remove
                }, speed, easing, callback );
            }
        });

    })();

    /******************************************************************************/
    /*********************************** EFFECTS **********************************/
    /******************************************************************************/

    (function() {

        $.extend( $.effects, {
            version: "1.11.4",

            // Saves a set of properties in a data storage
            save: function( element, set ) {
                for ( var i = 0; i < set.length; i++ ) {
                    if ( set[ i ] !== null ) {
                        element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
                    }
                }
            },

            // Restores a set of previously saved properties from a data storage
            restore: function( element, set ) {
                var val, i;
                for ( i = 0; i < set.length; i++ ) {
                    if ( set[ i ] !== null ) {
                        val = element.data( dataSpace + set[ i ] );
                        // support: jQuery 1.6.2
                        // http://bugs.jquery.com/ticket/9917
                        // jQuery 1.6.2 incorrectly returns undefined for any falsy value.
                        // We can't differentiate between "" and 0 here, so we just assume
                        // empty string since it's likely to be a more common value...
                        if ( val === undefined ) {
                            val = "";
                        }
                        element.css( set[ i ], val );
                    }
                }
            },

            setMode: function( el, mode ) {
                if (mode === "toggle") {
                    mode = el.is( ":hidden" ) ? "show" : "hide";
                }
                return mode;
            },

            // Translates a [top,left] array into a baseline value
            // this should be a little more flexible in the future to handle a string & hash
            getBaseline: function( origin, original ) {
                var y, x;
                switch ( origin[ 0 ] ) {
                    case "top": y = 0; break;
                    case "middle": y = 0.5; break;
                    case "bottom": y = 1; break;
                    default: y = origin[ 0 ] / original.height;
                }
                switch ( origin[ 1 ] ) {
                    case "left": x = 0; break;
                    case "center": x = 0.5; break;
                    case "right": x = 1; break;
                    default: x = origin[ 1 ] / original.width;
                }
                return {
                    x: x,
                    y: y
                };
            },

            // Wraps the element around a wrapper that copies position properties
            createWrapper: function( element ) {

                // if the element is already wrapped, return it
                if ( element.parent().is( ".ui-effects-wrapper" )) {
                    return element.parent();
                }

                // wrap the element
                var props = {
                        width: element.outerWidth(true),
                        height: element.outerHeight(true),
                        "float": element.css( "float" )
                    },
                    wrapper = $( "<div></div>" )
                        .addClass( "ui-effects-wrapper" )
                        .css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                // Store the size in case width/height are defined in % - Fixes #5245
                    size = {
                        width: element.width(),
                        height: element.height()
                    },
                    active = document.activeElement;

                // support: Firefox
                // Firefox incorrectly exposes anonymous content
                // https://bugzilla.mozilla.org/show_bug.cgi?id=561664
                try {
                    active.id;
                } catch ( e ) {
                    active = document.body;
                }

                element.wrap( wrapper );

                // Fixes #7595 - Elements lose focus when wrapped.
                if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
                    $( active ).focus();
                }

                wrapper = element.parent(); //Hotfix for jQuery 1.4 since some change in wrap() seems to actually lose the reference to the wrapped element

                // transfer positioning properties to the wrapper
                if ( element.css( "position" ) === "static" ) {
                    wrapper.css({ position: "relative" });
                    element.css({ position: "relative" });
                } else {
                    $.extend( props, {
                        position: element.css( "position" ),
                        zIndex: element.css( "z-index" )
                    });
                    $.each([ "top", "left", "bottom", "right" ], function(i, pos) {
                        props[ pos ] = element.css( pos );
                        if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
                            props[ pos ] = "auto";
                        }
                    });
                    element.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    });
                }
                element.css(size);

                return wrapper.css( props ).show();
            },

            removeWrapper: function( element ) {
                var active = document.activeElement;

                if ( element.parent().is( ".ui-effects-wrapper" ) ) {
                    element.parent().replaceWith( element );

                    // Fixes #7595 - Elements lose focus when wrapped.
                    if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
                        $( active ).focus();
                    }
                }

                return element;
            },

            setTransition: function( element, list, factor, value ) {
                value = value || {};
                $.each( list, function( i, x ) {
                    var unit = element.cssUnit( x );
                    if ( unit[ 0 ] > 0 ) {
                        value[ x ] = unit[ 0 ] * factor + unit[ 1 ];
                    }
                });
                return value;
            }
        });

// return an effect options object for the given parameters:
        function _normalizeArguments( effect, options, speed, callback ) {

            // allow passing all options as the first parameter
            if ( $.isPlainObject( effect ) ) {
                options = effect;
                effect = effect.effect;
            }

            // convert to an object
            effect = { effect: effect };

            // catch (effect, null, ...)
            if ( options == null ) {
                options = {};
            }

            // catch (effect, callback)
            if ( $.isFunction( options ) ) {
                callback = options;
                speed = null;
                options = {};
            }

            // catch (effect, speed, ?)
            if ( typeof options === "number" || $.fx.speeds[ options ] ) {
                callback = speed;
                speed = options;
                options = {};
            }

            // catch (effect, options, callback)
            if ( $.isFunction( speed ) ) {
                callback = speed;
                speed = null;
            }

            // add options to effect
            if ( options ) {
                $.extend( effect, options );
            }

            speed = speed || options.duration;
            effect.duration = $.fx.off ? 0 :
                typeof speed === "number" ? speed :
                    speed in $.fx.speeds ? $.fx.speeds[ speed ] :
                        $.fx.speeds._default;

            effect.complete = callback || options.complete;

            return effect;
        }

        function standardAnimationOption( option ) {
            // Valid standard speeds (nothing, number, named speed)
            if ( !option || typeof option === "number" || $.fx.speeds[ option ] ) {
                return true;
            }

            // Invalid strings - treat as "normal" speed
            if ( typeof option === "string" && !$.effects.effect[ option ] ) {
                return true;
            }

            // Complete callback
            if ( $.isFunction( option ) ) {
                return true;
            }

            // Options hash (but not naming an effect)
            if ( typeof option === "object" && !option.effect ) {
                return true;
            }

            // Didn't match any standard API
            return false;
        }

        $.fn.extend({
            effect: function( /* effect, options, speed, callback */ ) {
                var args = _normalizeArguments.apply( this, arguments ),
                    mode = args.mode,
                    queue = args.queue,
                    effectMethod = $.effects.effect[ args.effect ];

                if ( $.fx.off || !effectMethod ) {
                    // delegate to the original method (e.g., .show()) if possible
                    if ( mode ) {
                        return this[ mode ]( args.duration, args.complete );
                    } else {
                        return this.each( function() {
                            if ( args.complete ) {
                                args.complete.call( this );
                            }
                        });
                    }
                }

                function run( next ) {
                    var elem = $( this ),
                        complete = args.complete,
                        mode = args.mode;

                    function done() {
                        if ( $.isFunction( complete ) ) {
                            complete.call( elem[0] );
                        }
                        if ( $.isFunction( next ) ) {
                            next();
                        }
                    }

                    // If the element already has the correct final state, delegate to
                    // the core methods so the internal tracking of "olddisplay" works.
                    if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {
                        elem[ mode ]();
                        done();
                    } else {
                        effectMethod.call( elem[0], args, done );
                    }
                }

                return queue === false ? this.each( run ) : this.queue( queue || "fx", run );
            },

            show: (function( orig ) {
                return function( option ) {
                    if ( standardAnimationOption( option ) ) {
                        return orig.apply( this, arguments );
                    } else {
                        var args = _normalizeArguments.apply( this, arguments );
                        args.mode = "show";
                        return this.effect.call( this, args );
                    }
                };
            })( $.fn.show ),

            hide: (function( orig ) {
                return function( option ) {
                    if ( standardAnimationOption( option ) ) {
                        return orig.apply( this, arguments );
                    } else {
                        var args = _normalizeArguments.apply( this, arguments );
                        args.mode = "hide";
                        return this.effect.call( this, args );
                    }
                };
            })( $.fn.hide ),

            toggle: (function( orig ) {
                return function( option ) {
                    if ( standardAnimationOption( option ) || typeof option === "boolean" ) {
                        return orig.apply( this, arguments );
                    } else {
                        var args = _normalizeArguments.apply( this, arguments );
                        args.mode = "toggle";
                        return this.effect.call( this, args );
                    }
                };
            })( $.fn.toggle ),

            // helper functions
            cssUnit: function(key) {
                var style = this.css( key ),
                    val = [];

                $.each( [ "em", "px", "%", "pt" ], function( i, unit ) {
                    if ( style.indexOf( unit ) > 0 ) {
                        val = [ parseFloat( style ), unit ];
                    }
                });
                return val;
            }
        });

    })();

    /******************************************************************************/
    /*********************************** EASING ***********************************/
    /******************************************************************************/

    (function() {

// based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

        var baseEasings = {};

        $.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
            baseEasings[ name ] = function( p ) {
                return Math.pow( p, i + 2 );
            };
        });

        $.extend( baseEasings, {
            Sine: function( p ) {
                return 1 - Math.cos( p * Math.PI / 2 );
            },
            Circ: function( p ) {
                return 1 - Math.sqrt( 1 - p * p );
            },
            Elastic: function( p ) {
                return p === 0 || p === 1 ? p :
                -Math.pow( 2, 8 * (p - 1) ) * Math.sin( ( (p - 1) * 80 - 7.5 ) * Math.PI / 15 );
            },
            Back: function( p ) {
                return p * p * ( 3 * p - 2 );
            },
            Bounce: function( p ) {
                var pow2,
                    bounce = 4;

                while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
                return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
            }
        });

        $.each( baseEasings, function( name, easeIn ) {
            $.easing[ "easeIn" + name ] = easeIn;
            $.easing[ "easeOut" + name ] = function( p ) {
                return 1 - easeIn( 1 - p );
            };
            $.easing[ "easeInOut" + name ] = function( p ) {
                return p < 0.5 ?
                easeIn( p * 2 ) / 2 :
                1 - easeIn( p * -2 + 2 ) / 2;
            };
        });

    })();

    var effect = $.effects;


    /*!
     * jQuery UI Effects Blind 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/blind-effect/
     */


    var effectBlind = $.effects.effect.blind = function( o, done ) {
        // Create element
        var el = $( this ),
            rvertical = /up|down|vertical/,
            rpositivemotion = /up|left|vertical|horizontal/,
            props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
            mode = $.effects.setMode( el, o.mode || "hide" ),
            direction = o.direction || "up",
            vertical = rvertical.test( direction ),
            ref = vertical ? "height" : "width",
            ref2 = vertical ? "top" : "left",
            motion = rpositivemotion.test( direction ),
            animation = {},
            show = mode === "show",
            wrapper, distance, margin;

        // if already wrapped, the wrapper's properties are my property. #6245
        if ( el.parent().is( ".ui-effects-wrapper" ) ) {
            $.effects.save( el.parent(), props );
        } else {
            $.effects.save( el, props );
        }
        el.show();
        wrapper = $.effects.createWrapper( el ).css({
            overflow: "hidden"
        });

        distance = wrapper[ ref ]();
        margin = parseFloat( wrapper.css( ref2 ) ) || 0;

        animation[ ref ] = show ? distance : 0;
        if ( !motion ) {
            el
                .css( vertical ? "bottom" : "right", 0 )
                .css( vertical ? "top" : "left", "auto" )
                .css({ position: "absolute" });

            animation[ ref2 ] = show ? margin : distance + margin;
        }

        // start at 0 if we are showing
        if ( show ) {
            wrapper.css( ref, 0 );
            if ( !motion ) {
                wrapper.css( ref2, margin + distance );
            }
        }

        // Animate
        wrapper.animate( animation, {
            duration: o.duration,
            easing: o.easing,
            queue: false,
            complete: function() {
                if ( mode === "hide" ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                $.effects.removeWrapper( el );
                done();
            }
        });
    };


    /*!
     * jQuery UI Effects Bounce 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/bounce-effect/
     */


    var effectBounce = $.effects.effect.bounce = function( o, done ) {
        var el = $( this ),
            props = [ "position", "top", "bottom", "left", "right", "height", "width" ],

        // defaults:
            mode = $.effects.setMode( el, o.mode || "effect" ),
            hide = mode === "hide",
            show = mode === "show",
            direction = o.direction || "up",
            distance = o.distance,
            times = o.times || 5,

        // number of internal animations
            anims = times * 2 + ( show || hide ? 1 : 0 ),
            speed = o.duration / anims,
            easing = o.easing,

        // utility:
            ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
            motion = ( direction === "up" || direction === "left" ),
            i,
            upAnim,
            downAnim,

        // we will need to re-assemble the queue to stack our animations in place
            queue = el.queue(),
            queuelen = queue.length;

        // Avoid touching opacity to prevent clearType and PNG issues in IE
        if ( show || hide ) {
            props.push( "opacity" );
        }

        $.effects.save( el, props );
        el.show();
        $.effects.createWrapper( el ); // Create Wrapper

        // default distance for the BIGGEST bounce is the outer Distance / 3
        if ( !distance ) {
            distance = el[ ref === "top" ? "outerHeight" : "outerWidth" ]() / 3;
        }

        if ( show ) {
            downAnim = { opacity: 1 };
            downAnim[ ref ] = 0;

            // if we are showing, force opacity 0 and set the initial position
            // then do the "first" animation
            el.css( "opacity", 0 )
                .css( ref, motion ? -distance * 2 : distance * 2 )
                .animate( downAnim, speed, easing );
        }

        // start at the smallest distance if we are hiding
        if ( hide ) {
            distance = distance / Math.pow( 2, times - 1 );
        }

        downAnim = {};
        downAnim[ ref ] = 0;
        // Bounces up/down/left/right then back to 0 -- times * 2 animations happen here
        for ( i = 0; i < times; i++ ) {
            upAnim = {};
            upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

            el.animate( upAnim, speed, easing )
                .animate( downAnim, speed, easing );

            distance = hide ? distance * 2 : distance / 2;
        }

        // Last Bounce when Hiding
        if ( hide ) {
            upAnim = { opacity: 0 };
            upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

            el.animate( upAnim, speed, easing );
        }

        el.queue(function() {
            if ( hide ) {
                el.hide();
            }
            $.effects.restore( el, props );
            $.effects.removeWrapper( el );
            done();
        });

        // inject all the animations we just queued to be first in line (after "inprogress")
        if ( queuelen > 1) {
            queue.splice.apply( queue,
                [ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
        }
        el.dequeue();

    };


    /*!
     * jQuery UI Effects Clip 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/clip-effect/
     */


    var effectClip = $.effects.effect.clip = function( o, done ) {
        // Create element
        var el = $( this ),
            props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
            mode = $.effects.setMode( el, o.mode || "hide" ),
            show = mode === "show",
            direction = o.direction || "vertical",
            vert = direction === "vertical",
            size = vert ? "height" : "width",
            position = vert ? "top" : "left",
            animation = {},
            wrapper, animate, distance;

        // Save & Show
        $.effects.save( el, props );
        el.show();

        // Create Wrapper
        wrapper = $.effects.createWrapper( el ).css({
            overflow: "hidden"
        });
        animate = ( el[0].tagName === "IMG" ) ? wrapper : el;
        distance = animate[ size ]();

        // Shift
        if ( show ) {
            animate.css( size, 0 );
            animate.css( position, distance / 2 );
        }

        // Create Animation Object:
        animation[ size ] = show ? distance : 0;
        animation[ position ] = show ? 0 : distance / 2;

        // Animate
        animate.animate( animation, {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                if ( !show ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                $.effects.removeWrapper( el );
                done();
            }
        });

    };


    /*!
     * jQuery UI Effects Drop 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/drop-effect/
     */


    var effectDrop = $.effects.effect.drop = function( o, done ) {

        var el = $( this ),
            props = [ "position", "top", "bottom", "left", "right", "opacity", "height", "width" ],
            mode = $.effects.setMode( el, o.mode || "hide" ),
            show = mode === "show",
            direction = o.direction || "left",
            ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
            motion = ( direction === "up" || direction === "left" ) ? "pos" : "neg",
            animation = {
                opacity: show ? 1 : 0
            },
            distance;

        // Adjust
        $.effects.save( el, props );
        el.show();
        $.effects.createWrapper( el );

        distance = o.distance || el[ ref === "top" ? "outerHeight" : "outerWidth" ]( true ) / 2;

        if ( show ) {
            el
                .css( "opacity", 0 )
                .css( ref, motion === "pos" ? -distance : distance );
        }

        // Animation
        animation[ ref ] = ( show ?
                ( motion === "pos" ? "+=" : "-=" ) :
                ( motion === "pos" ? "-=" : "+=" ) ) +
            distance;

        // Animate
        el.animate( animation, {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                if ( mode === "hide" ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                $.effects.removeWrapper( el );
                done();
            }
        });
    };


    /*!
     * jQuery UI Effects Explode 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/explode-effect/
     */


    var effectExplode = $.effects.effect.explode = function( o, done ) {

        var rows = o.pieces ? Math.round( Math.sqrt( o.pieces ) ) : 3,
            cells = rows,
            el = $( this ),
            mode = $.effects.setMode( el, o.mode || "hide" ),
            show = mode === "show",

        // show and then visibility:hidden the element before calculating offset
            offset = el.show().css( "visibility", "hidden" ).offset(),

        // width and height of a piece
            width = Math.ceil( el.outerWidth() / cells ),
            height = Math.ceil( el.outerHeight() / rows ),
            pieces = [],

        // loop
            i, j, left, top, mx, my;

        // children animate complete:
        function childComplete() {
            pieces.push( this );
            if ( pieces.length === rows * cells ) {
                animComplete();
            }
        }

        // clone the element for each row and cell.
        for ( i = 0; i < rows ; i++ ) { // ===>
            top = offset.top + i * height;
            my = i - ( rows - 1 ) / 2 ;

            for ( j = 0; j < cells ; j++ ) { // |||
                left = offset.left + j * width;
                mx = j - ( cells - 1 ) / 2 ;

                // Create a clone of the now hidden main element that will be absolute positioned
                // within a wrapper div off the -left and -top equal to size of our pieces
                el
                    .clone()
                    .appendTo( "body" )
                    .wrap( "<div></div>" )
                    .css({
                        position: "absolute",
                        visibility: "visible",
                        left: -j * width,
                        top: -i * height
                    })

                    // select the wrapper - make it overflow: hidden and absolute positioned based on
                    // where the original was located +left and +top equal to the size of pieces
                    .parent()
                    .addClass( "ui-effects-explode" )
                    .css({
                        position: "absolute",
                        overflow: "hidden",
                        width: width,
                        height: height,
                        left: left + ( show ? mx * width : 0 ),
                        top: top + ( show ? my * height : 0 ),
                        opacity: show ? 0 : 1
                    }).animate({
                        left: left + ( show ? 0 : mx * width ),
                        top: top + ( show ? 0 : my * height ),
                        opacity: show ? 1 : 0
                    }, o.duration || 500, o.easing, childComplete );
            }
        }

        function animComplete() {
            el.css({
                visibility: "visible"
            });
            $( pieces ).remove();
            if ( !show ) {
                el.hide();
            }
            done();
        }
    };


    /*!
     * jQuery UI Effects Fade 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/fade-effect/
     */


    var effectFade = $.effects.effect.fade = function( o, done ) {
        var el = $( this ),
            mode = $.effects.setMode( el, o.mode || "toggle" );

        el.animate({
            opacity: mode
        }, {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: done
        });
    };


    /*!
     * jQuery UI Effects Fold 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/fold-effect/
     */


    var effectFold = $.effects.effect.fold = function( o, done ) {

        // Create element
        var el = $( this ),
            props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
            mode = $.effects.setMode( el, o.mode || "hide" ),
            show = mode === "show",
            hide = mode === "hide",
            size = o.size || 15,
            percent = /([0-9]+)%/.exec( size ),
            horizFirst = !!o.horizFirst,
            widthFirst = show !== horizFirst,
            ref = widthFirst ? [ "width", "height" ] : [ "height", "width" ],
            duration = o.duration / 2,
            wrapper, distance,
            animation1 = {},
            animation2 = {};

        $.effects.save( el, props );
        el.show();

        // Create Wrapper
        wrapper = $.effects.createWrapper( el ).css({
            overflow: "hidden"
        });
        distance = widthFirst ?
            [ wrapper.width(), wrapper.height() ] :
            [ wrapper.height(), wrapper.width() ];

        if ( percent ) {
            size = parseInt( percent[ 1 ], 10 ) / 100 * distance[ hide ? 0 : 1 ];
        }
        if ( show ) {
            wrapper.css( horizFirst ? {
                height: 0,
                width: size
            } : {
                height: size,
                width: 0
            });
        }

        // Animation
        animation1[ ref[ 0 ] ] = show ? distance[ 0 ] : size;
        animation2[ ref[ 1 ] ] = show ? distance[ 1 ] : 0;

        // Animate
        wrapper
            .animate( animation1, duration, o.easing )
            .animate( animation2, duration, o.easing, function() {
                if ( hide ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                $.effects.removeWrapper( el );
                done();
            });

    };


    /*!
     * jQuery UI Effects Highlight 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/highlight-effect/
     */


    var effectHighlight = $.effects.effect.highlight = function( o, done ) {
        var elem = $( this ),
            props = [ "backgroundImage", "backgroundColor", "opacity" ],
            mode = $.effects.setMode( elem, o.mode || "show" ),
            animation = {
                backgroundColor: elem.css( "backgroundColor" )
            };

        if (mode === "hide") {
            animation.opacity = 0;
        }

        $.effects.save( elem, props );

        elem
            .show()
            .css({
                backgroundImage: "none",
                backgroundColor: o.color || "#ffff99"
            })
            .animate( animation, {
                queue: false,
                duration: o.duration,
                easing: o.easing,
                complete: function() {
                    if ( mode === "hide" ) {
                        elem.hide();
                    }
                    $.effects.restore( elem, props );
                    done();
                }
            });
    };


    /*!
     * jQuery UI Effects Size 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/size-effect/
     */


    var effectSize = $.effects.effect.size = function( o, done ) {

        // Create element
        var original, baseline, factor,
            el = $( this ),
            props0 = [ "position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity" ],

        // Always restore
            props1 = [ "position", "top", "bottom", "left", "right", "overflow", "opacity" ],

        // Copy for children
            props2 = [ "width", "height", "overflow" ],
            cProps = [ "fontSize" ],
            vProps = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ],
            hProps = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ],

        // Set options
            mode = $.effects.setMode( el, o.mode || "effect" ),
            restore = o.restore || mode !== "effect",
            scale = o.scale || "both",
            origin = o.origin || [ "middle", "center" ],
            position = el.css( "position" ),
            props = restore ? props0 : props1,
            zero = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };

        if ( mode === "show" ) {
            el.show();
        }
        original = {
            height: el.height(),
            width: el.width(),
            outerHeight: el.outerHeight(),
            outerWidth: el.outerWidth()
        };

        if ( o.mode === "toggle" && mode === "show" ) {
            el.from = o.to || zero;
            el.to = o.from || original;
        } else {
            el.from = o.from || ( mode === "show" ? zero : original );
            el.to = o.to || ( mode === "hide" ? zero : original );
        }

        // Set scaling factor
        factor = {
            from: {
                y: el.from.height / original.height,
                x: el.from.width / original.width
            },
            to: {
                y: el.to.height / original.height,
                x: el.to.width / original.width
            }
        };

        // Scale the css box
        if ( scale === "box" || scale === "both" ) {

            // Vertical props scaling
            if ( factor.from.y !== factor.to.y ) {
                props = props.concat( vProps );
                el.from = $.effects.setTransition( el, vProps, factor.from.y, el.from );
                el.to = $.effects.setTransition( el, vProps, factor.to.y, el.to );
            }

            // Horizontal props scaling
            if ( factor.from.x !== factor.to.x ) {
                props = props.concat( hProps );
                el.from = $.effects.setTransition( el, hProps, factor.from.x, el.from );
                el.to = $.effects.setTransition( el, hProps, factor.to.x, el.to );
            }
        }

        // Scale the content
        if ( scale === "content" || scale === "both" ) {

            // Vertical props scaling
            if ( factor.from.y !== factor.to.y ) {
                props = props.concat( cProps ).concat( props2 );
                el.from = $.effects.setTransition( el, cProps, factor.from.y, el.from );
                el.to = $.effects.setTransition( el, cProps, factor.to.y, el.to );
            }
        }

        $.effects.save( el, props );
        el.show();
        $.effects.createWrapper( el );
        el.css( "overflow", "hidden" ).css( el.from );

        // Adjust
        if (origin) { // Calculate baseline shifts
            baseline = $.effects.getBaseline( origin, original );
            el.from.top = ( original.outerHeight - el.outerHeight() ) * baseline.y;
            el.from.left = ( original.outerWidth - el.outerWidth() ) * baseline.x;
            el.to.top = ( original.outerHeight - el.to.outerHeight ) * baseline.y;
            el.to.left = ( original.outerWidth - el.to.outerWidth ) * baseline.x;
        }
        el.css( el.from ); // set top & left

        // Animate
        if ( scale === "content" || scale === "both" ) { // Scale the children

            // Add margins/font-size
            vProps = vProps.concat([ "marginTop", "marginBottom" ]).concat(cProps);
            hProps = hProps.concat([ "marginLeft", "marginRight" ]);
            props2 = props0.concat(vProps).concat(hProps);

            el.find( "*[width]" ).each( function() {
                var child = $( this ),
                    c_original = {
                        height: child.height(),
                        width: child.width(),
                        outerHeight: child.outerHeight(),
                        outerWidth: child.outerWidth()
                    };
                if (restore) {
                    $.effects.save(child, props2);
                }

                child.from = {
                    height: c_original.height * factor.from.y,
                    width: c_original.width * factor.from.x,
                    outerHeight: c_original.outerHeight * factor.from.y,
                    outerWidth: c_original.outerWidth * factor.from.x
                };
                child.to = {
                    height: c_original.height * factor.to.y,
                    width: c_original.width * factor.to.x,
                    outerHeight: c_original.height * factor.to.y,
                    outerWidth: c_original.width * factor.to.x
                };

                // Vertical props scaling
                if ( factor.from.y !== factor.to.y ) {
                    child.from = $.effects.setTransition( child, vProps, factor.from.y, child.from );
                    child.to = $.effects.setTransition( child, vProps, factor.to.y, child.to );
                }

                // Horizontal props scaling
                if ( factor.from.x !== factor.to.x ) {
                    child.from = $.effects.setTransition( child, hProps, factor.from.x, child.from );
                    child.to = $.effects.setTransition( child, hProps, factor.to.x, child.to );
                }

                // Animate children
                child.css( child.from );
                child.animate( child.to, o.duration, o.easing, function() {

                    // Restore children
                    if ( restore ) {
                        $.effects.restore( child, props2 );
                    }
                });
            });
        }

        // Animate
        el.animate( el.to, {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                if ( el.to.opacity === 0 ) {
                    el.css( "opacity", el.from.opacity );
                }
                if ( mode === "hide" ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                if ( !restore ) {

                    // we need to calculate our new positioning based on the scaling
                    if ( position === "static" ) {
                        el.css({
                            position: "relative",
                            top: el.to.top,
                            left: el.to.left
                        });
                    } else {
                        $.each([ "top", "left" ], function( idx, pos ) {
                            el.css( pos, function( _, str ) {
                                var val = parseInt( str, 10 ),
                                    toRef = idx ? el.to.left : el.to.top;

                                // if original was "auto", recalculate the new value from wrapper
                                if ( str === "auto" ) {
                                    return toRef + "px";
                                }

                                return val + toRef + "px";
                            });
                        });
                    }
                }

                $.effects.removeWrapper( el );
                done();
            }
        });

    };


    /*!
     * jQuery UI Effects Scale 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/scale-effect/
     */


    var effectScale = $.effects.effect.scale = function( o, done ) {

        // Create element
        var el = $( this ),
            options = $.extend( true, {}, o ),
            mode = $.effects.setMode( el, o.mode || "effect" ),
            percent = parseInt( o.percent, 10 ) ||
                ( parseInt( o.percent, 10 ) === 0 ? 0 : ( mode === "hide" ? 0 : 100 ) ),
            direction = o.direction || "both",
            origin = o.origin,
            original = {
                height: el.height(),
                width: el.width(),
                outerHeight: el.outerHeight(),
                outerWidth: el.outerWidth()
            },
            factor = {
                y: direction !== "horizontal" ? (percent / 100) : 1,
                x: direction !== "vertical" ? (percent / 100) : 1
            };

        // We are going to pass this effect to the size effect:
        options.effect = "size";
        options.queue = false;
        options.complete = done;

        // Set default origin and restore for show/hide
        if ( mode !== "effect" ) {
            options.origin = origin || [ "middle", "center" ];
            options.restore = true;
        }

        options.from = o.from || ( mode === "show" ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : original );
        options.to = {
            height: original.height * factor.y,
            width: original.width * factor.x,
            outerHeight: original.outerHeight * factor.y,
            outerWidth: original.outerWidth * factor.x
        };

        // Fade option to support puff
        if ( options.fade ) {
            if ( mode === "show" ) {
                options.from.opacity = 0;
                options.to.opacity = 1;
            }
            if ( mode === "hide" ) {
                options.from.opacity = 1;
                options.to.opacity = 0;
            }
        }

        // Animate
        el.effect( options );

    };


    /*!
     * jQuery UI Effects Puff 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/puff-effect/
     */


    var effectPuff = $.effects.effect.puff = function( o, done ) {
        var elem = $( this ),
            mode = $.effects.setMode( elem, o.mode || "hide" ),
            hide = mode === "hide",
            percent = parseInt( o.percent, 10 ) || 150,
            factor = percent / 100,
            original = {
                height: elem.height(),
                width: elem.width(),
                outerHeight: elem.outerHeight(),
                outerWidth: elem.outerWidth()
            };

        $.extend( o, {
            effect: "scale",
            queue: false,
            fade: true,
            mode: mode,
            complete: done,
            percent: hide ? percent : 100,
            from: hide ?
                original :
            {
                height: original.height * factor,
                width: original.width * factor,
                outerHeight: original.outerHeight * factor,
                outerWidth: original.outerWidth * factor
            }
        });

        elem.effect( o );
    };


    /*!
     * jQuery UI Effects Pulsate 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/pulsate-effect/
     */


    var effectPulsate = $.effects.effect.pulsate = function( o, done ) {
        var elem = $( this ),
            mode = $.effects.setMode( elem, o.mode || "show" ),
            show = mode === "show",
            hide = mode === "hide",
            showhide = ( show || mode === "hide" ),

        // showing or hiding leaves of the "last" animation
            anims = ( ( o.times || 5 ) * 2 ) + ( showhide ? 1 : 0 ),
            duration = o.duration / anims,
            animateTo = 0,
            queue = elem.queue(),
            queuelen = queue.length,
            i;

        if ( show || !elem.is(":visible")) {
            elem.css( "opacity", 0 ).show();
            animateTo = 1;
        }

        // anims - 1 opacity "toggles"
        for ( i = 1; i < anims; i++ ) {
            elem.animate({
                opacity: animateTo
            }, duration, o.easing );
            animateTo = 1 - animateTo;
        }

        elem.animate({
            opacity: animateTo
        }, duration, o.easing);

        elem.queue(function() {
            if ( hide ) {
                elem.hide();
            }
            done();
        });

        // We just queued up "anims" animations, we need to put them next in the queue
        if ( queuelen > 1 ) {
            queue.splice.apply( queue,
                [ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
        }
        elem.dequeue();
    };


    /*!
     * jQuery UI Effects Shake 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/shake-effect/
     */


    var effectShake = $.effects.effect.shake = function( o, done ) {

        var el = $( this ),
            props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
            mode = $.effects.setMode( el, o.mode || "effect" ),
            direction = o.direction || "left",
            distance = o.distance || 20,
            times = o.times || 3,
            anims = times * 2 + 1,
            speed = Math.round( o.duration / anims ),
            ref = (direction === "up" || direction === "down") ? "top" : "left",
            positiveMotion = (direction === "up" || direction === "left"),
            animation = {},
            animation1 = {},
            animation2 = {},
            i,

        // we will need to re-assemble the queue to stack our animations in place
            queue = el.queue(),
            queuelen = queue.length;

        $.effects.save( el, props );
        el.show();
        $.effects.createWrapper( el );

        // Animation
        animation[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance;
        animation1[ ref ] = ( positiveMotion ? "+=" : "-=" ) + distance * 2;
        animation2[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance * 2;

        // Animate
        el.animate( animation, speed, o.easing );

        // Shakes
        for ( i = 1; i < times; i++ ) {
            el.animate( animation1, speed, o.easing ).animate( animation2, speed, o.easing );
        }
        el
            .animate( animation1, speed, o.easing )
            .animate( animation, speed / 2, o.easing )
            .queue(function() {
                if ( mode === "hide" ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                $.effects.removeWrapper( el );
                done();
            });

        // inject all the animations we just queued to be first in line (after "inprogress")
        if ( queuelen > 1) {
            queue.splice.apply( queue,
                [ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
        }
        el.dequeue();

    };


    /*!
     * jQuery UI Effects Slide 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/slide-effect/
     */


    var effectSlide = $.effects.effect.slide = function( o, done ) {

        // Create element
        var el = $( this ),
            props = [ "position", "top", "bottom", "left", "right", "width", "height" ],
            mode = $.effects.setMode( el, o.mode || "show" ),
            show = mode === "show",
            direction = o.direction || "left",
            ref = (direction === "up" || direction === "down") ? "top" : "left",
            positiveMotion = (direction === "up" || direction === "left"),
            distance,
            animation = {};

        // Adjust
        $.effects.save( el, props );
        el.show();
        distance = o.distance || el[ ref === "top" ? "outerHeight" : "outerWidth" ]( true );

        $.effects.createWrapper( el ).css({
            overflow: "hidden"
        });

        if ( show ) {
            el.css( ref, positiveMotion ? (isNaN(distance) ? "-" + distance : -distance) : distance );
        }

        // Animation
        animation[ ref ] = ( show ?
                ( positiveMotion ? "+=" : "-=") :
                ( positiveMotion ? "-=" : "+=")) +
            distance;

        // Animate
        el.animate( animation, {
            queue: false,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                if ( mode === "hide" ) {
                    el.hide();
                }
                $.effects.restore( el, props );
                $.effects.removeWrapper( el );
                done();
            }
        });
    };


    /*!
     * jQuery UI Effects Transfer 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/transfer-effect/
     */


    var effectTransfer = $.effects.effect.transfer = function( o, done ) {
        var elem = $( this ),
            target = $( o.to ),
            targetFixed = target.css( "position" ) === "fixed",
            body = $("body"),
            fixTop = targetFixed ? body.scrollTop() : 0,
            fixLeft = targetFixed ? body.scrollLeft() : 0,
            endPosition = target.offset(),
            animation = {
                top: endPosition.top - fixTop,
                left: endPosition.left - fixLeft,
                height: target.innerHeight(),
                width: target.innerWidth()
            },
            startPosition = elem.offset(),
            transfer = $( "<div class='ui-effects-transfer'></div>" )
                .appendTo( document.body )
                .addClass( o.className )
                .css({
                    top: startPosition.top - fixTop,
                    left: startPosition.left - fixLeft,
                    height: elem.innerHeight(),
                    width: elem.innerWidth(),
                    position: targetFixed ? "fixed" : "absolute"
                })
                .animate( animation, o.duration, o.easing, function() {
                    transfer.remove();
                    done();
                });
    };


    /*!
     * jQuery UI Progressbar 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/progressbar/
     */


    var progressbar = $.widget( "ui.progressbar", {
        version: "1.11.4",
        options: {
            max: 100,
            value: 0,

            change: null,
            complete: null
        },

        min: 0,

        _create: function() {
            // Constrain initial value
            this.oldValue = this.options.value = this._constrainedValue();

            this.element
                .addClass( "ui-progressbar ui-widget ui-widget-content ui-corner-all" )
                .attr({
                    // Only set static values, aria-valuenow and aria-valuemax are
                    // set inside _refreshValue()
                    role: "progressbar",
                    "aria-valuemin": this.min
                });

            this.valueDiv = $( "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>" )
                .appendTo( this.element );

            this._refreshValue();
        },

        _destroy: function() {
            this.element
                .removeClass( "ui-progressbar ui-widget ui-widget-content ui-corner-all" )
                .removeAttr( "role" )
                .removeAttr( "aria-valuemin" )
                .removeAttr( "aria-valuemax" )
                .removeAttr( "aria-valuenow" );

            this.valueDiv.remove();
        },

        value: function( newValue ) {
            if ( newValue === undefined ) {
                return this.options.value;
            }

            this.options.value = this._constrainedValue( newValue );
            this._refreshValue();
        },

        _constrainedValue: function( newValue ) {
            if ( newValue === undefined ) {
                newValue = this.options.value;
            }

            this.indeterminate = newValue === false;

            // sanitize value
            if ( typeof newValue !== "number" ) {
                newValue = 0;
            }

            return this.indeterminate ? false :
                Math.min( this.options.max, Math.max( this.min, newValue ) );
        },

        _setOptions: function( options ) {
            // Ensure "value" option is set after other values (like max)
            var value = options.value;
            delete options.value;

            this._super( options );

            this.options.value = this._constrainedValue( value );
            this._refreshValue();
        },

        _setOption: function( key, value ) {
            if ( key === "max" ) {
                // Don't allow a max less than min
                value = Math.max( this.min, value );
            }
            if ( key === "disabled" ) {
                this.element
                    .toggleClass( "ui-state-disabled", !!value )
                    .attr( "aria-disabled", value );
            }
            this._super( key, value );
        },

        _percentage: function() {
            return this.indeterminate ? 100 : 100 * ( this.options.value - this.min ) / ( this.options.max - this.min );
        },

        _refreshValue: function() {
            var value = this.options.value,
                percentage = this._percentage();

            this.valueDiv
                .toggle( this.indeterminate || value > this.min )
                .toggleClass( "ui-corner-right", value === this.options.max )
                .width( percentage.toFixed(0) + "%" );

            this.element.toggleClass( "ui-progressbar-indeterminate", this.indeterminate );

            if ( this.indeterminate ) {
                this.element.removeAttr( "aria-valuenow" );
                if ( !this.overlayDiv ) {
                    this.overlayDiv = $( "<div class='ui-progressbar-overlay'></div>" ).appendTo( this.valueDiv );
                }
            } else {
                this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": value
                });
                if ( this.overlayDiv ) {
                    this.overlayDiv.remove();
                    this.overlayDiv = null;
                }
            }

            if ( this.oldValue !== value ) {
                this.oldValue = value;
                this._trigger( "change" );
            }
            if ( value === this.options.max ) {
                this._trigger( "complete" );
            }
        }
    });


    /*!
     * jQuery UI Selectable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/selectable/
     */


    var selectable = $.widget("ui.selectable", $.ui.mouse, {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoRefresh: true,
            distance: 0,
            filter: "*",
            tolerance: "touch",

            // callbacks
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var selectees,
                that = this;

            this.element.addClass("ui-selectable");

            this.dragged = false;

            // cache selectee children based on filter
            this.refresh = function() {
                selectees = $(that.options.filter, that.element[0]);
                selectees.addClass("ui-selectee");
                selectees.each(function() {
                    var $this = $(this),
                        pos = $this.offset();
                    $.data(this, "selectable-item", {
                        element: this,
                        $element: $this,
                        left: pos.left,
                        top: pos.top,
                        right: pos.left + $this.outerWidth(),
                        bottom: pos.top + $this.outerHeight(),
                        startselected: false,
                        selected: $this.hasClass("ui-selected"),
                        selecting: $this.hasClass("ui-selecting"),
                        unselecting: $this.hasClass("ui-unselecting")
                    });
                });
            };
            this.refresh();

            this.selectees = selectees.addClass("ui-selectee");

            this._mouseInit();

            this.helper = $("<div class='ui-selectable-helper'></div>");
        },

        _destroy: function() {
            this.selectees
                .removeClass("ui-selectee")
                .removeData("selectable-item");
            this.element
                .removeClass("ui-selectable ui-selectable-disabled");
            this._mouseDestroy();
        },

        _mouseStart: function(event) {
            var that = this,
                options = this.options;

            this.opos = [ event.pageX, event.pageY ];

            if (this.options.disabled) {
                return;
            }

            this.selectees = $(options.filter, this.element[0]);

            this._trigger("start", event);

            $(options.appendTo).append(this.helper);
            // position helper (lasso)
            this.helper.css({
                "left": event.pageX,
                "top": event.pageY,
                "width": 0,
                "height": 0
            });

            if (options.autoRefresh) {
                this.refresh();
            }

            this.selectees.filter(".ui-selected").each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.startselected = true;
                if (!event.metaKey && !event.ctrlKey) {
                    selectee.$element.removeClass("ui-selected");
                    selectee.selected = false;
                    selectee.$element.addClass("ui-unselecting");
                    selectee.unselecting = true;
                    // selectable UNSELECTING callback
                    that._trigger("unselecting", event, {
                        unselecting: selectee.element
                    });
                }
            });

            $(event.target).parents().addBack().each(function() {
                var doSelect,
                    selectee = $.data(this, "selectable-item");
                if (selectee) {
                    doSelect = (!event.metaKey && !event.ctrlKey) || !selectee.$element.hasClass("ui-selected");
                    selectee.$element
                        .removeClass(doSelect ? "ui-unselecting" : "ui-selected")
                        .addClass(doSelect ? "ui-selecting" : "ui-unselecting");
                    selectee.unselecting = !doSelect;
                    selectee.selecting = doSelect;
                    selectee.selected = doSelect;
                    // selectable (UN)SELECTING callback
                    if (doSelect) {
                        that._trigger("selecting", event, {
                            selecting: selectee.element
                        });
                    } else {
                        that._trigger("unselecting", event, {
                            unselecting: selectee.element
                        });
                    }
                    return false;
                }
            });

        },

        _mouseDrag: function(event) {

            this.dragged = true;

            if (this.options.disabled) {
                return;
            }

            var tmp,
                that = this,
                options = this.options,
                x1 = this.opos[0],
                y1 = this.opos[1],
                x2 = event.pageX,
                y2 = event.pageY;

            if (x1 > x2) { tmp = x2; x2 = x1; x1 = tmp; }
            if (y1 > y2) { tmp = y2; y2 = y1; y1 = tmp; }
            this.helper.css({ left: x1, top: y1, width: x2 - x1, height: y2 - y1 });

            this.selectees.each(function() {
                var selectee = $.data(this, "selectable-item"),
                    hit = false;

                //prevent helper from being selected if appendTo: selectable
                if (!selectee || selectee.element === that.element[0]) {
                    return;
                }

                if (options.tolerance === "touch") {
                    hit = ( !(selectee.left > x2 || selectee.right < x1 || selectee.top > y2 || selectee.bottom < y1) );
                } else if (options.tolerance === "fit") {
                    hit = (selectee.left > x1 && selectee.right < x2 && selectee.top > y1 && selectee.bottom < y2);
                }

                if (hit) {
                    // SELECT
                    if (selectee.selected) {
                        selectee.$element.removeClass("ui-selected");
                        selectee.selected = false;
                    }
                    if (selectee.unselecting) {
                        selectee.$element.removeClass("ui-unselecting");
                        selectee.unselecting = false;
                    }
                    if (!selectee.selecting) {
                        selectee.$element.addClass("ui-selecting");
                        selectee.selecting = true;
                        // selectable SELECTING callback
                        that._trigger("selecting", event, {
                            selecting: selectee.element
                        });
                    }
                } else {
                    // UNSELECT
                    if (selectee.selecting) {
                        if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
                            selectee.$element.removeClass("ui-selecting");
                            selectee.selecting = false;
                            selectee.$element.addClass("ui-selected");
                            selectee.selected = true;
                        } else {
                            selectee.$element.removeClass("ui-selecting");
                            selectee.selecting = false;
                            if (selectee.startselected) {
                                selectee.$element.addClass("ui-unselecting");
                                selectee.unselecting = true;
                            }
                            // selectable UNSELECTING callback
                            that._trigger("unselecting", event, {
                                unselecting: selectee.element
                            });
                        }
                    }
                    if (selectee.selected) {
                        if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
                            selectee.$element.removeClass("ui-selected");
                            selectee.selected = false;

                            selectee.$element.addClass("ui-unselecting");
                            selectee.unselecting = true;
                            // selectable UNSELECTING callback
                            that._trigger("unselecting", event, {
                                unselecting: selectee.element
                            });
                        }
                    }
                }
            });

            return false;
        },

        _mouseStop: function(event) {
            var that = this;

            this.dragged = false;

            $(".ui-unselecting", this.element[0]).each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.$element.removeClass("ui-unselecting");
                selectee.unselecting = false;
                selectee.startselected = false;
                that._trigger("unselected", event, {
                    unselected: selectee.element
                });
            });
            $(".ui-selecting", this.element[0]).each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.$element.removeClass("ui-selecting").addClass("ui-selected");
                selectee.selecting = false;
                selectee.selected = true;
                selectee.startselected = true;
                that._trigger("selected", event, {
                    selected: selectee.element
                });
            });
            this._trigger("stop", event);

            this.helper.remove();

            return false;
        }

    });


    /*!
     * jQuery UI Selectmenu 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/selectmenu
     */


    var selectmenu = $.widget( "ui.selectmenu", {
        version: "1.11.4",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: null,

            // callbacks
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },

        _create: function() {
            var selectmenuId = this.element.uniqueId().attr( "id" );
            this.ids = {
                element: selectmenuId,
                button: selectmenuId + "-button",
                menu: selectmenuId + "-menu"
            };

            this._drawButton();
            this._drawMenu();

            if ( this.options.disabled ) {
                this.disable();
            }
        },

        _drawButton: function() {
            var that = this;

            // Associate existing label with the new button
            this.label = $( "label[for='" + this.ids.element + "']" ).attr( "for", this.ids.button );
            this._on( this.label, {
                click: function( event ) {
                    this.button.focus();
                    event.preventDefault();
                }
            });

            // Hide original select element
            this.element.hide();

            // Create button
            this.button = $( "<span>", {
                "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true"
            })
                .insertAfter( this.element );

            $( "<span>", {
                "class": "ui-icon " + this.options.icons.button
            })
                .prependTo( this.button );

            this.buttonText = $( "<span>", {
                "class": "ui-selectmenu-text"
            })
                .appendTo( this.button );

            this._setText( this.buttonText, this.element.find( "option:selected" ).text() );
            this._resizeButton();

            this._on( this.button, this._buttonEvents );
            this.button.one( "focusin", function() {

                // Delay rendering the menu items until the button receives focus.
                // The menu may have already been rendered via a programmatic open.
                if ( !that.menuItems ) {
                    that._refreshMenu();
                }
            });
            this._hoverable( this.button );
            this._focusable( this.button );
        },

        _drawMenu: function() {
            var that = this;

            // Create menu
            this.menu = $( "<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            });

            // Wrap menu
            this.menuWrap = $( "<div>", {
                "class": "ui-selectmenu-menu ui-front"
            })
                .append( this.menu )
                .appendTo( this._appendTo() );

            // Initialize menu widget
            this.menuInstance = this.menu
                .menu({
                    role: "listbox",
                    select: function( event, ui ) {
                        event.preventDefault();

                        // support: IE8
                        // If the item was selected via a click, the text selection
                        // will be destroyed in IE
                        that._setSelection();

                        that._select( ui.item.data( "ui-selectmenu-item" ), event );
                    },
                    focus: function( event, ui ) {
                        var item = ui.item.data( "ui-selectmenu-item" );

                        // Prevent inital focus from firing and check if its a newly focused item
                        if ( that.focusIndex != null && item.index !== that.focusIndex ) {
                            that._trigger( "focus", event, { item: item } );
                            if ( !that.isOpen ) {
                                that._select( item, event );
                            }
                        }
                        that.focusIndex = item.index;

                        that.button.attr( "aria-activedescendant",
                            that.menuItems.eq( item.index ).attr( "id" ) );
                    }
                })
                .menu( "instance" );

            // Adjust menu styles to dropdown
            this.menu
                .addClass( "ui-corner-bottom" )
                .removeClass( "ui-corner-all" );

            // Don't close the menu on mouseleave
            this.menuInstance._off( this.menu, "mouseleave" );

            // Cancel the menu's collapseAll on document click
            this.menuInstance._closeOnDocumentClick = function() {
                return false;
            };

            // Selects often contain empty items, but never contain dividers
            this.menuInstance._isDivider = function() {
                return false;
            };
        },

        refresh: function() {
            this._refreshMenu();
            this._setText( this.buttonText, this._getSelectedItem().text() );
            if ( !this.options.width ) {
                this._resizeButton();
            }
        },

        _refreshMenu: function() {
            this.menu.empty();

            var item,
                options = this.element.find( "option" );

            if ( !options.length ) {
                return;
            }

            this._parseOptions( options );
            this._renderMenu( this.menu, this.items );

            this.menuInstance.refresh();
            this.menuItems = this.menu.find( "li" ).not( ".ui-selectmenu-optgroup" );

            item = this._getSelectedItem();

            // Update the menu to have the correct item focused
            this.menuInstance.focus( null, item );
            this._setAria( item.data( "ui-selectmenu-item" ) );

            // Set disabled state
            this._setOption( "disabled", this.element.prop( "disabled" ) );
        },

        open: function( event ) {
            if ( this.options.disabled ) {
                return;
            }

            // If this is the first time the menu is being opened, render the items
            if ( !this.menuItems ) {
                this._refreshMenu();
            } else {

                // Menu clears focus on close, reset focus to selected item
                this.menu.find( ".ui-state-focus" ).removeClass( "ui-state-focus" );
                this.menuInstance.focus( null, this._getSelectedItem() );
            }

            this.isOpen = true;
            this._toggleAttr();
            this._resizeMenu();
            this._position();

            this._on( this.document, this._documentClick );

            this._trigger( "open", event );
        },

        _position: function() {
            this.menuWrap.position( $.extend( { of: this.button }, this.options.position ) );
        },

        close: function( event ) {
            if ( !this.isOpen ) {
                return;
            }

            this.isOpen = false;
            this._toggleAttr();

            this.range = null;
            this._off( this.document );

            this._trigger( "close", event );
        },

        widget: function() {
            return this.button;
        },

        menuWidget: function() {
            return this.menu;
        },

        _renderMenu: function( ul, items ) {
            var that = this,
                currentOptgroup = "";

            $.each( items, function( index, item ) {
                if ( item.optgroup !== currentOptgroup ) {
                    $( "<li>", {
                        "class": "ui-selectmenu-optgroup ui-menu-divider" +
                        ( item.element.parent( "optgroup" ).prop( "disabled" ) ?
                            " ui-state-disabled" :
                            "" ),
                        text: item.optgroup
                    })
                        .appendTo( ul );

                    currentOptgroup = item.optgroup;
                }

                that._renderItemData( ul, item );
            });
        },

        _renderItemData: function( ul, item ) {
            return this._renderItem( ul, item ).data( "ui-selectmenu-item", item );
        },

        _renderItem: function( ul, item ) {
            var li = $( "<li>" );

            if ( item.disabled ) {
                li.addClass( "ui-state-disabled" );
            }
            this._setText( li, item.label );

            return li.appendTo( ul );
        },

        _setText: function( element, value ) {
            if ( value ) {
                element.text( value );
            } else {
                element.html( "&#160;" );
            }
        },

        _move: function( direction, event ) {
            var item, next,
                filter = ".ui-menu-item";

            if ( this.isOpen ) {
                item = this.menuItems.eq( this.focusIndex );
            } else {
                item = this.menuItems.eq( this.element[ 0 ].selectedIndex );
                filter += ":not(.ui-state-disabled)";
            }

            if ( direction === "first" || direction === "last" ) {
                next = item[ direction === "first" ? "prevAll" : "nextAll" ]( filter ).eq( -1 );
            } else {
                next = item[ direction + "All" ]( filter ).eq( 0 );
            }

            if ( next.length ) {
                this.menuInstance.focus( event, next );
            }
        },

        _getSelectedItem: function() {
            return this.menuItems.eq( this.element[ 0 ].selectedIndex );
        },

        _toggle: function( event ) {
            this[ this.isOpen ? "close" : "open" ]( event );
        },

        _setSelection: function() {
            var selection;

            if ( !this.range ) {
                return;
            }

            if ( window.getSelection ) {
                selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange( this.range );

                // support: IE8
            } else {
                this.range.select();
            }

            // support: IE
            // Setting the text selection kills the button focus in IE, but
            // restoring the focus doesn't kill the selection.
            this.button.focus();
        },

        _documentClick: {
            mousedown: function( event ) {
                if ( !this.isOpen ) {
                    return;
                }

                if ( !$( event.target ).closest( ".ui-selectmenu-menu, #" + this.ids.button ).length ) {
                    this.close( event );
                }
            }
        },

        _buttonEvents: {

            // Prevent text selection from being reset when interacting with the selectmenu (#10144)
            mousedown: function() {
                var selection;

                if ( window.getSelection ) {
                    selection = window.getSelection();
                    if ( selection.rangeCount ) {
                        this.range = selection.getRangeAt( 0 );
                    }

                    // support: IE8
                } else {
                    this.range = document.selection.createRange();
                }
            },

            click: function( event ) {
                this._setSelection();
                this._toggle( event );
            },

            keydown: function( event ) {
                var preventDefault = true;
                switch ( event.keyCode ) {
                    case $.ui.keyCode.TAB:
                    case $.ui.keyCode.ESCAPE:
                        this.close( event );
                        preventDefault = false;
                        break;
                    case $.ui.keyCode.ENTER:
                        if ( this.isOpen ) {
                            this._selectFocusedItem( event );
                        }
                        break;
                    case $.ui.keyCode.UP:
                        if ( event.altKey ) {
                            this._toggle( event );
                        } else {
                            this._move( "prev", event );
                        }
                        break;
                    case $.ui.keyCode.DOWN:
                        if ( event.altKey ) {
                            this._toggle( event );
                        } else {
                            this._move( "next", event );
                        }
                        break;
                    case $.ui.keyCode.SPACE:
                        if ( this.isOpen ) {
                            this._selectFocusedItem( event );
                        } else {
                            this._toggle( event );
                        }
                        break;
                    case $.ui.keyCode.LEFT:
                        this._move( "prev", event );
                        break;
                    case $.ui.keyCode.RIGHT:
                        this._move( "next", event );
                        break;
                    case $.ui.keyCode.HOME:
                    case $.ui.keyCode.PAGE_UP:
                        this._move( "first", event );
                        break;
                    case $.ui.keyCode.END:
                    case $.ui.keyCode.PAGE_DOWN:
                        this._move( "last", event );
                        break;
                    default:
                        this.menu.trigger( event );
                        preventDefault = false;
                }

                if ( preventDefault ) {
                    event.preventDefault();
                }
            }
        },

        _selectFocusedItem: function( event ) {
            var item = this.menuItems.eq( this.focusIndex );
            if ( !item.hasClass( "ui-state-disabled" ) ) {
                this._select( item.data( "ui-selectmenu-item" ), event );
            }
        },

        _select: function( item, event ) {
            var oldIndex = this.element[ 0 ].selectedIndex;

            // Change native select element
            this.element[ 0 ].selectedIndex = item.index;
            this._setText( this.buttonText, item.label );
            this._setAria( item );
            this._trigger( "select", event, { item: item } );

            if ( item.index !== oldIndex ) {
                this._trigger( "change", event, { item: item } );
            }

            this.close( event );
        },

        _setAria: function( item ) {
            var id = this.menuItems.eq( item.index ).attr( "id" );

            this.button.attr({
                "aria-labelledby": id,
                "aria-activedescendant": id
            });
            this.menu.attr( "aria-activedescendant", id );
        },

        _setOption: function( key, value ) {
            if ( key === "icons" ) {
                this.button.find( "span.ui-icon" )
                    .removeClass( this.options.icons.button )
                    .addClass( value.button );
            }

            this._super( key, value );

            if ( key === "appendTo" ) {
                this.menuWrap.appendTo( this._appendTo() );
            }

            if ( key === "disabled" ) {
                this.menuInstance.option( "disabled", value );
                this.button
                    .toggleClass( "ui-state-disabled", value )
                    .attr( "aria-disabled", value );

                this.element.prop( "disabled", value );
                if ( value ) {
                    this.button.attr( "tabindex", -1 );
                    this.close();
                } else {
                    this.button.attr( "tabindex", 0 );
                }
            }

            if ( key === "width" ) {
                this._resizeButton();
            }
        },

        _appendTo: function() {
            var element = this.options.appendTo;

            if ( element ) {
                element = element.jquery || element.nodeType ?
                    $( element ) :
                    this.document.find( element ).eq( 0 );
            }

            if ( !element || !element[ 0 ] ) {
                element = this.element.closest( ".ui-front" );
            }

            if ( !element.length ) {
                element = this.document[ 0 ].body;
            }

            return element;
        },

        _toggleAttr: function() {
            this.button
                .toggleClass( "ui-corner-top", this.isOpen )
                .toggleClass( "ui-corner-all", !this.isOpen )
                .attr( "aria-expanded", this.isOpen );
            this.menuWrap.toggleClass( "ui-selectmenu-open", this.isOpen );
            this.menu.attr( "aria-hidden", !this.isOpen );
        },

        _resizeButton: function() {
            var width = this.options.width;

            if ( !width ) {
                width = this.element.show().outerWidth();
                this.element.hide();
            }

            this.button.outerWidth( width );
        },

        _resizeMenu: function() {
            this.menu.outerWidth( Math.max(
                this.button.outerWidth(),

                // support: IE10
                // IE10 wraps long text (possibly a rounding bug)
                // so we add 1px to avoid the wrapping
                this.menu.width( "" ).outerWidth() + 1
            ) );
        },

        _getCreateOptions: function() {
            return { disabled: this.element.prop( "disabled" ) };
        },

        _parseOptions: function( options ) {
            var data = [];
            options.each(function( index, item ) {
                var option = $( item ),
                    optgroup = option.parent( "optgroup" );
                data.push({
                    element: option,
                    index: index,
                    value: option.val(),
                    label: option.text(),
                    optgroup: optgroup.attr( "label" ) || "",
                    disabled: optgroup.prop( "disabled" ) || option.prop( "disabled" )
                });
            });
            this.items = data;
        },

        _destroy: function() {
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.label.attr( "for", this.ids.element );
        }
    });


    /*!
     * jQuery UI Slider 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/slider/
     */


    var slider = $.widget( "ui.slider", $.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",

        options: {
            animate: false,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null,

            // callbacks
            change: null,
            slide: null,
            start: null,
            stop: null
        },

        // number of pages in a slider
        // (how many times can you page up/down to go through the whole range)
        numPages: 5,

        _create: function() {
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();

            this.element
                .addClass( "ui-slider" +
                " ui-slider-" + this.orientation +
                " ui-widget" +
                " ui-widget-content" +
                " ui-corner-all");

            this._refresh();
            this._setOption( "disabled", this.options.disabled );

            this._animateOff = false;
        },

        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue();
        },

        _createHandles: function() {
            var i, handleCount,
                options = this.options,
                existingHandles = this.element.find( ".ui-slider-handle" ).addClass( "ui-state-default ui-corner-all" ),
                handle = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                handles = [];

            handleCount = ( options.values && options.values.length ) || 1;

            if ( existingHandles.length > handleCount ) {
                existingHandles.slice( handleCount ).remove();
                existingHandles = existingHandles.slice( 0, handleCount );
            }

            for ( i = existingHandles.length; i < handleCount; i++ ) {
                handles.push( handle );
            }

            this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( this.element ) );

            this.handle = this.handles.eq( 0 );

            this.handles.each(function( i ) {
                $( this ).data( "ui-slider-handle-index", i );
            });
        },

        _createRange: function() {
            var options = this.options,
                classes = "";

            if ( options.range ) {
                if ( options.range === true ) {
                    if ( !options.values ) {
                        options.values = [ this._valueMin(), this._valueMin() ];
                    } else if ( options.values.length && options.values.length !== 2 ) {
                        options.values = [ options.values[0], options.values[0] ];
                    } else if ( $.isArray( options.values ) ) {
                        options.values = options.values.slice(0);
                    }
                }

                if ( !this.range || !this.range.length ) {
                    this.range = $( "<div></div>" )
                        .appendTo( this.element );

                    classes = "ui-slider-range" +
                            // note: this isn't the most fittingly semantic framework class for this element,
                            // but worked best visually with a variety of themes
                        " ui-widget-header ui-corner-all";
                } else {
                    this.range.removeClass( "ui-slider-range-min ui-slider-range-max" )
                        // Handle range switching from true to min/max
                        .css({
                            "left": "",
                            "bottom": ""
                        });
                }

                this.range.addClass( classes +
                    ( ( options.range === "min" || options.range === "max" ) ? " ui-slider-range-" + options.range : "" ) );
            } else {
                if ( this.range ) {
                    this.range.remove();
                }
                this.range = null;
            }
        },

        _setupEvents: function() {
            this._off( this.handles );
            this._on( this.handles, this._handleEvents );
            this._hoverable( this.handles );
            this._focusable( this.handles );
        },

        _destroy: function() {
            this.handles.remove();
            if ( this.range ) {
                this.range.remove();
            }

            this.element
                .removeClass( "ui-slider" +
                " ui-slider-horizontal" +
                " ui-slider-vertical" +
                " ui-widget" +
                " ui-widget-content" +
                " ui-corner-all" );

            this._mouseDestroy();
        },

        _mouseCapture: function( event ) {
            var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
                that = this,
                o = this.options;

            if ( o.disabled ) {
                return false;
            }

            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();

            position = { x: event.pageX, y: event.pageY };
            normValue = this._normValueFromMouse( position );
            distance = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function( i ) {
                var thisDistance = Math.abs( normValue - that.values(i) );
                if (( distance > thisDistance ) ||
                    ( distance === thisDistance &&
                    (i === that._lastChangedValue || that.values(i) === o.min ))) {
                    distance = thisDistance;
                    closestHandle = $( this );
                    index = i;
                }
            });

            allowed = this._start( event, index );
            if ( allowed === false ) {
                return false;
            }
            this._mouseSliding = true;

            this._handleIndex = index;

            closestHandle
                .addClass( "ui-state-active" )
                .focus();

            offset = closestHandle.offset();
            mouseOverHandle = !$( event.target ).parents().addBack().is( ".ui-slider-handle" );
            this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
                left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
                top: event.pageY - offset.top -
                ( closestHandle.height() / 2 ) -
                ( parseInt( closestHandle.css("borderTopWidth"), 10 ) || 0 ) -
                ( parseInt( closestHandle.css("borderBottomWidth"), 10 ) || 0) +
                ( parseInt( closestHandle.css("marginTop"), 10 ) || 0)
            };

            if ( !this.handles.hasClass( "ui-state-hover" ) ) {
                this._slide( event, index, normValue );
            }
            this._animateOff = true;
            return true;
        },

        _mouseStart: function() {
            return true;
        },

        _mouseDrag: function( event ) {
            var position = { x: event.pageX, y: event.pageY },
                normValue = this._normValueFromMouse( position );

            this._slide( event, this._handleIndex, normValue );

            return false;
        },

        _mouseStop: function( event ) {
            this.handles.removeClass( "ui-state-active" );
            this._mouseSliding = false;

            this._stop( event, this._handleIndex );
            this._change( event, this._handleIndex );

            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false;

            return false;
        },

        _detectOrientation: function() {
            this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
        },

        _normValueFromMouse: function( position ) {
            var pixelTotal,
                pixelMouse,
                percentMouse,
                valueTotal,
                valueMouse;

            if ( this.orientation === "horizontal" ) {
                pixelTotal = this.elementSize.width;
                pixelMouse = position.x - this.elementOffset.left - ( this._clickOffset ? this._clickOffset.left : 0 );
            } else {
                pixelTotal = this.elementSize.height;
                pixelMouse = position.y - this.elementOffset.top - ( this._clickOffset ? this._clickOffset.top : 0 );
            }

            percentMouse = ( pixelMouse / pixelTotal );
            if ( percentMouse > 1 ) {
                percentMouse = 1;
            }
            if ( percentMouse < 0 ) {
                percentMouse = 0;
            }
            if ( this.orientation === "vertical" ) {
                percentMouse = 1 - percentMouse;
            }

            valueTotal = this._valueMax() - this._valueMin();
            valueMouse = this._valueMin() + percentMouse * valueTotal;

            return this._trimAlignValue( valueMouse );
        },

        _start: function( event, index ) {
            var uiHash = {
                handle: this.handles[ index ],
                value: this.value()
            };
            if ( this.options.values && this.options.values.length ) {
                uiHash.value = this.values( index );
                uiHash.values = this.values();
            }
            return this._trigger( "start", event, uiHash );
        },

        _slide: function( event, index, newVal ) {
            var otherVal,
                newValues,
                allowed;

            if ( this.options.values && this.options.values.length ) {
                otherVal = this.values( index ? 0 : 1 );

                if ( ( this.options.values.length === 2 && this.options.range === true ) &&
                    ( ( index === 0 && newVal > otherVal) || ( index === 1 && newVal < otherVal ) )
                ) {
                    newVal = otherVal;
                }

                if ( newVal !== this.values( index ) ) {
                    newValues = this.values();
                    newValues[ index ] = newVal;
                    // A slide can be canceled by returning false from the slide callback
                    allowed = this._trigger( "slide", event, {
                        handle: this.handles[ index ],
                        value: newVal,
                        values: newValues
                    } );
                    otherVal = this.values( index ? 0 : 1 );
                    if ( allowed !== false ) {
                        this.values( index, newVal );
                    }
                }
            } else {
                if ( newVal !== this.value() ) {
                    // A slide can be canceled by returning false from the slide callback
                    allowed = this._trigger( "slide", event, {
                        handle: this.handles[ index ],
                        value: newVal
                    } );
                    if ( allowed !== false ) {
                        this.value( newVal );
                    }
                }
            }
        },

        _stop: function( event, index ) {
            var uiHash = {
                handle: this.handles[ index ],
                value: this.value()
            };
            if ( this.options.values && this.options.values.length ) {
                uiHash.value = this.values( index );
                uiHash.values = this.values();
            }

            this._trigger( "stop", event, uiHash );
        },

        _change: function( event, index ) {
            if ( !this._keySliding && !this._mouseSliding ) {
                var uiHash = {
                    handle: this.handles[ index ],
                    value: this.value()
                };
                if ( this.options.values && this.options.values.length ) {
                    uiHash.value = this.values( index );
                    uiHash.values = this.values();
                }

                //store the last changed value index for reference when handles overlap
                this._lastChangedValue = index;

                this._trigger( "change", event, uiHash );
            }
        },

        value: function( newValue ) {
            if ( arguments.length ) {
                this.options.value = this._trimAlignValue( newValue );
                this._refreshValue();
                this._change( null, 0 );
                return;
            }

            return this._value();
        },

        values: function( index, newValue ) {
            var vals,
                newValues,
                i;

            if ( arguments.length > 1 ) {
                this.options.values[ index ] = this._trimAlignValue( newValue );
                this._refreshValue();
                this._change( null, index );
                return;
            }

            if ( arguments.length ) {
                if ( $.isArray( arguments[ 0 ] ) ) {
                    vals = this.options.values;
                    newValues = arguments[ 0 ];
                    for ( i = 0; i < vals.length; i += 1 ) {
                        vals[ i ] = this._trimAlignValue( newValues[ i ] );
                        this._change( null, i );
                    }
                    this._refreshValue();
                } else {
                    if ( this.options.values && this.options.values.length ) {
                        return this._values( index );
                    } else {
                        return this.value();
                    }
                }
            } else {
                return this._values();
            }
        },

        _setOption: function( key, value ) {
            var i,
                valsLength = 0;

            if ( key === "range" && this.options.range === true ) {
                if ( value === "min" ) {
                    this.options.value = this._values( 0 );
                    this.options.values = null;
                } else if ( value === "max" ) {
                    this.options.value = this._values( this.options.values.length - 1 );
                    this.options.values = null;
                }
            }

            if ( $.isArray( this.options.values ) ) {
                valsLength = this.options.values.length;
            }

            if ( key === "disabled" ) {
                this.element.toggleClass( "ui-state-disabled", !!value );
            }

            this._super( key, value );

            switch ( key ) {
                case "orientation":
                    this._detectOrientation();
                    this.element
                        .removeClass( "ui-slider-horizontal ui-slider-vertical" )
                        .addClass( "ui-slider-" + this.orientation );
                    this._refreshValue();

                    // Reset positioning from previous orientation
                    this.handles.css( value === "horizontal" ? "bottom" : "left", "" );
                    break;
                case "value":
                    this._animateOff = true;
                    this._refreshValue();
                    this._change( null, 0 );
                    this._animateOff = false;
                    break;
                case "values":
                    this._animateOff = true;
                    this._refreshValue();
                    for ( i = 0; i < valsLength; i += 1 ) {
                        this._change( null, i );
                    }
                    this._animateOff = false;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = true;
                    this._calculateNewMax();
                    this._refreshValue();
                    this._animateOff = false;
                    break;
                case "range":
                    this._animateOff = true;
                    this._refresh();
                    this._animateOff = false;
                    break;
            }
        },

        //internal value getter
        // _value() returns value trimmed by min and max, aligned by step
        _value: function() {
            var val = this.options.value;
            val = this._trimAlignValue( val );

            return val;
        },

        //internal values getter
        // _values() returns array of values trimmed by min and max, aligned by step
        // _values( index ) returns single value trimmed by min and max, aligned by step
        _values: function( index ) {
            var val,
                vals,
                i;

            if ( arguments.length ) {
                val = this.options.values[ index ];
                val = this._trimAlignValue( val );

                return val;
            } else if ( this.options.values && this.options.values.length ) {
                // .slice() creates a copy of the array
                // this copy gets trimmed by min and max and then returned
                vals = this.options.values.slice();
                for ( i = 0; i < vals.length; i += 1) {
                    vals[ i ] = this._trimAlignValue( vals[ i ] );
                }

                return vals;
            } else {
                return [];
            }
        },

        // returns the step-aligned value that val is closest to, between (inclusive) min and max
        _trimAlignValue: function( val ) {
            if ( val <= this._valueMin() ) {
                return this._valueMin();
            }
            if ( val >= this._valueMax() ) {
                return this._valueMax();
            }
            var step = ( this.options.step > 0 ) ? this.options.step : 1,
                valModStep = (val - this._valueMin()) % step,
                alignValue = val - valModStep;

            if ( Math.abs(valModStep) * 2 >= step ) {
                alignValue += ( valModStep > 0 ) ? step : ( -step );
            }

            // Since JavaScript has problems with large floats, round
            // the final value to 5 digits after the decimal point (see #4124)
            return parseFloat( alignValue.toFixed(5) );
        },

        _calculateNewMax: function() {
            var max = this.options.max,
                min = this._valueMin(),
                step = this.options.step,
                aboveMin = Math.floor( ( +( max - min ).toFixed( this._precision() ) ) / step ) * step;
            max = aboveMin + min;
            this.max = parseFloat( max.toFixed( this._precision() ) );
        },

        _precision: function() {
            var precision = this._precisionOf( this.options.step );
            if ( this.options.min !== null ) {
                precision = Math.max( precision, this._precisionOf( this.options.min ) );
            }
            return precision;
        },

        _precisionOf: function( num ) {
            var str = num.toString(),
                decimal = str.indexOf( "." );
            return decimal === -1 ? 0 : str.length - decimal - 1;
        },

        _valueMin: function() {
            return this.options.min;
        },

        _valueMax: function() {
            return this.max;
        },

        _refreshValue: function() {
            var lastValPercent, valPercent, value, valueMin, valueMax,
                oRange = this.options.range,
                o = this.options,
                that = this,
                animate = ( !this._animateOff ) ? o.animate : false,
                _set = {};

            if ( this.options.values && this.options.values.length ) {
                this.handles.each(function( i ) {
                    valPercent = ( that.values(i) - that._valueMin() ) / ( that._valueMax() - that._valueMin() ) * 100;
                    _set[ that.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
                    $( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
                    if ( that.options.range === true ) {
                        if ( that.orientation === "horizontal" ) {
                            if ( i === 0 ) {
                                that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { left: valPercent + "%" }, o.animate );
                            }
                            if ( i === 1 ) {
                                that.range[ animate ? "animate" : "css" ]( { width: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
                            }
                        } else {
                            if ( i === 0 ) {
                                that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { bottom: ( valPercent ) + "%" }, o.animate );
                            }
                            if ( i === 1 ) {
                                that.range[ animate ? "animate" : "css" ]( { height: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
                            }
                        }
                    }
                    lastValPercent = valPercent;
                });
            } else {
                value = this.value();
                valueMin = this._valueMin();
                valueMax = this._valueMax();
                valPercent = ( valueMax !== valueMin ) ?
                ( value - valueMin ) / ( valueMax - valueMin ) * 100 :
                    0;
                _set[ this.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
                this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

                if ( oRange === "min" && this.orientation === "horizontal" ) {
                    this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { width: valPercent + "%" }, o.animate );
                }
                if ( oRange === "max" && this.orientation === "horizontal" ) {
                    this.range[ animate ? "animate" : "css" ]( { width: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
                }
                if ( oRange === "min" && this.orientation === "vertical" ) {
                    this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { height: valPercent + "%" }, o.animate );
                }
                if ( oRange === "max" && this.orientation === "vertical" ) {
                    this.range[ animate ? "animate" : "css" ]( { height: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
                }
            }
        },

        _handleEvents: {
            keydown: function( event ) {
                var allowed, curVal, newVal, step,
                    index = $( event.target ).data( "ui-slider-handle-index" );

                switch ( event.keyCode ) {
                    case $.ui.keyCode.HOME:
                    case $.ui.keyCode.END:
                    case $.ui.keyCode.PAGE_UP:
                    case $.ui.keyCode.PAGE_DOWN:
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        event.preventDefault();
                        if ( !this._keySliding ) {
                            this._keySliding = true;
                            $( event.target ).addClass( "ui-state-active" );
                            allowed = this._start( event, index );
                            if ( allowed === false ) {
                                return;
                            }
                        }
                        break;
                }

                step = this.options.step;
                if ( this.options.values && this.options.values.length ) {
                    curVal = newVal = this.values( index );
                } else {
                    curVal = newVal = this.value();
                }

                switch ( event.keyCode ) {
                    case $.ui.keyCode.HOME:
                        newVal = this._valueMin();
                        break;
                    case $.ui.keyCode.END:
                        newVal = this._valueMax();
                        break;
                    case $.ui.keyCode.PAGE_UP:
                        newVal = this._trimAlignValue(
                            curVal + ( ( this._valueMax() - this._valueMin() ) / this.numPages )
                        );
                        break;
                    case $.ui.keyCode.PAGE_DOWN:
                        newVal = this._trimAlignValue(
                            curVal - ( (this._valueMax() - this._valueMin()) / this.numPages ) );
                        break;
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                        if ( curVal === this._valueMax() ) {
                            return;
                        }
                        newVal = this._trimAlignValue( curVal + step );
                        break;
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        if ( curVal === this._valueMin() ) {
                            return;
                        }
                        newVal = this._trimAlignValue( curVal - step );
                        break;
                }

                this._slide( event, index, newVal );
            },
            keyup: function( event ) {
                var index = $( event.target ).data( "ui-slider-handle-index" );

                if ( this._keySliding ) {
                    this._keySliding = false;
                    this._stop( event, index );
                    this._change( event, index );
                    $( event.target ).removeClass( "ui-state-active" );
                }
            }
        }
    });


    /*!
     * jQuery UI Sortable 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/sortable/
     */


    var sortable = $.widget("ui.sortable", $.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "sort",
        ready: false,
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1000,

            // callbacks
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },

        _isOverAxis: function( x, reference, size ) {
            return ( x >= reference ) && ( x < ( reference + size ) );
        },

        _isFloating: function( item ) {
            return (/left|right/).test(item.css("float")) || (/inline|table-cell/).test(item.css("display"));
        },

        _create: function() {
            this.containerCache = {};
            this.element.addClass("ui-sortable");

            //Get the items
            this.refresh();

            //Let's determine the parent's offset
            this.offset = this.element.offset();

            //Initialize mouse events for interaction
            this._mouseInit();

            this._setHandleClassName();

            //We're ready to go
            this.ready = true;

        },

        _setOption: function( key, value ) {
            this._super( key, value );

            if ( key === "handle" ) {
                this._setHandleClassName();
            }
        },

        _setHandleClassName: function() {
            this.element.find( ".ui-sortable-handle" ).removeClass( "ui-sortable-handle" );
            $.each( this.items, function() {
                ( this.instance.options.handle ?
                    this.item.find( this.instance.options.handle ) : this.item )
                    .addClass( "ui-sortable-handle" );
            });
        },

        _destroy: function() {
            this.element
                .removeClass( "ui-sortable ui-sortable-disabled" )
                .find( ".ui-sortable-handle" )
                .removeClass( "ui-sortable-handle" );
            this._mouseDestroy();

            for ( var i = this.items.length - 1; i >= 0; i-- ) {
                this.items[i].item.removeData(this.widgetName + "-item");
            }

            return this;
        },

        _mouseCapture: function(event, overrideHandle) {
            var currentItem = null,
                validHandle = false,
                that = this;

            if (this.reverting) {
                return false;
            }

            if(this.options.disabled || this.options.type === "static") {
                return false;
            }

            //We have to refresh the items data once first
            this._refreshItems(event);

            //Find out if the clicked node (or one of its parents) is a actual item in this.items
            $(event.target).parents().each(function() {
                if($.data(this, that.widgetName + "-item") === that) {
                    currentItem = $(this);
                    return false;
                }
            });
            if($.data(event.target, that.widgetName + "-item") === that) {
                currentItem = $(event.target);
            }

            if(!currentItem) {
                return false;
            }
            if(this.options.handle && !overrideHandle) {
                $(this.options.handle, currentItem).find("*").addBack().each(function() {
                    if(this === event.target) {
                        validHandle = true;
                    }
                });
                if(!validHandle) {
                    return false;
                }
            }

            this.currentItem = currentItem;
            this._removeCurrentsFromItems();
            return true;

        },

        _mouseStart: function(event, overrideHandle, noActivation) {

            var i, body,
                o = this.options;

            this.currentContainer = this;

            //We only need to call refreshPositions, because the refreshItems call has been moved to mouseCapture
            this.refreshPositions();

            //Create and append the visible helper
            this.helper = this._createHelper(event);

            //Cache the helper size
            this._cacheHelperProportions();

            /*
             * - Position generation -
             * This block generates everything position related - it's the core of draggables.
             */

            //Cache the margins of the original element
            this._cacheMargins();

            //Get the next scrolling parent
            this.scrollParent = this.helper.scrollParent();

            //The element's absolute position on the page minus margins
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };

            $.extend(this.offset, {
                click: { //Where the click happened, relative to the element
                    left: event.pageX - this.offset.left,
                    top: event.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
            });

            // Only after we got the offset, we can change the helper's position to absolute
            // TODO: Still need to figure out a way to make relative sorting possible
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");

            //Generate the original position
            this.originalPosition = this._generatePosition(event);
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;

            //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
            (o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

            //Cache the former DOM position
            this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] };

            //If the helper is not the original, hide the original so it's not playing any role during the drag, won't cause anything bad this way
            if(this.helper[0] !== this.currentItem[0]) {
                this.currentItem.hide();
            }

            //Create the placeholder
            this._createPlaceholder();

            //Set a containment if given in the options
            if(o.containment) {
                this._setContainment();
            }

            if( o.cursor && o.cursor !== "auto" ) { // cursor option
                body = this.document.find( "body" );

                // support: IE
                this.storedCursor = body.css( "cursor" );
                body.css( "cursor", o.cursor );

                this.storedStylesheet = $( "<style>*{ cursor: "+o.cursor+" !important; }</style>" ).appendTo( body );
            }

            if(o.opacity) { // opacity option
                if (this.helper.css("opacity")) {
                    this._storedOpacity = this.helper.css("opacity");
                }
                this.helper.css("opacity", o.opacity);
            }

            if(o.zIndex) { // zIndex option
                if (this.helper.css("zIndex")) {
                    this._storedZIndex = this.helper.css("zIndex");
                }
                this.helper.css("zIndex", o.zIndex);
            }

            //Prepare scrolling
            if(this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
                this.overflowOffset = this.scrollParent.offset();
            }

            //Call callbacks
            this._trigger("start", event, this._uiHash());

            //Recache the helper size
            if(!this._preserveHelperProportions) {
                this._cacheHelperProportions();
            }


            //Post "activate" events to possible containers
            if( !noActivation ) {
                for ( i = this.containers.length - 1; i >= 0; i-- ) {
                    this.containers[ i ]._trigger( "activate", event, this._uiHash( this ) );
                }
            }

            //Prepare possible droppables
            if($.ui.ddmanager) {
                $.ui.ddmanager.current = this;
            }

            if ($.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(this, event);
            }

            this.dragging = true;

            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(event); //Execute the drag once - this causes the helper not to be visible before getting its correct position
            return true;

        },

        _mouseDrag: function(event) {
            var i, item, itemElement, intersection,
                o = this.options,
                scrolled = false;

            //Compute the helpers position
            this.position = this._generatePosition(event);
            this.positionAbs = this._convertPositionTo("absolute");

            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs;
            }

            //Do scrolling
            if(this.options.scroll) {
                if(this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {

                    if((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
                    } else if(event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
                    }

                    if((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
                    } else if(event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
                    }

                } else {

                    if(event.pageY - this.document.scrollTop() < o.scrollSensitivity) {
                        scrolled = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed);
                    } else if(this.window.height() - (event.pageY - this.document.scrollTop()) < o.scrollSensitivity) {
                        scrolled = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed);
                    }

                    if(event.pageX - this.document.scrollLeft() < o.scrollSensitivity) {
                        scrolled = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed);
                    } else if(this.window.width() - (event.pageX - this.document.scrollLeft()) < o.scrollSensitivity) {
                        scrolled = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed);
                    }

                }

                if(scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                    $.ui.ddmanager.prepareOffsets(this, event);
                }
            }

            //Regenerate the absolute position used for position checks
            this.positionAbs = this._convertPositionTo("absolute");

            //Set the helper position
            if(!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left+"px";
            }
            if(!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top+"px";
            }

            //Rearrange
            for (i = this.items.length - 1; i >= 0; i--) {

                //Cache variables and intersection, continue if no intersection
                item = this.items[i];
                itemElement = item.item[0];
                intersection = this._intersectsWithPointer(item);
                if (!intersection) {
                    continue;
                }

                // Only put the placeholder inside the current Container, skip all
                // items from other containers. This works because when moving
                // an item from one container to another the
                // currentContainer is switched before the placeholder is moved.
                //
                // Without this, moving items in "sub-sortables" can cause
                // the placeholder to jitter between the outer and inner container.
                if (item.instance !== this.currentContainer) {
                    continue;
                }

                // cannot intersect with itself
                // no useless actions that have been done before
                // no action if the item moved is the parent of the item checked
                if (itemElement !== this.currentItem[0] &&
                    this.placeholder[intersection === 1 ? "next" : "prev"]()[0] !== itemElement &&
                    !$.contains(this.placeholder[0], itemElement) &&
                    (this.options.type === "semi-dynamic" ? !$.contains(this.element[0], itemElement) : true)
                ) {

                    this.direction = intersection === 1 ? "down" : "up";

                    if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) {
                        this._rearrange(event, item);
                    } else {
                        break;
                    }

                    this._trigger("change", event, this._uiHash());
                    break;
                }
            }

            //Post events to containers
            this._contactContainers(event);

            //Interconnect with droppables
            if($.ui.ddmanager) {
                $.ui.ddmanager.drag(this, event);
            }

            //Call callbacks
            this._trigger("sort", event, this._uiHash());

            this.lastPositionAbs = this.positionAbs;
            return false;

        },

        _mouseStop: function(event, noPropagation) {

            if(!event) {
                return;
            }

            //If we are using droppables, inform the manager about the drop
            if ($.ui.ddmanager && !this.options.dropBehaviour) {
                $.ui.ddmanager.drop(this, event);
            }

            if(this.options.revert) {
                var that = this,
                    cur = this.placeholder.offset(),
                    axis = this.options.axis,
                    animation = {};

                if ( !axis || axis === "x" ) {
                    animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft);
                }
                if ( !axis || axis === "y" ) {
                    animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop);
                }
                this.reverting = true;
                $(this.helper).animate( animation, parseInt(this.options.revert, 10) || 500, function() {
                    that._clear(event);
                });
            } else {
                this._clear(event, noPropagation);
            }

            return false;

        },

        cancel: function() {

            if(this.dragging) {

                this._mouseUp({ target: null });

                if(this.options.helper === "original") {
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
                } else {
                    this.currentItem.show();
                }

                //Post deactivating events to containers
                for (var i = this.containers.length - 1; i >= 0; i--){
                    this.containers[i]._trigger("deactivate", null, this._uiHash(this));
                    if(this.containers[i].containerCache.over) {
                        this.containers[i]._trigger("out", null, this._uiHash(this));
                        this.containers[i].containerCache.over = 0;
                    }
                }

            }

            if (this.placeholder) {
                //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
                if(this.placeholder[0].parentNode) {
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
                }
                if(this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
                    this.helper.remove();
                }

                $.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });

                if(this.domPosition.prev) {
                    $(this.domPosition.prev).after(this.currentItem);
                } else {
                    $(this.domPosition.parent).prepend(this.currentItem);
                }
            }

            return this;

        },

        serialize: function(o) {

            var items = this._getItemsAsjQuery(o && o.connected),
                str = [];
            o = o || {};

            $(items).each(function() {
                var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || (/(.+)[\-=_](.+)/));
                if (res) {
                    str.push((o.key || res[1]+"[]")+"="+(o.key && o.expression ? res[1] : res[2]));
                }
            });

            if(!str.length && o.key) {
                str.push(o.key + "=");
            }

            return str.join("&");

        },

        toArray: function(o) {

            var items = this._getItemsAsjQuery(o && o.connected),
                ret = [];

            o = o || {};

            items.each(function() { ret.push($(o.item || this).attr(o.attribute || "id") || ""); });
            return ret;

        },

        /* Be careful with the following core functions */
        _intersectsWith: function(item) {

            var x1 = this.positionAbs.left,
                x2 = x1 + this.helperProportions.width,
                y1 = this.positionAbs.top,
                y2 = y1 + this.helperProportions.height,
                l = item.left,
                r = l + item.width,
                t = item.top,
                b = t + item.height,
                dyClick = this.offset.click.top,
                dxClick = this.offset.click.left,
                isOverElementHeight = ( this.options.axis === "x" ) || ( ( y1 + dyClick ) > t && ( y1 + dyClick ) < b ),
                isOverElementWidth = ( this.options.axis === "y" ) || ( ( x1 + dxClick ) > l && ( x1 + dxClick ) < r ),
                isOverElement = isOverElementHeight && isOverElementWidth;

            if ( this.options.tolerance === "pointer" ||
                this.options.forcePointerForContainers ||
                (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"])
            ) {
                return isOverElement;
            } else {

                return (l < x1 + (this.helperProportions.width / 2) && // Right Half
                x2 - (this.helperProportions.width / 2) < r && // Left Half
                t < y1 + (this.helperProportions.height / 2) && // Bottom Half
                y2 - (this.helperProportions.height / 2) < b ); // Top Half

            }
        },

        _intersectsWithPointer: function(item) {

            var isOverElementHeight = (this.options.axis === "x") || this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
                isOverElementWidth = (this.options.axis === "y") || this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
                isOverElement = isOverElementHeight && isOverElementWidth,
                verticalDirection = this._getDragVerticalDirection(),
                horizontalDirection = this._getDragHorizontalDirection();

            if (!isOverElement) {
                return false;
            }

            return this.floating ?
                ( ((horizontalDirection && horizontalDirection === "right") || verticalDirection === "down") ? 2 : 1 )
                : ( verticalDirection && (verticalDirection === "down" ? 2 : 1) );

        },

        _intersectsWithSides: function(item) {

            var isOverBottomHalf = this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + (item.height/2), item.height),
                isOverRightHalf = this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + (item.width/2), item.width),
                verticalDirection = this._getDragVerticalDirection(),
                horizontalDirection = this._getDragHorizontalDirection();

            if (this.floating && horizontalDirection) {
                return ((horizontalDirection === "right" && isOverRightHalf) || (horizontalDirection === "left" && !isOverRightHalf));
            } else {
                return verticalDirection && ((verticalDirection === "down" && isOverBottomHalf) || (verticalDirection === "up" && !isOverBottomHalf));
            }

        },

        _getDragVerticalDirection: function() {
            var delta = this.positionAbs.top - this.lastPositionAbs.top;
            return delta !== 0 && (delta > 0 ? "down" : "up");
        },

        _getDragHorizontalDirection: function() {
            var delta = this.positionAbs.left - this.lastPositionAbs.left;
            return delta !== 0 && (delta > 0 ? "right" : "left");
        },

        refresh: function(event) {
            this._refreshItems(event);
            this._setHandleClassName();
            this.refreshPositions();
            return this;
        },

        _connectWith: function() {
            var options = this.options;
            return options.connectWith.constructor === String ? [options.connectWith] : options.connectWith;
        },

        _getItemsAsjQuery: function(connected) {

            var i, j, cur, inst,
                items = [],
                queries = [],
                connectWith = this._connectWith();

            if(connectWith && connected) {
                for (i = connectWith.length - 1; i >= 0; i--){
                    cur = $(connectWith[i], this.document[0]);
                    for ( j = cur.length - 1; j >= 0; j--){
                        inst = $.data(cur[j], this.widgetFullName);
                        if(inst && inst !== this && !inst.options.disabled) {
                            queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst]);
                        }
                    }
                }
            }

            queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

            function addItems() {
                items.push( this );
            }
            for (i = queries.length - 1; i >= 0; i--){
                queries[i][0].each( addItems );
            }

            return $(items);

        },

        _removeCurrentsFromItems: function() {

            var list = this.currentItem.find(":data(" + this.widgetName + "-item)");

            this.items = $.grep(this.items, function (item) {
                for (var j=0; j < list.length; j++) {
                    if(list[j] === item.item[0]) {
                        return false;
                    }
                }
                return true;
            });

        },

        _refreshItems: function(event) {

            this.items = [];
            this.containers = [this];

            var i, j, cur, inst, targetData, _queries, item, queriesLength,
                items = this.items,
                queries = [[$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, { item: this.currentItem }) : $(this.options.items, this.element), this]],
                connectWith = this._connectWith();

            if(connectWith && this.ready) { //Shouldn't be run the first time through due to massive slow-down
                for (i = connectWith.length - 1; i >= 0; i--){
                    cur = $(connectWith[i], this.document[0]);
                    for (j = cur.length - 1; j >= 0; j--){
                        inst = $.data(cur[j], this.widgetFullName);
                        if(inst && inst !== this && !inst.options.disabled) {
                            queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, { item: this.currentItem }) : $(inst.options.items, inst.element), inst]);
                            this.containers.push(inst);
                        }
                    }
                }
            }

            for (i = queries.length - 1; i >= 0; i--) {
                targetData = queries[i][1];
                _queries = queries[i][0];

                for (j=0, queriesLength = _queries.length; j < queriesLength; j++) {
                    item = $(_queries[j]);

                    item.data(this.widgetName + "-item", targetData); // Data for target checking (mouse manager)

                    items.push({
                        item: item,
                        instance: targetData,
                        width: 0, height: 0,
                        left: 0, top: 0
                    });
                }
            }

        },

        refreshPositions: function(fast) {

            // Determine whether items are being displayed horizontally
            this.floating = this.items.length ?
            this.options.axis === "x" || this._isFloating( this.items[ 0 ].item ) :
                false;

            //This has to be redone because due to the item being moved out/into the offsetParent, the offsetParent's position will change
            if(this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset();
            }

            var i, item, t, p;

            for (i = this.items.length - 1; i >= 0; i--){
                item = this.items[i];

                //We ignore calculating positions of all connected containers when we're not over them
                if(item.instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0]) {
                    continue;
                }

                t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;

                if (!fast) {
                    item.width = t.outerWidth();
                    item.height = t.outerHeight();
                }

                p = t.offset();
                item.left = p.left;
                item.top = p.top;
            }

            if(this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this);
            } else {
                for (i = this.containers.length - 1; i >= 0; i--){
                    p = this.containers[i].element.offset();
                    this.containers[i].containerCache.left = p.left;
                    this.containers[i].containerCache.top = p.top;
                    this.containers[i].containerCache.width = this.containers[i].element.outerWidth();
                    this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                }
            }

            return this;
        },

        _createPlaceholder: function(that) {
            that = that || this;
            var className,
                o = that.options;

            if(!o.placeholder || o.placeholder.constructor === String) {
                className = o.placeholder;
                o.placeholder = {
                    element: function() {

                        var nodeName = that.currentItem[0].nodeName.toLowerCase(),
                            element = $( "<" + nodeName + ">", that.document[0] )
                                .addClass(className || that.currentItem[0].className+" ui-sortable-placeholder")
                                .removeClass("ui-sortable-helper");

                        if ( nodeName === "tbody" ) {
                            that._createTrPlaceholder(
                                that.currentItem.find( "tr" ).eq( 0 ),
                                $( "<tr>", that.document[ 0 ] ).appendTo( element )
                            );
                        } else if ( nodeName === "tr" ) {
                            that._createTrPlaceholder( that.currentItem, element );
                        } else if ( nodeName === "img" ) {
                            element.attr( "src", that.currentItem.attr( "src" ) );
                        }

                        if ( !className ) {
                            element.css( "visibility", "hidden" );
                        }

                        return element;
                    },
                    update: function(container, p) {

                        // 1. If a className is set as 'placeholder option, we don't force sizes - the class is responsible for that
                        // 2. The option 'forcePlaceholderSize can be enabled to force it even if a class name is specified
                        if(className && !o.forcePlaceholderSize) {
                            return;
                        }

                        //If the element doesn't have a actual height by itself (without styles coming from a stylesheet), it receives the inline height from the dragged item
                        if(!p.height()) { p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop")||0, 10) - parseInt(that.currentItem.css("paddingBottom")||0, 10)); }
                        if(!p.width()) { p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft")||0, 10) - parseInt(that.currentItem.css("paddingRight")||0, 10)); }
                    }
                };
            }

            //Create the placeholder
            that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem));

            //Append it after the actual current item
            that.currentItem.after(that.placeholder);

            //Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
            o.placeholder.update(that, that.placeholder);

        },

        _createTrPlaceholder: function( sourceTr, targetTr ) {
            var that = this;

            sourceTr.children().each(function() {
                $( "<td>&#160;</td>", that.document[ 0 ] )
                    .attr( "colspan", $( this ).attr( "colspan" ) || 1 )
                    .appendTo( targetTr );
            });
        },

        _contactContainers: function(event) {
            var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom, floating, axis,
                innermostContainer = null,
                innermostIndex = null;

            // get innermost container that intersects with item
            for (i = this.containers.length - 1; i >= 0; i--) {

                // never consider a container that's located within the item itself
                if($.contains(this.currentItem[0], this.containers[i].element[0])) {
                    continue;
                }

                if(this._intersectsWith(this.containers[i].containerCache)) {

                    // if we've already found a container and it's more "inner" than this, then continue
                    if(innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) {
                        continue;
                    }

                    innermostContainer = this.containers[i];
                    innermostIndex = i;

                } else {
                    // container doesn't intersect. trigger "out" event if necessary
                    if(this.containers[i].containerCache.over) {
                        this.containers[i]._trigger("out", event, this._uiHash(this));
                        this.containers[i].containerCache.over = 0;
                    }
                }

            }

            // if no intersecting containers found, return
            if(!innermostContainer) {
                return;
            }

            // move the item into the container if it's not there already
            if(this.containers.length === 1) {
                if (!this.containers[innermostIndex].containerCache.over) {
                    this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
                    this.containers[innermostIndex].containerCache.over = 1;
                }
            } else {

                //When entering a new container, we will find the item with the least distance and append our item near it
                dist = 10000;
                itemWithLeastDistance = null;
                floating = innermostContainer.floating || this._isFloating(this.currentItem);
                posProperty = floating ? "left" : "top";
                sizeProperty = floating ? "width" : "height";
                axis = floating ? "clientX" : "clientY";

                for (j = this.items.length - 1; j >= 0; j--) {
                    if(!$.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) {
                        continue;
                    }
                    if(this.items[j].item[0] === this.currentItem[0]) {
                        continue;
                    }

                    cur = this.items[j].item.offset()[posProperty];
                    nearBottom = false;
                    if ( event[ axis ] - cur > this.items[ j ][ sizeProperty ] / 2 ) {
                        nearBottom = true;
                    }

                    if ( Math.abs( event[ axis ] - cur ) < dist ) {
                        dist = Math.abs( event[ axis ] - cur );
                        itemWithLeastDistance = this.items[ j ];
                        this.direction = nearBottom ? "up": "down";
                    }
                }

                //Check if dropOnEmpty is enabled
                if(!itemWithLeastDistance && !this.options.dropOnEmpty) {
                    return;
                }

                if(this.currentContainer === this.containers[innermostIndex]) {
                    if ( !this.currentContainer.containerCache.over ) {
                        this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash() );
                        this.currentContainer.containerCache.over = 1;
                    }
                    return;
                }

                itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);
                this._trigger("change", event, this._uiHash());
                this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));
                this.currentContainer = this.containers[innermostIndex];

                //Update the placeholder
                this.options.placeholder.update(this.currentContainer, this.placeholder);

                this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
                this.containers[innermostIndex].containerCache.over = 1;
            }


        },

        _createHelper: function(event) {

            var o = this.options,
                helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : (o.helper === "clone" ? this.currentItem.clone() : this.currentItem);

            //Add the helper to the DOM if that didn't happen already
            if(!helper.parents("body").length) {
                $(o.appendTo !== "parent" ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);
            }

            if(helper[0] === this.currentItem[0]) {
                this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") };
            }

            if(!helper[0].style.width || o.forceHelperSize) {
                helper.width(this.currentItem.width());
            }
            if(!helper[0].style.height || o.forceHelperSize) {
                helper.height(this.currentItem.height());
            }

            return helper;

        },

        _adjustOffsetFromHelper: function(obj) {
            if (typeof obj === "string") {
                obj = obj.split(" ");
            }
            if ($.isArray(obj)) {
                obj = {left: +obj[0], top: +obj[1] || 0};
            }
            if ("left" in obj) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ("right" in obj) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ("top" in obj) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ("bottom" in obj) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },

        _getParentOffset: function() {


            //Get the offsetParent and cache its position
            this.offsetParent = this.helper.offsetParent();
            var po = this.offsetParent.offset();

            // This is a special case where we need to modify a offset calculated on start, since the following happened:
            // 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
            // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
            //    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
            if(this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }

            // This needs to be actually done for all browsers, since pageX/pageY includes this information
            // with an ugly IE fix
            if( this.offsetParent[0] === this.document[0].body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie)) {
                po = { top: 0, left: 0 };
            }

            return {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"),10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"),10) || 0)
            };

        },

        _getRelativeOffset: function() {

            if(this.cssPosition === "relative") {
                var p = this.currentItem.position();
                return {
                    top: p.top - (parseInt(this.helper.css("top"),10) || 0) + this.scrollParent.scrollTop(),
                    left: p.left - (parseInt(this.helper.css("left"),10) || 0) + this.scrollParent.scrollLeft()
                };
            } else {
                return { top: 0, left: 0 };
            }

        },

        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.currentItem.css("marginLeft"),10) || 0),
                top: (parseInt(this.currentItem.css("marginTop"),10) || 0)
            };
        },

        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },

        _setContainment: function() {

            var ce, co, over,
                o = this.options;
            if(o.containment === "parent") {
                o.containment = this.helper[0].parentNode;
            }
            if(o.containment === "document" || o.containment === "window") {
                this.containment = [
                    0 - this.offset.relative.left - this.offset.parent.left,
                    0 - this.offset.relative.top - this.offset.parent.top,
                    o.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left,
                    (o.containment === "document" ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
                ];
            }

            if(!(/^(document|window|parent)$/).test(o.containment)) {
                ce = $(o.containment)[0];
                co = $(o.containment).offset();
                over = ($(ce).css("overflow") !== "hidden");

                this.containment = [
                    co.left + (parseInt($(ce).css("borderLeftWidth"),10) || 0) + (parseInt($(ce).css("paddingLeft"),10) || 0) - this.margins.left,
                    co.top + (parseInt($(ce).css("borderTopWidth"),10) || 0) + (parseInt($(ce).css("paddingTop"),10) || 0) - this.margins.top,
                    co.left+(over ? Math.max(ce.scrollWidth,ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"),10) || 0) - (parseInt($(ce).css("paddingRight"),10) || 0) - this.helperProportions.width - this.margins.left,
                    co.top+(over ? Math.max(ce.scrollHeight,ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"),10) || 0) - (parseInt($(ce).css("paddingBottom"),10) || 0) - this.helperProportions.height - this.margins.top
                ];
            }

        },

        _convertPositionTo: function(d, pos) {

            if(!pos) {
                pos = this.position;
            }
            var mod = d === "absolute" ? 1 : -1,
                scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

            return {
                top: (
                    pos.top	+																// The absolute mouse position
                    this.offset.relative.top * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.parent.top * mod -											// The offsetParent's offset without borders (offset + border)
                    ( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod)
                ),
                left: (
                    pos.left +																// The absolute mouse position
                    this.offset.relative.left * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.parent.left * mod	-										// The offsetParent's offset without borders (offset + border)
                    ( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ) * mod)
                )
            };

        },

        _generatePosition: function(event) {

            var top, left,
                o = this.options,
                pageX = event.pageX,
                pageY = event.pageY,
                scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

            // This is another very weird special case that only happens for relative elements:
            // 1. If the css position is relative
            // 2. and the scroll parent is the document or similar to the offset parent
            // we have to refresh the relative offset during the scroll so there are no jumps
            if(this.cssPosition === "relative" && !(this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset();
            }

            /*
             * - Position constraining -
             * Constrain the position to a mix of grid, containment.
             */

            if(this.originalPosition) { //If we are not dragging yet, we won't check for options

                if(this.containment) {
                    if(event.pageX - this.offset.click.left < this.containment[0]) {
                        pageX = this.containment[0] + this.offset.click.left;
                    }
                    if(event.pageY - this.offset.click.top < this.containment[1]) {
                        pageY = this.containment[1] + this.offset.click.top;
                    }
                    if(event.pageX - this.offset.click.left > this.containment[2]) {
                        pageX = this.containment[2] + this.offset.click.left;
                    }
                    if(event.pageY - this.offset.click.top > this.containment[3]) {
                        pageY = this.containment[3] + this.offset.click.top;
                    }
                }

                if(o.grid) {
                    top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
                    pageY = this.containment ? ( (top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3]) ? top : ((top - this.offset.click.top >= this.containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

                    left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
                    pageX = this.containment ? ( (left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2]) ? left : ((left - this.offset.click.left >= this.containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
                }

            }

            return {
                top: (
                    pageY -																// The absolute mouse position
                    this.offset.click.top -													// Click offset (relative to the element)
                    this.offset.relative.top	-											// Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.parent.top +												// The offsetParent's offset without borders (offset + border)
                    ( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ))
                ),
                left: (
                    pageX -																// The absolute mouse position
                    this.offset.click.left -												// Click offset (relative to the element)
                    this.offset.relative.left	-											// Only for relative positioned nodes: Relative offset from element to offset parent
                    this.offset.parent.left +												// The offsetParent's offset without borders (offset + border)
                    ( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ))
                )
            };

        },

        _rearrange: function(event, i, a, hardRefresh) {

            a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? i.item[0] : i.item[0].nextSibling));

            //Various things done here to improve the performance:
            // 1. we create a setTimeout, that calls refreshPositions
            // 2. on the instance, we have a counter variable, that get's higher after every append
            // 3. on the local scope, we copy the counter variable, and check in the timeout, if it's still the same
            // 4. this lets only the last addition to the timeout stack through
            this.counter = this.counter ? ++this.counter : 1;
            var counter = this.counter;

            this._delay(function() {
                if(counter === this.counter) {
                    this.refreshPositions(!hardRefresh); //Precompute after each DOM insertion, NOT on mousemove
                }
            });

        },

        _clear: function(event, noPropagation) {

            this.reverting = false;
            // We delay all events that have to be triggered to after the point where the placeholder has been removed and
            // everything else normalized again
            var i,
                delayedTriggers = [];

            // We first have to update the dom position of the actual currentItem
            // Note: don't do it if the current item is already removed (by a user), or it gets reappended (see #4088)
            if(!this._noFinalSort && this.currentItem.parent().length) {
                this.placeholder.before(this.currentItem);
            }
            this._noFinalSort = null;

            if(this.helper[0] === this.currentItem[0]) {
                for(i in this._storedCSS) {
                    if(this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") {
                        this._storedCSS[i] = "";
                    }
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else {
                this.currentItem.show();
            }

            if(this.fromOutside && !noPropagation) {
                delayedTriggers.push(function(event) { this._trigger("receive", event, this._uiHash(this.fromOutside)); });
            }
            if((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) {
                delayedTriggers.push(function(event) { this._trigger("update", event, this._uiHash()); }); //Trigger update callback if the DOM position has changed
            }

            // Check if the items Container has Changed and trigger appropriate
            // events.
            if (this !== this.currentContainer) {
                if(!noPropagation) {
                    delayedTriggers.push(function(event) { this._trigger("remove", event, this._uiHash()); });
                    delayedTriggers.push((function(c) { return function(event) { c._trigger("receive", event, this._uiHash(this)); };  }).call(this, this.currentContainer));
                    delayedTriggers.push((function(c) { return function(event) { c._trigger("update", event, this._uiHash(this));  }; }).call(this, this.currentContainer));
                }
            }


            //Post events to containers
            function delayEvent( type, instance, container ) {
                return function( event ) {
                    container._trigger( type, event, instance._uiHash( instance ) );
                };
            }
            for (i = this.containers.length - 1; i >= 0; i--){
                if (!noPropagation) {
                    delayedTriggers.push( delayEvent( "deactivate", this, this.containers[ i ] ) );
                }
                if(this.containers[i].containerCache.over) {
                    delayedTriggers.push( delayEvent( "out", this, this.containers[ i ] ) );
                    this.containers[i].containerCache.over = 0;
                }
            }

            //Do what was originally in plugins
            if ( this.storedCursor ) {
                this.document.find( "body" ).css( "cursor", this.storedCursor );
                this.storedStylesheet.remove();
            }
            if(this._storedOpacity) {
                this.helper.css("opacity", this._storedOpacity);
            }
            if(this._storedZIndex) {
                this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
            }

            this.dragging = false;

            if(!noPropagation) {
                this._trigger("beforeStop", event, this._uiHash());
            }

            //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

            if ( !this.cancelHelperRemoval ) {
                if ( this.helper[ 0 ] !== this.currentItem[ 0 ] ) {
                    this.helper.remove();
                }
                this.helper = null;
            }

            if(!noPropagation) {
                for (i=0; i < delayedTriggers.length; i++) {
                    delayedTriggers[i].call(this, event);
                } //Trigger all delayed events
                this._trigger("stop", event, this._uiHash());
            }

            this.fromOutside = false;
            return !this.cancelHelperRemoval;

        },

        _trigger: function() {
            if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
                this.cancel();
            }
        },

        _uiHash: function(_inst) {
            var inst = _inst || this;
            return {
                helper: inst.helper,
                placeholder: inst.placeholder || $([]),
                position: inst.position,
                originalPosition: inst.originalPosition,
                offset: inst.positionAbs,
                item: inst.currentItem,
                sender: _inst ? _inst.element : null
            };
        }

    });


    /*!
     * jQuery UI Spinner 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/spinner/
     */


    function spinner_modifier( fn ) {
        return function() {
            var previous = this.element.val();
            fn.apply( this, arguments );
            this._refresh();
            if ( previous !== this.element.val() ) {
                this._trigger( "change" );
            }
        };
    }

    var spinner = $.widget( "ui.spinner", {
        version: "1.11.4",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: true,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,

            change: null,
            spin: null,
            start: null,
            stop: null
        },

        _create: function() {
            // handle string values that need to be parsed
            this._setOption( "max", this.options.max );
            this._setOption( "min", this.options.min );
            this._setOption( "step", this.options.step );

            // Only format if there is a value, prevents the field from being marked
            // as invalid in Firefox, see #9573.
            if ( this.value() !== "" ) {
                // Format the value, but don't constrain.
                this._value( this.element.val(), true );
            }

            this._draw();
            this._on( this._events );
            this._refresh();

            // turning off autocomplete prevents the browser from remembering the
            // value when navigating through history, so we re-enable autocomplete
            // if the page is unloaded before the widget is destroyed. #7790
            this._on( this.window, {
                beforeunload: function() {
                    this.element.removeAttr( "autocomplete" );
                }
            });
        },

        _getCreateOptions: function() {
            var options = {},
                element = this.element;

            $.each( [ "min", "max", "step" ], function( i, option ) {
                var value = element.attr( option );
                if ( value !== undefined && value.length ) {
                    options[ option ] = value;
                }
            });

            return options;
        },

        _events: {
            keydown: function( event ) {
                if ( this._start( event ) && this._keydown( event ) ) {
                    event.preventDefault();
                }
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val();
            },
            blur: function( event ) {
                if ( this.cancelBlur ) {
                    delete this.cancelBlur;
                    return;
                }

                this._stop();
                this._refresh();
                if ( this.previous !== this.element.val() ) {
                    this._trigger( "change", event );
                }
            },
            mousewheel: function( event, delta ) {
                if ( !delta ) {
                    return;
                }
                if ( !this.spinning && !this._start( event ) ) {
                    return false;
                }

                this._spin( (delta > 0 ? 1 : -1) * this.options.step, event );
                clearTimeout( this.mousewheelTimer );
                this.mousewheelTimer = this._delay(function() {
                    if ( this.spinning ) {
                        this._stop( event );
                    }
                }, 100 );
                event.preventDefault();
            },
            "mousedown .ui-spinner-button": function( event ) {
                var previous;

                // We never want the buttons to have focus; whenever the user is
                // interacting with the spinner, the focus should be on the input.
                // If the input is focused then this.previous is properly set from
                // when the input first received focus. If the input is not focused
                // then we need to set this.previous based on the value before spinning.
                previous = this.element[0] === this.document[0].activeElement ?
                    this.previous : this.element.val();
                function checkFocus() {
                    var isActive = this.element[0] === this.document[0].activeElement;
                    if ( !isActive ) {
                        this.element.focus();
                        this.previous = previous;
                        // support: IE
                        // IE sets focus asynchronously, so we need to check if focus
                        // moved off of the input because the user clicked on the button.
                        this._delay(function() {
                            this.previous = previous;
                        });
                    }
                }

                // ensure focus is on (or stays on) the text field
                event.preventDefault();
                checkFocus.call( this );

                // support: IE
                // IE doesn't prevent moving focus even with event.preventDefault()
                // so we set a flag to know when we should ignore the blur event
                // and check (again) if focus moved off of the input.
                this.cancelBlur = true;
                this._delay(function() {
                    delete this.cancelBlur;
                    checkFocus.call( this );
                });

                if ( this._start( event ) === false ) {
                    return;
                }

                this._repeat( null, $( event.currentTarget ).hasClass( "ui-spinner-up" ) ? 1 : -1, event );
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function( event ) {
                // button will add ui-state-active if mouse was down while mouseleave and kept down
                if ( !$( event.currentTarget ).hasClass( "ui-state-active" ) ) {
                    return;
                }

                if ( this._start( event ) === false ) {
                    return false;
                }
                this._repeat( null, $( event.currentTarget ).hasClass( "ui-spinner-up" ) ? 1 : -1, event );
            },
            // TODO: do we really want to consider this a stop?
            // shouldn't we just stop the repeater and wait until mouseup before
            // we trigger the stop event?
            "mouseleave .ui-spinner-button": "_stop"
        },

        _draw: function() {
            var uiSpinner = this.uiSpinner = this.element
                .addClass( "ui-spinner-input" )
                .attr( "autocomplete", "off" )
                .wrap( this._uiSpinnerHtml() )
                .parent()
                // add buttons
                .append( this._buttonHtml() );

            this.element.attr( "role", "spinbutton" );

            // button bindings
            this.buttons = uiSpinner.find( ".ui-spinner-button" )
                .attr( "tabIndex", -1 )
                .button()
                .removeClass( "ui-corner-all" );

            // IE 6 doesn't understand height: 50% for the buttons
            // unless the wrapper has an explicit height
            if ( this.buttons.height() > Math.ceil( uiSpinner.height() * 0.5 ) &&
                uiSpinner.height() > 0 ) {
                uiSpinner.height( uiSpinner.height() );
            }

            // disable spinner if element was already disabled
            if ( this.options.disabled ) {
                this.disable();
            }
        },

        _keydown: function( event ) {
            var options = this.options,
                keyCode = $.ui.keyCode;

            switch ( event.keyCode ) {
                case keyCode.UP:
                    this._repeat( null, 1, event );
                    return true;
                case keyCode.DOWN:
                    this._repeat( null, -1, event );
                    return true;
                case keyCode.PAGE_UP:
                    this._repeat( null, options.page, event );
                    return true;
                case keyCode.PAGE_DOWN:
                    this._repeat( null, -options.page, event );
                    return true;
            }

            return false;
        },

        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
        },

        _buttonHtml: function() {
            return "" +
                "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'>" +
                "<span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" +
                "</a>" +
                "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" +
                "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" +
                "</a>";
        },

        _start: function( event ) {
            if ( !this.spinning && this._trigger( "start", event ) === false ) {
                return false;
            }

            if ( !this.counter ) {
                this.counter = 1;
            }
            this.spinning = true;
            return true;
        },

        _repeat: function( i, steps, event ) {
            i = i || 500;

            clearTimeout( this.timer );
            this.timer = this._delay(function() {
                this._repeat( 40, steps, event );
            }, i );

            this._spin( steps * this.options.step, event );
        },

        _spin: function( step, event ) {
            var value = this.value() || 0;

            if ( !this.counter ) {
                this.counter = 1;
            }

            value = this._adjustValue( value + step * this._increment( this.counter ) );

            if ( !this.spinning || this._trigger( "spin", event, { value: value } ) !== false) {
                this._value( value );
                this.counter++;
            }
        },

        _increment: function( i ) {
            var incremental = this.options.incremental;

            if ( incremental ) {
                return $.isFunction( incremental ) ?
                    incremental( i ) :
                    Math.floor( i * i * i / 50000 - i * i / 500 + 17 * i / 200 + 1 );
            }

            return 1;
        },

        _precision: function() {
            var precision = this._precisionOf( this.options.step );
            if ( this.options.min !== null ) {
                precision = Math.max( precision, this._precisionOf( this.options.min ) );
            }
            return precision;
        },

        _precisionOf: function( num ) {
            var str = num.toString(),
                decimal = str.indexOf( "." );
            return decimal === -1 ? 0 : str.length - decimal - 1;
        },

        _adjustValue: function( value ) {
            var base, aboveMin,
                options = this.options;

            // make sure we're at a valid step
            // - find out where we are relative to the base (min or 0)
            base = options.min !== null ? options.min : 0;
            aboveMin = value - base;
            // - round to the nearest step
            aboveMin = Math.round(aboveMin / options.step) * options.step;
            // - rounding is based on 0, so adjust back to our base
            value = base + aboveMin;

            // fix precision from bad JS floating point math
            value = parseFloat( value.toFixed( this._precision() ) );

            // clamp the value
            if ( options.max !== null && value > options.max) {
                return options.max;
            }
            if ( options.min !== null && value < options.min ) {
                return options.min;
            }

            return value;
        },

        _stop: function( event ) {
            if ( !this.spinning ) {
                return;
            }

            clearTimeout( this.timer );
            clearTimeout( this.mousewheelTimer );
            this.counter = 0;
            this.spinning = false;
            this._trigger( "stop", event );
        },

        _setOption: function( key, value ) {
            if ( key === "culture" || key === "numberFormat" ) {
                var prevValue = this._parse( this.element.val() );
                this.options[ key ] = value;
                this.element.val( this._format( prevValue ) );
                return;
            }

            if ( key === "max" || key === "min" || key === "step" ) {
                if ( typeof value === "string" ) {
                    value = this._parse( value );
                }
            }
            if ( key === "icons" ) {
                this.buttons.first().find( ".ui-icon" )
                    .removeClass( this.options.icons.up )
                    .addClass( value.up );
                this.buttons.last().find( ".ui-icon" )
                    .removeClass( this.options.icons.down )
                    .addClass( value.down );
            }

            this._super( key, value );

            if ( key === "disabled" ) {
                this.widget().toggleClass( "ui-state-disabled", !!value );
                this.element.prop( "disabled", !!value );
                this.buttons.button( value ? "disable" : "enable" );
            }
        },

        _setOptions: spinner_modifier(function( options ) {
            this._super( options );
        }),

        _parse: function( val ) {
            if ( typeof val === "string" && val !== "" ) {
                val = window.Globalize && this.options.numberFormat ?
                    Globalize.parseFloat( val, 10, this.options.culture ) : +val;
            }
            return val === "" || isNaN( val ) ? null : val;
        },

        _format: function( value ) {
            if ( value === "" ) {
                return "";
            }
            return window.Globalize && this.options.numberFormat ?
                Globalize.format( value, this.options.numberFormat, this.options.culture ) :
                value;
        },

        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                // TODO: what should we do with values that can't be parsed?
                "aria-valuenow": this._parse( this.element.val() )
            });
        },

        isValid: function() {
            var value = this.value();

            // null is invalid
            if ( value === null ) {
                return false;
            }

            // if value gets adjusted, it's invalid
            return value === this._adjustValue( value );
        },

        // update the value without triggering change
        _value: function( value, allowAny ) {
            var parsed;
            if ( value !== "" ) {
                parsed = this._parse( value );
                if ( parsed !== null ) {
                    if ( !allowAny ) {
                        parsed = this._adjustValue( parsed );
                    }
                    value = this._format( parsed );
                }
            }
            this.element.val( value );
            this._refresh();
        },

        _destroy: function() {
            this.element
                .removeClass( "ui-spinner-input" )
                .prop( "disabled", false )
                .removeAttr( "autocomplete" )
                .removeAttr( "role" )
                .removeAttr( "aria-valuemin" )
                .removeAttr( "aria-valuemax" )
                .removeAttr( "aria-valuenow" );
            this.uiSpinner.replaceWith( this.element );
        },

        stepUp: spinner_modifier(function( steps ) {
            this._stepUp( steps );
        }),
        _stepUp: function( steps ) {
            if ( this._start() ) {
                this._spin( (steps || 1) * this.options.step );
                this._stop();
            }
        },

        stepDown: spinner_modifier(function( steps ) {
            this._stepDown( steps );
        }),
        _stepDown: function( steps ) {
            if ( this._start() ) {
                this._spin( (steps || 1) * -this.options.step );
                this._stop();
            }
        },

        pageUp: spinner_modifier(function( pages ) {
            this._stepUp( (pages || 1) * this.options.page );
        }),

        pageDown: spinner_modifier(function( pages ) {
            this._stepDown( (pages || 1) * this.options.page );
        }),

        value: function( newVal ) {
            if ( !arguments.length ) {
                return this._parse( this.element.val() );
            }
            spinner_modifier( this._value ).call( this, newVal );
        },

        widget: function() {
            return this.uiSpinner;
        }
    });


    /*!
     * jQuery UI Tabs 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/tabs/
     */


    var tabs = $.widget( "ui.tabs", {
        version: "1.11.4",
        delay: 300,
        options: {
            active: null,
            collapsible: false,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,

            // callbacks
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },

        _isLocal: (function() {
            var rhash = /#.*$/;

            return function( anchor ) {
                var anchorUrl, locationUrl;

                // support: IE7
                // IE7 doesn't normalize the href property when set via script (#9317)
                anchor = anchor.cloneNode( false );

                anchorUrl = anchor.href.replace( rhash, "" );
                locationUrl = location.href.replace( rhash, "" );

                // decoding may throw an error if the URL isn't UTF-8 (#9518)
                try {
                    anchorUrl = decodeURIComponent( anchorUrl );
                } catch ( error ) {}
                try {
                    locationUrl = decodeURIComponent( locationUrl );
                } catch ( error ) {}

                return anchor.hash.length > 1 && anchorUrl === locationUrl;
            };
        })(),

        _create: function() {
            var that = this,
                options = this.options;

            this.running = false;

            this.element
                .addClass( "ui-tabs ui-widget ui-widget-content ui-corner-all" )
                .toggleClass( "ui-tabs-collapsible", options.collapsible );

            this._processTabs();
            options.active = this._initialActive();

            // Take disabling tabs via class attribute from HTML
            // into account and update option properly.
            if ( $.isArray( options.disabled ) ) {
                options.disabled = $.unique( options.disabled.concat(
                    $.map( this.tabs.filter( ".ui-state-disabled" ), function( li ) {
                        return that.tabs.index( li );
                    })
                ) ).sort();
            }

            // check for length avoids error when initializing empty list
            if ( this.options.active !== false && this.anchors.length ) {
                this.active = this._findActive( options.active );
            } else {
                this.active = $();
            }

            this._refresh();

            if ( this.active.length ) {
                this.load( options.active );
            }
        },

        _initialActive: function() {
            var active = this.options.active,
                collapsible = this.options.collapsible,
                locationHash = location.hash.substring( 1 );

            if ( active === null ) {
                // check the fragment identifier in the URL
                if ( locationHash ) {
                    this.tabs.each(function( i, tab ) {
                        if ( $( tab ).attr( "aria-controls" ) === locationHash ) {
                            active = i;
                            return false;
                        }
                    });
                }

                // check for a tab marked active via a class
                if ( active === null ) {
                    active = this.tabs.index( this.tabs.filter( ".ui-tabs-active" ) );
                }

                // no active tab, set to false
                if ( active === null || active === -1 ) {
                    active = this.tabs.length ? 0 : false;
                }
            }

            // handle numbers: negative, out of range
            if ( active !== false ) {
                active = this.tabs.index( this.tabs.eq( active ) );
                if ( active === -1 ) {
                    active = collapsible ? false : 0;
                }
            }

            // don't allow collapsible: false and active: false
            if ( !collapsible && active === false && this.anchors.length ) {
                active = 0;
            }

            return active;
        },

        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: !this.active.length ? $() : this._getPanelForTab( this.active )
            };
        },

        _tabKeydown: function( event ) {
            var focusedTab = $( this.document[0].activeElement ).closest( "li" ),
                selectedIndex = this.tabs.index( focusedTab ),
                goingForward = true;

            if ( this._handlePageNav( event ) ) {
                return;
            }

            switch ( event.keyCode ) {
                case $.ui.keyCode.RIGHT:
                case $.ui.keyCode.DOWN:
                    selectedIndex++;
                    break;
                case $.ui.keyCode.UP:
                case $.ui.keyCode.LEFT:
                    goingForward = false;
                    selectedIndex--;
                    break;
                case $.ui.keyCode.END:
                    selectedIndex = this.anchors.length - 1;
                    break;
                case $.ui.keyCode.HOME:
                    selectedIndex = 0;
                    break;
                case $.ui.keyCode.SPACE:
                    // Activate only, no collapsing
                    event.preventDefault();
                    clearTimeout( this.activating );
                    this._activate( selectedIndex );
                    return;
                case $.ui.keyCode.ENTER:
                    // Toggle (cancel delayed activation, allow collapsing)
                    event.preventDefault();
                    clearTimeout( this.activating );
                    // Determine if we should collapse or activate
                    this._activate( selectedIndex === this.options.active ? false : selectedIndex );
                    return;
                default:
                    return;
            }

            // Focus the appropriate tab, based on which key was pressed
            event.preventDefault();
            clearTimeout( this.activating );
            selectedIndex = this._focusNextTab( selectedIndex, goingForward );

            // Navigating with control/command key will prevent automatic activation
            if ( !event.ctrlKey && !event.metaKey ) {

                // Update aria-selected immediately so that AT think the tab is already selected.
                // Otherwise AT may confuse the user by stating that they need to activate the tab,
                // but the tab will already be activated by the time the announcement finishes.
                focusedTab.attr( "aria-selected", "false" );
                this.tabs.eq( selectedIndex ).attr( "aria-selected", "true" );

                this.activating = this._delay(function() {
                    this.option( "active", selectedIndex );
                }, this.delay );
            }
        },

        _panelKeydown: function( event ) {
            if ( this._handlePageNav( event ) ) {
                return;
            }

            // Ctrl+up moves focus to the current tab
            if ( event.ctrlKey && event.keyCode === $.ui.keyCode.UP ) {
                event.preventDefault();
                this.active.focus();
            }
        },

        // Alt+page up/down moves focus to the previous/next tab (and activates)
        _handlePageNav: function( event ) {
            if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP ) {
                this._activate( this._focusNextTab( this.options.active - 1, false ) );
                return true;
            }
            if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN ) {
                this._activate( this._focusNextTab( this.options.active + 1, true ) );
                return true;
            }
        },

        _findNextTab: function( index, goingForward ) {
            var lastTabIndex = this.tabs.length - 1;

            function constrain() {
                if ( index > lastTabIndex ) {
                    index = 0;
                }
                if ( index < 0 ) {
                    index = lastTabIndex;
                }
                return index;
            }

            while ( $.inArray( constrain(), this.options.disabled ) !== -1 ) {
                index = goingForward ? index + 1 : index - 1;
            }

            return index;
        },

        _focusNextTab: function( index, goingForward ) {
            index = this._findNextTab( index, goingForward );
            this.tabs.eq( index ).focus();
            return index;
        },

        _setOption: function( key, value ) {
            if ( key === "active" ) {
                // _activate() will handle invalid values and update this.options
                this._activate( value );
                return;
            }

            if ( key === "disabled" ) {
                // don't use the widget factory's disabled handling
                this._setupDisabled( value );
                return;
            }

            this._super( key, value);

            if ( key === "collapsible" ) {
                this.element.toggleClass( "ui-tabs-collapsible", value );
                // Setting collapsible: false while collapsed; open first panel
                if ( !value && this.options.active === false ) {
                    this._activate( 0 );
                }
            }

            if ( key === "event" ) {
                this._setupEvents( value );
            }

            if ( key === "heightStyle" ) {
                this._setupHeightStyle( value );
            }
        },

        _sanitizeSelector: function( hash ) {
            return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
        },

        refresh: function() {
            var options = this.options,
                lis = this.tablist.children( ":has(a[href])" );

            // get disabled tabs from class attribute from HTML
            // this will get converted to a boolean if needed in _refresh()
            options.disabled = $.map( lis.filter( ".ui-state-disabled" ), function( tab ) {
                return lis.index( tab );
            });

            this._processTabs();

            // was collapsed or no tabs
            if ( options.active === false || !this.anchors.length ) {
                options.active = false;
                this.active = $();
                // was active, but active tab is gone
            } else if ( this.active.length && !$.contains( this.tablist[ 0 ], this.active[ 0 ] ) ) {
                // all remaining tabs are disabled
                if ( this.tabs.length === options.disabled.length ) {
                    options.active = false;
                    this.active = $();
                    // activate previous tab
                } else {
                    this._activate( this._findNextTab( Math.max( 0, options.active - 1 ), false ) );
                }
                // was active, active tab still exists
            } else {
                // make sure active index is correct
                options.active = this.tabs.index( this.active );
            }

            this._refresh();
        },

        _refresh: function() {
            this._setupDisabled( this.options.disabled );
            this._setupEvents( this.options.event );
            this._setupHeightStyle( this.options.heightStyle );

            this.tabs.not( this.active ).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            });
            this.panels.not( this._getPanelForTab( this.active ) )
                .hide()
                .attr({
                    "aria-hidden": "true"
                });

            // Make sure one tab is in the tab order
            if ( !this.active.length ) {
                this.tabs.eq( 0 ).attr( "tabIndex", 0 );
            } else {
                this.active
                    .addClass( "ui-tabs-active ui-state-active" )
                    .attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    });
                this._getPanelForTab( this.active )
                    .show()
                    .attr({
                        "aria-hidden": "false"
                    });
            }
        },

        _processTabs: function() {
            var that = this,
                prevTabs = this.tabs,
                prevAnchors = this.anchors,
                prevPanels = this.panels;

            this.tablist = this._getList()
                .addClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
                .attr( "role", "tablist" )

                // Prevent users from focusing disabled tabs via click
                .delegate( "> li", "mousedown" + this.eventNamespace, function( event ) {
                    if ( $( this ).is( ".ui-state-disabled" ) ) {
                        event.preventDefault();
                    }
                })

                // support: IE <9
                // Preventing the default action in mousedown doesn't prevent IE
                // from focusing the element, so if the anchor gets focused, blur.
                // We don't have to worry about focusing the previously focused
                // element since clicking on a non-focusable element should focus
                // the body anyway.
                .delegate( ".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                    if ( $( this ).closest( "li" ).is( ".ui-state-disabled" ) ) {
                        this.blur();
                    }
                });

            this.tabs = this.tablist.find( "> li:has(a[href])" )
                .addClass( "ui-state-default ui-corner-top" )
                .attr({
                    role: "tab",
                    tabIndex: -1
                });

            this.anchors = this.tabs.map(function() {
                return $( "a", this )[ 0 ];
            })
                .addClass( "ui-tabs-anchor" )
                .attr({
                    role: "presentation",
                    tabIndex: -1
                });

            this.panels = $();

            this.anchors.each(function( i, anchor ) {
                var selector, panel, panelId,
                    anchorId = $( anchor ).uniqueId().attr( "id" ),
                    tab = $( anchor ).closest( "li" ),
                    originalAriaControls = tab.attr( "aria-controls" );

                // inline tab
                if ( that._isLocal( anchor ) ) {
                    selector = anchor.hash;
                    panelId = selector.substring( 1 );
                    panel = that.element.find( that._sanitizeSelector( selector ) );
                    // remote tab
                } else {
                    // If the tab doesn't already have aria-controls,
                    // generate an id by using a throw-away element
                    panelId = tab.attr( "aria-controls" ) || $( {} ).uniqueId()[ 0 ].id;
                    selector = "#" + panelId;
                    panel = that.element.find( selector );
                    if ( !panel.length ) {
                        panel = that._createPanel( panelId );
                        panel.insertAfter( that.panels[ i - 1 ] || that.tablist );
                    }
                    panel.attr( "aria-live", "polite" );
                }

                if ( panel.length) {
                    that.panels = that.panels.add( panel );
                }
                if ( originalAriaControls ) {
                    tab.data( "ui-tabs-aria-controls", originalAriaControls );
                }
                tab.attr({
                    "aria-controls": panelId,
                    "aria-labelledby": anchorId
                });
                panel.attr( "aria-labelledby", anchorId );
            });

            this.panels
                .addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
                .attr( "role", "tabpanel" );

            // Avoid memory leaks (#10056)
            if ( prevTabs ) {
                this._off( prevTabs.not( this.tabs ) );
                this._off( prevAnchors.not( this.anchors ) );
                this._off( prevPanels.not( this.panels ) );
            }
        },

        // allow overriding how to find the list for rare usage scenarios (#7715)
        _getList: function() {
            return this.tablist || this.element.find( "ol,ul" ).eq( 0 );
        },

        _createPanel: function( id ) {
            return $( "<div>" )
                .attr( "id", id )
                .addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
                .data( "ui-tabs-destroy", true );
        },

        _setupDisabled: function( disabled ) {
            if ( $.isArray( disabled ) ) {
                if ( !disabled.length ) {
                    disabled = false;
                } else if ( disabled.length === this.anchors.length ) {
                    disabled = true;
                }
            }

            // disable tabs
            for ( var i = 0, li; ( li = this.tabs[ i ] ); i++ ) {
                if ( disabled === true || $.inArray( i, disabled ) !== -1 ) {
                    $( li )
                        .addClass( "ui-state-disabled" )
                        .attr( "aria-disabled", "true" );
                } else {
                    $( li )
                        .removeClass( "ui-state-disabled" )
                        .removeAttr( "aria-disabled" );
                }
            }

            this.options.disabled = disabled;
        },

        _setupEvents: function( event ) {
            var events = {};
            if ( event ) {
                $.each( event.split(" "), function( index, eventName ) {
                    events[ eventName ] = "_eventHandler";
                });
            }

            this._off( this.anchors.add( this.tabs ).add( this.panels ) );
            // Always prevent the default action, even when disabled
            this._on( true, this.anchors, {
                click: function( event ) {
                    event.preventDefault();
                }
            });
            this._on( this.anchors, events );
            this._on( this.tabs, { keydown: "_tabKeydown" } );
            this._on( this.panels, { keydown: "_panelKeydown" } );

            this._focusable( this.tabs );
            this._hoverable( this.tabs );
        },

        _setupHeightStyle: function( heightStyle ) {
            var maxHeight,
                parent = this.element.parent();

            if ( heightStyle === "fill" ) {
                maxHeight = parent.height();
                maxHeight -= this.element.outerHeight() - this.element.height();

                this.element.siblings( ":visible" ).each(function() {
                    var elem = $( this ),
                        position = elem.css( "position" );

                    if ( position === "absolute" || position === "fixed" ) {
                        return;
                    }
                    maxHeight -= elem.outerHeight( true );
                });

                this.element.children().not( this.panels ).each(function() {
                    maxHeight -= $( this ).outerHeight( true );
                });

                this.panels.each(function() {
                    $( this ).height( Math.max( 0, maxHeight -
                        $( this ).innerHeight() + $( this ).height() ) );
                })
                    .css( "overflow", "auto" );
            } else if ( heightStyle === "auto" ) {
                maxHeight = 0;
                this.panels.each(function() {
                    maxHeight = Math.max( maxHeight, $( this ).height( "" ).height() );
                }).height( maxHeight );
            }
        },

        _eventHandler: function( event ) {
            var options = this.options,
                active = this.active,
                anchor = $( event.currentTarget ),
                tab = anchor.closest( "li" ),
                clickedIsActive = tab[ 0 ] === active[ 0 ],
                collapsing = clickedIsActive && options.collapsible,
                toShow = collapsing ? $() : this._getPanelForTab( tab ),
                toHide = !active.length ? $() : this._getPanelForTab( active ),
                eventData = {
                    oldTab: active,
                    oldPanel: toHide,
                    newTab: collapsing ? $() : tab,
                    newPanel: toShow
                };

            event.preventDefault();

            if ( tab.hasClass( "ui-state-disabled" ) ||
                    // tab is already loading
                tab.hasClass( "ui-tabs-loading" ) ||
                    // can't switch durning an animation
                this.running ||
                    // click on active header, but not collapsible
                ( clickedIsActive && !options.collapsible ) ||
                    // allow canceling activation
                ( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
                return;
            }

            options.active = collapsing ? false : this.tabs.index( tab );

            this.active = clickedIsActive ? $() : tab;
            if ( this.xhr ) {
                this.xhr.abort();
            }

            if ( !toHide.length && !toShow.length ) {
                $.error( "jQuery UI Tabs: Mismatching fragment identifier." );
            }

            if ( toShow.length ) {
                this.load( this.tabs.index( tab ), event );
            }
            this._toggle( event, eventData );
        },

        // handles show/hide for selecting tabs
        _toggle: function( event, eventData ) {
            var that = this,
                toShow = eventData.newPanel,
                toHide = eventData.oldPanel;

            this.running = true;

            function complete() {
                that.running = false;
                that._trigger( "activate", event, eventData );
            }

            function show() {
                eventData.newTab.closest( "li" ).addClass( "ui-tabs-active ui-state-active" );

                if ( toShow.length && that.options.show ) {
                    that._show( toShow, that.options.show, complete );
                } else {
                    toShow.show();
                    complete();
                }
            }

            // start out by hiding, then showing, then completing
            if ( toHide.length && this.options.hide ) {
                this._hide( toHide, this.options.hide, function() {
                    eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
                    show();
                });
            } else {
                eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
                toHide.hide();
                show();
            }

            toHide.attr( "aria-hidden", "true" );
            eventData.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            // If we're switching tabs, remove the old tab from the tab order.
            // If we're opening from collapsed state, remove the previous tab from the tab order.
            // If we're collapsing, then keep the collapsing tab in the tab order.
            if ( toShow.length && toHide.length ) {
                eventData.oldTab.attr( "tabIndex", -1 );
            } else if ( toShow.length ) {
                this.tabs.filter(function() {
                    return $( this ).attr( "tabIndex" ) === 0;
                })
                    .attr( "tabIndex", -1 );
            }

            toShow.attr( "aria-hidden", "false" );
            eventData.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },

        _activate: function( index ) {
            var anchor,
                active = this._findActive( index );

            // trying to activate the already active panel
            if ( active[ 0 ] === this.active[ 0 ] ) {
                return;
            }

            // trying to collapse, simulate a click on the current active header
            if ( !active.length ) {
                active = this.active;
            }

            anchor = active.find( ".ui-tabs-anchor" )[ 0 ];
            this._eventHandler({
                target: anchor,
                currentTarget: anchor,
                preventDefault: $.noop
            });
        },

        _findActive: function( index ) {
            return index === false ? $() : this.tabs.eq( index );
        },

        _getIndex: function( index ) {
            // meta-function to give users option to provide a href string instead of a numerical index.
            if ( typeof index === "string" ) {
                index = this.anchors.index( this.anchors.filter( "[href$='" + index + "']" ) );
            }

            return index;
        },

        _destroy: function() {
            if ( this.xhr ) {
                this.xhr.abort();
            }

            this.element.removeClass( "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible" );

            this.tablist
                .removeClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
                .removeAttr( "role" );

            this.anchors
                .removeClass( "ui-tabs-anchor" )
                .removeAttr( "role" )
                .removeAttr( "tabIndex" )
                .removeUniqueId();

            this.tablist.unbind( this.eventNamespace );

            this.tabs.add( this.panels ).each(function() {
                if ( $.data( this, "ui-tabs-destroy" ) ) {
                    $( this ).remove();
                } else {
                    $( this )
                        .removeClass( "ui-state-default ui-state-active ui-state-disabled " +
                        "ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel" )
                        .removeAttr( "tabIndex" )
                        .removeAttr( "aria-live" )
                        .removeAttr( "aria-busy" )
                        .removeAttr( "aria-selected" )
                        .removeAttr( "aria-labelledby" )
                        .removeAttr( "aria-hidden" )
                        .removeAttr( "aria-expanded" )
                        .removeAttr( "role" );
                }
            });

            this.tabs.each(function() {
                var li = $( this ),
                    prev = li.data( "ui-tabs-aria-controls" );
                if ( prev ) {
                    li
                        .attr( "aria-controls", prev )
                        .removeData( "ui-tabs-aria-controls" );
                } else {
                    li.removeAttr( "aria-controls" );
                }
            });

            this.panels.show();

            if ( this.options.heightStyle !== "content" ) {
                this.panels.css( "height", "" );
            }
        },

        enable: function( index ) {
            var disabled = this.options.disabled;
            if ( disabled === false ) {
                return;
            }

            if ( index === undefined ) {
                disabled = false;
            } else {
                index = this._getIndex( index );
                if ( $.isArray( disabled ) ) {
                    disabled = $.map( disabled, function( num ) {
                        return num !== index ? num : null;
                    });
                } else {
                    disabled = $.map( this.tabs, function( li, num ) {
                        return num !== index ? num : null;
                    });
                }
            }
            this._setupDisabled( disabled );
        },

        disable: function( index ) {
            var disabled = this.options.disabled;
            if ( disabled === true ) {
                return;
            }

            if ( index === undefined ) {
                disabled = true;
            } else {
                index = this._getIndex( index );
                if ( $.inArray( index, disabled ) !== -1 ) {
                    return;
                }
                if ( $.isArray( disabled ) ) {
                    disabled = $.merge( [ index ], disabled ).sort();
                } else {
                    disabled = [ index ];
                }
            }
            this._setupDisabled( disabled );
        },

        load: function( index, event ) {
            index = this._getIndex( index );
            var that = this,
                tab = this.tabs.eq( index ),
                anchor = tab.find( ".ui-tabs-anchor" ),
                panel = this._getPanelForTab( tab ),
                eventData = {
                    tab: tab,
                    panel: panel
                },
                complete = function( jqXHR, status ) {
                    if ( status === "abort" ) {
                        that.panels.stop( false, true );
                    }

                    tab.removeClass( "ui-tabs-loading" );
                    panel.removeAttr( "aria-busy" );

                    if ( jqXHR === that.xhr ) {
                        delete that.xhr;
                    }
                };

            // not remote
            if ( this._isLocal( anchor[ 0 ] ) ) {
                return;
            }

            this.xhr = $.ajax( this._ajaxSettings( anchor, event, eventData ) );

            // support: jQuery <1.8
            // jQuery <1.8 returns false if the request is canceled in beforeSend,
            // but as of 1.8, $.ajax() always returns a jqXHR object.
            if ( this.xhr && this.xhr.statusText !== "canceled" ) {
                tab.addClass( "ui-tabs-loading" );
                panel.attr( "aria-busy", "true" );

                this.xhr
                    .done(function( response, status, jqXHR ) {
                        // support: jQuery <1.8
                        // http://bugs.jquery.com/ticket/11778
                        setTimeout(function() {
                            panel.html( response );
                            that._trigger( "load", event, eventData );

                            complete( jqXHR, status );
                        }, 1 );
                    })
                    .fail(function( jqXHR, status ) {
                        // support: jQuery <1.8
                        // http://bugs.jquery.com/ticket/11778
                        setTimeout(function() {
                            complete( jqXHR, status );
                        }, 1 );
                    });
            }
        },

        _ajaxSettings: function( anchor, event, eventData ) {
            var that = this;
            return {
                url: anchor.attr( "href" ),
                beforeSend: function( jqXHR, settings ) {
                    return that._trigger( "beforeLoad", event,
                        $.extend( { jqXHR: jqXHR, ajaxSettings: settings }, eventData ) );
                }
            };
        },

        _getPanelForTab: function( tab ) {
            var id = $( tab ).attr( "aria-controls" );
            return this.element.find( this._sanitizeSelector( "#" + id ) );
        }
    });


    /*!
     * jQuery UI Tooltip 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/tooltip/
     */


    var tooltip = $.widget( "ui.tooltip", {
        version: "1.11.4",
        options: {
            content: function() {
                // support: IE<9, Opera in jQuery <1.7
                // .text() can't accept undefined, so coerce to a string
                var title = $( this ).attr( "title" ) || "";
                // Escape title, since we're going from an attribute to raw HTML
                return $( "<a>" ).text( title ).html();
            },
            hide: true,
            // Disabled elements have inconsistent behavior across browsers (#8661)
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: true,
            tooltipClass: null,
            track: false,

            // callbacks
            close: null,
            open: null
        },

        _addDescribedBy: function( elem, id ) {
            var describedby = (elem.attr( "aria-describedby" ) || "").split( /\s+/ );
            describedby.push( id );
            elem
                .data( "ui-tooltip-id", id )
                .attr( "aria-describedby", $.trim( describedby.join( " " ) ) );
        },

        _removeDescribedBy: function( elem ) {
            var id = elem.data( "ui-tooltip-id" ),
                describedby = (elem.attr( "aria-describedby" ) || "").split( /\s+/ ),
                index = $.inArray( id, describedby );

            if ( index !== -1 ) {
                describedby.splice( index, 1 );
            }

            elem.removeData( "ui-tooltip-id" );
            describedby = $.trim( describedby.join( " " ) );
            if ( describedby ) {
                elem.attr( "aria-describedby", describedby );
            } else {
                elem.removeAttr( "aria-describedby" );
            }
        },

        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });

            // IDs of generated tooltips, needed for destroy
            this.tooltips = {};

            // IDs of parent tooltips where we removed the title attribute
            this.parents = {};

            if ( this.options.disabled ) {
                this._disable();
            }

            // Append the aria-live region so tooltips announce correctly
            this.liveRegion = $( "<div>" )
                .attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                })
                .addClass( "ui-helper-hidden-accessible" )
                .appendTo( this.document[ 0 ].body );
        },

        _setOption: function( key, value ) {
            var that = this;

            if ( key === "disabled" ) {
                this[ value ? "_disable" : "_enable" ]();
                this.options[ key ] = value;
                // disable element style changes
                return;
            }

            this._super( key, value );

            if ( key === "content" ) {
                $.each( this.tooltips, function( id, tooltipData ) {
                    that._updateContent( tooltipData.element );
                });
            }
        },

        _disable: function() {
            var that = this;

            // close open tooltips
            $.each( this.tooltips, function( id, tooltipData ) {
                var event = $.Event( "blur" );
                event.target = event.currentTarget = tooltipData.element[ 0 ];
                that.close( event, true );
            });

            // remove title attributes to prevent native tooltips
            this.element.find( this.options.items ).addBack().each(function() {
                var element = $( this );
                if ( element.is( "[title]" ) ) {
                    element
                        .data( "ui-tooltip-title", element.attr( "title" ) )
                        .removeAttr( "title" );
                }
            });
        },

        _enable: function() {
            // restore title attributes
            this.element.find( this.options.items ).addBack().each(function() {
                var element = $( this );
                if ( element.data( "ui-tooltip-title" ) ) {
                    element.attr( "title", element.data( "ui-tooltip-title" ) );
                }
            });
        },

        open: function( event ) {
            var that = this,
                target = $( event ? event.target : this.element )
                    // we need closest here due to mouseover bubbling,
                    // but always pointing at the same event target
                    .closest( this.options.items );

            // No element to show a tooltip for or the tooltip is already open
            if ( !target.length || target.data( "ui-tooltip-id" ) ) {
                return;
            }

            if ( target.attr( "title" ) ) {
                target.data( "ui-tooltip-title", target.attr( "title" ) );
            }

            target.data( "ui-tooltip-open", true );

            // kill parent tooltips, custom or native, for hover
            if ( event && event.type === "mouseover" ) {
                target.parents().each(function() {
                    var parent = $( this ),
                        blurEvent;
                    if ( parent.data( "ui-tooltip-open" ) ) {
                        blurEvent = $.Event( "blur" );
                        blurEvent.target = blurEvent.currentTarget = this;
                        that.close( blurEvent, true );
                    }
                    if ( parent.attr( "title" ) ) {
                        parent.uniqueId();
                        that.parents[ this.id ] = {
                            element: this,
                            title: parent.attr( "title" )
                        };
                        parent.attr( "title", "" );
                    }
                });
            }

            this._registerCloseHandlers( event, target );
            this._updateContent( target, event );
        },

        _updateContent: function( target, event ) {
            var content,
                contentOption = this.options.content,
                that = this,
                eventType = event ? event.type : null;

            if ( typeof contentOption === "string" ) {
                return this._open( event, target, contentOption );
            }

            content = contentOption.call( target[0], function( response ) {

                // IE may instantly serve a cached response for ajax requests
                // delay this call to _open so the other call to _open runs first
                that._delay(function() {

                    // Ignore async response if tooltip was closed already
                    if ( !target.data( "ui-tooltip-open" ) ) {
                        return;
                    }

                    // jQuery creates a special event for focusin when it doesn't
                    // exist natively. To improve performance, the native event
                    // object is reused and the type is changed. Therefore, we can't
                    // rely on the type being correct after the event finished
                    // bubbling, so we set it back to the previous value. (#8740)
                    if ( event ) {
                        event.type = eventType;
                    }
                    this._open( event, target, response );
                });
            });
            if ( content ) {
                this._open( event, target, content );
            }
        },

        _open: function( event, target, content ) {
            var tooltipData, tooltip, delayedShow, a11yContent,
                positionOption = $.extend( {}, this.options.position );

            if ( !content ) {
                return;
            }

            // Content can be updated multiple times. If the tooltip already
            // exists, then just update the content and bail.
            tooltipData = this._find( target );
            if ( tooltipData ) {
                tooltipData.tooltip.find( ".ui-tooltip-content" ).html( content );
                return;
            }

            // if we have a title, clear it to prevent the native tooltip
            // we have to check first to avoid defining a title if none exists
            // (we don't want to cause an element to start matching [title])
            //
            // We use removeAttr only for key events, to allow IE to export the correct
            // accessible attributes. For mouse events, set to empty string to avoid
            // native tooltip showing up (happens only when removing inside mouseover).
            if ( target.is( "[title]" ) ) {
                if ( event && event.type === "mouseover" ) {
                    target.attr( "title", "" );
                } else {
                    target.removeAttr( "title" );
                }
            }

            tooltipData = this._tooltip( target );
            tooltip = tooltipData.tooltip;
            this._addDescribedBy( target, tooltip.attr( "id" ) );
            tooltip.find( ".ui-tooltip-content" ).html( content );

            // Support: Voiceover on OS X, JAWS on IE <= 9
            // JAWS announces deletions even when aria-relevant="additions"
            // Voiceover will sometimes re-read the entire log region's contents from the beginning
            this.liveRegion.children().hide();
            if ( content.clone ) {
                a11yContent = content.clone();
                a11yContent.removeAttr( "id" ).find( "[id]" ).removeAttr( "id" );
            } else {
                a11yContent = content;
            }
            $( "<div>" ).html( a11yContent ).appendTo( this.liveRegion );

            function position( event ) {
                positionOption.of = event;
                if ( tooltip.is( ":hidden" ) ) {
                    return;
                }
                tooltip.position( positionOption );
            }
            if ( this.options.track && event && /^mouse/.test( event.type ) ) {
                this._on( this.document, {
                    mousemove: position
                });
                // trigger once to override element-relative positioning
                position( event );
            } else {
                tooltip.position( $.extend({
                    of: target
                }, this.options.position ) );
            }

            tooltip.hide();

            this._show( tooltip, this.options.show );
            // Handle tracking tooltips that are shown with a delay (#8644). As soon
            // as the tooltip is visible, position the tooltip using the most recent
            // event.
            if ( this.options.show && this.options.show.delay ) {
                delayedShow = this.delayedShow = setInterval(function() {
                    if ( tooltip.is( ":visible" ) ) {
                        position( positionOption.of );
                        clearInterval( delayedShow );
                    }
                }, $.fx.interval );
            }

            this._trigger( "open", event, { tooltip: tooltip } );
        },

        _registerCloseHandlers: function( event, target ) {
            var events = {
                keyup: function( event ) {
                    if ( event.keyCode === $.ui.keyCode.ESCAPE ) {
                        var fakeEvent = $.Event(event);
                        fakeEvent.currentTarget = target[0];
                        this.close( fakeEvent, true );
                    }
                }
            };

            // Only bind remove handler for delegated targets. Non-delegated
            // tooltips will handle this in destroy.
            if ( target[ 0 ] !== this.element[ 0 ] ) {
                events.remove = function() {
                    this._removeTooltip( this._find( target ).tooltip );
                };
            }

            if ( !event || event.type === "mouseover" ) {
                events.mouseleave = "close";
            }
            if ( !event || event.type === "focusin" ) {
                events.focusout = "close";
            }
            this._on( true, target, events );
        },

        close: function( event ) {
            var tooltip,
                that = this,
                target = $( event ? event.currentTarget : this.element ),
                tooltipData = this._find( target );

            // The tooltip may already be closed
            if ( !tooltipData ) {

                // We set ui-tooltip-open immediately upon open (in open()), but only set the
                // additional data once there's actually content to show (in _open()). So even if the
                // tooltip doesn't have full data, we always remove ui-tooltip-open in case we're in
                // the period between open() and _open().
                target.removeData( "ui-tooltip-open" );
                return;
            }

            tooltip = tooltipData.tooltip;

            // disabling closes the tooltip, so we need to track when we're closing
            // to avoid an infinite loop in case the tooltip becomes disabled on close
            if ( tooltipData.closing ) {
                return;
            }

            // Clear the interval for delayed tracking tooltips
            clearInterval( this.delayedShow );

            // only set title if we had one before (see comment in _open())
            // If the title attribute has changed since open(), don't restore
            if ( target.data( "ui-tooltip-title" ) && !target.attr( "title" ) ) {
                target.attr( "title", target.data( "ui-tooltip-title" ) );
            }

            this._removeDescribedBy( target );

            tooltipData.hiding = true;
            tooltip.stop( true );
            this._hide( tooltip, this.options.hide, function() {
                that._removeTooltip( $( this ) );
            });

            target.removeData( "ui-tooltip-open" );
            this._off( target, "mouseleave focusout keyup" );

            // Remove 'remove' binding only on delegated targets
            if ( target[ 0 ] !== this.element[ 0 ] ) {
                this._off( target, "remove" );
            }
            this._off( this.document, "mousemove" );

            if ( event && event.type === "mouseleave" ) {
                $.each( this.parents, function( id, parent ) {
                    $( parent.element ).attr( "title", parent.title );
                    delete that.parents[ id ];
                });
            }

            tooltipData.closing = true;
            this._trigger( "close", event, { tooltip: tooltip } );
            if ( !tooltipData.hiding ) {
                tooltipData.closing = false;
            }
        },

        _tooltip: function( element ) {
            var tooltip = $( "<div>" )
                    .attr( "role", "tooltip" )
                    .addClass( "ui-tooltip ui-widget ui-corner-all ui-widget-content " +
                    ( this.options.tooltipClass || "" ) ),
                id = tooltip.uniqueId().attr( "id" );

            $( "<div>" )
                .addClass( "ui-tooltip-content" )
                .appendTo( tooltip );

            tooltip.appendTo( this.document[0].body );

            return this.tooltips[ id ] = {
                element: element,
                tooltip: tooltip
            };
        },

        _find: function( target ) {
            var id = target.data( "ui-tooltip-id" );
            return id ? this.tooltips[ id ] : null;
        },

        _removeTooltip: function( tooltip ) {
            tooltip.remove();
            delete this.tooltips[ tooltip.attr( "id" ) ];
        },

        _destroy: function() {
            var that = this;

            // close open tooltips
            $.each( this.tooltips, function( id, tooltipData ) {
                // Delegate to close method to handle common cleanup
                var event = $.Event( "blur" ),
                    element = tooltipData.element;
                event.target = event.currentTarget = element[ 0 ];
                that.close( event, true );

                // Remove immediately; destroying an open tooltip doesn't use the
                // hide animation
                $( "#" + id ).remove();

                // Restore the title
                if ( element.data( "ui-tooltip-title" ) ) {
                    // If the title attribute has changed since open(), don't restore
                    if ( !element.attr( "title" ) ) {
                        element.attr( "title", element.data( "ui-tooltip-title" ) );
                    }
                    element.removeData( "ui-tooltip-title" );
                }
            });
            this.liveRegion.remove();
        }
    });



}));/**
 * Created by Xcar on 2016/3/9.
 */


//  json2.js
//  2016-05-01
//  Public Domain.
//  NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
//  See http://www.JSON.org/js.html
//  This code should be minified before deployment.
//  See http://javascript.crockford.com/jsmin.html

//  USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
//  NOT CONTROL.

//  This file creates a global JSON object containing two methods: stringify
//  and parse. This file is provides the ES5 JSON capability to ES3 systems.
//  If a project might run on IE8 or earlier, then this file should be included.
//  This file does nothing on ES5 systems.

//      JSON.stringify(value, replacer, space)
//          value       any JavaScript value, usually an object or array.
//          replacer    an optional parameter that determines how object
//                      values are stringified for objects. It can be a
//                      function or an array of strings.
//          space       an optional parameter that specifies the indentation
//                      of nested structures. If it is omitted, the text will
//                      be packed without extra whitespace. If it is a number,
//                      it will specify the number of spaces to indent at each
//                      level. If it is a string (such as "\t" or "&nbsp;"),
//                      it contains the characters used to indent at each level.
//          This method produces a JSON text from a JavaScript value.
//          When an object value is found, if the object contains a toJSON
//          method, its toJSON method will be called and the result will be
//          stringified. A toJSON method does not serialize: it returns the
//          value represented by the name/value pair that should be serialized,
//          or undefined if nothing should be serialized. The toJSON method
//          will be passed the key associated with the value, and this will be
//          bound to the value.

//          For example, this would serialize Dates as ISO strings.

//              Date.prototype.toJSON = function (key) {
//                  function f(n) {
//                      // Format integers to have at least two digits.
//                      return (n < 10)
//                          ? "0" + n
//                          : n;
//                  }
//                  return this.getUTCFullYear()   + "-" +
//                       f(this.getUTCMonth() + 1) + "-" +
//                       f(this.getUTCDate())      + "T" +
//                       f(this.getUTCHours())     + ":" +
//                       f(this.getUTCMinutes())   + ":" +
//                       f(this.getUTCSeconds())   + "Z";
//              };

//          You can provide an optional replacer method. It will be passed the
//          key and value of each member, with this bound to the containing
//          object. The value that is returned from your method will be
//          serialized. If your method returns undefined, then the member will
//          be excluded from the serialization.

//          If the replacer parameter is an array of strings, then it will be
//          used to select the members to be serialized. It filters the results
//          such that only members with keys listed in the replacer array are
//          stringified.

//          Values that do not have JSON representations, such as undefined or
//          functions, will not be serialized. Such values in objects will be
//          dropped; in arrays they will be replaced with null. You can use
//          a replacer function to replace those with JSON values.

//          JSON.stringify(undefined) returns undefined.

//          The optional space parameter produces a stringification of the
//          value that is filled with line breaks and indentation to make it
//          easier to read.

//          If the space parameter is a non-empty string, then that string will
//          be used for indentation. If the space parameter is a number, then
//          the indentation will be that many spaces.

//          Example:

//          text = JSON.stringify(["e", {pluribus: "unum"}]);
//          // text is '["e",{"pluribus":"unum"}]'

//          text = JSON.stringify(["e", {pluribus: "unum"}], null, "\t");
//          // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

//          text = JSON.stringify([new Date()], function (key, value) {
//              return this[key] instanceof Date
//                  ? "Date(" + this[key] + ")"
//                  : value;
//          });
//          // text is '["Date(---current time---)"]'

//      JSON.parse(text, reviver)
//          This method parses a JSON text to produce an object or array.
//          It can throw a SyntaxError exception.

//          The optional reviver parameter is a function that can filter and
//          transform the results. It receives each of the keys and values,
//          and its return value is used instead of the original value.
//          If it returns what it received, then the structure is not modified.
//          If it returns undefined then the member is deleted.

//          Example:

//          // Parse the text. Values that look like ISO date strings will
//          // be converted to Date objects.

//          myData = JSON.parse(text, function (key, value) {
//              var a;
//              if (typeof value === "string") {
//                  a =
//   /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
//                  if (a) {
//                      return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
//                          +a[5], +a[6]));
//                  }
//              }
//              return value;
//          });

//          myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
//              var d;
//              if (typeof value === "string" &&
//                      value.slice(0, 5) === "Date(" &&
//                      value.slice(-1) === ")") {
//                  d = new Date(value.slice(5, -1));
//                  if (d) {
//                      return d;
//                  }
//              }
//              return value;
//          });

//  This is a reference implementation. You are free to copy, modify, or
//  redistribute.

/*jslint
 eval, for, this
 */

/*property
 JSON, apply, call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
 getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
 lastIndex, length, parse, prototype, push, replace, slice, stringify,
 test, toJSON, toString, valueOf
 */


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== "object") {
    JSON = {};
}

(function () {
    "use strict";

    var rx_one = /^[\],:{}\s]*$/;
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    var rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10
            ? "0" + n
            : n;
    }

    function this_value() {
        return this.valueOf();
    }

    if (typeof Date.prototype.toJSON !== "function") {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear() + "-" +
            f(this.getUTCMonth() + 1) + "-" +
            f(this.getUTCDate()) + "T" +
            f(this.getUTCHours()) + ":" +
            f(this.getUTCMinutes()) + ":" +
            f(this.getUTCSeconds()) + "Z"
                : null;
        };

        Boolean.prototype.toJSON = this_value;
        Number.prototype.toJSON = this_value;
        String.prototype.toJSON = this_value;
    }

    var gap;
    var indent;
    var meta;
    var rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        rx_escapable.lastIndex = 0;
        return rx_escapable.test(string)
            ? "\"" + string.replace(rx_escapable, function (a) {
            var c = meta[a];
            return typeof c === "string"
                ? c
                : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }) + "\""
            : "\"" + string + "\"";
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i;          // The loop counter.
        var k;          // The member key.
        var v;          // The member value.
        var length;
        var mind = gap;
        var partial;
        var value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === "object" &&
            typeof value.toJSON === "function") {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === "function") {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
            case "string":
                return quote(value);

            case "number":

// JSON numbers must be finite. Encode non-finite numbers as null.

                return isFinite(value)
                    ? String(value)
                    : "null";

            case "boolean":
            case "null":

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce "null". The case is included here in
// the remote chance that this gets fixed someday.

                return String(value);

// If the type is "object", we might be dealing with an object or an array or
// null.

            case "object":

// Due to a specification blunder in ECMAScript, typeof null is "object",
// so watch out for that case.

                if (!value) {
                    return "null";
                }

// Make an array to hold the partial results of stringifying this object value.

                gap += indent;
                partial = [];

// Is the value an array?

                if (Object.prototype.toString.apply(value) === "[object Array]") {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null";
                    }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                    v = partial.length === 0
                        ? "[]"
                        : gap
                        ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]"
                        : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v;
                }

// If the replacer is an array, use it to select the members to be stringified.

                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (
                                        gap
                                            ? ": "
                                            : ":"
                                    ) + v);
                            }
                        }
                    }
                } else {

// Otherwise, iterate through all of the keys in the object.

                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (
                                        gap
                                            ? ": "
                                            : ":"
                                    ) + v);
                            }
                        }
                    }
                }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

                v = partial.length === 0
                    ? "{}"
                    : gap
                    ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}"
                    : "{" + partial.join(",") + "}";
                gap = mind;
                return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== "function") {
        meta = {    // table of character substitutions
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            "\"": "\\\"",
            "\\": "\\\\"
        };
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = "";
            indent = "";

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " ";
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === "string") {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== "function" &&
                (typeof replacer !== "object" ||
                typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify");
            }

// Make a fake root object containing our value under the key of "".
// Return the result of stringifying the value.

            return str("", {"": value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== "function") {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k;
                var v;
                var value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            rx_dangerous.lastIndex = 0;
            if (rx_dangerous.test(text)) {
                text = text.replace(rx_dangerous, function (a) {
                    return "\\u" +
                        ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with "()" and "new"
// because they can cause invocation, and "=" because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with "@" (a non-JSON character). Second, we
// replace all simple value tokens with "]" characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or "]" or
// "," or ":" or "{" or "}". If that is so, then the text is safe for eval.

            if (
                rx_one.test(
                    text
                        .replace(rx_two, "@")
                        .replace(rx_three, "]")
                        .replace(rx_four, "")
                )
            ) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The "{" operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval("(" + text + ")");

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return (typeof reviver === "function")
                    ? walk({"": j}, "")
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError("JSON.parse");
        };
    }
}());



