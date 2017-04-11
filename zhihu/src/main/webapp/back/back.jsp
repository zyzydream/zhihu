<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page isELIgnored="false"%>
<!DOCTYPE html>
<html lang="en">
<head>
<base href="${zhihuName}">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<meta name="description" content="">
<meta name="author" content="">
<link rel="icon" href="images/logohead.png">
<title>知乎后台</title>
<link type="text/css" rel="stylesheet" href="easyui/themes/icon.css">
<link type="text/css" rel="stylesheet" href="easyui/themes/default/easyui.css">

<link href="bootstrap-3.3.4/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="css/dashboard.css" rel="stylesheet">
<link type="text/css" rel="stylesheet" href="easyui/themes/icon.css">
<link href="css/back.css" rel="stylesheet">
<!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
<!--[if lt IE 9]><script src="/assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
<script src="bootstrap-3.3.4/assets/js/ie-emulation-modes-warning.js"></script>
</head>

<body>
<span id="warn"></span>

	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#navbar" aria-expanded="false"
					aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">知乎后台</a>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav navbar-right">
					<ul class="nav navbar-nav navbar-right" style="margin: 0px;">
						<li><a href="#"
							style="padding-top: 15px; padding-bottom: 15px; padding-right: 5px; padding-left: 5px;">[切换用户]</a></li>
						<li><a href="#"
							style="padding-top: 15px; padding-bottom: 15px; padding-right: 5px; padding-left: 5px">[退出]</a></li>
					</ul>
					<label
						style="color: white; font-size: 20px; font-weight: lighter; margin: 10px 0px 10px 0px;">欢迎管理员zy登录</label>
				</ul>
				>

				<!-- <form class="navbar-form navbar-right">
					<input type="text" class="form-control" placeholder="Search...">
				</form> -->
			</div>
		</div>
	</nav>

	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-3 col-md-2 sidebar">
				<ul class="nav nav-sidebar">
					<li class="active" onclick="select(this,1,10)"><a
						href="javaScript:void(0)">总动态</a></li>
					<li id="users" onclick="select(this,1,10)"><a href="javaScript:void(0)">用户信息</a></li>
					<li onclick="select(this,1,10)"><a href="javaScript:void(0)">推荐头条</a></li>
				</ul>
			</div>
			<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
				<ul class="nav nav-tabs" style="margin-bottom: 10px;" id="nav-tabs">
					<li role="presentation" class="active"><a href="#">全部</a></li>
					<li role="presentation"><a>关注用户</a></li>
					<li role="presentation"><a>关注话题</a></li>
					<li role="presentation"><a>收藏文章</a></li>
					<li role="presentation"><a>收藏话题</a></li>
					<li role="presentation"><a>收藏回复</a></li>
					<li role="presentation"><a>收藏专栏</a></li>
					<li role="presentation"><a>发表文章</a></li>
					<li role="presentation"><a>提出问题</a></li>
					<li role="presentation"><a> 回复 </a></li>
				</ul>
				<div class="table-responsive">
					<table class="table table-hover" id="table">
						<!-- <thead>
							<tr>
								<th>#</th>
								<th>Header</th>
								<th>Header</th>
								<th>Header</th>
								<th>Header</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1,001</td>
								<td>Lorem</td>
								<td>ipsum</td>
								<td>dolor</td>
								<td>sit</td>
							</tr>
							<tr>
								<td>1,002</td>
								<td>amet</td>
								<td>consectetur</td>
								<td>adipiscing</td>
								<td>elit</td>
							</tr>
							<tr>
								<td>1,003</td>
								<td>Integer</td>
								<td>nec</td>
								<td>odio</td>
								<td>Praesent</td>
							</tr>
							<tr>
								<td>1,003</td>
								<td>libero</td>
								<td>Sed</td>
								<td>cursus</td>
								<td>ante</td>
							</tr>
							<tr>
								<td>1,004</td>
								<td>dapibus</td>
								<td>diam</td>
								<td>Sed</td>
								<td>nisi</td>
							</tr>
							<tr>
								<td>1,005</td>
								<td>Nulla</td>
								<td>quis</td>
								<td>sem</td>
								<td>at</td>
							</tr>
							<tr>
								<td>1,006</td>
								<td>nibh</td>
								<td>elementum</td>
								<td>imperdiet</td>
								<td>Duis</td>
							</tr>
							<tr>
								<td>1,007</td>
								<td>sagittis</td>
								<td>ipsum</td>
								<td>Praesent</td>
								<td>mauris</td>
							</tr>
							<tr>
								<td>1,008</td>
								<td>Fusce</td>
								<td>nec</td>
								<td>tellus</td>
								<td>sed</td>
							</tr>
							<tr>
								<td>1,009</td>
								<td>augue</td>
								<td>semper</td>
								<td>porta</td>
								<td>Mauris</td>
							</tr>
							<tr>
								<td>1,010</td>
								<td>massa</td>
								<td>Vestibulum</td>
								<td>lacinia</td>
								<td>arcu</td>
							</tr>
							<tr>
								<td>1,011</td>
								<td>eget</td>
								<td>nulla</td>
								<td>Class</td>
								<td>aptent</td>
							</tr>
							<tr>
								<td>1,012</td>
								<td>taciti</td>
								<td>sociosqu</td>
								<td>ad</td>
								<td>litora</td>
							</tr>
							<tr>
								<td>1,013</td>
								<td>torquent</td>
								<td>per</td>
								<td>conubia</td>
								<td>nostra</td>
							</tr>
							<tr>
								<td>1,014</td>
								<td>per</td>
								<td>inceptos</td>
								<td>himenaeos</td>
								<td>Curabitur</td>
							</tr>
							<tr>
								<td>1,015</td>
								<td>sodales</td>
								<td>ligula</td>
								<td>in</td>
								<td>libero</td>
							</tr>
							
						</tbody> --> 
					</table>
				</div>
			</div>
		</div>
	</div>
	<!-- 推荐展示（Modal） -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="myModalLabel">推荐详情</h4>
				</div>
				<div class="modal-body">
					<table class="input_table" width="500px">
						<tr>
							<td width="150px">id :</td>
							<td><label id="ids"></label></td>
						</tr>
						<tr>
							<td>类型 :</td>
							<td><label id="kind"></label></td>
						</tr>
						<tr>
							<td>文章/问题 :</td>
							<td><label id="title"></label></td>
						</tr>
						<tr>
							<td>有关话题:</td>
							<td><label id="tname"></label></td>
						</tr>
						<tr>
							<td>作者/提问人:</td>
							<td><label id="author"></label></td>
						</tr>
						<tr>
							<td>  时间：</td>
							<td><label id="time"></label></td>
						</tr>
						<tr>
							<td>内容/最热回复:</td>
							<td><textarea rows="10" cols="20"  id="content"></textarea>
							</td>
						</tr>
					</table>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">关闭
					</button>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal -->
	</div>
	<!-- 发送信息Model -->
	<div class="modal fade" id="infoModal" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="myModalLabel">推荐详情</h4>
				</div>
				<div class="modal-body">
				    <form id="infoForm"  method="get" action="information/send">
				    <table>
				       <tr>
				          <td><label>发件人：</label></td>
				          <td><input type="text"  name="selfname" id="selfname"/></td>
				          <td></td>
				       </tr>
				       <tr>
				          <td><label>收件人：</label></td>
				          <td><input type="text" name="aimname"  id="aimname"/></td>
				          <td></td>
				       </tr>
				       <tr>
				           <td><hr></td>
				           <td><hr></td>
				           <td><hr></td>
				       </tr>
				       <tr>
				          <td><label>编辑消息：</label></td>
				          <td colspan="2"><textarea rows="10" cols="30" name="info"></textarea></td>
				       </tr>
				    </table>
				    </form>
				</div>
				<div class="modal-footer">
				    <button type="button" class="btn btn-primary" id="sendmail">发送</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal -->
	</div>
	<!-- 动态展示（Modal） -->
	<div class="modal fade" id="dynstateModal" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="myModalLabel">动态详情</h4>
				</div>
				<div class="modal-body">
					<table class="input_table" width="500px">
						<tr>
							<td width="150px">本人id :</td>
							<td><label id="selfid"></label></td>
						</tr>
						<tr>
							<td>目标id :</td>
							<td><label id="aimid"></label></td>
						</tr>
						<tr>
							<td>动态类型 :</td>
							<td><label id="kinds"></label></td>
						</tr>
						<tr>
							<td>有关id:</td>
							<td><label id="ids"></label></td>
						</tr>
						<tr>
							<td>  时间：</td>
							<td><label id="times"></label></td>
						</tr>
					</table>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">关闭
					</button>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal -->
	</div>	
	<script type="text/javascript" src="easyui/jquery.min.js"></script>
	<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/holder.js"></script>
	<script src="js/ie10-viewport-bug-workaround.js"></script>
	<script type="text/javascript" src="js/back.js"></script>
</body>
</html>
