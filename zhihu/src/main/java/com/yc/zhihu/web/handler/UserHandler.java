package com.yc.zhihu.web.handler;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
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
			request.getSession().setAttribute("username", users.getUname());
			request.getSession().setAttribute(ServletUtil.LOGIN_USER, users);
			return "redirect:/page/homepage.jsp";	
		}	
	}
	//用户注册
	@RequestMapping(value="register" , method= RequestMethod.POST)
	public String register(Users users , HttpServletRequest request){
		Users us = usersService.listUsers(users);
		if(us == null){
			usersService.register(users);
			return "redirect:/page/work.jsp";
		}else{
			request.setAttribute(ServletUtil.ERROR_MASSAGE, "邮箱已被注册！！！");
			return "/back/register.jsp";	
		}	
	}
	
	//列出最新动态
	@RequestMapping(value="dynstate",method=RequestMethod.GET)
	@ResponseBody
	public List<Explore> listDynstate(HttpServletRequest request){
		System.out.println("listDynstate ====> "+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		Users user= (Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER);
		//用来查找有关话题的文章
		List<Explore> all =new ArrayList<Explore>();
		List<Explore> explores= usersService.listrelated(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	    for(Explore explore:explores){
	    	all.add(explore);
	    }
	    System.out.println("------------------------");
	    //用来查找有关话题的问题
	    List<Explore> questions=usersService.listrelatedQ(user);
	    for(Explore question:questions){
	    	all.add(question);
	    }
	    //关注的对象的动态
	    List<Explore> dynstate=usersService.listrelatedD(user);
	    //如果关注对象没有动态或没有关注的对象，则返回关注的话题有关的文章或问题
	    if(dynstate!=null){
	    	dynstate.add(2, all.get(0));
	    	 return dynstate;
	    }else{
	    	return all;
	    }
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
