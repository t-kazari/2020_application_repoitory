package jp.co.fcserver.bean;

import lombok.Data;

@Data
public class SendingToTaste implements SendingToEntityInf {

	private String genreCd;


	@Override
	public void setParameter(String... args) {
		this.setGenreCd(args[0]);
	}

	@Override
	public String[] getParameters() {
		String[] parameters = {this.getGenreCd()};
		return parameters;
	}



}
