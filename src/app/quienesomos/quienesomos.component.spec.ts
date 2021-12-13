import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesomosComponent } from './quienesomos.component';

describe('QuienesomosComponent', () => {
  let component: QuienesomosComponent;
  let fixture: ComponentFixture<QuienesomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienesomosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienesomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
