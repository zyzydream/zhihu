package com.yc.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.mapper.ReplyMapper;
import com.yc.zhihu.mapper.UserMapper;
import com.yc.zhihu.service.ReplyService;

@Service("replyService")
public class ReplyServiceImpl implements ReplyService {

	@Autowired
	private ReplyMapper  replyMapper;
	@Autowired
	private UserMapper userMapper;
	
	@Override
	public List<Explore> list(Reply reply) {
		List<Explore> explores=replyMapper.findReplyUser(reply);
		for(Explore explore:explores){
			explore.setKind("DH");
			explore.setPraise(userMapper.statisticsPraise(explore));
			explore.setKind("SH");
			explore.setCollect(userMapper.statisticsCollect(explore));
			explore.setKind("Q");
		}
		return explores;
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
