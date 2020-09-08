import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) {}

  toComposer(): void {
    this.router.navigate(["composer"]);
  }

  toRegist(): void {
    this.router.navigate(["regist"]);
  }

  toIndex(): void {
    this.router.navigate(["home"]);
  }

}
