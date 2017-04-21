package com.yc.zhihu.service;

import java.util.List;

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

public interface DynstateService {

	PaginationBean<Dynstate> list(PaginationBean<Explore> e);

	List<ListAllMy> answer(Object object);
	
	List<Reply> answer2(Object object);
	
	List<Essay> myessay(Object obj);
	
	List<Question> myquestion(Object obj);
	
	List<Favorite> listFavorite(Object obj);
	
	
	boolean modifyUserPic(Users users);
	
	Users total(Object users);

	int AddGH(Dynstate dynstate);

	String listUsers(Object obj);
	
	List<Total> sumT(Object obj);
	
	List<ListAllMy> listtopic(Object obj);
	
	boolean updatetoppics(Object object);
	
	List<Users> showtop(Object obj);
	
	List<ListAllMy> showessays(Object obj);
	
	List<ListAllMy> showscolumns(Object obj);

	int praise(Dynstate dynstate);

	int collect(Dynstate dynstate);
	

	
	Total myatteninfo(String obj);

	int delpraise(Dynstate dynstate);

	int delcollect(Dynstate dynstate);
	
	int countdz(Object obj);

	int favoriteinfo(Favorite attribute);
	
	List<Users> alluses(Object obj);
	
	List<Users> allattenme(Object obj);
	
}
