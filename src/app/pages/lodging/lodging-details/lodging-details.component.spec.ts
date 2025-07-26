import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingDetailsComponent } from './lodging-details.component';

describe('LodgingDetailsComponent', () => {
  let component: LodgingDetailsComponent;
  let fixture: ComponentFixture<LodgingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LodgingDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LodgingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
