package com.yc.zhihu.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.PaginationBean;
import com.yc.zhihu.entity.Strings;
import com.yc.zhihu.mapper.ExploreMapper;
import com.yc.zhihu.mapper.UserMapper;
import com.yc.zhihu.service.ExploreService;

@Service("exploreService")
public class ExploreServiceImpl implements ExploreService{

	@Autowired
	private ExploreMapper exploreMapper;
	@Autowired
	private UserMapper userMapper;
	
	@Override
	public List<Explore> list(Object user) {
		return exploreMapper.list(user);
	}

	@Override
	public PaginationBean<Explore> lists(String s,PaginationBean pBean) {
		String currPage=String.valueOf(pBean.getCurrPage());
		String pageSize=String.valueOf(pBean.getPageSize());
		pBean.setSgin(s);
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

		int total=exploreMapper.count(s);
		int totalPage=total/pSize+(total%pSize==0?0:1);
		if(cPage==totalPage+1){
			cPage=totalPage;
		}
		List<Explore>us=exploreMapper.lists(pBean);
		return new PaginationBean<Explore>(cPage,pSize,totalPage,total,us);
	}

	@Override
	public Explore find(String ids,String kind) {
		Strings s=new Strings();
		s.setIds(ids);
		s.setKind(kind);
		return exploreMapper.find(s);
	}
	
	@Override
	public int submit(Explore explore) {
		return exploreMapper.submit(explore);
	}

	//查找所有满足一定点赞上限的回复和文章
	@Override
	public List<Explore> findUpdate() {	
		List<Explore> all=new ArrayList<Explore>();
		List<Explore> essayExplore=exploreMapper.findUpdateE();
		List<Explore> questionExplore = exploreMapper.findUpdateW();
		for(Explore e:essayExplore){
			if(find(e.getIds(),e.getKind())==null){
				String kind=e.getKind();
				e.setKind("DW");
				e.setPraise(userMapper.statisticsPraise(e));
				e.setKind("SW");
				e.setCollect(userMapper.statisticsCollect(e));
				e.setKind(kind);
				all.add(e);
			}
		}
		for(Explore e:questionExplore){
			System.out.println(questionExplore);
			if(find(e.getIds(),e.getKind())==null){
				String kind=e.getKind();
				e.setKind("DH");
				e.setPraise(userMapper.statisticsPraise(e));
				e.setKind("SH");
				e.setCollect(userMapper.statisticsCollect(e));
				e.setKind(kind);
				System.out.println(e);
				all.add(e);
			}
		}
		return all;
	}

	//将查找出来的回复和文章存入explore表中（标记为未审核）
	@Override
	public void update(List<Explore> explores) {
		for(Explore explore:explores){
			exploreMapper.update(explore);
		}
	}
	
	@Override
	public void updateExplore(){
		exploreMapper.updateExplore();
	}

}
