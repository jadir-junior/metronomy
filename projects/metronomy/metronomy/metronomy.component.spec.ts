import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetronomyComponent } from './metronomy.component';

describe('MetronomyComponent', () => {
  let component: MetronomyComponent;
  let fixture: ComponentFixture<MetronomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetronomyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetronomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
