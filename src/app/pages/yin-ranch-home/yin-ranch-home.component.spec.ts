import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YinRanchHomeComponent } from './yin-ranch-home.component';

describe('YinRanchHomeComponent', () => {
  let component: YinRanchHomeComponent;
  let fixture: ComponentFixture<YinRanchHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YinRanchHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YinRanchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
