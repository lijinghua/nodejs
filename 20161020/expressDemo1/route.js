var express = require('express');

//获取express的路由组件
//在该路由对象上，安插中间件
var router = express.Router();

//安插 use  get post
router.get('/',function(req,res,next){
	console.log('get /的处理');
	res.end();
});

router.use('/about',function(req,res,next){
	console.log('get /about 的处理');
	res.end();
});

//把router 对象导出
module.exports = router;