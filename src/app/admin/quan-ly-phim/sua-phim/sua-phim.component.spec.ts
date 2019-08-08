import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaPhimComponent } from './sua-phim.component';

describe('SuaPhimComponent', () => {
  let component: SuaPhimComponent;
  let fixture: ComponentFixture<SuaPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
