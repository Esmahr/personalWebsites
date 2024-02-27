import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSummaryItemComponent } from './project-summary-item.component';

describe('ProjectSummaryItemComponent', () => {
  let component: ProjectSummaryItemComponent;
  let fixture: ComponentFixture<ProjectSummaryItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectSummaryItemComponent]
    });
    fixture = TestBed.createComponent(ProjectSummaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
