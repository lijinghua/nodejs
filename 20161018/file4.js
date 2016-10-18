var fs = require('fs');

//创建目录
fs.mkdir('./test',function(){
	console.log('目录创建完成');
})

//遍历目录
//files是数组，数组中包含的是目录下的文件名或目录名
// fs.readdir('./',function(err,files){

// });