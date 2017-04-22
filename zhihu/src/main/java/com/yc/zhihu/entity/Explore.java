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
	//点赞数
	private String praise;
	//收藏数
	private String collect;
	//当前登录用户是否点赞或关注
	private String ypraise;
	//当前登录用户是否收藏
	private String ycollent;
	private String count;
	
	public String getCount() {
		return count;
	}

	public void setCount(String count) {
		this.count = count;
	}

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
				+ ", checks=" + checks + ", praise=" + praise + ", collect=" + collect + ", ypraise=" + ypraise
				+ ", ycollent=" + ycollent + ", count=" + count + "]";
	}	
}
