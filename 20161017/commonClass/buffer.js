//Node 使用Buffer 类来操作二进制数据
//生成
//写入
//转换为字符串

//生成一个buffer 包含10个字节空间
var buffer = new Buffer(10);

//生成buffer，并使用数据 10,20，30填充buffer
//new Buffer([10,20,30]);

//生成时指定内容
//new Buffer('buffer的内容','utf-8');

//write
//concat
//slice
//toString

//string  
//offset
//length
//encoding 
buffer.write('abc',0,3,'utf8');
// toString 把Buffer的内容转换为string
console.log(buffer.toString('utf8'));

//concat 不是对象的方法，是类的方法
var buf1 = new Buffer('hello','utf8');
var buf2 = new Buffer('world','utf8');

var buf3 = Buffer.concat([buf1,buf2]);
console.log(buf3.toString());

//slice 取buffer中的一部分
//start,end 都是位置，注意：buf4和buf3 公用一个空间
//如果不想公用空间，调用copy操作

var buf4 = buf3.slice(2,6);

//类似数组可以用下标访问和修改单个内容
buf4[0] = 0x65;

console.log(buf4.toString());
console.log(buf3.toString());

//copy 把5的内容copy到buf6中
var buf5 = new Buffer('abc');
var buf6 = new Buffer(10);
buf5.copy(buf6);


