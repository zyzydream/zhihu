package com.yc.zhihu.service.impl;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.mapper.UserMapper;
import com.yc.zhihu.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService{

	@Autowired
	private UserMapper userMapper;
	
	//列出最新动态
	@Override
	public List<Explore> listrelated(Object user) {
		return userMapper.listrelated(user);
	}

	//列出新消息
	@Override
	public List<Essay> listnews(String id) {
		return userMapper.listnews(id);
	}

	@Override
	public List<Topics> listTopics(Object user) {
		return userMapper.listTopics(user);
	}

	@Override
	public Users listUsers(Users users) {
		return userMapper.findUsers(users);
	}

	@Override
	public boolean register(Users users) {
		return  (userMapper.AddUsers(users)>0);
	}

	@Override
	public List<Explore> listrelatedQ(Object user) {
		return userMapper.listrelatedQ(user);
	}

	@Override
	public List<Explore> listrelatedD(Users user) {
		List<Explore> all=new ArrayList<Explore>();
		List<Explore> essays = userMapper.listessay(user);
		for(Explore essay:essays){
			essay.setKind("FW");
			all.add(essay);
		}
		List<Explore> questions = userMapper.listquestion(user);
		for(Explore question:questions){
			question.setKind("FQ");
			all.add(question);
		}
		List<Dynstate> dynstates=userMapper.lists(user);
		for(Dynstate dynstate:dynstates){
			//System.out.println(dynstate);
			if(dynstate.getKind().equals("GH")){
				Explore as=userMapper.listrelatedTopic(dynstate);
				if(as!=null){
					all.add(as);
					System.out.println(as);
				}
			}
		}
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
