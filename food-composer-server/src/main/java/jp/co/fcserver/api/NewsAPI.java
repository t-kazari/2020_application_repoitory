package jp.co.fcserver.api;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import jp.co.fcserver.config.Constants;
import jp.co.fcserver.domain.News;
import jp.co.fcserver.exception.ComposerException;
import jp.co.fcserver.service.NewsService;

@RestController
@RequestMapping(value = "api/v1/news")
@ResponseBody
@ResponseStatus(HttpStatus.OK)
public class NewsAPI extends AbstractAPI {

	@Autowired
	NewsService service;

	private static final Logger LOG = (Logger) LoggerFactory.getLogger(NewsAPI.class);

	@PostMapping
	@RequestMapping(value = "find")
	public ResponseEntity<?> findNews(@RequestBody String json) throws ComposerException{

		LOG.info("start news api");

		Map<String, Object> returnMap = new HashMap<String, Object>();

		ObjectMapper mapper = new ObjectMapper();
		Map<String, Object> jsonMap = new HashMap<String, Object>();
		try {
			jsonMap = mapper.readValue(json, HashMap.class);
		} catch (IOException e) {
			LOG.error(e.getMessage());
			returnMap.put("successFlg", false);
			returnMap.put("errors", e.getMessage());
			return new ResponseEntity<>(returnMap, HttpStatus.INTERNAL_SERVER_ERROR);
		}

		//API呼び出しユーザの認証を行う
		String token = (String)jsonMap.get("token");
		LOG.info("token = " + token);
		if(!auth(token)) {
			LOG.error(Constants.AUTHENTICATION_ERROR);
			returnMap.put("successFlg", false);
			returnMap.put("errors", Constants.AUTHENTICATION_ERROR);
			return new ResponseEntity<>(returnMap, HttpStatus.UNAUTHORIZED);
		}

		List<News> news = service.find();

		returnMap.put("successFlg", true);
		returnMap.put("entity", news);

		LOG.info("end news api");

		return new ResponseEntity<>(returnMap, HttpStatus.OK);

	}


}
