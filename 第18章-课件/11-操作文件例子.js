var fs=require('fs');
//异步的方式
/*fs.exists('11.txt',function(b){
	if(!b){
		//这个条件成立说明现在没有这个文件，需要创建
		fs.writeFile('11.txt','kaivon',function(err){
			if(err){
				console.log('创建文件失败');
			}else{
				console.log('创建文件成功');
			}
		});
	}else{
		//这个条件成立说明现在已经有文件了，需要追加内容
		fs.appendFile('11.txt','，你好',function(err){
			if(err){
				console.log('追加内容失败');
			}else{
				console.log('追加内容成功');
			}
		});
	}
});*/


//同步的方式
if(!fs.existsSync('11.txt')){
	//这个条件成立说明现在没有这个文件，需要创建
	fs.writeFileSync('11.txt','kaivon');
	console.log('创建文件成功');
}else{
	fs.appendFileSync('11.txt','，我不好');
	console.log('追加内容成功');
}
