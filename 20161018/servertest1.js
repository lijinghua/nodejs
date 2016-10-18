var http = require('http');

var port = process.env.PORT;
var server = http.createServer(function(req,res){
	res.end();
}); 

server.listen(port);

console.log('服务器已启动，监听端口 ' + port);
