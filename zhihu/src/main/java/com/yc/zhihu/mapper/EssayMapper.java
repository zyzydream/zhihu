package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Reply;

public interface EssayMapper {

	boolean addEssay(Essay essay);

	List<Essay> findEssay(String eid);

	List<Explore> findReply(Reply reply);

	int insertReply(Reply reply);

}
