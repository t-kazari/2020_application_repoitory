import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseEntity } from 'src/app/models/response-entity';

import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';

/**
 * ホームサービス
 */
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  //エンドポイント
  private url = "https://food-composer.appspot.com/api/v1/news/find";

  //HTTPオプション
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  /**
   * お知らせ取得メソッド
   * @param params
   */
  request(params: Post): Observable<ResponseEntity> {
    return this.http.post<ResponseEntity>(this.url, params, this.httpOptions);
  }

}
