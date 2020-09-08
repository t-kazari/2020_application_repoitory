import { Injectable } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ComposerBean } from 'src/app/models/composer-bean'
import { ModalComponent } from '../shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  openModal(bean: ComposerBean): Promise<boolean> {
    const modalRef = this.modalService.open(ModalComponent);
    const component = modalRef.componentInstance as ModalComponent;
    if(component) {
      component.modalBean = bean;
    }

    return modalRef.result.then(result => {
      return true;
    }, reason => {
      return false;
    });
  }

  closeModal(bean: ComposerBean) {

  }

}
