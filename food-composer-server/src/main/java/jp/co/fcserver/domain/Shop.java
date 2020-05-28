package jp.co.fcserver.domain;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "m_shop")
public class Shop implements Serializable {

	@Column(name = "id")
	private int id;

	@Column(name = "shop_cd")
	@Id
	private String shopCd;

	@Column(name = "shop_nm")
	private String shopNm;

	@Column(name = "place_cd")
	private String placeCd;

	@Column(name = "station_cd")
	private String stationCd;

	@Column(name = "taste_cd")
	private String tasteCd;

	@Column(name = "url")
	private String url;

	@Column(name = "created_at")
	private Timestamp createdAt;

	@Column(name = "updated_at")
	private Timestamp updatedAt;

	@Override
	public String toString() {

		StringBuilder sb = new StringBuilder();
		sb.append("id=").append(this.id)
				.append(", shopCd=").append(this.shopCd)
				.append(", shopNm=").append(this.shopNm)
				.append(", placeCd=").append(this.placeCd)
				.append(", stationCd=").append(this.stationCd)
				.append(", tasteCd=").append(this.tasteCd)
				.append(", url=").append(this.url);

		return sb.toString();

	}

}
