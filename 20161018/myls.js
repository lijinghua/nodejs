var fs = require('fs');
//拿到用户输入的参数
//node mylist.js ./
var dir =  process.argv.slice(2)[0];

//files 包含所有的文件和目录
fs.readdir(dir,function(err,files){
	//异步方式遍历目录
	(function next(i,len){
		if(i < len){
			console.log(files[i]);
			next(i+1,len);
		}else{
			console.log('遍历完成');
		}
	})(0,files.length);
});
