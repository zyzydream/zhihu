package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Admins;
import com.yc.zhihu.entity.PaginationBean;
import com.yc.zhihu.entity.Users;

public interface AdminMapper {

	List<Users> list(PaginationBean<Users> users);

	int count();

	Admins findAdmins(Admins admins);

}
