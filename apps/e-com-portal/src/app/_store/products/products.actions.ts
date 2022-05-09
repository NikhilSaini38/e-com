import { createAction, props } from "@ngrx/store";
import { ProductsStoreState } from './products.reducer';

export enum ProductActionKeys {
  loadProducts = "[Products] Load products ",
  loadProductsSuccess = "[Products] Products loaded",
  loadProductsFailure = "[Products] Products could not be loaded",
  addProducts = "[Products] Add Products"
}

export const loadProducts = createAction(ProductActionKeys.loadProducts);
export const loadProductsSuccess = createAction(ProductActionKeys.loadProductsSuccess, props<Omit<ProductsStoreState, 'status'>>());
export const loadProductsFailure = createAction(ProductActionKeys.loadProductsFailure, props<Pick<ProductsStoreState, 'message'>>());
export const addProducts = createAction(ProductActionKeys.addProducts, props<Pick<ProductsStoreState, 'products'>>());

