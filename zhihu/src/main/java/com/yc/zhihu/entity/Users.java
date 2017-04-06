package com.yc.zhihu.entity;

public class Users {

	 private String uids;
	 private String upassword;
	 private String uname;
	 private String uemail;
	 private String usign;
	 private String uprofession;
	 private String ansum;
	 private String essum;
	 private String attsum;
	 public Users() {
		// TODO Auto-generated constructor stub
	}
	 
	 
	public Users(String uids, String upassword, String uname, String uemail, String usign, String uprofession,
			String ansum, String essum, String attsum) {
		super();
		this.uids = uids;
		this.upassword = upassword;
		this.uname = uname;
		this.uemail = uemail;
		this.usign = usign;
		this.uprofession = uprofession;
		this.ansum = ansum;
		this.essum = essum;
		this.attsum = attsum;
	}


	public String getAnsum() {
		return ansum;
	}
	public void setAnsum(String ansum) {
		this.ansum = ansum;
	}
	public String getEssum() {
		return essum;
	}
	public void setEssum(String essum) {
		this.essum = essum;
	}
	public String getAttsum() {
		return attsum;
	}
	public void setAttsum(String attsum) {
		this.attsum = attsum;
	}
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
		return "\nUsers [uids=" + uids + ", upassword=" + upassword + ", uname=" + uname + ", uemail=" + uemail
				+ ", usign=" + usign + ", uprofession=" + uprofession + ", ansum=" + ansum + ", essum=" + essum
				+ ", attsum=" + attsum + "]";
	}
	
	
}
