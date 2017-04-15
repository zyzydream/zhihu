package com.yc.zhihu.web.handler;

import java.util.List;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Topics;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.service.ExploreService;
import com.yc.zhihu.service.UserService;
import com.yc.zhihu.util.EmailUtil;
import com.yc.zhihu.util.ServletUtil;

@Controller("userHandler")
@RequestMapping("/user")
public class UserHandler {

	@Autowired
	private UserService usersService;
	@Autowired
	private ExploreService exploreService;

	private String CODE;

	@RequestMapping(value="login" , method= RequestMethod.POST)
	public String Login(Users users , HttpServletRequest request , HttpServletResponse response){		//查询所有主话题
		System.out.println("取到user==》"+ users);
		users = usersService.listUsers(users);

		if(users== null){
			request.setAttribute(ServletUtil.ERROR_MASSAGE, "用户名或密码错误！！！");
			return "/back/login.jsp";	
		}else{
			request.getSession().setAttribute("username",users.getUname());
			request.getSession().setAttribute(ServletUtil.LOGIN_USER, users);
			if(usersService.findProfession(users).isEmpty() ){
				System.out.println(usersService.findProfession(users).size());
				return "redirect:/page/work.jsp";
			}else if(usersService.listTp(users).isEmpty()){
				System.out.println("进来l");
				return "redirect:/page/talk.jsp";
			}else{
				return "redirect:/page/homepage.jsp";	
			}
		}	
	}
	//用户注册
	@RequestMapping(value="register" , method= RequestMethod.POST)
	@ResponseBody
	public String register(Users users , HttpServletRequest request, HttpServletResponse response) {
		List<Users> us = usersService.listOneUsers(users);
		EmailUtil em = new EmailUtil();
		String a;
		if(us == null  || us.size()== 0){
			usersService.register(users);
			users =usersService.listUsers(users);
			request.getSession().setAttribute(ServletUtil.LOGIN_USER, users);
			try {
				CODE=em.setMail(users.getUemail());
			} catch (MessagingException e) {
				e.printStackTrace();
			}
			a="true";
			System.out.println(a);
			return a;
		}else {	
			if(users.getUemail() == null || users.getUemail() == ""){
				request.setAttribute(ServletUtil.ERROR_EMAIL, "邮箱已注册！！！");
			}else if(users.getUname() == null || users.getUname() == ""){
				request.setAttribute(ServletUtil.ERROR_NAME, "姓名已被注册！！！");
			}
			a="false";
			System.out.println(a);
			return a;
		}

	}

	//列出最新动态
	@RequestMapping(value="dynstate",method=RequestMethod.GET)
	@ResponseBody
	public List<Explore> listDynstate(HttpServletRequest request){
		//System.out.println("listDynstate ====> "+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		Users user= (Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER);
		exploreService.updateExplore();
		List<Explore> all =usersService.listExplore((Users)request.getSession().getAttribute(ServletUtil.LOGIN_USER));
		//用来查找有关话题的文章
		/*List<Explore> all =new ArrayList<Explore>();
		List<Explore> explores= usersService.listrelated(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	    for(Explore explore:explores){
	    	all.add(explore);
	    }
	    System.out.println("------------------------");
	    //用来查找有关话题的问题
	    List<Explore> questions=usersService.listrelatedQ(user);
	    for(Explore question:questions){
	    	all.add(question);
	    }
		 */
		//关注的对象的动态
		List<Explore> dynstate=usersService.listrelatedD(user);
		//如果关注对象没有动态或没有关注的对象，则返回关注的话题有关的文章或问题
		if(dynstate.size()>0){
			if(dynstate.size()<=3){
				dynstate.addAll((dynstate.size()), all);
			}else{
				int sum=0;
				for(int i=0;i<all.size();i++){
					sum+=i;
					if(dynstate.size()>3*(i+1)+sum){
					dynstate.add(3*(i+1)+sum, all.get(i));
					}
				}
			}
			List<Explore> e=usersService.yPraiseAndCollect(dynstate, request);
			//System.out.println(e);
			return e;
		}else{
			return usersService.yPraiseAndCollect(all, request);
		}
	}

	//列出新消息
	@RequestMapping(value="/new",method=RequestMethod.GET)
	@ResponseBody
	public List<Essay> listNews(){
		System.out.println("====> listNews");
		return usersService.listnews("10001");
	}

	//列出用户关注的话题
	@RequestMapping(value="/topics",method=RequestMethod.GET)
	@ResponseBody
	public List<Topics> listTopics(HttpServletRequest request){
		System.out.println("====> listTopics");
		return usersService.listTopics(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}



	@RequestMapping(value="/code",method=RequestMethod.POST)
	public String listCode(String ucode){
		return "redirect:/page/work.jsp";
	}



	//职业添加
	@RequestMapping(value="profession" , method= RequestMethod.POST)
	public String profession(Users users , HttpServletRequest request, HttpServletResponse response) {
		System.out.println("users  ==>"+users);
		usersService.listprofession(users);
		return "redirect:/page/talk.jsp";
	}

}
