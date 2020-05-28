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
@Table(name = "m_taste")
public class Taste implements Serializable {

	@Column(name = "id")
	private int id;

	@Column(name = "taste_cd")
	@Id
	private String tasteCd;

	@Column(name = "taste_nm")
	private String tasteNm;

	@Column(name = "genre_cd")
	private String genreCd;

	@Column(name = "created_at")
	private Timestamp createdAt;

	@Column(name = "updated_at")
	private Timestamp updatedAt;

	@Override
	public String toString() {

		StringBuilder sb = new StringBuilder();
		sb.append("id=").append(this.id)
				.append(", tasteCd=").append(this.tasteCd)
				.append(", tasteNm=").append(this.tasteNm)
				.append(", genreCd=").append(this.genreCd);
		return sb.toString();

	}

}
