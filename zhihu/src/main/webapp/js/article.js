$.post("essay/all"+eid,function(data){
	$("#esssayTitle").empty();
	for(var i=0;i<data.length;i++){
		$("#esssayTitle").append("<h1 class='PostIndex-title'>"+daat.etitle+"</h1><div class='PostIndex-author'>"
				+"<a href='https://www.zhihu.com/people/li-bang-yuan-2' target='_blank'> " 
				+"<img class='Avatar PostIndex-authorAvatar Avatar--xs' alt='暖北' src='images/business.png'>" 
				+"</a><a class='PostIndex-authorName' src='images/business.png' target='_blank'>暖北</a> " 
				+"<span class='Bull'></span>"
				+"<div class='HoverTitle' data-hover-title='2017 年 4月 3 日星期一晚上 6 点 28 分'>"
			    +"<time datetime='2017-04-03T10:28:33.000Z'>3 天前</time></div></div>")
	}
},"json");