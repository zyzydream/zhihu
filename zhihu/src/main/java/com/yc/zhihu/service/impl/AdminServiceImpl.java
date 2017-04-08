package com.yc.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.PaginationBean;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.mapper.AdminMapper;
import com.yc.zhihu.service.AdminService;

@Service("adminService")
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminMapper adminMapper;
	
	@Override
	public PaginationBean<Users> list(PaginationBean<Users> users) {
		String currPage=String.valueOf(users.getCurrPage());
		String pageSize=String.valueOf(users.getPageSize());
		int cPage=1;
		int pSize=10;
		if(currPage!=null ){
			cPage=Integer.parseInt(currPage);
			if(currPage.intern()=="0"){
				cPage=1;
			}
		}
		if(pageSize!=null){
			pSize=Integer.parseInt(pageSize);
		}

		int total=adminMapper.count();
		int totalPage=total/pSize+(total%pSize==0?0:1);
		if(cPage==totalPage+1){
			cPage=totalPage;
		}
		List<Users>us=adminMapper.list(users);
		return new PaginationBean<Users>(cPage,pSize,totalPage,total,us);
	}
}
