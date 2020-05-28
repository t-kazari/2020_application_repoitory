package jp.co.fcserver.bean;

import lombok.Data;

@Data
public class SendingToPlace implements SendingToEntityInf {

	private String prefectureCd;

	@Override
	public void setParameter(String... args) {
		this.setPrefectureCd(args[0]);
	}

	@Override
	public String[] getParameters() {
		String[] parameters = {this.getPrefectureCd()};
		return parameters;
	}

}
