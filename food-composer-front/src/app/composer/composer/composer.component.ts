import { Component, OnInit } from '@angular/core';

import { ComposerService } from 'src/app/service/composer.service';
import { ModalService } from 'src/app/service/modal.service';
import { AuthService } from 'src/app/service/auth.service';

import { Post } from 'src/app/models/post';
import { Genre } from 'src/app/models/genre'
import { Taste } from 'src/app/models/taste';
import { Prefecture } from 'src/app/models/prefecture';
import { Place } from 'src/app/models/place';
import { Shop } from 'src/app/models/shop';
import { ComposerBean } from 'src/app/models/composer-bean';
import { Comment } from 'src/app/models/comment';
import { ResponseComment } from 'src/app/models/response-comment';
import { MyComment } from 'src/app/models/my-comment';
import { CommentType } from 'src/app/models/comment-type.enum';

/**
 * コンポーザーコンポーネント
 */
@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.css']
})
export class ComposerComponent implements OnInit {

  //ページタイトル
  title = 'Composer';

  content = "";
  displayProperty = 'block';
  startFlg : boolean;
  genreList: ComposerBean[] = [];
  genreCdList: string[] = [];
  tasteList: ComposerBean[] = [];
  tasteCdList: string[] = [];
  prefectureList: ComposerBean[] = [];
  prefectureCdList: string[] = [];
  placeList: ComposerBean[] = [];
  placeCdList: string[] = [];
  shopList: ComposerBean[] = [];
  comments: Comment[] = [];
  genreFlg : boolean;
  tasteFlg : boolean;
  prefectureFlg : boolean;
  placeFlg : boolean;
  shopFlg : boolean;
  endFlg: boolean;
  post: Post;
  modalBean: ComposerBean;
  isOpenModal: boolean;

  constructor(private authService: AuthService, private composerService: ComposerService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.startFlg = false;
    this.genreFlg = false;
    this.tasteFlg = false;
    this.prefectureFlg = false;
    this.placeFlg = false;
    this.shopFlg = false;
    this.endFlg = false;
    this.isOpenModal = false;
    this.post = new Post(null, null, null, null, null);
    this.authService.user$.subscribe(
      user => user.getIdToken(true).then(
        value => {
          this.post.token = value;
        }
      )
    )
  }

  /**
   * コンポーザー開始
   */
  start():void {
    this.displayProperty = 'none';
    this.startFlg = true;
    this.genreList.push(new Genre("000", "指定無し"));
    this.genreCdList.push("000");
    this.genreList.push(new Genre("001", "ラーメン"));
    this.genreCdList.push("001");
    this.comments.push(new ResponseComment("何が食べたい?", CommentType.RESPONSE, this.genreList));
  }

  /**
   * チャット送信処理
   * 送信したコードを元に、それに適した処理を行う。
   * @param content
   */
  sendChoice(content: string): void {

    if(content) {

      this.comments.push(new MyComment(content));

      //コードをPOSTした後は、画面の投稿フォームからPOSTした文字列を消去する。
      this.content = "";

      if(!this.genreFlg && content === '000'){
        //ジャンルの指定無し、都道府県選択に移る。
        this.genreFlg = true;
        this.tasteFlg = true;
        this.prefectureList.push(new Prefecture("00", "指定無し"));
        this.prefectureCdList.push("00");
        this.prefectureList.push(new Prefecture("13", "東京都"));
        this.prefectureCdList.push("13");
        this.prefectureList.push(new Prefecture("28", "大阪府"));
        this.prefectureCdList.push("28");
        this.prefectureList.push(new Prefecture("30", "兵庫県"));
        this.prefectureCdList.push("30");
        this.comments.push(new ResponseComment("都道府県はどうするん？", CommentType.RESPONSE, this.prefectureList));
      } else if(!this.genreFlg && this.genreCdList.includes(content)) {
        //ジャンル指定。味コード選択に移る。
        this.genreFlg = true;
        this.post.genreCd = content;
        this.getTaste(this.post);
      } else if(!this.genreFlg && !this.genreCdList.includes(content)) {
        //入力ミス
        this.comments.push(new ResponseComment("リストにある番号を入力してください。", CommentType.RESPONSE, this.genreList));
      }

      else if(this.genreFlg && !this.tasteFlg && content === '000000'){
        //味の指定無し、都道府県選択に移る。
        this.tasteFlg = true;
        this.prefectureList.push(new Prefecture("00", "指定無し"));
        this.prefectureCdList.push("00");
        this.prefectureList.push(new Prefecture("13", "東京都"));
        this.prefectureCdList.push("13");
        this.prefectureList.push(new Prefecture("28", "大阪府"));
        this.prefectureCdList.push("28");
        this.prefectureList.push(new Prefecture("30", "兵庫県"));
        this.prefectureCdList.push("30");
        this.comments.push(new ResponseComment("都道府県はどうするん？", CommentType.RESPONSE, this.prefectureList));
      } else if(this.genreFlg && this.tasteCdList.includes(content)) {
        //味指定。都道府県選択に移る。
        this.tasteFlg = true;
        this.post.tasteCd = content;
        this.prefectureList.push(new Prefecture("00", "指定無し"));
        this.prefectureCdList.push("00");
        this.prefectureList.push(new Prefecture("13", "東京都"));
        this.prefectureCdList.push("13");
        this.prefectureList.push(new Prefecture("28", "大阪府"));
        this.prefectureCdList.push("28");
        this.prefectureList.push(new Prefecture("30", "兵庫県"));
        this.prefectureCdList.push("30");
        this.comments.push(new ResponseComment("都道府県はどうするん？", CommentType.RESPONSE, this.prefectureList));
      } else if(this.genreFlg && !this.tasteFlg && !this.tasteCdList.includes(content)) {
        //入力ミス。
        this.comments.push(new ResponseComment("リストにある番号を入力してください。", CommentType.RESPONSE, this.tasteList));
      }

      else if(this.tasteFlg && !this.prefectureFlg && content === '00') {
        //都道府県指定無し。終了フラグをTRUEにする。
        this.prefectureFlg = true;
        this.placeFlg = true;
        this.endFlg = true;
      } else if(this.tasteFlg && !this.prefectureFlg && this.prefectureCdList.includes(content)) {
        //都道府県指定。場所選択に移る。
        this.prefectureFlg = true;
        this.post.prefectureCd = content;
        this.getPlace(this.post);
      } else if(this.tasteFlg && !this.prefectureFlg && !this.prefectureCdList.includes(content)) {
        //入力ミス
        this.comments.push(new ResponseComment("リストにある番号を入力してください。", CommentType.RESPONSE, this.prefectureList));
      }

      else if(this.prefectureFlg && !this.placeFlg && content === '0000') {
        //場所選択無し。終了フラグをTRUEにする。
        this.placeFlg = true;
        this.endFlg = true;
      } else if(this.prefectureFlg && !this.placeFlg && this.placeCdList.includes(content)) {
        //場所指定。終了フラグをTRUEにする。
        this.placeFlg = true;
        this.endFlg = true;
        this.post.placeCd = content;
      } else if(this.prefectureFlg && !this.placeFlg && !this.placeCdList.includes(content)) {
        //入力ミス。
        this.comments.push(new ResponseComment("リストにある番号を入力してください。", CommentType.RESPONSE, this.placeList));
      }

      if(this.endFlg){
        //店舗一覧取得
        this.getShop(this.post);
      }

    } else {
      alert("何も入力されていませんよ");
    }

  }

  /**
   * 味取得メソッド
   * @param post
   */
  private getTaste(post:Post) {
    this.composerService.getTaste(post).subscribe(
      data => {
        if(data.successFlg) {
          this.tasteList.push(new Taste('000000', '指定無し'));
          for(var i = 0; i < data.entity.length; i++) {
            this.tasteList.push(new Taste(data.entity[i].tasteCd, data.entity[i].tasteNm));
            this.tasteCdList.push(data.entity[i].tasteCd);
          }
          this.comments.push(new ResponseComment("どんな味がいい?", CommentType.RESPONSE, this.tasteList));
        }
      },
      error => {
        console.log(error);
      }
    );

  }

  /**
   * 場所取得メソッド
   * @param post
   */
  private getPlace(post:Post) {
    this.composerService.getPlace(post).subscribe(
      data => {
        if(data.successFlg) {
          this.placeList.push(new Place('0000', '指定無し'));
          for(var i = 0; i < data.entity.length; i++) {
            this.placeList.push(new Place(data.entity[i].placeCd, data.entity[i].placeNm));
            this.placeCdList.push(data.entity[i].placeCd);
          }
          this.comments.push(new ResponseComment("場所はどの辺？", CommentType.RESPONSE, this.placeList));
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  /**
   * 店舗取得メソッド
   * @param post
   */
  private getShop(post: Post) {
    this.composerService.getShop(post).subscribe(
      data => {
        if(data.successFlg) {
          for(var i = 0; i < data.entity.length; i++) {
            this.shopList.push(new Shop(data.entity[i].shopCd, data.entity[i].shopNm, data.entity[i].genreNm, data.entity[i].tasteNm, data.entity[i].prefectureNm, data.entity[i].placeNm, data.entity[i].url));
          }
          this.comments.push(new ResponseComment("こんな店どうや？（店名をクリック！）", CommentType.END, this.shopList));
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  /**
   * モーダルオープンメソッド
   * @param bean ：クリックした店舗情報
   */
  async openModal(bean: ComposerBean) {
    const res = await this.modalService.openModal(bean);
    if(!res) {
      return;
    }
  }

  /**
   * コメントタイプ取得
   * @param comment
   */
  typeOfComment(comment: Comment): string {
    switch(comment.commentType) {
      case CommentType.REQUEST:
        return "REQUEST";
      case CommentType.RESPONSE:
        return "RESPONSE";
      case CommentType.END:
        return "END";
      default:
        return "";
    }
  }

}
