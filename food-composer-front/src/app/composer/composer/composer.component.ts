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

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.css']
})
export class ComposerComponent implements OnInit {

  title = 'Composer';
  content = "";
  displayProperty = 'block';
  startFlg : boolean;
  genreList: ComposerBean[] = [];
  tasteList: ComposerBean[] = [];
  prefectureList: ComposerBean[] = [];
  placeList: ComposerBean[] = [];
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

  start():void {
    this.displayProperty = 'none';
    this.startFlg = true;
    this.genreList.push(new Genre("000", "指定無し"));
    this.genreList.push(new Genre("001", "ラーメン"));
    this.comments.push(new ResponseComment("何が食べたい?", CommentType.RESPONSE, this.genreList));
  }

  sendChoice(content: string): void {

    if(content) {

      this.comments.push(new MyComment(content));

      this.content = "";

      if(!this.genreFlg && content === '000'){
        this.genreFlg = true;
        this.tasteFlg = true;
        this.prefectureList.push(new Prefecture("00", "指定無し"));
        this.prefectureList.push(new Prefecture("13", "東京都"));
        this.prefectureList.push(new Prefecture("28", "大阪府"));
        this.prefectureList.push(new Prefecture("30", "兵庫県"));
        this.comments.push(new ResponseComment("都道府県はどうするん？", CommentType.RESPONSE, this.prefectureList));
      } else if(!this.genreFlg && content !== '000') {
        this.genreFlg = true;
        this.post.genreCd = content;
        this.getTaste(this.post);
      }

      else if(!this.tasteFlg && content === '000000'){
        this.tasteFlg = true;
      } else if(!this.tasteFlg && content !== '000000') {
        this.tasteFlg = true;
        this.post.tasteCd = content;
        this.prefectureList.push(new Prefecture("00", "指定無し"));
        this.prefectureList.push(new Prefecture("13", "東京都"));
        this.prefectureList.push(new Prefecture("28", "大阪府"));
        this.prefectureList.push(new Prefecture("30", "兵庫県"));
        this.comments.push(new ResponseComment("都道府県はどうするん？", CommentType.RESPONSE, this.prefectureList));
      }

      else if(!this.prefectureFlg && content === '00') {
        this.prefectureFlg = true;
        this.placeFlg = true;
        this.endFlg = true;
      } else if(!this.prefectureFlg && content !== '00') {
        this.prefectureFlg = true;
        this.post.prefectureCd = content;
        this.getPlace(this.post);
      }

      else if(!this.placeFlg && content === '0000') {
        this.placeFlg = true;
        this.endFlg = true;
      } else if(!this.placeFlg && content !== '0000') {
        this.placeFlg = true;
        this.endFlg = true;
        this.post.placeCd = content;
      }

      if(this.endFlg){
        this.getShop(this.post);
      }

    } else {
      alert("何も入力されていませんよ");
    }

  }

  private getTaste(post:Post) {
    this.composerService.getTaste(post).subscribe(
      data => {
        if(data.successFlg) {
          this.tasteList.push(new Taste('000000', '指定無し'));
          for(var i = 0; i < data.entity.length; i++) {
            this.tasteList.push(new Taste(data.entity[i].tasteCd, data.entity[i].tasteNm));
          }
          this.comments.push(new ResponseComment("どんな味がいい?", CommentType.RESPONSE, this.tasteList));
        }
      },
      error => {
        console.log(error);
      }
    );

  }

  private getPlace(post:Post) {
    this.composerService.getPlace(post).subscribe(
      data => {
        if(data.successFlg) {
          this.placeList.push(new Place('0000', '指定無し'));
          for(var i = 0; i < data.entity.length; i++) {
            this.placeList.push(new Place(data.entity[i].placeCd, data.entity[i].placeNm));
          }
          this.comments.push(new ResponseComment("場所はどの辺？", CommentType.RESPONSE, this.placeList));
        }
      },
      error => {
        console.log(error);
      }
    );
  }

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

  async openModal(bean: ComposerBean) {
    const res = await this.modalService.openModal(bean);
    if(!res) {
      return;
    }
  }

  closeModal(bean: ComposerBean) {
    this.isOpenModal = false;
  }

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
