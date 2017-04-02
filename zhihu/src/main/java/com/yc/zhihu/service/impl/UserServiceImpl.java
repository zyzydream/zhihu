package com.yc.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.mapper.UserMapper;
import com.yc.zhihu.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService{

	@Autowired
	private UserMapper userMapper;
	
	//列出最新动态
	@Override
	public List<Essay> listrelated(Object user) {
		return userMapper.listrelated(user);
	}

	//列出新消息
	@Override
	public List<Essay> listnews(String id) {
		return userMapper.listnews(id);
	}

	@Override
	public List<Topics> listTopics(Object user) {
		return userMapper.listTopics(user);
	}

	@Override
	public Users listUsers(Users users) {
		return userMapper.findUsers(users);
	}

	@Override
	public boolean register(Users users) {
		return  (userMapper.AddUsers(users)>0);
	}

}
