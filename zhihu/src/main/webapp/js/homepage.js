//document.getElementById("name").innerHTML="zy";
console.log($("#seflmain"));
console.log(document.getElementById("seflmain"));
var length=0;
show();


//请求最新动态
function show(){
	$.get("favorite/all",function(date){
		var favorite=date;
		$.get("user/dynstate",function(data){
			var dynstate="";			
			length=data.length;
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
				if(data[i].kind=="W"){
					dynstate+='<div class="row featurette"><div class="col-md-7">';
					dynstate+='<h2 class="featurette-heading" style="font-size: 20px;">';
					dynstate+='<span class="text-muted" style="font-size: 13px">来自话题：<a href="/zhihu/page/findtopic.jsp?tid='+data[i].tid+'&&tname='+data[i].tname+'">'+data[i].tname+'</a></span><br/><a href="page/article.jsp?eid='+data[i].ids+'">'+data[i].title+'</a></h2>';
					dynstate+='<h2 class="featurette-heading" style="font-size: 13px;"><a href="javascript:void(0)"  rel="a'+i+'">'+data[i].author+'</a> &nbsp;&nbsp;&nbsp;';
					dynstate+='<span class="text-muted" style="font-size: 12px;font-weight: 300;">'+data[i].usign+'</span></h2>';
					dynstate+='<p class="lead" style="font-size: 14px;">'+data[i].content+'</p><span>';
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
					dynstate+='<div style="width: 70px;float: left;height: 25px" class="btn-group" role="group" aria-label="..."><button  style="font-size: 13px;font-weight: 40;border-style: none;" type="button" class="btn btn-default"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>阅览  42</button></div>';
					dynstate+='</span></div><div class="col-md-5"><img class="featurette-image img-responsive center-block" src="" data-src="holder.js/500x500/auto"';
					dynstate+='tppabs="http://v3.bootcss.com/examples/carousel/holder.js/500x500/auto" alt=""></div></div>';
					dynstate+='<hr class="featurette-divider" style="margin-top:10px;">';
				}else if(data[i].kind=="Q"){
					dynstate+='<div class="row featurette"><div class="col-md-7">';
					dynstate+='<h2 class="featurette-heading" style="font-size: 20px;">';
					dynstate+='<span class="text-muted" style="font-size: 13px">来自话题：<a href="/zhihu/page/findtopic.jsp?tid='+data[i].tid+'&&tname='+data[i].tname+'">'+data[i].tname+'</a></span><br/><a href="javascript:void(0)">'+data[i].title+'</a></h2>';
					dynstate+='<h2 class="featurette-heading" style="font-size: 13px;">'+data[i].author+' &nbsp;&nbsp;&nbsp;';
					dynstate+='<span class="text-muted" style="font-size: 12px;font-weight: 300;">'+data[i].usign+'</span></h2>';
					dynstate+='<p class="lead" style="font-size: 14px;">'+data[i].content+'</p><span>';
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
					dynstate+='<div style="width: 70px;float: left;height: 25px" class="btn-group" role="group" aria-label="..."><button  style="font-size: 13px;font-weight: 40;border-style: none;" type="button" class="btn btn-default"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>阅览  42</button></div>';
					dynstate+='</span></div><div class="col-md-5"><img class="featurette-image img-responsive center-block" src="" data-src="holder.js/500x500/auto"';
					dynstate+='tppabs="http://v3.bootcss.com/examples/carousel/holder.js/500x500/auto" alt=""></div></div>';
					dynstate+='<hr class="featurette-divider" style="margin-top:10px;">';
				}else if(data[i].kind=="FW"){
					dynstate+='<div class="row featurette"><div class="col-md-7">';
					dynstate+='<h2 class="featurette-heading" style="font-size: 25px;"><span class="text-muted" style="font-size: 15px">'+data[i].author+':发表文章：</span><br /><a href="page/article.jsp?eid='+data[i].ids+'">'+data[i].title+'</a></h2>';
					dynstate+='<p class="lead" style="font-size: 14px;">'+data[i].content+'</p><span>';
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
					dynstate+='<div style="width: 70px;float: left;height: 25px" class="btn-group" role="group" aria-label="..."><button  style="font-size: 13px;font-weight: 40;border-style: none;" type="button" class="btn btn-default"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>阅览  42</button></div>';
					dynstate+='</span></div><div class="col-md-5"><label style="float: right;font-size: 15px; font-weight: lighter;">'+data[i].times+'</label>';
					dynstate+='<img class="featurette-image img-responsive center-block" src="" data-src="holder.js/500x500/auto" tppabs="http://v3.bootcss.com/examples/carousel/holder.js/500x500/auto"alt="">';
					dynstate+='</div></div><hr class="featurette-divider">';
				}else if(data[i].kind=="FQ"){
					dynstate+='<div class="row featurette"><div class="col-md-7">';
					dynstate+='<h2 class="featurette-heading" style="font-size: 25px;" onclick="showdeilt(\''+data[i].ids+'\')"><span class="text-muted" style="font-size: 15px">'+data[i].author+':提出问题：</span><br /><a href="javascript:void(0)">'+data[i].title+'</a></h2><span>'
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
					dynstate+='<div style="width: 70px;float: left;height: 25px" class="btn-group" role="group" aria-label="..."><button  style="font-size: 13px;font-weight: 40;border-style: none;" type="button" class="btn btn-default"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>阅览  42</button></div>';
					dynstate+='</span></div><div class="col-md-5"><label style="float: right;font-size: 15px; font-weight: lighter;">'+data[i].times+'</label>';
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
			test();
			
		},"json");
	  }
	,"json");
}

//请求用户关注话题
$.get("user/topics",function(data){
//	alert("请求的话题："+JSON.stringify(data));
	var topics="";
	for(var i=0;i<data.length;i++){
		topics+='<a class="HomeTopics-item zm-item-tag" href="/zhihu/page/findtopic.jsp?tid='+data[i].tid+'&&tname='+data[i].ttopic+'" target="_blank">'+data[i].ttopic+'</a>';
	}
	document.getElementById("title").innerHTML =topics;
},"json");


//点击进入发现
function find(){
	$.get("/explore");
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

function test(){
	for(var i=0;i<10;i++){
		$(function(){
		    $("[rel=a"+i+"]").popover({
		        trigger:'manual',
		        placement : 'bottom', //placement of the popover. also can use top, bottom, left or right
		        title : '<div style="text-align:center; color:red; text-decoration:underline; font-size:14px;"> Muah ha ha</div>', //this is the top title bar of the popover. add some basic css
		        html: 'true', //needed to show html of course
		        content : '<div id="popOverBox"><img src="http://www.hd-report.com/wp-content/uploads/2008/08/mr-evil.jpg" width="251" height="201" /></div>', //this is the content of the html box. add the image here or anything you want really.
		        animation: false
		    }).on("mouseenter", function () {
		                var _this = this;
		                $(this).popover("show");
		                $(this).siblings(".popover").on("mouseleave", function () {
		                    $(_this).popover('hide');
		                });
		            }).on("mouseleave", function () {
		                var _this = this;
		                setTimeout(function () {
		                    if (!$(".popover:hover").length) {
		                        $(_this).popover("hide")
		                    }
		                }, 100);
		            });
		});
	}
}
