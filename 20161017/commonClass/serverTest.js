// 解析客户端发来的请求，并把参数解析出来
var http = require('http');
var url  = require('url');
var querystring = require('querystring');

http.createServer(function(req,res){
	//解析发来的请求
	//http://127.0.0.1:6789/mysub?user=ljh&password=123#hash
	//http 是协议
	//127.0.0.1 服务器的地址
	//6789 服务端监听的端口
	// /mysub 路由
	// ?后是参数列表
	// #hash hash值
    console.log(req.url);

	console.log(url.parse(req.url));

	//pathname 请求的路由
	var pathname = url.parse(req.url).pathname;

	// 请求的参数字符串
	var params =  url.parse(req.url).query;

    //使用querystring模块解析请求字符串
    console.log(querystring.parse(params).user);
    console.log(querystring.parse(params).password);
    
	//必须对客户端进行响应，否则客户端一直等待
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('path:' + pathname + '参数:'+ params);
	res.end();

}).listen(6789);

console.log('服务器东东完毕，监听端口 6789');