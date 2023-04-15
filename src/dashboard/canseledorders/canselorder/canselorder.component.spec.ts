import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanselorderComponent } from './canselorder.component';

describe('CanselorderComponent', () => {
  let component: CanselorderComponent;
  let fixture: ComponentFixture<CanselorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanselorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanselorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
