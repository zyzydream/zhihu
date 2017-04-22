<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<base href="/zhihu/">
<meta charset="utf-8">
<title>Bootstrap 实例 - 模态框（Modal）插件</title>
<link rel="stylesheet" href="bootstrap-3.3.4/dist/css/bootstrap.min.css">
<link type="text/css" rel="stylesheet" href="easyui/themes/icon.css">
<link type="text/css" rel="stylesheet"
	href="easyui/themes/default/easyui.css">
<script src="js/jquery.min.js"></script>
</head>
<body>
	<a href="#" rel="drevil" id="example"> <span
		class="glyphicon glyphicon-shopping-cart"> </span> 购物车
	</a>
	<a href="#" data-toggle="popover" title="我是标题" data-content="我是文本内容">
		我是Popover提示框！ </a>
	<table style="width: 250px; text-align: center;">
		<tr>
			<td style="border-right-style: solid;">文章</td>
			<td style="border-right-style: solid;">回复</td>
			<td>关注者</td>
			<td rowspan="2" style="width: 70px;"><button type="button"
					class="btn btn-default btn-xs">
					<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
					关注
				</button></td>
			<!-- <td rowspan="2" style="width: 70px;"><button type="button"
					class="btn btn-default btn-xs">
					<span class="glyphicon glyphicon-minus" aria-hidden="true"></span>
					取消
				</button></td> -->
		</tr>
		<tr>
			<td style="border-right-style: solid;">1</td>
			<td style="border-right-style: solid;">2</td>
			<td>3</td>
			<td></td>
		</tr>
	</table>
	
	<table style="width: 500px;">
	   <tr>
	      <td colspan="2">用户A发送消息</td>
	   </tr>
	   <tr>
	       <td>content..</td>
	      <td>2017-04-22</td>
	   </tr>
	   <tr>
	      <td colspan="2">
	         <hr style="margin: 5px;">
	      </td>
	   </tr>
	   <tr>
	      <td colspan="2">用户A发送消息</td>
	   </tr>
	   <tr>
	       <td>content..</td>
	      <td>2017-04-22</td>
	   </tr>
	   <tr>
	      <td colspan="2">
	         <hr style="margin: 5px;">
	      </td>
	   </tr>
	</table>
	

	<script type="text/javascript" src="easyui/jquery.min.js"></script>
	<script src="bootstrap-3.3.4/dist/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/popover.js"></script>
	<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
	<script type="text/javascript" src="js/test.js"></script>
</body>
</html>