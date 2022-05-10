import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './../../../../_components/app/app.component';
import { storeFeatures } from './../../../../_store/app.state';
import { ProductTileComponent } from './product-tile.component';


describe('ProductTileComponent', () => {
  let component: ProductTileComponent;
  let fixture: ComponentFixture<ProductTileComponent>;
  let nativeElement: HTMLElement;
  let debugElement: DebugElement;
  let appComponent: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductTileComponent],
      imports: [
        StoreModule.forRoot(storeFeatures),
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    appComponent = TestBed.createComponent(AppComponent).componentInstance;
    fixture = TestBed.createComponent(ProductTileComponent);
    nativeElement = fixture.nativeElement;
    debugElement = fixture.debugElement;
    fixture = TestBed.createComponent(ProductTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create div with class image-container', () => {
    expect(nativeElement.querySelector('div.image-container>img')).toBeTruthy();
  });

  it('should create div with class button-group with 2 buttons', () => {
    appComponent.ngOnInit();
    expect(debugElement.queryAll(By.css('div.button-group > button')).length).toBe(2);
  });
});
