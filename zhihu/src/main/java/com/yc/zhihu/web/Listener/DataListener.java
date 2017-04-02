package com.yc.zhihu.web.Listener;

import java.io.File;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import com.yc.zhihu.util.ServletUtil;


/**
 * Application Lifecycle Listener implementation class DataListener
 *
 */
@WebListener
public class DataListener implements ServletContextListener {

	/**
     * @see ServletContextListener#contextInitialized(ServletContextEvent)
     */
    public void contextInitialized(ServletContextEvent sce)  { 
    	String deployName=sce.getServletContext().getContextPath();
		// 初始化发布的工程发布名可以通过监听DataListener中（如下），也可以通过BaseServlet
    	ServletUtil.DEPLOY_NAME=deployName+"/";
        sce.getServletContext().setAttribute("NAME", ServletUtil.DEPLOY_NAME);
        System.out.println(sce.getServletContext().getAttribute("NAME"));

        ServletUtil.UPLOAD_DIR=sce.getServletContext().getRealPath("upload").replace(deployName.substring(1)+File.separator, ""); //文件上传目录
    }

	/**
     * @see ServletContextListener#contextDestroyed(ServletContextEvent)
     */
    public void contextDestroyed(ServletContextEvent arg0)  { 
         // TODO Auto-generated method stub
    }
	
}
