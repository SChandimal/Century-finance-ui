import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentCostsComponent } from './development-costs.component';

describe('DevelopmentCostsComponent', () => {
  let component: DevelopmentCostsComponent;
  let fixture: ComponentFixture<DevelopmentCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
