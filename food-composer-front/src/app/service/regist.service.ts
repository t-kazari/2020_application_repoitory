import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';


@Injectable({
  providedIn: 'root'
})
export class RegistService {

  private registUrl = "https://script.google.com/macros/s/AKfycbwvETNDHfkuD4e6bgu-aCbyqZ9io8VXXeu6kXeMuNArDi8YLaM/exec";

  constructor(private http: HttpClient) { }

  regist(params: Post): Observable<any> {
    const url = this.registUrl + `?genreCd=${params.genreCd}&tasteCd=${params.tasteCd}&prefectureCd=${params.prefectureCd}&placeCd=${params.placeCd}&shopNm=${params.shopNm}&url=${params.url}`;
    return this.http.jsonp(url, 'callback');
  }

}
