package com.yc.zhihu.util;

import java.util.Properties;

import javax.mail.Address;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import com.yc.zhihu.entity.RandomCode;

public class EmailUtil {
	RandomCode randomCode=new RandomCode();
	//获取验证码
	public String setMail(String mail) throws MessagingException{
		String  myrandomcode=randomCode.showRandom();
		String  info="欢迎注册...";
		Properties props = new Properties(); //Properties 属性文件 
		// 开启debug调试  
		props.setProperty("mail.debug", "true");  
		// 设置邮件服务器主机名 
		props.setProperty("mail.host", "smtp.163.com");  
		// 发送服务器需要身份验证  
		props.setProperty("mail.smtp.auth", "true");  
		// 发送邮件协议名称 
		props.setProperty("mail.transport.protocol", "smtp");  

		// 设置环境信息 
		Session session = Session.getInstance(props);  

		// 创建邮件对象  
		Message msg = new MimeMessage(session);  
		msg.setSubject(info); 
		// 设置邮件内容  
		msg.setText(myrandomcode);  
		// 设置发件人  
		msg.setFrom(new InternetAddress("virtualwap@163.com"));  
		Transport transport = session.getTransport();  
		// 连接邮件服务器  librarysystem001
		transport.connect("virtualwap@163.com","abc123");
		// 发送邮件  

		transport.sendMessage(msg, new Address[] {new InternetAddress(mail)});
		// 关闭连接  
		transport.close(); 
		return myrandomcode;
	}
}