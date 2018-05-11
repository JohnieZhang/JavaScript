/*
 * 创建文件夹
 * 	mkdir			异步方式
 * 		fs.mkdir(path,callBack)
 * 			path			文件路径
 * 			callBack		回调函数
 * 				参数（err）	
 * 					null		创建成功
 * 					对象		创建失败，对象里放的是错误信息
 * 
 * 	mkdirSync		同步方式
 * 		fs.mkdirSync(path)
 * 			path			文件路径
 * 
 * 
 * 删除文件夹
 * 	rmdir			异步方式
 * 		fs.rmdir(path,callBack)
 * 			path			文件路径
 * 			callBack		回调函数
 * 				参数（err）	
 * 					null		删除成功
 * 					对象		删除失败，对象里放的是错误信息
 * 
 * 	rmdirSync		同步方式
 * 		fs.rmdirSync(path)
 * 			path			文件路径
 * 
 * 
 * 读取文件夹
 * 	readdir			异步方式
 * 		fs.readdir(path,callBack)
 * 			path			文件路径
 * 			callBack		回调函数
 * 				参数（err）	
 * 					null		读取成功
 * 					对象		读取失败，对象里放的是错误信息
 * 
 * 				参数（files）	
 * 					数组		当前文件夹里的所有文件，如果读取失败的话它的值是undefind
 * 
 * 	readdirSync		同步方式
 * 		fs.readdirSync(path)
 * 			path			文件路径
 */

var fs=require('fs');
//创建
/*fs.mkdir('15',function(err){
	console.log(err);
});*/

/*var result=fs.mkdirSync('15');
console.log(result);			//undefined	它没有返回值*/


//删除
/*fs.rmdir('15',function(err){
	console.log(err);
});*/

/*var result=fs.rmdirSync('15');
console.log(result);		//undefined	它没有返回值*/


//读取
/*fs.readdir('15',function(err,files){
	//console.log(err);
	console.log(files);
});*/

var result=fs.readdirSync('15');
console.log(result);			//[ '1.html', '2.txt' ]




