import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatVePhimComponent } from './dat-ve-phim.component';

describe('DatVePhimComponent', () => {
  let component: DatVePhimComponent;
  let fixture: ComponentFixture<DatVePhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatVePhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatVePhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
