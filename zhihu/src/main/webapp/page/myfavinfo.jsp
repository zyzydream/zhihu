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
<title>收藏</title>
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
<body class="Entry-body" data-reactid="18">
	<div id="root" data-reactid="19">
		<div data-reactroot="">
			<div>
				<header class="Sticky AppHeader is-fixed" role="banner"
					data-za-module="TopNavBar"
					style="width: 1349px; top: 0px; left: 0px;">
				<div class="AppHeader-inner">
					<a href="/" aria-label="知乎"> <img src="images/zhihublue.png">
					</a>
					<nav class="AppHeader-nav" role="navigation"> <a
						class="AppHeader-navItem" href="page/homepage.jsp">首页</a> <a
						class="AppHeader-navItem" href="/explore">发现</a> <a
						class="AppHeader-navItem" href="/topic">话题</a> </nav>
					<div class="SearchBar" role="search">
						<div class="SearchBar-toolWrapper">
							<form class="SearchBar-tool">
								<div>
									<div class="Popover">
										<div class="SearchBar-input Input-wrapper Input-wrapper--grey">
											<input id="Popover-78023-9578-toggle" class="Input"
												maxlength="100" value="" autocomplete="off" role="combobox"
												aria-expanded="false" aria-autocomplete="list"
												aria-activedescendant="AutoComplete-78020-69822--1"
												aria-haspopup="true" aria-owns="Popover-78023-9578-content"
												placeholder="搜索你感兴趣的内容…" type="text">
											<div class="Input-after">
												<button class="Button SearchBar-searchIcon Button--primary"
													aria-label="搜索" type="button"></button>
												<span class="sprite-global-icon-magnifier-dark"></span>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<button
							class="Button SearchBar-askButton Button--primary Button--blue"
							type="button">提问</button>
					</div>

					<div class="AppHeader-userInfo">
						<div class="AppHeader-profile">
							<div class="Popover">
								<button id="Popover-78248-82895-toggle"
									class="Button AppHeader-profileEntry Button--plain"
									type="button" aria-haspopup="true" aria-expanded="false"
									aria-owns="Popover-78248-82895-content">
									<img class="Avatar"
										src="<%=request.getSession().getAttribute("upic") %>"
										width="30" height="30">
								</button>
							</div>
						</div>
					</div>
				</div>
				</header>
			</div>
		</div>
	</div>

</body>
</html>