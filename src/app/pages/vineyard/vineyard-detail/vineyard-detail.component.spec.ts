import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VineyardDetailComponent } from './vineyard-detail.component';

describe('VineyardDetailComponent', () => {
  let component: VineyardDetailComponent;
  let fixture: ComponentFixture<VineyardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VineyardDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VineyardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
