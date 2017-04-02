package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.entity.Users;

public interface UserMapper {

	//列出最新动态
	List<Essay> listrelated(Object user);

	//列出新消息
	List<Essay> listnews(String id);

	Users login(Users user);

	List<Topics> listTopics(Object user);

	Users findUsers(Users users);

	int AddUsers(Users users);

}
