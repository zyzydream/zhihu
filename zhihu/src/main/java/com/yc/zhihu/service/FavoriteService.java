package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Favorite;
import com.yc.zhihu.entity.Users;

public interface FavoriteService {

	List<Favorite> list(Favorite f);

}
