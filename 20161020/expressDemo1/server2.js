var express = require('express');
// 引入route.js
var router  = require('./route.js');

var app = new express();
app.listen(3456);

// app.get('/bird',function);
// app.get('/bird/about',funcio);

// 把所有访问/bird 的处理交给router
// /bird/
// /bird/about 
app.use('/bird',router);


