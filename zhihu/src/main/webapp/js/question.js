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
