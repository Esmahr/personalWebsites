import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnownTechnologiesItemComponent } from './known-technologies-item.component';

describe('KnownTechnologiesItemComponent', () => {
  let component: KnownTechnologiesItemComponent;
  let fixture: ComponentFixture<KnownTechnologiesItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnownTechnologiesItemComponent]
    });
    fixture = TestBed.createComponent(KnownTechnologiesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
