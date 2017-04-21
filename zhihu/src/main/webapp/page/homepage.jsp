<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<base href="${zhihuName}">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<title>知乎首页</title>
<link href="bootstrap-3.3.4/dist/css/bootstrap.min.css"
	tppabs="bootstrap-3.3.4/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="bootstrap-3.3.4/docs/examples/blog/blog.css"
	tppabs="bootstrap-3.3.4/docs/examples/blog/blog.css" rel="stylesheet">
<script
	src="bootstrap-3.3.4/docs/assets/js/ie-emulation-modes-warning.js"
	tppabs="bootstrap-3.3.4/docs/assets/js/ie-emulation-modes-warning.js"></script>

<link type="text/css" rel="stylesheet" href="css/homepage.css">
<link rel="shortcut icon" href="images/logohead.png">
</head>
<body class="zhi ">
	<div role="navigation" class="zu-top" data-za-module="TopNavBar">
		<div class="zg-wrap modal-shifting clearfix" id="zh-top-inner">
			<a href="/" class="zu-top-link-logo" id="zh-top-link-logo"
				data-za-c="view_home" data-za-a="visit_home"
				data-za-l="top_navigation_zhihu_logo">知乎</a>

			<div class="top-nav-profile">
				<a href="/zhihu/page/myself.jsp" class="zu-top-nav-userinfo "> <span
					class="name" id="name"><%=request.getSession().getAttribute("username")%></span>
					<img class="Avatar" src="" alt="" /> <span id="zh-top-nav-new-pm"
					class="zg-noti-number zu-top-nav-pm-count"
					style="visibility: hidden" data-count="0"> </span>
				</a>
				<ul class="top-nav-dropdown" id="top-nav-profile-dropdown">
					<li><a href="page/myself.jsp"> <i
							class="zg-icon zg-icon-dd-home"></i>我的主页
					</a></li>
					<li><a href="page/litter.jsp"> <i class="zg-icon zg-icon-dd-pm"></i>私信
							<span id="zh-top-nav-pm-count"
							class="zu-top-nav-pm-count zg-noti-number"
							style="visibility: hidden" data-count="0"> </span>
					</a></li>
					<li><a href="page/design.jsp"> <i
							class="zg-icon zg-icon-dd-settings"></i>设置
					</a></li>
					<li><a href="back/login.jsp"> <i
							class="zg-icon zg-icon-dd-logout"></i>退出
					</a></li>
				</ul>
			</div>



			<a class="zu-top-add-question" id="zu-top-add-question"
				style="text-decoration: none" href="page/introducteQuestion.jsp">提问</a>


			<div role="search" id="zh-top-search" class="zu-top-search">
				<form method="GET" action="/search" id="zh-top-search-form"
					class="zu-top-search-form">



					<input type="hidden" name="type" value="content"> <label
						for="q" class="hide-text">知乎搜索</label><input type="text"
						class="zu-top-search-input" id="q" name="q" autocomplete="off"
						value="" maxlength="100" placeholder="搜索你感兴趣的内容...">
					<button type="submit" class="zu-top-search-button">
						<span class="hide-text">搜索</span><span
							class="sprite-global-icon-magnifier-dark"></span>
					</button>
				</form>
			</div>



			<div id="zg-top-nav" class="zu-top-nav">
				<ul class="zu-top-nav-ul zg-clear">

					<li class="zu-top-nav-li current" id="zh-top-nav-home"><a
						class="zu-top-nav-link" href="javascript:void(0)"
						id="zh-top-link-home" data-za-c="view_home" data-za-a="visit_home"
						data-za-l="top_navigation_home">首页</a></li>

					<li class="zu-top-nav-li " id="zh-top-nav-explore"><a
						class="zu-top-nav-link" href="/zhihu/page/explore.jsp">发现</a></li>

					<li class="top-nav-noti zu-top-nav-li " href="#" rel="drevil" id="example"><a
						class="zu-top-nav-link" href="javascript:void(0)"
						id="zh-top-nav-count-wrap" role="button"><span
							class="mobi-arrow"></span>消息</a></li>
				</ul>
				<div class="zu-top-nav-live zu-noti7-popup zg-r5px no-hovercard"
					id="zh-top-nav-live-new" role="popup" tabindex="0">
					<div class="zu-top-nav-live-inner zg-r5px">
						<div class="zu-top-live-icon">&nbsp;</div>
						<div class="zu-home-noti-inner" id="zh-top-nav-live-new-inner">
							<div class="zm-noti7-popup-tab-container clearfix" tabindex="0">
								<button class="zm-noti7-popup-tab-item message">
									<span class="icon">消息</span>
								</button>
								<button class="zm-noti7-popup-tab-item user">
									<span class="icon">用户</span>
								</button>
								<button class="zm-noti7-popup-tab-item thanks">
									<span class="icon">赞同和感谢</span>
								</button>
							</div>
						</div>
						<div class="zm-noti7-frame-border top"></div>
						<div class="zm-noti7-frame">
							<div class="zm-noti7-content message">
								<div class="zm-noti7-content-inner">
									<div class="zm-noti7-content-body">
										<div class="zm-noti7-popup-loading">
											<span class="noti-spinner-loading"></span>
										</div>
									</div>
								</div>
							</div>
							<div class="zm-noti7-content user" style="display: none;">
								<div class="zm-noti7-content-inner">
									<div class="zm-noti7-content-body">
										<div class="zm-noti7-popup-loading">
											<span class="noti-spinner-loading"></span>
										</div>
									</div>
								</div>
							</div>
							<div class="zm-noti7-content thanks" style="display: none;">
								<div class="zm-noti7-content-inner">
									<div class="zm-noti7-content-body">
										<div class="zm-noti7-popup-loading">
											<span class="noti-spinner-loading"></span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="zm-noti7-frame-border bottom"></div>
						<div class="zm-noti7-popup-footer">
							<a href="/notifications"
								class="zm-noti7-popup-footer-all zg-right">查看全部 &raquo;</a> <a
								href="/settings/notification" class="zm-noti7-popup-footer-set"
								title="通知设置"><i class="zg-icon zg-icon-settings"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="zu-global-notify" id="zh-global-message"
		style="display: none">
		<div class="zg-wrap">
			<div class="zu-global-nitify-inner">
				<a class="zu-global-notify-close" href="javascript:;" title="关闭">x</a>
				<span class="zu-global-notify-icon"></span> <span
					class="zu-global-notify-msg"></span>
			</div>
		</div>
	</div>

	<div class="zg-wrap zu-main clearfix " role="main">
		<div class="zu-main-content">
		<div class="zu-main-content-inner" style="width: 640px; float: left; word-wrap:break-word">
				<span id="omissible">
					<div class="HomeEntry" data-za-module="HomeEntry">
						<div class="HomeEntry-avatar">
							<img class="Avatar Avatar--xs" src="images/1.jpg" alt="xxx" />
						</div>
						<div class="HomeEntry-box">
							<span class="HomeEntry-boxArrow"></span>
							<ul class="HomeEntry-list">
								<li class="HomeEntry-item"><a href="#"
									class="HomeEntry-ask js-HomeEntry-ask"> <i
										class="sprite-home-question-off"></i> 提问
								</a></li>
								<li class="HomeEntry-item"><a href="/question"
									target="_blank" class="HomeEntry-answer js-HomeEntry-answer">
										<i class="sprite-home-answer-off"></i> 回答
								</a></li>
								<li class="HomeEntry-item"><a href="page/write.jsp"
									target="_blank" class="HomeEntry-post js-HomeEntry-post"> <i
										class="sprite-home-post-off"></i> 写文章
								</a></li>
							</ul>
							<div class="HomeEntry-draft">
								<a href="/draft" target="_blank"> 草稿 </a>
							</div>
						</div>
					</div>
					<div class="HomeTopics zg-section" data-za-module="HomeTopics">
						<div class="HomeTopics-title">按已关注的话题阅读：</div>
						<!-- 话题显示处 -->
						<div class="HomeTopics-list" id="title"></div>
					</div>
				</span>
				<div class="zg-section" id="zh-home-list-title">
					<div class="row">
						<div class="col-sm-8 blog-main" style="width: 640px;">
							<span style="width: 640px;" id="introduction"> <span
								class="glyphicon glyphicon-th-list" aria-hidden="true"
								style="float: left; margin-right: 5px;"></span>
								<div class="page-header" style="margin: 0px; width: 640px;">
									<h1>
										最新动态
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
										<small>设置</small>
									</h1>
								</div>
							</span> <span id="seflmain">
								<div class="row featurette">
									<div class="col-md-7">
										<h2 class="featurette-heading" style="font-size: 20px">
											<span class="text-muted" style="font-size: 13px">来自话题：'+data[i].ttopic+'</span><br />'+data[i].etitle+'
										</h2>
										<h2 class="featurette-heading" style="font-size: 13px;">
											<a href="javascript:void(0)" rel="drevil">'+data[i].author+'</a>
											&nbsp;&nbsp;&nbsp; <span class="text-muted"
												style="font-size: 12px; font-weight: 300;">'+data[i].usign+'</span>
										</h2>
										<p class="lead" style="font-size: 14px;">'+data[i].econtent+'</p>
										<span>
											<div style="width: 70px; float: left; height: 20px">
												<a
													style="font-size: 13px; font-weight: 40; border-style: none;"
													class="btn btn-default dropdown-toggle" type="button"
													id="dropdownMenu1" data-toggle="dropdown"
													aria-expanded="true">收藏 42</a>
												<ul class="dropdown-menu" role="menu"
													aria-labelledby="dropdownMenu1">
													<li role="presentation"><a role="menuitem"
														tabindex="-1" href="#">Regular link</a></li>
													<li role="presentation"><a role="menuitem"
														tabindex="-1" href="#">Disabled link</a></li>
													<li role="presentation"><a role="menuitem"
														tabindex="-1" href="#">Another link</a></li>
												</ul>
											</div>
											<div style="width: 70px; float: left; height: 20px"
												class="btn-group" role="group" aria-label="...">
												<button
													style="font-size: 13px; font-weight: 40; border-style: none;"
													type="button" class="btn btn-default">
													<span class="glyphicon glyphicon-star-empty"
														aria-hidden="true"></span>点赞 42
												</button>
											</div>
											<div style="width: 70px; float: left; height: 20px"
												class="btn-group" role="group" aria-label="...">
												<button
													style="font-size: 13px; font-weight: 40; border-style: none;"
													type="button" class="btn btn-default">
													<span class="glyphicon glyphicon-map-marker"
														aria-hidden="true"></span>阅览 42
												</button>
											</div>
										</span>
									</div>
									<div class="col-md-5">
										<img class="featurette-image img-responsive center-block"
											data-src="holder.js/500x500/auto"
											tppabs="http://v3.bootcss.com/examples/carousel/holder.js/500x500/auto"
											alt="">
									</div>
								</div>
								<hr class="featurette-divider"> <!-- 开始  关注用户关注话题 -->
								<div class="row featurette">
									<div class="col-md-7">
										<h2 class="featurette-heading" style="font-size: 18px;">
											<span class="text-muted" style="font-size: 15px">'+data[i].author+':关注话题：</span><br />
											<img alt="" src="images/game.png" width="60px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data[i].tname+'
										</h2>
									</div>
									<div class="col-md-5">
										<label
											style="float: right; font-size: 15px; font-weight: lighter;">+'data[i].times'+</label>
									</div>
								</div>
								<hr class="featurette-divider"> <!-- 结束 --> <!-- 开始  关注用户发表文章  -->
								<div class="row featurette">
									<div class="col-md-7">
										<h2 class="featurette-heading" style="font-size: 20px;">
											<span class="text-muted" style="font-size: 15px">'+data[i].author+':发表文章：</span><br />'+data[i].tname+'
										</h2>
										<p class="lead" style="font-size: 14px;">'+data[i].econtent+'</p>
										<span>
											<div style="width: 70px; float: left; height: 20px">
												<a
													style="font-size: 13px; font-weight: 40; border-style: none;"
													class="btn btn-default dropdown-toggle" type="button"
													id="dropdownMenu1" data-toggle="dropdown"
													aria-expanded="true">收藏 42</a>
												<ul class="dropdown-menu" role="menu"
													aria-labelledby="dropdownMenu1">
													<li role="presentation"><a role="menuitem"
														tabindex="-1" href="#">Regular link</a></li>
													<li role="presentation"><a role="menuitem"
														tabindex="-1" href="#">Disabled link</a></li>
													<li role="presentation"><a role="menuitem"
														tabindex="-1" href="#">Another link</a></li>
												</ul>
											</div>
											<div style="width: 70px; float: left; height: 20px"
												class="btn-group" role="group" aria-label="...">
												<button
													style="font-size: 13px; font-weight: 40; border-style: none;"
													type="button" class="btn btn-default">
													<span class="glyphicon glyphicon-star-empty"
														aria-hidden="true"></span>点赞 42
												</button>
											</div>
											<div style="width: 70px; float: left; height: 20px"
												class="btn-group" role="group" aria-label="...">
												<button
													style="font-size: 13px; font-weight: 40; border-style: none;"
													type="button" class="btn btn-default">
													<span class="glyphicon glyphicon-map-marker"
														aria-hidden="true"></span>阅览 42
												</button>
											</div>
										</span>
									</div>
									<div class="col-md-5">
										<label
											style="float: right; font-size: 15px; font-weight: lighter;">+'data[i].times'+</label>
										<img class="featurette-image img-responsive center-block"
											src="images/game.jpg" data-src="holder.js/500x500/auto"
											tppabs="http://v3.bootcss.com/examples/carousel/holder.js/500x500/auto"
											alt="Generic placeholder image">
									</div>
								</div>
								<hr class="featurette-divider"> <!-- 结束 --> <!-- 开始  关注用户提出问题  -->
								<div class="row featurette">
									<div class="col-md-7">
										<h2 class="featurette-heading" style="font-size: 20px;">
											<span class="text-muted" style="font-size: 15px">'+data[i].author+':提出问题：</span><br />'+data[i].title+'
										</h2>
										<span>
											<div style="width: 70px; float: left; height: 20px">
												<a
													style="font-size: 13px; font-weight: 40; border-style: none;"
													class="btn btn-default dropdown-toggle" type="button"
													id="dropdownMenu1" data-toggle="dropdown"
													aria-expanded="true">收藏 42</a>
												<ul class="dropdown-menu" role="menu"
													aria-labelledby="dropdownMenu1">
													<li role="presentation"><a role="menuitem"
														tabindex="-1" href="#">Regular link</a></li>
													<li role="presentation"><a role="menuitem"
														tabindex="-1" href="#">Disabled link</a></li>
													<li role="presentation"><a role="menuitem"
														tabindex="-1" href="#">Another link</a></li>
												</ul>
											</div>
											<div style="width: 70px; float: left; height: 20px"
												class="btn-group" role="group" aria-label="...">
												<button
													style="font-size: 13px; font-weight: 40; border-style: none;"
													type="button" class="btn btn-default">
													<span class="glyphicon glyphicon-star-empty"
														aria-hidden="true"></span>点赞 42
												</button>
											</div>
											<div style="width: 70px; float: left; height: 20px"
												class="btn-group" role="group" aria-label="...">
												<button
													style="font-size: 13px; font-weight: 40; border-style: none;"
													type="button" class="btn btn-default">
													<span class="glyphicon glyphicon-map-marker"
														aria-hidden="true"></span>阅览 42
												</button>
											</div>
										</span>
									</div>
									<div class="col-md-5">
										<label
											style="float: right; font-size: 15px; font-weight: lighter;">+'data[i].times'+</label>
										<img class="featurette-image img-responsive center-block"
											data-src="holder.js/500x500/auto"
											tppabs="http://v3.bootcss.com/examples/carousel/holder.js/500x500/auto"
											alt="">
									</div>
								</div>
								<hr class="featurette-divider"> <!-- 结束 -->
							</span>
							<nav>
								<ul class="pager">
									<li><a href="javascript:void(0)" onclick="show(1)">more</a></li>
								</ul>
							</nav>
						</div>
						<!-- /.blog-main -->
					</div>
				</div>
				<!-- 结尾 -->

				<div class="shameimaru-placeholder" data-loc="home_bottom"
					data-params='{}'></div>
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
			</div>
			<div class="col-sm-3 col-sm-offset-1 blog-sidebar"
				style="width: 240px; float: left; padding: 0px">
				<div class="page-header" style="margin: 0px">
					<ol class="list-unstyled">
						<li style="margin: 5px;"><span
							class="glyphicon glyphicon-heart" aria-hidden="true"
							style="margin: 5px"></span><a href="#" style="font-size: 11px;">我的收藏</a></li>
						<li style="margin: 5px;"><span
							class="glyphicon glyphicon-ok-circle" aria-hidden="true"
							style="margin: 5px"></span><a href="#" style="font-size: 11px;">我关注的问题</a></li>
						<li style="margin: 5px;"><span
							class="glyphicon glyphicon-pencil" aria-hidden="true"
							style="margin: 5px"></span><a href="#" style="font-size: 11px;">邀请我回答的问题</a></li>
					</ol>
				</div>
				<div class="page-header" style="margin: 0px; padding-top: 10px;">
					<h1 style="margin-bottom: 5px;">知乎专栏</h1>
					<span class="glyphicon glyphicon-search" aria-hidden="true"
						style="float: left; margin: 5px 5px 5px 15px;"></span>
					<li style="width: 200px;">专栏 * 发现</li>
				</div>
			</div>
		</div>
		<div class="media">
			<div class="media-left">
				<a href="#"><img class="media-object" src="images/1.jpg"
					alt="..." style="width: 70px"> </a>
			</div>
			<div class="media-body">
				<h4 class="media-heading">jlvrpt</h4>
				undefined<span><a class="HomeTopics-item zm-item-tag"
					href="/zhihu/page/findtopic.jsp?tid=1007&&tname=mgfxq"
					target="_blank">mgfxq</a><a class="HomeTopics-item zm-item-tag"
					href="/zhihu/page/findtopic.jsp?tid=1008&&tname=imuzc"
					target="_blank">imuzc</a><a class="HomeTopics-item zm-item-tag"
					href="/zhihu/page/findtopic.jsp?tid=1008&&tname=imuzc"
					target="_blank">imuzc</a><a class="HomeTopics-item zm-item-tag"
					href="/zhihu/page/findtopic.jsp?tid=1010&&tname=vizxhm"
					target="_blank">vizxhm</a></span>
			</div>
		</div>
		<!-- /.blog-sidebar -->
	</div>
	<!-- 新建收藏夹 -->
	<div class="modal fade" id="makeModal" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true" >
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="myModalLabel">新建收藏夹</h4>
				</div>
				<div class="modal-body">
					<div class="form-group">
						<label for="txt_departmentname">收藏夹名称</label> <input type="text"
							name="fname" class="form-control" id="fname" placeholder="收藏夹名称">
					</div>
					<div class="form-group">
						<label for="txt_statu">描述</label> <input type="text" name="finfo"
							class="form-control" id="finfo" placeholder="收藏描述(可选)">
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">
						<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>取消
					</button>
					<button type="button" id="btn_submit" class="btn btn-primary"
						data-dismiss="modal" onclick="yesfav(this)">
						<span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>确认创建
					</button>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal -->
	</div>

	<script src="js/jquery.min.js"></script>
	<script src="bootstrap-3.3.4/dist/js/bootstrap.min.js"></script>
	<!-- <script type="text/javascript" src="js/tooltip.js"></script> -->
	<script type="text/javascript" src="js/popover.js"></script>

	<script
		src="bootstrap-3.3.4/docs/assets/js/ie10-viewport-bug-workaround.js"
		tppabs="bootstrap-3.3.4/docs/assets/js/ie10-viewport-bug-workaround.js"></script>
	<script type="text/javascript" src="js/homepage.js"></script>
</body>
</html>