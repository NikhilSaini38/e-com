import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../_store/app.state';
import { selectCartItems } from './../../_store/cart/cart.selectors';

@Component({
  selector: 'ecp-primary-navbar',
  templateUrl: './primary-navbar.component.html',
  styleUrls: ['./primary-navbar.component.scss'],
})
export class PrimaryNavbarComponent {

  cartItems = this.store.select(selectCartItems);

  constructor(
    private store: Store<AppState>,
    @Inject('ENV') public env: { [key: string]: string }
  ) { }


}
