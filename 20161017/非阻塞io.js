//fs 是node中 filesystem的模块，提供了读写文件的功能
var fs = require('fs');

//fs 读取文件提供给了2种方式，一种是阻塞的一种是非阻塞
//阻塞：文件没有读完，不执行下面的操作
//非阻塞：执行后面的操作，完成后通知我
var data = fs.readFileSync('first.js','utf-8');
console.log(data);

//非阻塞的方式，需要提供一个回调函数，供读取完后调用
fs.readFile('first.js','utf-8',function(err,data){
	if(err){
		console.log('读取文件有误');
	}else{
		console.log(data);
	}
})



