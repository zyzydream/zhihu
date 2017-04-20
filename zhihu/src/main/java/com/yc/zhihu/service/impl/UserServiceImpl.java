package com.yc.zhihu.service.impl;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.ShowUser;
import com.yc.zhihu.entity.Strings;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.mapper.ExploreMapper;
import com.yc.zhihu.mapper.UserMapper;
import com.yc.zhihu.service.UserService;
import com.yc.zhihu.util.ServletUtil;

@Service("userService")
public class UserServiceImpl implements UserService{

	@Autowired
	private UserMapper userMapper;
	@Autowired
	private ExploreMapper exploreMapper;

	//列出最新动态   查询关注用户的话题的文章  所有 与点赞无关
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
		if(user!=null){
			//System.out.println("user");
			List<Explore> essays = userMapper.listessay(user);
		    for(Explore essay:essays){
				essay.setKind("DW");
				essay.setPraise(userMapper.statisticsPraise(essay));
				essay.setKind("SW");
				essay.setCollect(userMapper.statisticsCollect(essay));
				essay.setKind("FW");
				all.add(essay);
			}
			
			List<Explore> questions = userMapper.listquestion(user);
			for(Explore question:questions){
				question.setKind("DQ");
				question.setPraise(userMapper.statisticsPraise(question));
				question.setKind("SQ");
				question.setCollect(userMapper.statisticsCollect(question));
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
						//System.out.println(as);
					}
				}
			}
		}else{
			//System.out.println("null");
			Strings s=new Strings();
			all=exploreMapper.findAll(new Strings("%","%"));
			for(Explore explore:all){
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

	@Override
	public List<Users> listOneUsers(Users users) {
		return userMapper.findNewUsers(users);
	}

	@Override
	public boolean listprofession(Users users) {
		return userMapper.AddUsersprofession(users);
	}

	@Override
	public List<Explore> listExplore(Users user) {
		// TODO Auto-generated method stub
		return  userMapper.listExplore(user);
	}
	//判断该动态用户是否已经点赞
	@Override
	public List<Explore> yPraiseAndCollect(List<Explore> explores,HttpServletRequest request){
		List<Explore> news=new ArrayList<Explore>();
		for(Explore explore:explores){
			Dynstate dynstate=new Dynstate();
			dynstate.setSelfid(((Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids());
			String kind =explore.getKind();
			if(!"GH".equals(kind)){
				if(kind=="FW"){
					dynstate.setKind("DW");
				}else if("W".equals(kind)){
					dynstate.setKind("DW");
				}else if("Q".equals(kind)){
					dynstate.setKind("DH");
				}else if(kind=="FQ"){
					dynstate.setKind("DQ");
				}
				dynstate.setIds(explore.getIds());
				if(userMapper.ypraise(dynstate)!=null){
					explore.setYpraise("y");		
				}else{
					explore.setYpraise("n");
				}
				if(kind=="FW"){
					dynstate.setKind("SW");
				}else if("W".equals(kind)){
					dynstate.setKind("SW");
				}else if("Q".equals(kind)){
					dynstate.setKind("SH");
				}else if(kind=="FQ"){
					dynstate.setKind("SQ");
				}
				if(userMapper.ycollect(dynstate)!=null){
					explore.setYcollent("y");		
				}else{
					explore.setYcollent("n");
				}
			}
			news.add(explore);
		}
		return news;
	}
	@Override
	public List<Users> listTp(Users users) {
		return userMapper.findTopic(users);
	}

	@Override
	public List<Users> findProfession(Users users) {
		return userMapper.findUprf(users);		//查询职业是否为空，如果为空，则跳入填写职业的页面
	}

	@Override
	public ShowUser showUser(Users user) {
		 Users u=userMapper.fUsers(user);
		 user.setUids(u.getUids());
		 ShowUser users=userMapper.showUser(user);
		 users.setNum(user.getNum());
		 users.setT(userMapper.listTopics(user));
		 users.setNsign(u.getUsign());
		 users.setUpic(u.getUpic());
		 users.setUname(u.getUname());
		 return users;
	}

	@Override
	public ShowUser attentionUser(Users user) {
		//return userMapper.attentionUser(user);
		return null;
	}

	@Override
	public Users list(Users user) {
		return userMapper.fUsers(user);
	}
}
