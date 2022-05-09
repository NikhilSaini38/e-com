import { createSelector } from '@ngrx/store';
import { AppState } from './../app.state';
import { CartState } from './cart.reducer';

export const selectCartStore = (state: AppState) => state.cartStore;
export const selectCartItems = createSelector(
  selectCartStore,
  (cart: CartState) => cart.items
)
