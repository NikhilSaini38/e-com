import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { firstValueFrom } from 'rxjs';
import { ModalService } from './modal.service';

describe('Service: Modal', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be initialized with state.opened = false', async () => {
    const state = await firstValueFrom(service.watch())
    expect(state.opened).toBe(false)
    expect(state.productName).toBe("")
  })

  it('should be initialized with state.opened = true with default value', async () => {
    service.open()
    const state = await firstValueFrom(service.watch())
    expect(state.opened).toBe(true)
    expect(state.productName).toBe("Product")
  })

  it('should be initialized with state.opened = true with value "Test" passed in args', async () => {
    service.open("Test")
    const state = await firstValueFrom(service.watch())
    expect(state.opened).toBe(true);
    expect(state.productName).toBe("Test")
  })
});
