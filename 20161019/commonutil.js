var url = require('url');
var querystring = require('querystring');
var path = require('path');

var requestUrl = 'http://localhost:8888/start?foo=bar&hello=world';


console.log(url.parse(requestUrl));

var urlObject = url.parse(requestUrl);
// /start
var route = urlObject.pathname;

// foo=bar&hello=world'
var myQuery = urlObject.query;

//使用querystring 解析字符串

console.log(querystring.parse(myQuery));

console.log(querystring.parse(myQuery).foo);
console.log(querystring.parse(myQuery).hello);

console.log(path.join('foo/', 'baz/'));
console.log(path.join('foo/', 'baz/', '../bar'));

