var fs = require('fs');
//操作文件有阻塞和非阻塞2种方式
//阻塞  readFileSync writeFieSync
//非阻塞 函数名中不带sync

//返回值为读取的文件内容
var data = fs.readFileSync('input.txt','utf8');
console.log(data);

//非阻塞，需要提供回调函数，当读取数据完成时调用回调函数
//err
//data
fs.readFile('input.txt',function(err,data){
	if(err){
		console.log('读取文件有误');
		return;
	}
	console.log(data);
});

//使用流进行读取,适合读取大的文件，每次读取一部分
var buffer = [];
var readStream = fs.createReadStream('input.txt');

//依靠事件（EventEmitter）的方式来读取文件
//'data'  数据来了
//'error' 有误
//'end'   读取完成
readStream.on('data',function(chunk){
	buffer.push(chunk);
})

readStream.on('error',function(err){
	console.log('文件有误');
})

readStream.on('end',function(){
	console.log( Buffer.concat(buffer).toString('utf8') );
});





