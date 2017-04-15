$.post("essay/all"+window.location.search,function(data){
	alert(JSON.stringify(data));
	$("#esssayTitle").empty();
	for(var i=0;i<data.length;i++){
		$("#esssayTitle").append("<h1 class='PostIndex-title'>"+data[i].etitle+"</h1><div class='PostIndex-author'>"
				+"<a href='page' target='_blank'> " 
				+"<img class='Avatar PostIndex-authorAvatar Avatar--xs' alt='"+data[i].uname+"' src='"+data[i].tpic+"'>" 
				+"</a><a class='PostIndex-authorName' src='"+data[i].tpic+"' target='_blank'>"+data[i].uname+"</a> " 
				+"<span class='Bull'></span>"
				+"<div class='HoverTitle' data-hover-title='2017 年 4月 3 日星期一晚上 6 点 28 分'>"
			    +"<time datetime='"+data[i].etime+"'>"+data[i].etime+"</time></div></div>")
	}
},"json");

$.post("essay/all"+window.location.search,function(data){
	alert(JSON.stringify(data));
	$("#Content").empty();
	for(var i=0;i<data.length;i++){
		alert("aaaa");
		$("#Content").append("<textarea cols='90'  disabled='disabled' style='border-style: none;'>"+data[i].econtent+"</textarea>")
	}
},"json");