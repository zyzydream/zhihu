package com.yc.zhihu.service;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.PaginationBean;
import com.yc.zhihu.entity.Strings;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class ExploreServiceTest {

    @Autowired
    private ExploreService exploreService;
	
    @Test
	public void testLists(){
    	PaginationBean<Explore> e=new PaginationBean<Explore>();
    	e.setCurrPage(1);
    	e.setPageSize(5);
    	PaginationBean<Explore> es=exploreService.lists("n", e);
    	System.out.println(es);
    	assertNotNull(es);
    }
    
	@Test
	public void testFind() {
		exploreService.find("aa","a");
	}

	@Test
	public void testFindUpdate() {
		List<Explore> es=exploreService.findUpdate();
		System.out.println(es);
		assertNotNull(es);
	}

	@Test
	public void testUpdate() {
		List<Explore> es=exploreService.findUpdate();
		exploreService.update(es.subList(0, 10));
	}

}
