$.get("dynstate/m1",function(data){
	var myanswers="";
	for(var i=0;i<data.length;i++){
		myanswers+='<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
			+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
			+' class="Tabs-link is-active" href="/zhihu/dynstate/m2">动态</a></li>'
			+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
			+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
			+'<span class="Tabs-meta">1</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
			+'<a class="Tabs-link" href="/zhihu/page/myself3.jsp"> 我的 <span class="Tabs-meta">2</span>'
			+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
			+' class="Tabs-link" href="/zhihu/page/myself4.jsp"> 提问 <span class="Tabs-meta">1</span>'
			+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
			+' href="/zhihu/page/myself5.jsp"> 收藏 <span class="Tabs-meta">1</span>'
			+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
			+'<a class="Tabs-link" href="/zhihu/page/myself6.jsp">关注</a></li></ul>'
			+'</div><div class="page-header" style="margin: 0px; width: 640px;">'
			+'<h2 style="padding-left: 10px; padding-top: 10px">我的动态</h2>'
			+'</div><div class="row featurette" style="padding-left: 10px;padding-top: 10px"><div class="col-md-7"><h2 class="featurette-heading" style="font-size: 20px;">'
			+'<span class="text-muted" style="font-size: 13px">回答了问题</span><br />'+data[i].question[i].qtitle+'</h2>'
			+'<h2 class="featurette-heading" style="font-size: 13px;"> <img  src="/zhihu/images/touxiang.jpg" style="width:50px;height:50px">&nbsp;&nbsp;&nbsp;'
			+data[i].users[i].uname+' &nbsp;&nbsp;&nbsp; <span class="text-muted"'
			+'style="font-size: 12px; font-weight: 300;">'+data[i].users[i].usign+'</span></h2>'
			+'<p class="lead" style="font-size: 14px;">'+data[i].rcontent+'</p><span> <a href="#" style="font-size: 13px; font-weight: 40">阅览'
			+'<span class="badge" style="width: 20px; padding: 0px;">42</span></a> <a href="#" style="font-size: 13px; font-weight: 40">点赞 '
			+'<span class="badge" style="width: 20px; padding: 0px;">42</span></a> <a'
			+'href="#" style="font-size: 13px; font-weight: 40">收藏 <span'
			+' class="badge" style="width: 20px; padding: 0px;">42</span></a></span></div></div>';
	}

	document.getElementById("myself").innerHTML = myanswers;
},'json');

function Myanswer3(){
	$.get("dynstate/m3",function(data){
		
		var myanswers="";
		for(var i=0;i<data.length;i++){
			myanswers+='<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/myself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link is-active" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">1</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link" href="/zhihu/page/myself3.jsp"> 我的 <span class="Tabs-meta">2</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="/zhihu/page/myself4.jsp"> 提问 <span class="Tabs-meta">1</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
				+' href="/zhihu/page/myself5.jsp"> 收藏 <span class="Tabs-meta">1</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="/zhihu/page/myself6.jsp">关注</a></li></ul>'
				+'</div><div class="page-header" style="margin: 0px; width: 640px;">'
				+'<h2 style="padding-left: 10px; padding-top: 10px">我的回答</h2>'
				+'</div><div class="row featurette" style="padding-left: 10px;padding-top: 10px"><div class="col-md-7"><h2 class="featurette-heading" style="font-size: 20px;">'
				+'<span class="text-muted" style="font-size: 13px">回答了问题</span><br />'+data[i].question[i].qtitle+'</h2>'
				+'<h2 class="featurette-heading" style="font-size: 13px;"> <img  src="/zhihu/images/touxiang.jpg" style="width:50px;height:50px">&nbsp;&nbsp;&nbsp;'
				+data[i].users[i].uname+' &nbsp;&nbsp;&nbsp; <span class="text-muted"'
				+'style="font-size: 12px; font-weight: 300;">'+data[i].users[i].usign+'</span></h2>'
				+'<p class="lead" style="font-size: 14px;">'+data[i].rcontent+'</p><span> <a href="#" style="font-size: 13px; font-weight: 40">阅览'
				+'<span class="badge" style="width: 20px; padding: 0px;">42</span></a> <a href="#" style="font-size: 13px; font-weight: 40">点赞 '
				+'<span class="badge" style="width: 20px; padding: 0px;">42</span></a> <a'
				+'href="#" style="font-size: 13px; font-weight: 40">收藏 <span'
				+' class="badge" style="width: 20px; padding: 0px;">42</span></a></span></div></div>';
		}

		document.getElementById("myself").innerHTML = myanswers;
	},'json');
}
