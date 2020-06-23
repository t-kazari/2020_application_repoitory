import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string = 'Food Composer TOP PAGE'

  newsList: News[];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.newsList = this.homeService.request();
    if(this.newsList == null) {
      window.console.log("no data");
    }
  }


}
