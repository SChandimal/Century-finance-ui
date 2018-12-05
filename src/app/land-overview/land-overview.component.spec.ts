import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandOverviewComponent } from './land-overview.component';

describe('LandOverviewComponent', () => {
  let component: LandOverviewComponent;
  let fixture: ComponentFixture<LandOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
