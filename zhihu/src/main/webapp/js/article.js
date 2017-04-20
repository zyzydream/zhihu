$.post("essay/all"+window.location.search,function(data){
	//alert(JSON.stringify(data));
	$("#esssayTitle").empty();
	for(var i=0;i<data.length;i++){
		$("#esssayTitle").append("<h1 class='PostIndex-title'>"+data[i].etitle+"</h1><div class='PostIndex-author'>"
				+"<a href='page/myself.jsp' target='_blank'> " 
				+"<img class='Avatar PostIndex-authorAvatar Avatar--xs' alt='"+data[i].uname+"' src='"+data[i].tpic+"'>" 
				+"</a><a class='PostIndex-authorName' src='"+data[i].tpic+"' target='_blank'>"+data[i].uname+"</a> " 
				+"<span class='Bull'></span>"
				+"<div class='HoverTitle' data-hover-title='2017 年 4月 3 日星期一晚上 6 点 28 分'>"
			    +"<time datetime='"+data[i].etime+"'>"+data[i].etime+"</time></div></div>")
	}
},"json");

$.post("essay/all"+window.location.search,function(data){
	//alert(JSON.stringify(data));
	$("#Content").empty();
	for(var i=0;i<data.length;i++){
		//alert("aaaa");
		$("#Content").append("<div style='width:660px;word-wrap:break-word;'>"+data[i].econtent+"</div>")
	}
},"json");



//显示评论
$.post("essay/reply"+window.location.search,function(data){
	$("#AllReply").emply;
	$("#AllReply").append("<span class='BlockTitle-title'>"+data.length+" 条评论</span> <span class='BlockTitle-line'></span>");
	$("#Replys").emply;
	for(var i=0;i<data.length;i++){
		$("#Replys").append("<a target='_blank' href='https://www.zhihu.com/people/gao-nan-87' class='UserAvatar CommentItem-author'> " 
							+"<img src='"+data[i].author+"' alt='"+data[i].tname+"' class='Avatar Avatar--xs'></a>"
							+"<div class='CommentItem-headWrapper'><div class='CommentItem-head'>"
							+"<span class='CommentItem-context'> <a target='_blank'  href='https://www.zhihu.com/people/gao-nan-87'>"+data[i].tname+"</a>"
							+"</span></div></div>"
							+"<div class='CommentItem-content'>"+data[i].content+"</div>"
							+"<div class='CommentItem-foot'><span title='128 人觉得这个很赞' class='CommentItem-like'>  </span>"
							+"<div data-hover-title='"+data[i].times+"'  class='HoverTitle CommentItem-createdTime'>"
							+"<time datetime='Tue Apr 04 2017 17:52:24 GMT+0800'>"+data[i].times+"</time>"
							+"</div><button type='button' class='Button CommentItem-action CommentItem-actionReply Button--plain'>"
							+"<i class='icon icon-ic_column_reply'><img src='images/hui.png'  style='height: 18px; width: 14px;'>"
							+"</i> 回复</button> <button type='button' class='Button CommentItem-action CommentItem-actionLike Button--plain'>"
							+"<i class='icon icon-ic_comment_like'><img src='images/zan.png' style='height: 18px; width: 18px;'></i>赞</button>"
							+"<div class='Report CommentItem-action CommentItem-actionReport'>"
							+"<button type='button' class='Button Button Button--plain ReportButton'>"
							+"<i class='icon icon-ic_column_report'><img src='images/ju.png'  style='height: 18px; width: 14px;'>"
							+"</i>举报</button></div></div>")
	}
	
	
},"json");


//显示话题
$.post("essay/topic"+window.location.search,function(data){
	for(var i=0;i<data.length;i++){
		$("#Topics").append("<span class='TopicItem u-ellipsis PostIndex-topicItem'>"+data[i].ttopic+"</span>")
	}
	
	
},"json");


//关于回复人
$.ajax({url:"reply/my",type:"POST",async:false,success:function(data){
	$("#myPic").append("<img srcset='https://pic1.zhimg.com/da8e974dc_l.jpg 2x' src='"+data[0].upic+"' alt='"+data[0].uname+"' class='Avatar CommentEditor-avatar'>")
},dataType:"json"});



//写回复
$("#inputReply").form({
	url:"essay/addReply",
	success: function(data){
		if(data == "true"){
			alert("发布成功!!!!");
			window.location.reload(true);
		}else{
			$.messager.show({
				title:'添加回复',
				msg:'添加失败！！！',
				showType:'show',
				style:{
					top:document.body.scrollTop+document.documentElement.scrollTop,
				}
			});
		}
	}
});

function addmyReply(){
	$("#inputReply").submit();
}

