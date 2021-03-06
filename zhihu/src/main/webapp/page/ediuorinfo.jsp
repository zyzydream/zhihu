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
<title>编辑个人信息</title>
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
									<%-- <h1 class="ProfileHeader-title">
										<span class="ProfileHeader-name"><%=request.getSession().getAttribute("username")%></span>
										<span class="RichText ProfileHeader-headline"><%=request.getSession().getAttribute("usign")%></span>
									</h1> --%>
								</div>
								<!-- <span class="ProfileHeader-tips">暂无个人资料</span> -->
								<div class="ProfileHeader-contentFooter">
									<ul>
										<li>睿又</li>
										<li><a>返回主页>></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		
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