package com.yc.zhihu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Essay;
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

}
