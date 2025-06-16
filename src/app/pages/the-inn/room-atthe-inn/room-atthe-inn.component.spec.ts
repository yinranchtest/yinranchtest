import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAttheInnComponent } from './room-atthe-inn.component';

describe('RoomAttheInnComponent', () => {
  let component: RoomAttheInnComponent;
  let fixture: ComponentFixture<RoomAttheInnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomAttheInnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomAttheInnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
