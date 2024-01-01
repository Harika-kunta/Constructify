import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VasesComponent } from './vases.component';

describe('VasesComponent', () => {
  let component: VasesComponent;
  let fixture: ComponentFixture<VasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
