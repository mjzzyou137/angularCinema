import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongNghePhimComponent } from './cong-nghe-phim.component';

describe('CongNghePhimComponent', () => {
  let component: CongNghePhimComponent;
  let fixture: ComponentFixture<CongNghePhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongNghePhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongNghePhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
