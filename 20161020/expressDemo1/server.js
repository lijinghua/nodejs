var express = require('express');
var app = new express();
app.listen(3456);

//一个挂载点（路由）可以有多个中间件
// app.use('/test',function(req,res,next){
// 	console.log('第一步处理');
// 	// res.send res.sendFile res.render 内部都会调用响应结束的操作res.end()
// 	//响应结束后，不能再次响应
// 	// res.send('1');
// 	next('route');
// },function(req,res,next){
// 	console.log('第二步处理');
// 	next();
// });

app.get('/test',function(req,res,next){
	console.log('第一步处理');
	//next('route') 不是跳转到下一个中间件，而是调到下一个路由
	//route 只对 HTTP 的method(get post,...)有效，对use安插的中间件无效
	next('route');
},function(req,res,next){
	console.log('第二步处理');
	next();
});

app.get('/test',function(req,res,next){
	console.log('第三步处理');
	res.send('3');
});

//------------------------------------------------------
function firstProcess(req,res,next){
	console.log('第一步处理');
	next();
}

function secondProcess(req,res,next){
	console.log('第二步处理');
    //一旦处理有误可以把处理交给错误处理中间件
    //后续的所有的中间件都不会调用
    var error = new Error('error');
    next(error);
}

function thirdProcess(req,res,next){
	console.log('第三步处理');
	res.send('over');
}

app.get('/test2',[firstProcess,secondProcess,thirdProcess]);

//使用错误处理中间件，使用app.use 来安插
app.use('/test2',function(err,req,res,next){
	console.log('第一步错误处理');
	//交给下一个错误处理中间件
	next(err);
})

app.use('/test2',function(err,req,res,next){
	console.log('第二步错误处理');
	//交给下一个错误处理中间件
	res.send(err);
})