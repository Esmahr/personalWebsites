import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnownTechnologiesComponent } from './known-technologies.component';

describe('KnownTechnologiesComponent', () => {
  let component: KnownTechnologiesComponent;
  let fixture: ComponentFixture<KnownTechnologiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnownTechnologiesComponent]
    });
    fixture = TestBed.createComponent(KnownTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
