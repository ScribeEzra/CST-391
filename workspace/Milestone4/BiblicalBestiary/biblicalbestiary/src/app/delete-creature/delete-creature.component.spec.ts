import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCreatureComponent } from './delete-creature.component';

describe('DeleteCreatureComponent', () => {
  let component: DeleteCreatureComponent;
  let fixture: ComponentFixture<DeleteCreatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCreatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCreatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
