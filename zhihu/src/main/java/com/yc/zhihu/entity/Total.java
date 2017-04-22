package com.yc.zhihu.entity;

public class Total {
	private Integer answer;
	private Integer mine;
	private Integer question;
	private Integer fav;
	private Integer myattenaw;
	private Integer myatteness;
	private Integer myattenpeos;
	private String uname;
	private String usign;
	private String upic;
	private String uids;
	
	public Total() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	public Total(Integer answer, Integer mine, Integer question, Integer fav, Integer myattenaw, Integer myatteness,
			Integer myattenpeos, String uname, String usign, String upic, String uids) {
		super();
		this.answer = answer;
		this.mine = mine;
		this.question = question;
		this.fav = fav;
		this.myattenaw = myattenaw;
		this.myatteness = myatteness;
		this.myattenpeos = myattenpeos;
		this.uname = uname;
		this.usign = usign;
		this.upic = upic;
		this.uids = uids;
	}



	public String getUids() {
		return uids;
	}



	public void setUids(String uids) {
		this.uids = uids;
	}



	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getUsign() {
		return usign;
	}

	public void setUsign(String usign) {
		this.usign = usign;
	}

	public String getUpic() {
		return upic;
	}

	public void setUpic(String upic) {
		this.upic = upic;
	}

	public Integer getMyattenaw() {
		return myattenaw;
	}



	public void setMyattenaw(Integer myattenaw) {
		this.myattenaw = myattenaw;
	}



	public Integer getMyatteness() {
		return myatteness;
	}



	public void setMyatteness(Integer myatteness) {
		this.myatteness = myatteness;
	}



	public Integer getMyattenpeos() {
		return myattenpeos;
	}



	public void setMyattenpeos(Integer myattenpeos) {
		this.myattenpeos = myattenpeos;
	}



	public Integer getAnswer() {
		return answer;
	}

	public void setAnswer(Integer answer) {
		this.answer = answer;
	}

	public Integer getMine() {
		return mine;
	}

	public void setMine(Integer mine) {
		this.mine = mine;
	}

	public Integer getQuestion() {
		return question;
	}

	public void setQuestion(Integer question) {
		this.question = question;
	}

	public Integer getFav() {
		return fav;
	}

	public void setFav(Integer fav) {
		this.fav = fav;
	}



	@Override
	public String toString() {
		return "Total [answer=" + answer + ", mine=" + mine + ", question=" + question + ", fav=" + fav + ", myattenaw="
				+ myattenaw + ", myatteness=" + myatteness + ", myattenpeos=" + myattenpeos + ", uname=" + uname
				+ ", usign=" + usign + ", upic=" + upic + ", uids=" + uids + "]";
	}

	

	
	
}
