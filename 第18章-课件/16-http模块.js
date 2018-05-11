/*
 * 用户输入网址敲回车后所做的事情
 * 	1、客户端向服务器发送一个http请求
 * 	2、服务器接收到请求后，对请求进行处理
 * 	3、服务器处理完以后，把数据返回到客户端
 * 	4、客户端接收到数据后进行处理
 * 
 * 	nodejs里通过http模块可以搭建一个服务器用来处理客户端的各种请求
 */

//1、引入http模块
var http=require('http');

/*
 * 2、创建服务器对象
 * 	http.createServer(callback);
 * 		callback	触发请求事件（客户端有请求了，就会触发这个事件）
 * 			参数（req）		客户端请求的一些信息
 * 			参数（res）		服务端向客户端返回的响应信息
 */
var server=http.createServer(function(req,res){
	//console.log('客户端有电话了，快接吧');
	//console.log(req);
	console.log(res);
});


/*
 * 3、监听网络
 * server.listen(port,hostname,backlog,callback)
 * 	port				端口
 * 	hostname			主机名（IP地址）
 * 	backlog			允许请求的的数量
 * 	callback			监听成功后的回调函数
 */
server.listen(8080,'localhost');