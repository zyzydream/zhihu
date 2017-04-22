<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<base href="/zhihu/">
<link rel="shortcut icon" href="images/logohead.png">
<link type="text/css" rel="stylesheet" href="css/litter.css">
<meta charset="UTF-8">
<title>私信</title>
</head>
<body class="zhi">
	<div class="zu-top" role="navigation" data-za-module="TopNavBar">
		<div id="zh-top-inner" class="zg-wrap modal-shifting clearfix">
			<a id="zh-top-link-logo" class="zu-top-link-logo" href="/"
				data-za-c="view_home" data-za-a="visit_home"
				data-za-l="top_navigation_zhihu_logo">知乎</a>
			<div class="top-nav-profile">
				<a id=":0" class="zu-top-nav-userinfo " href="/people/xiao-35-30"
					role="button" aria-haspopup="true" aria-activedescendant=""> <span
					class="name">xiao</span> <img class="Avatar"
					src="https://pic1.zhimg.com/da8e974dc_s.jpg"
					srcset="https://pic1.zhimg.com/da8e974dc_xs.jpg 2x" alt="xiao">
					<span id="zh-top-nav-new-pm"
					class="zg-noti-number zu-top-nav-pm-count"
					style="visibility: hidden;" data-count="0"> </span>
				</a>
				<ul id="top-nav-profile-dropdown" class="top-nav-dropdown"
					aria-labelledby=":0">
					<li><a id=":1" href="page/myselef.jsp" tabindex="-1"> <i
							class="zg-icon zg-icon-dd-home"></i> 我的主页
					</a></li>
					<li><a id=":2" href="page/litter.jsp" tabindex="-1"> <i
							class="zg-icon zg-icon-dd-pm"></i> 私信 <span
							id="zh-top-nav-pm-count"
							class="zu-top-nav-pm-count zg-noti-number"
							style="visibility: hidden;" data-count="0"> </span>
					</a></li>
					<li><a id=":3" href="page/design.jsp" tabindex="-1"> <i
							class="zg-icon zg-icon-dd-settings"></i> 设置
					</a></li>
					<li><a id=":4" href="back/login.jsp" tabindex="-1"> <i
							class="zg-icon zg-icon-dd-logout"></i> 退出
					</a></li>
				</ul>
			</div>
			<a href="page/introducteQuestion.jsp"><button id="zu-top-add-question" class="zu-top-add-question">提问</button></a>
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
						id="zh-top-link-home" class="zu-top-nav-link" href="back/back.jsp"
						data-za-c="view_home" data-za-a="visit_home"
						data-za-l="top_navigation_home">首页</a></li>
					<li id="zh-top-nav-topic"
						class="top-nav-topic-selector zu-top-nav-li "><a
						id="top-nav-dd-topic" class="zu-top-nav-link" href="page/talk.jsp">话题</a>
					</li>
					<li id="zh-top-nav-explore" class="zu-top-nav-li "><a
						class="zu-top-nav-link" href="/explore">发现</a></li>
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
	<div class="zg-wrap zu-main clearfix " role="main">
		<div class="zu-main-content">
			<div class="zu-main-content-inner">
				<div class="PageInbox-nav">
					<div class="PageInbox-nav-inner">
						<ul class="PageInbox-nav-tabs">
							<li>最近联系</li>
						</ul>
						<button id="zh-create-pm" class="zg-btn-justify zg-btn-blue" onclick="opendiv()">写私信</button>
					</div>
				</div>

				<div id="zh-pm-item-wrap" class="navigable">
					<div class="zu-list-empyt-place-holder zg-r5px"
						data-za-module="MessageItem">
						还没有人给你发私信，不如你主动一点，给神交已久的知友发一封问候私信吧:)</div>
				</div>
			</div>
			<div class="zu-main-sidebar" data-za-module="RightSideBar">
				<div class="zg-info-message"
					style="margin: 0 0 10px; text-align: left;">
					担心骚扰？可以 <a href="/settings/notification">设置</a> 为「开启陌生人私信箱」。
				</div>
			</div>
		</div>
	</div>
	<div id="zh-footer" class="zh-footer">
		<div class="content zg-wrap clearfix">
			<ul>
				<li><a href="https://liukanshan.zhihu.com" target="_blank">刘看山</a></li>
				<li><a href="/question/19581624" target="_blank">知乎指南</a></li>
				<li><a id="js-feedback-button" href="javascript:;">建议反馈</a></li>
				<li><a href="/app" target="_blank">移动应用</a></li>
				<li><a href="/careers">加入知乎</a></li>
				<li><a href="/terms" target="_blank">知乎协议</a></li>
				<li><a href="/jubao" target="_blank">举报投诉</a></li>
				<li><a href="/contact">联系我们</a></li>
			</ul>
			<span class="copy">© 2017 知乎</span>
		</div>
	</div>

	<!-- 弹框 -->
	<div class="modal-wrapper" id="modal-wrapper">
		<div class="modal-dialog" tabindex="0" style="" role="dialog"
			aria-labelledby=":8">
			<div class="modal-dialog-title">
				<span id=":8" class="modal-dialog-title-text" role="heading">发送私信</span>
				<span class="modal-dialog-title-close" role="button" tabindex="0"
					aria-label="Close" onclick="closeD()"></span>
			</div>
			<div class="modal-dialog-content">
				<div class="zm-pm-wrap">
					<dl class="zm-form-table zm-form-table-medium">
						<dt class="zm-form-table-head zm-form-table-head-align-middle">
							<label class="zg-medium-gray">发给：</label>
						</dt>
						<dd class="zm-form-table-field">
							<div class="zm-pm-selector-wrap">
								<div class="zg-user-name"
									style="display: none; padding: 4px 0 0 0"></div>
								<input
									class="zg-form-text-input zm-pm-user-selector label-input-label"
									placeholder="搜索用户" aria-label="搜索用户" role="combobox"
									aria-autocomplete="list" type="text">
							</div>
						</dd>
						<dt class="zm-form-table-head zm-form-table-head-align-middle">
							<label class="zg-medium-gray">内容：</label>
						</dt>
						<dd class="zm-form-table-field zm-form-table-field-last">
							<div class="zg-editor-simple-wrap zg-form-text-input">
								<textarea
									class="zg-editor-input zu-seamless-input-origin-element"
									style="font-weight: normal; height: 39px;"></textarea>
							</div>
						</dd>
					</dl>
					<div class="zm-command zg-clear">
						<a class="zm-command-cancel" name="cancel" href="javascript:;">取消</a>
						<a id="zh-question-pm-send-button" class="zg-btn-blue zg-r3px"
							name="send" href="javascript:;">发送</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="js/jquery.min.js"></script>
	<script src="bootstrap-3.3.4/dist/js/bootstrap.min.js"></script>
	<script src="bootstrap-3.3.4/docs/assets/js/ie10-viewport-bug-workaround.js"
		tppabs="bootstrap-3.3.4/docs/assets/js/ie10-viewport-bug-workaround.js"></script>
	<script src='js/layer/layer.js' type="text/javascript"></script>
	<script type="text/javascript" src="/bootstrap-3.3.4/js/popover.js"></script>
	<script type="text/javascript" src="js/litter.js"></script>

</body>
</html>