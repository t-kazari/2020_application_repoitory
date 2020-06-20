package jp.co.fcserver.bean;

import lombok.Data;

/**
 * 一時店舗エンティティ
 * @author kinno
 *
 */
@Data
public class SendingToShop implements SendingToEntityInf {

	private String genreCd;

	private String tasteCd;

	private String prefectureCd;

	private String placeCd;

	@Override
	public void setParameter(String... args) {
		this.setGenreCd(args[0]);
		this.setTasteCd(args[1]);
		this.setPrefectureCd(args[2]);
		this.setPlaceCd(args[3]);
	}

	@Override
	public String[] getParameters() {
		String[] parameters = {this.getGenreCd(), this.getTasteCd(), this.getPrefectureCd(), this.getPlaceCd()};
		return parameters;
	}

}
