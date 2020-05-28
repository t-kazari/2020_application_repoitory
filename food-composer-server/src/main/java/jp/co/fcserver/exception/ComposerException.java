package jp.co.fcserver.exception;

public class ComposerException extends Exception {

	public ComposerException(String message) {
		super(message);
	}

	public ComposerException(String message, Throwable t) {
		super(message, t);
	}

}
