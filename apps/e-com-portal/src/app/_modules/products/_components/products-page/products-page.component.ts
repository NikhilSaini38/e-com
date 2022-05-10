import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './../../../../_models/product-model';
import { AppState } from './../../../../_store/app.state';
import { selectProducts } from './../../../../_store/products/products.selectors';

@Component({
  selector: 'ecp-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {

  products: Observable<Product[]> = this._store.select(selectProducts);

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void { }

}
