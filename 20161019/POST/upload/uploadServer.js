var http = require('http');
var fs   = require('fs');
var url  = require('url');
var path = require('path');

//处理文件上传的模块
var formidable = require('formidable');

//路由处理
var handle = {};
handle['/'] = homepage;
handle['/favicon.ico'] = fav;
handle['/upload'] = upload;
handle['/show'] = show;

function homepage(req,res){
	//发送uploadfile.html 到客户端
	var filepath = path.join(__dirname,'uploadfile.html');
	fs.readFile(filepath,'utf8',function(err,data){
		if(err){
			res.write("首页错误");
			res.end();
			return;
		}

		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(data);
		res.end();
	});
}

function fav(req,res){
	res.end();
}

// 处理上传文件
function upload(req,res){
  var form = new formidable.IncomingForm();

  form.uploadDir = './';

  //parse 分析请求头和请求体中的内容，上传文件的内容在请求体中
  //当文件上传完毕，调用回调函数，
  //errr
  //fields  表单数据
  //files   上传的文件，会把上传的文件保存到临时路径下

   form.parse(req, function(err, fields, files){
  	//文件存放的临时地址
    console.log(files.upload.path);
  	// 修改文件的名称和路径
  	fs.rename(files.upload.path,path.join(__dirname,"upload.jpg"));
  	// res.writeHead(200,{'Content-Type':"text/plain"});
  	// res.write('文件上传完成');
  	// res.end();

  	res.writeHead(200,{'Content-Type':'text/html'});
  	// 客户端为了显示图片，会加载img src路径
  	//会导致以http://localhost:6789/show 方式访问图片
  	res.write("<img src='/show'>");
  	res.end();
  });
}

// 读取上传的图片把内容发送到客户端
function show(req,res){
	//拼接获取图片在服务端的路径
	var filepath = path.join(__dirname,'upload.jpg');
	fs.readFile(filepath,function(err,data){
		//  设置响应体的内容类型 为 image/jpeg
		res.writeHead(200,{'Content-Type':'image/jpeg'});

		//写响应体
		res.write(data);

		//响应结束
		res.end();
	});
}

http.createServer(function(req,res){
	//获取路由交给路由函数处理
	//对象： 
	//pathname   对应的是路由
	//query      get 用户的参数列表 字符串
	console.log(url.parse(req.url));

	var pathname = url.parse(req.url).pathname;
	console.log(pathname);
	handle[pathname](req,res);
}).listen(6789);

console.log('服务器启动完成,监听端口6789');

