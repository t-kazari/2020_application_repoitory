import { Component, OnInit } from '@angular/core';
import { RouteService } from '../service/route.service';
import { AuthService } from '../service/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userName = this.authService.getUserInfo();

  constructor(private router: Router, private authService: AuthService, private routeService: RouteService) {}

  ngOnInit(): void {}

  toComposer(): void {
    this.routeService.toComposer();
  }

}
