package com.yc.zhihu.mapper;

import java.util.List;

import com.yc.zhihu.entity.Essay;

public interface EssayMapper {

	boolean addEssay(Essay essay);

	List<Essay> findEssay(String eid);

}
