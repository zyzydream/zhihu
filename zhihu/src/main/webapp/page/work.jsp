<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<base href="/zhihu/">
<meta charset="UTF-8">
<link type="text/css" rel="stylesheet" href="css/work.css">
<link rel="shortcut icon" href="images/logohead.png">
<title>首页--知乎</title>
</head>
<body>
	<div class="modal-wrapper">
		<div class="modal-dialog Guide" tabindex="0" style="" role="dialog">
			<div class="modal-dialog-title">
				<span id=":5" class="modal-dialog-title-text" role="heading"></span>
				<span class="modal-dialog-title-close" role="button" tabindex="0"
					aria-label="Close"></span>
			</div>
			<div class="modal-dialog-content">
				<div class="Guide-BioEditor">
					<div class="Guide-header">
						<h2 class="Guide-title">你的职业或专业是什么？</h2>
						<p class="Guide-subtitle">简单介绍自己，会为你挑选你可能感兴趣话题</p>
					</div>
					<div class="Guide-content">
						<div class="Guide-BioEditorForm">
							<button
								class="Guide-BioEditorButton Button Button-flatPrimary js-submit"><a ref="page/tall.jsp">完成</a></button>
							<div class="Guide-BioEditorInputWrapper">
								<input class="Guide-BioEditorInput Input" name="bio"
									placeholder="比如医生、律师、设计师">
							</div>
						</div>
						<div class="Guide-BioEditorUsers">
							<p class="Guide-BioEditorDescription">他们是这样介绍自己的</p>
							<ul>
								<li class="Guide-BioEditorItem Guide-BioEditorItem--first">
									<img class="Guide-BioEditorAvatar" src="images/110.png"
									width="50" height="50"> <span class="Guide-BioEditorBio">系外行星的研究生</span>
								</li>
								<li class="Guide-BioEditorItem Guide-BioEditorItem--second">
									<img class="Guide-BioEditorAvatar"
									src="images/111.jpg" width="50"
									height="50"> <span class="Guide-BioEditorBio">Lonely
										Planet 作者，潜水员</span>
								</li>
								<li class="Guide-BioEditorItem Guide-BioEditorItem--third">
									<img class="Guide-BioEditorAvatar"
									src="images/112.png"
									width="50" height="50"> <span class="Guide-BioEditorBio">北京大学南亚学系</span>
								</li>
								<li class="Guide-BioEditorItem Guide-BioEditorItem--fourth">
									<img class="Guide-BioEditorAvatar"
									src="images/113.jpg"
									width="50" height="50"> <span class="Guide-BioEditorBio">机械工程师，pegasister</span>
								</li>
								<li class="Guide-BioEditorItem Guide-BioEditorItem--fifth">
									<img class="Guide-BioEditorAvatar"
									src="images/114.png"
									width="50" height="50"> <span class="Guide-BioEditorBio">钛度科技/电子竞技</span>
								</li>
								<li class="Guide-BioEditorItem Guide-BioEditorItem--sixth">
									<img class="Guide-BioEditorAvatar"
									src="images/115.jpg" width="50"
									height="50"> <span class="Guide-BioEditorBio">工科女博士/专业西点师/东京时差党</span>
								</li>
							</ul>
						</div>

					</div>
					<div class="Guide-BioEditor">
						<div class="Guide-header">
							<div class="Guide-content"></div>
						</div>
						<div class="modal-dialog-buttons" style="display: none;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>