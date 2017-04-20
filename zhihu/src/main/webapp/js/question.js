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



//显示回复内容
$.ajax({url:"reply/list"+window.location.search,async:false,type:"POST",success:function(data){
	$("#reply").empty;
		$("#reply").append("<div class='ContentItem AnswerItem' name='156837738'"
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
				+"<div class='AnswerItem-extraInfo'><span class='Voters'><button class='Button Button--plain' type='button'>133人赞同了该回答</button>"
				+"</span></div></div></div><div class='RichContent RichContent--unescapable'>"
				+"<div class='RichContent-inner' style='word-wrap:break-word;'><span class='RichText CopyrightRichText-richText'>"+data[0].content+""
				+"</span>"
				+"</div><div class='ContentItem-time'><a href='/question/56314897/answer/156837738' target='_blank'>"
				+"<span data-tooltip='发布于 "+data[0].times+"'>编辑于 "+data[0].times+"</span></a></div>"
				+"<div class='ContentItem-actions'><span><button class='Button VoteButton VoteButton--up' aria-label='赞同' type='button'>"
				+"<img src='images/yes.png' style='height: 9px; width: 9px;'>133</button><button class='Button VoteButton VoteButton--down' aria-label='反对' type='button'>"
				+"<img src='images/no.png' style='height: 12px; width: 9px;'></button></span>"
				+"<button class='Button ContentItem-action Button--plain'type='button'>72 条评论</button><div class='Popover ShareMenu ContentItem-action'>"
				+"<div id='Popover-69776-64508-toggle' aria-haspopup='true' aria-expanded='false' aria-owns='Popover-69776-64508-content'>"
				+"<button class='Button Button--plain' type='button'>"
				+"分享</button></div></div>"
				+"<button class='Button ContentItem-action Button--plain' type='button'>收藏</button>"
				+"<button class='Button ContentItem-action Button--plain' type='button'>感谢</button>"
				+"<div class='Popover ContentItem-action'><button id='Popover-69785-24816-toggle' class='Button Button--plain' type='button' aria-haspopup='true' aria-expanded='false' aria-owns='Popover-69785-24816-content'></button></div>"
				+"</div</div></div>")
				$("#user").empty;
		$("#user").append("<div class='AnswerAuthor-user-avatar'><span class='UserLink'> <a class='UserLink-link'href='/people/yang-liu-54-49'> " 
				+"<img class='Avatar Avatar--large UserLink-avatar' src='"+data[0].author+""
				+"srcset='https://pic1.zhimg.com/63020cca4_xl.jpg 2x' alt='"+data[0].tname+"' style='width: 60px; height: 60px;'>"
				+"</a></span></div>"
				+"<div class='AnswerAuthor-user-content'><div class='AnswerAuthor-user-name'>"
				+"<span class='UserLink'> <a class='UserLink-link' id='userName'>"+data[0].tname+"</a></span>"
				+"</div><div class='AnswerAuthor-user-headline'><div class='RichText'>"+data[0].usign+"</div></div></div>");


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
			+"<div class='NumberBoard-value'>167</div></a> <a class='Button NumberBoard-item Button--plain' data-za-detail-view-element_name='Post' type='button'"
			+"href='/people/yang-liu-54-49/posts'><div class='NumberBoard-name'>文章</div><div class='NumberBoard-value'>4</div>"
			+"</a> <a class='Button NumberBoard-item Button--plain' data-za-detail-view-element_name='Follower' type='button'"
			+"href='/people/yang-liu-54-49/followers'><div class='NumberBoard-name'>关注者</div><div class='NumberBoard-value'>2767</div></a>");
},"json");




//显示更多回答
function add(){

	$.post("reply/list"+window.location.search,function(data){
		if(data.length>1  &&!(document.getElementById("someReyle"))){
			$("#moreReply").after("<div class='Card'><div class='QuestionMainDivider'><span class='QuestionMainDivider-inner'>更多回答</span></div>"
					+"<div class='List'><div class='List-item' id='someReyle'></div></div>");
			$("#someReyle").empty;
			for(var i=1;i<data.length;i++){
				$("#someReyle").append("<div class='ContentItem AnswerItem' name='156837738'"
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
						+"<div class='AnswerItem-extraInfo'><span class='Voters'><button class='Button Button--plain' type='button'>133人赞同了该回答</button>"
						+"</span></div></div></div><div class='RichContent RichContent--unescapable'>"
						+"<div class='RichContent-inner' style='word-wrap:break-word;'><span class='RichText CopyrightRichText-richText'>"+data[i].content+""
						+"</span>"
						+"</div><div class='ContentItem-time'><a href='/question/56314897/answer/156837738' target='_blank'>"
						+"<span data-tooltip='发布于 "+data[i].times+"'>编辑于 "+data[i].times+"</span></a></div>"
						+"<div class='ContentItem-actions'><span><button class='Button VoteButton VoteButton--up' aria-label='赞同' type='button'>"
						+"<img src='images/yes.png' style='height: 9px; width: 9px;'>133</button><button class='Button VoteButton VoteButton--down' aria-label='反对' type='button'>"
						+"<img src='images/no.png' style='height: 12px; width: 9px;'></button></span>"
						+"<button class='Button ContentItem-action Button--plain'type='button'>72 条评论</button><div class='Popover ShareMenu ContentItem-action'>"
						+"<div id='Popover-69776-64508-toggle' aria-haspopup='true' aria-expanded='false' aria-owns='Popover-69776-64508-content'>"
						+"<button class='Button Button--plain' type='button'>"
						+"分享</button></div></div>"
						+"<button class='Button ContentItem-action Button--plain' type='button'>收藏</button>"
						+"<button class='Button ContentItem-action Button--plain' type='button'>感谢</button>"
						+"<div class='Popover ContentItem-action'><button id='Popover-69785-24816-toggle' class='Button Button--plain' type='button' aria-haspopup='true' aria-expanded='false' aria-owns='Popover-69785-24816-content'></button></div>"
						+"</div</div></div>")
			}
		}	
	},"json");

}



