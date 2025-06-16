import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOccasionsComponent } from './special-occasions.component';

describe('SpecialOccasionsComponent', () => {
  let component: SpecialOccasionsComponent;
  let fixture: ComponentFixture<SpecialOccasionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialOccasionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialOccasionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
