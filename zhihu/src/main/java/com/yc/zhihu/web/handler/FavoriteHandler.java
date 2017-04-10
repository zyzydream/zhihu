package com.yc.zhihu.web.handler;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yc.zhihu.entity.Dynstate;
import com.yc.zhihu.entity.Favorite;
import com.yc.zhihu.entity.PaginationBean;
import com.yc.zhihu.entity.Users;
import com.yc.zhihu.service.FavoriteService;
import com.yc.zhihu.util.ServletUtil;

@Controller("favoriteHandler")
@RequestMapping("/favorite")
public class FavoriteHandler {

	@Autowired
	private FavoriteService favoriteService;
	
	@RequestMapping(value="/all",method=RequestMethod.GET)
	@ResponseBody
	public List<Favorite> list(HttpServletRequest request){
		Favorite f=new Favorite();
		f.setFcreid(((Users)request.getSession().getAttribute(ServletUtil.LOGIN_USER)).getUids());
		return favoriteService.list(f);
	}
}
