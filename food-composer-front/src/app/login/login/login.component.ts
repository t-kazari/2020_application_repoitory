import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

/**
 * ログインコンポーネント
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  /**
   * ログインメソッド
   * フォームにセットされたEmailとPasswordの情報を元に、認証に成功することができればホーム画面に遷移する。
   * @param loginForm
   */
  login(loginForm: NgForm): void {
    if(loginForm.value.email && loginForm.value.password){
      this.authService.login(loginForm.value.email, loginForm.value.password);
    } else {
      alert("メールアドレスとパスワードは記入してください。")
    }
  }

}
