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
@Table(name = "m_genre")
public class Genre implements Serializable {

	@Column(name = "id")
	private int id;

	@Column(name = "genre_cd")
	@Id
	private String genreCd;

	@Column(name = "genre_nm")
	private String genreNm;

	@Column(name = "created_at")
	private Timestamp createdAt;

	@Column(name = "updated_at")
	private Timestamp updatedAt;

	@Override
	public String toString() {

		StringBuilder sb = new StringBuilder();
		sb.append("id=").append(this.id)
				.append(", genreCd=").append(this.genreCd)
				.append(", genreNm=").append(this.genreNm);

		return sb.toString();

	}

}
