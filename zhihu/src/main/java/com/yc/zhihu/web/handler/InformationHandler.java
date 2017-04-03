package com.yc.zhihu.web.handler;

import java.io.UnsupportedEncodingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Infomation;
import com.yc.zhihu.service.InfomationService;

@Controller("informationHandler")
@RequestMapping("/information")
public class InformationHandler {

	@Autowired
	private InfomationService infomationService;
	
	@RequestMapping(value="send",method=RequestMethod.POST)
	@ResponseBody
	public int send(Infomation info) throws UnsupportedEncodingException{
		System.out.println("infomation进入===>"+info.toString());
		//return infomationService.send(info);
		return 0;
	}
}
