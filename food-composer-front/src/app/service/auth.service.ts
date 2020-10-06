import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";

/**
 * 認証サービス
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ = this.afAuth.user;

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  /**
   * ユーザ情報取得
   */
  getUserInfo(): string {
    if (this.afAuth.auth.currentUser != null) {
      return this.afAuth.auth.currentUser.email;
    }
  }

  /**
   * ログインメソッド
   * emailとpasswordを用いて認証に成功するとホーム画面に遷移する。
   * @param email
   * @param password
   */
  login(email: string, password: string): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(success=>{
        this.user$ = this.afAuth.user;
        this.router.navigate(["home"]);
      })
      .catch((error) => {
        console.log("Something is wrong:", error.message);
        alert("メールアドレスかパスワードに間違いがあります。")
      });
  }

  /**
   * ログアウトメソッド
   * 認証を破棄し、ログインページに遷移する。
   */
  logout(): void {
    this.afAuth.auth.signOut()
    .then(success=>{
      this.router.navigate(["login"]);
    })
    .catch((error) => {
      console.log("Something is wrong:", error.message);
    });

  }

}
