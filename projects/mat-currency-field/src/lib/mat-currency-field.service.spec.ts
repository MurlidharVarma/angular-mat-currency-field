import { TestBed } from '@angular/core/testing';

import { MatCurrencyFieldService } from './mat-currency-field.service';

describe('MatCurrencyFieldService', () => {
  let service: MatCurrencyFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatCurrencyFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
