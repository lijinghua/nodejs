var express = require('express');
var path    = require('path');

// 1:导入body-parser
var bodyParser = require('body-parser');

//在构造函数中帮我们生成服务器
var app = new express();

//2:加载使用body-parser
// parse application/x-www-form-urlencoded
//处理form表单用的设置
app.use(bodyParser.urlencoded({ extended: false }))


//设置一些路由
//app.get  处理的是get 请求
// / 首页
app.get('/',function(req,res){
	res.send('首页');
});

app.get('/userinfo',function(req,res){
	console.log(req.query.username);
	console.log(req.query.password);

	res.send('用户信息'+req.query.username+ " "+ req.query.password);
});

//app.post 处理http 的post方式
app.post('/userinfo',function(req,res){
    //3:使用body-parser分析后的结果
    console.log(req.body.username);
    console.log(req.body.password);

    res.send('用户POST请求' + req.body.username + " " + req.body.password);
});

// 处理http的get 请求，理由是/getFile
//返回一个文件
app.get('/getFile',function(req,res){
	var filepath = path.join(__dirname,'test.html');
	res.sendFile(filepath);
});

app.listen(3456);
