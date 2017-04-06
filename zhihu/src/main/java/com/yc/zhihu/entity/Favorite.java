package com.yc.zhihu.entity;

public class Favorite {
	private String fid;
	private String fcreid;
	private String fname;
	private String ftime;
	private String sum;
	
	public Favorite() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	public Favorite(String fid, String fcreid, String fname, String ftime, String sum) {
		super();
		this.fid = fid;
		this.fcreid = fcreid;
		this.fname = fname;
		this.ftime = ftime;
		this.sum = sum;
	}



	public String getSum() {
		return sum;
	}
	public void setSum(String sum) {
		this.sum = sum;
	}
	public String getFid() {
		return fid;
	}
	public void setFid(String fid) {
		this.fid = fid;
	}
	public String getFcreid() {
		return fcreid;
	}
	public void setFcreid(String fcreid) {
		this.fcreid = fcreid;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getFtime() {
		return ftime;
	}
	public void setFtime(String ftime) {
		this.ftime = ftime;
	}



	@Override
	public String toString() {
		return "\nFavorite [fid=" + fid + ", fcreid=" + fcreid + ", fname=" + fname + ", ftime=" + ftime + ", sum=" + sum
				+ "]";
	}


	
	
	
}
