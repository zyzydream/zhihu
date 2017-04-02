package com.yc.zhihu.service;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.entity.Users;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class UserServiceTest {

    @Autowired
    private UserService userService;
	
	@Test
	public void testListrelated() {
		Users user=new Users();
		user.setUids("1001");
		List<Essay> dy=userService.listrelated(user);
		System.out.println(dy);
		assertNotNull(dy);
	}
	
	@Test
	public void testlistTopics(){
		Users user=new Users();
		user.setUids("1001");
		List<Topics> dy=userService.listTopics(user);
		System.out.println(dy);
		assertNotNull(dy);
	}

}
