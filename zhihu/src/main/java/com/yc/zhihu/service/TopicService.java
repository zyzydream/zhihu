package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Topics;

public interface TopicService {

	public List<Topics> list(Object user);

	public List<Topics> listAll();

	public List<Explore> allExplore(String ids);

	public List<Explore> selectExplore(Topics t);

	public Topics listTopic(Topics topic);

	public Dynstate attention(Dynstate dynstate);

	

}
