package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Users;

public interface ReplyMapper {

	List<Explore> findReplyUser(Reply reply);

	List<Users> findUser(Users user);

	int addReply(Reply reply);

	String findAllReply(String rrid);

	List<Explore> findReplyReply(Reply reply);

	String findrreceid(String rid);

	int insertReply(Reply reply);

}
