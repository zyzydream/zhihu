package com.yc.zhihu.service;

import java.util.List;

import com.yc.zhihu.entity.Essay;

public interface EssayService {

	boolean add(Essay essay);

	List<Essay> listAll(String eid);

}
