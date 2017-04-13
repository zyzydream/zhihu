<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<base href="/zhihu/">
<link rel="shortcut icon" href="images/logohead.png">
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
							<div>
								<div class="Popover Messages AppHeader-messages">
									<button id="Popover-90242-23671-toggle"
										class="Button Messages-icon Button--plain" type="button"
										aria-haspopup="true" aria-expanded="false"
										aria-owns="Popover-90242-23671-content">
										<svg class="Icon Icon--message" viewBox="0 0 20 20" width="20"
											height="20" aria-hidden="true"
											style="height: 20px; width: 20px;"></svg>
									</button>
								</div>
							</div>
							<div class="AppHeader-profile">
								<div class="Popover">
									<button id="Popover-90246-31783-toggle"
										class="Button AppHeader-profileEntry Button--plain"
										type="button" aria-haspopup="true" aria-expanded="false"
										aria-owns="Popover-90246-31783-content">
										<img class="Avatar" src="/images/touxiang.jpg"
											style="width: 30px; height: 30px;">
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
							<div class="QuestionHeader-main">
								<div class="QuestionHeader-topics">
									<div class="Tag QuestionTopic" data-za-module="TopicItem"
										data-za-module-info="{"card":{"content":{"type":"Topic","token":"19588167"}}}">
										<span class="Tag-content"> <a class="TopicLink"
											href="/topic/19588167">
												<div class="Popover">
													<div id="Popover-93694-85063-toggle" aria-haspopup="true"
														aria-expanded="false"
														aria-owns="Popover-93694-85063-content">医患关系</div>
												</div>
										</a>
										</span>
									</div>
								</div>
								<h1 class="QuestionHeader-title">作为医学生，你经历或老师讲述过的有意思的病例有哪些？</h1>
								<div class="QuestionHeader-detail">
									<div class="QuestionRichText QuestionRichText--collapsed">
										<div>
											<span class="RichText">教学病例</span>
										</div>
									</div>
								</div>
							</div>

							<div class="QuestionHeader-side">
								<div class="QuestionHeader-follow-status">
									<div class="QuestionFollowStatus">
										<div class="NumberBoard QuestionFollowStatus-counts">
											<button class="Button NumberBoard-item Button--plain"
												type="button">
												<div class="NumberBoard-name">关注者</div>
												<div class="NumberBoard-value">43516</div>
											</button>
											<div class="NumberBoard-divider"></div>
											<div class="NumberBoard-item">
												<div class="NumberBoard-name">被浏览</div>
												<div class="NumberBoard-value">29109115</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="QuestionHeader-footer">
							<div class="QuestionHeader-footer-inner">
								<div class="QuestionHeader-main QuestionHeader-footer-main">
									<div class="QuestionHeader-actions">
										<button class="Button Button--plain" type="button">
											<svg class="Icon Icon--comment Icon--left"
												viewBox="0 0 18 18" width="12" height="16"
												aria-hidden="true" style="height: 16px; width: 12px;">
												
											</svg>
											31 条评论
										</button>
										<div class="Popover ShareMenu">
											<div id="Popover-66947-65137-toggle" aria-haspopup="true"
												aria-expanded="false"
												aria-owns="Popover-66947-65137-content">
												<button class="Button Button--plain" type="button">
													<svg class="Icon Icon--share Icon--left"
														viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg"
														width="13" height="16" aria-hidden="true"
														style="height: 16px; width: 13px;">
														
													</svg>
													分享
												</button>
											</div>
										</div>
										<button class="Button Button--plain" type="button">
											<svg class="Icon Icon--star Icon--left" viewBox="0 0 20 20"
												width="13" height="16" aria-hidden="true"
												style="height: 16px; width: 13px;"></svg>
											邀请回答
										</button>
										<button class="Button Button--plain" type="button">
											<svg class="Icon Icon--report Icon--left" viewBox="0 0 18 20"
												width="11" height="16" aria-hidden="true"
												style="height: 16px; width: 11px;"></svg>
											举报
										</button>
										<div class="Popover">
											<button id="Popover-66954-68491-toggle"
												class="Button Button--plain" type="button"
												aria-haspopup="true" aria-expanded="false"
												aria-owns="Popover-66954-68491-content">
												<svg class="Icon Icon--dots" viewBox="0 0 18 4" width="14"
													height="16" aria-hidden="true"
													style="height: 16px; width: 14px;"></svg>
											</button>
										</div>
									</div>
									<div class="QuestionHeader-actions"></div>
								</div>

								<div class="QuestionHeader-side">
									<div class="QuestionButtonGroup">
										<button class="Button Button--primary Button--blue"
											type="button">关注问题</button>
									</div>
									<button class="Button" type="button">
										<svg class="Icon Button-icon Icon--modify" viewBox="0 0 12 12"
											width="14" height="16" aria-hidden="true"
											style="height: 16px; width: 14px;">
										</svg>
										写回答
									</button>
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
							data-za-module-info="{"card":{"content":{"item_num":1532}}}">
							<a class="QuestionMainAction"
								data-za-detail-view-element_name="ViewAll"
								href="/question/35713706">查看全部 1532 个回答</a>
						</div>
					</div>
					
				</div>
			</main>
		</div>
	</div>

</body>
</html>