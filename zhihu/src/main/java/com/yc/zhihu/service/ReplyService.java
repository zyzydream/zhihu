package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Reply;

public interface ReplyService {

	List<Explore> list(Reply reply);

}
