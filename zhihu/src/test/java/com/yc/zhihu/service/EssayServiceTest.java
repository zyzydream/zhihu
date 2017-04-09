package com.yc.zhihu.service;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.zhihu.entity.Essay;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class EssayServiceTest {

	@Autowired
	private EssayService essayService;
	
	@Test
	public void testAdd() {
		fail("Not yet implemented");
	}

	@Test
	public void testListAll() {
		String eid = "1001";
		List<Essay> es = essayService.listAll(eid);
		System.out.println(es);
		assertNotNull(es);
	}

}
