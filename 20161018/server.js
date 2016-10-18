//node http 模块可以方便的生成一个服务器
//http 模块不仅可以作为服务端，也可以作为客户端


// http://127.0.0.1:6789/file1.js
// http://127.0.0.1:6789/file2.js
// http://127.0.0.1:6789/file3.js
// http://127.0.0.1:6789/file4.js

var http = require('http');
var fs   = require('fs');
var url  = require('url');
var path = require('path');

//1:生成服务器,并监听
//2:服务端的模型：不断收到请求，不断的响应，靠事件机制来驱动
http.createServer(function(req,res){
	//拿到路由
	var pathname = url.parse(req.url).pathname;

	if( pathname == '/favicon.ico'){
		// /favicon.ico 浏览器发出的
		res.end();
		return;
	}

	//根据文件名，找到文件所在的路径
    var filepath = path.join(__dirname,pathname);
    //读取文件
    fs.readFile(filepath,function(err,data){
    	if(err){
    		res.writeHead(500,{'Content-Type':'text/plain'});
    		res.write(err);
    		res.end();
    		return;
     }

    	// 把内容返回到客户端
    	//writeHead 响应头
    	//Content-Type 响应体内容类型

    	//text/html    对应的是html文件
    	//text/plain   纯文本
    	//image/jpg    jpg格式的文件内容
    	//applicaiton/x-javascript    javascript 代码
    	//application/octet-stream    二进制文件
    	res.writeHead(200,{'Content-Type':'application/x-javascript'});
    
        //写入响应体
        res.write(data.toString('utf-8'));

        //结束响应
        res.end();
    })

}).listen(6789);

console.log('服务端已启动,监听端口 6789');
