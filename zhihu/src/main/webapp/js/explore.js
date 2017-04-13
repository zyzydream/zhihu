//请求推荐阅读nextElementSibling
show();
function show(){
	$.get("favorite/all",function(date){
		var favorite=date;
		$.get("explore/dynstate",function(data){
			var dynstate="";
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
				dynstate+='<div class="row featurette" onmouseover="showdetail(this)" onmouseleave="closedetail(this)"><div class="col-md-7">';
				dynstate+='<h2 class="featurette-heading" style="font-size:16px;">';
				dynstate+='<span class="text-muted" style="font-size: 13px;font-weight: 300;">来自话题：'+data[i].tname+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data[i].title+'</h2>';
				dynstate+='<span hidden="true"><p class="lead" style="font-size: 14px;">'+data[i].content+'</p><span>';
				if(data[i].ycollent=='n'){
					dynstate+='<div style="width: 70px;float: left;height: 25px"><a style="font-size: 13px;font-weight: 40;border-style: none;" class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span> 收藏  '+data[i].collect+'</a>'+aaaa+'</div>';
				}else if(data[i].ycollent=='y'){
					dynstate+='<div style="width: 100px;float: left;height: 25px"><a style="font-size: 13px;font-weight: 40;border-style: none;" class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true" onclick="delcollect(\''+data[i].ids+'\',\''+data[i].kind+'\')"><span class="glyphicon glyphicon-ok-sign" aria-hidden="true"></span> 取消收藏  '+data[i].collect+'</a></div>';
				}else{
					dynstate+='<div style="width: 70px;float: left;height: 25px"><a style="font-size: 13px;font-weight: 40;border-style: none;" class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span> 收藏  '+data[i].collect+'</a>'+aaaa+'</div>';
				}
				if(data[i].ypraise=='n'){
				    dynstate+='<div style="width: 70px;float: left;height: 25px" class="btn-group" role="group" aria-label="..."><button  style="font-size: 13px;font-weight: 40;border-style: none;" type="button" class="btn btn-default"  onclick="praise(\''+data[i].ids+'\',\''+data[i].kind+'\')"><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>点赞  '+data[i].praise+'</button></div>';
				}else{
				    dynstate+='<div style="width: 100px;float: left;height: 25px" class="btn-group" role="group" aria-label="..."><button  style="font-size: 13px;font-weight: 40;border-style: none;" type="button" class="btn btn-default"  onclick="delpraise(\''+data[i].ids+'\',\''+data[i].kind+'\')"><span class="glyphicon glyphicon-star" aria-hidden="true"></span>取消点赞  '+data[i].praise+'</button></div>';
				}
				dynstate+='<div style="width: 70px;float: left;height: 25px" class="btn-group" role="group" aria-label="..."><button  style="font-size: 13px;font-weight: 40;border-style: none;" type="button" class="btn btn-default"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>阅览  42</button></div></span></div></div><hr class="featurette-divider">';
			}
			document.getElementById("seflmain").innerHTML = dynstate;
		},"json");
	  }
	,"json");
}


function showdetail(self){
	self.childNodes[0].firstChild.nextElementSibling.hidden=false;
}
function closedetail(self){
	console.log(self);
	self.childNodes[0].firstChild.nextElementSibling.hidden=true;
}

function praise(ids,kind){
	//alert(ids);
	//alert(kind);
	$.get("dynstate/praise?ids="+ids+"&&kind="+kind,function(data){
		if(data>0){
			//alert("点赞成功");
			show();
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
			show();
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
			//alert("点赞成功");
			show();
		}else{
			alert("取消失败");
		}
	},"json");
}

function delcollect(ids,kind){
	$.get("dynstate/delcollect?ids="+ids+"&&kind="+kind,function(data){
		if(data>0){
			//alert("点赞成功");
			show();
		}else{
			alert("取消失败");
		}
	},"json");
}
