package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Infomation;

public interface InfomationMapper {

	int send(Infomation info);

	List<Infomation> find(Infomation infos);

}
