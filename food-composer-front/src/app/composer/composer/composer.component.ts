import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.css']
})
export class ComposerComponent implements OnInit {

  public title: string = 'Composer';

  constructor() { }

  ngOnInit(): void {
  }

}
