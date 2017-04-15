package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Topics;

public interface TopicsMapper {

	List<Topics> list(Object user);

	List<Topics> findAll();

	List<Explore> allExploreW(Topics topic);

	List<Explore> allExploreQ(Topics topic);

	List<Explore> selectExplore(Topics t);

	
}
