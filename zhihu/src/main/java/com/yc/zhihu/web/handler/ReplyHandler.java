package com.yc.zhihu.web.handler;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.service.ReplyService;

@Controller("replyHandler")
@RequestMapping("/reply")
public class ReplyHandler {

	@Autowired
	private ReplyService replyService;
	
	@RequestMapping(value="list" , method=RequestMethod.POST)
	@ResponseBody
	public List<Reply> list(Reply reply ,HttpServletRequest request){
		String reqid= request.getParameter("qid");
		reply.setReqid(reqid);
		System.out.println("进来了 reply==》" + reply);
		return replyService.list(reply);
	}
	
}
