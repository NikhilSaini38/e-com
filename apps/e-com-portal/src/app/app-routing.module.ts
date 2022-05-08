import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './_components/not-found-page/not-found-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./_modules/home/home.module').then(m => m.HomeModule) },
  { path: 'products', loadChildren: () => import('./_modules/products/products.module').then(m => m.ProductsModule) },
  { path: "**", component: NotFoundPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking', useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
