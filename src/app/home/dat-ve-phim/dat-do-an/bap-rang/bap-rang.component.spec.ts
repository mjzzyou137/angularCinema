import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BapRangComponent } from './bap-rang.component';

describe('BapRangComponent', () => {
  let component: BapRangComponent;
  let fixture: ComponentFixture<BapRangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BapRangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BapRangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
