package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Explore;

public interface ExploreService {

	List<Explore> list(Object attribute);

	List<Explore> lists(String s);

	int submit(String ids, String kind);

	Explore find(String ids,String kind);

	List<Explore> findUpdate();

	void update(List<Explore> explores);
	

}
