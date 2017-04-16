package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Reply;

public interface ReplyMapper {

	List<Reply> findReplyUser(Reply reply);

}
