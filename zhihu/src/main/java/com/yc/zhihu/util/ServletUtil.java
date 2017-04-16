package com.yc.zhihu.util;

import java.io.File;
import java.util.List;

import com.yc.zhihu.entity.Users;


public class ServletUtil {

	public static final String USERINFO="users";  //所有用户信息
	public static final String LOGIN_USER="LoginUser";  //登录目标用户
	public static final String USER_LIST="userList";  //当前登录用户
	public static final String ERROR_MASSAGE = "errorMsg";
	public static final String ERROR_EMAIL = "errorEmail";
	public static final String ERROR_NAME = "errorName";
	public static final String ERROR_PASSWORD = "errorPassword";
	public static String UPLOAD_DIR=null;
	public static String DEPLOY_NAME=null;
	public static List<Users> alluser;
	public static final String LOGIN_UPLOAD_DIR="/upload/";
	public static final String[] favname={};
	public static final String[] favsum={};
	
	public static File getUploadFile(String fileName){
		File file=new File(UPLOAD_DIR,fileName);  //上传文件
		if(!file.getParentFile().exists()){
			file.getParentFile().mkdirs();
		}
		return file;
	}

}
