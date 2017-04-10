package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Favorite;
import com.yc.zhihu.entity.Users;

public interface FavoriteMapper {

	List<Favorite> list(Favorite f);

}
