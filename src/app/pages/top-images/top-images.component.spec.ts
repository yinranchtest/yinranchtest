import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopImagesComponent } from './top-images.component';

describe('TopImagesComponent', () => {
  let component: TopImagesComponent;
  let fixture: ComponentFixture<TopImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
