package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Question;
import com.yc.zhihu.entity.Topics;

public interface QuestionMapper {

	boolean insertQuestion(Question question);

	List<Question> findQuestion(Question question);

	List<Topics> findTopics(String qtid);

	
}
