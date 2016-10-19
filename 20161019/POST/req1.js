var http = require('http');

var option = {
	protocol:"http:",
	hostname:"127.0.0.1",
	port:3000,
	method:"post"
}

// 发送请求到服务端
var request  = http.request(option,function(res){

});

//请求体中的内容
request.write('1helloworldhelloworldhelloworldhelloworld1');
//发送结束
request.end();