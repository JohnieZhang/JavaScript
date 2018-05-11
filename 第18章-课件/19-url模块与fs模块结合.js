var http=require('http');
var url=require('url');
var fs=require('fs');

var server=http.createServer(function(req,res){
	var parseUrl=url.parse(req.url);
	
	switch(parseUrl.pathname){
		case '/':
			//首页
			readFile('index.html',req,res);
			break;
			
		case '/about':
			//关于我们
			readFile('about.html',req,res);
			break;
			
		default:
			res.writeHead(404,{
				'content-type':'text/html;charset=utf-8'
			});
			readFile('404.html',req,res);
			break;
	}
}).listen(8080,'localhost');

function readFile(file,req,res){
	var htmlSrc=__dirname+'/19/'+file;
	
	fs.readFile(htmlSrc,function(err,data){
		if(err){
			readFile('404.html',req,res);
		}else{
			res.writeHead(200,{
				'content-type':'text/html;charset=utf-8'
			});
			res.end(data);
		}
	});
}

