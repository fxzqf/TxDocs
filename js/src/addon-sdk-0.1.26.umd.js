var jssdk = (() => { var O = Object.defineProperty; var b = Object.getOwnPropertyDescriptor; var B = Object.getOwnPropertyNames; var F = Object.prototype.hasOwnProperty; var S = (e, n) => { for (var r in n) O(e, r, { get: n[r], enumerable: !0 }) }, M = (e, n, r, o) => { if (n && typeof n == "object" || typeof n == "function") for (let t of B(n)) !F.call(e, t) && t !== r && O(e, t, { get: () => n[t], enumerable: !(o = b(n, t)) || o.enumerable }); return e }; var U = e => M(O({}, "__esModule", { value: !0 }), e); var Z = {}; S(Z, { api: () => w, sys: () => T }); var T = {}; S(T, { app: () => C, container: () => y }); var y = {}; S(y, { close: () => j, offHide: () => G, offShow: () => g, onHide: () => K, onShow: () => H, update: () => v }); var _ = { MASSAGE_CALLBACK: "MASSAGE_CALLBACK", WPS_OPEN_API_GET: "WPS_OPEN_API_GET", WPS_OPEN_API_CALL: "WPS_OPEN_API_CALL", WPS_OPEN_API_SET: "WPS_OPEN_API_SET", WPS_OPEN_API_FREE: "WPS_OPEN_API_FREE", WPS_OPEN_API_SET_CALLBACK: "WPS_OPEN_API_SET_CALLBACK", WPS_OPEN_API_EVENT: "WPS_OPEN_API_EVENT", WPS_OPEN_API_EVENT_CALLBACK: "WPS_OPEN_API_EVENT_CALLBACK", WPS_OPEN_API_READY: "WPS_OPEN_API_READY", WPS_OPEN_API: "WPS_OPEN_API", CONTAINER_SHOW: "CONTAINER_SHOW", CONTAINER_HIDE: "CONTAINER_HIDE", CONTAINER_CLOSE: "CONTAINER_CLOSE", CONTAINER_UPDATE: "CONTAINER_UPDATE", GET_APP_BASIC_INFO: "GET_APP_BASIC_INFO", GET_APP_USER_OPEN_ID: "GET_APP_USER_OPEN_ID", GET_APP_USER_BASIC_INFO: "GET_APP_USER_BASIC_INFO", GET_APP_FIEL_OPEN_ID: "GET_APP_FIEL_OPEN_ID", GET_APP_FIEL_BASIC_INFO: "GET_APP_FIEL_BASIC_INFO", GET_APP_AUTH_CODE: "GET_APP_AUTH_CODE" }; var W = location.search.slice(1).split("&").reduce((e, n = "") => { let [r, o] = n.split("="); return r && o && (e[decodeURIComponent(r)] = decodeURIComponent(o)), e }, {}); var a = {}, d = {}; function k(e, n) { if (typeof e != "object" || !e.type) throw Error(`\u65E0\u6548\u7684type\u5728\u3010${JSON.stringify(e)}\u3011\u4E2D`); let { type: r, data: o } = e, t = "", i = ""; r === _.WPS_OPEN_API && o.commands ? i = `${r}_${o.commands.replace(/\./g, "_")}` : i = `${r}`; let c; do c = `${Date.now()}_${Math.floor(Math.random() * 1e5)}`, t = [i, c].join("_"); while (d[t]); e.msgCbKey = t, d[t] = n } window.addEventListener("message", e => { let { type: n, msgCbKey: r, data: o } = JSON.parse(e.data); window.parent === e.source && (a[n]?.length ? a[n].map(t => t(o)) : n === _.MASSAGE_CALLBACK && r && d[r] && (d[r](o), delete d[r])) }); function N(e, n) { (a[e] = a[e] || []).push(n) } function l(e, n) { if (a[e]) { let r = a[e].findIndex(o => o === n); ~r && (a[e] = a[e].splice(r, 1)) } } function s(e) { return new Promise((n, r) => { try { if (k(e, n), window.parent === window) throw Error("\u5F53\u524D\u9875\u9762\u5FC5\u987B\u5D4C\u5165\u5728weboffice\u9875\u9762\u4E2D"); window.parent.postMessage(JSON.stringify(e), W.origin) } catch (o) { r(o) } }) } async function j() { return s({ type: _.CONTAINER_CLOSE }) } async function H(e) { return N(_.CONTAINER_SHOW, e), () => { g(e) } } async function g(e) { l(_.CONTAINER_SHOW, e) } async function K(e) { return N(_.CONTAINER_HIDE, e), () => { G(e) } } async function G(e) { return l(_.CONTAINER_HIDE, e) } async function v(e) { if (!!e) return e.title || delete e.title, e.width ? e.width = +e.width : delete e.width, e.height ? e.height = +e.height : delete e.height, s({ type: _.CONTAINER_UPDATE, data: e }) } var C = {}; S(C, { getAppAuthCode: () => Q, getAppBasicInfo: () => J, getFileBasicInfo: () => D, getFileOpenId: () => Y, getUserBasicInfo: () => $, getUserOpenId: () => V }); async function V() { return s({ type: _.GET_APP_USER_OPEN_ID }) } async function $() { return s({ type: _.GET_APP_USER_BASIC_INFO }) } async function Y() { return s({ type: _.GET_APP_FIEL_OPEN_ID }) } async function D() { return s({ type: _.GET_APP_FIEL_BASIC_INFO }) } async function J() { return s({ type: _.GET_APP_BASIC_INFO }) } async function Q() { return s({ type: _.GET_APP_AUTH_CODE }) } function R() { let e = 0; return () => ++e } var h = R(), q = R(); function x(e) { let n = []; N(e, (...o) => { n.forEach(t => t(...o)) }); function r(o) { n.push(o) } return r.filter = o => { n = n.filter(o) }, r } var z = x(_.WPS_OPEN_API_SET_CALLBACK), u = x(_.WPS_OPEN_API_EVENT_CALLBACK), X = ["ExportAsFixedFormat", "GetOperatorsInfo", "ImportDataIntoFields", "ReplaceText", "ReplaceBookmark", "GetBookmarkText", "GetComments"]; function L(e, n, r) { let o = n.slice(0); for (; o.length;) { let t = o.shift(); !t.alias && ~X.indexOf(t.prop) && o.push({ ...t, alias: `${t.prop}Async` }), Object.defineProperty(e, t.alias || t.prop, { get() { let i = t.cache === 1, c = i && this[`__${t.prop}CacheValue`]; if (!c) { let P = h(), E = function (...f) { let A; return t.caller !== void 0 ? (A = { objId: h() }, L(A, r[t.caller], r)) : A = {}, m(E, A, _.WPS_OPEN_API_CALL, { obj: E, args: f, parentObjId: e.objId, objId: A.objId, prop: t.prop }), A }; return E.objId = -1, t.getter !== void 0 && (E.objId = P, L(E, r[t.getter], r)), m(e, E, _.WPS_OPEN_API_GET, { parentObjId: e.objId, objId: E.objId, prop: t.prop }), i && (this[`__${t.prop}CacheValue`] = E), E } return c }, async set(i) { if (i?.done && i.done(), typeof i == "function" && i.objId === void 0) { let c = i; i = { callbackId: q() }, z(({ callbackId: P, args: p }) => { i.callbackId === P && c(...p) }) } return m(e, {}, _.WPS_OPEN_API_SET, { value: i, parentObjId: e.objId, objId: -1, prop: t.prop }) } }) } } function m(e, n, r, o) { let t = e.done ? e.done() : Promise.resolve(), i, c = t.then(() => (i || (i = s({ type: r, data: o })), i)); n.done = () => c, n.then = function (P, p) { return o.objId >= 0 ? (n.then = null, n.catch = null, c.then(() => { P(n) }).catch(E => p(E))) : c.then(P, p) }, n.catch = function (P) { return c.catch(P) }, n.Destroy = function () { return s({ type: _.WPS_OPEN_API_FREE, data: { objId: n.objId } }) } } var I = { version: "0.1.0", ready: async () => { let e = {}, n = await s({ type: _.WPS_OPEN_API_READY }), { Props: r, Events: o, Enum: t } = n, [i, c] = r; L(e, i, c), I.Application = e, e.Events = o, e.Enum = t, I.Enum = e.Enum, I.Events = e.Events, e.Sub = {}; for (let P in o) { let p = o[P]; Object.defineProperty(e.Sub, p, { set(E) { u(({ eventName: f, args: A }) => { P === f && E(...A) }), s({ type: _.WPS_OPEN_API_EVENT, data: { eventName: p, register: !!E, objId: h() } }) } }) } return I.on = (P, p) => { let E = ({ eventName: f, args: A }) => { P === f && p(...A) }; E.raw = p, E.type = p, u(E), s({ type: _.WPS_OPEN_API_EVENT, data: { eventName: P, register: !!p } }) }, I.off = (P, p) => { u.filter(E => E.type !== P && E.raw !== p) }, e } }, w = I; return U(Z); })();
