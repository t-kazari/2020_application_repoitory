package jp.co.fcserver.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import jp.co.fcserver.domain.Station;

public interface StationRepository extends JpaRepository<Station, String> {

	List<Station> findByPlaceCd(String placeCd);

}
