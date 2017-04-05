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
import com.yc.zhihu.service.ExploreService;
import com.yc.zhihu.util.ServletUtil;

@Controller("exploreHandler")
@RequestMapping("/explore")
public class ExploreHandler {

	@Autowired
	private ExploreService exploreService;


	//推荐头条
	@RequestMapping(value="/dynstate",method=RequestMethod.GET)
	@ResponseBody
	public List<Explore> list(HttpServletRequest request){
		List<Explore> explore= exploreService.list(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
		//List<Explore> explores=exploreService.lists();
		return explore;
	}

	//后台展示审核
	@RequestMapping(value="/{check}",method=RequestMethod.GET)
	@ResponseBody
	public List<Explore> lists(@PathVariable("check")String check){
		List<Explore> explore= exploreService.lists(check);
		return explore;
	}

	@RequestMapping(value="/ok",method=RequestMethod.GET)
	@ResponseBody
	public List<Explore> submit(String ids,String kind){
		exploreService.submit(ids,kind);
		//List<Explore> explores=exploreService.lists();
		//return explore;
		return null;
	}
	@RequestMapping(value="/update",method=RequestMethod.GET)
	@ResponseBody
	public List<Explore> update(){
		List<Explore> explores=exploreService.findUpdate();
		exploreService.update(explores);
		return explores;
	}
}
