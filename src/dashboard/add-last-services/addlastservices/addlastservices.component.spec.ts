import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlastservicesComponent } from './addlastservices.component';

describe('AddlastservicesComponent', () => {
  let component: AddlastservicesComponent;
  let fixture: ComponentFixture<AddlastservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlastservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddlastservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
