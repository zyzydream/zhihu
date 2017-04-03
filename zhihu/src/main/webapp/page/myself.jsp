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
<link href="bootstrap-3.3.4/dist/css/bootstrap.min.css"
	tppabs="bootstrap-3.3.4/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="bootstrap-3.3.4/docs/examples/blog/blog.css"
	tppabs="bootstrap-3.3.4/docs/examples/blog/blog.css" rel="stylesheet">
<script
	src="bootstrap-3.3.4/docs/assets/js/ie-emulation-modes-warning.js"
	tppabs="bootstrap-3.3.4/docs/assets/js/ie-emulation-modes-warning.js"></script>
<link type="text/css" rel="stylesheet" href="css/myself.css">


</head>
<body>
	<div>
		<header class="Sticky AppHeader is-fixed" role="banner"
			data-za-module="TopNavBar"
			style="width: 1349px; top: 0px; left: 0px;">
		<div class="AppHeader-inner">
			<a href="/" aria-label="知乎">知乎
			<!-- <a class="navbar-brand" href="#">知乎</a> -->
			<!-- <svg class="Icon Icon--logo"
						 aria-hidden="true"
						style="fill: rgb(15, 136, 235); height: 30px; width: 64px;">
				</svg> -->
			</a>
			<nav class="AppHeader-nav" role="navigation"> <a
				class="AppHeader-navItem" href="/page/homepage.jsp">首页</a> <a
				class="AppHeader-navItem" href="/explore">发现</a> <a
				class="AppHeader-navItem" href="/topic">话题</a> </nav>
			<div class="SearchBar" role="search">
				<div class="SearchBar-toolWrapper">
					<form class="SearchBar-tool">
						<div>
							<div class="Popover">
								<div class="SearchBar-input Input-wrapper Input-wrapper--grey">
									<input id="Popover-21490-83503-toggle" class="Input"
										type="text" maxlength="100" value="" autocomplete="off"
										role="combobox" aria-expanded="false" aria-autocomplete="list"
										aria-activedescendant="AutoComplete-21488-96386--1"
										aria-haspopup="true" aria-owns="Popover-21490-83503-content"
										placeholder="搜索你感兴趣的内容…">
								</div>
							</div>
						</div>
						<button class="Button SearchBar-searchIcon Button--plain"
							aria-label="搜索" type="button">
	
						</button>
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
						aria-owns="Popover-21670-22202-content">
						
					</button>
				</div>
				<div>
					<div class="Popover Messages AppHeader-messages">
						<button id="Popover-21674-74337-toggle"
							class="Button Messages-icon Button--plain" type="button"
							aria-haspopup="true" aria-expanded="false"
							aria-owns="Popover-21674-74337-content">
							
						</button>
					</div>
				</div>
				<div class="AppHeader-profile">
					<div class="Popover">
						<button id="Popover-21677-9959-toggle"
							class="Button AppHeader-profileEntry Button--plain" type="button"
							aria-haspopup="true" aria-expanded="false"
							aria-owns="Popover-21677-9959-content">
							<img class="Avatar"
								src="/zhihu/images/touxiang.jpg"
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
				data-za-module="Unknown" data-za-module-info="{"card":{"content":{"type":"User","token":"rui-you-93"}}}">
				<div class="Card">
					<div class="ProfileHeader-userCover">
						<div class="UserCoverEditor">
							<div class="UserCoverGuide">
								<div class="UserCoverGuide-inner">
									<div class="UserCoverGuide-buttonContainer">
										<button class="Button DynamicColorButton" type="button">
											上传封面图片
										</button>
									</div>
									<div class="UserCoverGuide-dialog">
										<h4 class="UserCoverGuide-dialogHead">上传一张图片，展示在这里</h4>
										<div class="UserCoverGuide-dialogContent">
											<p class="UserCoverGuide-dialogDescription">你可以使用自己的摄影作品、你喜欢的照片，或是任何能展现你特质的图片。</p>
											<a href="https://www.zhihu.com/question/21757507"
												target="_blank">哪里能找到可免费使用的优质图片？</a>
										</div>
									</div>
								</div>
								<ul class="UserCoverGuide-items">
									<li class="UserCoverGuide-item" style="background-image: url("https://static.zhihu.com/heifetz/guide-cover-1.4423ce0fcec2132f058c.jpg");"></li>
									<li class="UserCoverGuide-item" style="background-image: url("https://static.zhihu.com/heifetz/guide-cover-2.4c5018526e42872a056b.jpg");"></li>
									<li class="UserCoverGuide-item" style="background-image: url("https://static.zhihu.com/heifetz/guide-cover-3.d59ac68c89726deb3a26.jpg");"></li>
									<li class="UserCoverGuide-item" style="background-image: url("https://static.zhihu.com/heifetz/guide-cover-4.5518ba1a1aeb013b4c5c.jpg");"></li>
									<li class="UserCoverGuide-item" style="background-image: url("https://static.zhihu.com/heifetz/guide-cover-5.2b2adaebc37bf48bacae.jpg");"></li>
								</ul>
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
									<img class="Avatar Avatar--large UserAvatar-inner"
										src="/zhihu/images/touxiang.jpg"
										style="width: 160px; height: 160px;">
								</div>
								<div class="Mask UserAvatarEditor-mask Mask-hidden">
								<img src="/zhihu/images/touxiang.jpg">
									<div
										class="Mask-mask Mask-mask--black UserAvatarEditor-maskInner"></div>
									<div class="Mask-content">
										<img src="/zhihu/images/touxiang.jpg">
										<div class="UserAvatarEditor-maskInnerText">修改我的头像</div>
									</div>
								</div>
								<input type="file" accept="image/png,image/jpeg"
									style="display: none;">
							</div>
							<div class="ProfileHeader-content">
								<div class="ProfileHeader-contentHead">
									<h1 class="ProfileHeader-title">
										<span class="ProfileHeader-name">睿又</span> <span
											class="RichText ProfileHeader-headline">IT</span>
									</h1>
								</div>
								<span class="ProfileHeader-tips">暂无个人资料</span>
								<div class="ProfileHeader-contentFooter">
									<div class="ProfileButtonGroup ProfileHeader-buttons">
										<button class="Button Button--blue" type="button">编辑个人资料</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="header1">
				<ul class="Tabs ProfileMain-tabs" role="tablist">
					<li class="Tabs-item Tabs-item--noMeta" role="tab"
						aria-controls="Profile-activities"><a
						class="Tabs-link is-active" href="/zhihu/dynstate/m2" >动态</a>
					</li>
					<li class="Tabs-item" role="tab" aria-controls="Profile-answers">
						<a class="Tabs-link" href="/zhihu/dynstate/m3"> 回答 <span
							class="Tabs-meta">1</span>
					</a>
					</li>
					<li class="Tabs-item" role="tab" aria-controls="Profile-posts">
						<a class="Tabs-link" href="/zhihu/page/myself3.jsp"> 分享 <span
							class="Tabs-meta">2</span>
					</a>
					</li>
					<li class="Tabs-item" role="tab" aria-controls="Profile-asks"><a
						class="Tabs-link" href="/zhihu/page/myself4.jsp"> 提问 <span
							class="Tabs-meta">1</span>
					</a></li>
					<li class="Tabs-item" role="tab"
						aria-controls="Profile-collections"><a class="Tabs-link"
						href="/zhihu/page/myself5.jsp"> 收藏 <span
							class="Tabs-meta">1</span>
					</a></li>
					<li class="Tabs-item Tabs-item--noMeta" role="tab"
						aria-controls="Profile-following"><a class="Tabs-link"
						href="/zhihu/page/myself6.jsp">关注</a></li>
				</ul>
			</div>


			<div class="page-header" style="margin: 0px; width: 640px;">
				<h2 style="padding-left: 10px; padding-top: 10px">我的动态</h2>
			</div>
			<span id="myself">
				<div class="row featurette" style="padding-left: 10px;padding-top: 10px">
					<div class="col-md-7">
						<h2 class="featurette-heading" style="font-size: 20px;">
							<span class="text-muted" style="font-size: 13px">来自话题：'+data[i].ttopic+'</span><br />'+data[i].etitle+'
						</h2>
						<h2 class="featurette-heading" style="font-size: 13px;">
							<img  src="/zhihu/images/touxiang.jpg" style="width:50px;height:50px">&nbsp;&nbsp;&nbsp;
							'+data[i].uname+' &nbsp;&nbsp;&nbsp; <span class="text-muted"
								style="font-size: 12px; font-weight: 300;">'+data[i].usign+'</span>
						</h2>
						<p class="lead" style="font-size: 14px;">'+data[i].econtent+'</p>
						<span> <a href="#" style="font-size: 13px; font-weight: 40">阅览
								<span class="badge" style="width: 20px; padding: 0px;">42</span>
						</a> <a href="#" style="font-size: 13px; font-weight: 40">点赞 <span
								class="badge" style="width: 20px; padding: 0px;">42</span></a> <a
							href="#" style="font-size: 13px; font-weight: 40">收藏 <span
								class="badge" style="width: 20px; padding: 0px;">42</span></a>
						</span>
					</div>
					<div class="col-md-5">
						<img class="featurette-image img-responsive center-block"
							data-src="holder.js/500x500/auto"
							tppabs="http://v3.bootcss.com/examples/carousel/holder.js/500x500/auto"
							alt="Generic placeholder image">
					</div>
				</div>
				<hr class="featurette-divider">
			</span>
		</div>
		</div>

		<script src="js/jquery.min.js"></script>
		<script src="bootstrap-3.3.4/dist/js/bootstrap.min.js"></script>
		<script
			src="bootstrap-3.3.4/docs/assets/js/ie10-viewport-bug-workaround.js"
			tppabs="bootstrap-3.3.4/docs/assets/js/ie10-viewport-bug-workaround.js"></script>
		<script type="text/javascript" src="js/myself.js"></script>
</body>
</html>