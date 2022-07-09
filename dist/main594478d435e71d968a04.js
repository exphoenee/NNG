/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* styling the app */\n#app {\n  width: 100%;\n  height: 100%;\n  color: black;\n  /* styling the stage, yeah i know it is not a good solution, but i would lke to show you that can i solve another way also*/\n}\n\n#app::after {\n  background: lightcoral;\n  color: white;\n  font-weight: 500;\n  border-radius: 0.125rem;\n  box-shadow: 0.0625rem 0.125rem 0.25rem gray;\n  content: \"Stage\";\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 40rem;\n  height: 8rem;\n}\n\n/* styling the sector */\n.sector-container {\n  padding: 5px;\n  position: fixed;\n  display: block;\n}\n\n/* this is the naming of the sectors */\n.title p {\n  text-align: center;\n}\n\n/* styling the rows */\n.row {\n  display: flex;\n  margin: auto 0;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.9rem;\n}\n\n/* styling the seats */\n.seat {\n  position: relative;\n  user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  color: white;\n  font-weight: 900;\n  overflow: hidden;\n  margin: 0.1875rem;\n  aspect-ratio: 1;\n  padding: 0.1875rem;\n  min-width: 0.625rem;\n  border-radius: 0.125rem;\n  box-shadow: 0.0625rem 0.125rem 0.25rem gray;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.7rem;\n  border-bottom: 2px solid gray;\n}\n\n/* placeholder divs to make the side balcony skewed */\n.offset {\n  position: relative;\n  overflow: hidden;\n  margin: 0.1875rem;\n  aspect-ratio: 1;\n  padding: 0.1875rem;\n  min-width: 0.3125rem;\n  border-radius: 0.125rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.25rem;\n}\n\n/* making the occupied seats to looking another way */\n.seat.occupied::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  display: block;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 100%;\n  height: 100%;\n}\n\n/* styleing the seat categories*/\n.category-0 {\n  background-color: #afefa5;\n}\n\n.category-1 {\n  background-color: #a5d9ef;\n}\n\n.category-2 {\n  background-color: #efdba5;\n}\n\n.category-3 {\n  background-color: #efa5a5;\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss"],"names":[],"mappings":"AAAA,oBAAA;AACA;EACE,WAAA;EACA,YAAA;EACA,YAAA;EACA,2HAAA;AACF;;AACA;EACE,sBAAA;EACA,YAAA;EACA,gBAAA;EACA,uBAAA;EACA,2CAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,YAAA;EACA,YAAA;AAEF;;AAAA,uBAAA;AACA;EACE,YAAA;EACA,eAAA;EACA,cAAA;AAGF;;AADA,sCAAA;AACA;EACE,kBAAA;AAIF;;AAFA,qBAAA;AACA;EACE,aAAA;EACA,cAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;AAKF;;AAHA,sBAAA;AACA;EACE,kBAAA;EACA,iBAAA;EACA,yBAAA;EACA,wBAAA;EACA,sBAAA;EACA,qBAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,2CAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,6BAAA;AAMF;;AAJA,qDAAA;AACA;EACE,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,oBAAA;EACA,uBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAOF;;AALA,qDAAA;AACA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,cAAA;EACA,oCAAA;EACA,WAAA;EACA,YAAA;AAQF;;AANA,gCAAA;AACA;EACE,yBAAA;AASF;;AAPA;EACE,yBAAA;AAUF;;AARA;EACE,yBAAA;AAWF;;AATA;EACE,yBAAA;AAYF","sourcesContent":["/* styling the app */\r\n#app {\r\n  width: 100%;\r\n  height: 100%;\r\n  color: black;\r\n  /* styling the stage, yeah i know it is not a good solution, but i would lke to show you that can i solve another way also*/\r\n}\r\n#app::after {\r\n  background: lightcoral;\r\n  color: white;\r\n  font-weight: 500;\r\n  border-radius: 0.125rem;\r\n  box-shadow: 0.0625rem 0.125rem 0.25rem gray;\r\n  content: \"Stage\";\r\n  position: fixed;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  top: 10%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 40rem;\r\n  height: 8rem;\r\n}\r\n/* styling the sector */\r\n.sector-container {\r\n  padding: 5px;\r\n  position: fixed;\r\n  display: block;\r\n}\r\n/* this is the naming of the sectors */\r\n.title p {\r\n  text-align: center;\r\n}\r\n/* styling the rows */\r\n.row {\r\n  display: flex;\r\n  margin: auto 0;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 0.9rem;\r\n}\r\n/* styling the seats */\r\n.seat {\r\n  position: relative;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  color: white;\r\n  font-weight: 900;\r\n  overflow: hidden;\r\n  margin: 0.1875rem;\r\n  aspect-ratio: 1;\r\n  padding: 0.1875rem;\r\n  min-width: 0.625rem;\r\n  border-radius: 0.125rem;\r\n  box-shadow: 0.0625rem 0.125rem 0.25rem gray;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 0.7rem;\r\n  border-bottom: 2px solid gray;\r\n}\r\n/* placeholder divs to make the side balcony skewed */\r\n.offset {\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin: 0.1875rem;\r\n  aspect-ratio: 1;\r\n  padding: 0.1875rem;\r\n  min-width: 0.3125rem;\r\n  border-radius: 0.125rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 0.25rem;\r\n}\r\n/* making the occupied seats to looking another way */\r\n.seat.occupied::after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  content: \"\";\r\n  display: block;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n/* styleing the seat categories*/\r\n.category-0 {\r\n  background-color: #afefa5;\r\n}\r\n.category-1 {\r\n  background-color: #a5d9ef;\r\n}\r\n.category-2 {\r\n  background-color: #efdba5;\r\n}\r\n.category-3 {\r\n  background-color: #efa5a5;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/domelemjs/dist/index.js":
/*!**********************************************!*\
  !*** ./node_modules/domelemjs/dist/index.js ***!
  \**********************************************/
/***/ (function(module) {

!function webpackUniversalModuleDefinition(e,t){ true?module.exports=t():0}(this,(()=>(()=>{"use strict";var e={d:(t,a)=>{for(var o in a)e.o(a,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:a[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function makeThatArray(e){return e?Array.isArray(e)?e:[e]:[]}e.r(t),e.d(t,{a:()=>a,abbr:()=>o,acronym:()=>r,address:()=>i,applet:()=>n,area:()=>l,article:()=>s,aside:()=>d,audio:()=>c,b:()=>u,base:()=>p,basefont:()=>m,bdi:()=>f,bdo:()=>b,big:()=>h,blockquote:()=>y,body:()=>O,br:()=>A,button:()=>E,canvas:()=>g,caption:()=>k,center:()=>U,cite:()=>v,code:()=>j,col:()=>T,colgroup:()=>S,data:()=>L,datalist:()=>I,dd:()=>D,default:()=>createDOMElem,del:()=>C,details:()=>z,dfn:()=>R,dialog:()=>N,dir:()=>Y,div:()=>w,dl:()=>M,dt:()=>Z,em:()=>x,embed:()=>G,fieldset:()=>H,figcaption:()=>P,figure:()=>q,font:()=>K,footer:()=>J,form:()=>V,frame:()=>B,frameset:()=>W,h1:()=>F,h2:()=>Q,h3:()=>X,h4:()=>$,h5:()=>_,h6:()=>ee,head:()=>te,header:()=>ae,hr:()=>oe,html:()=>re,i:()=>ie,iframe:()=>ne,img:()=>le,input:()=>se,ins:()=>de,kbd:()=>ce,label:()=>ue,legend:()=>pe,li:()=>me,link:()=>fe,main:()=>be,map:()=>he,mark:()=>ye,meta:()=>Oe,meter:()=>Ae,nav:()=>Ee,noframes:()=>ge,noscript:()=>ke,object:()=>Ue,ol:()=>ve,optgroup:()=>je,option:()=>Te,output:()=>Se,p:()=>Le,param:()=>Ie,picture:()=>De,pre:()=>Ce,progress:()=>ze,q:()=>Re,rp:()=>Ne,rt:()=>Ye,ruby:()=>we,s:()=>Me,samp:()=>Ze,script:()=>xe,section:()=>Ge,select:()=>He,small:()=>Pe,source:()=>qe,span:()=>Ke,strike:()=>Je,strong:()=>Ve,style:()=>Be,sub:()=>We,summary:()=>Fe,sup:()=>Qe,svg:()=>Xe,table:()=>$e,tbody:()=>_e,td:()=>et,template:()=>tt,textarea:()=>at,tfoot:()=>ot,th:()=>rt,thead:()=>it,time:()=>nt,title:()=>lt,tr:()=>st,track:()=>dt,tt:()=>ct,u:()=>ut,ul:()=>pt,video:()=>mt,wbr:()=>ft});const[a,o,r,i,n,l,s,d,c,u,p,m,f,b,h,y,O,A,E,g,k,U,v,j,T,S,L,I,D,C,z,R,N,Y,w,M,Z,x,G,H,P,q,K,J,V,B,W,F,Q,X,$,_,ee,te,ae,oe,re,ie,ne,le,se,de,ce,ue,pe,me,fe,be,he,ye,Oe,Ae,Ee,ge,ke,Ue,ve,je,Te,Se,Le,Ie,De,Ce,ze,Re,Ne,Ye,we,Me,Ze,xe,Ge,He,Pe,qe,Ke,Je,Ve,Be,We,Fe,Qe,Xe,$e,_e,et,tt,at,ot,rt,it,nt,lt,st,dt,ct,ut,pt,mt,ft]=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","video","wbr"];function createDOMElem({tag:e,content:t,text:a,attrs:o,style:r,children:i,parent:n,handleEvent:l,append:s=!0}){let d=document.createElement(e);t&&(d.innerHTML=t),a&&(d.textContent=a);const c=["class","id"];if(o&&makeThatArray(o).forEach((e=>Object.keys(e).forEach((t=>{e[t]&&("checked"===t?d.checked=e[t]:"dataset"===t?makeThatArray(e[t]).map((e=>Object.keys(e).forEach((t=>d.dataset[t]=e[t])))):d.setAttribute(t,makeThatArray(e[t]).map((e=>c.includes(t)?function noSpecChars(e,t=!1){let a={Ă:"A",Ắ:"A",Ặ:"A",Ằ:"A",Ẳ:"A",Ẵ:"A",Ǎ:"A",Â:"A",Ấ:"A",Ậ:"A",Ầ:"A",Ẩ:"A",Ẫ:"A",Ä:"A",Ǟ:"A",Ȧ:"A",Ǡ:"A",Ạ:"A",Ȁ:"A",À:"A",Ả:"A",Ȃ:"A",Ā:"A",Ą:"A",Å:"A",Ǻ:"A",Ḁ:"A",Ⱥ:"A",Ã:"A",Ꜳ:"AA",Æ:"AE",Ǽ:"AE",Ǣ:"AE",Ꜵ:"AO",Ꜷ:"AU",Ꜹ:"AV",Ꜻ:"AV",Ꜽ:"AY",Ḃ:"B",Ḅ:"B",Ɓ:"B",Ḇ:"B",Ƀ:"B",Ƃ:"B",Ć:"C",Č:"C",Ç:"C",Ḉ:"C",Ĉ:"C",Ċ:"C",Ƈ:"C",Ȼ:"C",Ď:"D",Ḑ:"D",Ḓ:"D",Ḋ:"D",Ḍ:"D",Ɗ:"D",Ḏ:"D",ǲ:"D",ǅ:"D",Đ:"D",Ƌ:"D",Ǳ:"DZ",Ǆ:"DZ",É:"E",Ĕ:"E",Ě:"E",Ȩ:"E",Ḝ:"E",Ê:"E",Ế:"E",Ệ:"E",Ề:"E",Ể:"E",Ễ:"E",Ḙ:"E",Ë:"E",Ė:"E",Ẹ:"E",Ȅ:"E",È:"E",Ẻ:"E",Ȇ:"E",Ē:"E",Ḗ:"E",Ḕ:"E",Ę:"E",Ɇ:"E",Ẽ:"E",Ḛ:"E",Ꝫ:"ET",Ḟ:"F",Ƒ:"F",Ǵ:"G",Ğ:"G",Ǧ:"G",Ģ:"G",Ĝ:"G",Ġ:"G",Ɠ:"G",Ḡ:"G",Ǥ:"G",Ḫ:"H",Ȟ:"H",Ḩ:"H",Ĥ:"H",Ⱨ:"H",Ḧ:"H",Ḣ:"H",Ḥ:"H",Ħ:"H",Í:"I",Ĭ:"I",Ǐ:"I",Î:"I",Ï:"I",Ḯ:"I",İ:"I",Ị:"I",Ȉ:"I",Ì:"I",Ỉ:"I",Ȋ:"I",Ī:"I",Į:"I",Ɨ:"I",Ĩ:"I",Ḭ:"I",Ꝺ:"D",Ꝼ:"F",Ᵹ:"G",Ꞃ:"R",Ꞅ:"S",Ꞇ:"T",Ꝭ:"IS",Ĵ:"J",Ɉ:"J",Ḱ:"K",Ǩ:"K",Ķ:"K",Ⱪ:"K",Ꝃ:"K",Ḳ:"K",Ƙ:"K",Ḵ:"K",Ꝁ:"K",Ꝅ:"K",Ĺ:"L",Ƚ:"L",Ľ:"L",Ļ:"L",Ḽ:"L",Ḷ:"L",Ḹ:"L",Ⱡ:"L",Ꝉ:"L",Ḻ:"L",Ŀ:"L",Ɫ:"L",ǈ:"L",Ł:"L",Ǉ:"LJ",Ḿ:"M",Ṁ:"M",Ṃ:"M",Ɱ:"M",Ń:"N",Ň:"N",Ņ:"N",Ṋ:"N",Ṅ:"N",Ṇ:"N",Ǹ:"N",Ɲ:"N",Ṉ:"N",Ƞ:"N",ǋ:"N",Ñ:"N",Ǌ:"NJ",Ó:"O",Ŏ:"O",Ǒ:"O",Ô:"O",Ố:"O",Ộ:"O",Ồ:"O",Ổ:"O",Ỗ:"O",Ö:"O",Ȫ:"O",Ȯ:"O",Ȱ:"O",Ọ:"O",Ő:"O",Ȍ:"O",Ò:"O",Ỏ:"O",Ơ:"O",Ớ:"O",Ợ:"O",Ờ:"O",Ở:"O",Ỡ:"O",Ȏ:"O",Ꝋ:"O",Ꝍ:"O",Ō:"O",Ṓ:"O",Ṑ:"O",Ɵ:"O",Ǫ:"O",Ǭ:"O",Ø:"O",Ǿ:"O",Õ:"O",Ṍ:"O",Ṏ:"O",Ȭ:"O",Ƣ:"OI",Ꝏ:"OO",Ɛ:"E",Ɔ:"O",Ȣ:"OU",Ṕ:"P",Ṗ:"P",Ꝓ:"P",Ƥ:"P",Ꝕ:"P",Ᵽ:"P",Ꝑ:"P",Ꝙ:"Q",Ꝗ:"Q",Ŕ:"R",Ř:"R",Ŗ:"R",Ṙ:"R",Ṛ:"R",Ṝ:"R",Ȑ:"R",Ȓ:"R",Ṟ:"R",Ɍ:"R",Ɽ:"R",Ꜿ:"C",Ǝ:"E",Ś:"S",Ṥ:"S",Š:"S",Ṧ:"S",Ş:"S",Ŝ:"S",Ș:"S",Ṡ:"S",Ṣ:"S",Ṩ:"S",Ť:"T",Ţ:"T",Ṱ:"T",Ț:"T",Ⱦ:"T",Ṫ:"T",Ṭ:"T",Ƭ:"T",Ṯ:"T",Ʈ:"T",Ŧ:"T",Ɐ:"A",Ꞁ:"L",Ɯ:"M",Ʌ:"V",Ꜩ:"TZ",Ú:"U",Ŭ:"U",Ǔ:"U",Û:"U",Ṷ:"U",Ü:"U",Ǘ:"U",Ǚ:"U",Ǜ:"U",Ǖ:"U",Ṳ:"U",Ụ:"U",Ű:"U",Ȕ:"U",Ù:"U",Ủ:"U",Ư:"U",Ứ:"U",Ự:"U",Ừ:"U",Ử:"U",Ữ:"U",Ȗ:"U",Ū:"U",Ṻ:"U",Ų:"U",Ů:"U",Ũ:"U",Ṹ:"U",Ṵ:"U",Ꝟ:"V",Ṿ:"V",Ʋ:"V",Ṽ:"V",Ꝡ:"VY",Ẃ:"W",Ŵ:"W",Ẅ:"W",Ẇ:"W",Ẉ:"W",Ẁ:"W",Ⱳ:"W",Ẍ:"X",Ẋ:"X",Ý:"Y",Ŷ:"Y",Ÿ:"Y",Ẏ:"Y",Ỵ:"Y",Ỳ:"Y",Ƴ:"Y",Ỷ:"Y",Ỿ:"Y",Ȳ:"Y",Ɏ:"Y",Ỹ:"Y",Ź:"Z",Ž:"Z",Ẑ:"Z",Ⱬ:"Z",Ż:"Z",Ẓ:"Z",Ȥ:"Z",Ẕ:"Z",Ƶ:"Z",Ĳ:"IJ",Œ:"OE",ᴀ:"A",ᴁ:"AE",ʙ:"B",ᴃ:"B",ᴄ:"C",ᴅ:"D",ᴇ:"E",ꜰ:"F",ɢ:"G",ʛ:"G",ʜ:"H",ɪ:"I",ʁ:"R",ᴊ:"J",ᴋ:"K",ʟ:"L",ᴌ:"L",ᴍ:"M",ɴ:"N",ᴏ:"O",ɶ:"OE",ᴐ:"O",ᴕ:"OU",ᴘ:"P",ʀ:"R",ᴎ:"N",ᴙ:"R",ꜱ:"S",ᴛ:"T",ⱻ:"E",ᴚ:"R",ᴜ:"U",ᴠ:"V",ᴡ:"W",ʏ:"Y",ᴢ:"Z",á:"a",ă:"a",ắ:"a",ặ:"a",ằ:"a",ẳ:"a",ẵ:"a",ǎ:"a",â:"a",ấ:"a",ậ:"a",ầ:"a",ẩ:"a",ẫ:"a",ä:"a",ǟ:"a",ȧ:"a",ǡ:"a",ạ:"a",ȁ:"a",à:"a",ả:"a",ȃ:"a",ā:"a",ą:"a",ᶏ:"a",ẚ:"a",å:"a",ǻ:"a",ḁ:"a",ⱥ:"a",ã:"a",ꜳ:"aa",æ:"ae",ǽ:"ae",ǣ:"ae",ꜵ:"ao",ꜷ:"au",ꜹ:"av",ꜻ:"av",ꜽ:"ay",ḃ:"b",ḅ:"b",ɓ:"b",ḇ:"b",ᵬ:"b",ᶀ:"b",ƀ:"b",ƃ:"b",ɵ:"o",ć:"c",č:"c",ç:"c",ḉ:"c",ĉ:"c",ɕ:"c",ċ:"c",ƈ:"c",ȼ:"c",ď:"d",ḑ:"d",ḓ:"d",ȡ:"d",ḋ:"d",ḍ:"d",ɗ:"d",ᶑ:"d",ḏ:"d",ᵭ:"d",ᶁ:"d",đ:"d",ɖ:"d",ƌ:"d",ı:"i",ȷ:"j",ɟ:"j",ʄ:"j",ǳ:"dz",ǆ:"dz",é:"e",ĕ:"e",ě:"e",ȩ:"e",ḝ:"e",ê:"e",ế:"e",ệ:"e",ề:"e",ể:"e",ễ:"e",ḙ:"e",ë:"e",ė:"e",ẹ:"e",ȅ:"e",è:"e",ẻ:"e",ȇ:"e",ē:"e",ḗ:"e",ḕ:"e",ⱸ:"e",ę:"e",ᶒ:"e",ɇ:"e",ẽ:"e",ḛ:"e",ꝫ:"et",ḟ:"f",ƒ:"f",ᵮ:"f",ᶂ:"f",ǵ:"g",ğ:"g",ǧ:"g",ģ:"g",ĝ:"g",ġ:"g",ɠ:"g",ḡ:"g",ᶃ:"g",ǥ:"g",ḫ:"h",ȟ:"h",ḩ:"h",ĥ:"h",ⱨ:"h",ḧ:"h",ḣ:"h",ḥ:"h",ɦ:"h",ẖ:"h",ħ:"h",ƕ:"hv",í:"i",ĭ:"i",ǐ:"i",î:"i",ï:"i",ḯ:"i",ị:"i",ȉ:"i",ì:"i",ỉ:"i",ȋ:"i",ī:"i",į:"i",ᶖ:"i",ɨ:"i",ĩ:"i",ḭ:"i",ꝺ:"d",ꝼ:"f",ᵹ:"g",ꞃ:"r",ꞅ:"s",ꞇ:"t",ꝭ:"is",ǰ:"j",ĵ:"j",ʝ:"j",ɉ:"j",ḱ:"k",ǩ:"k",ķ:"k",ⱪ:"k",ꝃ:"k",ḳ:"k",ƙ:"k",ḵ:"k",ᶄ:"k",ꝁ:"k",ꝅ:"k",ĺ:"l",ƚ:"l",ɬ:"l",ľ:"l",ļ:"l",ḽ:"l",ȴ:"l",ḷ:"l",ḹ:"l",ⱡ:"l",ꝉ:"l",ḻ:"l",ŀ:"l",ɫ:"l",ᶅ:"l",ɭ:"l",ł:"l",ǉ:"lj",ſ:"s",ẜ:"s",ẛ:"s",ẝ:"s",ḿ:"m",ṁ:"m",ṃ:"m",ɱ:"m",ᵯ:"m",ᶆ:"m",ń:"n",ň:"n",ņ:"n",ṋ:"n",ȵ:"n",ṅ:"n",ṇ:"n",ǹ:"n",ɲ:"n",ṉ:"n",ƞ:"n",ᵰ:"n",ᶇ:"n",ɳ:"n",ñ:"n",ǌ:"nj",ó:"o",ŏ:"o",ǒ:"o",ô:"o",ố:"o",ộ:"o",ồ:"o",ổ:"o",ỗ:"o",ö:"o",ȫ:"o",ȯ:"o",ȱ:"o",ọ:"o",ő:"o",ȍ:"o",ò:"o",ỏ:"o",ơ:"o",ớ:"o",ợ:"o",ờ:"o",ở:"o",ỡ:"o",ȏ:"o",ꝋ:"o",ꝍ:"o",ⱺ:"o",ō:"o",ṓ:"o",ṑ:"o",ǫ:"o",ǭ:"o",ø:"o",ǿ:"o",õ:"o",ṍ:"o",ṏ:"o",ȭ:"o",ƣ:"oi",ꝏ:"oo",ɛ:"e",ᶓ:"e",ɔ:"o",ᶗ:"o",ȣ:"ou",ṕ:"p",ṗ:"p",ꝓ:"p",ƥ:"p",ᵱ:"p",ᶈ:"p",ꝕ:"p",ᵽ:"p",ꝑ:"p",ꝙ:"q",ʠ:"q",ɋ:"q",ꝗ:"q",ŕ:"r",ř:"r",ŗ:"r",ṙ:"r",ṛ:"r",ṝ:"r",ȑ:"r",ɾ:"r",ᵳ:"r",ȓ:"r",ṟ:"r",ɼ:"r",ᵲ:"r",ᶉ:"r",ɍ:"r",ɽ:"r",ↄ:"c",ꜿ:"c",ɘ:"e",ɿ:"r",ś:"s",ṥ:"s",š:"s",ṧ:"s",ş:"s",ŝ:"s",ș:"s",ṡ:"s",ṣ:"s",ṩ:"s",ʂ:"s",ᵴ:"s",ᶊ:"s",ȿ:"s",ɡ:"g",ᴑ:"o",ᴓ:"o",ᴝ:"u",ť:"t",ţ:"t",ṱ:"t",ț:"t",ȶ:"t",ẗ:"t",ⱦ:"t",ṫ:"t",ṭ:"t",ƭ:"t",ṯ:"t",ᵵ:"t",ƫ:"t",ʈ:"t",ŧ:"t",ᵺ:"th",ɐ:"a",ᴂ:"ae",ǝ:"e",ᵷ:"g",ɥ:"h",ʮ:"h",ʯ:"h",ᴉ:"i",ʞ:"k",ꞁ:"l",ɯ:"m",ɰ:"m",ᴔ:"oe",ɹ:"r",ɻ:"r",ɺ:"r",ⱹ:"r",ʇ:"t",ʌ:"v",ʍ:"w",ʎ:"y",ꜩ:"tz",ú:"u",ŭ:"u",ǔ:"u",û:"u",ṷ:"u",ü:"u",ǘ:"u",ǚ:"u",ǜ:"u",ǖ:"u",ṳ:"u",ụ:"u",ű:"u",ȕ:"u",ù:"u",ủ:"u",ư:"u",ứ:"u",ự:"u",ừ:"u",ử:"u",ữ:"u",ȗ:"u",ū:"u",ṻ:"u",ų:"u",ᶙ:"u",ů:"u",ũ:"u",ṹ:"u",ṵ:"u",ᵫ:"ue",ꝸ:"um",ⱴ:"v",ꝟ:"v",ṿ:"v",ʋ:"v",ᶌ:"v",ⱱ:"v",ṽ:"v",ꝡ:"vy",ẃ:"w",ŵ:"w",ẅ:"w",ẇ:"w",ẉ:"w",ẁ:"w",ⱳ:"w",ẘ:"w",ẍ:"x",ẋ:"x",ᶍ:"x",ý:"y",ŷ:"y",ÿ:"y",ẏ:"y",ỵ:"y",ỳ:"y",ƴ:"y",ỷ:"y",ỿ:"y",ȳ:"y",ẙ:"y",ɏ:"y",ỹ:"y",ź:"z",ž:"z",ẑ:"z",ʑ:"z",ⱬ:"z",ż:"z",ẓ:"z",ȥ:"z",ẕ:"z",ᵶ:"z",ᶎ:"z",ʐ:"z",ƶ:"z",ɀ:"z",ﬀ:"ff",ﬃ:"ffi",ﬄ:"ffl",ﬁ:"fi",ﬂ:"fl",ĳ:"ij",œ:"oe",ﬆ:"st",ₐ:"a",ₑ:"e",ᵢ:"i",ⱼ:"j",ₒ:"o",ᵣ:"r",ᵤ:"u",ᵥ:"v",ₓ:"x"};return Object.keys(a).forEach((t=>e=function replaceAll(e,t,a){return e.split(t).join(a)}(e,t,a[t]))),t?e.toLowerCase():e}(e):e)).join(" ")))})))),r&&makeThatArray(r).map((e=>"object"==typeof e?Object.keys(e).map((t=>`${t}: ${e[t]}`)).join("; "):makeThatArray(e).join("; "))).join("; ").split(";").forEach((e=>{let[t,a]=e.split(":").map((e=>e.trim()));d.style[function makeCamelCase(e){return e.split("-").map(((e,t)=>t>0?e.charAt(0).toUpperCase()+e.slice(1):e)).join("")}(t)]=a})),i&&makeThatArray(i).forEach((e=>d.appendChild(e instanceof HTMLElement?e:createDOMElem(e)))),l&&makeThatArray(l).forEach((e=>e&&e.event&&e.cb&&d.addEventListener(e.event,e.cb))),n){const e=["#","."];"string"==typeof n&&(n=n.charAt(0)in e?document.querySelector(n):e.map((e=>document.querySelector(e+n))).filter((e=>null!==e))[0])}else n=document.querySelector("body");return s&&n.appendChild(d),d}return t})()));

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/Auditorium/Auditorium.js":
/*!*************************************************!*\
  !*** ./src/components/Auditorium/Auditorium.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Auditorium)
/* harmony export */ });
/* harmony import */ var _Sector_Sector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Sector/Sector.js */ "./src/components/Sector/Sector.js");
/* harmony import */ var domelemjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! domelemjs */ "./node_modules/domelemjs/dist/index.js");
/* harmony import */ var domelemjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(domelemjs__WEBPACK_IMPORTED_MODULE_1__);


/* Object of the entire Auditorium, the constructor of the class gets an array, that is writing down, the properties of the auditorium, please see the sectorConfigs in model directory */
class Auditorium {
  constructor(sectors) {
    this.sectors = [];
    this.seatNumber = 0;
    this.wheighting = {
      sectorIndex: 1000,
      rowNumber: 100,
      positionIndex: 10,
      neighboursPrice: 1,
    };

    //creating the sectors according to the sectorCofigs, and sectorMaps - please see in the model
    sectors.forEach((sectorConf, sectorId) => {
      const sector = new _Sector_Sector_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ ...sectorConf, sectorId });

      //form the sector getting the number of seats in the sector
      this.seatNumber += sector.seatNumber;

      //push into the sectors of the auditorium
      this.sectors.push(sector);
    });

    return this;
  }

  //filling up this auditorium with occupied seats
  randomReservation(ammount = 0) {
    if (ammount < 0.2) {
      console.error(
        "The amount of reserved seat must be over 20% of the entire seats!"
      );
    } else {
      const allSeats = this.getAllSeats();
      const seatNr = allSeats.length;
      do {
        allSeats[Math.round(Math.random() * (seatNr - 1))].setOccupied(
          "Random"
        );
      } while (this.getOccupiedSeats().length <= Math.ceil(seatNr * ammount));
    }
  }

  reserve(numberOfSeats) {
    //at very first ordering the sectors
    /* NOT NEEDED ANY MORE
    const sectorsOrdered = this.sectors.sort((a, b) => {
      a.sectorPreference - b.sectorPreference;
    });
    */

    let results = [];

    //iterating through the sectors
    this.sectors.forEach((sector) => {
      //iterating throug the rows
      sector.rows.forEach((row) => {
        const rowLength = row.seatsNumber;
        for (let i = 0; i < row.seatsNumber - numberOfSeats; i++) {
          //taking a sample form the current row to check they are free, if they are free calculating the value of this position.
          const nextNeighbours = row.seats.slice(i, i + +numberOfSeats);
          //console.log(row.seats.slice(i, i + +numberOfSeats), i, i + +numberOfSeats);

          //checking all the required seats are free?
          const isAllFree = nextNeighbours
            .map((seat) => seat.occupied)
            .every((seat) => !seat);

          if (isAllFree) {
            //calculating the price of all the seats - less value means a higher price
            const neighboursPrice =
              nextNeighbours
                .map((seat) => 4 - seat.seatCategory.category)
                .reduce((sum, category) => sum + category) /
              (numberOfSeats * 4);

            //calculating the value of the seat position in the row - less is more in the middle - more valued has more offset
            const positionIndex =
              (1 +
                nextNeighbours
                  .map((seat) => seat.seatPosPreference)
                  .reduce((a, b) => a + b)) /
              rowLength /
              2;

            //calculaing the correct row numbering
            const rowNumber = row.rowNr + 1;

            //calculating the sector index
            const sectorIndex = sector.sectorPreference / 4;

            //creating the fator object literal
            const factors = {
              rowNumber,
              sectorIndex,
              positionIndex,
              neighboursPrice,
            };

            let wheigtedFactors = { ...factors };
            Object.keys(wheigtedFactors).forEach(
              (index) =>
                (wheigtedFactors[index] =
                  factors[index] * this.wheighting[index])
            );

            console.log(wheigtedFactors);

            //the calcualtion of global value of the position
            let positionValue = 0;
            Object.keys(wheigtedFactors).forEach(
              (index) => (positionValue += wheigtedFactors[index])
            );

            //generating text about the seat numbers
            const seatText = nextNeighbours
              .map((seat) => seat.seatNr + 1)
              .join(", ");

            //genereating text form results to make it more comfortable to read for humans
            const neighboursText = `Sector: ${nextNeighbours[0].sectorName} | row#: ${rowNumber} | seat#: ${seatText} | value: ${positionValue}`;

            //collect all results into an array
            results.push({
              //neighbours: nextNeighbours,
              //neighboursText,
              sectorName: sector.name,
              rowNumber,
              seatNumbers: seatText,
              ...wheigtedFactors,
              positionValue,
            });
          }
        }
      });
    });

    //printing out gthe results into the console log
    results.length
      ? console.table(results.sort((a, b) => b.positionValue - a.positionValue))
      : console.log("Unfortunatelly there is no solution...");
    return results;
  }

  //returning the number of the seats in this auditorium
  getSeatNumber() {
    return this.seatNumber;
  }

  //returning all the seats in this auditorium
  getAllSeats() {
    return this.sectors.map((sector) => sector.getAllSeats()).flat(1);
  }

  //returning all the occupied seats in this auditorium
  getOccupiedSeats() {
    return this.sectors.map((sector) => sector.getOccupiedSeats()).flat(1);
  }

  //returning all the free seats in this auditorium
  getFreeSeats() {
    return this.sectors.map((sector) => sector.getFreeSeats()).flat(1);
  }

  freeUpAllSeats() {
    this.getAllSeats().forEach((seat) => seat.setFree());
  }

  //rendering the complete auditorium
  render(parent = "app") {
    this.addPanel();
    //creating the div of auditorium
    const auditoriumElem = (0,domelemjs__WEBPACK_IMPORTED_MODULE_1__.createDOMElem)({
      tag: domelemjs__WEBPACK_IMPORTED_MODULE_1__.div,
      attrs: { class: "auditorium" },
      parent: parent,
    });

    //rendering every sectors
    this.sectors.forEach((sector) => {
      sector.render(auditoriumElem);
    });
  }

  addPanel() {
    (0,domelemjs__WEBPACK_IMPORTED_MODULE_1__.createDOMElem)({
      tag: domelemjs__WEBPACK_IMPORTED_MODULE_1__.div,
      attrs: { class: "panel" },
      style: {
        position: "fixed",
        bottom: 0,
        left: 0,
        padding: "10px",
        margin: "10px",
      },
      children: [
        (0,domelemjs__WEBPACK_IMPORTED_MODULE_1__.createDOMElem)({
          tag: domelemjs__WEBPACK_IMPORTED_MODULE_1__.div,
          attrs: { class: "reserve-panel" },
          children: [
            (0,domelemjs__WEBPACK_IMPORTED_MODULE_1__.createDOMElem)({
              tag: domelemjs__WEBPACK_IMPORTED_MODULE_1__.input,
              attrs: { type: "number", id: "max", value: 4 },
              style: {
                width: "60px",
              },
            }),
            (0,domelemjs__WEBPACK_IMPORTED_MODULE_1__.createDOMElem)({
              tag: domelemjs__WEBPACK_IMPORTED_MODULE_1__.button,
              attrs: { class: "reserve" },
              handleEvent: {
                event: "click",
                cb: () => {
                  this.reserve({
                    min: 2,
                    max: +document.getElementById("max").value || 4,
                  });
                },
              },
              content: "reserve",
            }),
          ],
        }),
        (0,domelemjs__WEBPACK_IMPORTED_MODULE_1__.createDOMElem)({
          tag: domelemjs__WEBPACK_IMPORTED_MODULE_1__.div,
          attrs: { class: "reserve-panel" },
          children: [
            (0,domelemjs__WEBPACK_IMPORTED_MODULE_1__.createDOMElem)({
              tag: domelemjs__WEBPACK_IMPORTED_MODULE_1__.input,
              attrs: {
                type: "number",
                step: "0.1",
                min: "0.1",
                max: "1",
                id: "random",
                value: 0.2,
              },
              style: {
                width: "60px",
              },
            }),
            (0,domelemjs__WEBPACK_IMPORTED_MODULE_1__.createDOMElem)({
              tag: domelemjs__WEBPACK_IMPORTED_MODULE_1__.button,
              attrs: { class: "randomize" },
              handleEvent: {
                event: "click",
                cb: () => {
                  this.freeUpAllSeats();
                  this.randomReservation(
                    +document.getElementById("random").value
                  );
                },
              },
              content: "randomize",
            }),
          ],
        }),
      ],
    });
  }
}


/***/ }),

/***/ "./src/components/Row/Row.js":
/*!***********************************!*\
  !*** ./src/components/Row/Row.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Row)
/* harmony export */ });
/* harmony import */ var _Seat_Seat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Seat/Seat.js */ "./src/components/Seat/Seat.js");
/* harmony import */ var _model_language_language_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/language/language.js */ "./src/model/language/language.js");
/* harmony import */ var domelemjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domelemjs */ "./node_modules/domelemjs/dist/index.js");
/* harmony import */ var domelemjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(domelemjs__WEBPACK_IMPORTED_MODULE_2__);




/*
this is the object of the rows, the object gets, the properies of the Auditorium, and the Sector as well, and pass down to the seat component also for later useage
*/

class Row {
  constructor({ rowConf, rowNr, sectorId, sectorName, sectorPreference }) {
    this.seats = [];
    this.rowNr = rowNr;
    this.sectorId = sectorId;
    this.seatsNumber = rowConf.length;
    this.sectorPreference = rowConf.length - rowNr;
    this.sectorName = sectorName;
    this.sectorPreference = sectorPreference;

    //here is the seats created in the rows
    rowConf.forEach((category, seatNr) => {
      const thisSeat = new _Seat_Seat_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        seatNr: seatNr,
        sectorId: sectorId,
        rowNr: rowNr,
        sectorPreference: sectorPreference,
        seatPosPreference: Math.ceil(Math.abs(seatNr - this.seatsNumber / 2)),
        seatCategory: category,
        sectorName: sectorName,
      });
      this.seats.push(thisSeat);
    });
    return this;
  }

  //this method gives back all the seats in a flat array of an entire row
  getAllSeats() {
    return this.seats;
  }

  //this method gives back all the occupied seats in a flat array of an entire row
  getOccupiedSeats() {
    return this.seats.filter((seat) => seat.occupied);
  }

  //this method gives back all the free seats in a flat array of an entire row
  getFreeSeats() {
    return this.seats.filter((seat) => !seat.occupied);
  }

  //this method rendering the row
  render(parent, mirrored, offset) {
    //creating the row container
    const rowContainer = (0,domelemjs__WEBPACK_IMPORTED_MODULE_2__.createDOMElem)({
      tag: domelemjs__WEBPACK_IMPORTED_MODULE_2__.div,
      attrs: {
        class: `row rowNr-${this.rowNr} row-container`,
      },
      parent: parent,
    });

    //adding the text of row numbering
    const rowNumbering = (0,domelemjs__WEBPACK_IMPORTED_MODULE_2__.createDOMElem)({
      tag: domelemjs__WEBPACK_IMPORTED_MODULE_2__.p,
      attrs: {
        class: `row rowNr-${this.rowNr} row-container`,
      },
      content: `${this.rowNr + 1}${_model_language_language_js__WEBPACK_IMPORTED_MODULE_1__.trt[this.rowNr] || _model_language_language_js__WEBPACK_IMPORTED_MODULE_1__.trt["default"]} row`,
      parent: rowContainer,
    });

    //if the rows are mirrored in the sectror the revers the array
    const toRender = mirrored ? this.seats.reverse() : this.seats;

    //give some offset to the side balcony to get similar results than on the picture shown
    toRender.forEach((seat, index) => {
      seat.render(rowContainer);
      if (offset > 0 && index == toRender.length - 1) {
        for (let i = 0; i < this.rowNr; i++) {
          (0,domelemjs__WEBPACK_IMPORTED_MODULE_2__.createDOMElem)({
            tag: domelemjs__WEBPACK_IMPORTED_MODULE_2__.div,
            attrs: { class: "offset" },
            parent: rowContainer,
          });
        }
      }
    });
  }
}


/***/ }),

/***/ "./src/components/Seat/Seat.js":
/*!*************************************!*\
  !*** ./src/components/Seat/Seat.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Seat)
/* harmony export */ });
/* harmony import */ var _model_Tickets_TicketCategory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/Tickets/TicketCategory.js */ "./src/model/Tickets/TicketCategory.js");
/* harmony import */ var domelemjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! domelemjs */ "./node_modules/domelemjs/dist/index.js");
/* harmony import */ var domelemjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(domelemjs__WEBPACK_IMPORTED_MODULE_1__);


/* This is the object of the seat, every seat know that in which auditory / sector / row placed, every seat knows the price of the ticket that is valid for it */
class Seat {
  constructor({
    seatNr,
    seatCategory,
    guestName,
    sectorId,
    rowNr,
    sectorName,
    seatPosPreference,
    sectorPreference,
  }) {
    this.seatNr = seatNr;
    this.seatDOM = null;
    this.sectorId = sectorId;
    this.sectorName = sectorName;
    this.rowNr = rowNr;
    this.seatPosPreference = seatPosPreference;
    this.sectorPreference = sectorPreference;
    guestName ? this.setOccupied(guestName) : this.setFree();
    this.seatCategory = new _model_Tickets_TicketCategory_js__WEBPACK_IMPORTED_MODULE_0__["default"](seatCategory);
    return this;
  }

  //rendering the seat
  render(parent) {
    this.seatDOM = (0,domelemjs__WEBPACK_IMPORTED_MODULE_1__.createDOMElem)({
      tag: domelemjs__WEBPACK_IMPORTED_MODULE_1__.div,
      attrs: {
        class: `seat seatNr-${this.seatNr} category-${
          this.seatCategory.category
        } ${this.occupied ? "occupied" : "free"}`,
      },
      parent: parent,
      content: this.seatNr + 1,
      handleEvent: {
        event: "click",
        cb: (e) => {
          e.preventDefault();
          this.occupied ? this.setFree() : this.setOccupied("Test");
        },
      },
    });
  }

  //this method gives back the number of the seat (ID)
  getNumber() {
    return this.seatNr;
  }

  //this method gives back the name of the guest who is sitting on it
  getGuestName() {
    return this.guestName;
  }

  //this method set the name of the guest who is sitting on it
  setGuestName(guestName) {
    this.guestName = guestName;
  }

  //this method gives back the price of the valid ticket for the seat
  getSeatPrice() {
    return this.seatCategory.getPrice();
  }

  //this method gives back the category of the valid ticket for the seat
  getSeatCategory() {
    return this.seatCategory.getCategory();
  }

  //this method gives back the the seat is occupied // TRUE or free /// FALSE
  getOccupied() {
    return this.occupied;
  }

  //this method set the seat to occupied // as argument we can give the name of the guest who is sitting on it
  setOccupied(guestName = "unknown") {
    this.occupied = true;
    this.setGuestName(guestName);
    if (this.seatDOM) {
      this.seatDOM.classList.add("occupied");
      this.seatDOM.classList.remove("free");
    }
    return this;
  }
  //this method set the seat to free
  setFree() {
    this.occupied = false;
    this.setGuestName(null);
    if (this.seatDOM) {
      this.seatDOM.classList.add("free");
      this.seatDOM.classList.remove("occupied");
    }
    return this;
  }
}


/***/ }),

/***/ "./src/components/Sector/Sector.js":
/*!*****************************************!*\
  !*** ./src/components/Sector/Sector.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sector)
/* harmony export */ });
/* harmony import */ var _Row_Row_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Row/Row.js */ "./src/components/Row/Row.js");
/* harmony import */ var domelemjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! domelemjs */ "./node_modules/domelemjs/dist/index.js");
/* harmony import */ var domelemjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(domelemjs__WEBPACK_IMPORTED_MODULE_1__);



/* Object of a sector, the sector holds the porperties of the auditorium what containg the sector, and all the properties are given down to the rows. */
class Sector {
  constructor({
    rows,
    name,
    mirrored,
    sectorId,
    vert,
    hor,
    angle,
    offset,
    sectorPreference,
  }) {
    this.rows = [];
    this.name = name;
    this.vert = vert;
    this.hor = hor;
    this.angle = angle;
    this.sectorId = sectorId;
    this.mirrored = mirrored;
    this.seatNumber = 0;
    this.offset = offset;
    this.sectorPreference = sectorPreference;

    //here is created all the rows according to the maps of the sector
    rows.forEach((rowConf, rowNr) => {
      const row = new _Row_Row_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        rowConf,
        rowNr,
        sectorId,
        sectorName: name,
        sectorPreference,
      });

      //here is calculated the number of the seat is all of the rows.
      this.seatNumber += row.seatNumber;
      this.rows.push(row);
      return this;
    });
  }

  //this method gives back all the seats in a flat array of an entire sector
  getAllSeats() {
    return this.rows.map((row) => row.getAllSeats()).flat(1);
  }

  getLongestRow() {
    let maxLength = 0;
    this.rows.forEach((row) => {
      maxLength = maxLength < row.seatsNumber ? row.seatsNumber : maxLength;
    });
    return maxLength;
  }

  //this method gives back all the occupied seats in a flat array of an entire sector
  getOccupiedSeats() {
    return this.rows.map((row) => row.getOccupiedSeats()).flat(1);
  }

  //this method gives back all the free seats in a flat array of an entire sector
  getFreeSeats() {
    return this.rows.map((row) => row.getFreeSeats()).flat(1);
  }

  //this method renders the entire sector
  render(parent) {
    const sectorContainer = (0,domelemjs__WEBPACK_IMPORTED_MODULE_1__.createDOMElem)({
      tag: domelemjs__WEBPACK_IMPORTED_MODULE_1__.div,
      attrs: {
        class: `sector-container ${this.name
          .replaceAll(" ", "-")
          .replaceAll(".", "")}`,
        id: `sectorId-${this.sectorId}`,
      },
      //here forced some styling throug the javascript, because the positions comes from the sectorConfig literal object, please see in the model directory
      style: {
        top: `${this.vert}%`,
        left: `${this.hor}%`,
        transform: `translate(-50%,-50%) rotate(${this.angle || 0}deg)`,
      },
      parent: parent,
      children: [
        {
          tag: domelemjs__WEBPACK_IMPORTED_MODULE_1__.div,
          attrs: {
            class: `title`,
          },
          children: [{ tag: domelemjs__WEBPACK_IMPORTED_MODULE_1__.p, content: this.name }],
        },
      ],
    });

    //rendering the rows in the sector
    this.rows.forEach((row) => {
      row.render(sectorContainer, this.mirrored, this.offset);
    });
  }
}


/***/ }),

/***/ "./src/model/Tickets/TicketCategory.js":
/*!*********************************************!*\
  !*** ./src/model/Tickets/TicketCategory.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TicketCategory)
/* harmony export */ });
/* this is the class of a ticket, i dont remember why i made this, but it works well */
class TicketCategory {
  constructor(seatCategory) {
    this.category = seatCategory;
    this.priceList = { 0: 2000, 1: 3000, 2: 4000, 3: 5000 };
    return this;
  }

  getPrice() {
    return this.priceList[this.seatCategory];
  }
  getCategory() {
    return this.seatCategory;
  }
  setCategory() {
    this.seatCategory = seatCategory;
    return this;
  }
}


/***/ }),

/***/ "./src/model/language/language.js":
/*!****************************************!*\
  !*** ./src/model/language/language.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trt": () => (/* binding */ trt)
/* harmony export */ });
const trt = { 1: "st", 2: "nd", 3: "rd", default: "th" };


/***/ }),

/***/ "./src/model/sectorConfigs/sectorConfigs.js":
/*!**************************************************!*\
  !*** ./src/model/sectorConfigs/sectorConfigs.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boxLeft1": () => (/* binding */ boxLeft1),
/* harmony export */   "boxLeft2": () => (/* binding */ boxLeft2),
/* harmony export */   "boxLeft3": () => (/* binding */ boxLeft3),
/* harmony export */   "boxRight1": () => (/* binding */ boxRight1),
/* harmony export */   "boxRight2": () => (/* binding */ boxRight2),
/* harmony export */   "boxRight3": () => (/* binding */ boxRight3),
/* harmony export */   "centralAuditorium": () => (/* binding */ centralAuditorium),
/* harmony export */   "midBalcony": () => (/* binding */ midBalcony),
/* harmony export */   "sideBalconyLeft": () => (/* binding */ sideBalconyLeft),
/* harmony export */   "sideBalconyRight": () => (/* binding */ sideBalconyRight)
/* harmony export */ });
/* harmony import */ var _sectorMap_sectorMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sectorMap/sectorMaps.js */ "./src/model/sectorMap/sectorMaps.js");

/* these little object literals containting the properties of a sector  */

const boxLeft1 = {
  rows: _sectorMap_sectorMaps_js__WEBPACK_IMPORTED_MODULE_0__.boxMap, // the rows, are the map of the sector, every row is an array what contains the price category of the seat
  name: "Box left 1.", //name of the sector
  mirrored: false, //it is mirrored or not
  vert: 25, //the vertical position of the sector on the screen given in percentage
  hor: 15, //the horizontal position of the sector on the screen given in percentage
  angle: 90, //the angle of the sector on the screen given in degree
  sectorPreference: 4, //the preference value of a sector to calculate to position value in a seat neibourghood
};
const boxLeft2 = {
  rows: _sectorMap_sectorMaps_js__WEBPACK_IMPORTED_MODULE_0__.boxMap,
  name: "Box left 2.",
  mirrored: false,
  vert: 40,
  hor: 15,
  angle: 90,
  sectorPreference: 4,
};
const boxLeft3 = {
  rows: _sectorMap_sectorMaps_js__WEBPACK_IMPORTED_MODULE_0__.boxMap,
  name: "Box left 3.",
  mirrored: false,
  vert: 55,
  hor: 15,
  angle: 90,
  sectorPreference: 4,
};
const sideBalconyLeft = {
  rows: _sectorMap_sectorMaps_js__WEBPACK_IMPORTED_MODULE_0__.sideBalconyMap,
  name: "Balcony left",
  mirrored: true,
  vert: 75,
  hor: 20,
  angle: 45,
  offset: 1,
  sectorPreference: 3,
};
const boxRight1 = {
  rows: _sectorMap_sectorMaps_js__WEBPACK_IMPORTED_MODULE_0__.boxMap,
  name: "Box right 1.",
  mirrored: true,
  vert: 25,
  hor: 85,
  angle: -90,
  sectorPreference: 4,
};
const boxRight2 = {
  rows: _sectorMap_sectorMaps_js__WEBPACK_IMPORTED_MODULE_0__.boxMap,
  name: "Box right 2.",
  mirrored: true,
  vert: 40,
  hor: 85,
  angle: -90,
  sectorPreference: 4,
};
const boxRight3 = {
  rows: _sectorMap_sectorMaps_js__WEBPACK_IMPORTED_MODULE_0__.boxMap,
  name: "Box right 3.",
  mirrored: true,
  vert: 55,
  hor: 85,
  angle: -90,
  sectorPreference: 4,
};
const sideBalconyRight = {
  rows: _sectorMap_sectorMaps_js__WEBPACK_IMPORTED_MODULE_0__.sideBalconyMap,
  name: "Balcony right",
  mirrored: false,
  vert: 75,
  hor: 80,
  angle: -45,
  offset: 1,
  sectorPreference: 3,
};
const midBalcony = {
  rows: _sectorMap_sectorMaps_js__WEBPACK_IMPORTED_MODULE_0__.midBalconyMap,
  name: "Balcony mid.",
  mirrored: false,
  vert: 80,
  hor: 50,
  sectorPreference: 2,
};
const centralAuditorium = {
  rows: _sectorMap_sectorMaps_js__WEBPACK_IMPORTED_MODULE_0__.centralAuditoriumMap,
  name: "Auditorium",
  mirrored: false,
  vert: 45,
  hor: 50,
  sectorPreference: 1,
};


/***/ }),

/***/ "./src/model/sectorMap/sectorMaps.js":
/*!*******************************************!*\
  !*** ./src/model/sectorMap/sectorMaps.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boxMap": () => (/* binding */ boxMap),
/* harmony export */   "centralAuditoriumMap": () => (/* binding */ centralAuditoriumMap),
/* harmony export */   "midBalconyMap": () => (/* binding */ midBalconyMap),
/* harmony export */   "sideBalconyMap": () => (/* binding */ sideBalconyMap)
/* harmony export */ });
/* these 2 dimensional array writing down the rows and seats in a sector */

const boxMap = [
  [1, 1, 1, 1], //the numbers are the price category of a seat
  [0, 0, 0, 0],
];

const centralAuditoriumMap = [
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  // 14 seat 14x5000 Ft seat
  [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
  // 15 seat 1x4000 Ft + 13x5000 Ft + 1x4000 Ft seat
  [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
  // 16 seat 1x4000 Ft + 14x5000 Ft + 1x4000 Ft seat
  [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2],
  // 17 seat 2x4000 Ft + 13x5000 Ft + 2x4000 Ft seat
  [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2],
  // 18 seat 2x3000 Ft + 14x5000 Ft + 2x3000 Ft seat
  [2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2],
  // 19 seat 2x3000 Ft + 15x5000 Ft + 2x3000 Ft seat
  [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1],
  // 20 seat 3x2000 Ft + 14x3000 Ft + 3x2000 Ft seat
  [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1],
  // 21 seat 4x2000 Ft + 15x3000 Ft + 4x2000 Ft seat
  [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1],
  // 22 seat 4x2000 Ft + 16x3000 Ft + 4x2000 Ft seat
  [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
  // 23 seat 5x2000 Ft + 13x3000 Ft + 5x2000 Ft seat
  [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
  // 24 seat 5x2000 Ft + 14x3000 Ft + 5x2000 Ft seat
  [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
  // 23 seat 5x2000 Ft + 13x3000 Ft + 5x2000 Ft seat
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  //24 seat 3000 Ft seat
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // 23 seat 3000 Ft seat
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  //24 seat 3000 Ft seat
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // 23 seat 3000 Ft seat
];

const sideBalconyMap = [
  [2, 2, 2, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

const midBalconyMap = [
  [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Auditorium_Auditorium_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Auditorium/Auditorium.js */ "./src/components/Auditorium/Auditorium.js");
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");
/* harmony import */ var _model_sectorConfigs_sectorConfigs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/sectorConfigs/sectorConfigs.js */ "./src/model/sectorConfigs/sectorConfigs.js");




//creating the auditorium object, form the sector configs - pleases see in the model directory
const auditorium = new _components_Auditorium_Auditorium_js__WEBPACK_IMPORTED_MODULE_0__["default"]([
  _model_sectorConfigs_sectorConfigs_js__WEBPACK_IMPORTED_MODULE_2__.centralAuditorium,
  _model_sectorConfigs_sectorConfigs_js__WEBPACK_IMPORTED_MODULE_2__.midBalcony,
  _model_sectorConfigs_sectorConfigs_js__WEBPACK_IMPORTED_MODULE_2__.sideBalconyLeft,
  _model_sectorConfigs_sectorConfigs_js__WEBPACK_IMPORTED_MODULE_2__.sideBalconyRight,
  _model_sectorConfigs_sectorConfigs_js__WEBPACK_IMPORTED_MODULE_2__.boxLeft1,
  _model_sectorConfigs_sectorConfigs_js__WEBPACK_IMPORTED_MODULE_2__.boxLeft2,
  _model_sectorConfigs_sectorConfigs_js__WEBPACK_IMPORTED_MODULE_2__.boxLeft3,
  _model_sectorConfigs_sectorConfigs_js__WEBPACK_IMPORTED_MODULE_2__.boxRight1,
  _model_sectorConfigs_sectorConfigs_js__WEBPACK_IMPORTED_MODULE_2__.boxRight2,
  _model_sectorConfigs_sectorConfigs_js__WEBPACK_IMPORTED_MODULE_2__.boxRight3,
]);

//let it render the UI of auditorium
auditorium.render("app");

//fill up with random occupation
auditorium.randomReservation(0.2);

//find solutions for other neighbourg seats
auditorium.reserve({ min: 2, max: 4 });

})();

/******/ })()
;
//# sourceMappingURL=main594478d435e71d968a04.js.map