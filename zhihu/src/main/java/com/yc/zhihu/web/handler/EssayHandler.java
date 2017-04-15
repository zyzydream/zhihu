package com.yc.zhihu.web.handler;

import java.io.UnsupportedEncodingException;
import java.util.List;

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
	
	
	//写文章
	@RequestMapping(value="/add" ,method=RequestMethod.POST )
	@ResponseBody
	public String add(Essay essay , HttpServletRequest request) throws UnsupportedEncodingException{
		String eautid = ((Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids();
		essay.setEautid(eautid);
		String etitle = new String(essay.getEtitle().getBytes("iso-8859-1"),"utf-8");
		String econtent = new String(essay.getEcontent().getBytes("iso-8859-1"),"utf-8");
		essay.setEtitle(etitle);
		essay.setEcontent(econtent);
		System.out.println("essay 进来了==》" + essay);
		if(essayServie.add(essay)){
			return "true";
		}else{
			return "false";
		}
		
	}
	
	//读取文章
	@RequestMapping(value="/all" ,method=RequestMethod.POST )
	@ResponseBody
	public List<Essay> all(Essay essay , HttpServletRequest request){
			System.out.println("进来了");
			String eid = request.getParameter("eid");
			return essayServie.listAll(eid);
	}
	
}
