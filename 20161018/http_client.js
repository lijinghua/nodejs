//使用http模块来作为客户端的请求
var http = require('http');

//http.request 请求服务器
var option = {
	protocol:"http:",
	hostname:'127.0.0.1',
	port:7777,
	method:'get',
	path:'/',
	headers:{
		//添加http的头字段
	}
};

//调用http的request 请求 服务器，
//服务器响应后调用回调函数，res 参数是服务器的响应
var request = http.request(option,function(res){
	var buffer = [];

	//每当数据到来都有一个data事件，on 中指定事件的处理函数
	//chunk 是本次到来的数据
	res.on('data',function(chunk){
		buffer.push(chunk);
	});

	res.on('end',function(){
		console.log(Buffer.concat(buffer).toString('utf8'));
	})
});
//发送请求结束
request.end();
