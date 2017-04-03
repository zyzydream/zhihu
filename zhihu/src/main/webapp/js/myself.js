$.get("dynstate/m1",function(data){
	alert("回答："+JSON.stringify(data));
	var myanswers="";
	for(var i=0;i<data.length;i++){
		myanswers+='<div class="row featurette" style="padding-left: 10px;padding-top: 10px"><div class="col-md-7"><h2 class="featurette-heading" style="font-size: 20px;">'
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
