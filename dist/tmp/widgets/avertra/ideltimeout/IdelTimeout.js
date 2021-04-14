module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/IdelTimeout.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}module.exports=_arrayLikeToArray;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}module.exports=_arrayWithHoles;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}module.exports=_assertThisInitialized;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}module.exports=_classCallCheck;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}module.exports=_createClass;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends(){module.exports=_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};module.exports["default"]=module.exports,module.exports.__esModule=true;return _extends.apply(this,arguments);}module.exports=_extends;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o){module.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};module.exports["default"]=module.exports,module.exports.__esModule=true;return _getPrototypeOf(o);}module.exports=_getPrototypeOf;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf=__webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)setPrototypeOf(subClass,superClass);}module.exports=_inherits;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}module.exports=_interopRequireDefault;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof=__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}module.exports=_interopRequireWildcard;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}module.exports=_iterableToArrayLimit;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}module.exports=_nonIterableRest;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof=__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];var assertThisInitialized=__webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return assertThisInitialized(self);}module.exports=_possibleConstructorReturn;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o,p){module.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};module.exports["default"]=module.exports,module.exports.__esModule=true;return _setPrototypeOf(o,p);}module.exports=_setPrototypeOf;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles=__webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");var iterableToArrayLimit=__webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");var unsupportedIterableToArray=__webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");var nonIterableRest=__webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");function _slicedToArray(arr,i){return arrayWithHoles(arr)||iterableToArrayLimit(arr,i)||unsupportedIterableToArray(arr,i)||nonIterableRest();}module.exports=_slicedToArray;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){module.exports=_typeof=function _typeof(obj){return typeof obj;};module.exports["default"]=module.exports,module.exports.__esModule=true;}else{module.exports=_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};module.exports["default"]=module.exports,module.exports.__esModule=true;}return _typeof(obj);}module.exports=_typeof;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray=__webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return arrayLikeToArray(o,minLen);}module.exports=_unsupportedIterableToArray;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var getOwnPropertySymbols=Object.getOwnPropertySymbols;var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}function shouldUseNative(){try{if(!Object.assign){return false;}var test1=new String('abc');test1[5]='de';if(Object.getOwnPropertyNames(test1)[0]==='5'){return false;}var test2={};for(var i=0;i<10;i++){test2['_'+String.fromCharCode(i)]=i;}var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n];});if(order2.join('')!=='0123456789'){return false;}var test3={};'abcdefghijklmnopqrst'.split('').forEach(function(letter){test3[letter]=letter;});if(Object.keys((0,_extends2.default)({},test3)).join('')!=='abcdefghijklmnopqrst'){return false;}return true;}catch(err){return false;}}module.exports=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}return to;};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var printWarning=function printWarning(){};if(true){var ReactPropTypesSecret=__webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");var loggedTypeFailures={};var has=Function.call.bind(Object.prototype.hasOwnProperty);printWarning=function printWarning(text){var message='Warning: '+text;if(typeof console!=='undefined'){console.error(message);}try{throw new Error(message);}catch(x){}};}function checkPropTypes(typeSpecs,values,location,componentName,getStack){if(true){for(var typeSpecName in typeSpecs){if(has(typeSpecs,typeSpecName)){var error;try{if(typeof typeSpecs[typeSpecName]!=='function'){var err=Error((componentName||'React class')+': '+location+' type `'+typeSpecName+'` is invalid; '+'it must be a function, usually from the `prop-types` package, but received `'+typeof typeSpecs[typeSpecName]+'`.');err.name='Invariant Violation';throw err;}error=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,ReactPropTypesSecret);}catch(ex){error=ex;}if(error&&!(error instanceof Error)){printWarning((componentName||'React class')+': type specification of '+location+' `'+typeSpecName+'` is invalid; the type checker '+'function must return `null` or an `Error` but returned a '+typeof error+'. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).');}if(error instanceof Error&&!(error.message in loggedTypeFailures)){loggedTypeFailures[error.message]=true;var stack=getStack?getStack():'';printWarning('Failed '+location+' type: '+error.message+(stack!=null?stack:''));}}}}}checkPropTypes.resetWarningCache=function(){if(true){loggedTypeFailures={};}};module.exports=checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var ReactIs=__webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");var assign=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");var ReactPropTypesSecret=__webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");var checkPropTypes=__webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");var has=Function.call.bind(Object.prototype.hasOwnProperty);var printWarning=function printWarning(){};if(true){printWarning=function printWarning(text){var message='Warning: '+text;if(typeof console!=='undefined'){console.error(message);}try{throw new Error(message);}catch(x){}};}function emptyFunctionThatReturnsNull(){return null;}module.exports=function(isValidElement,throwOnDirectAccess){var ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';function getIteratorFn(maybeIterable){var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);if(typeof iteratorFn==='function'){return iteratorFn;}}var ANONYMOUS='<<anonymous>>';var ReactPropTypes={array:createPrimitiveTypeChecker('array'),bool:createPrimitiveTypeChecker('boolean'),func:createPrimitiveTypeChecker('function'),number:createPrimitiveTypeChecker('number'),object:createPrimitiveTypeChecker('object'),string:createPrimitiveTypeChecker('string'),symbol:createPrimitiveTypeChecker('symbol'),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:createElementTypeChecker(),elementType:createElementTypeTypeChecker(),instanceOf:createInstanceTypeChecker,node:createNodeChecker(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker,exact:createStrictShapeTypeChecker};function is(x,y){if(x===y){return x!==0||1/x===1/y;}else{return x!==x&&y!==y;}}function PropTypeError(message){this.message=message;this.stack='';}PropTypeError.prototype=Error.prototype;function createChainableTypeChecker(validate){if(true){var manualPropTypeCallCache={};var manualPropTypeWarningCount=0;}function checkType(isRequired,props,propName,componentName,location,propFullName,secret){componentName=componentName||ANONYMOUS;propFullName=propFullName||propName;if(secret!==ReactPropTypesSecret){if(throwOnDirectAccess){var err=new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use `PropTypes.checkPropTypes()` to call them. '+'Read more at http://fb.me/use-check-prop-types');err.name='Invariant Violation';throw err;}else if( true&&typeof console!=='undefined'){var cacheKey=componentName+':'+propName;if(!manualPropTypeCallCache[cacheKey]&&manualPropTypeWarningCount<3){printWarning('You are manually calling a React.PropTypes validation '+'function for the `'+propFullName+'` prop on `'+componentName+'`. This is deprecated '+'and will throw in the standalone `prop-types` package. '+'You may be seeing this warning due to a third-party PropTypes '+'library. See https://fb.me/react-warning-dont-call-proptypes '+'for details.');manualPropTypeCallCache[cacheKey]=true;manualPropTypeWarningCount++;}}}if(props[propName]==null){if(isRequired){if(props[propName]===null){return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required '+('in `'+componentName+'`, but its value is `null`.'));}return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required in '+('`'+componentName+'`, but its value is `undefined`.'));}return null;}else{return validate(props,propName,componentName,location,propFullName);}}var chainedCheckType=checkType.bind(null,false);chainedCheckType.isRequired=checkType.bind(null,true);return chainedCheckType;}function createPrimitiveTypeChecker(expectedType){function validate(props,propName,componentName,location,propFullName,secret){var propValue=props[propName];var propType=getPropType(propValue);if(propType!==expectedType){var preciseType=getPreciseType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+preciseType+'` supplied to `'+componentName+'`, expected ')+('`'+expectedType+'`.'));}return null;}return createChainableTypeChecker(validate);}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunctionThatReturnsNull);}function createArrayOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside arrayOf.');}var propValue=props[propName];if(!Array.isArray(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an array.'));}for(var i=0;i<propValue.length;i++){var error=typeChecker(propValue,i,componentName,location,propFullName+'['+i+']',ReactPropTypesSecret);if(error instanceof Error){return error;}}return null;}return createChainableTypeChecker(validate);}function createElementTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!isValidElement(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement.'));}return null;}return createChainableTypeChecker(validate);}function createElementTypeTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!ReactIs.isValidElementType(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement type.'));}return null;}return createChainableTypeChecker(validate);}function createInstanceTypeChecker(expectedClass){function validate(props,propName,componentName,location,propFullName){if(!(props[propName]instanceof expectedClass)){var expectedClassName=expectedClass.name||ANONYMOUS;var actualClassName=getClassName(props[propName]);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+actualClassName+'` supplied to `'+componentName+'`, expected ')+('instance of `'+expectedClassName+'`.'));}return null;}return createChainableTypeChecker(validate);}function createEnumTypeChecker(expectedValues){if(!Array.isArray(expectedValues)){if(true){if(arguments.length>1){printWarning('Invalid arguments supplied to oneOf, expected an array, got '+arguments.length+' arguments. '+'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');}else{printWarning('Invalid argument supplied to oneOf, expected an array.');}}return emptyFunctionThatReturnsNull;}function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];for(var i=0;i<expectedValues.length;i++){if(is(propValue,expectedValues[i])){return null;}}var valuesString=JSON.stringify(expectedValues,function replacer(key,value){var type=getPreciseType(value);if(type==='symbol'){return String(value);}return value;});return new PropTypeError('Invalid '+location+' `'+propFullName+'` of value `'+String(propValue)+'` '+('supplied to `'+componentName+'`, expected one of '+valuesString+'.'));}return createChainableTypeChecker(validate);}function createObjectOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside objectOf.');}var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an object.'));}for(var key in propValue){if(has(propValue,key)){var error=typeChecker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error instanceof Error){return error;}}}return null;}return createChainableTypeChecker(validate);}function createUnionTypeChecker(arrayOfTypeCheckers){if(!Array.isArray(arrayOfTypeCheckers)){ true?printWarning('Invalid argument supplied to oneOfType, expected an instance of array.'):undefined;return emptyFunctionThatReturnsNull;}for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(typeof checker!=='function'){printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but '+'received '+getPostfixForTypeWarning(checker)+' at index '+i+'.');return emptyFunctionThatReturnsNull;}}function validate(props,propName,componentName,location,propFullName){for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(checker(props,propName,componentName,location,propFullName,ReactPropTypesSecret)==null){return null;}}return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`.'));}return createChainableTypeChecker(validate);}function createNodeChecker(){function validate(props,propName,componentName,location,propFullName){if(!isNode(props[propName])){return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a ReactNode.'));}return null;}return createChainableTypeChecker(validate);}function createShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}for(var key in shapeTypes){var checker=shapeTypes[key];if(!checker){continue;}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function createStrictShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}var allKeys=assign({},props[propName],shapeTypes);for(var key in allKeys){var checker=shapeTypes[key];if(!checker){return new PropTypeError('Invalid '+location+' `'+propFullName+'` key `'+key+'` supplied to `'+componentName+'`.'+'\nBad object: '+JSON.stringify(props[propName],null,'  ')+'\nValid keys: '+JSON.stringify(Object.keys(shapeTypes),null,'  '));}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function isNode(propValue){switch(typeof propValue){case'number':case'string':case'undefined':return true;case'boolean':return!propValue;case'object':if(Array.isArray(propValue)){return propValue.every(isNode);}if(propValue===null||isValidElement(propValue)){return true;}var iteratorFn=getIteratorFn(propValue);if(iteratorFn){var iterator=iteratorFn.call(propValue);var step;if(iteratorFn!==propValue.entries){while(!(step=iterator.next()).done){if(!isNode(step.value)){return false;}}}else{while(!(step=iterator.next()).done){var entry=step.value;if(entry){if(!isNode(entry[1])){return false;}}}}}else{return false;}return true;default:return false;}}function isSymbol(propType,propValue){if(propType==='symbol'){return true;}if(!propValue){return false;}if(propValue['@@toStringTag']==='Symbol'){return true;}if(typeof Symbol==='function'&&propValue instanceof Symbol){return true;}return false;}function getPropType(propValue){var propType=typeof propValue;if(Array.isArray(propValue)){return'array';}if(propValue instanceof RegExp){return'object';}if(isSymbol(propType,propValue)){return'symbol';}return propType;}function getPreciseType(propValue){if(typeof propValue==='undefined'||propValue===null){return''+propValue;}var propType=getPropType(propValue);if(propType==='object'){if(propValue instanceof Date){return'date';}else if(propValue instanceof RegExp){return'regexp';}}return propType;}function getPostfixForTypeWarning(value){var type=getPreciseType(value);switch(type){case'array':case'object':return'an '+type;case'boolean':case'date':case'regexp':return'a '+type;default:return type;}}function getClassName(propValue){if(!propValue.constructor||!propValue.constructor.name){return ANONYMOUS;}return propValue.constructor.name;}ReactPropTypes.checkPropTypes=checkPropTypes;ReactPropTypes.resetWarningCache=checkPropTypes.resetWarningCache;ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if(true){var ReactIs=__webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");var throwOnDirectAccess=true;module.exports=__webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement,throwOnDirectAccess);}else{}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';module.exports=ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */if(true){(function(){'use strict';var hasSymbol=typeof Symbol==='function'&&Symbol.for;var REACT_ELEMENT_TYPE=hasSymbol?Symbol.for('react.element'):0xeac7;var REACT_PORTAL_TYPE=hasSymbol?Symbol.for('react.portal'):0xeaca;var REACT_FRAGMENT_TYPE=hasSymbol?Symbol.for('react.fragment'):0xeacb;var REACT_STRICT_MODE_TYPE=hasSymbol?Symbol.for('react.strict_mode'):0xeacc;var REACT_PROFILER_TYPE=hasSymbol?Symbol.for('react.profiler'):0xead2;var REACT_PROVIDER_TYPE=hasSymbol?Symbol.for('react.provider'):0xeacd;var REACT_CONTEXT_TYPE=hasSymbol?Symbol.for('react.context'):0xeace;var REACT_ASYNC_MODE_TYPE=hasSymbol?Symbol.for('react.async_mode'):0xeacf;var REACT_CONCURRENT_MODE_TYPE=hasSymbol?Symbol.for('react.concurrent_mode'):0xeacf;var REACT_FORWARD_REF_TYPE=hasSymbol?Symbol.for('react.forward_ref'):0xead0;var REACT_SUSPENSE_TYPE=hasSymbol?Symbol.for('react.suspense'):0xead1;var REACT_SUSPENSE_LIST_TYPE=hasSymbol?Symbol.for('react.suspense_list'):0xead8;var REACT_MEMO_TYPE=hasSymbol?Symbol.for('react.memo'):0xead3;var REACT_LAZY_TYPE=hasSymbol?Symbol.for('react.lazy'):0xead4;var REACT_BLOCK_TYPE=hasSymbol?Symbol.for('react.block'):0xead9;var REACT_FUNDAMENTAL_TYPE=hasSymbol?Symbol.for('react.fundamental'):0xead5;var REACT_RESPONDER_TYPE=hasSymbol?Symbol.for('react.responder'):0xead6;var REACT_SCOPE_TYPE=hasSymbol?Symbol.for('react.scope'):0xead7;function isValidElementType(type){return typeof type==='string'||typeof type==='function'||type===REACT_FRAGMENT_TYPE||type===REACT_CONCURRENT_MODE_TYPE||type===REACT_PROFILER_TYPE||type===REACT_STRICT_MODE_TYPE||type===REACT_SUSPENSE_TYPE||type===REACT_SUSPENSE_LIST_TYPE||typeof type==='object'&&type!==null&&(type.$$typeof===REACT_LAZY_TYPE||type.$$typeof===REACT_MEMO_TYPE||type.$$typeof===REACT_PROVIDER_TYPE||type.$$typeof===REACT_CONTEXT_TYPE||type.$$typeof===REACT_FORWARD_REF_TYPE||type.$$typeof===REACT_FUNDAMENTAL_TYPE||type.$$typeof===REACT_RESPONDER_TYPE||type.$$typeof===REACT_SCOPE_TYPE||type.$$typeof===REACT_BLOCK_TYPE);}function typeOf(object){if(typeof object==='object'&&object!==null){var $$typeof=object.$$typeof;switch($$typeof){case REACT_ELEMENT_TYPE:var type=object.type;switch(type){case REACT_ASYNC_MODE_TYPE:case REACT_CONCURRENT_MODE_TYPE:case REACT_FRAGMENT_TYPE:case REACT_PROFILER_TYPE:case REACT_STRICT_MODE_TYPE:case REACT_SUSPENSE_TYPE:return type;default:var $$typeofType=type&&type.$$typeof;switch($$typeofType){case REACT_CONTEXT_TYPE:case REACT_FORWARD_REF_TYPE:case REACT_LAZY_TYPE:case REACT_MEMO_TYPE:case REACT_PROVIDER_TYPE:return $$typeofType;default:return $$typeof;}}case REACT_PORTAL_TYPE:return $$typeof;}}return undefined;}var AsyncMode=REACT_ASYNC_MODE_TYPE;var ConcurrentMode=REACT_CONCURRENT_MODE_TYPE;var ContextConsumer=REACT_CONTEXT_TYPE;var ContextProvider=REACT_PROVIDER_TYPE;var Element=REACT_ELEMENT_TYPE;var ForwardRef=REACT_FORWARD_REF_TYPE;var Fragment=REACT_FRAGMENT_TYPE;var Lazy=REACT_LAZY_TYPE;var Memo=REACT_MEMO_TYPE;var Portal=REACT_PORTAL_TYPE;var Profiler=REACT_PROFILER_TYPE;var StrictMode=REACT_STRICT_MODE_TYPE;var Suspense=REACT_SUSPENSE_TYPE;var hasWarnedAboutDeprecatedIsAsyncMode=false;function isAsyncMode(object){{if(!hasWarnedAboutDeprecatedIsAsyncMode){hasWarnedAboutDeprecatedIsAsyncMode=true;console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, '+'and will be removed in React 17+. Update your code to use '+'ReactIs.isConcurrentMode() instead. It has the exact same API.');}}return isConcurrentMode(object)||typeOf(object)===REACT_ASYNC_MODE_TYPE;}function isConcurrentMode(object){return typeOf(object)===REACT_CONCURRENT_MODE_TYPE;}function isContextConsumer(object){return typeOf(object)===REACT_CONTEXT_TYPE;}function isContextProvider(object){return typeOf(object)===REACT_PROVIDER_TYPE;}function isElement(object){return typeof object==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;}function isForwardRef(object){return typeOf(object)===REACT_FORWARD_REF_TYPE;}function isFragment(object){return typeOf(object)===REACT_FRAGMENT_TYPE;}function isLazy(object){return typeOf(object)===REACT_LAZY_TYPE;}function isMemo(object){return typeOf(object)===REACT_MEMO_TYPE;}function isPortal(object){return typeOf(object)===REACT_PORTAL_TYPE;}function isProfiler(object){return typeOf(object)===REACT_PROFILER_TYPE;}function isStrictMode(object){return typeOf(object)===REACT_STRICT_MODE_TYPE;}function isSuspense(object){return typeOf(object)===REACT_SUSPENSE_TYPE;}exports.AsyncMode=AsyncMode;exports.ConcurrentMode=ConcurrentMode;exports.ContextConsumer=ContextConsumer;exports.ContextProvider=ContextProvider;exports.Element=Element;exports.ForwardRef=ForwardRef;exports.Fragment=Fragment;exports.Lazy=Lazy;exports.Memo=Memo;exports.Portal=Portal;exports.Profiler=Profiler;exports.StrictMode=StrictMode;exports.Suspense=Suspense;exports.isAsyncMode=isAsyncMode;exports.isConcurrentMode=isConcurrentMode;exports.isContextConsumer=isContextConsumer;exports.isContextProvider=isContextProvider;exports.isElement=isElement;exports.isForwardRef=isForwardRef;exports.isFragment=isFragment;exports.isLazy=isLazy;exports.isMemo=isMemo;exports.isPortal=isPortal;exports.isProfiler=isProfiler;exports.isStrictMode=isStrictMode;exports.isSuspense=isSuspense;exports.isValidElementType=isValidElementType;exports.typeOf=typeOf;})();}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
if(false){}else{module.exports=__webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");}

/***/ }),

/***/ "./node_modules/react-native-awesome-alerts/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-native-awesome-alerts/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _AwesomeAlert=_interopRequireDefault(__webpack_require__(/*! ./src/AwesomeAlert */ "./node_modules/react-native-awesome-alerts/src/AwesomeAlert.js"));var _default=_AwesomeAlert.default;exports.default=_default;

/***/ }),

/***/ "./node_modules/react-native-awesome-alerts/src/AwesomeAlert.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-native-awesome-alerts/src/AwesomeAlert.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "react"));var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));var _styles=_interopRequireDefault(__webpack_require__(/*! ./styles */ "./node_modules/react-native-awesome-alerts/src/styles.js"));var _jsxFileName="/Users/hasanalnatour/Downloads/mx-idletimeout-native/node_modules/react-native-awesome-alerts/src/AwesomeAlert.js";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var HwBackHandler=_reactNative.BackHandler||_reactNative.BackAndroid;var HW_BACK_EVENT='hardwareBackPress';var OS=_reactNative.Platform.OS;var AwesomeAlert=function(_Component){(0,_inherits2.default)(AwesomeAlert,_Component);var _super=_createSuper(AwesomeAlert);function AwesomeAlert(props){var _this;(0,_classCallCheck2.default)(this,AwesomeAlert);_this=_super.call(this,props);_this._springShow=function(fromConstructor){var _this$props$useNative=_this.props.useNativeDriver,useNativeDriver=_this$props$useNative===void 0?false:_this$props$useNative;_this._toggleAlert(fromConstructor);_reactNative.Animated.spring(_this.springValue,{toValue:1,bounciness:10,useNativeDriver:useNativeDriver}).start();};_this._springHide=function(){var _this$props$useNative2=_this.props.useNativeDriver,useNativeDriver=_this$props$useNative2===void 0?false:_this$props$useNative2;if(_this.state.showSelf===true){_reactNative.Animated.spring(_this.springValue,{toValue:0,tension:10,useNativeDriver:useNativeDriver}).start();setTimeout(function(){_this._toggleAlert();_this._onDismiss();},70);}};_this._toggleAlert=function(fromConstructor){if(fromConstructor)_this.state={showSelf:true};else _this.setState({showSelf:!_this.state.showSelf});};_this._handleHwBackEvent=function(){var closeOnHardwareBackPress=_this.props.closeOnHardwareBackPress;if(_this.state.showSelf&&closeOnHardwareBackPress){_this._springHide();return true;}else if(!closeOnHardwareBackPress&&_this.state.showSelf){return true;}return false;};_this._onTapOutside=function(){var closeOnTouchOutside=_this.props.closeOnTouchOutside;if(closeOnTouchOutside)_this._springHide();};_this._onDismiss=function(){var onDismiss=_this.props.onDismiss;onDismiss&&onDismiss();};_this._renderButton=function(data){var text=data.text,backgroundColor=data.backgroundColor,buttonStyle=data.buttonStyle,buttonTextStyle=data.buttonTextStyle,onPress=data.onPress;return _react.default.createElement(_reactNative.TouchableOpacity,{onPress:onPress,__self:(0,_assertThisInitialized2.default)(_this),__source:{fileName:_jsxFileName,lineNumber:106,columnNumber:7}},_react.default.createElement(_reactNative.View,{style:[_styles.default.button,{backgroundColor:backgroundColor},buttonStyle],__self:(0,_assertThisInitialized2.default)(_this),__source:{fileName:_jsxFileName,lineNumber:107,columnNumber:9}},_react.default.createElement(_reactNative.Text,{style:[_styles.default.buttonText,buttonTextStyle],__self:(0,_assertThisInitialized2.default)(_this),__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:11}},text)));};_this._renderAlert=function(){var animation={transform:[{scale:_this.springValue}]};var showProgress=_this.props.showProgress;var _this$props=_this.props,title=_this$props.title,message=_this$props.message,_this$props$customVie=_this$props.customView,customView=_this$props$customVie===void 0?null:_this$props$customVie;var _this$props2=_this.props,showCancelButton=_this$props2.showCancelButton,cancelText=_this$props2.cancelText,cancelButtonColor=_this$props2.cancelButtonColor,cancelButtonStyle=_this$props2.cancelButtonStyle,cancelButtonTextStyle=_this$props2.cancelButtonTextStyle,onCancelPressed=_this$props2.onCancelPressed;var _this$props3=_this.props,showConfirmButton=_this$props3.showConfirmButton,confirmText=_this$props3.confirmText,confirmButtonColor=_this$props3.confirmButtonColor,confirmButtonStyle=_this$props3.confirmButtonStyle,confirmButtonTextStyle=_this$props3.confirmButtonTextStyle,onConfirmPressed=_this$props3.onConfirmPressed;var _this$props4=_this.props,alertContainerStyle=_this$props4.alertContainerStyle,overlayStyle=_this$props4.overlayStyle,progressSize=_this$props4.progressSize,progressColor=_this$props4.progressColor,contentContainerStyle=_this$props4.contentContainerStyle,contentStyle=_this$props4.contentStyle,titleStyle=_this$props4.titleStyle,messageStyle=_this$props4.messageStyle,actionContainerStyle=_this$props4.actionContainerStyle;var cancelButtonData={text:cancelText,backgroundColor:cancelButtonColor,buttonStyle:cancelButtonStyle,buttonTextStyle:cancelButtonTextStyle,onPress:onCancelPressed};var confirmButtonData={text:confirmText,backgroundColor:confirmButtonColor,buttonStyle:confirmButtonStyle,buttonTextStyle:confirmButtonTextStyle,onPress:onConfirmPressed};return _react.default.createElement(_reactNative.View,{style:[_styles.default.container,alertContainerStyle],__self:(0,_assertThisInitialized2.default)(_this),__source:{fileName:_jsxFileName,lineNumber:166,columnNumber:7}},_react.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:_this._onTapOutside,__self:(0,_assertThisInitialized2.default)(_this),__source:{fileName:_jsxFileName,lineNumber:167,columnNumber:9}},_react.default.createElement(_reactNative.View,{style:[_styles.default.overlay,overlayStyle],__self:(0,_assertThisInitialized2.default)(_this),__source:{fileName:_jsxFileName,lineNumber:168,columnNumber:11}})),_react.default.createElement(_reactNative.Animated.View,{style:[_styles.default.contentContainer,animation,contentContainerStyle],__self:(0,_assertThisInitialized2.default)(_this),__source:{fileName:_jsxFileName,lineNumber:170,columnNumber:9}},_react.default.createElement(_reactNative.View,{style:[_styles.default.content,contentStyle],__self:(0,_assertThisInitialized2.default)(_this),__source:{fileName:_jsxFileName,lineNumber:173,columnNumber:11}},showProgress?_react.default.createElement(_reactNative.ActivityIndicator,{size:progressSize,color:progressColor,__self:(0,_assertThisInitialized2.default)(_this),__source:{fileName:_jsxFileName,lineNumber:175,columnNumber:15}}):null,title?_react.default.createElement(_reactNative.Text,{style:[_styles.default.title,titleStyle],__self:(0,_assertThisInitialized2.default)(_this),__source:{fileName:_jsxFileName,lineNumber:178,columnNumber:15}},title):null,message?_react.default.createElement(_reactNative.Text,{style:[_styles.default.message,messageStyle],__self:(0,_assertThisInitialized2.default)(_this),__source:{fileName:_jsxFileName,lineNumber:181,columnNumber:15}},message):null,customView),_react.default.createElement(_reactNative.View,{style:[_styles.default.action,actionContainerStyle],__self:(0,_assertThisInitialized2.default)(_this),__source:{fileName:_jsxFileName,lineNumber:185,columnNumber:11}},showCancelButton?_this._renderButton(cancelButtonData):null,showConfirmButton?_this._renderButton(confirmButtonData):null)));};var show=_this.props.show;_this.springValue=new _reactNative.Animated.Value(0.3);_this.state={showSelf:false};if(show)_this._springShow(true);return _this;}(0,_createClass2.default)(AwesomeAlert,[{key:"componentDidMount",value:function componentDidMount(){HwBackHandler.addEventListener(HW_BACK_EVENT,this._handleHwBackEvent);}},{key:"render",value:function render(){var _this2=this;var _this$state=this.state,show=_this$state.show,showSelf=_this$state.showSelf;var _this$props5=this.props,_this$props5$modalPro=_this$props5.modalProps,modalProps=_this$props5$modalPro===void 0?{}:_this$props5$modalPro,closeOnHardwareBackPress=_this$props5.closeOnHardwareBackPress;var wrapInModal=OS==='android'||OS==='ios';return showSelf?wrapInModal?_react.default.createElement(_reactNative.Modal,(0,_extends2.default)({animationType:"none",transparent:true,visible:show,onRequestClose:function onRequestClose(){if(showSelf&&closeOnHardwareBackPress){_this2._springHide();}}},modalProps,{__self:this,__source:{fileName:_jsxFileName,lineNumber:202,columnNumber:9}}),this._renderAlert()):this._renderAlert():null;}},{key:"UNSAFE_componentWillReceiveProps",value:function UNSAFE_componentWillReceiveProps(nextProps){var show=nextProps.show;var showSelf=this.state.showSelf;if(show&&!showSelf)this._springShow();else if(show===false&&showSelf)this._springHide();}},{key:"componentWillUnmount",value:function componentWillUnmount(){HwBackHandler.removeEventListener(HW_BACK_EVENT,this._handleHwBackEvent);}}]);return AwesomeAlert;}(_react.Component);exports.default=AwesomeAlert;AwesomeAlert.propTypes={show:_propTypes.default.bool,useNativeDriver:_propTypes.default.bool,showProgress:_propTypes.default.bool,title:_propTypes.default.string,message:_propTypes.default.string,closeOnTouchOutside:_propTypes.default.bool,closeOnHardwareBackPress:_propTypes.default.bool,showCancelButton:_propTypes.default.bool,showConfirmButton:_propTypes.default.bool,cancelText:_propTypes.default.string,confirmText:_propTypes.default.string,cancelButtonColor:_propTypes.default.string,confirmButtonColor:_propTypes.default.string,onCancelPressed:_propTypes.default.func,onConfirmPressed:_propTypes.default.func,customView:_propTypes.default.oneOfType([_propTypes.default.element,_propTypes.default.node,_propTypes.default.func]),modalProps:_propTypes.default.object};AwesomeAlert.defaultProps={show:false,useNativeDriver:false,showProgress:false,closeOnTouchOutside:true,closeOnHardwareBackPress:true,showCancelButton:false,showConfirmButton:false,cancelText:'Cancel',confirmText:'Confirm',cancelButtonColor:'#D0D0D0',confirmButtonColor:'#AEDEF4',customView:null,modalProps:{}};

/***/ }),

/***/ "./node_modules/react-native-awesome-alerts/src/styles.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-native-awesome-alerts/src/styles.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _Dimensions$get=_reactNative.Dimensions.get('window'),height=_Dimensions$get.height,width=_Dimensions$get.width;var styles=_reactNative.StyleSheet.create({container:{flex:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center',position:'absolute'},overlay:{width:width,height:height,position:'absolute',backgroundColor:'rgba(52,52,52,0.5)'},contentContainer:{maxWidth:'80%',borderRadius:5,backgroundColor:'white',padding:10},content:{justifyContent:'center',alignItems:'center',padding:10},action:{flexDirection:'row',justifyContent:'center',alignItems:'flex-end',marginTop:5},title:{paddingVertical:5,paddingHorizontal:15,color:'#626262',fontSize:18},message:{paddingTop:5,color:'#7b7b7b',fontSize:14},button:{paddingHorizontal:10,paddingVertical:7,margin:5,borderRadius:5},buttonText:{color:'#fff',fontSize:13}});var _default=styles;exports.default=_default;

/***/ }),

/***/ "./src/IdelTimeout.jsx":
/*!*****************************!*\
  !*** ./src/IdelTimeout.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.IdelTimeout=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _react=__webpack_require__(/*! react */ "react");var _IdleTracker=__webpack_require__(/*! ./components/IdleTracker */ "./src/components/IdleTracker.jsx");var _jsxFileName="/Users/hasanalnatour/Downloads/mx-idletimeout-native/src/IdelTimeout.jsx";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var IdelTimeout=function(_Component){(0,_inherits2.default)(IdelTimeout,_Component);var _super=_createSuper(IdelTimeout);function IdelTimeout(props){var _this;(0,_classCallCheck2.default)(this,IdelTimeout);_this=_super.call(this,props);_this.onTimeOutAction=_this.onTimeOutAction.bind((0,_assertThisInitialized2.default)(_this));return _this;}(0,_createClass2.default)(IdelTimeout,[{key:"render",value:function render(){var _this2=this;var _this$props=this.props,content=_this$props.content,minutes=_this$props.minutes,secondsAfterWarning=_this$props.secondsAfterWarning,warnUser=_this$props.warnUser,warningText=_this$props.warningText,buttonColor=_this$props.buttonColor;return(0,_react.createElement)(_IdleTracker.IdleTracker,{content:content,minutes:minutes,warnUser:warnUser,warningText:warningText,buttonColor:buttonColor,secondsAfterWarning:secondsAfterWarning,onTimeOut:function onTimeOut(){return _this2.onTimeOutAction();},__self:this,__source:{fileName:_jsxFileName,lineNumber:13,columnNumber:16}});}},{key:"timeOutWarning",value:function timeOutWarning(){var _this$props$onTimeOut=this.props.onTimeOutWarning,canExecute=_this$props$onTimeOut.canExecute,isExecuting=_this$props$onTimeOut.isExecuting,execute=_this$props$onTimeOut.execute;if(canExecute&&!isExecuting){execute();}}},{key:"onTimeOutAction",value:function onTimeOutAction(){var _this$props$onTimeOut2=this.props.onTimeOut,canExecute=_this$props$onTimeOut2.canExecute,isExecuting=_this$props$onTimeOut2.isExecuting,execute=_this$props$onTimeOut2.execute;if(canExecute&&!isExecuting){execute();}}}]);return IdelTimeout;}(_react.Component);exports.IdelTimeout=IdelTimeout;

/***/ }),

/***/ "./src/components/Alert.jsx":
/*!**********************************!*\
  !*** ./src/components/Alert.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.Alert=void 0;var _react=__webpack_require__(/*! react */ "react");var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _reactNativeAwesomeAlerts=_interopRequireDefault(__webpack_require__(/*! react-native-awesome-alerts */ "./node_modules/react-native-awesome-alerts/index.js"));var _this=this,_jsxFileName="/Users/hasanalnatour/Downloads/mx-idletimeout-native/src/components/Alert.jsx";var Alert=function Alert(props){return(0,_react.createElement)(_reactNativeAwesomeAlerts.default,{show:true,showProgress:false,title:"Hello",message:props.text,closeOnTouchOutside:true,closeOnHardwareBackPress:true,showCancelButton:false,showConfirmButton:true,confirmText:"Yes",confirmButtonColor:props.buttonColor.value,onCancelPressed:function onCancelPressed(){props.onPress();},onConfirmPressed:function onConfirmPressed(){props.onPress();},__self:_this,__source:{fileName:_jsxFileName,lineNumber:8,columnNumber:13}});};exports.Alert=Alert;var styles={container:{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}};

/***/ }),

/***/ "./src/components/IdleTracker.jsx":
/*!****************************************!*\
  !*** ./src/components/IdleTracker.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.IdleTracker=void 0;var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _slicedToArray2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));var _react=__webpack_require__(/*! react */ "react");var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _Alert=__webpack_require__(/*! ./Alert */ "./src/components/Alert.jsx");var _this=this,_jsxFileName="/Users/hasanalnatour/Downloads/mx-idletimeout-native/src/components/IdleTracker.jsx";var IdleTracker=function IdleTracker(props){var timerId=(0,_react.useRef)(false);var warningTimerid=(0,_react.useRef)(false);var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2.default)(_useState,2),visible=_useState2[0],setVisible=_useState2[1];var _useState3=(0,_react.useState)((props.minutes||5)*60*1000),_useState4=(0,_slicedToArray2.default)(_useState3,2),timeForInactivityInSecond=_useState4[0],setTimeForInactivityInSecond=_useState4[1];(0,_react.useEffect)(function(){var keyboardDidShowListener=_reactNative.Keyboard.addListener('keyboardDidShow',function(){clearTimeout(timerId.current);clearTimeout(warningTimerid.current);});var keyboardDidHideListener=_reactNative.Keyboard.addListener('keyboardDidHide',function(){resetInactivityTimeout();});return function(){clearTimeout(timerId.current);clearTimeout(warningTimerid.current);keyboardDidHideListener.remove();keyboardDidShowListener.remove();};},[]);var panResponder=(0,_react.useRef)(_reactNative.PanResponder.create({onStartShouldSetPanResponderCapture:function onStartShouldSetPanResponderCapture(){resetInactivityTimeout();}})).current;var resetInactivityTimeout=function resetInactivityTimeout(){clearTimeout(timerId.current);clearTimeout(warningTimerid.current);timerId.current=setTimeout(function(){if(props.warnUser){setVisible(true);}warningTimerid.current=setTimeout(function(){setVisible(false);props.onTimeOut();resetInactivityTimeout();},(props.secondsAfterWarning||5)*1000);},timeForInactivityInSecond);};return(0,_react.createElement)(_reactNative.View,(0,_extends2.default)({style:{flex:1}},panResponder.panHandlers,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:71,columnNumber:5}}),visible&&(0,_react.createElement)(_Alert.Alert,{text:props.warningText.value,onPress:function onPress(){return setVisible(false);},buttonColor:props.buttonColor,__self:_this,__source:{fileName:_jsxFileName,lineNumber:72,columnNumber:19}}),props.content);};exports.IdleTracker=IdleTracker;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-native":
/*!*******************************!*\
  !*** external "react-native" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native");

/***/ })

/******/ });
//# sourceMappingURL=IdelTimeout.js.map