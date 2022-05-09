import { createAction, props } from '@ngrx/store';
import { Product } from './../../_models/product-model';
export enum cartActionKeys {
  addItemToCart = "[Shopping Cart] Add Item",
  addItemToCartSuccessful = "[Shopping Cart] Item added",
  addItemToCartFailure = "[Shopping Cart] Item could not be added",
}

export const addItemToCart = createAction(cartActionKeys.addItemToCart, props<Pick<Product, "sku">>())
export const addItemToCartSuccess = createAction(cartActionKeys.addItemToCart)
export const addItemToCartFailure = createAction(cartActionKeys.addItemToCart)
