import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatDoAnComponent } from './dat-do-an.component';

describe('DatDoAnComponent', () => {
  let component: DatDoAnComponent;
  let fixture: ComponentFixture<DatDoAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatDoAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatDoAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
