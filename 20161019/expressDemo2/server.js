var express = require('express');
var app = new express();

// 中间件就是一个函数，
//req 是请求中的对象
//res 是响应对象
//next 是一个函数，决定是否把处理交给下一个中间件
//如果调用next(),就会把处理交个下一个中间件
//如果不调用，后续所有的中间件都不会调用

//中间件所在位置很重要

//使用中间件有
//路由不写中间件对所有的请求都有效
//有路由，中间件只对该路由起作用

//app.use("路由",中间件) 
//app.get("路由",中间件)
//app.post("路由",中间件)

app.use('/middleware',function(req,res,next){
	console.log("第一阶段处理");
	// res.send();
	//交给下一个中间件来处理
	next();
});

//
app.get('/middleware',function(req,res,next){
	console.log('第二阶段处理');

	//响应客户端的方式
    //1: res.send();      发送一个内容
    //2: res.sendFile();  发送一个文件
    //3: res.render() ;   渲染模板然后返回
    //4: res.end();
	res.send('中间件');
});

// /user/xxx
app.get("/user/:id",function(req,res,next){
	req.myname = '1601';
	next();
});

app.get('/user/:id',function(req,res,next){
	console.log(req.myname);
	next();
});

//all  对所有的请求方式 都有效
// get  post put  head delete....
app.all("*",function(req,res,next){
	console.log('处理结束');
	res.end();
})

app.listen(3456);