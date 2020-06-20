import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { RouteService } from '../service/route.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title : string = '';

  constructor(private router: Router, private authService : AuthService, private routeService: RouteService) { }

  ngOnInit(): void {
  }

  logout() : void {
    this.authService.logout();
  }

  toIndex() :void {
    this.routeService.toIndex();
  }

}
