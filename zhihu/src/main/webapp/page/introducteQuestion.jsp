<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<base href="${zhihuName}">
<meta charset="utf-8">
<title>提出问题</title>
<link type="text/css" rel="stylesheet" href="css/introducteQuestion.css">
</head>
<body>
	<div class="modal-dialog-content">
		<div class="zh-add-question-form">
			<form class="js-add-question-form">
				<div class="zg-section-big clearfix">
					<div id="zm-modal-dialog-info-wrapper"></div>
					<div class="zg-form-text-input add-question-title-form"
						style="position: relative;">
						<textarea id="zh-question-suggest-title-content"
							class="zg-editor-input zu-seamless-input-origin-element"
							title="在这里输入问题" rows="1" aria-label="写下你的问题" placeholder="写下你的问题"
							role="combobox" aria-autocomplete="list" 
							style="height: 39px;"></textarea>
					</div>
					<div id="zh-question-suggest-ac-wrap"
						class="question-suggest-ac-wrap"></div>
				</div>
				<div class="zg-section-big">
					<div class="add-question-section-title">
						<span class="zg-right extra-editor-toolbar hidden-phone">
						</span> 问题说明（可选）： <span id="zh-question-form-detail-err"></span>
					</div>
					<div id="zh-question-suggest-detail-container"
						class="zm-editable-status-editing">
						<div class="zm-editable-editor-wrap no-toolbar" style="">
							<div class="zm-editable-editor-outer">
								<div class="zm-editable-editor-field-wrap">
									<div id="mock:6m"
										class="zm-editable-editor-field-element editable"
										contenteditable="true" g_editable="true" role="textbox"
										style="font-style: italic;">
										<p>
											<span style="font-style: normal; color: #999;">问题背景、条件等详细信息</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="zm-add-question-form-topic-wrap">
					<div class="add-question-section-title">
						<span class="zg-gray zg-right hidden-phone">话题越精准，越容易让相关领域专业人士看到你的问题</span>
						选择话题： <span id="zh-question-form-tag-err"></span>
					</div>
					<div id="zh-question-suggest-topic-container"
						class="zm-tag-editor zg-section">
						<div class="zm-tag-editor-editor zg-clear">
							<div class="zg-inline"></div>
							<div class="zm-tag-editor-command-buttons-wrap zg-left">
								<label class="zg-icon icon-magnify" for="topic"></label> <input
									class="zu-question-suggest-topic-input label-input-label"
									type="text" role="combobox" aria-autocomplete="list"
									aria-label="搜索话题" placeholder="搜索话题">
							</div>
						</div>
						<div id="zh-question-suggest-autocomplete-container"></div>
					</div>
				</div>
				<div class="zm-command">
					<label class="zm-question-form-hide-in-about-question-el zg-left">
						<input class="zg-addq-isanon" type="checkbox" value="1">
						匿名
					</label> <a class="zm-command-cancel" name="cancel" href="javascript:;">取消</a>
					<a class="zg-r5px zu-question-form-add zg-btn-blue" name="addq"
						href="javascript:;">发布</a>
				</div>
			</form>
		</div>
	</div>	
</body>
</html>