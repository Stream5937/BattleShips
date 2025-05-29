/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/background.png":
/*!*******************************!*\
  !*** ./assets/background.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4dc75ac3956da5de706.png";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background.png */ "./assets/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* BattleShips style.css	*/
/*----------------------------------------reset-------------------------------------------------------------*/
* {
    margin: 0px;
    padding: 0px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1em;
    box-sizing: border-box;
}

/*--------------------------------colour scheme  1 lighter to 4 darker ------------------------------------*/
/* using variables e.g.
:root {
  --blue: #1e90ff;
  --white: #ffffff;
}
body { background-color: var(--blue); }
*/

:root {
  --col_1  : #bbe4e9;   /* lightest*/
  --col_2  : #79c2d0;   /* lighter */
  --col_3  : #53a8b6;   /* darker  */
  --col_4  : #5585b5;   /* darkest */
}

.col-1 {
  background-color: var(--col_1);
}

.col-2 {
  background-color: var(--col_2);
}

.col-3 {
  background-color: var(--col_3);
}

.col-4 {
  background-color: var(--col_4);;
}

body {
  overflow: hidden; /* Hide scrollbars */
  width: 100vw;
  height: 100vh;
}

/*-------------------------text ---------------------------------------------------------------*/
/*input cursor
.cursor {
  background-color: rgb(15 23 42);
  width: 0.25rem;
  height: 2rem;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% {
      background-color: transparent;
  }
  50% {
      background-color: rgb(15 23 42);
  }
}
*/
/*----text-----*/
h1 {
  font-size: 6rem;
  align-content: center;
  color: var( --col_2);
  width:fit-content;
  height:auto;
  border: none;
}

h2 {
  font-size: 2rem;
  align-content: center;
}

/*----------------------------------------start screen-----------------------------------------------------*/
.start{  
  display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:1fr 1fr;
    align-items: center;
    justify-items: center;
    width: 100%;
    height:100%;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-size: cover;
    color:white;
  }

  .title{
    display: grid;
    grid-area: 1/1/2/2;
    width: 100%;
    height:100%;
    align-items: center;
    justify-items: center;
    border: none;
  }

  .buttons {
    display: grid;
    grid-area: 2/1/3/2;
    width: 100%;
    height:100%;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows:1fr 1fr 1fr;
    border: none;
  }

  button {
    background-color: var(--col_2);
    color: black;
    width: 100%;
    height:100%;
  }

  .btn-left {
    display:grid;
    grid-area: 2/2/3/3;
    width: 80%;
    height:60%;
    border: none;
  }

  .btn-right {
    display: grid;
    grid-area: 2/5/3/6;
    width: 80%;
    height:60%;
    border: none;
  }
  /*------------------------------------Game Play----------------------------------------------*/
  
  .container {
    height:100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 10fr 1fr;
    color: blue;
  }

  .header {
    display:grid;
    grid-area: 1/1/2/2;
    justify-content: center;
    align-items: center;
    background-color: var(--col_4);
    color:black;
  }

  .game_container {
    display:grid;
    grid-area: 2/1/3/2;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    /*background-color: dimgrey;*/
    color: black;
  }

  .left {
    display: grid;
    grid-area: 1/1/2/2;
    grid-template-rows: 1fr 8fr;
    grid-template-columns: 1fr; 
    justify-content: center;
    align-items: center;
    background-color: var(--col_3);
    color: black;
  }

  .right {
    display: grid;
    grid-area: 1/2/2/3;
    grid-template-rows: 1fr 8fr;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    background-color: var(--col_2);
    color: black;
  }

  .player0,
  .player1 {
    display: grid;
    grid-area: 1/1/2/2;
    justify-self: center;
    align-items: center;
  }
  
  .sketch0, 
  .sketch1 {
    display: grid;
    grid-area: 2/1/3/2;
    justify-self: center;
    align-items: center;
    min-width: fit-content;
    min-height: fit-content;
}

.rowContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: fit-content;
    min-height: fit-content;
}

.gridDiv {
    display:flex;
    flex-direction: column;
     
    border-style: solid;
    border-width: 1px;
    border-color: blue; 
}

.sketch0 .gridDiv{
  background-color: cyan; 
}

.sketch1 .gridDiv{
  background-color: lightyellow; 
}

.sketch1 .gridDiv.hit{
  color: black;
  background-color: orange; 
}

.sketch1 .gridDiv.sunk {
  color: black;
  background-color: green;
}

.sketch0 .ship,
.highlight {
    background-color: lightgreen;
}

.noHighlight{
    background-color: cyan;
}


/*-------------------------------------- footer -------------------------------------------------*/
.footer {
  display:grid;
  grid-area: 3/1/4/2;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  color: white;
  background-color: var(--col_4);
}


.play0{
  display: grid;
  grid-area: 1/1/2/2;
  grid-template-columns: 2.0fr 1.5fr;
  grid-template-rows: 1fr 1fr 1fr;
  color: black;
  background-color: var(--col_4);
}  

.play1 {
  display: grid;
  grid-area: 1/2/2/3;
  grid-template-columns: 2.0fr 1.5fr;
  grid-template-rows: 1fr 1fr 1fr;
  color: black;
  background-color: var(--col_4);

}

.setShips0,
.setShips1  {
  display: grid;
  grid-area: 2/1/3/2;
  grid-template-columns: 0.5fr 1.5fr 0.5fr 1.5fr 0.5fr;
  grid-template-rows: 1fr;
  color: black;
  background-color: var(--col_4);
}


.rblabel-left {
  display: grid;
  grid-area: 1/2/2/3;
  justify-self: right;
  margin: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: blue;
  background-color: var(--col_3);
}

.rad-btn-left {
  display: grid;
  grid-area: 1/3/2/4;
  width: 20px;
  margin-left: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: blue;
}

.rblabel-right {
  display: grid;
  grid-area: 1/4/2/5;
  justify-self: right;
  margin: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: blue;
  background-color: var(--col_3);
}

.rad-btn-right {
  display: grid;
  grid-area: 1/5/2/6;
  margin: 5px;
  margin-left: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: blue;
}

.radconfirm0,
.radconfirm1 {
  display: grid;
  grid-area: 2/2/3/3;
  justify-self: center;
  align-self: center;
  width: 40%;
  height: 100%;
  margin-right: 25%;
  padding-top: 5px;
  border-style: solid;
  border-width: 2px;
  border-color: blue;
  color: black;
  background-color: var(--col_3);
}

.pickShips0 {
  display: grid;
  grid-area: 1/1/2/2;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  color: black;
  background-color: var(--col_4);
  height: 100%;
  width: 100%;
}

.pickShips1 {
  display: grid;
  grid-area: 1/2/2/3;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  color: black;
  background-color: var(--col_4);
  height: 100%;
  width: 100%;
}

.pickLabel {
  display:grid;
  grid-area: 1/1/2/6;
  justify-content: center;
  background-color: var(--col_4);
  color: black;
}

.carrier {
  display:grid;
  grid-area: 2/1/3/2;
  justify-content: center;
  background-color: var(--col_2);
  height: 100%;
  width: 100%;
  margin: 0px 5px 0px 0px;
  border-color: blue;
  border-width:1px;
  border-style: solid;
  border-radius: 5px;
}

.battleship {
  display:grid;
  grid-area: 2/2/3/3;
  justify-content: center;
  background-color: var(--col_3);
  height: 100%;
  width: 100%;
  margin: 0px 5px 0px 0px;
  border-color: blue;
  border-width:1px;
  border-style: solid;
  border-radius: 5px;
}

.cruiser {
  display:grid;
  grid-area: 2/3/3/4;
  justify-content: center;
  background-color: var(--col_2);
  height: 100%;
  width: 100%;
  margin: 0px 5px 0px 0px;
  border-color: blue;
  border-width:1px;
  border-style: solid;
  border-radius: 5px;
}

.submarine {
  display:grid;
  grid-area: 2/4/3/5;
  justify-content: center;
  background-color: var(--col_3);
  height: 100%;
  width: 100%;
  margin: 0px 5px 0px 0px;
  border-color: blue;
  border-width:1px;
  border-style: solid;
  border-radius: 5px;
}

.destroyer {
  display:grid;
  grid-area: 2/5/3/6;
  justify-content: center;
  background-color: var(--col_2);
  height: 100%;
  width: 100%;
  margin: 0px 5px 0px 0px;
  border-color: blue;
  border-width:1px;
  border-style: solid;
  border-radius: 5px;
}
.donePlacing0,
.donePlacing1 {
  display:grid;
  grid-area: 3/1/4/6;
  justify-self: center;
  justify-content: center;
  background-color: lightgreen;
  height: 100%;
  width: fit-content;
  margin: 0px 5px 0px 0px;
  border-color: blue;
  border-width:1px;
  border-style: solid;
  border-radius: 5px;
}

.btnHighlight_1 {
  background-color: green;
}

.btnHighlight {
  background-color: red;
}

.noBtnHighlight_2{
  background-color:var(--col_2);
}

.noBtnHighlight_3{
  background-color:var(--col_3);
}


.sketch0 .gridDiv.missed {
 /* background-color:var(--col_2);*/
 background-color : lightgrey;
}

.sketch1 .gridDiv.missed {
  /* background-color:var(--col_2);*/
  background-color : grey;
 }

.GameOver {
  display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:1fr 1fr;
    align-items: center;
    justify-items: center;
    width: 100%;
    height:100%;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-size: cover;
    color:white;
}

.player_result {
  width: 400px;
  height: 300px;
}

#self,
#oppo {
  font-size: 2rem;
  justify-content: center;
  align-content: center;
  color: black;
  width:fit-content;
  height:auto;
  border: none;
}

.selfWin {
  background-color: var(--col_2);
    color: black;
    width: 200%;
    height:100%;
    display:grid;
    grid-area: 2/2/3/3;
    width: 80%;
    height:60%;
    border: none;
    justify-content: center;
    align-content: center;
}

.oppoWin{
  background-color: var(--col_2);
    color: black;
    width: 200%;
    height:100%;
    display:grid;
    grid-area: 2/5/3/6;
    width: 80%;
    height:60%;
    border: none;
    justify-content: center;
    align-content: center;
}

.hidden {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,0BAA0B;AAC1B,6GAA6G;AAC7G;IACI,WAAW;IACX,YAAY;IACZ,8CAA8C;IAC9C,cAAc;IACd,sBAAsB;AAC1B;;AAEA,4GAA4G;AAC5G;;;;;;CAMC;;AAED;EACE,kBAAkB,IAAI,YAAY;EAClC,kBAAkB,IAAI,YAAY;EAClC,kBAAkB,IAAI,YAAY;EAClC,kBAAkB,IAAI,YAAY;AACpC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,gBAAgB,EAAE,oBAAoB;EACtC,YAAY;EACZ,aAAa;AACf;;AAEA,gGAAgG;AAChG;;;;;;;;;;;;;;;;CAgBC;AACD,gBAAgB;AAChB;EACE,eAAe;EACf,qBAAqB;EACrB,oBAAoB;EACpB,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,qBAAqB;AACvB;;AAEA,4GAA4G;AAC5G;EACE,aAAa;IACX,0BAA0B;IAC1B,0BAA0B;IAC1B,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;IACX,WAAW;IACX,yDAAiD;IACjD,4BAA4B;IAC5B,sBAAsB;IACtB,WAAW;EACb;;EAEA;IACE,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,qBAAqB;IACrB,YAAY;EACd;;EAEA;IACE,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,qBAAqB;IACrB,8CAA8C;IAC9C,8BAA8B;IAC9B,YAAY;EACd;;EAEA;IACE,8BAA8B;IAC9B,YAAY;IACZ,WAAW;IACX,WAAW;EACb;;EAEA;IACE,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,YAAY;EACd;;EAEA;IACE,aAAa;IACb,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,YAAY;EACd;EACA,8FAA8F;;EAE9F;IACE,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,gCAAgC;IAChC,WAAW;EACb;;EAEA;IACE,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;EACb;;EAEA;IACE,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,8BAA8B;IAC9B,6BAA6B;IAC7B,YAAY;EACd;;EAEA;IACE,aAAa;IACb,kBAAkB;IAClB,2BAA2B;IAC3B,0BAA0B;IAC1B,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;EACd;;EAEA;IACE,aAAa;IACb,kBAAkB;IAClB,2BAA2B;IAC3B,0BAA0B;IAC1B,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;EACd;;EAEA;;IAEE,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;EACrB;;EAEA;;IAEE,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,sBAAsB;;IAEtB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,uBAAuB;AACzB;;AAEA;;IAEI,4BAA4B;AAChC;;AAEA;IACI,sBAAsB;AAC1B;;;AAGA,kGAAkG;AAClG;EACE,YAAY;EACZ,kBAAkB;EAClB,8BAA8B;EAC9B,uBAAuB;EACvB,YAAY;EACZ,8BAA8B;AAChC;;;AAGA;EACE,aAAa;EACb,kBAAkB;EAClB,kCAAkC;EAClC,+BAA+B;EAC/B,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,kCAAkC;EAClC,+BAA+B;EAC/B,YAAY;EACZ,8BAA8B;;AAEhC;;AAEA;;EAEE,aAAa;EACb,kBAAkB;EAClB,oDAAoD;EACpD,uBAAuB;EACvB,YAAY;EACZ,8BAA8B;AAChC;;;AAGA;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,0CAA0C;EAC1C,+BAA+B;EAC/B,YAAY;EACZ,8BAA8B;EAC9B,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,0CAA0C;EAC1C,+BAA+B;EAC/B,YAAY;EACZ,8BAA8B;EAC9B,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,8BAA8B;EAC9B,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,8BAA8B;EAC9B,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,8BAA8B;EAC9B,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,8BAA8B;EAC9B,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,8BAA8B;EAC9B,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;;EAEE,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;EACpB,uBAAuB;EACvB,4BAA4B;EAC5B,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;;AAGA;CACC,kCAAkC;CAClC,4BAA4B;AAC7B;;AAEA;EACE,kCAAkC;EAClC,uBAAuB;CACxB;;AAED;EACE,aAAa;IACX,0BAA0B;IAC1B,0BAA0B;IAC1B,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;IACX,WAAW;IACX,yDAAiD;IACjD,4BAA4B;IAC5B,sBAAsB;IACtB,WAAW;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;;EAEE,eAAe;EACf,uBAAuB;EACvB,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,8BAA8B;IAC5B,YAAY;IACZ,WAAW;IACX,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,YAAY;IACZ,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;EACE,8BAA8B;IAC5B,YAAY;IACZ,WAAW;IACX,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,YAAY;IACZ,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;EACE,aAAa;AACf","sourcesContent":["/* BattleShips style.css\t*/\n/*----------------------------------------reset-------------------------------------------------------------*/\n* {\n    margin: 0px;\n    padding: 0px;\n    font-family: 'Courier New', Courier, monospace;\n    font-size: 1em;\n    box-sizing: border-box;\n}\n\n/*--------------------------------colour scheme  1 lighter to 4 darker ------------------------------------*/\n/* using variables e.g.\n:root {\n  --blue: #1e90ff;\n  --white: #ffffff;\n}\nbody { background-color: var(--blue); }\n*/\n\n:root {\n  --col_1  : #bbe4e9;   /* lightest*/\n  --col_2  : #79c2d0;   /* lighter */\n  --col_3  : #53a8b6;   /* darker  */\n  --col_4  : #5585b5;   /* darkest */\n}\n\n.col-1 {\n  background-color: var(--col_1);\n}\n\n.col-2 {\n  background-color: var(--col_2);\n}\n\n.col-3 {\n  background-color: var(--col_3);\n}\n\n.col-4 {\n  background-color: var(--col_4);;\n}\n\nbody {\n  overflow: hidden; /* Hide scrollbars */\n  width: 100vw;\n  height: 100vh;\n}\n\n/*-------------------------text ---------------------------------------------------------------*/\n/*input cursor\n.cursor {\n  background-color: rgb(15 23 42);\n  width: 0.25rem;\n  height: 2rem;\n  animation: blink 1s infinite;\n}\n\n@keyframes blink {\n  0%, 100% {\n      background-color: transparent;\n  }\n  50% {\n      background-color: rgb(15 23 42);\n  }\n}\n*/\n/*----text-----*/\nh1 {\n  font-size: 6rem;\n  align-content: center;\n  color: var( --col_2);\n  width:fit-content;\n  height:auto;\n  border: none;\n}\n\nh2 {\n  font-size: 2rem;\n  align-content: center;\n}\n\n/*----------------------------------------start screen-----------------------------------------------------*/\n.start{  \n  display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows:1fr 1fr;\n    align-items: center;\n    justify-items: center;\n    width: 100%;\n    height:100%;\n    background-image: url('../assets/background.png');\n    background-repeat: no-repeat;\n    background-size: cover;\n    color:white;\n  }\n\n  .title{\n    display: grid;\n    grid-area: 1/1/2/2;\n    width: 100%;\n    height:100%;\n    align-items: center;\n    justify-items: center;\n    border: none;\n  }\n\n  .buttons {\n    display: grid;\n    grid-area: 2/1/3/2;\n    width: 100%;\n    height:100%;\n    align-items: center;\n    justify-items: center;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-rows:1fr 1fr 1fr;\n    border: none;\n  }\n\n  button {\n    background-color: var(--col_2);\n    color: black;\n    width: 100%;\n    height:100%;\n  }\n\n  .btn-left {\n    display:grid;\n    grid-area: 2/2/3/3;\n    width: 80%;\n    height:60%;\n    border: none;\n  }\n\n  .btn-right {\n    display: grid;\n    grid-area: 2/5/3/6;\n    width: 80%;\n    height:60%;\n    border: none;\n  }\n  /*------------------------------------Game Play----------------------------------------------*/\n  \n  .container {\n    height:100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 10fr 1fr;\n    color: blue;\n  }\n\n  .header {\n    display:grid;\n    grid-area: 1/1/2/2;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--col_4);\n    color:black;\n  }\n\n  .game_container {\n    display:grid;\n    grid-area: 2/1/3/2;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 1fr;\n    /*background-color: dimgrey;*/\n    color: black;\n  }\n\n  .left {\n    display: grid;\n    grid-area: 1/1/2/2;\n    grid-template-rows: 1fr 8fr;\n    grid-template-columns: 1fr; \n    justify-content: center;\n    align-items: center;\n    background-color: var(--col_3);\n    color: black;\n  }\n\n  .right {\n    display: grid;\n    grid-area: 1/2/2/3;\n    grid-template-rows: 1fr 8fr;\n    grid-template-columns: 1fr;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--col_2);\n    color: black;\n  }\n\n  .player0,\n  .player1 {\n    display: grid;\n    grid-area: 1/1/2/2;\n    justify-self: center;\n    align-items: center;\n  }\n  \n  .sketch0, \n  .sketch1 {\n    display: grid;\n    grid-area: 2/1/3/2;\n    justify-self: center;\n    align-items: center;\n    min-width: fit-content;\n    min-height: fit-content;\n}\n\n.rowContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    min-width: fit-content;\n    min-height: fit-content;\n}\n\n.gridDiv {\n    display:flex;\n    flex-direction: column;\n     \n    border-style: solid;\n    border-width: 1px;\n    border-color: blue; \n}\n\n.sketch0 .gridDiv{\n  background-color: cyan; \n}\n\n.sketch1 .gridDiv{\n  background-color: lightyellow; \n}\n\n.sketch1 .gridDiv.hit{\n  color: black;\n  background-color: orange; \n}\n\n.sketch1 .gridDiv.sunk {\n  color: black;\n  background-color: green;\n}\n\n.sketch0 .ship,\n.highlight {\n    background-color: lightgreen;\n}\n\n.noHighlight{\n    background-color: cyan;\n}\n\n\n/*-------------------------------------- footer -------------------------------------------------*/\n.footer {\n  display:grid;\n  grid-area: 3/1/4/2;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  color: white;\n  background-color: var(--col_4);\n}\n\n\n.play0{\n  display: grid;\n  grid-area: 1/1/2/2;\n  grid-template-columns: 2.0fr 1.5fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  color: black;\n  background-color: var(--col_4);\n}  \n\n.play1 {\n  display: grid;\n  grid-area: 1/2/2/3;\n  grid-template-columns: 2.0fr 1.5fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  color: black;\n  background-color: var(--col_4);\n\n}\n\n.setShips0,\n.setShips1  {\n  display: grid;\n  grid-area: 2/1/3/2;\n  grid-template-columns: 0.5fr 1.5fr 0.5fr 1.5fr 0.5fr;\n  grid-template-rows: 1fr;\n  color: black;\n  background-color: var(--col_4);\n}\n\n\n.rblabel-left {\n  display: grid;\n  grid-area: 1/2/2/3;\n  justify-self: right;\n  margin: 5px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: blue;\n  background-color: var(--col_3);\n}\n\n.rad-btn-left {\n  display: grid;\n  grid-area: 1/3/2/4;\n  width: 20px;\n  margin-left: 10px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: blue;\n}\n\n.rblabel-right {\n  display: grid;\n  grid-area: 1/4/2/5;\n  justify-self: right;\n  margin: 5px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: blue;\n  background-color: var(--col_3);\n}\n\n.rad-btn-right {\n  display: grid;\n  grid-area: 1/5/2/6;\n  margin: 5px;\n  margin-left: 10px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: blue;\n}\n\n.radconfirm0,\n.radconfirm1 {\n  display: grid;\n  grid-area: 2/2/3/3;\n  justify-self: center;\n  align-self: center;\n  width: 40%;\n  height: 100%;\n  margin-right: 25%;\n  padding-top: 5px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: blue;\n  color: black;\n  background-color: var(--col_3);\n}\n\n.pickShips0 {\n  display: grid;\n  grid-area: 1/1/2/2;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  color: black;\n  background-color: var(--col_4);\n  height: 100%;\n  width: 100%;\n}\n\n.pickShips1 {\n  display: grid;\n  grid-area: 1/2/2/3;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  color: black;\n  background-color: var(--col_4);\n  height: 100%;\n  width: 100%;\n}\n\n.pickLabel {\n  display:grid;\n  grid-area: 1/1/2/6;\n  justify-content: center;\n  background-color: var(--col_4);\n  color: black;\n}\n\n.carrier {\n  display:grid;\n  grid-area: 2/1/3/2;\n  justify-content: center;\n  background-color: var(--col_2);\n  height: 100%;\n  width: 100%;\n  margin: 0px 5px 0px 0px;\n  border-color: blue;\n  border-width:1px;\n  border-style: solid;\n  border-radius: 5px;\n}\n\n.battleship {\n  display:grid;\n  grid-area: 2/2/3/3;\n  justify-content: center;\n  background-color: var(--col_3);\n  height: 100%;\n  width: 100%;\n  margin: 0px 5px 0px 0px;\n  border-color: blue;\n  border-width:1px;\n  border-style: solid;\n  border-radius: 5px;\n}\n\n.cruiser {\n  display:grid;\n  grid-area: 2/3/3/4;\n  justify-content: center;\n  background-color: var(--col_2);\n  height: 100%;\n  width: 100%;\n  margin: 0px 5px 0px 0px;\n  border-color: blue;\n  border-width:1px;\n  border-style: solid;\n  border-radius: 5px;\n}\n\n.submarine {\n  display:grid;\n  grid-area: 2/4/3/5;\n  justify-content: center;\n  background-color: var(--col_3);\n  height: 100%;\n  width: 100%;\n  margin: 0px 5px 0px 0px;\n  border-color: blue;\n  border-width:1px;\n  border-style: solid;\n  border-radius: 5px;\n}\n\n.destroyer {\n  display:grid;\n  grid-area: 2/5/3/6;\n  justify-content: center;\n  background-color: var(--col_2);\n  height: 100%;\n  width: 100%;\n  margin: 0px 5px 0px 0px;\n  border-color: blue;\n  border-width:1px;\n  border-style: solid;\n  border-radius: 5px;\n}\n.donePlacing0,\n.donePlacing1 {\n  display:grid;\n  grid-area: 3/1/4/6;\n  justify-self: center;\n  justify-content: center;\n  background-color: lightgreen;\n  height: 100%;\n  width: fit-content;\n  margin: 0px 5px 0px 0px;\n  border-color: blue;\n  border-width:1px;\n  border-style: solid;\n  border-radius: 5px;\n}\n\n.btnHighlight_1 {\n  background-color: green;\n}\n\n.btnHighlight {\n  background-color: red;\n}\n\n.noBtnHighlight_2{\n  background-color:var(--col_2);\n}\n\n.noBtnHighlight_3{\n  background-color:var(--col_3);\n}\n\n\n.sketch0 .gridDiv.missed {\n /* background-color:var(--col_2);*/\n background-color : lightgrey;\n}\n\n.sketch1 .gridDiv.missed {\n  /* background-color:var(--col_2);*/\n  background-color : grey;\n }\n\n.GameOver {\n  display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows:1fr 1fr;\n    align-items: center;\n    justify-items: center;\n    width: 100%;\n    height:100%;\n    background-image: url('../assets/background.png');\n    background-repeat: no-repeat;\n    background-size: cover;\n    color:white;\n}\n\n.player_result {\n  width: 400px;\n  height: 300px;\n}\n\n#self,\n#oppo {\n  font-size: 2rem;\n  justify-content: center;\n  align-content: center;\n  color: black;\n  width:fit-content;\n  height:auto;\n  border: none;\n}\n\n.selfWin {\n  background-color: var(--col_2);\n    color: black;\n    width: 200%;\n    height:100%;\n    display:grid;\n    grid-area: 2/2/3/3;\n    width: 80%;\n    height:60%;\n    border: none;\n    justify-content: center;\n    align-content: center;\n}\n\n.oppoWin{\n  background-color: var(--col_2);\n    color: black;\n    width: 200%;\n    height:100%;\n    display:grid;\n    grid-area: 2/5/3/6;\n    width: 80%;\n    height:60%;\n    border: none;\n    justify-content: center;\n    align-content: center;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compAttack: () => (/* binding */ compAttack)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
//computer.js
//the computers attack logic



//initially fire at random
//randomise
//a local grid to to log attacks 
var local_grid = [];
var rows = 11;
var cols = 11;
for (var i = 1; i < rows; i++) {
  local_grid[i] = [];
  for (var j = 1; j < cols; j++) {
    local_grid[i][j] = '0';
  }
}

//pick random row col 1 -> 10
var row; //Math.floor(1+(Math.random() * 10));
var col; //Math.floor(1+(Math.random() * 10));

function compAttack() {
  console.log('Computer attacking start');
  var attack = true;
  var count = 1000;
  var gameOver = false;
  //break after a 1000 tries
  while (count-- > 0) {
    while (attack) {
      row = Math.floor(1 + Math.random() * 10);
      col = Math.floor(1 + Math.random() * 10);
      console.log('comp rnd attack row: ', row);
      console.log('comp rnd attack col: ', col);
      if (local_grid[row][col] === '0') {
        local_grid[row][col] = 1; //logs have attacked this cell
        attack = false; //found cell to attack;
        count = -1; //so stop attacks unless hit recorded -> dealt with by hit(pos)
        var id = row * 11 + col;
        gameOver = _index_js__WEBPACK_IMPORTED_MODULE_0__.player_0.gameBoard.receiveAttack(id);
        return gameOver;
      }
      if (count < 0) {
        attack = false;
      }
    }
  }
  if (count < 0) {
    console.log('count < 0', count);
  }
  console.log('Computer attacking end @count < 0');
  return gameOver;
}


/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Display: () => (/* binding */ Display)
/* harmony export */ });
/* harmony import */ var _dom_fns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-fns.js */ "./src/dom-fns.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//display.js


//A Display Controller class
var Display = /*#__PURE__*/function () {
  // a BattleShip game creation display object constructor 
  // access via key word new
  function Display(game_instance) {
    _classCallCheck(this, Display);
    //cater for incorrect invocation i.e not using 'new' keyword
    if (!(this instanceof Display)) {
      //throw error:
      throw Error('Error: Incorrect invocation');
      //or
      //return new Display:
      //return new Display(game_instance);
    } else {
      //for the display
      this.doc = new _dom_fns_js__WEBPACK_IMPORTED_MODULE_0__.Dom_fns(document); //a new dom_fns instance
      //  this.renderGameBoard(0);
      //  this.renderGameBoard(1);
    }
  }

  //display methods
  return _createClass(Display, [{
    key: "renderGameBoard",
    value: function renderGameBoard(board) {
      this.doc.gridSetUp(board);
    }
  }]);
}();


/***/ }),

/***/ "./src/dom-fns.js":
/*!************************!*\
  !*** ./src/dom-fns.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dom_fns: () => (/* binding */ Dom_fns)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _computer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computer.js */ "./src/computer.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//dom-fns.js



var Dom_fns = /*#__PURE__*/function () {
  //constructor
  function Dom_fns(document) {
    _classCallCheck(this, Dom_fns);
    //private NB different names for private variables
    _defineProperty(this, "_doc", void 0);
    this._doc = document;
  }

  //methods
  return _createClass(Dom_fns, [{
    key: "dom_loaded",
    value: function dom_loaded() {
      this._doc.addEventListener("DOMContentLoaded", function (event) {});
      return true;
    }
  }, {
    key: "renderCellContent",
    value: function renderCellContent(id, content) {
      var cell = document.getElementById(id);
      //display it if not 0
      if (!(content === 0)) {
        var text = document.createTextNode(content);
        cell.appendChild(text);
        /*
        if(firstDisplay) {
            cell.classList.add('ship');
        }
        */
      }
    }
  }, {
    key: "hideCellContent",
    value: function hideCellContent(id) {
      var elem = document.getElementById(id);
      var elemNodeList = elem.childNodes;
      var listLen = elemNodeList.length;
      if (listLen > 0) {
        elem.style.color = 'transparent';
      }
    }
  }, {
    key: "hideGridContent",
    value: function hideGridContent(player) {
      var cell;
      var id;
      console.log('player: ', player.name);
      switch (player.name) {
        case 'self':
          {
            for (var i = 0; i < 11; i++) {
              for (var j = 0; j < 11; j++) {
                id = i * 11 + j;
                cell = document.getElementById(id).firstElementChild;
                cell.classList.add('hidden');
              }
            }
            break;
          }
        case 'human':
        case 'computer':
          {
            for (var _i = 0; _i < 11; _i++) {
              for (var _j = 0; _j < 11; _j++) {
                id = _i * 11 + _j + 121;
                cell = document.getElementById(id).firstElementChild;
                cell.classList.add('hidden');
              }
            }
            break;
          }
      }
    }
  }, {
    key: "showCellContent",
    value: function showCellContent(id) {
      var cell = document.getElementById(id);
      cell.classList.remove('hidden');
      var textChild = cell.firstElementChild || cell.firstChild;
      console.log('text: ', textChild);
      if (textChild) {
        textChild.classList.remove('hidden');
      }
    }
  }, {
    key: "gridSetUp",
    value: function gridSetUp(board) {
      this.resetGrid(board);
      console.log("setting up ".concat(board.id));
      var sketch;
      var bkgCol;
      var col;
      //set the board colours
      //if board for player 0
      if (board.id === 'self') {
        sketch = document.querySelector('.sketch0');
        bkgCol = 'cyan';
        col = 'black';
      } else {
        //board for player 1
        sketch = document.querySelector('.sketch1');
        bkgCol = 'lightyellow';
        col = 'black';
      }

      //grid allows for potential square referencing but may never be used
      var num = 11; //the number of cells per side  10 plus extra 1 for co-ord naming
      var maxSketchWidth = 500;
      var gridSize = Math.round(maxSketchWidth / num);
      var rowContainer;
      var element;
      var text;
      for (var j = 0; j < num; j++) {
        //each row container
        rowContainer = document.createElement('div');
        rowContainer.classList.add('rowContainer');
        rowContainer.style.width = gridSize.toString() + 'px';
        rowContainer.style.height = gridSize.toString() + 'px';
        sketch.appendChild(rowContainer);
        for (var i = 0; i < num; i++) {
          element = document.createElement('div');
          element.classList.add('gridDiv');
          element.style.width = gridSize.toString() + 'px';
          element.style.height = gridSize.toString() + 'px';
          //                if((j>0)&&(i>0)){ element.style.backgroundColor= bkgCol;}
          element.style.color = col;
          //change id here to distinguish between boards 0 self and 1 computer or human
          if (board.id === 'self') {
            element.id = j * 10 + j + i; //active grid cells 1 -> 10 first row -> 91 -> 100 last
          } else {
            //board must be for player 1
            element.id = j * 10 + j + i + 121; //active grid cells 101 -> 110 first row -> 191 -> 200 last
          }
          if (i === 0) {
            element.style.backgroundColor = 'lightgrey';
            element.classList.add('hidden');
            if (j > 0) {
              text = document.createTextNode(j.toString());
              element.appendChild(text);
            }
          }
          if (j === 0) {
            element.style.backgroundColor = 'lightgrey';
            element.classList.add('hidden');
            if (i > 0) {
              text = document.createTextNode(String.fromCharCode((64 + i).toString()));
              element.appendChild(text);
            }
          }
          rowContainer.appendChild(element);
        }
      } //for loop
    } //set up grid
  }, {
    key: "resetGrid",
    value: function resetGrid(board) {
      var element;
      if (board.id === 0) {
        element = document.querySelector('.sketch0');
      } else {
        //board = 1
        element = document.querySelector('.sketch1');
      }
      while (element.firstChild) {
        element.removeChild(element.lastChild);
      }
    }
  }, {
    key: "getSketch",
    value: function getSketch(id) {
      var sketch;
      switch (id) {
        case 'self':
          {
            sketch = this._doc.querySelector('.sketch0');
            break;
          }
        case 'human':
          {
            sketch = this._doc.querySelector('.sketch1');
            break;
          }
        case 'computer':
          {
            sketch = this._doc.querySelector('.sketch1');
            break;
          }
        default:
          {
            console.log('error setting sketch');
            break;
          }
      }
      return sketch;
    }

    //monitorBoard for mouse action
  }, {
    key: "monitorBoard",
    value: function monitorBoard(board) {
      console.log('monitoring: ', board.id);
      var sketch = board.getSketch();
      var boardStatus = board.status;
      var gameOver = false;
      console.log('board id ', board.id, ' board status:', board.status);
      sketch.onmousedown = function (event) {
        //get the current board status
        boardStatus = board.getBoardStatus();
        //console.log('board status: ', boardStatus);
        var e = event.target.closest('div');
        console.log('e: ', e);
        if (!(e.id === null)) {
          var cell = document.getElementById(e.id);
          console.log('@ cell,: ', cell, ' e.id : ', e.id);
          if (!(cell === null)) {
            switch (boardStatus) {
              //on mouse down print out cell id number to cll
              case 'preset':
                {
                  var text = document.createTextNode(obj.toString());
                  cell.appendChild(text);
                  break;
                }
              //on mouse down print out selected ship to cell
              case 'place':
                {
                  board.placeShip(e);
                  break;
                }
              //place

              //react to mouse action for TEST ONLY 
              case 'TEST':
                {
                  console.log('TESTING');
                  board.receiveTEST(e);
                  break;
                }

              //board is currently attacking opponent
              case 'attack':
                {
                  if (board.id === 'computer') {
                    gameOver = (0,_computer_js__WEBPACK_IMPORTED_MODULE_1__.compAttack)();
                    if (gameOver) {
                      return true;
                    }
                  }
                  // board.missedAttack(e.id);
                  break;
                }

              //board is currently under fire from opponent
              case 'underFire':
                {
                  gameOver = board.receiveAttack(e.id);
                  if (gameOver) {
                    console.log('returning gameOver: ', gameOver);
                    return true;
                  }
                  break;
                }
              //react to mouse action once game over
              case 'win':
              case 'loose':
              case 'dead':
                {
                  gameOver = true;
                  break;
                }

              //on mouse down do nothing
              default:
              case 'random':
                {
                  break;
                }
            } //switch boardStatus
          }
          var done = board.checkBoardsShipsPlaced();
          console.log('done: ', done);
          if (done === 5) {
            var doneBtn;
            if (board.id === 'self') {
              doneBtn = document.querySelector('.donePlacing0');
              //  player_0.gameBoard.addShipsClass();
            } else {
              doneBtn = document.querySelector('.donePlacing1');
              if (_index_js__WEBPACK_IMPORTED_MODULE_0__.players.human) {
                //     player_1.gameBoard.addShipsClass();
              }
            }
            doneBtn.classList.remove('hidden');
          }
        } //e.id not null
      }; //onmousedown
      if (gameOver) {
        console.log('at mouseDown-returning gameOver: ', gameOver);
        return gameOver;
      }
    } //monitor board
  }, {
    key: "monitorShipPlacement",
    value: function monitorShipPlacement(player) {
      var _this = this;
      var ship;
      var board;
      if (player.name === 'self') {
        board = 0;
      } else {
        board = 1;
      }
      var ships;
      var attack;
      var btnHighlight = false;
      var sketch;
      var buttonHighlights = {
        'C': false,
        'c': false,
        'b': false,
        's': false,
        'd': false
      };
      this.monitorBoard(player.gameBoard);

      //set the sketch 
      if (board === 0) {
        ships = document.querySelector('.pickShips0'); //later pickShips_0 ?
        sketch = document.querySelector('.sketch0');
        attack = document.querySelector('.attack0');
        btnHighlight = false;
      } else {
        //board === 1
        ships = document.querySelector('.pickShips1'); //later pickShips_1 ?
        sketch = document.querySelector('.sketch1');
        attack = document.querySelector('.attack1');
        btnHighlight = false;
      }
      ships.onmousedown = function (event) {
        var e = event.target.closest('button');
        //if(e){console.log('e.id: ',e.id, ' event target',event.target);}
        var placingShips = true;
        if (e.nodeName === 'BUTTON') {
          var shipBtn = document.getElementById(e.id);
          switch (shipBtn.id) {
            //now moved to gameBoard
            case 'C':
            case 'C1':
              {
                ship = 'C';
                if (player.gameBoard._placeShip[0] > -2) {
                  shipBtn.classList.add('btnHighlight');
                  break;
                }
              }
            case 'b':
            case 'b1':
              {
                ship = 'b';
                if (player.gameBoard._placeShip[1] > -2) {
                  shipBtn.classList.add('btnHighlight');
                  break;
                }
              }
            case 'c':
            case 'c1':
              {
                ship = 'c';
                if (player.gameBoard._placeShip[2] > -2) {
                  shipBtn.classList.add('btnHighlight');
                  break;
                }
              }
            case 's':
            case 's1':
              {
                ship = 's';
                if (player.gameBoard._placeShip[3] > -2) {
                  shipBtn.classList.add('btnHighlight');
                  break;
                }
              }
            case 'd':
            case 'd1':
              {
                ship = 'd';
                if (player.gameBoard._placeShip[4] > -2) {
                  shipBtn.classList.add('btnHighlight');
                  break;
                }
              }
            //the donePlacing button
            case 'D':
              {
                //hide the ship placement buttons and donePlacing button
                ships.classList.add('hidden');
                attack.classList.remove('hidden');
                //colour the ship backgrounds
                //player_0.gameBoard.addShipsClass();
                _index_js__WEBPACK_IMPORTED_MODULE_0__.player_0.gameBoard.addShipsClass(_index_js__WEBPACK_IMPORTED_MODULE_0__.player_0.gameBoard.ships);
                //display the player_1 board for set  up
                if (_index_js__WEBPACK_IMPORTED_MODULE_0__.players.human === true) {
                  var ships1 = document.querySelector('.play1');
                  ships1.classList.remove('hidden');
                }

                //check player_1 board ships set
                //start the game
                player.gameBoard.status = 'attack';
                placingShips = false;
                break;
              }
            case 'D1':
              {
                //hide the ship placement buttons and donePlacing button
                ships.classList.add('hidden');
                //colour the ship backgrounds
                // player_1.gameBoard.addShipsClass();
                _index_js__WEBPACK_IMPORTED_MODULE_0__.player_1.gameBoard.addShipsClass(_index_js__WEBPACK_IMPORTED_MODULE_0__.player_1.gameBoard.ships);
                var _ships = document.querySelector('.humanSet');
                _ships.classList.remove('hidden');
                //hide the cell contents
                player.gameBoard.renderGameBoardContent();
                var id;
                for (var i = 0; i < 11; i++) {
                  for (var j = 0; j < 11; j++) {
                    if (i === 0 || j === 0) {/*miss out*/} else {
                      id = i * 11 + j + 121;
                      _this.hideCellContent(id); //should be player_1
                      // this.hideGridContent(player);
                    }
                  }
                }
                //check player_1 board ships set
                //start the game
                //set board status to under fire to flag start game
                player.gameBoard.status = 'underFire';
                placingShips = false;
                break;
              }
          } //switch
          if (placingShips) {
            player.gameBoard.setShipToPlace(ship);
          }
        } //NodeName
        else {
          console.log('node: ', e);
        }
      }; //mousedown
    } //monitor ship placement
  }, {
    key: "showHit",
    value: function showHit(ship, id) {
      var locate = ship.location;
      //console.log('show hit at id ',id);
      var cell = document.getElementById(id);
      cell.classList.add('hit');
      var row = locate[0];
      var col = locate[1];
      var content;
      var player;
      var logID;
      var logCell;
      //let gBrd;
      if (id < 121) {
        //must be player_0 'self'
        player = _index_js__WEBPACK_IMPORTED_MODULE_0__.player_0;
        logID = Number(id) + 121;
        //gBrd = player_1.gameBoard;
        logCell = document.getElementById(logID);
        //show own ship hit 
        // cell.style.backgroundColor='red';
        // logCell.backgroundColor='yellow';
      } else {
        //must be player_1
        player = _index_js__WEBPACK_IMPORTED_MODULE_0__.player_1;
        logID = Number(id) - 121;
        //gBrd = player_0.gameBoard;
        logCell = document.getElementById(logID);
        //show ship hit
        // cell.style.backgroundColor='red';
        // logCell.backgroundColor='yellow';
      }
      console.log('id ', id, ' logID ', logID, ' logCell ', logCell);
      content = player.gameBoard.grid[row][col];
      //       this.renderCellContent(id, content);        //the hit
      //        this.renderCellContent(logID, content);     //log the hit
      var newHTML;
      var textChild = cell.firstElementChild || cell.firstChild;
      var logTextChild = logCell.firstChild || logCell.firstElementChild;
      //console.log('textChild at id  is: ',textChild);
      //console.log('cell inner html: ',cell.innerHTML);
      //show the hit on the board under attack
      if (textChild) {
        //opening and closing tags
        var openingTag = '<span style="color:white">';
        var closingTag = '</span>';
        newHTML = openingTag + cell.innerText + closingTag;
        //            cell.innerHTML = newHTML;
      }
      //log the hit on the attacking player's board
      if (logTextChild) {
        //opening and closing tags
        var _openingTag = '<span style="color:blue">';
        var _closingTag = '</span>';
        newHTML = _openingTag + logCell.innerText + _closingTag;
        //            logCell.innerHTML = newHTML;
      }
    }
  }, {
    key: "showSunk",
    value: function showSunk(ship, id) {
      var locate = ship.location;
      var len = ship.length;
      var row = locate[0];
      var col = locate[1];
      var orientation = locate[2];
      var j = 0;
      ;
      if (orientation === 'V') {
        j = 11;
      }
      var cellID = row * 11 + col;
      //board player_0 or player_1 ?
      if (id > 120) {
        cellID = cellID + 121;
      }
      var content;
      var player;
      if (id < 121) {
        //must be player_0 'self'
        player = _index_js__WEBPACK_IMPORTED_MODULE_0__.player_0;
      } else {
        //must be player_1
        player = _index_js__WEBPACK_IMPORTED_MODULE_0__.player_1;
      }
      var cell;
      var colIncrement;
      // loop through ship
      for (var i = 0; i < len; i++) {
        if (i === 0) {
          colIncrement = 0;
        } else {
          colIncrement += j;
        }
        if (orientation === 'H') {
          content = player.gameBoard.grid[row + i][col];
          cell = document.getElementById(cellID + i);
        } else {
          content = player.gameBoard.grid[row][col + colIncrement];
          cell = document.getElementById(cellID + colIncrement);
        }
        cell.classList.remove('hit');
        cell.classList.add('sunk');
        var newHTML = void 0;
        var textChild = cell.firstElementChild || cell.firstChild;
        // console.log('textChild at id  is: ',textChild);
        // console.log('cell inner html: ',cell.innerHTML);
        if (textChild) {
          //opening and closing tags
          var openingTag = '<span style="color:white">';
          var closingTag = '</span>';
          newHTML = openingTag + cell.innerText + closingTag;
          cell.innerHTML = newHTML;
        }
      }
    }

    //id automatically distinguishes boards but id to be used is for opponents board
    //id adjusted before call to show
  }, {
    key: "showMissed",
    value: function showMissed(id) {
      //console.log('id: ',id);
      var cell = document.getElementById(id);
      var text = document.createTextNode('-X-');
      //       cell.appendChild(text);
      //       cell.classList.add('missed');
      // cell.style.backgroundColor='lightgreen';
      var logID;
      var logCell;
      //let gBrd;
      if (id < 121) {
        //must be player_0 'self'
        //player = player_0;
        logID = id + 121;
        //gBrd = player_1.gameBoard;
        console.log('logID: ', logID);
        logCell = document.getElementById(logID);
        console.log('logCell: ', logCell);
        //show own ship hit 
        logCell.classList.add('missed');
        // cell.style.backgroundColor='grey';
      } else {
        //must be player_1
        // player = player_1;
        logID = id - 121;
        //gBrd = player_0.gameBoard;
        logCell = document.getElementById(logID);
        //show ship hit
        //cell.style.backgroundColor='red';
        //logCell.backgroundColor='lightgrey';
        //logCell.classList.add('missed');
        cell.appendChild(text);
      }
    }
  }, {
    key: "showGameOver",
    value: function showGameOver(player) {
      var gameScreen = document.querySelector('.container');
      gameScreen.classList.add('hidden');
      var over = document.querySelector('.GameOver');
      over.classList.remove('hidden');
      switch (player) {
        case 'self':
          {
            var winner = document.querySelector('.selfWin');
            winner.classList.remove('hidden');
            break;
          }
        case 'oppo':
          {
            var _winner = document.querySelector('.oppoWin');
            _winner.classList.remove('hidden');
            break;
          }
      }
    }
  }, {
    key: "addShipClass",
    value: function addShipClass(id) {
      var cell = document.getElementById(id);
      cell.classList.add('ship');
      console.log('ship class added at id ', id);
    }
  }]);
}();

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _computer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer.js */ "./src/computer.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//gameBoard.js
/*
the GameBoard class
Gameboards should be able to place ships at specific coordinates by calling the ship class.
Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
Gameboards should keep track of missed attacks so they can display them properly.
Gameboards should be able to report whether or not all of their ships have been sunk.
*/




var GameBoard = /*#__PURE__*/function () {
  function GameBoard(boardData) {
    _classCallCheck(this, GameBoard);
    //cater for incorrect invocation i.e not using 'new' keyword
    if (!(this instanceof GameBoard)) {
      //throw error:
      throw Error('Error: Incorrect invocation');
      //or
      //return new GameBoard(boardData);
    } else {
      console.log('boardData: ', boardData);
      this.board = boardData.id; //which to keep
      this.id = boardData.id; //which to keep
      this.status = boardData.status; // setup / place / random / attack/ underFire / win /lose  
      this.grid = [];
      this.missed = [];
      this._placeShip = [0, 0, 0, 0, 0]; //placing ship 0 = false , 1 = true , -1 = done , -2 = no access
      this._shipsPlaced = [0, 0, 0, 0, 0]; // set to 1 as placed for Carrier, Battleship, Cruiser, Submarine, Destroyer
      this.carrierCount = 5;
      this.carrierLocale = [];
      this.cruiserCount = 3;
      this.cruiserLocale = [];
      this.battleshipCount = 4;
      this.battleshipLocale = [];
      this.submarineCount = 3;
      this.submarineLocale = [];
      this.destroyerCount = 2;
      this.destroyerLocale = [];
      this.carrierHits = 0;
      this.cruiserHits = 0;
      this.battleshipHits = 0;
      this.submarineHits = 0;
      this.destroyerHits = 0;
      this.Hits = [0, 0, 0, 0, 0]; // set to 1 as sunk for Carrier, Battleship, Cruiser, Submarine, Destroyer
      this._shipToPlace = null; //none yet 
      //set this boards sketch
      this._sketch = _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.getSketch(boardData.id);
      this._ships = [];
    }
  }

  //methods
  return _createClass(GameBoard, [{
    key: "getBoardStatus",
    value: function getBoardStatus() {
      return this.status;
    }
  }, {
    key: "setBoardStatus",
    value: function setBoardStatus(status) {
      //console.log('status: ',status);
      switch (status) {
        //valid
        case 'setup':
        case 'place':
        case 'random:':
        case 'attack':
        case 'underFire':
        case 'win':
        case 'lose':
          {
            this.status = status;
            break;
          }
        //invalid
        default:
          {
            console.log('Invalid status');
            break;
          }
      } //switch
      //console.log('board status set: ', this.status);
    } //set

    //placing which ship?
  }, {
    key: "setShipToPlace",
    value: function setShipToPlace(ship) {
      this._shipToPlace = ship;
      console.log('setting ship', ship);
    }
  }, {
    key: "getShipToPlace",
    value: function getShipToPlace() {
      return this._shipToPlace;
    }
  }, {
    key: "setPlaceShip",
    value: function setPlaceShip(array) {
      this._placeShip = array;
    }
  }, {
    key: "getPlaceShip",
    value: function getPlaceShip() {
      return this._placeShip;
    }
  }, {
    key: "setShipsPlaced",
    value: function setShipsPlaced(index) {
      this._shipsPlaced[index] = 1;
    }
  }, {
    key: "getShipsPlaced",
    value: function getShipsPlaced() {
      return this._shipsPlaced;
    }

    //place ship at specific coordinates from mouse click event e by calling the ship class
  }, {
    key: "placeShip",
    value: function placeShip(e) {
      var row;
      var col;
      var placeShip = this.getPlaceShip();
      var ship = this.getShipToPlace();
      var error = false;
      row = Math.floor(e.id / 11); //eg [row 2 col 9] e.id = (j=2)*11 + (i=9 ) = 31 row = 2
      if (e.id > 120) {
        row = row - 11;
      } //caters for board_1 player_1
      col = e.id % 11; // 31 % 11 = 31-22 = 9  col = 9

      // console.log('e.id: ', e.id, ' row: ',row,' col: ',col);

      // console.log(ship);
      // console.log('at place ships');
      //if currently no ship
      //console.log('grid: ',this.grid );
      // console.log('grid[row][col]: ',this.grid[row][col] );
      if (this.grid[row][col] === 0) {
        var cell = document.getElementById(e.id);
        var text = document.createTextNode(this.getShipToPlace());
        //console.log('*text', text);

        switch (ship) {
          case 'C':
            {
              //check not yet placed i.e.> -1                         
              if (placeShip[0] > -1) {
                //indicate placing true = 1
                placeShip[0] = 1; //starting placement flagged to local array
                //flag other ship placement not accessible = -2
                placeShip[1] = placeShip[2] = placeShip[3] = placeShip[4] = -2; // no access 
                //placement currently active so complete process
                if (placeShip[0] > 0) {
                  //not yet reached ship length     
                  if (this.carrierCount-- > 0) {
                    //console.log('placeShip: ',placeShip,' carrierCount ',this.carrierCount);
                    cell.appendChild(text);
                    //console.log('text', text);
                    this.grid[row][col] = text;
                    this.carrierLocale.push([row, col]);
                  } else {
                    error = true;
                  }
                  if (this.carrierCount === 0) {
                    this.setShipsPlaced(0); //flag carrier position set
                    //create the ship data
                    var shipData = {
                      'type': 'carrier',
                      'location': [],
                      'length': 5
                    };
                    var orientation;
                    //is it placed horizontal or vertical
                    var locale = this.carrierLocale;
                    var isHorizontal = this.checkHorizontal(locale);
                    //need to cater for higher grid id set before lower grid id
                    var origin = this.checkOrigin(locale);
                    if (isHorizontal) {
                      orientation = 'H';
                    } else {
                      orientation = 'V';
                    }
                    shipData.location = [origin[0], origin[1], orientation];
                    //console.log('Carrier shipData: ',shipData);
                    this._ships[0] = new _ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship(shipData);
                    //console.log('carrier: ',this._ships[0]);
                    placeShip[0] = -1; //completed flagged to local array
                    placeShip[1] = placeShip[2] = placeShip[3] = placeShip[4] = 0; //clear to set
                  }
                }
              }
              break;
            }
          case 'b':
            {
              if (placeShip[1] > -1) {
                placeShip[1] = 1; //starting placement flagged to local array
                placeShip[2] = placeShip[3] = placeShip[4] = -2; // no access 
                if (placeShip[1] > 0) {
                  //currently active so complete
                  if (this.battleshipCount-- > 0) {
                    cell.appendChild(text);
                    //console.log('text', text);
                    this.grid[row][col] = text;
                    this.battleshipLocale.push([row, col]);
                  } else {
                    error = true;
                  }
                  if (this.battleshipCount === 0) {
                    this.setShipsPlaced(1); //flag battleship position set

                    //create the ship data
                    var _shipData = {
                      'type': 'battleship',
                      'location': [],
                      'length': 4
                    };
                    var _orientation;
                    //is it placed horizontal or vertical
                    var _locale = this.battleshipLocale;
                    var _isHorizontal = this.checkHorizontal(_locale);
                    //need to cater for higher grid id set before lower grid id
                    var _origin = this.checkOrigin(_locale);
                    if (_isHorizontal) {
                      _orientation = 'H';
                    } else {
                      _orientation = 'V';
                    }
                    _shipData.location = [_origin[0], _origin[1], _orientation];
                    //console.log('Battleship shipData: ',shipData);
                    this._ships[1] = new _ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship(_shipData);
                    //console.log('battleship: ',this._ships[1]);

                    placeShip[1] = -1; //completed flagged to local array
                    placeShip[2] = placeShip[3] = placeShip[4] = 0; //clear to set
                  }
                }
              }
              break;
            }
          case 'c':
            {
              if (placeShip[2] > -1) {
                placeShip[2] = 1; //starting placement flagged to local array
                placeShip[3] = placeShip[4] = -2; // no access 
                if (placeShip[2] > 0) {
                  //currently active so complete
                  if (this.cruiserCount-- > 0) {
                    cell.appendChild(text);
                    //console.log('text', text);
                    this.grid[row][col] = text;
                    this.cruiserLocale.push([row, col]);
                  } else {
                    error = true;
                  }
                  if (this.cruiserCount === 0) {
                    this.setShipsPlaced(2); //flag cruiser position set

                    //create the ship data
                    var _shipData2 = {
                      'type': 'cruiser',
                      'location': [],
                      'length': 3
                    };
                    var _orientation2;
                    //is it placed horizontal or vertical
                    var _locale2 = this.cruiserLocale;
                    var _isHorizontal2 = this.checkHorizontal(_locale2);
                    //need to cater for higher grid id set before lower grid id
                    var _origin2 = this.checkOrigin(_locale2);
                    if (_isHorizontal2) {
                      _orientation2 = 'H';
                    } else {
                      _orientation2 = 'V';
                    }
                    _shipData2.location = [_origin2[0], _origin2[1], _orientation2];
                    //console.log('cruiser shipData: ',shipData);
                    this._ships[2] = new _ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship(_shipData2);
                    //console.log('cruiser: ',this._ships[2]);

                    placeShip[2] = -1; //completed flagged to local array
                    placeShip[3] = placeShip[4] = 0; //clear to set
                  }
                }
              }
              break;
            }
          case 's':
            {
              if (placeShip[3] > -1) {
                placeShip[3] = 1; //starting placement flagged to local array
                placeShip[4] = -2; // no access 
                if (placeShip[3] > 0) {
                  //currently active so complete
                  if (this.submarineCount-- > 0) {
                    cell.appendChild(text);
                    //console.log('text', text);
                    this.grid[row][col] = text;
                    this.submarineLocale.push([row, col]);
                  } else {
                    error = true;
                  }
                  if (this.submarineCount === 0) {
                    this.setShipsPlaced(3); //flag submarine position set

                    //create the ship data
                    var _shipData3 = {
                      'type': 'submarine',
                      'location': [],
                      'length': 3
                    };
                    var _orientation3;
                    //is it placed horizontal or vertical
                    var _locale3 = this.submarineLocale;
                    var _isHorizontal3 = this.checkHorizontal(_locale3);
                    //need to cater for higher grid id set before lower grid id
                    var _origin3 = this.checkOrigin(_locale3);
                    if (_isHorizontal3) {
                      _orientation3 = 'H';
                    } else {
                      _orientation3 = 'V';
                    }
                    _shipData3.location = [_origin3[0], _origin3[1], _orientation3];
                    //console.log('submarine shipData: ',shipData);
                    this._ships[3] = new _ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship(_shipData3);
                    //console.log('submarine: ',this._ships[3]);

                    placeShip[3] = -1; //completed flagged to local array
                    placeShip[4] = 0; //clear to set
                  }
                }
              }
              break;
            }
          case 'd':
            {
              if (placeShip[4] > -1) {
                placeShip[4] = 1; //starting placement flagged to local array
                if (placeShip[4] > 0) {
                  //currently active so complete
                  if (this.destroyerCount-- > 0) {
                    cell.appendChild(text);
                    //console.log('text', text);
                    this.grid[row][col] = text;
                    this.destroyerLocale.push([row, col]);
                  } else {
                    error = true;
                  }
                  if (this.destroyerCount === 0) {
                    this.setShipsPlaced(4); //flag destroyer position set

                    //create the ship data
                    var _shipData4 = {
                      'type': 'destroyer',
                      'location': [],
                      'length': 2
                    };
                    var _orientation4;
                    //is it placed horizontal or vertical
                    var _locale4 = this.destroyerLocale;
                    var _isHorizontal4 = this.checkHorizontal(_locale4);
                    //need to cater for higher grid id set before lower grid id
                    var _origin4 = this.checkOrigin(_locale4);
                    if (_isHorizontal4) {
                      _orientation4 = 'H';
                    } else {
                      _orientation4 = 'V';
                    }
                    _shipData4.location = [_origin4[0], _origin4[1], _orientation4];
                    //console.log('destroyer shipData: ',shipData);
                    this._ships[4] = new _ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship(_shipData4);
                    //console.log('destroyer: ',this._ships[4]);

                    placeShip[4] = -1; //completed flagged to local array
                  }
                }
              }
              break;
            }
        } // switch ship
        //update this._placeShip 
        this.setPlaceShip(placeShip);
      } else {
        error = true;
      }
      if (error) {
        console.log('error: a clash OR  exceeds permitted length');
      }
    }

    //randomly place shipping
  }, {
    key: "randomiseShips",
    value: function randomiseShips() {
      //randomise
      //a local grid to fit position of ships 
      var grid = [];
      var rows = 11;
      var cols = 11;
      //set each ACTIVE cell clear i.e. excludes i or j == 0
      for (var i = 1; i < rows; i++) {
        grid[i] = [];
        for (var j = 1; j < cols; j++) {
          grid[i][j] = 0;
        }
      }
      var shipsData = {
        //location tsetRnd() returns an array of start row, start col, and final entry orientation
        //NB so orientation now from location[2]
        carrier: {
          type: 'Carrier',
          location: this.setRnd('C', grid, 5),
          length: 5
        },
        battleship: {
          type: 'Battleship',
          location: this.setRnd('b', grid, 4),
          length: 4
        },
        cruiser: {
          type: 'Cruiser',
          location: this.setRnd('c', grid, 3),
          length: 3
        },
        submarine: {
          type: 'Submarine',
          location: this.setRnd('s', grid, 3),
          length: 3
        },
        destroyer: {
          type: 'Destroyer',
          location: this.setRnd('d', grid, 2),
          length: 2
        }
      };
      this.createShips(shipsData);
      return shipsData;
    }

    //method to set ship locations randomly without clashing
  }, {
    key: "setRnd",
    value: function setRnd(s, grid, n) {
      //console.log('ship: ',s,' grid: ',JSON.stringify(grid),' n: ',n);

      var row;
      var startRow;
      var col;
      var startCol;
      var built = false;
      var cellsClear = true;
      var count;
      var canBuild_H = true;
      var canBuild_V = true;
      var shipLocation = []; //location to return as array of start row, start col, and final entry orientation

      var tempCounter = 0;
      while (!built) {
        while (tempCounter < 40) {
          //select random cell to start
          row = Math.floor(1 + Math.random() * (10 - n));
          col = Math.floor(1 + Math.random() * (10 - n));
          startRow = row;
          startCol = col;

          //check if can build horizontally or vertically from here
          if (grid[row][col] === 0) {
            count = 0;
            //try to build horizotally
            while (count < n) {
              if (grid[row][col++] === 0) {
                count++;
              } else {
                cellsClear = false;
                count = 10;
                canBuild_H = false;
              }
              if (count === n) {
                canBuild_H = true;
                count = 10;
              }
            }
            //check both H & V
            //reset
            cellsClear = true;
            count = 0;
            //try to build vertically
            //reset row col to start row col
            row = startRow;
            col = startCol;
            while (count <= n) {
              if (grid[row++][col] === 0) {
                count++;
              } else {
                cellsClear = false;
                count = 10;
                canBuild_V = false;
              }
              if (count === n) {
                canBuild_V = true;
                count = 10;
              }
            }
          } else {
            canBuild_H = false;
            canBuild_V = false;
            cellsClear = true;
            built = false;
          }
          if (canBuild_H || canBuild_V) {
            if (canBuild_H && canBuild_V) {
              //select which
              var hor_ver = Math.floor(Math.random() * 2);
              switch (hor_ver) {
                case 0:
                  {
                    //build horizontal
                    for (var i = 0; i < n; i++) {
                      grid[startRow][startCol + i] = s;
                    }
                    built = true;
                    shipLocation[0] = startRow;
                    shipLocation[1] = startCol;
                    shipLocation[2] = 'H';
                    break;
                  }
                case 1:
                  {
                    //build vertical
                    for (var _i = 0; _i < n; _i++) {
                      grid[startRow + _i][startCol] = s;
                    }
                    built = true;
                    shipLocation[0] = startRow;
                    shipLocation[1] = startCol;
                    shipLocation[2] = 'V';
                    break;
                  }
              }
            } else {
              if (canBuild_H) {
                //build horizontal
                for (var _i2 = 0; _i2 < n; _i2++) {
                  grid[startRow][startCol + _i2] = s;
                }
                built = true;
                shipLocation[0] = startRow;
                shipLocation[1] = startCol;
                shipLocation[2] = 'H';
              } else {
                if (canBuild_V) {
                  //build vertical
                  for (var _i3 = 0; _i3 < n; _i3++) {
                    grid[startRow + _i3][startCol] = s;
                  }
                  built = true;
                  shipLocation[0] = startRow;
                  shipLocation[1] = startCol;
                  shipLocation[2] = 'V';
                }
              }
            }
          }
          if (built === true) {
            tempCounter = 100;
          }
        } //tempCounter
      } //while not built
      //done built
      //return shipsData.ship.location as array of start row and start column + orientation
      return shipLocation;
    } //setRnd()
  }, {
    key: "setBoardGrid",
    value: function setBoardGrid(ships) {
      console.log('setBoardGrid() called, id: ', this.id);
      //within 11 x 11 grid of which 1-> 10 active
      var grid = [];
      var rows = 11;
      var cols = 11;
      //set each ACTIVE cell clear i.e. excludes i or j == 0
      for (var i = 1; i < rows; i++) {
        grid[i] = [];
        for (var j = 1; j < cols; j++) {
          grid[i][j] = 0;
        }
      }
      var numShips = Object.keys(ships).length;

      //let  shipType = ['carrier', 'battleship', 'cruiser', 'submarine', 'destroyer' ];
      var shipStr = ['C', 'b', 'c', 's', 'd'];
      for (var n = 0; n < numShips; n++) {
        var id = shipStr[n];
        var arr = Object.values(ships)[n].location;
        var row = arr[0];
        var col = arr[1];
        var orientation = arr[2];
        var len = Object.values(ships)[n].length;
        console.log('n length: ', n, ' ', len);
        var gridID = void 0;

        //horizontal
        if (orientation === 'H') {
          for (var _j = 0; _j < len; _j++) {
            grid[row][col + _j] = id;
            gridID = row * 11 + (col + _j);
            if (this.board === 'self') {
              _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.addShipClass(gridID);
            }
          }
        } else {
          //vertical
          for (var _j2 = 0; _j2 < len; _j2++) {
            console.log('j: ', _j2, ' row: ', row, ' col: ', col);
            grid[row + _j2][col] = id;
            gridID = (row + _j2) * 11 + col;
            if (this.board === 'self') {
              _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.addShipClass(gridID);
            }
          }
        }
      }
      this.grid = grid;
    }

    //render gameBoard
  }, {
    key: "renderGameBoardContent",
    value: function renderGameBoardContent() {
      var id;
      for (var i = 1; i < 11; i++) {
        for (var j = 1; j < 11; j++) {
          if (this.board === 'self') {
            id = i * 11 + j;
            var content = this.grid[i][j];
            _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.renderCellContent(id, content);
          } else {
            id = i * 11 + j + 121; //0 -> 120 for board 1 
            var _content = this.grid[i][j];
            _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.renderCellContent(id, _content);
            //board 1 so hide cell content for now
            _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.hideCellContent(id);
            //display.doc.hideGridContent('computer');
          }
        }
      }
    }

    //initialise board grid to empty
  }, {
    key: "initialiseBoardGrid",
    value: function initialiseBoardGrid() {
      //within 11 x 11 grid of which 1-> 10 active
      var rows = 11;
      var cols = 11;
      //set each ACTIVE cell clear i.e. excludes i or j == 0
      for (var i = 1; i < rows; i++) {
        this.grid[i] = [];
        this.missed[i] = [];
        for (var j = 1; j < cols; j++) {
          this.grid[i][j] = 0;
          this.missed[i][j] = 0;
        }
      }
    }

    //get sketch
  }, {
    key: "getSketch",
    value: function getSketch() {
      return this._sketch;
    }

    //create individual ships from combined data set
  }, {
    key: "createShips",
    value: function createShips(data) {
      var _this = this;
      var count = 0;
      var oldCount = 0;
      Object.keys(data).forEach(function (key) {
        var ship = null;
        ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship(data[key]);
        _this._ships[count++] = ship;
        //console.log(`ship[${oldCount++}]:  ${key}: ${JSON.stringify(ship)}`); 
      });
    }

    //check ship origin from locale data
  }, {
    key: "checkOrigin",
    value: function checkOrigin(locale) {
      var origin = locale[0];
      locale.forEach(function (item) {
        var row = item[0];
        var col = item[1];
        //find lowest values 
        if (row < origin[0] || col < origin[1]) {
          origin = item;
        }
      });
      return origin;
    }

    //locale is an array of ship placements [[row,col],....,[row,col]]
  }, {
    key: "checkHorizontal",
    value: function checkHorizontal(locale) {
      var horizontal = false;
      var origin = locale[0];
      var row;
      locale.forEach(function (item) {
        row = item[0];
        if (row === origin[0]) {
          horizontal = true;
        } else {
          horizontal = false;
        }
      });
      return horizontal;
    }

    //check ships placed
  }, {
    key: "checkBoardsShipsPlaced",
    value: function checkBoardsShipsPlaced() {
      var arr = this.getShipsPlaced();
      var sum = 0;
      arr.map(function (e) {
        return sum += e;
      });
      if (sum === 5) {
        return sum; //true;
      } else {
        return sum; //false;
      }
    }

    //receiveAttack
  }, {
    key: "receiveAttack",
    value: function receiveAttack(id) {
      console.log('id: ', id);
      var gameOver = false;
      var aHit = false;
      var shipSank = false;
      var gridID = id;
      if (gridID > 120) {
        gridID = id - 121;
      }
      //console.log('gridID: ',gridID);
      var row = Math.floor(gridID / 11);
      //console.log('row: ', row);
      var col = gridID % 11;
      //console.log('col: ', col);
      var pos = [row, col];
      console.log('pos: ', pos);
      var content = this.grid[row][col];
      console.log('content of grid[row][col]: ', content, ' pos: ', pos);
      if (!(content === 0)) {
        switch (content) {
          case 'C':
            {
              if (this.Hits[0] === 0) {
                //console.log('at C ');
                aHit = this._ships[0].hit(pos);
                console.log('aHit: ', aHit);
                if (aHit) {
                  _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.showHit(this._ships[0], id);
                  shipSank = this._ships[0].isSunk();
                  console.log('ship: C sunk?: ', shipSank);
                  if (shipSank) {
                    this.Hits[0] = 1;
                    _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.showSunk(this._ships[0], id);
                  }
                }
              } else {
                console.log('Carrier already sunk!');
              }
              break;
            }
          case 'b':
            {
              if (this.Hits[1] === 0) {
                //console.log('at b ');
                aHit = this._ships[1].hit(pos);
                console.log('aHit: ', aHit);
                if (aHit) {
                  console.log('hit at id: ', id);
                  _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.showHit(this._ships[1], id);
                  shipSank = this._ships[1].isSunk();
                  console.log('ship: b sunk?: ', shipSank);
                  if (shipSank) {
                    this.Hits[1] = 1;
                    _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.showSunk(this._ships[1], id);
                  }
                }
              } else {
                console.log('Battleship already sunk!');
              }
              break;
            }
          case 'c':
            {
              if (this.Hits[2] === 0) {
                //console.log('at c ');
                aHit = this._ships[2].hit(pos);
                console.log('aHit: ', aHit);
                if (aHit) {
                  _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.showHit(this._ships[2], id);
                  shipSank = this._ships[2].isSunk();
                  console.log('ship: c sunk?: ', shipSank);
                  if (shipSank) {
                    this.Hits[2] = 1;
                    _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.showSunk(this._ships[2], id);
                  }
                }
              } else {
                console.log('Cruiser already sunk!');
              }
              break;
            }
          case 's':
            {
              if (this.Hits[3] === 0) {
                //console.log('at s ');
                aHit = this._ships[3].hit(pos);
                console.log('aHit: ', aHit);
                if (aHit) {
                  _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.showHit(this._ships[3], id);
                  shipSank = this._ships[3].isSunk();
                  console.log('ship: s sunk?: ', shipSank);
                  if (shipSank) {
                    this.Hits[3] = 1;
                    _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.showSunk(this._ships[3], id);
                  }
                }
              } else {
                console.log('Submarine already sunk!');
              }
              break;
            }
          case 'd':
            {
              if (this.Hits[4] === 0) {
                //console.log('at d ');
                aHit = this._ships[4].hit(pos);
                console.log('aHit: ', aHit);
                if (aHit) {
                  _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.showHit(this._ships[4], id);
                  shipSank = this._ships[4].isSunk();
                  console.log('ship: d sunk?: ', shipSank);
                  if (shipSank) {
                    this.Hits[4] = 1;
                    _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.showSunk(this._ships[4], id);
                  }
                }
              } else {
                console.log('Destroyer already sunk!');
              }
              break;
            }
        }
      } else {
        //swap players 
        //log missed attack to opponents board
        console.log('calling missedAttack() at id ', id);
        gameOver = this.missedAttack(id);
      }
      //are all sunk
      var sum = this.Hits.reduce(function (a, b) {
        return a + b;
      }, 0);
      if (sum === 5) {
        //flag all ships sunk 
        if (this.board === 'self') {
          this.setBoardStatus('lose');
          _index_js__WEBPACK_IMPORTED_MODULE_0__.player_1.board.setBoardStatus('win');
          //display game over screen
          _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.showGameOver('oppo');
        } else {
          this.setBoardStatus('lose');
          _index_js__WEBPACK_IMPORTED_MODULE_0__.player_0.board.setBoardStatus('win');
          //display game over screen
          _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.showGameOver('self');
        }
        //end game
        //console.log('Game Over !')
        //console.log('this board: ', this.board,' this board status: ',this.getBoardStatus()); 
        //exit function
        gameOver = true;
      }
      //swap boards under fire unless last was ahit
      if (aHit) {
        //keep attacking
        aHit = false;
        console.log('a hit so attacking again');
        console.log('Active player:', _index_js__WEBPACK_IMPORTED_MODULE_0__.attackingPlayer);
        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.attackingPlayer === _index_js__WEBPACK_IMPORTED_MODULE_0__.player_1) {
          //if player_1 is computer
          if (_index_js__WEBPACK_IMPORTED_MODULE_0__.players.computer) {
            console.log('gb 800 calling computer attack function');
            gameOver = (0,_computer_js__WEBPACK_IMPORTED_MODULE_2__.compAttack)();
          } else {
            console.log('awaiting human opponents attack');
          }
        } else {
          console.log('awaiting self to attack');
        }
      } else {
        //change attacker
        if (this.board === 'self') {
          //monitoring self under fire
          if (this.status === 'underFire') {
            this.status = 'attack';
            _index_js__WEBPACK_IMPORTED_MODULE_0__.player_1.gameBoard.status = 'underFire';
            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setActivePlayer)(_index_js__WEBPACK_IMPORTED_MODULE_0__.player_0);
          }
        } else {
          //must be monitoring player_1 under fire
          if (this.status === 'underFire') {
            this.status = 'attack';
            _index_js__WEBPACK_IMPORTED_MODULE_0__.player_0.gameBoard.status = 'underFire';
            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setActivePlayer)(_index_js__WEBPACK_IMPORTED_MODULE_0__.player_1);
            // console.log('players.computer: ', players.computer);
            //               console.log('Active player:',attackingPlayer);
            //if player_1 is computer
            if (_index_js__WEBPACK_IMPORTED_MODULE_0__.players.computer) {
              console.log('gB 828 calling computer attack function');
              gameOver = (0,_computer_js__WEBPACK_IMPORTED_MODULE_2__.compAttack)();
            }
          }
        }
      }
      return gameOver;
    }

    //log missedAttack (id ) where id is the attacked grid row col but need to display other board so adjust id
  }, {
    key: "missedAttack",
    value: function missedAttack(id) {
      var row;
      var col;
      var gameOver = false;
      id = Number(id);
      console.log('at missed attack');
      if (id > 120) {
        id = id - 121;
        row = Math.floor(id / 11);
        col = id % 11;
        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.player_1.gameBoard.missed[row][col] === 0) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.player_1.gameBoard.missed[row][col] = 'X';
          _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.showMissed(id);
        }
      } else {
        row = Math.floor(id / 11);
        col = id % 11;
        id = id + 121;
        console.log('pl_0 missed[r][c]: ', _index_js__WEBPACK_IMPORTED_MODULE_0__.player_0.gameBoard.missed[row][col]);
        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.player_0.gameBoard.missed[row][col] === 0) {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.player_0.gameBoard.missed[row][col] = 'X';
          _index_js__WEBPACK_IMPORTED_MODULE_0__.display.doc.showMissed(id);
        }
      }
      console.log('attacking player: ', _index_js__WEBPACK_IMPORTED_MODULE_0__.attackingPlayer);
      console.log('this.board', this.board);
      //change attacker
      /*
       if(this.board === 'self'){ 
          //monitoring self under fire
          if(this.status === 'underFire'){ 
              this.status = 'attack';
              player_1.gameBoard.status = 'underFire';
      //         setActivePlayer(player_0);
              //console.log('players.self attacking: ', players.self);
              //console.log('players array: ', players);
              //console.log('awaiting player_0 attack');
              display.doc.monitorBoard(player_1.gameBoard);    
          }
      }else{
          //must be monitoring player_1 under fire
          if(this.status === 'underFire'){ 
              this.status = 'attack';
      //         setActivePlayer(player_1);
              player_0.gameBoard.status = 'underFire';
              console.log('player_1 attacking: ', players.computer);
              if(players.computer){
                  console.log('gB 882 calling computer attack function');
                  gameOver = compAttack();
                  if(gameOver){console.log('returning gameOver: ',gameOver);return true;}
              }else{
                  console.log('awaiting human opponents attack');
              }
          }
      }
      */
      return false; //game not over
    }

    //receiveTEST
  }, {
    key: "receiveTEST",
    value: function receiveTEST(id) {
      console.log('at receiveTEST receive attack id: ', id);
    }

    /*
    addShipsClass () {
       console.log('adding ships class');
       let grid = this.grid;
       let i = 1;
       let j = 1;
       let e;
       let c;
       
       for(i=1;i<11;i++){
           for(j=1;j<11;j++){
              e = grid[i][j];
              console.log(typeof(e), e.valueOf());
              e = e.valueOf();
              console.log('grid cell i j e: ', i, ' ', j, ' ', e), 'char code', e.charCodeAt(0);
              console.log("C".valueOf(),' ',"C".charCodeAt(0) );
              if( (e == "C")||(e === "C" ) || (e === "b")  ||(e === "c")
                || (e === "s" ) || (e === "d") ){
                   id = (i*11)+j;
                   console.log('id: ',id);
                   display.doc.addShipClass(id);
              }else{
               console.log('false e: ',e);
              }
           }
       }
       console.log("C".charCodeAt(0) );
       console.log("b".charCodeAt(0) );
       console.log("c".charCodeAt(0) );
       console.log("s".charCodeAt(0) );
       console.log("d".charCodeAt(0) );
    }
       */
  }, {
    key: "addShipsClass",
    value: function addShipsClass(player) {
      /*
      for(let i = 0; i< 5; i++){
        const  ship = player.gameBoard.ships[i];
        const shipLocale = ship.getLocale();
      }
        */
      this.setBoardGrid(this._ships);
    }
  }]);
}();


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attackingPlayer: () => (/* binding */ attackingPlayer),
/* harmony export */   display: () => (/* binding */ display),
/* harmony export */   playerSelected: () => (/* binding */ playerSelected),
/* harmony export */   player_0: () => (/* binding */ player_0),
/* harmony export */   player_1: () => (/* binding */ player_1),
/* harmony export */   players: () => (/* binding */ players),
/* harmony export */   setActivePlayer: () => (/* binding */ setActivePlayer)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameBoard.js */ "./src/gameBoard.js");
/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listeners.js */ "./src/listeners.js");
//index.js
/*
    display start screen await input
    accept player1 data input
    accept player2 data input if not computer
    start play
    accept player1 play
    swap screens unless computer play
    if human accept player2 play
    report result of play
    check game over if so display game over screen then back to Start screen
    else repeat at accept player 1 play
*/






//export const display = new Display(this);
var display = new _display_js__WEBPACK_IMPORTED_MODULE_1__.Display(undefined);
//the set of player options
var players = {
  'self': false,
  'human': false,
  'computer': false
}; //either human or computer set true from splash screen

var player_0 = {}; //self
var player_1 = {}; //opponent 
var attackingPlayer = null; //starts with self

//the set of boards
var boards = {
  'myBoard': 0,
  'theirBoard': 1
};
var playerNotSelected = true;

//Start screen 

//Control Logic <-------
//display screen       |  ---> index.html
//set listeners        |
//set the start screen button listeners
//play human
var human = (0,_listeners_js__WEBPACK_IMPORTED_MODULE_4__.btnListener)(_listeners_js__WEBPACK_IMPORTED_MODULE_4__.human_btnListenerObj);
//play computer
var computer = (0,_listeners_js__WEBPACK_IMPORTED_MODULE_4__.btnListener)(_listeners_js__WEBPACK_IMPORTED_MODULE_4__.comp_btnListenerObj);
//action listeners     |  ---> listeners.js
//update ---------------

//await opponent selected
var opponentSelected = false;
awaitPlayerSelected();

//ship data entry screen
//Control Logic <-------
//display screen       |
//set listeners        |
//set the place ships btn listeners
//set Ships self
var setShips0 = (0,_listeners_js__WEBPACK_IMPORTED_MODULE_4__.btnListener)(_listeners_js__WEBPACK_IMPORTED_MODULE_4__.player0_radioBtnListenerObj);
var confirm0 = (0,_listeners_js__WEBPACK_IMPORTED_MODULE_4__.btnListener)(_listeners_js__WEBPACK_IMPORTED_MODULE_4__.confirm0_btnListenerObj);
//setShips human
var setShips1 = (0,_listeners_js__WEBPACK_IMPORTED_MODULE_4__.btnListener)(_listeners_js__WEBPACK_IMPORTED_MODULE_4__.player1_radioBtnListenerObj);
var confirm1 = (0,_listeners_js__WEBPACK_IMPORTED_MODULE_4__.btnListener)(_listeners_js__WEBPACK_IMPORTED_MODULE_4__.confirm1_btnListenerObj);
//action listeners      |  ---> listeners.js    |
//update ---------------

//game play screen
//Control Logic <-------
//display screen       |  ---> index.html
//set listeners        |
//action listeners     |
//update ---------------

//game over screen
//Control Logic <-------
//display screen       |
//set listeners        |
//action listeners     |
//update ---------------

//functions
function awaitPlayerSelected() {
  if (playerNotSelected) {
    console.log('waiting for player selection');
    setTimeout(awaitPlayerSelected, 100);
  }
}

//create both players once opponent selected
function playerSelected() {
  playerNotSelected = false;
  if (players.human) {
    //create human opponent
    player_1 = new _player_js__WEBPACK_IMPORTED_MODULE_2__.Player('human');
    console.log('player: ', player_1);
  }
  if (players.computer) {
    //create computer opponent
    player_1 = new _player_js__WEBPACK_IMPORTED_MODULE_2__.Player('computer');
    console.log('player: ', player_1);
  }
  //create self player 0
  player_0 = new _player_js__WEBPACK_IMPORTED_MODULE_2__.Player('self');
  console.log('player: ', player_0, ' game board: ', player_0.gameBoard);
  players.self = true;
  setActivePlayer('self');
  //set up grid and place ships player_0 from button listener
  /* moved to btn listener */
  player_0.gameBoard.initialiseBoardGrid();
  display.doc.gridSetUp(player_0.gameBoard);
  player_0.gameBoard.renderGameBoardContent();
  display.doc.monitorShipPlacement(player_0);

  //player 1 set up from button listener
  //set player_0 board status attack via btn player_0 confirm listener
  //set player_1 board status underFire via btn player_0 confirm listener
  var currentBoard = player_0.gameBoard;
  var opponentBoard = player_1.gameBoard;
  //monitor both boards for mouse down
  display.doc.monitorBoard(currentBoard);
  display.doc.monitorBoard(opponentBoard);
}
function setActivePlayer(player) {
  console.log('set active attacker: ', player);
  if (!(player === null)) {
    console.log('attacking player reset to: ', player);
    attackingPlayer = player;
    if (player.name === 'self') {
      console.log('player is: ', player.name);
      console.log('now monitor player_1 game board');
      //set player_1 gameboard status to underFire
      player_1.gameBoard.status = 'underFire';
      //     display.doc.monitorBoard(player_1.gameBoard);
    }
    if (player.name === 'human') {
      console.log('player is: ', player.name);
      console.log('now monitor player_0 game board');
      //set player_0 gameboard status to underFire
      player_0.gameBoard.status = 'underFire';
      //     display.doc.monitorBoard(player_0.gameBoard);
    }
  }
}


/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   btnListener: () => (/* binding */ btnListener),
/* harmony export */   comp_btnListenerObj: () => (/* binding */ comp_btnListenerObj),
/* harmony export */   confirm0_btnListenerObj: () => (/* binding */ confirm0_btnListenerObj),
/* harmony export */   confirm1_btnListenerObj: () => (/* binding */ confirm1_btnListenerObj),
/* harmony export */   human_btnListenerObj: () => (/* binding */ human_btnListenerObj),
/* harmony export */   placeShipsMethod: () => (/* binding */ placeShipsMethod),
/* harmony export */   player0_radioBtnListenerObj: () => (/* binding */ player0_radioBtnListenerObj),
/* harmony export */   player1_radioBtnListenerObj: () => (/* binding */ player1_radioBtnListenerObj)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
//listeners.js

//imports



//globals
var placeShipsMethod = null;

//generic button listener
var btnListener = function btnListener(btn_obj) {
  var e = document.querySelector(btn_obj.selector);
  e.addEventListener('click', btn_obj.b_function);
  console.log("confirm ".concat(btn_obj.selector, ": created"));
};

//start screen  computer button onClick listener obj
var comp_btnListenerObj = {
  'selector': '.btn-right',
  'b_function': function b_function() {
    var containerDiv = document.querySelector('#container');
    var e = document.querySelector('.start');
    e.style.opacity = 0;
    //hide the startscreen
    e.classList.add('hidden');
    //show the container content
    containerDiv.classList.remove('hidden');
    //confirm player selected
    console.log('selected player1: is computer');
    _index_js__WEBPACK_IMPORTED_MODULE_1__.players.computer = true;
    _index_js__WEBPACK_IMPORTED_MODULE_1__.players.human = false;
    //player instantiated at index.js
    //flag can stop waiting for player selection
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.playerSelected)();
    _index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gameBoard.status = 'random';
    //set the player shipsData
    _index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.setShipData(_index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gameBoard.randomiseShips());
    _index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gameBoard.initialiseBoardGrid();
    //display the empty grid
    _index_js__WEBPACK_IMPORTED_MODULE_1__.display.doc.gridSetUp(_index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gameBoard);
    //update the board grid from the shipsData
    _index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gridUpdate();
    var setDiv = document.querySelector('.computerSet');
    setDiv.classList.remove('hidden');
    //set gameBoard status to eventually be under attack assumes player self starts
    _index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gameBoard.status = 'underFire';
    return true;
  }
};

//start screen  human button onClick listener obj
var human_btnListenerObj = {
  'selector': '.btn-left',
  'b_function': function b_function() {
    var containerDiv = document.querySelector('#container');
    var e = document.querySelector('.start');
    e.style.opacity = 0;
    //hide the startscreen
    e.classList.add('hidden');
    //show the container content
    containerDiv.classList.remove('hidden');
    //confirm human player selected
    console.log('selected player1: is human');
    _index_js__WEBPACK_IMPORTED_MODULE_1__.players.human = true;
    _index_js__WEBPACK_IMPORTED_MODULE_1__.players.computer = false;
    //player instantiated at index.js
    //flag can stop waiting for player selection
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.playerSelected)();
    return true;
  }
};

//player0 radio button listener obj
var player0_radioBtnListenerObj = {
  'selector': '.setShips0',
  'b_function': function b_function() {
    var btn = document.querySelector('#confirm0');
    btn.classList.remove('hidden');
  }
};

//player1 radio button listener obj
var player1_radioBtnListenerObj = {
  'selector': '.setShips1',
  'b_function': function b_function() {
    var btn = document.querySelector('#confirm1');
    btn.classList.remove('hidden');
  }
};

//confirm for player0
var confirm0_btnListenerObj = {
  'selector': '.radconfirm0',
  'b_function': function b_function() {
    var place = document.querySelector('.play0');
    place.classList.add('hidden');
    var playerStr = '0';
    placeShipsMethod = confirmSetShipsMethod(playerStr);
    //show the place ships div for player0
    if (placeShipsMethod === 'place') {
      var pickShips0 = document.querySelector(".pickShips0");
      pickShips0.classList.remove('hidden');
      _index_js__WEBPACK_IMPORTED_MODULE_1__.player_0.gameBoard.status = 'place';
    } else {
      _index_js__WEBPACK_IMPORTED_MODULE_1__.player_0.gameBoard.status = 'random';
      //set the player shipsData
      _index_js__WEBPACK_IMPORTED_MODULE_1__.player_0.setShipData(_index_js__WEBPACK_IMPORTED_MODULE_1__.player_0.gameBoard.randomiseShips());
      _index_js__WEBPACK_IMPORTED_MODULE_1__.player_0.gameBoard.initialiseBoardGrid();
      //update the board grid from the shipsData
      _index_js__WEBPACK_IMPORTED_MODULE_1__.player_0.gridUpdate();
      var attack = document.querySelector('.attack0');
      attack.classList.remove('hidden');
      //display the player_1 board for set  up if 'human'
      if (_index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.name === 'human') {
        var ships1 = document.querySelector('.play1');
        ships1.classList.remove('hidden');
      }
      // ###############    MOVE TO ALL SHIPS PLACED BUTTON ??  as well ################
      _index_js__WEBPACK_IMPORTED_MODULE_1__.player_0.gameBoard.status = 'attack';
      _index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gameBoard.status = 'underFire';
    }
  }
};

//confirm for player1
var confirm1_btnListenerObj = {
  'selector': '.radconfirm1',
  'b_function': function b_function() {
    var place = document.querySelector('.play1');
    place.classList.add('hidden');
    var playerStr = '1';
    placeShipsMethod = confirmSetShipsMethod(playerStr);
    //show the place ships div for player1
    if (placeShipsMethod === 'place') {
      var pickShips1 = document.querySelector(".pickShips1");
      pickShips1.classList.remove('hidden');
      _index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gameBoard.status = 'place';
      //display the player_1 board for set  up if 'human'
      if (_index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.name === 'human') {
        _index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gameBoard.initialiseBoardGrid();
        //display the empty grid
        _index_js__WEBPACK_IMPORTED_MODULE_1__.display.doc.gridSetUp(_index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gameBoard);
        _index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gameBoard.renderGameBoardContent();
        _index_js__WEBPACK_IMPORTED_MODULE_1__.display.doc.monitorShipPlacement(_index_js__WEBPACK_IMPORTED_MODULE_1__.player_1);
        var ships1 = document.querySelector('.pickShips1');
        ships1.classList.remove('hidden');
      }
    } else {
      _index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gameBoard.status = 'random';
      //set the player shipsData
      _index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.setShipData(_index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gameBoard.randomiseShips());
      _index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gameBoard.initialiseBoardGrid();
      _index_js__WEBPACK_IMPORTED_MODULE_1__.display.doc.gridSetUp(_index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gameBoard); //####
      //update the board grid from the shipsData
      _index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gridUpdate();
      var setDiv = document.querySelector('.humanSet');
      setDiv.classList.remove('hidden');

      // ###############    MOVE TO ALL SHIPS PLACED BUTTON ??  as well ################
      //set board status to attack to flag start game
      _index_js__WEBPACK_IMPORTED_MODULE_1__.player_0.gameBoard.status = 'attack';
      _index_js__WEBPACK_IMPORTED_MODULE_1__.player_1.gameBoard.status = 'underFire';
      //#####
    }
  }
};

//functions
function confirmSetShipsMethod(str) {
  var val;
  var placeMethod = null;
  var elName = "placeShips" + str;
  var radioButtons = document.getElementsByName(elName);
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked === true) {
      val = radioButtons[i].value;
      switch (val) {
        case 'set':
          {
            //implement provision for user to set gameboard ship positions manually
            placeMethod = 'place';
            break;
          }
        case 'rnd':
          {
            //implement provision for user to set gameboard ship positions randomly
            placeMethod = 'random';
            break;
          }
        default:
          {
            console.log('error radio button selection');
            placeMethod = null;
            break;
          }
      }
    }
  }
  return placeMethod;
} // end confirm selection

//exports


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ "./src/gameBoard.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Player = /*#__PURE__*/function () {
  function Player(player) {
    _classCallCheck(this, Player);
    //cater for incorrect invocation i.e not using 'new' keyword
    if (!(this instanceof Player)) {
      //throw error:
      throw Error('Error: Incorrect invocation');
      //or
      //return new Player(player);
    } else {
      this.name = player;
      this.shipPlacement = null;
      this.shipsData = null;
      var board = {
        'id': player,
        'status': 'setup'
      };
      this.gameBoard = new _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__.GameBoard(board);
    }
  }

  //methods
  return _createClass(Player, [{
    key: "setShipData",
    value: function setShipData(shipsData) {
      this.shipsData = shipsData;
    }
  }, {
    key: "getShipData",
    value: function getShipData() {
      return this.shipsData;
    }
  }, {
    key: "board",
    get: function get() {
      return this.gameBoard;
    },
    set: function set(board) {
      this.gameBoard = board;
    }
  }, {
    key: "gridUpdate",
    value: function gridUpdate() {
      this.gameBoard.setBoardGrid(this.shipsData);
      this.gameBoard.renderGameBoardContent();
    }
  }]);
}();


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//ship.js
/*  BattleShips
    the Ship class:

    ‘ships’ objects that include their length, 
            the number of times they’ve been hit, and 
            whether or not they’ve been sunk.
    'types' No. 	Class of ship 	Size
            1 	    Carrier 	    5
            2 	    Battleship 	    4
            3 	    Cruiser 	    3
            4 	    Submarine 	    3
            5 	    Destroyer 	    2

    only test object’s public interface. 
             Only methods or properties that are used outside of the ‘ship’ object need unit tests.

    Ships should have:
            a hit() function that increases the number of ‘hits’ to the ship.
            isSunk() should be a function that calculates whether a ship is considered sunk based             on its length and the number of hits it has received.
*/
var Ship = /*#__PURE__*/function () {
  function Ship(shipData) {
    _classCallCheck(this, Ship);
    //locale = the grid array [row col] co-ords of this ship
    _defineProperty(this, "shipLocale", []);
    //cater for incorrect invocation i.e not using 'new' keyword
    if (!(this instanceof Ship)) {
      //throw error:
      throw Error('Error: Incorrect invocation');
      //or
      //return new Ship:
      //return new Ship(shipsData);
    } else {
      console.log(shipData);
      this.type = shipData.type;
      this.location = shipData.location;
      this.length = shipData.length;
      this.hits = 0;
      this.shipHitPositions = [];
      this.is_Sunk = false;
      //this.shipLocale = the grid array row col co-ords of this ship
      this.shipLocale = this.setLocale();
    }
  }

  //methods
  //pos is a row col array & location is a row col orientation array
  //set shipLocal to be the array of row/cols occupied
  //uses string comparisons to check pos included in locality
  return _createClass(Ship, [{
    key: "hit",
    value: function hit(pos) {
      //check not an already hit position
      var a = Array.from(this.shipHitPositions);
      console.log('a: ', a);
      var found = this.checkSub(a, pos);
      //console.log('found: ',found);
      //check for hit if not already found
      if (!found) {
        //check if a hit
        a = this.shipLocale;
        var _hit = this.checkSub(a, pos);
        if (_hit) {
          //increment hits
          console.log('hit at ', pos);
          this.hits++;
          //save the hit
          this.shipHitPositions = this.shipHitPositions + pos;
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      if (this.hits === this.length) {
        return this.isSunk = true;
      } else {
        return false;
      }
    }

    /*
       setLocale() sets the locality array from this.location array
       The locality array being the space to check for hits etc
       eg for battleship location might be : location : [5, 4,'H'], ==> [start-row, start-col, orientation)
       location shows orientation to be 'H' horizontal : this.length could be 4
       so grid  cols     col4    col5    col6    col7
          grid  row 5     'b'     'b'     'b'     'b'      indicate battle ship
       so locality will be the array [ [5,4], [5,5], [5,6], [5,7] ]
       however if orientation was vertical
       the locality array would be   [ [5,4], [6,4], [7,4], [8,4] ]
    */
  }, {
    key: "setLocale",
    value: function setLocale() {
      //horizontal or vertical in grid
      var row = this.location[0];
      var col = this.location[1];
      var orientation = this.location[2];
      var locality_row = [];
      var locality_col = [];
      var locality = [];
      if (orientation === 'H') {
        //horizontal so cols increase
        for (var i = 0; i < this.length; i++) {
          locality_row[i] = row;
          locality_col[i] = col + i;
        }
      } else {
        //vertical so rows increase
        for (var _i = 0; _i < this.length; _i++) {
          locality_row[_i] = row + _i;
          locality_col[_i] = col;
        }
      }
      for (var _i2 = 0; _i2 < this.length; _i2++) {
        locality[_i2] = [locality_row[_i2], locality_col[_i2]];
      }
      return locality;
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      //return the locale array
      return this.locale;
    }

    // check for existence of sub array sub in array a returns true or false
  }, {
    key: "checkSub",
    value: function checkSub(a, sub) {
      return a.join(',').includes(sub.join(','));
    }
  }]);
}();


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kZTVmNmJhMThkZTkxNjJmZTUxOC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyx3SEFBMkM7QUFDdkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RkFBd0YsYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksV0FBVyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyx3QkFBd0IsV0FBVyxVQUFVLE1BQU0sWUFBWSxxQkFBcUIsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxh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aUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JzMS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JzMS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYnMxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iczEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iczEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYnMxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iczEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYnMxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JzMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JzMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JzMS8uL3NyYy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iczEvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iczEvLi9zcmMvZG9tLWZucy5qcyIsIndlYnBhY2s6Ly9iczEvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JzMS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iczEvLi9zcmMvbGlzdGVuZXJzLmpzIiwid2VicGFjazovL2JzMS8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYnMxLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYnMxLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iczEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnMxL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JzMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnMxL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYnMxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYnMxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYnMxL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JzMS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iczEvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JzMS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JzMS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYnMxL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2JhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBCYXR0bGVTaGlwcyBzdHlsZS5jc3NcdCovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1yZXNldC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuKiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNvbG91ciBzY2hlbWUgIDEgbGlnaHRlciB0byA0IGRhcmtlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogdXNpbmcgdmFyaWFibGVzIGUuZy5cbjpyb290IHtcbiAgLS1ibHVlOiAjMWU5MGZmO1xuICAtLXdoaXRlOiAjZmZmZmZmO1xufVxuYm9keSB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpOyB9XG4qL1xuXG46cm9vdCB7XG4gIC0tY29sXzEgIDogI2JiZTRlOTsgICAvKiBsaWdodGVzdCovXG4gIC0tY29sXzIgIDogIzc5YzJkMDsgICAvKiBsaWdodGVyICovXG4gIC0tY29sXzMgIDogIzUzYThiNjsgICAvKiBkYXJrZXIgICovXG4gIC0tY29sXzQgIDogIzU1ODViNTsgICAvKiBkYXJrZXN0ICovXG59XG5cbi5jb2wtMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbF8xKTtcbn1cblxuLmNvbC0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzIpO1xufVxuXG4uY29sLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfMyk7XG59XG5cbi5jb2wtNCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbF80KTs7XG59XG5cbmJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBIaWRlIHNjcm9sbGJhcnMgKi9cbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS10ZXh0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKmlucHV0IGN1cnNvclxuLmN1cnNvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSAyMyA0Mik7XG4gIHdpZHRoOiAwLjI1cmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGFuaW1hdGlvbjogYmxpbmsgMXMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAwJSwgMTAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICA1MCUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1IDIzIDQyKTtcbiAgfVxufVxuKi9cbi8qLS0tLXRleHQtLS0tLSovXG5oMSB7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKCAtLWNvbF8yKTtcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7XG4gIGhlaWdodDphdXRvO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXN0YXJ0IHNjcmVlbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5zdGFydHsgIFxuICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgY29sb3I6d2hpdGU7XG4gIH1cblxuICAudGl0bGV7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnIgMWZyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzIpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgfVxuXG4gIC5idG4tbGVmdCB7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtYXJlYTogMi8yLzMvMztcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDo2MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgLmJ0bi1yaWdodCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IDIvNS8zLzY7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6NjAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUdhbWUgUGxheS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OjEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnIgMWZyO1xuICAgIGNvbG9yOiBibHVlO1xuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbF80KTtcbiAgICBjb2xvcjpibGFjaztcbiAgfVxuXG4gIC5nYW1lX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5OyovXG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLmxlZnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfMyk7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLnJpZ2h0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfMik7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLnBsYXllcjAsXG4gIC5wbGF5ZXIxIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuc2tldGNoMCwgXG4gIC5za2V0Y2gxIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5yb3dDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5ncmlkRGl2IHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItY29sb3I6IGJsdWU7IFxufVxuXG4uc2tldGNoMCAuZ3JpZERpdntcbiAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjsgXG59XG5cbi5za2V0Y2gxIC5ncmlkRGl2e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdzsgXG59XG5cbi5za2V0Y2gxIC5ncmlkRGl2LmhpdHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7IFxufVxuXG4uc2tldGNoMSAuZ3JpZERpdi5zdW5rIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLnNrZXRjaDAgLnNoaXAsXG4uaGlnaGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xufVxuXG4ubm9IaWdobGlnaHR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZvb3RlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mb290ZXIge1xuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtYXJlYTogMy8xLzQvMjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfNCk7XG59XG5cblxuLnBsYXkwe1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi4wZnIgMS41ZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzQpO1xufSAgXG5cbi5wbGF5MSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogMS8yLzIvMztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyLjBmciAxLjVmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfNCk7XG5cbn1cblxuLnNldFNoaXBzMCxcbi5zZXRTaGlwczEgIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDEuNWZyIDAuNWZyIDEuNWZyIDAuNWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfNCk7XG59XG5cblxuLnJibGFiZWwtbGVmdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogMS8yLzIvMztcbiAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IGJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbF8zKTtcbn1cblxuLnJhZC1idG4tbGVmdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogMS8zLzIvNDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xufVxuXG4ucmJsYWJlbC1yaWdodCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogMS80LzIvNTtcbiAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IGJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbF8zKTtcbn1cblxuLnJhZC1idG4tcmlnaHQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IDEvNS8yLzY7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcbn1cblxuLnJhZGNvbmZpcm0wLFxuLnJhZGNvbmZpcm0xIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMjUlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbF8zKTtcbn1cblxuLnBpY2tTaGlwczAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfNCk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5waWNrU2hpcHMxIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzQpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGlja0xhYmVsIHtcbiAgZGlzcGxheTpncmlkO1xuICBncmlkLWFyZWE6IDEvMS8yLzY7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfNCk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNhcnJpZXIge1xuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtYXJlYTogMi8xLzMvMjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbF8yKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHggNXB4IDBweCAwcHg7XG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcbiAgYm9yZGVyLXdpZHRoOjFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYmF0dGxlc2hpcCB7XG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzMpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCA1cHggMHB4IDBweDtcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xuICBib3JkZXItd2lkdGg6MXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jcnVpc2VyIHtcbiAgZGlzcGxheTpncmlkO1xuICBncmlkLWFyZWE6IDIvMy8zLzQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfMik7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IDVweCAwcHggMHB4O1xuICBib3JkZXItY29sb3I6IGJsdWU7XG4gIGJvcmRlci13aWR0aDoxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnN1Ym1hcmluZSB7XG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hcmVhOiAyLzQvMy81O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzMpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCA1cHggMHB4IDBweDtcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xuICBib3JkZXItd2lkdGg6MXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5kZXN0cm95ZXIge1xuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtYXJlYTogMi81LzMvNjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbF8yKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHggNXB4IDBweCAwcHg7XG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcbiAgYm9yZGVyLXdpZHRoOjFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmRvbmVQbGFjaW5nMCxcbi5kb25lUGxhY2luZzEge1xuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtYXJlYTogMy8xLzQvNjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwcHggNXB4IDBweCAwcHg7XG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcbiAgYm9yZGVyLXdpZHRoOjFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnRuSGlnaGxpZ2h0XzEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmJ0bkhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLm5vQnRuSGlnaGxpZ2h0XzJ7XG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tY29sXzIpO1xufVxuXG4ubm9CdG5IaWdobGlnaHRfM3tcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xfMyk7XG59XG5cblxuLnNrZXRjaDAgLmdyaWREaXYubWlzc2VkIHtcbiAvKiBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbF8yKTsqL1xuIGJhY2tncm91bmQtY29sb3IgOiBsaWdodGdyZXk7XG59XG5cbi5za2V0Y2gxIC5ncmlkRGl2Lm1pc3NlZCB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6dmFyKC0tY29sXzIpOyovXG4gIGJhY2tncm91bmQtY29sb3IgOiBncmV5O1xuIH1cblxuLkdhbWVPdmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyIDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG4ucGxheWVyX3Jlc3VsdCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuI3NlbGYsXG4jb3BwbyB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDpmaXQtY29udGVudDtcbiAgaGVpZ2h0OmF1dG87XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnNlbGZXaW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfMik7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAyMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6NjAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5vcHBvV2lue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfMik7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAyMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLWFyZWE6IDIvNS8zLzY7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6NjAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5h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RUUsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOEJBQThCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtFQUNFLDhCQUE4QjtJQUM1QixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQmF0dGxlU2hpcHMgc3R5bGUuY3NzXFx0Ki9cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1yZXNldC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbioge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNvbG91ciBzY2hlbWUgIDEgbGlnaHRlciB0byA0IGRhcmtlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi8qIHVzaW5nIHZhcmlhYmxlcyBlLmcuXFxuOnJvb3Qge1xcbiAgLS1ibHVlOiAjMWU5MGZmO1xcbiAgLS13aGl0ZTogI2ZmZmZmZjtcXG59XFxuYm9keSB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpOyB9XFxuKi9cXG5cXG46cm9vdCB7XFxuICAtLWNvbF8xICA6ICNiYmU0ZTk7ICAgLyogbGlnaHRlc3QqL1xcbiAgLS1jb2xfMiAgOiAjNzljMmQwOyAgIC8qIGxpZ2h0ZXIgKi9cXG4gIC0tY29sXzMgIDogIzUzYThiNjsgICAvKiBkYXJrZXIgICovXFxuICAtLWNvbF80ICA6ICM1NTg1YjU7ICAgLyogZGFya2VzdCAqL1xcbn1cXG5cXG4uY29sLTEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzEpO1xcbn1cXG5cXG4uY29sLTIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzIpO1xcbn1cXG5cXG4uY29sLTMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzMpO1xcbn1cXG5cXG4uY29sLTQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzQpOztcXG59XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBIaWRlIHNjcm9sbGJhcnMgKi9cXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXRleHQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4vKmlucHV0IGN1cnNvclxcbi5jdXJzb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1IDIzIDQyKTtcXG4gIHdpZHRoOiAwLjI1cmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYW5pbWF0aW9uOiBibGluayAxcyBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBibGluayB7XFxuICAwJSwgMTAwJSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuICA1MCUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSAyMyA0Mik7XFxuICB9XFxufVxcbiovXFxuLyotLS0tdGV4dC0tLS0tKi9cXG5oMSB7XFxuICBmb250LXNpemU6IDZyZW07XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKCAtLWNvbF8yKTtcXG4gIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OmF1dG87XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tc3RhcnQgc2NyZWVuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi5zdGFydHsgIFxcbiAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvYmFja2dyb3VuZC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgY29sb3I6d2hpdGU7XFxuICB9XFxuXFxuICAudGl0bGV7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG5cXG4gIC5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnIgMWZyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfMik7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgfVxcblxcbiAgLmJ0bi1sZWZ0IHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDo2MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG5cXG4gIC5idG4tcmlnaHQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IDIvNS8zLzY7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDo2MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tR2FtZSBQbGF5LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuICBcXG4gIC5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnIgMWZyO1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbF80KTtcXG4gICAgY29sb3I6YmxhY2s7XFxuICB9XFxuXFxuICAuZ2FtZV9jb250YWluZXIge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmV5OyovXFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG5cXG4gIC5sZWZ0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbF8zKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbiAgLnJpZ2h0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzIpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICB9XFxuXFxuICAucGxheWVyMCxcXG4gIC5wbGF5ZXIxIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLnNrZXRjaDAsIFxcbiAgLnNrZXRjaDEge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLnJvd0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLmdyaWREaXYge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICBcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1jb2xvcjogYmx1ZTsgXFxufVxcblxcbi5za2V0Y2gwIC5ncmlkRGl2e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3lhbjsgXFxufVxcblxcbi5za2V0Y2gxIC5ncmlkRGl2e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7IFxcbn1cXG5cXG4uc2tldGNoMSAuZ3JpZERpdi5oaXR7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7IFxcbn1cXG5cXG4uc2tldGNoMSAuZ3JpZERpdi5zdW5rIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uc2tldGNoMCAuc2hpcCxcXG4uaGlnaGxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLm5vSGlnaGxpZ2h0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xcbn1cXG5cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZvb3RlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6Z3JpZDtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzQpO1xcbn1cXG5cXG5cXG4ucGxheTB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyLjBmciAxLjVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfNCk7XFxufSAgXFxuXFxuLnBsYXkxIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuMGZyIDEuNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbF80KTtcXG5cXG59XFxuXFxuLnNldFNoaXBzMCxcXG4uc2V0U2hpcHMxICB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxLjVmciAwLjVmciAxLjVmciAwLjVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzQpO1xcbn1cXG5cXG5cXG4ucmJsYWJlbC1sZWZ0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItY29sb3I6IGJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfMyk7XFxufVxcblxcbi5yYWQtYnRuLWxlZnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogMS8zLzIvNDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItY29sb3I6IGJsdWU7XFxufVxcblxcbi5yYmxhYmVsLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IDEvNC8yLzU7XFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItY29sb3I6IGJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfMyk7XFxufVxcblxcbi5yYWQtYnRuLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IDEvNS8yLzY7XFxuICBtYXJnaW46IDVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ucmFkY29uZmlybTAsXFxuLnJhZGNvbmZpcm0xIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDI1JTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItY29sb3I6IGJsdWU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfMyk7XFxufVxcblxcbi5waWNrU2hpcHMwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzQpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5waWNrU2hpcHMxIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzQpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5waWNrTGFiZWwge1xcbiAgZGlzcGxheTpncmlkO1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi82O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfNCk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5jYXJyaWVyIHtcXG4gIGRpc3BsYXk6Z3JpZDtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzIpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDBweCA1cHggMHB4IDBweDtcXG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcXG4gIGJvcmRlci13aWR0aDoxcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYmF0dGxlc2hpcCB7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbF8zKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwcHggNXB4IDBweCAwcHg7XFxuICBib3JkZXItY29sb3I6IGJsdWU7XFxuICBib3JkZXItd2lkdGg6MXB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNydWlzZXIge1xcbiAgZGlzcGxheTpncmlkO1xcbiAgZ3JpZC1hcmVhOiAyLzMvMy80O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfMik7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4IDVweCAwcHggMHB4O1xcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xcbiAgYm9yZGVyLXdpZHRoOjFweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zdWJtYXJpbmUge1xcbiAgZGlzcGxheTpncmlkO1xcbiAgZ3JpZC1hcmVhOiAyLzQvMy81O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfMyk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4IDVweCAwcHggMHB4O1xcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xcbiAgYm9yZGVyLXdpZHRoOjFweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5kZXN0cm95ZXIge1xcbiAgZGlzcGxheTpncmlkO1xcbiAgZ3JpZC1hcmVhOiAyLzUvMy82O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfMik7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4IDVweCAwcHggMHB4O1xcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xcbiAgYm9yZGVyLXdpZHRoOjFweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5kb25lUGxhY2luZzAsXFxuLmRvbmVQbGFjaW5nMSB7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICBncmlkLWFyZWE6IDMvMS80LzY7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1hcmdpbjogMHB4IDVweCAwcHggMHB4O1xcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xcbiAgYm9yZGVyLXdpZHRoOjFweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5idG5IaWdobGlnaHRfMSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmJ0bkhpZ2hsaWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5ub0J0bkhpZ2hsaWdodF8ye1xcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xfMik7XFxufVxcblxcbi5ub0J0bkhpZ2hsaWdodF8ze1xcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xfMyk7XFxufVxcblxcblxcbi5za2V0Y2gwIC5ncmlkRGl2Lm1pc3NlZCB7XFxuIC8qIGJhY2tncm91bmQtY29sb3I6dmFyKC0tY29sXzIpOyovXFxuIGJhY2tncm91bmQtY29sb3IgOiBsaWdodGdyZXk7XFxufVxcblxcbi5za2V0Y2gxIC5ncmlkRGl2Lm1pc3NlZCB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbF8yKTsqL1xcbiAgYmFja2dyb3VuZC1jb2xvciA6IGdyZXk7XFxuIH1cXG5cXG4uR2FtZU92ZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czoxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvYmFja2dyb3VuZC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcbi5wbGF5ZXJfcmVzdWx0IHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbiNzZWxmLFxcbiNvcHBvIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6YXV0bztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNlbGZXaW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sXzIpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAyMDAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDo2MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm9wcG9XaW57XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xfMik7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDIwMCU7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtYXJlYTogMi81LzMvNjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OjYwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9jb21wdXRlci5qc1xuLy90aGUgY29tcHV0ZXJzIGF0dGFjayBsb2dpY1xuXG5pbXBvcnQge3BsYXllcl8wfSBmcm9tICcuL2luZGV4LmpzJztcblxuLy9pbml0aWFsbHkgZmlyZSBhdCByYW5kb21cbi8vcmFuZG9taXNlXG4vL2EgbG9jYWwgZ3JpZCB0byB0byBsb2cgYXR0YWNrcyBcbmxldCBsb2NhbF9ncmlkID0gW107XG5sZXQgcm93cyA9IDExO1xubGV0IGNvbHMgPSAxMTtcblxuZm9yKGxldCBpID0gMTsgaSA8IHJvd3M7IGkrKyl7XG4gICAgbG9jYWxfZ3JpZFtpXT0gW107XG4gICAgZm9yKGxldCBqID0gMSA7IGogPCBjb2xzOyBqKyspe1xuICAgICAgICBsb2NhbF9ncmlkW2ldW2pdID0gJzAnO1xuICAgIH1cbn1cblxuLy9waWNrIHJhbmRvbSByb3cgY29sIDEgLT4gMTBcbmxldCByb3c7IC8vTWF0aC5mbG9vcigxKyhNYXRoLnJhbmRvbSgpICogMTApKTtcbmxldCBjb2w7IC8vTWF0aC5mbG9vcigxKyhNYXRoLnJhbmRvbSgpICogMTApKTtcblxuXG5mdW5jdGlvbiBjb21wQXR0YWNrKCl7XG4gICAgY29uc29sZS5sb2coJ0NvbXB1dGVyIGF0dGFja2luZyBzdGFydCcpO1xuICAgIGxldCBhdHRhY2sgPSB0cnVlO1xuICAgIGxldCBjb3VudCA9IDEwMDA7XG4gICAgbGV0IGdhbWVPdmVyID0gZmFsc2U7XG4gICAgLy9icmVhayBhZnRlciBhIDEwMDAgdHJpZXNcbiAgICB3aGlsZShjb3VudC0tID4gMCl7XG4gICAgICAgd2hpbGUoYXR0YWNrKXtcbiAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoMSsoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICAgICAgICBjb2wgPSBNYXRoLmZsb29yKDErKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbXAgcm5kIGF0dGFjayByb3c6ICcsIHJvdyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29tcCBybmQgYXR0YWNrIGNvbDogJywgY29sKTtcbiAgICAgICAgICAgIGlmKGxvY2FsX2dyaWRbcm93XVtjb2xdID09PSAnMCcpe1xuICAgICAgICAgICAgICAgIGxvY2FsX2dyaWRbcm93XVtjb2xdID0gMTsgICAgICAgLy9sb2dzIGhhdmUgYXR0YWNrZWQgdGhpcyBjZWxsXG4gICAgICAgICAgICAgICAgYXR0YWNrID0gZmFsc2UgOyAgICAgICAgICAgICAgICAvL2ZvdW5kIGNlbGwgdG8gYXR0YWNrO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gLTE7ICAgICAgICAgICAgICAgICAgICAgLy9zbyBzdG9wIGF0dGFja3MgdW5sZXNzIGhpdCByZWNvcmRlZCAtPiBkZWFsdCB3aXRoIGJ5IGhpdChwb3MpXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gKHJvdyoxMSkgKyBjb2w7XG4gICAgICAgICAgICAgICAgZ2FtZU92ZXIgPSBwbGF5ZXJfMC5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhpZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdhbWVPdmVyOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoY291bnQgPCAwICkgeyBhdHRhY2sgPSBmYWxzZTt9XG4gICAgICAgfVxuICAgIH1cbiAgIGlmKGNvdW50IDwgMCl7XG4gICAgY29uc29sZS5sb2coJ2NvdW50IDwgMCcsIGNvdW50KTtcbiAgIH1cbiAgICBjb25zb2xlLmxvZygnQ29tcHV0ZXIgYXR0YWNraW5nIGVuZCBAY291bnQgPCAwJyk7XG4gICAgcmV0dXJuIGdhbWVPdmVyO1xufVxuXG5leHBvcnQge2NvbXBBdHRhY2t9OyIsIi8vZGlzcGxheS5qc1xuaW1wb3J0IHtEb21fZm5zfSBmcm9tICcuL2RvbS1mbnMuanMnO1xuXG4vL0EgRGlzcGxheSBDb250cm9sbGVyIGNsYXNzXG5jbGFzcyBEaXNwbGF5IHtcblxuICAgIC8vIGEgQmF0dGxlU2hpcCBnYW1lIGNyZWF0aW9uIGRpc3BsYXkgb2JqZWN0IGNvbnN0cnVjdG9yIFxuICAgIC8vIGFjY2VzcyB2aWEga2V5IHdvcmQgbmV3XG4gICBjb25zdHJ1Y3RvciAoZ2FtZV9pbnN0YW5jZSkge1xuICAgIC8vY2F0ZXIgZm9yIGluY29ycmVjdCBpbnZvY2F0aW9uIGkuZSBub3QgdXNpbmcgJ25ldycga2V5d29yZFxuICAgICAgICBpZighKHRoaXMgaW5zdGFuY2VvZiBEaXNwbGF5KSkgIHtcbiAgICAgICAgICAgIC8vdGhyb3cgZXJyb3I6XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRXJyb3I6IEluY29ycmVjdCBpbnZvY2F0aW9uJyk7XG4gICAgICAgICAgICAvL29yXG4gICAgICAgICAgICAvL3JldHVybiBuZXcgRGlzcGxheTpcbiAgICAgICAgICAgIC8vcmV0dXJuIG5ldyBEaXNwbGF5KGdhbWVfaW5zdGFuY2UpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vZm9yIHRoZSBkaXNwbGF5XG4gICAgICAgICAgICB0aGlzLmRvYz0gbmV3IERvbV9mbnMoZG9jdW1lbnQpOyAgICAgICAgICAgLy9hIG5ldyBkb21fZm5zIGluc3RhbmNlXG4gICAgICAgICAgLy8gIHRoaXMucmVuZGVyR2FtZUJvYXJkKDApO1xuICAgICAgICAgIC8vICB0aGlzLnJlbmRlckdhbWVCb2FyZCgxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vZGlzcGxheSBtZXRob2RzXG4gICAgcmVuZGVyR2FtZUJvYXJkKGJvYXJkKSB7XG4gICAgICAgdGhpcy5kb2MuZ3JpZFNldFVwKGJvYXJkKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHtEaXNwbGF5fSIsIi8vZG9tLWZucy5qc1xuXG5pbXBvcnQge3BsYXllcnMscGxheWVyXzAsIHBsYXllcl8xLCBhdHRhY2tpbmdQbGF5ZXJ9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IHtjb21wQXR0YWNrfSBmcm9tICcuL2NvbXB1dGVyLmpzJztcblxuXG5leHBvcnQgY2xhc3MgRG9tX2ZucyB7XG5cbiAgICAvL3ByaXZhdGUgTkIgZGlmZmVyZW50IG5hbWVzIGZvciBwcml2YXRlIHZhcmlhYmxlc1xuICAgIF9kb2M7XG5cbiAgICAvL2NvbnN0cnVjdG9yXG4gICAgY29uc3RydWN0b3IgKGRvY3VtZW50KXtcbiAgICAgICAgdGhpcy5fZG9jID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgLy9tZXRob2RzXG4gICAgZG9tX2xvYWRlZCAoKXtcbiAgICAgICAgdGhpcy5fZG9jLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChldmVudCkgPT4ge1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2VsbENvbnRlbnQgKCBpZCwgY29udGVudCkge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICAvL2Rpc3BsYXkgaXQgaWYgbm90IDBcbiAgICAgICAgaWYoIShjb250ZW50ID09PSAwKSl7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCk7XG4gICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGlmKGZpcnN0RGlzcGxheSkge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKi9cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUNlbGxDb250ZW50KGlkKXsgICAgIFxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICBjb25zdCBlbGVtTm9kZUxpc3QgPSBlbGVtLmNoaWxkTm9kZXM7XG4gICAgICAgIGNvbnN0IGxpc3RMZW4gPSBlbGVtTm9kZUxpc3QubGVuZ3RoO1xuICAgICAgICBpZihsaXN0TGVuID4gMCl7IFxuICAgICAgICAgICAgZWxlbS5zdHlsZS5jb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVHcmlkQ29udGVudChwbGF5ZXIpe1xuICAgICAgICBsZXQgY2VsbDtcbiAgICAgICAgbGV0IGlkO1xuICAgICAgICBjb25zb2xlLmxvZygncGxheWVyOiAnLHBsYXllci5uYW1lKTtcbiAgICAgICAgc3dpdGNoIChwbGF5ZXIubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnc2VsZic6IHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPTA7IGkgPCAxMTsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7IGogPCAxMSA7IGorKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IChpKjExKSArIGo7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ2h1bWFuJzpcbiAgICAgICAgICAgIGNhc2UgJ2NvbXB1dGVyJzoge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9MDsgaSA8IDExOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgaiA8IDExIDsgaisrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gKGkqMTEpICsgaiArIDEyMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0NlbGxDb250ZW50KGlkKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGNvbnN0IHRleHRDaGlsZCA9IChjZWxsLmZpcnN0RWxlbWVudENoaWxkfHxjZWxsLmZpcnN0Q2hpbGQpO1xuICAgICAgICBjb25zb2xlLmxvZygndGV4dDogJyx0ZXh0Q2hpbGQpO1xuICAgICAgICBpZih0ZXh0Q2hpbGQpe1xuICAgICAgICAgICB0ZXh0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBncmlkU2V0VXAoYm9hcmQpe1xuICAgICAgICB0aGlzLnJlc2V0R3JpZChib2FyZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzZXR0aW5nIHVwICR7Ym9hcmQuaWR9YCk7XG4gICAgICAgIGxldCBza2V0Y2g7XG4gICAgICAgIGxldCBia2dDb2w7XG4gICAgICAgIGxldCBjb2w7XG4gICAgICAgIC8vc2V0IHRoZSBib2FyZCBjb2xvdXJzXG4gICAgICAgIC8vaWYgYm9hcmQgZm9yIHBsYXllciAwXG4gICAgICAgIGlmKGJvYXJkLmlkID09PSAnc2VsZicpIHtcbiAgICAgICAgICAgIHNrZXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2V0Y2gwJyk7XG4gICAgICAgICAgICBia2dDb2wgPSAnY3lhbic7XG4gICAgICAgICAgICBjb2wgPSAnYmxhY2snO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAvL2JvYXJkIGZvciBwbGF5ZXIgMVxuICAgICAgICAgICAgc2tldGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNrZXRjaDEnKTtcbiAgICAgICAgICAgIGJrZ0NvbCA9ICdsaWdodHllbGxvdyc7XG4gICAgICAgICAgICBjb2wgPSAnYmxhY2snO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL2dyaWQgYWxsb3dzIGZvciBwb3RlbnRpYWwgc3F1YXJlIHJlZmVyZW5jaW5nIGJ1dCBtYXkgbmV2ZXIgYmUgdXNlZFxuICAgICAgICBsZXQgbnVtID0gMTE7IC8vdGhlIG51bWJlciBvZiBjZWxscyBwZXIgc2lkZSAgMTAgcGx1cyBleHRyYSAxIGZvciBjby1vcmQgbmFtaW5nXG4gICAgICAgIGxldCBtYXhTa2V0Y2hXaWR0aCA9IDUwMDtcbiAgICAgICAgbGV0IGdyaWRTaXplID0gTWF0aC5yb3VuZChtYXhTa2V0Y2hXaWR0aC9udW0pO1xuICAgICAgICBsZXQgcm93Q29udGFpbmVyO1xuICAgICAgICBsZXQgZWxlbWVudDtcbiAgICAgICAgbGV0IHRleHQ7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGo9MDsgajwgbnVtOyBqKyspIHtcbiAgICAgICAgICAgIC8vZWFjaCByb3cgY29udGFpbmVyXG4gICAgICAgICAgICAgIHJvd0NvbnRhaW5lcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3dDb250YWluZXInKTtcbiAgICAgICAgICAgICAgcm93Q29udGFpbmVyLnN0eWxlLndpZHRoPSAoZ3JpZFNpemUudG9TdHJpbmcoKSsncHgnKTtcbiAgICAgICAgICAgICAgcm93Q29udGFpbmVyLnN0eWxlLmhlaWdodD0gKGdyaWRTaXplLnRvU3RyaW5nKCkrJ3B4Jyk7XG4gICAgICAgICAgICAgIHNrZXRjaC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgZm9yKGxldCBpPSAwOyBpPCBudW07IGkrKyl7XG4gICAgICAgICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyaWREaXYnKTtcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGg9IChncmlkU2l6ZS50b1N0cmluZygpKydweCcpO1xuICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQ9IChncmlkU2l6ZS50b1N0cmluZygpKydweCcpO1xuICAgICAgLy8gICAgICAgICAgICAgICAgaWYoKGo+MCkmJihpPjApKXsgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9IGJrZ0NvbDt9XG4gICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yPSBjb2w7XG4gICAgICAgICAgICAgICAgICAvL2NoYW5nZSBpZCBoZXJlIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gYm9hcmRzIDAgc2VsZiBhbmQgMSBjb21wdXRlciBvciBodW1hblxuICAgICAgICAgICAgICAgICAgaWYoYm9hcmQuaWQgPT09ICdzZWxmJykgeyBcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pZD0oKGoqMTApK2oraSk7ICAgICAgICAgICAgLy9hY3RpdmUgZ3JpZCBjZWxscyAxIC0+IDEwIGZpcnN0IHJvdyAtPiA5MSAtPiAxMDAgbGFzdFxuICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIC8vYm9hcmQgbXVzdCBiZSBmb3IgcGxheWVyIDFcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pZD0oKGoqMTApK2oraSArIDEyMSk7ICAgICAgLy9hY3RpdmUgZ3JpZCBjZWxscyAxMDEgLT4gMTEwIGZpcnN0IHJvdyAtPiAxOTEgLT4gMjAwIGxhc3RcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9ICdsaWdodGdyZXknO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICBpZihqID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoai50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmKGogPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9ICdsaWdodGdyZXknO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcuZnJvbUNoYXJDb2RlKCg2NCtpKS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9IC8vZm9yIGxvb3BcbiAgICB9IC8vc2V0IHVwIGdyaWRcbiAgICAgIFxuICAgIHJlc2V0R3JpZChib2FyZCl7XG4gICAgICAgIGxldCBlbGVtZW50O1xuICAgICAgICBpZihib2FyZC5pZCA9PT0gMCkge1xuICAgICAgICAgICAgZWxlbWVudD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNrZXRjaDAnKTtcbiAgICAgICAgfWVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgLy9ib2FyZCA9IDFcbiAgICAgICAgICAgIGVsZW1lbnQ9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2V0Y2gxJyk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUoZWxlbWVudC5maXJzdENoaWxkKXtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBnZXRTa2V0Y2goaWQpIHtcbiAgICAgICAgbGV0IHNrZXRjaDtcbiAgICAgICAgc3dpdGNoKGlkKXtcbiAgICAgICAgICAgIGNhc2UgJ3NlbGYnOiB7c2tldGNoID0gdGhpcy5fZG9jLnF1ZXJ5U2VsZWN0b3IoJy5za2V0Y2gwJyk7IGJyZWFrOyB9XG4gICAgICAgICAgICBjYXNlICdodW1hbic6IHtza2V0Y2ggPSB0aGlzLl9kb2MucXVlcnlTZWxlY3RvcignLnNrZXRjaDEnKTsgYnJlYWs7ICB9XG4gICAgICAgICAgICBjYXNlICdjb21wdXRlcic6IHtza2V0Y2ggPSB0aGlzLl9kb2MucXVlcnlTZWxlY3RvcignLnNrZXRjaDEnKTsgYnJlYWs7IH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtjb25zb2xlLmxvZygnZXJyb3Igc2V0dGluZyBza2V0Y2gnKTticmVhazt9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNrZXRjaDtcbiAgICB9XG4gICAgXG4gICAgLy9tb25pdG9yQm9hcmQgZm9yIG1vdXNlIGFjdGlvblxuICAgIG1vbml0b3JCb2FyZChib2FyZCl7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21vbml0b3Jpbmc6ICcsIGJvYXJkLmlkICk7XG4gICAgICAgIGxldCBza2V0Y2ggPSBib2FyZC5nZXRTa2V0Y2goKTtcbiAgICAgICAgbGV0IGJvYXJkU3RhdHVzID0gYm9hcmQuc3RhdHVzO1xuICAgICAgICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coJ2JvYXJkIGlkICcsYm9hcmQuaWQsJyBib2FyZCBzdGF0dXM6Jyxib2FyZC5zdGF0dXMpO1xuICAgICAgICBza2V0Y2gub25tb3VzZWRvd24gPSAoZXZlbnQpID0+e1xuICAgICAgICAgICAgLy9nZXQgdGhlIGN1cnJlbnQgYm9hcmQgc3RhdHVzXG4gICAgICAgICAgICBib2FyZFN0YXR1cyA9IGJvYXJkLmdldEJvYXJkU3RhdHVzKCk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdib2FyZCBzdGF0dXM6ICcsIGJvYXJkU3RhdHVzKTtcbiAgICAgICAgICAgIGxldCBlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2RpdicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2U6ICcsZSk7XG4gICAgICAgICAgICBpZighKGUuaWQgPT09IG51bGwpKXtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5pZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0AgY2VsbCw6ICcsY2VsbCwnIGUuaWQgOiAnLGUuaWQpO1xuICAgICAgICAgICAgICAgIGlmKCEoY2VsbCA9PT0gbnVsbCkpe1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoYm9hcmRTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vb24gbW91c2UgZG93biBwcmludCBvdXQgY2VsbCBpZCBudW1iZXIgdG8gY2xsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwcmVzZXQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG9iai50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9vbiBtb3VzZSBkb3duIHByaW50IG91dCBzZWxlY3RlZCBzaGlwIHRvIGNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BsYWNlJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0vL3BsYWNlXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yZWFjdCB0byBtb3VzZSBhY3Rpb24gZm9yIFRFU1QgT05MWSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgICdURVNUJyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVEVTVElORycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQucmVjZWl2ZVRFU1QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9ib2FyZCBpcyBjdXJyZW50bHkgYXR0YWNraW5nIG9wcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdhdHRhY2snOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYm9hcmQuaWQgPT09ICdjb21wdXRlcicpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT3ZlciA9IGNvbXBBdHRhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ2FtZU92ZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib2FyZC5taXNzZWRBdHRhY2soZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYm9hcmQgaXMgY3VycmVudGx5IHVuZGVyIGZpcmUgZnJvbSBvcHBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndW5kZXJGaXJlJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPdmVyID0gYm9hcmQucmVjZWl2ZUF0dGFjayhlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihnYW1lT3Zlcil7Y29uc29sZS5sb2coJ3JldHVybmluZyBnYW1lT3ZlcjogJyxnYW1lT3Zlcik7cmV0dXJuIHRydWU7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yZWFjdCB0byBtb3VzZSBhY3Rpb24gb25jZSBnYW1lIG92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dpbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsb29zZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWFkJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9vbiBtb3VzZSBkb3duIGRvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyYW5kb20nOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSAgIC8vc3dpdGNoIGJvYXJkU3RhdHVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgZG9uZSA9IGJvYXJkLmNoZWNrQm9hcmRzU2hpcHNQbGFjZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvbmU6ICcsIGRvbmUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9uZSA9PT0gNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRvbmVCdG47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihib2FyZC5pZCA9PT0gJ3NlbGYnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvbmVQbGFjaW5nMCcpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIHBsYXllcl8wLmdhbWVCb2FyZC5hZGRTaGlwc0NsYXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvbmVQbGFjaW5nMScpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXJzLmh1bWFuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwbGF5ZXJfMS5nYW1lQm9hcmQuYWRkU2hpcHNDbGFzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9Ly9lLmlkIG5vdCBudWxsXG4gICAgICAgICAgICB9ICAgLy9vbm1vdXNlZG93blxuICAgICAgICBpZihnYW1lT3Zlcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXQgbW91c2VEb3duLXJldHVybmluZyBnYW1lT3ZlcjogJyxnYW1lT3ZlcilcbiAgICAgICAgICAgIHJldHVybiBnYW1lT3ZlcjtcbiAgICAgICAgfVxuXG4gICAgfS8vbW9uaXRvciBib2FyZFxuXG4gICAgbW9uaXRvclNoaXBQbGFjZW1lbnQgKHBsYXllcikge1xuICAgICAgICBsZXQgc2hpcDtcbiAgICAgICAgbGV0IGJvYXJkO1xuICAgICAgICBpZihwbGF5ZXIubmFtZSA9PT0gJ3NlbGYnKXtib2FyZCA9IDA7fWVsc2V7Ym9hcmQgPSAxO31cbiAgICAgICAgbGV0IHNoaXBzO1xuICAgICAgICBsZXQgYXR0YWNrO1xuICAgICAgICBsZXQgYnRuSGlnaGxpZ2h0ID0gZmFsc2U7XG4gICAgICAgIGxldCBza2V0Y2g7XG4gICAgICAgIGxldCBidXR0b25IaWdobGlnaHRzID0geyAnQyc6IGZhbHNlLCAnYyc6ZmFsc2UsICdiJzpmYWxzZSwgJ3MnOmZhbHNlLCAnZCc6ZmFsc2UgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5tb25pdG9yQm9hcmQocGxheWVyLmdhbWVCb2FyZCk7XG5cbiAgICAgICAgLy9zZXQgdGhlIHNrZXRjaCBcbiAgICAgICAgaWYoYm9hcmQgPT09IDApIHtcbiAgICAgICAgICAgIHNoaXBzPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGlja1NoaXBzMCcpOyAgICAgICAgLy9sYXRlciBwaWNrU2hpcHNfMCA/XG4gICAgICAgICAgICBza2V0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tldGNoMCcpOyBcbiAgICAgICAgICAgIGF0dGFjaz0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0dGFjazAnKTtcbiAgICAgICAgICAgIGJ0bkhpZ2hsaWdodCA9IGZhbHNlO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAvL2JvYXJkID09PSAxXG4gICAgICAgICAgICBzaGlwcz0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBpY2tTaGlwczEnKTsgICAgICAgIC8vbGF0ZXIgcGlja1NoaXBzXzEgP1xuICAgICAgICAgICAgc2tldGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNrZXRjaDEnKTsgXG4gICAgICAgICAgICBhdHRhY2s9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRhY2sxJyk7XG4gICAgICAgICAgICBidG5IaWdobGlnaHQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNoaXBzLm9ubW91c2Vkb3duID0gKGV2ZW50KSA9PnsgICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpO1xuICAgICAgICAgICAgLy9pZihlKXtjb25zb2xlLmxvZygnZS5pZDogJyxlLmlkLCAnIGV2ZW50IHRhcmdldCcsZXZlbnQudGFyZ2V0KTt9XG4gICAgICAgICAgICBsZXQgcGxhY2luZ1NoaXBzID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmKGUubm9kZU5hbWUgPT09ICdCVVRUT04nKXtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5pZCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoKHNoaXBCdG4uaWQpe1xuICAgICAgICAgICAgICAgICAgICAvL25vdyBtb3ZlZCB0byBnYW1lQm9hcmRcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQyc6IFxuICAgICAgICAgICAgICAgICAgICBjYXNlICdDMSc6IHtzaGlwID0gJ0MnO2lmKHBsYXllci5nYW1lQm9hcmQuX3BsYWNlU2hpcFswXSA+IC0yKXtzaGlwQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bkhpZ2hsaWdodCcpOyBicmVhazt9fVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYjEnOiB7c2hpcCA9ICdiJzsgaWYocGxheWVyLmdhbWVCb2FyZC5fcGxhY2VTaGlwWzFdID4gLTIpe3NoaXBCdG4uY2xhc3NMaXN0LmFkZCgnYnRuSGlnaGxpZ2h0Jyk7IGJyZWFrO319XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjMSc6IHtzaGlwID0gJ2MnOyBpZihwbGF5ZXIuZ2FtZUJvYXJkLl9wbGFjZVNoaXBbMl0gPiAtMil7c2hpcEJ0bi5jbGFzc0xpc3QuYWRkKCdidG5IaWdobGlnaHQnKTsgYnJlYWs7fX1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3MxJzoge3NoaXAgPSAncyc7IGlmKHBsYXllci5nYW1lQm9hcmQuX3BsYWNlU2hpcFszXSA+IC0yKXtzaGlwQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bkhpZ2hsaWdodCcpOyBicmVhazt9fVxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZDEnOiB7c2hpcCA9ICdkJzsgaWYocGxheWVyLmdhbWVCb2FyZC5fcGxhY2VTaGlwWzRdID4gLTIpe3NoaXBCdG4uY2xhc3NMaXN0LmFkZCgnYnRuSGlnaGxpZ2h0Jyk7IGJyZWFrO319ICAgXG4gICAgICAgICAgICAgICAgICAgIC8vdGhlIGRvbmVQbGFjaW5nIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdEJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hpZGUgdGhlIHNoaXAgcGxhY2VtZW50IGJ1dHRvbnMgYW5kIGRvbmVQbGFjaW5nIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbG91ciB0aGUgc2hpcCBiYWNrZ3JvdW5kc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYXllcl8wLmdhbWVCb2FyZC5hZGRTaGlwc0NsYXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllcl8wLmdhbWVCb2FyZC5hZGRTaGlwc0NsYXNzKHBsYXllcl8wLmdhbWVCb2FyZC5zaGlwcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGlzcGxheSB0aGUgcGxheWVyXzEgYm9hcmQgZm9yIHNldCAgdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocGxheWVycy5odW1hbiA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcHMxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXkxJyk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHMxLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIHBsYXllcl8xIGJvYXJkIHNoaXBzIHNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3N0YXJ0IHRoZSBnYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lQm9hcmQuc3RhdHVzID0gJ2F0dGFjayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNpbmdTaGlwcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0QxJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hpZGUgdGhlIHNoaXAgcGxhY2VtZW50IGJ1dHRvbnMgYW5kIGRvbmVQbGFjaW5nIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb2xvdXIgdGhlIHNoaXAgYmFja2dyb3VuZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwbGF5ZXJfMS5nYW1lQm9hcmQuYWRkU2hpcHNDbGFzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJfMS5nYW1lQm9hcmQuYWRkU2hpcHNDbGFzcyhwbGF5ZXJfMS5nYW1lQm9hcmQuc2hpcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcHMxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWFuU2V0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBzMS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9oaWRlIHRoZSBjZWxsIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5nYW1lQm9hcmQucmVuZGVyR2FtZUJvYXJkQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9MDsgaTwxMTsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPDExOyBqKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKChpPT09MCl8fChqPT09MCkpey8qbWlzcyBvdXQqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA9ICgoaSkqIDExKSAraiArIDEyMTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlQ2VsbENvbnRlbnQoaWQpOyAgIC8vc2hvdWxkIGJlIHBsYXllcl8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5oaWRlR3JpZENvbnRlbnQocGxheWVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIHBsYXllcl8xIGJvYXJkIHNoaXBzIHNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3N0YXJ0IHRoZSBnYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IGJvYXJkIHN0YXR1cyB0byB1bmRlciBmaXJlIHRvIGZsYWcgc3RhcnQgZ2FtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLnN0YXR1cyA9ICd1bmRlckZpcmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjaW5nU2hpcHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9Ly9zd2l0Y2hcbiAgICAgICAgICAgICAgICBpZihwbGFjaW5nU2hpcHMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdhbWVCb2FyZC5zZXRTaGlwVG9QbGFjZShzaGlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9Ly9Ob2RlTmFtZVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm9kZTogJywgZSk7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9Ly9tb3VzZWRvd25cbiAgICB9Ly9tb25pdG9yIHNoaXAgcGxhY2VtZW50XG5cbiAgICBzaG93SGl0KHNoaXAsaWQpe1xuICAgICAgICBsZXQgbG9jYXRlID0gc2hpcC5sb2NhdGlvbjtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnc2hvdyBoaXQgYXQgaWQgJyxpZCk7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcm93ID0gbG9jYXRlWzBdO1xuICAgICAgICBsZXQgY29sID0gbG9jYXRlWzFdO1xuICAgICAgICBsZXQgY29udGVudDtcbiAgICAgICAgbGV0IHBsYXllcjtcbiAgICAgICAgbGV0IGxvZ0lEO1xuICAgICAgICBsZXQgbG9nQ2VsbDtcbiAgICAgICAgLy9sZXQgZ0JyZDtcbiAgICAgICAgaWYoaWQgPCAxMjEpe1xuICAgICAgICAgICAgLy9tdXN0IGJlIHBsYXllcl8wICdzZWxmJ1xuICAgICAgICAgICAgcGxheWVyID0gcGxheWVyXzA7XG4gICAgICAgICAgICBsb2dJRCA9IE51bWJlcihpZCkgKyAxMjE7XG4gICAgICAgICAgICAvL2dCcmQgPSBwbGF5ZXJfMS5nYW1lQm9hcmQ7XG4gICAgICAgICAgICBsb2dDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobG9nSUQpO1xuICAgICAgICAgICAgLy9zaG93IG93biBzaGlwIGhpdCBcbiAgICAgICAgICAgLy8gY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9J3JlZCc7XG4gICAgICAgICAgIC8vIGxvZ0NlbGwuYmFja2dyb3VuZENvbG9yPSd5ZWxsb3cnO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vbXVzdCBiZSBwbGF5ZXJfMVxuICAgICAgICAgICAgcGxheWVyID0gcGxheWVyXzE7XG4gICAgICAgICAgICBsb2dJRCA9IE51bWJlcihpZCkgLSAxMjE7XG4gICAgICAgICAgICAvL2dCcmQgPSBwbGF5ZXJfMC5nYW1lQm9hcmQ7XG4gICAgICAgICAgICBsb2dDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobG9nSUQpO1xuICAgICAgICAgICAgLy9zaG93IHNoaXAgaGl0XG4gICAgICAgICAgIC8vIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yPSdyZWQnO1xuICAgICAgICAgICAvLyBsb2dDZWxsLmJhY2tncm91bmRDb2xvcj0neWVsbG93JztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnaWQgJyxpZCwnIGxvZ0lEICcsbG9nSUQsJyBsb2dDZWxsICcsbG9nQ2VsbCk7XG4gICAgICAgIGNvbnRlbnQgPSBwbGF5ZXIuZ2FtZUJvYXJkLmdyaWRbcm93XVtjb2xdO1xuIC8vICAgICAgIHRoaXMucmVuZGVyQ2VsbENvbnRlbnQoaWQsIGNvbnRlbnQpOyAgICAgICAgLy90aGUgaGl0XG4vLyAgICAgICAgdGhpcy5yZW5kZXJDZWxsQ29udGVudChsb2dJRCwgY29udGVudCk7ICAgICAvL2xvZyB0aGUgaGl0XG4gICAgICAgIGxldCBuZXdIVE1MO1xuICAgICAgICBjb25zdCB0ZXh0Q2hpbGQgPSAoY2VsbC5maXJzdEVsZW1lbnRDaGlsZHx8Y2VsbC5maXJzdENoaWxkKTtcbiAgICAgICAgY29uc3QgbG9nVGV4dENoaWxkID0gKCBsb2dDZWxsLmZpcnN0Q2hpbGQgfHwgbG9nQ2VsbC5maXJzdEVsZW1lbnRDaGlsZCApO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd0ZXh0Q2hpbGQgYXQgaWQgIGlzOiAnLHRleHRDaGlsZCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2NlbGwgaW5uZXIgaHRtbDogJyxjZWxsLmlubmVySFRNTCk7XG4gICAgICAgIC8vc2hvdyB0aGUgaGl0IG9uIHRoZSBib2FyZCB1bmRlciBhdHRhY2tcbiAgICAgICAgaWYodGV4dENoaWxkKXtcbiAgICAgICAgICAgIC8vb3BlbmluZyBhbmQgY2xvc2luZyB0YWdzXG4gICAgICAgICAgICBjb25zdCBvcGVuaW5nVGFnID0gJzxzcGFuIHN0eWxlPVwiY29sb3I6d2hpdGVcIj4nXG4gICAgICAgICAgICBjb25zdCBjbG9zaW5nVGFnID0gJzwvc3Bhbj4nIFxuICAgICAgICAgICAgbmV3SFRNTCA9IG9wZW5pbmdUYWcrY2VsbC5pbm5lclRleHQrY2xvc2luZ1RhZztcbi8vICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSBuZXdIVE1MO1xuICAgICAgICB9IFxuICAgICAgICAvL2xvZyB0aGUgaGl0IG9uIHRoZSBhdHRhY2tpbmcgcGxheWVyJ3MgYm9hcmRcbiAgICAgICAgaWYobG9nVGV4dENoaWxkKXtcbiAgICAgICAgICAgIC8vb3BlbmluZyBhbmQgY2xvc2luZyB0YWdzXG4gICAgICAgICAgICBjb25zdCBvcGVuaW5nVGFnID0gJzxzcGFuIHN0eWxlPVwiY29sb3I6Ymx1ZVwiPidcbiAgICAgICAgICAgIGNvbnN0IGNsb3NpbmdUYWcgPSAnPC9zcGFuPicgXG4gICAgICAgICAgICBuZXdIVE1MID0gb3BlbmluZ1RhZytsb2dDZWxsLmlubmVyVGV4dCtjbG9zaW5nVGFnO1xuLy8gICAgICAgICAgICBsb2dDZWxsLmlubmVySFRNTCA9IG5ld0hUTUw7XG4gICAgICAgIH0gICAgICAgICAgXG4gICAgfVxuXG4gICAgc2hvd1N1bmsoc2hpcCwgaWQpIHtcbiAgICAgICAgbGV0IGxvY2F0ZSA9IHNoaXAubG9jYXRpb247XG4gICAgICAgIGxldCBsZW4gPSBzaGlwLmxlbmd0aDtcbiAgICAgICAgbGV0IHJvdyA9IGxvY2F0ZVswXTtcbiAgICAgICAgbGV0IGNvbCA9IGxvY2F0ZVsxXTtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gbG9jYXRlWzJdO1xuICAgICAgICBsZXQgaiA9IDA7O1xuICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ1YnKXtqID0gMTE7fVxuICAgICAgICBsZXQgY2VsbElEID0gKHJvdyoxMSkgKyBjb2w7XG4gICAgICAgIC8vYm9hcmQgcGxheWVyXzAgb3IgcGxheWVyXzEgP1xuICAgICAgICBpZiAoaWQgPiAxMjApe2NlbGxJRCA9IGNlbGxJRCArIDEyMTt9XG4gICAgICAgIGxldCBjb250ZW50O1xuICAgICAgICBsZXQgcGxheWVyO1xuICAgICAgICBpZihpZCA8IDEyMSl7XG4gICAgICAgICAgICAvL211c3QgYmUgcGxheWVyXzAgJ3NlbGYnXG4gICAgICAgICAgICBwbGF5ZXIgPSBwbGF5ZXJfMDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvL211c3QgYmUgcGxheWVyXzFcbiAgICAgICAgICAgIHBsYXllciA9IHBsYXllcl8xO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjZWxsO1xuICAgICAgICBsZXQgY29sSW5jcmVtZW50O1xuICAgICAgICAvLyBsb29wIHRocm91Z2ggc2hpcFxuICAgICAgICBmb3IobGV0IGk9MDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgICAgIGlmKGkgPT09IDApe2NvbEluY3JlbWVudCA9IDB9ZWxzZXtjb2xJbmNyZW1lbnQgKz0gajt9XG4gICAgICAgICAgICBpZihvcmllbnRhdGlvbiA9PT0gJ0gnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IHBsYXllci5nYW1lQm9hcmQuZ3JpZFtyb3craV1bY29sXTtcbiAgICAgICAgICAgICAgICBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbElEICsgaSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBwbGF5ZXIuZ2FtZUJvYXJkLmdyaWRbcm93XVtjb2wgKyBjb2xJbmNyZW1lbnRdO1xuICAgICAgICAgICAgICAgIGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZWxsSUQgKyBjb2xJbmNyZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaXQnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgICAgICAgICAgbGV0IG5ld0hUTUw7XG4gICAgICAgICAgICBjb25zdCB0ZXh0Q2hpbGQgPSAoY2VsbC5maXJzdEVsZW1lbnRDaGlsZHx8Y2VsbC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RleHRDaGlsZCBhdCBpZCAgaXM6ICcsdGV4dENoaWxkKTtcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NlbGwgaW5uZXIgaHRtbDogJyxjZWxsLmlubmVySFRNTCk7XG4gICAgICAgICAgICBpZih0ZXh0Q2hpbGQpe1xuICAgICAgICAgICAgICAgLy9vcGVuaW5nIGFuZCBjbG9zaW5nIHRhZ3NcbiAgICAgICAgICAgICAgICBjb25zdCBvcGVuaW5nVGFnID0gJzxzcGFuIHN0eWxlPVwiY29sb3I6d2hpdGVcIj4nXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2luZ1RhZyA9ICc8L3NwYW4+JyBcbiAgICAgICAgICAgICAgICBuZXdIVE1MID0gb3BlbmluZ1RhZytjZWxsLmlubmVyVGV4dCtjbG9zaW5nVGFnO1xuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gbmV3SFRNTDtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9pZCBhdXRvbWF0aWNhbGx5IGRpc3Rpbmd1aXNoZXMgYm9hcmRzIGJ1dCBpZCB0byBiZSB1c2VkIGlzIGZvciBvcHBvbmVudHMgYm9hcmRcbiAgICAvL2lkIGFkanVzdGVkIGJlZm9yZSBjYWxsIHRvIHNob3dcbiAgICBzaG93TWlzc2VkIChpZCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdpZDogJyxpZCk7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnLVgtJyk7XG4gLy8gICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAvLyAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICAgICAgIC8vIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yPSdsaWdodGdyZWVuJztcbiAgICAgICAgbGV0IGxvZ0lEO1xuICAgICAgICBsZXQgbG9nQ2VsbDtcbiAgICAgICAgLy9sZXQgZ0JyZDtcbiAgICAgICAgaWYoaWQgPCAxMjEpe1xuICAgICAgICAgICAgLy9tdXN0IGJlIHBsYXllcl8wICdzZWxmJ1xuICAgICAgICAgICAgLy9wbGF5ZXIgPSBwbGF5ZXJfMDtcbiAgICAgICAgICAgIGxvZ0lEID0gaWQrMTIxO1xuICAgICAgICAgICAgLy9nQnJkID0gcGxheWVyXzEuZ2FtZUJvYXJkO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ0lEOiAnLCBsb2dJRClcbiAgICAgICAgICAgIGxvZ0NlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsb2dJRCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nQ2VsbDogJywgbG9nQ2VsbCk7XG4gICAgICAgICAgICAvL3Nob3cgb3duIHNoaXAgaGl0IFxuICAgICAgICAgICAgbG9nQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgICAgICAgLy8gY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9J2dyZXknO1xuICAgICAgICAgICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLy9tdXN0IGJlIHBsYXllcl8xXG4gICAgICAgICAgIC8vIHBsYXllciA9IHBsYXllcl8xO1xuICAgICAgICAgICAgbG9nSUQgPSBpZC0xMjE7XG4gICAgICAgICAgICAvL2dCcmQgPSBwbGF5ZXJfMC5nYW1lQm9hcmQ7XG4gICAgICAgICAgICBsb2dDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobG9nSUQpO1xuICAgICAgICAgICAgLy9zaG93IHNoaXAgaGl0XG4gICAgICAgICAgICAvL2NlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yPSdyZWQnO1xuICAgICAgICAgICAgLy9sb2dDZWxsLmJhY2tncm91bmRDb2xvcj0nbGlnaHRncmV5JztcbiAgICAgICAgICAgIC8vbG9nQ2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93R2FtZU92ZXIgKHBsYXllcikge1xuICAgICAgICBjb25zdCBnYW1lU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgICAgICBnYW1lU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBjb25zdCBvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkdhbWVPdmVyJyk7XG4gICAgICAgIG92ZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHN3aXRjaCAocGxheWVyKXtcbiAgICAgICAgICAgIGNhc2UgJ3NlbGYnOiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGZXaW4nKTtcbiAgICAgICAgICAgICAgICB3aW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdvcHBvJzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHBvV2luJyk7XG4gICAgICAgICAgICAgICAgd2lubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkU2hpcENsYXNzKGlkKXtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaGlwIGNsYXNzIGFkZGVkIGF0IGlkICcsaWQsKTtcbiAgICB9XG5cbn0iLCIvL2dhbWVCb2FyZC5qc1xuLypcbnRoZSBHYW1lQm9hcmQgY2xhc3NcbkdhbWVib2FyZHMgc2hvdWxkIGJlIGFibGUgdG8gcGxhY2Ugc2hpcHMgYXQgc3BlY2lmaWMgY29vcmRpbmF0ZXMgYnkgY2FsbGluZyB0aGUgc2hpcCBjbGFzcy5cbkdhbWVib2FyZHMgc2hvdWxkIGhhdmUgYSByZWNlaXZlQXR0YWNrIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBwYWlyIG9mIGNvb3JkaW5hdGVzLCBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBhdHRhY2sgaGl0IGEgc2hpcCBhbmQgdGhlbiBzZW5kcyB0aGUg4oCYaGl04oCZIGZ1bmN0aW9uIHRvIHRoZSBjb3JyZWN0IHNoaXAsIG9yIHJlY29yZHMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtaXNzZWQgc2hvdC5cbkdhbWVib2FyZHMgc2hvdWxkIGtlZXAgdHJhY2sgb2YgbWlzc2VkIGF0dGFja3Mgc28gdGhleSBjYW4gZGlzcGxheSB0aGVtIHByb3Blcmx5LlxuR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxuKi9cblxuaW1wb3J0IHtkaXNwbGF5LHBsYXllcnMsIHBsYXllcl8wLCBwbGF5ZXJfMSxzZXRBY3RpdmVQbGF5ZXIsYXR0YWNraW5nUGxheWVyfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7U2hpcH0gZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCB7Y29tcEF0dGFjayB9IGZyb20gJy4vY29tcHV0ZXIuanMnO1xuXG5jbGFzcyBHYW1lQm9hcmQge1xuICAgIFxuXG4gICAgY29uc3RydWN0b3IgKGJvYXJkRGF0YSkge1xuICAgICAgICAvL2NhdGVyIGZvciBpbmNvcnJlY3QgaW52b2NhdGlvbiBpLmUgbm90IHVzaW5nICduZXcnIGtleXdvcmRcbiAgICAgICAgaWYoISh0aGlzIGluc3RhbmNlb2YgR2FtZUJvYXJkKSkge1xuICAgICAgICAgICAgLy90aHJvdyBlcnJvcjpcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdFcnJvcjogSW5jb3JyZWN0IGludm9jYXRpb24nKTtcbiAgICAgICAgICAgIC8vb3JcbiAgICAgICAgICAgIC8vcmV0dXJuIG5ldyBHYW1lQm9hcmQoYm9hcmREYXRhKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYm9hcmREYXRhOiAnLGJvYXJkRGF0YSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmREYXRhLmlkOyAgICAgIC8vd2hpY2ggdG8ga2VlcFxuICAgICAgICAgICAgdGhpcy5pZCA9IGJvYXJkRGF0YS5pZDsgICAgICAgICAvL3doaWNoIHRvIGtlZXBcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gYm9hcmREYXRhLnN0YXR1czsgICAgICAgLy8gc2V0dXAgLyBwbGFjZSAvIHJhbmRvbSAvIGF0dGFjay8gdW5kZXJGaXJlIC8gd2luIC9sb3NlICBcbiAgICAgICAgICAgIHRoaXMuZ3JpZCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5taXNzZWQgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX3BsYWNlU2hpcCA9IFswLDAsMCwwLDBdOyAgICAgIC8vcGxhY2luZyBzaGlwIDAgPSBmYWxzZSAsIDEgPSB0cnVlICwgLTEgPSBkb25lICwgLTIgPSBubyBhY2Nlc3NcbiAgICAgICAgICAgIHRoaXMuX3NoaXBzUGxhY2VkID0gWzAsMCwwLDAsMF07ICAgIC8vIHNldCB0byAxIGFzIHBsYWNlZCBmb3IgQ2FycmllciwgQmF0dGxlc2hpcCwgQ3J1aXNlciwgU3VibWFyaW5lLCBEZXN0cm95ZXJcbiAgICAgICAgICAgIHRoaXMuY2FycmllckNvdW50ID0gNTtcbiAgICAgICAgICAgIHRoaXMuY2FycmllckxvY2FsZSA9W107XG4gICAgICAgICAgICB0aGlzLmNydWlzZXJDb3VudCA9IDM7XG4gICAgICAgICAgICB0aGlzLmNydWlzZXJMb2NhbGUgPVtdO1xuICAgICAgICAgICAgdGhpcy5iYXR0bGVzaGlwQ291bnQgPSA0O1xuICAgICAgICAgICAgdGhpcy5iYXR0bGVzaGlwTG9jYWxlID1bXTtcbiAgICAgICAgICAgIHRoaXMuc3VibWFyaW5lQ291bnQgPSAzO1xuICAgICAgICAgICAgdGhpcy5zdWJtYXJpbmVMb2NhbGUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveWVyQ291bnQgPSAyO1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95ZXJMb2NhbGUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY2FycmllckhpdHMgPSAwO1xuICAgICAgICAgICAgdGhpcy5jcnVpc2VySGl0cyA9IDA7XG4gICAgICAgICAgICB0aGlzLmJhdHRsZXNoaXBIaXRzID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3VibWFyaW5lSGl0cyA9IDA7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3llckhpdHMgPSAwO1xuICAgICAgICAgICAgdGhpcy5IaXRzPVswLDAsMCwwLDAsXTsgICAgIC8vIHNldCB0byAxIGFzIHN1bmsgZm9yIENhcnJpZXIsIEJhdHRsZXNoaXAsIENydWlzZXIsIFN1Ym1hcmluZSwgRGVzdHJveWVyXG4gICAgICAgICAgICB0aGlzLl9zaGlwVG9QbGFjZSA9IG51bGw7ICAgLy9ub25lIHlldCBcbiAgICAgICAgICAgIC8vc2V0IHRoaXMgYm9hcmRzIHNrZXRjaFxuICAgICAgICAgICAgdGhpcy5fc2tldGNoID0gZGlzcGxheS5kb2MuZ2V0U2tldGNoKGJvYXJkRGF0YS5pZCk7XG4gICAgICAgICAgICB0aGlzLl9zaGlwcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9tZXRob2RzXG4gICAgZ2V0Qm9hcmRTdGF0dXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICAgIH1cblxuICAgIHNldEJvYXJkU3RhdHVzKHN0YXR1cykge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdzdGF0dXM6ICcsc3RhdHVzKTtcbiAgICAgICAgc3dpdGNoKHN0YXR1cyl7XG4gICAgICAgICAgICAvL3ZhbGlkXG4gICAgICAgICAgICBjYXNlICdzZXR1cCc6XG4gICAgICAgICAgICBjYXNlICdwbGFjZSc6XG4gICAgICAgICAgICBjYXNlICdyYW5kb206JzpcbiAgICAgICAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgICAgICBjYXNlICd1bmRlckZpcmUnOlxuICAgICAgICAgICAgY2FzZSAnd2luJzpcbiAgICAgICAgICAgIGNhc2UgJ2xvc2UnOiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2ludmFsaWRcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBzdGF0dXMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS8vc3dpdGNoXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2JvYXJkIHN0YXR1cyBzZXQ6ICcsIHRoaXMuc3RhdHVzKTtcbiAgICB9Ly9zZXRcblxuICAgIC8vcGxhY2luZyB3aGljaCBzaGlwP1xuICAgIHNldFNoaXBUb1BsYWNlIChzaGlwKXtcbiAgICAgICAgdGhpcy5fc2hpcFRvUGxhY2UgPSBzaGlwO1xuICAgICAgICBjb25zb2xlLmxvZygnc2V0dGluZyBzaGlwJyxzaGlwKTtcbiAgICB9XG5cbiAgICBnZXRTaGlwVG9QbGFjZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaGlwVG9QbGFjZTtcbiAgICB9XG5cbiAgICBzZXRQbGFjZVNoaXAgKGFycmF5KSB7XG4gICAgICAgIHRoaXMuX3BsYWNlU2hpcCA9IGFycmF5O1xuICAgIH1cblxuICAgIGdldFBsYWNlU2hpcCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGFjZVNoaXA7XG4gICAgfVxuXG4gICAgc2V0U2hpcHNQbGFjZWQoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5fc2hpcHNQbGFjZWRbaW5kZXhdPTE7XG4gICAgfVxuXG4gICAgZ2V0U2hpcHNQbGFjZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaGlwc1BsYWNlZDtcbiAgICB9XG5cbiAgICAvL3BsYWNlIHNoaXAgYXQgc3BlY2lmaWMgY29vcmRpbmF0ZXMgZnJvbSBtb3VzZSBjbGljayBldmVudCBlIGJ5IGNhbGxpbmcgdGhlIHNoaXAgY2xhc3NcbiAgICBwbGFjZVNoaXAgKGUpIHtcbiAgICAgICAgbGV0IHJvdztcbiAgICAgICAgbGV0IGNvbDtcbiAgICAgICAgbGV0IHBsYWNlU2hpcCA9IHRoaXMuZ2V0UGxhY2VTaGlwKCk7XG4gICAgICAgIGxldCBzaGlwID0gdGhpcy5nZXRTaGlwVG9QbGFjZSgpO1xuICAgICAgICBsZXQgZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3IoZS5pZC8xMSk7ICAgICAgLy9lZyBbcm93IDIgY29sIDldIGUuaWQgPSAoaj0yKSoxMSArIChpPTkgKSA9IDMxIHJvdyA9IDJcbiAgICAgICAgaWYoZS5pZCA+IDEyMCkgeyByb3cgPSByb3cgLSAxMTt9ICAgLy9jYXRlcnMgZm9yIGJvYXJkXzEgcGxheWVyXzFcbiAgICAgICAgY29sID0gZS5pZCAlIDExOyAgICAgICAgICAgICAgICAvLyAzMSAlIDExID0gMzEtMjIgPSA5ICBjb2wgPSA5XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2UuaWQ6ICcsIGUuaWQsICcgcm93OiAnLHJvdywnIGNvbDogJyxjb2wpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNoaXApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYXQgcGxhY2Ugc2hpcHMnKTtcbiAgICAgICAgLy9pZiBjdXJyZW50bHkgbm8gc2hpcFxuICAgICAgICAvL2NvbnNvbGUubG9nKCdncmlkOiAnLHRoaXMuZ3JpZCApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZ3JpZFtyb3ddW2NvbF06ICcsdGhpcy5ncmlkW3Jvd11bY29sXSApO1xuICAgICAgICBpZih0aGlzLmdyaWRbcm93XVtjb2xdID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5pZCk7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5nZXRTaGlwVG9QbGFjZSgpKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJyp0ZXh0JywgdGV4dCk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoc2hpcCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgICAgIHsgICBcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBub3QgeWV0IHBsYWNlZCBpLmUuPiAtMSAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYocGxhY2VTaGlwWzBdID4gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9pbmRpY2F0ZSBwbGFjaW5nIHRydWUgPSAxXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXBbMF0gPSAxOyAgICAgICAgICAgLy9zdGFydGluZyBwbGFjZW1lbnQgZmxhZ2dlZCB0byBsb2NhbCBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9mbGFnIG90aGVyIHNoaXAgcGxhY2VtZW50IG5vdCBhY2Nlc3NpYmxlID0gLTJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcFsxXSA9ICBwbGFjZVNoaXBbMl0gPSBwbGFjZVNoaXBbM10gPSBwbGFjZVNoaXBbNF0gPSAtMjsgLy8gbm8gYWNjZXNzIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFjZW1lbnQgY3VycmVudGx5IGFjdGl2ZSBzbyBjb21wbGV0ZSBwcm9jZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwbGFjZVNoaXBbMF0gPiAwKXsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbm90IHlldCByZWFjaGVkIHNoaXAgbGVuZ3RoICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigodGhpcy5jYXJyaWVyQ291bnQtLSkgPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygncGxhY2VTaGlwOiAnLHBsYWNlU2hpcCwnIGNhcnJpZXJDb3VudCAnLHRoaXMuY2FycmllckNvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGV4dCcsIHRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRbcm93XVtjb2xdPXRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FycmllckxvY2FsZS5wdXNoKFtyb3csY29sXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7ZXJyb3IgPSB0cnVlO31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmNhcnJpZXJDb3VudCA9PT0gMCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNoaXBzUGxhY2VkKDApOyAgICAgLy9mbGFnIGNhcnJpZXIgcG9zaXRpb24gc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY3JlYXRlIHRoZSBzaGlwIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXBEYXRhID0geyd0eXBlJzonY2FycmllcicsICdsb2NhdGlvbic6W10sJ2xlbmd0aCc6IDUgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lzIGl0IHBsYWNlZCBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZSA9IHRoaXMuY2FycmllckxvY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzSG9yaXpvbnRhbCA9IHRoaXMuY2hlY2tIb3Jpem9udGFsKGxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbmVlZCB0byBjYXRlciBmb3IgaGlnaGVyIGdyaWQgaWQgc2V0IGJlZm9yZSBsb3dlciBncmlkIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcmlnaW4gPSB0aGlzLmNoZWNrT3JpZ2luKGxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzSG9yaXpvbnRhbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbiA9ICdIJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbiA9ICdWJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwRGF0YS5sb2NhdGlvbiA9IFtvcmlnaW5bMF0sIG9yaWdpblsxXSwgb3JpZW50YXRpb25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdDYXJyaWVyIHNoaXBEYXRhOiAnLHNoaXBEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2hpcHNbMF0gPSBuZXcgU2hpcChzaGlwRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2NhcnJpZXI6ICcsdGhpcy5fc2hpcHNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXBbMF09IC0xOyAgIC8vY29tcGxldGVkIGZsYWdnZWQgdG8gbG9jYWwgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwWzFdID0gIHBsYWNlU2hpcFsyXSA9IHBsYWNlU2hpcFszXSA9IHBsYWNlU2hpcFs0XSA9IDA7IC8vY2xlYXIgdG8gc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdiJzp7XG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYWNlU2hpcFsxXSA+IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcFsxXSA9IDE7ICAgICAgICAgICAvL3N0YXJ0aW5nIHBsYWNlbWVudCBmbGFnZ2VkIHRvIGxvY2FsIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXBbMl0gPSBwbGFjZVNoaXBbM10gPSBwbGFjZVNoaXBbNF0gPSAtMjsgLy8gbm8gYWNjZXNzIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGxhY2VTaGlwWzFdID4gMCl7ICAgICAgIC8vY3VycmVudGx5IGFjdGl2ZSBzbyBjb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYmF0dGxlc2hpcENvdW50LS0gPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGV4dCcsIHRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRbcm93XVtjb2xdPXRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmF0dGxlc2hpcExvY2FsZS5wdXNoKFtyb3csY29sXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7ZXJyb3IgPSB0cnVlO31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJhdHRsZXNoaXBDb3VudCA9PT0gMCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNoaXBzUGxhY2VkKDEpOyAgICAgLy9mbGFnIGJhdHRsZXNoaXAgcG9zaXRpb24gc2V0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NyZWF0ZSB0aGUgc2hpcCBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlwRGF0YSA9IHsndHlwZSc6J2JhdHRsZXNoaXAnLCAnbG9jYXRpb24nOltdLCdsZW5ndGgnOiA0IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pcyBpdCBwbGFjZWQgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmJhdHRsZXNoaXBMb2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0hvcml6b250YWwgPSB0aGlzLmNoZWNrSG9yaXpvbnRhbChsb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL25lZWQgdG8gY2F0ZXIgZm9yIGhpZ2hlciBncmlkIGlkIHNldCBiZWZvcmUgbG93ZXIgZ3JpZCBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JpZ2luID0gdGhpcy5jaGVja09yaWdpbihsb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc0hvcml6b250YWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAnSCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAnVic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcERhdGEubG9jYXRpb24gPSBbb3JpZ2luWzBdLCBvcmlnaW5bMV0sIG9yaWVudGF0aW9uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnQmF0dGxlc2hpcCBzaGlwRGF0YTogJyxzaGlwRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NoaXBzWzFdID0gbmV3IFNoaXAoc2hpcERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdiYXR0bGVzaGlwOiAnLHRoaXMuX3NoaXBzWzFdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXBbMV09IC0xOyAgIC8vY29tcGxldGVkIGZsYWdnZWQgdG8gbG9jYWwgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwWzJdID0gcGxhY2VTaGlwWzNdID0gcGxhY2VTaGlwWzRdID0gMDsgLy9jbGVhciB0byBzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2MnOntcbiAgICAgICAgICAgICAgICAgICAgaWYocGxhY2VTaGlwWzJdID4gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwWzJdID0gMTsgICAgICAgICAgIC8vc3RhcnRpbmcgcGxhY2VtZW50IGZsYWdnZWQgdG8gbG9jYWwgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcFszXSA9IHBsYWNlU2hpcFs0XSA9IC0yOyAvLyBubyBhY2Nlc3MgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwbGFjZVNoaXBbMl0gPiAwKXsgICAgICAgLy9jdXJyZW50bHkgYWN0aXZlIHNvIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jcnVpc2VyQ291bnQtLSA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0ZXh0JywgdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtyb3ddW2NvbF09dGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcnVpc2VyTG9jYWxlLnB1c2goW3Jvdyxjb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtlcnJvciA9IHRydWU7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY3J1aXNlckNvdW50ID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2hpcHNQbGFjZWQoMik7ICAgICAvL2ZsYWcgY3J1aXNlciBwb3NpdGlvbiBzZXRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NyZWF0ZSB0aGUgc2hpcCBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlwRGF0YSA9IHsndHlwZSc6J2NydWlzZXInLCAnbG9jYXRpb24nOltdLCdsZW5ndGgnOiAzIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pcyBpdCBwbGFjZWQgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmNydWlzZXJMb2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0hvcml6b250YWwgPSB0aGlzLmNoZWNrSG9yaXpvbnRhbChsb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL25lZWQgdG8gY2F0ZXIgZm9yIGhpZ2hlciBncmlkIGlkIHNldCBiZWZvcmUgbG93ZXIgZ3JpZCBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JpZ2luID0gdGhpcy5jaGVja09yaWdpbihsb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc0hvcml6b250YWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAnSCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAnVic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcERhdGEubG9jYXRpb24gPSBbb3JpZ2luWzBdLCBvcmlnaW5bMV0sIG9yaWVudGF0aW9uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnY3J1aXNlciBzaGlwRGF0YTogJyxzaGlwRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NoaXBzWzJdID0gbmV3IFNoaXAoc2hpcERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjcnVpc2VyOiAnLHRoaXMuX3NoaXBzWzJdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXBbMl09IC0xOyAgIC8vY29tcGxldGVkIGZsYWdnZWQgdG8gbG9jYWwgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwWzNdID0gcGxhY2VTaGlwWzRdID0gMDsgLy9jbGVhciB0byBzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgJ3MnOntcbiAgICAgICAgICAgICAgICAgICAgaWYocGxhY2VTaGlwWzNdID4gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwWzNdID0gMTsgICAgICAgICAgIC8vc3RhcnRpbmcgcGxhY2VtZW50IGZsYWdnZWQgdG8gbG9jYWwgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcFs0XSA9IC0yOyAvLyBubyBhY2Nlc3MgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwbGFjZVNoaXBbM10gPiAwKXsgICAgICAgLy9jdXJyZW50bHkgYWN0aXZlIHNvIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zdWJtYXJpbmVDb3VudC0tID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RleHQnLCB0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkW3Jvd11bY29sXT10ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1hcmluZUxvY2FsZS5wdXNoKFtyb3csY29sXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7ZXJyb3IgPSB0cnVlO31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN1Ym1hcmluZUNvdW50ID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2hpcHNQbGFjZWQoMyk7ICAgICAgLy9mbGFnIHN1Ym1hcmluZSBwb3NpdGlvbiBzZXRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NyZWF0ZSB0aGUgc2hpcCBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlwRGF0YSA9IHsndHlwZSc6J3N1Ym1hcmluZScsICdsb2NhdGlvbic6W10sJ2xlbmd0aCc6IDMgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lzIGl0IHBsYWNlZCBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZSA9IHRoaXMuc3VibWFyaW5lTG9jYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNIb3Jpem9udGFsID0gdGhpcy5jaGVja0hvcml6b250YWwobG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9uZWVkIHRvIGNhdGVyIGZvciBoaWdoZXIgZ3JpZCBpZCBzZXQgYmVmb3JlIGxvd2VyIGdyaWQgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9yaWdpbiA9IHRoaXMuY2hlY2tPcmlnaW4obG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNIb3Jpem9udGFsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ0gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uID0gJ1YnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBEYXRhLmxvY2F0aW9uID0gW29yaWdpblswXSwgb3JpZ2luWzFdLCBvcmllbnRhdGlvbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3N1Ym1hcmluZSBzaGlwRGF0YTogJyxzaGlwRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NoaXBzWzNdID0gbmV3IFNoaXAoc2hpcERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzdWJtYXJpbmU6ICcsdGhpcy5fc2hpcHNbM10pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcFszXT0gLTE7ICAgLy9jb21wbGV0ZWQgZmxhZ2dlZCB0byBsb2NhbCBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXBbNF0gPSAwOyAgIC8vY2xlYXIgdG8gc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdkJzp7XG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYWNlU2hpcFs0XSA+IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcFs0XSA9IDE7ICAgICAgICAgICAvL3N0YXJ0aW5nIHBsYWNlbWVudCBmbGFnZ2VkIHRvIGxvY2FsIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwbGFjZVNoaXBbNF0gPiAwKXsgICAgICAgLy9jdXJyZW50bHkgYWN0aXZlIHNvIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kZXN0cm95ZXJDb3VudC0tID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RleHQnLCB0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkW3Jvd11bY29sXT10ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3llckxvY2FsZS5wdXNoKFtyb3csY29sXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7ZXJyb3IgPSB0cnVlO31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRlc3Ryb3llckNvdW50ID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2hpcHNQbGFjZWQoNCk7ICAgICAvL2ZsYWcgZGVzdHJveWVyIHBvc2l0aW9uIHNldFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY3JlYXRlIHRoZSBzaGlwIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXBEYXRhID0geyd0eXBlJzonZGVzdHJveWVyJywgJ2xvY2F0aW9uJzpbXSwnbGVuZ3RoJzogMiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JpZW50YXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaXMgaXQgcGxhY2VkIGhvcml6b250YWwgb3IgdmVydGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlID0gdGhpcy5kZXN0cm95ZXJMb2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0hvcml6b250YWwgPSB0aGlzLmNoZWNrSG9yaXpvbnRhbChsb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL25lZWQgdG8gY2F0ZXIgZm9yIGhpZ2hlciBncmlkIGlkIHNldCBiZWZvcmUgbG93ZXIgZ3JpZCBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3JpZ2luID0gdGhpcy5jaGVja09yaWdpbihsb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc0hvcml6b250YWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAnSCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSAnVic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcERhdGEubG9jYXRpb24gPSBbb3JpZ2luWzBdLCBvcmlnaW5bMV0sIG9yaWVudGF0aW9uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZGVzdHJveWVyIHNoaXBEYXRhOiAnLHNoaXBEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2hpcHNbNF0gPSBuZXcgU2hpcChzaGlwRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2Rlc3Ryb3llcjogJyx0aGlzLl9zaGlwc1s0XSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwWzRdPSAtMTsgICAvL2NvbXBsZXRlZCBmbGFnZ2VkIHRvIGxvY2FsIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0vLyBzd2l0Y2ggc2hpcFxuICAgICAgICAgICAgLy91cGRhdGUgdGhpcy5fcGxhY2VTaGlwIFxuICAgICAgICAgICAgdGhpcy5zZXRQbGFjZVNoaXAocGxhY2VTaGlwKTtcblxuICAgICAgICB9ZWxzZXtlcnJvciA9IHRydWU7fVxuICAgICAgICBpZihlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IGEgY2xhc2ggT1IgIGV4Y2VlZHMgcGVybWl0dGVkIGxlbmd0aCcpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvL3JhbmRvbWx5IHBsYWNlIHNoaXBwaW5nXG4gICAgcmFuZG9taXNlU2hpcHMoKXtcbiAgICAgICAgLy9yYW5kb21pc2VcbiAgICAgICAgLy9hIGxvY2FsIGdyaWQgdG8gZml0IHBvc2l0aW9uIG9mIHNoaXBzIFxuICAgICAgICBsZXQgZ3JpZCA9IFtdO1xuICAgICAgICBsZXQgcm93cyA9IDExO1xuICAgICAgICBsZXQgY29scyA9IDExO1xuICAgICAgICAvL3NldCBlYWNoIEFDVElWRSBjZWxsIGNsZWFyIGkuZS4gZXhjbHVkZXMgaSBvciBqID09IDBcbiAgICAgICAgZm9yKCBsZXQgaT0xOyBpPCByb3dzOyBpKyspe1xuICAgICAgICAgICAgZ3JpZFtpXSA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBqPTE7ajwgY29sczsgaisrKXsgIFxuICAgICAgICAgICAgICAgIGdyaWRbaV1bal0gPSAwOyAgXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hpcHNEYXRhID0ge1xuICAgICAgICAgICAgLy9sb2NhdGlvbiB0c2V0Um5kKCkgcmV0dXJucyBhbiBhcnJheSBvZiBzdGFydCByb3csIHN0YXJ0IGNvbCwgYW5kIGZpbmFsIGVudHJ5IG9yaWVudGF0aW9uXG4gICAgICAgICAgICAvL05CIHNvIG9yaWVudGF0aW9uIG5vdyBmcm9tIGxvY2F0aW9uWzJdXG4gICAgICAgICAgICBjYXJyaWVyIDogICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0NhcnJpZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB0aGlzLnNldFJuZCgnQycsZ3JpZCw1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIGJhdHRsZXNoaXAgOiAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0JhdHRsZXNoaXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB0aGlzLnNldFJuZCgnYicsZ3JpZCw0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IDRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3J1aXNlciA6ICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQ3J1aXNlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHRoaXMuc2V0Um5kKCdjJyxncmlkLDMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgc3VibWFyaW5lIDogICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU3VibWFyaW5lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogdGhpcy5zZXRSbmQoJ3MnLGdyaWQsMyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc3Ryb3llciA6ICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0Rlc3Ryb3llcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHRoaXMuc2V0Um5kKCdkJyxncmlkLDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2hpcHMoc2hpcHNEYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBzaGlwc0RhdGE7XG4gICAgfSAgICAgXG5cbiAgICAvL21ldGhvZCB0byBzZXQgc2hpcCBsb2NhdGlvbnMgcmFuZG9tbHkgd2l0aG91dCBjbGFzaGluZ1xuICAgIHNldFJuZChzLGdyaWQsbil7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZygnc2hpcDogJyxzLCcgZ3JpZDogJyxKU09OLnN0cmluZ2lmeShncmlkKSwnIG46ICcsbik7XG5cbiAgICAgICAgbGV0IHJvdztcbiAgICAgICAgbGV0IHN0YXJ0Um93O1xuICAgICAgICBsZXQgY29sOyBcbiAgICAgICAgbGV0IHN0YXJ0Q29sIDtcbiAgICAgICAgbGV0IGJ1aWx0ID0gZmFsc2U7XG4gICAgICAgIGxldCBjZWxsc0NsZWFyID0gdHJ1ZTtcbiAgICAgICAgbGV0IGNvdW50O1xuICAgICAgICBsZXQgY2FuQnVpbGRfSCA9IHRydWU7XG4gICAgICAgIGxldCBjYW5CdWlsZF9WID0gdHJ1ZTsgXG4gICAgICAgIGxldCBzaGlwTG9jYXRpb24gPSBbXTsgICAgICAvL2xvY2F0aW9uIHRvIHJldHVybiBhcyBhcnJheSBvZiBzdGFydCByb3csIHN0YXJ0IGNvbCwgYW5kIGZpbmFsIGVudHJ5IG9yaWVudGF0aW9uXG5cbiAgICAgICAgbGV0IHRlbXBDb3VudGVyID0gMDtcbiAgICAgICAgd2hpbGUoIWJ1aWx0KXtcbiAgICAgICAgICAgIHdoaWxlKHRlbXBDb3VudGVyIDwgNDApIHtcbiAgICAgICAgICAgIC8vc2VsZWN0IHJhbmRvbSBjZWxsIHRvIHN0YXJ0XG4gICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKDErKE1hdGgucmFuZG9tKCkgKiAoMTAtKG4pKSkpO1xuICAgICAgICAgICAgY29sID0gTWF0aC5mbG9vcigxKyhNYXRoLnJhbmRvbSgpICogKDEwLShuKSkpKTtcbiAgICAgICAgICAgIHN0YXJ0Um93ID0gcm93O1xuICAgICAgICAgICAgc3RhcnRDb2wgPSBjb2w7XG5cbiAgICAgICAgICAgIC8vY2hlY2sgaWYgY2FuIGJ1aWxkIGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5IGZyb20gaGVyZVxuICAgICAgICAgICAgaWYgKGdyaWRbcm93XVtjb2xdID09PSAwKXtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgLy90cnkgdG8gYnVpbGQgaG9yaXpvdGFsbHlcbiAgICAgICAgICAgICAgICB3aGlsZShjb3VudCA8IG4pe1xuICAgICAgICAgICAgICAgICAgICBpZihncmlkW3Jvd11bY29sKytdID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50KysgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNDbGVhciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQgPSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbkJ1aWxkX0ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihjb3VudCA9PT0gbil7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5CdWlsZF9IPXRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDEwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vY2hlY2sgYm90aCBIICYgVlxuICAgICAgICAgICAgICAgIC8vcmVzZXRcbiAgICAgICAgICAgICAgICBjZWxsc0NsZWFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgLy90cnkgdG8gYnVpbGQgdmVydGljYWxseVxuICAgICAgICAgICAgICAgIC8vcmVzZXQgcm93IGNvbCB0byBzdGFydCByb3cgY29sXG4gICAgICAgICAgICAgICAgcm93ID0gc3RhcnRSb3c7XG4gICAgICAgICAgICAgICAgY29sID0gc3RhcnRDb2w7XG4gICAgICAgICAgICAgICAgd2hpbGUoY291bnQgPD0gbil7XG4gICAgICAgICAgICAgICAgICAgIGlmKGdyaWRbcm93KytdW2NvbF0gPT09IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKyA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsc0NsZWFyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuQnVpbGRfViA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGNvdW50ID09PSBuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbkJ1aWxkX1YgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQgPSAxMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY2FuQnVpbGRfSCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNhbkJ1aWxkX1YgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjZWxsc0NsZWFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBidWlsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY2FuQnVpbGRfSCB8fCBjYW5CdWlsZF9WKXtcbiAgICAgICAgICAgICAgICBpZihjYW5CdWlsZF9IICYmIGNhbkJ1aWxkX1YpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9zZWxlY3Qgd2hpY2hcbiAgICAgICAgICAgICAgICBjb25zdCBob3JfdmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goIGhvcl92ZXIgKSB7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYnVpbGQgaG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPG47IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRbc3RhcnRSb3ddW3N0YXJ0Q29sK2ldID0gcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVpbHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBMb2NhdGlvblswXSA9IHN0YXJ0Um93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBMb2NhdGlvblsxXSA9IHN0YXJ0Q29sO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBMb2NhdGlvblsyXSA9ICdIJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYnVpbGQgdmVydGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxuOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkW3N0YXJ0Um93K2ldW3N0YXJ0Q29sXSA9IHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1aWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwTG9jYXRpb25bMF0gPSBzdGFydFJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwTG9jYXRpb25bMV0gPSBzdGFydENvbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwTG9jYXRpb25bMl0gPSAnVic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FuQnVpbGRfSCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2J1aWxkIGhvcml6b250YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPG47IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFtzdGFydFJvd11bc3RhcnRDb2wraV0gPSBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnVpbHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcExvY2F0aW9uWzBdID0gc3RhcnRSb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwTG9jYXRpb25bMV0gPSBzdGFydENvbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBMb2NhdGlvblsyXSA9ICdIJztcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYW5CdWlsZF9WKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2J1aWxkIHZlcnRpY2FsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8bjsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFtzdGFydFJvdytpXVtzdGFydENvbF0gPSBzOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVpbHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBMb2NhdGlvblswXSA9IHN0YXJ0Um93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBMb2NhdGlvblsxXSA9IHN0YXJ0Q29sO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBMb2NhdGlvblsyXSA9ICdWJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGJ1aWx0ID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICB0ZW1wQ291bnRlciA9IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS8vdGVtcENvdW50ZXJcbiAgICAgICAgfS8vd2hpbGUgbm90IGJ1aWx0XG4gICAgICAgIC8vZG9uZSBidWlsdFxuICAgICAgICAvL3JldHVybiBzaGlwc0RhdGEuc2hpcC5sb2NhdGlvbiBhcyBhcnJheSBvZiBzdGFydCByb3cgYW5kIHN0YXJ0IGNvbHVtbiArIG9yaWVudGF0aW9uXG4gICAgICAgIHJldHVybiAgc2hpcExvY2F0aW9uO1xuICAgIH0vL3NldFJuZCgpXG5cbiAgICBzZXRCb2FyZEdyaWQoc2hpcHMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NldEJvYXJkR3JpZCgpIGNhbGxlZCwgaWQ6ICcsIHRoaXMuaWQpO1xuICAgICAgICAvL3dpdGhpbiAxMSB4IDExIGdyaWQgb2Ygd2hpY2ggMS0+IDEwIGFjdGl2ZVxuICAgICAgICBsZXQgZ3JpZCA9IFtdO1xuICAgICAgICBsZXQgcm93cyA9IDExO1xuICAgICAgICBsZXQgY29scyA9IDExO1xuICAgICAgICAvL3NldCBlYWNoIEFDVElWRSBjZWxsIGNsZWFyIGkuZS4gZXhjbHVkZXMgaSBvciBqID09IDBcbiAgICAgICAgZm9yKCBsZXQgaT0xOyBpPCByb3dzOyBpKyspe1xuICAgICAgICAgICAgZ3JpZFtpXSA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBqPTE7ajwgY29sczsgaisrKXsgIFxuICAgICAgICAgICAgICAgIGdyaWRbaV1bal0gPSAwOyAgXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0ICBudW1TaGlwcyA9IE9iamVjdC5rZXlzKHNoaXBzKS5sZW5ndGg7XG4gICAgICAgXG4gICAgICAgIC8vbGV0ICBzaGlwVHlwZSA9IFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgJ2NydWlzZXInLCAnc3VibWFyaW5lJywgJ2Rlc3Ryb3llcicgXTtcbiAgICAgICAgbGV0ICBzaGlwU3RyID0gWydDJywgJ2InLCAnYycsICdzJywgJ2QnXTtcblxuICAgICAgICBmb3IoIGxldCBuPTA7IG4gPCBudW1TaGlwczsgbisrICl7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IHNoaXBTdHJbbl07XG4gICAgICAgICAgICBsZXQgYXJyID0gT2JqZWN0LnZhbHVlcyhzaGlwcylbbl0ubG9jYXRpb247XG4gICAgICAgICAgICBsZXQgcm93ID0gYXJyWzBdO1xuICAgICAgICAgICAgbGV0IGNvbCA9IGFyclsxXTtcbiAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbiA9IGFyclsyXTtcbiAgICAgICAgICAgIGxldCBsZW4gPSBPYmplY3QudmFsdWVzKHNoaXBzKVtuXS5sZW5ndGg7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbiBsZW5ndGg6ICcsbiwnICcsbGVuKTtcbiAgICAgICAgICAgIGxldCBncmlkSUQ7XG5cbiAgICAgICAgICAgIC8vaG9yaXpvbnRhbFxuICAgICAgICAgICAgaWYob3JpZW50YXRpb24gPT09ICdIJykge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPCBsZW47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBncmlkW3Jvd11bY29sK2pdID0gaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRJRCA9ICgocm93KjExKSsoY29sK2opKTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib2FyZCA9PT0gJ3NlbGYnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkuZG9jLmFkZFNoaXBDbGFzcyhncmlkSUQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgLy92ZXJ0aWNhbFxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPCBsZW47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnajogJywgaiwgJyByb3c6ICcscm93LCcgY29sOiAnLGNvbCk7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRbcm93K2pdW2NvbF0gPSBpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZElEID0gKCgocm93K2opKjExKSsoY29sKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9hcmQgPT09ICdzZWxmJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LmRvYy5hZGRTaGlwQ2xhc3MoZ3JpZElEKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZDtcbiAgICB9XG5cbiAgICAvL3JlbmRlciBnYW1lQm9hcmRcbiAgICByZW5kZXJHYW1lQm9hcmRDb250ZW50KCkgeyAgICAgXG4gICAgICAgIGxldCBpZDtcbiAgICAgICAgZm9yKGxldCBpID0xOyBpPDExOyBpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqPTE7IGo8MTE7IGorKyl7XG4gICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkID09PSAnc2VsZicpe1xuICAgICAgICAgICAgICAgICAgICAgaWQgPSAoKGkpKiAxMSkgK2o7XG4gICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5ncmlkW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5kb2MucmVuZGVyQ2VsbENvbnRlbnQoIGlkLCBjb250ZW50KTtcbiAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgaWQgPSAoKGkpKiAxMSkgK2ogKyAxMjE7ICAgIC8vMCAtPiAxMjAgZm9yIGJvYXJkIDEgXG4gICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5ncmlkW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5kb2MucmVuZGVyQ2VsbENvbnRlbnQoIGlkLCBjb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgIC8vYm9hcmQgMSBzbyBoaWRlIGNlbGwgY29udGVudCBmb3Igbm93XG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LmRvYy5oaWRlQ2VsbENvbnRlbnQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgLy9kaXNwbGF5LmRvYy5oaWRlR3JpZENvbnRlbnQoJ2NvbXB1dGVyJyk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2luaXRpYWxpc2UgYm9hcmQgZ3JpZCB0byBlbXB0eVxuICAgIGluaXRpYWxpc2VCb2FyZEdyaWQoKSB7XG4gICAgICAgIC8vd2l0aGluIDExIHggMTEgZ3JpZCBvZiB3aGljaCAxLT4gMTAgYWN0aXZlXG4gICAgICAgIGxldCByb3dzID0gMTE7XG4gICAgICAgIGxldCBjb2xzID0gMTE7XG4gICAgICAgIC8vc2V0IGVhY2ggQUNUSVZFIGNlbGwgY2xlYXIgaS5lLiBleGNsdWRlcyBpIG9yIGogPT0gMFxuICAgICAgICBmb3IoIGxldCBpPTE7IGk8IHJvd3M7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLmdyaWRbaV0gPSBbXTtcbiAgICAgICAgICAgIHRoaXMubWlzc2VkW2ldID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGo9MTtqPCBjb2xzOyBqKyspeyAgXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkW2ldW2pdID0gMDsgXG4gICAgICAgICAgICAgICAgdGhpcy5taXNzZWRbaV1bal0gPSAwOyBcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICB9XG4gICBcbiAgICAvL2dldCBza2V0Y2hcbiAgICBnZXRTa2V0Y2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9za2V0Y2g7XG4gICAgfVxuXG4gICAgLy9jcmVhdGUgaW5kaXZpZHVhbCBzaGlwcyBmcm9tIGNvbWJpbmVkIGRhdGEgc2V0XG4gICAgY3JlYXRlU2hpcHMgKGRhdGEpe1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBsZXQgb2xkQ291bnQgPSAwO1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBsZXQgc2hpcCA9IG51bGw7IFxuICAgICAgICAgICAgc2hpcCA9IG5ldyBTaGlwKGRhdGFba2V5XSk7XG4gICAgICAgICAgICB0aGlzLl9zaGlwc1tjb3VudCsrXSA9IHNoaXA7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBzaGlwWyR7b2xkQ291bnQrK31dOiAgJHtrZXl9OiAke0pTT04uc3RyaW5naWZ5KHNoaXApfWApOyBcbiAgICAgICAgfSk7XG4gICB9XG5cbiAgIC8vY2hlY2sgc2hpcCBvcmlnaW4gZnJvbSBsb2NhbGUgZGF0YVxuICAgY2hlY2tPcmlnaW4obG9jYWxlKSB7XG4gICAgICAgIGxldCBvcmlnaW4gPSBsb2NhbGVbMF07XG4gICAgICAgIGxvY2FsZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGl0ZW1bMF07XG4gICAgICAgICAgICBsZXQgY29sID0gaXRlbVsxXTtcbiAgICAgICAgICAgIC8vZmluZCBsb3dlc3QgdmFsdWVzIFxuICAgICAgICAgICAgaWYoKHJvdyA8IG9yaWdpblswXSkgfHwgKGNvbCA8IG9yaWdpblsxXSkpIHsgb3JpZ2luID0gaXRlbTt9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3JpZ2luO1xuICAgfVxuXG4gICAvL2xvY2FsZSBpcyBhbiBhcnJheSBvZiBzaGlwIHBsYWNlbWVudHMgW1tyb3csY29sXSwuLi4uLFtyb3csY29sXV1cbiAgIGNoZWNrSG9yaXpvbnRhbChsb2NhbGUpIHtcbiAgICAgICAgbGV0IGhvcml6b250YWwgPSBmYWxzZTtcbiAgICAgICAgbGV0IG9yaWdpbiA9IGxvY2FsZVswXTtcbiAgICAgICAgbGV0IHJvdztcbiAgICAgICAgbG9jYWxlLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgIHJvdyA9IGl0ZW1bMF07XG4gICAgICAgICAgICBpZihyb3cgPT09IG9yaWdpblswXSl7aG9yaXpvbnRhbCA9IHRydWU7fWVsc2V7aG9yaXpvbnRhbCA9IGZhbHNlO30gXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaG9yaXpvbnRhbDtcbiAgIH1cblxuICAgIC8vY2hlY2sgc2hpcHMgcGxhY2VkXG4gICAgY2hlY2tCb2FyZHNTaGlwc1BsYWNlZCAoKXtcbiAgICAgICAgbGV0IGFyciA9ICB0aGlzLmdldFNoaXBzUGxhY2VkKCk7IFxuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgYXJyLm1hcChlID0+IHN1bSArPSBlKTtcbiAgICAgICAgaWYoc3VtID09PSA1KXtcbiAgICAgICAgICAgcmV0dXJuIHN1bTsgICAgICAgLy90cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgIHJldHVybiBzdW07ICAgICAgICAgLy9mYWxzZTtcbiAgICAgICAgfVxuICAgICB9XG5cbiAgICAgLy9yZWNlaXZlQXR0YWNrXG4gICAgIHJlY2VpdmVBdHRhY2sgKGlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpZDogJywgaWQpO1xuICAgICAgICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgbGV0IGFIaXQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHNoaXBTYW5rID0gZmFsc2U7XG4gICAgICAgIGxldCBncmlkSUQgPSBpZDtcbiAgICAgICAgaWYoZ3JpZElEID4gMTIwKXtncmlkSUQgPSBpZC0xMjE7fVxuICAgICAgICAvL2NvbnNvbGUubG9nKCdncmlkSUQ6ICcsZ3JpZElEKTtcbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vciggZ3JpZElELzExKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygncm93OiAnLCByb3cpO1xuICAgICAgICBjb25zdCBjb2wgPSBncmlkSUQgJSAxMTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnY29sOiAnLCBjb2wpO1xuICAgICAgICBjb25zdCBwb3MgPSBbcm93LGNvbF07XG4gICAgICAgIGNvbnNvbGUubG9nKCdwb3M6ICcscG9zKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZ3JpZFtyb3ddW2NvbF07XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb250ZW50IG9mIGdyaWRbcm93XVtjb2xdOiAnLCBjb250ZW50LCAnIHBvczogJyxwb3MpO1xuICAgICAgICBpZighKGNvbnRlbnQgPT09IDApKXtcbiAgICAgICAgICAgIHN3aXRjaCAoY29udGVudCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0MnIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5IaXRzWzBdID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdhdCBDICcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFIaXQgPSAgdGhpcy5fc2hpcHNbMF0uaGl0KHBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FIaXQ6ICcsYUhpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYUhpdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkuZG9jLnNob3dIaXQodGhpcy5fc2hpcHNbMF0saWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwU2FuayA9IHRoaXMuX3NoaXBzWzBdLmlzU3VuaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2hpcDogQyBzdW5rPzogJywgc2hpcFNhbmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzaGlwU2Fuaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IaXRzWzBdPTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LmRvYy5zaG93U3Vuayh0aGlzLl9zaGlwc1swXSxpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7Y29uc29sZS5sb2coJ0NhcnJpZXIgYWxyZWFkeSBzdW5rIScpO31cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnYicgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLkhpdHNbMV0gPT09IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYXQgYiAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhSGl0ID0gIHRoaXMuX3NoaXBzWzFdLmhpdChwb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhSGl0OiAnLGFIaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFIaXQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGl0IGF0IGlkOiAnLGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5kb2Muc2hvd0hpdCh0aGlzLl9zaGlwc1sxXSxpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTYW5rID0gdGhpcy5fc2hpcHNbMV0uaXNTdW5rKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaGlwOiBiIHN1bms/OiAnLCBzaGlwU2Fuayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNoaXBTYW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkhpdHNbMV09MTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkuZG9jLnNob3dTdW5rKHRoaXMuX3NoaXBzWzFdLGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle2NvbnNvbGUubG9nKCdCYXR0bGVzaGlwIGFscmVhZHkgc3VuayEnKTt9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2MnIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5IaXRzWzJdID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2F0IGMgJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYUhpdCA9ICB0aGlzLl9zaGlwc1syXS5oaXQocG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYUhpdDogJyxhSGl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihhSGl0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5kb2Muc2hvd0hpdCh0aGlzLl9zaGlwc1syXSxpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTYW5rID0gdGhpcy5fc2hpcHNbMl0uaXNTdW5rKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaGlwOiBjIHN1bms/OiAnLCBzaGlwU2Fuayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNoaXBTYW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkhpdHNbMl09MTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkuZG9jLnNob3dTdW5rKHRoaXMuX3NoaXBzWzJdLGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle2NvbnNvbGUubG9nKCdDcnVpc2VyIGFscmVhZHkgc3VuayEnKTt9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3MnIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5IaXRzWzNdID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdhdCBzICcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFIaXQgPSAgdGhpcy5fc2hpcHNbM10uaGl0KHBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FIaXQ6ICcsYUhpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYUhpdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkuZG9jLnNob3dIaXQodGhpcy5fc2hpcHNbM10saWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwU2FuayA9IHRoaXMuX3NoaXBzWzNdLmlzU3VuaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2hpcDogcyBzdW5rPzogJywgc2hpcFNhbmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzaGlwU2Fuaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IaXRzWzNdPTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LmRvYy5zaG93U3Vuayh0aGlzLl9zaGlwc1szXSxpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtjb25zb2xlLmxvZygnU3VibWFyaW5lIGFscmVhZHkgc3VuayEnKTt9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2QnIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5IaXRzWzRdID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdhdCBkICcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFIaXQgPSAgdGhpcy5fc2hpcHNbNF0uaGl0KHBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FIaXQ6ICcsYUhpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYUhpdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkuZG9jLnNob3dIaXQodGhpcy5fc2hpcHNbNF0saWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwU2FuayA9IHRoaXMuX3NoaXBzWzRdLmlzU3VuaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2hpcDogZCBzdW5rPzogJywgc2hpcFNhbmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzaGlwU2Fuaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IaXRzWzRdPTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LmRvYy5zaG93U3Vuayh0aGlzLl9zaGlwc1s0XSxpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtjb25zb2xlLmxvZygnRGVzdHJveWVyIGFscmVhZHkgc3VuayEnKTt9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vc3dhcCBwbGF5ZXJzIFxuICAgICAgICAgICAgLy9sb2cgbWlzc2VkIGF0dGFjayB0byBvcHBvbmVudHMgYm9hcmRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYWxsaW5nIG1pc3NlZEF0dGFjaygpIGF0IGlkICcsaWQpO1xuICAgICAgICAgICAgZ2FtZU92ZXIgPSB0aGlzLm1pc3NlZEF0dGFjayhpZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9hcmUgYWxsIHN1bmtcbiAgICAgICAgbGV0IHN1bSA9IHRoaXMuSGl0cy5yZWR1Y2UoKGEsYikgPT4gYSArIGIsIDApO1xuICAgICAgICBpZihzdW0gPT09IDUpe1xuICAgICAgICAgIC8vZmxhZyBhbGwgc2hpcHMgc3VuayBcbiAgICAgICAgICBpZih0aGlzLmJvYXJkID09PSAnc2VsZicpeyBcbiAgICAgICAgICAgIHRoaXMuc2V0Qm9hcmRTdGF0dXMoJ2xvc2UnKTtcbiAgICAgICAgICAgIHBsYXllcl8xLmJvYXJkLnNldEJvYXJkU3RhdHVzKCd3aW4nKTtcbiAgICAgICAgICAgIC8vZGlzcGxheSBnYW1lIG92ZXIgc2NyZWVuXG4gICAgICAgICAgICBkaXNwbGF5LmRvYy5zaG93R2FtZU92ZXIoJ29wcG8nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXsgXG4gICAgICAgICAgICB0aGlzLnNldEJvYXJkU3RhdHVzKCdsb3NlJyk7XG4gICAgICAgICAgICBwbGF5ZXJfMC5ib2FyZC5zZXRCb2FyZFN0YXR1cygnd2luJyk7XG4gICAgICAgICAgICAvL2Rpc3BsYXkgZ2FtZSBvdmVyIHNjcmVlblxuICAgICAgICAgICAgZGlzcGxheS5kb2Muc2hvd0dhbWVPdmVyKCdzZWxmJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgICAgLy9lbmQgZ2FtZVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnR2FtZSBPdmVyICEnKVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGhpcyBib2FyZDogJywgdGhpcy5ib2FyZCwnIHRoaXMgYm9hcmQgc3RhdHVzOiAnLHRoaXMuZ2V0Qm9hcmRTdGF0dXMoKSk7IFxuICAgICAgICAgICAgLy9leGl0IGZ1bmN0aW9uXG4gICAgICAgICAgICBnYW1lT3ZlciA9ICB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vc3dhcCBib2FyZHMgdW5kZXIgZmlyZSB1bmxlc3MgbGFzdCB3YXMgYWhpdFxuICAgICAgICBpZihhSGl0KXtcbiAgICAgICAgICAgIC8va2VlcCBhdHRhY2tpbmdcbiAgICAgICAgICAgIGFIaXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhIGhpdCBzbyBhdHRhY2tpbmcgYWdhaW4nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBY3RpdmUgcGxheWVyOicsYXR0YWNraW5nUGxheWVyKTtcbiAgICAgICAgICAgIGlmKGF0dGFja2luZ1BsYXllciA9PT0gcGxheWVyXzEgKXtcbiAgICAgICAgICAgICAgICAvL2lmIHBsYXllcl8xIGlzIGNvbXB1dGVyXG4gICAgICAgICAgICAgICAgaWYocGxheWVycy5jb21wdXRlcil7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnYiA4MDAgY2FsbGluZyBjb21wdXRlciBhdHRhY2sgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU92ZXIgPSBjb21wQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhd2FpdGluZyBodW1hbiBvcHBvbmVudHMgYXR0YWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhd2FpdGluZyBzZWxmIHRvIGF0dGFjaycpO1xuICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvL2NoYW5nZSBhdHRhY2tlclxuICAgICAgICAgICAgaWYodGhpcy5ib2FyZCA9PT0gJ3NlbGYnKXsgXG4gICAgICAgICAgICAgICAgLy9tb25pdG9yaW5nIHNlbGYgdW5kZXIgZmlyZVxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdHVzID09PSAndW5kZXJGaXJlJyl7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICdhdHRhY2snO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJfMS5nYW1lQm9hcmQuc3RhdHVzID0gJ3VuZGVyRmlyZSc7XG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVBsYXllcihwbGF5ZXJfMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgLy9tdXN0IGJlIG1vbml0b3JpbmcgcGxheWVyXzEgdW5kZXIgZmlyZVxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdHVzID09PSAndW5kZXJGaXJlJyl7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICdhdHRhY2snO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJfMC5nYW1lQm9hcmQuc3RhdHVzID0gJ3VuZGVyRmlyZSc7XG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVBsYXllcihwbGF5ZXJfMSk7XG4gICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3BsYXllcnMuY29tcHV0ZXI6ICcsIHBsYXllcnMuY29tcHV0ZXIpO1xuICAgICAvLyAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBY3RpdmUgcGxheWVyOicsYXR0YWNraW5nUGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiBwbGF5ZXJfMSBpcyBjb21wdXRlclxuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXJzLmNvbXB1dGVyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnQiA4MjggY2FsbGluZyBjb21wdXRlciBhdHRhY2sgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPdmVyID0gY29tcEF0dGFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lT3ZlcjtcbiAgICAgfVxuXG4gICAgIC8vbG9nIG1pc3NlZEF0dGFjayAoaWQgKSB3aGVyZSBpZCBpcyB0aGUgYXR0YWNrZWQgZ3JpZCByb3cgY29sIGJ1dCBuZWVkIHRvIGRpc3BsYXkgb3RoZXIgYm9hcmQgc28gYWRqdXN0IGlkXG4gICAgbWlzc2VkQXR0YWNrIChpZCl7IFxuICAgICAgICAgICAgbGV0IHJvdztcbiAgICAgICAgICAgIGxldCBjb2w7XG4gICAgICAgICAgICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGlkID0gTnVtYmVyKGlkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdCBtaXNzZWQgYXR0YWNrJyk7XG4gICAgXG4gICAgICAgICAgICBpZihpZCA+IDEyMCl7XG4gICAgICAgICAgICAgICAgaWQgPSBpZC0xMjE7XG4gICAgICAgICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihpZC8xMSk7XG4gICAgICAgICAgICAgICAgY29sID0gaWQgJSAxMTtcbiAgICAgICAgICAgICAgICBpZihwbGF5ZXJfMS5nYW1lQm9hcmQubWlzc2VkW3Jvd11bY29sXT09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyXzEuZ2FtZUJvYXJkLm1pc3NlZFtyb3ddW2NvbF09ICdYJztcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5kb2Muc2hvd01pc3NlZChpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKGlkLzExKTtcbiAgICAgICAgICAgICAgICBjb2wgPSBpZCAlIDExO1xuICAgICAgICAgICAgICAgIGlkID0gaWQgKyAxMjE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsXzAgbWlzc2VkW3JdW2NdOiAnLHBsYXllcl8wLmdhbWVCb2FyZC5taXNzZWRbcm93XVtjb2xdKTtcbiAgICAgICAgICAgICAgICBpZihwbGF5ZXJfMC5nYW1lQm9hcmQubWlzc2VkW3Jvd11bY29sXT09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyXzAuZ2FtZUJvYXJkLm1pc3NlZFtyb3ddW2NvbF09ICdYJztcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5kb2Muc2hvd01pc3NlZChpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2F0dGFja2luZyBwbGF5ZXI6ICcsYXR0YWNraW5nUGxheWVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmJvYXJkJywgdGhpcy5ib2FyZCk7XG4gICAgICAgICAgICAvL2NoYW5nZSBhdHRhY2tlclxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICBpZih0aGlzLmJvYXJkID09PSAnc2VsZicpeyBcbiAgICAgICAgICAgICAgICAvL21vbml0b3Jpbmcgc2VsZiB1bmRlciBmaXJlXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0dXMgPT09ICd1bmRlckZpcmUnKXsgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ2F0dGFjayc7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllcl8xLmdhbWVCb2FyZC5zdGF0dXMgPSAndW5kZXJGaXJlJztcbiAgICAgICAgICAgLy8gICAgICAgICBzZXRBY3RpdmVQbGF5ZXIocGxheWVyXzApO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdwbGF5ZXJzLnNlbGYgYXR0YWNraW5nOiAnLCBwbGF5ZXJzLnNlbGYpO1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdwbGF5ZXJzIGFycmF5OiAnLCBwbGF5ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYXdhaXRpbmcgcGxheWVyXzAgYXR0YWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkuZG9jLm1vbml0b3JCb2FyZChwbGF5ZXJfMS5nYW1lQm9hcmQpOyAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAvL211c3QgYmUgbW9uaXRvcmluZyBwbGF5ZXJfMSB1bmRlciBmaXJlXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0dXMgPT09ICd1bmRlckZpcmUnKXsgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ2F0dGFjayc7XG4gICAgICAgICAgIC8vICAgICAgICAgc2V0QWN0aXZlUGxheWVyKHBsYXllcl8xKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyXzAuZ2FtZUJvYXJkLnN0YXR1cyA9ICd1bmRlckZpcmUnO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyXzEgYXR0YWNraW5nOiAnLCBwbGF5ZXJzLmNvbXB1dGVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYocGxheWVycy5jb21wdXRlcil7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ0IgODgyIGNhbGxpbmcgY29tcHV0ZXIgYXR0YWNrIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lT3ZlciA9IGNvbXBBdHRhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdhbWVPdmVyKXtjb25zb2xlLmxvZygncmV0dXJuaW5nIGdhbWVPdmVyOiAnLGdhbWVPdmVyKTtyZXR1cm4gdHJ1ZTt9XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F3YWl0aW5nIGh1bWFuIG9wcG9uZW50cyBhdHRhY2snKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vZ2FtZSBub3Qgb3ZlclxuICAgICB9XG5cbiAgICAgLy9yZWNlaXZlVEVTVFxuICAgICByZWNlaXZlVEVTVChpZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhdCByZWNlaXZlVEVTVCByZWNlaXZlIGF0dGFjayBpZDogJyxpZCk7XG4gICAgIH1cblxuICAgICAvKlxuICAgICBhZGRTaGlwc0NsYXNzICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZGluZyBzaGlwcyBjbGFzcycpO1xuICAgICAgICBsZXQgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgbGV0IGkgPSAxO1xuICAgICAgICBsZXQgaiA9IDE7XG4gICAgICAgIGxldCBlO1xuICAgICAgICBsZXQgYztcbiAgICAgICAgXG4gICAgICAgIGZvcihpPTE7aTwxMTtpKyspe1xuICAgICAgICAgICAgZm9yKGo9MTtqPDExO2orKyl7XG4gICAgICAgICAgICAgICBlID0gZ3JpZFtpXVtqXTtcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZihlKSwgZS52YWx1ZU9mKCkpO1xuICAgICAgICAgICAgICAgZSA9IGUudmFsdWVPZigpO1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dyaWQgY2VsbCBpIGogZTogJywgaSwgJyAnLCBqLCAnICcsIGUpLCAnY2hhciBjb2RlJywgZS5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDXCIudmFsdWVPZigpLCcgJyxcIkNcIi5jaGFyQ29kZUF0KDApICk7XG4gICAgICAgICAgICAgICBpZiggKGUgPT0gXCJDXCIpfHwoZSA9PT0gXCJDXCIgKSB8fCAoZSA9PT0gXCJiXCIpICB8fChlID09PSBcImNcIilcbiAgICAgICAgICAgICAgICAgfHwgKGUgPT09IFwic1wiICkgfHwgKGUgPT09IFwiZFwiKSApe1xuICAgICAgICAgICAgICAgICAgICBpZCA9IChpKjExKStqO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaWQ6ICcsaWQpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LmRvYy5hZGRTaGlwQ2xhc3MoaWQpO1xuICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZhbHNlIGU6ICcsZSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJDXCIuY2hhckNvZGVBdCgwKSApO1xuICAgICAgICBjb25zb2xlLmxvZyhcImJcIi5jaGFyQ29kZUF0KDApICk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY1wiLmNoYXJDb2RlQXQoMCkgKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzXCIuY2hhckNvZGVBdCgwKSApO1xuICAgICAgICBjb25zb2xlLmxvZyhcImRcIi5jaGFyQ29kZUF0KDApICk7XG4gICAgIH1cbiAgICAgICAgKi9cblxuICAgICBhZGRTaGlwc0NsYXNzIChwbGF5ZXIpIHtcbiAgICAgICAgLypcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTwgNTsgaSsrKXtcbiAgICAgICAgICBjb25zdCAgc2hpcCA9IHBsYXllci5nYW1lQm9hcmQuc2hpcHNbaV07XG4gICAgICAgICAgY29uc3Qgc2hpcExvY2FsZSA9IHNoaXAuZ2V0TG9jYWxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgICAqL1xuICAgICAgICAgdGhpcy5zZXRCb2FyZEdyaWQodGhpcy5fc2hpcHMpO1xuICAgICB9XG5cbn1cblxuZXhwb3J0IHtHYW1lQm9hcmR9IiwiLy9pbmRleC5qc1xuLypcbiAgICBkaXNwbGF5IHN0YXJ0IHNjcmVlbiBhd2FpdCBpbnB1dFxuICAgIGFjY2VwdCBwbGF5ZXIxIGRhdGEgaW5wdXRcbiAgICBhY2NlcHQgcGxheWVyMiBkYXRhIGlucHV0IGlmIG5vdCBjb21wdXRlclxuICAgIHN0YXJ0IHBsYXlcbiAgICBhY2NlcHQgcGxheWVyMSBwbGF5XG4gICAgc3dhcCBzY3JlZW5zIHVubGVzcyBjb21wdXRlciBwbGF5XG4gICAgaWYgaHVtYW4gYWNjZXB0IHBsYXllcjIgcGxheVxuICAgIHJlcG9ydCByZXN1bHQgb2YgcGxheVxuICAgIGNoZWNrIGdhbWUgb3ZlciBpZiBzbyBkaXNwbGF5IGdhbWUgb3ZlciBzY3JlZW4gdGhlbiBiYWNrIHRvIFN0YXJ0IHNjcmVlblxuICAgIGVsc2UgcmVwZWF0IGF0IGFjY2VwdCBwbGF5ZXIgMSBwbGF5XG4qL1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQge0Rpc3BsYXl9IGZyb20gXCIuL2Rpc3BsYXkuanNcIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi9wbGF5ZXIuanNcIjtcbmltcG9ydCB7R2FtZUJvYXJkfSBmcm9tIFwiLi9nYW1lQm9hcmQuanNcIjtcbmltcG9ydCB7XG4gICAgYnRuTGlzdGVuZXIsXG4gICAgaHVtYW5fYnRuTGlzdGVuZXJPYmosIGNvbXBfYnRuTGlzdGVuZXJPYmosXG4gICAgcGxheWVyMF9yYWRpb0J0bkxpc3RlbmVyT2JqLCBwbGF5ZXIxX3JhZGlvQnRuTGlzdGVuZXJPYmosXG4gICAgY29uZmlybTBfYnRuTGlzdGVuZXJPYmosIGNvbmZpcm0xX2J0bkxpc3RlbmVyT2JqLCBcbiAgICBwbGFjZVNoaXBzTWV0aG9kIH0gZnJvbSAnLi9saXN0ZW5lcnMuanMnO1xuXG4vL2V4cG9ydCBjb25zdCBkaXNwbGF5ID0gbmV3IERpc3BsYXkodGhpcyk7XG5jb25zdCBkaXNwbGF5ID0gbmV3IERpc3BsYXkodGhpcyk7XG4vL3RoZSBzZXQgb2YgcGxheWVyIG9wdGlvbnNcbmxldCBwbGF5ZXJzICA9IHsnc2VsZic6ZmFsc2UsJ2h1bWFuJzpmYWxzZSwgJ2NvbXB1dGVyJzpmYWxzZX07IC8vZWl0aGVyIGh1bWFuIG9yIGNvbXB1dGVyIHNldCB0cnVlIGZyb20gc3BsYXNoIHNjcmVlblxuIFxubGV0IHBsYXllcl8wID0ge307IC8vc2VsZlxubGV0IHBsYXllcl8xID0ge307IC8vb3Bwb25lbnQgXG5sZXQgYXR0YWNraW5nUGxheWVyID0gbnVsbDsgICAgICAgICAgICAgICAgICAgLy9zdGFydHMgd2l0aCBzZWxmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vL3RoZSBzZXQgb2YgYm9hcmRzXG5jb25zdCBib2FyZHMgPSB7J215Qm9hcmQnOjAsJ3RoZWlyQm9hcmQnOjF9O1xudmFyIHBsYXllck5vdFNlbGVjdGVkID0gdHJ1ZTtcblxuLy9TdGFydCBzY3JlZW4gXG5cbi8vQ29udHJvbCBMb2dpYyA8LS0tLS0tLVxuLy9kaXNwbGF5IHNjcmVlbiAgICAgICB8ICAtLS0+IGluZGV4Lmh0bWxcbi8vc2V0IGxpc3RlbmVycyAgICAgICAgfFxuLy9zZXQgdGhlIHN0YXJ0IHNjcmVlbiBidXR0b24gbGlzdGVuZXJzXG4vL3BsYXkgaHVtYW5cbmNvbnN0IGh1bWFuID0gYnRuTGlzdGVuZXIoaHVtYW5fYnRuTGlzdGVuZXJPYmopOyAgXG4vL3BsYXkgY29tcHV0ZXJcbmNvbnN0IGNvbXB1dGVyID0gYnRuTGlzdGVuZXIoY29tcF9idG5MaXN0ZW5lck9iaik7XG4vL2FjdGlvbiBsaXN0ZW5lcnMgICAgIHwgIC0tLT4gbGlzdGVuZXJzLmpzXG4vL3VwZGF0ZSAtLS0tLS0tLS0tLS0tLS1cblxuLy9hd2FpdCBvcHBvbmVudCBzZWxlY3RlZFxubGV0IG9wcG9uZW50U2VsZWN0ZWQgPSBmYWxzZTtcbmF3YWl0UGxheWVyU2VsZWN0ZWQoKTtcblxuLy9zaGlwIGRhdGEgZW50cnkgc2NyZWVuXG4vL0NvbnRyb2wgTG9naWMgPC0tLS0tLS1cbi8vZGlzcGxheSBzY3JlZW4gICAgICAgfFxuLy9zZXQgbGlzdGVuZXJzICAgICAgICB8XG4vL3NldCB0aGUgcGxhY2Ugc2hpcHMgYnRuIGxpc3RlbmVyc1xuLy9zZXQgU2hpcHMgc2VsZlxuY29uc3Qgc2V0U2hpcHMwID0gYnRuTGlzdGVuZXIocGxheWVyMF9yYWRpb0J0bkxpc3RlbmVyT2JqKTtcbmNvbnN0IGNvbmZpcm0wID0gIGJ0bkxpc3RlbmVyKGNvbmZpcm0wX2J0bkxpc3RlbmVyT2JqKTtcbi8vc2V0U2hpcHMgaHVtYW5cbmNvbnN0IHNldFNoaXBzMSA9IGJ0bkxpc3RlbmVyKHBsYXllcjFfcmFkaW9CdG5MaXN0ZW5lck9iaiApO1xuY29uc3QgY29uZmlybTEgPSAgYnRuTGlzdGVuZXIoY29uZmlybTFfYnRuTGlzdGVuZXJPYmopO1xuLy9hY3Rpb24gbGlzdGVuZXJzICAgICAgfCAgLS0tPiBsaXN0ZW5lcnMuanMgICAgfFxuLy91cGRhdGUgLS0tLS0tLS0tLS0tLS0tXG5cbi8vZ2FtZSBwbGF5IHNjcmVlblxuLy9Db250cm9sIExvZ2ljIDwtLS0tLS0tXG4vL2Rpc3BsYXkgc2NyZWVuICAgICAgIHwgIC0tLT4gaW5kZXguaHRtbFxuLy9zZXQgbGlzdGVuZXJzICAgICAgICB8XG4vL2FjdGlvbiBsaXN0ZW5lcnMgICAgIHxcbi8vdXBkYXRlIC0tLS0tLS0tLS0tLS0tLVxuXG4vL2dhbWUgb3ZlciBzY3JlZW5cbi8vQ29udHJvbCBMb2dpYyA8LS0tLS0tLVxuLy9kaXNwbGF5IHNjcmVlbiAgICAgICB8XG4vL3NldCBsaXN0ZW5lcnMgICAgICAgIHxcbi8vYWN0aW9uIGxpc3RlbmVycyAgICAgfFxuLy91cGRhdGUgLS0tLS0tLS0tLS0tLS0tXG5cblxuLy9mdW5jdGlvbnNcbmZ1bmN0aW9uIGF3YWl0UGxheWVyU2VsZWN0ZWQoKXtcbiAgaWYgKHBsYXllck5vdFNlbGVjdGVkKXtcbiAgICAgIGNvbnNvbGUubG9nKCd3YWl0aW5nIGZvciBwbGF5ZXIgc2VsZWN0aW9uJyk7XG4gICAgICBzZXRUaW1lb3V0KGF3YWl0UGxheWVyU2VsZWN0ZWQsIDEwMCk7XG4gIH1cbn1cblxuLy9jcmVhdGUgYm90aCBwbGF5ZXJzIG9uY2Ugb3Bwb25lbnQgc2VsZWN0ZWRcbmZ1bmN0aW9uIHBsYXllclNlbGVjdGVkKCl7XG4gIHBsYXllck5vdFNlbGVjdGVkID0gZmFsc2U7XG4gIGlmKHBsYXllcnMuaHVtYW4pe1xuICAgIC8vY3JlYXRlIGh1bWFuIG9wcG9uZW50XG4gICAgcGxheWVyXzEgPSBuZXcgUGxheWVyKCdodW1hbicpO1xuICAgIGNvbnNvbGUubG9nKCdwbGF5ZXI6ICcsIHBsYXllcl8xKTtcbiAgfVxuICBpZihwbGF5ZXJzLmNvbXB1dGVyKXtcbiAgICAvL2NyZWF0ZSBjb21wdXRlciBvcHBvbmVudFxuICAgIHBsYXllcl8xID0gbmV3IFBsYXllcignY29tcHV0ZXInKTtcbiAgICBjb25zb2xlLmxvZygncGxheWVyOiAnLCBwbGF5ZXJfMSk7XG4gIH1cbiAgLy9jcmVhdGUgc2VsZiBwbGF5ZXIgMFxuICBwbGF5ZXJfMCA9IG5ldyBQbGF5ZXIoJ3NlbGYnKTtcbiAgY29uc29sZS5sb2coJ3BsYXllcjogJywgcGxheWVyXzAsICcgZ2FtZSBib2FyZDogJywgcGxheWVyXzAuZ2FtZUJvYXJkKTtcbiAgcGxheWVycy5zZWxmID0gdHJ1ZTtcbiAgc2V0QWN0aXZlUGxheWVyKCdzZWxmJyk7XG4gIC8vc2V0IHVwIGdyaWQgYW5kIHBsYWNlIHNoaXBzIHBsYXllcl8wIGZyb20gYnV0dG9uIGxpc3RlbmVyXG4gIC8qIG1vdmVkIHRvIGJ0biBsaXN0ZW5lciAqL1xuICBwbGF5ZXJfMC5nYW1lQm9hcmQuaW5pdGlhbGlzZUJvYXJkR3JpZCgpO1xuICBkaXNwbGF5LmRvYy5ncmlkU2V0VXAocGxheWVyXzAuZ2FtZUJvYXJkKTtcbiAgcGxheWVyXzAuZ2FtZUJvYXJkLnJlbmRlckdhbWVCb2FyZENvbnRlbnQoKTtcbiAgZGlzcGxheS5kb2MubW9uaXRvclNoaXBQbGFjZW1lbnQocGxheWVyXzApO1xuIFxuICAvL3BsYXllciAxIHNldCB1cCBmcm9tIGJ1dHRvbiBsaXN0ZW5lclxuICAvL3NldCBwbGF5ZXJfMCBib2FyZCBzdGF0dXMgYXR0YWNrIHZpYSBidG4gcGxheWVyXzAgY29uZmlybSBsaXN0ZW5lclxuICAvL3NldCBwbGF5ZXJfMSBib2FyZCBzdGF0dXMgdW5kZXJGaXJlIHZpYSBidG4gcGxheWVyXzAgY29uZmlybSBsaXN0ZW5lclxuICBsZXQgY3VycmVudEJvYXJkID0gcGxheWVyXzAuZ2FtZUJvYXJkO1xuICBsZXQgb3Bwb25lbnRCb2FyZCA9IHBsYXllcl8xLmdhbWVCb2FyZDtcbiAgLy9tb25pdG9yIGJvdGggYm9hcmRzIGZvciBtb3VzZSBkb3duXG4gIGRpc3BsYXkuZG9jLm1vbml0b3JCb2FyZChjdXJyZW50Qm9hcmQpO1xuICBkaXNwbGF5LmRvYy5tb25pdG9yQm9hcmQob3Bwb25lbnRCb2FyZCk7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZVBsYXllcihwbGF5ZXIpIHtcbiAgY29uc29sZS5sb2coJ3NldCBhY3RpdmUgYXR0YWNrZXI6ICcscGxheWVyKTtcbiAgaWYoIShwbGF5ZXIgPT09IG51bGwgKSkge1xuICAgIGNvbnNvbGUubG9nKCdhdHRhY2tpbmcgcGxheWVyIHJlc2V0IHRvOiAnLHBsYXllcik7XG4gICAgYXR0YWNraW5nUGxheWVyID0gcGxheWVyO1xuICAgIGlmKHBsYXllci5uYW1lID09PSAnc2VsZicpe1xuICAgICAgY29uc29sZS5sb2coJ3BsYXllciBpczogJywgcGxheWVyLm5hbWUpO1xuICAgICAgY29uc29sZS5sb2coJ25vdyBtb25pdG9yIHBsYXllcl8xIGdhbWUgYm9hcmQnKTtcbiAgICAgIC8vc2V0IHBsYXllcl8xIGdhbWVib2FyZCBzdGF0dXMgdG8gdW5kZXJGaXJlXG4gICAgICBwbGF5ZXJfMS5nYW1lQm9hcmQuc3RhdHVzPSd1bmRlckZpcmUnO1xuIC8vICAgICBkaXNwbGF5LmRvYy5tb25pdG9yQm9hcmQocGxheWVyXzEuZ2FtZUJvYXJkKTtcbiAgICB9XG4gICAgaWYocGxheWVyLm5hbWUgPT09ICdodW1hbicpe1xuICAgICAgY29uc29sZS5sb2coJ3BsYXllciBpczogJywgcGxheWVyLm5hbWUpO1xuICAgICAgY29uc29sZS5sb2coJ25vdyBtb25pdG9yIHBsYXllcl8wIGdhbWUgYm9hcmQnKTtcbiAgICAgIC8vc2V0IHBsYXllcl8wIGdhbWVib2FyZCBzdGF0dXMgdG8gdW5kZXJGaXJlXG4gICAgICBwbGF5ZXJfMC5nYW1lQm9hcmQuc3RhdHVzPSd1bmRlckZpcmUnO1xuIC8vICAgICBkaXNwbGF5LmRvYy5tb25pdG9yQm9hcmQocGxheWVyXzAuZ2FtZUJvYXJkKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtkaXNwbGF5LCBwbGF5ZXJzLCBwbGF5ZXJfMCwgcGxheWVyXzEsIGF0dGFja2luZ1BsYXllciwgcGxheWVyU2VsZWN0ZWQsIHNldEFjdGl2ZVBsYXllcn07XG4iLCIvL2xpc3RlbmVycy5qc1xuXG4vL2ltcG9ydHNcbmltcG9ydCB7UGxheWVyfSBmcm9tICcuL3BsYXllci5qcydcbmltcG9ydCB7ZGlzcGxheSwgcGxheWVycywgcGxheWVyXzAsIHBsYXllcl8xLCBwbGF5ZXJTZWxlY3RlZH0gZnJvbSAnLi9pbmRleC5qcydcblxuLy9nbG9iYWxzXG5sZXQgcGxhY2VTaGlwc01ldGhvZCA9IG51bGw7XG5cbi8vZ2VuZXJpYyBidXR0b24gbGlzdGVuZXJcbmNvbnN0IGJ0bkxpc3RlbmVyID0gKGJ0bl9vYmopID0+IHtcbiAgICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnRuX29iai5zZWxlY3Rvcik7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ0bl9vYmouYl9mdW5jdGlvbik7XG4gICAgY29uc29sZS5sb2coYGNvbmZpcm0gJHtidG5fb2JqLnNlbGVjdG9yfTogY3JlYXRlZGApOyBcbn1cblxuLy9zdGFydCBzY3JlZW4gIGNvbXB1dGVyIGJ1dHRvbiBvbkNsaWNrIGxpc3RlbmVyIG9ialxuY29uc3QgY29tcF9idG5MaXN0ZW5lck9iaiA9IHtcbiAgICAnc2VsZWN0b3InIDogJy5idG4tcmlnaHQnLFxuICAgICdiX2Z1bmN0aW9uJyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICAgICAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcbiAgICAgICAgZS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgLy9oaWRlIHRoZSBzdGFydHNjcmVlblxuICAgICAgICBlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAvL3Nob3cgdGhlIGNvbnRhaW5lciBjb250ZW50XG4gICAgICAgIGNvbnRhaW5lckRpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgLy9jb25maXJtIHBsYXllciBzZWxlY3RlZFxuICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgcGxheWVyMTogaXMgY29tcHV0ZXInKTtcbiAgICAgICAgcGxheWVycy5jb21wdXRlciA9IHRydWU7XG4gICAgICAgIHBsYXllcnMuaHVtYW4gPSBmYWxzZTtcbiAgICAgICAgLy9wbGF5ZXIgaW5zdGFudGlhdGVkIGF0IGluZGV4LmpzXG4gICAgICAgIC8vZmxhZyBjYW4gc3RvcCB3YWl0aW5nIGZvciBwbGF5ZXIgc2VsZWN0aW9uXG4gICAgICAgIHBsYXllclNlbGVjdGVkKCk7XG4gICAgICAgIHBsYXllcl8xLmdhbWVCb2FyZC5zdGF0dXMgPSAncmFuZG9tJztcbiAgICAgICAgLy9zZXQgdGhlIHBsYXllciBzaGlwc0RhdGFcbiAgICAgICAgcGxheWVyXzEuc2V0U2hpcERhdGEocGxheWVyXzEuZ2FtZUJvYXJkLnJhbmRvbWlzZVNoaXBzKCkpO1xuICAgICAgICBwbGF5ZXJfMS5nYW1lQm9hcmQuaW5pdGlhbGlzZUJvYXJkR3JpZCgpO1xuICAgICAgICAvL2Rpc3BsYXkgdGhlIGVtcHR5IGdyaWRcbiAgICAgICAgZGlzcGxheS5kb2MuZ3JpZFNldFVwKHBsYXllcl8xLmdhbWVCb2FyZCk7XG4gICAgICAgIC8vdXBkYXRlIHRoZSBib2FyZCBncmlkIGZyb20gdGhlIHNoaXBzRGF0YVxuICAgICAgICBwbGF5ZXJfMS5ncmlkVXBkYXRlKCk7XG4gICAgICAgIGxldCBzZXREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXJTZXQnKTtcbiAgICAgICAgc2V0RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAvL3NldCBnYW1lQm9hcmQgc3RhdHVzIHRvIGV2ZW50dWFsbHkgYmUgdW5kZXIgYXR0YWNrIGFzc3VtZXMgcGxheWVyIHNlbGYgc3RhcnRzXG4gICAgICAgIHBsYXllcl8xLmdhbWVCb2FyZC5zdGF0dXMgPSAndW5kZXJGaXJlJztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbn1cblxuLy9zdGFydCBzY3JlZW4gIGh1bWFuIGJ1dHRvbiBvbkNsaWNrIGxpc3RlbmVyIG9ialxuY29uc3QgaHVtYW5fYnRuTGlzdGVuZXJPYmogPSB7XG4gICAgJ3NlbGVjdG9yJyA6ICcuYnRuLWxlZnQnLFxuICAgICdiX2Z1bmN0aW9uJyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICAgICAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcbiAgICAgICAgZS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgLy9oaWRlIHRoZSBzdGFydHNjcmVlblxuICAgICAgICBlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAvL3Nob3cgdGhlIGNvbnRhaW5lciBjb250ZW50XG4gICAgICAgIGNvbnRhaW5lckRpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgLy9jb25maXJtIGh1bWFuIHBsYXllciBzZWxlY3RlZFxuICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgcGxheWVyMTogaXMgaHVtYW4nKTtcbiAgICAgICAgcGxheWVycy5odW1hbiA9IHRydWU7XG4gICAgICAgIHBsYXllcnMuY29tcHV0ZXIgPSBmYWxzZTtcbiAgICAgICAgLy9wbGF5ZXIgaW5zdGFudGlhdGVkIGF0IGluZGV4LmpzXG4gICAgICAgIC8vZmxhZyBjYW4gc3RvcCB3YWl0aW5nIGZvciBwbGF5ZXIgc2VsZWN0aW9uXG4gICAgICAgIHBsYXllclNlbGVjdGVkKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG59XG5cbi8vcGxheWVyMCByYWRpbyBidXR0b24gbGlzdGVuZXIgb2JqXG5jb25zdCBwbGF5ZXIwX3JhZGlvQnRuTGlzdGVuZXJPYmogPSB7XG4gICAgJ3NlbGVjdG9yJyA6ICcuc2V0U2hpcHMwJyxcbiAgICAnYl9mdW5jdGlvbicgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybTAnKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbn1cblxuLy9wbGF5ZXIxIHJhZGlvIGJ1dHRvbiBsaXN0ZW5lciBvYmpcbmNvbnN0IHBsYXllcjFfcmFkaW9CdG5MaXN0ZW5lck9iaiA9IHtcbiAgICAnc2VsZWN0b3InIDogJy5zZXRTaGlwczEnLFxuICAgICdiX2Z1bmN0aW9uJyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtMScpO1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxufVxuXG4vL2NvbmZpcm0gZm9yIHBsYXllcjBcbmNvbnN0IGNvbmZpcm0wX2J0bkxpc3RlbmVyT2JqID0ge1xuICAgICdzZWxlY3RvcicgOiAnLnJhZGNvbmZpcm0wJyxcbiAgICAnYl9mdW5jdGlvbicgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBwbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5MCcpO1xuICAgICAgICBwbGFjZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgbGV0IHBsYXllclN0ciA9ICcwJztcbiAgICAgICAgcGxhY2VTaGlwc01ldGhvZCA9IGNvbmZpcm1TZXRTaGlwc01ldGhvZChwbGF5ZXJTdHIpO1xuICAgICAgICAvL3Nob3cgdGhlIHBsYWNlIHNoaXBzIGRpdiBmb3IgcGxheWVyMFxuICAgICAgICBpZihwbGFjZVNoaXBzTWV0aG9kID09PSAncGxhY2UnKXtcbiAgICAgICAgICAgIGxldCBwaWNrU2hpcHMwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5waWNrU2hpcHMwXCIpO1xuICAgICAgICAgICAgcGlja1NoaXBzMC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHBsYXllcl8wLmdhbWVCb2FyZC5zdGF0dXMgPSAncGxhY2UnO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHBsYXllcl8wLmdhbWVCb2FyZC5zdGF0dXMgPSAncmFuZG9tJztcbiAgICAgICAgICAgIC8vc2V0IHRoZSBwbGF5ZXIgc2hpcHNEYXRhXG4gICAgICAgICAgICBwbGF5ZXJfMC5zZXRTaGlwRGF0YShwbGF5ZXJfMC5nYW1lQm9hcmQucmFuZG9taXNlU2hpcHMoKSk7XG4gICAgICAgICAgICBwbGF5ZXJfMC5nYW1lQm9hcmQuaW5pdGlhbGlzZUJvYXJkR3JpZCgpO1xuICAgICAgICAgICAgLy91cGRhdGUgdGhlIGJvYXJkIGdyaWQgZnJvbSB0aGUgc2hpcHNEYXRhXG4gICAgICAgICAgICBwbGF5ZXJfMC5ncmlkVXBkYXRlKCk7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2s9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRhY2swJyk7XG4gICAgICAgICAgICBhdHRhY2suY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAvL2Rpc3BsYXkgdGhlIHBsYXllcl8xIGJvYXJkIGZvciBzZXQgIHVwIGlmICdodW1hbidcbiAgICAgICAgICAgIGlmKHBsYXllcl8xLm5hbWUgPT09ICdodW1hbicpe1xuICAgICAgICAgICAgICAgIGxldCBzaGlwczEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheTEnKTsgXG4gICAgICAgICAgICAgICAgc2hpcHMxLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gIyMjIyMjIyMjIyMjIyMjICAgIE1PVkUgVE8gQUxMIFNISVBTIFBMQUNFRCBCVVRUT04gPz8gIGFzIHdlbGwgIyMjIyMjIyMjIyMjIyMjI1xuICAgICAgICAgICAgcGxheWVyXzAuZ2FtZUJvYXJkLnN0YXR1cyA9ICdhdHRhY2snO1xuICAgICAgICAgICAgcGxheWVyXzEuZ2FtZUJvYXJkLnN0YXR1cyA9ICd1bmRlckZpcmUnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vL2NvbmZpcm0gZm9yIHBsYXllcjFcbmNvbnN0IGNvbmZpcm0xX2J0bkxpc3RlbmVyT2JqID0ge1xuICAgICdzZWxlY3RvcicgOiAnLnJhZGNvbmZpcm0xJyxcbiAgICAnYl9mdW5jdGlvbicgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBwbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5MScpO1xuICAgICAgICBwbGFjZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgbGV0IHBsYXllclN0ciA9ICcxJztcbiAgICAgICAgcGxhY2VTaGlwc01ldGhvZCA9IGNvbmZpcm1TZXRTaGlwc01ldGhvZChwbGF5ZXJTdHIpO1xuICAgICAgICAvL3Nob3cgdGhlIHBsYWNlIHNoaXBzIGRpdiBmb3IgcGxheWVyMVxuICAgICAgICBpZihwbGFjZVNoaXBzTWV0aG9kID09PSAncGxhY2UnKXtcbiAgICAgICAgICAgIGxldCBwaWNrU2hpcHMxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5waWNrU2hpcHMxXCIpO1xuICAgICAgICAgICAgcGlja1NoaXBzMS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHBsYXllcl8xLmdhbWVCb2FyZC5zdGF0dXMgPSAncGxhY2UnO1xuICAgICAgICAgICAgLy9kaXNwbGF5IHRoZSBwbGF5ZXJfMSBib2FyZCBmb3Igc2V0ICB1cCBpZiAnaHVtYW4nXG4gICAgICAgICAgICBpZihwbGF5ZXJfMS5uYW1lID09PSAnaHVtYW4nKXtcbiAgICAgICAgICAgICAgICBwbGF5ZXJfMS5nYW1lQm9hcmQuaW5pdGlhbGlzZUJvYXJkR3JpZCgpO1xuICAgICAgICAgICAgICAgIC8vZGlzcGxheSB0aGUgZW1wdHkgZ3JpZFxuICAgICAgICAgICAgICAgIGRpc3BsYXkuZG9jLmdyaWRTZXRVcChwbGF5ZXJfMS5nYW1lQm9hcmQpO1xuICAgICAgICAgICAgICAgIHBsYXllcl8xLmdhbWVCb2FyZC5yZW5kZXJHYW1lQm9hcmRDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheS5kb2MubW9uaXRvclNoaXBQbGFjZW1lbnQocGxheWVyXzEpO1xuICAgICAgICAgICAgICAgIGxldCBzaGlwczEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGlja1NoaXBzMScpOyBcbiAgICAgICAgICAgICAgICBzaGlwczEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcGxheWVyXzEuZ2FtZUJvYXJkLnN0YXR1cyA9ICdyYW5kb20nO1xuICAgICAgICAgICAgLy9zZXQgdGhlIHBsYXllciBzaGlwc0RhdGFcbiAgICAgICAgICAgIHBsYXllcl8xLnNldFNoaXBEYXRhKHBsYXllcl8xLmdhbWVCb2FyZC5yYW5kb21pc2VTaGlwcygpKTtcbiAgICAgICAgICAgIHBsYXllcl8xLmdhbWVCb2FyZC5pbml0aWFsaXNlQm9hcmRHcmlkKCk7XG4gICAgICAgICAgICBkaXNwbGF5LmRvYy5ncmlkU2V0VXAocGxheWVyXzEuZ2FtZUJvYXJkKTsgICAgICAvLyMjIyNcbiAgICAgICAgICAgIC8vdXBkYXRlIHRoZSBib2FyZCBncmlkIGZyb20gdGhlIHNoaXBzRGF0YVxuICAgICAgICAgICAgcGxheWVyXzEuZ3JpZFVwZGF0ZSgpOyAgIFxuICAgICAgICAgICAgbGV0IHNldERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1hblNldCcpO1xuICAgICAgICAgICAgc2V0RGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICAvLyAjIyMjIyMjIyMjIyMjIyMgICAgTU9WRSBUTyBBTEwgU0hJUFMgUExBQ0VEIEJVVFRPTiA/PyAgYXMgd2VsbCAjIyMjIyMjIyMjIyMjIyMjXG4gICAgICAgICAgICAvL3NldCBib2FyZCBzdGF0dXMgdG8gYXR0YWNrIHRvIGZsYWcgc3RhcnQgZ2FtZVxuICAgICAgICAgICAgcGxheWVyXzAuZ2FtZUJvYXJkLnN0YXR1cyA9ICdhdHRhY2snO1xuICAgICAgICAgICAgcGxheWVyXzEuZ2FtZUJvYXJkLnN0YXR1cyA9ICd1bmRlckZpcmUnO1xuICAgICAgICAgICAgLy8jIyMjI1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vZnVuY3Rpb25zXG5mdW5jdGlvbiBjb25maXJtU2V0U2hpcHNNZXRob2Qoc3RyKSB7XG4gICAgbGV0IHZhbDtcbiAgICBsZXQgcGxhY2VNZXRob2QgPSBudWxsO1xuICAgIGxldCBlbE5hbWUgPSBcInBsYWNlU2hpcHNcIisgc3RyO1xuICAgIHZhciByYWRpb0J1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShlbE5hbWUpO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCByYWRpb0J1dHRvbnMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgaWYocmFkaW9CdXR0b25zW2ldLmNoZWNrZWQgPT09IHRydWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbCA9IHJhZGlvQnV0dG9uc1tpXS52YWx1ZTtcbiAgICAgICAgICAgIHN3aXRjaCAodmFsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2V0JyA6IHtcbiAgICAgICAgICAgICAgICAgICAgLy9pbXBsZW1lbnQgcHJvdmlzaW9uIGZvciB1c2VyIHRvIHNldCBnYW1lYm9hcmQgc2hpcCBwb3NpdGlvbnMgbWFudWFsbHlcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VNZXRob2QgPSAncGxhY2UnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAncm5kJyA6IHtcbiAgICAgICAgICAgICAgICAgICAgLy9pbXBsZW1lbnQgcHJvdmlzaW9uIGZvciB1c2VyIHRvIHNldCBnYW1lYm9hcmQgc2hpcCBwb3NpdGlvbnMgcmFuZG9tbHlcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VNZXRob2QgPSAncmFuZG9tJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIHJhZGlvIGJ1dHRvbiBzZWxlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VNZXRob2QgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwbGFjZU1ldGhvZDtcbn0gLy8gZW5kIGNvbmZpcm0gc2VsZWN0aW9uXG5cbi8vZXhwb3J0c1xuZXhwb3J0IHtcbiAgICBidG5MaXN0ZW5lcixcbiAgICBodW1hbl9idG5MaXN0ZW5lck9iaiwgY29tcF9idG5MaXN0ZW5lck9iaixcbiAgICBwbGF5ZXIwX3JhZGlvQnRuTGlzdGVuZXJPYmosIHBsYXllcjFfcmFkaW9CdG5MaXN0ZW5lck9iaixcbiAgICBjb25maXJtMF9idG5MaXN0ZW5lck9iaiwgY29uZmlybTFfYnRuTGlzdGVuZXJPYmosXG4gICAgcGxhY2VTaGlwc01ldGhvZFxuICB9OyIsImltcG9ydCB7R2FtZUJvYXJkfSBmcm9tICcuL2dhbWVCb2FyZC5qcyc7XG5cbmNsYXNzIFBsYXllciB7XG5cbiAgICBjb25zdHJ1Y3RvciAocGxheWVyKXtcbiAgICAgICAgLy9jYXRlciBmb3IgaW5jb3JyZWN0IGludm9jYXRpb24gaS5lIG5vdCB1c2luZyAnbmV3JyBrZXl3b3JkXG4gICAgICAgIGlmKCEodGhpcyBpbnN0YW5jZW9mIFBsYXllcikpIHtcbiAgICAgICAgICAgIC8vdGhyb3cgZXJyb3I6XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRXJyb3I6IEluY29ycmVjdCBpbnZvY2F0aW9uJyk7XG4gICAgICAgICAgICAvL29yXG4gICAgICAgICAgICAvL3JldHVybiBuZXcgUGxheWVyKHBsYXllcik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gcGxheWVyO1xuICAgICAgICAgICAgdGhpcy5zaGlwUGxhY2VtZW50PSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zaGlwc0RhdGEgPSBudWxsO1xuICAgICAgICAgICAgbGV0IGJvYXJkID0geydpZCc6IHBsYXllciwgJ3N0YXR1cyc6ICdzZXR1cCd9O1xuICAgICAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKGJvYXJkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vbWV0aG9kc1xuICAgIHNldFNoaXBEYXRhIChzaGlwc0RhdGEpIHtcbiAgICAgICAgdGhpcy5zaGlwc0RhdGEgPSBzaGlwc0RhdGE7XG4gICAgfVxuXG4gICAgZ2V0U2hpcERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBzRGF0YTtcbiAgICB9XG5cbiAgICBzZXQgYm9hcmQgKGJvYXJkKSB7XG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkID0gYm9hcmQ7XG4gICAgfVxuXG4gICAgZ2V0IGJvYXJkICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUJvYXJkO1xuICAgIH1cblxuICAgIGdyaWRVcGRhdGUoKXtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQuc2V0Qm9hcmRHcmlkKHRoaXMuc2hpcHNEYXRhKTtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQucmVuZGVyR2FtZUJvYXJkQ29udGVudCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtQbGF5ZXJ9IiwiLy9zaGlwLmpzXG4vKiAgQmF0dGxlU2hpcHNcbiAgICB0aGUgU2hpcCBjbGFzczpcblxuICAgIOKAmHNoaXBz4oCZIG9iamVjdHMgdGhhdCBpbmNsdWRlIHRoZWlyIGxlbmd0aCwgXG4gICAgICAgICAgICB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoZXnigJl2ZSBiZWVuIGhpdCwgYW5kIFxuICAgICAgICAgICAgd2hldGhlciBvciBub3QgdGhleeKAmXZlIGJlZW4gc3Vuay5cbiAgICAndHlwZXMnIE5vLiBcdENsYXNzIG9mIHNoaXAgXHRTaXplXG4gICAgICAgICAgICAxIFx0ICAgIENhcnJpZXIgXHQgICAgNVxuICAgICAgICAgICAgMiBcdCAgICBCYXR0bGVzaGlwIFx0ICAgIDRcbiAgICAgICAgICAgIDMgXHQgICAgQ3J1aXNlciBcdCAgICAzXG4gICAgICAgICAgICA0IFx0ICAgIFN1Ym1hcmluZSBcdCAgICAzXG4gICAgICAgICAgICA1IFx0ICAgIERlc3Ryb3llciBcdCAgICAyXG5cbiAgICBvbmx5IHRlc3Qgb2JqZWN04oCZcyBwdWJsaWMgaW50ZXJmYWNlLiBcbiAgICAgICAgICAgICBPbmx5IG1ldGhvZHMgb3IgcHJvcGVydGllcyB0aGF0IGFyZSB1c2VkIG91dHNpZGUgb2YgdGhlIOKAmHNoaXDigJkgb2JqZWN0IG5lZWQgdW5pdCB0ZXN0cy5cblxuICAgIFNoaXBzIHNob3VsZCBoYXZlOlxuICAgICAgICAgICAgYSBoaXQoKSBmdW5jdGlvbiB0aGF0IGluY3JlYXNlcyB0aGUgbnVtYmVyIG9mIOKAmGhpdHPigJkgdG8gdGhlIHNoaXAuXG4gICAgICAgICAgICBpc1N1bmsoKSBzaG91bGQgYmUgYSBmdW5jdGlvbiB0aGF0IGNhbGN1bGF0ZXMgd2hldGhlciBhIHNoaXAgaXMgY29uc2lkZXJlZCBzdW5rIGJhc2VkICAgICAgICAgICAgIG9uIGl0cyBsZW5ndGggYW5kIHRoZSBudW1iZXIgb2YgaGl0cyBpdCBoYXMgcmVjZWl2ZWQuXG4qL1xuXG5jbGFzcyBTaGlwIHtcbiAgICAvL2xvY2FsZSA9IHRoZSBncmlkIGFycmF5IFtyb3cgY29sXSBjby1vcmRzIG9mIHRoaXMgc2hpcFxuICAgIHNoaXBMb2NhbGUgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yIChzaGlwRGF0YSl7XG4gICAgICAgIC8vY2F0ZXIgZm9yIGluY29ycmVjdCBpbnZvY2F0aW9uIGkuZSBub3QgdXNpbmcgJ25ldycga2V5d29yZFxuICAgICAgICBpZighKHRoaXMgaW5zdGFuY2VvZiBTaGlwKSkge1xuICAgICAgICAgICAgLy90aHJvdyBlcnJvcjpcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdFcnJvcjogSW5jb3JyZWN0IGludm9jYXRpb24nKTtcbiAgICAgICAgICAgIC8vb3JcbiAgICAgICAgICAgIC8vcmV0dXJuIG5ldyBTaGlwOlxuICAgICAgICAgICAgLy9yZXR1cm4gbmV3IFNoaXAoc2hpcHNEYXRhKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwRGF0YSk7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBzaGlwRGF0YS50eXBlO1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IHNoaXBEYXRhLmxvY2F0aW9uO1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBzaGlwRGF0YS5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLmhpdHMgID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2hpcEhpdFBvc2l0aW9ucyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5pc19TdW5rID0gZmFsc2U7XG4gICAgICAgICAgICAvL3RoaXMuc2hpcExvY2FsZSA9IHRoZSBncmlkIGFycmF5IHJvdyBjb2wgY28tb3JkcyBvZiB0aGlzIHNoaXBcbiAgICAgICAgICAgIHRoaXMuc2hpcExvY2FsZT0gdGhpcy5zZXRMb2NhbGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vbWV0aG9kc1xuICAgIC8vcG9zIGlzIGEgcm93IGNvbCBhcnJheSAmIGxvY2F0aW9uIGlzIGEgcm93IGNvbCBvcmllbnRhdGlvbiBhcnJheVxuICAgIC8vc2V0IHNoaXBMb2NhbCB0byBiZSB0aGUgYXJyYXkgb2Ygcm93L2NvbHMgb2NjdXBpZWRcbiAgICAvL3VzZXMgc3RyaW5nIGNvbXBhcmlzb25zIHRvIGNoZWNrIHBvcyBpbmNsdWRlZCBpbiBsb2NhbGl0eVxuICAgXG4gICAgaGl0IChwb3MpIHtcbiAgICAgICAgLy9jaGVjayBub3QgYW4gYWxyZWFkeSBoaXQgcG9zaXRpb25cbiAgICAgICAgbGV0IGEgPSBBcnJheS5mcm9tKHRoaXMuc2hpcEhpdFBvc2l0aW9ucyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhOiAnLGEpO1xuICAgICAgICBsZXQgZm91bmQgPSB0aGlzLmNoZWNrU3ViKGEscG9zKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZm91bmQ6ICcsZm91bmQpO1xuICAgICAgICAvL2NoZWNrIGZvciBoaXQgaWYgbm90IGFscmVhZHkgZm91bmRcbiAgICAgICAgaWYoIWZvdW5kKSB7XG4gICAgICAgICAgICAvL2NoZWNrIGlmIGEgaGl0XG4gICAgICAgICAgICBhID0gdGhpcy5zaGlwTG9jYWxlO1xuICAgICAgICAgICAgbGV0IGhpdCA9IHRoaXMuY2hlY2tTdWIoYSxwb3MpO1xuICAgICAgICAgICAgaWYoaGl0KXtcbiAgICAgICAgICAgICAgICAvL2luY3JlbWVudCBoaXRzXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpdCBhdCAnLHBvcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgICAgICAgICAgLy9zYXZlIHRoZSBoaXRcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBIaXRQb3NpdGlvbnMgPSB0aGlzLnNoaXBIaXRQb3NpdGlvbnMgKyBwb3M7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNTdW5rICgpIHtcbiAgICAgICAgaWYodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1N1bmsgPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuLypcbiAgIHNldExvY2FsZSgpIHNldHMgdGhlIGxvY2FsaXR5IGFycmF5IGZyb20gdGhpcy5sb2NhdGlvbiBhcnJheVxuICAgVGhlIGxvY2FsaXR5IGFycmF5IGJlaW5nIHRoZSBzcGFjZSB0byBjaGVjayBmb3IgaGl0cyBldGNcbiAgIGVnIGZvciBiYXR0bGVzaGlwIGxvY2F0aW9uIG1pZ2h0IGJlIDogbG9jYXRpb24gOiBbNSwgNCwnSCddLCA9PT4gW3N0YXJ0LXJvdywgc3RhcnQtY29sLCBvcmllbnRhdGlvbilcbiAgIGxvY2F0aW9uIHNob3dzIG9yaWVudGF0aW9uIHRvIGJlICdIJyBob3Jpem9udGFsIDogdGhpcy5sZW5ndGggY291bGQgYmUgNFxuICAgc28gZ3JpZCAgY29scyAgICAgY29sNCAgICBjb2w1ICAgIGNvbDYgICAgY29sN1xuICAgICAgZ3JpZCAgcm93IDUgICAgICdiJyAgICAgJ2InICAgICAnYicgICAgICdiJyAgICAgIGluZGljYXRlIGJhdHRsZSBzaGlwXG4gICBzbyBsb2NhbGl0eSB3aWxsIGJlIHRoZSBhcnJheSBbIFs1LDRdLCBbNSw1XSwgWzUsNl0sIFs1LDddIF1cbiAgIGhvd2V2ZXIgaWYgb3JpZW50YXRpb24gd2FzIHZlcnRpY2FsXG4gICB0aGUgbG9jYWxpdHkgYXJyYXkgd291bGQgYmUgICBbIFs1LDRdLCBbNiw0XSwgWzcsNF0sIFs4LDRdIF1cbiovXG5cbiAgICBzZXRMb2NhbGUgKCkge1xuICAgICAgICAvL2hvcml6b250YWwgb3IgdmVydGljYWwgaW4gZ3JpZFxuICAgICAgICBsZXQgcm93ID0gdGhpcy5sb2NhdGlvblswXTsgICBcbiAgICAgICAgbGV0IGNvbCA9IHRoaXMubG9jYXRpb25bMV07XG4gICAgICAgIGxldCBvcmllbnRhdGlvbiA9IHRoaXMubG9jYXRpb25bMl07XG4gICAgICAgIGxldCBsb2NhbGl0eV9yb3cgPSBbXTtcbiAgICAgICAgbGV0IGxvY2FsaXR5X2NvbCA9IFtdO1xuICAgICAgICBsZXQgbG9jYWxpdHkgPSBbXTtcblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdIJyl7XG4gICAgICAgICAgICAvL2hvcml6b250YWwgc28gY29scyBpbmNyZWFzZVxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGxvY2FsaXR5X3Jvd1tpXSA9IHJvdztcbiAgICAgICAgICAgICAgICBsb2NhbGl0eV9jb2xbaV0gPSBjb2wgKyBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vdmVydGljYWwgc28gcm93cyBpbmNyZWFzZVxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGxvY2FsaXR5X3Jvd1tpXSA9IHJvdyAraTtcbiAgICAgICAgICAgICAgICBsb2NhbGl0eV9jb2xbaV0gPSBjb2w7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbG9jYWxpdHlbaV0gPSBbbG9jYWxpdHlfcm93W2ldLCBsb2NhbGl0eV9jb2xbaV1dO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIHJldHVybiBsb2NhbGl0eTtcbiAgICB9XG5cbiAgICBnZXRMb2NhbGUgKCkge1xuICAgICAgICAvL3JldHVybiB0aGUgbG9jYWxlIGFycmF5XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBmb3IgZXhpc3RlbmNlIG9mIHN1YiBhcnJheSBzdWIgaW4gYXJyYXkgYSByZXR1cm5zIHRydWUgb3IgZmFsc2VcbiAgICBjaGVja1N1YihhLCBzdWIpIHtcbiAgICAgICAgcmV0dXJuIGEuam9pbignLCcpLmluY2x1ZGVzKHN1Yi5qb2luKCcsJykpO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCB7U2hpcH0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsicGxheWVyXzAiLCJsb2NhbF9ncmlkIiwicm93cyIsImNvbHMiLCJpIiwiaiIsInJvdyIsImNvbCIsImNvbXBBdHRhY2siLCJjb25zb2xlIiwibG9nIiwiYXR0YWNrIiwiY291bnQiLCJnYW1lT3ZlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImlkIiwiZ2FtZUJvYXJkIiwicmVjZWl2ZUF0dGFjayIsIkRvbV9mbnMiLCJEaXNwbGF5IiwiZ2FtZV9pbnN0YW5jZSIsIl9jbGFzc0NhbGxDaGVjayIsIkVycm9yIiwiZG9jIiwiZG9jdW1lbnQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlckdhbWVCb2FyZCIsImJvYXJkIiwiZ3JpZFNldFVwIiwicGxheWVycyIsInBsYXllcl8xIiwiYXR0YWNraW5nUGxheWVyIiwiX2RlZmluZVByb3BlcnR5IiwiX2RvYyIsImRvbV9sb2FkZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJyZW5kZXJDZWxsQ29udGVudCIsImNvbnRlbnQiLCJjZWxsIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImhpZGVDZWxsQ29udGVudCIsImVsZW0iLCJlbGVtTm9kZUxpc3QiLCJjaGlsZE5vZGVzIiwibGlzdExlbiIsImxlbmd0aCIsInN0eWxlIiwiY29sb3IiLCJoaWRlR3JpZENvbnRlbnQiLCJwbGF5ZXIiLCJuYW1lIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzaG93Q2VsbENvbnRlbnQiLCJyZW1vdmUiLCJ0ZXh0Q2hpbGQiLCJmaXJzdENoaWxkIiwicmVzZXRHcmlkIiwiY29uY2F0Iiwic2tldGNoIiwiYmtnQ29sIiwicXVlcnlTZWxlY3RvciIsIm51bSIsIm1heFNrZXRjaFdpZHRoIiwiZ3JpZFNpemUiLCJyb3VuZCIsInJvd0NvbnRhaW5lciIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJ0b1N0cmluZyIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiZ2V0U2tldGNoIiwibW9uaXRvckJvYXJkIiwiYm9hcmRTdGF0dXMiLCJzdGF0dXMiLCJvbm1vdXNlZG93biIsImdldEJvYXJkU3RhdHVzIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJvYmoiLCJwbGFjZVNoaXAiLCJyZWNlaXZlVEVTVCIsImRvbmUiLCJjaGVja0JvYXJkc1NoaXBzUGxhY2VkIiwiZG9uZUJ0biIsImh1bWFuIiwibW9uaXRvclNoaXBQbGFjZW1lbnQiLCJfdGhpcyIsInNoaXAiLCJzaGlwcyIsImJ0bkhpZ2hsaWdodCIsImJ1dHRvbkhpZ2hsaWdodHMiLCJwbGFjaW5nU2hpcHMiLCJub2RlTmFtZSIsInNoaXBCdG4iLCJfcGxhY2VTaGlwIiwiYWRkU2hpcHNDbGFzcyIsInNoaXBzMSIsInJlbmRlckdhbWVCb2FyZENvbnRlbnQiLCJzZXRTaGlwVG9QbGFjZSIsInNob3dIaXQiLCJsb2NhdGUiLCJsb2NhdGlvbiIsImxvZ0lEIiwibG9nQ2VsbCIsIk51bWJlciIsImdyaWQiLCJuZXdIVE1MIiwibG9nVGV4dENoaWxkIiwib3BlbmluZ1RhZyIsImNsb3NpbmdUYWciLCJpbm5lclRleHQiLCJzaG93U3VuayIsImxlbiIsIm9yaWVudGF0aW9uIiwiY2VsbElEIiwiY29sSW5jcmVtZW50IiwiaW5uZXJIVE1MIiwic2hvd01pc3NlZCIsInNob3dHYW1lT3ZlciIsImdhbWVTY3JlZW4iLCJvdmVyIiwid2lubmVyIiwiYWRkU2hpcENsYXNzIiwiZGlzcGxheSIsInNldEFjdGl2ZVBsYXllciIsIlNoaXAiLCJHYW1lQm9hcmQiLCJib2FyZERhdGEiLCJtaXNzZWQiLCJfc2hpcHNQbGFjZWQiLCJjYXJyaWVyQ291bnQiLCJjYXJyaWVyTG9jYWxlIiwiY3J1aXNlckNvdW50IiwiY3J1aXNlckxvY2FsZSIsImJhdHRsZXNoaXBDb3VudCIsImJhdHRsZXNoaXBMb2NhbGUiLCJzdWJtYXJpbmVDb3VudCIsInN1Ym1hcmluZUxvY2FsZSIsImRlc3Ryb3llckNvdW50IiwiZGVzdHJveWVyTG9jYWxlIiwiY2FycmllckhpdHMiLCJjcnVpc2VySGl0cyIsImJhdHRsZXNoaXBIaXRzIiwic3VibWFyaW5lSGl0cyIsImRlc3Ryb3llckhpdHMiLCJIaXRzIiwiX3NoaXBUb1BsYWNlIiwiX3NrZXRjaCIsIl9zaGlwcyIsInNldEJvYXJkU3RhdHVzIiwiZ2V0U2hpcFRvUGxhY2UiLCJzZXRQbGFjZVNoaXAiLCJhcnJheSIsImdldFBsYWNlU2hpcCIsInNldFNoaXBzUGxhY2VkIiwiaW5kZXgiLCJnZXRTaGlwc1BsYWNlZCIsImVycm9yIiwicHVzaCIsInNoaXBEYXRhIiwibG9jYWxlIiwiaXNIb3Jpem9udGFsIiwiY2hlY2tIb3Jpem9udGFsIiwib3JpZ2luIiwiY2hlY2tPcmlnaW4iLCJyYW5kb21pc2VTaGlwcyIsInNoaXBzRGF0YSIsImNhcnJpZXIiLCJ0eXBlIiwic2V0Um5kIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJjcmVhdGVTaGlwcyIsInMiLCJuIiwic3RhcnRSb3ciLCJzdGFydENvbCIsImJ1aWx0IiwiY2VsbHNDbGVhciIsImNhbkJ1aWxkX0giLCJjYW5CdWlsZF9WIiwic2hpcExvY2F0aW9uIiwidGVtcENvdW50ZXIiLCJob3JfdmVyIiwic2V0Qm9hcmRHcmlkIiwibnVtU2hpcHMiLCJPYmplY3QiLCJrZXlzIiwic2hpcFN0ciIsImFyciIsInZhbHVlcyIsImdyaWRJRCIsImluaXRpYWxpc2VCb2FyZEdyaWQiLCJkYXRhIiwib2xkQ291bnQiLCJmb3JFYWNoIiwiaXRlbSIsImhvcml6b250YWwiLCJzdW0iLCJtYXAiLCJhSGl0Iiwic2hpcFNhbmsiLCJwb3MiLCJoaXQiLCJpc1N1bmsiLCJtaXNzZWRBdHRhY2siLCJyZWR1Y2UiLCJhIiwiYiIsImNvbXB1dGVyIiwiUGxheWVyIiwiYnRuTGlzdGVuZXIiLCJodW1hbl9idG5MaXN0ZW5lck9iaiIsImNvbXBfYnRuTGlzdGVuZXJPYmoiLCJwbGF5ZXIwX3JhZGlvQnRuTGlzdGVuZXJPYmoiLCJwbGF5ZXIxX3JhZGlvQnRuTGlzdGVuZXJPYmoiLCJjb25maXJtMF9idG5MaXN0ZW5lck9iaiIsImNvbmZpcm0xX2J0bkxpc3RlbmVyT2JqIiwicGxhY2VTaGlwc01ldGhvZCIsImJvYXJkcyIsInBsYXllck5vdFNlbGVjdGVkIiwib3Bwb25lbnRTZWxlY3RlZCIsImF3YWl0UGxheWVyU2VsZWN0ZWQiLCJzZXRTaGlwczAiLCJjb25maXJtMCIsInNldFNoaXBzMSIsImNvbmZpcm0xIiwic2V0VGltZW91dCIsInBsYXllclNlbGVjdGVkIiwic2VsZiIsImN1cnJlbnRCb2FyZCIsIm9wcG9uZW50Qm9hcmQiLCJidG5fb2JqIiwic2VsZWN0b3IiLCJiX2Z1bmN0aW9uIiwiY29udGFpbmVyRGl2Iiwib3BhY2l0eSIsInNldFNoaXBEYXRhIiwiZ3JpZFVwZGF0ZSIsInNldERpdiIsImJ0biIsInBsYWNlIiwicGxheWVyU3RyIiwiY29uZmlybVNldFNoaXBzTWV0aG9kIiwicGlja1NoaXBzMCIsInBpY2tTaGlwczEiLCJzdHIiLCJ2YWwiLCJwbGFjZU1ldGhvZCIsImVsTmFtZSIsInJhZGlvQnV0dG9ucyIsImdldEVsZW1lbnRzQnlOYW1lIiwiY2hlY2tlZCIsInNoaXBQbGFjZW1lbnQiLCJnZXRTaGlwRGF0YSIsImdldCIsInNldCIsImhpdHMiLCJzaGlwSGl0UG9zaXRpb25zIiwiaXNfU3VuayIsInNoaXBMb2NhbGUiLCJzZXRMb2NhbGUiLCJBcnJheSIsImZyb20iLCJmb3VuZCIsImNoZWNrU3ViIiwibG9jYWxpdHlfcm93IiwibG9jYWxpdHlfY29sIiwibG9jYWxpdHkiLCJnZXRMb2NhbGUiLCJzdWIiLCJqb2luIiwiaW5jbHVkZXMiXSwic291cmNlUm9vdCI6IiJ9