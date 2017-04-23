//显示封面图片
function myansrer33(){
	$.get("him/showtoppic"+window.location.search,function(data){
		var a="";
		if(data.length>0){
			for(var i=0;i<data.length;i++){
				a+="<img src='"+data[i].toppic+"' height='132px' width='966px' />";
			}
		}
		document.getElementById("showImage_gr").innerHTML = a;
	},'json');

	$.get("him/a1"+window.location.search,function(data){
		var total="";
		for(var i=0;i<data.length;i++){
			total+='<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link is-active" href="/zhihu/page/himself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">'+data[i].answer+'</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> ta的 <span class="Tabs-meta">'+data[i].mine+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">'+data[i].question+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">'+data[i].fav+'</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="page-header" style="margin: 0px; width: 640px;">'
				+'<h2 style="padding-left: 10px; padding-top: 10px">ta的动态</h2>'
				+'</div>';
		}
		document.getElementById("myself1").innerHTML = total;
	},'json');
}

//显示头像
$.get("him/upic"+window.location.search,function(data){
	var upic='';
	upic+='	<div class="UserAvatar">'
		+'		<div id="hhh">'
		+'		<img id="img_icon"'
		+'			class="Avatar Avatar--large UserAvatar-inner"'
		+'			src="'+data.upic+'"'
		+'			style="width: 160px; height: 160px;"'
		+'			onclick="updateimg(this)"> </div>'
		+'	</div>';

	document.getElementById("userava").innerHTML = upic;

	var topupic='';
	topupic+='<img class="Avatar" src="'+data.upic+'" style="width: 30px; height: 30px;">';
	document.getElementById("Popover-78248-82895-toggle").innerHTML = topupic;
},'json');


$.get("him/infos"+window.location.search,function(data){
	var info='';
	info+='<span class="ProfileHeader-name">'+data.uname+'</span> <span'
	+' class="RichText ProfileHeader-headline">'+data.usign+'</span>';
	document.getElementById("himinfo").innerHTML = info;

},'json');

$.get("him/m1"+window.location.search,function(data){
	myansrer33();
	var myanswers="";
	if(data.length>0){
		for(var i=0;i<data.length;i++){
			if(data[i].kind=="A"){
				myanswers+='<div class="row featurette" style="padding-left: 10px;padding-top: 10px"><div class="col-md-7"><h2 class="featurette-heading" style="font-size: 20px;">'
					+'<span class="text-muted" style="font-size: 13px">回答了问题</span><br />'+data[i].title+'</h2>'
					+'<h2 class="featurette-heading" style="font-size: 13px;"> <img  src="'+data[i].upic+'" style="width:50px;height:50px">&nbsp;&nbsp;&nbsp;'
					+data[i].uname+' &nbsp;&nbsp;&nbsp; <span class="text-muted"'
					+'style="font-size: 12px; font-weight: 300;">'+data[i].sign+'</span></h2>'
					+'<p class="lead" style="font-size: 14px;">'+data[i].content+'</p>'
					+'<span><div style="width: 70px; float: left; height: 20px">'
					+'<a style="font-size: 13px; font-weight: 40; border-style: none;"'
					+' class="btn btn-default dropdown-toggle" type="button"'
					+' id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">收藏'
					+' </a>'
					+' <ul class="dropdown-menu" role="menu"'
					+' aria-labelledby="dropdownMenu1" id="dropdown-menu">'
					+' <li role="presentation"><a role="menuitem" tabindex="-1"'
					+'	onclick="addfav()">添加收藏夹</a></li>'
					+'</ul></div>'
					+'<div style="width: 70px; float: left; height: 20px"'
					+' class="btn-group" role="group" aria-label="...">'
					+'<button'
					+'	style="font-size: 13px; font-weight: 40; border-style: none;"'
					+'	type="button" class="btn btn-default">'
					+'	<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>点赞'
					+   data[i].dz+'</button></div></span></div></div><hr>';

			}else if(data[i].kind=="T"){
				myanswers+='<div class="row featurette" style="padding-left: 10px;padding-top: 10px"><div class="col-md-7"><div class="List-itemMeta">'
					+'<div class="ActivityItem-meta"><span class="ActivityItem-metaTitle">关注了话题</span>'
					+'</div></div><div class="ContentItem-main">'
					+'<div class="ContentItem-image"><a class="TopicLink" href="/topic/19966000" target="_blank">'
					+'<div class="Popover"><div id="Popover-12300-80678-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-12300-80678-content">'
					+'<img class="Avatar Avatar--large TopicLink-avatar" src="'+data[i].tpic+'" style="width:50px;height:50px"></div>'
					+'</div></a></div><div class="ContentItem-head"><h2 class="ContentItem-title">'
					+'<a class="TopicLink" href="/topic/19966000" target="_blank"><div class="Popover">'
					+'<div id="Popover-12304-93779-toggle" aria-haspopup="true" aria-expanded="false" '
					+'aria-owns="Popover-12304-93779-content">'+data[i].tname+'</div></div></a></h2></div></div></div><hr>';
			}else if(data[i].kind=='E'){
				myanswers+='<div class="row featurette" style="padding-left: 10px;padding-top: 10px"><div class="col-md-7"><h2 class="featurette-heading" style="font-size: 20px;">'
					+'<span class="text-muted" style="font-size: 13px">发表了文章</span><br /><a href="/zhihu/page/article.jsp?eid='+data[i].tid+'">'+data[i].title+'</a></h2>'
					+'<h2 class="featurette-heading" style="font-size: 13px;"> <img  src="'+data[i].tpic+'" style="width:50px;height:50px">&nbsp;&nbsp;&nbsp;'
					+data[i].uname+' &nbsp;&nbsp;&nbsp; <span class="text-muted"'
					+'style="font-size: 12px; font-weight: 300;">'+data[i].sign+'</span></h2>'
					+'<p class="lead" style="font-size: 14px;">'+data[i].content+'</p>'
					+'<p class="text-muted" style="font-size: 14px; color:">发布于'+data[i].times+'</p>'
					+'<span><div style="width: 70px; float: left; height: 20px"'
					+' class="btn-group" role="group" aria-label="...">'
					+'<button'
					+'	style="font-size: 13px; font-weight: 40; border-style: none;"'
					+'	type="button" class="btn btn-default">'
					+'	<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>点赞'
					+   data[i].dz+'</button></div></span></div></div><hr>';
			}else if(data[i].kind=='S'){
				myanswers+='<div class="row featurette" style="padding-left: 10px;padding-top: 10px"><div class="col-md-7"><div class="List-item"><div class="List-itemMeta">'
					+'<div class="ActivityItem-meta"><span class="ActivityItem-metaTitle">关注了'+data[i].uname+'的专栏</span>'
					+'</div></div><div class="ContentItem-main">'
					+'<div class="ContentItem-image"><a class="TopicLink" href="/topic/19966000" target="_blank">'
					+'<div class="Popover"><div id="Popover-12300-80678-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-12300-80678-content">'
					+'<img class="Avatar Avatar--large TopicLink-avatar" src="'+data[i].tpic+'" style="width:50px;height:50px"></div>'
					+'</div></a></div><div class="ContentItem-head"><h2 class="ContentItem-title">'
					+'<a class="TopicLink" href="/topic/19966000" target="_blank"><div class="Popover">'
					+'<div id="Popover-12304-93779-toggle" aria-haspopup="true" aria-expanded="false" '
					+'aria-owns="Popover-12304-93779-content">'+data[i].tname+'<span>'
					+'<p class="text-muted" style="font-size: 14px; color:">关注于'+data[i].times+'</p></span></div></div></a></h2></div></div></div></div>';
			}
		}
	}else{
		myanswers+='<div class="row featurette" style="padding-left: 10px;padding-top: 10px;text-align:center;height:300px;">'
			+'<div class="col-md-7"><a style="float:center">还没有动态，快去逛一逛知乎吧！</a></div></div>';
	}

	document.getElementById("myself2").innerHTML = myanswers;
	
	$.get("him/right"+window.location.search,function(data){
		var right='';
		var right2='';
		for(var i=0;i<data.length;i++){
			right+='<div class="Card FollowshipCard"><div class="NumberBoard FollowshipCard-counts">'
				+'<a class="Button NumberBoard-item Button--plain" type="button"'
				+'	href="/people/pang-huang-zhi-ren-80/following">'
				+'	<div class="NumberBoard-name">关注了</div>'
				+'	<div class="NumberBoard-value">'+data.myatten+'</div>'
				+'</a>'
				+'<div class="NumberBoard-divider"></div>'
				+'<a class="Button NumberBoard-item Button--plain" type="button"'
				+'	href="/people/pang-huang-zhi-ren-80/followers">'
				+'	<div class="NumberBoard-name">关注者</div>'
				+'	<div class="NumberBoard-value">'+data.attenme+'</div>'
				+'</a>'
				+'</div></div>'
				+'<div class="Profile-lightList" ><a class="Profile-lightItem"'
				+' href="/people/pang-huang-zhi-ren-80/following/topics"> <span'
				+' class="Profile-lightItemName">关注的话题</span> <span'
				+'	class="Profile-lightItemValue">'+data.myattentop+'</span>'
				+'	</a> <a class="Profile-lightItem"'
				+'	href="/people/pang-huang-zhi-ren-80/following/collections"> <span'
				+'	class="Profile-lightItemName">关注的收藏夹</span> <span'
				+'	class="Profile-lightItemValue">'+data.myattenfav+'</span>'
				+'	</a></div>';
			document.getElementById("right").innerHTML = right;
		}
	},'json');
},'json');

//回答
function Myanswer3(){
	$.get("him/a1"+window.location.search,function(data){
		var total="";
		for(var i=0;i<data.length;i++){
			total+='<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/himself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link is-active" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">'+data[i].answer+'</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> ta的 <span class="Tabs-meta">'+data[i].mine+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">'+data[i].question+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">'+data[i].fav+'</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="page-header" style="margin: 0px; width: 640px;">'
				+'<h2 style="padding-left: 10px; padding-top: 10px">ta的回答</h2>'
				+'</div>';
		}
		document.getElementById("myself1").innerHTML = total;
	},'json');

	$.get("him/m3"+window.location.search,function(data){
		if(data.length>0){
			var myanswers="";
			for(var i=0;i<data.length;i++){
				myanswers+='<div class="row featurette" style="padding-left: 10px;padding-top: 10px"><div class="col-md-7"><h2 class="featurette-heading" style="font-size: 20px;">'
					+'<span class="text-muted" style="font-size: 13px">回答了问题</span><br />'+data[i].title+'</h2>'
					+'<h2 class="featurette-heading" style="font-size: 13px;"> <img  src="'+data[i].tpic+'" style="width:50px;height:50px">&nbsp;&nbsp;&nbsp;'
					+data[i].uname+' &nbsp;&nbsp;&nbsp; <span class="text-muted"'
					+'style="font-size: 12px; font-weight: 300;">'+data[i].sign+'</span></h2>'
					+'<p class="lead" style="font-size: 14px;">'+data[i].content+'</p><span> '
					+'<p class="text-muted" style="font-size: 14px; color:">发布于'+data[i].times+'</p>'
					+'<span><div style="width: 70px; float: left; height: 20px">'
					+'<a style="font-size: 13px; font-weight: 40; border-style: none;"'
					+' class="btn btn-default dropdown-toggle" type="button"'
					+' id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">收藏'
					+' </a>'
					+' <ul class="dropdown-menu" role="menu"'
					+' aria-labelledby="dropdownMenu1" id="dropdown-menu">'
					+' <li role="presentation"><a role="menuitem" tabindex="-1"'
					+'	onclick="addfav()">添加收藏夹</a></li>'
					+'</ul></div>'
					+'<div style="width: 70px; float: left; height: 20px"'
					+' class="btn-group" role="group" aria-label="...">'
					+'<button'
					+'	style="font-size: 13px; font-weight: 40; border-style: none;"'
					+'	type="button" class="btn btn-default">'
					+'	<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>点赞'
					+   data[i].dz+'</button></div></span></div></div><hr>';
			}
		}else{
			myanswers+='<div class="row featurette" style="padding-left: 10px;padding-top: 10px;text-align:center;height:300px;">'
				+'<div class="col-md-7"><a style="float:center" href="/zhihu/page/homepage.jsp">还没有回答，快去逛一逛知乎吧！</a></div></div>';
		}
		document.getElementById("myself2").innerHTML = myanswers;
	},'json');
}

function My(){
	$.get("him/a1"+window.location.search,function(data){
		var total="";

		for(var i=0;i<data.length;i++){
			total+='<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/himself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">'+data[i].answer+'</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link is-active" href="javascript:void(0)" onclick="My()"> ta的 <span class="Tabs-meta">'+data[i].mine+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">'+data[i].question+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">'+data[i].fav+'</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="List-header"><h4 class="List-headerText"><div class="SubTabs">'
				+'<a class="SubTabs-item is-active" onclick="myessay()" href="javascript:void(0)" style="margin-top:20px">ta的文章</a>'
				+'</div>'
				+'</h4></div>';
		}

		document.getElementById("myself1").innerHTML = total;
	},'json');
	$.get("him/m4"+window.location.search,function(data){
		var my="";
		if(data.length>0){
			for(var i=0;i<data.length;i++){
				my+='<div class="row featurette" style="padding-left: 10px;padding-top: 10px"><div class="col-md-7"><h2 class="ContentItem-title">'
					+'<a href="/zhihu/page/article.jsp?eid='+data[i].tid+'">'+data[i].title+'</a></h2><br/>'
					+'<h2 class="featurette-heading" style="font-size: 13px;"> <img  src="'+data[i].tpic+'" style="width:50px;height:50px">&nbsp;&nbsp;&nbsp;'
					+data[i].uname+' &nbsp;&nbsp;&nbsp; <span class="text-muted"'
					+'style="font-size: 12px; font-weight: 300;">'+data[i].sign+'</span></h2>'
					+'<p class="lead" style="font-size: 14px;">'+data[i].content+'</p><br/>'
					+'<p class="text-muted" style="font-size: 14px; color:">发布于'+data[i].times+'</p>'
					+'<span><div style="width: 70px; float: left; height: 20px"'
					+' class="btn-group" role="group" aria-label="...">'
					+'<button'
					+'	style="font-size: 13px; font-weight: 40; border-style: none;"'
					+'	type="button" class="btn btn-default">'
					+'	<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>点赞'
					+   data[i].dz+'</button></div></span></div></div><hr>';

			}
		}else{
			my+='<div class="row featurette" style="padding-left: 10px;padding-top: 10px;text-align:center;height:300px;">'
				+'<div class="col-md-7"><a style="float:center" href="/zhihu/page/write.jsp">还没有文章，赶快发表一篇吧。。。</a></div></div>';
		}
		document.getElementById("myself2").innerHTML = my;
	},'json');
}

function MyQuestion(){
	$.get("him/a1"+window.location.search,function(data){
		var total="";
		for(var i=0;i<data.length;i++){
			total+='<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/himself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">'+data[i].answer+'</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> ta的 <span class="Tabs-meta">'+data[i].mine+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+'  class="Tabs-link is-active" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">'+data[i].question+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">'+data[i].fav+'</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="page-header" style="margin: 0px; width: 640px;">'
				+'<h2 style="padding-left: 10px; padding-top: 10px">ta的提问</h2>'
				+'</div>';
		}
		document.getElementById("myself1").innerHTML = total;
	},'json');

	$.get("him/m6"+window.location.search,function(data){
		var myquestions="";
		if(data.length>0){
			for(var i=0;i<data.length;i++){
				myquestions+='<div class="List-item"><div class="ContentItem" data-za-module="QuestionItem"'
					+'<h2 class="ContentItem-title"><div class="QuestionItem-title">'
					+'<a href="#" target="_blank">'+data[i].qtitle+'</a></div></h2>'
					+'<div class="ContentItem-status"><span class="ContentItem-statusItem">'
					+data[i].qtime+'</span> <span class="ContentItem-statusItem">'+data[i].sum+' 个回答</span></div></div></div>'
					+'</span></div></div>';
			}
		}else{
			myquestions+='<div class="row featurette" style="padding-left: 10px;padding-top: 10px;text-align:center;height:300px;">'
				+'<div class="col-md-7"><a style="float:center" href="/zhihu/page/question.jsp">还没有问题，可以去问一问哦！</a></div></div>';
		}
		document.getElementById("myself2").innerHTML = myquestions;
	},'json');
}

//ta的收藏
function myfavorite(){
	$.get("him/a1"+window.location.search,function(data){
		var total="";
		for(var i=0;i<data.length;i++){
			total+='<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/himself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">'+data[i].answer+'</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> ta的 <span class="Tabs-meta">'+data[i].mine+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">'+data[i].question+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link is-active"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">'+data[i].fav+'</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="page-header" style="margin: 0px; width: 640px;">'
				+'<h2 style="padding-left: 10px; padding-top: 10px">ta的收藏夹</h2>'
				+'</div>';
		}
		document.getElementById("myself1").innerHTML = total;
	},'json');
	$.get("him/m7"+window.location.search,function(data){
		var favorites="";
		if(data.length>0){
			for(var i=0;i<data.length;i++){
				favorites+='<div class="List-item"><div class="ContentItem" data-za-module="QuestionItem"'
					+'<h2 class="ContentItem-title"><div class="QuestionItem-title">'
					+'<a href="#" target="_blank">'+data[i].fname+'</a></div></h2>'
					+'<div class="ContentItem-status"><span class="ContentItem-statusItem">'
					+data[i].ftime+'</span> <span class="ContentItem-statusItem">'+data[i].sum+' 条内容</span></div></div></div>'
					+'</span></div></div>';

			}
		}else{
			favorites+='<div class="List-item" style="height:200px"><div class="ContentItem" data-za-module="QuestionItem">'
				+'<a style="float:center" href="/zhihu/page/homepage.jsp">还没有收藏，去看一看吧>></a></div></div>';
		}
		document.getElementById("myself2").innerHTML = favorites;
	},'json');

}


function MyAttention(){

	$.get("him/a1"+window.location.search,function(data){
		var total="";
		for(var i=0;i<data.length;i++){
			total+='<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/himself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">'+data[i].answer+'</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> ta的 <span class="Tabs-meta">'+data[i].mine+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">'+data[i].question+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">'+data[i].fav+'</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="List-header"><h4 class="List-headerText"><div class="SubTabs">'
				+'<a class="SubTabs-item is-active" href="javascript:void(0)" onclick="myatten()">ta关注的人</a>'
				+'<a class="SubTabs-item" href="javascript:void(0)" onclick="attenme()">关注ta的人</a><span class="SubTabs-item">'
				+'<div class="Popover"></div></span></div></h4></div>';
		}
		document.getElementById("myself1").innerHTML = total;
	},'json');

	$.get("him/m81"+window.location.search,function(data){
		var no='';
		if(data.length>0){
			var alluids=data;
			$.get("him/m82"+window.location.search,function(data){
				var x=data;
				if(alluids.length>0){
					var myattention='';
					for(var i=0;i<alluids.length;i++){
						var y=alluids[i].aimid;
						$.get("him/m8?aimid="+alluids[i].aimid,function(data){

							myattention+='<div class="List-item">'
								+'<div class="ContentItem" ><div class="ContentItem-main"><div class="ContentItem-image">'
								+'<span class="UserLink UserItem-avatar"><div class="Popover">'
								+'<div id="Popover-81043-7312-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-81043-7312-content">'
								+'<a class="UserLink-link" target="_blank" href="#">'
								+'<img class="Avatar Avatar--large UserLink-avatar" src="'+data.upic+'"  style="width: 60px; height: 60px;">'
								+'</a></div></div></span></div><div class="ContentItem-head"><h2 class="ContentItem-title">'
								+'<div class="UserItem-title"><span class="UserLink UserItem-name">'
								+'<div class="Popover"><div id="Popover-81046-20668-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-81046-20668-content">'
								+'<a class="UserLink-link" target="_blank" href="/page/himself?uids='+data.uids+'">'+data.uname+'</a></div>'
								+'</div></span></div></h2>';

							myattention+='<div class="ContentItem-meta"><div><div class="RichText">'+data.usign+'</div>'
							+'<div class="ContentItem-status"><span class="ContentItem-statusItem">'+data.myattenaw+'回答</span>'
							+'<span class="ContentItem-statusItem">'+data.myatteness+'文章</span>'
							+'<span class="ContentItem-statusItem">'+data.myattenpeos+' 关注者</span>'
							+'</div></div></div></div><div class="ContentItem-extra"><button type="button" id="btn_submit'+data.uids+'" class="btn btn-primary"'
							+' data-dismiss="modal" onclick="yesfav(this.id)" value="已关注">'
							+'<span id="guanzhu_name'+data.uids+'" aria-hidden="false" >已关注</span>'
							+'</button></div></div></div></div>'
							+'</span></div></div>';


							if((i-1) == (alluids.length-1)){

								document.getElementById("myself2").innerHTML = myattention;
							}else{
								alert(no);
							}

						},'json');

					}


				}
			},'json');
		}else{
			no+='<div class="List-item" style="height:200px"><div class="ContentItem" data-za-module="QuestionItem">'
				+'<a style="float:center" href="/zhihu/page/homepage.jsp">还没有关注的人，去看一看吧>></a></div></div>';
			document.getElementById("myself2").innerHTML = no;
		}
	},'json');	
}

function attenme(){
	$.get("him/a1"+window.location.search,function(data){

		var total="";
		for(var i=0;i<data.length;i++){
			total+='<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/himself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">'+data[i].answer+'</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> ta的 <span class="Tabs-meta">'+data[i].mine+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">'+data[i].question+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">'+data[i].fav+'</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="List-header"><h4 class="List-headerText"><div class="SubTabs">'
				+'<a class="SubTabs-item" href="javascript:void(0)" onclick="myatten()">ta关注的人</a>'
				+'<a class="SubTabs-item is-active" href="javascript:void(0)" onclick="attenme()">关注ta的人</a><span class="SubTabs-item">'
				+'<div class="Popover"></div></span></div></h4></div>';
		}
		document.getElementById("myself1").innerHTML = total;
	},'json');

	$.get("him/m82"+window.location.search,function(data){
		var o='';
		if(data.length>0){
			var all=data;
			$.get("him/m81"+window.location.search,function(data){
				var b=data;
				if(all.length>0){
					var info='';
					for(var i=0;i<all.length;i++){
						var x=all[i].selfid;
						$.get("him/m822?selfid="+all[i].selfid,function(data){
							info+='<div class="List-item">'
								+'<div class="ContentItem" ><div class="ContentItem-main"><div class="ContentItem-image">'
								+'<span class="UserLink UserItem-avatar"><div class="Popover">'
								+'<div id="Popover-81043-7312-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-81043-7312-content">'
								+'<a class="UserLink-link" target="_blank" href="#">'
								+'<img class="Avatar Avatar--large UserLink-avatar" src="'+data.upic+'"  style="width: 60px; height: 60px;">'
								+'</a></div></div></span></div><div class="ContentItem-head"><h2 class="ContentItem-title">'
								+'<div class="UserItem-title"><span class="UserLink UserItem-name">'
								+'<div class="Popover"><div id="Popover-81046-20668-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-81046-20668-content">'
								+'<a class="UserLink-link" target="_blank" href="/page/himself.jsp?uids='+data.uids+'">'+data.uname+'</a></div>'
								+'</div></span></div></h2>'


								+'<div class="ContentItem-meta"><div><div class="RichText">'+data.usign+'</div>'
								+'<div class="ContentItem-status"><span class="ContentItem-statusItem">'+data.myattenaw+'回答</span>'
								+'<span class="ContentItem-statusItem">'+data.myatteness+'文章</span>'
								+'<span class="ContentItem-statusItem">'+data.myattenpeos+' 关注者</span>'
								+'</div></div></div></div><div class="ContentItem-extra"><button type="button" id="btn_submit'+data.uids+'" class="btn btn-primary"'
								+' data-dismiss="modal" onclick="yesfav2(this.id)" value="+关注">'
								+'<span aria-hidden="true" id="guanzhu_name2'+data.uids+'"></span>+关注'
								+'</button></div></div></div></div>'
								+'</span></div></div>';



							if((i-1) == (all.length-1)){
								document.getElementById("myself2").innerHTML = info;
							}else{
								alert(no);
							}

						},'json');

					}
				}
			},'json');
		}else{
			o+='<div class="List-item" style="height:200px"><div class="ContentItem" data-za-module="QuestionItem">'
				+'<a style="float:center" href="/zhihu/page/homepage.jsp">还没有人关注你，多发一点动态吧~</a></div></div>';
			document.getElementById("myself2").innerHTML = o;
		}
	},'json');
}


function myatten(){
	MyAttention();
}

$.get("him/atten"+window.location.search,function(data){
	var atten='';
	alert(data)
	if(data == 1){
		atten+='<button'
			+' class="Button FollowButton Button--primary Button--blue"'
			+'type="button" onclick="yesfav()" value="已关注" id="btn_submit">'
			+'<span id="guanzhu_name" aria-hidden="false" >已关注</span></button>'
			+'<button class="Button" type="button">'
			+'<span>发私信</span>'
			+'</button>';
	}else{
		atten+='<button'
			+' class="Button FollowButton Button--primary Button--blue"'
			+'type="button" onclick="yesfav()" value="+关注" id="btn_submit">'
			+'<span id="guanzhu_name" aria-hidden="false" >+关注</span></button>'
			+'<button class="Button" type="button">'
			+'<span>发私信</span>'
			+'</button>';
	}

	document.getElementById("atten").innerHTML = atten;
},'json');

function yesfav(){
	var txt=document.getElementById("btn_submit").value;
	alert(txt);
	if(txt=="已关注"){
		alert(2);
		$("#guanzhu_name").html("+关注");
		document.getElementById("btn_submit").value="+关注";
		$.get("him/change"+window.location.search,function(date){
			alert("取关")
		});
	}else if(txt=="+关注"){
		alert(3);
		$("#guanzhu_name").html("已关注");
		document.getElementById("btn_submit").value="已关注";
		$.get("him/change2"+window.location.search,function(date){
			alert("加关")
		});
	}
}
