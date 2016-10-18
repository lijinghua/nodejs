var http = require('http');
var fs  = require('fs');
var url = require('url');
var qs  = require('querystring');
var path = require('path');

// 路由规则

//  / 根目录   返回index.html
//  /userinfo  返回 用户填写的信息
//  /favicon.ico 忽略不处理

var handle = {};
handle['/'] = homepage;
handle['/userinfo'] = useinfo;
handle['/favicon.ico'] = favicon;


function homepage(req,res){
	//返回index.html给客户端
	var filepath = path.join(__dirname,'index.html');
	fs.readFile(filepath,function(err,data){
		if(err){
			res.writeHead(500,{'Content-Type':'text/plain'});
			res.write(err);
			res.end();
			return;
		}

		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(data.toString('utf-8'));
		res.end();
	})
}

function useinfo(req,res){
	//把用户填写的信息读取出来，并返回给客户端
	//user=abc&password=123&age=30
	var query = url.parse(req.url).query;
	//使用querystring 解析请求的参数
	//.user,.age .password 一定和form表单中的name值保持一致
	var user = qs.parse(query).user;
	var password = qs.parse(query).password;
	var age = qs.parse(query).age;

	//
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write('你填写的信息是: 用户名: ' + user + '密码:' + password + '年龄: '+ age);
	res.end();

}

function favicon(req,res){
	res.end();
}


http.createServer(function(req,res){
  var pathname = url.parse(req.url).pathname;
  //交给handle处理
  handle[pathname](req,res);
}).listen(7777);