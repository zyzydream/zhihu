//document.getElementById("name").innerHTML="zy";
console.log($("#seflmain"));
console.log(document.getElementById("seflmain"));

//请求最新动态
$.get("user/dynstate",function(data){
	var dynstate="";
	for(var i=0;i<data.length;i++){
		//alert(data);
		if(data[i].kind=="W"){
			dynstate+='<div class="row featurette"><div class="col-md-7">';
			dynstate+='<h2 class="featurette-heading" style="font-size: 20px;">';
			dynstate+='<span class="text-muted" style="font-size: 13px">来自话题：'+data[i].tname+'</span><br/>'+data[i].title+'</h2>';
			dynstate+='<h2 class="featurette-heading" style="font-size: 13px;">'+data[i].author+' &nbsp;&nbsp;&nbsp;';
			dynstate+='<span class="text-muted" style="font-size: 12px;font-weight: 300;">'+data[i].usign+'</span></h2>';
			dynstate+='<p class="lead" style="font-size: 14px;">'+data[i].content+'</p>';
			dynstate+='<span><a href="#" style="font-size:x-small;font-weight: lighter;margin-left: 5px">阅览 <span class="badge" style="width: 17px;padding: 0px;">42</span></a>&nbsp;&nbsp;';
			dynstate+='<a href="#" style="font-size:x-small;font-weight: lighter;margin-left: 5px">点赞 <span class="badge" style="width: 17px;padding: 0px;">'+data[i].praise+'</span></a>&nbsp;&nbsp;';
			dynstate+='<a href="#" style="font-size:x-small;font-weight: lighter;margin-left: 5px">收藏 <span class="badge" style="width: 17px;padding: 0px;">'+data[i].collect+'</span></a></span></div>';
			dynstate+='<div class="col-md-5"><img class="featurette-image img-responsive center-block" src="images/game.jpg" data-src="holder.js/500x500/auto"';
			dynstate+='tppabs="http://v3.bootcss.com/examples/carousel/holder.js/500x500/auto" alt="Generic placeholder image"></div></div>';
			dynstate+='<hr class="featurette-divider" style="margin-top:10px;">';
		}else if(data[i].kind=="FW"){
			dynstate+='<div class="row featurette"><div class="col-md-7">';
			dynstate+='<h2 class="featurette-heading" style="font-size: 20px;"><span class="text-muted" style="font-size: 15px">'+data[i].author+':发表文章：</span><br />'+data[i].title+'</h2>';
			dynstate+='<p class="lead" style="font-size: 14px;">'+data[i].content+'</p>';
			dynstate+='<span><a href="#" style="font-size: 13px;font-weight: 40">阅览 <span class="badge" style="width: 20px;padding: 0px;">42</span></a>';
			dynstate+='<a href="#" style="font-size: 13px;font-weight: 40">点赞 <span class="badge" style="width: 20px;padding: 0px;">'+data[i].praise+'</span></a>';
			dynstate+='<a href="#" style="font-size: 13px;font-weight: 40">收藏 <span class="badge" style="width: 20px;padding: 0px;">'+data[i].collect+'</span></a></span>';
			dynstate+='</div><div class="col-md-5"><label style="float: right;font-size: 15px; font-weight: lighter;">'+data[i].times+'</label>';
			dynstate+='<img class="featurette-image img-responsive center-block" src="images/game.jpg" data-src="holder.js/500x500/auto" tppabs="http://v3.bootcss.com/examples/carousel/holder.js/500x500/auto"alt="Generic placeholder image">';
			dynstate+='</div></div><hr class="featurette-divider">';
		}else if(data[i].kind=="FQ"){
			dynstate+='<div class="row featurette"><div class="col-md-7">';
			dynstate+='<h2 class="featurette-heading" style="font-size: 20px;"><span class="text-muted" style="font-size: 15px">'+data[i].author+':提出问题：</span><br />'+data[i].title+'</h2>'
			dynstate+='<span><a href="#" style="font-size: 13px;font-weight: 40">阅览 <span class="badge" style="width: 20px;padding: 0px;">42</span></a>';
			dynstate+='<a href="#" style="font-size: 13px;font-weight: 40">点赞 <span class="badge" style="width: 20px;padding: 0px;">'+data[i].praise+'</span></a>';
			dynstate+='<a href="#" style="font-size: 13px;font-weight: 40">收藏 <span class="badge" style="width: 20px;padding: 0px;">'+data[i].collect+'</span></a></span>';
			dynstate+='</div><div class="col-md-5"><label style="float: right;font-size: 15px; font-weight: lighter;">'+data[i].times+'</label>';
			dynstate+='<img class="featurette-image img-responsive center-block"data-src="holder.js/500x500/auto" tppabs="http://v3.bootcss.com/examples/carousel/holder.js/500x500/auto" alt=""></div></div>';
			dynstate+='<hr class="featurette-divider">';
		}else if(data[i].kind=="GH"){
			dynstate+='<div class="row featurette"><div class="col-md-7">';
			dynstate+='<h2 class="featurette-heading" style="font-size: 18px;"><span class="text-muted" style="font-size: 15px">'+data[i].author+':关注话题：</span><br /><img alt="" src="images/game.png" width="60px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data[i].tname+'</h2></div>';
			dynstate+='<div class="col-md-5" ><label style="float: right;font-size: 15px; font-weight: lighter;">'+data[i].times+'</label>';
			dynstate+='</div></div><hr class="featurette-divider">';
		}
	}
	document.getElementById("seflmain").innerHTML = dynstate;
},"json");

//请求用户关注话题
$.get("user/topics",function(data){
	alert("请求的话题："+JSON.stringify(data));
	var topics="";
	for(var i=0;i<data.length;i++){
		topics+='<a class="HomeTopics-item zm-item-tag" href="/topic/19550517" target="_blank">'+data[i].ttopic+'</a>';
	}
	document.getElementById("title").innerHTML =topics;
},"json");


//点击进入发现
function find(){
	$.get("/explore");
}