package com.yc.zhihu.web.handler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.service.EssayService;

@Controller("essayHAndler")
@RequestMapping("/essay")
public class EssayHandler {

	@Autowired
	private EssayService essayServie;
	
	@RequestMapping(value="/add" ,method=RequestMethod.POST )
	@ResponseBody
	public boolean add(Essay essay){
		System.out.println("essay 进来了==》" + essay);
		return true;
		
	}
}
