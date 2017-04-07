package com.yc.zhihu.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Strings;
import com.yc.zhihu.mapper.ExploreMapper;
import com.yc.zhihu.service.ExploreService;

@Service("exploreService")
public class ExploreServiceImpl implements ExploreService{

	@Autowired
	private ExploreMapper exploreMapper;
	
	@Override
	public List<Explore> list(Object user) {
		return exploreMapper.list(user);
	}

	@Override
	public List<Explore> lists(String s) {
		return exploreMapper.lists(s);
	}

	@Override
	public Explore find(String ids,String kind) {
		Strings s=new Strings();
		s.setIds(ids);
		s.setKind(kind);
		return exploreMapper.find(s);
	}
	
	@Override
	public int submit(String ids, String kind) {
		
		return exploreMapper.submit(ids,kind);
	}

	//查找所有满足一定点赞上限的回复和文章
	@Override
	public List<Explore> findUpdate() {	
		List<Explore> all=new ArrayList<Explore>();
		List<Explore> essayExplore=exploreMapper.findUpdateE();
		List<Explore> questionExplore = exploreMapper.findUpdate();
		for(Explore e:essayExplore){
			if(find(e.getIds(),e.getKind())==null){
				all.add(e);
			}
		}
		for(Explore e:questionExplore){
			if(find(e.getIds(),e.getKind())==null){
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

}
