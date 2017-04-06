package com.yc.zhihu.mapper;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.service.UserService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class UserMapperTest {

	@Autowired
    private UserMapper userMapper;

	
	@Test
	public void testListessay() {
		Users user=new Users();
		user.setUids("1001");
		List<Explore> dy=userMapper.listessay(user);
		System.out.println(dy);
		assertNotNull(dy);
	}
	
	@Test
	public void testListquestion(){
		Users user=new Users();
		user.setUids("1001");
		List<Explore> dy=userMapper.listquestion(user);
		System.out.println(dy);
		assertNotNull(dy);
	}

}
