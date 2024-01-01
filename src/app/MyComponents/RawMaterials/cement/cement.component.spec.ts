import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CementComponent } from './cement.component';

describe('CementComponent', () => {
  let component: CementComponent;
  let fixture: ComponentFixture<CementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
