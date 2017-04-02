package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Explore;

public interface ExploreMapper {

	List<Explore> list(Object user);

	List<Explore> lists(String s);
}
