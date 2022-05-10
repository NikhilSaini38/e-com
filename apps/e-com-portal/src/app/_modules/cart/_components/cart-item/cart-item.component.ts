import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../../../_store/app.state';
import { selectProductBySku } from './../../../../_store/products/products.selectors';

@Component({
  selector: 'ecp-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {

  /**
   * Product Sku Code
   */
  @Input() sku = "";

  cartItem$ = this._store.select(selectProductBySku(this.sku));

  constructor(
    private _store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.cartItem$ = this._store.select(selectProductBySku(this.sku))
  }
}
