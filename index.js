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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Arial', sans-serif;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    background-color: #f5f5f5;\n    padding: 25px;\n    background-color: white;\n    color: #000;\n    font-size: 25px;\n    --color-1: #ff9500;\n    --color-2: #ffa500;\n    --color-3: #181818;\n    --color-4: #7d7d7d;\n    --color-5: #999;\n    --color-6: #888;\n    --color-7: #666;\n    --color-8: #444;\n    --color-9: #333;\n    --color-10: #222;\n    --color-11: #fff\n}\n\n.calculator {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--color-9);\n    border-radius: 10px;\n    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);\n    overflow: hidden;\n}\n\n.display {\n    background-color: var(--color-8);\n    color: var(--color-11);\n    font-size: 44px;\n    text-align: right;\n    padding: 20px 20px 0;\n    max-width: 296px;\n    min-height: 71px;\n}\n\n.display--small {\n    font-size: 22px;\n}\n\n.subDisplay {\n    display: flex;\n    justify-content: flex-end;\n    background-color: var(--color-8);\n    min-height: 30px;\n    color: var(--color-11);\n    padding-right: 20px;\n}\n\n.buttons {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 1px;\n    background-color: var(--color-10);\n}\n\nbutton,\n.button-theme {\n    background-color: var(--color-7);\n    color: var(--color-11);\n    border: none;\n    padding: 20px;\n    font-size: 24px;\n    cursor: pointer;\n}\n\n.button-theme {\n    font-size: 16px;\n    background-color: var(--color-6);\n    max-width: 300px;\n}\n\n.button-theme:active {\n    background-color: var(--color-4);\n}\n\nbutton:active {\n    background-color: var(--color-5);\n}\n\nbutton.function {\n    background-color: var(--color-1);\n    color: var(--color-11);\n}\n\nbutton.function:active {\n    background-color: var(--color-2);\n}\n\nbutton.double {\n    grid-column: span 2;\n}\n\nbutton.operation {\n    background-color: var(--color-1);\n}\n\nbutton.operation:active {\n    background-color: var(--color-2);\n}\n\n.dark-theme {\n    background-color: var(--color-3);\n    color: #fff;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calculator-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://calculator-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calculator-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\n;\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calculator-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calculator-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calculator-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calculator-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calculator-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js":
/*!************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join(\"\\n\");\n  };\n}();\n\n/* istanbul ignore next  */\nfunction apply(styleElement, index, remove, obj) {\n  var css;\n  if (remove) {\n    css = \"\";\n  } else {\n    css = \"\";\n    if (obj.supports) {\n      css += \"@supports (\".concat(obj.supports, \") {\");\n    }\n    if (obj.media) {\n      css += \"@media \".concat(obj.media, \" {\");\n    }\n    var needLayer = typeof obj.layer !== \"undefined\";\n    if (needLayer) {\n      css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n    }\n    css += obj.css;\n    if (needLayer) {\n      css += \"}\";\n    }\n    if (obj.media) {\n      css += \"}\";\n    }\n    if (obj.supports) {\n      css += \"}\";\n    }\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = styleElement.childNodes;\n    if (childNodes[index]) {\n      styleElement.removeChild(childNodes[index]);\n    }\n    if (childNodes.length) {\n      styleElement.insertBefore(cssNode, childNodes[index]);\n    } else {\n      styleElement.appendChild(cssNode);\n    }\n  }\n}\nvar singletonData = {\n  singleton: null,\n  singletonCounter: 0\n};\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") return {\n    update: function update() {},\n    remove: function remove() {}\n  };\n\n  // eslint-disable-next-line no-undef,no-use-before-define\n  var styleIndex = singletonData.singletonCounter++;\n  var styleElement =\n  // eslint-disable-next-line no-undef,no-use-before-define\n  singletonData.singleton || (\n  // eslint-disable-next-line no-undef,no-use-before-define\n  singletonData.singleton = options.insertStyleElement(options));\n  return {\n    update: function update(obj) {\n      apply(styleElement, styleIndex, false, obj);\n    },\n    remove: function remove(obj) {\n      apply(styleElement, styleIndex, true, obj);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calculator-app/./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ \"./src/theme.js\");\n\n\n\nconst display = document.querySelector('.display');\nconst buttons = document.querySelector('.buttons');\nconst subDisplay = document.querySelector('.subDisplay');\n\nlet firstValue = '';\nlet operator = '';\nlet secondValue = '';\nlet result = '';\nlet awaitingSecondValue = false;\n\nbuttons.addEventListener('click', (event) => {\n    const button = event.target;\n    const action = button.dataset.action;\n    const buttonContent = button.textContent;\n\n    if (button.tagName !== 'BUTTON') {\n        return;\n    }\n\n    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {\n        handleOperator(action);\n    }\n\n    if (action === 'calculate') {\n        calculateResult();\n    }\n\n    if (action === 'clear') {\n        clearAll();\n    }\n\n    if (action === 'invert') {\n        invertNumber();\n    }\n\n    if (action === 'percent') {\n        applyPercent();\n    }\n\n    if (!action) {\n        handleNumber(buttonContent);\n    }\n});\n\nfunction handleNumber(number) {\n    function checkIsDotTypedTwice(value) {\n        if (typeof value !== 'string') {\n            return false;\n        }\n        if (number === '.') {\n            return value.includes('.');\n        }\n        return false;\n    }\n\n    if (awaitingSecondValue) {\n        if (secondValue.length > 8 || checkIsDotTypedTwice(secondValue)) {\n            return;\n        }\n\n        if (number === '.' && secondValue === '') {\n            secondValue = '0';\n        }\n\n        secondValue += number;\n        display.textContent = secondValue;\n    } else {\n        if (firstValue.length > 8 || checkIsDotTypedTwice(firstValue)) {\n            return;\n        }\n\n        if (number === '.' && firstValue === '') {\n            firstValue = '0';\n        }\n\n        firstValue += number;\n        display.textContent = firstValue;\n    }\n}\n\nfunction handleOperator(selectedOperator) {\n    if (!firstValue) return;\n\n    const operators = {\n        add: '+',\n        subtract: '-',\n        multiply: '×',\n        divide: '÷',\n    };\n\n    subDisplay.textContent = operators[selectedOperator];\n\n    operator = selectedOperator;\n    awaitingSecondValue = true;\n    secondValue = '';\n}\n\nfunction calculateResult() {\n    if (!firstValue || !secondValue || !operator) return;\n\n    const firstNum = parseFloat(firstValue);\n    const secondNum = parseFloat(secondValue);\n\n    const precision = 1000;\n\n    function checkAfterDot(number) {\n        const stringNumber = number.toString();\n\n        const lengthAfterDot = stringNumber.lastIndexOf('.') === -1\n            ? 0\n            : stringNumber.length - stringNumber.lastIndexOf('.');\n\n        if (lengthAfterDot > 4) {\n            return number.toFixed(4);\n        }\n\n        return number.toString()\n    }\n\n    function addOperation() {\n        return (firstNum * precision + secondNum * precision) / precision;\n    }\n\n    function subtract() {\n        return (firstNum * precision - secondNum * precision) / precision;\n    }\n\n    function multiply() {\n        return (firstNum * precision) * (secondNum * precision) / precision * 0.001;\n    }\n\n    function divide() {\n        return secondNum === 0 ? '0' : firstNum / secondNum;\n    }\n\n    const operations = {\n        add: addOperation(),\n        subtract: subtract(),\n        multiply: multiply(),\n        divide: divide(),\n    };\n\n    result = checkAfterDot(operations[operator]);\n\n    display.textContent = result;\n    firstValue = result;\n\n    if (result.length > 9) {\n        display.classList.add('display--small');\n    } else {\n        display.classList.remove('display--small');\n    }\n\n    subDisplay.textContent = '';\n    operator = '';\n    awaitingSecondValue = false;\n}\n\nfunction clearAll() {\n    firstValue = '';\n    secondValue = '';\n    operator = '';\n    result = '';\n\n    display.textContent = '0';\n    display.classList.remove('display--small');\n    awaitingSecondValue = false;\n    subDisplay.textContent = '';\n}\n\nfunction invertNumber() {\n    if (awaitingSecondValue) {\n        const invertedValue = parseFloat(secondValue) * -1;\n        if (isNaN(invertedValue)) {\n            display.textContent = secondValue || '0';\n        } else {\n            secondValue = invertedValue.toString();\n            display.textContent = secondValue;\n        }\n    } else {\n        const invertedValue = parseFloat(firstValue) * -1;\n        if (isNaN(invertedValue)) {\n            display.textContent = firstValue || '0';\n        } else {\n            firstValue = invertedValue.toString();\n            display.textContent = firstValue;\n        }\n    }\n}\n\nfunction applyPercent() {\n    function limitLength(value) {\n        const stringValue = value.toString();\n        return stringValue.length > 8 ? stringValue.slice(0, 8) : stringValue;\n    }\n\n    if (awaitingSecondValue) {\n        const percentValue = parseFloat(secondValue) / 100;\n        if (isNaN(percentValue)) {\n            display.textContent = secondValue || '0';\n        } else {\n            secondValue = limitLength(percentValue.toString());\n            display.textContent = secondValue;\n        }\n    } else {\n        const percentValue = parseFloat(firstValue) / 100;\n        if (isNaN(percentValue)) {\n            display.textContent = firstValue || '0';\n        } else {\n            firstValue = limitLength(percentValue.toPrecision(6).toString());\n            display.textContent = firstValue;\n        }\n    }\n}\n\ndocument.querySelector('.button-theme').addEventListener('click', _theme__WEBPACK_IMPORTED_MODULE_1__.themeToggler);\n\n//# sourceURL=webpack://calculator-app/./src/index.js?");

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   themeToggler: () => (/* binding */ themeToggler)\n/* harmony export */ });\nfunction themeToggler() {\n    document.body.classList.toggle(\"dark-theme\");\n}\n\n//# sourceURL=webpack://calculator-app/./src/theme.js?");

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