package com.yc.zhihu.service;


import com.yc.zhihu.entity.Admins;
import com.yc.zhihu.entity.PaginationBean;
import com.yc.zhihu.entity.Users;

public interface AdminService {

	PaginationBean<Users> list(PaginationBean<Users> users);

	Admins login(Admins admins);


}
