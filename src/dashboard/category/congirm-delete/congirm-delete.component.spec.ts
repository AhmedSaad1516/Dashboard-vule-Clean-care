import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongirmDeleteComponent } from './congirm-delete.component';

describe('CongirmDeleteComponent', () => {
  let component: CongirmDeleteComponent;
  let fixture: ComponentFixture<CongirmDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongirmDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongirmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
