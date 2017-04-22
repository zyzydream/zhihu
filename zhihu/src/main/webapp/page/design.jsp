<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<base href="/zhihu/">
<link rel="shortcut icon" href="images/logohead.png">
<meta charset="UTF-8">
<title>账号设置</title>
<link type="text/css" rel="stylesheet" href="css/design.css">
<link href="bootstrap-3.3.4/dist/css/bootstrap.min.css"
	tppabs="bootstrap-3.3.4/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="bootstrap-3.3.4/docs/examples/blog/blog.css"
	tppabs="bootstrap-3.3.4/docs/examples/blog/blog.css" rel="stylesheet">
<script
	src="bootstrap-3.3.4/docs/assets/js/ie-emulation-modes-warning.js"
	tppabs="bootstrap-3.3.4/docs/assets/js/ie-emulation-modes-warning.js"></script>
</head>
<body class="zhi">
	<div class="zu-top" role="navigation" data-za-module="TopNavBar">
		<div id="zh-top-inner" class="zg-wrap modal-shifting clearfix">
			<a id="zh-top-link-logo" class="zu-top-link-logo" href="/"
				data-za-c="view_home" data-za-a="visit_home"
				data-za-l="top_navigation_zhihu_logo">知乎</a>
			<div class="top-nav-profile">
				<a id=":0" class="zu-top-nav-userinfo " href="page/myself.jsp"
					role="button" aria-haspopup="true" aria-activedescendant=""> <span
					class="name"><%=request.getSession().getAttribute("username") %></span> 
					<img class="Avatar" src="images/poto.jpg"
					alt="dsvb"> <span id="zh-top-nav-new-pm"
					class="zg-noti-number zu-top-nav-pm-count"
					style="visibility: hidden" data-count="0"> </span>
				</a>
				<ul id="top-nav-profile-dropdown" class="top-nav-dropdown"
					aria-labelledby=":0">
					<li><a id=":1" href="page/homepage.jsp" tabindex="-1"> <i
							class="zg-icon zg-icon-dd-home"></i> 我的主页
					</a></li>
					<li><a id=":2" href="page/litter.jsp" tabindex="-1"> <i
							class="zg-icon zg-icon-dd-pm"></i> 私信 <span
							id="zh-top-nav-pm-count"
							class="zu-top-nav-pm-count zg-noti-number"
							style="visibility: hidden" data-count="0"> </span>
					</a></li>
					<li><a id=":3" href="page/design.jsp" tabindex="-1"> <i
							class="zg-icon zg-icon-dd-settings"></i> 设置
					</a></li>
					<li><a id=":4" href="back/login.jsp" tabindex="-1"> <i
							class="zg-icon zg-icon-dd-logout"></i> 退出
					</a></li>
				</ul>
			</div>
			<button id="zu-top-add-question" class="zu-top-add-question">提问</button>
			<div id="zh-top-search" class="zu-top-search" role="search">
				<form id="zh-top-search-form" class="zu-top-search-form"
					method="GET" action="/search">
					<input name="type" value="content" type="hidden"> <label
						class="hide-text" for="q">知乎搜索</label> <input id="q"
						class="zu-top-search-input" name="q" autocomplete="off" value=""
						maxlength="100" placeholder="搜索你感兴趣的内容..." role="combobox"
						aria-autocomplete="list" type="text">
					<button class="zu-top-search-button" type="submit">
						<span class="hide-text">搜索</span> <span
							class="sprite-global-icon-magnifier-dark"></span>
					</button>
				</form>
			</div>
			<div id="zg-top-nav" class="zu-top-nav">
				<ul class="zu-top-nav-ul zg-clear">
					<li id="zh-top-nav-home" class="zu-top-nav-li "><a
						id="zh-top-link-home" class="zu-top-nav-link"
						href="page/homepage.jsp" data-za-c="view_home"
						data-za-a="visit_home" data-za-l="top_navigation_home">首页</a></li>
					<li id="zh-top-nav-explore" class="zu-top-nav-li "><a
						class="zu-top-nav-link" href="page/explore.jsp">发现</a></li>
					<li class="top-nav-noti zu-top-nav-li "><a
						id="zh-top-nav-count-wrap" class="zu-top-nav-link"
						href="javascript:;" role="button"> <span class="mobi-arrow"></span>
							消息 <span id="zh-top-nav-count"
							class="zu-top-nav-count zg-noti-number" style="display: none;">0</span>
					</a></li>
				</ul>
			</div>
		</div>
	</div>

	<div class="zg-wrap zu-main clearfix no-sidebar" role="main">
		<div class="zu-main-content">
			<div class="zu-main-content-inner">
				<ul class="tab-navs">
					<li class="tab-nav active" onclick="lick('infomation-form',1)"><a
						href="#" onclick="return false">基本资料</a></li>
					<li class="tab-nav" onclick="lick('account-form',3)"><a
						href="#" onclick="return false">帐号和密码</a></li>
				</ul>
			</div>
			<div id="infomation-form">
				<form class="zm-settings-account" action="/settings/profile"
					method="POST" autocomplete="off">
					<div class="settings-section">
						<div class="settings-item clearfix">
							<lable class="settings-item-title">头像</lable>
							<div class="head photo" style="padding-left: 90px;">
								<img alt="头像" src="images/115.jpg" style="width: 50px; height: 50px">
							</div>
						</div>
						<div class="settings-item clearfix">
							<label class="settings-item-title" for="fullname">姓名</label>
							<div id="rename-section" class="settings-item-content rename-section">
								<span class="name">dsvb</span>
							</div>
						</div>
						<div class="settings-item clearfix">
							<label class="settings-item-title with-input" for="url_token">个性签名</label>
							<div class="settings-item-content">
								<input id="url_token" class="zg-form-text-input"
									autocomplete="off" name="url_token"  onkeydown="this.onkeyup();" 
									 size="100">
							</div>
						</div>
					</div>
					<div class="settings-save">
						<button class="zg-btn-blue" type="submit">保存</button>
					</div>
				</form>
			</div>
			<div id="account-form" class="form">
				<div class="settings-acount-main">
					<div class="settings-intro">绑定手机和邮箱，并设置密码，帐号更安全。</div>
					<div class="settings-section">
						<label class="settings-item-title">邮箱</label>
						<div class="settings-item-content form-container">
							<div class="group group-text hidden-expanded">
								<span class="text email">邮箱号</span>
							</div>
						</div>
					</div>
				</div>

				<div class="settings-item clearfix" style="height: 300px">
					<label class="settings-item-title">帐号密码</label>
					<div class="settings-item-content form-container">
						<div onclick="modify();" id="modifypass"
							class="group group-text hidden-expanded">
							<a href="#" onclick="return false">修改密码</a>
						</div>
						<form class="form-basic panel hidden password-form" method="POST"
							novalidate="novalidate">
							<div class="group">
								<input id="password" class="text" required=""
									placeholder="输入新密码" name="password" type="password">
							</div>
							<div class="group">
								<input class="text" required="" placeholder="再次输入"
									name="password_repeat" data-rule-equalto="#password"
									type="password">
							</div>
							<button class="next zg-btn-blue">确定</button>
						</form>
					</div>
				</div>
			</div>
			<div id="shield-form" class="form"></div>
		</div>
	</div>


	<br>
	<div id="zh-footer" class="zh-footer">
		<div class="content zg-wrap clearfix">
			<ul>
				<li><a href="https://liukanshan.zhihu.com" target="_blank">刘看山</a></li>
				<li><a href="/question/19581624" target="_blank">知乎指南</a></li>
				<li><a href="javascript:;" id="js-feedback-button">建议反馈</a></li>
				<li><a href="/app" target="_blank">移动应用</a></li>
				<li><a href="/careers">加入知乎</a></li>
				<li><a href="/terms" target="_blank">知乎协议</a></li>
				<li><a href="/jubao" target="_blank">举报投诉</a></li>
				<li><a href="/contact">联系我们</a></li>
			</ul>
			<span class="copy">&copy; 2017 知乎</span>
		</div>
	</div>


	<script type="text/javascript" src="easyui/jquery.min.js"></script>
	<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
	<script src="js/holder.js"></script>
	<script src="js/ie10-viewport-bug-workaround.js"></script>
	<script type="text/javascript" src="js/design.js"></script>
	<script src="js/jquery.min.js"></script>
	<script src="bootstrap-3.3.4/dist/js/bootstrap.min.js"></script>
	<script
		src="bootstrap-3.3.4/docs/assets/js/ie10-viewport-bug-workaround.js"
		tppabs="bootstrap-3.3.4/docs/assets/js/ie10-viewport-bug-workaround.js"></script>
	<script type="text/javascript" src="js/myself.js"></script>
	<script src='js/layer/layer.js' type="text/javascript"></script>
	<script type="text/javascript" src="/bootstrap-3.3.4/js/popover.js"></script>
	<script type="text/javascript" src="js/jquery-form.js"></script>
</body>
</html>