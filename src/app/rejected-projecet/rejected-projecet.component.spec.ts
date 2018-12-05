import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedProjecetComponent } from './rejected-projecet.component';

describe('RejectedProjecetComponent', () => {
  let component: RejectedProjecetComponent;
  let fixture: ComponentFixture<RejectedProjecetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedProjecetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedProjecetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
