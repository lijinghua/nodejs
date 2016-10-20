// HTTP 本身是无状态，一次请求后下次请求和上次的没有任何关系
// 有些web app 需要记录访问状态，
//为了解决HTTP 无状态的情况，推出2种技术
//cookie:保存在客户端的数据，
  //浏览器检测如果有cookie，自动把cookie信息放到请求头中，
  //用于标识当前的用户,

//session 保存在服务器上的数据

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

//分析HTTP 请求头中的 cookie 并把信息放到req.cookies
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// 引入express-session
var session = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
// 使用session中间件

// 在HTTP 的响应头中如果有set-cookie,就是告诉浏览器保存服务端
// 设置的信息到cookie中
//下一次访问网页是，浏览器查看是否有保存的cookie信息，如果有浏览器自动
//在请求投中包含cookies字段，就把客户端的保存的信息发送到服务器
//交给服务器验证
app.use(session({
  secret: 'expressDemo',
  name:"testapp",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge:24*60*60*1000 }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
