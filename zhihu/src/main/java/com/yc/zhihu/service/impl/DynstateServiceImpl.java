package com.yc.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Favorite;
import com.yc.zhihu.entity.PaginationBean;
import com.yc.zhihu.entity.Question;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.mapper.DynstateMapper;
import com.yc.zhihu.service.DynstateService;

@Service("dynstateService")
public class DynstateServiceImpl implements DynstateService {

	@Autowired
	private DynstateMapper dynstateMapper;

	@Override
	public List<Dynstate> list(PaginationBean<Explore> e) {
		return dynstateMapper.list(e);
	}

	@Override
	public List<Reply> answer(Object users) {
		return dynstateMapper.listAnswer(users);
	}
	
	@Override
	public List<Essay> myessay(Object obj) {
		return dynstateMapper.listMyEssay(obj);
	}
	
	@Override
	public List<Question> myquestion(Object obj) {
		return dynstateMapper.listMyQuestion(obj);
	}
	
	@Override
	public List<Favorite> listFavorite(Object obj) {
		return dynstateMapper.listMyFavorite(obj);
	}
	
	@Override
	public List<Users> listAttention(Object obj) {
		return dynstateMapper.listMyAttention(obj);
	}
	
	@Override
	public boolean modifyUserPic(Users users) {
		return dynstateMapper.updateUserPic(users)>0;
	}
	
	@Override
	public Users total(Object users) {
		return dynstateMapper.totalatten(users);
	}

	@Override
	public boolean AddGH(Dynstate dynstate) {
		return dynstateMapper.insertGH(dynstate);
	}

	@Override
	public String  listUsers(Object obj) {
		return dynstateMapper.findUsers(obj);
	}
}
