/*
 * 给文件追加内容（如果文件不存在会创建一个文件）
 * 	appendFile		用异步的方式把数据添加到已有文件的尾部
 * 		fs.appendFile(path,data,options,callBack)
 * 			path			文件路径
 * 			data			追加的数据，可以是字符串也可以是Buffer对象
 * 			options		可选参数，可以设置文件的编码
 * 			callBack		回调函数
 * 				参数（err）
 * 						null：写入文件成功
 * 
 * 	appendFileSync		用同步的方式把数据添加到已有文件的尾部
 * 		fs.appendFile(path,data,options)
 * 			path			文件路径
 * 			data			追加的数据，可以是字符串也可以是Buffer对象
 * 			options		可选参数，可以设置文件的编码
 */

var fs=require('fs');

/*fs.appendFile('9.txt','，你好',function(err){
	console.log(err);
});*/

var result=fs.appendFile('9.txt','，陈学辉');
console.log(result);			//undefined		它没有返回值
