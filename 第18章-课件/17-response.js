/*
 * 参数2（res）
 * 	res.write()		给客户端写入东西
 * 	res.end()		停止响应，必需要加，要加在最后
 * 	res.writeHead(statusCode,reasonPhrase,headers)			设置返回的头信息
 * 		statusCode		状态码
 * 		reasonPhrase		状态码对应的描述文字
 * 		headers			返回头信息
 */

var http=require('http');
var server=http.createServer(function(req,res){
	res.writeHead(200,'kaivon is ok',{
		'content-type':'text/html'
	});
	//res.write('<h1>kaivon</h1>');
	res.end('<h1>kaivon</h1>');			//也可以把write里的参数写到end函数里，功能是一样的
}).listen(8080,'localhost');