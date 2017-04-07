UE.getEditor('js-editor-toolbar');	//<textarea>转变为富文本编辑工具

$("#addEssay").form({
	url:"essay/add",
	success: function(data){
		alert(data);
	}
});

function addEssay(){
	$("#addEssay").submit();
}