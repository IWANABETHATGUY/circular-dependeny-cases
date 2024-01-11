(function() {
var __webpack_modules__ = {
"./a.mjs": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  a: function() { return a; }
});
/* harmony import */var _b_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b.mjs */"./b.mjs");
// a -> b -> a

console.log('evaluating a.mjs');
 const a = (()=>{
    try {
        return (0, _b_mjs__WEBPACK_IMPORTED_MODULE_0__.b);
    } catch  {
        console.error('b is in TDZ');
        process.exit(1);
    }
})() + 1;
}),
"./b.mjs": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  b: function() { return b; }
});
/* harmony import */var _a_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.mjs */"./a.mjs");
// b -> a -> b

console.log('evaluating b.mjs');
 const b = (()=>{
    try {
        return (0, _a_mjs__WEBPACK_IMPORTED_MODULE_0__.a);
    } catch  {
        console.error('a is in TDZ');
        process.exit(1);
    }
})() + 1;
}),
"./entry-a.mjs": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _a_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.mjs */"./a.mjs");
/* harmony import */var _b_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b.mjs */"./b.mjs");


console.log({
    a: _a_mjs__WEBPACK_IMPORTED_MODULE_0__.a,
    b: _b_mjs__WEBPACK_IMPORTED_MODULE_1__.b
});
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