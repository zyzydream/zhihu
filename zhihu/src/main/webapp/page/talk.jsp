<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<base href="/zhihu/">
<meta charset="UTF-8">
<link type="text/css" rel="stylesheet" href="css/talk.css">
<link rel="shortcut icon" href="images/logohead.png">
<title>首页--知乎</title>
</head>
<body>
	<div class="modal-wrapper">
		<div class="modal-dialog Guide" tabindex="0" style="">
			<div class="modal-dialog-title">
				<span class="modal-dialog-title-text" role="heading"></span> <span
					class="modal-dialog-title-close" role="button" tabindex="0"
					aria-label="Close"></span>
			</div>
			<div class="modal-dialog-content">
				<div class="Guide-Topics">
					<div class="Guide-header">
						<h2 class="Guide-title">你想关注哪些话题？</h2>
						<p class="Guide-subtitle">我们将根据你关注的话题定制首页推荐内容</p>
					</div>
					<div class="Guide-content">
						<ul class="Guide-TopicsList" id="userTopics">
							<!-- 从数据库读取数据 -->
						</ul>
						<p class="Guide-TopicsHint">可以通过搜索和「话题广场」找到更多你想要的话题</p>
					</div>
					<div class="Guide-TopicsFooter GaussianBlur">
							<a href="page/homepage.jsp"><button
									class="Guide-TopicsSubmit Button Button-flatPrimary js-submit"
									id="addTopics" onclick="add()">进入知乎</button></a>
						
					</div>

				</div>
			</div>
			<div class="modal-dialog-buttons" style="display: none;"></div>
		</div>
	</div>

	<script src='js/particles.js' type="text/javascript"></script>
	<script src='js/background.js' type="text/javascript"></script>
	<script type="text/javascript" src="easyui/jquery.min.js"></script>
	<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
	<script src='js/layer/layer.js' type="text/javascript"></script>
	<script src='js/talk.js' type="text/javascript"></script>
</body>
</html>