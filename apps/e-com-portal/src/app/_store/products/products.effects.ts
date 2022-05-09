import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, from, map, of, switchMap } from "rxjs";
import { Product } from './../../_models/product-model';
import { ProductsMockDataService } from './../../_services/products-mock-data.service';
import { AppState } from './../app.state';
import { loadProducts, loadProductsFailure, loadProductsSuccess } from './products.actions';

@Injectable()
export class ProductsStoreEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private productsMock: ProductsMockDataService
  ) { }

  loadProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadProducts),
      switchMap(
        () =>
          from(this.productsMock.getMockData()).pipe(
            map(
              (products: Product[]) => loadProductsSuccess({ message: "Products Loaded Successfully", products: products })
            ),
            catchError(
              error => of(loadProductsFailure({ message: `Could not load Products: ${error.toString()}` }))
            )
          )
      )
    )
  )

}
