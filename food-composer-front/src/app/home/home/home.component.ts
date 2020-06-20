import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string = 'Food Composer TOP PAGE'

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.request();
  }


}
