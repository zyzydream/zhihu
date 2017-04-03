package com.yc.zhihu.mapper;

import java.util.List;

import org.apache.catalina.User;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Users;

public interface DynstateMapper {

	List<Users> list(Dynstate dynstate);
	
	List<Reply> listAnswer(Object users);

	List<Essay> listMyEssay(Object users);
}
