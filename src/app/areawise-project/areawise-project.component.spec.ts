import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreawiseProjectComponent } from './areawise-project.component';

describe('AreawiseProjectComponent', () => {
  let component: AreawiseProjectComponent;
  let fixture: ComponentFixture<AreawiseProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreawiseProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreawiseProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
