import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { NotFoundPageComponent } from './_components/not-found-page/not-found-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'product/:sku' },
  // { path: 'compare' },
  { path: "**", component: NotFoundPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking', useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
