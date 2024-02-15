import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouthEditComponent } from './abouth-edit.component';

describe('AbouthEditComponent', () => {
  let component: AbouthEditComponent;
  let fixture: ComponentFixture<AbouthEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbouthEditComponent]
    });
    fixture = TestBed.createComponent(AbouthEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
