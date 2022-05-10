import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from "../../_services/modal.service";
import { ModalOptions } from './../../_services/modal.service';



@Component({
  selector: 'ecp-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
})
export class ModalComponent implements OnInit {

  modalState$: Observable<ModalOptions> = this.modalService.watch();

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() { }

  close() {
    this.modalService.close();
  }
}
