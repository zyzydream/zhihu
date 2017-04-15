var url=location.search;
var str="";
var pagenum=1;
var all="";

more(0);

if(url.indexOf("?")!=-1){
	var strs=new Array();
	strs=url.substr(1).split("&&");
	var str=strs[0];
	alert(str);
	alert(strs[1].split("=")[1]);
	document.getElementById("topicname").innerHTML = strs[1].split("=")[1];
}

function more(num){
	$.get("favorite/all",function(date){
		pagenum+=num;
		var favorite=date;
		$.get("topic/allExplore?"+str+"&&tstid="+pagenum+"" ,function(data){
			alert(pagenum);
			//alert(JSON.stringify(data));
			var info="";
			for(var i=0;i<data.length;i++){
				var aaaa="";
				aaaa+='<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">';
				//alert(JSON.stringify(favorite));
				for(var j=0;j<favorite.length;j++){
					//alert(favorite[j].fname);
					aaaa+='<li role="presentation"><a role="menuitem" tabindex="-1" onclick="collect(\''+data[i].ids+'\',\''+data[i].kind+'\',\''+favorite[j].fid+'\')">'+favorite[j].fname+'</a></li>';
				}
				aaaa+='<li role="presentation" class="divider"></li>';
				aaaa+='<li role="presentation"><a><span class="glyphicon glyphicon-plus"  aria-hidden="true"></span>新建收藏夹</a></li>';
				aaaa+='</ul>';
				info+='<div class="row featurette"><div class="col-md-7"><h2 class="featurette-heading" style="font-size: 20px;"><br />'+data[i].title+'</h2>';
				info+='<h2 class="featurette-heading" style="font-size: 13px;">'+data[i].author+' &nbsp;&nbsp;&nbsp; <span class="text-muted" style="font-size: 12px; font-weight: 300;">'+data[i].usign+'</span></h2>';
				info+='<p class="lead" style="font-size: 14px;">'+data[i].content+'</p><span>';
				if(data[i].ycollent=='n'){
					info+='<div style="width: 70px;float: left;height: 25px"><a style="font-size: 13px;font-weight: 40;border-style: none;" class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span> 收藏  '+data[i].collect+'</a>'+aaaa+'</div>';
				}else if(data[i].ycollent=='y'){
					info+='<div style="width: 100px;float: left;height: 25px"><a style="font-size: 13px;font-weight: 40;border-style: none;" class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true" onclick="delcollect(\''+data[i].ids+'\',\''+data[i].kind+'\')"><span class="glyphicon glyphicon-ok-sign" aria-hidden="true"></span> 取消收藏  '+data[i].collect+'</a></div>';
				}else{
					info+='<div style="width: 70px;float: left;height: 25px"><a style="font-size: 13px;font-weight: 40;border-style: none;" class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span> 收藏  '+data[i].collect+'</a>'+aaaa+'</div>';
				}
				if(data[i].ypraise=='n'){
				    info+='<div style="width: 70px;float: left;height: 25px" class="btn-group" role="group" aria-label="..."><button  style="font-size: 13px;font-weight: 40;border-style: none;" type="button" class="btn btn-default"  onclick="praise(\''+data[i].ids+'\',\''+data[i].kind+'\')"><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>点赞  '+data[i].praise+'</button></div>';
				}else if(data[i].ypraise=='y'){
				    info+='<div style="width: 100px;float: left;height: 25px" class="btn-group" role="group" aria-label="..."><button  style="font-size: 13px;font-weight: 40;border-style: none;" type="button" class="btn btn-default"  onclick="delpraise(\''+data[i].ids+'\',\''+data[i].kind+'\')"><span class="glyphicon glyphicon-star" aria-hidden="true"></span>取消点赞  '+data[i].praise+'</button></div>';
				}else{
				    info+='<div style="width: 70px;float: left;height: 25px" class="btn-group" role="group" aria-label="..."><button  style="font-size: 13px;font-weight: 40;border-style: none;" type="button" class="btn btn-default"  onclick="praise(\''+data[i].ids+'\',\''+data[i].kind+'\')"><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>点赞  '+data[i].praise+'</button></div>';
				}
				info+='<div style="width: 70px;float: left;height: 20px" class="btn-group" role="group" aria-label="..."><button  style="font-size: 13px;font-weight: 40;border-style: none;" type="button" class="btn btn-default"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>阅览  42</button></div>';
				info+='</span></div><div class="col-md-5"><label style="float: right;font-size: 15px; font-weight: lighter;">'+data[i].times+'</label>';
				info+='<img class="featurette-image img-responsive center-block" src="" data-src="holder.js/500x500/auto" tppabs="http://v3.bootcss.com/examples/carousel/holder.js/500x500/auto"alt="">';
				info+='</div></div><hr class="featurette-divider">';
			}
			document.getElementById("seflmain").innerHTML = info;
			document.getElementById("more").innerHTML ='<li><a href="javascript:void(0)" onclick="more(1)">more</a></li>';
		},"json");
	}
	,"json");
}

function selectExplore(num){
	$.get("favorite/all",function(date){
		pagenum+=num;
		var favorite=date;
		$.get("topic/selectExplore?"+str+"&&tstid="+pagenum+"" ,function(data){
			alert(pagenum);
			//alert(JSON.stringify(data));
			var info="";
			for(var i=0;i<data.length;i++){
				var aaaa="";
				aaaa+='<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">';
				//alert(JSON.stringify(favorite));
				for(var j=0;j<favorite.length;j++){
					//alert(favorite[j].fname);
					aaaa+='<li role="presentation"><a role="menuitem" tabindex="-1" onclick="collect(\''+data[i].ids+'\',\''+data[i].kind+'\',\''+favorite[j].fid+'\')">'+favorite[j].fname+'</a></li>';
				}
				aaaa+='<li role="presentation" class="divider"></li>';
				aaaa+='<li role="presentation"><a><span class="glyphicon glyphicon-plus"  aria-hidden="true"></span>新建收藏夹</a></li>';
				aaaa+='</ul>';
				info+='<div class="row featurette"><div class="col-md-7"><h2 class="featurette-heading" style="font-size: 20px;"><br />'+data[i].title+'</h2>';
				info+='<h2 class="featurette-heading" style="font-size: 13px;">'+data[i].author+' &nbsp;&nbsp;&nbsp; <span class="text-muted" style="font-size: 12px; font-weight: 300;">'+data[i].usign+'</span></h2>';
				info+='<p class="lead" style="font-size: 14px;">'+data[i].content+'</p><span>';
				if(data[i].ycollent=='n'){
					info+='<div style="width: 70px;float: left;height: 25px"><a style="font-size: 13px;font-weight: 40;border-style: none;" class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span> 收藏  '+data[i].collect+'</a>'+aaaa+'</div>';
				}else if(data[i].ycollent=='y'){
					info+='<div style="width: 100px;float: left;height: 25px"><a style="font-size: 13px;font-weight: 40;border-style: none;" class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true" onclick="delcollect(\''+data[i].ids+'\',\''+data[i].kind+'\')"><span class="glyphicon glyphicon-ok-sign" aria-hidden="true"></span> 取消收藏  '+data[i].collect+'</a></div>';
				}else{
					info+='<div style="width: 70px;float: left;height: 25px"><a style="font-size: 13px;font-weight: 40;border-style: none;" class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span> 收藏  '+data[i].collect+'</a>'+aaaa+'</div>';
				}
				if(data[i].ypraise=='n'){
				    info+='<div style="width: 70px;float: left;height: 25px" class="btn-group" role="group" aria-label="..."><button  style="font-size: 13px;font-weight: 40;border-style: none;" type="button" class="btn btn-default"  onclick="praise(\''+data[i].ids+'\',\''+data[i].kind+'\')"><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>点赞  '+data[i].praise+'</button></div>';
				}else if(data[i].ypraise=='y'){
				    info+='<div style="width: 100px;float: left;height: 25px" class="btn-group" role="group" aria-label="..."><button  style="font-size: 13px;font-weight: 40;border-style: none;" type="button" class="btn btn-default"  onclick="delpraise(\''+data[i].ids+'\',\''+data[i].kind+'\')"><span class="glyphicon glyphicon-star" aria-hidden="true"></span>取消点赞  '+data[i].praise+'</button></div>';
				}else{
				    info+='<div style="width: 70px;float: left;height: 25px" class="btn-group" role="group" aria-label="..."><button  style="font-size: 13px;font-weight: 40;border-style: none;" type="button" class="btn btn-default"  onclick="praise(\''+data[i].ids+'\',\''+data[i].kind+'\')"><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>点赞  '+data[i].praise+'</button></div>';
				}
				info+='<div style="width: 70px;float: left;height: 20px" class="btn-group" role="group" aria-label="..."><button  style="font-size: 13px;font-weight: 40;border-style: none;" type="button" class="btn btn-default"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>阅览  42</button></div>';
				info+='</span></div><div class="col-md-5"><label style="float: right;font-size: 15px; font-weight: lighter;">'+data[i].times+'</label>';
				info+='<img class="featurette-image img-responsive center-block" src="" data-src="holder.js/500x500/auto" tppabs="http://v3.bootcss.com/examples/carousel/holder.js/500x500/auto"alt="">';
				info+='</div></div><hr class="featurette-divider">';
			}
			document.getElementById("seflmain").innerHTML = info;
			document.getElementById("more").innerHTML ='<li><a href="javascript:void(0)" onclick="selectExplore(1)">more</a></li>';
		},"json");
	}
	,"json");
}


function praise(ids,kind){
	//alert(ids);
	//alert(kind);
	$.get("dynstate/praise?ids="+ids+"&&kind="+kind,function(data){
		if(data>0){
			alert("点赞成功");
			more(0);
		}else{
			alert("点赞失败");
		}
	},"json")
}

function collect(ids,kind,fname){
	//alert(ids);
	//alert(kind);
	//alert(fname);
	$.get("dynstate/collect?ids="+ids+"&&kind="+kind,function(data){
		if(data>0){
			alert("收藏成功");
			more(0);
		}else{
			alert("收藏失败");
		}
	},"json");
}

function delpraise(ids,kind){
	//alert(ids);
	//alert(kind);
	$.get("dynstate/delpraise?ids="+ids+"&&kind="+kind,function(data){
		if(data>0){
			alert("取消成功");
			more(0);
		}else{
			alert("取消失败");
		}
	},"json");
}

function delcollect(ids,kind){
	$.get("dynstate/delcollect?ids="+ids+"&&kind="+kind,function(data){
		if(data>0){
			alert("取消成功");
			more(0);
		}else{
			alert("取消失败");
		}
	},"json");
}