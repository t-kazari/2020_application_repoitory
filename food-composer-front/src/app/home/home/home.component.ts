import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { News } from 'src/app/models/news';
import { Post } from 'src/app/models/post';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ HomeService ],
})
export class HomeComponent implements OnInit {

  public title: string = 'Food Composer TOP PAGE'

  newsList: News[] = [];
  post: Post;

  constructor(private homeService: HomeService, private userAuth:  AuthService) {}

  ngOnInit(): void {
    this.newsList = [];
    this.post = new Post(null, null, null, null, null);
    //現在ログイン中のユーザが取得できる場合はHttp通信を始める
    this.userAuth.user$.subscribe(
      user => {
        user.getIdToken(true).then(
          (value) => {
            this.post.token = value;
            this.getNews(this.post);
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }

  private getNews(post: Post): void {
    this.homeService.request(post).subscribe(
      data => {
        if(data.successFlg) {
            for(var i = 0; i < data.entity.length; i++) {
              this.newsList.push(new News(data.entity[i].newsCategory, data.entity[i].contents, data.entity[i].registedDate));
            }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
