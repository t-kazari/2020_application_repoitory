package jp.co.fcserver.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShopDto {

	private String shopCd;

	private String shopNm;

	private String genreNm;

	private String tasteNm;

	private String prefectureNm;

	private String placeNm;

	private String url;

}
