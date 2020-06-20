package jp.co.fcserver.api;

import org.springframework.beans.factory.annotation.Value;

import jp.co.fcserver.exception.ComposerException;
import jp.co.fcserver.util.AuthUtils;

public class AbstractAPI {

	@Value("firebase.auth.key")
	private String firebaseKey;

	@Value("${gcp.projectId}")
	private String projectId;

	protected boolean auth(String token) throws ComposerException {
			try {
				return AuthUtils.isAuthUser(token);
			} catch (ComposerException e) {
				return false;
			}
	}

}
