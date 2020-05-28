package jp.co.fcserver;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.WebApplicationInitializer;

@SpringBootApplication
@EnableAutoConfiguration
public class WarInitializerApplication extends SpringBootServletInitializer implements WebApplicationInitializer {

	private static final Logger LOG = (Logger) LoggerFactory.getLogger(WarInitializerApplication.class);

	@Value("${spring.datasource.url}")
	private static String test;

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(WarInitializerApplication.class);
	}

	public static void main(String[] args) {
		LOG.info("msg = " + test);
		SpringApplication.run(WarInitializerApplication.class, args);
	}


}
