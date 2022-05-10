import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ModalOptions = {
  productName: string,
  opened: boolean
}

const modalInitState: ModalOptions = {
  productName: "",
  opened: false
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private state: BehaviorSubject<ModalOptions> = new BehaviorSubject(modalInitState)

  watch(): Observable<ModalOptions> {
    return this.state.asObservable();
  }

  open(productName: string = "Product") {
    this.state.next({ ...this.state.getValue(), opened: true, productName });
  }

  close() {
    this.state.next({ ...this.state.getValue(), opened: false });
  }
}
