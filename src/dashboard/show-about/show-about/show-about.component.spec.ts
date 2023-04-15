import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAboutComponent } from './show-about.component';

describe('ShowAboutComponent', () => {
  let component: ShowAboutComponent;
  let fixture: ComponentFixture<ShowAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
