import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { RouteService } from 'src/app/service/route.service';

/**
 * ヘッダーコンポーネント
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //ページタイトル
  @Input() title : string = '';

  constructor(private authService : AuthService, private routeService: RouteService) { }

  ngOnInit(): void {
  }

  /**
   * ログアウトメソッド
   */
  logout() : void {
    this.authService.logout();
  }

  /**
   * ホームページ遷移
   */
  toIndex() :void {
    this.routeService.toIndex();
  }

}
