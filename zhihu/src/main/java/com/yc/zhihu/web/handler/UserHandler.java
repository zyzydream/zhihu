package com.yc.zhihu.web.handler;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Favorite;
import com.yc.zhihu.entity.ShowUser;
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
	public List<Explore> listDynstate(Explore explore,HttpServletRequest request){
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
		List<Explore> dynstate=usersService.listrelatedD(user,explore);
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
	public String listCode(String verification_code,HttpServletRequest request){
		System.out.println(CODE);
		System.out.println(verification_code);
		if(CODE.intern() == verification_code.intern()){
			return "redirect:/page/work.jsp";
		}else{
			request.setAttribute(ServletUtil.ERROR_MASSAGE, "验证码错误！！！");
			Users user = ((Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER));
			usersService.del(user);
			return "/back/register.jsp";
		}

	}


	//职业添加
	@RequestMapping(value="profession" , method= RequestMethod.POST)
	public String profession(Users users , HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException {
		System.out.println("users  ==>"+users);
		String uprofession=new String(users.getUprofession().getBytes("iso-8859-1"),"utf-8");
		users.setUprofession(uprofession);
		usersService.listprofession(users);
		return "redirect:/page/talk.jsp";
	}

	@RequestMapping(value="/showUser",method=RequestMethod.GET)
	@ResponseBody
	public ShowUser showUser(Users user,HttpServletRequest request) throws UnsupportedEncodingException{
		String uname=new String(user.getUname().getBytes("iso-8859-1"),"utf-8");
		user.setUname(uname);
		System.out.println("showUser====>"+user.toString());
		ShowUser users=usersService.showUser(user);
		Dynstate dynstate=new Dynstate();
		dynstate.setAimid(users.getUids());
		dynstate.setSelfid(((Users)request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids());
		users.setAttention(usersService.yattention(dynstate));
		return users;
	}

	//关注用户
	@RequestMapping(value="/attentionUser",method=RequestMethod.GET)
	@ResponseBody
	public ShowUser attentionUser(Users user,HttpServletRequest request) throws UnsupportedEncodingException{
		System.out.println("attentionUser====>"+user.toString());
		Dynstate dynstate =new Dynstate();
		dynstate.setSelfid(((Users)request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids());
		dynstate.setAimid(user.getUids());
		dynstate.setKind("GR");
		usersService.attentionUser(dynstate);
		return showUser(user,request);
	}
	//取消关注用户
	@RequestMapping(value="/delattentionUser",method=RequestMethod.GET)
	@ResponseBody
	public ShowUser delattentionUser(Users user,HttpServletRequest request) throws UnsupportedEncodingException{
		System.out.println("attentionUser====>"+user.toString());
		Dynstate dynstate =new Dynstate();
		dynstate.setSelfid(((Users)request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids());
		dynstate.setAimid(user.getUids());
		dynstate.setKind("GR");
		usersService.delattentionUser(dynstate);
		return showUser(user,request);
	}


	//创建收藏夹
	@RequestMapping(value="/newFav",method=RequestMethod.GET)
	@ResponseBody
	public int newFav(Favorite favorite,HttpServletRequest request) throws UnsupportedEncodingException{
		String selfname=new String(favorite.getFname().getBytes("iso-8859-1"),"utf-8");
		favorite.setFname(selfname);
		favorite.setFcreid(((Users)request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids());
		return usersService.newFav(favorite);
	}



	//关注用户
	@RequestMapping(value="/listuser",method=RequestMethod.POST)
	@ResponseBody
	public List<Users> listuser(Users user,HttpServletRequest request){
		user = (Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER);//?
		System.out.println(user);
		List<Users> a = new ArrayList<Users>() ;
		a.add(usersService.list(user));
		return a;
	}


	//关注话题
	@RequestMapping(value="/attentiontopics",method=RequestMethod.GET)
	@ResponseBody
	public int attentiontopics(Topics topics,HttpServletRequest request){
		Users user = (Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER);
		Dynstate dynstate =new Dynstate();
		dynstate.setSelfid(user.getUids());
		dynstate.setIds(topics.getTid());
		dynstate.setKind("GH");
		return usersService.attentiontopics(dynstate);
	}

	//关注话题
	@RequestMapping(value="/delattentiontopics",method=RequestMethod.GET)
	@ResponseBody
	public int delattentiontopics(Topics topics,HttpServletRequest request){
		Users user = (Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER);
		Dynstate dynstate =new Dynstate();
		dynstate.setSelfid(user.getUids());
		dynstate.setIds(topics.getTid());
		dynstate.setKind("GH");
		return usersService.delattentiontopics(dynstate);
	}

	//查询当前登录用户
	@RequestMapping(value="/list" , method= RequestMethod.POST)
	@ResponseBody
	public List<Users> list(Users users , HttpServletRequest request) {
		Users user = (Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER);
		List<Users> us=new ArrayList<Users>();
		us.add(user);
		return us;	
	}


	//查询当前登录用户
	@RequestMapping(value="/updataPS" , method= RequestMethod.GET)
	@ResponseBody
	public String updataPS(Users users , HttpServletRequest request) {
		
		System.out.println("users====>"+users);
		String uname = ((Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUname();
		users.setUname(uname);
		if(usersService.updata(users)>0){
			return "true";	
		}else{
			return "false";
		}
		
	}
	
}
