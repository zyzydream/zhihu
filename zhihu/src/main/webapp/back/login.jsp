<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>
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
	<div class="cent-box">
		<div class="cent-box-header">
			<h1 class="main-title hide">知乎</h1>
			<h2 class="sub-title">与世界分享你的知识、经验和见解</h2>
		</div>

		<div class="cont-main clearfix">
			<div class="index-tab">
				<div class="index-slide-nav">
					<a href="back/login.jsp" class="active">登录</a> <a
						href="back/register.jsp">注册</a>
					<div class="slide-bar"></div>
				</div>
			</div>

			<div class="login form">
				<form action="user/login" method="post" id="loginForm">
					<p>
						<label style="color: red;">${errorMsg }&nbsp;</label>
						<c:remove var="errorMsg" scope="session" />
					</p>
					<div class="group">
						<div class="group-ipt email">
							<input type="email" name="uemail" id="uemail" class="ipt"
								placeholder="邮箱地址" required>
						</div>
						<div class="group-ipt password">
							<input type="password" name="upassword" id="upassword"
								class="ipt" placeholder="输入您的登录密码" required>
						</div>
						<div class="group-ipt verify">
							<input type="text" name="vcode" id="vcode" class="ipt"
								placeholder="输入验证码" required> <img src="vcode.jpg"
								class="imgcode">
						</div>
					</div>
					<div class="button">
						<button type="submit" class="login-btn register-btn" id="button"
							onclick="javascript:void(0)">登录</button>
					</div>
				</form>
			</div>

			<div class="remember clearfix">
				<label class="remember-me"><span class="icon"><span
						class="zt"></span></span><input type="checkbox" name="remember-me"
					id="remember-me" class="remember-mecheck" checked>记住我</label> <label
					class="forgot-password"> <a href="#">忘记密码？</a>
				</label>
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
	<script src='js/login.js' type="text/javascript"></script>

</body>
</html>