var mongoose = require('mongoose');

// 定义数据库中每个记录的字段类型，以及包含哪些字段
var UserSchema = new mongoose.Schema({
	name:String,
	password:String,
	email:String
});


//2：模型类
var UserModel = mongoose.model("User",UserSchema);

//------------------------------------------------------
// 用户类
function User(name,password,email){
	this.name = name;
	this.password = password;
	this.email = email;
}

//使用该类来操作数据库，CRUD （增删改查）
User.prototype.save = function(callback){
	//3生成模型对象来保存数据
	var newUser = new UserModel({
		name:this.name,
		password:this.password,
		email:this.email
	});

	newUser.save(function(err){
		if(err){
			callback(err);
		}else{
			callback(null);
		}
	});
}

// 类的方法，调用时直接使用类名来调用
// eg. User.get('ljh',function(err,user){});

User.get = function(name,callback){
	UserModel.find({"name":name},function(err,userlist){
		if(err){
			callback(err,null);
		}else{
			callback(null,userlist);
		}
	});
} 

//------------------------------------------------------

//如何使用mongoose 来做操作
//1: 定义Scheme ,集合的结构
//2: 使用Shcema，来生成模型
//3: 生成模型对象来操作数据库

//1:
// var UserSchema = new mongoose.Schema({
// 	name:String,
// 	password:String,
// 	email:String
// });


// //2：模型类
// var UserModel = mongoose.model("User",UserSchema);

// //3:模型对象
// var newUser = new UserModel({
// 	name:'ljh',
// 	password:'123',
// 	email:'test@.test.com'
// });

//保存
// newUser.save(function(err){
// 	if(err){

// 	}else{

// 	}
// })

//查找数据 使用模型类来查找
// UserModel.find({"name":"ljh"},function(err,users){

// });

//删除使用模型类
// UserModel.remove({"name":"ljh"},function(err){

// })

//更新的写法
//multi:由于默认只跟新满足条件的第一条记录，true：满足查询条件全部跟新
//upsert:没有满足查询条件的记录时，是否插入该记录
// UserModel.update({"name":"ljh"},
// 	{$set:{"password":"abc"}},
// 	{"multi":true,"upsert":false},
// 	function(err){

// 	}
// 	);

// 导出User，外部就可以使用User
module.exports = User;


