/*
 * 读取文件信息
 * 	stat			异步方式
 * 		fs.stat(path,callBack)
 * 			path			文件路径
 * 			callBack		回调函数
 * 				参数（err）	
 * 					null		读取成功
 * 					对象		读取失败，对象里放的是错误信息
 * 				参数（mes）
 * 					读取成功的话返回这个文件的相关信息，读取不成功的话返回undefined
 * 
 * 	statSync		同步方式	
 * 		fs.statSync(path)
 * 			path			文件路径
 * 				这个函数有返回值，返回读取到的信息
 */

var fs=require('fs');
/*fs.writeFile('14.txt','kaivon',function(err){
	if(err){
		console.log('创建文件失败');
	}else{
		console.log('创建文件成功');
	}
});*/

/*fs.stat('14.txt',function(err,mes){
	//console.log(err);
	console.log(mes);
});*/

var result=fs.statSync('14.txt');
console.log(result);