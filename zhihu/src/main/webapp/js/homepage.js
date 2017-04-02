//document.getElementById("name").innerHTML="zy";
console.log($("#seflmain"));
console.log(document.getElementById("seflmain"));

//请求最新动态
$.get("user/dynstate",function(data){
	var dynstate="";
	for(var i=0;i<data.length;i++){
		dynstate+='<div class="row featurette"><div class="col-md-7">';
		dynstate+='<h2 class="featurette-heading" style="font-size: 20px;">';
		dynstate+='<span class="text-muted" style="font-size: 13px">来自话题：'+data[i].ttopic+'</span><br/>'+data[i].etitle+'</h2>';
		dynstate+='<h2 class="featurette-heading" style="font-size: 13px;">'+data[i].uname+' &nbsp;&nbsp;&nbsp;';
		dynstate+='<span class="text-muted" style="font-size: 12px;font-weight: 300;">'+data[i].usign+'</span></h2>';
		dynstate+='<p class="lead" style="font-size: 14px;">'+data[i].econtent+'</p>';
		dynstate+='<span><a href="#" style="font-size:x-small;font-weight: lighter;margin-left: 5px">阅览 <span class="badge" style="width: 17px;padding: 0px;">42</span></a>&nbsp;&nbsp;';
		dynstate+='<a href="#" style="font-size:x-small;font-weight: lighter;margin-left: 5px">点赞 <span class="badge" style="width: 17px;padding: 0px;">42</span></a>&nbsp;&nbsp;';
		dynstate+='<a href="#" style="font-size:x-small;font-weight: lighter;margin-left: 5px">收藏 <span class="badge" style="width: 17px;padding: 0px;">42</span></a></span></div>';
		dynstate+='<div class="col-md-5"><img class="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto"';
		dynstate+='tppabs="http://v3.bootcss.com/examples/carousel/holder.js/500x500/auto" alt="Generic placeholder image"></div></div>';
		dynstate+='<hr class="featurette-divider" style="margin-top:10px;">';
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