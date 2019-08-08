import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuocNgotComponent } from './nuoc-ngot.component';

describe('NuocNgotComponent', () => {
  let component: NuocNgotComponent;
  let fixture: ComponentFixture<NuocNgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuocNgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuocNgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
