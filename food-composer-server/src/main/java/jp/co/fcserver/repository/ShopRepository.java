package jp.co.fcserver.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import jp.co.fcserver.domain.Shop;

public interface ShopRepository extends JpaRepository<Shop, String> {

	@Query(value = "SELECT sh FROM Shop sh "
			+ "LEFT OUTER JOIN Taste te ON sh.tasteCd = te.tasteCd "
			+ "LEFT OUTER JOIN Place pl ON sh.placeCd = pl.placeCd "
			+ "WHERE te.genreCd LIKE :genreCd "
			+ "AND sh.tasteCd LIKE :tasteCd "
			+ "AND pl.prefectureCd LIKE :prefectureCd "
			+ "AND sh.placeCd LIKE :placeCd")
	List<Shop> find(@Param("genreCd") String genreCd, @Param("tasteCd") String tasteCd,
			@Param("prefectureCd") String prefectureCd, @Param("placeCd") String placeCd);

}
