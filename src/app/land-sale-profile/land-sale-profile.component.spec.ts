import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandSaleProfileComponent } from './land-sale-profile.component';

describe('LandSaleProfileComponent', () => {
  let component: LandSaleProfileComponent;
  let fixture: ComponentFixture<LandSaleProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandSaleProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandSaleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
