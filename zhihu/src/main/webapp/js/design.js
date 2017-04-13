
if(thing=="基本资料"||thing=="账号和密码"){
	$.get("explore/y?currPage="+currPage+"&&pageSize="+pageSize,function(data){
		var info='<thead><tr><th>#</th><th>id</th><th>kind</th><th>title</th><th>content</th><th>tname</th><th>author</th><th>time</th><th>操作</th></tr></thead><tbody>';
		for(var i=0;i<data.rows.length;i++){
			
		}
		info+='<tr><td colspan="9"><div id="pp" class="easyui-pagination" data-options="total:'+data.total+',pageSize:'+data.pageSize+',pageNumber:'+data.currPage+'" style="background:#efefef;border:1px solid #ccc;width: 1033px"></div></td></tr>';
		info+='</tbody>';
		document.getElementById("table").innerHTML = info;
		var infos="";
		infos+='<li id="before" role="presentation" class="active" onclick="select(this,1,10)"><a>基本资料</a></li>';
		infos+='<li id="after" role="presentation" onclick="select(this,1,10)"><a>账号和密码</a></li>'
	    document.getElementById("nav-tabs").innerHTML = infos;
		var node=document.getElementById("before");
		a(node);
	},"json")
}
