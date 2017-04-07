$.get("dynstate/m1",function(data){
	var myanswers="";
	var id='<%=Session["myatten"]%>'
	for(var i=0;i<data.length;i++){
		myanswers+='<div class="panel panel-default"style="width: 660px; margin-left: 15px;">'
			+'<div class="panel-body"><span id="myself">' 
			+'<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
			+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
			+' class="Tabs-link is-active" href="/zhihu/page/myself.jsp">动态</a></li>'
			+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
			+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
			+'<span class="Tabs-meta">1</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
			+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> 我的 <span class="Tabs-meta">2</span>'
			+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
			+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">1</span>'
			+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
			+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">1</span>'
			+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
			+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
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
			+' class="badge" style="width: 20px; padding: 0px;">42</span></a></span></div></div>'
			+'</span></div></div>';
			+'</span></div></div><div class="panel panel-default"'
			+' style="width: 283px; height: 120px; margin-left: 700px; margin-top: -318px">'
			+'<div class="panel-body"><ul class="list-inline">'
			+'<li style="padding-left: 40px; padding-top: 10px;">关注了</li>'
			+'<li style="padding-left: 80px; padding-top: 10px;">关注者</li>'
			+'</ul></div></div>';
	}

	document.getElementById("zhuyezhuti").innerHTML = myanswers;
},'json');

function Myanswer3(){
	$.get("dynstate/m3",function(data){

		var myanswers="";
		for(var i=0;i<data.length;i++){
			myanswers+='<div class="panel panel-default"style="width: 660px; margin-left: 15px;">'
				+'<div class="panel-body"><span id="myself">' 
				+'<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/myself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link is-active" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">1</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> 我的 <span class="Tabs-meta">2</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">1</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">1</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="page-header" style="margin: 0px; width: 640px;">'
				+'<h2 style="padding-left: 10px; padding-top: 10px">我的回答</h2>'
				+'</div><div class="row featurette" style="padding-left: 10px;padding-top: 10px"><div class="col-md-7"><h2 class="featurette-heading" style="font-size: 20px;">'
				+'<span class="text-muted" style="font-size: 13px">回答了问题</span><br />'+data[i].question[i].qtitle+'</h2>'
				+'<h2 class="featurette-heading" style="font-size: 13px;"> <img  src="/zhihu/images/touxiang.jpg" style="width:50px;height:50px">&nbsp;&nbsp;&nbsp;'
				+data[i].users[i].uname+' &nbsp;&nbsp;&nbsp; <span class="text-muted"'
				+'style="font-size: 12px; font-weight: 300;">'+data[i].users[i].usign+'</span></h2>'
				+'<p class="lead" style="font-size: 14px;">'+data[i].rcontent+'</p><span> '
				+'<p class="text-muted" style="font-size: 14px; color:">发布于'+data[i].rtime+'</p><a href="#" style="font-size: 13px; font-weight: 40">阅览'
				+'<span class="badge" style="width: 20px; padding: 0px;">42</span></a> <a href="#" style="font-size: 13px; font-weight: 40">点赞 '
				+'<span class="badge" style="width: 20px; padding: 0px;">42</span></a> <a'
				+'href="#" style="font-size: 13px; font-weight: 40">收藏 <span'
				+' class="badge" style="width: 20px; padding: 0px;">42</span></a></span></div></div>'
				+'</span></div></div>';
				+'</span></div></div><div class="panel panel-default"'
				+' style="width: 283px; height: 120px; margin-left: 700px; margin-top: -318px">'
				+'<div class="panel-body"><ul class="list-inline">'
				+'<li style="padding-left: 40px; padding-top: 10px;">关注了</li>'
				+'<li style="padding-left: 80px; padding-top: 10px;">关注者</li>'
				+'</ul></div></div>';
		}

		document.getElementById("zhuyezhuti").innerHTML = myanswers;
	},'json');
}

function My(){
	$.get("dynstate/m4",function(data){
		var my="";
		for(var i=0;i<data.length;i++){
			my+='<div class="panel panel-default"style="width: 660px; margin-left: 15px;">'
				+'<div class="panel-body"><span id="myself">' 
				+'<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/myself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">1</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link is-active" href="javascript:void(0)" onclick="My()"> 我的 <span class="Tabs-meta">2</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">1</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">1</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="List-header"><h4 class="List-headerText"><div class="SubTabs">'
				+'<a class="SubTabs-item is-active" onclick="myessay()" href="javascript:void(0)" style="margin-top:20px">我的文章</a>'
				+'<a class="SubTabs-item" href="javascript:void(0)" onclick="myscolumn()" style="margin-top:20px">我的专栏</a></div>'
				+'</h4><div class="List-headerOptions"></div></div>'
				+'<div class="row featurette" style="padding-left: 10px;padding-top: 10px"><div class="col-md-7"><h2 class="ContentItem-title">'
				+'<a>'+data[i].etitle+'</a></h2><br/>'
				+'<h2 class="featurette-heading" style="font-size: 13px;"> <img  src="/zhihu/images/touxiang.jpg" style="width:50px;height:50px">&nbsp;&nbsp;&nbsp;'
				+data[i].users[i].uname+' &nbsp;&nbsp;&nbsp; <span class="text-muted"'
				+'style="font-size: 12px; font-weight: 300;">'+data[i].users[i].usign+'</span></h2>'
				+'<p class="lead" style="font-size: 14px;">'+data[i].econtent+'</p><br/>'
				+'<p class="text-muted" style="font-size: 14px; color:">发布于'+data[i].etime+'</p><span> <a href="#" style="font-size: 13px; font-weight: 40">阅览'
				+'<span class="badge" style="width: 20px; padding: 0px;">42</span></a> <a href="#" style="font-size: 13px; font-weight: 40">点赞 '
				+'<span class="badge" style="width: 20px; padding: 0px;">42</span></a> <a'
				+'href="#" style="font-size: 13px; font-weight: 40">收藏 <span'
				+' class="badge" style="width: 20px; padding: 0px;">42</span></a></span></div></div>'
				+'</span></div></div>';
				+'</span></div></div><div class="panel panel-default"'
				+' style="width: 283px; height: 120px; margin-left: 700px; margin-top: -318px">'
				+'<div class="panel-body"><ul class="list-inline">'
				+'<li style="padding-left: 40px; padding-top: 10px;">关注了</li>'
				+'<li style="padding-left: 80px; padding-top: 10px;">关注者</li>'
				+'</ul></div></div>';
		}
		document.getElementById("zhuyezhuti").innerHTML = my;

	},'json');
}

function myscolumn(){
	
}

function MyQuestion(){
	$.get("dynstate/m6",function(data){
		var myquestions="";
		for(var i=0;i<data.length;i++){
			myquestions+='<div class="panel panel-default"style="width: 660px; margin-left: 15px;">'
				+'<div class="panel-body"><span id="myself">' 
				+'<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
			+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
			+' class="Tabs-link" href="/zhihu/page/myself.jsp">动态</a></li>'
			+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
			+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
			+'<span class="Tabs-meta">1</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
			+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> 我的 <span class="Tabs-meta">2</span>'
			+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
			+' class="Tabs-link is-active" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">1</span>'
			+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
			+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">1</span>'
			+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
			+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
			+'</div><div class="page-header" style="margin: 0px; width: 640px;">'
			+'<h2 style="padding-left: 10px; padding-top: 10px">我的提问</h2>'
			+'</div><div class="List-item"><div class="ContentItem" data-za-module="QuestionItem"'
			+'<h2 class="ContentItem-title"><div class="QuestionItem-title">'
			+'<a href="#" target="_blank">'+data[i].qtitle+'</a></div></h2>'
			+'<div class="ContentItem-status"><span class="ContentItem-statusItem">'
			+data[i].qtime+'</span> <span class="ContentItem-statusItem">'+data[i].sum+' 个回答</span></div></div></div>'
			+'</span></div></div>';
			+'</span></div></div><div class="panel panel-default"'
			+' style="width: 283px; height: 120px; margin-left: 700px; margin-top: -318px">'
			+'<div class="panel-body"><ul class="list-inline">'
			+'<li style="padding-left: 40px; padding-top: 10px;">关注了</li>'
			+'<li style="padding-left: 80px; padding-top: 10px;">关注者</li>'
			+'</ul></div></div>';
		}
		document.getElementById("zhuyezhuti").innerHTML = myquestions;
	},'json');
}

function myfavorite(){
	$.get("dynstate/m7",function(data){
		var favorites="";
		for(var i=0;i<data.length;i++){
			favorites+='<div class="panel panel-default"style="width: 660px; margin-left: 15px;">'
				+'<div class="panel-body"><span id="myself">' 
				+'<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/myself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">1</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> 我的 <span class="Tabs-meta">2</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">1</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link is-active"'
				+'  href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">1</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="page-header" style="margin: 0px; width: 640px;">'
				+'<h2 style="padding-left: 10px; padding-top: 10px">我的收藏夹</h2>'
				+'</div><div class="List-item"><div class="ContentItem" data-za-module="QuestionItem"'
				+'<h2 class="ContentItem-title"><div class="QuestionItem-title">'
				+'<a href="#" target="_blank">'+data[i].fname+'</a></div></h2>'
				+'<div class="ContentItem-status"><span class="ContentItem-statusItem">'
				+data[i].ftime+'</span> <span class="ContentItem-statusItem">'+data[i].sum+' 条内容</span></div></div></div>'
				+'</span></div></div>';
				+'</span></div></div><div class="panel panel-default"'
				+' style="width: 283px; height: 120px; margin-left: 700px; margin-top: -318px">'
				+'<div class="panel-body"><ul class="list-inline">'
				+'<li style="padding-left: 40px; padding-top: 10px;">关注了</li>'
				+'<li style="padding-left: 80px; padding-top: 10px;">关注者</li>'
				+'</ul></div></div>';
		}
		document.getElementById("zhuyezhuti").innerHTML = favorites;
	},'json');
	
}

function MyAttention(){
	$.get("dynstate/m8",function(data){
		var myattention="";
		for(var i=0;i<data.length;i++){
			myattention+='<div class="panel panel-default"style="width: 660px; margin-left: 15px;">'
				+'<div class="panel-body"><span id="myself">' 
				+'<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/myself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">1</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> 我的 <span class="Tabs-meta">2</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">1</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">1</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link is-active" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="List-header"><h4 class="List-headerText"><div class="SubTabs">'
				+'<a class="SubTabs-item is-active" href="/people/rui-you-93/following">我关注的人</a>'
				+'<a class="SubTabs-item" href="/people/rui-you-93/followers">关注我的人</a><span class="SubTabs-item">'
				+'<div class="Popover"></div></span></div></h4></div><div class="List-item">'
				+'<div class="ContentItem" ><div class="ContentItem-main"><div class="ContentItem-image">'
				+'<span class="UserLink UserItem-avatar"><div class="Popover">'
				+'<div id="Popover-81043-7312-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-81043-7312-content">'
				+'<a class="UserLink-link" target="_blank" href="#">'
				+'<img class="Avatar Avatar--large UserLink-avatar" src="/zhihu/images/touxiang.jpg"  style="width: 60px; height: 60px;">'
				+'</a></div></div></span></div><div class="ContentItem-head"><h2 class="ContentItem-title">'
				+'<div class="UserItem-title"><span class="UserLink UserItem-name">'
				+'<div class="Popover"><div id="Popover-81046-20668-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-81046-20668-content">'
				+'<a class="UserLink-link" target="_blank" href="/people/cheng-cheng-8-22">'+data[i].uname+'</a></div>'
				+'</div></span><span class="FollowStatus">相互关注</span></div></h2>'
				+'<div class="ContentItem-meta"><div><div class="RichText">'+data[i].usign+'</div>'
				+'<div class="ContentItem-status"><span class="ContentItem-statusItem">'+data[i].ansum+'回答</span>'
				+'<span class="ContentItem-statusItem">'+data[i].essum+'文章</span><span class="ContentItem-statusItem">'+data[i].attsum+' 关注者</span>'

				+'</div></div></div></div><div class="ContentItem-extra"><button class="Button FollowButton Button--primary Button--grey" type="button" onclick="touch()">'
				+'已关注</button></div></div></div></div>'
				+'</span></div></div>';

				+'</div></div></div></div><div class="ContentItem-extra"><button class="Button FollowButton Button--primary Button--grey" type="button">'
				+'已关注</button></div></div></div></div>'
				+'</span></div></div><div class="panel panel-default"'
				+' style="width: 283px; height: 120px; margin-left: 700px; margin-top: -318px">'
				+'<div class="panel-body"><ul class="list-inline">'
				+'<li style="padding-left: 40px; padding-top: 10px;">关注了</li>'
				+'<li style="padding-left: 80px; padding-top: 10px;">关注者</li>'
				+'</ul></div></div>';
		}
		document.getElementById("zhuyezhuti").innerHTML = myattention;
	},'json');	
}


function touch(){
	$.get("dynstate/touch",function(data){
		
	})
	
}

$('#changgeimage').hover(function() {
	layer.tips("上传一张图片，展示在这里", '.DynamicColorButton', {
		time : 6000,
		tips : [ 2, "#3c3c3c" ]
	})
}, function() {
	layer.closeAll('tips');
});

/*function updatePic(){
	$.get("dynstate/modify",function(data){
		if(data==""){
			return ;
		}
		
		if(data.trim() == "true"){
			$(".UserCoverEditor").datagrid("reload"); //刷新修改数据
		}
	})
}*/



