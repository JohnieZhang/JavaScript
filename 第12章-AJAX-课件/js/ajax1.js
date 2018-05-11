


function ajax(json){
	var settings={
		url:'',
		method:'get',
		dataType:'string',
		data:{},
		succ:function(){},
		fail:function(){}
	}
	
	//将settings用用户传入的数据覆盖
	for(var attr in json){
		settings[attr]=json[attr];
	}
	
	//将用户传入的数据拼接成为正确的格式
	var arr=[];
	for(var attr in settings.data){
		arr.push(attr+'='settings.data[attr])
	}
	settings.data=arr.join('&');//将拼接好的数据赋值给settings下的data
	
	//创建一个ajax对象
	var ajax=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject('Microsoft.XMLHTTP');
	
	//设置请求方式
	if(settings.dataType==='get'){
		ajax.open('get',settings.url+'?'+settings.data+'&'+new Date().getTime(),true);
		ajax.send();
	}else{
		ajax.open('post',settings.url,true);
		ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		ajax.send(settings.data);
	}
	
	//服务器相应
	if(typeof ajax.onload==="undefined"){
		ajax.onreadystatechange=ready;
	}else{
		ajax.onload=ready;
	}
	
	//定义ready函数
	function ready(){
		if(ajax.readyState==4){
			if(ajax.status==200){
				switch(settings.dataType.toLowerCase()){
					case 'string':
						settings.succ(ajax.responseText);
						break;
					case 'json':
						settings.succ(JSON.parse(ajax.responseText));
						break;
					case 'xml':
						settings.succ(ajax.responseXML);
						break;
				}
			}else{
				settings.fail(ajax.status);
			}
		}
	}
}
