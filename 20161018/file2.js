var fs = require('fs');

//如果需要操作其中的一部分fs.read操作,
//底层使用的是unix系统对文件的操作

//fd 文件描述符，数字，用来标识打开的文件
//fs.open  打开文件
//fs.read/fs.write  操作文件
//fs.close()   关闭文件

//参数1 文件名
//参数2 flag 标志   
         // r 读取文件
         // r+ 读写文件，文件不存在报错
         // w 写文件，如果文件不存在则创建，如果文件存在，把内容清除
         // a 以追加的方式写文件
//回调中的fd 是打开的文件描述符，代表当前的打开的文件
var buf = new Buffer(10);
fs.open('input.txt','r',function(err,fd){
	//fd 
	//buf 写入的缓冲区
	//0  从缓冲区的哪个位置开始
	//10 读取多少
	//0  从文件的哪个位置开始读取
	//回调： bytes 实际读了多少
	fs.read(fd,buf,0,10,0,function(err,bytes,buffer){
		console.log(buf.toString('utf8'));
		fs.close(fd);
	})
});


//要获取文件的属性譬如是否为目录还是文件，以及文件的大小和创建时间
// 使用 fs.stat 来获取其属性
fs.stat('input.txt',function(err,stat){
	//文件大小
	var filesize = stat.size;
	//是否为文件目录
	var isDir = stat.isDirectory();
	var isFile = stat.isFile();

	console.log(filesize);
	console.log(isDir);
	console.log(isFile);

	console.log(stat);
});
