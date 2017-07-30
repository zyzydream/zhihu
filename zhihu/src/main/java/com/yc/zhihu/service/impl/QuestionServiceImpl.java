package com.yc.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Question;
import com.yc.zhihu.entity.ShowUser;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.mapper.QuestionMapper;
import com.yc.zhihu.service.QuestionService;
@Service("questionService")
public class QuestionServiceImpl implements QuestionService {

	@Autowired	
	private QuestionMapper questionMapper;
	
	@Override
	public boolean addQusetion(Question question) {
		return questionMapper.insertQuestion(question);
	}

	@Override
	public List<Question> list(Question question) {
		return questionMapper.findQuestion(question);
	}

	@Override
	public List<Topics> listTopics(String qtid) {
		return questionMapper.findTopics(qtid);
	}

	@Override
	public List<ShowUser> invite(Topics topics) {
		return questionMapper.invite(topics);
	}
}
