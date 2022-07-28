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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  font-family: \\\"Roboto Condensed\\\", sans-serif;\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n  list-style: none;\\n}\\n\\nbody {\\n  background-color: #1b252f;\\n  color: white;\\n}\\n\\nnav {\\n  display: flex;\\n  align-items: center;\\n  gap: 2rem;\\n  padding: 1rem;\\n  box-shadow: 0 0 5px 0 black;\\n  margin-bottom: 2rem;\\n}\\n\\na {\\n  cursor: pointer;\\n}\\n\\n.logo {\\n  display: flex;\\n}\\n\\n.logo-nav {\\n  height: 50px;\\n}\\n\\nfieldset {\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n.check-input {\\n  transition: transform 2s;\\n  cursor: pointer;\\n}\\n\\ninput[type=\\\"radio\\\"]:checked + label {\\n  width: 100%;\\n  background-color: #00a8e1;\\n  border: 2px solid orange;\\n}\\n\\n.title {\\n  display: flex;\\n  align-items: center;\\n  gap: 1rem;\\n  padding: 1rem;\\n  justify-content: center;\\n}\\n\\n.comments {\\n  padding: 0 1rem;\\n}\\n\\n.comments li {\\n  padding: 1rem 0;\\n}\\n\\n.nav-links {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  gap: 2rem;\\n  font-size: 1.5rem;\\n}\\n\\n.nav-links li:hover {\\n  text-decoration: underline;\\n  cursor: pointer;\\n}\\n\\n.shows {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\\n  grid-template-rows: auto;\\n  justify-items: center;\\n}\\n\\n.title-likes {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\narticle {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\narticle > img {\\n  margin-bottom: 0.5rem;\\n}\\n\\n.like-box {\\n  display: flex;\\n  align-items: center;\\n  gap: 0.3rem;\\n}\\n\\n.like-box img {\\n  filter: invert();\\n  height: 20px;\\n  cursor: pointer;\\n}\\n\\narticle a {\\n  width: 100%;\\n  text-align: center;\\n  border-top: 1px solid white;\\n  border-bottom: 1px solid white;\\n  margin-bottom: 2rem;\\n}\\n\\nfooter {\\n  padding: 2rem;\\n  bottom: 0;\\n  box-shadow: 0 0 5px 0 black;\\n  width: 100%;\\n}\\n\\n.popup-background {\\n  position: fixed;\\n  top: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  background-color: rgba(193, 199, 208, 0.8);\\n  color: black;\\n}\\n\\n.popup {\\n  background-color: white;\\n  border-radius: 16px;\\n  padding: 16px;\\n  margin: 20px auto;\\n  box-sizing: border-box;\\n  display: flex;\\n  flex-direction: column;\\n  width: 500px;\\n  max-height: 90vh;\\n  overflow-y: auto;\\n}\\n\\n.iconx-modal {\\n  height: 30px;\\n  width: 30px;\\n  align-self: flex-end;\\n  cursor: pointer;\\n}\\n\\n.show-image {\\n  width: 250px;\\n  align-self: center;\\n}\\n\\nh2 {\\n  padding: 1rem;\\n}\\n\\n.details {\\n  padding: 1rem 1rem;\\n  columns: 2;\\n}\\n\\n.description {\\n  padding: 0 1rem;\\n}\\n\\n.comment-title {\\n  display: flex;\\n  justify-content: center;\\n  padding: 1rem;\\n  gap: 0.5rem;\\n  margin-top: 1rem;\\n}\\n\\nh3 {\\n  align-self: center;\\n}\\n\\n.form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n  padding: 1rem;\\n}\\n\\n.input-name,\\n.input-insight {\\n  padding: 0.3rem;\\n}\\n\\n.input-name {\\n  width: 200px;\\n}\\n\\n.input-insight {\\n  width: 300px;\\n}\\n\\n.form button {\\n  width: fit-content;\\n  padding: 0.3rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_tvlogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/tvlogo.png */ \"./src/images/tvlogo.png\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n\n\n\n\nconst navLogoContainer = document.querySelector('.logo');\nconst imageLogo = document.createElement('img');\nimageLogo.classList.add('logo-nav');\nimageLogo.src = _images_tvlogo_png__WEBPACK_IMPORTED_MODULE_1__;\nnavLogoContainer.appendChild(imageLogo);\n\n(0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nconst form = document.querySelectorAll('input');\n\nform.forEach((element) => {\n  element.addEventListener('click', () => {\n    const shows = document.querySelector('.shows');\n    shows.innerHTML = null;\n    (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n});\n\n\n//# sourceURL=webpack://capstone-project/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getShows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getShows.js */ \"./src/modules/getShows.js\");\n/* harmony import */ var _images_thumbsup_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/thumbsup.svg */ \"./src/images/thumbsup.svg\");\n/* harmony import */ var _displayModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayModal.js */ \"./src/modules/displayModal.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _showNumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showNumber.js */ \"./src/modules/showNumber.js\");\n\n\n\n\n\n\nconst displayScreen = async () => {\n  const showsArray = await (0,_getShows_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const likesAr = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.getNumberOfLikes)();\n  const list = document.querySelector('.shows');\n  showsArray.forEach((show) => {\n    const showCard = document.createElement('article');\n    const img = document.createElement('img');\n    img.src = show.image.medium;\n    const titleAndLikes = document.createElement('div');\n    titleAndLikes.className = 'title-likes';\n    const name = document.createElement('h3');\n    name.textContent = show.name;\n    const likeBox = document.createElement('div');\n    likeBox.className = 'like-box';\n    const likeNum = document.createElement('span');\n    likeNum.textContent = likesAr.find((e) => e.item_id === show.id).likes;\n    const like = document.createElement('img');\n    like.src = _images_thumbsup_svg__WEBPACK_IMPORTED_MODULE_1__;\n    const commentBox = document.createElement('a');\n    commentBox.innerHTML = 'Comments';\n    commentBox.addEventListener('click', () => {\n      (0,_displayModal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(show.id);\n    });\n    titleAndLikes.append(name, likeBox);\n    likeBox.append(likeNum, like);\n    showCard.append(img, titleAndLikes, commentBox);\n    list.append(showCard);\n\n    like.addEventListener('click', () => {\n      (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.addNewLike)(show.id);\n      let numberLikes = likeNum.textContent;\n      numberLikes = parseInt(numberLikes, 10);\n      numberLikes += 1;\n      likeNum.textContent = numberLikes;\n    });\n  });\n  const numberHTML = document.querySelector('.shows-number');\n  const showsNum = (0,_showNumber_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  numberHTML.textContent = showsNum;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayScreen);\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/displayModal.js":
/*!*************************************!*\
  !*** ./src/modules/displayModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_closeicon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/closeicon.svg */ \"./src/images/closeicon.svg\");\n/* harmony import */ var _getSingleShow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSingleShow.js */ \"./src/modules/getSingleShow.js\");\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/getComments.js\");\n/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addComment.js */ \"./src/modules/addComment.js\");\n/* harmony import */ var _getNumberOfComments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNumberOfComments.js */ \"./src/modules/getNumberOfComments.js\");\n\n\n\n\n\n\nconst displayModal = async (id) => {\n  const modal = id;\n  const {\n    name, language, status, premiered, ended, rating, image, summary,\n  } = await (0,_getSingleShow_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(modal);\n\n  const body = document.querySelector('body');\n\n  const popupBackground = document.createElement('div');\n  popupBackground.className = 'popup-background';\n  body.appendChild(popupBackground);\n\n  const popup = document.createElement('div');\n  popup.className = 'popup';\n  popupBackground.appendChild(popup);\n\n  const iconxModal = document.createElement('img');\n  iconxModal.src = _images_closeicon_svg__WEBPACK_IMPORTED_MODULE_0__;\n  iconxModal.className = 'iconx-modal';\n  iconxModal.addEventListener('click', () => {\n    body.removeChild(popupBackground);\n  });\n  popup.appendChild(iconxModal);\n\n  const showImage = document.createElement('img');\n  showImage.src = image;\n  showImage.className = 'show-image';\n  popup.appendChild(showImage);\n\n  const modaltitle = document.createElement('h2');\n  modaltitle.innerText = name;\n  popup.appendChild(modaltitle);\n\n  const details = document.createElement('ul');\n  details.className = 'details';\n  const arr1 = [\n    '<b>Language: </b>',\n    '<b>Premiered: </b>',\n    '<b>Rating: </b>',\n    '<b>Status: </b>',\n    '<b>Ended: </b>',\n  ];\n  const arr2 = [language, premiered, rating, status, ended];\n  for (let i = 0; i < arr1.length; i += 1) {\n    const li = document.createElement('li');\n    li.innerHTML = arr1[i] + arr2[i];\n    details.appendChild(li);\n  }\n  popup.appendChild(details);\n\n  const description = document.createElement('div');\n  description.innerHTML = summary;\n  description.className = 'description';\n  popup.appendChild(description);\n\n  const comments = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\n\n  const divTitle = document.createElement('div');\n  divTitle.className = 'comment-title';\n  popup.append(divTitle);\n\n  const commentsTitle = document.createElement('h3');\n  commentsTitle.innerHTML = 'Comments';\n  divTitle.appendChild(commentsTitle);\n\n  const commentNumber = document.createElement('h3');\n  divTitle.appendChild(commentNumber);\n\n  const commentsList = document.createElement('ul');\n  commentsList.className = 'comments';\n\n  for (let i = 0; i < comments.length; i += 1) {\n    const li = document.createElement('li');\n    li.innerText = `${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}`;\n    commentsList.appendChild(li);\n  }\n\n  popup.appendChild(commentsList);\n\n  let number = (0,_getNumberOfComments_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  commentNumber.innerHTML = `(${number})`;\n\n  const form = document.createElement('div');\n  form.className = 'form';\n  popup.append(form);\n\n  const addCommentTitle = document.createElement('h3');\n  addCommentTitle.innerHTML = 'Add a comment';\n  form.appendChild(addCommentTitle);\n\n  const inputName = document.createElement('input');\n  inputName.className = 'input-name';\n  inputName.placeholder = 'Your name';\n  form.appendChild(inputName);\n\n  const inputInsight = document.createElement('textarea');\n  inputInsight.className = 'input-insight';\n  inputInsight.rows = '5';\n  inputInsight.placeholder = 'Your insights';\n  form.appendChild(inputInsight);\n\n  const button = document.createElement('button');\n  button.innerHTML = 'Submit';\n  button.addEventListener('click', () => {\n    (0,_addComment_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(id, inputName.value, inputInsight.value);\n    const date = new Date();\n    const formatDate = `${date.getFullYear()}-${(\n      date.getMonth() + 1\n    ).toLocaleString('en-US', { minimumIntegerDigits: 2 })}-${date\n      .getDate()\n      .toLocaleString('en-US', { minimumIntegerDigits: 2 })}`;\n    const li = document.createElement('li');\n    li.innerText = `${formatDate} ${inputName.value}: ${inputInsight.value}`;\n    commentsList.appendChild(li);\n    inputName.value = '';\n    inputInsight.value = '';\n    number += 1;\n    commentNumber.innerHTML = `(${number})`;\n  });\n  form.appendChild(button);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayModal);\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/displayModal.js?");

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

/***/ "./src/modules/getShows.js":
/*!*********************************!*\
  !*** ./src/modules/getShows.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getShows = async () => {\n  const response = await fetch('https://api.tvmaze.com/shows');\n  const JsonResponse = await response.json();\n  const genreTitle = document.querySelector('.genre');\n  const inputAll = document.getElementById('all');\n  const inputBest = document.getElementById('best');\n  const inputDrama = document.getElementById('drama');\n  const inputAction = document.getElementById('action');\n  const inputAdventure = document.getElementById('adventure');\n  const inputFantasy = document.getElementById('fantasy');\n  const inputComedy = document.getElementById('comedy');\n  const inputMystery = document.getElementById('mystery');\n  const inputHorror = document.getElementById('horror');\n  const inputRomance = document.getElementById('romance');\n  const inputCrime = document.getElementById('crime');\n  const inputThriller = document.getElementById('thriller');\n  const inputSiFy = document.getElementById('science-fiction');\n\n  if (inputBest.checked) {\n    genreTitle.textContent = 'Best Rated';\n    const mostRatedShows = JsonResponse.filter(\n      (show) => show.rating.average > 8.3,\n    );\n    return mostRatedShows;\n  } if (inputDrama.checked) {\n    genreTitle.textContent = 'Drama';\n    const dramaShows = [];\n    JsonResponse.forEach((element) => {\n      if (element.genres.includes('Drama')) {\n        dramaShows.push(element);\n      }\n    });\n    return dramaShows;\n  } if (inputAction.checked) {\n    const actionShows = [];\n    genreTitle.textContent = 'Action';\n    JsonResponse.forEach((element) => {\n      if (element.genres.includes('Action')) {\n        actionShows.push(element);\n      }\n    });\n    return actionShows;\n  } if (inputAdventure.checked) {\n    const adventureShows = [];\n    genreTitle.textContent = 'Adventure';\n    JsonResponse.forEach((element) => {\n      if (element.genres.includes('Adventure')) {\n        adventureShows.push(element);\n      }\n    });\n    return adventureShows;\n  } if (inputFantasy.checked) {\n    genreTitle.textContent = 'Fantasy';\n    const fantasyShows = [];\n    JsonResponse.forEach((element) => {\n      if (element.genres.includes('Fantasy')) {\n        fantasyShows.push(element);\n      }\n    });\n    return fantasyShows;\n  } if (inputComedy.checked) {\n    const comedyShows = [];\n    genreTitle.textContent = 'Comedy';\n    JsonResponse.forEach((element) => {\n      if (element.genres.includes('Comedy')) {\n        comedyShows.push(element);\n      }\n    });\n    return comedyShows;\n  } if (inputRomance.checked) {\n    const romanceShows = [];\n    genreTitle.textContent = 'Romance';\n    JsonResponse.forEach((element) => {\n      if (element.genres.includes('Romance')) {\n        romanceShows.push(element);\n      }\n    });\n    return romanceShows;\n  } if (inputMystery.checked) {\n    const mysteryShows = [];\n    genreTitle.textContent = 'Mystery';\n    JsonResponse.forEach((element) => {\n      if (element.genres.includes('Mystery')) {\n        mysteryShows.push(element);\n      }\n    });\n    return mysteryShows;\n  } if (inputHorror.checked) {\n    const horrorShows = [];\n    genreTitle.textContent = 'Horror';\n    JsonResponse.forEach((element) => {\n      if (element.genres.includes('Horror')) {\n        horrorShows.push(element);\n      }\n    });\n    return horrorShows;\n  } if (inputCrime.checked) {\n    genreTitle.textContent = 'Crime';\n    const crimeShows = [];\n    JsonResponse.forEach((element) => {\n      if (element.genres.includes('Crime')) {\n        crimeShows.push(element);\n      }\n    });\n    return crimeShows;\n  } if (inputThriller.checked) {\n    genreTitle.textContent = 'Thriller';\n    const thrillerShows = [];\n    JsonResponse.forEach((element) => {\n      if (element.genres.includes('Thriller')) {\n        thrillerShows.push(element);\n      }\n    });\n    return thrillerShows;\n  } if (inputSiFy.checked) {\n    const siFyShows = [];\n    genreTitle.textContent = 'Science-Fiction';\n    JsonResponse.forEach((element) => {\n      if (element.genres.includes('Science-Fiction')) {\n        siFyShows.push(element);\n      }\n    });\n    return siFyShows;\n  } if (inputAll.checked) {\n    genreTitle.textContent = 'All';\n    return JsonResponse;\n  } return JsonResponse;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShows);\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/getShows.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewLike\": () => (/* binding */ addNewLike),\n/* harmony export */   \"getNumberOfLikes\": () => (/* binding */ getNumberOfLikes)\n/* harmony export */ });\nconst likesPath = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wTuKRCdWCi0TS2pluTow/likes';\n\nconst getNumberOfLikes = async () => {\n  const response = await fetch(likesPath);\n  const data = await response.json();\n  return data;\n};\n\nconst addNewLike = async (id) => {\n  await fetch(likesPath,\n    {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: id,\n      }),\n    });\n};\n\n\n\n\n//# sourceURL=webpack://capstone-project/./src/modules/likes.js?");

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