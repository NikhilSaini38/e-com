import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../../../_store/app.state';
import { selectCartItems } from './../../../../_store/cart/cart.selectors';

@Component({
  selector: 'ecp-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {

  cartItems = this._store.select(selectCartItems)

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void { }
}
