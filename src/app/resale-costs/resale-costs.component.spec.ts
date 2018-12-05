import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaleCostsComponent } from './resale-costs.component';

describe('ResaleCostsComponent', () => {
  let component: ResaleCostsComponent;
  let fixture: ComponentFixture<ResaleCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResaleCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResaleCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
