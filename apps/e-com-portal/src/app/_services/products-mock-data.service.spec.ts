import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { lastValueFrom } from 'rxjs';
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

  it('should return MockData', async () => {
    const mockData = await lastValueFrom(service.getMockData())
    expect(mockData.length).toBeGreaterThan(0)
  })
});
