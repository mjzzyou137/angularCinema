import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UuDaiComponent } from './uu-dai.component';

describe('UuDaiComponent', () => {
  let component: UuDaiComponent;
  let fixture: ComponentFixture<UuDaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UuDaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UuDaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
