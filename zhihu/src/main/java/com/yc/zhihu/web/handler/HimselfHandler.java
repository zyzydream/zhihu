package com.yc.zhihu.web.handler;

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
import com.yc.zhihu.util.UploadFileUtil;
import com.yc.zhihu.util.UploadFileUtil.UploadFile;

@Controller("himselfHandler")
@RequestMapping("/him")
public class HimselfHandler {

	@Autowired
	private DynstateService dynstateService;
	
	
	@RequestMapping(value="/right",method=RequestMethod.GET)
	@ResponseBody
	public Users listright(String uids,Users user){
		user.setUids(uids);
		return dynstateService.total(user);
	}
	
	
	@RequestMapping(value="/m1",method=RequestMethod.GET)
	@ResponseBody
	public List<ListAllMy> Dynstatehuida(String uids,Users user,HttpServletRequest request){
		System.out.println(uids);
		user.setUids(uids);
		System.out.println("进来了 user==》"+user);
		Users users=new Users();
		users=dynstateService.total(user);
		request.getSession().setAttribute("myatten2", users.getMyatten());
		request.getSession().setAttribute("attenme2", users.getAttenme());
		request.getSession().setAttribute("myattentop2", users.getMyattentop());
		request.getSession().setAttribute("myattenzhuanlan2", users.getMyattenzhuanlan());
		request.getSession().setAttribute("myattenfav2", users.getMyattenfav());
		request.getSession().setAttribute("usign2", users.getUsign());
		request.getSession().setAttribute("username2", users.getUname());
		//request.getSession().setAttribute(ServletUtil.LOGIN_UIDS,users.getUids());
		
		
		List<ListAllMy> all=new ArrayList<ListAllMy>();
		List<ListAllMy> xs=dynstateService.listtopic(user);
		if(xs!=null){
		for(ListAllMy x:xs){
			all.add(x);
		}
		}
		List<ListAllMy> ys=dynstateService.answer(user);
		if(ys!=null){
		for(ListAllMy y:ys){
			all.add(y);
		}
		}
		
		List<ListAllMy> zs=dynstateService.showessays(user);
		if(zs!=null){
			for(ListAllMy z:zs){
				
				all.add(z);
			}
		}
		
		List<ListAllMy> ms=dynstateService.showscolumns(user);
		if(ms!=null){
			for(ListAllMy m:ms){
				all.add(m);
			}
		}

		return all;
	}
	
	@RequestMapping(value="/upic",method=RequestMethod.GET)
	@ResponseBody
	public Users Dynstatelistupic(String uids){
		Users users=new Users();
		users.setUids(uids);
		return dynstateService.listupic(users);
	}
	
	
	@RequestMapping(value="/m3",method=RequestMethod.GET)
	@ResponseBody
	public List<ListAllMy> Dynstatehuida3(String uids,Users user){
		user.setUids(uids);
		return dynstateService.answer(user);
	}
	
	@RequestMapping(value="/m4",method=RequestMethod.GET)
	@ResponseBody
	public List<ListAllMy> DynstateMy(HttpServletRequest request){
		System.out.println("进来了 ====>  users"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		return dynstateService.showessays(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	
	@RequestMapping(value="/m6",method=RequestMethod.GET)
	@ResponseBody
	public List<Question> DynstateMyQuestion(String uids,Users user){
		user.setUids(uids);
		return dynstateService.myquestion(uids);
	}
	
	@RequestMapping(value="/m7",method=RequestMethod.GET)
	@ResponseBody
	public List<Favorite> DynstateMyFavorite(String uids,Users user){
		user.setUids(uids);	
		return dynstateService.listFavorite(user);
	}
	
	@RequestMapping(value="/m8",method=RequestMethod.GET)
	@ResponseBody
	public Total DynstateMyAttention(String aimid){
		System.out.println("aimid==>"+aimid);
		return dynstateService.myatteninfo(aimid);
	}
	
	@RequestMapping(value="/m822",method=RequestMethod.GET)
	@ResponseBody
	public Total DynstateMyAttention2(String selfid){
		System.out.println("selfid==>"+selfid);
		return dynstateService.myatteninfo(selfid);
	}
	
	@RequestMapping(value="/m81",method=RequestMethod.GET)
	@ResponseBody
	public List<Users> DynstateMyAttentionq(String uids,Users user){
		user.setUids(uids);
		return dynstateService.alluses(user);
	}
	
	@RequestMapping(value="/m82",method=RequestMethod.GET)
	@ResponseBody
	public List<Users> DynstateAttentionme(String uids,Users user){
		user.setUids(uids);
		return dynstateService.allattenme(user);
	}
	
	@RequestMapping(value="/add",method=RequestMethod.GET)
	@ResponseBody
	public String add(HttpServletRequest request,Dynstate dynstate){
		String ids = request.getParameter("tid");
		System.out.println("进来了 ====>  users"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		String selfid = ((Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids();
		dynstate.setIds(ids);
		dynstate.setSelfid(selfid);
		if(dynstateService.AddGH(dynstate)>0){
			return "true";
		}else{
			return "false";
		}
		
	}
	
	@RequestMapping(value="/a1",method=RequestMethod.GET)
	@ResponseBody
	public List<Total> SUMTOTAL(String uids){
		Users users=new Users();
		users.setUids(uids);
		return dynstateService.sumT(users);
	}
	
	@RequestMapping(value="/showtoppic",method=RequestMethod.GET)
	@ResponseBody
	public List<Users> show(String uids){	
		Users users=new Users();
		users.setUids(uids);
		return dynstateService.showtop(users);
	}
	
	@RequestMapping(value="upload")
	@ResponseBody
	public boolean modify(@RequestParam("picData") MultipartFile picData,Users user,HttpServletRequest request){
		if(picData!= null && !picData.isEmpty()){ //判断是否有文件上传
			UploadFile uploadFile=null;
			try {
				UploadFileUtil uf=new UploadFileUtil();
				uploadFile=uf.uploadFile(request, picData, null);
				user.setToppic(uploadFile.getNewFileUrl());
				System.out.println(request.getSession().getAttribute(ServletUtil.LOGIN_UIDS).toString());
				user.setUids(request.getSession().getAttribute(ServletUtil.LOGIN_UIDS).toString());
			} catch (Exception e) {;
				e.printStackTrace();
			}
		}
		System.out.println("users==>"+user);
		return  dynstateService.updatetoppics(user); //异步响应数据	
	}
	
	@RequestMapping(value="upload2")
	@ResponseBody
	public boolean modify2(@RequestParam("picData") MultipartFile picData,Users user,HttpServletRequest request){
		if(picData!= null && !picData.isEmpty()){ //判断是否有文件上传
			UploadFile uploadFile=null;
			try {
				UploadFileUtil uf=new UploadFileUtil();
				uploadFile=uf.uploadFile(request, picData, null);
				user.setUpic(uploadFile.getNewFileUrl());
				System.out.println("upload2  user==>"+request.getSession().getAttribute(ServletUtil.LOGIN_UIDS).toString());
				user.setUids(request.getSession().getAttribute(ServletUtil.LOGIN_UIDS).toString());
			} catch (Exception e) {;
				e.printStackTrace();
			}
		}
		System.out.println("users==>"+user);
		return  dynstateService.updateupic(user); //异步响应数据	
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
	    System.out.println(dynstate);
		return dynstateService.collect(dynstate);
	}
	
	@RequestMapping(value="/delpraise",method=RequestMethod.GET)
	@ResponseBody
	public int  delpraise(Dynstate dynstate,HttpServletRequest request){
		dynstate.setSelfid(((Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids());
		return dynstateService.delpraise(dynstate);
	}
	
	@RequestMapping(value="/delcollect",method=RequestMethod.GET)
	@ResponseBody
	public int  delcollect(Dynstate dynstate,HttpServletRequest request){
		dynstate.setSelfid(((Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids());
		return dynstateService.delcollect(dynstate);
	}
	
	
	@RequestMapping(value="/createf",method=RequestMethod.POST)
	@ResponseBody
	public int  favinfo(Favorite fav,HttpServletRequest request){
		String fname=request.getParameter("fname");
		System.out.println("进来了 fname==>"+fname);
		Users users1=(Users) request.getSession().getAttribute(ServletUtil.LOGIN_USER);
		fav.setFcreid(users1.getUids());
		System.out.println("进来了 fav==>"+fav);
		return dynstateService.favoriteinfo(fav);
	}
}
