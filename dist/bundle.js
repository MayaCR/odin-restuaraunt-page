/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
{
	/* <div>Phone: 1(744)483-3283</div>
			<h1>Menu</h1>
			<div>
				<ul>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
				</ul>
				<ul>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
					<li>Menu Item <span>$</span></li>
				</ul>
</div> */
}

function createMenu() {
	const content = document.getElementById('content')
	const pageHeader = document.createElement('h1')

	pageHeader.textContent = 'Menu'
	return content.appendChild(pageHeader)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");


const menuButton = document.getElementById('menu')
const aboutButton = document.getElementById('about')
const contactButton = document.getElementById('contact')
const content = document.getElementById('content')

menuButton.addEventListener('click', () => {
	console.log('Menu button clicked')
	content.textContent = ''
	;(0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])()
})

aboutButton.addEventListener('click', () => {
	console.log('About button clicked')
})

contactButton.addEventListener('click', () => {
	console.log('Contact button clicked')
})

// loads web app with menu(home) from start
;(0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])()

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map