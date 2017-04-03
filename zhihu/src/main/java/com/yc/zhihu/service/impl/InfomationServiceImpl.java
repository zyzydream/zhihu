package com.yc.zhihu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Infomation;
import com.yc.zhihu.mapper.InfomationMapper;
import com.yc.zhihu.service.InfomationService;

@Service("infomationService")
public class InfomationServiceImpl implements InfomationService {

	@Autowired
	private InfomationMapper infomationMapper;
	
	@Override
	public int send(Infomation info) {
		return infomationMapper.send(info);
	}

}
