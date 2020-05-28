package jp.co.fcserver.util;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

public class AuthUtils {

	private static final String BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts";
	private static final String OPERATION_AUTH = "";
	private static final Logger LOG = LoggerFactory.getLogger(AuthUtils.class);

	private static void fireInit(final String projectId) throws IOException {

		FirebaseApp firebaseApp = null;
		List<FirebaseApp> firebaseApps = FirebaseApp.getApps();
		if (firebaseApps != null && !firebaseApps.isEmpty()) {
			for (FirebaseApp app : firebaseApps) {
				if (app.getName().equals(FirebaseApp.DEFAULT_APP_NAME)) {
					firebaseApp = app;
				}
			}
		} else {
			FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredentials(GoogleCredentials.getApplicationDefault()).setProjectId(projectId).build();
			firebaseApp = FirebaseApp.initializeApp(options);
		}

	}

	public static class UserAuth {

		private String firebaseKey;
		private String projectId;
		private String userId;
		private String userName;
		private String token;

		public UserAuth(final String firebaseKey, final String projectId) {
			this.firebaseKey = firebaseKey;
			this.projectId = projectId;
		}

		public UserAuth withUserId(final String userId) {
			this.userId = userId;
			return this;
		}

		public UserAuth withUserName(final String userName) {
			this.userName = userName;
			return this;
		}

		public UserAuth withToken(final String token) {
			this.token = token;
			return this;
		}

		public Map<String, Object> auth() {

			Map<String, Object> authInfoMap = new HashMap<String, Object>();

			return authInfoMap;
		}

	}

}
