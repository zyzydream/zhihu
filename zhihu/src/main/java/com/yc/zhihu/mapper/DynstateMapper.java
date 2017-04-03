package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Users;

public interface DynstateMapper {

	List<Users> list(Dynstate dynstate);
	
	Reply listAnswer(String id);

}
