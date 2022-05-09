import { createReducer, on } from '@ngrx/store';
import { Product } from './../../_models/product-model';
import { addProducts, loadProducts, loadProductsFailure, loadProductsSuccess } from './products.actions';

export enum ProductsStoreStatus {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  PENDING = "PENDING"
}

export interface ProductsStoreState {
  status: ProductsStoreStatus,
  message: string,
  products: Product[]
}

const productsStoreInitialState: ProductsStoreState = {
  status: ProductsStoreStatus.PENDING,
  message: "Store Not Initialized",
  products: []
}


export const productsStoreReducer = createReducer(
  productsStoreInitialState,
  on(
    loadProducts,
    (state: ProductsStoreState) => ({
      ...state,
      status: ProductsStoreStatus.LOADING,
      message: "Loading Product List",
    })
  ),
  on(
    loadProductsSuccess,
    (state: ProductsStoreState, payload: Omit<ProductsStoreState, 'status'>) => ({
      ...state,
      status: ProductsStoreStatus.SUCCESS,
      message: payload.message,
      products: payload.products
    })
  ),
  on(
    loadProductsFailure,
    (state: ProductsStoreState) => ({
      ...state,
      status: ProductsStoreStatus.ERROR,
      message: "Loading Product List",
    })
  ),
  on(
    addProducts,
    (state: ProductsStoreState) => ({
      ...state,
      status: ProductsStoreStatus.LOADING,
      message: "Loading Product List",
    })
  ),
)
