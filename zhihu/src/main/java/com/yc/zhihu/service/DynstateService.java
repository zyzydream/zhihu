package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Favorite;
import com.yc.zhihu.entity.Question;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Users;

public interface DynstateService {

	List<Users> list(Dynstate dynstate);

	List<Reply> answer(Object object);
	
	List<Essay> myessay(Object obj);
	
	List<Question> myquestion(Object obj);
	
	List<Favorite> listFavorite(Object obj);
}
