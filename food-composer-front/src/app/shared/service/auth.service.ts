import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  getUserInfo(): string {
    if (this.afAuth.auth.currentUser != null) {
      return this.afAuth.auth.currentUser.email;
    }
  }

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
