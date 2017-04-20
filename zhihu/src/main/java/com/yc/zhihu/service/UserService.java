package com.yc.zhihu.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.ShowUser;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.entity.Users;

public interface UserService {

	//列出最新动态
	List<Explore> listrelated(Object object);
	
	//列出新消息
	List<Essay> listnews(String id);

	List<Topics> listTopics(Object attribute);

	Users listUsers(Users users);

	boolean register(Users users);


	List<Explore> listrelatedQ(Object user);

	List<Explore> listrelatedD(Users user);

	List<Users> listOneUsers(Users users);

	boolean listprofession(Users users);

	List<Explore> listExplore(Users user);
	List<Users> listTp(Users users);

	List<Users> findProfession(Users users);

	List<Explore> yPraiseAndCollect(List<Explore> explores, HttpServletRequest request);

	ShowUser showUser(Users user);

	ShowUser attentionUser(Users user);

	Users list(Users user);

}
