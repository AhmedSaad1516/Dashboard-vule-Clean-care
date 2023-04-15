import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtermsandconditionsComponent } from './addtermsandconditions.component';

describe('AddtermsandconditionsComponent', () => {
  let component: AddtermsandconditionsComponent;
  let fixture: ComponentFixture<AddtermsandconditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtermsandconditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtermsandconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
