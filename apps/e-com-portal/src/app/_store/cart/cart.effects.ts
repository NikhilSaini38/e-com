import { Injectable } from "@angular/core";
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Injectable()
export class CartEffects {
  constructor(
    private actions: Actions,
    private store: Store<AppState>
  ) { }
}
