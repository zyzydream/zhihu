package com.yc.zhihu.entity;

public class Total {
	private Integer answer;
	private Integer mine;
	private Integer question;
	private Integer fav;
	private Integer myattenaw;
	private Integer myatteness;
	private Integer myattenpeos;
	
	public Total() {
		// TODO Auto-generated constructor stub
	}

	
	
	public Total(Integer answer, Integer mine, Integer question, Integer fav, Integer myattenaw, Integer myatteness,
			Integer myattenpeos) {
		super();
		this.answer = answer;
		this.mine = mine;
		this.question = question;
		this.fav = fav;
		this.myattenaw = myattenaw;
		this.myatteness = myatteness;
		this.myattenpeos = myattenpeos;
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
		return "\nTotal [answer=" + answer + ", mine=" + mine + ", question=" + question + ", fav=" + fav + ", myattenaw="
				+ myattenaw + ", myatteness=" + myatteness + ", myattenpeos=" + myattenpeos + "]";
	}

	
	
}
