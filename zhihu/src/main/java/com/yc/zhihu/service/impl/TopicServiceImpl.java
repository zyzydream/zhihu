package com.yc.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.mapper.TopicsMapper;
import com.yc.zhihu.service.TopicService;

@Service("topicService")
public class TopicServiceImpl implements TopicService{

	@Autowired
	private TopicsMapper topicsMapper;
	
	@Override
	public List<Topics> list(Object user) {
		
		return topicsMapper.list(user);
	}

	@Override
	public List<Topics> listAll() {
		return topicsMapper.findAll();
	}

	

}
