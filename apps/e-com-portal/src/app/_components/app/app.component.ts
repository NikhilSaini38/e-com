import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../_store/app.state';
import { loadProducts } from './../../_store/products/products.actions';

@Component({
  selector: 'ecp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'e-com-portal';

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this._store.dispatch(loadProducts())
  }
}
