<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<base href="/zhihu/">
<meta charset="UTF-8">
<link type="text/css" rel="stylesheet" href="css/register-login.css">
<link rel="shortcut icon" href="images/logohead.png">
<title>知乎 - 与世界分享你的知识、经验和见解</title>
</head>
<body>
	<div id="box"></div>
	<div class="cent-box register-box">
		<div class="cent-box-header">
			<h1 class="main-title hide">千寻</h1>
			<h2 class="sub-title">与世界分享你的知识、经验和见解</h2>
		</div>

		<div class="cont-main clearfix">
			<div class="index-tab">
				<div class="index-slide-nav">
					<a href="back/login.jsp">登录</a> <a href="back/register.jsp"
						class="active">注册</a>
					<div class="slide-bar slide-bar1"></div>
				</div>
			</div>

			<div class="login form">
				<form action="user/register" method="post" id="register">
					<p>
						<label style="color: red;">${errorMsg }&nbsp;</label>
						<c:remove var="errorMsg" scope="session" />
					</p>
					<div class="group">
						<div class="group-ipt email">
							<input type="email" name="uemail" id="uemail" class="ipt"
								placeholder="邮箱地址" required>
						</div>
						<div class="group-ipt user">
							<input type="text" name="uname" id="uname" class="ipt"
								placeholder="输入一个用户名" required>
						</div>
						<div class="group-ipt password">
							<input type="password" name="upassword" id="upassword"
								class="ipt" placeholder="设置登录密码" required>
						</div>
						<div class="group-ipt verify">
							<input type="text" name="verify" id="verify" class="ipt"
								placeholder="输入验证码" required> <img src="vcode.jpg"
								class="imgcode">
						</div>
					</div>


					<div class="button">
						<button type="submit" class="login-btn register-btn" id="button">注册</button>
					</div>
				</form>
			</div>
		</div>
	</div>

	<div class="footer">

		<span>&copy; 2017 知乎</span> <span class="dot">·</span> <a
			target="_blank" href="/roundtable">知乎圆桌</a> <span class="dot">·</span>
		<a target="_blank" href="/explore" data-za-c="explore"
			data-za-a="visit_explore" data-za-l="home_bottom_explore">发现</a> <span
			class="dot">·</span> <a target="_blank" href="/app">移动应用</a> <span
			class="dot">·</span> <a href="/org/signin" class="footer-mobile-show">使用机构帐号登录</a>

		<span class="dot footer-mobile-show">·</span> <a href="/contact"
			class="footer-mobile-show">联系我们</a> <span class="dot">·</span> <a
			target="_blank" href="/careers">来知乎工作</a> <br /> <a
			href="http://www.miibeian.gov.cn/" target="_blank">京 ICP 证 110745
			号</a> <span class="dot">·</span> <span>京公网安备 11010802010035 号</span> <span
			class="dot">·</span> <a
			href="http://zhstatic.zhihu.com/assets/zhihu/publish-license.jpg"
			target="_blank">出版物经营许可证</a>
	</div>



	<script src='js/particles.js' type="text/javascript"></script>
	<script src='js/background.js' type="text/javascript"></script>
	<script src='js/jquery.min.js' type="text/javascript"></script>
	<script src='js/layer/layer.js' type="text/javascript"></script>
	<script src='js/register.js' type="text/javascript"></script>

</body>
</html>