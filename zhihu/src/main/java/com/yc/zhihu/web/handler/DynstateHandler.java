package com.yc.zhihu.web.handler;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Essay;
import com.yc.zhihu.entity.Explore;
import com.yc.zhihu.entity.Favorite;
import com.yc.zhihu.entity.ListAllMy;
import com.yc.zhihu.entity.PaginationBean;
import com.yc.zhihu.entity.Question;
import com.yc.zhihu.entity.Reply;
import com.yc.zhihu.entity.Total;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.service.DynstateService;
import com.yc.zhihu.util.ServletUtil;

@Controller("dynstateHandler")
@RequestMapping("/dynstate")
public class DynstateHandler {

	@Autowired
	private DynstateService dynstateService;
	
	@RequestMapping(value="/all",method=RequestMethod.GET)
	@ResponseBody
	public PaginationBean<Dynstate> list(PaginationBean<Explore> e){
//		System.out.println(sgin);
//		PaginationBean<Explore> e=new PaginationBean<Explore>();
//		e.setCurrPage(Integer.valueOf(currPage));
//		e.setPageSize(Integer.valueOf(pageSize));
//		e.setSgin(sgin);
		return dynstateService.list(e);
	}
	
	
	@RequestMapping(value="/m1",method=RequestMethod.GET)
	@ResponseBody
	public List<ListAllMy> Dynstatehuida(HttpServletRequest request){
		Users users=new Users();
		users=dynstateService.total(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
		request.getSession().setAttribute("myatten", users.getMyatten());
		request.getSession().setAttribute("attenme", users.getAttenme());
		request.getSession().setAttribute("myattentop", users.getMyattentop());
		request.getSession().setAttribute("myattenzhuanlan", users.getMyattenzhuanlan());
		request.getSession().setAttribute("myattenfav", users.getMyattenfav());
		System.out.println("进来了 ====>  users"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		
		List<ListAllMy> all=new ArrayList<ListAllMy>();
		List<ListAllMy> xs=dynstateService.listtopic(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
		if(xs!=null){
		for(ListAllMy x:xs){
			all.add(x);
		}
		}
		List<ListAllMy> ys=dynstateService.answer(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
		if(ys!=null){
		for(ListAllMy y:ys){
			all.add(y);
		}
		}
		
		List<ListAllMy> zs=dynstateService.showessays(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
		if(zs!=null){
			for(ListAllMy z:zs){
				all.add(z);
			}
		}
		
		List<ListAllMy> ms=dynstateService.showscolumns(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
		if(ms!=null){
			for(ListAllMy m:ms){
				all.add(m);
			}
		}

		return all;
	}
	
	@RequestMapping(value="/m3",method=RequestMethod.GET)
	@ResponseBody
	public List<Reply> Dynstatehuida3(HttpServletRequest request){
		System.out.println("进来了 ====>  users"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		return dynstateService.answer2(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	
	@RequestMapping(value="/m4",method=RequestMethod.GET)
	@ResponseBody
	public List<Essay> DynstateMy(HttpServletRequest request){
		System.out.println("进来了 ====>  users"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		return dynstateService.myessay(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	
	@RequestMapping(value="/m6",method=RequestMethod.GET)
	@ResponseBody
	public List<Question> DynstateMyQuestion(HttpServletRequest request){
		System.out.println("进来了 ====>  question"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		return dynstateService.myquestion(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	
	@RequestMapping(value="/m7",method=RequestMethod.GET)
	@ResponseBody
	public List<Favorite> DynstateMyFavorite(HttpServletRequest request){
		System.out.println("进来了 ====>  users"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		return dynstateService.listFavorite(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	
	@RequestMapping(value="/m8",method=RequestMethod.GET)
	@ResponseBody
	public List<Users> DynstateMyAttention(HttpServletRequest request){
		System.out.println("进来了 ====>  users"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		return dynstateService.listAttention(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	

	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String add(HttpServletRequest request,Dynstate dynstate){
		String ids = request.getParameter("tid");
		System.out.println("进来了 ====>  users"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		String selfid = ((Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids();
		dynstate.setIds(ids);
		dynstate.setSelfid(selfid);
		dynstateService.AddGH(dynstate);
		return "redirect:/page/homepage.jsp";
	}
	
	@RequestMapping(value="/a1",method=RequestMethod.GET)
	@ResponseBody
	public List<Total> SUMTOTAL(HttpServletRequest request){
		System.out.println("进来了 ====>  users"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		return dynstateService.sumT(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	
	@RequestMapping(value="/showtoppic",method=RequestMethod.GET)
	@ResponseBody
	public List<Users> show(HttpServletRequest request){	
		
		return dynstateService.showtop(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	
	@RequestMapping(value="upload")
	@ResponseBody
	public boolean modify(@RequestParam("picData") MultipartFile picData,Users user){
		String picPath=null;
		if(picData!= null && !picData.isEmpty()){ //判断是否有文件上传
			try {
				picData.transferTo(ServletUtil.getUploadFile(picData.getOriginalFilename()));
				picPath=ServletUtil.LOGIN_UPLOAD_DIR+picData.getOriginalFilename();
			} catch (IllegalStateException | IOException e) {
				e.printStackTrace();
			}
		}
		
		user.setToppic(picPath);
		
		System.out.println("上传图片 ==》user"+ user);
		System.out.println("modify: user ==>"+user);
		
		return  dynstateService.updatetoppics(user); //异步响应数据
		
	}
	
	@RequestMapping(value="/praise",method=RequestMethod.GET)
	@ResponseBody
	public int praise(Dynstate dynstate,HttpServletRequest request){
		dynstate.setSelfid(((Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids());
		return dynstateService.praise(dynstate);
	}
	
	@RequestMapping(value="/collect",method=RequestMethod.GET)
	@ResponseBody
	public int collect(Dynstate dynstate,HttpServletRequest request){
		dynstate.setSelfid(((Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids());
	    return dynstateService.collect(dynstate);
	}
	
}
