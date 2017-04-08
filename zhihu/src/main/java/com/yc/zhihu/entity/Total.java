package com.yc.zhihu.entity;

public class Total {
	private Integer answer;
	private Integer mine;
	private Integer question;
	private Integer fav;
	
	public Total() {
		// TODO Auto-generated constructor stub
	}

	public Total(Integer answer, Integer mine, Integer question, Integer fav) {
		super();
		this.answer = answer;
		this.mine = mine;
		this.question = question;
		this.fav = fav;
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
		return "\nTotal [answer=" + answer + ", mine=" + mine + ", question=" + question + ", fav=" + fav + "]";
	}
	
	
}
