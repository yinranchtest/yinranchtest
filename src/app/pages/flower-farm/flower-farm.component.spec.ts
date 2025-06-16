import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerFarmComponent } from './flower-farm.component';

describe('FlowerFarmComponent', () => {
  let component: FlowerFarmComponent;
  let fixture: ComponentFixture<FlowerFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerFarmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowerFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
