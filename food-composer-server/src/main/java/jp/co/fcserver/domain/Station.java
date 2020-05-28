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
@Table(name = "m_station")
public class Station implements Serializable {

	@Column(name = "id")
	private int id;

	@Column(name = "station_cd")
	@Id
	private String stationCd;

	@Column(name = "station_nm")
	private String stationNm;

	@Column(name = "place_cd")
	private String placeCd;

	@Column(name = "created_at")
	private Timestamp createdAt;

	@Column(name = "updated_at")
	private Timestamp updatedAt;

	@Override
	public String toString() {

		StringBuilder sb = new StringBuilder();
		sb.append("id=").append(this.id)
				.append(", stationCd=").append(this.stationCd)
				.append(", stationNm=").append(this.stationNm)
				.append(", placeCd=").append(this.placeCd);

		return sb.toString();

	}

}
