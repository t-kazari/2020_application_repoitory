package jp.co.fcserver.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jp.co.fcserver.domain.News;
import jp.co.fcserver.repository.NewsRepository;

@Service
public class NewsService {

	@Autowired
	NewsRepository repository;

	private static final Logger LOG = (Logger) LoggerFactory.getLogger(NewsService.class);

	public List<News> find() {

		Date date = new Date();

		List<News> list = new ArrayList<News>();
		List<News> newsList = repository.find();
		for(News news : newsList) {
			if(newsList.indexOf(news) < 4) {
				list.add(news);
			}
		}

		return list;
	}


}
