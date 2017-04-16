package com.yc.zhihu.entity;

public class Count {
	private Integer dz;
	private Integer sc;
	private Integer yl;
	private String kind;
	public Count() {
		// TODO Auto-generated constructor stub
	}
	
	public Count(Integer dz, Integer sc, Integer yl, String kind) {
		super();
		this.dz = dz;
		this.sc = sc;
		this.yl = yl;
		this.kind = kind;
	}

	public String getKind() {
		return kind;
	}
	public void setKind(String kind) {
		this.kind = kind;
	}
	public Integer getDz() {
		return dz;
	}
	public void setDz(Integer dz) {
		this.dz = dz;
	}
	public Integer getSc() {
		return sc;
	}
	public void setSc(Integer sc) {
		this.sc = sc;
	}
	public Integer getYl() {
		return yl;
	}
	public void setYl(Integer yl) {
		this.yl = yl;
	}

	@Override
	public String toString() {
		return "Count [dz=" + dz + ", sc=" + sc + ", yl=" + yl + ", kind=" + kind + "]";
	}
	
	
}
