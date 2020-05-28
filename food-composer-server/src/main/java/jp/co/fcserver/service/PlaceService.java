package jp.co.fcserver.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.co.fcserver.bean.SendingToEntityInf;
import jp.co.fcserver.bean.SendingToPlace;
import jp.co.fcserver.domain.Place;
import jp.co.fcserver.repository.PlaceRepository;

@Service
public class PlaceService extends AbstractService {

	@Autowired
	PlaceRepository repository;

	private static final Logger LOG = (Logger) LoggerFactory.getLogger(PlaceService.class);

	public List<Place> find(String prefectureCd) {

		LOG.info("start place service");

		SendingToEntityInf bean = new SendingToPlace();
		convertToPartialMatchString(bean, prefectureCd);
		String[] prms = bean.getParameters();

		LOG.info("end place service");
		return repository.findByPrefectureCd(prms[0]);

	}

}
