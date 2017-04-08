<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<base href="${zhihuName}">
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css"
	href="easyui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="easyui/themes/icon.css">
<link type="text/css" rel="stylesheet" href="css/write.css">
<link rel="shortcut icon" href="images/logohead.png">
<title>写文章</title>
<body class="ng-scope ng-animate page-write">
	<div id="header-holder">
		<div class="ng-scope">
			<header id="header" class="navbar ng-scope ng-isolate-scope">
				<div class="navbar-logo-container">
					<a href="page/homepage.jsp" target="_blank" aria-label="知乎首页">首页</a>
				</div>
				<div class="navbar-title-container clearfix show">
					<div class="titles oneline">
						<div class="main-title ng-binding ng-scope">写文章</div>
					</div>
					<div class="status ng-binding ng-scope">草稿自动保存</div>
				</div>
				<div class="publish-section ng-scope">

					<a class="pop-button ng-binding ng-scope" onclick="addEssay()"> 发布 </a>

				</div>


				<div class="navbar-menu-container ui-menu-button ng-scope close">
					<a class="menu-button ng-scope" href="javascript:void(0);"
						aria-label="更多选项">更多</a>
				</div>
				<div class="navbar-content"></div>
			</header>
		</div>
	</div>

	<section class="receptacle">
		<form method="post" id="addEssay" enctype="multipart/form-data">
			<div class="title-input-container">
				<textarea id="etitle" name="etitle"
					class="title ng-pristine ng-invalid ng-invalid-required"
					placeholder="请输入标题" style="height: 47px;"></textarea>
			</div>
			<div class="toolbar-holder unsticky">
				<textarea id="econtent" name="econtent" class="toolbar-holder sticky"
					style="height: 450px" placeholder="请输入正文"></textarea>
			</div>
		</form>
	</section>
</body>
<script type="text/javascript" src="easyui/jquery.min.js"></script>
<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" charset="utf-8"
	src="ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8"
	src="ueditor/ueditor.all.min.js"></script>
<script type="text/javascript" charset="utf-8"
	src="ueditor/lang/zh-cn/zh-cn.js"></script>
<script type="text/javascript" src="js/write.js"></script>
</html>