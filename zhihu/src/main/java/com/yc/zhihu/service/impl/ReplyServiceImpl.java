package com.yc.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.mapper.ReplyMapper;
import com.yc.zhihu.service.ReplyService;

@Service("replyService")
public class ReplyServiceImpl implements ReplyService {

	@Autowired
	private ReplyMapper  replyMapper;
	
	@Override
	public List<Reply> list(Reply reply) {
		return replyMapper.findReplyUser(reply);
	}

}
