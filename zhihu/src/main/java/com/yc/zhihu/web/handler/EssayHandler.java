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

import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.service.EssayService;
import com.yc.zhihu.service.TopicService;
import com.yc.zhihu.util.ServletUtil;

@Controller("essayHandler")
@RequestMapping("/essay")
public class EssayHandler {

	@Autowired
	private EssayService essayServie;
	
	@Autowired
	private TopicService topicService;
	
	//写文章
	@RequestMapping(value="/add" ,method=RequestMethod.POST )
	@ResponseBody
	public String add(Essay essay , HttpServletRequest request) throws UnsupportedEncodingException{
		String eautid = ((Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids();
		essay.setEautid(eautid);
		String etid = essay.getEtid().substring(0, 5);
		essay.setEtid(etid);
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
			request.getSession().setAttribute(ServletUtil.LOGIN_EID, eid);
			return essayServie.listAll(eid);
	}
	
	
	//文章话题
	@RequestMapping(value="/topic" ,method=RequestMethod.POST )
	@ResponseBody
	public List<Topics> topics(Essay essay , HttpServletRequest request,Topics topic){
			String eid = request.getParameter("eid");
			List<Topics> tp= new ArrayList<Topics>();
			for(int i=0;i<essayServie.listAll(eid).size();i++){
				String tid = essayServie.listAll(eid).get(0).getEtid();
				topic.setTid(tid);
				tp.add(topicService.listTopic(topic));
			}
			return tp;
	}
	//查询文章回复
	@RequestMapping(value="/reply" ,method=RequestMethod.POST )
	@ResponseBody
	public List<Explore> reply(Reply reply,HttpServletRequest request){
			String reqid= request.getParameter("eid");
			reply.setReqid(reqid);
			return essayServie.listReply(reply);
	}
	
	
	//添加文章评论
	@RequestMapping(value="/addReply" ,method=RequestMethod.GET)
	@ResponseBody
	public String  addReply(Reply reply,HttpServletRequest request) throws UnsupportedEncodingException{
			String reqid= (String) request.getSession().getAttribute(ServletUtil.LOGIN_EID);
			reply.setReqid(reqid);
			String remitid= ((Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids();
			reply.setRemitid(remitid);
			String rcontent=new String(reply.getRcontent().getBytes("iso-8859-1"),"utf-8");
			reply.setRcontent(rcontent);
			System.out.println(reply);
			if(essayServie.addReply(reply)>0){
				return "true";
			}else{
				return "false";
			}
			
	}
}
