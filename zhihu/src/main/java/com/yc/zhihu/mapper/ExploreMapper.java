package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.PaginationBean;
import com.yc.zhihu.entity.Strings;

public interface ExploreMapper {

	List<Explore> list(Object user);

	List<Explore> lists(PaginationBean pBean);

	Explore find(Strings s);

	List<Explore> findUpdateW();

	void update(Explore explore);

	List<Explore> findUpdateE();

	int count(String s);

	int submit(Explore explore);
}
