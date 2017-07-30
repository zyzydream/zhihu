package com.yc.zhihu.web.handler;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Admins;
import com.yc.zhihu.entity.PaginationBean;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.service.AdminService;
import com.yc.zhihu.util.ServletUtil;

@Controller("adminHandler")
@RequestMapping("/admin")
public class AdminHandler {

	@Autowired
	private AdminService adminService;
	
	@RequestMapping(value="/user",method=RequestMethod.GET)
	@ResponseBody
	public PaginationBean<Users> list(PaginationBean<Users> users){
		return adminService.list(users);
	}
	
	
	@RequestMapping(value="/login",method=RequestMethod.POST)
	public String login(Admins admins,HttpServletRequest request) throws UnsupportedEncodingException{
		String adname=new String(admins.getAdname().getBytes("iso-8859-1"),"utf-8");
		admins.setAdname(adname);
		admins =adminService.login(admins);
		if(admins == null){
			request.setAttribute(ServletUtil.ERROR_MASSAGE, "用户名或密码错误！！！");
			return "/back/backlogin.jsp";
			
		}else{
			request.getSession().setAttribute("adminname",admins.getAdname());
			request.getSession().setAttribute(ServletUtil.LOGIN_ADMINS, admins);
			return "redirect:/back/back.jsp";
		}
		
	}
}
