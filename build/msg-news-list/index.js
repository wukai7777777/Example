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

	__webpack_require__(6)
	__webpack_require__(10)
	var $app_template$ = __webpack_require__(14)
	var $app_style$ = __webpack_require__(15)
	var $app_script$ = __webpack_require__(16)
	
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
/* 14 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "layered",
	  "attr": {
	    "active": function () {return this.current}
	  },
	  "children": [
	    {
	      "type": "list",
	      "attr": {},
	      "events": {
	        "scrollbottom": "getMsglist"
	      },
	      "classList": [
	        "msg-list"
	      ],
	      "children": [
	        {
	          "type": "block",
	          "attr": {},
	          "repeat": {
	            "exp": function () {return this.datalist},
	            "value": "item"
	          },
	          "shown": function () {return this.item.data.data.length!=0},
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "type": function () {return (this.item.data.templateType==2)?'mod-list-item':'mod-list-item1'}
	              },
	              "classList": [
	                "mod-list-item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.item.create_at}
	                  },
	                  "classList": [
	                    "msg-time"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "shown": function () {return this.item.data.templateType==2},
	                  "classList": [
	                    "msg-info"
	                  ],
	                  "children": [
	                    {
	                      "type": "block",
	                      "attr": {},
	                      "repeat": {
	                        "exp": function () {return this.item.data.data},
	                        "key": "index",
	                        "value": "list"
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "mod-list",
	                            "mod-big"
	                          ],
	                          "shown": function () {return this.index==0&&this.list.orderSort==1},
	                          "events": {
	                            "click": function (evt) {this.gotoDetail(this.list.redirectUrl,evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "stack",
	                              "attr": {},
	                              "classList": [
	                                "stack"
	                              ],
	                              "children": [
	                                {
	                                  "type": "image",
	                                  "attr": {
	                                    "src": function () {return this.list.imageUrl}
	                                  },
	                                  "classList": [
	                                    "product-image"
	                                  ]
	                                },
	                                {
	                                  "type": "text",
	                                  "attr": {
	                                    "show": function () {return this.list.title},
	                                    "value": function () {return this.list.title}
	                                  },
	                                  "classList": [
	                                    "product-title"
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
	                            "mod-list"
	                          ],
	                          "shown": function () {return !(this.index==0&&this.list.orderSort==1)},
	                          "events": {
	                            "click": function (evt) {this.gotoDetail(this.list.redirectUrl,evt)}
	                          },
	                          "children": [
	                            {
	                              "type": "div",
	                              "attr": {},
	                              "classList": [
	                                "bor-b"
	                              ],
	                              "children": [
	                                {
	                                  "type": "text",
	                                  "attr": {
	                                    "show": function () {return this.list.title},
	                                    "value": function () {return this.list.title}
	                                  },
	                                  "classList": [
	                                    "product-title"
	                                  ]
	                                },
	                                {
	                                  "type": "image",
	                                  "attr": {
	                                    "src": function () {return this.list.imageUrl}
	                                  },
	                                  "classList": [
	                                    "product-image"
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
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "msg-info"
	                  ],
	                  "shown": function () {return (this.item.data.templateType==1)&&!(this.item.data.templateType==2)},
	                  "events": {
	                    "click": function (evt) {this.gotoDetail(this.item.data.data[0].redirectUrl,evt)}
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "show": function () {return this.item.data.data[0].title},
	                        "value": function () {return this.item.data.data[0].title}
	                      },
	                      "classList": [
	                        "msg-tit"
	                      ]
	                    },
	                    {
	                      "type": "image",
	                      "attr": {
	                        "show": function () {return this.item.data.data[0].imageUrl},
	                        "src": function () {return this.item.data.data[0].imageUrl}
	                      },
	                      "classList": [
	                        "msg-img"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "show": function () {return this.item.data.data[0].description},
	                        "value": function () {return this.item.data.data[0].description}
	                      },
	                      "classList": [
	                        "msg-cont"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {},
	                      "classList": [
	                        "msg-opt"
	                      ],
	                      "children": [
	                        {
	                          "type": "span",
	                          "attr": {
	                            "value": "查看详情 "
	                          }
	                        },
	                        {
	                          "type": "span",
	                          "attr": {},
	                          "classList": [
	                            "awrr"
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
	                "loading": function () {return this.loading},
	                "noData": function () {return this.noData}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	  ".msg-list": {
	    "backgroundColor": "#f7f7f7",
	    "paddingBottom": "100px",
	    "height": "100%"
	  },
	  ".msg-list .mod-list-item": {
	    "flexDirection": "column",
	    "paddingTop": "48px",
	    "paddingRight": "24px",
	    "paddingLeft": "24px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list-item"
	        }
	      ]
	    }
	  },
	  ".msg-list .mod-list-item .msg-time": {
	    "flex": 1,
	    "textAlign": "center",
	    "color": "#999999",
	    "fontSize": "20px",
	    "lineHeight": "18px",
	    "marginBottom": "32px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-time"
	        }
	      ]
	    }
	  },
	  ".msg-list .mod-list-item .msg-info": {
	    "flexDirection": "column",
	    "borderTopColor": "#eeeeee",
	    "borderRightColor": "#eeeeee",
	    "borderBottomColor": "#eeeeee",
	    "borderLeftColor": "#eeeeee",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "backgroundColor": "#ffffff",
	    "borderRadius": "2px",
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "0px",
	    "paddingLeft": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-info"
	        }
	      ]
	    }
	  },
	  ".msg-list .mod-list-item .msg-info .mod-big": {
	    "paddingBottom": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-big"
	        }
	      ]
	    }
	  },
	  ".msg-list .mod-list-item .msg-info .mod-big .product-title": {
	    "width": "100%",
	    "height": "68px",
	    "lineHeight": "68px",
	    "paddingTop": "0px",
	    "paddingRight": "24px",
	    "paddingBottom": "0px",
	    "paddingLeft": "24px",
	    "color": "#ffffff",
	    "fontSize": "32px",
	    "backgroundColor": "rgba(0,0,0,0.5)",
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-big"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "product-title"
	        }
	      ]
	    }
	  },
	  ".msg-list .mod-list-item .msg-info .mod-list .stack": {
	    "flex": 1,
	    "alignItems": "flex-end",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "stack"
	        }
	      ]
	    }
	  },
	  ".msg-list .mod-list-item .msg-info .mod-list .stack .product-image": {
	    "flex": 1,
	    "flexShrink": 0,
	    "backgroundColor": "#eeeeee",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "stack"
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
	  ".msg-list .mod-list-item .msg-info .mod-list .bor-b": {
	    "flex": 1,
	    "borderTopWidth": "0.5px",
	    "borderTopColor": "#cccccc",
	    "borderRightColor": "#cccccc",
	    "borderBottomColor": "#cccccc",
	    "borderLeftColor": "#cccccc",
	    "paddingBottom": "20px",
	    "paddingTop": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "bor-b"
	        }
	      ]
	    }
	  },
	  ".msg-list .mod-list-item .msg-info .mod-list .bor-b .product-title": {
	    "flex": 1,
	    "fontSize": "28px",
	    "height": "88px",
	    "lineHeight": "44px",
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "bor-b"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "product-title"
	        }
	      ]
	    }
	  },
	  ".msg-list .mod-list-item .msg-info .mod-list .bor-b .product-image": {
	    "width": "88px",
	    "height": "88px",
	    "backgroundColor": "#eeeeee",
	    "marginLeft": "10px",
	    "flexShrink": 0,
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "bor-b"
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
	  ".msg-list .mod-list-item .msg-info .msg-tit": {
	    "fontSize": "32px",
	    "fontWeight": "bold",
	    "color": "#404040",
	    "paddingBottom": "20px",
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-tit"
	        }
	      ]
	    }
	  },
	  ".msg-list .mod-list-item .msg-info .msg-img": {
	    "marginBottom": "16px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-img"
	        }
	      ]
	    }
	  },
	  ".msg-list .mod-list-item .msg-info .msg-cont": {
	    "lineHeight": "40px",
	    "marginTop": "8px",
	    "marginBottom": "8px",
	    "fontSize": "24px",
	    "color": "#808080",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-cont"
	        }
	      ]
	    }
	  },
	  ".msg-list .mod-list-item .msg-info .msg-opt": {
	    "paddingBottom": "16px",
	    "paddingTop": "16px",
	    "fontSize": "24px",
	    "marginTop": "14px",
	    "borderTopColor": "#cccccc",
	    "borderRightColor": "#cccccc",
	    "borderBottomColor": "#cccccc",
	    "borderLeftColor": "#cccccc",
	    "borderTopWidth": "0.5px",
	    "color": "#404040",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-opt"
	        }
	      ]
	    }
	  },
	  ".msg-list .mod-list-item .msg-info .msg-opt .awrr": {
	    "width": "14px",
	    "height": "14px",
	    "borderTopColor": "#999999",
	    "borderRightColor": "#999999",
	    "borderBottomColor": "#999999",
	    "borderLeftColor": "#999999",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "backgroundColor": "#000000",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "mod-list-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "msg-opt"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "awrr"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _util = __webpack_require__(17);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		props: ['current'],
		data: {
			page: 1,
			pageSize: 10,
			isNextLoad: true,
			noData: false,
			loading: true,
			datalist: []
		},
		onInit: function onInit() {
			var self = this;
			self.$page.setTitleBar({ text: '章鱼咨询' });
			_system4.default.getType({
				success: function success(data) {
					if (data.type !== 'none') {
						if (self.isNextLoad) {
							self.loading = true;
							self.loadData();
						}
					} else {
						_system6.default.showToast({
							message: '无网络'
						});
					}
				}
			});
		},
		getMsglist: function getMsglist() {
			var self = this;
			_system4.default.getType({
				success: function success(data) {
					if (data.type !== 'none') {
						if (self.isNextLoad) {
							self.loading = true;
							self.loadData();
						}
					} else {
						_system6.default.showToast({
							message: '无网络'
						});
					}
				}
			});
		},
		loadData: function loadData() {
			var self = this;
			_system2.default.fetch({
				url: 'https://jz-c.doumi.com/api/v3/client/message/zhangyu',
				data: {
					page: self.page,
					pageSize: self.pageSize
				},
				header: {
					accessToken: natives.accessToken
				},
				success: function success(data) {
	
					var list = JSON.parse(data.data).data;
	
					if (data.code == 200 && !!data && !!data.data && !!JSON.parse(data.data).data && JSON.parse(data.data).data.length > 0) {
	
						var _list = JSON.parse(data.data).data;
						var len = JSON.parse(data.data).data.length;
	
						var _iteratorNormalCompletion = true;
						var _didIteratorError = false;
						var _iteratorError = undefined;
	
						try {
							for (var _iterator = _list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
								var item = _step.value;
	
								item.create_at = _util2.default.timeFormat(item.create_at * 1000);
							}
						} catch (err) {
							_didIteratorError = true;
							_iteratorError = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion && _iterator.return) {
									_iterator.return();
								}
							} finally {
								if (_didIteratorError) {
									throw _iteratorError;
								}
							}
						}
	
						if (self.page == 1) {
							self.datalist = _list;
						} else {
							self.datalist = self.datalist.concat(_list);
						}
						self.noData = false;
						self.isNextLoad = true;
						self.loading = false;
						++self.page;
					} else if (JSON.parse(data.data).data.length == 0) {
						self.isNextLoad = false;
						self.noData = true;
					}
				},
				fail: function fail(data, code) {
					_system6.default.showToast({
						message: 'handling fail ' + code
					});
				}
			});
		},
		gotoDetail: function gotoDetail(url) {
			console.log(url);
			_system8.default.loadUrl({
				url: url
			});
		}
	};}

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.network');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var util = {
	    /**
	      * 判断网络
	      * @param options
	      * @return {Promise}
	      */
	    getType: function getType(options) {
	        var p1 = new Promise(function (resolve, reject) {
	            options.success = function (data) {
	                resolve({ data: data });
	            };
	            options.fail = function (data) {
	                reject({ data: data });
	            };
	
	            _system2.default.getType(options);
	        });
	
	        return p1;
	    },
	
	    /**
	      * 时间格式化
	      * @param options
	      * @return {Promise}
	      */
	    timeFormat: function timeFormat(tmp) {
	        var mydate = new Date(tmp),
	            curdate = new Date(),
	            week = ['星期日 ', '星期一 ', '星期二 ', '星期三 ', '星期四 ', '星期五 ', '星期六 '],
	            Y = mydate.getFullYear(),
	            M = mydate.getMonth(),
	            D = mydate.getDate(),
	            H = mydate.getHours(),
	            MM = mydate.getMinutes(),
	            y = curdate.getFullYear(),
	            m = curdate.getMonth(),
	            d = curdate.getDate(),
	            disdate = (dayStamp(y, m, d) - dayStamp(Y, M, D)) / 86400000,
	            timeFormat = '';
	
	        //console.log(disdate)
	        if (disdate === 0) {
	            //今天
	            timeFormat = timZero(H) + ':' + timZero(MM);
	        } else if (disdate === 1) {
	            // 昨天
	            timeFormat = '昨天 ' + timZero(H) + ':' + timZero(MM);
	        } else if (1 < disdate && disdate < 7) {
	            // 一周之内
	            timeFormat = weeks(tmp) + timZero(H) + ':' + timZero(MM);
	        } else {
	            //一周之外
	            timeFormat = Y + '年' + (M + 1) + '月' + D + '日 ' + timZero(H) + ':' + timZero(MM);
	        }
	
	        function dayStamp(year, month, day) {
	            //整天时间戳
	            var d = new Date(year, month, day);
	            return d.getTime();
	        }
	
	        function weeks(tmp) {
	            var d = new Date(tmp).getDay();
	            return week[d];
	        }
	
	        function timZero(num) {
	            return num > 9 ? num : '0' + num;
	        }
	
	        return timeFormat;
	    }
	};
	
	exports.default = util;

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