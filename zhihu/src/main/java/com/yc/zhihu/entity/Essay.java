package com.yc.zhihu.entity;

import java.util.List;

public class Essay {

	 private String eid;
	 private String eautid;
	 private String econtent;
	 private String etime;
	 private String etitle;
	 private String escid;
	 private String etid;
	 private String ttopic;
	 private String uname;
	 private String usign;
	 private String tpic;
	 private List<Users> users;
	 public Essay() {
		// TODO Auto-generated constructor stub
	}
	 
	public Essay(String eid, String eautid, String econtent, String etime, String etitle, String escid, String etid,
			String ttopic, String uname, String usign, List<Users> users) {
		super();
		this.eid = eid;
		this.eautid = eautid;
		this.econtent = econtent;
		this.etime = etime;
		this.etitle = etitle;
		this.escid = escid;
		this.etid = etid;
		this.ttopic = ttopic;
		this.uname = uname;
		this.usign = usign;
		this.users = users;
	}

	public List<Users> getUsers() {
		return users;
	}
	public void setUsers(List<Users> users) {
		this.users = users;
	}
	public String getTtopic() {
		return ttopic;
	}
	public void setTtopic(String ttopic) {
		this.ttopic = ttopic;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getUsign() {
		return usign;
	}
	public void setUsign(String usign) {
		this.usign = usign;
	}
	public String getEid() {
		return eid;
	}
	public void setEid(String eid) {
		this.eid = eid;
	}
	public String getEautid() {
		return eautid;
	}
	public void setEautid(String eautid) {
		this.eautid = eautid;
	}
	public String getEcontent() {
		return econtent;
	}
	public void setEcontent(String econtent) {
		this.econtent = econtent;
	}
	public String getEtime() {
		return etime;
	}
	public void setEtime(String etime) {
		this.etime = etime;
	}
	public String getEtitle() {
		return etitle;
	}
	public void setEtitle(String etitle) {
		this.etitle = etitle;
	}
	public String getEscid() {
		return escid;
	}
	public void setEscid(String escid) {
		this.escid = escid;
	}
	public String getEtid() {
		return etid;
	}
	public void setEtid(String etid) {
		this.etid = etid;
	}
	
	

	public String getTpic() {
		return tpic;
	}

	public void setTpic(String tpic) {
		this.tpic = tpic;
	}

	@Override
	public String toString() {
		return "\nEssay [eid=" + eid + ", eautid=" + eautid + ", econtent=" + econtent + ", etime=" + etime + ", etitle="
				+ etitle + ", escid=" + escid + ", etid=" + etid + ", ttopic=" + ttopic + ", uname=" + uname
				+ ", usign=" + usign + ", tpic=" + tpic + ", users=" + users + "]";
	}

	
}
