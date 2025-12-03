import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomImagesComponent } from './bottom-images.component';

describe('BottomImagesComponent', () => {
  let component: BottomImagesComponent;
  let fixture: ComponentFixture<BottomImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
