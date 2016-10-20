var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

   // <!--
   //    <%= message %> 值替换，不对标签进行解析
   //    <%- message %> 值替换，解析html标签
   //    <% code %>     code 源代码，for if else
   //    <% include other.ejs %> 把其他的ejs文件导入到当前位置
   //    -->
   //  <!-- <%= message %> 把message值进行替换 -->
   //   


router.get('/ejs',function(req,res,next){
	//使用传入的对象，渲染模板，myejs,然后把
	//渲染后的结构返回给客户端
	//myejs 模板的名称
	//对象中包含，渲染模板需要的信息
	res.render('myejs',{
		message:"<h1>这是我的测试</h1>",
		friends:['小王','小马','小宋']
	});
});

router.get('/ejs2',function(req,res,next){
	res.render('mytest',{
		title:"MyExpress"
	});
});

// 路由路径支持正则表达式
// . 任意空白
// ? 匹配前面的0个或1个字符
// + 匹配前面的1个或多个
// * 匹配前面的0个或多个
// [abc] 匹配abc 中的一个
// [^abc] 不匹配abc
// [0-9] == \d  匹配0~9数字
// [a-zA-Z] == \w 匹配26个字母
// {m,n} 匹配前面的内容 m次到n次
// (a\+b){100} 匹配100次a+b
// ^a 以a开头
// $b 以b结尾

router.get(/^\/ljh.*/,function(req,res,next){
	res.render('mytest',{
		title:"MyExpress"
	});
});

module.exports = router;
