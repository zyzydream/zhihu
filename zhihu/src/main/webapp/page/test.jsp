<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<base href="/zhihu/">
<meta charset="UTF-8">
<link type="text/css" rel="stylesheet" href="css/test.css">
<link rel="shortcut icon" href="images/logohead.png">
<title>首页--知乎</title>
</head>
<body>
	<div class="modal-wrapper" >
		<div class="mutiview-dialog SignFlow register show" tabindex="0"
			style="" role="dialog" aria-labelledby=":0" >
			<div class="mutiview-dialog-title">
				<div class="title verification">
					<h1>验证邮箱</h1>
					<h2>请输入你收到的 6 位数邮箱验证码</h2>
				</div>
				<span class="mutiview-dialog-title-close z-ico-close" role="button"
					tabindex="0" aria-label="Close"></span> <span
					class="mutiview-dialog-title-back z-ico-left"></span>
			</div>
			<div class="mutiview-dialog-content">
				<div class="view verification">
					<form novalidate="novalidate">
						<div class="input-wrapper">
							<input name="phone_num" aria-label="邮箱" placeholder="邮箱"
								required="" type="text">
						</div>
						<div class="input-wrapper verification-code">
							<input name="verification_code" aria-label="验证码"
								placeholder="6 位数验证码" maxlength="6" required="" type="text">
							<button class="send-code" type="button">重发验证码</button>
						</div>
						<div class="submit-wrapper">
							<button class="submit blue-button">进入知乎</button>
						</div>
					</form>
				</div>
				<div class="mutiview-dialog-buttons" style="display: none;"></div>
			</div>
		</div>
	</div>
</body>
</html>