/*
 * node里的全局对象
 * 	global		顶层对象，类似window
 * 		在nodejs里定义的全局变量并不是global身上的属性，它是当前模块下的属性
 * 	process		进程对象，对当前运行程序的进程进行访问和控制
 * 	
 * 
 * node里的全局函数
 * 	setTimeout()
 * 	clearTimeout()
 * 	setInterval()
 * 	clearInterval()
 * 	require()			加载模块
 * 	Buffer()				操作二进制数据
 * 
 * node里的全局变量
 * 	__filename			当前文件的路径
 * 	__dirname			当前文件夹的路径
 */

var a=10;
console.log(a);			//10
console.log(global.a);	//undefined

global.b=20;
console.log(global.b);	//20

console.log(process);