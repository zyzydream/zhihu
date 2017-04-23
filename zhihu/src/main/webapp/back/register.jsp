<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<base href="${zhihuName}">
<meta charset="UTF-8">
<link type="text/css" rel="stylesheet" href="css/register-login.css">
<link rel="shortcut icon" href="images/logohead.png">
<link type="text/css" rel="stylesheet" href="css/test.css">
<title>知乎 - 与世界分享你的知识、经验和见解</title>
</head>
<body>
	<div id="box"></div>
	<div class="cent-box register-box">
		<div class="cent-box-header">
			<h1 class="main-title hide">知乎</h1>
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

			<form method="post" id="register" enctype="multipart/form-data">
				<p>
					<label style="color: red;height: 30px;">${errorMsg }&nbsp;</label>
					<c:remove var="errorMsg" scope="session" />
				</p>
				<div class="login form">
					<div class="group">
						<div class="group-ipt user" id="User">
							<input type="text" name="uname" id="uname" class="ipt"
								placeholder="姓名" required>
						</div>
						<div class="group-ipt email" id="Email">
							<input type="email" name="uemail" id="uemail" class="ipt"
								placeholder="邮箱地址" required> <label
								class="group-ipt error"></label>
						</div>
						<div class="group-ipt password">
							<input type="password" name="upassword" id="upassword"
								class="ipt" placeholder="密码（不小于六位数）" required onBlur="check()"> <label
								class="group-ipt error" id="passwordError" style="height: 100px;"></label>
						</div>
					</div>
					<div class="button">
						<button type="submit" class="login-btn register-btn" id="button">注册</button>
					</div>
				</div>
			</form>
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

	<div class="modal-wrapper" id="yanzhengma">
		<div class="mutiview-dialog SignFlow register show" tabindex="0"
			style="" role="dialog" aria-labelledby=":0">
			<div class="mutiview-dialog-title">
				<div class="title verification">
					<h1>验证邮箱</h1>
					<h2>请输入你收到的 6 位数邮箱验证码</h2>
				</div>
				<a onclick="close()" class="mutiview-dialog-title-close z-ico-close"></a> 
			</div>
			<div class="mutiview-dialog-content">
				<div class="view verification">
					<form method="post" id="code" action="user/code">
						<div class="input-wrapper verification-code">
							<input name="verification_code" aria-label="验证码"
								placeholder="6 位数验证码" maxlength="6" required type="text"
								id="addCode">
							<button class="send-code" type="button">重发验证码</button>
						</div>
						<div class="submit-wrapper">
							<button class="submit blue-button" id="goin" type="submit">进入知乎</button>
						</div>
					</form>
				</div>
				<div class="mutiview-dialog-buttons" style="display: none;"></div>
			</div>
		</div>
	</div>

	<script type="text/javascript" src="easyui/jquery.min.js"></script>
	<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
	<script src='js/particles.js' type="text/javascript"></script>
	<script src='js/background.js' type="text/javascript"></script>
	<script src='js/layer/layer.js' type="text/javascript"></script>
	<script src='js/register.js' type="text/javascript"></script>

</body>
</html>