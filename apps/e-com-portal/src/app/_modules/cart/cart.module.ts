import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsModule } from './../products/products.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartPageComponent } from './_components/cart-page/cart-page.component';

@NgModule({
  declarations: [CartPageComponent],
  imports: [CommonModule, CartRoutingModule, ProductsModule],
})
export class CartModule { }
