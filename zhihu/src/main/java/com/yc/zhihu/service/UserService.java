package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.entity.Users;

public interface UserService {

	//列出最新动态
	List<Essay> listrelated(Object object);
	
	//列出新消息
	List<Essay> listnews(String id);

	List<Topics> listTopics(Object attribute);

	Users listUsers(Users users);

	boolean register(Users users);

	List<Users> listNewUsers(Users users);

}
