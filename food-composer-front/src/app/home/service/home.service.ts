import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from '../../shared/post';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = "https://food-composer.appspot.com/api/v1/news/find";

  responseBody: any;

  token : any;

  constructor(private http: HttpClient, private fireAuth: AngularFireAuth) {}

  request(): void {
    
    if (this.fireAuth.auth.currentUser != null) {
      this.fireAuth.auth.currentUser.getIdToken(true).then(
        (value:string) => {
          this.token = value;

          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          };
      
          const data = new Post(this.token, null, null, null, null);
      
          this.http.post<any>(this.url, data, httpOptions)
          .toPromise()
          .then(response => this.responseBody = response)

        }
      );      
    } else {
      alert("user is ?")
    }   
  }
  
}
