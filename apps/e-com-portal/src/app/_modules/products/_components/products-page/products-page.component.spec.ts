import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { storeFeatures } from './../../../../_store/app.state';
import { ProductsPageComponent } from './products-page.component';


describe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsPageComponent],
      imports: [
        StoreModule.forRoot(storeFeatures),
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have products observable in it', () => {
    expect(component.products).toBeInstanceOf(Observable);
  });
});
