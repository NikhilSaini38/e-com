import { TestBed } from '@angular/core/testing';

import { ProductsMockDataService } from './products-mock-data.service';

describe('ProductsMockDataService', () => {
  let service: ProductsMockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsMockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
