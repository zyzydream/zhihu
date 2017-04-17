package com.yc.zhihu.entity;

import java.util.List;

public class ShowUser {

	private String uids;
	private String uname;
	private String nsign;
	private String counte;
	private String countr;
	private String counts;
	private List<Topics> t;
	private String upic;
	private String num;
	private String attention;
	

	public String getAttention() {
		return attention;
	}
	public void setAttention(String attention) {
		this.attention = attention;
	}
	public String getUids() {
		return uids;
	}
	public void setUids(String uids) {
		this.uids = uids;
	}
	public String getNum() {
		return num;
	}
	public void setNum(String num) {
		this.num = num;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getNsign() {
		return nsign;
	}
	public void setNsign(String nsign) {
		this.nsign = nsign;
	}
	public String getCounte() {
		return counte;
	}
	public void setCounte(String counte) {
		this.counte = counte;
	}
	public String getCountr() {
		return countr;
	}
	public void setCountr(String countr) {
		this.countr = countr;
	}
	public String getCounts() {
		return counts;
	}
	public void setCounts(String counts) {
		this.counts = counts;
	}
	public List<Topics> getT() {
		return t;
	}
	public void setT(List<Topics> t) {
		this.t = t;
	}
	public String getUpic() {
		return upic;
	}
	public void setUpic(String upic) {
		this.upic = upic;
	}
	
}
