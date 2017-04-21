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
		var ids= new Array();
		for(var i=0;i<$(".sprite-global-icon-green-check").length;i++){
			ids[i]=$(".sprite-global-icon-green-check").eq(i).attr("id");
			$.ajax({url:"dynstate/add?tid="+ids[i],async:false,dataType:"json"});	
		}
		window.location.href="../zhihu/page/homepage.jsp";
}
	



