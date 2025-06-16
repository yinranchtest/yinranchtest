import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheInnComponent } from './the-inn.component';

describe('TheInnComponent', () => {
  let component: TheInnComponent;
  let fixture: ComponentFixture<TheInnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheInnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheInnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
