package com.yc.zhihu.web.handler;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.ShowUser;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.service.ReplyService;
import com.yc.zhihu.service.UserService;
import com.yc.zhihu.util.ServletUtil;

@Controller("replyHandler")
@RequestMapping("/reply")
public class ReplyHandler {

	@Autowired
	private ReplyService replyService;
	@Autowired
	private UserService usersService;
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="list" , method=RequestMethod.POST)
	@ResponseBody
	public List<Explore> list(Reply reply ,HttpServletRequest request){
		String reqid= request.getParameter("qid");
		reply.setReqid(reqid);
		request.getSession().setAttribute(ServletUtil.LOGIN_REQID, reply);
		//System.out.println("进来了 reply==》" + reply);
		for(int i=0;i<replyService.list(reply).size();i++){
			
		}
		return replyService.list(reply);
	}
	
	
	@RequestMapping(value="user" , method=RequestMethod.POST)
	@ResponseBody
	public ShowUser user(Users user ,HttpServletRequest request){
		System.out.println("进来了 user==》" + user);
		ShowUser users=userService.showUser(user);
		Dynstate dynstate=new Dynstate();
		dynstate.setAimid(users.getUids());
		dynstate.setSelfid(((Users)request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids());
		users.setAttention(usersService.yattention(dynstate));
		return users;
	}
	
	@RequestMapping(value="my" , method=RequestMethod.POST)
	@ResponseBody
	public List<Users> my(Users user ,HttpServletRequest request){
		String uids=((Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids();
		System.out.println("uids====>" + uids);
		user.setUids(uids);
		return replyService.listUser(user);
	}
	
	
	@RequestMapping(value="add" , method=RequestMethod.GET)
	@ResponseBody
	public String add(Reply reply ,HttpServletRequest request) throws UnsupportedEncodingException{
		String reqid= ((Reply) request.getSession().getAttribute(ServletUtil.LOGIN_REQID)).getReqid();
		reply.setReqid(reqid);
		String remitid= ((Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids();
		reply.setRemitid(remitid);
		String rcontent=new String(reply.getRcontent().getBytes("iso-8859-1"),"utf-8");
		reply.setRcontent(rcontent);
		System.out.println(reply);
		if(replyService.add(reply)>0){
			return "true";
		}else{
			return "false";
		}
		
	}
	
}
