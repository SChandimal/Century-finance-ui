import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesProfitabilityComponent } from './sales-profitability.component';

describe('SalesProfitabilityComponent', () => {
  let component: SalesProfitabilityComponent;
  let fixture: ComponentFixture<SalesProfitabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesProfitabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesProfitabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
