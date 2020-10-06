/**
 * 店舗情報登録API
 * 本来はPOSTメソッドにしたいが、GASの仕様上GETメソッドにしている。
 * @param {} e ：店舗情報Bean
 */
function doGet(e) {
  
  //パラメータから店舗情報を抜き出す。
  const params = e.parameter;
  const shopNm = params.shopNm;
  const genreCd = params.genreCd;
  const tasteCd = params.tasteCd;
  const prefectureCd = params.prefectureCd;
  const placeCd = params.placeCd;
  const url = params.url;
  
  const callback = e.parameter.callback;
  
  //このスクリプトが紐づいているスプレッドシートのオブジェクトをセットする。
  const sheet = SpreadsheetApp.getActive().getSheetByName("shop");  
  
  //arr：登録フラグ、店舗コード、店舗名、ジャンルコード、味コード、都道府県コード、場所コード、URLをこの順に配列としてセットする。
  //これがスプレッドシートの1列に相当する。
  const arr = [["〇", "", shopNm, genreCd, tasteCd, prefectureCd, placeCd, url]];
  
  console.log("array : " + arr);

  sheet.getRange(sheet.getLastRow() + 1, 1, 1, 8).setValues(arr);

  //レスポンスボディにセットするデータを設定。
  const json = {
    success : "success",
    data : "data"
  }
  
  const res = ContentService.createTextOutput(callback + '(' + JSON.stringify(json) + ')').setMimeType(ContentService.MimeType.JAVASCRIPT);

  return res;
    
}
