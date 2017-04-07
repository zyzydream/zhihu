package com.yc.zhihu.web.handler;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.zhihu.entity.Explore;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class ExploreHandlerTest {

	@Autowired
	private ExploreHandler exploreHandler;
	
	@Test
	public void testUpdate() {
		List<Explore> es=exploreHandler.update();
		System.out.println(es);
		assertNotNull(es);
		
	}

}
