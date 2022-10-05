import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatMultiSelectDropdownComponent } from './ngx-mat-multi-select-dropdown.component';

describe('NgxMatMultiSelectDropdownComponent', () => {
  let component: NgxMatMultiSelectDropdownComponent;
  let fixture: ComponentFixture<NgxMatMultiSelectDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatMultiSelectDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatMultiSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
