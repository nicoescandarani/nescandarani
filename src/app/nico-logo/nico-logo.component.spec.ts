import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicoLogoComponent } from './nico-logo.component';

describe('NicoLogoComponent', () => {
  let component: NicoLogoComponent;
  let fixture: ComponentFixture<NicoLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NicoLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NicoLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
