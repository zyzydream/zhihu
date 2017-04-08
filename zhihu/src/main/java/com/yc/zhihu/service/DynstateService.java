package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Favorite;
import com.yc.zhihu.entity.ListAllMy;
import com.yc.zhihu.entity.Question;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.entity.Total;
import com.yc.zhihu.entity.Users;

public interface DynstateService {

	List<Users> list(Dynstate dynstate);

	List<ListAllMy> answer(Object object);
	
	List<Reply> answer2(Object object);
	
	List<Essay> myessay(Object obj);
	
	List<Question> myquestion(Object obj);
	
	List<Favorite> listFavorite(Object obj);
	
	List<Users> listAttention(Object obj);
	
	boolean modifyUserPic(Users users);
	
	Users total(Object users);

	boolean AddGH(Dynstate dynstate);

	String listUsers(Object obj);
	
	List<Total> sumT(Object obj);
	
	List<ListAllMy> listtopic(Object obj);
}
