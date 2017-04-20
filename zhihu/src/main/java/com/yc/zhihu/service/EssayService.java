package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Reply;

public interface EssayService {

	boolean add(Essay essay);

	List<Essay> listAll(String eid);

	List<Explore> listReply(Reply reply);

	int addReply(Reply reply);

}
