package com.yc.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Users;
import com.yc.zhihu.mapper.AdminMapper;
import com.yc.zhihu.service.AdminService;

@Service("adminService")
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminMapper adminMapper;
	
	@Override
	public List<Users> list() {
		return adminMapper.list();
	}
}
