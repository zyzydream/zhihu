<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
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
					<li><a id=":1" href="/people/xiao-35-30" tabindex="-1"> <i
							class="zg-icon zg-icon-dd-home"></i> 我的主页
					</a></li>
					<li><a id=":2" href="/inbox" tabindex="-1"> <i
							class="zg-icon zg-icon-dd-pm"></i> 私信 <span
							id="zh-top-nav-pm-count"
							class="zu-top-nav-pm-count zg-noti-number"
							style="visibility: hidden;" data-count="0"> </span>
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
						id="zh-top-link-home" class="zu-top-nav-link" href="/"
						data-za-c="view_home" data-za-a="visit_home"
						data-za-l="top_navigation_home">首页</a></li>
					<li id="zh-top-nav-topic"
						class="top-nav-topic-selector zu-top-nav-li "><a
						id="top-nav-dd-topic" class="zu-top-nav-link" href="/topic">话题</a>
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
</body>
</html>