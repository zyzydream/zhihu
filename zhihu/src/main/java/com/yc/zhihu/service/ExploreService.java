package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.PaginationBean;

public interface ExploreService {

	List<Explore> list(Object attribute);

	PaginationBean<Explore> lists(String s, PaginationBean pBean);

	Explore find(String ids,String kind);

	List<Explore> findUpdate();

	void update(List<Explore> explores);

	int submit(Explore explore);
	

}
