import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { ProductsMockDataService } from './products-mock-data.service';


describe('ProductsMockDataService', () => {
  let service: ProductsMockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductsMockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return MockData', async () => {
    service.getMockData().subscribe(mockData => expect(mockData.length).toBeGreaterThan(0))
  })
});
