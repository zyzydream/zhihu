package com.yc.zhihu.web.handler;

import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Infomation;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.service.InfomationService;
import com.yc.zhihu.util.ServletUtil;

@Controller("informationHandler")
@RequestMapping("/information")
public class InformationHandler {

	@Autowired
	private InfomationService infomationService;
	
	@RequestMapping(value="send",method=RequestMethod.GET)
	public String send(Infomation info,HttpServletRequest request) throws UnsupportedEncodingException{
		String selfname=new String(info.getSelfname().getBytes("iso-8859-1"),"utf-8");
		String aimname=new String(info.getAimname().getBytes("iso-8859-1"),"utf-8");
		String infomation=new String(info.getInfo().getBytes("iso-8859-1"),"utf-8");
		Infomation infos=new Infomation();
		infos.setAimname(aimname);
		infos.setInfo(infomation);
		infos.setSelfname(selfname);
		infomationService.send(infos);
		//request.getSession().setAttribute("aaaa", "成功！！！");
		return "redirect:/back/back.jsp";
	}
	
	@RequestMapping(value="usersend",method=RequestMethod.GET)
	@ResponseBody
	public int usersend(Infomation info,HttpServletRequest request) throws UnsupportedEncodingException{
		String aimname=new String(info.getAimname().getBytes("iso-8859-1"),"utf-8");
		String infomation=new String(info.getInfo().getBytes("iso-8859-1"),"utf-8");
		Infomation infos=new Infomation();
		infos.setAimname(aimname);
		infos.setInfo(infomation);
		infos.setSelfname(((Users)(request.getSession().getAttribute(ServletUtil.LOGIN_USER))).getUname());
		//request.getSession().setAttribute("aaaa", "成功！！！");
		return infomationService.send(infos);
	}
	
	@RequestMapping(value="list",method=RequestMethod.GET)
	@ResponseBody
	public List<Infomation> list(HttpServletRequest request){
		return infomationService.list((Users)request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
}
