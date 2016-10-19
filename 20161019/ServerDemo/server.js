var http = require('http');
var querystring = require('querystring');
var url = require('url');
// var util = require('util');


http.createServer(function(req,res){
	//获取路由  /getUserInfo
	var pathname = url.parse(req.url).pathname;
	if(pathname == '/getUserInfo'){
		//获取用户传递的参数
		var query = url.parse(req.url).query;

		var username = querystring.parse(query).username;
		var password = querystring.parse(query).password;

		console.log(username);
		console.log(password);

		if(username != '1601' && password != "123"){
			console.log('111');
			//Access-Control-Allow-Origin 允许跨域请求
			res.writeHead(200,{'Content-Type':'text/plain','Access-Control-Allow-Origin':"*"});
			var result = {
				"errorCode":'100',
				"message":"用户名密码错误",
				"friends":[]
			};
			// util.inspect  把一个对象转成字符串
			res.write(JSON.stringify(result));
			res.end();
			return;
		}else{
			console.log('222222');
			var result = {
				"errorCode":"0",
				"message":"ok",
				"friends":[
					{
						"name":"xiaoming",
						"age":20
					},
					{
						"name":"xiaowang",
						"age":30
					}
				]
			};

			res.writeHead(200,{'Content-Type':'text/plain','Access-Control-Allow-Origin':"*"});
			//JSON.stringify 把一个对象转成json字符串
			//util.inspect() 把一个对象转成字符串，
			res.write(JSON.stringify(result));
			res.end();
		}
	}

}).listen(8888);

console.log("服务启动完成，监听端口 8888");
