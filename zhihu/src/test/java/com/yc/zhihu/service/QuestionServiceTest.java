package com.yc.zhihu.service;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.zhihu.entity.Question;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring.xml")
public class QuestionServiceTest {

	@Autowired
	private QuestionService questionServie;
	
	@Test
	public void testAddQusetion() {
		Question qu = new Question();
		qu.setQautid("10001");
		qu.setQdetail("asdsadsa");
		qu.setQtid("1002");
		qu.setQtitle("aaaaaa");
		boolean a = questionServie.addQusetion(qu);
		System.out.println(a);
		assertNotNull(a);
	}

}
