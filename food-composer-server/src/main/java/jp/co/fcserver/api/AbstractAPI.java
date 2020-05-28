package jp.co.fcserver.api;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;

import com.google.appengine.repackaged.com.google.common.base.Strings;

import jp.co.fcserver.util.AuthUtils.UserAuth;

public class AbstractAPI {

	@Value("firebase.auth.key")
	private String firebaseKey;

	@Value("${gcp.projectId}")
	private String projectId;

	protected boolean auth(String token) {

		UserAuth userAuth = new UserAuth(firebaseKey, projectId);
		Map<String, Object> authMap = userAuth.withToken(token).auth();
		String userId = (String)authMap.get("");

		return Strings.isNullOrEmpty(userId) ? true : false;
	}

}
