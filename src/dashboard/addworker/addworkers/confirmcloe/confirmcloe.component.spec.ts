import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmcloeComponent } from './confirmcloe.component';

describe('ConfirmcloeComponent', () => {
  let component: ConfirmcloeComponent;
  let fixture: ComponentFixture<ConfirmcloeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmcloeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmcloeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
