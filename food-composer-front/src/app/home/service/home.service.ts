import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../../shared/post';
import { AngularFireAuth } from 'angularfire2/auth';
import { ResponseEntity } from 'src/app/models/response-entity';
import { News } from 'src/app/models/news';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = "https://food-composer.appspot.com/api/v1/news/find";

  constructor(private http: HttpClient, private fireAuth: AngularFireAuth) {}

  request(): News[] {
    
    //現在ログイン中のユーザが取得できる場合はHttp通信を始める
    if (this.fireAuth.auth.currentUser != null) {
      this.fireAuth.auth.currentUser.getIdToken(true).then(
        (value:string) => {
          const token = value;

          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          };
      
          const data = new Post(token, null, null, null, null);
      
          this.http.post<ResponseEntity>(this.url, data, httpOptions)
          .toPromise()
          .then(
            (response) => {
              const responseBody = response;
              if(responseBody.successFlg) {
                //NewsオブジェクトにResponseされたEntityをセットする。
                return responseBody.entity;
              } else {
                return null;
              }
            }
          )

        }
      );
    } else {
      alert("user is ?")
      return null;
    }
  }
  
}
