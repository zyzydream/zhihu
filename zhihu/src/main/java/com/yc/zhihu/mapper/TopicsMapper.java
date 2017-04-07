package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Topics;

public interface TopicsMapper {

	List<Topics> list(Object user);

	List<Topics> findAll();

	
}
