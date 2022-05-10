import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsModule } from './../products/products.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartItemComponent } from './_components/cart-item/cart-item.component';
import { CartPageComponent } from './_components/cart-page/cart-page.component';

@NgModule({
  declarations: [CartPageComponent, CartItemComponent],
  imports: [CommonModule, CartRoutingModule, ProductsModule],
})
export class CartModule { }
