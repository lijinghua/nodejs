var fs = require('fs');

// 把原有的内容清除，然后写入内容
// fs.writeFileSync('aabccee','input.txt');

// fs.writeFile('input.txt','xxx1122',function(err){
// 	fs.readFile('input.txt','utf8',function(err,data){
// 		console.log(data);
// 	});
// })

// 写入一部分要以追加的方式打开 a
fs.open('input.txt','a',function(err,fd){
	//计算当前文件的大小
	var filesize = 0;
	fs.stat('input.txt',function(err,stat){
		filesize = stat.size;

		//把写入内容放入缓冲区
		var buff = new Buffer('testtesttest');
		fs.write(fd,buff,0,buff.length,filesize,function(err,byte,buffer){
			if(err){
				console.log('写入有误');
				fs.close(fd);
				return;
			}
			fs.close(fd);
			console.log('写入完成');
		})
	})
})