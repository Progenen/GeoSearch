/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n    const burger = document.querySelector(\".header__burger-btn\");\n    const mobMenu = document.querySelector(\".mobmenu\");\n    const headerInfo = document.querySelector(\".header__info\");\n    const headerCallBtn = document.querySelector(\".header__call-btn\");\n    const headerMenu = document.querySelector(\".header__menu\");\n    const headerCall = document.querySelector(\".header__call\");\n    const header = document.querySelector(\"header\");\n\n    burger.addEventListener(\"click\", () => {\n        burger.classList.toggle(\"active\");\n        mobMenu.classList.toggle(\"active\");\n        document.body.classList.toggle(\"lock\");\n\n        mobMenu.style.paddingTop = header.getBoundingClientRect().height + \"px\";\n    });\n\n    if (window.innerWidth <= 992) {\n        mobMenu.querySelector(\".mobmenu__bottom\").append(headerInfo, headerCallBtn);\n        mobMenu.style.paddingTop = header.getBoundingClientRect().height + \"px\";\n    }\n\n    if (window.innerWidth <= 768) {\n        mobMenu.querySelector(\".mobmenu__top\").append(headerMenu);\n        mobMenu.querySelector(\".mobmenu__bottom\").append(headerCall);\n        mobMenu.querySelector(\".mobmenu__bottom\").append(headerCallBtn);\n        mobMenu.style.paddingTop = header.getBoundingClientRect().height + \"px\";\n    }\n});\n\n//# sourceURL=webpack://project-name/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;