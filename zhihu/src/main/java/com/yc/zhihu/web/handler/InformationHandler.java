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
		System.out.println("infomation进入===>"+info);
		String selfname=new String(info.getSelfname().getBytes("ISO-8849-1"),"UTF-8");
		String aimname=new String(info.getAimname().getBytes("ISO-8849-1"),"UTF-8");
		String infos=new String(info.getInfo().getBytes("ISO-8849-1"),"UTF-8");
		//return infomationService.send(info);
		System.out.println(selfname+"-"+aimname+"-"+infos);
		return 0;
	}
}
