var http = require('http');

http.createServer(function(req,res){
	//如何判断是get请求还是post请求,req.method
	console.log(req.method);
    if( req.method.toUpperCase() == 'POST'){
    	//要获取客户端的内容
    	var bufArray = [];
	    req.on('data',function(chunk){
	    	bufArray.push(chunk);
	    });
	    req.on('end',function(){
	    	var body = Buffer.concat(bufArray).toString('utf8');
	    	console.log(body);
              
             //给客户端一个响应，否则客户端一直等待
	    	res.end();
	    });
    }
}).listen(3000);