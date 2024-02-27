import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSummaryComponent } from './project-summary.component';

describe('ProjectSummaryComponent', () => {
  let component: ProjectSummaryComponent;
  let fixture: ComponentFixture<ProjectSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectSummaryComponent]
    });
    fixture = TestBed.createComponent(ProjectSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
