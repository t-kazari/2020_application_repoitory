package jp.co.fcserver.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import jp.co.fcserver.domain.News;

public interface NewsRepository extends JpaRepository<News, Integer> {

	@Query(value = "SELECT nw FROM News nw ORDER BY id DESC")
	List<News> find();

}
