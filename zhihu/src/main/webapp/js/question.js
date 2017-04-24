//回复
$.ajax({url:"user/listuser",type:"POST",async:false,success:function(data){
	$("#me").append("<img class='Avatar' src='"+data[0].upic+"' style='width: 30px; height: 30px;'>")
},dataType:"json"})


$.ajax({url:"reply/my",type:"POST",async:false,success:function(data){
	for(var i=0;i<data.length;i++){
		$("#sumReply1").after("<div class='Card QuestionAnswers-answerAdd' id='myReply'>"
				+"<div class='AnswerAdd'><div class='AnswerAdd-header'><div class='AuthorInfo AnswerAdd-info'>"
				+"<span class='UserLink AuthorInfo-avatarWrapper'> " 
				+"<img class='Avatar AuthorInfo-avatar' src='"+data[i].upic+"'"
				+"alt='"+data[i].uname+"' width='38' height='38'></span>"
				+"<div class='AuthorInfo-content'><div class='AuthorInfo-title'>"
				+"<div class='AuthorInfo-name'><span class='UserLink'>"+data[i].uname+"</span>"
				+"</div></div><div class='AuthorInfo-badge'>"+data[i].uprofession+"</div></div></div></div>"
				+"<form class='AnswerForm' id='addfrom'><textarea rows='7' cols='91' id='rcontent' name='rcontent'></textarea>"
				+"<div><div class='Sticky AnswerForm-footer is-bottom'>"
				+"<a class='Button AnswerForm-submit Button--primary Button--blue' type='button' onclick='addmyReply()'>提交回答</a>"
				+"</div></div></form></div></div>")

	}	
},dataType:"json"});


UE.getEditor('rcontent');

$("#addfrom").form({
	url:"reply/add",
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
	$("#addfrom").submit();
}


//显示话题
$.ajax({url:"question/topic"+window.location.search,async:false,type:"POST",success:function(data){
	$("#Topic").empty();
	for(var i=0;i<data.length;i++){
		$("#Topic").append("<div id='"+data[i].tid+"' aria-haspopup='true'"
				+"aria-expanded='false' aria-owns='Popover-93694-85063-content'>"+data[i].ttopic+"</div>")
	}
},dataType:"json"});


//显示标题
$.ajax({url:"question/title"+window.location.search,async:false,type:"POST",success:function(data){
	for(var i=0;i<data.length;i++){
		$("#questionHand").append("<h1 class='QuestionHeader-title'>"+data[i].qtitle+"</h1>"
				+"<div class='QuestionHeader-detail'><div class='QuestionRichText QuestionRichText--collapsed'>"
				+"<div> <span class='RichText'>"+data[i].qdetail+"</span></div></div></div>")
	}
},dataType:"json"});


var x;	//判断是否点赞
//显示回复内容
$.ajax({url:"reply/list"+window.location.search,async:false,type:"POST",success:function(data){
	$("#reply").empty;
	$("#someReplys").empty;
	if(data.length>0){
		x=data[0].ypraise;
		$("#reply").append("<div class='ContentItem AnswerItem' name='156837738' id='"+data[0].ids+"'"
				+"data-za-module='AnswerItem' data-za-module-info='{'card':{'content':{'type':'Answer','token':'156837738','upvote_num':133,'comment_num':72,'publish_timestamp':null,'parent_token':'56314897','author_member_hash_id':'4fb8434a7c7c02f2055dde1e2e2e9769'}}}'>"
				+"<div class='ContentItem-meta'><div class='AnswerItem-meta AnswerItem-meta--related'>"
				+"<div class='AuthorInfo'><span class='UserLink AuthorInfo-avatarWrapper'>"
				+"<div class='Popover'><div id='Popover-69749-39451-toggle' aria-haspopup='true' aria-expanded='false'"
				+"aria-owns='Popover-69749-39451-content'><a class='UserLink-link' href='/people/yang-liu-54-49'>"
				+"<img class='Avatar AuthorInfo-avatar' src='"+data[0].author+"'"
				+"srcset='https://pic1.zhimg.com/63020cca4_l.jpg 2x' alt='"+data[0].tname+"' style='width: 38px; height: 38px;'></a></div></div></span>"
				+"<div class='AuthorInfo-content'><div class='AuthorInfo-title'><div class='AuthorInfo-name'>"
				+"<span class='UserLink'><div class='Popover'><div id='Popover-69752-22834-toggle' aria-haspopup='true' aria-expanded='false'"
				+"aria-owns='Popover-69752-22834-content'><a class='UserLink-link' >"+data[0].tname+"</a>"
				+"</div></div></span></div></div><div class='RichText AuthorInfo-badge'>"+data[0].usign+"</div></div></div>"
				+"<div class='AnswerItem-extraInfo'><span class='Voters'><button class='Button Button--plain' type='button'>"+data[0].praise+"人赞同了该回答</button>"
				+"</span></div></div></div><div class='RichContent RichContent--unescapable'>"
				+"<div class='RichContent-inner' style='word-wrap:break-word;'><span class='RichText CopyrightRichText-richText'>"+data[0].content+""
				+"</span>"
				+"</div><div class='ContentItem-time'><a href='/question/56314897/answer/156837738' target='_blank'>"
				+"<span data-tooltip='发布于 "+data[0].times+"'>编辑于 "+data[0].times+"</span></a></div>"
				+"<div class='ContentItem-actions'><span id='VoteButton'></span>"
				+"<button class='Button ContentItem-action Button--plain'type='button' onclick='addReply("+data[0].ids+")' id='button-"+data[0].ids+"'>"+data[0].count+" 条评论</button><div class='Popover ShareMenu ContentItem-action'>"
				+"<div id='Popover-69776-64508-toggle' aria-haspopup='true' aria-expanded='false' aria-owns='Popover-69776-64508-content'>"
				+"</div></div>"
				+"<button class='Button ContentItem-action Button--plain' type='button'>收藏("+data[0].collect+")</button>"
				+"<div class='Popover ContentItem-action'><button id='Popover-69785-24816-toggle' class='Button Button--plain' type='button' aria-haspopup='true' aria-expanded='false' aria-owns='Popover-69785-24816-content'></button></div>"
				+"</div</div></div>")

				if(data[0].ypraise == 'n'){
					$("#VoteButton").append("<button class='Button VoteButton VoteButton--up' aria-label='赞同' type='button' onclick='addpraise("+data[0].praise+","+data[0].ids+")' id='praise-"+data[0].ids+"'>"
							+"<img src='images/yes.png' style='height: 9px; width: 9px;'>"+data[0].praise+"</button><button class='Button VoteButton VoteButton--down' aria-label='反对' type='button'>"
							+"<img src='images/no.png' style='height: 12px; width: 9px;'></button>")
				}else{
					$("#VoteButton").append("<button class='Button VoteButton VoteButton--up is-active' aria-label='赞同' type='button' onclick='addpraise("+data[0].praise+","+data[0].ids+")' id='praise-"+data[0].ids+"'>"
							+"<img src='images/yes.png' style='height: 9px; width: 9px;'>"+data[0].praise+"</button><button class='Button VoteButton VoteButton--down' aria-label='反对' type='button'>"
							+"<img src='images/no.png' style='height: 12px; width: 9px;'></button>")
				}

		$("#someReplys").prepend("<div><div class='Card AnswerAuthor'><div class='Card-header AnswerAuthor-title'>"
				+"<div class='Card-headerText'>关于作者</div></div>"
				+"<div class='Card-section'><div class='AnswerAuthor-user' id='user'>"
				+"<!-- 关于作者 --></div></div><div class='Card-section'><div class='AnswerAuthor-counts'>"
				+"<div class='NumberBoard' id='alluser'><!-- 关注人数 --></div></div>"
				+"<div class='MemberButtonGroup AnswerAuthor-buttons'>"
				+"<button class='Button FollowButton Button--primary Button--blue' type='button'>"
				+"<span> 关注 </span></button>"
				+"<button class='Button' type='button'><span>发私信</span>"
				+"</button></div></div></div></div>");

		$("#user").empty;
		$("#user").append("<div class='AnswerAuthor-user-avatar'><span class='UserLink'> <a class='UserLink-link'href='/people/yang-liu-54-49'> " 
				+"<img class='Avatar Avatar--large UserLink-avatar' src='"+data[0].author+""
				+"srcset='https://pic1.zhimg.com/63020cca4_xl.jpg 2x' alt='"+data[0].tname+"' style='width: 60px; height: 60px;'>"
				+"</a></span></div>"
				+"<div class='AnswerAuthor-user-content'><div class='AnswerAuthor-user-name'>"
				+"<span class='UserLink'> <a class='UserLink-link' id='userName'>"+data[0].tname+"</a></span>"
				+"</div><div class='AnswerAuthor-user-headline'><div class='RichText'>"+data[0].usign+"</div></div></div>");
	}else{
	}
},dataType:"json"});


//显示所有回复的数量
$.post("reply/list"+window.location.search,function(data){
	$("#sumReply").empty;
	$("#sumReply").append("<a class='QuestionMainAction' data-za-detail-view-element_name='ViewAll'"
			+"onclick='add()'>查看全部 "+data.length+" 个回答</a>")
			$("#sumReply1").empty;
	$("#sumReply1").append("<a class='QuestionMainAction' data-za-detail-view-element_name='ViewAll'"
			+"onclick='add()'>查看全部 "+data.length+" 个回答</a>")

},"json");

//关于作者
$.post("reply/user?uname="+document.getElementById("userName").innerText,function(data){
	$("#alluser").append("<a class='Button NumberBoard-item Button--plain' data-za-detail-view-element_name='Answer' type='button'"
			+"href='/people/yang-liu-54-49/answers'><div class='NumberBoard-name'>回答</div>"
			+"<div class='NumberBoard-value'>"+data.countr+"</div></a> <a class='Button NumberBoard-item Button--plain' data-za-detail-view-element_name='Post' type='button'"
			+"href='/people/yang-liu-54-49/posts'><div class='NumberBoard-name'>文章</div><div class='NumberBoard-value'>"+data.counte+"</div>"
			+"</a> <a class='Button NumberBoard-item Button--plain' data-za-detail-view-element_name='Follower' type='button'"
			+"href='/people/yang-liu-54-49/followers'><div class='NumberBoard-name'>关注者</div><div class='NumberBoard-value'>"+data.counts+"</div></a>");
},"json");




//显示更多回答
function add(){
	$.post("reply/list"+window.location.search,function(data){
		if(data.length>1  &&!(document.getElementById("someReyle"))){
			$("#moreReply").after("<div class='Card'><div class='QuestionMainDivider'><span class='QuestionMainDivider-inner'>更多回答</span></div>"
					+"<div class='List'><div class='List-item' id='someReyle'></div></div>");
			$("#someReyle").empty;
			for(var i=1;i<data.length;i++){
				x=data[i].ypraise;
				$("#someReyle").append("<div class='ContentItem AnswerItem' name='156837738'id='"+data[i].ids+"'"
						+"data-za-module='AnswerItem' data-za-module-info='{'card':{'content':{'type':'Answer','token':'156837738','upvote_num':133,'comment_num':72,'publish_timestamp':null,'parent_token':'56314897','author_member_hash_id':'4fb8434a7c7c02f2055dde1e2e2e9769'}}}'>"
						+"<div class='ContentItem-meta'><div class='AnswerItem-meta AnswerItem-meta--related'>"
						+"<div class='AuthorInfo'><span class='UserLink AuthorInfo-avatarWrapper'>"
						+"<div class='Popover'><div id='Popover-69749-39451-toggle' aria-haspopup='true' aria-expanded='false'"
						+"aria-owns='Popover-69749-39451-content'><a class='UserLink-link' href='/people/yang-liu-54-49'>"
						+"<img class='Avatar AuthorInfo-avatar' src='"+data[i].author+"'"
						+"alt='"+data[i].tname+"' style='width: 38px; height: 38px;'></a></div></div></span>"
						+"<div class='AuthorInfo-content'><div class='AuthorInfo-title'><div class='AuthorInfo-name'>"
						+"<span class='UserLink'><div class='Popover'><div id='Popover-69752-22834-toggle' aria-haspopup='true' aria-expanded='false'"
						+"aria-owns='Popover-69752-22834-content'><a class='UserLink-link'>"+data[i].tname+"</a>"
						+"</div></div></span></div></div><div class='RichText AuthorInfo-badge'>"+data[i].usign+"</div></div></div>"
						+"<div class='AnswerItem-extraInfo'><span class='Voters'><button class='Button Button--plain' type='button'>"+data[i].praise+"人赞同了该回答</button>"
						+"</span></div></div></div><div class='RichContent RichContent--unescapable'>"
						+"<div class='RichContent-inner' style='word-wrap:break-word;'><span class='RichText CopyrightRichText-richText'>"+data[i].content+""
						+"</span>"
						+"</div><div class='ContentItem-time'><a href='/question/56314897/answer/156837738' target='_blank'>"
						+"<span data-tooltip='发布于 "+data[i].times+"'>编辑于 "+data[i].times+"</span></a></div>"
						+"<div class='ContentItem-actions'><span id='VoteButton'></span>"
						+"<button class='Button ContentItem-action Button--plain'type='button' onclick='addReply("+data[i].ids+")' id='button-"+data[i].ids+"'>"+data[i].count+" 条评论</button><div class='Popover ShareMenu ContentItem-action'>"
						+"<div id='Popover-69776-64508-toggle' aria-haspopup='true' aria-expanded='false' aria-owns='Popover-69776-64508-content'>"
						+"</div></div>"
						+"<button class='Button ContentItem-action Button--plain' type='button'>收藏("+data[i].collect+")</button>"
						+"<div class='Popover ContentItem-action'><button id='Popover-69785-24816-toggle' class='Button Button--plain' type='button' aria-haspopup='true' aria-expanded='false' aria-owns='Popover-69785-24816-content'></button></div>"
						+"</div</div></div>")
						if(data[i].ypraise == 'n'){
							$("#VoteButton").append("<button class='Button VoteButton VoteButton--up' aria-label='赞同' type='button' onclick='addpraise("+data[i].praise+","+data[i].ids+")' id='praise-"+data[i].ids+"'>"
									+"<img src='images/yes.png' style='height: 9px; width: 9px;'>"+data[i].praise+"</button><button class='Button VoteButton VoteButton--down' aria-label='反对' type='button'>"
									+"<img src='images/no.png' style='height: 12px; width: 9px;'></button>")
						}else{
							$("#VoteButton").append("<button class='Button VoteButton VoteButton--up is-active' aria-label='赞同' type='button' onclick='addpraise("+data[i].praise+","+data[i].ids+")' id='praise-"+data[i].ids+"'>"
									+"<img src='images/yes.png' style='height: 9px; width: 9px;'>"+data[i].praise+"</button><button class='Button VoteButton VoteButton--down' aria-label='反对' type='button'>"
									+"<img src='images/no.png' style='height: 12px; width: 9px;'></button>")
						}
			}
		}	
	},"json");

}

var i;

//显示评论回复
function addReply(ids){
	if(!document.getElementById("ReplyReply")){
		i= $("#button-"+ids+"").text();
		$("#button-"+ids+"").html("收起评论")
		$.post("reply/listReply?rrid="+ids,function(data){
			$("#"+ids+"").after("<div id='ReplyReply'><div class='Comments-container' ><div class='Comments Comments--withEditor Comments-withPagination'>"
					+"<div class='CommentTopbar'><div class='CommentTopbar-meta'><h2 class='CommentTopbar-title'>"+i+"</h2>"
					+"</div></div></div></div><div>"
					+"<div class='CommentItem' id='moreReplyReply'>")/////
					for(var a=0;a<data.length;a++){
						$("#moreReplyReply").append("<div><div class='CommentItem-meta'>"
								+"<span class='UserLink CommentItem-avatar'><div class='Popover'><div id='Popover-57984-10234-toggle' aria-haspopup='true'"
								+"aria-expanded='false' aria-owns='Popover-57984-10234-content'>"
								+"<a class='UserLink-link' href='/people/gadot-fen'> " 
								+"<img class='Avatar UserLink-avatar' width='24' height='24' src='"+data[a].author+"'>"
								+"</a></div></div></span> <span class='UserLink'> <a class='UserLink-link'	href='/people/gadot-fen'>"+data[a].tname+"</a>"
								+"</span> <span class='CommentItem-time'>"+data[a].times+"</span></div>"
								+"<div class='RichText CommentItem-content'>"+data[a].content+"</div>"
								+"</div></div></div>")
					}			
			$("#ReplyReply").append("<div class='Comments-footer Comments-footer-withPagination CommentEditor--normal CommentEditor--active'>"
					+"<form id='addReplyfrom' method='post'>"
					+"<div class='CommentEditor-input Input-wrapper Input-wrapper--spread Input-wrapper--large Input-wrapper--noPadding is-focus'>"
					+"<input type='text' class='Input Editable Editable--focus' id='rcontent' name='rcontent' placeholder='写下你的评论' /></div>"
					+"<button class='Button CommentEditor-singleButton Button--primary Button--blue' style='float:right;margin-top: -40px;' onclick='addReplyReply()' >评论</button>"
					+"</div></form></div>");
		},"json");

	}else{
		$("#button-"+ids+"").html(""+i+"");
		$("#ReplyReply").remove();
	}
}

function addReplyReply(){
	$("#addReplyfrom").form({
		url:'reply/addReply',
		success: function(data){
			if(data == "true"){
				$.messager.show({
					title:'添加回复',
					msg:'添加成功！！！',
					showType:'show',
					style:{
						top:document.body.scrollTop+document.documentElement.scrollTop,
					}
				});
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

}


function addpraise(praise,ids) {
	var b= document.getElementById("praise-"+ids+"");
	if(b.getAttribute("class")=='Button VoteButton VoteButton--up'){
		b.className='Button VoteButton VoteButton--up is-active';
		$.get("dynstate/praise?ids="+ids+"&&kind=Q",function(data){
			if(data>0){
				alert("点赞成功");
				window.location.reload(true);
			}else{
				alert("点赞失败");
			}
		},"json")
	}else{
		b.className='Button VoteButton VoteButton--up';
		$.get("dynstate/delpraise?ids="+ids+"&&kind=Q",function(data){
			if(data>0){
				alert("取消成功");
				window.location.reload(true);
			}else{
				alert("取消失败");
			}
		},"json");
	}	
}


<<<<<<< HEAD
//收藏
=======
//tangkuang
function show(){
	var tanchu = document.getElementById("tanchu");
	tanchu.style.display="block";
	tanchu.style.zIndex = 99;
	var root = document.getElementById("root");
	root.style.zIndex = -1;
}

function closeD(){
	var tanchu = document.getElementById("tanchu");
	tanchu.style.display = "none";
}
>>>>>>> branch 'master' of ssh://git@github.com/zyzydream/zhihu
