package com.yc.zhihu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Question;
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

}
