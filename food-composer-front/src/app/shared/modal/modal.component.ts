import { Component, OnInit, Input } from '@angular/core';
import { ComposerBean } from 'src/app/models/composer-bean';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

/**
 * モーダルコンポーネント
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  //店舗情報
  @Input() modalBean: ComposerBean;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {

    console.log("modal is open");

  }

}
