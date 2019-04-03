/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.jsx","libs"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../common/constants/index.js":
/*!************************************!*\
  !*** ../common/constants/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  INCOMES: "incomes",
  WALLETS: "wallets",
  COSTS: "costs"
};

/***/ }),

/***/ "../common/funcs/index.js":
/*!********************************!*\
  !*** ../common/funcs/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function fixAccuracy(num) {
  return +num.toFixed(10);
}

module.exports = {
  fixAccuracy
};

/***/ }),

/***/ "../node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ../node_modules/moment/locale sync ^\.\/.*$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../node_modules/moment/locale/af.js",
	"./af.js": "../node_modules/moment/locale/af.js",
	"./ar": "../node_modules/moment/locale/ar.js",
	"./ar-dz": "../node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../node_modules/moment/locale/ar.js",
	"./az": "../node_modules/moment/locale/az.js",
	"./az.js": "../node_modules/moment/locale/az.js",
	"./be": "../node_modules/moment/locale/be.js",
	"./be.js": "../node_modules/moment/locale/be.js",
	"./bg": "../node_modules/moment/locale/bg.js",
	"./bg.js": "../node_modules/moment/locale/bg.js",
	"./bm": "../node_modules/moment/locale/bm.js",
	"./bm.js": "../node_modules/moment/locale/bm.js",
	"./bn": "../node_modules/moment/locale/bn.js",
	"./bn.js": "../node_modules/moment/locale/bn.js",
	"./bo": "../node_modules/moment/locale/bo.js",
	"./bo.js": "../node_modules/moment/locale/bo.js",
	"./br": "../node_modules/moment/locale/br.js",
	"./br.js": "../node_modules/moment/locale/br.js",
	"./bs": "../node_modules/moment/locale/bs.js",
	"./bs.js": "../node_modules/moment/locale/bs.js",
	"./ca": "../node_modules/moment/locale/ca.js",
	"./ca.js": "../node_modules/moment/locale/ca.js",
	"./cs": "../node_modules/moment/locale/cs.js",
	"./cs.js": "../node_modules/moment/locale/cs.js",
	"./cv": "../node_modules/moment/locale/cv.js",
	"./cv.js": "../node_modules/moment/locale/cv.js",
	"./cy": "../node_modules/moment/locale/cy.js",
	"./cy.js": "../node_modules/moment/locale/cy.js",
	"./da": "../node_modules/moment/locale/da.js",
	"./da.js": "../node_modules/moment/locale/da.js",
	"./de": "../node_modules/moment/locale/de.js",
	"./de-at": "../node_modules/moment/locale/de-at.js",
	"./de-at.js": "../node_modules/moment/locale/de-at.js",
	"./de-ch": "../node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../node_modules/moment/locale/de-ch.js",
	"./de.js": "../node_modules/moment/locale/de.js",
	"./dv": "../node_modules/moment/locale/dv.js",
	"./dv.js": "../node_modules/moment/locale/dv.js",
	"./el": "../node_modules/moment/locale/el.js",
	"./el.js": "../node_modules/moment/locale/el.js",
	"./en-SG": "../node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "../node_modules/moment/locale/en-SG.js",
	"./en-au": "../node_modules/moment/locale/en-au.js",
	"./en-au.js": "../node_modules/moment/locale/en-au.js",
	"./en-ca": "../node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../node_modules/moment/locale/en-ca.js",
	"./en-gb": "../node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../node_modules/moment/locale/en-gb.js",
	"./en-ie": "../node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../node_modules/moment/locale/en-ie.js",
	"./en-il": "../node_modules/moment/locale/en-il.js",
	"./en-il.js": "../node_modules/moment/locale/en-il.js",
	"./en-nz": "../node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../node_modules/moment/locale/en-nz.js",
	"./eo": "../node_modules/moment/locale/eo.js",
	"./eo.js": "../node_modules/moment/locale/eo.js",
	"./es": "../node_modules/moment/locale/es.js",
	"./es-do": "../node_modules/moment/locale/es-do.js",
	"./es-do.js": "../node_modules/moment/locale/es-do.js",
	"./es-us": "../node_modules/moment/locale/es-us.js",
	"./es-us.js": "../node_modules/moment/locale/es-us.js",
	"./es.js": "../node_modules/moment/locale/es.js",
	"./et": "../node_modules/moment/locale/et.js",
	"./et.js": "../node_modules/moment/locale/et.js",
	"./eu": "../node_modules/moment/locale/eu.js",
	"./eu.js": "../node_modules/moment/locale/eu.js",
	"./fa": "../node_modules/moment/locale/fa.js",
	"./fa.js": "../node_modules/moment/locale/fa.js",
	"./fi": "../node_modules/moment/locale/fi.js",
	"./fi.js": "../node_modules/moment/locale/fi.js",
	"./fo": "../node_modules/moment/locale/fo.js",
	"./fo.js": "../node_modules/moment/locale/fo.js",
	"./fr": "../node_modules/moment/locale/fr.js",
	"./fr-ca": "../node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../node_modules/moment/locale/fr.js",
	"./fy": "../node_modules/moment/locale/fy.js",
	"./fy.js": "../node_modules/moment/locale/fy.js",
	"./ga": "../node_modules/moment/locale/ga.js",
	"./ga.js": "../node_modules/moment/locale/ga.js",
	"./gd": "../node_modules/moment/locale/gd.js",
	"./gd.js": "../node_modules/moment/locale/gd.js",
	"./gl": "../node_modules/moment/locale/gl.js",
	"./gl.js": "../node_modules/moment/locale/gl.js",
	"./gom-latn": "../node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../node_modules/moment/locale/gom-latn.js",
	"./gu": "../node_modules/moment/locale/gu.js",
	"./gu.js": "../node_modules/moment/locale/gu.js",
	"./he": "../node_modules/moment/locale/he.js",
	"./he.js": "../node_modules/moment/locale/he.js",
	"./hi": "../node_modules/moment/locale/hi.js",
	"./hi.js": "../node_modules/moment/locale/hi.js",
	"./hr": "../node_modules/moment/locale/hr.js",
	"./hr.js": "../node_modules/moment/locale/hr.js",
	"./hu": "../node_modules/moment/locale/hu.js",
	"./hu.js": "../node_modules/moment/locale/hu.js",
	"./hy-am": "../node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../node_modules/moment/locale/hy-am.js",
	"./id": "../node_modules/moment/locale/id.js",
	"./id.js": "../node_modules/moment/locale/id.js",
	"./is": "../node_modules/moment/locale/is.js",
	"./is.js": "../node_modules/moment/locale/is.js",
	"./it": "../node_modules/moment/locale/it.js",
	"./it-ch": "../node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "../node_modules/moment/locale/it-ch.js",
	"./it.js": "../node_modules/moment/locale/it.js",
	"./ja": "../node_modules/moment/locale/ja.js",
	"./ja.js": "../node_modules/moment/locale/ja.js",
	"./jv": "../node_modules/moment/locale/jv.js",
	"./jv.js": "../node_modules/moment/locale/jv.js",
	"./ka": "../node_modules/moment/locale/ka.js",
	"./ka.js": "../node_modules/moment/locale/ka.js",
	"./kk": "../node_modules/moment/locale/kk.js",
	"./kk.js": "../node_modules/moment/locale/kk.js",
	"./km": "../node_modules/moment/locale/km.js",
	"./km.js": "../node_modules/moment/locale/km.js",
	"./kn": "../node_modules/moment/locale/kn.js",
	"./kn.js": "../node_modules/moment/locale/kn.js",
	"./ko": "../node_modules/moment/locale/ko.js",
	"./ko.js": "../node_modules/moment/locale/ko.js",
	"./ku": "../node_modules/moment/locale/ku.js",
	"./ku.js": "../node_modules/moment/locale/ku.js",
	"./ky": "../node_modules/moment/locale/ky.js",
	"./ky.js": "../node_modules/moment/locale/ky.js",
	"./lb": "../node_modules/moment/locale/lb.js",
	"./lb.js": "../node_modules/moment/locale/lb.js",
	"./lo": "../node_modules/moment/locale/lo.js",
	"./lo.js": "../node_modules/moment/locale/lo.js",
	"./lt": "../node_modules/moment/locale/lt.js",
	"./lt.js": "../node_modules/moment/locale/lt.js",
	"./lv": "../node_modules/moment/locale/lv.js",
	"./lv.js": "../node_modules/moment/locale/lv.js",
	"./me": "../node_modules/moment/locale/me.js",
	"./me.js": "../node_modules/moment/locale/me.js",
	"./mi": "../node_modules/moment/locale/mi.js",
	"./mi.js": "../node_modules/moment/locale/mi.js",
	"./mk": "../node_modules/moment/locale/mk.js",
	"./mk.js": "../node_modules/moment/locale/mk.js",
	"./ml": "../node_modules/moment/locale/ml.js",
	"./ml.js": "../node_modules/moment/locale/ml.js",
	"./mn": "../node_modules/moment/locale/mn.js",
	"./mn.js": "../node_modules/moment/locale/mn.js",
	"./mr": "../node_modules/moment/locale/mr.js",
	"./mr.js": "../node_modules/moment/locale/mr.js",
	"./ms": "../node_modules/moment/locale/ms.js",
	"./ms-my": "../node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../node_modules/moment/locale/ms-my.js",
	"./ms.js": "../node_modules/moment/locale/ms.js",
	"./mt": "../node_modules/moment/locale/mt.js",
	"./mt.js": "../node_modules/moment/locale/mt.js",
	"./my": "../node_modules/moment/locale/my.js",
	"./my.js": "../node_modules/moment/locale/my.js",
	"./nb": "../node_modules/moment/locale/nb.js",
	"./nb.js": "../node_modules/moment/locale/nb.js",
	"./ne": "../node_modules/moment/locale/ne.js",
	"./ne.js": "../node_modules/moment/locale/ne.js",
	"./nl": "../node_modules/moment/locale/nl.js",
	"./nl-be": "../node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../node_modules/moment/locale/nl-be.js",
	"./nl.js": "../node_modules/moment/locale/nl.js",
	"./nn": "../node_modules/moment/locale/nn.js",
	"./nn.js": "../node_modules/moment/locale/nn.js",
	"./pa-in": "../node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../node_modules/moment/locale/pa-in.js",
	"./pl": "../node_modules/moment/locale/pl.js",
	"./pl.js": "../node_modules/moment/locale/pl.js",
	"./pt": "../node_modules/moment/locale/pt.js",
	"./pt-br": "../node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../node_modules/moment/locale/pt-br.js",
	"./pt.js": "../node_modules/moment/locale/pt.js",
	"./ro": "../node_modules/moment/locale/ro.js",
	"./ro.js": "../node_modules/moment/locale/ro.js",
	"./ru": "../node_modules/moment/locale/ru.js",
	"./ru.js": "../node_modules/moment/locale/ru.js",
	"./sd": "../node_modules/moment/locale/sd.js",
	"./sd.js": "../node_modules/moment/locale/sd.js",
	"./se": "../node_modules/moment/locale/se.js",
	"./se.js": "../node_modules/moment/locale/se.js",
	"./si": "../node_modules/moment/locale/si.js",
	"./si.js": "../node_modules/moment/locale/si.js",
	"./sk": "../node_modules/moment/locale/sk.js",
	"./sk.js": "../node_modules/moment/locale/sk.js",
	"./sl": "../node_modules/moment/locale/sl.js",
	"./sl.js": "../node_modules/moment/locale/sl.js",
	"./sq": "../node_modules/moment/locale/sq.js",
	"./sq.js": "../node_modules/moment/locale/sq.js",
	"./sr": "../node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../node_modules/moment/locale/sr.js",
	"./ss": "../node_modules/moment/locale/ss.js",
	"./ss.js": "../node_modules/moment/locale/ss.js",
	"./sv": "../node_modules/moment/locale/sv.js",
	"./sv.js": "../node_modules/moment/locale/sv.js",
	"./sw": "../node_modules/moment/locale/sw.js",
	"./sw.js": "../node_modules/moment/locale/sw.js",
	"./ta": "../node_modules/moment/locale/ta.js",
	"./ta.js": "../node_modules/moment/locale/ta.js",
	"./te": "../node_modules/moment/locale/te.js",
	"./te.js": "../node_modules/moment/locale/te.js",
	"./tet": "../node_modules/moment/locale/tet.js",
	"./tet.js": "../node_modules/moment/locale/tet.js",
	"./tg": "../node_modules/moment/locale/tg.js",
	"./tg.js": "../node_modules/moment/locale/tg.js",
	"./th": "../node_modules/moment/locale/th.js",
	"./th.js": "../node_modules/moment/locale/th.js",
	"./tl-ph": "../node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../node_modules/moment/locale/tl-ph.js",
	"./tlh": "../node_modules/moment/locale/tlh.js",
	"./tlh.js": "../node_modules/moment/locale/tlh.js",
	"./tr": "../node_modules/moment/locale/tr.js",
	"./tr.js": "../node_modules/moment/locale/tr.js",
	"./tzl": "../node_modules/moment/locale/tzl.js",
	"./tzl.js": "../node_modules/moment/locale/tzl.js",
	"./tzm": "../node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../node_modules/moment/locale/tzm.js",
	"./ug-cn": "../node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "../node_modules/moment/locale/ug-cn.js",
	"./uk": "../node_modules/moment/locale/uk.js",
	"./uk.js": "../node_modules/moment/locale/uk.js",
	"./ur": "../node_modules/moment/locale/ur.js",
	"./ur.js": "../node_modules/moment/locale/ur.js",
	"./uz": "../node_modules/moment/locale/uz.js",
	"./uz-latn": "../node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../node_modules/moment/locale/uz.js",
	"./vi": "../node_modules/moment/locale/vi.js",
	"./vi.js": "../node_modules/moment/locale/vi.js",
	"./x-pseudo": "../node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../node_modules/moment/locale/x-pseudo.js",
	"./yo": "../node_modules/moment/locale/yo.js",
	"./yo.js": "../node_modules/moment/locale/yo.js",
	"./zh-cn": "../node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../server/db/config.js":
/*!******************************!*\
  !*** ../server/db/config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {const NODE_ENV = "development" || false;
const IS_DEV = NODE_ENV === "development";
const PORT = NODE_ENV === "development" ? 8080 : process.env.PORT;
const site = IS_DEV ? "http://localhost:8080" : "https://take-my-money.herokuapp.com";
const clientID = "MfWXuUWdMvJDyMDTNIHQkslK6u8mTdXu";
const domain = "dev-532l1po4.eu.auth0.com";
module.exports = {
  PORT,
  IS_DEV,
  site,
  domain,
  clientID
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "./AC/ACcommon.js":
/*!************************!*\
  !*** ./AC/ACcommon.js ***!
  \************************/
/*! exports provided: START, ERR, getHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START", function() { return START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR", function() { return ERR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaders", function() { return getHeaders; });
/* harmony import */ var _components_Auth_Auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Auth/Auth */ "./components/Auth/Auth.js");

const START = "_START";
const ERR = "_ERR";
const getHeaders = () => ({
  Authorization: `Bearer ${_components_Auth_Auth__WEBPACK_IMPORTED_MODULE_0__["default"].getIdToken()}`
});

/***/ }),

/***/ "./AC/ACdnd.js":
/*!*********************!*\
  !*** ./AC/ACdnd.js ***!
  \*********************/
/*! exports provided: SET_DRAG_EL, setDragEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DRAG_EL", function() { return SET_DRAG_EL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDragEl", function() { return setDragEl; });
const SET_DRAG_EL = "SET_DRAG_EL";
function setDragEl(data) {
  return {
    type: SET_DRAG_EL,
    data
  };
}

/***/ }),

/***/ "./AC/ACfinance.js":
/*!*************************!*\
  !*** ./AC/ACfinance.js ***!
  \*************************/
/*! exports provided: GET_ITEMS, ADD_ITEM, EDIT_ITEM, DELETE_ITEM, DISABLE_ITEM, UPDATE_ITEMS, getItems, addItem, editItem, deleteItem, disableItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS", function() { return GET_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ITEM", function() { return ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_ITEM", function() { return EDIT_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ITEM", function() { return DELETE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISABLE_ITEM", function() { return DISABLE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ITEMS", function() { return UPDATE_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editItem", function() { return editItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableItem", function() { return disableItem; });
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-api-middleware */ "../node_modules/redux-api-middleware/lib/index.umd.js");
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ACcommon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ACcommon */ "./AC/ACcommon.js");


const GET_ITEMS = "GET_ITEMS";
const ADD_ITEM = "ADD_ITEM";
const EDIT_ITEM = "EDIT_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const DISABLE_ITEM = "DISABLE_ITEM";
const UPDATE_ITEMS = "UPDATE_ITEMS";
function getItems(type) {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      endpoint: `/${type}`,
      method: "GET",
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], GET_ITEMS, _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]],
      headers: Object(_ACcommon__WEBPACK_IMPORTED_MODULE_1__["getHeaders"])()
    }
  };
}
function addItem(formData, type) {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], ADD_ITEM, _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]],
      method: "POST",
      endpoint: `/${type}`,
      body: formData,
      headers: Object(_ACcommon__WEBPACK_IMPORTED_MODULE_1__["getHeaders"])()
    }
  };
}
function editItem(body, type) {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], EDIT_ITEM, _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]],
      method: "PUT",
      endpoint: `/${type}`,
      body,
      headers: Object(_ACcommon__WEBPACK_IMPORTED_MODULE_1__["getHeaders"])()
    }
  };
}
function deleteItem(_id, type) {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], DELETE_ITEM, _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]],
      method: "DELETE",
      endpoint: `/${type}/${_id}`,
      headers: Object(_ACcommon__WEBPACK_IMPORTED_MODULE_1__["getHeaders"])()
    }
  };
}
function disableItem(_id, type) {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], DISABLE_ITEM, _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]],
      method: "DELETE",
      endpoint: `/disable_${type}/${_id}`,
      headers: Object(_ACcommon__WEBPACK_IMPORTED_MODULE_1__["getHeaders"])()
    }
  };
}

/***/ }),

/***/ "./AC/ACoperations.js":
/*!****************************!*\
  !*** ./AC/ACoperations.js ***!
  \****************************/
/*! exports provided: ADD_OP, EDIT_OP, GET_OPS, DELETE_OP, getOps, addOp, editOp, delOp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_OP", function() { return ADD_OP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_OP", function() { return EDIT_OP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_OPS", function() { return GET_OPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_OP", function() { return DELETE_OP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOps", function() { return getOps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOp", function() { return addOp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editOp", function() { return editOp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delOp", function() { return delOp; });
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-api-middleware */ "../node_modules/redux-api-middleware/lib/index.umd.js");
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ACcommon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ACcommon */ "./AC/ACcommon.js");


const ADD_OP = "ADD_OP";
const EDIT_OP = "EDIT_OP";
const GET_OPS = "GET_OPS";
const DELETE_OP = "DELETE_OP";
function getOps() {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], GET_OPS, _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]],
      method: "GET",
      endpoint: "/operations",
      headers: Object(_ACcommon__WEBPACK_IMPORTED_MODULE_1__["getHeaders"])()
    }
  };
}
function addOp(formData) {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], ADD_OP, _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]],
      method: "POST",
      endpoint: "/operations",
      body: formData,
      headers: Object(_ACcommon__WEBPACK_IMPORTED_MODULE_1__["getHeaders"])()
    }
  };
}
function editOp(formData) {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], EDIT_OP, _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]],
      method: "PUT",
      endpoint: "/operations",
      body: formData,
      headers: Object(_ACcommon__WEBPACK_IMPORTED_MODULE_1__["getHeaders"])()
    }
  };
}
function delOp(_id) {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], DELETE_OP, _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]],
      method: "DELETE",
      endpoint: `/operations/${_id}`,
      headers: Object(_ACcommon__WEBPACK_IMPORTED_MODULE_1__["getHeaders"])()
    }
  };
}

/***/ }),

/***/ "./AC/ACtoggleCharts.js":
/*!******************************!*\
  !*** ./AC/ACtoggleCharts.js ***!
  \******************************/
/*! exports provided: CHANGE_VISIBILITY, toggleCharts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_VISIBILITY", function() { return CHANGE_VISIBILITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCharts", function() { return toggleCharts; });
const CHANGE_VISIBILITY = "CHANGE_VISIBILITY";
function toggleCharts() {
  return {
    type: CHANGE_VISIBILITY
  };
}

/***/ }),

/***/ "./AC/index.js":
/*!*********************!*\
  !*** ./AC/index.js ***!
  \*********************/
/*! exports provided: GET_ITEMS, ADD_ITEM, EDIT_ITEM, DELETE_ITEM, DISABLE_ITEM, UPDATE_ITEMS, getItems, addItem, editItem, deleteItem, disableItem, ADD_OP, EDIT_OP, GET_OPS, DELETE_OP, getOps, addOp, editOp, delOp, SET_DRAG_EL, setDragEl, START, ERR, getHeaders, CHANGE_VISIBILITY, toggleCharts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ACfinance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ACfinance */ "./AC/ACfinance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS", function() { return _ACfinance__WEBPACK_IMPORTED_MODULE_0__["GET_ITEMS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_ITEM", function() { return _ACfinance__WEBPACK_IMPORTED_MODULE_0__["ADD_ITEM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDIT_ITEM", function() { return _ACfinance__WEBPACK_IMPORTED_MODULE_0__["EDIT_ITEM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_ITEM", function() { return _ACfinance__WEBPACK_IMPORTED_MODULE_0__["DELETE_ITEM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DISABLE_ITEM", function() { return _ACfinance__WEBPACK_IMPORTED_MODULE_0__["DISABLE_ITEM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ITEMS", function() { return _ACfinance__WEBPACK_IMPORTED_MODULE_0__["UPDATE_ITEMS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return _ACfinance__WEBPACK_IMPORTED_MODULE_0__["getItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return _ACfinance__WEBPACK_IMPORTED_MODULE_0__["addItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "editItem", function() { return _ACfinance__WEBPACK_IMPORTED_MODULE_0__["editItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return _ACfinance__WEBPACK_IMPORTED_MODULE_0__["deleteItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableItem", function() { return _ACfinance__WEBPACK_IMPORTED_MODULE_0__["disableItem"]; });

/* harmony import */ var _ACoperations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ACoperations */ "./AC/ACoperations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_OP", function() { return _ACoperations__WEBPACK_IMPORTED_MODULE_1__["ADD_OP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDIT_OP", function() { return _ACoperations__WEBPACK_IMPORTED_MODULE_1__["EDIT_OP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_OPS", function() { return _ACoperations__WEBPACK_IMPORTED_MODULE_1__["GET_OPS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_OP", function() { return _ACoperations__WEBPACK_IMPORTED_MODULE_1__["DELETE_OP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOps", function() { return _ACoperations__WEBPACK_IMPORTED_MODULE_1__["getOps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addOp", function() { return _ACoperations__WEBPACK_IMPORTED_MODULE_1__["addOp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "editOp", function() { return _ACoperations__WEBPACK_IMPORTED_MODULE_1__["editOp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delOp", function() { return _ACoperations__WEBPACK_IMPORTED_MODULE_1__["delOp"]; });

/* harmony import */ var _ACdnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ACdnd */ "./AC/ACdnd.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_DRAG_EL", function() { return _ACdnd__WEBPACK_IMPORTED_MODULE_2__["SET_DRAG_EL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDragEl", function() { return _ACdnd__WEBPACK_IMPORTED_MODULE_2__["setDragEl"]; });

/* harmony import */ var _ACcommon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ACcommon */ "./AC/ACcommon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "START", function() { return _ACcommon__WEBPACK_IMPORTED_MODULE_3__["START"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERR", function() { return _ACcommon__WEBPACK_IMPORTED_MODULE_3__["ERR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHeaders", function() { return _ACcommon__WEBPACK_IMPORTED_MODULE_3__["getHeaders"]; });

/* harmony import */ var _ACtoggleCharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ACtoggleCharts */ "./AC/ACtoggleCharts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHANGE_VISIBILITY", function() { return _ACtoggleCharts__WEBPACK_IMPORTED_MODULE_4__["CHANGE_VISIBILITY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleCharts", function() { return _ACtoggleCharts__WEBPACK_IMPORTED_MODULE_4__["toggleCharts"]; });







/***/ }),

/***/ "./HOC/windows/MainWindow.jsx":
/*!************************************!*\
  !*** ./HOC/windows/MainWindow.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./helpers/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class MainWindow extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      showModal: false
    });

    _defineProperty(this, "openModal", () => {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["bodyScroll"])(false);
      this.setState({
        showModal: true
      });
    });

    _defineProperty(this, "closeModal", () => {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["bodyScroll"])(true);
      this.setState({
        showModal: false
      });
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainWindow);

/***/ }),

/***/ "./HOC/windows/coinWindow/index.jsx":
/*!******************************************!*\
  !*** ./HOC/windows/coinWindow/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "../node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _windows_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../windows.sass */ "./HOC/windows/windows.sass");
/* harmony import */ var _windows_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_windows_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MainWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MainWindow */ "./HOC/windows/MainWindow.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





/* harmony default export */ __webpack_exports__["default"] = ((Button, Component) => class ModalWindow extends _MainWindow__WEBPACK_IMPORTED_MODULE_3__["default"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, _extends({}, this.props, {
      openModal: this.openModal
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
      isOpen: this.state.showModal,
      className: _windows_sass__WEBPACK_IMPORTED_MODULE_2___default.a.window,
      overlayClassName: _windows_sass__WEBPACK_IMPORTED_MODULE_2___default.a.overlay,
      onRequestClose: this.closeModal,
      shouldCloseOnOverlayClick: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _windows_sass__WEBPACK_IMPORTED_MODULE_2___default.a.closeButton,
      onClick: this.closeModal
    }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, this.props, {
      closeModal: this.closeModal
    }))));
  }

});

/***/ }),

/***/ "./HOC/windows/confirmWindow/ConfirmContent.jsx":
/*!******************************************************!*\
  !*** ./HOC/windows/confirmWindow/ConfirmContent.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ConfirmContent_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfirmContent.sass */ "./HOC/windows/confirmWindow/ConfirmContent.sass");
/* harmony import */ var _ConfirmContent_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ConfirmContent_sass__WEBPACK_IMPORTED_MODULE_2__);




function ConfirmContent({
  title,
  confirmText,
  confirm,
  cancelText,
  cancel
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _ConfirmContent_sass__WEBPACK_IMPORTED_MODULE_2___default.a.title
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: _ConfirmContent_sass__WEBPACK_IMPORTED_MODULE_2___default.a.buttons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: _ConfirmContent_sass__WEBPACK_IMPORTED_MODULE_2___default.a.firstButton,
    onClick: confirm,
    type: "button"
  }, confirmText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: cancel
  }, cancelText)));
}

ConfirmContent.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  confirmText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  confirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  cancelText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
ConfirmContent.defaultProps = {
  title: "Вы уверены?",
  confirmText: "Да",
  cancelText: "Нет"
};
/* harmony default export */ __webpack_exports__["default"] = (ConfirmContent);

/***/ }),

/***/ "./HOC/windows/confirmWindow/ConfirmContent.sass":
/*!*******************************************************!*\
  !*** ./HOC/windows/confirmWindow/ConfirmContent.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"window":"_30DGosYEJfW0J3KVAra9FK","title":"_3nBhfK9CWIJPeQpGpZFqLh","buttons":"_3ggX4sBmf80rFq_iohiHyX","firstButton":"so8M4ZNzGdSjwz_sl7i39"};

/***/ }),

/***/ "./HOC/windows/confirmWindow/index.jsx":
/*!*********************************************!*\
  !*** ./HOC/windows/confirmWindow/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "../node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ConfirmContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConfirmContent */ "./HOC/windows/confirmWindow/ConfirmContent.jsx");
/* harmony import */ var _windows_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../windows.sass */ "./HOC/windows/windows.sass");
/* harmony import */ var _windows_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_windows_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MainWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MainWindow */ "./HOC/windows/MainWindow.jsx");
/* harmony import */ var _ConfirmContent_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ConfirmContent.sass */ "./HOC/windows/confirmWindow/ConfirmContent.sass");
/* harmony import */ var _ConfirmContent_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ConfirmContent_sass__WEBPACK_IMPORTED_MODULE_6__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* harmony default export */ __webpack_exports__["default"] = (DeleteButton => {
  var _class, _temp;

  return _temp = _class = class ConfirmWidwow extends _MainWindow__WEBPACK_IMPORTED_MODULE_5__["default"] {
    render() {
      const {
        sass,
        title,
        confirmText,
        confirm,
        cancelText,
        cancel
      } = this.props;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DeleteButton, {
        sass: sass,
        openModal: this.openModal
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
        isOpen: this.state.showModal,
        className: `${_ConfirmContent_sass__WEBPACK_IMPORTED_MODULE_6___default.a.window} ${_windows_sass__WEBPACK_IMPORTED_MODULE_4___default.a.window}`,
        overlayClassName: _windows_sass__WEBPACK_IMPORTED_MODULE_4___default.a.overlay,
        onRequestClose: this.closeModal,
        shouldCloseOnOverlayClick: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _windows_sass__WEBPACK_IMPORTED_MODULE_4___default.a.closeButton,
        onClick: this.closeModal
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConfirmContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: title,
        confirmText: confirmText,
        confirm: confirm,
        cancelText: cancelText,
        cancel: cancel || this.closeModal
      })));
    }

  }, _defineProperty(_class, "propTypes", {
    confirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    sass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }), _defineProperty(_class, "defaultProps", {
    sass: ""
  }), _temp;
});

/***/ }),

/***/ "./HOC/windows/listOpWindow/index.jsx":
/*!********************************************!*\
  !*** ./HOC/windows/listOpWindow/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "../node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _windows_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../windows.sass */ "./HOC/windows/windows.sass");
/* harmony import */ var _windows_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_windows_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _listOpWindow_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listOpWindow.sass */ "./HOC/windows/listOpWindow/listOpWindow.sass");
/* harmony import */ var _listOpWindow_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_listOpWindow_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MainWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MainWindow */ "./HOC/windows/MainWindow.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






react_modal__WEBPACK_IMPORTED_MODULE_1___default.a.setAppElement("#root");
/* harmony default export */ __webpack_exports__["default"] = ((Item, List) => {
  var _temp;

  return _temp = class listOpWindow extends _MainWindow__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        _id: null
      });

      _defineProperty(this, "openModal", _id => () => {
        document.body.style.overflow = "hidden";
        this.setState({
          showModal: true,
          _id
        });
      });
    }

    render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, _extends({}, this.props, {
        openListOp: this.openModal
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
        isOpen: this.state.showModal,
        className: `${_windows_sass__WEBPACK_IMPORTED_MODULE_2___default.a.window} ${_listOpWindow_sass__WEBPACK_IMPORTED_MODULE_3___default.a.window}`,
        overlayClassName: _windows_sass__WEBPACK_IMPORTED_MODULE_2___default.a.overlay,
        onRequestClose: this.closeModal,
        shouldCloseOnOverlayClick: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _windows_sass__WEBPACK_IMPORTED_MODULE_2___default.a.closeButton,
        onClick: this.closeModal
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, _extends({}, this.props, {
        closeListOp: this.closeModal
      }))));
    }

  }, _temp;
});

/***/ }),

/***/ "./HOC/windows/listOpWindow/listOpWindow.sass":
/*!****************************************************!*\
  !*** ./HOC/windows/listOpWindow/listOpWindow.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"window":"_98T3gaT7IO1zVHJtWpbjf"};

/***/ }),

/***/ "./HOC/windows/opWindow/index.jsx":
/*!****************************************!*\
  !*** ./HOC/windows/opWindow/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "../node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MainWindow */ "./HOC/windows/MainWindow.jsx");
/* harmony import */ var _windows_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../windows.sass */ "./HOC/windows/windows.sass");
/* harmony import */ var _windows_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_windows_sass__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





react_modal__WEBPACK_IMPORTED_MODULE_1___default.a.setAppElement("#root");
/* harmony default export */ __webpack_exports__["default"] = ((Button, Component) => {
  var _temp;

  return _temp = class OpWindow extends _MainWindow__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        from: {},
        to: {}
      });

      _defineProperty(this, "openModal", (from, to) => {
        document.body.style.overflow = "hidden";
        this.setState({
          showModal: true,
          from,
          to
        });
      });
    }

    render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, _extends({}, this.props, {
        openModal: this.openModal
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
        isOpen: this.state.showModal,
        className: _windows_sass__WEBPACK_IMPORTED_MODULE_3___default.a.window,
        overlayClassName: _windows_sass__WEBPACK_IMPORTED_MODULE_3___default.a.overlay,
        onRequestClose: this.closeModal,
        shouldCloseOnOverlayClick: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "delButton",
        className: _windows_sass__WEBPACK_IMPORTED_MODULE_3___default.a.closeButton,
        onClick: this.closeModal
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, this.state, {
        amountOp: this.props.amountOp,
        opId: this.props.opId,
        tag: this.props.tag,
        date: this.props.date,
        closeModal: this.closeModal
      }))));
    }

  }, _temp;
});

/***/ }),

/***/ "./HOC/windows/windows.sass":
/*!**********************************!*\
  !*** ./HOC/windows/windows.sass ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"incomesBright":"#006280","walletsBright":"#189238","costsBright":"#d0193b","incomesPale":"rgba(0, 98, 128, 0.7)","walletsPale":"rgba(24, 146, 56, 0.7)","costsPale":"rgba(208, 25, 59, 0.7)","grey":"grey","green":"#189238","red":"#d0193b","chartsBP":"800px","window":"P5XCtLjIoQCf45mkpLLs4","overlay":"_3AWXWE5T3KYNxf8w8WZ9uG","closeButton":"_3mR4MlLA52GYGPTnrXttRn"};

/***/ }),

/***/ "./components/App/App.jsx":
/*!********************************!*\
  !*** ./components/App/App.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.sass */ "./components/App/App.sass");
/* harmony import */ var _App_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Finances__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Finances */ "./components/Finances/index.js");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../AC */ "./AC/index.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Header/Header */ "./components/Header/Header.jsx");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Loading */ "./components/Loading/index.jsx");
/* harmony import */ var _Charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Charts */ "./components/Charts/index.js");
/* harmony import */ var _Auth_Auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Auth/Auth */ "./components/Auth/Auth.js");











const {
  INCOMES,
  WALLETS,
  COSTS
} = __webpack_require__(/*! ../../../common/constants */ "../common/constants/index.js");

class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  async componentDidMount() {
    window.scrollTo(0, 0);
    const {
      getItems,
      getOps
    } = this.props;
    const userName = _Auth_Auth__WEBPACK_IMPORTED_MODULE_9__["default"].isAuth() ? _Auth_Auth__WEBPACK_IMPORTED_MODULE_9__["default"].getUser().name : "demo";
    const dbName = (await axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: "GET",
      headers: Object(_AC__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(),
      url: `/choose-db/${userName}`
    })).data;

    if (dbName) {
      getItems(INCOMES);
      getItems(WALLETS);
      getItems(COSTS);
      getOps();
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.props.loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _App_sass__WEBPACK_IMPORTED_MODULE_3___default.a.content
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _App_sass__WEBPACK_IMPORTED_MODULE_3___default.a.finances
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Finances__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: INCOMES
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Finances__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: WALLETS
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Finances__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: COSTS
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
  }

}

App.propTypes = {
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  getItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  getOps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/App/App.sass":
/*!*********************************!*\
  !*** ./components/App/App.sass ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"incomesBright":"#006280","walletsBright":"#189238","costsBright":"#d0193b","incomesPale":"rgba(0, 98, 128, 0.7)","walletsPale":"rgba(24, 146, 56, 0.7)","costsPale":"rgba(208, 25, 59, 0.7)","grey":"grey","green":"#189238","red":"#d0193b","chartsBP":"800px","content":"_2JBLi9ZKidJiaIjimrqwp5","finances":"IXlW50zxnksgEhUFFdm0-"};

/***/ }),

/***/ "./components/App/index.jsx":
/*!**********************************!*\
  !*** ./components/App/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/store */ "./store/store.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./components/App/App.jsx");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AC */ "./AC/index.js");






function mapStateToProps(state) {
  return {
    loading: state.loading
  };
}

const mapDispatchToProps = {
  getItems: _AC__WEBPACK_IMPORTED_MODULE_4__["getItems"],
  getOps: _AC__WEBPACK_IMPORTED_MODULE_4__["getOps"]
};
const ConnectedApp = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_App__WEBPACK_IMPORTED_MODULE_3__["default"]);

function ResultApp() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: _store_store__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConnectedApp, null));
}

/* harmony default export */ __webpack_exports__["default"] = (ResultApp);

/***/ }),

/***/ "./components/App/sass/colors.sass":
/*!*****************************************!*\
  !*** ./components/App/sass/colors.sass ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"incomesBright":"#006280","walletsBright":"#189238","costsBright":"#d0193b","incomesPale":"rgba(0, 98, 128, 0.7)","walletsPale":"rgba(24, 146, 56, 0.7)","costsPale":"rgba(208, 25, 59, 0.7)","grey":"grey","green":"#189238","red":"#d0193b","chartsBP":"800px","incomes":"_20JDmF9eI1_8nxhOzrQTVO","wallets":"_2vOJe7PK5TO_huVYxx7hr2","costs":"_3Nc5ObxMUeQaaX85s1eGK_","incomesText":"_2unGx1xm-zVeZzPQpndqBp","walletsText":"_2er-GPuyWQIsnIJxcLrrnS","costsText":"_2yEjH_fM_pyIvqRwOD0OQz","greenText":"_2NcoCgCoDaZ10qS_D_aywX","redText":"_3HyS5GF-O6znPNZyatJkcW"};

/***/ }),

/***/ "./components/App/sass/global.sass":
/*!*****************************************!*\
  !*** ./components/App/sass/global.sass ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"incomesBright":"#006280","walletsBright":"#189238","costsBright":"#d0193b","incomesPale":"rgba(0, 98, 128, 0.7)","walletsPale":"rgba(24, 146, 56, 0.7)","costsPale":"rgba(208, 25, 59, 0.7)","grey":"grey","green":"#189238","red":"#d0193b","chartsBP":"800px","star":"_3bXnCw5-_66HJgMskkASq4","stopScroll":"_16Tgmjp2a-sFxBcVAJLomR","dn":"_13Mm7zls21M7ulkZNW5sCx"};

/***/ }),

/***/ "./components/App/sass/vars.sass":
/*!***************************************!*\
  !*** ./components/App/sass/vars.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"incomesBright":"#006280","walletsBright":"#189238","costsBright":"#d0193b","incomesPale":"rgba(0, 98, 128, 0.7)","walletsPale":"rgba(24, 146, 56, 0.7)","costsPale":"rgba(208, 25, 59, 0.7)","grey":"grey","green":"#189238","red":"#d0193b","chartsBP":"800px"};

/***/ }),

/***/ "./components/Auth/Auth.js":
/*!*********************************!*\
  !*** ./components/Auth/Auth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auth0-js */ "../node_modules/auth0-js/dist/auth0.min.esm.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  domain,
  clientID,
  site
} = __webpack_require__(/*! ../../../server/db/config */ "../server/db/config.js");

class Auth {
  constructor() {
    _defineProperty(this, "getUser", () => this.profile);

    _defineProperty(this, "getIdToken", () => this.idToken);

    _defineProperty(this, "isAuth", () => new Date().getTime() < this.expiresAt);

    _defineProperty(this, "signIn", () => {
      this.auth0.authorize();
    });

    _defineProperty(this, "handleAuth", () => new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);

        if (!authResult || !authResult.idToken) {
          return reject(err);
        }

        this.setSession(authResult);
        resolve();
      });
    }));

    _defineProperty(this, "signOut", path => {
      const returnTo = path ? `${site}${path}` : site;
      this.auth0.logout({
        returnTo,
        clientID
      });
    });

    _defineProperty(this, "silentAuth", () => new Promise((resolve, reject) => {
      this.auth0.checkSession({}, (err, authResult) => {
        if (err) return reject(err);
        this.setSession(authResult);
        resolve();
      });
    }));

    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_0__["default"].WebAuth({
      audience: `https://${domain}/userinfo`,
      redirectUri: `${site}/callback`,
      responseType: "id_token",
      scope: "openid profile",
      clientID,
      domain
    });
  }

  setSession(authResult) {
    this.idToken = authResult.idToken;
    this.profile = authResult.idTokenPayload;
    this.expiresAt = authResult.idTokenPayload.exp * 1000;
  }

}

const auth0Client = new Auth();
/* harmony default export */ __webpack_exports__["default"] = (auth0Client);

/***/ }),

/***/ "./components/Auth/Callback.jsx":
/*!**************************************!*\
  !*** ./components/Auth/Callback.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Auth */ "./components/Auth/Auth.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loading */ "./components/Loading/index.jsx");






class Callback extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  async componentDidMount() {
    await _Auth__WEBPACK_IMPORTED_MODULE_3__["default"].handleAuth();
    this.props.history.replace("/app");
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }

}

Callback.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    replace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Callback));

/***/ }),

/***/ "./components/Auth/SecuredRoute.jsx":
/*!******************************************!*\
  !*** ./components/Auth/SecuredRoute.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Auth */ "./components/Auth/Auth.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loading */ "./components/Loading/index.jsx");






function SecuredRoute({
  component: Component,
  path,
  checkingSession
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: path,
    render: () => {
      if (checkingSession) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);

      if (!_Auth__WEBPACK_IMPORTED_MODULE_3__["default"].isAuth()) {
        _Auth__WEBPACK_IMPORTED_MODULE_3__["default"].signIn();
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, null);
    }
  });
}

SecuredRoute.propTypes = {
  path: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  checkingSession: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SecuredRoute);

/***/ }),

/***/ "./components/Charts/Chart/Diagram/Diagram.jsx":
/*!*****************************************************!*\
  !*** ./components/Charts/Chart/Diagram/Diagram.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "../node_modules/react-chartjs-2/es/index.js");




function Diagram({
  items
}) {
  const colors = [];
  const labels = [];
  const data = [];
  items.forEach(item => {
    colors.push(item.bgcColor);
    labels.push(item.name);
    data.push(item.amount);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Doughnut"], {
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: colors,
        hoverBackgroundColor: colors
      }]
    },
    width: 1,
    height: 1,
    options: {
      legend: {
        display: false
      }
    }
  });
}

Diagram.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Array).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Diagram);

/***/ }),

/***/ "./components/Charts/Chart/Diagram/index.js":
/*!**************************************************!*\
  !*** ./components/Charts/Chart/Diagram/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Diagram */ "./components/Charts/Chart/Diagram/Diagram.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Diagram__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Charts/Chart/InfoItem/InfoItem.jsx":
/*!*******************************************************!*\
  !*** ./components/Charts/Chart/InfoItem/InfoItem.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InfoItem_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InfoItem.sass */ "./components/Charts/Chart/InfoItem/InfoItem.sass");
/* harmony import */ var _InfoItem_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_InfoItem_sass__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class InfoItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      menuOpen: false
    });

    _defineProperty(this, "toggleMenu", () => {
      this.setState(state => ({
        menuOpen: !state.menuOpen
      }));
    });
  }

  render() {
    const {
      item
    } = this.props;
    let tags = null;

    if (item.tags.length) {
      tags = item.tags.map(tag => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: tag.amount,
        className: _InfoItem_sass__WEBPACK_IMPORTED_MODULE_2___default.a.tagContainer
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _InfoItem_sass__WEBPACK_IMPORTED_MODULE_2___default.a.tagName
      }, tag.tagName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _InfoItem_sass__WEBPACK_IMPORTED_MODULE_2___default.a.tagAmount
      }, tag.amount)));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: tags && this.toggleMenu,
      className: _InfoItem_sass__WEBPACK_IMPORTED_MODULE_2___default.a.container
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _InfoItem_sass__WEBPACK_IMPORTED_MODULE_2___default.a.color,
      style: {
        background: item.bgcColor
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _InfoItem_sass__WEBPACK_IMPORTED_MODULE_2___default.a.textContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _InfoItem_sass__WEBPACK_IMPORTED_MODULE_2___default.a.name
    }, item.name, tags && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: this.state.menuOpen ? _InfoItem_sass__WEBPACK_IMPORTED_MODULE_2___default.a.open : _InfoItem_sass__WEBPACK_IMPORTED_MODULE_2___default.a.closed
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _InfoItem_sass__WEBPACK_IMPORTED_MODULE_2___default.a.amount
    }, item.amount))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.state.menuOpen ? _InfoItem_sass__WEBPACK_IMPORTED_MODULE_2___default.a.tagsShow : _InfoItem_sass__WEBPACK_IMPORTED_MODULE_2___default.a.tagsHide
    }, tags));
  }

}

InfoItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    amount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Array).isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (InfoItem);

/***/ }),

/***/ "./components/Charts/Chart/InfoItem/InfoItem.sass":
/*!********************************************************!*\
  !*** ./components/Charts/Chart/InfoItem/InfoItem.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"ccfVMIcVtvB2ouibjrR9P","color":"_1XqLhkNz4vFRvZgY4dnoup","textContainer":"IzRbSaupa8c9J0APgi_B8","name":"_2dLLxgJKLKRG-W58M0n0Mz","amount":"gY9guWh1xHOwfQUkl0a-v","tagContainer":"AgrF3U9nrDT9WUzYQ4ncP","tagName":"_1sxbEI3kV5IG6WeSVixFL4","tagAmount":"puJ1EqB9JyPWoZyqTd2-R","open":"UjJinnUgy5DknAoOkoX1-","closed":"_3WkeVhPQXZgisXG7JvygW6","tagsHide":"_38xbAOP6F94ZxX0ubpSp6J","tagsShow":"_1oFT0wSGrtEIIxfHrVaeu8"};

/***/ }),

/***/ "./components/Charts/Chart/InfoItem/index.js":
/*!***************************************************!*\
  !*** ./components/Charts/Chart/InfoItem/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoItem */ "./components/Charts/Chart/InfoItem/InfoItem.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_InfoItem__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Charts/Chart/InfoList/InfoList.jsx":
/*!*******************************************************!*\
  !*** ./components/Charts/Chart/InfoList/InfoList.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InfoList_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InfoList.sass */ "./components/Charts/Chart/InfoList/InfoList.sass");
/* harmony import */ var _InfoList_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_InfoList_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _InfoItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InfoItem */ "./components/Charts/Chart/InfoItem/index.js");






const {
  fixAccuracy
} = __webpack_require__(/*! ../../../../../common/funcs */ "../common/funcs/index.js");

function Info({
  items,
  month,
  period
}) {
  let summ = 0;
  const lines = items.map(item => {
    summ += item.amount;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: item._id,
      item: item
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    title: `С ${period[0]}-го по ${period[1]}-е`
  }, moment__WEBPACK_IMPORTED_MODULE_1___default()(month).format("MMMM YYYY")), lines, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _InfoList_sass__WEBPACK_IMPORTED_MODULE_3___default.a.summ
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0421\u0443\u043C\u043C\u0430: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, fixAccuracy(summ))));
}

Info.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(Array),
  month: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(Date).isRequired,
  period: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(Array).isRequired
};
Info.defaultProps = {
  items: []
};
/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./components/Charts/Chart/InfoList/InfoList.sass":
/*!********************************************************!*\
  !*** ./components/Charts/Chart/InfoList/InfoList.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"summ":"V5ghQsozME5bxY5dWlbhK"};

/***/ }),

/***/ "./components/Charts/Chart/InfoList/index.js":
/*!***************************************************!*\
  !*** ./components/Charts/Chart/InfoList/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoList */ "./components/Charts/Chart/InfoList/InfoList.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_InfoList__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Charts/Chart/index.jsx":
/*!*******************************************!*\
  !*** ./components/Charts/Chart/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Diagram */ "./components/Charts/Chart/Diagram/index.js");
/* harmony import */ var _InfoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InfoList */ "./components/Charts/Chart/InfoList/index.js");





function Chart({
  chart
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Diagram__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: chart.items
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    month: chart.month,
    items: chart.items,
    period: chart.period
  }));
}

Chart.propTypes = {
  chart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Array),
    month: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date).isRequired,
    period: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Array).isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./components/Charts/Charts.jsx":
/*!**************************************!*\
  !*** ./components/Charts/Charts.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ "./components/Charts/Slider/index.js");
/* harmony import */ var _Charts_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Charts.sass */ "./components/Charts/Charts.sass");
/* harmony import */ var _Charts_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Charts_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/constants */ "../common/constants/index.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_constants__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Charts extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      chartType: _common_constants__WEBPACK_IMPORTED_MODULE_3__["COSTS"]
    });

    _defineProperty(this, "showIncomesCharts", () => {
      this.setState({
        chartType: _common_constants__WEBPACK_IMPORTED_MODULE_3__["INCOMES"]
      });
    });

    _defineProperty(this, "showCostsCharts", () => {
      this.setState({
        chartType: _common_constants__WEBPACK_IMPORTED_MODULE_3__["COSTS"]
      });
    });
  }

  render() {
    return !this.props.hiddenCharts && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Charts_sass__WEBPACK_IMPORTED_MODULE_2___default.a.container
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Charts_sass__WEBPACK_IMPORTED_MODULE_2___default.a.chartsHeader
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `
              ${_Charts_sass__WEBPACK_IMPORTED_MODULE_2___default.a.chartType} 
              ${this.state.chartType === _common_constants__WEBPACK_IMPORTED_MODULE_3__["COSTS"] && _Charts_sass__WEBPACK_IMPORTED_MODULE_2___default.a.active}
            `,
      onClick: this.showCostsCharts
    }, "\u0420\u0430\u0441\u0445\u043E\u0434\u044B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `
              ${_Charts_sass__WEBPACK_IMPORTED_MODULE_2___default.a.chartType} 
              ${this.state.chartType === _common_constants__WEBPACK_IMPORTED_MODULE_3__["INCOMES"] && _Charts_sass__WEBPACK_IMPORTED_MODULE_2___default.a.active}
            `,
      onClick: this.showIncomesCharts
    }, "\u0414\u043E\u0445\u043E\u0434\u044B")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Charts_sass__WEBPACK_IMPORTED_MODULE_2___default.a.charts
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slider__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: this.state.chartType
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Charts);

/***/ }),

/***/ "./components/Charts/Charts.sass":
/*!***************************************!*\
  !*** ./components/Charts/Charts.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"incomesBright":"#006280","walletsBright":"#189238","costsBright":"#d0193b","incomesPale":"rgba(0, 98, 128, 0.7)","walletsPale":"rgba(24, 146, 56, 0.7)","costsPale":"rgba(208, 25, 59, 0.7)","grey":"grey","green":"#189238","red":"#d0193b","chartsBP":"800px","chartsHeader":"ij2abvI9FO8a0xTc5LDwZ","chartType":"_1ttZOpCu8b0B6RaFolbOv3","active":"_26-wt5m-wqJ_IDCjYhu1KE","charts":"_3Cf_HTaIFmZEvNhmWpqGHr","container":"_1Le1Squ08-ldMMFxYaIHde"};

/***/ }),

/***/ "./components/Charts/Slider/Slider.jsx":
/*!*********************************************!*\
  !*** ./components/Charts/Slider/Slider.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "../node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chart */ "./components/Charts/Chart/index.jsx");
/* harmony import */ var _Slider_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Slider.sass */ "./components/Charts/Slider/Slider.sass");
/* harmony import */ var _Slider_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Slider_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers */ "./helpers/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const customStyle = `
  .slick-prev, .slick-next {
    top: calc(40%);
  }
  .slick-prev:before, .slick-next:before {
    color: #1c2026;
    line-height: 22px;
  }
  .slick-dots li button {  
    border-radius: 5px;
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, .5);
  }`;

class Slider extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "slider", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    _defineProperty(this, "slideIndex", 0);
  }

  goTo(index) {
    this.slideIndex = index;

    if (this.slider.current) {
      this.slider.current.slickGoTo(index, true);
    }
  }

  render() {
    const {
      chartData,
      loading
    } = this.props;

    if (!chartData.length && !loading) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Slider_sass__WEBPACK_IMPORTED_MODULE_4___default.a.container
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: _Slider_sass__WEBPACK_IMPORTED_MODULE_4___default.a.noData
      }, "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F \u043E\u0442\u0447\u0435\u0442\u0430"));
    }

    const charts = chartData.map((chart, index) => {
      if (chart.month.toString() === Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["MMYY"])(new Date()) && this.slideIndex !== index) {
        this.goTo(index);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: chart.month,
        chart: chart
      });
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Slider_sass__WEBPACK_IMPORTED_MODULE_4___default.a.container
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, customStyle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
      ref: this.slider,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: this.slideIndex
    }, charts));
  }

}

Slider.propTypes = {
  chartData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Array).isRequired,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./components/Charts/Slider/Slider.sass":
/*!**********************************************!*\
  !*** ./components/Charts/Slider/Slider.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"incomesBright":"#006280","walletsBright":"#189238","costsBright":"#d0193b","incomesPale":"rgba(0, 98, 128, 0.7)","walletsPale":"rgba(24, 146, 56, 0.7)","costsPale":"rgba(208, 25, 59, 0.7)","grey":"grey","green":"#189238","red":"#d0193b","chartsBP":"800px","container":"_1eQXwJqeXe2IwXG5EF25u2","noData":"_2XWWLbtbOkOfP2wqJHTBhM"};

/***/ }),

/***/ "./components/Charts/Slider/index.js":
/*!*******************************************!*\
  !*** ./components/Charts/Slider/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ "./components/Charts/Slider/Slider.jsx");
/* harmony import */ var _selectors_opsSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../selectors/opsSelectors */ "./selectors/opsSelectors.js");




function makeMapStateToProps({
  finances,
  operations,
  loading
}, {
  type
}) {
  return {
    chartData: Object(_selectors_opsSelectors__WEBPACK_IMPORTED_MODULE_2__["makeSummGroupedByMonth"])({
      finances,
      operations
    }, {
      type
    }),
    loading
  };
}

const connectedSliderCharts = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(makeMapStateToProps)(_Slider__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (connectedSliderCharts);

/***/ }),

/***/ "./components/Charts/index.js":
/*!************************************!*\
  !*** ./components/Charts/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _Charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Charts */ "./components/Charts/Charts.jsx");



const mapStateToProps = state => ({
  hiddenCharts: state.hiddenCharts
});

const ConnectedCharts = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_Charts__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedCharts);

/***/ }),

/***/ "./components/CheckBox/CheckBox.jsx":
/*!******************************************!*\
  !*** ./components/CheckBox/CheckBox.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class CheckBox extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      active: this.props.value
    });

    _defineProperty(this, "handleClick", () => {
      this.setState(state => ({
        active: !state.active
      }));
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "hidden",
      name: this.props.name,
      value: this.state.active
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      checked: this.state.active,
      onChange: this.handleClick
    }));
  }

}

CheckBox.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
CheckBox.defaultProps = {
  value: true
};
/* harmony default export */ __webpack_exports__["default"] = (CheckBox);

/***/ }),

/***/ "./components/CheckBox/index.js":
/*!**************************************!*\
  !*** ./components/CheckBox/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckBox */ "./components/CheckBox/CheckBox.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_CheckBox__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Finances/AddItem/AddButton.jsx":
/*!***************************************************!*\
  !*** ./components/Finances/AddItem/AddButton.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AddItem_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddItem.sass */ "./components/Finances/AddItem/AddItem.sass");
/* harmony import */ var _AddItem_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AddItem_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plus_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plus.png */ "./components/Finances/AddItem/plus.png");
/* harmony import */ var _plus_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_plus_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers */ "./helpers/index.js");






function AddButton({
  openModal
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AddItem_sass__WEBPACK_IMPORTED_MODULE_2___default.a.source
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AddItem_sass__WEBPACK_IMPORTED_MODULE_2___default.a.round,
    onClick: openModal
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _AddItem_sass__WEBPACK_IMPORTED_MODULE_2___default.a.addImg,
    src: _plus_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
    draggable: Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["touchDevice"])() ? undefined : false
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"));
}

AddButton.propTypes = {
  openModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AddButton);

/***/ }),

/***/ "./components/Finances/AddItem/AddItem.sass":
/*!**************************************************!*\
  !*** ./components/Finances/AddItem/AddItem.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"incomesBright":"#006280","walletsBright":"#189238","costsBright":"#d0193b","incomesPale":"rgba(0, 98, 128, 0.7)","walletsPale":"rgba(24, 146, 56, 0.7)","costsPale":"rgba(208, 25, 59, 0.7)","grey":"grey","green":"#189238","red":"#d0193b","chartsBP":"800px","source":"EToWg9SVAwUX1L1kjm3oM","round":"_2v7vmbvMlJ54G74CJKYd7z","balance":"AANfNjs_CVcbhGCtk-uf7","container":"_-7uScSGdIdbSyKq4ibNmE","fields":"_36C0VgpUbDos96WZxUNixH"};

/***/ }),

/***/ "./components/Finances/AddItem/AddWindow/AddWindow.jsx":
/*!*************************************************************!*\
  !*** ./components/Finances/AddItem/AddWindow/AddWindow.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../CheckBox */ "./components/CheckBox/index.js");
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ColorPicker */ "./components/Finances/ColorPicker/index.jsx");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../text */ "./text/index.js");
/* harmony import */ var _App_sass_global_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../App/sass/global.sass */ "./components/App/sass/global.sass");
/* harmony import */ var _App_sass_global_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_sass_global_sass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AddItem_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../AddItem.sass */ "./components/Finances/AddItem/AddItem.sass");
/* harmony import */ var _AddItem_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_AddItem_sass__WEBPACK_IMPORTED_MODULE_6__);








function WindowContent({
  addItem,
  closeModal,
  type
}) {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addItem(formData, type);
    closeModal();
  };

  const isWallets = type === _text__WEBPACK_IMPORTED_MODULE_4__["WALLETS"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, _text__WEBPACK_IMPORTED_MODULE_4__["fin"][type].addWindowTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    autoComplete: "off"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AddItem_sass__WEBPACK_IMPORTED_MODULE_6___default.a.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AddItem_sass__WEBPACK_IMPORTED_MODULE_6___default.a.fields
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _App_sass_global_sass__WEBPACK_IMPORTED_MODULE_5__["star"]
  }, "* "), "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "name",
    autoFocus: true,
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _text__WEBPACK_IMPORTED_MODULE_4__["fin"][type].plan), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    step: "0.01",
    min: "0",
    name: "plan"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "model",
    value: type
  }), isWallets && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _App_sass_global_sass__WEBPACK_IMPORTED_MODULE_5__["star"]
  }, "* "), _text__WEBPACK_IMPORTED_MODULE_4__["fin"][type].amount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    step: "0.01",
    min: "0",
    name: "amount",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AddItem_sass__WEBPACK_IMPORTED_MODULE_6___default.a.balance
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CheckBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "balance"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0423\u0447\u0438\u0442\u044B\u0432\u044B\u0442\u044C \u0432 \u043E\u0431\u0449\u0435\u043C \u0431\u0430\u043B\u0430\u043D\u0441\u0435"))), !isWallets && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit"
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C")));
}

WindowContent.propTypes = {
  closeModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  addItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (WindowContent);

/***/ }),

/***/ "./components/Finances/AddItem/AddWindow/index.js":
/*!********************************************************!*\
  !*** ./components/Finances/AddItem/AddWindow/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _AddWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddWindow */ "./components/Finances/AddItem/AddWindow/AddWindow.jsx");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../AC */ "./AC/index.js");



const mapDispatchToProps = {
  addItem: _AC__WEBPACK_IMPORTED_MODULE_2__["addItem"]
};
const ConnectedWindowContent = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDispatchToProps)(_AddWindow__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedWindowContent);

/***/ }),

/***/ "./components/Finances/AddItem/index.js":
/*!**********************************************!*\
  !*** ./components/Finances/AddItem/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddButton */ "./components/Finances/AddItem/AddButton.jsx");
/* harmony import */ var _HOC_windows_coinWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../HOC/windows/coinWindow */ "./HOC/windows/coinWindow/index.jsx");
/* harmony import */ var _AddWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddWindow */ "./components/Finances/AddItem/AddWindow/index.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_windows_coinWindow__WEBPACK_IMPORTED_MODULE_1__["default"])(_AddButton__WEBPACK_IMPORTED_MODULE_0__["default"], _AddWindow__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./components/Finances/AddItem/plus.png":
/*!**********************************************!*\
  !*** ./components/Finances/AddItem/plus.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAVUlEQVR4AWMgFYyCUcDP4MZgSb52RgYthmSGOQxXGP4x/GdoIN8gB6B2KBwkBukxzGRIYzBmaCPJIKi92EDDoDJo1KD/+ODgM2hYx9qoQQMPRsEoAAAf0pRzRuYTvwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./components/Finances/ColorPicker/ColorPicker.sass":
/*!**********************************************************!*\
  !*** ./components/Finances/ColorPicker/ColorPicker.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"colorPicker":"OeyDkveMwUl0oqJbAkWbp"};

/***/ }),

/***/ "./components/Finances/ColorPicker/index.jsx":
/*!***************************************************!*\
  !*** ./components/Finances/ColorPicker/index.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ "../node_modules/react-color/lib/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ColorPicker_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorPicker.sass */ "./components/Finances/ColorPicker/ColorPicker.sass");
/* harmony import */ var _ColorPicker_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ColorPicker_sass__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ColorPicker extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      color: this.props.color
    });

    _defineProperty(this, "handleChangeComplete", color => {
      this.setState({
        color: color.hex
      });
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ColorPicker_sass__WEBPACK_IMPORTED_MODULE_3___default.a.colorPicker
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0426\u0432\u0435\u0442 \u0434\u043B\u044F \u043E\u0442\u0447\u0435\u0442\u043E\u0432:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_1__["HuePicker"], {
      width: 220,
      color: this.state.color,
      onChangeComplete: this.handleChangeComplete
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "hidden",
      name: "color",
      value: this.state.color
    }));
  }

}

ColorPicker.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
ColorPicker.defaultProps = {
  color: "#d7d7d7"
};
/* harmony default export */ __webpack_exports__["default"] = (ColorPicker);

/***/ }),

/***/ "./components/Finances/DelItem/DelButton.jsx":
/*!***************************************************!*\
  !*** ./components/Finances/DelItem/DelButton.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DelButton_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DelButton.sass */ "./components/Finances/DelItem/DelButton.sass");
/* harmony import */ var _DelButton_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DelButton_sass__WEBPACK_IMPORTED_MODULE_2__);




function DelButton({
  openModal,
  sass
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
    className: `${_DelButton_sass__WEBPACK_IMPORTED_MODULE_2___default.a.delButton} ${sass}`,
    onClick: openModal
  }, "\xD7");
}

DelButton.propTypes = {
  openModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  sass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
DelButton.defaultProps = {
  sass: null
};
/* harmony default export */ __webpack_exports__["default"] = (DelButton);

/***/ }),

/***/ "./components/Finances/DelItem/DelButton.sass":
/*!****************************************************!*\
  !*** ./components/Finances/DelItem/DelButton.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"delButton":"_3qafgebRDP06-TGVq4YCOz"};

/***/ }),

/***/ "./components/Finances/DelItem/index.js":
/*!**********************************************!*\
  !*** ./components/Finances/DelItem/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DelButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DelButton */ "./components/Finances/DelItem/DelButton.jsx");
/* harmony import */ var _HOC_windows_confirmWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../HOC/windows/confirmWindow */ "./HOC/windows/confirmWindow/index.jsx");


/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_windows_confirmWindow__WEBPACK_IMPORTED_MODULE_1__["default"])(_DelButton__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./components/Finances/EditItem/EditButton.jsx":
/*!*****************************************************!*\
  !*** ./components/Finances/EditItem/EditButton.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pen_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pen.png */ "./components/Finances/EditItem/pen.png");
/* harmony import */ var _pen_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pen_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Item_Item_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Item/Item.sass */ "./components/Finances/Item/Item.sass");
/* harmony import */ var _Item_Item_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Item_Item_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers */ "./helpers/index.js");






function EditButton({
  openModal,
  sass
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _pen_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
    className: `${_Item_Item_sass__WEBPACK_IMPORTED_MODULE_3___default.a.pen} ${sass}`,
    onClick: openModal,
    title: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
    draggable: Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["touchDevice"])() ? undefined : false
  });
}

EditButton.propTypes = {
  openModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  sass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]).isRequired
}; // EditButton.defaultProps = { sass: undefined };

/* harmony default export */ __webpack_exports__["default"] = (EditButton);

/***/ }),

/***/ "./components/Finances/EditItem/EditWindow/EditWindow.jsx":
/*!****************************************************************!*\
  !*** ./components/Finances/EditItem/EditWindow/EditWindow.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ColorPicker */ "./components/Finances/ColorPicker/index.jsx");
/* harmony import */ var _AddItem_AddItem_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AddItem/AddItem.sass */ "./components/Finances/AddItem/AddItem.sass");
/* harmony import */ var _AddItem_AddItem_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AddItem_AddItem_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../CheckBox */ "./components/CheckBox/index.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../text */ "./text/index.js");
/* harmony import */ var _App_sass_global_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../App/sass/global.sass */ "./components/App/sass/global.sass");
/* harmony import */ var _App_sass_global_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_sass_global_sass__WEBPACK_IMPORTED_MODULE_6__);








function EditWindow({
  _id,
  name,
  plan,
  amount,
  type,
  editItem,
  closeModal,
  color,
  balance
}) {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    editItem(formData, type);
    closeModal();
  };

  const isWallets = type === _text__WEBPACK_IMPORTED_MODULE_5__["WALLETS"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, _text__WEBPACK_IMPORTED_MODULE_5__["fin"][type].editWindowTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    autoComplete: "off"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AddItem_AddItem_sass__WEBPACK_IMPORTED_MODULE_3___default.a.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AddItem_AddItem_sass__WEBPACK_IMPORTED_MODULE_3___default.a.fields
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "_id",
    value: _id
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _App_sass_global_sass__WEBPACK_IMPORTED_MODULE_6__["star"]
  }, "* "), "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "name",
    defaultValue: name,
    autoFocus: true,
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _text__WEBPACK_IMPORTED_MODULE_5__["fin"][type].plan), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    step: "0.01",
    min: "0",
    name: "plan",
    defaultValue: plan
  }), isWallets && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _App_sass_global_sass__WEBPACK_IMPORTED_MODULE_6__["star"]
  }, "* "), _text__WEBPACK_IMPORTED_MODULE_5__["fin"][type].amount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    step: "0.01",
    min: "0",
    name: "amount",
    defaultValue: amount,
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AddItem_AddItem_sass__WEBPACK_IMPORTED_MODULE_3___default.a.balance
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CheckBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "balance",
    value: balance
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0423\u0447\u0438\u0442\u044B\u0432\u044B\u0442\u044C \u0432 \u043E\u0431\u0449\u0435\u043C \u0431\u0430\u043B\u0430\u043D\u0441\u0435"))), !isWallets && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColorPicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: color
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit"
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")));
}

EditWindow.propTypes = {
  _id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  plan: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  amount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  closeModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  editItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  balance: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
EditWindow.defaultProps = {
  plan: 0,
  amount: null,
  color: undefined,
  balance: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (EditWindow);

/***/ }),

/***/ "./components/Finances/EditItem/EditWindow/index.js":
/*!**********************************************************!*\
  !*** ./components/Finances/EditItem/EditWindow/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _EditWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditWindow */ "./components/Finances/EditItem/EditWindow/EditWindow.jsx");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../AC */ "./AC/index.js");



const mapDispatchToProps = {
  editItem: _AC__WEBPACK_IMPORTED_MODULE_2__["editItem"]
};
const ConnectedEditWindow = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDispatchToProps)(_EditWindow__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedEditWindow);

/***/ }),

/***/ "./components/Finances/EditItem/index.js":
/*!***********************************************!*\
  !*** ./components/Finances/EditItem/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditButton */ "./components/Finances/EditItem/EditButton.jsx");
/* harmony import */ var _HOC_windows_coinWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../HOC/windows/coinWindow */ "./HOC/windows/coinWindow/index.jsx");
/* harmony import */ var _EditWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditWindow */ "./components/Finances/EditItem/EditWindow/index.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_windows_coinWindow__WEBPACK_IMPORTED_MODULE_1__["default"])(_EditButton__WEBPACK_IMPORTED_MODULE_0__["default"], _EditWindow__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./components/Finances/EditItem/pen.png":
/*!**********************************************!*\
  !*** ./components/Finances/EditItem/pen.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAgUlEQVR4AbzKoQ3CQAAAwHNIwBBMLUOgMDhME0QNg+GZAvM13QGFw5eQkIqHZwH+myA4ff6gdjJRtPeShFKbWbhKkqOMtbta5Sba+WrjqRc1Vg65MugsPURVvgRzwVszVuJY6UT1z2VrcC4XWhfTcqHV++w2WAkeMAGo7AAwvmgOAOzzMg3fchUyAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./components/Finances/Item/DragNDrop.jsx":
/*!************************************************!*\
  !*** ./components/Finances/Item/DragNDrop.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ "./components/Finances/Item/Item.jsx");
/* harmony import */ var _coin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coin.png */ "./components/Finances/Item/coin.png");
/* harmony import */ var _coin_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_coin_png__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const {
  INCOMES,
  WALLETS,
  COSTS
} = __webpack_require__(/*! ../../../../common/constants */ "../common/constants/index.js");

function checkValidOp(from, to) {
  const incomeOp = from.type === INCOMES && to.type === WALLETS;
  const internalOp = from.type === WALLETS && to.type === WALLETS && to._id !== from._id;
  const expenseOp = from.type === WALLETS && to.type === COSTS;
  return incomeOp || internalOp || expenseOp;
}

function DragNDrop(props) {
  const {
    _id,
    type,
    openModal,
    dragEl,
    setDragEl,
    name,
    amount
  } = props;
  const img = new Image();
  img.src = _coin_png__WEBPACK_IMPORTED_MODULE_3___default.a;

  function dragStart(e) {
    e.dataTransfer.setDragImage(img, 17, 17);
    setDragEl({
      _id,
      type,
      name,
      amount
    });
  }

  function dragOver(e) {
    if (checkValidOp(dragEl, {
      type,
      _id
    })) return e.preventDefault();
  }

  function drop(e) {
    const elem = e.target.closest("[data-type]");
    const to = {
      _id,
      type: elem.getAttribute("data-type"),
      name: elem.parentElement.nextElementSibling.title
    };
    if (checkValidOp(dragEl, to)) openModal(dragEl, to);
    setDragEl({});
    e.dataTransfer.clearData();
  }

  const funcs = {
    dragStart,
    dragOver,
    drop
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    funcs: funcs
  }));
}

DragNDrop.propTypes = {
  _id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  amount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  openModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setDragEl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  dragEl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }).isRequired
};
DragNDrop.defaultProps = {
  amount: 0
};
/* harmony default export */ __webpack_exports__["default"] = (DragNDrop);

/***/ }),

/***/ "./components/Finances/Item/Item.jsx":
/*!*******************************************!*\
  !*** ./components/Finances/Item/Item.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_long__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-long */ "../node_modules/react-long/es/index.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../text */ "./text/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers */ "./helpers/index.js");
/* harmony import */ var _Item_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Item.sass */ "./components/Finances/Item/Item.sass");
/* harmony import */ var _Item_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Item_sass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App_sass_vars_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../App/sass/vars.sass */ "./components/App/sass/vars.sass");
/* harmony import */ var _App_sass_vars_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_sass_vars_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _EditItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../EditItem */ "./components/Finances/EditItem/index.js");
/* harmony import */ var _DelItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DelItem */ "./components/Finances/DelItem/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const {
  WALLETS,
  COSTS
} = __webpack_require__(/*! ../../../../common/constants */ "../common/constants/index.js");

class Item extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      shaked: false
    });

    _defineProperty(this, "letShake", () => {
      const e = new Event("click");
      document.body.dispatchEvent(e);
      this.setState({
        shaked: true
      });
      Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["vibrate"])(200);
    });

    _defineProperty(this, "stopShake", () => {
      if (this.state.shaked) this.setState({
        shaked: false
      });
    });
  }

  componentDidMount() {
    document.body.addEventListener("click", this.stopShake);
  }

  render() {
    const {
      _id,
      type,
      name,
      amount,
      holdWallets,
      plan,
      deleteItem,
      disableItem,
      openListOp,
      funcs,
      balance
    } = this.props;
    const {
      shaked
    } = this.state;
    console.log(shaked);
    const {
      dragStart,
      dragOver,
      drop
    } = funcs;
    const monthSumm = type === WALLETS ? holdWallets : amount;
    const progress = !plan ? 100 : monthSumm / plan * 100;
    const bright = _App_sass_vars_sass__WEBPACK_IMPORTED_MODULE_6___default.a[`${type}Bright`];
    const pale = _App_sass_vars_sass__WEBPACK_IMPORTED_MODULE_6___default.a[`${type}Pale`];
    const bgc = {
      background: `linear-gradient(to top, ${bright} ${progress}%, ${pale} ${progress}%)`
    };
    const fulfilled = type === COSTS ? _App_sass_vars_sass__WEBPACK_IMPORTED_MODULE_6___default.a.red : _App_sass_vars_sass__WEBPACK_IMPORTED_MODULE_6___default.a.green;
    const planColor = {
      color: progress >= 100 ? fulfilled : _App_sass_vars_sass__WEBPACK_IMPORTED_MODULE_6___default.a.grey
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_long__WEBPACK_IMPORTED_MODULE_2__["default"], {
      time: 700,
      onLongPress: this.letShake
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `${_Item_sass__WEBPACK_IMPORTED_MODULE_5___default.a.source} ${!Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["touchDevice"])() && _Item_sass__WEBPACK_IMPORTED_MODULE_5___default.a.dbHover}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Item_sass__WEBPACK_IMPORTED_MODULE_5___default.a.roundContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-type": type,
      className: `${_Item_sass__WEBPACK_IMPORTED_MODULE_5___default.a.round} ${type !== COSTS && _Item_sass__WEBPACK_IMPORTED_MODULE_5___default.a.noTouchScroll} ${shaked && _Item_sass__WEBPACK_IMPORTED_MODULE_5___default.a.shake}`,
      style: bgc,
      draggable: type === COSTS || amount <= 0 && type === WALLETS ? undefined : true,
      onDragOver: dragOver,
      onDragStart: dragStart,
      onDrop: drop,
      onClick: openListOp(_id),
      title: type === WALLETS && amount === 0 ? _text__WEBPACK_IMPORTED_MODULE_3__["fin"][type].notDraggable : _text__WEBPACK_IMPORTED_MODULE_3__["fin"][type].round
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _Item_sass__WEBPACK_IMPORTED_MODULE_5___default.a.amount,
      title: `${_text__WEBPACK_IMPORTED_MODULE_3__["fin"][type].amount} ${Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["separate"])(amount)}`
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["moneyFormat"])(amount))), balance && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      draggable: Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["touchDevice"])() ? undefined : false,
      title: "\u0423\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u043E\u0431\u0449\u0435\u043C \u0431\u0430\u043B\u0430\u043D\u0441\u0435",
      className: _Item_sass__WEBPACK_IMPORTED_MODULE_5___default.a.gold
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DelItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      sass: `${_Item_sass__WEBPACK_IMPORTED_MODULE_5___default.a.delButton} ${shaked && _Item_sass__WEBPACK_IMPORTED_MODULE_5___default.a.db}`,
      title: `Удаляя "${name}" вы хотите:`,
      confirmText: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u043A\u043E\u043D\u043A\u0443 \u0438 \u0432\u0441\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
      confirm: () => deleteItem(_id, type),
      cancelText: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u043A\u043E\u043D\u043A\u0443",
      cancel: () => disableItem(_id, type)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditItem__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, this.props, {
      sass: shaked && _Item_sass__WEBPACK_IMPORTED_MODULE_5___default.a.db
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      title: name,
      className: _Item_sass__WEBPACK_IMPORTED_MODULE_5___default.a.name,
      onDragOver: e => e.preventDefault(),
      spellCheck: false
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["textTrimmer"])(name, 12)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      title: `${_text__WEBPACK_IMPORTED_MODULE_3__["fin"][type].plan} ${Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["separate"])(plan)}`,
      style: planColor,
      onDragOver: e => e.preventDefault(),
      className: _Item_sass__WEBPACK_IMPORTED_MODULE_5___default.a.plan
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["moneyFormat"])(plan))));
  }

}

Item.propTypes = {
  _id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  amount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  holdWallets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  plan: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  deleteItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  disableItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  openListOp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  balance: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  funcs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    dragStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    dragOver: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    drop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired
};
Item.defaultProps = {
  plan: null,
  holdWallets: undefined,
  color: undefined,
  balance: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./components/Finances/Item/Item.sass":
/*!********************************************!*\
  !*** ./components/Finances/Item/Item.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"incomesBright":"#006280","walletsBright":"#189238","costsBright":"#d0193b","incomesPale":"rgba(0, 98, 128, 0.7)","walletsPale":"rgba(24, 146, 56, 0.7)","costsPale":"rgba(208, 25, 59, 0.7)","grey":"grey","green":"#189238","red":"#d0193b","chartsBP":"800px","shake":"LO-gAuO5FbL5v6tSEL07V","plan":"_2pNLhOAs4mmaSRXyprQJdf","delButton":"_4LiNVaNCOYpbNoTlbOsDM","name":"_1fJ8hMsJmXXduekwbj5Zlu","amount":"_2IUg61Ot_v9SYktxosftnG","pen":"YjzBAFDSryz0VNCYqUn1_","source":"_11n0JOCTp_PzG1-h-X_TT4","roundContainer":"_1UQOMcjmYaix20aBz2XvgY","round":"_2UVvyLHjHxSKAajVBHnHBc","gold":"_1ovg034DqDwnJfQIUKF7r4","noTouchScroll":"_27f57QKrLsBvmNlpSLZZxx","db":"eFa_CGVaBlsJhmfpO9NNb","dbHover":"_1JkdeGBoNKtP6YU2DRE83b"};

/***/ }),

/***/ "./components/Finances/Item/coin.png":
/*!*******************************************!*\
  !*** ./components/Finances/Item/coin.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAA0xSURBVHjajJh5kB3VdcZ/t7fXb3+zamakGY1GGo3WGaFhR4AEGIJZLStOWMrEhSFOXJhgY5JQFccpp2wc4tgVJ5RdtkNSGKMqCwjYiGCQkCIUtG9IQvuMZl/e/rr7db/e8scbCC5jx6fq1u3+o+v77ne/c/reI/7+Kj4M34dla8DMw853Uqy59xK2/2oPmYY0kYjg6O5p5i8Usfu+etfq04fHV6ab473tXQ2Lkym90XU8qzhbuRC4xqnlVyw6fujFrceruXKxa3UXjuVRmDHovnQl2362n5nZGjlTUCx4SNL/4Sv8jpBkCaPkoMgVREPmij9/euO9PYvmre/pU/s33dMNxRyYJXBLIGSIZiC5gHxFIn3PptMV23zn/P5DzzlVY6djVhEfRf6Y+K1kZFmimC0QTaprP/XFe5645ZYldzXLkzrDR6kcOkXlXQtZ8ZCjOpIiCNUYARqBB6oUY3Ei1Se1L+hbsvH2B85N5V/Z88IvnrJKlQOSJH5/MkIC34WJ8SKXdPQ99oM3v/Sdxvz7ovTajxixR2hcmCHZ04MUSYEUUrVlyHSgCQvh2yDpBJ6HWyzinD6GbG5XVi+54tPdX39w44Ft7305N3Hwe54PQvpNHcRHPROE0LMU8mNIC+94evOGB27/w+kXH8Y4v4v5G1bTuHoQoffglUbR/DL4FqbtYoXziElZ4ooDQRQ3kPH0NNFMArdUxjq6HdV1EevvZse72Z//4Esv3WP6wnfc8Nd34xMLQRYgBDgWRDX0O//u2a0rb990x77v3EZCOsrKh/+EeP+1WAWFYiUgqtWQQxeEhBaR0cMCmhYglDhEUgRKglzRxPcF8a6V6P03g1/D3v48q25ctrJpYNm6Nzaf+rlj42laHVsIkNe1gxdAEIBdgU99/enNzdc9fPsvnmhj7UBIz0NPIMJ5UDBRdAVdsdBkqW5YRcEPfEJVQUgaQpFBSSDrGSLJBtR0G7KsgpRAbr8VrbuV3As/YfWGzkWxxd39O14deiEaAz8AQpBrU3BqEk6PwR0P3fnYdV/4/mPb/ulKLl0yS9dtX6BWbUB4FYSiICQFWdZAqBBPYhRL5EbOEuLhOKCoAlkDIvOQ483Iehy0OH6gYpaK6E0D6Iu7mX3pWQZv6Ooraw329m1Tu60q2IGEuAQoAh2pWN9rw6eOjuz9diQ69K8s+dOnyE+4SJ5NujmDCDwIAVnB8zy8mk216iC0JjQ9Tc11cK0conKcZFMLkdZ+8BVQIwRhjOzoOIoSpXHB1VTPPoP99jMYK671bt14eGB61jiZjkjIGSAHfO0fH3r2sqtbVky++ggrNn4O4n1EZActHkNC1BNPieP6MrVKEcmzSaYz6PYplOxBoiJPpGUBXnIppfHzKFoCNdUGvoSQNaKpZpSIjqy4qE1XURg5QHP1lER7V+fru7Kbo7KMiAO9LdqVe0aff9fc9S1kOSS94ctQmgRJgCxDqICkEcgR3KqCbJxFial40+9iT57AyVcRxRl0BWIbNuE2ryR3bpzGJdejxZL174UGSIADdOGZ7zD73J9RSC3h7sdnL5uYLh+QXeDRJ2/8xvoNzWvye7aSHvgEwilDNDNXCzQQEVCTeF6NMHcSuaEdzyriiS70lQ+j9t5Abf5aCpNTeHt3kmiqEouaBJaL0jAABHUiQiLwA2p2Hi3eTc08QzL/HuedDHtOVH4p3dUfSV539dr1TB5Bbe7CVlMUp8cIhAJKDKQoaAl8OYU5th83vw8RW4+IrSXSdQWyBpoe0jh/OU13/i2Vxk6qu/chlw4RScXmlGBOFfC9GsWp8xiVcRrW3ISkwJp268bF7em4smhJYmDVQGN35eA2Er1riLQtxM+0IUkKhCrIGshRhIhSM3LUKtMkgmmklFnPqlCGUIA7Q0JPIt3+RcLJw7B4EKKdEE4BTXUygYmqesQb4oS+QMr0UUs0MdA2szjd0LBGEqJhVapR4PgGasMCZAk0NY6QoiDp9REKJGJE2waxLDCGvgkiCV4zBF7dD2oafINYUwfxVfdCtAOCcj0DsYBK/b02SyIJyRRADSnZQWscqnZtlbJ0sL0P30TWVGQ9Vk/HMApyDFBBKPXyiEBvHURrOcDk2fdoSxgkOy6tg+DUfREqEFRBMgG/XhjxILQhDMAzCF0DTA/kPCKloMaSBAH0trNcaW1rWIRloSRiCC0BJECOg9ABeY6IBJioSiuZ3k04tsfovidJtSwk07mWaEsfcrQN5HngZ8GvgBRC4NbNTwBhjdCrgGOAWyUIQEZGEh4eMC/lLVIScSkJPkosgZCSEKaB2FwqirkVhvWZPLF0Hx2XPERhuIfixZ3kR59HlR1S87rILFpHvPNq8GSoVUEK6spIGoRV8AxwygQ1g8B3kd0aoW3iBhARblwxTK+ELiPrUQiiIDXW0xmpviJRA9w5Yi4wSSTeSNvKP6apdz2l6TMULx5kamQXFw//iEUD22lc/kmQNCKJlroiVCF0CT0T7BK+XcGv2aiywfRoFl9JkOxotZRitjiMqiNH1Pq2kJg75oRzRD44nXlACsgAE0AZVVNp7lxFc2cfhnkzh1/fytsvb2Gd9RJ663IaOpeixlsI7TwAYbWMb5fxzDKOZRGNGBw/OMn8wXXInR3D0sWTk2cgiqxK4DtzPpHrQhDOjQBoIww8/MnnwBoConM/khHgNInoFOs2XY7WdQkHd4xDaYKpU6cJrDKYBbziDG45T80oUS2XqJVLWNNZhodDeq54gKHh8H0lEpVPWhWPWCQC4Qxgz21TMOeTAMhQntyPcer7NCXPI4f3Q6wHqIFvgJuDwjiiHZYNJDmzRUL3HM6NlEg1zxIPsjiWi1+r4poGjmniWVUOHpnFa1pKcuEmDu/97nGpUCgcPfPe5CjpFjDOACXAnKsNTh2QKBePH+bstsMEzddBsgV7YieBnwV/uK6UNosxMsTIjsNctlzHt2SGxzysqQn80ixGLo+RLVDJljCLBueGy2z5FQzc8ijHjg2NnTl54rj0b5tnS0f2X3wbqZXQHAd/fK52FAFj7nmGdM96Dp3TubDrACR7keOXM3PkJGP7TzF+bJgTu4c4tPk4fc0+nYPz2XOybvpIdYzsZAEjV6I8W8bIVTg3bLJ1h0EtnWbDhnZe+vcnd3hQkLsikB+fmv7Mgzc8KJQpQsNCxLqA8pwqTp1MYyMXSxov/st/kwjPsmj1lSQ7IoTlEl6+hGZWWdau0ryoiTf3OBy7qLJhRRXFKTKb86hWbKxKlWzeYdtemwNnQ+5/8FYyzi4++5U3H3FDLso9jXD2Qm1sfkdqcOU1/X3O6G6U5HxQonNEyuBkwRlixeWNuDGXt/7jACd3bSH0SiTkConQQBE1TkzAy2+ajM963NzvkJaKjM0GOFUPu+oxPetw9LzL9gMBXf0LeXxjhm99963/2nWWbwKINgGFEOY36r17Tv7lsebo+7ozWUPvuwXjwiF0XUVO6ojKFIQlaHSZOjjEvjdGOX/KpuIraLqME8RpTof0ttr0tEsQ+ozPCmoumIaLElFw1BQ//ukMTirOX31+OSnzfW/D18w1ti+dAJCjol5VClUvXx6dKN123/WfdAqncWfy+JVZ/FoVVQ8Q1jQUp+HcRRIRm75+lcvmB7R0LiPZ0czll7dzZadBwi+QtyRGJn2qto9ZDciXAy6Muew77GLHo9x20wKuahrh0Wcrf31uWvrPD68q1blkDoG9J/L7akVr8a339Q9MvXcQPTaPVHc7wiwRWgVCu4rreLizFawJE9fz0PwKEd9EMyeYmSkxkpUpV3xsV1CqQKHsM50LOX0GikJl9do27l+d46mXi69s2Ss98mv3pg8vcHPzO3snXlVq/uAdn+9ZOn3mHOZQmVRCIXQ9ykULJdNKsVClkDOZyQdUjBq2YTM145Ith1jVgGwuJNOaxnB1jhypkisK1HmNXDaY4b7VOX74VmX797ZKn54r679J5iMRvv3O1M+qeaf7ps80rnHsLBf2FdADEK5JrepQLrsYFhi24OJ4gKs24Qqdyckq+RIMjcLQWI3pvKDqa8TnZ7i2X3Dtgjw/2Vl96duvyHfN/Wv4/8gAsHtf8ZXy+WK2/6rYH3QN+qIyZZGdkCiPmRAGeH6AUXEYHXMZnfK5MBpy+oJLyRa4UhTb02ls1VnRq3DjcpOkavDj3eHj//zL8C9ABB/bbPhtZBrSEs3C3/+Nf8i9pkt+84r1onfhYleKJSQqBhgFqFRk9LhOgIQfSCQycVqbdFb2alzTL1jRbhFXzdrO0/7LX31BfC6mSVuy5RDb/fhOxG/tT6STEn90jcbmN2waEhBNc/1n74w8sHRAvnpFA33dUZlqVaKYD7HKPkKAEglxaj6j0x5jpeDk2Wlp5+tH+GnB4H8qFtx9pcSre33K1gew4e/Xn/mgk5VKQLpJQibc+TfPODszgoav3K+u3D/krGpJBMtbk2G3QESrNayJAhdypnh/cKly4odbea9kBJW+BRLpaB3XD35nr4j/HQByHTYyAv2K6gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./components/Finances/Item/index.js":
/*!*******************************************!*\
  !*** ./components/Finances/Item/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../AC */ "./AC/index.js");
/* harmony import */ var _DragNDrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DragNDrop */ "./components/Finances/Item/DragNDrop.jsx");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/constants */ "../common/constants/index.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_constants__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HOC_windows_opWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../HOC/windows/opWindow */ "./HOC/windows/opWindow/index.jsx");
/* harmony import */ var _HOC_windows_listOpWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../HOC/windows/listOpWindow */ "./HOC/windows/listOpWindow/index.jsx");
/* harmony import */ var _Operations_MakeOp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Operations/MakeOp */ "./components/Operations/MakeOp/index.js");
/* harmony import */ var _Operations_ListOp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Operations/ListOp */ "./components/Operations/ListOp/index.js");
/* harmony import */ var _selectors_opsSelectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../selectors/opsSelectors */ "./selectors/opsSelectors.js");










const mapStateToProps = ({
  operations,
  dragEl
}, {
  type,
  _id,
  amount
}) => ({
  dragEl,
  amount: type !== _common_constants__WEBPACK_IMPORTED_MODULE_3__["WALLETS"] ? Object(_selectors_opsSelectors__WEBPACK_IMPORTED_MODULE_8__["monthAmount"])({
    operations
  }, {
    _id
  }) : amount,
  holdWallets: type === _common_constants__WEBPACK_IMPORTED_MODULE_3__["WALLETS"] ? Object(_selectors_opsSelectors__WEBPACK_IMPORTED_MODULE_8__["monthAmount"])({
    operations
  }, {
    _id
  }) : undefined
});

const mapDispatchToProps = {
  deleteItem: _AC__WEBPACK_IMPORTED_MODULE_1__["deleteItem"],
  disableItem: _AC__WEBPACK_IMPORTED_MODULE_1__["disableItem"],
  setDragEl: _AC__WEBPACK_IMPORTED_MODULE_1__["setDragEl"]
};
const ConnectedItem = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_DragNDrop__WEBPACK_IMPORTED_MODULE_2__["default"]);
const draggableItem = Object(_HOC_windows_opWindow__WEBPACK_IMPORTED_MODULE_4__["default"])(ConnectedItem, _Operations_MakeOp__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_windows_listOpWindow__WEBPACK_IMPORTED_MODULE_5__["default"])(draggableItem, _Operations_ListOp__WEBPACK_IMPORTED_MODULE_7__["default"]));

/***/ }),

/***/ "./components/Finances/List/List.jsx":
/*!*******************************************!*\
  !*** ./components/Finances/List/List.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Item */ "./components/Finances/Item/index.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../text */ "./text/index.js");
/* harmony import */ var _AddItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AddItem */ "./components/Finances/AddItem/index.js");
/* harmony import */ var _List_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./List.sass */ "./components/Finances/List/List.sass");
/* harmony import */ var _List_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_List_sass__WEBPACK_IMPORTED_MODULE_5__);







function List({
  type,
  items
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _List_sass__WEBPACK_IMPORTED_MODULE_5___default.a.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: _List_sass__WEBPACK_IMPORTED_MODULE_5___default.a.title
  }, _text__WEBPACK_IMPORTED_MODULE_3__["fin"][type].title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _List_sass__WEBPACK_IMPORTED_MODULE_5___default.a.items
  }, items.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: item._id,
    _id: item._id,
    type: type,
    name: item.name,
    amount: item.amount,
    plan: item.plan,
    color: item.color,
    balance: item.balance
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: type
  })));
}

List.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Array)
};
List.defaultProps = {
  items: []
};
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./components/Finances/List/List.sass":
/*!********************************************!*\
  !*** ./components/Finances/List/List.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"incomesBright":"#006280","walletsBright":"#189238","costsBright":"#d0193b","incomesPale":"rgba(0, 98, 128, 0.7)","walletsPale":"rgba(24, 146, 56, 0.7)","costsPale":"rgba(208, 25, 59, 0.7)","grey":"grey","green":"#189238","red":"#d0193b","chartsBP":"800px","container":"_1iDlVZENU4U0RdfDze529","title":"_1g0WvPR5U0Mz77hUBBxzPT","items":"_16TvnrluHVrc3OBHWfEWbw"};

/***/ }),

/***/ "./components/Finances/List/index.js":
/*!*******************************************!*\
  !*** ./components/Finances/List/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List */ "./components/Finances/List/List.jsx");
/* harmony import */ var _selectors_finsSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../selectors/finsSelectors */ "./selectors/finsSelectors.js");




const makeMapStateToProps = () => {
  const getActiveFins = Object(_selectors_finsSelectors__WEBPACK_IMPORTED_MODULE_2__["default"])();

  function mapStateToProps({
    finances
  }, {
    type
  }) {
    return {
      items: getActiveFins({
        finances
      }, {
        type
      })
    };
  }

  return mapStateToProps;
};

const ConnectedList = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(makeMapStateToProps)(_List__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedList);

/***/ }),

/***/ "./components/Finances/index.js":
/*!**************************************!*\
  !*** ./components/Finances/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./components/Finances/List/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_List__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Header/Balance/Balance.jsx":
/*!***********************************************!*\
  !*** ./components/Header/Balance/Balance.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header.sass */ "./components/Header/Header.sass");
/* harmony import */ var _Header_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_sass__WEBPACK_IMPORTED_MODULE_2__);




const {
  fixAccuracy
} = __webpack_require__(/*! ../../../../common/funcs */ "../common/funcs/index.js");

function Balance({
  wallets
}) {
  let summ = 0;

  if (wallets.length) {
    summ = wallets.reduce((prev, cur) => cur.balance ? prev + cur.amount : prev, 0);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Header_sass__WEBPACK_IMPORTED_MODULE_2___default.a.balance
  }, "\u0411\u0430\u043B\u0430\u043D\u0441: ", fixAccuracy(summ));
}

Balance.propTypes = {
  wallets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Array).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Balance);

/***/ }),

/***/ "./components/Header/Balance/index.js":
/*!********************************************!*\
  !*** ./components/Header/Balance/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _Balance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Balance */ "./components/Header/Balance/Balance.jsx");
/* harmony import */ var _selectors_finsSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../selectors/finsSelectors */ "./selectors/finsSelectors.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/constants */ "../common/constants/index.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_constants__WEBPACK_IMPORTED_MODULE_3__);





const makeMapStateToProps = () => {
  const getActiveFins = Object(_selectors_finsSelectors__WEBPACK_IMPORTED_MODULE_2__["default"])();

  function mapStateToProps({
    finances
  }) {
    return {
      wallets: getActiveFins({
        finances
      }, {
        type: _common_constants__WEBPACK_IMPORTED_MODULE_3__["WALLETS"]
      })
    };
  }

  return mapStateToProps;
};

const connectedBalance = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(makeMapStateToProps)(_Balance__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (connectedBalance);

/***/ }),

/***/ "./components/Header/ChartsToggle/ChartsToggle.jsx":
/*!*********************************************************!*\
  !*** ./components/Header/ChartsToggle/ChartsToggle.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChartsToggle_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartsToggle.sass */ "./components/Header/ChartsToggle/ChartsToggle.sass");
/* harmony import */ var _ChartsToggle_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ChartsToggle_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chart_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart_1.png */ "./components/Header/ChartsToggle/chart_1.png");
/* harmony import */ var _chart_1_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chart_1_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chart_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart_2.png */ "./components/Header/ChartsToggle/chart_2.png");
/* harmony import */ var _chart_2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chart_2_png__WEBPACK_IMPORTED_MODULE_3__);





function ChartsToggle({
  toggleCharts,
  hiddenCharts
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: toggleCharts
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: hiddenCharts ? _chart_2_png__WEBPACK_IMPORTED_MODULE_3___default.a : _chart_1_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: _ChartsToggle_sass__WEBPACK_IMPORTED_MODULE_1___default.a.hideButton,
    alt: "\u0418\u043A\u043E\u043D\u043A\u0430 \u0433\u0440\u0430\u0444\u0438\u043A\u0430"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ChartsToggle);

/***/ }),

/***/ "./components/Header/ChartsToggle/ChartsToggle.sass":
/*!**********************************************************!*\
  !*** ./components/Header/ChartsToggle/ChartsToggle.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"incomesBright":"#006280","walletsBright":"#189238","costsBright":"#d0193b","incomesPale":"rgba(0, 98, 128, 0.7)","walletsPale":"rgba(24, 146, 56, 0.7)","costsPale":"rgba(208, 25, 59, 0.7)","grey":"grey","green":"#189238","red":"#d0193b","chartsBP":"800px","hideButton":"_3EWKPcivcTh9s_f46jNsrf"};

/***/ }),

/***/ "./components/Header/ChartsToggle/chart_1.png":
/*!****************************************************!*\
  !*** ./components/Header/ChartsToggle/chart_1.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAV0lEQVR4Ae3ONxHAMADAQDM0e3tO4aHM6b1LAHQflmZABBLXl4A4BKq5r6oPujlBggSNddRHkCBBodMsSNDBUEEIEiTo/AQJElRyX+UQKAKZ68tADAuzBoAHzxFwmKrRAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./components/Header/ChartsToggle/chart_2.png":
/*!****************************************************!*\
  !*** ./components/Header/ChartsToggle/chart_2.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAk0lEQVR4Ae3VsQ3CMBBAUY8AW2QGaDwFgjVggRstI2SErEGaR31SmlMQovC/xtVrbPnaqJLJUxTmadpj7jbVNo+Wc8pMgTpn6ApWUZgVXDPUwdwKmUH/NaQLoR+HAsSAMiRA1KEBpcd5AErnATkO5dvZP2fo33/IC1j0wizg8q11dGo5N2915ra/sl+iMC9TKzT6ADNUgk1Lm1YqAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./components/Header/ChartsToggle/index.js":
/*!*************************************************!*\
  !*** ./components/Header/ChartsToggle/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _ChartsToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartsToggle */ "./components/Header/ChartsToggle/ChartsToggle.jsx");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../AC */ "./AC/index.js");




const mapStateToProps = state => ({
  hiddenCharts: state.hiddenCharts
});

const mapDispatchToProps = {
  toggleCharts: _AC__WEBPACK_IMPORTED_MODULE_2__["toggleCharts"]
};
const ConnectedChartsToggle = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_ChartsToggle__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedChartsToggle);

/***/ }),

/***/ "./components/Header/Header.jsx":
/*!**************************************!*\
  !*** ./components/Header/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Balance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Balance */ "./components/Header/Balance/index.js");
/* harmony import */ var _ChartsToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChartsToggle */ "./components/Header/ChartsToggle/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./components/Header/Menu/index.js");
/* harmony import */ var _Header_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header.sass */ "./components/Header/Header.sass");
/* harmony import */ var _Header_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Header_sass__WEBPACK_IMPORTED_MODULE_5__);







function Header({
  home
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Header_sass__WEBPACK_IMPORTED_MODULE_5___default.a.header
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], null), !home && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Balance__WEBPACK_IMPORTED_MODULE_2__["default"], null), !home && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChartsToggle__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

Header.propTypes = {
  home: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Header.defaultProps = {
  home: false
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/Header.sass":
/*!***************************************!*\
  !*** ./components/Header/Header.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"incomesBright":"#006280","walletsBright":"#189238","costsBright":"#d0193b","incomesPale":"rgba(0, 98, 128, 0.7)","walletsPale":"rgba(24, 146, 56, 0.7)","costsPale":"rgba(208, 25, 59, 0.7)","grey":"grey","green":"#189238","red":"#d0193b","chartsBP":"800px","header":"_1JEKvVm5E9RuaGrl_eqdJ9","sign":"_3MDq5GePid0n2uYoJ_1PiH","balance":"AZUny_0DMkTTyqorQH4Wu"};

/***/ }),

/***/ "./components/Header/Menu/Menu.jsx":
/*!*****************************************!*\
  !*** ./components/Header/Menu/Menu.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu_icon.png */ "./components/Header/Menu/menu_icon.png");
/* harmony import */ var _menu_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_menu_icon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Menu_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu.sass */ "./components/Header/Menu/Menu.sass");
/* harmony import */ var _Menu_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Menu_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Auth_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Auth/Auth */ "./components/Auth/Auth.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers */ "./helpers/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Menu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      hidden: true
    });

    _defineProperty(this, "hideMenu", () => {
      if (!this.state.hidden) this.setState({
        hidden: true
      });
    });

    _defineProperty(this, "toggleMenu", () => {
      this.setState(state => ({
        hidden: !state.hidden
      }));
    });
  }

  componentDidMount() {
    document.body.addEventListener("click", this.hideMenu);
  }

  render() {
    console.log("ren");
    const {
      isAuth,
      signIn,
      signOut,
      getUser
    } = _Auth_Auth__WEBPACK_IMPORTED_MODULE_5__["default"];
    const path = this.props.location.pathname;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Menu_sass__WEBPACK_IMPORTED_MODULE_4___default.a.menuContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Menu_sass__WEBPACK_IMPORTED_MODULE_4___default.a.menuBlock,
      onClick: this.toggleMenu
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: _Menu_sass__WEBPACK_IMPORTED_MODULE_4___default.a.menuButton,
      src: _menu_icon_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "menu"
    }), isAuth() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      title: getUser().name,
      className: `${_Menu_sass__WEBPACK_IMPORTED_MODULE_4___default.a.userName} ${path === "/app" && _Menu_sass__WEBPACK_IMPORTED_MODULE_4___default.a.dn}`
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["textTrimmer"])(getUser().name, 12)), !isAuth() && path === "/demo" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: _Menu_sass__WEBPACK_IMPORTED_MODULE_4___default.a.demo
    }, "\u0414\u0435\u043C\u043E-\u0430\u043A\u043A\u0430\u0443\u043D\u0442")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `${_Menu_sass__WEBPACK_IMPORTED_MODULE_4___default.a.menuList} ${!this.state.hidden && _Menu_sass__WEBPACK_IMPORTED_MODULE_4___default.a.menuShow}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      exact: true,
      to: "/",
      className: _Menu_sass__WEBPACK_IMPORTED_MODULE_4___default.a.menuEl,
      activeClassName: _Menu_sass__WEBPACK_IMPORTED_MODULE_4___default.a.activeEL
    }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      exact: true,
      to: "/app",
      className: _Menu_sass__WEBPACK_IMPORTED_MODULE_4___default.a.menuEl,
      activeClassName: _Menu_sass__WEBPACK_IMPORTED_MODULE_4___default.a.activeEL
    }, "\u0423\u0447\u0435\u0442 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432"), !isAuth() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      exact: true,
      to: "/demo",
      className: _Menu_sass__WEBPACK_IMPORTED_MODULE_4___default.a.menuEl,
      activeClassName: _Menu_sass__WEBPACK_IMPORTED_MODULE_4___default.a.activeEL
    }, "\u0414\u0435\u043C\u043E-\u0430\u043A\u043A\u0430\u0443\u043D\u0442"), !isAuth() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Menu_sass__WEBPACK_IMPORTED_MODULE_4___default.a.menuEl,
      onClick: signIn
    }, "\u0412\u0445\u043E\u0434/\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"), isAuth() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Menu_sass__WEBPACK_IMPORTED_MODULE_4___default.a.menuEl,
      onClick: () => signOut()
    }, "\u0412\u044B\u0439\u0442\u0438")));
  }

}

Menu.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Menu));

/***/ }),

/***/ "./components/Header/Menu/Menu.sass":
/*!******************************************!*\
  !*** ./components/Header/Menu/Menu.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"incomesBright":"#006280","walletsBright":"#189238","costsBright":"#d0193b","incomesPale":"rgba(0, 98, 128, 0.7)","walletsPale":"rgba(24, 146, 56, 0.7)","costsPale":"rgba(208, 25, 59, 0.7)","grey":"grey","green":"#189238","red":"#d0193b","chartsBP":"800px","menuBlock":"_1G6F-HU_LJJUc2_GvkRLV-","menuButton":"BIWaFSTrQFxGkT9Vst7Eb","userName":"_2HsTXY1NDYSDF3JuxO5mRD","demo":"_33L8Ctp42aoqPJCPFBaVit","menuList":"AklrBa3cseHmx6xKazLFU","menuShow":"_2RlcEns873xZXnnzDzn0CC","menuEl":"_14S-0mb9FlypzD_dlyPrdB","activeEL":"_2U_WFQ0xs3hhhzr7s8XprQ","dn":"_2r4EeQu7pECiPVA9XH6LA_"};

/***/ }),

/***/ "./components/Header/Menu/index.js":
/*!*****************************************!*\
  !*** ./components/Header/Menu/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./components/Header/Menu/Menu.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Menu__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Header/Menu/menu_icon.png":
/*!**********************************************!*\
  !*** ./components/Header/Menu/menu_icon.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkAQAAAADJe6U1AAAAAnRSTlMAAHaTzTgAAAAVSURBVHgBYyAV8P///x+ZpLl68gAA5l8bbe6e1/kAAAAASUVORK5CYII="

/***/ }),

/***/ "./components/Home/Home.jsx":
/*!**********************************!*\
  !*** ./components/Home/Home.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.sass */ "./components/Home/Home.sass");
/* harmony import */ var _Home_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Home_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/Header */ "./components/Header/Header.jsx");
/* harmony import */ var _Thank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Thank */ "./components/Home/Thank.jsx");





function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Home_sass__WEBPACK_IMPORTED_MODULE_1___default.a.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    home: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Home_sass__WEBPACK_IMPORTED_MODULE_1___default.a.content
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "MOTIVATOR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u0412\u0435\u0431-\u0441\u0435\u0440\u0432\u0438\u0441 \u0434\u043B\u044F \u0443\u0447\u0435\u0442\u0430 \u043B\u0438\u0447\u043D\u044B\u0445 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Home_sass__WEBPACK_IMPORTED_MODULE_1___default.a.video
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: "\u0412\u0438\u0434\u0435\u043E",
    width: "100%",
    height: "100%",
    src: "https://www.youtube.com/embed/QSTPRGBx6_E",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _Home_sass__WEBPACK_IMPORTED_MODULE_1___default.a.learnVideo
  }, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0432\u0438\u0434\u0435\u043E \u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u0442\u043E\u043D\u043A\u043E\u0441\u0442\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0435\u0440\u0432\u0438\u0441\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u0417\u0430\u0447\u0435\u043C \u0432\u0435\u0441\u0442\u0438 \u0443\u0447\u0435\u0442 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _Home_sass__WEBPACK_IMPORTED_MODULE_1___default.a.why
  }, "\u0421\u0438\u0441\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0432\u0441\u0435\u0445 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432 \u0438 \u0434\u043E\u0445\u043E\u0434\u043E\u0432 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u043F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u0430\u043D\u0430\u043B\u0438\u0437 \u0438 \u0432\u044B\u044F\u0441\u043D\u0438\u0442\u044C \u043A\u0443\u0434\u0430 \"\u0438\u0441\u0447\u0435\u0437\u0430\u044E\u0442\" \u0434\u0435\u043D\u044C\u0433\u0438 \u0438 \u043D\u0430 \u0447\u0435\u043C \u043C\u043E\u0436\u043D\u043E \u0441\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442\u044C. \u0412\u044B \u043F\u043E \u0434\u0440\u0443\u0433\u043E\u043C\u0443 \u043D\u0430\u0447\u043D\u0435\u0442\u0435 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u043A \u0434\u0435\u043D\u044C\u0433\u0430\u043C, \u0443 \u0432\u0430\u0441 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u044F \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u0442\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0442\u044C \u0438 \u043C\u0435\u043D\u044C\u0448\u0435 \u0442\u0440\u0430\u0442\u0438\u0442\u044C.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Home_sass__WEBPACK_IMPORTED_MODULE_1___default.a.footer
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: _Home_sass__WEBPACK_IMPORTED_MODULE_1___default.a.contacts
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _Home_sass__WEBPACK_IMPORTED_MODULE_1___default.a.navEl,
    href: "https://vk.com/me6490490"
  }, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u0430\u0432\u0442\u043E\u0440\u043E\u043C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Thank__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/Home/Home.sass":
/*!***********************************!*\
  !*** ./components/Home/Home.sass ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"incomesBright":"#006280","walletsBright":"#189238","costsBright":"#d0193b","incomesPale":"rgba(0, 98, 128, 0.7)","walletsPale":"rgba(24, 146, 56, 0.7)","costsPale":"rgba(208, 25, 59, 0.7)","grey":"grey","green":"#189238","red":"#d0193b","chartsBP":"800px","container":"_3oz5wFX_u30bvsR7h9lwFb","content":"_3J-hwY0uKS6Q6UARM0OI_t","video":"_2s27wW9zt_lp3bDue1yd8E","learnVideo":"isXBTfsoyMKUw_yKpinlF","why":"_1HbbU3fF7Hf5HudZbn09E9","footer":"UldSSsUa52fooY25ZG_MY","navEl":"_2eGzBuD3IKMuOyPEwsCPez","thankHeader":"_34EZQH7DwPPv3h2IOqEUQL"};

/***/ }),

/***/ "./components/Home/Thank.jsx":
/*!***********************************!*\
  !*** ./components/Home/Thank.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_windows_coinWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../HOC/windows/coinWindow */ "./HOC/windows/coinWindow/index.jsx");
/* harmony import */ var _Home_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.sass */ "./components/Home/Home.sass");
/* harmony import */ var _Home_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Home_sass__WEBPACK_IMPORTED_MODULE_3__);





function ThankComponent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: _Home_sass__WEBPACK_IMPORTED_MODULE_3___default.a.thankHeader
  }, "\u041F\u043E\u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u0442\u044C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "BTC:"), " 1KrnqDafarN57BqV2BYpXRqc2ARtQqMdaN"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Ether:"), " 0x074306F135877c432d15b3D29d7086fF46EC0622"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "\u0421\u0431\u0435\u0440.\u0411\u0430\u043D\u043A:"), " 2202 2009 6574 3311"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Pay Pal:"), " take.money.my@gmail.com"));
}

function ThankButton({
  openModal
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: openModal,
    className: _Home_sass__WEBPACK_IMPORTED_MODULE_3___default.a.navEl
  }, "\u041F\u043E\u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u0442\u044C"));
}

ThankButton.propTypes = {
  openModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_windows_coinWindow__WEBPACK_IMPORTED_MODULE_2__["default"])(ThankButton, ThankComponent));

/***/ }),

/***/ "./components/Loading/Loading.sass":
/*!*****************************************!*\
  !*** ./components/Loading/Loading.sass ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"spinner":"iHcljqRxUbN7hB4a8Al3q"};

/***/ }),

/***/ "./components/Loading/index.jsx":
/*!**************************************!*\
  !*** ./components/Loading/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _spinner_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.gif */ "./components/Loading/spinner.gif");
/* harmony import */ var _spinner_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_spinner_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loading_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading.sass */ "./components/Loading/Loading.sass");
/* harmony import */ var _Loading_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Loading_sass__WEBPACK_IMPORTED_MODULE_2__);



function Loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _spinner_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",
    className: _Loading_sass__WEBPACK_IMPORTED_MODULE_2___default.a.spinner
  });
}

/***/ }),

/***/ "./components/Loading/spinner.gif":
/*!****************************************!*\
  !*** ./components/Loading/spinner.gif ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/spinner.gif";

/***/ }),

/***/ "./components/Main.jsx":
/*!*****************************!*\
  !*** ./components/Main.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./components/App/index.jsx");
/* harmony import */ var _Auth_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Auth/Auth */ "./components/Auth/Auth.js");
/* harmony import */ var _Auth_Callback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Auth/Callback */ "./components/Auth/Callback.jsx");
/* harmony import */ var _Home_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Home/Home */ "./components/Home/Home.jsx");
/* harmony import */ var _Auth_SecuredRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Auth/SecuredRoute */ "./components/Auth/SecuredRoute.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Main extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      checkingSession: true
    });
  }

  async componentDidMount() {
    if (this.props.location.pathname === "/callback") {
      this.setState({
        checkingSession: false
      });
      return;
    }

    try {
      await _Auth_Auth__WEBPACK_IMPORTED_MODULE_4__["default"].silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== "login_required") console.log(err.error);
    }

    this.setState({
      checkingSession: false
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "/",
      component: _Home_Home__WEBPACK_IMPORTED_MODULE_6__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "/demo",
      render: () => {
        if (_Auth_Auth__WEBPACK_IMPORTED_MODULE_4__["default"].isAuth()) _Auth_Auth__WEBPACK_IMPORTED_MODULE_4__["default"].signOut("/demo");
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Auth_SecuredRoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
      exact: true,
      path: "/app",
      component: _App__WEBPACK_IMPORTED_MODULE_3__["default"],
      checkingSession: this.state.checkingSession
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "/callback",
      component: _Auth_Callback__WEBPACK_IMPORTED_MODULE_5__["default"]
    }));
  }

}

Main.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Main));

/***/ }),

/***/ "./components/Operations/ListOp/ListOp.jsx":
/*!*************************************************!*\
  !*** ./components/Operations/ListOp/ListOp.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Op__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Op */ "./components/Operations/Op/index.js");
/* harmony import */ var _MakeOp_Breadcrumbs_Breadcrumbs_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MakeOp/Breadcrumbs/Breadcrumbs.sass */ "./components/Operations/MakeOp/Breadcrumbs/Breadcrumbs.sass");
/* harmony import */ var _MakeOp_Breadcrumbs_Breadcrumbs_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MakeOp_Breadcrumbs_Breadcrumbs_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_sass_colors_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../App/sass/colors.sass */ "./components/App/sass/colors.sass");
/* harmony import */ var _App_sass_colors_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_sass_colors_sass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ListOp_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ListOp.sass */ "./components/Operations/ListOp/ListOp.sass");
/* harmony import */ var _ListOp_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ListOp_sass__WEBPACK_IMPORTED_MODULE_6__);








function ListOp({
  ops,
  name,
  type
}) {
  const windowTitle = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: _ListOp_sass__WEBPACK_IMPORTED_MODULE_6___default.a.header
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: _ListOp_sass__WEBPACK_IMPORTED_MODULE_6___default.a.title
  }, "\u041F\u0435\u0440\u0435\u0447\u0435\u043D\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u0434\u043B\u044F: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: `${_MakeOp_Breadcrumbs_Breadcrumbs_sass__WEBPACK_IMPORTED_MODULE_4__["el"]} ${_App_sass_colors_sass__WEBPACK_IMPORTED_MODULE_5___default.a[type]}`
  }, name));

  if (!ops.length) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, windowTitle, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _ListOp_sass__WEBPACK_IMPORTED_MODULE_6___default.a.noOps
    }, "\u041D\u0435\u0442 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439"));
  }

  let prevDate = null;

  function showDate(date) {
    const formatDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format("dd Do MMM YYYY");
    if (prevDate === formatDate) return null;
    prevDate = formatDate;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ListOp_sass__WEBPACK_IMPORTED_MODULE_6___default.a.date
    }, formatDate);
  }

  const opsRender = ops.map(op => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: op._id
  }, showDate(op.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Op__WEBPACK_IMPORTED_MODULE_3__["default"], {
    from: {
      _id: op.from_id,
      type: op.from_type
    },
    to: {
      _id: op.to_id,
      type: op.to_type
    },
    opId: op._id,
    amountOp: op.amount,
    tag: op.tag,
    date: new Date(op.date)
  })));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, windowTitle, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _ListOp_sass__WEBPACK_IMPORTED_MODULE_6___default.a.list
  }, opsRender));
}

ListOp.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  ops: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(Array)
};
ListOp.defaultProps = {
  ops: []
};
/* harmony default export */ __webpack_exports__["default"] = (ListOp);

/***/ }),

/***/ "./components/Operations/ListOp/ListOp.sass":
/*!**************************************************!*\
  !*** ./components/Operations/ListOp/ListOp.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"_1Z5w220fcOr6OOgDgOSHLg","title":"_3JjcpJO2os1su3MT67_0bS","list":"_2WMP7SRrmqv-dIHjIQlwv","date":"_1N-FBRiibxcZEb2K38S4wH","noOps":"_2AXptxOS9b8lHBCs8Zq_f_"};

/***/ }),

/***/ "./components/Operations/ListOp/index.js":
/*!***********************************************!*\
  !*** ./components/Operations/ListOp/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _ListOp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListOp */ "./components/Operations/ListOp/ListOp.jsx");
/* harmony import */ var _selectors_opsSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../selectors/opsSelectors */ "./selectors/opsSelectors.js");




function mapStateToProps({
  operations
}, {
  _id
}) {
  return {
    ops: Object(_selectors_opsSelectors__WEBPACK_IMPORTED_MODULE_2__["opsByFinId"])({
      operations
    }, {
      _id
    })
  };
}

const ConnectedListOp = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_ListOp__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedListOp);

/***/ }),

/***/ "./components/Operations/MakeOp/Breadcrumbs/Breadcrumbs.jsx":
/*!******************************************************************!*\
  !*** ./components/Operations/MakeOp/Breadcrumbs/Breadcrumbs.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Breadcrumbs_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Breadcrumbs.sass */ "./components/Operations/MakeOp/Breadcrumbs/Breadcrumbs.sass");
/* harmony import */ var _Breadcrumbs_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Breadcrumbs_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_sass_colors_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../App/sass/colors.sass */ "./components/App/sass/colors.sass");
/* harmony import */ var _App_sass_colors_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_sass_colors_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _arrow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arrow.png */ "./components/Operations/MakeOp/Breadcrumbs/arrow.png");
/* harmony import */ var _arrow_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_arrow_png__WEBPACK_IMPORTED_MODULE_4__);






function Breadcrumbs({
  from,
  to
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Breadcrumbs_sass__WEBPACK_IMPORTED_MODULE_2___default.a.chain
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: `${_Breadcrumbs_sass__WEBPACK_IMPORTED_MODULE_2___default.a.el} ${_App_sass_colors_sass__WEBPACK_IMPORTED_MODULE_3___default.a[from.type]}`
  }, from.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _arrow_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "\u0441\u0442\u0440\u0435\u043B\u043A\u0430"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: `${_Breadcrumbs_sass__WEBPACK_IMPORTED_MODULE_2___default.a.el} ${_App_sass_colors_sass__WEBPACK_IMPORTED_MODULE_3___default.a[to.type]}`
  }, to.name));
}

Breadcrumbs.propTypes = {
  from: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Breadcrumbs);

/***/ }),

/***/ "./components/Operations/MakeOp/Breadcrumbs/Breadcrumbs.sass":
/*!*******************************************************************!*\
  !*** ./components/Operations/MakeOp/Breadcrumbs/Breadcrumbs.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"chain":"_2vucRcsZPVWwleGUNdpxoQ","el":"_3YBRAjGjQiUX6b-oEeubSQ"};

/***/ }),

/***/ "./components/Operations/MakeOp/Breadcrumbs/arrow.png":
/*!************************************************************!*\
  !*** ./components/Operations/MakeOp/Breadcrumbs/arrow.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAALElEQVR4AWMYIWAU1FPLoP9AXEFI0QEi8H+YYdQyqIEaXuumRhh1DZdUMwoATlYWfwh9eYkAAAAASUVORK5CYII="

/***/ }),

/***/ "./components/Operations/MakeOp/Breadcrumbs/index.js":
/*!***********************************************************!*\
  !*** ./components/Operations/MakeOp/Breadcrumbs/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumbs */ "./components/Operations/MakeOp/Breadcrumbs/Breadcrumbs.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Breadcrumbs__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Operations/MakeOp/DataPicker/DatePicker.jsx":
/*!****************************************************************!*\
  !*** ./components/Operations/MakeOp/DataPicker/DatePicker.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-day-picker/DayPickerInput */ "../node_modules/react-day-picker/DayPickerInput.js");
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_day_picker_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-day-picker/moment */ "../node_modules/react-day-picker/moment.js");
/* harmony import */ var react_day_picker_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-day-picker/lib/style.css */ "../node_modules/react-day-picker/lib/style.css");
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MakeOp_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MakeOp.sass */ "./components/Operations/MakeOp/MakeOp.sass");
/* harmony import */ var _MakeOp_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MakeOp_sass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavBar */ "./components/Operations/MakeOp/DataPicker/NavBar.jsx");
/* harmony import */ var moment_locale_ru__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment/locale/ru */ "../node_modules/moment/locale/ru.js");
/* harmony import */ var moment_locale_ru__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment_locale_ru__WEBPACK_IMPORTED_MODULE_7__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const customStyle = `
.DayPicker { 
  font-size: 1.4rem; 
}
.DayPicker-Caption>div { 
  text-align: center;
}
div.DayPickerInput-OverlayWrapper { 
  top: -25px;
  left: -20px;
  position: absolute;
}
`;

class DatePick extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selectedDay: this.props.date
    });

    _defineProperty(this, "handleChange", selectedDay => {
      this.setState({
        selectedDay
      });
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _MakeOp_sass__WEBPACK_IMPORTED_MODULE_5___default.a.dayPicker
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "hidden",
      name: "date",
      value: this.state.selectedDay
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, customStyle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_1___default.a, {
      formatDate: react_day_picker_moment__WEBPACK_IMPORTED_MODULE_3__["formatDate"],
      localeUtils: react_day_picker_moment__WEBPACK_IMPORTED_MODULE_3___default.a,
      locale: "ru",
      format: "LL",
      onDayChange: this.handleChange,
      value: this.state.selectedDay,
      inputProps: {
        readOnly: true
      },
      dayPickerProps: {
        selectedDays: this.state.selectedDay,
        locale: "ru",
        localeUtils: react_day_picker_moment__WEBPACK_IMPORTED_MODULE_3___default.a,
        navbarElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], null)
      }
    }));
  }

}

DatePick.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(Date)
};
DatePick.defaultProps = {
  date: new Date()
};
/* harmony default export */ __webpack_exports__["default"] = (DatePick);

/***/ }),

/***/ "./components/Operations/MakeOp/DataPicker/NavBar.jsx":
/*!************************************************************!*\
  !*** ./components/Operations/MakeOp/DataPicker/NavBar.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.sass */ "./components/Operations/MakeOp/DataPicker/Navbar.sass");
/* harmony import */ var _Navbar_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_sass__WEBPACK_IMPORTED_MODULE_1__);



function Navbar({
  onPreviousClick,
  onNextClick,
  className
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `DayPicker-NavButton DayPicker-NavButton--prev ${_Navbar_sass__WEBPACK_IMPORTED_MODULE_1___default.a.button}`,
    onClick: () => onPreviousClick()
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `DayPicker-NavButton DayPicker-NavButton--next ${_Navbar_sass__WEBPACK_IMPORTED_MODULE_1___default.a.button}`,
    onClick: () => onNextClick()
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Operations/MakeOp/DataPicker/Navbar.sass":
/*!*************************************************************!*\
  !*** ./components/Operations/MakeOp/DataPicker/Navbar.sass ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"button":"fZd3J9iZkxkfL_mLCj8z2"};

/***/ }),

/***/ "./components/Operations/MakeOp/MakeOp.jsx":
/*!*************************************************!*\
  !*** ./components/Operations/MakeOp/MakeOp.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Breadcrumbs */ "./components/Operations/MakeOp/Breadcrumbs/index.js");
/* harmony import */ var _DataPicker_DatePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataPicker/DatePicker */ "./components/Operations/MakeOp/DataPicker/DatePicker.jsx");
/* harmony import */ var _App_sass_global_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../App/sass/global.sass */ "./components/App/sass/global.sass");
/* harmony import */ var _App_sass_global_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_sass_global_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MakeOp_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MakeOp.sass */ "./components/Operations/MakeOp/MakeOp.sass");
/* harmony import */ var _MakeOp_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MakeOp_sass__WEBPACK_IMPORTED_MODULE_5__);







const {
  WALLETS
} = __webpack_require__(/*! ../../../../common/constants */ "../common/constants/index.js");

function AddOp({
  from,
  to,
  closeModal,
  makeOp,
  amountOp,
  opId,
  tag,
  date
}) {
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    makeOp(formData);
    closeModal();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, amountOp ? "Редактирование денежной операции" : "Создание денежной операции"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    from: from,
    to: to
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit,
    autoComplete: "off"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MakeOp_sass__WEBPACK_IMPORTED_MODULE_5___default.a.container
  }, opId && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "_id",
    value: opId
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "from_id",
    value: from._id
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "to_id",
    value: to._id
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "from_type",
    value: from.type
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "to_type",
    value: to.type
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MakeOp_sass__WEBPACK_IMPORTED_MODULE_5___default.a.fields
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _App_sass_global_sass__WEBPACK_IMPORTED_MODULE_4__["star"]
  }, "* "), "\u0421\u0443\u043C\u043C\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    step: "0.01",
    name: "amount",
    defaultValue: amountOp,
    min: "0.01",
    max: from.type === WALLETS && from.amount > 0 ? from.amount + (amountOp || 0) : undefined,
    autoFocus: true,
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0422\u044D\u0433:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "tag",
    defaultValue: tag
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DataPicker_DatePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    date: date
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit"
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")));
}

AddOp.propTypes = {
  opId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  from: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    amount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }).isRequired,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  closeModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  makeOp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  amountOp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date)
};
AddOp.defaultProps = {
  amountOp: undefined,
  opId: undefined,
  tag: undefined,
  date: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (AddOp);

/***/ }),

/***/ "./components/Operations/MakeOp/MakeOp.sass":
/*!**************************************************!*\
  !*** ./components/Operations/MakeOp/MakeOp.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"_1hS5_0z7MxwaIDObMK0_PU","fields":"_169s-LNbdb4N4NKVQwC6Gr"};

/***/ }),

/***/ "./components/Operations/MakeOp/index.js":
/*!***********************************************!*\
  !*** ./components/Operations/MakeOp/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _MakeOp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MakeOp */ "./components/Operations/MakeOp/MakeOp.jsx");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../AC */ "./AC/index.js");




const mapDispatchToProps = (dispatch, {
  amountOp
}) => ({
  makeOp: formData => {
    const makeOp = amountOp ? _AC__WEBPACK_IMPORTED_MODULE_2__["editOp"] : _AC__WEBPACK_IMPORTED_MODULE_2__["addOp"];
    return dispatch(makeOp(formData));
  }
});

const ConnectedAddOp = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDispatchToProps)(_MakeOp__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedAddOp);

/***/ }),

/***/ "./components/Operations/Op/Op.jsx":
/*!*****************************************!*\
  !*** ./components/Operations/Op/Op.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Finances_DelItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Finances/DelItem */ "./components/Finances/DelItem/index.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/constants */ "../common/constants/index.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_constants__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Op_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Op.sass */ "./components/Operations/Op/Op.sass");
/* harmony import */ var _Op_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Op_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_sass_colors_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../App/sass/colors.sass */ "./components/App/sass/colors.sass");
/* harmony import */ var _App_sass_colors_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_sass_colors_sass__WEBPACK_IMPORTED_MODULE_5__);







function Op(props) {
  const {
    opId,
    amountOp,
    from,
    to,
    delOp,
    tag,
    openModal
  } = props;
  let prefix = " ";
  let colorClass;

  if (from.type === _common_constants__WEBPACK_IMPORTED_MODULE_3__["INCOMES"]) {
    prefix = "+";
    colorClass = _App_sass_colors_sass__WEBPACK_IMPORTED_MODULE_5___default.a.greenText;
  } else if (to.type === _common_constants__WEBPACK_IMPORTED_MODULE_3__["COSTS"]) {
    prefix = "-";
    colorClass = _App_sass_colors_sass__WEBPACK_IMPORTED_MODULE_5___default.a.redText;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Op_sass__WEBPACK_IMPORTED_MODULE_4___default.a.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    title: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
    onClick: () => openModal(from, to),
    className: _Op_sass__WEBPACK_IMPORTED_MODULE_4___default.a.opContainer
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _Op_sass__WEBPACK_IMPORTED_MODULE_4___default.a.fromTo
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _App_sass_colors_sass__WEBPACK_IMPORTED_MODULE_5___default.a[`${from.type}Text`]
  }, from.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _App_sass_colors_sass__WEBPACK_IMPORTED_MODULE_5___default.a[`${to.type}Text`]
  }, to.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _Op_sass__WEBPACK_IMPORTED_MODULE_4___default.a.tag
  }, tag), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: `${_Op_sass__WEBPACK_IMPORTED_MODULE_4___default.a.amount} ${colorClass}`
  }, `${prefix}${amountOp}`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Finances_DelItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sass: _Op_sass__WEBPACK_IMPORTED_MODULE_4___default.a.delButton,
    confirm: () => delOp(opId)
  }));
}

Op.propTypes = {
  opId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  amountOp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  delOp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  openModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  from: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Op.defaultProps = {
  tag: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (Op);

/***/ }),

/***/ "./components/Operations/Op/Op.sass":
/*!******************************************!*\
  !*** ./components/Operations/Op/Op.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"incomesBright":"#006280","walletsBright":"#189238","costsBright":"#d0193b","incomesPale":"rgba(0, 98, 128, 0.7)","walletsPale":"rgba(24, 146, 56, 0.7)","costsPale":"rgba(208, 25, 59, 0.7)","grey":"grey","green":"#189238","red":"#d0193b","chartsBP":"800px","container":"_3D7tiLMyfLD1cwct-HMcsf","opContainer":"o0YQ0ewsh-yIWok7keOXw","fromTo":"_3WA-6RWBGCJFHkHddddmF-","tag":"_81XVn9xE-RgTsIu9NZkkn","amount":"_3WfGXVUjzJzS4D6NMzZm7x","delButton":"h_JRrMECKDasgIX9IovoQ"};

/***/ }),

/***/ "./components/Operations/Op/index.js":
/*!*******************************************!*\
  !*** ./components/Operations/Op/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../AC */ "./AC/index.js");
/* harmony import */ var _Op__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Op */ "./components/Operations/Op/Op.jsx");
/* harmony import */ var _MakeOp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MakeOp */ "./components/Operations/MakeOp/index.js");
/* harmony import */ var _HOC_windows_opWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../HOC/windows/opWindow */ "./HOC/windows/opWindow/index.jsx");






const mapStateToProps = (state, {
  from,
  to
}) => {
  const fromItems = state.finances[from.type];
  const toItems = state.finances[to.type];
  const fromItem = fromItems.find(item => item._id === from._id);
  const toItem = toItems.find(item => item._id === to._id);
  return {
    from: {
      name: fromItem.name,
      _id: from._id,
      type: from.type,
      amount: fromItem.amount
    },
    to: {
      name: toItem.name,
      _id: to._id,
      type: to.type
    }
  };
};

const mapDispatchToProps = {
  delOp: _AC__WEBPACK_IMPORTED_MODULE_1__["delOp"]
};
const ConnectedOp = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Op__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_windows_opWindow__WEBPACK_IMPORTED_MODULE_4__["default"])(ConnectedOp, _MakeOp__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./helpers/DOM.js":
/*!************************!*\
  !*** ./helpers/DOM.js ***!
  \************************/
/*! exports provided: bodyScroll, toggleClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bodyScroll", function() { return bodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
// import { dn } from "../components/App/sass/global.sass";
function bodyScroll(val) {
  document.body.style.overflow = val ? "auto" : "hidden";
} // export function needScroll(elClass, need) {
//   const el = document.getElementsByClassName(elClass)[0];
//   if (need) {
//     if (el.classList.contains(stopScroll)) el.classList.remove(stopScroll);
//   } else if (!need) {
//     if (!el.classList.contains(stopScroll)) el.classList.add(stopScroll);
//   }
// }

function toggleClass(elClass, toggledClass, need) {
  const el = document.getElementsByClassName(elClass)[0];

  if (need) {
    if (!el.classList.contains(toggledClass)) el.classList.add(toggledClass);
  } else if (!need) {
    if (el.classList.contains(toggledClass)) el.classList.remove(toggledClass);
  }
}

/***/ }),

/***/ "./helpers/formatData.js":
/*!*******************************!*\
  !*** ./helpers/formatData.js ***!
  \*******************************/
/*! exports provided: textTrimmer, moneyFormat, MMYY, separate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textTrimmer", function() { return textTrimmer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moneyFormat", function() { return moneyFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MMYY", function() { return MMYY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separate", function() { return separate; });
function textTrimmer(fullText, limit = 40) {
  if (!fullText) return "";
  let text = fullText;
  if (typeof text !== "string") text = text.toString();

  if (text.length > limit) {
    return `${text.slice(0, limit - 1)}...`;
  }

  return text;
}
function moneyFormat(num) {
  if (!num) return num;
  let money = num.toString();
  money = separate(money);
  money = textTrimmer(money, 10);
  return money;
}
function MMYY(date) {
  const newDate = new Date(date);
  newDate.setDate(1);
  newDate.setHours(0, 0, 0, 0);
  return newDate.toString();
}
function separate(num) {
  if (!num) return num;
  const text = num.toString();
  return text.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}

/***/ }),

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/*! exports provided: textTrimmer, moneyFormat, MMYY, separate, compareObjByVals, compareArrOfObj, bodyScroll, toggleClass, isMobile, touchDevice, vibrate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatData */ "./helpers/formatData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textTrimmer", function() { return _formatData__WEBPACK_IMPORTED_MODULE_0__["textTrimmer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moneyFormat", function() { return _formatData__WEBPACK_IMPORTED_MODULE_0__["moneyFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MMYY", function() { return _formatData__WEBPACK_IMPORTED_MODULE_0__["MMYY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "separate", function() { return _formatData__WEBPACK_IMPORTED_MODULE_0__["separate"]; });

/* harmony import */ var _objFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objFuncs */ "./helpers/objFuncs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareObjByVals", function() { return _objFuncs__WEBPACK_IMPORTED_MODULE_1__["compareObjByVals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareArrOfObj", function() { return _objFuncs__WEBPACK_IMPORTED_MODULE_1__["compareArrOfObj"]; });

/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ "./helpers/DOM.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bodyScroll", function() { return _DOM__WEBPACK_IMPORTED_MODULE_2__["bodyScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return _DOM__WEBPACK_IMPORTED_MODULE_2__["toggleClass"]; });

/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other */ "./helpers/other.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _other__WEBPACK_IMPORTED_MODULE_3__["isMobile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touchDevice", function() { return _other__WEBPACK_IMPORTED_MODULE_3__["touchDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrate", function() { return _other__WEBPACK_IMPORTED_MODULE_3__["vibrate"]; });






/***/ }),

/***/ "./helpers/objFuncs.js":
/*!*****************************!*\
  !*** ./helpers/objFuncs.js ***!
  \*****************************/
/*! exports provided: compareObjByVals, compareArrOfObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareObjByVals", function() { return compareObjByVals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareArrOfObj", function() { return compareArrOfObj; });
function compareObjByVals(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  keys1.forEach(key => {
    console.log(obj1[key]);
    console.log(obj2[key]);

    if (obj1[key] !== obj2[key]) {
      return false;
    }
  });
  return true;
}

function compareArrOfObj(arr1, arr2) {
  arr1.forEach(obj1 => {
    const finded = arr2.find(obj2 => compareObjByVals(obj1, obj2));
    if (!finded) return false;
  });
  return true;
}



/***/ }),

/***/ "./helpers/other.js":
/*!**************************!*\
  !*** ./helpers/other.js ***!
  \**************************/
/*! exports provided: isMobile, touchDevice, vibrate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchDevice", function() { return touchDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrate", function() { return vibrate; });
/* harmony import */ var _components_App_sass_vars_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/App/sass/vars.sass */ "./components/App/sass/vars.sass");
/* harmony import */ var _components_App_sass_vars_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_App_sass_vars_sass__WEBPACK_IMPORTED_MODULE_0__);

function isMobile() {
  return screen.width < parseInt(_components_App_sass_vars_sass__WEBPACK_IMPORTED_MODULE_0___default.a.chartsBP, 10);
}
function touchDevice() {
  return "ontouchstart" in document.documentElement;
}
function vibrate(val) {
  try {
    if ("vibrate" in navigator) return navigator.vibrate(val);
    if ("oVibrate" in navigator) return navigator.oVibrate(val);
    if ("mozVibrate" in navigator) return navigator.mozVibrate(val);
    if ("webkitVibrate" in navigator) return navigator.webkitVibrate(val);
  } catch (err) {
    alert(err);
  }

  console.log("нету вибро");
}

/***/ }),

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Main */ "./components/Main.jsx");




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById("root"));

/***/ }),

/***/ "./reducers/dndReducer.js":
/*!********************************!*\
  !*** ./reducers/dndReducer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AC */ "./AC/index.js");


function dndReducer(dragEl = {}, {
  type,
  data
}) {
  switch (type) {
    case _AC__WEBPACK_IMPORTED_MODULE_0__["SET_DRAG_EL"]:
      return JSON.stringify(data) === JSON.stringify(dragEl) ? dragEl : data;

    default:
      return dragEl;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (dndReducer);

/***/ }),

/***/ "./reducers/financeReducer.js":
/*!************************************!*\
  !*** ./reducers/financeReducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AC */ "./AC/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function financeReducer(finances = {}, {
  type,
  payload: data
}) {
  switch (type) {
    case _AC__WEBPACK_IMPORTED_MODULE_0__["GET_ITEMS"]:
      {
        return _objectSpread({}, finances, data);
      }

    case _AC__WEBPACK_IMPORTED_MODULE_0__["ADD_ITEM"]:
      {
        const {
          model
        } = data;
        const newSection = [...finances[model], data];
        return _objectSpread({}, finances, {
          [model]: newSection
        });
      }

    case _AC__WEBPACK_IMPORTED_MODULE_0__["EDIT_ITEM"]:
      {
        const {
          model
        } = data;
        const newSection = editSect(finances[model], data);
        return _objectSpread({}, finances, {
          [model]: newSection
        });
      }

    case _AC__WEBPACK_IMPORTED_MODULE_0__["ADD_OP"]:
    case _AC__WEBPACK_IMPORTED_MODULE_0__["DELETE_OP"]:
    case _AC__WEBPACK_IMPORTED_MODULE_0__["EDIT_OP"]:
    case _AC__WEBPACK_IMPORTED_MODULE_0__["UPDATE_ITEMS"]:
      {
        return updateWallets(data.newItems, finances);
      }

    case _AC__WEBPACK_IMPORTED_MODULE_0__["DELETE_ITEM"]:
      {
        const {
          _id,
          model,
          newItems
        } = data;
        const newSect = finances[model].filter(item => item._id !== _id);

        const fin = _objectSpread({}, finances, {
          [model]: newSect
        });

        return updateWallets(newItems, fin);
      }

    case _AC__WEBPACK_IMPORTED_MODULE_0__["DISABLE_ITEM"]:
      {
        const {
          model
        } = data;
        const newSect = editSect(finances[model], data);
        return _objectSpread({}, finances, {
          [model]: newSect
        });
      }

    default:
      {
        return finances;
      }
  }
}

function editSect(section, newItem) {
  const newSect = section.map(item => item._id === newItem._id ? newItem : item);
  return newSect;
}

function updateWallets(items, fin) {
  return items.reduce((prev, item) => {
    if (!item) return prev;
    const newSect = editSect(prev.wallets, item);
    return _objectSpread({}, prev, {
      wallets: newSect
    });
  }, fin);
}

/* harmony default export */ __webpack_exports__["default"] = (financeReducer);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _financeReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./financeReducer */ "./reducers/financeReducer.js");
/* harmony import */ var _loadingReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadingReducer */ "./reducers/loadingReducer.js");
/* harmony import */ var _opReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opReducer */ "./reducers/opReducer.js");
/* harmony import */ var _dndReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dndReducer */ "./reducers/dndReducer.js");
/* harmony import */ var _toggleChartsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggleChartsReducer */ "./reducers/toggleChartsReducer.js");






const reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  finances: _financeReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  loading: _loadingReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  operations: _opReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  dragEl: _dndReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  hiddenCharts: _toggleChartsReducer__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/loadingReducer.js":
/*!************************************!*\
  !*** ./reducers/loadingReducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AC */ "./AC/index.js");


function loadingReducer(loading, action) {
  switch (action.type) {
    case _AC__WEBPACK_IMPORTED_MODULE_0__["START"]:
      return true;

    default:
      return false;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (loadingReducer);

/***/ }),

/***/ "./reducers/opReducer.js":
/*!*******************************!*\
  !*** ./reducers/opReducer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AC */ "./AC/index.js");


function opReducer(operations = [], {
  type,
  payload: data
}) {
  switch (type) {
    case _AC__WEBPACK_IMPORTED_MODULE_0__["GET_OPS"]:
      {
        return data;
      }

    case _AC__WEBPACK_IMPORTED_MODULE_0__["ADD_OP"]:
      {
        const newOps = operations.concat(data.newOp);
        newOps.sort((a, b) => new Date(b.date) - new Date(a.date));
        return newOps;
      }

    case _AC__WEBPACK_IMPORTED_MODULE_0__["EDIT_OP"]:
      {
        const index = operations.findIndex(op => op._id === data.newOp._id);
        const begin = operations.slice(0, index);
        const end = operations.slice(index + 1);
        const newOps = begin.concat(data.newOp, end);
        newOps.sort((a, b) => new Date(b.date) - new Date(a.date));
        return newOps;
      }

    case _AC__WEBPACK_IMPORTED_MODULE_0__["DELETE_OP"]:
      {
        return operations.filter(op => op._id !== data._id);
      }

    case _AC__WEBPACK_IMPORTED_MODULE_0__["DELETE_ITEM"]:
      {
        const {
          _id
        } = data;
        return operations.filter(op => op.from_id !== _id && op.to_id !== _id);
      }

    default:
      {
        return operations;
      }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (opReducer);

/***/ }),

/***/ "./reducers/toggleChartsReducer.js":
/*!*****************************************!*\
  !*** ./reducers/toggleChartsReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AC */ "./AC/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _components_App_App_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/App/App.sass */ "./components/App/App.sass");
/* harmony import */ var _components_App_App_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_App_App_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_App_sass_global_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/App/sass/global.sass */ "./components/App/sass/global.sass");
/* harmony import */ var _components_App_sass_global_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_App_sass_global_sass__WEBPACK_IMPORTED_MODULE_3__);





function toggleChartsReducer(hiddenCharts = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["isMobile"])(), action) {
  switch (action.type) {
    case _AC__WEBPACK_IMPORTED_MODULE_0__["CHANGE_VISIBILITY"]:
      if (Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["isMobile"])() && hiddenCharts) Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["toggleClass"])(_components_App_App_sass__WEBPACK_IMPORTED_MODULE_2__["finances"], _components_App_sass_global_sass__WEBPACK_IMPORTED_MODULE_3__["dn"], true);
      if (Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["isMobile"])() && !hiddenCharts) Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["toggleClass"])(_components_App_App_sass__WEBPACK_IMPORTED_MODULE_2__["finances"], _components_App_sass_global_sass__WEBPACK_IMPORTED_MODULE_3__["dn"], false);
      if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["isMobile"])()) Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["toggleClass"])(_components_App_App_sass__WEBPACK_IMPORTED_MODULE_2__["finances"], _components_App_sass_global_sass__WEBPACK_IMPORTED_MODULE_3__["dn"], false);
      return !hiddenCharts;

    default:
      return hiddenCharts;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (toggleChartsReducer);

/***/ }),

/***/ "./selectors/finsSelectors.js":
/*!************************************!*\
  !*** ./selectors/finsSelectors.js ***!
  \************************************/
/*! exports provided: itemsByFinType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemsByFinType", function() { return itemsByFinType; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "../node_modules/reselect/es/index.js");

const itemsByFinType = ({
  finances
}, {
  type
}) => finances[type];

const makeGetActiveFins = () => Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(itemsByFinType, items => items.filter(item => !item.disable));

/* harmony default export */ __webpack_exports__["default"] = (makeGetActiveFins);

/***/ }),

/***/ "./selectors/opsSelectors.js":
/*!***********************************!*\
  !*** ./selectors/opsSelectors.js ***!
  \***********************************/
/*! exports provided: monthAmount, opsByFinId, makeSummGroupedByMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthAmount", function() { return monthAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opsByFinId", function() { return opsByFinId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSummGroupedByMonth", function() { return makeSummGroupedByMonth; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "../node_modules/reselect/es/index.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/constants */ "../common/constants/index.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _finsSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finsSelectors */ "./selectors/finsSelectors.js");





const {
  fixAccuracy
} = __webpack_require__(/*! ../../common/funcs */ "../common/funcs/index.js");

const opsFromState = state => state.operations;

const opsByFinId = ({
  operations: ops
}, {
  _id
}) => ops.filter(op => op.from_id === _id || op.to_id === _id);

const opsByMonth = ({
  operations: ops
}, {
  month = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["MMYY"])(new Date())
}) => ops.filter(op => Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["MMYY"])(op.date) === month);

const opsByIdByMonth = (state, props) => opsByMonth({
  operations: opsByFinId(state, props)
}, props);

const getType = (state, props) => props.type;

const mons = new Set();
const monthsHavingOps = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([opsFromState], ops => {
  ops.forEach(op => {
    mons.add(Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["MMYY"])(op.date));
  });
  return mons;
});
const periodOfOps = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([opsByMonth], ops => {
  ops.sort((a, b) => new Date(a.date) - new Date(b.date));
  const firstDay = new Date(ops[0].date).getDate();
  const lastDay = new Date(ops[ops.length - 1].date).getDate();
  return [firstDay, lastDay];
});
const opsByFinType = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([getType, opsFromState], (type, ops) => {
  switch (type) {
    case _common_constants__WEBPACK_IMPORTED_MODULE_1__["INCOMES"]:
      return ops.filter(op => op.from_type === type);

    case _common_constants__WEBPACK_IMPORTED_MODULE_1__["WALLETS"]:
      return ops.filter(op => op.to_type === type && op.from_type === type);

    case _common_constants__WEBPACK_IMPORTED_MODULE_1__["COSTS"]:
      return ops.filter(op => op.to_type === type);

    default:
      return ops;
  }
});
const makeSummGroupedByMonth = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([opsByFinType, _finsSelectors__WEBPACK_IMPORTED_MODULE_3__["itemsByFinType"], monthsHavingOps], (operations, items, months) => {
  const summGroupedByMonth = [];
  months.forEach(month => {
    const Nitems = [];
    items.forEach(item => {
      const monthSumm = monthAmount({
        operations
      }, {
        _id: item._id,
        month
      });
      const tags = tagsByItemId({
        operations
      }, {
        _id: item._id,
        month
      });

      if (monthSumm > 0) {
        Nitems.push({
          _id: item._id,
          name: item.name,
          amount: monthSumm,
          tags,
          bgcColor: item.color
        });
      }
    });

    if (Nitems.length) {
      summGroupedByMonth.push({
        month: new Date(month),
        items: Nitems.sort((a, b) => a.name.localeCompare(b.name)),
        period: periodOfOps({
          operations
        }, {
          month
        })
      });
    }
  });
  summGroupedByMonth.sort((a, b) => a.month - b.month);
  return summGroupedByMonth;
});
const monthAmount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([opsByIdByMonth], ops => fixAccuracy(ops.reduce((summ, op) => summ + op.amount, 0)));
const tagsByItemId = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([opsByIdByMonth], ops => {
  const tags = [];
  ops.forEach(op => {
    if (op.tag) {
      const index = tags.findIndex(tag => tag.tagName.toLowerCase() === op.tag.toLowerCase());

      if (index >= 0) {
        tags[index].amount += op.amount;
      } else {
        tags.push({
          tagName: op.tag,
          amount: op.amount
        });
      }
    }
  });
  return tags;
});


/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-api-middleware */ "../node_modules/redux-api-middleware/lib/index.umd.js");
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_api_middleware__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");




const state = {
  finances: {
    incomes: [],
    wallets: [],
    costs: []
  },
  loading: false,
  operations: [],
  dragEl: {},
  hiddenCharts: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["isMobile"])()
};
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], state, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_api_middleware__WEBPACK_IMPORTED_MODULE_1__["apiMiddleware"]));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./text/finances.js":
/*!**************************!*\
  !*** ./text/finances.js ***!
  \**************************/
/*! exports provided: INCOMES, WALLETS, COSTS, fin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCOMES", function() { return INCOMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WALLETS", function() { return WALLETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COSTS", function() { return COSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fin", function() { return fin; });
const {
  INCOMES,
  WALLETS,
  COSTS
} = __webpack_require__(/*! ../../common/constants */ "../common/constants/index.js");


const fin = {
  [INCOMES]: {
    title: "Источники дохода",
    addWindowTitle: "Новый источник дохода",
    editWindowTitle: "Редактирование источника дохода",
    amount: "Полученно в этом месяце:",
    plan: "Планирую получать в месяц:",
    round: "Нажать: просмотр операций \r\nПретащить: создание операции"
  },
  [WALLETS]: {
    title: "Счета/карты/кошельки",
    addWindowTitle: "Новый счет/карта/кошелек",
    editWindowTitle: "Редактирование счета",
    amount: "Текущая сумма:",
    plan: "Планирую откладывать в месяц:",
    round: "Нажать: просмотр операций \r\nПретащить: создание операции",
    notDraggable: "Создание операций из нулевого счета запрещено"
  },
  [COSTS]: {
    title: "Статьи расходов",
    addWindowTitle: "Новая статья расходов",
    editWindowTitle: "Редактирование статьи расходов",
    amount: "Потрачено в этом месяце:",
    plan: "Планирую тратить в месяц:",
    round: "Нажать: просмотр операций"
  }
};

/***/ }),

/***/ "./text/index.js":
/*!***********************!*\
  !*** ./text/index.js ***!
  \***********************/
/*! exports provided: INCOMES, WALLETS, COSTS, fin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _finances__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finances */ "./text/finances.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INCOMES", function() { return _finances__WEBPACK_IMPORTED_MODULE_0__["INCOMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WALLETS", function() { return _finances__WEBPACK_IMPORTED_MODULE_0__["WALLETS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COSTS", function() { return _finances__WEBPACK_IMPORTED_MODULE_0__["COSTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fin", function() { return _finances__WEBPACK_IMPORTED_MODULE_0__["fin"]; });



/***/ })

/******/ });
//# sourceMappingURL=index.51acf79fcbddf677745f.js.map