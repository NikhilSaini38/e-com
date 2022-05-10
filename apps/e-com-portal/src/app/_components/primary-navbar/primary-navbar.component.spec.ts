import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { beforeEach, describe, expect, it } from "@jest/globals";
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { storeFeatures } from './../../_store/app.state';
import { PrimaryNavbarComponent } from './primary-navbar.component';

describe('PrimaryNavbarComponent', () => {
  let component: PrimaryNavbarComponent;
  let fixture: ComponentFixture<PrimaryNavbarComponent>;
  let debugElement: DebugElement;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimaryNavbarComponent],
      imports: [
        StoreModule.forRoot(storeFeatures),
        RouterTestingModule
      ],
      providers: [
        { provide: 'ENV', useValue: environment },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryNavbarComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create primary navbar', () => {
    expect(component).toBeTruthy();
  });

  it('Should have an observable called cartItems', () => {
    expect(component.cartItems).toBeInstanceOf(Observable)
  })

  it('should have logo img', () => {
    expect(debugElement.query(By.css('img.logo'))).toBeDefined();
  });
  it('should have logo img src assets/e-com-logo.png', () => {
    expect(debugElement.query(By.css('img.logo[src="assets/e-com-logo.png"]'))).toBeDefined();
  });
  it('should have logo img alt text of "Company Logo"', () => {
    expect(debugElement.query(By.css('img.logo[alt="Company Logo"]'))).toBeDefined();
  });

  it('All nav Buttons have appropriate text', () => {
    const buttons = ["home", "products", "cart(0)"]
    expect(
      Array.from(nativeElement.querySelectorAll('button')).filter(
        element => {
          if (element.textContent) {
            return buttons.includes(element.textContent.toLowerCase())
          } else return false
        }
      ).length
    ).toEqual(buttons.length)
  })
});
