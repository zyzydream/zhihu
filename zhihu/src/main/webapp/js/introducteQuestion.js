function TopicIsNot(){
	console.log(document.getElementById('topic').value)
	$('#zh-question-form-tag-err').remove();
	if(document.getElementById('topic').value == ""){
		$('#xuanTopic').append("<span id='zh-question-form-tag-err'>至少添加一个话题</span>");
	}else{
		$('#zh-question-form-tag-err').remove();
	}
}