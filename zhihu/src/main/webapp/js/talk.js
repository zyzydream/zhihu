function changeColor(id){
	var g=document.getElementById(id);
	if(g.className=="Guide-TopicsIcon Guide-TopicsUnCheckedIcon sprite-global-icon-green-check"){
		g.className="Guide-TopicsIcon Guide-TopicsUnCheckedIcon sprite-global-icon-gray-check";
	}else if(g.className=="Guide-TopicsIcon Guide-TopicsUnCheckedIcon sprite-global-icon-gray-check"){
		g.className="Guide-TopicsIcon Guide-TopicsUnCheckedIcon sprite-global-icon-green-check";
	}

}

//异步加载中间的新闻信息
$.post("topic/all",function(data){
	$("#userTopics").empty();
	for(var i=0;i<data.length;i++){
		$("#userTopics").append("<li class='Guide-TopicsItem SquareBlock' data-id='253'>"
				+"<div class='SquareBlock-content'> <img class='Guide-TopicsAvatar' src='"+data[i].tpic+"'>"
				+"<div class='Guide-TopicsMask'></div>"
				+"<div class='Guide-TopicsName'>"+data[i].ttopic+"</div>"
				+"<span class='Guide-TopicsIcon Guide-TopicsUnCheckedIcon sprite-global-icon-gray-check'"
				+"id='"+data[i].tid+"' onclick='changeColor("+data[i].tid+")'></span></div></li>")
	}
},"json");


function add(){
	var id= $(".sprite-global-icon-green-check").attr("id");
	//$.post("dynstate/add?tid="+id,"json");
	$.ajax({
		url:"dynstate/add?tid="+id,
		async: false,
	});
}


