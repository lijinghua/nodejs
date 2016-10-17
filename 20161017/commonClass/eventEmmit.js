
//http ,fs等都是继承自EventEmmiter
//他提供了一种通过事件，来调用回调函数（事件处理程序）

var EventEmiter = require('events').EventEmitter;
var event = new EventEmiter();

//给事件test 绑定一个处理方法（回调函数）
//当test事件触发时，调用回调
event.on('test',function(){
	console.log('test 事件触发处理');
});

//触发一个test事件
setTimeout(function(){
	event.emit('test');
},1000);