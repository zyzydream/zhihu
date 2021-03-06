package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Users;

public interface ReplyService {

	List<Explore> list(Reply reply);

	List<Users> listUser(Users user);

	int add(Reply reply);

	String listcount(String rrid);

	List<Explore> listReply(Reply reply);

	String listUR(String rid);

	int addReply(Reply reply);

}
