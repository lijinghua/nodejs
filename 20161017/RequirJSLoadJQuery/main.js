// requireJS 加载的模块遵循AMD规范，写法倚赖前置，也就是说
//本模块需要的倚赖的模块必须提前加载
// AMD 第一个参数为数组，数组中是需要加载的倚赖项
// 函数中的参数顺序和倚赖项的顺序一致
// 每加载一个模块，函数中就对一个导出对象
define(['./lib/jquery-3.1.1.min.js','exports'],function (jquery,exports) {
	// body...
	// return jquery;
	exports.jquery = jquery;
});

//AMD写法
// define(['a','b','c'],function(a,b,c){

// });

// //CMD
// define(function(require,exports,module){
// 	//......
// 	var a = require('a');
// 	// use a

// 	//......

// 	var b = require('b');
// 	// use b .....
// })