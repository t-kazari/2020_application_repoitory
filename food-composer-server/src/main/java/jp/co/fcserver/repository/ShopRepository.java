package jp.co.fcserver.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import jp.co.fcserver.domain.Shop;

public interface ShopRepository extends JpaRepository<Shop, String> {

	@Query(value = "SELECT * FROM Shop WHERE janreCd LIKE :janreCd AND tasteCd LIKE :tasteCd AND prefectureCd LIKE :prefectureCd AND placeCd LIKE :placeCd AND stationCd LIKE :stationCd")
	List<Shop> find(@Param("janreCd") String janreCd, @Param("tasteCd") String tasteCd,
			@Param("prefectureCd") String prefectureCd, @Param("placeCd") String placeCd,
			@Param("stationCd") String stationCd);

}
