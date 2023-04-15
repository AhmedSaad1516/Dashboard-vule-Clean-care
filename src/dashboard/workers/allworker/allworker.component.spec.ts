import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllworkerComponent } from './allworker.component';

describe('AllworkerComponent', () => {
  let component: AllworkerComponent;
  let fixture: ComponentFixture<AllworkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllworkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
