import { createReducer, on } from '@ngrx/store';
import { Product } from './../../_models/product-model';
import { addItemToCart } from './cart.actions';
export enum CartStatus {
  LOADING = "LOADING",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
  PENDING = "PENDING"
}

export interface CartState {
  status: CartStatus,
  message: string,
  items: Pick<Product, 'sku'>[],
}

const cartInitState: CartState = {
  status: CartStatus.PENDING,
  message: "Cart has no Items",
  items: []
}

export const cartStoreReducer = createReducer(
  cartInitState,
  on(
    addItemToCart,
    (state: CartState, payload) => ({
      ...state,
      items: [...state.items, payload],
      status: CartStatus.SUCCESS,
      message: "Adding to Cart"
    })
  )
)
