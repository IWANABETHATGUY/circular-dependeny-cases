(function() {
var __webpack_modules__ = {
"./a.mjs": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; },
  willTDZ: function() { return willTDZ; }
});
/* harmony import */var _b_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b.mjs */"./b.mjs");
// a -> b -> a

console.log('a.mjs evaluating');
_b_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]();
_b_mjs__WEBPACK_IMPORTED_MODULE_0__.willTDZ();
// prevent inlining tdz as a const
let tdz = Date.now() > 0;
 function willTDZ() {
    try {
        console.error(`a typeof tdz`, typeof tdz);
    } catch (e) {
        console.error('a did tdz');
    }
}
function __WEBPACK_DEFAULT_EXPORT__(){
    console.log('a default()');
}
}),
"./b.mjs": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; },
  willTDZ: function() { return willTDZ; }
});
/* harmony import */var _a_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.mjs */"./a.mjs");
// b -> a -> b

console.log('b.mjs evaluating');
_a_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]();
_a_mjs__WEBPACK_IMPORTED_MODULE_0__.willTDZ();
// prevent inlining tdz as a const
let tdz = Date.now() > 0;
 function willTDZ() {
    try {
        console.error(`b typeof tdz`, typeof tdz);
    } catch (e) {
        console.error('b threw on tdz');
    }
}
function __WEBPACK_DEFAULT_EXPORT__(){
    console.log('b default()');
}
}),
"./entry-a.mjs": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _a_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.mjs */"./a.mjs");
/* harmony import */var _b_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b.mjs */"./b.mjs");


}),

}
// The module cache
 var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
// Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
      return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
       exports: {}
      });
      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
// Return the exports of the module
 return module.exports;

}
// webpack/runtime/define_property_getters
!function() {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
}();
// webpack/runtime/make_namespace_object
!function() {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

}();
// webpack/runtime/has_own_property
!function() {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

}();
var __webpack_exports__ = __webpack_require__("./entry-a.mjs");
})()

//# sourceMappingURL=a.js.map