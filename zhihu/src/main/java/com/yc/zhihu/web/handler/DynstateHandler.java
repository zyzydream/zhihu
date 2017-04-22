package com.yc.zhihu.web.handler;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
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
	
	@RequestMapping(value="/right",method=RequestMethod.GET)
	@ResponseBody
	public Users listright(HttpServletRequest request){

		return dynstateService.total(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
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
		request.getSession().setAttribute("usign", users.getUsign());
		request.getSession().setAttribute("upic", users.getUpic());
		request.getSession().setAttribute(ServletUtil.LOGIN_UIDS,users.getUids());
		
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
	
	@RequestMapping(value="/upic",method=RequestMethod.GET)
	@ResponseBody
	public Users Dynstatelistupic(HttpServletRequest request){
		System.out.println("upic进来了 ====>  users"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		return dynstateService.listupic(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	
	
	@RequestMapping(value="/m3",method=RequestMethod.GET)
	@ResponseBody
	public List<ListAllMy> Dynstatehuida3(HttpServletRequest request){
		System.out.println("进来了 ====>  users"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		return dynstateService.answer(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	
	@RequestMapping(value="/m4",method=RequestMethod.GET)
	@ResponseBody
	public List<ListAllMy> DynstateMy(HttpServletRequest request){
		System.out.println("进来了 ====>  users"+request.getSession().getAttribute(ServletUtil.LOGIN_USER).toString());
		return dynstateService.showessays(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
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
	public List<Users> DynstateMyAttentionq(HttpServletRequest request){
		return dynstateService.alluses(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
	}
	
	@RequestMapping(value="/m82",method=RequestMethod.GET)
	@ResponseBody
	public List<Users> DynstateAttentionme(HttpServletRequest request){
		return dynstateService.allattenme(request.getSession().getAttribute(ServletUtil.LOGIN_USER));
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
	
	@RequestMapping(value="/updateinfo",method= RequestMethod.POST)
	public String updateinfo(HttpServletRequest request,Users user) throws UnsupportedEncodingException{
		String usign=new String(user.getUsign().getBytes("iso-8859-1"),"utf-8");
		System.out.println("进来了  更新user ==》"+user);
		Users users=new Users();
		users.setUids(request.getSession().getAttribute(ServletUtil.LOGIN_UIDS).toString());
		users.setUsign(usign);
		int n=dynstateService.updateinfo(users);
		if(n>0){
			return "redirect:/page/myself.jsp";
		}else{
			return "/page/design.jsp";
		}
	}
}
