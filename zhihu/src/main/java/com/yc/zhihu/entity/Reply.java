package com.yc.zhihu.entity;

import java.util.List;

public class Reply {
	private String rid;
	private String reqid;
	private String rkind;
	private String rrid;
	private String remitid;
	private String rreceid;
	private String rcontent;
	private String rtime;
	private List<Users> users;
	private List<Question> question;
	
	

	public Reply() {
		// TODO Auto-generated constructor stub
	}
	
	


	public Reply(String rid, String reqid, String rkind, String rrid, String remitid, String rreceid, String rcontent,
			String rtime, List<Users> users, List<Question> question) {
		super();
		this.rid = rid;
		this.reqid = reqid;
		this.rkind = rkind;
		this.rrid = rrid;
		this.remitid = remitid;
		this.rreceid = rreceid;
		this.rcontent = rcontent;
		this.rtime = rtime;
		this.users = users;
		this.question = question;
	}

	



	public List<Users> getUsers() {
		return users;
	}




	public void setUsers(List<Users> users) {
		this.users = users;
	}




	public List<Question> getQuestion() {
		return question;
	}




	public void setQuestion(List<Question> question) {
		this.question = question;
	}




	public String getRid() {
		return rid;
	}

	public void setRid(String rid) {
		this.rid = rid;
	}

	public String getReqid() {
		return reqid;
	}

	public void setReqid(String reqid) {
		this.reqid = reqid;
	}

	public String getRkind() {
		return rkind;
	}

	public void setRkind(String rkind) {
		this.rkind = rkind;
	}

	public String getRrid() {
		return rrid;
	}

	public void setRrid(String rrid) {
		this.rrid = rrid;
	}

	public String getRemitid() {
		return remitid;
	}

	public void setRemitid(String remitid) {
		this.remitid = remitid;
	}

	public String getRreceid() {
		return rreceid;
	}

	public void setRreceid(String rreceid) {
		this.rreceid = rreceid;
	}

	public String getRcontent() {
		return rcontent;
	}

	public void setRcontent(String rcontent) {
		this.rcontent = rcontent;
	}

	public String getRtime() {
		return rtime;
	}

	public void setRtime(String rtime) {
		this.rtime = rtime;
	}




	@Override
	public String toString() {
		return "Reply [rid=" + rid + ", reqid=" + reqid + ", rkind=" + rkind + ", rrid=" + rrid + ", remitid=" + remitid
				+ ", rreceid=" + rreceid + ", rcontent=" + rcontent + ", rtime=" + rtime + ", users=" + users
				+ ", question=" + question + "]";
	}

	
	
}
