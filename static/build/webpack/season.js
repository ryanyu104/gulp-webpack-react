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
/***/ function(module, exports) {

	'use strict';
	
	var digitUppercase = function digitUppercase(n) {
	    var fraction = ['角', '分'];
	    var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
	    var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
	    var head = n < 0 ? '欠' : '';
	    n = Math.abs(n);
	    var s = '';
	    for (var i = 0; i < fraction.length; i++) {
	        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
	    }
	    s = s || '整';
	    n = Math.floor(n);
	    for (var i = 0; i < unit[0].length && n > 0; i++) {
	        var p = '';
	        for (var j = 0; j < unit[1].length && n > 0; j++) {
	            p = digit[n % 10] + unit[1][j] + p;
	            n = Math.floor(n / 10);
	        }
	        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
	    }
	    return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
	};
	
	console.log(digitUppercase(7682.01)); //柒仟陆佰捌拾贰元壹分
	console.log(digitUppercase(7682)); //柒仟陆佰捌拾贰元整
	console.log(digitUppercase(951434677682.00)); //玖仟伍佰壹拾肆亿叁仟肆佰陆拾柒万柒仟陆佰捌拾贰元整

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWI1YzlkYzQ1MmJkNmRjNDI1MTM/NGYyOSIsIndlYnBhY2s6Ly8vLi9hcHAvanMvc2Vhc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsS0FBSSxjQUFjLEdBQUcsU0FBakIsY0FBYyxDQUFZLENBQUMsRUFBRTtBQUM3QixTQUFJLFFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMxQixTQUFJLEtBQUssR0FBRyxDQUNSLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ3ZCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQzFCLENBQUM7QUFDRixTQUFJLElBQUksR0FBRyxDQUNQLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDZixDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUN0QixDQUFDO0FBQ0YsU0FBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQzVCLE1BQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLFNBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNYLFVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3RDLFVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztNQUMzRjtBQUNELE1BQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDO0FBQ2IsTUFBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsVUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM5QyxhQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDWCxjQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzlDLGNBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsY0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1VBQzFCO0FBQ0QsVUFBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNwRTtBQUNELFlBQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUNsQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUN0QixPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0VBQzlCLENBQUM7O0FBRUYsUUFBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNyQyxRQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLFFBQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsNEIiLCJmaWxlIjoic2Vhc29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAxYjVjOWRjNDUyYmQ2ZGM0MjUxM1xuICoqLyIsInZhciBkaWdpdFVwcGVyY2FzZSA9IGZ1bmN0aW9uKG4pIHtcbiAgICB2YXIgZnJhY3Rpb24gPSBbJ+inkicsICfliIYnXTtcbiAgICB2YXIgZGlnaXQgPSBbXG4gICAgICAgICfpm7YnLCAn5aO5JywgJ+i0sCcsICflj4EnLCAn6IKGJyxcbiAgICAgICAgJ+S8jScsICfpmYYnLCAn5p+SJywgJ+aNjCcsICfnjpYnXG4gICAgXTtcbiAgICB2YXIgdW5pdCA9IFtcbiAgICAgICAgWyflhYMnLCAn5LiHJywgJ+S6vyddLFxuICAgICAgICBbJycsICfmi74nLCAn5L2wJywgJ+S7nyddXG4gICAgXTtcbiAgICB2YXIgaGVhZCA9IG4gPCAwID8gJ+asoCcgOiAnJztcbiAgICBuID0gTWF0aC5hYnMobik7XG4gICAgdmFyIHMgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyYWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHMgKz0gKGRpZ2l0W01hdGguZmxvb3IobiAqIDEwICogTWF0aC5wb3coMTAsIGkpKSAlIDEwXSArIGZyYWN0aW9uW2ldKS5yZXBsYWNlKC/pm7YuLywgJycpO1xuICAgIH1cbiAgICBzID0gcyB8fCAn5pW0JztcbiAgICBuID0gTWF0aC5mbG9vcihuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVuaXRbMF0ubGVuZ3RoICYmIG4gPiAwOyBpKyspIHtcbiAgICAgICAgdmFyIHAgPSAnJztcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB1bml0WzFdLmxlbmd0aCAmJiBuID4gMDsgaisrKSB7XG4gICAgICAgICAgICBwID0gZGlnaXRbbiAlIDEwXSArIHVuaXRbMV1bal0gKyBwO1xuICAgICAgICAgICAgbiA9IE1hdGguZmxvb3IobiAvIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBzID0gcC5yZXBsYWNlKC8o6Zu2Likq6Zu2JC8sICcnKS5yZXBsYWNlKC9eJC8sICfpm7YnKSArIHVuaXRbMF1baV0gKyBzO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZCArIHMucmVwbGFjZSgvKOmbti4pKumbtuWFgy8sICflhYMnKVxuICAgICAgICAucmVwbGFjZSgvKOmbti4pKy9nLCAn6Zu2JylcbiAgICAgICAgLnJlcGxhY2UoL17mlbQkLywgJ+mbtuWFg+aVtCcpO1xufTtcblxuY29uc29sZS5sb2coZGlnaXRVcHBlcmNhc2UoNzY4Mi4wMSkpOyAvL+afkuS7n+mZhuS9sOaNjOaLvui0sOWFg+WjueWIhlxuY29uc29sZS5sb2coZGlnaXRVcHBlcmNhc2UoNzY4MikpOyAgLy/mn5Lku5/pmYbkvbDmjYzmi77otLDlhYPmlbRcbmNvbnNvbGUubG9nKGRpZ2l0VXBwZXJjYXNlKDk1MTQzNDY3NzY4Mi4wMCkpOyAvL+eOluS7n+S8jeS9sOWjueaLvuiChuS6v+WPgeS7n+iChuS9sOmZhuaLvuafkuS4h+afkuS7n+mZhuS9sOaNjOaLvui0sOWFg+aVtFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvanMvc2Vhc29uLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==