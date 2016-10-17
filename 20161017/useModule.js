
//使用secondModule.js 文件
//require 引入外部模块，后缀默认为js，该模块自动加载
//使用变量接受导出的对象

var secondModule = require('./secondModule');

//使用exports导出的对象
// console.log(secondModule.func());
// console.log(secondModule.name);

//使用module.exports 导出的对象，secondModule代表导出的对象
console.log(secondModule.name);
console.log(secondModule.age);
console.log(secondModule.myfunc());