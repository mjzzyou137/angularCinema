import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUuDaiComponent } from './item-uu-dai.component';

describe('ItemUuDaiComponent', () => {
  let component: ItemUuDaiComponent;
  let fixture: ComponentFixture<ItemUuDaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemUuDaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUuDaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
