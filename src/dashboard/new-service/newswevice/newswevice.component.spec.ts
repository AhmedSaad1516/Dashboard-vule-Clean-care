import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsweviceComponent } from './newswevice.component';

describe('NewsweviceComponent', () => {
  let component: NewsweviceComponent;
  let fixture: ComponentFixture<NewsweviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsweviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsweviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
