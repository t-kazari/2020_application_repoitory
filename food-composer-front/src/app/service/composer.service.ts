import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseEntity } from 'src/app/models/response-entity';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';

/**
 * コンポーザーサービス
 */
@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  //各エンドポイント
  private tasteUrl = "https://food-composer.appspot.com/api/v1/taste/find";
  private placeUrl = "https://food-composer.appspot.com/api/v1/place/find";
  private shopUrl = "https://food-composer.appspot.com/api/v1/shop/find";

  //HTTPオプション
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  /**
   * 味取得メソッド
   * @param params
   */
  getTaste(params: Post): Observable<ResponseEntity> {
     const res = this.http.post<ResponseEntity>(this.tasteUrl, params, this.httpOptions);
     return res;
  }

  /**
   * 場所取得メソッド
   * @param params
   */
  getPlace(params: Post): Observable<ResponseEntity> {
    return this.http.post<ResponseEntity>(this.placeUrl, params, this.httpOptions);
  }

  /**
   * 店舗取得メソッド
   * @param params
   */
  getShop(params: Post): Observable<ResponseEntity> {
    return this.http.post<ResponseEntity>(this.shopUrl, params, this.httpOptions);
  }
}
