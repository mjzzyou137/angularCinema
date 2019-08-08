import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatVeHomeComponent } from './dat-ve-home.component';

describe('DatVeHomeComponent', () => {
  let component: DatVeHomeComponent;
  let fixture: ComponentFixture<DatVeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatVeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatVeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
