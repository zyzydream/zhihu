package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.PaginationBean;
import com.yc.zhihu.entity.Users;

public interface AdminService {

	PaginationBean<Users> list(PaginationBean<Users> users);


}
