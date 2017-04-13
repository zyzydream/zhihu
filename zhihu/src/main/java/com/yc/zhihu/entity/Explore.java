package com.yc.zhihu.entity;

public class Explore {

	private String ids;
	private String kind;
	private String title;
	private String content;
	private String tid;
	private String tname;
	private String usign;
	private String uids;
	private String author;
	private String times;
	private String checks;
	private String praise;
	private String collect;
	private String ypraise;
	private String ycollent;
	
	public String getYpraise() {
		return ypraise;
	}

	public void setYpraise(String ypraise) {
		this.ypraise = ypraise;
	}

	public String getYcollent() {
		return ycollent;
	}

	public void setYcollent(String ycollent) {
		this.ycollent = ycollent;
	}

	public Explore() {}
	

	public String getPraise() {
		return praise;
	}

	public void setPraise(String praise) {
		this.praise = praise;
	}

	public String getCollect() {
		return collect;
	}

	public void setCollect(String collect) {
		this.collect = collect;
	}

	public String getUsign() {
		return usign;
	}
	public void setUsign(String usign) {
		this.usign = usign;
	}
	public String getTimes() {
		return times;
	}
	public void setTimes(String times) {
		this.times = times;
	}
	public String getChecks() {
		return checks;
	}
	public void setChecks(String checks) {
		this.checks = checks;
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
	public String getIds() {
		return ids;
	}
	public void setIds(String ids) {
		this.ids = ids;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getUids() {
		return uids;
	}
	public void setUids(String uids) {
		this.uids = uids;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	@Override
	public String toString() {
		return "Explore [ids=" + ids + ", kind=" + kind + ", title=" + title + ", content=" + content + ", tid=" + tid
				+ ", tname=" + tname + ", usign=" + usign + ", uids=" + uids + ", author=" + author + ", times=" + times
				+ ", checks=" + checks + ", praise=" + praise + ", collect=" + collect + "]\n";
	}	
}
