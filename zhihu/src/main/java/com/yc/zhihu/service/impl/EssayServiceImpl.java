package com.yc.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.mapper.EssayMapper;
import com.yc.zhihu.service.EssayService;

@Service("essayService")
public class EssayServiceImpl implements EssayService {

	@Autowired
	private EssayMapper essayMapper;
	
	@Override
	public boolean add(Essay essay) {
		return essayMapper.addEssay(essay);
	}

	@Override
	public List<Essay> listAll(String eid) {
		return essayMapper.findEssay(eid);
	}

	@Override
	public List<Explore> listReply(Reply reply) {
		return essayMapper.findReply(reply);
	}

	@Override
	public int addReply(Reply reply) {
		return essayMapper.insertReply(reply);
	}

}
