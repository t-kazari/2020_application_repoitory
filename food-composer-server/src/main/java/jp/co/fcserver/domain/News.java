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
@Table(name = "t_news")
public class News implements Serializable {

	@Column(name = "id")
	@Id
	private int id;

	@Column(name = "news_category")
	private Integer NewsCategory;

	@Column(name = "contents")
	private String contents;

	@Column(name = "regist_date")
	private Timestamp registedDate;

	@Column(name = "created_at")
	private Timestamp createdAt;

	@Column(name = "updated_at")
	private Timestamp updatedAt;

	@Override
	public String toString() {

		StringBuilder sb = new StringBuilder();
		sb.append("id=").append(this.id)
			.append(", newsCategory=").append(this.NewsCategory)
			.append(", contents=").append(this.contents)
			.append(", registedDate=").append(this.registedDate);

		return sb.toString();

	}

}
