package com.yc.zhihu.web.handler;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Explore;
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
	
	@RequestMapping(value="/all",method=RequestMethod.POST)
	@ResponseBody
	public List<Topics> All(){
		List<Topics> tp = topicService.listAll();
		return tp;
	}
	
	@RequestMapping(value="/allExplore",method=RequestMethod.POST)
	@ResponseBody
	public List<Explore> allExplore(String ids){
		return topicService.allExplore(ids);
	}
	
}
