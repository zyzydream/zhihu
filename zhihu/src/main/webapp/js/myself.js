function myansrer33(){
	$.get("dynstate/showtoppic",function(data){
		var a="";
		if(data.length>0){
			for(var i=0;i<data.length;i++){
				a+="<img src='"+data[i].toppic+"' height='132px' width='966px' />";
			}
		}
		document.getElementById("showImage_gr").innerHTML = a;
	},'json');

	$.get("dynstate/a1",function(data){
		var total="";
		for(var i=0;i<data.length;i++){
			total+='<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link is-active" href="/zhihu/page/myself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">'+data[i].answer+'</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> 我的 <span class="Tabs-meta">'+data[i].mine+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">'+data[i].question+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">'+data[i].fav+'</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="page-header" style="margin: 0px; width: 640px;">'
				+'<h2 style="padding-left: 10px; padding-top: 10px">我的动态</h2>'
				+'</div>';
		}
		document.getElementById("myself1").innerHTML = total;
	},'json');
}

$.get("dynstate/upic",function(data){
	var upic='';
	upic+='<form enctype="multipart/form-data" target="uploadFrame"'
		+'action="dynstate/upload2" method="post" name="form"'
		+'	id="uploadupic">'
		+'	<div class="UserAvatar">'
		+'		<div id="hhh">'
		+'		<img id="img_icon"'
		+'			class="Avatar Avatar--large UserAvatar-inner"'
		+'			src="'+data.upic+'"'
		+'			style="width: 160px; height: 160px;"'
		+'			onclick="updateimg(this)"> </div>'
		+'	</div>'
		+'	<input id="img_icon_file" type="file"'
		+'		accept="image/png,image/jpeg" style="display: none;"'
		+'		onchange="previewMultipleImage_icon()" name="picData"/>'
		+'</form>'
		+'<iframe name="uploadFrame2" id="uploadFrame2"'
		+'			style="display: none;"></iframe>';

	document.getElementById("userava").innerHTML = upic;

	var topupic='';
	topupic+='<img class="Avatar" src="'+data.upic+'" style="width: 30px; height: 30px;">';
	document.getElementById("Popover-21677-9959-toggle").innerHTML = topupic;
},'json');

$.get("dynstate/right",function(data){
	var right='';
	right+='<div class="totalinfos" style="margin-top:20px">'
		+'<table class="table table-striped"'
		+'	style="width: 300px; text-align: left; float: right; margin-right: -60px; margin-top: -170px">'
		+'	<tr>'
		+'		<td class="info">关注的话题</td>'
		+'		<td class="info">'+data.myattentop+'</td>'
		+'	</tr>'
		+'	<tr>'
		+'		<td class="info">关注的专题</td>'
		+'		<td class="info">'+data.myattenzhuanlan+'</td>'
		+'	</tr>'
		+'	<tr>'
		+'		<td class="info">关注的收藏夹</td>'
		+'		<td class="info">'+data.myattenfav+'</td>'
		+'	</tr>'
		+'</table>'
		+'</div>'
		+'<div class="panel panel-default"'
		+'style="width: 283px; height: 120px; margin-left: 700px; margin-top: -318px">'
		+'<div class="panel-body" style="margin-top:20px">'
		+'	<ul class="list-inline">'
		+'		<li style="padding-left: 40px; padding-top: 10px;">关注了</li>'
		+'		<li style="padding-left: 80px; padding-top: 10px;">关注者</li>'
		+'	</ul>'
		+'	<ul class="list-inline">'
		+'		<li'
		+'			style="padding-left: 40px; padding-top: 10px; text-align: center">'+data.myatten+'</li>'
		+'		<li'
		+'			style="padding-left: 120px; padding-top: 10px; text-align: center">'+data.attenme+'</li>'
		+'	</ul>'
		+'</div>'
		+'</div>';
	document.getElementById("rightmyself").innerHTML = right;


	var des='';
	alert("编辑个人资料")
	des+='<a class="Button Button--blue" type="button"'
		+' href="/zhihu/page/design.jsp?uids='+data.uids+'">编辑个人资料</a>';
	document.getElementById("bianji").innerHTML = des;
	for(var i=0;i<data.length;i++){
		right+='<div class="totalinfos" style="margin-top:20px">'
			+'<table class="table table-striped"'
			+'	style="width: 300px; text-align: left; float: right; margin-right: -60px; margin-top: -170px">'
			+'	<tr>'
			+'		<td class="info">关注的话题</td>'
			+'		<td class="info">'+data.myattentop+'</td>'
			+'	</tr>'
			
			+'	<tr>'
			+'		<td class="info">关注的收藏夹</td>'
			+'		<td class="info">'+data.myattenfav+'</td>'
			+'	</tr>'
			+'</table>'
			+'</div>'
			+'<div class="panel panel-default"'
			+'style="width: 283px; height: 120px; margin-left: 700px; margin-top: -318px">'
			+'<div class="panel-body" style="margin-top:20px">'
			+'	<ul class="list-inline">'
			+'		<li style="padding-left: 40px; padding-top: 10px;">关注了</li>'
			+'		<li style="padding-left: 80px; padding-top: 10px;">关注者</li>'
			+'	</ul>'
			+'	<ul class="list-inline">'
			+'		<li'
			+'			style="padding-left: 40px; padding-top: 10px; text-align: center">'+data.myatten+'</li>'
			+'		<li'
			+'			style="padding-left: 120px; padding-top: 10px; text-align: center">'+data.attenme+'</li>'
			+'	</ul>'
			+'</div>'
			+'</div>';
		document.getElementById("rightmyself").innerHTML = right;
	}
},'json');

$.get("dynstate/m1",function(data){
	alert(data);
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

},'json');

//回答
function Myanswer3(){
	$.get("dynstate/a1",function(data){
		var total="";
		for(var i=0;i<data.length;i++){
			total+='<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/myself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link is-active" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">'+data[i].answer+'</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> 我的 <span class="Tabs-meta">'+data[i].mine+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">'+data[i].question+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">'+data[i].fav+'</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="page-header" style="margin: 0px; width: 640px;">'
				+'<h2 style="padding-left: 10px; padding-top: 10px">我的回答</h2>'
				+'</div>';
		}
		document.getElementById("myself1").innerHTML = total;
	},'json');

	$.get("dynstate/m3",function(data){
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

function addfav(){
	$.get("dynstate/m7",function(data){
		alert(data);
		var info="";
		if(data.length>0){
			for(var i=0;i<data.length;i++){
				info+='<li role="presentation"><a role="menuitem" tabindex="-1"'
					+' href="#">'+data[i].fname+'</a></li>';
			}
			document.getElementById("dropdown-menu").innerHTML = info;
		}else{
			info+='<div class="modal-header">'
				+'<button type="button" class="close" data-dismiss="modal"'
				+'	aria-label="Close">'
				+'	<span aria-hidden="true">×</span>'
				+'</button>'
				+'<h4 class="modal-title" id="myModalLabel">添加收藏</h4>'
				+'<h5>请选择你想添加的收藏夹</h5>'
				+'</div>'
				+'<div class="modal-body">'
				+'<span><a id="createfav" href="javascript:void(0)" onclick="createfav()">当前没有收藏夹，请创建一个收藏夹</a><span>'
				+'</div>';
			document.getElementById("favinfos").innerHTML = info;
		}
	},'json');
	$('#myModal').modal();
}

function createfav(){
	$('#myModal2').modal();
}

/*function yesfav(){
	$.post("dynstate/createf",function(data){
		alert(1);
	})
}*/

function My(){
	$.get("dynstate/a1",function(data){
		var total="";

		for(var i=0;i<data.length;i++){
			total+='<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/myself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">'+data[i].answer+'</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link is-active" href="javascript:void(0)" onclick="My()"> 我的 <span class="Tabs-meta">'+data[i].mine+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">'+data[i].question+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">'+data[i].fav+'</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="List-header"><h4 class="List-headerText"><div class="SubTabs">'
				+'<a class="SubTabs-item is-active" onclick="myessay()" href="javascript:void(0)" style="margin-top:20px">我的文章</a>'
				+'<a class="SubTabs-item" href="javascript:void(0)" onclick="myscolumn()" style="margin-top:20px">我的专栏</a></div>'
				+'</h4></div>';
		}

		document.getElementById("myself1").innerHTML = total;
	},'json');
	$.get("dynstate/m4",function(data){
		var my="";
		if(data.length>0){
			for(var i=0;i<data.length;i++){
				my+='<div class="row featurette" style="padding-left: 10px;padding-top: 10px"><div class="col-md-7"><h2 class="ContentItem-title">'
					+'<a href="/zhihu/page/article.jsp?eid='+data[i].tid+'">'+data[i].title+'</a></h2><br/>'
					+'<h2 class="featurette-heading" style="font-size: 13px;"> <img  src="/zhihu/images/touxiang.jpg" style="width:50px;height:50px">&nbsp;&nbsp;&nbsp;'
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

function myscolumn(){

}

function MyQuestion(){
	$.get("dynstate/a1",function(data){
		var total="";
		for(var i=0;i<data.length;i++){
			total+='<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/myself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">'+data[i].answer+'</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> 我的 <span class="Tabs-meta">'+data[i].mine+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+'  class="Tabs-link is-active" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">'+data[i].question+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">'+data[i].fav+'</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="page-header" style="margin: 0px; width: 640px;">'
				+'<h2 style="padding-left: 10px; padding-top: 10px">我的提问</h2>'
				+'</div>';
		}
		document.getElementById("myself1").innerHTML = total;
	},'json');

	$.get("dynstate/m6",function(data){
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


function myfavorite(){
	$.get("dynstate/a1",function(data){
		var total="";
		for(var i=0;i<data.length;i++){
			total+='<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/myself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">'+data[i].answer+'</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> 我的 <span class="Tabs-meta">'+data[i].mine+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">'+data[i].question+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link is-active"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">'+data[i].fav+'</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="page-header" style="margin: 0px; width: 640px;">'
				+'<h2 style="padding-left: 10px; padding-top: 10px">我的收藏夹</h2>'
				+'</div>';
		}
		document.getElementById("myself1").innerHTML = total;
	},'json');
	$.get("dynstate/m7",function(data){
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

/*我的关注*/
function MyAttention(){

	$.get("dynstate/a1",function(data){
		var total="";
		for(var i=0;i<data.length;i++){
			total+='<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/myself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">'+data[i].answer+'</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> 我的 <span class="Tabs-meta">'+data[i].mine+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">'+data[i].question+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">'+data[i].fav+'</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="List-header"><h4 class="List-headerText"><div class="SubTabs">'
				+'<a class="SubTabs-item is-active" href="javascript:void(0)" onclick="myatten()">我关注的人</a>'
				+'<a class="SubTabs-item" href="javascript:void(0)" onclick="attenme()">关注我的人</a><span class="SubTabs-item">'
				+'<div class="Popover"></div></span></div></h4></div>';
		}
		document.getElementById("myself1").innerHTML = total;
	},'json');

	$.get("dynstate/m81",function(data){
		var no='';
		if(data.length>0){
			var alluids=data;
			$.get("dynstate/m82",function(data){
				var x=data;
				if(alluids.length>0){
					var myattention='';
					for(var i=0;i<alluids.length;i++){
						var y=alluids[i].aimid;
						$.get("dynstate/m8?aimid="+alluids[i].aimid,function(data){

							myattention+='<div class="List-item">'
								+'<div class="ContentItem" ><div class="ContentItem-main"><div class="ContentItem-image">'
								+'<span class="UserLink UserItem-avatar"><div class="Popover">'
								+'<div id="Popover-81043-7312-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-81043-7312-content">'
								+'<a class="UserLink-link" target="_blank" href="#">'
								+'<img class="Avatar Avatar--large UserLink-avatar" src="'+data.upic+'"  style="width: 60px; height: 60px;">'
								+'</a></div></div></span></div><div class="ContentItem-head"><h2 class="ContentItem-title">'
								+'<div class="UserItem-title"><span class="UserLink UserItem-name">'
								+'<div class="Popover"><div id="Popover-81046-20668-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-81046-20668-content">'
								+'<a class="UserLink-link" target="_blank" href="/people/cheng-cheng-8-22">'+data.uname+'</a></div>'
								+'</div></span><span class="FollowStatus" id="showattenyn">他没有关注你</span></div></h2>';
							for(var j=0;j<x.length;j++){
								if(y==x[j].selfid){
									$('.showattenyn').val("互相关注");
								}
							}
							myattention+='<div class="ContentItem-meta"><div><div class="RichText">'+data.usign+'</div>'
							+'<div class="ContentItem-status"><span class="ContentItem-statusItem">'+data.myattenaw+'回答</span>'
							+'<span class="ContentItem-statusItem">'+data.myatteness+'文章</span>'
							+'<span class="ContentItem-statusItem">'+data.myattenpeos+' 关注者</span>'
							+'</div></div></div></div><div class="ContentItem-extra"><button type="button" id="btn_submit" class="btn btn-primary"'
							+' data-dismiss="modal" onclick="yesfav()" value="已关注">'
							+'<span id="guanzhu_name" aria-hidden="false" >已关注</span>'
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

function myatten(){
	MyAttention();
}


function attenme(){
	$.get("dynstate/a1",function(data){

		var total="";
		for(var i=0;i<data.length;i++){
			total+='<div class="header1"><ul class="Tabs ProfileMain-tabs" role="tablist">'
				+'<li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-activities"><a'
				+' class="Tabs-link" href="/zhihu/page/myself.jsp">动态</a></li>'
				+'<li class="Tabs-item" role="tab" aria-controls="Profile-answers">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="Myanswer3()"> 回答 '
				+'<span class="Tabs-meta">'+data[i].answer+'</span></a></li><li class="Tabs-item" role="tab" aria-controls="Profile-posts">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="My()"> 我的 <span class="Tabs-meta">'+data[i].mine+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a'
				+' class="Tabs-link" href="javascript:void(0)" onclick="MyQuestion()"> 提问 <span class="Tabs-meta">'+data[i].question+'</span>'
				+'</a></li><li class="Tabs-item" role="tab" aria-controls="Profile-collections"><a class="Tabs-link"'
				+' href="javascript:void(0)" onclick="myfavorite()"> 收藏 <span class="Tabs-meta">'+data[i].fav+'</span>'
				+'</a></li><li class="Tabs-item Tabs-item--noMeta" role="tab" aria-controls="Profile-following">'
				+'<a class="Tabs-link" href="javascript:void(0)" onclick="MyAttention()">关注</a></li></ul>'
				+'</div><div class="List-header"><h4 class="List-headerText"><div class="SubTabs">'
				+'<a class="SubTabs-item" href="javascript:void(0)" onclick="myatten()">我关注的人</a>'
				+'<a class="SubTabs-item is-active" href="javascript:void(0)" onclick="attenme()">关注我的人</a><span class="SubTabs-item">'
				+'<div class="Popover"></div></span></div></h4></div>';
		}
		document.getElementById("myself1").innerHTML = total;
	},'json');

	$.get("dynstate/m82",function(data){
		var o='';
		if(data.length>0){
			var all=data;
			$.get("dynstate/m81",function(data){
				var b=data;
				if(all.length>0){
					var info='';
					for(var i=0;i<all.length;i++){
						var x=all[i].selfid;
						$.get("dynstate/m822?selfid="+all[i].selfid,function(data){
							info+='<div class="List-item">'
								+'<div class="ContentItem" ><div class="ContentItem-main"><div class="ContentItem-image">'
								+'<span class="UserLink UserItem-avatar"><div class="Popover">'
								+'<div id="Popover-81043-7312-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-81043-7312-content">'
								+'<a class="UserLink-link" target="_blank" href="#">'
								+'<img class="Avatar Avatar--large UserLink-avatar" src="'+data.upic+'"  style="width: 60px; height: 60px;">'
								+'</a></div></div></span></div><div class="ContentItem-head"><h2 class="ContentItem-title">'
								+'<div class="UserItem-title"><span class="UserLink UserItem-name">'
								+'<div class="Popover"><div id="Popover-81046-20668-toggle" aria-haspopup="true" aria-expanded="false" aria-owns="Popover-81046-20668-content">'
								+'<a class="UserLink-link" target="_blank" href="/people/cheng-cheng-8-22">'+data.uname+'</a></div>'
								+'</div></span><span class="FollowStatus" id="showattenyn">你没有关注他</span></div></h2>'


								+'<div class="ContentItem-meta"><div><div class="RichText">'+data.usign+'</div>'
								+'<div class="ContentItem-status"><span class="ContentItem-statusItem">'+data.myattenaw+'回答</span>'
								+'<span class="ContentItem-statusItem">'+data.myatteness+'文章</span>'
								+'<span class="ContentItem-statusItem">'+data.myattenpeos+' 关注者</span>'
								+'</div></div></div></div><div class="ContentItem-extra"><button type="button" id="btn_submit" class="btn btn-primary"'
								+' data-dismiss="modal" onclick="yesfav()" value="+关注">'
								+'<span aria-hidden="true" ></span>+关注'
								+'</button></div></div></div></div>'
								+'</span></div></div>';

							for(var j=0;j<b.length;j++){
								if(b[j]==x){
									$('.showattenyn').val("相互关注");
									$('.btn_submit').val("已关注")
								}
							}

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

$(".btn_submit").click(function(){
	var txt=document.getElementById("btn_submit").value;
	alert(JSON.stringify(txt)=="已关注");
	if(JSON.stringify(txt)=="+关注"){
		alert(1);
		document.getElementById("btn_submit").innerHTML=="已关注";
	}else if(JSON.stringify(txt)=="已关注"){
		alert(2);
		document.getElementById("btn_submit").innerHTML=="+关注";
	}
});

function yesfav(){

	var txt=document.getElementById("btn_submit").value;
	alert(txt);

	if(btn_submit.value=="已关注"){
		alert(2);
		$("#guanzhu_name").html("+关注");
		document.getElementById("btn_submit").value="+关注";
	}else if(btn_submit.value=="+关注"){
		alert(3);
		$("#guanzhu_name").html("已关注");
		document.getElementById("btn_submit").value="已关注";
	}
}

$('#changgeimage').hover(function() {
	layer.tips("上传一张图片，展示在这里", '.DynamicColorButton', {
		time : 6000,
		tips : [ 2, "#3c3c3c" ]
	})
}, function() {
	layer.closeAll('tips');
});



function chgPic(obj){
	$("#changgeimage").attr("src", window.URL.createObjectURL(obj.files[0]));
}


function editor(){
	url:'/zhihu/page/ediuorinfo.jsp'
}

function previewMultipleImage() {	
	var reader = new FileReader();
	var file = document.getElementById("changgeimage").files[0]
	reader.readAsDataURL(file);
	reader.onload = function(evt) {
		$('#showImage_gr').html("<img src='"+evt.target.result+"' height='132px' width='966px' />");
	};	

	document.myform.submit();
}

function previewMultipleImage_icon() {	
	var reader = new FileReader();
	var file = document.getElementById("img_icon_file").files[0]
	reader.readAsDataURL(file);
	reader.onload = function(evt) {
		$('#hhh').html("<img id='img_icon' class='Avatar Avatar--large UserAvatar-inner' src='"+evt.target.result+"' style='width: 160px; height: 160px;' onclick='updateimg(this)'/>");
	};	

	document.form.submit();
}


function updateimg(obj){
	//var img=$(obj).attr("src");
	document.getElementById("img_icon_file").click();

}






