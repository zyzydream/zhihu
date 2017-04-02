//请求推荐阅读nextElementSibling
$.get("explore/dynstate",function(data){
	var dynstate="";
	for(var i=0;i<data.length;i++){
		dynstate+='<div class="row featurette" onmouseover="showdetail(this)" onmouseleave="closedetail(this)"><div class="col-md-7">';
		dynstate+='<h2 class="featurette-heading" style="font-size:16px;">';
		dynstate+='<span class="text-muted" style="font-size: 13px;font-weight: 300;">来自话题：'+data[i].tname+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data[i].title+'</h2>';
		dynstate+='<span hidden="true"><p class="lead" style="font-size: 14px;">'+data[i].content+'</p>';
		dynstate+='<span><a href="#" style="font-size:x-small;font-weight: lighter;margin-left: 5px">阅览 <span class="badge" style="width: 17px;padding: 0px;">42</span></a>&nbsp;&nbsp;';
		dynstate+='<a href="#" style="font-size:x-small;font-weight: lighter;margin-left: 5px">点赞 <span class="badge" style="width: 17px;padding: 0px;">42</span></a>&nbsp;&nbsp;';
		dynstate+='<a href="#" style="font-size:x-small;font-weight: lighter;margin-left: 5px">收藏 <span class="badge" style="width: 17px;padding: 0px;">42</span></a></span></span></div></div><hr class="featurette-divider">';
	}
	document.getElementById("seflmain").innerHTML = dynstate;
},"json");

function showdetail(self){
	self.childNodes[0].firstChild.nextElementSibling.hidden=false;
}
function closedetail(self){
	console.log(self);
	self.childNodes[0].firstChild.nextElementSibling.hidden=true;
}
