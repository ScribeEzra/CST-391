import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCreatureComponent } from './display-creature.component';

describe('DisplayCreatureComponent', () => {
  let component: DisplayCreatureComponent;
  let fixture: ComponentFixture<DisplayCreatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCreatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCreatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
