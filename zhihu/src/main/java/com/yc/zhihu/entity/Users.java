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
	private String upic;
	private String myatten;
	private String attenme;
	private String myattentop;
	private String myattenzhuanlan;
	private String myattenfav;
	private String toppic;
	public Users() {
		// TODO Auto-generated constructor stub
	}

	
	
	public Users(String uids, String upassword, String uname, String uemail, String usign, String uprofession,
			String ansum, String essum, String attsum, String upic, String myatten, String attenme, String myattentop,
			String myattenzhuanlan, String myattenfav, String toppic) {
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
		this.upic = upic;
		this.myatten = myatten;
		this.attenme = attenme;
		this.myattentop = myattentop;
		this.myattenzhuanlan = myattenzhuanlan;
		this.myattenfav = myattenfav;
		this.toppic = toppic;
	}



	public String getToppic() {
		return toppic;
	}

	public void setToppic(String toppic) {
		this.toppic = toppic;
	}

	public String getMyattentop() {
		return myattentop;
	}

	public void setMyattentop(String myattentop) {
		this.myattentop = myattentop;
	}

	public String getMyattenzhuanlan() {
		return myattenzhuanlan;
	}

	public void setMyattenzhuanlan(String myattenzhuanlan) {
		this.myattenzhuanlan = myattenzhuanlan;
	}

	public String getMyattenfav() {
		return myattenfav;
	}

	public void setMyattenfav(String myattenfav) {
		this.myattenfav = myattenfav;
	}

	public String getMyatten() {
		return myatten;
	}





	public void setMyatten(String myatten) {
		this.myatten = myatten;
	}





	public String getAttenme() {
		return attenme;
	}





	public void setAttenme(String attenme) {
		this.attenme = attenme;
	}





	public String getUpic() {
		return upic;
	}





	public void setUpic(String upic) {
		this.upic = upic;
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
		return "Users [uids=" + uids + ", upassword=" + upassword + ", uname=" + uname + ", uemail=" + uemail
				+ ", usign=" + usign + ", uprofession=" + uprofession + ", ansum=" + ansum + ", essum=" + essum
				+ ", attsum=" + attsum + ", upic=" + upic + ", myatten=" + myatten + ", attenme=" + attenme
				+ ", myattentop=" + myattentop + ", myattenzhuanlan=" + myattenzhuanlan + ", myattenfav=" + myattenfav
				+ ", toppic=" + toppic + "]";
	}
	
}
