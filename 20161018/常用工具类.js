//path
//url
//querystring
//fs
//http

//url parse format  resolve
var url = require('url');

// 解析请求参数列表
var qs  = require('querystring');

//对路径进行操作的模块
var path = require('path');

//url parse 解析完整的url
//pathname: 路由
//query:客户端段提交的参数
console.log(url.parse('http://127.0.0.1:8888/myroute?user=test&passwor=123#myhash'));
var  urlObject = url.parse('http://127.0.0.1:8888/myroute?user=test&password=123#myhash');

var querystring = urlObject.query;
var qsObject = qs.parse(querystring);
console.log(qsObject.user);
console.log(qsObject.password);

//可有使用url.format 组成一个完整的url
var option = {
	protocol:'http',
	hostname:'127.0.0.1',
	port:'3456',
	pathname:'/mytest',
};
console.log(url.format(option));

//url.resolve 可有对路径进行拼接
var newUrl = url.resolve('http://localhost:567/foo/xyz/bar','../bbb');
console.log(newUrl);

// __dirname 全局变量，代表当前文件所在的目录
//__filename 全局便令，代表当前的文件名
console.log(__dirname);
console.log(__filename);

//setTimeout
//setInterval

// 合并路径
console.log(path.join(__dirname,'mytest.js'));

//获取文件的后缀名
console.log(path.extname('foo/mytest.txt'));
console.log(path.extname('foo/mytest.js'));

// process 代表当前的进程,
//process.argv  传递个当前应用程序的参数列表，数组
//第一个值 是node的程序本身
//第二值  js 文件文件本身
//以后为用户传递的参数，譬如配置文件等
// console.log(process.argv);
// console.log(process.argv.slice(2));

//可以获取用户设置的环境变量
console.log(process.env.PORT);



