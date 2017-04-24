<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<base href="/zhihu/">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<title>知乎</title>
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
						<a href="page/homepage.jsp" aria-label="知乎"> <img src="images/zhihublue.png">
						</a>
						<nav class="AppHeader-nav" role="navigation">
							<a class="AppHeader-navItem" href="page/homepage.jsp">首页</a> <a
								class="AppHeader-navItem" href="page/explore.jsp">发现</a> <a
								class="AppHeader-navItem" href="page/talk.jsp">话题</a>
						</nav>
						<div class="SearchBar" role="search">
							<div class="SearchBar-toolWrapper">
								<form class="SearchBar-tool">
									<div>
										<div class="Popover">
											<div
												class="SearchBar-input Input-wrapper Input-wrapper--grey">
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
							<a href="page/introducteQuestion.jsp"><button
								class="Button SearchBar-askButton Button--primary Button--blue"
								type="button">提问</button></a>
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
			<main class="App-main" role="main">
			<div id="ProfileHeader" class="ProfileHeader"
				data-za-module="Unknown" data-za-module-info="{"card":{"content":{"type":"User","token":"pang-huang-zhi-ren-80"}}}">
				<div class="Card">
					<div class="ProfileHeader-userCover">
						<div class="UserCover UserCover--colorBlock" id="showImage_gr">
						
						</div>
					</div>
					<div class="ProfileHeader-wrapper">
						<div class="ProfileHeader-main">
							<div class="UserAvatar ProfileHeader-avatar" style="top: -74px;" id="userava">
								<img class="Avatar Avatar--large UserAvatar-inner"
									src="https://pic1.zhimg.com/da8e974dc_xl.jpg"
									width="160" height="160">
							</div>
							<div class="ProfileHeader-content">
								<div class="ProfileHeader-contentHead">
									<h1 class="ProfileHeader-title"  id="himinfo">
										<span class="ProfileHeader-name"><%=request.getSession().getAttribute("username2") %></span> <span
											class="RichText ProfileHeader-headline"><%=request.getSession().getAttribute("usign2") %></span>
									</h1>
								</div>

								<div class="ProfileHeader-contentFooter">
									<div
										class="MemberButtonGroup ProfileButtonGroup ProfileHeader-buttons"  id="atten">
										<button
											class="Button FollowButton Button--primary Button--blue"
											type="button" onclick="yesfav()" value="已关注" id="btn_submit">
											<span id="guanzhu_name" aria-hidden="false" >已关注</span></button>
										<button class="Button" type="button">
											<span>发私信</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="Profile-main">
				<div class="Profile-mainColumn">
					<div id="ProfileMain" class="Card ProfileMain">

						<div class="ProfileMain-header">
							<div id="myself1"></div>
							
							<!-- <ul class="Tabs ProfileMain-tabs" role="tablist">
								<li class="Tabs-item Tabs-item--noMeta" role="tab"
									aria-controls="Profile-activities"><a class="Tabs-link"
									href="/people/pang-huang-zhi-ren-80/activities">动态</a></li>
								<li class="Tabs-item" role="tab" aria-controls="Profile-answers">
									<a class="Tabs-link is-active"
									href="/people/pang-huang-zhi-ren-80/answers"> 回答 <span
										class="Tabs-meta">1</span>
								</a>
								</li>
								<li class="Tabs-item" role="tab" aria-controls="Profile-posts">
									<a class="Tabs-link" href="/people/pang-huang-zhi-ren-80/pins">
										分享 <span class="Tabs-meta">0</span>
								</a>
								</li>
								<li class="Tabs-item" role="tab" aria-controls="Profile-asks">
									<a class="Tabs-link" href="/people/pang-huang-zhi-ren-80/asks">
										提问 <span class="Tabs-meta">0</span>
								</a>
								</li>
								<li class="Tabs-item" role="tab"
									aria-controls="Profile-collections"><a class="Tabs-link"
									href="/people/pang-huang-zhi-ren-80/collections"> 收藏 <span
										class="Tabs-meta">1</span>
								</a></li>
								<li class="Tabs-item Tabs-item--noMeta" role="tab"
									aria-controls="Profile-following"><a class="Tabs-link"
									href="/people/pang-huang-zhi-ren-80/following">关注 </a></li>
							</ul> -->
						</div>
						<div id="Profile-answers" class="List Profile-answers">
							<div id="myself2"></div>
							
							<!--< div class="List-header">
								<h4 class="List-headerText">
									<span>他的回答</span>
								</h4>
							</div>
							<div class="List-item">
								<div class="ContentItem AnswerItem" name="159114339"
									data-za-module="AnswerItem" data-za-module-info="{"card":{"content":{"type":"Answer","token":"159114339","upvote_num":1861,"comment_num":206,"publish_timestamp":null,"parent_token":"58692739","author_member_hash_id":"f0d6c7fe9cc6cf77e1ec4e06878ff871"}}}">
									<h2 class="ContentItem-title">
										<a target="_blank" href="/question/58692739/answer/159114339">如何看待16岁少女在北京昌平新东方外国语教室遭17岁同学强奸后被勒死？</a>
									</h2>
									<div class="ContentItem-meta">
										<div class="AnswerItem-meta">
											<div class="AuthorInfo">
												<span class="UserLink AuthorInfo-avatarWrapper">
													<div class="Popover">
														<div id="Popover-93008-97660-toggle" aria-haspopup="true"
															aria-expanded="false"
															aria-owns="Popover-93008-97660-content">
															<a class="UserLink-link"
																href="/people/pang-huang-zhi-ren-80"> <img
																class="Avatar AuthorInfo-avatar"
																src="https://pic1.zhimg.com/50/da8e974dc_xs.jpg"
																srcset="https://pic1.zhimg.com/50/da8e974dc_l.jpg 2x"
																alt="彷徨之刃" width="38" height="38">
															</a>
														</div>
													</div>
												</span>
												<div class="AuthorInfo-content">
													<div class="AuthorInfo-title">
														<div class="AuthorInfo-name">
															<span class="UserLink">
																<div class="Popover">
																	<div id="Popover-93012-44681-toggle"
																		aria-haspopup="true" aria-expanded="false"
																		aria-owns="Popover-93012-44681-content">
																		<a class="UserLink-link"
																			href="/people/pang-huang-zhi-ren-80">彷徨之刃</a>
																	</div>
																</div>
															</span>
														</div>
													</div>
													<div class="RichText AuthorInfo-badge">车手</div>
												</div>

											</div>
											<div class="AnswerItem-extraInfo">
												<span class="Voters">
													<button class="Button Button--plain" type="button">1887
														人赞同了该回答</button>
												</span>
											</div>
										</div>
									</div>
									<div class="RichContent">
										<div class="RichContent-inner">
											<span class="RichText CopyrightRichText-richText">
												519奸杀案犯人王祎哲家庭背景曝光：王1999年2月18日出生，现已年满十八周岁，系成年人。父母早年在京开洗脚城（大家都懂的是什么生意，公安部门关系肯定很硬）。现父亲在监狱服刑（犯什么罪学校及王家人保密），母亲吕红霞，北京海琳娜商贸公司总裁，现公司正在招聘扩大规模中。王祎哲杀人案主要证人刘钰泽：王在新东方学校黑组织“屌丝小分队成员之一，自称“王的女人”。迷恋王至疯狂，据知情人士说，她无条件接受王的所有，包括辱骂和让她帮助欺负欺骗被王盯上的女同学。事发后王让她做伪证同时销毁犯罪证据。据传两人共同谋划嫌疑。自称父亲山东东营“黑社会”，爷爷高官，自己东营胜利油田六中“大姐大”。学校招收这种人想把新东方学校变成黑社会组织，欺男霸女、杀人越货、无恶不作……
												<br> 现暴出些同学们发来的刘钰泽的图片
											</span>
										</div>
										<div class="ContentItem-time">
											<a href="/question/58692739/answer/159114339" target="_blank">发布于
												昨天 18:20</a>
										</div>
										<div class="ContentItem-actions">
											<span>
												<button class="Button VoteButton VoteButton--up"
													aria-label="赞同" type="button">
													<img src="images/yes.png" style="height: 13px; width: 9px;">155
												</button>
												<button class="Button VoteButton VoteButton--down"
													aria-label="反对" type="button">
													<img src="images/no.png" style="height: 16px; width: 9px;">
												</button>
											</span>
											<button class="Button ContentItem-action Button--plain"
												type="button">
												<img src="images/pen.png" style="height: 14px; width: 12px;">207条评论
											</button>

											<button class="Button ContentItem-action Button--plain"
												type="button">
												<img src="images/shou.png"
													style="height: 16px; width: 12px;">收藏
											</button>
										</div>
									</div>
								</div>
							</div> -->
						</div>
					</div>
				</div>
				<div class="Profile-sideColumn" data-za-module="RightSideBar" id="right">
					<div class="Card FollowshipCard">
						<div class="NumberBoard FollowshipCard-counts">
							<a class="Button NumberBoard-item Button--plain" type="button"
								href="/people/pang-huang-zhi-ren-80/following">
								<div class="NumberBoard-name">关注了</div>
								<div class="NumberBoard-value"><%=request.getSession().getAttribute("myatten2")%></div>
							</a>
							<div class="NumberBoard-divider"></div>
							<a class="Button NumberBoard-item Button--plain" type="button"
								href="/people/pang-huang-zhi-ren-80/followers">
								<div class="NumberBoard-name">关注者</div>
								<div class="NumberBoard-value"><%=request.getSession().getAttribute("attenme2")%></div>
							</a>
						</div>
					</div>
					<div class="Profile-lightList" >
						<a class="Profile-lightItem"
							href="/people/pang-huang-zhi-ren-80/following/topics"> <span
							class="Profile-lightItemName">关注的话题</span> <span
							class="Profile-lightItemValue"><%=request.getSession().getAttribute("myattentop2")%></span>
						</a>  <a class="Profile-lightItem"
							href="/people/pang-huang-zhi-ren-80/following/collections"> <span
							class="Profile-lightItemName">关注的收藏夹</span> <span
							class="Profile-lightItemValue"><%=request.getSession().getAttribute("myattenfav2")%></span>
						</a>
					</div>
				</div>

			</div>
		</div>

	</div>
	
	
	<script src="js/jquery.min.js"></script>
	<script src="bootstrap-3.3.4/dist/js/bootstrap.min.js"></script>
	<script
		src="bootstrap-3.3.4/docs/assets/js/ie10-viewport-bug-workaround.js"
		tppabs="bootstrap-3.3.4/docs/assets/js/ie10-viewport-bug-workaround.js"></script>
	<script type="text/javascript" src="js/himself.js"></script>
	<script src='js/layer/layer.js' type="text/javascript"></script>
	<!-- 	<script type="text/javascript" src="bootstrap-3.3.4/bootstrap-fileinput-master/js/fileinput.js"></script>
 -->
	<script type="text/javascript" src="/bootstrap-3.3.4/js/popover.js"></script>
	<script type="text/javascript" src="js/jquery-form.js"></script>
</body>
</html>