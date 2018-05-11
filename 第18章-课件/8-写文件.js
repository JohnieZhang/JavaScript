/*
 * 写文件（如果原来的文件存在，内容就会被替换，而不是添加。如果文件不存在，它会新建一个文件）
 * 	writeFile			用异步的方式写文件，
 * 		fs.writeFile(path,data,options,callBack)
 * 			path			文件路径
 * 			data			写入的数据，可以是字符串也可以是Buffer对象
 * 			options		可选参数，可以设置文件的编码
 * 			callBack		回调函数
 * 				参数（err）
 * 						null：写入内容成功
 * 
 * 	writeFileSync		用同步的方式写文件
 * 		fs.writeFileSync(path,data,options)
 * 			path			文件路径
 * 			data			写入的数据，可以是字符串也可以是Buffer对象
 * 			options		可选参数，可以设置文件的编码
 */

var fs=require('fs');
/*fs.writeFile('8.txt','我不好',function(err){
	console.log(err);
});*/

var result=fs.writeFileSync('8.txt','我很好');
console.log(result);			//undefined		它没有返回值
