package com.yc.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Favorite;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.mapper.FavoriteMapper;
import com.yc.zhihu.service.FavoriteService;

@Service("favoriteService")
public class FavoriteServiceImpl implements FavoriteService {

	@Autowired
	private FavoriteMapper favoriteMapper;
	
	@Override
	public List<Favorite> list(Favorite f) {
		return favoriteMapper.list(f);
	}

}
