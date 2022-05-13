import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Product = {
  sku: string,
  name: string,
  price: number,
  rrp: number,
  image: string
}
@Injectable({
  providedIn: 'root'
})
export class ProductsMockDataService {
  constructor(private http: HttpClient) { }
  getMockData(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/mock-products.json');
  }
}
