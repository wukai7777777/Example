(function(){
      
  var createAppHandler = function() {
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

	var $app_script$ = __webpack_require__(1)
	
	$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	})
	
	$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(2);
	
	exports.default = {
	  manifest: { "package": "com.doumi.demo", "name": "斗米兼职", "versionName": "1.0.0", "versionCode": "1", "icon": "/Common/logo.png", "features": [{ "name": "system.app" }, { "name": "system.webview" }, { "name": "system.prompt" }, { "name": "system.clipboard" }, { "name": "system.calendar" }, { "name": "system.device" }, { "name": "system.fetch" }, { "name": "system.file" }, { "name": "system.geolocation" }, { "name": "system.media" }, { "name": "system.notification" }, { "name": "system.barcode" }, { "name": "system.sensor" }, { "name": "system.share" }, { "name": "system.shortcut" }, { "name": "system.storage" }, { "name": "system.vibrator" }, { "name": "system.network" }, { "name": "system.request" }, { "name": "service.share", "params": { "appSign": "MIIEbDCCA1SgAwIBAgIJAOVSqOy5ARt8MA0GCSqGSIb3DQEBBQUAMIGAMQswCQYDVQQGEwJDTjEQMA4GA1UECBMHQmVpamluZzEQMA4GA1UEBxMHQmVpamluZzEPMA0GA1UEChMGWGlhb21pMQ0wCwYDVQQLEwRNSVVJMQ0wCwYDVQQDEwRNSVVJMR4wHAYJKoZIhvcNAQkBFg9taXVpQHhpYW9taS5jb20wHhcNMTExMjA2MDMyNjI2WhcNMzkwNDIzMDMyNjI2WjCBgDELMAkGA1UEBhMCQ04xEDAOBgNVBAgTB0JlaWppbmcxEDAOBgNVBAcTB0JlaWppbmcxDzANBgNVBAoTBlhpYW9taTENMAsGA1UECxMETUlVSTENMAsGA1UEAxMETUlVSTEeMBwGCSqGSIb3DQEJARYPbWl1aUB4aWFvbWkuY29tMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIBCAKCAQEAx4ZWipr/JTrXTF0+b7/6Ev7UTNMkTxiWDsVRG7VR5BMRUZcjSEURLMPfm7rNPg9LNSjNh+05fVd9yQCOnLxqJfwGZNOj9EAkN4bbiyUNQPbxSMmjzW+8LdjSQDm9aolyob3uKMMIeYv6m7O1SYd7EPmOJl8RjAXyZFN9leKTORV7nSoxSF4MgjUhzKbQtyGoQyYAB21mniCsQ6pYi1LBHCpR8ExrsxrWroVzmRr+jklX1UlZH8uD7GLR2jWxcn3GtjABpe84e1pxhsHmjaEyV3K1MHsbxznvI2ue/gbVLcrx4ydo40A+VePsVgKM9WgM+zOXHM94cFcrxH0+Ov+jhQIBA6OB6DCB5TAdBgNVHQ4EFgQUka4vjHLjBfkqqfdFLioxYLhBoVwwgbUGA1UdIwSBrTCBqoAUka4vjHLjBfkqqfdFLioxYLhBoVyhgYakgYMwgYAxCzAJBgNVBAYTAkNOMRAwDgYDVQQIEwdCZWlqaW5nMRAwDgYDVQQHEwdCZWlqaW5nMQ8wDQYDVQQKEwZYaWFvbWkxDTALBgNVBAsTBE1JVUkxDTALBgNVBAMTBE1JVUkxHjAcBgkqhkiG9w0BCQEWD21pdWlAeGlhb21pLmNvbYIJAOVSqOy5ARt8MAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADggEBADs6aZzrSXMA8quGy9QcUTRAv2CqXEOYTrHaFA7zBUTZ+7s3M98ksm8nA9f/xkW/WYpeYCNZapR+kXMVQvLCadCBamnJLfm/6LHJvDxUxGwSNVu0Yp/mAgyp0V+NYVXcVYb1YW24BuzqLQa9g+MrXxP1oE/j5apRTwXfPVVVJsY9PWKs8Are6JS5I8JpjcVxvFLHVv+noiIdg00Qy3F1yGTDCHL+IXwxRC3/AECmei+xyLpj6sLVuj2OdrT/Kkmw24oz70rg3QqEDdKocUy1UxpWt4aBnsnrEFHZGyP94GvZ0HCPFQxPnv5qQWykpeDCOpUq+TGtNXn7SosZ3pj2S9k=", "wxKey": "wx95918e0ee048d96f" } }, { "name": "service.pay" }, { "name": "service.alipay" }], "permissions": [{ "origin": "*" }], "config": { "logLevel": "debug" }, "router": { "entry": "taobaoke", "pages": { "taobaoke": { "component": "index" }, "msg-news-list": { "component": "index" } } }, "display": { "titleBarBackgroundColor": "#f2f2f2", "titleBarTextColor": "#414141", "pages": { "Demo": { "titleBarText": "Demo" } } } }
	};}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var natives = {
		accessToken: 'LmRlaxBbMj/BaaMW6kNiQM0SBrhZ/lJPAUwjhppDYhWNkradyU4XOvEZk2aaczK0zFfT7Zi6'
	
		// 注入到全局
	};var hookTo = global.__proto__ || global;
	hookTo.natives = natives;
	
	exports.default = natives;

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"com.doumi.demo","name":"斗米兼职","versionName":"1.0.0","versionCode":"1","icon":"/Common/logo.png","features":[{"name":"system.app"},{"name":"system.webview"},{"name":"system.prompt"},{"name":"system.clipboard"},{"name":"system.calendar"},{"name":"system.device"},{"name":"system.fetch"},{"name":"system.file"},{"name":"system.geolocation"},{"name":"system.media"},{"name":"system.notification"},{"name":"system.barcode"},{"name":"system.sensor"},{"name":"system.share"},{"name":"system.shortcut"},{"name":"system.storage"},{"name":"system.vibrator"},{"name":"system.network"},{"name":"system.request"},{"name":"service.share","params":{"appSign":"MIIEbDCCA1SgAwIBAgIJAOVSqOy5ARt8MA0GCSqGSIb3DQEBBQUAMIGAMQswCQYDVQQGEwJDTjEQMA4GA1UECBMHQmVpamluZzEQMA4GA1UEBxMHQmVpamluZzEPMA0GA1UEChMGWGlhb21pMQ0wCwYDVQQLEwRNSVVJMQ0wCwYDVQQDEwRNSVVJMR4wHAYJKoZIhvcNAQkBFg9taXVpQHhpYW9taS5jb20wHhcNMTExMjA2MDMyNjI2WhcNMzkwNDIzMDMyNjI2WjCBgDELMAkGA1UEBhMCQ04xEDAOBgNVBAgTB0JlaWppbmcxEDAOBgNVBAcTB0JlaWppbmcxDzANBgNVBAoTBlhpYW9taTENMAsGA1UECxMETUlVSTENMAsGA1UEAxMETUlVSTEeMBwGCSqGSIb3DQEJARYPbWl1aUB4aWFvbWkuY29tMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIBCAKCAQEAx4ZWipr/JTrXTF0+b7/6Ev7UTNMkTxiWDsVRG7VR5BMRUZcjSEURLMPfm7rNPg9LNSjNh+05fVd9yQCOnLxqJfwGZNOj9EAkN4bbiyUNQPbxSMmjzW+8LdjSQDm9aolyob3uKMMIeYv6m7O1SYd7EPmOJl8RjAXyZFN9leKTORV7nSoxSF4MgjUhzKbQtyGoQyYAB21mniCsQ6pYi1LBHCpR8ExrsxrWroVzmRr+jklX1UlZH8uD7GLR2jWxcn3GtjABpe84e1pxhsHmjaEyV3K1MHsbxznvI2ue/gbVLcrx4ydo40A+VePsVgKM9WgM+zOXHM94cFcrxH0+Ov+jhQIBA6OB6DCB5TAdBgNVHQ4EFgQUka4vjHLjBfkqqfdFLioxYLhBoVwwgbUGA1UdIwSBrTCBqoAUka4vjHLjBfkqqfdFLioxYLhBoVyhgYakgYMwgYAxCzAJBgNVBAYTAkNOMRAwDgYDVQQIEwdCZWlqaW5nMRAwDgYDVQQHEwdCZWlqaW5nMQ8wDQYDVQQKEwZYaWFvbWkxDTALBgNVBAsTBE1JVUkxDTALBgNVBAMTBE1JVUkxHjAcBgkqhkiG9w0BCQEWD21pdWlAeGlhb21pLmNvbYIJAOVSqOy5ARt8MAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADggEBADs6aZzrSXMA8quGy9QcUTRAv2CqXEOYTrHaFA7zBUTZ+7s3M98ksm8nA9f/xkW/WYpeYCNZapR+kXMVQvLCadCBamnJLfm/6LHJvDxUxGwSNVu0Yp/mAgyp0V+NYVXcVYb1YW24BuzqLQa9g+MrXxP1oE/j5apRTwXfPVVVJsY9PWKs8Are6JS5I8JpjcVxvFLHVv+noiIdg00Qy3F1yGTDCHL+IXwxRC3/AECmei+xyLpj6sLVuj2OdrT/Kkmw24oz70rg3QqEDdKocUy1UxpWt4aBnsnrEFHZGyP94GvZ0HCPFQxPnv5qQWykpeDCOpUq+TGtNXn7SosZ3pj2S9k=","wxKey":"wx95918e0ee048d96f"}},{"name":"service.pay"},{"name":"service.alipay"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"taobaoke","pages":{"taobaoke":{"component":"index"},"msg-news-list":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","pages":{"Demo":{"titleBarText":"Demo"}}}};
  }
})();
//# sourceMappingURL=app.js.map