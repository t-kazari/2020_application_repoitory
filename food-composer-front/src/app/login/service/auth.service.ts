import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ = this.afAuth.user;

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  login(email: string, password: string): void {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(success=>{
        this.router.navigate(["home"]);
      })
      .catch((error) => {
        console.log("Something is wrong:", error.message);
        alert("メールアドレスかパスワードに間違いがあります。")
      });
  }

}
