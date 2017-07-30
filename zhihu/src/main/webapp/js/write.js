UE.getEditor('econtent');	//<textarea>转变为富文本编辑工具

$("#addEssay").form({
	url:"essay/add",
	success: function(data){
		if(data == "true"){
			alert("发布成功!!!!");
			window.location.reload(true);
		}else{
			$.messager.show({
    			title:'添加文章',
    			msg:'添加失败！！！',
    			showType:'show',
    			style:{
    				top:document.body.scrollTop+document.documentElement.scrollTop,
    			}
    		});
		}
	}
});

function addEssay(){
	$("#addEssay").submit();
}

$.post("topic/all",function(data){
	$("#etid").empty();
	for(var i=0;i<data.length;i++){
		$("#etid").append("<option>"+data[i].tid+"-"+data[i].ttopic+"</option>")
	}
},"json");


