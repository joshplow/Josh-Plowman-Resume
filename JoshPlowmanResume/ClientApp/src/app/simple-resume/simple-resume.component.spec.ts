import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleResumeComponent } from './simple-resume.component';

describe('SimpleResumeComponent', () => {
  let component: SimpleResumeComponent;
  let fixture: ComponentFixture<SimpleResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
