import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

/**
 * ルーティングサービス
 */
@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) {}

  /**
   * コンポーザーページ遷移
   */
  toComposer(): void {
    this.router.navigate(["composer"]);
  }

  /**
   * 登録ページ遷移
   */
  toRegist(): void {
    this.router.navigate(["regist"]);
  }

  /**
   * ホームページ遷移
   */
  toIndex(): void {
    this.router.navigate(["home"]);
  }

}
