package com.yc.zhihu.web.handler;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.service.UserService;
import com.yc.zhihu.util.ServletUtil;

@Controller("userHandler")
@RequestMapping("/user")
public class UserHandler {

	@Autowired
	private UserService usersService;
	
	@RequestMapping(value="login" , method= RequestMethod.POST)
	public String Login(Users users , HttpServletRequest request , HttpServletResponse response){		//查询所有主话题
		System.out.println("取到user==》"+ users);
		users = usersService.listUsers(users);
		
		if(users== null){
			request.setAttribute(ServletUtil.ERROR_MASSAGE, "用户名或密码错误！！！");
			return "/back/login.jsp";	
		}else{
			request.getSession().setAttribute(ServletUtil.LOGIN_USER, users);
			return "redirect:/page/homepage.jsp";	
		}	
	}
	//用户注册
	@RequestMapping(value="register" , method= RequestMethod.POST)
	public String register(Users users , HttpServletRequest request){
		List<Users> us = usersService.listNewUsers(users);
		if(us == null){
			usersService.register(users);
			return "redirect:/page/work.jsp";
		}else{
			request.setAttribute(ServletUtil.ERROR_MASSAGE, "邮箱或用户名已被注册！！！");
			return "/back/register.jsp";	
		}	
	}
	
	//列出最新动态
	@RequestMapping(value="/dynstate",method=RequestMethod.GET)
	@ResponseBody
	public List<Essay> listDynstate(HttpServletRequest request){
		System.out.println("listDynstate ====> "+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		return usersService.listrelated(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	
	//列出新消息
	@RequestMapping(value="/new",method=RequestMethod.GET)
	@ResponseBody
	public List<Essay> listNews(){
		System.out.println("====> listNews");
		return usersService.listnews("10001");
	}
	
	//列出新消息
	@RequestMapping(value="/topics",method=RequestMethod.GET)
	@ResponseBody
	public List<Topics> listTopics(HttpServletRequest request){
		System.out.println("====> listTopics");
		return usersService.listTopics(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	
}
