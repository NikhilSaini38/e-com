import { Component, OnInit } from '@angular/core';
import { ProductsMockDataService } from './../../../../_services/products-mock-data.service';

@Component({
  selector: 'ecp-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  constructor(private mockDataService: ProductsMockDataService) { }

  products = this.mockDataService.getMockData();

  ngOnInit(): void { }
}
