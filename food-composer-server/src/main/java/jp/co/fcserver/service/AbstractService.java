package jp.co.fcserver.service;

import java.util.ArrayList;
import java.util.List;

import com.google.api.client.util.Strings;

import jp.co.fcserver.bean.SendingToEntityInf;

/**
 * 抽象サービスクラス
 * RestController(API)から呼ばれるRepositoryを呼び出すServiceクラスに共通するロジック
 * @author kinno
 *
 */
public class AbstractService {

	/**
	 * 与えられた引数がNullであれば部分一致型へ変換する
	 * @param bean 変換した引数をセットするBeanを決定する
	 * @param phrases Nullであれば部分一致型に変換する引数
	 */
	protected void convertToPartialMatchString(SendingToEntityInf bean, String... phrases) {

		List<String> list = new ArrayList<String>();

		for(String phrase : phrases) {
			if(Strings.isNullOrEmpty(phrase)) {
				phrase = "%";
			}
			list.add(phrase);
		}

		bean.setParameter(list.toArray(new String[list.size()]));

	}

}
