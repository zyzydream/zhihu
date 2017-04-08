package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Favorite;
import com.yc.zhihu.entity.PaginationBean;
import com.yc.zhihu.entity.Question;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Users;

public interface DynstateService {

	PaginationBean<Dynstate> list(PaginationBean<Explore> e);

	List<Reply> answer(Object object);
	
	List<Essay> myessay(Object obj);
	
	List<Question> myquestion(Object obj);
	
	List<Favorite> listFavorite(Object obj);
	
	List<Users> listAttention(Object obj);
	
	boolean modifyUserPic(Users users);
	
	Users total(Object users);

	boolean AddGH(Dynstate dynstate);

	String listUsers(Object obj);
}
