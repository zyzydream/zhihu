function TopicIsNot(){
	console.log(document.getElementById('topic').value)
	$('#zh-question-form-tag-err').remove();
	if(document.getElementById('topic').value == ""){
		$('#xuanTopic').append("<span id='zh-question-form-tag-err'>至少添加一个话题</span>");
	}else{
		$('#zh-question-form-tag-err').remove();
	}
}


$.post("topic/all",function(data){
	$("#qtid").empty();
	for(var i=0;i<data.length;i++){
		$("#qtid").append("<option>"+data[i].tid+"-"+data[i].ttopic+"</option>")
	}
},"json");


$("#Addquestion").form({
	url:"question/add",
	success: function(data){
		if(data == "true"){
			alert("发布成功!!!!");
			$("#zh-question-suggest-title-content").value=null;
			$("#zh-question-suggest-title-content").value=null;
			 location.reload()
		}else{
			$.messager.show({
    			title:'添加问题',
    			msg:'添加失败！！！',
    			showType:'show',
    			style:{
    				top:document.body.scrollTop+document.documentElement.scrollTop,
    			}
    		});
		}
	}
});


function add(){
	$("#Addquestion").submit();
}
