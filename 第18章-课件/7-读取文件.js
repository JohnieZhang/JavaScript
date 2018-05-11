/*
 * 文件模块		fs
 * 读取文件
 * 	readFile			用异步的方式读取文件
 * 		fs.readFile(path,callBack)
 * 			path			文件路径
 * 			callBack		回调函数
 * 				参数1（err）
 * 						null：读取文件成功
 *						对象：读取文件失败，对象里放的是错误信息
 *				参数2（buffer）
 *						当读取文件失败的时候为undefined，成功的时候为一个Buffer对象
 * 						调用toString()方法可以把二进制转成字符串
 * 
 * 	readFileSync		用同步的方式读取文件
 * 		fs.readFileSync(path,char)
 * 			path			文件路径
 * 			char			编码(如果省略的话返回一个Buffer对象)
 */

var fs=require('fs');
/*fs.readFile('7.txt',function(err,buffer){
	//console.log(err);			//null
	//console.log(buffer);		//<Buffer 6b 61 69 76 6f 6e>
	
	if(err){
		console.log('读取文件失败');
	}else{
		console.log(buffer.toString());		//kaivon
	}
});*/

//console.log(1);

var str=fs.readFileSync('7.txt','utf-8');
console.log(str);		//kaivon






