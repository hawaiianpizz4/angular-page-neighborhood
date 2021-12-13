import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarinteresComponent } from './lugarinteres.component';

describe('LugarinteresComponent', () => {
  let component: LugarinteresComponent;
  let fixture: ComponentFixture<LugarinteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugarinteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarinteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
