import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpheresCanvasComponent } from './spheres-canvas.component';

describe('SpheresCanvasComponent', () => {
  let component: SpheresCanvasComponent;
  let fixture: ComponentFixture<SpheresCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpheresCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpheresCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
