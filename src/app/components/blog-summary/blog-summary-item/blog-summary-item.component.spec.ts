import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSummaryItemComponent } from './blog-summary-item.component';

describe('BlogSummaryItemComponent', () => {
  let component: BlogSummaryItemComponent;
  let fixture: ComponentFixture<BlogSummaryItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogSummaryItemComponent]
    });
    fixture = TestBed.createComponent(BlogSummaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
