package com.yc.zhihu.entity;

public class Users {

	 private String uids;
	 private String upassword;
	 private String uname;
	 private String uemail;
	 private String usign;
	 private String uprofession;
	public String getUids() {
		return uids;
	}
	public void setUids(String uids) {
		this.uids = uids;
	}
	public String getUpassword() {
		return upassword;
	}
	public void setUpassword(String upassword) {
		this.upassword = upassword;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getUemail() {
		return uemail;
	}
	public void setUemail(String uemail) {
		this.uemail = uemail;
	}
	public String getUsign() {
		return usign;
	}
	public void setUsign(String usign) {
		this.usign = usign;
	}
	public String getUprofession() {
		return uprofession;
	}
	public void setUprofession(String uprofession) {
		this.uprofession = uprofession;
	}
	@Override
	public String toString() {
		return "Users [uids=" + uids + ", upassword=" + upassword + ", uname=" + uname + ", uemail=" + uemail + ", usign="
				+ usign + ", uprofession=" + uprofession + "]";
	}
	
	
}
