import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuDatVeComponent } from './lich-su-dat-ve.component';

describe('LichSuDatVeComponent', () => {
  let component: LichSuDatVeComponent;
  let fixture: ComponentFixture<LichSuDatVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichSuDatVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuDatVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
