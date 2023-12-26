const t = "popup.js";
const e = "content.js";
const n = "background.js";
const s = "MSG_SEND_MESSAGE";
const o = "MSG_FORWARD_MY_LAST_MST";
const a = "MSG_MESSAGE_RESULTS";
const c = "MSG_RUN_FILTER";
const r = "MSG_PAUSE";
const i = "MSG_RESUME";
const u = "MSG_STOP";
const f = "MSG_CANCEL_OPERATION";
const _ = "MSG_SETUP_BATCH";
const l = "MSG_GET_MESSAGE_RESULTS";
const E = "MSG_GET_USER_PHONENUMBER";
const S = "MSG_SHOW_WHATSAPP_TAB";
const T = "MSG_GET_PAGE_URL";
const A = "MSG_SELECT_IMAGE";
const N = "MSG_OPEN_MY_MSG_WINDOW";
const m = "MSG_IS_MY_CHAT_WINDOW";
const I = "MSG_GET_FORWARD_IMAGE_PATH";
const g = "MSG_ADD_PROFILE_PICTURE";
const M = "MSG_GET_IMAGE_COUNT";
const d = "MSG_SET_USER_PHONENUMBER";
const h = "MSG_RELOAD_ATTACHMENT";
const G = "MSG_RELOAD_ATTACHMENT_RESULT";
const O = "MSG_GET_NUMBER_ON_CURRENT_WINDOW";
const p = "MSG_UPDATE_TEMPLATES";
const U = "MSG_REGISTER_WEB_WHATSAPP_TAB";
const D = "MSG_UNREGISTER_WEB_WHATSAPP_TAB";
const C = "MSG_NEXT_MESSAGE_IN_TIME";
const L = "MSG_VALIDATE_NUMBER";
const R = "MSG_SKIP_LINK_PREVIEW";
const P = "MSG_CLEAR_PROGRESS";
const b = "OPERATION_NONE";
const y = "OPERATION_SEND_MESSAGE";
const B = "OPERATION_FILTER";
const w = "STATUS_SENT";
const v = "STATUS_FAILED";
const Y = "STATUS_PENDING";
const H = "STATUS_SKIPPED";
const K = "SET_ACTIVE_WHATSAPP_TAB";
const F = "MSG_LIB_GET_LOGGEDIN_USER";
const k = "MSG_ENABLE_BLUR_RECENT_MSGS";
const x = "MSG_DISABLE_BLUR_RECENT_MSGS";
const j = "MSG_ENABLE_BLUR_CONTACT_NUMS";
const J = "MSG_DISABLE_BLUR_CONTACT_NUMS";
const W = "MSG_ENABLE_BLUR_PROFILE_PICS";
const X = "MSG_DISABLE_BLUR_PROFILE_PICS";
const z = "MSG_ENABLE_BLUR_CONTACT_MSGS";
const V = "MSG_DISABLE_BLUR_CONTACT_MSGS";
const Z = "MSG_ENABLE_HIGHLIGHT_ONLINE_CONTACTS";
const q = "MSG_DISABLE_HIGHLIGHT_ONLINE_CONTACTS";
const Q = "MSG_ENABLE_NOTIFY_ONLINE_CONTACTS";
const tt = "MSG_DISABLE_NOTIFY_ONLINE_CONTACTS";
const et = "MSG_ENABLE_PLAY_AUDIO_MSGS_WITHOUT_INFO_SENDER";
const nt = "MSG_DISABLE_PLAY_AUDIO_MSGS_WITHOUT_INFO_SENDER";
const st = "MSG_ENABLE_HIDE_ONLINE_STATUS";
const ot = "MSG_DISABLE_HIDE_ONLINE_STATUS";
const at = "MSG_ENABLE_RESTORE_MESSAGES";
const ct = "MSG_DISABLE_RESTORE_MESSAGES";
const rt = "MSG_PIN_UNREAD_CHATS";
const it = "MSG_LIB_UNPIN_UNREAD_CHATS";
const ut = "MSG_LIB_ENABLE_READ_RECIEPT";
const ft = "MSG_LIB_DISABLE_READ_RECIEPT";
const _t = "MSG_LIB_ENABLE_TYPING_STATE";
const lt = "MSG_LIB_DISABLE_TYPING_STATE";
const Et = "MSG_ENABLE_LIKE_BUTTON";
const St = "MSG_DISABLE_LIKE_BUTTON";
const Tt = "MSG_ENABLE_REACTIONS";
const At = "MSG_DISABLE_REACTIONS";
const Nt = "MSG_LIB_DOWNLOAD_CONTACTS";
const mt = "MSG_LIB_GET_CONTACTS";
const It = "MSG_LIB_GET_USER_GROUPS";
const gt = "MSG_LIB_GET_USER_LABELS";
const Mt = "MSG_LIB_GET_USER_BROADCASTS";
const dt = "MSG_SET_ATTACHMENTS";
const ht = "MSG_CLEAR_ATTACHMENTS";
const Gt = "MSG_GET_ATTACHMENT";
const Ot = "MSG_CACHE_ATTACHMENT_BACKGROUND";
const pt = "MSG_GET_ATTACHMENT_BACKGROUND";
const Ut = "MSG_SEND_ATTACHMENTS_WITH_CAPTION";
const Dt = "MSG_SEND_ATTACHMENTS_WITHOUT_CAPTION";
const Ct = "MSG_UPDATE_CHATBOT_CONFIG";
const Lt = "MSG_DOWNLOAD_CHATS";
const Rt = "MSG_IS_CHATS_DOWNLOADING";
const Pt = "MSG_DOWNLOAD_CHATS_FINISHED";
const bt = "MSG_CREATE_GROUP";
const yt = "MSG_GET_CREATE_GROUP_STATUS";
const Bt = "MSG_RESET_CREATE_GROUP_STATUS";

function wt() {
	return new Promise((t => {
		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, (function(e) {
			t(e[0].id)
		}))
	}))
}

function vt(t) {
	console.log(t);
	return wt().then((e => Yt(t, e)))
}

function Yt(t, e) {
	return new Promise(((n, s) => {
		if (e < 0) {} else {
			chrome.tabs.sendMessage(e, t, (function(t) {
				console.log(t, chrome.runtime.lastError);
				if (chrome.runtime.lastError) {
					s(chrome.runtime.lastError)
				}
				n(t)
			}))
		}
	}))
}

function Ht(t) {
	return new Promise(((e, n) => {
		try {
			chrome.runtime.sendMessage(t, (t => {
				e(t)
			}))
		} catch (t) {
			n(t)
		}
	}))
}

function Kt(t) {
	chrome.runtime.sendMessage({
		from: "content",
		subject: "load-popup",
		html: t
	})
}

function $t() {
	const t = "https://us-central1-waplugin-34798.cloudfunctions.net";
	const e = `${t}/logLogin`;
	const n = `${t}/logInstalls`;
	const s = `${t}/logRevists`;
	const o = `${t}/logSingleMsgs`;
	const a = `${t}/logBulkMsgs`;
	const c = `${t}/logLoginFailed`;
	const r = `${t}/stats/singlemsg`;
	const i = `${t}/stats/bulkmsg`;
	const u = `${t}/stats/user`;
	const f = `${t}/stats/pro`;
	const _ = `${t}/stats/ispro`;
	const l = `${t}/stats/templates`;
	const E = `${t}/stats/adds`;
	const S = `${t}/stats/reports`;
	const T = `${t}/stats/file`;
	const A = `${t}/stats/help-number`;
	const N = `${t}/stats/demo-url`;
	const m = `${t}/stats/help-info`;
	const I = `${t}/stats/getlicense`;
	const g = `${t}/help`;
	async function M(t) {
		const e = await fetch(`${I}?phonenumber=${encodeURI(t)}`);
		const n = await e.json();
		if (n && n.licensedetails) {
			return n.licensedetails
		}
	}
	async function d(t, e, n) {
		await fetch(r, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json"
			},
			redirect: "follow",
			referrer: "no-referrer",
			body: JSON.stringify({
				message: e,
				phoneNumber: n,
				userid: t
			})
		})
	}
	async function h(t, e, n) {
		await fetch(i, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json"
			},
			redirect: "follow",
			referrer: "no-referrer",
			body: JSON.stringify({
				message: e,
				phoneNumbers: n,
				userid: t
			})
		})
	}
	async function G(t) {
		await fetch(`${n}?refid=${t}`)
	}
	async function O(t, e) {
		await fetch(`${s}?name=${encodeURI(t)}&userid=${encodeURI(e)}`)
	}
	async function p(t) {
		await fetch(`${o}?userid=${t}`)
	}
	async function U(t) {
		await fetch(`${a}?userid=${t}`)
	}
	async function D(t, n, s) {
		await fetch(`${e}?name=${encodeURI(n)}&phonenumber=${encodeURI(t)}&refid=${encodeURI(s)}`)
	}
	async function C(t) {
		await fetch(`${c}?phonenumber=${encodeURI(t)}`)
	}
	async function L(t) {
		const e = await fetch(`${u}?authid=${encodeURI(t)}`);
		const n = await e.json();
		return n
	}
	async function R(t) {
		const e = await fetch(`${f}?authid=${encodeURI(t)}`);
		const n = await e.json();
		return n
	}

	function P(t) {
		return new Promise(((e, n) => {
			$.get(`${_}?authid=${encodeURI(t)}`, (function(t) {
				e(t)
			})).fail((function() {
				n()
			}))
		}))
	}
	async function b(t, e) {
		await fetch(l, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json"
			},
			redirect: "follow",
			referrer: "no-referrer",
			body: JSON.stringify({
				templates: e,
				authid: t
			})
		})
	}
	async function y(t) {
		return []
	}
	async function B(t, e) {
		await fetch(S, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json"
			},
			redirect: "follow",
			referrer: "no-referrer",
			body: JSON.stringify({
				report: e,
				phoneNumber: t
			})
		})
	}
	async function w(t) {
		const e = await fetch(`${S}?authid=${encodeURI(t)}`);
		const n = await e.json();
		return n
	}
	async function v(t) {
		const e = await fetch(`${T}?path=${encodeURI(t)}`);
		const n = await e.json();
		return n
	}
	async function Y(t) {
		const e = await fetch(E, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json"
			},
			redirect: "follow",
			referrer: "no-referrer",
			body: JSON.stringify({
				authid: t
			})
		});
		return e.json()
	}
	async function H(t, e, n, s, o, a) {
		const c = await fetch(g + "?" + new URLSearchParams({
			name: t,
			phonenumber: e,
			issuetype: n,
			issuedetails: s,
			version: o,
			ispro: a
		}), {
			method: "GET",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json"
			},
			redirect: "follow",
			referrer: "no-referrer"
		});
		const r = await c.text();
		return r
	}

	function K() {
		return new Promise(((t, e) => {
			$.get(A, (function(e) {
				t(e)
			})).fail((function() {
				e()
			}))
		}))
	}

	function F() {
		return new Promise(((t, e) => {
			$.get(m, (function(e) {
				let n = null;
				if (e) {
					n = JSON.parse(e)
				}
				t(n)
			})).fail((function() {
				e()
			}))
		}))
	}

	function k() {
		return new Promise(((t, e) => {
			$.get(N, (function(e) {
				t(e)
			})).fail((function() {
				e()
			}))
		}))
	}
	return {
		logInstalls: G,
		logRevisits: O,
		logSingleMsgs: p,
		logBulkMsgs: U,
		logLogin: D,
		logLoginFailed: C,
		logSingleMsgDetail: d,
		logBulkMessageDetail: h,
		getUser: L,
		getUserPro: R,
		getIsPro: P,
		saveTemplates: b,
		getTemplates: y,
		logAdds: Y,
		saveReports: B,
		getReports: w,
		getFile: v,
		getHelpNumber: K,
		getDemoUrl: k,
		getLicensce: M,
		getHelp: H,
		getHelpInfo: F
	}
}
const Ft = "KEY_AUTHID";
const kt = "KEY_ACTIVE_TAB";
const xt = "KEY_INSTALL_TIMESTAMP";
const jt = "KEY_PHONE_NUMBERS_BULK";
const Jt = "KEY_CURRENT_MSG_BULK";
const Wt = "KEY_AUTH_PHONENUMBER";
const Xt = "KEY_AUTH_NAME";
const zt = "KEY_IS_AUTHORIZED";
const Vt = "KEY_BULK_MSG_COUNTRYCODE";
const Zt = "KEY_REF_ID";
const qt = "KEY_IS_PRO";
const Qt = "KEY_PHONE_CLUMN_NUMBER";
const te = "KEY_CSV_FILE_DATA";
const ee = "KEY_FILE_NAME";
const ne = "KEY_SHEET_NAME";
const se = "KEY_ACTIVE_SHEET";
const oe = "KEY_EXTRAS";
const ae = "KEY_PHONE_COLUMN_NAME";
const ce = "KEY_EXCEL_FILE_DATA";
const re = "KEY_START_INDEX";
const ie = "KEY_FINAL_INDEX";
const ue = "KEY_COUNTRY_ISO2_CODE";
const fe = "KEY_DEFAULT_COUNTRY_CODE";
const _e = "KEY_INVALID_NUMBER_COUNT";
const le = "KEY_TEMPLATES";
const Ee = "KEY_TEMPLATES_UI_DATA";
const Se = "KEY_SPAM_METER_UI_DATA";
const Te = "KEY_LAST_CHAT_DATETIME";
const Ae = "KEY_SEND_MESSAGE_UI_DATA";
const Ne = "KEY_HELP_TAB_UI_DATA";
const me = "KEY_ALERT_UI_DATA";
const Ie = "KEY_SETTINGS_TAB_UI_DATA";
const ge = "KEY_CONTACT_TAB_UI_DATA";
const Me = "KEY_NEXT_BATCH_TIMEOUT";
const de = "KEY_ALL_PHONENUMBERS";
const he = "KEY_ALL_MESSAGES";
const Ge = "KEY_IS_ATTACHMENT";
const Oe = "KEY_MSG_GAP";
const pe = "KEY_BATCH_GAP";
const Ue = "KEY_BATCH_SIZE";
const De = "KEY_RANDOMIZE_DELAY";
const Ce = "KEY_NEXT_BATCH_INDEX";
const Le = "KEY_NEXT_BATCH_PHONE_NUMBERS";
const Re = "KEY_NEXT_BATCH_MSGS";
const Pe = "KEY_MSG_STATUS";
const be = "KEY_PAUSED_INDEX";
const ye = "KEY_MSG_GAP_TIMEOUT";
const Be = "KEY_MSG_GAP_RESOLVE";
const we = "KEY_CURRENT_OPRETION";
const ve = "KEY_IS_PAUSED";
const Ye = "KEY_IS_FINISHED";
const He = "KEY_NEXT_MSG_TIMER";
const Ke = "KEY_SKIP_LINK_PREVIEW_FLAG";
const $e = "KEY_TIME_LEFT_FOR_NEXT_SHOOT";
const Fe = "KEY_PIN_UNREAD_CHATS";
const ke = "KEY_ENABLE_PRESENCE";
const xe = "KEY_ATTACHMENTS_SETTINGS_DATA";
const je = "KEY_CHATBOT_CONFIG_DATA";
const Je = "KEY_IS_OPERATION_RUNNING";
const We = "KEY_HELP_CTA";

function Xe() {
	function t(t, e) {
		return new Promise(((n, s) => {
			const o = {};
			o[t] = e;
			chrome.storage.local.set(o, (function() {
				n()
			}))
		}))
	}

	function e(t) {
		return new Promise(((e, n) => {
			chrome.storage.local.get(t, (function(n) {
				e(n[t])
			}))
		}))
	}

	function n(e) {
		const n = e ? "true" : "false";
		return t(qt, n)
	}
	async function s() {
		const t = await e(qt);
		return t === "true" ? true : false
	}

	function o(e) {
		return t(jt, JSON.stringify(e))
	}
	async function a() {
		const t = await e(jt);
		if (t) {
			return JSON.parse(t)
		} else return []
	}

	function c(e) {
		return t(Jt, e)
	}
	async function r() {
		let t = "";
		const n = await e(Jt);
		if (n) {
			t = n
		}
		return t
	}

	function i(e) {
		return t(kt, e)
	}

	function u() {
		return e(kt)
	}

	function f(e) {
		return t(ue, e)
	}

	function _() {
		return e(ue)
	}

	function l(e) {
		return t(fe, e)
	}

	function E() {
		return e(fe)
	}

	function S(e) {
		return t(Vt, e)
	}

	function T() {
		return e(Vt)
	}

	function A() {
		return t(xt, `${Date.now()}`)
	}

	function N() {
		return e(xt)
	}

	function m() {
		return e(Ft)
	}

	function I(e) {
		return t(Ft, e)
	}

	function g() {
		return e(Wt)
	}

	function M(e) {
		return t(Wt, e)
	}

	function d() {
		return e(Xt)
	}

	function h(e) {
		return t(Xt, e)
	}

	function G() {
		return e(Zt)
	}

	function O(e) {
		return t(Zt, e)
	}
	async function p() {
		let t = null;
		const n = await e(ce);
		if (n) {
			t = JSON.parse(n)
		}
		return t
	}

	function U(e) {
		return t(ce, JSON.stringify(e))
	}
	async function D() {
		let t = 0;
		const n = await e(_e);
		if (n) {
			t = parseInt(n, 10)
		}
		return t
	}

	function C(e) {
		return t(_e, `${e}`)
	}
	async function L() {
		let t = null;
		const n = await e(oe);
		if (n) {
			t = JSON.parse(n)
		}
		return t
	}
	async function R() {
		let t = "";
		const n = await e(ae);
		if (n) {
			t = n
		}
		return t
	}

	function P(e) {
		return t(ae, `${e}`)
	}

	function b() {
		return e(ee)
	}

	function y(e) {
		return t(ee, e)
	}

	function B() {
		return e(ne)
	}

	function w(e) {
		return t(ne, e)
	}

	function v() {
		return e(se)
	}

	function Y(e) {
		return t(se, e)
	}

	function H() {
		return e(re)
	}

	function K(e) {
		return t(re, e)
	}

	function $() {
		return e(ie)
	}

	function F(e) {
		return t(ie, e)
	}
	async function k() {
		let t = [];
		const n = await e(le);
		if (n) {
			t = JSON.parse(n)
		}
		return t
	}
	async function x(e) {
		let n = "";
		if (e) {
			n = JSON.stringify(e)
		}
		return t(le, n)
	}
	async function j(e) {
		let n = "";
		if (e) {
			n = JSON.stringify(e)
		}
		return t(oe, n)
	}
	async function J() {
		let t = {};
		const n = await e(Ee);
		if (n) {
			t = JSON.parse(n)
		}
		return t
	}
	async function W(e) {
		let n = "";
		if (e) {
			n = JSON.stringify(e)
		}
		return t(Ee, n)
	}
	async function X() {
		let t = {};
		const n = await e(Se);
		if (n) {
			t = JSON.parse(n)
		}
		return t
	}
	async function z(e) {
		let n = "";
		if (e) {
			n = JSON.stringify(e)
		}
		return t(Se, n)
	}
	async function V(e) {
		return t(Te, e)
	}
	async function Z() {
		return e(Te)
	}
	async function q() {
		let t = {};
		const n = await e(Ae);
		if (n) {
			t = JSON.parse(n)
		}
		return t
	}
	async function Q(e) {
		let n = "";
		if (e) {
			n = JSON.stringify(e)
		}
		return t(Ae, n)
	}
	async function tt() {
		let t = {};
		const n = await e(Ne);
		if (n) {
			t = JSON.parse(n)
		}
		return t
	}
	async function et(e) {
		let n = "";
		if (e) {
			n = JSON.stringify(e)
		}
		return t(Ne, n)
	}
	async function nt() {
		let t = {};
		const n = await e(me);
		if (n) {
			t = JSON.parse(n)
		}
		return t
	}
	async function st(e) {
		let n = "";
		if (e) {
			n = JSON.stringify(e)
		}
		return t(me, n)
	}
	async function ot() {
		let t = {};
		const n = await e(Ie);
		if (n) {
			t = JSON.parse(n)
		}
		return t
	}
	async function at(e) {
		let n = "";
		if (e) {
			n = JSON.stringify(e)
		}
		return t(Ie, n)
	}
	async function ct() {
		let t = {};
		const n = await e(ge);
		if (n) {
			t = JSON.parse(n)
		}
		return t
	}
	async function rt(e) {
		let n = "";
		if (e) {
			n = JSON.stringify(e)
		}
		return t(ge, n)
	}
	async function it() {
		let t = {};
		const n = await e(xe);
		if (n) {
			t = JSON.parse(n)
		}
		return t
	}
	async function ut(e) {
		let n = "";
		if (e) {
			n = JSON.stringify(e)
		}
		return t(xe, n)
	}
	async function ft() {
		let t = {};
		const n = await e(je);
		if (n) {
			t = JSON.parse(n)
		}
		return t
	}
	async function _t(e) {
		let n = "";
		if (e) {
			n = JSON.stringify(e)
		}
		return t(je, n)
	}

	function lt(e) {
		return t(Me, e)
	}

	function Et() {
		return e(Me)
	}

	function St(e) {
		return t(de, e)
	}

	function Tt() {
		return e(de)
	}

	function At(e) {
		return t(he, e)
	}

	function Nt() {
		return e(he)
	}

	function mt(e) {
		return t(Ge, e)
	}

	function It() {
		return e(Ge)
	}

	function gt(e) {
		return t(Oe, e)
	}

	function Mt() {
		return e(Oe)
	}

	function dt(e) {
		return t(pe, e)
	}

	function ht() {
		return e(pe)
	}

	function Gt(e) {
		return t(Ue, e)
	}

	function Ot() {
		return e(Ue)
	}

	function pt(e) {
		return t(De, e)
	}

	function Ut() {
		return e(De)
	}

	function Dt(e) {
		return t(Ce, e)
	}

	function Ct() {
		return e(Ce)
	}

	function Lt(e) {
		return t(Le, e)
	}

	function Rt() {
		return e(Le)
	}

	function Pt(e) {
		return t(Re, e)
	}

	function bt() {
		return e(Re)
	}

	function yt(e) {
		return t(Pe, e)
	}

	function Bt() {
		return e(Pe)
	}

	function wt(e) {
		return t(be, e)
	}

	function vt() {
		return e(be)
	}

	function Yt(e) {
		return t(ye, e)
	}

	function Ht() {
		return e(ye)
	}

	function Kt(e) {
		return t(Be, e)
	}

	function $t() {
		return e(Be)
	}

	function zt(e) {
		return t(we, e)
	}

	function Qt() {
		return e(we)
	}

	function te(e) {
		return t(ve, e)
	}

	function Fe() {
		return e(ve)
	}

	function Xe(e) {
		return t(Ye, e)
	}

	function ze() {
		return e(Ye)
	}

	function Ve(e) {
		return t(He, e)
	}

	function Ze() {
		return e(He)
	}

	function qe(e) {
		return t(Ke, e)
	}

	function Qe() {
		return e(Ke)
	}

	function tn(e) {
		return t($e, e)
	}

	function en() {
		return e($e)
	}

	function nn(e) {
		return t(ke, e)
	}

	function sn() {
		return e(ke)
	}

	function on(e) {
		return t(Je, e)
	}

	function an() {
		return e(Je)
	}
	async function cn() {
		const t = await L();
		if (t && t[We]) {
			return t[We]
		}
	}
	return {
		getHelpCTA: cn,
		saveIsOperationRunning: on,
		getIsOperationRunning: an,
		getPhoneNumbersBulk: a,
		saveCurrentMessageBulk: c,
		savePhoneNumbersBulk: o,
		getCurrentMessageBulk: r,
		getActiveTab: u,
		saveActiveTab: i,
		saveBulkMsgCountryCode: S,
		getBulkMsgCountryCode: T,
		getInstallTimeStamp: N,
		setInstallTimeStamp: A,
		getAuthId: m,
		saveAuthId: I,
		getAuthName: d,
		saveAuthName: h,
		getAuthPhoneNumber: g,
		saveAuthPhoneNumber: M,
		getRefID: G,
		saveRefID: O,
		setIsPro: n,
		getIsPro: s,
		getExcelFileData: p,
		saveExcelFileData: U,
		getPhoneColumnName: R,
		savePhoneColumnName: P,
		getFileName: b,
		saveFileName: y,
		getSheetName: B,
		saveSheetName: w,
		getActiveSheet: v,
		saveActiveSheet: Y,
		getStartIndex: H,
		saveStartIndex: K,
		getFinalIndex: $,
		saveFinalIndex: F,
		getExtras: L,
		saveISO2CountryCode: f,
		getISO2CountryCode: _,
		saveDefaultCountryCode: l,
		getDefaultCountryCode: E,
		saveInvalidNumberCount: C,
		getInvalidNumberCount: D,
		getTemplates: k,
		saveTemplates: x,
		getTemplatesUIData: J,
		saveTemplatesUIData: W,
		getSpamMeterUIData: X,
		saveSpamMeterUIData: z,
		saveAdds: j,
		saveLastChatDateTime: V,
		getLastChatDateTime: Z,
		getSendMessageUIData: q,
		saveSendMessageUIData: Q,
		getAlertUIData: nt,
		saveAlertUIData: st,
		saveNextBatchTimeOut: lt,
		getNextBatchTimeOut: Et,
		saveAllPhoneNumbers: St,
		getAllPhoneNumbers: Tt,
		saveAllMessages: At,
		getAllMessages: Nt,
		saveIsAttachment: mt,
		getIsAttachment: It,
		saveMessageGap: gt,
		getMessageGap: Mt,
		saveBatchGap: dt,
		getBatchGap: ht,
		saveBatchSize: Gt,
		getBatchSize: Ot,
		saveRandomizeDelay: pt,
		getRandomizeDelay: Ut,
		saveNextBatchIndex: Dt,
		getNextBatchIndex: Ct,
		saveNextBatchPhoneNumbers: Lt,
		getNextBatchPhoneNumbers: Rt,
		saveNextBatchMessages: Pt,
		getNextBatchMessages: bt,
		saveMessageStatus: yt,
		getMessageStatus: Bt,
		savePausedIndex: wt,
		getPausedIndex: vt,
		saveMessageGapTimeout: Yt,
		getMessageGapTimeout: Ht,
		saveMessageGapResolve: Kt,
		getMessageGapResolve: $t,
		saveCurrentOperation: zt,
		getCurrentOperation: Qt,
		saveIsPaused: te,
		getIsPaused: Fe,
		saveIsFinished: Xe,
		getIsFinished: ze,
		saveNextMessageTimer: Ve,
		getNextMessageTimer: Ze,
		saveSkipLinkPreviewFlag: qe,
		getSkipLinkPreviewFlag: Qe,
		saveTimeLeftForNextShoot: tn,
		getTimeLeftForNextShoot: en,
		saveEnablePresence: nn,
		getEnablePresence: sn,
		getSettingsTabUIData: ot,
		saveSettingsTabUIData: at,
		getContactTabUIData: ct,
		saveContactTabUIData: rt,
		getAttachmentsSettings: it,
		saveAttachmentsSettings: ut,
		loadChatbotCOnfig: ft,
		saveChatbotConfig: _t,
		getHelpTabUIData: tt,
		saveHelpTabUIData: et
	}
}

function ze() {
	const t = 60 * 1e3;
	let e = "";
	let o = [];
	let c = [];
	let r = false;
	let i = 0;
	let u = 0;
	let f = 0;
	let _ = 0;
	let l = false;
	let E = null;
	let S = b;
	let T = false;
	let A = true;
	let N = 0;
	let m = -1;
	let I = [];
	let g = [];
	let M = [];
	let d = it();
	let h = null;
	let G = null;
	let O = false;
	let p;
	let U = false;
	let D = false;
	let R = null;

	function v() {}
	async function H(t, n) {
		$();
		S = n;
		e = t.fileName ? t.fileName : "";
		o = t.numbers ? t.numbers : [];
		c = t.messages ? t.messages : o.map((t => ""));
		r = t.attachment ? t.attachment : false;
		i = t.messageGap ? t.messageGap : 0;
		l = t.randomizeDelay ? t.randomizeDelay : false;
		u = t.batchGap ? t.batchGap : 0;
		f = t.batchSize ? t.batchSize : o.length;
		U = t.isCaption ? t.isCaption : false;
		D = t.isPro;
		R = t.contact;
		M = [];
		o.forEach((t => M.push(Y)));
		let s = t.startTime ? t.startTime : Date.now();
		_ = s;
		v();
		K(s)
	}

	function K(t) {
		if (m < 0) {
			m = 0
		} else {
			m = m + 1
		}
		if (f > 0) {
			I = o.slice(m * f, (m + 1) * f);
			g = c.slice(m * f, (m + 1) * f)
		}
		if (t) {
			t = t - Date.now();
			if (t < 0) {
				t = 0
			}
		} else {
			t = 0
		}
		if (I && I.length > 0) {
			E = setTimeout((function() {
				E = null;
				W()
			}), t)
		} else {
			A = true;
			V();
			d.cancel();
			rt()
		}
	}

	function $() {
		j();
		d.cancel();
		F();
		k();
		x();
		rt()
	}

	function F() {
		o = [];
		c = [];
		M = [];
		r = false;
		U = false;
		i = 0;
		u = 0;
		f = 0;
		T = false;
		A = false;
		D = false;
		S = b;
		O = false;
		R = null
	}

	function k() {
		m = -1;
		I = [];
		g = []
	}

	function x() {
		if (h) {
			clearTimeout(h);
			h = null
		}
		if (G) {
			G();
			G = null
		}
	}

	function j() {
		if (E) {
			clearTimeout(E);
			N = 0
		}
		E = null
	}

	function J() {
		let t = true;
		if (M.filter((t => t === w)).length > 2) {
			if ((r || R) && !D) {
				t = false
			}
		}
		return t
	}
	async function W(t = 0, e = 0) {
		N = t;
		for (let n = t; n < I.length; ++n) {
			await X(e);
			e = 0;
			if (en !== qe && !T) {
				if (I.length > n) {
					try {
						if (J()) {
							const t = await z(I[n], g[n], r, U);
							M[m * f + n] = t
						} else {
							nt()
						}
					} catch (t) {
						nt();
						break
					}
					V();
					N = n + 1
				}
			} else {
				nt();
				break
			}
		}
		if (!T) {
			const t = Z();
			d.set(Date.now() + t);
			K(Date.now() + t)
		}
	}

	function X(t) {
		return new Promise(((e, n) => {
			let s;
			if (t !== 0) {
				s = t
			} else {
				s = q()
			}
			d.set(Date.now() + s);
			h = setTimeout((() => {
				h = null;
				G = null;
				e()
			}), s);
			G = e
		}))
	}

	function z(t, e, o, a) {
		d.cancel();
		if (S === y) {
			return Yt({
				from: n,
				subject: s,
				data: {
					message: e,
					number: t,
					isAttachment: o,
					isCaption: a,
					skipLinkPreview: O,
					contact: R
				}
			}, en)
		} else if (S === B) {
			return Yt({
				from: n,
				subject: L,
				data: {
					number: t
				}
			}, en)
		}
	}

	function V() {
		Ht({
			from: n,
			subject: a,
			data: Q()
		})
	}

	function Z() {
		return u * t
	}

	function q() {
		let t = 0;
		if (l && Math.random() < .5) {
			t = i * 1e3 / 2
		} else {
			t = i * 1e3
		}
		return t
	}

	function Q() {
		return d.getUpdateData()
	}

	function tt() {
		if (N === f) {
			return m * f
		} else {
			return m * f + N
		}
	}

	function et() {
		return {
			isFinished: A,
			operation: S,
			isPaused: T,
			numbers: o,
			messages: c,
			status: M,
			nextMessageIndex: tt(),
			isPro: D,
			isAttachment: r,
			contact: R
		}
	}

	function nt() {
		if (S !== "OPERATION_NONE" && M.filter((t => t === "STATUS_PENDING")).length > 0) {
			if (!T) {
				T = true;
				p = d.getTimeLeftForNextShoot();
				x();
				j();
				V();
				d.cancel();
				d.sendUpdates();
				v()
			}
		}
	}

	function st() {
		A = true;
		T = true;
		x();
		j();
		V();
		d.cancel();
		d.sendUpdates()
	}

	function ot() {
		if (T) {
			v();
			T = false;
			rt();
			W(N, p)
		}
	}

	function at() {
		$()
	}

	function ct() {
		O = true
	}

	function rt() {
		Yt({
			from: n,
			subject: P
		}, en);
		Ht({
			from: n,
			subject: P
		})
	}
	return {
		init: H,
		getUpdateData: Q,
		pause: nt,
		resume: ot,
		abort: at,
		stop: st,
		skipLinkPreview: ct
	};

	function it() {
		const t = 0 * 1e3;
		const s = 1e3;
		let o = null;
		let a = 0;

		function c(e) {
			a = e;
			l();
			if (a - Date.now() > t) {
				o = setInterval(r, s)
			}
		}

		function r() {
			u();
			f()
		}

		function i() {
			return {
				fileName: e,
				nextMessageTime: a,
				operation: S,
				isPaused: T,
				isFinished: A,
				startTime: _,
				report: et()
			}
		}

		function u() {
			Ht({
				from: n,
				subject: C,
				data: i()
			}, en)
		}

		function f() {
			Yt({
				from: n,
				subject: C,
				data: {
					nextMessageTime: a,
					operation: S,
					isPaused: T,
					isFinished: A
				}
			}, en)
		}

		function l() {
			if (o) {
				clearInterval(o)
			}
		}

		function E() {
			return a - Date.now()
		}
		return {
			cancel: l,
			set: c,
			sendUpdates: r,
			getTimeLeftForNextShoot: E,
			getUpdateData: i
		}
	}
}

function Ve() {
	const t = "http://ip-api.com/json";
	async function e() {
		try {
			const e = await fetch(t);
			const n = await e.json();
			if (n && n.status == "success" && n.countryCode) {
				return n.countryCode
			}
		} catch (t) {}
	}
	return {
		find: e
	}
}
const Ze = Xe();
const qe = -1;
let Qe = [];
const tn = ze();
let en = qe;
chrome.runtime.onInstalled.addListener((async function(t) {
	chrome.tabs.create({
		url: "https://web.whatsapp.com"
	});
	chrome.tabs.create({
		url: "thx.html"
	});
	const e = await Ve().find();
	if (e) {
		Ze.saveDefaultCountryCode(e)
	}
}));
chrome.runtime.setUninstallURL("https://api.whatsapp.com/send?phone=573202259042&text=I%20have%20uninstalled%20Plugin%20Sender%20for%20the%20following%20reason%3A");
chrome.runtime.onMessage.addListener((async function(t, e, n) {
	let s = null;
	if (t && t.subject) {
		switch (t.subject) {
			case d: {
				chrome.runtime.setUninstallURL(`https://api.whatsapp.com/send?phone=573202259042&text=I%20have%20uninstalled%20Plugin%20Sender%20for%20the%20following%20reason%3A`);
				break
			}
			case _: {
				tn.init(t.data, y);
				break
			}
			case l: {
				s = tn.getUpdateData();
				break
			}
			case c: {
				tn.init(t.data, B);
				break
			}
			case r: {
				tn.pause();
				break
			}
			case u: {
				tn.stop();
				break
			}
			case f: {
				tn.abort();
				break
			}
			case i: {
				tn.resume();
				break
			}
			case K: {
				if (t && t.data && t.data.tabId) {
					en = t.data.tabId
				}
				break
			}
			case U: {
				let t = nn(e);
				if (en !== qe) {
					tn.pause()
				}
				en = t;
				break
			}
			case D: {
				let t = nn(e);
				if (t === en) {
					en = qe;
					tn.pause()
				}
				break
			}
			case R: {
				tn.skipLinkPreview();
				break
			}
			case Ot: {
				Qe = t.data;
				break
			}
			case pt: {
				s = Qe;
				break
			}
		}
	}
	n(s)
}));

function nn(t) {
	let e = qe;
	if (t && t.tab && t.tab.id) {
		e = t.tab.id
	}
	return e
}

function ze() {
	const t = 60 * 1e3;
	let e = "";
	let o = [];
	let c = [];
	let r = false;
	let i = 0;
	let u = 0;
	let f = 0;
	let _ = 0;
	let l = false;
	let E = null;
	let S = b;
	let T = false;
	let A = true;
	let N = 0;
	let m = -1;
	let I = [];
	let g = [];
	let M = [];
	let d = it();
	let h = null;
	let G = null;
	let O = false;
	let p;
	let U = false;
	let D = false;
	let R = null;

	function v() {}
	async function H(t, n) {
		$();
		S = n;
		e = t.fileName ? t.fileName : "";
		o = t.numbers ? t.numbers : [];
		c = t.messages ? t.messages : o.map((t => ""));
		r = t.attachment ? t.attachment : false;
		i = t.messageGap ? t.messageGap : 0;
		l = t.randomizeDelay ? t.randomizeDelay : false;
		u = t.batchGap ? t.batchGap : 0;
		f = t.batchSize ? t.batchSize : o.length;
		U = t.isCaption ? t.isCaption : false;
		D = t.isPro;
		R = t.contact;
		M = [];
		o.forEach((t => M.push(Y)));
		let s = t.startTime ? t.startTime : Date.now();
		_ = s;
		v();
		K(s)
	}

	function K(t) {
		if (m < 0) {
			m = 0
		} else {
			m = m + 1
		}
		if (f > 0) {
			I = o.slice(m * f, (m + 1) * f);
			g = c.slice(m * f, (m + 1) * f)
		}
		if (t) {
			t = t - Date.now();
			if (t < 0) {
				t = 0
			}
		} else {
			t = 0
		}
		if (I && I.length > 0) {
			E = setTimeout((function() {
				E = null;
				W()
			}), t)
		} else {
			A = true;
			V();
			d.cancel();
			rt()
		}
	}

	function $() {
		j();
		d.cancel();
		F();
		k();
		x();
		rt()
	}

	function F() {
		o = [];
		c = [];
		M = [];
		r = false;
		U = false;
		i = 0;
		u = 0;
		f = 0;
		T = false;
		A = false;
		D = false;
		S = b;
		O = false;
		R = null
	}

	function k() {
		m = -1;
		I = [];
		g = []
	}

	function x() {
		if (h) {
			clearTimeout(h);
			h = null
		}
		if (G) {
			G();
			G = null
		}
	}

	function j() {
		if (E) {
			clearTimeout(E);
			N = 0
		}
		E = null
	}

	function J() {
		let t = true;
		if (M.filter((t => t === w)).length > 2) {
			if ((r || R) && !D) {
				t = false
			}
		}
		return t
	}
	async function W(t = 0, e = 0) {
		N = t;
		for (let n = t; n < I.length; ++n) {
			await X(e);
			e = 0;
			if (en !== qe && !T) {
				if (I.length > n) {
					try {
						if (J()) {
							const t = await z(I[n], g[n], r, U);
							M[m * f + n] = t
						} else {
							nt()
						}
					} catch (t) {
						nt();
						break
					}
					V();
					N = n + 1
				}
			} else {
				nt();
				break
			}
		}
		if (!T) {
			const t = Z();
			d.set(Date.now() + t);
			K(Date.now() + t)
		}
	}

	function X(t) {
		return new Promise(((e, n) => {
			let s;
			if (t !== 0) {
				s = t
			} else {
				s = q()
			}
			d.set(Date.now() + s);
			h = setTimeout((() => {
				h = null;
				G = null;
				e()
			}), s);
			G = e
		}))
	}

	function z(t, e, o, a) {
		d.cancel();
		if (S === y) {
			return Yt({
				from: n,
				subject: s,
				data: {
					message: e,
					number: t,
					isAttachment: o,
					isCaption: a,
					skipLinkPreview: O,
					contact: R
				}
			}, en)
		} else if (S === B) {
			return Yt({
				from: n,
				subject: L,
				data: {
					number: t
				}
			}, en)
		}
	}

	function V() {
		Ht({
			from: n,
			subject: a,
			data: Q()
		})
	}

	function Z() {
		return u * t
	}

	function q() {
		let t = 0;
		if (l && Math.random() < .5) {
			t = i * 1e3 / 2
		} else {
			t = i * 1e3
		}
		return t
	}

	function Q() {
		return d.getUpdateData()
	}

	function tt() {
		if (N === f) {
			return m * f
		} else {
			return m * f + N
		}
	}

	function et() {
		return {
			isFinished: A,
			operation: S,
			isPaused: T,
			numbers: o,
			messages: c,
			status: M,
			nextMessageIndex: tt(),
			isPro: D,
			isAttachment: r,
			contact: R
		}
	}

	function nt() {
		if (S !== "OPERATION_NONE" && M.filter((t => t === "STATUS_PENDING")).length > 0) {
			if (!T) {
				T = true;
				p = d.getTimeLeftForNextShoot();
				x();
				j();
				V();
				d.cancel();
				d.sendUpdates();
				v()
			}
		}
	}

	function st() {
		A = true;
		T = true;
		x();
		j();
		V();
		d.cancel();
		d.sendUpdates()
	}

	function ot() {
		if (T) {
			v();
			T = false;
			rt();
			W(N, p)
		}
	}

	function at() {
		$()
	}

	function ct() {
		O = true
	}

	function rt() {
		Yt({
			from: n,
			subject: P
		}, en);
		Ht({
			from: n,
			subject: P
		})
	}
	return {
		init: H,
		getUpdateData: Q,
		pause: nt,
		resume: ot,
		abort: at,
		stop: st,
		skipLinkPreview: ct
	};

	function it() {
		const t = 0 * 1e3;
		const s = 1e3;
		let o = null;
		let a = 0;

		function c(e) {
			a = e;
			l();
			if (a - Date.now() > t) {
				o = setInterval(r, s)
			}
		}

		function r() {
			u();
			f()
		}

		function i() {
			return {
				fileName: e,
				nextMessageTime: a,
				operation: S,
				isPaused: T,
				isFinished: A,
				startTime: _,
				report: et()
			}
		}

		function u() {
			Ht({
				from: n,
				subject: C,
				data: i()
			}, en)
		}

		function f() {
			Yt({
				from: n,
				subject: C,
				data: {
					nextMessageTime: a,
					operation: S,
					isPaused: T,
					isFinished: A
				}
			}, en)
		}

		function l() {
			if (o) {
				clearInterval(o)
			}
		}

		function E() {
			return a - Date.now()
		}
		return {
			cancel: l,
			set: c,
			sendUpdates: r,
			getTimeLeftForNextShoot: E,
			getUpdateData: i
		}
	}
}