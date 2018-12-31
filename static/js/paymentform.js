! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(o, i, function(t) {
                return e[t]
            }.bind(null, i));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 11)
}([function(e, t, n) {
    "use strict";
    t.a = {
        SERVER_ENV: "production",
        HASH: "eyJzIjoiOGI3ZGU2OTYyZjQxOTA0NTNiNGUxMjA3ODk2N2M4MjBmYzlkYmRhOSJ9",
        endpoints: {
            ERROR_LOGGER: "/v2/js-error",
            FINGERPRINT: "/v2/f.js",
            LOGO: "/v2/logo.html",
            V: "/v2/v",
            CARD_NONCE: "/v2/card-nonce",
            IFRAME: "/v2/iframe",
            APPLE_PAY_VALIDATE_MERCHANT: "/v2/apple-pay/validate-merchant",
            GOOGLE_PAY_GENERATE_TOKEN: "/digital-wallets/google-pay/token",
            MASTERPASS_CALLBACK: "/v2/masterpass/callback"
        },
        events: {
            LOAD_FORM_CONTROLLER: "loadFormController",
            REQUEST_CARD_NONCE_IF_VALID_FORM: "requestCardNonceIfValidForm",
            BUILD_STYLES_FOR_SCREEN_WIDTH: "buildStylesForScreenWidth",
            SET_POSTAL_CODE: "setPostalCode",
            BLUR_ALL_INPUTS: "blurAllInputs",
            LOAD_WALLET: "loadWallet",
            CARD_NONCE_RESPONSE_RECEIVED: "cardNonceResponseReceived",
            INPUT_EVENT_RECEIVED: "inputEventReceived",
            SET_INPUT_HEIGHT: "setInputHeight",
            PAYMENT_FORM_LOADED: "paymentFormLoaded",
            INSTALL_ERROR_LOGGER: "installErrorLogger",
            REQUEST_APPLE_PAY_CARD_NONCE: "requestApplePayCardNonce",
            RECEIVE_APPLE_PAY_CARD_NONCE: "receiveApplePayCardNonce",
            REQUEST_APPLE_PAY_MERCHANT_VALIDITY: "requestApplePayMerchantValidity",
            RECEIVE_APPLE_PAY_VALID_MERCHANT: "receiveApplePayValidMerchant",
            REQUEST_GOOGLE_PAY_CARD_NONCE: "requestGooglePayCardNonce",
            RECEIVE_GOOGLE_PAY_CARD_NONCE: "receiveGooglePayCardNonce",
            REQUEST_GOOGLE_PAY_TOKEN: "requestGooglePayToken",
            RECEIVE_GOOGLE_PAY_TOKEN: "receiveGooglePayToken",
            RECEIVE_MASTERPASS_TRANSACTION: "receiveMasterpassTransaction",
            SET_MASTERPASS_CHECKOUT_ID: "setMasterpassCheckoutId",
            REQUEST_MASTERPASS_CARD_NONCE: "requestMasterpassCardNonce"
        },
        inputEvents: {
            SUBMIT: "submit",
            EMPTY_STATE_CHANGED: "emptyStateChanged",
            FOCUS_CLASS_ADDED: "focusClassAdded",
            FOCUS_CLASS_REMOVED: "focusClassRemoved",
            ERROR_CLASS_ADDED: "errorClassAdded",
            ERROR_CLASS_REMOVED: "errorClassRemoved",
            CARD_BRAND_CHANGED: "cardBrandChanged",
            POSTAL_CODE_CHANGED: "postalCodeChanged"
        },
        inputTypes: {
            CARD_NUMBER: "cardNumber",
            GIFT_CARD: "giftCard",
            CVV: "cvv",
            EXPIRATION_DATE: "expirationDate",
            POSTAL_CODE: "postalCode"
        },
        wallets: {
            APPLE_PAY: "applePay",
            GOOGLE_PAY: "googlePay",
            MASTERPASS: "masterpass"
        },
        GOOGLE_PAY_JS: "https://pay.google.com/gp/p/js/pay.js"
    }
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    t.a = {
        getWindow: function() {
            return window
        },
        getDocument: function() {
            return this.getWindow().document
        },
        getReadyState: function() {
            return this.getDocument().readyState
        },
        getSiblingIframe: function(e) {
            if ("string" == typeof e) {
                var t = window.parent.frames[e];
                if ("object" === o(t) && "function" == typeof t.setInterval) return t
            }
        },
        getOrigin: function() {
            var e = this.getWindow().location;
            return e.origin ? e.origin : e.protocol + "//" + e.host
        },
        getParentLocation: function() {
            return this.getWindow().location != this.getWindow().parent.location ? this.getDocument().referrer : this.getDocument().location
        },
        getParentHref: function() {
            var e = this.getParentLocation();
            return "string" == typeof e ? e : e.href
        },
        getParentOrigin: function() {
            var e = this.getParentLocation();
            if (e.origin) return e.origin;
            var t = this.getDocument().createElement("a");
            return t.href = e, t.protocol + "//" + t.host
        }
    }
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return "https://docs.connect.squareup.com/payments/sqpaymentform/sqpaymentform-overview" + (e || "")
    }

    function i(e) {
        return "https://docs.connect.squareup.com/api/paymentform" + (e || "")
    }

    function r(e) {
        this.message = "SqPaymentForm element with id `" + e + "` not found. Has the DOM finished loading?\nSee: https://docs.connect.squareup.com/payments/sqpaymentform/sqpaymentform-setup#step-3-add-the-html-form-to-your-payment-page", this.name = "ElementNotFoundError";
        var t = Error(this.message);
        this.stack = t.stack, this.columnNumber = t.columnNumber, this.fileName = t.fileName, this.lineNumber = t.lineNumber
    }

    function a(e) {
        this.message = "SqPaymentForm element with id `" + e + "` is not visible. Does it or a parent element have `display:none`?", this.name = "ElementNotVisibleError";
        var t = Error(this.message);
        this.stack = t.stack, this.columnNumber = t.columnNumber, this.fileName = t.fileName, this.lineNumber = t.lineNumber
    }

    function s(e) {
        this.message = "SqPaymentForm field `" + e + "` is invalid.", this.name = "InvalidFieldError";
        var t = Error(this.message);
        this.stack = t.stack, this.columnNumber = t.columnNumber, this.fileName = t.fileName, this.lineNumber = t.lineNumber
    }

    function l() {
        this.message = "SqPaymentForm can only be embedded on sites that use HTTPS. See: " + o("#requirements-and-limitations"), this.name = "HttpsRequiredError";
        var e = Error(this.message);
        this.stack = e.stack, this.columnNumber = e.columnNumber, this.fileName = e.fileName, this.lineNumber = e.lineNumber
    }

    function c(e) {
        this.message = "Cannot call SqPaymentForm#" + e + " after SqPaymentForm#destroy. Create a new SqPaymentForm instance instead.", this.name = "FormAlreadyDestroyedError";
        var t = Error(this.message);
        this.stack = t.stack, this.columnNumber = t.columnNumber, this.fileName = t.fileName, this.lineNumber = t.lineNumber
    }

    function u(e) {
        this.message = "Cannot call SqPaymentForm#" + e + " before SqPaymentForm is ready. See: " + o("#how-it-works-sqpaymentform-process-flow"), this.name = "FormNotReadyError";
        var t = Error(this.message);
        this.stack = t.stack, this.columnNumber = t.columnNumber, this.fileName = t.fileName, this.lineNumber = t.lineNumber
    }

    function p() {
        this.message = "SqPaymentForm#build called more than once. Did you mean to call SqPaymentForm#destroy first?\nSee: " + i("#build"), this.name = "FormAlreadyBuiltError";
        var e = Error(this.message);
        this.stack = e.stack, this.columnNumber = e.columnNumber, this.fileName = e.fileName, this.lineNumber = e.lineNumber
    }

    function d() {
        this.message = "Iframe no longer exists on site. Check if you called SqPaymentForm destroy() correctly.\nSee: " + i("#destroy"), this.name = "IframeDoesNotExistError";
        var e = Error(this.message);
        this.stack = e.stack, this.columnNumber = e.columnNumber, this.fileName = e.fileName, this.lineNumber = e.lineNumber
    }

    function h(e, t) {
        this.message = "The SqPaymentForm `" + e + "` argument must be of type " + t + ".\nSee: " + i("#configurationfields"), this.name = "InvalidArgumentError";
        var n = Error(this.message);
        this.stack = n.stack, this.columnNumber = n.columnNumber, this.fileName = n.fileName, this.lineNumber = n.lineNumber
    }

    function m(e) {
        this.message = "The SqPaymentForm `" + e + "` argument is required.\nSee: " + i("#configurationfields"), this.name = "MissingArgumentError";
        var t = Error(this.message);
        this.stack = t.stack, this.columnNumber = t.columnNumber, this.fileName = t.fileName, this.lineNumber = t.lineNumber
    }

    function f(e) {
        this.message = "The SqPaymentForm `" + e + "` option value is invalid.\nSee: " + i("#configurationfields"), this.name = "InvalidOptionError";
        var t = Error(this.message);
        this.stack = t.stack, this.columnNumber = t.columnNumber, this.fileName = t.fileName, this.lineNumber = t.lineNumber
    }

    function y(e) {
        this.message = "The SqPaymentForm `" + e + "` option type is invalid.\nSee: " + i("#configurationfields"), this.name = "InvalidOptionType";
        var t = Error(this.message);
        this.stack = t.stack, this.columnNumber = t.columnNumber, this.fileName = t.fileName, this.lineNumber = t.lineNumber
    }

    function g(e) {
        this.message = "The SqPaymentForm `" + e + "` option is required.\nSee: " + i("#configurationfields"), this.name = "MissingOptionError";
        var t = Error(this.message);
        this.stack = t.stack, this.columnNumber = t.columnNumber, this.fileName = t.fileName, this.lineNumber = t.lineNumber
    }

    function b(e) {
        this.message = "The SqPaymentForm `elementId` option is required for `" + e + "`.\nSee: " + i("#configurationfields"), this.name = "MissingElementIdError";
        var t = Error(this.message);
        this.stack = t.stack, this.columnNumber = t.columnNumber, this.fileName = t.fileName, this.lineNumber = t.lineNumber
    }

    function E(e) {
        this.message = "The SqPaymentForm `" + e + "` option is required.\nSee: " + i("#configurationfields"), this.name = "MissingInputTypeError";
        var t = Error(this.message);
        this.stack = t.stack, this.columnNumber = t.columnNumber, this.fileName = t.fileName, this.lineNumber = t.lineNumber
    }

    function v(e) {
        this.message = "The SqPaymentForm `" + e + "` option is not expected in this configuration.\nSee: " + i("#configurationfields"), this.name = "UnexpectedInputTypeError";
        var t = Error(this.message);
        this.stack = t.stack, this.columnNumber = t.columnNumber, this.fileName = t.fileName, this.lineNumber = t.lineNumber
    }

    function S(e) {
        this.message = "The SqPaymentForm `" + e + "` callback is required.\nSee: " + i("#_callbackfunctions_detail"), this.name = "MissingCallbackError";
        var t = Error(this.message);
        this.stack = t.stack, this.columnNumber = t.columnNumber, this.fileName = t.fileName, this.lineNumber = t.lineNumber
    }

    function N(e) {
        this.message = "The SqPaymentForm `" + e + "` callback must be a function.\nSee: " + i("#_callbackfunctions_detail"), this.name = "InvalidCallbackError";
        var t = Error(this.message);
        this.stack = t.stack, this.columnNumber = t.columnNumber, this.fileName = t.fileName, this.lineNumber = t.lineNumber
    }

    function C() {
        this.message = "The SqPaymentForm requires at least one payment method.\nSee: " + i("#configurationfields"), this.name = "MissingPaymentMethodError";
        var e = Error(this.message);
        this.stack = e.stack, this.columnNumber = e.columnNumber, this.fileName = e.fileName, this.lineNumber = e.lineNumber
    }

    function A() {
        this.message = "The SqPaymentForm `inputStyles` option must be an array.\nSee: " + i("#configurationfields"), this.name = "InvalidInputStylesError";
        var e = Error(this.message);
        this.stack = e.stack, this.columnNumber = e.columnNumber, this.fileName = e.fileName, this.lineNumber = e.lineNumber
    }

    function _(e) {
        this.message = "Invalid InputStyle property: `" + e + "`.\nSee: " + i("#datatype-inputstyleobjects"), this.name = "InvalidInputStylePropertyError";
        var t = Error(this.message);
        this.stack = t.stack, this.columnNumber = t.columnNumber, this.fileName = t.fileName, this.lineNumber = t.lineNumber
    }

    function I(e, t) {
        this.message = "Invalid InputStyle value `" + e + "` for property `" + t + "`.\nSee: " + i("#datatype-inputstyleobjects"), this.name = "InvalidInputStyleValueError";
        var n = Error(this.message);
        this.stack = n.stack, this.columnNumber = n.columnNumber, this.fileName = n.fileName, this.lineNumber = n.lineNumber
    }

    function P() {
        this.message = "Input height zero detected; using fallback value", this.name = "InputHeightZeroError";
        var e = Error(this.message);
        this.stack = e.stack, this.columnNumber = e.columnNumber, this.fileName = e.fileName, this.lineNumber = e.lineNumber
    }

    function T() {
        this.message = "Browser not supported.\nSee: " + o("#prerequisites"), this.name = "UnsupportedBrowserError";
        var e = Error(this.message);
        this.stack = e.stack, this.columnNumber = e.columnNumber, this.fileName = e.fileName, this.lineNumber = e.lineNumber
    }
    r.prototype = Object.create(Error.prototype, {
        constructor: {
            value: r,
            writable: !0,
            configurable: !0
        }
    }), a.prototype = Object.create(Error.prototype, {
        constructor: {
            value: a,
            writable: !0,
            configurable: !0
        }
    }), s.prototype = Object.create(Error.prototype, {
        constructor: {
            value: s,
            writable: !0,
            configurable: !0
        }
    }), l.prototype = Object.create(Error.prototype, {
        constructor: {
            value: l,
            writable: !0,
            configurable: !0
        }
    }), c.prototype = Object.create(Error.prototype, {
        constructor: {
            value: c,
            writable: !0,
            configurable: !0
        }
    }), u.prototype = Object.create(Error.prototype, {
        constructor: {
            value: u,
            writable: !0,
            configurable: !0
        }
    }), p.prototype = Object.create(Error.prototype, {
        constructor: {
            value: p,
            writable: !0,
            configurable: !0
        }
    }), d.prototype = Object.create(Error.prototype, {
        constructor: {
            value: d,
            writable: !0,
            configurable: !0
        }
    }), h.prototype = Object.create(Error.prototype, {
        constructor: {
            value: h,
            writable: !0,
            configurable: !0
        }
    }), m.prototype = Object.create(Error.prototype, {
        constructor: {
            value: m,
            writable: !0,
            configurable: !0
        }
    }), f.prototype = Object.create(Error.prototype, {
        constructor: {
            value: f,
            writable: !0,
            configurable: !0
        }
    }), y.prototype = Object.create(Error.prototype, {
        constructor: {
            value: y,
            writable: !0,
            configurable: !0
        }
    }), g.prototype = Object.create(Error.prototype, {
        constructor: {
            value: g,
            writable: !0,
            configurable: !0
        }
    }), b.prototype = Object.create(Error.prototype, {
        constructor: {
            value: b,
            writable: !0,
            configurable: !0
        }
    }), E.prototype = Object.create(Error.prototype, {
        constructor: {
            value: E,
            writable: !0,
            configurable: !0
        }
    }), v.prototype = Object.create(Error.prototype, {
        constructor: {
            value: v,
            writable: !0,
            configurable: !0
        }
    }), S.prototype = Object.create(Error.prototype, {
        constructor: {
            value: S,
            writable: !0,
            configurable: !0
        }
    }), N.prototype = Object.create(Error.prototype, {
        constructor: {
            value: N,
            writable: !0,
            configurable: !0
        }
    }), C.prototype = Object.create(Error.prototype, {
        constructor: {
            value: C,
            writable: !0,
            configurable: !0
        }
    }), A.prototype = Object.create(Error.prototype, {
        constructor: {
            value: A,
            writable: !0,
            configurable: !0
        }
    }), _.prototype = Object.create(Error.prototype, {
        constructor: {
            value: _,
            writable: !0,
            configurable: !0
        }
    }), I.prototype = Object.create(Error.prototype, {
        constructor: {
            value: I,
            writable: !0,
            configurable: !0
        }
    }), P.prototype = Object.create(Error.prototype, {
        constructor: {
            value: P,
            writable: !0,
            configurable: !0
        }
    }), T.prototype = Object.create(Error.prototype, {
        constructor: {
            value: T,
            writable: !0,
            configurable: !0
        }
    }), t.a = {
        ElementNotFoundError: r,
        ElementNotVisibleError: a,
        InvalidFieldError: s,
        HttpsRequiredError: l,
        FormAlreadyDestroyedError: c,
        FormNotReadyError: u,
        FormAlreadyBuiltError: p,
        IframeDoesNotExistError: d,
        InvalidArgumentError: h,
        MissingArgumentError: m,
        InvalidOptionError: f,
        InvalidOptionType: y,
        MissingOptionError: g,
        MissingElementIdError: b,
        MissingInputTypeError: E,
        UnexpectedInputTypeError: v,
        MissingCallbackError: S,
        InvalidCallbackError: N,
        MissingPaymentMethodError: C,
        InvalidInputStylesError: A,
        InvalidInputStylePropertyError: _,
        InvalidInputStyleValueError: I,
        InputHeightZeroError: P,
        UnsupportedBrowserError: T
    }
}, function(e, t, n) {
    "use strict";
    var o = n(1),
        i = {
            embeddingAllowed: function(e, t) {
                return /localhost$/.test(t.hostname) || "development" === e.name || "file:" === t.protocol || "https:" === t.protocol
            },
            isSupportedBrowser: function() {
                var e = o.a.getWindow(),
                    t = o.a.getDocument();
                return void 0 !== e.postMessage && void 0 !== e.XMLHttpRequest && void 0 !== t.createElement("a").classList
            },
            cloneObject: function(e) {
                var t = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            },
            objectValues: function(e) {
                if ("function" == typeof Object.values) return Object.values(e);
                var t = [];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(e[n]);
                return t
            },
            isIE10: function() {
                return !!o.a.getDocument().documentElement.doScroll
            },
            guid: function() {
                function e() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }
        };
    t.a = i
}, function(e, t, n) {
    "use strict";
    var o = {};

    function i(e, t) {
        this.message = "Request timeout exceeded (" + t + "ms; " + e + ")", this.name = "TimeoutError";
        var n = Error(this.message);
        this.stack = n.stack, this.columnNumber = n.columnNumber, this.fileName = n.fileName, this.lineNumber = n.lineNumber
    }

    function r(e) {
        this.message = "Network error during request (" + e + ")", this.name = "NetworkError";
        var t = Error(this.message);
        this.stack = t.stack, this.columnNumber = t.columnNumber, this.fileName = t.fileName, this.lineNumber = t.lineNumber
    }
    o.TIMEOUT_MS = 1e4, o.RETRIES = 0, i.prototype = Object.create(Error.prototype, {
        constructor: {
            value: i,
            writable: !0,
            configurable: !0
        }
    }), o.TimeoutError = i, r.prototype = Object.create(Error.prototype, {
        constructor: {
            value: r,
            writable: !0,
            configurable: !0
        }
    }), o.NetworkError = r, o.post = function(e, t, n) {
        n || "function" != typeof t || (n = t, t = {}), t || (t = {}), "function" != typeof n && (n = function() {});
        var a = new XMLHttpRequest;
        a.open("POST", e, !0), a.timeout = t.timeout || o.TIMEOUT_MS;
        var s = t.retries || o.RETRIES;
        if (t.headers)
            for (var l in t.headers) a.setRequestHeader(l, t.headers[l]);

        function c() {
            return 0 < s && (a.abort(), t.retries = s - 1, o.post(e, t, n), !0)
        }
        t.json && (a.setRequestHeader("Accept", "application/json"), a.setRequestHeader("Content-Type", "application/json; charset=utf-8")), a.onreadystatechange = function() {
            if (4 === a.readyState && 0 !== a.status) {
                var e = a.responseText;
                if (e && t.json) try {
                    e = JSON.parse(e)
                } catch (e) {
                    return n(e)
                }
                var i = {
                    headers: o.parseHeaders(a.getAllResponseHeaders()),
                    status: a.status,
                    statusText: a.statusText
                };
                n(null, i, e)
            }
        }, a.onerror = function() {
            c() || n(new r(e))
        }, a.ontimeout = function() {
            c() || n(new i(e, a.timeout))
        }, t.body && t.json && (t.body = null), a.send(t.body || JSON.stringify(t.json))
    }, o.parseHeaders = function(e) {
        var t = {};
        return e && e.split("\r\n").forEach(function(e) {
            var n = e.indexOf(": ");
            if (0 < n) {
                var o = e.substring(0, n),
                    i = e.substring(n + 2);
                t[o] = i
            }
        }), t
    }, t.a = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var i = {
        AF: "Afghanistan",
        AL: "Albania",
        DZ: "Algeria",
        AS: "American Samoa",
        AD: "Andorra",
        AO: "Angola",
        AI: "Anguilla",
        AQ: "Antarctica",
        AG: "Antigua And Barbuda",
        AR: "Argentina",
        AM: "Armenia",
        AW: "Aruba",
        AU: "Australia",
        AT: "Austria",
        AZ: "Azerbaijan",
        BS: "Bahamas",
        BH: "Bahrain",
        BD: "Bangladesh",
        BB: "Barbados",
        BY: "Belarus",
        BE: "Belgium",
        BZ: "Belize",
        BJ: "Benin",
        BM: "Bermuda",
        BT: "Bhutan",
        BO: "Bolivia",
        BQ: "Bonaire, Sint Eustatius, And Saba",
        BA: "Bosnia And Herzegovina",
        BW: "Botswana",
        BV: "Bouvet Island",
        BR: "Brazil",
        IO: "British Indian Ocean Territory",
        BN: "Brunei Darussalam",
        BG: "Bulgaria (rep.)",
        BF: "Burkina Faso",
        BI: "Burundi",
        KH: "Cambodia",
        CM: "Cameroon",
        CA: "Canada",
        CV: "Cape Verde",
        KY: "Cayman Islands",
        CF: "Central African Republic",
        TD: "Chad",
        JE: "Channel Islands",
        GG: "Channel Islands",
        CL: "Chile",
        CN: "China",
        CX: "Christmas Island",
        CC: "Cocos (keeling) Islands",
        CO: "Colombia",
        KM: "Comoros",
        CD: "Congo (dem. Rep.)",
        CG: "Congo (rep.)",
        CK: "Cook Islands",
        CR: "Costa Rica",
        CI: "Cote D'ivoire",
        HR: "Croatia",
        CW: "Curacao",
        CY: "Cyprus",
        CZ: "Czech Rep.",
        DK: "Denmark",
        DJ: "Djibouti",
        DM: "Dominica",
        DO: "Dominican Rep.",
        EC: "Ecuador",
        EG: "Egypt",
        SV: "El Salvador",
        GQ: "Equatorial Guinea",
        ER: "Eritrea",
        EE: "Estonia",
        ET: "Ethiopia",
        FK: "Falkland Islands (malvinas)",
        FO: "Faroe Islands",
        FJ: "Fiji",
        AX: "Finland",
        FI: "Finland",
        FR: "France",
        GF: "French Guiana",
        PF: "French Polynesia",
        TF: "French Southern Territories",
        GA: "Gabon",
        GM: "Gambia",
        GE: "Georgia",
        DE: "Germany",
        GH: "Ghana",
        GI: "Gibraltar",
        GR: "Greece",
        GL: "Greenland",
        GD: "Grenada (west Indies)",
        GP: "Guadeloupe",
        GU: "Guam",
        GT: "Guatemala",
        GN: "Guinea",
        GW: "Guinea-bissau",
        GY: "Guyana",
        HT: "Haiti",
        HM: "Heard And Mcdonald Islands",
        HN: "Honduras",
        HK: "Hong Kong",
        HU: "Hungary (rep.)",
        IS: "Iceland",
        IN: "India",
        ID: "Indonesia",
        IR: "Iran",
        IQ: "Iraq",
        IE: "Ireland",
        IM: "Isle Of Man",
        IL: "Israel",
        IT: "Italy",
        JM: "Jamaica",
        JP: "Japan",
        JO: "Jordan",
        KZ: "Kazakhstan",
        KE: "Kenya",
        KI: "Kiribati",
        KW: "Kuwait",
        KG: "Kyrgyzstan",
        LA: "Lao (people's Dem. Rep.)",
        LV: "Latvia",
        LB: "Lebanon",
        LS: "Lesotho",
        LR: "Liberia",
        LY: "Libya",
        LI: "Liechtenstein",
        LT: "Lithuania",
        LU: "Luxembourg",
        MO: "Macao",
        MK: "Macedonia",
        MG: "Madagascar",
        MW: "Malawi",
        MY: "Malaysia",
        MV: "Maldives",
        ML: "Mali",
        MT: "Malta",
        MH: "Marshall Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MU: "Mauritius",
        YT: "Mayotte",
        MX: "Mexico",
        FM: "Micronesia (federated State Of)",
        MC: "Monaco",
        MN: "Mongolia",
        ME: "Montenegro",
        MS: "Montserrat",
        MA: "Morocco",
        MZ: "Mozambique",
        MM: "Myanmar",
        NA: "Namibia",
        NR: "Nauru Central Pacific",
        NP: "Nepal",
        NL: "Netherlands",
        NC: "New Caledonia",
        NZ: "New Zealand",
        NI: "Nicaragua",
        NE: "Niger",
        NG: "Nigeria",
        NU: "Niue",
        NF: "Norfolk Island",
        MP: "Northern Mariana Islands",
        NO: "Norway",
        OM: "Oman",
        PK: "Pakistan",
        PW: "Palau",
        PS: "Palestinian Territory",
        PA: "Panama (rep.)",
        PG: "Papua New Guinea",
        PY: "Paraguay",
        PE: "Peru",
        PH: "Philippines",
        PN: "Pitcairn",
        PL: "Poland",
        PT: "Portugal",
        PR: "Puerto Rico",
        QA: "Qatar",
        MD: "Rep. Moldova",
        SG: "Rep. Of Singapore",
        RS: "Republic Of Serbia",
        RE: "Reunion",
        RO: "Romania",
        RU: "Russian Federation",
        RW: "Rwanda",
        BL: "Saint Barthelemy",
        SH: "Saint Helena",
        KN: "Saint Kitts And Nevis",
        LC: "Saint Lucia",
        MF: "Saint Martin",
        VC: "Saint Vincent And The Grenadines (antilles)",
        WS: "Samoa",
        SM: "San Marino",
        ST: "Sao Tome And Principe",
        SA: "Saudi Arabia",
        SN: "Senegal",
        SC: "Seychelles",
        SL: "Sierra Leone",
        SX: "Sint Maarten",
        SK: "Slovakia",
        SI: "Slovenia",
        SB: "Solomon Islands",
        SO: "Somalia",
        ZA: "South Africa",
        GS: "South Georgia",
        KR: "South Korea",
        SS: "South Sudan",
        ES: "Spain",
        LK: "Sri Lanka",
        PM: "St. Pierre And Miquelon",
        SR: "Suriname",
        SJ: "Svalbard And Jan Mayen Islands",
        SZ: "Swaziland",
        SE: "Sweden",
        CH: "Switzerland",
        TW: "Taiwan",
        TJ: "Tajikistan",
        TZ: "Tanzania (united Rep.)",
        TH: "Thailand",
        TL: "Timor-leste",
        TG: "Togo",
        TK: "Tokelau",
        TO: "Tonga",
        TT: "Trinidad And Tobago",
        TN: "Tunisia",
        TR: "Turkey",
        TM: "Turkmenistan",
        TC: "Turks And Caicos Islands",
        TV: "Tuvalu",
        UG: "Uganda",
        UA: "Ukraine",
        AE: "United Arab Emirates",
        GB: "United Kingdom",
        US: "United States",
        UM: "United States Minor Outlying Islands",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VU: "Vanuatu",
        VA: "Vatican",
        VE: "Venezuela",
        VN: "Viet Nam",
        VG: "Virgin Islands (british)",
        VI: "Virgin Islands (u.s.)",
        WF: "Wallis And Futuna Islands",
        EH: "Western Sahara",
        YE: "Yemen",
        ZM: "Zambia",
        ZW: "Zimbabwe"
    };

    function r(e) {
        "object" != o(e) && (e = {}), this.data = {}, this.familyName = e.familyName, this.givenName = e.givenName, this.email = e.email, this.country = e.country, this.region = e.region, this.city = e.city, this.addressLines = e.addressLines, this.postalCode = e.postalCode, this.phone = e.phone
    }
    Object.defineProperty(r.prototype, "familyName", {
        get: function() {
            return this.data.familyName
        },
        set: function(e) {
            this.data.familyName = e
        },
        enumerable: !0
    }), Object.defineProperty(r.prototype, "givenName", {
        get: function() {
            return this.data.givenName
        },
        set: function(e) {
            this.data.givenName = e
        },
        enumerable: !0
    }), Object.defineProperty(r.prototype, "email", {
        get: function() {
            return this.data.email
        },
        set: function(e) {
            this.data.email = e
        },
        enumerable: !0
    }), Object.defineProperty(r.prototype, "phone", {
        get: function() {
            return this.data.phone
        },
        set: function(e) {
            this.data.phone = e
        },
        enumerable: !0
    }), Object.defineProperty(r.prototype, "country", {
        get: function() {
            return this.data.country
        },
        set: function(e) {
            this.data.country != e && (this.data.country = e, this.data.countryName = i[e])
        },
        enumerable: !0
    }), Object.defineProperty(r.prototype, "countryName", {
        get: function() {
            return this.data.countryName
        },
        enumerable: !0
    }), Object.defineProperty(r.prototype, "region", {
        get: function() {
            return this.data.region
        },
        set: function(e) {
            this.data.region = e
        },
        enumerable: !0
    }), Object.defineProperty(r.prototype, "city", {
        get: function() {
            return this.data.city
        },
        set: function(e) {
            this.data.city = e
        },
        enumerable: !0
    }), Object.defineProperty(r.prototype, "addressLines", {
        get: function() {
            return this.data.addressLines
        },
        set: function(e) {
            !e || e instanceof Array || (e = [e.toString()]), this.data.addressLines = e
        },
        enumerable: !0
    }), Object.defineProperty(r.prototype, "postalCode", {
        get: function() {
            return this.data.postalCode
        },
        set: function(e) {
            this.data.postalCode = e
        },
        enumerable: !0
    }), r.prototype.toApplePay = function() {
        return {
            addressLines: this.data.addressLines,
            locality: this.data.city,
            administrativeArea: this.data.region,
            postalCode: this.data.postalCode,
            countryCode: this.data.country,
            country: this.data.countryName,
            givenName: this.data.givenName,
            familyName: this.data.familyName,
            emailAddress: this.data.email,
            phoneNumber: this.data.phone
        }
    }, r.fromApplePay = function(e) {
        return e ? new r({
            addressLines: e.addressLines,
            city: e.locality,
            region: e.administrativeArea,
            postalCode: e.postalCode,
            country: e.countryCode,
            givenName: e.givenName,
            familyName: e.familyName,
            email: e.emailAddress,
            phone: e.phoneNumber
        }) : e
    }, r.fromGooglePay = function(e) {
        return e ? new r({
            addressLines: [e.address1, e.address2, e.address3, e.address4, e.address5].filter(Boolean),
            city: e.locality,
            region: e.administrativeArea,
            postalCode: e.postalCode,
            country: e.countryCode,
            givenName: e.name,
            email: e.email,
            phone: e.phoneNumber
        }) : e
    }, t.a = r
}, function(e, t, n) {
    "use strict";
    var o = {
            production: {
                js: "https://js.squareup.com",
                service: "https://pci-connect.squareup.com"
            },
            sandbox: {
                js: "https://js.squareupsandbox.com",
                service: "https://pci-connect.squareupsandbox.com"
            },
            staging: {
                js: "https://js.squareupstaging.com",
                service: "https://pci-connect.squareupstaging.com"
            },
            development: {
                js: "http://localhost:9090",
                service: "http://localhost:9090"
            },
            test: {
                js: "http://localhost:9090",
                service: "http://localhost:9090"
            },
            mock: {
                js: "https://js.squareupstaging.com",
                service: "https://pci-connect.squareupstaging.com"
            }
        },
        i = {
            production: {
                js: "https://static.masterpass.com/integration/merchant.js"
            },
            sandbox: {
                js: "https://sandbox.static.masterpass.com/integration/merchant.js"
            },
            staging: {
                js: "https://sandbox.static.masterpass.com/integration/merchant.js"
            },
            development: {
                js: "https://sandbox.static.masterpass.com/integration/merchant.js"
            },
            test: {
                js: "https://sandbox.static.masterpass.com/integration/merchant.js"
            },
            mock: {
                js: a(n(1).a.getParentOrigin(), "/mocks/masterpass/merchant.js")
            }
        },
        r = {
            production: {
                env: "PRODUCTION"
            },
            sandbox: {
                env: "TEST"
            },
            staging: {
                env: "TEST"
            },
            development: {
                env: "TEST"
            },
            test: {
                env: "TEST"
            },
            mock: {
                env: "TEST"
            }
        };

    function a(e, t, n) {
        return encodeURI(e + (t || "") + (n || ""))
    }
    t.a = function(e) {
        o[e] || (e = "production");
        var t = o[e],
            n = i[e];
        return {
            name: e,
            googlePayEnv: r[e].env,
            masterpassJsUrl: n.js,
            jsUrl: function(e, n) {
                return a(t.js, e, n)
            },
            serviceUrl: function(e, n) {
                return a(t.service, e, n)
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    var o = n(0),
        i = n(1),
        r = n(4);

    function a(e) {
        this.options = e || {}, this.env = this.options.env, this.source = this.options.source, this.applicationId = this.options.applicationId, this.ignoreError = 0;
        var t = this.options.endpoint || o.a.endpoints.ERROR_LOGGER,
            n = this.options.baseURL || this.env.serviceUrl();
        this.url = n + t, this.urlMatcher = /.+/, this.options.captureUncaughtExceptions && (this.options.captureUncaughtExceptions instanceof RegExp && (this.urlMatcher = this.options.captureUncaughtExceptions), this.install(i.a.getWindow()))
    }(t.a = a).prototype.destroy = function() {
        this.originalOnerror && (i.a.getWindow().onerror = this.originalOnerror, this.originalOnerror = null)
    }, a.prototype.ignoreNextError = function() {
        this.ignoreError += 1, i.a.getWindow().setTimeout(function() {
            this.ignoreError -= 1
        }.bind(this), 0)
    }, a.prototype.wrap = function(e) {
        var t = this;
        if (e.__inner__) return e;

        function n() {
            var n = [].slice.call(arguments);
            try {
                return e.apply(this, n)
            } catch (n) {
                throw t.capture(n), n
            }
        }
        return n.__inner__ = e, n
    }, a.prototype.capture = function(e) {
        (e.name || e.message) && ("development" === this.env.name && i.a.getWindow().console.error("[captured error]", e.message), this.ignoreNextError(), this._send(this._createPayload(e.name, e.message || "[unknown]", e.fileName || "[unknown]", e.lineNumber || -1, e.stack)))
    }, a.prototype.install = function(e) {
        e.__error_logger__ || (e.__error_logger__ = !0, this.originalOnerror = e.onerror, e.onerror = function(t, n, o, i, r) {
            return this.ignoreError || /Script error/.test(t) || !this.urlMatcher.test(n) || this.capture(r), "function" == typeof this.originalOnerror && this.originalOnerror.apply(e, [].slice.call(arguments))
        }.bind(this))
    }, a.prototype._createPayload = function(e, t, n, r, a) {
        var s = i.a.getWindow();
        return {
            app_id: this.applicationId,
            type: e,
            message: t,
            stack: a,
            ua: s.navigator.userAgent,
            url: s.location.href,
            app_url: i.a.getParentHref(),
            script_url: n,
            version: o.a.HASH,
            source: this.source
        }
    }, a.prototype._send = function(e) {
        r.a.post(this.url, {
            json: e
        }, this._handleResponse.bind(this))
    }, a.prototype._handleResponse = function() {}
}, function(e, t, n) {
    "use strict";
    var o = ["constructor", "hasOwnProperty", "isPrototypeOf", "toLocaleString", "toString", "valueOf", "__defineGetter__", "__defineSetter__", "__lookupGetter__", "__lookupSetter__", "__proto__"];

    function i() {
        this.handlers = {}
    }
    i.prototype.add = function(e, t) {
        if ("string" != typeof e || -1 < o.indexOf(e)) throw Error("Invalid event: " + e);
        this.handlers[e] ? this.handlers[e].push(t) : this.handlers[e] = [t]
    }, i.prototype.handle = function(e, t) {
        var n = this.handlers[e],
            o = 0;
        if (n)
            for (var i = 0; i < n.length; i++) n[i](t), o += 1;
        return o
    }, t.a = i
}, function(e, t, n) {
    "use strict";
    var o, i = n(0),
        r = n(1),
        a = n(4);

    function s(e) {
        this.options = e, this.env = this.options.env;
        var t = r.a.getWindow().performance;
        t && "function" == typeof t.getEntriesByType ? this.performance = t : this.performance = void 0
    }

    function l(e) {
        switch (e.initiatorType) {
            case "script":
                return /v2\/paymentform/.test(e.name);
            case "iframe":
                return /v2\/iframe/.test(e.name);
            default:
                return !1
        }
    }
    s.prototype.set = function(e, t) {
        this.options[e] = t
    }, s.prototype.collectLoadTiming = function(e) {
        var t = this._resources().filter(l),
            n = {
                t: e.tti
            };
        t.forEach(function(e) {
            var t = function(e) {
                    switch (o || (o = r.a.getDocument().createElement("a")), o.href = e, o.pathname) {
                        case "/v2/paymentform":
                            return "m";
                        case "/v2/iframe":
                            switch (!0) {
                                case /type=main/.test(o.search):
                                    return "f";
                                case /type=cardNumber/.test(o.search):
                                    return "n";
                                case /type=giftCard/.test(o.search):
                                    return "g";
                                case /type=cvv/.test(o.search):
                                    return "v";
                                case /type=expirationDate/.test(o.search):
                                    return "x";
                                case /type=postalCode/.test(o.search):
                                    return "p";
                                default:
                                    return "?"
                            }
                    }
                }(e.name),
                i = Math.round(e.duration);
            n[t] = i
        }), this._sendTimingEvent(0, n)
    }, s.prototype.collectNonceTiming = function(e, t) {
        var n = i.a.endpoints.CARD_NONCE + "\\?_=" + e,
            o = this._resources().filter(function(e, t) {
                switch (t.initiatorType) {
                    case "xmlhttprequest":
                        return new RegExp(e).test(t.name);
                    default:
                        return !1
                }
            }.bind(null, n)).pop();
        o || (o = {
            duration: -1
        });
        var r = {
            d: Math.round(o.duration)
        };
        t && "boolean" == typeof t.validLuhn && (r.l = t.validLuhn), this._sendTimingEvent(1, r)
    }, s.prototype.collectConfiguration = function(e) {
        delete e.sessionId, delete e.errorLogger, e._env || delete e.env, delete e._env;
        var t = Object.keys(e).filter(function(t) {
                return !1 !== e[t]
            }),
            n = Object.keys(e).filter(function(t) {
                return !1 === e[t]
            }),
            o = Object.keys(e.callbacks).filter(function(t) {
                return "function" == typeof e.callbacks[t]
            });
        e.inputStyles && e.inputStyles.some(function(e) {
            if (e.mediaMinWidth || e.mediaMaxWidth) return t.push("mediaBreakpoints")
        });
        var i = {
            e: t.join(" "),
            d: n.join(" "),
            c: o.join(" ")
        };
        this._sendConfigurationEvent(i)
    }, s.prototype._sendConfigurationEvent = function(e) {
        var t = this._createEvent(2, {
            c: e
        });
        a.a.post(this.env.serviceUrl(i.a.endpoints.V), {
            json: t
        })
    }, s.prototype._sendTimingEvent = function(e, t) {
        var n = this._createEvent(e, {
            l: t
        });
        a.a.post(this.env.serviceUrl(i.a.endpoints.V), {
            json: n
        })
    }, s.prototype._createEvent = function(e, t) {
        var n = {
            e: e,
            a: this.options.applicationId,
            o: this.options.locationId,
            n: this.options.sessionId,
            s: "SqPaymentForm",
            u: r.a.getWindow().location.href,
            v: r.a.getParentHref(),
            d: i.a.HASH
        };
        for (var o in t)
            if (t.hasOwnProperty(o)) {
                if (n[o]) throw new Error("Field already used: " + o);
                n[o] = t[o]
            }
        return n
    }, s.prototype._resources = function() {
        return this.performance ? this.performance.getEntriesByType("resource") : []
    }, t.a = s
}, , function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(7),
        i = n(2),
        r = n(8),
        a = n(0),
        s = n(1);

    function l(e, t, n) {
        this.type = e, this.options = t, this.callbacks = n, this.env = this.options.env, this.element = s.a.getDocument().createElement("iframe"), this.element.onload = this.onload.bind(this), this.setDefaultAttributes()
    }
    l.MIN_HEIGHT = 17, l.prototype.onload = function() {
        "function" == typeof this.callbacks.onload && this.callbacks.onload(this.type)
    }, l.prototype.destroy = function() {
        this.element.parentNode && this.element.parentNode.replaceChild(this.originalElement, this.element), this.originalElement = null, this.element = null
    }, l.prototype.setDefaultAttributes = function() {
        var e = this.element;
        e.setAttribute("id", this.options.elementId), e.setAttribute("name", this.name()), e.setAttribute("class", this.combinedClassName()), e.setAttribute("frameBorder", "0"), e.setAttribute("width", "100%"), e.setAttribute("scrolling", "no"), e.setAttribute("height", 17), e.setAttribute("src", this.iframeSRC()), "cardNumber" !== this.type && "main" !== this.type || e.setAttribute("allowPaymentRequest", !0), "main" === this.type && (e.setAttribute("width", "0"), e.setAttribute("height", "0"), e.setAttribute("style", "border: none !important; display: block !important; visibility: hidden !important"))
    }, l.prototype.combinedClassName = function() {
        var e = [];
        return this.options.inputClass && e.push(this.options.inputClass), this.options.inheritedClassName && e.push(this.options.inheritedClassName), e.join(" ")
    }, l.prototype.iframeSRC = function() {
        return this.env.serviceUrl(a.a.endpoints.IFRAME, this.queryString())
    }, l.prototype.queryString = function() {
        var e = "?type=" + this.type;
        return "main" !== this.type && "cardNumber" !== this.type && "giftCard" !== this.type || (e += "&app_id=" + this.options.applicationId, this.options.locationId && (e += "&location_id=" + this.options.locationId)), e
    }, l.prototype.addClass = function(e) {
        this.element.classList.add(e)
    }, l.prototype.removeClass = function(e) {
        this.element.classList.remove(e)
    }, l.prototype.focus = function() {
        this.element.focus()
    }, l.prototype.name = function() {
        return this.options.elementId
    };
    var c = l,
        u = n(9),
        p = n(3),
        d = n(5);

    function h(e) {
        return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function m(e) {
        "object" != h(e) && (e = {}), this.data = {}, this.currencyCode = e.currencyCode, this.countryCode = e.countryCode, this.total = e.total, this.shippingContact = e.shippingContact, this.lineItems = e.lineItems, this.requestShippingAddress = e.requestShippingAddress, this.requestBillingInfo = e.requestBillingInfo
    }
    Object.defineProperty(m.prototype, "currencyCode", {
        get: function() {
            return this.data.currencyCode
        },
        set: function(e) {
            this.data.currencyCode = e
        },
        enumerable: !0
    }), Object.defineProperty(m.prototype, "countryCode", {
        get: function() {
            return this.data.countryCode
        },
        set: function(e) {
            this.data.countryCode = e
        },
        enumerable: !0
    }), Object.defineProperty(m.prototype, "total", {
        get: function() {
            return this.data.total
        },
        set: function(e) {
            this.data.total = e
        },
        enumerable: !0
    }), Object.defineProperty(m.prototype, "shippingContact", {
        get: function() {
            return this.data.shippingContact
        },
        set: function(e) {
            !e || e instanceof d.a || (e = new d.a(e)), this.data.shippingContact = e
        },
        enumerable: !0
    }), Object.defineProperty(m.prototype, "lineItems", {
        get: function() {
            return this.data.lineItems
        },
        set: function(e) {
            this.data.lineItems = e
        },
        enumerable: !0
    }), Object.defineProperty(m.prototype, "requestShippingAddress", {
        get: function() {
            return this.data.requestShippingAddress
        },
        set: function(e) {
            this.data.requestShippingAddress = e
        },
        enumerable: !0
    }), Object.defineProperty(m.prototype, "requestBillingInfo", {
        get: function() {
            return this.data.requestBillingInfo
        },
        set: function(e) {
            this.data.requestBillingInfo = e
        },
        enumerable: !0
    }), m.prototype.toApplePay = function() {
        var e = {
            currencyCode: this.data.currencyCode,
            countryCode: this.data.countryCode,
            total: this._toApplePayLineItem(this.data.total),
            supportedNetworks: ["visa", "masterCard", "discover", "amex"],
            merchantCapabilities: ["supports3DS"],
            requiredBillingContactFields: ["postalAddress"]
        };
        return this.data.shippingContact instanceof d.a && (e.shippingContact = this.data.shippingContact.toApplePay()), this.data.lineItems && this.data.lineItems instanceof Array ? e.lineItems = this.data.lineItems.map(this._toApplePayLineItem) : e.lineItems = [], this.data.requestBillingInfo && (e.requiredShippingContactFields = ["email", "name", "phone"]), this.data.requestShippingAddress && (e.requiredShippingContactFields = ["postalAddress", "name", "email", "phone"]), e
    }, m.prototype._toApplePayLineItem = function(e) {
        if (e) {
            var t = {
                label: e.label,
                type: e.pending ? "pending" : "final"
            };
            return e.pending || (t.amount = e.amount), t
        }
    }, m.prototype.toGooglePay = function(e) {
        var t = e.buildBaseConfiguration();
        return t.transactionInfo = {
            totalPriceStatus: this.data.total.pending ? "ESTIMATED" : "FINAL",
            totalPrice: this.data.total.amount,
            currencyCode: this.data.currencyCode || "USD"
        }, t.emailRequired = !!this.data.requestShippingAddress, t.shippingAddressRequired = !!this.data.requestShippingAddress, t.shippingAddressParameters = {
            phoneNumberRequired: !!this.data.requestShippingAddress
        }, t.allowedPaymentMethods[0].parameters.billingAddressRequired = !!this.data.requestBillingInfo, t.allowedPaymentMethods[0].parameters.billingAddressParameters = {
            format: "MIN",
            phoneNumberRequired: !!this.data.requestBillingInfo
        }, t
    };
    var f = m;

    function y(e) {
        if (this.controller = e, this.options = e.options, this.callbacks = e.callbacks, this.controller.enabledDigitalWallets.indexOf(a.a.wallets.APPLE_PAY) < 0) this.controller.enableMethod(a.a.wallets.APPLE_PAY, !1);
        else if (this.options.applePay && "undefined" != typeof ApplePaySession && "function" == typeof this.callbacks.createPaymentRequest && "function" == typeof this.callbacks.cardNonceResponseReceived) {
            var t = this.options.applePay.elementId,
                n = s.a.getDocument().getElementById(t);
            if (!n) throw new i.a.ElementNotFoundError(t);
            if (!this.options.locationId) throw new i.a.MissingOptionError("locationId");
            var o = this;
            this.validityPromise = ApplePaySession.canMakePaymentsWithActiveCard(this.getApplePayMerchantId()).then(function(e) {
                e ? (n.addEventListener("click", o.requestPayment.bind(o)), o.controller.messageHandlers.add(a.a.events.RECEIVE_APPLE_PAY_VALID_MERCHANT, o.receiveApplePayValidMerchant.bind(o)), o.controller.messageHandlers.add(a.a.events.RECEIVE_APPLE_PAY_CARD_NONCE, o.receiveApplePayCardNonce.bind(o)), o.controller.sendEvent(a.a.events.LOAD_WALLET, a.a.wallets.APPLE_PAY), o.controller.enableMethod(a.a.wallets.APPLE_PAY, !0)) : o.controller.enableMethod(a.a.wallets.APPLE_PAY, !1)
            }).catch(function() {
                o.controller.enableMethod(a.a.wallets.APPLE_PAY, !1)
            })
        } else this.controller.enableMethod(a.a.wallets.APPLE_PAY, !1)
    }
    y.prototype.requestPayment = function() {
        if (!this.session) {
            var e = this,
                t = new f(this.callbacks.createPaymentRequest()).toApplePay(),
                n = ApplePaySession.supportsVersion(2) ? 2 : 1;
            this.session = new ApplePaySession(n, t), this.session.onvalidatemerchant = function(t) {
                e.requestApplePayMerchantValidity(t.validationURL)
            }, "function" == typeof this.callbacks.validateShippingContact && (this.session.onshippingcontactselected = function(n) {
                e._validateShippingContact(n.shippingContact, t)
            }), this.session.onpaymentauthorized = function(t) {
                e.requestApplePayCardNonce(t.payment)
            }, this.session.oncancel = function() {
                delete e.session
            }, this.session.begin()
        }
    }, y.prototype._validateShippingContact = function(e, t) {
        var n = [],
            o = "function" == typeof this.callbacks.validateShippingContact && this.callbacks.validateShippingContact(d.a.fromApplePay(e));
        if (!o) return this.session.completeShippingContactSelection(ApplePaySession.STATUS_SUCCESS, n, t.total, t.lineItems);
        if ("function" != typeof ApplePayError) return this.session.completeShippingContactSelection(ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS, n, t.total, t.lineItems);
        var i = {
                country: "countryCode",
                region: "administrativeArea",
                city: "locality",
                addressLines: "addressLines",
                postalCode: "postalCode"
            },
            r = Object.keys(o).map(function(e) {
                return new ApplePayError("shippingContactInvalid", i[e], o[e])
            });
        this.session.completeShippingContactSelection({
            errors: r,
            newShippingMethods: [],
            newTotal: t.total,
            newLineItems: t.lineItems
        })
    }, y.prototype.requestApplePayMerchantValidity = function(e) {
        this.controller.sendEvent(a.a.events.REQUEST_APPLE_PAY_MERCHANT_VALIDITY, {
            client_id: this.options.applicationId,
            location_id: this.options.locationId,
            validation_url: e,
            source_url: s.a.getWindow().location.href
        })
    }, y.prototype.receiveApplePayValidMerchant = function(e) {
        var t = {
            detail: "Unable to start Apple Pay session."
        };
        if (void 0 !== this.session) {
            if (e.payload.error) return this.callbacks.cardNonceResponseReceived([t]), void this.session.abort();
            var n;
            try {
                e.payload.session && (n = JSON.parse(e.payload.session))
            } catch (e) {
                this.options.errorLogger.capture(e)
            }
            n ? this.session.completeMerchantValidation(n) : (this.callbacks.cardNonceResponseReceived([t]), this.session.abort())
        }
    }, y.prototype.requestApplePayCardNonce = function(e) {
        this.controller.sendEvent(a.a.events.REQUEST_APPLE_PAY_CARD_NONCE, {
            client_id: this.options.applicationId,
            applepay_data: e
        })
    }, y.prototype.receiveApplePayCardNonce = function(e) {
        var t = e.payload.nonceResponse;
        if (t.errors) return this.session.completePayment(this.session.STATUS_FAILURE), this.controller.callbacks.cardNonceResponseReceived(t.errors), delete this.session, !1;
        this.session.completePayment(this.session.STATUS_SUCCESS);
        var n = d.a.fromApplePay(t.card.contact),
            o = d.a.fromApplePay(t.shipping_contact);
        delete t.card.contact, this.controller.callbacks.cardNonceResponseReceived(null, t.card_nonce, t.card, n, o), delete this.session
    }, y.prototype.getApplePayMerchantId = function() {
        var e = this.options.applicationId,
            t = s.a.getParentLocation().hostname;
        return /(squareupstaging|squareupsandbox)\.com$/.test(t) ? e = "merchant.com.squareup.sdktest" : /squareup\.com$/.test(t) && (e = "merchant.com.squareup.sdk"), e
    };
    var g = y;

    function b(e) {
        if (this.controller = e, this.options = e.options, this.callbacks = e.callbacks, this.token = null, this.jsLoaded = null, this.enableMethodCalled = !1, this.controller.enabledDigitalWallets.indexOf(a.a.wallets.GOOGLE_PAY) < 0) this.controller.enableMethod(a.a.wallets.GOOGLE_PAY, !1);
        else if (this.options.googlePay && "function" == typeof this.callbacks.createPaymentRequest && "function" == typeof this.callbacks.cardNonceResponseReceived) {
            var t = this.options.googlePay.elementId;
            if (this.element = s.a.getDocument().getElementById(t), !this.element) throw new i.a.ElementNotFoundError(t);
            if (!this.options.locationId) throw new i.a.MissingOptionError("locationId");
            this.fetchGooglePayJs(), this.controller.messageHandlers.add(a.a.events.RECEIVE_GOOGLE_PAY_CARD_NONCE, this.receiveGooglePayCardNonce.bind(this)), this.controller.messageHandlers.add(a.a.events.RECEIVE_GOOGLE_PAY_TOKEN, this.receiveGooglePayToken.bind(this)), this.controller.sendEvent(a.a.events.LOAD_WALLET, a.a.wallets.GOOGLE_PAY)
        } else this.controller.enableMethod(a.a.wallets.GOOGLE_PAY, !1)
    }
    b.prototype.fetchGooglePayJs = function() {
        var e = s.a.getDocument().createElement("script");
        e.onload = this.googlePayJsFetched.bind(this), e.src = a.a.GOOGLE_PAY_JS, s.a.getDocument().body.appendChild(e)
    }, b.prototype.googlePayJsFetched = function() {
        if ("undefined" != typeof google) {
            this.paymentsClient = new google.payments.api.PaymentsClient({
                environment: this.options.env.googlePayEnv
            });
            var e = this.googlePayLoaded.bind(this);
            this.paymentsClient.isReadyToPay(this.buildBaseConfiguration()).then(function(t) {
                t.result ? e(!0) : e(!1)
            }).catch(function() {
                e(!1)
            })
        } else this.googlePayLoaded(!1)
    }, b.prototype.googlePayLoaded = function(e) {
        this.jsLoaded = e, this.tryEnablingGooglePay()
    }, b.prototype.tryEnablingGooglePay = function() {
        !0 !== this.enableMethodCalled && (!1 === this.jsLoaded ? (this.controller.enableMethod(a.a.wallets.GOOGLE_PAY, !1), this.enableMethodCalled = !0) : !0 === this.jsLoaded && null !== this.token && (this.element.addEventListener("click", this.requestPayment.bind(this)), this.controller.enableMethod(a.a.wallets.GOOGLE_PAY, !0), this.enableMethodCalled = !0))
    }, b.prototype.requestPayment = function() {
        var e = new f(this.callbacks.createPaymentRequest()).toGooglePay(this);
        e.merchantInfo = {
            merchantId: "05498866192997955200",
            authJwt: this.token
        };
        var t = this.requestGooglePayCardNonce.bind(this);
        this.paymentsClient.loadPaymentData(e).then(function(n) {
            n.apiVersion == e.apiVersion && n.apiVersionMinor == e.apiVersionMinor && t(n)
        }).catch(function() {})
    }, b.prototype.receiveGooglePayToken = function(e) {
        var t = e.payload;
        t.errors || (this.token = t.token, this.tryEnablingGooglePay())
    }, b.prototype.requestGooglePayCardNonce = function(e) {
        this.controller.sendEvent(a.a.events.REQUEST_GOOGLE_PAY_CARD_NONCE, {
            googlepay_data: e
        })
    }, b.prototype.receiveGooglePayCardNonce = function(e) {
        var t = e.payload;
        if (t.errors) this.callbacks.cardNonceResponseReceived(t.errors);
        else {
            var n = d.a.fromGooglePay(t.billing_contact),
                o = d.a.fromGooglePay(t.shipping_contact);
            this.callbacks.cardNonceResponseReceived(null, t.card_nonce, t.card, n, o)
        }
    }, b.prototype.buildBaseConfiguration = function() {
        return {
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [{
                type: "CARD",
                parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["AMEX", "DISCOVER", "MASTERCARD", "VISA"]
                },
                tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                        gateway: "square",
                        gatewayMerchantId: this.options.locationId
                    }
                }
            }]
        }
    };
    var E = b;

    function v(e) {
        if (this.controller = e, this.options = e.options, this.controller.enabledDigitalWallets.indexOf(a.a.wallets.MASTERPASS) < 0) this.controller.enableMethod(a.a.wallets.MASTERPASS, !1);
        else if (this.options.masterpass && "function" == typeof this.controller.callbacks.createPaymentRequest && "function" == typeof this.controller.callbacks.cardNonceResponseReceived) {
            var t = this.options.masterpass.elementId;
            if (this.element = s.a.getDocument().getElementById(t), !this.element) throw new i.a.ElementNotFoundError(t);
            this.checkoutId = "", this.cartId = "", this.masterpassWindow = null, this.controller.messageHandlers.add(a.a.events.RECEIVE_MASTERPASS_TRANSACTION, this.receiveTransaction.bind(this)), this.controller.messageHandlers.add(a.a.events.SET_MASTERPASS_CHECKOUT_ID, this.setCheckoutId.bind(this)), this.controller.sendEvent(a.a.events.LOAD_WALLET, a.a.wallets.MASTERPASS)
        } else this.controller.enableMethod(a.a.wallets.MASTERPASS, !1)
    }
    v.prototype.setCheckoutId = function(e) {
        this.checkoutId = e.checkoutId, this.element.addEventListener("click", this._requestPayment.bind(this)), this.controller.enableMethod(a.a.wallets.MASTERPASS, !0)
    }, v.prototype._requestPayment = function() {
        if (!this.masterpassWindow || this.masterpassWindow.closed) {
            var e = this.controller.callbacks.createPaymentRequest();
            this.cartId = p.a.guid();
            var t = s.a.getWindow().screen.width / 2 - 510,
                n = s.a.getWindow().screen.height / 2 - 450;
            this.masterpassWindow = s.a.getWindow().open("", "Masterpass", "width=1000,height=800,left=" + t + ",top=" + n + ",screenX=" + t + ",screenY=" + n + ",toolbar=no,menubar=no,scrollbars=no,location=yes,directories=no");
            var o = this.masterpassWindow.document;
            this._buildWindowContent(this.options.env, e, o)
        } else this.masterpassWindow.focus()
    }, v.prototype._buildWindowContent = function(e, t, n) {
        var o = t.total.amount,
            i = t.currencyCode,
            r = e.serviceUrl(a.a.endpoints.MASTERPASS_CALLBACK + "?formId=" + this.controller.formId),
            s = {
                checkoutId: this.checkoutId,
                allowedCardTypes: ["visa", "masterCard", "discover", "amex"],
                amount: o,
                currency: i,
                suppress3Ds: !1,
                suppressShippingAddress: !t.requestShippingAddress,
                cartId: this.cartId,
                callbackUrl: r
            },
            l = n.createElement("script");
        l.setAttribute("type", "text/javascript"), l.innerText = "function start() { masterpass.checkout(".concat(JSON.stringify(s), "); }");
        var c = n.createElement("script");
        c.setAttribute("type", "text/javascript"), c.setAttribute("src", e.masterpassJsUrl), c.setAttribute("onload", "start()");
        var u = n.createElement("body");
        u.appendChild(l), u.appendChild(c), n.body = u
    }, v.prototype.receiveTransaction = function(e) {
        this.masterpassWindow && (this.masterpassWindow.close(), this.masterpassWindow = null);
        var t = e.payload;
        if ("success" !== t.status) return !1;
        this.controller.sendEvent(a.a.events.REQUEST_MASTERPASS_CARD_NONCE, {
            client_id: this.options.applicationId,
            masterpass_data: {
                transaction_id: t.transactionId,
                cart_id: this.cartId
            }
        })
    };
    var S = v;

    function N(e) {
        return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function C(e) {
        this.options = e, this.env = e.env, this.errorLogger = e.errorLogger, this.callbacks = this.options.callbacks, this.formId = p.a.guid(), this.hash = a.a.HASH, this.iframeControllers = {}, this.loadedIframes = [], this.loadedWallets = {}, this.digitalWallets = {}, this.messageBuffer = [], this.messageHandlers = new r.a, this.inputTypes = p.a.cloneObject(this.options.expectedInputTypes), this.inputTypes.GIFT_CARD || (this.digitalWallets = p.a.cloneObject(C.DIGITAL_WALLETS)), this.iframeNames = {}, this.inputTypes.MAIN_FRAME = "main", this.telemetry = new u.a({
            env: this.options.env,
            applicationId: this.options.applicationId,
            locationId: this.options.locationId
        })
    }
    C.RESIZE_TIMEOUT_MS = 250, C.DIGITAL_WALLETS = {
        applePay: g,
        googlePay: E,
        masterpass: S
    }, C.prototype.build = function() {
        0 < Object.keys(this.iframeControllers).length || (this.injectMainFrame(), this._buildAt = Date.now(), this.buildIframeControllers(), this.addPostMessageEventListeners(), this.addResizeEventListener())
    }, C.prototype.pluginShim = function() {
        var e = this;
        return {
            options: this.options,
            formId: this.formId,
            enabledDigitalWallets: this.enabledDigitalWallets || "",
            callbacks: this.callbacks,
            messageHandlers: this.messageHandlers,
            enableMethod: this.enableMethod.bind(this),
            sendEvent: function(t, n) {
                e.sendIframeMessage({
                    eventName: t,
                    payload: n
                })
            }
        }
    }, C.prototype.injectMainFrame = function() {
        var e = s.a.getDocument().createElement("div"),
            t = this.formId;
        e.id = t, s.a.getDocument().body.appendChild(e), this.options.main = {
            elementId: t
        }
    }, C.prototype.enableMethod = function(e, t) {
        var n = {};
        (n[e] = t) || delete this.loadedWallets[e], this.callbacks && "function" == typeof this.callbacks.methodsSupported && this.callbacks.methodsSupported(n)
    }, C.prototype.buildIframeControllers = function() {
        for (var e in this.inputTypes) {
            var t = this.inputTypes[e];
            this.buildIframeController(t)
        }
    }, C.prototype.getContainerElement = function(e) {
        var t = s.a.getDocument().getElementById(e);
        if (!t) throw new i.a.ElementNotFoundError(e);
        if (e !== this.options.main.elementId) {
            var n = t.innerHTML;
            t.innerHTML = "!";
            var o = t.offsetHeight;
            t.innerHTML = n, o <= 0 && s.a.getWindow().console.warn(new i.a.ElementNotVisibleError(e))
        }
        return t
    }, C.prototype.buildIframeController = function(e) {
        var t = this.options[e].elementId,
            n = this.getContainerElement(t),
            o = p.a.cloneObject(this.options[e]);
        o.inputClass = this.options.inputClass, o.inheritedClassName = n.className, o.env = this.env, o.applicationId = this.options.applicationId, o.locationId = this.options.locationId, this.iframeControllers[e] = new c(e, o, this.iframeCallbacks()), this.iframeNames[e] = this.iframeControllers[e].name(), (this.iframeControllers[e].originalElement = n).parentElement.replaceChild(this.iframeControllers[e].element, n)
    }, C.prototype.destroy = function() {
        for (var e in this.removePostMessageEventListeners(), this.removeTouchStartEventListener(), this.removeResizeEventListener(), this.iframeControllers) this.iframeControllers[e].destroy(), delete this.iframeControllers[e]
    }, C.prototype.iframeCallbacks = function() {
        return {
            onload: function(e) {
                this.addLoadedFrame(e)
            }.bind(this)
        }
    }, C.prototype.addLoadedFrame = function(e) {
        -1 === this.loadedIframes.indexOf(e) && this.loadedIframes.push(e), this.loadedIframes.length === Object.keys(this.inputTypes).length && this.loadFormController()
    }, C.prototype.addLogoIframe = function() {
        var e = s.a.getDocument().createElement("iframe");
        e.src = this.env.serviceUrl(a.a.endpoints.LOGO, "?s=" + encodeURIComponent(this.sessionId || "")), e.id = "sq-logo", e.width = "0", e.height = "0", e.frameBorder = "0", e.tabIndex = "-1";
        var t = this.iframeControllers.postalCode.element;
        t.parentNode.insertBefore(e, t.nextSibling)
    }, C.prototype.receiveMessageCallback = function(e) {
        if (e.origin === this.env.serviceUrl() && e.data.formId === this.formId) {
            switch (e.data.eventName) {
                case a.a.events.CARD_NONCE_RESPONSE_RECEIVED:
                    this.options.callbacks && "function" == typeof this.options.callbacks.cardNonceResponseReceived && this.options.callbacks.cardNonceResponseReceived(e.data.value.errors, e.data.value.card_nonce, e.data.value.card, e.data.value.billing_contact, e.data.value.shipping_contact);
                    break;
                case a.a.events.INPUT_EVENT_RECEIVED:
                    var t = this.iframeControllers[e.data.inputEvent.field];
                    switch (e.data.inputEvent.eventType) {
                        case a.a.inputEvents.ERROR_CLASS_ADDED:
                            var n = this.classNameForClassType("error");
                            t.addClass(n);
                            break;
                        case a.a.inputEvents.ERROR_CLASS_REMOVED:
                            var o = this.classNameForClassType("error");
                            t.removeClass(o);
                            break;
                        case a.a.inputEvents.FOCUS_CLASS_ADDED:
                            var r = this.classNameForClassType("focus");
                            t.addClass(r);
                            break;
                        case a.a.inputEvents.FOCUS_CLASS_REMOVED:
                            var s = this.classNameForClassType("focus");
                            t.removeClass(s)
                    }
                    this.options.callbacks && "function" == typeof this.options.callbacks.inputEventReceived && this.options.callbacks.inputEventReceived(e.data.inputEvent);
                    break;
                case a.a.events.SET_INPUT_HEIGHT:
                    var l = this.iframeControllers[e.data.inputType].element,
                        u = Math.max(e.data.inputHeight, c.MIN_HEIGHT);
                    l.setAttribute("height", u), 0 !== e.data.inputHeight || this._inputHeightError || (this._inputHeightError = !0, this.errorLogger.capture(new i.a.InputHeightZeroError));
                    break;
                case a.a.events.PAYMENT_FORM_LOADED:
                    this._loadedAt = Date.now(), this.sessionId = e.data.sessionId, this.telemetry.set("sessionId", this.sessionId), this.addTouchStartEventListener(), this.enabledDigitalWallets = e.data.enabledDigitalWallets;
                    var d = this.pluginShim();
                    for (var h in this.digitalWallets) this.loadedWallets[h] = new this.digitalWallets[h](d);
                    var m = this._loadedAt - this._buildAt;
                    for (this.telemetry.collectLoadTiming({
                            tti: m
                        }), this.telemetry.collectConfiguration(p.a.cloneObject(this.options)), this.options.callbacks && "function" == typeof this.options.callbacks.paymentFormLoaded && this.options.callbacks.paymentFormLoaded(); 0 < this.messageBuffer.length;) this.sendIframeMessage(this.messageBuffer.pop())
            }
            this.messageHandlers.handle(e.data.eventName, e.data)
        }
    }, C.prototype.updateStylesOnResize = function() {
        clearTimeout(this.fireOnResizeEnd), this.fireOnResizeEnd = setTimeout(this.buildStylesForScreenWidth.bind(this), C.RESIZE_TIMEOUT_MS)
    }, C.prototype.addPostMessageEventListeners = function() {
        this._messageCallback = this.receiveMessageCallback.bind(this), s.a.getWindow().addEventListener("message", this._messageCallback)
    }, C.prototype.removePostMessageEventListeners = function() {
        s.a.getWindow().removeEventListener("message", this._messageCallback)
    }, C.prototype.addTouchStartEventListener = function() {
        this._touchstartCallback = function() {
            this._touchStarted = !0
        }.bind(this), this._touchendCallback = function() {
            this._touchStarted && this.blurAllInputs(), this._touchStarted = !1
        }.bind(this), this._touchmoveCallback = function() {
            this._touchStarted = !1
        }.bind(this), this._touchcancelCallback = this._touchmoveCallback, s.a.getWindow().addEventListener("touchstart", this._touchstartCallback), s.a.getWindow().addEventListener("touchend", this._touchendCallback), s.a.getWindow().addEventListener("touchmove", this._touchmoveCallback), s.a.getWindow().addEventListener("touchcancel", this._touchcancelCallback)
    }, C.prototype.removeTouchStartEventListener = function() {
        s.a.getWindow().removeEventListener("touchstart", this._touchstartCallback), s.a.getWindow().removeEventListener("touchend", this._touchendCallback), s.a.getWindow().removeEventListener("touchmove", this._touchmoveCallback), s.a.getWindow().removeEventListener("touchcancel", this._touchcancelCallback)
    }, C.prototype.addResizeEventListener = function() {
        this._resizeCallback = this.updateStylesOnResize.bind(this), s.a.getWindow().addEventListener("resize", this._resizeCallback)
    }, C.prototype.removeResizeEventListener = function() {
        s.a.getWindow().removeEventListener("resize", this._resizeCallback), clearTimeout(this.fireOnResizeEnd)
    }, C.prototype.classNameForClassType = function(e) {
        return this.options.inputClass + "--" + e
    }, C.prototype.sendIframeMessage = function(e) {
        var t = this.iframeControllers[this.inputTypes.MAIN_FRAME].element.contentWindow;
        if (t)
            if (e.formId = this.formId, -1 !== this.loadedIframes.indexOf(this.inputTypes.MAIN_FRAME)) {
                var n = this.env.serviceUrl();
                t.postMessage(e, n)
            } else this.messageBuffer.push(e);
        else s.a.getWindow().console.warn(new i.a.IframeDoesNotExistError)
    }, C.prototype.loadFormController = function() {
        var e = {
                envName: this.env.name,
                applicationId: this.options.applicationId,
                locationId: this.options.locationId,
                websiteUrl: this.options.websiteUrl,
                hostOrigin: s.a.getOrigin(),
                inputStyles: this.options.inputStyles,
                inputTypes: this.options.expectedInputTypes,
                hash: this.hash,
                autoFill: this.options.autoFill,
                googlePayTokenUrl: s.a.getDocument().location.href
            },
            t = this;
        Object.keys(this.inputTypes).forEach(function(n) {
            var o = t.inputTypes[n];
            e[o] = t.options[o]
        });
        var n = {
            eventName: a.a.events.LOAD_FORM_CONTROLLER,
            iframes: this.iframeNames,
            options: e,
            initialScreenWidth: s.a.getWindow().innerWidth
        };
        this.sendIframeMessage(n)
    }, C.prototype.requestCardNonceIfValidForm = function() {
        this.sendIframeMessage({
            eventName: a.a.events.REQUEST_CARD_NONCE_IF_VALID_FORM
        })
    }, C.prototype.buildStylesForScreenWidth = function() {
        this.sendIframeMessage({
            eventName: a.a.events.BUILD_STYLES_FOR_SCREEN_WIDTH,
            screenWidth: s.a.getWindow().innerWidth
        })
    }, C.prototype.blurAllInputs = function() {
        this.sendIframeMessage({
            eventName: a.a.events.BLUR_ALL_INPUTS
        })
    }, C.prototype.setPostalCode = function(e) {
        var t = N(e);
        "string" !== t && "number" !== t || this.sendIframeMessage({
            eventName: a.a.events.SET_POSTAL_CODE,
            postalCode: "" + e
        })
    }, C.prototype.hasLoaded = function() {
        return !!this._loadedAt
    };
    var A = C,
        _ = n(6);

    function I(e) {
        this.options = e, this.env = Object(_.a)(e ? e.env : "production"), this.env.name != a.a.SERVER_ENV && s.a.getWindow().console.warn("Requested environment (" + this.env.name + ") does not match server environment (" + a.a.SERVER_ENV + "). Unexpected behaviour may occur due to mismatched environments."), this.errorLogger = new o.a({
            applicationId: this.options && this.options.applicationId,
            captureUncaughtExceptions: new RegExp(this.env.jsUrl()),
            source: "SqPaymentForm",
            env: this.env
        });
        var t = this.validateOptions(this.options);
        if (t) throw this.errorLogger.capture(t), t;
        if (0 === this.options.applicationId.indexOf("sandbox-") && s.a.getWindow().console.info("SqPaymentForm initialized in Sandbox Mode. See https://docs.connect.squareup.com/articles/using-sandbox/"), !p.a.embeddingAllowed(this.env, s.a.getWindow().location)) {
            var n = new i.a.HttpsRequiredError;
            throw this.errorLogger.capture(n), n
        }
        var r = p.a.cloneObject(this.options);
        r._env = this.options.env, r.env = this.env, r.errorLogger = this.errorLogger, this.clientController = new A(r), !1 !== this.options.autoBuild && (this._handleDomContentLoaded = this.build.bind(this), p.a.isIE10() ? s.a.getWindow().addEventListener("load", this._handleDomContentLoaded) : "loading" === s.a.getReadyState() && s.a.getDocument().addEventListener("DOMContentLoaded", this._handleDomContentLoaded))
    }
    I.isSupportedBrowser = p.a.isSupportedBrowser.bind(null), I.prototype.build = function() {
        if (this.detachLoadEvent(), this.build = function() {
                var e = new i.a.FormAlreadyBuiltError;
                throw this.errorLogger.capture(e), e
            }, !p.a.isSupportedBrowser()) return this.errorLogger.capture(new i.a.UnsupportedBrowserError), void(this.options.callbacks && "function" == typeof this.options.callbacks.unsupportedBrowserDetected && this.options.callbacks.unsupportedBrowserDetected());
        try {
            this.clientController.build()
        } catch (e) {
            throw this.errorLogger.capture(e), e
        }
    }, I.prototype.destroy = function() {
        this.detachLoadEvent(), this.clientController && (this.clientController.destroy(), this.clientController = null), this.errorLogger.destroy(), this.errorLogger = null, this.build = function() {
            throw new i.a.FormAlreadyDestroyedError("build")
        }, this.requestCardNonce = function() {
            throw new i.a.FormAlreadyDestroyedError("requestCardNonce")
        }
    }, I.prototype.requestCardNonce = function() {
        if (!this.clientController.hasLoaded()) {
            var e = new i.a.FormNotReadyError("requestCardNonce");
            throw this.errorLogger.capture(e), e
        }
        this.clientController.requestCardNonceIfValidForm()
    }, I.prototype.recalculateSize = function() {
        this.clientController.buildStylesForScreenWidth()
    }, I.prototype.setPostalCode = function(e) {
        this.clientController.setPostalCode(e)
    }, I.prototype.focus = function(e) {
        var t, n = !1;
        for (var o in this.clientController.inputTypes)
            if (e == this.clientController.inputTypes[o]) {
                n = !0;
                break
            }
        if (n ? this.clientController.hasLoaded() || (t = new i.a.FormNotReadyError("focus")) : t = new i.a.InvalidFieldError(e), t) throw this.errorLogger.capture(t), t;
        this.clientController.iframeControllers[e].focus()
    }, I.prototype.detachLoadEvent = function() {
        this._handleDomContentLoaded && (s.a.getDocument().removeEventListener("DOMContentLoaded", this._handleDomContentLoaded), s.a.getWindow().removeEventListener("load", this._handleDomContentLoaded), this._handleDomContentLoaded = null)
    }, I.prototype.validateOptions = function(e) {
        if (!e) return new i.a.MissingArgumentError("options");
        if ("[object Object]" !== Object.prototype.toString.call(e)) return new i.a.InvalidArgumentError("options", "object");
        if (!e.applicationId) return new i.a.MissingOptionError("applicationId");
        var t = !!e[a.a.inputTypes.GIFT_CARD],
            n = this.fieldsRequested(e, this.getCardFormFields()),
            o = this.fieldsRequested(e, Object.keys(A.DIGITAL_WALLETS)),
            r = this.paymentMethodsRequested(t, n, o);
        if (t || 0 < n.length) {
            if (!e.inputClass) return new i.a.MissingOptionError("inputClass");
            if (-1 !== e.inputClass.indexOf(" ")) return new i.a.InvalidOptionError("inputClass")
        }
        if (!e.callbacks) return new i.a.MissingOptionError("callbacks");
        if (!e.callbacks.cardNonceResponseReceived) return new i.a.MissingCallbackError("cardNonceResponseReceived");
        if ("function" != typeof e.callbacks.cardNonceResponseReceived) return new i.a.InvalidCallbackError("cardNonceResponseReceived");
        if (0 === r.length) return new i.a.MissingPaymentMethodError;
        if (1 < r.length && t) {
            var s = n.concat(o);
            return new i.a.UnexpectedInputTypeError(s[0])
        }
        var l = {};
        for (var c in t ? l = {
                GIFT_CARD: a.a.inputTypes.GIFT_CARD
            } : 0 < n.length && delete(l = p.a.cloneObject(a.a.inputTypes)).GIFT_CARD, this.options.expectedInputTypes = l) {
            var u = l[c],
                d = this.validateInputType(u, e);
            if (d) return d
        }
        if (0 < o.length) {
            if (!e.callbacks.createPaymentRequest) return new i.a.MissingCallbackError("createPaymentRequest");
            if ("function" != typeof e.callbacks.createPaymentRequest) return new i.a.InvalidCallbackError("createPaymentRequest");
            if (!e.callbacks.methodsSupported) return new i.a.MissingCallbackError("methodsSupported");
            if ("function" != typeof e.callbacks.methodsSupported) return new i.a.InvalidCallbackError("methodsSupported")
        }
        return e.inputStyles && !Array.isArray(e.inputStyles) ? new i.a.InvalidInputStylesError : void 0 !== e.autoBuild && "boolean" != typeof e.autoBuild ? new i.a.InvalidOptionType("autoBuild") : void 0 !== e.autoFill && "boolean" != typeof e.autoFill ? new i.a.InvalidOptionType("autoFill") : void 0
    }, I.prototype.getCardFormFields = function() {
        var e = p.a.cloneObject(a.a.inputTypes);
        return delete e.GIFT_CARD, p.a.objectValues(e)
    }, I.prototype.fieldsRequested = function(e, t) {
        var n = [];
        return t.forEach(function(t) {
            e[t] && n.push(t)
        }), n
    }, I.prototype.paymentMethodsRequested = function(e, t, n) {
        var o = [];
        return e && o.push(a.a.inputTypes.GIFT_CARD), 0 < t.length && o.push(a.a.inputTypes.CARD_NUMBER), o.push.apply(o, n), o
    }, I.prototype.validateInputType = function(e, t) {
        if (e !== a.a.inputTypes.POSTAL_CODE || !1 !== t[e]) return t[e] ? t[e].elementId ? void 0 : new i.a.MissingElementIdError(e) : new i.a.MissingInputTypeError(e);
        delete this.options.expectedInputTypes.POSTAL_CODE
    };
    var P = I;
    s.a.getWindow().SqPaymentForm = P
}]);