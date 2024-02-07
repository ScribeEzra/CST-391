import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCreaturesComponent } from './list-creatures.component';

describe('ListCreaturesComponent', () => {
  let component: ListCreaturesComponent;
  let fixture: ComponentFixture<ListCreaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCreaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCreaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
