package com.yc.zhihu.web.handler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.PaginationBean;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.service.AdminService;

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
}
