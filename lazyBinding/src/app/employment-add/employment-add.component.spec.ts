import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentAddComponent } from './employment-add.component';

describe('EmploymentAddComponent', () => {
  let component: EmploymentAddComponent;
  let fixture: ComponentFixture<EmploymentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
