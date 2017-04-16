<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<base href="/zhihu/">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<title>知乎</title>
<link type="text/css" rel="stylesheet" href="css/myself.css">
<!-- <link type="text/css" rel="stylesheet" href="bootstrap-3.3.4/bootstrap-fileinput-master/css/fileinput.css">
 -->
<link href="bootstrap-3.3.4/dist/css/bootstrap.min.css"
	tppabs="bootstrap-3.3.4/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="bootstrap-3.3.4/docs/examples/blog/blog.css"
	tppabs="bootstrap-3.3.4/docs/examples/blog/blog.css" rel="stylesheet">
<script
	src="bootstrap-3.3.4/docs/assets/js/ie-emulation-modes-warning.js"
	tppabs="bootstrap-3.3.4/docs/assets/js/ie-emulation-modes-warning.js"></script>
<link type="text/css" rel="stylesheet" href="css/myself.css">
<link rel="shortcut icon" href="images/logohead.png">
</head>
<body>
	<div>
		<header class="Sticky AppHeader is-fixed" role="banner"
			data-za-module="TopNavBar"
			style="width: 1349px; top: 0px; left: 0px;">
		<div class="AppHeader-inner">
			<a href="/zhihu/page/homepage.jsp" aria-label="知乎">知乎</a>
			<nav class="AppHeader-nav" role="navigation"> <a
				class="AppHeader-navItem" href="/zhihu/page/homepage.jsp">首页</a> <a
				class="AppHeader-navItem" href="/explore">发现</a> <a
				class="AppHeader-navItem" href="/topic">话题</a> </nav>
			<div class="SearchBar" role="search">
				<div class="SearchBar-toolWrapper">
					<form class="SearchBar-tool">
						<div>
							<div class="Popover">
								<div class="SearchBar-input Input-wrapper Input-wrapper--grey">
									<input id="Popover-21490-83503-toggle" class="Input"
										type="text" maxlength="100" value="" role="combobox"
										aria-expanded="false" aria-autocomplete="list"
										aria-activedescendant="AutoComplete-21488-96386--1"
										aria-haspopup="true" aria-owns="Popover-21490-83503-content"
										placeholder="搜索你感兴趣的内容…">
								</div>
							</div>
						</div>
						<button class="Button SearchBar-searchIcon Button--plain"
							aria-label="搜索" type="button"></button>
						<div class="SearchBar-iconDecorator"></div>
					</form>
				</div>
				<button
					class="Button SearchBar-askButton Button--primary Button--blue"
					type="button">提问</button>
			</div>
			<div class="AppHeader-userInfo">
				<div class="Popover PushNotifications AppHeader-notifications">
					<button id="Popover-21670-22202-toggle"
						class="Button PushNotifications-icon Button--plain" type="button"
						aria-haspopup="true" aria-expanded="false"
						aria-owns="Popover-21670-22202-content"></button>
				</div>
				<div>
					<div class="Popover Messages AppHeader-messages">
						<button id="Popover-21674-74337-toggle"
							class="Button Messages-icon Button--plain" type="button"
							aria-haspopup="true" aria-expanded="false"
							aria-owns="Popover-21674-74337-content">消息</button>
					</div>
				</div>
				<div class="AppHeader-profile">
					<div class="Popover">
						<button id="Popover-21677-9959-toggle"
							class="Button AppHeader-profileEntry Button--plain" type="button"
							aria-haspopup="true" aria-expanded="false"
							aria-owns="Popover-21677-9959-content">
							<img class="Avatar" src="/zhihu/images/touxiang.jpg"
								srcset="/zhihu/images/touxiang.jpg"
								style="width: 30px; height: 30px;">
						</button>
					</div>
				</div>
			</div>
		</div>
		</header>

		<div class="container">
			<div id="ProfileHeader" class="ProfileHeader"
				data-za-module="Unknown">
				<div class="Card">
					<div class="ProfileHeader-userCover">
						<div class="UserCoverEditor">

							<div class="UserCoverGuide">
								<!-- <img alt="yy" src="/zhihu/images/1.jpg" style="width:1349px;height:141px"> -->
								<div class="UserCoverGuide-inner">

									<div class="UserCoverGuide-buttonContainer">
										<form enctype="multipart/form-data" method="post" id="uploads">
											<input class="Button DynamicColorButton" type="file"
												id="changgeimage" name="toppic" onchange="chgPic(this)"
												onclick="updatePic()" /> <img src="/zhihu/images/1.jpg"
												id="pic" width="100" height="100">
										</form>
									</div>
								</div>
							</div>
							<div class="UserCover UserCover--colorBlock"></div>
							<input type="file" accept="image/png,image/jpeg"
								style="display: none;">
						</div>
					</div>
					<div class="ProfileHeader-wrapper">
						<div class="ProfileHeader-main">
							<div class="UserAvatarEditor ProfileHeader-avatar"
								style="top: -74px;">
								<div class="UserAvatar">
									<div id="hhh"></div>
									<img class="Avatar Avatar--large UserAvatar-inner"
										src="/zhihu/images/touxiang.jpg"
										style="width: 160px; height: 160px;">
								</div>
								<input type="file" accept="image/png,image/jpeg"
									style="display: none;">
							</div>
							<div class="ProfileHeader-content">
								<div class="ProfileHeader-contentHead">
									<h1 class="ProfileHeader-title">
										<span class="ProfileHeader-name"><%=request.getSession().getAttribute("username")%></span>
										<span class="RichText ProfileHeader-headline"><%=request.getSession().getAttribute("usign")%></span>
									</h1>
								</div>
								<span class="ProfileHeader-tips">暂无个人资料</span>
								<div class="ProfileHeader-contentFooter">
									<div class="ProfileButtonGroup ProfileHeader-buttons">
										<a class="Button Button--blue" type="button" href="/zhihu/page/ediuorinfo.jsp">编辑个人资料</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="zhuyezhuti">
				<div class="panel panel-default"
					style="width: 660px; margin-left: 15px;">
					<div class="panel-body">
						<span id="myself"> <span id="myself1"> </span> <span
							id="myself2">
								<div class="dropdown">
									<a id="dLabel" data-target="#" href="http://example.com"
										data-toggle="dropdown" aria-haspopup="true" role="button"
										aria-expanded="false"> 我关注的专栏 <span
										class="caret"></span>
									</a>
									<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
										<li><a>我关注的专栏</a></li>
										<li><a>我关注的话题</a></li>
										<li><a>我关注的问题</a></li>
										<li><a>我关注的收藏</a></li>
									</ul>
								</div>
						</span>

						</span>
						<!-- <span>
							<div style="width: 70px; float: left; height: 20px">
								<a style="font-size: 13px; font-weight: 40; border-style: none;"
									class="btn btn-default dropdown-toggle" type="button"
									id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">收藏
									42</a>
								<ul class="dropdown-menu" role="menu"
									aria-labelledby="dropdownMenu1" id="dropdown-menu">
									<li role="presentation"><a role="menuitem" tabindex="-1"
										href="#">Regular link</a></li>
									<li role="presentation"><a role="menuitem" tabindex="-1"
										href="#">Disabled link</a></li>
									<li role="presentation"><a role="menuitem" tabindex="-1"
										href="#">Another link</a></li>
								</ul>
							</div>
							<div style="width: 70px; float: left; height: 20px"
								class="btn-group" role="group" aria-label="...">
								<button
									style="font-size: 13px; font-weight: 40; border-style: none;"
									type="button" class="btn btn-default">
									<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>点赞
									42
								</button>
							</div>
							<div style="width: 70px; float: left; height: 20px"
								class="btn-group" role="group" aria-label="...">
								<button
									style="font-size: 13px; font-weight: 40; border-style: none;"
									type="button" class="btn btn-default">
									<span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>阅览
									42
								</button>
							</div>
						</span> -->

					</div>
				</div>
			</div>
			<div class="totalinfos">
				<table class="table table-striped"
					style="width: 300px; text-align: left; float: right; margin-right: -60px; margin-top: -170px">
					<tr>
						<td class="info">关注的话题</td>
						<td class="info"><%=request.getSession().getAttribute("myattentop")%></td>
					</tr>
					<tr>
						<td class="info">关注的专题</td>
						<td class="info"><%=request.getSession().getAttribute("myattenzhuanti")%></td>
					</tr>
					<tr>
						<td class="info">关注的收藏夹</td>
						<td class="info"><%=request.getSession().getAttribute("myattenfav")%></td>
					</tr>
				</table>
			</div>


			<div class="panel panel-default"
				style="width: 283px; height: 120px; margin-left: 700px; margin-top: -318px">
				<div class="panel-body">
					<ul class="list-inline">
						<li style="padding-left: 40px; padding-top: 10px;">关注了</li>
						<li style="padding-left: 80px; padding-top: 10px;">关注者</li>
					</ul>
					<ul class="list-inline">
						<li
							style="padding-left: 40px; padding-top: 10px; text-align: center"><%=request.getSession().getAttribute("myatten")%></li>
						<li
							style="padding-left: 120px; padding-top: 10px; text-align: center"><%=request.getSession().getAttribute("attenme")%></li>
					</ul>
				</div>
			</div>
		</div>

		<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content" id="favinfos">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
						<h4 class="modal-title" id="myModalLabel">添加收藏</h4>
						<h5></h5>
					</div>
					<div class="modal-body">

						<div class="form-group">
							<label for="txt_departmentname">收藏夹名称</label> <input type="text"
								name="txt_departmentname" class="form-control"
								id="txt_departmentname" placeholder="收藏夹名称">
						</div>
						<div class="form-group">
							<label for="txt_statu">描述</label> <input type="text"
								name="txt_statu" class="form-control" id="txt_statu"
								placeholder="状态">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">
							<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>关闭
						</button>
						<button type="button" id="btn_submit" class="btn btn-primary"
							data-dismiss="modal">
							<span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>保存
						</button>
					</div>
				</div>
			</div>
		</div>


		<form action="dynstate/createf" id="ssss">

			<div class="modal fade" id="myModal2" tabindex="-1" role="dialog"
				aria-labelledby="myModalLabel" action="dynstate/createf"
				method="post">

				<div class="modal-dialog" role="document">
					<div class="modal-content" id="favinfos2">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">×</span>
							</button>
							<h4 class="modal-title" id="myModalLabel2" style="float: center">添加收藏</h4>
						</div>
						<div class="modal-body">

							<div class="form-group">
								<label for="txt_departmentname">收藏夹名称</label> <input type="text"
									name="fname" class="form-control" id="fname"
									placeholder="收藏夹名称">
							</div>

							<div class="form-group">
								<label for="txt_statu">描述</label> <input type="text"
									name="finfo" class="form-control" id="finfo"
									placeholder="收藏描述(可选)">
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default"
								data-dismiss="modal">
								<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>取消
							</button>
							<button type="button" id="btn_submit" class="btn btn-primary"
								data-dismiss="modal" onclick="yesfav()">
								<span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>确认创建
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>



	</div>

	<script src="js/jquery.min.js"></script>
	<script src="bootstrap-3.3.4/dist/js/bootstrap.min.js"></script>
	<script
		src="bootstrap-3.3.4/docs/assets/js/ie10-viewport-bug-workaround.js"
		tppabs="bootstrap-3.3.4/docs/assets/js/ie10-viewport-bug-workaround.js"></script>
	<script type="text/javascript" src="js/myself.js"></script>
	<script src='js/layer/layer.js' type="text/javascript"></script>
	<!-- 	<script type="text/javascript" src="bootstrap-3.3.4/bootstrap-fileinput-master/js/fileinput.js"></script>
 -->
	<script type="text/javascript" src="/bootstrap-3.3.4/js/popover.js"></script>
	<script type="text/javascript" src="js/jquery-form.js"></script>
</body>
</html>