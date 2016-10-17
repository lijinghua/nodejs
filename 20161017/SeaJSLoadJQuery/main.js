// main.js 当用seajs加载时，必须遵循cmd规范
define(function(require,exports,module){
	// CMD 强调的延迟加载，需要时才加载模块
	var jquery = require('jquery-3.1.1.min.js');
	exports.jquery = jquery;
});