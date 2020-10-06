import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { News } from 'src/app/models/news';
import { Post } from 'src/app/models/post';
import { AuthService } from 'src/app/service/auth.service';

/**
 * ホームコンポーネント
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  //ページタイトル
  public title: string = 'Food Composer TOP PAGE'

  newsList: News[] = [];
  post: Post;
  newsFlg: boolean;

  constructor(private homeService: HomeService, private userAuth:  AuthService) {}

  ngOnInit(): void {
    this.newsFlg = false;
    //現在ログイン中のユーザが取得できる場合はHttp通信を始める
    this.userAuth.user$.subscribe(
      user => {
        user.getIdToken(true).then(
          (value) => {
            this.post = new Post(value, null, null, null, null);
          }
        );
      },
      error => {
        console.log(error);
      }
    );

  }

  /**
   * お知らせ取得
   * お知らせ情報をサーバから呼び出す。
   */
  getNews(): void {
    this.newsList = [];
    this.homeService.request(this.post).subscribe(
      data => {
        if(data.successFlg) {
            for(var i = 0; i < data.entity.length; i++) {
              this.newsList.push(new News(data.entity[i].newsCategory, data.entity[i].contents, data.entity[i].registedDate));
            }
            this.newsFlg = true;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
