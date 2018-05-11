/*
 * usenam=kaivon&password=123
 * querystring		解析url里的query数据
 * 	querystring.stringify(obj,sep,eq)		把对象转成字符串
 * 		obj		对象
 * 		sep		转成字符串后多个值间的连接符（默认为&）
 * 		eq		key与value间的连接符（默认为=）
 * 
 * 	querystring.parse(str,sep,eq)			把字符串转成对象
 * 		str		字符串
 * 		sep		拼成对象后多个值间的连接符（默认为&）
 * 		eq		key与value间的连接符（默认为=）
 * 
 * 
 * post发送过来的数据是放在缓存区里的，需要通过request的data事件和end事件来进行数据拼接处理
 */

var http=require('http');
var url=require('url');
var fs=require('fs');
var querystring=require('querystring');

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
		
		case '/login':		//打开登录页面
			//登录页面
			readFile('login.html',req,res);
			break;
			
		case '/login/check':		//点击登录后，跳到的一个地址，它不需要页面，只用有地址就行了
			//get方式取数据
			/*//console.log(parseUrl.query);		//username=123&password=123sdfsa
			var data=querystring.parse(parseUrl.query);
			//console.log(data);			//{ username: 'kaivon', password: '123' }
			
			res.writeHead(200,{
				'content-type':'text/html;charset=utf-8'
			});
			res.end('你的用户名是：'+data.username+'<br>你的密码是：'+data.password);*/
			
			
			//post方式取数据
			//console.log(req.method);
			if(req.method.toUpperCase()=='POST'){
				//这个条件成立说明，现在是post方式提交
				var str='';
				
				//1、post提交的数据先存放在了缓冲区，需要用到data方法去读数据
				req.on('data',function(chunk){
					str+=chunk;
				});
				
				//2、数据是在end事件发生后才读完，所以，要操作数据必需要用end事件
				req.on('end',function(){
					//console.log(str);		//username=kaivon&password=123
					str=querystring.parse(str);
					//console.log(str);		//{ username: 'kaivon', password: '123' }
					
					res.writeHead(200,{
						'content-type':'text/html;charset=utf-8'
					});
					res.end('你的用户名是：'+str.username+'<br>你的密码是：'+str.password);
				});
			}
			
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

