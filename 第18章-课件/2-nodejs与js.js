//变量
var a=10;
console.log(a+10);		//20


//数组
var arr=['red','green','blue'];
arr.push('yellow');
console.log(arr);		//[ 'red', 'green', 'blue', 'yellow' ]


//循环
for(var i=0;i<arr.length;i++){
	console.log(arr[i]);
}

//面向对象
function Person(name){
	this.name=name;
}
Person.prototype.showName=function(){
	console.log(this.name);
}
var p1=new Person('kaivon');
p1.showName();


//不同
//console.log(window);
console.log(global);
