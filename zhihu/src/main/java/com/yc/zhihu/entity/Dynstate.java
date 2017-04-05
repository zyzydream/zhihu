package com.yc.zhihu.entity;

public class Dynstate {

	private String selfid;
	private String aimid;
	private String kind;
	private String ids;
	private String cfid;
	private String times;
	public String getSelfid() {
		return selfid;
	}
	public void setSelfid(String selfid) {
		this.selfid = selfid;
	}
	public String getAimid() {
		return aimid;
	}
	public void setAimid(String aimid) {
		this.aimid = aimid;
	}
	public String getKind() {
		return kind;
	}
	public void setKind(String kind) {
		this.kind = kind;
	}
	public String getIds() {
		return ids;
	}
	public void setIds(String ids) {
		this.ids = ids;
	}
	public String getCfid() {
		return cfid;
	}
	public void setCfid(String cfid) {
		this.cfid = cfid;
	}
	public String getTimes() {
		return times;
	}
	public void setTimes(String times) {
		this.times = times;
	}
	@Override
	public String toString() {
		return "Dynstate [selfid=" + selfid + ", aimid=" + aimid + ", kind=" + kind + ", ids=" + ids + ", cfid=" + cfid
				+ ", times=" + times + "]";
	}
	
	
}
