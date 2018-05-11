/*
 * 判断一个路径（文件）是否存在
 * 	exists		异步的方式
 * 		fs.exists(path,callback)
 * 			path			文件路径
 * 			callback		回调函数
 * 				参数（boolean）	
 * 					true		文件存在
 * 					false	文件不存在
 * 
 * 	existsSync	同步的方式
 * 		fs.existsSync(path)
 * 			path			文件路径
 * 			它有一个返回值是布尔值，对应文件是否存在
 */

var fs=require('fs');
/*fs.exists('9.txt',function(boolean){
	console.log(boolean);		//true
});*/


var result=fs.existsSync('91.txt');
console.log(result);				//true



