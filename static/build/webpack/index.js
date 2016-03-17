/******/ (function(modules) { // webpackBootstrap
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

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _modsModalDlg_loading = __webpack_require__(1);
	
	var _modsModalDlg_loading2 = _interopRequireDefault(_modsModalDlg_loading);
	
	var _mods_react_componentJsx = __webpack_require__(22);
	
	var _mods_react_componentJsx2 = _interopRequireDefault(_mods_react_componentJsx);
	
	(0, _modsModalDlg_loading2['default'])({
	  loading_title: '我是hbs头部32'
	});
	
	$('.js-article').css('color', 'red');
	
	ReactDOM.render(React.createElement(_mods_react_componentJsx2['default'], null), document.getElementById('phone_form'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _tmpl_loadingHbs = __webpack_require__(2);
	
	var _tmpl_loadingHbs2 = _interopRequireDefault(_tmpl_loadingHbs);
	
	exports['default'] = function (options) {
	  var default_opt = {
	    loading_title: '我是hbs头部1',
	    loading_info: '我是hbs主体1'
	  };
	  options = Object.assign(default_opt, options);
	  var $tmpl = $((0, _tmpl_loadingHbs2['default'])(options));
	  $('body').append($tmpl);
	
	  return $tmpl;
	};
	
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(3);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;
	
	  return "<div class=\"modals-group\">\n  <div class=\"onemodal-hd\">\n    <h4>"
	    + alias4(((helper = (helper = helpers.loading_title || (depth0 != null ? depth0.loading_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"loading_title","hash":{},"data":data}) : helper)))
	    + "</h4>\n  </div>\n  <div class=\"onemodal-bd onemodal-loading\">\n    <p>"
	    + alias4(((helper = (helper = helpers.loading_info || (depth0 != null ? depth0.loading_info : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"loading_info","hash":{},"data":data}) : helper)))
	    + "</p>\n  </div>\n</div>\n";
	},"useData":true});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// Create a simple path alias to allow browserify to resolve
	// the runtime on a supported path.
	module.exports = __webpack_require__(4)['default'];


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// istanbul ignore next
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _handlebarsBase = __webpack_require__(5);
	
	var base = _interopRequireWildcard(_handlebarsBase);
	
	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)
	
	var _handlebarsSafeString = __webpack_require__(19);
	
	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
	
	var _handlebarsException = __webpack_require__(7);
	
	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
	
	var _handlebarsUtils = __webpack_require__(6);
	
	var Utils = _interopRequireWildcard(_handlebarsUtils);
	
	var _handlebarsRuntime = __webpack_require__(20);
	
	var runtime = _interopRequireWildcard(_handlebarsRuntime);
	
	var _handlebarsNoConflict = __webpack_require__(21);
	
	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
	
	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();
	
	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;
	
	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };
	
	  return hb;
	}
	
	var inst = create();
	inst.create = create;
	
	_handlebarsNoConflict2['default'](inst);
	
	inst['default'] = inst;
	
	exports['default'] = inst;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(6);
	
	var _exception = __webpack_require__(7);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	var _helpers = __webpack_require__(8);
	
	var _decorators = __webpack_require__(16);
	
	var _logger = __webpack_require__(18);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	var VERSION = '4.0.5';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;
	
	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};
	
	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';
	
	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};
	
	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}
	
	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,
	
	  logger: _logger2['default'],
	  log: _logger2['default'].log,
	
	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },
	
	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },
	
	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};
	
	var log = _logger2['default'].log;
	
	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQTRDLFNBQVM7O3lCQUMvQixhQUFhOzs7O3VCQUNFLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNuQyxVQUFVOzs7O0FBRXRCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQzs7QUFDeEIsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7OztBQUU1QixJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxVQUFVO0NBQ2QsQ0FBQzs7O0FBRUYsSUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUM7O0FBRTlCLFNBQVMscUJBQXFCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDbkUsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMvQixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7O0FBRW5DLGtDQUF1QixJQUFJLENBQUMsQ0FBQztBQUM3Qix3Q0FBMEIsSUFBSSxDQUFDLENBQUM7Q0FDakM7O0FBRUQscUJBQXFCLENBQUMsU0FBUyxHQUFHO0FBQ2hDLGFBQVcsRUFBRSxxQkFBcUI7O0FBRWxDLFFBQU0scUJBQVE7QUFDZCxLQUFHLEVBQUUsb0JBQU8sR0FBRzs7QUFFZixnQkFBYyxFQUFFLHdCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDakMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQUUsY0FBTSwyQkFBYyx5Q0FBeUMsQ0FBQyxDQUFDO09BQUU7QUFDM0Usb0JBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1QixNQUFNO0FBQ0wsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDekI7R0FDRjtBQUNELGtCQUFnQixFQUFFLDBCQUFTLElBQUksRUFBRTtBQUMvQixXQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDM0I7O0FBRUQsaUJBQWUsRUFBRSx5QkFBUyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3ZDLFFBQUksZ0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN0QyxvQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdCLE1BQU07QUFDTCxVQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtBQUNsQyxjQUFNLHlFQUEwRCxJQUFJLG9CQUFpQixDQUFDO09BQ3ZGO0FBQ0QsVUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7S0FDL0I7R0FDRjtBQUNELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRTtBQUNoQyxXQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDNUI7O0FBRUQsbUJBQWlCLEVBQUUsMkJBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNwQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFNLDJCQUFjLDRDQUE0QyxDQUFDLENBQUM7T0FBRTtBQUM5RSxvQkFBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQy9CLE1BQU07QUFDTCxVQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUM1QjtHQUNGO0FBQ0QscUJBQW1CLEVBQUUsNkJBQVMsSUFBSSxFQUFFO0FBQ2xDLFdBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM5QjtDQUNGLENBQUM7O0FBRUssSUFBSSxHQUFHLEdBQUcsb0JBQU8sR0FBRyxDQUFDOzs7UUFFcEIsV0FBVztRQUFFLE1BQU0iLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRnJhbWUsIGV4dGVuZCwgdG9TdHJpbmd9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdEhlbHBlcnN9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnN9IGZyb20gJy4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4wLjUnO1xuZXhwb3J0IGNvbnN0IENPTVBJTEVSX1JFVklTSU9OID0gNztcblxuZXhwb3J0IGNvbnN0IFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuICA3OiAnPj0gNC4wLjAnXG59O1xuXG5jb25zdCBvYmplY3RUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMsIGRlY29yYXRvcnMpIHtcbiAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcbiAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuICB0aGlzLmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzIHx8IHt9O1xuXG4gIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG4gIHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnModGhpcyk7XG59XG5cbkhhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cbiAgbG9nZ2VyOiBsb2dnZXIsXG4gIGxvZzogbG9nZ2VyLmxvZyxcblxuICByZWdpc3RlckhlbHBlcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7IHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgaGVscGVycycpOyB9XG4gICAgICBleHRlbmQodGhpcy5oZWxwZXJzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWxwZXJzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuaGVscGVyc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUsIHBhcnRpYWwpIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgZXh0ZW5kKHRoaXMucGFydGlhbHMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHBhcnRpYWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oYEF0dGVtcHRpbmcgdG8gcmVnaXN0ZXIgYSBwYXJ0aWFsIGNhbGxlZCBcIiR7bmFtZX1cIiBhcyB1bmRlZmluZWRgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7IHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpOyB9XG4gICAgICBleHRlbmQodGhpcy5kZWNvcmF0b3JzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWNvcmF0b3JzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuZGVjb3JhdG9yc1tuYW1lXTtcbiAgfVxufTtcblxuZXhwb3J0IGxldCBsb2cgPSBsb2dnZXIubG9nO1xuXG5leHBvcnQge2NyZWF0ZUZyYW1lLCBsb2dnZXJ9O1xuIl19


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};
	
	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;
	
	function escapeChar(chr) {
	  return escape[chr];
	}
	
	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }
	
	  return obj;
	}
	
	var toString = Object.prototype.toString;
	
	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;
	
	/* eslint-enable func-style */
	
	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};
	
	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.
	
	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }
	
	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }
	
	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}
	
	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}
	
	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}
	
	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}
	
	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRztBQUNiLEtBQUcsRUFBRSxPQUFPO0FBQ1osS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsTUFBTTtBQUNYLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQzs7QUFFRixJQUFNLFFBQVEsR0FBRyxZQUFZO0lBQ3ZCLFFBQVEsR0FBRyxXQUFXLENBQUM7O0FBRTdCLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixTQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLG9CQUFtQjtBQUMzQyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxTQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QixVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5QjtLQUNGO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBS2hELElBQUksVUFBVSxHQUFHLG9CQUFTLEtBQUssRUFBRTtBQUMvQixTQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUNwQyxDQUFDOzs7QUFHRixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNuQixVQUlNLFVBQVUsR0FKaEIsVUFBVSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssbUJBQW1CLENBQUM7R0FDcEYsQ0FBQztDQUNIO1FBQ08sVUFBVSxHQUFWLFVBQVU7Ozs7O0FBSVgsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxVQUFTLEtBQUssRUFBRTtBQUN0RCxTQUFPLEFBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsR0FBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixHQUFHLEtBQUssQ0FBQztDQUNqRyxDQUFDOzs7OztBQUdLLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxRQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsYUFBTyxDQUFDLENBQUM7S0FDVjtHQUNGO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQUdNLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLE1BQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFOztBQUU5QixRQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzNCLGFBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3pCLGFBQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGFBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7QUFLRCxVQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztHQUN0Qjs7QUFFRCxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUFFLFdBQU8sTUFBTSxDQUFDO0dBQUU7QUFDOUMsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3Qzs7QUFFTSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsTUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQyxXQUFPLElBQUksQ0FBQztHQUNiLE1BQU07QUFDTCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gICAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKG9iai8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbmV4cG9ydCB7aXNGdW5jdGlvbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcbn07XG5cbi8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkgeyByZXR1cm4gc3RyaW5nOyB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuICBsZXQgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG4gIHBhcmFtcy5wYXRoID0gaWRzO1xuICByZXR1cm4gcGFyYW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG4gIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xufVxuIl19


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];
	
	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;
	
	    message += ' - ' + line + ':' + column;
	  }
	
	  var tmp = Error.prototype.constructor.call(this, message);
	
	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }
	
	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }
	
	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}
	
	Exception.prototype = new Error();
	
	exports['default'] = Exception;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsSUFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFbkcsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDdEIsSUFBSSxZQUFBO01BQ0osTUFBTSxZQUFBLENBQUM7QUFDWCxNQUFJLEdBQUcsRUFBRTtBQUNQLFFBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN0QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRTFCLFdBQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7R0FDeEM7O0FBRUQsTUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs7O0FBRzFELE9BQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ2hELFFBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7R0FDOUM7OztBQUdELE1BQUksS0FBSyxDQUFDLGlCQUFpQixFQUFFO0FBQzNCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDMUM7O0FBRUQsTUFBSSxHQUFHLEVBQUU7QUFDUCxRQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2QixRQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztHQUN0QjtDQUNGOztBQUVELFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQzs7cUJBRW5CLFNBQVMiLCJmaWxlIjoiZXhjZXB0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcbiAgbGV0IGxvYyA9IG5vZGUgJiYgbm9kZS5sb2MsXG4gICAgICBsaW5lLFxuICAgICAgY29sdW1uO1xuICBpZiAobG9jKSB7XG4gICAgbGluZSA9IGxvYy5zdGFydC5saW5lO1xuICAgIGNvbHVtbiA9IGxvYy5zdGFydC5jb2x1bW47XG5cbiAgICBtZXNzYWdlICs9ICcgLSAnICsgbGluZSArICc6JyArIGNvbHVtbjtcbiAgfVxuXG4gIGxldCB0bXAgPSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICAvLyBVbmZvcnR1bmF0ZWx5IGVycm9ycyBhcmUgbm90IGVudW1lcmFibGUgaW4gQ2hyb21lIChhdCBsZWFzdCksIHNvIGBmb3IgcHJvcCBpbiB0bXBgIGRvZXNuJ3Qgd29yay5cbiAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgZXJyb3JQcm9wcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFeGNlcHRpb24pO1xuICB9XG5cbiAgaWYgKGxvYykge1xuICAgIHRoaXMubGluZU51bWJlciA9IGxpbmU7XG4gICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gIH1cbn1cblxuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5leHBvcnQgZGVmYXVsdCBFeGNlcHRpb247XG4iXX0=


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _helpersBlockHelperMissing = __webpack_require__(9);
	
	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
	
	var _helpersEach = __webpack_require__(10);
	
	var _helpersEach2 = _interopRequireDefault(_helpersEach);
	
	var _helpersHelperMissing = __webpack_require__(11);
	
	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
	
	var _helpersIf = __webpack_require__(12);
	
	var _helpersIf2 = _interopRequireDefault(_helpersIf);
	
	var _helpersLog = __webpack_require__(13);
	
	var _helpersLog2 = _interopRequireDefault(_helpersLog);
	
	var _helpersLookup = __webpack_require__(14);
	
	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
	
	var _helpersWith = __webpack_require__(15);
	
	var _helpersWith2 = _interopRequireDefault(_helpersWith);
	
	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7eUNBQXVDLGdDQUFnQzs7OzsyQkFDOUMsZ0JBQWdCOzs7O29DQUNQLDBCQUEwQjs7Ozt5QkFDckMsY0FBYzs7OzswQkFDYixlQUFlOzs7OzZCQUNaLGtCQUFrQjs7OzsyQkFDcEIsZ0JBQWdCOzs7O0FBRWxDLFNBQVMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO0FBQy9DLHlDQUEyQixRQUFRLENBQUMsQ0FBQztBQUNyQywyQkFBYSxRQUFRLENBQUMsQ0FBQztBQUN2QixvQ0FBc0IsUUFBUSxDQUFDLENBQUM7QUFDaEMseUJBQVcsUUFBUSxDQUFDLENBQUM7QUFDckIsMEJBQVksUUFBUSxDQUFDLENBQUM7QUFDdEIsNkJBQWUsUUFBUSxDQUFDLENBQUM7QUFDekIsMkJBQWEsUUFBUSxDQUFDLENBQUM7Q0FDeEIiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdpc3RlckJsb2NrSGVscGVyTWlzc2luZyBmcm9tICcuL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcnO1xuaW1wb3J0IHJlZ2lzdGVyRWFjaCBmcm9tICcuL2hlbHBlcnMvZWFjaCc7XG5pbXBvcnQgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJJZiBmcm9tICcuL2hlbHBlcnMvaWYnO1xuaW1wb3J0IHJlZ2lzdGVyTG9nIGZyb20gJy4vaGVscGVycy9sb2cnO1xuaW1wb3J0IHJlZ2lzdGVyTG9va3VwIGZyb20gJy4vaGVscGVycy9sb29rdXAnO1xuaW1wb3J0IHJlZ2lzdGVyV2l0aCBmcm9tICcuL2hlbHBlcnMvd2l0aCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG4gIHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJFYWNoKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJJZihpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyTG9nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb29rdXAoaW5zdGFuY2UpO1xuICByZWdpc3RlcldpdGgoaW5zdGFuY2UpO1xufVxuIl19


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(6);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;
	
	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }
	
	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }
	
	      return fn(context, options);
	    }
	  });
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBc0QsVUFBVTs7cUJBRWpELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQ3pCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdFLGVBQU8sR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztPQUN4Qjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGNyZWF0ZUZyYW1lLCBpc0FycmF5fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgbGV0IGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgb3B0aW9ucyA9IHtkYXRhOiBkYXRhfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(6);
	
	var _exception = __webpack_require__(7);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }
	
	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;
	
	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }
	
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }
	
	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }
	
	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;
	
	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }
	
	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }
	
	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;
	
	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }
	
	    if (i === 0) {
	      ret = inverse(this);
	    }
	
	    return ret;
	  });
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQUErRSxVQUFVOzt5QkFDbkUsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixZQUFNLDJCQUFjLDZCQUE2QixDQUFDLENBQUM7S0FDcEQ7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUU7UUFDZixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87UUFDekIsQ0FBQyxHQUFHLENBQUM7UUFDTCxHQUFHLEdBQUcsRUFBRTtRQUNSLElBQUksWUFBQTtRQUNKLFdBQVcsWUFBQSxDQUFDOztBQUVoQixRQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixpQkFBVyxHQUFHLHlCQUFrQixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ2pGOztBQUVELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsVUFBSSxHQUFHLG1CQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7QUFFRCxhQUFTLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtBQUN6QyxVQUFJLElBQUksRUFBRTtBQUNSLFlBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztBQUN6QixZQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O0FBRW5CLFlBQUksV0FBVyxFQUFFO0FBQ2YsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO09BQ0Y7O0FBRUQsU0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzdCLFlBQUksRUFBRSxJQUFJO0FBQ1YsbUJBQVcsRUFBRSxtQkFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDL0UsQ0FBQyxDQUFDO0tBQ0o7O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNO0FBQ0wsWUFBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixhQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRTtBQUN2QixjQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Ozs7QUFJL0IsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0w7U0FDRjtBQUNELFlBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQix1QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGJsb2NrUGFyYW1zLCBjcmVhdGVGcmFtZSwgaXNBcnJheSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICAgIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXQgPSAnJyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgY29udGV4dFBhdGg7XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICBjb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWNJdGVyYXRpb24oZmllbGQsIGluZGV4LCBsYXN0KSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkYXRhLmtleSA9IGZpZWxkO1xuICAgICAgICBkYXRhLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGRhdGEuZmlyc3QgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgZGF0YS5sYXN0ID0gISFsYXN0O1xuXG4gICAgICAgIGlmIChjb250ZXh0UGF0aCkge1xuICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGZpZWxkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbZmllbGRdLCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dFtmaWVsZF0sIGZpZWxkXSwgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgICBmb3IgKGxldCBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJpb3JLZXk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbnRleHQpIHtcbiAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcbiAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmlvcktleSA9IGtleTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _exception = __webpack_require__(7);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFBYyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDdkY7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(6);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }
	
	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });
	
	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBa0MsVUFBVTs7cUJBRTdCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLGtCQUFXLFdBQVcsQ0FBQyxFQUFFO0FBQUUsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQUU7Ozs7O0FBS3RFLFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFdBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztHQUN2SCxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJpZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNFbXB0eSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkgeyBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7IH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCkgfHwgaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwge2ZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaH0pO1xuICB9KTtcbn1cbiJdfQ==


/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }
	
	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;
	
	    instance.log.apply(instance, args);
	  });
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2xCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVMsSUFBSSxDQUFDLENBQUM7R0FDeEIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIGxldCBsZXZlbCA9IDE7XG4gICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG4gICAgfVxuICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuICAgIGluc3RhbmNlLmxvZyguLi4gYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JELFdBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUMxQixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJsb29rdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24ob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG4iXX0=


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(6);
	
	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }
	
	    var fn = options.fn;
	
	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }
	
	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUErRSxVQUFVOztxQkFFMUUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLENBQUMsZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNyQixVQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFVBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQy9CLFlBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2hGOztBQUVELGFBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTtBQUNqQixZQUFJLEVBQUUsSUFBSTtBQUNWLG1CQUFXLEVBQUUsbUJBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDaEUsQ0FBQyxDQUFDO0tBQ0osTUFBTTtBQUNMLGFBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QjtHQUNGLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6IndpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcGVuZENvbnRleHRQYXRoLCBibG9ja1BhcmFtcywgY3JlYXRlRnJhbWUsIGlzRW1wdHksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHsgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTsgfVxuXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _decoratorsInline = __webpack_require__(17);
	
	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
	
	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG5cbiJdfQ==


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(6);
	
	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }
	
	    props.partials[options.args[0]] = options.fn;
	
	    return ret;
	  });
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXFCLFVBQVU7O3FCQUVoQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIGxldCByZXQgPSBmbjtcbiAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG4gICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuICAgICAgcmV0ID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cbiAgICAgICAgbGV0IG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBleHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG4gICAgICAgIGxldCByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG4iXX0=


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(6);
	
	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',
	
	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }
	
	    return level;
	  },
	
	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);
	
	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }
	
	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }
	
	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};
	
	exports['default'] = logger;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUFzQixTQUFTOztBQUUvQixJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDL0UsVUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxVQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztBQUNwQixjQUFNLEdBQUcsS0FBSyxDQUFDO09BQ2hCOzt3Q0FQbUIsT0FBTztBQUFQLGVBQU87OztBQVEzQixhQUFPLENBQUMsTUFBTSxPQUFDLENBQWYsT0FBTyxFQUFZLE9BQU8sQ0FBQyxDQUFDO0tBQzdCO0dBQ0Y7Q0FDRixDQUFDOztxQkFFYSxNQUFNIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5kZXhPZn0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7ICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuICAgICAgY29uc29sZVttZXRob2RdKC4uLm1lc3NhZ2UpOyAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiJdfQ==


/***/ },
/* 19 */
/***/ function(module, exports) {

	// Build out our basic SafeString type
	'use strict';
	
	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}
	
	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};
	
	exports['default'] = SafeString;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;
	// istanbul ignore next
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// istanbul ignore next
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _utils = __webpack_require__(6);
	
	var Utils = _interopRequireWildcard(_utils);
	
	var _exception = __webpack_require__(7);
	
	var _exception2 = _interopRequireDefault(_exception);
	
	var _base = __webpack_require__(5);
	
	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;
	
	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}
	
	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }
	
	  templateSpec.main.decorator = templateSpec.main_d;
	
	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);
	
	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }
	
	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);
	
	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }
	
	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }
	
	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },
	
	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,
	
	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },
	
	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },
	
	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;
	
	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }
	
	      return obj;
	    },
	
	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };
	
	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var data = options.data;
	
	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }
	
	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;
	
	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);
	
	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };
	
	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }
	
	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}
	
	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var currentDepths = depths;
	    if (depths && context !== depths[0]) {
	      currentDepths = [context].concat(depths);
	    }
	
	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }
	
	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);
	
	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}
	
	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}
	
	function invokePartial(partial, context, options) {
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }
	
	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    options.data = _base.createFrame(options.data);
	    partialBlock = options.data['partial-block'] = options.fn;
	
	    if (partialBlock.partials) {
	      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
	    }
	  }
	
	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }
	
	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}
	
	function noop() {
	  return '';
	}
	
	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}
	
	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBQzhCLFFBQVE7O0FBRWxFLFNBQVMsYUFBYSxDQUFDLFlBQVksRUFBRTtBQUMxQyxNQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUN2RCxlQUFlLDBCQUFvQixDQUFDOztBQUUxQyxNQUFJLGdCQUFnQixLQUFLLGVBQWUsRUFBRTtBQUN4QyxRQUFJLGdCQUFnQixHQUFHLGVBQWUsRUFBRTtBQUN0QyxVQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1VBQ25ELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVELFlBQU0sMkJBQWMseUZBQXlGLEdBQ3ZHLHFEQUFxRCxHQUFHLGVBQWUsR0FBRyxtREFBbUQsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNoSyxNQUFNOztBQUVMLFlBQU0sMkJBQWMsd0ZBQXdGLEdBQ3RHLGlEQUFpRCxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNuRjtHQUNGO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztHQUN4RTs7QUFFRCxjQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDOzs7O0FBSWxELEtBQUcs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U0FBUyxJQUFJLEdBQUc7QUFBRSxTQUFPLEVBQUUsQ0FBQztDQUFFOztBQUVyQyxTQUFTLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQy9CLE1BQUksQ0FBQyxJQUFJLElBQUksRUFBRSxNQUFNLElBQUksSUFBSSxDQUFBLEFBQUMsRUFBRTtBQUM5QixRQUFJLEdBQUcsSUFBSSxHQUFHLGtCQUFZLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNyQyxRQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztHQUNyQjtBQUNELFNBQU8sSUFBSSxDQUFDO0NBQ2I7O0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUN6RSxNQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUU7QUFDaEIsUUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2YsUUFBSSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVGLFNBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzNCO0FBQ0QsU0FBTyxJQUFJLENBQUM7Q0FDYiIsImZpbGUiOiJydW50aW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vZXhjZXB0aW9uJztcbmltcG9ydCB7IENPTVBJTEVSX1JFVklTSU9OLCBSRVZJU0lPTl9DSEFOR0VTLCBjcmVhdGVGcmFtZSB9IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JldmlzaW9uKGNvbXBpbGVySW5mbykge1xuICBjb25zdCBjb21waWxlclJldmlzaW9uID0gY29tcGlsZXJJbmZvICYmIGNvbXBpbGVySW5mb1swXSB8fCAxLFxuICAgICAgICBjdXJyZW50UmV2aXNpb24gPSBDT01QSUxFUl9SRVZJU0lPTjtcblxuICBpZiAoY29tcGlsZXJSZXZpc2lvbiAhPT0gY3VycmVudFJldmlzaW9uKSB7XG4gICAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPCBjdXJyZW50UmV2aXNpb24pIHtcbiAgICAgIGNvbnN0IHJ1bnRpbWVWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY3VycmVudFJldmlzaW9uXSxcbiAgICAgICAgICAgIGNvbXBpbGVyVmVyc2lvbnMgPSBSRVZJU0lPTl9DSEFOR0VTW2NvbXBpbGVyUmV2aXNpb25dO1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYW4gb2xkZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIHJ1bnRpbWVWZXJzaW9ucyArICcpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVyVmVyc2lvbnMgKyAnKS4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHRoZSBlbWJlZGRlZCB2ZXJzaW9uIGluZm8gc2luY2UgdGhlIHJ1bnRpbWUgZG9lc24ndCBrbm93IGFib3V0IHRoaXMgcmV2aXNpb24geWV0XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhIG5ld2VyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgK1xuICAgICAgICAgICAgJ1BsZWFzZSB1cGRhdGUgeW91ciBydW50aW1lIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVySW5mb1sxXSArICcpLicpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKCFlbnYpIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcbiAgfVxuICBpZiAoIXRlbXBsYXRlU3BlYyB8fCAhdGVtcGxhdGVTcGVjLm1haW4pIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdVbmtub3duIHRlbXBsYXRlIG9iamVjdDogJyArIHR5cGVvZiB0ZW1wbGF0ZVNwZWMpO1xuICB9XG5cbiAgdGVtcGxhdGVTcGVjLm1haW4uZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjLm1haW5fZDtcblxuICAvLyBOb3RlOiBVc2luZyBlbnYuVk0gcmVmZXJlbmNlcyByYXRoZXIgdGhhbiBsb2NhbCB2YXIgcmVmZXJlbmNlcyB0aHJvdWdob3V0IHRoaXMgc2VjdGlvbiB0byBhbGxvd1xuICAvLyBmb3IgZXh0ZXJuYWwgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlc2UgYXMgcHN1ZWRvLXN1cHBvcnRlZCBBUElzLlxuICBlbnYuVk0uY2hlY2tSZXZpc2lvbih0ZW1wbGF0ZVNwZWMuY29tcGlsZXIpO1xuXG4gIGZ1bmN0aW9uIGludm9rZVBhcnRpYWxXcmFwcGVyKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgICBjb250ZXh0ID0gVXRpbHMuZXh0ZW5kKHt9LCBjb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIG9wdGlvbnMuaWRzWzBdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJ0aWFsID0gZW52LlZNLnJlc29sdmVQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG4gICAgbGV0IHJlc3VsdCA9IGVudi5WTS5pbnZva2VQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG5cbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgZW52LmNvbXBpbGUpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXSA9IGVudi5jb21waWxlKHBhcnRpYWwsIHRlbXBsYXRlU3BlYy5jb21waWxlck9wdGlvbnMsIGVudik7XG4gICAgICByZXN1bHQgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMuaW5kZW50KSB7XG4gICAgICAgIGxldCBsaW5lcyA9IHJlc3VsdC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFsaW5lc1tpXSAmJiBpICsgMSA9PT0gbCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGluZXNbaV0gPSBvcHRpb25zLmluZGVudCArIGxpbmVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGxpbmVzLmpvaW4oJ1xcbicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGNvbXBpbGVkIHdoZW4gcnVubmluZyBpbiBydW50aW1lLW9ubHkgbW9kZScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEp1c3QgYWRkIHdhdGVyXG4gIGxldCBjb250YWluZXIgPSB7XG4gICAgc3RyaWN0OiBmdW5jdGlvbihvYmosIG5hbWUpIHtcbiAgICAgIGlmICghKG5hbWUgaW4gb2JqKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdcIicgKyBuYW1lICsgJ1wiIG5vdCBkZWZpbmVkIGluICcgKyBvYmopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9ialtuYW1lXTtcbiAgICB9LFxuICAgIGxvb2t1cDogZnVuY3Rpb24oZGVwdGhzLCBuYW1lKSB7XG4gICAgICBjb25zdCBsZW4gPSBkZXB0aHMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZGVwdGhzW2ldICYmIGRlcHRoc1tpXVtuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGRlcHRoc1tpXVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFtYmRhOiBmdW5jdGlvbihjdXJyZW50LCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGN1cnJlbnQgPT09ICdmdW5jdGlvbicgPyBjdXJyZW50LmNhbGwoY29udGV4dCkgOiBjdXJyZW50O1xuICAgIH0sXG5cbiAgICBlc2NhcGVFeHByZXNzaW9uOiBVdGlscy5lc2NhcGVFeHByZXNzaW9uLFxuICAgIGludm9rZVBhcnRpYWw6IGludm9rZVBhcnRpYWxXcmFwcGVyLFxuXG4gICAgZm46IGZ1bmN0aW9uKGkpIHtcbiAgICAgIGxldCByZXQgPSB0ZW1wbGF0ZVNwZWNbaV07XG4gICAgICByZXQuZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjW2kgKyAnX2QnXTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIHByb2dyYW1zOiBbXSxcbiAgICBwcm9ncmFtOiBmdW5jdGlvbihpLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgICBsZXQgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICAgIGZuID0gdGhpcy5mbihpKTtcbiAgICAgIGlmIChkYXRhIHx8IGRlcHRocyB8fCBibG9ja1BhcmFtcyB8fCBkZWNsYXJlZEJsb2NrUGFyYW1zKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgICAgfSBlbHNlIGlmICghcHJvZ3JhbVdyYXBwZXIpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2dyYW1XcmFwcGVyO1xuICAgIH0sXG5cbiAgICBkYXRhOiBmdW5jdGlvbih2YWx1ZSwgZGVwdGgpIHtcbiAgICAgIHdoaWxlICh2YWx1ZSAmJiBkZXB0aC0tKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuX3BhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIG1lcmdlOiBmdW5jdGlvbihwYXJhbSwgY29tbW9uKSB7XG4gICAgICBsZXQgb2JqID0gcGFyYW0gfHwgY29tbW9uO1xuXG4gICAgICBpZiAocGFyYW0gJiYgY29tbW9uICYmIChwYXJhbSAhPT0gY29tbW9uKSkge1xuICAgICAgICBvYmogPSBVdGlscy5leHRlbmQoe30sIGNvbW1vbiwgcGFyYW0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICBub29wOiBlbnYuVk0ubm9vcCxcbiAgICBjb21waWxlckluZm86IHRlbXBsYXRlU3BlYy5jb21waWxlclxuICB9O1xuXG4gIGZ1bmN0aW9uIHJldChjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwgJiYgdGVtcGxhdGVTcGVjLnVzZURhdGEpIHtcbiAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcbiAgICB9XG4gICAgbGV0IGRlcHRocyxcbiAgICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgaWYgKG9wdGlvbnMuZGVwdGhzKSB7XG4gICAgICAgIGRlcHRocyA9IGNvbnRleHQgIT09IG9wdGlvbnMuZGVwdGhzWzBdID8gW2NvbnRleHRdLmNvbmNhdChvcHRpb25zLmRlcHRocykgOiBvcHRpb25zLmRlcHRocztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlcHRocyA9IFtjb250ZXh0XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWluKGNvbnRleHQvKiwgb3B0aW9ucyovKSB7XG4gICAgICByZXR1cm4gJycgKyB0ZW1wbGF0ZVNwZWMubWFpbihjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIH1cbiAgICBtYWluID0gZXhlY3V0ZURlY29yYXRvcnModGVtcGxhdGVTcGVjLm1haW4sIG1haW4sIGNvbnRhaW5lciwgb3B0aW9ucy5kZXB0aHMgfHwgW10sIGRhdGEsIGJsb2NrUGFyYW1zKTtcbiAgICByZXR1cm4gbWFpbihjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxuICByZXQuaXNUb3AgPSB0cnVlO1xuXG4gIHJldC5fc2V0dXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwpIHtcbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuaGVscGVycywgZW52LmhlbHBlcnMpO1xuXG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwpIHtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMucGFydGlhbHMsIGVudi5wYXJ0aWFscyk7XG4gICAgICB9XG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwgfHwgdGVtcGxhdGVTcGVjLnVzZURlY29yYXRvcnMpIHtcbiAgICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5kZWNvcmF0b3JzLCBlbnYuZGVjb3JhdG9ycyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gb3B0aW9ucy5oZWxwZXJzO1xuICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3B0aW9ucy5wYXJ0aWFscztcbiAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gb3B0aW9ucy5kZWNvcmF0b3JzO1xuICAgIH1cbiAgfTtcblxuICByZXQuX2NoaWxkID0gZnVuY3Rpb24oaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgJiYgIWJsb2NrUGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdtdXN0IHBhc3MgYmxvY2sgcGFyYW1zJyk7XG4gICAgfVxuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzICYmICFkZXB0aHMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ211c3QgcGFzcyBwYXJlbnQgZGVwdGhzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgdGVtcGxhdGVTcGVjW2ldLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgfTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgZnVuY3Rpb24gcHJvZyhjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgY3VycmVudERlcHRocyA9IGRlcHRocztcbiAgICBpZiAoZGVwdGhzICYmIGNvbnRleHQgIT09IGRlcHRoc1swXSkge1xuICAgICAgY3VycmVudERlcHRocyA9IFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4oY29udGFpbmVyLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLFxuICAgICAgICBvcHRpb25zLmRhdGEgfHwgZGF0YSxcbiAgICAgICAgYmxvY2tQYXJhbXMgJiYgW29wdGlvbnMuYmxvY2tQYXJhbXNdLmNvbmNhdChibG9ja1BhcmFtcyksXG4gICAgICAgIGN1cnJlbnREZXB0aHMpO1xuICB9XG5cbiAgcHJvZyA9IGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpO1xuXG4gIHByb2cucHJvZ3JhbSA9IGk7XG4gIHByb2cuZGVwdGggPSBkZXB0aHMgPyBkZXB0aHMubGVuZ3RoIDogMDtcbiAgcHJvZy5ibG9ja1BhcmFtcyA9IGRlY2xhcmVkQmxvY2tQYXJhbXMgfHwgMDtcbiAgcmV0dXJuIHByb2c7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIGlmICghcGFydGlhbCkge1xuICAgIGlmIChvcHRpb25zLm5hbWUgPT09ICdAcGFydGlhbC1ibG9jaycpIHtcbiAgICAgIHBhcnRpYWwgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIXBhcnRpYWwuY2FsbCAmJiAhb3B0aW9ucy5uYW1lKSB7XG4gICAgLy8gVGhpcyBpcyBhIGR5bmFtaWMgcGFydGlhbCB0aGF0IHJldHVybmVkIGEgc3RyaW5nXG4gICAgb3B0aW9ucy5uYW1lID0gcGFydGlhbDtcbiAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1twYXJ0aWFsXTtcbiAgfVxuICByZXR1cm4gcGFydGlhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludm9rZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICBvcHRpb25zLnBhcnRpYWwgPSB0cnVlO1xuICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICBvcHRpb25zLmRhdGEuY29udGV4dFBhdGggPSBvcHRpb25zLmlkc1swXSB8fCBvcHRpb25zLmRhdGEuY29udGV4dFBhdGg7XG4gIH1cblxuICBsZXQgcGFydGlhbEJsb2NrO1xuICBpZiAob3B0aW9ucy5mbiAmJiBvcHRpb25zLmZuICE9PSBub29wKSB7XG4gICAgb3B0aW9ucy5kYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICBwYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAocGFydGlhbEJsb2NrLnBhcnRpYWxzKSB7XG4gICAgICBvcHRpb25zLnBhcnRpYWxzID0gVXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zLnBhcnRpYWxzLCBwYXJ0aWFsQmxvY2sucGFydGlhbHMpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQgJiYgcGFydGlhbEJsb2NrKSB7XG4gICAgcGFydGlhbCA9IHBhcnRpYWxCbG9jaztcbiAgfVxuXG4gIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgZm91bmQnKTtcbiAgfSBlbHNlIGlmIChwYXJ0aWFsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gcGFydGlhbChjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgcmV0dXJuICcnOyB9XG5cbmZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcbiAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG4gICAgZGF0YSA9IGRhdGEgPyBjcmVhdGVGcmFtZShkYXRhKSA6IHt9O1xuICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpIHtcbiAgaWYgKGZuLmRlY29yYXRvcikge1xuICAgIGxldCBwcm9wcyA9IHt9O1xuICAgIHByb2cgPSBmbi5kZWNvcmF0b3IocHJvZywgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGhzICYmIGRlcHRoc1swXSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgVXRpbHMuZXh0ZW5kKHByb2csIHByb3BzKTtcbiAgfVxuICByZXR1cm4gcHJvZztcbn1cbiJdfQ==


/***/ },
/* 21 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';
	
	exports.__esModule = true;
	
	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};
	
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUNlLFVBQVMsVUFBVSxFQUFFOztBQUVsQyxNQUFJLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU07TUFDdEQsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O0FBRWxDLFlBQVUsQ0FBQyxVQUFVLEdBQUcsWUFBVztBQUNqQyxRQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO0FBQ2xDLFVBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0tBQy9CO0FBQ0QsV0FBTyxVQUFVLENBQUM7R0FDbkIsQ0FBQztDQUNIIiwiZmlsZSI6Im5vLWNvbmZsaWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHdpbmRvdyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBsZXQgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = (function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    _get(Object.getPrototypeOf(App.prototype), "constructor", this).call(this);
	  }
	
	  _createClass(App, [{
	    key: "render",
	    value: function render() {
	      //JSX here!
	      return React.createElement(
	        "div",
	        { className: "container" },
	        React.createElement(
	          "section",
	          { className: "jumbotron" },
	          React.createElement(
	            "h3",
	            { className: "jumbotron-heading" },
	            "I am react component"
	          )
	        )
	      );
	    }
	  }]);
	
	  return App;
	})(React.Component);
	
	;
	
	exports["default"] = App;
	module.exports = exports["default"];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGRmOWFhNWFkOTQ0NTc0YzM1NzYiLCJ3ZWJwYWNrOi8vLy4vYXBwL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9qcy9tb2RzL21vZGFsL2RsZ19sb2FkaW5nLmpzIiwid2VicGFjazovLy8uL2FwcC9qcy9tb2RzL21vZGFsL3RtcGxfbG9hZGluZy5oYnMiLCJ3ZWJwYWNrOi8vLy4vfi9oYW5kbGViYXJzL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMucnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9iYXNlLmpzIiwid2VicGFjazovLy8uL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9lYWNoLmpzIiwid2VicGFjazovLy8uL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9pZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2xvb2t1cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL3dpdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvZGVjb3JhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9kZWNvcmF0b3JzL2lubGluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvc2FmZS1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9uby1jb25mbGljdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvanMvbW9kcy9fcmVhY3RfY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7aURDdEN3QixDQUEwQjs7OztvREFDbEMsRUFBNkI7Ozs7QUFFN0Msd0NBQVk7QUFDVixnQkFBYSxFQUFFLFdBQVc7RUFDM0IsQ0FBQzs7QUFFRixFQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxLQUFLLENBQUM7O0FBRW5DLFNBQVEsQ0FBQyxNQUFNLENBQUMsK0RBQU0sRUFBRSxR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Q29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDBkZjlhYTVhZDk0NDU3NGMzNTc2XG4gKiovIiwiaW1wb3J0IGRsZ19sb2FkaW5nIGZyb20gJy4vbW9kcy9tb2RhbC9kbGdfbG9hZGluZydcbmltcG9ydCBBcHAgZnJvbSAnLi9tb2RzL19yZWFjdF9jb21wb25lbnQuanN4J1xuXG5kbGdfbG9hZGluZyh7XG4gIGxvYWRpbmdfdGl0bGU6ICfmiJHmmK9oYnPlpLTpg6gzMidcbn0pXG5cbiQoJy5qcy1hcnRpY2xlJykuY3NzKCdjb2xvcicsJ3JlZCcpXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZV9mb3JtJykpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9qcy9pbmRleC5qc1xuICoqLyIsImltcG9ydCB0bXBsIGZyb20gJy4vdG1wbF9sb2FkaW5nLmhicydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgbGV0IGRlZmF1bHRfb3B0ID0ge1xuICAgIGxvYWRpbmdfdGl0bGU6ICfmiJHmmK9oYnPlpLTpg6gxJyxcbiAgICBsb2FkaW5nX2luZm86ICfmiJHmmK9oYnPkuLvkvZMxJ1xuICB9XG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRfb3B0LCBvcHRpb25zKVxuICBsZXQgJHRtcGwgPSAkKHRtcGwob3B0aW9ucykpXG4gICQoJ2JvZHknKS5hcHBlbmQoJHRtcGwpXG5cbiAgcmV0dXJuICR0bXBsXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9qcy9tb2RzL21vZGFsL2RsZ19sb2FkaW5nLmpzXG4gKiovIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiL1VzZXJzL1J5YW5ZdS9EZXNrdG9wL2d1bHAtd2VicGFjay1yZWFjdC9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDoge30sIGFsaWFzMj1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbHMtZ3JvdXBcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwib25lbW9kYWwtaGRcXFwiPlxcbiAgICA8aDQ+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmxvYWRpbmdfdGl0bGUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxvYWRpbmdfdGl0bGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImxvYWRpbmdfdGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oND5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwib25lbW9kYWwtYmQgb25lbW9kYWwtbG9hZGluZ1xcXCI+XFxuICAgIDxwPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5sb2FkaW5nX2luZm8gfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxvYWRpbmdfaW5mbyA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwibG9hZGluZ19pbmZvXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvcD5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9qcy9tb2RzL21vZGFsL3RtcGxfbG9hZGluZy5oYnNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgNFxuICoqLyIsIi8vIENyZWF0ZSBhIHNpbXBsZSBwYXRoIGFsaWFzIHRvIGFsbG93IGJyb3dzZXJpZnkgdG8gcmVzb2x2ZVxuLy8gdGhlIHJ1bnRpbWUgb24gYSBzdXBwb3J0ZWQgcGF0aC5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUnKVsnZGVmYXVsdCddO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaGFuZGxlYmFycy9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDRcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbJ2RlZmF1bHQnXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfaGFuZGxlYmFyc0Jhc2UgPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvYmFzZScpO1xuXG52YXIgYmFzZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oYW5kbGViYXJzQmFzZSk7XG5cbi8vIEVhY2ggb2YgdGhlc2UgYXVnbWVudCB0aGUgSGFuZGxlYmFycyBvYmplY3QuIE5vIG5lZWQgdG8gc2V0dXAgaGVyZS5cbi8vIChUaGlzIGlzIGRvbmUgdG8gZWFzaWx5IHNoYXJlIGNvZGUgYmV0d2VlbiBjb21tb25qcyBhbmQgYnJvd3NlIGVudnMpXG5cbnZhciBfaGFuZGxlYmFyc1NhZmVTdHJpbmcgPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvc2FmZS1zdHJpbmcnKTtcblxudmFyIF9oYW5kbGViYXJzU2FmZVN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzU2FmZVN0cmluZyk7XG5cbnZhciBfaGFuZGxlYmFyc0V4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vaGFuZGxlYmFycy9leGNlcHRpb24nKTtcblxudmFyIF9oYW5kbGViYXJzRXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNFeGNlcHRpb24pO1xuXG52YXIgX2hhbmRsZWJhcnNVdGlscyA9IHJlcXVpcmUoJy4vaGFuZGxlYmFycy91dGlscycpO1xuXG52YXIgVXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaGFuZGxlYmFyc1V0aWxzKTtcblxudmFyIF9oYW5kbGViYXJzUnVudGltZSA9IHJlcXVpcmUoJy4vaGFuZGxlYmFycy9ydW50aW1lJyk7XG5cbnZhciBydW50aW1lID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNSdW50aW1lKTtcblxudmFyIF9oYW5kbGViYXJzTm9Db25mbGljdCA9IHJlcXVpcmUoJy4vaGFuZGxlYmFycy9uby1jb25mbGljdCcpO1xuXG52YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNOb0NvbmZsaWN0KTtcblxuLy8gRm9yIGNvbXBhdGliaWxpdHkgYW5kIHVzYWdlIG91dHNpZGUgb2YgbW9kdWxlIHN5c3RlbXMsIG1ha2UgdGhlIEhhbmRsZWJhcnMgb2JqZWN0IGEgbmFtZXNwYWNlXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBoYiA9IG5ldyBiYXNlLkhhbmRsZWJhcnNFbnZpcm9ubWVudCgpO1xuXG4gIFV0aWxzLmV4dGVuZChoYiwgYmFzZSk7XG4gIGhiLlNhZmVTdHJpbmcgPSBfaGFuZGxlYmFyc1NhZmVTdHJpbmcyWydkZWZhdWx0J107XG4gIGhiLkV4Y2VwdGlvbiA9IF9oYW5kbGViYXJzRXhjZXB0aW9uMlsnZGVmYXVsdCddO1xuICBoYi5VdGlscyA9IFV0aWxzO1xuICBoYi5lc2NhcGVFeHByZXNzaW9uID0gVXRpbHMuZXNjYXBlRXhwcmVzc2lvbjtcblxuICBoYi5WTSA9IHJ1bnRpbWU7XG4gIGhiLnRlbXBsYXRlID0gZnVuY3Rpb24gKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG52YXIgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbl9oYW5kbGViYXJzTm9Db25mbGljdDJbJ2RlZmF1bHQnXShpbnN0KTtcblxuaW5zdFsnZGVmYXVsdCddID0gaW5zdDtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gaW5zdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMbkoxYm5ScGJXVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T0VKQlFYTkNMRzFDUVVGdFFqczdTVUZCTjBJc1NVRkJTVHM3T3pzN2IwTkJTVThzTUVKQlFUQkNPenM3TzIxRFFVTXpRaXgzUWtGQmQwSTdPenM3SzBKQlEzWkNMRzlDUVVGdlFqczdTVUZCTDBJc1MwRkJTenM3YVVOQlExRXNjMEpCUVhOQ096dEpRVUZ1UXl4UFFVRlBPenR2UTBGRlNTd3dRa0ZCTUVJN096czdPMEZCUjJwRUxGTkJRVk1zVFVGQlRTeEhRVUZITzBGQlEyaENMRTFCUVVrc1JVRkJSU3hIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhGUVVGRkxFTkJRVU03TzBGQlJURkRMRTlCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTNaQ0xFbEJRVVVzUTBGQlF5eFZRVUZWTEc5RFFVRmhMRU5CUVVNN1FVRkRNMElzU1VGQlJTeERRVUZETEZOQlFWTXNiVU5CUVZrc1EwRkJRenRCUVVONlFpeEpRVUZGTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRenRCUVVOcVFpeEpRVUZGTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzUzBGQlN5eERRVUZETEdkQ1FVRm5RaXhEUVVGRE96dEJRVVUzUXl4SlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFOUJRVThzUTBGQlF6dEJRVU5vUWl4SlFVRkZMRU5CUVVNc1VVRkJVU3hIUVVGSExGVkJRVk1zU1VGQlNTeEZRVUZGTzBGQlF6TkNMRmRCUVU4c1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1IwRkRia01zUTBGQlF6czdRVUZGUml4VFFVRlBMRVZCUVVVc1EwRkJRenREUVVOWU96dEJRVVZFTEVsQlFVa3NTVUZCU1N4SFFVRkhMRTFCUVUwc1JVRkJSU3hEUVVGRE8wRkJRM0JDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE96dEJRVVZ5UWl4clEwRkJWeXhKUVVGSkxFTkJRVU1zUTBGQlF6czdRVUZGYWtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXpzN2NVSkJSVklzU1VGQlNTSXNJbVpwYkdVaU9pSm9ZVzVrYkdWaVlYSnpMbkoxYm5ScGJXVXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnS2lCaGN5QmlZWE5sSUdaeWIyMGdKeTR2YUdGdVpHeGxZbUZ5Y3k5aVlYTmxKenRjYmx4dUx5OGdSV0ZqYUNCdlppQjBhR1Z6WlNCaGRXZHRaVzUwSUhSb1pTQklZVzVrYkdWaVlYSnpJRzlpYW1WamRDNGdUbThnYm1WbFpDQjBieUJ6WlhSMWNDQm9aWEpsTGx4dUx5OGdLRlJvYVhNZ2FYTWdaRzl1WlNCMGJ5QmxZWE5wYkhrZ2MyaGhjbVVnWTI5a1pTQmlaWFIzWldWdUlHTnZiVzF2Ym1weklHRnVaQ0JpY205M2MyVWdaVzUyY3lsY2JtbHRjRzl5ZENCVFlXWmxVM1J5YVc1bklHWnliMjBnSnk0dmFHRnVaR3hsWW1GeWN5OXpZV1psTFhOMGNtbHVaeWM3WEc1cGJYQnZjblFnUlhoalpYQjBhVzl1SUdaeWIyMGdKeTR2YUdGdVpHeGxZbUZ5Y3k5bGVHTmxjSFJwYjI0bk8xeHVhVzF3YjNKMElDb2dZWE1nVlhScGJITWdabkp2YlNBbkxpOW9ZVzVrYkdWaVlYSnpMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQXFJR0Z6SUhKMWJuUnBiV1VnWm5KdmJTQW5MaTlvWVc1a2JHVmlZWEp6TDNKMWJuUnBiV1VuTzF4dVhHNXBiWEJ2Y25RZ2JtOURiMjVtYkdsamRDQm1jbTl0SUNjdUwyaGhibVJzWldKaGNuTXZibTh0WTI5dVpteHBZM1FuTzF4dVhHNHZMeUJHYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0JoYm1RZ2RYTmhaMlVnYjNWMGMybGtaU0J2WmlCdGIyUjFiR1VnYzNsemRHVnRjeXdnYldGclpTQjBhR1VnU0dGdVpHeGxZbUZ5Y3lCdlltcGxZM1FnWVNCdVlXMWxjM0JoWTJWY2JtWjFibU4wYVc5dUlHTnlaV0YwWlNncElIdGNiaUFnYkdWMElHaGlJRDBnYm1WM0lHSmhjMlV1U0dGdVpHeGxZbUZ5YzBWdWRtbHliMjV0Wlc1MEtDazdYRzVjYmlBZ1ZYUnBiSE11WlhoMFpXNWtLR2hpTENCaVlYTmxLVHRjYmlBZ2FHSXVVMkZtWlZOMGNtbHVaeUE5SUZOaFptVlRkSEpwYm1jN1hHNGdJR2hpTGtWNFkyVndkR2x2YmlBOUlFVjRZMlZ3ZEdsdmJqdGNiaUFnYUdJdVZYUnBiSE1nUFNCVmRHbHNjenRjYmlBZ2FHSXVaWE5qWVhCbFJYaHdjbVZ6YzJsdmJpQTlJRlYwYVd4ekxtVnpZMkZ3WlVWNGNISmxjM05wYjI0N1hHNWNiaUFnYUdJdVZrMGdQU0J5ZFc1MGFXMWxPMXh1SUNCb1lpNTBaVzF3YkdGMFpTQTlJR1oxYm1OMGFXOXVLSE53WldNcElIdGNiaUFnSUNCeVpYUjFjbTRnY25WdWRHbHRaUzUwWlcxd2JHRjBaU2h6Y0dWakxDQm9ZaWs3WEc0Z0lIMDdYRzVjYmlBZ2NtVjBkWEp1SUdoaU8xeHVmVnh1WEc1c1pYUWdhVzV6ZENBOUlHTnlaV0YwWlNncE8xeHVhVzV6ZEM1amNtVmhkR1VnUFNCamNtVmhkR1U3WEc1Y2JtNXZRMjl1Wm14cFkzUW9hVzV6ZENrN1hHNWNibWx1YzNSYkoyUmxabUYxYkhRblhTQTlJR2x1YzNRN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHbHVjM1E3WEc0aVhYMD1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy5ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDRcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkhhbmRsZWJhcnNFbnZpcm9ubWVudCA9IEhhbmRsZWJhcnNFbnZpcm9ubWVudDtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF9leGNlcHRpb24gPSByZXF1aXJlKCcuL2V4Y2VwdGlvbicpO1xuXG52YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG52YXIgX2hlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcblxudmFyIF9kZWNvcmF0b3JzID0gcmVxdWlyZSgnLi9kZWNvcmF0b3JzJyk7XG5cbnZhciBfbG9nZ2VyID0gcmVxdWlyZSgnLi9sb2dnZXInKTtcblxudmFyIF9sb2dnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9nZ2VyKTtcblxudmFyIFZFUlNJT04gPSAnNC4wLjUnO1xuZXhwb3J0cy5WRVJTSU9OID0gVkVSU0lPTjtcbnZhciBDT01QSUxFUl9SRVZJU0lPTiA9IDc7XG5cbmV4cG9ydHMuQ09NUElMRVJfUkVWSVNJT04gPSBDT01QSUxFUl9SRVZJU0lPTjtcbnZhciBSRVZJU0lPTl9DSEFOR0VTID0ge1xuICAxOiAnPD0gMS4wLnJjLjInLCAvLyAxLjAucmMuMiBpcyBhY3R1YWxseSByZXYyIGJ1dCBkb2Vzbid0IHJlcG9ydCBpdFxuICAyOiAnPT0gMS4wLjAtcmMuMycsXG4gIDM6ICc9PSAxLjAuMC1yYy40JyxcbiAgNDogJz09IDEueC54JyxcbiAgNTogJz09IDIuMC4wLWFscGhhLngnLFxuICA2OiAnPj0gMi4wLjAtYmV0YS4xJyxcbiAgNzogJz49IDQuMC4wJ1xufTtcblxuZXhwb3J0cy5SRVZJU0lPTl9DSEFOR0VTID0gUkVWSVNJT05fQ0hBTkdFUztcbnZhciBvYmplY3RUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbmZ1bmN0aW9uIEhhbmRsZWJhcnNFbnZpcm9ubWVudChoZWxwZXJzLCBwYXJ0aWFscywgZGVjb3JhdG9ycykge1xuICB0aGlzLmhlbHBlcnMgPSBoZWxwZXJzIHx8IHt9O1xuICB0aGlzLnBhcnRpYWxzID0gcGFydGlhbHMgfHwge307XG4gIHRoaXMuZGVjb3JhdG9ycyA9IGRlY29yYXRvcnMgfHwge307XG5cbiAgX2hlbHBlcnMucmVnaXN0ZXJEZWZhdWx0SGVscGVycyh0aGlzKTtcbiAgX2RlY29yYXRvcnMucmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyh0aGlzKTtcbn1cblxuSGFuZGxlYmFyc0Vudmlyb25tZW50LnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IEhhbmRsZWJhcnNFbnZpcm9ubWVudCxcblxuICBsb2dnZXI6IF9sb2dnZXIyWydkZWZhdWx0J10sXG4gIGxvZzogX2xvZ2dlcjJbJ2RlZmF1bHQnXS5sb2csXG5cbiAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uIHJlZ2lzdGVySGVscGVyKG5hbWUsIGZuKSB7XG4gICAgaWYgKF91dGlscy50b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgaGVscGVycycpO1xuICAgICAgfVxuICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLmhlbHBlcnMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlbHBlcnNbbmFtZV0gPSBmbjtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uIHVucmVnaXN0ZXJIZWxwZXIobmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmhlbHBlcnNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbiByZWdpc3RlclBhcnRpYWwobmFtZSwgcGFydGlhbCkge1xuICAgIGlmIChfdXRpbHMudG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLnBhcnRpYWxzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwYXJ0aWFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXR0ZW1wdGluZyB0byByZWdpc3RlciBhIHBhcnRpYWwgY2FsbGVkIFwiJyArIG5hbWUgKyAnXCIgYXMgdW5kZWZpbmVkJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbiB1bnJlZ2lzdGVyUGFydGlhbChuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uIHJlZ2lzdGVyRGVjb3JhdG9yKG5hbWUsIGZuKSB7XG4gICAgaWYgKF91dGlscy50b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpO1xuICAgICAgfVxuICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLmRlY29yYXRvcnMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlY29yYXRvcnNbbmFtZV0gPSBmbjtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uIHVucmVnaXN0ZXJEZWNvcmF0b3IobmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG4gIH1cbn07XG5cbnZhciBsb2cgPSBfbG9nZ2VyMlsnZGVmYXVsdCddLmxvZztcblxuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmNyZWF0ZUZyYW1lID0gX3V0aWxzLmNyZWF0ZUZyYW1lO1xuZXhwb3J0cy5sb2dnZXIgPSBfbG9nZ2VyMlsnZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJKaGMyVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdjVUpCUVRSRExGTkJRVk03TzNsQ1FVTXZRaXhoUVVGaE96czdPM1ZDUVVORkxGZEJRVmM3T3pCQ1FVTlNMR05CUVdNN08zTkNRVU51UXl4VlFVRlZPenM3TzBGQlJYUkNMRWxCUVUwc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF6czdRVUZEZUVJc1NVRkJUU3hwUWtGQmFVSXNSMEZCUnl4RFFVRkRMRU5CUVVNN096dEJRVVUxUWl4SlFVRk5MR2RDUVVGblFpeEhRVUZITzBGQlF6bENMRWRCUVVNc1JVRkJSU3hoUVVGaE8wRkJRMmhDTEVkQlFVTXNSVUZCUlN4bFFVRmxPMEZCUTJ4Q0xFZEJRVU1zUlVGQlJTeGxRVUZsTzBGQlEyeENMRWRCUVVNc1JVRkJSU3hWUVVGVk8wRkJRMklzUjBGQlF5eEZRVUZGTEd0Q1FVRnJRanRCUVVOeVFpeEhRVUZETEVWQlFVVXNhVUpCUVdsQ08wRkJRM0JDTEVkQlFVTXNSVUZCUlN4VlFVRlZPME5CUTJRc1EwRkJRenM3TzBGQlJVWXNTVUZCVFN4VlFVRlZMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdPMEZCUlRsQ0xGTkJRVk1zY1VKQlFYRkNMRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUlVGQlJTeFZRVUZWTEVWQlFVVTdRVUZEYmtVc1RVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVsQlFVa3NSVUZCUlN4RFFVRkRPMEZCUXpkQ0xFMUJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4SlFVRkpMRVZCUVVVc1EwRkJRenRCUVVNdlFpeE5RVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRlZCUVZVc1NVRkJTU3hGUVVGRkxFTkJRVU03TzBGQlJXNURMR3REUVVGMVFpeEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVTTNRaXgzUTBGQk1FSXNTVUZCU1N4RFFVRkRMRU5CUVVNN1EwRkRha003TzBGQlJVUXNjVUpCUVhGQ0xFTkJRVU1zVTBGQlV5eEhRVUZITzBGQlEyaERMR0ZCUVZjc1JVRkJSU3h4UWtGQmNVSTdPMEZCUld4RExGRkJRVTBzY1VKQlFWRTdRVUZEWkN4TFFVRkhMRVZCUVVVc2IwSkJRVThzUjBGQlJ6czdRVUZGWml4blFrRkJZeXhGUVVGRkxIZENRVUZUTEVsQlFVa3NSVUZCUlN4RlFVRkZMRVZCUVVVN1FVRkRha01zVVVGQlNTeG5Ra0ZCVXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzVlVGQlZTeEZRVUZGTzBGQlEzUkRMRlZCUVVrc1JVRkJSU3hGUVVGRk8wRkJRVVVzWTBGQlRTd3lRa0ZCWXl4NVEwRkJlVU1zUTBGQlF5eERRVUZETzA5QlFVVTdRVUZETTBVc2IwSkJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRMUVVNMVFpeE5RVUZOTzBGQlEwd3NWVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdTMEZEZWtJN1IwRkRSanRCUVVORUxHdENRVUZuUWl4RlFVRkZMREJDUVVGVExFbEJRVWtzUlVGQlJUdEJRVU12UWl4WFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdSMEZETTBJN08wRkJSVVFzYVVKQlFXVXNSVUZCUlN4NVFrRkJVeXhKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEzWkRMRkZCUVVrc1owSkJRVk1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRlZCUVZVc1JVRkJSVHRCUVVOMFF5eHZRa0ZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzB0QlF6ZENMRTFCUVUwN1FVRkRUQ3hWUVVGSkxFOUJRVThzVDBGQlR5eExRVUZMTEZkQlFWY3NSVUZCUlR0QlFVTnNReXhqUVVGTkxIbEZRVUV3UkN4SlFVRkpMRzlDUVVGcFFpeERRVUZETzA5QlEzWkdPMEZCUTBRc1ZVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNN1MwRkRMMEk3UjBGRFJqdEJRVU5FTEcxQ1FVRnBRaXhGUVVGRkxESkNRVUZUTEVsQlFVa3NSVUZCUlR0QlFVTm9ReXhYUVVGUExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1IwRkROVUk3TzBGQlJVUXNiVUpCUVdsQ0xFVkJRVVVzTWtKQlFWTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1JVRkJSVHRCUVVOd1F5eFJRVUZKTEdkQ1FVRlRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eFZRVUZWTEVWQlFVVTdRVUZEZEVNc1ZVRkJTU3hGUVVGRkxFVkJRVVU3UVVGQlJTeGpRVUZOTERKQ1FVRmpMRFJEUVVFMFF5eERRVUZETEVOQlFVTTdUMEZCUlR0QlFVTTVSU3h2UWtGQlR5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJReTlDTEUxQlFVMDdRVUZEVEN4VlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0TFFVTTFRanRIUVVOR08wRkJRMFFzY1VKQlFXMUNMRVZCUVVVc05rSkJRVk1zU1VGQlNTeEZRVUZGTzBGQlEyeERMRmRCUVU4c1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SFFVTTVRanREUVVOR0xFTkJRVU03TzBGQlJVc3NTVUZCU1N4SFFVRkhMRWRCUVVjc2IwSkJRVThzUjBGQlJ5eERRVUZET3pzN1VVRkZjRUlzVjBGQlZ6dFJRVUZGTEUxQlFVMGlMQ0ptYVd4bElqb2lZbUZ6WlM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdZM0psWVhSbFJuSmhiV1VzSUdWNGRHVnVaQ3dnZEc5VGRISnBibWQ5SUdaeWIyMGdKeTR2ZFhScGJITW5PMXh1YVcxd2IzSjBJRVY0WTJWd2RHbHZiaUJtY205dElDY3VMMlY0WTJWd2RHbHZiaWM3WEc1cGJYQnZjblFnZTNKbFoybHpkR1Z5UkdWbVlYVnNkRWhsYkhCbGNuTjlJR1p5YjIwZ0p5NHZhR1ZzY0dWeWN5YzdYRzVwYlhCdmNuUWdlM0psWjJsemRHVnlSR1ZtWVhWc2RFUmxZMjl5WVhSdmNuTjlJR1p5YjIwZ0p5NHZaR1ZqYjNKaGRHOXljeWM3WEc1cGJYQnZjblFnYkc5bloyVnlJR1p5YjIwZ0p5NHZiRzluWjJWeUp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElGWkZVbE5KVDA0Z1BTQW5OQzR3TGpVbk8xeHVaWGh3YjNKMElHTnZibk4wSUVOUFRWQkpURVZTWDFKRlZrbFRTVTlPSUQwZ056dGNibHh1Wlhod2IzSjBJR052Ym5OMElGSkZWa2xUU1U5T1gwTklRVTVIUlZNZ1BTQjdYRzRnSURFNklDYzhQU0F4TGpBdWNtTXVNaWNzSUM4dklERXVNQzV5WXk0eUlHbHpJR0ZqZEhWaGJHeDVJSEpsZGpJZ1luVjBJR1J2WlhOdUozUWdjbVZ3YjNKMElHbDBYRzRnSURJNklDYzlQU0F4TGpBdU1DMXlZeTR6Snl4Y2JpQWdNem9nSnowOUlERXVNQzR3TFhKakxqUW5MRnh1SUNBME9pQW5QVDBnTVM1NExuZ25MRnh1SUNBMU9pQW5QVDBnTWk0d0xqQXRZV3h3YUdFdWVDY3NYRzRnSURZNklDYytQU0F5TGpBdU1DMWlaWFJoTGpFbkxGeHVJQ0EzT2lBblBqMGdOQzR3TGpBblhHNTlPMXh1WEc1amIyNXpkQ0J2WW1wbFkzUlVlWEJsSUQwZ0oxdHZZbXBsWTNRZ1QySnFaV04wWFNjN1hHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQklZVzVrYkdWaVlYSnpSVzUyYVhKdmJtMWxiblFvYUdWc2NHVnljeXdnY0dGeWRHbGhiSE1zSUdSbFkyOXlZWFJ2Y25NcElIdGNiaUFnZEdocGN5NW9aV3h3WlhKeklEMGdhR1ZzY0dWeWN5QjhmQ0I3ZlR0Y2JpQWdkR2hwY3k1d1lYSjBhV0ZzY3lBOUlIQmhjblJwWVd4eklIeDhJSHQ5TzF4dUlDQjBhR2x6TG1SbFkyOXlZWFJ2Y25NZ1BTQmtaV052Y21GMGIzSnpJSHg4SUh0OU8xeHVYRzRnSUhKbFoybHpkR1Z5UkdWbVlYVnNkRWhsYkhCbGNuTW9kR2hwY3lrN1hHNGdJSEpsWjJsemRHVnlSR1ZtWVhWc2RFUmxZMjl5WVhSdmNuTW9kR2hwY3lrN1hHNTlYRzVjYmtoaGJtUnNaV0poY25ORmJuWnBjbTl1YldWdWRDNXdjbTkwYjNSNWNHVWdQU0I3WEc0Z0lHTnZibk4wY25WamRHOXlPaUJJWVc1a2JHVmlZWEp6Ulc1MmFYSnZibTFsYm5Rc1hHNWNiaUFnYkc5bloyVnlPaUJzYjJkblpYSXNYRzRnSUd4dlp6b2diRzluWjJWeUxteHZaeXhjYmx4dUlDQnlaV2RwYzNSbGNraGxiSEJsY2pvZ1puVnVZM1JwYjI0b2JtRnRaU3dnWm00cElIdGNiaUFnSUNCcFppQW9kRzlUZEhKcGJtY3VZMkZzYkNodVlXMWxLU0E5UFQwZ2IySnFaV04wVkhsd1pTa2dlMXh1SUNBZ0lDQWdhV1lnS0dadUtTQjdJSFJvY205M0lHNWxkeUJGZUdObGNIUnBiMjRvSjBGeVp5QnViM1FnYzNWd2NHOXlkR1ZrSUhkcGRHZ2diWFZzZEdsd2JHVWdhR1ZzY0dWeWN5Y3BPeUI5WEc0Z0lDQWdJQ0JsZUhSbGJtUW9kR2hwY3k1b1pXeHdaWEp6TENCdVlXMWxLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVvWld4d1pYSnpXMjVoYldWZElEMGdabTQ3WEc0Z0lDQWdmVnh1SUNCOUxGeHVJQ0IxYm5KbFoybHpkR1Z5U0dWc2NHVnlPaUJtZFc1amRHbHZiaWh1WVcxbEtTQjdYRzRnSUNBZ1pHVnNaWFJsSUhSb2FYTXVhR1ZzY0dWeWMxdHVZVzFsWFR0Y2JpQWdmU3hjYmx4dUlDQnlaV2RwYzNSbGNsQmhjblJwWVd3NklHWjFibU4wYVc5dUtHNWhiV1VzSUhCaGNuUnBZV3dwSUh0Y2JpQWdJQ0JwWmlBb2RHOVRkSEpwYm1jdVkyRnNiQ2h1WVcxbEtTQTlQVDBnYjJKcVpXTjBWSGx3WlNrZ2UxeHVJQ0FnSUNBZ1pYaDBaVzVrS0hSb2FYTXVjR0Z5ZEdsaGJITXNJRzVoYldVcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JwWmlBb2RIbHdaVzltSUhCaGNuUnBZV3dnUFQwOUlDZDFibVJsWm1sdVpXUW5LU0I3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmVHTmxjSFJwYjI0b1lFRjBkR1Z0Y0hScGJtY2dkRzhnY21WbmFYTjBaWElnWVNCd1lYSjBhV0ZzSUdOaGJHeGxaQ0JjSWlSN2JtRnRaWDFjSWlCaGN5QjFibVJsWm1sdVpXUmdLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJSFJvYVhNdWNHRnlkR2xoYkhOYmJtRnRaVjBnUFNCd1lYSjBhV0ZzTzF4dUlDQWdJSDFjYmlBZ2ZTeGNiaUFnZFc1eVpXZHBjM1JsY2xCaGNuUnBZV3c2SUdaMWJtTjBhVzl1S0c1aGJXVXBJSHRjYmlBZ0lDQmtaV3hsZEdVZ2RHaHBjeTV3WVhKMGFXRnNjMXR1WVcxbFhUdGNiaUFnZlN4Y2JseHVJQ0J5WldkcGMzUmxja1JsWTI5eVlYUnZjam9nWm5WdVkzUnBiMjRvYm1GdFpTd2dabTRwSUh0Y2JpQWdJQ0JwWmlBb2RHOVRkSEpwYm1jdVkyRnNiQ2h1WVcxbEtTQTlQVDBnYjJKcVpXTjBWSGx3WlNrZ2UxeHVJQ0FnSUNBZ2FXWWdLR1p1S1NCN0lIUm9jbTkzSUc1bGR5QkZlR05sY0hScGIyNG9KMEZ5WnlCdWIzUWdjM1Z3Y0c5eWRHVmtJSGRwZEdnZ2JYVnNkR2x3YkdVZ1pHVmpiM0poZEc5eWN5Y3BPeUI5WEc0Z0lDQWdJQ0JsZUhSbGJtUW9kR2hwY3k1a1pXTnZjbUYwYjNKekxDQnVZVzFsS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdkR2hwY3k1a1pXTnZjbUYwYjNKelcyNWhiV1ZkSUQwZ1ptNDdYRzRnSUNBZ2ZWeHVJQ0I5TEZ4dUlDQjFibkpsWjJsemRHVnlSR1ZqYjNKaGRHOXlPaUJtZFc1amRHbHZiaWh1WVcxbEtTQjdYRzRnSUNBZ1pHVnNaWFJsSUhSb2FYTXVaR1ZqYjNKaGRHOXljMXR1WVcxbFhUdGNiaUFnZlZ4dWZUdGNibHh1Wlhod2IzSjBJR3hsZENCc2IyY2dQU0JzYjJkblpYSXViRzluTzF4dVhHNWxlSEJ2Y25RZ2UyTnlaV0YwWlVaeVlXMWxMQ0JzYjJkblpYSjlPMXh1SWwxOVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2Jhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgNFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZXh0ZW5kID0gZXh0ZW5kO1xuZXhwb3J0cy5pbmRleE9mID0gaW5kZXhPZjtcbmV4cG9ydHMuZXNjYXBlRXhwcmVzc2lvbiA9IGVzY2FwZUV4cHJlc3Npb247XG5leHBvcnRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuZXhwb3J0cy5jcmVhdGVGcmFtZSA9IGNyZWF0ZUZyYW1lO1xuZXhwb3J0cy5ibG9ja1BhcmFtcyA9IGJsb2NrUGFyYW1zO1xuZXhwb3J0cy5hcHBlbmRDb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoO1xudmFyIGVzY2FwZSA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnLFxuICBcIidcIjogJyYjeDI3OycsXG4gICdgJzogJyYjeDYwOycsXG4gICc9JzogJyYjeDNEOydcbn07XG5cbnZhciBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gICAgcG9zc2libGUgPSAvWyY8PlwiJ2A9XS87XG5cbmZ1bmN0aW9uIGVzY2FwZUNoYXIoY2hyKSB7XG4gIHJldHVybiBlc2NhcGVbY2hyXTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKG9iaiAvKiAsIC4uLnNvdXJjZSAqLykge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndW1lbnRzW2ldLCBrZXkpKSB7XG4gICAgICAgIG9ialtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nO1xuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59O1xuLy8gZmFsbGJhY2sgZm9yIG9sZGVyIHZlcnNpb25zIG9mIENocm9tZSBhbmQgU2FmYXJpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuaWYgKGlzRnVuY3Rpb24oL3gvKSkge1xuICBleHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbi8qIGVzbGludC1lbmFibGUgZnVuYy1zdHlsZSAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nIDogZmFsc2U7XG59O1xuXG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuLy8gT2xkZXIgSUUgdmVyc2lvbnMgZG8gbm90IGRpcmVjdGx5IHN1cHBvcnQgaW5kZXhPZiBzbyB3ZSBtdXN0IGltcGxlbWVudCBvdXIgb3duLCBzYWRseS5cblxuZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGJhZENoYXJzLCBlc2NhcGVDaGFyKTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuICB2YXIgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gYmxvY2tQYXJhbXMocGFyYW1zLCBpZHMpIHtcbiAgcGFyYW1zLnBhdGggPSBpZHM7XG4gIHJldHVybiBwYXJhbXM7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZENvbnRleHRQYXRoKGNvbnRleHRQYXRoLCBpZCkge1xuICByZXR1cm4gKGNvbnRleHRQYXRoID8gY29udGV4dFBhdGggKyAnLicgOiAnJykgKyBpZDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwzVjBhV3h6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN1FVRkJRU3hKUVVGTkxFMUJRVTBzUjBGQlJ6dEJRVU5pTEV0QlFVY3NSVUZCUlN4UFFVRlBPMEZCUTFvc1MwRkJSeXhGUVVGRkxFMUJRVTA3UVVGRFdDeExRVUZITEVWQlFVVXNUVUZCVFR0QlFVTllMRXRCUVVjc1JVRkJSU3hSUVVGUk8wRkJRMklzUzBGQlJ5eEZRVUZGTEZGQlFWRTdRVUZEWWl4TFFVRkhMRVZCUVVVc1VVRkJVVHRCUVVOaUxFdEJRVWNzUlVGQlJTeFJRVUZSTzBOQlEyUXNRMEZCUXpzN1FVRkZSaXhKUVVGTkxGRkJRVkVzUjBGQlJ5eFpRVUZaTzBsQlEzWkNMRkZCUVZFc1IwRkJSeXhYUVVGWExFTkJRVU03TzBGQlJUZENMRk5CUVZNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU4yUWl4VFFVRlBMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dERRVU53UWpzN1FVRkZUU3hUUVVGVExFMUJRVTBzUTBGQlF5eEhRVUZITEc5Q1FVRnRRanRCUVVNelF5eFBRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVONlF5eFRRVUZMTEVsQlFVa3NSMEZCUnl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdEJRVU0xUWl4VlFVRkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZETTBRc1YwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFBRVU01UWp0TFFVTkdPMGRCUTBZN08wRkJSVVFzVTBGQlR5eEhRVUZITEVOQlFVTTdRMEZEV2pzN1FVRkZUU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJRenM3T3pzN08wRkJTMmhFTEVsQlFVa3NWVUZCVlN4SFFVRkhMRzlDUVVGVExFdEJRVXNzUlVGQlJUdEJRVU12UWl4VFFVRlBMRTlCUVU4c1MwRkJTeXhMUVVGTExGVkJRVlVzUTBGQlF6dERRVU53UXl4RFFVRkRPenM3UVVGSFJpeEpRVUZKTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOdVFpeFZRVWxOTEZWQlFWVXNSMEZLYUVJc1ZVRkJWU3hIUVVGSExGVkJRVk1zUzBGQlN5eEZRVUZGTzBGQlF6TkNMRmRCUVU4c1QwRkJUeXhMUVVGTExFdEJRVXNzVlVGQlZTeEpRVUZKTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzYlVKQlFXMUNMRU5CUVVNN1IwRkRjRVlzUTBGQlF6dERRVU5JTzFGQlEwOHNWVUZCVlN4SFFVRldMRlZCUVZVN096czdPMEZCU1Znc1NVRkJUU3hQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEU5QlFVOHNTVUZCU1N4VlFVRlRMRXRCUVVzc1JVRkJSVHRCUVVOMFJDeFRRVUZQTEVGQlFVTXNTMEZCU3l4SlFVRkpMRTlCUVU4c1MwRkJTeXhMUVVGTExGRkJRVkVzUjBGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExHZENRVUZuUWl4SFFVRkhMRXRCUVVzc1EwRkJRenREUVVOcVJ5eERRVUZET3pzN096dEJRVWRMTEZOQlFWTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVU3UVVGRGNFTXNUMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTm9SQ3hSUVVGSkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4TFFVRkxMRVZCUVVVN1FVRkRkRUlzWVVGQlR5eERRVUZETEVOQlFVTTdTMEZEVmp0SFFVTkdPMEZCUTBRc1UwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dERRVU5ZT3p0QlFVZE5MRk5CUVZNc1owSkJRV2RDTEVOQlFVTXNUVUZCVFN4RlFVRkZPMEZCUTNaRExFMUJRVWtzVDBGQlR5eE5RVUZOTEV0QlFVc3NVVUZCVVN4RlFVRkZPenRCUVVVNVFpeFJRVUZKTEUxQlFVMHNTVUZCU1N4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRk8wRkJRek5DTEdGQlFVOHNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8wdEJRM2hDTEUxQlFVMHNTVUZCU1N4TlFVRk5MRWxCUVVrc1NVRkJTU3hGUVVGRk8wRkJRM3BDTEdGQlFVOHNSVUZCUlN4RFFVRkRPMHRCUTFnc1RVRkJUU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlEyeENMR0ZCUVU4c1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dExRVU53UWpzN096czdRVUZMUkN4VlFVRk5MRWRCUVVjc1JVRkJSU3hIUVVGSExFMUJRVTBzUTBGQlF6dEhRVU4wUWpzN1FVRkZSQ3hOUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSVHRCUVVGRkxGZEJRVThzVFVGQlRTeERRVUZETzBkQlFVVTdRVUZET1VNc1UwRkJUeXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenREUVVNM1F6czdRVUZGVFN4VFFVRlRMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVU3UVVGRE4wSXNUVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hMUVVGTExFdEJRVXNzUTBGQlF5eEZRVUZGTzBGQlEzcENMRmRCUVU4c1NVRkJTU3hEUVVGRE8wZEJRMklzVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNSVUZCUlR0QlFVTXZReXhYUVVGUExFbEJRVWtzUTBGQlF6dEhRVU5pTEUxQlFVMDdRVUZEVEN4WFFVRlBMRXRCUVVzc1EwRkJRenRIUVVOa08wTkJRMFk3TzBGQlJVMHNVMEZCVXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hGUVVGRk8wRkJRMnhETEUxQlFVa3NTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhGUVVGRkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZETDBJc1QwRkJTeXhEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdRVUZEZGtJc1UwRkJUeXhMUVVGTExFTkJRVU03UTBGRFpEczdRVUZGVFN4VFFVRlRMRmRCUVZjc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTzBGQlEzWkRMRkZCUVUwc1EwRkJReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzBGQlEyeENMRk5CUVU4c1RVRkJUU3hEUVVGRE8wTkJRMlk3TzBGQlJVMHNVMEZCVXl4cFFrRkJhVUlzUTBGQlF5eFhRVUZYTEVWQlFVVXNSVUZCUlN4RlFVRkZPMEZCUTJwRUxGTkJRVThzUTBGQlF5eFhRVUZYTEVkQlFVY3NWMEZCVnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVUVzUjBGQlNTeEZRVUZGTEVOQlFVTTdRMEZEY0VRaUxDSm1hV3hsSWpvaWRYUnBiSE11YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCbGMyTmhjR1VnUFNCN1hHNGdJQ2NtSnpvZ0p5WmhiWEE3Snl4Y2JpQWdKenduT2lBbkpteDBPeWNzWEc0Z0lDYytKem9nSnlabmREc25MRnh1SUNBblhDSW5PaUFuSm5GMWIzUTdKeXhjYmlBZ1hDSW5YQ0k2SUNjbUkzZ3lOenNuTEZ4dUlDQW5ZQ2M2SUNjbUkzZzJNRHNuTEZ4dUlDQW5QU2M2SUNjbUkzZ3pSRHNuWEc1OU8xeHVYRzVqYjI1emRDQmlZV1JEYUdGeWN5QTlJQzliSmp3K1hDSW5ZRDFkTDJjc1hHNGdJQ0FnSUNCd2IzTnphV0pzWlNBOUlDOWJKancrWENJbllEMWRMenRjYmx4dVpuVnVZM1JwYjI0Z1pYTmpZWEJsUTJoaGNpaGphSElwSUh0Y2JpQWdjbVYwZFhKdUlHVnpZMkZ3WlZ0amFISmRPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1pYaDBaVzVrS0c5aWFpOHFJQ3dnTGk0dWMyOTFjbU5sSUNvdktTQjdYRzRnSUdadmNpQW9iR1YwSUdrZ1BTQXhPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlHRnlaM1Z0Wlc1MGMxdHBYU2tnZTF4dUlDQWdJQ0FnYVdZZ0tFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaGhjbWQxYldWdWRITmJhVjBzSUd0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnYjJKcVcydGxlVjBnUFNCaGNtZDFiV1Z1ZEhOYmFWMWJhMlY1WFR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnYjJKcU8xeHVmVnh1WEc1bGVIQnZjblFnYkdWMElIUnZVM1J5YVc1bklEMGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp6dGNibHh1THk4Z1UyOTFjbU5sWkNCbWNtOXRJR3h2WkdGemFGeHVMeThnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJKbGMzUnBaV3B6TDJ4dlpHRnphQzlpYkc5aUwyMWhjM1JsY2k5TVNVTkZUbE5GTG5SNGRGeHVMeW9nWlhOc2FXNTBMV1JwYzJGaWJHVWdablZ1WXkxemRIbHNaU0FxTDF4dWJHVjBJR2x6Um5WdVkzUnBiMjRnUFNCbWRXNWpkR2x2YmloMllXeDFaU2tnZTF4dUlDQnlaWFIxY200Z2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBblpuVnVZM1JwYjI0bk8xeHVmVHRjYmk4dklHWmhiR3hpWVdOcklHWnZjaUJ2YkdSbGNpQjJaWEp6YVc5dWN5QnZaaUJEYUhKdmJXVWdZVzVrSUZOaFptRnlhVnh1THlvZ2FYTjBZVzVpZFd3Z2FXZHViM0psSUc1bGVIUWdLaTljYm1sbUlDaHBjMFoxYm1OMGFXOXVLQzk0THlrcElIdGNiaUFnYVhOR2RXNWpkR2x2YmlBOUlHWjFibU4wYVc5dUtIWmhiSFZsS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCMGIxTjBjbWx1Wnk1allXeHNLSFpoYkhWbEtTQTlQVDBnSjF0dlltcGxZM1FnUm5WdVkzUnBiMjVkSnp0Y2JpQWdmVHRjYm4xY2JtVjRjRzl5ZENCN2FYTkdkVzVqZEdsdmJuMDdYRzR2S2lCbGMyeHBiblF0Wlc1aFlteGxJR1oxYm1NdGMzUjViR1VnS2k5Y2JseHVMeW9nYVhOMFlXNWlkV3dnYVdkdWIzSmxJRzVsZUhRZ0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwRnljbUY1SUQwZ1FYSnlZWGt1YVhOQmNuSmhlU0I4ZkNCbWRXNWpkR2x2YmloMllXeDFaU2tnZTF4dUlDQnlaWFIxY200Z0tIWmhiSFZsSUNZbUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyOWlhbVZqZENjcElEOGdkRzlUZEhKcGJtY3VZMkZzYkNoMllXeDFaU2tnUFQwOUlDZGJiMkpxWldOMElFRnljbUY1WFNjZ09pQm1ZV3h6WlR0Y2JuMDdYRzVjYmk4dklFOXNaR1Z5SUVsRklIWmxjbk5wYjI1eklHUnZJRzV2ZENCa2FYSmxZM1JzZVNCemRYQndiM0owSUdsdVpHVjRUMllnYzI4Z2QyVWdiWFZ6ZENCcGJYQnNaVzFsYm5RZ2IzVnlJRzkzYml3Z2MyRmtiSGt1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnYVc1a1pYaFBaaWhoY25KaGVTd2dkbUZzZFdVcElIdGNiaUFnWm05eUlDaHNaWFFnYVNBOUlEQXNJR3hsYmlBOUlHRnljbUY1TG14bGJtZDBhRHNnYVNBOElHeGxianNnYVNzcktTQjdYRzRnSUNBZ2FXWWdLR0Z5Y21GNVcybGRJRDA5UFNCMllXeDFaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR2s3WEc0Z0lDQWdmVnh1SUNCOVhHNGdJSEpsZEhWeWJpQXRNVHRjYm4xY2JseHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdaWE5qWVhCbFJYaHdjbVZ6YzJsdmJpaHpkSEpwYm1jcElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCemRISnBibWNnSVQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0x5OGdaRzl1SjNRZ1pYTmpZWEJsSUZOaFptVlRkSEpwYm1kekxDQnphVzVqWlNCMGFHVjVKM0psSUdGc2NtVmhaSGtnYzJGbVpWeHVJQ0FnSUdsbUlDaHpkSEpwYm1jZ0ppWWdjM1J5YVc1bkxuUnZTRlJOVENrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhOMGNtbHVaeTUwYjBoVVRVd29LVHRjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLSE4wY21sdVp5QTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z0p5YzdYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2hjM1J5YVc1bktTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2MzUnlhVzVuSUNzZ0p5YzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdSbTl5WTJVZ1lTQnpkSEpwYm1jZ1kyOXVkbVZ5YzJsdmJpQmhjeUIwYUdseklIZHBiR3dnWW1VZ1pHOXVaU0JpZVNCMGFHVWdZWEJ3Wlc1a0lISmxaMkZ5Wkd4bGMzTWdZVzVrWEc0Z0lDQWdMeThnZEdobElISmxaMlY0SUhSbGMzUWdkMmxzYkNCa2J5QjBhR2x6SUhSeVlXNXpjR0Z5Wlc1MGJIa2dZbVZvYVc1a0lIUm9aU0J6WTJWdVpYTXNJR05oZFhOcGJtY2dhWE56ZFdWeklHbG1YRzRnSUNBZ0x5OGdZVzRnYjJKcVpXTjBKM01nZEc4Z2MzUnlhVzVuSUdoaGN5QmxjMk5oY0dWa0lHTm9ZWEpoWTNSbGNuTWdhVzRnYVhRdVhHNGdJQ0FnYzNSeWFXNW5JRDBnSnljZ0t5QnpkSEpwYm1jN1hHNGdJSDFjYmx4dUlDQnBaaUFvSVhCdmMzTnBZbXhsTG5SbGMzUW9jM1J5YVc1bktTa2dleUJ5WlhSMWNtNGdjM1J5YVc1bk95QjlYRzRnSUhKbGRIVnliaUJ6ZEhKcGJtY3VjbVZ3YkdGalpTaGlZV1JEYUdGeWN5d2daWE5qWVhCbFEyaGhjaWs3WEc1OVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnBjMFZ0Y0hSNUtIWmhiSFZsS1NCN1hHNGdJR2xtSUNnaGRtRnNkV1VnSmlZZ2RtRnNkV1VnSVQwOUlEQXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ2ZTQmxiSE5sSUdsbUlDaHBjMEZ5Y21GNUtIWmhiSFZsS1NBbUppQjJZV3gxWlM1c1pXNW5kR2dnUFQwOUlEQXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlHTnlaV0YwWlVaeVlXMWxLRzlpYW1WamRDa2dlMXh1SUNCc1pYUWdabkpoYldVZ1BTQmxlSFJsYm1Rb2UzMHNJRzlpYW1WamRDazdYRzRnSUdaeVlXMWxMbDl3WVhKbGJuUWdQU0J2WW1wbFkzUTdYRzRnSUhKbGRIVnliaUJtY21GdFpUdGNibjFjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdKc2IyTnJVR0Z5WVcxektIQmhjbUZ0Y3l3Z2FXUnpLU0I3WEc0Z0lIQmhjbUZ0Y3k1d1lYUm9JRDBnYVdSek8xeHVJQ0J5WlhSMWNtNGdjR0Z5WVcxek8xeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWVhCd1pXNWtRMjl1ZEdWNGRGQmhkR2dvWTI5dWRHVjRkRkJoZEdnc0lHbGtLU0I3WEc0Z0lISmxkSFZ5YmlBb1kyOXVkR1Y0ZEZCaGRHZ2dQeUJqYjI1MFpYaDBVR0YwYUNBcklDY3VKeUE2SUNjbktTQXJJR2xrTzF4dWZWeHVJbDE5XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvdXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgNFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIGVycm9yUHJvcHMgPSBbJ2Rlc2NyaXB0aW9uJywgJ2ZpbGVOYW1lJywgJ2xpbmVOdW1iZXInLCAnbWVzc2FnZScsICduYW1lJywgJ251bWJlcicsICdzdGFjayddO1xuXG5mdW5jdGlvbiBFeGNlcHRpb24obWVzc2FnZSwgbm9kZSkge1xuICB2YXIgbG9jID0gbm9kZSAmJiBub2RlLmxvYyxcbiAgICAgIGxpbmUgPSB1bmRlZmluZWQsXG4gICAgICBjb2x1bW4gPSB1bmRlZmluZWQ7XG4gIGlmIChsb2MpIHtcbiAgICBsaW5lID0gbG9jLnN0YXJ0LmxpbmU7XG4gICAgY29sdW1uID0gbG9jLnN0YXJ0LmNvbHVtbjtcblxuICAgIG1lc3NhZ2UgKz0gJyAtICcgKyBsaW5lICsgJzonICsgY29sdW1uO1xuICB9XG5cbiAgdmFyIHRtcCA9IEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG4gIC8vIFVuZm9ydHVuYXRlbHkgZXJyb3JzIGFyZSBub3QgZW51bWVyYWJsZSBpbiBDaHJvbWUgKGF0IGxlYXN0KSwgc28gYGZvciBwcm9wIGluIHRtcGAgZG9lc24ndCB3b3JrLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBlcnJvclByb3BzLmxlbmd0aDsgaWR4KyspIHtcbiAgICB0aGlzW2Vycm9yUHJvcHNbaWR4XV0gPSB0bXBbZXJyb3JQcm9wc1tpZHhdXTtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEV4Y2VwdGlvbik7XG4gIH1cblxuICBpZiAobG9jKSB7XG4gICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcbiAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgfVxufVxuXG5FeGNlcHRpb24ucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEV4Y2VwdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJWNFkyVndkR2x2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUTBFc1NVRkJUU3hWUVVGVkxFZEJRVWNzUTBGQlF5eGhRVUZoTEVWQlFVVXNWVUZCVlN4RlFVRkZMRmxCUVZrc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeEZRVUZGTEZGQlFWRXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenM3UVVGRmJrY3NVMEZCVXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUlVGQlJUdEJRVU5vUXl4TlFVRkpMRWRCUVVjc1IwRkJSeXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEVkQlFVYzdUVUZEZEVJc1NVRkJTU3haUVVGQk8wMUJRMG9zVFVGQlRTeFpRVUZCTEVOQlFVTTdRVUZEV0N4TlFVRkpMRWRCUVVjc1JVRkJSVHRCUVVOUUxGRkJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJRenRCUVVOMFFpeFZRVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU03TzBGQlJURkNMRmRCUVU4c1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeEhRVUZITEVkQlFVY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1IwRkRlRU03TzBGQlJVUXNUVUZCU1N4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6czdPMEZCUnpGRUxFOUJRVXNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhWUVVGVkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMEZCUTJoRUxGRkJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1IwRkRPVU03T3p0QlFVZEVMRTFCUVVrc1MwRkJTeXhEUVVGRExHbENRVUZwUWl4RlFVRkZPMEZCUXpOQ0xGTkJRVXNzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdSMEZETVVNN08wRkJSVVFzVFVGQlNTeEhRVUZITEVWQlFVVTdRVUZEVUN4UlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF6dEJRVU4yUWl4UlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dEhRVU4wUWp0RFFVTkdPenRCUVVWRUxGTkJRVk1zUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4TFFVRkxMRVZCUVVVc1EwRkJRenM3Y1VKQlJXNUNMRk5CUVZNaUxDSm1hV3hsSWpvaVpYaGpaWEIwYVc5dUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWEc1amIyNXpkQ0JsY25KdmNsQnliM0J6SUQwZ1d5ZGtaWE5qY21sd2RHbHZiaWNzSUNkbWFXeGxUbUZ0WlNjc0lDZHNhVzVsVG5WdFltVnlKeXdnSjIxbGMzTmhaMlVuTENBbmJtRnRaU2NzSUNkdWRXMWlaWEluTENBbmMzUmhZMnNuWFR0Y2JseHVablZ1WTNScGIyNGdSWGhqWlhCMGFXOXVLRzFsYzNOaFoyVXNJRzV2WkdVcElIdGNiaUFnYkdWMElHeHZZeUE5SUc1dlpHVWdKaVlnYm05a1pTNXNiMk1zWEc0Z0lDQWdJQ0JzYVc1bExGeHVJQ0FnSUNBZ1kyOXNkVzF1TzF4dUlDQnBaaUFvYkc5aktTQjdYRzRnSUNBZ2JHbHVaU0E5SUd4dll5NXpkR0Z5ZEM1c2FXNWxPMXh1SUNBZ0lHTnZiSFZ0YmlBOUlHeHZZeTV6ZEdGeWRDNWpiMngxYlc0N1hHNWNiaUFnSUNCdFpYTnpZV2RsSUNzOUlDY2dMU0FuSUNzZ2JHbHVaU0FySUNjNkp5QXJJR052YkhWdGJqdGNiaUFnZlZ4dVhHNGdJR3hsZENCMGJYQWdQU0JGY25KdmNpNXdjbTkwYjNSNWNHVXVZMjl1YzNSeWRXTjBiM0l1WTJGc2JDaDBhR2x6TENCdFpYTnpZV2RsS1R0Y2JseHVJQ0F2THlCVmJtWnZjblIxYm1GMFpXeDVJR1Z5Y205eWN5QmhjbVVnYm05MElHVnVkVzFsY21GaWJHVWdhVzRnUTJoeWIyMWxJQ2hoZENCc1pXRnpkQ2tzSUhOdklHQm1iM0lnY0hKdmNDQnBiaUIwYlhCZ0lHUnZaWE51SjNRZ2QyOXlheTVjYmlBZ1ptOXlJQ2hzWlhRZ2FXUjRJRDBnTURzZ2FXUjRJRHdnWlhKeWIzSlFjbTl3Y3k1c1pXNW5kR2c3SUdsa2VDc3JLU0I3WEc0Z0lDQWdkR2hwYzF0bGNuSnZjbEJ5YjNCelcybGtlRjFkSUQwZ2RHMXdXMlZ5Y205eVVISnZjSE5iYVdSNFhWMDdYRzRnSUgxY2JseHVJQ0F2S2lCcGMzUmhibUoxYkNCcFoyNXZjbVVnWld4elpTQXFMMXh1SUNCcFppQW9SWEp5YjNJdVkyRndkSFZ5WlZOMFlXTnJWSEpoWTJVcElIdGNiaUFnSUNCRmNuSnZjaTVqWVhCMGRYSmxVM1JoWTJ0VWNtRmpaU2gwYUdsekxDQkZlR05sY0hScGIyNHBPMXh1SUNCOVhHNWNiaUFnYVdZZ0tHeHZZeWtnZTF4dUlDQWdJSFJvYVhNdWJHbHVaVTUxYldKbGNpQTlJR3hwYm1VN1hHNGdJQ0FnZEdocGN5NWpiMngxYlc0Z1BTQmpiMngxYlc0N1hHNGdJSDFjYm4xY2JseHVSWGhqWlhCMGFXOXVMbkJ5YjNSdmRIbHdaU0E5SUc1bGR5QkZjbkp2Y2lncE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkZlR05sY0hScGIyNDdYRzRpWFgwPVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCA0XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5yZWdpc3RlckRlZmF1bHRIZWxwZXJzID0gcmVnaXN0ZXJEZWZhdWx0SGVscGVycztcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Jsb2NrLWhlbHBlci1taXNzaW5nJyk7XG5cbnZhciBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nKTtcblxudmFyIF9oZWxwZXJzRWFjaCA9IHJlcXVpcmUoJy4vaGVscGVycy9lYWNoJyk7XG5cbnZhciBfaGVscGVyc0VhY2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0VhY2gpO1xuXG52YXIgX2hlbHBlcnNIZWxwZXJNaXNzaW5nID0gcmVxdWlyZSgnLi9oZWxwZXJzL2hlbHBlci1taXNzaW5nJyk7XG5cbnZhciBfaGVscGVyc0hlbHBlck1pc3NpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0hlbHBlck1pc3NpbmcpO1xuXG52YXIgX2hlbHBlcnNJZiA9IHJlcXVpcmUoJy4vaGVscGVycy9pZicpO1xuXG52YXIgX2hlbHBlcnNJZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzSWYpO1xuXG52YXIgX2hlbHBlcnNMb2cgPSByZXF1aXJlKCcuL2hlbHBlcnMvbG9nJyk7XG5cbnZhciBfaGVscGVyc0xvZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzTG9nKTtcblxudmFyIF9oZWxwZXJzTG9va3VwID0gcmVxdWlyZSgnLi9oZWxwZXJzL2xvb2t1cCcpO1xuXG52YXIgX2hlbHBlcnNMb29rdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0xvb2t1cCk7XG5cbnZhciBfaGVscGVyc1dpdGggPSByZXF1aXJlKCcuL2hlbHBlcnMvd2l0aCcpO1xuXG52YXIgX2hlbHBlcnNXaXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNXaXRoKTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0SGVscGVycyhpbnN0YW5jZSkge1xuICBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG4gIF9oZWxwZXJzRWFjaDJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG4gIF9oZWxwZXJzSGVscGVyTWlzc2luZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG4gIF9oZWxwZXJzSWYyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuICBfaGVscGVyc0xvZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG4gIF9oZWxwZXJzTG9va3VwMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbiAgX2hlbHBlcnNXaXRoMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN2VVTkJRWFZETEdkRFFVRm5RenM3T3pzeVFrRkRPVU1zWjBKQlFXZENPenM3TzI5RFFVTlFMREJDUVVFd1FqczdPenQ1UWtGRGNrTXNZMEZCWXpzN096c3dRa0ZEWWl4bFFVRmxPenM3T3paQ1FVTmFMR3RDUVVGclFqczdPenN5UWtGRGNFSXNaMEpCUVdkQ096czdPMEZCUld4RExGTkJRVk1zYzBKQlFYTkNMRU5CUVVNc1VVRkJVU3hGUVVGRk8wRkJReTlETEhsRFFVRXlRaXhSUVVGUkxFTkJRVU1zUTBGQlF6dEJRVU55UXl3eVFrRkJZU3hSUVVGUkxFTkJRVU1zUTBGQlF6dEJRVU4yUWl4dlEwRkJjMElzVVVGQlVTeERRVUZETEVOQlFVTTdRVUZEYUVNc2VVSkJRVmNzVVVGQlVTeERRVUZETEVOQlFVTTdRVUZEY2tJc01FSkJRVmtzVVVGQlVTeERRVUZETEVOQlFVTTdRVUZEZEVJc05rSkJRV1VzVVVGQlVTeERRVUZETEVOQlFVTTdRVUZEZWtJc01rSkJRV0VzVVVGQlVTeERRVUZETEVOQlFVTTdRMEZEZUVJaUxDSm1hV3hsSWpvaWFHVnNjR1Z5Y3k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQnlaV2RwYzNSbGNrSnNiMk5yU0dWc2NHVnlUV2x6YzJsdVp5Qm1jbTl0SUNjdUwyaGxiSEJsY25NdllteHZZMnN0YUdWc2NHVnlMVzFwYzNOcGJtY25PMXh1YVcxd2IzSjBJSEpsWjJsemRHVnlSV0ZqYUNCbWNtOXRJQ2N1TDJobGJIQmxjbk12WldGamFDYzdYRzVwYlhCdmNuUWdjbVZuYVhOMFpYSklaV3h3WlhKTmFYTnphVzVuSUdaeWIyMGdKeTR2YUdWc2NHVnljeTlvWld4d1pYSXRiV2x6YzJsdVp5YzdYRzVwYlhCdmNuUWdjbVZuYVhOMFpYSkpaaUJtY205dElDY3VMMmhsYkhCbGNuTXZhV1luTzF4dWFXMXdiM0owSUhKbFoybHpkR1Z5VEc5bklHWnliMjBnSnk0dmFHVnNjR1Z5Y3k5c2IyY25PMXh1YVcxd2IzSjBJSEpsWjJsemRHVnlURzl2YTNWd0lHWnliMjBnSnk0dmFHVnNjR1Z5Y3k5c2IyOXJkWEFuTzF4dWFXMXdiM0owSUhKbFoybHpkR1Z5VjJsMGFDQm1jbTl0SUNjdUwyaGxiSEJsY25NdmQybDBhQ2M3WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCeVpXZHBjM1JsY2tSbFptRjFiSFJJWld4d1pYSnpLR2x1YzNSaGJtTmxLU0I3WEc0Z0lISmxaMmx6ZEdWeVFteHZZMnRJWld4d1pYSk5hWE56YVc1bktHbHVjM1JoYm1ObEtUdGNiaUFnY21WbmFYTjBaWEpGWVdOb0tHbHVjM1JoYm1ObEtUdGNiaUFnY21WbmFYTjBaWEpJWld4d1pYSk5hWE56YVc1bktHbHVjM1JoYm1ObEtUdGNiaUFnY21WbmFYTjBaWEpKWmlocGJuTjBZVzVqWlNrN1hHNGdJSEpsWjJsemRHVnlURzluS0dsdWMzUmhibU5sS1R0Y2JpQWdjbVZuYVhOMFpYSk1iMjlyZFhBb2FXNXpkR0Z1WTJVcE8xeHVJQ0J5WldkcGMzUmxjbGRwZEdnb2FXNXpkR0Z1WTJVcE8xeHVmVnh1SWwxOVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgNFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignYmxvY2tIZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgICAgZm4gPSBvcHRpb25zLmZuO1xuXG4gICAgaWYgKGNvbnRleHQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmbih0aGlzKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRleHQgPT09IGZhbHNlIHx8IGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIGlmIChfdXRpbHMuaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIHZhciBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLm5hbWUpO1xuICAgICAgICBvcHRpb25zID0geyBkYXRhOiBkYXRhIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk12WW14dlkyc3RhR1ZzY0dWeUxXMXBjM05wYm1jdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenR4UWtGQmMwUXNWVUZCVlRzN2NVSkJSV3BFTEZWQlFWTXNVVUZCVVN4RlFVRkZPMEZCUTJoRExGVkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNiMEpCUVc5Q0xFVkJRVVVzVlVGQlV5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUTNaRkxGRkJRVWtzVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4UFFVRlBPMUZCUTNwQ0xFVkJRVVVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRPenRCUVVWd1FpeFJRVUZKTEU5QlFVOHNTMEZCU3l4SlFVRkpMRVZCUVVVN1FVRkRjRUlzWVVGQlR5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkRha0lzVFVGQlRTeEpRVUZKTEU5QlFVOHNTMEZCU3l4TFFVRkxMRWxCUVVrc1QwRkJUeXhKUVVGSkxFbEJRVWtzUlVGQlJUdEJRVU12UXl4aFFVRlBMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dExRVU4wUWl4TlFVRk5MRWxCUVVrc1pVRkJVU3hQUVVGUExFTkJRVU1zUlVGQlJUdEJRVU16UWl4VlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlEzUkNMRmxCUVVrc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU5tTEdsQ1FVRlBMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUXpsQ096dEJRVVZFTEdWQlFVOHNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMDlCUTJoRUxFMUJRVTA3UVVGRFRDeGxRVUZQTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRQUVVOMFFqdExRVU5HTEUxQlFVMDdRVUZEVEN4VlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFbEJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTXZRaXhaUVVGSkxFbEJRVWtzUjBGQlJ5eHRRa0ZCV1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRGNrTXNXVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXg1UWtGQmEwSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUXpkRkxHVkJRVThzUjBGQlJ5eEZRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVNc1EwRkJRenRQUVVONFFqczdRVUZGUkN4aFFVRlBMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdTMEZETjBJN1IwRkRSaXhEUVVGRExFTkJRVU03UTBGRFNpSXNJbVpwYkdVaU9pSmliRzlqYXkxb1pXeHdaWEl0YldsemMybHVaeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN1lYQndaVzVrUTI5dWRHVjRkRkJoZEdnc0lHTnlaV0YwWlVaeVlXMWxMQ0JwYzBGeWNtRjVmU0JtY205dElDY3VMaTkxZEdsc2N5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVLR2x1YzNSaGJtTmxLU0I3WEc0Z0lHbHVjM1JoYm1ObExuSmxaMmx6ZEdWeVNHVnNjR1Z5S0NkaWJHOWphMGhsYkhCbGNrMXBjM05wYm1jbkxDQm1kVzVqZEdsdmJpaGpiMjUwWlhoMExDQnZjSFJwYjI1ektTQjdYRzRnSUNBZ2JHVjBJR2x1ZG1WeWMyVWdQU0J2Y0hScGIyNXpMbWx1ZG1WeWMyVXNYRzRnSUNBZ0lDQWdJR1p1SUQwZ2IzQjBhVzl1Y3k1bWJqdGNibHh1SUNBZ0lHbG1JQ2hqYjI1MFpYaDBJRDA5UFNCMGNuVmxLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabTRvZEdocGN5azdYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaGpiMjUwWlhoMElEMDlQU0JtWVd4elpTQjhmQ0JqYjI1MFpYaDBJRDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnBiblpsY25ObEtIUm9hWE1wTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvYVhOQmNuSmhlU2hqYjI1MFpYaDBLU2tnZTF4dUlDQWdJQ0FnYVdZZ0tHTnZiblJsZUhRdWJHVnVaM1JvSUQ0Z01Da2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2IzQjBhVzl1Y3k1cFpITXBJSHRjYmlBZ0lDQWdJQ0FnSUNCdmNIUnBiMjV6TG1sa2N5QTlJRnR2Y0hScGIyNXpMbTVoYldWZE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR2x1YzNSaGJtTmxMbWhsYkhCbGNuTXVaV0ZqYUNoamIyNTBaWGgwTENCdmNIUnBiMjV6S1R0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJwYm5abGNuTmxLSFJvYVhNcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JwWmlBb2IzQjBhVzl1Y3k1a1lYUmhJQ1ltSUc5d2RHbHZibk11YVdSektTQjdYRzRnSUNBZ0lDQWdJR3hsZENCa1lYUmhJRDBnWTNKbFlYUmxSbkpoYldVb2IzQjBhVzl1Y3k1a1lYUmhLVHRjYmlBZ0lDQWdJQ0FnWkdGMFlTNWpiMjUwWlhoMFVHRjBhQ0E5SUdGd2NHVnVaRU52Ym5SbGVIUlFZWFJvS0c5d2RHbHZibk11WkdGMFlTNWpiMjUwWlhoMFVHRjBhQ3dnYjNCMGFXOXVjeTV1WVcxbEtUdGNiaUFnSUNBZ0lDQWdiM0IwYVc5dWN5QTlJSHRrWVhSaE9pQmtZWFJoZlR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUdadUtHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcE8xeHVJQ0FnSUgxY2JpQWdmU2s3WEc1OVhHNGlYWDA9XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9ibG9jay1oZWxwZXItbWlzc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCA0XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIF9leGNlcHRpb24gPSByZXF1aXJlKCcuLi9leGNlcHRpb24nKTtcblxudmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdlYWNoJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdNdXN0IHBhc3MgaXRlcmF0b3IgdG8gI2VhY2gnKTtcbiAgICB9XG5cbiAgICB2YXIgZm4gPSBvcHRpb25zLmZuLFxuICAgICAgICBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcmV0ID0gJycsXG4gICAgICAgIGRhdGEgPSB1bmRlZmluZWQsXG4gICAgICAgIGNvbnRleHRQYXRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSkgKyAnLic7XG4gICAgfVxuXG4gICAgaWYgKF91dGlscy5pc0Z1bmN0aW9uKGNvbnRleHQpKSB7XG4gICAgICBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBfdXRpbHMuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleGVjSXRlcmF0aW9uKGZpZWxkLCBpbmRleCwgbGFzdCkge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZGF0YS5rZXkgPSBmaWVsZDtcbiAgICAgICAgZGF0YS5pbmRleCA9IGluZGV4O1xuICAgICAgICBkYXRhLmZpcnN0ID0gaW5kZXggPT09IDA7XG4gICAgICAgIGRhdGEubGFzdCA9ICEhbGFzdDtcblxuICAgICAgICBpZiAoY29udGV4dFBhdGgpIHtcbiAgICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gY29udGV4dFBhdGggKyBmaWVsZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXQgPSByZXQgKyBmbihjb250ZXh0W2ZpZWxkXSwge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtczogX3V0aWxzLmJsb2NrUGFyYW1zKFtjb250ZXh0W2ZpZWxkXSwgZmllbGRdLCBbY29udGV4dFBhdGggKyBmaWVsZCwgbnVsbF0pXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dCAmJiB0eXBlb2YgY29udGV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChfdXRpbHMuaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgICBmb3IgKHZhciBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcHJpb3JLZXkgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbnRleHQpIHtcbiAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcbiAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmlvcktleSA9IGtleTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdlpXRmphQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPM0ZDUVVFclJTeFZRVUZWT3p0NVFrRkRia1VzWTBGQll6czdPenR4UWtGRmNrSXNWVUZCVXl4UlFVRlJMRVZCUVVVN1FVRkRhRU1zVlVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1ZVRkJVeXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEzcEVMRkZCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3UVVGRFdpeFpRVUZOTERKQ1FVRmpMRFpDUVVFMlFpeERRVUZETEVOQlFVTTdTMEZEY0VRN08wRkJSVVFzVVVGQlNTeEZRVUZGTEVkQlFVY3NUMEZCVHl4RFFVRkRMRVZCUVVVN1VVRkRaaXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEU5QlFVODdVVUZEZWtJc1EwRkJReXhIUVVGSExFTkJRVU03VVVGRFRDeEhRVUZITEVkQlFVY3NSVUZCUlR0UlFVTlNMRWxCUVVrc1dVRkJRVHRSUVVOS0xGZEJRVmNzV1VGQlFTeERRVUZET3p0QlFVVm9RaXhSUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVsQlFVa3NUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSVHRCUVVNdlFpeHBRa0ZCVnl4SFFVRkhMSGxDUVVGclFpeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8wdEJRMnBHT3p0QlFVVkVMRkZCUVVrc2EwSkJRVmNzVDBGQlR5eERRVUZETEVWQlFVVTdRVUZCUlN4aFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVRkZPenRCUVVVeFJDeFJRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVN1FVRkRhRUlzVlVGQlNTeEhRVUZITEcxQ1FVRlpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dExRVU5zUXpzN1FVRkZSQ3hoUVVGVExHRkJRV0VzUTBGQlF5eExRVUZMTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSVHRCUVVONlF5eFZRVUZKTEVsQlFVa3NSVUZCUlR0QlFVTlNMRmxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETzBGQlEycENMRmxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETzBGQlEyNUNMRmxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eExRVUZMTEVOQlFVTXNRMEZCUXp0QlFVTjZRaXhaUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN08wRkJSVzVDTEZsQlFVa3NWMEZCVnl4RlFVRkZPMEZCUTJZc1kwRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFhRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRPMU5CUTNoRE8wOUJRMFk3TzBGQlJVUXNVMEZCUnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMEZCUXpkQ0xGbEJRVWtzUlVGQlJTeEpRVUZKTzBGQlExWXNiVUpCUVZjc1JVRkJSU3h0UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zUlVGQlJTeERRVUZETEZkQlFWY3NSMEZCUnl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VDBGREwwVXNRMEZCUXl4RFFVRkRPMHRCUTBvN08wRkJSVVFzVVVGQlNTeFBRVUZQTEVsQlFVa3NUMEZCVHl4UFFVRlBMRXRCUVVzc1VVRkJVU3hGUVVGRk8wRkJRekZETEZWQlFVa3NaVUZCVVN4UFFVRlBMRU5CUVVNc1JVRkJSVHRCUVVOd1FpeGhRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOMlF5eGpRVUZKTEVOQlFVTXNTVUZCU1N4UFFVRlBMRVZCUVVVN1FVRkRhRUlzZVVKQlFXRXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xZEJReTlETzFOQlEwWTdUMEZEUml4TlFVRk5PMEZCUTB3c1dVRkJTU3hSUVVGUkxGbEJRVUVzUTBGQlF6czdRVUZGWWl4aFFVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxFOUJRVThzUlVGQlJUdEJRVU4yUWl4alFVRkpMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdPenM3UVVGSkwwSXNaMEpCUVVrc1VVRkJVU3hMUVVGTExGTkJRVk1zUlVGQlJUdEJRVU14UWl3eVFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRhRU03UVVGRFJDeHZRa0ZCVVN4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVObUxHRkJRVU1zUlVGQlJTeERRVUZETzFkQlEwdzdVMEZEUmp0QlFVTkVMRmxCUVVrc1VVRkJVU3hMUVVGTExGTkJRVk1zUlVGQlJUdEJRVU14UWl4MVFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRM1JETzA5QlEwWTdTMEZEUmpzN1FVRkZSQ3hSUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdRVUZEV0N4VFFVRkhMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzB0QlEzSkNPenRCUVVWRUxGZEJRVThzUjBGQlJ5eERRVUZETzBkQlExb3NRMEZCUXl4RFFVRkRPME5CUTBvaUxDSm1hV3hsSWpvaVpXRmphQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN1lYQndaVzVrUTI5dWRHVjRkRkJoZEdnc0lHSnNiMk5yVUdGeVlXMXpMQ0JqY21WaGRHVkdjbUZ0WlN3Z2FYTkJjbkpoZVN3Z2FYTkdkVzVqZEdsdmJuMGdabkp2YlNBbkxpNHZkWFJwYkhNbk8xeHVhVzF3YjNKMElFVjRZMlZ3ZEdsdmJpQm1jbTl0SUNjdUxpOWxlR05sY0hScGIyNG5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaWhwYm5OMFlXNWpaU2tnZTF4dUlDQnBibk4wWVc1alpTNXlaV2RwYzNSbGNraGxiSEJsY2lnblpXRmphQ2NzSUdaMWJtTjBhVzl1S0dOdmJuUmxlSFFzSUc5d2RHbHZibk1wSUh0Y2JpQWdJQ0JwWmlBb0lXOXdkR2x2Ym5NcElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZlR05sY0hScGIyNG9KMDExYzNRZ2NHRnpjeUJwZEdWeVlYUnZjaUIwYnlBalpXRmphQ2NwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR3hsZENCbWJpQTlJRzl3ZEdsdmJuTXVabTRzWEc0Z0lDQWdJQ0FnSUdsdWRtVnljMlVnUFNCdmNIUnBiMjV6TG1sdWRtVnljMlVzWEc0Z0lDQWdJQ0FnSUdrZ1BTQXdMRnh1SUNBZ0lDQWdJQ0J5WlhRZ1BTQW5KeXhjYmlBZ0lDQWdJQ0FnWkdGMFlTeGNiaUFnSUNBZ0lDQWdZMjl1ZEdWNGRGQmhkR2c3WEc1Y2JpQWdJQ0JwWmlBb2IzQjBhVzl1Y3k1a1lYUmhJQ1ltSUc5d2RHbHZibk11YVdSektTQjdYRzRnSUNBZ0lDQmpiMjUwWlhoMFVHRjBhQ0E5SUdGd2NHVnVaRU52Ym5SbGVIUlFZWFJvS0c5d2RHbHZibk11WkdGMFlTNWpiMjUwWlhoMFVHRjBhQ3dnYjNCMGFXOXVjeTVwWkhOYk1GMHBJQ3NnSnk0bk8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaHBjMFoxYm1OMGFXOXVLR052Ym5SbGVIUXBLU0I3SUdOdmJuUmxlSFFnUFNCamIyNTBaWGgwTG1OaGJHd29kR2hwY3lrN0lIMWNibHh1SUNBZ0lHbG1JQ2h2Y0hScGIyNXpMbVJoZEdFcElIdGNiaUFnSUNBZ0lHUmhkR0VnUFNCamNtVmhkR1ZHY21GdFpTaHZjSFJwYjI1ekxtUmhkR0VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR1oxYm1OMGFXOXVJR1Y0WldOSmRHVnlZWFJwYjI0b1ptbGxiR1FzSUdsdVpHVjRMQ0JzWVhOMEtTQjdYRzRnSUNBZ0lDQnBaaUFvWkdGMFlTa2dlMXh1SUNBZ0lDQWdJQ0JrWVhSaExtdGxlU0E5SUdacFpXeGtPMXh1SUNBZ0lDQWdJQ0JrWVhSaExtbHVaR1Y0SUQwZ2FXNWtaWGc3WEc0Z0lDQWdJQ0FnSUdSaGRHRXVabWx5YzNRZ1BTQnBibVJsZUNBOVBUMGdNRHRjYmlBZ0lDQWdJQ0FnWkdGMFlTNXNZWE4wSUQwZ0lTRnNZWE4wTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hqYjI1MFpYaDBVR0YwYUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR1JoZEdFdVkyOXVkR1Y0ZEZCaGRHZ2dQU0JqYjI1MFpYaDBVR0YwYUNBcklHWnBaV3hrTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lISmxkQ0E5SUhKbGRDQXJJR1p1S0dOdmJuUmxlSFJiWm1sbGJHUmRMQ0I3WEc0Z0lDQWdJQ0FnSUdSaGRHRTZJR1JoZEdFc1hHNGdJQ0FnSUNBZ0lHSnNiMk5yVUdGeVlXMXpPaUJpYkc5amExQmhjbUZ0Y3loYlkyOXVkR1Y0ZEZ0bWFXVnNaRjBzSUdacFpXeGtYU3dnVzJOdmJuUmxlSFJRWVhSb0lDc2dabWxsYkdRc0lHNTFiR3hkS1Z4dUlDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tHTnZiblJsZUhRZ0ppWWdkSGx3Wlc5bUlHTnZiblJsZUhRZ1BUMDlJQ2R2WW1wbFkzUW5LU0I3WEc0Z0lDQWdJQ0JwWmlBb2FYTkJjbkpoZVNoamIyNTBaWGgwS1NrZ2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnFJRDBnWTI5dWRHVjRkQzVzWlc1bmRHZzdJR2tnUENCcU95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvYVNCcGJpQmpiMjUwWlhoMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGVHVmpTWFJsY21GMGFXOXVLR2tzSUdrc0lHa2dQVDA5SUdOdmJuUmxlSFF1YkdWdVozUm9JQzBnTVNrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2NISnBiM0pMWlhrN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlHTnZiblJsZUhRcElIdGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb1kyOXVkR1Y0ZEM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QlhaU2R5WlNCeWRXNXVhVzVuSUhSb1pTQnBkR1Z5WVhScGIyNXpJRzl1WlNCemRHVndJRzkxZENCdlppQnplVzVqSUhOdklIZGxJR05oYmlCa1pYUmxZM1JjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJSFJvWlNCc1lYTjBJR2wwWlhKaGRHbHZiaUIzYVhSb2IzVjBJR2hoZG1VZ2RHOGdjMk5oYmlCMGFHVWdiMkpxWldOMElIUjNhV05sSUdGdVpDQmpjbVZoZEdWY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUdGdUlHbDBaWEp0WldScFlYUmxJR3RsZVhNZ1lYSnlZWGt1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKcGIzSkxaWGtnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmxlR1ZqU1hSbGNtRjBhVzl1S0hCeWFXOXlTMlY1TENCcElDMGdNU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NtbHZja3RsZVNBOUlHdGxlVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHa3JLenRjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdhV1lnS0hCeWFXOXlTMlY1SUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNCbGVHVmpTWFJsY21GMGFXOXVLSEJ5YVc5eVMyVjVMQ0JwSUMwZ01Td2dkSEoxWlNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9hU0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdjbVYwSUQwZ2FXNTJaWEp6WlNoMGFHbHpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2NtVjBPMXh1SUNCOUtUdGNibjFjYmlKZGZRPT1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2VhY2guanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDRcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfZXhjZXB0aW9uID0gcmVxdWlyZSgnLi4vZXhjZXB0aW9uJyk7XG5cbnZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaGVscGVyTWlzc2luZycsIGZ1bmN0aW9uICgpIC8qIFthcmdzLCBdb3B0aW9ucyAqL3tcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdNaXNzaW5nIGhlbHBlcjogXCInICsgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXS5uYW1lICsgJ1wiJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdmFHVnNjR1Z5TFcxcGMzTnBibWN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenQ1UWtGQmMwSXNZMEZCWXpzN096dHhRa0ZGY2tJc1ZVRkJVeXhSUVVGUkxFVkJRVVU3UVVGRGFFTXNWVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhsUVVGbExFVkJRVVVzYVVOQlFXZERPMEZCUTNaRkxGRkJRVWtzVTBGQlV5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVN08wRkJSVEZDTEdGQlFVOHNVMEZCVXl4RFFVRkRPMHRCUTJ4Q0xFMUJRVTA3TzBGQlJVd3NXVUZCVFN3eVFrRkJZeXh0UWtGQmJVSXNSMEZCUnl4VFFVRlRMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03UzBGRGRrWTdSMEZEUml4RFFVRkRMRU5CUVVNN1EwRkRTaUlzSW1acGJHVWlPaUpvWld4d1pYSXRiV2x6YzJsdVp5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JGZUdObGNIUnBiMjRnWm5KdmJTQW5MaTR2WlhoalpYQjBhVzl1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0b2FXNXpkR0Z1WTJVcElIdGNiaUFnYVc1emRHRnVZMlV1Y21WbmFYTjBaWEpJWld4d1pYSW9KMmhsYkhCbGNrMXBjM05wYm1jbkxDQm1kVzVqZEdsdmJpZ3ZLaUJiWVhKbmN5d2dYVzl3ZEdsdmJuTWdLaThwSUh0Y2JpQWdJQ0JwWmlBb1lYSm5kVzFsYm5SekxteGxibWQwYUNBOVBUMGdNU2tnZTF4dUlDQWdJQ0FnTHk4Z1FTQnRhWE56YVc1bklHWnBaV3hrSUdsdUlHRWdlM3RtYjI5OWZTQmpiMjV6ZEhKMVkzUXVYRzRnSUNBZ0lDQnlaWFIxY200Z2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0F2THlCVGIyMWxiMjVsSUdseklHRmpkSFZoYkd4NUlIUnllV2x1WnlCMGJ5QmpZV3hzSUhOdmJXVjBhR2x1Wnl3Z1lteHZkeUIxY0M1Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmVHTmxjSFJwYjI0b0owMXBjM05wYm1jZ2FHVnNjR1Z5T2lCY0lpY2dLeUJoY21kMWJXVnVkSE5iWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0F0SURGZExtNWhiV1VnS3lBblhDSW5LVHRjYmlBZ0lDQjlYRzRnSUgwcE8xeHVmVnh1SWwxOVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDRcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2lmJywgZnVuY3Rpb24gKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgaWYgKF91dGlscy5pc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkge1xuICAgICAgY29uZGl0aW9uYWwgPSBjb25kaXRpb25hbC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCFvcHRpb25zLmhhc2guaW5jbHVkZVplcm8gJiYgIWNvbmRpdGlvbmFsIHx8IF91dGlscy5pc0VtcHR5KGNvbmRpdGlvbmFsKSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcigndW5sZXNzJywgZnVuY3Rpb24gKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwgeyBmbjogb3B0aW9ucy5pbnZlcnNlLCBpbnZlcnNlOiBvcHRpb25zLmZuLCBoYXNoOiBvcHRpb25zLmhhc2ggfSk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk12YVdZdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenR4UWtGQmEwTXNWVUZCVlRzN2NVSkJSVGRDTEZWQlFWTXNVVUZCVVN4RlFVRkZPMEZCUTJoRExGVkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RlFVRkZMRlZCUVZNc1YwRkJWeXhGUVVGRkxFOUJRVThzUlVGQlJUdEJRVU16UkN4UlFVRkpMR3RDUVVGWExGZEJRVmNzUTBGQlF5eEZRVUZGTzBGQlFVVXNhVUpCUVZjc1IwRkJSeXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUVVVN096czdPMEZCUzNSRkxGRkJRVWtzUVVGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEpRVUZMTEdWQlFWRXNWMEZCVnl4RFFVRkRMRVZCUVVVN1FVRkRka1VzWVVGQlR5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRemxDTEUxQlFVMDdRVUZEVEN4aFFVRlBMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTMEZEZWtJN1IwRkRSaXhEUVVGRExFTkJRVU03TzBGQlJVZ3NWVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhSUVVGUkxFVkJRVVVzVlVGQlV5eFhRVUZYTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUXk5RUxGZEJRVThzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZkQlFWY3NSVUZCUlN4RlFVRkRMRVZCUVVVc1JVRkJSU3hQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkRMRU5CUVVNc1EwRkJRenRIUVVOMlNDeERRVUZETEVOQlFVTTdRMEZEU2lJc0ltWnBiR1VpT2lKcFppNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3YVhORmJYQjBlU3dnYVhOR2RXNWpkR2x2Ym4wZ1puSnZiU0FuTGk0dmRYUnBiSE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlocGJuTjBZVzVqWlNrZ2UxeHVJQ0JwYm5OMFlXNWpaUzV5WldkcGMzUmxja2hsYkhCbGNpZ25hV1luTENCbWRXNWpkR2x2YmloamIyNWthWFJwYjI1aGJDd2diM0IwYVc5dWN5a2dlMXh1SUNBZ0lHbG1JQ2hwYzBaMWJtTjBhVzl1S0dOdmJtUnBkR2x2Ym1Gc0tTa2dleUJqYjI1a2FYUnBiMjVoYkNBOUlHTnZibVJwZEdsdmJtRnNMbU5oYkd3b2RHaHBjeWs3SUgxY2JseHVJQ0FnSUM4dklFUmxabUYxYkhRZ1ltVm9ZWFpwYjNJZ2FYTWdkRzhnY21WdVpHVnlJSFJvWlNCd2IzTnBkR2wyWlNCd1lYUm9JR2xtSUhSb1pTQjJZV3gxWlNCcGN5QjBjblYwYUhrZ1lXNWtJRzV2ZENCbGJYQjBlUzVjYmlBZ0lDQXZMeUJVYUdVZ1lHbHVZMngxWkdWYVpYSnZZQ0J2Y0hScGIyNGdiV0Y1SUdKbElITmxkQ0IwYnlCMGNtVmhkQ0IwYUdVZ1kyOXVaSFJwYjI1aGJDQmhjeUJ3ZFhKbGJIa2dibTkwSUdWdGNIUjVJR0poYzJWa0lHOXVJSFJvWlZ4dUlDQWdJQzh2SUdKbGFHRjJhVzl5SUc5bUlHbHpSVzF3ZEhrdUlFVm1abVZqZEdsMlpXeDVJSFJvYVhNZ1pHVjBaWEp0YVc1bGN5QnBaaUF3SUdseklHaGhibVJzWldRZ1lua2dkR2hsSUhCdmMybDBhWFpsSUhCaGRHZ2diM0lnYm1WbllYUnBkbVV1WEc0Z0lDQWdhV1lnS0NnaGIzQjBhVzl1Y3k1b1lYTm9MbWx1WTJ4MVpHVmFaWEp2SUNZbUlDRmpiMjVrYVhScGIyNWhiQ2tnZkh3Z2FYTkZiWEIwZVNoamIyNWthWFJwYjI1aGJDa3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnZjSFJwYjI1ekxtbHVkbVZ5YzJVb2RHaHBjeWs3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCdmNIUnBiMjV6TG1adUtIUm9hWE1wTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ2FXNXpkR0Z1WTJVdWNtVm5hWE4wWlhKSVpXeHdaWElvSjNWdWJHVnpjeWNzSUdaMWJtTjBhVzl1S0dOdmJtUnBkR2x2Ym1Gc0xDQnZjSFJwYjI1ektTQjdYRzRnSUNBZ2NtVjBkWEp1SUdsdWMzUmhibU5sTG1obGJIQmxjbk5iSjJsbUoxMHVZMkZzYkNoMGFHbHpMQ0JqYjI1a2FYUnBiMjVoYkN3Z2UyWnVPaUJ2Y0hScGIyNXpMbWx1ZG1WeWMyVXNJR2x1ZG1WeWMyVTZJRzl3ZEdsdmJuTXVabTRzSUdoaGMyZzZJRzl3ZEdsdmJuTXVhR0Z6YUgwcE8xeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDRcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9nJywgZnVuY3Rpb24gKCkgLyogbWVzc2FnZSwgb3B0aW9ucyAqL3tcbiAgICB2YXIgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHZhciBsZXZlbCA9IDE7XG4gICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG4gICAgfVxuICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuICAgIGluc3RhbmNlLmxvZy5hcHBseShpbnN0YW5jZSwgYXJncyk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk12Ykc5bkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3Y1VKQlFXVXNWVUZCVXl4UlFVRlJMRVZCUVVVN1FVRkRhRU1zVlVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4TFFVRkxMRVZCUVVVc2EwTkJRV2xETzBGQlF6bEVMRkZCUVVrc1NVRkJTU3hIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETzFGQlEyeENMRTlCUVU4c1IwRkJSeXhUUVVGVExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVNNVF5eFRRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3UVVGRE4wTXNWVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTjZRanM3UVVGRlJDeFJRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRaQ3hSUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRWxCUVVrc1JVRkJSVHRCUVVNNVFpeFhRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03UzBGRE5VSXNUVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFbEJRVWtzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc1NVRkJTU3hGUVVGRk8wRkJRM0pFTEZkQlFVc3NSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dExRVU0xUWp0QlFVTkVMRkZCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdPMEZCUldoQ0xGbEJRVkVzUTBGQlF5eEhRVUZITEUxQlFVRXNRMEZCV2l4UlFVRlJMRVZCUVZNc1NVRkJTU3hEUVVGRExFTkJRVU03UjBGRGVFSXNRMEZCUXl4RFFVRkRPME5CUTBvaUxDSm1hV3hsSWpvaWJHOW5MbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRvYVc1emRHRnVZMlVwSUh0Y2JpQWdhVzV6ZEdGdVkyVXVjbVZuYVhOMFpYSklaV3h3WlhJb0oyeHZaeWNzSUdaMWJtTjBhVzl1S0M4cUlHMWxjM05oWjJVc0lHOXdkR2x2Ym5NZ0tpOHBJSHRjYmlBZ0lDQnNaWFFnWVhKbmN5QTlJRnQxYm1SbFptbHVaV1JkTEZ4dUlDQWdJQ0FnSUNCdmNIUnBiMjV6SUQwZ1lYSm5kVzFsYm5SelcyRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ0xTQXhYVHRjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dMU0F4T3lCcEt5c3BJSHRjYmlBZ0lDQWdJR0Z5WjNNdWNIVnphQ2hoY21kMWJXVnVkSE5iYVYwcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUd4bGRDQnNaWFpsYkNBOUlERTdYRzRnSUNBZ2FXWWdLRzl3ZEdsdmJuTXVhR0Z6YUM1c1pYWmxiQ0FoUFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0JzWlhabGJDQTlJRzl3ZEdsdmJuTXVhR0Z6YUM1c1pYWmxiRHRjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLRzl3ZEdsdmJuTXVaR0YwWVNBbUppQnZjSFJwYjI1ekxtUmhkR0V1YkdWMlpXd2dJVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdiR1YyWld3Z1BTQnZjSFJwYjI1ekxtUmhkR0V1YkdWMlpXdzdYRzRnSUNBZ2ZWeHVJQ0FnSUdGeVozTmJNRjBnUFNCc1pYWmxiRHRjYmx4dUlDQWdJR2x1YzNSaGJtTmxMbXh2WnlndUxpNGdZWEpuY3lrN1hHNGdJSDBwTzF4dWZWeHVJbDE5XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9sb2cuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDRcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24gKG9iaiwgZmllbGQpIHtcbiAgICByZXR1cm4gb2JqICYmIG9ialtmaWVsZF07XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk12Ykc5dmEzVndMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN2NVSkJRV1VzVlVGQlV5eFJRVUZSTEVWQlFVVTdRVUZEYUVNc1ZVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eFJRVUZSTEVWQlFVVXNWVUZCVXl4SFFVRkhMRVZCUVVVc1MwRkJTeXhGUVVGRk8wRkJRM0pFTEZkQlFVOHNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEhRVU14UWl4RFFVRkRMRU5CUVVNN1EwRkRTaUlzSW1acGJHVWlPaUpzYjI5cmRYQXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaWhwYm5OMFlXNWpaU2tnZTF4dUlDQnBibk4wWVc1alpTNXlaV2RwYzNSbGNraGxiSEJsY2lnbmJHOXZhM1Z3Snl3Z1puVnVZM1JwYjI0b2IySnFMQ0JtYVdWc1pDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCdlltb2dKaVlnYjJKcVcyWnBaV3hrWFR0Y2JpQWdmU2s3WEc1OVhHNGlYWDA9XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9sb29rdXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDRcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb250ZXh0KSkge1xuICAgICAgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICB2YXIgZm4gPSBvcHRpb25zLmZuO1xuXG4gICAgaWYgKCFfdXRpbHMuaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGRhdGEgPSBfdXRpbHMuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IF91dGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgYmxvY2tQYXJhbXM6IF91dGlscy5ibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdmQybDBhQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08zRkNRVUVyUlN4VlFVRlZPenR4UWtGRk1VVXNWVUZCVXl4UlFVRlJMRVZCUVVVN1FVRkRhRU1zVlVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1ZVRkJVeXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEzcEVMRkZCUVVrc2EwSkJRVmNzVDBGQlR5eERRVUZETEVWQlFVVTdRVUZCUlN4aFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVRkZPenRCUVVVeFJDeFJRVUZKTEVWQlFVVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRE96dEJRVVZ3UWl4UlFVRkpMRU5CUVVNc1pVRkJVU3hQUVVGUExFTkJRVU1zUlVGQlJUdEJRVU55UWl4VlFVRkpMRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETzBGQlEzaENMRlZCUVVrc1QwRkJUeXhEUVVGRExFbEJRVWtzU1VGQlNTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZPMEZCUXk5Q0xGbEJRVWtzUjBGQlJ5eHRRa0ZCV1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRGFrTXNXVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXg1UWtGQmEwSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wOUJRMmhHT3p0QlFVVkVMR0ZCUVU4c1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJUdEJRVU5xUWl4WlFVRkpMRVZCUVVVc1NVRkJTVHRCUVVOV0xHMUNRVUZYTEVWQlFVVXNiVUpCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VDBGRGFFVXNRMEZCUXl4RFFVRkRPMHRCUTBvc1RVRkJUVHRCUVVOTUxHRkJRVThzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRMUVVNNVFqdEhRVU5HTEVOQlFVTXNRMEZCUXp0RFFVTktJaXdpWm1sc1pTSTZJbmRwZEdndWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdlMkZ3Y0dWdVpFTnZiblJsZUhSUVlYUm9MQ0JpYkc5amExQmhjbUZ0Y3l3Z1kzSmxZWFJsUm5KaGJXVXNJR2x6Ulcxd2RIa3NJR2x6Um5WdVkzUnBiMjU5SUdaeWIyMGdKeTR1TDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRvYVc1emRHRnVZMlVwSUh0Y2JpQWdhVzV6ZEdGdVkyVXVjbVZuYVhOMFpYSklaV3h3WlhJb0ozZHBkR2duTENCbWRXNWpkR2x2YmloamIyNTBaWGgwTENCdmNIUnBiMjV6S1NCN1hHNGdJQ0FnYVdZZ0tHbHpSblZ1WTNScGIyNG9ZMjl1ZEdWNGRDa3BJSHNnWTI5dWRHVjRkQ0E5SUdOdmJuUmxlSFF1WTJGc2JDaDBhR2x6S1RzZ2ZWeHVYRzRnSUNBZ2JHVjBJR1p1SUQwZ2IzQjBhVzl1Y3k1bWJqdGNibHh1SUNBZ0lHbG1JQ2doYVhORmJYQjBlU2hqYjI1MFpYaDBLU2tnZTF4dUlDQWdJQ0FnYkdWMElHUmhkR0VnUFNCdmNIUnBiMjV6TG1SaGRHRTdYRzRnSUNBZ0lDQnBaaUFvYjNCMGFXOXVjeTVrWVhSaElDWW1JRzl3ZEdsdmJuTXVhV1J6S1NCN1hHNGdJQ0FnSUNBZ0lHUmhkR0VnUFNCamNtVmhkR1ZHY21GdFpTaHZjSFJwYjI1ekxtUmhkR0VwTzF4dUlDQWdJQ0FnSUNCa1lYUmhMbU52Ym5SbGVIUlFZWFJvSUQwZ1lYQndaVzVrUTI5dWRHVjRkRkJoZEdnb2IzQjBhVzl1Y3k1a1lYUmhMbU52Ym5SbGVIUlFZWFJvTENCdmNIUnBiMjV6TG1sa2Mxc3dYU2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJtYmloamIyNTBaWGgwTENCN1hHNGdJQ0FnSUNBZ0lHUmhkR0U2SUdSaGRHRXNYRzRnSUNBZ0lDQWdJR0pzYjJOclVHRnlZVzF6T2lCaWJHOWphMUJoY21GdGN5aGJZMjl1ZEdWNGRGMHNJRnRrWVhSaElDWW1JR1JoZEdFdVkyOXVkR1Y0ZEZCaGRHaGRLVnh1SUNBZ0lDQWdmU2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCdmNIUnBiMjV6TG1sdWRtVnljMlVvZEdocGN5azdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgNFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyA9IHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnM7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfZGVjb3JhdG9yc0lubGluZSA9IHJlcXVpcmUoJy4vZGVjb3JhdG9ycy9pbmxpbmUnKTtcblxudmFyIF9kZWNvcmF0b3JzSW5saW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlY29yYXRvcnNJbmxpbmUpO1xuXG5mdW5jdGlvbiByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKGluc3RhbmNlKSB7XG4gIF9kZWNvcmF0b3JzSW5saW5lMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyUmxZMjl5WVhSdmNuTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdaME5CUVRKQ0xIRkNRVUZ4UWpzN096dEJRVVY2UXl4VFFVRlRMSGxDUVVGNVFpeERRVUZETEZGQlFWRXNSVUZCUlR0QlFVTnNSQ3huUTBGQlpTeFJRVUZSTEVOQlFVTXNRMEZCUXp0RFFVTXhRaUlzSW1acGJHVWlPaUprWldOdmNtRjBiM0p6TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElISmxaMmx6ZEdWeVNXNXNhVzVsSUdaeWIyMGdKeTR2WkdWamIzSmhkRzl5Y3k5cGJteHBibVVuTzF4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2NtVm5hWE4wWlhKRVpXWmhkV3gwUkdWamIzSmhkRzl5Y3locGJuTjBZVzVqWlNrZ2UxeHVJQ0J5WldkcGMzUmxja2x1YkdsdVpTaHBibk4wWVc1alpTazdYRzU5WEc1Y2JpSmRmUT09XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvZGVjb3JhdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgNFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckRlY29yYXRvcignaW5saW5lJywgZnVuY3Rpb24gKGZuLCBwcm9wcywgY29udGFpbmVyLCBvcHRpb25zKSB7XG4gICAgdmFyIHJldCA9IGZuO1xuICAgIGlmICghcHJvcHMucGFydGlhbHMpIHtcbiAgICAgIHByb3BzLnBhcnRpYWxzID0ge307XG4gICAgICByZXQgPSBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cbiAgICAgICAgdmFyIG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBfdXRpbHMuZXh0ZW5kKHt9LCBvcmlnaW5hbCwgcHJvcHMucGFydGlhbHMpO1xuICAgICAgICB2YXIgcmV0ID0gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9yaWdpbmFsO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm9wcy5wYXJ0aWFsc1tvcHRpb25zLmFyZ3NbMF1dID0gb3B0aW9ucy5mbjtcblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJSbFkyOXlZWFJ2Y25NdmFXNXNhVzVsTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdjVUpCUVhGQ0xGVkJRVlU3TzNGQ1FVVm9RaXhWUVVGVExGRkJRVkVzUlVGQlJUdEJRVU5vUXl4VlFVRlJMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRlZCUVZNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFRRVUZUTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUXpORkxGRkJRVWtzUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTmlMRkZCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTzBGQlEyNUNMRmRCUVVzc1EwRkJReXhSUVVGUkxFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEzQkNMRk5CUVVjc1IwRkJSeXhWUVVGVExFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVTdPMEZCUlM5Q0xGbEJRVWtzVVVGQlVTeEhRVUZITEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1FVRkRiRU1zYVVKQlFWTXNRMEZCUXl4UlFVRlJMRWRCUVVjc1kwRkJUeXhGUVVGRkxFVkJRVVVzVVVGQlVTeEZRVUZGTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRCUVVNeFJDeFpRVUZKTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBGQlF5OUNMR2xDUVVGVExFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0QlFVTTVRaXhsUVVGUExFZEJRVWNzUTBGQlF6dFBRVU5hTEVOQlFVTTdTMEZEU0RzN1FVRkZSQ3hUUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRPenRCUVVVM1F5eFhRVUZQTEVkQlFVY3NRMEZCUXp0SFFVTmFMRU5CUVVNc1EwRkJRenREUVVOS0lpd2labWxzWlNJNkltbHViR2x1WlM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdaWGgwWlc1a2ZTQm1jbTl0SUNjdUxpOTFkR2xzY3ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUtHbHVjM1JoYm1ObEtTQjdYRzRnSUdsdWMzUmhibU5sTG5KbFoybHpkR1Z5UkdWamIzSmhkRzl5S0NkcGJteHBibVVuTENCbWRXNWpkR2x2YmlobWJpd2djSEp2Y0hNc0lHTnZiblJoYVc1bGNpd2diM0IwYVc5dWN5a2dlMXh1SUNBZ0lHeGxkQ0J5WlhRZ1BTQm1ianRjYmlBZ0lDQnBaaUFvSVhCeWIzQnpMbkJoY25ScFlXeHpLU0I3WEc0Z0lDQWdJQ0J3Y205d2N5NXdZWEowYVdGc2N5QTlJSHQ5TzF4dUlDQWdJQ0FnY21WMElEMGdablZ1WTNScGIyNG9ZMjl1ZEdWNGRDd2diM0IwYVc5dWN5a2dlMXh1SUNBZ0lDQWdJQ0F2THlCRGNtVmhkR1VnWVNCdVpYY2djR0Z5ZEdsaGJITWdjM1JoWTJzZ1puSmhiV1VnY0hKcGIzSWdkRzhnWlhobFl5NWNiaUFnSUNBZ0lDQWdiR1YwSUc5eWFXZHBibUZzSUQwZ1kyOXVkR0ZwYm1WeUxuQmhjblJwWVd4ek8xeHVJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVjR0Z5ZEdsaGJITWdQU0JsZUhSbGJtUW9lMzBzSUc5eWFXZHBibUZzTENCd2NtOXdjeTV3WVhKMGFXRnNjeWs3WEc0Z0lDQWdJQ0FnSUd4bGRDQnlaWFFnUFNCbWJpaGpiMjUwWlhoMExDQnZjSFJwYjI1ektUdGNiaUFnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbkJoY25ScFlXeHpJRDBnYjNKcFoybHVZV3c3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5WlhRN1hHNGdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhCeWIzQnpMbkJoY25ScFlXeHpXMjl3ZEdsdmJuTXVZWEpuYzFzd1hWMGdQU0J2Y0hScGIyNXpMbVp1TzF4dVhHNGdJQ0FnY21WMGRYSnVJSEpsZER0Y2JpQWdmU2s3WEc1OVhHNGlYWDA9XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvZGVjb3JhdG9ycy9pbmxpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDRcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbiBsb29rdXBMZXZlbChsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgbGV2ZWxNYXAgPSBfdXRpbHMuaW5kZXhPZihsb2dnZXIubWV0aG9kTWFwLCBsZXZlbC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIGlmIChsZXZlbE1hcCA+PSAwKSB7XG4gICAgICAgIGxldmVsID0gbGV2ZWxNYXA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXZlbCA9IHBhcnNlSW50KGxldmVsLCAxMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxldmVsO1xuICB9LFxuXG4gIC8vIENhbiBiZSBvdmVycmlkZGVuIGluIHRoZSBob3N0IGVudmlyb25tZW50XG4gIGxvZzogZnVuY3Rpb24gbG9nKGxldmVsKSB7XG4gICAgbGV2ZWwgPSBsb2dnZXIubG9va3VwTGV2ZWwobGV2ZWwpO1xuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBsb2dnZXIubG9va3VwTGV2ZWwobG9nZ2VyLmxldmVsKSA8PSBsZXZlbCkge1xuICAgICAgdmFyIG1ldGhvZCA9IGxvZ2dlci5tZXRob2RNYXBbbGV2ZWxdO1xuICAgICAgaWYgKCFjb25zb2xlW21ldGhvZF0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVzc2FnZSA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgbWVzc2FnZVtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGVbbWV0aG9kXS5hcHBseShjb25zb2xlLCBtZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBsb2dnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyeHZaMmRsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPM0ZDUVVGelFpeFRRVUZUT3p0QlFVVXZRaXhKUVVGSkxFMUJRVTBzUjBGQlJ6dEJRVU5ZTEZkQlFWTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXp0QlFVTTNReXhQUVVGTExFVkJRVVVzVFVGQlRUczdPMEZCUjJJc1lVRkJWeXhGUVVGRkxIRkNRVUZUTEV0QlFVc3NSVUZCUlR0QlFVTXpRaXhSUVVGSkxFOUJRVThzUzBGQlN5eExRVUZMTEZGQlFWRXNSVUZCUlR0QlFVTTNRaXhWUVVGSkxGRkJRVkVzUjBGQlJ5eGxRVUZSTEUxQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZET1VRc1ZVRkJTU3hSUVVGUkxFbEJRVWtzUTBGQlF5eEZRVUZGTzBGQlEycENMR0ZCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU03VDBGRGJFSXNUVUZCVFR0QlFVTk1MR0ZCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMDlCUXpkQ08wdEJRMFk3TzBGQlJVUXNWMEZCVHl4TFFVRkxMRU5CUVVNN1IwRkRaRHM3TzBGQlIwUXNTMEZCUnl4RlFVRkZMR0ZCUVZNc1MwRkJTeXhGUVVGak8wRkJReTlDTEZOQlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZET3p0QlFVVnNReXhSUVVGSkxFOUJRVThzVDBGQlR5eExRVUZMTEZkQlFWY3NTVUZCU1N4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRVZCUVVVN1FVRkRMMFVzVlVGQlNTeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU55UXl4VlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGT3p0QlFVTndRaXhqUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETzA5QlEyaENPenQzUTBGUWJVSXNUMEZCVHp0QlFVRlFMR1ZCUVU4N096dEJRVkV6UWl4aFFVRlBMRU5CUVVNc1RVRkJUU3hQUVVGRExFTkJRV1lzVDBGQlR5eEZRVUZaTEU5QlFVOHNRMEZCUXl4RFFVRkRPMHRCUXpkQ08wZEJRMFk3UTBGRFJpeERRVUZET3p0eFFrRkZZU3hOUVVGTklpd2labWxzWlNJNklteHZaMmRsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdhVzVrWlhoUFpuMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNWNibXhsZENCc2IyZG5aWElnUFNCN1hHNGdJRzFsZEdodlpFMWhjRG9nV3lka1pXSjFaeWNzSUNkcGJtWnZKeXdnSjNkaGNtNG5MQ0FuWlhKeWIzSW5YU3hjYmlBZ2JHVjJaV3c2SUNkcGJtWnZKeXhjYmx4dUlDQXZMeUJOWVhCeklHRWdaMmwyWlc0Z2JHVjJaV3dnZG1Gc2RXVWdkRzhnZEdobElHQnRaWFJvYjJSTllYQmdJR2x1WkdWNFpYTWdZV0p2ZG1VdVhHNGdJR3h2YjJ0MWNFeGxkbVZzT2lCbWRXNWpkR2x2Ymloc1pYWmxiQ2tnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnYkdWMlpXd2dQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNCc1pYUWdiR1YyWld4TllYQWdQU0JwYm1SbGVFOW1LR3h2WjJkbGNpNXRaWFJvYjJSTllYQXNJR3hsZG1Wc0xuUnZURzkzWlhKRFlYTmxLQ2twTzF4dUlDQWdJQ0FnYVdZZ0tHeGxkbVZzVFdGd0lENDlJREFwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjJaV3dnUFNCc1pYWmxiRTFoY0R0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUd4bGRtVnNJRDBnY0dGeWMyVkpiblFvYkdWMlpXd3NJREV3S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiR1YyWld3N1hHNGdJSDBzWEc1Y2JpQWdMeThnUTJGdUlHSmxJRzkyWlhKeWFXUmtaVzRnYVc0Z2RHaGxJR2h2YzNRZ1pXNTJhWEp2Ym0xbGJuUmNiaUFnYkc5bk9pQm1kVzVqZEdsdmJpaHNaWFpsYkN3Z0xpNHViV1Z6YzJGblpTa2dlMXh1SUNBZ0lHeGxkbVZzSUQwZ2JHOW5aMlZ5TG14dmIydDFjRXhsZG1Wc0tHeGxkbVZzS1R0Y2JseHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ1kyOXVjMjlzWlNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2JHOW5aMlZ5TG14dmIydDFjRXhsZG1Wc0tHeHZaMmRsY2k1c1pYWmxiQ2tnUEQwZ2JHVjJaV3dwSUh0Y2JpQWdJQ0FnSUd4bGRDQnRaWFJvYjJRZ1BTQnNiMmRuWlhJdWJXVjBhRzlrVFdGd1cyeGxkbVZzWFR0Y2JpQWdJQ0FnSUdsbUlDZ2hZMjl1YzI5c1pWdHRaWFJvYjJSZEtTQjdJQ0FnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0YkdsdVpTQnVieTFqYjI1emIyeGxYRzRnSUNBZ0lDQWdJRzFsZEdodlpDQTlJQ2RzYjJjbk8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1kyOXVjMjlzWlZ0dFpYUm9iMlJkS0M0dUxtMWxjM05oWjJVcE95QWdJQ0F2THlCbGMyeHBiblF0WkdsellXSnNaUzFzYVc1bElHNXZMV052Ym5OdmJHVmNiaUFnSUNCOVhHNGdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHeHZaMmRsY2p0Y2JpSmRmUT09XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvbG9nZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCA0XG4gKiovIiwiLy8gQnVpbGQgb3V0IG91ciBiYXNpYyBTYWZlU3RyaW5nIHR5cGVcbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIFNhZmVTdHJpbmcoc3RyaW5nKSB7XG4gIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xufVxuXG5TYWZlU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyA9IFNhZmVTdHJpbmcucHJvdG90eXBlLnRvSFRNTCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICcnICsgdGhpcy5zdHJpbmc7XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTYWZlU3RyaW5nO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMM05oWm1VdGMzUnlhVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZEUVN4VFFVRlRMRlZCUVZVc1EwRkJReXhOUVVGTkxFVkJRVVU3UVVGRE1VSXNUVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03UTBGRGRFSTdPMEZCUlVRc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVkQlFVY3NWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFZEJRVWNzV1VGQlZ6dEJRVU4yUlN4VFFVRlBMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzBOQlEzcENMRU5CUVVNN08zRkNRVVZoTEZWQlFWVWlMQ0ptYVd4bElqb2ljMkZtWlMxemRISnBibWN1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeUJDZFdsc1pDQnZkWFFnYjNWeUlHSmhjMmxqSUZOaFptVlRkSEpwYm1jZ2RIbHdaVnh1Wm5WdVkzUnBiMjRnVTJGbVpWTjBjbWx1WnloemRISnBibWNwSUh0Y2JpQWdkR2hwY3k1emRISnBibWNnUFNCemRISnBibWM3WEc1OVhHNWNibE5oWm1WVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuSUQwZ1UyRm1aVk4wY21sdVp5NXdjbTkwYjNSNWNHVXVkRzlJVkUxTUlEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lISmxkSFZ5YmlBbkp5QXJJSFJvYVhNdWMzUnlhVzVuTzF4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVMkZtWlZOMGNtbHVaenRjYmlKZGZRPT1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9zYWZlLXN0cmluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgNFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2hlY2tSZXZpc2lvbiA9IGNoZWNrUmV2aXNpb247XG5leHBvcnRzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5leHBvcnRzLndyYXBQcm9ncmFtID0gd3JhcFByb2dyYW07XG5leHBvcnRzLnJlc29sdmVQYXJ0aWFsID0gcmVzb2x2ZVBhcnRpYWw7XG5leHBvcnRzLmludm9rZVBhcnRpYWwgPSBpbnZva2VQYXJ0aWFsO1xuZXhwb3J0cy5ub29wID0gbm9vcDtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialsnZGVmYXVsdCddID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIFV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzKTtcblxudmFyIF9leGNlcHRpb24gPSByZXF1aXJlKCcuL2V4Y2VwdGlvbicpO1xuXG52YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG52YXIgX2Jhc2UgPSByZXF1aXJlKCcuL2Jhc2UnKTtcblxuZnVuY3Rpb24gY2hlY2tSZXZpc2lvbihjb21waWxlckluZm8pIHtcbiAgdmFyIGNvbXBpbGVyUmV2aXNpb24gPSBjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdIHx8IDEsXG4gICAgICBjdXJyZW50UmV2aXNpb24gPSBfYmFzZS5DT01QSUxFUl9SRVZJU0lPTjtcblxuICBpZiAoY29tcGlsZXJSZXZpc2lvbiAhPT0gY3VycmVudFJldmlzaW9uKSB7XG4gICAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPCBjdXJyZW50UmV2aXNpb24pIHtcbiAgICAgIHZhciBydW50aW1lVmVyc2lvbnMgPSBfYmFzZS5SRVZJU0lPTl9DSEFOR0VTW2N1cnJlbnRSZXZpc2lvbl0sXG4gICAgICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYW4gb2xkZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArICdQbGVhc2UgdXBkYXRlIHlvdXIgcHJlY29tcGlsZXIgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgcnVudGltZVZlcnNpb25zICsgJykgb3IgZG93bmdyYWRlIHlvdXIgcnVudGltZSB0byBhbiBvbGRlciB2ZXJzaW9uICgnICsgY29tcGlsZXJWZXJzaW9ucyArICcpLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhIG5ld2VyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgKyAnUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgY29tcGlsZXJJbmZvWzFdICsgJykuJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKHRlbXBsYXRlU3BlYywgZW52KSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmICghZW52KSB7XG4gICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ05vIGVudmlyb25tZW50IHBhc3NlZCB0byB0ZW1wbGF0ZScpO1xuICB9XG4gIGlmICghdGVtcGxhdGVTcGVjIHx8ICF0ZW1wbGF0ZVNwZWMubWFpbikge1xuICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmtub3duIHRlbXBsYXRlIG9iamVjdDogJyArIHR5cGVvZiB0ZW1wbGF0ZVNwZWMpO1xuICB9XG5cbiAgdGVtcGxhdGVTcGVjLm1haW4uZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjLm1haW5fZDtcblxuICAvLyBOb3RlOiBVc2luZyBlbnYuVk0gcmVmZXJlbmNlcyByYXRoZXIgdGhhbiBsb2NhbCB2YXIgcmVmZXJlbmNlcyB0aHJvdWdob3V0IHRoaXMgc2VjdGlvbiB0byBhbGxvd1xuICAvLyBmb3IgZXh0ZXJuYWwgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlc2UgYXMgcHN1ZWRvLXN1cHBvcnRlZCBBUElzLlxuICBlbnYuVk0uY2hlY2tSZXZpc2lvbih0ZW1wbGF0ZVNwZWMuY29tcGlsZXIpO1xuXG4gIGZ1bmN0aW9uIGludm9rZVBhcnRpYWxXcmFwcGVyKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgICBjb250ZXh0ID0gVXRpbHMuZXh0ZW5kKHt9LCBjb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIG9wdGlvbnMuaWRzWzBdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJ0aWFsID0gZW52LlZNLnJlc29sdmVQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG4gICAgdmFyIHJlc3VsdCA9IGVudi5WTS5pbnZva2VQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG5cbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgZW52LmNvbXBpbGUpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXSA9IGVudi5jb21waWxlKHBhcnRpYWwsIHRlbXBsYXRlU3BlYy5jb21waWxlck9wdGlvbnMsIGVudik7XG4gICAgICByZXN1bHQgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMuaW5kZW50KSB7XG4gICAgICAgIHZhciBsaW5lcyA9IHJlc3VsdC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFsaW5lc1tpXSAmJiBpICsgMSA9PT0gbCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGluZXNbaV0gPSBvcHRpb25zLmluZGVudCArIGxpbmVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGxpbmVzLmpvaW4oJ1xcbicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBjb21waWxlZCB3aGVuIHJ1bm5pbmcgaW4gcnVudGltZS1vbmx5IG1vZGUnKTtcbiAgICB9XG4gIH1cblxuICAvLyBKdXN0IGFkZCB3YXRlclxuICB2YXIgY29udGFpbmVyID0ge1xuICAgIHN0cmljdDogZnVuY3Rpb24gc3RyaWN0KG9iaiwgbmFtZSkge1xuICAgICAgaWYgKCEobmFtZSBpbiBvYmopKSB7XG4gICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdcIicgKyBuYW1lICsgJ1wiIG5vdCBkZWZpbmVkIGluICcgKyBvYmopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9ialtuYW1lXTtcbiAgICB9LFxuICAgIGxvb2t1cDogZnVuY3Rpb24gbG9va3VwKGRlcHRocywgbmFtZSkge1xuICAgICAgdmFyIGxlbiA9IGRlcHRocy5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChkZXB0aHNbaV0gJiYgZGVwdGhzW2ldW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZGVwdGhzW2ldW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsYW1iZGE6IGZ1bmN0aW9uIGxhbWJkYShjdXJyZW50LCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGN1cnJlbnQgPT09ICdmdW5jdGlvbicgPyBjdXJyZW50LmNhbGwoY29udGV4dCkgOiBjdXJyZW50O1xuICAgIH0sXG5cbiAgICBlc2NhcGVFeHByZXNzaW9uOiBVdGlscy5lc2NhcGVFeHByZXNzaW9uLFxuICAgIGludm9rZVBhcnRpYWw6IGludm9rZVBhcnRpYWxXcmFwcGVyLFxuXG4gICAgZm46IGZ1bmN0aW9uIGZuKGkpIHtcbiAgICAgIHZhciByZXQgPSB0ZW1wbGF0ZVNwZWNbaV07XG4gICAgICByZXQuZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjW2kgKyAnX2QnXTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIHByb2dyYW1zOiBbXSxcbiAgICBwcm9ncmFtOiBmdW5jdGlvbiBwcm9ncmFtKGksIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICAgIHZhciBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0sXG4gICAgICAgICAgZm4gPSB0aGlzLmZuKGkpO1xuICAgICAgaWYgKGRhdGEgfHwgZGVwdGhzIHx8IGJsb2NrUGFyYW1zIHx8IGRlY2xhcmVkQmxvY2tQYXJhbXMpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEodmFsdWUsIGRlcHRoKSB7XG4gICAgICB3aGlsZSAodmFsdWUgJiYgZGVwdGgtLSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLl9wYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UocGFyYW0sIGNvbW1vbikge1xuICAgICAgdmFyIG9iaiA9IHBhcmFtIHx8IGNvbW1vbjtcblxuICAgICAgaWYgKHBhcmFtICYmIGNvbW1vbiAmJiBwYXJhbSAhPT0gY29tbW9uKSB7XG4gICAgICAgIG9iaiA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgZnVuY3Rpb24gcmV0KGNvbnRleHQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cbiAgICByZXQuX3NldHVwKG9wdGlvbnMpO1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsICYmIHRlbXBsYXRlU3BlYy51c2VEYXRhKSB7XG4gICAgICBkYXRhID0gaW5pdERhdGEoY29udGV4dCwgZGF0YSk7XG4gICAgfVxuICAgIHZhciBkZXB0aHMgPSB1bmRlZmluZWQsXG4gICAgICAgIGJsb2NrUGFyYW1zID0gdGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zID8gW10gOiB1bmRlZmluZWQ7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMpIHtcbiAgICAgIGlmIChvcHRpb25zLmRlcHRocykge1xuICAgICAgICBkZXB0aHMgPSBjb250ZXh0ICE9PSBvcHRpb25zLmRlcHRoc1swXSA/IFtjb250ZXh0XS5jb25jYXQob3B0aW9ucy5kZXB0aHMpIDogb3B0aW9ucy5kZXB0aHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXB0aHMgPSBbY29udGV4dF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFpbihjb250ZXh0IC8qLCBvcHRpb25zKi8pIHtcbiAgICAgIHJldHVybiAnJyArIHRlbXBsYXRlU3BlYy5tYWluKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgfVxuICAgIG1haW4gPSBleGVjdXRlRGVjb3JhdG9ycyh0ZW1wbGF0ZVNwZWMubWFpbiwgbWFpbiwgY29udGFpbmVyLCBvcHRpb25zLmRlcHRocyB8fCBbXSwgZGF0YSwgYmxvY2tQYXJhbXMpO1xuICAgIHJldHVybiBtYWluKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG4gIHJldC5pc1RvcCA9IHRydWU7XG5cbiAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwpIHtcbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuaGVscGVycywgZW52LmhlbHBlcnMpO1xuXG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwpIHtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMucGFydGlhbHMsIGVudi5wYXJ0aWFscyk7XG4gICAgICB9XG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwgfHwgdGVtcGxhdGVTcGVjLnVzZURlY29yYXRvcnMpIHtcbiAgICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5kZWNvcmF0b3JzLCBlbnYuZGVjb3JhdG9ycyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gb3B0aW9ucy5oZWxwZXJzO1xuICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3B0aW9ucy5wYXJ0aWFscztcbiAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gb3B0aW9ucy5kZWNvcmF0b3JzO1xuICAgIH1cbiAgfTtcblxuICByZXQuX2NoaWxkID0gZnVuY3Rpb24gKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zICYmICFibG9ja1BhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ211c3QgcGFzcyBibG9jayBwYXJhbXMnKTtcbiAgICB9XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMgJiYgIWRlcHRocykge1xuICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ211c3QgcGFzcyBwYXJlbnQgZGVwdGhzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgdGVtcGxhdGVTcGVjW2ldLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgfTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICBmdW5jdGlvbiBwcm9nKGNvbnRleHQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG4gICAgaWYgKGRlcHRocyAmJiBjb250ZXh0ICE9PSBkZXB0aHNbMF0pIHtcbiAgICAgIGN1cnJlbnREZXB0aHMgPSBbY29udGV4dF0uY29uY2F0KGRlcHRocyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgb3B0aW9ucy5kYXRhIHx8IGRhdGEsIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLCBjdXJyZW50RGVwdGhzKTtcbiAgfVxuXG4gIHByb2cgPSBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKTtcblxuICBwcm9nLnByb2dyYW0gPSBpO1xuICBwcm9nLmRlcHRoID0gZGVwdGhzID8gZGVwdGhzLmxlbmd0aCA6IDA7XG4gIHByb2cuYmxvY2tQYXJhbXMgPSBkZWNsYXJlZEJsb2NrUGFyYW1zIHx8IDA7XG4gIHJldHVybiBwcm9nO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIGlmICghcGFydGlhbCkge1xuICAgIGlmIChvcHRpb25zLm5hbWUgPT09ICdAcGFydGlhbC1ibG9jaycpIHtcbiAgICAgIHBhcnRpYWwgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIXBhcnRpYWwuY2FsbCAmJiAhb3B0aW9ucy5uYW1lKSB7XG4gICAgLy8gVGhpcyBpcyBhIGR5bmFtaWMgcGFydGlhbCB0aGF0IHJldHVybmVkIGEgc3RyaW5nXG4gICAgb3B0aW9ucy5uYW1lID0gcGFydGlhbDtcbiAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1twYXJ0aWFsXTtcbiAgfVxuICByZXR1cm4gcGFydGlhbDtcbn1cblxuZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMucGFydGlhbCA9IHRydWU7XG4gIGlmIChvcHRpb25zLmlkcykge1xuICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCA9IG9wdGlvbnMuaWRzWzBdIHx8IG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aDtcbiAgfVxuXG4gIHZhciBwYXJ0aWFsQmxvY2sgPSB1bmRlZmluZWQ7XG4gIGlmIChvcHRpb25zLmZuICYmIG9wdGlvbnMuZm4gIT09IG5vb3ApIHtcbiAgICBvcHRpb25zLmRhdGEgPSBfYmFzZS5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgIHBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChwYXJ0aWFsQmxvY2sucGFydGlhbHMpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIHBhcnRpYWxCbG9jay5wYXJ0aWFscyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXJ0aWFsQmxvY2spIHtcbiAgICBwYXJ0aWFsID0gcGFydGlhbEJsb2NrO1xuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgZm91bmQnKTtcbiAgfSBlbHNlIGlmIChwYXJ0aWFsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gcGFydGlhbChjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBub29wKCkge1xuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcbiAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG4gICAgZGF0YSA9IGRhdGEgPyBfYmFzZS5jcmVhdGVGcmFtZShkYXRhKSA6IHt9O1xuICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpIHtcbiAgaWYgKGZuLmRlY29yYXRvcikge1xuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHByb2cgPSBmbi5kZWNvcmF0b3IocHJvZywgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGhzICYmIGRlcHRoc1swXSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgVXRpbHMuZXh0ZW5kKHByb2csIHByb3BzKTtcbiAgfVxuICByZXR1cm4gcHJvZztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwzSjFiblJwYldVdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN2NVSkJRWFZDTEZOQlFWTTdPMGxCUVhCQ0xFdEJRVXM3TzNsQ1FVTkxMR0ZCUVdFN096czdiMEpCUXpoQ0xGRkJRVkU3TzBGQlJXeEZMRk5CUVZNc1lVRkJZU3hEUVVGRExGbEJRVmtzUlVGQlJUdEJRVU14UXl4TlFVRk5MR2RDUVVGblFpeEhRVUZITEZsQlFWa3NTVUZCU1N4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dE5RVU4yUkN4bFFVRmxMREJDUVVGdlFpeERRVUZET3p0QlFVVXhReXhOUVVGSkxHZENRVUZuUWl4TFFVRkxMR1ZCUVdVc1JVRkJSVHRCUVVONFF5eFJRVUZKTEdkQ1FVRm5RaXhIUVVGSExHVkJRV1VzUlVGQlJUdEJRVU4wUXl4VlFVRk5MR1ZCUVdVc1IwRkJSeXgxUWtGQmFVSXNaVUZCWlN4RFFVRkRPMVZCUTI1RUxHZENRVUZuUWl4SFFVRkhMSFZDUVVGcFFpeG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8wRkJRelZFTEZsQlFVMHNNa0pCUVdNc2VVWkJRWGxHTEVkQlEzWkhMSEZFUVVGeFJDeEhRVUZITEdWQlFXVXNSMEZCUnl4dFJFRkJiVVFzUjBGQlJ5eG5Ra0ZCWjBJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dExRVU5vU3l4TlFVRk5PenRCUVVWTUxGbEJRVTBzTWtKQlFXTXNkMFpCUVhkR0xFZEJRM1JITEdsRVFVRnBSQ3hIUVVGSExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRMUVVOdVJqdEhRVU5HTzBOQlEwWTdPMEZCUlUwc1UwRkJVeXhSUVVGUkxFTkJRVU1zV1VGQldTeEZRVUZGTEVkQlFVY3NSVUZCUlRzN1FVRkZNVU1zVFVGQlNTeERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTlNMRlZCUVUwc01rSkJRV01zYlVOQlFXMURMRU5CUVVNc1EwRkJRenRIUVVNeFJEdEJRVU5FTEUxQlFVa3NRMEZCUXl4WlFVRlpMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTzBGQlEzWkRMRlZCUVUwc01rSkJRV01zTWtKQlFUSkNMRWRCUVVjc1QwRkJUeXhaUVVGWkxFTkJRVU1zUTBGQlF6dEhRVU40UlRzN1FVRkZSQ3hqUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4WlFVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRE96czdPMEZCU1d4RUxFdEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNZVUZCWVN4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6czdRVUZGTlVNc1YwRkJVeXh2UWtGQmIwSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJUdEJRVU4yUkN4UlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVU3UVVGRGFFSXNZVUZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRGJFUXNWVUZCU1N4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRk8wRkJRMllzWlVGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03VDBGRGRrSTdTMEZEUmpzN1FVRkZSQ3hYUVVGUExFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wRkJRM1JGTEZGQlFVa3NUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXpzN1FVRkZlRVVzVVVGQlNTeE5RVUZOTEVsQlFVa3NTVUZCU1N4SlFVRkpMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRVVU3UVVGRGFrTXNZVUZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzV1VGQldTeERRVUZETEdWQlFXVXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVONlJpeFpRVUZOTEVkQlFVY3NUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wdEJRek5FTzBGQlEwUXNVVUZCU1N4TlFVRk5MRWxCUVVrc1NVRkJTU3hGUVVGRk8wRkJRMnhDTEZWQlFVa3NUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSVHRCUVVOc1FpeFpRVUZKTEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBGQlF5OUNMR0ZCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1FVRkROVU1zWTBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0QlFVTTFRaXhyUWtGQlRUdFhRVU5RT3p0QlFVVkVMR1ZCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU4wUXp0QlFVTkVMR05CUVUwc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMDlCUXpOQ08wRkJRMFFzWVVGQlR5eE5RVUZOTEVOQlFVTTdTMEZEWml4TlFVRk5PMEZCUTB3c1dVRkJUU3d5UWtGQll5eGpRVUZqTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWxCUVVrc1IwRkJSeXd3UkVGQk1FUXNRMEZCUXl4RFFVRkRPMHRCUTJwSU8wZEJRMFk3T3p0QlFVZEVMRTFCUVVrc1UwRkJVeXhIUVVGSE8wRkJRMlFzVlVGQlRTeEZRVUZGTEdkQ1FVRlRMRWRCUVVjc1JVRkJSU3hKUVVGSkxFVkJRVVU3UVVGRE1VSXNWVUZCU1N4RlFVRkZMRWxCUVVrc1NVRkJTU3hIUVVGSExFTkJRVUVzUVVGQlF5eEZRVUZGTzBGQlEyeENMR05CUVUwc01rSkJRV01zUjBGQlJ5eEhRVUZITEVsQlFVa3NSMEZCUnl4dFFrRkJiVUlzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0UFFVTTNSRHRCUVVORUxHRkJRVThzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUTJ4Q08wRkJRMFFzVlVGQlRTeEZRVUZGTEdkQ1FVRlRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFVkJRVVU3UVVGRE4wSXNWVUZCVFN4SFFVRkhMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dEJRVU14UWl4WFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRelZDTEZsQlFVa3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVU3UVVGRGVFTXNhVUpCUVU4c1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUTNoQ08wOUJRMFk3UzBGRFJqdEJRVU5FTEZWQlFVMHNSVUZCUlN4blFrRkJVeXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEycERMR0ZCUVU4c1QwRkJUeXhQUVVGUExFdEJRVXNzVlVGQlZTeEhRVUZITEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZETzB0QlEzaEZPenRCUVVWRUxHOUNRVUZuUWl4RlFVRkZMRXRCUVVzc1EwRkJReXhuUWtGQlowSTdRVUZEZUVNc2FVSkJRV0VzUlVGQlJTeHZRa0ZCYjBJN08wRkJSVzVETEUxQlFVVXNSVUZCUlN4WlFVRlRMRU5CUVVNc1JVRkJSVHRCUVVOa0xGVkJRVWtzUjBGQlJ5eEhRVUZITEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVNeFFpeFRRVUZITEVOQlFVTXNVMEZCVXl4SFFVRkhMRmxCUVZrc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdRVUZEZGtNc1lVRkJUeXhIUVVGSExFTkJRVU03UzBGRFdqczdRVUZGUkN4WlFVRlJMRVZCUVVVc1JVRkJSVHRCUVVOYUxGZEJRVThzUlVGQlJTeHBRa0ZCVXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxHMUNRVUZ0UWl4RlFVRkZMRmRCUVZjc1JVRkJSU3hOUVVGTkxFVkJRVVU3UVVGRGJrVXNWVUZCU1N4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdWVUZEYWtNc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRjRUlzVlVGQlNTeEpRVUZKTEVsQlFVa3NUVUZCVFN4SlFVRkpMRmRCUVZjc1NVRkJTU3h0UWtGQmJVSXNSVUZCUlR0QlFVTjRSQ3h6UWtGQll5eEhRVUZITEZkQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEpRVUZKTEVWQlFVVXNiVUpCUVcxQ0xFVkJRVVVzVjBGQlZ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMDlCUXpOR0xFMUJRVTBzU1VGQlNTeERRVUZETEdOQlFXTXNSVUZCUlR0QlFVTXhRaXh6UWtGQll5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03VDBGRE9VUTdRVUZEUkN4aFFVRlBMR05CUVdNc1EwRkJRenRMUVVOMlFqczdRVUZGUkN4UlFVRkpMRVZCUVVVc1kwRkJVeXhMUVVGTExFVkJRVVVzUzBGQlN5eEZRVUZGTzBGQlF6TkNMR0ZCUVU4c1MwRkJTeXhKUVVGSkxFdEJRVXNzUlVGQlJTeEZRVUZGTzBGQlEzWkNMR0ZCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETzA5QlEzWkNPMEZCUTBRc1lVRkJUeXhMUVVGTExFTkJRVU03UzBGRFpEdEJRVU5FTEZOQlFVc3NSVUZCUlN4bFFVRlRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFVkJRVVU3UVVGRE4wSXNWVUZCU1N4SFFVRkhMRWRCUVVjc1MwRkJTeXhKUVVGSkxFMUJRVTBzUTBGQlF6czdRVUZGTVVJc1ZVRkJTU3hMUVVGTExFbEJRVWtzVFVGQlRTeEpRVUZMTEV0QlFVc3NTMEZCU3l4TlFVRk5MRUZCUVVNc1JVRkJSVHRCUVVONlF5eFhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFVkJRVVVzVFVGQlRTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMDlCUTNaRE96dEJRVVZFTEdGQlFVOHNSMEZCUnl4RFFVRkRPMHRCUTFvN08wRkJSVVFzVVVGQlNTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTVHRCUVVOcVFpeG5Ra0ZCV1N4RlFVRkZMRmxCUVZrc1EwRkJReXhSUVVGUk8wZEJRM0JETEVOQlFVTTdPMEZCUlVZc1YwRkJVeXhIUVVGSExFTkJRVU1zVDBGQlR5eEZRVUZuUWp0UlFVRmtMRTlCUVU4c2VVUkJRVWNzUlVGQlJUczdRVUZEYUVNc1VVRkJTU3hKUVVGSkxFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXpzN1FVRkZlRUlzVDBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRCUVVOd1FpeFJRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1NVRkJTU3haUVVGWkxFTkJRVU1zVDBGQlR5eEZRVUZGTzBGQlF6VkRMRlZCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUTJoRE8wRkJRMFFzVVVGQlNTeE5RVUZOTEZsQlFVRTdVVUZEVGl4WFFVRlhMRWRCUVVjc1dVRkJXU3hEUVVGRExHTkJRV01zUjBGQlJ5eEZRVUZGTEVkQlFVY3NVMEZCVXl4RFFVRkRPMEZCUXk5RUxGRkJRVWtzV1VGQldTeERRVUZETEZOQlFWTXNSVUZCUlR0QlFVTXhRaXhWUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZEYkVJc1kwRkJUU3hIUVVGSExFOUJRVThzUzBGQlN5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRPMDlCUXpWR0xFMUJRVTA3UVVGRFRDeGpRVUZOTEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRQUVVOd1FqdExRVU5HT3p0QlFVVkVMR0ZCUVZNc1NVRkJTU3hEUVVGRExFOUJRVThzWjBKQlFXVTdRVUZEYkVNc1lVRkJUeXhGUVVGRkxFZEJRVWNzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1QwRkJUeXhGUVVGRkxGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNVMEZCVXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFVkJRVVVzVjBGQlZ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMHRCUTNKSU8wRkJRMFFzVVVGQlNTeEhRVUZITEdsQ1FVRnBRaXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRk5CUVZNc1JVRkJSU3hQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEVWQlFVVXNSVUZCUlN4SlFVRkpMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03UVVGRGRFY3NWMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBkQlF5OUNPMEZCUTBRc1MwRkJSeXhEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdPMEZCUldwQ0xFdEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NWVUZCVXl4UFFVRlBMRVZCUVVVN1FVRkROMElzVVVGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVN1FVRkRjRUlzWlVGQlV5eERRVUZETEU5QlFVOHNSMEZCUnl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE96dEJRVVZzUlN4VlFVRkpMRmxCUVZrc1EwRkJReXhWUVVGVkxFVkJRVVU3UVVGRE0wSXNhVUpCUVZNc1EwRkJReXhSUVVGUkxFZEJRVWNzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UFFVTjBSVHRCUVVORUxGVkJRVWtzV1VGQldTeERRVUZETEZWQlFWVXNTVUZCU1N4WlFVRlpMRU5CUVVNc1lVRkJZU3hGUVVGRk8wRkJRM3BFTEdsQ1FVRlRMRU5CUVVNc1ZVRkJWU3hIUVVGSExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSU3hIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdUMEZETlVVN1MwRkRSaXhOUVVGTk8wRkJRMHdzWlVGQlV5eERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRE8wRkJRM0JETEdWQlFWTXNRMEZCUXl4UlFVRlJMRWRCUVVjc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF6dEJRVU4wUXl4bFFVRlRMRU5CUVVNc1ZVRkJWU3hIUVVGSExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTTdTMEZETTBNN1IwRkRSaXhEUVVGRE96dEJRVVZHTEV0QlFVY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1ZVRkJVeXhEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEZkQlFWY3NSVUZCUlN4TlFVRk5MRVZCUVVVN1FVRkRiRVFzVVVGQlNTeFpRVUZaTEVOQlFVTXNZMEZCWXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRk8wRkJReTlETEZsQlFVMHNNa0pCUVdNc2QwSkJRWGRDTEVOQlFVTXNRMEZCUXp0TFFVTXZRenRCUVVORUxGRkJRVWtzV1VGQldTeERRVUZETEZOQlFWTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSVHRCUVVOeVF5eFpRVUZOTERKQ1FVRmpMSGxDUVVGNVFpeERRVUZETEVOQlFVTTdTMEZEYUVRN08wRkJSVVFzVjBGQlR5eFhRVUZYTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hYUVVGWExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdSMEZEYWtZc1EwRkJRenRCUVVOR0xGTkJRVThzUjBGQlJ5eERRVUZETzBOQlExbzdPMEZCUlUwc1UwRkJVeXhYUVVGWExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGRkxHMUNRVUZ0UWl4RlFVRkZMRmRCUVZjc1JVRkJSU3hOUVVGTkxFVkJRVVU3UVVGRE5VWXNWMEZCVXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGblFqdFJRVUZrTEU5QlFVOHNlVVJCUVVjc1JVRkJSVHM3UVVGRGFrTXNVVUZCU1N4aFFVRmhMRWRCUVVjc1RVRkJUU3hEUVVGRE8wRkJRek5DTEZGQlFVa3NUVUZCVFN4SlFVRkpMRTlCUVU4c1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdRVUZEYmtNc2JVSkJRV0VzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dExRVU14UXpzN1FVRkZSQ3hYUVVGUExFVkJRVVVzUTBGQlF5eFRRVUZUTEVWQlEyWXNUMEZCVHl4RlFVTlFMRk5CUVZNc1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eERRVUZETEZGQlFWRXNSVUZEY2tNc1QwRkJUeXhEUVVGRExFbEJRVWtzU1VGQlNTeEpRVUZKTEVWQlEzQkNMRmRCUVZjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRM2hFTEdGQlFXRXNRMEZCUXl4RFFVRkRPMGRCUTNCQ096dEJRVVZFTEUxQlFVa3NSMEZCUnl4cFFrRkJhVUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNTVUZCU1N4RlFVRkZMRk5CUVZNc1JVRkJSU3hOUVVGTkxFVkJRVVVzU1VGQlNTeEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPenRCUVVWNlJTeE5RVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOcVFpeE5RVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjRReXhOUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEcxQ1FVRnRRaXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU0xUXl4VFFVRlBMRWxCUVVrc1EwRkJRenREUVVOaU96dEJRVVZOTEZOQlFWTXNZMEZCWXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEzaEVMRTFCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3UVVGRFdpeFJRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRXRCUVVzc1owSkJRV2RDTEVWQlFVVTdRVUZEY2tNc1lVRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNN1MwRkRla01zVFVGQlRUdEJRVU5NTEdGQlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTXhRenRIUVVOR0xFMUJRVTBzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGT3p0QlFVVjZReXhYUVVGUExFTkJRVU1zU1VGQlNTeEhRVUZITEU5QlFVOHNRMEZCUXp0QlFVTjJRaXhYUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRIUVVOeVF6dEJRVU5FTEZOQlFVOHNUMEZCVHl4RFFVRkRPME5CUTJoQ096dEJRVVZOTEZOQlFWTXNZVUZCWVN4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEzWkVMRk5CUVU4c1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEzWkNMRTFCUVVrc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU5tTEZkQlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdSMEZEZGtVN08wRkJSVVFzVFVGQlNTeFpRVUZaTEZsQlFVRXNRMEZCUXp0QlFVTnFRaXhOUVVGSkxFOUJRVThzUTBGQlF5eEZRVUZGTEVsQlFVa3NUMEZCVHl4RFFVRkRMRVZCUVVVc1MwRkJTeXhKUVVGSkxFVkJRVVU3UVVGRGNrTXNWMEZCVHl4RFFVRkRMRWxCUVVrc1IwRkJSeXhyUWtGQldTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRla01zWjBKQlFWa3NSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNN08wRkJSVEZFTEZGQlFVa3NXVUZCV1N4RFFVRkRMRkZCUVZFc1JVRkJSVHRCUVVONlFpeGhRVUZQTEVOQlFVTXNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzB0QlF6bEZPMGRCUTBZN08wRkJSVVFzVFVGQlNTeFBRVUZQTEV0QlFVc3NVMEZCVXl4SlFVRkpMRmxCUVZrc1JVRkJSVHRCUVVONlF5eFhRVUZQTEVkQlFVY3NXVUZCV1N4RFFVRkRPMGRCUTNoQ096dEJRVVZFTEUxQlFVa3NUMEZCVHl4TFFVRkxMRk5CUVZNc1JVRkJSVHRCUVVONlFpeFZRVUZOTERKQ1FVRmpMR05CUVdNc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeEhRVUZITEhGQ1FVRnhRaXhEUVVGRExFTkJRVU03UjBGRE5VVXNUVUZCVFN4SlFVRkpMRTlCUVU4c1dVRkJXU3hSUVVGUkxFVkJRVVU3UVVGRGRFTXNWMEZCVHl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBkQlEyeERPME5CUTBZN08wRkJSVTBzVTBGQlV5eEpRVUZKTEVkQlFVYzdRVUZCUlN4VFFVRlBMRVZCUVVVc1EwRkJRenREUVVGRk96dEJRVVZ5UXl4VFFVRlRMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeEZRVUZGTzBGQlF5OUNMRTFCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzUlVGQlJTeE5RVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkJMRUZCUVVNc1JVRkJSVHRCUVVNNVFpeFJRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkhMR3RDUVVGWkxFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTnlReXhSUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEU5QlFVOHNRMEZCUXp0SFFVTnlRanRCUVVORUxGTkJRVThzU1VGQlNTeERRVUZETzBOQlEySTdPMEZCUlVRc1UwRkJVeXhwUWtGQmFVSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGRkxGTkJRVk1zUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RlFVRkZMRmRCUVZjc1JVRkJSVHRCUVVONlJTeE5RVUZKTEVWQlFVVXNRMEZCUXl4VFFVRlRMRVZCUVVVN1FVRkRhRUlzVVVGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTJZc1VVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeEpRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVjBGQlZ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUXpWR0xGTkJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wZEJRek5DTzBGQlEwUXNVMEZCVHl4SlFVRkpMRU5CUVVNN1EwRkRZaUlzSW1acGJHVWlPaUp5ZFc1MGFXMWxMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUNvZ1lYTWdWWFJwYkhNZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEc1cGJYQnZjblFnUlhoalpYQjBhVzl1SUdaeWIyMGdKeTR2WlhoalpYQjBhVzl1Snp0Y2JtbHRjRzl5ZENCN0lFTlBUVkJKVEVWU1gxSkZWa2xUU1U5T0xDQlNSVlpKVTBsUFRsOURTRUZPUjBWVExDQmpjbVZoZEdWR2NtRnRaU0I5SUdaeWIyMGdKeTR2WW1GelpTYzdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJqYUdWamExSmxkbWx6YVc5dUtHTnZiWEJwYkdWeVNXNW1ieWtnZTF4dUlDQmpiMjV6ZENCamIyMXdhV3hsY2xKbGRtbHphVzl1SUQwZ1kyOXRjR2xzWlhKSmJtWnZJQ1ltSUdOdmJYQnBiR1Z5U1c1bWIxc3dYU0I4ZkNBeExGeHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVtVjJhWE5wYjI0Z1BTQkRUMDFRU1V4RlVsOVNSVlpKVTBsUFRqdGNibHh1SUNCcFppQW9ZMjl0Y0dsc1pYSlNaWFpwYzJsdmJpQWhQVDBnWTNWeWNtVnVkRkpsZG1semFXOXVLU0I3WEc0Z0lDQWdhV1lnS0dOdmJYQnBiR1Z5VW1WMmFYTnBiMjRnUENCamRYSnlaVzUwVW1WMmFYTnBiMjRwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSEoxYm5ScGJXVldaWEp6YVc5dWN5QTlJRkpGVmtsVFNVOU9YME5JUVU1SFJWTmJZM1Z5Y21WdWRGSmxkbWx6YVc5dVhTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJYQnBiR1Z5Vm1WeWMybHZibk1nUFNCU1JWWkpVMGxQVGw5RFNFRk9SMFZUVzJOdmJYQnBiR1Z5VW1WMmFYTnBiMjVkTzF4dUlDQWdJQ0FnZEdoeWIzY2dibVYzSUVWNFkyVndkR2x2YmlnblZHVnRjR3hoZEdVZ2QyRnpJSEJ5WldOdmJYQnBiR1ZrSUhkcGRHZ2dZVzRnYjJ4a1pYSWdkbVZ5YzJsdmJpQnZaaUJJWVc1a2JHVmlZWEp6SUhSb1lXNGdkR2hsSUdOMWNuSmxiblFnY25WdWRHbHRaUzRnSnlBclhHNGdJQ0FnSUNBZ0lDQWdJQ0FuVUd4bFlYTmxJSFZ3WkdGMFpTQjViM1Z5SUhCeVpXTnZiWEJwYkdWeUlIUnZJR0VnYm1WM1pYSWdkbVZ5YzJsdmJpQW9KeUFySUhKMWJuUnBiV1ZXWlhKemFXOXVjeUFySUNjcElHOXlJR1J2ZDI1bmNtRmtaU0I1YjNWeUlISjFiblJwYldVZ2RHOGdZVzRnYjJ4a1pYSWdkbVZ5YzJsdmJpQW9KeUFySUdOdmJYQnBiR1Z5Vm1WeWMybHZibk1nS3lBbktTNG5LVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0x5OGdWWE5sSUhSb1pTQmxiV0psWkdSbFpDQjJaWEp6YVc5dUlHbHVabThnYzJsdVkyVWdkR2hsSUhKMWJuUnBiV1VnWkc5bGMyNG5kQ0JyYm05M0lHRmliM1YwSUhSb2FYTWdjbVYyYVhOcGIyNGdlV1YwWEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0NkVVpXMXdiR0YwWlNCM1lYTWdjSEpsWTI5dGNHbHNaV1FnZDJsMGFDQmhJRzVsZDJWeUlIWmxjbk5wYjI0Z2IyWWdTR0Z1Wkd4bFltRnljeUIwYUdGdUlIUm9aU0JqZFhKeVpXNTBJSEoxYm5ScGJXVXVJQ2NnSzF4dUlDQWdJQ0FnSUNBZ0lDQWdKMUJzWldGelpTQjFjR1JoZEdVZ2VXOTFjaUJ5ZFc1MGFXMWxJSFJ2SUdFZ2JtVjNaWElnZG1WeWMybHZiaUFvSnlBcklHTnZiWEJwYkdWeVNXNW1iMXN4WFNBcklDY3BMaWNwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnZEdWdGNHeGhkR1VvZEdWdGNHeGhkR1ZUY0dWakxDQmxibllwSUh0Y2JpQWdMeW9nYVhOMFlXNWlkV3dnYVdkdWIzSmxJRzVsZUhRZ0tpOWNiaUFnYVdZZ0tDRmxibllwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0NkT2J5QmxiblpwY205dWJXVnVkQ0J3WVhOelpXUWdkRzhnZEdWdGNHeGhkR1VuS1R0Y2JpQWdmVnh1SUNCcFppQW9JWFJsYlhCc1lYUmxVM0JsWXlCOGZDQWhkR1Z0Y0d4aGRHVlRjR1ZqTG0xaGFXNHBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWGhqWlhCMGFXOXVLQ2RWYm10dWIzZHVJSFJsYlhCc1lYUmxJRzlpYW1WamREb2dKeUFySUhSNWNHVnZaaUIwWlcxd2JHRjBaVk53WldNcE8xeHVJQ0I5WEc1Y2JpQWdkR1Z0Y0d4aGRHVlRjR1ZqTG0xaGFXNHVaR1ZqYjNKaGRHOXlJRDBnZEdWdGNHeGhkR1ZUY0dWakxtMWhhVzVmWkR0Y2JseHVJQ0F2THlCT2IzUmxPaUJWYzJsdVp5Qmxibll1VmswZ2NtVm1aWEpsYm1ObGN5QnlZWFJvWlhJZ2RHaGhiaUJzYjJOaGJDQjJZWElnY21WbVpYSmxibU5sY3lCMGFISnZkV2RvYjNWMElIUm9hWE1nYzJWamRHbHZiaUIwYnlCaGJHeHZkMXh1SUNBdkx5Qm1iM0lnWlhoMFpYSnVZV3dnZFhObGNuTWdkRzhnYjNabGNuSnBaR1VnZEdobGMyVWdZWE1nY0hOMVpXUnZMWE4xY0hCdmNuUmxaQ0JCVUVsekxseHVJQ0JsYm5ZdVZrMHVZMmhsWTJ0U1pYWnBjMmx2YmloMFpXMXdiR0YwWlZOd1pXTXVZMjl0Y0dsc1pYSXBPMXh1WEc0Z0lHWjFibU4wYVc5dUlHbHVkbTlyWlZCaGNuUnBZV3hYY21Gd2NHVnlLSEJoY25ScFlXd3NJR052Ym5SbGVIUXNJRzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQnBaaUFvYjNCMGFXOXVjeTVvWVhOb0tTQjdYRzRnSUNBZ0lDQmpiMjUwWlhoMElEMGdWWFJwYkhNdVpYaDBaVzVrS0h0OUxDQmpiMjUwWlhoMExDQnZjSFJwYjI1ekxtaGhjMmdwTzF4dUlDQWdJQ0FnYVdZZ0tHOXdkR2x2Ym5NdWFXUnpLU0I3WEc0Z0lDQWdJQ0FnSUc5d2RHbHZibk11YVdSeld6QmRJRDBnZEhKMVpUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCd1lYSjBhV0ZzSUQwZ1pXNTJMbFpOTG5KbGMyOXNkbVZRWVhKMGFXRnNMbU5oYkd3b2RHaHBjeXdnY0dGeWRHbGhiQ3dnWTI5dWRHVjRkQ3dnYjNCMGFXOXVjeWs3WEc0Z0lDQWdiR1YwSUhKbGMzVnNkQ0E5SUdWdWRpNVdUUzVwYm5admEyVlFZWEowYVdGc0xtTmhiR3dvZEdocGN5d2djR0Z5ZEdsaGJDd2dZMjl1ZEdWNGRDd2diM0IwYVc5dWN5azdYRzVjYmlBZ0lDQnBaaUFvY21WemRXeDBJRDA5SUc1MWJHd2dKaVlnWlc1MkxtTnZiWEJwYkdVcElIdGNiaUFnSUNBZ0lHOXdkR2x2Ym5NdWNHRnlkR2xoYkhOYmIzQjBhVzl1Y3k1dVlXMWxYU0E5SUdWdWRpNWpiMjF3YVd4bEtIQmhjblJwWVd3c0lIUmxiWEJzWVhSbFUzQmxZeTVqYjIxd2FXeGxjazl3ZEdsdmJuTXNJR1Z1ZGlrN1hHNGdJQ0FnSUNCeVpYTjFiSFFnUFNCdmNIUnBiMjV6TG5CaGNuUnBZV3h6VzI5d2RHbHZibk11Ym1GdFpWMG9ZMjl1ZEdWNGRDd2diM0IwYVc5dWN5azdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaHlaWE4xYkhRZ0lUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ2FXWWdLRzl3ZEdsdmJuTXVhVzVrWlc1MEtTQjdYRzRnSUNBZ0lDQWdJR3hsZENCc2FXNWxjeUE5SUhKbGMzVnNkQzV6Y0d4cGRDZ25YRnh1SnlrN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3TENCc0lEMGdiR2x1WlhNdWJHVnVaM1JvT3lCcElEd2diRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnNhVzVsYzF0cFhTQW1KaUJwSUNzZ01TQTlQVDBnYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdiR2x1WlhOYmFWMGdQU0J2Y0hScGIyNXpMbWx1WkdWdWRDQXJJR3hwYm1WelcybGRPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGMzVnNkQ0E5SUd4cGJtVnpMbXB2YVc0b0oxeGNiaWNwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnY21WMGRYSnVJSEpsYzNWc2REdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZEdoeWIzY2dibVYzSUVWNFkyVndkR2x2YmlnblZHaGxJSEJoY25ScFlXd2dKeUFySUc5d2RHbHZibk11Ym1GdFpTQXJJQ2NnWTI5MWJHUWdibTkwSUdKbElHTnZiWEJwYkdWa0lIZG9aVzRnY25WdWJtbHVaeUJwYmlCeWRXNTBhVzFsTFc5dWJIa2diVzlrWlNjcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDOHZJRXAxYzNRZ1lXUmtJSGRoZEdWeVhHNGdJR3hsZENCamIyNTBZV2x1WlhJZ1BTQjdYRzRnSUNBZ2MzUnlhV04wT2lCbWRXNWpkR2x2Ymlodlltb3NJRzVoYldVcElIdGNiaUFnSUNBZ0lHbG1JQ2doS0c1aGJXVWdhVzRnYjJKcUtTa2dlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0NkY0lpY2dLeUJ1WVcxbElDc2dKMXdpSUc1dmRDQmtaV1pwYm1Wa0lHbHVJQ2NnS3lCdlltb3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdjbVYwZFhKdUlHOWlhbHR1WVcxbFhUdGNiaUFnSUNCOUxGeHVJQ0FnSUd4dmIydDFjRG9nWm5WdVkzUnBiMjRvWkdWd2RHaHpMQ0J1WVcxbEtTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCc1pXNGdQU0JrWlhCMGFITXViR1Z1WjNSb08xeHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnNaVzQ3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1pHVndkR2h6VzJsZElDWW1JR1JsY0hSb2MxdHBYVnR1WVcxbFhTQWhQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1JsY0hSb2MxdHBYVnR1WVcxbFhUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzRnSUNBZ2JHRnRZbVJoT2lCbWRXNWpkR2x2YmloamRYSnlaVzUwTENCamIyNTBaWGgwS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEhsd1pXOW1JR04xY25KbGJuUWdQVDA5SUNkbWRXNWpkR2x2YmljZ1B5QmpkWEp5Wlc1MExtTmhiR3dvWTI5dWRHVjRkQ2tnT2lCamRYSnlaVzUwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JsYzJOaGNHVkZlSEJ5WlhOemFXOXVPaUJWZEdsc2N5NWxjMk5oY0dWRmVIQnlaWE56YVc5dUxGeHVJQ0FnSUdsdWRtOXJaVkJoY25ScFlXdzZJR2x1ZG05clpWQmhjblJwWVd4WGNtRndjR1Z5TEZ4dVhHNGdJQ0FnWm00NklHWjFibU4wYVc5dUtHa3BJSHRjYmlBZ0lDQWdJR3hsZENCeVpYUWdQU0IwWlcxd2JHRjBaVk53WldOYmFWMDdYRzRnSUNBZ0lDQnlaWFF1WkdWamIzSmhkRzl5SUQwZ2RHVnRjR3hoZEdWVGNHVmpXMmtnS3lBblgyUW5YVHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnlaWFE3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSEJ5YjJkeVlXMXpPaUJiWFN4Y2JpQWdJQ0J3Y205bmNtRnRPaUJtZFc1amRHbHZiaWhwTENCa1lYUmhMQ0JrWldOc1lYSmxaRUpzYjJOclVHRnlZVzF6TENCaWJHOWphMUJoY21GdGN5d2daR1Z3ZEdoektTQjdYRzRnSUNBZ0lDQnNaWFFnY0hKdlozSmhiVmR5WVhCd1pYSWdQU0IwYUdsekxuQnliMmR5WVcxelcybGRMRnh1SUNBZ0lDQWdJQ0FnSUdadUlEMGdkR2hwY3k1bWJpaHBLVHRjYmlBZ0lDQWdJR2xtSUNoa1lYUmhJSHg4SUdSbGNIUm9jeUI4ZkNCaWJHOWphMUJoY21GdGN5QjhmQ0JrWldOc1lYSmxaRUpzYjJOclVHRnlZVzF6S1NCN1hHNGdJQ0FnSUNBZ0lIQnliMmR5WVcxWGNtRndjR1Z5SUQwZ2QzSmhjRkJ5YjJkeVlXMG9kR2hwY3l3Z2FTd2dabTRzSUdSaGRHRXNJR1JsWTJ4aGNtVmtRbXh2WTJ0UVlYSmhiWE1zSUdKc2IyTnJVR0Z5WVcxekxDQmtaWEIwYUhNcE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2hjSEp2WjNKaGJWZHlZWEJ3WlhJcElIdGNiaUFnSUNBZ0lDQWdjSEp2WjNKaGJWZHlZWEJ3WlhJZ1BTQjBhR2x6TG5CeWIyZHlZVzF6VzJsZElEMGdkM0poY0ZCeWIyZHlZVzBvZEdocGN5d2dhU3dnWm00cE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2NtVjBkWEp1SUhCeWIyZHlZVzFYY21Gd2NHVnlPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmtZWFJoT2lCbWRXNWpkR2x2YmloMllXeDFaU3dnWkdWd2RHZ3BJSHRjYmlBZ0lDQWdJSGRvYVd4bElDaDJZV3gxWlNBbUppQmtaWEIwYUMwdEtTQjdYRzRnSUNBZ0lDQWdJSFpoYkhWbElEMGdkbUZzZFdVdVgzQmhjbVZ1ZER0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhKbGRIVnliaUIyWVd4MVpUdGNiaUFnSUNCOUxGeHVJQ0FnSUcxbGNtZGxPaUJtZFc1amRHbHZiaWh3WVhKaGJTd2dZMjl0Ylc5dUtTQjdYRzRnSUNBZ0lDQnNaWFFnYjJKcUlEMGdjR0Z5WVcwZ2ZId2dZMjl0Ylc5dU8xeHVYRzRnSUNBZ0lDQnBaaUFvY0dGeVlXMGdKaVlnWTI5dGJXOXVJQ1ltSUNod1lYSmhiU0FoUFQwZ1kyOXRiVzl1S1NrZ2UxeHVJQ0FnSUNBZ0lDQnZZbW9nUFNCVmRHbHNjeTVsZUhSbGJtUW9lMzBzSUdOdmJXMXZiaXdnY0dGeVlXMHBPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdiMkpxTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0J1YjI5d09pQmxibll1VmswdWJtOXZjQ3hjYmlBZ0lDQmpiMjF3YVd4bGNrbHVabTg2SUhSbGJYQnNZWFJsVTNCbFl5NWpiMjF3YVd4bGNseHVJQ0I5TzF4dVhHNGdJR1oxYm1OMGFXOXVJSEpsZENoamIyNTBaWGgwTENCdmNIUnBiMjV6SUQwZ2UzMHBJSHRjYmlBZ0lDQnNaWFFnWkdGMFlTQTlJRzl3ZEdsdmJuTXVaR0YwWVR0Y2JseHVJQ0FnSUhKbGRDNWZjMlYwZFhBb2IzQjBhVzl1Y3lrN1hHNGdJQ0FnYVdZZ0tDRnZjSFJwYjI1ekxuQmhjblJwWVd3Z0ppWWdkR1Z0Y0d4aGRHVlRjR1ZqTG5WelpVUmhkR0VwSUh0Y2JpQWdJQ0FnSUdSaGRHRWdQU0JwYm1sMFJHRjBZU2hqYjI1MFpYaDBMQ0JrWVhSaEtUdGNiaUFnSUNCOVhHNGdJQ0FnYkdWMElHUmxjSFJvY3l4Y2JpQWdJQ0FnSUNBZ1lteHZZMnRRWVhKaGJYTWdQU0IwWlcxd2JHRjBaVk53WldNdWRYTmxRbXh2WTJ0UVlYSmhiWE1nUHlCYlhTQTZJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQnBaaUFvZEdWdGNHeGhkR1ZUY0dWakxuVnpaVVJsY0hSb2N5a2dlMXh1SUNBZ0lDQWdhV1lnS0c5d2RHbHZibk11WkdWd2RHaHpLU0I3WEc0Z0lDQWdJQ0FnSUdSbGNIUm9jeUE5SUdOdmJuUmxlSFFnSVQwOUlHOXdkR2x2Ym5NdVpHVndkR2h6V3pCZElEOGdXMk52Ym5SbGVIUmRMbU52Ym1OaGRDaHZjSFJwYjI1ekxtUmxjSFJvY3lrZ09pQnZjSFJwYjI1ekxtUmxjSFJvY3p0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdSbGNIUm9jeUE5SUZ0amIyNTBaWGgwWFR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtZFc1amRHbHZiaUJ0WVdsdUtHTnZiblJsZUhRdktpd2diM0IwYVc5dWN5b3ZLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdKeWNnS3lCMFpXMXdiR0YwWlZOd1pXTXViV0ZwYmloamIyNTBZV2x1WlhJc0lHTnZiblJsZUhRc0lHTnZiblJoYVc1bGNpNW9aV3h3WlhKekxDQmpiMjUwWVdsdVpYSXVjR0Z5ZEdsaGJITXNJR1JoZEdFc0lHSnNiMk5yVUdGeVlXMXpMQ0JrWlhCMGFITXBPMXh1SUNBZ0lIMWNiaUFnSUNCdFlXbHVJRDBnWlhobFkzVjBaVVJsWTI5eVlYUnZjbk1vZEdWdGNHeGhkR1ZUY0dWakxtMWhhVzRzSUcxaGFXNHNJR052Ym5SaGFXNWxjaXdnYjNCMGFXOXVjeTVrWlhCMGFITWdmSHdnVzEwc0lHUmhkR0VzSUdKc2IyTnJVR0Z5WVcxektUdGNiaUFnSUNCeVpYUjFjbTRnYldGcGJpaGpiMjUwWlhoMExDQnZjSFJwYjI1ektUdGNiaUFnZlZ4dUlDQnlaWFF1YVhOVWIzQWdQU0IwY25WbE8xeHVYRzRnSUhKbGRDNWZjMlYwZFhBZ1BTQm1kVzVqZEdsdmJpaHZjSFJwYjI1ektTQjdYRzRnSUNBZ2FXWWdLQ0Z2Y0hScGIyNXpMbkJoY25ScFlXd3BJSHRjYmlBZ0lDQWdJR052Ym5SaGFXNWxjaTVvWld4d1pYSnpJRDBnWTI5dWRHRnBibVZ5TG0xbGNtZGxLRzl3ZEdsdmJuTXVhR1ZzY0dWeWN5d2daVzUyTG1obGJIQmxjbk1wTzF4dVhHNGdJQ0FnSUNCcFppQW9kR1Z0Y0d4aGRHVlRjR1ZqTG5WelpWQmhjblJwWVd3cElIdGNiaUFnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbkJoY25ScFlXeHpJRDBnWTI5dWRHRnBibVZ5TG0xbGNtZGxLRzl3ZEdsdmJuTXVjR0Z5ZEdsaGJITXNJR1Z1ZGk1d1lYSjBhV0ZzY3lrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCcFppQW9kR1Z0Y0d4aGRHVlRjR1ZqTG5WelpWQmhjblJwWVd3Z2ZId2dkR1Z0Y0d4aGRHVlRjR1ZqTG5WelpVUmxZMjl5WVhSdmNuTXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5TG1SbFkyOXlZWFJ2Y25NZ1BTQmpiMjUwWVdsdVpYSXViV1Z5WjJVb2IzQjBhVzl1Y3k1a1pXTnZjbUYwYjNKekxDQmxibll1WkdWamIzSmhkRzl5Y3lrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR052Ym5SaGFXNWxjaTVvWld4d1pYSnpJRDBnYjNCMGFXOXVjeTVvWld4d1pYSnpPMXh1SUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbkJoY25ScFlXeHpJRDBnYjNCMGFXOXVjeTV3WVhKMGFXRnNjenRjYmlBZ0lDQWdJR052Ym5SaGFXNWxjaTVrWldOdmNtRjBiM0p6SUQwZ2IzQjBhVzl1Y3k1a1pXTnZjbUYwYjNKek8xeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQnlaWFF1WDJOb2FXeGtJRDBnWm5WdVkzUnBiMjRvYVN3Z1pHRjBZU3dnWW14dlkydFFZWEpoYlhNc0lHUmxjSFJvY3lrZ2UxeHVJQ0FnSUdsbUlDaDBaVzF3YkdGMFpWTndaV011ZFhObFFteHZZMnRRWVhKaGJYTWdKaVlnSVdKc2IyTnJVR0Z5WVcxektTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWGhqWlhCMGFXOXVLQ2R0ZFhOMElIQmhjM01nWW14dlkyc2djR0Z5WVcxekp5azdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDBaVzF3YkdGMFpWTndaV011ZFhObFJHVndkR2h6SUNZbUlDRmtaWEIwYUhNcElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZlR05sY0hScGIyNG9KMjExYzNRZ2NHRnpjeUJ3WVhKbGJuUWdaR1Z3ZEdoekp5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhkeVlYQlFjbTluY21GdEtHTnZiblJoYVc1bGNpd2dhU3dnZEdWdGNHeGhkR1ZUY0dWalcybGRMQ0JrWVhSaExDQXdMQ0JpYkc5amExQmhjbUZ0Y3l3Z1pHVndkR2h6S1R0Y2JpQWdmVHRjYmlBZ2NtVjBkWEp1SUhKbGREdGNibjFjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUhkeVlYQlFjbTluY21GdEtHTnZiblJoYVc1bGNpd2dhU3dnWm00c0lHUmhkR0VzSUdSbFkyeGhjbVZrUW14dlkydFFZWEpoYlhNc0lHSnNiMk5yVUdGeVlXMXpMQ0JrWlhCMGFITXBJSHRjYmlBZ1puVnVZM1JwYjI0Z2NISnZaeWhqYjI1MFpYaDBMQ0J2Y0hScGIyNXpJRDBnZTMwcElIdGNiaUFnSUNCc1pYUWdZM1Z5Y21WdWRFUmxjSFJvY3lBOUlHUmxjSFJvY3p0Y2JpQWdJQ0JwWmlBb1pHVndkR2h6SUNZbUlHTnZiblJsZUhRZ0lUMDlJR1JsY0hSb2Mxc3dYU2tnZTF4dUlDQWdJQ0FnWTNWeWNtVnVkRVJsY0hSb2N5QTlJRnRqYjI1MFpYaDBYUzVqYjI1allYUW9aR1Z3ZEdoektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWm00b1kyOXVkR0ZwYm1WeUxGeHVJQ0FnSUNBZ0lDQmpiMjUwWlhoMExGeHVJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVhR1ZzY0dWeWN5d2dZMjl1ZEdGcGJtVnlMbkJoY25ScFlXeHpMRnh1SUNBZ0lDQWdJQ0J2Y0hScGIyNXpMbVJoZEdFZ2ZId2daR0YwWVN4Y2JpQWdJQ0FnSUNBZ1lteHZZMnRRWVhKaGJYTWdKaVlnVzI5d2RHbHZibk11WW14dlkydFFZWEpoYlhOZExtTnZibU5oZENoaWJHOWphMUJoY21GdGN5a3NYRzRnSUNBZ0lDQWdJR04xY25KbGJuUkVaWEIwYUhNcE8xeHVJQ0I5WEc1Y2JpQWdjSEp2WnlBOUlHVjRaV04xZEdWRVpXTnZjbUYwYjNKektHWnVMQ0J3Y205bkxDQmpiMjUwWVdsdVpYSXNJR1JsY0hSb2N5d2daR0YwWVN3Z1lteHZZMnRRWVhKaGJYTXBPMXh1WEc0Z0lIQnliMmN1Y0hKdlozSmhiU0E5SUdrN1hHNGdJSEJ5YjJjdVpHVndkR2dnUFNCa1pYQjBhSE1nUHlCa1pYQjBhSE11YkdWdVozUm9JRG9nTUR0Y2JpQWdjSEp2Wnk1aWJHOWphMUJoY21GdGN5QTlJR1JsWTJ4aGNtVmtRbXh2WTJ0UVlYSmhiWE1nZkh3Z01EdGNiaUFnY21WMGRYSnVJSEJ5YjJjN1hHNTlYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ5WlhOdmJIWmxVR0Z5ZEdsaGJDaHdZWEowYVdGc0xDQmpiMjUwWlhoMExDQnZjSFJwYjI1ektTQjdYRzRnSUdsbUlDZ2hjR0Z5ZEdsaGJDa2dlMXh1SUNBZ0lHbG1JQ2h2Y0hScGIyNXpMbTVoYldVZ1BUMDlJQ2RBY0dGeWRHbGhiQzFpYkc5amF5Y3BJSHRjYmlBZ0lDQWdJSEJoY25ScFlXd2dQU0J2Y0hScGIyNXpMbVJoZEdGYkozQmhjblJwWVd3dFlteHZZMnNuWFR0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjR0Z5ZEdsaGJDQTlJRzl3ZEdsdmJuTXVjR0Z5ZEdsaGJITmJiM0IwYVc5dWN5NXVZVzFsWFR0Y2JpQWdJQ0I5WEc0Z0lIMGdaV3h6WlNCcFppQW9JWEJoY25ScFlXd3VZMkZzYkNBbUppQWhiM0IwYVc5dWN5NXVZVzFsS1NCN1hHNGdJQ0FnTHk4Z1ZHaHBjeUJwY3lCaElHUjVibUZ0YVdNZ2NHRnlkR2xoYkNCMGFHRjBJSEpsZEhWeWJtVmtJR0VnYzNSeWFXNW5YRzRnSUNBZ2IzQjBhVzl1Y3k1dVlXMWxJRDBnY0dGeWRHbGhiRHRjYmlBZ0lDQndZWEowYVdGc0lEMGdiM0IwYVc5dWN5NXdZWEowYVdGc2MxdHdZWEowYVdGc1hUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z2NHRnlkR2xoYkR0Y2JuMWNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR2x1ZG05clpWQmhjblJwWVd3b2NHRnlkR2xoYkN3Z1kyOXVkR1Y0ZEN3Z2IzQjBhVzl1Y3lrZ2UxeHVJQ0J2Y0hScGIyNXpMbkJoY25ScFlXd2dQU0IwY25WbE8xeHVJQ0JwWmlBb2IzQjBhVzl1Y3k1cFpITXBJSHRjYmlBZ0lDQnZjSFJwYjI1ekxtUmhkR0V1WTI5dWRHVjRkRkJoZEdnZ1BTQnZjSFJwYjI1ekxtbGtjMXN3WFNCOGZDQnZjSFJwYjI1ekxtUmhkR0V1WTI5dWRHVjRkRkJoZEdnN1hHNGdJSDFjYmx4dUlDQnNaWFFnY0dGeWRHbGhiRUpzYjJOck8xeHVJQ0JwWmlBb2IzQjBhVzl1Y3k1bWJpQW1KaUJ2Y0hScGIyNXpMbVp1SUNFOVBTQnViMjl3S1NCN1hHNGdJQ0FnYjNCMGFXOXVjeTVrWVhSaElEMGdZM0psWVhSbFJuSmhiV1VvYjNCMGFXOXVjeTVrWVhSaEtUdGNiaUFnSUNCd1lYSjBhV0ZzUW14dlkyc2dQU0J2Y0hScGIyNXpMbVJoZEdGYkozQmhjblJwWVd3dFlteHZZMnNuWFNBOUlHOXdkR2x2Ym5NdVptNDdYRzVjYmlBZ0lDQnBaaUFvY0dGeWRHbGhiRUpzYjJOckxuQmhjblJwWVd4ektTQjdYRzRnSUNBZ0lDQnZjSFJwYjI1ekxuQmhjblJwWVd4eklEMGdWWFJwYkhNdVpYaDBaVzVrS0h0OUxDQnZjSFJwYjI1ekxuQmhjblJwWVd4ekxDQndZWEowYVdGc1FteHZZMnN1Y0dGeWRHbGhiSE1wTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaHdZWEowYVdGc0lEMDlQU0IxYm1SbFptbHVaV1FnSmlZZ2NHRnlkR2xoYkVKc2IyTnJLU0I3WEc0Z0lDQWdjR0Z5ZEdsaGJDQTlJSEJoY25ScFlXeENiRzlqYXp0Y2JpQWdmVnh1WEc0Z0lHbG1JQ2h3WVhKMGFXRnNJRDA5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYaGpaWEIwYVc5dUtDZFVhR1VnY0dGeWRHbGhiQ0FuSUNzZ2IzQjBhVzl1Y3k1dVlXMWxJQ3NnSnlCamIzVnNaQ0J1YjNRZ1ltVWdabTkxYm1RbktUdGNiaUFnZlNCbGJITmxJR2xtSUNod1lYSjBhV0ZzSUdsdWMzUmhibU5sYjJZZ1JuVnVZM1JwYjI0cElIdGNiaUFnSUNCeVpYUjFjbTRnY0dGeWRHbGhiQ2hqYjI1MFpYaDBMQ0J2Y0hScGIyNXpLVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnYm05dmNDZ3BJSHNnY21WMGRYSnVJQ2NuT3lCOVhHNWNibVoxYm1OMGFXOXVJR2x1YVhSRVlYUmhLR052Ym5SbGVIUXNJR1JoZEdFcElIdGNiaUFnYVdZZ0tDRmtZWFJoSUh4OElDRW9KM0p2YjNRbklHbHVJR1JoZEdFcEtTQjdYRzRnSUNBZ1pHRjBZU0E5SUdSaGRHRWdQeUJqY21WaGRHVkdjbUZ0WlNoa1lYUmhLU0E2SUh0OU8xeHVJQ0FnSUdSaGRHRXVjbTl2ZENBOUlHTnZiblJsZUhRN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUdSaGRHRTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHVjRaV04xZEdWRVpXTnZjbUYwYjNKektHWnVMQ0J3Y205bkxDQmpiMjUwWVdsdVpYSXNJR1JsY0hSb2N5d2daR0YwWVN3Z1lteHZZMnRRWVhKaGJYTXBJSHRjYmlBZ2FXWWdLR1p1TG1SbFkyOXlZWFJ2Y2lrZ2UxeHVJQ0FnSUd4bGRDQndjbTl3Y3lBOUlIdDlPMXh1SUNBZ0lIQnliMmNnUFNCbWJpNWtaV052Y21GMGIzSW9jSEp2Wnl3Z2NISnZjSE1zSUdOdmJuUmhhVzVsY2l3Z1pHVndkR2h6SUNZbUlHUmxjSFJvYzFzd1hTd2daR0YwWVN3Z1lteHZZMnRRWVhKaGJYTXNJR1JsY0hSb2N5azdYRzRnSUNBZ1ZYUnBiSE11WlhoMFpXNWtLSEJ5YjJjc0lIQnliM0J6S1R0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnY0hKdlp6dGNibjFjYmlKZGZRPT1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCA0XG4gKiovIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB2YXIgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocm9vdC5IYW5kbGViYXJzID09PSBIYW5kbGViYXJzKSB7XG4gICAgICByb290LkhhbmRsZWJhcnMgPSAkSGFuZGxlYmFycztcbiAgICB9XG4gICAgcmV0dXJuIEhhbmRsZWJhcnM7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyNXZMV052Ym1ac2FXTjBMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08zRkNRVU5sTEZWQlFWTXNWVUZCVlN4RlFVRkZPenRCUVVWc1F5eE5RVUZKTEVsQlFVa3NSMEZCUnl4UFFVRlBMRTFCUVUwc1MwRkJTeXhYUVVGWExFZEJRVWNzVFVGQlRTeEhRVUZITEUxQlFVMDdUVUZEZEVRc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTTdPMEZCUld4RExGbEJRVlVzUTBGQlF5eFZRVUZWTEVkQlFVY3NXVUZCVnp0QlFVTnFReXhSUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEV0QlFVc3NWVUZCVlN4RlFVRkZPMEZCUTJ4RExGVkJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NWMEZCVnl4RFFVRkRPMHRCUXk5Q08wRkJRMFFzVjBGQlR5eFZRVUZWTEVOQlFVTTdSMEZEYmtJc1EwRkJRenREUVVOSUlpd2labWxzWlNJNkltNXZMV052Ym1ac2FXTjBMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b2daMnh2WW1Gc0lIZHBibVJ2ZHlBcUwxeHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0b1NHRnVaR3hsWW1GeWN5a2dlMXh1SUNBdktpQnBjM1JoYm1KMWJDQnBaMjV2Y21VZ2JtVjRkQ0FxTDF4dUlDQnNaWFFnY205dmRDQTlJSFI1Y0dWdlppQm5iRzlpWVd3Z0lUMDlJQ2QxYm1SbFptbHVaV1FuSUQ4Z1oyeHZZbUZzSURvZ2QybHVaRzkzTEZ4dUlDQWdJQ0FnSkVoaGJtUnNaV0poY25NZ1BTQnliMjkwTGtoaGJtUnNaV0poY25NN1hHNGdJQzhxSUdsemRHRnVZblZzSUdsbmJtOXlaU0J1WlhoMElDb3ZYRzRnSUVoaGJtUnNaV0poY25NdWJtOURiMjVtYkdsamRDQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJR2xtSUNoeWIyOTBMa2hoYm1Sc1pXSmhjbk1nUFQwOUlFaGhibVJzWldKaGNuTXBJSHRjYmlBZ0lDQWdJSEp2YjNRdVNHRnVaR3hsWW1GeWN5QTlJQ1JJWVc1a2JHVmlZWEp6TzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1NHRnVaR3hsWW1GeWN6dGNiaUFnZlR0Y2JuMWNiaUpkZlE9PVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCA0XG4gKiovIiwiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgLy9KU1ggaGVyZSFcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwianVtYm90cm9uXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImp1bWJvdHJvbi1oZWFkaW5nXCI+SSBhbSByZWFjdCBjb21wb25lbnQ8L2gzPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvanMvbW9kcy9fcmVhY3RfY29tcG9uZW50LmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=