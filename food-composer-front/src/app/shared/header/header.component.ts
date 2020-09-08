import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { RouteService } from 'src/app/service/route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title : string = '';

  constructor(private authService : AuthService, private routeService: RouteService) { }

  ngOnInit(): void {
  }

  logout() : void {
    this.authService.logout();
  }

  toIndex() :void {
    this.routeService.toIndex();
  }

}
