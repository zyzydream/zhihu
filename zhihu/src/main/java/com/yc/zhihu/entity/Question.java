package com.yc.zhihu.entity;

import java.sql.Date;

public class Question {
	private String qid;
	private String qautid;
	private String qinid;
	private String qtitle;
	private String qdetail;
	private Date qtime;
	
	public Question() {
		// TODO Auto-generated constructor stub
	}

	public Question(String qid, String qautid, String qinid, String qtitle, String qdetail, Date qtime) {
		super();
		this.qid = qid;
		this.qautid = qautid;
		this.qinid = qinid;
		this.qtitle = qtitle;
		this.qdetail = qdetail;
		this.qtime = qtime;
	}

	public String getQid() {
		return qid;
	}

	public void setQid(String qid) {
		this.qid = qid;
	}

	public String getQautid() {
		return qautid;
	}

	public void setQautid(String qautid) {
		this.qautid = qautid;
	}

	public String getQinid() {
		return qinid;
	}

	public void setQinid(String qinid) {
		this.qinid = qinid;
	}

	public String getQtitle() {
		return qtitle;
	}

	public void setQtitle(String qtitle) {
		this.qtitle = qtitle;
	}

	public String getQdetail() {
		return qdetail;
	}

	public void setQdetail(String qdetail) {
		this.qdetail = qdetail;
	}

	public Date getQtime() {
		return qtime;
	}

	public void setQtime(Date qtime) {
		this.qtime = qtime;
	}

	@Override
	public String toString() {
		return "Question [qid=" + qid + ", qautid=" + qautid + ", qinid=" + qinid + ", qtitle=" + qtitle + ", qdetail="
				+ qdetail + ", qtime=" + qtime + "]";
	}
	
	
}
