package com.yc.zhihu.web.handler;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.service.AdminService;
import com.yc.zhihu.service.ExploreService;
import com.yc.zhihu.util.ServletUtil;

@Controller("adminHandler")
@RequestMapping("/admin")
public class AdminHandler {

	@Autowired
	private AdminService adminService;
	
	@RequestMapping(value="/user",method=RequestMethod.GET)
	@ResponseBody
	public List<Users> list(){
		return adminService.list().subList(0, 10);
	}
}
