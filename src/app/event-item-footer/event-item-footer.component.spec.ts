import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventItemFooterComponent } from './event-item-footer.component';

describe('EventItemFooterComponent', () => {
  let component: EventItemFooterComponent;
  let fixture: ComponentFixture<EventItemFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventItemFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventItemFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
