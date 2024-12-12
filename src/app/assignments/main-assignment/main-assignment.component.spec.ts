import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAssignmentComponent } from './main-assignment.component';

describe('MainAssignmentComponent', () => {
  let component: MainAssignmentComponent;
  let fixture: ComponentFixture<MainAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
