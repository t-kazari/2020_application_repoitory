package jp.co.fcserver.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.co.fcserver.bean.SendingToEntityInf;
import jp.co.fcserver.bean.SendingToStation;
import jp.co.fcserver.domain.Station;
import jp.co.fcserver.repository.StationRepository;

@Service
public class StationService extends AbstractService {

	@Autowired
	StationRepository repository;

	private static final Logger LOG = (Logger) LoggerFactory.getLogger(StationService.class);

	public List<Station> find(String placeCd) {

		LOG.info("start station service");

		SendingToEntityInf bean = new SendingToStation();
		convertToPartialMatchString(bean, placeCd);
		String[] prms = bean.getParameters();

		LOG.info("end station service");

		return repository.findByPlaceCd(prms[0]);

	}
}

