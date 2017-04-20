package com.yc.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.mapper.ReplyMapper;
import com.yc.zhihu.service.ReplyService;

@Service("replyService")
public class ReplyServiceImpl implements ReplyService {

	@Autowired
	private ReplyMapper  replyMapper;
	
	@Override
	public List<Explore> list(Reply reply) {
		return replyMapper.findReplyUser(reply);
	}

	@Override
	public List<Users> listUser(Users user) {
		return replyMapper.findUser(user);
	}

	@Override
	public int add(Reply reply) {
		return replyMapper.addReply(reply);
	}

}
