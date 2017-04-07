package com.yc.zhihu.service;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.util.ServletUtil;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class DynstateServiceTest {

	@Autowired
	private DynstateService dynstateService;
	
	@Test
	public void testAddGH() {
		Dynstate dy = new Dynstate();
		dy.setIds("10001");
		dy.setSelfid("10000");
		boolean c = dynstateService.AddGH(dy);
		System.out.println(c);
		assertNotNull(c);
	}
	
	
}
