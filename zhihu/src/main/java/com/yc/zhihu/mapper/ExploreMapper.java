package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Strings;

public interface ExploreMapper {

	List<Explore> list(Object user);

	List<Explore> lists(String s);

	int submit(String ids, String kind);

	Explore find(Strings s);

	List<Explore> findUpdate();

	void update(Explore explore);

	List<Explore> findUpdateE();
}
