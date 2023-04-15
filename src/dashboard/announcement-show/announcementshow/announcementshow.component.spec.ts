import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementshowComponent } from './announcementshow.component';

describe('AnnouncementshowComponent', () => {
  let component: AnnouncementshowComponent;
  let fixture: ComponentFixture<AnnouncementshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
