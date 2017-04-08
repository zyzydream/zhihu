package com.yc.zhihu.mapper;

import java.util.List;

import org.apache.catalina.User;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Favorite;
import com.yc.zhihu.entity.ListAllMy;
import com.yc.zhihu.entity.PaginationBean;
import com.yc.zhihu.entity.Question;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.entity.Total;
import com.yc.zhihu.entity.Users;

public interface DynstateMapper {

	List<Users> list(Dynstate dynstate);
	
	List<ListAllMy> listAnswer(Object users);
	List<Reply> listAnswer2(Object users);

	List<Essay> listMyEssay(Object users);
	
	List<Question> listMyQuestion(Object users);
	
	List<Favorite> listMyFavorite(Object users);
	
	List<Users> listMyAttention(Object users);
	
	int updateUserPic(Users users);
	
	Users totalatten(Object users);
	
	Dynstate ifAtten(Object users);

	boolean insertGH(Dynstate dynstate);

	String findUsers(Object users);
	
	List<Total> Sum(Object users);
	
	List<Explore> listall(Object obj);
	
	List<ListAllMy> listmytopic(Object users);

	List<Dynstate> list(PaginationBean<Explore> e);

	int count(PaginationBean<Explore> pBean);
	
	boolean updatetop(Object users);
	
	List<Users> showtopimg(Object users); 
}
