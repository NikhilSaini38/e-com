import { createSelector } from '@ngrx/store';
import { Product } from './../../_models/product-model';
import { AppState } from './../app.state';
import { ProductsStoreState } from './products.reducer';

export const selectProductsStore = (state: AppState) => state.productsStore

export const selectProducts = createSelector(
  selectProductsStore,
  (state: ProductsStoreState) => state.products
)

export const selectProductBySku = (sku: string) => createSelector(
  selectProducts,
  (products: Product[]) => products.find(product => product.sku === sku)
)
