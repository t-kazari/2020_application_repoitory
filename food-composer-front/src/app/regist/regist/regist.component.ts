import { Component, OnInit } from '@angular/core';
import { ComposerBean } from 'src/app/models/composer-bean';

import { ComposerService } from 'src/app/service/composer.service';
import { AuthService } from 'src/app/service/auth.service';
import { RegistService } from 'src/app/service/regist.service';

import { Post } from 'src/app/models/post';
import { Genre } from 'src/app/models/genre'
import { Taste } from 'src/app/models/taste';
import { Prefecture } from 'src/app/models/prefecture';
import { Place } from 'src/app/models/place';
import { Shop } from 'src/app/models/shop';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

  title = 'RegistShop';
  genreList: ComposerBean[];
  tasteList: ComposerBean[];
  prefectureList: ComposerBean[];
  placeList: ComposerBean[];
  post: Post;
  isGenreSet: boolean;
  isTasteSet: boolean;
  isPrefectureSet: boolean;
  isPlaceSet: boolean;
  isUrlSet: boolean;
  isShopNameSet: boolean

  constructor(private authService: AuthService, private composerService: ComposerService, private registService: RegistService) { }

  ngOnInit(): void {
    this.genreList = [];
    this.genreList.push(new Genre("001", "ラーメン"));
    this.tasteList = [];
    this.prefectureList = [];
    this.prefectureList.push(new Prefecture("13", "東京都"));
    this.prefectureList.push(new Prefecture("28", "大阪府"));
    this.prefectureList.push(new Prefecture("30", "兵庫県"));
    this.placeList = [];
    this.post = new Post(null, null, null, null, null, null);
    this.isGenreSet = true;
    this.isTasteSet = true;
    this.isPrefectureSet = true;
    this.isPlaceSet = true;
    this.isUrlSet = true;
    this.isShopNameSet = true;
    this.authService.user$.subscribe(
      user => user.getIdToken(true).then(
        value => {
          this.post.token = value;
        }
      )
    )
  }

  regist(registForm: NgForm): void {

    if(this.isSatisfiedWithForm(registForm)) {
      const params = new Post(
        registForm.value.token,
        registForm.value.genreCd,
        registForm.value.tasteCd,
        registForm.value.prefectureCd,
        registForm.value.placeCd,
        registForm.value.url,
        registForm.value.shopName)
      this.registService.regist(params).subscribe(
        data => {
          alert("SpreadSheetへの登録が成功しました。");
        },
        error => {
          console.log(error);
        }
      );
    } else {
      alert("失敗失敗");
    }

  }

  private isSatisfiedWithForm(form: NgForm): boolean {

    console.log("genreCd:" + form.value.genreCd + ", tasteCd:" + form.value.tasteCd + ", prefectureCd:" + form.value.prefectureCd + ", placeCd:" + form.value.placeCd + ", url:" + form.value.url + ", shopName:" + form.value.shopNm);

    this.isGenreSet = form.value.genreCd ? true : false;
    this.isTasteSet = form.value.tasteCd ? true : false;
    this.isPrefectureSet = form.value.prefectureCd ? true : false;
    this.isPlaceSet = form.value.placeCd ? true : false;
    this.isUrlSet = form.value.url ? true : false;
    this.isShopNameSet = form.value.shopName ? true : false;

    console.log("genre:" + this.isGenreSet + ", taste:" + this.isTasteSet + ", prefecture:" + this.isPrefectureSet + ", place:" + this.isPlaceSet + ", url:" + this.isUrlSet + ", shop:" + this.isShopNameSet);

    return this.isGenreSet && this.isTasteSet && this.isPrefectureSet && this.isPlaceSet && this.isUrlSet && this.isShopNameSet;

  }

  getTastes(genreCd: string): ComposerBean[] {

    console.log("genreCd is " + genreCd);
    this.tasteList = [];
    this.post.genreCd = genreCd;
    this.composerService.getTaste(this.post).subscribe(
      data => {
        if(data.successFlg) {
          for(var i = 0; i < data.entity.length; i++) {
            this.tasteList.push(new Taste(data.entity[i].tasteCd, data.entity[i].tasteNm));
          }
        }
      },
      error => {
        console.log(error);
      }
    )
    return this.tasteList;
  }

  getPlaces(prefectureCd: string): ComposerBean[] {

    console.log("prefectureCd is " + prefectureCd);
    this.placeList = [];
    this.post.prefectureCd = prefectureCd;
    this.composerService.getPlace(this.post).subscribe(
      data => {
        if(data.successFlg) {
          for(var i = 0; i < data.entity.length; i++) {
            this.placeList.push(new Place(data.entity[i].placeCd, data.entity[i].placeNm));
          }
        }
      },
      error => {
        console.log(error);
      }
    )
    return this.placeList;
  }

}
