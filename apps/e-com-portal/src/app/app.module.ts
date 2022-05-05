import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EComUiModule } from '@e-com/ui';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomeComponent } from './_components/home/home.component';
import { PrimaryNavbarComponent } from './_components/primary-navbar/primary-navbar.component';
import { NotFoundPageComponent } from './_components/not-found-page/not-found-page.component';
import { CompareComponent } from './_components/compare/compare.component';
@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    PrimaryNavbarComponent,
    HomeComponent,
    NotFoundPageComponent,
    CompareComponent,
  ],
  imports: [BrowserModule, EComUiModule, AppRoutingModule],
  providers: [{ provide: 'ENV', useValue: environment }],
  bootstrap: [AppComponent],
})
export class AppModule {}
