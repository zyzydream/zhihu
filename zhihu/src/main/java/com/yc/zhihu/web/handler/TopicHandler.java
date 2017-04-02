package com.yc.zhihu.web.handler;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.service.TopicService;
import com.yc.zhihu.service.UserService;
import com.yc.zhihu.util.ServletUtil;

@Controller("topicHandler")
@RequestMapping("/topic")
public class TopicHandler {

	@Autowired
	private TopicService topicService;
	
	@RequestMapping(value="/list",method=RequestMethod.POST)
	public List<Topics> list(HttpServletRequest request){
		return topicService.list(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
}
