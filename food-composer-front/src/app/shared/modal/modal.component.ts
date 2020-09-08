import { Component, OnInit, Input } from '@angular/core';
import { ComposerBean } from 'src/app/models/composer-bean';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalBean: ComposerBean;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {

    console.log("modal is open");

  }

}
