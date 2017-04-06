package com.yc.zhihu.web.handler;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Question;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.service.AdminService;
import com.yc.zhihu.service.DynstateService;
import com.yc.zhihu.util.ServletUtil;

@Controller("dynstateHandler")
@RequestMapping("/dynstate")
public class DynstateHandler {

	@Autowired
	private DynstateService dynstateService;
	
	@RequestMapping(value="/all",method=RequestMethod.GET)
	@ResponseBody
	public List<Users> list(Dynstate dynstate ){
		System.out.println("进来了 ====>  dynstate");
		return dynstateService.list(dynstate);
	}
	
	
	@RequestMapping(value="/m1",method=RequestMethod.GET)
	@ResponseBody
	public List<Reply> Dynstatehuida(HttpServletRequest request){
		System.out.println("进来了 ====>  users"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		return dynstateService.answer(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	
	@RequestMapping(value="/m3",method=RequestMethod.GET)
	@ResponseBody
	public List<Reply> Dynstatehuida3(HttpServletRequest request){
		System.out.println("进来了 ====>  users"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		return dynstateService.answer(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	
	@RequestMapping(value="/m4",method=RequestMethod.GET)
	@ResponseBody
	public List<Essay> DynstateMy(HttpServletRequest request){
		System.out.println("进来了 ====>  users"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		return dynstateService.myessay(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	
	@RequestMapping(value="/m6",method=RequestMethod.GET)
	@ResponseBody
	public List<Question> DynstateMyQuestion(HttpServletRequest request){
		System.out.println("进来了 ====>  users"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		return dynstateService.myquestion(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	
}
