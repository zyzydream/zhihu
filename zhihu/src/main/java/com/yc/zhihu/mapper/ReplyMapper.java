package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Reply;

public interface ReplyMapper {

	List<Explore> findReplyUser(Reply reply);

}
