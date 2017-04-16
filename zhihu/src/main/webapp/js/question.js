//显示话题
$.post("question/topic"+window.location.search,function(data){
	$("#Topic").empty();
	for(var i=0;i<data.length;i++){
		$("#Topic").append("<div id='"+data[i].tid+"' aria-haspopup='true'"
							+"aria-expanded='false' aria-owns='Popover-93694-85063-content'>"+data[i].ttopic+"</div>")
	}
},"json");


//显示标题
$.post("question/title"+window.location.search,function(data){
	for(var i=0;i<data.length;i++){
		$("#questionHand").append("<h1 class='QuestionHeader-title'>"+data[i].qtitle+"</h1>"
								+"<div class='QuestionHeader-detail'><div class='QuestionRichText QuestionRichText--collapsed'>"
								+"<div> <span class='RichText'>"+data[i].qdetail+"</span></div></div></div>")
	}
},"json");



//显示回复内容
$.post("reply/list"+window.location.search,function(data){
	$("#reply").empty;
		for(var j=0;j<data[0].users.length;i++){
			$("#reply").append("<div class='ContentItem AnswerItem' name='156837738'"
					+"data-za-module='AnswerItem' data-za-module-info='{'card':{'content':{'type':'Answer','token':'156837738','upvote_num':133,'comment_num':72,'publish_timestamp':null,'parent_token':'56314897','author_member_hash_id':'4fb8434a7c7c02f2055dde1e2e2e9769'}}}'>"
					+"<div class='ContentItem-meta'><div class='AnswerItem-meta AnswerItem-meta--related'>"
					+"<div class='AuthorInfo'><span class='UserLink AuthorInfo-avatarWrapper'>"
					+"<div class='Popover'><div id='Popover-69749-39451-toggle' aria-haspopup='true' aria-expanded='false'"
					+"aria-owns='Popover-69749-39451-content'><a class='UserLink-link' href='/people/yang-liu-54-49'>"
					+"<img class='Avatar AuthorInfo-avatar' src='"+data[0].users[j].upic+"'"
					+"srcset='https://pic1.zhimg.com/63020cca4_l.jpg 2x' alt='"+data[0].users[j].uname+"' style='width: 38px; height: 38px;'></a></div></div></span>"
					+"<div class='AuthorInfo-content'><div class='AuthorInfo-title'><div class='AuthorInfo-name'>"
					+"<span class='UserLink'><div class='Popover'><div id='Popover-69752-22834-toggle' aria-haspopup='true' aria-expanded='false'"
					+"aria-owns='Popover-69752-22834-content'><a class='UserLink-link' href='/people/yang-liu-54-49'>"+data[0].users[j].uname+"</a>"
					+"</div></div></span></div></div><div class='RichText AuthorInfo-badge'>"+data[0].users[j].usign+"</div></div></div>"
					+"<div class='AnswerItem-extraInfo'><span class='Voters'><button class='Button Button--plain' type='button'>133人赞同了该回答</button>"
					+"</span></div></div></div><div class='RichContent RichContent--unescapable'>"
					+"<div class='RichContent-inner' style='word-wrap:break-word;'><span class='RichText CopyrightRichText-richText'>"+data[0].rcontent+""
					+"</span>"
					+"</div><div class='ContentItem-time'><a href='/question/56314897/answer/156837738' target='_blank'>"
					+"<span data-tooltip='发布于 "+data[0].rtime+"'>编辑于 "+data[0].rtime+"</span></a></div>"
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
},"json");

