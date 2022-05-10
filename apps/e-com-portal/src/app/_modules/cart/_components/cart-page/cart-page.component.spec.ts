import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { storeFeatures } from './../../../../_store/app.state';
import { CartPageComponent } from './cart-page.component';


describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartPageComponent],
      imports: [
        StoreModule.forRoot(storeFeatures)
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have cartItems observable', () => {
    expect(component.cartItems).toBeInstanceOf(Observable);
  });
});
