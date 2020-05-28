package jp.co.fcserver.config;

import java.io.IOException;

import org.apache.logging.log4j.util.Strings;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StringDeserializer;

public class EmptyToNullStringDeserializer extends StringDeserializer {

	@Override
	public String deserialize(JsonParser p, DeserializationContext context) throws IOException {

		String result = super.deserialize(p, context);
		return Strings.isNotEmpty(result) ? result : null;

	}

}
