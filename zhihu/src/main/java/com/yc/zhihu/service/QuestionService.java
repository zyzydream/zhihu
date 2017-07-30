package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Question;
import com.yc.zhihu.entity.ShowUser;
import com.yc.zhihu.entity.Topics;

public interface QuestionService {

	boolean addQusetion(Question question);

	List<Question> list(Question question);

	List<Topics> listTopics(String qtid);

	List<ShowUser> invite(Topics topics);

}
