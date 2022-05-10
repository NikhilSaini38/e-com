import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from "@jest/globals";
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { storeFeatures } from './../../../../_store/app.state';
import { CartItemComponent } from './cart-item.component';


describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartItemComponent],
      imports: [
        StoreModule.forRoot(storeFeatures),
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create cart-item component', () => {
    expect(component).toBeDefined();
  });

  it('should contain items as an selector from store', () => {
    expect(component.cartItem$).toBeInstanceOf(Observable);
  });

  it('main div exists', () => {
    expect(fixture.nativeElement.querySelector("div.cart-item")).toBeDefined();
  });

  it('image container exists with image', () => {
    expect(fixture.nativeElement.querySelector("div.image-container>img")).toBeDefined();
  });
});
