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
@Table(name = "m_prefecture")
public class Prefecture implements Serializable {

	@Column(name = "id")
	private int id;

	@Column(name = "prefecture_cd")
	@Id
	private String prefectureCd;

	@Column(name = "prefecture_nm")
	private String prefectureNm;

	@Column(name = "created_at")
	private Timestamp createdAt;

	@Column(name = "updated_at")
	private Timestamp updatedAt;

	@Override
	public String toString() {

		StringBuilder sb = new StringBuilder();
		sb.append("id=").append(this.id)
				.append(", prefectureCd=").append(this.prefectureCd)
				.append(", prefectureNm=").append(this.prefectureNm);

		return sb.toString();

	}


}
