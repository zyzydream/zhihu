package com.yc.zhihu.service.impl;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Infomation;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.mapper.InfomationMapper;
import com.yc.zhihu.service.InfomationService;

@Service("infomationService")
public class InfomationServiceImpl implements InfomationService {

	@Autowired
	private InfomationMapper infomationMapper;
	
	@Override
	public int send(Infomation info) {
		return infomationMapper.send(info);
	}

	@Override
	public List<Infomation> find(Infomation infos) {
		return infomationMapper.find(infos);
	}

	@Override
	public List<Infomation> list(Users users) {
		List<Infomation> infos=infomationMapper.list(users);
		int length=infos.size();
		DateFormat df=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Infomation [] t=new Infomation[length];
		for(int i=0;i<length;i++){
			t[i]=infos.get(i);
		}
		for(int i=0;i<length;i++){
			for(int j=i;j<length;j++){
				try {
					Date d1=df.parse(t[i].getTimes());
					Date d2=df.parse(t[j].getTimes());
					if(d1.getTime()<d2.getTime()){
						Infomation tt=new Infomation();
						tt=t[i];
						t[i]=t[j];
						t[j]=tt;
					}
				} catch (ParseException e) {
					e.printStackTrace();
				}
			}
		}
		infos.clear();
		for(int i=1;i<=length;i++){
			infos.add(t[i-1]);
		}
		return infos;
	}
}
