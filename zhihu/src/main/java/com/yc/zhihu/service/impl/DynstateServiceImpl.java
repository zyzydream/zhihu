package com.yc.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Favorite;
import com.yc.zhihu.entity.ListAllMy;
import com.yc.zhihu.entity.PaginationBean;
import com.yc.zhihu.entity.Question;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.entity.Total;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.mapper.DynstateMapper;
import com.yc.zhihu.service.DynstateService;

@Service("dynstateService")
public class DynstateServiceImpl implements DynstateService {

	@Autowired
	private DynstateMapper dynstateMapper;
	
	

	@Override
	public PaginationBean<Dynstate> list(PaginationBean<Explore> pBean) {
		//return dynstateMapper.list(e);
		String currPage=String.valueOf(pBean.getCurrPage());
		String pageSize=String.valueOf(pBean.getPageSize());
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

		int total=dynstateMapper.count(pBean);
		int totalPage=total/pSize+(total%pSize==0?0:1);
		if(cPage==totalPage+1){
			cPage=totalPage;
		}
		List<Dynstate>us=dynstateMapper.list(pBean);
		return new PaginationBean<Dynstate>(cPage,pSize,totalPage,total,us);
	}

	@Override
	public List<ListAllMy> answer(Object users) {
		return dynstateMapper.listAnswer(users);
	}
	
	@Override
	public List<Essay> myessay(Object obj) {
		return dynstateMapper.listMyEssay(obj);
	}
	
	@Override
	public List<Question> myquestion(Object obj) {
		return dynstateMapper.listMyQuestion(obj);
	}
	
	@Override
	public List<Favorite> listFavorite(Object obj) {
		return dynstateMapper.listMyFavorite(obj);
	}
	
	
	@Override
	public boolean modifyUserPic(Users users) {
		return dynstateMapper.updateUserPic(users)>0;
	}
	
	@Override
	public Users total(Object users) {
		return dynstateMapper.totalatten(users);
	}

	@Override
	public boolean AddGH(Dynstate dynstate) {
		return dynstateMapper.insertGH(dynstate);
	}

	@Override
	public String  listUsers(Object obj) {
		return dynstateMapper.findUsers(obj);
	}
	
	@Override
	public List<Total> sumT(Object obj) {
		return dynstateMapper.Sum(obj);
	}
	
	@Override
	public List<ListAllMy> listtopic(Object obj) {
		return dynstateMapper.listmytopic(obj);
	}
	
	@Override
	public List<Reply> answer2(Object object) {
		return dynstateMapper.listAnswer2(object);
	}
	
	@Override
	public boolean updatetoppics(Object object) {
		return dynstateMapper.updatetop(object);
	}
	
	@Override
	public List<Users> showtop(Object obj) {
		return dynstateMapper.showtopimg(obj);
	}
	
	@Override
	public List<ListAllMy> showessays(Object obj) {
		return dynstateMapper.showessay(obj);
	}
	
	@Override
	public List<ListAllMy> showscolumns(Object obj) {
		return dynstateMapper.showscolumn(obj);
	}
	
	@Override
	public int praise(Dynstate dynstate) {
		String kind=dynstate.getKind();
		if("FW".equals(kind)){
			dynstate.setKind("DW");
		}else if("Q".equals(kind)){
			dynstate.setKind("DH");
		}else if("FQ".equals(kind)){
			dynstate.setKind("DQ");
		}else if("W".equals(kind)){
			dynstate.setKind("DW");
		}
		System.out.println(dynstate.getKind());
		return dynstateMapper.praise(dynstate);
	}

	@Override
	public int collect(Dynstate dynstate) {
		String kind=dynstate.getKind();
		if("FW".equals(kind)){
			dynstate.setKind("SW");
		}else if("Q".equals(kind)){
			dynstate.setKind("SH");
		}else if("FQ".equals(kind)){
			dynstate.setKind("SQ");
		}else if("W".equals(kind)){
			dynstate.setKind("SW");
		}
		return dynstateMapper.collect(dynstate);
	}
	@Override
	public Total myatteninfo(String obj) {
		return dynstateMapper.myatteninfo(obj);
	}
	
	@Override
	public int delpraise(Dynstate dynstate) {
		String kind=dynstate.getKind();
		if("FW".equals(kind)){
			dynstate.setKind("DW");
		}else if("Q".equals(kind)){
			dynstate.setKind("DH");
		}else if("FQ".equals(kind)){
			dynstate.setKind("DQ");
		}else if("W".equals(kind)){
			dynstate.setKind("DW");
		}
		System.out.println(dynstate.getKind());
		return dynstateMapper.delpraise(dynstate);
	}

	@Override
	public int delcollect(Dynstate dynstate) {
		String kind=dynstate.getKind();
		if("FW".equals(kind)){
			dynstate.setKind("SW");
		}else if("Q".equals(kind)){
			dynstate.setKind("SH");
		}else if("FQ".equals(kind)){
			dynstate.setKind("SQ");
		}else if("W".equals(kind)){
			dynstate.setKind("SW");
		}
		System.out.println(dynstate.getKind());
		return dynstateMapper.delcollect(dynstate);
	}
	
	@Override
	public int countdz(Object obj) {
		return dynstateMapper.countdz(obj);
	}
	
	@Override
	public int favoriteinfo(Favorite attribute) {
		return dynstateMapper.favoriteinfo(attribute);
	}
	
	@Override
	public List<Users> alluses(Object obj) {
		return dynstateMapper.alluids(obj);
	}
	
	@Override
	public List<Users> allattenme(Object obj) {
		return dynstateMapper.attenme(obj);
	}
	
	@Override
	public boolean updateupic(Object obj) {
		return dynstateMapper.updateupic(obj);
	}
	
	@Override
	public Users listupic(Object obj) {
		return dynstateMapper.listupic(obj);
	}
}
