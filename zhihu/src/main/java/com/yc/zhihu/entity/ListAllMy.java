package com.yc.zhihu.entity;

public class ListAllMy {
	private String tid;
	private String tname;
	private String tpic;
	private String uname;
	private String content;
	private String times;
	private String kind;
	private String title;
	private String sign;
	
	public ListAllMy() {
		// TODO Auto-generated constructor stub
	}

	
	public ListAllMy(String tid, String tname, String tpic, String uname, String content, String times, String kind,
			String title, String sign) {
		super();
		this.tid = tid;
		this.tname = tname;
		this.tpic = tpic;
		this.uname = uname;
		this.content = content;
		this.times = times;
		this.kind = kind;
		this.title = title;
		this.sign = sign;
	}


	public String getSign() {
		return sign;
	}


	public void setSign(String sign) {
		this.sign = sign;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getKind() {
		return kind;
	}


	public void setKind(String kind) {
		this.kind = kind;
	}


	public String getTid() {
		return tid;
	}

	public void setTid(String tid) {
		this.tid = tid;
	}

	public String getTname() {
		return tname;
	}

	public void setTname(String tname) {
		this.tname = tname;
	}

	public String getTpic() {
		return tpic;
	}

	public void setTpic(String tpic) {
		this.tpic = tpic;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getTimes() {
		return times;
	}

	public void setTimes(String times) {
		this.times = times;
	}


	@Override
	public String toString() {
		return "ListAllMy [tid=" + tid + ", tname=" + tname + ", tpic=" + tpic + ", uname=" + uname + ", content="
				+ content + ", times=" + times + ", kind=" + kind + ", title=" + title + ", sign=" + sign + "]";
	}
	

	
	

}
