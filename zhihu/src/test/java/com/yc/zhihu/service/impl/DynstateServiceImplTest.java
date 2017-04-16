package com.yc.zhihu.service.impl;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.yc.zhihu.entity.Favorite;
import com.yc.zhihu.entity.ListAllMy;
import com.yc.zhihu.entity.Question;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Total;
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
		List<Reply> r=dynstateService.answer2(users);
		System.out.println(r);
		assertNotNull(r);
	}
	
	@Test
	public void testQuestion() {
		Users users=new Users();
		users.setUids("1003");
		List<Question> r=dynstateService.myquestion(users);
		System.out.println(r);
		assertNotNull(r);
	}
	
	@Test
	public void testSum() {
		Users users=new Users();
		users.setUids("1003");
		List<Total> r=dynstateService.sumT(users);
		System.out.println(r);
		assertNotNull(r);
	}
	
	@Test
	public void testanswer2() {
		Users users=new Users();
		users.setUids("1003");
		List<ListAllMy> r=dynstateService.answer(users);
		System.out.println(r);
		assertNotNull(r);
	}
	
	@Test
	public void testpic() {
		Users users=new Users();
		users.setUids("1001");
		List<Users> r=dynstateService.showtop(users);
		System.out.println(r);
		assertNotNull(r);
	}
	
	@Test
	public void testessay() {
		Users users=new Users();
		users.setUids("1001");
		List<ListAllMy> r=dynstateService.showessays(users);
		System.out.println(r);
		assertNotNull(r);
	}
	
	@Test
	public void testscolumn() {
		Users users=new Users();
		users.setUids("1001");
		List<ListAllMy> r=dynstateService.showscolumns(users);
		System.out.println(r);
		assertNotNull(r);
	}
	
	
	

}
