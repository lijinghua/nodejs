// CommonJS规范规定的模块有下面几个内容
// require  加载本模块倚赖的外部模块
// exports  本模块对外导出的接口对象
// module   代表模块本身，常用的作用是导出一个其他对象

//http 模块是Node自带的支持http服务器的模块
var http = require('http');

//创建我们的服务器
var server = http.createServer(function(req,res){
	//req 请求
	//res 响应
	//给服务端发送响应
    res.writeHead(200,{'Content-Type':'text/plain'});
	res.write('hello world');
	res.end();
});

server.listen(5555);

console.log('服务器启动完成，监听端口 5555');
