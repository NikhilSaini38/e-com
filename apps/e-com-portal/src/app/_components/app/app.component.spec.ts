import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { StoreModule } from '@ngrx/store';
import { storeFeatures } from './../../_store/app.state';
import { ModalComponent } from './../modal/modal.component';
import { PrimaryNavbarComponent } from './../primary-navbar/primary-navbar.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(storeFeatures)
      ],
      declarations: [
        PrimaryNavbarComponent,
        ModalComponent,
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'e-com-portal'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('e-com-portal');
  });
});
