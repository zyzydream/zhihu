<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>

<div class="container"> 
    <h2>使用Bootstrap创建模态框</h2> 
    <div id="example" class="modal hide fade in" style="display: none; "> 
        <div class="modal-header"> 
            <a class="close" data-dismiss="modal">×</a> 
            <h3>这是一个模态框标题</h3> 
        </div> 
        <div class="modal-body"> 
            <h4>模态框中的文本</h4> 
            <p>你可以在这添加一些文本。</p> 
        </div> 
        <div class="modal-footer"> 
            <a href="#" class="btn btn-success">唤醒活动</a> 
            <a href="#" class="btn" data-dismiss="modal">关闭</a> 
        </div> 
    </div> 
    <p><a data-toggle="modal" href="#example" class="btn btn-primary btn-large">发动演示模态框</a></p> 
</div> 

<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/holder.js"></script>
	<script src="bootstrap-3.3.4/js/modal.js"></script>
	

</body>
</html>