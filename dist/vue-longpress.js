/*!
 *  VueLongpress plugin v1.0.2
 * 
 *  A button component that requires you to keep pressing to confirm a given action
 * 
 *  @author Javis Perez <javisperez@gmail.com>
 *  https://github.com/javisperez/vue-longpress
 *  Released under the MIT License.
 */
!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define("VueLongpress",[],factory):"object"==typeof exports?exports.VueLongpress=factory():root.VueLongpress=factory()}(this,function(){/******/
return function(modules){/******/
// The require function
/******/
function __webpack_require__(moduleId){/******/
// Check if module is in cache
/******/
if(installedModules[moduleId])/******/
return installedModules[moduleId].exports;/******/
// Create a new module (and put it into the cache)
/******/
var module=installedModules[moduleId]={/******/
exports:{},/******/
id:moduleId,/******/
loaded:!1};/******/
// Return the exports of the module
/******/
/******/
// Execute the module function
/******/
/******/
// Flag the module as loaded
/******/
return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}// webpackBootstrap
/******/
// The module cache
/******/
var installedModules={};/******/
// Load entry module and return exports
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
// expose the module cache
/******/
/******/
// __webpack_public_path__
/******/
return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([/* 0 */
/***/
function(module,exports,__webpack_require__){/* styles */
__webpack_require__(1);var Component=__webpack_require__(6)(/* script */
__webpack_require__(7),/* template */
__webpack_require__(87),/* scopeId */
null,/* cssModules */
null);module.exports=Component.exports},/* 1 */
/***/
function(module,exports,__webpack_require__){
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(2);"string"==typeof content&&(content=[[module.id,content,""]]),content.locals&&(module.exports=content.locals);
// add the styles to the DOM
__webpack_require__(4)("a2d733ac",content,!0)},/* 2 */
/***/
function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(),
// imports
// module
exports.push([module.id,".longpress-button{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}.longpress-button .progress-bar{position:absolute;left:0;width:0;bottom:0;height:4px;background:#fff;opacity:.4}.longpress-button.counting .progress-bar{animation-name:longpress-progress;animation-timing-function:linear}.longpress-button.executing{opacity:.5;cursor:denied}@keyframes longpress-progress{to{width:100%}}",""])},/* 3 */
/***/
function(module,exports){/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
// css base code, injected by the css-loader
module.exports=function(){var list=[];
// return the list of modules as css string
// import a list of modules into the list
return list.toString=function(){for(var result=[],i=0;i<this.length;i++){var item=this[i];item[2]?result.push("@media "+item[2]+"{"+item[1]+"}"):result.push(item[1])}return result.join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];"number"==typeof id&&(alreadyImportedModules[id]=!0)}for(i=0;i<modules.length;i++){var item=modules[i];
// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},/* 4 */
/***/
function(module,exports,__webpack_require__){function addStylesToDom(styles){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j]));domStyle.parts.length>item.parts.length&&(domStyle.parts.length=item.parts.length)}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j]));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function createStyleElement(){var styleElement=document.createElement("style");return styleElement.type="text/css",head.appendChild(styleElement),styleElement}function addStyle(obj){var update,remove,styleElement=document.querySelector('style[data-vue-ssr-id~="'+obj.id+'"]');if(styleElement){if(isProduction)
// has SSR styles and in production mode.
// simply do nothing.
return noop;
// has SSR styles but in dev mode.
// for some reason Chrome can't handle source map in server-rendered
// style tags - source maps in <style> only works if the style tag is
// created and inserted dynamically. So we remove the server rendered
// styles and inject new ones.
styleElement.parentNode.removeChild(styleElement)}if(isOldIE){
// use singleton mode for IE9.
var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement()),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else
// use multi-style-tag mode in all other cases
styleElement=createStyleElement(),update=applyToTag.bind(null,styleElement),remove=function(){styleElement.parentNode.removeChild(styleElement)};return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media&&styleElement.setAttribute("media",media),sourceMap&&(
// https://developer.chrome.com/devtools/docs/javascript-debugging
// this makes source maps inside style tags work properly in Chrome
css+="\n/*# sourceURL="+sourceMap.sources[0]+" */",
// http://stackoverflow.com/a/26603875
css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */"),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/
var hasDocument="undefined"!=typeof document,listToStyles=__webpack_require__(5),stylesInDom={},head=hasDocument&&(document.head||document.getElementsByTagName("head")[0]),singletonElement=null,singletonCounter=0,isProduction=!1,noop=function(){},isOldIE="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());module.exports=function(parentId,list,_isProduction){isProduction=_isProduction;var styles=listToStyles(parentId,list);return addStylesToDom(styles),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}newList?(styles=listToStyles(parentId,newList),addStylesToDom(styles)):styles=[];for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},/* 5 */
/***/
function(module,exports){/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
module.exports=function(parentId,list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={id:parentId+":"+i,css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}},/* 6 */
/***/
function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);
// Vue.extend constructor export interop
var options="function"==typeof scriptExports?scriptExports.options:scriptExports;
// inject cssModules
if(
// render functions
compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),
// scopedId
scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},/* 7 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _defineProperty2=__webpack_require__(8),_defineProperty3=_interopRequireDefault(_defineProperty2),_regenerator=__webpack_require__(28),_regenerator2=_interopRequireDefault(_regenerator),_asyncToGenerator2=__webpack_require__(31),_asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2),timer=null,clickDelay=.5;exports.default=(0,_defineProperty3.default)({name:"longpress-button",props:["value","onConfirm","duration","pressingText","actionText"],created:function(){var _this=this;document.addEventListener("mouseup",function(){return _this.cancel()})},destroyed:function(){var _this2=this;document.removeEventListener("mouseup",function(){return _this2.cancel()})},data:function(){return{status:"default",counter:clickDelay,clickDelay:clickDelay,onClick:!1,shortPressCheckerTimer:null,shortPressCounter:0,beforeDestroy:!1}},methods:{shortPressChecker:function(){!this.onClick&&this.shortPressCounter?(this.status="counting",this.shortPressCounter=0,this.countAndConfirm()):this.shortPressCounter<1?(this.shortPressCheckerTimer=window.setTimeout(this.shortPressChecker,200),this.shortPressCounter++):this.shortPressCounter=0},triggerCount:function(){"executing"!==this.status&&"counting"!==this.status&&(this.shortPressCheckerTimer&&window.clearTimeout(this.shortPressCheckerTimer),this.shortPressCheckerTimer=window.setTimeout(this.shortPressChecker,200))},countAndConfirm:function(){var _this3=this;"counting"===this.status&&(timer=window.setTimeout(function(){return _this3.counter=_this3.counter+_this3.clickDelay,_this3.counter>=_this3.duration?(_this3.status="executing",window.clearTimeout(timer),void window.setTimeout(function(){var _ref=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_){return _regenerator2.default.wrap(function(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!_this3.onConfirm){_context.next=3;break}return _context.next=3,_this3.onConfirm(_this3.value||null);case 3:if(!_this3.beforeDestroy){_context.next=5;break}return _context.abrupt("return");case 5:_this3.reset();case 6:case"end":return _context.stop()}},_callee,_this3)}));return function(_x){return _ref.apply(this,arguments)}}(),1e3*_this3.clickDelay)):void _this3.countAndConfirm()},1e3*this.clickDelay))},reset:function(){this.status="default",this.cancel()},cancel:function(){var _this4=this;"executing"!==this.status&&("default"===this.status&&(this.onClick&&window.clearTimeout(this.onClick),this.onClick=window.setTimeout(function(_){_this4.onClick&&(window.clearTimeout(_this4.onClick),_this4.onClick=!1)},1e3*this.clickDelay)),this.counter=0,timer&&window.clearTimeout(timer),this.status="default")}},computed:{countingPressingText:function(){var pressingText=this.pressingText||"";return pressingText.replace(/\{\$counter\}/gi,this.counter).replace(/\{\$rcounter\}/gi,this.duration-this.counter).replace(/\{\$duration\}/gi,this.duration)}},beforeDestroy:function(){this.beforeDestroy=!0}},"destroyed",function(){this.$emit("destroyed")})},/* 8 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.__esModule=!0;var _defineProperty=__webpack_require__(9),_defineProperty2=_interopRequireDefault(_defineProperty);exports.default=function(obj,key,value){return key in obj?(0,_defineProperty2.default)(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},/* 9 */
/***/
function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(10),__esModule:!0}},/* 10 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(11);var $Object=__webpack_require__(14).Object;module.exports=function(it,key,desc){return $Object.defineProperty(it,key,desc)}},/* 11 */
/***/
function(module,exports,__webpack_require__){var $export=__webpack_require__(12);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S+$export.F*!__webpack_require__(22),"Object",{defineProperty:__webpack_require__(18).f})},/* 12 */
/***/
function(module,exports,__webpack_require__){var global=__webpack_require__(13),core=__webpack_require__(14),ctx=__webpack_require__(15),hide=__webpack_require__(17),has=__webpack_require__(27),PROTOTYPE="prototype",$export=function(type,name,source){var key,own,out,IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,IS_WRAP=type&$export.W,exports=IS_GLOBAL?core:core[name]||(core[name]={}),expProto=exports[PROTOTYPE],target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE];IS_GLOBAL&&(source=name);for(key in source)
// contains in native
own=!IS_FORCED&&target&&void 0!==target[key],own&&has(exports,key)||(
// export native or passed
out=own?target[key]:source[key],
// prevent global pollution for namespaces
exports[key]=IS_GLOBAL&&"function"!=typeof target[key]?source[key]:IS_BIND&&own?ctx(out,global):IS_WRAP&&target[key]==out?function(C){var F=function(a,b,c){if(this instanceof C){switch(arguments.length){case 0:return new C;case 1:return new C(a);case 2:return new C(a,b)}return new C(a,b,c)}return C.apply(this,arguments)};return F[PROTOTYPE]=C[PROTOTYPE],F}(out):IS_PROTO&&"function"==typeof out?ctx(Function.call,out):out,
// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
IS_PROTO&&((exports.virtual||(exports.virtual={}))[key]=out,
// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
type&$export.R&&expProto&&!expProto[key]&&hide(expProto,key,out)))};
// type bitmap
$export.F=1,// forced
$export.G=2,// global
$export.S=4,// static
$export.P=8,// proto
$export.B=16,// bind
$export.W=32,// wrap
$export.U=64,// safe
$export.R=128,// real proto method for `library`
module.exports=$export},/* 13 */
/***/
function(module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global)},/* 14 */
/***/
function(module,exports){var core=module.exports={version:"2.6.4"};"number"==typeof __e&&(__e=core)},/* 15 */
/***/
function(module,exports,__webpack_require__){
// optional / simple context binding
var aFunction=__webpack_require__(16);module.exports=function(fn,that,length){if(aFunction(fn),void 0===that)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}},/* 16 */
/***/
function(module,exports){module.exports=function(it){if("function"!=typeof it)throw TypeError(it+" is not a function!");return it}},/* 17 */
/***/
function(module,exports,__webpack_require__){var dP=__webpack_require__(18),createDesc=__webpack_require__(26);module.exports=__webpack_require__(22)?function(object,key,value){return dP.f(object,key,createDesc(1,value))}:function(object,key,value){return object[key]=value,object}},/* 18 */
/***/
function(module,exports,__webpack_require__){var anObject=__webpack_require__(19),IE8_DOM_DEFINE=__webpack_require__(21),toPrimitive=__webpack_require__(25),dP=Object.defineProperty;exports.f=__webpack_require__(22)?Object.defineProperty:function(O,P,Attributes){if(anObject(O),P=toPrimitive(P,!0),anObject(Attributes),IE8_DOM_DEFINE)try{return dP(O,P,Attributes)}catch(e){}if("get"in Attributes||"set"in Attributes)throw TypeError("Accessors not supported!");return"value"in Attributes&&(O[P]=Attributes.value),O}},/* 19 */
/***/
function(module,exports,__webpack_require__){var isObject=__webpack_require__(20);module.exports=function(it){if(!isObject(it))throw TypeError(it+" is not an object!");return it}},/* 20 */
/***/
function(module,exports){module.exports=function(it){return"object"==typeof it?null!==it:"function"==typeof it}},/* 21 */
/***/
function(module,exports,__webpack_require__){module.exports=!__webpack_require__(22)&&!__webpack_require__(23)(function(){return 7!=Object.defineProperty(__webpack_require__(24)("div"),"a",{get:function(){return 7}}).a})},/* 22 */
/***/
function(module,exports,__webpack_require__){
// Thank's IE8 for his funny defineProperty
module.exports=!__webpack_require__(23)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 23 */
/***/
function(module,exports){module.exports=function(exec){try{return!!exec()}catch(e){return!0}}},/* 24 */
/***/
function(module,exports,__webpack_require__){var isObject=__webpack_require__(20),document=__webpack_require__(13).document,is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{}}},/* 25 */
/***/
function(module,exports,__webpack_require__){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject=__webpack_require__(20);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;if("function"==typeof(fn=it.valueOf)&&!isObject(val=fn.call(it)))return val;if(!S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value")}},/* 26 */
/***/
function(module,exports){module.exports=function(bitmap,value){return{enumerable:!(1&bitmap),configurable:!(2&bitmap),writable:!(4&bitmap),value:value}}},/* 27 */
/***/
function(module,exports){var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key)}},/* 28 */
/***/
function(module,exports,__webpack_require__){module.exports=__webpack_require__(29)},/* 29 */
/***/
function(module,exports,__webpack_require__){/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g=function(){return this}()||Function("return this")(),hadRuntime=g.regeneratorRuntime&&Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime")>=0,oldRuntime=hadRuntime&&g.regeneratorRuntime;if(
// Force reevalutation of runtime.js.
g.regeneratorRuntime=void 0,module.exports=__webpack_require__(30),hadRuntime)
// Restore the original runtime.
g.regeneratorRuntime=oldRuntime;else
// Remove the global property added by runtime.js.
try{delete g.regeneratorRuntime}catch(e){g.regeneratorRuntime=void 0}},/* 30 */
/***/
function(module,exports){/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
!function(global){"use strict";function wrap(innerFn,outerFn,self,tryLocsList){
// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);
// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
return generator._invoke=makeInvokeMethod(innerFn,self,context),generator}
// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}
// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}
// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){prototype[method]=function(arg){return this._invoke(method,arg)}})}function AsyncIterator(generator){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?Promise.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject)},function(err){invoke("throw",err,resolve,reject)}):Promise.resolve(value).then(function(unwrapped){
// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration. If the Promise is rejected, however, the
// result for this iteration will be rejected with the same
// reason. Note that rejections of yielded Promises are not
// thrown back into the generator function, as is the case
// when an awaited Promise is rejected. This difference in
// behavior between yield and await is important, because it
// allows the consumer to decide what to do with the yielded
// rejection (swallow it and continue, manually .throw it back
// into the generator, abandon iteration, whatever). With
// await, by contrast, there is no opportunity to examine the
// rejection reason outside the generator function, so the
// only option is to throw it from the await expression, and
// let the generator function handle the exception.
result.value=unwrapped,resolve(result)},reject)}reject(record.arg)}function enqueue(method,arg){function callInvokeWithMethodAndArg(){return new Promise(function(resolve,reject){invoke(method,arg,resolve,reject)})}
// If enqueue has been called before, then we want to wait until
// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
// Avoid propagating failures to Promises returned by later
// invocations of the iterator.
return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}var previousPromise;
// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
this._invoke=enqueue}function makeInvokeMethod(innerFn,self,context){var state=GenStateSuspendedStart;return function(method,arg){if(state===GenStateExecuting)throw new Error("Generator is already running");if(state===GenStateCompleted){if("throw"===method)throw arg;
// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)
// Setting context._sent for legacy support of Babel's
// function.sent implementation.
context.sent=context._sent=context.arg;else if("throw"===context.method){if(state===GenStateSuspendedStart)throw state=GenStateCompleted,context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(
// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
state=context.done?GenStateCompleted:GenStateSuspendedYield,record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state=GenStateCompleted,
// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
context.method="throw",context.arg=record.arg)}}}
// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(method===undefined){if(
// A .throw or .return when the delegate iterator has no .throw
// method always terminates the yield* loop.
context.delegate=null,"throw"===context.method){if(delegate.iterator.return&&(
// If the delegate iterator has a return method, give it a
// chance to clean up.
context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method))
// If maybeInvokeDelegate(context) changed context.method from
// "return" to "throw", let that override the TypeError below.
return ContinueSentinel;context.method="throw",context.arg=new TypeError("The iterator does not provide a 'throw' method")}return ContinueSentinel}var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;
// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
// Resume execution at the desired location (see delegateYield).
// If context.method was "throw" but the delegate handled the
// exception, let the outer generator proceed normally. If
// context.method was "next", forget context.arg since it has been
// "consumed" by the delegate iterator. If context.method was
// "return", allow the original .return call to continue in the
// outer generator.
// The delegate iterator is finished, so forget it and continue with
// the outer generator.
return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){
// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next};return next.next=next}}
// Return an iterator with no values.
return{next:doneResult}}function doneResult(){return{value:undefined,done:!0}}var undefined,Op=Object.prototype,hasOwn=Op.hasOwnProperty,$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag",inModule="object"==typeof module,runtime=global.regeneratorRuntime;if(runtime)
// Don't bother evaluating the rest of this file if the runtime was
// already defined globally.
// If regeneratorRuntime is defined globally and we're in a module,
// make the exports object identical to regeneratorRuntime.
return void(inModule&&(module.exports=runtime));
// Define the runtime globally (as expected by generated code) as either
// module.exports (if we're in a module) or a new, empty object.
runtime=global.regeneratorRuntime=inModule?module.exports:{},runtime.wrap=wrap;var GenStateSuspendedStart="suspendedStart",GenStateSuspendedYield="suspendedYield",GenStateExecuting="executing",GenStateCompleted="completed",ContinueSentinel={},IteratorPrototype={};IteratorPrototype[iteratorSymbol]=function(){return this};var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(
// This environment has a native %IteratorPrototype%; use it instead
// of the polyfill.
IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunctionPrototype[toStringTagSymbol]=GeneratorFunction.displayName="GeneratorFunction",runtime.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;
// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},runtime.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,toStringTagSymbol in genFun||(genFun[toStringTagSymbol]="GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},
// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
runtime.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),AsyncIterator.prototype[asyncIteratorSymbol]=function(){return this},runtime.AsyncIterator=AsyncIterator,
// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
runtime.async=function(innerFn,outerFn,self,tryLocsList){var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList));return runtime.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next()})},
// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
defineIteratorMethods(Gp),Gp[toStringTagSymbol]="Generator",
// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
Gp[iteratorSymbol]=function(){return this},Gp.toString=function(){return"[object Generator]"},runtime.keys=function(object){var keys=[];for(var key in object)keys.push(key);
// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}
// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
return next.done=!0,next}},runtime.values=values,Context.prototype={constructor:Context,reset:function(skipTempReset){if(this.prev=0,this.next=0,
// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)
// Not sure about the optimal order of these conditions:
"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined)},stop:function(){this.done=!0;var rootEntry=this.tryEntries[0],rootRecord=rootEntry.completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function(exception){function handle(loc,caught){
// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught}if(this.done)throw exception;for(var context=this,i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)
// Exception thrown outside of any try block that could handle
// it, so set the completion value of the entire function to
// throw the exception.
return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(
// Ignore the finally entry if control is not jumping to a
// location outside the try/catch block.
finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}
// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt")},delegateYield:function(iterable,resultName,nextLoc){
// Deliberately forget the last sent value so that we don't
// accidentally pass it on to the delegate.
return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel}}}(
// In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function(){return this}()||Function("return this")())},/* 31 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.__esModule=!0;var _promise=__webpack_require__(32),_promise2=_interopRequireDefault(_promise);exports.default=function(fn){return function(){var gen=fn.apply(this,arguments);return new _promise2.default(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}return info.done?void resolve(value):_promise2.default.resolve(value).then(function(value){step("next",value)},function(err){step("throw",err)})}return step("next")})}}},/* 32 */
/***/
function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(33),__esModule:!0}},/* 33 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(34),__webpack_require__(35),__webpack_require__(63),__webpack_require__(67),__webpack_require__(85),__webpack_require__(86),module.exports=__webpack_require__(14).Promise},/* 34 */
/***/
function(module,exports){},/* 35 */
/***/
function(module,exports,__webpack_require__){"use strict";var $at=__webpack_require__(36)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(39)(String,"String",function(iterated){this._t=String(iterated),// target
this._i=0},function(){var point,O=this._t,index=this._i;return index>=O.length?{value:void 0,done:!0}:(point=$at(O,index),this._i+=point.length,{value:point,done:!1})})},/* 36 */
/***/
function(module,exports,__webpack_require__){var toInteger=__webpack_require__(37),defined=__webpack_require__(38);
// true  -> String#at
// false -> String#codePointAt
module.exports=function(TO_STRING){return function(that,pos){var a,b,s=String(defined(that)),i=toInteger(pos),l=s.length;return i<0||i>=l?TO_STRING?"":void 0:(a=s.charCodeAt(i),a<55296||a>56319||i+1===l||(b=s.charCodeAt(i+1))<56320||b>57343?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-55296<<10)+(b-56320)+65536)}}},/* 37 */
/***/
function(module,exports){
// 7.1.4 ToInteger
var ceil=Math.ceil,floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it)}},/* 38 */
/***/
function(module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports=function(it){if(void 0==it)throw TypeError("Can't call method on  "+it);return it}},/* 39 */
/***/
function(module,exports,__webpack_require__){"use strict";var LIBRARY=__webpack_require__(40),$export=__webpack_require__(12),redefine=__webpack_require__(41),hide=__webpack_require__(17),Iterators=__webpack_require__(42),$iterCreate=__webpack_require__(43),setToStringTag=__webpack_require__(59),getPrototypeOf=__webpack_require__(61),ITERATOR=__webpack_require__(60)("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this};module.exports=function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCED){$iterCreate(Constructor,NAME,next);var methods,key,IteratorPrototype,getMethod=function(kind){if(!BUGGY&&kind in proto)return proto[kind];switch(kind){case KEYS:return function(){return new Constructor(this,kind)};case VALUES:return function(){return new Constructor(this,kind)}}return function(){return new Constructor(this,kind)}},TAG=NAME+" Iterator",DEF_VALUES=DEFAULT==VALUES,VALUES_BUG=!1,proto=Base.prototype,$native=proto[ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT],$default=$native||getMethod(DEFAULT),$entries=DEFAULT?DEF_VALUES?getMethod("entries"):$default:void 0,$anyNative="Array"==NAME?proto.entries||$native:$native;if(
// Fix native
$anyNative&&(IteratorPrototype=getPrototypeOf($anyNative.call(new Base)),IteratorPrototype!==Object.prototype&&IteratorPrototype.next&&(
// Set @@toStringTag to native iterators
setToStringTag(IteratorPrototype,TAG,!0),
// fix for some old engines
LIBRARY||"function"==typeof IteratorPrototype[ITERATOR]||hide(IteratorPrototype,ITERATOR,returnThis))),
// fix Array#{values, @@iterator}.name in V8 / FF
DEF_VALUES&&$native&&$native.name!==VALUES&&(VALUES_BUG=!0,$default=function(){return $native.call(this)}),
// Define iterator
LIBRARY&&!FORCED||!BUGGY&&!VALUES_BUG&&proto[ITERATOR]||hide(proto,ITERATOR,$default),
// Plug for library
Iterators[NAME]=$default,Iterators[TAG]=returnThis,DEFAULT)if(methods={values:DEF_VALUES?$default:getMethod(VALUES),keys:IS_SET?$default:getMethod(KEYS),entries:$entries},FORCED)for(key in methods)key in proto||redefine(proto,key,methods[key]);else $export($export.P+$export.F*(BUGGY||VALUES_BUG),NAME,methods);return methods}},/* 40 */
/***/
function(module,exports){module.exports=!0},/* 41 */
/***/
function(module,exports,__webpack_require__){module.exports=__webpack_require__(17)},/* 42 */
/***/
function(module,exports){module.exports={}},/* 43 */
/***/
function(module,exports,__webpack_require__){"use strict";var create=__webpack_require__(44),descriptor=__webpack_require__(26),setToStringTag=__webpack_require__(59),IteratorPrototype={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(17)(IteratorPrototype,__webpack_require__(60)("iterator"),function(){return this}),module.exports=function(Constructor,NAME,next){Constructor.prototype=create(IteratorPrototype,{next:descriptor(1,next)}),setToStringTag(Constructor,NAME+" Iterator")}},/* 44 */
/***/
function(module,exports,__webpack_require__){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject=__webpack_require__(19),dPs=__webpack_require__(45),enumBugKeys=__webpack_require__(57),IE_PROTO=__webpack_require__(54)("IE_PROTO"),Empty=function(){},PROTOTYPE="prototype",createDict=function(){
// Thrash, waste and sodomy: IE GC bug
var iframeDocument,iframe=__webpack_require__(24)("iframe"),i=enumBugKeys.length,lt="<",gt=">";for(iframe.style.display="none",__webpack_require__(58).appendChild(iframe),iframe.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
iframeDocument=iframe.contentWindow.document,iframeDocument.open(),iframeDocument.write(lt+"script"+gt+"document.F=Object"+lt+"/script"+gt),iframeDocument.close(),createDict=iframeDocument.F;i--;)delete createDict[PROTOTYPE][enumBugKeys[i]];return createDict()};module.exports=Object.create||function(O,Properties){var result;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==O?(Empty[PROTOTYPE]=anObject(O),result=new Empty,Empty[PROTOTYPE]=null,result[IE_PROTO]=O):result=createDict(),void 0===Properties?result:dPs(result,Properties)}},/* 45 */
/***/
function(module,exports,__webpack_require__){var dP=__webpack_require__(18),anObject=__webpack_require__(19),getKeys=__webpack_require__(46);module.exports=__webpack_require__(22)?Object.defineProperties:function(O,Properties){anObject(O);for(var P,keys=getKeys(Properties),length=keys.length,i=0;length>i;)dP.f(O,P=keys[i++],Properties[P]);return O}},/* 46 */
/***/
function(module,exports,__webpack_require__){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys=__webpack_require__(47),enumBugKeys=__webpack_require__(57);module.exports=Object.keys||function(O){return $keys(O,enumBugKeys)}},/* 47 */
/***/
function(module,exports,__webpack_require__){var has=__webpack_require__(27),toIObject=__webpack_require__(48),arrayIndexOf=__webpack_require__(51)(!1),IE_PROTO=__webpack_require__(54)("IE_PROTO");module.exports=function(object,names){var key,O=toIObject(object),i=0,result=[];for(key in O)key!=IE_PROTO&&has(O,key)&&result.push(key);
// Don't enum bug & hidden keys
for(;names.length>i;)has(O,key=names[i++])&&(~arrayIndexOf(result,key)||result.push(key));return result}},/* 48 */
/***/
function(module,exports,__webpack_require__){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject=__webpack_require__(49),defined=__webpack_require__(38);module.exports=function(it){return IObject(defined(it))}},/* 49 */
/***/
function(module,exports,__webpack_require__){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof=__webpack_require__(50);
// eslint-disable-next-line no-prototype-builtins
module.exports=Object("z").propertyIsEnumerable(0)?Object:function(it){return"String"==cof(it)?it.split(""):Object(it)}},/* 50 */
/***/
function(module,exports){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1)}},/* 51 */
/***/
function(module,exports,__webpack_require__){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject=__webpack_require__(48),toLength=__webpack_require__(52),toAbsoluteIndex=__webpack_require__(53);module.exports=function(IS_INCLUDES){return function($this,el,fromIndex){var value,O=toIObject($this),length=toLength(O.length),index=toAbsoluteIndex(fromIndex,length);
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(IS_INCLUDES&&el!=el){for(;length>index;)
// eslint-disable-next-line no-self-compare
if(value=O[index++],value!=value)return!0}else for(;length>index;index++)if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0;return!IS_INCLUDES&&-1}}},/* 52 */
/***/
function(module,exports,__webpack_require__){
// 7.1.15 ToLength
var toInteger=__webpack_require__(37),min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),9007199254740991):0}},/* 53 */
/***/
function(module,exports,__webpack_require__){var toInteger=__webpack_require__(37),max=Math.max,min=Math.min;module.exports=function(index,length){return index=toInteger(index),index<0?max(index+length,0):min(index,length)}},/* 54 */
/***/
function(module,exports,__webpack_require__){var shared=__webpack_require__(55)("keys"),uid=__webpack_require__(56);module.exports=function(key){return shared[key]||(shared[key]=uid(key))}},/* 55 */
/***/
function(module,exports,__webpack_require__){var core=__webpack_require__(14),global=__webpack_require__(13),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});(module.exports=function(key,value){return store[key]||(store[key]=void 0!==value?value:{})})("versions",[]).push({version:core.version,mode:__webpack_require__(40)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},/* 56 */
/***/
function(module,exports){var id=0,px=Math.random();module.exports=function(key){return"Symbol(".concat(void 0===key?"":key,")_",(++id+px).toString(36))}},/* 57 */
/***/
function(module,exports){
// IE 8- don't enum bug keys
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 58 */
/***/
function(module,exports,__webpack_require__){var document=__webpack_require__(13).document;module.exports=document&&document.documentElement},/* 59 */
/***/
function(module,exports,__webpack_require__){var def=__webpack_require__(18).f,has=__webpack_require__(27),TAG=__webpack_require__(60)("toStringTag");module.exports=function(it,tag,stat){it&&!has(it=stat?it:it.prototype,TAG)&&def(it,TAG,{configurable:!0,value:tag})}},/* 60 */
/***/
function(module,exports,__webpack_require__){var store=__webpack_require__(55)("wks"),uid=__webpack_require__(56),Symbol=__webpack_require__(13).Symbol,USE_SYMBOL="function"==typeof Symbol,$exports=module.exports=function(name){return store[name]||(store[name]=USE_SYMBOL&&Symbol[name]||(USE_SYMBOL?Symbol:uid)("Symbol."+name))};$exports.store=store},/* 61 */
/***/
function(module,exports,__webpack_require__){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has=__webpack_require__(27),toObject=__webpack_require__(62),IE_PROTO=__webpack_require__(54)("IE_PROTO"),ObjectProto=Object.prototype;module.exports=Object.getPrototypeOf||function(O){return O=toObject(O),has(O,IE_PROTO)?O[IE_PROTO]:"function"==typeof O.constructor&&O instanceof O.constructor?O.constructor.prototype:O instanceof Object?ObjectProto:null}},/* 62 */
/***/
function(module,exports,__webpack_require__){
// 7.1.13 ToObject(argument)
var defined=__webpack_require__(38);module.exports=function(it){return Object(defined(it))}},/* 63 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(64);for(var global=__webpack_require__(13),hide=__webpack_require__(17),Iterators=__webpack_require__(42),TO_STRING_TAG=__webpack_require__(60)("toStringTag"),DOMIterables="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),i=0;i<DOMIterables.length;i++){var NAME=DOMIterables[i],Collection=global[NAME],proto=Collection&&Collection.prototype;proto&&!proto[TO_STRING_TAG]&&hide(proto,TO_STRING_TAG,NAME),Iterators[NAME]=Iterators.Array}},/* 64 */
/***/
function(module,exports,__webpack_require__){"use strict";var addToUnscopables=__webpack_require__(65),step=__webpack_require__(66),Iterators=__webpack_require__(42),toIObject=__webpack_require__(48);
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports=__webpack_require__(39)(Array,"Array",function(iterated,kind){this._t=toIObject(iterated),// target
this._i=0,// next index
this._k=kind},function(){var O=this._t,kind=this._k,index=this._i++;return!O||index>=O.length?(this._t=void 0,step(1)):"keys"==kind?step(0,index):"values"==kind?step(0,O[index]):step(0,[index,O[index]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments=Iterators.Array,addToUnscopables("keys"),addToUnscopables("values"),addToUnscopables("entries")},/* 65 */
/***/
function(module,exports){module.exports=function(){}},/* 66 */
/***/
function(module,exports){module.exports=function(done,value){return{value:value,done:!!done}}},/* 67 */
/***/
function(module,exports,__webpack_require__){"use strict";var Internal,newGenericPromiseCapability,OwnPromiseCapability,Wrapper,LIBRARY=__webpack_require__(40),global=__webpack_require__(13),ctx=__webpack_require__(15),classof=__webpack_require__(68),$export=__webpack_require__(12),isObject=__webpack_require__(20),aFunction=__webpack_require__(16),anInstance=__webpack_require__(69),forOf=__webpack_require__(70),speciesConstructor=__webpack_require__(74),task=__webpack_require__(75).set,microtask=__webpack_require__(77)(),newPromiseCapabilityModule=__webpack_require__(78),perform=__webpack_require__(79),userAgent=__webpack_require__(80),promiseResolve=__webpack_require__(81),PROMISE="Promise",TypeError=global.TypeError,process=global.process,versions=process&&process.versions,v8=versions&&versions.v8||"",$Promise=global[PROMISE],isNode="process"==classof(process),empty=function(){},newPromiseCapability=newGenericPromiseCapability=newPromiseCapabilityModule.f,USE_NATIVE=!!function(){try{
// correct subclassing with @@species support
var promise=$Promise.resolve(1),FakePromise=(promise.constructor={})[__webpack_require__(60)("species")]=function(exec){exec(empty,empty)};
// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(isNode||"function"==typeof PromiseRejectionEvent)&&promise.then(empty)instanceof FakePromise&&0!==v8.indexOf("6.6")&&userAgent.indexOf("Chrome/66")===-1}catch(e){}}(),isThenable=function(it){var then;return!(!isObject(it)||"function"!=typeof(then=it.then))&&then},notify=function(promise,isReject){if(!promise._n){promise._n=!0;var chain=promise._c;microtask(function(){for(var value=promise._v,ok=1==promise._s,i=0,run=function(reaction){var result,then,exited,handler=ok?reaction.ok:reaction.fail,resolve=reaction.resolve,reject=reaction.reject,domain=reaction.domain;try{handler?(ok||(2==promise._h&&onHandleUnhandled(promise),promise._h=1),handler===!0?result=value:(domain&&domain.enter(),result=handler(value),// may throw
domain&&(domain.exit(),exited=!0)),result===reaction.promise?reject(TypeError("Promise-chain cycle")):(then=isThenable(result))?then.call(result,resolve,reject):resolve(result)):reject(value)}catch(e){domain&&!exited&&domain.exit(),reject(e)}};chain.length>i;)run(chain[i++]);// variable length - can't use forEach
promise._c=[],promise._n=!1,isReject&&!promise._h&&onUnhandled(promise)})}},onUnhandled=function(promise){task.call(global,function(){var result,handler,console,value=promise._v,unhandled=isUnhandled(promise);if(unhandled&&(result=perform(function(){isNode?process.emit("unhandledRejection",value,promise):(handler=global.onunhandledrejection)?handler({promise:promise,reason:value}):(console=global.console)&&console.error&&console.error("Unhandled promise rejection",value)}),
// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
promise._h=isNode||isUnhandled(promise)?2:1),promise._a=void 0,unhandled&&result.e)throw result.v})},isUnhandled=function(promise){return 1!==promise._h&&0===(promise._a||promise._c).length},onHandleUnhandled=function(promise){task.call(global,function(){var handler;isNode?process.emit("rejectionHandled",promise):(handler=global.onrejectionhandled)&&handler({promise:promise,reason:promise._v})})},$reject=function(value){var promise=this;promise._d||(promise._d=!0,promise=promise._w||promise,// unwrap
promise._v=value,promise._s=2,promise._a||(promise._a=promise._c.slice()),notify(promise,!0))},$resolve=function(value){var then,promise=this;if(!promise._d){promise._d=!0,promise=promise._w||promise;// unwrap
try{if(promise===value)throw TypeError("Promise can't be resolved itself");(then=isThenable(value))?microtask(function(){var wrapper={_w:promise,_d:!1};// wrap
try{then.call(value,ctx($resolve,wrapper,1),ctx($reject,wrapper,1))}catch(e){$reject.call(wrapper,e)}}):(promise._v=value,promise._s=1,notify(promise,!1))}catch(e){$reject.call({_w:promise,_d:!1},e)}}};
// constructor polyfill
USE_NATIVE||(
// 25.4.3.1 Promise(executor)
$Promise=function(executor){anInstance(this,$Promise,PROMISE,"_h"),aFunction(executor),Internal.call(this);try{executor(ctx($resolve,this,1),ctx($reject,this,1))}catch(err){$reject.call(this,err)}},
// eslint-disable-next-line no-unused-vars
Internal=function(executor){this._c=[],// <- awaiting reactions
this._a=void 0,// <- checked in isUnhandled reactions
this._s=0,// <- state
this._d=!1,// <- done
this._v=void 0,// <- value
this._h=0,// <- rejection state, 0 - default, 1 - handled, 2 - unhandled
this._n=!1},Internal.prototype=__webpack_require__(82)($Promise.prototype,{
// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function(onFulfilled,onRejected){var reaction=newPromiseCapability(speciesConstructor(this,$Promise));return reaction.ok="function"!=typeof onFulfilled||onFulfilled,reaction.fail="function"==typeof onRejected&&onRejected,reaction.domain=isNode?process.domain:void 0,this._c.push(reaction),this._a&&this._a.push(reaction),this._s&&notify(this,!1),reaction.promise},
// 25.4.5.1 Promise.prototype.catch(onRejected)
catch:function(onRejected){return this.then(void 0,onRejected)}}),OwnPromiseCapability=function(){var promise=new Internal;this.promise=promise,this.resolve=ctx($resolve,promise,1),this.reject=ctx($reject,promise,1)},newPromiseCapabilityModule.f=newPromiseCapability=function(C){return C===$Promise||C===Wrapper?new OwnPromiseCapability(C):newGenericPromiseCapability(C)}),$export($export.G+$export.W+$export.F*!USE_NATIVE,{Promise:$Promise}),__webpack_require__(59)($Promise,PROMISE),__webpack_require__(83)(PROMISE),Wrapper=__webpack_require__(14)[PROMISE],
// statics
$export($export.S+$export.F*!USE_NATIVE,PROMISE,{
// 25.4.4.5 Promise.reject(r)
reject:function(r){var capability=newPromiseCapability(this),$$reject=capability.reject;return $$reject(r),capability.promise}}),$export($export.S+$export.F*(LIBRARY||!USE_NATIVE),PROMISE,{
// 25.4.4.6 Promise.resolve(x)
resolve:function(x){return promiseResolve(LIBRARY&&this===Wrapper?$Promise:this,x)}}),$export($export.S+$export.F*!(USE_NATIVE&&__webpack_require__(84)(function(iter){$Promise.all(iter).catch(empty)})),PROMISE,{
// 25.4.4.1 Promise.all(iterable)
all:function(iterable){var C=this,capability=newPromiseCapability(C),resolve=capability.resolve,reject=capability.reject,result=perform(function(){var values=[],index=0,remaining=1;forOf(iterable,!1,function(promise){var $index=index++,alreadyCalled=!1;values.push(void 0),remaining++,C.resolve(promise).then(function(value){alreadyCalled||(alreadyCalled=!0,values[$index]=value,--remaining||resolve(values))},reject)}),--remaining||resolve(values)});return result.e&&reject(result.v),capability.promise},
// 25.4.4.4 Promise.race(iterable)
race:function(iterable){var C=this,capability=newPromiseCapability(C),reject=capability.reject,result=perform(function(){forOf(iterable,!1,function(promise){C.resolve(promise).then(capability.resolve,reject)})});return result.e&&reject(result.v),capability.promise}})},/* 68 */
/***/
function(module,exports,__webpack_require__){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof=__webpack_require__(50),TAG=__webpack_require__(60)("toStringTag"),ARG="Arguments"==cof(function(){return arguments}()),tryGet=function(it,key){try{return it[key]}catch(e){}};module.exports=function(it){var O,T,B;return void 0===it?"Undefined":null===it?"Null":"string"==typeof(T=tryGet(O=Object(it),TAG))?T:ARG?cof(O):"Object"==(B=cof(O))&&"function"==typeof O.callee?"Arguments":B}},/* 69 */
/***/
function(module,exports){module.exports=function(it,Constructor,name,forbiddenField){if(!(it instanceof Constructor)||void 0!==forbiddenField&&forbiddenField in it)throw TypeError(name+": incorrect invocation!");return it}},/* 70 */
/***/
function(module,exports,__webpack_require__){var ctx=__webpack_require__(15),call=__webpack_require__(71),isArrayIter=__webpack_require__(72),anObject=__webpack_require__(19),toLength=__webpack_require__(52),getIterFn=__webpack_require__(73),BREAK={},RETURN={},exports=module.exports=function(iterable,entries,fn,that,ITERATOR){var length,step,iterator,result,iterFn=ITERATOR?function(){return iterable}:getIterFn(iterable),f=ctx(fn,that,entries?2:1),index=0;if("function"!=typeof iterFn)throw TypeError(iterable+" is not iterable!");
// fast case for arrays with default iterator
if(isArrayIter(iterFn)){for(length=toLength(iterable.length);length>index;index++)if(result=entries?f(anObject(step=iterable[index])[0],step[1]):f(iterable[index]),result===BREAK||result===RETURN)return result}else for(iterator=iterFn.call(iterable);!(step=iterator.next()).done;)if(result=call(iterator,f,step.value,entries),result===BREAK||result===RETURN)return result};exports.BREAK=BREAK,exports.RETURN=RETURN},/* 71 */
/***/
function(module,exports,__webpack_require__){
// call something on iterator step with safe closing on error
var anObject=__webpack_require__(19);module.exports=function(iterator,fn,value,entries){try{return entries?fn(anObject(value)[0],value[1]):fn(value)}catch(e){var ret=iterator.return;throw void 0!==ret&&anObject(ret.call(iterator)),e}}},/* 72 */
/***/
function(module,exports,__webpack_require__){
// check on default Array iterator
var Iterators=__webpack_require__(42),ITERATOR=__webpack_require__(60)("iterator"),ArrayProto=Array.prototype;module.exports=function(it){return void 0!==it&&(Iterators.Array===it||ArrayProto[ITERATOR]===it)}},/* 73 */
/***/
function(module,exports,__webpack_require__){var classof=__webpack_require__(68),ITERATOR=__webpack_require__(60)("iterator"),Iterators=__webpack_require__(42);module.exports=__webpack_require__(14).getIteratorMethod=function(it){if(void 0!=it)return it[ITERATOR]||it["@@iterator"]||Iterators[classof(it)]}},/* 74 */
/***/
function(module,exports,__webpack_require__){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject=__webpack_require__(19),aFunction=__webpack_require__(16),SPECIES=__webpack_require__(60)("species");module.exports=function(O,D){var S,C=anObject(O).constructor;return void 0===C||void 0==(S=anObject(C)[SPECIES])?D:aFunction(S)}},/* 75 */
/***/
function(module,exports,__webpack_require__){var defer,channel,port,ctx=__webpack_require__(15),invoke=__webpack_require__(76),html=__webpack_require__(58),cel=__webpack_require__(24),global=__webpack_require__(13),process=global.process,setTask=global.setImmediate,clearTask=global.clearImmediate,MessageChannel=global.MessageChannel,Dispatch=global.Dispatch,counter=0,queue={},ONREADYSTATECHANGE="onreadystatechange",run=function(){var id=+this;
// eslint-disable-next-line no-prototype-builtins
if(queue.hasOwnProperty(id)){var fn=queue[id];delete queue[id],fn()}},listener=function(event){run.call(event.data)};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
setTask&&clearTask||(setTask=function(fn){for(var args=[],i=1;arguments.length>i;)args.push(arguments[i++]);return queue[++counter]=function(){
// eslint-disable-next-line no-new-func
invoke("function"==typeof fn?fn:Function(fn),args)},defer(counter),counter},clearTask=function(id){delete queue[id]},
// Node.js 0.8-
"process"==__webpack_require__(50)(process)?defer=function(id){process.nextTick(ctx(run,id,1))}:Dispatch&&Dispatch.now?defer=function(id){Dispatch.now(ctx(run,id,1))}:MessageChannel?(channel=new MessageChannel,port=channel.port2,channel.port1.onmessage=listener,defer=ctx(port.postMessage,port,1)):global.addEventListener&&"function"==typeof postMessage&&!global.importScripts?(defer=function(id){global.postMessage(id+"","*")},global.addEventListener("message",listener,!1)):defer=ONREADYSTATECHANGE in cel("script")?function(id){html.appendChild(cel("script"))[ONREADYSTATECHANGE]=function(){html.removeChild(this),run.call(id)}}:function(id){setTimeout(ctx(run,id,1),0)}),module.exports={set:setTask,clear:clearTask}},/* 76 */
/***/
function(module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports=function(fn,args,that){var un=void 0===that;switch(args.length){case 0:return un?fn():fn.call(that);case 1:return un?fn(args[0]):fn.call(that,args[0]);case 2:return un?fn(args[0],args[1]):fn.call(that,args[0],args[1]);case 3:return un?fn(args[0],args[1],args[2]):fn.call(that,args[0],args[1],args[2]);case 4:return un?fn(args[0],args[1],args[2],args[3]):fn.call(that,args[0],args[1],args[2],args[3])}return fn.apply(that,args)}},/* 77 */
/***/
function(module,exports,__webpack_require__){var global=__webpack_require__(13),macrotask=__webpack_require__(75).set,Observer=global.MutationObserver||global.WebKitMutationObserver,process=global.process,Promise=global.Promise,isNode="process"==__webpack_require__(50)(process);module.exports=function(){var head,last,notify,flush=function(){var parent,fn;for(isNode&&(parent=process.domain)&&parent.exit();head;){fn=head.fn,head=head.next;try{fn()}catch(e){throw head?notify():last=void 0,e}}last=void 0,parent&&parent.enter()};
// Node.js
if(isNode)notify=function(){process.nextTick(flush)};else if(!Observer||global.navigator&&global.navigator.standalone)if(Promise&&Promise.resolve){
// Promise.resolve without an argument throws an error in LG WebOS 2
var promise=Promise.resolve(void 0);notify=function(){promise.then(flush)}}else notify=function(){
// strange IE + webpack dev server bug - use .call(global)
macrotask.call(global,flush)};else{var toggle=!0,node=document.createTextNode("");new Observer(flush).observe(node,{characterData:!0}),// eslint-disable-line no-new
notify=function(){node.data=toggle=!toggle}}return function(fn){var task={fn:fn,next:void 0};last&&(last.next=task),head||(head=task,notify()),last=task}}},/* 78 */
/***/
function(module,exports,__webpack_require__){"use strict";function PromiseCapability(C){var resolve,reject;this.promise=new C(function($$resolve,$$reject){if(void 0!==resolve||void 0!==reject)throw TypeError("Bad Promise constructor");resolve=$$resolve,reject=$$reject}),this.resolve=aFunction(resolve),this.reject=aFunction(reject)}
// 25.4.1.5 NewPromiseCapability(C)
var aFunction=__webpack_require__(16);module.exports.f=function(C){return new PromiseCapability(C)}},/* 79 */
/***/
function(module,exports){module.exports=function(exec){try{return{e:!1,v:exec()}}catch(e){return{e:!0,v:e}}}},/* 80 */
/***/
function(module,exports,__webpack_require__){var global=__webpack_require__(13),navigator=global.navigator;module.exports=navigator&&navigator.userAgent||""},/* 81 */
/***/
function(module,exports,__webpack_require__){var anObject=__webpack_require__(19),isObject=__webpack_require__(20),newPromiseCapability=__webpack_require__(78);module.exports=function(C,x){if(anObject(C),isObject(x)&&x.constructor===C)return x;var promiseCapability=newPromiseCapability.f(C),resolve=promiseCapability.resolve;return resolve(x),promiseCapability.promise}},/* 82 */
/***/
function(module,exports,__webpack_require__){var hide=__webpack_require__(17);module.exports=function(target,src,safe){for(var key in src)safe&&target[key]?target[key]=src[key]:hide(target,key,src[key]);return target}},/* 83 */
/***/
function(module,exports,__webpack_require__){"use strict";var global=__webpack_require__(13),core=__webpack_require__(14),dP=__webpack_require__(18),DESCRIPTORS=__webpack_require__(22),SPECIES=__webpack_require__(60)("species");module.exports=function(KEY){var C="function"==typeof core[KEY]?core[KEY]:global[KEY];DESCRIPTORS&&C&&!C[SPECIES]&&dP.f(C,SPECIES,{configurable:!0,get:function(){return this}})}},/* 84 */
/***/
function(module,exports,__webpack_require__){var ITERATOR=__webpack_require__(60)("iterator"),SAFE_CLOSING=!1;try{var riter=[7][ITERATOR]();riter.return=function(){SAFE_CLOSING=!0},
// eslint-disable-next-line no-throw-literal
Array.from(riter,function(){throw 2})}catch(e){}module.exports=function(exec,skipClosing){if(!skipClosing&&!SAFE_CLOSING)return!1;var safe=!1;try{var arr=[7],iter=arr[ITERATOR]();iter.next=function(){return{done:safe=!0}},arr[ITERATOR]=function(){return iter},exec(arr)}catch(e){}return safe}},/* 85 */
/***/
function(module,exports,__webpack_require__){
// https://github.com/tc39/proposal-promise-finally
"use strict";var $export=__webpack_require__(12),core=__webpack_require__(14),global=__webpack_require__(13),speciesConstructor=__webpack_require__(74),promiseResolve=__webpack_require__(81);$export($export.P+$export.R,"Promise",{finally:function(onFinally){var C=speciesConstructor(this,core.Promise||global.Promise),isFunction="function"==typeof onFinally;return this.then(isFunction?function(x){return promiseResolve(C,onFinally()).then(function(){return x})}:onFinally,isFunction?function(e){return promiseResolve(C,onFinally()).then(function(){throw e})}:onFinally)}})},/* 86 */
/***/
function(module,exports,__webpack_require__){"use strict";
// https://github.com/tc39/proposal-promise-try
var $export=__webpack_require__(12),newPromiseCapability=__webpack_require__(78),perform=__webpack_require__(79);$export($export.S,"Promise",{try:function(callbackfn){var promiseCapability=newPromiseCapability.f(this),result=perform(callbackfn);return(result.e?promiseCapability.reject:promiseCapability.resolve)(result.v),promiseCapability.promise}})},/* 87 */
/***/
function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"longpress-button",class:_vm.status,on:{touchend:function($event){return _vm.cancel()},touchstart:function($event){return $event.preventDefault(),_vm.triggerCount()},mouseup:function($event){return _vm.cancel()},mousedown:function($event){return $event.preventDefault(),_vm.triggerCount()}}},[_c("div",["default"===_vm.status?_vm._t("default"):_vm._e(),_vm._v(" "),"counting"===_vm.status?_c("span",[_vm._v(_vm._s(_vm.countingPressingText||"Keep pressing"))]):_vm._e(),_vm._v(" "),"executing"===_vm.status&&null!==_vm.actionText?_c("span",[_vm._v(_vm._s(_vm.actionText||"Please wait..."))]):_vm._e()],2),_vm._v(" "),_c("span",{staticClass:"progress-bar",style:"animation-duration: "+(_vm.duration-_vm.clickDelay)+"s;"})])},staticRenderFns:[]}}])});