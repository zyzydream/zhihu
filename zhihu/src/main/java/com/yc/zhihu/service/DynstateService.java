package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Users;

public interface DynstateService {

	List<Users> list(Dynstate dynstate);

	Reply answer(Users users);
}
