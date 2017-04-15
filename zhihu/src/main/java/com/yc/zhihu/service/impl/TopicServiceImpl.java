package com.yc.zhihu.service.impl;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.mapper.TopicsMapper;
import com.yc.zhihu.mapper.UserMapper;
import com.yc.zhihu.service.TopicService;

@Service("topicService")
public class TopicServiceImpl implements TopicService{

	@Autowired
	private UserMapper userMapper;
	@Autowired
	private TopicsMapper topicsMapper;

	@Override
	public List<Topics> list(Object user) {

		return topicsMapper.list(user);
	}

	@Override
	public List<Topics> listAll() {
		return topicsMapper.findAll();
	}

	@Override
	public List<Explore> allExplore(String ids) {
		Topics topic=new Topics();
		topic.setTid(ids);
		List<Explore>all=new ArrayList<Explore>();
		List<Explore> eW=topicsMapper.allExploreW(topic);
		for(Explore w:eW){
			w.setKind("DW");
			w.setPraise(userMapper.statisticsPraise(w));
			w.setKind("SW");
			w.setCollect(userMapper.statisticsCollect(w));
			w.setKind("W");
			all.add(w);
		}
		List<Explore> eQ=topicsMapper.allExploreQ(topic);
		for(Explore q:eQ){
			q.setKind("DQ");
			q.setPraise(userMapper.statisticsPraise(q));
			q.setKind("SQ");
			q.setCollect(userMapper.statisticsCollect(q));
			q.setKind("Q");
			all.add(q);
		}
		return times(all);
	}

	@Override
	public List<Explore> selectExplore(Topics t) {
		List<Explore> explores= topicsMapper.selectExplore(t);
		for(Explore explore:explores){
			if("W".equals(explore.getKind())){
				explore.setKind("DW");
				explore.setPraise(userMapper.statisticsPraise(explore));
				explore.setKind("SW");
				explore.setCollect(userMapper.statisticsCollect(explore));
				explore.setKind("W");
			}else if("Q".equals(explore.getKind())){
				explore.setKind("DQ");
				explore.setPraise(userMapper.statisticsPraise(explore));
				explore.setKind("SQ");
				explore.setCollect(userMapper.statisticsCollect(explore));
				explore.setKind("Q");
			}
		}
		return times(explores);

	}

	//按时间排列
	public List<Explore> times(List<Explore> all){
		int length=all.size();
		DateFormat df=new SimpleDateFormat("yyyy-MM-dd");
		Explore [] t=new Explore[length];
		for(int i=0;i<length;i++){
			t[i]=all.get(i);
		}
		for(int i=0;i<length;i++){
			for(int j=i;j<length;j++){
				try {
					Date d1=df.parse(t[i].getTimes());
					Date d2=df.parse(t[j].getTimes());
					if(d1.getTime()<d2.getTime()){
						Explore tt=new Explore();
						tt=t[i];
						t[i]=t[j];
						t[j]=tt;
					}
				} catch (ParseException e) {
					e.printStackTrace();
				}
			}
		}
		all.clear();
		for(int i=1;i<=length;i++){
			t[i-1].setChecks(i+"");
			all.add(t[i-1]);
		}
		return all;
	}
}
