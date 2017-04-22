package com.yc.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Infomation;
import com.yc.zhihu.entity.Users;
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

	@Override
	public List<Infomation> find(Infomation infos) {
		return infomationMapper.find(infos);
	}

	@Override
	public List<Infomation> list(Users users) {
		return infomationMapper.list(users);
	}

}
