<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isErrorPage="false"%>
<!DOCTYPE html>
<html>
<head>
<base href="${zhihuName}">
<meta charset="UTF-8">
<link type="text/css" rel="stylesheet" href="css/register-login.css">
<link rel="shortcut icon" href="images/logohead.png">
<title>知乎后台</title>
</head>
<body>
	<div id="box"></div>
	<div class="cent-box">
		<div class="cent-box-header">
			<h1 class="main-title hide">知乎</h1>
			<h2 class="sub-title">与世界分享你的知识、经验和见解</h2>
		</div>

		<div class="cont-main clearfix">
			
			<div class="login form">
				<form action="admin/login" method="post" id="loginForm">
					<p>
						<label style="color: red;">${errorMsg }&nbsp;</label>
					</p>
					<div class="group">
						<div class="group-ipt email">
							<input type="text" name="adname" id="adname" class="ipt"
								placeholder="用户名" required>
						</div>
						<div class="group-ipt password">
							<input type="password" name="adpassword" id="adpassword"
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
							>登录</button>
					</div>
				</form>
			</div>

			<div class="remember clearfix">
				<label class="forgot-password"> <a href="#">忘记密码？</a></label>
			</div>
		</div>
	</div>
	
	
	<script src='js/particles.js' type="text/javascript"></script>
	<script src='js/background.js' type="text/javascript"></script>
	<script src='js/jquery.min.js' type="text/javascript"></script>
	<script src='js/layer/layer.js' type="text/javascript"></script>
	<script src='js/backlogin.js' type="text/javascript"></script>
</body>
</html>