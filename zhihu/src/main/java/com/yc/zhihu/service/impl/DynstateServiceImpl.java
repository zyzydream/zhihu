package com.yc.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.mapper.DynstateMapper;
import com.yc.zhihu.service.DynstateService;

@Service("dynstateService")
public class DynstateServiceImpl implements DynstateService {

	@Autowired
	private DynstateMapper dynstateMapper;

	@Override
	public List<Users> list(Dynstate dynstate) {
		return dynstateMapper.list(dynstate);
	}

	@Override
	public List<Reply> answer(Object users) {
		return dynstateMapper.listAnswer(users);
	}
}
