package com.yc.zhihu.web.handler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.service.AdminService;
import com.yc.zhihu.service.DynstateService;

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
	public Reply Dynstatehuida(String id){
		System.out.println("进来了 ====>  id");
		return dynstateService.answer(id);
	}
	
}
