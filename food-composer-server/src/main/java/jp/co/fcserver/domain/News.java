package jp.co.fcserver.domain;

import java.io.Serializable;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "t_news")
public class News implements Serializable {

	@Column(name = "id")
	@Id
	private int id;

	@Column(name = "news_category")
	private Integer newsCategory;

	@Column(name = "contents")
	private String contents;

	@Column(name = "regist_date")
	private String registedDate;

	@Column(name = "created_at")
	private Timestamp createdAt;

	@Column(name = "updated_at")
	private Timestamp updatedAt;

	public News(int id, Integer newsCategory, String contents, Timestamp registedDate, Timestamp createdAt,
			Timestamp updatedAt) {
		this.id = id;
		this.newsCategory = newsCategory;
		this.contents = contents;
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		this.registedDate = sdf.format(registedDate);
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	@Override
	public String toString() {

		StringBuilder sb = new StringBuilder();
		sb.append("id=").append(this.id)
				.append(", newsCategory=").append(this.newsCategory)
				.append(", contents=").append(this.contents)
				.append(", registedDate=").append(this.registedDate);

		return sb.toString();

	}

}
