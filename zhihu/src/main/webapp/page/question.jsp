<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<base href="/zhihu/">
<link rel="shortcut icon" href="images/logohead.png">
<link rel="stylesheet" type="text/css"
	href="easyui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="easyui/themes/icon.css">
<link type="text/css" rel="stylesheet" href="css/question.css">
<meta charset="UTF-8">
<title>显示问题</title>
</head>
<body class="Entry-body" data-reactid="18">
	<div id="root" data-reactid="19">
		<div data-reactroot="">
			<div>
				<header class="Sticky AppHeader is-fixed" role="banner"
					data-za-module="TopNavBar"
					style="width: 1440px; top: 0px; left: 0px;">
					<div class="AppHeader-inner">
						<a href="/" aria-label="知乎" class="zu-top-link-logo"> <svg
								class="Icon Icon--logo" viewBox="0 0 200 91" width="64"
								height="30" aria-hidden="true"
								style="fill: rgb(15, 136, 235); height: 30px; width: 64px;">
						  </svg>
						</a>

						<nav class="AppHeader-nav" role="navigation">
							<a class="AppHeader-navItem" href="/">首页</a> <a
								class="AppHeader-navItem" href="/explore">发现</a> <a
								class="AppHeader-navItem" href="/topic">话题</a>
						</nav>

						<div class="SearchBar" role="search">
							<div class="SearchBar-toolWrapper">
								<form class="SearchBar-tool">
									<div>
										<div class="Popover">
											<div
												class="SearchBar-input Input-wrapper Input-wrapper--grey">
												<input id="Popover-90031-14738-toggle" class="Input"
													maxlength="100" value="" autocomplete="off" role="combobox"
													aria-expanded="false" aria-autocomplete="list"
													aria-activedescendant="AutoComplete-90029-96385--1"
													aria-haspopup="true"
													aria-owns="Popover-90031-14738-content"
													placeholder="搜索你感兴趣的内容…" type="text">
												<div class="Input-after">
													<button type="submit" class="zu-top-search-button">
														<span class="hide-text">搜索</span><span
															class="sprite-global-icon-magnifier-dark"></span>
													</button>
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
							<div class="Popover PushNotifications AppHeader-notifications">
								<button id="Popover-90238-38778-toggle"
									class="Button PushNotifications-icon Button--plain"
									type="button" aria-haspopup="true" aria-expanded="false"
									aria-owns="Popover-90238-38778-content">
									<svg class="Icon Icon--news" viewBox="0 0 20 22" width="20"
										height="20" aria-hidden="true"
										style="height: 20px; width: 20px;"></svg>
								</button>
							</div>
							<div class="AppHeader-profile">
								<div class="Popover" id="me">
									<button id="Popover-90246-31783-toggle"
										class="Button AppHeader-profileEntry Button--plain"
										type="button" aria-haspopup="true" aria-expanded="false"
										aria-owns="Popover-90246-31783-content">
										<!-- <img class="Avatar" src="/images/touxiang.jpg"
											style="width: 30px; height: 30px;"> -->
									</button>
								</div>
							</div>
						</div>
					</div>
				</header>
				<div class="Sticky--holder"
					style="position: relative; top: 0px; right: 0px; bottom: 0px; left: 0px; display: block; float: none; margin: 0px; height: 53px;"></div>
			</div>


			<main class="App-main" role="main">
			<div>
				<div data-za-module="QuestionItem" data-za-module-info="{}">
					<div class="QuestionStatus"></div>
					<div class="QuestionHeader">
						<div class="QuestionHeader-content">
							<div class="QuestionHeader-main" id="questionHand">
								<div class="QuestionHeader-topics">
									<div class="Tag QuestionTopic" data-za-module="TopicItem"
										data-za-module-info="{"card":{"content":{"type":"Topic","token":"19588167"}}}">
										<span class="Tag-content"> <a class="TopicLink"
											href="/topic/19588167">
												<div class="Popover" id="Topic">
													<!-- 显示话题 -->
												</div>
										</a>
										</span>
									</div>
								</div>
								<!-- 显示标题及具体内容 -->
							</div>

							<div class="QuestionHeader-side">
								<div class="QuestionHeader-follow-status">
									<div class="QuestionFollowStatus">
										<div class="NumberBoard QuestionFollowStatus-counts">
											<div class="NumberBoard-item"></div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="QuestionHeader-footer">
							<div class="QuestionHeader-footer-inner">
								<div class="QuestionHeader-main QuestionHeader-footer-main">
									<div class="QuestionHeader-actions">
										<div class="Popover ShareMenu">
											<div id="Popover-66947-65137-toggle" aria-haspopup="true"
												aria-expanded="false"
												aria-owns="Popover-66947-65137-content">
												<button class="Button Button--plain" type="button">
													分享</button>
											</div>
										</div>
										<button class="Button Button--plain" type="button">
											邀请回答</button>
										<button class="Button Button--plain" type="button">
											举报</button>
										<div class="Popover">
											<button id="Popover-66954-68491-toggle"
												class="Button Button--plain" type="button"
												aria-haspopup="true" aria-expanded="false"
												aria-owns="Popover-66954-68491-content"></button>
										</div>
									</div>
									<div class="QuestionHeader-actions"></div>
								</div>

								<div class="QuestionHeader-side">
									<a class="Button" type="button" onclick="write()">写回答</a>
								</div>

							</div>
						</div>
					</div>
					<div>
						<div>
							<div class="Sticky"></div>
						</div>
					</div>
				</div>

				<div class="Question-main">
					<div class="Question-mainColumn">
						<div class="Card" data-za-module="MessageItem"
							data-za-module-info="{"
							card":{"content":{"item_num":1532}}}" id="sumReply">
							<!-- 查看全部xxx个回答</a> -->
						</div>
						<div class="Card" id="moreReply">
							<div class="QuestionAnswer-content" id="reply">
								<!-- 显示第一条回复 -->
							</div>
						</div>
						<!--  更多回答  -->
						<div class="Card" data-za-module="MessageItem" id="sumReply1">
							<!--  查看全部 XXX 个回答  -->
						</div>
						<!-- 回答问题 -->
						<!--<div class="Card QuestionAnswers-answerAdd" id="myReply">
							 <div class="AnswerAdd">
								<div class="AnswerAdd-header">
									<div class="AuthorInfo AnswerAdd-info">
										<span class="UserLink AuthorInfo-avatarWrapper"> <img
											class="Avatar AuthorInfo-avatar"
											src="https://pic1.zhimg.com/da8e974dc_xs.jpg"
											srcset="https://pic1.zhimg.com/da8e974dc_l.jpg 2x"
											alt="xiaoxiaoying" width="38" height="38">
										</span>
										<div class="AuthorInfo-content">
											<div class="AuthorInfo-title">
												<div class="AuthorInfo-name">
													<span class="UserLink">xiaoxiaoying</span>
												</div>
											</div>
											<div class="AuthorInfo-badge">职业</div>
										</div>
									</div>
								</div>

								<form class="AnswerForm">
									<textarea rows="7" cols="91"></textarea>
									<div>
										<div class="Sticky AnswerForm-footer is-bottom" style="">
											<button
												class="Button AnswerForm-submit Button--primary Button--blue"
												type="button">提交回答</button>
										</div>
									</div>
								</form>
							</div> 
						</div>-->
					</div>


					<div class="Question-sideColumn" data-za-module="RightSideBar">
						<div>
							<div class="Card AnswerAuthor">
								<div class="Card-header AnswerAuthor-title">
									<div class="Card-headerText">关于作者</div>
								</div>
								<div class="Card-section">
									<div class="AnswerAuthor-user" id="user">
										<!-- 关于作者 -->
									</div>
								</div>
								<div class="Card-section">
									<div class="AnswerAuthor-counts">
										<div class="NumberBoard" id="alluser">
											<!-- 关注人数 -->
										</div>
									</div>

									<div class="MemberButtonGroup AnswerAuthor-buttons">
										<button
											class="Button FollowButton Button--primary Button--blue"
											type="button">
											<span> 关注 </span>
										</button>
										<button class="Button" type="button">
											<span>发私信</span>

										</button>
									</div>
								</div>
							</div>
						</div>
						<footer class="Footer">
							<a class="Footer-item" target="_blank"
								href="//liukanshan.zhihu.com/">刘看山</a> <span class="Footer-dot"></span>
							<a class="Footer-item" target="_blank" href="/question/19581624">知乎指南</a>
							<span class="Footer-dot"></span> <a class="Footer-item"
								target="_blank" href="/terms">知乎协议</a> <span class="Footer-dot"></span>
							<a class="Footer-item" target="_blank" href="/app">应用</a> <span
								class="Footer-dot"></span> <a class="Footer-item"
								target="_blank" href="/careers">工作</a> <br> <a
								class="Footer-item" target="_blank" href="/contact">联系我们</a> <span>
								© 2017 知乎</span>
						</footer>
					</div>
				</div>
			</main>
		</div>
	</div>

</body>
<script type="text/javascript" src="easyui/jquery.min.js"></script>
<script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" charset="utf-8"
	src="ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8"
	src="ueditor/ueditor.all.min.js"></script>
<script type="text/javascript" charset="utf-8"
	src="ueditor/lang/zh-cn/zh-cn.js"></script>
<script type="text/javascript" src="js/question.js"></script>
</html>