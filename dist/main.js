/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  font-family: \\\"Roboto Condensed\\\", sans-serif;\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #1b252f;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 2rem;\\r\\n  padding: 1rem;\\r\\n  box-shadow: 0 0 5px 0 black;\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\na {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.logo-nav {\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\nfieldset {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.check-input {\\r\\n  transition: transform 2s;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\ninput[type=\\\"radio\\\"]:checked + label {\\r\\n  width: 100%;\\r\\n  background-color: #00a8e1;\\r\\n  border: 2px solid orange;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n  padding: 1rem;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  padding: 0 1rem;\\r\\n}\\r\\n\\r\\n.comments li {\\r\\n  padding: 1rem 0;\\r\\n}\\r\\n\\r\\n.nav-links {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  gap: 2rem;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.nav-links li:hover {\\r\\n  text-decoration: underline;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.shows {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\\r\\n  grid-template-rows: auto;\\r\\n  justify-items: center;\\r\\n}\\r\\n\\r\\n.title-likes {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n}\\r\\n\\r\\narticle {\\r\\n  display: flex;\\r\\n  position: relative;\\r\\n  flex-direction: column;\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\narticle h3 {\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\narticle > img {\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n.like-box {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 0.3rem;\\r\\n}\\r\\n\\r\\n.like-box img {\\r\\n  filter: invert();\\r\\n  height: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\narticle a {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  border-top: 1px solid white;\\r\\n  border-bottom: 1px solid white;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  padding: 2rem;\\r\\n  bottom: 0;\\r\\n  box-shadow: 0 0 5px 0 black;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.popup-background {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  background-color: rgba(193, 199, 208, 0.8);\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  background-color: white;\\r\\n  border-radius: 16px;\\r\\n  padding: 16px;\\r\\n  margin: 20px auto;\\r\\n  box-sizing: border-box;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 500px;\\r\\n  max-height: 90vh;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.iconx-modal {\\r\\n  height: 30px;\\r\\n  width: 30px;\\r\\n  align-self: flex-end;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.show-image {\\r\\n  width: 250px;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  padding: 1rem 1rem;\\r\\n  columns: 2;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  padding: 0 1rem;\\r\\n}\\r\\n\\r\\n.comment-title {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding: 1rem;\\r\\n  gap: 0.5rem;\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.input-name,\\r\\n.input-insight {\\r\\n  padding: 0.3rem;\\r\\n}\\r\\n\\r\\n.input-name {\\r\\n  width: 200px;\\r\\n}\\r\\n\\r\\n.input-insight {\\r\\n  width: 300px;\\r\\n}\\r\\n\\r\\n.form button {\\r\\n  width: fit-content;\\r\\n  padding: 0.3rem;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  transition: transform 3s;\\r\\n}\\r\\n\\r\\n.like:active {\\r\\n  transform: scale(10);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_tvlogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/tvlogo.png */ \"./src/images/tvlogo.png\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_displayPeople_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/displayPeople.js */ \"./src/modules/displayPeople.js\");\n\r\n\r\n\r\n\r\n\r\nconst navLogoContainer = document.querySelector('.logo');\r\nconst imageLogo = document.createElement('img');\r\nconst showsNav = document.querySelector('.showsnav');\r\nconst peopleNav = document.querySelector('.peoplenav');\r\nconst form = document.querySelectorAll('input');\r\n\r\nimageLogo.classList.add('logo-nav');\r\nimageLogo.src = _images_tvlogo_png__WEBPACK_IMPORTED_MODULE_1__;\r\nnavLogoContainer.appendChild(imageLogo);\r\n\r\n(0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nshowsNav.addEventListener('click', _modules_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\r\npeopleNav.addEventListener('click', _modules_displayPeople_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n\r\nform.forEach((element) => {\r\n  element.addEventListener('click', () => {\r\n    const shows = document.querySelector('.shows');\r\n    shows.innerHTML = null;\r\n    (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addComment = async (id, username, comment) => {\n  await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wTuKRCdWCi0TS2pluTow/comments',\n    {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: id,\n        username,\n        comment,\n      }),\n    },\n  );\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/addComment.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getShows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getShows.js */ \"./src/modules/getShows.js\");\n/* harmony import */ var _images_thumbsup_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/thumbsup.svg */ \"./src/images/thumbsup.svg\");\n/* harmony import */ var _displayModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayModal.js */ \"./src/modules/displayModal.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _showNumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showNumber.js */ \"./src/modules/showNumber.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst displayScreen = async () => {\r\n  const showsArray = await (0,_getShows_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const likesAr = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.getNumberOfLikes)();\r\n  const list = document.querySelector('.shows');\r\n  list.innerHTML = '';\r\n  showsArray.forEach((show) => {\r\n    const showCard = document.createElement('article');\r\n    const img = document.createElement('img');\r\n    img.src = show.image.medium;\r\n    const titleAndLikes = document.createElement('div');\r\n    titleAndLikes.className = 'title-likes';\r\n    const name = document.createElement('h3');\r\n    name.textContent = show.name;\r\n    const likeBox = document.createElement('div');\r\n    likeBox.className = 'like-box';\r\n    const likeNum = document.createElement('span');\r\n    likeNum.textContent = likesAr.find((e) => e.item_id === show.id).likes;\r\n    const like = document.createElement('img');\r\n    like.src = _images_thumbsup_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n    like.classList.add('like');\r\n    const commentBox = document.createElement('a');\r\n    commentBox.innerHTML = 'Comments';\r\n    commentBox.addEventListener('click', () => {\r\n      (0,_displayModal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(show.id);\r\n    });\r\n    titleAndLikes.append(name, likeBox);\r\n    likeBox.append(likeNum, like);\r\n    showCard.append(img, titleAndLikes, commentBox);\r\n    list.append(showCard);\r\n\r\n    like.addEventListener('click', () => {\r\n      (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.addNewLike)(show.id);\r\n      let numberLikes = likeNum.textContent;\r\n      numberLikes = parseInt(numberLikes, 10);\r\n      numberLikes += 1;\r\n      likeNum.textContent = numberLikes;\r\n    });\r\n  });\r\n  const title = document.querySelector('.page-title');\r\n  title.innerHTML = 'Shows';\r\n  const numberHTML = document.querySelector('.shows-number');\r\n  const showsNum = (0,_showNumber_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  numberHTML.textContent = showsNum;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayScreen);\r\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/displayModal.js":
/*!*************************************!*\
  !*** ./src/modules/displayModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_closeicon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/closeicon.svg */ \"./src/images/closeicon.svg\");\n/* harmony import */ var _getSingleShow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSingleShow.js */ \"./src/modules/getSingleShow.js\");\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addComment.js */ \"./src/modules/addComment.js\");\n/* harmony import */ var _getNumberOfComments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNumberOfComments.js */ \"./src/modules/getNumberOfComments.js\");\n\n\n\n\n\n\nconst displayModal = async (id) => {\n  const modal = id;\n  const {\n    name, language, status, premiered, ended, rating, image, summary,\n  } = await (0,_getSingleShow_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(modal);\n\n  const body = document.querySelector('body');\n\n  const popupBackground = document.createElement('div');\n  popupBackground.className = 'popup-background';\n  body.appendChild(popupBackground);\n\n  const popup = document.createElement('div');\n  popup.className = 'popup';\n  popupBackground.appendChild(popup);\n\n  const iconxModal = document.createElement('img');\n  iconxModal.src = _images_closeicon_svg__WEBPACK_IMPORTED_MODULE_0__;\n  iconxModal.className = 'iconx-modal';\n  iconxModal.addEventListener('click', () => {\n    body.removeChild(popupBackground);\n  });\n  popup.appendChild(iconxModal);\n\n  const showImage = document.createElement('img');\n  showImage.src = image;\n  showImage.className = 'show-image';\n  popup.appendChild(showImage);\n\n  const modaltitle = document.createElement('h2');\n  modaltitle.innerText = name;\n  popup.appendChild(modaltitle);\n\n  const details = document.createElement('ul');\n  details.className = 'details';\n  const arr1 = [\n    '<b>Language: </b>',\n    '<b>Premiered: </b>',\n    '<b>Rating: </b>',\n    '<b>Status: </b>',\n    '<b>Ended: </b>',\n  ];\n  const arr2 = [language, premiered, rating, status, ended];\n  for (let i = 0; i < arr1.length; i += 1) {\n    const li = document.createElement('li');\n    li.innerHTML = arr1[i] + arr2[i];\n    details.appendChild(li);\n  }\n  popup.appendChild(details);\n\n  const description = document.createElement('div');\n  description.innerHTML = summary;\n  description.className = 'description';\n  popup.appendChild(description);\n\n  const comments = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\n\n  const divTitle = document.createElement('div');\n  divTitle.className = 'comment-title';\n  popup.append(divTitle);\n\n  const commentsTitle = document.createElement('h3');\n  commentsTitle.innerHTML = 'Comments';\n  divTitle.appendChild(commentsTitle);\n\n  const commentNumber = document.createElement('h3');\n  divTitle.appendChild(commentNumber);\n\n  const commentsList = document.createElement('ul');\n  commentsList.className = 'comments';\n\n  for (let i = 0; i < comments.length; i += 1) {\n    const li = document.createElement('li');\n    li.innerText = `${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}`;\n    commentsList.appendChild(li);\n  }\n\n  popup.appendChild(commentsList);\n\n  let number = (0,_getNumberOfComments_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  commentNumber.innerHTML = `(${number})`;\n\n  if (number === 0) {\n    const paragraph = document.createElement('p');\n    paragraph.innerText = 'No comments yet.';\n    paragraph.className = 'no-comments';\n    commentsList.appendChild(paragraph);\n  }\n\n  const form = document.createElement('div');\n  form.className = 'form';\n  popup.append(form);\n\n  const addCommentTitle = document.createElement('h3');\n  addCommentTitle.innerHTML = 'Add a comment';\n  form.appendChild(addCommentTitle);\n\n  const inputName = document.createElement('input');\n  inputName.className = 'input-name';\n  inputName.placeholder = 'Your name';\n  form.appendChild(inputName);\n\n  const inputInsight = document.createElement('textarea');\n  inputInsight.className = 'input-insight';\n  inputInsight.rows = '5';\n  inputInsight.placeholder = 'Your insights';\n  form.appendChild(inputInsight);\n\n  const button = document.createElement('button');\n  button.innerHTML = 'Submit';\n  button.addEventListener('click', () => {\n    (0,_addComment_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(id, inputName.value, inputInsight.value);\n\n    const paragraph = document.querySelector('.no-comments');\n    if (paragraph !== null) {\n      paragraph.remove();\n    }\n\n    const date = new Date();\n    const formatDate = `${date.getFullYear()}-${(\n      date.getMonth() + 1\n    ).toLocaleString('en-US', { minimumIntegerDigits: 2 })}-${date\n      .getDate()\n      .toLocaleString('en-US', { minimumIntegerDigits: 2 })}`;\n\n    const li = document.createElement('li');\n    li.innerText = `${formatDate} ${inputName.value}: ${inputInsight.value}`;\n    commentsList.appendChild(li);\n    inputName.value = '';\n    inputInsight.value = '';\n    number += 1;\n    commentNumber.innerHTML = `(${number})`;\n  });\n  form.appendChild(button);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayModal);\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/displayModal.js?");

/***/ }),

/***/ "./src/modules/displayPeople.js":
/*!**************************************!*\
  !*** ./src/modules/displayPeople.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getPeople_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPeople.js */ \"./src/modules/getPeople.js\");\n/* harmony import */ var _likesPeople_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likesPeople.js */ \"./src/modules/likesPeople.js\");\n/* harmony import */ var _images_thumbsup_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/thumbsup.svg */ \"./src/images/thumbsup.svg\");\n/* harmony import */ var _showNumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showNumber.js */ \"./src/modules/showNumber.js\");\n/* harmony import */ var _images_empty_profile_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/empty-profile.jpg */ \"./src/images/empty-profile.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst displayPeople = async () => {\r\n  const peopleArray = await (0,_getPeople_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const likesArPeople = await (0,_likesPeople_js__WEBPACK_IMPORTED_MODULE_1__.getNumberOfLikesPeople)();\r\n  const list = document.querySelector('.shows');\r\n  list.innerHTML = '';\r\n  peopleArray.forEach((person) => {\r\n    const personCard = document.createElement('article');\r\n    const img = document.createElement('img');\r\n    img.src = person.image?.medium ?? _images_empty_profile_jpg__WEBPACK_IMPORTED_MODULE_4__;\r\n    const titleAndLikes = document.createElement('div');\r\n    titleAndLikes.className = 'title-likes';\r\n    const name = document.createElement('h3');\r\n    name.textContent = person.name;\r\n    const likeBox = document.createElement('div');\r\n    likeBox.className = 'like-box';\r\n    const likeNum = document.createElement('span');\r\n    likeNum.textContent = likesArPeople.find((e) => e.item_id === person.id)?.likes ?? 0;\r\n    const like = document.createElement('img');\r\n    like.src = _images_thumbsup_svg__WEBPACK_IMPORTED_MODULE_2__;\r\n    // const commentBox = document.createElement('a');\r\n    // commentBox.innerHTML = 'Comments';\r\n    // commentBox.addEventListener('click', () => {\r\n    //   displayModal(person.id);\r\n    // });\r\n    titleAndLikes.append(name, likeBox);\r\n    likeBox.append(likeNum, like);\r\n    personCard.append(img, titleAndLikes);\r\n    list.append(personCard);\r\n\r\n    like.addEventListener('click', () => {\r\n      (0,_likesPeople_js__WEBPACK_IMPORTED_MODULE_1__.addNewLikePeople)(person.id);\r\n      let numberLikes = likeNum.textContent;\r\n      numberLikes = parseInt(numberLikes, 10);\r\n      numberLikes += 1;\r\n      likeNum.textContent = numberLikes;\r\n    });\r\n  });\r\n  const title = document.querySelector('.page-title');\r\n  const title1 = document.querySelector('.genre');\r\n  title1.textContent = '';\r\n  title.innerHTML = 'People';\r\n  const numberHTML = document.querySelector('.shows-number');\r\n  const showsNum = (0,_showNumber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  numberHTML.textContent = showsNum;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPeople);\r\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/displayPeople.js?");

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (id) => {\n  const response = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wTuKRCdWCi0TS2pluTow/comments?item_id=${id}`,\n  );\n  const jsonResponse = await response.json();\n  return jsonResponse;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/getComments.js?");

/***/ }),

/***/ "./src/modules/getNumberOfComments.js":
/*!********************************************!*\
  !*** ./src/modules/getNumberOfComments.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getNumberOfComments = () => {\n  const lis = document.querySelectorAll('.comments li');\n  return lis.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNumberOfComments);\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/getNumberOfComments.js?");

/***/ }),

/***/ "./src/modules/getPeople.js":
/*!**********************************!*\
  !*** ./src/modules/getPeople.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getPeople = async () => {\r\n  const response = await fetch('https://api.tvmaze.com/people');\r\n  const jsonResponse = await response.json();\r\n  return jsonResponse.slice(0, 40);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPeople);\r\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/getPeople.js?");

/***/ }),

/***/ "./src/modules/getShows.js":
/*!*********************************!*\
  !*** ./src/modules/getShows.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getShows = async () => {\r\n  const response = await fetch('https://api.tvmaze.com/shows');\r\n  const JsonResponse = await response.json();\r\n  const genreTitle = document.querySelector('.genre');\r\n  const inputAll = document.getElementById('all');\r\n  const inputBest = document.getElementById('best');\r\n  const inputDrama = document.getElementById('drama');\r\n  const inputAction = document.getElementById('action');\r\n  const inputAdventure = document.getElementById('adventure');\r\n  const inputFantasy = document.getElementById('fantasy');\r\n  const inputComedy = document.getElementById('comedy');\r\n  const inputMystery = document.getElementById('mystery');\r\n  const inputHorror = document.getElementById('horror');\r\n  const inputRomance = document.getElementById('romance');\r\n  const inputCrime = document.getElementById('crime');\r\n  const inputThriller = document.getElementById('thriller');\r\n  const inputSiFy = document.getElementById('science-fiction');\r\n\r\n  if (inputBest.checked) {\r\n    genreTitle.textContent = 'Best Rated';\r\n    const mostRatedShows = JsonResponse.filter(\r\n      (show) => show.rating.average > 8.3,\r\n    );\r\n    return mostRatedShows;\r\n  } if (inputDrama.checked) {\r\n    genreTitle.textContent = 'Drama';\r\n    const dramaShows = [];\r\n    JsonResponse.forEach((element) => {\r\n      if (element.genres.includes('Drama')) {\r\n        dramaShows.push(element);\r\n      }\r\n    });\r\n    return dramaShows;\r\n  } if (inputAction.checked) {\r\n    const actionShows = [];\r\n    genreTitle.textContent = 'Action';\r\n    JsonResponse.forEach((element) => {\r\n      if (element.genres.includes('Action')) {\r\n        actionShows.push(element);\r\n      }\r\n    });\r\n    return actionShows;\r\n  } if (inputAdventure.checked) {\r\n    const adventureShows = [];\r\n    genreTitle.textContent = 'Adventure';\r\n    JsonResponse.forEach((element) => {\r\n      if (element.genres.includes('Adventure')) {\r\n        adventureShows.push(element);\r\n      }\r\n    });\r\n    return adventureShows;\r\n  } if (inputFantasy.checked) {\r\n    genreTitle.textContent = 'Fantasy';\r\n    const fantasyShows = [];\r\n    JsonResponse.forEach((element) => {\r\n      if (element.genres.includes('Fantasy')) {\r\n        fantasyShows.push(element);\r\n      }\r\n    });\r\n    return fantasyShows;\r\n  } if (inputComedy.checked) {\r\n    const comedyShows = [];\r\n    genreTitle.textContent = 'Comedy';\r\n    JsonResponse.forEach((element) => {\r\n      if (element.genres.includes('Comedy')) {\r\n        comedyShows.push(element);\r\n      }\r\n    });\r\n    return comedyShows;\r\n  } if (inputRomance.checked) {\r\n    const romanceShows = [];\r\n    genreTitle.textContent = 'Romance';\r\n    JsonResponse.forEach((element) => {\r\n      if (element.genres.includes('Romance')) {\r\n        romanceShows.push(element);\r\n      }\r\n    });\r\n    return romanceShows;\r\n  } if (inputMystery.checked) {\r\n    const mysteryShows = [];\r\n    genreTitle.textContent = 'Mystery';\r\n    JsonResponse.forEach((element) => {\r\n      if (element.genres.includes('Mystery')) {\r\n        mysteryShows.push(element);\r\n      }\r\n    });\r\n    return mysteryShows;\r\n  } if (inputHorror.checked) {\r\n    const horrorShows = [];\r\n    genreTitle.textContent = 'Horror';\r\n    JsonResponse.forEach((element) => {\r\n      if (element.genres.includes('Horror')) {\r\n        horrorShows.push(element);\r\n      }\r\n    });\r\n    return horrorShows;\r\n  } if (inputCrime.checked) {\r\n    genreTitle.textContent = 'Crime';\r\n    const crimeShows = [];\r\n    JsonResponse.forEach((element) => {\r\n      if (element.genres.includes('Crime')) {\r\n        crimeShows.push(element);\r\n      }\r\n    });\r\n    return crimeShows;\r\n  } if (inputThriller.checked) {\r\n    genreTitle.textContent = 'Thriller';\r\n    const thrillerShows = [];\r\n    JsonResponse.forEach((element) => {\r\n      if (element.genres.includes('Thriller')) {\r\n        thrillerShows.push(element);\r\n      }\r\n    });\r\n    return thrillerShows;\r\n  } if (inputSiFy.checked) {\r\n    const siFyShows = [];\r\n    genreTitle.textContent = 'Science-Fiction';\r\n    JsonResponse.forEach((element) => {\r\n      if (element.genres.includes('Science-Fiction')) {\r\n        siFyShows.push(element);\r\n      }\r\n    });\r\n    return siFyShows;\r\n  } if (inputAll.checked) {\r\n    genreTitle.textContent = 'All';\r\n    return JsonResponse;\r\n  } return JsonResponse;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShows);\r\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/getShows.js?");

/***/ }),

/***/ "./src/modules/getSingleShow.js":
/*!**************************************!*\
  !*** ./src/modules/getSingleShow.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getSingleShow = async (Id) => {\n  const response = await fetch(`https://api.tvmaze.com/shows/${Id}`);\n  const jsonResponse = await response.json();\n  return {\n    name: jsonResponse.name,\n    language: jsonResponse.language,\n    status: jsonResponse.status,\n    premiered: jsonResponse.premiered,\n    ended: jsonResponse.ended,\n    rating: jsonResponse.rating.average,\n    image: jsonResponse.image.medium,\n    summary: jsonResponse.summary,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSingleShow);\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/getSingleShow.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewLike\": () => (/* binding */ addNewLike),\n/* harmony export */   \"getNumberOfLikes\": () => (/* binding */ getNumberOfLikes)\n/* harmony export */ });\nconst likesPath = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wTuKRCdWCi0TS2pluTow/likes';\r\n\r\nconst getNumberOfLikes = async () => {\r\n  const response = await fetch(likesPath);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst addNewLike = async (id) => {\r\n  await fetch(likesPath, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n    }),\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/likesPeople.js":
/*!************************************!*\
  !*** ./src/modules/likesPeople.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewLikePeople\": () => (/* binding */ addNewLikePeople),\n/* harmony export */   \"getNumberOfLikesPeople\": () => (/* binding */ getNumberOfLikesPeople)\n/* harmony export */ });\nconst likesPath = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fiOKr3U1AEZOjJWCu9Sh/likes';\r\n\r\nconst getNumberOfLikesPeople = async () => {\r\n  const response = await fetch(likesPath);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst addNewLikePeople = async (id) => {\r\n  await fetch(likesPath, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n    }),\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/likesPeople.js?");

/***/ }),

/***/ "./src/modules/showNumber.js":
/*!***********************************!*\
  !*** ./src/modules/showNumber.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showNumbers = () => {\n  const showsNum = document.querySelectorAll('article');\n  return showsNum.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showNumbers);\n\n//# sourceURL=webpack://capstone-project/./src/modules/showNumber.js?");

/***/ }),

/***/ "./src/images/closeicon.svg":
/*!**********************************!*\
  !*** ./src/images/closeicon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"closeicon.svg\";\n\n//# sourceURL=webpack://capstone-project/./src/images/closeicon.svg?");

/***/ }),

/***/ "./src/images/empty-profile.jpg":
/*!**************************************!*\
  !*** ./src/images/empty-profile.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"empty-profile.jpg\";\n\n//# sourceURL=webpack://capstone-project/./src/images/empty-profile.jpg?");

/***/ }),

/***/ "./src/images/thumbsup.svg":
/*!*********************************!*\
  !*** ./src/images/thumbsup.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"thumbsup.svg\";\n\n//# sourceURL=webpack://capstone-project/./src/images/thumbsup.svg?");

/***/ }),

/***/ "./src/images/tvlogo.png":
/*!*******************************!*\
  !*** ./src/images/tvlogo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"tvlogo.png\";\n\n//# sourceURL=webpack://capstone-project/./src/images/tvlogo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;