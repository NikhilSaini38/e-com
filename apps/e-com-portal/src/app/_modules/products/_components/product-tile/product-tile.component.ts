import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../../../_store/app.state';
import { addItemToCart } from './../../../../_store/cart/cart.actions';
import { selectProductBySku } from './../../../../_store/products/products.selectors';
@Component({
  selector: 'ecp-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss'],
})
export class ProductTileComponent implements OnInit {

  @Input() sku = "";

  product$ = this.store.select(selectProductBySku(this.sku));

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.product$ = this.store.select(selectProductBySku(this.sku));
  }

  addToCart() {
    this.store.dispatch(addItemToCart({ sku: this.sku }));
  }
}
