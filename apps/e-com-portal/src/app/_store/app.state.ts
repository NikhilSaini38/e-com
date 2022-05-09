import { CartState, cartStoreReducer } from './cart/cart.reducer';
import { productsStoreReducer, ProductsStoreState } from './products/products.reducer';

export interface AppState {
  productsStore: ProductsStoreState,
  cartStore: CartState
}

export const storeFeatures = {
  productsStore: productsStoreReducer,
  cartStore: cartStoreReducer
}
