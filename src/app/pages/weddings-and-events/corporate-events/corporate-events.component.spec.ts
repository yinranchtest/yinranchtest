import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateEventsComponent } from './corporate-events.component';

describe('CorporateEventsComponent', () => {
  let component: CorporateEventsComponent;
  let fixture: ComponentFixture<CorporateEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
