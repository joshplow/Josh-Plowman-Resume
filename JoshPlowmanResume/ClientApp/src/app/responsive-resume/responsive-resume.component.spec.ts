import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveResumeComponent } from './responsive-resume.component';

describe('ResponsiveResumeComponent', () => {
  let component: ResponsiveResumeComponent;
  let fixture: ComponentFixture<ResponsiveResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
