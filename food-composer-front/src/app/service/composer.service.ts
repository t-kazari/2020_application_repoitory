import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseEntity } from 'src/app/models/response-entity';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  private tasteUrl = "https://food-composer.appspot.com/api/v1/taste/find";

  private placeUrl = "https://food-composer.appspot.com/api/v1/place/find";

  private shopUrl = "https://food-composer.appspot.com/api/v1/shop/find";


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getTaste(params: Post): Observable<ResponseEntity> {
     const res = this.http.post<ResponseEntity>(this.tasteUrl, params, this.httpOptions);
     return res;
  }

  getPlace(params: Post): Observable<ResponseEntity> {
    return this.http.post<ResponseEntity>(this.placeUrl, params, this.httpOptions);
  }

  getShop(params: Post): Observable<ResponseEntity> {
    return this.http.post<ResponseEntity>(this.shopUrl, params, this.httpOptions);
  }
}
