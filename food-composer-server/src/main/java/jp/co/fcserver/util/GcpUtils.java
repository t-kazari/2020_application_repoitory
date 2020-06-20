package jp.co.fcserver.util;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;

public class GcpUtils {

	private static final Logger LOG = LoggerFactory.getLogger(GcpUtils.class);

	public static InputStream getGcsFile(String backetName, String fileName) {

		Storage storage = StorageOptions.getDefaultInstance().getService();
		BlobId blobId = BlobId.of(backetName, fileName);
		return new ByteArrayInputStream(storage.readAllBytes(blobId));

	}

}
