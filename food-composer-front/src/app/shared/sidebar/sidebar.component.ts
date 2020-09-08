import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/service/route.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userName = "";

  constructor(private authService: AuthService, private routeService: RouteService) {}

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

  toRegist(): void {
    this.routeService.toRegist();
  }

}
