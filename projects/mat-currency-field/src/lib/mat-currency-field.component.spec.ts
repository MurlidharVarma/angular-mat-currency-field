import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCurrencyFieldComponent } from './mat-currency-field.component';

describe('MatCurrencyFieldComponent', () => {
  let component: MatCurrencyFieldComponent;
  let fixture: ComponentFixture<MatCurrencyFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCurrencyFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCurrencyFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
