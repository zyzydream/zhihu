package com.yc.zhihu.web.handler;

import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Question;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.service.QuestionService;
import com.yc.zhihu.util.ServletUtil;

@Controller("questionHandler")
@RequestMapping("/question")
public class QuestioHandler {

	@Autowired 
	private QuestionService questionService;
	
	
	@RequestMapping(value="add" , method =RequestMethod.POST)
	@ResponseBody
	public String Add(Question question , HttpServletRequest request) throws UnsupportedEncodingException{
		//System.out.println("取到question ==》" + question);
		String qtid= question.getQtid().substring(0, 5);
		String qtitle = new String(question.getQtitle().getBytes("iso-8859-1"),"utf-8");
		String qdetail = new String(question.getQdetail().getBytes("iso-8859-1"),"utf-8");
		String qautid = ((Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids();
		question.setQautid(qautid);
		question.setQtid(qtid);
		question.setQtitle(qtitle);
		question.setQdetail(qdetail);
		if(questionService.addQusetion(question)){
		
			return "true";
		}else{
			return "false";
		}
	}
	
	@RequestMapping(value="topic" , method =RequestMethod.POST)
	@ResponseBody
	public List<Topics> topic(Question question){
		//String qid = request.getParameter("qid");
		List<Question> qu = questionService.list(question);
		System.out.println(qu);
		String qtid = qu.get(0).getQtid();
		//System.out.println(qtid);List<Topics>  
		//System.out.println(top.get(0));
		return questionService.listTopics(qtid);
	}
	
	@RequestMapping(value="title" , method =RequestMethod.POST)
	@ResponseBody
	public List<Question> title(Question question){
		//String qid = request.getParameter("qid");
		return  questionService.list(question);

	}
	
	
}
