import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';


const routes: Routes = [
  { path: '/' },
  { path: '/product/:sku' },
  { path: 'compare' },
  { path: "**" }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
