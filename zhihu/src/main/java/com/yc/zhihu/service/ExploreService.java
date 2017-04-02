package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Explore;

public interface ExploreService {

	List<Explore> list(Object attribute);

	List<Explore> lists(String s);

}
