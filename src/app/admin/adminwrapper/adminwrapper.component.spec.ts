import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminwrapperComponent } from './adminwrapper.component';

describe('AdminwrapperComponent', () => {
  let component: AdminwrapperComponent;
  let fixture: ComponentFixture<AdminwrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminwrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
