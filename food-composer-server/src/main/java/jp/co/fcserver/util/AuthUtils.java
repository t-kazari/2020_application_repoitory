package jp.co.fcserver.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;

import com.google.api.client.util.Strings;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;

import jp.co.fcserver.exception.ComposerException;

public class AuthUtils {

	private static final String BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts";
	private static final Logger LOG = LoggerFactory.getLogger(AuthUtils.class);

	@Value("${firebase.auth.service.path}")
	private static String fileName;

	@Value("${firebase.auth.service.backet}")
	private static String backetName;

	public static boolean isAuthUser(String token) throws ComposerException {

		try {
			fireInit();
		} catch (IOException e) {
			throw new ComposerException("The error is occured in Firebase Authentication Initialize Part");
		}

		FirebaseToken decodedToken = null;
		try {
			decodedToken = FirebaseAuth.getInstance().verifyIdToken(token);
		} catch (FirebaseAuthException e) {
			throw new ComposerException("The error is occured in Firebase Authentication");		}
		String uid = decodedToken.getUid();
		LOG.info("uid = " + uid);

		return !Strings.isNullOrEmpty(uid);


	}

	private static void fireInit() throws IOException {

		FirebaseApp firebaseApp = null;
		List<FirebaseApp> firebaseApps = FirebaseApp.getApps();
		InputStream credentialsStream = GcpUtils.getGcsFile(backetName, fileName);
		if (firebaseApps != null && !firebaseApps.isEmpty()) {
			for (FirebaseApp app : firebaseApps) {
				if (app.getName().equals(FirebaseApp.DEFAULT_APP_NAME)) {
					firebaseApp = app;
				}
			}
		} else {
			FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredentials(GoogleCredentials.fromStream(credentialsStream)).build();
			firebaseApp = FirebaseApp.initializeApp(options);
		}

	}

}
