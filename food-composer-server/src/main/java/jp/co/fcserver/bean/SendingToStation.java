package jp.co.fcserver.bean;

import lombok.Data;

@Data
public class SendingToStation implements SendingToEntityInf {

	private String placeCd;

	@Override
	public void setParameter(String... args) {
		this.setPlaceCd(args[0]);
	}

	@Override
	public String[] getParameters() {
		String[] parameters = {this.getPlaceCd()};
		return parameters;
	}
}
