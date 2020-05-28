package jp.co.fcserver.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

@Configuration
@PropertySource("classpath:application.properties")
public class AppConfig {

	public Jackson2ObjectMapperBuilder jackson2ObjectMapper() {

		return new Jackson2ObjectMapperBuilder().deserializerByType(String.class, new EmptyToNullStringDeserializer());

	}

}
