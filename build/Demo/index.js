(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(37)
	var $app_template$ = __webpack_require__(1)
	var $app_style$ = __webpack_require__(40)
	var $app_script$ = __webpack_require__(3)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": "15455454"
	      },
	      "classList": [
	        "title"
	      ],
	      "events": {
	        "click": "press"
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.channel}
	      }
	    },
	    {
	      "type": "block",
	      "attr": {},
	      "repeat": {
	        "exp": function () {return this.obj[this.channel]},
	        "value": "item"
	      },
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.item}
	          }
	        }
	      ]
	    },
	    {
	      "type": "port1",
	      "attr": {},
	      "events": {
	        "wukai": "getdata"
	      }
	    }
	  ]
	}

/***/ },

/***/ 3:
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: {
	    title: '直达服务',
	    obj: {
	      name: ['wukai', 'wukai', 'wukai', 'wukai', 'wukai', 'wukai']
	    },
	    channel: 'sex',
	    name: 'name',
	    num: 0,
	    list: []
	  },
	  getdata: function getdata(e) {},
	  onInit: function onInit() {
	    this.obj[this.channel] = [];
	  },
	  press: function press() {
	    this.obj[this.channel].push('values');
	    console.log(JSON.stringify(this.obj[this.channel]));
	  }
	};}

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(38)
	var $app_script$ = __webpack_require__(39)
	
	$app_define$('@app-component/port1', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	})


/***/ },

/***/ 38:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "box"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": "你好吗12313"
	      },
	      "events": {
	        "click": "pess"
	      }
	    }
	  ]
	}

/***/ },

/***/ 39:
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		onInit: function onInit() {},
		pess: function pess() {
			console.log(1212);
			this.$emit('wukai', { name: 'wukai' });
		}
	};}

/***/ },

/***/ 40:
/***/ function(module, exports) {

	module.exports = {
	  ".container": {
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  ".title": {
	    "fontSize": "40px",
	    "textAlign": "center"
	  }
	}

/***/ }

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map