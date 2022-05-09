import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './_components/app/app.component';
import { ModalComponent } from './_components/modal/modal.component';
import { NotFoundPageComponent } from './_components/not-found-page/not-found-page.component';
import { PrimaryNavbarComponent } from './_components/primary-navbar/primary-navbar.component';
import { HomeModule } from './_modules/home/home.module';
import { ProductsModule } from './_modules/products/products.module';
import { storeFeatures } from './_store/app.state';
import { ProductsStoreEffects } from './_store/products/products.effects';

const EFFECTS = [
  ProductsStoreEffects
]

@NgModule({
  declarations: [
    AppComponent,
    PrimaryNavbarComponent,
    NotFoundPageComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProductsModule,
    StoreModule.forRoot(storeFeatures),
    EffectsModule.forRoot([...EFFECTS])
  ],
  providers: [
    { provide: 'ENV', useValue: environment },
    // ProductsMockDataService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
