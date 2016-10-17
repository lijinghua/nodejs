//使用包时使用require 加载包
//实际加载的是 包的入口文件，也就是package.json中的main字段指定的模块

var package = require('../mypackget_ljh/');
package.sayHello();
