
//require  在需要外部模块的时引入

function sayHello(){
	console.log('hello 1601');
}


//使用exports关键字 导出函数
//exports 代表本模块的导出对象，给该对象增加属性
//外部模块即可访问增加的属性
//exports.func = sayHello;
//exports.name = 'name test';

var myobj = {
	name:'lijh',
	age:29,
	myfunc:function(){
		console.log('secondModule 函数');
	}
};

//使用module 导出普通对象
module.exports = myobj;

