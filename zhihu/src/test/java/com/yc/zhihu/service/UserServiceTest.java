package com.yc.zhihu.service;

import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
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
		List<Explore> dy=userService.listrelated(user);
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
	

	@Test
	public void testListrelatedD(){
		Users user=new Users();
		user.setUids("1002");
		List<Explore> dy=userService.listrelatedD(user);
		System.out.println(dy);
		assertNotNull(dy);
	}
	
	@Test
	public void testListprofession(){
//		Users user=new Users();
//		user.setUname("wanghaoen");
//		user.setUprofession("学生");
//		boolean a = userService.listprofession(user);
//		System.out.println(a);
//		assertNotNull(a);
		List<Explore> e=userService.listrelatedD(null);
		System.out.println(e);
		assertNotNull(e);
	}

	
	@Test
	public void testList(){
		Users user = new Users();
		user.setUname("efaeljxq");
		user =userService.list(user);
		System.out.println(user);
		assertNotNull(user);
	}

}
