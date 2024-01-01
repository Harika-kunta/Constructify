import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccBlocksComponent } from './acc-blocks.component';

describe('AccBlocksComponent', () => {
  let component: AccBlocksComponent;
  let fixture: ComponentFixture<AccBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccBlocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
