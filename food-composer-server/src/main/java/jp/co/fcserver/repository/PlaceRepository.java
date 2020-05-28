package jp.co.fcserver.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import jp.co.fcserver.domain.Place;

public interface PlaceRepository extends JpaRepository<Place, String> {

	List<Place> findByPrefectureCd(String prefectureCd);

}
