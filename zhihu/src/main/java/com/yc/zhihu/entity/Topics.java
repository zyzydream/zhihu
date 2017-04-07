package com.yc.zhihu.entity;

public class Topics {

	private String tid;
	private String ttopic;
	private String tstid;
	private String tpic;
	
	public String getTpic() {
		return tpic;
	}
	public void setTpic(String tpic) {
		this.tpic = tpic;
	}
	public String getTid() {
		return tid;
	}
	public void setTid(String tid) {
		this.tid = tid;
	}
	public String getTtopic() {
		return ttopic;
	}
	public void setTtopic(String ttopic) {
		this.ttopic = ttopic;
	}
	public String getTstid() {
		return tstid;
	}
	public void setTstid(String tstid) {
		this.tstid = tstid;
	}
	@Override
	public String toString() {
		return "\nTopics [tid=" + tid + ", ttopic=" + ttopic + ", tstid=" + tstid + ", tpic=" + tpic + "]";
	}
	
	
	
	
}
