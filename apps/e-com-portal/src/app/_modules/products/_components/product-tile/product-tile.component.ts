import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { ModalService } from './../../../../_services/modal.service';
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

  product$ = this._store.select(selectProductBySku(this.sku));

  constructor(
    // private _bsModalRef: BsModalRef,
    private _store: Store<AppState>,
    private _modalSvc: ModalService
  ) { }

  ngOnInit(): void {
    this.product$ = this._store.select(selectProductBySku(this.sku));
  }

  async addToCart() {
    const state = await firstValueFrom(this.product$);
    if (state) {
      this._store.dispatch(addItemToCart({ sku: this.sku }));
      this._modalSvc.open(state.name);
    }
  }
}
