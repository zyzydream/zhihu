package com.yc.zhihu.service;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Reply;
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class ReplyServiceTest {

	@Autowired
	private ReplyService replyService;
	
	@Test
	public void testList() {
		Reply re = new Reply();
		re.setReqid("10001");
		List<Explore> res= replyService.list(re);
		System.out.println(res);
		assertNotNull(res);
	}

}
