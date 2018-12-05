import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingCostsComponent } from './advertising-costs.component';

describe('AdvertisingCostsComponent', () => {
  let component: AdvertisingCostsComponent;
  let fixture: ComponentFixture<AdvertisingCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisingCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
