package jp.co.fcserver.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import jp.co.fcserver.domain.Taste;

public interface TasteRepository extends JpaRepository<Taste, String> {

	List<Taste> findByGenreCd(String genreCd);

}
