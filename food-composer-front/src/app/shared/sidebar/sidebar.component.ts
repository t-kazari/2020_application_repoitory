import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/service/route.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userName = "";

  constructor(private router: Router, private authService: AuthService, private routeService: RouteService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(
      user => {
        this.userName = user.email
      }
    )
  }

  toComposer(): void {
    this.routeService.toComposer();
  }

}
