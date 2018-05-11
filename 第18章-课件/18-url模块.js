/*
 * url模块
 * 	url.parse(href)			把地址解析成一个对象
 */

var url=require('url');
var http=require('http');
var href='http://www.kaivon.cn:8080/index.html?username=kaivon&password=123#div';

//console.log(url.parse(href));

var server=http.createServer(function(req,res){
	//console.log(req);
	//console.log(req.url);
	var parseUrl=url.parse(req.url);
	//console.log(parseUrl);
	
	switch(parseUrl.pathname){
		case '/':
			//首页
			res.writeHead(200,{
				'content-type':'text/html;charset=utf-8'
			});
			res.end('<h1>这是一个首页</h1>');
			break;
			
		case '/about':
			//关于我们
			res.writeHead(200,{
				'content-type':'text/html;charset=utf-8'
			});
			res.end('<h1>这是一个关于我们的页面</h1>');
			break;
			
		default:
			res.writeHead(404,{
				'content-type':'text/html;charset=utf-8'
			});
			res.end('<h1>让404飞一会</h1>');
			break;
	}
	
}).listen(8080,'localhost');


