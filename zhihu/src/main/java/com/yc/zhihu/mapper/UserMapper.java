package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.entity.Users;

public interface UserMapper {

	//列出最新动态中的文章
	List<Explore> listrelated(Object user);

	//列出新消息
	List<Essay> listnews(String id);

	Users login(Users user);

	List<Topics> listTopics(Object user);

	Users findUsers(Users users);

	int AddUsers(Users users);
	List<Users> findNewUsers(Users users);

	//列出最新动态中的问题
	List<Explore> listrelatedQ(Object user);

	//列出最新动态中的关注对象写的文章
	List<Explore> listessay(Users user);
	//列出最新动态中的关注对象提的问题
	List<Explore> listquestion(Users user);
	//列出最新动态中的关注对象关注的话题
	List<Dynstate> lists(Users user);

	Explore listrelatedTopic(Dynstate dynstate);

	boolean AddUsersprofession(Users users);

	List<Explore> listExplore(Users user);

	String statisticsPraise(Explore essay);

	String statisticsCollect(Explore essay);
	List<Users> findTopic(Users users);

	List<Users> findUprf(Users users);

	Dynstate ypraise(Dynstate dynstate);

	Dynstate ycollect(Dynstate dynstate);

}
