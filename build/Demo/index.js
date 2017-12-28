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

	var $app_template$ = __webpack_require__(4)
	var $app_style$ = __webpack_require__(32)
	var $app_script$ = __webpack_require__(6)
	
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

/***/ 4:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "doc-page"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "doc-row"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "$set测试：vm上赋值：修改Test1"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "changeTest1"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "$set测试：增加属性"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "addTest1Gender"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "$set测试：增加属性：通过$set"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "addTest1GenderBySet"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "删除数据"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "delTest1"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.test1&&this.test1.name}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.test1&&this.test1.gender}
	          }
	        },
	        {
	          "type": "block",
	          "attr": {
	            "vFor": function () {return this.text11.arr}
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.$item}
	              }
	            }
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return (this.text11&&this.text11.arr) + ' ' + (12121)}
	          },
	          "events": {
	            "click": "textPush"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "doc-row"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "$set测试：简单对象：修改Test2"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "changeTest2"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "$set测试：增加属性"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "addTest2Gender"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "$set测试：增加属性：通过$set"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "addTest2GenderBySet"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "删除数据"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "delTest2"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.test2&&this.test2.name}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.test2&&this.test2.gender}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "doc-row"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "$set测试：简单对象：修改Test3"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "changeTest3"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "$set测试：增加属性"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "addTest3Gender"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "$set测试：增加属性：通过$set"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "addTest3GenderBySet"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "删除数据"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "delTest3"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.test3&&this.test3.name}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.test3&&this.test3.gender&&this.test3.gender.text}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "doc-row"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "$set测试：对象数组：增加Test4"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "addTest4"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "$set测试：对象数组：使用$set增加Test4"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "addTest4BySet"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "$set测试：对象数组：增加Test4的对象"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "addTest4Object"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "$set测试：对象数组：使用$set增加Test4的对象"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "addTest4ObjectBySet"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "$set测试：对象数组：修改Test4的对象"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "modifyTest4Object"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "$set测试：对象数组：使用$set修改Test4的对象"
	          },
	          "classList": [
	            "doc-row-desc"
	          ],
	          "events": {
	            "click": "modifyTest4ObjectBySet"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.$item.name+' --- '+this.$item.gender+' --- '+this.$item.age}
	          },
	          "repeat": function () {return this.test4}
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 6:
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: {
	    test2: {
	      name: '张三'
	    },
	    test3: {
	      name: '张三'
	    }
	  },
	  onInit: function onInit() {
	    this.$page.setTitleBar({ text: '$set(exp, val)测试' });
	  },
	  textPush: function textPush() {
	    this.$set('text11', {
	      arr: []
	    });
	
	    this.text11.arr = ['wukai', 'nishi', 'tianxia'];
	  },
	  changeTest1: function changeTest1() {
	    this.test1 = {
	      name: '李四',
	      gender: '男1'
	    };
	  },
	  addTest1Gender: function addTest1Gender() {
	    this.test1.gender = '男2';
	  },
	  addTest1GenderBySet: function addTest1GenderBySet() {
	    this.$set('test1', {
	      name: '李四3',
	      gender: '男3'
	    });
	  },
	  delTest1: function delTest1() {
	    this.$delete('test1');
	  },
	  changeTest2: function changeTest2() {
	    this.test2 = {
	      name: '李四',
	      gender: '男1'
	    };
	  },
	  addTest2Gender: function addTest2Gender() {
	    this.test2.gender = '男2';
	  },
	  addTest2GenderBySet: function addTest2GenderBySet() {
	    this.$set('test2.gender', ['nihaoma', 'wohen', 'purple']);
	  },
	  delTest2: function delTest2() {
	    this.$delete('test2');
	  },
	  changeTest3: function changeTest3() {
	    this.test3 = {
	      name: '李四',
	      gender: { text: '男1' }
	    };
	  },
	  addTest3Gender: function addTest3Gender() {
	    this.test3.gender.text = '男2';
	  },
	  addTest3GenderBySet: function addTest3GenderBySet() {
	    this.$set('test3.gender', { text: '男3' });
	  },
	  delTest3: function delTest3() {
	    this.$delete('test3');
	  },
	  addTest4: function addTest4() {
	    this.test4 = [];
	  },
	  addTest4Object: function addTest4Object() {
	    this.test4.push({
	      name: '张三',
	      gender: '男1'
	    });
	  },
	  addTest4BySet: function addTest4BySet() {
	    this.$set('test4', []);
	  },
	  addTest4ObjectBySet: function addTest4ObjectBySet() {
	    this.$set('test4.0', {
	      name: '李四',
	      gender: '男2'
	    });
	  },
	  modifyTest4Object: function modifyTest4Object() {
	    this.test4[0].age = 21;
	  },
	  modifyTest4ObjectBySet: function modifyTest4ObjectBySet() {
	    this.$set('test4.0.age', 23);
	  }
	};}

/***/ },

/***/ 32:
/***/ function(module, exports) {

	module.exports = {
	  ".doc-page": {
	    "flexDirection": "column"
	  },
	  ".doc-page .doc-row": {
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "doc-page"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "doc-row"
	        }
	      ]
	    }
	  },
	  ".doc-page .doc-row text": {
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "20px",
	    "paddingLeft": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "doc-page"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "doc-row"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
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