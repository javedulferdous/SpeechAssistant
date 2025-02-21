! function (e, t) {
    //"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : 
	e.AlgoliaAnalytics = t()
}(this, function () {
    "use strict";
    var e, t, n, r, i = function () {
            var e = this;
            if (this.storeClick = function (t, n) {
                    var r = JSON.parse(localStorage.getItem("insights-store")) || {};
                    r[t] = {
                        queryID: n,
                        eventTimestamp: (new Date).getTime()
                    }, localStorage.setItem(e._storageKey, JSON.stringify(r))
                }, this.getConversionObjectID = function (t) {
                    var n = e.getStorageData()[t];
                    return n && n.queryID ? n.queryID : void 0
                }, this.cleanOldStorage = function (e, t) {
                    var n = Object.keys(t);
                    return n.length > 0 ? n.reduce(function (n, r) {
                        var i = t[r];
                        return Math.abs(e - i.eventTimestamp) / 36e5 <= 6 && (n[r] = i), n
                    }, {}) : {}
                }, this.getStorageData = function () {
                    return JSON.parse(localStorage.getItem("insights-store")) || {}
                }, ! function (e) {
                    try {
                        var t = window[e],
                            n = "__storage_test__";
                        return t.setItem(n, n), t.removeItem(n), !0
                    } catch (e) {
                        return e instanceof DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && 0 !== t.length
                    }
                }("localStorage")) throw new Error("LocalStorage is not available");
            this._storageKey = "insights-store";
            var t = (new Date).getTime(),
                n = this.getStorageData(),
                r = this.cleanOldStorage(t, n);
            localStorage.setItem(this._storageKey, JSON.stringify(r))
        },
        o = function (e, t, n) {
            var r = new Date;
            r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
            var i = "expires=" + r.toUTCString();
            document.cookie = e + "=" + t + ";" + i + ";path=/"
        },
        a = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                var t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            })
        },
        s = function (e) {
            var t = function (e) {
                for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), r = 0; r < n.length; r++) {
                    for (var i = n[r];
                        " " == i.charAt(0);) i = i.substring(1);
                    if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
                }
                return ""
            }("_ALGOLIA");
            if (t && "" !== t) return o("_ALGOLIA", t, 10), t;
            var n = a();
            return o("_ALGOLIA", n, 10), n
        };
    Object.keys || (Object.keys = (e = Object.prototype.hasOwnProperty, t = !{
        toString: null
    }.propertyIsEnumerable("toString"), r = (n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function (i) {
        if ("function" != typeof i && ("object" != typeof i || null === i)) throw new TypeError("Object.keys called on non-object");
        var o, a, s = [];
        for (o in i) e.call(i, o) && s.push(o);
        if (t)
            for (a = 0; a < r; a++) e.call(i, n[a]) && s.push(n[a]);
        return s
    })), "function" != typeof Object.assign && (Object.assign = function (e, t) {
        var n = arguments;
        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
        for (var r = Object(e), i = 1; i < arguments.length; i++) {
            var o = n[i];
            if (null != o)
                for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a])
        }
        return r
    });
    return new function (e) {
        if (this._hasCredentials = !1, !document.addEventListener || !window) throw new Error("Browser does not support eventlistener or there is no window object.");
        this.storageManager = new i, this.processQueue = function () {
            var e = this,
                t = window.AlgoliaAnalyticsObject;
            t && ((window[t].queue || []).forEach(function (t) {
                var n = t[0],
                    r = t[1];
                n && "function" == typeof e[n] && e[n](r)
            }), window[t] = function (t, n) {
                e[t](n)
            })
        }.bind(this), this.sendEvent = function (e, t) {
            var n = this;
            t.userID = this._userID;
            var r = "https://insights.algolia.io/1/searches/" + e + "?X-Algolia-Application-Id=" + this._applicationID + "&X-Algolia-API-Key=" + this._apiKey;
            if (navigator && "function" == typeof navigator.sendBeacon && "search" !== e) navigator.sendBeacon(r, JSON.stringify(t));
            else {
                var i = new XMLHttpRequest;
                i.open("POST", r), "search" === e && (i.onreadystatechange = function () {
                    if (4 === i.readyState && i.responseText) {
                        var e = i && i.responseText ? JSON.parse(i.responseText) : {};
                        n._lastQueryID = e.queryID
                    }
                }), i.send(JSON.stringify(t))
            }
        }.bind(this), this.init = function (e) {
            if (!e) throw new Error("Init function should be called with an object argument containing your apiKey and applicationID");
            if (!e.apiKey || "string" != typeof e.apiKey) throw new Error("apiKey is missing, please provide it so we can authenticate the application");
            if (!e.applicationID || "string" != typeof e.applicationID) throw new Error("applicationID is missing, please provide it, so we can properly attribute data to your application");
            this._apiKey = e.apiKey, this._applicationID = e.applicationID, this._hasCredentials = !0
        }.bind(this), this.initSearch = function (e) {
            if (!this._hasCredentials) throw new Error("Before calling any methods on the analytics, you first need to call the 'init' function with applicationID and apiKey parameters");
            if (!e) throw new Error("initSearch function requires an argument with getQueryID and hitsContainer arguments");
            if (!e.getQueryID || "function" != typeof e.getQueryID) throw new Error("getQueryID must be a function that returns the queryID of the last search operation");
            this.getQueryID = e.getQueryID
        }.bind(this), this.click = function (e) {
            if (!this._hasCredentials) throw new Error("Before calling any methods on the analytics, you first need to call the 'init' function with applicationID and apiKey parameters");
            if (!e) throw new Error("No params were sent to click function, please provide an objectID and position to be reported");
            if (!e.objectID) throw new Error("required objectID parameter was not sent, click event can not be properly attributed");
            if (!e.position) throw new Error("required position parameter was not sent, click event position can not be properly sent without");
            var t = e.queryID;
            if ("function" != typeof this.getQueryID || t || (t = this.getQueryID() || this._lastQueryID), !t) throw new Error("No queryID was retrieved, please check the implementation and provide either a getQueryID function\n    or call the search method that will return the queryID parameter");
            this.storageManager.storeClick(e.objectID, t);
            var n = Object.assign({}, e, {
                queryID: t
            });
            this.sendEvent("click", n)
        }.bind(this), this.conversion = function (e) {
            if (!this._hasCredentials) throw new Error("Before calling any methods on the analytics, you first need to call the 'init' function with applicationID and apiKey parameters");
            if (!e) throw new Error("No parameters were sent to conversion event, please provide an objectID");
            if (!e.objectID) throw new Error("No objectID was sent to conversion event, please provide an objectID");
            var t = e.queryID ? e.queryID : this.storageManager.getConversionObjectID(e.objectID),
                n = Object.assign(e, {
                    queryID: t
                });
            if (!t) throw new Error("No queryID was retrieved, please check the implementation and provide either a getQueryID function\n    or call the conversion method that will return the queryID parameter");
            this.sendEvent("conversion", n)
        }.bind(this), this.search = function (e) {
            if (!e) throw new Error("Search functions has to be called with a query string, which cannot be undefined");
            if (!e.index) throw new Error("Please provide index of the index being searched");
            this.sendEvent("search", e)
        }.bind(this), this._userID = s(), this.processQueue()
    }
});