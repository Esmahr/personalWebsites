import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockquoteComponent } from './blockquote.component';

describe('BlockquoteComponent', () => {
  let component: BlockquoteComponent;
  let fixture: ComponentFixture<BlockquoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockquoteComponent]
    });
    fixture = TestBed.createComponent(BlockquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
