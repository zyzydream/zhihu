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
</head>
<body class="zhi ">
	<div class="zu-top" role="navigation" data-za-module="TopNavBar">
		<div id="zh-top-inner" class="zg-wrap modal-shifting clearfix">
			<a id="zh-top-link-logo" class="zu-top-link-logo" href="/"
				data-za-c="view_home" data-za-a="visit_home"
				data-za-l="top_navigation_zhihu_logo">知乎</a>
			<div class="top-nav-profile">
				<a id=":0" class="zu-top-nav-userinfo " href="/people/bbv-70"
					role="button" aria-haspopup="true" aria-activedescendant=""> 
					<span class="name">dsvb</span> <img class="Avatar" src="images/poto.jpg" alt="dsvb">
					<span id="zh-top-nav-new-pm"
					class="zg-noti-number zu-top-nav-pm-count"
					style="visibility: hidden" data-count="0"> </span>
				</a>
				<ul id="top-nav-profile-dropdown" class="top-nav-dropdown"
					aria-labelledby=":0">
					<li><a id=":1" href="/people/bbv-70" tabindex="-1"> <i
							class="zg-icon zg-icon-dd-home"></i> 我的主页
					</a></li>
					<li><a id=":2" href="/inbox" tabindex="-1"> <i
							class="zg-icon zg-icon-dd-pm"></i> 私信 <span
							id="zh-top-nav-pm-count"
							class="zu-top-nav-pm-count zg-noti-number"
							style="visibility: hidden" data-count="0"> </span>
					</a></li>
					<li><a id=":3" href="/settings" tabindex="-1"> <i
							class="zg-icon zg-icon-dd-settings"></i> 设置
					</a></li>
					<li><a id=":4" href="/logout" tabindex="-1"> <i
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
						id="zh-top-link-home" class="zu-top-nav-link" href="page/homepage.jsp"
						data-za-c="view_home" data-za-a="visit_home"
						data-za-l="top_navigation_home">首页</a></li>
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
					<li class="tab-nav active"><a href="/settings/profile">基本资料</a></li>
					<li class="tab-nav"><a href="/settings/account">帐号和密码</a></li>
					<li class="tab-nav"><a href="/settings/filter">屏蔽</a></li>
				</ul>
			</div>
			<form id="js-settings-account-form" class="zm-settings-account"
				action="/settings/profile" method="POST" autocomplete="off">
				<input name="_xsrf" value="f5c87945329c77b31c12918738783665"
					type="hidden">
				<div class="settings-section">
					<div class="settings-item clearfix">
						<label class="settings-item-title" for="fullname">姓名</label>
						<div id="rename-section"
							class="settings-item-content rename-section">
							<span class="name">dsvb</span> 
						</div>
					</div>
					<div class="settings-item clearfix">
						<label class="settings-item-title with-input" for="url_token">个性签名</label>
						<div class="settings-item-content">
							<input id="url_token" class="zg-form-text-input"
								autocomplete="off" name="url_token" value="bbv-70">
								
						</div>
					</div>
					<div class="settings-item clearfix">
						<label class="settings-item-title" for="private">隐私保护</label>
						<div class="settings-item-content">
							<div>
								<label class="settings-checkbox-label"> <input
									id="private" name="private" type="checkbox">
									在站外搜到我在知乎创作的内容时，我的姓名将不会被显示
								</label>
							</div>
							<div class="settings-item-content-desc">
								<a class="zg-link-litblue"
									href="//www.zhihu.com/question/20758264" target="_blank">什么情况下应该使用这个选项？</a>
							</div>
						</div>
					</div>
				</div>
				<div class="settings-save">
					<button class="zg-btn-blue" type="submit">保存</button>
				</div>
			</form>
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
</body>
</html>