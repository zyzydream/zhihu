package com.yc.zhihu.service;

import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.entity.Users;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class TopicServiceTest {
	
	@Autowired
	private TopicService topicService;
	
	@Test
	public void testListAll() {
		List<Topics> tp = topicService.listAll();
		System.out.println(tp);
		assertNotNull(tp);
	}
	

}
