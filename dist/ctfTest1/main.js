(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Application-wide Styles */\r\nh1 {\r\n    color: #369;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 250%;\r\n  }\r\nh2, h3 {\r\n    color: #444;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: lighter;\r\n  }\r\nbody {\r\n    margin: 2em;\r\n    font-family: Cambria, Georgia;\r\n    background-color: #444; \r\n    background-image: url('batsymbol-wallpaper3.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n/* everywhere else */\r\n* {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"app\" >\n<h1>\n   {{ title }}!\n</h1> \n<!-- <app-theme-x></app-theme-x> -->\n<app-players (PlayerValue)=\"valueInput($event)\"></app-players> \n<!-- <app-level></app-level> -->\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.player = 'Batman';
        this.title = 'Gotham Crusade';
    }
    AppComponent.prototype.valueInput = function (val) {
        console.log('Hits on Emitter on App: ' + val);
        if (val === 'batman') { // Change to 'Batman' if you are applying a differnent bbackground
            document.body.style.backgroundImage = 'url(\'Assets/all about the bat/nw.jpg\')';
        }
        else if (val === 'NightWing') {
            document.body.style.backgroundImage = 'url(\'Assets/all about the bat/nw.jpg\')';
        }
        else if (val === 'RedHood') {
            document.body.style.backgroundImage = 'url(\'Assets/all about the bat/RedHood.jpg\')';
        }
        else if (val === 'Robin') {
            document.body.style.backgroundImage = 'url(\'Assets/all about the bat/Damian Wayne.jpg\')';
        }
        else if (val === 'Red Robin') {
            document.body.style.backgroundImage = 'url(\'Assets/all about the bat/Tim Drake.jpg\')';
        }
        else if (val === 'Batgirl') {
            document.body.style.backgroundImage = 'url(\'Assets/all about the bat/345696_batgirl-wallpaper.jpg\')';
        }
        else if (val === 'BatWoman') {
            document.body.style.backgroundImage = 'url(\'Assets/all about the bat/batwoman-kathy-kane-comic-dc-universe-others-11573.jpg\')';
        }
        else if (val === 'BatWing') {
            document.body.style.backgroundImage = 'url(\'Assets/all about the bat/BatWing.jpg\')';
        }
        else if (val === 'huntress') { // Cap for Access
            document.body.style.backgroundImage = 'url(\'Assets/all about the bat/nw.jpg\')';
        }
        else if (val === 'catWoman') { // Cap for Access
            document.body.style.backgroundImage = 'url(\'Assets/all about the bat/nw.jpg\')';
        }
        // document.body.style.background = 'red';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./players/players.component */ "./src/app/players/players.component.ts");
/* harmony import */ var _level_level_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./level/level.component */ "./src/app/level/level.component.ts");
/* harmony import */ var _level_container_level_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./level-container/level-container.component */ "./src/app/level-container/level-container.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _theme_x_theme_x_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme-x/theme-x.component */ "./src/app/theme-x/theme-x.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _players_players_component__WEBPACK_IMPORTED_MODULE_4__["PlayersComponent"],
                _level_level_component__WEBPACK_IMPORTED_MODULE_5__["LevelComponent"],
                _level_container_level_container_component__WEBPACK_IMPORTED_MODULE_6__["LevelContainerComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__["MessagesComponent"],
                _theme_x_theme_x_component__WEBPACK_IMPORTED_MODULE_8__["ThemeXComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/flag-validator.service.ts":
/*!*******************************************!*\
  !*** ./src/app/flag-validator.service.ts ***!
  \*******************************************/
/*! exports provided: FlagValidatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagValidatorService", function() { return FlagValidatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlagValidatorService = /** @class */ (function () {
    function FlagValidatorService() {
    }
    FlagValidatorService.prototype.flagcheck = function (level, flag) {
        if (level === 1 && flag === 'Typical_R1dd|er_3X7aBwASv9') {
            return true;
        }
        else if (level === 2 && flag === 'Pu5zl3d?_G00d_J0b_L76KYh7Jxy') {
            return true;
        }
        else if (level === 3 && flag === ':OGod_0f_M1||10N_F4ces?_r77QAjEHev') {
            return true;
        }
        else if (level === 4 && flag === 'SOlid_work!!_Easy_part\'s_over_1zZ5CLTLgq') {
            return true;
        }
        else if (level === 5 && flag === '1side_is_Kr4Zi_i3KaPMwCAL') {
            return true;
        }
        else if (level === 6 && flag === '0th3r-5id3_Crazier!_HWz3xELbBR') {
            return true;
        }
        else if (level === 7 && flag === 'W1nter_1z_Comin9_SlfDxHfA3i') {
            return true;
        }
        else if (level === 8 && flag === 'Why\'d_Arya_have_to_do_that_ahw7Ic4liH') {
            return true;
        }
        else if (level === 9 && flag === 'P3NGU1N_15_R1CH_2hK1HV5Vzj') {
            return true;
        }
        else if (level === 10 && flag === 'death_stroke:D_pn4Qax5C4R') {
            return true;
        }
        else if (level === 11 && flag === '2_many_2_H4ndl3_iF2fTpJrov') {
            return true;
        }
        else if (level === 12 && flag === 'Ra\'s_al_Ghul!XD_vUu5aJE0jE') {
            return true;
        }
        else if (level === 13 && flag === 'The_Gr34te5t_Detective_Jg8pkLgjKU') {
            return true;
        }
        else if (level === 14 && flag === 'Whatcha_Doin\'_Batsy!!:D_UqpAnL9FUD') {
            return true;
        }
        else if (level === 15 && flag === 'HAAHAHAHAHAHAHAHAXD_EvOltCsnUp') {
            return true;
        }
        else if (level === 16 && flag === 'Surprise!!!_KRXZY4daWin') {
            return true;
        }
        else {
            return false;
        }
    };
    FlagValidatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FlagValidatorService);
    return FlagValidatorService;
}());



/***/ }),

/***/ "./src/app/level-container/level-container.component.css":
/*!***************************************************************!*\
  !*** ./src/app/level-container/level-container.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* .btn button{\r\n    background-color: cornflowerblue;\r\n    color: black; \r\n}\r\n\r\n.btn button.selected{\r\n    background-color: black;\r\n    color: white;    \r\n}\r\n\r\n */\r\n body{ \r\n    background:url(http://subtlepatterns.subtlepatterns.netdna-cdn.com/patterns/wild_oliva.png);\r\n}\r\n .centered {\r\n  margin:50px auto;\r\n  text-align:center;\r\n}\r\n .button::-moz-focus-inner{\r\n  border: 0;\r\n  padding: 0;\r\n}\r\n .button{\r\n  display: inline-block;\r\n  *display: inline;\r\n  zoom: 1;\r\n  padding: 6px 20px;\r\n  margin: 0;\r\n  cursor: pointer;\r\n  border: 1px solid #bbb;\r\n  overflow: visible;\r\n  font: bold 13px arial, helvetica, sans-serif;\r\n  text-decoration: none;\r\n  white-space: nowrap;\r\n  color: #555;\r\n  \r\n  background-color: #ddd;\r\n  background-image: linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0));\r\n  transition: background-color .2s ease-out;\r\n  background-clip: padding-box; /* Fix bleeding */\r\n  border-radius: 3px;\r\n  box-shadow: 0 1px 0 rgba(0, 0, 0, .3), 0 2px 2px -1px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .3) inset;\r\n  text-shadow: 0 1px 0 rgba(255,255,255, .9);\r\n  \r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n .button:hover{\r\n  background-color: #eee;\r\n  color: #555;\r\n}\r\n .button:active{\r\n  background: #e9e9e9;\r\n  position: relative;\r\n  top: 1px;\r\n  text-shadow: none;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, .3) inset;\r\n}\r\n .button[disabled], .button[disabled]:hover, .button[disabled]:active{\r\n  border-color: #eaeaea;\r\n  background: #fafafa;\r\n  cursor: default;\r\n  position: static;\r\n  color: #999;\r\n  /* Usually, !important should be avoided but here it's really needed :) */\r\n  box-shadow: none !important;\r\n  text-shadow: none !important;\r\n}\r\n /* Smaller buttons styles */\r\n .button.small{\r\n  padding: 4px 12px;\r\n}\r\n /* Larger buttons styles */\r\n .button.large{\r\n  padding: 12px 30px;\r\n  text-transform: uppercase;\r\n}\r\n .button.large:active{\r\n  top: 2px;\r\n}\r\n /* Colored buttons styles */\r\n .button.green, .button.red, .button.blue {\r\n  color: #fff;\r\n  text-shadow: 0 1px 0 rgba(0,0,0,.2);\r\n  background-image: linear-gradient(to bottom, rgba(255,255,255,.3), rgba(255,255,255,0));\r\n}\r\n /* */\r\n .button.green{\r\n  background-color: #57a957;\r\n  border-color: #57a957;\r\n}\r\n .button.green:hover{\r\n  background-color: #62c462;\r\n}\r\n .button.green:active{\r\n  background: #57a957;\r\n}\r\n /* */\r\n .button.red{\r\n  background-color: #ca3535;\r\n  border-color: #c43c35;\r\n}\r\n .button.red:hover{\r\n  background-color: #ee5f5b;\r\n}\r\n .button.red:active{\r\n  background: #c43c35;\r\n}\r\n /* */\r\n .button.blue{\r\n  background-color: #269CE9;\r\n  border-color: #269CE9;\r\n}\r\n .button.blue:hover{\r\n  background-color: #70B9E8;\r\n}\r\n .button.blue:active{\r\n  background: #269CE9;\r\n}\r\n /* */\r\n .green[disabled], .green[disabled]:hover, .green[disabled]:active{\r\n  border-color: #57A957;\r\n  background: #57A957;\r\n  color: #D2FFD2;\r\n}\r\n .red[disabled], .red[disabled]:hover, .red[disabled]:active{\r\n  border-color: #C43C35;\r\n  background: #C43C35;\r\n  color: #FFD3D3;\r\n}\r\n .blue[disabled], .blue[disabled]:hover, .blue[disabled]:active{\r\n  border-color: #269CE9;\r\n  background: #269CE9;\r\n  color: #93D5FF;\r\n}\r\n /* Group buttons */\r\n .button-group,\r\n.button-group li{\r\n  display: inline-block;\r\n  *display: inline;\r\n  zoom: 1;\r\n}\r\n .button-group{\r\n  font-size: 0; /* Inline block elements gap - fix */\r\n  margin: 0;\r\n  padding: 0;\r\n  background: rgba(0, 0, 0, .1);\r\n  border-bottom: 1px solid rgba(0, 0, 0, .1);\r\n  padding: 7px;\r\n  border-radius: 7px;\r\n}\r\n .button-group li{\r\n  margin-right: -1px; /* Overlap each right button border */\r\n}\r\n .button-group .button{\r\n  font-size: 13px; /* Set the font size, different from inherited 0 */\r\n  border-radius: 0;\r\n}\r\n .button-group .button:active{\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, .2) inset, 5px 0 5px -3px rgba(0, 0, 0, .2) inset, -5px 0 5px -3px rgba(0, 0, 0, .2) inset;\r\n}\r\n .button-group li:first-child .button{\r\n  border-radius: 3px 0 0 3px;\r\n}\r\n .button-group li:first-child .button:active{\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, .2) inset, -5px 0 5px -3px rgba(0, 0, 0, .2) inset;\r\n}\r\n .button-group li:last-child .button{\r\n  border-radius: 0 3px 3px 0;\r\n}\r\n .button-group li:last-child .button:active{\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, .2) inset, 5px 0 5px -3px rgba(0, 0, 0, .2) inset;\r\n}\r\n .form{\r\n    width:100%;\r\n    align-content: center;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    align-items: center;\r\n    padding: 20px;\r\n  }\r\n .gamespace{\r\n    width: 100%;\r\n    /* border-radius: 10px; */\r\n    background-color: #f2f2f2;\r\n    padding-top: 10px;\r\n    display: block;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    }\r\n .flag{\r\n\r\n    margin: 20px 20px 20px 20px;\r\n}\r\n /* Style the button that is used to open and close the collapsible content */\r\n .collapsible {\r\n  background-color: #f2f2f2;\r\n  color: #444;\r\n  cursor: pointer;\r\n/*   border-radius: 10px; */\r\n  padding: 10px;\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  text-align: center;\r\n  font: bold 13px arial, helvetica, sans-serif;\r\n}\r\n /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */\r\n .active, .collapsible:hover {\r\n  background-color: #ccc;\r\n}\r\n /* Style the collapsible content. Note: hidden by default */\r\n .content {\r\n  padding: 0 18px;\r\n  margin-bottom: 10px;\r\n  /* border-radius: 10px; */\r\n  background-color: white;\r\n  overflow: hidden;\r\n  transition: max-height 0.2s ease-out;\r\n}\r\n"

/***/ }),

/***/ "./src/app/level-container/level-container.component.html":
/*!****************************************************************!*\
  !*** ./src/app/level-container/level-container.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"hero\">\n\n    <h2>{{hero.name | uppercase}} Details</h2>\n    <div><span>id: </span>{{hero.id}}</div>\n    <div>\n      <label>name:\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n      </label>\n    </div>\n  \n  </div>\n -->\n\n<div *ngIf=\"level\">\n<!-- Story -->\n  <button type=\"button\" class=\"collapsible\" (click)='collapse()'>Story</button>\n  <div [hidden]=\"isShow\" class=\"content\" id=\"content\">\n\n      <div *ngIf=\"level===1\">\n          <div class=\"text-block\">      \n              <div class=\"row\">\n               <div class=\"column\">\n                 <img src=\"../assets/img/story/Level 01.jpg\" alt=\"Snow\" style=\"width:80%\">\n               </div>          \n               </div>\n               <div class= \"container\"align=\"bottom\">\n                    \n                <p>The Riddler, with his straight headed academic hostages put to stake, welcomes the Batman to solve his tricky riddle.</p>     \n                    \n                   </div>\n                </div>\n      </div>\n\n      <div *ngIf=\"level===2\">\n          <div class=\"text-block\">\n    \n              <p>After a successful attempt, a satisfied Riddler releases all hostages but one: <br/>looking forward to a display of wit from the Batman to save the day (or night)</p>\n                     \n               <div class=\"row\">\n                <div class=\"column\">\n                  <img src=\"../assets/img/story/Level 02.jpg\" alt=\"Snow\" style=\"width:50%\">\n                </div>\n                \n                \n                </div>\n                <div class=\"container\" align=\"bottom\">\n                     \n                 <p>After a strenuous attempt to save one last life the Batman solves the Riddle to fight another day and <br/>the Riddler hums a song as he hands himself over to the Riddled GCPD officers.\n              \n              </p>     \n                     \n                    </div>\n                 </div>\n    \n      </div>\n\n      <div *ngIf=\"level===3\">\n\n          <div class=\"text-block\">\n              <p></p>\n                     \n               <div class=\"row\">\n                <div class=\"column\">\n                  <img src=\"../assets/img/story/Level 03.jpg\" alt=\"Snow\" style=\"width:60%\">\n                </div>\n                \n                \n                </div>\n                <div class= \"container\"align=\"bottom\">\n                     \n                 <p>Knowing how reckless and full of raw energy Clayface can be, Batman tries to enable an Automated Defense System at the bank. But a challenge lies ahead</p>\n                  \n                     \n                    </div>\n                 </div>\n      </div>\n\n      <div *ngIf=\"level===4\">\n\n          <div class=\"text-block\">\n              <p>With a Defensive Perimeter temporarily holding back Clayface, Batman tries to lock down the underground vaults.<br/> To do so he has to obtain the passcode which is securely encrypted</p>\n                     \n               <div class=\"row\">\n                <div class=\"column\">\n                  <img src=\"../assets/img/story/Level 04.jpg\" alt=\"Snow\" style=\"width:60%\">\n                </div>\n                \n                \n                </div>\n                <div class= \"container\"align=\"bottom\">\n                     \n                 <p>With the bank secured for now, Batman manages to fend of Clayface with some GCPD Firepower helping the cause. <br/>The villain escapes yet the bank remains safe and secure.</p>\n                  \n                     \n                    </div>\n                 </div>\n                \n      </div>\n\n      <div *ngIf=\"level===5\">\n\n          <div class=\"text-block\">\n              <p> On sighting unrest around the Gotham Magistrate, Batman observes Harvey Dent (aka two-face) <br/> displaying a constrained Commissioner Gordon with a timed device strapped to his waist</p>\n              \n              \n                      \n               <div class=\"row\">\n                <div class=\"column\">\n                  <img src=\"../assets/img/story/Level 05-Img 01.jpg\" alt=\"Snow\" style=\"width:56%\">\n                </div>\n                \n                <div class=\"column\">\n                  <img src=\"../assets/img/story/Level 05-Img 02.jpg\" alt=\"Forest\" style=\"width:49%\">\n                </div>\n                </div>\n                <div class= \"container\"align=\"bottom\">\n                     \n                 <p>An agitated two-face kept challenging onlookers to take the device off:<br/>joyously warning them that one wrong step would blow them all to smithereens! <br/>Being the hero he is, Batman steps up.</p>     \n                     \n                    </div>\n                 </div>\n      </div>\n      <div *ngIf=\"level===6\">\n    \n          <div class=\"text-block\">\n              <p>After Batman defuses the device, Two Face smiles wickedly and tosses a coin<br/>as it lands whispers to the hero’s ear as automated turrets starts firing at everyone around. </p>\n              \n              \n                      \n               <div class=\"row\">\n                <div class=\"column\">\n                  <img src=\"../assets/img/story/Level 06-Img 01.jpg\" alt=\"Snow\" style=\"width:60%\">\n                </div>\n                \n                <div class=\"column\">\n                  <img src=\"../assets/img/story/Level 06-Img 02.jpg\" alt=\"Forest\" style=\"width:70%\">\n                </div>\n                </div>\n                <div class= \"container\"align=\"bottom\">\n                     \n                 <p>Batman finds the central controller and tries to disarm the system, but nothing is ever as easy as it sounds</p>     \n                     \n                    </div>\n                 </div>\n      </div>\n\n      <div *ngIf=\"level===7\">\n\n    \n          <div class=\"text-block\">\n              <p>Batman manages to save Commissioner Gordon and a few dozen people,<br/>but soon gets notified of a situation at a Wayne Industries warehouse;<br/>containing advanced weaponized technology...</p>\n              \n              \n                      \n               <div class=\"row\">\n                <div class=\"column\">\n                  <img src=\"../assets/img/story/Level 07-Img 01.jpg\" alt=\"Snow\" style=\"width:65%\">\n                </div>\n                \n                <div class=\"column\">\n                  <img src=\"../assets/img/story/Level 07-Img 02.jpg\" alt=\"Forest\" style=\"width:70%\">\n                </div>\n                </div>\n                <div class= \"container\"align=\"bottom\">\n                     \n                 <p> Dr Freeze has tied up the guards and locked himself in the warehouse.<br/>Having designed the system himself, batman knows the only way to break the lock is to reverse engineer it</p>     \n                     \n                    </div>\n                 </div>\n                \n            </div>\n            <div *ngIf=\"level===8\">\n          \n                <div class=\"text-block\">\n                    <p>The resourceful caped crusader gets himself in to find Dr Freeze meddling with his tech.<br/>He slips in closer and after a short confrontation, knocks a barely-armed Dr Freeze out with a well placed shot.</p>\n                    \n                    \n                            \n                     <div class=\"row\">\n                      <div class=\"column\">\n                        <img src=\"../assets/img/story/Level 08-Img 01.jpg\" alt=\"Snow\" style=\"width:75%\">\n                      </div>\n                      \n                      <div class=\"column\">\n                        <img src=\"../assets/img/story/Level 08-Img 02.jpg\" alt=\"Forest\" style=\"width:72%\">\n                      </div>\n                      </div>\n                      <div class= \"container\"align=\"bottom\">\n                           \n                       <p>Batman gets hold of what Freeze has been building.<br/>With little time till the villain regains conscience, our hero gets straight to work</p>     \n                           \n                          </div>\n                       </div>\n            </div>\n            <div *ngIf=\"level===9\">\n          \n                <div class=\"text-block\">\n          \n                 \n                    <div class=\"row\">\n                     <div class=\"column\">\n                       <img src=\"../assets/img/story/Level 09.jpg\" alt=\"Snow\" style=\"width:60%\">\n                     </div>\n                     \n                     \n                     </div>\n                     <div class= \"container\"align=\"bottom\">\n                          \n                      <p>On arriving at his associate’s residence, Batman is presented with a device. <br/>Knowing is associate quite well, he knew he had to login to locate her\n                   \n                   <br/>After a successful attempt Batman locates Oracle. <br/>He shows her the image and she takes only seconds to figure out what she has to do.</p>\n                       \n                          \n                         </div>\n                      </div>\n            </div>\n\n            <div *ngIf=\"level===10\">\n\n                <div class=\"text-block\">\n          \n                 \n                    <div class=\"row\">\n                     <div class=\"column\">\n                       <img src=\"../assets/img/story/Level 10.jpg\" alt=\"Snow\" style=\"width:50%;\">\n                     </div>\n                     \n                     \n                     </div>\n                     <div class= \"container\"align=\"bottom\">\n                          \n                      <p>Barbara Gordon manages to decipher the image. Batman soon realizes the next villain he must confront and where to find him</p>\n                          \n                         </div>\n                      </div>\n                     \n            </div>\n            <div *ngIf=\"level===11\">\n          \n                <div class=\"text-block\">\n                    <p>Oracle acts on the clues discovered and intel she has already gathered;<br/>which prompts them to a login page which looks to be associated with<br/>one of Al Ghul’s shell companies which seems to be active in the Gotham area.</p>\n                    \n                    \n                            \n                     <div class=\"row\">\n                      <div class=\"column\">\n                        <img src=\"../assets/img/story/Level 11-Img 01.jpg\" alt=\"Snow\" style=\"width:80%\">\n                      </div>\n                      \n                      <div class=\"column\">\n                        <img src=\"../assets/img/story/Level 11-Img 02.jpg\" alt=\"Forest\" style=\"width:75%\">\n                      </div>\n                      </div>\n                      <div class= \"container\"align=\"bottom\">\n                           \n                       <p>Although they have discovered the site, gaining access is a challenge worthy of Oracle and the Batman</p>     \n                           \n                          </div>\n                       </div>\n                      \n            </div>\n            <div *ngIf=\"level===12\">\n          \n              \n          <div class=\"text-block\">\n          \n              <p>Batman sneaks in and approaches a Central Operations unit.<br/>He hopes his endeavors will disrupt communication lines between the Ops Center and Operatives.</p>\n              \n              \n                      \n               <div class=\"row\">\n                <div class=\"column\">\n                  <img src=\"../assets/img/story/Level 12.jpg\" alt=\"Snow\" style=\"width:50%\">\n                </div>\n                \n                \n                </div>\n                <div class= \"container\"align=\"bottom\">\n                     \n                 <p>On succession, Batman destroys the warehouse,<br/>assured that many more operatives and operations centers would stop functioning without it.</p>\n              \n                 \n                     \n                    </div>\n                 </div>\n                \n            </div>\n            <div *ngIf=\"level===13\">\n\n                <div class=\"text-block\">\n                    <p>When Batman sabotaged the warehouse, he realized a few men were guns for hire of the court of owls.<br/>The caped crusader decides to investigate...<br/>He reaches a known hideout which looks much well-guarded than before.</p>\n                    \n                    \n                            \n                     <div class=\"row\">\n                      <div class=\"column\">\n                        <img src=\"../assets/img/story/Level 13-Img 01.jpg\" alt=\"Snow\" style=\"width:70%\">\n                      </div>\n                      \n                      <div class=\"column\">\n                        <img src=\"../assets/img/story/Level 13-Img 02.jpg\" alt=\"Forest\" style=\"width:75%\">\n                      </div>\n                      </div>\n                      <div class= \"container\"align=\"bottom\">\n                           \n                       <p>Sneaking in through the roof, Batman find a room at the center of the building which appears to be secured by a lock.<br/>His task now was to unlock it...</p>     \n                           \n                          </div>\n                       </div>\n            </div>\n            <div *ngIf=\"level===14\">\n          \n                <div class=\"text-block\">\n          \n                    <p> GCPD radio comms suggested Harley Quinn was around Arkham Asylum. <br/>Batman reaches the fortified prison to find Harley Quinn expecting her nemesis. A enthralling fight ensues:</p>\n                    \n                    \n                            \n                     <div class=\"row\">\n                      <div class=\"column\">\n                        <img src=\"../assets/img/story/Level 14.png\" alt=\"Snow\" style=\"width:50%\">\n                      </div>\n                      \n                      \n                      </div>\n                      <div class= \"container\"align=\"bottom\">\n                           \n                       <p>The caped crusader survives and extracts another image stored in a device in possession of Quinn.<br/> This provides a direct clue to his next opponent (Yes! You probably guessed it right).</p>\n                    \n                       \n                           \n                          </div>\n                       </div>\n            </div>\n            <div *ngIf=\"level===15\">\n          \n                <div class=\"text-block\">\n          \n                    <p>  The caped crusader enters the Academy building to only realize that all is not what it seems to be. A truly magnanimous challenge lies ahead:</p>\n                    \n                            \n                     <div class=\"row\">\n                      <div class=\"column\">\n                        <img src=\"../assets/img/story/Level 15.jpeg\" alt=\"Snow\" style=\"width:50%\">\n                      </div>\n                      \n                      \n                      </div>\n                      <div class= \"container\"align=\"bottom\">\n                           \n                    \n                       \n                           \n                          </div>\n                       </div>\n            </div>\n\n\n    \n  </div>\n\n<!-- Level Implementations -->\n\n<div class =\"gamespace\">\n  <div class=\"storyboard\"><p>{{this.storyWriter(level)}}</p></div>\n<div *ngIf=\"level===1\" class=\"button-group\">\n  <button (click)=\"downloadFile('Assets/level1/cipher.txt','cipher')\" class=\"red button\">cipher</button>\n  <button (click)=\"downloadFile('Assets/level1/key.txt','key')\" class=\"red button\">key</button>\n  <button (click)=\"downloadFile('Assets/level1/table.txt','table')\" class=\"red button\">table</button>\n</div>\n\n<div *ngIf=\"level===2\"  class=\"button-group\">\n  <button (click)=\"downloadFile('Assets/level2/cipher.txt','cipher')\" class=\"red button\">cipher</button>\n  <button (click)=\"downloadFile('Assets/level2/hint.txt','hint')\" class=\"red button\">hint</button>\n</div>\n\n<div *ngIf=\"level===3\"  class=\"button-group\"> \n  <button (click)=\"downloadFile('Assets/level3/dir1.zip','dir1')\" class=\"red button\">dir1</button>\n</div>\n\n<div *ngIf=\"level===4\"  class=\"button-group\">\n    <button (click)=\"downloadFile('Assets/level4/encoded_directory.txt','encoded_directory')\" class=\"red button\">Encoded Directory</button>\n    <button (click)=\"downloadFile('Assets/level4/hint.txt','hint')\" class=\"red button\">hint</button>\n  </div>\n\n<div *ngIf=\"level===5\"  class=\"button-group\"> \n  <button (click)=\"downloadFile('Assets/level5/Untitled1.exe','binary.exe')\" class=\"red button\">binary</button>\n</div>\n\n<div *ngIf=\"level===6\"  class=\"button-group\"> \n    <button (click)=\"downloadFile('Assets/level6/helloworld.asm','helloworld.asm')\" class=\"red button\">helloworld code</button>\n  <div>\n    <form #f=\"ngForm\" (ngSubmit)=\"onXSS(f)\" novalidate class=\"form\">\n      <div class=\"form-group\">\n        <input name=\"first\" ngModel required #first=\"ngModel\" placeholder=\"answer\" class=\"flag\">\n        <button class=\"blue button\"> Check </button>\n      </div>\n    </form></div>\n</div>\n\n<div *ngIf=\"level===7\"  class=\"button-group\"> \n    <button (click)=\"downloadFile('Assets/level7/randjava.java','randjava')\" class=\"red button\">randjava</button>\n</div>\n\n<div *ngIf=\"level===8\"  class=\"button-group\"> \n    <button (click)=\"downloadFile('Assets/level8/python.py','python')\" class=\"red button\">python</button>\n    <button (click)=\"downloadFile('Assets/level8/codex.txt','codex')\" class=\"red button\">codex</button>\n</div>\n\n<div *ngIf=\"level===9\"  class=\"button-group\"> \n    <form #f=\"ngForm\" (ngSubmit)=\"onLogin(f)\" novalidate class=\"form\">\n        <div class=\"form-group\">\n          <table>\n            <tr>\n              <td>User Email</td>\n              <td><input name=\"email\" ngModel required #first=\"ngModel\" placeholder=\"email\" class=\"flag\"></td>\n            </tr>\n            <tr>\n              <td>Password</td>\n              <td><input  type=\"password\" name=\"password\" ngModel required #first=\"ngModel\" placeholder=\"password\" class=\"flag\"></td>\n            </tr>\n            <tr>\n              <td colspan=\"2\"><button class=\"blue button\"> Login </button></td>\n            </tr>             \n        </table>\n        <input type=\"hidden\" value= \"The password is 0R4CL3/B4TG1RL\">\n        </div>\n      </form>\n  </div>\n\n  <div *ngIf=\"level===10\"  class=\"button-group\"> \n    <button (click)=\"downloadFile('Assets/level10/level10/hideimage.jpeg','hideimage')\" class=\"red button\">Long live the bat</button>\n  </div>\n  <div *ngIf=\"level===11\" class=\"button-abc\">\n    <a href=\"https://leagueofassasins.000webhostapp.com/\">methanin ganin</a>\n  </div>\n  <div *ngIf=\"level===13\"  class=\"button-group\"> \n    <button (click)=\"downloadFile('Assets/level13/already_picked_lock.txt','already_picked_lock')\" class=\"red button\">Already Picked Lock</button>\n    <button (click)=\"downloadFile('Assets/level13/lock.txt','lock')\" class=\"red button\">Lock</button>\n  </div>\n\n  <div *ngIf=\"level===14\"  class=\"button-group\"> \n    <img src=\"../assets/img/test1.png\" width=\"600px\">\n  </div>\n\n\n  <div *ngIf=\"level===15\"  class=\"button-group\"> \n      <button (click)=\"downloadFile('Assets/level15/BarCode.7z','Zipped.7z')\" class=\"red button\">Zipped</button>\n      <button (click)=\"downloadFile('Assets/level15/AcidFlower.exe','AcidFlower.exe')\" class=\"red button\">Joker-in-the-Box</button>\n    </div>\n\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate class=\"form\">\n    <div class=\"form-group\">\n      <input name=\"first\" ngModel required #first=\"ngModel\" placeholder=\"flag\" class=\"flag\">\n      <button class=\"blue button\"> Submit </button>\n    </div>\n  </form>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/level-container/level-container.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/level-container/level-container.component.ts ***!
  \**************************************************************/
/*! exports provided: LevelContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelContainerComponent", function() { return LevelContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player */ "./src/app/player.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _flag_validator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flag-validator.service */ "./src/app/flag-validator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LevelContainerComponent = /** @class */ (function () {
    function LevelContainerComponent(messageService, flagValidatorService) {
        this.messageService = messageService;
        this.flagValidatorService = flagValidatorService;
        // loginForm: FormGroup;
        this.name = 'Angular 5';
        this.isShow = true;
        this.story = this.storyWriter(0);
    }
    LevelContainerComponent.prototype.ngOnInit = function () {
    };
    LevelContainerComponent.prototype.ngOnChanges = function () {
    };
    LevelContainerComponent.prototype.validate = function (level, player, flag) {
        // Check if the flag is correct
        if (this.flagValidatorService.flagcheck(level, flag)) {
            // Check player's current level
            var lvl = player.level;
            if (lvl <= level) {
                player.level++;
                alert('Correct!!! You may proceed to the next level!!!');
            }
        }
        else {
            alert('incorrect flag');
        }
    };
    LevelContainerComponent.prototype.downloadFile = function (href, filename) {
        var link = document.createElement('a');
        link.download = filename;
        link.href = href;
        link.click();
    };
    LevelContainerComponent.prototype.onSubmit = function (f) {
        console.log(f.value.first);
        console.log(this.hero);
        console.log(this.level);
        this.validate(this.level, this.hero, f.value.first);
        f.reset();
    };
    LevelContainerComponent.prototype.storyWriter = function (level) {
        return this.messageService.storyWriter(level);
    };
    LevelContainerComponent.prototype.onLogin = function (f) {
        // console.log(f.value.email);
        // alert(f.value.email + ' : ' + f.value.password);
        if (f.value.email === 'barbara@krxzy_ctf.com') {
            if (f.value.password === '0R4CL3/B4TG1RL') {
                alert('Congratulatoins!!! The flag is P3NGU1N_15_R1CH_2hK1HV5Vzj');
            }
            else {
                alert('Oops!!! Wrong Password!!!\n Hint: It\'s right there!!!...hidden...but right there');
            }
        }
        else {
            alert('Wrong email! Try again!');
        }
    };
    LevelContainerComponent.prototype.onXSS = function (f) {
        if (f.value.first === 'dhzxlo') {
            alert('The flag is 0th3r-5id3_Crazier!_HWz3xELbBR');
        }
        else {
            alert('Wrong answer');
        }
    };
    LevelContainerComponent.prototype.collapse = function () {
        this.isShow = !this.isShow;
        /*  if (content.style.display === 'block') {
           content.style.display = 'none';
         } else {
           content.style.display = 'block';
         } */
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _player__WEBPACK_IMPORTED_MODULE_1__["Player"])
    ], LevelContainerComponent.prototype, "hero", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LevelContainerComponent.prototype, "level", void 0);
    LevelContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-level-container',
            template: __webpack_require__(/*! ./level-container.component.html */ "./src/app/level-container/level-container.component.html"),
            styles: [__webpack_require__(/*! ./level-container.component.css */ "./src/app/level-container/level-container.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _flag_validator_service__WEBPACK_IMPORTED_MODULE_3__["FlagValidatorService"]])
    ], LevelContainerComponent);
    return LevelContainerComponent;
}());



/***/ }),

/***/ "./src/app/level/level.component.css":
/*!*******************************************!*\
  !*** ./src/app/level/level.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* .btn button{\r\n    background-color: cornflowerblue;\r\n    color: black; \r\n}\r\n\r\n.btn button.selected{\r\n    background-color: black;\r\n    color: white;    \r\n}\r\n\r\n */\r\n body{ \r\n    background:url(http://subtlepatterns.subtlepatterns.netdna-cdn.com/patterns/wild_oliva.png);\r\n}\r\n .centered {\r\n  margin:50px auto;\r\n  text-align:center;\r\n}\r\n .button::-moz-focus-inner{\r\n  border: 0;\r\n  padding: 0;\r\n}\r\n .button{\r\n  display: inline-block;\r\n  *display: inline;\r\n  zoom: 1;\r\n  padding: 6px 20px;\r\n  margin: 0;\r\n  cursor: pointer;\r\n  border: 1px solid #bbb;\r\n  overflow: visible;\r\n  font: bold 13px arial, helvetica, sans-serif;\r\n  text-decoration: none;\r\n  white-space: nowrap;\r\n  color: #555;\r\n  \r\n  background-color: #ddd;\r\n  background-image: linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0));\r\n  transition: background-color .2s ease-out;\r\n  background-clip: padding-box; /* Fix bleeding */\r\n  border-radius: 3px;\r\n  box-shadow: 0 1px 0 rgba(0, 0, 0, .3), 0 2px 2px -1px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .3) inset;\r\n  text-shadow: 0 1px 0 rgba(255,255,255, .9);\r\n  \r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n .button:hover{\r\n  background-color: #eee;\r\n  color: #555;\r\n}\r\n .button:active{\r\n  background: #e9e9e9;\r\n  position: relative;\r\n  top: 1px;\r\n  text-shadow: none;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, .3) inset;\r\n}\r\n .button[disabled], .button[disabled]:hover, .button[disabled]:active{\r\n  border-color: #eaeaea;\r\n  background: #fafafa;\r\n  cursor: default;\r\n  position: static;\r\n  color: #999;\r\n  /* Usually, !important should be avoided but here it's really needed :) */\r\n  box-shadow: none !important;\r\n  text-shadow: none !important;\r\n}\r\n /* Smaller buttons styles */\r\n .button.small{\r\n  padding: 4px 12px;\r\n}\r\n /* Larger buttons styles */\r\n .button.large{\r\n  padding: 12px 30px;\r\n  text-transform: uppercase;\r\n}\r\n .button.large:active{\r\n  top: 2px;\r\n}\r\n /* Colored buttons styles */\r\n .button.green, .button.red, .button.blue {\r\n  color: #fff;\r\n  text-shadow: 0 1px 0 rgba(0,0,0,.2);\r\n  background-image: linear-gradient(to bottom, rgba(255,255,255,.3), rgba(255,255,255,0));\r\n}\r\n /* */\r\n .button.green{\r\n  background-color: #57a957;\r\n  border-color: #57a957;\r\n}\r\n .button.green:hover{\r\n  background-color: #62c462;\r\n}\r\n .button.green:active{\r\n  background: #57a957;\r\n}\r\n /* */\r\n .button.red{\r\n  background-color: #ca3535;\r\n  border-color: #c43c35;\r\n}\r\n .button.red:hover{\r\n  background-color: #ee5f5b;\r\n}\r\n .button.red:active{\r\n  background: #c43c35;\r\n}\r\n /* */\r\n .button.blue{\r\n  background-color: #269CE9;\r\n  border-color: #269CE9;\r\n}\r\n .button.blue:hover{\r\n  background-color: #70B9E8;\r\n}\r\n .button.blue:active{\r\n  background: #269CE9;\r\n}\r\n /* */\r\n .green[disabled], .green[disabled]:hover, .green[disabled]:active{\r\n  border-color: #57A957;\r\n  background: #57A957;\r\n  color: #D2FFD2;\r\n}\r\n .red[disabled], .red[disabled]:hover, .red[disabled]:active{\r\n  border-color: #C43C35;\r\n  background: #C43C35;\r\n  color: #FFD3D3;\r\n}\r\n .blue[disabled], .blue[disabled]:hover, .blue[disabled]:active{\r\n  border-color: #269CE9;\r\n  background: #269CE9;\r\n  color: #93D5FF;\r\n}\r\n /* Group buttons */\r\n .button-group,\r\n.button-group li{\r\n  display: inline-block;\r\n  *display: inline;\r\n  zoom: 1;\r\n}\r\n .button-group{\r\n  font-size: 0; /* Inline block elements gap - fix */\r\n  margin: 0;\r\n  padding: 0;\r\n  background: rgba(0, 0, 0, .1);\r\n  border-bottom: 1px solid rgba(0, 0, 0, .1);\r\n  padding: 7px;\r\n  border-radius: 7px;\r\n}\r\n .button-group li{\r\n  margin-right: -1px; /* Overlap each right button border */\r\n}\r\n .button-group .button{\r\n  font-size: 13px; /* Set the font size, different from inherited 0 */\r\n  border-radius: 0;\r\n}\r\n .button-group .button:active{\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, .2) inset, 5px 0 5px -3px rgba(0, 0, 0, .2) inset, -5px 0 5px -3px rgba(0, 0, 0, .2) inset;  \r\n}\r\n .button-group li:first-child .button{\r\n  border-radius: 3px 0 0 3px;\r\n}\r\n .button-group li:first-child .button:active{\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, .2) inset, -5px 0 5px -3px rgba(0, 0, 0, .2) inset;\r\n}\r\n .button-group li:last-child .button{\r\n  border-radius: 0 3px 3px 0;\r\n}\r\n .button-group li:last-child .button:active{\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, .2) inset, 5px 0 5px -3px rgba(0, 0, 0, .2) inset;\r\n}\r\n"

/***/ }),

/***/ "./src/app/level/level.component.html":
/*!********************************************!*\
  !*** ./src/app/level/level.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"button-group\">\n<button *ngFor=\"let level of Levels\" value = \"level\" (click)=onSelect(level) [ngClass]=\"level === selectedLevel ? 'red button' : 'blue button'\" >{{level}}</button>\n</div>\n<app-level-container [level]=\"selectedLevel\" [hero]=\"hero\"></app-level-container>\n\n\n"

/***/ }),

/***/ "./src/app/level/level.component.ts":
/*!******************************************!*\
  !*** ./src/app/level/level.component.ts ***!
  \******************************************/
/*! exports provided: LevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelComponent", function() { return LevelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player */ "./src/app/player.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LevelComponent = /** @class */ (function () {
    function LevelComponent(playerService) {
        this.playerService = playerService;
        this.Levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    }
    LevelComponent.prototype.onSelect = function (level) {
        // Player Validation
        if (this.hero.level >= level) {
            this.selectedLevel = level;
        }
        else {
            alert('Not authorized');
        }
    };
    LevelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _player__WEBPACK_IMPORTED_MODULE_2__["Player"])
    ], LevelComponent.prototype, "hero", void 0);
    LevelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-level',
            template: __webpack_require__(/*! ./level.component.html */ "./src/app/level/level.component.html"),
            styles: [__webpack_require__(/*! ./level.component.css */ "./src/app/level/level.component.css")]
        }),
        __metadata("design:paramtypes", [_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]])
    ], LevelComponent);
    return LevelComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService.prototype.storyWriter = function (lvl) {
        if (lvl === 0) {
            return 'Instructions \n 1) All levels are incremental. Therefore, the previous level must be' +
                'completed, and the proper flag must be submitted to get to the next level.\n 2) Please keep all' +
                'flags found in a text file. This is a one page app, and accidental refreshing would reset the ' +
                'whole game, including the passed levels';
        }
        else if (lvl === 1) {
            return ' The cipher text is given. hint to the key, as well as a lookup tableis given. Use this to get the plain text which ' +
                'will be the flag';
        }
        else if (lvl === 2) {
            return 'The cipher text as well as a hint to the key is given. The player must figure out the key and decrypt it thr cipher ' +
                'text to find the flag';
        }
        else if (lvl === 3) {
            return 'The flag is hidden in a file within a folder structure. Find the flag';
        }
        else if (lvl === 4) {
            return 'The flag is hidden in a compressed file with an encoded directory. Find the flag ';
        }
        else if (lvl === 5) {
            return 'An executable to enter a password is given. Try to play around with it and find the password';
        }
        else if (lvl === 6) {
            return 'An assenmby code is given. Instructions as well as hints to the expeced anser is given in the code';
        }
        else if (lvl === 7) {
            return 'A java code is given. Use this code to reverse engineer the flag!!!';
        }
        else if (lvl === 8) {
            return 'Figure out the input value by using the given code';
        }
        else if (lvl === 9) {
            return 'In this level, you\'ll have to ask for "the Oracle\'s" help. ' +
                'You can use her credentials to find the next flag! \n' +
                'Hint: She is a part of our CTF team, so you can find her details along' +
                ' with the rest of the authors of this site!!! The password is hidden around here as well';
        }
        else if (lvl === 10) {
            return 'Check out this file!!! Use all your senses to get the flag';
        }
        else if (lvl === 11) {
            return 'Try to hack your way into Ra\'s al Ghul\'s chat';
        }
        else if (lvl === 12) {
            return 'Test';
        }
        else if (lvl === 13) {
            return 'You are given an output string. Try to find the Original string which is the flag. A similar example is given for you';
        }
        else if (lvl === 14) {
            return 'In this level "Harley" will be the one to help you get the flag';
        }
        else if (lvl === 15) {
            return 'Try reversing the Acid flower byte code and use one of the inputs as the password for the zip';
        }
        else {
            return 'test';
        }
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\r\nh2 {\r\n    color: red;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: lighter;\r\n  }\r\nbody {\r\n    margin: 2em;\r\n  }\r\nbody, input[text], button {\r\n    color: crimson;\r\n    font-family: Cambria, Georgia;\r\n  }\r\nbutton.clear {\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n  }\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\nbutton:disabled {\r\n    background-color: #eee;\r\n    color: #aaa;\r\n    cursor: auto;\r\n  }\r\nbutton.clear {\r\n    color: #333;\r\n    margin-bottom: 12px;\r\n  }"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n    <h2>Messages</h2>\n    <button class=\"clear\"\n            (click)=\"messageService.clear()\">clear</button>\n    <div *ngFor='let message of messageService.messages'> {{message}} </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/playableCharacter.ts":
/*!**************************************!*\
  !*** ./src/app/playableCharacter.ts ***!
  \**************************************/
/*! exports provided: HEROES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEROES", function() { return HEROES; });
var HEROES = [
    { id: 11, name: 'Batman', level: 15 },
    { id: 12, name: 'NightWing', level: 10 },
    { id: 13, name: 'RedHood', level: 8 },
    { id: 14, name: 'Robin', level: 1 },
    { id: 15, name: 'Red Robin', level: 6 },
    { id: 16, name: 'Batgirl', level: 1 },
    { id: 17, name: 'BatWoman', level: 1 },
    { id: 18, name: 'BatWing', level: 9 },
    { id: 19, name: 'Huntress', level: 8 },
    { id: 20, name: 'CatWoman', level: 1 }
];


/***/ }),

/***/ "./src/app/player.service.ts":
/*!***********************************!*\
  !*** ./src/app/player.service.ts ***!
  \***********************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _playableCharacter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playableCharacter */ "./src/app/playableCharacter.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerService = /** @class */ (function () {
    function PlayerService(messageService) {
        this.messageService = messageService;
    }
    PlayerService.prototype.getHeroes = function () {
        this.messageService.add('Heroes fetched');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_playableCharacter__WEBPACK_IMPORTED_MODULE_1__["HEROES"]);
    };
    PlayerService.prototype.setPlayer = function (player) {
        this.playerVal = player;
    };
    PlayerService.prototype.getPlayer = function () {
        return this.playerVal;
    };
    PlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/player.ts":
/*!***************************!*\
  !*** ./src/app/player.ts ***!
  \***************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/players/players.component.css":
/*!***********************************************!*\
  !*** ./src/app/players/players.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\r\n.heroes {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n.heroes li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n  }\r\n.heroes li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n.heroes li.selected {\r\n    background-color: #CFD8DC;\r\n    color: white;\r\n  }\r\n.heroes li.selected:hover {\r\n    background-color: #BBD8DC;\r\n    color: white;\r\n  }\r\n.heroes .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color:#405061;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/players/players.component.html":
/*!************************************************!*\
  !*** ./src/app/players/players.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"isShow\">\n<ul class = \"heroes\">\n  <li *ngFor= \" let hero of heroes\" (click)=\"onSelectX(hero)\" [class.selected]=\"hero === selectedHero\">\n    <span class = \"badge\">{{hero.id}}</span>  {{hero.name}}\n\n  </li>\n\n</ul>\n<div style=\"background-color: whitesmoke; border-radius: 20px; margin: 20px; padding: 20px\">\n  <h2>Instructions</h2>\n  <ul>\n    <li><p>All levels are incremental. Therefore, the previous level must be\n        completed, and the proper flag must be submitted to get to the next level</p></li>\n    <li><p>Please keep all flags found in a text file. This is a one page app, and accidental refreshing would reset the whole game, including the passed levels</p></li>\n    <li><p>Note That some flags are hidden in a format such as <input type=\"text\" value=\"KRXZY_CTF{'flag'}\">. You must only submit the 'flag' section. The format is to make it easier to find the flag</p></li>\n  </ul>\n</div>\n</div>\n<!-- <app-level-container [hero]=\"selectedHero\"></app-level-container> -->\n<div *ngIf=\"selectedHero\">\n<app-level [hero]=\"selectedHero\"></app-level>\n </div>\n\n"

/***/ }),

/***/ "./src/app/players/players.component.ts":
/*!**********************************************!*\
  !*** ./src/app/players/players.component.ts ***!
  \**********************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayersComponent = /** @class */ (function () {
    function PlayersComponent(playerService) {
        this.playerService = playerService;
        this.PlayerValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isShow = false;
    }
    PlayersComponent.prototype.getHeroes = function () {
        var _this = this;
        this.playerService.getHeroes().subscribe(function (heroes) { return _this.heroes = heroes; });
    };
    PlayersComponent.prototype.onSelectX = function (hero) {
        this.selectedHero = hero;
        this.PlayerValue.emit(this.selectedHero.name);
        this.playerService.setPlayer(this.selectedHero.name);
        this.isShow = !this.isShow;
    };
    PlayersComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PlayersComponent.prototype, "PlayerValue", void 0);
    PlayersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-players',
            template: __webpack_require__(/*! ./players.component.html */ "./src/app/players/players.component.html"),
            styles: [__webpack_require__(/*! ./players.component.css */ "./src/app/players/players.component.css")]
        }),
        __metadata("design:paramtypes", [_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]])
    ], PlayersComponent);
    return PlayersComponent;
}());



/***/ }),

/***/ "./src/app/theme-x/theme-x.component.css":
/*!***********************************************!*\
  !*** ./src/app/theme-x/theme-x.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay{\r\n    opacity:0.8;\r\n    background-color:#ccc;\r\n    /* position:absolute;  */\r\n     border-radius: 20px;\r\n    padding-left: 20px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 0px; \r\n    width:100%;\r\n    height:100%;\r\n    top:0px;\r\n    left:0px;\r\n    z-index:1000;\r\n}"

/***/ }),

/***/ "./src/app/theme-x/theme-x.component.html":
/*!************************************************!*\
  !*** ./src/app/theme-x/theme-x.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"overlay\">\n\n  <h1>Gotham Crusade</h1>\n  <app-players (PlayerValue)=\"valueInput($event)\"></app-players>\n</div>\n"

/***/ }),

/***/ "./src/app/theme-x/theme-x.component.ts":
/*!**********************************************!*\
  !*** ./src/app/theme-x/theme-x.component.ts ***!
  \**********************************************/
/*! exports provided: ThemeXComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeXComponent", function() { return ThemeXComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player.service */ "./src/app/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeXComponent = /** @class */ (function () {
    function ThemeXComponent(playerService) {
        this.playerService = playerService;
        this.player = 'Batman';
    }
    ThemeXComponent.prototype.ngOnInit = function () {
    };
    ThemeXComponent.prototype.valueInput = function (val) {
        console.log('Hits on Emitter: ' + val);
        document.body.style.backgroundImage = 'Assets/All about the bat/nw.jpg';
        document.body.style.backgroundColor = 'red';
    };
    ThemeXComponent.prototype.ngOnChanges = function () {
        if (this.playerService.getPlayer()) {
            this.player = this.playerService.getPlayer();
            alert(this.player);
            console.log('Hits on Changes: ' + this.player);
        }
    };
    ThemeXComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-theme-x',
            template: __webpack_require__(/*! ./theme-x.component.html */ "./src/app/theme-x/theme-x.component.html"),
            styles: [__webpack_require__(/*! ./theme-x.component.css */ "./src/app/theme-x/theme-x.component.css")]
        }),
        __metadata("design:paramtypes", [_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]])
    ], ThemeXComponent);
    return ThemeXComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Notes\Y3S2\ISP\CTF\ctfTest1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map