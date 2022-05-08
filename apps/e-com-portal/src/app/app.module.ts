import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './_components/app/app.component';
import { NotFoundPageComponent } from './_components/not-found-page/not-found-page.component';
import { PrimaryNavbarComponent } from './_components/primary-navbar/primary-navbar.component';
import { HomeModule } from './_modules/home/home.module';
import { ProductsModule } from './_modules/products/products.module';
import { ProductsMockDataService } from './_services/products-mock-data.service';
@NgModule({
  declarations: [
    AppComponent,
    PrimaryNavbarComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProductsModule],
  providers: [
    { provide: 'ENV', useValue: environment },
    ProductsMockDataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
