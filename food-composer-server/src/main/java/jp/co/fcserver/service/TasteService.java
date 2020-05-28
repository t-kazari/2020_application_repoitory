package jp.co.fcserver.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.co.fcserver.bean.SendingToEntityInf;
import jp.co.fcserver.bean.SendingToTaste;
import jp.co.fcserver.domain.Taste;
import jp.co.fcserver.repository.TasteRepository;

@Service
public class TasteService extends AbstractService {

	@Autowired
	TasteRepository repository;

	private static final Logger LOG = (Logger) LoggerFactory.getLogger(TasteService.class);

	public List<Taste> find(String genreCd) {

		LOG.info("start taste service");

		SendingToEntityInf bean = new SendingToTaste();
		convertToPartialMatchString(bean, genreCd);
		String[] prms = bean.getParameters();

		LOG.info("end taste service");

		return repository.findByGenreCd(prms[0]);

	}

}
