import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/service/route.service';
import { AuthService } from 'src/app/service/auth.service';

/**
 * サイドバーコンポーネント
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  //ログイン中のユーザのEmailを表示
  userName = "";

  constructor(private authService: AuthService, private routeService: RouteService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(
      user => {
        this.userName = user.email
      }
    )
  }

  /**
   * コンポーザーページに遷移
   */
  toComposer(): void {
    this.routeService.toComposer();
  }

  /**
   * 登録ページに遷移
   */
  toRegist(): void {
    this.routeService.toRegist();
  }

}
