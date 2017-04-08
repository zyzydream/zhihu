package com.yc.zhihu.web.handler;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.service.EssayService;
import com.yc.zhihu.util.ServletUtil;

@Controller("essayHAndler")
@RequestMapping("/essay")
public class EssayHandler {

	@Autowired
	private EssayService essayServie;
	
	@RequestMapping(value="/add" ,method=RequestMethod.POST )
	@ResponseBody
	public String add(Essay essay , HttpServletRequest request){
		String eautid = ((Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids();
		essay.setEautid(eautid);
		System.out.println("essay 进来了==》" + essay);
		if(essayServie.add(essay)){
			return "true";
		}else{
			return "false";
		}
		
	}
}
