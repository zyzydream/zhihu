package com.yc.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.mapper.ExploreMapper;
import com.yc.zhihu.service.ExploreService;

@Service("exploreService")
public class ExploreServiceImpl implements ExploreService{

	@Autowired
	private ExploreMapper exploreMapper;
	
	@Override
	public List<Explore> list(Object user) {
		return exploreMapper.list(user);
	}

	@Override
	public List<Explore> lists(String s) {
		return exploreMapper.lists(s);
	}

}
