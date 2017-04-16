package com.yc.zhihu.entity;

public class Question {
	private String qid;
	private String qautid;
	private String qinid;
	private String qtitle;
	private String qdetail;
	private String qtid;
	private String qtime;
	private String sum;
	
	public Question() {
		// TODO Auto-generated constructor stub
	}
	






	public Question(String qid, String qautid, String qinid, String qtitle, String qdetail, String qtid, String qtime,
			String sum) {
		super();
		this.qid = qid;
		this.qautid = qautid;
		this.qinid = qinid;
		this.qtitle = qtitle;
		this.qdetail = qdetail;
		this.qtid = qtid;
		this.qtime = qtime;
		this.sum = sum;
	}







	public String getQtime() {
		return qtime;
	}



	public void setQtime(String qtime) {
		this.qtime = qtime;
	}



	public String getSum() {
		return sum;
	}



	public void setSum(String sum) {
		this.sum = sum;
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



	public String getQtid() {
		return qtid;
	}



	public void setQtid(String qtid) {
		this.qtid = qtid;
	}




	@Override
	public String toString() {
		return "\nQuestion [qid=" + qid + ", qautid=" + qautid + ", qinid=" + qinid + ", qtitle=" + qtitle + ", qdetail="
				+ qdetail + ", qtid=" + qtid + ", qtime=" + qtime + ", sum=" + sum +  "]";
	}



	

}
