(function() {
    function r(e, n, t) {
        function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} };
                e[i][0].call(p.exports, function(r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]); return o } return r })()({
    1: [function(require, module, exports) {
        "use strict";
        var Event = require("./libs/event.js"),
            Dom = require("./libs/dom.js"),
            Utils = require("./libs/utils.js");
        ! function(e) { Event.addEvent(document, "click", function(t) { var n = t.target || t.srcElement; switch (Utils.isOnline() && Utils.hideErrorMessage("error-offline"), n.tagName) {
                    case "A":
                        break;
                    case "INPUT":
                    case "BUTTON":
                        if ("submit" !== n.getAttribute("type")) return;
                        window.lastClickedSubmitButton = n; break;
                    default:
                        return }!Utils.isOnline() && e.isASDK && (t.preventDefault(), t.stopPropagation(), n.blur(), Utils.showNetworkError()) }); var t = !1; try { t = document.querySelector(".form-input-container input:not(:placeholder-shown) ~ label") } catch (e) { t = !1 } if (!t) { var n, r = document.querySelectorAll(".form-input-container input"),
                    o = 0; for (o = 0; o < r.length; o += 1) n = r[o], Event.addEvent(n, "blur", function(e) { e.target.value ? Dom.addClass(n, "used") : Dom.removeClass(n, "used") }) } var a = document.body,
                s = document.querySelector && document.querySelector(".vznativemail .vz-challenge .bottom-container"); if (a && s) { var i = function() { var e = a.scrollHeight - 1,
                        t = a.offsetHeight + Math.max(parseInt(a.scrollTop), parseInt(window.pageYOffset - 1)),
                        n = Dom.containsClass(s, "shadow");
                    t < e ? !n && Dom.addClass(s, "shadow") : n && Dom.removeClass(s, "shadow") };
                i(), Event.addEvent(a, "scroll", i), Event.addEvent(window, "resize", i) } Event.addEvent(document, "DOMContentLoaded", function() { try { Utils.trackRapidElements() } catch (e) {} }) }(window);
    }, { "./libs/dom.js": 5, "./libs/event.js": 6, "./libs/utils.js": 10 }],
    2: [function(require, module, exports) {
        "use strict";
        ! function(r) { var e, i = r.comscoreBeaconUrl,
                t = r.document;
            i && (t.images ? (e = new Image(1, 1), e.src = i, e.setAttribute("referrerpolicy", "origin")) : t.write("<", "p", "><", 'img src="', i, '" height="1" width="1" alt="*" referrerpolicy="origin"', "><", "/p", ">")) }(window);
    }, {}],
    3: [function(require, module, exports) {
        "use strict";
        var events = require("./libs/event.js"),
            dom = require("./libs/dom.js"),
            utils = require("./libs/utils.js");
        ! function(e) {
            function n() { return (new Date).getTime() }

            function t() { if (!A) { var e = g && $sf.host.get(a),
                        n = document.getElementById("login-info-box"),
                        t = document.getElementsByTagName("body");
                    e || (n && (n.style.display = "block"), t && dom.addClass(t[0], "dark-bg")), A = !0 } }

            function o() { var e = !1; try { e = DARLA.prefetched() || !1 } catch (n) { e = !1 } return e }

            function i(e) { return e && e.length || 0 }

            function r(e) { var r = o(),
                    d = i(r),
                    l = !1,
                    s = n(),
                    c = ""; if (0 === d && !1 === r) return void t();
                e ? (c = r.join(","), -1 === c.indexOf(e) || DARLA.inProgress() || (l = DARLA.render(e))) : d && !DARLA.inProgress() && (l = DARLA.render(r)), l || u(s) }

            function u(e) { i(o()) ? f && f > m && e > f ? (DARLA.render.RenderMgr.nuke(a), DARLA.abort(), t()) : setTimeout(r, 10) : g || t() }

            function d() { if (null !== R) { try { e.clearInterval(R); var n = document.getElementById("login-info-box"); "on" === utils.getAdBlockerState() && n && (n.style.display = "block") } catch (e) { return !1 } R = null } }

            function l() { if (s.positions.RICH && s.positions.RICH.timeout) { var t = e.pageStartTime,
                        o = n() - t,
                        i = s.positions.RICH.timeout; return null !== v ? void d() : o >= i ? void d() : void(null === R && (R = e.setInterval(l, 100))) } } var s = e.darlaConfig,
                c = s && s.url; if (s) { if (document.getElementById("login-ad-rich")) { var a = "RICH",
                        m = null,
                        f = null,
                        v = null,
                        g = !1,
                        A = !1;
                    delete s.url, s.renderTimeout = 18e3, s.onFinishParse = function() {}, s.onFailure = function() { r() }, s.onRenderTimeout = function() { r() }, s.onFinishPosRender = function(e, t, o) { o && e && e === a && !g && (g = !0, v = n()) }, s.onSuccess = function() { setTimeout(r, 10) }; var R = null,
                        b = window.opener && window.opener !== window,
                        y = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    b = b || dom.containsClass(document.body, "resp") && y < 640, !b && events.addEvent(document, "DOMContentLoaded", function() { e.DARLA_CONFIG = s, m = n(), f = m + 18e3, l(); var t = document.createElement("script");
                        t.setAttribute("src", c), document.body.appendChild(t) }) } } }(window);
    }, { "./libs/dom.js": 5, "./libs/event.js": 6, "./libs/utils.js": 10 }],
    4: [function(require, module, exports) {
        "use strict";

        function Ajax() {} Ajax.prototype.send = function(e, t, s, r) { this._xhr = new XMLHttpRequest || new window.ActiveXObject("Microsoft.XMLHTTP"); var n, h = this;
            n = s.body, this._xhr.open(e, t, !0), "POST" === e && this._xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded; charset=UTF-8"), s.bucket && this._xhr.setRequestHeader("bucket", s.bucket), this._xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"), this._xhr.onreadystatechange = function() { if (4 === h._xhr.readyState) { var e = { statusCode: h._xhr.status, responseText: h._xhr.responseText }; return void r(null, e) } }, this._xhr.send(n) }, module.exports = Ajax;
    }, {}],
    5: [function(require, module, exports) {
        "use strict";
        var testObj = document.getElementsByTagName("body")[0],
            hasClassList = "classList" in testObj,
            domLib = { containsClass: function(s, a) { return s.classList.contains(a) }, addClass: function(s, a) { this.containsClass(s, a) || s.classList.add(a) }, removeClass: function(s, a) { this.containsClass(s, a) && s.classList.remove(a) }, replaceClass: function(s, a, t) { this.containsClass(s, a) && s.classList.remove(a), s.classList.add(t) } };
        hasClassList || (domLib = { containsClass: function(s, a) { return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(s.className) }, addClass: function(s, a) { if (!this.containsClass(s, a)) { var t = s.className;
                    s.className = t ? [t, a].join(" ") : a } }, removeClass: function(s, a) { if (this.containsClass(s, a)) { var t = s.className;
                    s.className = t.replace(new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)", "g"), "") } }, replaceClass: function(s, a, t) { var n = s.className;
                this.containsClass(s, a) && (n = n.replace(new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)", "g"), "")), s.className = n ? [n, t].join(" ") : t } }), module.exports = domLib;
    }, {}],
    6: [function(require, module, exports) {
        "use strict";
        var events = {};
        document.addEventListener && (document.addEventListener("touchstart", function() {}, !1), events.addEvent = function(n, e, t) { var c = [].slice.call(arguments, 3);
                n.addEventListener(e, function(n) { t.apply(this, [n].concat(c)) }, !1) }), "createEvent" in document && (events.fireOnChange = function(n) { var e = document.createEvent("HTMLEvents");
                e.initEvent("change", !1, !0), n.dispatchEvent(e) }),
            function() { events.addEvent || (events.addEvent = function(n, e, t) { var c = [].slice.call(arguments, 3);
                    document.attachEvent && n.attachEvent("on" + e, function(n) { t.apply(this, [n].concat(c)) }) }), events.fireOnChange || (events.fireOnChange = function(n) { n.fireEvent("onchange") }) }(), module.exports = events;
    }, {}],
    7: [function(require, module, exports) {
        "use strict";

        function getFieldValue(e) { var t, i, s; if (e.name && !e.disabled) switch (i = encodeURIComponent(e.name) + "=", s = encodeURIComponent(e.value), e.type) {
                case "select-one":
                    return e.selectedIndex > -1 && (t = e.options[e.selectedIndex], i + encodeURIComponent(t.attributes.value && t.attributes.value.specified ? t.value : t.text));
                case "radio":
                case "checkbox":
                    if (e.checked) return i + s;
                case "select-multiple":
                case "file":
                case "reset":
                case "button":
                case void 0:
                    return !1;
                case "submit":
                    if (e !== window.lastClickedSubmitButton) return !1;
                default:
                    return i + s }
            return !1 }

        function serializeFormFields(e) { var t, i, s = [],
                l = e && e.elements.length || 0; for (i = 0; i < l; i += 1)(t = getFieldValue(e.elements[i])) && s.push(t); return s.join("&") } module.exports = { getFieldValue: getFieldValue, serializeFormFields: serializeFormFields };
    }, {}],
    8: [function(require, module, exports) {
        "use strict";

        function getValueFromEvt(e) { return (e.target || e.srcElement).value }

        function InlineCountryDropDown(e, o) { var t = this;
            this.rootNode = "string" == typeof e ? document.getElementById(e) : e, void 0 !== this.rootNode && (this.buildOptions(o), this.setUpUIComponents(o), this.dropDownEnabled = !!this.isDropDownHideDisabled, this.installListeners(), setTimeout(function() { t.updateInputField(t.inputField.value) }, 1e3)) }
        var events = require("./event.js"),
            phoneNumberFormatter = require("./phoneNumberFormatter.js"),
            phoneNumberRegex = /[^+(\-) 0-9]+/g,
            charsAtPhoneNumberRegex = /[(\-) ]+/g,
            digitsLengthClassRegex = /code-of-length-\d/gi,
            dom = require("./dom.js"),
            updateInputFieldIcon = function(e, o, t) { if (e) { if (!t && o.value.length > 0) return dom.replaceClass(e, "x-mobile-icon", "email-icon"), dom.removeClass(e, "hide"), void dom.addClass(o, "show-icon"); if (t && o.value.length >= 5) return dom.replaceClass(e, "email-icon", "x-mobile-icon"), dom.removeClass(e, "hide"), void dom.addClass(o, "show-icon");
                    dom.addClass(e, "hide"), dom.removeClass(o, "show-icon") } };
        InlineCountryDropDown.prototype.setUpUIComponents = function(e) { var o = e.countryCodeDropDownContainer || "country-dropdown-container",
                t = e.selectedCountryCodeContainer || "selected-country-code-cont",
                n = e.selectedCountryCodeElement || "selected-country-code",
                r = e.inputField || "login-username";
            this.countryDropDownCont = document.getElementById(o), this.countryDropDown = this.countryDropDownCont.getElementsByTagName("select")[0], this.selectedCountryCodeCont = document.getElementById(t), this.selectedCountryCodeElem = document.getElementById(n), this.selectedCountryCode = this.countryDropDown.options[this.countryDropDown.selectedIndex].getAttribute("data-code"), this.inputField = document.getElementById(r), this.inputFieldIcon = document.getElementById("username-field-icon") }, InlineCountryDropDown.prototype.buildOptions = function(e) { e && (this.isDropDownHideDisabled = e.noHide, this.countryCodesMap = e.countryCodesMap || {}) }, InlineCountryDropDown.prototype.updateInputField = function(e, o) { var t = !e.match(phoneNumberRegex); if (updateInputFieldIcon(this.inputFieldIcon, this.inputField, t), !this.enforceCountryCodeDropDown && (!t || e.length < 5 || "+" === e.charAt(0) && e.length < 6)) return this.dropDownEnabled && !this.isDropDownHideDisabled && this.disableCountryDropDown(), !1;
            this.dropDownEnabled || (this.inputField.value = this.stripCountryCodeFromPhoneNumber(e, this.selectedCountryCode), this.enableCountryDropDown()), phoneNumberFormatter(o, this.inputField, this.selectedCountryCodeElem, this.countryDropDown) }, InlineCountryDropDown.prototype.installListeners = function() { var e = this;
            events.addEvent(this.countryDropDown, "change", function(o) { var t, n = e.rootNode.className;
                e.selectedCountryCode = e.countryDropDown.options[e.countryDropDown.selectedIndex].getAttribute("data-code"), t = e.selectedCountryCode.length, n = n.replace(digitsLengthClassRegex, ""), n += " code-of-length-" + (t - 1), e.rootNode.className = n, phoneNumberFormatter(o, e.inputField, e.selectedCountryCodeElem, e.countryDropDown) }), events.addEvent(this.inputField, "keyup", function(o) { e.updateInputField(getValueFromEvt(o), o) }), events.addEvent(this.inputField, "change", function(o) { e.updateInputField(getValueFromEvt(o), o) }) }, InlineCountryDropDown.prototype.setDropDownValue = function(e) { for (var o in this.countryDropDown.options)
                if (this.countryDropDown.options.hasOwnProperty(o) && this.countryDropDown.options[o].value === e) return this.countryDropDown.options[o].selected = !0, void events.fireOnChange(this.countryDropDown) }, InlineCountryDropDown.prototype.stripCountryCodeFromPhoneNumber = function(e, o) { var t, n; if ("+" === e.charAt(0))
                for (n in this.countryCodesMap)
                    if (t = this.countryCodesMap[n], 0 === e.indexOf(t)) return t !== o && this.setDropDownValue(n), e.substring(t.length, e.length); return e }, InlineCountryDropDown.prototype.enableCountryDropDown = function() { this.dropDownEnabled = !0, dom.replaceClass(this.rootNode, "cci-dropdown-disabled", "cci-dropdown"), dom.removeClass(this.selectedCountryCodeCont, "hide"), dom.removeClass(this.countryDropDownCont, "hide"), dom.addClass(this.inputField, "ltr"), this.countryDropDown.disabled = !1 }, InlineCountryDropDown.prototype.disableCountryDropDown = function() { this.dropDownEnabled = !1, dom.replaceClass(this.rootNode, "cci-dropdown", "cci-dropdown-disabled"), dom.addClass(this.selectedCountryCodeCont, "hide"), dom.addClass(this.countryDropDownCont, "hide"), dom.removeClass(this.inputField, "ltr"), this.inputField.value = this.inputField.value.replace(charsAtPhoneNumberRegex, ""), this.countryDropDown.disabled = !0 }, module.exports = InlineCountryDropDown;
    }, { "./dom.js": 5, "./event.js": 6, "./phoneNumberFormatter.js": 9 }],
    9: [function(require, module, exports) {
        "use strict";
        var notNumberRegex = /\D/g,
            numberPlaceholderRegex = /X/g,
            formatCharsRegex = /[\(\-\)\s]/,
            utils = require("./utils.js"),
            phoneNumberFormatter = function(e, t, r, u) { var a, l = t.value,
                    o = u.options[u.selectedIndex],
                    n = l.replace(notNumberRegex, ""),
                    i = o.getAttribute("data-format"); if (r.innerHTML = o.getAttribute("data-code"), i && n.length) { var s = n.split(""),
                        m = -1;
                    i = i.replace(numberPlaceholderRegex, function(e) { return m += 1, s[m] || e }), a = i.split("X")[0], n = a || n } n !== t.value && (!e || e.keyCode !== utils.KEYMAP.BACKSPACE_KEY && e.keyCode !== utils.KEYMAP.IOS_SIMULATOR_BS && e.keyCode !== utils.KEYMAP.ANDROID_PLACEHOLDER || null === n[n.length - 1].match(formatCharsRegex)) && (t.value = n) };
        module.exports = phoneNumberFormatter;
    }, { "./utils.js": 10 }],
    10: [function(require, module, exports) {
        "use strict";

        function parseJsonResponseText(e) { var r; try { r = JSON.parse(e.responseText) } catch (e) {} return r }

        function showErrorMessageOnAjax(e, r, t) { var n, o = document.getElementById(r),
                a = document.getElementById(t);
            o && e.render && e.render.error && (o.setAttribute("data-error", e.render.error), (n = e.render.errorMsg) && ("messages.ERROR_INVALID_COOKIE" === e.render.error && e.render.cookieHelpUrl && (n += ' <a href="' + e.render.cookieHelpUrl + '">' + e.render.cookieHelpTextMsg + "</a>"), o.innerHTML = n.replace(searchLastWordRegex, " $1"), Dom.removeClass(o, "hide"), a && Dom.addClass(a, "field-error"))) }

        function hideErrorMessage(e, r) { var t = document.getElementById(e),
                n = document.getElementById(r);
            t && (t.setAttribute("data-error", ""), Dom.addClass(t, "hide")), n && Dom.containsClass(n, "field-error") && (n.setAttribute("aria-invalid", "false"), Dom.removeClass(n, "field-error")) }

        function isOnline() { var e = !0; return navigator && void 0 !== navigator.onLine && (e = navigator.onLine), void 0 !== window.onLineStatus ? window.onLineStatus : e }

        function showNetworkError() { var e = document.getElementById("error-offline");
            e && Dom.removeClass(e, "hide") }

        function endsWith(e, r) { return e.slice(-r.length) === r }

        function cleanUpUrl(e) { return e.replace("&&", "&").replace("?&", "?").replace(REGEX_CLEANUP_URL, "") }

        function getAdBlockerState() { var e, r = document.getElementById("ad"); return window.getComputedStyle && r ? (e = window.getComputedStyle(r, null), "none" === e.getPropertyValue("display") ? "on" : "off") : "unknown" }

        function parseDataYlk(e) { var r = {}; if (!e) return r; for (var t = e.split(";"), n = 0, o = t.length; n < o; n++) { var a = t[n].split(":"); if (2 === a.length) { var s = a[0],
                        i = a[1];
                    s && i && (r[s] = i) } } return r }

        function rapidBeaconClick(e, r) { r.intrctn = e, r.corActn = e, r.mKey = r.mKey || mKeyPrefix, r.slk = r.slk || "DEFAULT", rapidInstance.beaconClick(I13N_config.keys.p_sec, r.slk, "1", r) }

        function trackRapidElements() { if ("undefined" != typeof rapidInstance) { var e = document.querySelectorAll('[data-rapid-tracking="true"]');
                Array.prototype.forEach.call(e, function(e) { var r; switch (e.type) {
                        case "TEXT":
                        case "SELECT":
                            r = "focus"; break;
                        default:
                            r = "click" } Event.addEvent(e, r, function(e) { var t = e.target;
                        rapidBeaconClick(r, parseDataYlk(t.getAttribute("data-ylk"))) }) }) } }
        var Dom = require("./dom.js"),
            Event = require("./event.js"),
            searchLastWordRegex = /[\s]([\w]+[.,!\:;\\"\-?]{0,1})$/,
            KEYMAP = { ENTER_KEY: 13, BACKSPACE_KEY: 8, IOS_SIMULATOR_BS: 0, ANDROID_PLACEHOLDER: 229 },
            REGEX_CLEANUP_URL = /&$/;
        module.exports = { KEYMAP: KEYMAP, isOnline: isOnline, showNetworkError: showNetworkError, showErrorMessageOnAjax: showErrorMessageOnAjax, hideErrorMessage: hideErrorMessage, endsWith: endsWith, cleanUpUrl: cleanUpUrl, getAdBlockerState: getAdBlockerState, parseJsonResponseText: parseJsonResponseText, trackRapidElements: trackRapidElements };
    }, { "./dom.js": 5, "./event.js": 6 }],
    11: [function(require, module, exports) {
        "use strict";
        var Ajax = require("./libs/ajax.js"),
            Utils = require("./libs/utils.js"),
            numRegex = /^[\+][0-9]*$/;
        ! function(e) {
            function n(n, i) { if (n || i && i.phone && "failed" === i.phone) window.location = e.signUpPage;
                else if (i) { if (i.phone && i.phone.match(numRegex)) return t.value = i.phone, o.submit(); "" !== i.phone && "none" !== i.phone || (window.location = e.signUpPage) } } var o = document.getElementById("prog-phone-reg-form"),
                t = document.getElementById("selected-account");
            o && (new Ajax).send("GET", e.getProgRegPhoneAccounts, {}, function(e, o) { n(e, Utils.parseJsonResponseText(o)) }) }(window);
    }, { "./libs/ajax.js": 4, "./libs/utils.js": 10 }],
    12: [function(require, module, exports) {
        "use strict";
        var Ajax = require("./libs/ajax.js"),
            Form = require("./libs/form.js"),
            Dom = require("./libs/dom.js"),
            Event = require("./libs/event.js"),
            REGEX_PHONE_NUMBER = /^[\+][0-9]*$/,
            DELAY = 1e3;
        ! function(e) {
            function n() { var n = function(e) { o && o.setAttribute("style", "width: " + e) },
                    a = function() { if (i) return void Dom.removeClass(i, "hide");
                        e.location.href = c },
                    m = function(n, t) { var o; try { o = JSON.parse(t.responseText) } catch (e) {} if (o.location) return void(e.location.href = o.location);
                        a() },
                    d = function() { e.setTimeout(function() { n("50%"), (new Ajax).send("POST", s, { body: Form.serializeFormFields(t), bucket: u }, m) }, DELAY) }; if (!r) return void a();!r.value && e.getProgRegPhoneAccounts ? (n("15%"), e.setTimeout(function() {
                    (new Ajax).send("GET", e.getProgRegPhoneAccounts, {}, function(e, t) { var o; try { o = JSON.parse(t.responseText) } catch (e) {} if (o && o.phone && o.phone.match(REGEX_PHONE_NUMBER) && (r.value = o.phone), r.value) return n("30%"), void d();
                        a() }) }, DELAY)) : (n("25%"), d()) } var t = document.getElementById("login-username-form"),
                o = document.getElementById("login-imp-pbui-pbar-inner"),
                i = document.getElementById("login-imp-pbui-pbar-error"),
                r = document.getElementById("login-username"),
                u = e.bucket,
                s = e.currentURL,
                a = e.doneURL,
                c = e.dismissURL || a;
            t && Dom.containsClass(t, "login-imp-pbui-pbar") && Event.addEvent(document, "DOMContentLoaded", function() { n() }) }(window);
    }, { "./libs/ajax.js": 4, "./libs/dom.js": 5, "./libs/event.js": 6, "./libs/form.js": 7 }],
    13: [function(require, module, exports) {
        "use strict";
        var Ajax = require("./libs/ajax.js"),
            Form = require("./libs/form.js"),
            InlineCountryDropDown = require("./libs/inline-country-dropdown.js"),
            Utils = require("./libs/utils.js"),
            Dom = require("./libs/dom.js"),
            Event = require("./libs/event.js"),
            REGEX_CLEANUP_EMAIL = /email=[^&#]*/,
            corpEmailPattern = "@yahoo-inc.com";
        ! function(e) {
            function t(t, n) { var o, a; try { o = JSON.parse(n.responseText) } catch (e) { return Utils.showNetworkError(), void(w = !1) } if (o.location) return void(e.location.href = o.location);
                w = !1, Utils.showErrorMessageOnAjax(o, "username-error", "login-username"), (a = document.getElementById("login-username")) && a.focus() }

            function n(e) { return w ? void e.preventDefault() : "on" === Utils.getAdBlockerState() ? void(w = !0) : (e.preventDefault(), w = !0, void(new Ajax).send("POST", k, { body: Form.serializeFormFields(C), bucket: I }, t)) }

            function o(e) { var t, n;
                v && v.value && (e.preventDefault(), t = e.target.getAttribute("href"), n = "username=" + encodeURIComponent(v.value), -1 === t.indexOf("?") ? t += "?" + n : t += "&" + n, document.location.href = t) }

            function a(e) { var t = "Sign in with Bouncer";
                Utils.endsWith(e, corpEmailPattern) || (t = E), g.setAttribute("value", t) }

            function r(e) { var t, n; if (-1 !== e.indexOf("@")) { var o, a, r, i = e.split("@"),
                        l = i[1]; for (t = D.getElementsByTagName("li"), o = 0; o < t.length; o += 1) a = t[o], r = a.getAttribute("data-fill"), 0 === l.length || 0 === r.indexOf(l) && l.length < r.length ? (n = !0, Dom.removeClass(a, "hide")) : Dom.addClass(a, "hide") } n ? (Dom.removeClass(D, "hide"), g.setAttribute("aria-hidden", !0)) : (Dom.addClass(D, "hide"), g.setAttribute("aria-hidden", !1)) }

            function i(e) { var t;
                u && (w = !1, Dom.removeClass(u, "show"), (Utils.endsWith(e, "@yahoo.co.jp") || Utils.endsWith(e, "@ybb.ne.jp")) && (w = !0, c && (t = c.getAttribute("href"), t = Utils.cleanUpUrl(t.replace(REGEX_CLEANUP_EMAIL, "")) + "&email=" + encodeURIComponent(e), c.setAttribute("href", t)), Dom.addClass(u, "show"))) }

            function l() { Dom.addClass(h, "show") }

            function d(e) { var t = document.getElementsByClassName(e + "-eol-update"),
                    n = document.querySelector(".social-login-modal .social-login-email"),
                    o = 0; for (Dom.replaceClass(y, "hide", "show"), o = 0; o < t.length; o++) Dom.removeClass(t[o], "hide");
                Event.addEvent(n, "click", function(e) { for (e.preventDefault(), e.stopPropagation(), Dom.replaceClass(y, "show", "hide"), v.focus(), o = 0; o < t.length; o++) Dom.addClass(t[o], "hide") }) } var s, u, c, m, v, g, f, E, h, p, b, y, D, C = document.getElementById("login-username-form"),
                I = e.bucket,
                k = e.currentURL,
                w = !1;
            C && (Dom.containsClass(C, "login-imp-pbui-pbar") || (u = document.getElementById("oauth-notice"), c = document.getElementById("oauth-notice-link"), m = document.getElementById("username-country-code-field"), v = document.getElementById("login-username"), g = document.getElementById("login-signin"), f = document.getElementById("mbr-forgot-link"), s = document.getElementById("social-login-container"), D = document.getElementById("domain-auto-fill"), y = document.getElementById("social-login-modal"), h = document.getElementById("learn-more-modal"), p = document.getElementById("learn-more-link"), E = g && g.value, a(v.value), i(v.value), Event.addEvent(v, "keydown", function() { Utils.hideErrorMessage("username-error", "login-username") }), Event.addEvent(v, "keyup", function() { a(v.value), i(v.value), D && r(v.value) }), D && Event.addEvent(D, "click", function(e) { var t, n, o; "LI" === e.target.tagName && (t = e.target.getAttribute("data-fill"), Dom.addClass(D, "hide"), g.setAttribute("aria-hidden", !1), n = v.value, o = n.split("@"), v.value = o[0] + "@" + t) }), Event.addEvent(C, "submit", n), f && Event.addEvent(f, "click", o), m && (new InlineCountryDropDown(m, { countryCodesMap: e.COUNTRY_CODES_MAP }).enforceCountryCodeDropDown = e.enforceCountryCodeDropDown), Dom.containsClass(document.body, "auto-submit") && C.submit(), p && (b = document.querySelector(".learn-more-modal .learn-more-ok"), Event.addEvent(p, "click", function(e) { e.stopPropagation(), e.preventDefault(), l() }), Event.addEvent(b, "click", function(e) { e.preventDefault(), e.stopPropagation(), Dom.removeClass(h, "show") })), s && Event.addEvent(s, "click", function(e) { var t, n, o, a, r = e.target.type,
                    i = e.target.value; if ("submit" === r && y && ("google" === i || "facebook" === i)) return e.stopPropagation(), e.preventDefault(), void d(i); if ("checkbox" === r)
                    for (t = e.target.id, n = s.getElementsByTagName("input"), o = n.length, a = 0; a < o; a += 1) "checkbox" === n[a].type && n[a].id !== t && (n[a].checked = !1) }), k.indexOf("aembed=1") > -1 && Event.addEvent(document, "DOMContentLoaded", function() { var t = Utils.cleanUpUrl(k.replace("aembed=1", ""));
                w = !0, g.disabled = !0, (new Ajax).send("GET", t, { bucket: I }, function(n, o) { var a, r, i; try { if (a = JSON.parse(o.responseText), a.location) return void(e.location.href = a.location);
                        r = document.getElementsByName("sessionIndex")[0], i = document.getElementsByName("acrumb")[0], r.value = a.render.challenge.sessionIndex, i.value = a.render.challenge.acrumb } catch (n) { return void(e.location.href = t) } w = !1, g.disabled = !1 }) }))) }(window);
    }, { "./libs/ajax.js": 4, "./libs/dom.js": 5, "./libs/event.js": 6, "./libs/form.js": 7, "./libs/inline-country-dropdown.js": 8, "./libs/utils.js": 10 }]
}, {}, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])