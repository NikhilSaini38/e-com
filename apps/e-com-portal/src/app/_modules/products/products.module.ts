import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductTileComponent } from './_components/product-tile/product-tile.component';
import { ProductsPageComponent } from './_components/products-page/products-page.component';

@NgModule({
  declarations: [ProductsPageComponent, ProductTileComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
