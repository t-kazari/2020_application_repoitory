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
@Table(name = "m_place")
public class Place implements Serializable {

	@Column(name = "id")
	private int id;

	@Column(name = "place_cd")
	@Id
	private String placeCd;

	@Column(name = "place_nm")
	private String placeNm;

	@Column(name = "prefecture_cd")
	private String prefectureCd;

	@Column(name = "created_at")
	private Timestamp createdAt;

	@Column(name = "updated_at")
	private Timestamp updatedAt;

	@Override
	public String toString() {

		StringBuilder sb = new StringBuilder();
		sb.append("id=").append(this.id)
				.append(", placeCd=").append(this.placeCd)
				.append(", placeNm=").append(this.placeNm)
				.append(", prefectureCd=").append(this.prefectureCd);

		return sb.toString();

	}

}
