package com.yc.zhihu.entity;

public class Infomation {
	 private String selfname;
	 private String aimname;
	 private String times;
	 private String info;
	
	public String getSelfname() {
		return selfname;
	}
	public void setSelfname(String selfname) {
		this.selfname = selfname;
	}
	public String getAimname() {
		return aimname;
	}
	public void setAimname(String aimname) {
		this.aimname = aimname;
	}
	public String getTimes() {
		return times;
	}
	public void setTimes(String times) {
		this.times = times;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	@Override
	public String toString() {
		return "Infomation [selfname=" + selfname + ", aimname=" + aimname + ", times=" + times + ", info=" + info
				+ "]";
	}
}
