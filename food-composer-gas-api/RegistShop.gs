function doGet(e) {
      
  const params = e.parameter;
  const shopNm = params.shopNm;
  const genreCd = params.genreCd;
  const tasteCd = params.tasteCd;
  const prefectureCd = params.prefectureCd;
  const placeCd = params.placeCd;
  const url = params.url;
  
  const callback = e.parameter.callback;
      
  const sheet = SpreadsheetApp.getActive().getSheetByName("shop");  
  
  const arr = [["〇", "", shopNm, genreCd, tasteCd, prefectureCd, placeCd, url]];
  
  console.log("array : " + arr);

  sheet.getRange(sheet.getLastRow() + 1, 1, 1, 8).setValues(arr);
  
  const json = {
    success : "success",
    data : "data"
  }
  
  const res = ContentService.createTextOutput(callback + '(' + JSON.stringify(json) + ')').setMimeType(ContentService.MimeType.JAVASCRIPT);

  return res;
    
}
