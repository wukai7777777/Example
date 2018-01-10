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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(29)
	__webpack_require__(10)
	__webpack_require__(22)
	var $app_template$ = __webpack_require__(33)
	var $app_style$ = __webpack_require__(34)
	var $app_script$ = __webpack_require__(35)
	
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(7)
	var $app_style$ = __webpack_require__(8)
	var $app_script$ = __webpack_require__(9)
	
	$app_define$('@app-component/bottom-loading', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "load-more"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {
	        "show": function () {return !this.noData}
	      },
	      "children": [
	        {
	          "type": "div",
	          "attr": {
	            "show": function () {return this.loading}
	          },
	          "children": [
	            {
	              "type": "progress",
	              "attr": {
	                "type": "circular"
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "加载更多...."
	              }
	            }
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "show": function () {return !this.loading},
	            "value": "释放加载更多"
	          }
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "attr": {
	        "show": function () {return this.noData},
	        "value": "没有更多数据了"
	      }
	    }
	  ]
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  ".load-more": {
	    "flex": 1,
	    "justifyContent": "center",
	    "height": "100px"
	  },
	  ".load-more text": {
	    "marginLeft": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "load-more"
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

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: ['loading', 'noData']
	};}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(11)
	var $app_style$ = __webpack_require__(12)
	var $app_script$ = __webpack_require__(13)
	
	$app_define$('@app-component/layered', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "layered"
	  ],
	  "children": [
	    {
	      "type": "slot",
	      "attr": {}
	    },
	    {
	      "type": "tabs",
	      "attr": {},
	      "children": [
	        {
	          "type": "tab-bar",
	          "attr": {},
	          "classList": [
	            "footer-wrap"
	          ],
	          "children": [
	            {
	              "type": "block",
	              "attr": {},
	              "repeat": {
	                "exp": function () {return this.footerList},
	                "key": "index",
	                "value": "item"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "item"
	                  ],
	                  "events": {
	                    "click": function (evt) {this.routes(this.item,this.index,evt)}
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": function () {return (this.index==this.active)?this.item.img[1]:this.item.img[0]}
	                      },
	                      "classList": [
	                        "icon"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.item.pages}
	                      },
	                      "classList": [
	                        "pages"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
	  ".layered": {
	    "flex": 1
	  },
	  ".layered .footer-wrap": {
	    "flex": 1,
	    "position": "fixed",
	    "bottom": "0px",
	    "flexDirection": "row",
	    "backgroundColor": "#ffffff",
	    "borderTopWidth": "1px",
	    "borderTopColor": "#eeeeee",
	    "borderRightColor": "#eeeeee",
	    "borderBottomColor": "#eeeeee",
	    "borderLeftColor": "#eeeeee",
	    "height": "100px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "layered"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "footer-wrap"
	        }
	      ]
	    }
	  },
	  ".layered .footer-wrap .item": {
	    "flex": 1,
	    "lineHeight": "100px",
	    "fontSize": "32px",
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "layered"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "footer-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item"
	        }
	      ]
	    }
	  },
	  ".layered .footer-wrap .item .icon": {
	    "width": "50px",
	    "height": "50px",
	    "flexShrink": 0,
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "layered"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "footer-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "icon"
	        }
	      ]
	    }
	  },
	  ".layered .footer-wrap .item .pages": {
	    "marginTop": "3px",
	    "color": "#666666",
	    "fontSize": "24px",
	    "textAlign": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "layered"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "footer-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "pages"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		props: ['active'],
		data: {
			footerList: [{
				img: ['../common/img/btn_home_normal@2x.png', '../common/img/btn_home_selected@2x.png'],
				pages: '首页',
				route: 'javascript:;'
			}, {
				img: ['../common/img/tegong@2x.png', '../common/img/tegongSelected@2x.png'],
				pages: '特工',
				route: 'taobaoke'
			}, {
				img: ['../common/img/btn_chat_normal@2x.png', '../common/img/btn_chat_selected@2x.png'],
				pages: '资讯',
				route: 'msg-news-list'
			}, {
				img: ['../common/img/btn_mine_normal@2x.png', '../common/img/btn_mine_selected@2x.png'],
				pages: '我的',
				route: 'javascript:;'
			}]
		},
		routes: function routes(item, index) {
			console.log(this.active, index);
			if (this.active == index) {
				return;
			}
			_system2.default.replace({
				uri: item.route,
				params: { current: index }
			});
		}
	};}

/***/ },
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6)
	var $app_template$ = __webpack_require__(23)
	var $app_style$ = __webpack_require__(24)
	var $app_script$ = __webpack_require__(25)
	
	$app_define$('@app-component/tbk-list', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "list",
	  "attr": {
	    "scrollpage": function () {return true}
	  },
	  "events": {
	    "scrollbottom": "getDateList",
	    "scroll": "scroll"
	  },
	  "classList": [
	    "datalist"
	  ],
	  "children": [
	    {
	      "type": "block",
	      "attr": {},
	      "repeat": {
	        "exp": function () {return this.listDatas[this.channels]},
	        "value": "item"
	      },
	      "children": [
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "list-data",
	            "show": "(channels in listDatas) ? true : false"
	          },
	          "classList": [
	            "wrap-list"
	          ],
	          "events": {
	            "click": function (evt) {this.goTodetail(evt)}
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.item.pict_url}
	              },
	              "classList": [
	                "product-image"
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "message-wrap"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "msg-left"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.item.title}
	                      },
	                      "classList": [
	                        "title"
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "porduct-meta"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return '¥' + (this.item.zk_final_price)}
	                          },
	                          "classList": [
	                            "fl"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return '¥' + (this.item.price)}
	                          },
	                          "classList": [
	                            "fr"
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "msg-right"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "分享"
	                      },
	                      "classList": [
	                        "share"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {},
	                      "classList": [
	                        "price-w"
	                      ],
	                      "children": [
	                        {
	                          "type": "span",
	                          "attr": {
	                            "value": " 赚 "
	                          }
	                        },
	                        {
	                          "type": "span",
	                          "attr": {
	                            "value": function () {return this.item.user_get_price}
	                          },
	                          "classList": [
	                            "price"
	                          ]
	                        },
	                        {
	                          "type": "span",
	                          "attr": {
	                            "value": " 元 "
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "list-item",
	      "attr": {
	        "type": "bottom-loading"
	      },
	      "children": [
	        {
	          "type": "bottom-loading",
	          "attr": {
	            "loading": function () {return this.loadingStr},
	            "noData": function () {return this.noDataStr}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = {
	  ".datalist": {
	    "flex": 1,
	    "paddingLeft": "30px",
	    "paddingRight": "30px",
	    "paddingBottom": "100px"
	  },
	  ".datalist .wrap-list": {
	    "paddingTop": "20px",
	    "paddingBottom": "20px",
	    "borderBottomWidth": "1px",
	    "borderTopColor": "#cccccc",
	    "borderRightColor": "#cccccc",
	    "borderBottomColor": "#cccccc",
	    "borderLeftColor": "#cccccc",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "datalist"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "wrap-list"
	        }
	      ]
	    }
	  },
	  ".datalist .wrap-list .product-image": {
	    "width": "150px",
	    "height": "150px",
	    "flexShrink": 0,
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "datalist"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "wrap-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "product-image"
	        }
	      ]
	    }
	  },
	  ".datalist .wrap-list .message-wrap": {
	    "flex": 1,
	    "paddingLeft": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "datalist"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "wrap-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "message-wrap"
	        }
	      ]
	    }
	  },
	  ".datalist .wrap-list .message-wrap .msg-left": {
	    "flexDirection": "column",
	    "alignItems": "flex-start",
	    "flex": 1,
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "datalist"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "wrap-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "message-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-left"
	        }
	      ]
	    }
	  },
	  ".datalist .wrap-list .message-wrap .msg-left .title": {
	    "fontSize": "27px",
	    "color": "#666666",
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "lineHeight": "40px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "datalist"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "wrap-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "message-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-left"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title"
	        }
	      ]
	    }
	  },
	  ".datalist .wrap-list .message-wrap .msg-left .porduct-meta": {
	    "fontSize": "24px",
	    "marginTop": "14px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "datalist"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "wrap-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "message-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-left"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "porduct-meta"
	        }
	      ]
	    }
	  },
	  ".datalist .wrap-list .message-wrap .msg-left .porduct-meta .fl": {
	    "fontSize": "26px",
	    "color": "#ff9448",
	    "marginRight": "10px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "datalist"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "wrap-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "message-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-left"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "porduct-meta"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "fl"
	        }
	      ]
	    }
	  },
	  ".datalist .wrap-list .message-wrap .msg-left .porduct-meta .fr": {
	    "textDecoration": "line-through",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "datalist"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "wrap-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "message-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-left"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "porduct-meta"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "fr"
	        }
	      ]
	    }
	  },
	  ".datalist .wrap-list .message-wrap .msg-right": {
	    "flexDirection": "column",
	    "width": "150px",
	    "marginLeft": "10px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "datalist"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "wrap-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "message-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-right"
	        }
	      ]
	    }
	  },
	  ".datalist .wrap-list .message-wrap .msg-right .share": {
	    "paddingTop": "15px",
	    "paddingRight": "15px",
	    "paddingBottom": "15px",
	    "paddingLeft": "15px",
	    "textAlign": "center",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderTopColor": "#666666",
	    "borderRightColor": "#666666",
	    "borderBottomColor": "#666666",
	    "borderLeftColor": "#666666",
	    "borderRadius": "4px",
	    "fontSize": "30px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "datalist"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "wrap-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "message-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-right"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "share"
	        }
	      ]
	    }
	  },
	  ".datalist .wrap-list .message-wrap .msg-right .price-w": {
	    "flexDirection": "column",
	    "fontSize": "23px",
	    "fontWeight": "bold",
	    "color": "#ff9448",
	    "paddingTop": "10px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "datalist"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "wrap-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "message-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-right"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "price-w"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.network');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _system5 = $app_require$('@app-module/system.prompt');
	
	var _system6 = _interopRequireDefault(_system5);
	
	var _system7 = $app_require$('@app-module/system.webview');
	
	var _system8 = _interopRequireDefault(_system7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		props: {
			listDatas: {
				type: Object,
				default: {}
			},
			channelArr: {
				type: Array,
				default: []
			},
			curIndex: {
				type: Number,
				default: 0
			}
		},
		data: function data() {
			return {
				listData: {},
				datalist: [],
				loading: [],
				loadingStr: true,
				noData: [],
				noDataStr: false,
				isNextLoad: [],
				page: [],
				pageSize: 20,
				channels: ''
			};
		},
		onInit: function onInit() {
			var self = this;
	
			this.$watch('channelArr', 'callBackChannel');
			this.$watch('curIndex', 'selectChannel');
	
			this.page[this.curIndex] = 1;
			this.loading[this.curIndex] = true;
			this.loadingStr = this.loading[this.curIndex];
			this.noData[this.curIndex] = false;
			this.noDataStr = this.noData[this.curIndex];
			this.isNextLoad[this.curIndex] = true;
		},
		callBackChannel: function callBackChannel() {
			this.channels = this.channelArr[this.curIndex].channel;
			this.listData[this.channels] = [];
			this.getDateList();
		},
		selectChannel: function selectChannel() {
			this.channels = this.channelArr[this.curIndex].channel;
	
			if (this.channels in this.listData) {
				this.noDataStr = this.noData[this.curIndex];
				this.loadingStr = this.loading[this.curIndex];
				return;
			} else {
				this.page[this.curIndex] = 1;
				this.listData[this.channels] = [];
				this.loading[this.curIndex] = true;
				this.loadingStr = this.loading[this.curIndex];
				this.noData[this.curIndex] = false;
				this.noDataStr = this.noData[this.curIndex];
				this.isNextLoad[this.curIndex] = true;
				this.getDateList();
			}
		},
		getDateList: function getDateList(isRefresh) {
			var self = this;
			_system4.default.getType({
				success: function success(data) {
					if (data.type !== 'none') {
						if (self.isNextLoad[self.curIndex]) {
							self.loading[self.curIndex] = true;
							self.loadingStr = self.loading[self.curIndex];
							self.getTaoBaoKe(isRefresh);
						}
					} else {
						self.loading[self.curIndex] = false;
						self.loadingStr = self.loading[self.curIndex];
						_system6.default.showToast({
							message: '无网络'
						});
					}
				}
			});
		},
		getTaoBaoKe: function getTaoBaoKe(isRefresh) {
			var self = this;
			self.channels = self.channelArr[self.curIndex].channel;
			console.log(self.page[self.curIndex], 1);
	
			console.log(self.channels, 3);
			_system2.default.fetch({
				url: 'https://jz-c.doumi.com/api/v3/client/tbk/lists',
				data: {
					page: self.page[self.curIndex],
					pageSize: self.pageSize,
					channel: self.channels
				},
				header: {
					accessToken: natives.accessToken
				},
				success: function success(data) {
					console.log(1);
	
					if (!!data && !!data.data && !!JSON.parse(data.data).cityInfo && !!JSON.parse(data.data).data && JSON.parse(data.data).data.length > 0) {
						var list = JSON.parse(data.data).data;
						var len = JSON.parse(data.data).data.length;
						if (self.page[self.curIndex] == 1) {
							self.listData[self.channels] = list;
	
							if (isRefresh) {
								_system6.default.showToast({
									message: '已经是最新了'
								});
							}
						} else {
							self.listData[self.channels] = self.listData[self.channels].concat(list);
						}
	
						self.$emit('channeldata', self.listData);
						console.log(list.length, 'length');
						self.noData[self.curIndex] = false;
	
						self.noDataStr = self.noData[self.curIndex];
						self.isNextLoad[self.curIndex] = true;
	
						self.loading[self.curIndex] = false;
						self.loadingStr = self.loading[self.curIndex];
	
						++self.page[self.curIndex];
						console.log(2);
					} else if (JSON.parse(data.data).data.length == 0) {
						console.log(3);
						self.isNextLoad[self.curIndex] = false;
	
						self.noData[self.curIndex] = true;
	
						self.noDataStr = self.noData[self.curIndex];
					}
				},
				fail: function fail(data, code) {
					_system6.default.showToast({
						message: 'handling fail ' + code
					});
				}
			});
		},
		goTodetail: function goTodetail() {
			_system8.default.loadUrl({
				url: 'https://www.mi.com'
			});
		}
	};}

/***/ },
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(30)
	var $app_style$ = __webpack_require__(31)
	var $app_script$ = __webpack_require__(32)
	
	$app_define$('@app-component/banner', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "swiper",
	  "attr": {
	    "autoplay": function () {return this.autoPlay},
	    "interval": function () {return this.interval},
	    "indicator": function () {return this.indicator}
	  },
	  "classList": [
	    "swiper"
	  ],
	  "children": [
	    {
	      "type": "block",
	      "attr": {},
	      "repeat": function () {return this.banners},
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.$item.imageUrl}
	          },
	          "classList": [
	            "banners"
	          ],
	          "events": {
	            "click": function (evt) {this.goToBnaner(this.$item.redirectUrl,evt)}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = {
	  ".swiper-wrap": {
	    "paddingTop": "30px",
	    "paddingBottom": "30px"
	  },
	  ".swiper-wrap .swiper": {
	    "flexDirection": "column",
	    "width": "100%",
	    "slideWidth": "100%",
	    "height": "250px",
	    "resizeMode": "cover",
	    "indicatorColor": "rgba(0,0,0,0.2)",
	    "indicatorSelectedColor": "#FFFF00",
	    "indicatorSize": "10px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "swiper-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "swiper"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.network');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _system5 = $app_require$('@app-module/system.prompt');
	
	var _system6 = _interopRequireDefault(_system5);
	
	var _system7 = $app_require$('@app-module/system.webview');
	
	var _system8 = _interopRequireDefault(_system7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		props: ['banners', "autoPlay", "interval", "indicator"],
		onReady: function onReady() {},
		goToBnaner: function goToBnaner(url) {
			console.log(url);
			_system8.default.loadUrl({
				url: url
			});
		}
	};}

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "layered",
	  "attr": {
	    "active": function () {return this.current}
	  },
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "slot-wrap"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {
	            "show": "bannerData.length>0"
	          },
	          "classList": [
	            "swiper-wrap"
	          ],
	          "events": {
	            "disappear": "showMask",
	            "appear": "hideMask"
	          },
	          "children": [
	            {
	              "type": "banner",
	              "attr": {
	                "banners": function () {return this.bannerData},
	                "interval": function () {return this.interval},
	                "autoPlay": function () {return this.autoPlay},
	                "indicator": function () {return this.indicator}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {
	            "show": function () {return this.channels.length>0}
	          },
	          "classList": [
	            "tabs-wrap"
	          ],
	          "children": [
	            {
	              "type": "tabs",
	              "attr": {},
	              "events": {
	                "change": "changeIndex"
	              },
	              "children": [
	                {
	                  "type": "tab-bar",
	                  "attr": {
	                    "mode": "scrollable"
	                  },
	                  "classList": [
	                    "tabs-item"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "channels"
	                      ],
	                      "repeat": {
	                        "exp": function () {return this.channels},
	                        "key": "index",
	                        "value": "item"
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.item.text}
	                          },
	                          "classList": [
	                            "text"
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": function () {return ['line', this.index==this.curIndex?'active':'']}
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "tbk-list",
	          "attr": {
	            "listDatas": function () {return this.listData},
	            "curIndex": function () {return this.curIndex},
	            "channelArr": function () {return this.channels}
	          },
	          "events": {
	            "channeldata": "getListData"
	          }
	        },
	        {
	          "type": "div",
	          "attr": {
	            "show": function () {return this.isShow}
	          },
	          "classList": [
	            "tabs-wrap"
	          ],
	          "style": {
	            "position": "fixed"
	          },
	          "children": [
	            {
	              "type": "tabs",
	              "attr": {},
	              "events": {
	                "change": "changeIndex"
	              },
	              "children": [
	                {
	                  "type": "tab-bar",
	                  "attr": {
	                    "mode": "scrollable"
	                  },
	                  "classList": [
	                    "tabs-item"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "channels"
	                      ],
	                      "repeat": {
	                        "exp": function () {return this.channels},
	                        "key": "index",
	                        "value": "item"
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.item.text}
	                          },
	                          "classList": [
	                            "text"
	                          ]
	                        },
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": function () {return ['line', this.index==this.curIndex?'active':'']}
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = {
	  ".tabs-wrap": {
	    "backgroundColor": "#ffffff"
	  },
	  ".tabs-wrap .tabs-item": {
	    "flexDirection": "row",
	    "flex": 1,
	    "borderBottomWidth": "1px",
	    "borderTopColor": "#cccccc",
	    "borderRightColor": "#cccccc",
	    "borderBottomColor": "#cccccc",
	    "borderLeftColor": "#cccccc",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tabs-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tabs-item"
	        }
	      ]
	    }
	  },
	  ".tabs-wrap .tabs-item .channels": {
	    "flex": 1,
	    "flexDirection": "column",
	    "width": "200px",
	    "height": "88px",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tabs-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tabs-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "channels"
	        }
	      ]
	    }
	  },
	  ".tabs-wrap .tabs-item .channels .text": {
	    "flexShrink": 0,
	    "color": "#666666",
	    "lineHeight": "60px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tabs-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tabs-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "channels"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "text"
	        }
	      ]
	    }
	  },
	  ".tabs-wrap .tabs-item .channels .line": {
	    "width": "40px",
	    "height": "8px",
	    "borderRadius": "4px",
	    "marginTop": "8px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tabs-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tabs-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "channels"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "line"
	        }
	      ]
	    }
	  },
	  ".tabs-wrap .tabs-item .channels .active": {
	    "backgroundColor": "#ff9448",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tabs-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tabs-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "channels"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "active"
	        }
	      ]
	    }
	  },
	  ".slot-wrap": {
	    "flexDirection": "column"
	  }
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.network');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _system5 = $app_require$('@app-module/system.prompt');
	
	var _system6 = _interopRequireDefault(_system5);
	
	var _system7 = $app_require$('@app-module/system.webview');
	
	var _system8 = _interopRequireDefault(_system7);
	
	var _system9 = $app_require$('@app-module/system.app');
	
	var _system10 = _interopRequireDefault(_system9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		props: ['current'],
		data: {
			bannerData: [],
			channels: [],
			isRefreshing: false,
			autoPlay: true,
			interval: 3000,
			indicator: true,
			isShow: false,
			appearCount: 0,
			curIndex: 0,
			listData: {}
		},
		onInit: function onInit() {
			var self = this;
			this.$page.setTitleBar({ text: '淘宝客下拉数据' });
			_system4.default.getType({
				success: function success(data) {
					if (data.type !== 'none') {
						self.loadBanner();
						self.getChannel();
					} else {
						_system6.default.showToast({
							message: '无网络'
						});
					}
				}
			});
		},
		getListData: function getListData(e) {
			this.listData = {};
			this.listData = e.detail;
		},
		scroll: function scroll(e) {},
		loadBanner: function loadBanner() {
			var self = this;
			_system2.default.fetch({
				url: "https://jz-c.doumi.com/api/v3/client/message/index",
				dada: {
					userId: 13215433,
					platform: 'android',
					deviceToken: 'c6a1341191398631a198c02cf6f26604'
				},
				header: {
					accessToken: natives.accessToken
				},
				success: function success(data) {
					if (data.code == 200 && !!data.data && !!JSON.parse(data.data).data && !!JSON.parse(data.data).data.zhangyu && !!JSON.parse(data.data).data.zhangyu.data) {
						self.bannerData = JSON.parse(data.data).data.zhangyu.data;
					}
				},
				fail: function fail(data, code) {
					_system6.default.showToast({
						message: 'handling fail ' + code
					});
				}
			});
		},
		refresh: function refresh(e) {
			this.page = 1;
	
			this.isNextLoad = true;
			this.isRefreshing = e.refreshing;
			this.loadBanner();
			this.getDateList(true);
		},
		hideMask: function hideMask() {
			if (this.appearCount) {
				this.isShow = false;
			} else {
				++this.appearCount;
			}
		},
		showMask: function showMask() {
			this.isShow = true;
		},
		goTodetail: function goTodetail() {
			_system8.default.loadUrl({
				url: 'https://www.mi.com'
			});
		},
		getChannel: function getChannel() {
			var self = this;
	
			_system2.default.fetch({
				url: "https://jz-c.doumi.com/api/v3/client/tbk/category",
				header: {
					accessToken: natives.accessToken
				},
				success: function success(data) {
					if (!!data.code && !!JSON.parse(data.data) && !!JSON.parse(data.data).result) {
						self.channels = JSON.parse(data.data).result;
					}
				},
				fail: function fail(data, code) {
					_system6.default.showToast({
						message: 'handling fail ' + code
					});
				}
			});
		},
		changeIndex: function changeIndex(e) {
			this.curIndex = e.index;
		}
	};}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map