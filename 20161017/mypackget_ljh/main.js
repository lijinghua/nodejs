var header = require('./header');
var person = require('./people');

//require('不写相对路径，要么加载系统系统，
//要么在node_modules目录下查找')

console.log(person.add(1,1));

exports.sayHello = function(){
	console.log('hello');
}

