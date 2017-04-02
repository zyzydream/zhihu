dynstate("all");

function select(self){
	var p=self.parentNode.children;
	for(var i=0;i<p.length;i++){
		p[i].setAttribute("class","");
	}
	console.log(self);
	self.setAttribute("class","active");
	
	var thing=self.children[0].innerText;
	console.log(thing);
	var kinds="";
	if(thing=="推荐头条"||thing=="已审核"){
    	console.log(thing+"1");
    	$.get("explore/y",function(data){
    		var info='<thead><tr><th>#</th><th>id</th><th>kind</th><th>title</th><th>content</th><th>tname</th><th>author</th><th>time</th><th>操作</th></tr></thead><tbody>';
    		for(var i=0;i<data.length;i++){
    			info+='<tr><td>'+(i+1)+'</td><td>'+data[i].ids+'</td><td>'+data[i].kind+'</td><td>'+data[i].title+'</td><td>'+data[i].content.substr(0,10)+'...</td><td>'+data[i].tname+'</td><td>'+data[i].author+'</td><td>'+data[i].times+'</td><td><a class="btn btn-default" role="button" onclick="showdetail(this)">查看详情</a></td></tr>';
    		}
    		info+='</tbody>';
    		document.getElementById("table").innerHTML = info;
    		var infos="";
    		infos+='<li role="presentation" class="active" onclick="select(this)"><a>已审核</a></li>';
    		infos+='<li role="presentation" onclick="select(this)"><a>未审核</a></li>'
    	    document.getElementById("nav-tabs").innerHTML = infos;
    	},"json")
    }else if(thing=="总动态"||thing=="关注人"||thing=="关注话题"||thing=="关注专栏"||thing=="关注人"||thing=="关注收藏夹"||thing=="收藏文章"||thing=="收藏问题"||thing=="收藏回复"||thing=="点赞文章"||thing=="点赞问题"||thing=="点赞回复"){
    	var kinds="all";
    	console.log(thing+"2");
    	if(thing=="关注话题"){
			kinds="GH";
		}else if(thing=="关注专栏"){
			kinds="GZ";
		}else if(thing=="关注人"){
			kinds="GR";
		}else if(thing=="关注收藏夹"){
			kinds="GS";
		}else if(thing=="收藏回复"){
			kinds="SH";
		}else if(thing=="点赞回复"){
			kinds="DH";
		}else if(thing=="点赞问题"){
			kinds="DQ";
		}else if(thing=="点赞文章"){
			kinds="DW";
		}else if(thing=="收藏问题"){
			kinds="SQ";
		}else if(thing=="收藏文章"){
			kinds="SW";
		}
    	dynstate(kinds)
    }else if(thing=="用户信息"){
    	console.log(thing+"3")
    	$.get("admin/user",function(data){
    		//alert(JSON.stringify(data));
    		var info='<thead><tr><th>#</th><th>id</th><th>name</th><th>email</th><th>sign</th><th>profession</th><th>操作</th></tr></thead><tbody>';
    		for(var i=0;i<data.length;i++){
    			info+='<tr><td>'+(i+1)+'</td><td>'+data[i].uids+'</td><td>'+data[i].uname+'</td><td>'+data[i].uemail+'</td><td>'+data[i].usign+'...</td><td>'+data[i].profession+'</td><td><a class="btn btn-default" role="button" onclick="sendemail(this)">发送信息</a></td></tr>';
    		}
    		info+='</tbody>';
    		console.info(info);
    		document.getElementById("table").innerHTML = info;
    		document.getElementById("nav-tabs").innerHTML = "";
       	},"json");
    }else if(thing=="未审核"){
    	$.get("explore/n",function(data){
    		var info='<thead><tr><th>#</th><th>id</th><th>kind</th><th>title</th><th>content</th><th>tname</th><th>author</th><th>time</th><th>操作</th></tr></thead><tbody>';
    		for(var i=0;i<data.length;i++){
    			info+='<tr><td>'+(i+1)+'</td><td>'+data[i].ids+'</td><td>'+data[i].kind+'</td><td>'+data[i].title+'</td><td>'+data[i].content.substr(0,10)+'...</td><td>'+data[i].tname+'</td><td>'+data[i].author+'</td><td>'+data[i].times+'</td><td><a class="btn btn-default" role="button">查看详情</a></td></tr>';
    		}
    		info+='</tbody>';
    		document.getElementById("table").innerHTML = info;
    		var infos="";
    		infos+='<li role="presentation" onclick="select(this)"><a>已审核</a></li>';
    		infos+='<li role="presentation" class="active"  onclick="select(this)"><a>未审核</a></li>'
    	    document.getElementById("nav-tabs").innerHTML = infos;
    	},"json");
    }
}

function dynstate(kinds){
	$.get("dynstate/all?kind="+kinds,function(data){
		//alert(JSON.stringify(data));
		var info='<thead><tr><th>#</th><th>本人id</th><th>目标id</th><th>kind</th><th>具体id</th><th>time</th><th>操作</th></tr></thead><tbody>';
		for(var i=0;i<data.length;i++){
			var kind="";
			if(data[i].kind=="GH"){
				kind="关注话题";
			}else if(data[i].kind=="GZ"){
				kind="关注专栏";
			}else if(data[i].kind=="GR"){
				kind="关注人";
			}else if(data[i].kind=="GS"){
				kind="关注收藏夹";
			}else if(data[i].kind=="SH"){
				kind="收藏回复";
			}else if(data[i].kind=="DH"){
				kind="点赞回复";
			}else if(data[i].kind=="DQ"){
				kind="点赞问题";
			}else if(data[i].kind=="DW"){
				kind="点赞文章";
			}else if(data[i].kind=="SQ"){
				kind="收藏问题";
			}else if(data[i].kind=="SW"){
				kind="收藏文章";
			}
			info+='<tr><td>'+(i+1)+'</td><td>'+data[i].selfid+'</td><td>'+data[i].aimid+'</td><td>'+kind+'</td><td>'+data[i].ids+'</td><td>'+"未知"+'</td><td><a class="btn btn-default" role="button">查看详情</a></td></tr>';
		}
		info+='</tbody>';
		document.getElementById("table").innerHTML = info;
		var infos="";
		infos+='<li role="presentation" class="active" onclick="select(this)"><a>全部</a></li>';
		infos+='<li role="presentation" onclick="select(this)"><a>关注人</a></li>';
		infos+='<li role="presentation" onclick="select(this)"><a>关注话题</a></li>';
		infos+='<li role="presentation" onclick="select(this)"><a>关注专栏</a></li>';
		infos+='<li role="presentation" onclick="select(this)"><a>关注收藏夹</a></li>';
		infos+='<li role="presentation" onclick="select(this)"><a>收藏文章</a></li>';
		infos+='<li role="presentation" onclick="select(this)"><a>收藏问题</a></li>';
		infos+='<li role="presentation" onclick="select(this)"><a>收藏回复</a></li>';
		infos+='<li role="presentation" onclick="select(this)"><a>点赞问题</a></li>';
		infos+='<li role="presentation" onclick="select(this)"><a>点赞文章</a></li>';
		infos+='<li role="presentation" onclick="select(this)"><a>点赞回复</a></li>';
	    document.getElementById("nav-tabs").innerHTML = infos;
	},"json")
}

function showdetail(self){
	console.log($("#addDetail"));
	var change="";
	change+='<div class="easyui-dialog" title="My Dialog" style="width:400px;height:200px;" data-options="iconCls:\'icon-save\',resizable:true,modal:true"> ';
    change+='<form action="fav" method="post" id="addFavForm"><div class="topTitle">展示用户信息</div><table class="input_table">';
    change+='<tr><td> id  :</td><td><label></label><br/></tr>';
	change+='<tr><td>用户名:</td><td><label></label><br/></tr>';
	change+='<tr><td>e-mail</td><td><label></label><br/></tr>';
	change+='<tr><td>profession:</td><td><label></label><br/></tr>';
	change+='<tr><td>sign:</td><td><label></label><br/></tr>';
	change+='<tr><td colspan="2" align="right"><button onclick="return addWinClose();">&nbsp;&nbsp;取消&nbsp;&nbsp;</button>&nbsp;&nbsp;</td></tr></table></form></div>';
	document.getElementById("addDetail").innerHTML=change;
}

function sendemail(self){
	console.log(self);
}