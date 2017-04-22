package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Infomation;
import com.yc.zhihu.entity.Users;

public interface InfomationService {

	int send(Infomation info);

	List<Infomation> find(Infomation infos);

	List<Infomation> list(Users users);

	
}
