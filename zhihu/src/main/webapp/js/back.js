dynstate("all",1,10);

$.get("explore/update",function(data){
	if(data!=0){
		var length=data.length;
		alert(length);
		//alert(JSON.stringify(data));
		document.getElementById("warn").innerHTML='<div class="alert alert-warning alert-dismissible" role="alert" Style="float:right;width: 1100px;"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>提醒!</strong>有'+length+'待审核的头条</div>';
	}
},"json");

function a(node){
$('#pp').pagination({
	onSelectPage:function(pageNumber, pageSize){
		
		$(this).pagination('loading');
		//alert('pageNumber:'+pageNumber+',pageSize:'+pageSize);
		//console.log(node);
		select(node,pageNumber,pageSize);
		$(this).pagination('loading');
	}
});
}


function select(self,currPage,pageSize){
	var p=self.parentNode.children;
	for(var i=0;i<p.length;i++){
		p[i].setAttribute("class","");
	}
	//console.log(self);
	self.setAttribute("class","active");
	
	var thing=self.children[0].innerText;
	//console.log(self.children[0].innerHTML);
	var kinds="";
	if(thing=="推荐头条"||thing=="已审核"){
    	$.get("explore/y?currPage="+currPage+"&&pageSize="+pageSize,function(data){
    		var info='<thead><tr><th>#</th><th>id</th><th>kind</th><th>title</th><th>content</th><th>tname</th><th>author</th><th>time</th><th>点赞数</th><th>收藏数</th><th>操作</th></tr></thead><tbody>';
    		for(var i=0;i<data.rows.length;i++){
    			info+='<tr><td>'+(i+1)+'</td><td>'+data.rows[i].ids+'</td><td>'+data.rows[i].kind+'</td><td>'+data.rows[i].title+'</td><td>'+data.rows[i].content.substr(0,10)+'...</td><td>'+data.rows[i].tname+'</td><td>'+data.rows[i].author+'</td><td>'+data.rows[i].times+'</td><td>'+data.rows[i].praise+'</td><td>'+data.rows[i].collect+'</td><td><a class="btn btn-default" role="button" data-toggle="modal" data-target="#myModal" onclick="fun(\''+data.rows[i].ids+'\',\''+data.rows[i].kind+'\',\''+data.rows[i].title+'\',\''+data.rows[i].content+'\',\''+data.rows[i].tname+'\',\''+data.rows[i].author+'\',\''+data.rows[i].times+'\')">查看详情</a></td></tr>';
    		}
    		info+='<tr><td colspan="11"><div id="pp" class="easyui-pagination" data-options="total:'+data.total+',pageSize:'+data.pageSize+',pageNumber:'+data.currPage+'" style="background:#efefef;border:1px solid #ccc;width: 1033px"></div></td></tr>';
    		info+='</tbody>';
    		document.getElementById("table").innerHTML = info;
    		var infos="";
    		infos+='<li id="before" role="presentation" class="active" onclick="select(this,1,10)"><a>已审核</a></li>';
    		infos+='<li id="after" role="presentation" onclick="select(this,1,10)"><a>未审核</a></li>'
    	    document.getElementById("nav-tabs").innerHTML = infos;
    		var node=document.getElementById("before");
    		a(node);
    	},"json")
    }else if(thing=="总动态"||thing=="全部"||thing=="关注人"||thing=="关注话题"||thing=="关注专栏"||thing=="关注人"||thing=="关注收藏夹"||thing=="收藏文章"||thing=="收藏问题"||thing=="收藏回复"||thing=="点赞文章"||thing=="点赞问题"||thing=="点赞回复"){
    	var kinds="all";
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
    	dynstate(kinds,currPage,pageSize)
    }else if(thing=="用户信息"){
    	$.get("admin/user?currPage="+currPage+"&&pageSize="+pageSize,function(data){
    		//alert(JSON.stringify(data));
    		var info='<thead><tr><th>#</th><th>id</th><th>name</th><th>email</th><th>sign</th><th>profession</th><th>操作</th></tr></thead><tbody>';
    		for(var i=0;i<data.rows.length;i++){
    			var name=data.rows[i].uname
    			info+='<tr><td>'+(i+1)+'</td><td>'+data.rows[i].uids+'</td><td>'+data.rows[i].uname+'</td><td>'+data.rows[i].uemail+'</td><td>'+data.rows[i].usign+'...</td><td>'+data.rows[i].profession+'</td><td><a class="btn btn-default" role="button" data-toggle="modal" data-target="#infoModal" onclick="sendemail(\''+name+'\')">发送信息</a></td></tr>';
    		}
    		info+='<tr><td colspan="9"><div id="pp" class="easyui-pagination" data-options="total:'+data.total+',pageSize:'+data.pageSize+',pageNumber:'+data.currPage+'" style="background:#efefef;border:1px solid #ccc;width: 1033px"></div></td></tr>';
    		info+='</tbody>';
    		//console.info(info);
    		document.getElementById("table").innerHTML = info;
    		document.getElementById("nav-tabs").innerHTML = "";
    		var node=document.getElementById("users");
    		a(node);
       	},"json");
    }else if(thing=="未审核"){
    	$.get("explore/n?currPage="+currPage+"&&pageSize="+pageSize,function(data){
    		//alert(JSON.stringify(data));
    		var info='<thead><tr><th>#</th><th>id</th><th>kind</th><th>title</th><th>content</th><th>tname</th><th>author</th><th>time</th><th>点赞数</th><th>收藏数</th><th>操作</th></tr></thead><tbody>';
    		for(var i=0;i<data.rows.length;i++){
    			info+='<tr><td>'+(i+1)+'</td><td>'+data.rows[i].ids+'</td><td>'+data.rows[i].kind+'</td><td>'+data.rows[i].title+'</td><td>'+data.rows[i].content.substr(0,10)+'...</td><td>'+data.rows[i].tname+'</td><td>'+data.rows[i].author+'</td><td>'+data.rows[i].times+'</td><td>'+data.rows[i].praise+'</td><td>'+data.rows[i].collect+'</td><td><a class="btn btn-default" role="button" data-toggle="modal" data-target="#myModal" onclick="fun(\''+data.rows[i].ids+'\',\''+data.rows[i].kind+'\',\''+data.rows[i].title+'\',\''+data.rows[i].content+'\',\''+data.rows[i].tname+'\',\''+data.rows[i].author+'\',\''+data.rows[i].times+'\')">查看详情</a><a class="btn btn-default" role="button" onclick="ok(\''+data.rows[i].ids+'\',\''+data.rows[i].kind+'\')">审核通过</a></td></tr>';
    		}
    		info+='<tr><td colspan="11"><div id="pp" class="easyui-pagination" data-options="total:'+data.total+',pageSize:'+data.pageSize+',pageNumber:'+data.currPage+'" style="background:#efefef;border:1px solid #ccc;width: 1031px"></div></td></tr>';
    		info+='</tbody>';
    		document.getElementById("table").innerHTML = info;
    		var infos="";
    		infos+='<li id="before" role="presentation" onclick="select(this,1,10)"><a>已审核</a></li>';
    		infos+='<li id="after" role="presentation" class="active"  onclick="select(this,1,10)"><a>未审核</a></li>'
    	    document.getElementById("nav-tabs").innerHTML = infos;
    		var node=document.getElementById("after");
    		a(node);
    	},"json");
    }
}

function dynstate(kinds,currPage,pageSize){
	$.get("dynstate/all?sgin="+kinds+"&&currPage="+currPage+"&&pageSize="+pageSize ,function(data){
		//alert(kinds);
		//alert(JSON.stringify(data));
		var all="";
		var GH="";
		var GZ="";
    	var GR="";
    	var GS="";
    	var DW="";
    	var SQ="";
    	var SW="";
    	var DQ="";
    	var DH="";
    	var SH="";
    	if(kinds=="all") all="active";
		if(kinds=="GH") GH="active";
		if(kinds=="GZ") GZ="active";
		if(kinds=="GR") GR="active";
		if(kinds=="GS") GS="active";
		if(kinds=="DW") DW="active";
		if(kinds=="SQ") SQ="active";
		if(kinds=="SW") SW="active";
		if(kinds=="DQ") DQ="active";
		if(kinds=="DH") DH="active";
		if(kinds=="SH") SH="active";
    	
		var info='<thead><tr><th>#</th><th>本人id</th><th>目标id</th><th>kind</th><th>具体id</th><th>time</th><th>操作</th></tr></thead><tbody>';
		//alert(data.rows.length);
		for(var i=0;i<data.rows.length;i++){
			var kind="";
			if(data.rows[i].kind=="GH"){
				kind="关注话题";
			}else if(data.rows[i].kind=="GZ"){
				kind="关注专栏";
			}else if(data.rows[i].kind=="GR"){
				kind="关注人";
			}else if(data.rows[i].kind=="GS"){
				kind="关注收藏夹";
			}else if(data.rows[i].kind=="SH"){
				kind="收藏回复";
			}else if(data.rows[i].kind=="DH"){
				kind="点赞回复";
			}else if(data.rows[i].kind=="DQ"){
				kind="点赞问题";
			}else if(data.rows[i].kind=="DW"){
				kind="点赞文章";
			}else if(data.rows[i].kind=="SQ"){
				kind="收藏问题";
			}else if(data.rows[i].kind=="SW"){
				kind="收藏文章";
			}
			info+='<tr><td>'+(i+1)+'</td><td>'+data.rows[i].selfid+'</td><td>'+data.rows[i].aimid+'</td><td>'+kind+'</td><td>'+data.rows[i].ids+'</td><td>'+data.rows[i].times+'</td><td><a class="btn btn-default" role="button" data-toggle="modal" data-target="#dynstateModal" onclick="finddynstate(\''+data.rows[i].selfid+'\',\''+data.rows[i].aimid+'\',\''+kind+'\',\''+data.rows[i].ids+'\',\''+data.rows[i].times+'\')">查看详情</a></td></tr>';
		}
		info+='<tr><td colspan="9"><div id="pp" class="easyui-pagination" data-options="total:'+data.total+',pageSize:'+data.pageSize+',pageNumber:'+data.currPage+'" style="background:#efefef;border:1px solid #ccc;width: 1031px"></div></td></tr>';
		info+='</tbody>';
		var infos="";
		infos+='<li id="all" role="presentation" class="'+all+'" onclick="select(this,1,10)"><a>全部</a></li>';
		infos+='<li id="GR" role="presentation" class="'+GR+'" onclick="select(this,1,10)"><a>关注人</a></li>';
		infos+='<li id="GH" role="presentation" class="'+GH+'" onclick="select(this,1,10)"><a>关注话题</a></li>';
		infos+='<li id="GZ" role="presentation" class="'+GZ+'" onclick="select(this,1,10)"><a>关注专栏</a></li>';
		infos+='<li id="GS" role="presentation" class="'+GS+'" onclick="select(this,1,10)"><a>关注收藏夹</a></li>';
		infos+='<li id="SW" role="presentation" class="'+SW+'" onclick="select(this,1,10)"><a>收藏文章</a></li>';
		infos+='<li id="SQ" role="presentation" class="'+SQ+'" onclick="select(this,1,10)"><a>收藏问题</a></li>';
		infos+='<li id="SH" role="presentation" class="'+SH+'" onclick="select(this,1,10)"><a>收藏回复</a></li>';
		infos+='<li id="DQ" role="presentation" class="'+DQ+'" onclick="select(this,1,10)"><a>点赞问题</a></li>';
		infos+='<li id="DW" role="presentation" class="'+DW+'" onclick="select(this,1,10)"><a>点赞文章</a></li>';
		infos+='<li id="DH" role="presentation" class="'+DH+'" onclick="select(this,1,10)"><a>点赞回复</a></li>';
	    document.getElementById("nav-tabs").innerHTML = infos;
		document.getElementById("table").innerHTML = info;
		var node=document.getElementById(""+kinds+"");
		a(node);	
	},"json")
}

function showdetail(self){
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


function fun(ids,kind,title,content,tname,author,time){
	document.getElementById("ids").innerHTML=ids;
	document.getElementById("kind").innerHTML=kind;
	document.getElementById("title").innerHTML=title;
	document.getElementById("content").innerHTML=content;
	document.getElementById("tname").innerHTML=tname;
	document.getElementById("author").innerHTML=author;
	document.getElementById("time").innerHTML=time;
}

function sendemail(name){
	document.getElementsByName("selfname")[0].value="管理员";
	document.getElementsByName("aimname")[0].value=name;
	$("#sendmail").click(function(data){
		$("#infoForm").submit();//表单提交	
	});
}

function finddynstate(selfid,aimid,kind,ids,times){
	alert(ids);
	console.log(document.getElementById("ids"));
	document.getElementById("selfid").innerHTML=selfid;
	document.getElementById("aimid").innerHTML=aimid;
	document.getElementById("kinds").innerHTML=kind;
	document.getElementById("ids").innerHTML=ids;
	document.getElementById("times").innerHTML=times;
}

function ok(ids,kind){
	//alert("提交成功");
	$.get("explore/ok?ids="+ids+"&&kind="+kind,function(data){
		//alert(data);
		if(data!=0){
			alert("申请成功");
			var node=document.getElementById("after");
			console.log(node);
			select(node,1,10);
		}else{
			alert("申请失败！！！");
		}
	},"json");
}