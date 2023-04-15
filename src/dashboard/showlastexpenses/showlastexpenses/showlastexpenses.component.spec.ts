import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlastexpensesComponent } from './showlastexpenses.component';

describe('ShowlastexpensesComponent', () => {
  let component: ShowlastexpensesComponent;
  let fixture: ComponentFixture<ShowlastexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowlastexpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowlastexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
