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

	__webpack_require__(3)
	__webpack_require__(15)
	__webpack_require__(7)
	var $app_template$ = __webpack_require__(19)
	var $app_style$ = __webpack_require__(20)
	var $app_script$ = __webpack_require__(21)
	
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(4)
	var $app_style$ = __webpack_require__(5)
	var $app_script$ = __webpack_require__(6)
	
	$app_define$('@app-component/bottom-loading', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: ['loading', 'noData']
	};}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(8)
	var $app_style$ = __webpack_require__(9)
	var $app_script$ = __webpack_require__(10)
	
	$app_define$('@app-component/layered', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "stack",
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
	      "type": "div",
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

/***/ },
/* 9 */
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
/* 10 */
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
			_system2.default.replace({
				uri: item.route,
				params: { current: index }
			});
		},
		onInit: function onInit() {
			console.log(this.active, 66666);
		}
	};}

/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(16)
	var $app_style$ = __webpack_require__(17)
	var $app_script$ = __webpack_require__(18)
	
	$app_define$('@app-component/banner', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "swiper",
	  "attr": {
	    "autoplay": function () {return this.autoPlay},
	    "interval": function () {return this.interval},
	    "indicator": function () {return this.indicator}
	  },
	  "style": {
	    "indicatorColor": "rgba(0,0,0,0.2)",
	    "indicatorSelectedColor": "#FFFF00",
	    "indicatorSize": "10px"
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
/* 17 */
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
	    "flexShrink": 0,
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
/* 18 */
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
/* 19 */
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
	          "attr": {},
	          "classList": [
	            "swiper-wrap"
	          ],
	          "events": {
	            "disappear": "disappear"
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
	          "attr": {},
	          "classList": [
	            "tabs-wrap"
	          ],
	          "events": {
	            "appear": "appear"
	          },
	          "children": [
	            {
	              "type": "tabs",
	              "attr": {},
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
	                      "type": "text",
	                      "attr": {
	                        "value": "item1"
	                      },
	                      "classList": [
	                        "text"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "item2"
	                      },
	                      "classList": [
	                        "text"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "item3"
	                      },
	                      "classList": [
	                        "text"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "item4"
	                      },
	                      "classList": [
	                        "text"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "item5"
	                      },
	                      "classList": [
	                        "text"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "item6"
	                      },
	                      "classList": [
	                        "text"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "item7"
	                      },
	                      "classList": [
	                        "text"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "item8"
	                      },
	                      "classList": [
	                        "text"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
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
	                "exp": function () {return this.datalist},
	                "value": "item"
	              },
	              "children": [
	                {
	                  "type": "list-item",
	                  "attr": {
	                    "type": "list-data"
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
	  ]
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = {
	  ".tabs-wrap": {
	    "backgroundColor": "#ffffff"
	  },
	  ".tabs-wrap .tabs-item": {
	    "flexDirection": "row",
	    "flex": 1,
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
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
	  ".tabs-wrap .tabs-item .text": {
	    "flexShrink": 0,
	    "width": "200px",
	    "height": "88px",
	    "lineHeight": "88px",
	    "textAlign": "center",
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
	          "v": "text"
	        }
	      ]
	    }
	  },
	  ".slot-wrap": {
	    "flexDirection": "column"
	  },
	  ".datalist": {
	    "flex": 1,
	    "paddingLeft": "30px",
	    "paddingRight": "30px"
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
/* 21 */
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
			datalist: [],
			page: 1,
			pageSize: 20,
			channel: 'meizhuanggehu',
			isNextLoad: true,
			isRefreshing: false,
			autoPlay: true,
			interval: 3000,
			indicator: true,
			loading: true,
			noData: false,
			isShow: false
		},
		scroll: function scroll(e) {
			console.log(e.scrollY, 88888);
		},
		appear: function appear() {
			this.isShow = false;
		},
		disappear: function disappear() {
			this.isShow = true;
		},
		onInit: function onInit() {
			var self = this;
			this.$page.setTitleBar({ text: '淘宝客下拉数据' });
			_system4.default.getType({
				success: function success(data) {
					if (data.type !== 'none') {
						self.loadBanner();
						self.getDateList();
					} else {
						_system6.default.showToast({
							message: '无网络'
						});
					}
				}
			});
		},
		getDateList: function getDateList(isRefresh) {
			var self = this;
			_system4.default.getType({
				success: function success(data) {
					if (data.type !== 'none') {
						if (self.isNextLoad) {
							self.loading = true;
							self.getTaoBaoKe(isRefresh);
						}
					} else {
						self.loading = false;
						_system6.default.showToast({
							message: '无网络'
						});
					}
				}
			});
		},
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
					self.bannerData = JSON.parse(data.data).data.zhangyu.data;
				},
				fail: function fail(data, code) {
					_system6.default.showToast({
						message: 'handling fail ' + code
					});
				}
			});
		},
		getTaoBaoKe: function getTaoBaoKe(isRefresh) {
			var self = this;
			_system2.default.fetch({
				url: 'https://jz-c.doumi.com/api/v3/client/tbk/lists',
				data: {
					page: self.page,
					pageSize: self.pageSize,
					channel: self.channel
				},
				header: {
					accessToken: natives.accessToken
				},
				success: function success(data) {
					self.isRefreshing = false;
					if (!!data && !!data.data && !!JSON.parse(data.data).cityInfo && !!JSON.parse(data.data).data && JSON.parse(data.data).data.length > 0) {
						var list = JSON.parse(data.data).data;
						var len = JSON.parse(data.data).data.length;
	
						if (self.page == 1) {
							self.datalist = list;
							if (isRefresh) {
								_system6.default.showToast({
									message: '已经是最新了'
								});
							}
						} else {
							self.datalist = self.datalist.concat(list);
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
		refresh: function refresh(e) {
			this.page = 1;
	
			this.isNextLoad = true;
			this.isRefreshing = e.refreshing;
			this.loadBanner();
			this.getDateList(true);
		},
		goTodetail: function goTodetail() {
			_system8.default.loadUrl({
				url: 'https://www.mi.com'
			});
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