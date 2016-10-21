var express = require('express');

var User = require("../Model/User.js")
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { 
  	title: '首页' ,
  	user:req.session.user
  });
});

//当访问登录界面时处理
router.get('/login',function(req,res,next){
	res.render('login',{
		title:"登录",
		user:req.session.user
	});
})

//当用户点击登录时处理
router.post('/login',function(req,res,next){
	var username = req.body.username;
	var password = req.body.password;

	User.get(username,function(err,userlist){
		if(err){
			return res.redirect('/login');
		}else{
			for(var i = 0; i < userlist.length;i++ ){
				var user = userlist[i];
				if(user.password == password ){
					console.log('登录成功');
					//记录登录的用户到session中
					req.session.user = user;
					return res.redirect('/home');
				}
			}

			//
			console.log('用户名或密码错误');
			return res.redirect('/login');
		}
	});
});

// get 是用户访问注册页面时的响应
router.get('/reg',function(req,res,next){
	res.render('reg',{
		title:"注册",
		user:req.session.user
	});
});

//当用户在注册页面点击注册按钮时服务端的处理
router.post('/reg',function(req,res,next){

	// get 请求从 req.query中获取用户提交的信息

// 读取用户信息，并把信息写入mongodb
// 同时在session 中保存用户信息
   var username = req.body['username'];
   var password = req.body.password;
   var passwordRepeate = req.body['password-repeate'];
   var email = req.body['email'];
   //生成User对象
   var newUser = new User(username,password,email);
   newUser.save(function(err){
   	 if(err){
   	 	console.log('保存出错');
   	 	return res.redirect('/reg');
   	 }else{
   	 	console.log('保存OK');
   	 	// 保存信息到session 中
   	 	req.session.user = newUser;
   	 	return res.redirect('/home');
   	 }
   });
})

router.get('/post',function(req,res,next){
	console.log('处理访问发表博客的网页');
	//.....
	res.end();
});

router.get('/logout',function(req,res,next){
	req.session.user = null;
	res.redirect('/home');
})

module.exports = router;
