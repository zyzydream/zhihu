package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Topics;

public interface TopicService {

	public List<Topics> list(Object user);

	public List<Topics> listAll();

	

}
