package jp.co.fcserver.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.co.fcserver.bean.SendingToEntityInf;
import jp.co.fcserver.bean.SendingToShop;
import jp.co.fcserver.domain.Shop;
import jp.co.fcserver.exception.ComposerException;
import jp.co.fcserver.repository.ShopRepository;

/**
 * 店舗サービス
 * @author kinno
 *
 */
@Service
public class ShopService extends AbstractService {

	@Autowired
	ShopRepository repository;

	private static final Logger LOG = (Logger) LoggerFactory.getLogger(ShopService.class);

	/**
	 * 店舗検索
	 * @param genreCd
	 * @param tasteCd
	 * @param prefectureCd
	 * @param placeCd
	 * @param stationCd
	 * @return
	 */
	public List<Shop> find(String genreCd, String tasteCd, String prefectureCd, String placeCd) {

		LOG.info("start shop service");

		SendingToEntityInf bean = new SendingToShop();
		convertToPartialMatchString(bean, genreCd, tasteCd, prefectureCd, placeCd);
		String[] prms = bean.getParameters();

		LOG.info("end shop service");

		return repository.find(prms[0], prms[1], prms[2], prms[3]);

	}

	public List<Shop> findAllShop() throws ComposerException {

		LOG.info("start shop service");

		List<Shop> shops = new ArrayList<Shop>();

		shops = repository.findAll();

		if (shops.size() == 0) {
			throw new ComposerException("一店舗も存在しません。");
		}

		LOG.info("end shop service");

		return shops;

	}

}
