package com.yc.zhihu.service.impl;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.service.DynstateService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class DynstateServiceImplTest {
	
	@Autowired
	private DynstateService dynstateService;

	@Test
	public void testAnswer() {
		Users users=new Users();
		users.setUids("1003");
		Reply r=dynstateService.answer(users);
		System.out.println(r);
		assertNotNull(r);
	}

}
